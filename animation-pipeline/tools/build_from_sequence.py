#!/usr/bin/env python3
"""
Build a smooth animation from a curator-exported frame sequence JSON.
Handles relative paths and creates base + smoothed versions.
"""
import argparse
import json
import subprocess
from pathlib import Path

def run_ffmpeg(args_list: list[str]):
    print('> ffmpeg', ' '.join(args_list))
    subprocess.run(['ffmpeg', '-y', *args_list], check=True)

def main():
    ap = argparse.ArgumentParser(description='Build smooth animation from curator sequence')
    ap.add_argument('--sequence', required=True, help='Path to mountain_golam_sequence.json')
    ap.add_argument('--base-fps', type=float, default=12.0, help='Base FPS for source frames')
    ap.add_argument('--target-fps', type=float, default=24.0, help='Target FPS after interpolation')
    ap.add_argument('--name', help='Override creature name (from JSON if omitted)')
    ns = ap.parse_args()

    seq_file = Path(ns.sequence)
    if not seq_file.exists():
        print(f'Sequence file not found: {seq_file}')
        return 1

    with seq_file.open('r') as f:
        seq_data = json.load(f)

    name = ns.name or seq_data.get('name', 'creature')
    frames = seq_data.get('frames', [])

    if not frames:
        print('No frames in sequence')
        return 1

    print(f'Building "{name}" from {len(frames)} frames')

    # Resolve frame paths relative to sequence file location
    seq_dir = seq_file.parent
    abs_frames = []
    for f in frames:
        fpath = (seq_dir / f).resolve()
        if not fpath.exists():
            print(f'Warning: frame not found: {fpath}')
            continue
        abs_frames.append(fpath)

    if not abs_frames:
        print('No valid frames found')
        return 1

    # Output paths
    out_dir = Path('E:/game1/animation-pipeline/output/creatures')
    out_dir.mkdir(parents=True, exist_ok=True)
    safe_name = name.replace(' ', '_').lower()
    base_mp4 = out_dir / f'{safe_name}_base{int(ns.base_fps)}.mp4'
    final_mp4 = out_dir / f'{safe_name}_{int(ns.target_fps)}fps_smooth.mp4'

    # Write concat list
    work_dir = Path('E:/game1/animation-pipeline/work') / safe_name
    work_dir.mkdir(parents=True, exist_ok=True)
    list_txt = work_dir / 'concat.txt'

    with list_txt.open('w') as f:
        dur = 1.0 / ns.base_fps
        for p in abs_frames:
            f.write(f"file '{p.as_posix()}'\n")
            f.write(f"duration {dur:.6f}\n")
        if abs_frames:
            f.write(f"file '{abs_frames[-1].as_posix()}'\n")

    # Build base
    vf_scale = 'scale=ceil(iw/2)*2:ceil(ih/2)*2'
    run_ffmpeg(['-f', 'concat', '-safe', '0', '-i', str(list_txt),
                '-vf', vf_scale, '-r', f'{ns.base_fps}',
                '-c:v', 'libx264', '-pix_fmt', 'yuv420p', str(base_mp4)])

    # Smooth with downscale + interpolation fallback
    downscale = 'scale=min(iw\\,1280):-2'
    filters = [
        f'{downscale},minterpolate=fps={ns.target_fps}:mi_mode=mci:mc_mode=aobmc:vsbmc=1',
        f'{downscale},minterpolate=fps={ns.target_fps}:mi_mode=blend',
        f'{downscale},fps={ns.target_fps}',
    ]

    last_err = None
    for vf in filters:
        try:
            run_ffmpeg(['-i', str(base_mp4), '-vf', f'{vf},{vf_scale}',
                       '-c:v', 'libx264', '-pix_fmt', 'yuv420p', str(final_mp4)])
            print(f'✓ Smoothed with: {vf.split(",")[0]}')
            break
        except subprocess.CalledProcessError as e:
            last_err = e

    if last_err:
        print(f'⚠ Smoothing failed; base video ready at {base_mp4}')
        return 1

    print(f'\n✓ Done!')
    print(f'  Base: {base_mp4}')
    print(f'  Smooth: {final_mp4}')
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
