---
date: 2026-10-17T00:00:00+01:00
title: De Rham Cohomology
tags:
  - University Maths
description: "De Rham cohomology: closed forms modulo exact forms, the statement that d^2 = 0, the Poincare lemma with proof, the top-dimensional result, and what de Rham's theorem says about when the algebra detects the topology."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "13_de-rham-cohomology", "url": "https://mathematics.wyattau.com/12-differential-geometry/13_de-rham-cohomology"}]
}
</script>

The exterior derivative $d$ from
[differential forms](/12-differential-geometry/4_differential-forms/) satisfies
$d^2 = 0$. That single identity, which takes one line to verify, is the reason a
branch of topology exists: any operator that squares to zero lets you form the
quotient of the things it kills by the things that come from it, and the result
is an invariant. For $d$ on differential forms the quotient is the **de Rham
cohomology** of the manifold, and de Rham's theorem says this algebraic object,
built from calculus, is the same as the singular cohomology built from
combinatorics.

The subject is the exact structural mirror of the measure theory in
[the algebraic topology page](/9-topology/9_introduction-to-algebraic-topology/):
there, chains and a boundary operator with $\partial^2 = 0$; here, forms and an
exterior derivative with $d^2 = 0$. The duality between them is why integration
of forms is possible at all; Stokes' theorem is the statement that
$\int_M d\omega$ depends only on the boundary of $M$, which is the statement
that $d$ and $\partial$ are adjoint.

## Intuition

A form $\omega$ with $d\omega = 0$ is **closed**: nothing leaks. A form
$\omega = d\eta$ is **exact**: it is the derivative of something, and so by
Stokes its integral over any closed region is zero.

Every exact form is closed, because $d^2 = 0$. The interesting question is the
converse: is every closed form exact? Locally yes; the Poincaré lemma below.
Globally, sometimes no, and *when it fails, the manifold has a hole*. On
$\mathbb{R}^2 \setminus \{0\}$, the form
$\omega = \frac{-y\,dx + x\,dy}{x^2+y^2}$ is closed but not exact, and the
obstruction is the puncture: integrating $\omega$ around a circle enclosing the
origin gives $2\pi$, while Stokes would force $0$ if $\omega$ were $d\eta$. The
integral sees the hole.

That is the entire subject in one example. Cohomology is the bookkeeping of
which closed forms fail to be exact, and it is a topological invariant because
the failure is caused by the shape of the space, not by the calculus.

## 1. The definition

**Definition.** Let $M$ be a smooth manifold. The space of closed $k$-forms is
$Z^k(M) = \ker(d : \Omega^k(M) \to \Omega^{k+1}(M))$; the space of exact
$k$-forms is $B^k(M) = \operatorname{im}(d : \Omega^{k-1}(M) \to \Omega^k(M))$
with $B^0 = 0$. The **$k$-th de Rham cohomology group** is

$$
H^k_{\mathrm{dR}}(M) = Z^k(M)\, /\, B^k(M).
$$

**Proposition.** $H^k_{\mathrm{dR}}(M)$ is a vector space over $\mathbb{R}$, and
it is a diffeomorphism invariant: if $f : M \to N$ is a diffeomorphism then
$f^* : H^k_{\mathrm{dR}}(N) \to H^k_{\mathrm{dR}}(M)$ is an isomorphism.

*Proof.* $\Omega^k(M)$ is a vector space and $d$ is linear, so kernels, images
and quotients are vector spaces. For invariance: $d(f^*\omega) = f^*(d\omega)$
by naturality of $d$, so $f^*$ carries closed to closed and exact to exact -
$f^*(d\eta) = d(f^*\eta)$; and therefore descends to the quotient. With
$g = f^{-1}$, $g^* \circ f^* = (f \circ g)^* = \mathrm{id}$, so $f^*$ is an
isomorphism. $\blacksquare$

Naturality of $d$ is doing all the work, and it is worth noticing: the invariance
does not need $f$ to be a diffeomorphism, only smooth, so every smooth map
induces a pullback on cohomology; which is what makes cohomology *functorial*
rather than merely invariant.

**Degree zero.** $H^0_{\mathrm{dR}}(M)$ is the space of smooth functions with
$df = 0$, i.e. locally constant functions. It is $\mathbb{R}^c$ where $c$ is the
number of connected components; the zeroth invariant, again matching
$H_0$ on the topology page.

## 2. The Poincaré lemma

**Theorem (Poincaré lemma).** On $\mathbb{R}^n$, every closed form of positive
degree is exact. Equivalently $H^k_{\mathrm{dR}}(\mathbb{R}^n) = 0$ for
$k \geq 1$, and $H^0 = \mathbb{R}$.

*Proof.* Define the **radial contraction** operator $K$ on forms by

