---
title: "Probability Distributions -- Diagnostic Tests"
description: ""s claim that this is "directly $\mathrm{Poi}(2)$" is incomplete — the Poisson
is an approximation that must be justified.

**(b)** With $\lambda = np = 200 \times 0.01 = 2$:

Poisson:
$P(X = 5) = \dfrac{e^{-2} \cdot 2^5}{5!} = \dfrac{32 \cdot e^{-2}}{120} = \frac{4e^{-2}}{15}$.

Exact binomial: $P(X = 5) = \binom{200}{5}(0.01)^5(0.99)^{195}$.

Poisson: $\frac{4e^{-2}}{15} \approx \frac{4 \times 0.1353}{15} \approx 0.0361$.

The approximation is very close, with relative error less than $0.3\%$.

---

## Integration Tests

> Tests synthesis of probability distributions with other topics.

### IT-1: Linear Combination of Normal Random Variables (with Number and Algebra)

**Question:**

The weights of apples from orchard $A$ follow $N(150, 12)$ and from orchard $B$ follow $N(140, 15)$.
A bag contains 3 apples from orchard $A$ and 2 apples from orchard $B$.

**(a)** Find the probability that the total weight of the bag exceeds $750\,\mathrm{g}$.

**(b)** A student claims that since the apples are independent, the total weight is
$3 \times 150 + 2 \times 140 = 730\,\mathrm{g}$ and the probability of exceeding $750\,\mathrm{g}$
is $50\%$ since $750$ is close to the mean. Explain why this reasoning is wrong.

[Difficulty: hard. Combines linear combinations of normal distributions with probability
calculations.]

**Solution:**

**(a)** Let $A_i \sim N(150, 12)$ for $i = 1, 2, 3$ and $B_j \sim N(140, 15)$ for $j = 1, 2$.

Total weight: $T = A_1 + A_2 + A_3 + B_1 + B_2$.

Since the apples are independent:

$$E(T) = 3(150) + 2(140) = 450 + 280 = 730$$

$$\mathrm{Var}(T) = 3(12^2) + 2(15^2) = 3(144) + 2(225) = 432 + 450 = 882$$

$$T \sim N(730, \sqrt{882}) \approx N(730, 29.7)$$

$$P(T \gt 750) = P\!\left(Z \gt \frac{750 - 730}{\sqrt{882}}\right) = P\!\left(Z \gt \frac{20}{29.7}\right) = P(Z \gt 0.673)$$

$$= 1 - \Phi(0.673) \approx 1 - 0.7495 = 0.2505$$

**(b)** The student's error is confusing the mean with the distribution. While the mean total weight
is indeed $730\,\mathrm{g}$The total weight is a random variable with spread (standard deviation
$\approx 29.7\,\mathrm{g}$). The probability of exceeding $750\,\mathrm{g}$ is not $50\%$ — it is
approximately $25\%$. The student failed to account for the variance of the sum. The probability is
$50\%$ only at the mean ($730\,\mathrm{g}$), not at $750\,\mathrm{g}$.
