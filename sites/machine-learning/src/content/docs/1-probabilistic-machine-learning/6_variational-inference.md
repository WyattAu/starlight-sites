---
date: 2026-10-18T00:00:00+01:00
title: Variational Inference
tags:
  - Machine Learning
  - University
description: "Variational inference: the ELBO derived from Jensen and from the KL decomposition, mean-field and coordinate ascent with proofs, the relationship to EM, and the faithfulness question -- what the approximate posterior gets wrong and how to check."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "6_variational-inference", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/6_variational-inference"}]
}
</script>

MCMC answers the posterior-computation problem by *sampling*; variational
inference answers it by *optimisation*. Choose a tractable family $q$ of
distributions over the latent variables, find the member closest to the true
posterior in Kullback–Leibler divergence, and report $q$. The computation
becomes an optimisation — gradient-based, scalable, with the convergence theory
of optimisation rather than the diagnostics of Markov chains — and the price is
stated honestly in the definition: $q$ is an approximation, and the theory's job
is to say how good.

The prerequisite is the decomposition proved on
[the EM page](/1-probabilistic-machine-learning/3_estimation-theory/):
$\log p_\theta(x) = \mathcal{L}(q,\theta) + \mathrm{KL}(q\,\|\,p_\theta(\cdot\mid x))$.
Variational inference is what you get by turning that identity into an objective.

## Intuition

Picture the true posterior as a landscape and $q$ as a tractable shape — a
Gaussian, say — that you can slide and stretch. Minimising KL means fitting the
shape to the landscape as closely as the shape allows. If the landscape is
nearly Gaussian, the fit is excellent and everything downstream works. If the
landscape has several modes, a single Gaussian sits on one of them and
*confidently ignores the rest* — the approximation is not slightly wrong, it is
structurally blind, and no amount of optimisation fixes a family that cannot
express the answer.

That failure mode is the defining trade of the subject, and it is the mirror
image of MCMC's. MCMC is asymptotically exact and computationally expensive;
variational inference is fast, scalable, and exact only when the family is rich
enough. The two are complements, and which to use is a decision about scale and
honesty.

## 1. The ELBO, two ways

**Definition.** The **evidence lower bound** (ELBO) is

$$
\mathcal{L}(q) = \int q(z)\log\frac{p(x, z)}{q(z)}\,dz
= \mathbb{E}_q[\log p(x, z)] - \mathbb{E}_q[\log q(z)],
$$

and the second term $-\mathbb{E}_q[\log q]$ is the **entropy** of $q$.

**Theorem.** $\log p(x) = \mathcal{L}(q) + \mathrm{KL}(q\,\|\,p(z\mid x))$
for every $q$, hence $\mathcal{L}(q) \leq \log p(x)$ with equality iff
$q = p(z \mid x)$.

*Proof 1 (Jensen).* Since $p(x, z) = p(z \mid x)\,p(x)$,

$$
\log p(x) - \mathcal{L}(q) = \mathbb{E}_q\!\left[\log\frac{p(z\mid x)}{q(z)}\right]
= \mathrm{KL}(q\,\|\,p(z\mid x)) \geq 0
$$

by Gibbs' inequality — the non-negativity of KL, itself Jensen's inequality
applied to the convex $-\log$. Equality iff $q = p(z\mid x)$ a.e. $\blacksquare$

*Proof 2 (the decomposition).* The same identity rearranged:

$$
\mathcal{L}(q) = \underbrace{\mathbb{E}_q[\log p(x \mid z)]}_{\text{reconstruction}}
\;-\;
\underbrace{\mathrm{KL}(q(z)\,\|\,p(z))}_{\text{regularisation to the prior}},
$$

the form used in variational autoencoders: maximise how well the latent
variables reconstruct the data, minus how far $q$ drifts from the prior. The two
proofs are the same inequality read from the two ends, and having both is what
makes the objective interpretable in models where $p(x\mid z)$ is explicit
(VAEs) and where $p(x,z)$ is explicit (graphical models).

**The consequence.** Maximising $\mathcal{L}$ over $q$ pushes $\mathrm{KL}(q\,\|\,p(z\mid x))$
toward zero. The optimum is the *projection* of the posterior onto the family
$\mathcal{Q}$ — in the KL geometry, which is mode-seeking rather than
mass-covering, and the consequences of that asymmetry are §5.

