---
date: 2026-07-23T21:57:32+01:00
title: Introduction to Algebraic Topology
tags:
  - University Maths
description: "Fundamental groups, van Kampen, singular and simplicial homology, and cohomology: the algebraic invariants that turn questions about holes and loops into computations you can carry out."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "9_introduction To Algebraic Topology", "url": "https://mathematics.wyattau.com/9-topology/9_introduction-to-algebraic-topology"}]
}
</script>

Algebraic topology works by attaching an algebraic invariant to a space and then
computing that invariant. The fundamental group measures one-dimensional holes.
Homology measures holes of every dimension, and it does so in a form where the
two halves of the story -- "chains" and "cycles" -- are actual algebraic objects
you can manipulate. The entire subject is the observation that the pieces fit:
the fundamental group is $H_1$ with extra structure, and the long exact sequence
of a pair is what makes the two fit together.

The progression below is deliberate. Sections 9.1 to 9.5 build the fundamental
group from scratch and give the one theorem (van Kampen) that lets you compute it
for a space assembled from pieces. Sections 9.6 to 9.9 introduce chains, cycles
and boundaries, then homology, then the two tools that make homology usable --
the long exact sequence and Mayer-Vietoris -- and then the duality and
cohomology that close the subject. Every computation is worked in full.

## Intuition

Picture a doughnut. Walk a loop around the hole: it does not contract, and that
failure is recorded by an integer -- how many times you went round. Now put a
second handle on the doughnut and ask the same question: you need two integers.
Now ask about a *void* rather than a handle: a loop tells you nothing, because a
void is not something a loop can detect. That is the limitation that motivates
homology: the fundamental group sees tunnels but is blind to cavities, and it
does so because a loop is a one-dimensional object and a cavity is
three-dimensional.

Homology fixes this by letting the investigator choose the dimension. $H_k$ is
built from $k$-dimensional chains, so $H_1$ sees tunnels, $H_2$ sees the middle
sphere of a double doughnut, and $H_3$ sees cavities. The price is that the
fundamental group's non-abelian information is lost -- and it is genuinely lost,
not hidden, which is why both theories exist rather than one replacing the
other. The relationship is exact: the abelianisation of $\pi_1(X)$ is $H_1(X)$.

The second intuition is that a boundary is a *degeneracy*. A triangle bounds a
filled-in region; a loop is a triangle whose filling is missing. Homology is
built by declaring "everything that bounds something is zero" -- the quotient of
chains by boundaries. What survives the quotient is the thing with no filling,
which is precisely the hole.

## 9.1 Homotopy

**Definition.** Two continuous maps $f, g : X \to Y$ are **homotopic** (written
$f \simeq g$) if there is a continuous $H : X \times [0,1] \to Y$ with
$H(x, 0) = f(x)$ and $H(x, 1) = g(x)$ for all $x$.

**Definition.** Spaces $X$ and $Y$ are **homotopy equivalent** ($X \simeq Y$) if
$f : X \to Y$ and $g : Y \to X$ satisfy $g \circ f \simeq \operatorname{id}_X$ and
$f \circ g \simeq \operatorname{id}_Y$.

**Example.** $D^2 = \{(x,y) : x^2 + y^2 \leq 1\}$ is homotopy equivalent to a
point -- it is **contractible**, via $H(x, t) = (1-t)x$.

Homotopy equivalence is much weaker than homeomorphism: $\mathbb{R}^n \simeq \{*\}$
but the two are not homeomorphic. It is still an equivalence relation, and
concordance classes of maps between two fixed spaces are exactly the homotopy
classes of maps -- which is what makes $\pi_1$ well defined.

## 9.2 The Fundamental Group

**Definition.** A **loop** in $X$ based at $x_0$ is a continuous
$\gamma : [0,1] \to X$ with $\gamma(0) = \gamma(1) = x_0$.

**Definition.** $\pi_1(X, x_0)$ is the set of homotopy classes of loops based at
$x_0$, under concatenation. Reversal of orientation is inversion, and the
identity is the class of the constant loop. For path-connected $X$ the group is
independent of $x_0$ up to isomorphism.

