---
title: Polynomial Rings
tags:
  - Mathematics
  - University
description: ""s Criterion).** Let
$f(x) = a_n x^n + \cdots + a_1 x + a_0 \in \mathbb{Z}[x]$. If there exists a prime $p$ such that:

1. $p$ divides $a_0, a_1, \ldots, a_{n-1}$.
2. $p$ does not divide $a_n$.
3. $p^2$ does not divide $a_0$.

Then $f$ is irreducible in $\mathbb{Q}[x]$.

_Proof._ Suppose $f = gh$ with $g, h \in \mathbb{Z}[x]$ (by Gauss's lemma), $\deg(g) = r \geq 1$
$\deg(h) = s \geq 1$, $r + s = n$. Modulo $p$: $\bar{f} = \bar{g}\bar{h} = \bar{a}_n x^n$ in
$(\mathbb{Z}/p\mathbb{Z})[x]$. Since $\mathbb{Z}/p\mathbb{Z}[x]$ is an integral domain,
$\bar{g} = bx^r$ And $\bar{h} = cx^s$ for some $b, c \in \mathbb{Z}/p\mathbb{Z}$. In particular, the
constant terms of $g$ and $h$ are both divisible by $p$. But then $p^2$ divides $a_0$Contradicting
condition (3). $\blacksquare$

### 10.3 Worked Examples

**Problem.** Show that $x^2 + 1$ is irreducible in $\mathbb{R}[x]$ but reducible in $\mathbb{C}[x]$.

<details>
<summary>Solution</summary>

_Solution._ In $\mathbb{R}[x]$: if $x^2 + 1 = (x + a)(x + b)$ with $a, b \in \mathbb{R}$Then
$a + b = 0$ and $ab = 1$Giving $-a^2 = 1$Which has no real solution. So $x^2 + 1$ is irreducible In
$\mathbb{R}[x]$.

In $\mathbb{C}[x]$: $x^2 + 1 = (x + i)(x - i)$. $\blacksquare$

</details>

**Problem.** Use the Euclidean algorithm to compute $\gcd(x^4 + x^3 + x^2 + x + 1, x^3 + 1)$ in
$\mathbb{Q}[x]$.

<details>
<summary>Solution</summary>

_Solution._ Apply the division algorithm:

$$x^4 + x^3 + x^2 + x + 1 = x(x^3 + 1) + (x^2 + x + 1)$$

$$x^3 + 1 = (x - 1)(x^2 + x + 1) + 2$$

Since $2$ is a non-zero constant (a unit in $\mathbb{Q}[x]$), the polynomials are coprime:
$\gcd(x^4 + x^3 + x^2 + x + 1, x^3 + 1) = 1$. $\blacksquare$

</details>

**Problem.** Show that $f(x) = x^5 - 5x + 3$ is irreducible in $\mathbb{Q}[x]$.

<details>
<summary>Solution</summary>

_Solution._ By the rational root theorem, possible rational roots are $\pm 1, \pm 3$. $f(1) = -1$,
$f(-1) = 7$, $f(3) = 216$, $f(-3) = -269$. No rational roots.

Since $\deg(f) = 5$If $f$ is reducible, it must have an irreducible factor of degree $1$ or $2$. No
degree-$1$ factor means no rational root. We check for degree-$2$ factors by reducing modulo $2$:
$\bar{f} = x^5 + x + 1$ in $\mathbb{F}_2[x]$. $\bar{f}(0) = 1$, $\bar{f}(1) = 1$So no roots in
$\mathbb{F}_2$. The only irreducible quadratic in $\mathbb{F}_2[x]$ is $x^2 + x + 1$. Division gives
$x^5 + x + 1 = (x^2+x+1)(x^3 + x^2) + 1$So $x^2 + x + 1$ does not divide $\bar{f}$.

Thus $f$ has no factor of degree $1$ or $2$So $f$ is irreducible in $\mathbb{Q}[x]$. $\blacksquare$

</details>

