---

date: 2026-07-23T21:57:32+01:00
title: Common Pitfalls
tags:
  - Mathematics
  - University
description: "Differentiability. The partial derivatives must also be continuous. For example, Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "6 Complex Analysis", "url": "https://mathematics.wyattau.com/6-complex-analysis"}, {"name": "14_common Pitfalls", "url": "https://mathematics.wyattau.com/6-complex-analysis/14_common-pitfalls"}]
}
</script>

:::caution
Differentiability. The partial derivatives must also be continuous. For example,
$f(z) = \exp(-1/z^4)$ extended by $f(0) = 0$ satisfies the Cauchy-Riemann equations at the origin
But is not differentiable there.
:::
:::caution
domain, the integral of an analytic function around a closed contour may be non-zero. The Classic
example is $\oint_{|z|=1} dz/z = 2\pi i$.
:::
:::caution
Differentiation. A common error is forgetting the $(m-1)!$ in the denominator or differentiating
$(z - z_0)^m f(z)$ the wrong number of times.
:::
:::caution
$\mathrm{Res}(f, \infty) = -\mathrm{Res}(1/z^2 \cdot f(1/z), 0)$. It is NOT $f(\infty)$. For A
function that is analytic everywhere in the finite plane except for finitely many singularities, The
sum of all residues (including the residue at infinity) is zero.
:::
:::caution
Mapping $w = z^2$ is conformal at every $z \neq 0$But it doubles the angle between curves at each
Point. At $z = 0$It is not conformal because $f'(0) = 0$.
:::
:::caution
Interior, but the minimum can occur in the interior (e.g., $f(z) = z$ on the unit disk has minimum
$|f| = 0$ at $z = 0$). For the minimum principle, one needs the additional hypothesis that $f$ has
No zeros in the domain.
:::
:::caution
without specifying a branch, you must either compute all values or explicitly state which Branch you
are using. The principal branch $\mathrm{Log}\, z$ has a branch cut along $(-\infty, 0]$ And is
undefined on this cut.
:::
:::caution
$|f(z)|$ on the entire contour. A common error is bounding $|f|$ on only part of the contour. Also,
$L$ must be the arc length of the contour, not a diameter or radius.
:::
:::caution
their multiplicity/order. A common error is counting only distinct zeros rather than counting with
multiplicity:

$$\frac{1}{2\pi i}\oint_C \frac{f'(z)}{f(z)}\,dz = N - P$$

where $N$ is the number of zeros and $P$ the number of poles inside $C$, counted with multiplicity.
:::
:::caution
branch point at $z = 0$, and a branch cut from $0$ to $\infty$ along any ray. Different choices of
branch cut yield different function values on the cut. When integrating, ensure the contour does not
cross the branch cut, or account for the jump discontinuity across it.
:::
:::caution
the centre. The function $f(z) = 1/((z-1)(z-2))$ has three distinct Laurent expansions in $|z| < 1$,
$1 < |z| < 2$, and $|z| > 2$. A common error is assuming only one expansion exists for a given centre.
:::
:::caution
the domain. Two analytic functions that agree on a sequence with a limit point in the domain are
identical. However, they may agree on infinitely many isolated points without being identical if
those points accumulate on the boundary.
:::
:::caution
$\lim_{R\to\infty} \max_{z \in \Gamma_R} |f(z)| = 0$ is sufficient only for integrals of the form
$\int_{-\infty}^\infty f(x) e^{iax} dx$ with $a > 0$. For $a < 0$, the contour must close in the
lower half-plane instead.
:::
:::caution
the integral itself. For example, $\int_{-\infty}^\infty x/(x^2+1) dx$ diverges, but its principal
value exists and equals $0$. When using residue theory, check that the integrand decays sufficiently
on semicircular contours.
:::
:::caution
not exist globally on multiply connected domains. For example, $\log r$ is harmonic on $\mathbb{C}\setminus\{0\}$ but has no single-valued harmonic conjugate there.
:::
:::caution
real axis (or more generally, to map the boundary to itself). A common mistake is applying the
principle to functions that take complex values on the boundary, which leads to incorrect analytic
continuations.
:::
:::caution
must not pass through any zeros or poles of $f$. A contour passing through a zero can give an
incorrect count because the argument change is undefined (the function is zero on the contour).
:::
:::caution
at $z_0$ that contains no singularities, but may converge on a larger domain if the singularities
are branch points rather than isolated poles. For example, $\sqrt{z}$ expanded about $z = 1$
converges for $|z - 1| < 1$, limited by the branch point at $z = 0$, not by a pole.
:::
:::caution
obvious and requires proof (it follows from Cauchy's integral formula). A common mistake is to
assume that if $f$ is differentiable once then it is $C^\infty$ without invoking complex analysis
results. In real analysis, $f(x) = x^2\sin(1/x)$ extended by $f(0)=0$ is differentiable once but
not twice.
:::
:::caution
$2\pi$. This is because $e^{z+2\pi i} = e^z(\cos 2\pi + i\sin 2\pi) = e^z$. This periodicity
in the imaginary direction means that equations like $e^z = w$ have infinitely many solutions
spaced by $2\pi i$ in the imaginary direction.
:::
:::caution
removable singularity at $z_0$, then $\mathrm{Res}(f, z_0) = 0$ because the Laurent expansion
has no negative powers. However, a function can have a removable singularity and still not be
defined at $z_0$ (e.g., $\sin z/z$ at $z=0$).
:::
:::caution
theorem, you must check that $f$ has no poles on the real axis. If there are poles on the real
axis, use an indented contour and take the principal value. For example,
$\int_{-\infty}^\infty \sin x/x\,dx$ requires deforming around $z=0$ to avoid the apparent
singularity (which is actually removable).
:::
:::caution
an antiderivative, but this does **not** mean the integral along any closed contour is zero.
The antiderivative must be single-valued. For $1/z$ on $\mathbb{C}\setminus\{0\}$, the
"antiderivative" $\log z$ is multi-valued, so $\oint dz/z = 2\pi i$ despite $1/z$ being
analytic on the punctured plane.
:::

## Intuition

The pitfalls in complex analysis stem from the deceptive similarity between real and complex differentiation. In the real world, differentiability is a mild condition; in the complex world, it is extraordinarily restrictive. A single complex derivative implies infinitely many real derivatives and forces the function to satisfy Laplace's equation. This rigidity means that seemingly innocent mistakes, like forgetting branch cuts or misidentifying residues, lead to fundamentally wrong answers. The complex logarithm is multi-valued, Laurent expansions depend on the annulus, and the residue at infinity requires a change of variable.

## Cross-References

- **[Complex Functions and Analyticity](2_complex-functions-and-analyticity.md)**: Analytic functions are infinitely differentiable and satisfy the Cauchy-Riemann equations.
- **[Cauchy's Theorem](5_cauchy-s-theorem.md)**: Cauchy's theorem requires analyticity on a directly connected domain for the integral to vanish.
- **[Singularities and Residue Theory](8_singularities-and-residue-theory.md)**: The residue theorem computes contour integrals by summing contributions from singularities.
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
