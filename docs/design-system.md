---
title: "Design System"
description: "Complete guide to the Wyatt's Notes design system — tokens, themes, components, and patterns."
---

# Design System

Wyatt's Notes uses a comprehensive design system built on two core philosophies:

- **Spatial Materialism**: Layered elevation, weighted surfaces, z-axis depth
- **Amoebic UI**: Organic curvature, fluid radii, asymmetric breathing room

## Design Tokens

### Elevation (Spatial Materialism)

Five tiers model the design as a stack of physical planes:

| Tier | Use Case | Token |
|------|----------|-------|
| 0 | Flush with canvas | `--wn-elevation-0: none` |
| 1 | Resting card | `--wn-elevation-1: 0 1px 2px rgba(15,23,42,0.08)...` |
| 2 | Popovers, dropdowns | `--wn-elevation-2: 0 4px 8px rgba(15,23,42,0.1)...` |
| 3 | Dialogs, modals | `--wn-elevation-3: 0 12px 24px rgba(15,23,42,0.14)...` |
| 4 | Toast, overlays | `--wn-elevation-4: 0 24px 48px rgba(15,23,42,0.2)...` |
| accent | Colored halo | `--wn-elevation-accent: 0 8px 24px color-mix(...)` |

### Radii (Amoebic UI)

Organic curvature that grows with element size:

| Token | Value | Use Case |
|-------|-------|----------|
| `--wn-radius-xs` | 6px | Inline code, kbd |
| `--wn-radius-sm` | 10px | Buttons, inputs |
| `--wn-radius-md` | 14px | Small cards |
| `--wn-radius-lg` | 18px | Feature/site cards |
| `--wn-radius-xl` | 28px | Hero/stat blocks |
| `--wn-radius-pill` | 999px | Chips, badges |

### Spacing (Fluid)

Clamp-based spacing that breathes across devices:

| Token | Value |
|-------|-------|
| `--wn-space-fluid-xs` | `clamp(0.5rem, 0.45rem + 0.25vw, 0.75rem)` |
| `--wn-space-fluid-sm` | `clamp(0.75rem, 0.65rem + 0.5vw, 1rem)` |
| `--wn-space-fluid-md` | `clamp(1rem, 0.85rem + 0.75vw, 1.5rem)` |
| `--wn-space-fluid-lg` | `clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)` |
| `--wn-space-fluid-xl` | `clamp(2.5rem, 2rem + 2.5vw, 4rem)` |

### Motion

Organic easing curves that feel like "settling":

| Token | Value |
|-------|-------|
| `--wn-ease-organic` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--wn-ease-organic-in` | `cubic-bezier(0.66, 0, 0.34, 1)` |
| `--wn-duration-fast` | 140ms |
| `--wn-duration-base` | 220ms |
| `--wn-duration-slow` | 360ms |

### Status Colors

| Token | Value | Use Case |
|-------|-------|----------|
| `--wn-success` | #2ecc71 | Success states |
| `--wn-warning` | #f39c12 | Warning states |
| `--wn-error` | #e74c3c | Error states |
| `--wn-info` | #3498db | Information |
| `--wn-neutral` | #95a5a6 | Neutral states |

## Themes

10 complete themes, each with 34+ CSS variables:

| Theme | Style | Accent Color |
|-------|-------|--------------|
| Dark | Cinematic Dark | #ff8c4a (orange) |
| Light | Warm Paper Light | #ff6b35 (orange) |
| Sepia | EPUB Sepia | #c97b3a (brown) |
| Contrast | High Contrast | #ff8c4a (orange) |
| Nord | Arctic Blue | #88c0d0 (teal) |
| Dracula | Purple/Pink | #bd93f9 (purple) |
| Solarized | Warm Sand | #268bd2 (blue) |
| Monokai | Warm Dark | #a6e22e (green) |
| Ayu Mirage | Muted Blue-Grey | #ffcc66 (gold) |
| Papercolor | Bright White | #005f87 (blue) |

All themes pass WCAG AA contrast requirements.

## Components

### ActionButton

Consistent button component with 4 variants and 3 sizes.

```tsx
import ActionButton from '../components/ActionButton'

<ActionButton variant="primary" size="md" onClick={() => console.log('clicked')}>
  Click me
</ActionButton>
```

**Variants:** primary, secondary, danger, ghost
**Sizes:** sm (32px), md (40px), lg (48px)

### StatBox

Stat display component with highlight and color variants.

```tsx
import StatBox from '../components/StatBox'

<StatBox label="Score" value={42} highlight={true} color="success" />
```

### Skeleton

Loading state placeholder with pulse/wave animations.

```tsx
import Skeleton from '../components/Skeleton'

<Skeleton variant="rectangular" height="48px" animation="pulse" />
<SkeletonGroup rows={3} />
```

### SearchModal

Spotlight search with Cmd+K trigger.

```tsx
import SearchModal from '../components/SearchModal'

<SearchModal open={isOpen} onOpenChange={setIsOpen} />
```

**Keyboard shortcuts:** Cmd+K (open), Escape (close), ↑↓ (navigate), Enter (select)

### ThemeCreator

Custom theme creator with WCAG validation.

```tsx
import ThemeCreator from '../components/ThemeCreator'

<ThemeCreator open={isOpen} onOpenChange={setIsOpen} />
```

Features: Color pickers, live preview, WCAG AA validation, export/import CSS.

### ThemePreview

Live theme preview with comparison.

```tsx
import ThemePreview from '../components/ThemePreview'

<ThemePreview open={isOpen} onOpenChange={setIsOpen} />
```

Features: Side-by-side comparison, contrast ratio display, all 10 themes.

## Responsive Breakpoints

| Breakpoint | Viewport | Layout |
|------------|----------|--------|
| Base | < 768px | Mobile: full-width, hamburger menu |
| Tablet | 768px+ | Sidebar visible, 14-16rem width |
| Desktop | 1280px+ | Full layout |
| Wide | 1440px+ | Content max-width 52rem |

## Accessibility

- Skip link on all pages (visible on focus)
- WCAG AA contrast ratios (4.5:1 minimum)
- Full keyboard navigation
- Reduced motion support (manual + OS preference)
- ARIA labels on all interactive elements
- Focus indicators on all focusable elements
