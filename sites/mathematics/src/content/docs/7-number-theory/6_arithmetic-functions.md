---
date: 2026-09-19T00:00:00.000Z
title: "Arithmetic Functions"
description: 'UNIVERSITY Mathematics notes: the totient, divisor and sum-of-divisors functions, multiplicativity, Möbius inversion, and the divisor-sum identity for the gcd.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Arithmetic Functions", "url": "https://mathematics.wyattau.com/7-number-theory/arithmetic-functions"}]
}
</script>

### 6.1 Arithmetic Functions

**Definition.** An **arithmetic function** is a function $f: \mathbb{Z}_{>0} \to \mathbb{C}$.

The subject studies how these functions interact with factorisation. Two operations:

- **Pointwise addition**: $(f + g)(n) = f(n) + g(n)$.
- **Dirichlet convolution**: $(f * g)(n) = \sum_{d \mid n} f(d)\, g(n/d)$.

Convolution is commutative and associative, with identity $\varepsilon(n) = 1$ if $n = 1$ else 0.
A function is **multiplicative** if $f(mn) = f(m)f(n)$ whenever $\gcd(m, n) = 1$ — the central
property: a multiplicative function is determined by its values on prime powers.

### 6.2 The Totient and Its Formula

$\varphi(n)$ (see [Fermat, Euler and Wilson](/7-number-theory/4_fermat-euler-and-wilson-theorems/))
is multiplicative, which proves the product formula:

$$
n = p_1^{e_1} \cdots p_k^{e_k} \;\Longrightarrow\; \varphi(n) = \prod_{i=1}^{k} p_i^{e_i - 1}(p_i - 1).
$$

*Why.* $\varphi(p^e) = p^e - p^{e-1}$ (the non-coprime residues are exactly the $p^{e-1}$
multiples of $p$), and multiplicativity handles coprime factors. Example:
$\varphi(360) = \varphi(2^3)\varphi(3^2)\varphi(5) = 4 \cdot 6 \cdot 4 = 96$.

### 6.3 Divisor Functions

The **divisor function** $\tau(n)$ counts positive divisors; $\sigma(n)$ sums them. For
$n = \prod p_i^{e_i}$:

$$
\tau(n) = \prod_{i} (e_i + 1), \qquad
\sigma(n) = \prod_{i} \frac{p_i^{e_i + 1} - 1}{p_i - 1}.
$$

*Why.* Divisors choose one power of each prime; the geometric-series sum arises from multiplying
out $\prod (1 + p_i + p_i^2 + \cdots + p_i^{e_i})$.

Both are multiplicative. $n$ is **perfect** when $\sigma(n) = 2n$; the even perfect numbers are
exactly $2^{p-1}(2^p - 1)$ with $2^p - 1$ prime (Euler, and the Mersenne connection).

### 6.4 The Möbius Function

$$
\mu(n) = \begin{cases} 1 & n = 1 \\ 0 & p^2 \mid n \text{ for some prime } p \\ (-1)^k & n \text{ is a product of } k \text{ distinct primes} \end{cases}
$$

Key identity: $\sum_{d \mid n} \mu(d) = \varepsilon(n)$ (1 at $n=1$, else 0). The inversion theorem:

$$
g(n) = \sum_{d \mid n} f(d) \quad\Longleftrightarrow\quad f(n) = \sum_{d \mid n} \mu(d)\, g(n/d).
$$

**Classical application.** Since $\sum_{d \mid n} \varphi(d) = n$, Möbius inversion recovers
$\varphi(n) = n \sum_{d \mid n} \mu(d)/d$ — the product formula drops out of the number-theoretic
machinery instead of being assumed.

### 6.5 The Divisor-Sum Identity for the GCD

A standard exam theorem:

$$
\sum_{d \mid n} \varphi(d) = n.
$$

*Proof.* Partition the fractions $\frac{k}{n}$, $1 \leq k \leq n$, by reduced denominator:
each reduces to $\frac{a}{d}$ in lowest terms with $d \mid n$, $\gcd(a, d) = 1$ — and there are
exactly $\varphi(d)$ of those for each $d$. The classes exhaust the $n$ fractions. $\blacksquare$

### 6.6 Worked Problems

**Problem 1.** Compute $\tau(720)$, $\sigma(720)$ and $\varphi(720)$.

$720 = 2^4 \cdot 3^2 \cdot 5$:

- $\tau(720) = 5 \cdot 3 \cdot 2 = 30$
- $\sigma(720) = (31)(13)(6) = 2418$
- $\varphi(720) = 720(1 - \tfrac12)(1 - \tfrac13)(1 - \tfrac15) = 720 \cdot \tfrac{4}{15} = 192$

**Problem 2.** How many $\gcd(a, 720) = 5$ pairs... i.e. how many integers $1 \leq a \leq 720$
satisfy $\gcd(a, 720) = 5$?

$\gcd(a, 720) = 5$ iff $a = 5b$ with $\gcd(b, 144) = 1$ and $5 \nmid b$. Count
$b \leq 144$, $\gcd(b, 144) = 1$, $5 \nmid b$: $\varphi(144) = 48$ coprime values, of which those
with $5 \mid b$... inclusion–exclusion: multiples of 5 that are coprime to 144:
$b = 5c$, $c \leq 28$, $\gcd(c, 144) = 1$: count coprime $c$ to 144 up to 28 directly = 13.
So $48 - 13 = 35$ values of $b$, giving $\gcd(a, 720) = 5$ for exactly 35 integers.

### 6.7 Common Pitfalls

- Multiplicativity needs **coprimality**: $\tau(12) = 6 \neq \tau(4)\tau(3) = 3 \cdot 2 = 6$ holds
  by luck ($4$ and $3$ are coprime ✓) — but $\tau(8) = 4 \neq \tau(4)\tau(2) = 3 \cdot 2 = 6$
  fails because $8 = 4 \cdot 2$ share the factor 2.
- $\sigma$ vs $\sigma_0$: some books write $\sigma_k$ with $\sigma = \sigma_1$, $\tau = \sigma_0$.
  Read conventions carefully.
- Möbius values are 0 exactly when $n$ is divisible by a **square**; "square-free with $k$ prime
  factors" gives $(-1)^k$.

## See Also

- [Fermat, Euler and Wilson Theorems](/7-number-theory/4_fermat-euler-and-wilson-theorems/)
- [Primitive Roots](/7-number-theory/7_primitive-roots-and-discrete-logarithms/)
- [The Distribution of Primes](/7-number-theory/10_distribution-of-primes/)
A final sanity check: $\varphi(1) = 1$, $\tau(1) = \sigma(1) = 1$, and $\mu(1) = 1$ — the empty product conventions that keep every formula valid at $n = 1$.
