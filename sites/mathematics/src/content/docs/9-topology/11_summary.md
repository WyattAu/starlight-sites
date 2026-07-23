---

title: Summary
tags:
  - University Maths
description: "| Concept | Key Idea | | ----------------------------- | ----------------------------------------------------------------------------------------------------"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "11_summary", "url": "https://mathematics.wyattau.com/9-topology/11_summary"}]
}
</script>

| Concept                       | Key Idea                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| Topological space             | Set + open sets satisfying the three axioms                                                          |
| Closed sets                   | Complements of open sets; finite unions, arbitrary intersections                                     |
| Closure / interior / boundary | $\overline{A}$, $\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$ |
| Continuity                    | $f^{-1}(\text{open})$ is open                                                                        |
| Homeomorphism                 | Bijective continuous map with continuous inverse                                                     |
| Compactness                   | Every open cover has a finite subcover                                                               |
| Heine–Borel                   | In $\mathbb{R}^n$: compact $\Leftrightarrow$ closed and bounded                                      |
| Connectedness                 | No separation into two disjoint nonempty open sets                                                   |
| Path-connectedness            | Any two points joined by a continuous path                                                           |
| Metric space                  | Set + distance function satisfying the three axioms                                                  |
| Completeness                  | Every Cauchy sequence converges                                                                      |
| Banach fixed point            | Contractions on complete metric spaces have unique fixed points                                      |
| $T_0$–$T_4$                   | Increasingly strong separation axioms                                                                |
| Fundamental group $\pi_1$     | Homotopy classes of loops; a topological invariant                                                   |
| Euler characteristic $\chi$   | $V - E + F$; classifies compact surfaces                                                     |
| Subspace topology             | $\tau_Y = \{U \cap Y : U \in \tau_X\}$ on $Y \subseteq X$ |
| Product topology              | Basis of $\prod U_i$ where each $U_i$ is open and $U_i = X_i$ for all but finitely many $i$ |
| Quotient topology             | $U \subseteq X/{\sim}$ is open iff $q^{-1}(U)$ is open in $X$ |

## Quick Reference: Key Theorems

| Theorem | Statement |
| ------- | --------- |
| Heine-Borel | $A \subseteq \mathbb{R}^n$ is compact $\Leftrightarrow$ $A$ is closed and bounded |
| Tychonoff | Any product of compact spaces is compact |
| Extreme Value | Continuous image of compact is compact; attains max/min in $\mathbb{R}$ |
| Intermediate Value | Continuous image of connected is connected; attains all intermediate values |
| Banach Contraction | Contraction on complete metric space has unique fixed point |
| Urysohn Lemma | In normal space, disjoint closed sets are separated by a continuous function |
| Tietze Extension | Continuous functions on closed subsets of normal spaces extend to the whole space |
| Seifert-van Kampen | $\pi_1(X \cup Y) \cong \pi_1(X) * \pi_1(Y) / \langle \text{relations} \rangle$ |

## Worked Examples

### Example 1: Determining if a Collection is a Topology

**Problem:** Is the collection $\tau = \{\emptyset, \{a\}, \{b\}, \{a,b,c\}\}$ a topology on
$X = \{a,b,c\}$? **Solution:** Check axioms: (1) $\emptyset$ and $X$ are in $\tau$. (2) Finite
unions: $\{a\} \cup \{b\} = \{a,b\}$, which is NOT in $\tau$. Therefore $\tau$ is not a topology. To
fix it, we would need to include $\{a,b\}$.

### Example 2: Continuous Function Proof

**Problem:** Show that the function $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x^2$ is
continuous with respect to the standard topology. **Solution:** Let $U$ be an open set in
$\mathbb{R}$. $f^{-1}(U) = \{x : x^2 \in U\}$. For any open interval $(a, b)$ with $a \geq 0$, the
preimage is $(-\sqrt{b}, -\sqrt{a}) \cup (\sqrt{a}, \sqrt{b})$, which is a union of open intervals
(open). For negative intervals, the preimage is empty or $\mathbb{R}$. Since the preimage of any
basis element is open, $f$ is continuous.

### Example 3: Homeomorphism of Intervals