The group law is *concatenation of representatives*, and this is the step where
students routinely get it wrong: the product $[\gamma][\delta]$ is represented by
the loop that traces $\gamma$ and then $\delta$. It is well defined on classes
precisely because concatenation respects homotopy.

**Example.** $\pi_1(S^1) \cong \mathbb{Z}$, and the isomorphism is the winding
number. Given a loop $\gamma$ in $S^1$, lift it to $\mathbb{R}$ via
$p(t) = e^{2\pi i t}$; because $\gamma$ closes up, the lift satisfies
$\tilde{\gamma}(1) = \tilde{\gamma}(0) + n$ for a unique $n \in \mathbb{Z}$,
and $n$ is the winding number. Homotopic loops have the same $n$ because a
homotopy lifts to a homotopy in $\mathbb{R}$, which keeps the endpoint
difference fixed.

**Example.** $\pi_1(\mathbb{R}^n) = \{e\}$ for all $n \geq 1$, since
$\mathbb{R}^n$ is convex: for a loop $\gamma$ use $H(x, t) = \gamma(tx)$, which
contracts any path to its basepoint.

**Example.** $\pi_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}$. Loops are
classified by a pair of winding numbers, one for each generator of the torus's
fundamental group.

**Example.** $\pi_1(S^1 \vee S^1)$ is the free group $F_2$ on two generators, and
is **not** abelian. This is the standard warning: $\pi_1$ is a genuine
non-abelian invariant, unlike $H_1$ below.

## 9.3 Simply Connected Spaces

**Definition.** A path-connected space $X$ is **simply connected** if
$\pi_1(X) \cong \{e\}$, that is, if every loop contracts to a point.

**Proposition.** $\mathbb{R}^n$, $S^n$ for $n \geq 2$, and every convex subset of
$\mathbb{R}^n$ are simply connected.

The assertion about $S^n$ for $n \geq 2$ is a theorem (the sphere is
$n$-connected for $n \geq 2$) and not a consequence of the convexity argument,
which is worth noticing: $S^n$ is *not* convex, and the failure of the naive
argument is what makes the result interesting.

## 9.4 Covering Spaces

**Definition.** A continuous surjection $p : \tilde{X} \to X$ is a **covering
map** if every $x \in X$ has a neighbourhood $U$ with
$p^{-1}(U) = \bigsqcup_i \tilde{U}_i$, each $\tilde{U}_i \mapsto U$ a
homeomorphism.

**Example.** $\mathbb{R} \to S^1$, $t \mapsto e^{2\pi i t}$, is a universal
cover: the preimage of any small arc is a disjoint union of open intervals.

**Theorem (Lifting).** If $p : \tilde{X} \to X$ is a covering, $\tilde{X}$ is
path-connected and locally path-connected, $Y$ is locally path-connected,
$\tilde{y}_0 \in p^{-1}(y_0)$ and $f : Y \to X$ a map with $f(y_0) = p(\tilde{y}_0)$,
then $f$ lifts uniquely to $\tilde{f} : Y \to \tilde{X}$.

This theorem is what makes coverings computable. Take a loop $\gamma$ at $y_0$
and lift it starting from $\tilde{y}_0$; where the lift *ends* records the
element of $\pi_1$. For $\mathbb{R} \to S^1$ the endpoint is $\tilde{y}_0 + n$,
and $n$ is the winding number -- which is the proof of $\pi_1(S^1) \cong \mathbb{Z}$
promised in 9.2, and the reason coverings and the fundamental group are the same
subject viewed twice.

## 9.5 Computing $\pi_1$ by Van Kampen

You cannot compute $\pi_1$ of an arbitrary space directly. van Kampen is what
makes the fundamental group practical: it computes it from a decomposition of the
space into two open sets you already understand.

**Theorem (Seifert--van Kampen).** Let $X = U \cup V$ with $U, V$ open and
path-connected, $U \cap V$ path-connected, and let $x_0 \in U \cap V$. Then
$\pi_1(X, x_0)$ is the pushout

$$
\pi_1(U, x_0) *_{\pi_1(U \cap V, x_0)} \pi_1(V, x_0)
$$