## 2. Mean-field and coordinate ascent

**Definition (mean-field family).** $\mathcal{Q} = \{q : q(z) = \prod_{i} q_i(z_i)\}$ — the latent variables are independent under $q$.

**Theorem (coordinate-ascent update).** In the mean-field family, the optimal
$q_j$ given the others is

$$
q_j^*(z_j) \;\propto\; \exp\!\Big(\mathbb{E}_{q_{-j}}\big[\log p(x, z)\big]\Big),
$$

where the expectation is over every coordinate except $j$.

*Proof.* Write $\mathcal{L}(q)$ with the $j$-coordinate's contribution isolated:

$$
\mathcal{L}(q) = \int q_j(z_j)\;
\mathbb{E}_{q_{-j}}\big[\log p(x, z)\big]\; dz_j
\;+\; \sum_{i \neq j} \int q_i(z_i)\log q_i(z_i)\,dz_i
$$

using the mean-field factorisation to split the entropy term:
$\log\prod_i q_i = \sum_i \log q_i$, and only the $j$-th term couples to $q_j$.
The bracket
$\mathbb{E}_{q_{-j}}[\log p(x,z)]$ is a *fixed function* of $z_j$ — call it
$f(z_j)$ — so the problem is
$\max_{q_j} \int q_j f + \int q_j \log q_j$. By Gibbs' inequality this is
maximised at $q_j \propto e^{f}$, i.e. proportional to the exponential of the
expected complete-data log-density. $\blacksquare$

The update is exact given the others, and the algorithm — cycle through the
coordinates, replacing each — is *coordinate ascent on a jointly concave
objective in the mean-field case*, so it converges to a stationary point by the
standard theory. Which stationary point depends on the initialisation, exactly
as EM's does.

*Worked example (Bayesian normal, known variance).* For
$x_1, \dots, x_n \sim \mathcal{N}(\mu, \sigma^2)$ with $\sigma^2$ known and
prior $\mu \sim \mathcal{N}(m_0, s_0^2)$, the mean-field update for $q(\mu)$
gives

$$
q^*(\mu) = \mathcal{N}\!\left(\frac{m_0/s_0^2 + n\bar x/\sigma^2}
{1/s_0^2 + n/\sigma^2},\;\; \frac{1}{1/s_0^2 + n/\sigma^2}\right),
$$

which reproduces the exact conjugate posterior — because the posterior *is*
Gaussian, the mean-field family contains it, and the KL is zero at the optimum.
The example calibrates the method: mean-field is exact precisely when the
posterior factorises, and its error is otherwise the factorisation's error.

## 3. The relation to EM

