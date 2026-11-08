# The Core Course Standard

**Version 2 (draft for refinement).**
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

**The reader's assumed baseline.** The reader can read English, recognise
written patterns, and is willing to struggle. That is the entire baseline.
The course does not assume arithmetic: counting is constructed, addition and
multiplication are defined and their laws are proved, and every number system
beyond the counting numbers is built by explicit construction. Nothing — no
symbol, no operation, no fact from school — is assumed. Where a school habit
helps the reader compute comfortably, the course says so, but the comfort is
recognised as habit, and the mathematics underneath is built regardless.

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
   by a foundations chapter. A permanent assumption is not a debt: classical
   logic and Zermelo's axiom of choice are recorded as *axioms*, separately
   from the debt ledger, so that no chapter can quietly depend on one.
3. **No school mathematics.** Facts that school treats as obvious are built:
   addition and its commutativity are theorems, fractions are equivalence
   classes, $\sqrt{2}$ exists because the real line is constructed and the
   proof is given. The word "obvious" is banned: if a step is short, the
   proof does the step and names the earlier result that supplies it.
4. **No assumed order.** The chapter sequence follows mathematical
   dependency, not the school curriculum. School order is treated as a
   historical accident to be improved upon: the only ordering principle is
   that nothing appears before everything it depends on.
5. **The dependency discipline.** Chapters form one linear sequence. A chapter
   may use only: the baseline, declared inputs, content of earlier
   chapters, and the axioms. Forward references are prohibited — including in
   quick checks, problems, motivating remarks, and the examples table.
   Motivating examples that name future content must carry the
   forward-honesty marker (see 3.4).
6. **The dependency ledger.** The course map is generated from
   `docs/course-graph.json`, the machine-checked source of truth: every
   chapter lists its dependencies, its declared inputs and their discharging
   chapter, and any axiom it assumes. Adding a chapter requires editing the
   graph and regenerating the map; reordering requires re-auditing every later
   chapter's dependencies. `scripts/check-course-graph.py` fails the push on a
   cycle, a forward dependency, an unpaid debt, an unknown axiom, or a map that
   disagrees with the graph.

**The stage architecture.** The course is organised by dependency stages,
not by school order and not by book boundaries. Each stage contains only
chapters whose dependencies are fully discharged by earlier stages:

- **Stage A: Reasoning** (no numbers). Logic, propositions, quantifiers,
  proof by cases and by contradiction, sets, ordered pairs (built as sets),
  relations, order relations, equivalence relations, functions, injections,
  surjections, bijections. The reader leaves this stage able to read a proof
  and handle infinite collections, without having counted anything.
- **Stage B: Counting.** The Peano axioms as the definition of counting;
  induction; addition and multiplication *defined recursively* and their laws
  *proved*; order; division with remainder. Arithmetic is a theorem.
- **Stage C: Expanding the line.** The failure of subtraction in the
  counting numbers; $\mathbb{Z}$ built as difference classes (Stage A's
  equivalence relations pay off); $\mathbb{Q}$ built as fraction classes;
  density; the first crisis: $x^2 = 2$ has no rational solution; the
  arithmetic of $\mathbb{Z}$ made honest: primes and the fundamental theorem
  of arithmetic, proved from division with remainder; and congruence
  classes, the rings $\mathbb{Z}/n$ with Fermat's little theorem, so the
  algebra stage's favourite examples exist before algebra begins.
- **Stage D: The continuum.** Dedekind cuts (only order and $\mathbb{Q}$
  needed); $\mathbb{R}$ constructed; completeness proved; decimals, roots;
  cardinality: countable versus uncountable (Cantor's diagonal, over the
  real line). Then the infinity the later stages actually consume: Zermelo's
  axiom of choice is *adopted here*, recorded as an axiom rather than a debt,
  and Zorn's lemma and the well-ordering principle are proved equivalent to
  it. The basis theorem, the maximal ideal theorem, and Tychonoff's theorem
  all spend this assumption, and the map shows where.
- **Stage E: Completing algebra.** Polynomials as formal objects; the failure
  of $x^2 + 1$ over $\mathbb{R}$; $\mathbb{C}$ built as pairs with a
  multiplication rule; the fundamental theorem of algebra *declared here*
  and discharged much later, when complex analysis is built — the first
  entry in the declared-input ledger, and the demonstration that the ledger
  is a promise the course keeps.
- **Stage F: Structure and linear algebra.** Category theory as the language
  of composition, now with built examples; linear algebra over
  $\mathbb{R}$ and $\mathbb{C}$: spaces, maps, duality, quotients,
  determinants, exterior algebra, eigenstructure, inner products and the
  spectral theorem, canonical forms.
- **Stage G: Euclidean analysis.** Convergence in $\mathbb{R}^n$; series
  and sequences of functions, pointwise versus uniform, and the exchange of
  limits; continuity in several variables; the multivariable derivative; the
  chain rule and Clairaut; the inverse function theorem; the elementary
  functions built from power series (legitimately, on the series chapter's
  shoulders); integration on the real line with the fundamental theorem of
  calculus; and the contraction mapping principle with existence, uniqueness,
  and linear systems $x' = Ax$ via the matrix exponential. This stage
  *discharges the multivariable and integration debts* that the manifold
  chapters would otherwise have to declare, including the one-variable FTC.
- **Stage H: The canvas.** Metric and topological spaces, continuity,
  connectedness, compactness, completeness and the Baire category theorem,
  separation and metrisation.
- **Stage I: Measure.** $\sigma$-algebras, Carathéodory, the Lebesgue
  integral, convergence modes, $L^p$ duality, Fubini and the
  change-of-variables formula, Radon-Nikodym, conditional expectation, and
  the laws of large numbers with the central limit theorem, with Fourier as
  the engine of the second. This stage *discharges the integration debts*
  (Fubini, change of variables) that the Stokes chapter consumes.
