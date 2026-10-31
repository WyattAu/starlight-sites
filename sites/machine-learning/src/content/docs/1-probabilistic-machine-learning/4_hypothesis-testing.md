---
date: 2026-10-18T00:00:00+01:00
title: Hypothesis Testing
tags:
  - Machine Learning
  - University
description: "Hypothesis testing from first principles: the Neyman-Pearson lemma with proof, uniformly most powerful tests, likelihood ratio tests, what a p-value is and is not, the duality between tests and confidence sets with proof, and the bootstrap."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "4_hypothesis-testing", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/4_hypothesis-testing"}]
}
</script>

A/B test results arrive with a $p$-value; a regulator asks for "statistical
significance"; a paper claims an effect is "not significant, therefore absent".
All three usages rest on a definition that is usually misstated. This page
defines testing precisely, proves the theorem that determines when a test is
optimal, and derives confidence sets from tests by duality; so the $p$-value's
meaning can be *read off a definition* rather than remembered wrongly.

The prerequisite is [decision
theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/): a
test is a decision rule whose action space has two elements, and its errors are
priced by two risks that cannot be minimised simultaneously.

## Intuition

A test is a filter with two failure modes. Reject a true hypothesis; the
**false positive**; or fail to reject a false one; the **false negative**.
The Neyman–Pearson framework fixes the false-positive rate by design (the
significance level) and then asks for the test that minimises false negatives.
That inversion is the whole intellectual move: you do not choose a test that is
"good overall"; you choose the error rate you can afford and then demand
optimality subject to it.

## 1. The framework

**Definition.** A **hypothesis test** specifies a null $H_0: \theta \in \Theta_0$, an alternative $H_1: \theta \in \Theta_1$, and a **rejection region**
$R \subseteq \mathcal{X}$: reject $H_0$ iff $X \in R$.

**Definition.** The **size** of the test is
$\alpha = \sup_{\theta \in \Theta_0} P_\theta(X \in R)$; the worst-case false
positive rate under the null. The **power** at $\theta \in \Theta_1$ is
$\pi(\theta) = P_\theta(X \in R)$.

Two properties, and the whole subject is their trade-off. Size controls how
often the filter cries wolf; power measures how often it catches the signal.
Both depend on $\theta$, and a test with good power at one alternative can be
blind at another.

**Definition.** A test is **uniformly most powerful (UMP)** at level $\alpha$ if
it has size at most $\alpha$ and its power is at least that of every other
level-$\alpha$ test, for every $\theta \in \Theta_1$.

## 2. The Neyman–Pearson lemma

**Theorem (Neyman–Pearson).** For testing the simple null
$H_0: \theta = \theta_0$ against the simple alternative $H_1: \theta = \theta_1$,
the test that rejects when the likelihood ratio
$\Lambda(x) = \frac{p_{\theta_1}(x)}{p_{\theta_0}(x)} > k$; with randomisation
on the boundary $\Lambda = k$ to hit the level exactly; is most powerful among
all level-$\alpha$ tests.

*Proof.* Let $R^* = \{\Lambda > k\}$ be the likelihood-ratio region, with
$P_{\theta_0}(R^*) = \alpha$ (choosing $k$ and the boundary randomisation to make
this hold). Let $R$ be any other region with $P_{\theta_0}(R) \leq \alpha$. Then

$$
P_{\theta_1}(R) - P_{\theta_1}(R^*) = \int_{\mathcal{X}} \mathbf{1}_R\, p_{\theta_1}
- \int_{\mathcal{X}} \mathbf{1}_{R^*}\, p_{\theta_1}
= \int (\mathbf{1}_R - \mathbf{1}_{R^*})\,p_{\theta_1}.
$$

On $R \setminus R^*$ we have $\Lambda \leq k$, so
$p_{\theta_1} \leq k\,p_{\theta_0}$; on $R^* \setminus R$, $\Lambda > k$, so
$p_{\theta_1} > k\,p_{\theta_0}$. Splitting the integral on those two parts:

$$
P_{\theta_1}(R) - P_{\theta_1}(R^*)
\leq k\int_{R\setminus R^*} p_{\theta_0} - k\int_{R^*\setminus R} p_{\theta_0}
= k\Big(P_{\theta_0}(R \setminus R^*) - P_{\theta_0}(R^* \setminus R)\Big)
= k\big(P_{\theta_0}(R) - P_{\theta_0}(R^*)\big) \leq 0,
$$

using $P_{\theta_0}(R) \leq \alpha = P_{\theta_0}(R^*)$. Hence
$P_{\theta_1}(R^*) \geq P_{\theta_1}(R)$ for every competing level-$\alpha$ $R$.
$\blacksquare$

The proof is one inequality applied twice, and the structure to remember is:
*the likelihood ratio orders the evidence, and the optimal test is a threshold
on that order.* Everything else in testing; LRTs, score tests, Wald tests,
most of applied practice; is the attempt to use this test when $\theta_1$ is
not a single point.

