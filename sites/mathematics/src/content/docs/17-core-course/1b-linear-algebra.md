---
date: 2026-10-24T00:00:00+00:00
title: "Level 1B: Linear Algebra Done Wrong"
description: "Coordinate-free linear algebra: vector spaces, dual spaces, quotient spaces, exterior algebra, and determinants as alternating multilinear forms — building the geometric machinery for differential geometry without matrices or coordinates."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Level 1B: Linear Algebra Done Wrong", "url": "https://mathematics.wyattau.com/17-core-course/1b-linear-algebra"}]
}
</script>

**The Defect.** The standard linear algebra course starts with matrices and row
reduction — a computational approach that treats vectors as column arrays and
linear maps as grids of numbers. This works for computation but obscures the
geometry: a vector is not a column of numbers; a linear map is not a grid. The
coordinate-free approach of Sergei Treil's *Linear Algebra Done Wrong* treats
vectors as abstract elements of a vector space and linear maps as
structure-preserving functions, introducing coordinates only at the very end as
a computational convenience. This page follows that approach.

**The One-Line Reveal.** The entire page follows from one definition: a vector
space is a set with addition and scalar multiplication satisfying eight axioms.
Everything else — dual spaces, quotient spaces, exterior algebra, determinants —
is constructed from this single definition by universal properties and
dimension counting.

## 1. Vector Spaces and Linear Maps

**Definition.** A **vector space** $V$ over a field $k$ is a set with addition
$+: V \times V \to V$ and scalar multiplication $\cdot: k \times V \to V$
satisfying eight axioms (associativity, commutativity, additive identity,
additive inverse, scalar identity, distributivity over vector addition,
distributivity over scalar addition, compatibility of scalar multiplication).

**Definition.** A function $T: V \to W$ between vector spaces is a **linear
map** if $T(\alpha u + \beta v) = \alpha T(u) + \beta T(v)$ for all $u, v \in V$
and $\alpha, \beta \in k$. The set of all linear maps from $V$ to $W$ is
denoted $\operatorname{Hom}(V, W)$ or $L(V, W)$.

**Theorem 1.1.** $\operatorname{Hom}(V, W)$ is itself a vector space under
pointwise addition and scalar multiplication.

