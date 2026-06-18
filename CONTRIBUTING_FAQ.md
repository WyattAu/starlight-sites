# Contributing FAQ

Frequently asked questions for contributors to Wyatt's Notes. For setup instructions, see
[CONTRIBUTING.md](./CONTRIBUTING.md). For formatting and writing rules, see
[CONTENT_STYLE_GUIDE.md](./CONTENT_STYLE_GUIDE.md). For content depth requirements, see
[CONTENT_STANDARD.md](./CONTENT_STANDARD.md).

---

## 1. What subjects can I contribute to?

Wyatt's Notes covers STEM subjects across multiple qualification levels and university-level
computer science:

- **Qualifications sites:** IB, A-Level, GCSE, DSE, AP, Scottish Highers, Irish Leaving
  Certificate. Subjects include mathematics, physics, chemistry, biology, computer science,
  economics, psychology, geography, history, and English.
- **University site:** Undergraduate STEM topics (mathematics, physics, computer science).
- **Programming site:** Language guides, frameworks, and software engineering topics.
- **Tools site:** Algorithms, data structures, computational theory.
- **Languages site:** Comparative programming languages.
- **Infrastructure site:** Server administration, databases, networking.

Humanities subjects (literature, history, philosophy) are out of scope unless they are
exam-aligned content within a qualifications site. Check [ROADMAP.md](./ROADMAP.md) for planned
topics and current priorities.

---

## 2. How should I structure my content?

Every page starts with frontmatter (see [Content Style Guide](./CONTENT_STYLE_GUIDE.md#2-frontmatter-requirements)),
then uses `##` for the first heading (H1 is reserved for the page title).

Pages are assigned a depth tier that determines minimum content requirements:

| Tier | Type | Min Lines | Required Sections |
| :--- | :--- | :--- | :--- |
| 1 | Landing / Index | 30 | Overview, scope, cross-links |
| 2 | Standard topic | 80 | At least one of: Common Pitfalls, Worked Examples, Summary |
| 3 | Depth / Expansion | 120 | Full derivation or proof, 2+ Worked Examples, 3+ Common Pitfalls |
| 4 | University / Reference | 150 | Precise definitions, proved theorems, 2+ Worked Examples, 3+ Common Pitfalls |

Group related topics in folders. Keep nesting under 5 levels.

---

## 3. Do I need to know LaTeX?

Basic LaTeX is required for mathematical content. You need to know:

- Inline math: `$E = mc^2$`
- Display math: `$$\int_0^1 f(x)\,dx$$`
- Escaping braces: `\{ x : x > 0 \}`
- Common commands: `\frac`, `\sum`, `\prod`, `\partial`, `\mathbb{R}`, `\mathrm{}`

For the full list of supported functions, refer to the
[KaTeX supported functions](https://katex.org/docs/supported.html) reference. The
[Content Style Guide](./CONTENT_STYLE_GUIDE.md#4-math-notation) has a table of notation
conventions with correct and incorrect examples.

---

## 4. What's the review process?

1. Open a pull request.
2. CI runs automatically: Biome lint, content validation, link checking, depth tier
   validation, and tests.
3. A maintainer reviews content for mathematical correctness, proof rigour, tone consistency,
   and adherence to the style guide.
4. All CI checks must pass before merge. Address review feedback and push updates to the same
   branch.

---

## 5. How do I preview my changes locally?

Install dependencies and start the dev server:

```bash
bun install
cd sites/dse && bun run dev
```

This opens a local Starlight site with hot-replace. Replace `dse` with the relevant site name.

---

## 6. What if I find an error?

- **Typographical or formatting errors:** Open a PR with the fix.
- **Mathematical or factual errors:** Open an issue describing the error, the correct result, and
  a reference or proof if applicable. Fix PRs are welcome.
- **Broken links:** CI catches broken links automatically. If you find one that CI misses, open
  an issue or PR.

---

## 7. Can I translate existing content?

Translations are supported via the i18n system. The foundation is in `shared/i18n/config.ts`
with locale definitions, translation lookup, and English/Chinese translations. To add a new
locale, set `enabled: true` in the locale configuration and provide translation files.

---

## 8. How are the sites structured?

Each site is a standalone Astro/Starlight project under `sites/`:

| Site | Directory | Domain |
| :--- | :--- | :--- |
| DSE | `sites/dse/` | dse.wyattau.com |
| IB | `sites/ib/` | ib.wyattau.com |
| A-Level | `sites/alevel/` | alevel.wyattau.com |
| University | `sites/university/` | university.wyattau.com |
| Qualifications | `sites/qualifications/` | qualifications.wyattau.com |
| Programming | `sites/programming/` | programming.wyattau.com |
| Infrastructure | `sites/infrastructure/` | infrastructure.wyattau.com |
| Languages | `sites/languages/` | languages.wyattau.com |
| Tools | `sites/tools/` | tools.wyattau.com |

Shared components, utilities, and styles live under `shared/`. Each site receives a standalone
copy via `bun run sync`. Never edit per-site copies directly.

---

## 9. What testing is required?

- **Component tests:** Vitest tests for SolidJS components (run via `bun run test:components`).
- **Unit tests:** Node built-in tests for scripts (run via `node --test tests/unit/*.test.js`).
- **Integration tests:** Repo structure and CI/CD config validation.
- **E2E tests:** Playwright tests for critical flows.

All tests must pass before merge. Run the full suite with `bun run verify`.

---

## 10. How do I add a new interactive component?

1. Create the component in `shared/components/` as a SolidJS `.tsx` file.
2. Run `bun run sync` to propagate to all sites.
3. Add component tests in `tests/components/`.
4. Document the component in README.md's component inventory.
5. Import in MDX files using `import ComponentName from '@components/ComponentName';`