**Corollary (UMP for one-sided alternatives).** For one-parameter exponential
families with $\eta(\theta)$ increasing; the normal with known variance,
Bernoulli, Poisson; the test rejecting for large $\bar X$ is UMP for
$H_0: \theta \leq \theta_0$ against $H_1: \theta > \theta_0$.

*Why UMP fails for two-sided alternatives.* Consider the normal with known
$\sigma$, testing $H_0: \theta = \theta_0$ against $\theta \neq \theta_0$. The
Neyman–Pearson most powerful test against the specific alternative
$\theta_1 > \theta_0$ rejects for large $\bar X$; against $\theta_1 < \theta_0$
it rejects for small $\bar X$. A two-sided test must spend its $\alpha$ on both
tails and is therefore *less powerful than either one-sided test against that
side's alternative*; so no UMP test exists. The demand "most powerful against
everything" is unmeetable, and unbiasedness or invariance are the standard
restrictions that restore existence.

## 3. Likelihood ratio tests

For composite hypotheses, the practical test is the **likelihood ratio test**:
reject for small values of

$$
\lambda(x) = \frac{\sup_{\theta \in \Theta_0} p_\theta(x)}
{\sup_{\theta \in \Theta} p_\theta(x)}.
$$

**Theorem (Wilks).** Under regularity, when $H_0$ is true and specifies $r$
constraints, $-2\log\lambda(x) \xrightarrow{d} \chi^2_r$.

*Proof sketch.* Write $\hat\theta$ for the unrestricted MLE and
$\hat\theta_0$ for the constrained one. Taylor-expanding the log-likelihood
about $\hat\theta$ and using that the score vanishes at the MLE:

$$
-2\log\lambda = 2\big(\ell(\hat\theta) - \ell(\hat\theta_0)\big)
\approx (\hat\theta - \hat\theta_0)^{\!\top} I(\hat\theta)\,(\hat\theta - \hat\theta_0)\,\sqrt{}\,,
$$

with $I$ the Fisher information matrix, and $\hat\theta - \hat\theta_0$ is
asymptotically Gaussian with covariance the inverse information on the
constrained coordinates. The quadratic form then converges to a chi-squared with
$r$ degrees of freedom by the definition of the multivariate normal's quadratic
form. $\blacksquare$

