---
date: 2026-10-24T00:00:00+00:00
title: "Inference: Standard Errors, t-Tests, and Robust Variance"
tags:
  - Economics
  - University
description: "Hypothesis testing for the OLS estimator: the t-statistic under homoskedasticity, the Eicker--White robust variance estimator proved consistent, why robust standard errors are the applied default, and what p-values do and do not mean."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "3 Econometrics", "url": "https://economics.wyattau.com/3-econometrics"}, {"name": "Inference", "url": "https://economics.wyattau.com/3-econometrics/5_inference"}]
}
</script>

### 1. The Question Inference Answers

The estimator gives a point: $\hat{\beta}_j = 0.8$. The question inference answers: *is the
distinguishable from zero?* — that is, is the observed $\hat{\beta}_j$ distinguishable from the
sampling noise that a true $\beta_j = 0$ would produce? The answer requires the estimator's
distribution, its variance, and a decision rule.

### 2. The t-Statistic Under Spherical Errors

**Definition.** For the null $H_0: \beta_j = 0$ against $\beta_j \neq 0$:

$$
t_j = \frac{\hat{\beta}_j}{\operatorname{SE}(\hat{\beta}_j)}, \qquad
\operatorname{SE}(\hat{\beta}_j) = s\sqrt{(X'X)^{-1}_{jj}},
$$

with $s^2 = \hat{u}'\hat{u}/(n-k)$ the unbiased variance estimate (proved on the OLS page).

**Theorem 2.1.** Under strict exogeneity, spherical errors, **and normality**
($u_i \overset{iid}{\sim} N(0, \sigma^2)$), $t_j$ follows the $t$ distribution with $n - k$
degrees of freedom.

**Proof.** Three standardised pieces. (i) $\hat{\beta}_j \mid X \sim N(\beta_j,\;
\sigma^2 (X'X)^{-1}_{jj})$: a linear combination of normal $u_i$s is normal — normality enters
*only here*. (ii) $\frac{(n-k)s^2}{\sigma^2} \sim \chi^2_{n-k}$: the residual sum of squares is
$u'Mu$ with $M$ symmetric idempotent of rank $n-k$; a quadratic form $u'Au/\sigma^2$ with $A$
idempotent and $u \sim N(0, \sigma^2 I)$ is $\chi^2_{\operatorname{rank}(A)}$ — a standard
result whose proof is the spectral decomposition of $A$. (iii) $\hat{\beta}_j$ and $s^2$ are
*independent*: $M$ projects onto the orthogonal complement of the column space of $X$, and
$\hat{\beta}$ lives in that column space — for jointly normal vectors, orthogonality of the
projections implies independence.

Then $t_j = \frac{\hat{\beta}_j / \operatorname{SE}}{\sqrt{\chi^2_{n-k}/(n-k)}}$ is a standard
normal divided by an independent $\chi^2$ over its degrees of freedom — the $t$ distribution's
definition. $\blacksquare$

**Where normality entered: only step (i).** Drop it and $t_j$ is still approximately $N(0,1)$
for large $n$ (the CLT acts on $\hat{\beta}_j$; the $\chi^2$ converges to its mean) — the
approximation is what makes the t-table usable at $n \geq 30$–50 without normality.

### 3. Heteroskedasticity Breaks the Standard Errors

**Theorem 3.1.** Without homoskedasticity, $s\sqrt{(X'X)^{-1}_{jj}}$ is **not** a consistent
estimator of $\sqrt{\operatorname{Var}(\hat{\beta}_j \mid X)}$.

**Proof.** Under heteroskedasticity $\operatorname{Var}(u \mid X) = \Omega$ (diagonal, unequal
diagonal), the true variance is the sandwich
$\frac{1}{n}(Q^{-1}\Omega Q^{-1})_{jj}$ (from the asymptotic distribution on the consistency
page). The reported standard error converges to
$s\sqrt{(X'X)^{-1}_{jj}} \to \sigma\sqrt{(X'X)^{-1}_{jj}}$ — which equals the sandwich term only
when $\Omega = \sigma^2 I$. With unequal variances the two differ by the off-diagonal weights,
so the reported SE is wrong by a factor that does not vanish with $n$. $\blacksquare$

The consequence: t-statistics computed with classical standard errors under
heteroskedasticity are inflated or deflated arbitrarily — "significant" coefficients that are
noise, and noise flagged as significant.

### 4. The Robust (Eicker--White) Variance Estimator

**Definition.** The heteroskedasticity-robust estimator of the sandwich's centre:

$$
\hat{\Omega} = \frac{1}{n} \sum_i x_i x_i' \hat{u}_i^2.
$$

**Theorem 4.1.** $\hat{\Omega} \xrightarrow{p} \Omega$ under random sampling and finite fourth
moments — and the robust variance
$\frac{1}{n}(Q^{-1}\hat{\Omega}Q^{-1})_{jj}$ consistently estimates
$\operatorname{Var}(\hat{\beta}_j \mid X)$ *whether or not* the errors are homoskedastic.

**Proof.** Each term $x_i x_i' \hat{u}_i^2$ is an i.i.d. random matrix with expectation
$E[x_i x_i' u_i^2] = \Omega$ (the errors' conditional variance enters through
$E[u_i^2 \mid x_i]$; under the weakest form of homoskedastic-irrelevance this equals
$\Omega = \operatorname{Var}(u_i \mid x_i)$ evaluated at the conditional variance function).
Finite fourth moments make the LLN apply to these matrices:
$\hat{\Omega} \xrightarrow{p} \Omega$. The robust variance formula plugs $\hat{\Omega}$ into
the sandwich $Q^{-1}\Omega Q^{-1}$ — consistent by the continuity of matrix multiplication at
invertible $Q$. When the errors *are* homoskedastic, $\Omega = \sigma^2 Q$ and the sandwich
collapses to $\sigma^2 Q^{-1}$ — the classical formula. So the estimator is consistent under
both regimes: robust *means* valid under either. $\blacksquare$

The applied default follows: report OLS with robust standard errors. Under homoskedasticity
they cost a little efficiency in the SE estimate; under heteroskedasticity they are correct
while classical SEs are wrong — an asymmetric bet that robustness wins.

### 5. What p-Values Do and Do Not Mean

A p-value of 0.03 answers: *if* $\beta_j = 0$ were true, the probability of observing a
t-statistic this extreme is 3%. It does **not** say the probability that $\beta_j = 0$ is 3%,
does not measure the effect's size (a tiny effect with a huge sample gets a tiny p-value —
report the magnitude and its confidence interval alongside), and does not survive the
specification search that produced the regression (the multiple-testing problem: run twenty
specifications and one will show p = 0.05 by chance at the 5% level — exactly the failure the
first welfare theorem's "in principle" clause teaches about design vs hope).

### 6. Self-test

1. Where does normality enter Theorem 2.1, and what replaces it in large samples? (§2 — step
   (i) only; the CLT for large $n$.)
2. Why is the classical SE inconsistent under heteroskedasticity, in one sentence from the
   proof? (§3 — it converges to $\sigma\sqrt{(X'X)^{-1}_{jj}}$, which equals the sandwich only
   under $\Omega = \sigma^2 I$.)
3. Why is the robust estimator valid under *both* regimes? (§4 — the sandwich with $\hat{\Omega}$
   collapses to the classical formula when $\Omega = \sigma^2 Q$.)
4. A coefficient has p = 0.001 with magnitude 0.01 on a scale where 10 matters. What does the
   p-value tell you, and what does it not? (§5 — distinguishable from zero; not that it matters.)