- **Stage J: Calculus as linearisation.** Smooth manifolds, tangent spaces,
  differential forms, partitions of unity, integration and Stokes,
  submanifolds, Lie groups, and the first look at curvature: connections,
  the curvature tensor, geodesics.
- **Stage K: Complex analysis.** Holomorphy, Cauchy and residues, and the
  proof of the fundamental theorem of algebra — the ledger closes.
- **Stage L: Algebra and symmetry.** Groups, rings and modules, Galois
  theory, Lie groups and their actions (moved here from the manifold stage:
  a Lie group is a group before it is a manifold), and the closing synthesis
  — geometry: the fifth postulate, its collapse, and symmetry as geometry.
  The course ends by re-seeing, not re-teaching.

The stages are the dependency order: no chapter may reach into a later
stage, and within a stage the same rule holds. The written chapters of the
first release sit in Stages F through J; Stages A through E are the
foundations build, constructed ahead of everything else under the
zero-knowledge contract. Dependencies that run upstream are legal and
visible: a stage-J chapter may declare an input that a stage-G chapter pays,
and the ledger checks the payee rather than the direction of travel.

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
7. **The Reveal (top of page, click-to-reveal).** The page's summary lives
   at the top, inlined where the reader first meets the page, but blurred
   behind a click so the dialectic is not spoiled by scrolling. The reader
   chooses the spoiler; the course never forces it.
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
- **Spoiler mechanism.** Ponder answers, the One-Line Reveal, and any
  resolution the reader should attempt first are rendered as click-to-reveal:
  blurred text that sharpens on click (the Discord-spoiler pattern),
  implemented as a `<details>` block or a blur span backed by a standalone
  stylesheet class (never inline CSS: the astro-compress purger strips
  inline styles; the class lives in a standalone stylesheet file). The rule:
  anything that would be spoiled by scrolling is behind a click; the click is
  the reader explicitly choosing the answer over the attempt.

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
3. Declared inputs: at most three per chapter, named precisely, entered in
   the **declared-input ledger** with the chapter that will discharge them.
   A declared input is a debt; the ledger exists so every debt is visibly
   paid. (First debt: the fundamental theorem of algebra, declared in the
   eigenstructure chapter, discharged in the complex analysis stage.)
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
5. `python3 scripts/check-course-graph.py` (the dependency graph: acyclic,
   ordered, ledger discharged, hub in agreement — every edit to the course
   map or any chapter's dependencies changes the graph).
6. Backslash hygiene on new pages: no doubled LaTeX escapes.
7. `node scripts/generate-llms-txt.js` (if any content changed).
8. Self-review pass: re-read the full page as a hostile reader; fix findings.
9. Commit and push immediately. Deferred pushes are the failure mode this
   rule exists to prevent; the deploy queue absorbs immediate pushes.
10. The Lean artifact (`lean/`) is proved in CI, not locally: local elan
    toolchains have shown corrupted behaviour, and the repo's CI-only policy
    for heavy builds applies here too.

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

- **v2.4**: the full dependency audit. Four unclean dependencies found and
  fixed: Lie groups sat in the manifold stage before groups exist (moved to
  Stage L); the change-of-variables formula consumed the inverse function
  theorem without declaring it; the ODE chapter's linear systems consume
  eigen theory without declaring it; and the elementary functions were built
  from power series with no chapter building series or uniform convergence —
  a new Stage-G chapter, "Series and the exchange of limits", now carries
  that load and Stage G is renumbered (G2 series ... G9 ODEs). Coverage
  additions from the floor-to-frontier audit: congruence classes (C5),
  completeness/Baire/metrisation (H3, matching the standard's own promise),
  the laws of large numbers and the central limit theorem (I8), and the
  geometry verdict applied: one capstone, L5, the course's final chapter.
  66 chapters, 145 edges; the Lean artifact re-proves the new order.
- **v2.3**: the map is 61 chapters. Three real gaps closed: the
  fundamental theorem of calculus was misattributed to the chain-rule chapter
  and now belongs to a Stage-G integration chapter; the axiom of choice had no
  home although the basis theorem, maximal ideals, and Tychonoff all need it,
  so it is now adopted explicitly at D5 with Zorn and well-ordering proved
  equivalent; and the arithmetic of the integers (primes, unique
  factorisation) now exists before the rings chapter that uses it. Axioms are
  modelled separately from debts: an axiom is never discharged, and the
  checker fails an unknown or unused axiom. The hub map is generated from the
  graph by `scripts/gen-course-map.py`, and CI builds the Lean artifact before
  any site deploys.
- **v2.1**: the stage architecture becomes the validated 12-stage
  dependency order (Euclidean analysis inserted as Stage G; measure moved
  before manifolds, discharging the Fubini debt in the correct order); the
  dependency graph is machine-checked on every push and its acyclicity is
  proved in Lean 4 in CI.
- **v2**: the floor drops to literacy and pattern recognition; arithmetic
  itself is constructed (Stage B); the stage architecture replaces school
  ordering as Section 1's organising principle; click-to-reveal is the
  spoiler mechanism (ponder answers and the inlined top-of-page Reveal);
  the declared-input ledger is formalised as debts with discharge
  chapters.
- **v1**: initial draft. Synthesises the session's decisions: zero-knowledge
  contract, the seven-beat dialectic, rational reconstruction convention,
  physicist's clause, anticipation rule, chapter and section anatomy, quick
  checks and problems, dependency discipline, build gates, governance, and
  the six open design questions.
