---
date: 2026-10-23T00:00:00+00:00
title: "Portfolio Theory"
description: "Mean-variance optimisation solved by Lagrangian, two-fund separation proved, and the CAPM derived from market clearing."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "Portfolio Theory", "url": "https://finance.wyattau.com/2-portfolio-theory"}]}
</script>

Portfolio theory turns "diversify" from advice into arithmetic: with correlated returns, portfolio
variance is a quadratic form, and its minimisation has a closed form. The track proves the
two-fund separation theorem and derives the CAPM from it.

- **Mean--variance optimisation**; the frontier derived by Lagrangian; why the minimum-variance
  combination of two risky assets has the closed form it has.
- **Two-fund separation and the CAPM**; with a risk-free asset, every investor holds a mix of
  the risk-free asset and one tangency portfolio; market clearing makes the tangency portfolio
  the market portfolio; the CAPM falls out.

Opening pages landing next in this track.

## Prerequisites

Expectation, variance, covariance, and the Lagrangian method. The mathematics site's probability
and multivariable-calculus tracks cover both.

## What the track is for

The mean--variance machinery is usually taught as calculation. Here it is taught as an optimisation
problem whose Lagrangian has a closed form; and whose solution's structure (two funds, market
clearing, beta) is read off the algebra rather than asserted. The CAPM's testability, and its
well-known empirical failures, are econometrics questions; the derivation here is what the tests
are testing.

## Notation used in the track

Returns are random variables with means $\mu_i$ and covariance matrix $\Sigma$; a portfolio is a
weight vector $w$ with $\mathbf{1}'w = 1$. Portfolio mean is $w'\mu$, variance $w'\Sigma w$.
The Lagrangian method does all the work, and the matrix algebra is kept at the level where every
step can be checked by writing the sums out for two assets.

## Reading the results

Two-fund separation is the theorem to internalise: once it holds, every investor's problem
reduces to choosing a point on one line, and the market portfolio's role in the CAPM stops being
mysterious. The derivation is a page; the vocabulary it explains is the rest of the subject.
