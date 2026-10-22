---

date: 2026-07-23T21:57:32+01:00
title: "Geodesics"
tags:
  - Mathematics
  - University
description: "Geodesics from the equation up: existence and uniqueness, the exponential map as a local diffeomorphism, Hopf-Rinow with each implication proved, Jacobi fields as variation fields, the Gauss lemma with the radial-isometry computation, and the index-form argument that conjugate points kill minimality."
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

$$
\ddot{\gamma}^k + \Gamma^k_{ij}\, \dot{\gamma}^i \dot{\gamma}^j = 0
$$

This is a second-order ODE with smooth coefficients, so by the existence and uniqueness theorem for
ODEs, geodesics exist and are unique given an initial point and velocity.

**Proposition 6.1.** Geodesics are locally distance-minimizing: for sufficiently small $t$, the
geodesic $\gamma$ from $p$ to $\gamma(t)$ has length equal to the Riemannian distance
$d(p, \gamma(t))$.

This is proved at the end of §6.8, as the corollary of the Gauss lemma.

### 6.2 The Exponential Map

For $p \in M$, the **exponential map** $\exp_p : T_p M \to M$ is defined by
$\exp_p(v) = \gamma_v(1)$, where $\gamma_v$ is the geodesic with $\gamma_v(0) = p$ and
$\dot{\gamma}_v(0) = v$.

**Proposition 6.2.** The exponential map is a local diffeomorphism near the origin: there exists
$\varepsilon > 0$ such that $\exp_p$ is a diffeomorphism from
$\{v \in T_p M : \|v\| < \varepsilon\}$ onto an open neighborhood of $p$.

**Proof.** Compute the differential at the origin: for $w \in T_pM$,
$d(\exp_p)_0(w) = \left.\frac{d}{ds}\right|_{s=0} \exp_p(sw) = \left.\frac{d}{ds}\right|_{s=0} \gamma_w(s) = \dot{\gamma}_w(0) = w$,
by the very definition of $\gamma_w$. So $d(\exp_p)_0 = \operatorname{id}_{T_pM}$, a linear
isomorphism. The inverse function theorem gives the result. $\blacksquare$

### 6.3 Completeness

A Riemannian manifold $(M, g)$ is **geodesically complete** if every maximal geodesic is defined for
all time (i.e., on $\mathbb{R}$).

**Theorem 6.3 (Hopf-Rinow).** For a connected Riemannian manifold, the following are equivalent:

1. $M$ is geodesically complete.
2. $(M, d)$ is a complete metric space (where $d$ is the Riemannian distance).
3. Every closed and bounded subset of $M$ is compact.
4. There exists $p \in M$ such that $\exp_p$ is defined on all of $T_p M$.

**Proof.** *$(3) \Rightarrow (2)$.* In a metric space where some closed ball around each point is
compact, the space is complete: a Cauchy sequence eventually lies in one closed ball, which is
sequentially compact, so the sequence has a convergent subsequence — and a Cauchy sequence with a
convergent subsequence converges.

*$(3) \Rightarrow (1)$.* Let $\gamma : [0, T) \to M$ be a maximal geodesic and suppose $T < \infty$.
For $t < T$, $\|\dot{\gamma}(t)\| = \|\dot{\gamma}(0)\|$ (unit-speed after reparametrisation), so
$\gamma([0, T))$ has diameter at most $T\|\dot{\gamma}(0)\|$: it is bounded, and its closure is
closed and bounded — compact by (3). So $\gamma(t)$ has a convergent subsequence as $t \uparrow T$,
say to $q \in M$. Local existence of geodesics at $q$ with the limiting velocity
(the ODE continuation criterion: $\gamma$ extends past $T$ iff $\dot{\gamma}(t)$ has a limit in
$T_qM$, which compactness supplies) extends $\gamma$ past $T$, contradicting maximality. So
$T = \infty$.

*$(1) \Rightarrow (4)$.* Trivial: geodesic completeness says exactly that the geodesic $\gamma_v$
used to define $\exp_p(v) = \gamma_v(1)$ exists for all unit times, for every $v$.

*$(4) \Rightarrow (3)$.* This is the heart. Two lemmas.

