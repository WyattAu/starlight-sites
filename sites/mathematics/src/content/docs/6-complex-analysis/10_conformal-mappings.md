---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "10_conformal Mappings", "url": "https://mathematics.wyattau.com/6-complex-analysis/10_conformal-mappings"}]
}
</script>
title: Conformal Mappings
tags:
  - Mathematics
  - University
description: "An analytic function is at if . A conformal Mapping preserves angles (both magni Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "10_conformal Mappings", "url": "https://mathematics.wyattau.com/6-complex-analysis/10_conformal-mappings"}]
}
</script>

### 10.1 Definition

**Definition.** An analytic function $f$ is **conformal** at $z_0$ if $f"(z_0) \neq 0$. A conformal
Mapping preserves angles (both magnitude and orientation) between curves.

### 10.2 Geometric Interpretation

If $f'(z_0) = re^{i\theta}$Then near $z_0$ the mapping $f$ acts as a rotation by $\theta$ followed
By a scaling by $r$. The Jacobian determinant is $|f'(z_0)|^2 \gt 0$So orientation is preserved.

### 10.3 Common Conformal Mappings

| Mapping                          | Effect                               |
| -------------------------------- | ------------------------------------ |
| $w = az + b$ ($a \neq 0$)        | Translation, rotation, scaling       |
| $w = 1/z$                        | Inversion in the unit circle         |
| $w = z^2$                        | Squaring (doubles angles)            |
| $w = e^z$                        | Exponential (maps strips to sectors) |
| $w = \frac{z - a}{1 - \bar{a}z}$ | Möbius (maps disk to disk)           |

### 10.4 Möbius Transformations

A **Möbius transformation** (or linear fractional transformation) is

$$T(z) = \frac{az + b}{cz + d}, \quad ad - bc \neq 0$$

**Proposition 10.1.** Möbius transformations are conformal (where defined) and map circles and lines
To circles and lines.

**Proposition 10.2.** Three points determine a unique Möbius transformation: $T(z_1) = w_1$
$T(z_2) = w_2$, $T(z_3) = w_3$.

### 10.5 Cross-Ratio

**Definition.** The **cross-ratio** of four distinct points $z_1, z_2, z_3, z_4$ is

$$(z_1, z_2, z_3, z_4) = \frac{(z_1 - z_3)(z_2 - z_4)}{(z_1 - z_4)(z_2 - z_3)}$$

