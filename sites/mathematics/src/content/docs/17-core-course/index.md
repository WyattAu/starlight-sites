---
date: 2026-10-24T00:00:00+00:00
title: "The Core Course"
description: "A linear, dependency-ordered mathematics course that starts from literacy alone: counting is constructed, arithmetic is proved, the real line is built, and nothing depends on a concept from a later chapter."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "The Core Course",
  "description": "A linear mathematics course that starts from literacy alone and builds counting, arithmetic, the real line, algebra, analysis and geometry in dependency order.",
  "provider": {"@type": "Organization", "name": "Wyatt's Notes", "url": "https://mathematics.wyattau.com"},
  "url": "https://mathematics.wyattau.com/17-core-course/"
}
</script>

This course is separate from the reference tracks on this site. The reference
tracks are an encyclopaedia: alphabetical, cross-linked, no required order.
This course is the opposite – a linear sequence where page N assumes page N−1,
designed so that no concept you meet depends on a concept you have not yet
learned.

## How the course is built

The course assumes one thing: you can read, and you can recognise a pattern.
It does not assume that you can add. Counting is built from axioms, addition
and multiplication are defined recursively, their laws are proved as theorems,
the integers and the rationals are constructed as equivalence classes, and the
real line is built as Dedekind cuts. Everything after that is earned in the
same way.

The order is dependency, not the school curriculum. Nothing appears before
everything it needs, and the map below is machine-checked: a forward
dependency, a cycle, or an unpaid debt fails the build.

Three rules govern every chapter:

<div class="table-wrap">

| Rule | What it means |
|---|---|
| **No theorem without proof** | Every claim is proved from earlier results, or is a named debt with a chapter that will pay it, or is an axiom the course declares. Nothing is "obvious" |
| **No symbol without definition** | Notation is introduced at first use with its meaning and an example; a symbol cannot appear before it is defined |
| **No forward reference** | Motivating remarks, quick checks and problems included. Naming future content requires the honesty marker |

</div>

## The stage graph

<!-- STAGE-GRAPH:START -->
```mermaid
graph TD
    A["A: Reasoning (5)"]
    B["B: Counting (5)"]
    C["C: Expanding the line (5)"]
    D["D: The continuum (6)"]
    E["E: Completing algebra (3)"]
    F["F: Structure and linear algebra (9)"]
    G["G: Euclidean analysis (9)"]
    H["H: The canvas (5)"]
    I["I: Measure (8)"]
    J["J: Calculus as linearisation (7)"]
    K["K: Complex analysis (3)"]
    L["L: Algebra and symmetry (5)"]
    M["M: The functional summit (7)"]
    N["N: Topology and geometry at research level (7)"]
    O["O: Probability at research level (5)"]
    A --> B
    A --> C
    A --> D
    A --> F
    A --> H
    A --> I
    B --> C
    B --> D
    B --> E
    B --> F
    B --> G
    B --> H
    C --> D
    C --> F
    C --> L
    D --> E
    D --> F
    D --> G
    D --> H
    D --> I
    E --> F
    E --> G
    E --> K
    E --> L
    F --> G
    F --> J
    F --> L
    F --> M
    F --> N
    G --> H
    G --> I
    G --> J
    G --> K
    G --> O
    H --> I
    H --> J
    H --> L
    H --> M
    H --> N
    H --> O
    I --> J
    I --> K
    I --> M
    I --> N
    I --> O
    J --> K
    J --> L
    J --> M
    J --> N
    K --> M
    L --> N
    M --> N
    M --> O
```

Each node is a stage, with its chapter count; each arrow is a dependency
that crosses a stage boundary. The arrows only ever point forward, which is
the property the Lean artifact checks chapter by chapter.
<!-- STAGE-GRAPH:END -->

<!-- COURSE-MAP:START -->
## The Course Map

The reader arrives knowing how to read. The course builds the rest in
dependency order: logic before counting, counting before the number line, the
number line before algebra, algebra before structure, structure before the
continuum, and the continuum before everything that measures it.
The full course is 89 chapters across 15 dependency stages, from
logic to the research frontier, with
36 written. The graph is machine-checked: `docs/course-graph.json` is
validated for acyclicity and order-consistency on every push, and the same
data generates a Lean 4 proof, checked in CI, that every dependency of every
chapter descends the course order and that the dependency graph is
acyclic: no chapter can reach itself through any chain of prerequisites.

<div class="table-wrap">

