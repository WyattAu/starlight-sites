---
title: Tangent Spaces and Tangent Bundles
tags:
  - Mathematics
  - University
description: "There are several equivalent definitions of the tangent space at : Comprehensive educational content coverage with definitions and practice problems."
---

### 2.1 Tangent Vectors

There are several equivalent definitions of the tangent space $T_p M$ at $p \in M$:

**Definition (Directional Derivatives).** A tangent vector at $p$ is a derivation at $p$: a linear
map $v : C^\infty(M) \to \mathbb{R}$ satisfying the Leibniz rule:

$$v(fg) = f(p) \cdot v(g) + v(f) \cdot g(p)$$

**Definition (Equivalence Classes of Curves).** A tangent vector is an equivalence class of smooth
curves $\gamma : (-\varepsilon, \varepsilon) \to M$ with $\gamma(0) = p$, where
$\gamma_1 \sim \gamma_2$ if $(\varphi \circ \gamma_1)'(0) = (\varphi \circ \gamma_2)'(0)$ in some
(hence every) chart.

**Proposition 2.1.** $T_p M$ is a vector space of dimension $n = \dim M$.

### 2.2 The Tangent Bundle

The **tangent bundle** of $M$ is

$$TM = \bigsqcup_{p \in M} T_p M = \{(p, v) : p \in M,\ v \in T_p M\}$$

It is a smooth manifold of dimension $2n$ with projection $\pi : TM \to M$ given by $\pi(p, v) = p$.

A **vector field** on $M$ is a smooth section of $TM$: a smooth map $X : M \to TM$ with
$\pi \circ X = \mathrm{id}_M$, written $X(p) = X_p \in T_p M$.

### 2.3 The Differential

Let $f : M \to N$ be a smooth map. The **differential** (or pushforward) of $f$ at $p$ is the linear
map:

$$df_p : T_p M \to T_{f(p)} N, \quad df_p(v)(g) = v(g \circ f)$$

for $v \in T_p M$ and $g \in C^\infty(N)$. In local coordinates, $df_p$ is represented by the
Jacobian matrix $[D(f \circ \varphi^{-1})](\varphi(p))$.

**Proposition 2.2 (Chain Rule).** $d(g \circ f)_p = dg_{f(p)} \circ df_p$.

### 2.4 Coordinate Representation

In local coordinates $(x^1, \ldots, x^n)$ around $p$, the **coordinate vectors**
$\partial/\partial x^i|_p$ form a basis of $T_p M$. Any tangent vector $v \in T_p M$ can be
expressed as:

$$v = v^i \frac{\partial}{\partial x^i}\bigg|_p$$

For a smooth function $f : M \to \mathbb{R}$, the action of $v$ on $f$ is:

$$v(f) = v^i \frac{\partial f}{\partial x^i}(p)$$

**Example 2.1.** On $\mathbb{R}^n$, $T_p \mathbb{R}^n \cong \mathbb{R}^n$ with basis
$\partial/\partial x^1, \ldots, \partial/\partial x^n$. A tangent vector $v = (v^1, \ldots, v^n)$
acts on $f \in C^\infty(\mathbb{R}^n)$ by $v(f) = \sum v^i \partial f/\partial x^i(p)$.

**Example 2.2.** On the sphere $S^2$ at a point $p = (\theta_0, \phi_0)$, the tangent space
$T_p S^2$ is spanned by $\partial/\partial\theta$ and $\partial/\partial\phi$ evaluated at $p$.

### 2.5 Change of Coordinates

If $(x^1, \ldots, x^n)$ and $(y^1, \ldots, y^n)$ are two coordinate systems around $p$, the
transition formula for tangent vectors is:

$$\frac{\partial}{\partial y^j} = \frac{\partial x^i}{\partial y^j} \frac{\partial}{\partial x^i}$$

Thus the components of a vector $v = v^i \partial/\partial x^i = \tilde v^j \partial/\partial y^j$
transform as:

$$\tilde v^j = v^i \frac{\partial y^j}{\partial x^i}$$

This **contravariant** transformation law characterizes tangent vectors: their components transform
using the Jacobian of the coordinate change.

**Example 2.3.** In polar coordinates $(r, \theta)$ on $\mathbb{R}^2$, the relation between
Cartesian and polar basis vectors is:

$$\frac{\partial}{\partial r} = \cos\theta\,\frac{\partial}{\partial x} + \sin\theta\,\frac{\partial}{\partial y}, \quad \frac{\partial}{\partial\theta} = -r\sin\theta\,\frac{\partial}{\partial x} + r\cos\theta\,\frac{\partial}{\partial y}$$

### 2.6 The Cotangent Space

The dual space $T_p^* M = (T_p M)^*$ is called the **cotangent space** at $p$. Its elements are
**covectors** (linear functionals on $T_p M$). The basis dual to $\{\partial/\partial x^i\}$ is
denoted $\{dx^i|_p\}$, where:

$$dx^i\left(\frac{\partial}{\partial x^j}\right) = \delta^i_j$$

**Proposition 2.3.** For a smooth function $f : M \to \mathbb{R}$, the differential $df_p \in T_p^* M$
is given in coordinates by:

$$df_p = \frac{\partial f}{\partial x^i}(p)\, dx^i|_p$$

