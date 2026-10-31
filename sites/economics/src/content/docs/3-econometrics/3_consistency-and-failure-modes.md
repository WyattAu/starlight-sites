---
date: 2026-10-24T00:00:00+00:00
title: "Consistency and the Failure Modes"
tags:
  - Economics
  - University
description: "What survives when the finite-sample assumptions weaken: consistency of OLS proved from the law of large numbers, and the three classic failures - omitted variables, measurement error with the attenuation formula proved, and simultaneity - each traced to the assumption it breaks."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "3 Econometrics", "url": "https://economics.wyattau.com/3-econometrics"}, {"name": "Consistency and the Failure Modes", "url": "https://economics.wyattau.com/3-econometrics/3_consistency-and-failure-modes"}]
}
</script>

### 1. Why Consistency Is the Practical Guarantee

Unbiasedness is a finite-sample statement: it holds at every $n$ but requires $X$ fixed and
strict exogeneity. Real data has random regressors, and the questions economists ask usually have
no perfect controls. The property that survives is **consistency**:

$$
\operatorname{plim}_{n \to \infty}\, \hat{\beta} = \beta,
$$

meaning $\hat{\beta} \xrightarrow{p} \beta$: for every $\varepsilon > 0$,
$\Pr(|\hat{\beta} - \beta| > \varepsilon) \to 0$ as $n \to \infty$.

Consistency is the practical guarantee because it is the one that more data can deliver — and its
failure is the practical catastrophe, because **inconsistency does not wash out with sample
size**. An inconsistent estimator converges to the wrong number, precisely and efficiently.

### 2. The Assumptions in Large Samples

Work with the random-sampling version of the model: $(y_i, x_i)$ i.i.d., with the population
moment condition

$$
E[x_i u_i] = 0. \tag{A1}
$$

**Definition.** $x_i$ is **exogenous** if (A1) holds. This is strictly weaker than
$E[u_i \mid x_i] = 0$ for every component: (A1) only requires the linear projection of $u$ on
$x$ to be zero. Nonlinear dependence between $u$ and $x$ is tolerated.

Also assume: $\operatorname{Var}(x_i) = Q$ positive definite (no perfect collinearity, in the
population), and $E[x_i^2 u_i^2] < \infty$ (finite second moments).

### 3. Consistency of OLS

**Theorem 3.1.** Under random sampling, (A1), $Q$ positive definite, and finite second moments,

$$
\operatorname{plim}\, \hat{\beta} = \beta.
$$

**Proof.** The finite-sample decomposition holds path-by-path (it is algebra, not probability):

