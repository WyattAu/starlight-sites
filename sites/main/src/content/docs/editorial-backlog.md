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

<div class="table-wrap">

| Path | Status | Body |
| ---- | ------ | ---- |
| `/` | 200 | landing page |
| `/about/` | 200 | landing page |
| `/cross-references/` | 200 | landing page |
| `/hub/` | 200 | landing page |
| `/editorial-backlog/` | 200 | landing page |

</div>

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

## 11. Template filler removed (2,057 files); the content it promised is a real gap

Two classes of template output shipped network-wide, generated rather than
written. Both have been removed and gated. **The content those sections
promised is still missing**, and that shortfall is what this item tracks.

**What was removed.**

<div class="table-wrap">

| Class | Count | What it was |
| ----- | ----- | ----------- |
| `## Advanced Content` placeholder sections | 458 | Subsections titled "Derivations and Proofs", "Extended Examples", "Research Connections", "Prerequisites", containing only sentences describing what such content would look like |
| Filler mermaid diagrams | 1,762 | The same seven-line flowchart on every page, reading "Key Concepts / Core Principles / Practical Applications / Design patterns / Real-world usage", with the page title wired to "Key Concepts" |

</div>

Both were pure filler: removing them discards no information, because there
was none. The damage was that they were not neutral. A reader reaching
"Derivations and Proofs" was promised a derivation and received a description
of derivations, which is worse than an absent section because it looks like
the page has been covered.

**Safety.** The Advanced Content section is removed only when *every*
non-blank line in it is a heading or one of the exact placeholder sentences, so
a section holding real content is never touched. Measured: 458 files qualify
and **zero** files are mixed. The mermaid block is removed only when it
matches the filler shape exactly after normalising node labels. Measured:
1,762 blocks share that one shape, and the 343 genuine diagrams in the network
have different shapes and were all preserved.

**What this does not fix.** The promise was accurate about the gap. 458 pages
were marked as having advanced derivations, worked examples and research
connections, and did not. Most of those pages are otherwise substantive --
the placeholder sat at the end of a real explanation -- but the advanced
material a template claimed for them was never written.

This is editorial and is not mechanical: writing a derivation for a given page
requires knowing the subject and the intended level, and no rule can decide
which page most needs it. The right order is to work down the subject tracks
that carry the research and flagship treatment, since those pages are the ones
a reader arriving at the graduate tier will hit.

**Gate.** `scripts/fix-filler-content.py --check` now runs in the preflight, so
neither class can reappear.

## 12. Generic template paragraphs removed (3,301 instances); 344 pages were passing the depth gate on boilerplate

The most-repeated paragraph in the network appeared **706 times across 28
sites**: "Worked examples demonstrating the application of key concepts are
covered in the detailed sub-pages linked above." It is true of every page and
therefore false as content. Thirty distinct such paragraphs accounted for
**8,385 instances across 1,929 files**.

A paragraph counts as boilerplate here if it appears on 30 or more pages
network-wide and is plain prose. Blocks that begin with a heading, table,
list, quote or JSX are never touched, and paragraphs carrying an aside fence
are never touched -- see the note below.

**Removed: 3,301 instances across 1,311 files.** Thirty distinct paragraphs
were in scope.

**Not removed: 344 pages.** The fixer removes a paragraph only if the page
stays at or above its tier minimum afterwards. On 344 pages it would not, so
the boilerplate is left in place and the page is reported. That is the honest
outcome: those pages were meeting the depth standard partly on text that
says nothing about their subject, and deleting the padding does not fix them,
it only reveals them. Most are `index.md` landing pages sitting at 25-31 body
lines against a tier-1 minimum of 30 -- they are close to being pure
boilerplate.

**A bug worth recording.** The first pass broke 190 `:::tip` directives. Some
boilerplate paragraphs have an aside's *closing* `:::` glued to their last
line, so removing them as prose orphaned the opener. Nothing in a
paragraph-frequency measurement would show this -- it surfaced only because
the aside gate runs earlier in the preflight and went red. Fence-bearing
blocks are now excluded, and `tests/unit/fix-generic-boilerplate.test.js`
pins the case.

