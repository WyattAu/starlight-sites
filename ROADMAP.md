# Roadmap

**Last updated:** 2026-08-22
**Relationship to STATUS.md:** STATUS.md is the strategic overview (competitive
matrix, scoring, rationale). This document is the execution plan: tasks with
checkboxes, dependencies, effort estimates, and exit criteria.

---

## Current state (verified 2026-08-22)

- 46 Astro Starlight sites deployed to Cloudflare Pages; landing page at
  wyattsnotes.wyattau.com; cross-site search API at search.wyattau.com
  (45 sites, ~2013 indexed entries).
- CI/CD via GitHub Actions: ci.yml (lint, integrity, tests, 45-site build
  matrix), deploy.yml (canary 2-site wave then 43-site rollout with
  auto-rollback), preview.yml (PR previews for 6 representative sites),
  uptime.yml (six-hourly probes), slo-alert.yml (every 30 min).
- Pre-commit gate: lint-staged via local bin, sync-shared --check, unit +
  integration tests.
- 439+ automated tests (219 node:test + 220+ vitest).
- 13 Architecture Decision Records (.adrs/).
- Biome linter with zero errors.
- Content: 3,331 files, ~1.44M lines across 44 content sites + 2 hub pages.

---

## Component architecture

| Component | Module | Lines | Status |
|-----------|--------|-------|--------|
| BaseDialog.tsx | shared | ~40 | Reusable dialog shell |
| QuestionDialog.tsx | shared | ~13 | Wraps BaseDialog (size=lg) |
| SettingsDialog.tsx | shared | ~13 | Wraps BaseDialog (size=md) |
| PracticeProblem.tsx | self-contained | ~206 | CSS-class based, keyboard navigable |
| FlashcardDeck.tsx | flashcard/{sm2,storage,constants}.ts | ~470 | SM-2 spaced repetition |
| DiagnosticTest.tsx | self-contained | ~446 | Adaptive assessment |
| DesmosGraph.tsx | self-contained | ~238 | Desmos embed |
| PhetSimulation.tsx | self-contained | ~74 | PhET embed |
| LocaleSwitcher.tsx | self-contained | ~94 | Language switching |
| ToastProvider.tsx | self-contained | ~20 | Toast wrapper |

---

## P0 -- Stop the bleeding

Estimated total: 1-2 weeks.

### P0-1: Capitalisation corruption fix

- [ ] Write a script to fix the 664-file mid-sentence capitalisation bug
  (pattern: dollar-Then, dollar-So, dollar-And, dollar-But with trailing
  space -- all pre-date the
  Docusaurus-to-Starlight migration, present in WyattsNotes source).
- [ ] Apply to all affected files.
- [ ] Add a regression lint or test to prevent reintroduction.
- **Effort:** 0.5 day (script + apply).
- **Exit criteria:** zero matches for the capitalisation corruption pattern.

### P0-2: Description regeneration

