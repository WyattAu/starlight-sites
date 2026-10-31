---
date: 2026-10-23T00:00:00+00:00
title: "Glossary"
description: "Definitions of the technical terms used across the finance site."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "Glossary", "url": "https://finance.wyattau.com/glossary"}]
}
</script>

- **Arbitrage**; a trade with nonnegative payoff in every state, positive payoff in some, and
  zero initial cost. Its impossibility in equilibrium is the subject's organising principle.
- **Complete market**; one where every state-contingent payoff can be replicated. Completeness
  is what makes risk-neutral pricing fully general; incompleteness is why some risks have no
  unique price.
- **Diversification**; combining assets whose payoffs are less than perfectly correlated, so
  portfolio variance falls below the average of the parts. The arithmetic behind the phrase
  "don't put all your eggs in one basket", and the reason idiosyncratic risk goes unpaid.
- **Hedge portfolio**; the portfolio constructed to replicate an instrument's payoffs state by
  state; its cost pins the instrument's price under no-arbitrage.
- **Law of one price**; two portfolios with identical payoffs in every state must have
  identical prices. Everything static in this site descends from it.
- **Market portfolio**; the value-weighted portfolio of all risky assets; the tangency portfolio
  when markets clear (two-fund separation).
- **Present value**; the price today of a deterministic future cash flow, discounted at the
  risk-free rate: $PV = C/(1+r)^t$. Under no-arbitrage this is a definition of consistency, not
  an opinion about value.
- **Replication**; constructing a portfolio whose payoffs match a target instrument state by
  state. Its cost is the instrument's price under the law of one price.
- **Risk-neutral probability**; the pseudo-probabilities under which every traded asset earns
  the risk-free rate. Not anyone's beliefs; a pricing device whose existence is equivalent to
  no-arbitrage.
- **Sharpe ratio**; excess return per unit of standard deviation; the slope of a line from the
  risk-free point through a portfolio in mean--standard-deviation space. The tangency portfolio
  maximises it.
- **Tangency portfolio**; the mean--variance-efficient portfolio maximising the Sharpe ratio;
  with a risk-free asset it is the unique efficient risky portfolio, and the CAPM's market
  portfolio when markets clear.

Missing a term? The page using it defines it; the glossary collects the shared vocabulary.

## Conventions

Time is discrete in this site's core arguments, with the continuous-time limit treated as a
limit. Rates are annualised unless stated; "return" means net return unless prefixed by gross.
Payoffs are written state by state, and a "price" always means the cost now of a payoff stream -
the subject has one verb, discount, and the glossary exists so its objects are named precisely.

## Portfolio and pricing terms

- **Covariance**; the co-movement measure driving portfolio variance:
  $\operatorname{Var}(w'R) = w'\Sigma w$ where $\Sigma$ is the covariance matrix. Negative
  covariance is what makes diversification beat the average of the parts.
- **Efficient frontier**; the set of portfolios with minimum variance for each level of expected
  return. With a risk-free asset, the frontier collapses to a line through the tangency
  portfolio.
- **Beta**; the covariance of an asset with the market portfolio divided by the market's
  variance: the CAPM's sole priced risk measure, derived from everyone holding the tangency.

## How entries are written

Each entry says what the thing is and what it is for. Entries never cite a page as their
definition; the pages are the primary source and the glossary is the index. If a glossary entry
and a page disagree, the page is wrong and gets fixed.

## How entries are ordered

Entries are grouped by the track where they first appear, then alphabetically within the group.
Shared terms live in a shared section at the end. The grouping is a map of the site: reading the
glossary's headings in order is reading the dependency chain.

- **Put-call parity**; the no-arbitrage identity linking a call, a put, the underlying, and a
  risk-free bond at the same strike and maturity. Two portfolios, same payoffs, one price.
- **Replicating portfolio**; the trading strategy whose payoffs match a derivative at every
  node. The derivative's price is its cost; finding it is the whole exercise.
- **Two-fund separation**; the result that every mean--variance investor's optimal portfolio is
  a mix of the risk-free asset and one common tangency portfolio, regardless of risk appetite.

- **Risk-free asset**; an asset whose payoff is known with certainty; the vertex of every
  mean--variance frontier and the denominator of every Sharpe ratio.
- **Short position**; a negative holding: selling what you do not own, with payoffs the mirror
  of the long position. Replication routinely requires it, which is one reason frictionless
  shorting is a modelling assumption worth naming.
- **State**; a complete description of what happens; payoffs are functions of states, and the
  law of one price is a statement about agreements across states.
- **Strike price**; the price at which an option's holder may transact; the axis of every
  payoff diagram in the derivatives track.
- **Underlying**; the asset a derivative's payoff is written on. The replication portfolio
  always includes it, which is why the underlying's price process is the model's input.
- **Variance**; the second moment of a return; the risk measure of mean--variance theory, and
  the object the covariance matrix assembles for portfolios.
- **Wealth**; the budget the investor allocates; the constraint that makes portfolio choice an
  optimisation rather than a wish.
- **Yield**; return expressed as a rate; the yield curve plots it against maturity, and the
  principles track derives forward yields from it by the law of one price.
