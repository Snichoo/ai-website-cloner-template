"""Crop the laptop+phone device mockup out of a "NEW WEBSITE LAUNCH" social graphic.

The source images all share the same layout:
  - Top ~35-40% : headline text + brand logo
  - Middle ~40-50% : laptop + phone mockup on a near-white background
  - Bottom ~10% : URL pill + "Beacon X Digital" branding

Strategy:
  1. Crop a generous vertical band that contains the device mockup (and only the device mockup).
  2. Inside that band, auto-tight-crop to the actual non-background pixels (the devices),
     so we get a clean rectangle that hugs the laptop + phone with a small margin.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

from PIL import Image, ImageChops


# The device mockup vertical band as a fraction of total image height.
# Chosen wide enough to keep the laptop base shadow but exclude the LAUNCH text
# above and the URL pill below.
BAND_TOP = 0.42
BAND_BOTTOM = 0.88

# Padding (in pixels) to leave around the auto-detected content bbox.
MARGIN = 24
# Extra pure-cream strip prepended above the trimmed laptop in the output.
# Guarantees a visible gap above the laptop regardless of source proportions.
EXTRA_TOP_CUSHION = 90

# Target color to flatten the output background onto.
FLATTEN_BG = (247, 245, 241)  # #F7F5F1

# Threshold for "this pixel is not background" — measured against the
# image's actual corner color (handles cream / off-white variations).
DIFF_THRESHOLD = 18


def detect_bg(img: Image.Image) -> tuple[int, int, int]:
    """Sample the four corners and return the median-ish bg color."""
    w, h = img.size
    samples = [
        img.getpixel((2, 2)),
        img.getpixel((w - 3, 2)),
        img.getpixel((2, h - 3)),
        img.getpixel((w - 3, h - 3)),
    ]
    # Drop alpha if present
    samples = [s[:3] if isinstance(s, tuple) else (s, s, s) for s in samples]
    r = sorted(s[0] for s in samples)[len(samples) // 2]
    g = sorted(s[1] for s in samples)[len(samples) // 2]
    b = sorted(s[2] for s in samples)[len(samples) // 2]
    return r, g, b


def auto_trim(img: Image.Image, bg: tuple[int, int, int]) -> Image.Image:
    """Trim uniform background around the image, leaving MARGIN px."""
    rgb = img.convert("RGB")
    bg_img = Image.new("RGB", rgb.size, bg)
    diff = ImageChops.difference(rgb, bg_img)
    # Greyscale max-channel difference, then threshold
    mask = diff.convert("L").point(lambda p: 255 if p > DIFF_THRESHOLD else 0)
    bbox = mask.getbbox()
    if bbox is None:
        return img
    left, top, right, bottom = bbox
    w, h = img.size
    left = max(0, left - MARGIN)
    top = max(0, top - MARGIN)
    right = min(w, right + MARGIN)
    bottom = min(h, bottom + MARGIN)
    return img.crop((left, top, right, bottom))


def erase_saturated(
    img: Image.Image,
    bg: tuple[int, int, int],
    region_bottom_fraction: float = 0.35,
    sat_threshold: int = 50,
) -> Image.Image:
    """Replace highly-saturated pixels in the top region with `bg`.

    This kills any residual headline / brush-stroke pixels that sit above the
    device mockup, so the auto-trim that follows finds the laptop as the
    topmost content (not the text).
    """
    rgb = img.convert("RGB")
    w, h = rgb.size
    y_end = int(h * region_bottom_fraction)
    r, g, b = rgb.split()
    mx = ImageChops.lighter(ImageChops.lighter(r, g), b)
    mn = ImageChops.darker(ImageChops.darker(r, g), b)
    sat = ImageChops.subtract(mx, mn)
    sat_mask_full = sat.point(lambda p: 255 if p > sat_threshold else 0)
    restricted = Image.new("L", rgb.size, 0)
    restricted.paste(sat_mask_full.crop((0, 0, w, y_end)), (0, 0))
    bg_img = Image.new("RGB", rgb.size, bg)
    return Image.composite(bg_img, rgb, restricted)


def crop_one(
    src: Path,
    dst: Path,
    band_top: float = BAND_TOP,
    band_bottom: float = BAND_BOTTOM,
) -> tuple[int, int]:
    img = Image.open(src)
    if img.mode != "RGBA":
        img = img.convert("RGBA")

    w, h = img.size
    band = img.crop((0, int(h * band_top), w, int(h * band_bottom)))

    bg = detect_bg(band)
    trimmed = auto_trim(band, bg)

    dst.parent.mkdir(parents=True, exist_ok=True)
    # Replace near-background pixels with the explicit target color so the gap
    # around the laptop matches the site palette (#F7F5F1).
    rgb = trimmed.convert("RGB")
    bg_img = Image.new("RGB", rgb.size, bg)
    diff = ImageChops.difference(rgb, bg_img).convert("L")
    bg_mask = diff.point(lambda p: 255 if p <= DIFF_THRESHOLD else 0)
    flat = Image.new("RGB", trimmed.size, FLATTEN_BG)
    flat.paste(rgb, mask=Image.eval(bg_mask, lambda v: 255 - v))

    # Prepend a pure-cream strip above so the laptop sits with comfortable
    # headroom regardless of how tight the auto-trim was.
    final = Image.new(
        "RGB", (flat.width, flat.height + EXTRA_TOP_CUSHION), FLATTEN_BG
    )
    final.paste(flat, (0, EXTRA_TOP_CUSHION))
    final.save(dst, "PNG", optimize=True)
    return final.size


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("inputs", nargs="+", type=Path, help="Source PNG/JPG files")
    parser.add_argument(
        "--out",
        type=Path,
        required=True,
        help="Output directory for cropped images",
    )
    parser.add_argument(
        "--names",
        nargs="*",
        default=None,
        help="Optional output filenames (without extension), one per input",
    )
    parser.add_argument(
        "--tops",
        nargs="*",
        type=float,
        default=None,
        help="Optional per-input BAND_TOP overrides (one float per input)",
    )
    parser.add_argument(
        "--bottoms",
        nargs="*",
        type=float,
        default=None,
        help="Optional per-input BAND_BOTTOM overrides (one float per input)",
    )
    args = parser.parse_args()

    if args.names and len(args.names) != len(args.inputs):
        parser.error("--names must have the same count as inputs")
    if args.tops and len(args.tops) != len(args.inputs):
        parser.error("--tops must have the same count as inputs")
    if args.bottoms and len(args.bottoms) != len(args.inputs):
        parser.error("--bottoms must have the same count as inputs")

    args.out.mkdir(parents=True, exist_ok=True)

    for i, src in enumerate(args.inputs):
        if not src.exists():
            print(f"  MISSING: {src}", file=sys.stderr)
            continue
        name = args.names[i] if args.names else src.stem
        dst = args.out / f"{name}.png"
        top = args.tops[i] if args.tops else BAND_TOP
        bottom = args.bottoms[i] if args.bottoms else BAND_BOTTOM
        size = crop_one(src, dst, band_top=top, band_bottom=bottom)
        print(f"  {src.name}  ->  {dst.name}  ({size[0]}x{size[1]})  top={top}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
