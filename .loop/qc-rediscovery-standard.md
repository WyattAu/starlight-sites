# QC/ponder standard: guided rediscovery, not random quiz

User directive (2026-11-12): questions must GUIDE the reader's
rediscovery and help them THINK THROUGH the difficult concepts — not
standalone quiz items or random ponders.

## The ladder a section's QC sequence must trace

Each section's 8 questions, in order, walk the reader up the same
staircase the section's proof climbed:

1. **Recall the construction** — state/restate the definition in the
   reader's own structure (not "state theorem X verbatim").
2. **Compute an instance** — run the construction on a concrete case
   (numbers, small sets, a drawn picture) with the data stated
   inline in the question.
3. **Predict the failure** — where does the construction break?
   What does the counterexample do? (The monster made personal.)
4. **Prove the small step** — the one move the section's proof
   leans on, isolated as a doable exercise.
5. **Connect to the hard concept** — the question whose answer IS
   the section's deep point, phrased so answering it = rediscovering
   why the concept exists.
6-8. Consolidate: variations, the converse, the boundary case, the
   "what if we drop hypothesis h" probe.

## Audit rule

A QC sequence fails the standard if its questions could be shuffled
without loss — that means they are a quiz, not a guide. The sequence
should be order-locked: Q3 only makes sense after Q2's computation.

## Status

- Applied prospectively: Stage M, N, O (not yet written).
- Retroactive pass pending: stages A-L QC sequences (audit each
  against the ladder; rewrite offenders). Ledger this as its own
  task; do NOT bulk-rewrite without the per-section care standard.

## History clause (added 2026-11-12, promoted to pedagogy-core 4b)

Every section carries at least one anchored history element: named
mathematician, date, controversy, or failed attempt, tied to the
content, phrased as rediscovery history (real routes, wrong turns
included), never decorative. Audit: zero anchored-history mentions
on a page with quick checks fails the sweep. First repaired
instances: Stage A (Russell 1902, Zermelo 1908, Euclid's
Elements), Stage B (Peano 1880s, Kronecker's dictum, Gauss's
schoolboy sum), Stage E (d'Alembert 1746, Gauss 1799, the shared
gap). The nine pre-standard pages are the retrofit ledger.

## Ponder standard (added 2026-11-13, promoted to pedagogy-core 4a)

Ponders are intellectual discovery, not prompts. Four shapes:
construction, failure dissection, proof attempt, reading-the-
historical-attempt. Four gates: answering IS the discovery; the
difficulty is the real one; answerable only by thinking; immediate
complete feedback in the spoiler. Page-level arc: naive attempt,
failure, repair, rigour, surprise. Specimen defects: Stage E's
former "invent the set of elements in both" (meaning handed over,
symbols requested). Retroactive A-L audit ledgered with the QC
ladder pass.

## Physics two-track plan (2026-11-13)

Track 1 (retrofit): physics.wyattau.com already exists - 133 advanced
research-level files across 7 topics (1-classical-mechanics 17,
2-thermal-physics 23, 3-electromagnetism 16, 4-optics-and-waves 25,
5-quantum-mechanics 19, 6-solid-state-physics 18,
7-particle-physics-and-cosmology 15), zero ponders, zero quick
checks, zero history in the sampled pages. Retrofit every page to
4a/4b/QC-ladder, topic by topic, starting 1-classical-mechanics.
Track 2 (intro course): the frozen 78-chapter structure
(docs/physics-course-graph.json, v1.1) is the prerequisite on-ramp;
content sessions begin at Stage A once track 1 is underway.

## Physics retrofit progress (2026-11-18)

Topic 1 (1-classical-mechanics, 17 files): COMPLETE. All pages carry
history, 2+ ponders, and QC ladders under 4a/4b. Exemplar:
1_newtonian-mechanics-review.md. Advanced pages (10-13, 16) carry
8-question QC ladders.

Remaining: topics 2-7 (2-thermal 23 files, 3-em 16, 4-optics 25,
5-quantum 19, 6-solid-state 18, 7-particle-cosmology 15 = 116
files), then track 2 (Stage A of the 78-chapter intro course, from
physics-v1.1 graph). Note: the existing physics site pages ALREADY
carry :::note[Historical Context] asides (4b partially satisfied in
that shape) and :::{/* */} JSX comments from an earlier mdx-era
migration, so check-before-insert and watch for both shapes.
Batch pattern proven: survey headings, insert history + 2 ponders +
QC ladder via python with heading anchors, fixers, gates, commit.

## Physics retrofit position (2026-11-19, end of session)

Topic 2 done: files 1, 2, 3, 4, 5, 6, 7_classical (7 of 21) each
carry history + 2 ponders + QC ladder (batch commits 9cd3af1fc,
4c1035a50, bce85d0b2). Lint clean.

