---

date: 2026-07-23T21:57:32+01:00
title: "Rigid Body Dynamics"
tags:
  - Physics
  - University
description: "A is a system of particles in which the distance between every pair of particles Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "1 Classical Mechanics", "url": "https://physics.wyattau.com/1-classical-mechanics"}, {"name": "8_rigid Body Dynamics", "url": "https://physics.wyattau.com/1-classical-mechanics/8_rigid-body-dynamics"}]
}
</script>

**History.** Leonhard Euler's equations of rigid body motion appeared in his 1765 *Theoria motus corporum solidorum seu rigidorum*, completing the mechanics of rotating bodies his Basel predecessor had begun. The intermediate-axis instability's most famous demonstration came three centuries later: cosmonaut Vladimir Dzhanibekov, aboard the Salyut 7 station in 1985, repeatedly flipped a wing nut in weightlessness and watched it tumble 180 degrees every few seconds, exactly as Euler's equations predicted.

**Ponder (attempt the generalisation).** For a point mass, rotational inertia is I = m r^2. Attempt to generalise to a rigid body of many masses: why does the answer depend on the rotation AXIS, and what mathematical object captures direction-dependence?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Sum I = sum m r^2 with r measured perpendicular to the chosen axis: change the axis and the perpendicular distances all change, so the sum changes. The direction-dependence is exactly what a matrix encodes: the inertia TENSOR maps angular velocity to angular momentum, and its eigenvectors are the principal axes. A scalar cannot do this: spinning a book about different axes meets different resistance, and only a tensor tells the truth about all of them at once.

</div>
</details>

### 8.1 Rigid Body Kinematics

**Definition.** A **rigid body** is a system of particles in which the distance between every pair
of particles is fixed.

A rigid body has 6 degrees of freedom: 3 translational (centre of mass position) and 3 rotational
(orientation). The orientation is specified by three angles, most commonly the **Euler angles**
$(\phi, \theta, \psi)$.

### 8.2 Angular Velocity and Euler Angles

The angular velocity $\boldsymbol{\omega}$ in terms of the Euler angles ($z$-$x"$-$z''$ convention)
expressed in the body frame:

$$
\omega_1 = \dot{\phi}\sin\theta\sin\psi + \dot{\theta}\cos\psi
$$

$$
\omega_2 = \dot{\phi}\sin\theta\cos\psi - \dot{\theta}\sin\psi
$$

$$
\omega_3 = \dot{\phi}\cos\theta + \dot{\psi}
$$

### 8.3 The Inertia Tensor

**Definition.** The **moment of inertia tensor** about the centre of mass is:

$$
I_{jk} = \int \rho(\mathbf{r})\left(\lvert\mathbf{r}\rvert^2 \delta_{jk} - r_j r_k\right) dV
$$

In matrix form, for a discrete system:

$$
\mathbf{I} = \begin{pmatrix} I_{xx} & I_{xy} & I_{xz} \\ I_{xy} & I_{yy} & I_{yz} \\ I_{xz} & I_{yz} & I_{zz} \end{pmatrix}
$$

Where:

$$
I_{xx} = \sum_i m_i(y_i^2 + z_i^2), \quad I_{xy} = -\sum_i m_i x_i y_i, \quad \mathrm{etc}.
$$

**Theorem 8.1 (Parallel Axis Theorem).** The inertia tensor about a point displaced by $\mathbf{a}$
from the centre of mass is:

$$
I_{jk}' = I_{jk}^{(\mathrm{CM})} + M(a^2\delta_{jk} - a_j a_k)
$$

Where $M$ is the total mass.

_Proof._ Writing $\mathbf{r}_i' = \mathbf{r}_i + \mathbf{a}$ where $\mathbf{r}_i$ is measured from
the centre of mass:

$$
I_{jk}' = \sum_i m_i\left(\lvert\mathbf{r}_i'\rvert^2\delta_{jk} - r_i' r_{i',k}\right) = \sum_i m_i\left(\lvert\mathbf{r}_i + \mathbf{a}\rvert^2\delta_{jk} - (r_{i,j} + a_j)(r_{i,k} + a_k)\right)
$$

Expanding and using $\sum_i m_i \mathbf{r}_i = \mathbf{0}$ (centre of mass condition):

$$
I_{jk}' = I_{jk}^{(\mathrm{CM})} + M(a^2\delta_{jk} - a_j a_k)
$$

$\blacksquare$

### 8.4 Principal Axes

**Definition.** The **principal axes** are the eigenvectors of $\mathbf{I}$ And the **principal
moments of inertia** $I_1, I_2, I_3$ are the corresponding eigenvalues.

