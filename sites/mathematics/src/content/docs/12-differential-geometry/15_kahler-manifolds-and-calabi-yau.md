---
date: 2026-10-17T00:00:00+01:00
title: Kähler Manifolds and Calabi–Yau
tags:
  - University Maths
description: "Complex structures, the Kähler condition and its three equivalent forms, the Kahler identities with proof, Hodge theory over C, Ricci curvature as a curvature of the canonical bundle, and Yau's theorem giving Ricci-flat Kahler metrics."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "15_kahler-manifolds-and-calabi-yau", "url": "https://mathematics.wyattau.com/12-differential-geometry/15_kahler-manifolds-and-calabi-yau"}]
}
</script>

A Kähler manifold is a complex manifold whose complex structure, Riemannian
metric and symplectic form are not three pieces of data but one, in three
guises. That compatibility is the Kähler condition, and it is the reason complex
geometry has a Hodge theory at all: on a Kähler manifold the Hodge Laplacian
splits into pieces that respect the complex structure, so the cohomology
computed in [Hodge theory](/12-differential-geometry/14_hodge-theory/) acquires
a bigrading and the Betti numbers refine into Hodge numbers.

The destination of the page is Yau's solution of the Calabi conjecture: a
Kähler manifold admits a Ricci-flat Kähler metric in each class
$c_1(M) = 0$, and such manifolds are **Calabi–Yau**. That theorem is what makes
Calabi–Yau manifolds the standard answer to "which compact manifolds carry
supersymmetry", since Ricci-flatness is the vacuum Einstein condition and
Kählerianity is what preserves the complex structure.

## Intuition

Complex projective space $\mathbb{CP}^n$ is the model. It has a complex
structure (holomorphic coordinates), a metric (the Fubini–Study metric), and a
symplectic form (the curvature form of the hyperplane bundle). The Kähler
condition says these agree: the metric's associated 2-form is closed, which is
the symplectic condition, and it equals the Hermitian form, which is the complex
condition.

The reason Kähler manifolds are ubiquitous is that *any* complex submanifold of
$\mathbb{CP}^n$ is Kähler, by restricting the Fubini–Study metric. So every
smooth projective variety is Kähler, and the theory applies to the whole of
algebraic geometry. That is why a condition that looks restrictive is in
practice the standard setting.

## 1. Complex structures and the three forms

**Definition.** A **complex structure** on a real $2n$-manifold $M$ is a bundle
endomorphism $J : TM \to TM$ with $J^2 = -\mathrm{id}$. The metric $g$ is
**Hermitian** if $g(Jv, Jw) = g(v,w)$, and then

$$
\omega(v, w) = g(Jv, w)
$$

is the associated 2-form, called the **Kähler form** when it is closed.

**Definition.** $(M, J, g, \omega)$ is **Kähler** if $\mathrm{d}\omega = 0$.

That is the whole definition, and it is deceptively thin: a single closedness
condition. Its content is in the equivalences below.

**Proposition (three forms of the Kähler condition).** The following are
equivalent:

1. $\mathrm{d}\omega = 0$ (the symplectic form is closed);
2. $\nabla J = 0$, where $\nabla$ is the Levi-Civita connection of $g$ (the
   complex structure is parallel);
3. around every point there are holomorphic coordinates in which the metric's
   coefficients agree to first order with the constant metric.

*Proof sketch.* (1) $\Leftrightarrow$ (2) is the identity
$2\,g((\nabla_X J)Y, Z) = \mathrm{d}\omega(JX, Y, Z) + \mathrm{d}\omega(X, JY, Z) - \mathrm{d}\omega(X, Y, JZ)$, verified by expanding both sides with
$\nabla g = 0$ and $J^2 = -1$: the symplectic form's three arguments can each be
rotated by $J$, and the closure of $\omega$ kills the symmetric part while
$\nabla J = 0$ kills it directly.

(2) $\Rightarrow$ (3): if $\nabla J = 0$ then at any point $p$ normal
coordinates can be chosen for $g$ that are also holomorphic, because the
complex structure is constant to first order at $p$; conversely holomorphic
normal coordinates give $\partial_k g_{i\bar\jmath}(p) = 0$ for all indices,
which is $\nabla J(p) = 0$. $\blacksquare$

The middle form is the one to remember: **$J$ is parallel**. A Kähler manifold
is one where the complex structure is not merely present but preserved by the
geometry, and everything special about Kähler manifolds follows from that
conservation law.

## 2. The Kähler identities

This is the technical heart of the subject, and the reason Hodge theory is
better on Kähler manifolds than on general Riemannian ones. Complexify the
forms and extend $J$; then $d$ splits into holomorphic and antiholomorphic
pieces

$$
d = \partial + \bar\partial, \qquad
\partial : \Omega^{p,q} \to \Omega^{p+1,q}, \quad
\bar\partial : \Omega^{p,q} \to \Omega^{p, q+1},
$$

