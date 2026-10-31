---
date: 2026-10-18T00:00:00+01:00
title: Research Frontier
tags:
  - Machine Learning
  - University
description: "The research frontier of probabilistic machine learning: posterior contraction in nonparametrics, the deep learning theory problem, conformal prediction and distribution-free validity, causal inference -- the open questions, each stated with what is known and what is not."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "10_research-frontier", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/10_research-frontier"}]
}
</script>

Everything before this page is settled: theorems with proofs, algorithms with
guarantees, diagnostics with known failure modes. This page is the frontier —
four areas where the theory is being written now, each stated with what is
known, what is believed, and what is open. The difference between this page and
the previous nine is that here the results have *conditions that matter* and
*counterexamples that define the boundary*, and the reading is primary sources.

The honest framing: these are active areas, and any specific claim in this page
has a literature checking it. The page's job is to say what the question is and
why it is hard — not to hand down the current best answer as settled.

## Intuition

The nine pages built inference from i.i.d. data, a finite-dimensional parameter,
a well-specified model, and a loss fixed in advance. Every one of those four
assumptions is a frontier. Drop the finite dimension and you get nonparametric
Bayes, where posteriors contract at rates that depend on the prior's smoothness
and can fail entirely. Drop the well-specified model and you get misspecification,
where the posterior converges to a projection and the interval guarantees
change form. Drop the i.i.d. assumption and causality, distribution shift and
conformal prediction each become the subject.

The deep-learning question is the frontier of frontiers: networks with more
parameters than data points interpolate their training set and generalise well,
which contradicts the classical capacity theory of
[page 7](/1-probabilistic-machine-learning/7_statistical-learning-theory/) — and
nobody has a complete account of why.

## 1. Posterior contraction in nonparametric Bayes

The finite-dimensional theory says the posterior contracts at rate
$n^{-1/2}$ — the Bernstein–von Mises theorem of the
[mathematics site](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/).
In infinite dimensions the rate depends on the prior's smoothness relative to
the truth's, and the failure modes are sharp.

**What is known.** For density estimation with a Gaussian-process or
spline prior, the posterior contracts at the minimax rate when the prior's
smoothness matches or exceeds the truth's (Ghosal and van der Vaart's
programme). For Gaussian priors in white-noise models, contraction at the right
rate holds — but the *shape* can be wrong: Freedman (1999) constructed a
nonparametric normal-means problem where the posterior concentrates near the
truth yet its credible intervals under-cover badly, because the posterior's
mass spreads along directions the data barely constrains. Cox (1993) and
Diaconis–Freedman (1986) are the earlier warnings; the modern resolution is
priors adapted to the truth's smoothness (Szabó, van der Vaart and van Zanten)
and honest adaptive credible sets (Bull; Nickl and Szabó).

**Why it is hard.** The Bernstein–von Mises theorem's proof needed a tail
estimate — Step 4 on the mathematics page — and in infinite dimensions the
prior's tail behaviour *is* the rate: a Gaussian prior with length scale $\ell$
places its mass on functions with $\ell$ derivatives, and if the truth is rougher
the posterior's bias term dominates. There is no dimension-free version of the
theorem, and the conditions are conditions on the *interaction* of the prior
with the truth, not on the prior alone.

**The open part.** Adaptive guarantees — credible sets that achieve honest
coverage without knowing the truth's smoothness — exist for some prior
families and fail for others, with impossibility results (Hoffmann and Nickl)
marking exactly where adaptation is free and where it must be paid for. The
boundary is still being mapped.

## 2. The deep learning theory problem

Classical theory [page 7](/1-probabilistic-machine-learning/7_statistical-learning-theory/)
bounds the generalisation gap by capacity: a class with VC dimension $d$ needs
$n \gg d$ samples. Deep networks routinely have parameters outnumbering samples
by orders of magnitude, fit the training set to zero error — *interpolate* — and
generalise better than smaller regularised networks on the same data. Every
term of that sentence contradicts the classical bound's mechanism.

**What is known.** Classical capacity cannot be the whole story, because it is
data-independent and the phenomenon is data-dependent. Three partial accounts:

- **Implicit regularisation of gradient descent.** The optimiser is not a
  neutral ERM solver: gradient descent on overparameterised networks converges
  to particular interpolating solutions — low-norm, flat-minimum ones — and the
  bias is implicit in the dynamics, not in an explicit penalty. The
  neural tangent kernel regime, where the network behaves like a kernel
  regressor, is the limit where this is fully proved.
- **Double descent.** The test error as a function of model size rises through
  the interpolation threshold, peaks, and *falls again* as the model grows
  further — a second descent that the U-curve of bias–variance does not predict,
  now reproduced across model classes, with the peak's location understood in
  linear models and open in general.
