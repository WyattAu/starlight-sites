---
date: 2026-09-19T00:00:00.000Z
title: "Editorial Backlog"
description: "Content defects that require an author's judgement rather than a mechanical repair, with the measurement that established each one is not mechanical. Maintained so the loop never silently re-treads them."
tags:
  - Meta
categories:
  - Mathematics
---

## Editorial Backlog

Defects found by the automated gates that are **not** mechanically repairable.
Each entry records the measurement that established this, because "a tool
couldn't do it" is a weaker claim than "here is why no rule can".

Everything here is already reported by a gate, so nothing is silently
overlooked. What this page adds is the reason each one is editorial, which is
the part a future attempt would otherwise have to rediscover.

## 1. Misaligned table rows (504 rows, 40 files)

Reported by `scripts/lint-tables.mjs`. A data row's cell count differs from
the header, so GFM pads at the end and every value in that row shifts a
column left and lands under the wrong heading.

**Why not mechanical.** Grouping the rows by whether the shortfall is
consistent gives 277 rows: 220 with an ordinary first-column header, 53 with
a marker first column (`(a)`, `Step`), and 4 mixed. The 53 look decidable —
insert an empty leading cell — but the source says otherwise. That table is
the OSI model, whose source reads:

```markdown
| (a) | Layer        | Name                | Primary Function                 |
| --- | ------------ | ------------------- | -------------------------------- |
| 7   | Application  | Provides network services directly to user applications |
```

Four header cells, three data cells, so GFM pads the row at the end. The
columns line up as `(a)`/`7`, `Layer`/`Application`, and then
"Provides network services directly to user applications" sits under **Name**,
with **Primary Function** empty.
`7` and `Application` line up with `(a)` and `Layer`, so "Provides network
services" now sits under **Name**, where HTTP, TCP and IP belong. The Name
column is simply absent from every row. Padding a cell produces a table that
renders cleanly and states something false, which is strictly worse than one
that visibly fails to line up.

**What it needs.** For each table, the author supplies the missing values.

## 2. Wrapped-line capitalisation (~32,600 occurrences)

Reported by `scripts/prose-capitalisation-worklist.py`. A hard-wrapped line
begins with a capitalised content word.

**Why not mechanical.** The same shape occurs in correct prose:

```
It serves as the gateway to the
International Mathematical Olympiad team
```

The obvious filter — "safe if the word is never capitalised mid-sentence
anywhere in the network" — was implemented and removed. With roughly 100,000
mid-sentence capitals across 46 sites, almost every common word has at least
one hit, so the rule admitted nothing at all. Its counter-examples are direct:
`the Same magnification` and `maximum Number of` are damage that *is*
capitalised mid-sentence, identical in shape to the correct `In Python, /
produces a float`. Excluding frontmatter, LaTeX `\text{...}` and ld+json from
the tally did not rescue it.

**Why not a heuristic on frequency.** `Non-` is the only capitalised
content-word prefix in English prose, so rule C accepts that form and nothing
else. Everything else is left.

**What it needs.** A reviewer approving words in batches. Approving a word
permits exact mechanical repair of every occurrence, so the review is a
one-token decision per word and the repair is then repeatable.

## 3. Structurally broken maths (379 spans, 33 files)

Reported as an advisory count by `scripts/fix-latex-braces.mjs`. KaTeX cannot
parse these after every brace rule has been applied.

**Why not mechanical.** Three causes, none of which a brace rule can address:

- a markdown table swallowed into a `$$ ... $$` fence
- a stripped closing brace, e.g. `\mathrm{H_2\mathrm{CO_3` for
  `\mathrm{H_2CO_3}`
- a half-removed environment

Brace repair is deliberately gated on KaTeX confirming that the original fails
and the repair succeeds. That means an *incomplete* repair is never written,
which is the safe behaviour but also means these stay until the structure is
fixed by hand.

**What it needs.** Per-span authorship: extract the table out of the maths, or
restore the missing brace.

## 4. Run-on sentences after inline maths (~3,000)

Reported by `python3 scripts/fix-prose-damage.py --report`. The maths closed a
sentence and the full stop was eaten:

```
If $\gcd(a, m) = 1$ Then $a^{\phi(m)} \equiv 1 \pmod{m}$
```

**Why not mechanical.** Restoring the full stop also requires re-casing
`Then` to `then`, which is a prose judgement. A tool that guessed would
produce either a missing stop or a wrongly cased word.

## 5. Boilerplate pages (~294)

Reported by `scripts/lint-boilerplate.js`. Pages carrying template sentences
that repeat across sites.

**Why not mechanical.** Rewriting them means writing real prose about each
page's actual subject. `scripts/deboilerplate.js` handles the structural part;
what remains needs an author who knows what the page should say.

## 6. Orphan pages (417)

Reported by `scripts/lint-link-graph.js`. Pages with zero inbound internal
links.

**Why not mechanical.** A "See also" section has been applied where
`suggest-links.js` finds a genuine relationship. Beyond that, inbound links
should reflect how a reader would actually navigate, which is an editorial
call — and for a page whose subject genuinely belongs under a different name,
the right fix is a redirect, not a link.

## 7. Reference-style links and footnotes

Audited and found to be **zero** defects. Every apparent `[H^+][OH^-]` is
LaTeX subscript or chemical concentration notation inside a maths span, not a
markdown link. Recorded here because the audit looked like it had found 712
broken links, and the distinction is worth not re-deriving.
