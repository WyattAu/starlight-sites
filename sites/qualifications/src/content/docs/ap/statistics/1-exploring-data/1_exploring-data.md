---
title: Exploring Data
description: ""s centre and spread and are the basis for
the boxplot.

## Normal Distributions

The **normal distribution** is a symmetric, bell-shaped curve described by its mean ($\mu$) and
standard deviation ($\sigma$).

### The Empirical Rule (68-95-99.7 Rule)

For any normal distribution:

- Approximately **68%** of observations fall within $\mu \pm \sigma$
- Approximately **95%** fall within $\mu \pm 2\sigma$
- Approximately **99.7%** fall within $\mu \pm 3\sigma$

### Standardised Scores (z-scores)

$$z = \frac{x - \mu}{\sigma}$$

A z-score measures the number of standard deviations an observation is from the mean.

- $z > 0$: above the mean
- $z < 0$: below the mean
- $z = 0$: at the mean

## Comparing Distributions

When comparing two or more distributions:

1. Compare **centre** (medians for boxplots, means for symmetric data)
2. Compare **spread** (IQR for boxplots, standard deviation for symmetric data)
3. Compare **shape** (symmetry, skewness, modality)
4. Note **outliers** and their potential impact
5. Write comparisons **in context** with specific numerical values

## Transforming Data

Applying a **linear transformation** ($a + bx$) to data:

- Multiplies the measure of centre by $b$ and adds $a$
- Multiplies the measure of spread by $|b|$
- Does not change the shape

Applying a **nonlinear transformation** (e.g., log, square root):

- Can change the shape of the distribution
- Often used to make skewed data more symmetric

## Common Pitfalls

- Confusing categorical and quantitative variables
- Choosing inappropriate class widths for histograms
- Using the mean to describe a skewed distribution without noting the skew
- Forgetting to identify outliers when describing a distribution
- Confusing the standard deviation formula for samples ($n-1$) with populations ($N$)
- Incorrectly interpreting the empirical rule for non-normal distributions
