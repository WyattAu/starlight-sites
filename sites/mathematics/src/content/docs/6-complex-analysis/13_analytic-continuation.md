---

title: Analytic Continuation
tags:
  - Mathematics
  - University
description: 'If is analytic on and is analytic on with Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "13_analytic Continuation", "url": "https://mathematics.wyattau.com/6-complex-analysis/13_analytic-continuation"}]
}
</script>

### 13.1 Definition

**Definition.** If $f_1$ is analytic on $D_1$ and $f_2$ is analytic on $D_2$ with
$D_1 \cap D_2 \neq \emptyset$ and $f_1 = f_2$ on $D_1 \cap D_2$, then $f_2$ is an **analytic
continuation** of $f_1$.

**Uniqueness.** If an analytic continuation exists, it is unique. This follows from the
identity theorem: any two analytic continuations of $f_1$ to the same domain must agree
everywhere on that domain.

### 13.2 Identity Theorem

**Theorem 13.1 (Identity Theorem).** If $f$ and $g$ are analytic on a domain $D$ and agree on a set
with a limit point in $D$, then $f = g$ on all of $D$.

_Proof._ Let $E = \{z \in D : f^{(n)}(z) = g^{(n)}(z) \mathrm{\ for\ all\ } n \geq 0\}$. $E$ is
non-empty (it contains the limit point by continuity of derivatives). $E$ is closed (by continuity).
If $z_0 \in E$, the Taylor series of $f$ and $g$ at $z_0$ coincide, so $f = g$ in a neighbourhood of
$z_0$, giving $E$ open. Since $D$ is connected, $E = D$. $\blacksquare$

**Consequence.** If two analytic functions agree on any interval of $\mathbb{R}$, on any open
subset, or on any set with an accumulation point, then they are identical wherever both are
defined. This is the core reason why analytic continuation is unique.

### 13.3 The Gamma Function

The Gamma function $\Gamma(z)$ provides a classic example. The integral representation

$$\Gamma(z) = \int_0^\infty t^{z-1} e^{-t}\,dt$$

converges only for $\mathrm{Re}(z) > 0$. However, using the functional equation
$\Gamma(z+1) = z\Gamma(z)$, we can extend $\Gamma(z)$ meromorphically to the entire complex
plane with simple poles at $z = 0, -1, -2, \dots$.

**Continuation via the functional equation.** For $\mathrm{Re}(z) > -1$, $z \neq 0$, define
$\Gamma(z) = \Gamma(z+1)/z$. Repeating this pushes the domain leftward strip by strip,
producing a meromorphic function on $\mathbb{C}$.

**Reflection formula.** The analytic continuation satisfies Euler's reflection formula:
$\Gamma(z)\Gamma(1-z) = \pi / \sin(\pi z)$, which relates values across the whole plane.

### 13.4 The Riemann Zeta Function

The Riemann zeta function is defined for $\mathrm{Re}(s) > 1$ by the Dirichlet series

$$\zeta(s) = \sum_{n=1}^\infty \frac{1}{n^s}$$

This series diverges for $\mathrm{Re}(s) \leq 1$. However, $\zeta(s)$ admits an analytic
continuation to $\mathbb{C} \setminus \{1\}$ with a simple pole at $s = 1$.

**Continuation via the functional equation.** The Riemann zeta function satisfies the
functional equation

$$\zeta(s) = 2^s \pi^{s-1} \sin\left(\frac{\pi s}{2}\right) \Gamma(1-s) \zeta(1-s)$$

which relates $\zeta(s)$ to $\zeta(1-s)$ and provides the continuation to $\mathrm{Re}(s) < 0$.
The trivial zeros at $s = -2, -4, -6, \dots$ arise from the sine factor.

**Connection to prime numbers.** The Euler product $\zeta(s) = \prod_p (1 - p^{-s})^{-1}$ for
$\mathrm{Re}(s) > 1$ links the zeta function to the distribution of primes, culminating in
the Riemann hypothesis about the non-trivial zeros.

### 13.5 Natural Boundaries

Not every function defined on a domain can be analytically continued to a larger domain.
A **natural boundary** is a curve beyond which analytic continuation is impossible.

**Example.** The function $f(z) = \sum_{n=0}^\infty z^{2^n}$ has the unit circle $|z| = 1$ as a
natural boundary. The series converges for $|z| < 1$, but every point on $|z| = 1$ is a
singularity (the function is unbounded near a dense set of points).

**Lacunary series.** More generally, a power series $\sum a_k z^{n_k}$ with gaps satisfying
$n_{k+1}/n_k > 1 + \delta$ has the circle of convergence as a natural boundary (Hadamard gap
theorem).

### 13.6 Monodromy Theorem

**Theorem 13.2 (Monodromy).** Let $f$ be analytic on a directly connected domain $D$ and suppose
$f$ can be analytically continued along every curve in $D$. Then $f$ extends to a single-valued
analytic function on all of $D$.

**Intuition.** The monodromy theorem guarantees that local analytic continuation along paths
gives a well-defined global function if the domain is directly connected. On multiply connected
domains, continuation around a closed loop may produce a different branch (monodromy).

**Branch points.** The function $\sqrt{z}$ has a branch point at $z = 0$. Continuing along a
loop encircling the origin changes the sign of the function. The monodromy theorem fails
because $\mathbb{C}\setminus\{0\}$ is not directly connected.

