---

date: 2026-07-23T21:57:32+01:00
title: "Connectedness | Mathematics - Wyatt's Notes"
tags:
  - University Maths
description: "A topological space is if there exist nonempty disjoint open sets with . Such a  Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "6_connectedness", "url": "https://mathematics.wyattau.com/9-topology/6_connectedness"}]
}
</script>

### 6.1 Connected and Disconnected Spaces

**Definition.** A topological space $X$ is **disconnected** if there exist nonempty disjoint open
sets $U, V$ with $X = U \cup V$. Such a pair $\{U, V\}$ is called a **separation** of $X$.

$X$ is **connected** if it is not disconnected.

Equivalently, $X$ is connected if and only if the only clopen subsets of $X$ are $\emptyset$ and
$X$.

**Example 6.1.** $[0, 1]$ is connected. $[0, 1) \cup (2, 3]$ is disconnected (with the subspace
topology from $\mathbb{R}$).

**Example 6.2.** $\mathbb{Q}$ with the subspace topology from $\mathbb{R}$ is totally disconnected:
the only connected subsets are singletons.

### 6.2 Connected Subsets of $\mathbb{R}$

**Theorem 6.1.** A subset of $\mathbb{R}$ (with the standard topology) is connected if and only if
it is an interval.

(Here an **interval** is any set $I \subseteq \mathbb{R}$ with the property: if $a, b \in I$ and
$a < c < b$, then $c \in I$.)

### 6.3 Path-Connectedness

**Definition.** A space $X$ is **path-connected** if for any two points $x, y \in X$, there exists a
continuous function $\gamma : [0, 1] \to X$ with $\gamma(0) = x$ and $\gamma(1) = y$.

**Proposition 6.1.** Every path-connected space is connected. The converse is false.

