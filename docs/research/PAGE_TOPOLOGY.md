# MezCorp.co — Page Topology

Source: https://mezcorp.co/ (Framer-generated single-page site)
Total page height (desktop 1905w): 7316px
Global body bg: `rgb(245, 245, 245)` (#F5F5F5)

## Section Order (top to bottom)

| # | Name | Range (px) | Height | Notes |
|---|---|---|---|---|
| 0 | Nav (floating pill) | 0 → ~89 | 89 | Floating top nav — MezCorp logo + "Book A Call" button, fixed/sticky overlay |
| 1 | Hero | 0 → 710 | 710 | "Now accepting founders…" pill, H1 headline, subhead, CTA, avatars row |
| 2 | Social Bar (trusted by founders) | 710 → 909 | 199 | Horizontal row of 5 IG-profile cards + "Trusted by founders…" label |
| 3 | Problem Section (data-framer-name: About me #1) | 909 → 1688 | 779 | "the real problem" — "You've Added AI But Nothing Changed" + 4 problem cards (8 imgs + 8 svgs) |
| 4 | Solution / Deliverables (About me #2) | 1688 → 2725 | 1037 | "AI Systems Built for Your Business" + 4 deliverable cards + guarantee block |
| 5 | Founder Story (Where Your At) | 2725 → 3572 | 847 | "I Run My Business From These Systems" + story timeline |
| 6 | 30-Day Sprint (About me #3) | 3572 → 5162 | 1590 | "how it works" — 3 numbered phase cards (3 mp4 videos) |
| 7 | Pricing | 5162 → 6322 | 1160 | "investment" — pricing card + Apply Now CTA (9 SVG checkmarks) |
| 8 | FAQ (Section/Services) | 6322 → 7316 | 994 | "Questions? Answers!" — numbered accordion with 7 items |
| 9 | Footer | ~7316 | 24 | Single-line `© 2025 Mezcorp` |

## Layout

- Page layout: vertical stack, no scroll container (native scroll)
- Content max-width: 1040-1120px (framer "Content Container" widths)
- Body width goes full-bleed; content centers within
- Floating nav sits as position absolute/fixed at top of Page container
- No sidebar, no sticky elements except the floating nav

## Z-Index Layers

- Nav floating pill: top layer (z > content)
- Section backgrounds: base
- Decorative overlays per-section (dotted grid, gradient pills): above section bg, under content text

## Fonts in use
- `Archivo` — headings/body
- `Open Runde` — accents/badges
- `Inter` — body
- `Satoshi` — accents
- `Inter Display` — headings

## Interaction Model per Section
All sections are STATIC (no scroll-driven tab switching, no time-driven carousels) EXCEPT:
- FAQ: click-driven accordion expand/collapse
- CTAs / Buttons: hover states
- Nav button: hover
