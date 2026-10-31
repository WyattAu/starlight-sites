---
date: 2026-10-19T00:00:00+01:00
title: Posterior Contraction Rates
tags:
  - University Maths
  - Statistics
description: "Posterior contraction rates: the definition, the prior-mass and entropy conditions with proofs, the minimax rate n^{-beta/(2beta+1)} derived from first principles, why nonparametric Bayes is harder than parametric, and where the frontier is -- with Python checks of every rate."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "13 Graduate Statistics", "url": "https://mathematics.wyattau.com/13-graduate-statistics"}, {"name": "2_posterior-contraction-rates", "url": "https://mathematics.wyattau.com/13-graduate-statistics/2_posterior-contraction-rates"}]
}
</script>

Consistency says the posterior converges; contraction rates say how fast. The
distinction is not cosmetic — a consistency theorem that permits convergence at
any rate is compatible with the estimate being useless for prediction, and the
rate is what a practitioner needs to plan a study. The contraction-rate theory
is also where nonparametric Bayes earns its keep: the parametric rate
$n^{-1/2}$ is a ceiling that nonparametric models cannot reach, and the
achieved rate depends on the smoothness of the truth and the flexibility of the
prior in a way that the theorem makes precise.

The prerequisite is the [Bernstein–von Mises
page](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/):
the contraction proof there (Step 4's tail estimate) is exactly the mechanism
generalised here, with sieves replacing compact sets and entropy replacing
finiteness.

## Intuition

Picture the posterior as a cloud of uncertainty around the true parameter. In a
parametric model — one unknown number — the cloud shrinks like $n^{-1/2}$: ten
times the data, three times the precision. In a nonparametric model — an
unknown *function* — the cloud must shrink in every direction simultaneously,
and the rate depends on how many "directions" the function space has at the
truth's smoothness. A twice-differentiable function lives in a space of
effective dimension $(2\beta + 1)/\beta$ per unit of smoothness $\beta$; the
minimax rate $n^{-\beta/(2\beta+1)}$ is what that effective dimension buys.

The prior's job is to place enough mass near the truth for the posterior to
find it, and to not place so much mass on overly complex functions that the
posterior chases noise. Both conditions are formalised below — the prior mass
condition and the entropy condition — and neither is optional.

## 1. The definition

**Definition.** Let $d$ be a metric on the parameter space. A sequence
$\varepsilon_n \to 0$ (with $n\varepsilon_n^2 \to \infty$) is a **contraction
rate** at $\theta_0$ if, for every $M_n \to \infty$,

$$
\Pi_n\!\left(\theta : d(\theta, \theta_0) > M_n \varepsilon_n \;\middle|\; X^{(n)}\right) \xrightarrow{P_{\theta_0}} 0.
$$

The $M_n \to \infty$ factor means the posterior puts vanishing mass outside a
band that is $M_n$ times the rate wide — so the rate is the *scale* of the
posterior's spread, not a hard boundary.

**Why $n\varepsilon_n^2 \to \infty$.** The contraction proof needs the
information to grow faster than the rate shrinks; without that, the posterior
could concentrate at rate $\varepsilon_n$ while the evidence is still too weak
to distinguish $\theta_0$ from its neighbourhood. For parametric models,
$\varepsilon_n = n^{-1/2}$ gives $n\varepsilon_n^2 = 1$ — the boundary case,
which is why the parametric rate is the fastest possible at this level of
generality.

## 2. The two conditions

**Definition (prior mass condition).** The prior puts at least
$e^{-n\epsilon^2}$ mass on an $\varepsilon_n$-ball around the truth:

$$
\Pi\big(\theta : d(\theta, \theta_0) \leq \varepsilon_n\big) \geq e^{-n\epsilon^2}
\quad\text{for some } \epsilon < \varepsilon_n.
$$

**Definition (entropy condition).** For every $\epsilon > 0$, there exists a
set of $\mathcal{F}$-brackets covering the model's $\epsilon$-ball around
$\theta_0$ with logarithmic bracketing entropy
$H(\epsilon, \mathcal{F}, d) \leq n\epsilon^2$ — the number of brackets grows
at most exponentially in $n\epsilon^2$.

**Theorem (Ghosal–Ghosh–van der Vaart, structure).** If both conditions hold at
rate $\varepsilon_n$, then the posterior contracts at rate $\varepsilon_n$: for
every $M_n \to \infty$,

$$
\Pi_n\big(d(\theta, \theta_0) > M_n\varepsilon_n \mid X^{(n)}\big) \xrightarrow{P_{\theta_0}} 0.
$$

*Proof structure.* The proof is a generalisation of [the Bernstein–von Mises
page's Step 4](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/):
the prior mass condition provides the lower bound on the denominator (the
marginal likelihood over the $\varepsilon_n$-ball), and the entropy condition
provides the upper bound on the numerator (the posterior mass outside it) via a
testing argument over the bracketing set. The testing step replaces the finite
compact of the parametric case with a finite bracketing cover of the infinite-
dimensional model, and the entropy bound is what makes the cover finite. The
exponent $n\epsilon_n^2$ appears in both conditions — it is the information
budget, and the rate is the largest $\varepsilon_n$ at which both conditions
can hold simultaneously. $\blacksquare$

**The minimax rate for $\beta$-smooth densities.** For a $\beta$-Hölder true
density on $[0,1]$, the optimal rate is

$$
\varepsilon_n \asymp n^{-\frac{\beta}{2\beta + 1}},
$$

achieved by priors whose smoothness matches $\beta$ (spline priors, Gaussian
process priors with matched length-scale). The rate degrades as $\beta$
decreases — rougher truths are harder to estimate — and saturates at
$n^{-1/2}$ as $\beta \to \infty$, recovering the parametric rate.

## 3. Why nonparametric is harder

The parametric rate $n^{-1/2}$ requires $O(1)$ parameters; the nonparametric
rate for $\beta$-smooth functions requires the *effective dimension* of the
function class at scale $\varepsilon_n$ to be $O(\varepsilon_n^{-1/\beta})$.
The prior must place its mass on that limited-dimensional subspace — which is
what the entropy condition formalises — and if the prior spreads its mass over
too many directions, the posterior chases noise instead of signal.

**Freedman's counterexample, located.** The [frontier
page](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)
notes Freedman (1999) showed the posterior can be inconsistent in shape even
while concentrating. The mechanism is the prior mass condition failing *in
shape*: the prior places mass near the truth in $L^1$ but not in the directions
that distinguish the truth from its neighbours, so the posterior concentrates
but its credible intervals under-cover. The prior mass condition is necessary
but not sufficient — the shape of the mass matters.

## 4. Where the frontier is

The nonparametric contraction theory is complete for the models it covers:
Gaussian-process priors with matched length-scale, spline priors, Pólya-tree
priors for densities. The open questions are at the boundaries:

- **Adaptation.** A prior that achieves the optimal rate without knowing
  $\beta$ in advance. Hierarchical priors put a hyperprior on the smoothness;
  the theory shows this works for some hyperpriors and fails for others
  (impossibility results by Hoffmann and Nickl mark exactly where adaptation is
  free and where it must be paid for).
- **Deep priors.** Neural-network priors on functions: their approximation
  theory is known, their posterior contraction theory is being written now.
- **Structured nonparametrics.** Contractions on function spaces with
  constraints (monotonicity, log-concavity) — the constraint changes the
  entropy and hence the rate, and the theory is model-specific.

## Common Pitfalls

- **Quoting a contraction rate without its conditions.** Both the prior mass
  and entropy conditions are needed; either alone is insufficient, and each
  fails differently.
- **Assuming $n^{-1/2}$ universally.** The parametric rate is a ceiling; the
  nonparametric rate depends on smoothness and is always at best
  $n^{-\beta/(2\beta+1)}$ for finite $\beta$.
- **Reading "contraction" as "consistency".** Contraction is consistency plus a
  rate; a rate theorem without consistency is vacuous, and consistency without
  a rate is uninformative.
- **Using the Bernstein–von Mises theorem in nonparametric models.** BvM *fails*
  in infinite dimensions for Gaussian priors (Freedman 1999): the posterior
  shape is wrong even when the contraction rate is right. The credible
  intervals from a nonparametric posterior are not automatically
  frequentist-valid — that requires shape-matched priors or Bernstein–von Mises
  for adaptive priors, both open research areas.
- **Assuming the prior mass condition holds because the prior has full
  support.** Full support means every open set has positive prior mass; the
  condition needs that mass to be at least $e^{-n\epsilon^2}$ — exponentially
  small is not zero, but the *rate* at which the mass decays matters, and full
  support alone gives no rate.

## Cross-References

- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)** — the parametric ancestor of this theory, and the proof whose Step 4 generalises here.
- **[Measure Theory](https://mathematics.wyattau.com/10-measure-theory/)** — the $L^p$ spaces and covering-number machinery behind the entropy condition.
- **[Sobolev Spaces](/11-functional-analysis/10_sobolev-spaces/)** — the smoothness scale in which the rate $\beta$ is measured.
- **[Gaussian Processes](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/9_gaussian-processes/)** — the prior class whose contraction theory is the most developed.
- **[Statistical Decision Theory](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/2_statistical-decision-theory/)** — the loss framework in which the minimax rate is defined.
- [The Research Frontier](/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/) — where this theory meets its open questions.
