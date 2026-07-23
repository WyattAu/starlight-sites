---

title: Introduction to Algebraic Topology
tags:
  - University Maths
description: 'Two continuous functions are (written ) if there exists a continuous map such th Comprehensive educational content coverage with definitions and practice proble'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "9_introduction To Algebraic Topology", "url": "https://mathematics.wyattau.com/9-topology/9_introduction-to-algebraic-topology"}]
}
</script>

### 9.1 Homotopy

**Definition.** Two continuous functions $f, g : X \to Y$ are **homotopic** (written $f \simeq g$)
if there exists a continuous map $H : X \times [0, 1] \to Y$ such that $H(x, 0) = f(x)$ and
$H(x, 1) = g(x)$ for all $x \in X$.

The map $H$ is called a **homotopy** from $f$ to $g$.

**Definition.** Two spaces $X$ and $Y$ are **homotopy equivalent** (written $X \simeq Y$) if there
exist continuous maps $f : X \to Y$ and $g : Y \to X$ such that
$g \circ f \simeq \operatorname{id}_X$ and $f \circ g \simeq \operatorname{id}_Y$.

**Example 9.1.** The solid disc $D^2 = \{(x, y) : x^2 + y^2 \leq 1\}$ is homotopy equivalent to the
single point $\{0\}$ (it is **contractible**).

### 9.2 The Fundamental Group

**Definition.** A **loop** in $X$ based at $x_0 \in X$ is a continuous map $\gamma : [0, 1] \to X$
with $\gamma(0) = \gamma(1) = x_0$.

**Definition.** The **fundamental group** $\pi_1(X, x_0)$ is the set of homotopy classes of loops
based at $x_0$, with the group operation given by concatenation of loops.

For path-connected spaces, $\pi_1(X, x_0)$ is independent of the choice of basepoint $x_0$ (up to
isomorphism).

**Proposition 9.1.** The fundamental group is a topological invariant: if $X \cong Y$, then
$\pi_1(X) \cong \pi_1(Y)$.

**Example 9.2.** $\pi_1(S^1) \cong \mathbb{Z}$. From first principles, loops in $S^1$ are classified
by their winding number.

**Example 9.3.** $\pi_1(\mathbb{R}^n) = \{e\}$ (the trivial group) for all $n \geq 1$. More
generally, the fundamental group of any directly connected space is trivial.

**Example 9.4.** $\pi_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}$, where $T^2$ is the torus.

### 9.3 Directly Connected Spaces

**Definition.** A path-connected space $X$ is **directly connected** if $\pi_1(X) \cong \{e\}$.

Equivalently, every loop in $X$ can be continuously contracted to a point.

**Proposition 9.2.** $\mathbb{R}^n$, $S^n$ (for $n \geq 2$), and any convex subset of $\mathbb{R}^n$
are directly connected.

### 9.4 Euler Characteristic

**Definition.** For a finite CW-complex (e.g., a polyhedron), the **Euler characteristic** is:

$$\chi = V - E + F$$

where $V$ = number of vertices, $E$ = number of edges, $F$ = number of faces (or higher-dimensional
cells more generally).

**Example 9.5.**

| Surface                          | $\chi$ |
| -------------------------------- | ------ |
| Sphere $S^2$                     | 2      |
| Torus $T^2$                      | 0      |
| Projective plane $\mathbb{R}P^2$ | 1      |
| Klein bottle $K$                 | 0      |
| Double torus (genus 2)           | $-2$   |

For a closed orientable surface of genus $g$: $\chi = 2 - 2g$.

### 9.5 Classification of Surfaces

**Theorem 9.1 (Classification of Compact Surfaces).** Every compact connected surface is
homeomorphic to exactly one of:

1. A sphere with $g$ handles (orientable, genus $g$), or
2. A sphere with $g$ cross-caps / Möbius bands (non-orientable, genus $g$).

**Key surfaces:**

- **Torus $T^2$:** A coffee mug / donut. Constructed by identifying opposite edges of a square.
- **Projective plane $\mathbb{R}P^2$:** Obtained by identifying antipodal points of $S^2$.
  Non-orientable.
- **Klein bottle $K$:** Obtained by identifying opposite edges of a square with one pair reversed.
  Non-orientable, cannot be embedded in $\mathbb{R}^3$.

### 9.6 Covering Spaces

