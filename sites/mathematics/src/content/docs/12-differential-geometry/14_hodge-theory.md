---
date: 2026-10-17T00:00:00+01:00
title: Hodge Theory
tags:
  - University Maths
description: "Hodge theory: the Laplacian on differential forms, the Hodge decomposition, and why every de Rham cohomology class has a unique harmonic representative -- the analytic proof that Betti numbers are topological."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "14_hodge-theory", "url": "https://mathematics.wyattau.com/12-differential-geometry/14_hodge-theory"}]
}
</script>

De Rham cohomology is a quotient: closed forms modulo exact forms. Quotients are
algebraically convenient and analytically awkward, because a cohomology class
has no distinguished representative — any element of the class will do, and
nothing singles one out. Hodge theory supplies the missing selection principle:
on a Riemannian manifold, each class contains exactly one **harmonic** form, the
one solving a PDE.

That turns a topological invariant into a statement about analysis. The dimension
of $H^k_{\mathrm{dR}}(M)$ equals the dimension of the space of harmonic $k$-forms,
which is the eigenspace of a self-adjoint elliptic operator at eigenvalue zero —
and so everything proved about self-adjoint operators in
[the fundamental theorems](/11-functional-analysis/4_the-fundamental-theorems/)
applies to topology. This is the cleanest instance of a pattern that runs through
all of geometry: to study topology, build an elliptic operator and compute its
kernel.

## Intuition

Picture the space of all $k$-forms as a big vector space, chopped into the
subspace of exact forms $B^k$ sitting inside the closed forms $Z^k$. A cohomology
class is a coset — a whole affine copy of $B^k$. The Riemannian metric gives the
ambient space an orthogonal complement, and the Hodge theorem says: each coset
meets the complement of $B^k$ in exactly one point. That point is the harmonic
representative.

Why is the complement the right choice? Because the complement of the exact
forms is the kernel of the Laplacian, and kernels are computable. So the
selection principle is not arbitrary: it is the orthogonal projection, the one
choice that minimises the norm among all representatives of the class. The
harmonic representative of a cohomology class is its **least-squares solution**,
which is why the theory connects to the variational methods used everywhere else
in geometry.

## 1. The three operators

Let $M$ be a compact, orientable, Riemannian $n$-manifold, with metric $g$. The
metric induces:

- the **Hodge star** $*: \Omega^k(M) \to \Omega^{n-k}(M)$, defined by
  $\alpha \wedge *\beta = \langle \alpha, \beta\rangle\, dV$, satisfying
  $*^2 = (-1)^{k(n-k)}$ on $k$-forms;
- the **codifferential** $d^* = (-1)^{n(k+1)+1} * \, d \, *$ on $\Omega^k$;
- the **Hodge Laplacian**

$$
\Delta = dd^* + d^*d : \Omega^k(M) \to \Omega^k(M).
$$

**Proposition.** $\Delta$ is self-adjoint and non-negative:
$\langle \Delta\alpha, \alpha\rangle = \|d\alpha\|^2 + \|d^*\alpha\|^2 \geq 0$.

*Proof.* Both $d$ and $d^*$ are adjoints of one another by construction, and
$d^2 = (d^*)^2 = 0$. Then

$$
\langle \Delta\alpha, \alpha\rangle
= \langle dd^*\alpha, \alpha\rangle + \langle d^*d\alpha, \alpha\rangle
= \langle d^*\alpha, d^*\alpha\rangle + \langle d\alpha, d\alpha\rangle,
$$

using $d^2 = 0$ and $(d^*)^2 = 0$ in the cross terms: they are
$\langle d^*\alpha, d\alpha\rangle$ twice with opposite pairing, cancelling. The
right side is a sum of squared norms. $\blacksquare$

This is where self-adjointness earns its keep, and it is worth comparing with
[Theorem 1 of the spectral theory page](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/):
there, self-adjointness gave real spectrum; here it gives an orthogonal
decomposition of the form space, which is what the theorem below needs. The
estimate $\langle\Delta\alpha,\alpha\rangle = \|d\alpha\|^2 + \|d^*\alpha\|^2$
is the same shape as $\|(T-z)x\|^2 = \|(T-u)x\|^2 + v^2\|x\|^2$, and it plays the
same role: it turns an algebraic condition into a norm statement.

**Definition.** $\alpha$ is **harmonic** if $\Delta\alpha = 0$. The space of
harmonic $k$-forms is $\mathcal{H}^k(M) = \ker\Delta$.

