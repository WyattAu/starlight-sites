---
date: 2026-09-19T00:00:00.000Z
title: "Divisibility and the Euclidean Algorithm"
description: 'UNIVERSITY Mathematics notes: divisibility, the division algorithm, gcd, Bézout''s identity and the extended Euclidean algorithm, with proofs and worked examples.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Divisibility and the Euclidean Algorithm", "url": "https://mathematics.wyattau.com/7-number-theory/divisibility-and-euclidean-algorithm"}]
}
</script>

### 1.1 Divisibility

**Definition.** For integers $a$ and $b$ with $a \neq 0$, we say $a$ **divides** $b$, written
$a \mid b$, if there exists an integer $k$ such that $b = ak$.

**Elementary properties.** For integers $a, b, c$:

1. $a \mid a$ (reflexivity) and $1 \mid a$ (1 divides everything).
2. If $a \mid b$ and $b \mid a$ then $a = \pm b$ (antisymmetry up to sign).
3. If $a \mid b$ and $b \mid c$ then $a \mid c$ (transitivity).
4. If $a \mid b$ and $a \mid c$ then $a \mid (bx + cy)$ for all integers $x, y$: divisibility is
   preserved under **integer linear combinations**.

Property 4 is the engine of most elementary proofs: to show $n \mid f(n) - g(n)$, show $n$ divides
each term separately.

### 1.2 The Division Algorithm

**Theorem (Division Algorithm).** For integers $a$ and $b$ with $b > 0$, there exist **unique**
integers $q$ (quotient) and $r$ (remainder) such that

$$a = bq + r, \qquad 0 \leq r < b.$$

*Proof of existence.* Choose $q$ to be the largest integer with $bq \leq a$ (the floor $\lfloor a/b
\rfloor$) and set $r = a - bq$. Then $r \geq 0$ by maximality, and if $r \geq b$ then
$a - b(q+1) = r - b \geq 0$ contradicts the maximality of $q$.

*Proof of uniqueness.* Suppose $a = bq_1 + r_1 = bq_2 + r_2$ with both remainders in
$[0, b)$. Then $b(q_1 - q_2) = r_2 - r_1$, so $b$ divides $r_2 - r_1$. But
$|r_2 - r_1| < b$, forcing $r_2 = r_1$ and hence $q_1 = q_2$. $\blacksquare$

The remainder $r$ is written $a \bmod b$. Reducing every integer modulo $b$ partitions
$\mathbb{Z}$ into $b$ **residue classes** — the foundational idea of modular arithmetic
(see [Congruences](/7-number-theory/3_congruences/)).

### 1.3 The Greatest Common Divisor

**Definition.** For integers $a, b$ not both zero, the **greatest common divisor**
$\gcd(a, b)$ is the largest positive integer dividing both.

**Theorem (Bézout's identity).** $\gcd(a, b)$ is the **smallest positive** value of the linear
combination $ax + by$ over all integers $x, y$; in particular there exist integers $x, y$ with

$$ax + by = \gcd(a, b).$$

*Proof sketch.* The set $S = \{ax + by > 0\}$ is non-empty (take $x = a$, $y = b$ when not both
zero). Let $d$ be its least element, $d = ax_0 + by_0$. Any common divisor of $a, b$ divides $d$;
conversely, dividing $a$ by $d$ with the division algorithm gives a remainder $a - qd$ which is
*also* an element of $S$, so by minimality the remainder is zero: $d \mid a$. Similarly
$d \mid b$. Hence $d$ is a common divisor divisible by every common divisor, i.e. the greatest. $\blacksquare$

**Consequences.**

- $\gcd(a, b) \mid$ every integer combination of $a$ and $b$.
- $a$ and $b$ are **coprime** ($\gcd(a,b) = 1$) if and only if $ax + by = 1$ is solvable.
- If $a \mid bc$ and $\gcd(a, b) = 1$, then $a \mid c$ (**Euclid's lemma**) — the key step in
  proving unique factorisation.

### 1.4 The Euclidean Algorithm

Repeatedly apply the division algorithm:

$$
a = bq_1 + r_1,\quad b = r_1q_2 + r_2,\quad r_1 = r_2q_3 + r_3,\ \ldots
$$

The remainders strictly decrease and stay non-negative, so the algorithm terminates; the last
non-zero remainder is $\gcd(a, b)$, because
$\gcd(a, b) = \gcd(b, r_1) = \gcd(r_1, r_2) = \cdots$.

**Worked example.** $\gcd(252, 198)$:

$$
252 = 198 \cdot 1 + 54,\qquad 198 = 54 \cdot 3 + 36,\qquad 54 = 36 \cdot 1 + 18,\qquad 36 = 18 \cdot 2 + 0.
$$

So $\gcd(252, 198) = 18$.

### 1.5 The Extended Euclidean Algorithm

Back-substitute to obtain Bézout coefficients. From the example above:

$$
18 = 54 - 36 = 54 - (198 - 54 \cdot 3) = 4 \cdot 54 - 198 = 4(252 - 198) - 198 = 4 \cdot 252 - 5 \cdot 198.
$$

So $x = 4$, $y = -5$: indeed $4 \cdot 252 - 5 \cdot 198 = 18$.

The extended algorithm is constructive and runs in $O(\log(\min(a,b)))$ arithmetic steps — and the
number of steps is bounded by roughly five times the number of decimal digits of $b$ (Lamé's
theorem, via Fibonacci numbers: the worst case is consecutive Fibonacci pairs).

### 1.6 Common Pitfalls

- The division algorithm requires $0 \leq r < b$ with $b > 0$: for negative $a$, adjust the
  quotient rather than allowing a negative remainder.
- $\gcd(0, 0)$ is undefined (every integer divides 0); $\gcd(a, 0) = |a|$.
- Bézout coefficients are **not unique**: $(x + tb, y - ta)$ works for every integer $t$. Exams
  ask for *a* pair, or the pair with $|x|$ minimal.
- Cancelling in congruences: from $ac \equiv bc \pmod n$ you may cancel $c$ only if
  $\gcd(c, n) = 1$ — Euclid's lemma in disguise.

## See Also

- [Congruences](/7-number-theory/3_congruences/)
- [Primes and the Fundamental Theorem of Arithmetic](/7-number-theory/2_primes-and-the-fundamental-theorem-of-arithmetic/)
- [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/)
