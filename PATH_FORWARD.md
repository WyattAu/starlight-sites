# Path Forward and Roadmap

Date: 2026-06-21
Author: Nexus (Principal Systems Architect)
Scope: Strategic discussion of the remaining technical work, dependency
relationships between work items, and the recommended sequencing.

---

## 1. What has been completed (two parallel arcs)

Two major projects just concluded on the same codebase, and understanding
their outputs is essential before discussing what comes next.

### Arc A: GUI / Frontend refactor (GUI_FRONTEND_REFACTOR.md)

| Phase | Outcome | Commits |
|-------|---------|---------|
| R0 safety net | Strengthened ARIA gate; tagged `pre-gui-refactor`. | `b2c4c171` |
| R1 shim removal | `--ifm-*` Docusaurus legacy removed; regression guard. | `9f849c6f` |
| R2a Kobalte Select | LocaleSwitcher rebuilt on Kobalte; ~846 LOC removed. | `ef4063d6` |
| R2b Kobalte RadioGroup | PracticeProblem rebuilt on Kobalte. | `da176489` |
| R2c Kobalte RadioGroup | DiagnosticTest rebuilt on Kobalte. | `7e875820` |
| R3 Lucide icons | Authentic icon geometry; regression guard. | `24971b83` |
| **R4 Astro 6** | **BLOCKED** by Kobalte SSR under solid-js v6. | -- |
| **R5 Landing page** | **DEFERRED** (depends on R4). | -- |

### Arc B: Code quality audit and remediation (CODE_QUALITY_AUDIT.md)

| Item | Outcome | Commits |
|------|---------|---------|
| P0-1 stored XSS | Neutralised in dashboard; regression test. | `dda67855` |
| P3-1 cache | Verified already satisfied. | -- |
| P3-2 error handling | Server-side logging; no internal leakage. | `e0935180` |
| P2-1 typecheck gate | Root tsconfig + `bun run typecheck`; 7 real bugs fixed. | `5f7d091f` |
| P2-2 god-file split | Dashboard extracted (worker 963 -> 830 LOC). | `e5a3887c` |
| P2-3 a11y rules | 4 rules re-enabled; 0 errors across 638 files. | `e8dc1502` |
| P1-1 dep audit CI | bun audit (non-blocking) + typecheck in CI. | `a3f131a2` |
| P3-3 weekly audit | audit.yml opens issues on new CVEs. | `a3f131a2` |
| P1-2 branch coverage | Real pickNextQuestion/computeResults tests (13 -> 16). | `96225d29` |
| ADR-006 | Accept Astro 5.x CVEs until R4. | `5f7d091f` |

Both arcs produced **real, measurable improvements** — not just plans. The
codebase is measurably more secure (XSS closed), more type-safe (strict
tsconfig + 7 real bugs found), more maintainable (god-file reduced, a11y
rules restored), and more observable (Worker logging, CI audit).

---

## 2. The strategic situation (what's blocking what)

The project has a **dependency graph** between its remaining work items.
Understanding it prevents wasted effort on items that cannot complete until
a dependency is resolved.

```
                KOBALTE SSR FIX
                     |
            (unblocks both)
              /            \
    R4 ASTRO 6         R5 LANDING
    UPGRADE              PAGE
         \              /
          \            /
        LANDING PAGE
        VIA ASTRO (R5)
              |
         FINAL POLISH
```

### The central blocker: Kobalte + Astro 6 SSR

Everything converges on one technical problem:

- **Astro 6** (`@astrojs/solid-js` v6) server-side-renders Solid islands
  during prerender. Kobalte's popper calls `solid-js/web`'s `template()` at
  module top level, which is a client-only API in the SSR build.
- This affects **every page** that renders a Kobalte component: all
  `<PracticeProblem>` pages (via `QuestionDialog` -> `BaseDialog` -> Kobalte
  `Dialog`).
- **Astro 5 (current)** does NOT hit this code path — the same Kobalte
  components build fine on 5.18.2.

This single incompatibility blocks R4 (Astro 6 upgrade) which blocks R5
(landing page, which needs Astro 6 for native `<ViewTransitions />` and
other primitives).

The tools site builds cleanly on Astro 6 (no practice pages), so the
upgrade path itself is proven — only the Kobalte-SSR bridge is missing.

### The recommended unblock path

The `GUI_FRONTEND_REFACTOR.md` documents three approaches. The recommended
one is **`client:only="solid"` via `.astro` wrapper components**:

1. Create `shared/components/PracticeProblem.astro` (and similar) that
   renders `<PracticeProblemSolid client:only="solid" ...props />` — the
   `.astro` wrapper makes the Solid island client-only (no SSR).
