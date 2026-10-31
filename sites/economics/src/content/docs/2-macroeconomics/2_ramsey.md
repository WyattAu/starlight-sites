---
date: 2026-10-24T00:00:00+00:00
title: "The Ramsey Problem"
tags:
  - Economics
  - University
description: "The saving rate chosen rather than assumed: the household's problem, the Euler equation derived from a two-point perturbation, the modified golden rule, and why the Ramsey economy cannot over-accumulate."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "2 Macroeconomics", "url": "https://economics.wyattau.com/2-macroeconomics"}, {"name": "The Ramsey Problem", "url": "https://economics.wyattau.com/2-macroeconomics/2_ramsey"}]
}
</script>

### 1. The Difference From Solow

Solow assumes a saving rate. Ramsey asks where a saving rate would come from: a household
choosing a consumption path to maximise discounted utility over an infinite horizon, subject to
the same technology. The answer replaces an exogenous parameter with an optimisation — and the
optimisation's first-order condition is the model's engine.

**Definition.** The representative household with population $L_t = L_0 e^{nt}$ solves

$$
\max_{\{c_t, k_t\}} \; \int_0^\infty e^{-\rho t}\, \frac{c_t^{1 - \theta} - 1}{1 - \theta}\, L_t \, dt
\quad \text{s.t.} \quad
\dot{k}_t = f(k_t) - c_t - (n + \delta) k_t, \quad k_0 \text{ given},
$$

with $\rho > 0$ the discount rate, $\theta > 0$ the inverse elasticity of intertemporal
substitution, and $f$ neoclassical as in Solow. (Technology growth $g$ is set to zero for
clarity; reintroducing it scales steady-state consumption.)

### 2. The Euler Equation

**Theorem 2.1.** Along any optimal path,

