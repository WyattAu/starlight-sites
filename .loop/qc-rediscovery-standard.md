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