that is, the quotient of the free product $\pi_1(U) * \pi_1(V)$ by the normal
closure of $\{(i_U(\gamma), i_V(\gamma)^{-1}) : \gamma \in \pi_1(U \cap V)\}$,
where the inclusions into $U$ and $V$ are induced by a path from $x_0$ into each
set. If $U \cap V$ has two or more components, add generators for those
components and no relations.

**Worked Example.** Let $X = S^1 \vee S^1$ (the figure eight). Take
$U = S^1 \vee \{*\}$ and $V = \{*\} \cup S^1$, each a full copy of $S^1$, and
$U \cap V$ contractible. Then

$$
\pi_1(X) = \pi_1(U) * \pi_1(V) / \langle\!\langle \ \rangle\!\rangle
= \mathbb{Z} * \mathbb{Z} = F_2
$$

with no relations to impose, because $\pi_1(U \cap V)$ is trivial. This is the
mechanism behind every familiar computation: *gluing two spaces along something
simply connected produces a free product.*

**Worked Example.** A genus-$g$ orientable surface $\Sigma_g$ is a sphere with $g$
handles attached. Remove a small disc from each of the $g$ handles and let $U$ be
the sphere with $g$ holes, $V$ the union of the $g$ discs. Each boundary circle is
a generator of $\pi_1(U)$, and $U$ deformation-retracts onto a wedge of $g$
circles, so $\pi_1(U) = F_g$; $V$ is a disjoint union of contractible discs;
$U \cap V$ is $g$ disjoint circles, so $\pi_1(U \cap V) = \mathbb{Z}^g$. Van Kampen
with several components imposes no relations, hence

$$
\pi_1(\Sigma_g) \cong F_g, \qquad \pi_1(\Sigma_1) = F_1 = \mathbb{Z}
$$

the torus, recovering 9.2. Notice that $\Sigma_2$ has $\pi_1 = F_2$, the same as
the figure eight, but $\Sigma_2$ is *not* homeomorphic to it: $\Sigma_2$ has a
2-dimensional hole and the figure eight does not. $\pi_1$ cannot see that
difference. That is the precise limitation homology was invented to remove.

## 9.6 Chains, Cycles and Boundaries

Everything up to here has measured one-dimensional holes. To measure holes of
other dimensions, the algebra has to be built from scratch, and it is built by
mirroring the definition of singular $k$-simplices on the geometric picture.

**Definition.** A **singular $k$-simplex** is a continuous map
$\sigma : \Delta^k \to X$, where $\Delta^k \subset \mathbb{R}^{k+1}$ is the standard
$k$-simplex. Write $C_k(X)$ for the free abelian group on all singular
$k$-simplices; elements are finite formal sums $\sum_i n_i \sigma_i$, called
$k$-**chains**.

**Definition.** The **boundary** of a simplex $\sigma$ is
$\partial \sigma = \sum_{i=0}^{k} (-1)^i \left( \sigma \big|_{F_i} \right)$,
where $F_i$ is the $(k-1)$-face of $\Delta^k$ obtained by deleting vertex $i$ and
$\sigma|_{F_i}$ is its restriction, itself a singular $(k-1)$-simplex. This
extends to a homomorphism $\partial_k : C_k(X) \to C_{k-1}(X)$, and
$C_{-1}(X) = 0$.

**Lemma.** $\partial^2 = 0$.

*Proof.* Each $(k-1)$-face of $\sigma$ is counted twice in
$\partial(\partial\sigma)$, with opposite signs, by the parity rule. Explicitly,
a $(k-2)$-face $F$ of $\Delta^k$ is contained in exactly two $(k-1)$-faces, namely
those deleting $i$ and $j$ for the two vertices not in $F$; its coefficients are
$(-1)^i$ and $(-1)^j$ with opposite parity. The terms cancel in pairs. $\blacksquare$

**Definition.** A $k$-chain $c$ is a **cycle** if $\partial c = 0$. The subgroup of
cycles is $Z_k(X)$. A $k$-chain $c$ is a **boundary** if $c = \partial d$ for some
$(k+1)$-chain $d$; these form $B_k(X)$.

**Definition.** The **$k$-th singular homology group** is

$$
H_k(X;\mathbb{Z}) = Z_k(X) \big/ B_k(X)
$$

