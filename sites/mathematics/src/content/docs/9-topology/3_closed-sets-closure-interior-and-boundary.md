---

date: 2026-07-23T21:57:32+01:00
title: Closed Sets, Closure, Interior, and Boundary
tags:
  - University Maths
description: "Closed sets and the three derived operations: closure, interior, and boundary. Every defining property is proved: the closure axioms, the interior--closure duality, the algebra of finite unions and intersections with its failure modes, and the Kuratowski theorem that a closure operator determines the topology."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "3_closed Sets Closure Interior And Boundary", "url": "https://mathematics.wyattau.com/9-topology/3_closed-sets-closure-interior-and-boundary"}]
}
</script>

### 3.1 Closed Sets

**Definition.** A subset $F \subseteq X$ is **closed** if its complement $X \setminus F$ is open.

**Proposition 3.1.** Closed sets satisfy:

1. $\emptyset$ and $X$ are closed.
2. Any intersection of closed sets is closed.
3. Any finite union of closed sets is closed.

**Proof.** By De Morgan's laws, complements turn intersections into unions and unions into
intersections: $X \setminus \bigcap_{i \in I} F_i = \bigcup_{i \in I} (X \setminus F_i)$ and
$X \setminus \bigcup_{i=1}^{n} F_i = \bigcap_{i=1}^{n} (X \setminus F_i)$.

(1) $X \setminus \emptyset = X$ and $X \setminus X = \emptyset$ are open.

(2) Each $X \setminus F_i$ is open, so $\bigcup_{i \in I} (X \setminus F_i)$ is open; the
open-set axioms allow *arbitrary* unions; hence $\bigcap_{i \in I} F_i$ is closed.

(3) Each $X \setminus F_i$ is open and there are only finitely many, so
$\bigcap_{i=1}^{n} (X \setminus F_i)$ is open; the axioms allow *finite* intersections; hence
$\bigcup_{i=1}^{n} F_i$ is closed. $\blacksquare$

The asymmetry between (2) and (3) mirrors the open-set axioms exactly: open sets are closed under
arbitrary unions and *finite* intersections, so closed sets are closed under arbitrary
intersections and *finite* unions. This is why an infinite union of closed sets can fail to be
closed: $\bigcup_{n=1}^{\infty} [1/n, 1] = (0, 1]$, which is not closed.

**Example 3.1.** In $\mathbb{R}$ with the standard topology, $[a, b]$ is closed since
$\mathbb{R} \setminus [a, b] = (-\infty, a) \cup (b, \infty)$ is open.

**Example 3.2.** Sets can be both open and closed (clopen). In the discrete topology every set is
clopen. In any topological space, $\emptyset$ and $X$ are clopen.

**Example 3.3.** Sets can be neither open nor closed. In $\mathbb{R}$, $[0, 1)$ is neither open nor
closed.

### 3.2 Closure

**Definition.** The **closure** of $A \subseteq X$, denoted $\overline{A}$, is the smallest closed
set containing $A$:

$$
\overline{A} = \bigcap \{F : F \text{ is closed and } A \subseteq F\}.
$$

Equivalently, $x \in \overline{A}$ if and only if every open set containing $x$ intersects $A$.

**Proof of the equivalence.** If $x \notin \overline{A}$, then; since $\overline{A}$ is the
intersection of all closed $F \supseteq A$; there is a closed set $F$ with $A \subseteq F$ and
$x \notin F$. Then $U = X \setminus F$ is open, contains $x$, and $U \cap A = \emptyset$.
Conversely, if some open $U \ni x$ satisfies $U \cap A = \emptyset$, then $X \setminus U$ is
closed, contains $A$, and excludes $x$; it is one of the sets in the family whose intersection
defines $\overline{A}$, so $x \notin \overline{A}$. $\blacksquare$

This characterisation makes the closure *local*: membership in $\overline{A}$ is decided by
arbitrarily small neighbourhoods of a single point, not by any global property of $A$.

**Example 3.4.** In $\mathbb{R}$: $\overline{(0, 1)} = [0, 1]$,
$\overline{\mathbb{Q}} = \mathbb{R}$.

**Example 3.5.** In $\mathbb{R}^2$ with the standard topology, the closure of the open unit disc
$\{(x, y) : x^2 + y^2 < 1\}$ is the closed unit disc $\{(x, y) : x^2 + y^2 \leq 1\}$.

### 3.3 Interior

