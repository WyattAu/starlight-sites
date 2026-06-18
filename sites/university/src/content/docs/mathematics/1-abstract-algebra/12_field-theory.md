---
title: Field Theory
tags:
  - Mathematics
  - University
description: ""s Theorem).** If $F$ is a field and $f \in F[x]$ is irreducible, then
$E = F[x] / (f)$ is a field extension of $F$ containing a root of $f$.

_Proof._ Since $f$ is irreducible and $F[x]$ is a PID, $(f)$ is a maximal ideal, so $E = F[x]/(f)$
Is a field. The element $\alpha = x + (f) \in E$ satisfies
$f(\alpha) = f(x + (f)) = f(x) + (f) = (f) = 0$ I.e., $\alpha$ is a root of $f$. $\blacksquare$

### 12.4 Finite Fields

**Theorem 12.5.** For every prime $p$ and every $n \geq 1$There exists a field of order $p^n$ Unique
up to isomorphism.

_Proof (existence)._ Consider the splitting field of $f(x) = x^{p^n} - x$ over $\mathbb{F}_p$. The
set of roots of $f$ in the splitting field forms a field (since roots are closed under addition,
Multiplication, and taking inverses), and it has exactly $p^n$ elements. $\blacksquare$

**Proposition 12.6.** The multiplicative group $\mathbb{F}_{p^n}^*$ of a finite field is cyclic.

_Proof._ $\mathbb{F}_{p^n}^*$ is a finite abelian group of order $p^n - 1$. Let $m$ be the largest
order of any element. By Lagrange, every element's order divides $m$. So $x^m = 1$ for all
$x \in \mathbb{F}_{p^n}^*$Meaning every element is a root of $x^m - 1$. Since $x^m - 1$ has at most
$m$ roots in a field, $p^n - 1 \leq m$. But $m$ divides $p^n - 1$ So $m = p^n - 1$. $\blacksquare$

### 12.5 Algebraic Closure

A field $F$ is **algebraically closed** if every non-constant polynomial in $F[x]$ has a root in
$F$.

**Theorem 12.7 (Fundamental Theorem of Algebra).** $\mathbb{C}$ is algebraically closed.

_Remark._ Every field $F$ has an **algebraic closure** $\overline{F}$: an algebraically closed field
That is an algebraic extension of $F$. The algebraic closure is unique up to $F$-isomorphism. For
example, $\overline{\mathbb{Q}}$ is the field of all algebraic numbers. It is countable and
Infinite-dimensional over $\mathbb{Q}$.

### 12.6 Worked Examples: Field Extensions

**Problem.** Compute $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]$ and find the minimal polynomial
of $\sqrt{2} + \sqrt{3}$ over $\mathbb{Q}$.

<details>
<summary>Solution</summary>

_Solution._ First, $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$ since $x^2 - 2$ is irreducible over
$\mathbb{Q}$ (by Eisenstein with $p = 2$). Then $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$: if
$\sqrt{3} = a + b\sqrt{2}$ With $a, b \in \mathbb{Q}$Squaring gives
$3 = a^2 + 2b^2 + 2ab\sqrt{2}$Forcing $ab = 0$. If $b = 0$: $a^2 = 3$Impossible in $\mathbb{Q}$. If
$a = 0$: $2b^2 = 3$Impossible in $\mathbb{Q}$. So
$[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2$.

By the tower law: $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 2 \cdot 2 = 4$.

For the minimal polynomial of $\alpha = \sqrt{2} + \sqrt{3}$: compute powers.
$\alpha^2 = 5 + 2\sqrt{6}$So $\alpha^2 - 5 = 2\sqrt{6}$Giving $\alpha^4 - 10\alpha^2 + 25 = 24$
Hence $\alpha^4 - 10\alpha^2 + 1 = 0$. One checks that $f(x) = x^4 - 10x^2 + 1$ is irreducible over
$\mathbb{Q}$ (no rational roots, no quadratic factor), so $m_\alpha = x^4 - 10x^2 + 1$.
$\blacksquare$

</details>

**Problem.** Show that $\mathbb{Q}(\sqrt[4]{2})$ is not a Galois extension of $\mathbb{Q}$.

<details>
<summary>Solution</summary>

_Solution._ The minimal polynomial of $\sqrt[4]{2}$ is $x^4 - 2$ (irreducible by Eisenstein with
$p = 2$), So $[\mathbb{Q}(\sqrt[4]{2}) : \mathbb{Q}] = 4$. The roots of $x^4 - 2$ are $\sqrt[4]{2}$,
$i\sqrt[4]{2}$ $-\sqrt[4]{2}$, $-i\sqrt[4]{2}$. The root $i\sqrt[4]{2}$ is not in
$\mathbb{Q}(\sqrt[4]{2}) \subset \mathbb{R}$.

Therefore $\mathbb{Q}(\sqrt[4]{2})$ is not the splitting field of $x^4 - 2$And
$|\mathrm{Aut}(\mathbb{Q}(\sqrt[4]{2})/\mathbb{Q})| = 2 < 4$. The extension is not Galois.
$\blacksquare$

</details>

**Problem.** Construct $\mathbb{F}_9$ as a quotient of $\mathbb{F}_3[x]$.

<details>
<summary>Solution</summary>

_Solution._ We need an irreducible polynomial of degree $2$ in $\mathbb{F}_3[x]$. Check $x^2 + 1$:
$f(0) = 1$, $f(1) = 2$, $f(2) = 4 + 1 = 5 \equiv 2 \pmod{3}$. No roots, so irreducible. Thus
$\mathbb{F}_9 = \mathbb{F}_3[x]/(x^2 + 1)$.

Let $\alpha = x + (x^2 + 1)$So $\alpha^2 = -1 = 2$ in $\mathbb{F}_3$. Then:
$\mathbb{F}_9 = \{a + b\alpha : a, b \in \mathbb{F}_3\} = \{0, 1, 2, \alpha, 1+\alpha, 2+\alpha, 2\alpha, 1+2\alpha, 2+2\alpha\}$.

Multiplication: $(a + b\alpha)(c + d\alpha) = (ac + 2bd) + (ad + bc)\alpha$. $\blacksquare$

</details>

### 12.7 The Primitive Element Theorem

**Theorem 12.8 (Primitive Element Theorem).** Every finite separable extension $E/F$ is simple:
There exists $\theta \in E$ such that $E = F(\theta)$.

_Proof (sketch)._ If $F$ is infinite, it suffices to find $\theta = \alpha + c\beta$ for suitable
$c \in F$ When $E = F(\alpha, \beta)$. Only finitely many values of $c$ fail to work. For $F$ of
characteristic $0$Every finite extension is separable, so every finite extension of $\mathbb{Q}$ is
simple. $\blacksquare$

**Corollary 12.9.** Every finite extension of $\mathbb{Q}$ is simple.

**Example.** $\mathbb{Q}(\sqrt{2}, \sqrt{3}) = \mathbb{Q}(\sqrt{2} + \sqrt{3})$.

