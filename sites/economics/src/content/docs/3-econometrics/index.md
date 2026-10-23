---
date: 2026-10-23T00:00:00+00:00
title: "Econometrics"
description: "Econometrics from the linear model up: the OLS estimator, unbiasedness and the Gauss--Markov theorem proved in full, consistency and asymptotics, hypothesis testing, and the problems that break each guarantee."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "3 Econometrics", "url": "https://economics.wyattau.com/3-econometrics"}, {"name": "Index", "url": "https://economics.wyattau.com/3-econometrics/index"}]
}
</script>

Econometrics is where economic theory meets data, and it is a theorem-first subject: every
guarantee you use — unbiasedness, smallest variance, consistency, valid standard errors — is a
theorem with hypotheses, and every failure of an applied study is the failure of one of those
hypotheses. This track proves the central results rather than citing them, because which
hypothesis is doing the work is only visible inside the proof.

## The dependency chain

1. [The OLS Estimator](/3-econometrics/1_ols-estimator/) — the linear model, the orthogonality
   condition, algebraic properties, and unbiasedness under strict exogeneity. Everything else
   builds on the decomposition proved here.
2. [Gauss--Markov](/3-econometrics/2_gauss-markov/) — the theorem that OLS is the **best linear
   unbiased estimator**, proved by completing the square. The proof shows exactly which
   hypotheses buy which part of the conclusion.
3. Consistency and asymptotics — what happens when the exogeneity or homoskedasticity assumptions
   weaken (coming next in this track).
4. Inference — standard errors, $t$ and $F$ tests, and why heteroskedasticity demands robust
   variance (coming).

## Prerequisites

Matrix algebra through positive-definite quadratic forms, and probability through conditional
expectation and the variance decomposition. The [mathematics site](https://mathematics.wyattau.com)
covers both in its linear algebra and probability tracks.
