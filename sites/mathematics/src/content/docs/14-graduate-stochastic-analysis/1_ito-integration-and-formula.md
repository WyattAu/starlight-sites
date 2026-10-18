---
date: 2026-10-07T00:00:00.000Z
title: "Stochastic Calculus: Itô Integration and the Itô Formula"
description: "Stochastic calculus: Brownian motion, why the Itô integral cannot be a Riemann–Stieltjes integral, quadratic variation, the Itô formula, and where it goes at research level — rough paths, Malliavin calculus and stochastic PDEs. Research tier bridging probability, measure theory and functional analysis."
tags:
  - Mathematics
  - University
  - Stochastic Analysis
  - Probability
categories:
  - Mathematics
---

## Stochastic Calculus: Itô Integration and the Itô Formula

**Tier: R (Research).** Builds on probability spaces, measure theory, real
analysis and functional analysis. The subject is the mathematics of randomness
that changes in time, and it is the language of mathematical finance, stochastic
PDEs, and the modern theory of regularity for rough functions.

## Recall prompts

Attempt these from memory *before* reading.

- What is a filtration? What does it mean for a process to be adapted?
- State the three properties that define Brownian motion.
- What is the quadratic variation of a function, and what is it for a
  differentiable function?
- State the ordinary chain rule.
- What does the Lebesgue integral of a function against a measure of unbounded
  variation require?

## Motivation: the ordinary integral cannot be used

You want to model a stock price, a diffusing particle, or a noisy signal. The
natural object is an integral

$$
\int_0^t \sigma(s)\, dW(s)
$$

where $W$ is Brownian motion — the integral of a strategy against a random
noise. The problem is that $dW(s)$ is not a measure. Brownian paths have
unbounded variation on every interval, so the Riemann–Stieltjes integral does
not exist: the sums do not converge no matter how you partition.

That is not a technicality. It is the mathematical statement that the noise is
*rough*, and roughness is the whole point. The Itô integral is the repair, and
the repair has a price: the chain rule acquires an extra term, and that term is
what makes stochastic calculus a different subject from ordinary calculus.

## Brownian motion

**Definition (F, in this subject).** A standard Brownian motion $W$ is a
process with:

1. $W_0 = 0$ almost surely.
2. Independent increments: $W_{t} - W_{s}$ is independent of the past for
   $s < t$.
3. Gaussian increments: $W_t - W_s \sim \mathcal{N}(0, t-s)$.
4. Continuous paths.

**Three properties worth knowing by heart.**

<div class="table-wrap">

| Property | Statement | Why it matters |
| -------- | --------- | -------------- |
| Almost sure nowhere differentiability | Paley–Wiener–Zygmund | there is no $dW/dt$ as a function |
| Quadratic variation $[W]_t = t$ | almost surely | the source of the extra term in Itô's formula |
| Scaling: $W_{ct} \sim \sqrt{c}\,W_t$ | in distribution | Brownian motion is its own coarse-grained limit |

</div>

The quadratic variation is the central object. For a differentiable function
$f$, the sums $\sum (f(t_{i+1}) - f(t_i))^2$ over a partition tend to $0$ like
the mesh. For Brownian motion they tend to $t$ — a *positive, finite, non-random
limit*. Brownian motion accumulates exactly $t$ worth of roughness, and that is
a deterministic fact about almost every path.

## Why the Itô integral cannot be a Riemann–Stieltjes integral

For a deterministic integrand $f$ and an integrator $g$ of bounded variation,
the Riemann–Stieltjes sums $\sum f(\xi_i)(g(t_{i+1}) - g(t_i))$ converge
regardless of where the evaluation point $\xi_i$ sits in $[t_i, t_{i+1}]$.

For Brownian motion, the choice of $\xi_i$ changes the answer. Taking $\xi_i$
at the left endpoint gives one limit; taking it at the midpoint gives a
*different* limit; the difference is exactly half the quadratic variation of
the cross term.

So there is no integral free of that choice. Itô's choice is the **left
endpoint**, which has a probabilistic meaning: $\xi_i$ is then known given the
past, so the integrand is *non-anticipating*. That is what makes the integral
adapted, and adaptedness is what makes it a martingale — the property that does
all the work.

**The price and the payoff.** The Itô integral is not a pathwise object; it is
defined as an $L^2$ limit. It has no meaning for a fixed realisation of $W$. In
exchange it is a martingale with

