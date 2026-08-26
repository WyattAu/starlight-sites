# Code Quality Verification Report

**Date:** 2026-08-26
**Scope:** Independent verification of `.reports/CODE_QUALITY_MATRIX.md` (2026-08-19) and README claims against actual repository state, followed by targeted remediation.
**Method:** Read-only analysis of all workflow files, search-api modules, shared/ tree, scripts/, tests/, and sites/ content. Followed by code fixes and re-verification.

---

## 1. What was verified

### 1.1 CI/CD workflows (11 files at time of audit, 10 after cleanup)

| Claim (CODE_QUALITY_MATRIX.md) | Verdict | Evidence |
|---|---|---|
| ci.yml gate runs biome + 10 linters + sync-check + typecheck + tests, blocks deploy | **VERIFIED** | ci.yml:57-91 (linters), :117-118 (typecheck), :120-149 (tests). deploy.yml:44-92 (gate job) re-runs these before any wave. |
| cspell/markdownlint non-blocking (continue-on-error) | **STALE (now false)** | Promoted to blocking in ci.yml on 2026-08-20. Only lychee remains non-blocking (`fail: false`). |
| bun audit blocking CI gate | **VERIFIED** | ci.yml:111-115 — no continue-on-error. |
| deploy.yml: canary(2) -> rollout(43), derived matrix, mark-good tag, auto-rollback | **VERIFIED** | deploy.yml:94-103 (canary), :224-231 (rollout), :475-497 (mark-good), :499-517 (rollback trigger). |
| rollback.yml: manual + automatic | **VERIFIED** | rollback.yml:8-14 (workflow_dispatch), deploy.yml:514 (auto-trigger). |
| e2e.yml: daily + main + dispatch, ghost-free URLs | **VERIFIED** | e2e.yml:6-9 (triggers), URLs derived via list-sites.js. |
| slo-alert.yml: 30-min poll, issue filing | **VERIFIED** | slo-alert.yml:7 (cron), :31-54 (evaluation), :56-99 (issue creation). |
| uptime.yml: 6-hourly probes | **VERIFIED** | uptime.yml:5 (cron), :29 (script call). |
| lint-secrets.js in CI | **FALSE at time of writing** | No workflow invoked it. Wired into deploy.yml gate on 2026-08-26. |
| "0 broken CI references" (ghost purge) | **OVERSTATED** | Ghosts persisted in tests/e2e/performance.config.ts, visual.config.ts, smoke.spec.ts, content cross-links, and merged-index.js artifact. Scanner's fixed file list was itself a drift surface. |

### 1.2 search-api architecture

| Claim | Verdict | Evidence |
|---|---|---|
| Worker decomposed: 967 -> 127 lines, 10 modules | **VERIFIED** | worker.js:127 lines. Modules: handlers, config, validate, rate-limit, ranking, cross-site-search, page-search, analytics, dashboard, suggest, log (11 entry points including worker.js itself). |
| zod/@felte dropped | **TRUE** | Zero imports in code. bun.lock: zod remains as transitive dep of astro (expected). |
| /api/track validated allow-list schema | **VERIFIED** | validate.js:42-82 — TRACK_SCHEMA with per-field types, maxLength, min/max. Unknown fields silently dropped. |
| Search query 2-200 chars, limit clamped | **PARTIAL** | 2-200 enforced (validate.js:90-94). Limit clamped upper-bound only: `Math.min(parseInt(...)||'20', 50)`. NaN/negative edge bugs exist (handlers.js:43). |
| Static fallback on KV miss | **VERIFIED** | handlers.js:87 — `await env.SEARCH_KV?.get(...) \|\| STATIC_INDEX`. But committed fallback is stale 9-site/2026-07-11 artifact (STATUS P0-4). |
| A/B weights data-driven | **VERIFIED** | config.js:32-60 — weight tables as data, consumed by ranking.js:16-23 pure function. |
| XSS esc() fix + regression test | **VERIFIED** | dashboard.js:106 esc() + search-worker.test.js:425-458. |
| dashboard.html orphaned | **VERIFIED** | Zero references; deleted 2026-08-26. |

### 1.3 Shared assets and tooling

