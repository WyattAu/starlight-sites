---
date: 2026-10-12T00:00:00.000Z
title: "Stochastic PDEs: Multiplicative Noise and Regularity Structures"
description: "Stochastic partial differential equations: the stochastic heat equation, why the classical parabolic theory fails once the solution enters a function space, the Kolmogorov and Martingale methods, and the modern machinery that replaces them -- paracontrolled calculus and regularity structures. Research tier, building on Itô integration, measure theory and functional analysis, and reaching the KPZ equation and the directed landscape."
tags:
  - Mathematics
  - University
  - Stochastic Analysis
  - Partial Differential Equations
categories:
  - Mathematics
---

## Stochastic PDEs: Multiplicative Noise and Regularity Structures

**Tier: R (Research).** Builds on [Itô
Integration](/14-graduate-stochastic-analysis/1_ito-integration-and-formula/),
[Measure Theory](/10-measure-theory/2_measures/), [Functional
Analysis](/11-functional-analysis/1_normed-spaces-and-banach-spaces/) and real
analysis.

## Recall prompts

Attempt these from memory *before* reading.

- What is the stochastic heat equation? Write it down.
- What does it mean for a PDE to have a solution *as a random variable*?
- Why does the deterministic parabolic theory not transfer to the stochastic case?
- State the Wick (Wiener–Itô) product. What does $dW\,dW$ equal, and how does
  that differ from $dW\,dt$?
- What is the KPZ equation, and why is it harder than the stochastic heat
  equation?

Check your answers against the text. Prompt 4 is the one the whole subject
turns on: a rule that is wrong in ordinary calculus is exactly right here.

## Motivation: a PDE whose answer is random

Ordinary PDEs are deterministic. Given a forcing term you get one solution.
Replace the forcing with Brownian motion and the question becomes strange: the
"solution" is now a random field, and asking for it means deciding what kind of
object it is, in which function space it lives, and what it means for that
object to solve the equation.

The canonical example is the **stochastic heat equation** (in physics, the
parabolic Anderson model):

$$
\partial_t u = \tfrac{1}{2}\,\partial_x^2 u + \xi\, u,
$$

where $\xi$ is space-time white noise and $u$ is the unknown. The
multiplicative term is what makes it hard: the coefficient of the highest
derivative is not a fixed constant but a random function, so the operator's
symbol fluctuates and the usual energy estimates have nothing to hold on to.

**The naive reaction is wrong.** Someone who has just learned Itô's formula
tries the deterministic route: integrate by parts, estimate the energy, hope
for the best. The estimate fails, because the constant in the estimate is
$\|\xi\|_\infty$, and space-time white noise is in no $L^p$ space at all. This
is not a technical annoyance. It means the deterministic proof has no valid
input, and a genuinely different theory is required.

## The mechanism: how noise squares

**In words.** Ordinary calculus says $dx\,dx = 0$; infinitesimals shrink
faster than they accumulate. Itô calculus says otherwise for Brownian motion:
$dt\,dW \approx dt^{3/2}$ and $dW\,dW = dt$. Squaring noise is not
infinitesimal at all; it produces a first-order term.

**As equations.** The Itô table has four entries, of which two are non-zero:

<div class="table-wrap">

| | $dW$ | $dt$ |
| --- | --- | --- |
| $dW$ | $dt$ | $0$ |
| $dt$ | $0$ | $0$ |

</div>

So for a smooth enough $F$, the second-order term in the Itô formula is

$$
\frac{1}{2}\,\partial_i\partial_j F \,\frac{dW_i\,dW_j}{2} = \frac{1}{2}\,\partial_i\partial_j F\,dt,
$$

which is what makes the equation self-consistent: the second derivative term
from the PDE cancels the correction from the product rule.

**As a picture.** Deterministic heat flow spreads a bump smoothly and
predictably. The same equation with multiplicative noise has a random
amplitude at every point, and because the product rule leaks, the evolution
remembers every fluctuation it has ever experienced. That memory is the whole
subject.

**Worked example (U).** Solve $\mathrm{d}X_t = \sigma X_t\,\mathrm{d}W_t$ by
the Itô formula on $F(x) = \log x$:

$$
\mathrm{d}\log X_t = \frac{1}{X_t}\sigma X_t\,\mathrm{d}W_t
 - \frac{1}{2X_t^2}\sigma^2 X_t^2\,\mathrm{d}t
 = \sigma\,\mathrm{d}W_t - \tfrac{\sigma^2}{2}\,\mathrm{d}t,
