---

date: 2026-07-23T21:57:32+01:00
title: "Separation Axioms"
tags:
  - University Maths
description: "The separation hierarchy from T0 to T6, every implication proved: T1 via closed singletons, unique limits in Hausdorff spaces, compact Hausdorff is normal, Urysohn's lemma with the full dyadic construction, Tietze extension, and the metric case where every level holds."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "9 Topology", "url": "https://mathematics.wyattau.com/9-topology"}, {"name": "8_separation Axioms", "url": "https://mathematics.wyattau.com/9-topology/8_separation-axioms"}]
}
</script>

### 8.1 Overview

Separation axioms formalise how well points and closed sets can be "separated" by open sets.

### 8.2 $T_0$ (Kolmogorov)

**Definition.** $X$ is $T_0$ if for any two distinct points $x, y \in X$, at least one has an open
neighbourhood not containing the other.

**Example 8.1.** The Sierpiński space $\{0, 1\}$ with topology $\{\emptyset, \{0\}, \{0, 1\}\}$ is
$T_0$ but not $T_1$.

### 8.3 $T_1$ (Fréchet)

**Definition.** $X$ is $T_1$ if for any two distinct points $x, y \in X$, there exist open sets
$U, V$ with $x \in U$, $y \notin U$ and $y \in V$, $x \notin V$.

**Proposition 8.1.** $X$ is $T_1$ if and only if every singleton $\{x\}$ is closed.

**Proof.** ($\Rightarrow$) Fix $x$ and let $y \neq x$. $T_1$ gives an open set $U_y$ with
$y \in U_y$ and $x \notin U_y$. Then $X \setminus \{x\} = \bigcup_{y \neq x} U_y$ is a union of
open sets, hence open; so $\{x\}$ is closed.

($\Leftarrow$) Suppose every singleton is closed and let $x \neq y$. Then $X \setminus \{x\}$ is
open, contains $y$, excludes $x$; and $X \setminus \{y\}$ is open, contains $x$, excludes $y$. $\blacksquare$

**Example 8.2.** Any infinite set with the cofinite topology is $T_1$ but not $T_2$.

### 8.4 $T_2$ (Hausdorff)

**Definition.** $X$ is **Hausdorff** ($T_2$) if for any two distinct points $x, y \in X$, there
exist disjoint open sets $U, V$ with $x \in U$ and $y \in V$.

**Proposition 8.2.** Every metric space is Hausdorff.

**Proof.** Let $x \neq y$ and set $\delta = d(x, y) > 0$. The open balls $B(x, \delta/2)$ and
$B(y, \delta/2)$ are disjoint: if $z$ lay in both, the triangle inequality would give
$\delta = d(x, y) \leq d(x, z) + d(z, y) < \delta/2 + \delta/2 = \delta$, a contradiction. $\blacksquare$

**Proposition 8.3.** In a Hausdorff space, every convergent sequence has a unique limit.

**Proof.** Suppose $x_n \to x$ and $x_n \to y$ with $x \neq y$, and choose disjoint open
$U \ni x$, $V \ni y$. Convergence gives $N_1$ with $x_n \in U$ for all $n \geq N_1$ and $N_2$ with
$x_n \in V$ for all $n \geq N_2$. For $n \geq \max(N_1, N_2)$ the point $x_n$ lies in
$U \cap V = \emptyset$, which is impossible. $\blacksquare$

Uniqueness of limits is the practical dividend of $T_2$. In a non-Hausdorff space it fails
spectacularly: in the cofinite topology on an infinite set, a sequence of distinct points converges
to *every* point of the space simultaneously, since each open neighbourhood misses only finitely
many terms.

**Proposition 8.4.** $T_2 \implies T_1 \implies T_0$.

**Proof.** $T_2 \Rightarrow T_1$: given disjoint open $U \ni x$, $V \ni y$, the set $U$ contains
$x$ but not $y$ (as $y \in V$ and $U \cap V = \emptyset$), and $V$ contains $y$ but not $x$.
$T_1 \Rightarrow T_0$ is immediate: the $T_1$ witnesses are a fortiori $T_0$ witnesses. $\blacksquare$

