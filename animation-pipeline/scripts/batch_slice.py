import argparse
import json
from pathlib import Path
from PIL import Image

def guess_grid(img: Image.Image):
    W, H = img.size
    # candidate grids (rows, cols)
    candidates = [(1,2),(1,3),(1,4),(1,5),(2,1),(3,1),(2,2),(2,3),(3,2),(3,3),(4,3),(3,4),(4,4)]
    best = (1,1)
    best_score = 1e9
    for r,c in candidates:
        tw = W / c
        th = H / r
        # prefer near-square tiles and near-integer sizes
        frac_w = abs(round(tw) - tw)
        frac_h = abs(round(th) - th)
        ratio_pen = abs((tw/th) - 1)
        score = ratio_pen*3 + (frac_w+frac_h)
        if score < best_score:
            best_score = score
            best = (r,c)
    return best

def slice_image(src_path: Path, out_root: Path):
    import re
    img = Image.open(src_path).convert('RGBA')
    rows, cols = guess_grid(img)
    W, H = img.size
    tw = int(round(W/cols))
    th = int(round(H/rows))
    # Sanitize stem for Windows (no trailing spaces or illegal chars)
    stem = re.sub(r"[^A-Za-z0-9._-]+", "_", src_path.stem).strip(" ._")
    outdir = out_root / stem
    outdir.mkdir(parents=True, exist_ok=True)
    idx = 0
    for r in range(rows):
        for c in range(cols):
            x = c*tw
            y = r*th
            tile = img.crop((x, y, x+tw, y+th))
            idx += 1
            tile.save(outdir / f"{stem}_{idx:03d}.png")
    return {
        'source': str(src_path),
        'rows': rows,
        'cols': cols,
        'tile_w': tw,
        'tile_h': th,
        'frames': idx,
        'outdir': str(outdir)
    }

if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--src', required=True, help='Folder with collage images (png/jpeg)')
    ap.add_argument('--out', default='E:/game1/animation-pipeline/frames', help='Output frames root')
    args = ap.parse_args()
    src = Path(args.src)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    manifest = []
    for p in src.iterdir():
        if p.suffix.lower() in {'.png','.jpg','.jpeg'}:
            info = slice_image(p, out)
            manifest.append(info)
            print(f"Sliced {p.name} -> {info['frames']} frames ({info['rows']}x{info['cols']})")
    (out / 'manifest.json').write_text(json.dumps(manifest, indent=2))
    print(f"Wrote manifest with {len(manifest)} entries to {(out/'manifest.json')} ")