$$
\frac{\dot{c}_t}{c_t} = \frac{f'(k_t) - \delta - \rho}{\theta}. \tag{Euler}
$$

**Proof.** Perturb the optimal path at two nearby dates, working per person throughout. At
time $t$ cut per-capita consumption by a small $\varepsilon$ and invest the freed goods: total
investment $\varepsilon L_t$, which grows at the net marginal product $f'(k) - \delta$, so the
*total* extra capital at $t + \Delta t$ is $\varepsilon L_t\bigl(1 + (f'(k_t) - \delta)\Delta t\bigr)$.
Spread over the $t + \Delta t$ population $L_{t + \Delta t} = L_t e^{n \Delta t}$, that is
*per person* $\varepsilon\bigl(1 + (f'(k_t) - \delta)\Delta t\bigr)e^{-n \Delta t}$, consumed
then, after which the path returns to the original one.

Optimality requires the utility change to be zero to first order. The discounted utility change
is

$$
-u'(c_t)\, L_t\, \varepsilon
\;+\;
e^{-\rho \Delta t}\, u'(c_{t + \Delta t})\, L_{t + \Delta t}\,
\varepsilon \bigl(1 + (f'(k_t) - \delta)\Delta t\bigr)\, e^{-n \Delta t} \;=\; 0.
$$

Divide by $L_t$ and substitute $L_{t + \Delta t} e^{-n \Delta t} = L_t$: the population terms
cancel *exactly* — more people share the consumption gain, but the gain was spread over more
people, and the two effects multiply to unity. What remains:

$$
-u'(c_t) \;+\; e^{-\rho \Delta t}\, u'(c_{t + \Delta t}) \bigl(1 + (f'(k_t) - \delta)\Delta t\bigr) = 0.
$$

Expand $u'(c_{t+\Delta t}) = u'(c_t) + u''(c_t)\dot{c}_t\Delta t$ and $e^{-\rho\Delta t} =
1 - \rho\Delta t$ to first order, drop the zero-order terms $-u'(c_t) + u'(c_t)$, divide by
$u'(c_t)\Delta t$:

$$
\frac{u''(c_t)}{u'(c_t)}\,\dot{c}_t \;+\; (f'(k_t) - \delta - \rho) \;=\; 0.
$$

With $u(c) = \frac{c^{1-\theta} - 1}{1 - \theta}$, $\frac{u'' c}{u'} = -\theta$, giving
(Euler). $\blacksquare$

Note where population growth went: it never appears. More people share the consumption gain, but
the gain was computed per person — the cancellation is exact, and the modified golden rule below
will contain $\rho$ but not $n$. This is the standard result: the *rate of population growth*
affects the level of capital per person through the break-even investment, not the household's
intertemporal margin.

The economics in one line: consumption grows when the return to saving $f'(k) - \delta$ exceeds
the impatience rate $\rho$, and the $\theta$ in the denominator says a *less* willing
substitutor (higher $\theta$) moves consumption *more slowly* in response to the same
incentive.

### 3. The Steady State: The Modified Golden Rule

**Theorem 3.1.** The steady state has

$$
f'(k^*_{R}) = \delta + \rho \qquad \text{and} \qquad c^* = f(k^*_{R}) - (\delta + n) k^*_{R}.
$$

**Proof.** In steady state $\dot{c} = 0$, so (Euler) gives $f'(k^*_R) - \delta - \rho = 0$.
The resource constraint with $\dot{k} = 0$ gives consumption. $\blacksquare$

**Proposition 3.2 (The modified golden rule sits below the golden rule).**
$f'(k^{gold}) = \delta + n$ — marginal product equals break-even investment at the consumption
maximum — while the Ramsey steady state satisfies $f'(k^*_R) = \delta + \rho$. Since $f'$ is
strictly decreasing (diminishing returns), $f'$ orders the capital stocks in reverse:

$$
k^*_R < k^{gold} \quad \iff \quad \delta + \rho > \delta + n \quad \iff \quad \rho > n.
$$

**Proof.** The two equalities are proved: the golden rule from maximising
$c = f(k) - (\delta + n)k$ (set the derivative to zero), the Ramsey rule from (Euler) at
$\dot{c} = 0$. The ordering follows from $f' < 0$ and the inequality as displayed.
$\blacksquare$

The condition $\rho > n$ is an assumption, and naming it is the point: households discount their
own future utility faster than population growth dilutes capital. Under it, the Ramsey steady
state has *less* capital than the golden rule — real households under-accumulate relative to the
consumption-maximising benchmark, permanently, not from myopia. A planner with zero discounting
would sit at the golden rule; the representative-household framework with $\rho > n$ forbids
that. Where Solow's constant $s$ can lie above the golden rate — over-accumulation is
*possible* — the Ramsey economy cannot over-accumulate at all: the transversality condition
below is the theorem-level reason. The Ramsey economy's saving rate also falls as it approaches
its steady state, from the high early value toward the modified-golden-rule rate.

### 4. The Transversality Condition: Why the Economy Cannot Over-Accumulate

**Condition.** Optimality requires

$$
\lim_{t \to \infty} e^{-\rho t} \lambda_t k_t = 0,
$$

where $\lambda_t = u'(c_t) e^{-\rho t}$ is the shadow value of capital.

**Why it matters.** Without it, the household's problem has a degenerate solution: accumulate
capital forever, never consume — satisfying the Euler equation and the budget while delivering
absurd utility. The transversality condition rules this out: the *present value* of terminal
capital must vanish, i.e. the household cannot plan to hold capital whose consumption value is
forever deferred. With the condition, the path that satisfies (Euler), the budget, and
transversality is *the* optimal path (sufficiency follows from concavity of $u$ and $f$).

**The contrast with Solow, stated precisely.** Solow's constant $s$ can lie above the golden
rate — over-accumulation is possible. Ramsey's economy cannot: over-accumulating means
consuming less now to finance capital whose discounted shadow value blows up, and the
transversality condition forbids exactly that. Dynamic inefficiency is a possibility in Solow
and a theorem-level impossibility in Ramsey — the same lesson the welfare theorems teach in the
micro track, in growth clothing.

### 5. The Phase Diagram, Stated

Two loci in $(k, c)$ space: $\dot{k} = 0$ (where $c = f(k) - (\delta + n)k$ — hump-shaped) and
$\dot{c} = 0$ (the vertical line $k = k^*_R$). The saddle path crosses them at
$(k^*_R, c^*)$: from any initial $k_0$, the economy jumps to *the* consumption level on the
saddle path and converges along it. The jump is instantaneous — consumption cannot be
pre-committed — which is why capital evolves slowly but consumption adjusts at once. This
saddle-path structure recurs in every forward-looking macro model; the diagram here is the
prototype.

### 6. Self-test

1. Where does $\theta$ enter the Euler equation, and what does its sign of effect mean?
   (§2 — dividing the excess return; higher $\theta$ means slower consumption adjustment.)
2. Why is $k^*_R < k^{gold}$ rather than a coincidence? (§3.2 — impatience $\rho > 0$ raises
   the required marginal product above the golden-rule level; diminishing returns orders the
   stocks.)
3. What is the transversality condition forbidding, economically? (§4 — the plan of accumulating
   forever without ever consuming the accumulation.)
4. Why does consumption jump at $t = 0$ while capital does not? (§5 — capital is a state
   (predetermined); consumption is a jump variable chosen freely on the saddle path.)

### Where to go next

- [The OLS estimator](/3-econometrics/1_ols-estimator/) — the empirical counterpart: the Euler
  equation's parameters are estimated with the machinery proved in the econometrics track.
- The [micro track](/1-microeconomic-theory/) — the household here is the consumer problem of
  that track, extended to an infinite horizon.
