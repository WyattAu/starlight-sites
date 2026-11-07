# The Core Course Standard

**Version 1 (draft for refinement).**
**Owner:** Wyatt Au. **Applies to:** `sites/mathematics/src/content/docs/17-core-course/`.
**Status:** the build standard for the course. Every chapter, every edit, and
every gate check answers to this document. Changes to this document change the
course.

---

## 0. Purpose

The Core Course teaches mathematics from nothing to the frontier of the
undergraduate canon, on one principle:

> **You can only do mathematics. You cannot read it.**

The course is therefore not a text to be read. It is a sequence of
intellectual obligations: conjectures to attempt, refutations to survive,
definitions to rebuild, theorems to prove, and problems that chain them. The
prose exists to be earned. A reader who has not struggled has not started.

The intended reader has **absolutely zero prior knowledge of mathematics** as
a subject. The baseline is defined precisely in Section 1 and is not relaxed
by any chapter.

The author's standard of judgment comes from research mathematics and from
building trading systems: precision is non-negotiable, every claim is either
proved, declared, or labelled as conjecture, computation suggests and proofs
decide, and history is told as it happened or explicitly marked as
reconstruction.

---

## 1. The zero-knowledge contract

**The reader's assumed baseline.** The reader can read English, can add and
multiply integers, and is willing to struggle. That is the entire baseline.
Everything else — negative numbers, fractions, roots, exponents, functions,
sets, infinity, proof itself — is constructed by the course before it is used.

**The obligations this creates:**

1. **No symbol without prior definition.** Every notation ($\sum$, $=$,
   exponents, fractions, $\sqrt{\phantom{x}}$) is introduced at first use,
   with its meaning stated and an example worked. The course maintains a
   notation ledger per chapter; no symbol appears in a chapter that was not
   defined in that chapter or an earlier one.
2. **No theorem without proof.** Every claim is proved in full, from earlier
   results, or is a **declared input**. Declared inputs are stated precisely,
   named, counted in the chapter's Scope, and pointed at the chapter that
   removes them. The declared-input budget per chapter is at most three, and
   the long-term goal is zero: every declared input is eventually discharged
   by a foundations chapter.
3. **No school mathematics.** Facts that school treats as obvious
   (distributivity, "a fraction is a division", "$\sqrt{2}$ exists") are
   either proved, constructed, or axiomatised openly. The word "obvious" is
   banned: if a step is obvious, the reader can supply it, and the proof says
   which earlier result supplies it.
4. **The dependency discipline.** Chapters form one linear sequence. A chapter
   may use only: the baseline, declared inputs, and content of earlier
   chapters. Forward references are prohibited — including in quick checks,
   problems, motivating remarks, and the examples table. Motivating examples
   that name future content must carry the forward-honesty marker (see 3.4).
5. **The dependency ledger.** The course map in the hub is the ledger: every
   chapter lists its declared inputs and the chapters it feeds. Adding a
   chapter requires updating the map. Reordering requires re-auditing every
   later chapter's dependencies.

---

## 2. The epistemic method

Conjectures and proofs are what make mathematics. The course therefore
teaches every substantial concept through the full life cycle of an idea, not
through its final form.

### 2.1 The dialectic (the chapter's spine)

Every chapter is built as a **rational reconstruction**: the historical crisis
in which the mathematics was born, replayed at the intensity the original
mathematicians felt, using only the tools available at that point in the
course. The seven beats:

1. **The naive conjecture.** The answer any intelligent person gives. Stated
   as an attempt, never as a strawman: it must be genuinely attractive.
2. **The honest attempt.** A proof or computation of the conjecture using only
   tools the reader already has. The reader is asked to make this attempt
   themselves (Section 3).
3. **The monster.** The counterexample or obstruction that kills it. Real
   monsters preferred: $\sqrt{2}$ against "every length is a fraction";
   Dirichlet's function against "a function is a formula"; the shear matrix
   against "every matrix diagonalises"; the failing convergence of
   $1 - 1 + 1 - \cdots$ against "a sum has a value".
4. **The refinement question.** Not "what is the correct definition?" but
   "what must the definition be so that the theorem survives?" The reader
   answers before the text does.
5. **The repaired statement.** The modern definition and theorem, appearing as
   the resolution the reader was reaching for.
6. **The full proof.** Complete, no gaps, the reader having already located
   the wound the proof closes.
7. **The boundary.** What the repair still does not handle. This is the seed
   of the next chapter and is stated explicitly, so the course reads as one
   continuous argument rather than forty-two facts.

### 2.2 The history convention