**Definition.** A continuous surjection $p : \tilde{X} \to X$ is a **covering map** if every point
$x \in X$ has an open neighbourhood $U$ such that $p^{-1}(U)$ is a disjoint union of open sets in
$\tilde{X}$, each mapped homeomorphically onto $U$ by $p$.

**Example 9.6.** The map $p : \mathbb{R} \to S^1$ defined by $p(t) = e^{2\pi i t}$ is a covering
map. The preimage of any small arc on $S^1$ consists of infinitely many disjoint intervals in
$\mathbb{R}$.

**Theorem 9.2 (Lifting Property).** If $p : \tilde{X} \to X$ is a covering map, $\tilde{X}$ is
path-connected, and $f : [0, 1] \to X$ is a loop based at $x_0$, then $f$ lifts to a unique path
$\tilde{f} : [0, 1] \to \tilde{X}$ starting at any chosen preimage $\tilde{x}_0 \in p^{-1}(x_0)$.

The fundamental group $\pi_1(S^1) \cong \mathbb{Z}$ can be proved using this lifting property: a
loop in $S^1$ lifts to a path in $\mathbb{R}$ whose endpoints differ by an integer, the winding
number.

## Key Relationships

- **Homotopy equivalence is weaker than homeomorphism:** Two spaces can be homotopy equivalent without being homeomorphic (e.g., $\mathbb{R}^n$ and a point are homotopy equivalent but not homeomorphic).
- **The fundamental group detects "holes":** A space with trivial $\pi_1$ has no one-dimensional holes; non-trivial $\pi_1$ indicates loops that cannot be contracted.
- **Euler characteristic is a homotopy invariant:** Any two homotopy equivalent spaces have the same Euler characteristic, even though it can be computed from any triangulation.
- **Covering spaces relate local and global topology:** The universal cover of a space $X$ is directly connected, and $\pi_1(X)$ acts on it as deck transformations.
- **The classification of surfaces reduces topology to algebra:** Every compact surface is determined by its orientability and Euler characteristic.

## Common Pitfalls

- **Confusing homotopy with homeomorphism:** Two spaces can be homotopy equivalent without being homeomorphic (e.g., a solid disc and a point). Homotopy equivalence is a much coarser relation than homeomorphism.
- **Assuming $\pi_1(X)$ is always abelian:** The fundamental group of a general space need not be abelian. For example, $\pi_1(S^1 \vee S^1)$ is the free group on two generators, which is non-abelian.
- **Forgetting basepoint dependence:** For non-path-connected spaces, the fundamental group depends on the choice of basepoint, and different components may have different fundamental groups.

## Applications

- **Robotics and motion planning:** The fundamental group of a configuration space determines whether paths between configurations can be continuously deformed into each other.
- **Data analysis (Topological Data Analysis):** Persistent homology detects topological features (connected components, loops, voids) in high-dimensional data sets.
- **Physics:** Homotopy groups classify topological defects in condensed matter (e.g., vortices in superfluids, dislocations in crystals).
- **Knot theory:** The fundamental group of the knot complement is a powerful knot invariant used to distinguish different knots.


## Intuition

Algebraic topology translates geometric questions into algebra. A loop that cannot be shrunk to a point reveals a hole in the space, and the fundamental group counts these holes by recording how loops wind around them. Think of a maze: if you can walk any path back to your starting point without getting stuck, the space is directly connected. The Euler characteristic provides a numerical fingerprint: for any surface, vertices minus edges plus faces gives a number that does not depend on how you triangulate it. This converts the continuous problem of classifying surfaces into the discrete problem of counting integers.
## Cross-References

- **[Metric Spaces](9-topology/7_metric-spaces.md)**: The metric space structure provides the foundation for topological concepts like continuity and convergence used throughout algebraic topology.
- **[Closed Sets, Closure, Interior, and Boundary](9-topology/3_closed-sets-closure-interior-and-boundary.md)**: Understanding open and closed sets is essential for defining covering spaces and CW-complexes.
- **[Separation Axioms](9-topology/8_separation-axioms.md)**: The separation axioms determine which topological spaces have well-behaved fundamental groups and classification results.
- **[Sequences and Limits](3-real-analysis/2_sequences-and-limits.md)**: The notion of convergence underpins the definition of homotopy and the fundamental group.


- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
