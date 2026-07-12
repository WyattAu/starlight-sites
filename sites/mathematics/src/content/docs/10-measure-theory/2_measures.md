---
title: Measures
tags:
  - Mathematics
  - University
description: 'Measures: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'
---

### 2.1 Definition and Properties

A **measure** on a measurable space $(X, \mathcal{F})$ is a function
$\mu : \mathcal{F} \to [0, \infty]$ satisfying:

1. $\mu(\varnothing) = 0$.
2. **Countable additivity**: if $\{A_n\}_{n=1}^{\infty}$ are pairwise disjoint sets in
   $\mathcal{F}$, then

$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \mu(A_n)$$

The triple $(X, \mathcal{F}, \mu)$ is called a **measure space**.

**Proposition 2.1 (Monotonicity).** If $A \subseteq B$, then $\mu(A) \leq \mu(B)$.

_Proof._ $B = A \cup (B \setminus A)$ is a disjoint union, so
$\mu(B) = \mu(A) + \mu(B \setminus A) \geq \mu(A)$. $\blacksquare$

**Proposition 2.2 (Countable Subadditivity).** For any sequence $\{A_n\} \subseteq \mathcal{F}$:

$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) \leq \sum_{n=1}^{\infty} \mu(A_n)$$

_Proof._ Define $B_1 = A_1$ and $B_n = A_n \setminus \bigcup_{k=1}^{n-1} A_k$ for $n \geq 2$. Then
$\{B_n\}$ are pairwise disjoint with $\bigcup B_n = \bigcup A_n$. By countable additivity and
monotonicity, $\mu(\bigcup A_n) = \sum \mu(B_n) \leq \sum \mu(A_n)$. $\blacksquare$

**Proposition 2.3 (Continuity from Below).** If $A_1 \subseteq A_2 \subseteq \cdots$, then

$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) = \lim_{n \to \infty} \mu(A_n)$$

_Proof._ Write $\bigcup A_n = A_1 \cup (A_2 \setminus A_1) \cup (A_3 \setminus A_2) \cup \cdots$, a
disjoint union. Then
$\mu(\bigcup A_n) = \mu(A_1) + \sum_{n=1}^{\infty} \mu(A_{n+1} \setminus A_n) = \lim_{n \to \infty} \mu(A_n)$.
$\blacksquare$

**Proposition 2.4 (Continuity from Above).** If $A_1 \supseteq A_2 \supseteq \cdots$ and
$\mu(A_1) < \infty$, then

$$\mu\left(\bigcap_{n=1}^{\infty} A_n\right) = \lim_{n \to \infty} \mu(A_n)$$

### 2.2 Examples of Measures

**Example (Counting Measure).** On any set $X$ with $\mathcal{F} = \mathcal{P}(X)$, define
$\mu(A) = |A|$ (the cardinality, $\infty$ for infinite sets). This is a measure.

**Example (Dirac Measure).** For $x_0 \in X$, define $\delta_{x_0}(A) = 1$ if $x_0 \in A$, and $0$
otherwise. This is a measure.

**Example (Lebesgue Measure).** The Lebesgue measure $m$ on $\mathbb{R}$ is the completion of a
measure on $\mathcal{B}(\mathbb{R})$ satisfying $m([a, b]) = b - a$ for all $a \leq b$. On
$\mathbb{R}^n$, the Lebesgue measure satisfies
$m([a_1, b_1] \times \cdots \times [a_n, b_n]) = \prod_{i=1}^n (b_i - a_i)$.

**Example (Hausdorff Measure).** For $\alpha > 0$, the $\alpha$-dimensional Hausdorff measure
$\mathcal{H}^\alpha$ on $\mathbb{R}^n$ generalises Lebesgue measure to non-integer dimensions:
$\mathcal{H}^\alpha(A) = \lim_{\delta \to 0} \inf\{\sum_i (\operatorname{diam} U_i)^\alpha : A \subseteq \bigcup U_i, \operatorname{diam} U_i < \delta\}$.
For $\alpha = n$, $\mathcal{H}^n$ coincides with the Lebesgue measure up to a constant factor.

### 2.3 Null Sets and Almost Everywhere

**Definition.** A set $N \subseteq X$ is **null** (or $\mu$-negligible) if $\mu(N) = 0$. A property
holds **almost everywhere** (a.e.) if it holds on the complement of a null set.