**Definition.** The **interior** of $A \subseteq X$, denoted $\mathring{A}$ or
$\operatorname{int}(A)$, is the largest open set contained in $A$:

$$
\operatorname{int}(A) = \bigcup \{U : U \text{ is open and } U \subseteq A\}.
$$

Equivalently, $x \in \operatorname{int}(A)$ if and only if there exists an open set $U$ with
$x \in U \subseteq A$.

**Proposition 3.3 (Interior--closure duality).** For any $A \subseteq X$:

$$
\overline{A} = X \setminus \operatorname{int}(X \setminus A), \qquad
\operatorname{int}(A) = X \setminus \overline{X \setminus A}.
$$

**Proof.** Using the pointwise characterisation of closure just proved: $x \in X \setminus \overline{A}$
if and only if some open $U \ni x$ has $U \cap A = \emptyset$; that is, $U \subseteq X \setminus A$ -
that is, $x \in \operatorname{int}(X \setminus A)$. This is the first identity. Substituting
$X \setminus A$ for $A$ gives the second.

Alternatively, argue directly for the second: $x \notin \operatorname{int}(A)$ means no open
neighbourhood of $x$ fits inside $A$, which means every open neighbourhood of $x$ meets
$X \setminus A$, which means $x \in \overline{X \setminus A}$. $\blacksquare$

The duality says the two operations are the same operation seen through complementation; closure
builds the smallest closed superset exactly as interior builds the largest open subset. Any theorem
about one converts into a theorem about the other, which is how part (2) of Proposition 3.4 below
is obtained from part (1) for free.

**Example 3.6.** In $\mathbb{R}$: $\operatorname{int}([0, 1]) = (0, 1)$,
$\operatorname{int}(\mathbb{Q}) = \emptyset$.

### 3.4 Boundary

**Definition.** The **boundary** of $A \subseteq X$, denoted $\partial A$, is:

$$
\partial A = \overline{A} \cap \overline{X \setminus A} = \overline{A} \setminus \operatorname{int}(A).
$$

**Proof of the identity of the two descriptions.** Apply Proposition 3.3 to $X \setminus A$:
$\overline{X \setminus A} = X \setminus \operatorname{int}(X \setminus (X \setminus A)) = X \setminus \operatorname{int}(A)$.
Therefore $\overline{A} \cap \overline{X \setminus A} = \overline{A} \cap (X \setminus \operatorname{int}(A)) = \overline{A} \setminus \operatorname{int}(A)$. $\blacksquare$

The symmetric definition makes $\partial A = \partial(X \setminus A)$ immediate: the boundary
belongs to the set and its complement equally.

**Example 3.7.** In $\mathbb{R}$: $\partial(0, 1) = \{0, 1\}$, $\partial\mathbb{Q} = \mathbb{R}$,
$\partial\emptyset = \emptyset$.

### 3.5 Dense Sets

**Definition.** A subset $A \subseteq X$ is **dense** in $X$ if $\overline{A} = X$.

**Example 3.8.** $\mathbb{Q}$ is dense in $\mathbb{R}$ with the standard topology.

**Example 3.9.** In the cofinite topology on an infinite set $X$, every infinite subset is dense.

**Proposition 3.2.** $A$ is dense in $X$ if and only if every nonempty open set intersects $A$.

**Proof.** Suppose $\overline{A} = X$ and let $U \neq \emptyset$ be open. Pick a point
$x \in U$; then $U$ is an open neighbourhood of $x$, and $x \in X = \overline{A}$, so the pointwise
characterisation forces $U \cap A \neq \emptyset$.

Conversely, suppose every nonempty open set meets $A$, and let $x \in X$ be arbitrary. Every open
neighbourhood $U$ of $x$ is in particular nonempty and open, so $U \cap A \neq \emptyset$; the
characterisation gives $x \in \overline{A}$. Since $x$ was arbitrary, $\overline{A} = X$. $\blacksquare$

### 3.6 The Algebra of Closure and Interior

**Proposition 3.4.** For $A, B \subseteq X$:

1. $\overline{A \cup B} = \overline{A} \cup \overline{B}$.
2. $\operatorname{int}(A \cap B) = \operatorname{int}(A) \cap \operatorname{int}(B)$.
3. $\overline{A \cap B} \subseteq \overline{A} \cap \overline{B}$ and
   $\operatorname{int}(A \cup B) \supseteq \operatorname{int}(A) \cup \operatorname{int}(B)$,
   and both inclusions can be strict.