**Corollary.** $\alpha$ is harmonic iff $d\alpha = 0$ and $d^*\alpha = 0$.

*Proof.* $\Delta\alpha = 0$ forces $\|d\alpha\|^2 + \|d^*\alpha\|^2 = 0$, and a
sum of squares vanishes termwise. The converse is immediate. $\blacksquare$

So a harmonic form is one that is simultaneously closed and co-closed — it leaks
in neither direction. On a compact manifold, harmonicity is two first-order
conditions rather than one second-order equation, which is why the theory is
computable.

## 2. The Hodge decomposition

**Theorem (Hodge decomposition).** For each $k$ there is an orthogonal direct
sum

$$
\Omega^k(M) = \Delta\Omega^k(M) \oplus \mathcal{H}^k(M)
= d\Omega^{k-1}(M) \oplus d^*\Omega^{k+1}(M) \oplus \mathcal{H}^k(M).
$$

*Proof sketch.* $\Delta$ is self-adjoint and elliptic. Self-adjointness gives
$(\operatorname{im}\Delta)^\perp = \ker\Delta = \mathcal{H}^k$ on a compact
manifold, and elliptic regularity — the analytic input this page uses rather
than proves — says $\operatorname{im}\Delta$ is closed and that elements of
$\ker\Delta$ are smooth. Hence the first decomposition. For the second,
$d\Omega^{k-1}$ and $d^*\Omega^{k+1}$ are orthogonal because
$\langle d\alpha, d^*\beta\rangle = \langle d^2\alpha, \beta\rangle = 0$, and
their sum is the orthogonal complement of $\mathcal{H}^k$ inside
$\Delta\Omega^k$. $\blacksquare$

The analytic input — elliptic regularity, which says the kernel of an elliptic
operator consists of smooth sections — is genuinely deep, and this page uses it
as a black box. Flagging that is part of stating what has been proved: the
algebra of the decomposition is elementary, and the regularity theorem is not.

## 3. The Hodge theorem

**Theorem (Hodge).** Every de Rham cohomology class contains exactly one
harmonic representative. Consequently

$$
\mathcal{H}^k(M) \;\cong\; H^k_{\mathrm{dR}}(M),
\qquad
\dim \mathcal{H}^k(M) = b_k(M).
$$

*Proof.* Take $[\omega] \in H^k_{\mathrm{dR}}$ with $\omega$ closed, and use the
decomposition to write $\omega = d\alpha + d^*\beta + h$ with $h$ harmonic. Since
$d\omega = 0$ and $d(d\alpha) = 0$:

$$
0 = d\omega = d d^*\beta,
$$

and pairing with $\beta$ gives
$0 = \langle d d^*\beta, \beta\rangle = \|d^*\beta\|^2$, so $d^*\beta = 0$ and the
$d^*\beta$ term vanishes. Hence $\omega = d\alpha + h$, so $[\omega] = [h]$ —
every class has a harmonic representative.

For uniqueness, suppose $h_1, h_2$ are harmonic with $[h_1] = [h_2]$. Then
$h_1 - h_2 = d\alpha$ is both harmonic and exact, so

$$
0 = \|h_1 - h_2\|^2 = \langle h_1 - h_2,\, d\alpha\rangle
= \langle d^*(h_1 - h_2), \alpha\rangle = 0 \cdot \|\alpha\|^2 \;\Rightarrow\; d^*(h_1-h_2) = 0,
$$

and $d(h_1 - h_2) = 0$ by harmonicity, so the norm is zero and $h_1 = h_2$. $\blacksquare$

The proof is short because the work is in the decomposition, and the
decomposition is short because the work is in elliptic regularity. That is the
honest shape of the subject: the statement is topological, the machinery is
PDE, and the algebra in between is three lines.

**Consequence: Betti numbers are analytic.** $b_k = \dim \ker\Delta$ on
$k$-forms, so the Betti numbers of a manifold are the multiplicities of the
zero eigenvalue of an elliptic operator. Since eigenvalue multiplicities cannot
change under continuous deformation of the metric, this gives the analytic proof
that the Betti numbers are topological — no triangulation required.

**Consequence: Poincaré duality, analytically.** The Hodge star maps harmonic
$k$-forms to harmonic $(n-k)$-forms, so $*: \mathcal{H}^k \to \mathcal{H}^{n-k}$
is an isomorphism and $b_k = b_{n-k}$. Poincaré duality, normally proved by
dual cell structures, here follows from $*^2 = 1$.

