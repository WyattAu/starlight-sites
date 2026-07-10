# Site Comparison Matrix

A comprehensive audit comparing feature parity and rendering quality across all 10 sites in the [starlight-sites](https://github.com/WyattAu/starlight-sites) monorepo.

## Overview

This monorepo houses 10 sites built with [Astro](https://astro.build) + [Starlight](https://starlight.astro.build), using SolidJS for interactive components, Tailwind v4 for styling, and deployed to Cloudflare Pages. The sites share canonical components via a sync tool (`scripts/sync-shared.mjs`) but each builds independently.

| # | ID | Domain | Scope |
|---|----|--------|-------|
| 1 | main | wyattsnotes.wyattau.com | Hub / landing page |
| 2 | langs | languages.wyattau.com | Comparative programming languages |
| 3 | tools | tools.wyattau.com | Algorithms, data structures |
| 4 | prog | programming.wyattau.com | C++ systems programming |
| 5 | uni | university.wyattau.com | Proof-based undergraduate STEM |
| 6 | infra | infrastructure.wyattau.com | Server administration, databases |
| 7 | quals | qualifications.wyattau.com | GCSE, AP, Scottish Highers, Irish LC |
| 8 | alevel | alevel.wyattau.com | UK A-Level revision notes |
| 9 | ib | ib.wyattau.com | International Baccalaureate Diploma Programme |
| 10 | dse | dse.wyattau.com | Hong Kong Diploma of Secondary Education |

---

## Feature Parity Matrix

### Core

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Starlight | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Search | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Math (KaTeX) | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Mermaid diagrams | [NO] | [YES] | [YES] | [YES] | [NO] | [YES] | [NO] | [NO] | [YES] | [NO] |
| Edit link | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Last updated | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Pagination | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Table of contents | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |

### Infrastructure

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| KaTeX CDN | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Cloudflare analytics | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Web vitals | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Cloudflare _headers | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| manifest.json in head | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | ~ | [YES] | ~ |
| Font preloads | [NO] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | ~ | [YES] | ~ |
| OG images | ~ | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Cross-site search | ~ | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Page search | ~ | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |

### Content Types

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Flashcards | [NO] | ~ | [NO] | [NO] | [YES] | [NO] | [NO] | [NO] | [YES] | [NO] |
| Practice problems | [NO] | [YES] | [NO] | [YES] | [YES] | [YES] | [NO] | [YES] | ~ | [NO] |
| Diagnostic tests | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [YES] | [YES] | [YES] | [YES] |
| Desmos/PhET components | [NO] | ~ | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [NO] | [NO] |
| Tabs integration | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] |

### Interactive

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| SolidJS | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Tailwind v4 | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| unplugin-icons | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [YES] | [NO] | [NO] |

### i18n

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| i18n UI (zh.json) | [NO] | ~ | ~ | ~ | ~ | ~ | ~ | ~ | ~ | ~ |
| i18n content (zh/ folder) | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [YES] | [NO] |

### Head Tags

| Feature | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|---------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Social links | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] |
| Logo | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] |
| Landing page | [YES] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] | [NO] |

**Legend:** [YES] = present, [NO] = absent, ~ = partial/broken

---

## Feature Gap Analysis

### Missing from **main** (landing page)
The landing page is built with Astro but does not use Starlight, so it lacks the entire Starlight feature surface: search, math rendering, diagrams, navigation chrome, and infrastructure features (analytics, headers). This is **by design** — the landing page is a lightweight hub.

**Impact:** Low. Not a regression; the landing page serves a different purpose.

### Missing across **all sites**
- **Social links** — No site has configured footer social links (GitHub, Twitter, etc.).
- **Logo** — No site has a brand logo configured in Starlight.
- **Tabs integration** — The `@astrojs/starlight/tabs` component has not been adopted anywhere.
- **unplugin-icons** — Only `alevel` uses this icon framework; all others rely on inline SVGs.

**Impact:** Medium (social links, logo — brand visibility). Low (tabs, unplugin-icons — nice-to-have).

### Partial i18n: ten sites with zh.json stubs
All 9 Starlight sites have a `src/content/i18n/zh.json` file, but it is a **partial translation** — only a subset of UI strings are provided, meaning the Chinese UI falls back to English for untranslated keys.

**Impact:** Low (i18n is secondary; English is the primary language).

### Full i18n content only on **ib**
Only `ib` has a `zh/` content directory with translated pages alongside the English originals.

**Impact:** Low. A pilot for eventual multilingual expansion.