$$
E\left[\left(\int_0^t \sigma\, dW\right)^2\right] = E\left[\int_0^t \sigma^2\, ds\right],
$$

which is the Itô isometry, and it is what makes the integral usable.

## The Itô formula

**Theorem (R, Itô 1944).** Let $X_t$ satisfy $dX_t = \mu_t\,dt + \sigma_t\,dW_t$
and let $f$ be twice continuously differentiable. Then

$$
df(X_t) = f'(X_t)\,dX_t + \frac{1}{2} f''(X_t)\, d\langle X\rangle_t,
$$

and for Brownian motion $d\langle W \rangle_t = dt$, so

$$
df(W_t) = f'(W_t)\,dW_t + \frac{1}{2} f''(W_t)\,dt.
$$

**Where the extra term comes from.** Taylor-expand $f(X_t)$ to second order:

$$
df = f'\,dX + \frac{1}{2} f''\,(dX)^2.
$$

In ordinary calculus $(dX)^2$ is $o(dX)$ and vanishes. For Brownian motion,
$(dW)^2$ is *exactly* $dt$ — that is the statement $[W]_t = t$. The second-order
term is of the same order as the first, so it cannot be dropped.

**Worked example (R, in full).** Find the SDE for $Y_t = W_t^2$.

Take $f(x) = x^2$. Then $f'(x) = 2x$ and $f''(x) = 2$, so

$$
d(W_t^2) = 2W_t\,dW_t + \frac{1}{2}\cdot 2\,dt = 2W_t\,dW_t + dt.
$$

Rearranging, $W_t^2 - t = \int_0^t 2W_s\,dW_s$, which shows directly that the
Itô integral is a martingale: $W_t^2 - t$ has zero drift. In ordinary calculus
you would get $d(W^2) = 2W\,dW$ and no $dt$ term — the $dt$ is the Itô
correction, and it is the quadratic variation appearing.

**Worked example (R, geometric Brownian motion).** Financial models use

$$
dS_t = \mu S_t\,dt + \sigma S_t\,dW_t.
$$

Find $d(\log S_t)$. With $f(x) = \log x$, $f'(x) = 1/x$, $f''(x) = -1/x^2$:

$$
d(\log S_t) = \frac{1}{S_t}\,dS_t - \frac{1}{2S_t^2}\,\sigma^2 S_t^2\,dt
= \left(\mu - \frac{\sigma^2}{2}\right)dt + \sigma\,dW_t.
$$

So $\log S_t = \log S_0 + (\mu - \sigma^2/2)t + \sigma W_t$, and $S_t$ is
log-normal with *drift $\mu - \sigma^2/2$*, not $\mu$. Missing the $-\sigma^2/2$
is the most common error in the subject, and it comes precisely from dropping
the Itô term.

## Proofs

Three proofs. The first establishes the isometry, which is the integral's
definition; the second establishes quadratic variation, which the Itô formula
assumes; the third is the formula itself. The order matters, because the third
uses the second and would be circular without it.

**Theorem 1 (Itô isometry).** For simple $\sigma$,
$\left\|\int_0^t \sigma\,dW\right\|_2^2 = \mathbb{E}\int_0^t \sigma^2\,ds$, and
the simple adapted maps are dense in $L^2(\Omega \times [0,t])$, so the isometry
extends the integral to all of $L^2$.

*Proof.* Let $\sigma_t = \sigma_{t_i}$ on $(t_i, t_{i+1}]$ and
$\Delta W_i = W_{t_{i+1}} - W_{t_i}$. Then

$$
\mathbb{E}\Big(\sum_i \sigma_{t_i}\Delta W_i\Big)^{\!2}
= \sum_i \mathbb{E}\big[\sigma_{t_i}^2 \Delta W_i^2\big]
+ 2\sum_{i<j} \mathbb{E}\big[\sigma_{t_i}\sigma_{t_j}\Delta W_i \Delta W_j\big].
$$

For a cross term, condition on $\mathcal{F}_{t_j}$: $\sigma_{t_j}$ and $\Delta W_i$
for $i<j$ are $\mathcal{F}_{t_j}$-measurable, and
$\mathbb{E}[\Delta W_j \mid \mathcal{F}_{t_j}] = 0$ by independent increments, so
the term is zero. For the diagonal,
$\mathbb{E}[\sigma_{t_i}^2\Delta W_i^2] = \mathbb{E}[\sigma_{t_i}^2](t_{i+1}-t_i)$
by the same conditioning. Summing gives the isometry.

