becomes an optimisation; gradient-based, scalable, with the convergence theory
of optimisation rather than the diagnostics of Markov chains; and the price is
Picture the true posterior as a landscape and $q$ as a tractable shape; a
Gaussian, say; that you can slide and stretch. Minimising KL means fitting the
*confidently ignores the rest*; the approximation is not slightly wrong, it is
by Gibbs' inequality; the non-negativity of KL, itself Jensen's inequality
$\mathcal{Q}$; in the KL geometry, which is mode-seeking rather than
**Definition (mean-field family).** $\mathcal{Q} = \{q : q(z) = \prod_{i} q_i(z_i)\}$; the latent variables are independent under $q$.
$\mathbb{E}_{q_{-j}}[\log p(x,z)]$ is a *fixed function* of $z_j$; call it
$f(z_j)$; so the problem is
The update is exact given the others, and the algorithm; cycle through the
coordinates, replacing each; is *coordinate ascent on a jointly concave
which reproduces the exact conjugate posterior; because the posterior *is*
EM took $q(z) = p_\theta(z \mid x)$; the exact posterior; making the bound
tight; mean-field takes the best $q$ in a factorised family; a bound that is
*yields* its covariance; setting every off-diagonal entry to zero and shrinking
narrow; overconfident by construction. Hypothesis tests calibrated on them
**MCMC and VI measure different errors.** MCMC's error is Monte Carlo noise -
*systematic bias* from the family; which does not shrink with more optimisation,
**Python; mean-field VI against the exact conjugate posterior.**
  overconfident by construction; a theorem of §4, not an implementation bug.
  tolerances, and the convergence theory of that optimiser; different
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)**; the ELBO identity's origin in the EM decomposition.
- **[Bayesian Inference and Computation](/1-probabilistic-machine-learning/5_bayesian-inference-and-computation/)**; MCMC, the complementary sampler, and the two-chain caution.
- **[The Fundamental Theorems](https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems/)**; Gibbs' inequality and convexity, the two facts doing the work.
- **[Exponential Families](/1-probabilistic-machine-learning/2_statistical-decision-theory/)**; $\nabla^2 A$ as covariance, the convexity behind well-posed coordinate ascent.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)**; generalisation, the question VI's posterior is supposed to answer.