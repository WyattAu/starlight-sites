---
date: 2026-01-01T00:00:00Z
title: "Estimation and Hypothesis Testing"
description: "Estimation and hypothesis testing: maximum likelihood, the Fisher information and the Cramer-Rao bound, confidence intervals, the Neyman-Pearson lemma, likelihood ratio tests, p-values and what they do not mean, and the standard tests. Built on the probability track and leading to the Bernstein-von Mises theorem. With recall prompts, counterexamples by name and interleaving problems. Tier U-A."
tags:
  - Mathematics
  - University
  - Statistics
categories:
  - Mathematics
---

## Estimation and Hypothesis Testing

**Tier: U-A.** Builds on [Probability
Spaces](/8-probability-and-statistics/1_probability-spaces/), [Random
Variables](/8-probability-and-statistics/2_random-variables/) and [Limit
Theorems](/8-probability-and-statistics/4_limit-theorems/).

## Recall prompts

Attempt these from memory *before* reading.

- Write down the likelihood function for an iid sample. How does it differ from
  the joint density?
- State the Cramer-Rao bound. What does the Fisher information measure?
- What is a p-value? Give the definition, not the popular one.
- What does the Neyman-Pearson lemma say is the best test, and best at what?
- In the t-test, what replaces the known variance, and what does that cost?

Check your answers against the text. Prompt 3 is the one worth being strict
about: a p-value is the probability of data at least this extreme *given that
the null hypothesis is true*, and every common misreading swaps the
conditional.

## Motivation: statistics is the inverse problem

Probability takes a model and says what data should look like. Statistics runs
it backwards: given the data, what is the model? That inversion is why
statistics is harder than probability, and why its answers come with
uncertainties attached.

Two questions dominate. **Estimation**: what is the parameter? **Testing**: is
the parameter in some set? They look like the same question with different
grammar, and much of the subject is about how they differ.

Maximum likelihood is the standard answer to the first, and its justification
is asymptotic: as the sample grows, the MLE is consistent, asymptotically
normal, and achieves the Cramer-Rao bound. Those three properties are theorems
with conditions, and the conditions are where the method breaks.

Hypothesis testing is where the subject's most misunderstood object lives. A
p-value is the probability of data at least as extreme as observed, *assuming
the null hypothesis*. It is not the probability that the null is true, and it
is not the probability that the result happened by chance. The distinction is
not pedantry: it is the difference between $P(\text{data} \mid H_0)$ and
$P(H_0 \mid \text{data})$, and they are related by Bayes' theorem with a
factor for the prior that the p-value does not contain.

**Why the two are the same problem in disguise.** A likelihood ratio test at
level $\alpha$ is a rule whose rejection region has probability $\alpha$
under the null; a confidence interval is the set of parameter values that
would not be rejected. Invert the test and you get the interval. That duality
is the cleanest thing in the subject and the reason the two chapters are one
page.

## 1. Estimation by Maximum Likelihood

### 1.1 The Likelihood Function

Given i.i.d. Observations $x_1, \ldots, x_n$ from a distribution with parameter $\theta$ The
**likelihood function** is

$$
L(\theta) = \prod_{i=1}^n f(x_i \mid \theta)
$$

And the **log-likelihood** is

$$
\ell(\theta) = \log L(\theta) = \sum_{i=1}^n \log f(x_i \mid \theta)
$$

### 1.2 The Maximum Likelihood Procedure

The **maximum likelihood estimator** (MLE) $\hat{\theta}_{\mathrm{MLE}}$ maximises $L(\theta)$
(equivalently, $\ell(\theta)$):

$$
\hat{\theta}_{\mathrm{MLE} = \arg\max_\theta L(\theta)}
$$

found by solving $\ell'(\theta) = 0$ and verifying $\ell''(\hat{\theta}) \lt 0$.

### 1.3 Properties of Maximum Likelihood Estimators

**Theorem 7.1 (Consistency, Sketch).** Under regularity conditions,
$\hat{\theta}_{\mathrm{MLE} \xrightarrow{p} \theta_0}$ (the true parameter).

