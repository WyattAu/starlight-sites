---
date: 2026-10-18T00:00:00+01:00
title: Linear and Generalised Linear Models
tags:
  - Machine Learning
  - University
description: "Linear and generalised linear models: least squares as orthogonal projection, the Gauss-Markov theorem with proof, ridge and lasso as regularised empirical risk minimisation, and GLMs through exponential families with the IRLS algorithm -- the models that are still the first thing to try."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "8_linear-and-generalised-linear-models", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/8_linear-and-generalised-linear-models"}]
}
</script>

Deep networks solve problems linear models cannot, but linear models remain the
first thing to fit and often the last thing needed — because they are the one
model class with closed-form fits, provable optimality, and error bars that need
no computation beyond a matrix inverse. This page derives them from the two
theories already built: least squares as an orthogonal projection in the
Hilbert-space geometry of [the fundamental theorems](/11-functional-analysis/4_the-fundamental-theorems/),
and generalised linear models as exponential families whose conditional mean is
linear — the decision theory and exponential families of page 2 doing the work.

## Intuition

Fitting a line by least squares solves for the point in the column space of the
design matrix closest to the observation vector — geometry, not algebra. That
geometric picture explains everything at once: why the residuals are orthogonal
to the fitted values, why adding a feature can never increase training error,
why the fitted coefficients change when features are collinear, and why ridge
regression's penalty is a constraint on which directions of the column space the
model may use.

The generalised linear model extends the same picture to responses that are not
Gaussian — counts, proportions, survival times — by changing the noise family
while keeping the linear structure in a transformed scale. The page 2 theory is
what makes "change the family" a well-defined operation.

## 1. Least squares as projection

**Setup.** Observations $y \in \mathbb{R}^n$, design matrix
$X \in \mathbb{R}^{n \times p}$ with columns the features. The model is
$y = X\beta + \epsilon$ with $\mathbb{E}[\epsilon] = 0$.

**Definition.** The **ordinary least squares** (OLS) estimator solves

$$
\hat\beta = \arg\min_\beta \lVert y - X\beta \rVert_2^2.
$$

**Theorem (projection solution).** If $X$ has full column rank, $\hat\beta = (X^{\!\top}X)^{-1}X^{\!\top}y$, and $\hat y = X\hat\beta$ is the orthogonal
projection of $y$ onto the column space $\mathcal{C}(X)$.

*Proof.* The objective $\lVert y - X\beta \rVert^2$ is minimised when the
residual $y - X\hat\beta$ is orthogonal to every column of $X$ — any other
$\beta$ would add a component along a column, increasing the norm. Orthogonality:

$$
X^{\!\top}(y - X\hat\beta) = 0 \quad\Longrightarrow\quad
X^{\!\top}X\hat\beta = X^{\!\top}y,
$$

the **normal equations**. Full rank makes $X^{\!\top}X$ invertible, giving the
display; and $X\hat\beta \in \mathcal{C}(X)$ with residual orthogonal to
$\mathcal{C}(X)$ is exactly the orthogonal projection's characterisation from
Hilbert space theory. $\blacksquare$

**Corollary (residual geometry).** $\hat y^{\!\top}(y - \hat y) = 0$ — fitted
values and residuals are uncorrelated, always. And the training error is
non-decreasing in the number of features: each column added enlarges
$\mathcal{C}(X)$, and projecting onto a larger subspace cannot increase the
distance. Overfitting's training signature is *structural*, not a bug.

**Theorem (Gauss–Markov).** Under $\mathbb{E}[\epsilon] = 0$,
$\operatorname{Var}(\epsilon) = \sigma^2 I$ — no normality, no independence, only
uncorrelated equal-variance errors — OLS is the **best linear unbiased
estimator**: among all estimators of the form $Cy$ that are unbiased for
$X\beta$, OLS has the smallest covariance matrix in the positive-semidefinite
order.

