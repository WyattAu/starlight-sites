---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "3_closed Sets Closure Interior And Boundary", "url": "https://mathematics.wyattau.com/9-topology/3_closed-sets-closure-interior-and-boundary"}]
}
</script>
title: Closed Sets, Closure, Interior, and Boundary
tags:
  - University Maths
description: 'Comprehensive educational content notes on closed sets, closure, interior, and boundary with precise definitions, worked examples, and common pitfalls.'
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

**Example 3.1.** In $\mathbb{R}$ with the standard topology, $[a, b]$ is closed since
$\mathbb{R} \setminus [a, b] = (-\infty, a) \cup (b, \infty)$ is open.

**Example 3.2.** Sets can be both open and closed (clopen). In the discrete topology every set is
clopen. In any topological space, $\emptyset$ and $X$ are clopen.

**Example 3.3.** Sets can be neither open nor closed. In $\mathbb{R}$, $[0, 1)$ is neither open nor
closed.

### 3.2 Closure

**Definition.** The **closure** of $A \subseteq X$, denoted $\overline{A}$, is the smallest closed
set containing $A$:

$$\overline{A} = \bigcap \{F : F \text{ is closed and } A \subseteq F\}.$$

Equivalently, $x \in \overline{A}$ if and only if every open set containing $x$ intersects $A$.

**Example 3.4.** In $\mathbb{R}$: $\overline{(0, 1)} = [0, 1]$,
$\overline{\mathbb{Q}} = \mathbb{R}$.

**Example 3.5.** In $\mathbb{R}^2$ with the standard topology, the closure of the open unit disc
$\{(x, y) : x^2 + y^2 < 1\}$ is the closed unit disc $\{(x, y) : x^2 + y^2 \leq 1\}$.

### 3.3 Interior

**Definition.** The **interior** of $A \subseteq X$, denoted $\mathring{A}$ or
$\operatorname{int}(A)$, is the largest open set contained in $A$:

$$\operatorname{int}(A) = \bigcup \{U : U \text{ is open and } U \subseteq A\}.$$

Equivalently, $x \in \operatorname{int}(A)$ if and only if there exists an open set $U$ with
$x \in U \subseteq A$.

**Example 3.6.** In $\mathbb{R}$: $\operatorname{int}([0, 1]) = (0, 1)$,
$\operatorname{int}(\mathbb{Q}) = \emptyset$.

### 3.4 Boundary

**Definition.** The **boundary** of $A \subseteq X$, denoted $\partial A$, is:

$$\partial A = \overline{A} \cap \overline{X \setminus A} = \overline{A} \setminus \operatorname{int}(A).$$

**Example 3.7.** In $\mathbb{R}$: $\partial(0, 1) = \{0, 1\}$, $\partial\mathbb{Q} = \mathbb{R}$,
$\partial\emptyset = \emptyset$.

### 3.5 Dense Sets

**Definition.** A subset $A \subseteq X$ is **dense** in $X$ if $\overline{A} = X$.

**Example 3.8.** $\mathbb{Q}$ is dense in $\mathbb{R}$ with the standard topology.

**Example 3.9.** In the cofinite topology on an infinite set $X$, every infinite subset is dense.

**Proposition 3.2.** $A$ is dense in $X$ if and only if every nonempty open set intersects $A$.

### Key Relationships

| Operation | Definition | Notation | Duality |
|-----------|-----------|----------|---------|
| Closure | Smallest closed superset | $\overline{A} = \bigcap\{F : A \subseteq F,\; F\text{ closed}\}$ | $\overline{A} = X \setminus \operatorname{int}(X \setminus A)$ |
| Interior | Largest open subset | $\operatorname{int}(A) = \bigcup\{U : U \subseteq A,\; U\text{ open}\}$ | $\operatorname{int}(A) = X \setminus \overline{X \setminus A}$ |
| Boundary | Points in both closure and complement's closure | $\partial A = \overline{A} \cap \overline{X \setminus A}$ | $\partial A = \overline{A} \setminus \operatorname{int}(A)$ |
| Exterior | Interior of complement | $\operatorname{ext}(A) = \operatorname{int}(X \setminus A)$ | $X = \operatorname{int}(A) \cup \partial A \cup \operatorname{ext}(A)$ |

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

| Operation | Property 1 | Property 2 | Property 3 |
|-----------|------------|------------|------------|
| $\overline{A}$ | $A \subseteq \overline{A}$ | $\overline{\overline{A}} = \overline{A}$ | $\overline{A \cup B} = \overline{A} \cup \overline{B}$ |
| $\operatorname{int}(A)$ | $\operatorname{int}(A) \subseteq A$ | $\operatorname{int}(\operatorname{int}(A)) = \operatorname{int}(A)$ | $\operatorname{int}(A \cap B) = \operatorname{int}(A) \cap \operatorname{int}(B)$ |
| $\partial A$ | $\partial A = \partial(X \setminus A)$ | $\partial(A \cup B) \subseteq \partial A \cup \partial B$ | $\partial(A \cap B) \subseteq \partial A \cup \partial B$ |
| Dense | $\overline{A} = X$ | $A$ intersects every nonempty open set | $A^c$ has empty interior |


## Intuition

Think of a set as a region of space with fuzzy edges. The interior is the core where you can move freely in any direction. The closure adds back all the limit points that were arbitrarily close. The boundary is the fuzzy edge itself, where every neighborhood contains both points inside and outside the set. Dense sets are like scattered dust that gets arbitrarily close to every point, even though the dust itself has no interior. These operations form a dual pair: closure and interior are negations of each other when applied to complements, reflecting the fundamental symmetry between open and closed sets.
## Cross-References

- **[Metric Spaces](9-topology/7_metric-spaces.md)**: Closure, interior, and boundary can be characterised using sequences and limits in metric spaces.
- **[Separation Axioms](9-topology/8_separation-axioms.md)**: Dense sets and closure properties are used to prove Urysohn's lemma and the Tietze extension theorem.
- **[Introduction to Algebraic Topology](9-topology/9_introduction-to-algebraic-topology.md)**: The boundary operator in algebraic topology generalises the topological boundary concept to higher dimensions.
- **[Common Pitfalls](9-topology/10_common-pitfalls.md)**: Confusing open with closed and misunderstanding closure under infinite operations are frequent errors.

