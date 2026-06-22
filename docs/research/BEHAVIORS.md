# MezCorp.co — Behaviors & Design Tokens

## Tech detection
- Built with **Framer** (`Framer e177f23` meta generator)
- All assets served from `framerusercontent.com`
- Native browser scrolling — no Lenis/Locomotive detected

## Fonts (in use, all from Google Fonts via Framer)
- **Archivo** — H1, H2 headlines (weight 500)
- **Inter** — body paragraphs (weight 400)
- **Open Runde** — minor accents
- **Satoshi** — accents
- **Inter Display** — display
- *Placeholder* fallbacks all collapse to `sans-serif`

## Color Tokens (extracted via getComputedStyle)

### Backgrounds
- Page bg: `rgb(245, 245, 245)` — `#F5F5F5`
- Card bg light: `rgb(252, 252, 252)` — `#FCFCFC`
- Card bg lighter: `rgb(255, 255, 255)` — `#FFFFFF`
- Card bg muted: `rgb(237, 237, 237)` — `#EDEDED`
- Dark accent (pricing/nav button): `rgb(28, 28, 28)` — `#1C1C1C`
- Slightly lighter dark: `rgb(32, 32, 32)` — `#202020`
- Pill green tint: `rgba(96, 212, 51, 0.05)` — translucent
- Green dot/accent: `rgb(51, 212, 120)` — `#33D478`
- Cyan/blue CTA bg: `rgb(39, 154, 192)` — `#279AC0`
- Orange (problem/badge): `rgb(255, 71, 38)` — `#FF4726`
- Mid-grey text: `rgb(82, 82, 82)` — `#525252`

### Text Colors
- Primary heading: `rgb(28, 28, 28)` — `#1C1C1C`
- Secondary heading (muted): `rgb(110, 110, 110)` — `#6E6E6E`
- Light/inverted: `rgb(255, 255, 255)` — `#FFFFFF`
- Faded white: `rgba(255, 255, 255, 0.38)`
- Greyed timeline: `rgb(209, 209, 209)` — `#D1D1D1`

## Type Scale (extracted)
- H1: `Archivo` 56px / 61.6px line-height / weight 500 / letter-spacing -2.24px / color #1C1C1C
- H2: `Archivo` 44px / weight 500 / color #1C1C1C (some lines #6E6E6E for "muted half")
- Body / subhead: `Inter` 18px / 28.8px lh / weight 400 / color #6E6E6E

## Layout
- Max content width: ~1040–1120px
- Body bg: #F5F5F5 full bleed
- Native scroll, no smooth-scroll lib

## Behaviors
- **Floating nav bar:** Appears as a pill at top — looks like a fixed/sticky overlay with rounded "Book A Call" CTA on right, dark bg `#1C1C1C` with shadow
- **Hero CTA:** Cyan/blue rounded button `#279AC0` with soft glow shadow
- **Avatars row:** 4 circular avatar thumbnails clustered together below CTA + "150+ Now AI-Native" caption
- **Trust bar:** 5 IG-profile screenshot pills in a horizontal row (looks like a conveyor — may be a marquee/auto-scroll or static)
- **FAQ accordion:** Click-to-expand items with numbered prefixes (001–007)
- **Static / no scroll-driven sections** — sections are flow content, no parallax
- **Hover states** on buttons (color/scale not yet measured)

## Assets List (all from framerusercontent.com)

### Images (19 unique)
- 4 small avatar JPGs (hero "150+ Now AI-Native" cluster)
- 15 PNG decorative/UI mockups (problem cards, deliverable cards, story imagery)
- 1 JPG (founder story)

### Videos (3 mp4s)
- duDJJ4Z5LhUAgyi7Uj93YaTu5Nk.mp4
- tDauuGW9fU1t2R1F8mBnqaB4EWM.mp4
- MIdFxQzavPyFInquveYeshzc.mp4

### Favicons (2 SVGs)
- uFHlyMT8XmNA9VsJAB4cHMYPSA.svg (favicon)
- hiUQKWzv2jJoum87Q6wgKyhruk.svg (apple-touch / dark)

## Verbatim Page Copy

### Nav
- Brand: `MezCorp`
- CTA: `Book A Call`

### Hero
- Pill: `Now accepting founders for Q1 2026 | Limited spots`
- H1 (line 1): `I Install AI Systems`
- H1 (line 2): `So You Stop Being the Bottleneck`
- Subhead: `I learn your business, build AI systems around it, and make sure your team never needs me again.`
- CTA: `Book A Call`
- Caption: `150+ Now AI-Native`

### Trust Bar
- Label: `Trusted by founders who are now AI-Native`
- (5 IG profile cards)

### Problem Section
- Eyebrow: `the real problem`
- H2: `You've Added AI` `But Nothing Changed`
- Sub: `Tools don't solve bottlenecks. Systems do. You're not more productive. You're just busy in new ways.`
- Card 1: `ChatGPT Doesn't Know Your Business` — `Generic answers. Every time you ask something, you start from zero.`
- Card 2: `You're Still the Bottleneck` — `Every decision lives in your head. Your team can't move without you.`
- Card 3 (visual chips): `STRUCTURE 25 jul Lead Magnet n8n Tutorial Hook Nick Saraev`, `FORMAT 25 jul ... +210% Nick Saraev`, `IDEA 25 jul ... 7x Nick Saraev`
- Card 4: `Your Tools Don't Talk to Each Other` — `8 subscriptions. None of them know what the others are doing.`