$$
K\omega(x) = \int_0^1 t^{k-1}\, \iota_x\big(\omega(tx)\big)\, dt
\quad\text{for } \omega \in \Omega^k,
$$

where $\iota_x$ is contraction with the radial vector field $x$. A direct
computation with Cartan's magic formula $\mathcal{L}_x = d\iota_x + \iota_x d$
gives the homotopy identity

$$
dK + Kd = \mathrm{id} - j_0^*,
$$

where $j_0^*$ pulls a form back along the inclusion of the origin; zero on
positive-degree forms, evaluation at $0$ on functions. (The verification is
mechanical: apply both sides to a $k$-vector at a point and compare terms, using
the Leibniz rule for $\iota_x$ and the fundamental theorem of calculus on the
$t$-integral.)

Now let $\omega$ be closed with $k \geq 1$. Applying the identity,

$$
\omega = d(K\omega) + K(d\omega) = d(K\omega) + 0,
$$

so $\omega = d(K\omega)$ is exact, with the primitive given explicitly by
$K\omega$. $\blacksquare$

The proof produces the primitive, not merely its existence, which is why the
radial contraction is worth writing out. And the identity $dK + Kd = \mathrm{id} - j_0^*$ is the general shape of every cohomology argument: a chain homotopy
between the identity and something degenerate, giving equality in cohomology
where the two differ at chain level.

**Where it fails.** The lemma needs a *star-shaped* domain, so that the radial
contraction is defined. On an annulus there is no contraction to a point, and
the closed-but-not-exact form above is the obstruction. Cohomology measures
exactly the failure of the Poincaré lemma.

## 3. The standard example, computed

**Proposition.** On $M = \mathbb{R}^2 \setminus \{0\}$, the form

$$
\omega = \frac{-y\,dx + x\,dy}{x^2 + y^2}
$$

is closed but not exact. Hence $H^1_{\mathrm{dR}}(M) \neq 0$.

*Proof.* **Closed.** Writing $r^2 = x^2+y^2$, differentiate and collect:

$$
d\omega = \frac{\partial}{\partial x}\Big(\tfrac{-y}{r^2}\Big) dx\wedge dx
+ \frac{\partial}{\partial y}\Big(\tfrac{x}{r^2}\Big) dy \wedge dy
+ \left[\frac{\partial}{\partial y}\Big(\tfrac{-y}{r^2}\Big) - \frac{\partial}{\partial x}\Big(\tfrac{x}{r^2}\Big)\right] dx \wedge dy.
$$

The middle two terms vanish because $dx \wedge dx = dy \wedge dy = 0$, and the
bracket is

$$
\frac{-(r^2) + 2y^2}{r^4} - \frac{r^2 - 2x^2}{r^4}
= \frac{-r^2 + 2y^2 - r^2 + 2x^2}{r^4}
= \frac{-2r^2 + 2r^2}{r^4} = 0.
$$

**Not exact.** Parametrise the unit circle by $\gamma(t) = (\cos t, \sin t)$:

$$
\int_\gamma \omega = \int_0^{2\pi}
\frac{-\sin t(-\sin t) + \cos t\cos t}{1}\,dt
= \int_0^{2\pi} dt = 2\pi.
$$

If $\omega = d\eta$ then by Stokes
$\int_\gamma \omega = \int_\gamma d\eta = \int_{\partial D} d\eta = 0$, where $D$
is the unit disc; but $\gamma = \partial D$, and the integral is $2\pi \neq 0$.
Contradiction. $\blacksquare$

Note what the computation does *not* do: it does not compute $H^1$ exactly, only
show it is nonzero. Doing better requires either the full de Rham theorem or a
Mayer–Vietoris argument, and the answer is $H^1_{\mathrm{dR}}(M) = \mathbb{R}$,
generated by the class of $\omega$.

**The angle subtlety.** The form $\omega$ is $d\theta$ *locally*, where $\theta$
is the polar angle; but $\theta$ is not a globally defined smooth function on
$M$, which is exactly why $\omega$ can be closed without being exact. The
obstruction to writing down the primitive globally is the topology.

## 4. The top dimension, and orientation

**Theorem.** If $M$ is a connected, orientable, compact $n$-manifold, then
$H^n_{\mathrm{dR}}(M) \cong \mathbb{R}$.

*Proof sketch.* A volume form exists exactly when $M$ is orientable, and two
volume forms with the same total integral differ by the derivative of an
$(n-1)$-form; this is the statement that the "total integral" map
$\Omega^n(M) \to \mathbb{R}$, $\omega \mapsto \int_M \omega$, has kernel exactly
the exact forms, which follows from the fact that on a connected manifold any
two points can be joined and the integral is unchanged by moving the support of
the primitive along the path. Stokes says $\int_M d\eta = 0$ for a closed $M$,
so $B^n \subseteq \ker$; the content is the converse. $\blacksquare$

