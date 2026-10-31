---
date: 2026-10-18T00:00:00+01:00
title: Estimation Theory
tags:
  - Machine Learning
  - University
description: "Estimation theory: bias and variance, the Cramer-Rao bound from Cauchy-Schwarz with proof, efficiency, maximum likelihood with consistency and asymptotic normality, and the EM algorithm with its monotonicity proof -- the theory of what an estimator can achieve."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "3_estimation-theory", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/3_estimation-theory"}]
}
</script>

An estimator is a rule that turns data into a guess at a parameter. Decision
theory asked what "good" means; this page asks what is *achievable*. Two
questions organise it. How good can any unbiased estimator be? — answered by the
Cramér–Rao bound, proved from Cauchy–Schwarz. And how good is the estimator
everyone uses? — answered for maximum likelihood by consistency and asymptotic
normality, with the proof sketched through the same local-asymptotic machinery
the Bernstein–von Mises theorem used.

The page closes with the EM algorithm, the workhorse of latent-variable models,
with its monotonicity property proved — the guarantee that makes it safe to run
and the reason it can stall.

## Intuition

Estimation is target shooting. **Bias** is how far the shots' centre sits from
the bullseye; **variance** is how tightly they cluster. An unbiased estimator
with huge variance loses to a slightly biased one with tiny variance — which is
why regularised estimators (ridge, shrinkage, priors) beat "unbiased" ones, and
why the bias–variance decomposition is not a slogan but the definition of mean
squared error rearranged.

The Cramér–Rao bound then says the target has a floor: no unbiased estimator can
be tighter than a quantity set by the model's Fisher information. If your
estimator attains the floor, stop optimising. If it does not, either the model
hasn't enough information or the estimator is improvable.

## 1. Bias, variance, and the decomposition

**Definition.** For an estimator $\delta(X)$ of $g(\theta)$, the **bias** is
$\mathrm{bias}_\theta(\delta) = \mathbb{E}_\theta[\delta(X)] - g(\theta)$, and
the **mean squared error** is
$\mathrm{MSE}_\theta(\delta) = \mathbb{E}_\theta[(\delta(X) - g(\theta))^2]$.

**Theorem (bias–variance decomposition).**

$$
\mathrm{MSE}_\theta(\delta) = \mathrm{Var}_\theta(\delta) + \mathrm{bias}_\theta(\delta)^2.
$$

*Proof.* Write $\delta - g = (\delta - \mathbb{E}\delta) + (\mathbb{E}\delta - g) = U + b$ where $U$ has mean zero. Then

$$
\mathbb{E}[(U + b)^2] = \mathbb{E}[U^2] + 2b\,\mathbb{E}[U] + b^2
= \mathrm{Var}(\delta) + b^2,
$$

the cross term vanishing because $\mathbb{E}U = 0$. $\blacksquare$

Two lines, and the page dwells on what they say: MSE splits into an
irreducible-variance part and a squared-bias part, and the two can be traded.
The James–Stein result from the previous page is exactly a trade — a large bias
reduction bought with a small variance increase — and the decomposition is what
makes that trade measurable.

## 2. The Cramér–Rao bound

**Definition.** The **Fisher information** for a scalar parameter $\theta$ is

$$
I(\theta) = \mathbb{E}_\theta\left[\left(\frac{\partial}{\partial\theta}
\log p_\theta(X)\right)^2\right],
$$

and for $n$ i.i.d. observations, additivity of the score's expectation gives
$I_n(\theta) = n\,I_1(\theta)$.

**Theorem (Cramér–Rao).** Let $\delta$ be unbiased for $g(\theta)$ and the model
regular enough to differentiate $\mathbb{E}_\theta[\delta]$ under the integral.
Then

