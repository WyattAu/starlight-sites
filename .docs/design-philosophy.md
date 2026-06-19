# Design Philosophy

## Spatial Materialism

Spatial Materialism is a design approach that treats digital content as physical
objects in a three-dimensional space. Each element has weight, position, and
relationship to its neighbors.

### Principles

1. **Depth through layering.** Elements use subtle shadows and elevation to
   establish hierarchy. Cards float above backgrounds; modals float above cards.

2. **Consistent spacing.** All spacing follows a base-4 scale (4px, 8px, 12px,
   16px, 24px, 32px, 48px, 64px). No arbitrary values.

3. **Material surfaces.** Backgrounds use `--bg-card` with 1px borders at
   `--border` color. Hover states elevate with `translateY(-4px)` and enhanced
   box-shadow.

4. **Contained interactions.** Interactive components (flashcards, practice
   problems, diagnostics) occupy a bounded region with clear visual edges.

### Implementation

The design tokens live in `shared/styles/custom.css` and are synced to every site via `scripts/sync-shared.mjs`. The GUI traversal script (`tests/e2e/gui-snapshot.js`) verifies every compiled CSS bundle contains the full token set, so sync drift or token-stripping by a misconfigured minifier fails CI.

**Elevation tiers (Spatial Materialism).** Five tiers model the surface stack. A resting card sits at tier 1; modals and dialogs are lifted to tier 3; toasts reach tier 4 for maximum separation from the canvas. Interaction promotes a surface one tier and adds the accent halo (`--wn-elevation-accent`) so the lift is felt, not merely observed.

| Token | Default | Dark | Use |
|-------|---------|------|-----|
| `--wn-elevation-0` | `none` | `none` | Flush surface (dividers, inline elements) |
| `--wn-elevation-1` | subtle two-layer shadow | darker halo | Resting cards, sidebar |
| `--wn-elevation-2` | medium two-layer shadow | darker halo | Popovers, dropdowns |
| `--wn-elevation-3` | deep two-layer shadow | darker halo | Dialogs, modals |
| `--wn-elevation-4` | deepest two-layer shadow | darker halo | Toasts, temporary overlays |
| `--wn-elevation-accent` | accent-coloured 24px halo | same | Hover/focus reinforcement on any tier |

**Organic radii (Amoebic UI).** Radii scale with surface size so large elements feel softer than small ones. The pill token is the upper bound; chips and badges use it directly to read as infinite curves.

| Token | Value | Use |
|-------|-------|-----|
| `--wn-radius-xs` | 6px | Inline code, kbd |
| `--wn-radius-sm` | 10px | Buttons, inputs |
| `--wn-radius-md` | 14px | Small cards |
| `--wn-radius-lg` | 18px | Feature and site cards |
| `--wn-radius-xl` | 28px | Hero and stat blocks |
| `--wn-radius-pill` | 999px | Tags, badges |

**Fluid spacing (Amoebic breathing room).** Spacing uses `clamp()` so the layout expands and contracts organically across viewport widths, rather than stepping at fixed breakpoints. The fluid scale is preferred for surface padding; fixed pixel values remain only where geometry requires them (e.g. icon sizes).

| Token | Range | Use |
|-------|-------|-----|
| `--wn-space-fluid-xs` | 0.5rem to 0.75rem | Dense clusters (tag rows, kbd groups) |
| `--wn-space-fluid-sm` | 0.75rem to 1rem | Inline gaps |
| `--wn-space-fluid-md` | 1rem to 1.5rem | Card padding |
| `--wn-space-fluid-lg` | 1.5rem to 2.5rem | Section gaps |
| `--wn-space-fluid-xl` | 2.5rem to 4rem | Hero and page-level gaps |

**Motion (organic easing).** Two easings and three durations cover every transition. The standard easing (`--wn-ease-organic`, `cubic-bezier(0.22, 1, 0.36, 1)`) reads as a surface settling into rest. `prefers-reduced-motion: reduce` disables the transform component while preserving colour/shadow changes so the affordance survives.

**Landing card contract.** Every site landing card must use the `.landing-card` class. The class binds the elevation, radius, and motion tokens into a single rule so the card cannot drift from the design system. Hover lifts to tier 3 plus the accent halo; keyboard focus produces the tier 2 halo so the affordance is visible without a pointer.

## Amoebic UI

Amoebic UI is a layout philosophy that favors fluid, organic arrangements over
rigid grids. Content flows organically, adapting to available space like an amoeba
adapts to its environment.

### Principles

1. **Fluid containers.** Use `max-w-[Npx]` with `mx-auto` for content width,
   not fixed pixel widths. Content breathes within its container.

2. **Organic wrapping.** Use `flex-wrap` for tag groups, stat boxes, and badge
   collections. Items wrap on the available width without fixed column counts.

3. **Responsive breakpoints.** Single breakpoint at 768px. Below: single column,
   reduced font sizes, collapsed navigation. Above: multi-column layouts.

4. **Content-driven sizing.** Let content determine container size. Avoid fixed
   heights on text containers. Use `min-h-[Npx]` only for interaction areas
   (flashcard flip zones).

### Implementation

The Amoebic UI primitives are the fluid spacing scale and the organic radius ladder (see the Spatial Materialism section above for the token tables). Three concrete patterns cover every layout:

- **Content width**: `max-w-[700px] mx-auto my-6` for prose, `max-w-[1200px] mx-auto` for full-bleed grids. Fixed pixel widths are banned; the fluid spacing scale handles inter-element gaps.
- **Wrapping clusters**: `flex flex-wrap gap-[var(--wn-space-fluid-xs)]` for tag rows, badges, stat grids. Items wrap to available width; the gap breathes with the viewport.
- **Interaction surfaces**: `padding: var(--wn-space-fluid-md); border-radius: var(--wn-radius-lg)` for any card-sized interactive element. The radius scales with surface size so large cards read softer than small chips.

## Color System

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--accent` | `#ff6b35` | `#ff8c4a` | Primary brand (warm orange) |
| `--success` | `#2ecc71` | `#2ecc71` | Correct answers, mastery |
| `--warning` | `#f39c12` | `#f39c12` | Learning state, medium difficulty |
| `--error` | `#e74c3c` | `#e74c3c` | Incorrect answers, hard difficulty |
| `--info` | `#3498db` | `#3498db` | Review state, links |
| `--neutral` | `#95a5a6` | `#95a5a6` | New items, muted text |

## Typography

- **Body:** Inter (variable weight 100-900, `font-display: swap`)
- **Code:** JetBrains Mono (weight 400-700, `font-display: swap`)
- **Scale:** Body 16px, h1 3.5rem, h2 2rem, h3 1.5rem, small 0.875rem

## Accessibility

- All interactive components keyboard-navigable (arrow keys, Enter, Escape)
- `:focus-visible` outlines with `outline: 2px solid var(--accent)`
- `prefers-reduced-motion: reduce` disables all animations
- Semantic HTML: `<nav>`, `<main>`, `<footer>`, `role="radiogroup"`, `role="radio"`
- ARIA: `aria-label`, `aria-expanded`, `aria-checked`, `aria-current="page"`

## Print Styles

- Hide interactive components (flashcards, practice problems, diagnostics)
- Page breaks for h1 elements
- Monochrome color scheme
- Code blocks: border, padding, page-break-inside: avoid
- KaTeX: font-size 1em for proper rendering
