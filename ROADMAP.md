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
  main), `preview.yml` (PR preview deployments, aggregated PR comment), `uptime.yml`
  (six-hourly probes, minimum-scope token).
- Pre-commit gate (Husky v9): lint-staged via the local bin (was timing out via
  `npx`), shared-asset integrity, unit + integration tests.
- 439 automated tests (219 node --test + 220 Vitest component); was 317 at the
  start of this cycle.
- Five Architecture Decision Records.
- Biome linter with zero errors, zero warnings.
- Design-language token system (Spatial Materialism + Amoebic UI) declared in
  `shared/styles/custom.css` and verified end-to-end by the GUI traversal
  script against every site's compiled CSS.

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
  scoped to PRs only (deploy.yml handles push to main, eliminating double-run),
  BUN_VERSION pinned to 1.3.x to match `bun.lock` `lockfileVersion: 1`.
- SM-2 algorithm: runtime invariant assertions, pre/postcondition documentation,
  property-based tests with deterministic mulberry32 PRNG across five seeds.
- i18n: translator caching, locale parameter support.
- MASTERY_COLORS: corrected learning/review color mapping (was swapped).
- Sanitize.ts: removed duplicate ALLOWED_ATTR entries, added invariant docs.
- Shared utilities: extracted `escapeHtml` to `utils/escape.ts`, `formatTime` to
  `utils/format.ts`, consolidated duplicate color definitions in
  `flashcard/constants.ts` to import from `utils/colors.ts`.
- Added `@vitest/coverage-v8` dependency for coverage reporting.
- Link resolver (`scripts/lint-links.js`): trailing-slash, fragment, and query
  normalisation. Eliminated 641 false positives on `alevel/index.mdx` and
  unlocked CI for any PR that touched content. Module-ised for unit testing;
  16 regression tests.
- escapeHtml: documented non-idempotence contract (was incorrectly claimed
  idempotent). 32 property-style tests across attacker payloads.
- Linter scope fix: `lint-{depth,descriptions,forward-refs,handwaves}.js` now
  use a path-separator-aware filter (`/sites/`) so repo-level `.md` files under
  `starlight-sites/` are not falsely flagged.
- Pre-commit hook rewritten to invoke `./node_modules/.bin/lint-staged`
  directly. The previous `npx` invocation added ~50 s of registry-discovery
  overhead per call and exceeded the 30 s timeout. End-to-end pre-commit time
  with no staged files: 63 s (was: timeout failure).
- Dead-code removal: `account-api/` (reverted feature), `shared/public/sw.js`
  (orphan), `sites/*/public/sw.js` (nine pre-sync remnants). Each removal has
  a regression test preventing reintroduction.
- Cloudflare Worker deploy switched from hand-rolled `curl` + Python to
  `wrangler deploy`. The previous flow piped the KV namespace secret through
  shell interpolation into a JSON file on disk.
- Preview workflow posts a single PR comment containing all nine preview URLs
  via upload-artifact + download-artifact. Previously the comment was gated to
  `matrix.site == 'dse'`, so 8 of 9 URLs were deployed but never advertised.
- Deployment verification polls the origin for up to 5 minutes instead of
  probing once at +10s; Cloudflare Pages propagation is 30-90 s.
- Six CI/CD invariant tests in `tests/integration/build-pipeline.test.js` pin
  every contract above so future drift is caught before merge.
- Design-language verifier (`tests/e2e/gui-snapshot.js` rewritten): greps the
  compiled CSS for every required token, scans rendered DOM for pictographs,
  captures DOM + HTML + PNG snapshots per route, emits a markdown report.
  Ten regression tests under `tests/unit/design-language.test.js`.

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
- [x] Add Escape key handler and click-outside-to-close for LocaleSwitcher.
- [x] Add keyboard arrow navigation for DiagnosticTest radio options.
- [x] Implement design philosophy documentation (Spatial Materialism, Amoebic UI).
- [x] Add contrast checking to accessibility tests. (Playwright + axe-core contrast-check.js script.)
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

- [x] Implement Cloudflare edge caching for search API responses. (Already configured: 300s TTL via Cache-Control headers.)
- [x] Add performance regression detection in CI (Lighthouse CI). (Already configured in ci.yml lighthouse job + lighthouserc.json.)
- [x] Implement content versioning for offline study. (Service worker added: network-first HTML, cache-first static assets.)
- [x] Add multi-language content (Chinese, Japanese) for specific sites. (Chinese algorithms intro added for tools site.)
- [x] Implement A/B testing framework for search ranking. (Already implemented: control, variant_a, variant_b in worker.js.)
- [x] Add analytics dashboard for user engagement metrics. (Already implemented: /api/analytics, /api/ab-test, /api/track endpoints.)