### 2.7 Vector Bundles

The tangent bundle $TM$ is a special case of a **vector bundle**: a smooth manifold $E$ with a
surjective submersion $\pi : E \to M$ such that each fiber $\pi^{-1}(p)$ is a vector space, and
local trivializations exist.

**Definition.** A **vector bundle** of rank $k$ over $M$ is a smooth manifold $E$ with a smooth map
$\pi : E \to M$ such that for every $p \in M$ there exists a neighborhood $U$ and a diffeomorphism
$\Phi : \pi^{-1}(U) \to U \times \mathbb{R}^k$ with $\pi = \mathrm{pr}_1 \circ \Phi$ and each fiber
$\pi^{-1}(p)$ maps linearly to $\{p\} \times \mathbb{R}^k$.

**Example 2.4.** The tangent bundle $TM$ is a rank $n$ vector bundle over $M$. The cotangent bundle
$T^*M$ is also a rank $n$ vector bundle, dual to $TM$.

**Example 2.5.** The trivial bundle $M \times \mathbb{R}^k$ is a rank $k$ vector bundle. A manifold
$M$ is **parallelizable** if $TM \cong M \times \mathbb{R}^n$. For example, $S^1$ is parallelizable
but $S^2$ is not (by the hairy ball theorem).

### 2.8 Worked Examples

**Problem 1.** Let $M = \mathbb{R}^2$ with coordinates $(x, y)$ and let $f : \mathbb{R}^2 \to \mathbb{R}$
be $f(x, y) = x^2 + y^2$. Compute $df_{(1,0)}$ in coordinates.

*Solution.* $\partial f/\partial x = 2x$, $\partial f/\partial y = 2y$. At $(1,0)$,
$df_{(1,0)} = 2x\, dx + 2y\, dy|_{(1,0)} = 2\, dx$. So $df_{(1,0)}(v) = 2v^1$. $\blacksquare$

**Problem 2.** Show that $T_p S^2$ is isomorphic to $\{v \in \mathbb{R}^3 : p \cdot v = 0\}$.

*Solution.* Consider the embedding $S^2 \subseteq \mathbb{R}^3$. A curve $\gamma(t)$ on $S^2$ satisfies
$\gamma(t) \cdot \gamma(t) = 1$. Differentiating: $\gamma'(0) \cdot p = 0$, so every tangent vector
is orthogonal to $p$. Conversely, any $v \perp p$ is tangent to the great circle in the
$p$-$v$-plane. Thus $T_p S^2 \cong p^\perp$. $\blacksquare$

### 2.9 Practice Problems

## Cross-References

- **[Curvature](./7_curvature.md)**: Uses the tangent bundle and connections to define the Riemann curvature tensor, measuring how parallel transport rotates vectors.
- **[The Gauss-Bonnet Theorem](./8_the-gauss-bonnet-theorem.md)**: Relates the integral of Gaussian curvature over a surface to its Euler characteristic, a topological invariant of the tangent bundle.
- **[Applications](./9_applications.md)**: Uses tangent spaces and vector fields to model geodesics in general relativity and configuration spaces in robotics.

## Common Mistakes

**Mistake 1: Confusing the two definitions of tangent vectors**
The derivation definition and the equivalence-of-curves definition are equivalent, but students often try to use the wrong one in context. When computing with coordinates, the derivation approach is cleaner. When proving geometric results about curves on manifolds, the curve-equivalence approach is more natural.

**Mistake 2: Misapplying the chain rule for pushforwards**
The chain rule states $d(g \circ f)_p = dg_{f(p)} \circ df_p$, where the differentials compose in the order $g$ then $f$, not $f$ then $g$. Students frequently write $df_p \circ dg_{f(p)}$ or forget that the middle spaces must match: $df_p : T_pM \to T_{f(p)}N$ and $dg_{f(p)} : T_{f(p)}N \to T_{g(f(p))}P$.

**Mistake 3: Forgetting that tangent bundle components transform contravariantly**
Under a coordinate change $y = y(x)$, the components of a tangent vector transform as $\tilde{v}^j = v^i \partial y^j/\partial x^i$, using the Jacobian matrix. Students often mistakenly apply the inverse Jacobian, which would give covariant (covector) transformation, not contravariant.

## Intuition

The tangent space at a point on a manifold is the collection of all possible velocities of curves passing through that point — it is the "flat approximation" to the curved space at that point. On a sphere, the tangent space at the north pole is the horizontal plane touching the sphere there. The tangent bundle glues together all tangent spaces into a single space, giving a manifold a way to talk about directions and velocities globally. A differential form is a machine that takes a tangent vector and returns a number, consistently across all points. The exterior derivative of a form measures how the form changes — it is the infinitesimal version of Stokes' theorem.

### 2.9 Practice Problems

1. Prove that the curve and derivation definitions of $T_p M$ are equivalent.
2. Compute the transition matrix for $T_p \mathbb{R}^2$ between Cartesian and polar coordinates.
3. Show that $d(fg)_p = f(p) dg_p + g(p) df_p$.
4. Prove that $T(S^1)$ is diffeomorphic to $S^1 \times \mathbb{R}$.
5. Show that if $M$ is an $n$-dimensional manifold, then $TM$ is a $2n$-dimensional manifold.
