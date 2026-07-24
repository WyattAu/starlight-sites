---

date: 2026-07-23T21:57:32+01:00
title: The Gauss-Bonnet Theorem
tags:
  - Mathematics
  - University
description: 'Let be a compact, oriented Riemannian 2-manifold without boundary. Then: Comprehensive educational content coverage with definitions and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "8_the Gauss Bonnet Theorem", "url": "https://mathematics.wyattau.com/12-differential-geometry/8_the-gauss-bonnet-theorem"}]
}
</script>

### 8.1 Statement for Surfaces

**Theorem 8.1 (Gauss-Bonnet, Global).** Let $(M, g)$ be a compact, oriented Riemannian 2-manifold
without boundary. Then:

$$\int_M K\, dA = 2\pi \chi(M)$$

where $K$ is the Gaussian curvature, $dA$ is the area form, and $\chi(M)$ is the Euler
characteristic.

**Corollary 8.2.** The total curvature of a compact surface depends only on its topology, not on the
metric.

**Examples.**

- $S^2$: $\int_{S^2} K\, dA = 2\pi \cdot 2 = 4\pi$. For the standard metric ($K = 1$):
  $\int K\, dA = 1 \cdot 4\pi = 4\pi$. ✓
- $T^2$ (torus): $\int_{T^2} K\, dA = 2\pi \cdot 0 = 0$. For the flat metric ($K = 0$):
  $\int K\, dA = 0$. ✓
- Genus 2 surface: $\chi = -2$, so total curvature $= -4\pi$.

### 8.2 Gauss-Bonnet with Boundary

**Theorem 8.3.** Let $M$ be a compact oriented Riemannian 2-manifold with boundary $\partial M$
consisting of smooth curves meeting at exterior angles $\alpha_1, \ldots, \alpha_k$. Then:

$$\int_M K\, dA + \int_{\partial M} \kappa_g\, ds + \sum_{i=1}^k \alpha_i = 2\pi \chi(M)$$

where $\kappa_g$ is the geodesic curvature of the boundary.

**Example 8.1 (Geodesic Triangle on a Sphere).** Consider a geodesic triangle on $S^2$ with
interior angles $\theta_1, \theta_2, \theta_3$. The area is $A = \theta_1 + \theta_2 + \theta_3 - \pi$.
This is a special case: $\int_M K\, dA = 1 \cdot A$ (since $K = 1$), the geodesic curvature term
vanishes, and the exterior angles are $\pi - \theta_i$, so:

$$A + \sum(\pi - \theta_i) = A + 3\pi - (\theta_1 + \theta_2 + \theta_3) = 2\pi \cdot 1 = 2\pi$$

This confirms $A = \theta_1 + \theta_2 + \theta_3 - \pi$.

### 8.3 Proof Sketch for Surfaces

**Step 1: Triangulation.** Triangulate $M$ into geodesic triangles. Let $V, E, F$ be the numbers
of vertices, edges, and faces, with $\chi(M) = V - E + F$.

**Step 2: Apply Gauss-Bonnet to each triangle.** For each geodesic triangle $T$ with interior
angles $\alpha, \beta, \gamma$:

$$\int_T K\, dA = (\alpha + \beta + \gamma) - \pi$$

This follows from the local Gauss-Bonnet formula for a geodesic triangle.

**Step 3: Sum over all triangles.** Summing over $F$ triangles:

$$\int_M K\, dA = \sum_{i=1}^F (\alpha_i + \beta_i + \gamma_i) - F\pi$$

**Step 4: Relate angle sum to Euler characteristic.** Each interior angle at a vertex appears
once per incident triangle. The sum of all angles around a vertex is $2\pi$, so:

$$\sum_{i=1}^F (\alpha_i + \beta_i + \gamma_i) = 2\pi V$$

Thus $\int_M K\, dA = 2\pi V - F\pi$. Using $3F = 2E$ (each edge shared by 2 triangles) and
$\chi = V - E + F$, we get $\int_M K\, dA = 2\pi \chi(M)$. $\blacksquare$

### 8.4 Geometric Implications

**Corollary 8.4 (Curvature Sign and Topology).**
- If $K > 0$ everywhere, then $\chi(M) > 0$, so $M$ is homeomorphic to $S^2$.
- If $K = 0$ everywhere, then $\chi(M) = 0$, so $M$ is homeomorphic to a torus $T^2$.
- If $K < 0$ everywhere, then $\chi(M) < 0$, so $M$ has genus $g \geq 2$.

**Corollary 8.5 (Uniformization).** Every compact Riemann surface admits a metric of constant
curvature $K = 1, 0,$ or $-1$, depending on its genus. This is the uniformization theorem for
Riemann surfaces.

### 8.5 The Chern-Gauss-Bonnet Theorem (Higher Dimensions)

**Theorem 8.5 (Chern 1944).** Let $M$ be a compact oriented Riemannian $2n$-manifold. Then:

$$\int_M \mathrm{Pf}\left(\frac{\Omega}{2\pi}\right) = \chi(M)$$

where $\Omega$ is the curvature 2-form of the Levi-Civita connection and $\mathrm{Pf}$ is the
Pfaffian. For surfaces ($n = 1$), $\mathrm{Pf}(\Omega/2\pi) = K\, dA/2\pi$, recovering the
classical theorem.

