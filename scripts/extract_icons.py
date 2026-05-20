"""
Icon extraction tool.

Splits a source image into a grid (default 2x2), trims each cell to the
bounding box of its non-white content, makes the background transparent,
and writes one PNG per cell to the output directory.

Usage:
    python scripts/extract_icons.py SOURCE OUTDIR [--rows R] [--cols C]
        [--names a,b,c,d] [--size 256] [--pad 16] [--threshold 235]

Example:
    python scripts/extract_icons.py \
        "C:/Users/samsn/Downloads/icons.png" \
        public/images/icons/problem \
        --names wasted-spend,unqualified-leads,not-converting,not-ranking
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image


def extract_cell(cell: Image.Image, threshold: int, pad: int, size: int) -> Image.Image:
    rgba = cell.convert("RGBA")
    gray = rgba.convert("L")

    # Mask of non-background pixels (anything darker than threshold).
    mask = gray.point(lambda v: 255 if v < threshold else 0, mode="L")
    bbox = mask.getbbox()
    if bbox is None:
        return Image.new("RGBA", (size, size), (0, 0, 0, 0))

    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(rgba.width, right + pad)
    bottom = min(rgba.height, bottom + pad)
    cropped = rgba.crop((left, top, right, bottom))

    # Preserve color. A pixel is "white-ish" only when ALL channels are bright,
    # so use min(r,g,b) as the white signal. Saturated colors (orange flame,
    # light blue people) always have at least one low channel and stay opaque.
    solid = max(0, threshold - 30)
    pixels = cropped.load()
    for y in range(cropped.height):
        for x in range(cropped.width):
            r, g, b, _ = pixels[x, y]
            whiteness = min(r, g, b)
            if whiteness >= threshold:
                pixels[x, y] = (r, g, b, 0)
            elif whiteness <= solid:
                pixels[x, y] = (r, g, b, 255)
            else:
                alpha = int(255 * (threshold - whiteness) / (threshold - solid))
                pixels[x, y] = (r, g, b, alpha)

    # Center on a square canvas at the requested size.
    side = max(cropped.width, cropped.height)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(cropped, ((side - cropped.width) // 2, (side - cropped.height) // 2), cropped)
    return square.resize((size, size), Image.LANCZOS)


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("source", type=Path)
    ap.add_argument("outdir", type=Path)
    ap.add_argument("--rows", type=int, default=2)
    ap.add_argument("--cols", type=int, default=2)
    ap.add_argument("--names", type=str, default="")
    ap.add_argument("--size", type=int, default=256)
    ap.add_argument("--pad", type=int, default=16)
    ap.add_argument("--threshold", type=int, default=235)
    args = ap.parse_args()

    if not args.source.exists():
        print(f"source not found: {args.source}", file=sys.stderr)
        return 1

    args.outdir.mkdir(parents=True, exist_ok=True)
    img = Image.open(args.source)
    cw = img.width // args.cols
    ch = img.height // args.rows

    names = [n.strip() for n in args.names.split(",") if n.strip()]
    written: list[Path] = []
    for r in range(args.rows):
        for c in range(args.cols):
            idx = r * args.cols + c
            box = (c * cw, r * ch, (c + 1) * cw, (r + 1) * ch)
            cell = img.crop(box)
            out = extract_cell(cell, args.threshold, args.pad, args.size)
            name = names[idx] if idx < len(names) else f"icon-{idx + 1}"
            path = args.outdir / f"{name}.png"
            out.save(path, format="PNG", optimize=True)
            written.append(path)

    for p in written:
        print(p)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
