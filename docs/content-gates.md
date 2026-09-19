# Content Gates

Quality gates that run on every push (deploy.yml `gate` job) and on PRs
(ci.yml). All four operate on `sites/*/src/content/docs/**`.

## 1. Aside directive lint (`scripts/lint-asides.js`)

Starlight `:::type` directives must be structurally sound:

- every opener has a closer (unterminated asides swallow whole sections)
- no raw HTML inside directives in **.mdx** files (raw HTML defeats
  directive parsing in MDX — the block leaks as literal text; `.md`
  renders HTML fine and is exempt)
- no indented openers inside list items
- no content on the opener/closer line

## 2. MDX parse gate (`scripts/lint-mdx-parse.js`)

Compiles every network `.mdx` file with `@mdx-js/mdx` + `remark-math`
(the same core pipeline the sites build with; import specifiers are not
resolved). Catches JSX corruption — merged spread separators, unbalanced
braces — before rollout instead of at 1 of 46 site builds.

## 3. llms.txt freshness (`scripts/generate-llms-txt.js --check`)

Generates the AI-crawler-facing site indexes: a network root
(`sites/main/public/llms.txt`) and one per site. `--check` fails when the
committed files are stale relative to content. Regenerate with
`node scripts/generate-llms-txt.js`.

## 4. Link graph analysis (`scripts/lint-link-graph.js`, advisory)

Parses markdown and `href=` links network-wide (14,000+ internal links),
resolving each against the page index with browser semantics:

- broken relative links (target page does not exist)
- missing fragment targets (`#anchor` not found in the target page)
- orphan pages (zero inbound internal links; utility pages exempt)

Currently **advisory** (`continue-on-error`) — the historical backlog is
being burned down by the `--fix` mode, which rewrites broken links whose
correct target verifiably exists in the page index. Flip to blocking
(remove `continue-on-error`) once the residue is hand-curated.

## Historical context

The 2026-09 em-dash normalization pass merged JSX spread separators and
aside fences across ~800 files; these gates exist so that class of
damage can never reach production again.
