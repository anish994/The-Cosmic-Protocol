#!/usr/bin/env python3
"""
Auto-crop frames to remove padding/dead space.
Detects content bounds, applies consistent crop across all frames.
"""
import argparse
from pathlib import Path
from PIL import Image, ImageOps
import sys

def get_content_bounds(img: Image.Image, threshold: int = 10) -> tuple:
    """
    Find the bounding box of non-transparent/non-white content.
    Returns (left, top, right, bottom).
    """
    # Convert to RGBA
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Get alpha channel
    alpha = img.split()[-1] if img.mode == 'RGBA' else None
    
    # Crop by alpha
    if alpha:
        bbox = ImageOps.invert(alpha).getbbox()
        if bbox:
            return bbox
    
    # Fallback: crop by color similarity to white/bg
    return img.getbbox() or (0, 0, img.width, img.height)


def crop_frames(src_dir: Path, out_dir: Path, margin: int = 0):
    """
    Scan src_dir for images, find max content bounds, crop all uniformly.
    """
    src_dir = Path(src_dir)
    out_dir = Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    
    # Collect images
    images = sorted([p for p in src_dir.glob('*.png')] + 
                    [p for p in src_dir.glob('*.jpg')])
    
    if not images:
        print(f'No images found in {src_dir}')
        return
    
    print(f'Found {len(images)} images')
    
    # Find union of all content bounds
    all_bounds = []
    for p in images:
        img = Image.open(p)
        bbox = get_content_bounds(img)
        all_bounds.append(bbox)
        print(f'  {p.name}: bounds={bbox}')
    
    if not all_bounds:
        print('No content bounds found.')
        return
    
    # Union bounds: min-left, min-top, max-right, max-bottom
    left = min(b[0] for b in all_bounds) - margin
    top = min(b[1] for b in all_bounds) - margin
    right = max(b[2] for b in all_bounds) + margin
    bottom = max(b[3] for b in all_bounds) + margin
    
    # Clamp to image bounds
    width = images[0].width if images else 0
    height = images[0].height if images else 0
    left = max(0, left)
    top = max(0, top)
    right = min(width, right)
    bottom = min(height, bottom)
    
    crop_box = (left, top, right, bottom)
    crop_w, crop_h = right - left, bottom - top
    print(f'\nCrop box: {crop_box} ({crop_w}x{crop_h})')
    
    # Apply crop to all
    for p in images:
        img = Image.open(p)
        cropped = img.crop(crop_box)
        out_p = out_dir / p.name
        cropped.save(out_p)
        print(f'  Saved {out_p.name}')
    
    print(f'\nDone. {len(images)} images cropped and saved to {out_dir}')


def main():
    ap = argparse.ArgumentParser(description='Auto-crop frames to remove padding')
    ap.add_argument('--src', required=True, help='Source frames directory')
    ap.add_argument('--out', required=True, help='Output directory for cropped frames')
    ap.add_argument('--margin', type=int, default=0, help='Margin around content (pixels)')
    ns = ap.parse_args()
    
    crop_frames(Path(ns.src), Path(ns.out), ns.margin)


if __name__ == '__main__':
    main()
