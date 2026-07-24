# Duplicate Content Canonical Strategy

46 subdomain sites covering overlapping topics. Google may flag these as duplicate content. This document defines how to handle it.

*Last updated: 2026-07-24*

---

## 1. Content Overlap Matrix

### High Overlap (same topic, multiple sites)

| Topic | Sites | Risk Level |
|-------|-------|------------|
| **Physics** | physics, dse, ib, alevel, gcse, ap, highers, leaving-cert, cbse, gaokao, hsc | **Critical** |
| **Chemistry** | chemistry, dse, ib, alevel, gcse, ap, highers, leaving-cert, cbse, gaokao, hsc | **Critical** |
| **Mathematics/Maths** | mathematics, dse, ib, alevel, gcse, ap, highers, leaving-cert, cbse, gaokao, hsc | **Critical** |
| **Biology** | ib, alevel, gcse, ap, highers, leaving-cert, dse | **High** |
| **Computer Science** | computer-science, ib, alevel, gcse, ap, highers, leaving-cert, cbse | **High** |
| **Economics** | ib, alevel, gcse, dse | **Medium** |
| **English** | ib, alevel, gcse, ap, hsc, gaokao | **Medium** |
| **Geography** | ib, alevel, gcse, dse | **Medium** |
| **History** | ib, alevel, gcse, ap, dse | **Medium** |
| **Psychology** | ib, alevel | **Low** |

### No Overlap (unique to one site)

| Topic | Site |
|-------|------|
| Abstract Algebra, Topology, Measure Theory | mathematics |
| Lagrangian/Hamiltonian Mechanics, QM, Particle Physics | physics |
| Organic Chemistry mechanisms | chemistry |
| DSE-specific ICT | dse |
| IB Theory of Knowledge | ib |
| IB Psychology | ib |
| Programming languages (C++, Rust, Go, etc.) | cpp, rust, go, etc. |
| Infrastructure (Linux, networking, security) | linux, networking, security |

---

## 2. Canonical Rules

### Rule 1: Exam-board pages canonical to themselves

Each exam-board page is unique because it targets a specific curriculum. A DSE physics page is NOT the same as a general physics page.

```
dse.wyattau.com/physics/1-mechanics/  → canonical to self
ib.wyattau.com/physics/1-space-time-and-motion/  → canonical to self
alevel.wyattau.com/physics/mechanics/  → canonical to self
```

**Why**: These pages cover the same topic but with different syllabus structures, different exam questions, different depth, and different examples. They are not duplicates.

### Rule 2: General topic site is canonical for broad, non-curriculum content

When someone searches "what is Newton's second law" (no exam-board intent), the general physics site should win.

```
physics.wyattau.com/1-classical-mechanics/  → canonical to self (university-level treatment)
```

Exam-board pages should NOT canonical to the general site. They are different content targeting different audiences.

### Rule 3: No cross-site canonicals between exam boards

Never do this:
```
dse.wyattau.com/physics/  → canonical to ib.wyattau.com/physics/  [FAIL] WRONG
```

Each board's content is distinct. Canonicals should only be used for true duplicates (same content, different URLs).

### Rule 4: Self-referencing canonical on every page

Every page must have:
```html
<link rel="canonical" href="https://{site}.wyattau.com/{path}/" />
```

This is already implemented in `shared/components/starlight/Head.astro:245`.

### Rule 5: Cross-site alternate links (not canonicals)

Currently implemented at `Head.astro:252-256`. These tell Google the pages are related but distinct:

```html
<link rel="alternate" hreflang="en" href="https://dse.wyattau.com/physics/" data-related-site="dse" />
<link rel="alternate" hreflang="en" href="https://ib.wyattau.com/physics/" data-related-site="ib" />
```

**Keep this pattern.** Do NOT convert these to canonicals.

---

## 3. Cross-Site Linking Rules

### 3.1 Link from exam-board pages to the general site

Every exam-board subject index page should link to the general topic site for deeper treatment:

```markdown
---
title: DSE Physics
---

# DSE Physics

This covers the DSE Physics curriculum (Hong Kong).

For university-level physics, see [Physics](https://physics.wyattau.com/).
```

Placement: at the top of each subject index page, or in a "See also" sidebar component.

### 3.2 Link from general site to exam-board pages

The general physics/mathematics/chemistry index pages should link to exam-board versions:

