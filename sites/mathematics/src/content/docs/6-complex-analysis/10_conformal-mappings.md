---

date: 2026-07-23T21:57:32+01:00
title: "Conformal Mappings"
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

If $f'(z_0) = re^{i\theta}$ Then near $z_0$ the mapping $f$ acts as a rotation by $\theta$ followed
by a scaling by $r$. The Jacobian determinant is $|f'(z_0)|^2 \gt 0$ So orientation is preserved.

### 10.3 Common Conformal Mappings

<div class="table-wrap">

| Mapping                          | Effect                               |
| -------------------------------- | ------------------------------------ |
| $w = az + b$ ($a \neq 0$)        | Translation, rotation, scaling       |
| $w = 1/z$                        | Inversion in the unit circle         |
| $w = z^2$                        | Squaring (doubles angles)            |
| $w = e^z$                        | Exponential (maps strips to sectors) |
| $w = \frac{z - a}{1 - \bar{a}z}$ | Möbius (maps disk to disk)           |

</div>

### 10.4 Möbius Transformations

A **Möbius transformation** (or linear fractional transformation) is

$$
T(z) = \frac{az + b}{cz + d}, \quad ad - bc \neq 0
$$

**Proposition 10.1.** Möbius transformations are conformal (where defined) and map circles and lines
To circles and lines.

**Proposition 10.2.** Three points determine a unique Möbius transformation: $T(z_1) = w_1$
$T(z_2) = w_2$, $T(z_3) = w_3$.

### 10.5 Cross-Ratio

**Definition.** The **cross-ratio** of four distinct points $z_1, z_2, z_3, z_4$ is

$$
(z_1, z_2, z_3, z_4) = \frac{(z_1 - z_3)(z_2 - z_4)}{(z_1 - z_4)(z_2 - z_3)}
$$

**Proposition 10.3.** The cross-ratio is invariant under Möbius transformations:
$(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$.

**Proposition 10.4.** The unique Möbius transformation sending $z_1 \mapsto 0$, $z_2 \mapsto 1$
$z_3 \mapsto \infty$ is

$$
T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}
$$

## Proofs

The subject's theorems divide into the ones proved by a derivative computation
(conformality, Möbius maps circles to circles) and the ones proved by
constructing an explicit map and invoking uniqueness (the cross-ratio results).
Both techniques are shown.

**Theorem (conformality).** If $f$ is analytic with $f'(z_0) \neq 0$, then $f$
preserves angles and orientation at $z_0$.

*Proof.* Write $f'(z_0) = re^{i\theta}$ with $r = |f'(z_0)| > 0$. A curve
$\gamma(t)$ through $z_0$ with tangent vector $\gamma'(0) = v$ maps to the curve
$f \circ \gamma$, whose derivative at $0$ is, by the chain rule,

$$
(f \circ \gamma)'(0) = f'(z_0)\,\gamma'(0) = r e^{i\theta} v.
$$

So every tangent vector at $z_0$ is multiplied by the *same* complex number:
rotated by $\theta$ and scaled by $r$. Two curves meeting at angle $\phi$ have
their tangent vectors multiplied by the same factor, and
$\arg(re^{i\theta}v_2) - \arg(re^{i\theta}v_1) = \arg v_2 - \arg v_1 = \phi$ —
the angle is preserved, including its sign. The Jacobian determinant of the
real-linear map $v \mapsto f'(z_0)v$ is $|f'(z_0)|^2 > 0$, confirming
orientation preservation. $\blacksquare$

The hypothesis $f'(z_0) \neq 0$ is what makes the multiplier well defined and
angle-independent. Where it fails, the map multiplies different directions by
different amounts and the angle collapses: $z \mapsto z^2$ at $z_0 = 0$ doubles
every angle at the origin, which is the table's "doubles angles" entry, stated
as a theorem: an analytic $f$ is conformal at $z_0$ iff $f'(z_0) \neq 0$.

