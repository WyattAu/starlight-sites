---
date: 2026-09-19T00:00:00.000Z
title: "Linear Congruences and the Chinese Remainder Theorem"
description: 'UNIVERSITY Mathematics notes: solving ax ≡ b (mod n), the Chinese Remainder Theorem with proof and applications, and general systems of congruences.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Linear Congruences and the Chinese Remainder Theorem", "url": "https://mathematics.wyattau.com/7-number-theory/linear-congruences-and-the-chinese-remainder-theorem"}]
}
</script>

### 5.1 Solving $ax \equiv b \pmod n$

**Theorem.** The congruence $ax \equiv b \pmod n$ is solvable if and only if
$\gcd(a, n) \mid b$. When solvable, there are exactly $\gcd(a, n)$ incongruent solutions modulo
$n$.

*Method.* Let $d = \gcd(a, n)$. Dividing through by $d$ reduces to

$$
a' x \equiv b' \pmod{n'}, \qquad a' = a/d,\; b' = b/d,\; n' = n/d, \qquad \gcd(a', n') = 1,
$$

whose solution is $x \equiv b' \cdot (a')^{-1} \pmod{n'}$ with the inverse from the extended
Euclidean algorithm. Modulo $n$ the full solution set is
$x \equiv x_0 + k n' \pmod n$, $k = 0, \ldots, d-1$.

**Worked example.** Solve $6x \equiv 15 \pmod{21}$.

$d = \gcd(6, 21) = 3$ and $3 \mid 15$, so there are 3 solutions modulo 21. Divide:
$2x \equiv 5 \pmod 7$. Since $2 \cdot 4 = 8 \equiv 1 \pmod 7$, the inverse of 2 is 4:
$x \equiv 20 \equiv 6 \pmod 7$. Modulo 21 the solutions are $x \equiv 6, 13, 20 \pmod{21}$.

### 5.2 The Chinese Remainder Theorem

**Theorem (CRT).** Let $m_1, m_2$ be coprime. Then the system

$$
x \equiv a_1 \pmod{m_1}, \qquad x \equiv a_2 \pmod{m_2}
$$

has a unique solution modulo $m_1 m_2$.

*Proof.* Existence: set $M = m_1 m_2$, $M_1 = m_2$, $M_2 = m_1$. Since $\gcd(M_1, m_1) = 1$, let
$y_1$ be the inverse of $M_1$ modulo $m_1$ (extended Euclid). Then

$$
x_0 = a_1 M_1 y_1 + a_2 M_2 y_2, \qquad M_2 y_2 \equiv 1 \pmod{m_2}
$$

satisfies both congruences: modulo $m_1$, every term containing $M_2 = m_1$ vanishes and
$M_1 y_1 \equiv 1$; modulo $m_2$ symmetrically.

Uniqueness: if $x_1 \equiv x_2$ modulo both $m_1$ and $m_2$ then $m_1 m_2 \mid x_1 - x_2$
(coprimality). $\blacksquare$

**Worked example.** Solve $x \equiv 2 \pmod 3$, $x \equiv 3 \pmod 5$, $x \equiv 2 \pmod 7$
(Sunzi's original problem, ~4th century CE).

$M = 105$. $M_1 = 35$, $M_2 = 21$, $M_3 = 15$. Inverses: $35 \equiv 2 \pmod 3$, $2^{-1} = 2$;
$21 \equiv 1 \pmod 5$, inverse 1; $15 \equiv 1 \pmod 7$, inverse 1.

$$
x \equiv 2 \cdot 35 \cdot 2 + 3 \cdot 21 \cdot 1 + 2 \cdot 15 \cdot 1 = 140 + 63 + 30 = 233 \equiv 23 \pmod{105}.
$$

### 5.3 General Systems

For non-coprime moduli the CRT condition becomes: the system $x \equiv a_1 \pmod{m_1}$,
$x \equiv a_2 \pmod{m_2}$ is solvable iff $a_1 \equiv a_2 \pmod{\gcd(m_1, m_2)}$, and solutions are
unique modulo $\mathrm{lcm}(m_1, m_2)$. Combine pairwise, replacing a pair by its single lcm-form
congruence.

### 5.4 Applications

- **Calendar cycles** (Sunzi's original use), and the Zeller-type day-of-week congruences.
- **Residue number systems**: represent a large integer by its residues modulo pairwise coprime
  moduli; addition and multiplication act componentwise with no carries — the hardware basis of
  RNS arithmetic.
- **Exponent reduction on composite moduli**: to compute $7^{1000} \pmod{55}$, split into mod 5
  and mod 11 (Fermat on each prime factor), solve by CRT. This "split through the prime factors"
  workflow is the standard exam technique.

### 5.5 Common Pitfalls

- The CRT uniqueness is **modulo the product**; infinitely many integer solutions exist (all
  congruent modulo $M$).
- The reconstruction formula requires the **inverses of $M_i$ modulo $m_i$** — a common slip is
  inverting $m_i$ instead.
- Non-coprime moduli: check $a_1 \equiv a_2 \pmod{\gcd(m_1, m_2)}$ first, otherwise the system has
  **no solution at all** (students often "solve" impossible systems).

## See Also

- [Congruences](/7-number-theory/3_congruences/)
- [Fermat, Euler and Wilson Theorems](/7-number-theory/4_fermat-euler-and-wilson-theorems/)
- [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/)

### 5.x A Non-Coprime System Example

Solve $x \equiv 1 \pmod 6$, $x \equiv 7 \pmod{10}$: $\gcd(6, 10) = 2$ and $1 \equiv 7 \equiv 1 \pmod 2$, so solutions exist. Combine into $x \equiv 7 \pmod{\mathrm{lcm}(6,10) = 30}$, i.e. $x = 7, 37, \ldots$


$$
x = a_1 M_1 y_1 + a_2 M_2 y_2, \qquad M_i = M/m_i, \quad M = m_1 m_2
$$

The reconstruction formula is worth memorising as a pattern, not as symbols: take the product of
the other moduli, multiply by its inverse modulo your modulus, multiply by your residue, and sum
over congruences. A worked three-modulus example with $M = 105$ appears on this page — recompute
it end-to-end as revision.
Always finish with the residue class statement: solutions are classes modulo the product, and writing $x \equiv$ the found value makes the answer unambiguous for the marker.

### 5.x A Second Reconstruction

Alternatively solve by substitution: from $x = 2 + 3k$ into $x \equiv 3 \pmod 5$ gives $3k \equiv 1 \pmod 5$, $k \equiv 2$, so $x = 8 + 15t$; substituting into $x \equiv 2 \pmod 7$ gives $t \equiv 4 \pmod 7$ and $x = 68 + 105t$ — the same class as the CRT formula.
