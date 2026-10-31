---

date: 2026-07-23T21:57:32+01:00
title: "Topological Spaces"
tags:
  - University Maths
description: 'A is a pair where is a set and is a collection of subsets of called, satisfying Comprehensive educational content coverage with definitions and practice proble'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "2_topological Spaces", "url": "https://mathematics.wyattau.com/9-topology/2_topological-spaces"}]
}
</script>

### 2.1 Definition

**Definition.** A **topological space** is a pair $(X, \tau)$ where $X$ is a set and $\tau$ is a
collection of subsets of $X$ called **open sets**, satisfying:

1. $\emptyset \in \tau$ and $X \in \tau$.
2. The union of any sub-collection of $\tau$ is in $\tau$ (arbitrary unions of open sets are open).
3. The intersection of any **finite** sub-collection of $\tau$ is in $\tau$ (finite intersections of
   open sets are open).

The collection $\tau$ is called a **topology** on $X$.

### 2.2 Examples of Topologies

**Example 2.1.** Let $X = \{a, b, c\}$. The collection

$$
\tau = \{\emptyset, \{a\}, \{a, b\}, \{a, b, c\}\}
$$

is a topology on $X$.

**Example 2.2 (Discrete topology).** For any set $X$, let $\tau_d = \mathcal{P}(X)$ (all subsets of
$X$). This is the **discrete topology**, every subset is open.

**Example 2.3 (Indiscrete topology).** For any set $X$, let $\tau_i = \{\emptyset, X\}$. This is the
**indiscrete topology** (or trivial topology).

**Example 2.4 (Cofinite topology).** For any infinite set $X$, let $\tau_c$ consist of $\emptyset$
and all subsets $U \subseteq X$ such that $X \setminus U$ is finite. This is the **cofinite
topology**.

**Example 2.5 (Standard topology on $\mathbb{R}$).** A subset $U \subseteq \mathbb{R}$ is **open**
if for every $x \in U$ there exists $\varepsilon > 0$ such that
$(x - \varepsilon, x + \varepsilon) \subseteq U$. The collection of all such open sets is the
**standard topology** on $\mathbb{R}$.

### 2.3 Basis for a Topology

**Definition.** A **basis** for a topology $\tau$ on $X$ is a collection
$\mathcal{B} \subseteq \tau$ such that every open set is a union of elements of $\mathcal{B}$.

Equivalently, $\mathcal{B}$ is a basis if and only if:

1. For each $x \in X$, there exists $B \in \mathcal{B}$ with $x \in B$.
2. If $B_1, B_2 \in \mathcal{B}$ and $x \in B_1 \cap B_2$, then there exists $B_3 \in \mathcal{B}$
   with $x \in B_3 \subseteq B_1 \cap B_2$.

**Example 2.6.** The collection of all open intervals $(a, b)$ in $\mathbb{R}$ forms a basis for the
standard topology.

**Example 2.7.** The collection of all open balls $B_r(p) = \{x \in \mathbb{R}^n : \|x - p\| < r\}$
forms a basis for the standard topology on $\mathbb{R}^n$.

### 2.4 Subspace Topology

**Definition.** Let $(X, \tau)$ be a topological space and $Y \subseteq X$. The **subspace
topology** on $Y$ is

$$
\tau_Y = \{U \cap Y : U \in \tau\}.
$$

**Proposition 2.1.** If $\mathcal{B}$ is a basis for $\tau$, then $\{B \cap Y : B \in \mathcal{B}\}$
is a basis for the subspace topology on $Y$.

**Example 2.8.** The subspace topology on $[0, 1] \subseteq \mathbb{R}$ (with the standard topology)
has $[0, 1/2)$ as an open set (since $[0, 1/2) = (-1/2, 1/2) \cap [0, 1]$).

### 2.5 Comparison of Topologies

**Definition.** Let $\tau_1$ and $\tau_2$ be topologies on $X$. We say $\tau_1$ is **coarser**
(weaker) than $\tau_2$ (or $\tau_2$ is **finer** (stronger) than $\tau_1$) if
$\tau_1 \subseteq \tau_2$.

For any set $X$: indiscrete $\subseteq$ cofinite $\subseteq$ standard (if $X = \mathbb{R}$)
$\subseteq$ discrete.

## Proofs

The axioms are asymmetric; arbitrary unions, only finite intersections; and
that asymmetry is where the subject's surprising behaviour comes from. The
proofs here verify the axioms on the standard and cofinite topologies, exhibit
the counterexample that shows the finiteness cannot be relaxed, and prove the
basis criterion used everywhere afterwards.