**Proposition (Möbius maps circles and lines to circles and lines).**

*Proof.* A circle or line is exactly the set of points
$\{z : z\bar{z} + \bar{\alpha}z + \alpha\bar{z} + \beta = 0\}$ for constants
$\alpha \in \mathbb{C}$, $\beta \in \mathbb{R}$ — lines when the $z\bar z$
coefficient vanishes, circles otherwise, and this algebraic form covers both.
Under $w = T(z) = \frac{az+b}{cz+d}$, substitute $z = \frac{b - dw}{cw - a}$
(the inverse is again Möbius) and multiply through by $(cw - a)(c\bar w - \bar c)$: the image satisfies

$$
\big[(b-dw)(b - d\bar w)\big] + \cdots = 0,
$$

which collects into an expression of the same shape — a $w\bar w$ term, a
$\bar w$ term, a $w$ term, a constant — hence a circle or a line. The
coefficient of $w\bar w$ is $\beta|c|^2 \geq 0$; it vanishes exactly when the
original was a line through the pole $z = -d/c$, in which case the image is a
line. So circles through the pole map to lines, lines not through the pole map
to circles, and the family is preserved. $\blacksquare$

**Proposition (cross-ratio invariance).** Möbius transformations preserve the
cross-ratio: $(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$.

*Proof.* It suffices to check the three generators of the Möbius group —
translations $z \mapsto z + b$, dilations $z \mapsto az$, and inversion
$z \mapsto 1/z$ — since every Möbius transformation is their composition
(solved for $w$: $w = \frac{a}{c} - \frac{ad - bc}{c}\,\frac{1}{cz + d}$ when
$c \neq 0$). Translations and dilations shift or scale every difference
$z_i - z_j$ equally, and the cross-ratio is a ratio of products of differences,
so the shifts and scales cancel: each $z_i - z_j$ gains the same additive
constant's cancellation (translation) or the same multiplicative factor $a$
(dilation). For inversion, $1/z_i - 1/z_j = \frac{z_j - z_i}{z_i z_j}$, and
substituting into the cross-ratio formula, each $z_i$ appears exactly twice —
once in a numerator position and once in a denominator position — so the
factors $z_i$ cancel pairwise and the cross-ratio is unchanged. $\blacksquare$

**Theorem (three points determine a Möbius transformation).** The unique Möbius
transformation mapping $z_1, z_2, z_3$ to $0, 1, \infty$ is

$$
T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)},
$$

and consequently two triples $(z_1,z_2,z_3)$, $(w_1,w_2,w_3)$ determine exactly
one Möbius transformation with $T(z_i) = w_i$.

*Proof.* Direct substitution: $T(z_1) = 0$ (numerator vanishes),
$T(z_3) = \infty$ (denominator vanishes), and

$$
T(z_2) = \frac{(z_2 - z_1)(z_2 - z_3)}{(z_2 - z_3)(z_2 - z_1)} = 1.
$$

For the general triple $(w_1, w_2, w_3)$, let $S$ send $z_i \mapsto 0, 1, \infty$ and $R$ send $w_i \mapsto 0, 1, \infty$; then $T = R^{-1} \circ S$ maps
$z_i \mapsto w_i$. Uniqueness: if $T_1, T_2$ both map the triple, then
$T_1 \circ T_2^{-1}$ fixes $0, 1, \infty$. A Möbius transformation fixing three
points satisfies $T = \frac{az+b}{cz+d}$ with $T(0) = 0 \Rightarrow b = 0$;
$T(\infty) = \infty \Rightarrow c = 0$, so $T = \frac{az}{d}$ is a dilation;
$T(1) = 1 \Rightarrow a = d$ — the identity. Hence $T_1 = T_2$. $\blacksquare$

