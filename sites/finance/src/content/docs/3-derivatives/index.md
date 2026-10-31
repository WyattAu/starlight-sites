---
date: 2026-10-23T00:00:00+00:00
title: "Derivatives"
description: "The binomial model with the replication argument proved, risk-neutral probabilities constructed, and put-call parity from no-arbitrage."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "Derivatives", "url": "https://finance.wyattau.com/3-derivatives"}]}
</script>

Derivatives are where no-arbitrage earns its keep: the replication argument prices an option
without knowing anyone's risk preferences, and the binomial model is the cleanest laboratory for
it.

- **The binomial model**; one period, two states: the replicating portfolio solved, the
  risk-neutral probability constructed, and multi-period extension by backward induction.
- **Put-call parity and bounds**; from no-arbitrage directly, with the bound arguments for
  American features.

Opening pages landing next in this track.

## Prerequisites

The [principles track](/1-principles/); specifically replication and the law of one price; and
conditional expectation from probability. The continuous-time limit is stated honestly as a
limit; no stochastic calculus is assumed at this level.

## What the track is for

Replication is the whole subject: an option is worth what the portfolio that copies it costs.
The binomial model makes that statement checkable by hand; every quantity is visible; and the
continuous-time models are the same statement in the limit. The track keeps the replication
logic visible at every step, because that is what transfers when the products get exotic.

## Notation used in the track

The binomial tree is written with up and down factors $u, d$ and the risk-free gross rate $R =
1 + r$. The replicating portfolio is $(\Delta, B)$: $\Delta$ shares and $B$ in the risk-free
asset. The risk-neutral probability is constructed, not assumed; the track's central point is
that $q$ is whatever makes the replicated price match, and that its existence is equivalent to
the absence of arbitrage.

## What the limit buys

The continuous-time models compress the tree's logic into a differential statement. The track
stops at the threshold and says what is lost: the binomial argument is complete and checkable,
and the Black--Scholes formula is its limit once stochastic calculus is on the table.