| Chapter | Title | Status |
|---|---|---|
| **Stage A: Reasoning** | *Logic, sets, relations, functions. No numbers.* | |
| A1 | Propositions, quantifiers, and what a proof is (assumes: classical-logic) | written |
| A2 | Sets: membership, products, power sets | written |
| A3 | Relations: order, equivalence | written |
| A4 | Functions: injections, surjections, bijections, composition | written |
| A5 | Proof strategies in action: the false proof, dissected | written |
| **Stage B: Counting** | *Peano, induction, arithmetic as theorems.* | |
| B1 | The Peano axioms: what counting is | written |
| B2 | Addition defined recursively; its laws proved (debt: recursion-principle → D5) | written |
| B3 | Multiplication, order, exponentiation: all theorems | written |
| B4 | Division with remainder; the Archimedean property | written |
| B5 | Counting arguments: bijections, permutations, and the binomial theorem | written |
| **Stage C: Expanding the line** | *Z, Q, primes, congruences, and the first crisis.* | |
| C1 | The failure of subtraction; Z as difference classes | written |
| C2 | The failure of division; Q as fraction classes; density | written |
| C3 | The first crisis: x^2 = 2 has no rational solution | written |
| C4 | Primes and the fundamental theorem of arithmetic | written |
| C5 | Congruence classes and the rings Z/nZ | written |
| **Stage D: The continuum** | *R constructed; completeness; cardinality; ordinals; choice.* | |
| D1 | Dedekind cuts: R constructed from order alone | written |
| D2 | Arithmetic and completeness of R, proved | written |
| D3 | Decimals, roots, the place of Q inside R | written |
| D4 | Cardinality: countable Q, uncountable R | written |
| D5 | Ordinals and transfinite induction (assumes: axiom-of-choice) | written |
| D6 | Choice, Zorn's lemma, and well-ordering | written |
| **Stage E: Completing algebra** | *Polynomials, C, and the FTA debt.* | |
| E1 | Polynomials as formal objects | queued |
| E2 | C built as pairs with a multiplication rule | queued |
| E3 | The fundamental theorem of algebra: statement, consequences, and the debt (debt: fundamental-theorem-of-algebra → K3) | queued |
| **Stage F: Structure and linear algebra** | *Categories and linear algebra over R and C.* | |
| F1 | Categories: objects, morphisms, universal properties, adjunctions | written |
| F2 | Vector spaces, linear maps, dimension (debt: zorn-lemma → D6) | written |
| F3 | Duality and the double dual | written |
| F4 | Quotient spaces and their universal property | written |
| F5 | Determinants as alternating forms | written |
| F6 | Exterior algebra | written |
| F7 | Eigenstructure, triangularisation, Cayley-Hamilton (debt: fundamental-theorem-of-algebra → K3) | written |
| F8 | Inner products, orthogonality, the spectral theorem (debt: fundamental-theorem-of-algebra → K3) | written |
| F9 | Canonical forms: what remains when diagonalisation fails | queued |
| **Stage G: Euclidean analysis** | *Convergence, series, continuity, derivatives, integration, the elementary functions, ODEs. Discharges the multivariable debts.* | |
| G1 | Convergence of sequences in R and R^n | queued |
| G2 | Series and the exchange of limits | queued |
| G3 | Continuity in several variables | queued |
| G4 | The derivative in several variables | queued |
| G5 | The chain rule, partials, and Clairaut | queued |
| G6 | The inverse function theorem | queued |
| G7 | The exponential and trigonometric functions via power series | queued |
| G8 | Integration on the real line and the fundamental theorem of calculus | queued |
| G9 | The contraction mapping principle and existence for ODEs | queued |
| **Stage H: The canvas** | *The canvas: spaces, compactness, quotients, approximation.* | |
| H1 | Metric and topological spaces, continuity, homeomorphism (debt: completeness-axiom → D2, elementary-functions-continuity → G7) | written |
| H2 | Connectedness and compactness; the IVT and EVT (debt: zorn-lemma → D6) | written |
| H3 | Completeness, the Baire category theorem, and metrisation | queued |
| H4 | Approximation and compactness in function spaces | queued |
| H5 | The quotient topology: gluing and its price | queued |
| **Stage I: Measure** | *Sigma-algebras to Fourier, ending at the probability laws.* | |
| I1 | Sigma-algebras and measures | queued |
| I2 | The Lebesgue integral: Caratheodory | queued |
| I3 | Modes of convergence | queued |
| I4 | L^p spaces and duality | queued |
| I5 | Product measures and Fubini-Tonelli; the change-of-variables formula | queued |
| I6 | Radon-Nikodym, conditional expectation, and the birth of probability | queued |
| I7 | Fourier series and the Fourier transform | queued |
| I8 | The laws of large numbers and the central limit theorem | queued |
| **Stage J: Calculus as linearisation** | *Manifolds, tangent spaces, forms, Stokes, curvature.* | |
| J1 | Smooth manifolds: charts, atlases, smooth maps (debt: multivariable-chain-rule → G5, multivariable-inverse-function-theorem → G6, trigonometry-facts → G7) | written |
| J2 | Tangent spaces, the differential, the IFT on manifolds (debt: fundamental-theorem-of-calculus → G8, differentiation-under-the-integral → I5) | written |
| J3 | Differential forms and the exterior derivative (debt: clairaut-mixed-partials → G5) | written |
| J4 | Partitions of unity | written |
| J5 | Integration, orientation, and Stokes (debt: fubini-theorem → I5, change-of-variables-formula → I5, partitions-of-unity-existence → J4) | written |
| J6 | Submanifolds, immersions, regular level sets | queued |
| J7 | Connections, curvature, and geodesics | queued |
| **Stage K: Complex analysis** | *Holomorphy, Cauchy, residues, and the FTA proved: the ledger closes.* | |
| K1 | Holomorphy: complex differentiability and its rigidity | queued |
| K2 | Complex integration, Cauchy's theorem, residues | queued |
| K3 | The fundamental theorem of algebra, proved - the ledger closes | queued |
| **Stage L: Algebra and symmetry** | *Groups, rings, Galois, Lie groups, and the geometry synthesis.* | |
| L1 | Groups through the categorical lens | queued |
| L2 | Rings and modules (debt: zorn-lemma → D6) | queued |
| L3 | Galois theory: symmetry of equations | queued |
| L4 | Lie groups and group actions | queued |
| L5 | Geometry: the fifth postulate, its collapse, and symmetry as geometry | queued |
| **Stage M: The functional summit** | *Functional analysis to elliptic PDE: Banach and Hilbert spaces, distributions, Sobolev, the Laplacian's spectrum.* | |
| M1 | Banach spaces and the four pillars (debt: zorn-lemma → D6) | queued |
| M2 | Hilbert spaces and the spectral theorem for compact operators | queued |
| M3 | Weak topologies, locally convex spaces, and distributions | queued |
| M4 | Banach algebras, the Gelfand spectrum, and C*-algebras | queued |
| M5 | Sobolev spaces and weak derivatives | queued |
| M6 | Elliptic theory: the Laplacian, Fredholm, and regularity | queued |
| M7 | Unbounded operators, the spectral theorem, and Stone's theorem | queued |
| **Stage N: Topology and geometry at research level** | *Homotopy, homological algebra, homology, de Rham cohomology, characteristic classes, Riemannian geometry, representations.* | |
| N1 | The fundamental group, covering spaces, and Van Kampen | queued |
| N2 | Homological algebra: chain complexes, derived functors, Ext and Tor | queued |
| N3 | Homology: simplicial and singular | queued |
| N4 | de Rham cohomology: Stokes as an isomorphism | queued |
| N5 | Fibre bundles, connections, and characteristic classes | queued |
| N6 | Riemannian geometry: Hopf-Rinow, Gauss-Bonnet, comparison | queued |
| N7 | Representation theory: characters and Peter-Weyl | queued |
| **Stage O: Probability at research level** | *Martingales, Brownian motion, the Ito calculus, and the diffusion bridge to PDE.* | |
| O1 | Martingales and optional stopping | queued |
| O2 | Brownian motion: construction, invariance, pathologies | queued |
| O3 | The Ito calculus | queued |
| O4 | Stochastic differential equations and Feynman-Kac | queued |
| O5 | Martingale representation, Girsanov, and the risk-neutral measure | queued |

