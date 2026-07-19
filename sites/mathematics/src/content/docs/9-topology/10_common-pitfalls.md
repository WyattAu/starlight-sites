---
title: Common Pitfalls
tags:
  - University Maths
description: "1. False. Only finite intersections are guaranteed. Counterexample: in , , which Comprehensive educational content coverage with definitions and practice problems."
---

1. **"Arbitrary intersections of open sets are open."** False. Only finite intersections are
   guaranteed. Counterexample: in $\mathbb{R}$, $\bigcap_{n=1}^\infty (-1/n, 1/n) = \{0\}$, which is
   not open.

2. **"Closed = not open."** False. A set can be both (clopen), neither, or exactly one. In
   $\mathbb{R}$, $\emptyset$ and $\mathbb{R}$ are clopen; $[0, 1)$ is neither.

3. **"Compact implies closed and bounded in every topological space."** False. This is specific to
   $\mathbb{R}^n$ (Heine--Borel). In the cofinite topology on an infinite set, every subset is
   compact but not every subset is closed.

4. **"Connected implies path-connected."** False. The topologist's sine curve is connected but not
   path-connected.

5. **"Continuous bijections are homeomorphisms."** False. The bijection $f : [0, 2\pi) \to S^1$
   given by $f(t) = (\cos t, \sin t)$ is continuous and bijective, but its inverse is not continuous
   — $[0, 2\pi)$ is not compact but $S^1$ is.

6. **"Every metric space is complete."** False. $\mathbb{Q}$ with the usual metric is not complete.

7. **"The closure of the interior equals the interior of the closure."** False as a general
   principle. In $\mathbb{R}$ with $A = \mathbb{Q} \cap (0, 1)$:
   $\operatorname{int}(\overline{A}) = (0, 1)$ but $\overline{\operatorname{int}(A)} = \emptyset$.

### More Topology Pitfalls

8. **"A compact subset of a Hausdorff space is closed."** This is true. But the converse requires
   the space to be compact: a closed subset of a compact space is compact. These are dual
   statements that are frequently confused.

9. **"Every continuous function is uniformly continuous on a compact set."** True for metric spaces,
   but the concept of uniform continuity requires a metric. In a general topological space, uniform
   continuity is not defined. The correct statement: a continuous function on a compact metric space
   is uniformly continuous (Heine-Cantor theorem).

10. **"Product of connected sets is connected."** True for finite products. For infinite products,
    the product of connected spaces is connected in the product topology (true), but this requires
    the product topology, not the box topology. The box product of connected spaces can be
    disconnected.

11. **"Quotient maps are open."** False. The quotient map $q : X \to X/{\sim}$ is not necessarily
    open. For example, collapsing the boundary of a disk to a point yields a sphere, but the image
    of a small open set at the boundary may not be open.

12. **"A subspace of a compact space is compact."** False. Only closed subspaces of compact spaces
    are compact. The open interval $(0,1)$ is not compact as a subspace of the compact space $[0,1]$.

13. **"Every limit point is a boundary point."** False. Interior points can also be limit points.
    In $\mathbb{R}$, $0$ is a limit point of $(-1, 1)$ but is not a boundary point
    ($\partial(-1,1) = \{-1, 1\}$).

14. **"If a space is separable, it is second countable."** False. $\mathbb{R}$ with the lower-limit
    topology (Sorgenfrey line) is separable ($\mathbb{Q}$ is dense) but not second countable.

### Counterexamples by Property

| Claim | Counterexample | Why it fails |
|-------|---------------|--------------|
| Compact $\Rightarrow$ closed in any space | Cofinite topology on $\mathbb{N}$ | Every subset is compact, but only finite sets are closed |
| Closed and bounded $\Rightarrow$ compact | $\mathbb{Q} \cap [0,1]$ | Closed and bounded in $\mathbb{Q}$ but not compact (not complete) |
| Connected $\Rightarrow$ path-connected | Topologist's sine curve | Connected but no path between $(0,0)$ and $(1,\sin 1)$ |
| Hausdorff $\Rightarrow$ regular | $K$-topology on $\mathbb{R}$ | Hausdorff but not regular — the set $K = \{1/n : n \in \mathbb{N}\}$ cannot be separated from $0$ |
| Regular $\Rightarrow$ normal | Sorgenfrey plane | Regular but not normal (product of Sorgenfrey lines) |
| First countable $\Rightarrow$ second countable | $\mathbb{R}$ with discrete topology | Singletons form a countable neighborhood basis at each point, but the space is uncountable |
| Sequentially compact $\Rightarrow$ compact | Ordinal space $[0, \omega_1)$ | Every sequence converges but the open cover $\{[0,\alpha) : \alpha < \omega_1\}$ has no finite subcover |

### Correct Statements with Proof Sketches

**"Compact implies closed in a Hausdorff space."** Let $K \subseteq X$ be compact and $X$ Hausdorff.
For any $x \in X \setminus K$, for each $y \in K$, choose disjoint open $U_y \ni x$, $V_y \ni y$.
Cover $K$ by finitely many $V_{y_i}$; let $U = \bigcap U_{y_i}$. Then $U$ is an open neighborhood
of $x$ disjoint from $K$, so $X \setminus K$ is open. $\blacksquare$

