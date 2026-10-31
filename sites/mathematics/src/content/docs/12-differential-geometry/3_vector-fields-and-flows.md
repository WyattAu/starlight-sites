---

date: 2026-07-23T21:57:32+01:00
title: "Vector Fields and Flows"
tags:
  - Mathematics
  - University
description: "Vector fields and flows built on the ODE theorems: maximal integral curves, the Lie bracket as a commutator of derivations with the Jacobi identity proved, the flow formula for the bracket, smoothness and the group law of flows, completeness on compact manifolds, and commuting flows."
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

**Proof.** In local coordinates (§3.7), the integral curve equation is the ODE system
$\dot{\gamma}^i(t) = X^i(\gamma(t))$ with smooth right-hand side. The Picard--Lindelöf theorem
gives a unique local solution through $p$, and smooth dependence on initial data. If $\gamma_1$ and
$\gamma_2$ are integral curves through $p$ on overlapping intervals, they agree on the connected
component of the overlap containing $0$ — the set $\{t : \gamma_1(t) = \gamma_2(t)\}$ is closed by
continuity and open because both curves solve the same ODE with the same value at any common point
(local uniqueness). So they glue to a single integral curve on the union of their intervals. Take
the union over *all* integral curves through $p$: maximality is built in. $\blacksquare$

### 3.2 The Lie Bracket

For vector fields $X, Y$ on $M$, the **Lie bracket** $[X, Y]$ is the vector field defined by:

$$
[X, Y]f = X(Y(f)) - Y(X(f))
$$

for $f \in C^\infty(M)$. (First check it *is* a vector field: the right side is a derivation of
$C^\infty(M)$ — it is linear over $\mathbb{R}$ and satisfies the Leibniz rule
$[X,Y](fg) = [X,Y](f)g + f[X,Y](g)$, the $ff'$ and $f'f$ cross terms cancelling by antisymmetry —
and derivations of $C^\infty(M)$ are exactly vector fields.)

**Proposition 3.2 (Properties of the Lie Bracket).**

1. Bilinearity: $[aX + bY, Z] = a[X, Z] + b[Y, Z]$.
2. Anti-symmetry: $[X, Y] = -[Y, X]$.
3. **Jacobi identity**: $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$.

The space of all vector fields $\mathfrak{X}(M)$ with the Lie bracket forms a **Lie algebra**.

**Proof.** (1) Immediate from the linearity of $X$ and $Y$ as operators on $C^\infty(M)$.

(2) Expand both brackets on $f$; the terms swap and change sign.

(3) The clean way is to see the bracket as a commutator. Let $D_X$ denote the operator
$f \mapsto X(f)$ on $C^\infty(M)$. Each $D_X$ is a derivation, and the definition reads
$[X, Y] = D_XD_Y - D_YD_X$ — the commutator of the two operators. For *any* three operators,
the commutator identity

$$
[A, [B, C]] + [B, [C, A]] + [C, [A, B]] = 0
$$

holds by pure algebra: expanding each commutator as $UV - VU$, the six terms
$ABCA$-type products cancel in opposite pairs (the $ABC$ term in the first summand cancels the
$BCA$ term in the second, and so on). Applying this with $A = D_X$, $B = D_Y$, $C = D_Z$ gives
$D_{[X,[Y,Z]] + \cdots} = 0$ as an operator; since distinct derivations are distinct vector fields
(and the zero derivation is the zero field), the Jacobi identity follows. $\blacksquare$

### 3.3 The Lie Derivative

The **Lie derivative** of a vector field $Y$ along $X$ is $\mathcal{L}_X Y = [X, Y]$. For a function
$f$, $\mathcal{L}_X f = X(f)$.

The Lie derivative measures the rate of change of a geometric object along the flow of $X$.

**Theorem 3.3 (Flow of the Lie Bracket).** If $\Phi_t$ is the flow of $X$, then for any vector
field $Y$:

$$
\frac{d}{dt}\bigg|_{t=0} (\Phi_{-t})_* Y = [X, Y].
$$

In words: the Lie bracket measures how $Y$ fails to be invariant under the flow of $X$.

**Proof.** Test both sides on an arbitrary $f \in C^\infty(M)$ at an arbitrary $p$. By definition
of the pushforward,

$$
\bigl((\Phi_{-t})_* Y\bigr)_p(f) = Y_{\Phi_t(p)}(f \circ \Phi_{-t}).
$$