Simple adapted processes are dense in $L^2(\Omega\times[0,t])$, and because the
map is an isometry on them it is $L^2$-continuous, so it extends uniquely to the
closure. That extension *is* the Itô integral: an $L^2$ object, defined by
continuity rather than pathwise. The cross terms did not merely come out small --
they vanished because of adaptedness, the same property that fixed the choice of
left endpoint above. $\blacksquare$

**Theorem 2 (quadratic variation of Brownian motion).** For partitions with mesh
$\to 0$,

$$
\sum_i (W_{t_{i+1}} - W_{t_i})^2 \xrightarrow{L^2} t.
$$

*Proof.* Write $Q_n$ for the sum and $\Delta t_i = t_{i+1}-t_i$. Then
$\mathbb{E}Q_n = \sum_i \Delta t_i = t$, so it is enough to show the variance
vanishes. The increments are independent, and $\operatorname{Var}(\Delta W_i^2) = 2(\Delta t_i)^2$ for a Gaussian, so

$$
\operatorname{Var}(Q_n) = \sum_i 2(\Delta t_i)^2
\leq 2 \max_i \Delta t_i \sum_i \Delta t_i = 2t\,\max_i \Delta t_i \to 0.
$$

$\blacksquare$

The single line $\sum 2(\Delta t_i)^2 \le 2t\max_i\Delta t_i$ is the entire
proof, and it is worth pausing on: quadratic variation is a *limit*, not an
identity, and for any finite partition $Q_n$ has mean $t$ but fluctuates. The
shorthand $(dW)^2 = dt$ is a statement about this $L^2$ limit, exactly as true
and exactly as informal as that.

