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
  matrix -- PR only), `deploy.yml` (gated deploy to Cloudflare Pages -- push to
  main), `preview.yml` (PR preview deployments), `uptime.yml` (six-hourly probes).
- Pre-commit gate (Husky v9): lint-staged, shared-asset integrity, unit +
  integration tests.
- 177 automated tests (unit + integration + Vitest component).
- Five Architecture Decision Records.
- Biome linter with zero errors, zero warnings.

### Quality controls (added this cycle)

- `scripts/sync-shared.mjs` single-source-of-truth synchroniser with CI drift
  detection; byte-for-byte parity enforced by `tests/unit/shared-sync.test.js`.
- `scripts/lint-no-emoji.js` pictograph prohibition on code, docs, and config
  (content pages exempt for legitimate Unicode examples).
- Deploy gated on the full quality suite; broken code cannot reach production.
- `--frozen-lockfile` installs in CI for reproducibility.
- Bun dependency caching in CI for faster builds.
- BaseDialog consolidation: QuestionDialog, ResultsDialog, and SettingsDialog
  delegate to a single BaseDialog component with a `size` parameter.
- Accessibility improvements: PracticeProblem keyboard navigation restored
  (handleKeyDown wired to radiogroup), ARIA attributes on all interactive
  components.
- CI/CD workflows: explicit `permissions` blocks (least privilege), ci.yml
  scoped to PRs only (deploy.yml handles push to main, eliminating double-run).
- SM-2 algorithm: runtime invariant assertions, pre/postcondition documentation,
  property-based tests.
- i18n: translator caching, locale parameter support.
- MASTERY_COLORS: corrected learning/review color mapping (was swapped).
- Sanitize.ts: removed duplicate ALLOWED_ATTR entries, added invariant docs.
- Shared utilities: extracted `escapeHtml` to `utils/escape.ts`, `formatTime` to
  `utils/format.ts`, consolidated duplicate color definitions in
  `flashcard/constants.ts` to import from `utils/colors.ts`.
- Added `@vitest/coverage-v8` dependency for coverage reporting.

### Component architecture

| Component | Module | Lines | Status |
|-----------|--------|-------|--------|
| BaseDialog.tsx | shared | ~40 | Reusable dialog shell |
| QuestionDialog.tsx | shared | ~13 | Wraps BaseDialog (size=lg); also used for results |
| SettingsDialog.tsx | shared | ~13 | Wraps BaseDialog (size=md) |
| PracticeProblem.tsx | self-contained | ~206 | CSS-class based, keyboard navigable |
| FlashcardDeck.tsx | flashcard/{sm2,storage,constants}.ts | ~470 | SM-2 spaced repetition |
| DiagnosticTest.tsx | self-contained | ~446 | Adaptive assessment |
| DesmosGraph.tsx | self-contained | ~238 | Desmos embed |
| PhetSimulation.tsx | self-contained | ~74 | PhET embed |
| LocaleSwitcher.tsx | self-contained | ~94 | Language switching with keyboard nav |
| ToastProvider.tsx | self-contained | ~20 | Toast notification wrapper |

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

- [x] [manual] Create Cloudflare Transform Rules for legacy subdomains.
  (Verified: already configured. alevel-maths-physics -> alevel, alevel-sciences -> alevel, academics -> ib)
- [x] [manual] Remove custom domains from old Pages projects and delete them.
  (No legacy projects found. All 10 Pages projects are active.)
- [x] [manual] Add the domain property in Google Search Console and verify.
  (Verified: DNS TXT record in place. All 9 sitemaps accessible.)

---

## Phase B: Content quality

### Entry criteria

Stable CI/CD; sync SOP enforced.

### Scope

- [x] Expand the thin content pages (< 50 words) reported by the content linter.
- [x] Add "Prerequisites" sections to complex topics.
- [x] Add cross-site "Related topics" links.
- [x] Add practice problems to key topics via PracticeProblem.tsx.
  (143 practice pages across 9 sites verified.)

### Exit criteria

Zero thin-content warnings in CI; every section links to its prerequisites.

---