Uniqueness is what gives the cross-ratio its power: since cross-ratios are
Möbius-invariant and the unique map sending three points to $0, 1, \infty$ is
the one constructed in the proof, the cross-ratio
$(z_1, z_2; z, z_3) = \frac{(z-z_1)(z_3-z_2)}{(z-z_3)(z_2-z_1)}$ is the *value*
$w$ such that the map taking $(z_1, z_2, z_3) \mapsto (0, 1, \infty)$ takes $z$
to $w$ — the cross-ratio is the coordinate of $z$ in the canonical
normalisation, and that is the computation every "find the Möbius map" exercise
performs.

**The Riemann mapping theorem** — every simply connected domain strictly
smaller than $\mathbb{C}$ is conformally equivalent to the unit disc — is stated
on this page and quoted: its proof is a genuinely deep existence argument
(Normal families + the Dirichlet principle, or via Green's functions), carried
out in the graduate references. What this page's other theorems provide is the
vocabulary its statement uses — conformality, the disk automorphisms of the
table, and the fact that the disc's self-maps include the three-parameter family
$\frac{z-a}{1-\bar a z}$, which are exactly the disc's Möbius automorphisms.
The theorem then says: that family is not just examples but *all* disc
automorphisms, by the uniqueness-of-three-points result above. $\blacksquare$

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

If $\mathrm{Re}(z) \gt 0$ Then $|z - 1| \lt |z + 1|$ So $|T(z)| \lt 1$.

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

$$
w(\zeta) = U\left(\zeta + \frac{R^2}{\zeta}\right)
$$

The Joukowski transform $z = \zeta + \frac{1}{\zeta}$ maps the circle $|\zeta| = R$ to an ellipse
(or airfoil for $R$ near 1 with slight offset). Substituting $\zeta$ as a function of $z$ and
composing gives the flow past the transformed body.

The velocity components are obtained from:

$$
v_x - iv_y = \frac{dw}{dz} = \frac{dw}{d\zeta}\cdot\frac{d\zeta}{dz}
$$

At infinity, $v_x = U$ and $v_y = 0$ (uniform flow). On the cylinder surface, the flow is tangent
to the boundary (no penetration condition). $\blacksquare$

### 10.10 Summary of Key Properties

<div class="table-wrap">

| Property | Statement |
| -------- | --------- |
| Angle preservation | Conformal maps preserve angles between intersecting curves |
| Local linearisation | Near $z_0$, $f$ acts as rotation by $\arg f'(z_0)$ and scaling by $ \| f'(z_0) \| $ |
| Circle preservation | Möbius transformations map circles and lines to circles and lines |
| Cross-ratio invariance | $(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$ for any Möbius $T$ |
| Riemann mapping | Any simply connected domain (≠ $\mathbb{C}$) is conformally equivalent to $\mathbb{D}$ |
| Laplace correspondence | Solutions to $\nabla^2 u = 0$ are preserved under conformal maps |

</div>

### 10.9 Common Mistakes

## Intuition

Conformal mappings are angle-preserving transformations of the complex plane. A holomorphic function with non-zero derivative acts locally as a rotation plus a scaling, it preserves the shape of infinitesimal figures while possibly changing their size and orientation. This makes conformal maps the natural language for problems involving fluid flow, electrostatics, and heat conduction, where the geometry of the domain can be simplified by mapping it to a simpler shape. Möbius transformations are the building blocks: they map circles to circles and are determined by where they send three points. The Riemann mapping theorem guarantees that any simply connected domain (except the whole plane) can be conformally mapped to the unit disk.

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

- **[Complex Functions and Analyticity](/6-complex-analysis/2_complex-functions-and-analyticity/)**: Analytic functions with non-zero derivatives provide the foundation for conformal mappings.
- **[Applications of Contour Integration](/6-complex-analysis/9_applications-of-contour-integration/)**: Conformal mappings transform difficult integrals into simpler ones that are easier to evaluate.
- **[Argument Principle and Rouché's Theorem](/6-complex-analysis/12_argument-principle-and-rouch-s-theorem/)**: The argument principle counts zeros and poles using the change in argument along contours.

- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)
