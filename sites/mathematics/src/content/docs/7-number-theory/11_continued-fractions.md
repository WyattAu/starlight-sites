---
date: 2026-09-19T00:00:00.000Z
title: "Continued Fractions"
description: 'UNIVERSITY Mathematics notes: finite and infinite continued fractions, convergents, best rational approximation, periodic expansions of √D, and their number-theoretic applications.'
tags:
  - Mathematics
  - University
categories:
  - Mathematics
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Continued Fractions", "url": "https://mathematics.wyattau.com/7-number-theory/continued-fractions"}]
}
</script>

### 11.1 Finite Continued Fractions

**Definition.** For integers $a_0, a_1, \ldots, a_n$ with $a_i > 0$ for $i \geq 1$,

$$
[a_0; a_1, a_2, \ldots, a_n] = a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cdots + \cfrac{1}{a_n}}}
$$

Every rational number has exactly two such expansions — the last term must exceed 1, and one of
$[a_0; \ldots, a_n]$ vs $[a_0; \ldots, a_n - 1, 1]$ is chosen by convention:

$$
\frac{43}{19} = [2; 3, 1, 4]: \quad 43/19 = 2 + \tfrac{5}{19},\; 19/5 = 3 + \tfrac45,\; 5/4 = 1 + \tfrac14,\; 4.
$$

### 11.2 Convergents

The **convergents** $p_k/q_k = [a_0; a_1, \ldots, a_k]$ satisfy the recurrences

$$
p_k = a_k p_{k-1} + p_{k-2}, \qquad q_k = a_k q_{k-1} + q_{k-2},
$$

with $p_{-1} = 1, p_0 = a_0$, $q_{-1} = 0, q_0 = 1$. Two classical identities:

$$
p_k q_{k-1} - p_{k-1} q_k = (-1)^{k-1}, \qquad p_k q_{k-2} - p_{k-2} q_k = (-1)^k a_k.
$$

Convergents are **best rational approximations**: $p_k/q_k$ is closer to the true value than any
fraction with denominator $\leq q_k$. This is why continued fractions convert decimal approximations
into "likely" rationals — a standard exam task (feed $\pi \approx 3.14159$ and recover $22/7$,
$355/113$).

### 11.3 Infinite Continued Fractions

For irrational $\alpha$ the expansion is infinite and the convergents converge to $\alpha$
(monotone even/odd subsequences, with $|p_k/q_k - \alpha| < \frac{1}{q_k q_{k+1}}$).

Irrational **quadratic** surds have **eventually periodic** expansions — and conversely:

$$
\sqrt{7} = [2; \overline{1, 1, 1, 4}], \qquad \sqrt{13} = [3; \overline{1, 1, 1, 1, 6}].
$$

This is the algorithmic heart of Pell's equation
([Pell's Equation and Sums of Squares](/7-number-theory/9_sums-of-squares-and-pells-equation/)):
period length parity decides solvability of $x^2 - Dy^2 = \pm 1$, and convergents at period
boundaries are the solutions.

The most famous infinite expansion:

$$
e = [2; 1, 2, 1, 1, 4, 1, 1, 6, 1, \ldots], \qquad \pi \text{ has no known pattern}.
$$

### 11.4 Worked Problems

**Problem 1.** Expand $\sqrt{2} = [1; \overline{2}]$.

Let $x = 1 + \frac{1}{x}$ (the periodic self-similarity: $\sqrt 2 = 1 + (\sqrt 2 - 1)$ and
$\sqrt 2 + 1 = 1/\left(\sqrt 2 - 1\right)$). Then $x^2 = x + 1$, so $x = \frac{1+\sqrt5}{2}$ —
the **golden ratio** $\varphi = [1; 1, 1, \ldots]$: the "slowest" continued fraction, and why its
convergents (Fibonacci ratios) are the worst approximable numbers. For $\sqrt 2$:
$x = [1;\overline 2]$ follows from $x = 1 + \frac{1}{2 + \frac{1}{x - 1}}$-style substitution —
compute the expansion directly by the standard algorithm:

$a_0 = 1$, $m_1 = 1$, $d_1 = 1$, $a_1 = \lfloor (1 + 1)/1 \rfloor = 2$; iterate
$m_{k+1} = d_k a_k - m_k$, $d_{k+1} = (D - m_{k+1}^2)/d_k$, $a_{k+1} = \lfloor (a_0 + m_{k+1})/d_{k+1} \rfloor$.

**Problem 2.** Compute convergents of $[1; 2, 2, 2]$ and bound the error.

$p_0/q_0 = 1/1$, $p_1/q_1 = 3/2$, $p_2/q_2 = 7/5$, $p_3/q_3 = 17/12$; check
$17/12 = 1.41\overline{6}$ vs $\sqrt 2 = 1.41421\ldots$ — error $< \frac{1}{12 \cdot 29}$ by the
identity $p_3 q_2 - p_2 q_3 = (-1)^3$.

### 11.5 Common Pitfalls

- Every finite expansion terminates in a rational: irrationals have **infinite** expansions.
- Convergent denominators grow at least like Fibonacci numbers (all $a_k = 1$ worst case, golden
  ratio) — quoting this justifies "best approximation" claims.
- Periodic expansions detect **degree-2** irrationals exactly: $\sqrt[3]{2}$ is neither rational
  nor quadratic, so its expansion is aperiodic — do not claim periodicity for cube roots.
- The final partial quotient convention: forbid $a_n = 1$ in canonical form or you get two valid
  expansions and inconsistent convergent tables.

## See Also

- [Pell's Equation and Sums of Squares](/7-number-theory/9_sums-of-squares-and-pells-equation/)
- [The Distribution of Primes](/7-number-theory/10_distribution-of-primes/)
- [Primitive Roots and Discrete Logarithms](/7-number-theory/7_primitive-roots-and-discrete-logarithms/)


$$
\left| \alpha - \frac{p_k}{q_k} \right| < \frac{1}{q_k q_{k+1}} \leq \frac{1}{q_k^2}
$$

This bound is the theorem behind "best rational approximation": every convergent beats every
fraction with a smaller denominator. A typical exam question supplies a decimal expansion and a
denominator bound and asks you to recover the fraction; the method is to expand the decimal as a
continued fraction and stop at the last convergent within the bound.

For periodic expansions, quote the structure: $\sqrt{D}$ has partial quotients generated by the
recurrence on $m_k, d_k, a_k$, the period begins at $a_1$, and the last term of the period is
always $2a_0$. Citing these facts precisely earns the method marks even when the arithmetic is
long.
