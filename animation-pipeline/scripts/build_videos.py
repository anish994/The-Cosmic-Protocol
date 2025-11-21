import argparse
import json
import shutil
import subprocess
from pathlib import Path

FFMPEG = "ffmpeg"


def build_video(frames_dir: Path, out_mp4: Path, fps=12):
    frames = sorted(frames_dir.glob("*.png"))
    if len(frames) < 2:
        return False
    out_mp4.parent.mkdir(parents=True, exist_ok=True)
    # Write concat list
    flist = out_mp4.parent / "frames.txt"
    with open(flist, "w", encoding="ascii") as f:
        for _ in frames:
            f.write(f"file '{_}'\n")
            f.write(f"duration {1.0/float(fps)}\n")
    vf = f"fps={fps},scale=ceil(iw/2)*2:ceil(ih/2)*2:flags=neighbor,format=yuv420p"
    cmd = [FFMPEG, "-hide_banner", "-loglevel", "error", "-f", "concat", "-safe", "0",
           "-i", str(flist), "-vf", vf, "-y", str(out_mp4)]
    subprocess.run(cmd, check=True)
    try:
        flist.unlink()
    except Exception:
        pass
    return True

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--frames-root', default='E:/game1/animation-pipeline/frames')
    ap.add_argument('--out-root', default='E:/game1/animation-pipeline/output')
    ap.add_argument('--fps', type=int, default=12)
    args = ap.parse_args()

    frames_root = Path(args.frames_root)
    out_root = Path(args.out_root)

    manifest = []
    for d in frames_root.rglob("*"):
        if d.is_dir():
            frames = list(d.glob("*.png"))
            if len(frames) >= 2:
                rel = d.relative_to(frames_root)
                out_mp4 = out_root / rel.with_suffix("")
                out_mp4 = out_mp4.with_name(rel.name + ".mp4")
                ok = build_video(d, out_mp4, fps=args.fps)
                if ok:
                    manifest.append({
                        "dir": str(d),
                        "out": str(out_mp4),
                        "fps": args.fps,
                        "frames": len(frames)
                    })
                    print(f"Built {out_mp4} ({len(frames)} frames @ {args.fps}fps)")

    (out_root / 'videos_manifest.json').write_text(json.dumps(manifest, indent=2))
    print(f"Wrote videos manifest with {len(manifest)} entries")