</div>

Two ledgers, not one. A **debt** is a declared input with a named chapter
that pays it; the machine check refuses a debt without a payee. An **axiom**
is a foundation the course deliberately adopts and never proves, listed in
the graph so that no chapter can quietly assume one. Zermelo's axiom of
choice enters at D5 and is what the basis theorem, the maximal ideal
theorem, and Tychonoff's theorem actually consume.

| Axiom | Statement |
|---|---|
| `classical-logic` | Every proposition is either true or false, and a proof may use the law of the excluded middle. |
| `axiom-of-choice` | For every family of nonempty sets there is a function choosing one element from each set. |

The flagship debt is the fundamental theorem of algebra, declared at E3,
consumed at F7 and F8, and paid at K3, roughly forty chapters later.
Dependencies that run upstream (a stage-7 chapter declaring something a
stage-6 chapter proves) are legal and visible: the ledger checks the payee,
not the direction of travel.

The reference tracks in the sidebar remain the encyclopaedia; this course is
the path through it.
<!-- COURSE-MAP:END -->



## The Mastery Methodology

This course integrates five learning protocols designed for self-directed study
without the artificial forcing function of exams.

### The One-Line Reveal

Never read a proof straight through. Read the theorem statement. Close the
book. Spend fifteen minutes attempting the proof or identifying the exact
technical roadblock. If stuck, open the book and read *only the first sentence*
of the author's proof – that sentence almost always introduces the trick or
auxiliary object. Close the book again and finish the proof yourself. This turns
passive consumption into active discovery.

