---
title: The Real Number System
tags:
  - Mathematics
  - University
description: 'This chapter assumes the reader is comfortable with: Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

## Prerequisites

This chapter assumes the reader is comfortable with:

- **Proof techniques**: direct proof, proof by contradiction, mathematical induction.
- **Basic set theory**: sets, subsets, unions, intersections, the power set.
- **Functions**: domain, range, injectivity, surjectivity, composition.
- **Informal calculus**: limits, continuity, differentiation, and integration as studied at A-Level or IB Mathematics.

The axioms stated below are taken as given; the purpose of this chapter is to derive their consequences, not to justify the axioms themselves. Readers without a proof-writing background should consult an introductory discrete mathematics text first.

### 1.1 Field Axioms

The real numbers $\mathbb{R}$ form a **complete ordered field**. The field axioms guarantee closure
Under addition, subtraction, multiplication, and division (by non-zero elements), together with the
Usual commutative, associative, and distributive laws.

### 1.2 Order and the Completeness Axiom

The order relation $\leq$ on $\mathbb{R}$ satisfies:

1. **Reflexivity**: $a \leq a$
2. **Antisymmetry**: $a \leq b$ and $b \leq a$ implies $a = b$
3. **Transitivity**: $a \leq b$ and $b \leq c$ implies $a \leq c$
4. **Totality**: for all $a, b$Either $a \leq b$ or $b \leq a$
5. **Compatibility with addition**: $a \leq b$ implies $a + c \leq b + c$
6. **Compatibility with multiplication**: $a \leq b$ and $0 \leq c$ implies $ac \leq bc$

The **completeness axiom** (also called the **least upper bound property**) is what distinguishes
$\mathbb{R}$ from $\mathbb{Q}$:

**Axiom (Completeness).** Every non-empty subset of $\mathbb{R}$ that is bounded above has a **least
Upper bound** (supremum) in $\mathbb{R}$.

### 1.3 Supremum and Infimum

Let $S \subseteq \mathbb{R}$ be a non-empty set that is bounded above.

**Definition.** The **supremum** (or least upper bound) of $S$Denoted $\sup(S)$Is the real number
$u$ satisfying:

1. $u$ is an upper bound: $s \leq u$ for all $s \in S$.
2. $u$ is the least upper bound: if $v$ is any upper bound of $S$Then $u \leq v$.

Similarly, the **infimum** (or greatest lower bound), $\inf(S)$Is the greatest number $l$ such that
$l \leq s$ for all $s \in S$.

**Proposition 1.1.** $\sup(S)$ exists if and only if $S$ is non-empty and bounded above.

**Proposition 1.2 (Approximation Property).** If $u = \sup(S)$Then for every $\varepsilon > 0$There
Exists $s \in S$ such that $u - \varepsilon \lt s \leq u$.

_Proof._ If no such $s$ existed, then $u - \varepsilon$ would be an upper bound of $S$ strictly less
Than $u$Contradicting the definition of $\sup(S)$. $\blacksquare$

**Example.** Let $S = \{x \in \mathbb{R} : x^2 \lt 2\}$. Then $\sup(S) = \sqrt{2}$. Note that
$\sqrt{2}
\notin \mathbb{Q}$, so $\mathbb{Q}$ does not satisfy the completeness axiom.

### 1.4 Archimedean Property

**Theorem 1.1 (Archimedean Property).** For every $x \in \mathbb{R}$There exists $n \in \mathbb{N}$
Such that $n \gt x$.

_Proof._ Suppose, for contradiction, that $\mathbb{N}$ is bounded above. By the completeness axiom,
$s = \sup(\mathbb{N})$ exists in $\mathbb{R}$. Then $s - 1$ is not an upper bound for $\mathbb{N}$
So there exists $n \in \mathbb{N}$ with $n \gt s - 1$I.e., $n + 1 \gt s$. But $n + 1 \in \mathbb{N}$
Contradicting that $s$ is an upper bound. $\blacksquare$

**Corollary 1.2.** For every $\varepsilon > 0$There exists $n \in \mathbb{N}$ such that
$1/n \lt \varepsilon$.

_Proof._ By the Archimedean property, choose $n \in \mathbb{N}$ with $n \gt 1/\varepsilon$. Then
$1/n \lt \varepsilon$. $\blacksquare$

