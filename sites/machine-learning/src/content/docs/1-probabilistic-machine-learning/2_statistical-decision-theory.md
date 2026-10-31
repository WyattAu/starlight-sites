---
date: 2026-10-18T00:00:00+01:00
title: Statistical Decision Theory
tags:
  - Machine Learning
  - University
description: "Statistical decision theory: loss functions, risk, Bayes and minimax rules with proofs, admissibility, sufficient statistics via the factorisation theorem, and exponential families -- the framework every estimator in the course is judged in."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "2_statistical-decision-theory", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/2_statistical-decision-theory"}]
}
</script>

Every machine learning system is a decision procedure: it maps data to an
action; a prediction, a class label, a price. Decision theory is the framework
that says what "good" means, and the framework's honesty is its value: a loss
function must be *chosen*, and the choice is a statement about consequences, not
a property of the algorithm. Accuracy, squared error, cross-entropy; these are
different losses, they rank different procedures differently, and no theorem
declares one correct.

This page sets up the framework and proves its first theorems. The prerequisite
is [measure-theoretic probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/):
expectation is a Lebesgue integral, and "risk" will be an integral against the
joint law of data and parameter.

## Intuition

A doctor chooses a treatment from a test result. Two errors are possible -
treat a healthy patient, withhold from a sick one; and they are not equally
bad. Decision theory formalises this: a **loss function** prices each (truth,
action) pair, the **risk** of a procedure is the expected loss, and the question
"which procedure should I use" becomes "which has the smallest risk"; which is
a well-posed question with a unique answer once the loss and the data-generating
law are fixed.

The subtlety is that the data-generating law depends on the unknown parameter.
So risk depends on $\theta$, and two procedures can each be better than the
other for *some* $\theta$. Every classical statistician's dilemma; which
estimator?; is this non-comparability, and the two classical escapes (Bayes:
average over $\theta$ with a prior; minimax: take the worst case) are the two
philosophies of the subject, both defined on this page.

## 1. The framework

**Definition.** A **decision problem** consists of:

- a parameter space $\Theta$ with true parameter $\theta_0$;
- data $X \sim p_\theta$ for some $\theta \in \Theta$;
- an **action space** $\mathcal{A}$ of allowed decisions;
- a **loss function** $L(\theta, a) \geq 0$ pricing action $a$ when the truth is
  $\theta$;
- a **decision rule** $\delta : \mathcal{X} \to \mathcal{A}$ mapping data to
  actions.

**Definition.** The **risk** of $\delta$ at $\theta$ is

$$
R(\theta, \delta) = \mathbb{E}_\theta\big[L(\theta, \delta(X))\big]
= \int_{\mathcal{X}} L(\theta, \delta(x))\, p_\theta(x)\, dx,
$$

an integral against the law of the data at that $\theta$.

**Standard losses.** For estimation problems ($\mathcal{A} = \Theta$):

- squared error $L(\theta, a) = (a - \theta)^2$, giving risk = mean squared
  error;
- absolute error $L = |a - \theta|$, whose optimum point estimate is the median
  (proved below);
- zero–one $L = \mathbf{1}(a \neq \theta)$, giving risk = error probability -
  the loss of classification.

**Proposition (optimal point action under each loss).** For a *known*
distribution of $X$ under prior $\pi$, the action minimising posterior expected
loss is the posterior **mean** under squared error, the posterior **median**
under absolute error, and the posterior **mode** under zero–one loss.

*Proof for squared error.* Minimise
$g(a) = \mathbb{E}[(a - \theta)^2 \mid X] = a^2 - 2a\,\mathbb{E}[\theta \mid X] + \mathbb{E}[\theta^2 \mid X]$. Differentiate in $a$:
$g'(a) = 2a - 2\mathbb{E}[\theta \mid X] = 0$ gives
$a = \mathbb{E}[\theta \mid X]$, and $g''(a) = 2 > 0$ confirms a minimum. $\blacksquare$

