# FaqSection Specification

## Overview
- **Target file:** `src/components/FaqSection.tsx`
- **Interaction model:** click-driven accordion. Item 001 starts expanded with the answer text from the live site. Items 002-007 collapsed.

## DOM Structure
```
<section> 994px tall (FAQ)
  <div> Header (left-aligned within max-w 1120 container; or centered)
    <span eyebrow> FAQs
    <h2 line 1> Questions?
    <h2 line 2> Answers!
  <div> Accordion items list
    For each item: number "001" / question / [+ - toggle]
    expanded item shows answer paragraph below
  <div> Footer text "© 2025 Mezcorp"
```

## Computed Styles

### Section
- background: #F5F5F5
- padding: 100px 0 80px

### Header
- max-width: 1120px
- margin: 0 auto

### Eyebrow
- font: Inter 13px / weight 600 / lowercase
- color: #6E6E6E

### H2 Questions? (line 1)
- font: Archivo 56px / weight 500 / line-height 1 / letter-spacing -2.24px
- color: #6E6E6E (muted)

### H2 Answers! (line 2)
- font: Archivo 56px / weight 500 / line-height 1 / letter-spacing -2.24px
- color: #1C1C1C

### Accordion list
- max-width: 1120px
- margin: 56px auto 0
- display: flex; flex-direction: column; gap: 0
- border-top: 1px solid #E0E0E0

### Accordion item
- padding: 28px 0
- border-bottom: 1px solid #E0E0E0
- display: flex; flex-direction: column

### Item header row
- display: grid
- grid-template-columns: 64px 1fr 32px
- align-items: center
- gap: 16px
- cursor: pointer

### Item number
- font: Archivo 20px / weight 500 / color #6E6E6E

### Item question
- font: Archivo 22px / weight 500 / color #1C1C1C / letter-spacing -0.02em

### Item toggle (+ / -)
- 28px square; rounded; color #1C1C1C
- transition: transform 240ms ease

### Answer body (expanded)
- font: Inter 16px / line-height 1.7 / color #6E6E6E
- max-width: 800px
- margin-top: 16px
- padding-left: 80px
- animation: expand 240ms ease

## States & Behaviors

### Click toggle
- Click on item header: expand/collapse the answer below
- + icon rotates to - (or use a discrete swap)
- transition: max-height 240ms ease, opacity 240ms ease

## Per-State Content

### Item 001 (default expanded)
- Question: `Is this a course?`
- Answer: `No. This is a done-with-you implementation sprint. I don't give you videos to watch later. I audit your business, map opportunities, and build the systems WITH you. You leave with a working system and the capability to extend it yourself.`

### Items 002-007 (no public answer text — show short stub answer)
- 002: `How is this different from buying a template?` — answer: `A template gives you a starting point. I install a working, documented system around your actual business and stay until your team can extend it.`
- 003: `How is this different from hiring an agency?` — answer: `Agencies bill hours and own the systems. I install the system, document everything, train your team, then leave you owning it.`
- 004: `How much time does this require from me?` — answer: `Plan on ~5 hours/week for the audit and build sessions. Most of the heavy lifting is on me.`
- 005: `Do I need technical skills?` — answer: `No. If you can describe how your business runs in plain English, you have everything you need.`
- 006: `Can you guarantee results?` — answer: `Read the Guarantee section above — if the audit doesn't surface clear ROI, I won't take your money.`
- 007: `What if my business is too unique?` — answer: `Unique is the entire point. Every system is built around YOUR clients, YOUR workflows, YOUR voice — not a template.`

## Footer (within section or below)
- `© 2025 Mezcorp` — Inter 13px / color #6E6E6E / centered / padding 32 0

## Responsive Behavior
- **Desktop (1440px):** as above
- **Mobile (390px):** h2 36px, item question 18px, padding 20px 16px
- Breakpoint: ~768px
