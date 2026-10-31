---
date: 2026-10-18T00:00:00+01:00
title: Elliptic Regularity
tags:
  - University Maths
description: "Elliptic regularity: weak solutions are smooth. Weyl's lemma with proof via mollifiers, interior regularity for Poisson's equation by difference quotients, the bootstrapping pipeline through Sobolev embedding, and the Hodge theorem's smooth representatives -- the black box of geometry, opened."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Differential Geometry", "url": "https://mathematics.wyattau.com/12-differential-geometry"}, {"name": "16_elliptic-regularity", "url": "https://mathematics.wyattau.com/12-differential-geometry/16_elliptic-regularity"}]
}
</script>

Elliptic regularity is the theorem that weak solutions are smooth. Stated
backwards from practice: a PDE is solved in a weak sense because that is what
the variational method gives — a function in a Sobolev space satisfying the
equation after integration by parts — and the theorem says this weak object is
automatically differentiable as many times as the equation's coefficients and
data allow. The [Hodge theorem](/12-differential-geometry/14_hodge-theory/)
used it as a black box; this page opens the box.

The theorem is also why the word *elliptic* is a classification. Ellipticity is
a condition on the equation's principal symbol — the coefficient matrix of the
highest-order terms being definite — and it is the condition that makes the
regularity true. The heat equation smooths in time but not backwards; the wave
equation propagates singularities; the Laplace equation smooths *everywhere*.
That ordering is not folklore — each is a theorem, and only the elliptic case is
proved here.

## Intuition

A weak solution of $\Delta u = f$ is a function satisfying
$\int u\,\Delta\varphi = \int f\varphi$ for every test function — no derivatives
of $u$ required. The theorem's content is that this integration-by-parts
identity, holding against *all* test functions, forces $u$ to have classical
derivatives.

The mechanism is mollification. Convolve $u$ with a smooth kernel: the result
$\rho_\delta * u$ is smooth, and because $\Delta$ commutes with convolution,

$$
\Delta(\rho_\delta * u) = \rho_\delta * \Delta u = \rho_\delta * f,
$$

where the middle equality is the weak equation read as an equality of
distributions. So the *mollified* function solves a smooth equation, and the
whole theorem is the bookkeeping that the mollified solutions converge back to
$u$ while their derivatives stay bounded — bounds inherited from the equation
rather than from $u$.

## 1. Weyl's lemma

**Theorem (Weyl's lemma).** Let $u \in L^1_{\mathrm{loc}}(\Omega)$ satisfy
$\int_\Omega u\,\Delta\varphi = 0$ for all $\varphi \in C_c^\infty(\Omega)$.
Then $u$ agrees almost everywhere with a smooth harmonic function.

*Proof.* Mollify: $u_\delta = \rho_\delta * u$ is smooth on
$\Omega_\delta = \{x \in \Omega : \operatorname{dist}(x, \partial\Omega) > \delta\}$.
The weak equation makes $\Delta u = 0$ as a distribution, and convolution with
the smooth kernel $\rho_\delta$ gives

$$
\Delta u_\delta = \rho_\delta * (\Delta u) = 0
\quad\text{on } \Omega_\delta,
$$

so each $u_\delta$ is a smooth harmonic function on $\Omega_\delta$.

*Harmonic functions are smooth, and satisfy the mean-value property.* For a
smooth harmonic $v$, Green's identity applied to $v$ and the constant $1$ on a
ball $B(x_0, r)$ gives

$$
0 = \int_{B} (v\Delta 1 - 1\,\Delta v) = \int_{\partial B}\left(v\,\frac{\partial 1}{\partial n}
- 1\,\frac{\partial v}{\partial n}\right)dS = -\int_{\partial B}\frac{\partial v}{\partial n}\,dS,
$$

so the normal derivative integrates to zero on every sphere; differentiating the
identity $\int_{\partial B(x_0,r)} v\,dS = v(x_0)\,|\partial B|$-style with
respect to $r$ — or applying Green's representation formula with the fundamental
solution $\Gamma$ — yields the **mean-value property**:

$$
v(x_0) = \frac{1}{|\partial B(x_0, r)|}\int_{\partial B(x_0, r)} v\,dS
\quad\text{for every ball } B(x_0, r) \subseteq \Omega.
$$

*The mean-value property implies smoothness, with bounds.* A function satisfying
the mean-value property is smooth: for multi-indices $\alpha$,

$$
\partial^\alpha v(x_0) = \frac{c_\alpha}{r^{n+|\alpha|}}\int_{B(x_0,r)}
v(y)\,\psi_\alpha(y - x_0)\,dy,
$$

with $\psi_\alpha$ bounded and $c_\alpha$ explicit from differentiating the
spherical integral — each derivative of $v$ is a bounded linear functional of
$v$ on a slightly larger ball, so $\sup_{B(x_0,r)} |\partial^\alpha v| \leq C_{\alpha}\, r^{-|\alpha|} \sup_{B(x_0, 2r)}|v|$.

Applying those bounds to the family $u_\delta$: on any compact
$K \subseteq \Omega$, choosing $r$ with $K + B(0,2r) \subseteq \Omega$ gives

$$
\sup_{K}|\partial^\alpha u_\delta| \leq C_{\alpha}\, r^{-n-|\alpha|}
\sup_{K'} |u_\delta| \leq C_{\alpha}\, r^{-n-|\alpha|}\,\|u\|_{L^1(K')}
$$