*Proof for absolute error.* Minimise
$g(a) = \mathbb{E}[|a - \theta| \mid X]$. Write
$g(a) = \int_{-\infty}^a (a - \theta)\,\pi(\theta \mid X)\,d\theta + \int_a^\infty (\theta - a)\,\pi(\theta \mid X)\,d\theta$. Differentiating under
the integral; both integrands vanish at $\theta = a$, so the boundary terms are
zero; gives $g'(a) = F(a) - (1 - F(a)) = 2F(a) - 1$ where $F$ is the posterior
CDF. Setting $g'(a) = 0$ gives $F(a) = 1/2$: the median. Since $g'' = 2\pi(a \mid X) \geq 0$, this is a minimum. $\blacksquare$

That median proof is worth reading twice: the boundary terms vanish because the
absolute value's integrand is zero at $\theta = a$, and the derivative lands on
the posterior CDF. "Regression to the mean" and "classification to the mode" are
the same theorem with different losses.

## 2. Bayes rules

**Definition.** Given a prior density $\pi(\theta)$, the **Bayes risk** of
$\delta$ is $r(\pi, \delta) = \mathbb{E}_\pi[R(\theta, \delta)]$; the risk
averaged over the prior. A **Bayes rule** minimises it.

**Theorem (Bayes rule via posterior expected loss).** A rule minimising the
posterior expected loss $\mathbb{E}[\,L(\theta, \delta(X)) \mid X\,]$ for each
$X$ separately minimises the Bayes risk; and for squared error the Bayes rule is
the posterior mean.

*Proof.* By Fubini's theorem; applicable since $L \geq 0$; the Bayes risk is
an iterated integral:

$$
r(\pi, \delta) = \int_{\mathcal{X}} \left[\int_\Theta L(\theta, \delta(x))\,
\pi(\theta \mid x)\,d\theta\right] m(x)\, dx,
$$

where $m(x) = \int p_\theta(x)\,\pi(\theta)\,d\theta$ is the marginal density of
the data and $\pi(\theta \mid x) = p_\theta(x)\pi(\theta)/m(x)$ is the posterior
by Bayes' theorem. The inner bracket is the posterior expected loss, a
non-negative function of $x$ alone. An integral of a non-negative function is
minimised by minimising the function pointwise wherever possible; so a rule
that picks the minimising action for each $x$ minimises the whole. For squared
error, §1 identifies that action as the posterior mean. $\blacksquare$

Fubini is doing real work: it licenses splitting "average over $X$ then
$\theta$" into "for each $X$, optimise, then average the optimum". That is the
mathematical statement that *the Bayesian can decide locally*, given the data,
without thinking about data they did not see.

*Worked example (Bernoulli, Beta prior).* $X \sim \mathrm{Binomial}(n, \theta)$,
prior $\theta \sim \mathrm{Beta}(\alpha, \beta)$, squared-error loss. The
posterior is $\mathrm{Beta}(\alpha + x, \beta + n - x)$ by conjugacy, so the
Bayes rule is

$$
\delta(x) = \frac{\alpha + x}{\alpha + \beta + n}.
$$

With $\alpha = \beta = 1$ (uniform prior) this is $(x+1)/(n+2)$; Laplace's rule
of succession, which shrinks the empirical frequency toward $1/2$ by exactly one
pseudo-observation on each side. The prior is not an opinion injected into the
answer; it is a term in the risk computation.

## 3. Minimax rules

**Definition.** $\delta^{\mathrm{MM}}$ is **minimax** if it minimises
$\sup_\theta R(\theta, \delta)$ over all rules.

Minimax replaces the prior's average with the adversary's worst case. The two
philosophies differ in what "unknown $\theta$" licenses: the Bayesian says a
prior encodes knowledge; the minimaxer says no assumption should be made. Their
answers can differ sharply; and both are *rules* whose risk profiles can be
computed and compared.

**Theorem (minimax–Bayes connection).** If a Bayes rule for prior $\pi$ has
constant risk $R(\theta, \delta) = r$ for all $\theta$, then $\delta$ is
minimax, with $\sup_\theta R(\theta,\delta) = r$.

