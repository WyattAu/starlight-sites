---
title: Transformations and Convolutions
description: ""(x) = f(x)$;
  $P(a < X < b) = F(b) - F(a)$.
- **Wrong central limit theorem application.** The CLT applies to the sample mean, not individual
  observations, and requires sufficiently large $n$. **Fix:**
  $\bar{X}_n \xrightarrow{d} N(\mu, \sigma^2/n)$ as $n \to \infty$.
- **Confusing type I and type II errors.** Type I: rejecting $H_0$ when it is true ($\alpha$). Type
  II: failing to reject $H_0$ when it is false ($\beta$). **Fix:** Type I = false positive; Type II
  = false negative. Decreasing one increases the other.

## Worked Examples

### Example 1: Normal distribution

**Problem.** $X \sim N(100, 15^2)$. Find $P(X > 130)$.

**Solution.** $Z = \frac{130 - 100}{15} = 2.0$.
$P(X > 130) = P(Z > 2) = 1 - \Phi(2) \approx 1 - 0.9772 = 0.0228$.

$\blacksquare$

### Example 2: Hypothesis test

**Problem.** Test $H_0: \mu = 50$ vs $H_1: \mu > 50$ given $\bar{x} = 53$, $s = 8$, $n = 25$,
$\alpha = 0.05$.

**Solution.** $t = \frac{53 - 50}{8/\sqrt{25}} = \frac{3}{1.6} = 1.875$. Critical value:
$t_{0.05, 24} = 1.711$. Since $1.875 > 1.711$, reject $H_0$ at the 5% level.

$\blacksquare$

## Summary

- Continuous distributions: PDF integrates to 1; CDF gives cumulative probability.
- Normal distribution: $X \sim N(\mu, \sigma^2)$; standardise: $Z = (X - \mu)/\sigma$.
- Central limit theorem: sample mean is approximately normal for large $n$.
- Hypothesis testing: state $H_0$ and $H_1$, choose significance level, compute test statistic,
  compare with critical value.

## Cross-References

| Topic         | Site       | Link                                                                                               |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| [Probability] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/maths/statistics/03-probability)       |
| [Probability] | IB         | [View](https://ib.wyattau.com/docs/ib/maths/4-statistics-and-probability/1_probability)            |
| [Probability] | DSE        | [View](https://dse.wyattau.com/docs/dse/maths/compulsory/11_probability)                           |
| [Probability] | University | [View](https://university.wyattau.com/docs/mathematics/8-probability-and-statistics/1_probability) |