Wilks' theorem is the reason a single table serves every likelihood ratio test:
the null distribution of the test statistic is asymptotically
parameter-free. The same asymptotic chi-squared appears for the Wald test
(based on $\hat\theta - \theta_0$) and the score test (based on
$\ell'(\theta_0)$), all three asymptotically equivalent; they differ in
finite samples and in which computation they require.

## 4. What a $p$-value is

**Definition.** For observed data $x$, the $p$-value of the test statistic $T$
against $H_0$ is

$$
p(x) = \sup_{\theta \in \Theta_0} P_\theta\big(T(X) \geq T(x)\big),
$$

the probability, computed under the *least favourable null parameter*, of
seeing a result at least as extreme as the one observed.

Read the definition against the common errors:

- A $p$-value is **not** the probability that $H_0$ is true. $\theta$ is fixed,
  not random, in the supremum; no probability statement about $\theta$ is being
  made. (That statement is a posterior, and needs a prior; page 5.)
- A $p$-value is **not** the probability of the result being "due to chance".
  It is a tail probability under a model.
- A large $p$-value is **not** evidence for $H_0$. The test was designed so that
  large $p$-values occur under $H_0$ with high probability; failing to reject is
  the designed *default*, not a finding. Absence of evidence is not evidence of
  absence; and quantifying the latter requires power analysis, not the
  $p$-value.
- A $p$-value is **not** a measure of effect size. A tiny $p$-value with a huge
  $n$ accompanies a negligible effect; the effect size and its interval are the
  scientific content.

**Why the threshold is a design decision.** $\alpha = 0.05$ is a convention,
and its meaning is "we accept a 1-in-20 false positive rate". A field testing
thousands of hypotheses at $\alpha = 0.05$ expects $5\%$ of its true-null
results to be "significant"; the multiple-testing problem, whose fixes (Bonferroni,
false discovery rate control) are corrections to *this* design decision.

## 5. Confidence sets by duality

**Theorem (test–confidence duality).** For each $\theta_0$, let
$R(\theta_0)$ be the acceptance region of a level-$\alpha$ test of
$H_0: \theta = \theta_0$. Then

$$
C(X) = \{\theta_0 : X \notin R(\theta_0)\}
$$

is a $1 - \alpha$ **confidence set**: $P_\theta(\theta \in C(X)) \geq 1 - \alpha$ for every $\theta$.

*Proof.* Fix $\theta$ and let $x$ be observed. Then

$$
P_\theta\big(\theta \in C(X)\big)
= 1 - P_\theta\big(\theta \notin C(X)\big)
= 1 - P_\theta\big(X \in R(\theta)\big)
\geq 1 - \alpha,
$$

the last step being exactly the size condition of the test at $\theta_0 = \theta$. $\blacksquare$

The duality is not an analogy: a confidence set *is* the set of parameter values
that would not be rejected by the corresponding test. "The 95% interval for the
mean" and "the mean values the 5% test accepts" are the same object; which is
why inverting a two-sided $z$-test gives the familiar
$\bar X \pm z_{0.975}\sigma/\sqrt n$.

**What the coverage statement means.** $P_\theta(\theta \in C(X)) \geq 1-\alpha$
is a probability over *repeated draws of $X$* at fixed $\theta$. For the
observed $x$, the realised set $C(x)$ either contains $\theta$ or does not -
there is no probability left. Reporting "there is a 95% chance the true value is
in this interval" commits the very error the definition forbids; the correct
reading is "this procedure covers 95% of the time it is used".

## 6. The bootstrap

When the null distribution of $T$ is intractable, resample. The **bootstrap**
draws $B$ resamples of size $n$ *with replacement* from the observed data,
computes $T$ on each, and uses the empirical distribution of the $T$-values in
place of the unknown null distribution.

*Why it works (one sentence, honestly).* The empirical distribution converges
uniformly to the true one at rate $n^{-1/2}$ by the Glivenko–Cantelli theorem,
so the plug-in distribution of $T$ converges to the true distribution of $T$ -
with the bootstrap's error one order of $n^{-1/2}$ smaller than the naive
normal approximation for smooth statistics.

The bootstrap is not a free lunch: it fails for extremes (maxima), for heavy
tails where the mean is unstable, and for statistics that depend on the
underlying density's smoothness. It is an approximation to the sampling
distribution, and it inherits every hypothesis of the estimator being
resampled.

## 7. The code: the Neyman–Pearson structure, then a bootstrap

**Python; the UMP test's exact power, against its normal approximation.**

```python
import numpy as np
from scipy import stats

rng = np.random.default_rng(2026)
n, alpha = 40, 0.05

# H0: theta = 0.5  vs  H1: theta > 0.5, Bernoulli.
# UMP test: reject for large sum(X). Exact level from the Binomial null.
crit = stats.binom.isf(alpha, n, 0.5)
print(f"rejection region: sum > {crit}  (exact level "
      f"{stats.binom.sf(crit, n, 0.5):.4f})")

# Exact power at a range of alternatives -- binomial, not normal.
for th in [0.5, 0.6, 0.7, 0.8]:
    power = stats.binom.sf(crit, n, th)
    normal = 1 - stats.norm.cdf((crit + 0.5 - n*th) / np.sqrt(n*th*(1-th)))
    print(f"theta = {th:.1f}: exact power = {power:.4f}, "
          f"normal approx = {normal:.4f}")
# The normal approximation is good near theta = 0.5 and degrades toward
# the boundary theta = 1 -- where the binomial is most skewed.
```

**R; a permutation test, the bootstrap's sibling.**

```r
set.seed(2026)
a <- c(12.9, 13.5, 12.8, 15.6, 17.2, 19.2, 12.6, 15.3, 14.4, 11.3)
b <- c(12.7, 13.6, 12.0, 15.2, 16.8, 20.0, 12.0, 15.9, 16.0)
observed <- mean(b) - mean(a)

# Permute group labels: under H0 the labels are exchangeable, so the
# permutation distribution of the difference IS its null distribution.
diffs <- replicate(20000, {
  z <- sample(c(a, b)); mean(z[1:length(a)]) - mean(z[-(1:length(a))])
})
p_perm <- mean(abs(diffs) >= abs(observed))
p_t    <- t.test(b, a)$p.value
cat(sprintf("permutation p = %.4f   t-test p = %.4f\n", p_perm, p_t))
# The two agree closely: for near-normal data the t-test is the parametric
# shadow of the permutation test -- and the permutation test makes no
# normality assumption at all.
```

## Common Pitfalls

- **Stating the alternative after seeing the data.** The level $\alpha$ is a
  guarantee under the null *for a pre-registered test*; switching the tail or
  the hypothesis after looking doubles or triples the realised false positive
  rate.
- **Believing "not significant" means "no effect".** It means the test did not
  reject. Report the confidence interval: a $[-0.1, 0.1]$ interval and a
  $[-100, 100]$ interval are both non-significant at the same data size, and
  they are scientifically opposite findings.
- **Confusing the p-value with the posterior.** $p = P(T \geq T(x) \mid H_0)$;
  the quantity a decision-maker wants is $P(H_0 \mid x)$, which requires a prior
  and Bayes' rule. The two are related through a base rate the $p$-value knows
  nothing about.
- **Repeating the test as data accumulates.** Each peek is a fresh 5% chance;
  testing at every interim doubles the realised level to roughly 8% at two
  peeks and 14% at five. Sequential designs exist and are the fix.
- **Bootstrapping maxima, or heavily skewed estimators, without thought.** The
  bootstrap's guarantee is for smooth statistics of a distribution it can
  approach; outside that regime the error order degrades.

## Cross-References

- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)**; the zero–one loss of which size and power are the two coordinates.
- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)**; the binomial and normal laws the tests run on.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)**; the MLE whose likelihood ratio Wilks' theorem asymptotics.
- **[Bayesian Inference and Computation](/1-probabilistic-machine-learning/5_bayesian-inference-and-computation/)**; the posterior, which answers the question the $p$-value cannot.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)**; generalisation bounds as multiple-testing corrections.
