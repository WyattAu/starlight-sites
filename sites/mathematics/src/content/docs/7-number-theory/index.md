---
sources:
  - text: Niven, Zuckerman & Montgomery - An Introduction to the Theory of Numbers
  - text: Burton - Elementary Number Theory
  - text: Hardy & Wright - An Introduction to the Theory of Numbers

title: "Number Theory"
description: "UNIVERSITY Mathematics module: divisibility, primes, congruences, the Chinese Remainder Theorem, arithmetic functions, primitive roots, quadratic residues, Pell's equation, the distribution of primes, and the number theory behind modern cryptography."
date: 2026-09-19T00:00:00.000Z
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}]
}
</script>

## Number Theory

> **Info:** University module — from the Euclidean algorithm to RSA.
>
Number theory is the arithmetic of the integers: primes, divisibility, congruences, and the deep
structure hiding behind them. It is the oldest branch of mathematics and the foundation of modern
cryptography. This module builds the theory from first principles (divisibility and Bézout) to
public-key encryption (RSA, Diffie–Hellman).

## Module Structure

### Foundations

1. [Divisibility and the Euclidean Algorithm](/7-number-theory/1_divisibility-and-euclidean-algorithm/) — division algorithm, gcd, Bézout, extended Euclid
2. [Primes and the Fundamental Theorem of Arithmetic](/7-number-theory/2_primes-and-the-fundamental-theorem-of-arithmetic/) — Euclid's infinitude proof, unique factorisation, divisor counting

### Congruence Arithmetic

3. [Congruences](/7-number-theory/3_congruences/) — residue classes, the ring $\mathbb{Z}/n\mathbb{Z}$, exponent reduction
4. [Fermat, Euler and Wilson Theorems](/7-number-theory/4_fermat-euler-and-wilson-theorems/) — exponent reduction laws, the totient, primality certificates
5. [Linear Congruences and the Chinese Remainder Theorem](/7-number-theory/5_linear-congruences-and-the-chinese-remainder-theorem/) — solvability, CRT with proof, non-coprime systems

### Structure of the Multiplicative Group

6. [Arithmetic Functions](/7-number-theory/6_arithmetic-functions/) — $\varphi$, $\tau$, $\sigma$, $\mu$, multiplicativity, Möbius inversion
7. [Primitive Roots and Discrete Logarithms](/7-number-theory/7_primitive-roots-and-discrete-logarithms/) — element orders, indices, which moduli have primitive roots

### Quadratic and Diophantine Theory

8. [Quadratic Residues](/7-number-theory/8_quadratic-residues/) — Euler's criterion, Legendre symbol, quadratic reciprocity
9. [Pell's Equation and Sums of Squares](/7-number-theory/9_sums-of-squares-and-pells-equation/) — continued-fraction solutions, two-square and four-square theorems

### The Big Picture

10. [The Distribution of Primes](/7-number-theory/10_distribution-of-primes/) — Bertrand, Dirichlet, the Prime Number Theorem
11. [Continued Fractions](/7-number-theory/11_continued-fractions/) — convergents, best approximations, periodic expansions
12. [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/) — RSA, Diffie–Hellman, ElGamal

## Prerequisites

Comfort with proof by induction and contradiction. Everything else is built in-module from the
division algorithm onward.

## Assessment Alignment

- **Computation**: Euclidean algorithm, modular exponentiation, CRT reconstructions
- **Proof**: Euclid's lemma, Fermat and Euler theorems, CRT uniqueness, quadratic reciprocity
- **Applications**: linear congruence systems, primality testing, RSA and Diffie–Hellman

## See Also

- [Number Theory Flashcards](flashcards-number-theory)
- [Number Theory Practice Problems](practice-number-theory)
- [Probability and Statistics](/8-probability-and-statistics/)
