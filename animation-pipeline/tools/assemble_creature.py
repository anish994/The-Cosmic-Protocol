#!/usr/bin/env python3
import argparse
import os
import re
import subprocess
from pathlib import Path

IMAGE_EXTS = {'.png', '.jpg', '.jpeg', '.webp'}

DEFAULT_SEARCH_DIRS = [
    # Prefer pre-sliced frames only
    'E:/game1/animation-pipeline/frames',
]
EXCLUDE_DIR_BASENAMES = {
    'output', 'gallery', 'node_modules', '.git', '.venv', '__pycache__', 'pictures and mp4s'
}


def natural_key(s: str):
    return [int(t) if t.isdigit() else t.lower() for t in re.split(r'(\d+)', s)]


def find_frames(tokens: list[str], search_dirs: list[Path]) -> list[Path]:
    toks = [t.lower() for t in tokens if t]
    found: list[Path] = []
    for base in search_dirs:
        if not base.exists():
            continue
        for root, dirs, files in os.walk(base):
            # prune excluded dirs
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIR_BASENAMES]
            for fn in files:
                p = Path(root) / fn
                if p.suffix.lower() not in IMAGE_EXTS:
                    continue
                full = str(p).lower()
                if all(t in full for t in toks):
                    found.append(p)
    # unique while preserving order by path
    seen = set()
    uniq = []
    for p in found:
        if p not in seen:
            uniq.append(p)
            seen.add(p)
    # sort naturally by filename then by parent
    uniq.sort(key=lambda p: (natural_key(p.name), natural_key(p.parent.as_posix())))
    return uniq


def write_concat_list(files: list[Path], fps: float, list_path: Path):
    with list_path.open('w', encoding='utf-8') as f:
        dur = 1.0 / fps
        for p in files:
            # Use forward slashes for ffmpeg friendliness
            q = p.as_posix()
            f.write(f"file '{q}'\n")
            f.write(f"duration {dur:.6f}\n")
        # last file listed again (concat demuxer quirk to set last duration)
        if files:
            f.write(f"file '{files[-1].as_posix()}'\n")


def run_ffmpeg(args_list: list[str]):
    print('> ffmpeg', ' '.join(args_list))
    subprocess.run(['ffmpeg', '-y', *args_list], check=True)


def main():
    ap = argparse.ArgumentParser(description='Assemble scattered frames into a smooth creature animation')
    ap.add_argument('--name', required=True, help='Creature display name, e.g., "Red Demon"')
    ap.add_argument('--tokens', required=False, help='Space-separated tokens to match files, defaults to name tokens')
    ap.add_argument('--fps', type=float, default=12.0, help='Base FPS for source frame cadence')
    ap.add_argument('--out-fps', type=float, default=24.0, help='Target FPS after interpolation')
    ap.add_argument('--search', nargs='*', help='Search directories override')
    ns = ap.parse_args()

    name = ns.name.strip()
    tokens = ns.tokens.split() if ns.tokens else name.split()

    if ns.search:
        search_dirs = [Path(p) for p in ns.search]
    else:
        search_dirs = [Path(p) for p in DEFAULT_SEARCH_DIRS]

    files = find_frames(tokens, search_dirs)
    print(f'Found {len(files)} frames for {name}')
    if not files:
        print('No frames found. Check tokens or search paths.')
        return 1

    work = Path('E:/game1/animation-pipeline/work') / re.sub(r'\s+', '_', name.lower())
    work.mkdir(parents=True, exist_ok=True)
    list_txt = work / 'list.txt'
    write_concat_list(files, ns.fps, list_txt)

    out_dir = Path('E:/game1/animation-pipeline/output/creatures')
    out_dir.mkdir(parents=True, exist_ok=True)
    safe_name = re.sub(r'[\\/:*?"<>|]', '_', name)
    base_mp4 = out_dir / f'{safe_name}_base{int(ns.fps)}.mp4'
    final_mp4 = out_dir / f'{safe_name}_{int(ns.out_fps)}fps_smooth.mp4'

    # Build base from concat list
    vf_scale = 'scale=ceil(iw/2)*2:ceil(ih/2)*2'
    run_ffmpeg(['-f', 'concat', '-safe', '0', '-i', str(list_txt), '-vf', vf_scale, '-r', f'{ns.fps}', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', str(base_mp4)])

    # Smooth using ffmpeg minterpolate
    # Try high-quality MCI first; fall back on blend if memory-constrained; finally duplicate to target fps
    def try_filters(filters: list[str]):
        last_err = None
        for vf in filters:
            try:
                run_ffmpeg(['-i', str(base_mp4), '-vf', f'{vf},{vf_scale}', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', str(final_mp4)])
                return True
            except subprocess.CalledProcessError as e:
                last_err = e
        if last_err:
            raise last_err
        return False

    # Downscale before interpolation to reduce memory load
    downscale = "scale=min(iw\\,1280):-2"
    filters = [
        f"{downscale},minterpolate=fps={ns.out_fps}:mi_mode=mci:mc_mode=aobmc:vsbmc=1",
        f"{downscale},minterpolate=fps={ns.out_fps}:mi_mode=blend",
        f"{downscale},fps={ns.out_fps}",
    ]
    try_filters(filters)

    print('Done:')
    print(' Base:', base_mp4)
    print(' Smooth:', final_mp4)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
