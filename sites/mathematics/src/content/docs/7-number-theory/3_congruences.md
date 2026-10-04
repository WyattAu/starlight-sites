---
date: 2026-09-19T00:00:00.000Z
title: "Congruences"
description: 'UNIVERSITY Mathematics notes: modular arithmetic, residue classes, addition and multiplication modulo n, cancellation laws, and Fermat-style exponent reduction.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Congruences", "url": "https://mathematics.wyattau.com/7-number-theory/congruences"}]
}
</script>

### 3.1 Congruence Modulo n

**Definition.** For integers $a, b$ and $n \geq 1$, $a$ is **congruent** to $b$ modulo $n$,
written $a \equiv b \pmod n$, if $n \mid a - b$ — equivalently, $a$ and $b$ leave the same
remainder on division by $n$.

Congruence is an **equivalence relation**: reflexive ($a - a = 0$), symmetric, and transitive (if
$n \mid a-b$ and $n \mid b-c$ then $n \mid a-c$). It partitions $\mathbb{Z}$ into $n$ residue
classes $[0], [1], \ldots, [n-1]$, each containing all integers with the same remainder.

### 3.2 Arithmetic Modulo n

Congruences respect addition and multiplication: if $a \equiv b$ and $c \equiv d \pmod n$, then

$$
a + c \equiv b + d, \qquad a - c \equiv b - d, \qquad ac \equiv bd \pmod n.
$$

*Proof.* $n \mid (a-b) + (c-d) = (a+c)-(b+d)$ and
$ac - bd = ac - bc + bc - bd = c(a-b) + b(c-d)$. $\blacksquare$

Consequences: powers reduce freely — $a \equiv b \pmod n \Rightarrow a^k \equiv b^k$ — and
polynomials with integer coefficients preserve congruence. This is what makes "reduce as you go"
legal in exponent calculations.

**Warning (division).** Congruence does **not** respect division in general: from
$ac \equiv bc \pmod n$ you can conclude $a \equiv b \pmod{n/\gcd(c,n)}$, and only $a \equiv b$
when $\gcd(c, n) = 1$. For example $6 \equiv 0 \pmod 3$ and $3 \equiv 0 \pmod 3$, but $2 \not\equiv 0$.

### 3.3 The Ring $\mathbb{Z}/n\mathbb{Z}$

The residue classes form a commutative ring with identity $[1]$ under class addition and
multiplication. A class $[a]$ is **invertible** (a unit) precisely when $\gcd(a, n) = 1$, in which
case the extended Euclidean algorithm gives $ax + ny = 1$, so $ax \equiv 1 \pmod n$; the inverse is
the class of $x \bmod n$. The units form a group of order $\varphi(n)$ — see
[Arithmetic Functions](/7-number-theory/6_arithmetic-functions/).

When $n = p$ is prime, every nonzero class is invertible, so $\mathbb{Z}/p\mathbb{Z}$ is a **field**.

### 3.4 Reducing Exponents

Any power tower collapses modulo $n$ by reducing the base modulo $n$ first, and the exponent via
Euler/Fermat when the base is invertible:

- Last digit of $7^{2026}$: $7^k \pmod{10}$ cycles $7, 9, 3, 1$ with period 4; since
  $2026 \equiv 2 \pmod 4$, the answer is $9$.
- $2^{10} = 1024 \equiv 24 \pmod{100}$, so the last two digits of $2^{2026}$ follow from
  $2026 \bmod 20 = 6$: $2^6 = 64$.

Carmichael's theorem refines the exponent period to $\lambda(n)$, and the order of an element
divides $\lambda(n)$ — worth stating in a proof-based answer.

### 3.5 Worked Problems

**Problem 1.** Show that $2^{4n} \equiv 1 \pmod{17}$ whenever $n$ is even.

$2^4 = 16 \equiv -1 \pmod{17}$, so $2^{4n} \equiv (-1)^n$: the claim holds for even $n$, while
odd $n$ gives $-1$. In fact $2^8 = 256 = 15 \cdot 17 + 1 \equiv 1 \pmod{17}$, so the order of 2
modulo 17 is exactly 8.

**Problem 2.** Find the remainder of $3^{100}$ on division by 7.

$3^1 \equiv 3$, $3^2 \equiv 2$, $3^3 \equiv 6$, $3^6 \equiv 1 \pmod 7$ (the order of 3 is 6).
Since $100 \equiv 4 \pmod 6$: $3^{100} \equiv 3^4 = 81 \equiv 4 \pmod 7$.

**Problem 3.** Prove that no integer of the form $4k + 3$ is a sum of two squares.

Squares mod 4 are 0 and 1, so a sum of two squares is $0, 1$ or $2 \pmod 4$ — never 3.

### 3.6 Common Pitfalls

- Subtracting congruences across **different moduli**: $a \equiv b \pmod 6$ and $a \equiv b \pmod 4$
  gives $a \equiv b \pmod{\mathrm{lcm}(6,4)} = \pmod{12}$, not mod 3 or 24.
- Exponent reduction requires $\gcd(\text{base}, n) = 1$ (Euler) or knowledge of the element's
  order; otherwise reduce only the base.
- In $\mathbb{Z}/n\mathbb{Z}$ there are zero divisors when $n$ is composite:
  $[2]\cdot[3] = [0]$ in $\mathbb{Z}/6\mathbb{Z}$ — products can vanish without a zero factor.

## See Also

- [Fermat, Euler and Wilson Theorems](/7-number-theory/4_fermat-euler-and-wilson-theorems/)
- [Linear Congruences and the Chinese Remainder Theorem](/7-number-theory/5_linear-congruences-and-the-chinese-remainder-theorem/)
- [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/)

### 3.x A Supply-and-Demand Check

Residue classes are preserved by polynomial evaluation: if $a \equiv b \pmod n$ then $f(a) \equiv f(b) \pmod n$ for any integer polynomial $f$. Verify for $f(x) = x^2 + x + 1$ with $a = 2$, $b = 5$, $n = 3$ before using it in proofs.


$$
a \equiv b \pmod n, \quad c \equiv d \pmod n \Longrightarrow ac \equiv bd \pmod n
$$

The multiplicative property is what powers fast exponentiation: reduce the base once, then
multiply reduced residues. In exams, reduce after every multiplication to keep numbers small; the
marker expects reduced residues, not 30-digit intermediates.

A standard application: divisibility tests. The rule for 11 follows from $10 \equiv -1
\pmod{11}$, so a decimal number alternately sums its digits. Reproduce this derivation once and
the rule is yours forever.

A final check worth one mark: reduce every intermediate result immediately, and state the residue class, e.g. "the answer is the class of 4 modulo 7", rather than only the integer.
For multi-step reductions, tabulate powers as you go: the table of $a$, $a^2$, $a^4$, $a^8$ modulo $n$ converts any exponent to its binary form and avoids every overflow risk.

### 3.7 A Closing Worked Reduction

Reduce $11^{21} \pmod{13}$: Fermat gives $11^{12} \equiv 1$, so $11^{21} \equiv 11^9$.
Now $11^2 = 121 \equiv 4$, $11^4 \equiv 16 \equiv 3$, $11^8 \equiv 9$, and $11^9 \equiv 9 \cdot 11 = 99 \equiv 8 \pmod{13}$.
