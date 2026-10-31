---
date: 2026-10-24T00:00:00+00:00
title: "Mean--Variance Optimisation, Two-Fund Separation, and the CAPM"
tags:
  - Finance
  - University
description: "Portfolio choice solved by Lagrangian: the minimum-variance frontier derived, two-fund separation proved, the tangency portfolio constructed, and the CAPM derived from market clearing - every step shown."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "2 Portfolio Theory", "url": "https://finance.wyattau.com/2-portfolio-theory"}, {"name": "Mean--Variance Optimisation", "url": "https://finance.wyattau.com/2-portfolio-theory/1_mean-variance-and-capm"}]
}
</script>

### 1. The Investor's Problem

**Definition.** With $n$ risky assets, expected returns $\mu \in \mathbb{R}^n$, and covariance
matrix $\Sigma$ (symmetric, positive definite), a portfolio is a weight vector $w$ with
$\mathbf{1}'w = 1$. Its mean is $w'\mu$ and its variance is $w'\Sigma w$. The investor picks $w$
to minimise variance for a target mean $\mu_p$:

$$
\min_w \; \tfrac{1}{2} w'\Sigma w \quad \text{s.t.} \quad \mathbf{1}'w = 1, \;\; \mu'w = \mu_p.
$$

Positive definiteness of $\Sigma$ is the assumption doing the work: without it, some direction
reduces variance indefinitely (an arbitrage in disguise), and the minimiser is not unique.

### 2. The Frontier Is Two Funds

**Theorem 2.1 (Two-fund separation, risky case).** Every minimum-variance portfolio is a
combination of two fixed portfolios.

**Proof.** The Lagrangian is

