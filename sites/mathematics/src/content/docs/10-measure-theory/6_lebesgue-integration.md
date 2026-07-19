---
title: Lebesgue Integration
tags:
  - Mathematics
  - University
description: "For a non-negative measurable simple function with and disjoint, define: Comprehensive educational content coverage with definitions and practice problems."
---

### 6.1 Integral of Non-Negative Functions

For a non-negative measurable simple function $s = \sum_{i=1}^n a_i \chi_{A_i}$ with $a_i \geq 0$
and $\{A_i\}$ disjoint, define:

$$\int_X s\, d\mu = \sum_{i=1}^n a_i \mu(A_i)$$

For a non-negative measurable function $f$, define:

$$\int_X f\, d\mu = \sup\left\{\int_X s\, d\mu : 0 \leq s \leq f,\ s \text{ simple}\right\}$$

This definition is consistent with Theorem 5.4: by monotone convergence, we also have

$$\int_X f\, d\mu = \lim_{n \to \infty} \int_X s_n\, d\mu$$

for any increasing sequence of simple functions $s_n \nearrow f$.

### 6.2 Integral of General Functions

For a measurable function $f : X \to \mathbb{R}$, define $f^+ = \max(f, 0)$ and $f^- = \max(-f, 0)$,
so $f = f^+ - f^-$ and $|f| = f^+ + f^-$. If $\int f^+\, d\mu < \infty$ and
$\int f^-\, d\mu < \infty$ (i.e., $\int |f|\, d\mu < \infty$), define:

$$\int_X f\, d\mu = \int_X f^+\, d\mu - \int_X f^-\, d\mu$$

The function $f$ is called **integrable** (or $f \in L^1(\mu)$) if $\int |f|\, d\mu < \infty$.

### 6.3 Properties of the Integral

**Proposition 6.1 (Linearity).** If $f, g \in L^1(\mu)$ and $a, b \in \mathbb{R}$, then
$af + bg \in L^1(\mu)$ and $\int(af + bg)\, d\mu = a\int f\, d\mu + b\int g\, d\mu$.

**Proposition 6.2 (Monotonicity).** If $f \leq g$ a.e., then $\int f\, d\mu \leq \int g\, d\mu$.