- [ ] Write a script that extracts the first 120-160 char paragraph from each
  file body and replaces templated/garbage descriptions (pattern: "Study notes
  and resources for ...", "Comprehensive educational content ...").
- [ ] Run across all ~1,030 affected files.
- [ ] Verify uniqueness per site (flag duplicates for manual fix).
- **Effort:** 1 day (script + apply + spot-check).
- **Exit criteria:** `bun run lint:descriptions` warnings drop from ~1,671 to
  < 100 (remaining are short descriptions on thin pages, fixed in P1-6).

### P0-3: Broken defaults cleanup

- [ ] Fix `generate-site.mjs` template: add `compress()`,
  `clientOnlyDirectives`, analytics head entry, all component overrides so
  generated sites pass `lint-config-parity.js`.
- [ ] Fix og:image cross-site bug: 12 programming sites point at
  `languages.wyattau.com/img/social-card.svg` instead of their own.
- [ ] Remove dead `academics -> university` redirect (subdomain decommissioned).
- [ ] Fix theme-color: wire `sites.meta.json` per-site colors into
  `astro.config.mjs` head entries (currently all hardcode DSE orange
  `#ff6b35`).
- [ ] Remove unused `astro-seo` and `@jdevalk/astro-seo-graph` from root
  devDependencies.
- **Effort:** 1 day total.
- **Exit criteria:** `lint-config-parity.js` passes on a freshly generated
  site; og:image URLs verified per-site; `npm ls astro-seo` returns empty.

### P0-4: KV namespace blocker

- [ ] Add `CLOUDFLARE_KV_NAMESPACE_ID` as a repository secret.
- [ ] Verify search index uploads to the correct KV namespace after deploy.
- [ ] Confirm all 45 sites appear in the search index (currently only 6).
- **Effort:** 0.5 day (manual Cloudflare dashboard + CI verification).
- **Blocked on:** Repository secret requires admin access.
- **Exit criteria:** `search.wyattau.com/api/health` returns entries from all
  45 sites.

### P0-5: Locale gating

- [ ] Audit all 11 sites that configure `zh` locale -- count actual zh content
  files per site (current finding: 1-2 stubs each).
- [ ] For sites with < 5 real zh pages: set `enabled: false` in
  `astro.config.mjs` and remove hreflang zh entries from Head.astro.
- [ ] For gaokao (genuine Chinese content): keep zh enabled.
- **Effort:** 0.5 day.
- **Exit criteria:** No site serves hreflang zh pairs pointing at stub pages.

---

## P1 -- Close competitive gaps

Estimated total: 1-2 months.

### P1-6: Diagrams (top-200 pages)

- [ ] Audit which of the top-200 content pages by file size lack any visual
  element (image, Mermaid, Desmos, PhET).
- [ ] Add Mermaid diagrams to pages that already use `mermaid` integration
  (physics, chemistry, computer-science).
- [ ] For math-heavy pages: evaluate TikZ-to-SVG pipeline or DesmosGraph
  imports for geometric intuition.
- [ ] Target: every page in the top-200 has at least one visual element.
- **Effort:** 2-3 weeks (content creation, not code).
- **Exit criteria:** >80% of top-200 pages contain a visual element.

### P1-7: Build out stub sites

Sequence: driving-us/uk first (real search volume, lowest authoring cost),
driving-eu third, civics-tests fourth, language-tests fifth,
licensing/professional-certs last (competes with commercial providers).

For each site:

- [ ] Source content from official bodies (MUTCD, USCIS, DVSA, GOV.UK,
  CEFR framework).
- [ ] Author 50-150 pages at CONTENT_STANDARD tiers (Tier 2 minimum 80 lines,
  Tier 3 minimum 120 lines with 2+ worked examples and 3+ pitfalls).
- [ ] Fix US-localisation errors (EU Vienna Convention signs currently shown
  on the US driving site).
- [ ] Add official-source citations (E-E-A-T requirement).
- [ ] Verify factual accuracy per site's jurisdiction.

| Site | Target pages | Source body | Priority |
|------|-------------|-------------|----------|
| driving-us | 80-100 | MUTCD, state DMV handbooks | 1 |
| driving-uk | 80-100 | Highway Code, DVSA | 2 |
| driving-eu | 60-80 | Vienna Convention, country-specific | 3 |
| civics-tests | 50-80 | USCIS 100 questions + answers | 4 |
| language-tests | 60-80 | CEFR framework, British Council | 5 |
| licensing | 50-70 | Jurisdiction-specific requirements | 6 |
| professional-certs | 50-70 | AWS cert blueprints | 7 |

- **Effort:** 4-6 weeks across all 7 sites.
- **Exit criteria:** Every site has >50 pages, passes `lint:depth`, has
  zero factual accuracy issues on spot-check.

### P1-8: Citations

- [ ] Add `sources:` frontmatter field to shared content schema.
- [ ] Add a References section renderer in shared/components.
- [ ] Add citations to the 12 highest-authority sites (mathematics, physics,
  chemistry, computer-science, programming, alevel, ib, cpp, rust, go,
  java, python).
- [ ] Cite textbooks already benchmarked in CONTENT_AUDIT.md (Aluffi, CLRS,
  Stroustrup, Atkins, Griffiths, Kleppner).
- **Effort:** 1-2 weeks.
- **Exit criteria:** >50% of Tier 3+ pages in the 12 sites have a References
  section with at least 1 source.

### P1-9: Security hardening

- [ ] Replace `unsafe-inline` and `unsafe-eval` in CSP with nonce-based
  script loading (mermaid requires eval; may need `wasm-unsafe-eval`).
- [ ] Replace in-memory rate limiting in search-api with KV-backed or
  Durable Objects rate limiter (in-memory is ineffective on Cloudflare
  Workers multi-isolate runtime).
- [ ] Tighten CORS on search API (currently `Access-Control-Allow-Origin: *`).
- **Effort:** 1 week.
- **Exit criteria:** CSP passes `SecurityHeaders.com` rating A+; rate limiting
  survives Worker restart.

---

## P2 -- Compounding advantages

Estimated total: quarter+.

### P2-10: Coverage ratchet for unmeasured code

- [ ] Add `--experimental-test-coverage` to existing node:test invocations
  for `scripts/` and `search-api/`.
- [ ] Set initial ratchet thresholds based on measured baseline.
- **Effort:** 0.5 day.
- **Exit criteria:** `scripts/` and `search-api/` show coverage % in CI output.

### P2-11: Workspace package evaluation

- [ ] Benchmark a `@wyattsnotes/components` npm workspace package against
  current sync-shared approach at 46 and 60 sites.
- [ ] Decision: keep sync or migrate to importable package.
- **Effort:** 1-2 days investigation.
- **Exit criteria:** Decision recorded as ADR with measured data.

### P2-12: Client-side error capture

- [ ] Add error event listener to shared Head.astro or a new ErrorBoundary
  component.
- [ ] Post errors to a Cloudflare Worker endpoint or D1 table.
- [ ] Instrument flashcards/diagnostics funnel with usage analytics.
- **Effort:** 1 week.
- **Exit criteria:** Client errors visible in a dashboard; flashcard completion
  rate tracked.

### P2-13: Thin-page program

- [ ] Prioritise the 750 files below tier minimums by GSC impressions data.
- [ ] Expand Tier-2 pages (113 below minimum) first -- highest traffic impact.
- [ ] Expand Tier-1 index pages (616 below minimum) second -- structural.
- [ ] Target: reduce to < 100 files below tier minimums.
- **Effort:** 2-4 weeks (content authoring).
- **Exit criteria:** `bun run lint:depth` reports < 100 files below minimums.

---

## P-K -- Content and architecture corruption fixes

Discovered 2026-08-22 via adversarial content audit. 32% of content files
(1,066 of 3,331) contain at least one corruption pattern. Estimated total:
3-5 days scripting + 1-2 days verification.

### K-1: Template contamination removal (86 files)

- [x] Run `scripts/fix-template-contamination.js` to remove auto-generated
  Summary sections that insert wrong-subject boilerplate (chemistry summaries
  in databases/Java/Linux/networking files, biology in Rust/Python files,
  Git in shell-basics files).
- [x] Verify no legitimate summary content was removed (spot-check 10 files).
- **Effort:** 0.5 day.
- **Exit criteria:** `rg "essential chemistry of" sites/{databases,linux,java,rust,python,networking}/` returns zero matches.
- **Script:** `scripts/fix-template-contamination.js`

### K-2: Starlight aside conversion (809 files)

- [x] Run `scripts/fix-starlight-asides.js` to convert raw HTML
  `<aside class="starlight-aside--note">` (and variants) to Starlight's
  native `:::note` / `:::tip` / `:::caution` / `:::danger` callout syntax.
- [x] Run v2 and v3 passes for aria-label variants.
- [x] Unwrap 6 oversized callouts (entire sections wrapped in :::note).
- **Effort:** 1 day (script + verify).
- **Exit criteria:** `rg -l "starlight-aside" sites/*/src/content/docs/` returns zero matches.
- **Script:** `scripts/fix-starlight-asides.js`, `fix-starlight-asides-v2.js`, `fix-starlight-asides-v3.js`

### K-3: Practice problem answer distribution (144 files)

- [x] Run `scripts/fix-answer-distribution.js` to shuffle correctAnswer
  positions across practice files so the correct answer is not always
  option 0.
- [x] Verify no answer-content mismatches after shuffle (cross-check
  correctAnswer index against options array).
- **Effort:** 0.5 day.
- **Exit criteria:** No file has correctAnswer=0 for more than 50% of its problems.
- **Script:** `scripts/fix-answer-distribution.js`

### K-4: Thin stub index pages (212 files)

- [x] Run `scripts/fix-thin-stubs.js` to remove or expand stub index pages
  that are identical boilerplate ("This section provides study materials
  and resources for [topic]") with no real content.
- [x] For stubs under 1KB: delete the file if the parent has child pages
  that render their own content; expand if the index is the only page.
- **Effort:** 0.5 day.
- **Exit criteria:** `rg -l "This section provides study materials and resources for" sites/*/src/content/docs/ | xargs wc -l` shows no file under 50 lines.
- **Script:** `scripts/fix-thin-stubs.js`

### K-5: Dead code in handlers.js

- [x] Remove orphaned duplicate of `handleHealth()` at lines 229-264 of
  `search-api/handlers.js` (dead code at module scope, merge conflict residue).
- **Effort:** 5 minutes.
- **Exit criteria:** `node -c search-api/handlers.js` exits 0; no orphaned
  code blocks at module scope.
- **File:** `search-api/handlers.js:229-264`

### K-6: Merged index .gitignore

- [x] Add `search-api/merged-index.js` and `search-api/merged-index.json`
  to `.gitignore`.
- [ ] Remove from git tracking: `git rm --cached search-api/merged-index.js search-api/merged-index.json`
- **Effort:** 5 minutes.
- **Exit criteria:** `git ls-files search-api/merged-index.*` returns empty.
- **File:** `.gitignore`

### K-7: Civics numbering fix

- [x] Fix broken question numbering in
  `sites/civics-tests/src/content/docs/us-citizenship/civics-questions.md`
  (numbering restarts at 2 within subsections instead of continuing).
- **Effort:** 15 minutes (manual, 30 questions).
- **Exit criteria:** Sequential numbering 1-N without restarts.
- **File:** `sites/civics-tests/src/content/docs/us-citizenship/civics-questions.md`

### K-8: Head.astro decomposition

- [ ] Extract JSON-LD schema generation (lines 122-191) into
  `shared/components/starlight/JsonLd.astro`.
- [ ] Extract site navigator overlay (lines 318-361) into
  `shared/components/starlight/SiteNavigator.astro`.
- [ ] Extract service worker registration (lines 284-312) into
  `shared/components/starlight/ServiceWorker.astro`.
- [ ] Head.astro should import and compose these sub-components.
- [ ] Run `sync-shared.mjs` to propagate to all sites.
- **Effort:** 1 day.
- **Exit criteria:** Head.astro < 200 lines; each extracted component
  is independently testable; `bun run build:site` passes on sample site.
- **Files:** `shared/components/starlight/Head.astro`, new sub-components

### K-9: SAT content corruption check

- [ ] Verify the reported "quadratic" -> "n" corruption in SAT content
  (audit found no evidence in current codebase, but sample was inconclusive).
- [ ] If found: write fix script. If not: add regression lint.
- **Effort:** 0.5 day.
- **Exit criteria:** All SAT math content verified correct.

---

## Completed work summary

The following phases are complete. For full history, see `.reports/`.

| Phase | Description | Status |
|-------|-------------|--------|
| A | Stabilisation -- CI/CD, deploy, sync SOP | Complete |
| B | Content quality -- thin pages, prerequisites, cross-links, practice | Complete |
| C | Performance -- WebP, font preloading, bundle optimisation, caching | Complete |
| D | Search -- API, ranking, analytics, sitemap submission | Complete |
| E | Developer experience -- Playwright E2E, GUI snapshots, component preview | Complete |
| F | Future capability -- print CSS, PWA, i18n foundation | Complete |
| G | Hardening -- dialog consolidation, a11y, design tokens, coverage | Complete (except KV deploy) |
| H | Scale -- edge caching, performance regression, A/B testing, analytics | Complete |
| I | Content quality restoration -- descriptions, handwaves, depth tiers | I-A complete; I-B/C/D in progress |
| J | Engineering hardening -- landing page migration, service worker, actionlint | Partially complete |

### ADRs (13 total)

ADR-001 Starlight over Docusaurus | ADR-002 SolidJS islands | ADR-003 Cloudflare Pages
| ADR-004 No-emoji + shared-asset SSOT | ADR-005 Cloudflare Pages deployment
| ADR-006 Accept Astro 5.x CVEs until upgrade | ADR-007 client-only-directives plugin
| ADR-008 lazy solid-sonner import | ADR-010 ViewTransitions blocked
| ADR-011 Site list derived from sites/ | ADR-012 Search Worker decomposition
| ADR-013 Config parity validation | ADR-014 Staged deploy with auto-rollback

---

## Success metrics

| Metric | Current | Target |
|--------|---------|--------|
| Live sites | 46 / 46 | 46 / 46 (all return 200) |
| Automated tests | 439+ | 500+ |
| CI/CD pass rate | > 99% | > 99% |
| Biome lint errors | 0 | 0 |
| Warm TTFB (all sites) | < 1s | < 1s |
| Search entries | ~2013 | 4000+ (post KV fix) |
| Search zero-result rate | tracked | < 5% |
| Lighthouse performance | >= 90 | >= 95 |
| Lighthouse SEO | >= 90 | >= 95 |
| Content thin pages | 750 | < 100 |
| Files with corruption | 664 | 0 (post P0-1) |
| Garbage descriptions | ~1030 | < 100 (post P0-2) |
| Shared-asset drift | 0 | 0 |
| Component coverage (stmts) | 69% | 80% |
| Component coverage (branches) | 52% | 70% |
| Citations | 22 sections | 500+ pages |
| Top-200 pages with visuals | ~20% | >80% |

---

## Decision log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-08-22 | STATUS.md is single source of truth | 6 prior audit docs contradicted each other on basic facts |
| 2026-08-22 | Stub sites built out, not noindexed | Real search volume for driving/civics; thin sites are SEO liability if left as stubs |
| 2026-08-22 | ROADMAP.md rewritten as execution plan | Original was frozen at "nine sites"; now tracks P0/P1/P2 from STATUS.md |
| 2026-07-10 | Pin wrangler in bun.lock | Version was fetched on-the-fly, not reproducible |
| 2026-07-10 | manifest display:standalone -> browser | No service worker exists; standalone implied PWA support |
| 2026-06-21 | Neutralise stored XSS in Worker dashboard | Queries interpolated into innerHTML without escaping |
| 2026-06-21 | Astro 5->6 upgrade with client:only plugin | Six high-severity CVEs unfixable in 5.x (ADR-006) |
| 2026-06-21 | Landing page migrated to Astro | 762-line static HTML replaced with Astro-native rendering |
| 2026-06-21 | FlashcardDeck split into 4 modules | 522 LOC god-file decomposed for maintainability |
| 2026-06-20 | Rebuild components on Kobalte headless UI | LocaleSwitcher, PracticeProblem, DiagnosticTest |
| 2026-06-20 | Inline Lucide icon geometry | Eliminates icon library dependency for critical icons |
| 2026-06-19 | SM-2 property tests with mulberry32 PRNG | Failures must be reproducible from printed seed |
| 2026-06-19 | Pre-commit rewritten to invoke lint-staged directly | npx added 50s overhead per call, caused timeouts |
| 2026-06-17 | Description validation as blocking check | Descriptions drive SEO; missing = lost traffic |
| 2026-06-16 | Self-host fonts (Inter + JetBrains Mono) | Remove Google Fonts CDN round-trip; GDPR compliance |
| 2026-06-15 | Enforce shared-asset SSOT with drift enforcement | Eliminate copy drift; provable parity in CI |
| 2026-06-15 | Gate deploy on full quality suite | Broken code cannot reach production |
| 2026-06-14 | Use SolidJS, not React, for islands | Smaller bundles, fine-grained reactivity (ADR-002) |
| 2026-06-12 | Starlight over Docusaurus | Performance and modern tooling (ADR-001) |
| 2026-06-12 | Cloudflare Pages + Worker + KV | Integrated static + dynamic search (ADR-003) |