```markdown
# Physics

Study notes covering classical mechanics, thermodynamics, electromagnetism, and more.

## Exam Board Specific

- [DSE Physics](https://dse.wyattau.com/physics/) — Hong Kong DSE curriculum
- [IB Physics](https://ib.wyattau.com/physics/) — International Baccalaureate
- [A-Level Physics](https://alevel.wyattau.com/physics/) — UK A-Level (AQA, OCR, Edexcel)
- [AP Physics](https://ap.wyattau.com/physics/) — US Advanced Placement
```

### 3.3 Cross-exam-board links

When two exam boards cover the same topic deeply, cross-link them:

```markdown
## See also
- [IB Mechanics](https://ib.wyattau.com/physics/1-space-time-and-motion/) — similar treatment for IB
- [A-Level Mechanics](https://alevel.wyattau.com/physics/mechanics/) — AQA/OCR version
```

### 3.4 Never use relative cross-site links

Always use absolute URLs:
```markdown
[IB Physics](https://ib.wyattau.com/physics/)  [PASS]
[IB Physics](/physics/)  [FAIL] (resolves to current domain)
```

---

## 4. Content Differentiation Strategy

### 4.1 Exam-board pages must be clearly curriculum-specific

Each exam-board page should include:

1. **Curriculum reference** — "This covers Topic 1: Mechanics from the DSE Physics curriculum (2025 onward)"
2. **Exam-board-specific examples** — Use past paper questions from that board
3. **Syllabus mapping** — Show which syllabus points this page covers
4. **Difficulty calibration** — Match the depth to the exam level:
   - GCSE: conceptual, no calculus
   - IGCSE/A-Level: some calculus, more formal
   - IB: internal assessment connections, TOK links
   - AP: AP exam format, multiple-choice style
   - DSE: Hong Kong-specific context, Chinese education system references
   - University: full mathematical rigor

### 4.2 The general site covers topics without exam-board framing

The physics/mathematics/chemistry sites should:
- Cover topics at university depth
- Use standard physics notation (not exam-board shorthand)
- Include advanced topics not in any exam syllabus (e.g., Lagrangian mechanics, measure theory)
- Reference textbooks (Griffiths, Kleppner, Shankar) not exam boards
- Include research connections and open problems

### 4.3 Unique content per exam board

| Board | Unique Differentiator |
|-------|----------------------|
| **DSE** | Hong Kong curriculum references, Chinese education context, HKDSE past paper format |
| **IB** | Theory of Knowledge connections, Internal Assessment guidance, IB-specific command terms (outline, discuss, evaluate) |
| **A-Level** | AQA/OCR/Edexcel specification references, practical endorsement notes, NEA guidance |
| **GCSE** | Foundation/Higher tier split, required practicals, 9-1 grading context |
| **AP** | AP exam format (multiple choice + FRQ), College Board curriculum framework, AP score thresholds |
| **Highers** | SQA curriculum references, Scottish education context, CfE connections |
| **Leaving Cert** | Irish curriculum references, exam technique for Irish papers |
| **CBSE** | NCERT textbook alignment, Indian competitive exam context (JEE/NEET) |
| **Gaokao** | Chinese national exam format, 高考-specific preparation strategies |
| **HSC** | NSW curriculum references, Australian Tertiary Admission Rank (ATAR) context |

### 4.4 Depth calibration matrix

| Topic | GCSE | A-Level | IB | AP | DSE | University |
|-------|------|---------|-----|-----|-----|------------|
| Newton's Laws | Conceptual, F=ma only | Formal, vectors, friction | + IA connections | AP1 format | DSE Paper 1 style | Full vector calculus, non-inertial frames |
| Thermodynamics | States of matter, energy transfer | Ideal gas law, specific heats | + Internal assessment | AP1/2 split | DSE Paper 2 style | Statistical mechanics, entropy derivation |
| Electromagnetism | Circuits, magnetism basics | Fields, capacitors, induction | + Option E depth | AP2/C: Electricity & Magnetism | DSE Paper 2 style | Maxwell's equations, waveguides |
| Quantum | Radioactivity only | Photoelectric effect,波粒二象性 | + Option A depth | AP2/C: modern physics | DSE nuclear physics | Full QM formalism, Hilbert spaces |

---

## 5. Implementation Plan

### Phase 1: Audit and fix canonical tags (Week 1)

**Current state**: `Head.astro:245` sets self-referencing canonicals on all pages. This is correct.

**Action items**:

1. **Verify all 46 sites have sitemaps** — check each `astro.config.mjs` includes `sitemap()` integration
   - Already confirmed: all sites use `@astrojs/sitemap`

2. **Check for www/non-www duplication** — ensure all sites redirect to `https://{subdomain}.wyattau.com`
   - Add `_redirects` or Cloudflare redirect rules if missing