**Proposition 10.3.** The cross-ratio is invariant under Möbius transformations:
$(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$.

**Proposition 10.4.** The unique Möbius transformation sending $z_1 \mapsto 0$, $z_2 \mapsto 1$
$z_3 \mapsto \infty$ is

$$T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$

### 10.6 Classification of Möbius Transformations

A Möbius transformation $T(z) = \frac{az + b}{cz + d}$ is classified by its fixed points (solutions
of $T(z) = z$).

1. **Parabolic:** Exactly one fixed point. Conjugate to $w = z + k$.
2. **Elliptic:** Two fixed points, $|T'(z_0)| = 1$. Conjugate to a rotation $w = e^{i\theta} z$.
3. **Hyperbolic:** Two fixed points, $T'(z_0) \in \mathbb{R}^+$, $T'(z_0) \neq 1$. Conjugate to
   $w = kz$.
4. **Loxodromic:** Two fixed points, $T'(z_0) \notin \mathbb{R} \cup \{z : |z| = 1\}$. Conjugate to
   $w = ke^{i\theta}z$.

<details>
<summary>Solution</summary>

**Problem.** Find the Möbius transformation mapping $0 \mapsto i$, $1 \mapsto 0$,
$\infty \mapsto -i$.

$T(z) = \frac{az + b}{cz + d}$ with $T(0) = i \Rightarrow b/d = i \Rightarrow b = id$.
$T(1) = 0 \Rightarrow a = -b = -id$. $T(\infty) = -i \Rightarrow a/c = -i \Rightarrow c = d$.

$T(z) = \frac{-idz + id}{dz + d} = \frac{i(1 - z)}{z + 1}$.

**Problem.** Show that $T(z) = \frac{z - 1}{z + 1}$ maps the right half-plane to the unit disk.

If $\mathrm{Re}(z) \gt 0$Then $|z - 1| \lt |z + 1|$So $|T(z)| \lt 1$.

Check boundary: $T(i) = \frac{i - 1}{i + 1} = \frac{(i-1)(-i+1)}{(i+1)(-i+1)} = \frac{2}{2} = 1$.
$|T(i)| = 1$. $\checkmark$

**Problem.** Classify $T(z) = \frac{2z + 1}{z + 2}$.

Fixed points: $z = \frac{2z + 1}{z + 2} \Rightarrow z^2 = 1 \Rightarrow z = \pm 1$.

$T'(z) = \frac{3}{(z + 2)^2}$. $T'(1) = 1/3$, $T'(-1) = 3$.

Both multipliers are real and positive (not equal to $1$), so $T$ is hyperbolic.

</details>

### 10.7 The Riemann Mapping Theorem

**Theorem 10.5 (Riemann Mapping Theorem).** Let $U$ be a connected open proper subset of
$\mathbb{C}$. Then there exists a bijective conformal map from $U$ onto the unit disk
$\mathbb{D} = \{z : |z| \lt 1\}$.

This is one of the most profound results in complex analysis, establishing that all connected
Domains (other than $\mathbb{C}$ itself) are conformally equivalent.

_Remark._ The Riemann mapping theorem is an existence theorem; it does not provide an explicit
Formula for the conformal map .

### 10.8 Applications of Conformal Mappings

**Fluid dynamics.** The complex potential $w = f(z) = \phi + i\psi$ for a 2D incompressible,
irrotational flow satisfies Laplace's equation. Conformal mappings transform simple flow patterns
(e.g., uniform flow past a circle) into flows past arbitrary smooth boundaries. The Joukowski
transform $w = z + 1/z$ maps a circle to an airfoil shape, enabling analytical calculation of lift.

**Electrostatics.** The electric potential in a charge-free region satisfies $\nabla^2 V = 0$.
Conformal mappings transform the boundary value problem into a simpler geometry (e.g., upper
half-plane or unit disk) where the solution is known, then map the solution back.

**Heat conduction.** Steady-state temperature distributions satisfy Laplace's equation. Conformal
mappings solve heat flow problems in irregularly shaped regions by mapping to canonical domains.

**Key insight:** Any problem governed by Laplace's equation in 2D can be solved by conformally
mapping the domain to a half-plane or disk, solving there, and mapping back.

### 10.9 Worked Example: Flow past a Cylinder

**Problem.** Use the Joukowski transform to find the complex potential for flow past a cylinder.

**Solution.** The complex potential for uniform flow past a circle of radius $R$ centered at the
origin is:

$$w(\zeta) = U\left(\zeta + \frac{R^2}{\zeta}\right)$$

The Joukowski transform $z = \zeta + \frac{1}{\zeta}$ maps the circle $|\zeta| = R$ to an ellipse
(or airfoil for $R$ near 1 with slight offset). Substituting $\zeta$ as a function of $z$ and
composing gives the flow past the transformed body.

The velocity components are obtained from:

$$v_x - iv_y = \frac{dw}{dz} = \frac{dw}{d\zeta}\cdot\frac{d\zeta}{dz}$$

At infinity, $v_x = U$ and $v_y = 0$ (uniform flow). On the cylinder surface, the flow is tangent
to the boundary (no penetration condition). $\blacksquare$

### 10.10 Summary of Key Properties

| Property | Statement |
| -------- | --------- |
| Angle preservation | Conformal maps preserve angles between intersecting curves |
| Local linearisation | Near $z_0$, $f$ acts as rotation by $\arg f'(z_0)$ and scaling by $|f'(z_0)|$ |
| Circle preservation | Möbius transformations map circles and lines to circles and lines |
| Cross-ratio invariance | $(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$ for any Möbius $T$ |
| Riemann mapping | Any simply connected domain (≠ $\mathbb{C}$) is conformally equivalent to $\mathbb{D}$ |
| Laplace correspondence | Solutions to $\nabla^2 u = 0$ are preserved under conformal maps |

### 10.9 Common Mistakes

## Intuition

Conformal mappings are angle-preserving transformations of the complex plane. A holomorphic function with non-zero derivative acts locally as a rotation plus a scaling — it preserves the shape of infinitesimal figures while possibly changing their size and orientation. This makes conformal maps the natural language for problems involving fluid flow, electrostatics, and heat conduction, where the geometry of the domain can be simplified by mapping it to a simpler shape. Möbius transformations are the building blocks: they map circles to circles and are determined by where they send three points. The Riemann mapping theorem guarantees that any simply connected domain (except the whole plane) can be conformally mapped to the unit disk.

### 10.9 Common Mistakes

**Mistake 1: Assuming that all analytic functions are conformal.**
An analytic function is conformal only where its derivative is non-zero. At points where $f'(z_0) = 0$, the mapping is not conformal (angles are not preserved). For example, $f(z) = z^2$ is conformal everywhere except at $z = 0$, where it doubles angles.

**Mistake 2: Confusing conformal with bijective.**
A conformal map need not be bijective. For example, $f(z) = z^2$ is conformal on $\mathbb{C} \setminus \{0\}$ but not injective (both $z$ and $-z$ map to the same point). A conformal bijection is called a biholomorphism or conformal equivalence.

**Mistake 3: Forgetting that Möbius transformations map circles and lines to circles and lines.**
Möbius transformations map circles and lines to circles and lines, but they do not necessarily map a circle to a circle and a line to a line. A circle can be mapped to a line (if the circle passes through the pole of the transformation) and vice versa.

**Mistake 4: Assuming that conformal maps preserve distances.**
Conformal maps preserve angles but not distances. A conformal map can stretch or compress regions while preserving angles. For example, $f(z) = 2z$ doubles all distances but preserves angles.

**Mistake 5: Forgetting the cross-ratio invariance property.**
The cross-ratio $(z_1, z_2, z_3, z_4)$ is invariant under Möbius transformations. This property is useful for constructing Möbius transformations that map three given points to three specified points. Do not forget to use the cross-ratio when solving such problems.

## Cross-References

- **[Complex Functions and Analyticity](2_complex-functions-and-analyticity.md)**: Analytic functions with non-zero derivatives provide the foundation for conformal mappings.
- **[Applications of Contour Integration](9_applications-of-contour-integration.md)**: Conformal mappings transform difficult integrals into simpler ones that are easier to evaluate.
- **[Argument Principle and Rouché's Theorem](12_argument-principle-and-rouch-s-theorem.md)**: The argument principle counts zeros and poles using the change in argument along contours.