_Proof sketch._ By the law of large numbers,
$\frac{1}{n}\ell(\theta) \xrightarrow{p} E_{\theta_0}[\log f(X \mid \theta)]$ For each $\theta$. The
Kullback-Leibler divergence
$D(\theta_0 \| \theta) = -E_{\theta_0}[\log f(X \mid \theta)] + E_{\theta_0}[\log f(X \mid \theta_0)]$
is minimised (at zero) when $\theta = \theta_0$ by the information inequality. Therefore the
maximiser of $\ell(\theta)$ converges in probability to $\theta_0$.

**Theorem 7.2 (Asymptotic Normality).** Under regularity conditions:

$$
\sqrt{n}(\hat{\theta}_{\mathrm{MLE} - \theta_0) \xrightarrow{d} N\left(0, \frac{1}{I(\theta_0)}\right)}
$$

Where $I(\theta_0)$ is the **Fisher information**.

### 1.4 Fisher Information and the Cramer-Rao Bound

**Definition.** The **Fisher information** for a single observation is

$$
I(\theta) = E\left[\left(\frac{\partial}{\partial \theta} \log f(X \mid \theta)\right)^2\right] = -E\left[\frac{\partial^2}{\partial \theta^2} \log f(X \mid \theta)\right]
$$

Provided the interchange of differentiation and integration is valid.

**Theorem 7.3 (Cramer-Rao Lower Bound).** For any **unbiased** estimator $T$ of $\theta$:

$$
\mathrm{Var}(T) \geq \frac{1}{n\, I(\theta)}
$$

_Intuition._ The Cramer-Rao bound gives a theoretical minimum for the variance of any unbiased
estimator. An Estimator that achieves this bound is called **efficient**.

**Example 7.1.** For $X \sim N(\mu, \sigma^2)$ with $\sigma^2$ known, the Fisher information about
$\mu$ is $I(\mu) = 1/\sigma^2$. The MLE $\hat{\mu} = \bar{X}$ has
$\mathrm{Var}(\bar{X}) = \sigma^2/n = 1/(n \cdot I(\mu))$ So the sample mean achieves the Cramer-Rao
bound and is efficient.

### 1.5 Confidence Intervals

**Definition.** A $100(1 - \alpha)\%$ **confidence interval** for $\theta$ is a random interval
$[L, U]$ such that

$$
P_\theta(L \leq \theta \leq U) = 1 - \alpha
$$

**Theorem 7.4.** Under the asymptotic normality of the MLE, an approximate $100(1-\alpha)\%$
confidence interval For $\theta$ is

$$
\hat{\theta} \pm z_{\alpha/2} \cdot \frac{1}{\sqrt{n\, I(\hat{\theta})}}
$$

Where $z_{\alpha/2} = \Phi^{-1}(1 - \alpha/2)$.

**Example 7.2.** For $X_1, \ldots, X_n \sim N(\mu, \sigma^2)$ with $\sigma$ known, the exact
$100(1-\alpha)\%$ Confidence interval for $\mu$ is:

$$
\bar{X} \pm z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}}
$$

When $\sigma$ is unknown, replace $\sigma$ with $S$ and $z_{\alpha/2}$ with $t_{n-1, \alpha/2}$:

$$
\bar{X} \pm t_{n-1, \alpha/2} \cdot \frac{S}{\sqrt{n}}
$$

**Theorem 7.5 (Wald Confidence Interval).** For a scalar parameter $\theta$ with MLE $\hat{\theta}$
satisfying Asymptotic normality, the **Wald confidence interval** is

$$
\hat{\theta} \pm z_{\alpha/2}\, \widehat{\mathrm{SE}(\hat{\theta})}
$$

Where $\widehat{\mathrm{SE}(\hat{\theta}) = 1/\sqrt{n\, I(\hat{\theta})}}$ is the estimated standard
error.

**Problem 7.4.** In a survey of 400 people, 220 support a policy. Construct a 95% confidence
interval for the True proportion $p$.