Two cycles that differ by a boundary represent the same class. The geometric
reading is the whole point: a cycle is a closed surface made of simplices, and it
is *trivial* in homology exactly when it bounds a solid region. A hole is a
closed thing with no filling.

**Example.** $H_0(X;\mathbb{Z}) \cong \mathbb{Z}^{[X^0]}$, a free abelian group on
the path components, where $X^0$ is the set of components. Each point is its own
0-simplex, and it is a cycle vacuously, and it is a boundary only if it is the
boundary of a path to another point. So $H_0$ counts components -- the zeroth
homology group is the first thing the construction gets right.

**Example.** $H_1(S^1) \cong \mathbb{Z}$, $H_1(T^2) \cong \mathbb{Z}^2$,
$H_1(\Sigma_g) \cong \mathbb{Z}^{2g}$, and $H_k(S^n) = 0$ for $k \neq n$ with
$H_n(S^n) = \mathbb{Z}$. The dimension-$n$ generator is the sphere itself.

**Example.** $H_2(\Sigma_g) = 0$ for every $g$, including the torus. This is the
statement that a torus has no two-dimensional hole: cutting it open at one point
leaves a disc, which is contractible. Contrast $H_2(S^2) = \mathbb{Z}$ and
$H_2(\Sigma_2) = \mathbb{Z}$, where the two handles together bound a middle
surface.

## 9.7 The Relationship Between $\pi_1$ and $H_1$

**Theorem.** For any path-connected space $X$, $H_1(X;\mathbb{Z})$ is the
abelianisation of $\pi_1(X)$:

$$
H_1(X;\mathbb{Z}) \cong \pi_1(X) \,/\, [\pi_1(X), \pi_1(X)]
$$

where $[\pi_1, \pi_1]$ is the commutator subgroup.

*Sketch.* Homotopy classes of loops map to $1$-cycles by $\gamma \mapsto \gamma$,
a 1-simplex traversed in order. Concatenation of loops becomes addition of chains.
This map is surjective onto $H_1$ and its kernel is exactly the commutator
subgroup. $\blacksquare$

So the two theories agree on abelian information and $H_1$ throws away exactly
the non-abelian part. For $S^1 \vee S^1$ this gives
$H_1 = \mathbb{Z}^2$ from the free group $F_2$ -- the same group, but now it is
also the homology of $T^2$, and homology has a computation machinery (Mayer-
Vietoris, excision) that the fundamental group does not. That is the trade.

## 9.8 The Long Exact Sequence and Mayer-Vietoris

The long exact sequence is what makes homology usable rather than merely
defined. It lets you compute an unknown group from ones you can compute.

**Theorem (Long exact sequence of a pair).** If $A \subseteq X$ and
$H_*(\partial A) \to H_*(A) \to H_*(X)$ then

$$
\cdots \to H_{k+1}(X, A) \xrightarrow{\partial} H_k(A) \xrightarrow{i_*} H_k(X) \to H_k(X, A) \to H_{k-1}(A) \to \cdots
$$

is exact, where $H_k(X, A) = H_k(X, A)/H_k(A)$ are the **relative** groups.
Exactness at each term means the image of each map equals the kernel of the next.

**Theorem (Mayer-Vietoris).** If $X = A \cup B$ with $A$ and $B$ having
intersection of the homotopy type of a finite disjoint union of circles, then
$\cdots \to H_n(A \cap B) \xrightarrow{\phi} H_n(A) \oplus H_n(B) \xrightarrow{\psi} H_n(X) \to H_{n-1}(A \cap B) \to \cdots$

is exact, where $\phi$ is $(i_{A*}, -i_{B*})$ and $\psi(a, b) = i_{A*}a + i_{B*}b$.

**Worked Example.** Compute $H_*(S^2)$. Write $S^2 = D_+ \cup D_-$ as two closed
hemispheres. Each hemisphere is contractible, so $H_0(D_\pm) = \mathbb{Z}$ and
$H_n(D_\pm) = 0$ for $n \geq 1$. The intersection is the equator $S^1$, with
$H_0 = \mathbb{Z}$ and $H_1 = \mathbb{Z}$.

For $n \geq 2$ the sequence reads
$0 \to 0 \to H_n(S^2) \to 0 \to 0$, so $H_n(S^2) = 0$.

