---
date: 2026-10-17T00:00:00+01:00
title: Sobolev Spaces
tags:
  - University Maths
description: "Sobolev spaces: weak derivatives, completeness, the Poincare inequality with proof, the Sobolev embedding theorem, Rellich-Kondrachov compactness, and why PDE theory is done in them -- with the regularity story that elliptic regularity completes."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "10_sobolev-spaces", "url": "https://mathematics.wyattau.com/11-functional-analysis/10_sobolev-spaces"}]
}
</script>

The idea of a Sobolev space is to differentiate weakly. A function $u \in L^2$
need not have a classical derivative, but there may be a $v \in L^2$ with

$$
\int u\,\varphi' = -\int v\,\varphi \quad \text{for all } \varphi \in C_c^\infty,
$$

and if such $v$ exists it is the **weak derivative** of $u$, written
$u' = v$. Integration by parts is the definition rather than a theorem. The
Sobolev space $W^{k,p}$ collects the functions whose weak derivatives up to order
$k$ are in $L^p$, and for $p = 2$ the space $H^k = W^{k,2}$ is a Hilbert space.

The reason PDE theory lives here is that PDEs are equations in derivatives, and
the natural objects on which derivatives behave well are these spaces. Weak
formulations turn differential equations into variational ones, the Lax–Milgram
theorem; [proved in the fundamental theorems
page](/11-functional-analysis/4_the-fundamental-theorems/); gives existence and
uniqueness, and elliptic regularity then promotes weak solutions to classical
ones. Sobolev spaces are the language in which that promotion is stated.

## Intuition

The weak derivative is the derivative that integration by parts can see. Consider
the function $u(x) = |x|$ on $(-1, 1)$: it has no derivative at $0$, but its
distributional derivative is the function $v = \operatorname{sign}(x)$, because
$\int_{-1}^{1} |x|\varphi'(x)\,dx = -\int_{-1}^{1}\operatorname{sign}(x)\varphi(x)\,dx$
for every test function; the kink integrates out. And $v$ is itself weakly
differentiable, with $v' = 2\delta_0$; the *Dirac delta*, not a function. So
$|x| \in H^1$ but $|x| \notin H^2$.

That example carries the whole subject: each derivative costs one order of
regularity, and the Sobolev scale is exactly the bookkeeping of how much
smoothness is left after differentiating. Whether a boundary value problem has a
classical solution becomes the question of whether enough orders of regularity
survive, and the embedding theorems are the tool that answers it.

## 1. Definitions and completeness

**Definition.** For $k \in \mathbb{N}$ and $1 \leq p \leq \infty$,

$$
W^{k,p}(\Omega) = \big\{u \in L^p(\Omega) : D^\alpha u \in L^p(\Omega)
\text{ for all } |\alpha| \leq k\big\},
\qquad
\|u\|_{W^{k,p}} = \Big(\sum_{|\alpha| \leq k} \|D^\alpha u\|_{L^p}^p\Big)^{1/p},
$$

where $D^\alpha u$ is the weak derivative and $\alpha$ ranges over multi-indices.
For $p = 2$ write $H^k$; the norm comes from the inner product
$\langle u, v\rangle_{H^k} = \sum_{|\alpha| \le k} \langle D^\alpha u, D^\alpha v\rangle$.

**Theorem (completeness).** $W^{k,p}(\Omega)$ is a Banach space, and $H^k(\Omega)$
is a Hilbert space.

*Proof.* The map $u \mapsto (D^\alpha u)_{|\alpha| \leq k}$ embeds $W^{k,p}$
isometrically into the product $(L^p)^{N}$, $N$ the number of multi-indices.
The product is Banach, so it suffices to show the image is closed. Let
$u_n \to u$ in $W^{k,p}$; then $D^\alpha u_n \to v_\alpha$ in $L^p$ for each
$\alpha$. For any test function $\varphi$, the definition of the weak derivative
and $L^p$ convergence give

$$
\int u\, D^\alpha\varphi = \lim_n \int u_n D^\alpha\varphi
= (-1)^{|\alpha|}\lim_n \int D^\alpha u_n\, \varphi
= (-1)^{|\alpha|} \int v_\alpha\, \varphi,
$$

so $v_\alpha$ is the weak derivative $D^\alpha u$, and $u \in W^{k,p}$ with
$D^\alpha u = v_\alpha$. Hence the image is closed. $\blacksquare$

The only analysis in the proof is that $L^p$ limits commute with integration
against a fixed test function, which is Hölder's inequality. Completeness is
otherwise pure functional analysis, and it is what licenses using the Banach and
Hilbert space theorems; the open mapping theorem, uniform boundedness,
Lax–Milgram; on spaces of functions.