$$
\mathcal{L} = \tfrac{1}{2} w'\Sigma w - \lambda\left(\mathbf{1}'w - 1\right) - \gamma\left(\mu'w - \mu_p\right).
$$

The first-order condition, using $\Sigma' = \Sigma$:

$$
\Sigma w = \lambda \mathbf{1} + \gamma \mu
\quad\Longrightarrow\quad
w = \lambda\, \Sigma^{-1}\mathbf{1} + \gamma\, \Sigma^{-1}\mu,
$$

dividing by $\lambda + \gamma\mu_p \neq 0$ and defining

$$
w_g = \frac{\Sigma^{-1}\mathbf{1}}{\mathbf{1}'\Sigma^{-1}\mathbf{1}}, \qquad
w_d = \frac{\Sigma^{-1}\mu}{\mathbf{1}'\Sigma^{-1}\mu},
$$

every frontier portfolio is $w = A\, w_g + (1 - A)\, w_d$ for some scalar $A$: a combination of
the **global minimum-variance portfolio** $w_g$ and any single distinct frontier portfolio $w_d$.
The two constraint equations pin $\lambda$ and $\gamma$ for each $\mu_p$; the structure above is
what the theorem asserts. $\blacksquare$

This is why "two funds"; an investor holding any efficient combination needs only those two
portfolios, regardless of how many assets exist.

### 3. Adding a Risk-Free Asset: The Tangency Portfolio

**Definition.** With a risk-free asset returning $r_f < \min_i \mu_i$, weights extend to
$w \in \mathbb{R}^n$ with the remainder $1 - \mathbf{1}'w$ in the risk-free asset. The problem
loses the budget constraint:

$$
\min_w \; \tfrac{1}{2} w'\Sigma w \quad \text{s.t.} \quad \mu'w + r_f(1 - \mathbf{1}'w) = \mu_p.
$$

**Theorem 3.1.** Every efficient portfolio holds the risk-free asset and one fixed risky
portfolio, the **tangency portfolio**:

$$
w_t = \frac{\Sigma^{-1}(\mu - r_f \mathbf{1})}{\mathbf{1}'\Sigma^{-1}(\mu - r_f \mathbf{1})}.
$$

**Proof.** The Lagrangian's first-order condition:

$$
\Sigma w = \gamma(\mu - r_f \mathbf{1})
\quad\Longrightarrow\quad
w \propto \Sigma^{-1}(\mu - r_f \mathbf{1}).
$$

For each target $\mu_p$, the scalar $\gamma$ scales the *same* direction
$\Sigma^{-1}(\mu - r_f\mathbf{1})$; only the risk-free allocation $1 - \mathbf{1}'w$ adjusts.
Normalising the risky weights to sum to one gives $w_t$. Every efficient portfolio is
$(1 - \alpha) R_f + \alpha\, w_t$: cash plus the tangency. $\blacksquare$

Geometrically: in mean--standard-deviation space, efficient combinations trace the line from
$(0, r_f)$ tangent to the risky frontier; the line with the maximum Sharpe ratio. The tangency
point is $w_t$; its slope is $\max$ Sharpe.

### 4. Market Clearing Makes the Tangency the Market

**Theorem 4.1 (CAPM).** If every investor holds the tangency portfolio and markets clear, then
for every asset $i$:

$$
\mu_i - r_f = \beta_i (\mu_M - r_f), \qquad
\beta_i = \frac{\operatorname{Cov}(r_i, r_M)}{\operatorname{Var}(r_M)}.
$$

**Proof.** Summing every investor's risky holdings: aggregate risky demand is proportional to
$w_t$ (each investor holds $w_t$ scaled by her wealth and risk appetite). Market clearing says
aggregate demand equals the aggregate supply of risky assets; the value-weighted **market
portfolio** $M$. So $M = w_t$: the tangency *is* the market.

Now use the tangency's first-order condition. From $\Sigma w_t = \gamma(\mu - r_f\mathbf{1})$,
row $i$ reads $\operatorname{Cov}(r_i, r_{w_t}) = \gamma(\mu_i - r_f)$; since row $i$ of
$\Sigma w_t$ is exactly $\operatorname{Cov}(r_i, r_{w_t})$. Multiply both sides by $w_t'$ and
sum: $\operatorname{Var}(r_{w_t}) = \gamma(\mu_{w_t} - r_f)$, so
$\gamma = \operatorname{Var}(r_M)/(\mu_M - r_f)$. Substituting back with $w_t = M$:

$$
\mu_i - r_f = \beta_i (\mu_M - r_f). \qquad \blacksquare
$$

### 5. Reading the Theorem

- **Only one risk is priced.** The CAPM prices covariance with the market; an asset's own
  variance appears nowhere. Idiosyncratic risk goes unpaid *because* it diversifies away; the
  arithmetic of Theorem 2.1's covariance structure, not a claim about investor psychology.
- **Beta is a ratio of covariances.** Estimating it is the econometrics track's regression
  problem; the theory here says what the population value means.
- **The assumptions are the content.** Everyone holds the tangency requires same beliefs
  (common $\mu, \Sigma$), a single horizon, frictionless borrowing at $r_f$, and no taxes.
  Each failure has a named descendant: Black's zero-beta CAPM (no risk-free asset),
  intertemporal models (repeated horizons), and factor models (multiple priced risks); the
  CAPM is the one-factor special case of the machinery, not the end of it.

### 6. Self-test

1. Where does positive definiteness of $\Sigma$ enter? (§2; $\Sigma^{-1}$ exists and the
   minimiser is unique; an indefinite $\Sigma$ means a riskless arbitrage.)
2. Why does dropping the budget constraint change *two funds* into *one fund*? (§3; the
   risk-free asset absorbs the scale decision, so only the risky direction
   $\Sigma^{-1}(\mu - r_f\mathbf{1})$ matters.)
3. Which step of the CAPM proof is market clearing, and which is optimisation? (Optimisation:
   $\Sigma w_t = \gamma(\mu - r_f\mathbf{1})$. Clearing: identifying $w_t$ with $M$. The
   derivation mixes them only once, and mixing them is where the theorem's assumptions live.)
4. What does the CAPM predict for a zero-beta asset? (§4; $\beta_i = 0$ gives
   $\mu_i = r_f$: only covariance with the market is paid.)
