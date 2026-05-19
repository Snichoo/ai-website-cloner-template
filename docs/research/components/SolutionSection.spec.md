# SolutionSection Specification

## Overview
- **Target file:** `src/components/SolutionSection.tsx`
- **Interaction model:** static. Cards have hover lift.

## DOM Structure
```
<section> 1037px tall
  <div> Header
    <span eyebrow> the real problem
    <h2> AI Systems Built for Your Business. Not a Template. Not a Course.
    <p> sub
  <div> 4 deliverable cards (2x2 grid OR vertical stack of "wide" cards)
  <div> Guarantee callout block (full-width inside container)
```

## Computed Styles

### Section
- background: #F5F5F5
- padding: 100px 0 120px

### H2
- font: Archivo 44px / weight 500 / line-height 1.1 / letter-spacing -1.76px
- color: #1C1C1C
- text-align: center
- max-width: 900px
- margin: 24px auto 0

### Eyebrow + sub: same scale as ProblemSection

### Card grid
- grid-template-columns: repeat(2, 1fr)
- gap: 24px
- max-width: 1120px
- margin: 64px auto 80px

### Each card
- background: #FFFFFF
- border-radius: 24px
- padding: 36px 32px
- box-shadow: 0 4px 16px rgba(0,0,0,0.04)
- min-height: 220px
- display: flex; flex-direction: column

### Card label "Deliverable N:" prefix
- font: Inter 13px / weight 600 / lowercase / letter-spacing 0.06em / color #6E6E6E

### Card title
- font: Archivo 24px / weight 500 / color #1C1C1C / letter-spacing -0.02em
- margin-top: 8px

### Card body
- font: Inter 15px / color #6E6E6E / line-height 1.55
- margin-top: 12px

### Guarantee block
- background: #1C1C1C
- color: #FFFFFF
- border-radius: 28px
- padding: 56px 64px
- max-width: 1120px
- margin: 0 auto

### Guarantee H3
- font: Archivo 32px / weight 500 / color #FFFFFF / letter-spacing -0.02em

### Guarantee body
- font: Inter 16px / line-height 1.7 / color rgba(255,255,255,0.78)
- margin-top: 16px

### Framing note (smaller)
- font: Inter 13px / italic / color rgba(255,255,255,0.5)
- margin-top: 24px
- border-top: 1px solid rgba(255,255,255,0.1)
- padding-top: 16px

## States & Behaviors
### Hover (card)
- transform: translateY(-2px); shadow grows to `0 12px 32px rgba(0,0,0,0.08)`
- transition: all 240ms ease

## Text Content
- Eyebrow: `the real problem`
- H2: `AI Systems Built for Your Business. Not a Template. Not a Course.`
- Sub: `Everything is custom. Everything is yours. And your team will know how to extend it.`
- D1 label: `Deliverable 1:`
- D1 title: `AI Systems Installed in Your Business`
- D1 body: `Context foundations, workflow automations, and internal tools built around your specific clients, workflows, and priorities.`
- D2 label: `Deliverable 2:`
- D2 title: `Full Documentation SOPs, Walkthroughs, Everything`
- D2 body: `Every system gets documented. Written SOPs, Loom walkthroughs, troubleshooting guides.`
- D3 label: `Deliverable 3:`
- D3 title: `AI-Native Fluency for You and Your Team`
- D3 body: `Your team learns how to actually use the tools. Not just today, but how to extend and adapt as AI improves.`
- D4 label: `Deliverable 4:`
- D4 title: `60 Days of Support`
- D4 body: `Direct access to me for troubleshooting, optimisation, and check-ins after handoff. If something breaks, I'm there.`
- Guarantee H3: `The Guarantee (Contextualised)`
- Guarantee body 1: `Every engagement starts with a deep audit of your business. If I can't identify clear ROI — measurable time saved, costs reduced, or revenue unlocked — I won't take your money.`
- Guarantee body 2: `This isn't a blanket promise. It's specific to YOUR operations, YOUR bottlenecks, YOUR numbers. If the audit shows the opportunity, we proceed. If it doesn't, we shake hands and you walk away with a free strategy session.`
- Framing note: `Framing note: This functions as both a guarantee AND a qualification filter. "I won't take your money" = two-way selection. Avoids cheesy "5 hours/week or your money back" vibes. Contextualised to their business, as discussed.`

## Assets
- No images required (text-only cards + dark callout)

## Responsive Behavior
- **Desktop (1440px):** 2-col grid, dark callout 56px padding
- **Mobile (390px):** single column, callout padding 32px 24px, h2 32px, h3 24px
