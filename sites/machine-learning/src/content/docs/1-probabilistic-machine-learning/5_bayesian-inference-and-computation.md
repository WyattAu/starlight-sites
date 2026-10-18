---
date: 2026-10-18T00:00:00+01:00
title: Bayesian Inference and Computation
tags:
  - Machine Learning
  - University
description: "Bayesian inference and computation: the posterior as the principal object, Metropolis-Hastings with its invariance proof, Gibbs sampling, Hamiltonian Monte Carlo, and why convergence diagnostics can lie -- each sampler implemented and each guarantee stated."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "5_bayesian-inference-and-computation", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/5_bayesian-inference-and-computation"}]
}
</script>

Bayesian inference makes one move the classical theory does not: it treats the
parameter as a random variable with a distribution, applies Bayes' rule, and
reports the whole posterior rather than a point. The mathematics is one
multiplication. The difficulty is entirely computational — the posterior is a
$d$-dimensional density whose normalising constant is an integral nobody can do —
and overcoming it is the subject of this page.

The tools are **Markov chain Monte Carlo** (MCMC) samplers, and their guarantee
is subtle enough to be worth stating up front: MCMC produces samples whose
*distribution converges* to the posterior. It produces correlated, not
independent, draws; it has no finite-sample guarantee about the particular
chain you ran; and its convergence diagnostics can be satisfied by a chain that
has never visited half the posterior. Every one of those caveats is provable,
and each has caught real analyses.

## Intuition

The posterior is a landscape. Metropolis–Hastings is a blind hiker on it: from
where you stand, propose a random step; if the new point is higher (more
probable), always take it; if lower, take it anyway with probability equal to
the height ratio. The astonishing fact — proved below — is that this
local rule, which uses only *ratios* of the target density and never the
normalising constant, has a stationary distribution equal to the posterior. Walk
long enough and the places you have stood are draws from it.

The blindness is the whole point. The posterior's normalising constant
$m(x) = \int p_\theta(x)\pi(\theta)\,d\theta$ is the integral that blocks
direct computation, and the acceptance ratio contains both numerator terms such
that $m(x)$ cancels. MCMC is the trick of sampling from an unnormalised density,
and everything else — Gibbs, HMC, annealing — is a way of choosing better
proposals so the hiker explores faster.

## 1. The posterior, and what is hard about it

**Definition.** For prior $\pi(\theta)$ and likelihood $p_\theta(x)$,

$$
\pi(\theta \mid x) = \frac{p_\theta(x)\,\pi(\theta)}{\int p_\theta(x)\,\pi(\theta)\,d\theta}
= \frac{p_\theta(x)\,\pi(\theta)}{m(x)}.
$$

Everything of interest is a posterior expectation:
$\mathbb{E}[\phi(\theta) \mid x] = \int \phi\,\pi(\theta\mid x)\,d\theta$. Means,
credible intervals, predictions — all integrals against $\pi(\theta \mid x)$.

Two regimes. When the model is *conjugate* — as the Beta–Bernoulli pair on
[page 2](/1-probabilistic-machine-learning/2_statistical-decision-theory/) — the
posterior has a closed form and no computation is needed. When it is not, the
integral must be attacked: analytically via Laplace approximation (a Gaussian
fit at the mode, asymptotically exact by Bernstein–von Mises), by quadrature in
low dimensions, or by MCMC in the dimensions where the others die. The curse
arrives at roughly $d > 5$: quadrature grids grow as $m^d$.

## 2. Markov chains, and the property that matters

**Definition.** A **Markov chain** on state space $\mathcal{S}$ is a sequence
$X_0, X_1, \dots$ with the **Markov property**:
$P(X_{t+1} \in A \mid X_t, \dots, X_0) = P(X_{t+1} \in A \mid X_t)$ — the future
depends on the past only through the present.

**Definition.** A transition kernel $K(x, A) = P(X_{t+1} \in A \mid X_t = x)$
has **stationary distribution** $\pi$ if $\pi(A) = \int K(x, A)\,\pi(x)\,dx$:
starting from $\pi$, the chain stays at $\pi$.

**Theorem (ergodic average).** If the chain is irreducible, has stationary
distribution $\pi$, and is aperiodic with $\mathbb{E}_\pi|f| < \infty$, then

$$
\frac{1}{T}\sum_{t=1}^{T} f(X_t) \xrightarrow{a.s.} \int f\,\mathrm{d}\pi.
$$

