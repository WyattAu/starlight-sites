---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "3_vector Fields And Flows", "url": "https://mathematics.wyattau.com/12-differential-geometry/3_vector-fields-and-flows"}]
}
</script>
title: Vector Fields and Flows
tags:
  - Mathematics
  - University
description: "Let be a smooth vector field on . An of through is a smooth curve Comprehensive educational content coverage with definitions and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "3_vector Fields And Flows", "url": "https://mathematics.wyattau.com/12-differential-geometry/3_vector-fields-and-flows"}]
}
</script>

### 3.1 Integral Curves

Let $X$ be a smooth vector field on $M$. An **integral curve** of $X$ through $p$ is a smooth curve
$\gamma : I \to M$ such that $\gamma(0) = p$ and $\gamma'(t) = X_{\gamma(t)}$ for all $t \in I$.

**Theorem 3.1 (Existence and Uniqueness).** For every $p \in M$, there exists a unique maximal
integral curve $\gamma_p : I_p \to M$ of $X$ through $p$, defined on a maximal open interval
$I_p \subseteq \mathbb{R}$ containing $0$.

### 3.2 The Lie Bracket

For vector fields $X, Y$ on $M$, the **Lie bracket** $[X, Y]$ is the vector field defined by:

$$[X, Y](f) = X(Y(f)) - Y(X(f))$$

for $f \in C^\infty(M)$.

**Proposition 3.2 (Properties of the Lie Bracket).**

1. Bilinearity: $[aX + bY, Z] = a[X, Z] + b[Y, Z]$.
2. Anti-symmetry: $[X, Y] = -[Y, X]$.
3. **Jacobi identity**: $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$.

The space of all vector fields $\mathfrak{X}(M)$ with the Lie bracket forms a **Lie algebra**.

### 3.3 The Lie Derivative

The **Lie derivative** of a vector field $Y$ along $X$ is $\mathcal{L}_X Y = [X, Y]$. For a function
$f$, $\mathcal{L}_X f = X(f)$.

The Lie derivative measures the rate of change of a geometric object along the flow of $X$.

**Theorem 3.3 (Flow of the Lie Bracket).** If $\Phi_t$ and $\Psi_s$ are the flows of $X$ and $Y$
respectively, then $\frac{d}{dt}\big|_{t=0} (\Psi_{-t})_*(\Phi_t)_* Y = [X, Y]$.

### 3.4 The Flow of a Vector Field

The **flow** of a vector field $X$ is a smooth map $\Phi : \mathcal{D} \to M$, where
$\mathcal{D} \subseteq \mathbb{R} \times M$ is an open domain, defined by $\Phi(t, p) = \gamma_p(t)$,
the integral curve of $X$ through $p$.

**Proposition 3.4 (Flow Properties).** For each $p \in M$, there exists $\varepsilon > 0$ and a
neighborhood $U$ of $p$ such that:

1. $\Phi(0, p) = p$.
2. $\Phi(t, \Phi(s, p)) = \Phi(t+s, p)$ whenever both sides are defined.
3. For each $t$, the map $\Phi_t : U \to M$ defined by $\Phi_t(p) = \Phi(t, p)$ is a diffeomorphism
   onto its image, with inverse $\Phi_{-t}$.

**Definition.** A vector field $X$ is **complete** if its flow is defined for all $t \in \mathbb{R}$
(i.e., $\mathcal{D} = \mathbb{R} \times M$). This happens if the maximal interval $I_p$ is all of
$\mathbb{R}$ for every $p \in M$.

**Theorem 3.5 (Compactness Implies Completeness).** If $M$ is compact, then every smooth vector
field on $M$ is complete.

**Example 3.1.** On $M = \mathbb{R}$, the vector field $X = \partial/\partial x$ is complete with
flow $\Phi(t, p) = p + t$. The vector field $X = x^2 \partial/\partial x$ is not complete: the
integral curve through $p > 0$ satisfies $\dot\gamma = \gamma^2$, giving $\gamma(t) = 1/(1/p - t)$,
which blows up at $t = 1/p$.

