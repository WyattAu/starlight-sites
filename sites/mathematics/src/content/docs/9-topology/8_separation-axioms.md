---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "8_separation Axioms", "url": "https://mathematics.wyattau.com/9-topology/8_separation-axioms"}]
}
</script>
title: Separation Axioms
tags:
  - University Maths
description: "Separation axioms in topology and their properties."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "8_separation Axioms", "url": "https://mathematics.wyattau.com/9-topology/8_separation-axioms"}]
}
</script>

### 8.1 Overview

Separation axioms formalise how well points and closed sets can be "separated" by open sets.

### 8.2 $T_0$ (Kolmogorov)

**Definition.** $X$ is $T_0$ if for any two distinct points $x, y \in X$, at least one has an open
neighbourhood not containing the other.

**Example 8.1.** The Sierpiński space $\{0, 1\}$ with topology $\{\emptyset, \{0\}, \{0, 1\}\}$ is
$T_0$ but not $T_1$.

### 8.3 $T_1$ (Fréchet)

**Definition.** $X$ is $T_1$ if for any two distinct points $x, y \in X$, there exist open sets
$U, V$ with $x \in U$, $y \notin U$ and $y \in V$, $x \notin V$.

**Proposition 8.1.** $X$ is $T_1$ if and only if every singleton $\{x\}$ is closed.

**Example 8.2.** Any infinite set with the cofinite topology is $T_1$ but not $T_2$.

### 8.4 $T_2$ (Hausdorff)

**Definition.** $X$ is **Hausdorff** ($T_2$) if for any two distinct points $x, y \in X$, there
exist disjoint open sets $U, V$ with $x \in U$ and $y \in V$.

**Proposition 8.2.** Every metric space is Hausdorff.

**Proposition 8.3.** In a Hausdorff space, every convergent sequence has a unique limit.

**Proposition 8.4.** $T_2 \implies T_1 \implies T_0$.

### 8.5 $T_3$ (Regular) and $T_4$ (Normal)

**Definition.** $X$ is **regular** ($T_3$) if it is $T_1$ and for any point $x$ and closed set $F$
with $x \notin F$, there exist disjoint open sets $U, V$ with $x \in U$ and $F \subseteq V$.

**Definition.** $X$ is **normal** ($T_4$) if it is $T_1$ and for any two disjoint closed sets
$F_1, F_2$, there exist disjoint open sets $U, V$ with $F_1 \subseteq U$ and $F_2 \subseteq V$.

**Proposition 8.5.** $T_4 \implies T_3 \implies T_2$ (assuming $T_1$).

**Proposition 8.6.** Every compact Hausdorff space is normal.

### 8.6 Urysohn's Lemma

