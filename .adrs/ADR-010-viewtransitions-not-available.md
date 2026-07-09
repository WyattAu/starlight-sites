# ADR-010: ViewTransitions not available in current stack

- **Status:** Accepted (blocking finding)
- **Date:** 2026-06-21
- **Deciders:** Nexus (Principal Systems Architect)

## Context

Astro 6 includes `<ViewTransitions />` from `astro:transitions` for smooth
same-origin page navigation. We attempted to enable it across three
independent approaches:

1. `viewTransitions: true` in `defineConfig` — silently ignored (not a valid
   Astro 6 config option in this stack).
2. `import { ViewTransitions } from 'astro:transitions'` in the Starlight
   Head override — Rollup module resolution error.
3. Same import in a regular `Layout.astro` (non-Starlight) — identical
   Rollup error.

The error occurs regardless of component context, confirming the issue is
with the `astro:transitions` virtual module resolution, not with Starlight
overrides specifically.

## Decision

Do not enable ViewTransitions in the current project. Document the finding
for future investigation. The follow-up should investigate:

(a) Whether `astro:transitions` requires a specific Vite/Rolldown plugin
    configuration that our `@astrojs/solid-js` integration doesn't provide.
(b) Whether the Bun runtime's module resolution handles virtual modules
    differently from Node.js (the `astro:transitions` module is a Vite
    virtual module, not a real file).
(c) Whether a future Astro or Starlight release resolves the conflict.

## Consequences

- The project remains on standard page navigation (full page reload) for
  content sites. The landing page (Astro-native, no Starlight) could
  potentially support ViewTransitions if the import issue is resolved.
- This is a nice-to-have feature, not a blocker. The static site
  architecture makes page transitions fast enough that the UX impact is
  minimal.
- The finding is documented so the next developer doesn't re-investigate
  the same three approaches.
