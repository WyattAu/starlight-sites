---
date: 2026-10-24T00:00:00+00:00
title: "Before You Begin: The Mathematics Economics Assumes"
description: "The transition from A-Level/IB economics to university economics: percentages and elasticities, simultaneous equations, reading graphs of functions, and the calculus used in the micro track - each rebuilt from first principles with a self-test."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "Before You Begin", "url": "https://economics.wyattau.com/before-you-begin"}]
}
</script>

A-Level and IB economics teach institutions, diagrams, and evaluation technique. University
economics assumes you can do the mathematics behind the diagrams: an elasticity is a derivative,
market equilibrium is a simultaneous-equation solve, and consumer theory is a constrained
optimisation. This page rebuilds the four mathematical tools the [micro theory
track](/1-microeconomic-theory/) consumes, from first principles. Work through it, take the
self-test at the end, and skip by assessment rather than by trust.

### 1. Percentages, Elasticities, and Logarithms

An elasticity is "percentage change in y per percentage change in x". The percentage change in x
from $x_0$ to $x_1$ is $\frac{x_1 - x_0}{x_0}$; and the *which-base* question (start value vs
midpoint) is why elasticity estimates differ by method. University treatments fix this with
calculus: the point elasticity of $y = f(x)$ is $\frac{dy}{dx} \cdot \frac{x}{y}$; the
derivative scaled by the value's ratio, no base ambiguity.

Logarithms convert percentage changes into additions: $\ln(x_1/x_0)$ is the *continuous*
percentage change, symmetric in direction ($\ln(x_1/x_0) = -\ln(x_0/x_1)$), which is why growth
rates and elasticities in econometrics are regression coefficients on logged variables. Rules you
need: $\ln(ab) = \ln a + \ln b$, $\ln(a/b) = \ln a - \ln b$, $\ln(a^k) = k \ln a$, and $e^{\ln a} = a$.

### 2. Simultaneous Equations: Solving for Equilibrium

Market equilibrium is two equations in two unknowns. Example: demand $Q_d = 100 - 2P$, supply
$Q_s = 3P - 20$. Equilibrium: $Q_d = Q_s$:

$$
100 - 2P = 3P - 20 \implies 120 = 5P \implies P^* = 24, \quad Q^* = 100 - 48 = 52.
$$

The university version adds *parameters* instead of numbers: demand $Q_d = a - bP$, supply
$Q_s = c + dP$ gives $P^* = \frac{a - c}{b + d}$; and the comparative statics are now visible:
$\frac{\partial P^*}{\partial a} = \frac{1}{b+d} > 0$ (a demand shift raises price by the
inverse of the sum of slopes). Solving with letters, not numbers, is the skill. Practice until
simultaneous solves are automatic; the [mathematics site](https://mathematics.wyattau.com)'s
algebra track covers the methods.

### 3. Reading Graphs as Functions

Every economics diagram is a function plot with economics labels. The demand curve is $P(Q)$ -
price as a function of quantity, plotted with Q on the horizontal axis by convention. Three
reads you must own:

1. **Slope and shifts**: a movement *along* the curve is a change in Q with P from the function;
   a *shift* of the curve is a change in a parameter (income, tastes, input costs). The two are
   different experiments; exam answers that confuse them are wrong.
2. **Areas as totals**: revenue is the rectangle $P \times Q$ under the point; consumer surplus
   is the area between the curve and the price line; an integral $\int_0^{Q^*} (P(q) - P^*)\,dq$
   when you have the function.
3. **Intersections and kinks**: equilibrium is an intersection; kinks (kinked-demand models) are
   piecewise functions; solve each piece and check which piece the solution lands in.

### 4. The Calculus the Micro Track Uses

Three tools, developed fully on the [mathematics site](https://mathematics.wyattau.com):

- **Derivatives as marginal quantities**: if $C(q)$ is cost, $C'(q) = \frac{dC}{dq}$ is marginal
  cost. Profit maximisation sets marginal revenue equal to marginal cost; a first-order
  condition you must be able to take and solve.
- **The chain rule**: marginal cost of labour depends on wage via the production function -
  compositions everywhere in micro. If $C = c(w, q)$ and $q = q(L)$, then
  $\frac{dC}{dL} = \frac{\partial C}{\partial q} \cdot \frac{dq}{dL}$.
- **Constrained optimisation (Lagrangian)**: maximise $u(x, y)$ subject to $p_x x + p_y y = m$.
  The Lagrangian $\mathcal{L} = u(x,y) - \lambda(p_x x + p_y y - m)$, first-order conditions in
  $x$, $y$, $\lambda$, solve. The [micro track's consumer problem](/1-microeconomic-theory/2_utility-maximisation/)
  runs entirely on this.

### 5. Econometrics Preview: Randomness Enters

The [econometrics track](/3-econometrics/) adds the last layer: the relationships above are
estimated from noisy data. You need expectation, variance, covariance, and the distinction
between population and sample; the [mathematics site's probability track](https://mathematics.wyattau.com)
covers all four. Nothing more exotic until the central limit theorem, proved there.

### 6. Self-test

1. Demand shifts from $Q = 100 - 2P$ to $Q = 120 - 2P$. What happens to $P^*$ and why, in one
   sentence with the comparative static? (§2; $P^*$ rises by $\frac{20}{b+d}$-equivalent:
   $\frac{\partial P^*}{\partial a} = \frac{1}{b+d}$.)
2. A point elasticity is $-1.5$ at the current price. Price rises 2%. What happens to quantity,
   approximately? (§1; falls by about 3%.)
3. Consumer surplus is the area between the demand curve and the price line. Write it as an
   integral. (§3.)
4. What is marginal cost if $C(q) = 500 + 10q + 2q^2$? At what $q$ is it 50? (§4; $10 + 4q =
   50 \implies q = 10$.)
5. Why do econometrics texts report $\ln(wage)$ regressions? (§1; the coefficient on logged
   variables is a percentage change, symmetric and scale-free.)

### Where to go next

- [Microeconomic Theory](/1-microeconomic-theory/); preferences, utility, demand: the
  constrained-optimisation machinery at full depth.
- [Econometrics](/3-econometrics/); the same relationships estimated from data, with
  Gauss--Markov proved.
- The [study hub](/hub/); the track map and prerequisites.