$$

so $X_t = X_0 \exp(\sigma W_t - \sigma^2 t/2)$. The drift term $-\sigma^2/2$
is entirely an artefact of the product rule. Removing it would give
$\mathbb{E}[X_t] = X_0 \exp(\sigma^2 t / 2)$; exponential growth; which is
the wrong answer and a standard trap.

## What the deterministic theory actually fails at

The standard deterministic heat equation has a smooth solution for smooth
initial data, and this is proved by energy estimates:

$$
\frac{1}{2}\frac{\mathrm{d}}{\mathrm{d}t}\lVert u \rVert^2_{L^2}
= -\tfrac12 \lVert \partial_x u \rVert^2_{L^2}.
$$

Run the same computation on the stochastic equation and the drift term becomes
$2\xi u \partial_t u$, whose size is bounded by $\lVert \xi\rVert_\infty \lVert u\rVert^2$. **That is the exact point of failure**: white noise is a
distribution, not a function, so $\lVert\xi\rVert_\infty$ does not exist. Saying
it fails "because Gaussian variables exceed every threshold infinitely often"
would be wrong; a Gaussian-valued *function* has perfectly finite $L^p$ norms.
The reason is regularity: $\xi$ has parabolic Hölder regularity
$-\tfrac{3}{2} - \epsilon$ in $1+1$ dimensions, so it is not a function at all and
no pointwise norm of it is defined.

So the failure is structural, not a matter of tighter estimates. Anything
built on $\sup|\xi|$; smoothing, boundary regularity, the standard parabolic
smoothing story; is unavailable, and a different class of methods is needed.

## Three ways in, and why two of them stop

**Kolmogorov's method (A).** Estimate moment bounds

$$
\mathbb{E}\left[\sup_{t \le T} \lVert u(t) \rVert^2_{L^p}\right] \le C
\quad\text{when}\quad \frac{2}{p} + \frac{1}{2} < 1,
$$

that is $p > 4$. This produces a continuous $L^p$-valued solution and is the
classical approach. It works, but it stops exactly where it should: the
solution is a *random element of a coarse Banach space*, not a function. The
noise is integrated, not resolved.

**The Martingale method (A).** Solve the backward problem with an $L^1$ kernel,
bound the maximal inequality, and sum. Yields solutions in $L^\Omega$ spaces
that can be far rougher than $L^p$. Better suited to low regularity, and it is
what makes KPZ-type solutions exist at all.

**Neither gives what physics asks for.** Physicists want pointwise behaviour:
what does the solution do at a *fixed* point as a function of time? Both
methods hand back a random element of a space that says nothing about
pointwise values. Closing that gap needs the subject's central invention.

## Regularity structures and paracontrolled calculus

**The idea (A/R).** Do not try to solve the equation directly. Instead, solve
it *formally* to infinite order, integrating both the nonlinearity and the
noise by whatever Itô calculus offers, and use the cancellations that emerge to
prove that the resulting formal series actually converges. The infinite series
is the solution; convergence is the theorem.

The three ideas that make it work:

- **Local subcriticality.** Noise of regularity $\alpha$ and nonlinearity of
  homogeneity $\beta$ combine into $k\alpha + \beta$. Requiring this $< \beta$
  at every order is the subcriticality condition; it is what makes the
  renormalisation constants finite and the series convergent.
- **Renormalisation.** Where subcriticality fails, a counterterm must be
  subtracted; and in the subcritical case these counterterms are universal,
  depending only on the noise law.
- **Paracontrolled calculus (A/R).** The parallel method: model the solution
  as a sum of objects each controlled with respect to a different part of the
  problem (linear part, noise, resonant part), so that products of unknowns
  become products of *knowns* after subtracting the resonant terms.

**Why this is hard to teach and worth learning.** Every step above is a choice
about which object to regard as "known", and each choice is a bookkeeping
decision that has to be redone from scratch for a new equation. The theory is
less a set of theorems than a way of organising the bookkeeping; which is why
it took until 2011 to formalise, and why it now underpins so much of the field.

## Proofs

One computation, and it is the one the whole page is about: the pointwise variance
of the stochastic convolution, which is finite in one spatial dimension and
infinite in two. The dimension where it diverges is exactly the dimension where
renormalisation becomes necessary, so this single integral locates the critical
dimension and proves that it is critical.