**Proof.** Each axiom is inherited from $W$. For example, the zero map
$0(v) = 0_W$ is the additive identity; for $T_1, T_2 \in \operatorname{Hom}(V,
W)$, the pointwise sum $(T_1 + T_2)(v) = T_1(v) + T_2(v)$ is linear (each
$T_i$ is linear, and $W$'s addition distributes); scalar multiplication
$(\alpha T)(v) = \alpha T(v)$ is linear (distributivity in $W$). The
distributivity axioms follow from the same calculation. $\blacksquare$

### Bases and Dimension

**Definition.** A **basis** of $V$ is a set $\{e_1, \dots, e_n\}$ that is linearly
independent (no nontrivial finite linear combination equals zero) and spans $V$
(every $v \in V$ is a finite linear combination of basis vectors).

**Theorem 1.2.** Every vector space has a basis (requires Zorn's lemma). All
bases of $V$ have the same cardinality (the **dimension** $\dim V$).

**Proof sketch.** Existence: Zorn's lemma applied to the poset of linearly
independent subsets (ordered by inclusion) gives a maximal independent set; a
maximal independent set spans (if some $v$ is not in the span, adding $v$
preserves independence, contradicting maximality). Uniqueness of dimension: two
bases $B$ and $B'$ have $|B| \leq |B'|$ by the Steinitz exchange lemma applied
symmetrically, giving $|B| = |B'|$. $\blacksquare$

**Theorem 1.3 (Rank–nullity).** For a linear map $T: V \to W$ with $V$
finite-dimensional:

$$
\dim V = \dim \ker T + \dim \operatorname{im} T.
$$

**Proof.** Let $\{u_1, \dots, u_r\}$ be a basis of $\ker T$ (dimension $r =
\dim \ker T$) and extend it to a basis $\{u_1, \dots, u_r, v_1, \dots, v_s\}$
of $V$ (so $s = \dim \operatorname{im} T$, as we now show). The vectors
$T(v_1), \dots, T(v_s)$ span $\operatorname{im} T$ (since $T(u_i) = 0$ for the
kernel vectors). They are linearly independent: suppose $\sum a_j T(v_j) = 0$;
then $T(\sum a_j v_j) = 0$, so $\sum a_j v_j \in \ker T$, so $\sum a_j v_j =
\sum b_i u_i$ for some $b_i$; but the $\{u_i, v_j\}$ together form a basis of
$V$, so all $a_j = 0$ and all $b_i = 0$. Hence $\{T(v_1), \dots, T(v_s)\}$ is a
basis of $\operatorname{im} T$, so $\dim \operatorname{im} T = s$. Therefore
$\dim V = r + s = \dim \ker T + \dim \operatorname{im} T$. $\blacksquare$

**The One-Line Reveal.** The proof splits $V$ into two pieces — the part that
maps to zero (kernel) and the part that maps injectively (the extension) — and
counts. The splitting is possible because a basis of the kernel can be extended
to a basis of $V$.

## 2. Dual Spaces

**Definition.** The **dual space** $V^* = \operatorname{Hom}(V, k)$ is the space
of all linear functionals on $V$. Elements of $V^*$ are linear maps $V \to k$.

**Theorem 2.1.** $\dim V^* = \dim V$ when $V$ is finite-dimensional.

**Proof.** Let $\{e_1, \dots, e_n\}$ be a basis of $V$. Define $e^j_i \in V^*$
(the **dual basis**) by $e^j(e_i) = \delta_{ij}$ (Kronecker delta). These are
linearly independent: if $\sum a_j e^j = 0$, evaluate on $e_i$ to get $a_i = 0$.
They span: for any $\varphi \in V^*$ and any $v = \sum v_i e_i$,
$\varphi(v) = \varphi(\sum v_i e_i) = \sum v_i \varphi(e_i) = \sum
\varphi(e_i) e^j(e_i) = \sum \varphi(e_i) e^j(e_i)$, so $\varphi = \sum
\varphi(e_i) e^j$. Hence $\{e^1, \dots, e^n\}$ is a basis of $V^*$, and $\dim
V^* = n = \dim V$. $\blacksquare$

**The One-Line Reveal.** The dual basis is defined by where it *sends* the basis
vectors — and the delta function $\delta_{ij}$ ensures it picks out exactly one
coordinate. This is the coordinate-free version of "the transpose."

**Theorem 2.2.** $V \cong V^{**}$ (the natural isomorphism).

**Proof.** Define $\operatorname{ev}: V \to V^{**}$ by
$(\operatorname{ev}(v))(\varphi) = \varphi(v)$ — "evaluate the functional at
$v$." This is linear in $v$ (evaluate at $\alpha v_1 + \beta v_2$: the result is
$\alpha$ times the evaluation at $v_1$ plus $\beta$ times at $v_2$). It is
injective: if $\operatorname{ev}(v) = 0$, then $\varphi(v) = 0$ for all
$\varphi \in V^*$; in particular, taking $\varphi = e^j$ gives $e^j(v) = v_j =
0$ for all $j$, so $v = 0$. Since $\dim V^{**} = \dim V^* = \dim V$ (Theorem
2.1 applied twice), injective + equal dimensions = surjective. $\blacksquare$

**Why this is "natural."** The isomorphism $V \to V^{**}$ is **canonical** — it
does not require choosing a basis. In contrast, the isomorphism $V \to V^*$
(represented by the map $v \mapsto \sum \langle v, e_i \rangle e^i$) *does*
require a basis (or an inner product). This is why the double dual is "better"
than the dual: the isomorphism is natural, not an artefact of coordinates. In
the language of [category theory](/17-core-course/1a-categories/), the map
$\operatorname{ev}: \operatorname{Id} \to **$ is a natural transformation
between the identity functor and the double-dual functor.

### 3. Quotient Spaces

**Definition.** Let $U \subseteq V$ be a subspace. The **quotient space** $V/U$
is the set of equivalence classes $v + U$ under the relation $v \sim v'$ iff
$v - v' \in U$.

**Theorem 3.1.** $V/U$ is a vector space with $\dim(V/U) = \dim V - \dim U$
(when $V$ is finite-dimensional).

**Proof.** Addition and scalar multiplication are well-defined: if $v_1 + U =
v_1' + U$ and $v_2 + U = v_2' + U$, then $(v_1 + v_2 + U) = (v_1' + v_2' + U)$
because $(v_1 - v_1') + (v_2 - v_2') \in U$ (subspace closed under addition).
The zero vector is $0 + U = U$. The dimension formula follows from the
rank–nullity theorem applied to the **quotient map** $\pi: V \to V/U$,
$\pi(v) = v + U$: $\ker \pi = U$ (by definition of the equivalence classes) and
$\operatorname{im} \pi = V/U$ (surjective by construction), so $\dim V = \dim
U + \dim(V/U)$. $\blacksquare$

**The One-Line Reveal.** The quotient space "sets $U$ to zero" — every vector
in $U$ becomes the zero vector in $V/U$, and every coset is measured by how far
it is from $U$. The rank–nullity theorem then *counts* the dimensions: what you
collapse ($\dim U$) plus what remains ($\dim V/U$) equals what you started with.

### 4. Exterior Algebra

**Definition.** Let $V$ be a vector space. The **exterior algebra**
$\bigwedge V = \bigoplus_{k=0}^{n} \bigwedge^k V$ (where $n = \dim V$) is the
free associative algebra generated by $V$ subject to the relation $v \wedge v =
0$ for all $v \in V$.

**Definition.** The $k$-th **exterior power** $\bigwedge^k V$ consists of
$k$-vectors: formal expressions $v_1 \wedge v_2 \wedge \cdots \wedge v_k$
subject to:
- $v \wedge v = 0$ (alternating)
- $(v_1 + v_2) \wedge w = v_1 \wedge w + v_2 \wedge w$ (distributive)
- $(cv) \wedge w = c(v \wedge w)$ (bilinear over $k$)

**Theorem 4.1.** $v_1 \wedge v_2 = -v_2 \wedge v_1$ (anticommutativity).

**Proof.** From $v = (v_1 + v_2)$, we have $0 = (v_1 + v_2) \wedge (v_1 + v_2)
= v_1 \wedge v_1 + v_1 \wedge v_2 + v_2 \wedge v_1 + v_2 \wedge v_2 = v_1
\wedge v_2 + v_2 \wedge v_1$ (since $v_i \wedge v_i = 0$ by definition). So
$v_1 \wedge v_2 = -v_2 \wedge v_1$. $\blacksquare$

**Corollary 4.2.** If $v_1, \dots, v_k$ are linearly dependent, then $v_1
\wedge \cdots \wedge v_k = 0$.

**Proof.** If one $v_i$ is a linear combination of the others, say $v_i =
\sum c_j v_j$, then $v_i \wedge v_j = (\sum c_j v_j) \wedge v_j = \sum c_j
(v_j \wedge v_j) = 0$ for each term. So the wedge product collapses to zero.
$\blacksquare$

**Theorem 4.3.** $\dim \bigwedge^k V = \binom{n}{k}$ where $n = \dim V$.

**Proof.** If $\{e_1, \dots, e_n\}$ is a basis of $V$, then the set
$\{e_{i_1} \wedge \cdots \wedge e_{i_k} : i_1 < i_2 < \cdots < i_k\}$ of
$k$-wedges of *ordered* basis vectors forms a basis of $\bigwedge^k V$. The
number of such ordered $k$-tuples is $\binom{n}{k}$ (choosing $k$ from $n$).
These $k$-vectors span (any wedge of basis vectors can be sorted using the
anticommutativity rule, and repeats give zero). They are linearly independent
(standard argument). $\blacksquare$

**Why $\binom{n}{k}$ matters.** For $k > n$, $\binom{n}{k} = 0$, so $\bigwedge^k
V = 0$ — you cannot wedge more than $n$ linearly independent vectors in an
$n$-dimensional space. The top exterior power $\bigwedge^n V$ is one-dimensional
(spanned by $e_1 \wedge \cdots \wedge e_n$), and every $n$-vector is a scalar
multiple of $e_1 \wedge \cdots \wedge e_n$. This scalar is (up to the choice of
basis) the **determinant**.

### 5. Determinants as Alternating Multilinear Forms

**Definition.** An **alternating $k$-form** on $V$ is a $k$-linear map
$\omega: V^k \to k$ that is alternating: $\omega(v_1, \dots, v_i, \dots, v_i,
\dots, v_k) = 0$ whenever any two arguments coincide.

**Theorem 5.1.** $\bigwedge^n V^*$ (the top exterior power of the dual space)
is one-dimensional, and every element is a scalar multiple of the
**determinant**.

**Proof.** An element $\omega \in \bigwedge^n V^*$ assigns to each $n$-tuple
$(v_1, \dots, v_n)$ a scalar $\omega(v_1, \dots, v_n)$ that is multilinear and
alternating. Let $\{e_1, \dots, e_n\}$ be a basis. Any $n$-tuple of vectors can
be written as $v_i = \sum_j a_{ij} e_j$. By multilinearity and alternation,
$\omega(v_1, \dots, v_n) = \det(a_{ij}) \cdot \omega(e_1, \dots, e_n)$ — this
is the defining property of the determinant as the unique alternating
$n$-linear form sending $(e_1, \dots, e_n)$ to $1$. So $\omega$ is entirely
determined by the scalar $\omega(e_1, \dots, e_n)$, and the space of such forms
is one-dimensional. $\blacksquare$

**The One-Line Reveal.** The determinant is not a formula involving row
reduction or cofactor expansion — it is the *unique alternating $n$-linear form
normalised to send the identity basis to 1*. Every property of determinants
follows from this definition: multiplicativity, invariance under basis change,
the Laplace expansion.

### 6. Self-test

1. Prove that $\{e^1, \dots, e^n\}$ (the dual basis) spans $V^*$. (§2 — any
   $\varphi$ equals $\sum \varphi(e_i) e^i$ by evaluating on basis vectors.)
2. Prove that the quotient map $\pi: V \to V/U$ is surjective and linear.
   (§3 — surjective by definition of cosets; linear because coset addition is
   well-defined.)
3. Compute $\dim \bigwedge^2 V$ for $\dim V = 4$. (§4 — $\binom{4}{2} = 6$.)
4. Prove that $v \wedge w = -w \wedge v$ using only the alternating axiom.
   (§4 — set $v = v_1 + v_2$ in the wedge relation.)
5. Show that $\det(AB) = \det(A) \cdot \det(B)$ using the alternating-form
   definition of the determinant. (§5 — the product $AB$ induces the wedge map
   that is the composition of the wedge maps for $A$ and $B$; the determinant
   is the normalisation factor.)

### The One-Line Reveal (for this page)

The entire page follows from one shift: *treat vectors as geometric objects,
not as coordinate arrays.* The dual space $V^*$ is the space of measurements on
$V$; the quotient $V/U$ is $V$ with a subspace collapsed to zero; the exterior
power $\bigwedge^k V$ is the space of $k$-dimensional volume measurements; and
the determinant is the unique volume scale. Coordinates are introduced only
when you choose a basis — and every geometric statement is invariant under that
choice.

### Where to go next

- [Level 2: Topology](/17-core-course/2a-topology/) — continuity, compactness,
  and connectedness as pure qualitative geometry, building on the linear
  algebra from this page.
- [Real Analysis](/3-real-analysis/) — the rigorous $\varepsilon$–$\delta$
  foundations that underpin the measure theory of Level 4.
- [Linear Algebra Done Wrong](https://www.math.brown.edu/~treil/ladw/) —
  Treil's free book, which develops this material at full depth.