**Proposition 6.3 (Markov"s Inequality).** If $f \geq 0$ is measurable, then for any $a > 0$:

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

### 6.6 Key Relationships

| Theorem            | Hypothesis                                      | Conclusion                                                     | Role                                |
| ------------------ | ----------------------------------------------- | -------------------------------------------------------------- | ----------------------------------- |
| MCT (Levi)         | $f_n \nearrow f$ pointwise, $f_n \geq 0$        | $\int f_n \to \int f$                                          | Foundation for all limit theorems   |
| Fatou's lemma      | $f_n \geq 0$ measurable                         | $\int \liminf f_n \leq \liminf \int f_n$                       | Works without convergence           |
| DCT                | $f_n \to f$ a.e., $|f_n| \leq g \in L^1$       | $\int f_n \to \int f$                                          | Most widely used limit theorem      |
| Markov's inequality| $f \geq 0$ meas., $a > 0$                       | $\mu(\{f \geq a\}) \leq \frac{1}{a}\int f$                    | Bounds tail probabilities           |

The three convergence theorems are related: DCT follows from Fatou, and Fatou follows from MCT. Together they form the backbone of Lebesgue integration theory.

### 6.7 Common Pitfalls

- **Applying DCT without a dominating function.** If $|f_n| \leq g$ fails for some $n$, the limit may not pass through the integral. **Fix:** Always verify existence of $g \in L^1$ dominating all $f_n$ almost everywhere.
- **Confusing pointwise and uniform convergence.** DCT only requires a.e. pointwise convergence, not uniform. **Fix:** The theorem is powerful precisely because it relaxes the uniform-convergence requirement of Riemann integration.
- **Assuming monotone convergence needs boundedness.** MCT requires only monotonicity and non-negativity; the limit may be infinite. **Fix:** If $\int f_n$ diverges, the theorem correctly gives $\int f = \infty$.
- **Forgetting the non-negativity in Fatou.** Without $f_n \geq 0$, the inequality $\int \liminf f_n \leq \liminf \int f_n$ can fail. **Fix:** Apply Fatou to $f_n + g$ with $g$ integrable, then subtract.

### 6.8 Intuition: What Is Lebesgue Integration?

Lebesgue integration is a more flexible way to define the integral that overcomes limitations of the Riemann integral. The Riemann integral partitions the domain (the $x$-axis) into small intervals and sums the function values on each interval. The Lebesgue integral partitions the range (the $y$-axis) and measures how much of the domain maps to each range interval. This swap of perspective is what makes Lebesgue integration more powerful.

The key advantage is that the Lebesgue integral can handle functions with wild discontinuities. The Riemann integral of the Dirichlet function (1 on rationals, 0 on irrationals) does not exist, but its Lebesgue integral is 0 because the rationals have measure zero. The monotone convergence theorem and dominated convergence theorem allow limits and integrals to be interchanged under very general conditions, which is essential for analysis. These theorems fail for Riemann integration, which requires uniform convergence. Lebesgue integration also provides the natural setting for $L^p$ spaces, Fourier analysis, and probability theory.

### 6.9 Applications

- **Fourier series:** DCT justifies term-by-term integration of Fourier series, allowing computation of coefficients by integrating the series.
- **Probability theory:** Markov's and Chebyshev's inequalities are essential for proving laws of large numbers and concentration bounds.
- **$L^p$ spaces:** MCT and DCT are used to prove completeness of $L^p$ spaces and to exchange limits with norms.
- **Fubini's theorem:** Tonelli's theorem (MCT for non-negative functions) and Fubini's theorem (DCT for integrable functions) justify swapping the order of integration.

### 6.9 Summary Table

| Integral type        | Definition                                                              | Key property                     |
| -------------------- | ----------------------------------------------------------------------- | -------------------------------- |
| Simple function      | $\sum a_i \chi_{A_i}$ with $a_i \geq 0$, $\{A_i\}$ disjoint             | $\int = \sum a_i \mu(A_i)$       |
| Non-negative meas.   | $\sup\{\int s : 0 \leq s \leq f,\ s\text{ simple}\}$                    | MCT applies                      |
| General measurable   | $\int f = \int f^+ - \int f^-$                                          | $f \in L^1$ iff $\int|f| < \infty$ |

## Cross-References

- **[Measures](2_measures.md)**: Lebesgue integration is built on measure theory, with the integral defined as a supremum over simple functions.
- **[Sigma-Algebras and Measurable Spaces](1_sigma-algebras-and-measurable-spaces.md)**: Measurable functions and their integrals are defined with respect to a sigma-algebra on the domain.
- **[Riemann Integration](../../3-real-analysis/6_riemann-integration.md)**: Every Riemann integrable function is Lebesgue integrable, but the Lebesgue integral handles a strictly larger class of functions.

### 6.10 Worked Example: Applying DCT to a Sequence with Oscillations

**Problem.** Evaluate $\lim_{n\to\infty} \int_0^\pi \frac{\sin(nx)}{n}\, dx$ using the dominated convergence theorem.

**Solution.** Let $f_n(x) = \sin(nx)/n$. For each $x \in [0,\pi]$, $|f_n(x)| \leq 1/n \to 0$, so $f_n \to 0$ pointwise. Also $|f_n(x)| \leq 1$ for all $n$ and $x$, and $g(x) = 1$ is integrable on $[0,\pi]$. By DCT:

$$\lim_{n\to\infty} \int_0^\pi \frac{\sin(nx)}{n}\, dx = \int_0^\pi 0\, dx = 0$$

We can verify directly: $\int_0^\pi \sin(nx)\, dx = [-\cos(nx)/n]_0^\pi = (1 - (-1)^n)/n$, so the integral is $0$ for even $n$ and $2/n^2$ for odd $n$, both vanishing as $n\to\infty$.

$\blacksquare$

