# Content Quality Standard

**Version:** 2.0
**Scope:** All documentation content under `sites/*/src/content/docs/`
**Audience:** Human contributors, automated tooling, code reviewers

---

## 1. Purpose and Scope

This document is the authoritative reference for all content published on Wyatt's Notes. It
consolidates rules from CONTRIBUTING.md, content style guides, CI pipelines, and editorial
conventions into a single enforceable standard.

Every rule in this document is either machine-checked (via CI) or requires human review during
code review. Ambiguity between rules is resolved in favour of the stricter interpretation.

---

## 2. Content Depth Tiers

All content pages are assigned a depth tier. The tier determines minimum content requirements.

### Tier 1 -- Landing / Index Pages

- Files: `index.md` and top-level section landing pages
- Minimum body length: 30 lines (excluding frontmatter)
- Required sections: overview, scope, navigation/cross-links
- No worked examples or proofs required

### Tier 2 -- Standard Topic Pages

- Files: typical subject pages (e.g., `sorting-algorithms.md`, `electrostatics.md`)
- Minimum body length: 80 lines (excluding frontmatter)
- Required sections (see Section 3): at least one of Common Pitfalls, Worked Examples, or
  Summary depending on subject area
- Definitions must be precise; claims must be justified

### Tier 3 -- Depth / Expansion Pages

- Files: pages that go beyond syllabus requirements (e.g., advanced derivations, extended
  proofs, supplementary material)
- Minimum body length: 120 lines (excluding frontmatter)
- Required sections: full derivation or proof, Worked Examples (minimum 2), Common Pitfalls
  (minimum 3 items), cross-references to related topics
- Must link back to the Tier 2 page it expands upon

### Tier 4 -- University / Reference Pages

- Files: proof-based undergraduate material (university site)
- Minimum body length: 150 lines (excluding frontmatter)
- Required sections: precise definitions, theorems with proofs (or detailed proof sketches),
  Worked Examples (minimum 2), Common Pitfalls (minimum 3 items)
- Every definition must be mathematically precise
- Every theorem must be proved or have its proof sketched with enough detail to complete
- Every claim must be justified from first principles

---

## 3. Mandatory Sections (Tier 2+)

The following section names are canonical. Use these exact headings when present:

| Section Name | Minimum Content | Applies To |
| --- | --- | --- |
| **Common Pitfalls** | 3 items, each with explanation of why it is a pitfall and how to avoid it | Tier 2+ |
| **Worked Examples** | 2 complete examples per major topic; include problem statement, solution, and expected output where applicable | Tier 3+ |
| **Summary** | Concise recap of key results; no new information | Tier 2+ (optional) |
| **Cross-References** | Absolute URLs to equivalent or related content across sites | Tier 2+ (when equivalent content exists on another site) |
| **Relevance** | One-paragraph note connecting the topic to applications (ML, engineering, exam syllabi, etc.) | STEM definitions |
| **Complexity Analysis** | Time and space complexity for every algorithm presented | Algorithm pages |
| **Practical Considerations** | Implementation notes, edge cases, platform-specific behaviour | Programming pages |

### Cross-Reference Format

When equivalent content exists on another Wyatt's Notes site, include a dedicated subsection:

```markdown
## Cross-References

| Topic | Site | URL |
| --- | --- | --- |
| Linked Lists | Programming | https://programming.wyattau.com/data-structures/linked-lists |
| Linked Lists | A-Level | https://alevel.wyattau.com/computer-science/linked-lists |
```

---

## 4. Heading Hierarchy

| Level | Markdown | Usage |
| --- | --- | --- |
| H1 | `#` | Reserved for frontmatter `title`. Never used in body. |
| H2 | `##` | Major sections: Common Pitfalls, Worked Examples, Definitions, Proofs, etc. |
| H3 | `###` | Subsections within an H2: individual definitions, specific pitfalls, named theorems |
| H4 | `####` | Fine-grained detail within an H3: sub-properties, proof steps, algorithm variants |
| H5+ | `#####` | Rare; use only when H4 nesting is exhausted |

### Rules

- The first heading in the page body must be `##` (Starlight generates H1 from frontmatter
  `title`)
- Never skip heading levels
- Use ATX-style headings only: `## Heading`, not `Heading\n====`
- Duplicate headings are allowed between different parent sections
- When a heading contains KaTeX math, keep it concise

### Canonical Section Names

Use these exact strings for recurring sections to maintain consistency across the site:

- `## Common Pitfalls`
- `## Worked Examples`
- `## Summary`
- `## Cross-References`
- `## Key Distinctions`
- `## Complexity Analysis`
- `## Practical Considerations`
- `## Notation Conventions`

---

## 5. Frontmatter Requirements

### Required Fields