3. **Check for trailing slash consistency** — canonicals should always include trailing slash
   - Current implementation in Head.astro uses `Astro.url.href` which may or may not include trailing slash
   - **Fix**: Ensure `canonicalBase` always ends with `/`

### Phase 2: Add cross-site links to subject index pages (Week 2)

**Files to modify** (subject index pages across all exam-board sites):

For each exam-board site, update the subject index pages:

| Site | Files | Action |
|------|-------|--------|
| dse | `physics/index.md`, `chemistry/index.md`, `maths/index.md`, `biology/index.md`, `economics/index.md`, `geography/index.md`, `history/index.md`, `ict/index.md` | Add "See also: [Physics](https://physics.wyattau.com/)" link |
| ib | `physics/index.md`, `chemistry/index.md`, `mathematics/index.md`, `biology/index.md`, `computer-science/index.md`, `economics/index.md`, `english/index.md`, `geography/index.md`, `history/index.md`, `psychology/index.md` | Add "See also" links |
| alevel | `physics/index.md`, `chemistry/index.md`, `maths/index.md`, `biology/index.md`, `computer-science/index.md`, `economics/index.md`, `english/index.md`, `geography/index.md`, `history/index.md`, `psychology/index.md`, `further-maths/index.md` | Add "See also" links |
| gcse | `physics/index.md`, `chemistry/index.md`, `maths/index.md`, `biology/index.md`, `computer-science/index.md`, `english/index.md` | Add "See also" links |
| ap | `physics/index.md`, `chemistry/index.md`, `biology/index.md`, `computer-science/index.md`, `maths/index.md`, `english/index.md`, `history/index.md`, `statistics/index.md` | Add "See also" links |
| highers | `physics/index.md`, `chemistry/index.md`, `maths/index.md`, `biology/index.md`, `computer-science/index.md` | Add "See also" links |
| leaving-cert | `physics/index.md`, `chemistry/index.md`, `maths/index.md`, `biology/index.md`, `computer-science/index.md` | Add "See also" links |
| hsc | `physics/index.md`, `chemistry/index.md`, `mathematics/index.md`, `english/index.md` | Add "See also" links |
| cbse | `physics/index.md`, `chemistry/index.md`, `mathematics/index.md` | Add "See also" links |
| gaokao | `physics/index.md`, `chemistry/index.md`, `mathematics/index.md`, `english/index.md`, `chinese/index.md` | Add "See also" links |

For each general topic site, add exam-board links to the index page:

| Site | Files | Action |
|------|-------|--------|
| physics | `index.mdx` | Add exam-board links section |
| mathematics | `index.md` | Add exam-board links section |
| chemistry | `index.mdx` | Add exam-board links section |

### Phase 3: Enhance Head.astro cross-site logic (Week 3)

**File**: `shared/components/starlight/Head.astro`

Current implementation at lines 41-84 groups sites into categories and generates alternate links. Enhancements:

1. **Add path-level canonical overrides** — for pages that genuinely overlap (e.g., a DSE mechanics page and a physics mechanics page that cover identical derivations), allow frontmatter to specify a canonical override:

```yaml
---
title: "Forces and Motion"
canonical: "https://physics.wyattau.com/1-classical-mechanics/1_newtonian-mechanics-review/"
---
```

2. **Add a `relatedSubjects` frontmatter field** — for explicit cross-site linking:

```yaml
---
title: "DSE Physics — Mechanics"
relatedSubjects:
  - url: "https://physics.wyattau.com/1-classical-mechanics/"
    label: "University Classical Mechanics"
  - url: "https://ib.wyattau.com/physics/1-space-time-and-motion/"
    label: "IB Mechanics"
---
```

3. **Implement in Head.astro** (after line 245):

```astro
{/* Canonical override from frontmatter */}
{entry?.data?.canonical && (
  <link rel="canonical" href={entry.data.canonical} />
)}
{!entry?.data?.canonical && (
  <link rel="canonical" href={canonicalBase} />
)}
```

### Phase 4: Content differentiation audit (Week 4)

For each overlapping topic, verify pages are sufficiently differentiated:

**Physics mechanics comparison** (highest overlap):