**Corollary 1.3 (Density of $\mathbb{Q}$).** Between any two distinct real numbers $a \lt b$There
Exists a rational number $q \in \mathbb{Q}$ with $a \lt q \lt b$.

_Proof._ Since $b - a > 0$By Corollary 1.2 there exists $n \in \mathbb{N}$ with $1/n \lt b - a$ So
$1 \lt n(b - a) = nb - na$. Let $m = \lfloor na \rfloor + 1 \in \mathbb{Z}$. Then
$m - 1 \leq na \lt m$ Giving $m \leq na + 1 \lt na + n(b - a) = nb$. Hence $a \lt m/n \lt b$And
$m/n \in \mathbb{Q}$. $\blacksquare$

### 1.5 Properties of Supremum and Infimum

**Proposition 1.4.** If $A$ and $B$ are non-empty bounded subsets of $\mathbb{R}$Then
$\sup(A + B) = \sup(A) + \sup(B)$Where $A + B = \{a + b : a \in A, b \in B\}$.

_Proof._ For all $a \in A$ and $b \in B$: $a \leq \sup(A)$ and $b \leq \sup(B)$So
$a + b \leq \sup(A) + \sup(B)$. Thus $\sup(A) + \sup(B)$ is an upper bound for $A + B$So
$\sup(A + B) \leq \sup(A) + \sup(B)$.

For the reverse inequality, let $\varepsilon > 0$. By the approximation property, there exist
$a \in A$ And $b \in B$ with $a > \sup(A) - \varepsilon/2$ and $b > \sup(B) - \varepsilon/2$. Then
$a + b > \sup(A) + \sup(B) - \varepsilon$So $\sup(A + B) \geq \sup(A) + \sup(B) - \varepsilon$.
Since $\varepsilon > 0$ is arbitrary, $\sup(A + B) \geq \sup(A) + \sup(B)$. $\blacksquare$

**Proposition 1.5.** For any non-empty bounded set $S \subseteq \mathbb{R}$, $\inf(S) = -\sup(-S)$
Where $-S = \{-s : s \in S\}$.

_Proof._ Let $u = \sup(-S)$. Then $-s \leq u$ for all $s \in S$So $s \geq -u$ for all $s \in S$
Meaning $-u$ is a lower bound for $S$. If $v$ is any lower bound for $S$Then $-v$ is an upper bound
For $-S$So $u \leq -v$I.e., $-u \geq v$. Hence $-u = \inf(S)$. $\blacksquare$

<details>
<summary>Worked Example: Find $\sup$ and $\inf$ of $S = \{(-1)^n + 1/n : n \in \mathbb{N}\}$</summary>

_Solution._ The first few terms are $0, 3/2, -2/3, 5/4, -4/5, 7/6, \ldots$.

For even $n = 2k$: $(-1)^{2k} + 1/(2k) = 1 + 1/(2k)$Which decreases toward $1$ from above. For odd
$n = 2k-1$: $(-1)^{2k-1} + 1/(2k-1) = -1 + 1/(2k-1)$Which increases toward $-1$ from below.

The even terms form the sequence $3/2, 5/4, 7/6, \ldots$ with limit $1$So $\sup(S) = 3/2$ (the first
even term). The odd terms form $0, -2/3, -4/5, \ldots$ with limit $-1$And since $0$ Is an
odd-indexed term, $\inf(S) = -1$ (approached but not attained). $\blacksquare$

</details>

### 1.6 Construction of $\mathbb{R}$ via Dedekind Cuts

_Remark._ The following outline shows how $\mathbb{R}$ can be constructed from $\mathbb{Q}$Making
The completeness axiom a theorem rather than an axiom.

**Definition (Dedekind Cut).** A **Dedekind cut** is a subset $\alpha \subseteq \mathbb{Q}$
satisfying:

1. $\alpha \neq \emptyset$ and $\alpha \neq \mathbb{Q}$
2. If $p \in \alpha$ and $q \lt p$ (with $q \in \mathbb{Q}$), then $q \in \alpha$ (downward closure)
3. $\alpha$ has no greatest element: for every $p \in \alpha$There exists $q \in \alpha$ with
   $p \lt q$