### The Living Monograph

Write your own unified exposition targeting an intelligent version of yourself
from six months ago. For every core concept, include:

1. **The Defect**: what broke that made this definition necessary?
2. **The Universal Property or Diagram**: the commutative diagram or the precise
   statement.
3. **The Extremes**: the trivial example, the canonical workhorse, and the
   counterexample that breaks when you drop one axiom.
4. **The Pivot**: the single line in any long proof where the crucial conceptual
   shift happens.

### The 80/20 Problem Filter

Skip computational drills. Do classification problems ("classify all groups of
order 8"), counterexample challenges ("show the theorem fails if axiom X is
omitted"), and omitted lemmas (when an author defers a verification to the
reader, treat that as mandatory).

### Section Checkpoints and Problems

Mathematics is learned by doing, not by reading. Every numbered section of
every page ends with a **Quick check**: five short questions with terse
answers, testing exactly what the section proved. Do them before moving on;
if one fails, reread only that section. Every page then ends with
**Problems**: multi-step chains that require written arguments, with hints
where the jump is large. The One-Line Reveal tells you what to attempt
before reading; the quick checks keep you honest while reading; the problems
are where you find out whether you can do it.

### The 3-Month Retrospective

Every week, spend forty-five minutes on a blank-page retrieval drill from two
levels back. Write the definition, the theorem hypotheses, the mental picture,
and the proof architecture from memory. If you cannot, you have found a crack
before it causes structural collapse.

### Managing Cognitive Stalling

When stuck: drop one dimension (solve on a 2-sphere or in **Set** instead), or
apply the 48-hour incubation rule – write the obstacle in one plain English
question, close the book, and walk away. Subconscious processing in mathematics
is a documented reality.

## The Pages

<div class="table-wrap">

| Page | Level | Content |
|---|---|---|
| [Stage A: Reasoning](/17-core-course/stage-a-reasoning/) | A | Propositions, quantifiers, sets, relations, functions, and the dissection of a false proof: the floor of the course, assuming nothing |
| [Stage B: Counting](/17-core-course/stage-b-counting/) | B | Peano, induction and its dissection, addition and multiplication as theorems, division with remainder, the Archimedean property, pigeonhole and the binomial law |
| [Stage C: Expanding the Line](/17-core-course/stage-c-expanding-the-line/) | C | The integers from difference classes, the rationals, the first crisis, Euclid and Bezout, congruence classes and Fermat |
| [Stage D: The continuum](/17-core-course/stage-d-the-continuum/) | D | Dedekind cuts, arithmetic and completeness, decimals, cardinality and Cantor, ordinals and transfinite induction, choice and Zorn |
| [Categories: The Language of Mathematics](/17-core-course/1a-categories/) | 1A | Objects, morphisms, universal properties, functors, natural transformations |
| [Linear Algebra Done Wrong](/17-core-course/1b-linear-algebra/) | 1B | Coordinate-free vector spaces, dual spaces, quotient spaces, exterior algebra, determinants as alternating forms |
| [Level 2: Topology](/17-core-course/2a-topology/) | 2 | Metric and abstract topologies, continuity, subspaces and products, Hausdorff, connectedness (intermediate value theorem), compactness (extreme value theorem) |
| [Level 3A: Smooth Manifolds](/17-core-course/3a-manifolds/) | 3A | Differentiability in Euclidean space, charts and atlases, locality and the maximal-atlas theorem with uniqueness, the stereographic sphere, smooth maps and diffeomorphisms, dimension as an invariant |
| [Level 3B: Tangent Spaces](/17-core-course/3b-tangent-space/) | 3B | Derivations on germs, Hadamard's lemma, the chart transport and change-of-basis law, the differential as the Jacobian, the manifold chain rule, the inverse function theorem on manifolds |
| [Level 3C: Differential Forms](/17-core-course/3c-forms/) | 3C | Forms as determinant evaluators, the wedge with definitional associativity, the exterior derivative with d² = 0, the graded Leibniz rule, pullback commutation, coordinate independence of d |
| [Level 3D: Integration and Stokes](/17-core-course/3d-stokes/) | 3D | Manifolds with boundary, orientation and the outward-first boundary convention proved well defined, chart and partition-of-unity integration, the local Stokes theorem by Fubini and FTC, the generalised Stokes theorem, and the classical Green, divergence, and Stokes theorems as coordinate expansions |

</div>

Levels 4–5 are under construction. The dependency graph above shows the
planned structure.
