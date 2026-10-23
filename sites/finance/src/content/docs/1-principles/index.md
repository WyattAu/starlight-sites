---
date: 2026-10-23T00:00:00+00:00
title: "Principles of Finance"
description: "Present value, the law of one price, and no-arbitrage bounds - the arguments everything else in finance cites, proved."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "Principles of Finance", "url": "https://finance.wyattau.com/1-principles"}]}
</script>

Everything static in finance descends from one principle: portfolios with identical payoffs must
have identical prices. This track states the principle precisely, proves its immediate
corollaries, and builds the present-value machinery on it.

- **No-arbitrage and the law of one price** — definitions, the proof that arbitrage-free prices
  satisfy the law of one price, and the bound arguments for instruments without perfect
  replicas.
- **Present value and the term structure** — discounting derived from the one-period price of
  riskless claims; forward rates from the law of one price applied across horizons.

Opening pages landing next in this track.

## Prerequisites

Arithmetic with fractions and exponents. The discounting algebra is derived from the pricing of
riskless one-period claims, so nothing is assumed about interest rates beyond their definition.

## What the track is for

Most finance mistakes trace to present-value arithmetic done by formula without the law of one
price underneath. This track does it the other way: the principle first, the formulas as
corollaries. When a real instrument has no perfect replica, the corollaries become bounds — and
knowing which side of the bound a price violates is the practical skill the track leaves you
with.

## Notation used in the track

Cash flows are dated subscripts: $C_t$ arrives at time $t$, and $r_t$ is the one-period rate for
horizon $t$. Prices of riskless claims pin the discount function; under certainty every
multi-period price follows from the one-period prices by the law of one price applied along the
timeline. The track keeps the certainty case and the risky case in separate sections, because
mixing them is where the subject's standard confusion (risk premia versus pure discounting)
comes from.

## What lands next

The track's opening pages land in order: no-arbitrage and the law of one price first, then the
present-value apparatus, then the bound arguments. Each page closes with a self-test, and the
harder items ask which portfolio replicates which claim — the reflex the whole subject runs on.
