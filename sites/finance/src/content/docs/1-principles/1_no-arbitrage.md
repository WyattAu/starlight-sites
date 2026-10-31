---
date: 2026-10-23T00:00:00+00:00
title: "No-Arbitrage and the Law of One Price"
tags:
  - Finance
  - University
description: "The no-arbitrage principle stated precisely, the law of one price proved from it, and the bound arguments that price instruments with no perfect replica - the arguments everything else in finance cites."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "1 Principles", "url": "https://finance.wyattau.com/1-principles"}, {"name": "No-Arbitrage and the Law of One Price", "url": "https://finance.wyattau.com/1-principles/1_no-arbitrage"}]
}
</script>

### 1. States, Payoffs, Portfolios

**Definition.** Fix a set of states of the world. A **claim** is anything with a payoff in each
state: $X_\omega$ in state $\omega$. A **portfolio** is a bundle of claims; its payoff is the sum
of the parts, state by state.

**Definition.** An **arbitrage** is a portfolio with zero cost today, nonnegative payoff in
every state, and positive payoff in at least one state.

The principle: **in a functioning market, arbitrage does not exist**; or more precisely,
prices adjust until it does not. This is not an assumption about anyone's preferences. It needs
only that market participants prefer more money to less and act on it at the margin.

### 2. The Law of One Price

**Theorem 2.1 (Law of One Price).** Two claims with identical payoffs in every state must have
identical prices.

**Proof.** Suppose claims $A$ and $B$ pay the same in every state but $A$ costs more than $B$.
Sell $A$, buy $B$, pocket the difference: zero net cost today, zero net payoff in every state
(the payoffs cancel exactly), positive cash now. That portfolio is an arbitrage; contradiction.
So $P(A) = P(B)$. $\blacksquare$

Everything in this sentence; "identical payoffs, identical prices"; is the engine of the
derivatives track: an option is priced by building the portfolio that copies it and pricing the
copy. The proof shows why no preference assumption is needed: the argument never asks whether
investors like risk, only whether they take free money.

### 3. Present Value as a No-Arbitrage Consequence

**Theorem 3.1.** If the one-period risk-free rate is $r$, then a claim paying $C$ for certain
next period costs $\frac{C}{1+r}$ today.

**Proof.** Suppose the claim costs more than $\frac{C}{1+r}$: sell the claim for $P >
\frac{C}{1+r}$, invest $\frac{C}{1+r}$ at the risk-free rate, and owe $C$ next period; which
the investment repays exactly. Zero cost now, zero payoff later, positive cash now: arbitrage.
If the claim costs less than $\frac{C}{1+r}$, reverse the trades. So
$P = \frac{C}{1+r}$. $\blacksquare$

Multi-period discounting follows by applying the argument period by period: the two-period price
is the one-period price of a one-period claim on next period's price. The discount factor
compounds because the arbitrage can be rolled.

### 4. Bounds When Replication Fails

When no perfect replica exists, the law of one price is silent; but no-arbitrage still
delivers **bounds**. Suppose a claim pays at least $\underline{X}$ in every state and at most
$\overline{X}$: then its price must lie in $[\frac{\underline{X}}{1+r}, \frac{\overline{X}}{1+r}]$.

**Proof.** If the price were below $\frac{\underline{X}}{1+r}$: buy the claim, short
$\frac{\underline{X}}{1+r}$ of the risk-free bond. Cost zero; next period the bond owes its
face, the claim pays at least $\underline{X}$, covering it; nonnegative everywhere, positive
wherever the claim beats its floor. Arbitrage. The upper bound is symmetric. $\blacksquare$

This is the template for option bounds: an option's payoffs are bounded by portfolio payoffs
constructed from the underlying and bonds, and the no-arbitrage prices of those portfolios bound
the option's price; before any model of the underlying's dynamics is written down.

### 5. What No-Arbitrage Does Not Say

- It does not say prices are *fair*, *correct*, or *equilibrium*; only that they are mutually
  consistent. Two expensive mistakes both survive no-arbitrage if they are expensive together.
- It requires the trades to be executable: shorting allowed, borrowing and lending at $r$, no
  transaction costs. Where shorting is constrained, the bounds loosen and the looseness is the
  empirical content.
- It is silent on *level*: no-arbitrage prices one claim relative to others. The risk-free rate
  itself, the level of the market; those come from preferences and endowments, the equilibrium
  layer the portfolio-theory track begins.

### Self-test

1. Why does the arbitrage in Theorem 2.1 need identical payoffs *in every state*, including
   states the trader thinks impossible? (Because an arbitrage is defined statewise; "impossible"
   states occur; the definition is what makes the theorem binding.)
2. Where does Theorem 3.1's proof use that the rate is risk-free? (The borrowed amount is known
   to be repaid regardless of state, so the rolled trade has zero riskless cost and no statewise
   shortfall.)
3. An option pays at least zero in every state; what no-arbitrage bound follows immediately?
   (Nonnegative price: an option cannot be a source of free negative cash. The lower bound of
   §4 with $\underline{X} = 0$.)
