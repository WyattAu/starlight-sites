---
date: 2026-10-24T00:00:00+00:00
title: "General Equilibrium"
tags:
  - Economics
  - University
description: "The Arrow--Debreu model: Walras' law proved, the existence of competitive equilibrium proved via Kakutani's fixed-point theorem - the same machinery as Nash, applied to prices - and what the proof's hypotheses buy and cost."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "1 Microeconomic Theory", "url": "https://economics.wyattau.com/1-microeconomic-theory"}, {"name": "General Equilibrium", "url": "https://economics.wyattau.com/1-microeconomic-theory/4_general-equilibrium"}]
}
</script>

### 1. From Partial to General

The [consumer problem](/1-microeconomic-theory/2_utility-maximisation/) took prices as given;
the [welfare theorems](/3_welfare-theorems/) evaluated the allocation those choices produce.
General equilibrium closes the loop: *all* markets clear *simultaneously*, with prices doing the
coordinating. The question the theory answers: does a set of prices exist that clears every
market at once? The answer is yes; under hypotheses the proof locates precisely; and the
proof is the [game-theory track's](/4-game-theory/1_nash-equilibrium/) fixed-point argument
applied to prices instead of strategies.

### 2. The Exchange Economy

**Definition.** An exchange economy with $m$ consumers, $n$ goods: consumer $i$ has continuous,
locally nonsatiated, convex preferences $\succsim_i$ on $\mathbb{R}^n_+$ and endowment
$\omega_i \gg 0$. Aggregate endowment $\bar{\omega} = \sum_i \omega_i \gg 0$.

**Definition.** A **competitive equilibrium** is $(p^*, (x_i^*))$ with $p^* \geq 0$,
$p^* \neq 0$, such that:

1. Each $x_i^*$ maximises $u_i$ on $\{x : p^* \cdot x \leq p^* \cdot \omega_i\}$ (utility
   maximisation on the budget).
2. Markets clear: $\sum_i x_i^* = \bar{\omega}$.

Each consumer's demand $x_i(p, w_i)$ is [already proved](/1-microeconomic-theory/2_utility-maximisation/)
to exist (Weierstrass on the compact budget) and be nonempty; convexity makes the *argmax* a
convex set.

### 3. Walras' Law

**Theorem 3.1 (Walras' Law).** If every consumer maximises on her budget, then for any prices
$p$: $p \cdot \left(\sum_i x_i(p, p \cdot \omega_i) - \bar{\omega}\right) = 0$; the *value* of
aggregate excess demand is identically zero.

**Proof.** Consumer $i$'s budget constraint binds at her optimum: by local nonsatiation, no
cheaper bundle is preferred, so $p \cdot x_i(p, p\cdot\omega_i) = p \cdot \omega_i$ exactly.
Summing over $i$ and using linearity:

$$
p \cdot \sum_i x_i = \sum_i p \cdot \omega_i = p \cdot \bar{\omega}.
$$

Rearranging: $p \cdot Z(p) = 0$ where $Z(p) = \sum_i x_i - \bar{\omega}$ is aggregate excess
demand. $\blacksquare$

**Consequence:** Walras' law means the markets are *not* independent; if $n - 1$ markets clear,
the $n$-th clears automatically (a deficit in one good is a surplus elsewhere, and their values
sum to zero). This is why equilibrium existence fixes $n - 1$ prices relative to a numéraire,
and why one price can be normalised to 1 throughout.

### 4. Existence of Equilibrium

**Theorem 4.1 (Arrow--Debreu, 1954).** Under the hypotheses above (continuous, locally
nonsatiated, convex preferences; $\bar{\omega} \gg 0$), a competitive equilibrium exists.

**Proof.** Normalise $p$ to live in the unit simplex $\Delta = \{p \geq 0 : \sum p_i = 1\}$ -
compact and convex, the same arena as the [Nash proof](/4-game-theory/1_nash-equilibrium/).
Define the **excess-demand correspondence**:

$$
Z(p) = \sum_i x_i(p, p \cdot \omega_i) - \bar{\omega}.
$$

Four properties, each verified:

1. $Z(p)$ is **nonempty** for every $p \in \Delta$: each consumer's demand exists (Weierstrass,
   the budget is compact when $p \gg 0$; on the boundary, local nonsatiation ensures all wealth
   is spent, keeping demands bounded).
2. $Z(p)$ is **convex**: each $x_i(p, \cdot)$ is convex-valued (convex preferences), and sums of
   convex sets are convex.
3. **Walras' law**: $p \cdot Z(p) = 0$ for all $p$ (Theorem 3.1).
4. $Z$ is **bounded below**: demands are nonnegative and $\bar{\omega}$ bounds the supply side.

The boundary behaviour seals it: as any price $p_i \to 0$ (with $p$ in the simplex), the
consumer's demand for good $i$ grows without bound; local nonsatiation plus near-zero cost -
so the excess demand $Z_i(p) \to +\infty$. This rules out boundary failures and keeps the
fixed-point search inside the simplex's interior.

**Theorem 4.1's proof (Gale--Nikaido--Debreu).** Apply Kakutani to a correspondence built from
$Z$ on the price simplex itself. For $p \in \Delta$ define

$$
\Phi(p) = \left\{ p' \in \Delta \;:\; p' \cdot Z(p) \geq q \cdot Z(p) \;\text{ for every } q \in \Delta \right\},
$$

the price vectors maximising the value of the excess demand $Z(p)$ over the simplex. Four
properties:

1. **Nonempty**: $q \mapsto q \cdot Z(p)$ is linear over the compact simplex; the maximum is
   attained (Weierstrass).
2. **Convex**: the maximisers of a *linear* function over a simplex form a face, which is
   convex.
3. **Compact**: a closed subset of the compact $\Delta$.
4. **Closed graph**: take $p^k \to p$, $q^k \in \Phi(p^k)$, $q^k \to q$. Continuity of $Z$
   gives $q \cdot Z(p) = \lim_k q^k \cdot Z(p^k) \geq q' \cdot Z(p)$ for every $q' \in \Delta$
   (passing the inequality to the limit), so $q \in \Phi(p)$.

Kakutani's fixed-point theorem delivers $p^* \in \Phi(p^*)$: a price vector that maximises the
value of *its own* excess demand over the simplex. Two facts close the argument. By the
fixed-point membership, $p^* \cdot Z(p^*) = \max_{q \in \Delta} q \cdot Z(p^*)$. By Walras' law
(Theorem 3.1 applied at $p^*$), $p^* \cdot Z(p^*) = 0$. Hence

$$
\max_{q \in \Delta}\, q \cdot Z(p^*) = 0 \quad\Longrightarrow\quad Z_i(p^*) \leq 0 \text{ for every } i,
$$

since $q$ may put all weight on any single good. Markets clear or over-supply at $p^*$; and
over-supplied free goods (those with $p^*_i = 0$ and negative excess demand) are permitted by
the equilibrium's definition under local nonsatiation: consumers can take more of them
costlessly. So $(p^*, (x_i(p^*, p^*\cdot\omega_i)))$ is a competitive equilibrium.
$\blacksquare$

The proof's architecture is the [Nash proof's](/4-game-theory/1_nash-equilibrium/) architecture:
compact convex space, nonempty convex values, closed graph, Kakutani. What changed: the
correspondence maps *prices to the prices that reward their own excess demands* instead of
*strategy profiles to best responses*, and Walras' law replaces payoff-linearity in the
verification. One theorem, twice applied; the reason fixed-point theorems are economics'
deepest import from mathematics.