$$
\hat{\beta} - \beta = \left( \frac{1}{n} \sum_i x_i x_i' \right)^{-1} \left( \frac{1}{n} \sum_i x_i u_i \right).
$$

Two laws of large numbers finish it. By the weak LLN for i.i.d. vectors with finite second
moments, $\frac{1}{n} \sum_i x_i x_i' \xrightarrow{p} Q$ — positive definite by assumption, so
the inverse converges to $Q^{-1}$ (continuity of inversion at invertible matrices). And by the
LLN, $\frac{1}{n} \sum_i x_i u_i \xrightarrow{p} E[x_i u_i] = 0$ by (A1). Slutsky's theorem
combines them: the product converges in probability to $Q^{-1} \cdot 0 = 0$. $\blacksquare$

The structure is worth naming because every consistent-methods proof in the subject is it:
**algebra gives a continuous function of sample averages; the LLN turns each average into its
population counterpart; continuity carries convergence through.** Instrumental variables,
GMM, and MLE consistency all follow this skeleton.

### 4. Asymptotic Distribution (Statement)

With finite fourth moments, the central limit theorem gives

$$
\sqrt{n}\,(\hat{\beta} - \beta) \xrightarrow{d} N\bigl(0,\; Q^{-1} \Omega Q^{-1}\bigr),
\qquad \Omega = E[x_i x_i' u_i^2],
$$

so $\hat{\beta}_j$ is approximately normal with variance $\frac{1}{n}(Q^{-1}\Omega Q^{-1})_{jj}$.
Under homoskedasticity $\Omega = \sigma^2 Q$ and this collapses to $\sigma^2 Q^{-1}/n$ — the
Gauss--Markov variance from the finite-sample page. The sandwich form is what heteroskedasticity-
robust (Eicker--White) standard errors estimate, replacing $\Omega$ with its sample analogue.

### 5. The Three Classic Failures

Each failure breaks (A1) — and the theorems above tell you the consequence precisely: OLS
converges to $\beta + Q^{-1} E[x_i u_i]$, the **projection** of $y$ on $x$, not the structural
$\beta$.

**Failure 1: Omitted variables.** The true model has $y = X\beta + Z\delta + u$; you regress on
$X$ only. The error becomes $Z\delta + u$, and
$E[x_i (z_i \delta + u_i)] = \delta\, E[x_i z_i]$ whenever $x$ and $z$ correlate. The bias
direction is signed by $\delta$ and the correlation — the standard omitted-variable table, now
derived rather than recalled.

**Failure 2: Measurement error.** The regressor of interest $x_i^*$ is measured with error:
observed $x_i = x_i^* + \nu_i$, independent of everything, with
$\operatorname{Var}(\nu_i) = \sigma_\nu^2$. Regressing on the mismeasured $x_i$: the composite
error is $u_i - \delta \nu_i$ (in the simple-regression case with reliability ratio derived
below), which is *negatively* correlated with the observed regressor — the measured variable
contains the error, so noise in $x$ drags the estimate toward zero.

**Theorem 5.1 (Attenuation).** In the simple regression $y_i = \beta x_i^* + u_i$ with classical
measurement error $x_i = x_i^* + \nu_i$, OLS of $y$ on the observed $x$ converges to

$$
\operatorname{plim}\, \hat{\beta} = \beta \cdot \frac{\sigma_{x^*}^2}{\sigma_{x^*}^2 + \sigma_\nu^2}.
$$

**Proof.** Write $y_i = \beta x_i + (u_i - \beta \nu_i)$: the regression on the observed $x_i$
has composite error $w_i = u_i - \beta \nu_i$. Then

$$
E[x_i w_i] = E[(x_i^* + \nu_i)(u_i - \beta \nu_i)] = -\beta \sigma_\nu^2
$$

using independence of $\nu$ from $x^*$ and $u$. The probability limit of simple-regression OLS
is $\frac{\operatorname{Cov}(x, y)}{\operatorname{Var}(x)}$: the numerator is
$\operatorname{Cov}(x, y) = \beta \sigma_{x^*}^2$ (the $\nu$ terms drop by independence), and
$\operatorname{Var}(x) = \sigma_{x^*}^2 + \sigma_\nu^2$. The ratio is the stated formula.
$\blacksquare$

Since $\sigma_\nu^2 \geq 0$, the estimate is biased **toward zero** — attenuation — and the bias
factor is the reliability ratio. Pure noise cannot create a relationship, but it dilutes the one
that exists.

**Failure 3: Simultaneity.** Supply and demand are estimated from price-quantity pairs; both
equations contain price, so quantity shocks move price and price shocks move quantity. In the
demand equation, the error (demand shocks) is correlated with price by construction — (A1)
fails structurally, not by accident. The fix is exogenous variation: instruments that move
supply without moving demand (the IV track, coming), whose validity conditions are exactly
replacements for (A1).

### 6. The Diagnostic Discipline

The theorems give a checklist rather than a mood:

1. Name the decision the estimate informs.
2. Ask which unobservables are in $u$.
3. Ask whether any regressor correlates with them — that is (A1)'s failure and the bias's sign.
4. Only then reach for the remedy: controls, instruments, or design.

Remedies chosen before step 3 are decoration.

### 7. Self-test

1. Why is (A1) weaker than $E[u \mid X] = 0$? (§2 — zero linear projection tolerates nonlinear
   dependence.)
2. State the three-step skeleton of every consistency proof. (§3 — algebra to sample averages,
   LLN, continuity.)
3. In Theorem 5.1, where does the minus sign in $E[x_i w_i]$ come from? (§5 — the observed
   regressor contains $\nu_i$ positively, the composite error contains it negatively.)
4. A study doubles its sample and the estimate moves closer to zero. Which failure mode does
   this pattern suggest, and why does the movement *not* contradict consistency? (§5 —
   attenuation: the plim itself is shrunken; more data converges to the shrunken value more
   precisely, not to the truth.)
