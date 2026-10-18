---

date: 2026-07-23T21:57:32+01:00
title: "Differential Forms"
tags:
  - Mathematics
  - University
description: "The space of -covectors at is , the space of alternating -linear maps Comprehensive educational content coverage with definitions and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "4_differential Forms", "url": "https://mathematics.wyattau.com/12-differential-geometry/4_differential-forms"}]
}
</script>

### 4.1 Alternating Tensors

The space of $k$-covectors at $p$ is $\Lambda^k(T_p^* M)$, the space of alternating $k$-linear maps
$T_p M \times \cdots \times T_p M \to \mathbb{R}$.

**Definition.** A **differential $k$-form** on $M$ is a smooth section of $\Lambda^k T^* M$, i.e., a
smooth map $\omega : M \to \Lambda^k T^* M$ assigning to each $p$ an alternating $k$-linear
functional $\omega_p$ on $T_p M$.

**Examples.**

- A $0$-form is a smooth function $f \in C^\infty(M)$.
- A $1$-form is a section of $T^* M$ (a covector field). In local coordinates,
  $\omega = \sum \omega_i\, dx^i$.
- A $2$-form on $M$ has the local expression $\omega = \sum_{i < j} \omega_{ij}\, dx^i \wedge dx^j$.

### 4.2 Pullback of Differential Forms

**Definition.** If $F : M \to N$ is a smooth map, the **pullback** $F^* : \Omega^k(N) \to \Omega^k(M)$ is defined by:

$$
(F^*\omega)_p(v_1, \ldots, v_k) = \omega_{F(p)}(dF_p(v_1), \ldots, dF_p(v_k))
$$

for $v_i \in T_p M$.

**Proposition 4.1.** The pullback satisfies:

1. $F^*(\alpha \wedge \beta) = F^*\alpha \wedge F^*\beta$
2. $F^*(d\omega) = d(F^*\omega)$
3. $(G \circ F)^* = F^* \circ G^*$

### 4.3 Interior Product and Lie Derivative

**Definition.** The **interior product** (contraction) of a vector field $X$ with a $k$-form $\omega$ is the $(k-1)$-form $\iota_X \omega$ defined by:

$$
(\iota_X \omega)(v_1, \ldots, v_{k-1}) = \omega(X, v_1, \ldots, v_{k-1})
$$