**"Closed subset of a compact space is compact."** Let $K \subseteq X$ be closed, $X$ compact,
and $\{U_\alpha\}$ an open cover of $K$. Add $X \setminus K$ to get an open cover of $X$, extract
a finite subcover, and remove $X \setminus K$ if included. $\blacksquare$

**"Continuous image of a compact set is compact."** Let $f : X \to Y$ be continuous, $K \subseteq X$
compact. For any open cover $\{V_\alpha\}$ of $f(K)$, $\{f^{-1}(V_\alpha)\}$ is an open cover of $K$.
Extract a finite subcover; the corresponding $V_\alpha$ cover $f(K)$. $\blacksquare$

### Worked Examples

**Problem 1.** Show that $X = \mathbb{N}$ with the cofinite topology is compact but not Hausdorff.

*Solution.* For compactness: let $\{U_\alpha\}$ be any open cover. Pick any non-empty $U_{\alpha_0}$.
Since only finitely many points are missing from $U_{\alpha_0}$, pick one $U_\alpha$ for each
missing point. This gives a finite subcover. For Hausdorff: any two non-empty open sets in the
cofinite topology intersect (since their complements are finite), so $X$ is not Hausdorff. $\blacksquare$

**Problem 2.** Prove that the topologist's sine curve is connected but not path-connected.

*Solution.* Let $S = \{(x, \sin(1/x)) : x > 0\} \cup \{(0, y) : |y| \leq 1\}$. $S$ is connected because
the graph of $\sin(1/x)$ is connected and its closure adds $\{0\} \times [-1,1]$. For
path-connectedness: suppose a path $\gamma(t) = (\gamma_1(t), \gamma_2(t))$ connects $(0,0)$ to
$(1/\pi, 0)$. Let $t_0 = \inf\{t : \gamma_1(t) > 0\}$. By continuity, $\gamma_1(t_0) = 0$.
For any $\delta > 0$, the image of $(t_0, t_0 + \delta)$ is connected but the graph oscillates
infinitely often, contradicting continuity. $\blacksquare$

### Checklist for Checking Topological Statements

- Are you assuming a metric space? Many properties (uniform continuity, completeness, sequential
  compactness) only make sense in metric spaces.
- Does the statement involve "closed and bounded"? That equivalence only holds in $\mathbb{R}^n$.
- Are you confusing sequentially compact with compact? They are equivalent in metric spaces but
   not in arbitrary topological spaces.
- Is the space Hausdorff? Many theorems about compactness and uniqueness of limits require
   Hausdorff separation.

### Additional Pitfalls

15. **"The product of Hausdorff spaces is Hausdorff."** This is true for the product topology but
    false for the box topology on an infinite product. In the box topology, the product of
    Hausdorff spaces may fail to be Hausdorff because the basis elements are too restrictive.

16. **"Every continuous function on a compact set attains its maximum."** True for functions into
    $\mathbb{R}$ (extreme value theorem), but the codomain matters. A continuous function from a
    compact space into an arbitrary topological space need not attain a "maximum" — the concept
    of maximum requires an order structure.

17. **"A subspace of a connected space is connected."** False. The interval $(0,1) \cup (2,3)$ is a
    subspace of the connected space $\mathbb{R}$ but is disconnected. Connectedness is not
    hereditary; only open connected subspaces inherit connectedness (closed subspaces may not).

18. **"All open covers of a compact space have a finite subcover."** This is the definition of
    compactness, so it is true by definition. However, a common mistake is thinking that "every
    open cover has a finite subcover" is a property to be proven rather than the definition. The
    difficulty lies in finding the finite subcover, not in stating the definition.

19. **"If $X$ is compact and $f : X \to Y$ is continuous, then $f$ is a homeomorphism onto its
    image if $f$ is injective."** This requires $Y$ to be Hausdorff. Counterexample: the identity
    map from $[0,1]$ with the discrete topology to $[0,1]$ with the standard topology is
    continuous and bijective but not a homeomorphism (the domain is not compact in the discrete
    topology). For a correct statement: a continuous bijection from a compact space to a
    Hausdorff space is a homeomorphism.

20. **"The one-point compactification of a space is always Hausdorff."** False. The one-point
    compactification $X^* = X \cup \{\infty\}$ is Hausdorff if and only if $X$ is locally compact
    and Hausdorff. For example, the one-point compactification of $\mathbb{Q}$ is not Hausdorff
    because $\mathbb{Q}$ is not locally compact.

## Cross-References

- **[Metric Spaces](9-topology/7_metric-spaces.md)**: Many pitfalls involve metric-specific properties like completeness and the Heine-Borel theorem that fail in general topological spaces.
- **[Separation Axioms](9-topology/8_separation-axioms.md)**: Confusion between separation levels (T1 vs T2 vs T3) generates common errors about compactness and continuity.
- **[Closed Sets, Closure, Interior, and Boundary](9-topology/3_closed-sets-closure-interior-and-boundary.md)**: Several pitfalls involve misunderstanding the relationship between open, closed, and clopen sets.
- **[Introduction to Algebraic Topology](9-topology/9_introduction-to-algebraic-topology.md)**: The distinction between homotopy equivalence and homeomorphism is a frequent source of confusion.