*uniformly in $\delta$*, the last bound by the Young inequality for the
convolution. So $(u_\delta)$ is a uniformly bounded, equicontinuous family with
uniformly bounded derivatives of every order on $K$; Arzelà–Ascoli extracts a
subsequence converging uniformly along with all derivatives, and the limit is
smooth on $K$. Covering $\Omega$ by an exhaustion of such $K$ and diagonalising
gives a smooth $v$ on all of $\Omega$ with $u_\delta \to v$ in
$L^1_{\mathrm{loc}}$ — and since also $u_\delta \to u$ in $L^1_{\mathrm{loc}}$
(mollifiers approximate), $u = v$ almost everywhere. $\blacksquare$

The proof is long because it is really three theorems: mollifiers commute with
$\Delta$, harmonic smooth functions satisfy the mean-value property, and the
mean-value property gives uniform derivative bounds. Each is elementary; their
composition is the theorem. Note where *locality* enters — every bound is on a
compact subset with room to spare, which is why the theorem is "interior"
regularity: nothing is claimed at the boundary.

## 2. Interior regularity for Poisson's equation

**Theorem.** Let $u \in L^1_{\mathrm{loc}}(\Omega)$ weakly solve
$\Delta u = f$ with $f \in C^\infty(\Omega)$. Then $u \in C^\infty(\Omega)$.

*Proof.* The mollified functions solve $\Delta u_\delta = \rho_\delta * f$
smoothly on $\Omega_\delta$. Split $u_\delta = v_\delta + w_\delta$ where
$v_\delta$ solves $\Delta v_\delta = \rho_\delta * f$ with smooth data — Newtonian
potential — and $w_\delta$ is harmonic. The Newtonian potential of smooth
compactly-supported data is smooth by differentiating under the integral (the
singularity of $\Gamma$ is integrable and its derivatives stay integrable away
from the diagonal, which the mollifier keeps off). The harmonic parts $w_\delta$
have the uniform derivative bounds of Weyl's lemma. So both halves have
uniformly convergent subsequences on compacts, the limits sum to $u$, and the
sum is smooth. $\blacksquare$

The difference-quotient method gives the *Sobolev* version, which is what the
variational pipeline consumes:

**Theorem (interior $H^2$ regularity).** If $u \in H_0^1(\Omega)$ weakly solves
$\Delta u = f$ with $f \in L^2(\Omega)$, then $u \in H^2_{\mathrm{loc}}(\Omega)$
and $\|u\|_{H^2(K)} \leq C(\|f\|_{L^2} + \|u\|_{H^1})$ for every compact
$K \subseteq \Omega$.

*Proof sketch.* Apply the difference quotient $D_k^h u(x) = \frac{u(x + he_k) - u(x)}{h}$
to the weak equation. The test function
$\varphi = -D_k^{-h}(D_k^h u\,\psi)$ for a cutoff $\psi$ supported in $\Omega$
is admissible, and after the discrete integration by parts
$\int D_k^{-h}a \cdot b = -\int a\, D_k^{h}b$:

$$
\int \psi\,|D_k^h \nabla u|^2 \leq \|f\|_{L^2}\,\|D_k^h\nabla u\|_{L^2}
+ C\|\nabla u\|_{L^2}\,\|D_k^h \nabla u\|_{L^2},
$$

using that difference quotients commute with $\Delta$ and that
$|D_k^h v(x)| \leq \|\nabla v\|_{L^\infty}$ bounds the cutoff's derivative
terms. Absorbing the common factor (small-$h$ control from the equation's
coercivity) gives uniform $H^1$ bounds on the difference quotients, and the
compactness argument of
[Rellich–Kondrachov](/11-functional-analysis/10_sobolev-spaces/) extracts a
limit in $H^1$ — which is the weak second derivative. Interior because the
cutoff $\psi$ vanishes at the boundary. $\blacksquare$

## 3. Bootstrapping: from weak to classical

The two theorems compose into the pipeline the
[Sobolev page](/11-functional-analysis/10_sobolev-spaces/) assembled:

$$
u \in H_0^1 \;\xrightarrow{\;H^2 \text{ interior}\;}\; H^2_{\mathrm{loc}}
\;\xrightarrow{\;\text{iterate}\;}\; H^m_{\mathrm{loc}}
\;\xrightarrow{\;\text{Sobolev embedding}\;}\; C^j \;\text{ for } m > n/2 + j.
$$

