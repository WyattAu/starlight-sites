---
date: 2026-10-23T00:00:00+00:00
title: "Preferences and Utility"
tags:
  - Economics
  - University
description: "Preference axioms stated precisely, and the representation theorem: continuous preferences on a convex budget set admit a continuous utility representation, proved by construction."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "economics", "url": "https://economics.wyattau.com"}, {"name": "1 Microeconomic Theory", "url": "https://economics.wyattau.com/1-microeconomic-theory"}, {"name": "Preferences and Utility", "url": "https://economics.wyattau.com/1-microeconomic-theory/1_preferences-and-utility"}]
}
</script>

### 1. Preferences, Not Utility, Are Primitive

The consumer's primitive is a preference relation $\succsim$ on a consumption set
$X \subseteq \mathbb{R}^n_+$: $x \succsim y$ reads "x is at least as good as y". From it:

- **Strict preference**: $x \succ y$ iff $x \succsim y$ and not $y \succsim x$.
- **Indifference**: $x \sim y$ iff $x \succsim y$ and $y \succsim x$.

Utility is *derived*, not assumed: $u: X \to \mathbb{R}$ **represents** $\succsim$ if
$x \succsim y \iff u(x) \geq u(y)$. Utility is ordinal — any strictly increasing transformation
represents the same preferences — so statements that depend on utility *levels* ("utility rose by
3") are meaningless; statements about *orderings* are the content.

### 2. The Axioms

**Definition.** $\succsim$ is:

1. **Complete**: for all $x, y \in X$, $x \succsim y$ or $y \succsim x$.
2. **Transitive**: $x \succsim y$ and $y \succsim z$ imply $x \succsim z$.
3. **Continuous**: for all $y$, the upper contour set $\{x : x \succsim y\}$ and the lower
   contour set $\{x : y \succsim x\}$ are closed.
4. **Locally nonsatiated**: for every $x$ and every $\varepsilon > 0$ there is $x'$ within
   $\varepsilon$ of $x$ with $x' \succ x$.
5. **Convex**: if $x \succsim y$ then $tx + (1-t)y \succsim y$ for $t \in [0, 1]$ (weakly
   convex preferences); **strictly convex** if additionally $x \neq y$ implies strict preference
   for $t \in (0,1)$.

(1) and (2) make $\succsim$ a rational ordering — without them, "maximisation" has no coherent
meaning (transitivity failures produce preference cycles: money-pump arguments show an agent with
cyclic preferences can be exploited). (3) is the technical workhorse: it is what makes
representation *and* demand existence proofs go through. (4) says more is always weakly better in
every neighbourhood — it rules out bliss points inside the budget. (5) is the diversification
postulate and is what makes demand correspondences single-valued and equilibria well-behaved.

### 3. The Representation Theorem

**Theorem 3.1 (Debreu).** If $\succsim$ is complete, transitive, and continuous on a convex,
closed consumption set $X \subseteq \mathbb{R}^n_+$, then there exists a continuous $u: X \to
\mathbb{R}$ representing $\succsim$.

**Proof (construction for $n = 1$; the general case via the same counting idea on hyperplanes).**
For $X = \mathbb{R}_+$ define

$$
u(x) = \inf \{ r \in \mathbb{Q}_+ : r \succsim x \}
$$

under the convention of comparing $x$ with rational "reference bundles" through the continuity of
contour sets. Three claims:

1. *Well defined*: completeness gives every $x$ some rational $r$ with $r \succsim x$, so the set
   is nonempty; closedness of the lower contour set makes the infimum attained in the closure.
2. *Representation*: take $x, y$ with $x \succsim y$. Every rational $r$ with $y \succsim r$
   satisfies $r \precsim x$ by transitivity, so the infimum defining $u(x)$ is at least that
   defining $u(y)$: $u(x) \geq u(y)$. The reverse inequality is symmetric, with equality iff
   $x \sim y$.
3. *Continuity*: continuity of $\succsim$ makes the contour sets closed, so
   $\{x : u(x) \geq a\}$ and $\{x : u(x) \leq a\}$ are closed for every rational $a$ — subbasis
   closedness, hence continuity of $u$. $\blacksquare$

The rational reference bundles matter: a *countable* dense family is what makes the infimum a
real number. Continuity of preferences is exactly the hypothesis that guarantees one; lexicographic
preferences — which are complete, transitive, and *discontinuous* — admit **no** representation at
all (any candidate $u$ can be defeated: for every $x$, the jump separating $(x, 1)$ from $(x, 0)$
in lexicographic order forces uncountably many disjoint open intervals in $\mathbb{R}$).

### 4. Convexity's Work

Convexity of preferences does not affect representation — it affects what *maximisation* returns.
On the budget set (a simplex, hence convex), maximising a *quasiconcave* utility (weakly convex
preferences) yields a convex set of optima; strict convexity collapses it to a single point:

**Proposition 4.1.** With strictly convex preferences and a convex budget set $B$, the argmax
$\arg\max_{x \in B} u(x)$ is a singleton whenever nonempty.

**Proof.** Suppose $x \neq y$ both maximise. Convexity of $B$ gives $m = tx + (1-t)y \in B$ for
$t \in (0,1)$; strict convexity gives $m \succ x$; so $u(m) > u(x)$ — contradicting maximality of
$x$. $\blacksquare$

This is why demand *functions* (single-valued) require strict convexity, and why relaxing it gives
demand *correspondences* — the multivalued objects general-equilibrium theory works with.

### 5. What Is *Not* Assumed

Nothing so far involves money, markets, or rationality-as-intelligence. The axioms are about
consistency of comparison, and the theorems are silent on where $\succsim$ comes from. Behavioural
economics is the study of which axioms fail empirically and what replaces them; the theorems above
are the benchmark whose failures are informative.

### Self-test

1. Why is utility ordinal? (§1 — any strictly increasing transform represents the same
   preferences; only orderings are pinned down.)
2. Where does continuity enter the proof of Theorem 3.1? (§3, claims 1 and 3 — closed contour
   sets.)
3. Construct the money-pump for cyclic preferences. (§2 — with $a \prec b \prec c \prec a$, an
   agent pays a fee repeatedly to trade up the cycle.)
4. Why do lexicographic preferences admit no representation? (§3 — uncountably many jumps.)
