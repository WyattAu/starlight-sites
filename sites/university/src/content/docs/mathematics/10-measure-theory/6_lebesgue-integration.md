---
title: Lebesgue Integration
tags:
  - Mathematics
  - University
description: ""s Inequality).** If $f \geq 0$ is measurable, then for any $a > 0$:

$$\mu(\{x : |f(x)| \geq a\}) \leq \frac{1}{a}\int |f|\, d\mu$$

**Theorem 6.4 (Chebyshev's Inequality).** If $f \in L^2(\mu)$, then for any $a > 0$:

$$\mu(\{|f - \int f\, d\mu| \geq a\}) \leq \frac{1}{a^2}\mathrm{Var}(f)$$

### 6.4 Convergence Theorems

**Theorem 6.5 (Monotone Convergence Theorem -- Levi).** If $0 \leq f_1 \leq f_2 \leq \cdots$ are
measurable and $f_n \to f$ pointwise, then:

$$\lim_{n \to \infty} \int f_n\, d\mu = \int f\, d\mu$$

_Proof sketch._ Let $s$ be a simple function with $s \leq f$. Define
$E_n = \{x : f_n(x) \geq (1 - \varepsilon)s(x)\}$. Then $E_n \nearrow X$ and
$\int f_n\, d\mu \geq (1 - \varepsilon)\int s\, d\mu$ for large $n$. Take $\sup$ over $s$ and let
$\varepsilon \to 0$. $\blacksquare$

**Theorem 6.6 (Fatou's Lemma).** If $f_n \geq 0$ are measurable, then:

$$\int \liminf_{n\to\infty} f_n\, d\mu \leq \liminf_{n\to\infty} \int f_n\, d\mu$$

_Proof._ Define $g_n = \inf_{k \geq n} f_k$. Then $0 \leq g_1 \leq g_2 \leq \cdots$ and
$g_n \to \liminf f_n$. By monotone convergence:

$$\int \liminf f_n\, d\mu = \lim_{n\to\infty} \int g_n\, d\mu \leq \liminf_{n\to\infty} \int f_n\, d\mu$$

$\blacksquare$

**Theorem 6.7 (Dominated Convergence Theorem).** If $f_n \to f$ a.e. and there exists
$g \in L^1(\mu)$ with $|f_n| \leq g$ a.e. for all $n$, then:

$$\lim_{n\to\infty} \int f_n\, d\mu = \int f\, d\mu$$

_Proof sketch._ Apply Fatou's lemma to $g + f_n$ and $g - f_n$:

$$\int f\, d\mu \leq \liminf \int f_n\, d\mu \quad \text{and} \quad \int f\, d\mu \geq \limsup \int f_n\, d\mu$$

Combining gives the result. $\blacksquare$

### 6.5 Worked Example

**Problem.** Compute $\lim_{n \to \infty} \int_0^1 (1 - x^2/n)^n\, dx$.

_Solution._ For each $x \in [0, 1]$, $(1 - x^2/n)^n \to e^{-x^2}$ as $n \to \infty$. Since
$0 \leq (1 - x^2/n)^n \leq 1$ for all $n$ and $x$, we can apply the dominated convergence theorem
with $g(x) = 1 \in L^1([0, 1])$:

$$\lim_{n\to\infty} \int_0^1 (1 - x^2/n)^n\, dx = \int_0^1 e^{-x^2}\, dx = \frac{\sqrt{\pi}}{2}\,\mathrm{erf}(1) \approx 0.7468$$

$\blacksquare$

