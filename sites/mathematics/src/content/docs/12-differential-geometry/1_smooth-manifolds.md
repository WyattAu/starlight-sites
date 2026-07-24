---

date: 2026-07-23T21:57:32+01:00
title: Smooth Manifolds
tags:
  - Mathematics
  - University
description: 'An -dimensional is a topological space that is: Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "1_smooth Manifolds", "url": "https://mathematics.wyattau.com/12-differential-geometry/1_smooth-manifolds"}]
}
</script>

### 1.1 Topological Manifolds

An $n$-dimensional **topological manifold** $M$ is a topological space that is:

1. **Hausdorff**: distinct points have disjoint neighborhoods.
2. **Second countable**: the topology has a countable basis.
3. **Locally Euclidean**: every point $p \in M$ has a neighborhood $U$ homeomorphic to an open
   subset of $\mathbb{R}^n$.

A homeomorphism $\varphi : U \to V \subseteq \mathbb{R}^n$ is called a **coordinate chart** (or just
**chart**), and $(U, \varphi)$ is a **coordinate neighborhood**.

### 1.2 Smooth Manifolds and Atlases

A **smooth atlas** on a topological $n$-manifold $M$ is a collection of charts
$\{(U_\alpha, \varphi_\alpha)\}$ such that:

1. The $U_\alpha$ cover $M$.
2. For every pair of overlapping charts, the **transition map**
   $\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)$
   is a smooth diffeomorphism.

Two atlases are **compatible** if their union is also a smooth atlas. A **smooth structure** on $M$
is a maximal smooth atlas.

**Example 1.** $\mathbb{R}^n$ with the identity chart is a smooth manifold.

**Example 2.** $S^n = \{x \in \mathbb{R}^{n+1} : \|x\| = 1\}$ is a smooth manifold. Use
stereographic projection or the $2(n+1)$ hemisphere charts.

**Example 3.** The general linear group
$GL_n(\mathbb{R}) = \{A \in M_n(\mathbb{R}) : \det(A) \neq 0\}$ is an open subset of
$\mathbb{R}^{n^2}$, hence a smooth manifold of dimension $n^2$.

**Example 4.** The real projective space $\mathbb{RP}^n$ is a smooth manifold of dimension $n$.

### 1.3 Smooth Maps and Diffeomorphisms

A map $f : M \to N$ between smooth manifolds is **smooth** if for every $p \in M$, there exist
charts $(U, \varphi)$ near $p$ and $(V, \psi)$ near $f(p)$ with $f(U) \subseteq V$, such that
$\psi \circ f \circ \varphi^{-1}$ is smooth as a map between open subsets of Euclidean spaces.

A **diffeomorphism** is a smooth bijection with smooth inverse. If $M$ and $N$ are diffeomorphic, we
write $M \cong N$.

**Proposition 1.1.** Diffeomorphism is an equivalence relation on the class of smooth manifolds.

### 1.4 Tangent Spaces and Derivatives

For a smooth manifold $M$ of dimension $n$, the **tangent space** $T_p M$ at $p \in M$ can be
defined in several equivalent ways:

**Definition (Derivations).** A **tangent vector** at $p$ is a linear map
$v : C^\infty(M) \to \mathbb{R}$ satisfying the Leibniz rule:

$$v(fg) = f(p)\, v(g) + v(f)\, g(p)$$

The space of all such derivations is $T_p M$, an $n$-dimensional vector space.

**Definition (Curves).** A tangent vector is an equivalence class of smooth curves
$\gamma : (-\varepsilon, \varepsilon) \to M$ with $\gamma(0) = p$, where $\gamma_1 \sim \gamma_2$
if they have the same derivative in any chart.

In local coordinates $(x^1, \ldots, x^n)$, a basis for $T_p M$ is given by the partial derivative
operators $\{\partial/\partial x^i|_p\}$.

**The differential.** For a smooth map $f : M \to N$, the **pushforward** or **differential**
$df_p : T_p M \to T_{f(p)} N$ is defined by:

$$df_p(v)(g) = v(g \circ f)$$

for $g \in C^\infty(N)$. In coordinates, $df_p$ is represented by the Jacobian matrix.

### 1.5 The Cotangent Space

The **cotangent space** $T_p^* M$ is the dual vector space to $T_p M$. Elements are called
**covectors** or **differential 1-forms** at $p$.

In coordinates, the basis dual to $\{\partial/\partial x^i\}$ is $\{dx^i\}$, defined by
$dx^i(\partial/\partial x^j) = \delta^i_j$.

The **differential** of a function $f \in C^\infty(M)$ at $p$ is the covector:

$$df_p(v) = v(f)$$

In coordinates: $df = \frac{\partial f}{\partial x^i}\, dx^i$.

### 1.6 Vector Fields

A **smooth vector field** $X$ on $M$ assigns a tangent vector $X_p \in T_p M$ smoothly to each
$p \in M$. In coordinates:

$$X = X^i(x) \frac{\partial}{\partial x^i}$$

where $X^i$ are smooth functions.

