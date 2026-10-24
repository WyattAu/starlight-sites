---
date: 2026-10-24T00:00:00+00:00
title: "The Solow Growth Model"
tags:
  - Economics
  - University
description: "The Solow model derived: the law of motion, existence and stability of the steady state proved, the golden rule computed, and convergence dynamics read off the phase diagram - with the saving-rate comparative static done honestly."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "2 Macroeconomics", "url": "https://economics.wyattau.com/2-macroeconomics"}, {"name": "The Solow Growth Model", "url": "https://economics.wyattau.com/2-macroeconomics/1_solow"}]
}
</script>

### 1. The Model

**Definition.** Output at time $t$ is $Y_t = F(K_t, A_t L_t)$ with $F$ neoclassical — positive
marginal products, diminishing returns to each factor, constant returns to scale — and $A_t L_t$
effective labour growing at rate $n + g$ (population plus technology). A share $s$ of output is
invested; capital depreciates at rate $\delta$:

$$
\dot{K}_t = s F(K_t, A_t L_t) - \delta K_t.
$$

**Change of variables.** Constant returns lets us divide by $A_t L_t$. With
$k = K/(AL)$ (capital per effective worker) and $f(k) = F(k, 1)$,

$$
\dot{k} = s f(k) - (n + g + \delta) k. \tag{1}
$$

The derivation uses the chain rule on $\dot{k} = \frac{d}{dt}(K/AL)$: the denominator's growth
rate $n + g$ enters as a drag exactly like depreciation — this is why break-even investment is
$(n + g + \delta)k$.

### 2. Steady State: Existence and Stability

**Theorem 2.1.** If $f(0) = 0$, $f'(k) > 0$, $f''(k) < 0$, and $f$ satisfies the Inada conditions
$f'(0) = \infty$, $f'(k) \to 0$ as $k \to \infty$, then there exists a unique steady state
$k^* > 0$ with $s f(k^*) = (n + g + \delta) k^*$, and every $k_0 > 0$ converges to $k^*$.

**Proof.** *Existence.* Define $h(k) = s f(k)/(k)$ for $k > 0$ — average saving per unit of
capital. The Inada condition at zero gives $h(k) \to \infty$ as $k \to 0$ (numerator grows
faster than $k$ since $f'(0) = \infty$), and $f'(k) \to 0$ with diminishing returns gives
$h(k) \to s f'(k) \leq s \cdot 0$... precisely: $f(k)/k = f'(\xi)$ for some $\xi$ by the mean
value theorem with $f(0) = 0$, so $h(k) = s f'(\xi) \to 0$. The function
$g(k) = n + g + \delta$ is the constant line. $h$ is continuous, starts above the line, ends
below it — so by the intermediate value theorem some $k^*$ has $h(k^*) = n + g + \delta$, i.e.
$s f(k^*) = (n + g + \delta) k^*$. Uniqueness: $h$ is strictly decreasing ($f'' < 0$ makes
$f(k)/k$ decreasing — the average product falls because the marginal product lies below it), so
it crosses the line exactly once.

*Stability.* From (1), $\partial \dot{k}/\partial k = s f'(k) - (n + g + \delta)$, which is
negative at $k^*$ — because at the crossing, $f'(k^*) < f(k^*)/k^* = (n+g+\delta)/s$ (the
marginal product lies below the average product under diminishing returns). So $k^*$ is locally
stable. Globally: for $k < k^*$, $h(k) > h(k^*)$ (h decreasing) means $\dot{k} > 0$ — capital
deepens; for $k > k^*$, $\dot{k} < 0$ — capital decays. Both sides move toward $k^*$. $\blacksquare$

Every hypothesis is visible in the conclusion: remove the Inada condition at zero and multiple
steady states (or collapse to zero) appear; remove diminishing returns ($f'' < 0$) and stability
vanishes — the $AK$ model's constant returns to capital has $\dot{k} = (sf - \delta)k$ growing
or collapsing forever, no steady state at all.

### 3. The Golden Rule

**Definition.** The **golden-rule** saving rate $s_g$ maximises steady-state *consumption* per
effective worker:

$$
c^* = f(k^*) - (n + g + \delta) k^*.
$$

**Theorem 3.1.** Consumption is maximised at the capital level where $f'(k^{gold}) = n + g +
\delta$ — the saving rate $s_g = \frac{(n+g+\delta)k^{gold}}{f(k^{gold})}$.

**Proof.** $dc^*/dk^* = f'(k^*) - (n + g + \delta)$, set to zero. The second-order condition
holds by diminishing returns. The steady-state condition converts the level into the saving
rate. $\blacksquare$

The economic reading: at the margin, capital produces $f'(k)$ extra output and requires
$(n + g + \delta)$ units of investment to maintain; consumption is maximised where the two
balance. Steady states with $k^* > k^{gold}$ are **dynamically inefficient** — lowering $s$
raises consumption now *and* along the transition, with no future sacrifice. The overlapping-
generations model can generate such over-accumulation; the Ramsey model (next page) cannot, by
construction of its transversality condition.

### 4. Convergence and the Comparative Static

**Proposition 4.1 (Conditional convergence).** Economies with the same $s, n, g, \delta$ and
production function converge to the same $k^*$, and the speed of convergence near $k^*$ is
approximately $\lambda = (n + g + \delta - s f'(k^*)) \cdot \theta$ where $\theta$ is capital's
share — empirically around 2–4% per year.

**Proof sketch.** Linearise (1) at $k^*$: $\dot{k} \approx (s f'(k^*) - (n + g + \delta))(k - k^*)$.
With Cobb--Douglas $f(k) = k^\alpha$, $f'(k^*) = \alpha f(k^*)/k^* = \alpha(n+g+\delta)/s$ at the
steady state, giving $\dot{k} \approx -(1 - \alpha)(n + g + \delta)(k - k^*)$. The log-linearised
speed is $\lambda = (1 - \alpha)(n + g + \delta)$ — the coefficient the convergence regressions
estimate. $\blacksquare$

**Comparative static.** Raising $s$: $h(k)$ shifts up, the crossing moves right — higher $k^*$,
higher steady-state income, but **no permanent growth effect**: once $k^*$ is reached, growth per
effective worker is $g$ (from technology) regardless of $s$. This is the model's central
discipline on policy: saving changes the *level*, only technology changes the *rate*. Explaining
persistent growth-rate differences by saving differences is impossible inside Solow — which is
exactly why endogenous-growth models exist, and why the model remains the benchmark whose
failures are informative.

### 5. Self-test

1. Where does the mean value theorem enter the existence proof? (§2 — writing $f(k)/k =
   f'(\xi)$ to pin the average product's limits.)
2. Why is $f(k)/k$ decreasing when $f'' < 0$? (§2 — the marginal product lies below the average
   product, so the average falls as $k$ rises.)
3. Why can't Solow explain persistent growth-rate differences across countries with different
   saving rates? (§4 — $s$ changes levels; the long-run growth rate is $g$ for everyone.)
4. What breaks if $f$ has constant returns to $k$ alone ($AK$)? (§2 — $h(k)$ is constant, no
   crossing; growth or collapse with no steady state.)

### Where to go next

- [The Ramsey problem](/2-macroeconomics/2_ramsey/) — the saving rate chosen by households
  rather than assumed, with the Euler equation derived from the household's problem.
- The [micro theory track](/1-microeconomic-theory/) — the firm's profit maximisation assumed
  here ($F$ neoclassical) is the same object proved there.
