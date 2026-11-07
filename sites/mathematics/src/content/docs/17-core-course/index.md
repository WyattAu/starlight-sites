---
date: 2026-10-24T00:00:00+00:00
title: "The Core Course"
description: "A linear, dependency-ordered mathematics course in five levels: categories and multilinear algebra, topology, manifolds, measure theory, and the syntheses – designed so that no concept depends on a future concept."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "The Core Course",
  "description": "A linear mathematics course in five levels: categories, multilinear algebra, topology, manifolds, measure theory, and the syntheses.",
  "provider": {"@type": "Organization", "name": "Wyatt's Notes", "url": "https://mathematics.wyattau.com"},
  "url": "https://mathematics.wyattau.com/17-core-course/"
}
</script>

This course is separate from the reference tracks on this site. The reference
tracks are an encyclopaedia: alphabetical, cross-linked, no required order.
This course is the opposite – a linear sequence where page N assumes page N−1,
designed so that no concept you meet depends on a concept you have not yet
learned.

## The Five Levels

<div class="table-wrap">

| Level | Theme | Key texts | What you gain |
|---|---|---|---|
| **1** | Language & the Multilinear Engine | Lawvere & Schanuel (Categories); Treil (Linear Algebra Done Wrong) | Arrows, universal properties, coordinate-free linear algebra, exterior forms |
| **2** | The Canvas | Bradley, Bryson, Terilla (Topology); Jänich (companion) | Continuity, compactness, connectedness as pure qualitative geometry |
| **3** | Calculus as Linearization | Loring Tu (An Introduction to Manifolds) | Smooth manifolds, differential forms, the Generalised Stokes' Theorem |
| **4** | Global Analysis | Schilling (Measures, Integrals and Martingales); Körner (companion) | Measure spaces, the Lebesgue integral, $L^p$ spaces, functional duality |
| **5** | The Syntheses | Ullrich (Complex Made Simple); Bott & Tu (Differential Forms in Algebraic Topology); Aluffi (Algebra: Chapter 0) | Complex analysis re-seen through forms; de Rham cohomology; homological algebra |

</div>

## The Dependency Graph

```mermaid
graph TD
    L1A["Level 1A: Categories"] --> L1B["Level 1B: Linear Algebra"]
    L1B --> L2["Level 2: Topology"]
    L1B --> L3["Level 3: Manifolds"]
    L2 --> L3
    L3 --> L4["Level 4: Measure Theory"]
    L1B --> L4
    L4 --> L5A["Level 5A: Complex Made Simple"]
    L3 --> L5B["Level 5B: Bott & Tu"]
    L1A --> L5C["Level 5C: Aluffi Chapter 0"]
    L2 --> L5B
    L4 --> L5A
```

## The Course Map

The reader arrives knowing how to read. The course builds the rest in
dependency order: logic before counting, counting before the number line, the
number line before algebra, algebra before structure, structure before the
continuum, and the continuum before everything that measures it. Eleven
chapters are written (five consolidated in the linear algebra page); the full
course is fifty-two chapters across eleven stages.

<div class="table-wrap">

| Chapter | Title | Status |
|---|---|---|
| **Stage A — Reasoning** (no numbers) | | |
| A1 | Propositions, quantifiers, and what a proof is | queued |
| A2 | Sets: membership, products, power sets | queued |
| A3 | Relations: order, equivalence (the machinery every construction uses) | queued |
| A4 | Functions: injections, surjections, bijections, composition | queued |
| A5 | Proof strategies in action: the false proof, dissected | queued |
| **Stage B — Counting** | | |
| B1 | The Peano axioms: what counting *is* | queued |
| B2 | Addition defined recursively; its laws proved | queued |
| B3 | Multiplication, order, exponentiation: all theorems | queued |
| B4 | Division with remainder; the Archimedean property | queued |
| **Stage C — Expanding the line** | | |
| C1 | The failure of subtraction; $\mathbb{Z}$ as difference classes | queued |
| C2 | The failure of division; $\mathbb{Q}$ as fraction classes; density | queued |
| C3 | The first crisis: $x^2 = 2$ has no rational solution | queued |
| **Stage D — The continuum** | | |
| D1 | Dedekind cuts: $\mathbb{R}$ constructed from order alone | queued |
| D2 | Arithmetic and completeness of $\mathbb{R}$, proved | queued |
| D3 | Decimals, roots, the place of $\mathbb{Q}$ inside $\mathbb{R}$ | queued |
| D4 | Cardinality: countable $\mathbb{Q}$, uncountable $\mathbb{R}$ | queued |
| **Stage E — Completing algebra** | | |
| E1 | Polynomials as formal objects | queued |
| E2 | $\mathbb{C}$ built as pairs with a multiplication rule | queued |
| E3 | The fundamental theorem of algebra — *declared*, discharged at K3 | queued |
| **Stage F — Structure and linear algebra** | | |
| F1 | Categories: objects, morphisms, universal properties, adjunctions | written |
| F2 | Vector spaces, linear maps, dimension | written |
| F3 | Duality and the double dual | written |
| F4 | Quotient spaces and their universal property | written |
| F5 | Determinants as alternating forms | written |
| F6 | Exterior algebra | written |
| F7 | Eigenstructure, triangularisation, Cayley–Hamilton | written |
| F8 | Inner products, orthogonality, the spectral theorem | written |
| F9 | Canonical forms: what remains when diagonalisation fails | queued |
| **Stage G — The canvas** | | |
| G1 | Metric and topological spaces, continuity, homeomorphism | written |
| G2 | Connectedness and compactness; the IVT and EVT as theorems of space | written |
| G3 | The quotient topology and topological constructions | queued |
| G4 | Convergence, completeness, and the $p$-adic warning | queued |
| G5 | Separation axioms, countability, metrisation | queued |
| **Stage H — Calculus as linearisation** | | |
| H1 | Smooth manifolds: charts, atlases, smooth maps | written |
| H2 | Tangent spaces, the differential, the inverse function theorem | written |
| H3 | Differential forms and the exterior derivative | written |
| H4 | Integration, orientation, and Stokes | written |
| H5 | Submanifolds, immersions, regular level sets | queued |
| H6 | Lie groups and group actions | queued |
| **Stage I — Measure** | | |
| I1 | $\sigma$-algebras and measures | queued |
| I2 | The Lebesgue integral: Carathéodory | queued |
| I3 | Modes of convergence | queued |
| I4 | $L^p$ spaces and duality | queued |
| I5 | Product measures and Fubini–Tonelli | queued |
| I6 | Radon–Nikodym and conditional expectation | queued |
| I7 | Fourier series and the Fourier transform | queued |
| **Stage J — Complex analysis** | | |
| J1 | Holomorphy: complex differentiability and its rigidity | queued |
| J2 | Complex integration, Cauchy's theorem, residues | queued |
| J3 | The fundamental theorem of algebra, *proved* — the ledger closes | queued |
| **Stage K — Algebra and symmetry** | | |
| K1 | Groups through the categorical lens | queued |
| K2 | Rings and modules | queued |
| K3 | Galois theory: symmetry of equations | queued |

</div>

Stages A through E are the foundations build: the floor of the entire course,
constructed ahead of everything else under the zero-knowledge contract. The
declared-input ledger has one open debt — the fundamental theorem of algebra,
declared at F7 — discharged at J3, roughly forty chapters later. That gap is
the point: the reader watches mathematics borrow against its own future and
pay the debt in full.

The reference tracks in the sidebar remain the encyclopaedia; this course is
the path through it.

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
