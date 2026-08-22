# STATUS.md

**Last verified:** 2026-08-22
**Purpose:** Single source of truth for project state, competitive positioning, and prioritised work.
Supersedes: `CODE_QUALITY_VS_FAANG.md`, `SITE_COMPARISON_MATRIX.md`, `PATH_FORWARD.md`, `CODE_QUALITY_MATRIX.md`, `SESSION_SUMMARY.md` (all archived to `.reports/`).

---

## Current state

| Metric | Value |
|---|---|
| Sites | 46 (45 Astro + 1 landing) |
| Content files (md/mdx) | 3,331 |
| Content lines | ~1,444,460 |
| Test files | 41 |
| Tests | 439+ (219 node:test + 220+ vitest) |
| ADRs | 13 (.adrs/) |
| Custom lint scripts | 11 (scripts/lint-*.js) |
| Shared code | 7,219 LOC (src) + 1,799 (CSS) + 2,546 (public) |
| CI workflows | 9 (.github/workflows/) |
| Coverage (components) | 69% stmts / 52% branches (ratchet floor 65/50) |
| Coverage (utils) | 96.4% stmts / 98.2% branches |
| Lighthouse min score | 0.9 (performance/a11y/best-practices/SEO) |
| Content files below tier minimums | 750 |
| Files with capitalisation corruption | 664 |
| Files with templated/garbage descriptions | ~1,030 |
| Strip-component broken sentences | 186 occurrences in 132 files |
| Migrated HTML asides (vs native :::) | 3,221 in 809 files |

---

## Comparative matrix

Scale: 1-5 (5 = best-in-class).

### Content and product

| Dimension | This repo | freeCodeCamp | MDN | Khan/OCW | PMT/SaveMyExams | Rust Book |
|---|---|---|---|---|---|---|
| Content depth (core) | 4 | 4 | 5 | 5 | 4 | 5 |
| Content breadth | 4 | 4 | 4 | 5 | 3 | 2 |
| Content correctness | 2.5 | 4.5 | 5 | 4.5 | 4 | 5 |
| Interactive practice | 4.5 | 5 | 2 | 3 | 2 | 1 |
| Visuals/diagrams | 1.5 | 4 | 5 | 5 | 4 | 3 |
| Citations/sources | 1 | 4 | 5 | 5 | 3 | 4 |
| SEO infrastructure | 4.5 | 5 | 5 | 4 | 4 | 4 |
| SEO content signals | 2 | 5 | 5 | 4 | 4 | 4 |
| i18n | 2 | 4 | 4.5 | 2 | 1 | 3 |

**Strengths (why this repo is competitive):** Worked examples (7,371 collapsible solutions), common pitfalls sections, diagnostic tests, SM-2 flashcards with property-tested algorithm, cross-site linking, multi-board exam alignment (AQA/Edexcel/OCR/CIE annotated per topic), interactive MDX components (PhET, Desmos) -- these are genuinely differentiated and none of the competitors offer all of them together.

**Weaknesses (what users and search engines see):** 1 image across 1.44M content lines (every competitor is visual-first); ~1,030 templated/garbage descriptions; 664 files with mid-sentence capitalisation corruption from upstream; 186 broken sentences from stripped component references; 750 thin pages; near-zero citations (22 reference sections across 3,331 files).

### Architecture and programming principles

| Principle | Score | Assessment |
|---|---|---|
| DRY | 3/5 | 435k duplicated lines (ADR-002 deliberate trade-off). Zero drift today (SHA-256 sync + CI gate). Every refactor fans out x45 -- expensive at scale. |
| KISS | 3.5/5 | Sync mechanism is elegant. 30+ root strategy docs with contradictory numbers is accidental complexity. |
| SOLID (DIP) | 2/5 | Worst score. Hardcoded data maps in search-api, unused zod/@felte deps. |
| SOLID (SRP) | 3/5 | FlashcardDeck split to 4 modules helped; Head.astro still 388 lines with mixed concerns. |
| SOLID (OCP/LSP/ISP) | 4/5 | Starlight component overrides are a clean open-closed pattern. |
| Separation of concerns | 4/5 | Content/code split is clean; search-api is properly isolated; shared components are well-scoped. |
| Fail-fast | 4/5 | 11 lint scripts, pre-commit gate, canary deploy with auto-rollback, LHCI assertions. |
| YAGNI | 3/5 | Dead deps (astro-seo, unused widgets package), disabled workflows, archived scripts still tracked. |

### Engineering benchmarks (archetypes)

| Lens | Score | Assessment |
|---|---|---|
| FAANG mid-tier | 3.5/5 | TS strict, Biome zero-error, 439 tests, coverage ratchets, CI gating -- matches FAANG mid-tier. Coverage ratchet strategy (only raise, never lower) is above FAANG-median. |
| HFT (determinism) | 2.5/5 | Performance budgets defined and LHCI-gated. But KV index refresh blocked since June (placeholder secret) -- a 3-month silent dependency. |
| ECN (resilience) | 3.5/5 | Static-fallback search index is genuine ECN instinct. Single Worker, no error budget policy. |
| Defence/CM (traceability) | 2.5/5 | 6 governance docs contradict each other on site counts (9/10/25/45/46), test counts (239/245/439/465), dead redirects to decommissioned subdomains. ADR-011 fixed this pattern for code; governance docs need the same treatment. |