Set $h(t, x) = (f \circ \Phi_{-t})(x)$, so $h(0, \cdot) = f$ and
$\partial_t h(0, \cdot) = -X(f)$ (differentiating the flow relation
$f \circ \Phi_{-t}(x) = f(\Phi_{-t}(x))$ at $t = 0$). The right side is $Y_{\Phi_t(p)}(h(t, \cdot))$,
a function of $t$ through two channels: the test function $h(t, \cdot)$ and the evaluation point
$\Phi_t(p)$. Differentiating both at $t = 0$:

$$
\left.\frac{d}{dt}\right|_{t=0} Y_{\Phi_t(p)}(h(t, \cdot))
= Y_p\bigl(\partial_t h(0, \cdot)\bigr) + X_p\bigl(Y(h(0, \cdot))\bigr)
= -Y_p(X f) + X_p(Y f),
$$

using the chain rule along the curve $t \mapsto \Phi_t(p)$, whose velocity at $t = 0$ is $X_p$.
The total is $[X, Y]_p f$. Since $p$ and $f$ were arbitrary, the vector fields agree. $\blacksquare$

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

**Proof.** (1) is the initial condition. (2) Fix $p$ and $s$ with both sides defined near
$t = 0$. The curve $t \mapsto \Phi(t+s, p)$ and the curve $t \mapsto \Phi(t, \Phi(s, p))$ are both
integral curves of $X$ — the first by the autonomous character of the equation
$\dot{\gamma} = X_\gamma$ (the right side does not depend on $t$ explicitly), the second by the
definition of the flow — and they agree at $t = 0$. By uniqueness (Theorem 3.1) they agree wherever
both are defined; the equality of domains near $t = 0$ propagates by the same argument.

(3) By (2), $\Phi_{-t} \circ \Phi_t = \Phi_{t + (-t)} = \Phi_0 = \operatorname{id}$ wherever the
compositions are defined, and vice versa. So $\Phi_t$ is a bijection onto its image with inverse
$\Phi_{-t}$; smoothness of $\Phi$ — which is the smooth-dependence-on-initial-data part of the ODE
theorem, assembled globally on the open domain $\mathcal{D}$ — makes both maps smooth. $\blacksquare$

**Definition.** A vector field $X$ is **complete** if its flow is defined for all $t \in \mathbb{R}$
(i.e., $\mathcal{D} = \mathbb{R} \times M$). This happens if the maximal interval $I_p$ is all of
$\mathbb{R}$ for every $p \in M$.

**Theorem 3.5 (Compactness Implies Completeness).** If $M$ is compact, then every smooth vector
field on $M$ is complete.

**Proof.** Let $\gamma : [0, T) \to M$ be a maximal integral curve with $T < \infty$; we derive a
contradiction. Since $M$ is compact and $X$ smooth, the continuous function $\|X\|$ (in any
Riemannian metric) is bounded: $C = \sup_{q \in M} \|X_q\| < \infty$. Then

$$
d(\gamma(t_1), \gamma(t_2)) \leq \int_{t_1}^{t_2} \|\gamma'(t)\|\, dt \leq C |t_2 - t_1|,
$$

so $\gamma$ is Lipschitz on $[0, T)$ and extends continuously to $[0, T]$; let $q = \gamma(T)$.
Picard--Lindelöf at $q$ produces an integral curve $\delta$ through $q$ on some interval
$(-\varepsilon, \varepsilon)$. Gluing $\gamma$ to $\delta$ at $T$ extends the integral curve past
$T$ — the concatenation is smooth (both pieces solve the same ODE and agree to first order at the
junction, by the ODE) and still satisfies $\dot{\gamma} = X_\gamma$. This contradicts maximality of
$[0, T)$. The argument for $T = \infty$ backwards in time is identical. So $I_p = \mathbb{R}$ for
every $p$. $\blacksquare$

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

**Proof.** *Complete field to group.* The flow property (Proposition 3.4(2)) with both sides
defined for all $t, s$ — which completeness provides — is exactly
$\Phi_t \circ \Phi_s = \Phi_{t+s}$, and $\Phi_0 = \operatorname{id}$.

*Group to complete field.* Let $X$ be defined by the displayed derivative, and let
$\gamma_p(t) = \Phi_t(p)$. Then $\gamma_p$ is an integral curve of $X$:

$$
\gamma_p'(t) = \left.\frac{d}{dh}\right|_{h=0} \Phi_{t+h}(p) = \left.\frac{d}{dh}\right|_{h=0} \Phi_h(\Phi_t(p)) = X_{\Phi_t(p)} = X_{\gamma_p(t)},
$$