**Theorem 8.1 (Urysohn's Lemma).** If $X$ is normal and $F_1, F_2$ are disjoint closed subsets, then
there exists a continuous function $f : X \to [0, 1]$ with $f|_{F_1} = 0$ and $f|_{F_2} = 1$.

This is a fundamental tool in topology, used to construct partitions of unity and to prove extension
theorems.

### 8.7 Tychonoff Spaces ($T_{3.5}$)

**Definition.** A space $X$ is **completely regular** (**Tychonoff**, $T_{3.5}$) if it is $T_1$ and
for every point $x$ and closed set $F$ with $x \notin F$, there exists a continuous function
$f : X \to [0, 1]$ with $f(x) = 0$ and $f(F) = 1$.

**Proposition 8.7.** Every normal space is completely regular. Every completely regular space is
regular: $T_4 \implies T_{3.5} \implies T_3$.

**Example 8.3.** The Sorgenfrey line (lower limit topology on $\mathbb{R}$) is Tychonoff but not
normal.

### 8.8 The Tietze Extension Theorem

**Theorem 8.2 (Tietze Extension Theorem).** If $X$ is normal, $F \subseteq X$ is closed, and
$f : F \to [a, b]$ is continuous, then $f$ extends to a continuous function $\tilde{f} : X \to [a, b]$
with $\tilde{f}|_F = f$.

This follows from Urysohn's lemma by constructing a sequence of approximations whose sum converges
uniformly to the extension.

### 8.9 Urysohn Metrization Theorem

**Theorem 8.3 (Urysohn Metrization Theorem).** Every second-countable regular $T_1$ space is
metrizable (its topology is induced by some metric).

_Proof sketch._ Embed $X$ into the Hilbert cube $[0, 1]^\omega$ using a countable collection of
Urysohn functions constructed from a countable basis. The Hilbert cube is metrizable, so the
subspace topology on $X$ is metrizable. $\blacksquare$

**Corollary 8.8.** A space is a separable metric space if and only if it is second-countable and
regular $T_1$.

### 8.10 Summary of Separation Axioms

The hierarchy of separation axioms:

$$T_4 \implies T_{3.5} \implies T_3 \implies T_2 \implies T_1 \implies T_0$$

Each implication is strict: there exist spaces satisfying each level but not the next.

### 8.11 Practice Problems

**Problem 1.** Show that the Zariski topology on $\mathbb{R}^n$ is $T_1$ but not $T_2$.

**Problem 2.** Prove that a closed subspace of a normal space is normal.

_Solution._ Let $X$ be normal and $F \subseteq X$ closed. Let $A, B$ be disjoint closed sets in
$F$. Then $A, B$ are also closed in $X$ (since $F$ is closed). By normality of $X$, there exist
disjoint open $U, V \subseteq X$ with $A \subseteq U$, $B \subseteq V$. Then $U \cap F$ and
$V \cap F$ are disjoint open in $F$ separating $A$ and $B$. $\blacksquare$

**Problem 3.** Show that every metric space is normal.

**Problem 4.** Prove that a product of two $T_2$ spaces is $T_2$. Is the same true for $T_3$ or
$T_4$?

**Problem 5.** Show that the Sorgenfrey plane $\mathbb{R}_\ell \times \mathbb{R}_\ell$ is not normal,
even though the Sorgenfrey line $\mathbb{R}_\ell$ is normal. (Hint: the antidiagonal
$\{(x, -x) : x \in \mathbb{R}\}$ is closed and discrete.)

### 8.12 $T_5$ (Completely Normal) and $T_6$ (Perfectly Normal)

**Definition.** A space $X$ is **completely normal** ($T_5$) if every subspace of $X$ is normal.
Equivalently, for any two separated sets $A, B$ (i.e., $\bar{A} \cap B = A \cap \bar{B} = \emptyset$),
there exist disjoint open sets separating them.

**Definition.** A space $X$ is **perfectly normal** ($T_6$) if $X$ is normal and every closed set
is a $G_\delta$ set (a countable intersection of open sets).

**Proposition 8.9.** Every metric space is $T_6$ (perfectly normal).

**Proposition 8.10.** $T_6 \implies T_5 \implies T_4$ (assuming $T_1$).

### 8.13 The Tychonoff Product Theorem

**Theorem 8.4 (Tychonoff Product Theorem).** The product of any collection of compact topological
spaces is compact (in the product topology).

This is one of the most important theorems in topology, equivalent to the axiom of choice.
The proof uses the finite intersection property and Zorn's lemma.

### 8.14 Stone-Cech Compactification

For a Tychonoff space $X$, the **Stone-Cech compactification** $\beta X$ is the unique compact
Hausdorff space containing $X$ as a dense subspace such that every continuous map from $X$ to a
compact Hausdorff space extends continuously to $\beta X$.

**Example.** $\beta \mathbb{N}$ is the set of ultrafilters on $\mathbb{N}$ with the topology
generated by $\{A^* : A \subseteq \mathbb{N}\}$ where $A^* = \{U \in \beta\mathbb{N} : A \in U\}$.

### 8.15 Additional Practice Problems

**Problem 6.** Prove that every compact subset of a Hausdorff space is closed.

**Problem 7.** Show that $\mathbb{Q}$ with the subspace topology from $\mathbb{R}$ is not a
$T_4$ space.

**Problem 8.** Prove that a space is Hausdorff if and only if the diagonal
$\Delta = \{(x, x) : x \in X\}$ is closed in $X \times X$.

### 8.16 Common Mistakes

## Intuition

Separation axioms measure how well a topological space distinguishes points and sets. $T_0$ means any two points can be separated by an open set containing one but not the other. $T_1$ means each point is closed (singletons are closed sets). $T_2$ (Hausdorff) means any two distinct points have disjoint neighbourhoods — you can draw a wall between them. Higher axioms ($T_3$, $T_4$) separate points from closed sets and closed sets from each other with open neighbourhoods. The hierarchy matters because compactness, convergence, and uniqueness of limits all depend on having enough separation. Without Hausdorff, limits are not unique and compact sets need not be closed.

### 8.16 Common Mistakes

**Mistake 1: Assuming that all separation axioms are independent.**
The separation axioms form a hierarchy: $T_4 \implies T_3 \implies T_2 \implies T_1 \implies T_0$. A space that is $T_3$ is automatically $T_2$, $T_1$, and $T_0$. Do not assume that a space can be $T_3$ without being $T_2$.

**Mistake 2: Confusing regularity with normality.**
Regularity ($T_3$) separates points from closed sets, while normality ($T_4$) separates disjoint closed sets from each other. A space can be regular without being normal. For example, the Sorgenfrey line is regular but not normal.

**Mistake 3: Assuming that subspaces of Hausdorff spaces are Hausdorff.**
The subspace of a Hausdorff space is Hausdorff. However, the product of Hausdorff spaces is Hausdorff, but the quotient of a Hausdorff space need not be Hausdorff. Do not assume that Hausdorffness is preserved under all constructions.

**Mistake 4: Forgetting that compact subsets of Hausdorff spaces are closed.**
In a Hausdorff space, every compact subset is closed. This is a key property that is often used to prove that certain sets are closed. However, the converse is not true: a closed subset of a Hausdorff space need not be compact (e.g., $\mathbb{R}$ is closed in itself but not compact).

**Mistake 5: Assuming that $T_1$ implies $T_2$.**
A $T_1$ space need not be $T_2$. The cofinite topology on an infinite set is $T_1$ (every singleton is closed) but not $T_2$ (any two nonempty open sets intersect). Do not assume that $T_1$ implies Hausdorff.

## Cross-References

- **[Metric Spaces](9-topology/7_metric-spaces.md)**: Every metric space satisfies all separation axioms (T6), providing a concrete class of well-separated spaces.
- **[Closed Sets, Closure, Interior, and Boundary](9-topology/3_closed-sets-closure-interior-and-boundary.md)**: Separation axioms formalise how well points and closed sets can be separated by open sets.
- **[Introduction to Algebraic Topology](9-topology/9_introduction-to-algebraic-topology.md)**: Compact Hausdorff spaces are normal, which is essential for proving results about covering spaces and quotient maps.