Next session continues topic 2 in this order: 10_phase-transitions
history+ponder-2 already added? NO - only 6_ising and 7_classical
got ponder 2 in the last pass; files 10, 11, 12, 13, 14, 15, 16,
17, 18, 19, 20 still need history + 2 ponders + QC ladder; 8_common-
pitfalls and 9_problem-set need QC+history only; 21_monolith
(3319 lines) needs a survey first.

Batch pattern: python inline script, insert_hist + insert_ponder
with heading anchors, QC via the qc() helper (see
.loop/qc-inject-thermal.py for the working template), then fixers
(interrupts, display-math, prose-damage), lint-asides, handwaves,
depth, llms regen, commit. One finding pattern to watch: vague
phrases in new ponder spoilers get caught by lint-handwaves.

## Physics retrofit position (2026-11-19, session 2 end)

TOPIC 2 COMPLETE except one decision. Files 1-7 and 10-20 carry the
full standard (history + 2 ponders + 8-question QC ladder). Files
8_common-pitfalls and 9_problem-set are EXEMPT meta pages - the
math course precedent (e.g. 1-abstract-algebra/17_common-pitfalls:
HC=0 PON=0 QC=0) exempts pitfalls/problem-set pages. Batches:
919a12269 (QC 6/7/10/11), fe44ec3cc (12/13/14), 1fa92cf2d
(15/16/17), c6c19f386 (18/19/20).

DECISION PENDING - 21_thermodynamics-and-statistical-mechanics
(3319 lines): a 21-section omnibus duplicating the whole track
(laws, Maxwell, engines, Ising, FDT, blackbody, ensembles...).
Not a chapter; options: (a) retrofit as review page with
integration-level history + ponders + comprehensive QC, (b) split
into the dedicated chapters it duplicates, (c) exempt as a review
anthology. Decide before touching it.

Injection scripts (all py_compile-checked, idempotent):
.loop/qc-inject-671011.py, .loop/retrofit-121314.py,
.loop/retrofit-151617.py, .loop/retrofit-181920.py.

NEXT SESSION: topics 3-7 in topic order, same batch pattern
(3 files per batch: survey -> write script via write tool ->
py_compile -> run -> fixers + asides + handwaves + depth ->
llms -> scoped add -> commit -> push). First survey each topic's
file list and HC/PON/QC counts with the one-liner used for
topic 2. Then track 2 Stage A intro course from physics-v1.1.

## Problem standard 4c adopted (2026-11-20)

The user benchmarked our problems against Kaczor-Nowak and the
verdict stands: our QC ladders were retrieval quizzes. Diagnosis
(7 defects): recall-only deliverables; question phrasing naming
the answer; no concrete instances except 2 of ~300; no
derivations; flat lists instead of technique ladders; verbatim-
echo answers; no traps. Full standard now at pedagogy-core-course
section 4c (8 rules + 8-slot template). Commit 3788c8a5e.

DONE under 4c: 6_the-ising-model's ladder rewritten as the
exemplar (enumerate ring, differentiate lambda_+, cubic-term
trap, concavity proof, lambda_- boundary, scaling synthesis).
9_problem-set's 19 broken math lines repaired (delimiters +
subscript braces); its solutions still ASSERT rather than derive.

QUEUES in priority order:
1. Topics 3-7 retrofits use 4c ladders from the first ladder (the
   batch pattern is unchanged except QC content follows 4c rules).
2. Legacy ladder upgrade: ~35 physics pages (topics 1-2) + the 89
   mathematics chapters to 4c. Batch 4-6 pages per pass; reuse the
   re.subn QC-block replacement pattern in .loop/apply-4c-standard.py.
3. Problem-set page rewrites to 4c (solutions must derive, not
   assert). Physics tracks first, then mathematics.
4. 21_monolith decision still pending (see session-2 note above).

## Standards directory (2026-11-20, later session)

The question standard now lives in docs/standards/questions/
(standard.md v1.1.0 + patterns.md + review-checklist.md + README).
pedagogy 4c carries only the summary + pointer. Commit ed80bb2e5.

RECALL PATH for future sessions: authoring a ladder = read
standard.md + patterns.md; reviewing = review-checklist.md
(14 points + the one-question audit). Pattern-library upgrades that
affect shipped pages: two-stage hint spoilers (adopted for problem
sets first), Morin phenomenon ladders (one per topic on problem-set
pages), diagnostic distractors for practice fixtures. The websearch
for source validation returned nothing; the source canon is classic
and pre-cutoff, so the library stands on established knowledge.

Queues unchanged from the previous note (topics 3-7 with 4c ladders
first, then legacy upgrades, then problem-set rewrites).

## Fleet audit against 4c (2026-11-20)

Script: .loop/audit-questions-4c.py (re-run anytime; mechanical
checks only - depth and slope stay manual via review-checklist.md).

