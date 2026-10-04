---
date: 2026-09-19T00:00:00.000Z
title: "Primitive Roots and Discrete Logarithms"
description: 'UNIVERSITY Mathematics notes: the multiplicative group modulo n, primitive roots, indices (discrete logarithms), and which moduli possess primitive roots.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Primitive Roots and Discrete Logarithms", "url": "https://mathematics.wyattau.com/7-number-theory/primitive-roots-and-discrete-logarithms"}]
}
</script>

### 7.1 The Order of an Element

**Definition.** The **order** of $a$ modulo $n$ ($\gcd(a, n) = 1$) is the smallest positive $d$
with $a^d \equiv 1 \pmod n$. It always exists (Fermat/Euler bound it by $p - 1$, $\varphi(n)$)
and divides every exponent that kills $a$: if $a^k \equiv 1$ then $d \mid k$.

*Proof of the division fact.* Write $k = qd + r$, $0 \leq r < d$. Then
$a^k = (a^d)^q a^r \equiv a^r \equiv 1$; minimality of $d$ forces $r = 0$. $\blacksquare$

**Worked example.** Powers of 3 mod 7: $3, 2, 6, 4, 5, 1$ — order 6 = $\varphi(7)$.

### 7.2 Primitive Roots

**Definition.** $g$ is a **primitive root** modulo $n$ if the order of $g$ is $\varphi(n)$, i.e.
the powers of $g$ run through *all* units:

$$
\{g^1, g^2, \ldots, g^{\varphi(n)}\} = \{1 \leq a < n : \gcd(a, n) = 1\}.
$$

Equivalently $g$ generates the group of units, and every unit is $g^k$ for exactly one
$k \in \{1, \ldots, \varphi(n)\}$.

**Theorem (Gauss).** $n$ possesses a primitive root if and only if
$n \in \{1, 2, 4, p^k, 2p^k\}$ for odd primes $p$.

So primitive roots exist for every odd prime power (and 2, 4), but **not** for $n = 8$ (squares
of odd units are $\equiv 1 \pmod 8$) nor for most even moduli.

**Example.** Mod 7, the order of 3 is 6 = $\varphi(7)$, so 3 is a primitive root; every unit is a
power of 3. Mod 7, 2 has order 3 ($2, 4, 1$) — not a primitive root.

### 7.3 Indices (Discrete Logarithms)

If $g$ is a primitive root mod $n$ and $\gcd(a, n) = 1$, the **index** of $a$ (base $g$) is the
unique $k$ with $a \equiv g^k \pmod n$ — the **discrete logarithm**. Indices turn multiplication
into addition, exactly like logarithms:

$$
\operatorname{ind}_g(ab) \equiv \operatorname{ind}_g(a) + \operatorname{ind}_g(b) \pmod{\varphi(n)}.
$$

They are the computational engine of old-style power-congruence problems, and their **one-way
hardness** (computing $\operatorname{ind}$ from $g^k$) underlies Diffie–Hellman key exchange — see
[Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/).

### 7.4 Finding Primitive Roots

The order of any unit divides $\varphi(n)$; $g$ is primitive iff
$g^{\varphi(n)/q} \not\equiv 1$ for **every prime** $q \mid \varphi(n)$. Testing the prime
factors only is the standard shortcut.

**Example.** Mod 31, $\varphi(31) = 30 = 2 \cdot 3 \cdot 5$. Test 3:
$3^{15} \equiv$ (compute) $\not\equiv 1$, $3^{10} \equiv 26 \not\equiv 1$,
$3^6 = 729 \equiv 16 \not\equiv 1$: order 30 — 3 is a primitive root mod 31.

The number of primitive roots mod $p$ is $\varphi(p - 1)$, and they are exactly $g^k$ for
$\gcd(k, p-1) = 1$.

### 7.5 Consequences

- **Power equation solvability**: $x^m \equiv a \pmod p$ (with $g$ a primitive root and
  $\operatorname{ind}(a) = b$) reduces to the linear congruence $m k \equiv b \pmod{p - 1}$ in
  indices — solvable iff $\gcd(m, p-1) \mid b$.
- **Quadratic residues** are exactly the even-index powers: see
  [Quadratic Residues](/7-number-theory/8_quadratic-residues/).
- **Products of two squares** and related characterisations fall out of the index parity.

### 7.6 Common Pitfalls

- Checking only $g^{(p-1)/2} \not\equiv 1$ does **not** prove $g$ is primitive — all prime factors
  of $p - 1$ must be excluded.
- Primitive roots exist only for $n \in \{1, 2, 4, p^k, 2p^k\}$: there is no primitive root mod 8
  or mod 15; "find a primitive root mod 15" is a trick question.
- $\operatorname{ind}$ values live modulo $\varphi(n)$, and the discrete log of a sum is not the
  sum of discrete logs.

## See Also

- [Quadratic Residues](/7-number-theory/8_quadratic-residues/)
- [Fermat, Euler and Wilson Theorems](/7-number-theory/4_fermat-euler-and-wilson-theorems/)
- [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/)

### 7.x Index Arithmetic in Action

Solve $3^x \equiv 5 \pmod 7$ using index tables base 3: $\operatorname{ind}_3(5) = 5$ and $\operatorname{ind}_3(3) = 1$, so $x \equiv 5 \pmod 6$ — the linear-congruence method from the CRT page.


$$
\operatorname{ind}_g(ab) \equiv \operatorname{ind}_g(a) + \operatorname{ind}_g(b)
\pmod{\varphi(n)}
$$

Index arithmetic converts multiplication problems into linear congruences. To compute
$3^{17} \pmod{7}$ when 3 has order 6: reduce the exponent 17 modulo 6 to 5, and read off
$3^5 \equiv 5 \pmod 7$ from the power table. State the order reduction step explicitly.


$$
\operatorname{ind}_g(ab) \equiv \operatorname{ind}_g(a) + \operatorname{ind}_g(b)
\pmod{\varphi(n)}
$$

Index arithmetic converts multiplication problems into linear congruences. To compute
$3^{17} \pmod 7$ when 3 has order 6: reduce the exponent 17 modulo 6 to 5, and read off
$3^5 \equiv 5 \pmod 7$ from the power table. State the order reduction step explicitly.