```yaml
---
title: Page Title
description: 120-160 character unique meta description in rigorous tone.
---
```

### Optional but Recommended Fields

```yaml
---
tags:
  - tag-name
draft: false
---
```

### Rules

- `title`: plain text, no KaTeX, no HTML
- `description`:
  - 120-160 characters
  - Must be unique across the site
  - Must use rigorous, deterministic tone
  - Must not end with a trailing ellipsis or vague qualifier
- Starlight derives the URL slug from the file path; no `slug` field needed
- Quoting: if a field value contains special characters (colons, quotes), wrap in double quotes

---

## 6. Writing Style

### Tone

- Concise, rigorous, deterministic
- No hedging language ("it can be shown that" -- show it)
- No vague qualifiers ("in some cases", "it depends") without specifying exactly which cases
- No hand-wave phrases in STEM content (e.g., "intuitively", "obviously", "clearly" without
  subsequent justification)

### Voice

- Systems-engineer-to-systems-engineer
- Second person ("you") is acceptable for instructions; third person for definitions and theorems
- Active voice preferred; passive voice acceptable in mathematical writing ("is defined as")

### Prose Rules

| Rule | Correct | Incorrect |
| --- | --- | --- |
| No hand-waving | "By the triangle inequality, $\lvert a+b \rvert \le \lvert a \rvert + \lvert b \rvert$" | "Obviously $\lvert a+b \rvert$ is bounded" |
| No vague qualifiers | "This holds when $n > \log_2 k$" | "This holds in some cases" |
| No forward references | Define $X$ before using $X$ | Use $X$ on line 10, define on line 200 |
| Justify all claims | State theorem, then proof | State theorem with no justification |

### Terminology Consistency

- Once a term is defined, use it consistently. Do not switch between synonyms within the same
  page.
- When a page redefines a term that differs from common usage, state the distinction explicitly
  in a `## Key Distinctions` section.

---

## 7. Mathematical Notation

### KaTeX Rules

