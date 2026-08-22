---

date: 2026-07-23T21:57:32+01:00
title: "Riemannian Geometry | Mathematics"
tags:
  - Mathematics
  - University
description: 'A on a smooth manifold is a smooth family of inner products Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "5_riemannian Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry/5_riemannian-geometry"}]
}
</script>

### 5.1 Riemannian Metrics

A **Riemannian metric** on a smooth manifold $M$ is a smooth family of inner products
$g_p : T_p M \times T_p M \to \mathbb{R}$, varying smoothly with $p$. In local coordinates:

$$g = g_{ij}(x)\, dx^i \otimes dx^j$$

where $g_{ij} = g\left(\frac{\partial}{\partial x^i}, \frac{\partial}{\partial x^j}\right)$ forms a
symmetric positive-definite matrix.

**Example 1.** The Euclidean metric on $\mathbb{R}^n$: $g = \sum dx^i \otimes dx^i$, so
$g_{ij} = \delta_{ij}$.

**Example 2.** The standard metric on $S^2 \subseteq \mathbb{R}^3$: induced by the embedding. In
spherical coordinates $(\theta, \phi)$: $g = d\theta^2 + \cos^2\theta\, d\phi^2$.

### 5.2 The Levi-Civita Connection

A **connection** on $M$ is a map
$\nabla : \mathfrak{X}(M) \times \mathfrak{X}(M) \to \mathfrak{X}(M)$ satisfying linearity and the
Leibniz rule. A connection is **Riemannian** if it is compatible with the metric ($\nabla g = 0$)
and **torsion-free** ($\nabla_X Y - \nabla_Y X = [X, Y]$).

**Theorem 5.1 (Levi-Civita).** On any Riemannian manifold, there exists a unique Riemannian
(metric-compatible, torsion-free) connection, called the **Levi-Civita connection**.

### 5.3 Christoffel Symbols

In local coordinates, the Levi-Civita connection is determined by the **Christoffel symbols**
$\Gamma^k_{ij}$:

$$\nabla_{\frac{\partial}{\partial x^i}} \frac{\partial}{\partial x^j} = \Gamma^k_{ij} \frac{\partial}{\partial x^k}$$

These are given by:

$$\Gamma^k_{ij} = \frac{1}{2} g^{k\ell}\left(\frac{\partial g_{j\ell}}{\partial x^i} + \frac{\partial g_{i\ell}}{\partial x^j} - \frac{\partial g_{ij}}{\partial x^\ell}\right)$$

where $(g^{k\ell})$ is the inverse matrix of $(g_{k\ell})$.

### 5.4 Geodesics

A **geodesic** is a curve $\gamma : I \to M$ with zero acceleration:

$$\nabla_{\dot\gamma} \dot\gamma = 0$$

In local coordinates, this gives the geodesic equation:

$$\ddot\gamma^k + \Gamma^k_{ij} \dot\gamma^i \dot\gamma^j = 0$$

**Proposition 5.2.** For any $p \in M$ and $v \in T_p M$, there exists a unique geodesic
$\gamma_v : I_v \to M$ with $\gamma_v(0) = p$ and $\dot\gamma_v(0) = v$.

**Example 3.** On $\mathbb{R}^n$ with the Euclidean metric, $\Gamma^k_{ij} = 0$, so geodesics are
straight lines: $\gamma(t) = p + tv$.