**Theorem.** Let $Z$ solve $\partial_t Z = \partial_x^2 Z + \xi$ with $Z(0) = 0$,
where $\xi$ is space-time white noise. Then

$$
\mathbb{E}\big[Z(t,x)^2\big] =
\begin{cases}
\sqrt{t / 2\pi} & d = 1, \\[4pt]
+\infty & d = 2.
\end{cases}
$$

*Proof.* The solution is the stochastic convolution with the heat kernel,
$Z(t,x) = \int_0^t\!\!\int G(s, y)\,\xi(\mathrm{d}s\,\mathrm{d}y)$, and by the
Itô isometry in space-time form,

$$
\mathbb{E}\big[Z(t,x)^2\big] = \int_0^t\!\!\int G(s,y)^2\,\mathrm{d}y\,\mathrm{d}s.
$$

Everything from here is the heat kernel. In $d$ dimensions
$G(s,y) = (4\pi s)^{-d/2}\,e^{-|y|^2/4s}$, so

$$
\int_{\mathbb{R}^d} G(s,y)^2\,\mathrm{d}y
= \frac{1}{(4\pi s)^{d}} \int_{\mathbb{R}^d} e^{-|y|^2/2s}\,\mathrm{d}y
= \frac{(2\pi s)^{d/2}}{(4\pi s)^{d}}
= \frac{1}{(8\pi s)^{d/2}}.
$$

The remaining integral over $s$ is
$\int_0^t (8\pi s)^{-d/2}\,\mathrm{d}s$, which converges at the origin iff
$d/2 < 1$, i.e. iff $d = 1$. So:

$$
d = 1:\quad \int_0^t \frac{\mathrm{d}s}{\sqrt{8\pi s}}
= \frac{1}{\sqrt{8\pi}} \cdot 2\sqrt{t} = \sqrt{\frac{t}{2\pi}},
\qquad
d = 2:\quad \int_0^t \frac{\mathrm{d}s}{8\pi s} = +\infty.
$$

$\blacksquare$

The logarithmic divergence in $d = 2$ is not a pathology of a bad estimate; the
integral genuinely diverges, so $Z(t,x)$ is not a random variable with finite
second moment in two dimensions; it is a distribution, of negative Hölder
regularity, and no pointwise product with itself is defined.

**What this buys the page's central claim.** For $\Phi^4_2$,
$\partial_t u = \partial_x^2 u - u^3 + \xi$, write $u = Z + v$ with $Z$ the linear
solution above. Then

$$
u^3 = v^3 + 3v^2 Z + 3 v Z^2 + Z^3,
$$

and the terms $Z^2$ and $Z^3$ involve the pointwise square and cube of an object
that is not a function; which is what the integral above forbids. The
renormalised equation subtracts $3 C_\delta\, u_\delta$ where
$C_\delta = \mathbb{E}[Z_\delta^2] \to \infty$ is the smeared-out version of the
divergent integral: mollify $\xi$ at scale $\delta$ and $C_\delta$ is finite but
grows without bound as $\delta \to 0$. In $d=1$ the same computation gives
$C_\delta$ converging, which is why $\Phi^4_1$ needed no renormalisation and why
the stochastic heat equation is a genuine function there.

So the theorem above is the reason the section on renormalisation exists: the
critical dimension is exactly where this integral stops converging, and that is
read off from the exponent of $s$ rather than from any deep regularity theory.
The general statement; that subcriticality is a condition on regularities
$\alpha, \beta$ combining as $k\alpha + \beta$; is the same computation carried
out term by term for every product appearing in the nonlinearity, with the heat
kernel scaling doing all the work.

## Counterexamples

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| The deterministic heat equation has a smooth solution for smooth data | no, once noise is multiplicative | white noise is in no $L^p$, so every estimate on $\sup\lVert\xi\rVert$ is void |
| Stochastic PDE solutions are smooth in time | no | the stochastic heat equation's solution is Hölder continuous in time with exponent $< \tfrac{1}{4}$, and that exponent is sharp |
| The Wick product solves all the renormalisation problems | no | it is canonical in the subcritical Ginzburg–Landau case; for KPZ-type equations the correct renormalisation is not the Wick product, and getting it wrong changes the answer |
| Stochastic integration is the same as ordinary integration in the limit of small steps | no | Itô's correction is $-\sigma^2 t/2$; dropping it gives exponential growth instead of geometric Brownian motion |
| Solutions of SPDEs are functions pointwise | not from the classical methods | Kolmogorov and Martingale methods give random elements of coarse spaces; pointwise behaviour needs regularity structures |
| More smoothing happens with more noise | no | noise destroys smoothing, it does not add it |
| Uniqueness holds automatically | no | uniqueness is a theorem requiring subcriticality, and it fails outside it |