For $n = 1$:
$$
H_1(S^1) \to H_1(D_+) \oplus H_1(D_-) \to H_1(S^2) \to H_0(S^1) \xrightarrow{\phi} H_0(D_+) \oplus H_0(D_-)
$$
which is
$$
\mathbb{Z} \to 0 \to H_1(S^2) \to \mathbb{Z} \xrightarrow{(1,-1)} \mathbb{Z} \oplus \mathbb{Z}.
$$

The map $(1,-1)$ is injective, so exactness forces $H_1(S^2) = 0$. For $n = 0$
the same sequence gives
$$
0 \to \mathbb{Z} \xrightarrow{(1,1)} \mathbb{Z} \oplus \mathbb{Z} \to H_0(S^2) \to 0,
$$
and $\operatorname{coker}(1,1) = \mathbb{Z}$, since $(1,1)$ is injective and its
cokernel is $\mathbb{Z}^2/\langle(1,1)\rangle \cong \mathbb{Z}$. Hence
$H_0(S^2) = \mathbb{Z}$: one component, as it must be.

Collecting: $H_k(S^2) = \mathbb{Z}$ for $k = 0, 2$ and $0$ otherwise. $\blacksquare$

**Worked Example.** Compute $H_*(\Sigma_2)$, the double torus, which has no
closed form and no easy deformation retract. Let $A$ be the sphere, $B$ two discs,
so $\Sigma_2 = A \cup B$. Then $\pi_1$-style, $A$ retracts onto a wedge of two
circles $F_2$, so $H_1(A) = \mathbb{Z}^2$ and $H_0(A) = \mathbb{Z}$; $B$ is a
disjoint union of two discs, so $H_0(B) = \mathbb{Z}^2$, $H_n(B) = 0$ for $n\geq1$;
and $A \cap B$ is two circles, so $H_1 = \mathbb{Z}^2$, $H_0 = \mathbb{Z}^2$.

At $n = 2$:
$$
0 \to H_2(A)\oplus H_2(B) \to H_2(\Sigma_2) \to H_1(A\cap B) \xrightarrow{\phi} H_1(A)\oplus H_1(B)
$$
and $\phi : \mathbb{Z}^2 \to \mathbb{Z}^2 \oplus 0$ sends the two boundary circles
to the two generators of $F_2$, so it is injective. Exactness gives
$H_2(\Sigma_2) = 0$.

At $n = 1$:
$$
H_1(A\cap B) \xrightarrow{\phi} H_1(A)\oplus H_1(B) \to H_1(\Sigma_2) \to H_0(A\cap B) \xrightarrow{\phi} H_0(A)\oplus H_0(B)
$$
is
$$
\mathbb{Z}^2 \xrightarrow{(1,-1)} \mathbb{Z}^2 \to H_1(\Sigma_2) \to \mathbb{Z}^2 \xrightarrow{(1,1)} \mathbb{Z} \oplus \mathbb{Z}^2.
$$

The first map is injective, so $H_1(\Sigma_2) = \operatorname{coker}\,(1,-1) =
\mathbb{Z}^4 / \langle (1,-1) \rangle \cong \mathbb{Z}^3$, since $(1,-1)$ is
primitive and the quotient of $\mathbb{Z}^2$ by a primitive rank-one submodule
is $\mathbb{Z}$. And the last map is injective, so nothing further is contributed.
Hence

$$
H_1(\Sigma_2) \cong \mathbb{Z}^3, \qquad H_2(\Sigma_2) = 0, \qquad H_0(\Sigma_2) \cong \mathbb{Z}
$$

matching $\chi = 2 - 2g = -2 = 1 - 3$. $\blacksquare$

## 9.9 Cohomology

**Definition.** The $k$-th singular **cohomology** group is the dual of homology:

$$
H^k(X;G) = \operatorname{Hom}(H_k(X), G)
$$

for an abelian group $G$. A class $\varphi \in H^k(X; G)$ is a homomorphism
$\varphi : H_k(X) \to G$, and evaluating it on a cycle is a *measurement* of that
cycle. So cohomology measures holes while homology counts them, and for finite
complexes the two are related by a universal coefficient theorem:

$$
0 \to \operatorname{Ext}(H_{k-1}(X), G) \to H^k(X;G) \to \operatorname{Hom}(H_k(X), G) \to 0
$$

which, for $G = \mathbb{Z}$ and $H_{k-1}$ free, gives $H^k(X;\mathbb{Z}) \cong
\operatorname{Hom}(H_k(X), \mathbb{Z})$.

The reason to use cohomology anyway is that it carries a **product**: there are
maps $\smile : H^p \times H^q \to H^{p+q}$, the cup product, and the theorem that
made cohomology indispensable is that they detect structure homology cannot.

**Theorem.** $S^2 \not\simeq \mathbb{R}P^2$.

*Proof.* $\mathbb{R}P^2$ has $H_1(\mathbb{R}P^2) = \mathbb{Z}/2$ -- its
fundamental group is $\mathbb{Z}/2$ and by 9.7 so is its $H_1$ -- whereas
$H_1(S^2) = 0$ by the computation in 9.8. Since homology is a homotopy invariant,
the two spaces are not homotopy equivalent. $\blacksquare$

The stronger statement is that the *cohomology ring* separates spaces homology
cannot. Take $\mathbb{R}P^2$ and $S^2 \vee S^2$: both have the same homology
groups, both have $H^1 \cong 0$, but the cup square of the generator of
$H^1(\mathbb{R}P^2; \mathbb{Z}/2)$ is the generator of
$H^2(\mathbb{R}P^2; \mathbb{Z}/2)$, whereas all products of degree-one classes
on $S^2 \vee S^2$ vanish. The ring remembers what the groups forget. $\blacksquare$

## 9.10 Euler Characteristic

**Definition.** For a finite CW-complex, the **Euler characteristic** is
$\chi(X) = \sum_k (-1)^k c_k$, where $c_k$ is the number of $k$-cells. For a
triangulated surface this is $V - E + F$.

**Theorem.** $\chi$ is a homotopy invariant, and for a finite CW-complex
$\chi(X) = \sum_k (-1)^k \operatorname{rank} H_k(X)$.

<div class="table-wrap">

| Surface                        | $\chi$ |
| ------------------------------ | ------ |
| Sphere $S^2$                   | $2$    |
| Torus $T^2$                    | $0$    |
| Projective plane $\mathbb{R}P^2$ | $1$    |
| Klein bottle                   | $0$    |
| Double torus (genus 2)         | $-2$   |

</div>

For a closed orientable surface of genus $g$, $\chi = 2 - 2g$; for a
non-orientable one, $\chi = 2 - g$. The odd/even signature of $g$ is exactly what
separates the two families, which is why the classification of surfaces reduces
to one integer once orientability is known.

## 9.11 Classification of Surfaces

**Theorem (Classification of compact surfaces).** Every compact connected surface
is homeomorphic to exactly one of: a sphere with $g$ handles (orientable, genus
$g$), or a sphere with $g$ cross-caps (non-orientable, genus $g$).

- **Torus $T^2$** -- a square with opposite edges identified in the same
  direction; $\pi_1 = \mathbb{Z}^2$.
- **Projective plane $\mathbb{R}P^2$** -- $S^2$ with antipodal points identified;
  non-orientable, $\pi_1 = \mathbb{Z}/2$.
- **Klein bottle** -- a square with one pair of edges reversed; non-orientable,
  and cannot be embedded in $\mathbb{R}^3$.

The classification is the payoff of the whole apparatus: an infinite-looking family
of surfaces is indexed by a single integer.

## Key Relationships

- **Homotopy equivalence is weaker than homeomorphism.** $\mathbb{R}^n \simeq
  \{*\}$, yet the two are not homeomorphic.
- **$\pi_1$ detects one-dimensional holes only.** $\Sigma_2$ and $S^1 \vee S^1$
  have the same fundamental group $F_2$ but are not homeomorphic, because
  $\Sigma_2$ has a 2-dimensional hole and $H_2(\Sigma_2) = 0$ records its absence.
- **$H_1$ is the abelianisation of $\pi_1$.** Homology discards exactly the
  non-abelian information, and gains a computation machinery in exchange.
- **Euler characteristic is a homotopy invariant** and equals the alternating
  sum of homology ranks, so it can be computed either way.
