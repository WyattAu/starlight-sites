---

date: 2026-07-23T21:57:32+01:00
title: Common Pitfalls
tags:
  - Mathematics
  - University
description: "Overlaps with the homogeneous solution. For Guessing fails Because satisfies the homogeneous equation. You must use instead."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "5 Ordinary Differential Equations", "url": "https://mathematics.wyattau.com/5-ordinary-differential-equations"}, {"name": "10_common Pitfalls", "url": "https://mathematics.wyattau.com/5-ordinary-differential-equations/10_common-pitfalls"}]
}
</script>

:::caution
Overlaps with the homogeneous solution. For $y"' - 4y = e^{2x}$Guessing $y_p = Ae^{2x}$ fails
Because $e^{2x}$ satisfies the homogeneous equation. You must use $y_p = Axe^{2x}$ instead.
:::
:::caution
conditions are built into the transform. Forgetting them leads to incorrect solutions.
:::
:::caution
Separate, check whether $h(y) = 0$ gives any valid solutions. For example, solving $y' = y^2$ by
Separating gives $y = -1/(x + C)$But misses the solution $y = 0$.
:::
:::caution
Of continuity. At jump discontinuities, it converges to the midpoint of the jump. The Gibbs
Phenomenon causes overshoots near jumps that do not vanish as more terms are added.
:::
:::caution
Determine the eigenvalues. Using the wrong boundary conditions (e.g., Neumann instead of Dirichlet)
Leads to a completely different set of eigenfunctions and eigenvalues.
:::
:::caution
$y' = x^2 + y^2$ have no closed-form solution in terms of elementary functions. Numerical methods
(Euler, Runge-Kutta) may be necessary.
:::
:::caution
Valid for hyperbolic critical points (no eigenvalues on the imaginary axis). If eigenvalues lie on
The imaginary axis, the nonlinear system can behave very differently from its linearization.
:::
:::caution
Partial fraction decomposition is correct before inverting term-by-term. A common error is
Forgetting to include all powers of irreducible quadratic factors.
:::
:::caution
with complex $r = \alpha \pm i\beta$ gives solutions involving $\cos(\beta \ln x)$ and
$\sin(\beta \ln x)$Not $\cos(\beta x)$ and $\sin(\beta x)$.
:::
:::caution
Necessarily mean the solutions are linearly dependent. For linear ODEs with continuous coefficients,
$W \equiv 0$ everywhere or $W \neq 0$ everywhere. Check Abel's identity.
:::
### 9.9 Worked Example: Lyapunov Function

**Problem.** Show that $(0, 0)$ is asymptotically stable for the system $x' = -x - y^3$,
$y' = x^3 - y$.

<details>
<summary>Solution</summary>

_Solution._ Critical point: $-x - y^3 = 0$ and $x^3 - y = 0$ gives $x = 0, y = 0$.

Choose the Lyapunov function $V(x, y) = \frac{x^2}{2} + \frac{y^2}{2}$. $V(0,0) = 0$ and $V > 0$ for
$(x, y) \neq (0, 0)$.

$\dot{V} = \frac{\partial V}{\partial x}x' + \frac{\partial V}{\partial y}y' = x(-x - y^3) + y(x^3 - y)$

$= -x^2 - xy^3 + x^3 y - y^2 = -x^2 - y^2 + xy(x^2 - y^2)$

This is not negative definite. Let us try $V(x, y) = \frac{x^4}{4} + \frac{y^4}{4}$:

$\dot{V} = x^3(-x - y^3) + y^3(x^3 - y) = -x^4 - x^3 y^3 + x^3 y^3 - y^4 = -(x^4 + y^4)$.

Since $\dot{V} = -(x^4 + y^4) \lt 0$ for $(x, y) \neq (0, 0)$The origin is asymptotically Stable by
Lyapunov's theorem. $\blacksquare$

</details>

### 9.10 Worked Example: Van der Pol Oscillator

**Problem.** Show that the Van der Pol equation $x'' + \mu(x^2 - 1)x' + x = 0$ with $\mu > 0$ Has a
unique limit cycle.

<details>
<summary>Solution</summary>

\_Solution.\* Write as a system: $x' = y$, $y' = -x - \mu(x^2 - 1)y$.

The only critical point is $(0, 0)$. The Jacobian at the origin is
$J = \begin{pmatrix} 0 & 1 \\ -1 & \mu \end{pmatrix}$.

$\mathrm{tr}(J) = \mu > 0$, $\det(J) = 1 > 0$, $\tau^2 - 4\Delta = \mu^2 - 4$.