| Page | Differentiation Check |
|------|----------------------|
| `physics/1-classical-mechanics/1_newtonian-mechanics-review.md` | University-level, full vector treatment, Lagrangian later |
| `dse/physics/1-mechanics/1_forces-and-motion.mdx` | DSE Paper 1 style, HK context, no calculus |
| `ib/physics/1-space-time-and-motion/` | IB command terms, IA connections |
| `alevel/physics/mechanics/` | AQA/OCR spec references, practical endorsement |
| `gcse/physics/` | Foundation/Higher tier, no calculus |
| `ap/physics/physics-1.md` | AP1 exam format, multiple-choice style |
| `highers/physics/` | SQA references, CfE |
| `leaving-cert/physics/` | Irish exam format |
| `cbse/physics/` | NCERT alignment, JEE/NEET context |
| `gaokao/physics/` | 高考 format, Chinese context |
| `hsc/physics/` | NSW curriculum, ATAR context |

**Action**: For each pair of pages that are >80% similar content, differentiate by:
1. Adding exam-board-specific examples (past paper questions)
2. Adding curriculum references (syllabus point numbers)
3. Adjusting depth (remove/add calculus as appropriate)
4. Adding unique sections (IA tips for IB, practical endorsement for A-Level, etc.)

### Phase 5: Monitoring and validation (Ongoing)

**Google Search Console checks**:

1. **"Alternate page with canonical tag"** — should increase as cross-site links are established (this is GOOD, not an error)
2. **"Duplicate without user-selected canonical"** — should decrease to 0
3. **"Crawled - currently not indexed"** — monitor for pages being dropped due to perceived duplication

**Monthly audit**:

- [ ] Check GSC for new duplicate content warnings
- [ ] Verify canonical tags are self-referencing on all new pages
- [ ] Check that cross-site links are present on new subject index pages
- [ ] Review "Alternate page with canonical tag" count — should be stable or decreasing

**Tools**:

- `site:wyattau.com "exact phrase"` — search Google for duplicate phrases across sites
- Screaming Frog — crawl all 46 sites, check canonical tags, detect near-duplicates
- Copyscape — check for content similarity between specific page pairs

---

## 6. Quick Reference: Canonical Decision Tree

```
Is the page on an exam-board site (dse, ib, alevel, etc.)?
├── YES → Is it a subject index page?
│   ├── YES → Self-referencing canonical + link to general topic site
│   └── NO → Self-referencing canonical + exam-board-specific content
└── NO → Is it on a general topic site (physics, mathematics, chemistry)?
    ├── YES → Self-referencing canonical + link to exam-board versions
    └── NO → Self-referencing canonical (no special handling needed)

Is the content truly identical across two sites?
├── YES → Use canonical override in frontmatter pointing to most authoritative version
└── NO → Self-referencing canonical + cross-site alternate links + content differentiation
```

---

## 7. Expected Outcomes

| Metric | Before | After (3 months) |
|--------|--------|-------------------|
| "Duplicate without user-selected canonical" in GSC | Unknown (likely high) | 0 |
| "Alternate page with canonical tag" in GSC | Low | Stable (correct behavior) |
| Organic traffic to exam-board pages | Cannibalized by general site | Independent growth per board |
| Organic traffic to general site | diluted by exam-board pages | Growth for broad queries |
| Cross-site link equity flow | None | Proper distribution via internal links |

---

## 8. Files to Modify

### Infrastructure
- `shared/components/starlight/Head.astro` — canonical override support, enhanced cross-site links

### Exam-board subject index pages (add "See also" links)
- `sites/dse/src/content/docs/{physics,chemistry,maths,biology,economics,geography,history,ict}/index.md`
- `sites/ib/src/content/docs/{physics,chemistry,mathematics,biology,computer-science,economics,english,geography,history,psychology}/index.md`
- `sites/alevel/src/content/docs/{physics,chemistry,maths,biology,computer-science,economics,english,geography,history,psychology}/index.md`
- `sites/gcse/src/content/docs/{physics,chemistry,maths,biology,computer-science,english}/index.md`
- `sites/ap/src/content/docs/{physics,chemistry,biology,computer-science,maths,english,history,statistics}/index.md`
- `sites/highers/src/content/docs/{physics,chemistry,maths,biology,computer-science}/index.md`
- `sites/leaving-cert/src/content/docs/{physics,chemistry,maths,biology,computer-science}/index.md`
- `sites/hsc/src/content/docs/{physics,chemistry,mathematics,english}/index.md`
- `sites/cbse/src/content/docs/{physics,chemistry,mathematics}/index.md`
- `sites/gaokao/src/content/docs/{physics,chemistry,mathematics,english,chinese}/index.md`

### General topic index pages (add exam-board links)
- `sites/physics/src/content/docs/index.mdx`
- `sites/mathematics/src/content/docs/index.md`
- `sites/chemistry/src/content/docs/index.mdx`