using the group law. So $\Phi$ is *the* flow of $X$ (uniqueness of integral curves), and since $\Phi$
is defined for all $t$, $X$ is complete. The two constructions are inverse to each other. $\blacksquare$

**Example 3.2.** On $\mathbb{R}^2$, the vector field $X = -y \partial/\partial x + x \partial/\partial y$
generates rotation: $\Phi_t(x, y) = (x\cos t - y\sin t, x\sin t + y\cos t)$. This is a one-parameter
group of rotations.

### 3.6 Commuting Vector Fields

**Proposition 3.7.** Two vector fields $X, Y$ have commuting flows if and only if $[X, Y] = 0$.

More precisely, $[X, Y] = 0$ if and only if for all sufficiently small $s, t$:
$\Phi_t^X \circ \Phi_s^Y = \Phi_s^Y \circ \Phi_t^X$, where $\Phi^X$ and $\Phi^Y$ are the flows of
$X$ and $Y$ respectively.

**Proof.** *($\Rightarrow$, invariance first).* Suppose $[X, Y] = 0$. By Theorem 3.3,

$$
\frac{d}{ds}\bigg|_{s} (\Phi_{-s}^Y)_* X = (\Phi_{-s}^Y)_*(-[Y, X]) = 0,
$$

(the differentiation formula applies at any $s$, not just $0$, by translating the flows), so
$(\Phi_{-s}^Y)_*X = X$ for all $s$: $X$ is invariant under the $Y$-flow. Now fix $p$ and $s$ and
consider the curve $\beta(t) = \Phi_s^Y(\Phi_t^X(p))$. Its derivative is

$$
\beta'(t) = d\Phi_s^Y\big|_{\Phi_t^X(p)} (X_{\Phi_t^X(p)}) = \bigl((\Phi_s^Y)_* X\bigr)_{\beta(t)} = X_{\beta(t)},
$$

by the invariance just established (using $(\Phi_s^Y)_* = (\Phi_{-(-s)}^Y)_*$). So $\beta$ is an
integral curve of $X$ through $\Phi_s^Y(p)$; by uniqueness it equals $\Phi_t^X(\Phi_s^Y(p))$. So
the flows commute.

*($\Leftarrow$).* Suppose the flows commute. Test on $f$ and differentiate twice:

$$
[X, Y]_p f = \left.\frac{\partial^2}{\partial t\, \partial s}\right|_{t=s=0} \Bigl( f\bigl(\Phi_t^X(\Phi_s^Y(p))\bigr) - f\bigl(\Phi_s^Y(\Phi_t^X(p))\bigr) \Bigr) = 0,
$$

