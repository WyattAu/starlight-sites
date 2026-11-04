---
date: 2026-10-24T00:00:00+00:00
title: "Level 1A: Categories — The Language of Mathematics"
description: "Category theory from first principles: objects, morphisms, universal properties, functors, and natural transformations — teaching you to think in arrows and compositions before touching numbers or coordinates."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 1A: Categories", "url": "https://mathematics.wyattau.com/17-core-course/1a-categories"}]
}
</script>

**The Defect.** Set-theoretic mathematics defines every object by its elements.
A group is a set with operations; a topological space is a set with open subsets.
This works for elementary mathematics but breaks down for objects whose essential
structure is *relational* rather than *elemental* — a topological space is not
its underlying set (many different topologies on the same set), and a group is
not its underlying set (many different group structures). Category theory shifts
the primitive from elements to **arrows**: what matters about an object is not
what it contains but how it relates to other objects.

**The One-Line Reveal.** Read the definition of a category below. Close the page.
Try to verify the axioms in **Set** (objects = sets, morphisms = functions). The
axioms hold because function composition is associative and identity functions
exist — and that verification *is* the proof that Set is a category.

## 1. Categories and Morphisms

**Definition.** A **category** $\mathcal{C}$ consists of:

- A collection of **objects** $A, B, C, \dots$
- For each pair of objects $A, B$, a collection $\operatorname{Hom}_{\mathcal{C}}(A, B)$
  of **morphisms** (arrows) from $A$ to $B$, written $f: A \to B$
- For each triple $A, B, C$, a **composition** function
  $\operatorname{Hom}(B, C) \times \operatorname{Hom}(A, B) \to \operatorname{Hom}(A, C)$,
  written $(g, f) \mapsto g \circ f$

satisfying:

1. **Associativity**: $h \circ (g \circ f) = (h \circ g) \circ f$ whenever the
   compositions are defined.
2. **Identity**: for every object $A$, there exists $\operatorname{id}_A \in
   \operatorname{Hom}(A, A)$ such that $\operatorname{id}_A \circ f = f$ and
   $g \circ \operatorname{id}_A = g$ for all composable $f, g$.

**Theorem 1.1.** Identity morphisms are unique.

**Proof.** Let $\operatorname{id}_A$ and $\operatorname{id}'_A$ both be identity
morphisms on $A$. Then $\operatorname{id}_A = \operatorname{id}_A \circ
\operatorname{id}'_A$ (since $\operatorname{id}'_A$ is an identity) $=
\operatorname{id}'_A$ (since $\operatorname{id}_A$ is an identity). $\blacksquare$

**The One-Line Reveal.** The proof above is two applications of the identity
axiom — once for each identity morphism. The pattern (use one axiom, then the
other) recurs in every uniqueness proof in category theory.

### Examples

<div class="table-wrap">

| Category | Objects | Morphisms | Composition |
|---|---|---|---|
| $\mathbf{Set}$ | sets | functions | function composition |
| $\mathbf{Grp}$ | groups | group homomorphisms | function composition |
| $\mathbf{Top}$ | topological spaces | continuous maps | function composition |
| $\mathbf{Vect}_k$ | vector spaces over $k$ | linear maps | function composition |
| $\mathbf{Mat}_k$ | natural numbers | $n \times m$ matrices | matrix multiplication |

</div>

The last example ($\mathbf{Mat}_k$) shows that objects need not be sets: the
object $n$ is a natural number (a "dimension"), and the morphisms from $m$ to
$n$ are $n \times m$ matrices. Composition is matrix multiplication, which is
associative, and the identity matrix is the identity morphism. This category is
**equivalent** to $\mathbf{Vect}_k^{\mathrm{fd}}$ (finite-dimensional vector
spaces) — an equivalence that captures the fact that every finite-dimensional
vector space is isomorphic to $k^n$.

### 2. Monomorphisms, Epimorphisms, and Isomorphisms

**Definition.** A morphism $f: A \to B$ is a **monomorphism** (mono) if for all
$g_1, g_2: C \to A$, $f \circ g_1 = f \circ g_2$ implies $g_1 = g_2$.

**Definition.** A morphism $f: A \to B$ is an **epimorphism** (epi) if for all
$h_1, h_2: B \to C$, $h_1 \circ f = h_2 \circ f$ implies $h_1 = h_2$.

**Definition.** A morphism $f: A \to B$ is an **isomorphism** if there exists
$g: B \to A$ with $g \circ f = \operatorname{id}_A$ and $f \circ g =
\operatorname{id}_B$. We write $f: A \cong B$.

**Theorem 2.1.** Every isomorphism is both a monomorphism and an epimorphism.