2. Content files import `PracticeProblem` which resolves to the `.astro`
   wrapper — **no content files need changing**.
3. The wrapper's SSR fallback (static HTML) can use Astro's `slot` or
   render the question/options as plain text for SEO.

The risk with this approach is that `client:only` skips the static HTML
rendering, so the question text isn't in the prerendered output. The
SEO trade-off: the main page content (explanations, code samples) is
in the markdown; the interactive practice widget is supplementary. This
trade-off is acceptable for now, and the `client:load` path can be
explored later (it requires the component to be SSR-safe, which
contradicts the Kobalte situation).

An alternative path exists: **replace Kobalte with SSR-safe headless
primitives** (e.g., Ark UI's Solid bindings, if they pass SSR). This is
more work but eliminates the SSR incompatibility at the source. This
path should be evaluated if the `client:only` approach has unacceptable
SEO impact.

---

## 3. Remaining work: prioritised and sequenced

### Track 1: Unblock Astro 6 (highest priority — everything depends on it)

**Entry criteria:** Design decision on the unblock approach.
**Scope:** The architectural work to make the codebase SSR-safe or
client-only under `@astrojs/solid-js` v6.

| Task | Effort | Risk | Notes |
|------|--------|------|-------|
| Prototype `client:only` wrapper on ONE site | 2-3h | Low | Build tools site (no practice pages) with Astro 6 first; then add the wrapper to ONE page on a content site; build + Lighthouse. |
| Implement wrapper across all components | 4-6h | Medium | PracticeProblem, DiagnosticTest, and QuestionDialog. Content files unchanged. |
| Remove Astro 5.x CVE residual (ADR-006) | 1h | Low | Promote bun audit to blocking; close ADR-006. |
| Run the full 9-site build matrix on Astro 6 | 2-3h | Medium | CI validation. |

**Estimated total: 8-12 hours of focused work.**
**Gate:** All 9 sites build + deploy on Astro 6 without errors; Lighthouse
non-regression; `bun run verify` passes.

### Track 2: Content quality (ROADMAP Phase I — in progress)

**Entry criteria:** None (independent of R4).
**Scope:** The 17 open items in the ROADMAP.

| Item | Status | Effort | Blocking? |
|------|--------|--------|-----------|
| I-B: hand-wave phrases | Open | 1-2h | No |
| I-C: Tier 2 depth (462 files) | Open | ~2 weeks | No |
| I-C: Tier 1 depth (28 files) | Open | 2-3h | No |
| I-D: forward references | Open | 2-3h (manual review) | No |

These are editorial/content tasks, not code. They can proceed
independently of the code tracks. The hand-wave phrases (I-B) are the
lowest-effort win: 131 findings across 76 files, mostly replacing one word
with a specific condition.

### Track 3: Structural improvements (after R4)

**Entry criteria:** R4 complete.
**Scope:** P2-2 deferred items + coverage.

| Task | Effort | Risk | Notes |
|------|--------|------|-------|
| FlashcardDeck split (extract review/stats/settings) | 6-8h | Medium | Shared state across views needs careful prop/store design. Natural moment to fix the 13 noUncheckedIndexedAccess findings. |
| Promote coverage gate to 70% | 4-6h | Low | Add branch tests for FlashcardDeck view states + edge cases. |
| Landing page → Astro (R5) | 8-12h | Medium | Port 763-line inline-CSS index.html to Astro layout. |

### Track 4: Performance and monitoring (lower priority)

**Entry criteria:** R4 complete (new Astro features enable these).
**Scope:** ROADMAP Phase H extensions.

| Task | Effort | Notes |
|------|--------|-------|
| `@astrojs/partytown` trial | 1-2h | Offload analytics to web worker; Lighthouse measurement. |
| `<ViewTransitions />` adoption | 2-4h | Enable cross-page animation on content sites. |
| Build performance monitoring | 1h | Track build time trend across CI runs. |

---

## 4. The sequencing question

The key sequencing decision is: **should Track 2 (content quality) wait
for Track 1 (R4) or proceed in parallel?**

The answer is **parallel**. Track 2 (content edits) and Track 1 (code
architecture) are independent. There is no code dependency between
editing a markdown file to replace "typically" with a specific condition,
and restructuring the Kobalte SSR bridge. Both can be worked on
simultaneously — even by the same person — with no merge conflicts (Track
2 touches `sites/*/src/content/`, Track 1 touches `shared/components/`
and `astro.config.mjs`).

The recommended weekly cadence:
- **Week 1:** Prototype the `client:only` wrapper on one site + I-B
  hand-wave phrases (parallel, same PR each).
- **Week 2:** Implement wrapper across all components + I-C Tier 1 depth
  files (28 files).
- **Week 3:** Full 9-site build on Astro 6 + promote bun audit to
  blocking + ADR-006 closure.
- **Week 4:** FlashcardDeck split + coverage improvement (structural
  improvements, post-R4).
- **Week 5-6:** Landing page migration (R5) + I-C Tier 2 depth (long
  tail, partially automated).

---

## 5. What NOT to do (scope guardrails)

Several things are **not** worth doing right now and should be explicitly
ruled out to prevent scope creep:

### Do NOT migrate to a different meta-framework

The project is on Astro + Starlight for good reasons (ADR-001). SolidStart,
Next.js, SvelteKit, etc. are fullstack frameworks; this is a static
content site. Replacing Astro would be a Level-5 (fundamental) error with
no upside.

### Do NOT introduce a client-side state manager

Zustand, Jotai, XState — none are needed. The islands are small and
self-contained. SolidJS signals are sufficient. The search client is
read-only and doesn't need caching state (it's fire-and-forget).

