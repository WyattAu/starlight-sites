---
date: 2026-10-23T00:00:00+00:00
title: "The Gauss--Markov Theorem"
tags:
  - Economics
  - University
description: "The Gauss--Markov theorem proved in full by completing the square: under strict exogeneity and spherical errors, OLS is the best linear unbiased estimator, and the proof shows exactly which hypothesis buys which part."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "3 Econometrics", "url": "https://economics.wyattau.com/3-econometrics"}, {"name": "The Gauss--Markov Theorem", "url": "https://economics.wyattau.com/3-econometrics/2_gauss-markov"}]
}
</script>

### 1. The Claim

**Theorem (Gauss--Markov).** Under the linear model with strict exogeneity
$E[u \mid X] = 0$ and spherical errors $\operatorname{Var}(u \mid X) = \sigma^2 I_n$, the OLS
estimator $\hat{\beta} = (X'X)^{-1}X'y$ is the **best linear unbiased estimator** (BLUE): among
all estimators of the form $\tilde{\beta} = Cy$ with $C$ any fixed $k \times n$ matrix that is
unbiased, $\hat{\beta}$ has the smallest variance —
$\operatorname{Var}(\tilde{\beta} \mid X) - \operatorname{Var}(\hat{\beta} \mid X)$ is positive
semidefinite for every competitor $\tilde{\beta}$.

Read the claim carefully — three restrictions, each essential:

- **Linear**: $\tilde{\beta} = Cy$ for fixed $C$. Nonlinear estimators are not covered (some beat
  OLS under normality — the James--Stein phenomenon).
- **Unbiased**: $E[\tilde{\beta}] = \beta$ for all $\beta$. Biased-but-smaller estimators (ridge)
  are not covered.
- **Best**: smallest variance in the matrix sense — every linear combination
  $a'\tilde{\beta}$ has variance at least $a'\operatorname{Var}(\hat{\beta})a$.

### 2. The Competition

Let $\tilde{\beta} = Cy$ be any linear unbiased estimator. Write $C = (X'X)^{-1}X' + D$ for some
$k \times n$ matrix $D$ — every $C$ decomposes this way, since $(X'X)^{-1}X'$ is one such matrix
and $D$ collects the difference.

**Lemma 2.1.** $\tilde{\beta}$ unbiased for all $\beta$ (with $X$ fixed) iff $DX = 0$.

**Proof.** $E[\tilde{\beta}] = C X\beta = \bigl[(X'X)^{-1}X' + D\bigr]X\beta = \beta + DX\beta$.
For this to equal $\beta$ for *every* $\beta$, we need $DX\beta = 0$ for all $\beta$, i.e.
$DX = 0$. The converse is immediate. $\blacksquare$

This is the first place a hypothesis earns its keep: unbiasedness *for all $\beta$* is what
forces $DX = 0$, and $DX = 0$ is what the main computation will exploit. An estimator that is
unbiased only at some particular $\beta$ escapes the theorem — which is why the theorem is a
statement about estimator *procedures*, not estimates.

### 3. The Variance Difference

Compute the competitor's variance conditional on $X$. With $\tilde{\beta} = Cy$ and
$\operatorname{Var}(y \mid X) = \sigma^2 I_n$:

$$
\operatorname{Var}(\tilde{\beta} \mid X) = \sigma^2 CC' = \sigma^2\bigl[(X'X)^{-1}X' + D\bigr]\bigl[(X'X)^{-1}X' + D\bigr]'.
$$

Expand the product into four terms and use $DX = 0$ (which also implies
$X D' = (DX)' = 0$):

- $(X'X)^{-1}X'X(X'X)^{-1} = (X'X)^{-1}$ — the OLS variance, from Theorem 6.1 of the previous
  page.
- $(X'X)^{-1}X'D' = (X'X)^{-1}(DX)' = 0$ — killed by unbiasedness.
- $DX(X'X)^{-1} = 0$ — killed by unbiasedness.
- $DD'$ — the only surviving new term.

So

$$
\operatorname{Var}(\tilde{\beta} \mid X) = \sigma^2 (X'X)^{-1} + \sigma^2 DD' = \operatorname{Var}(\hat{\beta} \mid X) + \sigma^2 DD'.
$$

### 4. Positive Semidefiniteness

**Theorem (Gauss--Markov, conclusion).** For any vector $a \in \mathbb{R}^k$,

$$
a'\operatorname{Var}(\tilde{\beta} \mid X)a - a'\operatorname{Var}(\hat{\beta} \mid X)a = \sigma^2 a'DD'a = \sigma^2\|D'a\|^2 \geq 0.
$$

**Proof.** $a'DD'a = (D'a)'(D'a) = \|D'a\|^2$, a squared norm — nonnegative, and zero only when
$D'a = 0$. Since $\sigma^2 > 0$, the difference is a nonnegative quadratic form. $\blacksquare$

In particular, the variance of any scalar combination $a'\tilde{\beta}$ — a single coefficient
$a = e_j$, a difference of coefficients, a prediction — is at least as large under the competitor
as under OLS. Strictness: equality for *all* $a$ forces $D'a = 0$ for all $a$, hence $D = 0$,
hence $\tilde{\beta} = \hat{\beta}$ — OLS is the *unique* BLUE unless a competitor coincides
with it.

### 5. Which Hypothesis Bought Which Part

The decomposition of the proof is a menu of what fails when a hypothesis fails:

<div class="table-wrap">

| Hypothesis | Used at | What breaks without it |
| --- | --- | --- |
| Linearity of the model ($y = X\beta + u$) | §2, the decomposition | The whole setup |
| Spherical errors ($\sigma^2 I_n$) | §3, $\operatorname{Var}(y\mid X)$ | The variance comparison is no longer $\sigma^2 CC'$; OLS can be beaten by GLS |
| Fixed $X$, unbiasedness for all $\beta$ | Lemma 2.1, $DX = 0$ | The cross terms need not vanish; a biased competitor can win |
| Linear class | Claim §1 | Nonlinear estimators escape the theorem entirely |

</div>

The most economically important row is spherical errors. Cross-sectional data routinely
exhibit heteroskedasticity — the variance of $u$ differs across units — and then OLS is not
BLUE: generalised least squares strictly dominates. What survives is consistency and valid
inference via heteroskedasticity-robust standard errors (later pages), which is why the applied
default is OLS with robust errors rather than GLS.

### 6. Self-test

1. Why does the proof need unbiasedness *for all $\beta$* rather than at the true value?
   (Lemma 2.1 — the condition $DX = 0$ is uniform in $\beta$.)
2. Where would the proof collapse under heteroskedasticity? (§3 —
   $\operatorname{Var}(y \mid X)$ is no longer $\sigma^2 I_n$, so the cross terms are not
   forced to zero by $DX = 0$ alone; the surviving matrix is no longer $DD'$.)
3. Is OLS the best estimator under normality? (No — BLUE is the best *linear unbiased*;
   under normality the James--Stein estimator dominates in mean square in dimensions $k \geq 3$,
   trading a little bias for a lot of variance.)

### Where to go next

- [The OLS Estimator](/3-econometrics/1_ols-estimator/) — the decomposition this proof builds on.
- Consistency and asymptotics — the guarantees that survive weaker exogeneity (next in track).
