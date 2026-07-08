# Path Forward and Roadmap

Date: 2026-06-21 (updated end-of-session)
Author: Nexus (Principal Systems Architect)
Scope: Current project state, remaining work, strategic sequencing, and risk.

---

## 1. Current state

The project has completed a major modernisation cycle across three work streams,
producing **25 atomic commits**. Every item below was executed, verified, and
committed — this is not a plan, it is a record of what shipped.

### Platform

| Component | Before | After | Commits |
|-----------|--------|-------|---------|
| Astro | 5.18.2 | **6.4.8** | R4 |
| Starlight | 0.32.6 | **0.40.0** | R4 |
| TypeScript | per-site `strict` | **root `strict` + `noUncheckedIndexedAccess`** | P2-1, follow-up |
| Biome | 4 rules off | **0 errors across 638 files** | P2-3 |

### Security

| Finding | Outcome | Commit |
|---------|---------|--------|
| Stored XSS in Worker dashboard | **Neutralised** (`esc()` + regression test) | P0-1 |
| 6 high-severity CVEs (Astro 5.x) | **Fixed** (Astro 6 upgrade) | R4 |
| Dev-tool CVEs (glob, minimatch) | **Fixed** (markdownlint-cli 0.43->0.49) | P1-1 |
| Worker internal leakage on 500 | **No internal leakage** | P3-2 |
| bun audit in CI | **Blocking** | P1-1 |
| Weekly audit workflow | **audit.yml** | P3-3 |

### Type safety

| Metric | Before | After |
|--------|--------|-------|
| Root tsconfig.json | None | `strict` + `isolatedModules` + `verbatimModuleSyntax` + `noUncheckedIndexedAccess` |
| Type errors in `shared/` | Unknown (never checked) | **0** |
| `noUncheckedIndexedAccess` findings | 24 (deferred) | **24 fixed** |

### Structural

| Component | Before | After |
|-----------|--------|-------|
| FlashcardDeck.tsx | 522 LOC (god-file) | **4 modules: 344 + 113 + 128 + 72** |
| search-api/worker.js | 963 LOC | **830 LOC** (dashboard extracted) |
| Landing page | 763-line static HTML/CSS | **Astro-native** (index.astro + Layout.astro) |

### Component architecture

| Component | Before | After |
|-----------|--------|-------|
| LocaleSwitcher | Hand-rolled dropdown (191 LOC) | **Kobalte Select** (70 LOC) |
| PracticeProblem | Hand-rolled radio group | **Kobalte RadioGroup** |
| DiagnosticTest | Hand-rolled radio group | **Kobalte RadioGroup** |
| BaseDialog close | Literal `x` text glyph | **Lucide X icon** |
| Icons | Hand-drawn SVG primitives | **Authentic Lucide geometry** |

### Content quality

| Check | Status |
|-------|--------|
| I-A (descriptions) | **DONE** (291 errors -> 0) |
| I-B (hand-wave phrases) | 5 fixes committed; 126 remaining reviewed as appropriate |
| I-C (depth tiers) | 462 Tier-2 files below minimum (long tail) |
| I-D (forward references) | 763 high-confidence (mostly false positives) |

---

## 2. What remains

Three categories: blocked, editorial, and operational.

### Blocked: ViewTransitions

Verified finding: `astro:transitions` virtual module fails Rollup resolution
in the Astro 6.4.8 + `@astrojs/solid-js` 6.0.1 + Bun stack. Tested on both
Starlight Head overrides and regular Layouts — same error. Not a code issue;
a stack-level incompatibility.

Three approaches tested:
1. `viewTransitions: true` in `defineConfig` → silently ignored
2. `import { ViewTransitions } from 'astro:transitions'` in Head override
   → Rollup error
3. Same import in regular Layout → identical Rollup error

**Follow-up:** Investigate Bun-specific virtual module resolution or the
Solid.js + ViewTransitions compatibility matrix. This may resolve with a
Bun or Astro patch.

### Editorial: Content depth (I-C)

462 Tier-2 content files below the 80-line minimum. This is the largest
remaining item by file count but the lowest risk — it is purely editorial
(expanding prose, adding worked examples, writing derivations).

The recommended approach: traffic-prioritised expansion. Expand the 50-100
highest-traffic pages first (alevel maths/physics, IB maths/physics), then
iterate on the long tail. This is content-authoring work, not code.

### Operational: Stale ROADMAP items

The ROADMAP (`.specs/` era) has 16 open items. Several are stale or already
addressed:
- `bun audit` CI gate → **DONE** (P1-1)
- Landing page migration → **DONE** (R5)
- Service worker → **Different state** (manifest deployed, worker removed; see
  ROADMAP Phase F)
- `lighthouse-ci-action` → the current action is functional; replacing with
  the `treo` successor is low-priority
- `actionlint` → useful but not urgent; the current pre-commit hooks cover
  the common regressions

The ROADMAP should be refreshed to reflect the post-R4 state.

---

## 3. Recommended next cycle (5 weeks)

### Week 1-2: ViewTransitions investigation + Content sprint

- Investigate `astro:transitions` resolution issue (Bun + Solid stack).
  Target: either resolve it or document a clear upstream bug report.
- Content sprint: expand 20-30 highest-traffic Tier-2 pages (worked
  examples, derivations, prerequisites). This is the single highest-value
  remaining work for the user-facing product.

### Week 3-4: ROADMAP refresh + operational polish

- Refresh ROADMAP to reflect R0-R5, P0-P3, and current state.
- Promote `lint:handwaves`, `lint:depth`, `lint:spelling` to blocking in
  CI once the existing backlogs are worked down.
- Replace `treosh/lighthouse-ci-action` with `treo/lighthouse-ci-action`.
- Add `actionlint` to pre-commit (low priority but prevents workflow
  regressions).

### Week 5: Monitoring and measurement

- Track Lighthouse scores across all sites (build the 7 remaining sites
  in CI and capture scores).
- Set up build-time performance baselines for regression detection.
- Review the weekly audit workflow results and close any accepted CVEs.

---

## 4. Risk register (active)

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| ViewTransitions never works in this stack | Medium | Low | It's a nice-to-have, not a requirement. Document and move on. |
| Astro 7 introduces breaking changes to R4 | Low | Medium | Pin versions; monitor changelogs in weekly audit. |
| Content depth expansion stalls | High | Low | Accept thin pages for low-traffic topics as a trade-off. |
| New Kobalte or Astro change reopens SSR issue | Low | High | Pin versions; monitor in weekly audit. |
| FlashcardDeck noUncheckedIndexedAccess regressions | Low | Low | Typecheck gate catches them at compile time. |

---

## 5. What NOT to do

- **Do NOT migrate to a different meta-framework** (Next, Nuxt, SolidStart).
  Astro + Starlight is correct for content sites.
- **Do NOT add a client-side state manager** (Zustand, Jotai, XState).
  SolidJS signals suffice for the island architecture.
- **Do NOT pursue 100% branch coverage immediately.** The path is:
  FlashcardDeck view branches -> 60-70% -> gate -> 80% over time.
- **Do NOT add unplugin-icons** (the dynamic import hangs in vitest;
  R3 inlined the Lucide geometry instead).
- **Do NOT introduce Panda/VanillaExtract/StyleX.** Tailwind v4 + the
  token system is the correct styling layer.

---

*This document supersedes the previous PATH_FORWARD.md. The earlier version
described R4 as "blocked" and proposed three unblock approaches; R4 is now
COMPLETE via the `client-only-directives.mjs` remark plugin. ViewTransitions
is the only remaining technical blocker and has been verified (not
speculated) through three independent test approaches.*
