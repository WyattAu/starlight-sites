CI); the ~2000 Markdown content files are out of scope (they have their own
| Dependency relevance | No genuinely unused dependencies. (`happy-dom` and `markdownlint-cli` are referenced via config/scripts, not imports; false positives.) |
| F4 | **P2 (TS)** | TS-1 Strictness | **No root `tsconfig.json`**; `shared/` and `scripts/` TypeScript is only type-checked indirectly (via site builds / vitest), never standalone. |
### F1: Stored XSS in the analytics dashboard (P0)
**Category:** 5 (SAST); Cross-Site Scripting (XSS) Prevention.
(lines 824–833: status, entries, totalSearches, ctr, uniqueQueries); so the
   `shared/utils/escape.ts` logic; note it is `non-idempotent`, documented).
   instead of string concatenation; eliminates the bug class entirely.
### F2: 6 high-severity CVEs in the dependency tree (P1)
**Category:** 6 (Dependency integrity); Known Vulnerability Scans.
| `astro` (this version) | **high** | Host-header SSRF in prerendered error-page fetch (GHSA-2pvr-wf23-7pc7); reflected XSS via unescaped slot name (GHSA-8hv8-536x-4wqp). **Only fixed in Astro 6.x**; there is no 5.x patch (5.18.2 is the last 5.x release). |
| `glob` (via `markdownlint-cli`) | high | Command injection via `-c/--cmd` with `shell:true`. **Dev tool only**; only triggered if a malicious markdown filename reaches the CLI; low real-world risk. |
upgrade**, which is itself blocked (see `GUI_FRONTEND_REFACTOR.md` R4; Kobalte
### F3: Component branch coverage 38%; aggregate 17% (P1)
**Category:** 9 (Test Suite Quality); Branch Coverage; Test Isolation.
more actionable number; it is below the project's 80% target and indicates the
   `pickNextQuestion` has 4 priority cascades; only the happy path is tested)
   already export testable pure functions; `lint-no-emoji.test.js` is the
### F4: No root `tsconfig.json` (P2)
**Category:** TS-1 (Strictness); TS-5 (Type perf; `isolatedModules`).
3. Keep `enum`/`namespace`/constructor-parameter-properties bans out of scope -
### F5: God-files: `worker.js` (950 LOC), `FlashcardDeck.tsx` (516) (P2)
**Category:** 3 (Complexity); Function/Method & Class Size; 4 (Architecture); SRP.
### F6: Four Biome a11y rules disabled (P2)
**Category:** 11 (a11y); HTML/JSX semantics.
### F7: `/api/analytics` has no caching/rate limiting (P3)
**Category:** 7 (Performance); Resource Management; Inefficient Data Fetching.
**Evidence:** `search-api/worker.js`; the analytics endpoint reads from KV on
### F8: Swallowed exceptions in the Worker (P3)
**Category:** 8 (Error handling); Ignored/Swallowed Exceptions.
structured 500 with a correlation id (no stack trace leakage; see category 8
| 2 Mutable state exposure | N/A; SolidJS signals/stores; no OOP getters exposing internals. |
| 5 Injection (SQLi/command) | N/A; no SQL, no shell exec. KV is key-value get/put with no query language. |
| 5 CSRF | N/A; all endpoints are GET, read-only. No state mutation from browser requests. |
| 5 Path traversal | N/A; no filesystem access in the Worker. |
| 5 Crypto | **Strong.** No custom crypto. SM-2 uses `mulberry32` (deterministic PRNG for tests), not a security RNG; correct, since SM-2 is not security-sensitive. |
| 5 XXE / deserialization | N/A; no XML parsing, no object deserialisation. |
| 6 License compliance | OK; repo is AGPLv3; spot-check of direct deps shows MIT/ISC/Apache. No GPL-copyleft friction with AGPL. |
| 6 Typosquatting | OK; all direct deps are well-known scoped packages; no install-scripts on suspicious packages. |
| 7 N+1 / SELECT * | N/A; no ORM/SQL. |
| TS-4 Type predicates | OK; no redundant manual type predicates; `Difficulty`/`Locale` are nominal unions. |
| TS-6 Modern features | OK; `target` via Astro defaults (esnext); optional chaining and nullish coalescing used throughout. |
### P0: Immediate (this week) -- COMPLETE
### P1: High (this cycle) -- COMPLETE
### P2: Medium (next cycle) -- COMPLETE
### P3: Lower (backlog) -- COMPLETE except P3-4
- **Astro 6 CVE fixes**; blocked on `GUI_FRONTEND_REFACTOR.md` R4 (Kobalte SSR
- **FlashcardDeck split + `noUncheckedIndexedAccess`**; the component shares
- **Full coverage-gate promotion (38% -> 70/80%)**; needs the FlashcardDeck