## 4. Examples

**The flat torus $T^n$.** Take $M = \mathbb{R}^n/\mathbb{Z}^n$ with the flat
metric. The $k$-forms $dx_{i_1}\wedge\dots\wedge dx_{i_k}$ have constant
coefficients, and $\Delta$ on constant-coefficient forms is zero. So
$\dim\mathcal{H}^k = \binom{n}{k}$ and every Betti number is binomial — computed
without solving a PDE, because on a flat torus every form with constant
coefficients is harmonic and there are no others. The general theorem says any
metric on $T^n$ gives the same answer, which is the content: the Laplacian
depends on the metric and $b_k$ does not.

**The circle.** $\mathcal{H}^0 = $ constants, $\mathcal{H}^1 = $ multiples of
$dx$. So $b_0 = b_1 = 1$, matching $S^1$'s two invariants from
[algebraic topology](/9-topology/9_introduction-to-algebraic-topology/): one
connected component, one hole.

**The sphere $S^2$.** $\mathcal{H}^0$ and $\mathcal{H}^2$ are one-dimensional
(volume form) and $\mathcal{H}^1 = 0$: there are no harmonic 1-forms, because
$S^2$ has no tunnels. The vanishing is the analytic shadow of simple
connectedness, and it is the same statement as
$H^1_{\mathrm{dR}}(S^2) = 0$ from the Mayer–Vietoris computation on
[the topology page](/9-topology/9_introduction-to-algebraic-topology/).

## 5. What Hodge theory does not do

It requires a metric, so it sees nothing metric-independent directly — the
harmonic representative *depends* on $g$, and only its cohomology class does not.
That is a feature, not a defect, but it means Hodge theory answers "is there a
canonical representative" at the cost of choosing a metric first.

It sees no torsion, for the same reason de Rham theory does not: everything is a
real vector space. $\mathbb{R}P^2$ remains the standing warning.

And on non-compact manifolds the theory changes character entirely: compactness
is what makes $\ker\Delta$ finite-dimensional, and without it the space of
harmonic forms can be infinite-dimensional and the theorem fails. $L^2$ Hodge
theory is the repair, and it is a genuinely different subject.

## Common Pitfalls

- **Reading $\Delta$ as the rough Laplacian.** The Hodge Laplacian is
  $dd^* + d^*d$, not the connection Laplacian $\nabla^*\nabla$; they differ by a
  curvature term (the Weitzenböck formula). On functions they agree, which is
  why the distinction is invisible in elementary Riemannian geometry and sudden
  here.
- **Assuming harmonicity is a second-order equation with a first-order
  solution.** It is two first-order conditions, $d\alpha = 0$ and
  $d^*\alpha = 0$, on a compact manifold — and on a non-compact one that
  equivalence fails without an integrability condition.
- **Applying the decomposition without compactness.** On a non-compact manifold
  $\operatorname{im}\Delta$ need not be closed, and the Hodge theorem fails.
  Compactness is used in every step after the definition.
- **Forgetting that the harmonic representative depends on the metric.** Only
  its class is canonical. Two metrics give two different harmonic forms for the
  same class, and comparing them is a question about the metrics, not the
  topology.
- **Expecting to compute $\mathcal{H}^k$ without solving a PDE.** The theorem
  says the dimension is topological; it does not make the forms explicit. On a
  generic metric the harmonic forms are as hard to write down as eigenfunctions
  are.

## Cross-References

- **[De Rham Cohomology](/12-differential-geometry/13_de-rham-cohomology/)** — the quotient that Hodge theory picks representatives for.
- **[Differential Forms](/12-differential-geometry/4_differential-forms/)** — the exterior derivative and the Hodge star.
- **[Riemannian Geometry](/12-differential-geometry/5_riemannian-geometry/)** — the metric inducing $*$ and $d^*$.
- **[The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/)** — self-adjointness and the orthogonal decomposition used in §2.
- **[Introduction to Algebraic Topology](/9-topology/9_introduction-to-algebraic-topology/)** — $b_k$, Poincaré duality, and the Mayer–Vietoris computation of $H^*(S^2)$ recovered analytically in §4.
- **[The Gauss–Bonnet Theorem](/12-differential-geometry/8_the-gauss-bonnet-theorem/)** — $\chi = \sum(-1)^k \dim\mathcal{H}^k$, the alternating sum of kernel dimensions.
- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/) — the same self-adjoint operator theory, with the harmonic oscillator as the model example.