### Mermaid, Flashcards, Practice Problems, Diagnostic Tests, Desmos/PhET — uneven adoption
These interactive/content features are scattered across sites based on subject relevance:
- **Mermaid:** Present on 5/9 Starlight sites, absent on `uni`, `quals`, `alevel`, `dse`. Not critical — diagrams are a supplement.
- **Flashcards:** Only on `uni` and `ib`. Missing from `langs` (partial ~).
- **Practice problems:** Present on 5/9 Starlight sites, plus partial on `ib` and absent on `langs`, `tools`, `quals`, `dse`.
- **Diagnostic tests:** Only on `quals`, `alevel`, `ib`, `dse` — aligned with exam-prep focus.
- **Desmos/PhET:** Present on 5/9, partial on `langs`, absent on `ib` and `dse`.

**Impact:** Low-Medium. These are content-area decisions; unification would require cross-site refactoring that may not be warranted.

### manifest.json and font preloads — absent on alevel, dse
`alevel` and `dse` lack `manifest.json` in `<head>` and font preloading, while the other 7 Starlight sites have them.

**Impact:** Medium. PWA support (manifest) and perceived performance (font preloads) are measurable gaps.

### OG images — partial on main
The landing page has no OG image configuration. All 9 Starlight sites have OG images configured via `@astrojs/starlight` built-in.

**Impact:** Low. The landing page is a hub, not content that gets shared independently.

---

## Rendering Issues Matrix

| Issue Category | Severity | Count | main | langs | tools | prog | uni | infra | quals | alevel | ib | dse |
|----------------|----------|-------|------|-------|-------|------|-----|-------|-------|--------|----|-----|
| Unclosed `$$` math blocks | CRITICAL | 30 | — | — | [YES] | — | [YES] | — | [YES] | [YES] | [YES] | [YES] |
| Unclosed frontmatter | CRITICAL | 3 | — | [YES] | [YES] | — | — | — | — | [YES] | — | — |
| Table issues (inconsistent columns, missing separators) | HIGH | 425 | — | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Broken internal `.md` links | HIGH | 34 | — | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Unclosed inline `$` math (odd count per line) | MEDIUM | 1,257 | — | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Tables >8 columns (overflow risk) | MEDIUM | 239 | — | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Unclosed HTML tags | MEDIUM | 11 | — | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Paired admonitions (benign, false positive) | LOW | 5,355 | — | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |
| Excessive consecutive blank lines (>3) | LOW | 2,547 | — | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] | [YES] |

---

## Critical Rendering Issues

### 30 unclosed `$$` math blocks

These cause KaTeX parse errors and broken page rendering. Files span 5 sites:

| Site | File Count | Example Paths |
|------|-----------|---------------|
| alevel | 10 | `alevel/src/content/docs/statistics/...`, `alevel/src/content/docs/further/...` |
| dse | 6 | `dse/src/content/docs/maths/...` |
| ib | 5 | `ib/src/content/docs/math/...` |
| qualifications | 4 | `qualifications/src/content/docs/gcse/...`, `qualifications/src/content/docs/ap/...` |
| tools | 3 | `tools/src/content/docs/algorithms/...` |
| university | 2 | `university/src/content/docs/...` |

### 3 unclosed frontmatter blocks

| File | Site | Status |
|------|------|--------|
| `alevel/src/content/docs/statistics/statistics-distributions-depth.md` | alevel | Fixed |
| `languages/src/content/docs/languages/ownership.md` | langs | Fixed |
| `tools/src/content/docs/data-structures/linked-lists-stacks-queues.md` | tools | Fixed |

These break Starlight's frontmatter parser, preventing the page from rendering entirely.

---

## Priority Action Items

| Priority | Action | Target | Effort | Impact |
|----------|--------|--------|--------|--------|
| P0 | Close all 30 unclosed `$$` math blocks | alevel, dse, ib, quals, tools, uni | Medium | Critical — broken page rendering |
| P1 | Fix 425 table issues (inconsistent column counts, missing header separators) | All Starlight sites | High | High — broken/misaligned tables across the entire codebase |
| P2 | Fix 34 broken internal `.md` links | All Starlight sites | Low | High — users hit 404s navigating between pages |
| P3 | Balance 1,257 unclosed inline `$` math expressions | All Starlight sites | High | Medium — KaTeX parse warnings, rendering glitches |
| P4 | Audit 239 tables >8 columns for overflow | All Starlight sites | Medium | Medium — horizontal scroll on mobile |
| P5 | Close 11 unclosed HTML tags | All Starlight sites | Low | Low-Medium — potential layout breakage |
| P6 | Add manifest.json and font preloads to alevel, dse | alevel, dse | Low | Medium — PWA support, perceived performance |
| P7 | Eliminate 2,547 excessive blank-line runs | All Starlight sites | Low | Low — cosmetic |
| P8 | Strip 5,355 paired-admonition false positives from lint rules | Tooling | Low | Low — reduces noise in audit output |
| P9 | Evaluate social links and logo config across all sites | All sites | Low | Low — brand polish |
| P10 | Consider i18n content expansion beyond ib | All Starlight sites | High | Low — strategic not technical |

---

*Generated from rendering audit and feature parity audit data. Last updated: 2026-07-10.*
