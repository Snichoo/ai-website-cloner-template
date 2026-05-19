# PricingSection Specification

## Overview
- **Target file:** `src/components/PricingSection.tsx`
- **Interaction model:** static. CTA hover.

## DOM Structure
```
<section> 1160px tall
  <div> Header
    <span eyebrow> investment
    <h2> Stop Figuring It Out Yourself. Start Operating on AI.
    <p> sub
  <div> Pricing card (single, centered)
    <h3> The AI-Native Sprint
    <p> short tagline
    <ul> features list (9 items, each with checkmark)
    <span> "LIMITED spots available" badge
    <a> Apply Now CTA
```

## Computed Styles

### Section
- background: #F5F5F5
- padding: 100px 0 100px

### H2
- font: Archivo 44px / weight 500 / line-height 1.1 / letter-spacing -1.76px
- color: #1C1C1C
- text-align: center
- max-width: 880px
- margin: 24px auto 0

### Sub p
- font: Inter 18px / color #6E6E6E / text-align center / margin-top 16px

### Pricing card
- background: #1C1C1C
- color: #FFFFFF
- border-radius: 28px
- padding: 48px 56px
- max-width: 720px
- margin: 64px auto 0
- box-shadow: 0 24px 48px rgba(0,0,0,0.18)

### Card H3
- font: Archivo 32px / weight 500 / color #FFFFFF / letter-spacing -1.28px

### Card tagline
- font: Inter 16px / color rgba(255,255,255,0.6)
- margin-top: 8px
- padding-bottom: 24px
- border-bottom: 1px solid rgba(255,255,255,0.1)

### Features ul
- list-style: none
- padding: 0
- margin-top: 24px
- display: flex; flex-direction: column; gap: 14px

### Feature li
- display: flex; align-items: center; gap: 12px
- font: Inter 15px / color rgba(255,255,255,0.92)
- check icon: 18px circle, bg #33D478, white check inside

### LIMITED badge
- display: inline-flex
- background: rgba(255,71,38,0.12)
- color: #FF4726
- padding: 8px 14px
- border-radius: 999px
- font: Inter 12px / weight 600 / uppercase / letter-spacing 0.08em
- margin-top: 24px

### Apply Now CTA
- background: linear-gradient(180deg, #2EB6E0, #279AC0)
- color: #FFFFFF
- font: Inter 16px / weight 600
- padding: 14px 28px
- border-radius: 14px
- margin-top: 24px
- box-shadow: 0 16px 40px rgba(39,154,192,0.45)
- width: 100%
- text-align: center

## States & Behaviors

### Hover (CTA)
- transform: translateY(-2px); shadow grows
- transition: all 240ms ease

## Text Content
- Eyebrow: `investment`
- H2: `Stop Figuring It Out Yourself. Start Operating on AI.`
- Sub: `Limited spots per quarter. Hop on a call.`
- Card title: `The AI-Native Sprint`
- Card sub: `I will install AI Native systems into your business.`
- Features (verbatim, in order — note D3 appears twice as on the live site):
  1. `90-Minute Strategy Audit`
  2. `Opportunity Map + Bottleneck Analysis`
  3. `Context System Build (business, clients, SOPs, voice)`
  4. `3 High-Leverage Workflows`
  5. `Team Training on Context Engineering`
  6. `Context System Build (business, clients, SOPs, voice)`
  7. `Complete Handoff Documentation(SOPs + Looms)`
  8. `60 Days Async Support + Check-in Call`
  9. `Quick Win Install (Day 1)`
- Badge: `LIMITED spots available`
- CTA: `Apply Now`

## Assets
- Use `<CheckIcon />` from `src/components/icons.tsx`

## Responsive Behavior
- **Desktop (1440px):** Card max-width 720, padding 48 56
- **Mobile (390px):** Card padding 32 24, h3 24px, h2 32px