In the principal axis frame, the inertia tensor is diagonal:

$$
\mathbf{I} = \begin{pmatrix} I_1 & 0 & 0 \\ 0 & I_2 & 0 \\ 0 & 0 & I_3 \end{pmatrix}
$$

Since $\mathbf{I}$ is a real symmetric matrix, the principal axes are always real and orthogonal.

### 8.5 Euler's Equations of Motion

**Theorem 8.2 (Euler's Equations).** For torque-free rotation ($\boldsymbol{\tau} = \mathbf{0}$)
about the centre of mass, the equations of motion in the body frame are:

$$
I_1\dot{\omega}_1 = (I_2 - I_3)\omega_2\omega_3
$$

$$
I_2\dot{\omega}_2 = (I_3 - I_1)\omega_3\omega_1
$$

$$
I_3\dot{\omega}_3 = (I_1 - I_2)\omega_1\omega_2
$$

_Proof._ In the body frame, the angular momentum is $\mathbf{L} = \mathbf{I}\,\boldsymbol{\omega}$.
The equation of motion is:

$$
\left(\frac{d\mathbf{L}}{dt}\right)_{\mathrm{space} = \boldsymbol{\tau}}
$$

Transforming to the body frame using
$\left(\frac{d\mathbf{L}}{dt}\right)_{\mathrm{space} = \left(\frac{d\mathbf{L}}{dt}\right)_{\mathrm{body} + \boldsymbol{\omega} \times \mathbf{L}}}$:

$$
\mathbf{I}\,\dot{\boldsymbol{\omega}} + \boldsymbol{\omega} \times (\mathbf{I}\,\boldsymbol{\omega}) = \boldsymbol{\tau}
$$

In the principal axis frame with $\boldsymbol{\tau} = \mathbf{0}$ This gives Euler's equations
directly. $\blacksquare$

**Ponder (attempt the failure prediction).** A rigid body with principal moments I1 < I2 < I3 spins stably about the first and third principal axes. Attempt the failure prediction for the middle axis: linearise Euler's equations around pure spin about I2 with small wobbles in the other directions, and watch the sign of the growth rate.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Linearising about pure spin, the two wobbles obey growth-rate factors proportional to (I2 - I3)/I1 and (I1 - I2)/I3. With I2 in the middle, the first factor is negative and the second positive: their product is negative, so the wobbles oscillate stably about the long and short axes. About the middle axis the factors flip sign together: the product is positive, the wobbles grow exponentially, and the rotation tumbles. Euler's equations predicted the Dzhanibekov flip a century before a cosmonaut filmed it.

</div>
</details>

### 8.6 Stability of Torque-Free Rotation

**Theorem 8.3.** Torque-free rotation about a principal axis is stable if the axis corresponds to
the largest or smallest principal moment of inertia, and unstable for the intermediate axis.

_Proof._ Consider rotation primarily about the 1-axis:
$\boldsymbol{\omega} = (\omega_1, \epsilon_2, \epsilon_3)$ where $\epsilon_2, \epsilon_3$ are small
perturbations. From Euler's equations:

$$
I_2\dot{\epsilon}_2 = (I_3 - I_1)\omega_1\epsilon_3, \quad I_3\dot{\epsilon}_3 = (I_1 - I_2)\omega_1\epsilon_2
$$

Combining: $\ddot{\epsilon}_2 = \frac{(I_3 - I_1)(I_1 - I_2)}{I_2 I_3}\omega_1^2\,\epsilon_2$.

For stability, the coefficient must be negative. This requires $(I_1 - I_3)(I_1 - I_2) \gt 0$ I.e.,
$I_1$ is either the largest or smallest. If $I_1$ is intermediate, the perturbation grows
exponentially. $\blacksquare$

:::caution
is counterintuitive: a Rigid body spinning about its intermediate axis is unstable. This is not a
violation of angular Momentum conservation --- the angular momentum vector remains fixed in space,
but the body Tumbles relative to it.

### 8.7 Worked Example: The Spinning Top

**Problem.** A symmetric top (moments of inertia $I_1 = I_2 \neq I_3$) of mass $M$ spins about its
symmetry axis with the tip of the axis fixed. The distance from the fixed point to the centre of
mass is $l$. Find the conditions for steady precession.

<details>
<summary>Solution</summary>

Using Euler angles $(\phi, \theta, \psi)$ where $\theta$ is the tilt from vertical, $\phi$ is the
precession angle, and $\psi$ is the spin angle.

The kinetic energy is:

$$
T = \frac{1}{2}I_1(\dot{\theta}^2 + \dot{\phi}^2\sin^2\theta) + \frac{1}{2}I_3(\dot{\psi} + \dot{\phi}\cos\theta)^2
$$

The potential energy is $V = Mgl\cos\theta$.

The Lagrangian is $L = T - V$. Since $\phi$ and $\psi$ are cyclic:

$$
p_\phi = I_1\dot{\phi}\sin^2\theta + I_3(\dot{\psi} + \dot{\phi}\cos\theta)\cos\theta = \mathrm{const}
$$

$$
p_\psi = I_3(\dot{\psi} + \dot{\phi}\cos\theta) = \mathrm{const}
$$

The quantity $p_\psi = I_3\omega_3$ is the angular momentum component along the symmetry axis. The
quantity $p_\phi$ is the angular momentum component along the vertical.

For **steady precession** at constant $\theta$ and $\dot{\phi} = \Omega$:

$$
\dot{\theta} = 0, \quad \dot{\phi} = \Omega = \mathrm{const}, \quad \dot{\psi} = \dot{\psi}_0 = \mathrm{const}
$$

The equation of motion for $\theta$ gives:

$$
I_1\Omega^2\sin\theta\cos\theta - I_3(\dot{\psi}_0 + \Omega\cos\theta)\Omega\sin\theta + Mgl\sin\theta = 0
$$

Dividing by $\sin\theta$ and using $p_\psi = I_3 n$ where $n = \dot{\psi}_0 + \Omega\cos\theta$:

$$
I_1\Omega^2\cos\theta - I_3 n\Omega + Mgl = 0
$$

This is a quadratic in $\Omega$:

$$
\Omega_\pm = \frac{I_3 n \pm \sqrt{(I_3 n)^2 - 4I_1 Mgl\cos\theta}}{2I_1\cos\theta}
$$

Real solutions exist when $(I_3 n)^2 \geq 4I_1 Mgl\cos\theta$. This is the condition for steady
precession. For fast spinning ($n$ large), $\Omega_\approx \approx I_3 n / (I_1\cos\theta)$ (slow
precession) and $\Omega_\approx \approx Mgl / (I_3 n)$ (fast precession). The slow precession is the
one observed.

$\blacksquare$

</details>

### 8.8 Worked Example: Gyroscopic Precession

**Problem.** A bicycle wheel of mass $m$ and radius $R$ is spinning with angular velocity
$\dot{\psi}$ about its axle. One end of the axle is supported. Find the precession rate.

<details>
<summary>Solution</summary>

Model the wheel as a symmetric top with $I_3 \approx mR^2$ (thin ring approximation) and
$I_1 \approx mR^2/2$. The axle has length $l$ from pivot to centre of mass.

For a horizontal axle ($\theta = \pi/2$), the steady precession condition becomes:

$$
I_1\Omega^2 \cdot 0 - I_3 n\Omega + Mgl = 0
$$

$$
\Omega = \frac{Mgl}{I_3 n} = \frac{mgl}{mR^2\dot{\psi}} = \frac{gl}{R^2\dot{\psi}}
$$

This is the **gyroscopic precession rate**. Notice that it is inversely proportional to the spin
rate --- the faster the wheel spins, the slower it precesses.

$\blacksquare$

</details>

## Intuition

Rigid body dynamics is the physics of how objects spin and tumble. The inertia tensor is like a map of how resistant an object is to rotation about different axes. A figure skater pulling in their arms speeds up because the same angular momentum must be conserved with a smaller moment of inertia. The truly counterintuitive result is the tennis racket theorem: a body spinning about its intermediate axis is unstable, while rotation about the largest or smallest axis is stable. Try flipping a phone end-over-end and then side-to-side and you will see this asymmetry. Gyroscopic precession is like a spinning top following the slope of a hill it cannot fall down: gravity tries to tilt the angular momentum vector, but the torque only rotates it around the vertical, creating that characteristic wobble.

### 8.9 Worked Example: Inertia Tensor of a Uniform Rod

**Problem.** Find the inertia tensor of a uniform thin rod of mass $M$ and length $L$ about one end.

<details>
<summary>Solution</summary>

Place the rod along the $x$-axis from $x = 0$ to $x = L$. The linear mass density is
$\lambda = M/L$.

$$
I_{xx} = \int_0^L \lambda(y^2 + z^2)\, dx = 0
$$

(since $y = z = 0$ for a thin rod on the $x$-axis).

$$
I_{yy} = \int_0^L \lambda(x^2 + z^2)\, dx = \lambda \int_0^L x^2\, dx = \frac{M}{L} \cdot \frac{L^3}{3} = \frac{ML^2}{3}
$$

$$
I_{zz} = \int_0^L \lambda(x^2 + y^2)\, dx = \frac{ML^2}{3}
$$

The products of inertia all vanish by symmetry:

$$
I_{xy} = I_{xz} = I_{yz} = 0
$$

The inertia tensor is:

$$
\mathbf{I} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & ML^2/3 & 0 \\ 0 & 0 & ML^2/3 \end{pmatrix}
$$

The principal moments about one end are $0$, $ML^2/3$, $ML^2/3$. By the parallel axis theorem, about
the centre of mass they would be $0$, $ML^2/12$, $ML^2/12$.

$\blacksquare$

</details>
:::

## Common Mistakes

**Mistake 1: Treating the moment of inertia as a scalar instead of a tensor**
The moment of inertia is a rank-2 tensor $\mathbf{I}$, not a single number, for general three-dimensional rotation. Using a scalar $I$ only works for rotation about a fixed principal axis. For precession, nutation, or rotation about a non-principal axis, the full tensor $\mathbf{I}\boldsymbol{\omega}$ must be used to correctly compute the angular momentum $\mathbf{L} = \mathbf{I}\boldsymbol{\omega}$.

**Mistake 2: Assuming all axes are stable for torque-free rotation**
Torque-free rotation about a principal axis is stable only if the axis corresponds to the largest or smallest principal moment of inertia. Rotation about the intermediate axis is unstable: small perturbations grow exponentially. This is the tennis racket theorem, and it explains why a spinning phone tumbles when flipped about its intermediate axis.

**Mistake 3: Confusing the parallel axis theorem for tensors with the scalar version**
The parallel axis theorem for the inertia tensor is $I_{jk}' = I_{jk}^{(\mathrm{CM})} + M(a^2\delta_{jk} - a_j a_k)$, which involves the full tensor structure. The scalar version $I = I_{\mathrm{CM}} + Ma^2$ only applies to the moment about a single axis parallel to the displacement. Using the scalar version for off-diagonal components gives incorrect results.

:::note[Quick check]

1. Define the inertia tensor and the role of its eigenvectors.
2. State Euler's equations of motion for torque-free rotation.
3. What are the principal axes, and why are they useful?
4. State the intermediate-axis theorem, and give its modern
   demonstration.
5. Describe the spinning top's precession and what drives it.
6. Why is the middle-axis rotation unstable, in one sentence?
7. What role do Euler angles play in rigid body kinematics?
8. State the gyroscopic precession rate for a spinning top, and
   name the mass, length, and spin quantities it is built from.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The tensor mapping angular velocity to angular momentum,
L = I omega; its eigenvectors are the principal axes, where torque
and rotation align. **2.** I1 w1-dot = (I2 - I3) w2 w3 and its
cyclic permutations: the torque-free Euler equations. **3.** The
mutually perpendicular axes in which the inertia tensor is
diagonal; motion about them decouples. **4.** Rotation about the
intermediate principal axis is unstable (small wobbles grow
exponentially); Dzhanibekov's 1985 wing-nut flips aboard Salyut 7.
**5.** The top's axis sweeps a cone under gravity's torque, at the
precession rate Omega = m g l / (I3 omega3). **6.** The
linearised wobble growth rates have the same sign about the middle
axis, so perturbations grow instead of oscillating. **7.** Three
angles parameterising orientation: they locate the body frame
relative to the lab frame. **8.** Omega = m g l / (I3 omega3):
proportional to the weight times the lever arm, inversely to the
spin angular momentum.

</div>
</details>

:::

## Cross-References

- **[Hamiltonian Mechanics](/1-classical-mechanics/4_hamiltonian-mechanics/)**: The Hamiltonian formalism gives the total energy and phase space representation of rigid body dynamics.
- **[Noether's Theorem](/1-classical-mechanics/5_noether-s-theorem-and-conservation-laws/)**: Rotational symmetry leads to angular momentum conservation, which is fundamental to rigid body motion.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)

## Related in this track

- [Classical Field Theory](/1-classical-mechanics/13_classical-field-theory/)
- [Generalised Coordinates and Constraints](/1-classical-mechanics/2_generalised-coordinates-and-constraints/)
- [Hamiltonian Mechanics](/1-classical-mechanics/4_hamiltonian-mechanics/)
- [Hamiltonian Mechanics: Advanced Topics](/1-classical-mechanics/11_hamiltonian-mechanics-advanced-topics/)