For non-orientable connected $M$, $H^n = 0$: there is no volume form to
integrate, and the top class vanishes. So orientability is a *cohomological*
property, which is why it can be detected algebraically.

The Euler characteristic link from
[Gauss–Bonnet](/12-differential-geometry/8_the-gauss-bonnet-theorem.md/) comes
from the alternating sum of the dimensions of these spaces:

$$
\chi(M) = \sum_{k=0}^{n} (-1)^k \dim H^k_{\mathrm{dR}}(M),
$$

which is de Rham's theorem plus the definition of Betti numbers, and it is why
$\chi$ can be computed either by triangulating or by solving PDE.

## 5. What de Rham's theorem says, and what it does not

**Theorem (de Rham, 1931).** The natural map from de Rham cohomology to
singular cohomology with real coefficients is an isomorphism:

$$
H^k_{\mathrm{dR}}(M) \;\cong\; H^k_{\mathrm{sing}}(M; \mathbb{R}).
$$

*What it does.* It says calculus sees topology. The closed form
$(-y\,dx + x\,dy)/r^2$ is a *smooth object*, defined with partial derivatives,
and it detects a puncture. Every invariant of singular cohomology; Betti
numbers, cup products, Poincaré duality; is available in the language of forms,
where it can be computed by integration and PDE.

*What it does not.* It says nothing over $\mathbb{Z}$: torsion in singular
cohomology is invisible to de Rham theory, since $H^k_{\mathrm{dR}}$ is a real
vector space and has none. The standard example is
$\mathbb{R}P^2$, whose $H^1_{\mathrm{sing}}(\cdot; \mathbb{Z}) = \mathbb{Z}/2$
collapses to $0$ over $\mathbb{R}$. So de Rham theory sees the free part and is
blind to torsion; and a question whose answer involves torsion cannot be asked
in the language of differential forms.

## Common Pitfalls

- **Concluding "closed hence exact" from the Poincaré lemma.** The lemma is
  local, and on star-shaped domains. Applying it to
  $\mathbb{R}^2\setminus\{0\}$ is the canonical error, and the angle form is the
  canonical counterexample.
- **Verifying $d\omega = 0$ sloppily.** Two of the four terms of $d\omega$ for a
  1-form in two variables vanish because $dx\wedge dx = 0$; forgetting the signs
  in the remaining pair gives the wrong conclusion. The computation in §3 keeps
  all four terms visible.
- **Citing Stokes where Stokes is not licensed.** In §3 the contradiction uses
  Stokes on the *punctured* disc, which is not compact; the correct statement
  applies to the unit disc, with the circle as boundary, and needs $\eta$ to be
  defined on all of $D$. Since $M$ excludes the origin, $\eta$ would be, and the
  argument is valid; but writing Stokes on $M \setminus \{0\}$ directly would be
  wrong.
- **Confusing $H^0$ with functions.** $H^0$ is locally constant functions, not
  all smooth functions. On a connected manifold it is $\mathbb{R}$, on a
  disconnected one $\mathbb{R}^c$.
- **Expecting de Rham classes to detect torsion.** They cannot, by
  construction: real vector spaces have no torsion. $\mathbb{R}P^2$ is the
  standard warning.
- **Treating the de Rham theorem as "de Rham cohomology is singular
  cohomology" without the coefficient group.** The isomorphism is with
  $\mathbb{R}$ coefficients only.

## Cross-References

- **[Differential Forms](/12-differential-geometry/4_differential-forms/)**; the exterior derivative and Stokes' theorem, both used from the first line.
- **[Smooth Manifolds](/12-differential-geometry/1_smooth-manifolds/)**; the definition of the underlying object and of pullback.
- **[The Gauss–Bonnet Theorem](/12-differential-geometry/8_the-gauss-bonnet-theorem/)**; $\chi$ as the alternating sum of Betti numbers.
- **[Introduction to Algebraic Topology](/9-topology/9_introduction-to-algebraic-topology/)**; the chain-level mirror: $\partial^2 = 0$ and singular homology, of which de Rham theory is the dual. Its §9.8 proves the Mayer–Vietoris sequence and computes $H^*(S^2)$ and $H^*(\Sigma_2)$ with it, which is the computation this page's §3 shows is needed before $H^1$ can be pinned down.
- **[Hodge Theory](/12-differential-geometry/14_hodge-theory/)**; every de Rham class has a unique harmonic representative; the dimension of the harmonic forms is the Betti number.
- **[The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/)**; the self-adjoint operator theory that the Hodge Laplacian rests on.
- **[Applications of Differential Geometry](/12-differential-geometry/9_applications/)**; Maxwell's equations in the language of $d$, where $dF = 0$ and $d{*F} = J$ are the closed-form conditions.
