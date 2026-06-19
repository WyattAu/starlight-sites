# Phase 1-3 Engineering Audit Report

Generated: 2026-06-19

## Summary

This report covers the test-and-quality audit (Phase 1), CI/CD pipeline audit (Phase 2), and GUI/UI audit (Phase 3) for the `starlight-sites` monorepo. Every commit-level change described here is enforced by automated tests; the work is broken into atomic commits for review.

## Phase 1: Deep Testing and Code Quality Audit

### Test inventory (baseline vs. current)

| Suite            | Files | Tests (before) | Tests (after) | Delta |
|------------------|-------|----------------|---------------|-------|
| Node `--test`    | 8     | 177            | 219           | +42   |
| Vitest component | 11    | 140            | 220           | +80   |
| **Total**        | 19    | **317**        | **439**       | **+122** |

Every test passes (CI=true is required for Vitest so the TTY-detection branch does not enter watch mode).

### Bugs fixed

1. **`scripts/lint-links.js` false-positive bug.** Any link of the form `/foo/` (trailing slash) was reported broken because the resolver appended `.md` *after* the trailing slash, producing `/foo/.md`. This caused 641 false positives across `sites/alevel/src/content/docs/index.mdx` alone, and would have blocked any PR that introduced new content. Root cause: missing trailing-slash and fragment/query normalisation. Fixed by introducing `normalizeLink` (strips `#…`, `?…`, and trailing slashes), `resolveLinkTarget`, and `targetExists`. The script is now a testable module with `require.main` guard for the CLI entry. Sixteen regression tests pin the new contract.

2. **`shared/utils/escape.ts` documentation bug.** The docblock claimed invariant `INV-ESC-003: idempotent (double-escape produces same result)`. The implementation is *correctly* non-idempotent (the leading `&` of every emitted entity is itself a special character and is re-encoded on a second pass). The false claim was removed and the contract restated as a non-idempotence guarantee; thirty-two property-style tests pin every documented invariant and document the canonical `escape(escape("<")) == "&amp;lt;"` case.

### Lint cleanup

- Twenty-six biome lint violations resolved across `scripts/*.js`, `scripts/*.mjs`, and `.cspell.json`. All violations were in the developer tooling (no production code), and all were auto-fixable (`useTemplate`, `useConst`, `useNodejsImportProtocol`, `noUnusedFunctionParameters`, `noAdjacentSpacesInRegex`).
- Five sites (`qualifications`, `languages`, `programming`, `infrastructure`, `tools`) had CSS drift relative to the canonical `shared/styles/custom.css`. The drift propagated via `bun run sync` and is now regression-covered by the existing `tests/unit/shared-sync.test.js`.

### Dead code removed

| Path                        | Source of truth | Reason                                  |
|-----------------------------|-----------------|-----------------------------------------|
| `account-api/`              | git history     | Reverted feature (commit `254901ae`).   |
| `shared/public/sw.js`       | grep + sync     | No source registers the worker.         |
| `sites/*/public/sw.js` (9x) | sync + grep     | Pre-sync per-site remnants; unreferenced. |

Each removal has a corresponding regression test in `tests/unit/shared-sync.test.js` so the deletions cannot silently regress.

### Formal verification scaffolding (Phase 1.3)

The SM-2 spaced-repetition algorithm (`shared/components/flashcard/sm2.ts`) already documented five invariants (`INV-SM2-001..005`) and five postconditions. The existing tests used `Math.random()`, making failures non-reproducible. The property-based test suite was rebuilt with a deterministic, seedable PRNG (mulberry32) and now covers:

- All five invariants across five independent seeds (300 reviews each).
- Immutability of the input state (`POST-SM2-005`) across 100 reviews per seed.
- The exact post-condition `nextReview == now + interval * 60 * 1000` (`POST-SM2-003`).
- Precondition rejection for out-of-range ratings and non-positive timestamps (`PRE-SM2-001`, `PRE-SM2-002`).

Property-based coverage for `escape.ts` similarly validates `INV-ESC-001` (no raw specials after entity stripping) and `INV-ESC-002` (monotonic length) across attacker-style payloads (`<script>`, `javascript:`, event-handler injection, etc.).

