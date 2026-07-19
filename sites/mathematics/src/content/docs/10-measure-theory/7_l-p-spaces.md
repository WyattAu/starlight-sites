---
title: $L^p$ Spaces
tags:
  - Mathematics
  - University
description: "$L^p$ Spaces: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems."
---

### 7.1 Definition

For $1 \leq p < \infty$, define

$$L^p(\mu) = \left\{f : X \to \mathbb{R} \text{ measurable} : \int_X |f|^p\, d\mu < \infty\right\}$$

with the norm $\|f\|_p = \left(\int |f|^p\, d\mu\right)^{1/p}$.

For $p = \infty$, define
$L^\infty(\mu) = \{f : X \to \mathbb{R} \text{ measurable} : \text{ess sup}|f| < \infty\}$ where
$\|f\|_\infty = \mathrm{ess\,sup}|f|$.

**Remark.** Elements of $L^p$ are equivalence classes of functions equal a.e. The norm $\|\cdot\|_p$
is well-defined on equivalence classes.

### 7.2 Holder"s Inequality

**Theorem 7.1 (Holder's Inequality).** Let $1 \leq p, q \leq \infty$ with $1/p + 1/q = 1$. If
$f \in L^p(\mu)$ and $g \in L^q(\mu)$, then $fg \in L^1(\mu)$ and

$$\|fg\|_1 \leq \|f\|_p \cdot \|g\|_q$$

_Proof sketch._ Use Young's inequality: $ab \leq a^p/p + b^q/q$ for $a, b \geq 0$. Set
$a = |f|/\|f\|_p$ and $b = |g|/\|g\|_q$ and integrate. $\blacksquare$

**Special case ($p = q = 2$):** This reduces to the **Cauchy-Schwarz inequality**:
$\|fg\|_1 \leq \|f\|_2 \|g\|_2$.

### 7.3 Minkowski's Inequality

**Theorem 7.2 (Minkowski's Inequality).** For $1 \leq p \leq \infty$ and $f, g \in L^p(\mu)$:

$$\|f + g\|_p \leq \|f\|_p + \|g\|_p$$

_Proof sketch (for $1 < p < \infty$)._ Write $|f + g|^p = |f + g| \cdot |f + g|^{p-1}$. Apply
Holder's inequality with conjugate exponents $p$ and $q = p/(p-1)$:

$$\int |f + g|^p \leq \|f\|_p \|f + g\|_p^{p/q} + \|g\|_p \|f + g\|_p^{p/q}$$

Divide both sides by $\|f + g\|_p^{p/q}$. $\blacksquare$

### 7.4 Completeness of $L^p$

**Theorem 7.3.** $(L^p(\mu), \|\cdot\|_p)$ is a Banach space for every $1 \leq p \leq \infty$.

_Proof sketch._ Let $\{f_n\}$ be a Cauchy sequence in $L^p$. Extract a subsequence $f_{n_k}$ with
$\|f_{n_{k+1}} - f_{n_k}\|_p < 2^{-k}$. Define
$g = |f_{n_1}| + \sum_{k=1}^{\infty} |f_{n_{k+1}} - f_{n_k}|$. By the triangle inequality,
$\|g\|_p \leq \|f_{n_1}\|_p + 1$. So $g \in L^p$, hence $g < \infty$ a.e., meaning $f_{n_k}$
converges a.e. to some $f$. Show $f \in L^p$ and $f_n \to f$ in $L^p$-norm. $\blacksquare$

**Theorem 7.4.** $L^2(\mu)$ is a Hilbert space with inner product
$\langle f, g \rangle = \int f\overline{g}\, d\mu$.

### 7.5 Inclusions

**Proposition 7.5.** If $\mu$ is a finite measure and $1 \leq p < q \leq \infty$, then
$L^q(\mu) \subseteq L^p(\mu)$. In particular, $L^\infty(\mu) \subseteq L^2(\mu) \subseteq L^1(\mu)$.

_Proof._ Apply Holder's inequality with $q/p$ and its conjugate. $\blacksquare$

### 7.6 Dual Spaces

**Theorem 7.6 (Riesz Representation for $L^p$).** For $1 < p < \infty$, the dual space $(L^p)^*$ is isometrically isomorphic to $L^q$, where $1/p + 1/q = 1$. The pairing is:

$$\langle f, g \rangle = \int f g\, d\mu, \quad f \in L^p, g \in L^q$$

This also holds for $p = 1$ provided $\mu$ is $\sigma$-finite (the dual of $L^1$ is $L^\infty$). For $p = \infty$, the dual is strictly larger than $L^1$ (except for finite-dimensional spaces).

### 7.7 Uniform Convexity

**Proposition 7.7.** For $1 < p < \infty$, $L^p$ spaces are **uniformly convex**: for any $\varepsilon > 0$, there exists $\delta > 0$ such that if $\|f\|_p = \|g\|_p = 1$ and $\|f - g\|_p \geq \varepsilon$, then $\|(f + g)/2\|_p \leq 1 - \delta$.

Uniform convexity implies reflexivity for $1 < p < \infty$ and guarantees the existence and uniqueness of best approximations in closed convex subspaces.

### 7.8 Density Results

**Proposition 7.8 (Density of Simple Functions).** Simple functions are dense in $L^p(\mu)$ for $1 \leq p < \infty$. For the Lebesgue measure on $\mathbb{R}^n$, the following are also dense:
1. Step functions (finite linear combinations of characteristic functions of rectangles)
2. Continuous functions with compact support $C_c(\mathbb{R}^n)$
3. Smooth functions with compact support $C_c^\infty(\mathbb{R}^n)$

### 7.9 Convergence in $L^p$

**Proposition 7.9.** If $f_n \to f$ in $L^p$, then there exists a subsequence $f_{n_k}$ that converges pointwise a.e. to $f$. The converse is false: pointwise convergence a.e. does not imply $L^p$ convergence (counterexample: $f_n = n\chi_{[0, 1/n]}$ on $[0, 1]$ converges pointwise to $0$ but $\|f_n\|_1 = 1$ for all $n$).

**Theorem 7.10 (Dominated Convergence in $L^p$).** If $f_n \to f$ a.e. and there exists $g \in L^p$ such that $|f_n| \leq g$ a.e. for all $n$, then $f_n \to f$ in $L^p$.

### 7.10 Worked Example: $L^p$ Norm Behaviour

**Problem.** Let $f(x) = x^{-1/2}$ on $(0, 1)$ with Lebesgue measure. For which $p$ does $f \in L^p(0, 1)$?

<details>
<summary>Solution</summary>

Compute $\int_0^1 |f(x)|^p dx = \int_0^1 x^{-p/2} dx$. This integral converges iff $-p/2 > -1$, i.e., $p < 2$. So $f \in L^p(0, 1)$ precisely for $1 \leq p < 2$. Note $f \notin L^2(0, 1)$ (the integral diverges logarithmically at the boundary).

$\blacksquare$

</details>

### 7.11 Worked Example: Interpolation

**Problem.** Show that if $f \in L^p \cap L^q$ with $1 \leq p < q \leq \infty$, then $f \in L^r$ for all $r \in [p, q]$.

<details>
<summary>Solution</summary>

Write $r = \theta p + (1-\theta)q$ with $\theta \in [0, 1]$, so $1 = \theta p/r + (1-\theta)q/r$. Apply Holder's inequality with exponents $r/(\theta p)$ and $r/((1-\theta)q)$:

$$\int |f|^r = \int |f|^{\theta p} |f|^{(1-\theta)q} \leq \left(\int |f|^p\right)^{\theta r/p} \left(\int |f|^q\right)^{(1-\theta) r/q}$$

Therefore $\|f\|_r \leq \|f\|_p^\theta \|f\|_q^{1-\theta}$, establishing both that $f \in L^r$ and a quantitative interpolation inequality.

$\blacksquare$

</details>

### 7.14 Common Mistakes

**Mistake 1: Confusing $L^p$ spaces with $\ell^p$ spaces**
$L^p(\mu)$ consists of measurable functions with finite $p$-norm, while $\ell^p$ consists of sequences with finite $p$-norm. They are different spaces: $L^p$ is a function space and $\ell^p$ is a sequence space. For counting measure on $\mathbb{N}$, $L^p(\mathbb{N})$ coincides with $\ell^p$, but this is a special case.

**Mistake 2: Assuming $L^p$ convergence implies pointwise convergence**
$L^p$ convergence does not imply pointwise convergence everywhere. A sequence can converge in $L^p$-norm while diverging on a set of measure zero. Conversely, pointwise convergence a.e. does not imply $L^p$ convergence (counterexample: $f_n = n\chi_{[0,1/n]}$). Use the dominated convergence theorem to bridge the two.

**Mistake 3: Assuming completeness implies reflexivity**
$L^p$ spaces are complete (Banach spaces) for all $1 \leq p \leq \infty$, but they are reflexive only for $1 < p < \infty$. The spaces $L^1$ and $L^\infty$ are not reflexive. Reflexivity requires the natural embedding into the bidual to be surjective, which fails for $p = 1$ and $p = \infty$.

**Definition.** The **weak $L^p$ space** $L^{p,\infty}(\mu)$ consists of measurable functions for which

$$[f]_{p,\infty} = \sup_{t > 0} t\, \mu(\{x : |f(x)| > t\})^{1/p} < \infty$$

Weak $L^p$ spaces are larger than $L^p$: $L^p \subseteq L^{p,\infty}$ with $\|f\|_{p,\infty} \leq \|f\|_p$.

**Example.** The function $f(x) = 1/|x|^{1/p}$ on $\mathbb{R}$ is in $L^{p,\infty}$ but not in $L^p$ (the singularity is just barely non-integrable in the $L^p$ sense).

**Lorentz spaces** $L^{p,q}(\mu)$ refine the $L^p$ scale, with $L^{p,p} = L^p$ and $L^{p,\infty}$ being weak $L^p$. They are important in interpolation theory and harmonic analysis.

### 7.13 Worked Example: $L^p$ on a Finite Measure Space

## Cross-References

- **[Measurable Functions](./5_measurable-functions.md)**: Defines the measurability requirement for functions in $L^p$ spaces and the convergence modes that connect to $L^p$ convergence.
- **[Fubini and Tonelli Theorems](./8_fubini-and-tonelli-theorems.md)**: Justifies iterated integration over product spaces, essential for computing integrals of functions in $L^p(\mu \times \nu)$.
- **[Normed Spaces and Banach Spaces](../11-functional-analysis/1_normed-spaces-and-banach-spaces.md)**: Places $L^p$ spaces in the broader framework of Banach space theory, where they serve as fundamental examples.
- **[Inner Product Spaces and Hilbert Spaces](../11-functional-analysis/2_inner-product-spaces-and-hilbert-spaces.md)**: Specialises the theory to $L^2$, where the inner product structure enables orthogonal projections and spectral theory.

## Intuition

$L^p$ spaces formalise the idea of "how big" a function is by integrating its $p$-th power. The $L^2$ space is the familiar Hilbert space of square-integrable functions — the setting for Fourier analysis and quantum mechanics. For $p \neq 2$, there is no inner product, only the norm. The key trade-off: larger $p$ penalises peaks more harshly, so $L^\infty$ measures the essential supremum (the worst-case value). Minkowski's inequality is the triangle inequality for these spaces, and Hölder's inequality controls how products of functions behave. The Riesz-Fischer theorem — $L^p$ is complete — is what makes integration theory work: Cauchy sequences of functions actually converge to a function.

### 7.13 Worked Example: $L^p$ on a Finite Measure Space

**Problem.** Show that if $\mu(X) < \infty$, then $\lim_{p \to \infty} \|f\|_p = \|f\|_\infty$ for $f \in L^\infty(\mu)$.

<details>
<summary>Solution</summary>

Let $M = \|f\|_\infty$. For any $\varepsilon > 0$, the set $A = \{x : |f(x)| > M - \varepsilon\}$ has $\mu(A) > 0$. Then:

$$\|f\|_p \geq \left(\int_A (M - \varepsilon)^p d\mu\right)^{1/p} = (M - \varepsilon)\,\mu(A)^{1/p}$$

As $p \to \infty$, $\mu(A)^{1/p} \to 1$, so $\liminf_{p\to\infty} \|f\|_p \geq M - \varepsilon$. Since $\varepsilon$ is arbitrary, $\liminf \|f\|_p \geq M$.

Conversely, $\|f\|_p \leq M\,\mu(X)^{1/p}$, so $\limsup_{p\to\infty} \|f\|_p \leq M$. Therefore $\lim_{p\to\infty} \|f\|_p = M = \|f\|_\infty$.

$\blacksquare$

</details>