**Example 4.** On $S^2$ with the round metric, geodesics are great circles (arcs of circles
centered at the sphere's center). In spherical coordinates $(\theta, \phi)$ with metric
$g = d\theta^2 + \cos^2\theta\, d\phi^2$, the non-zero Christoffel symbols are
$\Gamma^\theta_{\phi\phi} = \tan\theta$ and $\Gamma^\phi_{\theta\phi} = \Gamma^\phi_{\phi\theta} = \sec^2\theta$.

### 5.5 The Riemann Curvature Tensor

The **Riemann curvature tensor** $R : \mathfrak{X}(M) \times \mathfrak{X}(M) \times \mathfrak{X}(M) \to \mathfrak{X}(M)$ is defined by:

$$R(X, Y)Z = \nabla_X \nabla_Y Z - \nabla_Y \nabla_X Z - \nabla_{[X, Y]} Z$$

**Proposition 5.3 (Symmetries).** For any vector fields $X, Y, Z, W$:

1. $R(X, Y)Z = -R(Y, X)Z$ (anti-symmetry in first two arguments)
2. $\langle R(X, Y)Z, W\rangle = -\langle R(X, Y)W, Z\rangle$ (anti-symmetry in last two arguments)
3. $R(X, Y)Z + R(Y, Z)X + R(Z, X)Y = 0$ (first Bianchi identity)
4. $\langle R(X, Y)Z, W\rangle = \langle R(Z, W)X, Y\rangle$ (pair symmetry)
5. $\nabla_X R(Y, Z)W + \nabla_Y R(Z, X)W + \nabla_Z R(X, Y)W = 0$ (second Bianchi identity)

In local coordinates, the components are:

$$R^\ell_{ijk} = \partial_i \Gamma^\ell_{jk} - \partial_j \Gamma^\ell_{ik} + \Gamma^m_{jk} \Gamma^\ell_{im} - \Gamma^m_{ik} \Gamma^\ell_{jm}$$

### 5.6 Sectional, Ricci, and Scalar Curvature

Let $\Pi \subseteq T_p M$ be a 2-dimensional subspace spanned by $v, w \in T_p M$. The **sectional curvature** is:

$$K(\Pi) = \frac{\langle R(v, w)w, v\rangle}{|v|^2|w|^2 - \langle v, w\rangle^2}$$

**Proposition 5.4.** Sectional curvature determines the full Riemann curvature tensor.

The **Ricci curvature** is the trace of the Riemann tensor:

$$\mathrm{Ric}(X, Y) = \sum_{i=1}^n \langle R(X, e_i)Y, e_i\rangle$$

where $\{e_i\}$ is an orthonormal basis. In components: $R_{ij} = R^k_{ikj}$.

The **scalar curvature** is the trace of the Ricci tensor: $S = \sum_i \mathrm{Ric}(e_i, e_i) = g^{ij} R_{ij}$.

**Example 5.** For a sphere $S^n$ with radius $r$: sectional curvature $K = 1/r^2$, Ricci curvature
$\mathrm{Ric} = (n-1)/r^2 \cdot g$, scalar curvature $S = n(n-1)/r^2$.

**Example 6.** For hyperbolic space $\mathbb{H}^n$: $K = -1$, $\mathrm{Ric} = -(n-1)g$,
$S = -n(n-1)$.

### 5.7 Worked Examples

**Problem 1.** Compute the Christoffel symbols for the Poincaré half-plane
$\mathbb{H}^2 = \{(x, y) \in \mathbb{R}^2 : y > 0\}$ with metric $g = (dx^2 + dy^2)/y^2$.

*Solution.* The metric components are $g_{xx} = g_{yy} = 1/y^2$, $g_{xy} = 0$. The inverse metric is
$g^{xx} = g^{yy} = y^2$, $g^{xy} = 0$. Using $\Gamma^k_{ij} = \frac{1}{2}g^{k\ell}(\partial_i g_{j\ell} + \partial_j g_{i\ell} - \partial_\ell g_{ij})$:

$$\Gamma^x_{xy} = \Gamma^x_{yx} = -\frac{1}{y}, \quad \Gamma^y_{xx} = \frac{1}{y}, \quad \Gamma^y_{yy} = -\frac{1}{y}$$

All other Christoffel symbols vanish. The geodesic equation gives: curves that are semicircles centered
on the $x$-axis or vertical lines. $\blacksquare$

**Problem 2.** Show that $S^2$ with the round metric has constant sectional curvature $K = 1$.

*Solution.* The round metric $g = d\theta^2 + \sin^2\theta\, d\phi^2$ has non-zero Christoffel symbols
$\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta$, $\Gamma^\phi_{\theta\phi} = \Gamma^\phi_{\phi\theta} = \cot\theta$.
Computing $R^\theta_{\phi\theta\phi}$ gives $-\sin^2\theta$, so $K = R^\theta_{\phi\theta\phi} / g_{\theta\theta}g_{\phi\phi} = 1$. $\blacksquare$

### 5.8 Summary of Key Formulas

| Concept | Formula |
| --------- | --------- |
| Riemannian metric | $g = g_{ij} dx^i \otimes dx^j$ |
| Christoffel symbols | $\Gamma^k_{ij} = \frac{1}{2}g^{k\ell}(\partial_i g_{j\ell} + \partial_j g_{i\ell} - \partial_\ell g_{ij})$ |
| Geodesic equation | $\ddot\gamma^k + \Gamma^k_{ij} \dot\gamma^i \dot\gamma^j = 0$ |
| Riemann curvature | $R^\ell_{ijk} = \partial_i\Gamma^\ell_{jk} - \partial_j\Gamma^\ell_{ik} + \Gamma^m_{jk}\Gamma^\ell_{im} - \Gamma^m_{ik}\Gamma^\ell_{jm}$ |
| Sectional curvature | $K(\Pi) = \langle R(v,w)w,v\rangle / ( | v | ^2 | w | ^2 - \langle v,w\rangle^2)$ |
| Ricci curvature | $R_{ij} = R^k_{ikj}$ |
| Scalar curvature | $S = g^{ij}R_{ij}$ |

## Intuition

A Riemannian metric is like a flexible, position-dependent ruler laid across space. At each point, it tells you how to measure distances and angles, and it varies smoothly from place to place. The Christoffel symbols encode how this ruler changes as you move, telling you how to transport vectors without rotating them unnecessarily. Geodesics are the paths that a freely falling particle would follow, the straightest lines possible in curved space. The Riemann curvature tensor captures the failure of parallel transport around small loops: if you carry a vector around a closed path, it may return rotated, and the amount of rotation measures the curvature. Sectional curvature specialises this to planes, Ricci curvature averages over directions, and scalar curvature compresses everything into a single number at each point.

## Cross-References

- **[Smooth Manifolds](1_smooth-manifolds.md)**: A Riemannian metric is defined on a smooth manifold and assigns an inner product to each tangent space.
- **[Differential Forms](4_differential-forms.md)**: The Levi-Civita connection and curvature can be expressed using differential forms and the exterior derivative.
- **[Geodesics](6_geodesics.md)**: Geodesics are curves on a Riemannian manifold that locally minimise length, determined by the Christoffel symbols of the metric.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)

## Common Mistakes

**Mistake 1: Confusing the metric tensor with the inner product on $\mathbb{R}^n$**
The Riemannian metric $g_{ij}$ varies from point to point and depends on the coordinate system. Students often assume $g_{ij} = \delta_{ij}$ globally as in Euclidean space. Even on a sphere with the standard metric, $g_{ij}$ is not the identity matrix in spherical coordinates -- it involves $\sin^2\theta$ terms.

**Mistake 2: Miscomputing Christoffel symbols by forgetting index placement**
The formula $\Gamma^k_{ij} = \frac{1}{2}g^{k\ell}(\partial_i g_{j\ell} + \partial_j g_{i\ell} - \partial_\ell g_{ij})$ requires contracting with the *inverse* metric $g^{k\ell}$, not $g_{k\ell}$. Students frequently omit this step or use the wrong index position, leading to incorrect geodesic equations and curvature computations.

**Mistake 3: Assuming vanishing Riemann curvature implies flatness in coordinates**
A manifold with zero Riemann curvature is *locally* isometric to Euclidean space, but the coordinate expressions for the metric may still look complicated. The vanishing of curvature is a coordinate-independent statement. In non-normal coordinates, the Christoffel symbols need not vanish even when $R = 0$.