### 8.5 $T_3$ (Regular) and $T_4$ (Normal)

**Definition.** $X$ is **regular** ($T_3$) if it is $T_1$ and for any point $x$ and closed set $F$
with $x \notin F$, there exist disjoint open sets $U, V$ with $x \in U$ and $F \subseteq V$.

**Definition.** $X$ is **normal** ($T_4$) if it is $T_1$ and for any two disjoint closed sets
$F_1, F_2$, there exist disjoint open sets $U, V$ with $F_1 \subseteq U$ and $F_2 \subseteq V$.

**Proposition 8.5.** $T_4 \implies T_3 \implies T_2$ (assuming $T_1$).

**Proof.** $T_4 \Rightarrow T_3$: let $x \notin F$ with $F$ closed. By $T_1$ and Proposition 8.1,
$\{x\}$ is closed. Normality applied to the disjoint closed sets $\{x\}$ and $F$ produces exactly
the separating open sets that regularity demands.

$T_3 \Rightarrow T_2$: let $x \neq y$. By $T_1$, $\{y\}$ is closed and $x \notin \{y\}$; regularity
separates the point $x$ from the closed set $\{y\}$. $\blacksquare$

The $T_1$ hypothesis is doing real work in both steps; it converts a *point* into a *closed set*,
which is the currency the higher axioms trade in.

**Proposition 8.6.** Every compact Hausdorff space is normal.

**Lemma (points versus compact sets).** In a Hausdorff space $X$: (a) if $K \subseteq X$ is compact
and $x \notin K$, there are disjoint open sets $U \ni x$ and $V \supseteq K$; (b) every compact
$K \subseteq X$ is closed.

**Proof.** (a) For each $y \in K$, Hausdorffness gives disjoint open $U_y \ni x$ and $V_y \ni y$.
The family $\{V_y\}_{y \in K}$ is an open cover of $K$, so compactness extracts a finite subcover
$K \subseteq V_{y_1} \cup \cdots \cup V_{y_n}$. Set $U = U_{y_1} \cap \cdots \cap U_{y_n}$ and
$V = V_{y_1} \cup \cdots \cup V_{y_n}$: these are open, $x \in U$, $K \subseteq V$, and they are
disjoint because $U$ misses each $U_{y_i}$; hence misses $V_{y_i}$, hence misses $V$.

(b) Let $x \notin K$. By (a) there is an open $U \ni x$ with $U \cap K = \emptyset$. Every point of
$X \setminus K$ therefore has an open neighbourhood contained in $X \setminus K$, so $X \setminus K$
is open and $K$ is closed. $\blacksquare$

**Proof of Proposition 8.6.** Let $F_1, F_2$ be disjoint closed sets in the compact Hausdorff $X$.
By part (b) of the lemma, $F_2$ is compact. For each $x \in F_1$, part (a) gives disjoint open
$U_x \ni x$ and $V_x \supseteq F_2$. The family $\{U_x\}_{x \in F_1}$ covers the compact $F_1$, so
$F_1 \subseteq U_{x_1} \cup \cdots \cup U_{x_n}$ for some $x_1, \dots, x_n \in F_1$. Set
$U = U_{x_1} \cup \cdots \cup U_{x_n}$ and $V = V_{x_1} \cap \cdots \cap V_{x_n}$. Then $U$ and $V$
are open, $F_1 \subseteq U$, $F_2 \subseteq V$, and $U \cap V = \emptyset$ because $U_{x_i} \cap V = \emptyset$
for each $i$ (each $U_{x_i}$ misses its own $V_{x_i}$, and $V \subseteq V_{x_i}$). $\blacksquare$

### 8.6 Urysohn's Lemma

