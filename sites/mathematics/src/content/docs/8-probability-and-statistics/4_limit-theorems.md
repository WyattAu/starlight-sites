---
date: 2026-07-23T21:57:32+01:00
title: "Limit Theorems"
description: "Limit theorems of probability: the weak and strong laws of large numbers, the central limit theorem with its characteristic-function proof, Berry-Esseen, the delta method, and the Cauchy counterexample that shows exactly when they fail — with recall prompts, worked examples and interleaving problems. Tier F/U."
tags:
  - Mathematics
  - University
  - Probability
categories:
  - Mathematics
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "Limit Theorems", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/limit-theorems"}]
}
</script>

## Limit Theorems

**Tier: F (Foundation), with the U-level proof of the central limit theorem.**
These two theorems are the reason statistics works. Everything downstream —
confidence intervals, hypothesis tests, regression, the bootstrap — is an
application of the law of large numbers or the central limit theorem.

## Recall prompts

Attempt these from memory *before* reading.

- State the weak law of large numbers. What does its proof use?
- How does the strong law differ from the weak law?
- State the central limit theorem. What mode of convergence does it use?
- Give a distribution with no mean, and say what that does to the LLN.
- State the Berry-Esseen bound. What does it give you that the CLT does not?

Check your answers against the text. The distinction between the two
convergence modes in prompts 2 and 3 is the part most often confused.

## Motivation: why these two theorems carry the subject

A probability model tells you the distribution of a *single* observation.
Statistics needs to say something about an *average* of many. The two limit
theorems are the bridge, and they answer different questions:

- **The law of large numbers** says the average converges to the truth. It
  justifies *estimation*: the sample mean is a sensible thing to compute.
- **The central limit theorem** says the *fluctuations* around that truth are
  asymptotically Gaussian, at a known scale. It justifies *uncertainty
  quantification*: confidence intervals and p-values.

Without the LLN, an average is just a number. Without the CLT, you cannot attach
an error bar to it. Neither follows from the other — a distribution can satisfy
one and fail the other, and the Cauchy counterexample below fails both.

## The weak law of large numbers

**Theorem 4.1 (Weak Law).** Let $X_1, X_2, \ldots$ be i.i.d. with $E[X_i] = \mu$
and $\mathrm{Var}(X_i) = \sigma^2 < \infty$. Then for every $\varepsilon > 0$,

$$
\lim_{n \to \infty} P\left(\left|\frac{1}{n}\sum_{i=1}^{n} X_i - \mu\right| \geq \varepsilon\right) = 0.
$$

*Proof.* Let $S_n = \frac{1}{n}\sum_i X_i$. Then $E[S_n] = \mu$ and
$\mathrm{Var}(S_n) = \sigma^2/n$. By Chebyshev's inequality,

