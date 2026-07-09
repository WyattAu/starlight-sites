# ADR-008: Lazy dynamic import of solid-sonner for SSR safety

- **Status:** Accepted
- **Date:** 2026-06-21
- **Deciders:** Nexus (Principal Systems Architect)

## Context

The qualifications site (267 pages, 357 practice pages) failed to build on
Astro 6 despite FlashcardDeck being wrapped in `client:only="solid"`. The
error originated in `solid-sonner/dist/index.js:31` — a module-level call
that triggers a client-only API during SSR.

Root cause: `solid-sonner` is imported statically at the top of
`FlashcardDeck.tsx`. Even with `client:only`, the module is evaluated during
the SSR build for dependency analysis. The module's top-level side effect
(calling a client-only API) causes the prerender to fail.

## Decision

Replace the static `import { toast } from 'solid-sonner'` with a dynamic
import helper:

```ts
async function showToast(type: 'success' | 'error', message: string) {
  const { toast } = await import('solid-sonner')
  toast[type](message)
}
```

All 5 toast calls (reset, export, import success/error) use this helper.
The async delay is imperceptible for fire-and-forget notifications.

## Consequences

- Qualifications (267p) builds clean on Astro 6.
- The dynamic import is evaluated only when a toast is actually triggered
  (client-side), not during SSR module evaluation.
- Other components using `solid-sonner` (if any are added) must follow
  the same pattern.
- The pattern is documented here so future developers understand why the
  import is dynamic rather than static.
