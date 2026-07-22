---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "4_complex Integration", "url": "https://mathematics.wyattau.com/6-complex-analysis/4_complex-integration"}]
}
</script>
title: Complex Integration
tags:
  - Mathematics
  - University
description: "A (or piecewise smooth path) in is a continuous function Comprehensive educational content coverage with definitions, worked examples, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "4_complex Integration", "url": "https://mathematics.wyattau.com/6-complex-analysis/4_complex-integration"}]
}
</script>

### 4.1 Contours

A **contour** (or piecewise smooth path) in $\mathbb{C}$ is a continuous function
$\gamma : [a, b] \to \mathbb{C}$ that is differentiable except at finitely many points, with a
Continuous derivative everywhere it exists.

A **simple closed contour** is a contour with $\gamma(a) = \gamma(b)$ and no other
Self-intersections.

### 4.2 The Complex Integral

**Definition.** For a contour $\gamma$ and a continuous function $f$ on $\gamma$:

$$\int_{\gamma} f(z)\, dz = \int_a^b f(\gamma(t))\gamma"(t)\, dt$$

### 4.3 Basic Properties

**Proposition 4.1.** The complex integral is linear:

$$\int_\gamma (af + bg)\, dz = a\int_\gamma f\, dz + b\int_\gamma g\, dz$$

**Proposition 4.2.** Reversing orientation changes the sign:

$$\int_{-\gamma} f\, dz = -\int_\gamma f\, dz$$

**Proposition 4.3.** Additivity over contours:

$$\int_{\gamma_1 + \gamma_2} f\, dz = \int_{\gamma_1} f\, dz + \int_{\gamma_2} f\, dz$$

### 4.4 ML Inequality

**Proposition 4.4 (ML Inequality).** If $|f(z)| \leq M$ for all $z$ on a contour $\gamma$ of length
$L$Then

$$\left|\int_\gamma f(z)\, dz\right| \leq ML$$

_Proof._
$\left|\int_a^b f(\gamma(t))\gamma'(t)\, dt\right| \leq \int_a^b |f(\gamma(t))||\gamma'(t)|\, dt
\leq M \int_a^b |\gamma'(t)|\, dt = ML$.
$\blacksquare$

### 4.5 Worked Examples: Contour Integrals

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma z^2\, dz$ where $\gamma$ is the line segment from $0$ to $1 + i$.

_Solution._ Parameterize $\gamma(t) = t(1 + i)$ for $0 \leq t \leq 1$. Then $\gamma'(t) = 1 + i$.

$\int_\gamma z^2\, dz = \int_0^1 (t(1+i))^2 (1+i)\, dt = (1+i)^3 \int_0^1 t^2\, dt = (1+i)^3 \cdot \frac{1}{3}$

$(1+i)^3 = (1+i)(1+i)^2 = (1+i)(2i) = 2i + 2i^2 = 2i - 2 = -2 + 2i$.

$\int_\gamma z^2\, dz = \frac{-2 + 2i}{3}$. $\blacksquare$

**Problem.** Evaluate $\int_\gamma \bar{z}\, dz$ where $\gamma$ is the unit circle traversed once
Counterclockwise.

$\gamma(t) = e^{it}$, $0 \leq t \leq 2\pi$, $\gamma'(t) = ie^{it}$. $\bar{z} = e^{-it}$ on $\gamma$.

$\int_\gamma \bar{z}\, dz = \int_0^{2\pi} e^{-it} \cdot ie^{it}\, dt = \int_0^{2\pi} i\, dt = 2\pi i$.

_Note:_ Since $\bar{z}$ is not analytic, this result is non-zero, as expected.

**Problem.** Evaluate $\int_\gamma \frac{dz}{z}$ where $\gamma$ is the upper semicircle
$z = e^{i\theta}$, $0 \leq \theta \leq \pi$.

$\int_0^\pi \frac{ie^{i\theta}}{e^{i\theta}}\, d\theta = \int_0^\pi i\, d\theta = i\pi$.

**Problem.** Evaluate $\int_\gamma z\, dz$ where $\gamma$ consists of the line segment from $0$ to
$1$ followed by the line segment from $1$ to $1 + i$.

$\gamma_1(t) = t$, $0 \leq t \leq 1$: $\int_0^1 t \cdot 1\, dt = \frac{1}{2}$.

$\gamma_2(t) = 1 + it$, $0 \leq t \leq 1$:
$\int_0^1 (1 + it) \cdot i\, dt = \int_0^1 (i - t)\, dt = i - \frac{1}{2}$.

Total: $\frac{1}{2} + i - \frac{1}{2} = i$.

Check: Since $z$ is entire, the integral from $0$ to $1 + i$ is $\frac{1}{2}(1+i)^2 = i$.
Consistent. $\blacksquare$

</details>

### 4.6 ML Inequality Applications

<details>
<summary>Solution</summary>

**Problem.** Use the ML inequality to show that
$\lim_{R \to \infty} \int_{C_R} \frac{e^{iz}}{z}\, dz = 0$ Where $C_R$ is the upper semicircle
$|z| = R$, $\mathrm{Im}(z) \geq 0$.

On $C_R$: $z = Re^{i\theta}$, $0 \leq \theta \leq \pi$.
$|e^{iz}| = |e^{iR(\cos\theta + i\sin\theta)}| = e^{-R\sin\theta}$.