### 3.5 One-Parameter Groups of Diffeomorphisms

A **one-parameter group of diffeomorphisms** is a smooth map $\Phi : \mathbb{R} \times M \to M$ such
that $\Phi_t \circ \Phi_s = \Phi_{t+s}$ and $\Phi_0 = \mathrm{id}_M$.

**Proposition 3.6.** There is a bijection between complete vector fields on $M$ and one-parameter
groups of diffeomorphisms of $M$. Given a complete vector field $X$, its flow $\Phi_t$ is a
one-parameter group. Conversely, given a one-parameter group $\Phi_t$, define $X_p = \frac{d}{dt}\big|_{t=0} \Phi_t(p)$.

**Example 3.2.** On $\mathbb{R}^2$, the vector field $X = -y \partial/\partial x + x \partial/\partial y$
generates rotation: $\Phi_t(x, y) = (x\cos t - y\sin t, x\sin t + y\cos t)$. This is a one-parameter
group of rotations.

### 3.6 Commuting Vector Fields

**Proposition 3.7.** Two vector fields $X, Y$ have commuting flows if and only if $[X, Y] = 0$.

More precisely, $[X, Y] = 0$ if and only if for all sufficiently small $s, t$:
$\Phi_t^X \circ \Phi_s^Y = \Phi_s^Y \circ \Phi_t^X$, where $\Phi^X$ and $\Phi^Y$ are the flows of
$X$ and $Y$ respectively.

**Example 3.3.** On $\mathbb{R}^3$, the vector fields $X = \partial/\partial x$ and
$Y = \partial/\partial y$ commute: $[X, Y] = 0$. Their flows are translations in the $x$ and $y$
directions respectively, and these commute.

**Example 3.4.** On $S^2$, the vector fields generating rotations about the $x$-axis and $y$-axis
do not commute: $[X, Y] = Z$, where $Z$ generates rotation about the $z$-axis. This reflects
the non-commutativity of the Lie algebra $\mathfrak{so}(3)$.

### 3.7 Vector Fields in Coordinates

In local coordinates $(x^1, \ldots, x^n)$, a vector field $X$ can be written as:

$$X = X^i(x) \frac{\partial}{\partial x^i}$$

The integral curve equation $\dot\gamma(t) = X_{\gamma(t)}$ becomes the system of ODEs:

$$\dot\gamma^i(t) = X^i(\gamma(t)), \quad i = 1, \ldots, n$$

The Lie bracket in coordinates is:

$$[X, Y]^i = X^j \frac{\partial Y^i}{\partial x^j} - Y^j \frac{\partial X^i}{\partial x^j}$$

### 3.8 Worked Examples

**Problem 1.** Let $X = x \partial/\partial x$ on $\mathbb{R}$. Find the flow and determine whether
$X$ is complete.

*Solution.* The ODE is $\dot\gamma = \gamma$, giving $\gamma(t) = pe^t$. So $\Phi(t, p) = pe^t$.
This is defined for all $t \in \mathbb{R}$, so $X$ is complete. $\blacksquare$

**Problem 2.** Compute $[X, Y]$ for $X = y \partial/\partial x$ and $Y = x \partial/\partial y$ on
$\mathbb{R}^2$. What do their flows look like?

*Solution.* Using the coordinate formula: $X^1 = y$, $X^2 = 0$, $Y^1 = 0$, $Y^2 = x$.

$$[X, Y]^1 = y\frac{\partial(0)}{\partial x} - 0\frac{\partial(y)}{\partial x} + 0\frac{\partial(0)}{\partial y} - x\frac{\partial(y)}{\partial y} = -x$$

$$[X, Y]^2 = y\frac{\partial(x)}{\partial x} - 0\frac{\partial(0)}{\partial x} + 0\frac{\partial(x)}{\partial y} - x\frac{\partial(0)}{\partial y} = y$$