$$
P(|S_n - \mu| \ge \varepsilon) \le \frac{\mathrm{Var}(S_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2} \to 0.
\qquad \blacksquare
$$

**The key idea.** Averaging shrinks the variance by $n$ while leaving the mean
alone. That is the whole proof: one inequality, one limit. Chebyshev is doing
the work, and Chebyshev needs only the second moment — which is why the weak
law holds under very weak assumptions.

## The strong law

**Theorem 4.2 (Strong Law).** Under the same conditions,

$$
P\left(\lim_{n \to \infty} \frac{1}{n}\sum_{i=1}^{n} X_i = \mu\right) = 1.
$$

**In words.** The weak law says: for each fixed $n$, the probability of a bad
sample is small. The strong law says: along the *single* infinite sequence you
actually observe, the sample mean eventually gets and stays close. The strong
law is the statement about the experiment you run; the weak law is a statement
about each finite stage of it.

**Why the difference matters.** They are not equivalent. Convergence almost
surely implies convergence in probability, but not conversely — and there are
genuine sequences converging in probability whose paths never settle down.

## The central limit theorem

**Theorem 4.3 (CLT).** Let $X_1, X_2, \ldots$ be i.i.d. with $E[X_i] = \mu$ and
$\mathrm{Var}(X_i) = \sigma^2 \in (0, \infty)$. Then

$$
\frac{S_n - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} N(0, 1)
$$

where $S_n = \sum_i X_i$.

*Proof (characteristic functions).* Let $\varphi_X(t) = E[e^{itX}]$. The
characteristic function of the standardised sum is

$$
\varphi_n(t) = \left[\varphi_X\left(\frac{t}{\sigma\sqrt{n}}\right)\right]^n
e^{-it\sqrt{n}\mu/\sigma}.
$$

Expanding around zero, $\varphi_X(s) = 1 + i\mu s - \frac{(\sigma^2+\mu^2)s^2}{2}
+ o(s^2)$, so with $s = t/(\sigma\sqrt n)$,

$$
\varphi_n(t) = \left[1 + \frac{i\mu t}{\sigma\sqrt n} -
\frac{(\sigma^2+\mu^2)t^2}{2\sigma^2 n} + o\!\left(\tfrac1n\right)\right]^n
e^{-it\sqrt n \mu/\sigma}.
$$

Using $\lim (1 + a_n/n)^n = e^{\lim a_n}$ and collecting terms,

$$
\lim_{n\to\infty}\varphi_n(t) = e^{i\mu t/\sigma - (\sigma^2+\mu^2)t^2/2\sigma^2}
\cdot e^{-i\mu t/\sigma} = e^{-t^2/2},
$$

the characteristic function of $N(0,1)$. By Levy's continuity theorem the
convergence in distribution follows. $\blacksquare$

**The key idea.** The expansion is Taylor to second order. The first-order terms
cancel against the recentring, and the second-order terms are what survive.
Everything beyond second order vanishes because it is $o(1/n)$ and there are
only $n$ of them. The CLT is therefore a *second-order* statement: it needs two
finite moments and knows nothing about higher ones.

## Multiple representations of the same fact

**In words.** Whatever shape the underlying distribution has, the *average* of a
large sample is approximately normal.

**As equations.** $\sqrt n(\bar X_n - \mu) \xrightarrow{d} N(0, \sigma^2)$.

**As a picture.** The distribution of the sample mean for samples of size $n$
from a heavily skewed exponential:

```text
  n = 1        n = 4        n = 16       n = 100
   ^            ^            ^            ^
  _|           /|            _            _
 | |          | |           / \           /\
 | |         /| |          /   \         /  \
 |_|        | | |         |     |       |    |
 | |        |/ \|         |     |      /      \
 |_|_       |   |        _|     |_     |        |
_/   \_    _|   |_      _ |     |_    _/        \_
```

**As a quantified statement.** Berry-Esseen: if $E[|X|^3] = \rho < \infty$,

$$
|F_n(z) - \Phi(z)| \le \frac{C\rho}{\sigma^3\sqrt n}, \qquad C < 0.4748.
$$

The picture shows the shape; the equation gives the rate. Berry-Esseen is what
tells you the normal approximation is *usable* at a given $n$, which the CLT
alone does not.

## Worked examples

**Problem.** A fair die is rolled 100 times. Approximate the probability that
the sum exceeds 370.

*Solution.* Each roll has $E[X_i] = 3.5$ and $\mathrm{Var}(X_i) = 35/12$. By the
CLT,

$$
P(S_{100} > 370) = P\left(Z > \frac{370 - 350}{\sqrt{100 \cdot 35/12}}\right)
\approx P(Z > 1.17) \approx 0.121. \qquad \blacksquare
$$

**Problem.** A poll surveys 1000 voters and finds 540 support a candidate.
Construct a 95% confidence interval for $p$.

*Solution.* $\hat p = 0.54$, and by the CLT $\hat p \approx N(p,
p(1-p)/n)$:

$$
0.54 \pm 1.96\sqrt{\frac{0.54 \times 0.46}{1000}} = 0.54 \pm 0.031,
$$

giving $(0.509, 0.571)$. The interval contains 0.5, so the hypothesis of a tied
race cannot be rejected at the 5% level. $\blacksquare$

**Problem.** Events occur at rate $\lambda = 50$ per hour. Approximate $P(S
\le 60)$ for the count in one hour.

*Solution.* The count is Poisson with mean and variance 50, so

$$
P(S \le 60) \approx P\left(Z \le \frac{60-50}{\sqrt{50}}\right) \approx 0.9214.
$$

The exact Poisson value is 0.9278 — the normal approximation is accurate to
within 1%. $\blacksquare$

**Problem.** A fair die is rolled 60 times. Approximate the probability that the
total is between 200 and 240.

*Solution.* $E[X_i] = 3.5$, $\mathrm{Var}(X_i) = 35/12$, so $S_{60}$ has mean
210 and standard deviation $\sqrt{60 \cdot 35/12} = 13.23$:

$$
P(200 < S_{60} < 240) = P\left(\frac{-10}{13.23} < Z < \frac{30}{13.23}\right)
\approx \Phi(2.268) - \Phi(-0.756) \approx 0.7635. \qquad \blacksquare
$$

## Counterexamples: when the theorems fail

This is where the hypotheses earn their keep. Each failure is a named
distribution, and each one is common enough to matter.

**The Cauchy distribution has no mean.** $E[|X|] = \infty$, so $\mu$ does not
exist and the law of large numbers cannot even be stated. The sample mean of
Cauchy variables has *exactly* the same distribution as a single observation —
averaging achieves nothing at all.

**The Cauchy sum is Cauchy.** If $X_i$ are Cauchy then $\bar X_n$ is Cauchy with
scale multiplied by $n$, so $(\bar X_n)$ does not converge. This is the
*stability* property: the Cauchy sits outside the central limit theorem because
its tails are too heavy for a finite variance. There is a whole family of
$\alpha$-stable laws, and the normal is the $\alpha = 2$ member — the only one
with a finite variance.

**Infinite variance breaks the CLT.** For $X_i$ with $P(|X| > x) \sim
c x^{-\alpha}$ and $\alpha < 2$, the variance is infinite and the CLT does not
hold. The sum converges instead to an $\alpha$-stable law, and the fluctuations
are *larger* than $\sqrt n$ would suggest. This is the mathematical statement
behind heavy-tailed phenomena in finance and insurance.

**Independence cannot be dropped.** For dependent sequences the LLN and CLT can
hold under mixing conditions, or fail entirely: a sequence that is constant
after the first draw has a sample mean that never converges to anything.

| Distribution | Mean? | Variance? | LLN? | CLT? |
| ------------ | ----- | --------- | ---- | ---- |
| Normal | yes | finite | yes | yes |
| Exponential | yes | finite | yes | yes |
| Pareto, $\alpha = 1.5$ | yes | **infinite** | yes | **no** |
| Cauchy | **no** | no | **no** | **no** |
| Bernoulli | yes | finite | yes | yes |

The Pareto row is the one to remember: heavy tails are common in real data, and
they break the central limit theorem while leaving the law of large numbers
intact.

## Common pitfalls

| Pitfall | Why it happens | Fix |
| ------- | -------------- | --- |
| Applying the CLT at small $n$ | The CLT is asymptotic | Use Berry-Esseen for a finite-sample bound |
| Assuming the CLT needs normal data | It is a statement about sums | The data can have any shape with two finite moments |
| Confusing convergence in distribution with convergence in probability | They are named similarly | CLT gives the former; LLN gives the latter |
| Assuming independence | "No obvious link" is not a proof | Independence must hold in the joint distribution |
| Reading $\xrightarrow{d}$ as convergence of the variables | It is convergence of their CDFs | The variables themselves need not get close |

## Extensions

- **Lindeberg-Feller CLT.** Generalises to independent but non-identical
  variables, requiring the Lindeberg condition: no single variable dominates the
  sum.
- **CLT for proportions.** $\hat p \approx N(p, p(1-p)/n)$ — the basis of
  confidence intervals for proportions.
- **Delta method.** If $\sqrt n(\bar X - \mu) \xrightarrow{d} N(0, \sigma^2)$
  then $\sqrt n(g(\bar X) - g(\mu)) \xrightarrow{d} N(0, [g'(\mu)]^2\sigma^2)$,
  extending the CLT to nonlinear functions of the mean.
- **Stable laws.** The $\alpha$-stable family generalises the Gaussian to
  $\alpha \in (0, 2]$, and is the correct limit for heavy tails.

## Interleaving problems

Mix these with material from [Probability
Spaces](/8-probability-and-statistics/1_probability-spaces/), [Random
Variables](/8-probability-and-statistics/2_random-variables/) and [Measure
Theory](/10-measure-theory/2_measures/).

1. (Probability spaces.) Show Chebyshev's inequality from Markov's inequality,
   applied to $(X - \mu)^2$.
2. (Real analysis.) Show that convergence almost surely implies convergence in
   probability, and give a sequence converging in probability but not almost
   surely.
3. (Measure theory.) Show that the Cauchy distribution has no mean, by computing
   $\int |x| \cdot \frac{1}{\pi(1+x^2)} dx$ and showing it diverges.
4. (Series.) Show that $\sum_n P(|S_n - \mu| > \varepsilon) < \infty$ when
   $\sigma^2 < \infty$, and use Borel-Cantelli to deduce the strong law from the
   weak law plus this.
5. (Statistics.) The delta method with $g(x) = e^x$ applied to a Poisson mean:
   find the asymptotic distribution of $e^{\bar X}$ and identify where it fails
   when $\mu$ is near zero.

## See Also

- [Probability Spaces](/8-probability-and-statistics/1_probability-spaces/) —
  the axioms, and why countable additivity is needed for these theorems
- [Random Variables](/8-probability-and-statistics/2_random-variables/) —
  characteristic functions and distributions
- [Measure Theory](/10-measure-theory/2_measures/) — the Lebesgue integral
  behind expectation
- [Posterior Asymptotics](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)
  — where these ideas go at research level
- [How to Use These Notes](/how-to-use/) — the method
