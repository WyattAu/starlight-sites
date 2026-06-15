# ADR-004: No-emoji policy and shared-asset single-source-of-truth

## Status

Accepted

## Context

Two recurring quality problems were identified during the Phase 1 audit:

1. **Emoji drift in code.** Pictograph glyphs (status marks, decorative icons)
   had accumulated in shipped code (`search-api/worker.js`,
   `page-search.js`). These render inconsistently across terminals and screen
   readers, inflate byte size without semantics, and conflict with the
   project's rigorous style.
2. **Silent duplication drift.** Shared components, styles, and client scripts
   were copied into nine sites with no enforcement. Edits to one copy were not
   propagated, so the copies had already drifted (`page-search.js` and
   `cross-site-search.js` were byte-identical only by accident).

## Decision

Adopt two layered controls:

### No-emoji linter (`scripts/lint-no-emoji.js`)

- Scope: code, configuration, and repository-level documentation (ERROR).
- Exclusion: content pages under `sites/*/src/content/`, where Unicode code
  examples (e.g. surrogate-pair demonstrations) and typographic answer markers
  (U+2713, U+2717) are pedagogically required.
- Flagged ranges: the dedicated pictograph planes U+2600-U+27BF and
  U+1F000-U+1FAFF (the characters browsers render as colour emoji).
- Out of scope: mathematical arrows (U+2190-U+21FF) and geometric shapes
  (U+25A0-U+25FF), which are legitimate mathematical and chemical notation.

### Shared-asset synchroniser (`scripts/sync-shared.mjs`)

- Canonical sources: `shared/{components,utils,styles}` and
  `search-api/{page-search,cross-site-search}.js`.
- `sync` mirrors them to every site; `sync:check` exits non-zero on drift.
- The generator (`generate-site.mjs`) remains the bootstrap path for new sites.

## Rationale

- Emoji in shipped code is a professionalism and accessibility defect; a
  deterministic linter prevents regression.
- A single-source-of-truth with a deterministic sync eliminates copy drift
  without coupling site builds (each site still builds standalone).
- Layered enforcement (lint-staged locally, CI on push) keeps the developer
  loop fast while guaranteeing parity.

## Consequences

- Positive: byte-for-byte parity across sites is now provable in CI
  (`tests/unit/shared-sync.test.js`).
- Positive: emoji can no longer reach `main`.
- Negative: contributors must run `bun run sync` after editing canonical
  sources (documented in CONTRIBUTING.md).
- Negative: content pages require a conscious decision to use a pictograph; the
  linter does not block them.

## Alternatives considered

- Rewire sites to import directly from `shared/` via Vite aliases. Rejected:
  high risk of breaking nine independent builds for marginal benefit; the
  standalone-copy design is preserved.
- Flag the full Unicode symbol range. Rejected: would block legitimate
  mathematical and chemical notation.
