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

This class was worth 20,495 rewrites across 911 files in 24 sites — the
largest single visual defect found in the content layer, and four months old
when it was finally caught.

## 4. Prose damage lint (`scripts/fix-prose-damage.py --check`)

Four classes, all repaired. `git log -S` traces them all to the initial
Docusaurus → Starlight migration (`75e8b5ab7`); the em-dash pass was not
responsible and did not cause them:

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

## 5. Capitalisation worklist (`scripts/prose-capitalisation-worklist.py`)

Roughly 32,600 wrapped-line capitals remain un-repaired. They contain both
damage and correct English:

```
...only within the          ...defining a method with the
Windows ecosystem.          Same name.
```

No automatic filter separates those. The obvious candidate — "safe if the
word is never capitalised mid-sentence anywhere in the network" — was
implemented and discarded: with ~100,000 mid-sentence capitals across 46
sites almost every common word has a hit, so the rule admitted nothing, and
its counter-examples are direct. `the Same magnification` and `maximum
Number of` are damage that is capitalised mid-sentence, identical in shape
to the correct `In Python, / produces a float`. Excluding frontmatter,
LaTeX `\text{...}` and ld+json from the tally did not rescue it.

So the tool produces a ranked per-word list with a real sample attached and
applies nothing. `--emit` writes a candidate file; approving a word is a
one-token decision that then permits safe mechanical repair of every
occurrence:

```
python3 scripts/prose-capitalisation-worklist.py --top 40    # review a batch
python3 scripts/fix-prose-damage.py --approve reviewed.txt # apply it
```

Reviewing the list is the work; the repair is then exact and repeatable.

## 6. Duplicate section collapse (`scripts/fix-duplicate-blocks.mjs --check`)

The content generator emitted its scaffolding block several times on one
page, byte for byte:

```
## Detailed Content
This topic covers the fundamental principles ...
### Core Concepts
Understanding these core concepts is essential ...
```

with an empty body under every heading. That cost three things: the TOC
listed each section twice, Starlight disambiguated the duplicate anchors
with a numeric suffix so a `#core-concepts` link silently landed on the
second copy, and the page promised content it never delivered.

This is the one damage class here that is mechanically fixable with *zero*
information loss — byte-identical blocks, first occurrence kept. The
comparison is deliberately strict (trailing whitespace only), and blocks
under 90 characters are left alone because a short repeat may be
deliberate. Deduplication is scoped to the enclosing heading, because two
sections under *different* parents are not interchangeable even when their
bodies match.

3,691 redundant blocks across 840 files. 12 unit tests pin what must survive:
a block differing by one character, a repeated short section, headings
inside code fences or frontmatter, and identical sections under different
parents.

## 7. llms.txt freshness (`scripts/generate-llms-txt.js --check`)

Generates the AI-crawler-facing site indexes: a network root
(`sites/main/public/llms.txt`) and one per site. `--check` fails when the
committed files are stale relative to content. Regenerate with
`node scripts/generate-llms-txt.js`.

## 8. Link graph analysis (`scripts/lint-link-graph.js`, advisory)

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

Two distinct causes, and they matter because the second one is invisible in
review.

**The 2026-09 em-dash normalization pass** (`d97d0439d`) rewrote every
em-dash across the network and merged JSX spread separators and aside
fences across ~800 files. Gates 1 and 2 exist so that class of damage can
never reach production again.

**The 2026-06 Docusaurus → Starlight migration** (`75e8b5ab7`) is where
gates 3 and 4 came from. Both defects were present in the content the day
it was migrated and were never introduced by any later pass — `git log -S`
traces them back to that one commit. They stayed invisible because they are
only wrong *in the rendered page*: the markdown reads perfectly, and nobody
had opened a chemistry or physics page and looked at the formulas until
2026-10.

That is the general lesson worth recording. A defect that no tool in the
pipeline can see is not a defect the pipeline will ever catch, so each one
that turns up needs a gate as well as a fix. The display-math gate
(20,495 blocks) and the prose-damage gates (9,000+ lines) are both retired
this way rather than left to be rediscovered.
