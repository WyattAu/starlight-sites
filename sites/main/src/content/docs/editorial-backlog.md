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

## 8. Glued code spans: ambiguous capitals (1,194 occurrences)

Line-wrapping damage ate the separator between a closed code span and the
word after it. The mechanical cases are repaired and gated
(`scripts/fix-glued-code-spans.py`); what remains needs a human.

Two shapes were repaired automatically, 3,864 spans across 655 files:

- **Eaten list separators.** A run of code spans written back to back with no
  `, ` between them collapses into a single span that contains a backtick,
  which can only mean several spans were meant. Repaired to a proper
  comma-separated list. Certain, so mechanical.
- **Eaten sentence boundaries.** A closed code span running straight into a
  capitalised word with no full stop or space between them. Only the
  separator is inserted; the capital is left as written, because a word like
  *Then* after a span begins a new sentence and lowercasing it would be a
  second, unjustified edit.

**Why the rest is not mechanical.** A capital after a closing backtick is a
sentence boundary for some words and a proper noun or identifier for others.
A person's initials want `. Ed`; a pluralised span wants `s` with no space; and
a list of types wants ` and ` rather than `. And`. The script repairs only a
closed list of unambiguous sentence openers and reports the rest.

Current worklist, by frequency: `And` (244), `Or` (91), `Python` (20), `Git`
(14), `Ed` (10), `CPM` (10), `An` (9), `Explicit` (9), `Preventing` (8),
`Regardless` (8), `That` (8), `Sub` (8).

Most of the `And`/`Or` residue is a list continuation that R4 could not prove:
it repairs ` and ` only when the span it just split was itself a comma
list, because outside that context the lost mark could equally have been
`. And`. Widening that needs either a corpus pass to establish the
distribution or human approval per site.

**Resolution path.** Run the worklist per site with
`python3 scripts/fix-glued-code-spans.py --worklist --approve <word>` for the
words a human confirms, exactly as the capitalisation worklist is handled. The
count is printed on every gate run, so it cannot rot unnoticed.

## 9. Dead cross-zone links (48 distinct, 818 occurrences)

`lint-link-graph.js` validates internal `/path/` links against the content
collections. It does **not** validate absolute URLs to other zones, so a link
to another site can be dead indefinitely without any gate noticing.

Found by hand on the quantum postulates page, where three of four
cross-references were 404:

- `mathematics.wyattau.com/docs/calculus` -- 404
- `mathematics.wyattau.com/docs/linear-algebra` -- 404
- `computer-science.wyattau.com/docs/quantum-computing` -- 404

All three are now replaced with working slugs. The pattern is consistent:
these were written as `/docs/<topic>` early on, before the collections were
split into numbered subject directories.

**Why it is not gated.** Checking absolute URLs means issuing network requests
during the gate run. That runs into two real constraints: the gate must stay
fast, and probing every zone in one pass is exactly what triggered Cloudflare
error 1027 (free-tier daily request limit) earlier in this project. A naive
"HEAD every external link" gate would take the network down.

**The check now exists, and it does not use the network.**
`scripts/lint-cross-site-links.js` enumerates each site's routes from its own
content tree and resolves every absolute cross-zone link locally. All 46 sites
live in this repository and each declares its domain in `astro.config.mjs`, so
nothing needs to be fetched. That matters independently of speed: probing
every zone over HTTP is what previously hit Cloudflare error 1027 on the free
tier, and a gate must not be able to take the network down.

Measured: of 3,361 cross-zone link occurrences, **187 were distinct dead
links**. Precision was verified against production rather than against the
script's own intent -- 14 sampled findings, all confirmed 404, zero false
positives. Two false-positive classes were found and fixed that way, both of
which would have made the gate unusable:

- `https://sat.wyattau.com/hub` returns 200, because Astro redirects a missing
  trailing slash. Comparing raw route strings reported every such link dead.
- `chemistry/index.md` was being turned into `/chemistry/index/` instead of
  `/chemistry/`, so every section landing page in the network looked missing.
  One sample that returned 200 in production exposed it.

**Half of it was provably repairable, and was.**
`scripts/fix-cross-site-docs-prefix.py` repairs the historical `/docs/...`
shape left by the collection split, under a rule that adds information with
certainty rather than guessing:

- drop the stale `/docs` prefix, and a redundant copy of the site slug, when
  the remaining path is a route that exists -- the full intended path survives,
  so the link names exactly one real page;
- restore the numeric directory prefix the subject split introduced
  (`classical-mechanics` -> `1-classical-mechanics`), matched against exact
  top-level directory names.

**699 occurrences across 388 files repaired, taking distinct dead links from
187 to 48.** Every repaired target was checked live: `/2-thermal-physics/`,
`/5-quantum-mechanics/`, `/2-linear-algebra/` and `/1-classical-mechanics/`
all return 200.

**What is left is genuinely editorial.** 48 distinct links, concentrated on
alevel (29), programming (5) and computer-science (4). These are the
`/docs/<subject>` shape where the subject gained a descriptive prefix as well
as a number -- `mathematics/docs/calculus` could mean any calculus page, and
`physics/docs/statistical-mechanics` names a page that does not exist on the
physics site. Picking a target means knowing which page the author meant.

**Why the link gate stays advisory.** The check is reliable, but those 48 need
a human. It reports on every run and a test asserts the count cannot grow,
which is the same treatment the capitalisation worklist gets. It becomes
blocking when the backlog reaches zero.

**Resolution path.** Work the 48 per site, alevel first. The check makes the
remaining set exact and ordered, so progress is measurable rather than
estimated.

## 10. Four `sites/main` content pages are not publicly reachable

`wyattsnotes.wyattau.com` returns the identical 31,200-byte landing page for
**every** path, including 200 responses:

| Path | Status | Body |
| ---- | ------ | ---- |
| `/` | 200 | landing page |
| `/about/` | 200 | landing page |
| `/cross-references/` | 200 | landing page |
| `/hub/` | 200 | landing page |
| `/editorial-backlog/` | 200 | landing page |

So `sites/main/src/content/docs/` -- `about.md`, `cross-references.md`,
`editorial-backlog.md`, `hub.md` -- is built but never served. The response
comes from a Worker rather than a static asset (`server: cloudflare`,
`access-control-allow-origin: *`), and there is no `_redirects` file in
`sites/main/public/`.

**Scope.** `main` is not in the rollout matrix; it is deployed only by the
`deploy-landing` job, which publishes `sites/main/dist` to the Cloudflare
Pages project `wyattsnotes`. All 88 cross-site links to this host point at
`/`, so nothing in the network links into the dead routes, and the landing
page itself links to no content route. The impact is unreachable content
rather than broken navigation.

**Not yet determined.** Whether the Worker intercepts every request or Pages
is serving a fallback for unmatched paths cannot be told from outside, and
guessing would be worse than recording it. What is needed is either the
Worker route configuration or a `wrangler` log for the zone.

**Why it is recorded.** The editorial backlog is itself one of the four
unreachable pages. A quality record that nobody can open is not doing its job,
and the four pages are content that was written to be read.