**Proposition 4.2 (Cartan's Magic Formula).** The Lie derivative $\mathcal{L}_X$ of a differential form satisfies:

$$
\mathcal{L}_X \omega = d(\iota_X \omega) + \iota_X(d\omega)
$$

### 4.4 Exterior Derivative

The **exterior derivative** is the operator $d : \Omega^k(M) \to \Omega^{k+1}(M)$ defined by:

- For $f \in \Omega^0(M)$: $df = \sum_{i=1}^n \frac{\partial f}{\partial x^i}\, dx^i$ (the total
  differential).
- For general $k$-forms: defined by requiring $d(df) = 0$ and the product rule
  $d(\alpha \wedge \beta) = d\alpha \wedge \beta + (-1)^{\deg(\alpha)} \alpha \wedge d\beta$.

**Proposition 4.3.** $d \circ d = 0$ ($d^2 = 0$).

**Theorem 4.4 (Poincare Lemma).** If $M$ is a star-shaped open subset of $\mathbb{R}^n$ (or more
generally, a contractible manifold), then every closed $k$-form is exact: if $d\omega = 0$, then
$\omega = d\eta$ for some $(k - 1)$-form $\eta$.

### 4.5 Wedge Product

The **wedge product** $\wedge : \Omega^k(M) \times \Omega^\ell(M) \to \Omega^{k+\ell}(M)$ is the
bilinear, associative, anti-commutative operation:

$$
\alpha \wedge \beta = (-1)^{k\ell}\, \beta \wedge \alpha
$$

### 4.6 Stokes" Theorem

**Theorem 4.5 (Stokes' Theorem).** Let $M$ be an oriented $n$-dimensional manifold with boundary
$\partial M$ (with the induced orientation). If $\omega$ is a compactly supported $(n-1)$-form on
$M$, then:

$$
\int_{\partial M} \omega = \int_M d\omega
$$

**Special Cases:**

- **Fundamental Theorem of Calculus** ($n = 1$): $\int_a^b f'(x)\, dx = f(b) - f(a)$.
- **Green's Theorem** ($n = 2$):
  $\oint_{\partial D} P\, dx + Q\, dy = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dx\, dy$.
- **Classical Stokes' Theorem** ($n = 3$):
  $\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$.
- **Divergence Theorem** ($n = 3$):
  $\oint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\nabla \cdot \mathbf{F})\, dV$.

## Proofs

Three proofs. The first is the identity the whole subject stands on — $d^2 = 0$ —
and it deserves the computation rather than the phrase "one line to verify": the
line hides *why* it is true, which is that mixed partial derivatives are
symmetric while the wedge product is antisymmetric, and a symmetric object
contracted with an antisymmetric one vanishes. The second is naturality of $d$.
The third is Stokes' theorem, reduced to the fundamental theorem of calculus on
a cube.

**Proposition 4.3 ($d^2 = 0$), with the computation.** For any $k$-form
$\omega$, $d(d\omega) = 0$.

*Proof.* By linearity it suffices to check a monomial
$\omega = f\,dx^{i_1} \wedge \cdots \wedge dx^{i_k}$. By the definition of $d$,

$$
d\omega = df \wedge dx^{i_1} \wedge \cdots \wedge dx^{i_k},
\qquad
df = \sum_{j=1}^n \frac{\partial f}{\partial x^j}\, dx^j.
$$

Applying $d$ again, with the product rule on each term
$\frac{\partial f}{\partial x^j}\,dx^j \wedge dx^{i_1} \wedge \cdots \wedge dx^{i_k}$:

$$
d^2\omega = \sum_{j=1}^{n}\sum_{m=1}^{n}
\frac{\partial^2 f}{\partial x^m \partial x^j}\,
dx^m \wedge dx^j \wedge dx^{i_1} \wedge \cdots \wedge dx^{i_k}.
$$

Now pair the terms $m = j$ and $m \neq j$. When $m = j$ the wedge
$dx^j \wedge dx^j = 0$ vanishes outright. When $m \neq j$, swap the names of the
summation indices $m \leftrightarrow j$ in the double sum: the second-derivative
coefficient is *unchanged* — Schwarz's theorem, $\partial^2 f/\partial x^m \partial x^j = \partial^2 f/\partial x^j \partial x^m$ — while the wedge factor
picks up one transposition, hence a factor $-1$:

$$
dx^m \wedge dx^j \wedge (\cdots) = -\,dx^j \wedge dx^m \wedge (\cdots),
$$

so the sum equals minus itself and must be zero. $\blacksquare$

The computation says exactly where the identity comes from: $d^2 = 0$ holds
*because* $d$ builds second derivatives and the wedge product is antisymmetric.
In the other order — symmetric coefficients, antisymmetric basis — every term
cancels its transposed partner. Any putative "boundary of a boundary" argument
must reduce to this cancellation, and any function $d'$ with symmetric second
derivatives and an antisymmetric wedge would satisfy it equally, which is why
the definition of $d$ is pinned down by requiring $d^2 = 0$, normalisation, and
the product rule together.

**Proposition (naturality).** For any smooth $f : M \to N$ and any form
$\omega$ on $N$: $d(f^*\omega) = f^*(d\omega)$.

*Proof.* Both sides are linear in $\omega$, so reduce to a monomial
$\omega = g\,dy^{i_1} \wedge \cdots \wedge dy^{i_k}$ with $g$ a function on $N$.
Then $f^*\omega = (g \circ f)\,d(f^*y^{i_1}) \wedge \cdots$, and applying $d$
with the product rule:

$$
d(f^*\omega) = d(g\circ f) \wedge f^*dy^{i_1} \wedge \cdots + (g\circ f)\sum_r
d^2(f^*y^{i_r}) \wedge \cdots
$$

The $d^2$ terms vanish by Proposition 4.3. And
$d(g \circ f) = f^*(dg)$ by the chain rule, so

$$
d(f^*\omega) = f^*(dg) \wedge f^*dy^{i_1} \wedge \cdots = f^*(dg \wedge dy^{i_1}
\wedge \cdots) = f^*(d\omega). \qquad\blacksquare
$$

Naturality is what makes cohomology functorial — the proof on
[the de Rham page](/12-differential-geometry/13_de-rham-cohomology/) uses exactly
this — and it is why the pullback is the *right* map between form spaces: it
commutes with the operator the cohomology is built from.

**Theorem 4.5 (Stokes).** For an oriented $n$-manifold $M$ with boundary and a
compactly supported $(n-1)$-form $\omega$:
$\int_M d\omega = \int_{\partial M}\omega$, with $\partial M$ carrying the
induced (boundary-first) orientation.

*Proof.* Choose an oriented atlas and a subordinate partition of unity
$\{\psi_i\}$ with each $\psi_i$ supported in a chart; both sides of the identity
are linear in $\omega$, so it suffices to prove the case
$\omega = \psi_i\,\omega_0$ for one chart, i.e. to work on $\mathbb{R}^n$ or on
the half-space $\mathbb{H}^n = \{x^n \geq 0\}$ — the two model cases.

*The $\mathbb{R}^n$ case, no boundary.* By linearity and the support, reduce to
a monomial missing one differential. If $\omega$ contains all $n$ of the
$dx^i$, then $d\omega$ is proportional to $dx^1\wedge\cdots\wedge dx^n$ times
*derivatives of the compactly supported coefficient*, whose integral over
$\mathbb{R}^n$ vanishes by Fubini and the fundamental theorem of calculus
applied one variable at a time — the integral of a pure derivative in $x^i$
over the whole line is zero. So both sides are zero and agree. If $\omega$ is
missing $dx^i$, write
$\omega = a(x)\,dx^1 \wedge \cdots \wedge \widehat{dx^i} \wedge \cdots \wedge dx^n$; then

$$
d\omega = (-1)^{i-1}\,\frac{\partial a}{\partial x^i}\,
dx^1 \wedge \cdots \wedge dx^n,
$$

the sign $(-1)^{i-1}$ counting how many transpositions move $dx^i$ to the front.
Integrating $x^i$ first and applying the fundamental theorem of calculus in
that variable:

$$
\int_{\mathbb{R}^n} d\omega
= (-1)^{i-1}\int \left[a\right]_{x^i = -\infty}^{x^i = +\infty}
dx^1 \wedge \cdots \wedge \widehat{dx^i} \wedge \cdots = 0 = \int_{\partial\mathbb{R}^n}\omega,
$$

since $\partial\mathbb{R}^n = \emptyset$.

*The half-space case.* $\mathbb{H}^n = \{x^n \geq 0\}$ has boundary the
hyperplane $x^n = 0$. If the monomial $\omega$ is missing $dx^n$ — the boundary
direction — write
$\omega = a\,dx^1\wedge\cdots\wedge dx^{n-1}$; then
$d\omega = (-1)^{n-1}\frac{\partial a}{\partial x^n}dx^1 \wedge \cdots \wedge dx^n$, and Fubini + the fundamental theorem in $x^n$ give

$$
\int_{\mathbb{H}^n} d\omega
= (-1)^{n-1}\int_{\partial\mathbb{H}^n} a\big|_{x^n=0}\,
dx^1\wedge\cdots\wedge dx^{n-1}
= -\int_{\partial\mathbb{H}^n}\omega,
$$

while $\int_{\mathbb{H}^n}\omega$-monomials containing $dx^n$ integrate to zero
by the $\mathbb{R}^n$ case. The boundary orientation of $\mathbb{H}^n$ is
*decreasing* $x^n$ — outward normal first — which supplies exactly the factor
$-1$: $\int_{\partial\mathbb{H}^n}\omega = -\int_{x^n=0}\omega$ in the
coordinates as written. So $\int_{\mathbb{H}^n}d\omega = \int_{\partial\mathbb{H}^n}\omega$, and summing over the partition of unity
gives the theorem on general $M$. $\blacksquare$

The sign $(-1)^{n-1}$ is where every treatment hides a small lie: the boundary
orientation is "outward normal *first*", and getting that convention backwards
flips the sign of every Stokes formula in the subject. The reduction to cubes is
what lets the proof be elementary — the general theorem follows by the partition
of unity, which is local by construction.

## 4.7 Integration of Differential Forms

Integration of an $n$-form over an $n$-dimensional oriented manifold is defined by pulling back to $\mathbb{R}^n$ and integrating in coordinates. If $\omega = f\,dx^1 \wedge \cdots \wedge dx^n$ on a coordinate chart $U$ with parametrisation $\phi : U \to \mathbb{R}^n$:

$$
\int_U \omega = \int_{\phi(U)} f(x^1, \ldots, x^n)\, dx^1 \cdots dx^n
$$

### 4.8 Worked Example: Integrating a 2-Form on the Sphere

**Problem.** Compute $\int_{S^2} \omega$ where $\omega = x\,dy \wedge dz + y\,dz \wedge dx + z\,dx \wedge dy$ on the unit sphere $S^2 \subset \mathbb{R}^3$.

<details>
<summary>Solution</summary>

Parametrise $S^2$ by spherical coordinates: $x = \sin\theta\cos\phi$, $y = \sin\theta\sin\phi$, $z = \cos\theta$, with $\theta \in [0, \pi]$, $\phi \in [0, 2\pi)$.

Compute $dy \wedge dz$, $dz \wedge dx$, $dx \wedge dy$ in terms of $d\theta \wedge d\phi$:

$$
dy \wedge dz = (\sin\theta\cos\phi\,d\theta + \cos\theta\cos\phi\,d\phi) \wedge (-\sin\theta\,d\theta) = \sin^2\theta\cos\phi\,d\theta \wedge d\phi
$$

$$
dz \wedge dx = (-\sin\theta\,d\theta) \wedge (\cos\theta\cos\phi\,d\theta - \sin\theta\sin\phi\,d\phi) = \sin^2\theta\sin\phi\,d\theta \wedge d\phi
$$

$$
dx \wedge dy = (\cos\theta\cos\phi\,d\theta - \sin\theta\sin\phi\,d\phi) \wedge (\cos\theta\sin\phi\,d\theta + \sin\theta\cos\phi\,d\phi) = \sin\theta\cos\theta\,d\theta \wedge d\phi
$$

Substituting and simplifying:

$$
\omega = (\sin^3\theta\cos^2\phi + \sin^3\theta\sin^2\phi + \sin\theta\cos^2\theta)\,d\theta \wedge d\phi = \sin\theta\,d\theta \wedge d\phi
$$

$$
\int_{S^2} \omega = \int_0^{2\pi} \int_0^\pi \sin\theta\,d\theta\,d\phi = 4\pi
$$

$\blacksquare$

</details>

### 4.9 Orientation and Integration

An **orientation** on an $n$-dimensional manifold is a nowhere-vanishing $n$-form. A manifold is **orientable** if such a form exists. The Möbius strip is the classic example of a non-orientable manifold: any attempt to define a global $n$-form results in a sign change along the closed loop.

Integration of an $n$-form over an oriented manifold is independent of the choice of atlas (as long as the charts are orientation-preserving). The integral changes sign if the orientation is reversed.

### 4.10 Vector Calculus and Differential Forms

## Common Mistakes

**Mistake 1: Forgetting the sign rule in the wedge product**
The wedge product is anti-commutative: $\alpha \wedge \beta = (-1)^{k\ell} \beta \wedge \alpha$ for a $k$-form and an $\ell$-form. Students often write $\alpha \wedge \beta = \beta \wedge \alpha$ or forget the sign entirely. For 1-forms, $dx \wedge dy = -dy \wedge dx$, so $dx \wedge dx = 0$.

**Mistake 2: Applying the exterior derivative incorrectly to products**
The product rule for the exterior derivative is $d(\alpha \wedge \beta) = d\alpha \wedge \beta + (-1)^{\deg(\alpha)} \alpha \wedge d\beta$. The sign factor $(-1)^{\deg(\alpha)}$ is frequently omitted. Forgetting it leads to incorrect computations of $d$ of higher-degree forms.

**Mistake 3: Assuming $d^2 = 0$ means every closed form is exact on any manifold**
The Poincare lemma guarantees that closed forms are exact only on contractible (or star-shaped) domains. On manifolds with nontrivial topology like $S^1$ or $S^2$, there exist closed forms that are not exact. For example, the angular form $d\theta$ on $S^1$ is closed but not exact.

## Intuition

Differential forms are the natural objects to integrate on manifolds. A 0-form is a function, a 1-form is something you integrate along a curve (like work done by a force), a 2-form is something you integrate over a surface (like flux), and a 3-form is something you integrate over a volume. The exterior derivative $d$ increases the degree by one and encodes differentiation: $df$ is the gradient, $d$ of a 1-form is the curl, and $d$ of a 2-form is the divergence. The fundamental identity $d^2 = 0$ unifies the vector calculus identities $\nabla \times \nabla f = 0$ and $\nabla \cdot (\nabla \times \mathbf{F}) = 0$. Stokes' theorem generalises the fundamental theorem of calculus to manifolds.

### 4.10 Vector Calculus and Differential Forms

Differential forms unify the classical vector calculus operators in $\mathbb{R}^3$ via the identifications:

- $0$-forms $\leftrightarrow$ scalar functions
- $1$-forms $\leftrightarrow$ vector fields (via $F_1 dx + F_2 dy + F_3 dz \leftrightarrow \mathbf{F}$)
- $2$-forms $\leftrightarrow$ vector fields (via $F_1 dy\wedge dz + F_2 dz\wedge dx + F_3 dx\wedge dy \leftrightarrow \mathbf{F}$)
- $3$-forms $\leftrightarrow$ scalar functions (via $f\, dx\wedge dy\wedge dz \leftrightarrow f$)

Under these identifications:

- $df \leftrightarrow \nabla f$ (gradient)
- $d\omega \leftrightarrow \nabla \times \mathbf{F}$ (curl) for a $1$-form $\omega$
- $d\omega \leftrightarrow \nabla \cdot \mathbf{F}$ (divergence) for a $2$-form $\omega$

The identity $d^2 = 0$ becomes $\nabla \times (\nabla f) = 0$ and $\nabla \cdot (\nabla \times \mathbf{F}) = 0$.

## Cross-References

- **[Smooth Manifolds](/12-differential-geometry/1_smooth-manifolds/)**: Differential forms are defined on smooth manifolds and require the smooth structure for their construction.
- **[Riemannian Geometry](/12-differential-geometry/5_riemannian-geometry/)**: The Hodge star operator on differential forms uses the Riemannian metric to relate $k$-forms to $(n-k)$-forms.
- **[Curvature](/12-differential-geometry/7_curvature/)**: The curvature tensor can be expressed using differential forms and the exterior derivative.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)

