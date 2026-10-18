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
- **Euler's theorem**: $\sum_{p} \frac{1}{p} = \infty$ — proved below; the sketch
  above becomes a theorem.
- Typical structured question: use $\pi(x)$ data to estimate
  $\pi(10^6) \approx 10^6/\ln 10^6 \approx 72382$ against the true value 78498,
  and comment on the systematic overestimate of the naive estimate versus
  $\mathrm{Li}$.

### The divergence of the sum of reciprocal primes

**Theorem (Euler, 1737).** $\sum_{p\ \mathrm{prime}} \frac{1}{p} = \infty$.

*Proof.* The proof is a rigourisation of the Euler product, and it is worth
doing in full because the product is the ancestor of the Riemann zeta function.

*Step 1: the finite product identity.* For any $x$ and any finite set of primes
$P$,

$$
\sum_{n \leq x} \frac{1}{n} \;\leq\; \prod_{p \in P,\ p \leq x} \left(1 - \frac{1}{p}\right)^{-1},
$$

where $P$ is taken to be all primes $\leq x$. Why: expanding each factor as the
geometric series $\left(1 - \frac{1}{p}\right)^{-1} = \sum_{k \geq 0} p^{-k}$,
the product expands into $\sum \frac{1}{p_1^{k_1} \cdots p_r^{k_r}}$ over all
multisets of the primes in $P$ — and every $n \leq x$ factors into primes
$\leq x \leq$ those in $P$, so its reciprocal $\frac{1}{n}$ is one of the terms
of that expansion. Every term of the harmonic sum appears in the expansion, and
the expansion has only non-negative terms, so it dominates.

*Step 2: the product is at most the harmonic series.* The expansion

$$
\prod_{p \leq x} \left(1 - \frac{1}{p}\right)^{-1}
= \prod_{p \leq x} \sum_{k \geq 0} \frac{1}{p^k}
$$

produces exactly the reciprocals of the numbers whose prime factors all lie in
$P$ — every one of them a positive integer, each appearing once. So the expanded
sum is a **sub-sum of the harmonic series**, and since all terms are positive,

$$
\prod_{p \leq x} \left(1 - \frac{1}{p}\right)^{-1}
\leq \sum_{n=1}^{\infty} \frac{1}{n}.
$$

(Cleaner than bounding: the sub-sum statement is all Step 4 needs, and it is
exact.)

*Step 3: the logarithm computation.* Take logarithms of the finite product:

$$
\log\prod_{p \leq x}\left(1 - \frac{1}{p}\right)^{-1}
= -\sum_{p \leq x}\log\left(1 - \frac{1}{p}\right)
= \sum_{p \leq x}\sum_{k \geq 1}\frac{1}{k\,p^k},
$$

expanding each $\log(1 - u)^{-1} = \sum_{k\geq1} u^k/k$. The $k = 1$ terms are
exactly $\sum_{p \leq x} \frac{1}{p}$; the $k \geq 2$ terms are bounded
*uniformly in $x$*:

$$
\sum_{p}\sum_{k \geq 2}\frac{1}{k p^k}
\leq \sum_{p}\sum_{k\geq 2}\frac{1}{p^k}
= \sum_p \frac{1}{p(p-1)}
\leq \sum_{n=2}^{\infty}\frac{1}{n(n-1)} = 1,
$$

using $p^k \geq p^2 \geq p(p-1)$ for $k \geq 2$ and the telescoping of
$\frac{1}{n(n-1)} = \frac 1{n-1} - \frac 1n$. So

$$
\sum_{p \leq x}\frac{1}{p} \;\geq\; \log\prod_{p\leq x}\left(1-\frac 1p\right)^{-1} - 1.
$$

*Step 4: assemble.* The harmonic series diverges, so
$\log\sum_{n\leq x}\frac 1n \to \infty$; by Step 2 the product tends to infinity
with it; by Step 3 the sum of reciprocal primes is at least (log of the product)
minus 1, hence diverges. $\blacksquare$

The theorem is stronger than infinitude: *not only are there infinitely many
primes, they are dense enough that their reciprocals diverge* — while the
reciprocal squares $\sum_p 1/p^2$ converge (by comparison with
$\sum_n 1/n^2 < \infty$). Primes are, in this precise sense, much more common
than squares.

The same product is the Riemann zeta function's Euler product
$\zeta(s) = \prod_p (1 - p^{-s})^{-1}$, and the PNT is the statement about how
$\zeta$'s analytic behaviour controls $\pi(x)$. The divergence proved above is
the $s \to 1$ edge of that analytic theory.

### 10.5 Exam-Level Estimates

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
of primes between 100 and 200 as $\frac{200}{\ln 200} - \frac{100}{\ln 100} \approx 46 - 25 = 21$, and note that direct counting gives 21 — interval estimates are already accurate at this
size. Close by stating Bertrand: there is always a prime in any such interval of the form
$(n, 2n)$.

A closing remark for exams: quote $\pi(2^{20})$-style data accurately if the question supplies it, and never round intermediate logarithms — the marker scheme penalises premature rounding far more than the final answer.
A useful sanity check for estimates: $\pi(x)$ increases by exactly 1 at each prime, so any approximation must stay constant between primes — quote this when explaining why pointwise error is unavoidable.
