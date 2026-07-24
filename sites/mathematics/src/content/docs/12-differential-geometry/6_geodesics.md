---

date: 2026-07-23T21:57:32+01:00
title: Geodesics
tags:
  - Mathematics
  - University
description: 'A is a curve whose acceleration is zero: . Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "6_geodesics", "url": "https://mathematics.wyattau.com/12-differential-geometry/6_geodesics"}]
}
</script>

### 6.1 Definition

A **geodesic** is a curve $\gamma(t)$ whose acceleration is zero:
$\nabla_{\dot{\gamma}} \dot{\gamma} = 0$.

In local coordinates, the geodesic equation is:

$$\ddot{\gamma}^k + \Gamma^k_{ij}\, \dot{\gamma}^i \dot{\gamma}^j = 0$$

This is a second-order ODE, so geodesics exist and are unique given an initial point and velocity.

**Proposition 6.1.** Geodesics are locally distance-minimizing: for sufficiently small $t$, the
geodesic $\gamma$ from $p$ to $\gamma(t)$ has length equal to the Riemannian distance
$d(p, \gamma(t))$.

### 6.2 The Exponential Map

For $p \in M$, the **exponential map** $\exp_p : T_p M \to M$ is defined by
$\exp_p(v) = \gamma_v(1)$, where $\gamma_v$ is the geodesic with $\gamma_v(0) = p$ and
$\dot{\gamma}_v(0) = v$.

**Proposition 6.2.** The exponential map is a local diffeomorphism near the origin: there exists
$\varepsilon > 0$ such that $\exp_p$ is a diffeomorphism from
$\{v \in T_p M : \|v\| < \varepsilon\}$ onto an open neighborhood of $p$.

### 6.3 Completeness

A Riemannian manifold $(M, g)$ is **geodesically complete** if every maximal geodesic is defined for
all time (i.e., on $\mathbb{R}$).

**Theorem 6.3 (Hopf-Rinow).** For a connected Riemannian manifold, the following are equivalent:

1. $M$ is geodesically complete.
2. $(M, d)$ is a complete metric space (where $d$ is the Riemannian distance).
3. Every closed and bounded subset of $M$ is compact.
4. There exists $p \in M$ such that $\exp_p$ is defined on all of $T_p M$.

**Corollary.** Every compact Riemannian manifold is geodesically complete.

### 6.4 Jacobi Fields

A **Jacobi field** $J(t)$ along a geodesic $\gamma$ is a vector field that satisfies the **Jacobi
equation**:

$$\frac{D^2}{dt^2} J(t) + R(J(t), \dot{\gamma}(t)) \dot{\gamma}(t) = 0$$

Jacobi fields describe the variation of nearby geodesics. They measure how geodesics spread apart
or come together under the influence of curvature.

**Proposition 6.4.** A vector field $J$ along $\gamma$ is a Jacobi field if and only if it arises
as the variation field of a one-parameter family of geodesics $\gamma_s(t)$ with $\gamma_0 = \gamma$
and $J(t) = \partial_s \gamma_s(t)|_{s=0}$.

### 6.5 Conjugate Points

Two points $p, q \in M$ are **conjugate** along a geodesic $\gamma$ if there exists a non-zero
Jacobi field along $\gamma$ vanishing at both $p$ and $q$.

**Theorem 6.5.** A geodesic $\gamma$ ceases to be length-minimizing past its first conjugate point.

_Proof sketch._ A non-zero Jacobi field vanishing at the endpoints gives a variation that shortens
the curve, demonstrating that $\gamma$ is not a local minimum of length. $\blacksquare$

### 6.6 Geodesic Deviation

The **geodesic deviation equation** describes the relative acceleration of nearby geodesics:

$$\frac{D^2}{dt^2} J^i = -R^i_{\,jkl} \dot{\gamma}^j J^k \dot{\gamma}^l$$

as a rule relativity, this is the equation of **geodesic deviation** that governs tidal forces.
For a congruence of timelike geodesics in the standard model of cosmology, it gives the relative acceleration of nearby test particles.

**Example.** On $S^2$, geodesics are great circles. Jacobi fields along the equator show that all
geodesics starting at the north pole reconverge at the south pole (the antipodal point is conjugate).

### 6.7 Normal Coordinates

**Riemannian normal coordinates** at $p$ are given by the inverse of the exponential map:
$\varphi = \exp_p^{-1} : U \to T_p M \cong \mathbb{R}^n$. In these coordinates:

- The metric at $p$ is Euclidean: $g_{ij}(p) = \delta_{ij}$.
- The Christoffel symbols vanish at $p$: $\Gamma^k_{ij}(p) = 0$.
- Geodesics through $p$ are straight lines through the origin.

### 6.8 The Gauss Lemma and Minimality

**Lemma 6.6 (Gauss Lemma).** For $v \in T_p M$, $\exp_p$ is a radial isometry: for any
$w \in T_v(T_p M) \cong T_p M$:

$$\langle d(\exp_p)_v(v), d(\exp_p)_v(w) \rangle = \langle v, w \rangle$$

**Corollary.** Geodesics are locally length-minimizing: for $v$ sufficiently small,
$\gamma(t) = \exp_p(tv)$ is the unique shortest curve from $p$ to $\exp_p(v)$.

### 6.9 Practice Problems

**Problem 1.** Find the geodesics of the Poincaré half-plane $\mathbb{H}^2$ with metric
$ds^2 = (dx^2 + dy^2)/y^2$.

_Solution._ The geodesic equations give circles centered on the $x$-axis and vertical lines.
These are the paths of minimal length in hyperbolic geometry. $\blacksquare$

**Problem 2.** Show that geodesics on $S^n$ are great circles.