So $[X, Y] = -x \partial/\partial x + y \partial/\partial y$. The flows are: $\Phi_t^X(x,y) = (x+yt, y)$
(shear), $\Phi_s^Y(x,y) = (x, y+xs)$ (shear). These do not commute. $\blacksquare$

## Intuition

A vector field is like a wind pattern on the Earth's surface, assigning a direction and speed to every point. The flow is what happens when you release a leaf: it traces a path following the local arrows. Gentle winds produce eternal journeys, but violent fields can fling particles to infinity in finite time. The Lie bracket of two vector fields captures how their flows disagree: flowing along one then the other, versus the reverse order, produces different results precisely when the bracket is nonzero. This is the geometric heart of non-commutativity.

## Common Mistakes

**Mistake 1: Assuming the Lie bracket is commutative**
The Lie bracket satisfies anti-symmetry: $[X, Y] = -[Y, X]$. Students often write $[X, Y] = [Y, X]$ or forget the sign when computing brackets. This is fundamentally different from the ordinary product of functions, which is commutative. The non-commutativity of the Lie bracket reflects the non-commutativity of flowing along different vector fields.

**Mistake 2: Confusing completeness with compactness of the domain**
A vector field on a non-compact manifold can be complete (e.g., $X = \partial/\partial x$ on $\mathbb{R}$), while a vector field on a compact manifold is always complete. Students sometimes assume that non-compact domains automatically produce incomplete flows, which is false -- completeness depends on the specific growth rate of the vector field.

**Mistake 3: Miscomputing the Lie bracket in coordinates**
The coordinate formula $[X, Y]^i = X^j \partial_j Y^i - Y^j \partial_j X^i$ requires differentiating the *component functions* of $Y$ along $X$ and vice versa. Students frequently differentiate the wrong components or forget that the partial derivatives act on the coefficients, not on the basis vector fields themselves.

A vector field assigns a direction and magnitude to every point of a manifold — like a wind map on the Earth's surface. The flow of a vector field is the family of curves that follow these arrows: starting at any point and moving along the field traces out a path. If the field is complete, the flow is defined for all time. The Lie bracket of two vector fields measures how their flows fail to commute — if you flow along $X$ then $Y$, and compare with flowing along $Y$ then $X$, the discrepancy is the Lie bracket $[X, Y]$. Zero bracket means the flows commute, generalising the fact that mixed partial derivatives are equal.

### 3.9 Practice Problems

1. Find the flow of $X = x^2 \partial/\partial x + y \partial/\partial y$ on $\mathbb{R}^2$.
2. Prove that $[X, fY] = f[X, Y] + (Xf)Y$ for $f \in C^\infty(M)$.
3. Show that the vector field $X = \partial/\partial\theta$ on $S^1$ is complete and find its flow.
4. Compute the Lie bracket of $X = \partial/\partial x$ and $Y = x \partial/\partial y$ on $\mathbb{R}^2$.
5. Prove that if $[X, Y] = 0$ then $\Phi_t^X \circ \Phi_s^Y = \Phi_s^Y \circ \Phi_t^X$ for all $s, t$.

## Cross-References

- [Geodesics](/mathematics/12-differential-geometry/6_geodesics) -- Geodesics are integral curves of specific vector fields on the tangent bundle, connecting the flow theory here to metric geometry.
- [Differential Geometry Summary](/mathematics/12-differential-geometry/10_summary) -- The summary consolidates the key operators (Lie derivative, exterior derivative) introduced in this chapter.
- [Group Actions](/mathematics/1-abstract-algebra/6_group-actions) -- Lie groups act on manifolds by diffeomorphisms, generalising the group action framework to continuous symmetry.
- [Key Theorems in Functional Analysis](/mathematics/11-functional-analysis/9_summary-of-key-theorems) -- The Hahn-Banach and spectral theorems provide the functional-analytic foundations for studying infinite-dimensional spaces of vector fields.