In terms of the Riemann curvature tensor $R_{ijkl}$:

$$\chi(M) = \frac{1}{2^{2n}\pi^{n}n!} \int_M \epsilon^{i_1\ldots i_{2n}} \Omega_{i_1i_2} \wedge \cdots \wedge \Omega_{i_{2n-1}i_{2n}}$$

**Example 8.2.** For $M = S^4$ (4-sphere) with the round metric, $\chi(S^4) = 2$. The integrand is
a 4-form constructed from the curvature, and $\int_{S^4} \mathrm{Pf}(\Omega/2\pi) = 2$.

### 8.6 Applications

**Application 1: Topological obstructions to metrics.** A manifold that admits a metric with
$K > 0$ must have $\chi(M) > 0$ for surfaces. In higher dimensions, obstructions involve the
A-genus and Dirac operators (Lichnerowicz theorem, Hitchin's work).

**Application 2: The Gauss-Bonnet theorem as an index theorem.** The Gauss-Bonnet theorem is a
special case of the Atiyah-Singer index theorem for the de Rham complex. The Euler characteristic
is the index of $d + d^*$ acting on differential forms.

**Application 3: Geometric inequalities.** For a compact surface $M$ with area $A$ and Gaussian
curvature bounded by $|K| \leq C$:

$$|\chi(M)| \leq \frac{C A}{2\pi}$$

This follows directly from $2\pi|\chi| = |\int K| \leq C A$.

### 8.7 Worked Examples

**Problem 1.** Prove that there is no metric of strictly positive Gaussian curvature on a torus.

*Solution.* The Gauss-Bonnet theorem gives $\int_{T^2} K\, dA = 2\pi \chi(T^2) = 0$. If $K > 0$
everywhere, the integral would be strictly positive. Contradiction. $\blacksquare$

**Problem 2.** A geodesic hexagon on a surface has six geodesic edges meeting at right angles.
If the surface has constant curvature $K = -1$, find the area of the hexagon.

*Solution.* For a geodesic polygon with $n$ sides and interior angles $\theta_i$ on a surface
with constant curvature $K = -1$: $\int_T K\, dA = \sum \theta_i - (n-2)\pi$. For right angles:
$\theta_i = \pi/2$, $n = 6$, so $-\mathrm{Area} = 6(\pi/2) - 4\pi = 3\pi - 4\pi = -\pi$,
giving $\mathrm{Area} = \pi$. $\blacksquare$

### 8.8 Practice Problems

## Cross-References

- **[Curvature](./7_curvature.md)**: Defines the Gaussian curvature whose integral appears in the Gauss-Bonnet formula, along with the Riemann tensor that generalises it to higher dimensions.
- **[Applications](./9_applications.md)**: Uses the Gauss-Bonnet theorem to explain cartographic constraints and as a special case of the Atiyah-Singer index theorem.
- **[Tangent Spaces and Tangent Bundles](./2_tangent-spaces-and-tangent-bundles.md)**: Provides the tangent bundle structure needed to define curvature and geodesics on surfaces.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)

## Intuition

The Gauss-Bonnet theorem is one of the most beautiful results in mathematics: it says the total curvature of a compact surface equals $2\pi$ times its Euler characteristic, a topological invariant. On a sphere, the total curvature is $4\pi$ (positive), reflecting its bowl-like shape. On a torus, the total curvature is zero — the positive curvature on the outer rim exactly cancels the negative curvature on the inner rim. This means you cannot change the total curvature by deforming the surface, only by changing its topology. The theorem connects three different worlds: local geometry (curvature), global topology (Euler characteristic), and topology (genus).

## Common Mistakes

**Mistake 1: Confusing the Gauss-Bonnet theorem with Gaussian curvature itself**
The theorem states $\int_M K\, dA = 2\pi\chi(M)$, meaning the *total* curvature is a topological invariant. Students often mistakenly conclude that $K$ must be constant or that individual points must have $K > 0$. The curvature can vary wildly across the surface as long as the integral equals $2\pi\chi$.

**Mistake 2: Forgetting to include the geodesic curvature and angle terms in the boundary version**
The Gauss-Bonnet formula with boundary is $\int_M K\, dA + \int_{\partial M} \kappa_g\, ds + \sum \alpha_i = 2\pi\chi(M)$. Students frequently omit the geodesic curvature $\kappa_g$ of the boundary curves or the exterior angle contributions $\alpha_i$ at corners, leading to incorrect area or angle computations.

**Mistake 3: Misidentifying the Euler characteristic of non-orientable surfaces**
The Euler characteristic $\chi = V - E + F$ is well-defined for all surfaces, but students sometimes assume orientability is required. A projective plane has $\chi = 1$ and a Klein bottle has $\chi = 0$. The Gauss-Bonnet theorem applies to compact surfaces regardless of orientability.

### 8.8 Practice Problems

1. Compute the Euler characteristic of a compact surface of genus 3. What is its total curvature?
2. Show that a metric on $S^2$ with $K \geq 1$ has area $\leq 4\pi$.
3. Prove that any metric on $S^2$ has at least one point with $K > 0$.
4. Use Gauss-Bonnet with boundary to find the area of a spherical lune (region between two
   great circles) with angle $\theta$.
5. Show that $\chi(M)$ is even for every compact oriented 2-manifold.
