---
date: 2026-10-07T00:00:00.000Z
title: "Posterior Asymptotics and the Bernstein–von Mises Theorem"
description: "Asymptotic statistics for Bayesians: consistency (Doob, Schwartz), posterior contraction rates, the Bernstein–von Mises phenomenon, and where it fails — nonparametrics, misspecification and separation. Research tier with recall prompts, worked examples and interleaving problems."
tags:
  - Statistics
  - University
  - Bayesian
  - Asymptotics
categories:
  - Statistics
---

## Posterior Asymptotics and the Bernstein–von Mises Theorem

**Tier: R (Research).** Builds on measure-theoretic probability and the
undergraduate treatment of point estimation. This is where Bayesian statistics
meets asymptotic analysis, and where the question "when is the Bayesian answer
also the frequentist answer?" becomes a theorem.

## Recall prompts

Attempt these from memory before reading.

- State the weak law of large numbers and the central limit theorem.
- What is the Fisher information for an i.i.d. sample? For what class of models
  is it well defined?
- What is a prior, a posterior, and a marginal likelihood — in measure-theoretic
  terms?
- Give an estimator that is consistent but not asymptotically normal.

## Motivation: the question the theorem answers

Suppose you have data $X_1, \dots, X_n$ i.i.d. from an unknown $P_{\theta_0}$,
a prior $\Pi$ on a parameter space $\Theta$, and you compute the posterior

$$
\Pi_n(B) = \frac{\int_B \prod_i p_{\theta}(X_i)\, d\Pi(\theta)}
{\int_\Theta \prod_i p_{\theta}(X_i)\, d\Pi(\theta)}.
$$

As $n \to \infty$, two things you might hope:

1. The posterior concentrates near the truth (**consistency**).
2. The posterior looks Gaussian, centred at the maximum likelihood estimator,
   with covariance $I(\theta_0)^{-1}/n$ — the same as the frequentist sampling
   distribution of the MLE (**Bernstein–von Mises**).

The second is the remarkable one. It says that after enough data, the Bayesian
uncertainty statement and the frequentist confidence statement *coincide*: a
95% credible interval is asymptotically a 95% confidence interval. That
frequentist–Bayes agreement is not automatic, and knowing exactly when it holds
and when it fails is an active research area.

## Consistency: Doob and Schwartz

**Theorem (A, Doob 1949).** If the model is identifiable and the prior
associates probability one to a set of parameters on which the posterior is
consistent, then the posterior is consistent almost surely under the prior.

Doob's theorem is nearly free but nearly circular: it holds *prior*-almost
surely, so a prior that puts mass on bad parameters is excluded by assumption.
The substantive result is Schwartz's.

**Theorem (A, Schwartz 1965).** If the true $\theta_0$ is in the support of the
prior and the model satisfies an entropy condition — for every $\varepsilon >
0$ there is a sieve of tests separating $\theta_0$ from the $\varepsilon$-ball
around it, with exponentially small type-II error — then the posterior
probability of $\{\theta : d(\theta, \theta_0) > \varepsilon\}$ tends to $0$.

The entropy condition is the substantive hypothesis. It is checkable, it fails
in interesting cases, and its failure is what drives most of the modern
literature.

**Worked example (U).** Bernoulli with a Beta prior. The posterior is
$\mathrm{Beta}(\alpha + n p_n,\ \beta + n(1-p_n))$, which concentrates at
$p_0$ at rate $n^{-1/2}$ for any interior prior. Consistency holds for every
$p_0 \in (0,1)$; it fails at the endpoints if the prior puts zero mass there —
the beta prior with $\alpha = \beta = 1/2$ puts unbounded density at 0 and 1,
and consistency at $p_0 = 0$ then requires care.

> **Exercise.** Show the posterior mass outside $(p_0 \pm \varepsilon)$ is
> bounded by $e^{-c n}$ for some $c > 0$, using Hoeffding's inequality on the
> likelihood ratio.

## Posterior contraction rates

Consistency is qualitative. The quantitative question is: how fast?

**Definition.** A sequence $\varepsilon_n \to 0$ is a **contraction rate** if

$$
\Pi_n\left(\theta : d(\theta, \theta_0) > M_n \varepsilon_n \mid X\right) \to 0
$$

for every $M_n \to \infty$.

**Theorem (A, Ghosal–Ghosh–van der Vaart).** Under conditions on the prior's
mass near the truth (a *prior mass condition*) and on the complexity of the
model (entropy with bracketing), the posterior contracts at rate

$$
\varepsilon_n \asymp n^{-\frac{\beta}{2\beta + 1}}
$$

for a $\beta$-smooth true density in a nonparametric model.

That rate is the minimax rate — the Bayesian procedure is rate-optimal, which
is far from obvious for a procedure defined by a prior rather than an
optimisation.

**Worked example (A).** Gaussian white noise observations
$dY(t) = f(t)\,dt + n^{-1/2}\,dW(t)$ with a Gaussian prior on $f$ in a Sobolev
ball $H^\beta$. The posterior contracts at $n^{-\beta/(2\beta+1)}$, matching
the minimax rate — and the *shape* of the posterior is then shown by
Szabó, van der Vaart and van Zanten (2015) to be *not* Bernstein–von Mises: the
credible sets are not honest confidence sets. Rate optimality and honesty come
apart, and that separation is the modern research frontier.

## The Bernstein–von Mises phenomenon

