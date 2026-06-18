---
title: Recurrence Relations
tags:
  - Computing
  - University
description: ""s formula). $\blacksquare$

</details>

**Worked Example.** Use generating functions to solve $a_n = 2a_{n-1} + 1$ with $a_0 = 0$.

<details>
<summary>Solution</summary>

Let $G(x) = \sum_{n=0}^{\infty} a_n x^n$.

$$G(x) = \sum_{n=1}^{\infty} (2a_{n-1} + 1) x^n = 2x G(x) + \sum_{n=1}^{\infty} x^n = 2x G(x) + \frac{x}{1-x}$$

$$(1 - 2x) G(x) = \frac{x}{1-x} \implies G(x) = \frac{x}{(1-x)(1-2x)}$$

Partial fractions: $\frac{x}{(1-x)(1-2x)} = \frac{A}{1-x} + \frac{B}{1-2x}$.

$x = A(1-2x) + B(1-x)$. Setting $x = 0$: $A + B = 0$So $B = -A$. Setting $x = 1$: $1 = -A$So
$A = -1$, $B = 1$.

$G(x) = \frac{1}{1-2x} - \frac{1}{1-x}$Giving $a_n = 2^n - 1$. $\blacksquare$

</details>

:::caution Common Pitfall Generating functions are formal power series; they may not converge for
any $x \neq 0$. Convergence Is irrelevant for combinatorial applications -- the series is
manipulated algebraically.

### 6.5 The Master Theorem

The Master Theorem provides asymptotic solutions to recurrences of the form

$$T(n) = a\,T(n/b) + f(n)$$

Where $a \geq 1$, $b \gt 1$ are constants and $f(n)$ is asymptotically positive. Define
$c_{\mathrm{crit{}} = \log_b a$ (the **critical exponent**).

**Theorem 6.1 (Master Theorem).** Let $T(n)$ be defined as above.

**Case 1:** If $f(n) = O(n^c)$ for some $c \lt c_{\mathrm{crit{}}$Then
$T(n) = \Theta(n^{c_{\mathrm{crit{}}})$.

**Case 2:** If $f(n) = \Theta(n^{c_{\mathrm{crit{}}} \log^k n)$ for some $k \geq 0$Then
$T(n) = \Theta(n^{c_{\mathrm{crit{}}} \log^{k+1} n)$.

**Case 3:** If $f(n) = \Omega(n^c)$ for some $c \gt c_{\mathrm{crit{}}$And
$a\,f(n/b) \leq \delta\, f(n)$ For some $\delta \lt 1$ and sufficiently large $n$ (the **regularity
condition**), then $T(n) = \Theta(f(n))$.

**Worked Example.** Solve $T(n) = 3T(n/2) + n^2$.

<details>
<summary>Solution</summary>

$a = 3$, $b = 2$, $f(n) = n^2$. Critical exponent: $c_{\mathrm{crit{}} = \log_2 3 \approx 1.585$.

Since $f(n) = n^2 = \Omega(n^c)$ for any $c \lt 2$And $2 \gt 1.585 = c_{\mathrm{crit{}}$We are in
Case 3 (provided the regularity condition holds). Check:
$3 \cdot (n/2)^2 = 3n^2/4 = 0.75\, n^2 \leq \delta\, n^2$ For $\delta = 0.75 \lt 1$. ✓

Therefore $T(n) = \Theta(n^2)$.

</details>

**Worked Example.** Solve $T(n) = 2T(n/2) + n$.

<details>
<summary>Solution</summary>

$a = 2$, $b = 2$, $f(n) = n$. Critical exponent: $c_{\mathrm{crit{}} = \log_2 2 = 1$.

$f(n) = n = \Theta(n^1 \log^0 n)$So we are in Case 2 with $k = 0$.

Therefore $T(n) = \Theta(n \log n)$.

</details>

**Worked Example.** Solve $T(n) = 4T(n/2) + n$.

<details>
<summary>Solution</summary>

$a = 4$, $b = 2$, $f(n) = n$. Critical exponent: $c_{\mathrm{crit{}} = \log_2 4 = 2$.

$f(n) = n = O(n^c)$ for any $c \gt 0$ with $c \lt 2$So we are in Case 1.

Therefore $T(n) = \Theta(n^2)$.

</details>

**Proof sketch of the Master Theorem.** Expand the recurrence tree. At level $j$ (root is level 0),
There are $a^j$ subproblems, each of size $n/b^j$Each contributing $f(n/b^j)$ work. The tree has
$\log_b n$ levels, with $a^{\log_b n} = n^{c_{\mathrm{crit{}}}$ leaves. The total work is

$$T(n) = \Theta\!\left(n^{c_{\mathrm{crit}}\right) + \sum_{j=0}^{\log_b n - 1} a^j \, f(n/b^j)}$$

- **Case 1:** $f(n) = O(n^c)$ with $c \lt c_{\mathrm{crit{}}$. The sum is dominated by the leaves,
  giving $T(n) = \Theta(n^{c_{\mathrm{crit{}}})$.
- **Case 2:** $f(n) = \Theta(n^{c_{\mathrm{crit{}}} \log^k n)$. Each level contributes the same
  order, with $\log_b n$ levels, giving $T(n) = \Theta(n^{c_{\mathrm{crit{}}} \log^{k+1} n)$.
- **Case 3:** $f(n) = \Omega(n^c)$ with $c \gt c_{\mathrm{crit{}}$. The root level dominates, giving
  $T(n) = \Theta(f(n))$. The regularity condition $a\,f(n/b) \leq \delta\,f(n)$ ensures the root
  dominates all levels below. The Master Theorem does not apply to recurrences like
  $T(n) = T(n-1) + n$ (not of the form $a\,T(n/b) + f(n)$). Also, if $f(n)$ falls between cases
  (e.g., $f(n) = n \log n$ with $c_{\mathrm{crit{}} = 1$), the Master Theorem does not apply and the
  Akra--Bazzi method should be used Instead.
:::
