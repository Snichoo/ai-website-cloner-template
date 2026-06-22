# ProblemSection Specification

## Overview
- **Target file:** `src/components/ProblemSection.tsx`
- **Interaction model:** static. Cards have subtle hover state (shadow lift).

## DOM Structure
```
<section> 779px tall, max-w 1120
  <div> Header
    <span class=eyebrow>the real problem</span>
    <h2> two-line: muted "You've Added AI" + dark "But Nothing Changed"
    <p> sub-paragraph
  <div> 4-card grid (2 cols x 2 rows)
    <Card 1> ChatGPT Doesn't Know Your Business
      visual: dotted pattern + ChatGPT-like UI mockup PNG
    <Card 2> You're Still the Bottleneck
      visual: orange "+" hub + 6 white circles labeled (New Client / Structure / Context / Meeting / New Idea / Content)
    <Card 3> (no title shown — visual chips only)
      3 stacked content-card chips: STRUCTURE/FORMAT/IDEA with "25 jul Lead Magnet n8n Tutorial" + Nick Saraev avatars
    <Card 4> Your Tools Don't Talk to Each Other
      visual: row of disconnected logo circles
```

## Computed Styles

### Section
- background: #F5F5F5
- padding: 100px 0 80px

### Eyebrow
- font: Inter 13px / weight 600 / lowercase / letter-spacing 0.08em
- color: #6E6E6E
- text-align: center

### H2
- font-family: Archivo, sans-serif
- font-size: 44px
- font-weight: 500
- line-height: 1.1
- letter-spacing: -1.76px
- text-align: center
- Line 1: color #6E6E6E (`You've Added AI`)
- Line 2: color #1C1C1C (`But Nothing Changed`)

### Subheading p
- font: Inter 18px / weight 400 / line-height 1.6
- color: #6E6E6E
- text-align: center
- max-width: 720px
- margin: 24px auto 0

### Card grid
- display: grid; grid-template-columns: 1fr 1fr; gap: 24px
- margin-top: 64px
- max-width: 1120px

### Card
- background: #FCFCFC
- border: 1px solid #EDEDED
- border-radius: 24px
- padding: 32px
- min-height: 280px
- display: flex; flex-direction: column; justify-content: space-between
- box-shadow: 0 4px 16px rgba(0,0,0,0.04)
- transition: box-shadow 240ms ease, transform 240ms ease

### Card title
- font: Archivo 22px / weight 500
- color: #1C1C1C
- letter-spacing: -0.02em

### Card body
- font: Inter 15px / color #6E6E6E
- line-height: 1.55
- margin-top: 8px

## States & Behaviors

### Hover (card)
- box-shadow: 0 4px 16px rgba(0,0,0,0.04) → 0 12px 32px rgba(0,0,0,0.08)
- transform: translateY(0) → translateY(-2px)

## Per-Card Visuals
- **Card 1 (ChatGPT):** image asset `OqYCZs3YTeMYsv09chb5KS0oCI.png` or `89xpOVyqbkonzexweAtFxDhz25Y.png` (chatgpt-style mockup)
- **Card 2 (Bottleneck):** image asset `hHB3hIhuDlZvhtfgaIYJVPmr0.png`
- **Card 3 (Chips):** image assets `vwrwO7Bl3ynJ0jWQJlSwuwU9Hio.png`, `x3sqVWGNUxQGfnASY78wBZbUP4.png`, `EWS9lht4oaYeaTXhLGyCIYw6SrU.png` stacked
- **Card 4 (Tools):** image asset `C1A7dnIP2tHmK4yb59cin4RnWg.png` or `LZ1XRCMwrWSSJnJlIVMETL4.png`

(Render these images at top-half of each card, fit-contain, max-height 160px)

## Text Content
- Eyebrow: `the real problem`
- H2 line 1: `You've Added AI`
- H2 line 2: `But Nothing Changed`
- Sub: `Tools don't solve bottlenecks. Systems do. You're not more productive. You're just busy in new ways.`
- Card 1 title: `ChatGPT Doesn't Know Your Business`
- Card 1 body: `Generic answers. Every time you ask something, you start from zero.`
- Card 2 title: `You're Still the Bottleneck`
- Card 2 body: `Every decision lives in your head. Your team can't move without you.`
- Card 4 title: `Your Tools Don't Talk to Each Other`
- Card 4 body: `8 subscriptions. None of them know what the others are doing.`

## Responsive Behavior
- **Desktop (1440px):** 2x2 grid, gap 24px
- **Mobile (390px):** single column stack, gap 16px, h2 32px
- Breakpoint: ~768px