**Definition.** The set of real numbers $\mathbb{R}$ is defined as the set of all Dedekind cuts.

The order, addition, and multiplication are defined as follows:

- **Order:** $\alpha \lt \beta$ if and only if $\alpha \subsetneq \beta$
- **Addition:** $\alpha + \beta = \{p + q : p \in \alpha, q \in \beta\}$
- **Multiplication:** For $\alpha, \beta \geq 0^*$:
  $\alpha \cdot \beta = \{p \cdot q : p \in \alpha, q \in \beta, p \geq 0, q \geq 0\} \cup \{r \in \mathbb{Q} : r \lt 0\}$

Here $0^* = \{q \in \mathbb{Q} : q \lt 0\}$ represents the real number $0$.

**Theorem.** With these definitions, $\mathbb{R}$ is a complete ordered field, and $\mathbb{Q}$
embeds Into $\mathbb{R}$ via $q \mapsto \{r \in \mathbb{Q} : r \lt q\}$.

_Proof (sketch)._ Verifying the field axioms and order axioms is lengthy but straightforward. The
key Step is the completeness axiom: if $\mathcal{A}$ is a non-empty set of Dedekind cuts bounded
above, Then $\alpha = \bigcup_{\beta \in \mathcal{A}} \beta$ is itself a Dedekind cut and
$\alpha = \sup(\mathcal{A})$. $\blacksquare$

### 1.7 Equivalences of Completeness

The completeness axiom can be formulated in several equivalent ways. Each implies the others:

1. **Least Upper Bound Property:** Every non-empty set bounded above has a supremum.
2. **Monotone Convergence Theorem:** Every bounded monotone sequence converges.
3. **Nested Interval Property:** Every nested sequence of closed intervals
   $I_1 \supseteq I_2 \supseteq \cdots$ with $\mathrm{length}(I_n) \to 0$ has exactly one point in
   $\bigcap I_n$.
4. **Bolzano-Weierstrass Property:** Every bounded sequence has a convergent subsequence.
5. **Cauchy Completeness:** Every Cauchy sequence converges.

**Proposition 1.6.** In any ordered field, (1) $\iff$ (2) $\iff$ (3) $\iff$ (4) $\iff$ (5).

_Proof (outline)._ We have shown $(1) \Rightarrow (2)$ (MCT in Section 2.2), $(2) \Rightarrow (4)$
(via the bisection argument in Bolzano-Weierstrass), $(4) \Rightarrow (5)$ (Cauchy completeness
.../1-number-and-algebra/3_proof-and-logic In Section 2.3), and $(5) \Rightarrow (1)$ can be shown
by constructing a Cauchy sequence converging To $\sup S$ from the approximation property. The
equivalence $(1) \Rightarrow (3)$ follows from the Nested interval argument, and
$(3) \Rightarrow (1)$ follows by constructing nested intervals that Shrink to $\sup S$.
$\blacksquare$

_Remark._ The field $\mathbb{Q}$ satisfies none of these properties, which is why it must be
Extended to $\mathbb{R}$ for analysis.

### 1.8 Intuition: Why Do We Need Completeness?

The completeness axiom is the single property that separates $\mathbb{R}$ from $\mathbb{Q}$ and
makes calculus possible. Without completeness, limits of Cauchy sequences might not exist, the
intermediate value theorem fails, and the Bolzano-Weierstrass theorem is false.

**A concrete failure in $\mathbb{Q}$.** Consider the sequence $(x_n)$ in $\mathbb{Q}$ defined by
$x_1 = 1$ and $x_{n+1} = \frac{x_n}{2} + \frac{1}{x_n}$. This is Newton's method for solving
$x^2 = 2$. The sequence is Cauchy (the terms get arbitrarily close to each other) and every term
is rational. But the limit is $\sqrt{2} \notin \mathbb{Q}$. In $\mathbb{Q}$, this Cauchy sequence
does not converge. In $\mathbb{R}$, completeness guarantees that it does.

**Why the other axioms are not enough.** The rational numbers $\mathbb{Q}$ form an ordered field:
they satisfy all the field axioms and the order axioms. But $\mathbb{Q}$ has "gaps" --- the
irrational numbers are missing. The completeness axiom fills these gaps by requiring that every
"gap" (every set bounded above) has a supremum in $\mathbb{R}$. This is why $\mathbb{R}$ is the
smallest complete ordered field containing $\mathbb{Q}$.

