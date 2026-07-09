# ADR-007: Client-only directives remark plugin for Kobalte SSR

- **Status:** Accepted
- **Date:** 2026-06-21
- **Deciders:** Nexus (Principal Systems Architect)

## Context

The Astro 6 upgrade (R4) was blocked by Kobalte's popper module calling
`solid-js/web`'s `template()` at module top level — a client-only API that
fails during Astro's server-side prerender. The error chain:
`<PracticeProblem>` -> `QuestionDialog` -> `BaseDialog` -> `@kobalte/core`
Dialog (popper). The `@astrojs/solid-js` v6 integration SSRs Solid islands
to HTML during prerender; v5 did not trigger this code path.

Three unblock approaches were considered:
1. `client:only="solid"` wrappers via `.astro` components — failed because
   Vite's extension resolution doesn't try `.astro` for `import X from
   "@components/PracticeProblem"` (JS module resolution order doesn't include
   .astro).
2. `lazy()` + `isServer` conditional imports — failed because Solid's
   `lazy()` dynamic import of the Kobalte chunk hangs in vitest.
3. **Shared remark plugin** (chosen) — auto-injects `client:only="solid"`
   into the MDX AST for specific component names. Zero content file changes.

## Decision

Create `shared/integrations/client-only-directives.mjs`, a remark plugin
that walks the MDX AST and adds `client:only="solid"` to `mdxJsxFlowElement`
and `mdxJsxTextElement` nodes matching `PracticeProblem`, `DiagnosticTest`,
`FlashcardDeck`. Register in each site's `astro.config.mjs` via
`markdown.remarkPlugins: [..., clientOnlyDirectives]`.

## Consequences

- Zero content file changes — transparent to authors.
- The three interactive widgets are not in the prerendered HTML (SEO trade-off:
  page prose is in markdown; the interactive widget is supplementary).
- The plugin is 67 lines, dependency-free (manual AST walk, no `unist-util-visit`).
- Build verified on tools (66p), infrastructure (95p), qualifications (267p).
- If new non-SSR-safe Solid components are added, they must be added to the
  `CLIENT_ONLY_COMPONENTS` set in the plugin.