**Proposition (the standard topology on $\mathbb{R}$ is a topology).**

*Proof.* Let $\{U_\alpha\}_{\alpha \in A}$ be any collection of open sets and
$x \in \bigcup_\alpha U_\alpha$. Then $x \in U_{\alpha_0}$ for some
$\alpha_0$, so some $\varepsilon > 0$ has $(x - \varepsilon, x + \varepsilon) \subseteq U_{\alpha_0} \subseteq \bigcup_\alpha U_\alpha$; the union is open.
Arbitrariness of the collection was used nowhere: any sub-collection, however
large, contributes its $\varepsilon$-ball at each of its points.

For intersections, let $U, V$ be open and $x \in U \cap V$. Openness of $U$
gives $(x - \varepsilon_U, x + \varepsilon_U) \subseteq U$; openness of $V$
gives $(x - \varepsilon_V, x + \varepsilon_V) \subseteq V$. Take
$\varepsilon = \min(\varepsilon_U, \varepsilon_V) > 0$: the smaller ball lies
in both, hence in $U \cap V$; and *finitely many* more extend the same
argument by induction, since a finite set of positive epsilons has a positive
minimum. $\blacksquare$

**The counterexample that shows finiteness cannot be relaxed.** The infinite
intersection

$$
\bigcap_{n=1}^{\infty} \left(-\tfrac{1}{n}, \tfrac{1}{n}\right) = \{0\}
$$

is *not* open: no $\varepsilon$-ball about $0$ fits inside the singleton. The
mechanism of the finite proof fails at exactly this point; an infinite set of
positive numbers $\{\varepsilon_n\}$ can have infimum zero, so the "minimum"
step has nothing to take. Every equivalent definition of openness inherits the
restriction, and the failure is not pathological: singletons being open would
make *every* set open (any set is a union of singletons), collapsing the
standard topology to the discrete one and destroying convergence as a
topological notion. The axiom is doing the work that makes $\mathbb{R}$
interesting.

**Proposition (the cofinite topology is a topology, on any set $X$).**

*Proof.* Let $\tau_c = \{\emptyset\} \cup \{U : X \setminus U \text{ is finite}\}$.

*Arbitrary unions.* Let $\{U_\alpha\}$ be cofinite-or-empty and form
$U = \bigcup_\alpha U_\alpha$. If every $U_\alpha = \emptyset$ then $U = \emptyset \in \tau_c$. Otherwise some $U_{\alpha_0}$ is cofinite, so
$X \setminus U \subseteq X \setminus U_{\alpha_0}$ is finite (a subset of a
finite set), and $U \in \tau_c$. Note the union's complement only *shrinks*.

*Finite intersections.* Let $U_1, \dots, U_m$ be cofinite. By De Morgan,

$$
X \setminus (U_1 \cap \cdots \cap U_m) = \bigcup_{k=1}^{m} (X \setminus U_k),
$$

a finite union of finite sets, hence finite; so the intersection is cofinite.
$\blacksquare$

The proof shows precisely where infinitude breaks: an *arbitrary* union of
complements would be an arbitrary union of finite sets, which can be infinite : $\bigcup_n (\mathbb{N} \setminus \{n\}) = \mathbb{N}$, and $\mathbb{N}$
itself is not cofinite-complement. The finite-intersections axiom is what the
cofinite topology can satisfy; the arbitrary-union complement behaviour is what
it cannot exceed.

**Proposition 2.1 (basis of the subspace topology).** If $\mathcal{B}$ is a
basis for $\tau$ on $X$ and $Y \subseteq X$, then $\{B \cap Y : B \in \mathcal{B}\}$ is a basis for the subspace topology on $Y$.

*Proof.* Two things to show: the restricted family is a basis for *some*
topology (the covering and intersection conditions), and the topology it
generates equals $\tau_Y$.

*Covering.* For each $y \in Y$, $y \in X \in \tau$, and the basis covering
condition gives $B \in \mathcal{B}$ with $y \in B$; then $y \in B \cap Y$.

*Intersection condition.* If $y \in (B_1 \cap Y) \cap (B_2 \cap Y)$ then $y
\in B_1 \cap B_2$, and the basis condition gives $B_3 \in \mathcal{B}$ with $y
\in B_3 \subseteq B_1 \cap B_2$; then $y \in B_3 \cap Y \subseteq (B_1 \cap Y)
\cap (B_2 \cap Y)$.

