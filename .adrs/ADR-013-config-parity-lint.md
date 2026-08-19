# ADR-013: Validate astro.config.mjs invariants, don't regenerate

- **Status:** Accepted
- **Date:** 2026-08-19
- **Deciders:** Wyatt (maintainer)

## Context

The 46 `astro.config.mjs` files are ~90% identical. The hand-maintained
copies drifted silently: two original-era sites (alevel, dse) lost their
PWA manifest, theme-color meta, and font preloads during a head-template
update; six new test-prep sites were created without the JSON-LD WebSite
block; the KaTeX CDN version was pinned identically across all 45 sites
only by luck.

A config-factory approach was considered (ADR-011-style derivation), but
rejected: per-site sidebars, titles, descriptions, JSON-LD per-site data,
and locale settings are genuine content that lives nowhere else. A factory
that generates the full config couples every build to the generator, and
the generator must carry all sidebar definitions — duplicating the
sidebar data in a separate data file adds a maintenance surface without
removing the config surface.

## Decision

Create `scripts/lint-config-parity.js` (wired into lint:all, CI, and
lint-staged) that enforces invariant blocks across all Astro configs:

1. **KaTeX CDN pinned version** — exactly one version enforced repo-wide
   (`CANONICAL_KATEX_VERSION` constant, currently 0.16.44). A version bump
   touches the linter and all sites in one commit.
2. **Required head entries** — web-vitals script, PWA manifest, theme-color,
   both font preloads, jsDelivr dns-prefetch, KaTeX CSS, cross-site
   search + page-search scripts, JSON-LD WebSite structured data.
3. **Required pipeline** — `mdx({ remarkPlugins: [remarkMath],
   rehypePlugins: [rehypeKatex] })`, `sitemap()`, `compress()`, tailwind
   vite plugin, `clientOnlyDirectives` and `lazyImages` in markdown config.
4. **Shared-integration imports** — must resolve via `../../shared/`, not
   vendored copies.
5. **og:image** — must be an absolute `*.wyattau.com` URL.

Per-site variation (title, description, sidebar, locale, mermaid
enablement, JSON-LD per-site fields, og:image path) is explicitly out of
scope — the linter validates invariants only.

## Consequences

- Adding a new invariant: one rule in `lint-config-parity.js`, one ADR
  update, sites adjusted in the same commit.
- Removing an invariant: same process, removes a constraint.
- The parity violations found on the first run (manifest, theme-color,
  font preloads, JSON-LD) are now structurally impossible for future sites
  and caught for existing ones.
