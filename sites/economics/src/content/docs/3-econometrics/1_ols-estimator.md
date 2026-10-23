---
date: 2026-10-23T00:00:00+00:00
title: "The OLS Estimator"
tags:
  - Economics
  - University
description: "The OLS estimator from the orthogonality condition up: algebraic properties proved, the finite-sample decomposition, and unbiasedness under strict exogeneity with exactly which hypothesis is used located in the proof."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "3 Econometrics", "url": "https://economics.wyattau.com/3-econometrics"}, {"name": "The OLS Estimator", "url": "https://economics.wyattau.com/3-econometrics/1_ols-estimator"}]
}
</script>

### 1. The Linear Model

**Definition.** The linear model posits

$$
y = X\beta + u,
$$

where $y$ is $n \times 1$, $X$ is $n \times k$ non-stochastic (this pass) with full column rank
$k < n$, $\beta$ is $k \times 1$, and $u$ is $n \times 1$ unobserved.

### 2. Least Squares as Orthogonality

**Definition.** The OLS estimator $\hat{\beta}$ minimises the residual sum of squares
$S(\beta) = (y - X\beta)'(y - X\beta)$.

**Proposition 2.1.** $\hat{\beta}$ exists, is unique, and equals $(X'X)^{-1}X'y$.

**Proof.** Expand: $S(\beta) = y'y - 2\beta'X'y + \beta'X'X\beta$. Since $X$ has full column
rank, $X'X$ is positive definite: for $\beta \neq 0$, $\beta'X'X\beta = \|X\beta\|^2 > 0$ (the
norm vanishes only if $X\beta = 0$, and full column rank means $X\beta = 0$ forces $\beta = 0$).
So $S$ is a strictly convex quadratic — its unique stationary point is the global minimum.
Setting the gradient to zero: $\nabla S = -2X'y + 2X'X\beta = 0$, giving
$(X'X)\hat{\beta} = X'y$; positive definiteness makes $X'X$ invertible, so
$\hat{\beta} = (X'X)^{-1}X'y$. $\blacksquare$

**Theorem 2.2 (Orthogonality).** The residuals are orthogonal to the regressors:
$X'\hat{u} = 0$, where $\hat{u} = y - X\hat{\beta}$.

**Proof.** $X'\hat{u} = X'y - X'X\hat{\beta} = X'y - X'X(X'X)^{-1}X'y = X'y - X'y = 0$.
$\blacksquare$

This is the defining property, and it is what "least squares" *means* geometrically: the residual
vector is perpendicular to the column space of $X$, so no direction inside the regressor space
can further reduce it. Every failure of OLS in practice — endogeneity most famously — is a
failure of the population analogue of this orthogonality to identify something meaningful.

### 3. Algebraic Consequences

**Proposition 3.1.** If a constant is included in $X$, then $\sum_i \hat{u}_i = 0$ and
$\bar{y} = \bar{\hat{y}}$.

**Proof.** Orthogonality applied to the constant column $\mathbf{1}$:
$\mathbf{1}'\hat{u} = \sum_i \hat{u}_i = 0$. Then $\bar{\hat{y}} = \bar{y} - \bar{\hat{u}} = \bar{y}$.
$\blacksquare$

**Proposition 3.2.** The fitted values and residuals decompose the data exactly:
$y = \hat{y} + \hat{u}$ with $\hat{y}'\hat{u} = 0$, so $\|y\|^2 = \|\hat{y}\|^2 + \|\hat{u}\|^2$.

**Proof.** $\hat{y} = X\hat{\beta}$ lies in the column space of $X$, and $\hat{u}$ is orthogonal
to that space (Theorem 2.2), so $\hat{y}'\hat{u} = 0$. The norm identity is Pythagoras.
$\blacksquare$

$R^2 = 1 - \|\hat{u}\|^2/\|y - \bar{y}\|^2$ follows when a constant is included.

### 4. The Finite-Sample Decomposition

Everything about the estimator's behaviour flows through one identity. Substituting
$y = X\beta + u$:

$$
\hat{\beta} = (X'X)^{-1}X'y = (X'X)^{-1}X'(X\beta + u) = \beta + (X'X)^{-1}X'u.
$$

**Definition.** $\hat{\beta} - \beta = (X'X)^{-1}X'u$ is the **sampling error**.

Two hypotheses convert this identity into guarantees, and it is worth naming which buys which:

- **Strict exogeneity**: $E[u \mid X] = 0$. This buys *unbiasedness*.
- **Homoskedasticity + no serial correlation**: $\operatorname{Var}(u \mid X) = \sigma^2 I_n$.
  This buys the *variance formula* and, with the next page's construction, *efficiency*.

### 5. Unbiasedness

**Theorem 5.1.** If $E[u \mid X] = 0$, then $E[\hat{\beta}] = \beta$.

**Proof.** By the decomposition, $E[\hat{\beta} \mid X] = \beta + (X'X)^{-1}X'E[u \mid X] = \beta$
— conditioning on $X$ makes $(X'X)^{-1}X'$ a fixed matrix, so it pulls through the conditional
expectation, and strict exogeneity kills the second term. Then the tower law gives
$E[\hat{\beta}] = E\bigl[E[\hat{\beta} \mid X]\bigr] = \beta$. $\blacksquare$

The proof shows precisely where exogeneity enters: the term $(X'X)^{-1}X'E[u\mid X]$ is the
source of **omitted-variable bias** when it fails. If an omitted determinant of $y$ is correlated
with a regressor, $E[u \mid X] \neq 0$, the term is nonzero, and $\hat{\beta}$ is biased *no
matter how large the sample* — bias is a finite-sample disease that more data does not cure.

### 6. The Variance

**Theorem 6.1.** Under strict exogeneity and spherical errors
($\operatorname{Var}(u \mid X) = \sigma^2 I_n$):

$$
\operatorname{Var}(\hat{\beta} \mid X) = \sigma^2 (X'X)^{-1}.
$$

**Proof.** Condition on $X$ so that only $u$ is random:

$$
\operatorname{Var}(\hat{\beta} \mid X) = \operatorname{Var}\bigl((X'X)^{-1}X'u \mid X\bigr)
= (X'X)^{-1}X' \, \sigma^2 I_n \, X (X'X)^{-1} = \sigma^2 (X'X)^{-1},
$$

using $\operatorname{Var}(Au) = A\,\operatorname{Var}(u)\,A'$ with
$A = (X'X)^{-1}X'$, and the middle cancels to $(X'X)^{-1}$ since
$X'X(X'X)^{-1} = I$. $\blacksquare$

Diagonal element $j$: $\operatorname{Var}(\hat{\beta}_j) = \sigma^2 (X'X)^{-1}_{jj}$ — the
standard errors that every regression table reports (with $\sigma^2$ estimated by
$s^2 = \hat{u}'\hat{u}/(n-k)$, unbiased as shown next).

**Proposition 6.2.** $s^2 = \hat{u}'\hat{u}/(n-k)$ is unbiased for $\sigma^2$ under spherical
errors.

**Proof sketch.** $\hat{u} = Mu$ with $M = I - X(X'X)^{-1}X'$ the residual-maker, which is
symmetric idempotent ($M' = M$, $M^2 = M$ — verify by direct multiplication) with rank $n - k$.
Then $\hat{u}'\hat{u} = u'Mu$, and
$E[u'Mu \mid X] = \sigma^2\operatorname{tr}(M) = \sigma^2(n-k)$, using
$E[u'Au] = \sigma^2\operatorname{tr}(A)$ for spherical $u$ and
$\operatorname{tr}(M) = n - \operatorname{tr}(X(X'X)^{-1}X') = n - k$ by the trace cyclic identity.
Divide by $n - k$. $\blacksquare$

### 7. What OLS Does Not Promise

Note what has *not* been proved. Nothing yet says $\hat{\beta}$ is the most accurate unbiased
estimator, nor that it is consistent under weak assumptions, nor that its standard errors are
valid under heteroskedasticity. The next page proves the efficiency claim — Gauss--Markov — and
the proof shows the exact role of each hypothesis. Later pages handle what survives when the
hypotheses fail.

### Self-test

1. Where does full column rank enter the existence proof? (§2 — strict convexity needs
   $X'X$ positive definite.)
2. Which hypothesis buys unbiasedness, and where exactly does the proof use it? (§5 —
   $E[u \mid X] = 0$, inside the conditional expectation.)
3. Why does more data not cure omitted-variable bias? (§5 — the bias term
   $(X'X)^{-1}X'E[u\mid X]$ does not vanish with $n$.)
4. State the role of $M$'s idempotence in Proposition 6.2. (Trace of an idempotent equals its
   rank.)
