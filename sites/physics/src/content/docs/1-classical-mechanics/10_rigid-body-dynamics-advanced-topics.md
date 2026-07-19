---
title: "Rigid Body Dynamics: Advanced Topics"
tags:
  - Physics
  - University
description: "For a rigid body rotating freely (no external torques), the angular momentum in  Comprehensive educational content coverage with definitions and practice proble"
---

### 9.1 Euler"s Equations in the Body Frame

For a rigid body rotating freely (no external torques), the angular momentum in the body frame
satisfies:

$$I_1\dot{\omega}_1 - (I_2 - I_3)\omega_2\omega_3 = 0$$

$$I_2\dot{\omega}_2 - (I_3 - I_1)\omega_3\omega_1 = 0$$

$$I_3\dot{\omega}_3 - (I_1 - I_2)\omega_1\omega_2 = 0$$

Where $I_1, I_2, I_3$ are the principal moments of inertia and $\omega_1, \omega_2, \omega_3$ are
the angular velocity components in the body frame.

**First integral:** The kinetic energy
$T = \frac{1}{2}(I_1\omega_1^2 + I_2\omega_2^2 + I_3\omega_3^2)$ and the angular momentum magnitude
$L^2 = I_1^2\omega_1^2 + I_2^2\omega_2^2 + I_3^2\omega_3^2$ are both conserved.

**Geometric interpretation.** The trajectory on the angular velocity ellipsoid
$I_1\omega_1^2 + I_2\omega_2^2 + I_3\omega_3^2 = 2T$ intersects the angular momentum sphere
$I_1^2\omega_1^2 + I_2^2\omega_2^2 + I_3^2\omega_3^2 = L^2$ to give the polhode curve.

### 9.2 Stability of Free Rotation

For an axisymmetric body ($I_1 = I_2 \neq I_3$):

- **Rotation about the symmetry axis** ($\omega_3$): The body is stable if $I_3$ is either the
  largest or smallest moment. This explains why a spinning top is stable but rotation about the
  intermediate axis is not.

- **Tennis racket theorem (Dzhanibekov effect):** Rotation about the intermediate axis
  ($I_1 < I_2 < I_3$, spinning about the $I_2$ axis) is unstable. Small perturbations cause the body
  to flip periodically.

**Proof of instability for intermediate axis.** Linearise Euler's equations about
$\boldsymbol{\omega} = (0, \Omega, 0)$:

$$I_1\dot{\omega}_1 = (I_2 - I_3)\Omega\,\omega_3$$

$$I_3\dot{\omega}_3 = (I_1 - I_2)\Omega\,\omega_1$$

Combining: $\ddot{\omega}_1 = \frac{(I_2 - I_3)(I_1 - I_2)}{I_1 I_3}\Omega^2\,\omega_1$. Since
$I_1 < I_2 < I_3$, both factors in the numerator are negative, giving a positive coefficient:
$\omega_1$ grows exponentially. The motion is unstable. $\blacksquare$

**Physical examples:**

1. **Book toss:** Throw a book spinning about each of its three axes. Rotation about the
   shortest and longest axes is stable; rotation about the intermediate axis causes flipping.
2. **Satellite attitude:** Gravity-gradient stabilisation exploits the fact that rotation about
   the axis of minimum moment of inertia is stable in a gravitational field.

### 9.3 The Symmetric Top with One Point Fixed

A symmetric top ($I_1 = I_2$) with one point fixed, under gravity, is described by three Euler
angles $(\phi, \theta, \psi)$.

The Lagrangian:

$$L = \frac{1}{2}I_1(\dot{\theta}^2 + \dot{\phi}^2\sin^2\theta) + \frac{1}{2}I_3(\dot{\psi} + \dot{\phi}\cos\theta)^2 - Mgd\cos\theta$$

**Conserved quantities:** $p_\phi$ (angular momentum about the vertical) and $p_\psi$ (angular
momentum about the symmetry axis) are cyclic:

$$p_\phi = I_1\dot{\phi}\sin^2\theta + I_3(\dot{\psi} + \dot{\phi}\cos\theta)\cos\theta = \text{const}$$

$$p_\psi = I_3(\dot{\psi} + \dot{\phi}\cos\theta) = \text{const}$$

**Steady precession.** For $\dot{\theta} = 0$ (constant inclination $\theta_0$):

$$\dot{\phi} = \frac{Mgd}{I_3\omega_3} \quad \text{(regular precession)}$$

**Nutation.** When $\theta$ varies, the tip of the symmetry axis traces a nutation path. The
effective potential:

$$V_{\text{eff}}(\theta) = \frac{(p_\phi - p_\psi\cos\theta)^2}{2I_1\sin^2\theta} + Mgd\cos\theta$$

has a minimum at $\theta_0$ for stable regular precession. Oscillation about $\theta_0$ gives
nutation with frequency:

$$\omega_{\text{nut}} = \frac{I_3\omega_3}{I_1} \quad \text{(for rapid spin)}$$

### 9.4 Gyroscopic Precession

A spinning wheel with angular momentum $\mathbf{L}$ subject to a torque $\boldsymbol{\tau}$ precesses:

$$\boldsymbol{\Omega}_{\text{prec}} = \frac{\boldsymbol{\tau} \times \mathbf{L}}{L^2}$$

**Why the wheel doesn't fall.** Gravity produces a torque perpendicular to $\mathbf{L}$, causing
$\mathbf{L}$ to rotate horizontally rather than the wheel falling. The precession rate is:

$$\Omega_{\text{prec}} = \frac{Mgd}{I_3\omega_3}$$

**Gyroscopic inertia.** A rapidly spinning top resists tilting because changing the direction of
$\mathbf{L}$ requires a torque proportional to $\omega_3$.

### 9.5 Coupled Rigid Bodies

When two rigid bodies are connected (e.g., a gyroscope on a gimbal), the system has additional
degrees of freedom. The equations of motion couple through constraint forces at the joint.

**Gimbal lock.** In a three-gimbal system, when two gimbal axes align, one degree of freedom is
lost. This is a kinematic singularity, not a dynamic one. Quaternion-based representations
avoid gimbal lock entirely.

### Common Pitfalls

1. **Using lab-frame equations in the body frame.** Euler's equations apply in the body frame where
   the inertia tensor is diagonal. In the lab frame, the inertia tensor is time-dependent.

2. **Confusing $\omega_3$ (body frame) with $\dot{\phi}$ (lab frame).** The angular velocity about the
   symmetry axis in the body frame includes contributions from both $\dot{\psi}$ and $\dot{\phi}$.

3. **Ignoring the stability criterion.** Free rotation about the intermediate axis is always
   unstable. Assuming stability without checking the moment ordering leads to incorrect predictions.

4. **Neglecting nutation in fast-spinning tops.** For $\omega_3 \gg \Omega_{\text{prec}}$, nutation
   is rapid and small-amplitude, but it is always present unless the initial conditions are
   precisely tuned to regular precession.

5. **Assuming $I_1 = I_2$ (symmetric top) applies generally.** The symmetric-top simplification
   $\dot{\phi} = I_3\omega_3/(I_1\omega_1)$ only holds when the two transverse moments of inertia
   are equal. For an asymmetric top ($I_1 \neq I_2$), the motion is far more complex and may
   exhibit chaotic tumbling.

6. **Confusing precession with rotation.** Precession is the slow rotation of the angular momentum
   vector $\mathbf{L}$ about the vertical; the top itself spins rapidly about its symmetry axis.
   These are distinct motions with very different timescales.

The effective potential for the $\theta$ motion:

$$V_{\text{eff}(\theta) = \frac{(p_\phi - p_\psi\cos\theta)^2}{2I_1\sin^2\theta} + \frac{p_\psi^2}{2I_3} + Mgd\cos\theta}$$

**Nutation:** The top nutates (oscillates in $\theta$) while precessing in $\phi$ and spinning in
$\psi$. The type of nutation (looping, cusped, or smooth) depends on the initial conditions.