- Inline math: `$...$`
- Display math: `$$...$$` on its own line
- Supported functions: refer to [KaTeX supported functions](https://katex.org/docs/supported.html)

### Notation Conventions

| Rule | Correct | Incorrect |
| --- | --- | --- |
| Upright text in math | `\mathrm{Var}(X)`, `\mathrm{Cov}(X,Y)` | `\text{Var}(X)`, `\text{Cov}(X,Y)` |
| Comparison operators in math | `\lt{}`, `\gt{}`, `\le{}`, `\ge{}` | `<`, `>`, `<=`, `>=` (ambiguous in MDX) |
| Degree symbol | `90^\circ` | `90°` |
| Absolute value | `\lvert x \rvert` | `\|x\|` (use `\lVert` for norms) |
| Norm | `\lVert x \rVert` | `||x||` |
| Units | Attach with thin space: `$5\,\mathrm{kg}$` | `$5kg$` |
| Uncertainty | `$9.81 \pm 0.02\,\mathrm{m/s^2}$` | `$9.81 +/- 0.02 m/s^2$` |
| Sets | `\{ x \in \mathbb{R} : x > 0 \}` | `{x in R \| x > 0}` |

### Proof Standards (Tier 4)

- State the theorem/lemma/proposition precisely before proving it
- Label each: **Theorem**, **Lemma**, **Proposition**, **Corollary**
- Use Starlight asides for definitions and theorems where appropriate
- A proof sketch must contain enough detail for the reader to complete the argument without
  external references
- Reference prior results by name or section heading, not by line number

---

## 8. Linking Rules

### Relative Links (same site)

| Scenario | Format | Example |
| --- | --- | --- |
| Same directory | `./slug-name` or `./slug-name#anchor` | `./sorting-algorithms#bubble-sort` |
| Parent directory | `../parent-dir/slug-name` | `../maths/linear-algebra` |
| Subdirectory | `./sub-dir/slug-name` | `./calculus/derivatives` |
| Cross-site | Absolute URL | `https://alevel.wyattau.com/computer-science/linked-lists` |

### Rules

- Never use `.md` extension in link targets: `[text](./page)`, not `[text](./page.md)`
- Directory links must resolve to an `index.md` file within that directory
- Anchor links use `#` followed by the heading slug (lowercase, hyphenated, math stripped)

### External Links

- Use full absolute URLs for cross-site references within the Wyatt's Notes family
- Use `https://` for all external links
- Image links to external sources are discouraged; prefer local assets

---

## 9. Code Examples

### Rules

- Always specify the language after the opening fence
- Code must be compile-ready or clearly marked as pseudocode
- Include expected output where applicable

```python title="bubble_sort.py"
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:  # highlight-next-line
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
```

### Pseudocode Convention

When presenting pseudocode, use no language tag or `text`:

````md
```text
BUBBLE-SORT(A)
  for i = 1 to A.length - 1
    for j = A.length downto i + 1
      if A[j] < A[j-1]
        exchange A[j] with A[j-1]
```
````

---

## 10. Tables

### Rules

| Rule | Correct | Incorrect |
| --- | --- | --- |
| Column counts match header | 3 columns in header, 3 in every row | Mismatched columns |
| Angle brackets in cells | `std::vector&lt;T&gt;` | `std::vector<T>` |
| Absolute value in math cells | `$\lvert x \rvert$` | `$\|x\|$` |
| Alignment with colons | `\| :--- \| :----: \| ----: \|` | No alignment specifiers |
| No complex content in cells | Keep cells to inline code, math, short text | Code blocks or lists inside cells |

---

## 11. Admonitions

### Admonition Types (Starlight)

| Type | Usage |
| --- | --- |
| `:::note` | Supplementary information, asides |
| `:::tip` | Practical advice, shortcuts |
| `:::info` | Reference information |
| `:::caution` | Potential issues to be aware of |
| `:::warning` | Important warnings that could cause errors |

### Admonition Rules

- Opening directive must be on its own line with no content after the type
- Closing `:::` must be on its own line with no preceding text
- Admonitions support optional titles: `:::tip[Custom Title]`
- Unclosed admonitions are caught by `lint-content.js`

---

## 12. Subject-Specific Rules

### STEM Content (Mathematics, Physics, Computer Science)

- Every definition must have mathematical precision
- Every theorem must be proved or sketched with enough detail to complete
- Every formula must be justified from first principles
- No forward references: concepts must be defined before they are used
- No concept scattering: related concepts must be grouped in the same page or section
- Definitions must include "Relevance" notes connecting to applications

### Qualifications Sites (GCSE, A-Level, IB, DSE, AP, Scottish Highers, Irish LC)

- Content must be aligned to the relevant syllabus/specification
- When exam boards diverge on a topic, annotate the differences explicitly
- Rigour standard matches undergraduate textbooks, targeted at the relevant level

### Programming Content

- Code examples must compile (or be clearly marked pseudocode)
- Include complexity analysis for all algorithms
- Include a "Common Pitfalls" section covering language-specific gotchas
- Note platform/compiler differences where applicable

### Prohibited Subjects

- Humanities subjects (literature, history, philosophy as standalone topics) are not in scope
- Exception: exam-aligned humanities content within qualifications sites (e.g., GCSE English
  Literature exam techniques)

---

## 13. CI Enforcement

### Automated Checks

| Tool | What It Checks | Script |
| --- | --- | --- |
| `lint-content.js` | Frontmatter, Docusaurus remnants, admonition formatting, thin content | `scripts/lint-content.js` |
| `lint-links.js` | Internal link integrity | `scripts/lint-links.js` |
| `lint-handwaves.js` | Hand-wave phrases, vague qualifiers, hedging language | `scripts/lint-handwaves.js` |
| `lint-descriptions.js` | Description presence, length, uniqueness | `scripts/lint-descriptions.js` |
| `lint-depth.js` | Content depth tier compliance (line counts) | `scripts/lint-depth.js` |
| `lint-forward-refs.js` | Forward reference detection | `scripts/lint-forward-refs.js` |
| `lint-no-emoji.js` | Emoji prohibition in code/docs/config | `scripts/lint-no-emoji.js` |
| Biome | JavaScript/TypeScript linting and formatting | `biome.json` |

### Informational vs. Blocking

| Check | Blocking (fails CI) | Informational (warnings) |
| --- | --- | --- |
| Frontmatter presence | Yes | -- |
| Docusaurus remnants | Yes | -- |
| Thin content (< 50 words) | -- | Yes |
| Hand-wave phrases | -- | Yes |
| Missing descriptions | Yes | -- |
| Description length | -- | Yes |
| Depth tier minimums | -- | Yes |
| Forward references | -- | Yes |
| Broken internal links | Yes | -- |
| Unclosed admonitions | Yes | -- |

---

## 14. File and Directory Conventions

### Naming

| Type | Convention | Example |
| --- | --- | --- |
| Folders | lowercase-kebab | `data-structures/`, `linear-algebra/` |
| Markdown files | lowercase-kebab | `sorting-algorithms.md` |

### Structure

- Maximum nesting depth: 5 levels under `sites/*/src/content/docs/`
- Name files by topic, not by section title (`rate-limiting.md`, not `api-rate-limits.md`)
- Group related topics in folders

---

## 15. Revision History

| Version | Date | Changes |
| --- | --- | --- |
| 2.0 | 2026-06-17 | Adapted for Astro Starlight; removed Docusaurus-specific rules; added Starlight admonition syntax; updated CI tooling references |
| 1.0 | 2026-05-02 | Initial standard for Docusaurus |