**Proposition 2.5.** A countable union of null sets is null.

### 2.4 Complete Measures

**Definition.** A measure space $(X, \mathcal{F}, \mu)$ is **complete** if every subset of a null set
is measurable (and hence null). The Lebesgue measure is the completion of the Borel measure.

**Theorem 2.6 (Completion).** Every measure $\mu$ on a $\sigma$-algebra $\mathcal{F}$ has a unique
completion $\overline{\mu}$ on the $\sigma$-algebra
$\overline{\mathcal{F}} = \{A \cup N : A \in \mathcal{F}, N \subseteq B \in \mathcal{F}, \mu(B) = 0\}$.

### 2.5 Product Measures

**Theorem 2.7.** Given $\sigma$-finite measure spaces $(X, \mathcal{F}, \mu)$ and $(Y, \mathcal{G}, \nu)$,
there exists a unique **product measure** $\mu \times \nu$ on $(X \times Y, \mathcal{F} \otimes \mathcal{G})$
satisfying $(\mu \times \nu)(A \times B) = \mu(A)\nu(B)$ for all $A \in \mathcal{F}$, $B \in \mathcal{G}$.

**Theorem 2.8 (Fubini-Tonelli).** If $f(x, y)$ is nonnegative and measurable (Tonelli) or integrable
(Fubini), then:

$$\int_{X \times Y} f\, d(\mu \times \nu) = \int_X \left(\int_Y f(x, y)\, d\nu(y)\right) d\mu(x) = \int_Y \left(\int_X f(x, y)\, d\mu(x)\right) d\nu(y)$$

### 2.6 Signed Measures

**Definition.** A **signed measure** $\nu$ on $(X, \mathcal{F})$ is a countably additive function
$\nu : \mathcal{F} \to (-\infty, \infty]$ that can take at most one of the values $\pm\infty$.

**Theorem 2.9 (Hahn Decomposition).** For any signed measure $\nu$, there exists a **Hahn
decomposition** $X = P \cup N$ where $P$ is positive (every measurable subset has $\nu \geq 0$) and
$N$ is negative (every subset has $\nu \leq 0$). This decomposition is unique up to null sets.

**Theorem 2.10 (Jordan Decomposition).** Every signed measure $\nu$ can be uniquely expressed as
$\nu = \nu^+ - \nu^-$ where $\nu^+$ and $\nu^-$ are positive measures called the **positive and
negative variations**.

### 2.7 Worked Example: A Non-Measurable Set

**Problem.** Show that the Vitali set is not Lebesgue measurable.

<details>
<summary>Solution</summary>

Define an equivalence relation on $[0, 1]$ by $x \sim y$ iff $x - y \in \mathbb{Q}$. Choose one
representative from each equivalence class to form the Vitali set $V$. For rationals $q \in [-1, 1] \cap \mathbb{Q}$, define $V_q = V + q$ (mod 1). These are pairwise disjoint and $\bigcup_q V_q = [0, 1]$.

By translation invariance of Lebesgue measure, $m(V_q) = m(V)$ for all $q$. If $V$ were measurable,
then $1 = m([0, 1]) = \sum_q m(V_q) = \sum_q m(V)$. The right side is $0$ if $m(V) = 0$ or $\infty$
if $m(V) > 0$, both contradictions. Hence $V$ is not measurable.

$\blacksquare$

</details>

### 2.8 Worked Example: Measure of the Cantor Set

**Problem.** Compute the Lebesgue measure of the Cantor set $C$.

<details>
<summary>Solution</summary>

The Cantor set is constructed by removing the middle third $(1/3, 2/3)$ from $[0, 1]$, then removing
the middle third of each remaining interval, ad infinitum. After $n$ stages, $2^n$ intervals each of
length $3^{-n}$ remain. The measure of the removed set is:

$$\sum_{n=0}^\infty \frac{2^n}{3^{n+1}} = \frac{1}{3}\sum_{n=0}^\infty \left(\frac{2}{3}\right)^n = \frac{1}{3} \cdot \frac{1}{1-2/3} = 1$$

Therefore $m(C) = 1 - 1 = 0$. The Cantor set is an uncountable null set.

$\blacksquare$

</details>