<details>
<summary>Solution</summary>

$\hat{p} = 220/400 = 0.55$. For a Bernoulli: $I(p) = 1/[p(1-p)]$ So
$\widehat{\mathrm{SE} = \sqrt{\hat{p}(1 - \hat{p})/n}
= \sqrt{0.55 \times 0.45 / 400} = \sqrt{0.000619} \approx 0.02488}$.

$$
95\%\, \mathrm{CI}: 0.55 \pm 1.96 \times 0.02488 = 0.55 \pm 0.0488 = (0.501, 0.599)
$$

</details>

### 1.6 Worked Examples

**Problem 7.1.** Find the MLE for $\lambda$ given i.i.d. Observations $x_1, \ldots, x_n$ from
$\mathrm{Exp}(\lambda)$.

<details>
<summary>Solution</summary>

$$
L(\lambda) = \prod_{i=1}^n \lambda e^{-\lambda x_i} = \lambda^n e^{-\lambda \sum x_i}
$$

$$
\ell(\lambda) = n \log \lambda - \lambda \sum_{i=1}^n x_i
$$

$$
\frac{d\ell}{d\lambda} = \frac{n}{\lambda} - \sum_{i=1}^n x_i = 0 \implies \hat{\lambda} = \frac{n}{\sum x_i} = \frac{1}{\bar{x}}
$$

Verify: $\frac{d^2\ell}{d\lambda^2} = -\frac{n}{\lambda^2} \lt 0$ Confirming this is a maximum.
$\blacksquare$

</details>

**Problem 7.2.** Find the MLE for $p$ given i.i.d. Observations from $\mathrm{Bin}(n, p)$ (observed
counts $x_1, \ldots, x_m$).

<details>
<summary>Solution</summary>

$$
L(p) = \prod_{j=1}^m \binom{n}{x_j} p^{x_j} (1-p)^{n - x_j}
$$

$$
\ell(p) = \sum_{j=1}^m \left[\log \binom{n}{x_j} + x_j \log p + (n - x_j) \log(1 - p)\right]
$$

$$
\frac{d\ell}{dp} = \sum_{j=1}^m \left[\frac{x_j}{p} - \frac{n - x_j}{1 - p}\right] = \frac{\sum x_j}{p} - \frac{mn - \sum x_j}{1 - p} = 0
$$

Solving: $(1 - p)\sum x_j = p(mn - \sum x_j)$ So $\sum x_j = pmn$ Hence
$\hat{p} = \frac{\sum x_j}{mn} = \frac{\bar{x}}{n}$.

Verify: $\frac{d^2\ell}{dp^2} = -\frac{\sum x_j}{p^2} - \frac{mn - \sum x_j}{(1-p)^2} \lt 0$.
$\blacksquare$

</details>

**Problem 7.3.** Compute the Fisher information for $\lambda$ in the exponential model and construct
a 95% confidence Interval.

<details>
<summary>Solution</summary>

For $X \sim \mathrm{Exp}(\lambda)$: $f(x \mid \lambda) = \lambda e^{-\lambda x}$ So
$\log f = \log \lambda - \lambda x$.

$$
\frac{\partial}{\partial \lambda} \log f = \frac{1}{\lambda} - x
$$

$$
I(\lambda) = -E\left[\frac{\partial^2}{\partial \lambda^2} \log f\right] = -E\left[-\frac{1}{\lambda^2}\right] = \frac{1}{\lambda^2}
$$

The MLE $\hat{\lambda} = 1/\bar{X}$ is approximately
$N(\lambda, 1/(n \cdot I(\lambda))) = N(\lambda, \lambda^2/n)$.

A 95% confidence interval is:

$$
\hat{\lambda} \pm 1.96 \cdot \frac{\hat{\lambda}}{\sqrt{n}}
$$

</details>

:::caution
$\hat{\sigma}^2 = \frac{1}{n}\sum (X_i - \bar{X})^2$ For the normal variance is biased; the unbiased
estimator uses $n - 1$ in the denominator.
:::