**$C_c^\infty$ is dense.** In $W^{k,p}(\Omega)$ for $1 \leq p < \infty$, the
smooth compactly supported functions are dense (Meyers–Serrin). This is worth
stating because its failure at $p = \infty$ and its dependence on $\Omega$ at
the boundary are the two places the theory surprises people. It means
"$W^{k,p}$" is not a bigger, stranger space than smooth functions; it is their
completion, and every element is approximable.

## 2. The Poincaré inequality

**Theorem (Poincaré).** Let $\Omega \subset \mathbb{R}^n$ be bounded in some
direction, and $u \in W_0^{1,2}(\Omega)$; the closure of $C_c^\infty(\Omega)$
in $H^1$. Then

$$
\|u\|_{L^2} \leq C_\Omega\, \|\nabla u\|_{L^2}.
$$

*Proof for $\Omega = (0, L)$ in one dimension.* For $u \in C_c^\infty(0, L)$ and
$x \in (0,L)$,

$$
u(x) = \int_0^x u'(s)\,ds,
$$

since $u$ vanishes at the endpoints. Squaring and applying Cauchy–Schwarz,

$$
|u(x)|^2 \leq \Big(\int_0^x 1^2\,ds\Big)\Big(\int_0^x |u'(s)|^2 ds\Big)
\leq L\, \|u'\|_{L^2}^2.
$$

Integrating over $x \in (0,L)$: $\|u\|_{L^2}^2 \leq L^2\|u'\|_{L^2}^2$, so
$C_\Omega = L$ works. The case of general $u \in W_0^{1,2}$ follows by density.
$\blacksquare$

The proof is two lines, and it is worth noticing what the two hypotheses do.
Vanishing at the boundary is what made the fundamental theorem applicable; for
the constant function $u = 1$, which has $\|\nabla u\| = 0$, the inequality is
false, and constants are exactly the elements of $H^1$ removed by the
$W_0^{1,2}$ condition. And boundedness of $\Omega$ is what made $L$ finite;
Poincaré fails on unbounded domains for the same reason, and its repair there
requires a weight or a spectral gap.

Poincaré is the Poincaré inequality of
[the spectral theory of the Laplacian](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/):
applied to $-\Delta$ with Dirichlet conditions, it says the first eigenvalue
$\lambda_1 \geq C_\Omega^{-2} > 0$, which is why the Laplacian's spectrum is
discrete and why solutions of the heat equation decay.

## 3. The Sobolev embedding theorem

**Theorem (Sobolev embedding).** Let $\Omega \subset \mathbb{R}^n$ be bounded
with smooth boundary. Then

$$
W^{k,p}(\Omega) \hookrightarrow L^q(\Omega)
\quad\text{where}\quad
\frac{1}{q} = \frac{1}{p} - \frac{k}{n},
\qquad q < \infty,
$$

and if $\frac{1}{p} - \frac{k}{n} < 0$, then $W^{k,p} \hookrightarrow C^{0,\alpha}$
with $\alpha = k - n/p$.

*Proof for the sharpest case in one dimension, $W^{1,2}(0,L) \hookrightarrow C^0$.*
For $u \in C^\infty$ and $x, y \in (0,L)$,

$$
|u(x) - u(y)| = \Big|\int_y^x u'(s)\,ds\Big|
\leq \sqrt{|x - y|}\;\|u'\|_{L^2},
$$

by Cauchy–Schwarz. So $u$ is Hölder continuous with exponent $1/2$ and constant
$\|u'\|_{L^2}$. For the sup norm, fix any $x_0$:

$$
|u(x)| \leq |u(x_0)| + \sqrt{L}\,\|u'\|_{L^2},
$$

and averaging over $x_0$ gives $|u(x_0)| \leq L^{-1/2}\|u\|_{L^2}$ for some
choice, so

$$
\|u\|_\infty \leq L^{-1/2}\|u\|_{L^2} + \sqrt{L}\,\|u'\|_{L^2}
\leq C\,\|u\|_{H^1}.
$$

Density of $C^\infty$ in $H^1$ extends the inequality, and a uniform limit of
continuous functions is continuous, giving the embedding. $\blacksquare$

The two-dimensional statement $\frac{1}{q} = \frac{1}{2} - \frac{1}{2} = 0$ is
the borderline, and the theorem correctly refuses to say
$H^1(\mathbb{R}^2) \hookrightarrow L^\infty$: it embeds into every $L^q$ for
$q < \infty$ and *not* into $L^\infty$. The standard counterexample family is
$u_\epsilon(x) = \log\log(|x|^{-1})$ truncated near $0$, whose $H^1$ norm stays
bounded while its supremum tends to infinity. That borderline is exactly where
$\Phi^4_2$'s renormalisation lives, as in
[the stochastic PDE page](/14-graduate-stochastic-analysis/2_stochastic-pdes-and-regularity-structures/):
the critical dimension is the one where the embedding into $L^\infty$ fails.

## 4. Rellich–Kondrachov: where compactness comes from

**Theorem (Rellich–Kondrachov).** With $\Omega$ bounded and smooth,
$W^{1,2}(\Omega) \hookrightarrow\hookrightarrow L^2(\Omega)$: the embedding is
*compact*, meaning bounded sets in $H^1$ have subsequences converging in
$L^2$.

*Proof idea.* Boundedness in $H^1$ bounds the $L^2$ norms of both $u$ and
$\nabla u$. The gradient bound gives an equicontinuity-type estimate after
averaging: convolution with a mollifier $\rho_\delta$ satisfies

$$
\|u * \rho_\delta - u\|_{L^2} \leq \delta\,\|\nabla u\|_{L^2},
$$

uniformly for $u$ in a bounded set, while $\{u * \rho_\delta\}$ is bounded and
equi-uniformly-continuous in $L^\infty$ for fixed $\delta$. The Arzelà–Ascoli
theorem then gives a uniformly convergent subsequence of the mollified family,
and letting $\delta \to 0$ along a diagonal subsequence extracts an $L^2$-
convergent subsequence of the original. $\blacksquare$

This is the only source of compactness in the theory, and it is what makes the
Dirichlet Laplacian have a discrete spectrum: an operator with compact resolvent
has eigenvalues marching to infinity, and Rellich–Kondrachov is the compactness
of the resolvent. The heat kernel's decay, the convergence of spectral
approximations, and the existence of eigenfunction bases all trace back here.

## 5. The elliptic regularity story

The pipeline that solves a PDE is now complete:

1. **Weak solution.** Lax–Milgram gives $u \in H_0^1(\Omega)$ with
   $a(u, v) = \langle f, v\rangle$ for all $v$; existence, uniqueness,
   continuous dependence.
2. **Improved integrability.** Sobolev embedding turns $H^1$ control into
   $L^q$ control, so the solution is a function with integrable powers.
3. **Interior regularity.** Difference quotients, controlled uniformly using
   the equation, show $u \in H^2_{\mathrm{loc}}$ and by iteration
   $u \in H^m_{\mathrm{loc}}$ for every $m$ when $f$ is smooth.
4. **Classical solution.** Sobolev embedding with $m$ large enough makes
   $u$ continuous, then $C^1$, then $C^2$; at which point the weak equation
   holds pointwise and $u$ is a classical solution.

Each arrow is a theorem; none is optional. Step 3 is the **elliptic regularity**
that the [Hodge theory page](/12-differential-geometry/14_hodge-theory/) uses as
a black box to put smooth representatives on de Rham classes, and step 4's
threshold $m > n/2 + j$ for $C^j$ regularity is the Sobolev embedding theorem
again, with $n$ the dimension.

## Common Pitfalls

- **Confusing weak and classical derivatives.** A weak derivative is an
  equivalence class defined by integration by parts; it may fail to exist even
  where a pointwise derivative exists, and it may exist where no classical
  derivative does. $|x|$ is the standard example in both directions.
- **Applying Poincaré without the boundary condition.** Constants have zero
  gradient. On $H^1$ rather than $W_0^{1,2}$, add $\|u\|_{L^2}$ to the right
  side, or quotient out constants.
- **Reading the embedding theorem at the borderline.** When
  $\frac{1}{p} = \frac{k}{n}$ the embedding into $L^\infty$ fails; into every
  finite $q$ it holds. The failure is not a weakness of the method but the
  critical case, and it is where renormalisation appears.
- **Assuming $C_c^\infty$ is dense in every Sobolev space on every domain.** For
  $W^{k,p}$ with $p = \infty$ it is false, and for domains with bad boundaries
  the closure can be a strict subspace ($W_0^{1,p}$ rather than $W^{1,p}$),
  which is a boundary condition in disguise.
- **Expecting Sobolev functions to be continuous.** $H^1$ functions in one
  dimension are continuous; that is the embedding; but in two dimensions they
  need not be, and in $n$ dimensions a $W^{k,p}$ function is continuous only
  when $k > n/p$. The whole subject is the bookkeeping of that threshold.

## Cross-References

- **[The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/)**; Lax–Milgram, the source of weak solutions, and the PDE applications section.
- **[Normed Spaces and Banach Spaces](/11-functional-analysis/1_normed-spaces-and-banach-spaces/)**; completeness, which is Theorem 1 above in the abstract.
- **[Spectral Theory of Self-Adjoint Operators](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/)**; the Dirichlet Laplacian, whose discrete spectrum Poincaré initiates.
- **[Hodge Theory](/12-differential-geometry/14_hodge-theory/)**; elliptic regularity as the black box, and harmonic forms as the kernel of $\Delta$.
- **[Stochastic PDEs and Regularity Structures](/14-graduate-stochastic-analysis/2_stochastic-pdes-and-regularity-structures/)**; the critical dimension where the $H^1 \to L^\infty$ embedding fails.
- **[Applications of Differential Geometry](/12-differential-geometry/9_applications/)**; where Sobolev spaces enter geometric PDE.
