---
title: Joint Distributions and Independence
description: 'UNIVERSITY Mathematics notes: Joint Distributions and Independence. Comprehensive study material with definitions, examples, and assessment tools.'
tags:
  - Mathematics
  - University
---

### 3.1 Joint Distribution Functions

**Definition.** The **joint CDF** of $(X, Y)$ is $F_{X,Y}(x, y) = P(X \leq x, Y \leq y)$.

**Definition.** The **joint PDF** (for continuous random variables) is $f_{X,Y}(x, y) \geq 0$ such
that

$$F_{X,Y}(x, y) = \int_{-\infty}^{x}\int_{-\infty}^{y} f_{X,Y}(u, v)\, du\, dv$$

**Definition.** The **marginal PDF** of $X$ is
$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y)\, dy$.

### 3.2 Covariance and Correlation

**Definition.** The **covariance** of $X$ and $Y$ is

$$\mathrm{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$$

**Proposition 2.6.** $\mathrm{Cov}(X, Y) = \mathrm{Cov}(Y, X)$ and
$\mathrm{Cov}(aX + b, cY + d) = ac\,\mathrm{Cov}(X, Y)$.

**Definition.** The **correlation coefficient** is

$$\rho(X, Y) = \frac{\mathrm{Cov}(X, Y)}{\sqrt{\mathrm{Var}(X)\,\mathrm{Var}(Y)}}$$

**Theorem 2.7 (Cauchy--Schwarz for Random Variables).** $|\rho(X, Y)| \leq 1$, with equality if and
only if $Y = aX + b$ almost surely for some $a, b$.

### 3.3 Independence of Random Variables

**Definition.** $X$ and $Y$ are **independent** if $F_{X,Y}(x, y) = F_X(x)\, F_Y(y)$ for all $x, y$.

For continuous random variables, this is equivalent to $f_{X,Y}(x, y) = f_X(x)\, f_Y(y)$.

**Proposition 2.8.** If $X$ and $Y$ are independent, then $\mathrm{Cov}(X, Y) = 0$. The converse is
false.

<details>
<summary>Worked Example: Uncorrelated but Dependent</summary>

_Solution._ Let $X \sim N(0, 1)$ and $Y = X^2$. Then
$\mathrm{Cov}(X, Y) = E[X^3] - E[X]E[X^2] = 0 - 0 \cdot 1 = 0$ (since the third moment of a standard
normal is 0).

But $Y$ is completely determined by $X$, so they are not independent. $\blacksquare$

</details>

### 3.4 Conditional Distributions

**Definition.** The **conditional PDF** of $Y$ given $X = x$ is:

$$f_{Y|X}(y|x) = \frac{f_{X,Y}(x, y)}{f_X(x)}$$

provided $f_X(x) > 0$.

**Definition.** The **conditional expectation** of $Y$ given $X = x$ is:

$$E[Y | X = x] = \int_{-\infty}^{\infty} y\, f_{Y|X}(y|x)\, dy$$

The random variable $E[Y | X]$ has the property that $E[E[Y|X]] = E[Y]$ (law of total expectation).

### 3.5 The Bivariate Normal Distribution

The bivariate normal distribution has joint PDF:

$$f_{X,Y}(x, y) = \frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1 - \rho^2}} \exp\left(-\frac{1}{2(1 - \rho^2)}\left[\frac{(x - \mu_X)^2}{\sigma_X^2} - 2\rho\frac{(x - \mu_X)(y - \mu_Y)}{\sigma_X\sigma_Y} + \frac{(y - \mu_Y)^2}{\sigma_Y^2}\right]\right)$$

where $\rho = \mathrm{Corr}(X, Y)$.

**Properties of the bivariate normal:**
- Marginal distributions are normal: $X \sim N(\mu_X, \sigma_X^2)$, $Y \sim N(\mu_Y, \sigma_Y^2)$.
- Conditional distribution is normal:
  $Y | X = x \sim N\left(\mu_Y + \rho \frac{\sigma_Y}{\sigma_X}(x - \mu_X),\ \sigma_Y^2(1 - \rho^2)\right)$.
- $X$ and $Y$ are independent if and only if $\rho = 0$.

### 3.6 Transformations of Joint Distributions

For a transformation $(U, V) = g(X, Y)$ where $g$ is a diffeomorphism, the joint PDF is:

$$f_{U,V}(u, v) = f_{X,Y}(g^{-1}(u, v)) \cdot |\det J_{g^{-1}}|$$

where $J$ is the Jacobian matrix of the inverse transformation.

**Example.** Let $X, Y$ be independent exponential($\lambda$) random variables. The joint PDF of
$U = X + Y$ and $V = X/(X + Y)$ factors as $f_{U,V}(u, v) = \lambda^2 u e^{-\lambda u}
\cdot \chi_{(0,1)}(v)$, showing $U$ and $V$ are independent with $U \sim \mathrm{Gamma}(2, \lambda)$
and $V \sim \mathrm{Uniform}(0, 1)$.

### 3.7 Sums of Independent Random Variables

If $X$ and $Y$ are independent, the PDF of $Z = X + Y$ is the convolution:

$$f_Z(z) = \int_{-\infty}^{\infty} f_X(z - y)\, f_Y(y)\, dy = \int_{-\infty}^{\infty} f_X(x)\, f_Y(z - x)\, dx$$

For moment generating functions: $M_Z(t) = M_X(t)\, M_Y(t)$.

### 3.8 Practice Problems

