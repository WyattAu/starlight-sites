---
date: 2026-10-24T00:00:00+00:00
title: "The Binomial Model and Risk-Neutral Pricing"
tags:
  - Finance
  - University
description: "Option pricing from replication: the one-period binomial model solved by constructing the hedge portfolio, risk-neutral probabilities proved equivalent to no-arbitrage, and the multi-period extension by backward induction."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "3 Derivatives", "url": "https://finance.wyattau.com/3-derivatives"}, {"name": "The Binomial Model", "url": "https://finance.wyattau.com/3-derivatives/1_binomial-model"}]
}
</script>

### 1. The One-Period Binomial Market

**Definition.** A stock trades today at $S_0$. Tomorrow it takes one of two values: $u S_0$ (up)
or $d S_0$ (down), with $d < R < u$ where $R = 1 + r_f$ is the gross risk-free rate. A bond
costs 1 today and pays $R$. A call option pays $C_u = \max(uS_0 - K, 0)$ or
$C_d = \max(dS_0 - K, 0)$ tomorrow.

The condition $d < R < u$ is **no-arbitrage on the stock**: if $R \geq u$, borrowing to buy the
stock dominates (stock cannot beat the bond even in its best state); if $R \leq d$, shorting the
stock and lending dominates. Both are arbitrages, so both are ruled out; and the same inequality
is exactly what makes the denominator in the construction below positive.

### 2. Pricing by Replication

**Theorem 2.1.** The call's no-arbitrage price is the cost of the portfolio (Δ shares, $B$ in
bonds) that replicates its payoffs:

$$
\Delta = \frac{C_u - C_d}{(u - d)S_0}, \qquad
B = \frac{C_d - \Delta\, d S_0}{R},
$$

and the price equals

$$
C_0 = \Delta S_0 + B = \frac{q\,C_u + (1 - q)\,C_d}{R}, \qquad
q = \frac{R - d}{u - d}.
$$

**Proof.** Replication requires the portfolio to match the option state by state:

$$
\Delta\, u S_0 + R B = C_u, \qquad \Delta\, d S_0 + R B = C_d.
$$

Subtracting: $\Delta (u - d) S_0 = C_u - C_d$, giving $\Delta$. Substituting back: $B$ as stated.
The replicating portfolio's cost is its price under the law of one price; any other price for
the call, and buying the cheap one and selling the expensive copy is an arbitrage (zero cost,
zero net payoff tomorrow, cash today).

For the $q$ form: substitute $\Delta$ and $B$ into $\Delta S_0 + B$ and collect terms over
$(u - d) S_0 R$:

$$
C_0 = \frac{C_u (R - d) + C_d (u - R)}{R (u - d)}.
$$

Defining $q = \frac{R - d}{u - d}$ makes $1 - q = \frac{u - R}{u - d}$, and the numerator is
$q C_u + (1 - q) C_d$. Note $0 < q < 1$ precisely because $d < R < u$. $\blacksquare$

### 3. Risk-Neutral Probabilities

The quantity $q$ looks like a probability, and the pricing formula reads "discount the expected
payoff at the risk-free rate." It is a probability **under which the stock is fairly priced**:
check $S_0 = \frac{q\, u S_0 + (1 - q)\, d S_0}{R}$ by substituting $q$; it holds identically.

**Theorem 3.1.** Absence of arbitrage in the binomial market is equivalent to the existence of
$q \in (0, 1)$ with both the stock and the bond fairly priced under $q$; and under such $q$,
*every* claim's price is its discounted $q$-expectation.

**Proof.** ($\Leftarrow$) If both assets are fairly priced under $q$, any portfolio with payoff
$X$ costs $\frac{E_q[X]}{R}$, and zero cost forces $E_q[X] = 0$; a nonnegative-everywhere,
positive-somewhere payoff has $E_q[X] > 0$; no arbitrage.

($\Rightarrow$) No-arbitrage forces $d < R < u$ (§1), which makes
$q = \frac{R - d}{u - d}$ lie in $(0, 1)$. The stock and bond are then fairly priced under $q$
by direct substitution. Every attainable claim is a portfolio of stock and bond; its price is
its portfolio cost; linearity of expectation under $q$ makes that cost
$\frac{E_q[X]}{R}$. $\blacksquare$

The interpretation is the trap to avoid: $q$ is **not** the probability the stock rises. It is
the pseudo-probability under which risk preferences vanish from pricing; the investor
risk-aversion lives in the gap between $q$ and the true probability, and pricing never touches
it. That is why the argument needed no utility, no beliefs, and no risk premium.

### 4. Multi-Period by Backward Induction

**Theorem 4.1.** With $T$ periods, the price is
$C_0 = \frac{E_q[C_T]}{R^T}$, and dynamic replication achieves it.

**Proof sketch (induction).** At time $T - 1$, each node has a two-state continuation: Theorem
2.1 prices the remaining option at that node, and Δ can be re-constructed node by node. So
holding the replicating portfolio at $T-1$ and *re-balancing* it after observing the state
replicates the $T$-period payoff; the self-financing condition holds because the re-balanced
portfolio's cost equals the portfolio's value at that node (no outside cash). Inducting down to
time 0 gives $C_0 = \frac{E_q[C_T]}{R^T}$. $\blacksquare$

The induction hides one genuine idea: **dynamic replication**. Static replication fails after one
period because the state space grows; but option trading is *sequential*, and at each node the
next step is again one-period binomial. This is why American features (early exercise) are
handled by a maximum at each node; $\max(\text{intrinsic}, \text{continuation})$; in the same
backward pass.

### 5. Self-test

1. Where does the no-arbitrage condition $d < R < u$ enter the algebra? (§2; it makes
   $q \in (0, 1)$; outside that range the "probability" is meaningless and an arbitrage exists.)
2. Why is the call's price independent of the true probability of an up move? (§3; pricing uses
   only $q$, which is pinned by $R, u, d$; the true probability affects who trades, not the
   price.)
3. What breaks in a multi-period tree if you never re-balance? (§4; static replication matches
   only one date's payoffs; the option's payoff at $T$ requires re-balancing at every node.)
4. An American put in the same tree: where does early exercise enter the induction? (§4; at
   each node take the max of continuation value and intrinsic value before propagating
   backward.)