Each iteration gains two derivatives: $H^m \Rightarrow H^{m+2}$ locally, by the
difference-quotient argument applied to $\partial^\alpha u$ for $|\alpha| = m$.
The Sobolev embedding [page 3 of the functional-analysis
track](/11-functional-analysis/10_sobolev-spaces/) then converts the $H^m$
control into classical differentiability at the threshold $m > n/2 + j$ — the
threshold that is the whole bookkeeping of the subject.

For the [Hodge theorem](/12-differential-geometry/14_hodge-theory/), the same
argument applies to the form-Laplacian $dd^* + d^*d$ because it is elliptic:
the principal symbol is $\pm|\xi|^2$, definite and nonzero off $\xi = 0$. The
harmonic forms are smooth *because* the operator is elliptic, and the theorem's
"analytic input" is exactly this page. The same applies to the eigenfunctions
of the Dirichlet Laplacian on
[the spectral theory page](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/):
kernel elements of an elliptic operator are smooth, which is why "eigenfunction"
is meaningful as a classical object.

## 4. Why the other equations are different

The principal symbol determines everything. For a second-order operator
$\sum a_{ij}\partial_i\partial_j$, ellipticity means the coefficient matrix
$\{a_{ij}\}$ is definite; the symbol never vanishes for $\xi \neq 0$, and the
difference-quotient estimates close.

- **The heat equation** $\partial_t u = \Delta u$ is parabolic: smoothing
  *forward* in time, none backward. A weak solution with rough initial data
  becomes smooth for $t > 0$ — the forward smoothing is the same
  mollifier-and-bound technology — and a backward-in-time problem is ill-posed.
- **The wave equation** $\partial_t^2 u = \Delta u$ is hyperbolic:
  singularities *propagate* along characteristics and never smooth. A weak
  solution stays as rough as its initial data — the wire's pluck travels.
- **Elliptic** is the no-time case: the smoothing is unconditional and global,
  which is why boundary-value problems (the Dirichlet problem) and geometry
  live here.

The Ricci flow on [the geometrisation page](/16-graduate-geometry/1_ricci-flow-and-geometrisation/)
is weakly parabolic, which is exactly why its maximum principle works and why
Hamilton's theorem could prove anything — a degenerate-elliptic equation with
the smoothing surviving the degeneracy.

## 5. What elliptic regularity does not do

- **It is interior.** Boundary regularity needs the boundary to be regular
  ($C^{2}$ at least) and the boundary data compatible; a corner singularity
  stays.
- **It needs smooth coefficients and data.** With rough $f$, the solution is
  regular only as $f$ allows: $f \in L^2$ gives $H^2_{\mathrm{loc}}$ and no
  further. The machine "solve weakly, then regularise" cannot exceed the data.
- **It does not make all weak solutions unique.** Uniqueness is coercivity —
  Lax–Milgram — not regularity. Regularity is about the solution's quality after
  existence and uniqueness are established.

## Common Pitfalls

- **Quoting regularity at the boundary.** The interior theorems say nothing
  where $\operatorname{dist}(x, \partial\Omega) \to 0$; boundary regularity is a
  separate theorem with separate hypotheses.
- **Assuming all weak solutions are smooth.** Only *elliptic* equations have the
  theorem. The wave equation's weak solutions are exactly as rough as their
  data, and quoting elliptic regularity there is false.
- **Differentiating under the integral without the uniform bound.** The proof's
  Arzelà–Ascoli step is what licenses the limit's smoothness; without the
  uniform derivative bounds the mollified limit is only $L^1$.
- **Expecting harmonic functions to be analytic without using the equation.**
  Real analyticity of harmonic functions is a *sharper* theorem than smoothness
  and needs elliptic regularity with analytic coefficients — smoothness alone
  does not self-improve.

## Cross-References

- **[Sobolev Spaces](/11-functional-analysis/10_sobolev-spaces/)** — weak derivatives, the embedding threshold, and Rellich–Kondrachov's compactness used in §1.
- **[Hodge Theory](/12-differential-geometry/14_hodge-theory/)** — the black box this page opens: smooth harmonic representatives.
- **[De Rham Cohomology](/12-differential-geometry/13_de-rham-cohomology/)** — the cohomology whose classes get the smooth representatives.
- **[The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/)** — Lax–Milgram, which produces the weak solution regularity then promotes.
- **[Ricci Flow and Geometrisation](/16-graduate-geometry/1_ricci-flow-and-geometrisation/)** — the maximum principle, the parabolic sibling of the elliptic theory.
- **[Spectral Theory of Self-Adjoint Operators](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/)** — eigenfunctions of the Laplacian, smooth by this page.
