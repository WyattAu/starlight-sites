---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: The Mathematics Physics Assumes"
tags:
  - Physics
description: "The transition into university physics: vectors, trigonometry, coordinate geometry and single-variable calculus rebuilt from first principles, every term defined before use, every rule proved -- so any exam-board background reaches the baseline track 1 assumes."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com/physics/before-you-begin"}]
}
</script>

School physics is a collection of formulas. University physics is a small set of
principles, expressed in vectors and calculus, from which the formulas are
derived. The transition fails not because the physics gets harder but because
the *language* changes: a statement like "$\mathbf{F} = m\mathbf{a}$ where
$\mathbf{a} = \ddot{\mathbf{r}}$" assumes you can read vectors, differentiate,
and treat an equation between vector quantities as three equations at once.

This page rebuilds that language from first principles; vectors, trigonometry,
coordinate geometry, and calculus; defining every term before it is used and
proving every rule. A confident reader should take the self-test in §5 and only
study the sections whose answers surprise.

## Intuition

Physics quantities come in two kinds. A **scalar**; mass, energy, temperature -
is a number. A **vector**; displacement, velocity, force; is a number *and* a
direction. The single most important upgrade from school physics is learning to
compute with directions: a car turning a corner at constant *speed* is
accelerating, because its velocity vector is changing. Nothing in school
algebra can say that sentence; vectors can.

The second upgrade is calculus. Speed is the derivative of position; acceleration
is its second derivative. Every equation of motion; the ones school gives you as
$s = ut + \frac{1}{2}at^2$; is a differential equation, and the school formulas
are what you get by solving it for constant acceleration. University physics
derives them; this page gives you the differentiation that derivation needs.

## 1. Vectors

**Definition.** A **vector** $\mathbf{v}$ is a quantity with magnitude and
direction, written $|\mathbf{v}|$ for its magnitude. Two vectors are equal when
their magnitudes and directions agree.

**Components.** In a plane, $\mathbf{v} = v_x\,\hat{\mathbf{i}} + v_y\,\hat{\mathbf{j}}$
where $\hat{\mathbf{i}}, \hat{\mathbf{j}}$ are unit vectors along the axes and

$$
v_x = |\mathbf{v}|\cos\theta, \qquad v_y = |\mathbf{v}|\sin\theta,
\qquad |\mathbf{v}| = \sqrt{v_x^2 + v_y^2}.
$$

These four identities resolve every "resolve the force along the slope" exercise,
and they are the definition of component rather than a trick to memorise.

**Addition by components.** $(u_x + v_x,\; u_y + v_y)$; the parallelogram rule
from school is component addition, proved by applying each vector's definition.

**Scalar multiplication.** $c\,\mathbf{v}$ has magnitude $|c||\mathbf{v}|$,
direction preserved for $c > 0$ and reversed for $c < 0$. Force balance
$\sum\mathbf{F} = 0$ is a statement about component sums, and it is why a
book on a table has weight balanced by a normal force of equal magnitude and
opposite direction.

**The dot product.**

$$
\mathbf{u}\cdot\mathbf{v} = u_xv_x + u_yv_y = |\mathbf{u}|\,|\mathbf{v}|\cos\theta.
$$

*Proof of the equivalence.* Both sides are bilinear in the components, so it
suffices to check the two unit vectors along the axes: $\hat{\mathbf{i}}\cdot\hat{\mathbf{i}} = 1 = 1\cdot1\cos 0$ and $\hat{\mathbf{i}}\cdot\hat{\mathbf{j}} = 0 = \cos 90°$;
bilinearity then extends it to every pair. $\blacksquare$

The dot product answers "how much of $\mathbf{u}$ points along $\mathbf{v}$" -
which is the question every projection, every work integral, and every
component-of-gravity-along-a-slope calculation is asking.

## 2. Trigonometry physics actually uses

**Definition (radian).** An angle $\theta$ radians subtends arc length $\theta$
on the unit circle. All calculus below assumes radians.

**The identities, with proofs rather than a list.**