- **Benign overfitting.** Bartlett, Long, Lugosi and Tsigler's analysis of
  linear regression identifies exactly which spectra of the data covariance
  allow interpolation without generalisation harm — the variance contributed by
  the interpolating directions is bounded by their small effective dimension.
  The linear case is settled; the nonlinear case is where the frontier is.

**The open part.** There is no theory that predicts, before training, which
overparameterised network will generalise. Every existing account is
asymptotic, linearised, or specific to an architecture. The theory-practice gap
here is the largest in the field.

## 3. Conformal prediction

The preceding pages' uncertainty is model-based: credible intervals need a
prior and a correct model, confidence intervals need asymptotics and smoothness.
**Conformal prediction** delivers distribution-free valid prediction sets under
one assumption: the data are exchangeable.

**The theorem-level statement.** Given a calibration set of exchangeable pairs
and any scoring function — however arbitrary, however fitted — define the
prediction set at level $\alpha$ as $\{y : s(x, y) \leq \hat q_\alpha\}$ where
$\hat q_\alpha$ is the $1 - \alpha$ quantile of the calibration scores. Then
$P(y_{\text{new}} \in \text{set}) \geq 1 - \alpha$, *exactly*, for any
underlying distribution and any fitted scorer.

*Why it works (the exchangeability argument).* Under exchangeability, the rank
of the new point's score among the calibration-plus-new scores is uniform on
$\{1, \dots, n+1\}$ — the same argument as a permutation test, whose null
distribution is exact by symmetry rather than by asymptotics. No model, no
asymptotics, no smoothness: the validity is combinatorial.

**The catch.** Validity is guaranteed; *efficiency* — how small the sets are —
is not, and depends on the scoring function. A constant scorer is valid and
useless. The research question is efficiency: how to choose scores that are
valid *and* small, how to make them conditional on input features (marginal
coverage can hide severe under-coverage on subgroups), and how to extend beyond
exchangeability to time series and distribution shift, where the guarantee
degrades quantifiably rather than vanishing.

## 4. Causal inference

Prediction and causal effect are different quantities. The observation that
umbrella-carrying predicts rain does not make umbrellas cause rain; a model
trained on observational data answers $P(Y \mid X)$, while interventions ask
$P(Y \mid \mathrm{do}(X))$ — and the two differ whenever a confounder influences
both.

**What is known.** Randomised experiments identify causal effects by breaking
the confounding. Observational identification requires assumptions with
graphical and potential-outcomes formalisations: back-door adjustment (control
for a sufficient set of confounders), front-door adjustment (mediate through an
observed pathway), and instrumental variables (an exogenous shifter of the
treatment). The do-calculus (Pearl) is a complete calculus for deciding *when*
a causal effect is identifiable from a given causal graph — a theorem, not a
heuristic.

**Why it is on the frontier.** Machine learning's success is predictive, and
the field's hardest failures are causal questions asked of predictive models:
distribution shift is a causal event, fairness questions are causal questions
("does the model discriminate *because of* the protected attribute"), and
off-policy evaluation in reinforcement learning is causal inference under
another name. The modern frontier is combining the two: causal assumptions
making machine learning targets identifiable, and machine learning making
high-dimensional causal estimators feasible (double/debiased machine learning,
which uses page 3's Neyman orthogonality to let flexible ML models estimate
nuisance functions without contaminating the causal parameter).

## 5. How to read this area

- **Primary sources, and check the conditions.** Every claim above has
  hypotheses; the frontier lives in the hypotheses. A result stated without its
  conditions is a headline.
- **Counterexamples define fields.** Freedman's posterior, the Hopf surface in
  Kähler geometry, the two-chain MCMC failure: each boundary of an area is
  marked by a construction, and knowing the constructions is knowing the field.
- **Impossibility results are results.** Hoffmann–Nickl's no-free-adaptation
  and the no-free-lunch theorems are as load-bearing as the positive results —
  they say where not to look.
- **Reproduce before believing.** The course's code checked every theorem;
  frontier claims deserve the same treatment, and the tools (simulation,
  synthetic ground truth) are exactly the ones this course built.

## Cross-References

- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)** — the finite-dimensional result whose infinite-dimensional failure opens §1.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)** — the capacity theory the deep-learning problem stress-tests.
- **[Sobolev Spaces](https://mathematics.wyattau.com/11-functional-analysis/10_sobolev-spaces/)** — the smoothness scale in which contraction rates are stated.
- **[Hypothesis Testing](/1-probabilistic-machine-learning/4_hypothesis-testing/)** — the permutation argument, of which conformal validity is a corollary.
- **[Variational Inference](/1-probabilistic-machine-learning/6_variational-inference/)** — scalable approximate inference, the enabling technology for nonparametric Bayes.
