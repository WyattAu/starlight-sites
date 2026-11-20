# Ladder review checklist

Run this before committing any ladder or problem set. Items are
pass/fail; a fail on 1-5 or 9 fails the whole ladder.

## Per item

1. Deliverable verb present (prove, show, derive, compute, find all,
   decide, bound, classify, construct)? At most two recall items per
   ladder?
2. Stem does not contain the answer's head noun? Test: read the stem
   alone; could someone guess the answer's shape from it?
3. Concrete object present (numbers, named system, or parameterised
   family)?
4. Solvable in at least two moves? If one section sentence settles
   it: fail.
5. Self-contained: all data and notation in the statement; earlier
   items cited by number where used?
6. Answer is an argument (setup, key move, result), not an echo?
   Exact form first, decimal after? First sentence names the key
   idea?
7. Trap present somewhere in the ladder, and its answer names the
   wrong path before the correction?
8. Ladder slope: does item n+1 use item n's technique or result
   somewhere?
9. Headline payoff: does the final item prove or compute the
   section's headline result in the guided case?
10. Verification hook in at least one answer (limit, equality case,
    exact known value, dimension check)?

## Per page

11. Aside and spoiler structure intact (`lint-asides` green)?
12. No handwave phrases in the new text (`lint-handwaves` green)?
13. Math delimiters and braces balanced on every new line (the
    9_problem-set damage class; see commit 3788c8a5e for the repair
    patterns)?
14. Difficulty slope real: not all (E), final item (M) or (H) where
    tags are used?

## The one-question audit

For each item ask: if the reader deleted the section text and kept
only the ladder, could a strong student reconstruct the section's
argument from these items? If yes, the ladder is doing the
standard's job. If no, the ladder is a quiz wearing a ladder's
clothes.
