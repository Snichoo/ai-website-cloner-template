# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static; CTA has hover state

## DOM Structure
```
<section> Hero
  <div> centered content container (max-w 1040)
    <div> Status pill — green dot + text
    <h1> two lines (line 1 and line 2)
    <p> subhead
    <a> CTA "Book A Call" (cyan)
    <div> Avatars cluster
      <span>150+ Now AI-Native</span>
      <div> 4 stacked circular avatars
```

## Computed Styles (exact values from getComputedStyle)

### Section
- background: #F5F5F5
- padding-top: 180px (after the absolute floating nav)
- padding-bottom: 80px
- min-height: 710px
- display: flex
- justify-content: center
- align-items: flex-start

### Status pill
- display: inline-flex; align-items: center; gap: 8px
- padding: 8px 16px
- border-radius: 999px
- background: rgba(96, 212, 51, 0.05)
- border: 1px solid rgba(51, 212, 120, 0.4)
- color: #2A8B47 (green text)
- font: Inter 12px / weight 600 / uppercase / letter-spacing 0.06em
- inner green dot: 8px circle #33D478

### H1 (two lines)
- font-family: Archivo, "Archivo Placeholder", sans-serif
- font-size: 56px
- font-weight: 500
- line-height: 61.6px
- letter-spacing: -2.24px
- color: #1C1C1C
- text-align: center
- margin-top: 24px

### Subhead p
- font-family: Inter, "Inter Placeholder", sans-serif
- font-size: 18px
- font-weight: 400
- line-height: 28.8px
- color: #6E6E6E
- text-align: center
- max-width: 720px
- margin-top: 24px

### CTA "Book A Call"
- background: linear-gradient(180deg, #2EB6E0 0%, #279AC0 50%, #1F84A8 100%)
- color: #FFFFFF
- font: Inter 16px / weight 600
- padding: 14px 28px
- border-radius: 14px
- box-shadow: 0 16px 40px rgba(39, 154, 192, 0.45), inset 0 1px 0 rgba(255,255,255,0.4)
- margin-top: 32px
- cursor: pointer

### Avatars cluster wrapper
- display: flex; flex-direction: column; align-items: center; gap: 8px
- margin-top: 36px

### "150+ Now AI-Native" caption
- font: Inter 12px / weight 700 / uppercase / letter-spacing 0.08em
- color: #6E6E6E

### Avatar row
- display: flex
- avatars: 24px circles
- avatars overlap by -8px each
- border: 2px solid #F5F5F5

## States & Behaviors
### Hover (CTA)
- transform: translateY(-2px); shadow grows
- transition: all 240ms ease

## Assets
- 4 small JPG avatars in `public/images/`:
  - `B3ilvSTOyP1RrbXyVnmPGEf79E0.jpg`
  - `LFoe0HLRJZfzdxJYFT9PtagdZg.jpg`
  - `UW5LY0Fq8eQyRpf8mjTa91Jc7W8.jpg`
  - `2mqKmETkLyaYQPb17LC8uSWjE.jpg`

## Text Content (verbatim)
- Pill: `Now accepting founders for Q1 2026 | Limited spots`
- H1 line 1: `I Install AI Systems`
- H1 line 2: `So You Stop Being the Bottleneck`
- Subhead: `I learn your business, build AI systems around it, and make sure your team never needs me again.`
- CTA: `Book A Call`
- Caption: `150+ Now AI-Native`

## Responsive Behavior
- **Desktop (1440px):** centered column, h1 56px, subhead 18px
- **Mobile (390px):** h1 → 36-40px, subhead 16px, padding-top 140px, container padding 20px
- Breakpoint: ~768px
