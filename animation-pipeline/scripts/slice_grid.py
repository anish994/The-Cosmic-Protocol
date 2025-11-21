import argparse
from pathlib import Path
from PIL import Image

def parse_size(s: str):
    try:
        w, h = s.lower().split('x')
        return int(w), int(h)
    except Exception:
        raise argparse.ArgumentTypeError("Size must be like 256x256")

parser = argparse.ArgumentParser(description="Slice a grid/collage image into frames")
parser.add_argument('--input', '-i', required=True, help='Path to source image')
parser.add_argument('--rows', type=int, required=True, help='Number of rows in the grid')
parser.add_argument('--cols', type=int, required=True, help='Number of cols in the grid')
parser.add_argument('--tile', type=parse_size, default=None, help='Tile size WxH (optional, auto from image)')
parser.add_argument('--padding', type=int, default=0, help='Outer padding to ignore (pixels)')
parser.add_argument('--spacing', type=int, default=0, help='Spacing between tiles (pixels)')
parser.add_argument('--outdir', default=None, help='Output directory (default: frames/<name>)')
parser.add_argument('--prefix', default=None, help='Output filename prefix (default: input name)')

args = parser.parse_args()
src = Path(args.input)
img = Image.open(src).convert('RGBA')
W, H = img.size

pad = args.padding
space = args.spacing

work_w = W - pad*2 - space*(args.cols-1)
work_h = H - pad*2 - space*(args.rows-1)

if args.tile:
    tw, th = args.tile
else:
    tw = work_w // args.cols
    th = work_h // args.rows

outdir = Path(args.outdir) if args.outdir else Path('E:/game1/animation-pipeline/frames') / src.stem
outdir.mkdir(parents=True, exist_ok=True)

prefix = args.prefix or src.stem

index = 0
for r in range(args.rows):
    for c in range(args.cols):
        x = pad + c * (tw + space)
        y = pad + r * (th + space)
        box = (x, y, x+tw, y+th)
        tile = img.crop(box)
        index += 1
        out = outdir / f"{prefix}_{index:03d}.png"
        tile.save(out)

print(f"Saved {index} frames to {outdir}")
