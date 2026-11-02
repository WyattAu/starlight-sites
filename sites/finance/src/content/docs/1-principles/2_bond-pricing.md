---
date: 2026-10-24T00:00:00+00:00
title: "Bond Pricing and the Term Structure"
description: "Bond pricing from present value: the bond pricing formula derived, yield to maturity, the term structure of interest rates, duration and convexity proved, and the interest rate risk that drives bond returns."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "finance", "url": "https://finance.wyattau.com"}, {"name": "1 Principles", "url": "https://finance.wyattau.com/1-principles"}, {"name": "Bond Pricing and the Term Structure", "url": "https://finance.wyattau.com/1-principles/2_bond-pricing"}]
}
</script>

### 1. The Bond Pricing Formula

**Definition.** A bond pays fixed coupons $C$ periodically and returns the face value $F$ at
maturity in $T$ periods. Its price is the present value of all future cash flows:

$$
P = \sum_{t=1}^{T} \frac{C}{(1 + y)^t} + \frac{F}{(1 + y)^T},
$$

where $y$ is the **yield to maturity** (YTM) — the single rate that equates the bond's price to
the present value of its cash flows.

**Theorem 1.1 (Inverse relationship).** Bond prices and yields move in opposite directions:
$\frac{\partial P}{\partial y} < 0$.

**Proof.** $\frac{\partial P}{\partial y} = \sum_{t=1}^{T} \frac{-t\,C}{(1+y)^{t+1}} -
\frac{T\,F}{(1+y)^{T+1}} < 0$ — every term is negative for positive $C$, $F$, $y$. The
derivative is strictly negative because each term discounts a positive cash flow to a smaller
present value at a higher rate. $\blacksquare$

This inverse relationship is the most important fact in bond markets: when interest rates rise,
existing bond prices fall (their fixed coupons are worth less compared to new bonds at higher
rates). The magnitude of the fall depends on the bond's maturity and coupon rate — measured by
duration and convexity (§3).

### 2. Yield to Maturity

**Definition.** The YTM is the $y$ that solves the pricing equation for the *observed* price
$P_{\text{obs}}$:

$$
P_{\text{obs}} = \sum_{t=1}^{T} \frac{C}{(1 + y)^t} + \frac{F}{(1 + y)^T}.
$$

There is no closed-form solution — $y$ is found numerically (Newton's method or bisection). The
YTM summarizes the bond's return as a single rate, assuming all coupons are reinvested at the
same rate — an assumption that rarely holds exactly but provides a standard comparison metric.

**Par, premium, discount.** When $y = C/F$ (the coupon rate equals the YTM), the bond trades at
**par** ($P = F$). When $y < C/F$, the bond trades at a **premium** ($P > F$); when
$y > C/F$, at a **discount** ($P < F$). This follows from the pricing formula: a higher coupon
stream is worth more than face value discounted at the same rate.

### 3. The Term Structure of Interest Rates

**Definition.** The **term structure** is the relationship between the yield on zero-coupon
bonds and their time to maturity: $y(T)$ for $T = 1, 2, \dots$. The curve plotting $y(T)$
against $T$ is the **yield curve**.

**Forward rates.** The implied forward rate $f(T, T+1)$ — the rate for borrowing from $T$ to
$T+1$ implied by today's zero-coupon prices — satisfies:

$$
(1 + y(T+1))^{T+1} = (1 + y(T))^T \times (1 + f(T, T+1)).
$$

**Theorem 3.1 (Expectations hypothesis, stated).** If the expectations hypothesis holds, the
forward rate equals the expected future spot rate: $f(T, T+1) = E[y(T, T+1)]$. The yield curve
slopes upward when short rates are expected to rise.

*This is a hypothesis, not a theorem — it requires risk-neutral investors and ignores the term
premium (the extra yield demanded for holding longer-dated bonds). The empirical term premium
is positive and varies over time, which is why the yield curve slopes upward on average even
when rates are not expected to rise.*

### 4. Duration and Convexity

**Definition.** **Macaulay duration** is the weighted average time to receive the bond's cash
flows:

$$
D = \sum_{t=1}^{T} t \cdot \frac{C_t/(1+y)^t}{P}, \qquad C_t = \begin{cases} C & t < T \\ C + F & t = T \end{cases}.
$$

**Theorem 4.1.** The modified duration $D^* = D / (1 + y)$ measures the percentage price
change per unit change in yield:

$$
\frac{\Delta P}{P} \approx -D^* \, \Delta y.
$$

**Proof.** Differentiate the bond pricing formula with respect to $y$:

$$
\frac{\partial P}{\partial y} = \sum_{t=1}^{T} \frac{-t\,C_t}{(1+y)^{t+1}} = -\frac{1}{1+y} \sum_{t=1}^{T} t \cdot \frac{C_t}{(1+y)^t}.
$$

Dividing by $P$:

$$
\frac{1}{P}\frac{\partial P}{\partial y} = -\frac{1}{1+y} \sum_{t=1}^{T} t \cdot \frac{C_t/(1+y)^t}{P} = -\frac{D}{1+y} = -D^*,
$$

where $D^* = D/(1+y)$ is the modified duration. The approximation $\Delta P / P \approx -D^*
\Delta y$ follows from the first-order Taylor expansion. $\blacksquare$

**Duration properties** (all proved from the formula):

- Zero-coupon bonds: $D = T$ (duration equals maturity — all cash flows arrive at $T$).
- Higher coupon → lower duration (more cash arrives early).
- Longer maturity → higher duration.

**Convexity** captures what the linear approximation misses:

$$
C = \frac{1}{P}\frac{\partial^2 P}{\partial y^2} > 0.
$$

The convexity of the price–yield relationship means duration overestimates the price fall when
rates rise and underestimates the price gain when rates fall — bonds benefit from convexity.

### 5. Interest Rate Risk

The risk that bond prices fall when rates rise is the dominant risk for bondholders. Duration
measures the exposure: a bond with modified duration $D^*$ loses approximately $D^* \%$ of its
value per 1 percentage point increase in yield.

**Theorem 5.1 (Immunisation).** A bond position is immunised against small parallel shifts in
the yield curve when its duration matches the investor's holding period.

**Proof.** If $D^* = H$ (the holding period), then for a small shift $\Delta y$:
the price change $-D^* \Delta y$ is offset by the reinvestment change $+H \Delta y$ on
coupon reinvestment at the new rate. The two effects cancel to first order. For large shifts,
convexity works in the investor's favour: the price fall is smaller than the linear estimate
and the reinvestment gain is larger. $\blacksquare$

### 6. Self-test

1. Why does a 30-year zero-coupon bond have more interest rate risk than a 30-year coupon
   bond? (§4 — zero-coupon: $D = T = 30$; coupon bond: $D < T$ because some cash arrives
   earlier.)
2. A bond trades at par with YTM 5%. The central bank raises rates by 1%. What happens to the
   bond's price? (§1/§4 — falls by approximately $D^* \times 1\%$, where $D^* = D/(1.05)$.)
3. Why does the expectations hypothesis fail empirically? (§3 — the term premium is positive:
   investors demand extra yield for bearing interest rate risk, so the forward rate exceeds
   the expected future spot rate.)
4. What does convexity buy the bondholder? (§4 — the price-yield curve is convex, so the
   price gain from falling rates exceeds the price loss from rising rates of equal magnitude.)

### Where to go next

- [No-Arbitrage](/1-principles/1_no-arbitrage/) — the principle underlying the bond pricing
  formula.
- [Portfolio Theory](/2-portfolio-theory/1_mean-variance-and-capm/) — bonds in a multi-asset
  portfolio context.
