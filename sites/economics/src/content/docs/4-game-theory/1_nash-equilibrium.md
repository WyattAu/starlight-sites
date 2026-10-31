---
date: 2026-10-23T00:00:00+00:00
title: "Game Theory and Nash Equilibrium"
tags:
  - Economics
  - University
description: "Game theory with proofs: dominant and iterated dominance, best responses, Nash equilibrium in pure and mixed strategies, mixed extension, and the existence theorem for finite games proved via Brouwer."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "4 Game Theory", "url": "https://economics.wyattau.com/4-game-theory"}, {"name": "Nash Equilibrium", "url": "https://economics.wyattau.com/4-game-theory/1_nash-equilibrium"}]
}
</script>

### 1. Games and Strategies

**Definition.** A finite $n$-player game is $G = (S_1, \dots, S_n; u_1, \dots, u_n)$: each player
$i$ has a finite strategy set $S_i$ and payoff $u_i: S_1 \times \cdots \times S_n \to \mathbb{R}$.
Write $s = (s_i, s_{-i})$ for a profile highlighting player $i$'s choice.

### 2. Dominance and Iterated Elimination

**Definition.** $s_i'$ **strictly dominates** $s_i$ if $u_i(s_i', s_{-i}) > u_i(s_i, s_{-i})$ for
every $s_{-i}$.

**Proposition 2.1.** A strictly dominated strategy is played with probability zero in every Nash
equilibrium.