**Theorem 8.1 (Urysohn's Lemma).** If $X$ is normal and $F_1, F_2$ are disjoint closed subsets, then
there exists a continuous function $f : X \to [0, 1]$ with $f|_{F_1} = 0$ and $f|_{F_2} = 1$.

This is a fundamental tool in topology, used to construct partitions of unity and to prove extension
theorems. It deserves a complete proof.

**Lemma (shrinking).** $X$ is normal if and only if for every closed $C$ and open $U$ with
$C \subseteq U$, there is an open $V$ with

$$
C \subseteq V \subseteq \overline{V} \subseteq U.
$$

**Proof.** ($\Leftarrow$) Given disjoint closed $F_1, F_2$, apply the property to $C = F_1$ and
$U = X \setminus F_2$ (open, since $F_2$ is closed): get open $V$ with $F_1 \subseteq V$ and
$\overline{V} \subseteq X \setminus F_2$. Then $V$ and $X \setminus \overline{V}$ are disjoint open
sets containing $F_1$ and $F_2$ respectively.

($\Rightarrow$) The sets $C$ and $X \setminus U$ are disjoint and closed. Normality gives disjoint
open $V \supseteq C$ and $W \supseteq X \setminus U$. Then $V \subseteq X \setminus W$; as
$X \setminus W$ is closed, $\overline{V} \subseteq X \setminus W \subseteq U$. $\blacksquare$

**Proof of Urysohn's Lemma.** Let $D = \mathbb{Q} \cap [0, 1]$, enumerated as
$r_0 = 0, r_1 = 1, r_2, r_3, \dots$ We build open sets $U_r$ for $r \in D$ satisfying

$$
F_1 \subseteq U_0, \qquad U_1 = X \setminus F_2, \qquad r < s \implies \overline{U_r} \subseteq U_s. \tag{$*$}
$$

*Initialisation.* Set $U_1 = X \setminus F_2$, which is open. Applying the shrinking lemma to
$C = F_1$ and $U = U_1$ yields an open $U_0$ with $F_1 \subseteq U_0 \subseteq \overline{U_0} \subseteq U_1$.
Property ($*$) holds on the chain $\{r_0, r_1\}$.

*Inductive step.* Suppose $U_{r_0}, \dots, U_{r_n}$ satisfy ($*$) pairwise, and consider $r_{n+1}$.
Let $p = \max\{r_i : r_i < r_{n+1}\}$ and $q = \min\{r_i : r_i > r_{n+1}\}$; these exist since the
finite chain contains $0 < r_{n+1}$'s neighbours, and $p < r_{n+1} < q$. Apply the shrinking lemma
to $C = \overline{U_p}$ (closed) and $U = U_q$ (open, with $C \subseteq U$ by the inductive
hypothesis): it returns an open $U_{r_{n+1}}$ with

$$
\overline{U_p} \subseteq U_{r_{n+1}} \subseteq \overline{U_{r_{n+1}}} \subseteq U_q.
$$

Old pairs are untouched. New pairs satisfy ($*$): if $r < r_{n+1}$ then $r \leq p$, so
$\overline{U_r} \subseteq \overline{U_p} \subseteq U_{r_{n+1}}$ (where for $r = p$ the inclusion
$\overline{U_p} \subseteq U_{r_{n+1}}$ is the one just established); if $r > r_{n+1}$ then
$r \geq q$, so $\overline{U_{r_{n+1}}} \subseteq U_q \subseteq U_r$.

*The function.* Define

$$
f(x) = \inf \{ r \in D : x \in U_r \}.
$$

The set is nonempty since $x \in U_1$ always, so $f$ is well defined with $0 \leq f(x) \leq 1$.
If $x \in F_1$ then $x \in U_0$, so $f(x) = 0$. If $x \in F_2 = X \setminus U_1$ then
$x \notin U_r$ for every $r < 1$, so $f(x) \geq 1$, i.e. $f(x) = 1$.

*Continuity.* It suffices to show $\{f < a\}$ and $\{f > a\}$ are open for every real $a$, since
these intervals generate the topology of $[0, 1]$.

First, $\{f < a\} = \bigcup_{r < a} U_r$: if $x \in U_r$ for some $r < a$ then $f(x) \leq r < a$;
conversely if $f(x) < a$ then, by definition of the infimum over the dense set $D$, some
$r < a$ has $x \in U_r$. So $\{f < a\}$ is open.

Second, $\{f > a\} = \bigcup_{r > a} (X \setminus \overline{U_r})$, which is open as a union of
open sets. For the inclusion ($\supseteq$): if $x \notin \overline{U_r}$ for some $r > a$, then
$x \notin U_s$ for every $s \leq r$ (for $s < r$, $U_s \subseteq \overline{U_s} \subseteq U_r$; for
$s = r$, $U_r \subseteq \overline{U_r}$), so the indexing set has infimum $\geq r > a$. For
($\subseteq$): if $f(x) > a$, choose $t \in D$ with $a < t < f(x)$, so $x \notin U_t$; then choose
$s \in D$ with $a < s < t$, so $\overline{U_s} \subseteq U_t$ by ($*$), whence
$x \notin \overline{U_s}$; placing $x$ in the right-hand side.

Both preimage types are open, so $f$ is continuous. $\blacksquare$

The construction is worth pausing over: normality is used exactly once per rational, through the
shrinking lemma, to interpolate open sets between $\overline{U_p}$ and $U_q$. The density of
$\mathbb{Q}$ in $[0, 1]$ is what lets countably many interpolations determine a continuous function.
The lemma also proves the first half of the next proposition.

### 8.7 Tychonoff Spaces ($T_{3.5}$)

**Definition.** A space $X$ is **completely regular** (**Tychonoff**, $T_{3.5}$) if it is $T_1$ and
for every point $x$ and closed set $F$ with $x \notin F$, there exists a continuous function
$f : X \to [0, 1]$ with $f(x) = 0$ and $f(F) = 1$.

**Proposition 8.7.** Every normal space is completely regular. Every completely regular space is
regular: $T_4 \implies T_{3.5} \implies T_3$.

**Proof.** $T_4 \Rightarrow T_{3.5}$: given a point $x$ and a closed set $F$ with $x \notin F$,
$T_1$ makes $\{x\}$ closed, and $\{x\} \cap F = \emptyset$. Urysohn's lemma provides a continuous
$f : X \to [0, 1]$ with $f = 0$ on $\{x\}$ and $f = 1$ on $F$.

$T_{3.5} \Rightarrow T_3$: given $x \notin F$ closed, complete regularity gives $f$ with
$f(x) = 0$ and $f(F) = 1$. Then $U = f^{-1}([0, 1/2))$ and $V = f^{-1}((1/2, 1])$ are disjoint
open sets (preimages of open subsets of $[0,1]$) with $x \in U$ and $F \subseteq V$. $\blacksquare$

**Example 8.3.** The Sorgenfrey line (lower limit topology on $\mathbb{R}$) is Tychonoff but not
normal.

### 8.8 The Tietze Extension Theorem

**Theorem 8.2 (Tietze Extension Theorem).** If $X$ is normal, $F \subseteq X$ is closed, and
$f : F \to [a, b]$ is continuous, then $f$ extends to a continuous function $\tilde{f} : X \to [a, b]$
with $\tilde{f}|_F = f$.

**Proof.** Rescale so that $f : F \to [-1, 1]$.

*The elementary step.* Let $A = f^{-1}([-1, -1/3])$ and $B = f^{-1}([1/3, 1])$. These are closed
in $X$: preimages of closed sets under a continuous map are closed in $F$, and $F$ is closed in $X$.
They are disjoint since $f$ cannot take values in both ranges. By Urysohn's lemma (with
$F_1 = A$, $F_2 = B$) there is a continuous $g_1 : X \to [-1/3, 1/3]$; strictly, Urysohn gives
values in $[0,1]$; compose with the affine map $t \mapsto (2t - 1)/3$ and use that $g_1 = -1/3$
on $A$ and $g_1 = 1/3$ on $B$; such that

