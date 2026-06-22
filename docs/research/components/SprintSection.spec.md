# SprintSection Specification

## Overview
- **Target file:** `src/components/SprintSection.tsx`
- **Interaction model:** static. Each phase card contains a looping autoplay video.

## DOM Structure
```
<section> 1590px tall
  <div> Header
    <span eyebrow> how it works
    <h2> The 30-Day AI-Native Sprint
    <p> sub
  <div> 3 phase cards stacked vertically (each ~440px tall)
    <PhaseCard 01> The Audit (video left or top, content right)
    <PhaseCard 02> The Build
    <PhaseCard 03> Support
  <div> Bottom CTA: "Book A Call"
```

## Computed Styles

### Section
- background: #F5F5F5
- padding: 100px 0 80px

### H2
- font: Archivo 44px / weight 500 / line-height 1.1 / letter-spacing -1.76px
- color: #1C1C1C
- text-align: center

### Phase cards container
- max-width: 1120px
- margin: 64px auto 0
- display: flex
- flex-direction: column
- gap: 24px

### PhaseCard
- background: #FFFFFF
- border-radius: 28px
- padding: 32px
- box-shadow: 0 4px 16px rgba(0,0,0,0.04)
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 32px
- align-items: center

### Card video wrapper
- aspect-ratio: 16 / 11
- border-radius: 18px
- overflow: hidden
- background: #1C1C1C

### Card video
- width: 100%; height: 100%; object-fit: cover
- attributes: autoPlay loop muted playsInline preload="auto"

### Phase number
- font: Archivo 13px / weight 600 / lowercase / letter-spacing 0.08em
- color: #6E6E6E

### Phase title
- font: Archivo 32px / weight 500 / color #1C1C1C / letter-spacing -1.28px
- margin-top: 8px

### Bullet list
- font: Inter 15px / line-height 1.6 / color #6E6E6E
- margin-top: 16px
- display: flex; flex-direction: column; gap: 10px
- each <li> has a leading number "1:" or "2:"

### "Why this matters" footnote
- font: Inter 14px italic / color #525252
- background: #F5F5F5
- border-radius: 12px
- padding: 16px 18px
- margin-top: 20px

### Bottom CTA "Book A Call"
- Same cyan gradient pill from Hero
- centered, margin-top: 64px

## Per-Phase Content

### Phase 01: The Audit
- Title: `The Audit`
- Phase number: `Phase 01`
- Video: `/videos/duDJJ4Z5LhUAgyi7Uj93YaTu5Nk.mp4`
- Bullets:
  - `90-minute strategy session: I audit workflows, identify bottlenecks, map your top 5 AI opportunities`
  - `1: Opportunity Map (what to build, why, in what order)`
  - `2: Quick Win Install (context foundation + 1-2 automations live same day)`
- Why: `Why this matters: Most people start with tools. We start with strategy. You see results Day 1. You'll leave thinking: "I can actually do this."`

### Phase 02: The Build
- Title: `The Build`
- Phase number: `Phase 02`
- Video: `/videos/tDauuGW9fU1t2R1F8mBnqaB4EWM.mp4`
- Bullets:
  - `1: Context System — Build your business context WITH you (priorities, clients, processes, voice). Train your team on context engineering and tool selection.`
  - `2: Workflow Automation — Automate 2-3 high-leverage workflows. Build 1-2 custom internal tools. You watch me build, then build with me. Full documentation. 60-minute handoff—walk through everything, show you how to extend it.`

### Phase 03: Support
- Title: `Support`
- Phase number: `Phase 03`
- Video: `/videos/MIdFxQzavPyFInquveYeshzc.mp4`
- Bullets:
  - `Async support: Direct Slack/WhatsApp access for troubleshooting and quick wins`
  - `One check-in call: 30 minutes at Day 14-21 to review and optimize`
  - `Referral network: Need big custom builds? I'll connect you to specialists I trust`
- Why: `Why this matters: You're not abandoned. I'm here until the system sticks and you hit the guarantee.`

## Text Content (also)
- Eyebrow: `how it works`
- Sub: `This isn't a course. It's a strategic implementation sprint. You're learning by building, not watching videos.`

## Assets
- 3 mp4 videos in `/public/videos/` (already downloaded)

## Responsive Behavior
- **Desktop (1440px):** 2-col grid inside each PhaseCard
- **Mobile (390px):** PhaseCard single column (video on top, content below), padding 20px
- Breakpoint: ~900px