**Problem:** Prove that $(0, 1)$ and $(0, \infty)$ are homeomorphic.

**Solution:** Define $f : (0, 1) \to (0, \infty)$ by $f(x) = x/(1-x)$. This is continuous and
bijective with inverse $f^{-1}(y) = y/(1+y)$, also continuous. Hence $(0, 1) \cong (0, \infty)$.

### Example 4: Compactness and Closedness

**Problem:** Is the set $\{1/n : n \in \mathbb{N}\} \cup \{0\}$ compact in $\mathbb{R}$?

**Solution:** Yes. The set is closed (its only limit point is $0$, which is included) and bounded
(contained in $[0, 1]$). By Heine-Borel, it is compact. Alternatively, any open cover contains a
neighbourhood of $0$ that covers all but finitely many points.

### Example 5: Connectedness of Star-Shaped Sets

**Problem:** Show that any star-shaped subset $S \subseteq \mathbb{R}^n$ is path-connected.

**Solution:** A set $S$ is star-shaped if there exists $x_0 \in S$ such that for all $x \in S$, the
segment $[x_0, x] \subseteq S$. For any $x, y \in S$, define the path $\gamma(t) = (1-2t)x + 2t x_0$
for $t \in [0, 1/2]$ and $\gamma(t) = (2-2t)x_0 + (2t-1)y$ for $t \in [1/2, 1]$. This path is
continuous and stays inside $S$, so $S$ is path-connected.

### Example 6: Fundamental Group of the Circle

**Problem:** Compute $\pi_1(S^1)$.

**Solution:** $\pi_1(S^1) \cong \mathbb{Z}$. The isomorphism maps each loop to its winding number
around the circle. This is proved using covering space theory: the exponential map
$p : \mathbb{R} \to S^1$, $p(t) = e^{2\pi i t}$, is a covering map. Lifting a loop $\gamma$ in $S^1$
to a path $\tilde\gamma$ in $\mathbb{R}$ gives a unique lift starting at $0$; the endpoint
$\tilde\gamma(1)$ is an integer (the winding number), and this defines the isomorphism.

## Practice Problems

1. Determine whether the set $C = \{f \in C([0,1]) : \|f\|_\infty \leq 1\}$ is compact in the
   sup-norm topology.
2. Prove that a continuous bijection from a compact space to a Hausdorff space is a homeomorphism.
3. Show that $\mathbb{R}^2$ and $\mathbb{R}^3$ are not homeomorphic (hint: consider removing a point).
4. Compute $\pi_1(\mathbb{R}P^2)$ using the Seifert-van Kampen theorem.
5. Determine whether the product of two connected spaces is connected.
6. Prove that a metric space is compact if and only if it is complete and totally bounded.
7. Show that the fundamental group of a product space is the direct product of the fundamental groups.
8. Classify all compact connected 2-manifolds up to homeomorphism by their Euler characteristic and orientability.

### Summary of Key Properties by Space

| Property | $\mathbb{R}^n$ | Metric space | General topological space |
|----------|---------------|--------------|--------------------------|
| Compact $\Leftrightarrow$ closed + bounded | Yes (Heine-Borel) | No | No |
| Sequentially compact $\Leftrightarrow$ compact | Yes | Yes (if metric) | No |
| Connected $\Leftrightarrow$ path-connected | Yes (open sets) | No | No |
| Continuous $\Rightarrow$ uniformly continuous | No | On compact subsets (Heine-Cantor) | Not defined |
| Completeness defined | Yes | Yes | No |
| Separable $\Rightarrow$ second countable | Yes | No (Sorgenfrey line) | No |

### Quick Reference: Separation Axioms

| Axiom | Name | Condition | Example |
|-------|------|-----------|---------|
| $T_0$ | Kolmogorov | For distinct points, one has neighbourhood not containing the other | $\mathbb{R}$ with cofinite |
| $T_1$ | Fréchet | Singletons are closed | $\mathbb{R}$ with cofinite |
| $T_2$ | Hausdorff | Distinct points have disjoint neighbourhoods | $\mathbb{R}$ standard |
| $T_3$ | Regular | $T_1$ + closed set and point separated by open sets | $\mathbb{R}$ standard |
| $T_4$ | Normal | $T_1$ + disjoint closed sets separated by open sets | $\mathbb{R}$ standard |
| $T_{3\frac12}$ | Tychonoff | $T_1$ + continuous function separates point from closed set | $\mathbb{R}$ standard |