*Proof.* Any linear unbiased estimator has $\mathbb{E}[Cy] = CX\beta = X\beta$, so $CX = I$. Write $C = \hat\beta\text{'s} \; (X^{\!\top}X)^{-1}X^{\!\top} + D$
for some $D$ with $DX = 0$. Then

$$
\operatorname{Var}(Cy) = \sigma^2 CC^{\!\top}
= \sigma^2\big[(X^{\!\top}X)^{-1}X^{\!\top} + D\big]
\big[X(X^{\!\top}X)^{-1} + D^{\!\top}\big],
$$

which expands to $\sigma^2 (X^{\!\top}X)^{-1}$ plus the cross terms
$\sigma^2 D X (X^{\!\top}X)^{-1} = 0$ and its transpose, plus the positive
semi-definite $\sigma^2 D D^{\!\top}$. So

$$
\operatorname{Var}(Cy) = \operatorname{Var}(\hat\beta) + \sigma^2 D D^{\!\top}
\succeq \operatorname{Var}(\hat\beta),
$$

with equality iff $D = 0$, i.e. the estimator is OLS. $\blacksquare$

The proof is completing the square in matrices — the same move as the
bias–variance decomposition of page 3 — and the theorem's honest limits matter:
"best linear unbiased" is a restricted class, and [page 2's James–Stein
warning](/1-probabilistic-machine-learning/2_statistical-decision-theory/)
already showed that biased estimators beat unbiased ones in three-plus
dimensions. Ridge regression below is exactly such a biased estimator, and its
success is Gauss–Markov's boundary in action.

**Under normality.** Adding $\epsilon \sim \mathcal{N}(0, \sigma^2 I)$ makes OLS
also the MLE — the two theories' answers coincide — and gives exact
$t$/$F$ distributions for inference rather than asymptotics.

## 2. Ridge and lasso

**Definition.** **Ridge** adds an $\ell_2$ penalty:

$$
\hat\beta_{\mathrm{ridge}} = \arg\min_\beta \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_2^2
= (X^{\!\top}X + \lambda I)^{-1}X^{\!\top}y.
$$

**Definition.** **Lasso** adds an $\ell_1$ penalty:
$\hat\beta_{\mathrm{lasso}} = \arg\min_\beta \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_1$.

The two penalties are not two spellings of regularisation. Ridge shrinks
coefficients toward zero smoothly and keeps all of them nonzero — it handles
collinearity by spreading weight across correlated features. Lasso sets
coefficients *exactly* to zero — because the $\ell_1$ ball has corners — and
performs feature selection, at the cost of a non-differentiable objective and
coefficients whose selection is unstable under resampling.

**The spectral view.** Diagonalise $X^{\!\top}X = V\!\operatorname{diag}(\sigma_i^2)V^{\!\top}$.
OLS's variance in the $i$-th principal direction scales as
$\sigma_i^{-2}$ — tiny singular values blow it up. Ridge's is
$\sigma_i^2/(\sigma_i^2 + \lambda)^2$ — bounded by $1/(4\lambda)$. The penalty
truncates the directions the data barely spans, which is why it repairs
collinearity and why $\lambda$ trades bias (page 3's decomposition) against
variance.

**The bias–variance trade, computed.** For fixed $\lambda$,
$\mathrm{bias}^2$ is increasing in $\lambda$ and variance decreasing; the MSE
is their sum, and the optimal $\lambda$ is where their slopes cancel. Page 3's
decomposition is the calculation, and cross-validation is the estimation of it.

## 3. Generalised linear models

**Setup.** Responses $y_i$ from an exponential family — Bernoulli, Poisson,
Gamma — with means $\mu_i$ varying with the features. [Page 2's exponential
family](/1-probabilistic-machine-learning/2_statistical-decision-theory/)
form $p(y \mid \eta) = h(y)\exp(\eta y - A(\eta))$ is the vehicle.

**Definition.** A **GLM** specifies

$$
\eta_i = g(\mu_i) = x_i^{\!\top}\beta,
$$

a **link function** $g$ mapping the mean to the linear predictor. Logistic
regression: Bernoulli family, $g = \log\frac{\mu}{1-\mu}$ (the logit). Poisson
regression: Poisson family, $g = \log$.

**Why the canonical link.** Setting $g$ equal to the natural parameter map makes
$\eta_i = x_i^{\!\top}\beta$ *the* natural parameter, at which point the
log-likelihood is concave in $\beta$ — no local maxima — and the sufficient
statistics are $X^{\!\top}y$. Non-canonical links work but lose both.

**Theorem (IRLS).** The GLM MLE satisfies a self-consistency equation whose
iteration — compute weights $w_i$ and working responses $\tilde y_i$, then
weighted least squares — converges to it.

*Proof sketch.* The score is
$\nabla_\beta\ell = X^{\!\top}W(\tilde y - X\beta)$ with $W$ the diagonal
weight matrix $w_i = \frac{(g'(\mu_i))^2}{\operatorname{Var}(y_i)}$ and
$\tilde y_i = g(\mu_i) + (y_i - \mu_i)g'(\mu_i)$ the working response. Setting
the score to zero is a weighted normal equation with $\beta$ inside $W$ and
$\tilde y$ — so iterate: fix $(W, \tilde y)$ at the current $\beta$, solve the
weighted normal equations exactly, repeat. It is Newton–Raphson on the concave
log-likelihood, hence monotone-convergent for a canonical link. $\blacksquare$

Logistic regression by IRLS, Newton's method, and Fisher scoring are the same
algorithm named three ways — and the concavity from the canonical link is what
makes the "converges" claim safe.

## 4. The code

**Python — the projection geometry, computed.**

```python
import numpy as np

rng = np.random.default_rng(2026)
n, p = 200, 3
X = np.column_stack([np.ones(n), rng.normal(size=(n, p))])
beta = np.array([2.0, -1.0, 0.5, 3.0])
y = X @ beta + rng.normal(0, 1.5, n)

beta_hat = np.linalg.solve(X.T @ X, X.T @ y)
y_hat = X @ beta_hat
resid = y - y_hat

print("residual dot fitted (should be ~0):", np.round(resid @ y_hat, 12))
print("residual dot each column (should be ~0):",
      np.round(X.T @ resid, 12))
# The corollary is a theorem about the geometry; the arithmetic confirms it
# to machine precision. Adding a fourth column cannot increase the training
# error -- the projection is onto a larger subspace.
```

**R — Gauss–Markov violated, ridge vindicated.**

```r
set.seed(2026)
n <- 100
x1 <- rnorm(n); x2 <- 0.95 * x1 + rnorm(n, 0, 0.05)   # near-collinear
y <- 2 * x1 + 2 * x2 + rnorm(n, 0, 1)

ols <- coef(lm(y ~ x1 + x2 - 1))
ridge <- coef(lm.ridge(y ~ x1 + x2 - 1, lambda = 1))
cat("OLS   coefficients:", round(ols, 2),
    "  (sum:", round(sum(ols), 2), ")\n")
cat("ridge coefficients:", round(ridge, 2),
    "  (sum:", round(sum(ridge), 2), ")\n")
# The true sum is 4. OLS's coefficients are wildly wrong individually --
# x1 and x2 are nearly interchangeable -- while ridge's are stable and
# their SUM is still right. Ridge trades unbiasedness per coefficient for
# a variance reduction Gauss-Markov's restricted class cannot see.
```

**Python — logistic regression by IRLS, from scratch.**

```python
import numpy as np

rng = np.random.default_rng(2026)
n, p = 400, 3
X = np.column_stack([np.ones(n), rng.normal(size=(n, p))])
beta_true = np.array([0.5, -1.0, 2.0])
prob = 1 / (1 + np.exp(-X @ beta_true))
y = (rng.random(n) < prob).astype(float)

beta = np.zeros(p)
for it in range(25):
    eta = X @ beta
    mu = 1 / (1 + np.exp(-eta))
    w = mu * (1 - mu)                        # Bernoulli weights
    z = eta + (y - mu) / w                   # working response
    beta_new = np.linalg.solve(X.T @ (X * w[:, None]), X.T @ (w * z))
    if np.max(np.abs(beta_new - beta)) < 1e-10:
        beta = beta_new
        print(f"IRLS converged in {it+1} iterations")
        break
    beta = beta_new
print("beta_hat =", np.round(beta, 3), "  truth =", beta_true)
```

Expected: convergence in around 6–8 iterations to coefficients near the truth —
and the loop *is* Newton's method on the concave log-likelihood, so it converges
from any start.

## Common Pitfalls

- **Believing Gauss–Markov licenses OLS everywhere.** Best *linear unbiased* is a
  restricted class, and biased estimators beat it under collinearity — ridge is
  the standard example, and §2's spectral view is why.
- **Reading $p$-values on coefficients in the presence of collinearity.** With
  nearly collinear features the coefficient estimates have enormous variance
  individually while their combination is well determined; the individual
  $t$-statistics are then noise and the model is still usable for prediction.
- **Fitting a GLM without checking the link's domain.** The log link requires
  positive means; the logit requires means in $(0,1)$. A fitted mean outside the
  support is not a small error, it is a contradiction of the family.
- **Expecting lasso's selected features to be stable.** Under correlated
  features the $\ell_1$ picks one arbitrarily, and resampling changes the pick.
  Stability selection or elastic net is the repair, and the instability itself
  is information about the feature correlation.
- **Reporting $R^2$ as goodness.** $R^2$ increases with any added feature — the
  projection corollary again. Adjusted $R^2$, cross-validated error, or a test
  set is the honest measure.

## Cross-References

- **[The Fundamental Theorems](https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems/)** — the Hilbert-space projection, from which §1 is a corollary.
- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)** — exponential families and conjugacy, the GLM engine.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)** — bias–variance, which §2's $\lambda$ trades.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)** — the capacity control that the penalties instantiate.
- **[Gaussian Processes](/1-probabilistic-machine-learning/9_gaussian-processes/)** — the Bayesian version of the same linear model, with error bars.
