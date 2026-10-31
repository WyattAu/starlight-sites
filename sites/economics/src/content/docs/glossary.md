---
date: 2026-10-23T00:00:00+00:00
title: "Glossary"
description: "Definitions of the technical terms used across the economics site, written before they are used anywhere."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "Glossary", "url": "https://economics.wyattau.com/glossary"}]
}
</script>

Terms are defined here once and used consistently. Each entry says what the thing is and what it
is for.

## Micro theory

- **Best response**; a strategy maximising a player's payoff given the others' strategies. The
  fixed points of the joint best-response correspondence are Nash equilibria.
- **Budget set**; the bundles a consumer can afford: $\{x : p \cdot x \leq w\}$. Compact when
  $p \gg 0$, which is what makes demand existence go through.
- **Expenditure function**; the minimum cost of reaching utility level $u$ at prices $p$. Its
  convexity in prices is what makes compensated demands well behaved (Shephard's lemma).
- **Hicksian (compensated) demand**; the expenditure-minimising bundle $h(p, u)$. Answers: what
  does consumption look like when income is adjusted to hold utility constant?
- **Indirect utility**; the achieved utility $v(p, w)$ of the consumer problem. Its derivatives
  are the envelope results (Roy's identity, Shephard's lemma).
- **Marshallian (uncompensated) demand**; the utility-maximising bundle $x(p, w)$. Holds income
  fixed, so price changes carry both substitution and income effects.
- **Slutsky decomposition**; the identity splitting a price effect into substitution
  (compensated) and income terms. Its substitution matrix is symmetric and negative
  semidefinite: the testable footprint of maximisation.
- **Utility representation**; a function $u$ with $x \succsim y \iff u(x) \geq u(y)$. Ordinal:
  unique only up to strictly increasing transformation.

## Econometrics

- **OLS estimator**; $\hat{\beta} = (X'X)^{-1}X'y$: the projection of $y$ on the regressor
  space, equivalently the minimiser of residual sum of squares.
- **Strict exogeneity**; $E[u \mid X] = 0$: the error is mean-independent of all regressors at
  all observations. Buys unbiasedness; its failure is endogeneity.
- **Spherical errors**; $\operatorname{Var}(u \mid X) = \sigma^2 I_n$: homoskedastic and
  uncorrelated. Buys the variance formula and Gauss--Markov efficiency.
- **BLUE**; best linear unbiased estimator: smallest variance in the matrix sense among linear
  unbiased estimators. Gauss--Markov's conclusion for OLS under spherical errors.

## Game theory

- **Nash equilibrium**; a strategy profile where every player's strategy is a best response to
  the others'. No unilateral deviation pays.
- **Mixed extension**; the game where each player randomises over strategies, payoffs being
  expected payoffs. Its strategy spaces are simplices: compact and convex, which is what the
  existence proof consumes.
- **Strict dominance**; a strategy worse than another for *every* opponents' profile. Strictly
  dominated strategies are played with probability zero in every equilibrium, and the property
  survives iterated elimination.

## Shared

- **Tâtonnement**; the price-adjustment story behind equilibrium existence arguments: prices
  move in the direction of excess demand. A fiction, but the one the theorems are written in.

Missing a term you met on a page? The page that uses it is the page responsible for defining it;
the glossary collects the cross-track vocabulary.

## Conventions

Notation is consistent across tracks: $\succsim$ for preferences, $v(p, w)$ for indirect
utility, $\sigma$ for mixed strategies, $\hat{\beta}$ for estimators. Proofs terminate with a
black square; honestly-labelled sketches say so in their header and cite the complete argument.
Vectors are column vectors by default; primes denote transposes. When a track needs a divergent
convention, it says so at first use; the divergences are rare, and knowing where they are is
part of knowing the subject.

## Welfare and equilibrium

- **Competitive equilibrium**; prices and allocations where every consumer maximises utility,
  every firm maximises profit, and all markets clear. The first welfare theorem says such
  equilibria are Pareto efficient under local nonsatiation.
- **Pareto efficiency**; an allocation where nobody can be made better off without making
  someone worse off. Weak as a welfare criterion (says nothing about distribution) and strong as
  a consistency requirement.
- **General equilibrium**; all markets at once, with prices coordinating. The existence proof is
  the game-theory fixed-point argument applied to excess demand.

## Econometrics terms met on the micro pages

- **Comparative static**; how an endogenous object (demand, equilibrium price) responds to a
  parameter (price, wealth). The Slutsky decomposition is the comparative static of demand with
  respect to prices, split by mechanism.
- **Envelope theorem**; the derivative of an optimised value with respect to a parameter equals
  the partial derivative of the objective, because choice adjustments are first-order neutral.
  Used on this site for Shephard's lemma.

## Conventions

Notation is consistent across tracks: $\succsim$ for preferences, $v(p, w)$ for indirect
utility, $\sigma$ for mixed strategies, $\hat{\beta}$ for estimators. Proofs terminate with a
black square; honestly-labelled sketches say so in their header and cite the complete argument.
Vectors are column vectors by default; primes denote transposes.

## How entries are written

Each entry says what the thing is and what it is for; a definition and a purpose, in two lines.
Entries never cite a page as their definition; the pages' definitions are the primary source and
the glossary is the index. If a glossary entry and a page disagree, the page is wrong and gets
fixed.
