---
title: Nonlinear Dynamics and Chaos
tags:
  - Physics
  - University
description: ""s equations. Not every
   coordinate transformation $(q, p) \to (Q, P)$ is canonical. The test is whether the Poisson
   brackets $\{Q_i, Q_j\} = \{P_i, P_j\} = 0$ and $\{Q_i, P_j\} = \delta_{ij}$ are preserved.

3. **The adiabatic theorem requires slowness:** The adiabatic invariant $E/\omega$ is conserved only
   when $\dot{\omega}/\omega^2 \ll 1$ (the parameter changes slowly compared to the period). For
   sudden changes, the adiabatic theorem does not apply, and the energy change must be computed from
   the explicit time-dependent Hamiltonian.

4. **Chaos requires nonlinearity but not complexity:** The driven damped pendulum and the logistic
   map are among the simplest dynamical systems, yet they exhibit chaos. Chaos is a property of the
   dynamics, not the complexity of the equations. A three-dimensional autonomous system (or
   two-dimensional non-autonomous system) is the minimum for chaos.

5. **Liouville's theorem constrains but does not determine dynamics:** Liouville’s theorem says
   phase space volume is conserved, but it does not prevent phase space density from becoming
   filamented (stretched and folded). In fact, this filamentation is the mechanism behind mixing and
   ergodicity in Hamiltonian systems.

## Problems (Additional)

<details>
<summary>Problem 19: Euler's Equations for an Asymmetric Body</summary>

A rigid body with principal moments $I_1 = 1$, $I_2 = 2$, $I_3 = 3$ (in kg$\cdot$M$^2$) rotates
freely with initial angular velocity $\boldsymbol{\omega}(0) = (0.1, 0.5, 1.0)$ rad/s.

(a) Verify that $T$ and $L^2$ are conserved by computing them at $t = 0$.

(b) Use Euler's equations to find $\dot{\omega}_1, \dot{\omega}_2, \dot{\omega}_3$ at $t = 0$.

(c) Is the motion about the intermediate axis ($I_2$) stable? Predict the qualitative behaviour.

**Solution:**

(a)
$T = \frac{1}{2}(1 \times 0.01 + 2 \times 0.25 + 3 \times 1.00) = \frac{1}{2}(0.01 + 0.50 + 3.00) = 1.755$
J.

$L^2 = 1 \times 0.01 + 4 \times 0.25 + 9 \times 1.00 = 0.01 + 1.00 + 9.00 = 10.01$
(kg$\cdot$M$^2$/s$)^2$.

(b) $\dot{\omega}_1 = \frac{(I_2 - I_3)}{I_1}\omega_2\omega_3 = \frac{(2-3)}{1}(0.5)(1.0) = -0.5$
rad/s$^2$.

$\dot{\omega}_2 = \frac{(I_3 - I_1)}{I_2}\omega_3\omega_1 = \frac{(3-1)}{2}(1.0)(0.1) = 0.1$
rad/s$^2$.

$\dot{\omega}_3 = \frac{(I_1 - I_2)}{I_3}\omega_1\omega_2 = \frac{(1-2)}{3}(0.1)(0.5) = -0.0167$
rad/s$^2$.

(c) The initial $\omega_2 = 0.5$ is the largest component, so the rotation is predominantly about
the intermediate axis. Since $I_1 < I_2 < I_3$Rotation about the intermediate axis is **unstable**
(tennis racket theorem). The body will exhibit periodic flipping, with $\omega_1$ and $\omega_3$
growing at the expense of $\omega_2$Then reversing. This is the Dzhanibekov effect.

</details>

<details>
<summary>Problem 20: Hamilton--Jacobi for the Free Particle</summary>

(a) Solve the Hamilton--Jacobi equation for a free particle in one dimension: $H = p^2/(2m)$.

(b) Find the generating function $S(x, P, t)$ that transforms to constant momentum $P$.

(c) Show that the new coordinate $X = \partial S/\partial P = x - Pt/m$ (a freely moving
coordinate).

**Solution:**

(a) The Hamilton--Jacobi equation:

$$\frac{1}{2m}\left(\frac{\partial S}{\partial x}\right)^2 + \frac{\partial S}{\partial t} = 0$$

Separate variables: $S(x, t) = W(x) - Et$ where $E$ is the separation constant (energy).

$$\frac{1}{2m}\left(\frac{dW}{dx}\right)^2 = E \implies W(x) = \pm\sqrt{2mE}\,x$$

$$S(x, E, t) = \pm\sqrt{2mE}\,x - Et$$

(b) With $P = \sqrt{2mE}$ (identifying the new momentum with $\sqrt{2mE}$):

$$E = P^2/(2m), \quad S(x, P, t) = Px - \frac{P^2}{2m}t$$

(c) The new coordinate:

$$X = \frac{\partial S}{\partial P} = x - \frac{P}{m}t$$

The new Hamiltonian $K = H + \partial S/\partial t = P^2/(2m) - P^2/(2m) = 0$. All momenta and
energies are constant. The new coordinate evolves as $X = x_0 = \text{const}$ (the initial
position).

The original coordinate: $x = X + Pt/m = x_0 + v_0 t$ (uniform motion). $\checkmark$

</details>