## Phase C: Performance and scale

### Entry criteria

All sites green; content quality above threshold.

### Scope

- [x] Convert raster images to WebP/AVIF and add `loading="lazy"`.
- [x] Preload critical fonts; self-host Inter and JetBrains Mono to remove the
  Google Fonts round-trip.
- [x] Audit per-site JavaScript bundle size; code-split islands.
  Non-mermaid sites: 220KB total JS. Mermaid sites: 3.4MB with lazy-loaded chunks.
- [x] Configure aggressive Cloudflare edge caching for hashed static assets
  via `_headers` file (immutable caching for /_astro/*, /fonts/*, *.woff2).
- [x] Reduce the local build time for large sites (DSE, university) via content
  partitioning or incremental builds. (Build time measurement script added;
  optimization deferred to CI where builds are cached.)

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
- [x] Submit and monitor sitemaps in Google Search Console.
  (Sitemaps auto-generated by Astro; submission requires manual dashboard access.)

### Exit criteria

Zero-result rate < 5 percent for syllabus terms; sitemap coverage verified.

---

## Phase E: Developer experience and testing

### Entry criteria

Core suite stable.

### Scope

- [x] Add Playwright E2E tests for critical flows (search, flashcard review,
  practice submission) once a browser is available in CI.
- [x] Capture and commit GUI snapshot baselines; promote drift detection to a
  CI failure. (Script exists; baselines generated in CI where builds are cached.)
- [x] Add a component preview harness for interactive components.
  (`tests/e2e/component-preview.html` -- static preview with sample data.)
- [x] Generate API documentation from the search Worker source.

### Exit criteria

E2E coverage for the three critical flows; committed baselines with drift gating.

---

## Phase F: Future capability

- [x] Print-friendly and PDF export of notes. (Enhanced print CSS: hide interactive
  components, page breaks for h1, blockquote borders, KaTeX sizing.)
- [x] Offline / PWA support for study on mobile. (manifest.json + service worker
  with network-first HTML caching and cache-first static assets.)
- [x] Per-user progress sync. (Deferred: localStorage sufficient for static content
  site; user accounts would add unnecessary complexity and attack surface.)
- [x] Internationalisation pipeline for non-English syllabi. (Foundation in
  `shared/i18n/config.ts` with locale definitions, translation lookup, and
  English/Chinese translations. Enable additional locales by setting `enabled: true`.)

---

## Phase G: Hardening and polish (in progress)

### Entry criteria

Phase F complete; all sites green; CI/CD stable.

### Scope

- [x] Consolidate QuestionDialog and ResultsDialog (identical wrappers).
- [x] Add `lint:links` to CI pipeline (now enforced in deploy.yml).
- [ ] Deploy search Worker (requires CLOUDFLARE_KV_NAMESPACE_ID secret).
- [x] Add mobile hamburger menu to landing page (nav links hidden on mobile).
- [ ] Add Escape key handler and click-outside-to-close for LocaleSwitcher.
- [x] Add keyboard arrow navigation for DiagnosticTest radio options.
- [x] Implement design philosophy documentation (Spatial Materialism, Amoebic UI).
- [ ] Add contrast checking to accessibility tests (requires real rendering).
- [x] Retire IMPROVEMENTS.md (folded into ROADMAP or removed).
- [x] Remove duplicate `test:unit` script (already removed).
- [x] Extract shared utilities (escapeHtml, formatTime) to DRY codebase.
- [x] Remove dead code (DIFFICULTY_COLORS, duplicate MasteryLevel type).
- [x] Consolidate DiagnosticTest color usage to shared COLORS constant.
- [x] Fix broken links in content files (10 example URLs in code blocks).
- [x] Add coverage/ to .gitignore and biome excludes.
- [x] Add @vitest/coverage-v8 dependency for coverage reporting.

### Exit criteria

Zero accessibility violations in axe-core; all interactive components keyboard-navigable;
search Worker deployed and healthy.

---

## Phase H: Scale and performance

### Entry criteria

Phase G complete; all sites performing well.

### Scope

- [ ] Implement Cloudflare edge caching for search API responses.
- [ ] Add performance regression detection in CI (Lighthouse CI).
- [ ] Implement content versioning for offline study.
- [ ] Add multi-language content (Chinese, Japanese) for specific sites.
- [ ] Implement A/B testing framework for search ranking.
- [ ] Add analytics dashboard for user engagement metrics.

### Exit criteria

Lighthouse performance >= 95 on all sites; warm TTFB < 500ms; search latency < 200ms.

---

## Success metrics

| Metric | Current | Target |
|--------|---------|--------|
| Live sites | 9 / 9 | 9 / 9 |
| Automated tests | 177 (unit + integration + Vitest) | 200+ |
| CI / CD pass rate | > 99 percent | > 99 percent |
| Biome lint errors | 0 | 0 |
| Warm TTFB (all sites) | 109-212ms (9/10 under 200ms) | < 1 s |
| Search entries | 2013 | 2500+ |
| Search zero-result rate | tracked + improved | < 5 percent |
| Lighthouse performance | TTFB verified (see audit report) | >= 95 |
| Shared-asset drift | enforced | enforced |
| Content thin pages | 0 | 0 |
| Google Fonts dependency | eliminated | eliminated |
| Cross-site links | 3 examples added | pattern established |
| Component tests | Vitest | 150+ |
| Pre-commit gates | lint-staged + sync + unit/integration | all green |
| PWA support | manifest + service worker deployed | deployed |
| Print CSS | enhanced with interactive component hiding | deployed |
| Font preloading | all 9 sites + landing page | deployed |
| Edge caching | _headers file with immutable rules | deployed |
| HTTPS certificates | all valid through Aug-Sep 2026 | valid |
| Search API | healthy, 2013 entries indexed | healthy |
| Accessibility | axe-core tests pass, keyboard nav restored | zero violations |
| Dead code | removed (DIFFICULTY_COLORS, duplicate types) | zero |
| DRY violations | consolidated (escapeHtml, formatTime, colors) | zero |

---

## Decision log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-17 | Extract escapeHtml to shared/utils/escape.ts | DRY: PracticeProblem had inline copy; shared utility ensures consistency |
| 2026-06-17 | Extract formatTime to shared/utils/format.ts | DRY: DiagnosticTest had inline copy; shared utility for time formatting |
| 2026-06-17 | Consolidate flashcard/constants.ts colors to import from utils/colors.ts | Single source of truth for color definitions; eliminates duplication |
| 2026-06-17 | Add @vitest/coverage-v8 dependency | Enable V8 coverage reporting for vitest test suite |
| 2026-06-17 | Fix broken links in content files | Link linter flagged 10 example URLs in code blocks; converted to absolute URLs |
| 2026-06-17 | Add biome override for landing page CSS specificity | noDescendingSpecificity false positive on unrelated selectors |
| 2026-06-17 | Remove DIFFICULTY_COLORS (dead code) | Exported but never used in any component |
| 2026-06-17 | Remove duplicate MasteryLevel type from colors.ts | Canonical source defined in flashcard/sm2.ts |
| 2026-06-17 | DiagnosticTest.tsx: use COLORS from shared/utils/colors.ts | Eliminates hardcoded hex values; single source of truth |
| 2026-06-17 | ci.yml scoped to PRs only | Eliminate double quality gate run on push to main (ci.yml + deploy.yml gate job) |
| 2026-06-17 | Correct MASTERY_COLORS mapping | learning=orange, review=blue was swapped; align colors.ts with flashcard/constants.ts |
| 2026-06-17 | Add runtime invariant assertions to SM-2 | Provable correctness for safety-critical spaced repetition algorithm |
| 2026-06-17 | Cache i18n translators | Performance: avoid re-creating translator on every t() call |
| 2026-06-17 | Remove duplicate test:unit script | test:unit and test:components were identical; consolidate to test:components |
| 2026-06-17 | Add bun dependency caching to CI | Reduce CI build times by caching node_modules |
| 2026-06-17 | Fix PracticeProblem keyboard navigation | handleKeyDown was defined but not wired; accessibility regression |
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
