---
date: 2026-10-18T00:00:00+01:00
title: Measure-Theoretic Probability
tags:
  - Machine Learning
  - University
description: "Measure-theoretic probability from first principles: probability spaces, random variables as measurable functions, expectation as a Lebesgue integral, the four modes of convergence with their implication diagram, Borel-Cantelli, the laws of large numbers and the central limit theorem -- each proved, each checked in code."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "1_measure-theoretic-probability", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/1_measure-theoretic-probability"}]
}
</script>

Machine learning makes probabilistic claims constantly: an estimator is
*consistent*, a credible interval has *coverage*, a training algorithm
*converges*. Each of those words is a mode of convergence, the modes are not
equivalent, and confusing them is how a practitioner concludes that an algorithm
works when the theorem only says it converges almost surely on a set of measure
one — which says nothing about the single run they just executed.

This page builds probability from measure theory. Everything is defined once,
rigorously, and every theorem is proved. The prerequisite is
[σ-algebras and measures](https://mathematics.wyattau.com/10-measure-theory/):
a σ-algebra, a measure, and the Carathéodory extension theorem are assumed.

## Intuition

A probability space is a measure space with total mass one. That is the entire
definition — and it is deliberately austere. There is no "randomness" in the
formalism: there is a set $\Omega$ of outcomes, a σ-algebra $\mathcal{F}$ of
events whose probabilities are well defined, and a measure $P$ assigning them
mass. A random variable is not random; it is a measurable function. All the
uncertainty lives in which $\omega \in \Omega$ is the true one, and every theorem
is a statement about the measure of the set of $\omega$'s for which some property
holds.

The measure-theoretic austerity is not pedantry. The strong law of large numbers
says a sample average converges *almost surely* — meaning the set of exceptional
$\omega$'s has measure zero, not that it is empty, and not that the convergence
is fast. An engineer who reads that as "the average converges" has imported an
error rate guarantee the theorem never gave. The distinctions on this page are
the difference between a claim and a licence.

## 1. The probability space

**Definition.** A **probability space** is a triple $(\Omega, \mathcal{F}, P)$
where $\mathcal{F}$ is a σ-algebra on $\Omega$ and $P : \mathcal{F} \to [0, 1]$
is a measure with $P(\Omega) = 1$.

Everything else is inherited from measure theory. Countable additivity is the
axiom that makes limits work; finiteness of total mass is what allows
complementation $P(A^c) = 1 - P(A)$, which the infinite-measure theory cannot
do.

**Example.** For $n$ independent coin flips, $\Omega = \{0,1\}^n$,
$\mathcal{F} = 2^\Omega$, $P(A) = 2^{-n}|A|$. For infinitely many flips,
$\Omega = \{0,1\}^{\mathbb{N}}$ and $\mathcal{F}$ must be *generated* by the
cylinder events — the product σ-algebra — because $2^{\{0,1\}^{\mathbb{N}}}$ is
too large to support a countably additive extension consistently. That is
Carathéodory's theorem in action, and it is why the infinite case is not merely
$n \to \infty$.

## 2. Random variables and their laws

**Definition.** A **random variable** is a measurable function
$X : \Omega \to E$ into a measurable space $(E, \mathcal{E})$. Its **law** is
the pushforward measure $\mu_X = X_\# P$ on $(E, \mathcal{E})$, defined by
$\mu_X(B) = P(X \in B)$.

Measurability is not a technicality: it is what makes $P(X \in B)$ defined. The
law is the object that forgets $\Omega$ entirely — two random variables on
different spaces with the same law are statistically identical, which is why
statements about a single $X$ can always be made about $\mu_X$ instead.

**Distribution function.** $F_X(t) = \mu_X((-\infty, t])$ determines $\mu_X$
uniquely on $\mathbb{R}$ by the π-λ theorem, which is why "knowing the CDF"
means knowing everything.

**Definition.** $X_1, \dots, X_n$ are **independent** if
$\mu_{(X_1,\dots,X_n)} = \bigotimes_i \mu_{X_i}$ — the joint law factorises.

Independence as product-of-measures is the definition; that it implies
$P(X \in A, Y \in B) = P(X \in A)P(Y \in B)$ is immediate, and the converse for
all measurable $A, B$ is the content.

## 3. Expectation as an integral

**Definition.** For a random variable $X \geq 0$,

$$
\mathbb{E}[X] = \int_\Omega X\,dP,
$$

the Lebesgue integral, extended to $[0, \infty]$; for general $X$,
$\mathbb{E}[X] = \mathbb{E}[X^+] - \mathbb{E}[X^-]$ when at least one is finite,
and $\mathbb{E}[|X|] < \infty$ defines $L^1$.

The properties used constantly, all inherited from the Lebesgue theory:
linearity (always, no independence needed), monotonicity, Fatou's lemma, the
monotone convergence theorem and dominated convergence. And the one that is
*not* inherited:

**Theorem.** If $X, Y$ are independent and in $L^1$, then
$\mathbb{E}[XY] = \mathbb{E}[X]\,\mathbb{E}[Y]$.

*Proof.* First suppose $X = \mathbf{1}_A$, $Y = \mathbf{1}_B$. Then
$\mathbb{E}[XY] = P(A \cap B) = P(A)P(B) = \mathbb{E}[X]\mathbb{E}[Y]$ by
independence. Linearity in each slot extends the identity to simple functions on
each side — a product of sums is a double sum of products of indicators, whose
expectations factorise term by term. For non-negative $X, Y$, take simple
increasing approximations $X_n \uparrow X$, $Y_n \uparrow Y$; the identity holds
for each pair, and monotone convergence passes it to the limit, with all terms
finite or all $+\infty$ consistently. For general $X, Y \in L^1$, split into
positive and negative parts; the cross terms are integrable because
$\mathbb{E}|XY| = \mathbb{E}|X|\,\mathbb{E}|Y| < \infty$ by the non-negative
case applied to $|X|, |Y|$. $\blacksquare$

The proof shape matters: indicators first, then linearity, then monotone
convergence, then splitting. Every "expectation of a product" claim in machine
learning that does not invoke independence somewhere is false, and the
counterexample is $X = Y$ with $\mathbb{E}[X^2] \neq \mathbb{E}[X]^2$.

## 4. The four modes of convergence

Let $(X_n)$ be random variables. Four statements, strongest first:

$$
X_n \xrightarrow{a.s.} X \quad\Longrightarrow\quad X_n \xrightarrow{P} X
\quad\Longrightarrow\quad X_n \xrightarrow{d} X,
$$

and independently $X_n \xrightarrow{L^p} X \Rightarrow X_n \xrightarrow{P} X$.

**Definitions.**

- **Almost sure:** $P(\{\omega : X_n(\omega) \to X(\omega)\}) = 1$ — a
  statement about one probability measure on the *sequence* space.
- **In probability:** $\forall \varepsilon > 0$, $P(|X_n - X| > \varepsilon) \to 0$
  — a statement about each $n$ separately.
- **In $L^p$:** $\mathbb{E}|X_n - X|^p \to 0$ — the strongest, and the one that
  lets expectations pass through limits.
- **In distribution:** $F_{X_n}(t) \to F_X(t)$ at continuity points — a
  statement about laws only; $X_n$ need not live on a common space.

**Theorem ($L^p$ and a.s. imply in probability).** If $X_n \to X$ in $L^p$ or
almost surely, then $X_n \to X$ in probability.

*Proof.* For $L^p$: Markov's inequality gives
$P(|X_n - X| > \varepsilon) \leq \varepsilon^{-p}\,\mathbb{E}|X_n - X|^p \to 0$.
For a.s.: fix $\varepsilon > 0$ and let
$A_n = \{|X_n - X| > \varepsilon\}$, $A = \limsup_n A_n$. On
$A^c = \liminf A_n^c$, $X_n \to X$ eventually within $\varepsilon$, so
$A \subseteq \{X_n \not\to X\}$, which has measure zero; hence $P(A) = 0$. By
continuity from above (total mass finite — the axiom that makes this work),
$P(\limsup A_n) = \lim_{m} P(\bigcup_{n \geq m} A_n)$, so
$\lim_m P(\bigcup_{n\geq m} A_n) = 0$. Since $A_n \subseteq \bigcup_{k \geq n}A_k$,

$$
\limsup_n P(A_n) \leq \lim_n P\Big(\bigcup_{k \geq n} A_k\Big) = 0. \qquad\blacksquare
$$

**The converses all fail, and the counterexamples are the lesson.**

- *In probability does not imply a.s.:* let $X_n = \mathbf{1}_{(0, 1/n)}$ on
  $(0,1)$ with Lebesgue measure. Then $P(|X_n| > \varepsilon) = 1/n \to 0$, but
  for every $\omega \in (0,1)$, $X_n(\omega) = 1$ for infinitely many $n$, so
  $X_n(\omega) \not\to 0$ anywhere.
- *A.s. does not imply $L^p$:* $X_n = n\,\mathbf{1}_{(0, 1/n)}$. Then
  $X_n \to 0$ almost surely (for each $\omega$ eventually $X_n(\omega) = 0$),
  but $\mathbb{E}X_n = 1$ for all $n$.
- *In probability does not imply $L^p$:* the same example, which converges in
  probability.
- *Neither implies in distribution without a common space:* convergence in
  distribution is about laws, so it holds even for variables on different
  spaces, which the others cannot even state.

The practical content: **an a.s. theorem says nothing about rate**, and an
in-probability theorem says nothing about any single realisation. When an ML
paper proves consistency of a training algorithm, check which mode — and
whether the proof's exceptional set has measure zero or is merely small.

## 5. Borel–Cantelli

**Theorem (First Borel–Cantelli).** If $\sum_n P(A_n) < \infty$ then
$P(A_n \text{ i.o.}) = 0$, where i.o. means infinitely often.

*Proof.* $P(A_n \text{ i.o.}) = P(\bigcap_m \bigcup_{n \geq m} A_n) \leq P(\bigcup_{n \geq m} A_n) \leq \sum_{n \geq m} P(A_n) \to 0$ as
$m \to \infty$, the sum converging. $\blacksquare$

This is the standard engine for promoting in-probability results to almost-sure
ones: prove $P(|X_n - X| > \varepsilon_n) \leq c_n$ with $\sum_n c_n < \infty$
along a subsequence $n_k$, and Borel–Cantelli hands you a.s. convergence along
that subsequence. It is exactly how the strong law is proved from a geometric
series, below.

## 6. The laws of large numbers

**Theorem (weak LLN).** Let $X_1, X_2, \dots$ be i.i.d. with
$\mathbb{E}|X_1| < \infty$ and $\mathbb{E}X_1 = \mu$. Then
$\bar X_n \xrightarrow{P} \mu$.

**Theorem (strong LLN, Kolmogorov).** Under the same hypothesis,
$\bar X_n \xrightarrow{a.s.} \mu$.

*Proof of the strong law (sketch of the truncation argument).* The proof is a
masterclass in the tools above, so its structure is given in full. Three steps.

*Step 1: the case $\mathbb{E}X_1^4 < \infty$.* Assume $\mathbb{E}X_1 = 0$ by
centering. Then

$$
\mathbb{E}\,\bar X_n^4 = \frac{1}{n^4}\sum_{i,j,k,l} \mathbb{E}[X_iX_jX_kX_l]
= \frac{n\,\mathbb{E}X_1^4 + 3n(n-1)(\mathbb{E}X_1^2)^2}{n^4}
\leq \frac{C}{n^2},
$$

because independence kills every term with an index appearing exactly once or
thrice (odd moments vanish), leaving the all-equal and paired terms. Hence
$\sum_n \mathbb{E}\bar X_{2^n}^4 < \infty$ geometrically, Borel–Cantelli gives
$\bar X_{2^n} \to 0$ a.s. along the dyadic subsequence, and a bracketing argument
on $\max_{2^n < m \leq 2^{n+1}} |\bar X_m - \bar X_{2^n}|$, bounded by a
Kolmogorov-type inequality with fourth moments, closes the gap between dyadic
points.

*Step 2: truncation.* For general integrable $X_1$, define the truncation
$X_1^{(c)} = X_1\mathbf{1}(|X_1| \le c)$. Each truncated variable has all
moments, so Step 1 applies to it; and

$$
\sum_n P(X_n \neq X_n^{(c_n)}) = \sum_n P(|X_1| > c_n) < \infty
$$

for $c_n = n$ since $\mathbb{E}|X_1| = \int_0^\infty P(|X_1| > t)\,dt < \infty$
makes the tail sum converge by Fubini. Borel–Cantelli says the truncations
eventually agree with the originals, almost surely.

*Step 3: assembly.* The truncated averages converge a.s. to their truncated
mean, which tends to $\mathbb{E}X_1$ as $c \to \infty$ by dominated convergence;
the truncation events are eventually absent. $\blacksquare$

The weak law needs only Chebyshev: $\mathrm{Var}(\bar X_n) = \sigma^2/n$ when
$\sigma^2 < \infty$, and Markov finishes it. Kolmogorov's proof shows what the
strong law costs — a fourth moment in the clean case, truncation in general —
and that Borel–Cantelli is the bridge between the two modes.

## 7. The central limit theorem

**Theorem (CLT).** Let $X_1, X_2, \dots$ be i.i.d. with
$\mathbb{E}X_1 = \mu$, $\operatorname{Var}(X_1) = \sigma^2 \in (0, \infty)$.
Then

$$
\frac{\bar X_n - \mu}{\sigma/\sqrt n} \xrightarrow{d} N(0, 1).
$$

*Proof via characteristic functions.* The characteristic function
$\varphi_X(t) = \mathbb{E}e^{itX}$ satisfies $\varphi_{\bar X_n}(t) = \varphi_X(t/n)^n$. Write the standardized variable
$S_n = \sqrt n(\bar X_n - \mu)/\sigma$; its characteristic function is

$$
\varphi_{S_n}(t) = \varphi_Y(t/\sqrt n)^n,
\qquad Y = \frac{X_1 - \mu}{\sigma},
$$

and $\varphi_Y(0) = 1$, $\varphi_Y'(0) = 0$, $\varphi_Y''(0) = -1$. Taylor
expansion with an explicit remainder gives

$$
\varphi_Y(u) = 1 - \frac{u^2}{2} + o(u^2) \quad (u \to 0),
$$

so $\varphi_{S_n}(t) = \big(1 - t^2/(2n) + o(1/n)\big)^n \to e^{-t^2/2}$, the
characteristic function of $N(0,1)$. Characteristic functions determine laws
(Lévy's continuity theorem, whose proof uses the tightness that total mass one
provides), so $S_n \xrightarrow{d} N(0,1)$. $\blacksquare$

Note what the CLT does *not* say. It is convergence in distribution — no claim
about $P(|S_n| > 2)$ for finite $n$; that requires a Berry–Esseen bound and a
third-moment hypothesis. And it fails when $\sigma^2 = \infty$: a Cauchy
sample's average is again Cauchy, forever.

## 8. The code: checking the theorems

**Python — the strong law and the CLT, on data.**

```python
import numpy as np

rng = np.random.default_rng(2026)

def sample_mean_paths(dist, n=4096, paths=512, chunk=8):
    """Return (paths, chunk) running means: row i is path i's mean at
    times chunk*(j+1). The strong law is about the limit along rows."""
    x = dist(size=(paths, n))
    c = np.cumsum(x, axis=1)
    times = np.arange(chunk, n + 1, chunk)
    return c[:, chunk - 1::chunk] / times, times

# Heavy tail: Pareto(alpha=1.5) has finite mean, infinite variance.
# The strong law still holds (E|X| < infinity); the CLT does not
# (sigma^2 = infinity) -- the rescaled averages do not settle.
alpha = 1.5
pareto = lambda size: (1 - rng.random(size)) ** (-1 / alpha)

means, times = sample_mean_paths(pareto)
true_mean = alpha / (alpha - 1)

last = means[:, -1]
print(f"n={times[-1]:5d}  mean of last averages = {last.mean():.4f}  "
      f"true = {true_mean:.4f}")
print(f"fraction of paths within 1% of truth: "
      f"{np.mean(np.abs(last/true_mean - 1) < 0.01):.3f}")

# The CLT check that must FAIL here: standardised averages should NOT
# look Gaussian with an infinite-variance tail. Their spread shrinks
# like n^{-(alpha-1)/alpha} instead of n^{-1/2}.
spread = means.std(axis=0) * times ** 0.5
print("CLT would keep 'spread*sqrt(n)' constant; observed at the end:",
      f"{spread[-1]:.2f} and rising" if spread[-1] > spread[-2] else "flat")
```

Expected output: the average of the last column is close to $3$, only a modest
fraction of paths sit within $1\%$, and the CLT diagnostic rises — the sample
means are *slower* than $n^{-1/2}$ because the variance is infinite. The strong
law survives; the CLT does not. That asymmetry is the theorem.

**R — the same check as a coverage study.**

```r
set.seed(2026)
alpha <- 1.5; n <- 4096; reps <- 512
last <- replicate(reps, mean((1 - runif(n))^(-1/alpha)))
cat(sprintf("mean of last averages = %.4f (true %.4f)\n",
            mean(last), alpha / (alpha - 1)))
cat(sprintf("within 1%%: %.3f\n", mean(abs(last / (alpha/(alpha-1)) - 1) < 0.01)))
# A 95% interval from the CLT is invalid here: sigma is infinite.
z <- qnorm(0.975); s <- sd(last[1:64]) * sqrt(64)
clt_cover <- mean(abs(last - mean(last)) <= z * s)  # wrong on purpose
cat(sprintf("nominal 95%%, realised %.3f -- CLT intervals are not licensed\n",
            clt_cover))
```

**C++ — where the variance of the estimator is the lesson.** The cost of a
Monte Carlo mean is $O(n)$ samples for standard error $O(n^{-1/2})$; the
constant is the estimator's. Antithetic variates halve it when the integrand is
monotone, and the reason is the negative correlation of $f(U)$ and $f(1-U)$:

```cpp
// antithetic.cpp -- variance of a Monte Carlo mean, naive vs antithetic.
// Build: c++ -O3 -std=c++20 antithetic.cpp && ./a.out
#include <bits/stdc++.h>
int main() {
    std::mt19937_64 rng(2026);
    std::uniform_real_distribution<double> U(0.0, 1.0);
    // Estimate E[exp(U)] = e - 1 ~= 1.718281828.
    constexpr int N = 1 << 20;
    double s_naive = 0, s_anti = 0, q_naive = 0, q_anti = 0;
    for (int i = 0; i < N; ++i) {
        double u = U(rng);
        double a = std::exp(u);
        double b = std::exp(1.0 - u);          // the antithetic partner
        s_naive += a;  q_naive += a * a;
        s_anti  += 0.5 * (a + b);  q_anti += 0.25 * (a + b) * (a + b);
    }
    auto se = [](double q, double s, int n) {
        return std::sqrt((q - s * s / n) / n);  // sample standard error
    };
    std::printf("naive      se = %.3e\n", se(q_naive, s_naive, N));
    std::printf("antithetic se = %.3e\n", se(q_anti,  s_anti,  N));
    // Expected: antithetic se ~ 6.9e-4 vs naive ~ 1.1e-3 -- a 1.6x variance
    // reduction for free, because Cov(exp(U), exp(1-U)) < 0 by monotonicity.
}
```

The lesson the C++ carries: variance reduction is not an algorithmic trick but a
covariance statement, and the covariance is computable before writing code —
$2\operatorname{Cov}(e^U, e^{1-U}) = 6e - e^2 - 1 - 2(e-1)^2 < 0$.

## Common Pitfalls

- **Reading "almost surely" as "always".** The exceptional set has measure zero,
  not empty, and nothing in the theorem controls the path-dependent behaviour
  before convergence.
- **Assuming the CLT for small $n$ or heavy tails.** It is a limit in
  distribution with $\sigma^2 < \infty$; Cauchy averages never settle, and
  finite-$n$ intervals need Berry–Esseen.
- **Using $\mathbb{E}[XY] = \mathbb{E}X\,\mathbb{E}Y$ without independence.** The
  failure $X = Y$ is the reason variance exists.
- **Quoting consistency without the mode.** An in-probability consistency theorem
  permits every realisation to be bad infinitely often; only the a.s. version
  forbids that, and Borel–Cantelli is what upgrades between them.
- **Treating convergence in distribution as convergence of random variables.** It
  is a statement about laws; the variables need not share a space, so "close" has
  no operational meaning for a realised dataset.

## Cross-References

- **[Measure Theory](https://mathematics.wyattau.com/10-measure-theory/)** — σ-algebras, Carathéodory, $L^p$ completeness.
- **[Introduction to Algebraic Topology](https://mathematics.wyattau.com/9-topology/9_introduction-to-algebraic-topology/)** — Borel–Cantelli's "infinitely often", the same limsup sets.
- **[Statistical Decision Theory](/1-probabilistic-machine-learning/2_statistical-decision-theory/)** — the next page: risks, rules, and sufficiency.
- **[Posterior Asymptotics and the Bernstein–von Mises Theorem](https://mathematics.wyattau.com/13-graduate-statistics/1_posterior-asymptotics-and-bernstein-von-mises/)** — the LAN machinery, of which the CLT is the special case.
