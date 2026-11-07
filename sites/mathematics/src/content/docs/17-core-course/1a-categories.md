---
date: 2026-10-24T00:00:00+00:00
title: "Level 1A: Categories – The Language of Mathematics"
description: "Category theory from first principles: objects, morphisms, universal properties, functors, and natural transformations – teaching you to think in arrows and compositions before touching numbers or coordinates."
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
structure is *relational* rather than *elemental* – a topological space is not
its underlying set (many different topologies on the same set), and a group is
not its underlying set (many different group structures). Category theory shifts
the primitive from elements to **arrows**: what matters about an object is not
what it contains but how it relates to other objects.

**The One-Line Reveal.** Read the definition of a category below. Close the page.
Try to verify the axioms in **Set** (objects = sets, morphisms = functions). The
axioms hold because function composition is associative and identity functions
exist – and that verification *is* the proof that Set is a category.

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
axiom – once for each identity morphism. The pattern (use one axiom, then the
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
associative, and the identity matrix is the identity morphism. Choosing a
basis identifies $\mathbf{Vect}_k^{\mathrm{fd}}$ (finite-dimensional vector
spaces) with this matrix category: every finite-dimensional space is
isomorphic to some $k^n$, and once bases are fixed, linear maps are exactly
matrices. The matrix category also shows that the axioms never mention
elements: the object $n$ is not a set at all. The table names categories that later levels build, on purpose:
category theory is the language the course will speak. Work with $\mathbf{Set}$
today; $\mathbf{Top}$ and $\mathbf{Vect}_k$ become fully built examples in their
own levels, and the table is a map of where the course is going, not a list of
prerequisites.


**Quick check.**

1. What two axioms must a category's composition satisfy?
2. In $\mathbf{Set}$, what is the identity morphism of a set $A$?
3. Name a category whose objects are not sets.
4. How many identity morphisms can an object have?
5. What does the type $\operatorname{Hom}(B,C) \times \operatorname{Hom}(A,B) \to \operatorname{Hom}(A,C)$ encode about composability?

*Answers:* **1.** Associativity; an identity morphism for every object. **2.** The identity function $\operatorname{id}_A$. **3.** $\mathbf{Mat}_k$: objects are natural numbers, morphisms are matrices. **4.** Exactly one (Theorem 1.1). **5.** The codomain of the first arrow must be the domain of the second.


## 2. Monomorphisms, Epimorphisms, and Isomorphisms

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

To show $f$ is epi: suppose $h_1 \circ f = h_2 \circ f$ for $h_1, h_2: B \to
C$. Compose both sides with $g$ on the right:
$h_1 \circ (f \circ g) = h_2 \circ (f \circ g)$, and $f \circ g =
\operatorname{id}_B$, so $h_1 = h_2$. $\blacksquare$

**The One-Line Reveal.** The proof's pivot is composing with the inverse $g$ –
canceling $f$ using its inverse. The same cancellation works for any
isomorphism in any category.

**Caution.** The converse fails: a morphism that is both mono and epi need not
be an isomorphism. (In $\mathbf{Set}$ it does hold, because mono and epi are
exactly injective and surjective, and injective plus surjective is bijective;
the category axioms alone are too weak to force it.) Work in $\mathbf{Mon}$,
the category of monoids (a set with an associative binary operation and an
identity element) and functions preserving both. The inclusion
$\mathbb{N} \hookrightarrow \mathbb{Z}$ of the natural numbers into the
integers, both under addition, is mono: it is injective, and if
$f \circ u = f \circ v$ for $u, v: X \to \mathbb{N}$ then $f(u(x)) = f(v(x))$
for every $x \in X$, so $u(x) = v(x)$ by injectivity. It is epi: let
$f, g: \mathbb{Z} \to M$ be monoid homomorphisms agreeing on $\mathbb{N}$, so
in particular $f(1) = g(1)$. A homomorphism out of $\mathbb{Z}$ is determined
by the image of $1$: for $k \geq 0$ additivity gives $f(k) = k f(1)$, and for
$k < 0$ we have $f(k) + f(-k) = f(0) = 0_M$, so $f(k)$ is a two-sided additive
inverse of $f(-k) = (-k)f(1)$, and two-sided inverses are unique (if
$y + x = x + y = 0$ and $z + x = x + z = 0$, then
$y = y + 0 = y + (x + z) = (y + x) + z = 0 + z = z$). So $f$ and $g$ agree
everywhere. But the inclusion is not an isomorphism: a retraction
$\mathbb{Z} \to \mathbb{N}$ would have to send $-1$ to a natural number $n$
with $n + 1 = 0$, and there is no such natural number.


**Quick check.**

1. State monomorphism in one line.
2. What is the pivot of Theorem 2.1's proof?
3. Why is $\mathbb{N} \hookrightarrow \mathbb{Z}$ epi in $\mathbf{Mon}$?
4. Why does mono plus epi give an isomorphism in $\mathbf{Set}$?
5. What is a split epimorphism?

*Answers:* **1.** $f \circ g_1 = f \circ g_2$ forces $g_1 = g_2$, for all pairs into the domain. **2.** Composing with the inverse $g$ cancels $f$. **3.** A homomorphism out of $\mathbb{Z}$ is pinned by $f(1)$, since $f(-1)$ is the unique two-sided inverse of $f(1)$. **4.** Mono is injective and epi is surjective there. **5.** There is $g$ with $f \circ g = \operatorname{id}_B$.


## 3. Universal Properties

**Definition.** An object $T$ in $\mathcal{C}$ is **terminal** if for every object
$A$, there exists a unique morphism $A \to T$. An object $I$ is **initial** if for
every object $A$, there exists a unique morphism $I \to A$.

**Theorem 3.1.** Terminal objects are unique up to unique isomorphism.

**Proof.** Let $T$ and $T'$ be terminal. Since $T'$ is terminal, there exists
$f: T \to T'$. Since $T$ is terminal, there exists $g: T' \to T$. Now $f \circ g:
T' \to T'$ is a morphism from $T'$ to itself. Since $T'$ is terminal, there is
exactly one morphism $T' \to T'$ – namely $\operatorname{id}_{T'}$. So
$f \circ g = \operatorname{id}_{T'}$. Symmetrically, $g \circ f =
\operatorname{id}_T$. So $f: T \cong T'$, and $g = f^{-1}$ is the unique such
isomorphism (any other $g'$ with $f \circ g' = \operatorname{id}_{T'}$ would
satisfy $g' = g$ by the same uniqueness argument). $\blacksquare$

**The One-Line Reveal.** The proof uses the *definition* of terminal twice: once
to get $f$, once to get $g$, then the uniqueness of morphisms from a terminal
object forces the compositions to be identities.

**Examples of universal properties as terminal/initial objects:**

- The **product** $A \times B$ comes with projections $\pi_A: A \times B \to A$
  and $\pi_B: A \times B \to B$, and is characterised by: for every object $C$
  with maps $f: C \to A$ and $g: C \to B$, there exists a *unique* $h: C \to
  A \times B$ with $\pi_A \circ h = f$ and $\pi_B \circ h = g$. In
  $\mathbf{Set}$, $h$ sends $x$ to the pair $(f(x), g(x))$, and nothing else
  could work. The content of the definition is the existence and uniqueness of
  $h$, not what the elements of $A \times B$ are.
- The **kernel** of a group homomorphism $\varphi: G \to H$ comes with an
  inclusion $\ker \varphi \to G$, and it is universal among that data: any
  homomorphism $k: K \to G$ with $\varphi \circ k$ the trivial map factors
  uniquely through $\ker \varphi$.
- The **disjoint union** $A \sqcup B$ comes with injections $A \to A \sqcup B$
  and $B \to A \sqcup B$, and is characterised dually: it is initial among
  objects $C$ equipped with maps from $A$ and from $B$, meaning every such pair
  of maps extends uniquely to a map $A \sqcup B \to C$.

Every universal property says: *this object is the unique (up to unique
isomorphism) solution to a certain mapping problem.* The problem is always of
one shape: be the target of exactly one arrow from every object in a certain
configuration.


**Quick check.**

1. Define terminal and initial objects.
2. What does unique up to unique isomorphism give for two terminal objects?
3. State the product's universal property.
4. State the kernel's universal property.
5. How does the disjoint union dualise the product?

*Answers:* **1.** Terminal: every object has exactly one arrow to it; initial: exactly one from it. **2.** An isomorphism $T \cong T'$, and it is the only one compatible with the universal arrows. **3.** Projections $\pi_A, \pi_B$; every pair $f: C \to A$, $g: C \to B$ factors uniquely through $h: C \to A \times B$. **4.** Every $k: K \to G$ with $\varphi \circ k$ trivial factors uniquely through $\ker \varphi \to G$. **5.** Every pair of maps from $A$ and from $B$ extends uniquely to a map $A \sqcup B \to C$.


## 4. Functors

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
$g \circ f = \operatorname{id}$" – the functorial axioms do the rest.

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


**Quick check.**

1. What two laws define a functor?
2. What do functors do to isomorphisms?
3. What does the forgetful functor $\mathbf{Grp} \to \mathbf{Set}$ forget?
4. In what sense is the fundamental group a functor?
5. Give one functor from this page and one thing it preserves or forgets.

*Answers:* **1.** $F(\operatorname{id}_A) = \operatorname{id}_{F(A)}$ and $F(g \circ f) = F(g) \circ F(f)$. **2.** Carry them to isomorphisms (Theorem 4.1). **3.** The group structure; it keeps the underlying set and functions. **4.** Continuous pointed maps induce group homomorphisms, compatibly with composition. **5.** For instance: $U$ forgets; $\pi_1$ preserves loop composition.


## 5. Natural Transformations and Adjunctions

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
\mathcal{D}$ and $G: \mathcal{D} \to \mathcal{C}$ is, for every pair of objects
$A$ of $\mathcal{C}$ and $B$ of $\mathcal{D}$, a bijection

$$
\Phi_{A,B}: \operatorname{Hom}_{\mathcal{D}}(F(A), B) \cong \operatorname{Hom}_{\mathcal{C}}(A, G(B))
$$

natural in both variables: for every $a: A' \to A$ in $\mathcal{C}$ and every
$b: B \to B'$ in $\mathcal{D}$,

$$
\Phi_{A',B}(h \circ F(a)) = \Phi_{A,B}(h) \circ a,
\qquad
\Phi_{A,B'}(b \circ h) = G(b) \circ \Phi_{A,B}(h).
$$

We write $F \dashv G$ ($F$ is left adjoint, $G$ is right adjoint).

**Example: Free ⊣ Forgetful.** The free group functor $F: \mathbf{Set} \to
\mathbf{Grp}$ is left adjoint to the forgetful functor $U: \mathbf{Grp} \to
\mathbf{Set}$:

$$
\operatorname{Hom}_{\mathbf{Grp}}(F(S), G) \cong \operatorname{Hom}_{\mathbf{Set}}(S, U(G)).
$$

This says: a group homomorphism from the free group on $S$ to $G$ is exactly a
function from $S$ to $G$ – the images of the generators freely determine the
homomorphism. This bijection is natural in both $S$ and $G$.

**Why adjunctions matter.** An adjunction captures the concept of "the most
efficient solution to a universal problem." The free group is the *most
efficient* way to turn a set into a group – no extra relations, no wasted
structure. Adjunctions formalise this efficiency, and they appear throughout
mathematics: the tensor-hom adjunction in algebra, the product-hom adjunction
in topology, the base-change adjunction in geometry.


**Quick check.**

1. State the naturality square of $\eta: F \Rightarrow G$.
2. What does an adjunction assign to each pair $A, B$?
3. Which two naturality equations did the adjunction definition demand?
4. What do the free and forgetful functors form?
5. In words: what does $\operatorname{Hom}_{\mathbf{Grp}}(F(S), G) \cong \operatorname{Hom}_{\mathbf{Set}}(S, U(G))$ say?

*Answers:* **1.** $G(f) \circ \eta_A = \eta_B \circ F(f)$. **2.** A bijection $\operatorname{Hom}_{\mathcal{D}}(F(A), B) \cong \operatorname{Hom}_{\mathcal{C}}(A, G(B))$. **3.** $\Phi_{A',B}(h \circ F(a)) = \Phi_{A,B}(h) \circ a$ and $\Phi_{A,B'}(b \circ h) = G(b) \circ \Phi_{A,B}(h)$. **4.** An adjunction $F \dashv U$. **5.** A homomorphism from the free group on $S$ is exactly a function from $S$ into $G$.


## 6. Problems

1. Verify that $\mathbf{Mat}_k$ satisfies the category axioms. (§1 –
   composition is matrix multiplication, so associativity of composition is
   associativity of matrix multiplication, proved entrywise:
   $((AB)C)_{ij} = \sum_l (AB)_{il}C_{lj} = \sum_{l,m} A_{im}B_{ml}C_{lj} =
   (A(BC))_{ij}$.)
2. Prove that the empty set $\emptyset$ is an initial object in $\mathbf{Set}$.
   (§3 – for every set $A$, there exists a unique function $\emptyset \to A$
   because there are no elements to map.)
3. Prove that if $f: A \to B$ is both mono and split epi (there exists $g: B
   \to A$ with $f \circ g = \operatorname{id}_B$), then $f$ is an isomorphism.
   (§2 – $f \circ (g \circ f) = (f \circ g) \circ f = f = f \circ
   \operatorname{id}_A$; cancelling the mono $f$ on the left gives
   $g \circ f = \operatorname{id}_A$.)
4. Show that the forgetful functor $U: \mathbf{Grp} \to \mathbf{Set}$ is
   faithful but not full. (§4 – faithful: distinct homomorphisms are distinct
   functions; not full: not every function between underlying sets is a
   homomorphism.)
5. Let $F, F': \mathcal{C} \to \mathcal{D}$ both be left adjoint to the same
   $G: \mathcal{D} \to \mathcal{C}$. Show that the adjunction bijections
   $\operatorname{Hom}_{\mathcal{D}}(F(A), B) \cong \operatorname{Hom}_{\mathcal{C}}(A, G(B))
   \cong \operatorname{Hom}_{\mathcal{D}}(F'(A), B)$ can be composed to give a
   natural bijection $\operatorname{Hom}_{\mathcal{D}}(F(A), B) \cong
   \operatorname{Hom}_{\mathcal{D}}(F'(A), B)$ for all $A, B$. (§5 – the
   composition of two bijections is a bijection; naturality follows from the
   naturality of each adjunction.)

**Problems.** The quick checks above tested recall. These chain several results and require
full written arguments; hints are included where the jump is large.

8. Prove that initial objects are unique up to unique isomorphism. (Dualise
   Theorem 3.1: reverse every arrow in the proof.)
9. Prove that the composition of isomorphisms is an isomorphism and that
   $(f \circ g)^{-1} = g^{-1} \circ f^{-1}$. (Compose the claimed inverse
   with $f \circ g$ and regroup by associativity; both composites collapse to
   the relevant identity.)
10. Prove that in $\mathbf{Mat}_k$ the isomorphisms are exactly the invertible
    square matrices. (An isomorphism in the category needs two-sided matrix
    inverses: $BC = I$ and $CB = I$ for the same $n$.)

### The One-Line Reveal (for this page)

The entire page follows from one shift: *stop asking what objects contain and
start asking how they relate.* Every definition (mono, epi, terminal, functor,
adjunction) is stated in terms of arrows and commutative diagrams – never in
terms of elements. This is why category theory applies to objects that have no
elements (the category $\mathbf{Mat}_k$), and why it unifies seemingly unrelated
areas (the same universal property describes products in $\mathbf{Set}$,
kernels in $\mathbf{Grp}$, and disjoint unions in $\mathbf{Set}$).

### Where to go next

- [Linear Algebra Done Wrong](/17-core-course/1b-linear-algebra/) – the next
  page: coordinate-free linear algebra with determinants as alternating forms.
- [Conceptual Mathematics](https://archive.org/details/conceptualmathema0000lawv) –
  Lawvere & Schanuel's book, which develops this material at a gentler pace.
- [Algebra: Chapter 0](https://papervine.wordpress.com/wp-content/uploads/2010/06/aluffi-algebra-chapter-0.pdf) –
  Aluffi's book, which treats all of algebra through the categorical lens you
  have just learned.