since the two mixed second partials of the *same* function $g(t, s) = f(\Phi_t^X(\Phi_s^Y(p)))$
agree (Clairaut's theorem — the smoothness of flows is what licenses it), and commutativity makes
the two arguments equal. $\blacksquare$

**Example 3.3.** On $\mathbb{R}^3$, the vector fields $X = \partial/\partial x$ and
$Y = \partial/\partial y$ commute: $[X, Y] = 0$. Their flows are translations in the $x$ and $y$
directions respectively, and these commute.

**Example 3.4.** On $S^2$, the vector fields generating rotations about the $x$-axis and $y$-axis
do not commute: $[X, Y] = Z$, where $Z$ generates rotation about the $z$-axis. This reflects
the non-commutativity of the Lie algebra $\mathfrak{so}(3)$.

### 3.7 Vector Fields in Coordinates

In local coordinates $(x^1, \ldots, x^n)$, a vector field $X$ can be written as:

$$
X = X^i(x) \frac{\partial}{\partial x^i}
$$

The integral curve equation $\dot\gamma(t) = X_{\gamma(t)}$ becomes the system of ODEs:

$$
\dot\gamma^i(t) = X^i(\gamma(t)), \quad i = 1, \ldots, n
$$

The Lie bracket in coordinates is:

$$
[X, Y]^i = X^j \frac{\partial Y^i}{\partial x^j} - Y^j \frac{\partial X^i}{\partial x^j}
$$

### 3.8 Worked Examples

**Problem 1.** Let $X = x \partial/\partial x$ on $\mathbb{R}$. Find the flow and determine whether
$X$ is complete.

*Solution.* The ODE is $\dot\gamma = \gamma$, giving $\gamma(t) = pe^t$. So $\Phi(t, p) = pe^t$.
This is defined for all $t \in \mathbb{R}$, so $X$ is complete. $\blacksquare$

**Problem 2.** Compute $[X, Y]$ for $X = y \partial/\partial x$ and $Y = x \partial/\partial y$ on
$\mathbb{R}^2$. What do their flows look like?

*Solution.* Using the coordinate formula: $X^1 = y$, $X^2 = 0$, $Y^1 = 0$, $Y^2 = x$.

$$
[X, Y]^1 = y\frac{\partial(0)}{\partial x} - 0\frac{\partial(y)}{\partial x} + 0\frac{\partial(0)}{\partial y} - x\frac{\partial(y)}{\partial y} = -x
$$

$$
[X, Y]^2 = y\frac{\partial(x)}{\partial x} - 0\frac{\partial(0)}{\partial x} + 0\frac{\partial(x)}{\partial y} - x\frac{\partial(0)}{\partial y} = y
$$

So $[X, Y] = -x \partial/\partial x + y \partial/\partial y$. The flows are: $\Phi_t^X(x,y) = (x+yt, y)$
(shear), $\Phi_s^Y(x,y) = (x, y+xs)$ (shear). These do not commute. $\blacksquare$

## Intuition

A vector field is like a wind pattern on the Earth's surface, assigning a direction and speed to every point. The flow is what happens when you release a leaf: it traces a path following the local arrows. Gentle winds produce eternal journeys, but violent fields can fling particles to infinity in finite time. The Lie bracket of two vector fields captures how their flows disagree: flowing along one then the other, versus the reverse order, produces different results precisely when the bracket is nonzero. This is the geometric heart of non-commutativity.

A vector field assigns a direction and magnitude to every point of a manifold, like a wind map on the Earth's surface. The flow of a vector field is the family of curves that follow these arrows: starting at any point and moving along the field traces out a path. If the field is complete, the flow is defined for all time. The Lie bracket of two vector fields measures how their flows fail to commute, if you flow along $X$ then $Y$, and compare with flowing along $Y$ then $X$, the discrepancy is the Lie bracket $[X, Y]$. Zero bracket means the flows commute, generalising the fact that mixed partial derivatives are equal.

## Common Mistakes

**Mistake 1: Assuming the Lie bracket is commutative**
The Lie bracket satisfies anti-symmetry: $[X, Y] = -[Y, X]$. Students often write $[X, Y] = [Y, X]$ or forget the sign when computing brackets. This is fundamentally different from the ordinary product of functions, which is commutative. The non-commutativity of the Lie bracket reflects the non-commutativity of flowing along different vector fields.

**Mistake 2: Confusing completeness with compactness of the domain**
A vector field on a non-compact manifold can be complete (e.g., $X = \partial/\partial x$ on $\mathbb{R}$), while a vector field on a compact manifold is always complete. Students sometimes assume that non-compact domains automatically produce incomplete flows, which is false -- completeness depends on the specific growth rate of the vector field.

**Mistake 3: Miscomputing the Lie bracket in coordinates**
The coordinate formula $[X, Y]^i = X^j \partial_j Y^i - Y^j \partial_j X^i$ requires differentiating the *component functions* of $Y$ along $X$ and vice versa. Students frequently differentiate the wrong components or forget that the partial derivatives act on the coefficients, not on the basis vector fields themselves.

### 3.9 Practice Problems

1. Find the flow of $X = x^2 \partial/\partial x + y \partial/\partial y$ on $\mathbb{R}^2$.
2. Prove that $[X, fY] = f[X, Y] + (Xf)Y$ for $f \in C^\infty(M)$.
3. Show that the vector field $X = \partial/\partial\theta$ on $S^1$ is complete and find its flow.
4. Compute the Lie bracket of $X = \partial/\partial x$ and $Y = x \partial/\partial y$ on $\mathbb{R}^2$.
5. Prove that if $[X, Y] = 0$ then $\Phi_t^X \circ \Phi_s^Y = \Phi_s^Y \circ \Phi_t^X$ for all $s, t$.

## Cross-References

- [Geodesics](/12-differential-geometry/6_geodesics/) -- Geodesics are integral curves of specific vector fields on the tangent bundle, connecting the flow theory here to metric geometry.
- [Differential Geometry Summary](/12-differential-geometry/10_summary/) -- The summary consolidates the key operators (Lie derivative, exterior derivative) introduced in this chapter.
- [Group Actions](/1-abstract-algebra/6_group-actions/) -- Lie groups act on manifolds by diffeomorphisms, generalising the group action framework to continuous symmetry.
- [Key Theorems in Functional Analysis](/11-functional-analysis/9_summary-of-key-theorems/) -- The Hahn-Banach and spectral theorems provide the functional-analytic foundations for studying infinite-dimensional spaces of vector fields.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)
