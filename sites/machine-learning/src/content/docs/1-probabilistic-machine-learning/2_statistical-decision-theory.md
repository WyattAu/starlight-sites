action; a prediction, a class label, a price. Decision theory is the framework
a property of the algorithm. Accuracy, squared error, cross-entropy; these are
A doctor chooses a treatment from a test result. Two errors are possible -
treat a healthy patient, withhold from a sick one; and they are not equally
"which procedure should I use" becomes "which has the smallest risk"; which is
other for *some* $\theta$. Every classical statistician's dilemma; which
estimator?; is this non-comparability, and the two classical escapes (Bayes:
- zero–one $L = \mathbf{1}(a \neq \theta)$, giving risk = error probability -
the integral; both integrands vanish at $\theta = a$, so the boundary terms are
zero; gives $g'(a) = F(a) - (1 - F(a)) = 2F(a) - 1$ where $F$ is the posterior
$\delta$ is $r(\pi, \delta) = \mathbb{E}_\pi[R(\theta, \delta)]$; the risk
*Proof.* By Fubini's theorem; applicable since $L \geq 0$; the Bayes risk is
minimised by minimising the function pointwise wherever possible; so a rule
With $\alpha = \beta = 1$ (uniform prior) this is $(x+1)/(n+2)$; Laplace's rule
answers can differ sharply; and both are *rules* whose risk profiles can be
and how minimax results are usually obtained; not by solving worst cases
$r(\pi, \delta') < r(\pi, \delta)$; strictness survives integration because the
it to a neighbourhood; contradicting that $\delta$ minimises the Bayes risk. $\blacksquare$
Admissibility is a *weak* virtue; an inadmissible rule should never be used,
but admissible rules can still be terrible; and the theorem's value is
sample mean is *inadmissible* under squared error; the James–Stein estimator
and $h = \prod 1/x_i!$. So $\sum_i X_i$ is sufficient for $\lambda$; the whole
sample collapses to its count, and why a Cauchy sample *cannot* be compressed -
That $\nabla^2 A$ is a covariance; hence positive semi-definite; is the same
$\exp(\eta\cdot T - A)$ form with respect to the *same* statistic $T$; Bayes'
**Python; the Beta–Bernoulli Bayes rule and its risk curve.**
MLE's, while the MLE's *worst-case* risk is lower near $\theta = 0.5$; the two
**R; the risk curve as a picture.**
and loses near the tails; no rule dominates, which is the non-comparability of
- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)**; expectation, independence, and Fubini, used from §2.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)**; Cramér–Rao and MLE, which judge the rules this page defined.
- **[Bayesian Inference and Computation](/1-probabilistic-machine-learning/5_bayesian-inference-and-computation/)**; the posterior mean as Bayes rule, computed when it cannot be integrated.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)**; where Bayes and classical answers meet, and where they stop.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)**; the same risk, but with $\theta$ replaced by a function.