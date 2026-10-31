first thing to fit and often the last thing needed; because they are the one
linear; the decision theory and exponential families of page 2 doing the work.
design matrix closest to the observation vector; geometry, not algebra. That
Gaussian; counts, proportions, survival times; by changing the noise family
residual $y - X\hat\beta$ is orthogonal to every column of $X$; any other
**Corollary (residual geometry).** $\hat y^{\!\top}(y - \hat y) = 0$; fitted
$\operatorname{Var}(\epsilon) = \sigma^2 I$; no normality, no independence, only
uncorrelated equal-variance errors; OLS is the **best linear unbiased
The proof is completing the square in matrices; the same move as the
bias–variance decomposition of page 3; and the theorem's honest limits matter:
also the MLE; the two theories' answers coincide; and gives exact
coefficients toward zero smoothly and keeps all of them nonzero; it handles
coefficients *exactly* to zero; because the $\ell_1$ ball has corners; and
$\sigma_i^{-2}$; tiny singular values blow it up. Ridge's is
$\sigma_i^2/(\sigma_i^2 + \lambda)^2$; bounded by $1/(4\lambda)$. The penalty
**Setup.** Responses $y_i$ from an exponential family; Bernoulli, Poisson,
Gamma; with means $\mu_i$ varying with the features. [Page 2's exponential
log-likelihood is concave in $\beta$; no local maxima; and the sufficient
iteration; compute weights $w_i$ and working responses $\tilde y_i$, then
weighted least squares; converges to it.
$\tilde y$; so iterate: fix $(W, \tilde y)$ at the current $\beta$, solve the
algorithm named three ways; and the concavity from the canonical link is what
**Python; the projection geometry, computed.**
**R; Gauss–Markov violated, ridge vindicated.**
**Python; logistic regression by IRLS, from scratch.**
Expected: convergence in around 6–8 iterations to coefficients near the truth -
  restricted class, and biased estimators beat it under collinearity; ridge is
- **Reporting $R^2$ as goodness.** $R^2$ increases with any added feature; the
- **[The Fundamental Theorems](https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems/)**; the Hilbert-space projection, from which §1 is a corollary.
- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)**; exponential families and conjugacy, the GLM engine.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)**; bias–variance, which §2's $\lambda$ trades.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)**; the capacity control that the penalties instantiate.
- **[Gaussian Processes](/1-probabilistic-machine-learning/9_gaussian-processes/)**; the Bayesian version of the same linear model, with error bars.