multiplication. The difficulty is entirely computational; the posterior is a
$d$-dimensional density whose normalising constant is an integral nobody can do -
the height ratio. The astonishing fact; proved below; is that this
and everything else; Gibbs, HMC, annealing; is a way of choosing better
credible intervals, predictions; all integrals against $\pi(\theta \mid x)$.
Two regimes. When the model is *conjugate*; as the Beta–Bernoulli pair on
[page 2](/1-probabilistic-machine-learning/2_statistical-decision-theory/); the
$P(X_{t+1} \in A \mid X_t, \dots, X_0) = P(X_{t+1} \in A \mid X_t)$; the future
converges to the posterior expectation; almost surely, with all the page-1
make the flow balance, and the ratio of target densities is all that survives -
random-walk Metropolis; not 1, which indicates a proposal so conservative the
that highly *correlated* posteriors make the coordinate-wise walk crawl; each
Random-walk Metropolis explores distance $\sqrt{T}$ in $T$ steps; a diffusion.
trajectories; $\frac{dH}{dt} = 0$ by the chain rule and the symmetric form of
Hamilton's equations; so an exact simulation would be accepted always; the
  of a multimodal posterior; the trace is beautiful and the inference is
**C++; the Metropolis–Hastings inner loop.** The lesson the implementation
space it needs only *differences*; and the normalising constant never appears.
**Python; Gibbs for a two-component mixture, reusing the page-3 EM structure.**
Expected output: intervals covering roughly $[-2.1, -1.9]$ and $[1.9, 2.1]$ -
**R; the diagnostic that lies, demonstrated.**
section promised, constructed rather than asserted; and it is why the
- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)**; the strong law for the ergodic average, and the a.s. mode's caveats.
- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)**; conjugacy, which removes the need for MCMC in the cases it covers.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)**; EM, the optimisation cousin: same latent variables, integrate by sampling instead of maximising.
- **[Variational Inference](/1-probabilistic-machine-learning/6_variational-inference/)**; the other computational attack: approximate the posterior by optimisation rather than by sampling.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)**; why the posterior becomes Gaussian, which is what Laplace's approximation exploits.