| Claim | Verdict | Evidence |
|---|---|---|
| ADR-011 derived site list | **VERIFIED** | sites.meta.json:46 entries; sites.cjs:69-94 throws on drift; consumed by 6 workflows + no-ghost-sites.test.js. |
| 4-layer sync enforcement | **VERIFIED** | Pre-commit (husky), CI (ci.yml:76), deploy gate (deploy.yml:74), unit test (shared-sync.test.js). |
| vitest coverage thresholds: shared/components >= 65/50 | **VERIFIED** | vitest.config.ts:38 — `{ lines: 65, branches: 50, functions: 65 }`. Measured: 70.6%/50.8%. |
| Coverage ratchet: only raise, never lower | **VERIFIED** | vitest.config.ts comment at :31 documents the policy. |
| generate-site.mjs pins updated to Astro 6 / Starlight 0.40 | **VERIFIED** | generate-site.mjs:49-53 — astro ^6.4.8, starlight ^0.40.0. |
| Fix-* graveyard scripts archived | **VERIFIED** | 26 scripts moved to scripts/archive/ on 2026-08-26. 5 active fix-* scripts retained (capitalisation, descriptions, latex-corruption). |

### 1.4 Coverage ratchet — **REGRESSION FOUND AND FIXED**

| Metric | Matrix claimed (2026-08-19) | Verified at HEAD (pre-fix) | After fix (2026-08-26) |
|---|---|---|---|
| shared/utils lines | 96.4% | **73.17%** | **100%** |
| shared/utils branches | 98.2% | **69.76%** | **96.51%** |
| shared/components lines | 69% | 68.77% (pass) | **70.64%** |
| shared/components branches | 52% | 50.75% (pass) | **50.75%** |

**Root cause:** `shared/utils/error-tracker.ts` (57 lines, commit `e4ec2aa42`) was added with zero test coverage, breaking the 90% utils ratchet. This means **CI would be red at HEAD** — the coverage gate fails.

**Fix:** Added 3 new test files:
- `tests/components/error-tracker.test.ts` — 12 tests covering all branches (Error/string/SSR/catch paths)
- `tests/components/analytics.test.ts` — 3 tests covering sendBeacon, SSR skip, catch paths
- `tests/components/sanitize.test.ts` — added SSR branch test (window undefined)

Post-fix: all vitest thresholds pass. Total vitest tests: 289 (was 275).

### 1.5 Ghost-site purge

| Location | Pre-fix state | Post-fix state |
|---|---|---|
| tests/e2e/performance.config.ts | 3 ghost slugs (university, qualifications, infrastructure) | **Purged** — replaced with admissions, mathematics |
| tests/e2e/visual.config.ts | same 3 ghosts | **Purged** |
| tests/e2e/smoke.spec.ts | ghost slugs + university goto | **Purged** — replaced with live slugs |
| sites/ content (38 files) | ~46 university.wyattau.com links + 3 infrastructure + 6 academics | **Purged** — mapped to physics/mathematics/computer-science/chemistry/databases/linux/security.wyattau.com |
| search-api/merged-index.js | 9-site artifact | **Out of scope** — generated artifact; blocked on KV secret (STATUS P0-4) |

### 1.6 Type error

`shared/components/DiagnosticTest.tsx(267,24): error TS2339: Property 'score' does not exist on type 'DiagnosticResult'` — **pre-existing on HEAD** (confirmed by stashing changes and re-running tsc). Not caused by this session's changes. Outside scope.

---

## 2. Changes made this session