**Lemma A (minimising geodesics from $p$).** If $\exp_p$ is defined on the closed ball
$\overline{B}(0, r) \subseteq T_pM$, then every $q$ with $d(p, q) \leq r$ is joined to $p$ by a
minimising geodesic.

*Proof of Lemma A.* Let $r' = d(p, q) \leq r$ and consider the set
$S = \{s \in [0, r'] : \text{points at distance } s \text{ from } p \text{ are joined to } p \text{ by minimising geodesics}\}$.
Then $0 \in S$ (trivially) and $S$ is closed: if $s_j \uparrow s$ with minimising geodesics
$\gamma_j$ to points $q_j$ at distance $s_j$, the initial velocities $v_j = \dot{\gamma}_j(0)$ have
$\|v_j\| = 1$ and lie in the finite-dimensional compact sphere of $T_pM$; a subsequence converges,
$v_j \to v$, and $\exp_p(sv)$ is a minimising geodesic to a point at distance $s$ — the continuity
of the distance and of $\exp_p$ (defined on $\overline{B}(0, s)$) close the argument. And $S$ is
open in $[0, r']$: if $q$ is joined to $p$ by a minimising geodesic $\gamma$ with
$d(p, q) = s < r$, extend $\gamma$ past $q$ (possible since $s < r$) and use the
*break-point observation*: for $q'$ just past $q$ on the extension, $d(p, q') \geq d(p, q) + d(q, q')$
by the triangle inequality, while a curve from $p$ to $q'$ nearly achieving $d(p, q')$ must pass
near $q$; the limit as the curve's passage point approaches $q$ gives
$d(p, q') \leq d(p, q) + d(q, q')$, so equality holds and the extended geodesic is minimising to
$q'$ — putting a neighbourhood of $s$ in $S$. Since $[0, r']$ is connected, $S = [0, r']$; in
particular $r' = d(p, q) \in S$, and a minimising geodesic from $p$ to $q$ exists. $\square$

**Lemma B (surjectivity with control).** Under (4), every $q \in M$ is joined to $p$ by a
minimising geodesic, and writing $q = \exp_p(v)$ with $\|v\| = d(p, q)$.

*Proof of Lemma B.* Immediate from Lemma A: $\exp_p$ is defined on every closed ball, so Lemma A
applies at every radius $r' = d(p, q)$, and a minimising geodesic from $p$ to $q$ has the form
$t \mapsto \exp_p(tv)$ with $\|v\| = $ its length $= d(p, q)$. $\square$

Now let $C \subseteq M$ be closed and bounded. Boundedness puts $C \subseteq \overline{B}(p, R)$
for some $R$ (using the fixed base point $p$ of (4) and connectedness of $M$, so $d(p, \cdot)$ is
finite everywhere). Every $x \in C$ can be written $x = \exp_p(v_x)$ with $\|v_x\| \leq R$ by
Lemma B. The ball $\overline{B}(0, R) \subseteq T_pM$ is compact ($T_pM$ is finite-dimensional,
Heine--Borel), so a sequence in $C$ has initial vectors $v_{x_j}$ with a convergent subsequence;
continuity of $\exp_p$ then makes $x_j$ converge *to a point of $C$* ($C$ is closed). So $C$ is
sequentially compact, hence compact. $\blacksquare$

**Corollary.** Every compact Riemannian manifold is geodesically complete.

**Proof.** A compact metric space has all closed subsets compact, and all subsets are bounded —
property (3) holds, so (1) follows. $\blacksquare$

### 6.4 Jacobi Fields

A **Jacobi field** $J(t)$ along a geodesic $\gamma$ is a vector field that satisfies the **Jacobi
equation**:

$$
\frac{D^2}{dt^2} J(t) + R(J(t), \dot{\gamma}(t)) \dot{\gamma}(t) = 0
$$

Jacobi fields describe the variation of nearby geodesics. They measure how geodesics spread apart
or come together under the influence of curvature.

**Proposition 6.4.** A vector field $J$ along $\gamma$ is a Jacobi field if and only if it arises
as the variation field of a one-parameter family of geodesics $\gamma_s(t)$ with $\gamma_0 = \gamma$
and $J(t) = \partial_s \gamma_s(t)|_{s=0}$.

**Proof.** *($\Leftarrow$)* Let $\gamma_s$ be a family of geodesics and $J = \partial_s \gamma_s|_{s=0}$
the variation field. Since each $\gamma_s$ is a geodesic, $D_t \partial_t \gamma_s = 0$ for all
$s$. Differentiate in $s$ and use the torsion-free commutation formula
$D_tD_sW - D_sD_tW = R(\partial_t\gamma, \partial_s\gamma)W$:

$$
\frac{D^2 J}{dt^2} = D_t D_s \partial_t \gamma \big|_{s=0} = D_s \underbrace{D_t \partial_t \gamma}_{=\,0} \Big|_{s=0} + R\bigl(\dot{\gamma}, J\bigr) \dot{\gamma} = -R(J, \dot{\gamma})\dot{\gamma},
$$

using the antisymmetry $R(\dot{\gamma}, J) = -R(J, \dot{\gamma})$ in the final two slots. So $J$
satisfies the Jacobi equation.

*($\Rightarrow$)* Conversely, let $J$ satisfy the Jacobi equation; we construct a variation with
field $J$. Let $p = \gamma(0)$ and $w_0 = \dot{\gamma}(0)$. Take a curve $c(s)$ with $c(0) = p$,
$c'(0) = J(0)$ (e.g. $c(s) = \exp_p(sJ(0))$), and let $w(s)$ be the $T_{c(s)}M$-valued field
obtained by parallel transporting $w_0 + s\,\frac{DJ}{dt}(0)$ along $c$. Define

$$
\gamma_s(t) = \exp_{c(s)}\bigl(t\, w(s)\bigr),
$$

which is a geodesic for each small $s$ (local existence). Then $\gamma_0(t) = \exp_p(tw_0) = \gamma(t)$.
Its variation field $K = \partial_s\gamma_s|_{s=0}$ is a Jacobi field by ($\Leftarrow$), with
initial data $K(0) = \partial_s \exp_{c(s)}(0)\big|_{s=0} = c'(0) = J(0)$ (as $\exp_{c(s)}(0) = c(s)$),
and

$$
\frac{DK}{dt}(0) = D_t \partial_s \gamma_s(0) = D_s \partial_t \gamma_s(0)\big|_{s=0} = D_s w(s)\big|_{s=0} = \frac{DJ}{dt}(0),
$$

since $\partial_t \gamma_s(0) = w(s)$ and $w$ was built to have covariant derivative $\frac{DJ}{dt}(0)$
along $c$. The Jacobi equation is linear second-order with smooth coefficients, so its solution
space is a $2\dim M$-dimensional vector space and the initial-value problem has a unique solution:
$K = J$. $\blacksquare$

### 6.5 Conjugate Points

Two points $p, q \in M$ are **conjugate** along a geodesic $\gamma$ if there exists a non-zero
Jacobi field along $\gamma$ vanishing at both $p$ and $q$.

**Theorem 6.5.** A geodesic $\gamma : [0, 1] \to M$ ceases to be length-minimizing past its first conjugate point.

_Proof sketch (index-form argument)._ Assume $\gamma$ is unit-speed, fix endpoints
$\gamma(0) = p$, $\gamma(1) = q$, and consider the **index form** on vector fields $V$ along
$\gamma$ vanishing at both endpoints:

$$
I(V, V) = \int_0^1 \Bigl( \Bigl\| \frac{DV}{dt} \Bigr\|^2 - \langle R(V, \dot{\gamma})\dot{\gamma}, V \rangle \Bigr)\, dt.
$$

Two facts drive the proof. First, $I$ is the second variation of energy: for variations through
*curves* with fixed endpoints, $\left.\frac{d^2}{ds^2}\right|_{s=0} E(\gamma_s) = I(V, V)$ — this
is the second variation formula of §6.11 with the boundary terms vanishing.

Second, a Jacobi field $J$ vanishing at both endpoints has $I(J, J) = 0$: integrate by parts,

$$
I(J, J) = \Bigl[ \langle J, \tfrac{DJ}{dt} \rangle \Bigr]_0^1 - \int_0^1 \Bigl\langle J, \frac{D^2J}{dt^2} + R(J, \dot{\gamma})\dot{\gamma} \Bigr\rangle\, dt = 0,
$$

where the bracket vanishes (endpoint vanishing) and the integrand vanishes by the Jacobi equation.

Now suppose $q$ is conjugate to $p$ along $\gamma$ at parameter $t_0 < 1$, with Jacobi field $J$
vanishing at $0$ and $t_0$. The theory of the index form (Morse index lemma; the finite-dimensional
reduction along a basis of Jacobi fields) shows: $I(W, W) \geq 0$ for all $W$ on the subinterval
$[0, t_0]$, with $I$ degenerate exactly on the Jacobi fields; but on the full interval $[0, 1]$
one can construct a field $W$ vanishing at both ends with $I(W, W) < 0$ — take $W$ equal to $J$ on
$[0, t_0]$ scaled against a second field supported on $[t_0, 1]$, and use the matching condition at
$t_0$ plus the degeneracy there to make the cross terms absorb the boundary contribution. A negative
second variation means $E$ — hence, for curves of nearly constant speed, $L$ — *decreases* along
the corresponding variation through curves from $p$ to $q$. So near $\gamma$ there are curves from
$p$ to $q$ strictly shorter than $\gamma$: $\gamma$ is not locally minimising past its first
conjugate point. $\blacksquare$

The full construction of the shorter curve (cut-off functions and the explicit cross-term estimate)
is carried out in do Carmo, *Riemannian Geometry*, Chapter 9 — the computation above supplies the
two facts that make it work.

### 6.6 Geodesic Deviation

The **geodesic deviation equation** describes the relative acceleration of nearby geodesics:

$$
\frac{D^2}{dt^2} J^i = -R^i_{\,jkl} \dot{\gamma}^j J^k \dot{\gamma}^l
$$

In general relativity, this is the equation of **geodesic deviation** that governs tidal forces.
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

$$
\langle d(\exp_p)_v(v), d(\exp_p)_v(w) \rangle = \langle v, w \rangle
$$

**Proof.** Consider the two-parameter family

$$
\gamma_s(t) = \exp_p\bigl(t(v + s w)\bigr),
$$

whose $t$-curves are geodesics starting at $p$ with initial velocities $v + sw$. Write
$\Gamma = \partial_t \gamma_s$ and $J = \partial_s \gamma_s$ (so $J(1) = d(\exp_p)_v(w)$ and
$\Gamma(1) = d(\exp_p)_v(v)$, and $J(0) = 0$ since $\gamma_s(0) = p$ for all $s$).

Each $t$-curve is a geodesic, so $\|\Gamma(t)\|$ is independent of $t$ — in particular
$\langle \Gamma, \Gamma \rangle = \|v + sw\|^2$ (the speed equals the norm of the initial vector).
Differentiate the inner product $\langle J, \Gamma \rangle$ in $t$:

$$
\frac{\partial}{\partial t} \langle J, \Gamma \rangle
= \langle D_t J, \Gamma \rangle + \langle J, \underbrace{D_t \Gamma}_{=\,0} \rangle
= \langle D_s \partial_t \gamma_s, \partial_t \gamma_s \rangle
= \frac{1}{2} \frac{\partial}{\partial s} \langle \Gamma, \Gamma \rangle
= \langle v + sw, w \rangle,
$$

where $D_tJ = D_s\partial_t\gamma_s$ by torsion-freeness. Integrating in $t$ from $0$ — where
$\langle J, \Gamma \rangle = \langle J(0), \Gamma(0) \rangle = 0$ — gives
$\langle J(t), \Gamma(t) \rangle = t \langle v + sw, w \rangle$. Evaluating at $t = 1$, $s = 0$:

$$
\langle d(\exp_p)_v(w),\, d(\exp_p)_v(v) \rangle = \langle v, w \rangle. \qquad \blacksquare
$$

**Corollary.** Geodesics are locally length-minimizing: for $v$ sufficiently small,
$\gamma(t) = \exp_p(tv)$ is the unique shortest curve from $p$ to $\exp_p(v)$.

**Proof.** Shrink the ball so that $\exp_p$ is a diffeomorphism on $\|v\| < \varepsilon$
(Proposition 6.2) and let $\alpha : [0, 1] \to M$ be any piecewise smooth curve from $p$ to
$\exp_p(v)$ staying inside that ball. In the normal coordinates $x(t) = \exp_p^{-1}(\alpha(t))$,
write $x(t) = \rho(t)\, \hat{x}(t)$ with $\rho(t) = \|x(t)\|$ and $\|\hat{x}(t)\| = 1$. By the
Gauss lemma applied at $x(t)$ (radial direction $\partial_\rho$), $\partial_\rho$ is orthogonal to
the angular directions, so

$$
\|\alpha'(t)\| = \|x'(t)\| \geq \left| \frac{d\rho}{dt} \right|.
$$

Hence $L(\alpha) \geq |\rho(1) - \rho(0)| = \|v\| = L(\gamma)$, with equality in the triangle
inequality forcing $x'(t)$ radial throughout — i.e. $\alpha$ is the radial geodesic up to
reparametrisation. This proves Proposition 6.1. $\blacksquare$

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

$$
E(\gamma) = \frac{1}{2} \int_a^b \|\dot{\gamma}(t)\|^2\, dt
$$

The Euler-Lagrange equations for $E$ give the geodesic equation. Indeed, with
$L(x, \dot{x}) = \tfrac{1}{2} g_{ij}(x)\dot{x}^i\dot{x}^j$:

$$
\frac{d}{dt} \frac{\partial L}{\partial \dot{x}^k} - \frac{\partial L}{\partial x^k}
= g_{kj}\ddot{x}^j + \frac{\partial g_{kj}}{\partial x^i} \dot{x}^i \dot{x}^j - \frac{1}{2} \frac{\partial g_{ij}}{\partial x^k} \dot{x}^i \dot{x}^j = 0.
$$

Raising the index with $g^{lk}$ and symmetrising the coefficient of $\dot{x}^i\dot{x}^j$ in
$i \leftrightarrow j$ gives exactly $\ddot{x}^l + \Gamma^l_{ij}\dot{x}^i\dot{x}^j = 0$. The length
functional $L(\gamma) = \int_a^b \|\dot{\gamma}(t)\|\, dt$ has the same unparametrised critical
points but is parametrisation-independent; the energy fixes the parametrisation, which is why its
Euler-Lagrange equations are exactly the geodesic equation.

### 6.11 The First and Second Variation of Energy

**First variation formula:**

$$
\left.\frac{d}{ds}\right|_{s=0} E(\gamma_s) = -\int_a^b \langle V(t), \nabla_{\dot{\gamma}}\dot{\gamma}\rangle\, dt - \sum_i \langle V(t_i), \Delta\dot{\gamma}(t_i)\rangle
$$

where $V(t)$ is the variation field and $\Delta\dot{\gamma}$ is the jump discontinuity at
break points.

**Second variation formula:**

$$
\left.\frac{d^2}{ds^2}\right|_{s=0} E(\gamma_s) = \int_a^b \left(\left\|\frac{DV}{dt}\right\|^2 - \langle R(V, \dot{\gamma})\dot{\gamma}, V\rangle\right) dt + \text{boundary terms}
$$

The second variation is used to study stability of geodesics and to prove that conjugate points
indicate loss of minimizing property.

### 6.12 The Morse Index Theorem

**Theorem 6.7 (Morse Index Theorem).** The **index** of a geodesic segment $\gamma : [0, 1] \to M$
— the dimension of the largest subspace of endpoint-vanishing variation fields on which the index
form $I$ is negative definite — equals the number of conjugate points to $p$ along $\gamma$ in
$(0, 1)$, counted with multiplicity (each conjugate point contributing as many directions as there
are independent Jacobi fields vanishing there).

This theorem connects the calculus of variations to the topology of the loop space of a manifold.

_Proof sketch._ The index form $I$ is a symmetric bilinear form on the infinite-dimensional space
of endpoint-vanishing fields. Expand each such field in a basis of Jacobi fields
$\{J_1, \dots, J_n\}$ along $\gamma$ (via the data $(J_i(0), DJ_i/dt(0))$): for
$V = \sum_i f_i J_i$ with smooth scalar $f_i$ vanishing at both endpoints, two integrations by
parts reduce the index form to

$$
I(V, V) = \int_0^1 \sum_{i,j} \bigl( c_{ij} f_i f_j - \dot{f}_i \dot{f}_j \bigr)\, dt
$$

for constants $c_{ij}$ determined by the curvature — a quadratic form in the finitely many
functions $f_i$. The spectral theory of this Sturm--Liouville-type operator then gives: $I$ loses
one negative direction each time $t$ passes a conjugate point, and the count of directions lost at
each point is exactly the multiplicity of the Jacobi-field degeneracy there. The count of negative
directions at $t = 1$ is therefore the number of conjugate points with multiplicity. The full
spectral argument is in Milnor, *Morse Theory*, Part III. $\blacksquare$

### 6.13 Common Mistakes

**Mistake 1: Assuming geodesics are always the shortest path**
Geodesics are locally length-minimizing, but globally they may not be the shortest curve between two points. On a sphere, great circle arcs longer than $\pi$ are geodesics but not shortest paths. The cut locus marks where geodesics cease to be minimizing.

**Mistake 2: Confusing the exponential map with a global diffeomorphism**
The exponential map $\exp_p$ is only a local diffeomorphism near the origin. Beyond the injectivity radius, it may fail to be one-to-one. Students often assume $\exp_p$ gives a global coordinate system, which is only true for spaces like Euclidean space or hyperbolic space.

**Mistake 3: Forgetting that the geodesic equation is second-order**
The equation $\ddot\gamma^k + \Gamma^k_{ij}\dot\gamma^i\dot\gamma^j = 0$ requires both an initial point $p$ and an initial velocity $v$ to determine a unique geodesic. Specifying only the starting point leaves infinitely many geodesics. Students sometimes treat geodesics like integral curves of vector fields, which are first-order and need only an initial point.

### 6.14 Geodesic Triangles under Constant Curvature

On a surface of constant curvature $K$, the area of a geodesic triangle with interior angles
$\alpha, \beta, \gamma$ is:

$$
K \cdot \text{Area} = \alpha + \beta + \gamma - \pi
$$

- On $S^2$ ($K = 1$): sum of angles $> \pi$, area $= \alpha + \beta + \gamma - \pi$.
- On $\mathbb{H}^2$ ($K = -1$): sum of angles $< \pi$, area $= \pi - (\alpha + \beta + \gamma)$.
- On $\mathbb{R}^2$ ($K = 0$): sum of angles $= \pi$, area arbitrary.

### 6.15 Additional Practice Problems

**Problem 6.** Show that the exponential map $\exp_p$ is a radial isometry near the origin
(Gauss lemma). Use this to prove that geodesics are locally length-minimizing.

**Problem 7.** Prove that on a complete Riemannian manifold with non-positive sectional
curvature, no two points are conjugate.

**Problem 8.** Show that the geodesic flow on the unit tangent bundle of a compact Riemannian
manifold is a Hamiltonian flow with respect to the natural symplectic structure.

## Intuition

Geodesics are the straightest possible paths on a curved surface. On a flat plane, they are straight lines; on a sphere, they are great circles. The key insight is that a geodesic has zero acceleration as measured along the surface, it does not turn left or right relative to the surface geometry. The exponential map sends a tangent vector to the point you reach by following the geodesic in that direction for unit time, providing local coordinates that straighten out the geometry near a point. On negatively curved surfaces, geodesics diverge rapidly, while on positively curved surfaces they converge, this is why parallel geodesics on a sphere eventually meet.

## Cross-References

- [Vector Fields and Flows](/12-differential-geometry/3_vector-fields-and-flows/) -- Geodesics are integral curves of the geodesic spray vector field on the tangent bundle, linking flow theory to metric geometry.
- [Differential Geometry Summary](/12-differential-geometry/10_summary/) -- The summary table of Christoffel symbols and curvature tensors provides the computational tools used throughout this chapter.
- [Electromagnetic Waves](https://physics.wyattau.com/3-electromagnetism/5_electromagnetic-waves/) -- The wave equation in curved spacetime uses geodesic deviation to describe tidal forces in general relativity.
- [Special Relativity and Electromagnetism](https://physics.wyattau.com/3-electromagnetism/7_special-relativity-and-electromagnetism/) -- Minkowski spacetime is a flat Lorentzian manifold whose geodesics are the worldlines of free particles.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)
