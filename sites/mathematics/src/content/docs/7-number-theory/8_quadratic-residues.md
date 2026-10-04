---
date: 2026-09-19T00:00:00.000Z
title: "Quadratic Residues"
description: 'UNIVERSITY Mathematics notes: quadratic residues, Euler''s criterion, the Legendre symbol, its multiplicativity and Euler''s criterion-based evaluation, and the solvability of x² ≡ a (mod p).'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Quadratic Residues", "url": "https://mathematics.wyattau.com/7-number-theory/quadratic-residues"}]
}
</script>

### 8.1 Quadratic Residues

**Definition.** For $p$ prime and $p \nmid a$, $a$ is a **quadratic residue** (QR) mod $p$ if
$x^2 \equiv a \pmod p$ is solvable, and a **non-residue** otherwise.

For odd $p$, exactly half of the nonzero residue classes are QRs: the map $x \mapsto x^2$ on
$(\mathbb{Z}/p\mathbb{Z})^\times$ is two-to-one ($x$ and $-x$), so its image has
$(p-1)/2$ elements. Example mod 7: squares are $1, 4, 2, 2, 4, 1$ — QRs are $\{1, 2, 4\}$.

### 8.2 Euler's Criterion

$$
a^{(p-1)/2} \equiv \begin{cases} 1 & a \text{ is a QR} \\ -1 & a \text{ is a non-residue}\end{cases} \pmod p.
$$

*Proof sketch.* With $g$ a primitive root, $a = g^k$; then
$a^{(p-1)/2} = g^{k(p-1)/2} \equiv 1$ iff $(p-1) \mid k(p-1)/2$, i.e. $k$ even iff $a$ is a QR.
If $a$ is a non-residue ($k$ odd), $a^{(p-1)/2}$ squares to 1 but is not 1, hence is $-1$
(only two square roots of 1 mod $p$). $\blacksquare$

### 8.3 The Legendre Symbol

$$
\left(\frac{a}{p}\right) = \begin{cases} 1 & a \text{ QR mod } p \\ -1 & a \text{ non-residue} \\ 0 & p \mid a \end{cases}
$$

Euler's criterion becomes
$\left(\frac{a}{p}\right) \equiv a^{(p-1)/2} \pmod p$ — a fast evaluation method.

**Properties.**

- Multiplicativity: $\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right)\left(\frac{b}{p}\right)$.
- $\left(\frac{-1}{p}\right) = (-1)^{(p-1)/2}$: $-1$ is a QR exactly for $p \equiv 1 \pmod 4$.
- $\left(\frac{2}{p}\right) = (-1)^{(p^2-1)/8}$: 2 is a QR exactly for $p \equiv \pm 1 \pmod 8$.
- **Quadratic reciprocity** (Gauss): for odd primes $p \neq q$,
  $\left(\frac{p}{q}\right)\left(\frac{q}{p}\right) = (-1)^{\frac{p-1}{2}\frac{q-1}{2}}$ — the
  deep theorem that lets you evaluate any Legendre symbol by repeated reduction.

**Worked example.** Is 5 a QR mod 23? $23 \equiv 3 \pmod 5$. Reciprocity:
$\left(\frac{5}{23}\right) = \left(\frac{23}{5}\right)$ (sign $= (-1)^{11 \cdot 2} = +1$), and
$23 \equiv 3 \pmod 5$: $\left(\frac{3}{5}\right) = -1$ (squares mod 5 are 1, 4). So 5 is a
non-residue mod 23. Check by Euler: $5^{11} \equiv -1 \pmod{23}$.

### 8.4 Counting Solutions of $x^2 \equiv a$

For odd $p$ and $p \nmid a$:

- $a$ QR: exactly **two** solutions, $x$ and $p - x$ (found by Tonelli's algorithm or trial).
- $a$ non-residue: **zero** solutions.

The equation $x^2 \equiv a \pmod{p^k}$ behaves differently: solutions lift uniquely from mod $p$
when $p$ is odd. For $x^2 \equiv a \pmod{2^k}$ the 2-adic analysis is more delicate — a favourite
distinction-level question.

### 8.5 Worked Problems

**Problem 1.** Determine $\left(\frac{7}{13}\right)$ and, if 7 is a QR, solve $x^2 \equiv 7$.

Euler: $7^6 \pmod{13}$: $7^2 = 49 \equiv 10$, $7^4 \equiv 100 \equiv 9$, $7^6 \equiv 9 \cdot 10
= 90 \equiv 12 \equiv -1$. So 7 is a non-residue: no solutions.

**Problem 2.** Show $x^2 \equiv -1 \pmod p$ is solvable iff $p = 2$ or $p \equiv 1 \pmod 4$.
Euler: $(-1)^{(p-1)/2} = 1$ iff $p \equiv 1 \pmod 4$.

### 8.6 Common Pitfalls

- Euler's criterion works **only for odd prime** $p$.
- $\left(\frac{a}{p}\right) = 1$ gives two solutions, not one: remember $\pm x$.
- Reciprocity sign bookkeeping: the exponent is $\frac{p-1}{2}\cdot\frac{q-1}{2}$; an odd product
  flips the symbol, an even one does not.
- Composite moduli need the Jacobi symbol $(a/n)$, which is **multiplicative but does not decide**
  solvability when $n$ is composite: $\left(\frac{a}{n}\right) = 1$ does not imply $x^2 \equiv a$
  is solvable.

## See Also

- [Primitive Roots and Discrete Logarithms](/7-number-theory/7_primitive-roots-and-discrete-logarithms/)
- [Congruences](/7-number-theory/3_congruences/)
- [Pell's Equation and Diophantine Equations](/7-number-theory/9_sums-of-squares-and-pells-equation/)

### 8.x A Counting Check

Mod 11, the QRs are $\{1, 3, 4, 5, 9\}$ — exactly $(11-1)/2 = 5$ classes. Verify by squaring $1, \ldots, 10$ and note the symmetry $x$ and $11 - x$ share a square.


$$
\left(\frac{a}{p}\right) \equiv a^{(p-1)/2} \pmod p
$$

Euler's criterion doubles as a computation recipe: exponentiate and read the sign. For
$p = 23$, $a = 5$: $5^{11} \equiv -1 \pmod{23}$, so 5 is a non-residue and $x^2 \equiv 5$ has
no solution. Pair this with reciprocity for a two-mark derivation.


$$
\left(\frac{a}{p}\right) \equiv a^{(p-1)/2} \pmod p
$$

Euler's criterion doubles as a computation recipe: exponentiate and read the sign. For
$p = 23$, $a = 5$: $5^{11} \equiv -1 \pmod{23}$, so 5 is a non-residue and $x^2 \equiv 5$ has
no solution. Pair this with reciprocity for a two-mark derivation.
Euler's criterion also solves $x$: when $a^{(p+1)/4} \equiv \pm x$ for $p \equiv 3 \pmod 4$, squaring recovers $a$ — the two solutions are negatives of each other.

### 8.x A QR Table Worth Memorising

Mod 11 the QRs are $\{1, 3, 4, 5, 9\}$ and mod 13 they are $\{1, 3, 4, 9, 10, 12\}$ — five and six classes respectively, each exactly half of the nonzero residues as Euler's criterion predicts.