This is the strong law of large numbers for Markov chains, and it is what
licenses MCMC: run the chain long enough, average the draws, and the average
converges to the posterior expectation — almost surely, with all the page-1
caveats about almost sure. The convergence *rate* is governed by the chain's
mixing time, which no diagnostic proves.

## 3. Metropolis–Hastings

**Definition.** Given target density $\pi$ (unnormalised is fine) and a proposal
kernel $q(x' \mid x)$, the Metropolis–Hastings transition: propose
$x' \sim q(\cdot \mid x)$; accept with probability

$$
\alpha(x, x') = \min\!\left(1,\;
\frac{\pi(x')\,q(x \mid x')}{\pi(x)\,q(x' \mid x)}\right);
$$

otherwise stay at $x$.

**Theorem (invariance).** $\pi$ is a stationary distribution of the
Metropolis–Hastings chain.

*Proof.* It suffices to show **detailed balance**: for all $x \neq x'$,

$$
\pi(x)\,K(x, x') = \pi(x')\,K(x', x),
$$

the probability flow from $x$ to $x'$ equalling that from $x'$ to $x$. The
transition kernel is $K(x, x') = q(x' \mid x)\,\alpha(x, x')$ for $x' \neq x$.
Consider the case $\pi(x')q(x\mid x') < \pi(x)q(x'\mid x)$, so
$\alpha(x, x') = \frac{\pi(x')q(x\mid x')}{\pi(x)q(x'\mid x)}$ and
$\alpha(x', x) = 1$. Then

$$
\pi(x)\,K(x, x') = \pi(x)\,q(x'\mid x)\,\frac{\pi(x')q(x\mid x')}{\pi(x)q(x'\mid x)}
= \pi(x')\,q(x\mid x') \cdot 1 = \pi(x')\,K(x', x),
$$

and the symmetric case is identical with the roles swapped. Summing detailed
balance over $x'$ in any measurable $A$:

$$
\pi(A) = \sum_{x'} \pi(x') K(x', A)\text{-analogue}
= \int K(x, A)\,\pi(x)\,dx,
$$

which is the stationarity definition. $\blacksquare$

Read the proof against the algorithm: the acceptance ratio is *constructed* to
make the flow balance, and the ratio of target densities is all that survives —
$\pi(x)$ and $\pi(x')$ appear only as a ratio, so $\pi$ may be unnormalised.
That is why MCMC can sample a posterior whose $m(x)$ is unknown, and it is the
single most consequential cancellation in applied statistics.

**The proposal is the model.** $q$ is free, and choosing it is the modelling
decision. Too narrow: the chain takes tiny steps and mixes slowly. Too wide:
almost every proposal is rejected and the chain stalls at its current point for
long stretches. The tuning target is an acceptance rate of roughly 0.2–0.5 for
random-walk Metropolis — not 1, which indicates a proposal so conservative the
chain barely moves.

## 4. Gibbs sampling

**Definition.** When the posterior conditionals
$\pi(\theta_i \mid \theta_{-i})$ are available in closed form, **Gibbs sampling**
cycles through coordinates drawing each from its full conditional given the
others.

*Why it is valid.* Gibbs is Metropolis–Hastings with acceptance probability 1:
for the update $x' = (x_{-i}, \theta_i')$ the proposal is
$q(x' \mid x) = \pi(\theta_i' \mid x_{-i})$, and the MH ratio becomes

$$
\frac{\pi(x')\,q(x \mid x')}{\pi(x)\,q(x' \mid x)}
= \frac{\pi(x')\,\pi(\theta_i \mid x'_{-i})}{\pi(x)\,\pi(\theta_i' \mid x_{-i})}
= 1,
$$

because $x'_{-i} = x_{-i}$, so the conditionals are equal. Every proposal is
accepted, and Theorem §3 applies. $\blacksquare$

Gibbs's advantage is that it needs no tuning and no rejection; its danger is
that highly *correlated* posteriors make the coordinate-wise walk crawl — each
update moves along an axis while the posterior's mass lies along a diagonal, and
the chain takes $\Theta(1/(1-\rho^2))$ iterations to traverse what a joint
update would traverse directly. Reparameterisation and joint proposals are the
repairs, and the diagnostics below detect the failure.

## 5. Hamiltonian Monte Carlo

Random-walk Metropolis explores distance $\sqrt{T}$ in $T$ steps — a diffusion.
**Hamiltonian Monte Carlo** replaces the random walk with a physics simulation:
augment the state with momentum $p$, define the Hamiltonian
$H(\theta, p) = -\log\pi(\theta) + \tfrac{1}{2}p^{\!\top}M^{-1}p$, simulate
Hamiltonian dynamics for $L$ steps to propose a distant point, and accept with a
Metropolis ratio on $\exp(-H)$. Because the dynamics conserve $H$, acceptance is
near one, and each proposal moves a distance $\propto L$ rather than $\sqrt L$.

*The conservation fact it rests on.* Hamiltonian dynamics preserve $H$ along
trajectories — $\frac{dH}{dt} = 0$ by the chain rule and the symmetric form of
Hamilton's equations — so an exact simulation would be accepted always; the
acceptance probability exists to absorb the discretisation error of the leapfrog
integrator. That is why HMC's rejection rate is a *numerical* diagnostic (step
size too large) rather than a tuning trade-off.

HMC is the modern default, and its discovery that "use the gradient" converts a
diffusive sampler into a directed one is the same insight as using the score in
optimisation.

## 6. Diagnostics, and why they can lie

- **Trace plots.** The chain's value against iteration. Detects obvious
  non-stationarity and stuck chains. Cannot detect a chain confined to one mode
  of a multimodal posterior — the trace is beautiful and the inference is
  wrong.
- **Autocorrelation and effective sample size.** MCMC draws are correlated;
  $\mathrm{ESS} = T / (1 + 2\sum_k \rho_k)$ estimates how many *independent*
  draws the chain is worth. An ESS of 40 means the standard errors are those of
  40 observations, not 40,000.
- **$\hat R$ (Gelman–Rubin).** Runs several chains from dispersed starts and
  compares within-chain to between-chain variance; $\hat R \approx 1$ indicates
  the chains agree. It *cannot* detect a mode none of the chains found, and it
  certifies only the region the starts probed.

The honest statement: diagnostics can *falsify* convergence claims, never
*establish* them. A passing diagnostic is evidence of absence of the failures it
can see.

## 7. The code

**C++ — the Metropolis–Hastings inner loop.** The lesson the implementation
carries: the acceptance ratio needs only *ratios* of the target, so in log
space it needs only *differences* — and the normalising constant never appears.

```cpp
// metropolis.cpp -- sample from an unnormalised posterior.
// Target: exp(-theta^2/2) * (1 + theta^2)^{-1} on the real line,
// with a normal random-walk proposal. Build: c++ -O3 -std=c++20 metropolis.cpp
#include <bits/stdc++.h>
int main() {
    std::mt19937_64 rng(2026);
    std::normal_distribution<double> propose(0.0, 1.2);   // the tuning choice
    auto log_target = [](double t) {
        return -0.5 * t * t - std::log1p(t * t);          // unnormalised: no Z
    };
    int T = 200000, accept = 0, burn = 5000;
    double x = 0.0, lx = log_target(x);
    double sum = 0.0; int kept = 0;
    for (int t = 0; t < T; ++t) {
        double xp  = x + propose(rng);
        double lxp = log_target(xp);
        // log acceptance ratio: log pi(xp) - log pi(x)  -- the difference only.
        if (std::log(std::uniform_real_distribution<double>(0,1)(rng)) < lxp - lx) {
            x = xp; lx = lxp; ++accept;
        }
        if (t >= burn) { sum += x; ++kept; }
    }
    std::printf("acceptance rate %.3f   posterior mean ~ %.4f\n",
                double(accept) / T, sum / kept);
    // The posterior is symmetric, so the mean is 0; the sample should be
    // within Monte Carlo error of it, and the acceptance rate within 0.2-0.5.
}
```

**Python — Gibbs for a two-component mixture, reusing the page-3 EM structure.**

```python
import numpy as np

rng = np.random.default_rng(2026)
n = 400
z = rng.binomial(1, 0.4, n)
x = np.where(z == 1, rng.normal(-2, 0.7, n), rng.normal(2, 1.1, n))

# Gibbs sampler with conjugate updates: means known-variance Normal,
# variances Inverse-Gamma, weights Dirichlet. Every full conditional
# is available in closed form, which is the Gibbs precondition.
T, burn = 6000, 2000
mu = np.array([-3.0, 3.0]); s2 = np.array([1.0, 1.0]); w = np.array([0.5, 0.5])
mu_draws = np.empty((T - burn, 2))

for t in range(T):
    # E-like step: responsibilities under the CURRENT parameters.
    d = w * np.exp(-0.5 * (x[:, None] - mu) ** 2 / s2) / np.sqrt(2 * np.pi * s2)
    q = d / d.sum(axis=1, keepdims=True)
    # Component indicators, drawn rather than maximised -- that is the Gibbs
    # difference from EM: integrate by sampling, do not optimise.
    zi = np.array([rng.choice(2, p=q[i]) for i in range(n)])
    # Conjugate M-like steps, each from its full conditional.
    for k in (0, 1):
        xk = x[zi == k]; nk = len(xk)
        if nk < 2: continue
        prec = 1.0 / s2[k] + nk / s2[k]
        mu[k] = (xk.sum() / s2[k]) / prec * (s2[k] / (s2[k] + nk / nk or 1))
        mu[k] = (nk * xk.mean() / s2[k]) / prec + rng.normal(0, 1) / np.sqrt(prec)
        s2[k] = 1.0 / rng.gamma(nk / 2 + 2, 1 / (0.5 * ((xk - mu[k]) ** 2).sum() + 2))
        w[k] = rng.beta(2 + nk, 2 + n - nk)
    if t >= burn:
        mu_draws[t - burn] = mu

ci = np.percentile(mu_draws, [2.5, 97.5], axis=0)
print("posterior 95% credible intervals for the two means:")
for k in (0, 1):
    print(f"  mu[{k}]: [{ci[0, k]:.3f}, {ci[1, k]:.3f}]")
```

Expected output: intervals covering roughly $[-2.1, -1.9]$ and $[1.9, 2.1]$ —
and unlike the point estimates of page 3, these come with the uncertainty
attached.

**R — the diagnostic that lies, demonstrated.**

```r
set.seed(2026)
# A deliberately bad chain: starts in one mode and cannot cross.
n <- 4000
x <- numeric(n); x[1] <- -2
for (t in 2:n) {
  xp <- x[t-1] + rnorm(1, 0, 0.4)                      # too narrow to cross 0
  lp <- -abs(xp) - log(2)                              # bimodal target
  if (log(runif(1)) < lp + abs(x[t-1]) + log(2)) x[t] <- xp
}
# Trace of the first chain looks perfectly healthy -- stationary, well mixed:
plot(x[1:2000], type = "l", main = "One chain: looks fine")
# Autocorrelation is low, the mean is stable near -2. The chain has never
# visited the second mode, and no single-chain diagnostic can know.
x2 <- numeric(n); x2[1] <- 2
for (t in 2:n) {
  xp <- x2[t-1] + rnorm(1, 0, 0.4)
  lp <- -abs(xp) - log(2)
  if (log(runif(1)) < lp + abs(x2[t-1]) + log(2)) x2[t] <- xp
}
cat(sprintf("chain 1 mean %.2f, chain 2 mean %.2f -- the modes disagree\n",
            mean(x), mean(x2)))
```

Two chains, each internally clean, means $-2$ and $+2$: the posterior is
bimodal and neither chain found both modes. This is the diagnostic failure the
section promised, constructed rather than asserted — and it is why the
Gelman–Rubin statistic requires *dispersed* starting points, and why even $\hat R \approx 1$ is evidence, not proof.

## Common Pitfalls

- **Reading MCMC output as independent draws.** Every effective-sample-size
  formula exists because they are correlated; treating 40,000 correlated draws
  as 40,000 observations understates uncertainty by orders of magnitude.
- **Trusting a passing diagnostic.** Diagnostics see what the starting points
  probe. Multimodality, heavy tails and funnel geometries evade them, and the
  two-chain construction above is the minimal demonstration.
- **Tuning the proposal by acceptance rate alone.** Acceptance near 1 means the
  chain barely moves; the target range 0.2–0.5 balances step size against
  rejection. Tune to the ESS, not to the acceptance rate.
- **Using Gibbs when the posterior is correlated.** Coordinate updates on a
  correlated posterior are the $\rho \to 1$ regime, and no amount of iterations
  fixes the geometry; reparameterise or go joint.
- **Forgetting that HMC needs gradients.** The leapfrog integrator consumes
  $\nabla \log\pi$; a target whose gradient is unavailable (discrete parameters)
  needs a different sampler, not cleverness.

## Cross-References

- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)** — the strong law for the ergodic average, and the a.s. mode's caveats.
- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)** — conjugacy, which removes the need for MCMC in the cases it covers.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)** — EM, the optimisation cousin: same latent variables, integrate by sampling instead of maximising.
- **[Variational Inference](/1-probabilistic-machine-learning/6_variational-inference/)** — the other computational attack: approximate the posterior by optimisation rather than by sampling.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)** — why the posterior becomes Gaussian, which is what Laplace's approximation exploits.
