---
title: Argument Principle and Rouché's Theorem
tags:
  - Mathematics
  - University
description: 'If is meromorphic inside and on a simple closed contour . Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

### 12.1 The Argument Principle

**Theorem 12.1 (Argument Principle).** If $f$ is meromorphic inside and on a simple closed contour
$\gamma$ with no zeros or poles on $\gamma$, then

$$\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\, dz = N - P$$

where $N$ is the number of zeros and $P$ is the number of poles of $f$ inside $\gamma$ (counting
multiplicities).

### 12.2 Rouché's Theorem

**Theorem 12.2 (Rouché's Theorem).** If $f$ and $g$ are analytic inside and on a simple closed
contour $\gamma$, and $|f(z)| \gt |g(z)|$ on $\gamma$, then $f$ and $f + g$ have the same number of
zeros inside $\gamma$.

_Proof._ On $\gamma$: $|g(z)/f(z)| \lt 1$. The function $h(z) = 1 + g(z)/f(z)$ satisfies
$|h(z) - 1| \lt 1$ on $\gamma$, so $h(\gamma)$ does not wind around $0$. By the argument principle
applied to $h$: $0 = N_h - P_h$, meaning $h$ has the same number of zeros and poles inside $\gamma$.
But $h = (f + g)/f$, so zeros of $h$ are zeros of $f + g$ and poles of $h$ are zeros of $f$. Therefore
$f$ and $f + g$ have the same number of zeros. $\blacksquare$

### 12.3 Worked Example

**Problem.** Show that $z^4 + 6z + 3$ has exactly one root in $|z| \lt 1$.

_Solution._ On $|z| = 1$: $|6z| = 6 \gt |z^4 + 3| \leq |z|^4 + 3 = 4$. By Rouché's theorem with
$f(z) = 6z$ and $g(z) = z^4 + 3$: $f + g = z^4 + 6z + 3$ has the same number of zeros in $|z| \lt 1$
as $f(z) = 6z$, which has exactly one zero (at $z = 0$). $\blacksquare$

### 12.4 Further Applications of Rouché's Theorem

**Application 1: Roots of $z^n + a$.** The polynomial $z^n + a$ with $|a| \lt 1$ has all $n$ roots
inside $|z| = 1$. On $|z| = 1$, $|z^n| = 1 \gt |a|$, so by Rouché with $f(z) = z^n$ and
$g(z) = a$, $z^n + a$ has $n$ zeros in $|z| \lt 1$.

**Application 2: Location of zeros.** Show that all roots of $z^4 + z + 1 = 0$ satisfy $|z| \lt 2$.

On $|z| = 2$: $|z^4| = 16 \gt |z + 1| \leq 3$. By Rouché with $f(z) = z^4$ and $g(z) = z + 1$:
$z^4 + z + 1$ has $4$ zeros in $|z| \lt 2$ (same as $z^4$).

**Application 3: Two roots in the unit disk.** Show that $z^5 + 3z^2 + 1$ has exactly two roots in
$|z| \lt 1$.

On $|z| = 1$: $|3z^2 + 1| \geq |3z^2| - |1| = 2 \gt |z^5| = 1$. By Rouché with $f(z) = 3z^2 + 1$ and
$g(z) = z^5$: $z^5 + 3z^2 + 1$ has the same number of zeros as $3z^2 + 1$ in $|z| \lt 1$.
$3z^2 + 1 = 0 \Rightarrow z = \pm i/\sqrt{3}$, both in $|z| \lt 1$. So $2$ zeros.

### 12.5 Rouché for Finding Root Bounds

Rouché's theorem is often used to bound the location of polynomial roots.

**Theorem 12.3 (Eneström-Kakeya).** If $a_0 \geq a_1 \geq \cdots \geq a_n > 0$, then every root of
$P(z) = a_0 z^n + a_1 z^{n-1} + \cdots + a_n$ satisfies $|z| \leq 1$.

_Proof._ On $|z| = 1$, $|a_0 z^n| = a_0$ and
$|a_1 z^{n-1} + \cdots + a_n| \leq a_1 + \cdots + a_n \leq a_0$ (strict unless all coefficients
are equal). By Rouché, $P(z)$ has $n$ zeros inside $|z| = 1$. $\blacksquare$

### 12.6 The Argument Principle and the Winding Number

The integral $\frac{1}{2\pi i}\int_\gamma f'(z)/f(z)\, dz$ equals the winding number of the curve
$f(\gamma)$ around the origin. This geometric interpretation is useful in proving the argument
principle:

$$N - P = \frac{1}{2\pi} \Delta_\gamma \arg f(z)$$

where $\Delta_\gamma \arg f(z)$ is the net change in the argument of $f(z)$ as $z$ traverses
$\gamma$.

### 12.7 The Open Mapping Theorem

As a corollary of the argument principle, we have:

**Theorem 12.4 (Open Mapping Theorem).** A non-constant analytic function maps open sets to open
sets.

_Proof._ For any $z_0$ in the domain, apply the argument principle to a small circle around $z_0$
on which $f(z) \neq f(z_0)$. The winding number of $f(\gamma)$ around $f(z_0)$ is positive, so
points near $f(z_0)$ are in the image. $\blacksquare$

### 12.8 Practice Problems

**Problem 1.** Determine the number of zeros of $z^7 - 2z^5 + 6z^3 - z + 1$ in $|z| \lt 1$.

_Solution._ On $|z| = 1$, $|6z^3| = 6 \gt |z^7 - 2z^5 - z + 1| \leq 1 + 2 + 1 + 1 = 5$.
By Rouché, the function has $3$ zeros in $|z| \lt 1$ (same as $6z^3$). $\blacksquare$

**Problem 2.** Show that $z^4 + 5z + 2$ has exactly one root in $|z| \lt 1$.

**Problem 3.** Prove that $e^z - 3z^2 = 0$ has two roots in $|z| \lt 1$.

_Solution._ On $|z| = 1$, $|e^z| = e^{\mathrm{Re}\, z} \leq e \lt 3 = |3z^2|$. By Rouché with
$f(z) = -3z^2$ and $g(z) = e^z$, $e^z - 3z^2$ has $2$ zeros in $|z| \lt 1$. $\blacksquare$

**Problem 4.** Show that all roots of $z^6 + 6z^2 + 1 = 0$ lie in the annulus $1/2 \lt |z| \lt 2$.

### 12.9 The Argument Principle for Counting Zeros

A practical application of the argument principle is counting zeros in a region without solving
the equation. For $f(z) = z^5 + z + 1$ in $|z| < 1$:

On $|z| = 1$, $|z^5| = 1 \lt |z + 1| \geq |1 - 1| = 0$. We cannot directly apply Rouché here.
Instead, check $|z^5 + 1| \geq |1 - |z|^5| = 0$ and $|z| = 1$ so $|z^5 + 1| \geq 0$ and
$|z| = 1$ gives $|z| = 1 > |z^5 + 1|$? Let us check with $f(z) = z$ and $g(z) = z^5 + 1$.
On $|z| = 1$, $|z| = 1$ and $|z^5 + 1| \leq |z|^5 + 1 = 2$. This does not give a strict
inequality. Let us try $f(z) = z^5$ and $g(z) = z + 1$. On $|z| = 1$, $|z^5| = 1$ but
$|z + 1|$ can be 0 at $z = -1$. So Rouché fails. Numerical computation shows there is 1 root
in $|z| < 1$ and 4 roots outside.

### 12.10 The Argument Principle for Meromorphic Functions

If $f$ is meromorphic with poles, the argument principle counts $N - P$. This can be used to
determine the number of roots of equations of the form $f(z) = a$ by applying the argument
principle to $f(z) - a$.

### 12.11 Practice Problems (Continued)

**Problem 5.** Use the argument principle to show that $z^4 - 4z^3 + 6z^2 - 4z + 1 = (z-1)^4$ has
all four roots inside $|z| = 2$.

**Problem 6.** Prove that the equation $z^3 + 2z + 1 = 0$ has two roots in $|z| < 1$ and one in
$|z| > 1$.

_Solution._ On $|z| = 1$, $|2z| = 2 \gt |z^3 + 1| \leq 2$, so equality is possible. Instead use
$f(z) = 2z + 1$, $g(z) = z^3$. On $|z| = 1$, $|2z + 1| \geq |2z| - 1 = 1$ and $|z^3| = 1$.
The inequality $|2z + 1| \geq 1$ does not guarantee $> |z^3|$. So a more refined contour or
splitting is needed.

**Problem 7.** Determine the number of zeros of $z^9 - 2z^5 + 3z^2 - 1$ in $|z| < 1$ and
$1 < |z| < 2$.

**Problem 8.** Show that $e^z = 3z$ has exactly two solutions in $|z| < 2$.

### 12.5 Common Mistakes

**Mistake 1: Forgetting to count multiplicities in the argument principle.**
The argument principle counts zeros and poles with multiplicities. A zero of order $m$ counts as $m$ zeros, and a pole of order $n$ counts as $n$ poles. Forgetting to count multiplicities leads to incorrect results.

**Mistake 2: Assuming that Rouché's theorem requires $|f(z)| > |g(z)|$ everywhere.**
Rouché's theorem requires $|f(z)| > |g(z)|$ on the contour $\gamma$, not everywhere in the domain. The inequality must hold on the entire contour, but it can fail inside the contour.

**Mistake 3: Confusing the roles of $f$ and $g$ in Rouché's theorem.**
In Rouché's theorem, $f$ is the dominant term and $g$ is the perturbation. The theorem states that $f$ and $f + g$ have the same number of zeros. Swapping $f$ and $g$ can lead to incorrect conclusions if the inequality $|f(z)| > |g(z)|$ does not hold.

**Mistake 4: Forgetting that the argument principle requires no zeros or poles on the contour.**
The argument principle requires that $f$ has no zeros or poles on the contour $\gamma$. If there are zeros or poles on $\gamma$, the integral is not defined (or requires a principal value). Always check that the contour avoids zeros and poles.

**Mistake 5: Misapplying Rouché's theorem to non-analytic functions.**
Rouché's theorem requires that $f$ and $g$ be analytic inside and on the contour. If either function is not analytic, the theorem does not apply. Always verify analyticity before using Rouché's theorem.


## Intuition

The argument principle counts zeros and poles of a function by tracking how much its image winds around the origin as you traverse a contour. Imagine walking around a lake and counting how many times the shoreline loops around you: each loop corresponds to a zero inside. Rouche's theorem turns this into a practical tool: if two functions are close enough on a boundary, they have the same number of zeros inside. This is like checking whether two magnets have the same strength by measuring their pull at the boundary. It is used to locate roots of polynomials and eigenvalues of matrices.
## Cross-References

- **[Singularities and Residue Theory](8_singularities-and-residue-theory.md)**: The residue theorem provides the computational foundation for the argument principle.
- **[Liouville's Theorem](11_liouville-s-theorem-and-the-maximum-modulus-principle.md)**: Liouville's theorem characterizes bounded entire functions and is used to prove the fundamental theorem of algebra.
- **[Conformal Mappings](10_conformal-mappings.md)**: The argument principle helps count zeros and poles in conformal mapping problems.
