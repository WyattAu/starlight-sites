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

## Proof of the Bernstein–von Mises theorem

The proof is worth reading because its machinery — local asymptotic normality,
contiguity — is the same machinery every modern result in this area is proved
with: contraction rates, the misspecified version below, and the
high-dimensional $k_n^5/n \to 0$ condition are all proved by running the same
argument with harder estimates inside it.

Write it in one dimension. The $k$-dimensional case is identical with
$I(\theta_0)$ a matrix and $\Delta_n$ a vector; only the notation is heavier.

**Step 1: local asymptotic normality.** Reparametrise to the *local* parameter
$h = \sqrt{n}(\theta - \theta_0)$ and expand the log-likelihood ratio about
$\theta_0$:

$$
\log\frac{p_{\theta_0 + h/\sqrt{n}}^{(n)}(X)}{p_{\theta_0}^{(n)}(X)}
= \frac{h}{\sqrt{n}} \sum_{i=1}^n \dot\ell_{\theta_0}(X_i)
- \frac{h^2}{2} I(\theta_0) + R_n,
$$

where $\dot\ell_\theta = \partial_\theta \log p_\theta$ and $R_n \to 0$ in
probability, uniformly in $h$ in compacts. This is the LAN condition. The two
main terms are the *score at scale* $\Delta_n = \frac{1}{\sqrt n}\sum_i
\dot\ell_{\theta_0}(X_i)$ and a deterministic quadratic penalty $-h^2 I/2$.
Smoothness of $p_\theta$ and finiteness of $I(\theta_0)$ give it by Taylor's
theorem; the content of the hypothesis "regular model" is that $R_n$ is
controlled.

**Step 2: what LAN says about the likelihood ratio.** Define

$$
Z_{n,h} = \frac{p_{\theta_0 + h/\sqrt{n}}^{(n)}(X)}{p_{\theta_0}^{(n)}(X)}.
$$

By Step 1, $Z_{n,h} = \exp(h\Delta_n - \tfrac{1}{2}h^2 I + R_n)$. Under
$P_{\theta_0}$, $\Delta_n \Rightarrow N(0, I)$ by the ordinary CLT, and the
map $h \mapsto Z_{n,h}$ is asymptotically the *likelihood ratio of a Gaussian
shift experiment*: an experiment in which one observes $\Delta = h + \text{noise}$
with $\text{noise} \sim N(0, I)$. That is what "local asymptotic normality"
means, and it is why the normal shows up on both sides of the theorem.

**Step 3: rewrite the posterior in the local parameter.** The posterior density
of $h$ given $X$, at the true $\theta_0$, is proportional to

$$
\pi\!\left(\theta_0 + \frac{h}{\sqrt n}\right)
\frac{1}{\sqrt n}\,p_{\theta_0 + h/\sqrt n}^{(n)}(X),
$$

and dividing through by the value at $h = 0$ turns it into

$$
\frac{\pi(\theta_0 + h/\sqrt n)}{\pi(\theta_0)} \cdot Z_{n,h}.
$$

Both factors are now under control: the prior factor is bounded, and tends to
$1$ uniformly on compacts by continuity of $\pi$ at $\theta_0$; and $Z_{n,h}$ is
the LAN expression from Step 2. This is the whole reason the theorem needs the
prior to be *positive and continuous at $\theta_0$* — positivity keeps the
normalising constant from vanishing, and continuity makes the prior factor
asymptotically constant, which is exactly the sense in which the prior drops out.

**Step 4: the main estimate.** One shows that for every $\varepsilon > 0$,

$$
\int_{|h| > \varepsilon\sqrt n}
\frac{\pi(\theta_0 + h/\sqrt n)}{\pi(\theta_0)}
Z_{n,h} \, dh \xrightarrow{P} 0.
$$

This is the *only* genuinely hard estimate in the proof, and it is where
consistency is spent. Outside a neighbourhood of $\theta_0$ the likelihood ratio
decays exponentially, by Schwartz's test condition — the same condition that
gave posterior consistency in the section above. The theorem is not independent
of consistency; it is consistency plus a local Gaussian approximation.

**Step 5: the characteristic function.** For the *total variation* statement
claimed, it suffices to prove convergence of characteristic functions on the
local parameter, since the tails are already handled in Step 4. For
$t \in \mathbb{R}$,

$$
\mathbb{E}\!\left[\left.e^{itH_n}\right| X\right]
= \frac{\displaystyle\int e^{ith} Z_{n,h}\,dh}
{\displaystyle\int Z_{n,h}\,dh}
\qquad \text{with } H_n = \sqrt n(\theta - \theta_0),
$$

and substituting the LAN form of $Z_{n,h}$:

$$
= \frac{\displaystyle\int e^{ith}\,
e^{h\Delta_n - h^2 I/2}\,dh}
{\displaystyle\int e^{h\Delta_n - h^2 I/2}\,dh}
\;\longrightarrow\;
\frac{\displaystyle\int e^{ith}\,e^{-I(h - \Delta/I)^2/2}\,dh}
{\displaystyle\int e^{-I(h-\Delta/I)^2/2}\,dh}
= e^{it\Delta/I}\, e^{-t^2/(4I)},
$$

the characteristic function of $N(\Delta/I, 1/(2I))$. Since
$\Delta_n/I \Rightarrow N(0, 1/I)$ under $P_{\theta_0}$, and the credible
interval endpoints are continuous functionals of this Gaussian, the rescaled
posterior converges in distribution — and by the usual lifting from weak to
total variation for measures with densities bounded as in Step 4, in total
variation:

$$
\sup_h \left| \Pi_n\big(h \le \sqrt n(\theta-\theta_0) \mid X\big) - \Phi_{1/I}(h) \right| \xrightarrow{P} 0.
$$

Replace $1/I$ by $I(\theta_0)^{-1}$ and $\theta_0$ by any consistent
$\hat\theta_n$ to get the stated form. $\blacksquare$

**What each hypothesis bought.** Smoothness and finite information gave LAN in
Step 1. Prior continuity made the prior drop out in Step 3. Positivity of the
prior kept the denominator alive. Schwartz's conditions did the work in Step 4,
which is why the theorem is stated for a *consistent* model: BvM is not an
addition to consistency but a refinement of it. And contiguity — the only tool
not yet named — is what licenses transferring statements between
$P_{\theta_0+h/\sqrt n}$ and $P_{\theta_0}$, which is what makes the local
argument legitimate.

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