- $\sin^2\theta + \cos^2\theta = 1$: the equation of the unit circle.
- $\sin(\alpha+\beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$: obtained by
  rotating the point $(\cos\alpha, \sin\alpha)$ through $\beta$.
- $\sin 2\theta = 2\sin\theta\cos\theta$ and
  $\cos 2\theta = 1 - 2\sin^2\theta$: the addition formulas at $\alpha = \beta$.

**The two limits every physics derivation uses:**

$$
\lim_{h\to 0}\frac{\sin h}{h} = 1,
\qquad
\lim_{h\to 0}\frac{1 - \cos h}{h^2} = \frac{1}{2}.
$$

They are why $\frac{d}{dx}\sin x = \cos x$ in radians; and why that derivative
is *false* in degrees. If you have ever differentiated $\sin$ in degrees and
gotten a wrong trajectory, this is why.

**Small-angle physics.** $\sin\theta \approx \theta$ and $\cos\theta \approx 1 - \theta^2/2$ for small $\theta$, which is the linearisation that makes
pendulums harmonic and lenses computable; and the second-order term is what
makes the correction, so a pendulum's period grows with amplitude rather than
staying constant.

## 3. Coordinate geometry

**Definition.** The gradient of the line through $(x_1,y_1)$, $(x_2,y_2)$ is
$m = \frac{y_1 - y_2}{x_1 - x_2}$; two lines are perpendicular iff
$m_1 m_2 = -1$.

*Proof of perpendicularity.* Direction vectors $(1, m_1)$ and $(1, m_2)$ are
perpendicular iff their dot product vanishes:
$1 + m_1 m_2 = 0$. $\blacksquare$

**Straight-line graphs as linear models.** $y = mx + c$ is the statement that
the response changes at a constant rate $m$ per unit of the input. Every
"equation of the form $y = mx + c$" exercise in school is a linear model, and
reading $m$ and $c$ off a graph is reading a derivative and an initial condition.

**Areas and the quadratic.** Projectile range $R = \frac{v^2\sin 2\theta}{g}$
is maximised at $\theta = 45°$ because $\sin 2\theta$ peaks at $1$ when
$2\theta = 90°$; a trigonometry fact doing the work of a differentiation, and a
preview of how the university course will use both.

## 4. Calculus

**Definition.** $f'(x) = \lim_{h\to 0}\frac{f(x+h) - f(x)}{h}$ when the limit
exists; geometrically the gradient of the tangent.

**The table, with the two proofs that matter.**

<div class="table-wrap">

| $f(x)$ | $f'(x)$ |
| ------ | ------- |
| $x^r$ | $rx^{r-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |

</div>

*Proof for $x^r$ from first principles.* Expand $(x+h)^r$ by the binomial
theorem, subtract $x^r$, divide by $h$; every surviving term carries one factor
$h$, so the limit is $r x^{r-1}$. $\blacksquare$

*Proof for $\sin$.* From the addition formula,
$\frac{\sin(x+h)-\sin x}{h} = \sin x\,\frac{\cos h - 1}{h} + \cos x\,\frac{\sin h}{h} \to \cos x$, using the two limits of §2. $\blacksquare$

**Rules.** Product: $(fg)' = f'g + fg'$. Chain: $(g \circ f)' = g'(f)\,f'$.
The chain rule is the one that makes physics work: if $x$ is a function of $t$
and $v = \frac{dx}{dt}$, then $\frac{dv}{dt} = \frac{dv}{dx}\cdot\frac{dx}{dt} = v\,\frac{dv}{dx}$,
which converts every acceleration-into-position problem into a first-order
separable equation.

**Integration.** $\int_a^b f\,dx$ is the signed area under the curve, and the
fundamental theorem of calculus says it is computed by antiderivatives:
$\int_a^b f = F(b) - F(a)$. The work–energy theorem
$W = \int \mathbf{F}\cdot d\mathbf{r} = \Delta(\tfrac12 mv^2)$ is that theorem
applied to Newton's second law.

**Differential equations, in one move.** The statement

$$
\frac{d^2 x}{dt^2} = -\omega^2 x
$$

is the simple harmonic motion equation, and $x = A\cos(\omega t + \phi)$ is its
solution; verifiable by differentiating twice. Verification is a legitimate
solution method at this level, and it is how the school formulas are recovered
from the principles.

## 5. Self-test

1. A force of $50\,\mathrm{N}$ acts at $37°$ above the horizontal. Give its
   horizontal and vertical components. (§1)
2. Two forces $\mathbf{F}_1 = (3, 4)$ and $\mathbf{F}_2 = (-4, 3)$ act on a
   body. Find the resultant's magnitude. (§1)
3. What is $\cos 2\theta$ in terms of $\sin\theta$ only? Prove it. (§2)
4. Why is $\frac{d}{dx}\sin x = \cos x$ false in degrees? (§2)
5. Show that the lines $y = 3x + 1$ and $x + 3y = 7$ are perpendicular. (§3)
6. Differentiate $f(x) = x^2\sin x$. (§4)
7. Verify that $x = A\cos(\omega t)$ solves $\ddot{x} = -\omega^2 x$. (§4)
8. A ball is thrown at $20\,\mathrm{m/s}$ at $30°$. Find its range using the
   double-angle identity, then state the angle that maximises it. (§2, §3)

**Answers.**
(1) $(50\cos 37°, 50\sin 37°) \approx (39.9, 30.1)\,\mathrm{N}$.
(2) $(3-4,\, 4+3) = (-1, 7)$, magnitude $\sqrt{50} \approx 7.07$.
(3) $\cos 2\theta = 1 - 2\sin^2\theta$, from $\cos(\theta+\theta)$ with the
addition formula. (4) Because $\frac{\sin h}{h} \to \frac{\pi}{180}$ when $h$ is
in degrees, so the derivative picks up that factor. (5) Gradients $3$ and
$-\tfrac13$; product $-1$. (6) $2x\sin x + x^2\cos x$ by the product rule.
(7) $\dot{x} = -A\omega\sin(\omega t)$, $\ddot{x} = -A\omega^2\cos(\omega t) = -\omega^2 x$. (8) $R = \frac{400\sin 60°}{9.81} \approx 35.3\,\mathrm{m}$;
maximised at $\theta = 45°$.

## Where to go next

- [Postulates of Quantum Mechanics](/5-quantum-mechanics/2_postulates-of-quantum-mechanics/); vectors again, but in Hilbert space.
- [Newtonian Mechanics Review](/1-classical-mechanics/1_newtonian-mechanics-review/); track 1, which begins where this page ends.
- [The Laws of Thermodynamics](/2-thermal-physics/1_the-laws-of-thermodynamics/); the scalars-only track, for contrast.
