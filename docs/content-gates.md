# Content Gates

Quality gates that run on every push (deploy.yml `gate` job) and on PRs
(ci.yml). All operate on `sites/*/src/content/docs/**`.

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

## 3. Display-math delimiter gate (`scripts/fix-display-math.mjs --check`)

`remark-math` only recognises `$$` fences as display math when the
delimiters sit on their own lines. A one-line block such as

```
$$a = bq + r, \qquad 0 \le r < b.$$
```

is parsed as **inline** math and renders glued into the surrounding prose
instead of as a centred display block. The gate rejects every such line.

Repair with `node scripts/fix-display-math.mjs` (it rewrites the line into
the three-line fenced form, preserving total delimiter parity so no block
becomes unbalanced). Fenced code blocks and HTML comments are skipped.

This class was worth 20,495 rewrites across 911 files — the largest single
visual defect found in the content layer.

## 4. Prose damage lint (`scripts/fix-prose-damage.py --check`)

The em-dash normalization pass also ate punctuation *inside* prose. Four
mechanical classes, repaired:

- `Fermat"s Little Theorem` — curly closing quote used as an apostrophe (578)
- `$1 \pmod{m}$Where $\phi$ is` — inline math glued to the following word (8,520)
- `$p = 0.6$$q = 0.3$After` — spaces removed *between* adjacent spans too, so
  the glued span's opening `$` is preceded by another `$`
- `fewest evolutionary changes` + `Is preferred.` — the pass hard-wrapped
  paragraphs and capitalised every continuation line (~8,400 of them)

The repair is deliberately conservative: it never edits inside a formula,
skips fenced code and inline code spans, and `--check` uses the same fence
handling as the fixer (a mismatch there had the gate reporting shell snippets
the fixer correctly ignored). Detecting the glue class needs remark-math's own
delimiter rule — the opening `$` must not follow a word character and must be
followed by non-whitespace — otherwise the *gap between two spans* reads as a
span and the fixer corrupts correct prose like
`$x - a$ divides $P(x)$ iff $P(a) = 0$`.

The capitalisation class is the dangerous one, because the same shape occurs in
correct prose:

```
It serves as the gateway to the
International Mathematical Olympiad team
```

Lower-casing that is a serious content regression. The discriminator is
grammatical class: closed-class English words (articles, conjunctions,
prepositions, auxiliaries, demonstratives, pronouns) can never open a proper
noun. Only those are repaired, plus the `Non-` prefix. Content words —
`Function`, `Type`, `Time`, `Memory`, `Data`, `Compiler` — are legitimately
capitalised inside technical terms and are left alone; ~33,700 of them stay a
worklist. 31 unit tests pin both directions, because a fixer that
"improves" undamaged prose is worse than no fixer at all.

Not repaired, tracked via `--report`: the run-on class `$...$ Then`, where the
math closed a sentence and the full stop was eaten. Restoring the stop also
requires re-casing `Then` -> `then`, which is editorial.

## 5. llms.txt freshness (`scripts/generate-llms-txt.js --check`)

Generates the AI-crawler-facing site indexes: a network root
(`sites/main/public/llms.txt`) and one per site. `--check` fails when the
committed files are stale relative to content. Regenerate with
`node scripts/generate-llms-txt.js`.

## 6. Link graph analysis (`scripts/lint-link-graph.js`, advisory)

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

The display-math delimiter gate came out of a different failure mode: no
single event broke it. The defect was simply always present, an artifact
of writing formulas the way chat models emit them, and it only became
visible once someone opened a rendered page and looked at it rather than
at the markdown. Gates are how a class like that gets retired instead of
rediscovered.