</div>

The second row is the sharpest statement in the table: the Hölder exponent
$<\tfrac{1}{4}$ in time is not a weakness of a proof but the true regularity
of the solution, and reaching it was a genuine discovery rather than a
technical estimate.

## Where the research frontier is

- **The KPZ equation** and the directed landscape. The KPZ equation is the
  universal scaling limit of interacting particle systems, and it sits exactly
  in the supercritical regime where the Wick product is the wrong
  renormalisation. Recent work identifies the whole landscape of solutions,
  not just the fixed-point one, and connects it to the Yang–Lee Hamiltonian.
- **Three-dimensional quantum Yang–Mills via stochastic quantisation.** The
  programme is to construct a four-dimensional superfield gauge theory as a
  stochastic PDE on the three-dimensional Minkowski space and prove the
  continuum limit exists. Rigorous partial results exist; the full continuum
  limit is open.
- **Dynamic $\Phi^4_3$**, where the construction is complete but the
  universality classes and critical exponents are still being established.
- **Renormalisation group as a semi-group.** The question of when
  renormalisation converges and what the limit depends on is open in general,
  not merely in specific models.
- **Freedman's inequality and stochastic integrability**, where the best
  current bounds lose powers of the distance to criticality that sharp
  results would want.

## Interleaving problems

Mix these with [Itô
Integration](/14-graduate-stochastic-analysis/1_ito-integration-and-formula/),
[Measure Theory](/10-measure-theory/2_measures/),
[Functional Analysis](/11-functional-analysis/1_normed-spaces-and-banach-spaces/),
[Ricci Flow](/16-graduate-geometry/1_ricci-flow-and-geometrisation/) and
[Limit Theorems](/8-probability-and-statistics/4_limit-theorems/).

1. (Itô.) Solve $\mathrm{d}X_t = X_t^2\,\mathrm{d}W_t$ by taking logarithms
   where you can, and explain exactly where and why the Itô correction
   appears. Compare with the same ODE under ordinary calculus.
2. (Measure theory.) Show that space-time white noise on $[0,T]\times[0,1]$
   is not an element of $L^p$ for any $p$, by computing the distribution of
   its values on a small interval. This is the calculation that kills the
   deterministic proof.
3. (Functional analysis.) State and prove the Banach-valued Itô isometry, and
   use it to show that $\int_0^T \xi_s\,ds$ is Gaussian. Then explain why the
   deterministic energy estimate needs an $L^\infty$ norm that the previous
   problem showed does not exist.
4. (Limit theorems.) Show that $\sup_{t\le T}\lVert u(t)\rVert_{L^p}$ is
   finite for $p>4$ in the multiplicative case, and identify the exponent in
   the Kolmogorov condition as coming from where.
5. (Ricci flow.) Percolation on a graph and Ricci flow are related through the
   same renormalisation-group structure. Describe the analogy and say what
   makes it more than a coincidence; and where it fails.
6. (Research.) Take the SPDE $\partial_t u = \partial_x^2 u + u^3$ and decide
   whether it is subcritical in the sense above. Then explain what goes wrong
   when it is not, and identify the renormalisation counterterm that regularises
   it.

## See Also

- [Stochastic Calculus: Itô Integration and the Itô
  Formula](/14-graduate-stochastic-analysis/1_ito-integration-and-formula/) -
  the product rule this subject lives or dies by
- [Measure Theory](/10-measure-theory/2_measures/); why white noise is not
  measurable in the spaces the estimates want
- [Functional Analysis](/11-functional-analysis/1_normed-spaces-and-banach-spaces/): Banach-valued integration and the spaces solutions live in
- [Ricci Flow and Geometrisation](/16-graduate-geometry/1_ricci-flow-and-geometrisation/): the same renormalisation thinking in geometry
- [How to Use These Notes](/how-to-use/); the method