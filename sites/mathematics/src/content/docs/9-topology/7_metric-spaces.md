---

date: 2026-07-23T21:57:32+01:00
title: Metric Spaces
tags:
  - University Maths
description: 'Metric Spaces: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "7_metric Spaces", "url": "https://mathematics.wyattau.com/9-topology/7_metric-spaces"}]
}
</script>

### 7.1 Definition

**Definition.** A **metric space** is a pair $(M, d)$ where $M$ is a set and
$d : M \times M \to [0, \infty)$ satisfies, for all $x, y, z \in M$:

1. **Non-negativity:** $d(x, y) \geq 0$, with equality iff $x = y$.
2. **Symmetry:** $d(x, y) = d(y, x)$.
3. **Triangle inequality:** $d(x, z) \leq d(x, y) + d(y, z)$.

Every metric induces a topology: the open sets are unions of open balls
$B_r(p) = \{x : d(x, p) < r\}$.

### 7.2 Standard Metrics

**Example 7.1 (Euclidean metric).** On $\mathbb{R}^n$:

$$d_2(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}.$$

**Example 7.2 ($p$-norm metrics).** For $1 \leq p \leq \infty$:

$$d_p(\mathbf{x}, \mathbf{y}) = \left(\sum_{i=1}^{n} |x_i - y_i|^p\right)^{1/p}, \qquad d_\infty(\mathbf{x}, \mathbf{y}) = \max_{1 \leq i \leq n} |x_i - y_i|.$$

All of these induce the standard topology on $\mathbb{R}^n$.

**Example 7.3 (Discrete metric).** For any set $X$:

$$d(x, y) = \begin{cases} 0 & \text{if } x = y, \\ 1 & \text{if } x \neq y. \end{cases}$$

The discrete metric induces the discrete topology.

### 7.3 Convergence in Metric Spaces

**Definition.** A sequence $(x_n)$ in $(M, d)$ **converges** to $x \in M$ (written $x_n \to x$) if
for every $\varepsilon > 0$ there exists $N$ such that $d(x_n, x) < \varepsilon$ for all $n \geq N$.

**Proposition 7.1.** In a metric space, $x_n \to x$ if and only if for every open neighbourhood $U$
of $x$, there exists $N$ with $x_n \in U$ for all $n \geq N$.

Limits in metric spaces are unique (this follows from the Hausdorff property).

### 7.4 Completeness

**Definition.** A sequence $(x_n)$ is **Cauchy** if for every $\varepsilon > 0$ there exists $N$
such that $d(x_m, x_n) < \varepsilon$ for all $m, n \geq N$.

Every convergent sequence is Cauchy. The converse need not hold.

**Definition.** A metric space $(M, d)$ is **complete** if every Cauchy sequence converges.

**Example 7.4.** $\mathbb{R}^n$ with the Euclidean metric is complete.

**Example 7.5.** $\mathbb{Q}$ with $d(x, y) = |x - y|$ is not complete: the Cauchy sequence
$3, 3.1, 3.14, 3.141, 3.1415, \ldots$ does not converge in $\mathbb{Q}$.

**Proposition 7.2.** A closed subset of a complete metric space is complete.

**Definition.** A **Banach space** is a complete normed vector space.

**Example 7.6.** $(C([a, b]), \|\cdot\|_\infty)$ — the space of continuous functions on $[a, b]$
with the sup norm — is a Banach space.

### 7.5 Contraction Mapping Theorem

**Definition.** A map $f : M \to M$ is a **contraction** if there exists $0 \leq c < 1$ such that
$d(f(x), f(y)) \leq c \cdot d(x, y)$ for all $x, y \in M$.

**Theorem 5.6 (Banach Fixed Point Theorem).** If $(M, d)$ is a complete metric space and
$f : M \to M$ is a contraction, then $f$ has a unique fixed point $x^*$, and for any $x_0 \in M$,
the iteration $x_{n+1} = f(x_n)$ converges to $x^*$.

**Proof.** For any $x_0$, the sequence $x_n = f^n(x_0)$ is Cauchy (by repeated application of the
contraction condition), hence converges to some $x^*$. By continuity of $f$, $x^* = f(x^*)$.
Uniqueness follows from the contraction condition: if $x^* = f(x^*)$ and $y^* = f(y^*)$, then
$d(x^*, y^*) = d(f(x^*), f(y^*)) \leq c \cdot d(x^*, y^*)$, so $d(x^*, y^*) = 0$. $\square$

### 7.6 Key Relationships Between Metric Spaces

| Property         | Definition                                          | Example                        |
| ---------------- | --------------------------------------------------- | ------------------------------ |
| Metric space     | Set + distance function satisfying triangle ineq    | $\mathbb{R}^n$ with $d_2$      |
| Complete metric  | Every Cauchy sequence converges                     | $\mathbb{R}^n$, $C([a,b])$     |
| Compact metric   | Every open cover has finite subcover                | $[0,1]$ with Euclidean metric  |
| Connected metric | Cannot be partitioned into two disjoint open sets   | $\mathbb{R}^n$, any interval   |
| Totally bounded  | For every $\varepsilon > 0$, finite $\varepsilon$-net | $[0,1]$ but not $\mathbb{R}$ |

Compact $\Rightarrow$ complete and totally bounded. Complete + totally bounded $\Rightarrow$ compact.

### 7.7 Common Pitfalls

- **Assuming all metrics come from a norm.** The discrete metric does not come from any norm (norms
  are homogeneous: $\|\alpha x\| = |\alpha|\|x\|$, but $d(\alpha x, 0) = 1$ for $\alpha \neq 0$).
