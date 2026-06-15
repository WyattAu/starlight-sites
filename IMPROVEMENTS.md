# Improvement Plan

## Component Integration

| Component | Status | Notes |
|-----------|--------|-------|
| Breadcrumbs | Integrated | Via PageTitle.astro Starlight override |
| Progress Tracking | Integrated | Via MarkdownContent.astro Starlight override |
| Practice Quizzes | Integrated | PracticeProblem.tsx (CSS-class based, keyboard navigable) |
| Flashcard Deck | Integrated | FlashcardDeck.tsx with SM-2 algorithm |
| Diagnostic Tests | Integrated | DiagnosticTest.tsx |

## Design System

| Element | Implementation |
|---------|---------------|
| Color theme | `--sl-color-accent: #ff6b35` (light) / `#ff8c4a` (dark) |
| Typography | Inter (body), JetBrains Mono (code) |
| KaTeX dark mode | Custom CSS overrides for `.katex` elements |
| Image dimming | `brightness(0.85) contrast(1.1)` in dark mode |

## Accessibility (Fixed)

| Issue | Fix |
|-------|-----|
| Missing skip link | Added `.skip-link` to landing page |
| Missing `<main>` landmark | Added `<main id="main-content">` |
| Missing `aria-label` on nav | Added `aria-label="Primary navigation"` |
| External links missing `rel` | Added `target="_blank" rel="noopener noreferrer"` |
| No focus-visible styles | Added `:focus-visible` outline rules |
| Decorative SVGs | Added `aria-hidden="true"` where applicable |

## Content Enrichment (Future)

- Interactive code examples (StackBlitz/CodeSandbox embeds)
- Video embeds for complex concepts
- Dark/light theme toggle per site
- PDF export for offline study

Note: BookmarkManager was prototyped but never integrated (zero usages) and has
been removed. Reintroduce via the shared-asset SOP only when there is a concrete
integration plan.