**Theorem 3 (Itô's formula).** For $f \in C^2(\mathbb{R})$,

$$
f(W_t) = f(0) + \int_0^t f'(W_s)\,dW_s + \frac{1}{2}\int_0^t f''(W_s)\,ds.
$$

*Proof.* Partition $[0,t]$ and Taylor-expand about $W_{t_i}$:

$$
f(W_{t_{i+1}}) - f(W_{t_i})
= f'(W_{t_i})\Delta W_i + \tfrac12 f''(W_{t_i})(\Delta W_i)^2 + R_i,
$$

with $R_i = \tfrac12 (f''(\xi_i) - f''(W_{t_i}))(\Delta W_i)^2$. Summing,

$$
f(W_t) - f(0) = \sum_i f'(W_{t_i})\Delta W_i
+ \tfrac12\sum_i f''(W_{t_i})\Delta t_i
+ \tfrac12\sum_i f''(W_{t_i})\big[(\Delta W_i)^2 - \Delta t_i\big]
+ \sum_i R_i.
$$

Term by term. The first converges in $L^2$ to the Itô integral, by Theorem 1.
The second is an ordinary Riemann sum, converging to $\tfrac12\int_0^t f''\,ds$.
The third is the term Riemann-Stieltjes theory does not have, and it vanishes
*because* of Theorem 2: by Cauchy-Schwarz in $L^2$,

$$
\mathbb{E}\Big(\sum_i f''(W_{t_i})\big[(\Delta W_i)^2 - \Delta t_i\big]\Big)^{\!2}
\leq \|f''\|_\infty^2\; \mathbb{E}\Big(\sum_i \big[(\Delta W_i)^2-\Delta t_i\big]\Big)^{\!2}
\to 0.
$$

For the remainder, $f''$ is uniformly continuous, so
$\max_i|f''(\xi_i) - f''(W_{t_i})| \to 0$ in probability while
$\sum_i(\Delta W_i)^2$ is $O_P(1)$ by Theorem 2; hence
$\sum_i R_i \to 0$ in probability. $\blacksquare$

The proof explains the formula rather than merely verifying it. The extra term is
not a correction that happens to be needed: it is the second-order Taylor term
failing to be negligible, and the reason it fails is that $\sum(\Delta W_i)^2$
has a nonzero limit. For a bounded-variation integrator that sum tends to zero,
which is why ordinary calculus has no such term. Itô's formula is Taylor's
theorem with a different answer to the question "how large is $(\Delta X)^2$" --
and the answer is a property of the *integrator*, not of $f$.

## Counterexamples

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| $d(W^2) = 2W\,dW$ | no | the $+dt$ term is the quadratic variation |
| Brownian paths are differentiable | no | unbounded variation on every interval |
| The Itô integral is pathwise defined | no | it is an $L^2$ limit over all paths |
| Change of variables works as in ordinary calculus | no | the second-order term survives |
| The Stratonovich and Itô integrals agree | no | they differ by half the quadratic variation of the cross term |

</div>

The last row is the research-level content. The **Stratonovich** integral uses
the midpoint evaluation point instead of the left endpoint. It agrees with
ordinary calculus ($d(W^2) = 2W \circ dW$, no correction term), but it is not a
martingale. Itô is the natural choice for *predicting* (left endpoint = no
foresight); Stratonovich is the natural choice for *modelling physics*
(invariant under coordinate changes). The conversion between them is explicit,
and choosing the wrong one silently changes the drift.

## Where the research frontier is

- **Rough paths.** Lyons' theory constructs the integral for *any* rough signal
  — not just Brownian motion — by treating the iterated integrals as extra data.
  It removes the probabilistic structure entirely and gives pathwise meaning to
  what Itô defines in $L^2$. It also explains *why* Itô's correction exists: it
  is the Lévy area.
- **Malliavin calculus.** A differential calculus on Wiener space, giving
  probabilistic proofs of Hörmander's hypoellipticity theorem and a way to
  compute sensitivities of expectations with respect to the noise.
- **Stochastic PDEs.** The stochastic heat, wave and Navier–Stokes equations.
  Regularity structures (Hairer, Fields Medal 2014) extended rough paths to
  give a meaning to SPDEs whose nonlinearity is more singular than the noise.
- **Regularisation by noise.** An ODE with irregular drift that has no solution
  classically can acquire a unique one when noise is added — noise creating
  regularity rather than destroying it.

### More counterexamples

<div class="table-wrap">

| Object | Looks like | Is actually |
| ------ | ---------- | ----------- |
| $dW/dt$ | a derivative | does not exist; white noise is a distribution |
| $[W]_t$ | converges to 0 like differentiable functions | converges to $t$ |
| Itô integral for fixed $W$ | a pathwise Riemann integral | an $L^2$ limit over the probability space |
| Stratonovich integral | the same as Itô | differs by half the cross quadratic variation |

</div>

## Recall prompts — attempt after reading

- State the Itô isometry, and say what it is for.
- Why does the Itô formula have an extra term, and where does it come from?
- Compute the SDE for $W_t^3$.
- What is the difference between the Itô and Stratonovich integrals, and when is
  each the right choice?
- State one way in which rough paths generalise Itô's integral.

## Interleaving problems

Mix these with material from [Probability
Spaces](/8-probability-and-statistics/1_probability-spaces/), [Measure
Theory](/10-measure-theory/2_measures/), [Sequences and
Limits](/3-real-analysis/2_sequences-and-limits/) and [Functional
Analysis](/11-functional-analysis/1_normed-spaces-and-banach-spaces/).

1. (Probability spaces.) Show that the Itô integral is a martingale with
   respect to the filtration generated by $W$, using the independent-increments
   property.
2. (Measure theory.) Show $[W]_t = t$ almost surely for the dyadic partition,
   using the law of large numbers.
3. (Real analysis.) Show that a function of bounded variation has zero
   quadratic variation, so the Itô correction vanishes.
4. (Functional analysis.) Show the Itô isometry says the map $\sigma \mapsto \int \sigma\,dW$ is an isometry from $L^2(\Omega \times [0,t])$ into
   $L^2(\Omega)$, and deduce it extends to all square-integrable adapted
   integrands.
5. (Research.) Show that for $f \in C^2$, the Stratonovich and Itô integrals of
   $f'(W)$ against $dW$ differ by $\frac{1}{2}[f'(W)]_t$.

## See Also

- [Probability Spaces](/8-probability-and-statistics/1_probability-spaces/) —
  the axioms, filtrations and adaptedness
- [Measure Theory](/10-measure-theory/2_measures/) — the integral the Itô
  isometry lives in
- [Functional Analysis](/11-functional-analysis/1_normed-spaces-and-banach-spaces/)
  — the $L^2$ structure
- [Posterior Asymptotics](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)
  — the statistical counterpart
- [How to Use These Notes](/how-to-use/) — the method
