---
date: 2026-09-19T00:00:00.000Z
title: "Primes and the Fundamental Theorem of Arithmetic"
description: 'UNIVERSITY Mathematics notes: primes, Euclid''s infinitude proof, Euclid''s lemma and the proof of unique prime factorisation, with the standard exam applications.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Primes and the Fundamental Theorem of Arithmetic", "url": "https://mathematics.wyattau.com/7-number-theory/primes-and-the-fundamental-theorem-of-arithmetic"}]
}
</script>

### 2.1 Primes

**Definition.** An integer $p > 1$ is **prime** if its only positive divisors are $1$ and $p$.
An integer $n > 1$ that is not prime is **composite**.

1 is neither prime nor composite — a convention that makes unique factorisation statements clean.

**Euclid's lemma** (from [Divisibility](/7-number-theory/1_divisibility-and-euclidean-algorithm/)):
if $p$ is prime and $p \mid ab$, then $p \mid a$ or $p \mid b$. This *fails* for composite $p$
($6 \mid 4 \cdot 9$ but $6 \nmid 4$ and $6 \nmid 9$), and is precisely what makes primes special.

### 2.2 Infinitely Many Primes (Euclid)

**Theorem.** There are infinitely many primes.

*Proof.* Suppose $p_1, \ldots, p_k$ are all the primes and consider

$$
N = p_1 p_2 \cdots p_k + 1.
$$

$N > 1$, so it has a prime divisor $p$. But no $p_i$ divides $N$ (each leaves remainder 1), so $p$
is a prime not in the list — contradiction. $\blacksquare$

Note the proof gives **no efficient method** for producing new primes: $p_1 \cdots p_k + 1$ need
not be prime (the products are called *Euclid numbers*; $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13
+ 1 = 30031 = 59 \times 509$ is composite).

### 2.3 The Fundamental Theorem of Arithmetic

**Theorem (FTA).** Every integer $n > 1$ can be written as a product of primes, and this factorisation
is unique up to the order of the factors.

*Existence* (strong induction): $n = 2$ is prime. If $n > 2$ is composite, $n = ab$ with
$1 < a, b < n$; each factor factors into primes by induction, so $n$ does too.

*Uniqueness* (Euclid's lemma): suppose

$$
n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s
$$

with primes $p_i, q_j$. Then $p_1 \mid q_1 \cdots q_s$, so $p_1 \mid q_j$ for some $j$; both are
prime so $q_j = p_1$. Cancel and repeat on the remaining product. The lists match exactly.
$\blacksquare$

**Canonical form.** Collect equal primes:

$$
n = p_1^{e_1} p_2^{e_2} \cdots p_k^{e_k}, \qquad p_1 < p_2 < \cdots < p_k, \quad e_i \geq 1.
$$

### 2.4 Consequences You Can Quote

- $\gcd$ and $\mathrm{lcm}$ from factorisations:

$$
\gcd(a, b) = \prod p_i^{\min(\alpha_i, \beta_i)}, \qquad
\mathrm{lcm}(a, b) = \prod p_i^{\max(\alpha_i, \beta_i)},
$$

and always $\gcd(a,b) \cdot \mathrm{lcm}(a,b) = |ab|$.

- **Irrationality of $\sqrt{2}$**: if $\sqrt{2} = a/b$ in lowest terms then $a^2 = 2b^2$, so
  $2 \mid a^2$, hence $2 \mid a$ (Euclid's lemma); writing $a = 2c$ gives $4c^2 = 2b^2$, so
  $2 \mid b$ — contradicting lowest terms. The same argument works with 2 replaced by any prime,
  proving $\sqrt{p}$ irrational for every prime $p$.
- **No integer between 0 and 1 is a product of primes**: the FTA genuinely fails in systems like
  $\mathbb{Z}[\sqrt{-5}]$ ($6 = 2 \cdot 3 = (1+\sqrt{-5})(1-\sqrt{-5})$) — uniqueness, not
  existence, is the delicate part.

### 2.5 Counting Divisors

If $n = p_1^{e_1} \cdots p_k^{e_k}$ then the number of positive divisors is

$$
\tau(n) = (e_1 + 1)(e_2 + 1) \cdots (e_k + 1),
$$

since a divisor chooses an exponent between 0 and $e_i$ independently for each prime. For example,
$720 = 2^4 \cdot 3^2 \cdot 5$ has $(5)(3)(2) = 30$ divisors.

### 2.6 The Sieve of Eratosthenes

To list all primes up to $N$: write the integers from 2 to $N$, circle 2 and cross out all larger
multiples of 2; circle the next surviving number and cross out its larger multiples; repeat while
the circled number satisfies $p \leq \sqrt{N}$. Composites up to $N$ always have a prime factor
$\leq \sqrt{N}$, so the survivors are exactly the primes. Cost: $O(N \log \log N)$ operations.

### 2.7 Common Pitfalls

- 1 is **not** prime: allowing $1$ as a factor would destroy uniqueness of the factorisation.
- Factorisations must cover **negative** integers via the sign: $-12 = -1 \cdot 2^2 \cdot 3$.
- The FTA is about the **multiset** of primes: $12 = 2 \cdot 2 \cdot 3 = 3 \cdot 2 \cdot 2$ are the
  same factorisation in different orders.
- Euclid's infinitude proof does **not** say $p_1 \cdots p_k + 1$ is prime — only that it has a
  new prime factor.

## See Also

- [Congruences](/7-number-theory/3_congruences/)
- [The Distribution of Primes](/7-number-theory/10_distribution-of-primes/)
- [Arithmetic Functions](/7-number-theory/6_arithmetic-functions/)

For exam proofs, write factorisations in canonical ascending-prime form before comparing — order-free multisets earn no method marks unless the canonical form is stated first.
Every exam answer should conclude with the canonical form restated: the uniqueness statement is about the multiset of prime factors, not the written order of the product.