- **Confusing completeness with closedness.** A subset of a metric space can be closed but not
  complete (if the ambient space is not complete), and complete but not closed (if complete in a
  subspace topology).
- **Thinking contractions require $d(f(x), f(y)) < d(x, y)$ for all $x \neq y$.** This is weaker and
  does not guarantee a fixed point. The strict inequality $d(f(x), f(y)) \leq c d(x, y)$ with
  $c < 1$ is essential.
- **Forgetting that convergence of sequences is not enough in arbitrary topological spaces.** In metric spaces
  sequential convergence characterises the topology, but in non-metric spaces nets or
  filters are needed.

### 7.8 Applications

- **Numerical analysis:** The Banach fixed-point theorem justifies iterative methods like Newton's
  method and Picard iterations for ODEs.
- **Computer science:** Metric spaces model edit distances (Levenshtein, Hamming) for string
  matching and bioinformatics sequence alignment.
- **Image processing:** The Hausdorff distance measures similarity between shapes and is used in
  computer vision for template matching.
- **Functional analysis:** $C([a,b])$ with the sup norm is a complete metric space, providing the
  setting for the Stone-Weierstrass approximation theorem.

### 7.9 Intuition: What Do Metric Spaces Add?

A metric space formalises the notion of distance. It takes the key properties of distance in $\mathbb{R}^n$ (non-negativity, symmetry, triangle inequality) and axiomatises them, allowing you to study convergence and continuity in any setting where a notion of distance makes sense. The Euclidean metric is the most familiar, but other metrics like the taxicab metric ($d_1$) or the maximum metric ($d_\infty$) give different notions of "closeness" while inducing the same topology on $\mathbb{R}^n$.

Completeness is the metric-space analogue of the completeness axiom for $\mathbb{R}$. A complete metric space is one where Cauchy sequences converge, meaning there are no "missing limits." The Banach fixed-point theorem is the most important consequence: any contraction mapping on a complete metric space has a unique fixed point, and it can be found by iteration. This single theorem justifies Newton's method, Picard iteration for ODEs, and the contraction mapping principle in functional analysis. The Hausdorff distance measures how far two compact sets are from each other, providing a metric on the space of shapes.

### 7.10 Worked Examples

**Problem 1.** Show that $\mathbb{R}^n$ with the Euclidean metric is complete.

**Solution.** Let $\{x_k\}$ be a Cauchy sequence in $\mathbb{R}^n$. Then each coordinate sequence
$\{x_k^{(i)}\}$ is Cauchy in $\mathbb{R}$ (since $|x_k^{(i)} - x_\ell^{(i)}| \leq d_2(x_k, x_\ell)$).
$\mathbb{R}$ is complete, so each coordinate converges to $x^{(i)}$. Then $x_k \to x$ componentwise,
and by the triangle inequality $d_2(x_k, x) \to 0$. $\blacksquare$

**Problem 2.** Let $X = (0,1)$ with $d(x,y) = |x-y|$. Show $X$ is not complete.

**Solution.** The sequence $x_n = 1/n$ is Cauchy: for any $\varepsilon > 0$, choose $N > 2/\varepsilon$,
then for $m,n \geq N$, $|1/m - 1/n| \leq 1/m + 1/n \leq 2/N < \varepsilon$. But $x_n \to 0 \notin (0,1)$,
so the sequence does not converge in $X$. Thus $(0,1)$ with the Euclidean metric is not complete.
However, $[0,1]$ is complete (closed subset of complete $\mathbb{R}$). $\blacksquare$

### 7.11 Common Mistakes

**Mistake 1: Confusing a metric with a topology**
Every metric induces a topology (the metric topology), but not every topology comes from a metric. A topological space is metrizable if and only if it satisfies certain separation and countability axioms (Urysohn's metrization theorem). The cofinite topology on an infinite set is not metrizable because it is not Hausdorff.

**Mistake 2: Assuming completeness implies compactness**
A complete metric space need not be compact; compactness requires both completeness and total boundedness. For example, $\mathbb{R}$ is complete but not compact (it is not totally bounded). Conversely, a compact metric space is always complete. The Bolzano-Weierstrass property (every bounded sequence has a convergent subsequence) holds in compact metric spaces but not in all complete metric spaces.

**Mistake 3: Forgetting that contractions require a uniform contraction constant**
The Banach fixed-point theorem requires $d(f(x), f(y)) \leq c \cdot d(x, y)$ for a fixed $c < 1$ and all $x, y$. A map satisfying $d(f(x), f(y)) < d(x, y)$ for all $x \neq y$ (strictly contractive but without a uniform constant) need not have a fixed point. For example, $f(x) = x + 1/x$ on $(1, \infty)$ is strictly contractive but has no fixed point.

## Cross-References

- **[Closed Sets, Closure, Interior, and Boundary](3_closed-sets-closure-interior-and-boundary)**: The metric topology induces open and closed sets whose properties are studied using closure and interior operations.
- **[Separation Axioms](8_separation-axioms)**: Every metric space is Hausdorff and normal, placing it high in the separation axiom hierarchy.
- **[Sequences and Limits](3-real-analysis/2_sequences-and-limits.md)**: Convergence of sequences in metric spaces generalises the real-number convergence studied in analysis.
- **[Introduction to Algebraic Topology](9_introduction-to-algebraic-topology)**: Completeness and compactness of metric spaces are prerequisites for understanding covering spaces and fundamental groups.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