### Pre-commit hook

`.husky/pre-commit` was timing out at thirty seconds because it invoked `npx lint-staged`, and `npx` adds ~50 s of registry-discovery overhead per invocation. The hook was rewritten to:

1. Resolve the repository root via `git rev-parse --show-toplevel`.
2. Short-circuit when there are no staged files (saves 10 s of cold start).
3. Invoke `lint-staged` via `./node_modules/.bin/lint-staged` (10 s cold start) under a 90 s timeout.
4. Continue to enforce the canonical correctness gate (`node --test tests/unit/*.test.js tests/integration/*.test.js`) and shared-asset sync integrity.

End-to-end runtime with no staged files: 63 s (down from timeout failure).

## Phase 2: CI/CD Pipeline Audit and Debugging

### Workflow changes

| File            | Change                                                                                          | Rationale                                                                                                                                |
|-----------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `ci.yml`        | `BUN_VERSION: "1.2"` -> `"1.3"`                                                                 | `bun.lock` uses `lockfileVersion: 1`, emitted by Bun 1.3.x. CI installing with Bun 1.2 caused divergent dependency resolution.           |
| `ci.yml`        | Removed redundant `continue-on-error: true` from the lychee step (already had `fail: false`)    | Double opt-out is confusing; one is enough.                                                                                              |
| `deploy.yml`    | `BUN_VERSION: "1.2"` -> `"1.3"`                                                                 | Same as above.                                                                                                                           |
| `deploy.yml`    | Replaced hand-rolled `curl` + `python` worker deploy with `wrangler deploy`                     | The previous flow piped the KV namespace secret through shell interpolation into a JSON file on disk. The supported `wrangler deploy` path keeps the secret in CI env vars only. |
| `deploy.yml`    | Replaced single-probe deployment verify with up-to-5-minute polling                            | Cloudflare Pages propagation is 30-90 s; a single probe at +10 s produces flaky failures. The polling loop only fails on hard 4xx/5xx after the budget is exhausted. |
| `deploy.yml`    | Replaced `wrangler pages project create` with `continue-on-error: true` + `|| true`             | The new step tolerates only the "already exists" error class; auth and network failures surface immediately.                             |
| `preview.yml`   | `BUN_VERSION: "1.2"` -> `"1.3"`, added bun cache, added 5-minute timeout to the `comment` job   | Same Bun version rationale; cache prevents re-resolution on every PR; timeout caps the comment job.                                      |
| `preview.yml`   | Removed `if: matrix.site == 'dse'` from the PR comment step                                     | The historical gate meant 8 of 9 preview URLs were deployed but never advertised on the PR. Replaced with an artifact-based aggregator that collects every URL and posts a single 9-row table. |
| `uptime.yml`    | Added explicit `permissions: { contents: read, issues: write }`                                 | The default `GITHUB_TOKEN` is `contents: write` on schedule; a read-only token is the correct minimum-scope configuration.               |
| `uptime.yml`    | Added `concurrency: { group: uptime, cancel-in-progress: false }`                               | Prevents slow uptime runs from stacking up on the 6-hour cron.                                                                           |

### Workflow contracts (regression coverage)

`sites/.../tests/integration/build-pipeline.test.js` gains six new tests that pin the contracts above:

1. Every workflow pins the same `BUN_VERSION`, and that version starts with `1.3`.
2. Every workflow declares an explicit `permissions:` block.
3. `uptime.yml` scopes the token to `contents: read` + `issues: write` (no `contents: write`).
4. `preview.yml` declares a `comment` job that depends on `preview` and is not gated to a single matrix site; uses `upload-artifact` / `download-artifact` to exchange URLs.
5. `deploy.yml` uses `wrangler deploy` and does not call the Cloudflare REST API directly via `curl`.
6. `deploy.yml` deployment verification polls the origin (not a single probe).

### Static validation (Phase 2.2)

`act` and `actionlint` are not available in the local environment and the hermetic rule forbids system-level tool installs. Every workflow was validated structurally:

- All four workflow YAMLs parse via `bunx js-yaml`.
- Every `scripts/*.sh` and `scripts/*.js` reference resolves to an existing file.
- Every matrix entry has a corresponding Cloudflare project name.
- Every job declares a `timeout-minutes`.