### 5. What the Hypotheses Buy: and What Their Failure Costs

<div class="table-wrap">

| Hypothesis | Where in the proof | What breaks without it |
| --- | --- | --- |
| Continuity of preferences | Closed graph | Fixed point may not exist |
| Convexity of preferences | Convex values | Kakutani inapplicable; equilibria can fail to exist (Scarf's example) |
| Local nonsatiation | Budget binds; boundary behaviour | Walras' law weakens; existence can hold but welfare theorems fail |
| $\bar{\omega} \gg 0$ | Demands bounded; interior | Boundary pathologies; prices may hit zero |

</div>

The hypotheses' economic readings: convexity is diversification (consumers who like mixtures);
local nonsatiation is "more is always at least weakly better nearby"; $\bar{\omega} \gg 0$ is
"every good exists in everyone's endowment somewhere". Each is a modelling choice with a
falsifiable footprint; and the theorems say exactly which results each choice purchases.

### 6. Self-test

1. Why does Walras' law let the model fix one price to 1? (§3; only $n-1$ excess demands are
   independent; the $n$-th clears by aggregation, so one price is scale, not substance.)
2. Which hypothesis of Theorem 4.1 is the same as which hypothesis of Nash's theorem? (§4 vs
   the [game-theory proof](/4-game-theory/1_nash-equilibrium/); compact convex domain and
   convex values in both; the closed graph plays the same continuity role.)
3. Why do boundary failures threaten existence, and which hypothesis rules them out? (§4 -
   local nonsatiation keeps demands from collapsing to zero wealth-spending at zero prices.)
4. Scarf's example shows non-convex preferences with no equilibrium. Which step of the proof
   fails? (§4; the correspondence's values are non-convex; Kakutani's hypothesis 2 breaks.)

### Where to go next

- [The Welfare Theorems](/3-welfare-theorems/); the equilibrium this page proves to exist is
  the one the theorems evaluate: efficient, and supportable by redistribution.
- [Nash Equilibrium](/4-game-theory/1_nash-equilibrium/); the same fixed-point machinery,
  applied to strategies.
- [The OLS estimator](/3-econometrics/1_ols-estimator/); the empirical question: do real
  prices behave as if the equilibrium exists?
