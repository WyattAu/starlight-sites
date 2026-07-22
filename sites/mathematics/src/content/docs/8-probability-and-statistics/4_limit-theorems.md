---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "4_limit Theorems", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/4_limit-theorems"}]
}
</script>
title: Limit Theorems
description: "UNIVERSITY Mathematics notes: Limit Theorems. Comprehensive study material with definitions, examples, and assessment tools."
tags:
  - Mathematics
  - University
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "4_limit Theorems", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/4_limit-theorems"}]
}
</script>

### 4.1 The Law of Large Numbers

**Theorem 4.1 (Weak Law of Large Numbers).** Let $X_1, X_2, \ldots$ be i.i.d. With $E[X_i] = \mu$
and $\mathrm{Var}(X_i) = \sigma^2 < \infty$. Then for every $\varepsilon > 0$:

$$\lim_{n \to \infty} P\left(\left|\frac{1}{n}\sum_{i=1}^{n} X_i - \mu\right| \geq \varepsilon\right) = 0$$

_Proof._ Let $S_n = \frac{1}{n}\sum_{i=1}^{n} X_i$. Then $E[S_n] = \mu$ and
$\mathrm{Var}(S_n) = \sigma^2/n$. By Chebyshev"s inequality:

$$P(|S_n - \mu| \geq \varepsilon) \leq \frac{\mathrm{Var}(S_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2} \to 0 \quad \mathrm{as\ } n \to \infty$$

$\blacksquare$

**Theorem 4.2 (Strong Law of Large Numbers).** Under the same conditions:

$$P\left(\lim_{n \to \infty} \frac{1}{n}\sum_{i=1}^{n} X_i = \mu\right) = 1$$

The sample mean converges to the population mean almost surely.

### 4.2 The Central Limit Theorem

**Theorem 4.3 (Central Limit Theorem).** Let $X_1, X_2, \ldots$ be i.i.d. With $E[X_i] = \mu$ and
$\mathrm{Var}(X_i) = \sigma^2 \in (0, \infty)$. Then

$$\frac{S_n - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} N(0, 1)$$

Where $S_n = \sum_{i=1}^{n} X_i$ and $\xrightarrow{d}$ denotes convergence in distribution.

Equivalently, for large $n$:

$$P\left(\frac{S_n - n\mu}{\sigma\sqrt{n}} \leq z\right) \approx \Phi(z)$$

Where $\Phi$ is the CDF of the standard normal.

_Proof (using characteristic functions)._ Let $\varphi_X(t) = E[e^{itX}]$ be the characteristic
function of $X_1$. The characteristic function of $(S_n - n\mu)/(\sigma\sqrt{n})$ is:

$$\varphi_n(t) = \left[\varphi_X\left(\frac{t}{\sigma\sqrt{n}}\right)\right]^n \cdot e^{-it\sqrt{n}\mu/\sigma}$$

Expanding $\varphi_X$ around 0:
$\varphi_X(s) = 1 + i\mu s - \frac{(\sigma^2 + \mu^2)s^2}{2} + o(s^2)$. Substituting
$s = t/(\sigma\sqrt{n})$:

$$\varphi_n(t) = \left[1 + \frac{i\mu t}{\sigma\sqrt{n}} - \frac{(\sigma^2 + \mu^2)t^2}{2\sigma^2 n} + o\left(\frac{1}{n}\right)\right]^n \cdot e^{-it\sqrt{n}\mu/\sigma}$$

Using $\lim_{n \to \infty}(1 + a_n/n)^n = e^{\lim a_n}$:

$$\lim_{n \to \infty} \varphi_n(t) = \exp\left(\frac{i\mu t}{\sigma} - \frac{(\sigma^2 + \mu^2)t^2}{2\sigma^2}\right) \cdot \exp\left(-\frac{i\mu t}{\sigma}\right) = e^{-t^2/2}$$

This is the characteristic function of $N(0, 1)$. By Levy's continuity theorem, the convergence in
distribution follows. $\blacksquare$

### 4.3 Worked Examples

**Problem.** A fair die is rolled 100 times. Approximate the probability that the sum exceeds 370.

<details>
<summary>Solution</summary>

Let $X_i$ be the value of the $i$-th roll. Then $E[X_i] = 7/2 = 3.5$ and
$\mathrm{Var}(X_i) = 35/12 \approx 2.917$.

$S_{100} = \sum_{i=1}^{100} X_i$. By the CLT:

$$\frac{S_{100} - 350}{\sqrt{100 \cdot 35/12}} \approx N(0, 1)$$

$$P(S_{100} > 370) = P\left(Z > \frac{370 - 350}{\sqrt{291.7}}\right) \approx P(Z > 1.17) \approx 0.121$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Sample Mean Distribution</summary>

_Solution._ A population has mean 50 and standard deviation 10. Find the probability that the mean
of a sample of 64 observations exceeds 52.

By the CLT, $\bar{X} \approx N(50, 100/64) = N(50, 1.5625)$.

$$P(\bar{X} > 52) = P\left(Z > \frac{52 - 50}{\sqrt{1.5625}}\right) = P(Z > 1.6) \approx 0.0548$$

$\blacksquare$

</details>

### 4.4 Intuition: Why Do the LLN and CLT Work?

The Law of Large Numbers says that the sample mean converges to the true mean as the sample size grows. The intuition is simple: random fluctuations in individual observations cancel out when you average many of them. Positive deviations and negative deviations are equally likely, and their effects average to zero. The weak law guarantees convergence in probability (most samples give a mean close to the true mean), while the strong law guarantees almost sure convergence (the sample mean is eventually and permanently close).

The Central Limit Theorem is deeper: it says that the shape of the distribution of a sum converges to a normal distribution, regardless of the original distribution. The reason is that each individual observation contributes a small amount to the sum, and the combined effect of many small independent contributions is approximately normal. This is analogous to how a random walk in many dimensions ends up approximately Gaussian. The CLT explains why the normal distribution appears so frequently in nature: any quantity that is the sum of many small independent effects will be approximately normally distributed. The Berry-Esseen theorem quantifies how fast this convergence happens, bounding the error by a constant times $\rho/(\sigma^3 \sqrt{n})$.

### 4.5 Common Pitfalls

- **The CLT does not apply to small samples.** The CLT is an asymptotic result. For small $n$ (
  $n < 30$), the normal approximation can be poor unless the underlying distribution is already
  close to normal. Use the Berry--Esseen theorem for finite-sample bounds.
- **Independence is critical for the LLN and CLT.** If the $X_i$ are dependent, the sample mean may
  not converge to the population mean, or the convergence rate may differ. For stationary sequences
  with weak dependence, versions of these theorems still hold, but the
  .../1-number-and-algebra/3_proof-and-logics are more involved.
- **Convergence in distribution is weaker than convergence in probability.** The CLT gives
  convergence in distribution of the standardised sum, not convergence of the sum itself. The LLN
  gives the latter (convergence in probability).

### 4.5 Key Relationships

- **Berry-Esseen bound:** For i.i.d. variables with $E[|X|^3] = \rho < \infty$, the rate of CLT convergence is bounded by $|F_n(z) - \Phi(z)| \leq C\rho/(\sigma^3\sqrt{n})$ where $C < 0.4748$.
- **Lindeberg-Feller CLT:** Generalises the CLT to independent (but not identically distributed) random variables. Requires the Lindeberg condition: no single variable dominates the sum.
- **CLT for sample proportions:** If $Y_i \sim \text{Bernoulli}(p)$, then $\hat{p} = \bar{Y} \approx N(p, p(1-p)/n)$ for large $n$. This is the basis of confidence intervals for proportions.
- **Delta method:** If $\sqrt{n}(\bar{X} - \mu) \xrightarrow{d} N(0, \sigma^2)$, then $\sqrt{n}(g(\bar{X}) - g(\mu)) \xrightarrow{d} N(0, [g'(\mu)]^2\sigma^2)$ for differentiable $g$. Extends the CLT to nonlinear functions of the mean.

### 4.6 Worked Example: Confidence Intervals via CLT

A poll surveys 1000 voters and finds 540 support a candidate. Construct a 95% confidence interval for the true proportion $p$.

$\hat{p} = 540/1000 = 0.54$. By the CLT, $\hat{p} \approx N(p, p(1-p)/n)$. For a 95% CI:

$$\hat{p} \pm z_{0.025}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}} = 0.54 \pm 1.96\sqrt{\frac{0.54 \times 0.46}{1000}} = 0.54 \pm 0.031$$

The 95% CI is $(0.509, 0.571)$. Since the interval includes 0.5, we cannot reject the hypothesis that the race is tied at the 5% significance level.

### 4.7 Worked Example: Poisson Approximation via CLT

Events occur at rate $\lambda = 50$ per hour. Approximate $P(S \leq 60)$ where $S$ is the total count in one hour.

The Poisson distribution with $\lambda = 50$ has mean 50 and variance 50. By the CLT:

$$P(S \leq 60) \approx P\left(Z \leq \frac{60 - 50}{\sqrt{50}}\right) = P(Z \leq 1.414) \approx 0.9214$$

The exact Poisson probability is 0.9278. The normal approximation is accurate to within 1%.

### 4.8 Worked Example:掷骰子问题

A fair die is rolled 60 times. Approximate the probability that the total is between 200 and 240.

Each roll has $E[X_i] = 3.5$ and $\mathrm{Var}(X_i) = 35/12$. By the CLT, the total $S_{60}$ satisfies:

$$P(200 < S_{60} < 240) = P\left(\frac{200 - 210}{\sqrt{60 \times 35/12}} < Z < \frac{240 - 210}{\sqrt{60 \times 35/12}}\right)$$

$$= P\left(\frac{-10}{13.23} < Z < \frac{30}{13.23}\right) = P(-0.756 < Z < 2.268)$$

$$\approx \Phi(2.268) - \Phi(-0.756) = 0.9883 - 0.2248 = 0.7635$$

## Cross-References

- **[Random Variables](2_random-variables.md)**: Random variables provide the building blocks for understanding convergence in distribution and probability.
- **[Joint Distributions and Independence](3_joint-distributions-and-independence.md)**: Independence of random variables is essential for the law of large numbers and central limit theorem.
- **[Probability Spaces](1_probability-spaces.md)**: Probability spaces provide the measure-theoretic foundation for defining convergence concepts.

