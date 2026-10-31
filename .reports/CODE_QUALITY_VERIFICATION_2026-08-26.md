| bun audit blocking CI gate | **VERIFIED** | ci.yml:111-115; no continue-on-error. |
| /api/track validated allow-list schema | **VERIFIED** | validate.js:42-82; TRACK_SCHEMA with per-field types, maxLength, min/max. Unknown fields silently dropped. |
| Static fallback on KV miss | **VERIFIED** | handlers.js:87; `await env.SEARCH_KV?.get(...) \|\| STATIC_INDEX`. But committed fallback is stale 9-site/2026-07-11 artifact (STATUS P0-4). |
| A/B weights data-driven | **VERIFIED** | config.js:32-60; weight tables as data, consumed by ranking.js:16-23 pure function. |
| vitest coverage thresholds: shared/components >= 65/50 | **VERIFIED** | vitest.config.ts:38; `{ lines: 65, branches: 50, functions: 65 }`. Measured: 70.6%/50.8%. |
| generate-site.mjs pins updated to Astro 6 / Starlight 0.40 | **VERIFIED** | generate-site.mjs:49-53; astro ^6.4.8, starlight ^0.40.0. |
### 1.4 Coverage ratchet: **REGRESSION FOUND AND FIXED**
**Root cause:** `shared/utils/error-tracker.ts` (57 lines, commit `e4ec2aa42`) was added with zero test coverage, breaking the 90% utils ratchet. This means **CI would be red at HEAD**; the coverage gate fails.
- `tests/components/error-tracker.test.ts`; 12 tests covering all branches (Error/string/SSR/catch paths)
- `tests/components/analytics.test.ts`; 3 tests covering sendBeacon, SSR skip, catch paths
- `tests/components/sanitize.test.ts`; added SSR branch test (window undefined)
| tests/e2e/performance.config.ts | 3 ghost slugs (university, qualifications, infrastructure) | **Purged**; replaced with admissions, mathematics |
| tests/e2e/smoke.spec.ts | ghost slugs + university goto | **Purged**; replaced with live slugs |
| sites/ content (38 files) | ~46 university.wyattau.com links + 3 infrastructure + 6 academics | **Purged**; mapped to physics/mathematics/computer-science/chemistry/databases/linux/security.wyattau.com |
| search-api/merged-index.js | 9-site artifact | **Out of scope**; generated artifact; blocked on KV secret (STATUS P0-4) |
`shared/components/DiagnosticTest.tsx(267,24): error TS2339: Property 'score' does not exist on type 'DiagnosticResult'`; **pre-existing on HEAD** (confirmed by stashing changes and re-running tsc). Not caused by this session's changes. Outside scope.
| 1 | KV namespace secret still unset; search index stuck at 9-site/2026-07-11 | **High** | User action (set CLOUDFLARE_KV_NAMESPACE_ID secret) |
| lint-secrets.js | **PASS** (25 MED findings; educational examples, non-fatal by design) |
| vitest run --coverage (21 files, 289 tests) | **PASS**; all thresholds met |