*Equality with the subspace topology.* First, every $B \cap Y$ *is* subspace-
open by definition, so the topology generated by the restricted family is
contained in $\tau_Y$. Conversely, let $U \in \tau_Y$, so $U = V \cap Y$ for
some $V \in \tau$; write $V = \bigcup B_\alpha$ over basis elements, and then

$$
U = V \cap Y = \bigcup_\alpha (B_\alpha \cap Y),
$$

a union of restricted basis elements; so $U$ is in the generated topology.
Both containments give equality. $\blacksquare$

The second containment is where subspace intuition comes from: a set open in
$Y$ need not be open in $X$ ($[0, 1/2)$ in $[0,1]$), but it is always the
*intersection with $Y$* of something open in $X$; and the worked example
2.8 exhibits exactly that intersection.

**Proposition (basis criterion).** A collection $\mathcal{B} \subseteq \mathcal{P}(X)$ satisfies the two basis conditions iff the collection of all
unions of elements of $\mathcal{B}$ is a topology on $X$ for which $\mathcal{B}$
is a basis.

*Proof.* ($\Leftarrow$) Suppose $\mathcal{B}$ satisfies the two conditions and
let $\tau_{\mathcal{B}}$ be all unions of elements. $\emptyset$ is the empty
union; $X$ is covered by condition 1. Arbitrary unions of unions are unions.
For finite intersections, reduce to two: $(\bigcup_i B_i) \cap (\bigcup_j B'_j) = \bigcup_{i,j} (B_i \cap B'_j)$, and each $B_i \cap B'_j$ contains each
of its points in some $B_3 \in \mathcal{B}$ by condition 2; so the
intersection is a union of basis elements and lies in $\tau_{\mathcal{B}}$.
And $\mathcal{B}$ is a basis for $\tau_{\mathcal{B}}$ by construction.

($\Rightarrow$) If $\tau_{\mathcal{B}}$ is a topology with $\mathcal{B}$ a
basis, condition 1 holds since $X \in \tau_{\mathcal{B}}$ must be a union of
basis elements covering each point; condition 2 holds because for
$x \in B_1 \cap B_2$, the intersection $B_1 \cap B_2$ is open; being a finite
intersection of basis elements, each open; and is therefore a union of basis
elements, one of which contains $x$ and lies inside the intersection.
$\blacksquare$

The two conditions are exactly what makes "every open set is a union of basis
elements" *consistent*: condition 1 keeps the union covering $X$, condition 2
keeps the basis closed enough under overlap that unions of unions stay unions.
Open balls in $\mathbb{R}^n$ (Example 2.7) satisfy condition 2 with
$B_3 = B(p, \min(r_1 - d, r_2 - d))$-style radius-halving; the same
triangle-inequality geometry the metric-space chapter uses.

### 2.6 Key Relationships

<div class="table-wrap">

| Topology       | Basis                              | Separation        | Properties                                |
| -------------- | ---------------------------------- | ----------------- | ----------------------------------------- |
| Discrete       | $\{\{x\} : x \in X\}$              | Completely normal | Every function from $X$ is continuous     |
| Indiscrete     | $\{X\}$                            | Not $T_0$         | Every function to $X$ is continuous       |
| Cofinite       | $\{X \setminus F : F\text{ finite}\}$ | $T_1$ but not $T_2$ | Compact (any $X$)                         |
| Standard ($\mathbb{R}$) | $\{(a,b) : a<b\}$        | $T_4$ (normal)    | Connected, separable, Lindelöf            |
| Subspace       | $\{B \cap Y : B \in \mathcal{B}_X\}$ | Inherits $T_0,T_1,T_2$ | Open sets = intersections with $Y$        |

</div>

These examples span the spectrum from finest (discrete, many open sets) to coarsest (indiscrete, few open sets).

### 2.7 Common Pitfalls

- **Assuming all topologies are metric.** The cofinite topology on an infinite set is not Hausdorff ($T_2$) and cannot arise from a metric. **Fix:** Metric spaces are a proper subclass of topological spaces; many useful topologies are non-metrisable.
- **Thinking arbitrary intersections of open sets are open.** Only finite intersections are guaranteed. **Fix:** Counterexample: in $\mathbb{R}$, $\bigcap_{n=1}^\infty (-1/n, 1/n) = \{0\}$, which is not open.
- **Confusing open and closed sets.** A set can be both (clopen: $\emptyset$ and $X$), neither, or one without the other. **Fix:** Topology defines open sets; closed sets are complements. Check the definition, not intuition from $\mathbb{R}$.
- **Assuming the subspace topology is intuitive.** A set can be open in $Y \subseteq X$ without being open in $X$. **Fix:** $[0, 1/2)$ is open in $[0,1]$ with subspace topology because $[0,1/2) = (-1/2, 1/2) \cap [0,1]$.