**Fast top** ($p_\psi \gg Mgd$): The precession rate is:

$$\dot{\phi} \approx \frac{Mgd}{p_\psi} = \frac{Mgd}{I_3\omega_3}$$

This is independent of $\theta$ to leading order (steady precession).

<details>
<summary>Worked Example 9.1: Precession of a Gyroscope</summary>

A gyroscope has $I_3 = 5 \times 10^{-4}$ kg$\cdot$M$^2$Mass $M = 0.5$ kg, distance from pivot to
centre of mass $d = 0.05$ m, and spins at $\omega_3 = 300$ rad/s.

The precession rate:

$$\dot{\phi} = \frac{Mgd}{I_3\omega_3} = \frac{0.5 \times 9.81 \times 0.05}{5 \times 10^{-4} \times 300} = \frac{0.245}{0.15} = 1.63\ \text{rad}/s \approx 15.6\ \text{rpm}$$

The precession period: $T = 2\pi/\dot{\phi} = 3.85$ s.

If the spin is reduced to $\omega_3 = 30$ rad/s (10 times slower), the precession rate increases by
a factor of 10 to 16.3 rad/s. At some critical spin rate, the gyroscope can no longer maintain
steady precession and topples.

</details>

### Applications

- **Inertial navigation.** Gyroscopes maintain a fixed orientation in space, providing angular rate
  measurements for aircraft and spacecraft. Ring laser gyroscopes measure rotation via the Sagnac
  effect with accuracy $\sim 0.001°$/hr.
- **Satellite attitude control.** Reaction wheels (spinning flywheels) exchange angular momentum
  with the spacecraft body to reorient without thrusters.
- **Balance in animals.** The inner ear contains fluid-filled semicircular canals that act as
  biological gyroscopes, detecting head rotation for balance. Damage to these canals causes
  vertigo and loss of spatial orientation.
- **Tennis racket theorem (Dzhanibekov effect).** A rigid body rotating about its intermediate
  axis spontaneously flips 180° periodically, visible in microgravity. This confirms the
  instability of intermediate-axis rotation predicted by Euler's equations.

## Intuition

Rigid body dynamics describes how extended objects rotate, where the distribution of mass matters as much as the total mass. The moment of inertia generalizes mass to rotation, depending on how far the mass is distributed from the axis. Euler's equations govern free rotation: a body spinning about its fastest or slowest axis is stable, but rotation about the intermediate axis is unstable, causing the Dzhanibekov flipping effect. A spinning top precesses because gravity exerts a torque that changes the angular momentum direction without changing its magnitude. Nutation adds a wobble on top of precession, arising from the competition between gravitational torque and gyroscopic stiffness.

### Key Relationships Summary

| Quantity | Expression | Notes |
|---|---|---|
| Euler's equations | $I_1\dot{\omega}_1 = (I_2 - I_3)\omega_2\omega_3$ | Body frame, no external torque |
| Tilted top precession | $\dot{\phi} = I_3\omega_3/(I_1\omega_1)$ | Angle between $\mathbf{L}$ and symmetry axis |
| Fast-top precession | $\dot{\phi} \approx Mgd/(I_3\omega_3)$ | Independent of $\theta$ to leading order |
| Nutation frequency | $\dot{\theta}$ oscillates in $V_{\text{eff}}$ | Looping/cusped/smooth types |

These relationships apply to free rigid bodies (no external torque) and tops (constant gravity). For
coupled or driven systems, numerical integration of the full Euler equations is required.



## Cross-References

- **[Rigid Body Dynamics](8_rigid-body-dynamics.md)**: Basic rigid body dynamics provides the foundation for understanding advanced topics like gyroscopic precession.
- **[Lagrangian Mechanics](3_lagrangian-mechanics.md)**: The Lagrangian formulation gives the effective potential for analyzing tops and gyroscopes.
- **[Hamiltonian Mechanics](4_hamiltonian-mechanics.md)**: The Hamiltonian formalism provides phase space representation of rigid body motion.
