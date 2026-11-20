# Pattern library: what the great question sets do

Each entry names a source, the mechanism that makes it work, and how
this repo applies it. Status: adopted / adopted-for-problem-sets /
queued.

1. **Technique ladder culminating in a theorem.**
   Source: Kaczor and Nowak, *Problems in Mathematical Analysis*.
   Mechanism: items within a section compose; each teaches a move the
   next needs; the last item is a genuine theorem of the field,
   decomposed into steps a student can walk.
   Ours: the template's slope and the final synthesis slot. Adopted.

2. **Theory-building exercises.**
   Source: Tao's *Analysis*, Axler's *Linear Algebra Done Right*.
   Mechanism: the text states a definition and defers the theorem;
   the exercise sequence constructs the proof, part by part, with
   explicit "using (a), show (b)" dependencies.
   Ours: cite earlier items by number; slot 6 is the guided proof.
   Adopted.

3. **Two-stage disclosure.**
   Source: Polya and Szego, *Problems and Theorems in Analysis*:
   every problem carries hints separate from solutions, so the
   reader attempts, gets unstuck, and never sees the answer before
   the attempt.
   Ours: the wn-spoiler mechanism supports a second layer. Ladders
   put a short "Hint" spoiler before "Answers" on the two hardest
   slots (the trap and the guided proof). Adopted for problem sets
   first, then QC ladders.

4. **Minimal data, maximal inference.**
   Source: Irodov, *Problems in General Physics*.
   Mechanism: statements stripped to the few givens that determine
   the answer; the printed answer is a bare number or expression the
   solver checks against after deriving the route.
   Ours: rule 2's economy plus rule 8's hook. Adopted.

5. **Insight over plug-in.**
   Source: Krotov, *Aptitude Test Problems in Physics*; Gnadig,
   Honyek, and Riley, *200 Puzzling Physics Problems*.
   Mechanism: one item resists the standard method and rewards a
   reframing: symmetry, a conservation law, a smarter frame, a
   dimension check. The surprise is the lesson.
   Ours: pairs with the trap slot; the answer names the reframing.
   Adopted.

6. **Phenomenon ladder.**
   Source: Morin, *Introduction to Classical Mechanics*.
   Mechanism: one long multi-part problem per phenomenon, (a)
   through (f) and beyond, each part one step, star-rated
   difficulty; the parts assemble into a result the text could only
   have asserted.
   Ours: required on problem-set pages (one per topic minimum).
   Adopted for problem sets.

7. **Diagnostic distractors.**
   Source: Brilliant's checkpoint format.
   Mechanism: each wrong choice maps to a named misconception, and
   the feedback addresses that misconception directly.
   Ours: in QC answers, the trap item opens by naming the wrong path
   ("If you summed energies instead of free energies, you used the
   wrong convexity: ..."). Queued: practice-test fixtures
   (`fixtures/practice/*.json`) gain a per-distractor diagnosis
   field so the practice tests explain the specific error.

8. **Clean answers, exact forms.**
   Source: Putnam problems; Project Euler's single verifiable target.
   Mechanism: answers are exact or canonical (2/ln(1+sqrt 2), not a
   bare 2.269); one checkable scalar closes the loop.
   Ours: rule 7's exact-form-first answer format. Adopted.

9. **Standard-form recognition.**
   Source: Demidovich, *Problems in Mathematical Analysis*.
   Mechanism: long graded banks where the prior skill is recognising
   which type of object sits in front of you before choosing a
   technique.
   Ours: slot 4 asks "which case is this" or "for which parameter
   values" rather than "compute". Adopted.

10. **Paradox and surprise.**
    Source: Arnold's problem style (*Problems for Children 5 to 15*
    and his lecture problems).
    Mechanism: a question whose naive answer is wrong, where the
    resolution in one sentence reorganises the reader's picture.
    Ours: the trap slot may be a paradox; the answer resolves it in
    one sentence, then gives the mechanism. Adopted.

11. **Exam-bank integration.**
    Source: de Souza and Silva, *Berkeley Problems in Mathematics*;
    University of Chicago, *Graduate Problems in Physics*.
    Mechanism: multi-topic integration items with fully
    self-contained statements, calibrated to what a completed course
    should enable, no new definitions introduced mid-problem.
    Ours: the synthesis slot may integrate two sections; track-level
    problem sets may span topics. Adopted for problem sets.

12. **Lead with the key idea.**
    Source: Art of Problem Solving write-up conventions.
    Mechanism: the solution's first sentence names the insight;
    everything after is mechanics.
    Ours: rule 7's answer format. Adopted.

## Sources considered and not adopted

- **Project Euler's computation-dependent items**: static pages
  cannot run code; the verification hook carries the spirit.
- **Brilliant's interactive branch trees**: needs structured JSON
  plus component work; queued with the practice-test fixtures.
- **IMO Shortlist difficulty taxonomy**: precise but
  competition-specific; the (E)/(M)/(H) tags cover the need.