$$
|f - g_1| \leq \tfrac{2}{3} \quad \text{on } F.
$$

Indeed: where $f \geq 1/3$ we have $g_1 = 1/3$, so $|f - g_1| \leq 2/3$; where $f \leq -1/3$
symmetrically; and where $|f| < 1/3$ both $f$ and $g_1$ lie in $(-1/3, 1/3)$ up to the bounds.

*Iteration.* Apply the same construction to $f - g_1 : F \to [-2/3, 2/3]$, rescaled by $3/2$: the
result is $g_2 : X \to [-2/9, 2/9]$ with $|f - g_1 - g_2| \leq (2/3)^2$ on $F$. Inductively,
$g_n : X \to \bigl[-\tfrac{1}{3}\bigl(\tfrac{2}{3}\bigr)^{n-1}, \tfrac{1}{3}\bigl(\tfrac{2}{3}\bigr)^{n-1}\bigr]$
with

$$
\Bigl| f - \sum_{k=1}^{n} g_k \Bigr| \leq \Bigl(\tfrac{2}{3}\Bigr)^{n} \quad \text{on } F.
$$

*Convergence.* The bounds satisfy $\sum_{n=1}^{\infty} \tfrac{1}{3}\bigl(\tfrac{2}{3}\bigr)^{n-1} = 1$,
so the Weierstrass M-test makes $g = \sum_{n=1}^{\infty} g_n$ uniformly convergent, hence continuous,
mapping $X$ into $[-1, 1]$. On $F$ the remainders $\bigl(\tfrac{2}{3}\bigr)^n \to 0$, so $g|_F = f$.
A linear rescaling between $[a, b]$ and $[-1, 1]$, applied to $f$ before and to $g$ after, gives the
theorem for every bounded interval. $\blacksquare$