$\left|\int_{C_R} \frac{e^{iz}}{z}\, dz\right| \leq \int_0^\pi \frac{e^{-R\sin\theta}}{R} \cdot R\, d\theta
= \int_0^\pi e^{-R\sin\theta}\, d\theta$.

By Jordan's inequality $\sin\theta \geq \frac{2\theta}{\pi}$ for $\theta \in [0, \pi/2]$:

$\leq 2\int_0^{\pi/2} e^{-2R\theta/\pi}\, d\theta = \frac{\pi}{R}(1 - e^{-R}) \to 0$ as
$R \to \infty$. $\blacksquare$

**Problem.** Bound $\left|\int_\gamma \frac{dz}{z^2 + 4}\right|$ where $\gamma$ is $|z| = 3$.

On $\gamma$: $|z^2 + 4| \geq |z|^2 - 4 = 9 - 4 = 5$ (reverse triangle inequality). So
$\left|\frac{1}{z^2 + 4}\right| \leq \frac{1}{5}$.

Length of $\gamma$: $L = 2\pi \cdot 3 = 6\pi$.

$\left|\int_\gamma \frac{dz}{z^2 + 4}\right| \leq \frac{1}{5} \cdot 6\pi = \frac{6\pi}{5}$.

</details>

### 4.7 Antiderivative Method

When $f$ is analytic on a connected domain and has a known antiderivative $F$ with $F' = f$:

$$\int_\gamma f(z)\, dz = F(\gamma(b)) - F(\gamma(a))$$

This follows from the fundamental theorem of calculus applied to $F(\gamma(t))$.

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \cos z\, dz$ where $\gamma$ is any path from $0$ to $\pi + i$.

Since $\cos z$ is entire with antiderivative $\sin z$:

$\int_\gamma \cos z\, dz = \sin(\pi + i) - \sin(0) = \sin(\pi + i)$.

$\sin(\pi + i) = \sin\pi\cosh 1 + i\cos\pi\sinh 1 = -i\sinh 1$.

So the integral equals $-i\sinh 1$.

**Problem.** Evaluate $\int_\gamma e^{2z}\, dz$ where $\gamma$ is any path from $1$ to $i$.

Antiderivative: $\frac{1}{2}e^{2z}$.

$\int_\gamma e^{2z}\, dz = \frac{1}{2}(e^{2i} - e^{2})$.

</details>

### 4.7 Intuition: What Makes Complex Integration Special?

Complex integration generalises the real line integral to paths in the complex plane. The integral $\int_\gamma f(z)\,dz$ sums the values of $f$ along a contour, weighted by the direction of the contour. For analytic functions (those that are complex-differentiable), the remarkable property is path-independence: if $f$ is analytic on a simply connected domain, the integral depends only on the endpoints, not on the path taken. This is the complex analogue of the fundamental theorem of calculus.

The Cauchy integral formula is the cornerstone: it says that the value of an analytic function at any interior point of a contour is completely determined by its values on the boundary. This is far stronger than anything in real analysis, where a function's values on an interval tell you nothing about its values elsewhere. The residue theorem, which computes integrals by summing contributions from singularities inside the contour, is a consequence of the Cauchy integral formula. These tools make it possible to evaluate many real integrals that are difficult or impossible by real methods alone.

### 4.8 Common Mistakes

**Mistake 1: Confusing the contour integral with the real line integral.**
The complex integral $\int_\gamma f(z)\, dz$ is defined as $\int_a^b f(\gamma(t))\gamma'(t)\, dt$, which is a real integral of a complex-valued function. Do not confuse this with the real line integral $\int_\gamma f(x)\, dx$. The complex integral depends on the path $\gamma$, not just the endpoints.

**Mistake 2: Forgetting that reversing orientation changes the sign.**
If $\gamma$ is a contour from $a$ to $b$, then $-\gamma$ is the same contour traversed from $b$ to $a$. We have $\int_{-\gamma} f\, dz = -\int_\gamma f\, dz$. Forgetting this can lead to sign errors in calculations.

**Mistake 3: Assuming that the integral of an analytic function over a closed contour is always zero.**
The Cauchy-Goursat theorem states that the integral of an analytic function over a closed contour is zero only if the function is analytic inside the contour. If the function has singularities inside the contour, the integral may be non-zero. Use the residue theorem to compute such integrals.

**Mistake 4: Misapplying the ML inequality.**
The ML inequality states that $|\int_\gamma f(z)\, dz| \leq ML$, where $M$ is an upper bound for $|f(z)|$ on $\gamma$ and $L$ is the length of $\gamma$. Forgetting to find a tight upper bound $M$ or miscalculating the length $L$ can lead to incorrect estimates.

**Mistake 5: Confusing the parameterization of a contour.**
The value of the contour integral does not depend on the parameterization of the contour, only on the path traced out. However, different parameterizations can lead to different expressions for the integral. Always ensure that the parameterization is correct and that $\gamma'(t)$ is computed properly.

## Cross-References

- **[Cauchy's Theorem](5_cauchy-s-theorem.md)**: Cauchy's theorem states that the integral of an analytic function over a closed contour is zero.
- **[Cauchy's Integral Formula](6_cauchy-s-integral-formula.md)**: The integral formula expresses the value of an analytic function at interior points via boundary integrals.
- **[Residue Theory](8_singularities-and-residue-theory.md)**: The residue theorem computes contour integrals by summing contributions from singularities.

