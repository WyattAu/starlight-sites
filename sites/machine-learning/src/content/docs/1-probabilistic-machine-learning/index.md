---
date: 2026-10-18T00:00:00+01:00
title: Probabilistic Machine Learning
tags:
  - Machine Learning
  - University
description: "A fully rigorous course in probabilistic machine learning: measure-theoretic probability, decision theory, estimation, testing, Bayesian computation, variational inference, learning theory and Gaussian processes -- every theorem proved, every algorithm implemented."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}]
}
</script>

Most machine learning books are informal about probability. They state the bias–
variance decomposition without saying in which space the expectation is taken,
they use the central limit theorem without saying which mode of convergence it
delivers, and they prove nothing about the algorithms they recommend. This course
is the opposite of that. It is built on measure-theoretic probability, every
theorem is proved, every estimation procedure has its consistency or failure
stated, and every algorithm is implemented; in Python and R for analysis, and
in C++ where the implementation *is* the lesson.

The prerequisite is the measure theory in the
[mathematics site](https://mathematics.wyattau.com/10-measure-theory/), and the
reward is that nothing afterwards has to be taken on faith: the bias–variance
decomposition is an $L^2$ computation, consistency is convergence in probability,
and "the posterior concentrates" is a theorem with hypotheses that can fail.

## Intuition

Inference is the inverse of randomness. A probability model describes how data
is generated from parameters; inference runs it backwards. The reason this needs
measure theory is that "running it backwards" is only well posed when the objects
are measurable, the limits exist, and the approximations are quantified; and
each of those is a theorem.

The course is organised around one question asked at increasing depth: given a
model and data, what should you believe, and how do you compute it? Decision
theory answers it abstractly; estimation and testing answer it classically;
Bayesian inference answers it with a posterior; computation makes the answer
tractable; and learning theory asks whether any of it generalises to data you
have not seen.

## Course structure and dependencies

The order is linear by design; each page uses the previous page's theorems, and
skipping breaks the chain. Python and R examples run throughout; C++ appears
where the implementation is the lesson (Monte Carlo variance, the Gibbs sampler's
inner loop, the kernel trick's memory layout).

1. **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)** -
   probability spaces, random variables as measurable functions, expectation as
   a Lebesgue integral, the four modes of convergence and their implications,
   Borel–Cantelli, the laws of large numbers and the central limit theorem.
2. **Statistical decision theory**; loss, risk, admissibility, Bayes and
   minimax rules, sufficiency and the factorisation theorem, exponential
   families and why conjugacy is closure under sampling.
3. **Estimation theory**; unbiasedness and its limits, the Cramér–Rao bound
   from Cauchy–Schwarz, efficiency, maximum likelihood: consistency and
   asymptotic normality, the EM algorithm with its monotonicity proof.
4. **Hypothesis testing**; the Neyman–Pearson lemma, uniformly most powerful
   tests, likelihood ratio tests, what a $p$-value is and is not, confidence
   sets, the bootstrap.
5. **Bayesian inference and computation**; the posterior as the principal
   object, Bernstein–von Mises and when priors stop mattering, Metropolis–
   Hastings with its invariance proof, Gibbs sampling, Hamiltonian Monte Carlo,
   convergence diagnostics and why they can lie.
6. **Variational inference**; the ELBO from Jensen, mean-field and coordinate
   ascent, the relation to EM, when the approximation is and is not faithful.
7. **Statistical learning theory**; the PAC framework, VC dimension and
   Sauer's lemma, Rademacher complexity by symmetrisation, empirical risk
   minimisation, regularisation as constrained optimisation.
8. **Linear and generalised linear models**; least squares as orthogonal
   projection, Gauss–Markov, ridge and lasso as regularised ERM, GLMs through
   exponential families and iteratively reweighted least squares.
9. **Gaussian processes**; from finite-dimensional Gaussians to kernels,
   the RKHS view, posterior mean and variance as linear algebra, sparsity and
   the kernel trick in C++.
10. **Research frontier**; posterior contraction in nonparametrics, deep
    learning theory's open problems, conformal prediction and distribution-free
    validity.

## How to read the code

Every numerical claim in the course is checked by code that is shown. Python
(NumPy/SciPy) carries the analysis examples because the syntax stays out of the
way; R carries the statistical fitting examples because its formula interface and
reference implementations are the field's standard; C++ appears where the point
is the algorithm's mechanics; how a Gibbs sweep orders its updates, why a naive
Monte Carlo estimator has variance $O(1/n)$ while antithetic sampling halves the
constant, how the kernel trick avoids materialising the lifted features.

The code is written to be read, not run blind: each listing states what it
demonstrates and what the expected output is, so the reader can predict before
executing.

## Cross-References

- **[Measure Theory](https://mathematics.wyattau.com/10-measure-theory/)**; σ-algebras, the Carathéodory extension and $L^p$ spaces, assumed from page 1.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)**; the frequentist–Bayes bridge, proved on the mathematics site and used in page 5.
- **[The Fundamental Theorems](https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems/)**; Hilbert space geometry behind least squares and the kernel trick.
- **[Sobolev Spaces](https://mathematics.wyattau.com/11-functional-analysis/10_sobolev-spaces/)**; the regularity machinery behind nonparametric posterior contraction.
- [Statistical Learning](/statistical-learning/)
