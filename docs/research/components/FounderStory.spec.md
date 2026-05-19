# FounderStory Specification

## Overview
- **Target file:** `src/components/FounderStory.tsx`
- **Interaction model:** static

## DOM Structure
```
<section> 847px tall
  <div> two-column layout
    <div left> portrait JPG of founder, full-bleed inside its column
    <div right> content
      <span eyebrow> Who's Building This?
      <h2> I Run My Business From These Systems
      <p sub-italic> This Isn't Theory
      <p> Tools don't solve bottlenecks. Systems do. ...
      <h3> My Story
      <ul> timeline list (5 entries)
```

## Computed Styles

### Section
- background: #F5F5F5
- padding: 100px 0 80px

### Two-column container
- max-width: 1120px
- margin: 0 auto
- display: grid
- grid-template-columns: 460px 1fr
- gap: 64px
- align-items: start

### Left portrait wrapper
- border-radius: 24px
- overflow: hidden
- aspect-ratio: 4 / 5
- background: #EDEDED
- img: width 100%, height 100%, object-fit: cover

### Eyebrow
- font: Inter 13px / weight 600 / lowercase / letter-spacing 0.08em
- color: #6E6E6E

### H2
- font: Archivo 40px / weight 500 / line-height 1.1 / letter-spacing -1.6px
- color: #1C1C1C
- margin-top: 12px

### Sub-italic
- font: Inter 16px italic / color #6E6E6E
- margin-top: 12px

### Body p
- font: Inter 16px / line-height 1.6 / color #6E6E6E
- margin-top: 12px

### H3 "My Story"
- font: Archivo 20px / weight 600 / color #1C1C1C / letter-spacing -0.02em
- margin-top: 32px

### Timeline ul
- list-style: none
- padding: 0
- margin-top: 16px
- display: flex
- flex-direction: column
- gap: 16px

### Timeline li
- display: flex
- gap: 12px
- font: Inter 15px / line-height 1.6 / color #6E6E6E
- ::before bullet: small dot in #1C1C1C, 6px

## Text Content (verbatim)
- Eyebrow: `Who's Building This?`
- H2: `I Run My Business From These Systems`
- Italic sub: `This Isn't Theory`
- Body: `Tools don't solve bottlenecks. Systems do. You're not more productive. You're just busy in new ways.`
- H3: `My Story`
- Timeline:
  1. `Age 14: Made first $5 online selling IG shoutouts. Learned that content + systems = leverage.`
  2. `Age 18-19: Built a 20K TikTok account, 50m views. Learned content.`
  3. `2023-2024: Worked in growth & product at a tech startup. Learned how real companies operate, and where they break.`
  4. `2025: Formalized MezCorp. Built AI-native systems for real clients.`
  5. `Today: 22 years old. Running a ai consultancy. I use the system I'm teaching you every single day. My daily planning takes 30 minutes. My AI knows my clients, my SOPs, my priorities. I'm not selling you a course. I'm teaching you the system that runs my business.`

## Assets
- Founder portrait: `/images/f6GMfCZ8a6tfdRDgzsmW0jPi0s.jpg`

## Responsive Behavior
- **Desktop (1440px):** 2-col grid, portrait left
- **Mobile (390px):** single column, portrait first then content, h2 28px
- Breakpoint: ~900px
