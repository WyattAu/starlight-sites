# Roadmap

This roadmap tracks the technical path from the current state through hardening,
scale, and future capability. Each phase has explicit entry criteria, scope, and
verifiable exit criteria. Items marked [manual] require dashboard access and
cannot be automated from the repository.

## Current state (June 2026)

### Infrastructure

- Nine Starlight sites deployed to Cloudflare Pages; landing page at
  wyattsnotes.wyattau.com; cross-site search API at search.wyattau.com
  (nine sites, ~2013 indexed entries).
- CI/CD via GitHub Actions: `ci.yml` (lint, integrity, tests, nine-site build
  matrix), `deploy.yml` (gated deploy to Cloudflare Pages), `uptime.yml`
  (six-hourly probes).
- Pre-commit gate (Husky v9): lint-staged, shared-asset integrity, unit +
  integration tests.
- 169 automated tests (unit + integration).
- Five Architecture Decision Records.

### Quality controls (added this cycle)

- `scripts/sync-shared.mjs` single-source-of-truth synchroniser with CI drift
  detection; byte-for-byte parity enforced by `tests/unit/shared-sync.test.js`.
- `scripts/lint-no-emoji.js` pictograph prohibition on code, docs, and config
  (content pages exempt for legitimate Unicode examples).
- Deploy gated on the full quality suite; broken code cannot reach production.
- `--frozen-lockfile` installs in CI for reproducibility.

### Component architecture

| Component | Module | Lines | Status |
|-----------|--------|-------|--------|
| PracticeProblem.tsx | self-contained | ~230 | CSS-class based (refactored) |
| FlashcardDeck.tsx | flashcard/{sm2,storage,constants}.ts | ~400 | SM-2 spaced repetition |
| DiagnosticTest.tsx | self-contained | ~350 | Adaptive assessment |
| DesmosGraph.tsx | self-contained | ~236 | Desmos embed |
| PhetSimulation.tsx | self-contained | ~74 | PhET embed |

Inline-style status: PracticeProblem is fully class-based. FlashcardDeck and
DiagnosticTest retain dynamic inline styles where a value is computed at runtime
(CSS custom properties, percentage widths, perspective); static styles use
classes.

---

## Phase A: Stabilisation (complete)

- [x] Verify CI workflow on GitHub Actions.
- [x] Verify deploy workflow ships all nine sites to Cloudflare Pages.
- [x] Gate deploy on the full quality suite.
- [x] Add deployment status badges and large-asset detection.
- [x] Remove dead code (BookmarkManager, shared/config.js, Playwright stubs,
  stale lockfiles, redundant workspace manifests).
- [x] Establish shared-asset single-source-of-truth SOP with drift enforcement.

### Remaining (operational)

- [ ] [manual] Create Cloudflare Transform Rules for legacy subdomains.
- [ ] [manual] Remove custom domains from old Pages projects and delete them.
- [ ] [manual] Add the domain property in Google Search Console and verify.

---

## Phase B: Content quality

### Entry criteria

Stable CI/CD; sync SOP enforced.

### Scope

- [x] Expand the thin content pages (< 50 words) reported by the content linter.
- [x] Add "Prerequisites" sections to complex topics.
- [x] Add cross-site "Related topics" links.
- [ ] Add practice problems to key topics via PracticeProblem.tsx.

### Exit criteria

Zero thin-content warnings in CI; every section links to its prerequisites.

---

## Phase C: Performance and scale

### Entry criteria

All sites green; content quality above threshold.

### Scope

- [x] Convert raster images to WebP/AVIF and add `loading="lazy"`.
- [ ] Preload critical fonts; self-host Inter and JetBrains Mono to remove the
  Google Fonts round-trip.
- [ ] Audit per-site JavaScript bundle size; code-split islands.
- [ ] Configure aggressive Cloudflare edge caching for hashed static assets.
- [ ] Reduce the local build time for large sites (DSE, university) via content
  partitioning or incremental builds.

