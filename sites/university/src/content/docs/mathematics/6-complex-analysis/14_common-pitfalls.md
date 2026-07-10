---
title: Common Pitfalls
tags:
  - Mathematics
  - University
description: "Differentiability. The partial derivatives must also be continuous. For example, Comprehensive educational content coverage with definitions and practice proble"
---

:::caution Common Pitfall The Cauchy-Riemann equations are necessary but not sufficient for
Differentiability. The partial derivatives must also be continuous. For example,
$f(z) = \exp(-1/z^4)$ extended by $f(0) = 0$ satisfies the Cauchy-Riemann equations at the origin
But is not differentiable there.
:::

:::caution Common Pitfall Cauchy"s theorem requires a connected domain. On a multiply Connected
domain, the integral of an analytic function around a closed contour may be non-zero. The Classic
example is $\oint_{|z|=1} dz/z = 2\pi i$.
:::

:::caution Common Pitfall When computing residues at poles of order $m \geq 2$The formula involves
Differentiation. A common error is forgetting the $(m-1)!$ in the denominator or differentiating
$(z - z_0)^m f(z)$ the wrong number of times.
:::

:::caution Common Pitfall The residue at infinity is
$\mathrm{Res}(f, \infty) = -\mathrm{Res}(1/z^2 \cdot f(1/z), 0)$. It is NOT $f(\infty)$. For A
function that is analytic everywhere in the finite plane except for finitely many singularities, The
sum of all residues (including the residue at infinity) is zero.
:::

:::caution Common Pitfall A conformal mapping preserves angles but not necessarily distances. The
Mapping $w = z^2$ is conformal at every $z \neq 0$But it doubles the angle between curves at each
Point. At $z = 0$It is not conformal because $f'(0) = 0$.
:::

:::caution Common Pitfall The maximum modulus principle says that $|f|$ has no local maximum in the
Interior, but the minimum can occur in the interior (e.g., $f(z) = z$ on the unit disk has minimum
$|f| = 0$ at $z = 0$). For the minimum principle, one needs the additional hypothesis that $f$ has
No zeros in the domain.
:::

:::caution Common Pitfall The complex logarithm is multi-valued. When a problem asks for "logarithm"
without specifying a branch, you must either compute all values or explicitly state which Branch you
are using. The principal branch $\mathrm{Log}\, z$ has a branch cut along $(-\infty, 0]$ And is
undefined on this cut.

:::
:::caution Common Pitfall When applying the ML inequality, make sure $M$ is a valid upper bound for
$|f(z)|$ on the entire contour. A common error is bounding $|f|$ on only part of the contour. Also,
$L$ must be the arc length of the contour, not a diameter or radius.

:::

:::caution Common Pitfall The argument principle counts zeros and poles, but one must account for
their multiplicity/order. A common error is counting only distinct zeros rather than counting with
multiplicity:

$$\frac{1}{2\pi i}\oint_C \frac{f'(z)}{f(z)}\,dz = N - P$$

where $N$ is the number of zeros and $P$ the number of poles inside $C$, counted with multiplicity.

:::

:::caution Common Pitfall Branch cuts must be chosen consistently. The function $\sqrt{z}$ has a
branch point at $z = 0$, and a branch cut from $0$ to $\infty$ along any ray. Different choices of
branch cut yield different function values on the cut. When integrating, ensure the contour does not
cross the branch cut, or account for the jump discontinuity across it.

:::

:::caution Common Pitfall Laurent series expansions depend on the annulus of convergence, not just
the centre. The function $f(z) = 1/((z-1)(z-2))$ has three distinct Laurent expansions in $|z| < 1$,
$1 < |z| < 2$, and $|z| > 2$. A common error is assuming only one expansion exists for a given centre.

:::

:::caution Common Pitfall The identity theorem requires the set of accumulation points to lie inside
the domain. Two analytic functions that agree on a sequence with a limit point in the domain are
identical. However, they may agree on infinitely many isolated points without being identical if
those points accumulate on the boundary.

:::

:::caution Common Pitfall When using Jordan's lemma for contour integration, the condition
$\lim_{R\to\infty} \max_{z \in \Gamma_R} |f(z)| = 0$ is sufficient only for integrals of the form
$\int_{-\infty}^\infty f(x) e^{iax} dx$ with $a > 0$. For $a < 0$, the contour must close in the
lower half-plane instead.

:::

:::caution Common Pitfall The Cauchy principal value of an improper integral is not always equal to
the integral itself. For example, $\int_{-\infty}^\infty x/(x^2+1) dx$ diverges, but its principal
value exists and equals $0$. When using residue theory, check that the integrand decays sufficiently
on semicircular contours.

:::

:::caution Common Pitfall Harmonic conjugates exist locally on any simply connected domain, but may
not exist globally on multiply connected domains. For example, $\log r$ is harmonic on $\mathbb{C}\setminus\{0\}$ but has no single-valued harmonic conjugate there.

:::

:::caution Common Pitfall The Schwarz reflection principle requires the function to be real on the
real axis (or more generally, to map the boundary to itself). A common mistake is applying the
principle to functions that take complex values on the boundary, which leads to incorrect analytic
continuations.

:::

:::caution Common Pitfall When using the argument principle to count zeros and poles, the contour
must not pass through any zeros or poles of $f$. A contour passing through a zero can give an
incorrect count because the argument change is undefined (the function is zero on the contour).

:::

:::caution Common Pitfall The Taylor series of a function converges within the largest disk centred
at $z_0$ that contains no singularities, but may converge on a larger domain if the singularities
are branch points rather than isolated poles. For example, $\sqrt{z}$ expanded about $z = 1$
converges for $|z - 1| < 1$, limited by the branch point at $z = 0$, not by a pole.

:::