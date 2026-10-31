# Handoff — reader quality + three new subject sites

## Deployed state (ef2981c13, success)
- economics.wyattau.com → 200, 16 pages of proof-first content
- finance.wyattau.com → 200, 7 pages
- accounting.wyattau.com → 200, 6 pages
- Search: 200s, sub-second relevance, 5,010 entries across 48 sites
- All reader-reported items closed

## Phase status this iteration
- **Plan**: done — dot-and-cross SVGs for GCSE chemistry bonding
- **Research**: done — 8 diagram specs verified against periodic table
- **Prove**: done — electron counts, charges, conventions all checked
- **Implement**: partial — 7 SVGs on the bonding page; 1 renders live (see issue below)
- **Test**: gates green (314 pass), 314 unit tests pass

## Artifacts
- Commits: d1c936e39 (Sites dedup), ef2981c13 (MgO SVG fix), 341c25068 (bonding SVGs),
  477bd0fb6 (before-you-begin), b57d96da1 (landing catalogue), f7a7c46eb (credentials),
  7dba9e931 (dedup env), 4d687674c (A-record replacement), 099ae6449 (inline python collapse)
- `.loop/plan.md`, `.loop/research.md` — dot-and-cross diagram specs and chemistry verification

## Known issue: bonding page SVG rendering
The bonding page markdown source has 7 `<svg>` elements, but only 1 renders in the served
HTML. Astro's markdown pipeline (remark/rehype) appears to strip or transform multiple
inline SVGs in a single markdown file. The source file is correct (verified: 7 opens,
7 closes, balanced). The fix is a build-pipeline adjustment — either:
1. Convert the page to `.mdx` (which handles raw HTML/SVG better), or
2. Set `allowDangerousHtml: true` in the Astro markdown config, or
3. Move the SVGs to separate `.astro` component files and import them

This affects the visual pass for ALL sites — any page with inline SVG diagrams will have
the same rendering limitation. Fix once at the build level, benefits the whole network.

## A future session should pick up first
1. **Fix the SVG rendering in Astro markdown** (the build-pipeline adjustment above) —
   this unblocks the entire visual pass for all 48 sites
2. **Add the NaCl diagram** (the insertion anchor didn't match; needs the correct
   text pattern from the bonding page)
3. **Accounting statements page** (the cycle track's four statements interlocking)
4. **CS complexity theory** — Ladner's theorem, BPP, oracle separations are already
   on the 6-theory page; the next beyond-increment would be the PCP theorem
   statement or randomized complexity classes
5. **Zero-result SLO** — 44.1% → <5% (multi-word AND semantics, crawled content
   quality for KaTeX pages)