## Intuition

Topology is often called "rubber-sheet geometry" because it studies properties that survive continuous stretching and bending. A coffee mug and a donut are topologically identical because one can be smoothly deformed into the other. The key insight is that topology ignores distances and angles entirely, focusing instead on connectivity: how many holes a space has, whether points can be separated, and whether curves can be shrunk to a point. Compactness captures the idea that "closed and bounded" means no escape to infinity, while connectedness means the space comes in one piece.

## Common Mistakes

**Mistake 1: Assuming compactness equals sequential compactness as a rule topological spaces**
In metric spaces, compactness and sequential compactness are equivalent. as a rule topological spaces, they are not: the space $[0, \omega_1)$ with the order topology is sequentially compact but not compact. Students often assume these concepts are interchangeable without checking whether the space is metrizable.

**Mistake 2: Assuming connectedness implies path-connectedness**
Every path-connected space is connected, but the converse is false. The topologist's sine curve $\{(x, \sin(1/x)) : x > 0\} \cup \{(0, y) : -1 \leq y \leq 1\}$ is connected but not path-connected. Students frequently use these terms interchangeably, which leads to errors when constructing continuous paths between points.

**Mistake 3: Forgetting that the product of Hausdorff spaces is Hausdorff, but the product of normal spaces need not be normal**
Tychonoff's theorem guarantees that products of compact spaces are compact, and finite products of Hausdorff spaces are Hausdorff. However, the Sorgenfrey plane (product of two Sorgenfrey lines) is a classic example showing that the product of normal spaces need not be normal. Students often assume normality is preserved under products.

### Key Counterexamples Reference

| Claim | Counterexample | Explanation |
|-------|---------------|-------------|
| Compact $\Rightarrow$ sequentially compact | $[0,\omega_1)$ in order topology | Compact but sequence $\alpha_n$ has no convergent subsequence |
| Sequentially compact $\Rightarrow$ compact | $[0,\omega_1)$ with order topology | Every sequence converges (to $\sup$) but open cover has no finite subcover |
| Closure of interior = interior of closure | $\mathbb{Q} \cap (0,1)$ in $\mathbb{R}$ | One side gives $(0,1)$, other gives $\emptyset$ |
| Product of $T_3$ spaces is $T_3$ | Sorgenfrey plane | Product of Sorgenfrey lines is regular but not normal |
| Continuous bijection is homeomorphism | $[0,2\pi) \to S^1$ | Inverse not continuous (domain not compact) |

### Further Practice Problems

9. Determine whether the following subsets of $\mathbb{R}$ are compact, connected, both, or neither:
   (a) $[0,1] \cup \{2\}$ (b) $\mathbb{Q} \cap [0,1]$ (c) Cantor set (d) $\{1/n : n \in \mathbb{N}\} \cup \{0\}$.

10. Prove that every compact subset of a Hausdorff space is closed. Why does this fail in
    non-Hausdorff spaces? Give a counterexample using the cofinite topology.

11. Show that the fundamental group of the figure-eight space $S^1 \vee S^1$ is the free group
    on two generators $F_2$.

12. Prove that any continuous function $f : S^1 \to \mathbb{R}$ attains its maximum and minimum.

13. Determine whether $[0,1]^\omega$ (the countable product of $[0,1]$ with the product topology)
    is compact. Justify using Tychonoff's theorem.

14. Show that $\mathbb{R}^n$ is not homeomorphic to $\mathbb{R}^m$ for $n \neq m$ (hint: remove a
    point and compare fundamental groups or homology groups).

15. Prove that the Sorgenfrey line (lower-limit topology on $\mathbb{R}$) is separable but not
    second countable. Show that it is completely regular but not normal, and that its square
    (the Sorgenfrey plane) is not normal.

## Cross-References

| Topic            | Link                                                  |
| ---------------- | ----------------------------------------------------- |
| Abstract Algebra | [View](/docs/university/mathematics/abstract-algebra) |


- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