- **Real history** appears as one-line, well-attested facts with dates and
  names, marked in prose as historical. Verified before inclusion. Examples of
  the accepted register: Bolzano demanding a "purely analytic proof" of the
  intermediate value theorem (1817); Grassmann's *Ausdehnungslehre* (1844)
  ignored for decades; the Stokes theorem set as a Cambridge exam problem
  (1854) after Kelvin's letter; Galois's letter the night before the duel
  (1832).
- **Rational reconstruction** is everything else: not what Euler did, but what
  the best mathematician of the period would have tried with the tools the
  reader currently has. The reader always knows which mode a passage is in.
- Invented characters and dramatised dialogue are banned. The conversation is
  always between the reader and the page.

### 2.3 The physicist's clause

The author is a physicist who built trading systems, and the course respects
that epistemology:

- **Computation suggests; proof decides.** Numerical experiments are a
  legitimate and encouraged way to generate conjectures, and every chapter is
  encouraged to include at least one experiment the reader can run by hand or
  in code. An experiment is labelled as an experiment and never counts as a
  proof.
- **Adversarial discipline.** After every theorem the text asks what would
  break it: which hypothesis is load-bearing, which example dies if it is
  dropped. The reader is required to run this check, not just read it.
- **Open problems are labelled open.** Where a question is genuinely open or
  merely deferred, the text says which.

### 2.4 The anticipation rule

A page cannot respond, so it must anticipate. For every ponder question and
every refutation, the text enumerates the answers a reader could plausibly
give and addresses each individually. The most valuable sentence type in the
course is the **error autopsy**: "if you said X, it is because you assumed Y;
test Y against [the specific case] and watch it fail." If a ponder question
has only one plausible answer, it is a quiz question, not a ponder, and it
belongs in the quick check instead.

---

## 3. The chapter anatomy

### 3.1 The page skeleton

Every chapter page, in order:

1. **Frontmatter** (title, description, date) and the breadcrumb schema block.
2. **The Defect.** What breaks, stated at the reader's current level, ending
   in the naive conjecture the reader is about to hold.
3. **The Ponder block.** The attempt-before-reading questions (Section 3.3).
4. **The Scope.** What the page uses: carried chapters, declared inputs (at
   most three, named), and the zero-knowledge obligations it discharges.
5. **The numbered sections.** Each a full dialectic or a strict sub-case of
   one (Section 3.2).
6. **Problems.** Multi-step chains requiring written arguments. The recall
   layer lives in the quick checks; the Problems are performance.
7. **The Reveal (end of page).** What the reader should now be able to say.
   Moved here from the page top: it spoils the dialectic there.
8. **Where to go next.** The next chapter in the sequence (internal link
   only), the carried chapters it leans on, and the primary external source.

### 3.2 The section skeleton

Each numbered section follows the five-beat rhythm:

1. **Ponder.** Two to three questions the reader attempts before the
   development. The first is answerable from the previous section alone. The
   last is genuinely hard. Each is followed, later in the section or in the
   quick check, by its specific autopsy.
2. **The development.** Definitions, theorems, proofs. Complete. Nothing
   asserted without proof, declaration, or construction.
3. **The autopsy.** Where the reader's probable attempt lands, including the
   named failure of the wrong answer.
4. **The boundary.** What the section's result does not do, and which later
   section or chapter handles it.
5. **Quick check.** At least five questions, terse answers immediately
   following. The count must equal or exceed the number of major results in
   the section. A section with five subsections owes at least five questions.

### 3.3 The question rules

- A ponder question must have a **felt gap**: it must be the historical
  question that made the concept necessary, or a computation whose outcome is
  genuinely uncertain to the reader at that moment.
- "What is X?" is a quiz, not a ponder. Quizzes live in quick checks.
- Every ponder is answered somewhere in the page. No ponder is rhetorical.
- The answers to quick checks are terse and immediate. The answers to ponders
  are the development itself.

### 3.4 The forward-honesty marker

Motivating examples may name future content only with the marker sentence:
"this is a map of where the course is going, not a list of prerequisites" or
equivalent. Marked instances are counted in the audit.

---

## 4. The writing rules

1. **No filler.** Every sentence carries information. No marketing language,
   no enthusiasm, no "it is easy to see", no "simply", no "trivially", no
   "obviously", no "the reader can verify". If a step is short, do the step.
2. **Conversational register, rigorous spine.** Second person is allowed;
   the reader is addressed as a capable adult doing the work. Warmth comes
   from taking the reader's attempts seriously, not from exclamation.
3. **Error autopsies over warnings.** "If you assumed X, test it against this
   case" replaces "be careful that X fails."
4. **Definitions are decisions.** Where a concept admits two candidate
   definitions, the text presents both and lets the reader commit before the
   refutation picks the survivor.
5. **Examples precede and follow theorems.** A theorem without a worked
   example before it and a computed instance after it fails review.
