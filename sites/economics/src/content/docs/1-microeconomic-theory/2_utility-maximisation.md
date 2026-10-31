---
date: 2026-10-23T00:00:00+00:00
title: "Utility Maximisation, Expenditure Functions, and Slutsky"
tags:
  - Economics
  - University
description: "The consumer problem solved: Marshallian demand, indirect utility, the expenditure function with Shephard's lemma proved, and the Slutsky decomposition derived exactly; substitution plus income, with the sign of the substitution term proved."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "1 Microeconomic Theory", "url": "https://economics.wyattau.com/1-microeconomic-theory"}, {"name": "Utility Maximisation", "url": "https://economics.wyattau.com/1-microeconomic-theory/2_utility-maximisation"}]
}
</script>

### 1. The Consumer Problem

**Definition.** With wealth $w > 0$ and prices $p \gg 0$ (strictly positive), the budget set is
$B(p, w) = \{x \in \mathbb{R}^n_+ : p \cdot x \leq w\}$ and the consumer solves

$$
v(p, w) = \max_{x \in B(p,w)} u(x), \qquad x(p, w) \in \arg\max_{x \in B(p,w)} u(x).
$$

$v$ is the **indirect utility function**; $x(p, w)$ the **Marshallian** (uncompensated) demand.

**Proposition 1.1 (Existence).** If $u$ is continuous and $p \gg 0$, $x(p,w)$ is nonempty.

**Proof.** $B(p, w)$ is closed and bounded; bounded because $p \gg 0$ caps every coordinate at
$w/p_i$; closed because it is a preimage of $(-\infty, w]$ under the continuous map $p \cdot x$.
So $B$ is compact, and $u$ continuous attains its maximum on $B$ by Weierstrass. $\blacksquare$

Compactness of the budget set is *the* reason prices must be strictly positive: a zero price makes
some $x_i$ unbounded, the budget set ceases to be compact, and a satiation-free consumer demands
infinite amounts of the free good.

### 2. The Expenditure Function and Shephard's Lemma

**Definition.** The expenditure function solves the *dual* problem:

$$
e(p, u) = \min_{x} p \cdot x \quad \text{s.t.} \quad u(x) \geq u,
$$

with solution $h(p, u)$, the **Hicksian** (compensated) demand; the cheapest bundle reaching
utility level $u$ at prices $p$.

**Theorem 2.1 (Shephard's Lemma).** If $h(p, u)$ is single-valued and differentiable at $p$, then

$$
\frac{\partial e}{\partial p_i}(p, u) = h_i(p, u).
$$

**Proof.** $e(p, u) = p \cdot h(p, u)$. Differentiate with respect to $p_i$:

$$
\frac{\partial e}{\partial p_i} = h_i(p, u) + \sum_j p_j \frac{\partial h_j}{\partial p_i}.
$$

The second term vanishes: at the optimum, the bundle $h(p,u)$ reaches exactly utility $u$
(local nonsatiation means the constraint binds, $u(h(p,u)) = u$), so perturbing $h$ along
$\partial h/\partial p_i$; which keeps utility *constant* to first order; cannot lower
expenditure; the envelope condition gives $\sum_j p_j \, \partial h_j/\partial p_i = 0$.
Formally this is the **envelope theorem**: the derivative of the value function with respect to a
parameter equals the partial derivative of the objective, because the choice-adjustment term is
orthogonal to the constraint at the optimum. $\blacksquare$

Shephard's lemma is the workhorse of applied micro: consumer surplus, cost-of-living indices, and
the entire duality method pass through it.

### 3. The Slutsky Decomposition

How does *Marshallian* demand respond to a price change? The answer decomposes into substitution
and income effects; and the decomposition is a theorem with an exact statement.

**Theorem 3.1 (Slutsky).** With differentiable demands,

$$
\frac{\partial x_i(p, w)}{\partial p_j}
= \frac{\partial h_i(p, u)}{\partial p_j}
- x_j(p, w)\,\frac{\partial x_i(p, w)}{\partial w},
\qquad u = v(p, w).
$$

**Proof.** The link between the two demands is the identity defining compensated demand at the
utility the consumer actually reaches:

$$
x_i(p, w) = h_i\bigl(p, v(p, w)\bigr).
$$

Differentiate both sides with respect to $p_j$ (holding $w$ fixed), using the chain rule:

$$
\frac{\partial x_i}{\partial p_j}
= \frac{\partial h_i}{\partial p_j}
+ \frac{\partial h_i}{\partial u}\,\frac{\partial v}{\partial p_j}.
$$

Two substitutions finish it. First, Shephard's lemma in derivative form:
$\partial v/\partial p_j = -\partial e/\partial p_j$ at $(p, w)$ (raising a price lowers attainable
utility at exactly the expenditure-compensation rate), so with $e(p, v(p,w)) = w$:

$$
\frac{\partial h_i}{\partial u}\,\frac{\partial v}{\partial p_j}
= -\frac{\partial h_i}{\partial u}\, h_j(p, u).
$$

Second, the **duality identity** $h_i(p, v(p,w)) = x_i(p, w)$ differentiated in $w$:
$\partial h_i/\partial u \cdot \partial v/\partial w = \partial x_i/\partial w$, and
$\partial v/\partial w = \lambda > 0$; the marginal utility of wealth; so

$$
\frac{\partial h_i}{\partial u}\, h_j = x_j \frac{\partial x_i}{\partial w}
$$

(the $\lambda$'s cancel). Substitute into the chain-rule expansion:

$$
\frac{\partial x_i}{\partial p_j}
= \frac{\partial h_i}{\partial p_j}
- x_j \frac{\partial x_i}{\partial w}. \qquad \blacksquare
$$

### 4. Reading the Theorem

- The **substitution effect** $\partial h_i/\partial p_j \leq 0$ for $i = j$ *always*: Hicksian
  own-price demand never slopes upward, because $h(p, u)$ minimises expenditure; a direct
  consequence of the convexity of the expenditure-minimising choice (the compensated demand is
  the gradient map of the convex function $e$). This is proved, not assumed.
- The **income effect** $-x_j \,\partial x_i/\partial w$ has the sign of
  $\partial x_i/\partial w$: for normal goods it reinforces the substitution effect; for Giffen
  goods it overwhelms it; which is why Giffen goods require a large budget share $x_j$ *and*
  strong inferiority, and why they are vanishingly rare in data.
- **Symmetry**: since $\partial h_i/\partial p_j = \partial h_j/\partial p_i$ (both equal
  $\partial^2 e/\partial p_i \partial p_j$; Young's theorem applied to the convex function $e$),
  the Slutsky matrix of *substitution terms* is symmetric. The Marshallian cross-partial matrix
  is generally *not* symmetric; the antisymmetric residue is pure income effect.

The Slutsky matrix's properties (symmetry, negative semidefiniteness) are exactly the restrictions
that make demand data consistent with maximisation; the tests of revealed preference are tests
of this theorem.

### 5. Self-test

1. Why does the budget set need $p \gg 0$ for Weierstrass? (§1; boundedness fails at a zero
   price.)
2. Where does the envelope theorem enter Shephard's lemma? (§2; the choice-adjustment term dies
   against the binding constraint.)
3. Derive the sign of the compensated own-price effect. (§4; $e$ is convex in $p$, so its
   gradient map's diagonal is nonpositive; or: expenditure minimisation with a fixed utility
   target cannot slope upward.)
4. Why is the Marshallian cross-partial matrix not symmetric? (§4; the income effect terms
   $-x_j \partial x_i/\partial w$ need not mirror.)