### 8.9 Urysohn Metrization Theorem

**Theorem 8.3 (Urysohn Metrization Theorem).** Every second-countable regular $T_1$ space is
metrizable (its topology is induced by some metric).

_Proof sketch._ Embed $X$ into the Hilbert cube $[0, 1]^\omega$ using a countable collection of
Urysohn functions constructed from a countable basis. The Hilbert cube is metrizable, so the
subspace topology on $X$ is metrizable. $\blacksquare$

**Corollary 8.8.** A space is a separable metric space if and only if it is second-countable and
regular $T_1$.

### 8.10 Summary of Separation Axioms

The hierarchy of separation axioms:

$$
T_4 \implies T_{3.5} \implies T_3 \implies T_2 \implies T_1 \implies T_0
$$

Each implication is strict: there exist spaces satisfying each level but not the next.

### 8.11 Practice Problems

**Problem 1.** Show that the Zariski topology on $\mathbb{R}^n$ is $T_1$ but not $T_2$.

**Problem 2.** Prove that a closed subspace of a normal space is normal.

_Solution._ Let $X$ be normal and $F \subseteq X$ closed. Let $A, B$ be disjoint closed sets in
$F$. Then $A, B$ are also closed in $X$ (since $F$ is closed). By normality of $X$, there exist
disjoint open $U, V \subseteq X$ with $A \subseteq U$, $B \subseteq V$. Then $U \cap F$ and
$V \cap F$ are disjoint open in $F$ separating $A$ and $B$. $\blacksquare$

**Problem 3.** In the proof of Proposition 8.9, the separating sets $U_1 \cup U_2$ need not cover
$X$ even when $F_1 \cap F_2 = \emptyset$. Exhibit a point of $\mathbb{R}$ lying in neither, for
$F_1 = \{0\}$ and $F_2 = \{2\}$, and explain why this does not affect the proof.

**Problem 4.** Prove that a product of two $T_2$ spaces is $T_2$. Is the same true for $T_3$ or
$T_4$?

**Problem 5.** Show that the Sorgenfrey plane $\mathbb{R}_\ell \times \mathbb{R}_\ell$ is not normal,
even though the Sorgenfrey line $\mathbb{R}_\ell$ is normal. (Hint: the antidiagonal
$\{(x, -x) : x \in \mathbb{R}\}$ is closed and discrete.)

### 8.12 $T_5$ (Completely Normal) and $T_6$ (Perfectly Normal)