6. **Counterexamples are mandatory.** Any page proving a theorem must contain
   at least one example showing the theorem failing when a hypothesis is
   dropped.
7. **Em-dashes are banned.** En-dashes for ranges and compound adjectives
   only. The lint enforces this network-wide.
8. **No handwave vocabulary.** The handwave lint's word list is the floor;
   the standard is stricter: any word that asserts ease without doing the
   work is replaced by the work.
9. **Length follows depth.** Sections are as long as the dialectic needs and
   no longer. Cut any paragraph that does not change the reader's epistemic
   state.
10. **LaTeX hygiene.** Single backslashes; matrices use `\\` row separators;
    every display equation is checked for balanced braces. The KaTeX gate
    and the audit pass enforce this.

---

## 5. The rigor invariants

These hold for every chapter at all times. A chapter failing any of them does
not ship.

1. Everything is proved, constructed, or declared; nothing asserted.
2. No forward references, in any layer (prose, quick checks, problems,
   examples, figures).
3. Declared inputs: at most three per chapter, named precisely, pointed at
   their discharging chapter in the course map.
4. Every section has its quick check; the question count meets or exceeds
   the section's major results; every question has an answer.
5. Every page has at least one complete dialectic (all seven beats) or is an
   explicit sub-case page of a dialectic from earlier in the same level.
6. Every page contains at least one counterexample showing a hypothesis is
   load-bearing.
7. Zero em-dashes; zero banned vocabulary; depth tier met; descriptions
   valid; the breadcrumb schema present.
8. The page renders (KaTeX balanced), links resolve, and the course map's
   status row is updated in the same commit.

---

## 6. The build gates

The local sequence before every push, in order (each has caught a real
failure and is not optional):

1. `bunx biome check . --diagnostic-level=error` (zero errors).
2. `node scripts/sync-shared.mjs --check` (if shared assets were touched).
3. Scoped lints on touched content: `lint-depth`, `lint-handwaves`,
   `lint-descriptions`, `lint-links`.
4. `node scripts/lint-site-nav-parity.js` (if catalogue surfaces were
   touched).
5. Backslash hygiene on new pages: no doubled LaTeX escapes.
6. `node scripts/generate-llms-txt.js` (if any content changed).
7. Self-review pass: re-read the full page as a hostile reader; fix findings.
8. Commit and push immediately. Deferred pushes are the failure mode this
   rule exists to prevent; the deploy queue absorbs immediate pushes.

After merge:

9. Watch the deploy run; diagnose failures from logs, never from guesses.
10. Fresh-eyes audit pass on the deployed page (a second full read, at least
    one per chapter).
11. Live verification: URLs, rendering, search indexing, quick checks
    present in the served HTML.

---

## 7. Governance

- The course map in the hub is the single source of truth for chapter status:
  `written`, `in construction`, `queued`. Transitions happen in the same
  commit as the chapter work.
- New chapters must name their declared inputs and the chapters they feed
  before content is written.
- This document is versioned. Each refinement increments the version and
  records what changed and why. The standard is satisfied only when the user
  says it is; refinement continues until then.

---

## 8. Open design questions (for refinement)

1. **The foundations block.** The zero-knowledge contract requires
   foundations chapters before Level 1: proof standards, sets and functions,
   induction and the natural numbers, negative numbers, fractions, and the
   real line through completeness. Proposed as **Level 0 (six chapters)**,
   inserted ahead of the current Level 1. Decision: adopt, and fix the exact
   chapter list?
2. **The arithmetic floor.** The baseline above assumes integer addition and
   multiplication fluency. Tighter (nothing) is impossible; looser (school
   algebra) betrays the contract. Confirm the floor.
3. **Complex numbers before eigenvalues.** Level 1C declares the fundamental
   theorem of algebra and works over $\mathbb{C}$. With the foundations
   block, complex numbers get their own construction chapter (as pairs with
   a multiplication rule, proven associative and field-like), removing the
   declared input. Decision: build the complex-number chapter in Level 0/1?
4. **Ponder answer placement.** Immediately after the questions in a visually
   separated block, at the section end, or behind a click-to-reveal?
5. **The Reveal.** Confirmed move to the page end? (Recommended: yes.)
6. **Retrofit scope.** The ten written chapters predate this standard. They
   meet the rigor invariants but not the dialectic anatomy. Decision:
   retrofit order (suggested: 2A first, since its continuity dialectic is the
   strongest demonstration; then 1B), or retrofit only as each chapter is
   next audited?

---

## 9. Changelog

- **v1**: initial draft. Synthesises the session's decisions: zero-knowledge
  contract, the seven-beat dialectic, rational reconstruction convention,
  physicist's clause, anticipation rule, chapter and section anatomy, quick
  checks and problems, dependency discipline, build gates, governance, and
  the six open design questions.