### Solution / Deliverables
- Eyebrow: `the real problem` (yes, repeated)
- H2: `AI Systems Built for Your Business. Not a Template. Not a Course.`
- Sub: `Everything is custom. Everything is yours. And your team will know how to extend it.`
- D1: `Deliverable 1: AI Systems Installed in Your Business` — `Context foundations, workflow automations, and internal tools built around your specific clients, workflows, and priorities.`
- D2: `Deliverable 2: Full Documentation SOPs, Walkthroughs, Everything` — `Every system gets documented. Written SOPs, Loom walkthroughs, troubleshooting guides.`
- D3: `Deliverable 3: AI-Native Fluency for You and Your Team` — `Your team learns how to actually use the tools. Not just today, but how to extend and adapt as AI improves.`
- D4: `Deliverable 4: 60 Days of Support` — `Direct access to me for troubleshooting, optimisation, and check-ins after handoff. If something breaks, I'm there.`
- Guarantee block:
  - H: `The Guarantee (Contextualised)`
  - Body: `Every engagement starts with a deep audit of your business. If I can't identify clear ROI — measurable time saved, costs reduced, or revenue unlocked — I won't take your money.`
  - Body: `This isn't a blanket promise. It's specific to YOUR operations, YOUR bottlenecks, YOUR numbers. If the audit shows the opportunity, we proceed. If it doesn't, we shake hands and you walk away with a free strategy session.`
  - Note: `Framing note: This functions as both a guarantee AND a qualification filter. "I won't take your money" = two-way selection. Avoids cheesy "5 hours/week or your money back" vibes. Contextualised to their business, as discussed.`

### Founder Story
- Eyebrow: `Who's Building This?`
- H2: `I Run My Business From These Systems`
- Sub: `This Isn't Theory`
- Sub: `Tools don't solve bottlenecks. Systems do. You're not more productive. You're just busy in new ways.`
- Subhead: `My Story`
- Timeline:
  - `Age 14: Made first $5 online selling IG shoutouts. Learned that content + systems = leverage.`
  - `Age 18-19: Built a 20K TikTok account, 50m views. Learned content.`
  - `2023-2024: Worked in growth & product at a tech startup. Learned how real companies operate, and where they break.`
  - `2025: Formalized MezCorp. Built AI-native systems for real clients.`
  - `Today: 22 years old. Running a ai consultancy. I use the system I'm teaching you every single day. My daily planning takes 30 minutes. My AI knows my clients, my SOPs, my priorities. I'm not selling you a course. I'm teaching you the system that runs my business.`

### 30-Day Sprint
- Eyebrow: `how it works`
- H2: `The 30-Day AI-Native Sprint`
- Sub: `This isn't a course. It's a strategic implementation sprint. You're learning by building, not watching videos.`
- Phase 01: `The Audit`
  - `90-minute strategy session: I audit workflows, identify bottlenecks, map your top 5 AI opportunities`
  - `1: Opportunity Map (what to build, why, in what order)`
  - `2: Quick Win Install (context foundation + 1-2 automations live same day)`
  - `Why this matters: Most people start with tools. We start with strategy. You see results Day 1. You'll leave thinking: "I can actually do this."`
- Phase 02: `The Build`
  - `1: Context System — Build your business context WITH you (priorities, clients, processes, voice). Train your team on context engineering and tool selection.`
  - `2: Workflow Automation — Automate 2-3 high-leverage workflows. Build 1-2 custom internal tools. You watch me build, then build with me. Full documentation. 60-minute handoff—walk through everything, show you how to extend it.`
- Phase 03: `Support`
  - `Async support: Direct Slack/WhatsApp access for troubleshooting and quick wins`
  - `One check-in call: 30 minutes at Day 14-21 to review and optimize`
  - `Referral network: Need big custom builds? I'll connect you to specialists I trust`
  - `Why this matters: You're not abandoned. I'm here until the system sticks and you hit the guarantee.`
- Cta: `Book A Call`

### Pricing
- Eyebrow: `investment`
- H2: `Stop Figuring It Out Yourself. Start Operating on AI.`
- Sub: `Limited spots per quarter. Hop on a call.`
- Card title: `The AI-Native Sprint`
- Card sub: `I will install AI Native systems into your business.`
- Features:
  - `90-Minute Strategy Audit`
  - `Opportunity Map + Bottleneck Analysis`
  - `Context System Build (business, clients, SOPs, voice)`
  - `3 High-Leverage Workflows`
  - `Team Training on Context Engineering`
  - `Context System Build (business, clients, SOPs, voice)`
  - `Complete Handoff Documentation(SOPs + Looms)`
  - `60 Days Async Support + Check-in Call`
  - `Quick Win Install (Day 1)`
- Tag: `LIMITED spots available`
- CTA: `Apply Now`

### FAQ
- H2 line 1 (muted): `FAQs`
- H2 line 2: `Questions?`
- H2 line 3: `Answers!`
- Items:
  - 001 `Is this a course?` — `No. This is a done-with-you implementation sprint. I don't give you videos to watch later. I audit your business, map opportunities, and build the systems WITH you. You leave with a working system and the capability to extend it yourself.`
  - 002 `How is this different from buying a template?`
  - 003 `How is this different from hiring an agency?`
  - 004 `How much time does this require from me?`
  - 005 `Do I need technical skills?`
  - 006 `Can you guarantee results?`
  - 007 `What if my business is too unique?`

### Footer
- `© 2025 Mezcorp`