**Proof.** Let $s_i^*$ be strictly dominated by $s_i'$ and suppose $\sigma$ is a Nash equilibrium
in which $\sigma_i(s_i^*) > 0$. Consider the mixed strategy $\tilde{\sigma}_i$ that shifts all of
$\sigma_i$'s mass on $s_i^*$ to $s_i'$, holding the rest fixed. Player $i$'s payoff changes by
exactly $\sigma_i(s_i^*)\bigl[u_i(s_i', s_{-i}^{\sigma}) - u_i(s_i^*, s_{-i}^{\sigma})\bigr] > 0$
for *every* realisation $s_{-i}^{\sigma}$ of the opponents' play (strict dominance holds
statewise), hence in expectation; contradicting the equilibrium no-profitable-deviation
condition. $\blacksquare$

Iterating the elimination is valid because strict dominance survives elimination of strategies:
if $s_i'$ dominates $s_i$ among *all* opponents' profiles, it dominates among any subset.
(With *weak* dominance both claims fail; order-dependence is a real phenomenon, not a technicality.)

### 3. Best Responses and Nash Equilibrium

**Definition.** Player $i$'s **best-response correspondence** $BR_i(s_{-i}) = \arg\max_{s_i}
u_i(s_i, s_{-i})$. A profile $s^*$ is a **Nash equilibrium** if
$s_i^* \in BR_i(s_{-i}^*)$ for every $i$; nobody can improve by unilateral deviation.

**Proposition 3.1.** In the Cournot duopoly with linear demand $P(Q) = a - bQ$ and constant
marginal cost $c < a$, the unique Nash equilibrium is
$q_1^* = q_2^* = (a - c)/3b$.

**Proof.** Firm $i$ maximises $(a - b(q_i + q_j) - c)q_i$; the first-order condition gives
$q_i = (a - c - bq_j)/2b$; the best-response function. Solving the two equations simultaneously:
substituting gives $q_i = (a - c - b(a-c-bq_j)/2b)/2b$, which with symmetry $q_i = q_j = q$ gives
$q = (a-c)/3b$. The second-order condition holds (concave quadratic), and the simultaneous
solution of best responses *is* the definition of Nash equilibrium. $\blacksquare$

### 4. Mixed Strategies and the Existence Theorem

Pure equilibria can fail to exist (matching pennies). The fix: randomise.

**Definition.** The **mixed extension** allows $\sigma_i \in \Delta(S_i)$ (probability
distributions), with payoffs $u_i(\sigma) = \sum_s \bigl(\prod_j \sigma_j(s_j)\bigr) u_i(s)$. Write
$\sigma = (\sigma_i, \sigma_{-i})$.

A finite $\Delta(S_i)$ is a simplex: compact and convex. This compactness is what makes the
existence theorem work.

**Theorem 4.1 (Nash, 1950).** Every finite game has a Nash equilibrium in mixed strategies.

**Proof.** Define the best-response correspondence
$B: \prod_i \Delta(S_i) \to \prod_i \Delta(S_i)$ by $B(\sigma) = \prod_i BR_i(\sigma_{-i})$.
A Nash equilibrium is exactly a fixed point of $B$. We verify the hypotheses of Kakutani's
fixed-point theorem:

1. $\prod_i \Delta(S_i)$ is nonempty, compact, and convex; a finite product of simplices.
2. $BR_i(\sigma_{-i})$ is nonempty for every $\sigma_{-i}$: it is the argmax of a continuous
   function ($u_i$ is a polynomial; multilinear; in the mixed strategies) over the compact set
   $\Delta(S_i)$; Weierstrass delivers the maximum.
3. $BR_i(\sigma_{-i})$ is convex: $u_i(\cdot, \sigma_{-i})$ is *linear* in $\sigma_i$, so mixing
   two best responses with any weights is again a best response (the expected payoff of a mixture
   of maximisers is the mixture of the maxima).
4. $BR_i$ has a closed graph: take $\sigma_{-i}^k \to \sigma_{-i}$ and $s_i^k \in
   BR_i(\sigma_{-i}^k)$ with $s_i^k \to s_i$; for any $s_i'$, $u_i(s_i^k, \sigma_{-i}^k) \geq
   u_i(s_i', \sigma_{-i}^k)$ for every $k$, and continuity lets $k \to \infty$ pass the inequality
   to the limit; so $s_i \in BR_i(\sigma_{-i})$.

Kakutani's theorem then supplies $\sigma^* \in B(\sigma^*)$; a profile where each player's
strategy is a best response to the others', which is the definition of Nash equilibrium.
$\blacksquare$

The proof is worth memorising *structurally*, because almost every existence theorem in economics
is this proof with different objects: a compact convex strategy space, a correspondence with
nonempty convex values and closed graph, a fixed-point theorem. What changes across applications
is which fixed-point theorem the hypotheses support; Kakutani for games and general equilibrium,
Brouwer when the correspondence is a function, Tarski when it is monotone (supermodular games).

### 5. Finding Equilibria in Practice

For $2 \times 2$ games, indifference is the solvent: in equilibrium, a player who mixes must be
*indifferent* between the pure strategies she mixes over; otherwise she would not mix. Setting
the opponent's mix to equalise your payoffs across your supports gives linear equations whose
solution *is* the equilibrium (support enumeration).

**Worked example (matching pennies).** Payoffs: matching pays $+1/-1$. Let the column player mix
Heads with probability $q$. Row's payoff to Heads: $2q - 1$; to Tails: $1 - 2q$. Indifference:
$2q - 1 = 1 - 2q$, so $q = 1/2$. Symmetrically the row player mixes $1/2$. Equilibrium:
$(1/2, 1/2)$ each; the unique equilibrium, and necessarily mixed.

### 6. Self-test

1. Why does strict (not weak) dominance survive iterated elimination? (§2; statewise strictness
   survives restriction of the opponents' profiles; weak dominance can create *new* dominated
   strategies depending on elimination order.)
2. Where is linearity of expected payoff used in the existence proof? (§4, steps 3 and 4 -
   convex values and closed graph both lean on it.)
3. Why is the mixed equilibrium of matching pennies unique? (§5; both players' indifference
   conditions pin a unique mixture.)
4. What breaks in step 4 (closed graph) if payoffs are discontinuous? (The limit inequality need
   not pass; which is exactly why games with auctions/discontinuous payoffs need the
   Reny-style refinements.)
