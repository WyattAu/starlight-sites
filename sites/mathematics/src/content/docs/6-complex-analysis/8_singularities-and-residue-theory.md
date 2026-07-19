---
title: Singularities and Residue Theory
tags:
  - Mathematics
  - University
description: "Let be an isolated singularity of (i.e., is analytic in a punctured neighbourhoo Comprehensive educational content coverage with definitions and practice proble"
---

### 8.1 Isolated Singularities

Let $z_0$ be an isolated singularity of $f$ (i.e., $f$ is analytic in a punctured neighbourhood of
$z_0$).

**Classification by Laurent series:**

1. **Removable singularity**: $a_n = 0$ for all $n \lt 0$. Can be removed by redefining
   $f(z_0) = a_0$.
2. **Pole of order $m$**: $a_{-m} \neq 0$ and $a_n = 0$ for $n \lt -m$. The principal part is
   finite.
3. **Essential singularity**: infinitely many non-zero $a_n$ with $n \lt 0$.

**Proposition 8.1 (Riemann"s Removable Singularity Theorem).** If $f$ is bounded near $z_0$Then
$z_0$ is a removable singularity.

**Proposition 8.2.** $z_0$ is a pole of order $m$ if and only if $\lim_{z \to z_0} (z - z_0)^m f(z)$
Exists and is non-zero.

**Theorem 8.3 (Casorati-Weierstrass).** If $z_0$ is an essential singularity of $f$Then $f$ takes
Values arbitrarily close to any complex number in every neighbourhood of $z_0$.

### 8.2 Classification with Worked Examples

<details>
<summary>Solution</summary>

**Problem.** Classify the singularities of $f(z) = \frac{\sin z}{z}$.

$z = 0$: $\sin z = z - z^3/6 + \cdots$So $f(z) = 1 - z^2/6 + \cdots$. No negative powers, so $z = 0$
is a removable singularity. $f(0) = 1$ by continuity.

**Problem.** Classify the singularities of $f(z) = \frac{e^z - 1}{z^2}$.

$z = 0$: $e^z - 1 = z + z^2/2 + \cdots$So $f(z) = \frac{1}{z} + \frac{1}{2} + \cdots$. Principal
part is $1/z$So $z = 0$ is a simple pole with residue $1$.

**Problem.** Classify the singularity of $f(z) = e^{1/z}$ at $z = 0$.

$e^{1/z} = \sum_{n=0}^{\infty} \frac{1}{n!\, z^n} = 1 + \frac{1}{z} + \frac{1}{2z^2} + \cdots$

Infinitely many negative powers $\Rightarrow$ $z = 0$ is an essential singularity.

**Problem.** Classify the singularities of $f(z) = \frac{z + 1}{z^3(z^2 + 1)}$.

$z = 0$: pole of order $3$. $z = i$: simple pole. $z = -i$: simple pole.

**Problem.** Determine the type of singularity of $f(z) = \frac{z}{\sin z}$ at $z = 0$.

$\sin z = z - z^3/6 + \cdots$So $f(z) = \frac{1}{1 - z^2/6 + \cdots}
= 1 + \frac{z^2}{6} + \cdots$.

No negative powers, so $z = 0$ is a removable singularity with $f(0) = 1$.

</details>

### 8.3 Definition of the Residue

**Definition.** The **residue** of $f$ at an isolated singularity $z_0$ is the coefficient $a_{-1}$
In the Laurent expansion:

$$\mathrm{Res}(f, z_0) = a_{-1} = \frac{1}{2\pi i}\int_\gamma f(z)\, dz$$

Where $\gamma$ is a small positively oriented circle around $z_0$.

### 8.4 Computing Residues

**For a simple pole at $z_0$:**

$$\mathrm{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0)f(z)$$

If $f = g/h$ where $g(z_0) \neq 0$, $h(z_0) = 0$, $h'(z_0) \neq 0$:

$$\mathrm{Res}(f, z_0) = \frac{g(z_0)}{h'(z_0)}$$

**For a pole of order $m$ at $z_0$:**

$$\mathrm{Res}(f, z_0) = \frac{1}{(m-1)!}\lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}}\left[(z - z_0)^m f(z)\right]$$

<details>
<summary>Solution</summary>

**Problem.** Find the residue of $f(z) = \frac{z}{z^2 + 4z + 3}$ at each pole.

$z^2 + 4z + 3 = (z + 1)(z + 3)$So simple poles at $z = -1$ and $z = -3$.

At $z = -1$: $\mathrm{Res} = \lim_{z \to -1} \frac{z}{z + 3} = \frac{-1}{2}$. At $z = -3$:
$\mathrm{Res} = \lim_{z \to -3} \frac{z}{z + 1} = \frac{-3}{-2} = \frac{3}{2}$.

**Problem.** Find the residue of $f(z) = \frac{e^z}{(z - 1)^2(z - 2)}$ at each pole.