**Integral curves.** A curve $\gamma(t)$ is an integral curve of $X$ if
$\dot{\gamma}(t) = X_{\gamma(t)}$. The **flow** $\phi_t$ of $X$ is a one-parameter family of
diffeomorphisms.

**Lie bracket.** The Lie bracket of two vector fields $X, Y$ is:

$$[X, Y](f) = X(Y(f)) - Y(X(f))$$

In coordinates: $[X, Y]^i = X^j \partial_j Y^i - Y^j \partial_j X^i$.

### 1.7 Practice Problems

**Problem 1.** Show that $S^1$ is a smooth manifold by constructing an atlas with two charts.

_Solution._ Use stereographic projection from the north and south poles. For
$U_1 = S^1 \setminus \{(0, 1)\}$, $\varphi_1(x, y) = x/(1 - y)$. For
$U_2 = S^1 \setminus \{(0, -1)\}$, $\varphi_2(x, y) = x/(1 + y)$. The transition map
$\varphi_2 \circ \varphi_1^{-1}(t) = 1/t$ is smooth on $\mathbb{R} \setminus \{0\}$.
$\blacksquare$

**Problem 2.** Show that $T^2 = S^1 \times S^1$ is a smooth manifold.

**Problem 3.** Prove that the tangent bundle $TM = \bigcup_{p \in M} T_p M$ is itself a smooth
$2n$-dimensional manifold.

### 1.8 Intuition: What Is a Manifold?

A manifold is a space that looks like Euclidean space when you zoom in closely enough. The surface of the Earth is a two-dimensional manifold: locally it appears flat (which is why map projections work for small regions), but globally it has a different topology (it is a sphere). The key idea is that you can cover the manifold with overlapping coordinate charts, each mapping a small patch to $\mathbb{R}^n$, and the transition maps between overlapping charts are smooth.

A smooth structure on a manifold is the collection of charts that make all transition maps smooth. This is what allows you to do calculus on manifolds: derivatives, integrals, and differential equations make sense because each chart locally looks like Euclidean space. The transition maps ensure that these local constructions are compatible across overlapping charts. Partitions of unity are the technical tool that lets you glue local constructions (like Riemannian metrics or differential forms) into global ones. Manifolds are the natural setting for general relativity (spacetime is a 4-dimensional Lorentzian manifold), gauge theory (connections on principal bundles), and many areas of modern geometry and physics.

### 1.9 Submanifolds

**Definition.** A subset $N \subseteq M$ is an **embedded submanifold** of dimension $k \leq n$ if
for every $p \in N$, there exists a chart $(U, \varphi)$ of $M$ such that
$\varphi(U \cap N) = \varphi(U) \cap (\mathbb{R}^k \times \{0\})$.

**Example.** $S^{n-1} \subseteq \mathbb{R}^n$ is an embedded submanifold of dimension $n-1$.

**Example.** The torus $T^2 \subseteq \mathbb{R}^3$ is an embedded submanifold of dimension $2$.

### 1.9 Partitions of Unity

**Theorem 1.2.** Every smooth manifold admits a **partition of unity**: a collection of smooth
functions $\{\rho_\alpha\}$ such that $\mathrm{supp}(\rho_\alpha)$ is locally finite, each
$\rho_\alpha \geq 0$, and $\sum_\alpha \rho_\alpha = 1$.

Partitions of unity are used to construct global objects (Riemannian metrics, connections) from
local data.

**Problem 4.** Show that $S^1 \times S^1$ is diffeomorphic to the torus $T^2$ embedded in
$\mathbb{R}^3$.

**Problem 5.** Construct an atlas for $\mathbb{RP}^2$ and verify that the transition maps are
smooth.

### 1.10 Common Mistakes

**Mistake 1: Confusing a chart with an atlas**
A chart $(U, \varphi)$ maps a single open set to $\mathbb{R}^n$, while an atlas is a collection of charts that cover the entire manifold. A single chart is not sufficient for most manifolds (e.g., $S^1$ requires at least two charts). An atlas must have smooth transition maps on all overlaps.

**Mistake 2: Assuming embedded submanifolds are the same as immersed submanifolds**
An embedded submanifold has the subspace topology, while an immersed submanifold may have a finer topology. For example, a dense line on a torus is an immersed submanifold but not embedded. The key difference is that embedded submanifolds are locally flat in the ambient manifold, while immersed submanifolds may self-intersect globally.

**Mistake 3: Forgetting that partitions of unity are necessary for gluing local constructions**
Local objects like Riemannian metrics or differential forms can be defined on each chart, but gluing them into a global object requires a partition of unity. Without it, there is no canonical way to combine local data that agree on overlaps. Partitions of unity always exist on smooth manifolds, which is a key reason smoothness is assumed.

## Cross-References

- **[Differential Forms](4_differential-forms.md)**: Differential forms are sections of exterior powers of the cotangent bundle on a smooth manifold.
- **[Riemannian Geometry](5_riemannian-geometry.md)**: A Riemannian metric assigns an inner product to each tangent space of a smooth manifold.
- **[Vector Fields and Flows](3_vector-fields-and-flows.md)**: Vector fields assign a tangent vector to each point of a manifold and generate flows via integral curves.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