**Deliberate boilerplate was kept.** Four paragraphs repeat the
`wyattsnotes.wyattau.com` network promotion on many pages. That is site
chrome rather than content padding, and removing it is a presentation decision
this project has not made, so the fixer excludes anything containing that
host.

**Gate.** `scripts/fix-generic-boilerplate.py --check` runs in the preflight.
It is slower than the other gates because it measures paragraph frequency
network-wide; the check is one pass and takes about a minute.

## 13. Probability course duplicated inside a statistics page

`8-probability-and-statistics/6_probability-and-statistics.md` is 2,655 lines.
Sections 1-6 are the probability course: probability spaces, random variables,
common distributions, expectation and MGFs, joint distributions, limit
theorems. **Those duplicate pages 1-5 of the same directory**, which were
rebuilt to flagship standard earlier.

Sections 7-8 are the statistics course -- maximum likelihood, Fisher
information, Cramer-Rao, confidence intervals, hypothesis testing,
Neyman-Pearson, p-values and the standard tests, 464 lines of real content.

Statistics was therefore reachable only by scrolling past 2,000 lines of
repetition, and a reader landing on it had no way to know the material had
already been covered better.

**Extracted.** Sections 7-8 are now
`7_estimation-and-hypothesis-testing.md`, a standalone page with the full study
scaffolding. Extraction was verified lossless against the source: 612 LaTeX
commands across 49 distinct commands, none fewer in the new page, and no
tab characters or mangled backslash sequences.

**Not yet removed.** The duplicated probability sections are still in the
source page. Deleting them is a separate decision because something may link
directly into `6_probability-and-statistics/#2-random-variables` and similar
anchors, and those links would break. The work is:

1. Grep the network for anchor links into `6_probability-and-statistics/`.
2. Repoint any that target a section which exists on pages 1-5.
3. Reduce the page to a stub pointing at the real pages, or delete it and add
   a redirect.

Until then the site carries the probability course twice, and the two copies
will drift.

## 14. Proved results: the real gap is that there are almost none

Three pages were found in one session stating theorems with arguments that did
not establish them. All three have been corrected:

- `11-functional-analysis/4_the-fundamental-theorems.md` stated four fundamental
  theorems with a single proof sketch among fourteen sections, gave a false
  "equivalent norms" application (one inequality is not equivalence), and set a
  practice problem asking for an isometric right inverse to the quotient map for
  every closed subspace of a Banach space -- true only in Hilbert spaces. Now
  416 body lines with full proofs, the norm statement corrected, and the bad
  exercise replaced by one that asks the reader to find the flaw.
- `10-measure-theory/3_lebesgue-outer-measure-and-caratheodory-extension.md`
  had three invalid arguments: a length lower bound attributed to compactness
  that compactness cannot give, a Cantor-set computation that subtracted outer
  measures, and a disjointness argument that gives no lower bound. All corrected.
- `9-topology/9_introduction-to-algebraic-topology.md` had invented a term
  ("directly connected" for "simply connected") and used it inside a definition
  and in three theorem statements.

**The measurement, and why there is no gate for this.** Counting proof blocks
across all 45 sites finds 69 in total: 14 short ones that do contain mathematics,
and exactly 1 that is short *and* contains no mathematics -- a definitional
remark in `computer-science/6-theory-of-computation/6_complexity-theory.md` that
is not a proof attempt at all. So a "proof contains no mathematics" detector
would fire once, on a false positive. Shipping it would add a gate that cannot
catch anything while making the suite look stronger than it is, so it was
measured, found empty, and not shipped.

**What the number actually says.** 69 proofs across the network is the problem.
These are notes that state results; the ones aiming at Aluffi and Korner need
proofs. The gap is not bad proofs, it is absent ones, and no linter detects
absence -- a page with no proof and a page with a correct proof are identical as
far as any static check can tell.

This is a worklist, and the order is by subject weight.

**Update: items 1 and 2 are done for the graduate tracks.** Five of the six
graduate pages now carry a Proofs section and every theorem they state is proved:

<div class="table-wrap">

| page | before | after |
| ---- | ------ | ----- |
| spectral theory of self-adjoint operators | 209 lines, 0 proofs | 304, 4 proofs |
| posterior asymptotics / Bernstein-von Mises | 172, 0 | 271, 1 (the full LAN proof) |
| Ito integration and formula | 185, 0 | 268, 3 (isometry, QV, Ito) |
| representation theory of finite groups | 183, 1 | 230, 3 |
| Ricci flow and geometrisation | 182, 0 theorems at all | 277, 2 proofs |

</div>

Each proof is written to show where the hypotheses are spent rather than merely
to certify the result, and each page keeps its intuition-first design -- the
proofs are their own section, because the picture and the argument do different
jobs.

**Remaining from this item: all three now closed.**

1. The stochastic PDEs page proved the one statement that carries its argument:
   the pointwise variance of the stochastic convolution is
   $\int_0^t (8\pi s)^{-d/2} ds$, finite in $d=1$ and infinite in $d=2$, so the
   critical dimension is read off from the exponent rather than asserted -- and
   it is exactly where $\Phi^4$ renormalisation becomes necessary. Also
   corrected the page's justification for why white noise has no pointwise
   norms: the reason is regularity (it is a distribution, parabolic Holder
   $-3/2-\epsilon$ in $1+1$d), not Gaussian tail events, which is what the page
   previously claimed.
2. The measure-theory and functional-analysis survey came out empty once both
   proof terminators were counted -- see the correction above. Both tracks prove
   what they state.
3. The physics research tier survey also came out empty: no page across the seven
   physics tracks has two or more theorems and no proof.

Nothing is marked done that is not. Of that list, Peter-Weyl, de Rham, Hodge
theory, Kahler/Calabi-Yau and the stochastic-PDE critical dimension are all now
written, deployed and verified live; the differential-geometry extensions chain
(forms -> de Rham -> Hodge -> Kahler) is complete, and each page is
cross-referenced both ways.

**Milestone (Oct 2026): zero theorem-heavy/proof-light pages remain on the
mathematics AND machine-learning sites.** The theorems-versus-proofs survey now
returns empty across both: 772 theorems, 816 proofs, every page with three or
more theorems carrying at least two proofs.

The mathematics pages that reached this state this pass: conformal mappings
(conformality, Mobius circles-and-lines, cross-ratio invariance, three-points
uniqueness), analytic continuation (the monodromy theorem, with simple
connectivity located at Step 3), distribution of primes (Euler's divergence of
sum 1/p), Bernstein-von Mises (Doob by martingale convergence with the
prior-null catch stated, Schwartz in structure), differential forms (d^2 = 0
computed, naturality, Stokes with the boundary-orientation sign), Banach
algebras and the Gelfand representation (new page), compact operators (the
compact spectral theorem via the Rayleigh quotient, with the norm expansion
doing the work), weak convergence (norm lower-semicontinuity, Mazur by
separation, the l^p criterion, Banach-Alaoglu's structure), Sobolev spaces (new
page), plus the graduate statistics BvM/monodromy pages.

The machine-learning course is new this pass: ten pages from sigma-algebras to
the research frontier, every theorem proved, every numerical claim checked in
Python/R/C++, every page cross-referenced by dependency.

**Next content, by measured demand -- updated: all the top items are now written.**

1. ~~Sobolev spaces~~ -- DONE: page live in the functional analysis track.
2. ~~Mayer-Vietoris~~ -- closed without a new page: it is already §9.8 of the
   algebraic-topology page with both computations done in full. The de Rham
   page's cross-reference now points at that section rather than gesturing, and
   duplicating it elsewhere would have created exactly the drift the monolith
   retirement removed.
3. ~~Gelfand representation and Gelfand-Raikov~~ -- DONE: page 2 of the graduate
   analysis track, proving the spectral radius formula, the commutative
   C*-isomorphism theorem, and outlining GNS; the Peter-Weyl page now links it
   for the ingredient it previously deferred to textbooks.