**Proof.** Let $f: A \to B$ be an isomorphism with inverse $g: B \to A$. To show
$f$ is mono: suppose $f \circ g_1 = f \circ g_2$ for $g_1, g_2: C \to A$. Compose
both sides with $g$ on the left:

$$
g \circ f \circ g_1 = g \circ f \circ g_2
\implies (g \circ f) \circ g_1 = (g \circ f) \circ g_2
\implies \operatorname{id}_A \circ g_1 = \operatorname{id}_A \circ g_2
\implies g_1 = g_2.
$$

The proof for epi is dual (compose on the other side). $\blacksquare$

**The One-Line Reveal.** The proof's pivot is composing with the inverse $g$ —
canceling $f$ using its inverse. The same cancellation works for any
isomorphism in any category.

**Caution.** The converse fails: a morphism that is both mono and epi need not
be an isomorphism. In $\mathbf{Top}$, the inclusion $[0, 1) \hookrightarrow
[0, 1]$ is both mono and epi (because continuous maps into Hausdorff spaces are
determined by dense subsets) but is not a homeomorphism.

### 3. Universal Properties

**Definition.** An object $T$ in $\mathcal{C}$ is **terminal** if for every object
$A$, there exists a unique morphism $A \to T$. An object $I$ is **initial** if for
every object $A$, there exists a unique morphism $I \to A$.

**Theorem 3.1.** Terminal objects are unique up to unique isomorphism.

