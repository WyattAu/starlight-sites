# The question standard

version: 1.1.0 (2026-11-20)
status: normative
history: extracted from pedagogy 4c (2026-11-20), then generalised
beyond Kaczor-Nowak with the pattern library in patterns.md

## Scope

Applies to: quick-check (QC) ladders, problem-set pages,
worked-example problem blocks, and practice-test items.
Does not apply to ponder questions (4a owns those), though a ladder
item that asks the reader to construct something may borrow 4a's
spirit.

## Why this standard exists

The ladders authored through 2026-11-19 were retrieval quizzes, not
problems. Benchmark: the problem-book tradition (Kaczor-Nowak,
Polya-Szego, Irodov, Morin). Seven defects were diagnosed, named,
and banned as the anti-patterns at the end of this file. Every rule
below kills one or more of them.

## Rules

1. **Deliverable verbs.** Every problem demands a product: prove,
   show, derive, compute, find all, decide, bound, classify,
   construct. "State / Name / What is" appears in at most two of the
   eight slots (warm-up), and never when the question sentence
   contains the head of the answer.
2. **A concrete object in every statement.** An instance with
   numbers, a named system, or a parameterised family to classify.
   No bare "the susceptibility" without a system to compute it for.
   Where Irodov's economy is reachable, strip the givens to the
   minimum that determines the answer.
3. **Depth of at least two steps.** The solution chains at least two
   nontrivial moves. If one sentence of the section settles the item,
   it is not a problem.
4. **The trap.** At least one item baits a misconception (the page's
   common pitfall or the literature's classic one), and its answer
   names exactly where the tempting move fails. When the trap fires,
   the answer opens by naming the wrong path before the correction.
5. **Self-contained statement, transformed answer.** All data and
   notation live in the statement; earlier ladder items may be cited
   by number; no answer may echo a verbatim sentence of the section:
   the solver must transform, not locate.
6. **Ladder, not list.** Items are ordered by technique with a
   difficulty slope; later items may build on earlier ones; the final
   item pays off the discovery ladder by proving or computing the
   section's headline result in the guided case.
7. **Answers are arguments.** One to four sentences. The first
   sentence names the key idea; the mechanics follow; the result
   closes. Exact form first, decimal in parentheses. A bare number,
   or a number without its route, is rejected.
8. **Verification hook.** Where the result has a checkable edge
   (limit, equality case, dimension check, known exact value), the
   answer includes it.

## The default template (eight slots)

1. warm-up application on a concrete instance
2. a computation with data
3. a two-step derivation
4. a parameter or classification question
5. the trap
6. a guided proof of the headline claim
7. a boundary or limiting case
8. a synthesis item: a cross-section relation checked, or the next
   section's question raised

Slots may merge (six-item ladders are acceptable) provided every
rule holds. Problem-set pages additionally carry at least one
**phenomenon ladder**: one multi-part problem, (a) through (f) or
more, that builds a whole phenomenon step by step (Morin's format).

## Difficulty marking

Recommended on problem-set pages, optional in QC ladders: mark items
(E) elementary, (M) moderate, (H) hard after the item number. The
slope across a page should be real: not every item may be (E), and
the final item should be (M) or (H).

## Anti-patterns (named, banned)

1. **Echo question** - the stem contains the head noun of the answer.
2. **Self-answerable stem** - reading the stem alone reveals the
   answer's shape.
3. **Cloud problem** - no concrete object; "the system" could be
   anything.
4. **One-liner** - one section sentence settles the item.
5. **Flat list** - no technique slope; items interchangeable.
6. **Echo answer** - the answer quotes the section verbatim.
7. **Assert solution** - the solution states the result without the
   route (the disease of the current problem-set pages).
8. **Bare number** - an answer that is a number with no route and no
   check.

## Governance

- Edit this file to change a rule. Bump the version: rules change =
  major, new pattern adopted = minor, wording = patch. Log the change
  in the changelog.
- Any rule change that invalidates shipped ladders creates a retrofit
  entry in `.loop/qc-rediscovery-standard.md`.
- Proposed tooling (not built): a `lint-questions` script that greps
  for echo-question stems ("State the", "What is the") and flags
  answers that are bare numbers. The review checklist is its
  manual form.

## Changelog

- 1.1.0 (2026-11-20): generalised beyond Kaczor-Nowak; adopted
  patterns from the full source set in patterns.md (two-stage
  disclosure, phenomenon ladders, diagnostic distractors, exact-form
  answers); added difficulty marking, anti-pattern list, governance.
- 1.0.0 (2026-11-20): initial extraction from pedagogy 4c.
