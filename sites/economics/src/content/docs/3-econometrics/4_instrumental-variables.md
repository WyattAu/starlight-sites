---
date: 2026-10-24T00:00:00+00:00
title: "Instrumental Variables and 2SLS"
tags:
  - Economics
  - University
description: "The remedy for endogeneity derived: the IV estimator, two-stage least squares proved consistent, the exclusion and relevance conditions located in the proof, and the logic-order check that distinguishes instruments from controls."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "3 Econometrics", "url": "https://economics.wyattau.com/3-econometrics"}, {"name": "Instrumental Variables and 2SLS", "url": "https://economics.wyattau.com/3-econometrics/4_instrumental-variables"}]
}
</script>

### 1. The Problem IV Solves

The consistency page derived the failure: OLS converges to $\beta + Q^{-1}E[x_i u_i]$, and when
a regressor correlates with the error — omitted ability behind education, simultaneity behind
price — the limit is not the structural $\beta$. Controls can absorb the correlation only if the
omitted variable is observed and linear enough; instruments replace the control strategy
entirely.

**Definition.** An **instrument** $z_i$ for the endogenous regressor $x_i$ satisfies:

1. **Relevance**: $\operatorname{Cov}(z_i, x_i) \neq 0$ — the instrument moves the regressor.
2. **Exclusion**: $z_i$ affects $y_i$ *only through* $x_i$ — in the population,
   $E[z_i u_i] = 0$, and $z_i$ has no direct channel into $y_i$.

Relevance is testable; exclusion is not. It is an identifying assumption — the part of IV that
rests on institutional knowledge rather than statistics, and the part every referee asks about
first.

### 2. The IV Estimator (One Regressor, One Instrument)

**Definition.** With scalar $x$ and instrument $z$, the IV estimator is

$$
\hat{\beta}_{IV} = \frac{\sum_i (z_i - \bar{z})(y_i - \bar{y})}{\sum_i (z_i - \bar{z})(x_i - \bar{x})}.
$$

**Motivation.** OLS divides $\operatorname{Cov}(x, y)$ by $\operatorname{Var}(x)$. But
$\operatorname{Cov}(x, y)$ contains both the structural effect and the endogeneity channel. The
IV estimator divides $\operatorname{Cov}(z, y)$ by $\operatorname{Cov}(z, x)$: the numerator
picks up $y$'s response to $x$ *as moved by $z$* (plus $z$'s direct effect — which exclusion
sets to zero), and the denominator is exactly how much $z$ moves $x$.

### 3. Consistency of the IV Estimator

**Theorem 3.1.** Under random sampling, relevance, and exclusion ($E[z_i u_i] = 0$), 

$$
\operatorname{plim}\, \hat{\beta}_{IV} = \beta.
$$

**Proof.** Write the model $y_i = \beta x_i + u_i$, subtract means, and compute the probability
limit of the numerator and denominator separately (the skeleton from the consistency page:
algebra to sample averages, LLN, continuity).

Numerator: $E[(z_i - \bar{z})(y_i - \bar{y})] = \operatorname{Cov}(z, y)
= \operatorname{Cov}(z, \beta x + u) = \beta\operatorname{Cov}(z, x) + \operatorname{Cov}(z, u)$.

Denominator: $\operatorname{Cov}(z, x)$ — nonzero by relevance.

Exclusion sets $\operatorname{Cov}(z, u) = 0$; so the ratio's probability limit is

$$
\frac{\beta \operatorname{Cov}(z, x) + 0}{\operatorname{Cov}(z, x)} = \beta. \qquad \blacksquare
$$

Every assumption sits visibly in the proof: exclusion zeroes the second numerator term;
relevance keeps the denominator away from zero. A **weak** instrument
($\operatorname{Cov}(z, x) \approx 0$) leaves the estimator consistent in the limit but badly
behaved in finite samples — the ratio amplifies whatever small correlation of $z$ with $u$
remains, which is why first-stage $F$-statistics above 10 became the convention.

### 4. Two-Stage Least Squares

**Definition (2SLS).** With regressors $X$ (some endogenous) and instruments $Z$ (same
dimension as $X$ for the just-identified case; otherwise more), the 2SLS estimator is

$$
\hat{\beta}_{2SLS} = (X' P_Z X)^{-1} X' P_Z y, \qquad P_Z = Z(Z'Z)^{-1}Z',
$$

— equivalently: regress each column of $X$ on $Z$ to get fitted $\hat{X} = P_Z X$, then
regress $y$ on $\hat{X}$.

**Theorem 4.1.** $\operatorname{plim}\, \hat{\beta}_{2SLS} = \beta$ under relevance and
exclusion of $Z$ (with $E[z_i u_i] = 0$ for every instrument).

**Proof.** Substitute $y = X\beta + u$ into the 2SLS formula:

$$
\hat{\beta}_{2SLS} = \beta + (X' P_Z X)^{-1} X' P_Z u.
$$

So the sampling error is $(X'P_ZX)^{-1} X'P_Z u$, and the consistency argument needs its
probability limit to vanish. Two LLNs, exactly as on the consistency page:
$\frac{1}{n} X'P_ZX \xrightarrow{p} Q_{XZ} Q_Z^{-1} Q_{ZX}$, positive definite when the order
condition holds (instruments at least as many as endogenous regressors, relevance for each);
and $\frac{1}{n} X'P_Z u \xrightarrow{p} \operatorname{Cov}(\hat{x}, u)$ where $\hat{x}$ is the
projected regressor. Now the assumption that does all the work: every instrument is excluded,
$E[z_i u_i] = 0$, which makes $E[\hat{x}_i u_i] = 0$ too — the *projection* of $x$ on $z$ is a
linear combination of excluded instruments, so its covariance with $u$ is zero by linearity.
The numerator converges to zero, the inverse stays bounded, Slutsky finishes. $\blacksquare$

The projection step is why the second stage "works": regressing $y$ on $\hat{X}$ rather than
$X$ strips out the endogenous component of $X$ — the part uncorrelated with $Z$ — and keeps
only the instrument-driven variation, which exclusion certifies as clean.

### 5. The Logic-Order Check

The strongest practical tool IV gives is not the estimator but the *ordering discipline*: for
each variable, ask whether it belongs in the structural equation (a control) or outside it (an
instrument). The two roles have opposite requirements — a control must soak up variation in $u$;
an instrument must be independent of $u$. A variable cannot do both, and using one variable for
both roles is the classic IV mistake. Concretely: an instrument must satisfy exclusion, so any
variable that plausibly belongs in the structural equation is disqualified as an instrument for
it — which is why the institutional argument for the instrument (rainfall for agricultural
output, distance for trade costs, quarter-of-birth for schooling) is the substance of an IV
paper, and the algebra above is the frame it hangs on.

### 6. Self-test

1. Which IV assumption enters the numerator and which the denominator of the estimator?
   (Exclusion zeroes the numerator's second term; relevance keeps the denominator nonzero.)
2. Why does a weak instrument threaten finite-sample behaviour but not the probability limit?
   (§3 — the plim is a ratio with numerator proportional to the same small covariance; the
   finite-sample ratio amplifies the residual $E[z u]$ noise.)
3. In 2SLS, why must *every* instrument be excluded, not just the endogenous regressor's
   favourite? (§4 — $\hat{X}$ is a linear combination of all instruments; one bad instrument
   contaminates the projection.)
4. Why can't the same variable be a control and an instrument? (§5 — a control correlates with
   $u$ by design; an instrument must not.)
