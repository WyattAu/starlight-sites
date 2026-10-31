---
date: 2026-10-24T00:00:00+00:00
title: "Production, Cost, and the Firm"
description: "The firm's problem solved: cost minimisation by Lagrangian, conditional factor demands, Shephard's lemma for the cost function proved, Hotelling's lemma for the profit function, and the duality between production and cost - every step derived."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "1 Microeconomic Theory", "url": "https://economics.wyattau.com/1-microeconomic-theory"}, {"name": "Production, Cost, and the Firm", "url": "https://economics.wyattau.com/1-microeconomic-theory/5_production-and-firm"}]
}
</script>

### 1. The Technology

**Definition.** The firm's production function $f: \mathbb{R}^n_+ \to \mathbb{R}_+$ maps input
quantities $x = (x_1, \dots, x_n)$ to output $y = f(x)$. The **production set**
$Y = \{(y, -x) : y \leq f(x)\}$ collects feasible input–output pairs.

**Assumptions.** $f$ is continuous, strictly increasing, and **quasi-concave** (the upper
contour sets $\{x : f(x) \geq y\}$ are convex; mirroring convex preferences on the consumer
side). If $f$ is additionally **homogeneous of degree one** (constant returns to scale:
$f(tx) = t\,f(x)$), the cost function derived below inherits a convenient homogeneity.

### 2. Cost Minimisation

**Definition.** Given input prices $w \gg 0$ and target output $y$, the firm solves

$$
c(w, y) = \min_{x \geq 0} \; w \cdot x \quad \text{s.t.} \quad f(x) \geq y.
$$

The solution $x(w, y)$ is the **conditional factor demand**; "conditional" because it depends
on the output target, not on prices beyond $w$. The value function $c(w, y)$ is the **cost
function**.

**Theorem 2.1 (Existence and the Lagrangian).** If $f$ is continuous and $\{x : f(x) \geq y\}$
is bounded for every $y$ reachable (which holds when $f$ is strictly increasing in every
argument), then $x(w, y)$ exists. When $f$ is differentiable and the constraint binds with an
interior solution, the Lagrangian first-order conditions are

$$
w_j = \lambda\, \frac{\partial f}{\partial x_j}(x) \quad \text{for every } j,
\qquad
\lambda = \frac{1}{\mathrm{MP}_j} \cdot w_j = \frac{w_j}{\mathrm{MP}_j}.
$$

**Proof.** Existence: the feasible set $\{x \geq 0 : f(x) \geq y\}$ is closed (continuity) and
bounded (strict increase in every argument forces $x_j \geq$ some positive floor when $y > 0$;
if any $x_j \to 0$ the output collapses below $y$); compact by Heine--Borel; Weierstrass
delivers the minimum. Boundedness of the factor demands is what makes this a constrained
problem rather than an unbounded one.

For the FOCs: the constraint set has a nonempty interior (strictly increasing $f$ means the
strictly-feasible set is open relative to the nonnegativity orthant), so the optimum satisfies
the Lagrangian conditions with an interior solution; by KKT (which applies when the gradient
of the constraint is nonzero, ensured by $f$ strictly increasing in every argument at the
optimum). $\blacksquare$

The economic reading of $\lambda$: the **marginal cost of output**; the rate at which cost
rises when the output target rises by one unit. This is not a definition but a *result*:
$\lambda = \partial c / \partial y$ by the envelope theorem, proved in §4.

### 3. Shephard's Lemma

**Theorem 3.1 (Shephard).** If $c$ is differentiable in $w$ at $(w, y)$ with $w \gg 0$, then

$$
\frac{\partial c}{\partial w_j}(w, y) = x_j(w, y)
$$
 the partial derivative of the cost function with respect to input price $j$ is the
conditional demand for input $j$.

**Proof.** The proof mirrors Shephard's lemma for the expenditure function on the consumer
side: differentiate the identity $c(w, y) = w \cdot x(w, y)$ with respect to $w_j$:

$$
\frac{\partial c}{\partial w_j} = x_j(w, y) + \sum_k w_k \frac{\partial x_k}{\partial w_j}.
$$

The second term vanishes by the **envelope theorem**: the factor-demand adjustments
$\partial x_k / \partial w_j$ are first-order neutral at the optimum, because the firm is
already minimising cost; any small re-optimisation at the *new* prices would cost no less
than the *old* bundle at the *new* prices: $w' \cdot x(w) \geq c(w', y)$ for all $w', w$
(the duality inequality), with equality at $w' = w$. Substituting $w' = w + \varepsilon e_j$
and taking $\varepsilon \to 0$ gives the result. $\blacksquare$

**Corollary 3.2 (Cost function properties).** $c$ is increasing in each $w_j$ (Shephard's
lemma: $\partial c/\partial w_j = x_j \geq 0$); concave in $w$ (a second derivative argument
or: buying at average prices cannot cost more than buying at marginal prices); homogeneous of
degree one in $w$ (doubling all input prices doubles the cost of the same plan).

