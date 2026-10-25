---
date: 2026-10-24T00:00:00+00:00
title: "Before You Begin: What Finance Assumes"
description: "The transition into university finance: percentages and compound arithmetic, expectation and variance, the time-value reflex, and reading payoff diagrams - each rebuilt with a self-test at the end."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "Before You Begin", "url": "https://finance.wyattau.com/before-you-begin"}]
}
</script>

University finance assumes four tools, and the [Principles track](/1-principles/) uses them from
its first page: percentage arithmetic you can do in your head, expectation and variance, the
time-value reflex (discounting without a calculator), and payoff diagrams read as functions. This
page rebuilds each, with a self-test at the end so confident readers can skip by assessment.

### 1. Percentage and Compound Arithmetic

A return of 10% followed by 10% is **not** 20%: $(1.10)(1.10) = 1.21$ — 21%. Compounding
multiplies; de-compounding divides: to undo $+10\%$, divide by $1.10$, not subtract 10%
($\frac{1}{1.1} \approx 0.909$, a 9.09% fall). The asymmetry of gains and losses (−50% needs
+100% to recover) is pure arithmetic and drives half the risk management in the subject.

Annualisation: a 5% half-year return compounds to $(1.05)^2 - 1 = 10.25\%$ per year — more than
10%, and the difference *is* the interest on interest. Reverse: to annualise a monthly rate,
compound it twelve times, never multiply by twelve.

### 2. Expectation and Variance

**Definition.** For outcomes $x_1, \dots, x_n$ with probabilities $p_1, \dots, p_n$:

$$
E[X] = \sum_i p_i x_i, \qquad \operatorname{Var}(X) = E[X^2] - (E[X])^2.
$$

Three facts finance uses hourly:

1. **Linearity**: $E[aX + bY] = aE[X] + bE[Y]$ — always, no independence needed.
2. **Covariance enters variance**: $\operatorname{Var}(X + Y) = \operatorname{Var}(X) +
   \operatorname{Var}(Y) + 2\operatorname{Cov}(X, Y)$. The covariance term is why
   diversification works and why the portfolio track is a covariance-matrix subject.
3. **Independence kills the covariance**: with independent $X, Y$, the term vanishes — the
   arithmetic behind "don't put all your eggs in one basket".

Worked check: an asset pays +20% or −10% with equal probability. $E = 0.05$ (5% mean),
$E[X^2] = \frac{0.04 + 0.01}{2} = 0.025$, variance $= 0.025 - 0.0025 = 0.0225$, standard
deviation $= 0.15$ (15%). Being able to do that in your head is the fluency the track assumes.

### 3. The Time-Value Reflex

A euro today is a claim you can invest at $r$: it becomes $1 + r$ euro next period. So next
period's certain euro costs $\frac{1}{1+r}$ today — its **present value**. The reflex to build:

- A cash flow $C$ in $t$ years at rate $r$: $PV = \frac{C}{(1+r)^t}$.
- A stream: sum the pieces — never discount a total with an average rate.
- Rate conversions match the period: a 12% annual rate is 1% monthly *if* simple; compounded,
  $(1.12)^{1/12} - 1 \approx 0.9489\%$ — know which convention you're using.

The [Principles track](/1-principles/1_no-arbitrage/) derives why discounting *must* work this
way from no-arbitrage — the reflex is a consequence, not a rule to memorise.

### 4. Payoff Diagrams as Functions

An option's payoff diagram is a piecewise function of the underlying's price $S_T$ at expiry.
For a call with strike $K$: payoff $= \max(S_T - K, 0)$ — flat at zero for $S_T \leq K$,
slope-45° above. A put: $\max(K - S_T, 0)$. Two reads to own:

1. **Kinks are the exercise decision**: the function is max of two linear pieces; the kink sits
   at the strike.
2. **Combining instruments**: selling a call against a held share ("covered call") truncates the
   upside — read the combined payoff by adding the functions pointwise. The [derivatives
   track](/3-derivatives/) prices these combinations; first you must read them.

### 5. Self-test

1. A fund returns +25% then −20%. Net? (§1 — $1.25 \times 0.80 = 1.00$: flat, not +5%.)
2. $E[X] = 8$, $E[Y] = 3$, $\operatorname{Var}(X) = 4$, $\operatorname{Var}(Y) = 9$,
   $\operatorname{Cov} = 2$. For a 50/50 mix of $X$ and $Y$: mean and variance? (§2 — mean 5.5;
   variance $0.25 \cdot 4 + 0.25 \cdot 9 + 2 \cdot 0.5 \cdot 0.5 \cdot 2 = 1 + 2.25 + 1 = 4.25$.)
3. €1,000 arrives in 3 years, $r = 4\%$. Present value? (§3 — $1000/1.04^3 \approx 889$.)
4. Sketch the payoff of buying a put with strike 50 while holding the share. (§4 — the share's
   45° line plus the put truncates the downside at 50: portfolio value
   $\max(S_T, 50)$.)

### Where to go next

- [Principles of Finance](/1-principles/) — no-arbitrage and present value, proved.
- [Portfolio Theory](/2-portfolio-theory/) — the covariance arithmetic above, scaled up to the
  CAPM.
- The [study hub](/hub/) — the track map and prerequisites.

### 6. Vocabulary to Pre-Load

Five words whose everyday meanings mislead: **principal** (the amount invested, not a
principle); **yield** (return as a rate, not a quantity); **short** (having sold what you do
not own — a negative position, not "short-term"); **liquidity** (how fast something converts to
cash without price cost, not how "liquid" it looks); **nominal vs real** (before vs after
inflation — every historical return in this site is nominal unless marked real).

The glossary carries the full set; these five are the ones that bite in the first week.

### 7. What You Can Skip

If you can do §2's worked check cold and §3's reflex without pausing, skip to the
[Principles track](/1-principles/) — the track re-derives everything here in passing, and
re-reading what you already own is the least efficient form of study. The self-test exists so
that "skip" is an assessment, not an assumption.