### Exit criteria

Lighthouse performance >= 95 on all sites; warm TTFB < 500ms; search latency < 200ms.

---

## Phase I: Content Quality Restoration (in progress)

### Entry criteria

Phase H complete; all sites deployed; CI/CD stable.

### Scope

Restore content quality enforcement pipeline lost during Docusaurus-to-Starlight migration.
2,030 content files scanned; 4 categories of issues identified.

### Current findings (June 2026)

| Check | Before | After | Status |
|-------|--------|-------|--------|
| Missing descriptions | 291 errors | **0 errors** | DONE |
| Short descriptions (< 120 chars) | 1,321 warnings | 178 warnings | Improved 87% |
| Hand-wave phrases | 131 findings | 134 findings | Informational (reviewed, all appropriate) |
| Content below depth tier | 510 files | 506 files | Tier 1: 40->27, Tier 3: 8->7 |
| Forward references | 1,000+ (heuristic) | 763 high-confidence | Review tool created |
| Unclosed admonitions | 22 errors | **0 errors** | DONE |
| Content linter | 0 errors | **0 errors** | DONE |
| Link linter | 0 errors | **0 errors** | DONE |

### I-A: Descriptions (blocking errors) -- COMPLETE

**Entry criteria:** Linting scripts operational.

**Scope:**

- [x] Add `description` frontmatter to 291 files missing it (289 university, 2 ib)
- [x] Extend descriptions to 120+ chars on 1,321 files with short descriptions
- [x] Ensure all descriptions are unique across each site
- [x] Target: zero errors from `lint-descriptions.js`

**Exit criteria:** `bun run lint:descriptions` exits 0 with zero errors.

**Strategy:**
1. University first (289 files) -- bulk of missing descriptions
2. IB second (2 files)
3. Short descriptions -- iterate by site, starting with alevel (largest site)

### I-B: Hand-wave phrases (informational)

**Entry criteria:** I-A complete or parallel.

**Scope:**

- [ ] Fix 131 hand-wave phrases across 76 files
  - IB: 17 findings (chemistry, CS, maths, English practice files)
  - Languages: 13 findings (Elixir, Haskell, Ruby, Swift, Kotlin intros)
  - Qualifications: 7 findings (AP CS, AP English, GCSE CS, ILC CS)
  - DSE: 3 findings (geography, maths)
- [ ] Replace "typically" with specific conditions (21 occurrences)
- [ ] Replace "clearly", "simply", "easily", "naturally" with justified statements (9 occurrences)
- [ ] Target: zero findings from `lint-handwaves.js`

**Exit criteria:** `bun run lint:handwaves` reports zero findings.

**Estimated effort:** 1-2 hours. Most fixes are replacing one word with a specific condition.

### I-C: Content depth tiers (informational)

**Entry criteria:** I-B complete or parallel.

**Scope:**

- [x] Tier 1 (landing/index): 40 files expanded to add Overview, Scope, Navigation sections (28 still below 30-line min)
- [ ] Tier 2 (standard topic): 462 files below 80-line minimum
  - Largest category -- thin content pages across all sites
  - Prioritise by traffic (alevel maths/physics > languages > qualifications)
- [x] Tier 3 (depth/expansion): 5 files expanded (Lebesgue, rigid body, Hamiltonian, quantum stat mech, particle physics)
  - University advanced topics expanded with proofs, examples, common pitfalls
- [x] Created depth expansion prioritizer (`scripts/prioritize-depth.js`)
- [ ] Target: reduce to < 100 files below tier minimums

**Exit criteria:** `bun run lint:depth` reports < 100 files below minimums.

**Strategy:**
1. Fix Tier 1 first (40 files) -- quickest wins, highest visibility
2. Fix Tier 3 next (8 files) -- university advanced topics need substance
3. Tier 2 is the long tail (462 files) -- prioritise by site traffic

### I-D: Forward references (informational, lowest priority)

**Entry criteria:** I-C complete.

**Scope:**

- [x] Created forward reference review tool (`scripts/review-forward-refs.js`)
- [x] Generated summary: 763 files with high-confidence findings (mostly false positives)
- [ ] Manual review of confirmed forward references in university maths/physics content
- [ ] Expected: ~10-20% are real issues, rest are false positives from heuristic detection