### 2.8 Applications

- **Data analysis (persistent homology):** Topological data analysis uses simplicial complexes and persistent homology to study shape in high-dimensional data, with the Vietoris-Rips complex topology.
- **Network theory:** Graphs are 1-dimensional CW complexes; topological invariants like the fundamental group detect holes and cycles in communication and social networks.
- **Robot motion planning:** The configuration space of a robotic arm is a topological space; its connected components determine reachable configurations and its fundamental group encodes obstacles.
- **Quantum computing:** The topology of quantum error-correcting codes (surface codes, toric codes) determines their error thresholds; logical qubits correspond to non-contractible loops on the code manifold.
- **General relativity:** Spacetime is a 4-dimensional Lorentzian manifold (a topological space locally modelled on $\mathbb{R}^4$); global topology determines possible causal structures and singularities.

### 2.9 Worked Example: Comparing Topologies on a Finite Set

**Problem.** Let $X = \{1,2,3\}$. List all possible topologies on $X$ that are strictly finer than $\tau_1 = \{\emptyset, X\}$ and strictly coarser than $\tau_2 = \mathcal{P}(X)$. How many are there?

**Solution.** $\tau_1$ is the indiscrete topology (2 open sets). $\tau_2$ is the discrete topology (8 open sets). Any topology strictly between them must have at least 3 and at most 7 open sets.

We need $\tau$ such that $\tau_1 \subsetneq \tau \subsetneq \tau_2$. By checking all collections that satisfy the three axioms, we find three such topologies:

- $\tau_a = \{\emptyset, \{1\}, X\}$ (coarsest refinement)
- $\tau_b = \{\emptyset, \{1,2\}, X\}$
- $\tau_c = \{\emptyset, \{1\}, \{2\}, \{1,2\}, X\}$ (contains two singletons)

Each is strictly finer than the indiscrete topology (adds at least one non-trivial open set) and strictly coarser than the discrete topology (omits at least one singleton). There are three distinct intermediate topologies up to relabelling of points.

$\blacksquare$

### 2.10 Summary Table

<div class="table-wrap">

| Axiom                | Requirement                                      | Why finite matters                     |
| -------------------- | ------------------------------------------------ | -------------------------------------- |
| $\emptyset, X \in \tau$ | The empty set and whole space are open       | Provides base and top elements          |
| Arbitrary unions     | Any union of open sets is open                   | Ensures topology is closed under "or"   |
| Finite intersections | Finite intersections of open sets are open       | Prevents pathological singleton limits  |

</div>

## Cross-References

- **[Introduction to Topology](/9-topology/1_introduction-to-topology/)**: Foundational concepts including open sets, continuity, and the motivation for topology.
- **[Continuity and Homeomorphisms](/9-topology/4_continuity-and-homeomorphisms/)**: Continuous functions between topological spaces preserve structure without requiring metrics.
- **[Compactness](/9-topology/5_compactness/)**: Compactness is a key property of topological spaces related to finite subcovers and sequential convergence.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)

## Intuition

A topological space is what you get when you strip away all the structure you're used to, distances, angles, coordinates, and keep only the idea of "closeness." The only thing you're allowed to know is which points are near which other points, encoded by the collection of open sets. Think of it like a city where you can't measure distances but you can ask "is this neighbourhood near that neighbourhood?" The three axioms (empty set and whole space are open, arbitrary unions are open, finite intersections are open) are the minimum rules that make the concept of "nearness" behave consistently. Without them, you can't even define what it means for a function to be continuous.

The beauty of topology is that it captures the properties of space that survive continuous deformation, stretching, bending, twisting, but not tearing or gluing. A coffee mug and a donut are "the same" topologically because you can smoothly deform one into the other; both have one hole. The discrete topology (every subset is open) is the finest possible, it distinguishes every point from every other point. The indiscrete topology (only the whole space and empty set are open) is the coarsest, it can't distinguish any points at all. Most interesting topologies live somewhere between these extremes, and the standard topology on the real line is what makes calculus work: a function is continuous exactly when it preserves the open-set structure.

The real power of topological spaces is that they let you define continuity without mentioning numbers or distances. A function is continuous if the preimage of every open set is open, that's it. This simple definition works in settings far beyond Euclidean space: function spaces, quantum state spaces, the space of shapes in computer vision, the space of probability distributions in machine learning. Whenever you need to talk about convergence, continuity, or "sameness" in an abstract setting, topology provides the language. It's the most general framework for understanding the structure of mathematical spaces.
