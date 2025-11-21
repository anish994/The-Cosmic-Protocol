#!/usr/bin/env python3
"""
Extract frames from collage images (sprite sheets) with auto-detection or manual grid.
"""
import argparse
import json
from pathlib import Path
from PIL import Image
import math

def guess_grid(img: Image.Image) -> tuple:
    """
    Guess best grid layout (rows, cols) for sprite sheet.
    Assumes roughly square sprites.
    """
    w, h = img.size
    aspect = w / h
    
    # Try common grids: 2x2, 3x3, 4x4, 3x2, 2x3, etc.
    candidates = []
    for rows in range(1, 8):
        for cols in range(1, 8):
            if rows * cols > 64:  # sanity limit
                continue
            sprite_w = w / cols
            sprite_h = h / rows
            # Prefer squarish sprites
            sq_error = abs(sprite_w - sprite_h)
            candidates.append((sq_error, rows, cols))
    
    if not candidates:
        return 1, 1
    
    candidates.sort()
    _, best_rows, best_cols = candidates[0]
    return best_rows, best_cols


def slice_collage(img_path: Path, out_dir: Path, rows: int = None, cols: int = None, prefix: str = ""):
    """
    Slice collage into individual frames.
    Auto-detects grid if rows/cols not specified.
    """
    img = Image.open(img_path)
    
    if rows is None or cols is None:
        rows, cols = guess_grid(img)
        print(f"Auto-detected grid: {rows}x{cols}")
    
    w, h = img.size
    frame_w = w // cols
    frame_h = h // rows
    
    print(f"Slicing {img_path.name} into {rows}x{cols} ({frame_w}x{frame_h} each)")
    
    out_dir.mkdir(parents=True, exist_ok=True)
    frames = []
    
    for r in range(rows):
        for c in range(cols):
            left = c * frame_w
            top = r * frame_h
            right = left + frame_w
            bottom = top + frame_h
            
            # Crop and save
            frame = img.crop((left, top, right, bottom))
            # Skip fully transparent/white frames
            if frame.getextrema() == ((255, 255, 255, 255), (255, 255, 255, 255)):
                continue  # skip blank
            
            fname = f"{prefix}_{r:02d}_{c:02d}.png"
            fpath = out_dir / fname
            frame.save(fpath)
            frames.append({"file": fname, "row": r, "col": c, "source": img_path.name})
            print(f"  → {fname}")
    
    return frames


def main():
    ap = argparse.ArgumentParser(description="Extract frames from collage (sprite sheet)")
    ap.add_argument("--input", required=True, help="Input collage image path")
    ap.add_argument("--output", required=True, help="Output directory for frames")
    ap.add_argument("--rows", type=int, help="Manual grid rows (auto-detect if omitted)")
    ap.add_argument("--cols", type=int, help="Manual grid cols (auto-detect if omitted)")
    ap.add_argument("--prefix", default="frame", help="Prefix for output filenames")
    ns = ap.parse_args()
    
    img_path = Path(ns.input)
    out_dir = Path(ns.output)
    
    frames = slice_collage(img_path, out_dir, ns.rows, ns.cols, ns.prefix)
    
    # Save manifest
    manifest_path = out_dir / "manifest.json"
    with open(manifest_path, "w") as f:
        json.dump(frames, f, indent=2)
    
    print(f"\nExtracted {len(frames)} frames to {out_dir}")
    print(f"Manifest saved: {manifest_path}")


if __name__ == "__main__":
    main()
