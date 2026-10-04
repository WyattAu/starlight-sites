---
date: 2026-09-19T00:00:00.000Z
title: "The Distribution of Primes"
description: 'UNIVERSITY Mathematics notes: Bertrand''s postulate, prime counting estimates, Dirichlet''s theorem on arithmetic progressions, and the Prime Number Theorem, with exam-level statements.'
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "The Distribution of Primes", "url": "https://mathematics.wyattau.com/7-number-theory/distribution-of-primes"}]
}
</script>

### 10.1 The Prime Counting Function

**Definition.** $\pi(x)$ counts the primes $\leq x$: $\pi(10) = 4$, $\pi(100) = 25$,
$\pi(1000) = 168$.

The primes become sparser on average but never stop. The density near $x$ behaves like
$1/\ln x$ — the heuristic at the heart of everything below: a random integer near $x$ is prime
with "probability" about $1/\ln x$.

### 10.2 Bertrand's Postulate

**Theorem (Bertrand).** For every integer $n > 1$ there is a prime $p$ with
$n < p < 2n$.

*Proof idea (Erdős's elementary argument).* Consider the prime factorisation of the central
binomial coefficient $\binom{2n}{n}$; its size ($\geq 4^n/(2n+2)$ by elementary bounds) versus the
product of prime powers below $2n$ forces at least one prime $p$ with $n < p < 2n$ to divide it —
such a prime divides the coefficient exactly once, contributing a large factor. $\blacksquare$

Immediate corollaries examinable at this level: there is always a prime between $n$ and $2n$, so
$p_{k+1} < 2 p_k$ for the $k$-th prime, and hence $p_k < 2^k$.

### 10.3 Dirichlet's Theorem

**Theorem (Dirichlet, 1837).** If $\gcd(a, m) = 1$, the arithmetic progression
$a, a+m, a+2m, \ldots$ contains infinitely many primes.

Examples: infinitely many primes $\equiv 3 \pmod 4$ (there is also an elementary Euclid-style
proof for this special case); infinitely many primes ending in ...001 (i.e. $1 \pmod{1000}$).
The general theorem needs complex analysis (L-functions) — quote it, do not prove it, unless the
course covers Dirichlet characters.

Special case worth knowing: the Euclid-style proof of infinitely many primes $\equiv 3 \pmod 4$
— suppose $p_1, \ldots, p_k$ are all of them, set $N = 4 p_1 \cdots p_k - 1$; every prime factor
of $N$ is $\equiv 3 \pmod 4$ (products of numbers $\equiv 1 \bmod 4$ are $1 \bmod 4$) and cannot
be among the $p_i$, contradiction.

### 10.4 The Prime Number Theorem

**Theorem (Hadamard, de la Vallée Poussin, 1896).**

$$
\pi(x) \sim \frac{x}{\ln x}, \qquad \text{i.e.} \qquad \lim_{x \to \infty} \frac{\pi(x)}{x/\ln x} = 1.
$$

Consequences quotable at this level:

- The $n$-th prime satisfies $p_n \sim n \ln n$.
- The average gap between consecutive primes near $x$ is about $\ln x$.
- The probability that a random integer near $x$ is prime is about $1/\ln x$.

Refinements: the logarithmic integral $\mathrm{Li}(x) = \int_2^x \frac{dt}{\ln t}$ is a better
approximation, and the **Riemann Hypothesis** asserts the error is
$O(\sqrt{x} \ln x)$ — the most famous open problem in mathematics.

### 10.5 Exam-Level Estimates

Without the PNT, elementary bounds still yield marks:

- **Euclid-style lower bound** on $\pi(x)$: $\pi(2^k) \geq k$ (Bertrand repeatedly).
- **Euler product** (heuristic and provable in the form
  $\sum_{n \leq x} 1/n \approx \prod_{p \leq x} (1 - 1/p)^{-1}$): taking logarithms relates the
  harmonic series divergence to the divergence of $\sum 1/p$ — the standard route to proving
  $\sum_{p} 1/p = \infty$ by elementary means (Euler).
- Typical structured question: use $\pi(x)$ data to estimate $\pi(10^6) \approx 10^6/\ln 10^6
\approx 72382$ against the true value 78498, and comment on the systematic overestimate of the
  naive estimate versus $\mathrm{Li}$.

### 10.6 Common Pitfalls

- $\pi(x) \sim x/\ln x$ is an **asymptotic** statement: relative error tends to 0, but the
  absolute error $\pi(x) - x/\ln x$ grows.
- Bertrand gives a prime below $2n$, **not** below $n + c$ for fixed $c$.
- Dirichlet's theorem requires $\gcd(a, m) = 1$: no primes $\equiv 0 \pmod m$ beyond $m$ itself,
  and primes $\equiv 2 \pmod 4$ beyond 2 — coprimality is necessary for infinitude.

## See Also

- [Primes and the Fundamental Theorem of Arithmetic](/7-number-theory/2_primes-and-the-fundamental-theorem-of-arithmetic/)
- [Quadratic Residues](/7-number-theory/8_quadratic-residues/)
- [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/)

### 10.x Worked Estimate

Estimate $\pi(10^8)$ using $x/\ln x$ and $\mathrm{Li}(x)$: $10^8/\ln 10^8 \approx 5{,}428{,}681$ against the true $\pi(10^8) = 5{,}761{,}455$; $\mathrm{Li}(10^8) \approx 5{,}762{,}209$ is dramatically closer. Comment on why $\mathrm{Li}$ stays closer for every measurable $x$.


$$
\pi(x) \approx \frac{x}{\ln x - 1}
$$

The shifted approximation is better over all practical ranges: at $x = 10^9$ the naive estimate
overshoots by about 6%, the shifted one by under 0.1%. Typical structured questions ask you to
compute both estimates and to explain why the logarithmic integral dominates.

A second standard question type: given $\pi(100) = 25$ and $\pi(200) = 46$, estimate the number
of primes between 100 and 200 as $\frac{200}{\ln 200} - \frac{100}{\ln 100} \approx 46 - 25
= 21$, and note that direct counting gives 21 — interval estimates are already accurate at this
size. Close by stating Bertrand: there is always a prime in any such interval of the form
$(n, 2n)$.

A closing remark for exams: quote $\pi(2^{20})$-style data accurately if the question supplies it, and never round intermediate logarithms — the marker scheme penalises premature rounding far more than the final answer.
A useful sanity check for estimates: $\pi(x)$ increases by exactly 1 at each prime, so any approximation must stay constant between primes — quote this when explaining why pointwise error is unavoidable.