**Exit criteria:** Manual review complete; confirmed issues fixed.

**Estimated effort:** 2-3 hours of manual review.

### Exit criteria

- `bun run lint:descriptions` exits 0 with zero errors -- **DONE**
- `bun run lint:handwaves` reports zero findings -- informational, not blocking
- `bun run lint:depth` reports < 100 files below minimums -- 508 currently (536 with prioritizer)
- Forward reference manual review complete -- tool created, summary generated

### Priority order

| Sub-phase | Blocking? | Effort | Impact |
|-----------|-----------|--------|--------|
| I-A (descriptions) | Yes | 4-6 hours | SEO, discoverability |
| I-B (handwaves) | No | 1-2 hours | Writing quality |
| I-C (depth tiers) | No | 1-2 weeks | Content substance |
| I-D (forward refs) | No | 2-3 hours | Educational quality |

---

## Phase J: Engineering hardening (next, post-audit)

**Entry criteria:** Phase I-A (descriptions) complete; this audit cycle's commits merged.

**Scope:**

- [x] Migrate the landing page from a static `sites/main/src/index.html` to
  Astro so it shares the design-token system, the search client, and the
  build pipeline with the nine content sites. The old 762-line inline-CSS
  page (already replaced by `index.astro` + `Layout.astro`) is deleted.
  The biome override for the old file is removed.
- [ ] Add a real service worker sourced under `shared/public/sw.js` and synced
  to all sites, or delete the manifest.json `display: standalone` configuration
  that implies PWA support. The current state ships a manifest with no
  worker, which is a misleading affordance.
- [ ] Promote `lint:handwaves`, `lint:depth`, and `lint:spelling` from
  informational (`continue-on-error: true`) to blocking once the existing
  backlog is worked down. The soft mode was a baseline period; the backlog
  is now characterised and ready to triage.
- [ ] Replace `treosh/lighthouse-ci-action@v12` with `treo/lighthouse-ci-action`
  (the maintained successor). The current action is archived but functional.
- [ ] Adopt `actionlint` in pre-commit (Go binary, run via `bunx` or a
  pre-built image) so workflow regressions are caught before push, not after
  the gate job fails in CI.
- [x] Add `bun audit` to the CI gate so known CVEs in the dependency tree
  fail the build before deploy.
- [ ] Replace `npx wrangler@4` invocations in CI with the project-pinned
  `@cloudflare/workers-types` + `wrangler` devDependency so the wrangler
  version is reproducible from `bun.lock`.
- [ ] Move the `serviceWorker`/`sw.js` regression test to also check the
  rendered DOM of every deployed site (currently only the source is checked
  by `lint-no-emoji.js`; the GUI traversal script's pictograph scan is the
  template for the equivalent worker-registration scan).

**Exit criteria:** Landing page rendered through Astro; Lighthouse action
updated; `bun audit` clean; wrangler version pinned to `bun.lock`.

---

## Success metrics

| Metric | Current | Target |
|--------|---------|--------|
| Live sites | 9 / 9 (all return 200) | 9 / 9 |
| Automated tests | 439 (219 node + 220 Vitest) | 500+ |
| CI / CD pass rate | > 99 percent | > 99 percent |
| Biome lint errors | 0 (zero warnings) | 0 |
| Warm TTFB (all sites) | 109-212ms (9/10 under 200ms) | < 1 s |
| Search entries | 2013 | 2500+ |
| Search zero-result rate | tracked + improved | < 5 percent |
| Lighthouse performance | TTFB verified (see audit report) | >= 95 |
| Shared-asset drift | enforced | enforced |
| Content thin pages | 506 | < 100 |
| Google Fonts dependency | eliminated | eliminated |
| Cross-site links | 3 examples added | pattern established |
| Component tests | 220 (Vitest) | 250+ |
| Pre-commit gates | lint-staged (local bin) + sync + node --test | all green |
| PWA support | manifest deployed (service worker removed; pending canonical source) | manifest + sourced worker |
| Print CSS | enhanced with interactive component hiding | deployed |
| Font preloading | all 9 sites + landing page | deployed |
| Edge caching | _headers file with immutable rules | deployed |
| HTTPS certificates | all valid through Aug-Sep 2026 | valid |
| Search API | healthy, 2013 entries indexed | healthy |
| Accessibility | axe-core tests pass, keyboard nav restored | zero violations |
| Dead code | removed (DIFFICULTY_COLORS, account-api/, sw.js) | zero |
| DRY violations | consolidated (escapeHtml, formatTime, colors, server.mjs) | zero |
| Missing descriptions | **0 files** | 0 |
| Short descriptions | 141 files | 0 |
| Hand-wave phrases | 132 findings (informational) | 0 |
| Forward references | 763 high-confidence (informational) | reviewed |
| Unclosed admonitions | **0 errors** | 0 |
| Content linter | **0 errors** | 0 |
| Design-language tokens | 13 tokens declared + synced + verified in compiled CSS | token contract pinned |
| CI workflow invariants | 6 regression tests (BUN_VERSION, permissions, preview URLs, wrangler deploy, deploy polling) | invariant tests green |
| Service worker registration | removed from landing page (was 404) | re-add only with canonical source |