### 4. Hotelling's Lemma

**Definition.** The firm also solves the **profit maximisation** problem:

$$
\pi(p, w) = \max_{y, x} \; p\,y - w \cdot x \quad \text{s.t.} \quad y \leq f(x).
$$

The solution's output supply $y(p, w)$ and input demands $x(p, w)$ satisfy; by the same
envelope argument:

$$
\frac{\partial \pi}{\partial p} = y(p, w) \quad (\text{Hotelling's lemma}), \qquad
\frac{\partial \pi}{\partial w_j} = -x_j(p, w).
$$

**Proof (Hotelling).** $\pi(p, w) = p\,y(p, w) - w \cdot x(p, w)$ at the optimum. Differentiate
with respect to $p$:

$$
\frac{\partial \pi}{\partial p} = y + p\,\frac{\partial y}{\partial p} - \sum_k w_k\,\frac{\partial x_k}{\partial p}.
$$

The second and third terms cancel: the first-order conditions of profit maximisation give
$p \cdot \partial x / \partial p = p \cdot \partial y / \partial p$ (the value of the output
change equals the cost of the input change, at the optimum). So
$\partial \pi / \partial p = y$; the supply function is the derivative of the profit function
with respect to output price. $\blacksquare$

The symmetry with the consumer side is exact: the expenditure function's Shephard's lemma gives
compensated demands; the profit function's Hotelling's lemma gives input demands and output
supply. One envelope argument, two duality pairs.

### 5. Duality: Production Function ↔ Cost Function

**Theorem 5.1.** If $f$ is continuous, increasing, and quasi-concave, then $c(w, y)$ is
continuously differentiable in $w$, increasing, homogeneous of degree one, concave in $w$, and : when $f$ is additionally **nondecreasing and unbounded** — the production function can be
recovered from $c$:

$$
f(x) = \max_y \; \{y : c(w, y) \leq w \cdot x\} \quad \text{for any fixed } w \gg 0.
$$

**Proof.** The properties of $c$: increasing (Shephard), homogeneous of degree one
($c(tw, y) = t\,c(w, y)$; scaling all input prices scales the minimum cost of the same plan),
concave in $w$ (the pointwise infimum of linear functions $w \mapsto w \cdot x$ over the
feasible plans is concave; the same "infimum of linears is concave" argument as the expenditure
function's convexity, with the min/max roles swapped). The recovery formula is the
**indirect-direct duality**: the cost function encodes the technology's shape, and fixing any
reference $w$ recovers the output level achievable from a given input bundle by inverting the
cost function; the same duality as the consumer's indirect utility and Marshallian demand.
$\blacksquare$

### 6. What the Duality Buys in Practice

- **Policy**: a pollution tax on input $j$ changes $w_j$; Shephard's lemma gives the input
  response directly from the cost function's derivative; no re-estimation of the technology.
- **Estimation**: the cost function's parametric form (Cobb--Douglas, translog) is estimated
  from observed cost shares, which are exactly the Shephard derivatives; the estimation skips
  the production function entirely.
- **Regulation**: the marginal cost $\lambda = \partial c / \partial y$ prices the output under
  marginal-cost pricing rules for natural monopolies.

### 7. Self-test

1. Why does the cost-minimisation problem have a compact feasible set? (§2; strict increase in
   every argument forces $x_j \geq$ some floor when $y > 0$.)
2. What is $\lambda$ in the Lagrangian, and which theorem makes that identification? (§2 for
   the FOC; §4's envelope argument for $\lambda = \partial c/\partial y$.)
3. State the consumer-side analogue of Shephard's lemma. (Roy's identity for the expenditure
   function; the [consumer page](/1-microeconomic-theory/2_utility-maximisation/) proves the
   same envelope cancellation.)
4. Why is $c$ concave in $w$ while the [expenditure function](/1-microeconomic-theory/2_utility-maximisation/)
   is convex in $p$? (§5; the cost function is the infimum of linear functions in $w$
   (concave); the expenditure function is the infimum in the consumer's prices (convex; the
   min/max roles swap because the firm minimises what the consumer maximises).)
5. What breaks Hotelling's lemma if the firm is *not* a price-taker in output? (§4; the
   envelope cancellation requires the firm to take $p$ as given; a monopolist's marginal
   revenue replaces $p$.)

### Where to go next

- [General Equilibrium](/4_general-equilibrium/); the firm's supply joins the consumer's
  demand, and the fixed-point theorem clears all markets at once.
- [The Welfare Theorems](/3_welfare-theorems/); the efficiency of the equilibrium, now with
  the firm's technology in the production side.
- [Econometrics](/3-econometrics/1_ols-estimator/); the cost function's parametric forms are
  estimated from cost-share data using the Shephard derivatives.