**Problem 1.** Let $X$ and $Y$ have joint PDF $f_{X,Y}(x, y) = c(1 - x^2 - y^2)$ for
$x^2 + y^2 \leq 1$. Find $c$, the marginal PDFs, and $P(X > 0, Y > 0)$.

**Problem 2.** Show that if $\mathrm{Cov}(X, Y) = 0$ for a bivariate normal pair, then $X$ and $Y$
are independent.

**Problem 3.** Let $X$ and $Y$ be independent standard normal variables. Find the distribution of
$R = \sqrt{X^2 + Y^2}$ and $\Theta = \arctan(Y/X)$.

_Solution._ $R$ has Rayleigh distribution with PDF $f_R(r) = r e^{-r^2/2}$ for $r \geq 0$, and
$\Theta \sim \mathrm{Uniform}(0, 2\pi)$, and $R$ and $\Theta$ are independent. $\blacksquare$

**Problem 4.** Suppose $X \sim N(0, 1)$ and $Y = X + Z$ where $Z \sim N(0, 1)$ is independent of $X$.
Find the joint distribution of $(X, Y)$ and compute $\mathrm{Cov}(X, Y)$.

### 3.9 Law of Total Probability and Bayes' Theorem for Distributions

**Law of total probability:** $f_Y(y) = \int_{-\infty}^{\infty} f_{Y|X}(y|x)\, f_X(x)\, dx$.

**Bayes' theorem:** $f_{X|Y}(x|y) = \frac{f_{Y|X}(y|x)\, f_X(x)}{f_Y(y)} = \frac{f_{Y|X}(y|x)\, f_X(x)}{\int f_{Y|X}(y|t)\, f_X(t)\, dt}$.

### 3.10 Moment Generating Functions for Joint Distributions

The **joint moment generating function** of $(X, Y)$ is:

$$M_{X,Y}(s, t) = E[e^{sX + tY}]$$

If $X$ and $Y$ are independent, then $M_{X,Y}(s, t) = M_X(s)\, M_Y(t)$. Joint moments can be
recovered by differentiation:

$$E[X^m Y^n] = \frac{\partial^{m+n}}{\partial s^m \partial t^n} M_{X,Y}(s, t)\big|_{s=t=0}$$

### 3.11 Additional Practice Problems

**Problem 5.** Let $(X, Y)$ have joint PDF $f_{X,Y}(x, y) = 6x$ for $0 < x < 1$, $0 < y < 1 - x$.
Find the marginal PDFs and determine if $X$ and $Y$ are independent.

**Problem 6.** Suppose $X$ and $Y$ are independent exponential random variables with rate
$\lambda$. Find the distribution of $X + Y$ and $X/(X + Y)$. Are they independent?

**Problem 7.** Show that $\mathrm{Var}(X) = E[\mathrm{Var}(X|Y)] + \mathrm{Var}(E[X|Y])$ (the
variance decomposition formula).

### 3.12 Common Mistakes

**Mistake 1: Confusing independence with pairwise independence.**
Two random variables $X$ and $Y$ are independent if their joint distribution factors as $F_{X,Y}(x, y) = F_X(x)F_Y(y)$. For three or more variables, pairwise independence (each pair is independent) does not imply mutual independence. There exist random variables $X, Y, Z$ that are pairwise independent but not mutually independent.

**Mistake 2: Assuming that zero covariance implies independence.**
If $X$ and $Y$ are independent, then $\mathrm{Cov}(X, Y) = 0$, but the converse is false. Uncorrelated variables can be dependent. For example, let $X$ be uniform on $\{-1, 0, 1\}$ and $Y = X^2$. Then $\mathrm{Cov}(X, Y) = 0$, but $X$ and $Y$ are not independent.

**Mistake 3: Forgetting that the marginal distribution does not determine the joint distribution.**
Knowing the marginal distributions $f_X(x)$ and $f_Y(y)$ does not determine the joint distribution $f_{X,Y}(x, y)$. The joint distribution also depends on the dependence structure between $X$ and $Y$. Two different joint distributions can have the same marginals.

**Mistake 4: Confusing the correlation coefficient with the slope of a regression line.**
The correlation coefficient $\rho(X, Y)$ measures the strength of the linear relationship between $X$ and $Y$, but it is not the same as the slope of the regression line of $Y$ on $X$. The slope is $\rho(X, Y) \cdot \sigma_Y / \sigma_X$, which depends on the standard deviations.

**Mistake 5: Assuming that linear regression is appropriate for nonlinear relationships.**
Linear regression fits a straight line to the data, but if the relationship between $X$ and $Y$ is nonlinear, the regression line may be misleading. Always check the scatterplot and consider nonlinear models if the relationship appears curved.


## Intuition

Joint distributions describe how two or more random variables vary together. Independence means knowing one variable tells you nothing about the other, which mathematically factorizes the joint distribution into a product. Dependence creates structure: positive correlation means variables tend to move together, negative correlation means they move oppositely. The marginal distribution is what you see when you ignore one variable, like looking at a 3D landscape from above. Conditional distributions slice the joint distribution along one variable, revealing how the other behaves given specific information. These concepts form the backbone of statistical modeling.
## Cross-References

- **[Random Variables](2_random-variables.md)**: Random variables provide the building blocks for constructing joint distributions and analyzing dependence.
- **[Probability Spaces](1_probability-spaces.md)**: Probability spaces provide the measure-theoretic foundation for defining joint distributions.
- **[Limit Theorems](4_limit-theorems.md)**: The central limit theorem extends to sums of independent random variables with different distributions.
