---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "10_summary", "url": "https://mathematics.wyattau.com/12-differential-geometry/10_summary"}]
}
</script>
title: Summary
tags:
  - Mathematics
  - University
description: "| Concept | Description | | ------------------------ | ---------------------------------------------------------------- | | Smooth manifold | Hausdorff,"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "10_summary", "url": "https://mathematics.wyattau.com/12-differential-geometry/10_summary"}]
}
</script>

| Concept                  | Description                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| Smooth manifold          | Hausdorff, second countable, locally Euclidean space             |
| Tangent space $T_p M$    | Space of directional derivatives at $p$                          |
| Vector field             | Smooth section of $TM$                                           |
| Lie bracket $[X, Y]$     | Measures non-commutativity of flows                              |
| Differential form        | Alternating covariant tensor field                               |
| Exterior derivative $d$  | $d^2 = 0$, generalizes gradient/curl/div                         |
| Stokes' theorem          | $\int_{\partial M} \omega = \int_M d\omega$                      |
| Riemannian metric        | Smooth family of inner products on tangent spaces                |
| Levi-Civita connection   | Unique torsion-free, metric-compatible connection                |
| Geodesic                 | Curve with zero acceleration $\nabla_{\dot\gamma}\dot\gamma = 0$ |
| Riemann curvature tensor | Measures non-commutativity of parallel transport                 |
| Gauss-Bonnet theorem     | Total curvature = $2\pi \chi(M)$ for compact surfaces            |

### Key Theorems

1. **Existence and uniqueness of integral curves**: For every smooth vector field $X$ on $M$ and
   every $p \in M$, there exists a unique maximal integral curve through $p$.

2. **Levi-Civita Theorem**: On a Riemannian manifold, there exists a unique metric-compatible,
   torsion-free connection.

3. **Stokes' Theorem**: For a compact oriented $n$-manifold $M$ with boundary and an $(n-1)$-form
   $\omega$ on $M$: $\int_{\partial M} \omega = \int_M d\omega$.

4. **Gauss-Bonnet Theorem**: For a compact oriented Riemannian 2-manifold:
   $\int_M K\, dA = 2\pi\chi(M)$.

5. **Frobenius Theorem**: A distribution $\mathcal{D} \subseteq TM$ is integrable if and only if it
   is involutive: $[X, Y] \in \Gamma(\mathcal{D})$ for all $X, Y \in \Gamma(\mathcal{D})$.

### Important Formulas

**Christoffel symbols:**
$$\Gamma^k_{ij} = \frac{1}{2}g^{k\ell}(\partial_i g_{j\ell} + \partial_j g_{i\ell} - \partial_\ell g_{ij})$$

**Geodesic equation:**
$$\ddot\gamma^k + \Gamma^k_{ij}\dot\gamma^i\dot\gamma^j = 0$$

**Riemann curvature tensor:**
$$R^\ell_{ijk} = \partial_i\Gamma^\ell_{jk} - \partial_j\Gamma^\ell_{ik} + \Gamma^m_{jk}\Gamma^\ell_{im} - \Gamma^m_{ik}\Gamma^\ell_{jm}$$

**Lie bracket (coordinates):**
$$[X, Y] = \left(X^j\frac{\partial Y^i}{\partial x^j} - Y^j\frac{\partial X^i}{\partial x^j}\right)\frac{\partial}{\partial x^i}$$

**Exterior derivative:**
$$d\omega = d\left(\frac{1}{k!}\omega_{i_1\ldots i_k} dx^{i_1} \wedge \cdots \wedge dx^{i_k}\right) = \frac{1}{k!}\frac{\partial\omega_{i_1\ldots i_k}}{\partial x^j} dx^j \wedge dx^{i_1} \wedge \cdots \wedge dx^{i_k}$$

**Lie derivative:**
$$\mathcal{L}_X Y = [X, Y], \quad \mathcal{L}_X f = X(f), \quad \mathcal{L}_X \omega = \frac{d}{dt}\big|_{t=0} (\Phi_t^*\omega)$$

### Relations Between Concepts

The following diagram shows how the core concepts of differential geometry relate:

- **Manifold** $\xrightarrow{\text{smooth structure}}$ **Tangent bundle** $\xrightarrow{\text{section}}$ **Vector field**
- **Vector field** $\xrightarrow{\text{integral curve}}$ **Flow** $\xrightarrow{\text{Lie bracket}}$ **Lie algebra**
- **Metric** $\xrightarrow{\text{Levi-Civita}}$ **Connection** $\xrightarrow{\text{parallel transport}}$ **Curvature**
- **Curvature** $\xrightarrow{\text{trace}}$ **Ricci** $\xrightarrow{\text{trace}}$ **Scalar curvature**
- **Connection** $\xrightarrow{\text{geodesic equation}}$ **Geodesic** $\xrightarrow{\text{exponential map}}$ **Normal coordinates**
- **Manifold** $\xrightarrow{\text{cotangent bundle}}$ **Differential forms** $\xrightarrow{\text{exterior derivative}}$ **de Rham cohomology**

### Classification of Compact Surfaces

Every compact, connected, oriented 2-manifold is homeomorphic to a sphere with $g$ handles, where
$g$ is the **genus**. The Euler characteristic is $\chi = 2 - 2g$.

| Surface | Genus $g$ | Euler characteristic $\chi$ | Total curvature |
|---------|-----------|---------------------------|-----------------|
| Sphere $S^2$ | 0 | 2 | $4\pi$ |
| Torus $T^2$ | 1 | 0 | 0 |
| Double torus | 2 | $-2$ | $-4\pi$ |
| $g$-holed torus | $g$ | $2 - 2g$ | $4\pi(1-g)$ |

### Key Differential Operators in Coordinates