**Proof.** Let $T$ and $T'$ be terminal. Since $T'$ is terminal, there exists
$f: T \to T'$. Since $T$ is terminal, there exists $g: T' \to T$. Now $f \circ g:
T' \to T'$ is a morphism from $T'$ to itself. Since $T'$ is terminal, there is
exactly one morphism $T' \to T'$ — namely $\operatorname{id}_{T'}$. So
$f \circ g = \operatorname{id}_{T'}$. Symmetrically, $g \circ f =
\operatorname{id}_T$. So $f: T \cong T'$, and $g = f^{-1}$ is the unique such
isomorphism (any other $g'$ with $f \circ g' = \operatorname{id}_{T'}$ would
satisfy $g' = g$ by the same uniqueness argument). $\blacksquare$

**The One-Line Reveal.** The proof uses the *definition* of terminal twice: once
to get $f$, once to get $g$, then the uniqueness of morphisms from a terminal
object forces the compositions to be identities.

**Examples of universal properties as terminal/initial objects:**

- The **product** $A \times B$ is characterized by a universal property: for every
  $C$ with maps $f: C \to A$ and $g: C \to B$, there exists a unique $h: C \to
  A \times B$ making the diagram commute. This is not "terminal in
  $\mathcal{C}$" but "terminal in a comma category" — the pattern generalises.
- The **kernel** of a group homomorphism $\varphi: G \to H$ is characterized by
  a universal property in the category of groups over $H$.
- The **disjoint union** $A \sqcup B$ is characterized as the initial object in
  the category of diagrams $A \to C \leftarrow B$.

Every universal property says: *this object is the unique (up to unique
isomorphism) solution to a certain optimisation problem.* The problem is always
"be the target of exactly one arrow from every object in a certain configuration."

### 4. Functors

**Definition.** A **functor** $F: \mathcal{C} \to \mathcal{D}$ between categories
consists of:

- A map on objects: $A \mapsto F(A)$
- A map on morphisms: $f: A \to B \mapsto F(f): F(A) \to F(B)$

satisfying:

1. $F(\operatorname{id}_A) = \operatorname{id}_{F(A)}$
2. $F(g \circ f) = F(g) \circ F(f)$ (composition preserved)

**Theorem 4.1.** Functors preserve isomorphisms: if $f: A \cong B$ then
$F(f): F(A) \cong F(B)$.

**Proof.** Let $g: B \to A$ be the inverse of $f$. Then $F(g) \circ F(f) =
F(g \circ f) = F(\operatorname{id}_A) = \operatorname{id}_{F(A)}$, and
symmetrically $F(f) \circ F(g) = \operatorname{id}_{F(B)}$. So $F(f)$ is an
isomorphism with inverse $F(g)$. $\blacksquare$

**The One-Line Reveal.** The proof is "apply the functor to both sides of
$g \circ f = \operatorname{id}$" — the functorial axioms do the rest.

**Examples:**

- The **forgetful functor** $U: \mathbf{Grp} \to \mathbf{Set}$ sends each group
  to its underlying set and each homomorphism to its underlying function. It
  "forgets" the group structure.
- The **free functor** $F: \mathbf{Set} \to \mathbf{Grp}$ sends each set $S$ to
  the free group on $S$. This is left adjoint to $U$ (see below).
- The **fundamental group** $\pi_1: \mathbf{Top}_* \to \mathbf{Grp}$ sends each
  pointed space to its fundamental group. This is a functor: continuous maps
  induce group homomorphisms, and composition of maps induces composition of
  homomorphisms.

### 5. Natural Transformations and Adjunctions

**Definition.** Given functors $F, G: \mathcal{C} \to \mathcal{D}$, a **natural
transformation** $\eta: F \Rightarrow G$ assigns to each object $A$ a morphism
$\eta_A: F(A) \to G(A)$ such that for every morphism $f: A \to B$, the square

$$
\begin{CD}
F(A) @>{\eta_A}>> G(A) \\
@V{F(f)}VV @VV{G(f)}V \\
F(B) @>>{\eta_B}> G(B)
\end{CD}
$$

commutes: $G(f) \circ \eta_A = \eta_B \circ F(f)$.

**Definition.** An **adjunction** between functors $F: \mathcal{C} \to
\mathcal{D}$ and $G: \mathcal{D} \to \mathcal{C}$ is a natural isomorphism

$$
\operatorname{Hom}_{\mathcal{D}}(F(A), B) \cong \operatorname{Hom}_{\mathcal{C}}(A, G(B))
$$

for all objects $A$ of $\mathcal{C}$ and $B$ of $\mathcal{D}$. We write $F
\dashv G$ ($F$ is left adjoint, $G$ is right adjoint).

**Example: Free ⊣ Forgetful.** The free group functor $F: \mathbf{Set} \to
\mathbf{Grp}$ is left adjoint to the forgetful functor $U: \mathbf{Grp} \to
\mathbf{Set}$:

$$
\operatorname{Hom}_{\mathbf{Grp}}(F(S), G) \cong \operatorname{Hom}_{\mathbf{Set}}(S, U(G)).
$$

This says: a group homomorphism from the free group on $S$ to $G$ is exactly a
function from $S$ to $G$ — the images of the generators freely determine the
homomorphism. This bijection is natural in both $S$ and $G$.

**Why adjunctions matter.** An adjunction captures the concept of "the most
efficient solution to a universal problem." The free group is the *most
efficient* way to turn a set into a group — no extra relations, no wasted
structure. Adjunctions formalise this efficiency, and they appear throughout
mathematics: the tensor-hom adjunction in algebra, the product-hom adjunction
in topology, the base-change adjunction in geometry.

### 6. Self-test

1. Verify that $\mathbf{Mat}_k$ satisfies the category axioms. Which axiom of
   matrix algebra guarantees associativity? (§1 — associativity of matrix
   multiplication.)
2. Prove that the empty set $\emptyset$ is an initial object in $\mathbf{Set}$.
   (§3 — for every set $A$, there exists a unique function $\emptyset \to A$
   because there are no elements to map.)
3. Prove that if $f: A \to B$ is both mono and split epi (there exists $g: B
   \to A$ with $f \circ g = \operatorname{id}_B$), then $f$ is an isomorphism.
   (§2 — $g \circ f \circ g = f \circ \operatorname{id}_B \circ g = g$, cancel
   the mono $g$ on the left.)
4. Show that the forgetful functor $U: \mathbf{Grp} \to \mathbf{Set}$ is
   faithful but not full. (§4 — faithful: distinct homomorphisms are distinct
   functions ✓; not full: not every function between underlying sets is a
   homomorphism.)
5. Prove that adjoints are unique up to natural isomorphism. (§5 — if $F
   \dashv G$ and $F' \dashv G$, then $\operatorname{Hom}(F(A), B) \cong
   \operatorname{Hom}(F'(A), B)$ naturally in $A$ and $B$, which by Yoneda
   gives $F \cong F'$.)

### The One-Line Reveal (for this page)

The entire page follows from one shift: *stop asking what objects contain and
start asking how they relate.* Every definition (mono, epi, terminal, functor,
adjunction) is stated in terms of arrows and commutative diagrams — never in
terms of elements. This is why category theory applies to objects that have no
elements (the category $\mathbf{Mat}_k$), and why it unifies seemingly unrelated
areas (the same universal property describes products in $\mathbf{Set}$,
free groups in $\mathbf{Grp}$, and pullbacks in $\mathbf{Top}$).

### Where to go next

- [Linear Algebra Done Wrong](/17-core-course/1b-linear-algebra/) — the next
  page: coordinate-free linear algebra with determinants as alternating forms.
- [Conceptual Mathematics](https://archive.org/details/conceptualmathema0000lawv) —
  Lawvere & Schanuel's book, which develops this material at a gentler pace.
- [Algebra: Chapter 0](https://papervine.wordpress.com/wp-content/uploads/2010/06/aluffi-algebra-chapter-0.pdf) —
  Aluffi's book, which treats all of algebra through the categorical lens you
  have just learned.
