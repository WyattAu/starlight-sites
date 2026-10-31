---
date: 2026-09-19T00:00:00.000Z
title: "Fermat, Euler and Wilson Theorems"
description: 'UNIVERSITY Mathematics notes: Fermat''s little theorem, Euler''s theorem with the totient function, Wilson''s theorem, and their standard applications to exponent reduction and primality.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Fermat, Euler and Wilson Theorems", "url": "https://mathematics.wyattau.com/7-number-theory/fermat-euler-and-wilson-theorems"}]
}
</script>

### 4.1 Fermat's Little Theorem

**Theorem (Fermat).** If $p$ is prime and $p \nmid a$, then

$$
a^{p-1} \equiv 1 \pmod p.
$$

Equivalently, for *every* integer $a$ (including multiples of $p$): $a^p \equiv a \pmod p$.

*Proof.* The products $a, 2a, \ldots, (p-1)a$ are all distinct modulo $p$ (if $ia \equiv ja$ then
$p \mid (i-j)a$, and $p \nmid a$, so $p \mid i - j$ with $|i - j| < p$). They are therefore a
permutation of $1, 2, \ldots, p-1$ modulo $p$. Multiplying the $p-1$ congruences
$ia \equiv k_i$ together gives

$$
a^{p-1}(p-1)! \equiv (p-1)! \pmod p,
$$

and since $p \nmid (p-1)!$ we may cancel the factorial. $\blacksquare$

**Uses.** Exponent reduction modulo a prime ($a^{100} \pmod 7$: reduce the exponent mod 6), and
the primality test $a^{n-1} \not\equiv 1 \pmod n$ certifies $n$ **composite** (the converse fails:
Carmichael numbers satisfy Fermat for *every* base $a$ coprime to $n$; 561 is the smallest).

### 4.2 Euler's Totient Function and Euler's Theorem

**Definition.** $\varphi(n)$ counts the integers in $\{1, \ldots, n\}$ that are coprime to $n$.

Key values and formulas:

- $\varphi(p) = p - 1$ for prime $p$; $\varphi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
- $\varphi$ is **multiplicative**: $\gcd(m,n) = 1 \Rightarrow \varphi(mn) = \varphi(m)\varphi(n)$.
- If $n = p_1^{e_1} \cdots p_k^{e_k}$, then
  $\varphi(n) = n \prod_{i} \left(1 - \frac{1}{p_i}\right)$.

**Theorem (Euler).** If $\gcd(a, n) = 1$ then

$$
a^{\varphi(n)} \equiv 1 \pmod n.
$$

*Proof.* The units of $\mathbb{Z}/n\mathbb{Z}$ form a group of order $\varphi(n)$; multiplying all
units by $a$ permutes the group (cancellation by the unit $a$), and multiplying the permuted
products gives $a^{\varphi(n)} \cdot (\text{product of units}) \equiv (\text{product of units})$;
cancel. $\blacksquare$

Fermat is the special case $n = p$, $\varphi(p) = p-1$. Euler also handles composite moduli:
$3^{100} \pmod{10}$ has $\varphi(10) = 4$, $100 \equiv 0 \pmod 4$... careful — reduce
$100 = 4 \cdot 25$, so $3^{100} = (3^4)^{25} \equiv 1^{25} = 1 \pmod{10}$.

**Negative and large exponents.** When $\gcd(a, n) = 1$ the inverse of $a^e$ is $a^{\varphi(n)-e}$:
compute $7^{-1} \pmod{20}$ as $7^{\varphi(20)-1} = 7^{7}$, or directly via the extended Euclidean
algorithm ($7 \cdot 3 = 21 \equiv 1$, so $7^{-1} \equiv 3$).

### 4.3 Wilson's Theorem

**Theorem (Wilson).** For $p > 1$:

$$
(p-1)! \equiv -1 \pmod p \iff p \text{ is prime.}
$$

*Proof ($\Rightarrow$).* Pair each $k \in \{1, \ldots, p-1\}$ with its inverse modulo $p$. Only 1
and $p-1$ are their own inverses ($k^2 \equiv 1$ means $p \mid (k-1)(k+1)$, so $k \equiv \pm 1$).
The remaining $p - 3$ elements pair off into inverse pairs with product 1, leaving
$(p-1)! \equiv 1 \cdot (p-1) \equiv -1$. $\blacksquare$

($\Leftarrow$ is a nice exercise: if $(n-1)! \equiv -1 \pmod n$ then every proper divisor of $n$
cancels in $(n-1)!$, so $n$ has no proper divisor $> 1$.)

**Applications.**

- $(p-2)! \equiv 1 \pmod p$: multiply Wilson by $p - 1 \equiv -1$.
- Wilson gives the classical formula for the number of ways to order a complete residue system,
  and certifies primality — though it is useless as a practical test (factorials are enormous).

### 4.4 Worked Problems

**Problem 1.** Find the remainder of $2^{500}$ on division by 13.

$\varphi(13) = 12$ and $500 = 12 \cdot 41 + 8$, so $2^{500} \equiv 2^8 = 256 \equiv 9 \pmod{13}$.

**Problem 2.** Show $30 \mid n^5 - n$ for every integer $n$.

$n^5 - n = n(n^4 - 1)$. Fermat for 2, 3 and 5: $n^5 \equiv n \pmod p$ for $p = 2, 3, 5$ (directly
or by $n^5 - n = n(n^4-1)$ and $p - 1 \mid 4$ for $p \in \{2,3,5\}$... more precisely
$p - 1 \in \{1, 2, 4\}$ all divide 4). Since 2, 3, 5 are pairwise coprime, their product 30 divides
$n^5 - n$.

**Problem 3.** Solve $4^{340} \pmod{341}$ where $341 = 11 \cdot 31$.

Fermat for 11: $4^{10} \equiv 1$, and $340 = 34 \cdot 10$, so $4^{340} \equiv 1 \pmod{11}$.
Fermat for 31: $4^{30} \equiv 1$, and $340 \equiv 10 \pmod{30}$, so
$4^{340} \equiv 4^{10} = 1048576$. Then $1048576 = 33824 \cdot 31 + 12$, so $4^{340} \equiv 12
\pmod{31}$. Combine by CRT (see the next page): the answer is congruent to 1 mod 11 and 12 mod 31.
(341 is a Poulet number: $4^{340} \equiv 1 \pmod{341}$ despite being composite.)

### 4.5 Common Pitfalls

- Fermat requires **prime** modulus and (in the $a^{p-1}$ form) $\gcd(a, p) = 1$.
- Euler requires **coprimality**: $2^{100} \pmod{12}$ cannot be reduced with $\varphi(12) = 4$
  because $\gcd(2, 12) \neq 1$. Instead track the residue directly ($2^{100} \equiv 0 \pmod 4$ and
  $2^{100} \equiv 4 \pmod 3$, giving $8 \equiv 8 \pmod{12}$ by CRT).
- $\varphi$ is **not** multiplicative when $\gcd(m, n) \neq 1$:
  $\varphi(8) = 4 \neq \varphi(4)\varphi(2) = 4$ is fine, but
  $\varphi(4)\varphi(2) = 2 \cdot 1 = 2 \neq \varphi(8) = 4$ shows the multiplication rule breaks
  without coprimality.
- Wilson is an **iff**: the failure direction is a legitimate one-line primality *certificate*.

## See Also

- [Congruences](/7-number-theory/3_congruences/)
- [Arithmetic Functions](/7-number-theory/6_arithmetic-functions/)
- [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/)
