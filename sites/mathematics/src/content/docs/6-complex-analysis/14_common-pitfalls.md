---
title: Common Pitfalls
tags:
  - Mathematics
  - University
description: "Differentiability. The partial derivatives must also be continuous. For example, Comprehensive educational content coverage with definitions and practice proble"
---

<aside aria-label="Common Pitfall The Cauchy-Riemann equations are necessary but not sufficient for" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The Cauchy-Riemann equations are necessary but not sufficient for</p>
Differentiability. The partial derivatives must also be continuous. For example,
$f(z) = \exp(-1/z^4)$ extended by $f(0) = 0$ satisfies the Cauchy-Riemann equations at the origin
But is not differentiable there.
</aside>
<aside aria-label="Common Pitfall Cauchy"s theorem requires a connected domain. On a multiply Connected" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall Cauchy"s theorem requires a connected domain. On a multiply Connected</p>
domain, the integral of an analytic function around a closed contour may be non-zero. The Classic
example is $\oint_{|z|=1} dz/z = 2\pi i$.
</aside>
<aside aria-label="Common Pitfall When computing residues at poles of order $m \geq 2$The formula involves" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall When computing residues at poles of order $m \geq 2$The formula involves</p>
Differentiation. A common error is forgetting the $(m-1)!$ in the denominator or differentiating
$(z - z_0)^m f(z)$ the wrong number of times.
</aside>
<aside aria-label="Common Pitfall The residue at infinity is" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The residue at infinity is</p>
$\mathrm{Res}(f, \infty) = -\mathrm{Res}(1/z^2 \cdot f(1/z), 0)$. It is NOT $f(\infty)$. For A
function that is analytic everywhere in the finite plane except for finitely many singularities, The
sum of all residues (including the residue at infinity) is zero.
</aside>
<aside aria-label="Common Pitfall A conformal mapping preserves angles but not necessarily distances. The" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall A conformal mapping preserves angles but not necessarily distances. The</p>
Mapping $w = z^2$ is conformal at every $z \neq 0$But it doubles the angle between curves at each
Point. At $z = 0$It is not conformal because $f'(0) = 0$.
</aside>
<aside aria-label="Common Pitfall The maximum modulus principle says that $|f|$ has no local maximum in the" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The maximum modulus principle says that $|f|$ has no local maximum in the</p>
Interior, but the minimum can occur in the interior (e.g., $f(z) = z$ on the unit disk has minimum
$|f| = 0$ at $z = 0$). For the minimum principle, one needs the additional hypothesis that $f$ has
No zeros in the domain.
</aside>
<aside aria-label="Common Pitfall The complex logarithm is multi-valued. When a problem asks for "logarithm"" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The complex logarithm is multi-valued. When a problem asks for "logarithm"</p>
without specifying a branch, you must either compute all values or explicitly state which Branch you
are using. The principal branch $\mathrm{Log}\, z$ has a branch cut along $(-\infty, 0]$ And is
undefined on this cut.

</aside>
<aside aria-label="Common Pitfall When applying the ML inequality, make sure $M$ is a valid upper bound for" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall When applying the ML inequality, make sure $M$ is a valid upper bound for</p>
$|f(z)|$ on the entire contour. A common error is bounding $|f|$ on only part of the contour. Also,
$L$ must be the arc length of the contour, not a diameter or radius.

</aside>
<aside aria-label="Common Pitfall The argument principle counts zeros and poles, but one must account for" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The argument principle counts zeros and poles, but one must account for</p>
their multiplicity/order. A common error is counting only distinct zeros rather than counting with
multiplicity:

$$\frac{1}{2\pi i}\oint_C \frac{f'(z)}{f(z)}\,dz = N - P$$

where $N$ is the number of zeros and $P$ the number of poles inside $C$, counted with multiplicity.

</aside>
<aside aria-label="Common Pitfall Branch cuts must be chosen consistently. The function $\sqrt{z}$ has a" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall Branch cuts must be chosen consistently. The function $\sqrt{z}$ has a</p>
branch point at $z = 0$, and a branch cut from $0$ to $\infty$ along any ray. Different choices of
branch cut yield different function values on the cut. When integrating, ensure the contour does not
cross the branch cut, or account for the jump discontinuity across it.

</aside>
<aside aria-label="Common Pitfall Laurent series expansions depend on the annulus of convergence, not just" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall Laurent series expansions depend on the annulus of convergence, not just</p>
the centre. The function $f(z) = 1/((z-1)(z-2))$ has three distinct Laurent expansions in $|z| < 1$,
$1 < |z| < 2$, and $|z| > 2$. A common error is assuming only one expansion exists for a given centre.

</aside>
<aside aria-label="Common Pitfall The identity theorem requires the set of accumulation points to lie inside" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The identity theorem requires the set of accumulation points to lie inside</p>
the domain. Two analytic functions that agree on a sequence with a limit point in the domain are
identical. However, they may agree on infinitely many isolated points without being identical if
those points accumulate on the boundary.

</aside>
<aside aria-label="Common Pitfall When using Jordan's lemma for contour integration, the condition" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall When using Jordan's lemma for contour integration, the condition</p>
$\lim_{R\to\infty} \max_{z \in \Gamma_R} |f(z)| = 0$ is sufficient only for integrals of the form
$\int_{-\infty}^\infty f(x) e^{iax} dx$ with $a > 0$. For $a < 0$, the contour must close in the
lower half-plane instead.

</aside>
<aside aria-label="Common Pitfall The Cauchy principal value of an improper integral is not always equal to" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The Cauchy principal value of an improper integral is not always equal to</p>
the integral itself. For example, $\int_{-\infty}^\infty x/(x^2+1) dx$ diverges, but its principal
value exists and equals $0$. When using residue theory, check that the integrand decays sufficiently
on semicircular contours.

</aside>
<aside aria-label="Common Pitfall Harmonic conjugates exist locally on any simply connected domain, but may" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall Harmonic conjugates exist locally on any simply connected domain, but may</p>
not exist globally on multiply connected domains. For example, $\log r$ is harmonic on $\mathbb{C}\setminus\{0\}$ but has no single-valued harmonic conjugate there.

</aside>
<aside aria-label="Common Pitfall The Schwarz reflection principle requires the function to be real on the" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The Schwarz reflection principle requires the function to be real on the</p>
real axis (or more generally, to map the boundary to itself). A common mistake is applying the
principle to functions that take complex values on the boundary, which leads to incorrect analytic
continuations.

</aside>
<aside aria-label="Common Pitfall When using the argument principle to count zeros and poles, the contour" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall When using the argument principle to count zeros and poles, the contour</p>
must not pass through any zeros or poles of $f$. A contour passing through a zero can give an
incorrect count because the argument change is undefined (the function is zero on the contour).

</aside>
<aside aria-label="Common Pitfall The Taylor series of a function converges within the largest disk centred" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The Taylor series of a function converges within the largest disk centred</p>
at $z_0$ that contains no singularities, but may converge on a larger domain if the singularities
are branch points rather than isolated poles. For example, $\sqrt{z}$ expanded about $z = 1$
converges for $|z - 1| < 1$, limited by the branch point at $z = 0$, not by a pole.

</aside>
<aside aria-label="Common Pitfall The derivative of an analytic function is also analytic, but this is not" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The derivative of an analytic function is also analytic, but this is not</p>
obvious and requires proof (it follows from Cauchy's integral formula). A common mistake is to
assume that if $f$ is differentiable once then it is $C^\infty$ without invoking complex analysis
results. In real analysis, $f(x) = x^2\sin(1/x)$ extended by $f(0)=0$ is differentiable once but
not twice.

</aside>
<aside aria-label="Common Pitfall The complex exponential $e^z$ is periodic with period $2\pi i$, not" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The complex exponential $e^z$ is periodic with period $2\pi i$, not</p>
$2\pi$. This is because $e^{z+2\pi i} = e^z(\cos 2\pi + i\sin 2\pi) = e^z$. This periodicity
in the imaginary direction means that equations like $e^z = w$ have infinitely many solutions
spaced by $2\pi i$ in the imaginary direction.

</aside>
<aside aria-label="Common Pitfall The residue at a removable singularity is always zero. If $f$ has a" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The residue at a removable singularity is always zero. If $f$ has a</p>
removable singularity at $z_0$, then $\mathrm{Res}(f, z_0) = 0$ because the Laurent expansion
has no negative powers. However, a function can have a removable singularity and still not be
defined at $z_0$ (e.g., $\sin z/z$ at $z=0$).

</aside>
<aside aria-label="Common Pitfall When integrating $\int_{-\infty}^\infty f(x)\,dx$ using the residue" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall When integrating $\int_{-\infty}^\infty f(x)\,dx$ using the residue</p>
theorem, you must check that $f$ has no poles on the real axis. If there are poles on the real
axis, use an indented contour and take the principal value. For example,
$\int_{-\infty}^\infty \sin x/x\,dx$ requires deforming around $z=0$ to avoid the apparent
singularity (which is actually removable).

</aside>
<aside aria-label="Common Pitfall A function that is analytic on a simply connected domain always has" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall A function that is analytic on a simply connected domain always has</p>
an antiderivative, but this does **not** mean the integral along any closed contour is zero.
The antiderivative must be single-valued. For $1/z$ on $\mathbb{C}\setminus\{0\}$, the
"antiderivative" $\log z$ is multi-valued, so $\oint dz/z = 2\pi i$ despite $1/z$ being
analytic on the punctured plane.

</aside>