**Theorem (A, van der Vaart 1998, Ch. 10; Le Cam).** Let $\Theta \subseteq
\mathbb{R}^k$ be open, $p_\theta$ smooth in $\theta$ near $\theta_0$, the
Fisher information $I(\theta_0)$ positive definite, the prior positive and
continuous at $\theta_0$, and the model otherwise regular. Then for almost
every sequence $X_1, X_2, \dots$,

$$
\sup_{h}\left| \Pi_n\left(\sqrt{n}(\theta - \hat\theta_n) \le h \mid X\right)
- \Phi_{I(\theta_0)^{-1}}(h) \right| \xrightarrow{P} 0,
$$

where $\hat\theta_n$ is any consistent estimator sequence.

**In words.** The posterior, shifted and rescaled, converges to a Gaussian
centred at the MLE with covariance $I(\theta_0)^{-1}/n$ — the frequentist
limit law.

**Worked example (U).** The Bernoulli model with a flat prior. The posterior is
$\mathrm{Beta}(\alpha + \sum x_i, \beta + n - \sum x_i)$, which for large $n$
is approximately $\mathcal{N}(\hat p, \hat p(1-\hat p)/n)$ — exactly the
CLT-based sampling distribution of $\hat p$. The theorem says this is generic,
not a coincidence of the Beta family.

**Why it matters for practice.** Under BvM, Laplace's approximation to the
posterior is asymptotically exact, MCMC on a well-behaved posterior gives
frequentist-valid intervals, and the choice of prior is asymptotically
irrelevant at rate $n^{-1/2}$. That last claim is the load-bearing one for
objective Bayes, and it is exactly what fails below.

## Where Bernstein–von Mises fails

This is the research content. Each failure is an active area.

**Nonparametric models.** As above: Gaussian priors in white noise contract at
the right rate but the posterior shape is wrong. Freedman (1999) showed the
posterior in a nonparametric normal-means problem can be inconsistent in
shape even while concentrating. Cox (1993) and Diaconis–Freedman (1986) gave
earlier examples. The resolution — priors adapted to the truth's smoothness, or
honest adaptive credible sets (Szabó, van der Vaart & van Zanten; Bull; Nickl &
Szabó) — is a substantial modern literature.

**Model misspecification.** If the true distribution is not in the model, the
posterior concentrates on the *KL minimiser* and BvM holds with the sandwich
information $I_1 I_0^{-1} I_1$ rather than $I_0$ — Kleijn and van der Vaart
(2012). The Bayesian answer then matches the *sandwich* frequentist answer, not
the model-based one.

**Separation and irregular identification.** In mixture models and other
singularly identifiable models, the Fisher information can be singular and BvM
fails in a strong sense. Posterior contraction can be slower than any
polynomial rate; recent work (e.g. on deconvolution and mixture proportions)
quantifies exactly how much slower.

**High dimension.** If $k = k_n$ grows with $n$, BvM holds only for
$k_n^5/n \to 0$ (Bickel & Kleijn) in smooth models, and in sparse models the
posterior can be very far from Gaussian. The interplay between sparsity,
priors and BvM is the current frontier.

**Prior dependence at rate $n^{-1/2}$.** BvM says the prior is irrelevant *at
the first order*. At the second order it is not, and that matters for
computation, for credible set calibration, and for the behaviour of MCMC.

## Counterexamples

**Freedman's theorem.** There exist priors with full support for which the
posterior is inconsistent at every parameter in the support. Full support is
therefore *not* enough for consistency — the Schwartz conditions are doing real
work.

**BvM without consistency.** The posterior can concentrate at a wrong point and
still be asymptotically Gaussian around it. Consistency and asymptotic
normality are separate properties.

**Diaconis–Freedman.** In a finite mixture of normals, the posterior on the
mixture weights can fail to concentrate at any rate, because the likelihood is
unbounded and the parameter space is not locally identifiable.

## Recall prompts — attempt after reading

- State Doob's consistency theorem, and say precisely why it is weaker than
  Schwartz's.
- What is a contraction rate? State the rate for a $\beta$-smooth density under
  a Gaussian prior.
- State the Bernstein–von Mises theorem and its hypotheses.
- Give three settings in which BvM fails.
- Why does the frequentist–Bayes agreement in BvM not settle the debate about
  priors?

## Interleaving problems

1. (Measure theory.) Show the posterior is a regular conditional distribution of
   $\theta$ given $X_1, \dots, X_n$ under the joint law $\theta \sim \Pi$,
   $X_i | \theta \sim P_\theta$.
2. (Real analysis.) Prove the Laplace approximation
   $\int e^{-n f(\theta)} d\theta \approx e^{-n f(\hat\theta)}
   \sqrt{2\pi/(n f''(\hat\theta))}$ and identify where regularity is used.
3. (Probability.) Show that for the Bernoulli model the posterior variance is
   $\hat p (1 - \hat p)/(n + \alpha + \beta)$, and compare to the Cramér–Rao
   bound.
4. (Functional analysis.) In the white noise model, show the eigenvalues of the
   covariance operator of the Gaussian prior on $H^\beta$ decay as $j^{-2\beta}$,
   and connect that to the contraction rate.
5. (Decision theory.) Under squared-error loss show the Bayes estimator is the
   posterior mean, and under BvM show it agrees with the MLE to order
   $O(n^{-1})$.

## See Also

- [Probability and Statistics](/8-probability-and-statistics/1_probability-spaces/)
  — the Tier-F probability background
- [Measure Theory](/10-measure-theory/2_measures/) — the integral the
  posterior is defined with
- [Functional Analysis](/11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces/)
  — Hilbert spaces in the white-noise model
- [How to Use These Notes](/how-to-use/) — the method