**Proof.** (1) If $A \subseteq B$ then every closed $F \supseteq B$ also has $F \supseteq A$, so
$\overline{A} \subseteq \overline{B}$: closure is monotone. Monotonicity gives
$\overline{A} \subseteq \overline{A \cup B}$ and $\overline{B} \subseteq \overline{A \cup B}$, hence
$\overline{A} \cup \overline{B} \subseteq \overline{A \cup B}$. Conversely $\overline{A} \cup \overline{B}$
is closed (Proposition 3.1(3)) and contains $A \cup B$, so by definition of $\overline{A \cup B}$ as
the *smallest* such set, $\overline{A \cup B} \subseteq \overline{A} \cup \overline{B}$.

(2) By the duality of Proposition 3.3, applied twice, and part (1):

$$
\operatorname{int}(A \cap B) = X \setminus \overline{(X \setminus A) \cup (X \setminus B)}
= X \setminus \bigl(\overline{X \setminus A} \cup \overline{X \setminus B}\bigr)
= \operatorname{int}(A) \cap \operatorname{int}(B).
$$

(3) $A \cap B \subseteq A$ gives $\overline{A \cap B} \subseteq \overline{A}$, and similarly
$\overline{A \cap B} \subseteq \overline{B}$. For strictness take $X = \mathbb{R}$,
$A = \mathbb{Q}$, $B = \mathbb{R} \setminus \mathbb{Q}$: both closures equal $\mathbb{R}$, so
$\overline{A} \cap \overline{B} = \mathbb{R}$, while $A \cap B = \emptyset$ and hence
$\overline{A \cap B} = \emptyset \subsetneq \mathbb{R}$. The interior inclusion is the dual
statement (substitute complements in what was just shown, using Proposition 3.3), and the same
example shows it strict: $\operatorname{int}(A) \cup \operatorname{int}(B) = \emptyset$ but
$\operatorname{int}(A \cup B) = \operatorname{int}(\mathbb{R}) = \mathbb{R}$. $\blacksquare$

The failure in (3) is not a technicality; it is the formal reason a boundary can be large. Since
$\partial A = \overline{A} \setminus \operatorname{int}(A)$, the rationals have
$\partial\mathbb{Q} = \mathbb{R}$: every point of $\mathbb{R}$ is simultaneously a limit of
rationals and of irrationals. Only a separation hypothesis between the two sets (for instance
$\overline{A} \cap \overline{B} = \emptyset$, or positive distance in a metric space) can restore
equality in (3).

### 3.7 The Kuratowski Closure Axioms

Closure is not just *an* operation on subsets; it determines the topology. Kuratowski isolated
which axioms an operator must satisfy to be a closure operator, and the answer is four.

**Proposition 3.5.** The closure operator satisfies:

- (K1) $\overline{\overline{A}} = \overline{A}$ (idempotence);
- (K2) $\overline{A \cup B} = \overline{A} \cup \overline{B}$ (additivity);
- (K3) $A \subseteq \overline{A}$ (extensivity);
- (K4) $\overline{\emptyset} = \emptyset$ (groundedness).

Conversely, any operator $c : \mathcal{P}(X) \to \mathcal{P}(X)$ satisfying (K1)–(K4) is the
closure operator of exactly one topology on $X$, namely
$\tau_c = \{U \subseteq X : c(X \setminus U) = X \setminus U\}$.

**Proof.** The four axioms for $\overline{\phantom{A}}$: (K3) holds because every set in the family
whose intersection defines $\overline{A}$ contains $A$. (K4) holds because $\emptyset$ is itself
closed (Proposition 3.1(1)), so the defining family includes $\emptyset$ and the intersection is
contained in it. (K2) is Proposition 3.4(1). For (K1): $\overline{A}$ is a closed set containing
$A$, so it is a member of the family defining $\overline{\overline{A}}$, giving
$\overline{\overline{A}} \subseteq \overline{A}$; the reverse inclusion is (K3) applied to
$\overline{A}$.