**Example 6.3 (Topologist"s sine curve).** Let

$$S = \{(x, \sin(1/x)) : 0 < x \leq 1\} \cup \{(0, y) : -1 \leq y \leq 1\} \subseteq \mathbb{R}^2.$$

$S$ is connected but not path-connected.

**Example 6.4.** $\mathbb{R}^n$ is path-connected for all $n \geq 1$. Any convex subset of
$\mathbb{R}^n$ is path-connected.

### 6.4 Components

**Definition.** A **connected component** of $X$ is a maximal connected subset of $X$. The connected
components of $X$ form a partition of $X$.

**Proposition 6.2.** Connected components are closed (in a Hausdorff space, they are always closed).

**Definition.** A **path component** of $X$ is a maximal path-connected subset. Path components also
partition $X$, and each path component is contained in a connected component.

### 6.5 Local Connectedness

**Definition.** $X$ is **locally connected** if for every $x \in X$ and every open neighbourhood $U$
of $x$, there exists a connected open neighbourhood $V$ of $x$ with $V \subseteq U$.

**Proposition 6.3.** Every open subset of $\mathbb{R}^n$ is locally connected.

**Example 6.5.** The topologist's sine curve is connected but not locally connected.

### 6.6 Properties of Connected Spaces

**Proposition 6.4.** The continuous image of a connected space is connected. Therefore connectedness
is a topological invariant.

**Proof.** If $f : X \to Y$ is continuous and $X$ is connected, suppose $f(X) = U \cup V$ with
$U, V$ open and disjoint in $f(X)$. Then $f^{-1}(U)$ and $f^{-1}(V)$ are open, disjoint, and cover
$X$, contradicting connectedness. $\blacksquare$

**Proposition 6.5 (Intermediate Value Theorem).** If $f : X \to \mathbb{R}$ is continuous and $X$ is
connected, then $f$ attains every value between any two of its values. This generalises the classical
IVT from $\mathbb{R}$ to any connected space.

**Proposition 6.6 (Products).** The product of connected spaces is connected (with the product
topology). Finite products follow from Proposition 6.4 by noting $X \times Y$ is homeomorphic to the
image of the product space under a continuous map; arbitrary products require more care but also hold.

**Proposition 6.7 (Closure).** If $A \subseteq X$ is connected, then any set $B$ with
$A \subseteq B \subseteq \overline{A}$ is connected. In particular, the closure of a connected set is
connected.

### 6.7 Total Disconnectedness and the Cantor Set

**Definition.** A space is **totally disconnected** if its only connected subsets are singletons.
Examples include $\mathbb{Q}$ (with the subspace topology from $\mathbb{R}$) and the Cantor set $C$.

**Proposition 6.8.** The Cantor set $C$ is totally disconnected, compact, uncountable, and perfect
(every point is a limit point). It is homeomorphic to $\{0, 1\}^{\mathbb{N}}$ with the product
topology.

### 6.8 Worked Example: Proving Disconnectedness

**Problem.** Show that $\operatorname{GL}(2, \mathbb{R})$ (the set of $2 \times 2$ invertible real
matrices with the subspace topology from $\mathbb{R}^4$) is disconnected.

<details>
<summary>Solution</summary>

The determinant map $\det : \operatorname{GL}(2, \mathbb{R}) \to \mathbb{R}\setminus\{0\}$ is
continuous (it is a polynomial in the matrix entries). The image is $\mathbb{R}\setminus\{0\}$, which
is disconnected (separated by $0$). Since the continuous image of a connected space must be connected,
$\operatorname{GL}(2, \mathbb{R})$ cannot be connected.

In fact, $\operatorname{GL}(2, \mathbb{R})$ has exactly two connected components: matrices with
positive determinant and matrices with negative determinant.

$\blacksquare$

</details>

### 6.9 Worked Example: Path-Connectedness of $\mathbb{R}^n \setminus \{0\}$

**Problem.** For which $n$ is $\mathbb{R}^n \setminus \{0\}$ path-connected?

<details>
<summary>Solution</summary>

For $n \geq 2$, any two points $p, q \neq 0$ can be joined by a path avoiding the origin. For
example, if $p$ and $q$ are not antipodal, use the straight line segment; if they are antipodal
($q = -p$), take a path through a third point. Thus $\mathbb{R}^n \setminus \{0\}$ is path-connected
for $n \geq 2$.

For $n = 1$, $\mathbb{R} \setminus \{0\} = (-\infty, 0) \cup (0, \infty)$ is disconnected (and hence
not path-connected).

$\blacksquare$

</details>

### 6.5 Intuition: What Does Connectedness Mean?

Connectedness asks whether a space comes in separate pieces. A connected space cannot be split into two non-empty open sets that are disjoint, which means there is no "gap" that separates it. Intuitively, you can travel between any two points without leaving the space. The intermediate value theorem is the most familiar consequence: a continuous function on a connected domain must take every value between its endpoints.

Path-connectedness is a stronger and more intuitive version: a path-connected space has a continuous path between every pair of points. Every path-connected space is connected, but the converse fails for exotic spaces like the topologist's sine curve, which is connected but has no continuous path crossing the oscillating part. In $\mathbb{R}^n$, connected subsets are exactly the intervals and their higher-dimensional analogues. Connectedness is the topological tool for proving that certain configurations are impossible: if you can show a space is disconnected, you have proven that it splits into distinct parts that cannot be continuously deformed into each other.

### 6.6 Common Mistakes

**Mistake 1: Assuming that connected implies path-connected.**
Every path-connected space is connected, but the converse is false. The topologist's sine curve is a classic example of a connected space that is not path-connected. Do not assume that a space is path-connected just because it is connected.

**Mistake 2: Confusing connectedness with convexity.**
Convexity is a geometric property that implies path-connectedness (and hence connectedness) in $\mathbb{R}^n$, but connectedness does not imply convexity. For example, the unit circle $S^1$ is connected but not convex. A set can be connected without being convex.

**Mistake 3: Forgetting that the continuous image of a connected set is connected.**
If $f: X \to Y$ is continuous and $X$ is connected, then $f(X)$ is connected. This property is often used to prove that certain sets are connected, but it is not an "if and only if" statement. The preimage of a connected set under a continuous map need not be connected.

**Mistake 4: Assuming that a disconnected set can be written as a union of disjoint open sets in the ambient space.**
A set $A$ is disconnected if it can be written as $A = (U \cap A) \cup (V \cap A)$ where $U$ and $V$ are disjoint open sets in the ambient space. The sets $U$ and $V$ are open in the ambient space, not necessarily in $A$. Do not confuse the subspace topology with the ambient topology.

**Mistake 5: Confusing total disconnectedness with disconnectedness.**
A space is totally disconnected if its only connected subsets are singletons. A space can be disconnected without being totally disconnected. For example, $[0, 1] \cup [2, 3]$ is disconnected but not totally disconnected, since $[0, 1]$ and $[2, 3]$ are connected subsets.

## Cross-References

- **[Compactness](5_compactness.md)**: Compactness and connectedness are both fundamental topological properties that characterize space structure.
- **[Topological Spaces](2_topological-spaces.md)**: Topological spaces provide the framework for defining connectedness through separation properties.
- **[Continuity and Homeomorphisms](4_continuity-and-homeomorphisms.md)**: Continuous functions preserve connectedness, and homeomorphisms preserve all topological invariants.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