### P0 correctness fixes
| File | Change | Lines |
|---|---|---|
| `.github/workflows/rollback.yml:151-156` | Fixed `$GITHUB_STEP_SUM` typo to `$GITHUB_STEP_SUMMARY`; added missing quotes | 6 lines |
| `.github/workflows/deploy.yml:530` | Replaced stale `needs.deploy.result` with `needs.deploy-canary.result` + `needs.deploy-rollout.result` | 2 lines |
| `.github/workflows/deploy.yml:70-75` | Added `lint-config-parity.js` and `lint-secrets.js` steps to gate job | 8 lines |
| `package.json:75` | Changed astro.config lint-staged entry from single script to array with parity linter | 3 lines |
| `tests/unit/no-ghost-sites.test.js:30-47` | Extended SCAN_FILES with 3 e2e configs + explanatory comment | 6 lines |
| `tests/e2e/performance.config.ts:12-22` | Replaced 3 ghost slugs with live sites | 6 lines |
| `tests/e2e/visual.config.ts:12-22` | Same | 6 lines |
| `tests/e2e/smoke.spec.ts:9-19,70-72` | Replaced ghost SITE_IDS with live slugs; replaced university goto with computer-science | 10 lines |
| `sites/` (38 content files) | Retargeted university/infrastructure/academics ghost links to live successor sites | 38 files |
| `shared/utils/error-tracker.ts` (new tests) | 12 tests covering all branches | 1 test file |
| `shared/utils/analytics.ts` (new tests) | 3 tests covering all branches | 1 test file |
| `shared/utils/sanitize.ts` (existing tests) | Added SSR branch test | 1 test added |

### P1 accuracy pass
| File | Change |
|---|---|
| `README.md` | Full rewrite: 45-site table from sites.meta.json, accurate endpoints (9 routes + dashboard), correct CI/CD descriptions, fixed counts, Bun 1.3+ prereq |
| `LICENSE.md` | Added full AGPLv3 text (661 lines) |
| `.reports/CODE_QUALITY_MATRIX.md` | Added dated corrections block noting 7 stale/inaccurate claims |
| `STATUS.md` | Updated: date (08-26), test counts (815+), workflow count (10), lint scripts (12), coverage numbers (70.6%/50.8% components, 100%/96.5% utils), DIP score (2.5/5), decisions entry |

### P2 hygiene
| File | Change |
|---|---|
| `D[Applications] + chr(10)...` (stray root file) | **Deleted** (0-byte tracked artifact) |
| `search-api/dashboard.html` | **Deleted** (orphaned, zero references) |
| `.github/workflows/github-pages.yml` | **Deleted** (disabled since inception, `if: false`) |
| `scripts/fix-*.{js,mjs}` (26 files) | **Archived** to `scripts/archive/` |

---

## 3. Remaining open items

| # | Item | Severity | Blocked on |
|---|---|---|---|
| 1 | KV namespace secret still unset — search index stuck at 9-site/2026-07-11 | **High** | User action (set CLOUDFLARE_KV_NAMESPACE_ID secret) |
| 2 | merged-index.js still has stale 9-site data | High | #1 above |
| 3 | No SAST beyond lint (no CodeQL/Semgrep) | Medium | Tooling decision |
| 4 | CORS "restriction" falls back to `*` (cosmetic, not real) | Medium | Worker config change |
| 5 | Analytics/errors/ab-test endpoints fully public | Medium | Auth middleware (a11y risk vs. value) |
| 6 | Rate limit only protects /api/search; per-isolate memory is racy | Medium | Cloudflare dashboard rules or KV-backed limiter |
| 7 | No client-side error capture (error-tracker.ts installed but not wired to any page) | Low | Component mount |
| 8 | Pre-existing TS2339 in DiagnosticTest.tsx:267 | Low | Type definition fix |
| 9 | 664 files with capitalisation corruption (STATUS P0-1) | High | fix-capitalisation.js script execution |
| 10 | ~1,030 templated/garbage descriptions (STATUS P0-2) | High | fix-descriptions.js script execution |

---

## 4. Verification sweep (2026-08-26)

| Gate | Result |
|---|---|
| no-ghost-sites.test.js (3/3) | **PASS** |
| lint-secrets.js | **PASS** (25 MED findings — educational examples, non-fatal by design) |
| lint-config-parity.js (45 sites) | **PASS** |
| tsc --noEmit -p tsconfig.json | **PRE-EXISTING ERROR** (DiagnosticTest.tsx:267) |
| vitest run --coverage (21 files, 289 tests) | **PASS** — all thresholds met |
| node --test (526 tests, 96 suites) | **PASS** |

---

*This report was generated as part of the 2026-08-26 verification session. All findings are evidence-based with file:line references. Changes are uncommitted.*