For the converse, first derive monotonicity from (K2): if $A \subseteq B$ then $A \cup B = B$, so
$\overline{A} \cup \overline{B} = \overline{B}$, hence $\overline{A} \subseteq \overline{B}$.
Call $C$ **$c$-closed** if $c(C) = C$; these are the closed sets of $\tau_c$ by construction.
The family of $c$-closed sets is nonempty ($c(X) \supseteq X$ by (K3), so $X$ is $c$-closed, and
$\emptyset$ is $c$-closed by (K4)), and it is closed under arbitrary intersections: if
$C = \bigcap_i C_i$ with each $C_i$ $c$-closed, monotonicity gives $c(C) \subseteq c(C_i) = C_i$
for every $i$, so $c(C) \subseteq C$, and (K3) gives equality. Hence $\tau_c$ is a topology.

Finally, the closure operator of $\tau_c$ maps $A$ to the smallest $c$-closed set containing $A$.
The set $c(A)$ is $c$-closed by (K1) and contains $A$ by (K3). And any $c$-closed $C \supseteq A$
satisfies $C = c(C) \supseteq c(A)$ by monotonicity. So $c(A)$ is that smallest set; the closure
operator of $\tau_c$ is exactly $c$, and since the closed sets of $\tau_c$ are the fixed points of
$c$, the topology is unique. $\blacksquare$

**Example 3.10.** On $X = \{a, b\}$, the operator $c$ with $c(\emptyset) = \emptyset$,
$c(\{a\}) = \{a, b\}$, $c(\{b\}) = \{b\}$, $c(\{a,b\}) = \{a,b\}$ satisfies (K1)–(K4). The topology
it generates is $\{\emptyset, \{a\}, \{a, b\}\}$; the Sierpiński space of the next sections (with
$a$ the open point). Note $c(\{a\}) \neq \{a\}$: the point $a$ is not closed, which is exactly the
failure of $T_1$.

### Key Relationships

<div class="table-wrap">

| Operation | Definition | Notation | Duality |
| ----------- | ----------- | ---------- | --------- |
| Closure | Smallest closed superset | $\overline{A} = \bigcap\{F : A \subseteq F,\; F\text{ closed}\}$ | $\overline{A} = X \setminus \operatorname{int}(X \setminus A)$ |
| Interior | Largest open subset | $\operatorname{int}(A) = \bigcup\{U : U \subseteq A,\; U\text{ open}\}$ | $\operatorname{int}(A) = X \setminus \overline{X \setminus A}$ |
| Boundary | Points in both closure and complement's closure | $\partial A = \overline{A} \cap \overline{X \setminus A}$ | $\partial A = \overline{A} \setminus \operatorname{int}(A)$ |
| Exterior | Interior of complement | $\operatorname{ext}(A) = \operatorname{int}(X \setminus A)$ | $X = \operatorname{int}(A) \cup \partial A \cup \operatorname{ext}(A)$ |

</div>

### Common Pitfalls

1. **Closed is not the opposite of open:** A set can be both open and closed (clopen), or neither. In $\mathbb{R}$ with the standard topology, $\emptyset$ and $\mathbb{R}$ are clopen; $[0,1)$ is neither.
2. **Closure depends on the ambient space:** $(0,1)$ has closure $[0,1]$ in $\mathbb{R}$, but in $\mathbb{R}$ with the lower-limit topology, the closure includes additional limit points. The closure operation is relative to the topology.
3. **Boundary points need not belong to the set:** $\partial(0,1) = \{0,1\}$ in $\mathbb{R}$, but neither 0 nor 1 is in $(0,1)$. The boundary of an open set is always contained in its complement.
4. **Dense sets can have empty interior:** $\mathbb{Q}$ is dense in $\mathbb{R}$ yet has empty interior. A dense set has full closure but may be "full of holes" topologically.
5. **Finite union vs infinite intersection:** Closed sets are only guaranteed closed under finite unions. An infinite union of closed sets (e.g., $\bigcup_{n=1}^\infty [1/n, 1]$) may not be closed.

### Worked Example: Closure and Boundary in Subspace Topology

**Problem.** Let $A = (0,1] \times \{0\} \subset \mathbb{R}^2$. Find $\overline{A}$, $\operatorname{int}(A)$, and $\partial A$ in $\mathbb{R}^2$ with the standard topology.

**Solution.** $A$ is a line segment on the $x$-axis, open at 0 and closed at 1.

- $\overline{A} = [0,1] \times \{0\}$: The point $(0,0)$ is a limit point because every neighbourhood contains points of $A$.
- $\operatorname{int}(A) = \emptyset$: No open ball in $\mathbb{R}^2$ is contained in a line segment.
- $\partial A = \overline{A} = [0,1] \times \{0\}$: Every point of $A$ is also a boundary point since every neighbourhood contains points both in $A$ and $A^c$.