| Operator | Action on $f$ / $\omega$ | In coordinates |
|----------|--------------------------|----------------|
| Gradient $\nabla f$ | Vector field dual to $df$ | $(\nabla f)^i = g^{ij}\partial_j f$ |
| Divergence $\nabla \cdot X$ | $\mathcal{L}_X dV = (\nabla \cdot X) dV$ | $\nabla \cdot X = \frac{1}{\sqrt{|g|}}\partial_i(\sqrt{|g|} X^i)$ |
| Laplacian $\Delta f$ | $\nabla \cdot \nabla f$ | $\Delta f = \frac{1}{\sqrt{|g|}}\partial_i(g^{ij}\sqrt{|g|}\partial_j f)$ |
| Curl $(\nabla \times X)$ | $(\star dX^\flat)^\sharp$ | Depends on dimension; in $\mathbb{R}^3$, $(\nabla \times X)^i = \epsilon^{ijk}\partial_j X_k$ |

### Important Identities

1. **Cartan's magic formula:** $\mathcal{L}_X \omega = d(i_X \omega) + i_X(d\omega)$.
2. **Poincaré lemma:** If $d\omega = 0$ (closed form) and the domain is contractible, then
   $\omega = d\eta$ (exact form).
3. **Hodge star:** $\star : \Omega^k(M) \to \Omega^{n-k}(M)$ satisfies $\star\star = (-1)^{k(n-k)}$.
4. **Kodaira vanishing:** On a Kähler manifold with positive line bundle, certain cohomology
   groups vanish, giving restrictions on the topology.

### Common Pitfalls

1. **The Levi-Civita connection depends on the metric**, not just the smooth structure. Two metrics
   on the same smooth manifold generally give different connections, geodesics, and curvatures.

2. **Not every smooth distribution is integrable.** The Frobenius theorem gives necessary and
   sufficient conditions; involutivity ($[X, Y] \in \mathcal{D}$ for all $X, Y \in \mathcal{D}$)
   must be checked.

3. **The Lie bracket is not the commutator of flows.** $[X, Y] = 0$ means flows commute, but
   $[X, Y] \neq 0$ does not mean they do not flow at all — only that the composition order matters.

4. **Stokes' theorem requires compact support or compact manifold with boundary.** For non-compact
   manifolds, additional decay conditions are needed for the integral to be well-defined.

5. **The exponential map is not globally defined.** It is only defined on a neighborhood of zero
   in $T_p M$, unless the manifold is geodesically complete (Hopf-Rinow theorem).

### Practice Problems

1. Show that $S^2$ and $S^1 \times S^1$ (the torus) are not homeomorphic by comparing their Euler
   characteristics. Compute $\chi(S^2)$ and $\chi(T^2)$ explicitly using a triangulation.

2. Prove that the Lie bracket satisfies the Jacobi identity:
   $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$.

3. Compute the Christoffel symbols for the sphere $S^2$ with the round metric
   $g = d\theta^2 + \sin^2\theta\,d\phi^2$. Then derive the geodesic equations and verify that
   great circles are geodesics.

4. For the 2-torus $T^2 = \mathbb{R}^2/\mathbb{Z}^2$ with the flat metric inherited from
   $\mathbb{R}^2$, compute the Riemann curvature tensor. Show that it vanishes identically.

5. Let $M$ be a compact oriented Riemannian 2-manifold with $\chi(M) = 0$. Use the Gauss-Bonnet
   theorem to prove that $\int_M K\,dA = 0$. Give an example of such a manifold.

6. Show that the exterior derivative $d$ satisfies $d^2 = 0$. Use this to prove that every exact
   form is closed. Give a counterexample to the converse on a non-contractible manifold.

7. Compute the de Rham cohomology groups $H^1_{\text{dR}}(S^1)$ and $H^1_{\text{dR}}(T^2)$.
   What do they tell you about the topology of these manifolds?

### Key Applications

| Application | Manifold | Key Result |
|------------|----------|------------|
| General relativity | Spacetime $(M,g)$ | Einstein equations: $R_{\mu\nu} - \frac{1}{2}Rg_{\mu\nu} = 8\pi G T_{\mu\nu}$ |
| Gauge theory | Principal bundle $P \to M$ | Yang-Mills equations: $d_A \star F_A = 0$ |
| String theory | Calabi-Yau 3-fold | Ricci-flat Kähler metric moduli |
| Computer vision | Shape space | Geodesic distances for shape matching |
| Robotics | Configuration space $C$ | Motion planning via geodesics in $C$ |

## Intuition

Differential geometry studies curved spaces by doing calculus on them. A manifold looks flat at each point, like the Earth appears flat locally, but the way these local patches fit together encodes curvature. The Levi-Civita connection tells you how to compare vectors at different points without leaving the surface, and geodesics are the straightest possible paths on curved ground. The Riemann curvature tensor measures how much parallel transport depends on the path taken. Gauss-Bonnet ties local curvature to global topology: you cannot curve a surface without changing its Euler characteristic.

## Cross-References

- [Vector Fields and Flows](/mathematics/12-differential-geometry/3_vector-fields-and-flows) -- Integral curves, Lie brackets, and flows are foundational to the differential geometry covered in this summary.
- [Geodesics](/mathematics/12-differential-geometry/6_geodesics) -- Geodesics, Jacobi fields, and the exponential map extend the metric geometry summarized here.
- [Key Theorems in Functional Analysis](/mathematics/11-functional-analysis/9_summary-of-key-theorems) -- The spectral theorem and compact operator theory underpin the analytical methods used in differential geometry.
- [Lagrange's Theorem](/mathematics/1-abstract-algebra/3_lagrange-s-theorem) -- Group-theoretic structures appear in the study of Lie groups and symmetry of manifolds.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)