### Exit criteria

Warm TTFB < 1 s for every site; Lighthouse performance >= 95 on landing and
representative content pages.

---

## Phase D: Search and discovery

### Entry criteria

Search API stable and indexed.

### Scope

- [x] Add search API unit tests with a mocked KV namespace.
- [x] Improve ranking (relevance gate, zero-result recovery, suggestions).
- [x] Add search analytics dashboard improvements (query latency, zero-result
  rate, top zero-result queries).
- [ ] Submit and monitor sitemaps in Google Search Console.

### Exit criteria

Zero-result rate < 5 percent for syllabus terms; sitemap coverage verified.

---

## Phase E: Developer experience and testing

### Entry criteria

Core suite stable.

### Scope

- [x] Add Playwright E2E tests for critical flows (search, flashcard review,
  practice submission) once a browser is available in CI.
- [ ] Capture and commit GUI snapshot baselines; promote drift detection to a
  CI failure.
- [ ] Add a component preview harness for interactive components.
- [x] Generate API documentation from the search Worker source.

### Exit criteria

E2E coverage for the three critical flows; committed baselines with drift gating.

---

## Phase F: Future capability

- [ ] Print-friendly and PDF export of notes.
- [ ] Offline / PWA support for study on mobile.
- [ ] Per-user progress sync (optional account layer).
- [ ] Internationalisation pipeline for non-English syllabi.

---

## Success metrics

| Metric | Current | Target |
|--------|---------|--------|
| Live sites | 9 / 9 | 9 / 9 |
| Automated tests | 177 (unit + integration) | 220+ |
| CI / CD pass rate | > 99 percent | > 99 percent |
| Warm TTFB (all sites) | < 3 s (improving with self-hosted fonts) | < 1 s |
| Search entries | ~2013 | 2500+ |
| Search zero-result rate | tracked + improved | < 5 percent |
| Lighthouse performance | unmeasured | >= 95 |
| Shared-asset drift | enforced | enforced |
| Content thin pages | 0 | 0 |
| Google Fonts dependency | eliminated | eliminated |
| Cross-site links | 3 examples added | pattern established |

---

## Decision log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-16 | Search ranking relevance gate | Unconditional authority score included non-matching entries; gate ensures only relevant entries appear |
| 2026-06-16 | Self-host fonts (Inter + JetBrains Mono) | Remove Google Fonts CDN round-trip; GDPR compliance; faster FOUT |
| 2026-06-16 | Search quality metrics tracking | Zero-result rate + latency monitoring for data-driven improvement |
| 2026-06-16 | Prerequisites and cross-site links | Educational scaffolding; connect topics across sites and levels |
| 2026-06-16 | Zero-result recovery suggestions | Present curated alternatives when no results; measurable zero-result-rate improvement |
| 2026-06-16 | Image lazy loading via rehype plugin | Defers off-screen image fetches; first image left eager for above-the-fold performance |
| 2026-06-15 | Export worker pure functions for testability | Eliminates duplicated logic in test files; tests run against production code |
| 2026-06-15 | Enforce shared-asset single-source-of-truth | Eliminate copy drift; provable parity in CI |
| 2026-06-15 | No-emoji linter scoped to code/docs/config | Professional, accessible; preserve content notation |
| 2026-06-15 | Gate deploy on the full quality suite | Broken code cannot reach production |
| 2026-06-15 | Remain on Cloudflare Pages (ADR-005) | Avoid DNS/redirect churn; keep Worker co-located |
| 2026-06-14 | Use SolidJS, not React, for islands | Smaller bundles, fine-grained reactivity (ADR-002) |
| 2026-06-14 | Consolidate to two primary workflows | Prior redundancy caused duplicate builds |
| 2026-06-12 | Starlight over Docusaurus | Performance and modern tooling (ADR-001) |
| 2026-06-12 | Cloudflare Pages + Worker + KV | Integrated static + dynamic search (ADR-003) |
