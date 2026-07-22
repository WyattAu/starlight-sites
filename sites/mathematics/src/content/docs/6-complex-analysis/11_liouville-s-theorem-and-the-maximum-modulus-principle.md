---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "11_liouville S Theorem And The Maximum Modulus Principle", "url": "https://mathematics.wyattau.com/6-complex-analysis/11_liouville-s-theorem-and-the-maximum-modulus-principle"}]
}
</script>
title: Liouville's Theorem and the Maximum Modulus Principle
tags:
  - Mathematics
  - University
description: 'Every bounded entire function is constant. Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "11_liouville S Theorem And The Maximum Modulus Principle", "url": "https://mathematics.wyattau.com/6-complex-analysis/11_liouville-s-theorem-and-the-maximum-modulus-principle"}]
}
</script>

### 11.1 Liouville's Theorem

**Theorem 11.1 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$, then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac{M}{R} \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$, meaning $f$ is
constant. $\blacksquare$

### 11.2 The Fundamental Theorem of Algebra

**Theorem 11.2 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb{C}[z]$ has a root in $\mathbb{C}$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$, $f(z) \to 0$, so $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$ is
constant, a contradiction. $\blacksquare$

### 11.3 The Maximum Modulus Principle

**Theorem 11.3 (Maximum Modulus Principle).** If $f$ is analytic and non-constant on a domain $D$,
then $|f|$ has no local maximum in $D$.

**Corollary 11.4.** If $f$ is analytic on a bounded domain $D$ and continuous on
$\bar{D} = D \cup \partial D$, then $|f|$ attains its maximum on $\partial D$.

### 11.4 Minimum Modulus Principle

**Theorem 11.5 (Minimum Modulus Principle).** If $f$ is analytic and non-zero on a bounded domain
$D$ and continuous on $\bar{D}$, then $|f|$ attains its minimum on $\partial D$.

_Remark._ If $f$ has zeros in $D$, then $|f|$ attains its minimum of $0$ at those zeros. The minimum
modulus principle requires the non-vanishing hypothesis.

### 11.5 Schwarz Lemma

**Theorem 11.6 (Schwarz Lemma).** If $f : \mathbb{D} \to \mathbb{D}$ is analytic with $f(0) = 0$,
then

$$|f(z)| \leq |z| \quad \mathrm{for\ all\ } z \in \mathbb{D}$$

and $|f'(0)| \leq 1$. Equality in either case implies $f(z) = e^{i\theta} z$ for some real $\theta$.

_Proof._ Define $g(z) = f(z)/z$ for $z \neq 0$ and $g(0) = f'(0)$. Then $g$ is analytic on
$\mathbb{D}$. For $|z| = r \lt 1$: $|g(z)| = |f(z)|/|z| \leq 1/r$. By the maximum modulus principle,
$|g(z)| \leq 1/r$ for $|z| \leq r$. Letting $r \to 1$: $|g(z)| \leq 1$, so $|f(z)| \leq |z|$. Also
$|f'(0)| = |g(0)| \leq 1$. If $|f'(0)| = 1$, then $|g|$ attains its maximum at an interior point, so
$g$ is constant: $g(z) = e^{i\theta}$. $\blacksquare$

### 11.6 Schwarz-Pick Lemma

**Theorem 11.7 (Schwarz-Pick Lemma).** If $f : \mathbb{D} \to \mathbb{D}$ is analytic, then for all
$z, w \in \mathbb{D}$:

$$\left|\frac{f(z) - f(w)}{1 - \overline{f(w)} f(z)}\right| \leq \left|\frac{z - w}{1 - \overline{w} z}\right|$$

and for all $z \in \mathbb{D}$:

$$\frac{|f'(z)|}{1 - |f(z)|^2} \leq \frac{1}{1 - |z|^2}$$

Equality holds iff $f$ is a conformal automorphism of $\mathbb{D}$ (a Blaschke factor).

### 11.7 Applications of Liouville's Theorem

**Application 1: Polynomial growth.** If $f$ is entire and $|f(z)| \leq C|z|^n$ for large $|z|$,
then $f$ is a polynomial of degree at most $n$.

_Proof._ By Cauchy's estimate, $|f^{(n+1)}(z_0)| \leq C(n+1)!/R \to 0$, so $f^{(n+1)} \equiv 0$.
Thus $f$ is a polynomial of degree $\leq n$. $\blacksquare$

**Application 2: Casorati-Weierstrass.** The Casorati-Weierstrass theorem states that if $f$ has an
essential singularity at $z_0$, then the image of every punctured neighborhood is dense in
$\mathbb{C}$. A stronger result (Picard's great theorem) states that the image omits at most one
point. Liouville's theorem is used in proving both.

**Application 3: Density of polynomials.** The set of polynomials is dense in the space of entire
functions with respect to uniform convergence on compact subsets (Runge's theorem).

### 11.8 Maximum Modulus Applications

**Application.** If $f$ is analytic on a domain $D$ and $|f|$ is constant on $D$, then $f$ is
constant.

_Proof._ If $|f(z)| = c$ for all $z \in D$, then if $c = 0$, $f \equiv 0$. If $c > 0$, then $f$ is
never zero, so $1/f$ is analytic. Both $f$ and $1/f$ attain their maxima on $D$, so $f$ must be
constant by the maximum modulus principle. $\blacksquare$

### 11.9 Generalized Liouville Theorem

**Theorem 11.8.** If $f$ is entire and $\mathrm{Re}\, f(z)$ is bounded above (or below), then $f$ is
constant.

_Proof._ Suppose $\mathrm{Re}\, f(z) \leq M$ for all $z$. Consider $g(z) = e^{f(z)}$. Then
$|g(z)| = e^{\mathrm{Re}\, f(z)} \leq e^M$, so $g$ is bounded entire, hence constant. Therefore
$f$ is constant. $\blacksquare$

### 11.10 Practice Problems

**Problem 1.** Show that $f(z) = \sin z$ is not bounded on $\mathbb{C}$, consistent with Liouville.

_Solution._ On the imaginary axis, $\sin(iy) = i\sinh y$, and $|\sin(iy)| = |\sinh y| \to \infty$ as
$y \to \infty$. $\blacksquare$

**Problem 2.** Prove that if $f$ is entire and $|f(z)| \to \infty$ as $|z| \to \infty$, then $f$ is a
polynomial.

**Problem 3.** Find the maximum of $|e^{z^2}|$ on the unit disk $|z| \leq 1$.

_Solution._ $|e^{z^2}| = e^{\mathrm{Re}(z^2)}$. On $|z| = 1$, write $z = e^{i\theta}$, then
$\mathrm{Re}(z^2) = \cos 2\theta$. Maximum of $\cos 2\theta$ is $1$, so the maximum of $|e^{z^2}|$
on $\overline{\mathbb{D}}$ is $e^1 = e$, attained at $z = \pm 1$. $\blacksquare$

**Problem 4.** Suppose $f$ is entire and $f(z) = f(z + 1) = f(z + i)$ for all $z$. Show that $f$ is
constant.

### 11.11 The Phragmén-Lindelöf Principle

The Phragmén-Lindelöf principle extends the maximum modulus principle to unbounded domains by
imposing growth conditions.

**Theorem 11.9 (Phragmén-Lindelöf).** Let $f$ be analytic on the sector
$S = \{z : 0 < \arg z < \pi/\alpha\}$ and continuous on its closure. If $|f(z)| \leq M$ on the
boundary and $|f(z)| \leq Ce^{|z|^\beta}$ for some $\beta < \alpha$, then $|f(z)| \leq M$ for all
$z \in S$.

### 11.12 Summary of Key Results

1. **Liouville's Theorem:** Bounded entire functions are constant.
2. **Maximum Modulus Principle:** Non-constant analytic functions have no local modulus maximum.
3. **Minimum Modulus Principle:** Non-zero analytic functions attain minimum modulus on boundary.
4. **Schwarz Lemma:** Holomorphic self-maps of the disk with $f(0)=0$ satisfy $|f(z)| \leq |z|$.
5. **Schwarz-Pick Lemma:** Holomorphic maps from the disk to itself are contractions in the
   hyperbolic metric.

**Problem 5.** Use Liouville's theorem to prove that if $f$ is entire and $\mathrm{Im}(f(z)) \geq 0$
for all $z$, then $f$ is constant.

_Solution._ Consider $g(z) = e^{if(z)}$. Then $|g(z)| = e^{-\mathrm{Im}(f(z))} \leq 1$, so $g$ is
bounded entire, hence constant. Thus $f$ is constant. $\blacksquare$

### 11.7 Common Mistakes

**Mistake 1: Assuming that Liouville's theorem applies to bounded functions on a domain.**
Liouville's theorem states that every bounded entire function is constant. It does not apply to bounded functions on a proper subset of $\mathbb{C}$. For example, $f(z) = z$ is bounded on the unit disk but not constant. The function must be entire (analytic on all of $\mathbb{C}$).

**Mistake 2: Forgetting that the maximum modulus principle requires non-constant functions.**
The maximum modulus principle states that a non-constant analytic function has no local maximum in its domain. If the function is constant, then $|f|$ is constant and every point is both a maximum and a minimum. Always check that the function is non-constant before applying the principle.

**Mistake 3: Confusing the maximum and minimum modulus principles.**
The maximum modulus principle says that $|f|$ attains its maximum on the boundary of a bounded domain. The minimum modulus principle says that $|f|$ attains its minimum on the boundary only if $f$ has no zeros inside. If $f$ has zeros, the minimum is zero at those zeros, not on the boundary.

**Mistake 4: Assuming that the Schwarz lemma applies to all analytic functions on the disk.**
The Schwarz lemma applies only to analytic functions $f: \mathbb{D} \to \mathbb{D}$ with $f(0) = 0$. If $f(0) \neq 0$, the lemma does not apply. For functions with $f(0) \neq 0$, use the Schwarz-Pick lemma instead.

**Mistake 5: Forgetting that Liouville's theorem is used to prove the fundamental theorem of algebra.**
Liouville's theorem is a key tool in proving that every non-constant polynomial has a root in $\mathbb{C}$. If you forget this connection, you may miss elegant proofs of existence results. Always consider Liouville's theorem when dealing with entire functions and their properties.


## Intuition

Liouville's theorem states that bounded entire functions must be constant, which sounds abstract but has profound consequences. Think of an analytic function as a rubber sheet that cannot buckle: if it is bounded everywhere, it cannot grow in any direction, so it must be flat. The maximum modulus principle says the maximum of an analytic function occurs on the boundary, not the interior, because analytic functions cannot have local maxima. This is like heat flow: the hottest point on a plate cannot be in the middle if heat is flowing freely. Together these results force rigidity on analytic functions.
## Cross-References

- **[Cauchy's Integral Formula](6_cauchy-s-integral-formula.md)**: Cauchy's estimates provide the quantitative foundation for Liouville's theorem.
- **[Taylor and Laurent Series](7_taylor-and-laurent-series.md)**: Power series representations reveal the local behavior of analytic functions near singularities.
- **[Conformal Mappings](10_conformal-mappings.md)**: The Riemann mapping theorem uses maximum modulus principles to establish conformal equivalences.
