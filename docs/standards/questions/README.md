# Question standards

Normative and reference material for every question this repo ships:
quick-check (QC) ladders, problem-set pages, worked-example problem
blocks, and practice-test items.

## Files

- [standard.md](standard.md) - the normative rules (v1.1.0). Read
  before authoring any ladder or problem set.
- [patterns.md](patterns.md) - the pattern library distilled from the
  great problem sets (Kaczor-Nowak, Polya-Szego, Irodov, Krotov,
  Morin, Brilliant, and others). Read for design moves.
- [review-checklist.md](review-checklist.md) - the pass/fail pass for
  any ladder, before commit.

## How to recall

- Authoring a ladder or problem set: read standard.md, then mine
  patterns.md for the section's material.
- Reviewing one: run review-checklist.md item by item.
- Changing the standard: edit standard.md, bump the version
  (rules change = major, new pattern = minor, wording = patch), log
  the change in its changelog, and ledger the retrofit of affected
  pages in `.loop/`.

## Relationship to the pedagogy canon

`docs/pedagogy-core-course.md` section 4c carries the summary and
points here. This directory is the single source of truth for
question quality; the canon carries everything else about a page
(ponders are 4a, history is 4b).