4. ~~Elliptic regularity~~ -- DONE: page in the differential geometry track,
   proving Weyl's lemma and interior H^2 regularity; the Hodge theorem's
   black-box note now links to its proof.

**Still open:** Fubini-Study (3 mentions, inside the Kahler page),
mirror symmetry (2, also Kahler), Atiyah-Singer (2) -- all specialist topics
whose value is research-depth rather than dependency repair, so they wait
behind transition-page roll-out for the remaining subjects and any new proof
gaps the next survey finds.

Kahler and Calabi-Yau were the top gaps until this session; Sobolev and
Mayer-Vietoris are now the two that are used by existing pages rather than
merely mentioned, so they come first.

The survey method, for whoever picks this up: count proof terminators per page
against the count of `**Theorem`-style markers. A page with many markers and no
terminators is a list of claims, and that is the ordering signal.

**Count both terminators.** The first pass of this survey counted only
`\blacksquare` and reported `10-measure-theory/3_lebesgue-outer-measure...` as
having 15 theorems and 0 proofs -- that page's proofs are closed with `$\square$`,
and several older pages use the literal square. Counting both terminators brought
the true numbers to 41 and 23 proofs for the two tracks, and the list of
theorem-heavy/proof-light pages came out **empty**: both tracks already prove
what they state. A method note that omits half the terminator set produces a
false worklist, which is worse than no note.

The `Proof` / `\blacksquare` convention is established and detected reliably, so
a page that wants to be counted in this worklist only has to use it.

## Reader-reported quality pass (October 2026)

A reader report flagged: broken search, duplicated search bar, sidebar
overwhelm, missing diagrams ("some diagrams are just .md"), and weak
high-school content. The structural items are done (search API 500s,
the triple search UI, the uncollapsed 266 sidebar groups -- see the
fix commit and the FORBIDDEN_HEAD parity gate). What remains is
content work, recorded here with measured scale:

1. **Mid-sentence capitals, residue.** The mechanical pass lowercased
   6,409 continuation words (corpus-frequency guard, proper nouns
   preserved) across 452 exam-board files. The residue is the
   low-frequency tail -- words like "Underground" appearing mid-sentence
   after "are" -- which the frequency guard could not safely
   distinguish from proper nouns. A dictionary-based second pass, or a
   read-through of the exam-board corpus, closes it. Search hint:
   lines beginning `[A-Z]` whose previous line ends in a
   non-terminal word.

2. **Pseudo-diagram conversion.** 71 pages mention "diagram" twice or
   more with no diagram anywhere near (worst: gcse bonding with 12,
   ib states-of-matter and the Feynman-diagrams page with 11 each).
   States-of-matter, the SDLC, traceability, TDD, and the bonding
   decision now have real mermaid diagrams. The rest split into:
   diagrams mermaid can express (flowcharts, state machines -- convert
   as encountered), and diagrams it cannot (dot-and-cross electron
   diagrams, Feynman diagrams, field-line sketches -- these need drawn
   SVGs, which is a dedicated art pass, not a text pass).

3. **Dot-and-cross diagrams.** The GCSE bonding page says "draw the
   diagram" in prose for a dozen compounds and shows none. GCSE
   students are examined ON the diagrams. An SVG set for the core
   eight (NaCl, MgO, CaF2, Li2O, H2, H2O, CH4, N2) reusable across
   exam-board sites is the highest-value single visual investment.

4. **Factual slip found and fixed:** "Nitrogen is in group 7" on the
   GCSE bonding page (group 5). A group-number-versus-outer-electrons
   sweep found no other instance, but the pattern generalises: any
   "X is in group N with M outer electrons" claim is mechanically
   checkable, and belongs in a content gate.

The exam-board corpus is NOT thin -- median depth is 385 body lines
across 835 pages -- so the quality complaint reduces to (a) visible
mechanical defects like the capitals, (b) missing visuals, and (c)
prose that reads like unedited generation. (a) is now mostly fixed and
gated; (b) is the SVG pass above; (c) has no shortcut except reading.