At $z = 1$ (pole of order $2$):
$\mathrm{Res} = \frac{d}{dz}\left[\frac{e^z}{z - 2}\right]_{z=1}
= \frac{e^z(z - 2) - e^z}{(z-2)^2}\Big|_{z=1} = \frac{-e - e}{1} = -2e$.

At $z = 2$ (simple pole): $\mathrm{Res} = \frac{e^2}{(2-1)^2} = e^2$.

</details>

### 8.5 The Residue Theorem

**Theorem 8.4 (Residue Theorem).** If $f$ is analytic inside and on a simple closed positively
Oriented contour $\gamma$ except for isolated singularities $z_1, z_2, \ldots, z_n$ inside $\gamma$
Then

$$\int_\gamma f(z)\, dz = 2\pi i \sum_{k=1}^{n} \mathrm{Res}(f, z_k)$$

_Proof._ For each singularity $z_k$Draw a small circle $\gamma_k$ around it. By Cauchy's theorem
Applied to the multiply connected region between $\gamma$ and the $\gamma_k$:

$\int_\gamma f\, dz = \sum_{k=1}^n \int_{\gamma_k} f\, dz = \sum_{k=1}^n 2\pi i \cdot \mathrm{Res}(f, z_k)$.
$\blacksquare$

### 8.6 Worked Examples: Residue Theorem

<details>
<summary>Solution</summary>

**Problem 1.** Evaluate $\int_\gamma \frac{e^z}{z(z-1)^2}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ Singularities inside $\gamma$: $z = 0$ (simple pole) and $z = 1$ (pole of order $2$).

At $z = 0$: $\mathrm{Res} = \lim_{z \to 0} \frac{e^z}{(z-1)^2} = \frac{1}{(-1)^2} = 1$.

At $z = 1$:
$\mathrm{Res}(f, 1) = \frac{d}{dz}\left[(z-1)^2 \cdot \frac{e^z}{z(z-1)^2}\right]_{z=1} = \frac{d}{dz}\left[\frac{e^z}{z}\right]_{z=1} = \frac{e^z \cdot z - e^z}{z^2}\Big|_{z=1} = \frac{e - e}{1} = 0$.

$\int_\gamma f\, dz = 2\pi i(1 + 0) = 2\pi i$. $\blacksquare$

**Problem 2.** Evaluate $\int_\gamma \frac{1}{z^4 + 1}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The poles are the fourth roots of $-1$: $z_k = e^{i\pi/4 + ik\pi/2}$ for
$k = 0, 1, 2, 3$. All four lie inside $|z| = 2$.

Each is a simple pole with $\mathrm{Res}(f, z_k) = \frac{1}{4z_k^3}$. Since $z_k^4 = -1$:
$z_k^{-3} = -z_k$So the sum equals $-\frac{1}{4}\sum z_k = 0$.

$\int_\gamma \frac{dz}{z^4 + 1} = 2\pi i \cdot 0 = 0$. $\blacksquare$

</details>

### 8.8 Common Mistakes

**Mistake 1: Confusing the residue with the coefficient $a_{-1}$.**
The residue of $f$ at an isolated singularity $z_0$ is the coefficient $a_{-1}$ in the Laurent series expansion $f(z) = \sum_{n=-\infty}^{\infty} a_n (z - z_0)^n$. Do not confuse this with other coefficients or with the value of the function at the singularity.

**Mistake 2: Forgetting to check if singularities are inside the contour.**
When using the residue theorem, only include singularities that lie inside the contour. A singularity on the contour makes the integral undefined (or requires a principal value). Always check the location of each singularity relative to the contour.

**Mistake 3: Misclassifying a removable singularity as a pole.**
A removable singularity has no principal part in its Laurent series. If $\lim_{z \to z_0} (z - z_0)^m f(z) = 0$ for all $m \geq 1$, then $z_0$ is removable. Do not assume that a function with a limit at a singularity is removable; the limit must exist and be finite.

**Mistake 4: Forgetting the factor of $2\pi i$ in the residue theorem.**
The residue theorem states that $\int_\gamma f(z)\, dz = 2\pi i \sum \mathrm{Res}(f, z_k)$, where the sum is over singularities inside $\gamma$. Forgetting the $2\pi i$ factor is a common error. Always include it when computing contour integrals.

**Mistake 5: Confusing the order of a pole with the residue.**
The residue at a pole of order $m$ is given by $\mathrm{Res}(f, z_0) = \frac{1}{(m-1)!} \lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}} [(z - z_0)^m f(z)]$. Do not assume that the residue is zero at a pole of order greater than one; it can be non-zero.

## Cross-References

- **[Taylor and Laurent Series](7_taylor-and-laurent-series.md)**: Laurent series reveal the structure of singularities and provide the coefficients for residue computation.
- **[Cauchy's Theorem](5_cauchy-s-theorem.md)**: Cauchy's theorem for multiply connected domains leads to the residue theorem.
- **[Applications of Contour Integration](9_applications-of-contour-integration.md)**: The residue theorem is applied to evaluate real integrals and solve physics problems.