**Problem 3.** Compute the Jacobi fields along a geodesic in $\mathbb{R}^n$ with the Euclidean
metric. Explain the result in terms of geodesic spread.

**Problem 4.** Prove that if $M$ is complete and has non-positive sectional curvature, then the
exponential map $\exp_p$ is a covering map for every $p \in M$ (Cartan-Hadamard theorem).

**Problem 5.** Show that on a compact Riemannian manifold, every geodesic is defined for all time.

### 6.10 The Length Functional and Energy Functional

Geodesics can also be characterized as critical points of the **energy functional**:

$$E(\gamma) = \frac{1}{2} \int_a^b \|\dot{\gamma}(t)\|^2\, dt$$

The Euler-Lagrange equations for $E$ give the geodesic equation. The length functional
$L(\gamma) = \int_a^b \|\dot{\gamma}(t)\|\, dt$ has the same critical points but is
parametrization-independent.

### 6.11 The First and Second Variation of Energy

**First variation formula:**

$$\left.\frac{d}{ds}\right|_{s=0} E(\gamma_s) = -\int_a^b \langle V(t), \nabla_{\dot{\gamma}}\dot{\gamma}\rangle\, dt - \sum_i \langle V(t_i), \Delta\dot{\gamma}(t_i)\rangle$$

where $V(t)$ is the variation field and $\Delta\dot{\gamma}$ is the jump discontinuity at
break points.

**Second variation formula:**

$$\left.\frac{d^2}{ds^2}\right|_{s=0} E(\gamma_s) = \int_a^b \left(\left\|\frac{DV}{dt}\right\|^2 - \langle R(V, \dot{\gamma})\dot{\gamma}, V\rangle\right) dt + \text{boundary terms}$$

The second variation is used to study stability of geodesics and to prove that conjugate points
indicate loss of minimizing property.

### 6.12 The Morse Index Theorem

**Theorem 6.7 (Morse Index Theorem).** The **index** of a geodesic $\gamma$ (the number of
linearly independent Jacobi fields vanishing at the endpoints with a conjugate point in between)
equals the number of conjugate points along $\gamma$, counted with multiplicity.

This theorem connects the calculus of variations to the topology of the loop space of a manifold.

## Common Mistakes

**Mistake 1: Assuming geodesics are always the shortest path**
Geodesics are locally length-minimizing, but globally they may not be the shortest curve between two points. On a sphere, great circle arcs longer than $\pi$ are geodesics but not shortest paths. The cut locus marks where geodesics cease to be minimizing.

**Mistake 2: Confusing the exponential map with a global diffeomorphism**
The exponential map $\exp_p$ is only a local diffeomorphism near the origin. Beyond the injectivity radius, it may fail to be one-to-one. Students often assume $\exp_p$ gives a global coordinate system, which is only true for spaces like Euclidean space or hyperbolic space.

**Mistake 3: Forgetting that the geodesic equation is second-order**
The equation $\ddot\gamma^k + \Gamma^k_{ij}\dot\gamma^i\dot\gamma^j = 0$ requires both an initial point $p$ and an initial velocity $v$ to determine a unique geodesic. Specifying only the starting point leaves infinitely many geodesics. Students sometimes treat geodesics like integral curves of vector fields, which are first-order and need only an initial point.

On a surface of constant curvature $K$, the area of a geodesic triangle with interior angles
$\alpha, \beta, \gamma$ is:

$$K \cdot \text{Area} = \alpha + \beta + \gamma - \pi$$

- On $S^2$ ($K = 1$): sum of angles $> \pi$, area $= \alpha + \beta + \gamma - \pi$.
- On $\mathbb{H}^2$ ($K = -1$): sum of angles $< \pi$, area $= \pi - (\alpha + \beta + \gamma)$.
- On $\mathbb{R}^2$ ($K = 0$): sum of angles $= \pi$, area arbitrary.

### 6.14 Additional Practice Problems

**Problem 6.** Show that the exponential map $\exp_p$ is a radial isometry near the origin
(Gauss lemma). Use this to prove that geodesics are locally length-minimizing.

**Problem 7.** Prove that on a complete Riemannian manifold with non-positive sectional
curvature, no two points are conjugate.

**Problem 8.** Show that the geodesic flow on the unit tangent bundle of a compact Riemannian
manifold is a Hamiltonian flow with respect to the natural symplectic structure.

## Intuition

Geodesics are the straightest possible paths on a curved surface. On a flat plane, they are straight lines; on a sphere, they are great circles. The key insight is that a geodesic has zero acceleration as measured along the surface — it does not turn left or right relative to the surface geometry. The exponential map sends a tangent vector to the point you reach by following the geodesic in that direction for unit time, providing local coordinates that straighten out the geometry near a point. On negatively curved surfaces, geodesics diverge rapidly, while on positively curved surfaces they converge — this is why parallel geodesics on a sphere eventually meet.

## Cross-References

- [Vector Fields and Flows](3_vector-fields-and-flows) -- Geodesics are integral curves of the geodesic spray vector field on the tangent bundle, linking flow theory to metric geometry.
- [Differential Geometry Summary](10_summary) -- The summary table of Christoffel symbols and curvature tensors provides the computational tools used throughout this chapter.
- [Electromagnetic Waves](../../../../../physics/src/content/docs/3-electromagnetism/5_electromagnetic-waves) -- The wave equation in curved spacetime uses geodesic deviation to describe tidal forces as a rule relativity.
- [Special Relativity and Electromagnetism](../../../../../physics/src/content/docs/3-electromagnetism/7_special-relativity-and-electromagnetism) -- Minkowski spacetime is a flat Lorentzian manifold whose geodesics are the worldlines of free particles.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