**Definition.** A space $X$ is **completely normal** ($T_5$) if every subspace of $X$ is normal.
Equivalently, for any two separated sets $A, B$ (i.e., $\bar{A} \cap B = A \cap \bar{B} = \emptyset$),
there exist disjoint open sets separating them.

**Definition.** A space $X$ is **perfectly normal** ($T_6$) if $X$ is normal and every closed set
is a $G_\delta$ set (a countable intersection of open sets).

**Proposition 8.9.** Every metric space is $T_6$ (perfectly normal).

**Proof.** *Normality.* For a nonempty closed $F$ define $d(x, F) = \inf\{d(x, y) : y \in F\}$.
The map $x \mapsto d(x, F)$ is continuous; in fact $|d(x, F) - d(y, F)| \leq d(x, y)$, since for
every $z \in F$, $d(x, F) \leq d(x, z) \leq d(x, y) + d(y, z)$, and taking the infimum over $z$
preserves the inequality. Given disjoint closed $F_1, F_2$, set

$$
U_1 = \{x : d(x, F_1) < d(x, F_2)\}, \qquad U_2 = \{x : d(x, F_2) < d(x, F_1)\}.
$$

These are open; preimages of $(-\infty, 0)$ under the continuous functions
$x \mapsto d(x, F_1) - d(x, F_2)$ and its negation; and they are disjoint by construction.
If $x \in F_1$ then $d(x, F_1) = 0$, while $d(x, F_2) > 0$: otherwise every ball around $x$ would
meet the closed set $F_2$, forcing $x \in \overline{F_2} = F_2$, contradicting disjointness. Hence
$F_1 \subseteq U_1$, and symmetrically $F_2 \subseteq U_2$.

*Closed sets are $G_\delta$.* Let $F$ be closed. Then

$$
F = \bigcap_{n=1}^{\infty} \{x : d(x, F) < 1/n\}.
$$

Each set on the right is open, and $F$ is contained in each since $d(x, F) = 0$ for $x \in F$.
Conversely, if $x$ lies in the intersection then $d(x, F) = 0$, so every ball around $x$ meets $F$,
i.e. $x \in \overline{F} = F$. $\blacksquare$

**Proposition 8.10.** $T_6 \implies T_5 \implies T_4$ (assuming $T_1$).

**Proof.** $T_5 \Rightarrow T_4$: $X$ is a subspace of itself, so "every subspace is normal"
specialises to normality.

$T_6 \Rightarrow T_5$: let $Y \subseteq X$ be any subspace; we show $Y$ is normal. Let $A, B$ be
disjoint closed subsets of $Y$. Write $A = Y \cap C_A$ and $B = Y \cap C_B$ with $C_A, C_B$ closed
in $X$, and let $f_A, f_B : X \to [0, 1]$ be continuous functions with
$C_A = f_A^{-1}(0)$ and $C_B = f_B^{-1}(0)$, which perfect normality of $X$ provides. Define

$$
h : Y \to [0, 1], \qquad h(y) = \frac{f_A(y)}{f_A(y) + f_B(y)}.
$$

The denominator never vanishes: $f_A(y) + f_B(y) = 0$ would force both to vanish, i.e.
$y \in C_A \cap C_B$, hence $y \in (C_A \cap Y) \cap (C_B \cap Y) = A \cap B = \emptyset$. So $h$
is continuous, with $h = 0$ on $A$ ($f_A = 0$ there, and $f_B > 0$ since $y \in A$ implies
$y \notin B$) and $h = 1$ on $B$ by symmetry. Then $h^{-1}([0, 1/2))$ and $h^{-1}((1/2, 1])$ are
disjoint open subsets of $Y$ containing $A$ and $B$. So $Y$ is normal, and $X$ is completely
normal. $\blacksquare$

Note the mechanism: perfect normality converts closed sets into *zero sets of functions*, and
zero sets can be averaged; quotients like $f_A / (f_A + f_B)$ are what mere normality, which only
provides open sets, cannot produce.

### 8.13 The Tychonoff Product Theorem