Numbers: 47 ladders shipped (35 physics, 12 math core-course).
34 (72%) breach rule 1 (recall stems > 2). 41 (87%) have no trap.
6 echo items. 33 bare answers. 0 hint layers. 2 with tags.
The retrofit queue is thus the ENTIRE legacy fleet; worst offenders
ranked by score in the script output. Note: session-2's ladders
(15/16/17/18/19/20 etc.) score as legacy - they were authored the
day before the standard existed. Only 6_the-ising-model (the
exemplar) and 3_lagrangian-mechanics pass the trap check.

Queue order: (1) topics 3-7 born-4c during their retrofits;
(2) legacy physics ladders, worst-score first; (3) math core-course
ladders; (4) problem-set rewrites + hint layers.

## Topic 3 batch 1 shipped born-4c (2026-11-20, same session)

1_maxwell-s-equations, 2_electrostatics, 3_magnetostatics: history
+ 2 ponders + v1.1.0 ladders (tags, traps, slope, argument
answers). Commit 913260b60 (rebased over parallel session's
2cf728f16).

NEW FORMATS LEARNED:
- .mdx pages: QC aside must NOT use the wn-spoiler-body div
  (lint-asides flags div/span/strong inside ::: asides in .mdx).
  Content goes directly under <summary>. The body div is only a
  fade-in animation hook; safe to drop.
- Topic 3 files carried the 9_problem-set brace-damage class:
  Q_{enc}{eps_0}, I_{enc}+ (missing }), stray trailing } on the
  same lines (compensating pairs). Fix pattern: targeted replace
  + balance<0 trailing-stray stripper. Expect it in later topic 3
  files; the repair pass is inside .loop/retrofit-t3-b1.py.

Next: topic 3 batch 2 = 4_electrodynamics, 5_electromagnetic-
waves, 6_potentials-and-gauge-transformations (survey first;
4_electrodynamics may be .mdx). Then 7/9/10-13; 8_problem-set is
a meta page (exempt, gets the 4c problem-set rewrite pass later);
14/15 are fixtures-driven (exempt).

## Audit correction (2026-11-20, same session)

The user asked whether the audit covered both courses. It did not,
fully: the strict closing regex skipped 12 asides, .mdx was
excluded, and the fixture banks were never scanned. Corrected
numbers (script .loop/audit-questions-4c.py updated to match):
59 QC-aside ladders; 39 (66%) breach rule 1; 4 (6%) carry a trap;
8 echo items; 35 bare answers; 0 hint layers; 5 tagged.
Fixture banks: 24 files, 276 questions, 100% carry explanations
(bright spot), 0% carry distractor diagnosis (pattern 7 gap,
queued with the practice-fixture work).

## Topic 3 batch 2 shipped (2026-11-21)

4_electrodynamics, 5_electromagnetic-waves,
6_potentials-and-gauge-transformations at born-4c grade. Commit
7296f8f30. Topic 3 now: batches 1-2 done (6 of 13 content files);
remaining 7_special-relativity-and-EM, 9_waveguides, 10_radiation,
11_advanced-electrodynamics, 12_SR-and-EM (dupe of 7? survey
before touching), 13_plasma. 8_problem-set exempt meta; 14/15
fixtures-driven exempt.

Audit script note: .loop/audit-questions-4c.py now covers md+mdx
and fixtures (committed with corrected fleet numbers). Re-run it
after each batch to watch the fleet converge.

## Topic 3 batch 3 shipped (2026-11-21)

7_special-relativity, 9_waveguides, 10_radiation at born-4c.
Commit 882044245. Topic 3 now 9 of 13 content files; remaining:
11_advanced-electrodynamics, 13_plasma (batch 4), plus the 12-vs-7
duplication survey (12_special-relativity-and-electromagnetism-12
looks like an older copy of 7 - decide merge/keep before
retrofitting). 8_problem-set exempt meta; 14/15 fixtures exempt.

Repair-pass upgrade ledgered: generic _{\text{X} / _{\mathrm{X}
subscript-brace regex + unanchored compensating-stray stripper
(display-math lines don't end in }). The 'simply' handwave caught
in my own ponder text - the lints police the retrofitter too.

## Topic 3 batch 4 shipped (2026-11-25)

11_advanced-electrodynamics, 13_plasma at born-4c. Commit
f4f0e744c. Topic 3 retrofit COMPLETE: 11 of 13 content files born-4c
(8_problem-set exempt meta; 14/15 fixtures exempt) + 12 resolved
as companion page (NOT a dupe - unique 12.3 field-momentum
material; off-graph but index-referenced): retrofit 12 as batch 5
alongside 7's cross-check, or fold into the legacy pass.

Batch 5 options: (a) retrofit 12 + run fleet audit re-check on
topic 3 (python3 .loop/audit-questions-4c.py, compare against the
baseline 59/39-recall/4-trap), then move to topic 4
(4-optics-and-waves) with the same survey-batch pattern.