**Connection to physics.** Physical measurements are inherently finite, but the mathematical models
we use to describe nature (differential equations, probability theory, quantum mechanics) assume
the continuum. The completeness of $\mathbb{R}$ is what makes these models well-defined: it
guarantees that the solutions to differential equations exist, that probabilities sum to 1, and that
infinite processes (like series and integrals) converge when they "should."

### 1.9 Worked Example: Supremum of a Set Defined by a Condition

**Problem.** Find $\sup(S)$ and $\inf(S)$ where $S = \{x \in \mathbb{R} : x^2 - 3x + 2 < 0\}$.

<details>
<summary>Solution</summary>

Factor: $x^2 - 3x + 2 = (x - 1)(x - 2)$. The inequality $(x - 1)(x - 2) < 0$ holds when
$1 < x < 2$. Therefore $S = (1, 2)$.

$\sup(S) = 2$ (the least upper bound; $2 \notin S$ but every element of $S$ is less than 2).
$\inf(S) = 1$ (the greatest lower bound; $1 \notin S$ but every element of $S$ is greater than 1).

Note that neither the supremum nor the infimum belongs to $S$, since $S$ is an open interval. This
illustrates that the completeness axiom guarantees the _existence_ of $\sup$ and $\inf$ in
$\mathbb{R}$, but they need not be elements of the set.

**Approximation property check:** For any $\varepsilon > 0$, there exists $x \in S$ with
$2 - \varepsilon < x \leq 2$ (take $x = 2 - \varepsilon/2$ for small enough $\varepsilon$, as long
as $x > 1$). This confirms that $\sup(S) = 2$. $\blacksquare$

</details>

### 1.9 Intuition: Why Is Completeness the Key Axiom?

The real numbers are the unique complete ordered field. The completeness axiom says that every non-empty set bounded above has a least upper bound, which is the property that fills in all the "gaps" in the rationals. The rational numbers have holes: for example, the set of rationals less than $\sqrt{2}$ is bounded above but has no supremum in $\mathbb{Q}$ because $\sqrt{2}$ is irrational. Completeness fills these holes, ensuring that limits of Cauchy sequences always converge.

The practical consequence is that calculus works. Without completeness, sequences that "should" converge might not. The sequence $1, 1.4, 1.41, 1.414, \ldots$ (successive approximations to $\sqrt{2}$) is Cauchy in $\mathbb{Q}$ but has no limit there. In $\mathbb{R}$, completeness guarantees convergence. The supremum and infimum are the workhorses of analysis: they allow you to define limits, continuity, and integrals without assuming the limit point exists. The supremum is the "best possible upper bound," which is weaker than requiring a maximum (an element of the set that achieves the bound). This distinction is crucial: $\sup(0,1) = 1$ but $\max(0,1)$ does not exist.

<aside aria-label="Common Pitfall" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall</p><p>The completeness axiom is often misstated as "every bounded set has a supremum." The set must be non-empty. Also, completeness does not say every set has a maximum;</p>
$\sup(S)$ need not belong to $S$. For example, $\sup\{1/n : n \in \mathbb{N}\} = 1$ which belongs to
the set, but $\sup(0, 1) = 1$ which does not belong to $(0, 1)$.

- **Do not confuse supremum with maximum.** The maximum of a set must be an element of the set; the
  supremum need not be. If $\sup(S) \in S$, then $\sup(S) = \max(S)$.
- **The completeness axiom is specific to $\mathbb{R}$.** In $\mathbb{Q}$, the set
  $\{x \in \mathbb{Q} : x^2 < 2\}$ is bounded above but has no supremum in $\mathbb{Q}$ (since
  $\sqrt{2} \notin \mathbb{Q}$).

</aside>## Cross-References

- **[Site Home](../../):** Main landing page for Mathematics notes.
- **[Linear Algebra](../../2-linear-algebra/):** Vector spaces, matrices, and linear transformations.
- **[Real Analysis](../../3-real-analysis/):** Rigorous treatment of real numbers and calculus.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.