**Theorem 8.4 (Tychonoff Product Theorem).** The product of any collection of compact topological
spaces is compact (in the product topology).

This is one of the most important theorems in topology, equivalent to the axiom of choice.
The proof uses the finite intersection property and Zorn's lemma.

### 8.14 Stone-Cech Compactification

For a Tychonoff space $X$, the **Stone-Cech compactification** $\beta X$ is the unique compact
Hausdorff space containing $X$ as a dense subspace such that every continuous map from $X$ to a
compact Hausdorff space extends continuously to $\beta X$.

**Example.** $\beta \mathbb{N}$ is the set of ultrafilters on $\mathbb{N}$ with the topology
generated by $\{A^* : A \subseteq \mathbb{N}\}$ where $A^* = \{U \in \beta\mathbb{N} : A \in U\}$.

### 8.15 Additional Practice Problems

**Problem 6.** Prove that every compact subset of a Hausdorff space is closed.

**Problem 7.** Show that $\mathbb{Q}$ with the subspace topology from $\mathbb{R}$ is not a
$T_4$ space.

**Problem 8.** Prove that a space is Hausdorff if and only if the diagonal
$\Delta = \{(x, x) : x \in X\}$ is closed in $X \times X$.

## Intuition

Separation axioms measure how well a topological space distinguishes points and sets. $T_0$ means any two points can be separated by an open set containing one but not the other. $T_1$ means each point is closed (singletons are closed sets). $T_2$ (Hausdorff) means any two distinct points have disjoint neighbourhoods, you can draw a wall between them. Higher axioms ($T_3$, $T_4$) separate points from closed sets and closed sets from each other with open neighbourhoods. The hierarchy matters because compactness, convergence, and uniqueness of limits all depend on having enough separation. Without Hausdorff, limits are not unique and compact sets need not be closed.

### 8.16 Common Mistakes

**Mistake 1: Assuming that all separation axioms are independent.**
The separation axioms form a hierarchy: $T_4 \implies T_3 \implies T_2 \implies T_1 \implies T_0$. A space that is $T_3$ is automatically $T_2$, $T_1$, and $T_0$. Do not assume that a space can be $T_3$ without being $T_2$.

**Mistake 2: Confusing regularity with normality.**
Regularity ($T_3$) separates points from closed sets, while normality ($T_4$) separates disjoint closed sets from each other. A space can be regular without being normal. For example, the Sorgenfrey line is regular but not normal.

**Mistake 3: Assuming that subspaces of Hausdorff spaces are Hausdorff.**
The subspace of a Hausdorff space is Hausdorff. However, the product of Hausdorff spaces is Hausdorff, but the quotient of a Hausdorff space need not be Hausdorff. Do not assume that Hausdorffness is preserved under all constructions.

**Mistake 4: Forgetting that compact subsets of Hausdorff spaces are closed.**
In a Hausdorff space, every compact subset is closed. This is a key property that is often used to prove that certain sets are closed. However, the converse is not true: a closed subset of a Hausdorff space need not be compact (e.g., $\mathbb{R}$ is closed in itself but not compact).

**Mistake 5: Assuming that $T_1$ implies $T_2$.**
A $T_1$ space need not be $T_2$. The cofinite topology on an infinite set is $T_1$ (every singleton is closed) but not $T_2$ (any two nonempty open sets intersect). Do not assume that $T_1$ implies Hausdorff.

## Cross-References

- **[Metric Spaces](/9-topology/7_metric-spaces/)**: Every metric space satisfies all separation axioms (T6), providing a concrete class of well-separated spaces.
- **[Closed Sets, Closure, Interior, and Boundary](/9-topology/3_closed-sets-closure-interior-and-boundary/)**: Separation axioms formalise how well points and closed sets can be separated by open sets.
- **[Introduction to Algebraic Topology](/9-topology/9_introduction-to-algebraic-topology/)**: Compact Hausdorff spaces are normal, which is essential for proving results about covering spaces and quotient maps.

- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/1-classical-mechanics/)
- [Electromagnetism](https://physics.wyattau.com/3-electromagnetism/)