EM and variational inference are the same loop with different choices at the
E-step. [Page 3's](/1-probabilistic-machine-learning/3_estimation-theory/)
EM took $q(z) = p_\theta(z \mid x)$ — the exact posterior — making the bound
tight; mean-field takes the best $q$ in a factorised family — a bound that is
generically not tight. When the exact posterior does not factorise, the E-step
is intractable, and the variational E-step is the repair: *replace the
intractable posterior with the closest tractable distribution and continue the
same monotone ascent*.

The monotonicity carries over: coordinate ascent on $\mathcal{L}$ never
decreases $\mathcal{L}$, and $\mathcal{L} \leq \log p(x)$ throughout. So the
variational EM loop inherits EM's guarantee, with the additional gap
$\log p(x) - \mathcal{L}(q) \geq 0$ as the price of tractability.

## 4. What the approximation gets wrong

**Mean-field underestimates variance.** This is a theorem, not an
observation: the optimal factorised $q$ matches the posterior's mean but
*yields* its covariance — setting every off-diagonal entry to zero and shrinking
the diagonal accordingly. For the Beta–Bernoulli model, page 2's exact posterior
$\mathrm{Beta}(\alpha + x, \beta + n - x)$ has variance
$\frac{ab}{(a+b)^2(a+b+1)}$; the mean-field fit to it has smaller variance,
asymptotically by a factor reflecting the correlation the factorisation
discards.

**Practical consequences.** Credible intervals from mean-field VI are too
narrow — overconfident by construction. Hypothesis tests calibrated on them
over-reject. And in model comparison, the ELBO conflates fit quality with the
tightness of the bound, so comparing models by ELBO compares two things at once.

**MCMC and VI measure different errors.** MCMC's error is Monte Carlo noise —
which shrinks with samples and is quantified by ESS. VI's error is a
*systematic bias* from the family — which does not shrink with more optimisation,
and is quantified only by comparing against ground truth or by enriching the
family. A well-mixed chain and a converged VI fit are not substitutes; they are
different approximations with different failure modes, and the honest workflow
checks VI against MCMC on problems small enough to allow both.

## 5. The code

**Python — mean-field VI against the exact conjugate posterior.**

```python
import numpy as np
from scipy import stats

rng = np.random.default_rng(2026)
n, s2, m0, s20 = 64, 2.0, 0.0, 1.0
mu_true = 0.8
x = rng.normal(mu_true, np.sqrt(s2), n)

# Exact conjugate posterior (page 2's Beta--Bernoulli analogue, continuous):
#   mu | x  ~  N(m_n, s_n^2)  with the standard precision-weighted forms.
prec0, prec = 1 / s20, n / s2
m_n = (m0 * prec0 + x.sum() * prec) / (prec0 + prec)
s_n = 1 / (prec0 + prec)
exact = stats.norm(m_n, np.sqrt(s_n))

# Mean-field VI: q(mu) = N(m, v), coordinate ascent on the ELBO.
m, v = 0.0, 1.0
for _ in range(200):
    # q(mu) | x: Gaussian by the conjugacy of the normal likelihood.
    v = 1 / (prec0 + prec)
    m = (m0 * prec0 + x.sum() * prec) * v

print(f"exact:  mean {m_n:.4f}  sd {np.sqrt(s_n):.4f}")
print(f"VI:     mean {m:.4f}  sd {np.sqrt(v):.4f}")
# Expected: identical. The posterior is Gaussian, so the mean-field family
# contains the truth and the KL at the optimum is zero -- VI is exact here,
# which is the calibration, not a victory.
```

The page's point in three lines of output: when the family contains the
posterior, VI is exact; the interesting cases are the ones where it is not, and
the failure is systematic.

## Common Pitfalls

- **Reading the ELBO as the model score.** $\mathcal{L} \leq \log p(x)$ always;
  comparing two models by ELBO compares fit *and* bound tightness, and a higher
  ELBO may mean a looser bound rather than a better model.
- **Assuming VI is a cheaper MCMC.** It replaces a sampling error that shrinks
  with a family bias that does not. For credible intervals, mean-field VI is
  overconfident by construction — a theorem of §4, not an implementation bug.
- **Expecting multimodality to be found.** A unimodal $q$ cannot cover two
  modes, and KL's mode-seeking behaviour selects one and zeroes the other's
  mass. Mixture families and stan's advi variants exist for this; the base
  method does not.
- **Optimising the family's parameters with a black-box optimiser and calling
  it coordinate ascent.** The conjugacy-computation theorem above gives *exact*
  updates; generic gradient ascent on the same objective needs gradients,
  tolerances, and the convergence theory of that optimiser — different
  guarantees, different diagnostics.
- **Forgetting the entropy term.** Dropping $-\mathbb{E}_q[\log q]$ collapses
  $q$ onto a point mass, maximising the expected log-joint by destroying the
  distribution. The entropy term is what keeps $q$ a distribution.

## Cross-References

- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)** — the ELBO identity's origin in the EM decomposition.
- **[Bayesian Inference and Computation](/1-probabilistic-machine-learning/5_bayesian-inference-and-computation/)** — MCMC, the complementary sampler, and the two-chain caution.
- **[The Fundamental Theorems](https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems/)** — Gibbs' inequality and convexity, the two facts doing the work.
- **[Exponential Families](/1-probabilistic-machine-learning/2_statistical-decision-theory/)** — $\nabla^2 A$ as covariance, the convexity behind well-posed coordinate ascent.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)** — generalisation, the question VI's posterior is supposed to answer.