- **Coverings relate local and global topology.** The universal cover is
  simply connected, and $\pi_1$ acts on it by deck transformations, so
  $\pi_1(X)$ is literally the symmetry group of the cover.
- **Cohomology with products separates spaces homology cannot.** The ring
  structure on $H^*(\mathbb{R}P^2; \mathbb{Z}/2)$ distinguishes it from
  $S^2 \vee S^2$, which have identical homology groups.
- **Van Kampen computes $\pi_1$ the way Mayer-Vietoris computes homology.** Both
  take a decomposition and combine known pieces, and both are exact sequences.

## Common Pitfalls

- **Confusing homotopy with homeomorphism.** A solid disc and a point are
  homotopy equivalent but not homeomorphic. Homotopy equivalence is a much
  coarser relation.
- **Assuming $\pi_1(X)$ is always abelian.** $\pi_1(S^1 \vee S^1) = F_2$ is not.
  This is precisely the information that $H_1$ discards.
- **Forgetting that $\pi_1$ depends on the basepoint.** For a space that is not
  path-connected, different components can have different fundamental groups.
- **Conflating "cycle" with "class".** A cycle is a chain with $\partial c = 0$;
  a homology *class* is a cycle modulo the boundaries. Every nontrivial-looking
  cycle may still be trivial in homology if it bounds.
- **Expecting $\partial^2 = 0$ to be automatic.** It is a theorem, and it is what
  makes $H_k$ well defined. The sign parity in the boundary formula is doing real
  work: without it, every face would be counted twice with the same sign and the
  identity would fail.
- **Applying Mayer-Vietoris without checking exactness.** At each step you must
  take the kernel of one map and the cokernel of the previous; skipping a term
  gives the wrong rank.
- **Using $H_k$ to detect cavities you cannot triangulate.** $H_3$ detects
  cavities in dimension 3, but the cavity must actually bound nothing *in the
  space you are computing*.
- **Claiming $\chi$ distinguishes all surfaces.** It does not: the torus and the
  Klein bottle both have $\chi = 0$ and are not homeomorphic. Orientability is
  needed as well.

## Applications

- **Robotics and motion planning.** The fundamental group of a configuration space
  determines whether two configurations can be continuously deformed into each
  other; homotopy classes of paths are the configuration space's components.
- **Topological data analysis.** Persistent homology computes the homology of a
  filtration of a data set, producing a barcode whose bars are the connected
  components, loops and voids that persist across scales.
- **Condensed matter physics.** Homotopy groups classify topological defects:
  vortices in superfluids and dislocations in crystals are $\pi_1$ defects, and
  the order parameter's winding is measured by $\pi_1$ of the vacuum manifold.
- **Knot theory.** The knot group $\pi_1(S^3 \setminus K)$ is a powerful knot
  invariant, distinguishing knots that share crossing number.
- **Algebraic geometry.** Poincare duality relates the cohomology of a smooth
  projective variety to its homology, and the Lefschetz hyperplane theorem is a
  deep restriction of that relationship.

## Cross-References

- **[Metric Spaces](/9-topology/7_metric-spaces/)** -- the metric structure
  underpins the continuity and convergence used throughout.
- **[Closed Sets, Closure, Interior, and Boundary](/9-topology/3_closed-sets-closure-interior-and-boundary/)** -- open and closed sets are what make covering spaces and CW-complexes well defined.
- **[Compactness](/9-topology/5_compactness/)** -- every finite CW-complex is compact, which is what makes the Euler characteristic a homotopy invariant.
- **[Separation Axioms](/9-topology/8_separation-axioms/)** -- the hypotheses of the lifting theorem and van Kampen.
- **[Sequences and Limits](/3-real-analysis/2_sequences-and-limits/)** -- convergence is the analytic shadow of continuity.
- **[Homomorphisms and Isomorphism Theorems](/1-abstract-algebra/5_homomorphisms-and-isomorphism-theorems/)** -- the quotient by a normal subgroup is the same construction that makes $H_k$ and $\pi_1/[\pi_1,\pi_1]$ well defined.
- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/) --
  symmetry groups, which is what the fundamental group of a configuration space
  is made of.
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
