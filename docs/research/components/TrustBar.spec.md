# TrustBar Specification

## Overview
- **Target file:** `src/components/TrustBar.tsx`
- **Interaction model:** static; horizontal row of "fake IG profile cards" — may have a subtle horizontal marquee but render static.

## DOM Structure
```
<section> Trust Bar (199px tall)
  <p> "Trusted by founders who are now AI-Native"
  <div> row of 5 IG-profile cards
    <Card> for each card:
      <img> avatar (round)
      <span> username + verified blue checkmark
      <span> small subtitle
      <div> stats line: posts | followers | following
```

## Computed Styles

### Section
- background: #F5F5F5
- padding: 30px 0 60px
- text-align: center

### Label
- font: Inter 14px italic / weight 400
- color: #6E6E6E
- margin-bottom: 24px

### Cards row
- display: flex
- justify-content: center
- gap: 20px
- max-width: 1120px
- margin: 0 auto

### Each card
- background: #FFFFFF
- border-radius: 18px
- padding: 12px 16px
- box-shadow: 0 8px 24px rgba(0,0,0,0.06)
- display: flex; align-items: center; gap: 10px
- min-width: 200px
- height: ~70px
- the leftmost and rightmost cards are slightly faded (opacity ~ 0.45) — visual depth/marquee illusion

### Avatar
- 36x36 circle, object-fit: cover, border-radius: 999px

### Username
- font: Inter 13px / weight 600 / color #1C1C1C

### Verified tick
- 12x12 inline svg, blue #279AC0

### Subtitle (display name)
- font: Inter 11px / color #6E6E6E

### Stats line
- font: Inter 10px / color #6E6E6E

## Per-State Content

The 5 cards (visible center → faded edges):
1. `nicholasdev` (verified) — Nicholas — `99 posts | 47.5k followers | 638 following`
2. `olivermerrick___` (verified) — Oliver Merrick — `99 posts | 47.5k followers | 638 following`
3. `danitha` — Daniel Leung — `99 posts | 9.9k followers | 638 following`
4. `tandalebobby` — Bobby — `49 posts | 12.4k followers | 538 following`
5. `kalysta` (faded) — partial info

(Use the 5 IG-profile PNGs from public/images/ as the renders since they ARE flat profile-card screenshots from Framer)

## Assets
- 5 PNG profile cards (use as raw `<img>` from `/images/`):
  - `lbzyKiYqW7h1lE84ArAzu9SEPbc.png`
  - `ZVVBX7ScDPWwIB1NJ4musHwycqY.png`
  - `a8ps6lRTP1SSDEX2VlkMt7BiGVY.png`
  - `VcqwU56xIxPYExu0xegTTYVZ5Zk.png`
  - `I07B640gXvlMMY6xxdqlgLgoVZ0.png`

NOTE: Since these are pre-rendered profile-card images, the simplest pixel-perfect approach is to render them directly as `<img>` elements rather than rebuilding the inner DOM. Use these 5 images straight from `/images/`.

## Text Content
- Label: `Trusted by founders who are now AI-Native`

## Responsive Behavior
- **Desktop (1440px):** 5 cards in a row, gap 20px
- **Mobile (390px):** Single horizontal-scroll row, snap, hide scrollbar
- Breakpoint: ~768px