### Do NOT add unplugin-icons (for now)

The tool is installed but proved unstable in vitest (dynamic import hangs).
The inline Lucide icons (R3) are working and the project only needs 4.
Revisit when the build surface stabilises post-R4.

### Do NOT pursue 100% branch coverage immediately

The coverage path is: 38% (current) -> FlashcardDeck split + branch
tests -> 60-70% -> gate promotion -> 80% over time. A jump to 80%
today would require massive test writing effort with diminishing returns
on the less-critical paths.

### Do NOT fix every CodeQL / lint finding

The code quality audit found the real issues. Many remaining biome
warnings (51, mostly `useSemanticElements` and `noSvgWithoutTitle` on
SVG assets) are informational. Fixing them would require judgement calls
on every individual case with no measurable user impact.

---

## 6. Risk register (active items)

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Astro 6 upgrade breaks more than Kobalte | Medium | High | Prototype on ONE site before propagating; keep `pre-astro-6` tag for rollback. |
| Landing page migration regresses SEO | Low | Medium | Measure Lighthouse SEO score before/after; preserve meta tags + structured data. |
| FlashcardDeck split introduces state bugs | Medium | Medium | Extract one view at a time; run component tests after each extraction. |
| Content depth expansion (462 files) stalls | High | Low | Prioritise by traffic; accept thin pages for low-traffic topics as a trade-off. |
| New Kobalte dependency or Astro change reopens SSR issue | Low | High | Pin dependency versions; monitor Kobalte/ Astro changelogs in weekly audit. |

---

## 7. Success criteria for the next cycle (5 weeks)

| Metric | Current | Target |
|--------|---------|--------|
| Astro version | 5.18.2 | 6.x |
| Build passes on all 9 sites | 9/9 (Astro 5) | 9/9 (Astro 6) |
| `bun audit` blocking in CI | informational | blocking (zero unaccepted CVEs) |
| Hand-wave phrases | 131 | 0 |
| Content below depth tiers | 506 | < 400 |
| Test count | ~440 | ~460 |
| Branch coverage (shared/components) | 38% | 50%+ |
| FlashcardDeck LOC | 516 (god-file) | < 200 (per extracted view) |
| Landing page | inline HTML/CSS (763 LOC) | Astro-rendered |

These are measurable, verifiable targets. Anything not on this list is
not a priority for the next cycle.

---

## 8. Decision points (for the user)

The path forward requires three decisions before execution begins. The
document above provides the analysis; the user chooses the direction.

### Decision 1: Unblock approach

**Option A:** `client:only` wrappers (recommended above — faster, simpler,
SEO trade-off for interactive widgets).

**Option B:** Replace Kobalte with SSR-safe headless primitives (Ark UI or
similar — eliminates the SSR incompatibility at the source, more work).

**Option C:** Wait for upstream Kobalte or Astro to resolve the SSR
incompatibility (zero work, indefinite timeline, current code stays on
Astro 5).

### Decision 2: Landing page migration timing

**Option A:** Migrate as part of R4 (when Astro 6 lands — the natural
moment).

**Option B:** Migrate independently of R4 on Astro 5 (possible since the
landing page is a plain page with no interactive islands; only loses
ViewTransitions).

### Decision 3: Content depth scope

**Option A:** Full Tier 2 expansion (462 files — ~2 weeks of content work,
highest quality impact but large scope).

**Option B:** Traffic-prioritised expansion (expand only the top 50-100
highest-traffic pages — faster, targeted impact).

**Option C:** Defer entirely until code tracks are complete (zero content
work until R4/R5 land).

---

*This document is a discussion artifact. It should be read alongside
`GUI_FRONTEND_REFACTOR.md`, `CODE_QUALITY_AUDIT.md`, and `ROADMAP.md`.*