where $\Omega^{p,q}$ is the space of forms with $p$ holomorphic and $q$
antiholomorphic indices. There are adjoints $\partial^*, \bar\partial^*$ and
Laplacians $\Delta_d, \Delta_\partial, \Delta_{\bar\partial}$.

**Theorem (Kähler identities).** On a Kähler manifold,

$$
[\Lambda, \partial] = i\,\bar\partial^*, \qquad
[\Lambda, \bar\partial] = -i\,\partial^*, \qquad
\Delta_d = 2\,\Delta_\partial = 2\,\Delta_{\bar\partial},
$$

where $\Lambda$ is the adjoint of wedging with the Kähler form $\omega \wedge -$.

*Proof idea.* The commutator identities follow from a representation-theoretic
computation: wedging with $\omega$, contraction $\Lambda$, and the degree
counting operator together generate a representation of the Lie algebra
$\mathfrak{sl}_2$ on each fibre, and the identities are the bracket relations of
that representation computed with $\mathrm{d}\omega = 0$; the closure of the
Kähler form is exactly what kills the error terms. The Laplacian identity then
follows by taking adjoints of the commutator identities and combining:
$\Delta_d = (\partial + \bar\partial)(\partial^* + \bar\partial^*) + (\partial^* + \bar\partial^*)(\partial + \bar\partial)$
expands into eight terms, and the
commutator identities pair four of them into $\Delta_\partial$ and four into
$\Delta_{\bar\partial}$, each coming out equal to $\Delta_d$. The full expansion
is a page of signs and is carried out in Huybrechts §3.1 or Griffiths–Harris
pp. 111–115; the structure of the argument; $\mathfrak{sl}_2$ representation
plus one closedness hypothesis; is the part to remember. $\blacksquare$

**Corollary (the Kähler package).** On a compact Kähler manifold:

$$
\mathcal{H}^{k}(M) = \bigoplus_{p+q=k} \mathcal{H}^{p,q}(M),
\qquad
\mathcal{H}^{p,q} \cong \overline{\mathcal{H}^{q,p}},
$$

so the Betti numbers refine into **Hodge numbers** $h^{p,q} = \dim\mathcal{H}^{p,q}$, and they satisfy $h^{p,q} = h^{q,p}$ and
$h^{p,q} = h^{n-p,n-q}$.

*Proof.* $\Delta_d = 2\Delta_{\bar\partial}$ says a form is $d$-harmonic iff it
is $\bar\partial$-harmonic, so the $d$-harmonic forms decompose according to the
$(p,q)$-bigrading, which the $\bar\partial$-Laplacian respects. Complex
conjugation exchanges $\partial$ and $\bar\partial$, giving the second
identity; the Hodge star gives the third, as in
[the real case](/12-differential-geometry/14_hodge-theory/). $\blacksquare$

The $h^{p,q} = h^{q,p}$ symmetry is why the Hodge diamond is drawn as a diamond,
and it is a genuine restriction: the Betti numbers are not arbitrary, since
$b_k = \sum_{p+q=k} h^{p,q}$ with the pairs forced equal.

## 3. Ricci curvature as curvature of the canonical bundle

The bridge to Calabi–Yau is the Ricci form. On a Kähler manifold, in
holomorphic coordinates,

$$
\rho = i\,\partial\bar\partial \log\det(g_{i\bar\jmath}),
$$

is a closed $(1,1)$-form representing $2\pi c_1(M)$, the first Chern class of
the canonical bundle $K_M = \Lambda^{n,0}T^*M$. Its relation to Ricci
curvature is $\rho(X, Y) = \operatorname{Ric}(JX, Y)$.

