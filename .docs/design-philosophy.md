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

- Cards: `rounded-xl border-2 border-emphasis-300 bg-surface p-6`
- Hover: `transition-all hover:-translate-y-1 hover:shadow-lg`
- Elevation: CSS custom properties for `--bg`, `--bg-card`, `--bg-card-hover`

## Amoebic UI

Amoebic UI is a layout philosophy that favors fluid, organic arrangements over
rigid grids. Content flows naturally, adapting to available space like an amoeba
adapts to its environment.

### Principles

1. **Fluid containers.** Use `max-w-[Npx]` with `mx-auto` for content width,
   not fixed pixel widths. Content breathes within its container.

2. **Organic wrapping.** Use `flex-wrap` for tag groups, stat boxes, and badge
   collections. Items wrap naturally based on available width.

3. **Responsive breakpoints.** Single breakpoint at 768px. Below: single column,
   reduced font sizes, collapsed navigation. Above: multi-column layouts.

4. **Content-driven sizing.** Let content determine container size. Avoid fixed
   heights on text containers. Use `min-h-[Npx]` only for interaction areas
   (flashcard flip zones).

### Implementation

- Content: `max-w-[700px] mx-auto my-6`
- Tags: `flex flex-wrap gap-2`
- Stats: `flex flex-wrap justify-center gap-3`
- Cards: `max-w-[600px] mx-auto` (flashcards), `max-w-[700px] mx-auto` (diagnostics)

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