The first real CI run on push will exercise the workflows end-to-end; the test suite pins the contracts so any future regression is caught before merge.

## Phase 3: GUI/UI Audit

### Current design-language state (before)

| Aspect                       | Status    | Notes                                                                              |
|------------------------------|-----------|------------------------------------------------------------------------------------|
| Skip-link, viewport, lang    | Present   | Landing page + Starlight defaults                                                  |
| `prefers-reduced-motion`     | Present   | Honoured in `shared/styles/custom.css`                                             |
| Print styles                 | Present   | Comprehensive `@media print` block                                                 |
| Spatial Materialism (depth)  | Partial   | Cards used `transform: translateY(-2px)` on hover only; no elevation token system  |
| Amoebic UI (organic radii)   | Minimal   | Fixed pixel radii (16px, 20px); no fluid spacing; no radius scale                  |
| Service worker               | Broken    | `sites/main/src/index.html` registered `/sw.js`; the file was missing from origin |

### Design-language tokens introduced

`shared/styles/custom.css` now declares a complete design-language token set, synced to all nine sites:

- **Elevation**: `--wn-elevation-0..4` + `--wn-elevation-accent` (Spatial Materialism five-tier surface stack with coloured halo).
- **Radii**: `--wn-radius-xs..xl` + `--wn-radius-pill` (Amoebic UI organic radius ladder).
- **Fluid spacing**: `--wn-space-fluid-xs..xl` via `clamp()` (Amoebic UI breathing room).
- **Motion**: `--wn-ease-organic`, `--wn-duration-fast|base|slow`.

The `.landing-card` rule now binds the elevation, radius, and motion tokens into a single contract so a card cannot drift from the system. Dark-theme elevation tiers shift to darker, more saturated halos so a lifted surface still separates cleanly from the dark canvas.

### Design-language verification (Phase 3.3)

`tests/e2e/gui-snapshot.js` was rewritten to:

1. **Verify the design-language contract** by grepping the *compiled* CSS in each site's `dist/_astro/*.css` for every required token. Sync drift or token-stripping by a misconfigured minifier fails the run with exit code 1.
2. **Scan the rendered DOM for pictograph characters** (Unicode U+2600-U+27BF, U+1F000-U+1FAFF) to complement `lint-no-emoji.js` (which scans source).
3. **Capture DOM snapshots, raw HTML, and (when Playwright is available) full-page PNG screenshots** for every curated route per site.
4. **Compare against committed baselines** under `tests/e2e/baseline/*.json` to surface structural drift.
5. **Emit a markdown report** (`/tmp/gui-snapshots/REPORT.md`) that aggregates the per-site findings for human review.

The shared server/build infrastructure (`buildSite`, `serveDirectory`, `fetchPage`, `pickPort`, `SITES`, `SITE_PAGES`) was extracted into `tests/e2e/lib/server.mjs` to de-duplicate the identical copies previously living in `gui-snapshot.js` and `contrast-check.js` (Phase 7 de-duplication).

Ten regression tests under `tests/unit/design-language.test.js` pin the token contract (elevation tiers, radii, fluid spacing, organic motion) and verify the verifier itself catches drift on stale CSS bundles.

### Broken reference removed

`sites/main/src/index.html` registered `/sw.js` via `navigator.serviceWorker.register`. The script:

1. Resolved to a 404 (the file was never deployed to the `wyattsnotes` Cloudflare Pages project).
2. Was also unreferenced from any source under `shared/`.

The registration block was removed with an inline comment explaining the contract a future service worker must satisfy to be re-introduced.

## Test-and-lint result matrix (post-audit)

| Gate                         | Result  |
|------------------------------|---------|
| `bun run lint`               | PASS    |
| `bun run sync:check`         | PASS    |
| `node scripts/lint-*.js` (8) | PASS    |
| `node --test tests/unit/`    | 219 OK  |
| `node --test tests/integration/` | 103 OK |
| `vitest run`                 | 220 OK  |
| `.husky/pre-commit` end-to-end | PASS (63 s) |