**Theorem (Yau's resolution of the Calabi conjecture, 1976).** Let $M$ be a
compact Kähler manifold and $\omega$ a Kähler form. Then for any
$(1,1)$-class $\alpha$ representing $2\pi c_1(M)$, there is a unique Kähler
form $\omega' = \omega + i\partial\bar\partial\varphi$ in the same class whose
Ricci form represents $\alpha$.

*Proof sketch.* The equation reduces to a complex Monge–Ampère equation for the
potential $\varphi$:

$$
\det\big(g_{i\bar\jmath} + \partial_i\partial_{\bar\jmath}\varphi\big)
= e^{F}\,\det\big(g_{i\bar\jmath}\big),
\qquad
\sup_M \varphi \text{ normalised},
$$

with $F$ determined by $\alpha$. Existence is a fully nonlinear PDE theorem and
is not proved here; the continuity method gives a priori estimates in $C^0$
and $C^2$ from the maximum principle and the comparison of volumes, and the
$C^{2,\alpha}$ and smooth estimates close the loop. What makes the equation
tractable is precisely the Kähler condition: the determinant on the left is the
Jacobian of a map on forms in a fixed cohomology class, so the equation is a
prescribed-volume-form problem, and Yau's a priori estimates are uniform in the
continuity parameter. Uniqueness follows from the maximum principle applied to
the difference of two potentials. $\blacksquare$

The theorem is a black-box PDE result plus Kähler bookkeeping, and the page says
so. What the bookkeeping contributes is real: without the Kähler condition the
equation has no cohomological obstruction to solve, and $c_1(M)$ is exactly
what says whether a Ricci-flat metric is possible at all.

**Definition.** A **Calabi–Yau manifold** is a compact Kähler manifold with
trivial canonical bundle; by Yau's theorem it admits a unique Ricci-flat Kähler
metric in each Kähler class.

## 4. Examples

- **$\mathbb{CP}^n$.** Kähler with the Fubini–Study metric, but
  $c_1(\mathbb{CP}^n) = (n+1)[H] \neq 0$, so never Calabi–Yau for $n \geq 1$.
  Positive Ricci curvature, consistent with it being Fano.
- **Complex tori** $\mathbb{C}^n/\Lambda$. Kähler with the flat metric;
  $c_1 = 0$ and the flat metric is Ricci-flat. Calabi–Yau in the differential-
  geometric sense, though the holonomy is trivial rather than $SU(n)$, so
  algebraic geometers often reserve the name for the simply connected case.
- **Quintic threefold in $\mathbb{CP}^4$.** By adjunction
  $K_X = K_{\mathbb{CP}^4} \otimes \mathcal{O}(5)|_X = \mathcal{O}(5-5)|_X$ is
  trivial, so $c_1 = 0$: the quintic is Calabi–Yau, and it is the standard
  example in string theory. Yau's theorem produces the Ricci-flat metric, which
  is never known explicitly; the theorem proves existence, and in applications
  the metric is approximated numerically.

## 5. Why string theory cares

Supersymmetric compactification wants the extra dimensions to carry a geometry
preserving some supersymmetry, which forces the holonomy to be contained in
$SU(n)$; and on a Kähler manifold, holonomy contained in $SU(n)$ is equivalent
to Ricci-flatness. So the string-theory requirement is exactly Yau's equation,
and the moduli of Ricci-flat metrics (Hodge-theoretic, by the Bogomolov–Tian–
Todorov theorem) is what gives the effective four-dimensional theory its
particle spectrum. The Hodge numbers $h^{1,1}$ and $h^{2,1}$ count
Kähler and complex-structure moduli, and mirror symmetry; the reflection
$h^{p,q}(M) = h^{n-p,q}(M^\vee)$; exchanges them.

## Common Pitfalls

- **Assuming Kähler means "complex and symplectic".** A complex manifold with a
  symplectic form compatible with $J$ need not be Kähler: the Kähler form must
  be *closed*, and that is a genuine condition. The Hopf surface is complex and
  admits a compatible symplectic form but is not Kähler; its $b_1 = 1$, while
  Kähler manifolds have odd Betti numbers even.
- **Quoting the Kähler identities on a Hermitian manifold.** They fail without
  $\mathrm{d}\omega = 0$, and the failure is not a small correction: on a general
  Hermitian manifold $\Delta_d$ does not respect the $(p,q)$-bigrading at all,
  so the Hodge numbers do not exist.
- **Reading $c_1 = 0$ as sufficient for Ricci-flatness without Yau.** It is
  sufficient *given* Yau's theorem, and the theorem needs the Kähler class to be
  fixed and the manifold compact. The existence of a Ricci-flat metric is a deep
  PDE result, not an algebraic identity.
- **Confusing Calabi–Yau as differential geometer and algebraic geometer use
  it.** The former means compact Ricci-flat Kähler; the latter usually adds
  simply connected and holonomy exactly $SU(n)$, which excludes tori. State
  which convention is in use.
- **Expecting explicit Ricci-flat metrics.** Yau's theorem is an existence
  theorem. On a generic Calabi–Yau threefold no Ricci-flat metric is known in
  closed form, and numerical approximation is an active field.

## Cross-References

- **[Hodge Theory](/12-differential-geometry/14_hodge-theory/)**; the real-case Hodge decomposition, here refined by the bigrading.
- **[De Rham Cohomology](/12-differential-geometry/13_de-rham-cohomology/)**; the cohomology being refined into Hodge numbers.
- **[Curvature](/12-differential-geometry/7_curvature/)**; Ricci curvature and the sectional curvature picture.
- **[Riemannian Geometry](/12-differential-geometry/5_riemannian-geometry/)**; the Levi-Civita connection whose parallelism of $J$ defines the condition.
- **[The Gauss–Bonnet Theorem](/12-differential-geometry/8_the-gauss-bonnet-theorem/)**; $\chi = \sum_{p,q}(-1)^{p+q}h^{p,q}$, the Hodge diamond's alternating sum.
- **[Hodge Theory Applications in the Summary](/12-differential-geometry/10_summary/)**; where Calabi–Yau moduli enter the track's summary table.
- [Beyond the Standard Model](https://physics.wyattau.com/7-particle-physics-and-cosmology/9_beyond-the-standard-model/); string compactification, the applied reason for the subject.