---

## Path forward

The repo over-invests in process and under-invests in what users and search engines actually see: content hygiene and visuals. No learning site ever won on canary deploys.

### P0 -- Stop the bleeding (1-2 weeks)

| # | Action | Why |
|---|---|---|
| 1 | Script and apply the 664-file capitalisation corruption fix (pre-dates migration, exists in WyattsNotes source). | Frozen debt that compounds with every new internal link. |
| 2 | Regenerate ~1,030 templated/garbage descriptions from body first-paragraphs (120-160 chars). | Highest-ROI SEO action available. Descriptions are the only widespread on-page weakness. |
| 3 | Fix broken defaults: `generate-site.mjs` template (fails its own parity lint), og:image cross-site bug (12 programming sites point at languages.wyattau.com), `academics -> university` dead redirect, theme-color mismatch (all 45 hardcode DSE orange despite sites.meta.json per-site colors), remove unused astro-seo/@jdevalk/astro-seo-graph deps. | Broken defaults cause every newly generated or added site to ship broken. |
| 4 | Resolve the 3-month `CLOUDFLARE_KV_NAMESPACE_ID` blocker. | Search index refresh is the product's connective tissue. |
| 5 | Gate or remove zh locales until real translation exists. | hreflang-to-stub pages is actively penalised by Google; worse than offering no i18n. |

### P1 -- Close competitive gaps (1-2 months)

| # | Action | Why |
|---|---|---|
| 6 | Diagrams: add TikZ/SVG pipeline or Mermaid export for the top-200 pages. | 1 image across 1.44M lines vs PMT/Khan/LibreTexts visual-first teaching. Biggest UX gap. |
| 7 | **Build out stub sites** (driving-us/uk/eu, civics-tests, licensing, professional-certs, language-tests). Target: 50-150 quality pages per site at CONTENT_STANDARD tiers. Fix US-localisation errors (EU Vienna Convention signs currently shown on US site). Source from official bodies (MUTCD, USCIS, DVSA). Sequence: driving-us/uk first (real search volume, lowest authoring cost); licensing/professional-certs last (competes with commercial providers). | 12 stub sites with 5-19 files each are accuracy risks and thin-content SEO liabilities. Building them to PMT quality makes them defensible assets. |
| 8 | Citations: add `sources:` frontmatter field + rendered References section for the 12 highest-authority sites (mathematics, physics, chemistry, computer-science, programming, alevel, ib). Cite textbooks already benchmarked against (Aluffi, CLRS, Stroustrup, Atkins). | Required post-HCU for E-E-A-T; zero citations is an anomaly vs every named competitor. |
| 9 | Security hardening: nonce-based CSP (drop unsafe-inline), Durable Objects or KV-backed rate limiting (in-memory is ineffective on Cloudflare Workers multi-isolate), tighten CORS on search API (* is permissive). | unsafe-eval+unsafe-inline weakens XSS protection; CORS * on search API is unnecessarily open. |
| 10 | Consolidate governance docs: archive VS_FAANG/SITE_COMPARISON_MATRIX/PATH_FORWARD/CODE_QUALITY_MATRIX/SESSION_SUMMARY to .reports/, replace with this STATUS.md. | 6 docs contradicting each other on basic facts would fail any Defence-style CM audit. |

### P2 -- Compounding advantages (quarter+)

| # | Action | Why |
|---|---|---|
| 11 | Coverage ratchet for scripts/ and search-api/ (~10k LOC unmeasured) via --experimental-test-coverage on existing node:test suite. | Current vitest report shows 0% for these directories. |
| 12 | Evaluate npm workspace package (@wyattsnotes/components) before hitting ~60 sites. ADR-002's standalone-builds rationale weakens as shared/ grows. | 435k synced lines works at 46 sites; linear cost per new site is unsustainable beyond ~60. |
| 13 | Client-side error capture (last open item in CODE_QUALITY_MATRIX). Instrument the flashcards/diagnostics funnel with analytics. | Best interactive practice in the niche; zero observability on usage. |
| 14 | Thin-page program: 750 files below tier minimums, prioritised by GSC impressions data. | 616 Tier-1 index pages + 113 Tier-2 pages below minimums. |

---

## Decisions recorded

- **2026-08-22:** STATUS.md is the single source of truth for project status. All prior audit/matrix docs archived to `.reports/`.
- **2026-08-22:** Stub sites (driving-*, civics, licensing, professional-certs, language-tests) will be built out to CONTENT_STANDARD tiers rather than noindexed or deleted. Build sequence: driving-us/uk first, licensing/professional-certs last.

---

## Archived documents

These files have been superseded by this document and moved to `.reports/`:

| Original | Why archived |
|---|---|
| `CODE_QUALITY_VS_FAANG.md` | Superseded 2026-08-19; snapshot of June 2026 state |
| `CODE_QUALITY_MATRIX.md` | Superseded; internal numbers contradicted README and other docs |
| `SITE_COMPARISON_MATRIX.md` | Superseded; audited 10 sites (3 decommissioned), never updated |
| `PATH_FORWARD.md` | Superseded; "structurally complete" claim refuted by subsequent findings |
| `SESSION_SUMMARY.md` | Superseded; July 2026 snapshot with site-count inconsistencies |
