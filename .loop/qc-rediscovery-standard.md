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
