# Nav Specification

## Overview
- **Target file:** `src/components/Nav.tsx`
- **Interaction model:** static (floating pill at top of page; CTA hover state)

## DOM Structure
```
<header> floating pill bar
  <Link to "/"> brand area
    <MezCorpLogo />
    <span>MezCorp</span>
  </Link>
  <a href="https://cal.com/..."> Book A Call CTA pill </a>
</header>
```

## Computed Styles

### Container (floating bar)
- position: absolute (top of Page); width matches Page width 1905px on desktop
- height: 89px
- padding: ~24px 80px
- display: flex; justify-content: space-between; align-items: center
- background: transparent (sits on `#F5F5F5` body)
- max-content-width inner: 1120px centered

### Brand
- display: flex; align-items: center; gap: 8px
- Logo size: ~28x24
- Brand text: Archivo, fontWeight 600, fontSize 22px, color #1C1C1C
- letter-spacing: -0.02em

### Book A Call CTA
- background: #1C1C1C
- color: #FFFFFF
- font: Archivo / Inter, 15px, weight 500
- padding: 12px 22px
- border-radius: 999px (full pill)
- box-shadow: 0 8px 24px rgba(0,0,0,0.18)
- cursor: pointer

## States & Behaviors

### Hover (CTA)
- background: #1C1C1C → #2A2A2A
- transform: translateY(0) → translateY(-1px)
- transition: all 200ms ease

## Assets
- Logo: inline `<MezCorpLogo />` from `src/components/icons.tsx`

## Text Content (verbatim)
- Brand: `MezCorp`
- CTA: `Book A Call`

## Responsive Behavior
- **Desktop (1440px):** padding: 24px 80px, brand 22px
- **Mobile (390px):** padding: 16px 20px, brand 18px, CTA 13px / padding 10px 16px
- Breakpoint: ~768px