For $0 \lt \mu \lt 2$: complex eigenvalues with positive real part (**unstable spiral**). For
$\mu \geq 2$: two positive real eigenvalues (**unstable node**).

The origin is always unstable. To show existence of a limit cycle, we use a **Liénard's theorem** Or
construct a trapping region. Define

$L(x) = x^3/3 - x$ and write the system as $x' = y$, $y' = -x - \mu L'(x) y$.

The function $L(x)$ has zeros at $x = \pm 1$. For $\mu > 0$The damping is negative for
$\lvert x \rvert \lt 1$ (energy input) and positive for $\lvert x \rvert > 1$ (energy Dissipation).
This creates a unique stable limit cycle that passes through $x = \pm 1$.

A detailed .../1-number-and-algebra/3_proof-and-logic requires constructing an annular region and
applying the Poincaré-Bendixson Theorem (the inner boundary encloses the unstable origin; the outer
boundary is chosen so that Trajectories point inward). $\blacksquare$

</details>

### 9.11 Quick Reference: Method Selection

| ODE Type                  | Recommended Method       | Watch out for                      |
| ------------------------- | ------------------------ | ---------------------------------- |
| Separable                 | Separation of variables   | Missing $h(y) = 0$ solutions       |
| First-order linear        | Integrating factor       | Correct sign in exponent           |
| Constant-coeff linear     | Undetermined coefficients | Overlap with homogeneous solution  |
| Cauchy-Euler              | $x^r$ ansatz             | $\ln x$ terms for repeated roots   |
| Systems near critical pt  | Linearisation            | Non-hyperbolic points              |
| Nonlinear / no closed form| Numerical (RK4)          | Step size selection                |

### Additional Pitfalls

- **Assuming series solutions always converge everywhere.** Frobenius series converge only within
  the radius of convergence determined by the nearest singularity. For $y'' + p(x)y' + q(x)y = 0$,
  the series converges at least up to the nearest singularity of $p(x)$ or $q(x)$ in the complex
  plane, not necessarily for all $x$.

- **Confusing the order of a pole in the complex plane with the order of a singular point in an
  ODE.** A regular singular point is one where $(x-x_0)p(x)$ and $(x-x_0)^2q(x)$ are analytic.
  An irregular singular point has higher-order singularities. These are unrelated to the order of
  poles in complex analysis.

- **Forgetting to transform boundary conditions when using Laplace transforms.** The Laplace
  transform incorporates initial conditions at $t = 0$. If the problem has boundary conditions at
  $t = 0$ and $t = L$, the Laplace transform may not be the right tool — consider using Fourier
  series or separation of variables instead.

- **Applying the method of undetermined coefficients when the forcing term is not of the right
  form.** The method works only for forcing terms that are polynomials, exponentials, sines,
  cosines, or products thereof. For forcing terms like $\tan t$ or $1/t$, use variation of
  parameters instead.

- **Ignoring the transient solution in systems.** The general solution to a linear ODE is the sum
  of the complementary solution (transient) and particular solution (steady-state). When studying
  long-term behaviour, focus on the particular solution, but remember that the transient may be
  significant at early times.

## Intuition

Differential equations are the language of change. Every pitfall in this file reflects a mismatch between the equation's structure and the method applied to it. The particular integral must complement, not duplicate, the complementary solution, just as a resonant driving force must be handled differently from a non-resonant one. Separable equations can miss equilibrium solutions because dividing by zero eliminates them. The deeper pattern is that ODE methods are not universal recipes: they work because the equation has specific structural properties, and ignoring those properties produces nonsense.

## Cross-References

- **[First-Order ODEs](2_first-order-odes)**: Many pitfalls in higher-order ODEs stem from misunderstanding first-order techniques like separation of variables and integrating factors.
- **[Second-Order Linear ODEs](3_second-order-linear-odes)**: The characteristic equation method and undetermined coefficients are frequent sources of error when overlap with the homogeneous solution occurs.
- **[Stability and Phase Plane Analysis](9_stability-and-phase-plane-analysis)**: Non-hyperbolic critical points and incorrect linearisation are common mistakes in stability analysis.
- **[Series Solutions](6_series-solutions)**: Confusing ordinary and regular singular points leads to incorrect application of the Frobenius method.

- [Quantum Mechanics](https://physics.wyattau.com/docs/quantum-mechanics)
- [Graph Theory](https://computer-science.wyattau.com/docs/graph-theory)
- [Classical Mechanics](https://physics.wyattau.com/docs/classical-mechanics)
- [Electromagnetism](https://physics.wyattau.com/docs/electromagnetism)