### 13.7 Schwarz Reflection Principle

**Theorem 13.3 (Schwarz Reflection).** Let $f$ be analytic on a domain $D$ symmetric about the
real axis, with $f$ real-valued on $D \cap \mathbb{R}$. Then $f(\overline{z}) =
\overline{f(z)}$ for all $z \in D$.

**Application to continuation.** If $f$ is analytic on the upper half-plane and real on the real
axis, the Schwarz reflection principle extends $f$ to the lower half-plane. This provides a
method of continuation for many special functions.

### Worked Example 13.1

Show that $f(z) = \sum_{n=0}^\infty z^n$ defined on $|z| < 1$ has an analytic continuation
to $\mathbb{C} \setminus \{1\}$.

_Solution._ On $|z| < 1$, $f(z) = 1/(1-z)$. The function $F(z) = 1/(1-z)$ is analytic on
$\mathbb{C} \setminus \{1\}$ and agrees with $f$ on $|z| < 1$. Therefore $F$ is the analytic
continuation of $f$. The function $f$ can only be defined on $|z| < 1$ by its power series,
but the continued function exists almost everywhere in the complex plane.

### Worked Example 13.2

Find the analytic continuation of $f(z) = \int_0^\infty e^{-t} t^{z-1}\,dt$ from
$\mathrm{Re}(z) > 0$ to $\mathrm{Re}(z) > -1$.

_Solution._ The integral converges for $\mathrm{Re}(z) > 0$. Using the identity
$\Gamma(z) = \Gamma(z+1)/z$, we extend the definition: for $\mathrm{Re}(z) > -1$, $z \neq 0$,
define $f(z) = \int_0^\infty e^{-t} t^{z}\,dt / z$. This agrees with the original definition
where both are valid and extends the domain left by one strip.

### Practice Problems

1. Prove that $f(z) = \sum_{n=0}^\infty z^{n!}$ has the unit circle as a natural boundary.
2. Find the analytic continuation of the geometric series $\sum_{n=0}^\infty (-1)^n z^{2n}$
   defined on $|z| < 1$.
3. Show that the function $\sum_{n=1}^\infty \frac{z^n}{n^2}$ has no singularity on $|z| = 1$
   and can be continued to a larger domain. Where are its singularities?
4. Determine all possible analytic continuations of $\sqrt{z}$ to the complex plane. Explain
   the role of branch cuts.
5. Use the Schwarz reflection principle to show that if $f$ is analytic on $\mathbb{C}\setminus
   \mathbb{R}$ and continuous on $\mathbb{R}$, then $f$ is entire.

### Summary

Analytic continuation extends analytic functions to larger domains uniquely. The identity
theorem guarantees uniqueness. The Gamma and zeta functions are classical examples. Natural
boundaries prevent continuation past essential singularities. The monodromy theorem governs
when continuation around loops is single-valued. The Schwarz reflection principle extends
functions across the real axis. These ideas are essential for understanding special functions
and their properties throughout complex analysis.

### 13.8 Common Mistakes

**Mistake 1: Assuming that analytic continuation is always possible.**
Analytic continuation is not always possible. If a function has a natural boundary (a curve beyond which it cannot be analytically continued), then continuation past that boundary is impossible. For example, the function $\sum_{n=0}^\infty z^{2^n}$ has the unit circle as a natural boundary.

**Mistake 2: Forgetting that analytic continuation is unique.**
If an analytic continuation exists, it is unique. Do not assume that there are multiple distinct analytic continuations of a function to the same domain. The identity theorem guarantees uniqueness.

**Mistake 3: Confusing analytic continuation with continuous extension.**
Analytic continuation requires that the extended function be analytic, not just continuous. A function can be continuously extended to a larger domain without being analytically continuable. For example, $f(z) = |z|^2$ is continuous on $\mathbb{C}$ but not analytic anywhere except at $z = 0$.

**Mistake 4: Assuming that the identity theorem holds for non-analytic functions.**
The identity theorem requires that the functions be analytic. If $f$ and $g$ are merely continuous and agree on a set with a limit point, they need not agree everywhere. For example, $f(x) = 0$ and $g(x) = e^{-1/x^2}$ (with $g(0) = 0$) agree on $\mathbb{R}$ but are not equal as functions on $\mathbb{C}$.

**Mistake 5: Forgetting that analytic continuation may introduce singularities.**
When analytically continuing a function to a larger domain, new singularities may appear. For example, the Gamma function is analytic for $\mathrm{Re}(z) > 0$, but its analytic continuation to $\mathbb{C}$ has poles at $z = 0, -1, -2, \dots$. Always check for singularities in the extended domain.

## Cross-References

- **[Taylor and Laurent Series](7_taylor-and-laurent-series.md)**: Power series provide local representations that can be analytically continued to larger domains.
- **[Liouville's Theorem](11_liouville-s-theorem-and-the-maximum-modulus-principle.md)**: Liouville's theorem characterizes entire functions and is used in proving uniqueness of analytic continuation.
- **[Complex Functions and Analyticity](2_complex-functions-and-analyticity.md)**: Analyticity is the essential property that enables continuation beyond the original domain.

- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
- [Statistical Learning](https://machine-learning.wyattau.com/docs/statistical-learning)
- [Statistical Mechanics](https://physics.wyattau.com/docs/statistical-mechanics)