*Proof.* For any rule $\delta'$,
$\sup_\theta R(\theta, \delta') \geq \int R(\theta, \delta')\,\pi(\theta)\,d\theta = r(\pi, \delta') \geq r(\pi, \delta) = r$, since a non-negative weighted average
cannot exceed the supremum and $\delta$ minimises the Bayes risk. So no rule
beats $r$ in the worst case, and $\delta$ attains it. $\blacksquare$

The proof is three inequalities, but the conclusion is the workhorse of the
subject: *to prove an estimator minimax, find a prior under which its risk is
constant.* That is how the sample mean is proved minimax for the normal mean,
and how minimax results are usually obtained; not by solving worst cases
directly, but by exhibiting a least-favourable prior.

**Definition.** $\delta$ is **inadmissible** if some $\delta'$ has
$R(\theta, \delta') \leq R(\theta, \delta)$ for all $\theta$ with strict
inequality for at least one; otherwise **admissible**.

**Theorem (Bayes rules are admissible, under conditions).** If the Bayes risk is
finite, the prior has full support, and $R(\theta, \delta)$ is continuous in
$\theta$ for every rule in play, then a unique Bayes rule is admissible.

*Proof sketch.* If $\delta'$ dominated the Bayes rule $\delta$, then integrating
against a prior of full support with continuous risk gives
$r(\pi, \delta') < r(\pi, \delta)$; strictness survives integration because the
strict inequality holds on a set of positive prior mass and continuity spreads
it to a neighbourhood; contradicting that $\delta$ minimises the Bayes risk. $\blacksquare$

Admissibility is a *weak* virtue; an inadmissible rule should never be used,
but admissible rules can still be terrible; and the theorem's value is
directional: to show a rule is admissible, exhibit it as a Bayes rule. The
pathology is famous and worth naming: for $n \geq 3$ dimensions, the ordinary
sample mean is *inadmissible* under squared error; the James–Stein estimator
dominates it. "The obvious estimator" is provably beaten, everywhere, in three
or more dimensions.

## 4. Sufficiency: compressing data without loss

**Definition.** A statistic $T(X)$ is **sufficient** for $\theta$ if the law of
the data given $T$ is independent of $\theta$:
$p_\theta(x \mid T(x))$ does not involve $\theta$.

A sufficient statistic is a *lossless compression*: everything in the data that
bears on $\theta$ is in $T$, and the rest is noise that no rule can use.

**Theorem (Neyman factorisation).** $T$ is sufficient iff the density
factorises as

$$
p_\theta(x) = g(T(x), \theta)\;h(x),
$$

for functions $g$ and $h$ with $h$ independent of $\theta$.

*Proof.* ($\Leftarrow$) If $p_\theta(x) = g(T(x),\theta)h(x)$, then the
conditional density of $X$ given $T = t$ is

$$
p_\theta(x \mid T = t) = \frac{p_\theta(x)}{P_\theta(T = t)}
= \frac{g(t,\theta)h(x)}{g(t,\theta)\,\eta(t)} = \frac{h(x)}{\eta(t)},
$$

using that the law of $T$ has density proportional to $g(t,\theta)\eta(t)$ where
$\eta(t) = \int_{T = t} h$ is $\theta$-free. The $\theta$-dependence cancels, so
the conditional law does not involve $\theta$: $T$ is sufficient. (For discrete
$X$ this is exact; for continuous $X$ the same argument runs with the co-area
measure on the level set $\{T = t\}$.)

($\Rightarrow$) If $T$ is sufficient, $p_\theta(x) = p_\theta(T(x))\, p(x \mid T(x))$ by the definition of conditional density, which is the
factorisation with $g = p_\theta(T(x))$ and $h = p(x \mid T(x))$, the latter
$\theta$-free by sufficiency. $\blacksquare$

*Worked example.* For $X_1, \dots, X_n$ i.i.d. $\mathrm{Poisson}(\lambda)$,

$$
p_\theta(x) = \prod_i e^{-\lambda}\frac{\lambda^{x_i}}{x_i!}
= e^{-n\lambda}\,\lambda^{\sum x_i}\,\prod_i \frac{1}{x_i!},
$$

which is $g(\sum x_i, \lambda)\,h(x)$ with $g = e^{-n\lambda}\lambda^{\sum x_i}$
and $h = \prod 1/x_i!$. So $\sum_i X_i$ is sufficient for $\lambda$; the whole
sample collapses to its sum with no loss about $\lambda$. Every estimator that
uses anything beyond the sum is using noise.

## 5. Exponential families

**Definition.** A family with densities

$$
p_\theta(x) = h(x)\,\exp\big(\eta(\theta)\cdot T(x) - A(\theta)\big)
$$

is a **$k$-parameter exponential family**, with natural parameter
$\eta(\theta) \in \mathbb{R}^k$, sufficient statistic $T(x)$, and log-partition
function $A(\theta)$.

Exponential families are the ones with *finite-dimensional* sufficient
statistics: $T$ is a vector of fixed length regardless of sample size. That is
why the normal family needs only $(\sum x_i, \sum x_i^2)$, why a Bernoulli
sample collapses to its count, and why a Cauchy sample *cannot* be compressed -
the Cauchy family is not exponential, and its sufficient statistic is the whole
ordered sample.

**Proposition.** $A(\eta) = \log\int h(x)e^{\eta\cdot T(x)}dx$ is the
cumulant-generating function of $T$: $\nabla_\eta A = \mathbb{E}_\theta[T]$ and
$\nabla^2_\eta A = \operatorname{Cov}_\theta(T)$.

*Proof.* Differentiate under the integral sign:

$$
\nabla_\eta A = \frac{1}{Z}\int T(x)\,h(x)e^{\eta\cdot T(x)}dx
= \mathbb{E}_\theta[T],
$$

where $Z = \int h e^{\eta\cdot T}$ and the passage of the gradient through the
integral is licensed by dominated convergence on compacts of $\eta$ (the
exponential family's natural space is exactly where $Z$ is finite). Differentiate
again:

$$
\nabla^2_\eta A = \frac{1}{Z}\int T T^{\!\top} h e^{\eta\cdot T}dx
- \Big(\frac{1}{Z}\int T\,h e^{\eta\cdot T}dx\Big)\Big(\frac{1}{Z}\int T\,h e^{\eta\cdot T}dx\Big)^{\!\top}
= \mathbb{E}_\theta[TT^{\!\top}] - \mathbb{E}_\theta[T]\,\mathbb{E}_\theta[T]^{\!\top},
$$

which is the covariance. $\blacksquare$

That $\nabla^2 A$ is a covariance; hence positive semi-definite; is the same
statement as "$A$ is convex", which is the fact the variational-inference page
will use to make its optimisation well posed. The page is written so that this
one proposition does the work twice.

**Conjugacy as closure.** For a Bernoulli likelihood with Beta prior, the
posterior is again Beta: the prior is conjugate. In exponential-family language,
conjugacy holds because the prior can be written in the same
$\exp(\eta\cdot T - A)$ form with respect to the *same* statistic $T$; Bayes'
rule multiplies $p_\theta(x)\pi(\theta)$, and multiplying two exponential-family
forms in $T$ adds their natural parameters. Conjugacy is not a lucky algebraic
accident; it is closure of the family under the sampling operation.

## 6. The code: Bayes rules and risk curves

**Python; the Beta–Bernoulli Bayes rule and its risk curve.**

```python
import numpy as np

rng = np.random.default_rng(2026)
n, theta_true = 64, 0.3
alpha0, beta0 = 1, 1

x = rng.binomial(n, theta_true)
post_mean = (alpha0 + x) / (alpha0 + beta0 + n)
mle = x / n
print(f"x = {x}/{n}   MLE = {mle:.4f}   Bayes = {post_mean:.4f}")

# Risk curves: MC estimate of R(theta, delta) = E[(delta(X) - theta)^2].
# For the Beta-Bernoulli model the Bayes risk is available in closed form:
#   r = E[ Var(theta|X) ] and the posterior variance of a Beta is
#   ab/((a+b)^2 (a+b+1)) evaluated at the random (a+x, b+n-x).
thetas = rng.beta(2, 3, size=200_000)          # a different prior for the risk
risks_bayes, risks_mle = np.empty(200_000), np.empty(200_000)
for i, th in enumerate(thetas):
    xs = rng.binomial(n, th, size=400)
    post_a, post_b = alpha0 + xs, beta0 + n - xs
    d_bayes = post_a / (post_a + post_b)
    d_mle = xs / n
    risks_bayes[i] = np.mean((d_bayes - th) ** 2)
    risks_mle[i] = np.mean((d_mle - th) ** 2)

print(f"sup risk:  Bayes {risks_bayes.max():.5f}   MLE {risks_mle.max():.5f}")
print(f"mean risk: Bayes {risks_bayes.mean():.5f}   MLE {risks_mle.mean():.5f}")
```

Expected output: the Bayes rule's *mean* risk over the $(2,3)$ prior beats the
MLE's, while the MLE's *worst-case* risk is lower near $\theta = 0.5$; the two
philosophies of §2 and §3 visible in one printout, each optimal for its own
criterion.

**R; the risk curve as a picture.**

```r
set.seed(2026)
thetas <- seq(0.05, 0.95, by = 0.01)
n <- 32; a0 <- b0 <- 1
risk_bayes <- risk_mle <- numeric(length(thetas))
for (i in seq_along(thetas)) {
  xs <- rbinom(2000, n, thetas[i])
  d_b <- (a0 + xs) / (a0 + b0 + n)   # Bayes rule (posterior mean)
  d_m <- xs / n                       # MLE
  risk_bayes[i] <- mean((d_b - thetas[i])^2)
  risk_mle[i]   <- mean((d_m - thetas[i])^2)
}
plot(thetas, risk_mle, type = "l", col = "gray40", ylab = "risk", xlab = "theta")
lines(thetas, risk_bayes, col = "firebrick")
legend("topleft", c("MLE", "Bayes (Beta(1,1) rule)"),
       col = c("gray40", "firebrick"), lty = 1)
```

The plot shows the curves crossing: the Bayes rule wins near the prior's mass
and loses near the tails; no rule dominates, which is the non-comparability of
§2, drawn.

## Common Pitfalls

- **Treating the loss as given.** It is chosen, and different losses give
  different optimal actions: mean, median, mode. Reporting an average and
  calling it "the answer" has already assumed squared error.
- **Confusing Bayes risk with risk.** $R(\theta, \delta)$ is a function of the
  unknown $\theta$; $r(\pi, \delta)$ is a number. A Bayes rule minimises the
  second; its first can be terrible at some $\theta$.
- **Assuming admissibility means good.** It only means not dominated. Weakly
  admissible procedures can be arbitrarily bad; the theorem's use is to rule
  things *out*.
- **Using $\mathbb{E}[XY] = \mathbb{E}X\mathbb{E}Y$ without independence**, and
  equally, using independence without stating it in the model. Page 1's warning
  is repeated because risk computations fail on it.
- **Computing sufficiency from the likelihood's *value* rather than its
  *shape*.** Sufficiency is about how $\theta$ enters the density, not about
  the number it evaluates to; read the factorisation, not the output.

## Cross-References

- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)**; expectation, independence, and Fubini, used from §2.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)**; Cramér–Rao and MLE, which judge the rules this page defined.
- **[Bayesian Inference and Computation](/1-probabilistic-machine-learning/5_bayesian-inference-and-computation/)**; the posterior mean as Bayes rule, computed when it cannot be integrated.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)**; where Bayes and classical answers meet, and where they stop.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)**; the same risk, but with $\theta$ replaced by a function.