$$
\operatorname{Var}_\theta(\delta) \;\geq\; \frac{g'(\theta)^2}{I(\theta)}.
$$

*Proof.* Define the score $S = \partial_\theta \log p_\theta(X)$, whose
expectation is zero: $0 = \partial_\theta \int p_\theta = \int \partial_\theta p_\theta = \mathbb{E}[S]$, moving the derivative under the
integral by hypothesis. Since
$\partial_\theta\mathbb{E}_\theta[\delta] = g'(\theta)$,

$$
g'(\theta) = \int \delta\,\partial_\theta p_\theta
= \int (\delta - g)\,\partial_\theta p_\theta
= \mathbb{E}[(\delta - g)\,S],
$$

the middle step dropping a term proportional to $\int p_\theta = 1$. Now apply
Cauchy–Schwarz to the random variables $(\delta - g)$ and $S$:

$$
g'(\theta)^2 = \mathbb{E}[(\delta-g)S]^2 \leq
\mathbb{E}[(\delta-g)^2]\;\mathbb{E}[S^2]
= \operatorname{Var}(\delta)\;I(\theta).
$$

$\blacksquare$

The proof is Cauchy–Schwarz applied to the score, and every hypothesis is doing
work. Differentiating under the integral is a real hypothesis — it fails when
the support depends on $\theta$ (a uniform on $(0, \theta)$ has score with a
delta function at the boundary, and the bound is false there). Equality holds
iff $(\delta - g)$ is proportional to $S$, which characterises the
efficiency-attaining estimators.

**Definition.** $\delta$ is **efficient** if
$\operatorname{Var}(\delta) = g'(\theta)^2 / I(\theta)$.

*Worked example.* For $X_1, \dots, X_n \sim \mathrm{Bernoulli}(\theta)$:
$\log p = \sum_i [x_i \log\theta + (1-x_i)\log(1-\theta)]$, so
$S = \frac{\sum x_i - n\theta}{\theta(1-\theta)}$ and
$I_n(\theta) = \frac{n}{\theta(1-\theta)}$. The MLE $\bar X$ is unbiased with
variance $\theta(1-\theta)/n = 1/I_n$ — it *attains* the bound, and is therefore
efficient: no unbiased estimator of $\theta$ can have smaller variance. That is
a closed door, not a preference.

## 3. Maximum likelihood

**Definition.** The **maximum likelihood estimator** (MLE)
$\hat\theta_{\mathrm{MLE}}$ maximises $p_\theta(X)$ over $\theta$ — equivalently
the log-likelihood $\ell(\theta) = \log p_\theta(X)$.

Why maximise the likelihood rather than, say, minimise some other discrepancy?
Two rigorous answers arrive on this page and one later: under mild conditions
the MLE is consistent and asymptotically normal with variance $I_n^{-1}$ — it
asymptotically attains the Cramér–Rao bound; and it is a Bayes rule under
zero–one loss on $\theta$ in the limit. The deeper answer — that the likelihood
is the natural discrepancy between laws (Kullback–Leibler) — belongs to the
information-theoretic part of the course.

**Theorem (consistency and asymptotic normality).** Under regularity (identifiability,
$\theta_0$ interior, smoothness of $\ell$, and domination permitting exchange of
derivatives and integrals), the MLE satisfies

$$
\hat\theta_n \xrightarrow{P} \theta_0,
\qquad
\sqrt{n}\,(\hat\theta_n - \theta_0) \xrightarrow{d} N\!\left(0,\, I_1(\theta_0)^{-1}\right).
$$

*Proof sketch, structured like the Bernstein–von Mises proof.*
Consistency: $\ell$ converges uniformly on compacts to
$\mathbb{E}_{\theta_0}\log p_\theta$, which is maximised uniquely at $\theta_0$
by identifiability and Gibbs' inequality
$\mathbb{E}_{\theta_0}\log\frac{p_\theta}{p_{\theta_0}} \le 0$ with equality iff
$p_\theta = p_{\theta_0}$; a standard argument then traps $\hat\theta_n$ in any
neighbourhood of $\theta_0$ with probability tending to one. Asymptotic
normality: Taylor-expand the score $\ell'(\hat\theta_n) = 0 = \ell'(\theta_0) + \ell''(\tilde\theta)(\hat\theta_n - \theta_0)$, giving

$$
\sqrt{n}(\hat\theta_n - \theta_0) = \frac{-\ell''(\tilde\theta)/n}{\ell'(\theta_0)/\sqrt n}^{-1}\cdot\ldots
= \left(-\tfrac{1}{n}\ell''(\tilde\theta)\right)^{-1}
\cdot \frac{\ell'(\theta_0)}{\sqrt n},
$$

where $\ell'(\theta_0)/\sqrt n \Rightarrow N(0, I_1)$ by the CLT and
$-\tfrac{1}{n}\ell''(\tilde\theta) \xrightarrow{P} I_1(\theta_0)$ by the law of
large numbers. Slutsky's theorem — the page-1 tool — assembles the limit:
$N(0, I_1^{-1})$. $\blacksquare$

The sketch is honest about being a sketch: the trapping argument and the
uniformity of the Taylor remainder are real work, carried out in van der Vaart
ch. 5. What the page provides is the *shape* — CLT for the score, LLN for the
curvature, Slutsky to combine — which is the shape of every asymptotic normality
proof in statistics.

## 4. The EM algorithm

Latent-variable models — mixtures, missing data, hidden Markov models — have
likelihoods $\log p_\theta(x) = \log\int p_\theta(x, z)\,dz$ whose log-of-sum
resists maximisation. EM iterates around the problem.

**Definition.** Let $q(z)$ be any distribution over the latent $z$. Then

$$
\log p_\theta(x) = \mathcal{L}(q, \theta) + \mathrm{KL}(q\,\|\,p_\theta(\cdot \mid x)),
\qquad
\mathcal{L}(q, \theta) = \int q(z)\log\frac{p_\theta(x, z)}{q(z)}\,dz,
$$

*Proof.* $\log p_\theta(x) = \int q\log p_\theta(x,z) + \int q\log\frac{1}{q} + \mathrm{KL}$ by adding and subtracting $\log q$ and using
$p_\theta(x,z) = p_\theta(z \mid x)p_\theta(x)$; rearranging gives the display.
$\blacksquare$

Since KL $\geq 0$ with equality iff $q$ is the true posterior,
$\mathcal{L}$ is a **lower bound** on the log-likelihood, tight exactly when
$q$ is the posterior.

**Theorem (EM monotonicity).** Each EM iteration — E-step: $q_{t+1} = p_{\theta_t}(z\mid x)$; M-step: $\theta_{t+1} = \arg\max_\theta \mathcal{L}(q_{t+1}, \theta)$ — does not decrease the log-likelihood:

$$
\log p_{\theta_{t+1}}(x) \geq \log p_{\theta_t}(x).
$$

*Proof.* The E-step makes the bound tight at the current parameter:
$\mathcal{L}(q_{t+1}, \theta_t) = \log p_{\theta_t}(x)$. The M-step then gives
$\mathcal{L}(q_{t+1}, \theta_{t+1}) \geq \mathcal{L}(q_{t+1}, \theta_t)$ since
$\theta_{t+1}$ maximises it. Chaining:

$$
\log p_{\theta_{t+1}}(x) \geq \mathcal{L}(q_{t+1}, \theta_{t+1})
\geq \mathcal{L}(q_{t+1}, \theta_t) = \log p_{\theta_t}(x). \qquad\blacksquare
$$

Three lines, and the guarantee is *monotone ascent* — which is why EM is safe
to run — but not convergence to the *global* maximum: the sequence converges to
a stationary point of the likelihood, which for mixtures can be far from the
truth, and which is why EM initialisation is a real modelling decision rather
than an implementation detail.

*Worked example (Gaussian mixture, M-step).* With $q$ fixed, the M-step for the
component-$k$ mean maximises $\sum_i q_{ik}\log\mathcal{N}(x_i\mid\mu_k, \Sigma_k)$,
a weighted least-squares problem whose solution is the responsibility-weighted
mean

$$
\mu_k = \frac{\sum_i q_{ik}\,x_i}{\sum_i q_{ik}}.
$$

The E-step computes responsibilities $q_{ik} \propto \pi_k\mathcal{N}(x_i \mid \mu_k, \Sigma_k)$; the M-step re-fits each component to the soft-assigned
points. "Soft $k$-means" and EM are the same algorithm, with the responsibilities'
temperature separating them.

## 5. The code: efficiency and EM on real data

**Python — Cramér–Rao and the MLE's variance, on a Poisson.**

```python
import numpy as np
from scipy import optimize, stats

rng = np.random.default_rng(2026)
n, lam = 128, 3.0
x = rng.poisson(lam, size=(20_000, n))

mle = x.mean(axis=1)                       # sufficient statistic: the sum
var_emp = mle.var()
var_crb = lam / n                          # I_n = n / lam  =>  CRB = lam / n
print(f"empirical Var(MLE) = {var_emp:.6f}   Cramer-Rao bound = {var_crb:.6f}")
# Expected: the two agree to sampling error -- the Poisson MLE is efficient.

# A deliberately inefficient unbiased estimator: use only the first 32 obs.
mle32 = x[:, :32].mean(axis=1)
print(f"Var(n=32 estimator) = {mle32.var():.6f}  = 4x the bound at n=128")
```

**R — fitting a two-component mixture by EM, and watching the likelihood climb.**

```r
set.seed(2026)
n <- 600
z <- rbinom(n, 1, 0.4)
x <- ifelse(z == 1, rnorm(n, -2, 0.7), rnorm(n, 2, 1.1))

# EM for a two-component Gaussian mixture, from scratch.
mu <- c(-3, 3); s2 <- c(1, 1); pi_ <- c(0.5, 0.5)
ll <- numeric(60)
for (t in 1:60) {
  d <- cbind(dnorm(x, mu[1], sqrt(s2[1])) * pi_[1],
             dnorm(x, mu[2], sqrt(s2[2])) * pi_[2])
  q  <- d / rowSums(d)                            # E-step: responsibilities
  ll[t] <- sum(log(rowSums(d)))                   # the log-likelihood
  pi_[1] <- mean(q[, 1]); pi_[2] <- 1 - pi_[1]    # M-step (closed forms)
  mu[1] <- sum(q[, 1] * x) / sum(q[, 1])
  mu[2] <- sum(q[, 2] * x) / sum(q[, 2])
  s2[1] <- sum(q[, 1] * (x - mu[1])^2) / sum(q[, 1])
  s2[2] <- sum(q[, 2] * (x - mu[2])^2) / sum(q[, 2])
}
plot(ll[1:20], type = "b", pch = 16,
     xlab = "EM iteration", ylab = "log-likelihood")
print(round(c(mu = mu, sigma2 = s2, pi = pi_), 3))
```

Expected: the log-likelihood rises monotonically — never dips — exactly as the
theorem guarantees, and the recovered parameters approach
$(-2, 2)$, $(0.49, 1.21)$, $(0.4, 0.6)$. The plot is the monotonicity proof,
executed.

## Common Pitfalls

- **Treating unbiasedness as the goal.** The Cramér–Rao bound is *for unbiased*
  estimators; biased ones can be better in MSE, and the James–Stein result says
  they are, in dimension three and up.
- **Using the bound where the support depends on $\theta$.** Uniform-$(0,\theta)$
  problems break the differentiability-under-the-integral step, and the bound
  simply does not apply.
- **Reading asymptotic normality as finite-sample normality.** The theorem is
  about $\sqrt n(\hat\theta - \theta_0)$ as $n \to \infty$; for mixture models
  even the limit can fail, which is why EM's answer needs a validity check, not
  just a run.
- **Expecting EM to find the truth.** It finds *a* stationary point, monotonicly.
  With a bad initialisation the mixture page's example will happily converge to
  a likelihood mode that splits one true component in half.
- **Believing the E-step computes "the" latent values.** It computes a
  *distribution* $q$; the responsibilities are soft, and treating them as hard
  labels turns EM into $k$-means with its own convergence story.

## Cross-References

- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)** — the risk framework judging these estimators, and admissibility.
- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)** — the CLT and Slutsky used in the asymptotics.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)** — the same LAN machinery, in the Bayesian setting.
- **[Hodge Theory](https://mathematics.wyattau.com/12-differential-geometry/14_hodge-theory/)** — the other consumer of elliptic regularity; the pattern "kernel of an operator" recurs.
- **[Variational Inference](/1-probabilistic-machine-learning/6_variational-inference/)** — the ELBO bound of §4, made the objective.