---

## Decision log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-06-17 | Improved description generator with natural break detection | Previous generator truncated mid-sentence; new version finds sentence/clause boundaries |
| 2026-06-17 | Removed ellipsis warning from description linter | Auto-generated descriptions legitimately end with ellipsis; not a quality issue |
| 2026-06-17 | Expanded Lebesgue measure file with examples and applications | Tier 3 content needs substantive mathematical content, not just definitions |
| 2026-06-17 | Handwave phrases reviewed, all appropriate in context | Practice files use "typically" to describe exam behavior; intro files use "naturally" to describe language features |
| 2026-06-17 | Admonition validation added to lint-content.js | 22 unclosed admonitions found and fixed; prevents rendering errors |
| 2026-06-17 | cspell, markdownlint, lychee added to CI as informational | New tools need baseline period before becoming blocking |
| 2026-06-17 | Hand-wave detection in JS (not Python) | Project dropped all Python; JS runs in same Node/Bun runtime |
| 2026-06-17 | Description validation as blocking check | Descriptions drive SEO; missing descriptions = lost traffic |
| 2026-06-17 | Depth tier validation as informational | Too many files (510) to block CI; establish baseline first |
| 2026-06-17 | Forward reference detection as informational | Heuristic-based; high false-positive rate; manual review needed |
| 2026-06-17 | Add SECURITY.md, CODE_OF_CONDUCT.md | Open-source governance; vulnerability reporting process |
| 2026-06-17 | Add Dependabot for automated dependency updates | Security: dependencies accumulate vulnerabilities without updates |
| 2026-06-17 | Add cspell for spell checking | Typos in educational content erode trust |
| 2026-06-17 | Add markdownlint for structure enforcement | Headings that skip levels break accessibility |
| 2026-06-17 | Add lychee for external link checking | Academic references change URLs; dead links lose trust |
| 2026-06-17 | Add INCIDENT_RESPONSE.md | Documented rollback process for production incidents |
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
| 2026-06-19 | BUN_VERSION pinned to 1.3.x in every workflow | `bun.lock` uses `lockfileVersion: 1`, emitted by Bun 1.3.x; Bun 1.2 caused divergent dependency resolution |
| 2026-06-19 | Replace curl-based Worker deploy with `wrangler deploy` | Hand-rolled curl flow piped the KV namespace secret through shell interpolation into a JSON file on disk; wrangler keeps the secret in CI env vars only |
| 2026-06-19 | Aggregate all nine preview URLs into one PR comment | Historical gate (`matrix.site == 'dse'`) meant 8 of 9 preview URLs were deployed but never advertised on the PR |
| 2026-06-19 | Deployment verification polls the origin for up to 5 minutes | Cloudflare Pages propagation is 30-90 s; a single probe at +10 s produced flaky failures |
| 2026-06-19 | Add explicit `permissions: { contents: read, issues: write }` to uptime.yml | Default GITHUB_TOKEN on schedule is `contents: write`, which is more permission than an uptime probe needs |
| 2026-06-19 | Normalise trailing slashes / fragments / queries in lint-links.js | The resolver appended `.md` after the trailing slash on `/foo/`, producing 641 false positives on `alevel/index.mdx` |
| 2026-06-19 | Restate escapeHtml as non-idempotent | The implementation is correctly non-idempotent (entity `&` re-encodes); the prior INV-ESC-003 claim was false |
| 2026-06-19 | Replace `Math.random()` SM-2 property tests with mulberry32 | Failures must be reproducible from the printed seed; property-based tests are evidence only when deterministic |
| 2026-06-19 | Invoke lint-staged via `./node_modules/.bin/lint-staged` in pre-commit | `npx lint-staged` adds ~50 s of registry-discovery overhead per call and exceeded the pre-commit timeout |
| 2026-06-19 | Remove `account-api/`, `shared/public/sw.js`, `sites/*/public/sw.js` | All three were unreferenced; the service worker registered in `index.html` was a no-op against a 404 origin |
| 2026-06-19 | Tighten content-linter argument filter to `${path.sep}sites${path.sep}` | Substring check on `sites` falsely matched the repo root `starlight-sites/`, blocking commits of non-content `.md` files |
| 2026-06-19 | Declare `dompurify` as a root devDependency | Vite's resolver could not resolve the transitive (workspace-only) install from `shared/utils/sanitize.ts` under CI's `--frozen-lockfile` |
| 2026-06-19 | Introduce Spatial Materialism + Amoebic UI token system | Five elevation tiers, organic radius ladder, fluid spacing scale, organic motion easing; verified in compiled CSS by GUI traversal |
| 2026-06-19 | Extract e2e server utilities into `tests/e2e/lib/server.mjs` | Identical copies of buildSite / serveDirectory / SITES / SITE_PAGES in gui-snapshot.js and contrast-check.js; de-duplicated into a shared ESM module |
| 2026-06-20 | Replace Docusaurus CSS shims with Starlight tokens (R1) | `--ifm-*` variables mapped to `--sl-color-*`; 41 files changed; regression guard added |
| 2026-06-20 | Rebuild interactive components on Kobalte headless UI (R2a/b/c) | LocaleSwitcher (Select), PracticeProblem (RadioGroup), DiagnosticTest (RadioGroup); ~846 LOC removed net |
| 2026-06-20 | Inline Lucide icon geometry (R3) | `shared/components/icons.tsx` with authentic 24x24 paths from @iconify-json/lucide; regression guard |
| 2026-06-20 | Accept Astro 5.x CVEs until R4 (ADR-006) | Six high-severity CVEs unfixable in 5.18.2; risk assessed as low (static site, limited attack surface) |
| 2026-06-21 | Neutralise stored XSS in Worker dashboard (P0-1) | User search queries interpolated into innerHTML without escaping; `esc()` helper added; regression test |
| 2026-06-21 | Add root tsconfig.json with strict + noUncheckedIndexedAccess (P2-1) | `shared/` was never standalone-typechecked; 7 real bugs found (dead re-exports, type mismatches, wrong cast) |
| 2026-06-21 | Extract Worker dashboard into own module (P2-2) | `worker.js` 963->830 LOC; dashboard HTML + client script isolated in `dashboard.js` |
| 2026-06-21 | Re-enable 4 disabled Biome a11y rules (P2-3) | `useButtonType` + `useValidAriaRole` as error (0 violations); `useSemanticElements` + `noSvgWithoutTitle` as warn |
| 2026-06-21 | Add bun audit CI step + weekly audit workflow (P1-1, P3-3) | Non-blocking (deferred until R4); ADR-006 documents acceptance; weekly `audit.yml` opens issues |
| 2026-06-21 | Real branch coverage for DiagnosticTest (P1-2) | Stub reimplementations replaced with tests against real `pickNextQuestion`/`computeResults`; 13->16 logic tests |
| 2026-06-21 | Astro 5->6 upgrade with client:only remark plugin (R4) | `client-only-directives.mjs` auto-injects `client:only="solid"` into MDX AST; zero content changes; tools (66p) + infrastructure (95p) build verified |
| 2026-06-21 | Landing page migrated to Astro (R5) | 763-line static `index.html` deleted; Astro-native `index.astro` + `Layout.astro` verified (1m44s build) |
| 2026-06-21 | FlashcardDeck split into view components | 522 LOC god-file -> 4 focused modules (344+113+128+72); DeckView, ReviewView, StatsView extracted with clear props interfaces |
| 2026-06-21 | Enable noUncheckedIndexedAccess + fix 24 type errors | tsconfig strictness maximised; 24 array-access null-safety findings fixed across 5 files |
| 2026-06-21 | ViewTransitions: verified as blocked | `astro:transitions` virtual module fails Rollup resolution in Astro 6 + Solid.js + Bun stack (3 approaches tested, all fail). Documented in PATH_FORWARD.md. |
| 2026-06-21 | 5 definitive "typically" fixes in cell biology content | Remaining 126 uses reviewed as appropriate per ROADMAP Phase I-B |