## 2. Hypothesis Testing

### 2.1 The Framework

A **hypothesis test** evaluates two competing statements:

- **Null hypothesis** $H_0$: the status quo (e.g., $\mu = \mu_0$).
- **Alternative hypothesis** $H_1$: what we want to show (e.g., $\mu \gt \mu_0$).

### 2.2 Test Statistics and Decisions

A **test statistic** $T$ is a function of the data. We reject $H_0$ if $T$ falls in the **rejection
Region** (critical region).

**Type I error**: rejecting $H_0$ when it is true (false positive). Probability = $\alpha$
(significance Level).

**Type II error**: failing to reject $H_0$ when it is false (false negative). Probability = $\beta$.

The **power** of a test is $1 - \beta = P(\mathrm{reject}  H_0 \mid H_1 \mathrm{ is} true)$.

### 2.3 The Neyman-Pearson Lemma

**Theorem 8.1 (Neyman-Pearson Lemma).** Consider testing $H_0: \theta = \theta_0$ versus
$H_1: \theta = \theta_1$ Based on a single observation $X$ with PDF $f(x \mid \theta)$. The **most
powerful test** of level $\alpha$ rejects $H_0$ when the **likelihood ratio** exceeds a threshold:

$$
\Lambda(x) = \frac{f(x \mid \theta_1)}{f(x \mid \theta_0)} \gt k
$$

For some $k$ chosen so that $P(\Lambda(X) \gt k \mid H_0) = \alpha$.

_Proof (sketch)._ Consider any test $\phi$ with level $\alpha$ (i.e.,
$E_{\theta_0}[\phi(X)] \leq \alpha$). The power Under $H_1$ is
$E_{\theta_1}[\phi(X)] = \int \phi(x) f(x \mid \theta_1)\, dx$. Write this as
$\int \phi(x) \Lambda(x) f(x \mid \theta_0)\, dx$. The likelihood ratio test $\phi^*$ rejects when
$\Lambda \gt k$ and Randomises on the boundary, so it assigns the largest $\phi^*(x)$ values to the
largest $\Lambda(x)$ values. Any other Level-$\alpha$ test assigns less rejection probability to
large-$\Lambda$ regions and cannot exceed the power of $\phi^*$. $\blacksquare$

### 2.4 Likelihood Ratio Tests

For composite hypotheses $H_0: \theta \in \Theta_0$ vs $H_1: \theta \in \Theta_1$ The **generalised
likelihood Ratio statistic** is

$$
\Lambda = \frac{\sup_{\theta \in \Theta_0} L(\theta)}{\sup_{\theta \in \Theta} L(\theta)}
$$

We reject $H_0$ when $\Lambda$ is small (equivalently, when $-2\log \Lambda$ is large).

**Theorem 8.2 (Wilks' Theorem).** Under $H_0$ and regularity conditions:

$$
-2 \log \Lambda \xrightarrow{d} \chi^2_d
$$

Where $d = \dim(\Theta) - \dim(\Theta_0)$ is the difference in the number of free parameters.

### 2.5 p-Values

The **p-value** is the probability of observing a test statistic at least as extreme as the one
Computed, assuming $H_0$ is true. We reject $H_0$ if the p-value is less than $\alpha$.

### 2.6 Z-Test for a Mean

If $X_1, \ldots, X_n \sim N(\mu, \sigma^2)$ with known $\sigma$ To test $H_0: \mu = \mu_0$:

$$
Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}
$$

Under $H_0$, $Z \sim N(0, 1)$.

- For $H_1: \mu \gt \mu_0$: reject if $Z \gt z_\alpha$.
- For $H_1: \mu \lt \mu_0$: reject if $Z \lt -z_\alpha$.
- For $H_1: \mu \neq \mu_0$: reject if $|Z| \gt z_{\alpha/2}$.

### 2.7 t-Test for a Mean

If $\sigma$ is unknown, replace $\sigma$ with the sample standard deviation $S$:

$$
T = \frac{\bar{X} - \mu_0}{S / \sqrt{n}}
$$

Under $H_0$, $T \sim t_{n-1}$ (Student's t-distribution with $n - 1$ degrees of freedom).

### 2.8 Chi-Squared Test for a Variance

To test $H_0: \sigma^2 = \sigma_0^2$ for $X_1, \ldots, X_n \sim N(\mu, \sigma^2)$:

$$
\chi^2 = \frac{(n-1)S^2}{\sigma_0^2}
$$

Under $H_0$, $\chi^2 \sim \chi^2_{n-1}$.

### 2.9 Chi-Squared Goodness-of-Fit Test

To test whether observed data follow a specified discrete distribution, partition the sample space
into $k$ cells With expected counts $e_i$ and observed counts $o_i$. The test statistic is

$$
\chi^2 = \sum_{i=1}^k \frac{(o_i - e_i)^2}{e_i}
$$

Under $H_0$ (and provided expected counts are sufficiently large), $\chi^2 \sim \chi^2_{k - 1 - p}$
where $p$ is the Number of parameters estimated from the data.

**Problem 8.4.** A die is rolled 60 times with the following frequencies:
`\\{1: 8, 2: 12, 3: 9, 4: 11, 5: 13, 6: 7\\}`. Test whether the die is fair at $\alpha = 0.05$.

<details>
<summary>Solution</summary>

$H_0$: die is fair (each face has probability $1/6$). Expected count per face: $e_i = 60/6 = 10$.

$$
\chi^2 = \frac{(8 - 10)^2}{10} + \frac{(12 - 10)^2}{10} + \frac{(9 - 10)^2}{10} + \frac{(11 - 10)^2}{10} + \frac{(13 - 10)^2}{10} + \frac{(7 - 10)^2}{10}
$$

$$
= \frac{4 + 4 + 1 + 1 + 9 + 9}{10} = \frac{28}{10} = 2.8
$$

Under $H_0$, $\chi^2 \sim \chi^2_5$. The critical value at $\alpha = 0.05$ is
$\chi^2_{5, 0.05} = 11.07$.

Since $2.8 \lt 11.07$ We fail to reject $H_0$. There is insufficient evidence that the die is unfair.
$\blacksquare$

</details>

### 2.10 Two-Sample Tests

**Two-sample Z-test.** To test $H_0: \mu_1 - \mu_2 = 0$ for independent samples with known variances
$\sigma_1^2, \sigma_2^2$:

$$
Z = \frac{\bar{X}_1 - \bar{X}_2}{\sqrt{\sigma_1^2/n_1 + \sigma_2^2/n_2}}
$$

Under $H_0$, $Z \sim N(0, 1)$.

**Two-sample t-test (Welch's).** When variances are unknown and possibly unequal:

$$
T = \frac{\bar{X}_1 - \bar{X}_2}{\sqrt{S_1^2/n_1 + S_2^2/n_2}}
$$

The degrees of freedom are approximated by Welch's formula:

$$
\nu = \frac{(S_1^2/n_1 + S_2^2/n_2)^2}{\frac{(S_1^2/n_1)^2}{n_1 - 1} + \frac{(S_2^2/n_2)^2}{n_2 - 1}}
$$

**Problem 8.5.** A study compares two teaching methods. Method A (20 students): mean score 78,
standard deviation 8. Method B (25 students): mean score 72, standard deviation 10. Test
$H_0: \mu_A = \mu_B$ vs $H_1: \mu_A \neq \mu_B$ At $\alpha = 0.05$.

<details>
<summary>Solution</summary>

Using Welch's t-test:

$$
T = \frac{78 - 72}{\sqrt{64/20 + 100/25}} = \frac{6}{\sqrt{3.2 + 4}} = \frac{6}{\sqrt{7.2}} = \frac{6}{2.683} \approx 2.236
$$

$$
\nu = \frac{(3.2 + 4)^2}{3.2^2/19 + 4^2/24} = \frac{51.84}{0.539 + 0.667} = \frac{51.84}{1.206} \approx 42.98
$$

Use $\nu \approx 43$ degrees of freedom. The critical values for a two-sided test at $\alpha = 0.05$
are Approximately $\pm 2.017$.

Since $|T| = 2.236 \gt 2.017$ We reject $H_0$ at the 5% significance level. There is evidence that
the two Teaching methods produce different mean scores. $\blacksquare$

</details>

### 2.11 Worked Examples

**Problem 8.1.** A process produces bolts with mean diameter 10mm. A sample of 25 bolts has mean
10.12mm And standard deviation 0.3mm. Test $H_0: \mu = 10$ vs $H_1: \mu \neq 10$ at $\alpha = 0.05$.

<details>
<summary>Solution</summary>

Use the t-test: $T = \frac{10.12 - 10}{0.3/\sqrt{25}} = \frac{0.12}{0.06} = 2$.

Under $H_0$, $T \sim t_{24}$. The critical values are $t_{24, 0.025} \approx 2.064$.

Since $|T| = 2 \lt 2.064$ We fail to reject $H_0$ at the 5% significance level. There is insufficient
Evidence to conclude the mean diameter differs from 10mm. $\blacksquare$

</details>

**Problem 8.2.** A pharmaceutical company claims a drug reduces blood pressure by 5mmHg on average.
In a trial Of 50 patients, the observed mean reduction was 4.2mmHg with standard deviation 3.1mmHg.
Test the claim at $\alpha = 0.05$.

<details>
<summary>Solution</summary>

$H_0: \mu = 5$ vs $H_1: \mu \neq 5$.

$$
T = \frac{4.2 - 5}{3.1 / \sqrt{50}} = \frac{-0.8}{0.4384} \approx -1.825
$$

Under $H_0$, $T \sim t_{49}$. The critical values for a two-sided test at $\alpha = 0.05$ are
approximately $\pm 2.010$.

Since $|T| = 1.825 \lt 2.010$ We fail to reject $H_0$. There is insufficient evidence to refute the
company's Claim. $\blacksquare$

</details>

**Problem 8.3.** Let $X_1, \ldots, X_n$ be i.i.d. $N(\mu, \sigma^2)$ with $\sigma^2$ known. Derive
the likelihood ratio Test for $H_0: \mu = \mu_0$ vs $H_1: \mu \neq \mu_0$.

<details>
<summary>Solution</summary>

Under $H_0$: $\sup_{\mu = \mu_0} L(\mu, \sigma^2) = L(\mu_0, \sigma^2)$.

Under $H_1 \cup H_0$: $\sup_\mu L(\mu, \sigma^2) = L(\bar{x}, \sigma^2)$.

$$
\Lambda = \frac{L(\mu_0, \sigma^2)}{L(\bar{x}, \sigma^2)} = \exp\left(-\frac{1}{2\sigma^2}\left[\sum(x_i - \mu_0)^2 - \sum(x_i - \bar{x})^2\right]\right)
$$

Now $\sum(x_i - \mu_0)^2 = \sum(x_i - \bar{x})^2 + n(\bar{x} - \mu_0)^2$ So:

$$
\Lambda = \exp\left(-\frac{n(\bar{x} - \mu_0)^2}{2\sigma^2}\right)
$$

We reject $H_0$ when $\Lambda$ is small, i.e., when $\frac{n(\bar{x} - \mu_0)^2}{\sigma^2}$ is
large, which is Equivalent to $\left|\frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}\right| \gt c$. This
recovers the Z-test. $\blacksquare$

</details>

:::caution
only provides evidence against $H_0$; absence of evidence is not evidence of absence. The
distinction is critical in scientific Reasoning.
:::


## Counterexamples worth knowing by name

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| The MLE is unbiased | no | the MLE of $\sigma^2$ with the mean known is unbiased; with the mean estimated it is not, and the correction factor is $n/(n-1)$ |
| A p-value is the probability the null is true | no | it is $P(\text{data at least this extreme} \mid H_0)$; the direction of the conditional is the whole point |
| Failing to reject means the null is true | no | it means the data are not informative enough to say; absence of evidence is not evidence of absence |
| A 95% confidence interval contains the true value with probability 95% | no | once computed it either does or does not; the 95% describes the *procedure* over repeated samples |
| The MLE always exists | no | for a mixture model the likelihood is unbounded, and the MLE runs off to infinity |
| Maximum likelihood is invariant under reparameterisation | yes | and this is a theorem, not a convention -- which is why it is the default |
| A wider confidence interval means a worse experiment | no | a wider interval honestly reports less information; a narrow one from a small sample is a lie |
| The Neyman-Pearson lemma needs a simple null and a simple alternative | yes | for composite hypotheses you need the generalised likelihood ratio, and monotone likelihood ratio for UMP tests |

</div>

The first row is worth working through once, because it is the cleanest
example of a biased estimator that is nonetheless consistent and asymptotically
efficient. Unbiasedness is not the point; the point is what happens as $n
\to \infty$.

The p-value row is the one with real consequences. Most published
misinterpretations of statistics trace to swapping that conditional, and the
fix is to be strict about the wording every single time.

## Where the research frontier is

- **Bayes and frequency reconciled.** The [Bernstein-von Mises
  theorem](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)
  says the Bayesian posterior and the frequentist sampling distribution agree
  asymptotically -- and the conditions under which it *fails* are where the two
  schools genuinely disagree.
- **High-dimensional statistics.** With more parameters than data points,
  Cramer-Rao and the classical asymptotics do not apply. Sparse estimation,
  lasso and its refinements are the modern answer, and the theory is still
  being written.
- **Post-selection inference.** Selecting a model and then testing within it
  invalidates the usual p-values, and correcting for the selection is an open
  and practically urgent problem.
- **Robustness.** MLE is notoriously sensitive to outliers; robust estimation
  trades efficiency for stability, and the trade-off is quantified by influence
  functions.
- **Reproducibility and multiplicity.** Running many tests at level 0.05
  guarantees false positives, and corrections (Bonferroni, FDR) are an active
  design question rather than a settled recipe.

## Interleaving problems

Mix these with [Random
Variables](/8-probability-and-statistics/2_random-variables/), [Limit
Theorems](/8-probability-and-statistics/4_limit-theorems/), [Transformations
and
Convolutions](/8-probability-and-statistics/5_transformations-and-convolutions/),
[Measure Theory](/10-measure-theory/6_lebesgue-integration/) and
[Bernstein-von Mises](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/).

1. (Random variables.) Show that for an iid sample from $N(\mu, \sigma^2)$
   with $\sigma^2$ known, the MLE of $\mu$ is the sample mean, by maximising
   the log-likelihood directly.
2. (Limit theorems.) Prove the MLE is consistent using the law of large
   numbers, and identify which step needs the true parameter to be an interior
   point of the parameter space.
3. (Fisher information.) Compute the Fisher information for the Bernoulli and
   Poisson cases, and verify the Cramer-Rao bound is attained by the MLE
   asymptotically in each.
4. (Measure theory.) The likelihood is a density evaluated at data, so it
   depends on the dominating measure. Show that the MLE is invariant under a
   change of dominating measure, and explain why that matters.
5. (Bernstein-von Mises.) State the theorem and explain in what sense the
   Bayesian posterior mean and the MLE agree asymptotically. Then identify one
   condition whose failure breaks the agreement.
6. (Research.) Explain the multiple-comparisons problem: 20 independent tests
   at level 0.05 have a high chance of at least one false rejection. Compute
   that probability, then compare Bonferroni correction and false discovery
   rate control as responses.

## See Also

- [Probability Spaces](/8-probability-and-statistics/1_probability-spaces/)
- [Random Variables](/8-probability-and-statistics/2_random-variables/)
- [Limit Theorems](/8-probability-and-statistics/4_limit-theorems/)
- [Bernstein-von Mises](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)
- [How to Use These Notes](/how-to-use/)
