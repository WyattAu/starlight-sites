questions organise it. How good can any unbiased estimator be?; answered by the
everyone uses?; answered for maximum likelihood by consistency and asymptotic
with its monotonicity property proved; the guarantee that makes it safe to run
with huge variance loses to a slightly biased one with tiny variance; which is
The James–Stein result from the previous page is exactly a trade; a large bias
reduction bought with a small variance increase; and the decomposition is what
work. Differentiating under the integral is a real hypothesis; it fails when
variance $\theta(1-\theta)/n = 1/I_n$; it *attains* the bound, and is therefore
$\hat\theta_{\mathrm{MLE}}$ maximises $p_\theta(X)$ over $\theta$; equivalently
the MLE is consistent and asymptotically normal with variance $I_n^{-1}$; it
zero–one loss on $\theta$ in the limit. The deeper answer; that the likelihood
is the natural discrepancy between laws (Kullback–Leibler); belongs to the
large numbers. Slutsky's theorem; the page-1 tool; assembles the limit:
ch. 5. What the page provides is the *shape*; CLT for the score, LLN for the
curvature, Slutsky to combine; which is the shape of every asymptotic normality
Latent-variable models; mixtures, missing data, hidden Markov models; have
**Theorem (EM monotonicity).** Each EM iteration; E-step: $q_{t+1} = p_{\theta_t}(z\mid x)$; M-step: $\theta_{t+1} = \arg\max_\theta \mathcal{L}(q_{t+1}, \theta)$; does not decrease the log-likelihood:
Three lines, and the guarantee is *monotone ascent*; which is why EM is safe
to run; but not convergence to the *global* maximum: the sequence converges to
**Python; Cramér–Rao and the MLE's variance, on a Poisson.**
**R; fitting a two-component mixture by EM, and watching the likelihood climb.**
Expected: the log-likelihood rises monotonically; never dips; exactly as the
- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)**; the risk framework judging these estimators, and admissibility.
- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)**; the CLT and Slutsky used in the asymptotics.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)**; the same LAN machinery, in the Bayesian setting.
- **[Hodge Theory](https://mathematics.wyattau.com/12-differential-geometry/14_hodge-theory/)**; the other consumer of elliptic regularity; the pattern "kernel of an operator" recurs.
- **[Variational Inference](/1-probabilistic-machine-learning/6_variational-inference/)**; the ELBO bound of §4, made the objective.