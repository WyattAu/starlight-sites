---
date: 2026-10-24T00:00:00+00:00
title: "The Welfare Theorems"
tags:
  - Economics
  - University
description: "The first and second welfare theorems proved: competitive equilibria are Pareto efficient, and every Pareto-efficient allocation is a competitive equilibrium at some price system - with each hypothesis located in its proof."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "1 Microeconomic Theory", "url": "https://economics.wyattau.com/1-microeconomic-theory"}, {"name": "The Welfare Theorems", "url": "https://economics.wyattau.com/1-microeconomic-theory/3_welfare-theorems"}]
}
</script>

### 1. Setup

**Definition.** An exchange economy has $m$ consumers with preferences $\succsim_i$ (continuous,
locally nonsatiated; convex where stated) and endowments $\omega_i \in \mathbb{R}^n_+$;
aggregate endowment $\bar{\omega} = \sum_i \omega_i$. An **allocation** is
$(x_1, \dots, x_m)$ with $\sum_i x_i = \bar{\omega}$ (feasibility).

**Definition.** An allocation $(x_i^*)$ is **Pareto efficient** if there is no feasible
allocation $(x_i')$ with $x_i' \succsim_i x_i^*$ for every $i$ and $x_i' \succ_i x_i^*$ for
some $i$.

**Definition.** A **competitive equilibrium** is a price vector $p \in \mathbb{R}^n_+$ and an
allocation $(x_i^*)$ such that each $x_i^*$ maximises $u_i$ on the budget set
$\{x : p \cdot x \leq p \cdot \omega_i\}$ and markets clear.

### 2. The First Welfare Theorem

**Theorem 2.1.** Every competitive equilibrium is Pareto efficient.

**Proof.** Suppose not: there is a feasible $(x_i')$ with $x_i' \succsim_i x_i^*$ for all $i$
and $x_j' \succ_j x_j^*$ for some $j$. Establish two facts:

**(a) Every strictly-preferred bundle is unaffordable.** If $x_j' \succ_j x_j^*$ and
$p \cdot x_j' \leq p \cdot \omega_j$, then $x_j'$ is in $j$'s budget set and preferred to the
chosen bundle — contradicting $x_j^*$ being utility-maximising on that budget. So
$p \cdot x_j' > p \cdot \omega_j$ for the strict gainer $j$.

**(b) Weakly-preferred bundles cost at least the endowment's value.** For every other $i$:
if $x_i' \succsim_i x_i^*$ and $p \cdot x_i' < p \cdot \omega_i$, then by **local
nonsatiation** there is $\tilde{x}_i$ arbitrarily close to $x_i'$ with
$\tilde{x}_i \succ_i x_i'$ (hence $\succ_i x_i^*$) and still $p \cdot \tilde{x}_i <
p \cdot \omega_i$ — again contradicting optimality of $x_i^*$. So
$p \cdot x_i' \geq p \cdot \omega_i$.

Now sum the inequality over all consumers: $\sum_i p \cdot x_i' > \sum_i p \cdot \omega_i$
(strict because consumer $j$ is strict). Linearity: $p \cdot \sum_i x_i' > p \cdot \bar{\omega}$.
But feasibility says $\sum_i x_i' = \bar{\omega}$, giving $p \cdot \bar{\omega} >
p \cdot \bar{\omega}$ — contradiction. $\blacksquare$

**Where each hypothesis entered:** local nonsatiation is exactly what made fact (b)'s
"strictly better costs strictly more" step work — without it, a consumer could be satiated and
a cheap bundle just as good, breaking the strict inequality in the summation. The first
theorem needs *no convexity and no completeness beyond the axioms* — that is why market
failures (externalities, public goods, market power) are failures of the *setup* (the budget
constraint misprices the good, or prices are not taken as given), not of the proof.

### 3. The Second Welfare Theorem

**Theorem 3.1.** If preferences are continuous and **convex**, then every Pareto-efficient
allocation $(x_i^*)$ can be supported as a competitive equilibrium after redistribution of
endowments: there exist prices $p^*$ and transfer levels $T_i$ such that each $x_i^*$
maximises $u_i$ on $\{x : p^* \cdot x \leq p^* \cdot \omega_i + T_i\}$.

**Proof idea with the key construction.** Separate the consumers: the set
$A = \{\sum_i y_i : y_i \succ_i x_i^*, \sum_i y_i \leq \bar{\omega}\}$ of allocations that make
someone strictly better off (with others at least as well off) is, by convexity of preferences,
a **convex** set; the feasible set $\{\bar{\omega}\}$ is a single point (convex); and — by
Pareto efficiency — they do not intersect. By the **separating hyperplane theorem** for convex
sets, there is a nonzero price vector $p^*$ and scalar $c$ with

$$
p^* \cdot y \geq c > p^* \cdot \bar{\omega} \quad \text{for all } y \in A,
$$

using the version of the theorem for one compact and one closed convex set. Setting the
transfer levels so that each consumer's augmented endowment value lands exactly on the boundary
$c$ (that is, $p^* \cdot \omega_i + T_i = $ consumer $i$'s share of the separating hyperplane's
value at $x_i^*$) makes every strictly-preferred bundle unaffordable, so each $x_i^*$ is
optimal on its budget — the transfers support $(x_i^*)$ as an equilibrium. The full argument
also verifies each consumer can *afford* $x_i^*$ itself, using local nonsatiation to keep the
boundary tight. $\blacksquare$

The construction's honesty: the separation argument needs an interior point or a strictness
condition to keep prices nonzero, which is where continuity, convexity, and (in some
formulations) a local-nonsatiation-or-interiority hypothesis enter. Convexity is the
load-bearing addition over the first theorem — without it, $A$ need not be convex, the
hyperplane need not exist, and efficient allocations can be unreachable by any price system.

### 4. Reading the Pair

- **First theorem**: markets are efficient *among the allocations they can reach* — the price
  system coordinates everyone's budget-constrained choices into a Pareto-efficient point.
- **Second theorem**: efficiency and distribution are separable *in principle* — society can
  pick its preferred efficient allocation and let prices support it, with lump-sum transfers
  setting the distribution. The "in principle" is the content: the transfers must be lump-sum
  (non-distorting), which real policy instruments (income taxes, tariffs) are not, and the
  convexity hypothesis fails exactly where increasing returns and non-convex externalities
  live.
- **Market failure, precisely stated**: an externality is a good with a missing market — the
  first theorem's proof never applies to it, because the budget constraint does not price the
  externality's side effects. Pollution is not a counterexample to the theorem; it is outside
  the theorem's setup.

### 5. Self-test

1. Which hypothesis makes fact (b) strict, and what replaces it if the consumer is satiated at
   $x_i^*$? (§2 — local nonsatiation; with a satiation point inside the budget, cheap
   equally-good bundles exist and the proof's strict inequality fails.)
2. Why is the second theorem's convexity hypothesis not needed for the first? (§2 vs §3 — the
   first theorem separates one point from a half-space via prices already equilibrium-
   determined; the second must *construct* a separating hyperplane between two convex sets.)
3. What makes the transfers "lump-sum", and why does real policy violate it? (§3 — the
   transfers are based on endowment values known to the planner, not on behaviour; income
   taxes change behaviour, so they distort the very choices the theorem says are supportable.)
4. Where does an externality break the first theorem's proof? (§4 — the externality's effect
   on others' utility is not in anyone's budget constraint, so fact (a)/(b)'s affordability
   accounting omits it.)

### Where to go next

- [The OLS estimator](/3-econometrics/1_ols-estimator/) — the empirical machinery for testing
  which theorem's hypotheses a real market violates.
- Production and general equilibrium (next in track) — the firm's profit maximisation joins the
  consumer's, and the fixed-point machinery from the game-theory track returns for existence.