This illustrates that a set with empty interior is entirely contained in its boundary.

### Applications

- **Continuous functions on dense subsets:** If two continuous functions $f, g : X \to Y$ agree on a dense subset $D \subset X$, then $f = g$ everywhere. This is fundamental in analysis for extending functions.
- **Baire category theorem:** Complete metric spaces cannot be expressed as a countable union of nowhere dense sets. This theorem underlies proofs of existence of continuous nowhere differentiable functions.
- **Closure in function spaces:** The Stone--Weierstrass theorem characterises dense subalgebras of $C(X)$, enabling polynomial approximation of continuous functions.
- **Manifold boundaries:** The topological boundary of a manifold with boundary is distinct from its manifold boundary. For an $n$-manifold with boundary, $\partial M$ as a topological space is an $(n-1)$-manifold without boundary.

### Connections to Other Topics

- **Analysis:** The closure operation is essential for defining compactness (every open cover has a finite subcover) and the Heine--Borel theorem.
- **Algebraic topology:** The boundary operator $\partial$ in singular homology is defined using topological boundaries of simplices.
- **Functional analysis:** The closure of a subspace in a normed space is central to the Hahn--Banach theorem and the definition of the dual space.
- **Differential geometry:** The interior and boundary of a manifold with boundary are defined analogously, using charts to $\mathbb{R}^n_+$.

### Worked Example: Density of Polynomials

**Problem.** Show that the set of polynomials $\mathcal{P}[0,1]$ is dense in $C([0,1], \mathbb{R})$ (continuous functions on $[0,1]$) under the supremum norm.

**Solution.** By the Stone--Weierstrass theorem, any subalgebra of $C([0,1])$ that separates points and contains constant functions is dense. The polynomials form a subalgebra, contain constants, and separate points (the polynomial $p(x) = x$ distinguishes $x_1 \neq x_2$). Therefore $\overline{\mathcal{P}[0,1]} = C([0,1])$.

In the language of closure: the closure of the polynomials in the sup-norm topology is the entire space of continuous functions. Every continuous function on $[0,1]$ can be approximated uniformly by a sequence of polynomials (Weierstrass approximation theorem).

### Summary Table

<div class="table-wrap">

| Operation | Property 1 | Property 2 | Property 3 |
| ----------- | ------------ | ------------ | ------------ |
| $\overline{A}$ | $A \subseteq \overline{A}$ | $\overline{\overline{A}} = \overline{A}$ | $\overline{A \cup B} = \overline{A} \cup \overline{B}$ |
| $\operatorname{int}(A)$ | $\operatorname{int}(A) \subseteq A$ | $\operatorname{int}(\operatorname{int}(A)) = \operatorname{int}(A)$ | $\operatorname{int}(A \cap B) = \operatorname{int}(A) \cap \operatorname{int}(B)$ |
| $\partial A$ | $\partial A = \partial(X \setminus A)$ | $\partial(A \cup B) \subseteq \partial A \cup \partial B$ | $\partial(A \cap B) \subseteq \partial A \cup \partial B$ |
| Dense | $\overline{A} = X$ | $A$ intersects every nonempty open set | $A^c$ has empty interior |

</div>

## Intuition

Think of a set as a region of space with fuzzy edges. The interior is the core where you can move freely in any direction. The closure adds back all the limit points that were arbitrarily close. The boundary is the fuzzy edge itself, where every neighborhood contains both points inside and outside the set. Dense sets are like scattered dust that gets arbitrarily close to every point, even though the dust itself has no interior. These operations form a dual pair: closure and interior are negations of each other when applied to complements, reflecting the fundamental symmetry between open and closed sets.

## Cross-References

- **[Metric Spaces](/9-topology/7_metric-spaces/)**: Closure, interior, and boundary can be characterised using sequences and limits in metric spaces.
- **[Separation Axioms](/9-topology/8_separation-axioms/)**: Dense sets and closure properties are used to prove Urysohn's lemma and the Tietze extension theorem.
- **[Introduction to Algebraic Topology](/9-topology/9_introduction-to-algebraic-topology/)**: The boundary operator in algebraic topology generalises the topological boundary concept to higher dimensions.
- **[Common Pitfalls](/9-topology/10_common-pitfalls/)**: Confusing open with closed and misunderstanding closure under infinite operations are frequent errors.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)

