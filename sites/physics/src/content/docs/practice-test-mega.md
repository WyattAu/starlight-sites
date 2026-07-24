---
title: "University Physics Practice Test — 30 Challenging Problems"
description: "30 university-level physics problems covering Classical Mechanics, Thermodynamics, Electromagnetism, and Quantum Mechanics. Problem-solving with detailed solutions."
date: 2026-07-24
tags:
  - physics
  - practice-test
  - university
  - undergraduate
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://physics.wyattau.com"},
    {"name": "Practice Test", "url": "https://physics.wyattau.com/practice-test-mega"}
  ]
}
</script>

## University Physics Practice Test — 30 Challenging Problems

This practice test covers 30 problems across four major domains of university physics: Classical Mechanics, Thermodynamics, Electromagnetism, and Quantum Mechanics. Each problem requires multi-step reasoning and the application of fundamental principles. Work through the problems with pen and paper before checking the solutions.

## Instructions

- **Time limit:** 90 minutes (3 minutes per problem)
- **Format:** Problem-solving — show all working
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes. Show all steps in your solutions.
- **After the test:** Check the solutions at the bottom. Study the derivations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Classical Mechanics | P1–P8 | 8 |
| Thermodynamics | P9–P15 | 7 |
| Electromagnetism | P16–P22 | 7 |
| Quantum Mechanics | P23–P30 | 8 |
| **Total** | **30** | **30** |

---

## Classical Mechanics (P1–P8)

### P1 — Lagrangian Mechanics

A particle of mass m slides without friction on the inside surface of a sphere of radius R. Using the angle theta from the vertical as the generalised coordinate, derive the equation of motion and find the condition for the particle to leave the surface.

**Solution:**

The kinetic energy is $T = \frac{1}{2}m(R\dot{\theta})^2$ and the potential energy (taking the bottom of the sphere as reference) is $U = mgR(1 - \cos\theta)$. The Lagrangian is:

$$L = T - U = \frac{1}{2}mR^2\dot{\theta}^2 - mgR(1 - \cos\theta)$$

The Euler-Lagrange equation gives:

$$mR^2\ddot{\theta} = -mgR\sin\theta$$

$$\ddot{\theta} = -\frac{g}{R}\sin\theta$$

The particle leaves the surface when the normal force becomes zero. From the radial force equation: $mg\cos\theta - N = mR\dot{\theta}^2$. Setting $N = 0$ and using energy conservation: $v^2 = 2gR(\cos\theta_c - \cos\theta)$, the critical angle is $\cos\theta_c = 2/3$, or $\theta_c \approx 48.2°$.

`hard` — 1 mark

---

### P2 — Hamiltonian Mechanics

For a one-dimensional harmonic oscillator with mass m and spring constant k, write the Hamiltonian and derive Hamilton's equations of motion.

**Solution:**

The Lagrangian is $L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}kx^2$.

The generalised momentum is $p = \frac{\partial L}{\partial \dot{x}} = m\dot{x}$, so $\dot{x} = p/m$.

The Hamiltonian is:

$$H = p\dot{x} - L = \frac{p^2}{2m} + \frac{1}{2}kx^2$$

Hamilton's equations:

$$\dot{x} = \frac{\partial H}{\partial p} = \frac{p}{m}$$

$$\dot{p} = -\frac{\partial H}{\partial x} = -kx$$

Differentiating the first: $\ddot{x} = \dot{p}/m = -kx/m$, giving $\ddot{x} + \omega^2 x = 0$ where $\omega = \sqrt{k/m}$.

`hard` — 1 mark

---

### P3 — Central Forces

A particle moves in a central force field $F(r) = -kr^{-3}$ (attractive). Determine whether closed orbits are possible using the effective potential.

**Solution:**

The effective potential is:

$$V_{eff}(r) = \frac{l^2}{2mr^2} + \frac{k}{2r^2} = \frac{1}{2r^2}\left(\frac{l^2}{m} + k\right)$$

where $l$ is the angular momentum. Since $V_{eff} \propto 1/r^2$, the effective potential is purely repulsive (for $k > 0$) or purely attractive (for $k < 0$). There is no potential well, so no stable circular orbits exist. The particle either spirals inward or escapes to infinity — closed orbits are not possible.

`hard` — 1 mark

---

### P4 — Rigid Body Dynamics

A uniform solid cylinder of mass M and radius R rolls without slipping down an inclined plane of angle alpha. Find the acceleration of the centre of mass.

**Solution:**

Forces along the incline: $Mg\sin\alpha - f = Ma$, where $f$ is the static friction force.

Torque about the centre: $fR = I\alpha_{rot} = \frac{1}{2}MR^2 \cdot \frac{a}{R}$, so $f = \frac{1}{2}Ma$.

Substituting: $Mg\sin\alpha - \frac{1}{2}Ma = Ma$, giving:

$$a = \frac{2}{3}g\sin\alpha$$

The cylinder accelerates at two-thirds the value for a frictionless slide, because some gravitational potential energy is converted to rotational kinetic energy.

`medium` — 1 mark

---

### P5 — Small Oscillations

Two identical pendulums of mass m and length l are coupled by a spring of constant k attached at a distance h from the pivot. Find the normal mode frequencies.

**Solution:**

For small oscillations, the equations of motion are:

$$ml^2\ddot{\theta}_1 = -mgl\theta_1 - kh^2(\theta_1 - \theta_2)$$

$$ml^2\ddot{\theta}_2 = -mgl\theta_2 + kh^2(\theta_1 - \theta_2)$$

Normal modes: symmetric ($\theta_1 = \theta_2$) and antisymmetric ($\theta_1 = -\theta_2$).

For the symmetric mode: $\omega_1 = \sqrt{g/l}$ (spring not stretched).

For the antisymmetric mode: $\omega_2 = \sqrt{g/l + 2kh^2/(ml^2)}$.

`hard` — 1 mark

---

### P6 — Conservation Laws

A particle of mass $m_1$ moving with velocity $v_0$ collides elastically with a stationary particle of mass $m_2$. Derive the final velocity of $m_2$.

**Solution:**

Conservation of momentum: $m_1 v_0 = m_1 v_1 + m_2 v_2$.

Conservation of kinetic energy: $\frac{1}{2}m_1 v_0^2 = \frac{1}{2}m_1 v_1^2 + \frac{1}{2}m_2 v_2^2$.

From these two equations (or using the coefficient of restitution $e = 1$):

$$v_2 = \frac{2m_1}{m_1 + m_2}v_0$$

Special cases: if $m_1 = m_2$, $v_2 = v_0$ (complete transfer). If $m_1 \ll m_2$, $v_2 \approx 0$ (light particle bounces back).

`medium` — 1 mark

---

### P7 — Noether's Theorem

A free particle of mass m moves in three dimensions with Lagrangian $L = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2 + \dot{z}^2)$. Identify the conserved quantities and explain their physical significance.

**Solution:**

$L$ does not depend explicitly on $x$, $y$, or $z$, so the conjugate momenta are conserved:

$$p_x = \frac{\partial L}{\partial \dot{x}} = m\dot{x} = \text{const}$$

$$p_y = m\dot{y} = \text{const}$$

$$p_z = m\dot{z} = \text{const}$$

These are the components of linear momentum — translational invariance implies conservation of momentum (Noether's theorem).

$L$ also does not depend on time explicitly, so the Hamiltonian (total energy) $H = \frac{1}{2}m(\dot{x}^2 + \dot{y}^2 + \dot{z}^2) = T$ is conserved.

`medium` — 1 mark

---

### P8 — Nonlinear Dynamics

The Lorenz equations are $\dot{x} = \sigma(y - x)$, $\dot{y} = rx - y - xz$, $\dot{z} = xy - bz$. For what parameter regime do chaotic solutions appear?

**Solution:**

The Lorenz system exhibits chaos for the classical parameter values $\sigma = 10$, $b = 8/3$, and $r > 24.74$. The onset of chaos occurs at the homoclinic bifurcation.

For $r < 1$: the origin is the only fixed point (globally stable).

For $1 < r < 24.74$: two additional stable fixed points appear (pitchfork bifurcation). Trajectories converge to one of these.

For $r > 24.74$: the fixed points become unstable, and trajectories exhibit sensitive dependence on initial conditions — the hallmark of chaos. The Lorenz attractor is a strange attractor with fractal dimension approximately 2.06.

`hard` — 1 mark

---

## Thermodynamics (P9–P15)

### P9 — Laws of Thermodynamics

An ideal gas undergoes a cyclic process consisting of two isothermal and two adiabatic steps (Carnot cycle). Show that the efficiency depends only on the temperatures of the hot and cold reservoirs.

**Solution:**

In a Carnot cycle:

- Isothermal expansion at $T_H$: absorbs $Q_H$ from the hot reservoir.
- Adiabatic expansion: temperature drops from $T_H$ to $T_C$.
- Isothermal compression at $T_C$: releases $Q_C$ to the cold reservoir.
- Adiabatic compression: temperature rises from $T_C$ to $T_H$.

For an ideal gas, isothermal processes give $Q = nRT\ln(V_f/V_i)$. The adiabatic steps satisfy $TV^{\gamma-1} = \text{const}$.

From the adiabatic conditions: $\frac{V_2}{V_1} = \frac{V_3}{V_4}$, so:

$$\frac{Q_C}{Q_H} = \frac{T_C}{T_H}$$

The efficiency is:

$$\eta = 1 - \frac{Q_C}{Q_H} = 1 - \frac{T_C}{T_H}$$

This depends only on the reservoir temperatures, not on the working substance.

`hard` — 1 mark

---

### P10 — Statistical Mechanics

A system of N independent harmonic oscillators has energy levels $E_n = (n + 1/2)\hbar\omega$. Derive the partition function and the mean energy at temperature T.

**Solution:**

The single-particle partition function is:

$$Z_1 = \sum_{n=0}^{\infty} e^{-\beta(n+1/2)\hbar\omega} = e^{-\beta\hbar\omega/2} \sum_{n=0}^{\infty} e^{-n\beta\hbar\omega}$$

$$Z_1 = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}} = \frac{1}{2\sinh(\beta\hbar\omega/2)}$$

For N distinguishable oscillators: $Z = Z_1^N$.

The mean energy:

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = N\hbar\omega\left(\frac{1}{2} + \frac{1}{e^{\beta\hbar\omega} - 1}\right)$$

The first term is the zero-point energy; the second is the thermal excitation.

`hard` — 1 mark

---

### P11 — Entropy

A mole of an ideal monatomic gas at 300 K and 1 atm is expanded isothermally to twice its volume. Calculate the change in entropy.

**Solution:**

For an isothermal process, the change in internal energy is zero (ideal gas), so:

$$\Delta S = \frac{Q_{rev}}{T} = \frac{W_{rev}}{T} = \frac{nRT\ln(V_2/V_1)}{T} = nR\ln(V_2/V_1)$$

$$\Delta S = (1)(8.314)\ln(2) = 8.314 \times 0.693 = 5.76 \text{ J K}^{-1}$$

The entropy increases because the gas occupies a larger volume, increasing the number of accessible microstates.

`easy` — 1 mark

---

### P12 — Kinetic Theory

Derive the ideal gas law from the kinetic theory of gases, starting from the momentum transfer of molecules colliding with a wall.

**Solution:**

Consider N molecules of mass m in a container of volume V. A molecule moving with velocity $v_x$ in the x-direction collides elastically with a wall perpendicular to x. The momentum transfer per collision is $2mv_x$.

The number of collisions per unit time with a wall of area A is $\frac{1}{2}nAv_x$ (where n is the number density).

The force on the wall:

$$F = 2mv_x \times \frac{1}{2}nAv_x = nmAv_x^2$$

Averaging over all molecules: $F = nmA\langle v_x^2 \rangle$. Since $\langle v_x^2 \rangle = \frac{1}{3}\langle v^2 \rangle$:

$$P = \frac{F}{A} = \frac{1}{3}nm\langle v^2 \rangle = \frac{2}{3}\frac{N}{V}\langle KE \rangle$$

Since $\langle KE \rangle = \frac{3}{2}k_BT$:

$$PV = Nk_BT = nRT$$

`hard` — 1 mark

---

### P13 — Phase Transitions

Describe the differences between first-order and second-order phase transitions, giving an example of each.

**Solution:**

**First-order phase transitions** involve a discontinuity in the first derivative of the free energy (Gibbs free energy G). There is a latent heat, and the two phases coexist at the transition temperature. Examples: boiling of water (liquid to gas), melting of ice (solid to liquid), and the normal-superconducting transition.

At a first-order transition: $\Delta S \neq 0$ (latent heat $L = T\Delta S$), $\Delta V \neq 0$ (volume change), and there is hysteresis and metastability (superheating, supercooling).

**Second-order phase transitions** (continuous transitions) have no latent heat and no discontinuity in the first derivatives of G. The second derivatives (heat capacity, compressibility, susceptibility) diverge or have discontinuities. Examples: ferromagnetic transition at the Curie point, superfluid transition in liquid helium, and the lambda transition.

At a second-order transition: $\Delta S = 0$, $\Delta V = 0$, but $C_p$, $\kappa$, and $\chi$ may diverge. The transition is characterised by critical exponents and universality.

`medium` — 1 mark

---

### P14 — Fermi Gas

For a free electron gas at T = 0, derive the Fermi energy in terms of the electron density n.

**Solution:**

At T = 0, all states up to the Fermi energy $E_F$ are filled, and all states above are empty.

The number of states with energy less than E:

$$N = \frac{V}{3\pi^2}\left(\frac{2mE}{\hbar^2}\right)^{3/2}$$

This comes from counting states in k-space: $N = \frac{2V}{(2\pi)^3} \times \frac{4}{3}\pi k_F^3$ (factor of 2 for spin), with $E_F = \frac{\hbar^2 k_F^2}{2m}$.

Solving for $E_F$:

$$E_F = \frac{\hbar^2}{2m}\left(3\pi^2 n\right)^{2/3}$$

where $n = N/V$ is the electron density. For copper ($n \approx 8.5 \times 10^{28}$ m$^{-3}$), $E_F \approx 7$ eV.

`hard` — 1 mark

---

### P15 — Blackbody Radiation

Using Planck's radiation law, derive the Wien displacement law that relates the peak wavelength of blackbody radiation to temperature.

**Solution:**

Planck's law gives the spectral radiance:

$$B(\lambda, T) = \frac{2hc^2}{\lambda^5} \frac{1}{e^{hc/(\lambda k_BT)} - 1}$$

To find the peak, set $dB/d\lambda = 0$. Let $x = hc/(\lambda k_BT)$. Then:

$$\frac{dB}{d\lambda} = 0 \implies 5(e^x - 1) = xe^x$$

Solving numerically: $x \approx 4.965$.

Therefore: $\frac{hc}{\lambda_{max} k_BT} = 4.965$, giving:

$$\lambda_{max} T = \frac{hc}{4.965 k_B} \approx 2.898 \times 10^{-3} \text{ m K}$$

This is Wien's displacement law: $\lambda_{max} T = b$ where $b \approx 2.9 \times 10^{-3}$ m K.

`hard` — 1 mark

---

## Electromagnetism (P16–P22)

### P16 — Maxwell's Equations

State Maxwell's equations in differential form and explain the physical significance of each.

**Solution:**

1. **Gauss's law for electricity:** $\nabla \cdot \mathbf{E} = \rho/\epsilon_0$

   Electric charges are sources and sinks of electric field lines. The divergence of E at any point is proportional to the charge density.

2. **Gauss's law for magnetism:** $\nabla \cdot \mathbf{B} = 0$

   There are no magnetic monopoles. Magnetic field lines always form closed loops.

3. **Faraday's law:** $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$

   A time-varying magnetic field induces an electric field (and hence an EMF). This is the principle behind electromagnetic induction.

4. **Ampere-Maxwell law:** $\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$

   Magnetic fields are generated by currents and by time-varying electric fields (displacement current). The displacement current term was Maxwell's key insight.

`medium` — 1 mark

---

### P17 — Electrostatics

A point charge q is placed at a distance d from the centre of a grounded conducting sphere of radius R. Find the charge distribution on the sphere using the method of images.

**Solution:**

The image charge method replaces the conducting sphere with an image charge $q'$ at a distance $b$ from the centre. For a grounded sphere:

$$q' = -\frac{R}{d}q, \quad b = \frac{R^2}{d}$$

The potential outside the sphere is:

$$\Phi(\mathbf{r}) = \frac{1}{4\pi\epsilon_0}\left(\frac{q}{|\mathbf{r} - d\hat{z}|} + \frac{q'}{|\mathbf{r} - b\hat{z}|}\right)$$

The surface charge density on the sphere is:

$$\sigma(\theta) = -\epsilon_0 \frac{\partial \Phi}{\partial r}\bigg|_{r=R} = \frac{q(d^2 - R^2)}{4\pi R(d^2 + R^2 - 2dR\cos\theta)^{3/2}}$$

`hard` — 1 mark

---

### P18 — Magnetostatics

Derive the magnetic field inside a long solenoid of n turns per unit length carrying current I.

**Solution:**

By symmetry, the field inside is uniform and parallel to the axis. Outside, the field is approximately zero (for a long solenoid).

Apply Ampere's law to a rectangular Amperian loop with one side inside the solenoid (length l) and one side outside:

$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{enc}$$

$$B \cdot l = \mu_0 \cdot nIl$$

$$B = \mu_0 nI$$

The field is uniform inside and directed along the axis. The direction is given by the right-hand rule: curl your fingers in the direction of current, and your thumb points in the direction of B.

`medium` — 1 mark

---

### P19 — Electrodynamics

A parallel-plate capacitor with plate area A and separation d is being charged at a rate dQ/dt. Derive the displacement current and show it gives the same magnetic field as the conduction current.

**Solution:**

The electric field between the plates: $E = \sigma/\epsilon_0 = Q/(A\epsilon_0)$.

The displacement current density:

$$J_d = \epsilon_0 \frac{\partial E}{\partial t} = \frac{1}{A}\frac{dQ}{dt} = \frac{I}{A}$$

Total displacement current: $I_d = J_d \times A = I$, equal to the conduction current.

For the magnetic field at distance r from the axis (r < plate radius), using the Ampere-Maxwell law:

$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 \epsilon_0 \frac{d\Phi_E}{dt} = \mu_0 \epsilon_0 \pi r^2 \frac{dE}{dt}$$

$$B(2\pi r) = \mu_0 \epsilon_0 \pi r^2 \frac{I}{A\epsilon_0} = \frac{\mu_0 I r^2}{A}$$

$$B = \frac{\mu_0 I r}{2A}$$

This matches the field from the conduction current, confirming consistency.

`hard` — 1 mark

---

### P20 — Electromagnetic Waves

Starting from Maxwell's equations in free space, derive the wave equation for the electric field and find the speed of electromagnetic waves.

**Solution:**

In free space ($\rho = 0$, $\mathbf{J} = 0$):

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

$$\nabla \times \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

Take the curl of Faraday's law:

$$\nabla \times (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Using the vector identity $\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$ and Gauss's law ($\nabla \cdot \mathbf{E} = 0$ in free space):

$$-\nabla^2 \mathbf{E} = -\mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

$$\nabla^2 \mathbf{E} = \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

This is the wave equation with speed $c = 1/\sqrt{\mu_0 \epsilon_0} \approx 3 \times 10^8$ m/s.

`hard` — 1 mark

---

### P21 — Potentials and Gauge

Define the scalar potential phi and vector potential A, and explain the concept of gauge invariance.

**Solution:**

Since $\nabla \cdot \mathbf{B} = 0$, we can write $\mathbf{B} = \nabla \times \mathbf{A}$ for some vector potential A.

From Faraday's law: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t = -\partial(\nabla \times \mathbf{A})/\partial t$, so $\nabla \times (\mathbf{E} + \partial \mathbf{A}/\partial t) = 0$. Since the curl of a gradient is zero: $\mathbf{E} = -\nabla \phi - \partial \mathbf{A}/\partial t$.

The potentials (phi, A) are not unique. The gauge transformation:

$$\mathbf{A}' = \mathbf{A} + \nabla \chi$$
$$\phi' = \phi - \frac{\partial \chi}{\parameter name="content">---
title: "University Physics Practice Test — 30 Challenging Problems"
description: "30 university-level physics problems covering Classical Mechanics, Thermodynamics, Electromagnetism, and Quantum Mechanics. Problem-solving with detailed solutions."
date: 2026-07-24
tags:
  - physics
  - practice-test
  - university
  - undergraduate
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://physics.wyattau.com"},
    {"name": "Practice Test", "url": "https://physics.wyattau.com/practice-test-mega"}
  ]
}
</script>

## University Physics Practice Test — 30 Challenging Problems

This practice test covers 30 problems across four major domains of university physics: Classical Mechanics, Thermodynamics, Electromagnetism, and Quantum Mechanics. Each problem requires multi-step reasoning and the application of fundamental principles. Work through the problems with pen and paper before checking the solutions.

## Instructions

- **Time limit:** 90 minutes (3 minutes per problem)
- **Format:** Problem-solving — show all working
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes. Show all steps in your solutions.
- **After the test:** Check the solutions at the bottom. Study the derivations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Classical Mechanics | P1–P8 | 8 |
| Thermodynamics | P9–P15 | 7 |
| Electromagnetism | P16–P22 | 7 |
| Quantum Mechanics | P23–P30 | 8 |
| **Total** | **30** | **30** |

---

## Classical Mechanics (P1–P8)

### P1 — Lagrangian Mechanics

A particle of mass m slides without friction on the inside surface of a sphere of radius R. Using the angle theta from the vertical as the generalised coordinate, derive the equation of motion and find the condition for the particle to leave the surface.

**Solution:**

The kinetic energy is T = (1/2)m(R*theta_dot)^2 and the potential energy (taking the bottom of the sphere as reference) is U = mgR(1 - cos(theta)). The Lagrangian is:

L = T - U = (1/2)mR^2 * theta_dot^2 - mgR(1 - cos(theta))

The Euler-Lagrange equation gives:

mR^2 * theta_ddot = -mgR*sin(theta)

theta_ddot = -(g/R)*sin(theta)

The particle leaves the surface when the normal force becomes zero. From the radial force equation: mg*cos(theta) - N = mR*theta_dot^2. Setting N = 0 and using energy conservation, the critical angle is cos(theta_c) = 2/3, or theta_c approximately 48.2 degrees.

`hard` — 1 mark

---

### P2 — Hamiltonian Mechanics

For a one-dimensional harmonic oscillator with mass m and spring constant k, write the Hamiltonian and derive Hamilton's equations of motion.

**Solution:**

The Lagrangian is L = (1/2)m*x_dot^2 - (1/2)k*x^2.

The generalised momentum is p = m*x_dot, so x_dot = p/m.

The Hamiltonian is:

H = p*x_dot - L = p^2/(2m) + (1/2)k*x^2

Hamilton's equations:

x_dot = dH/dp = p/m

p_dot = -dH/dx = -k*x

Differentiating the first: x_ddot = p_dot/m = -k*x/m, giving x_ddot + omega^2 * x = 0 where omega = sqrt(k/m).

`hard` — 1 mark

---

### P3 — Central Forces

A particle moves in a central force field F(r) = -k*r^(-3) (attractive). Determine whether closed orbits are possible using the effective potential.

**Solution:**

The effective potential is:

V_eff(r) = l^2/(2mr^2) + k/(2r^2) = (1/(2r^2))*(l^2/m + k)

where l is the angular momentum. Since V_eff is proportional to 1/r^2, the effective potential is purely repulsive (for k > 0) or purely attractive (for k < 0). There is no potential well, so no stable circular orbits exist. The particle either spirals inward or escapes to infinity — closed orbits are not possible.

`hard` — 1 mark

---

### P4 — Rigid Body Dynamics

A uniform solid cylinder of mass M and radius R rolls without slipping down an inclined plane of angle alpha. Find the acceleration of the centre of mass.

**Solution:**

Forces along the incline: Mg*sin(alpha) - f = Ma, where f is the static friction force.

Torque about the centre: f*R = I*alpha_rot = (1/2)MR^2 * (a/R), so f = (1/2)Ma.

Substituting: Mg*sin(alpha) - (1/2)Ma = Ma, giving:

a = (2/3)*g*sin(alpha)

The cylinder accelerates at two-thirds the value for a frictionless slide, because some gravitational potential energy is converted to rotational kinetic energy.

`medium` — 1 mark

---

### P5 — Small Oscillations

Two identical pendulums of mass m and length l are coupled by a spring of constant k attached at a distance h from the pivot. Find the normal mode frequencies.

**Solution:**

For small oscillations, the equations of motion are:

ml^2 * theta_1_ddot = -mgl*theta_1 - kh^2*(theta_1 - theta_2)

ml^2 * theta_2_ddot = -mgl*theta_2 + kh^2*(theta_1 - theta_2)

Normal modes: symmetric (theta_1 = theta_2) and antisymmetric (theta_1 = -theta_2).

For the symmetric mode: omega_1 = sqrt(g/l) (spring not stretched).

For the antisymmetric mode: omega_2 = sqrt(g/l + 2kh^2/(ml^2)).

`hard` — 1 mark

---

### P6 — Conservation Laws

A particle of mass m_1 moving with velocity v_0 collides elastically with a stationary particle of mass m_2. Derive the final velocity of m_2.

**Solution:**

Conservation of momentum: m_1 * v_0 = m_1 * v_1 + m_2 * v_2.

Conservation of kinetic energy: (1/2)m_1 * v_0^2 = (1/2)m_1 * v_1^2 + (1/2)m_2 * v_2^2.

From these two equations (or using the coefficient of restitution e = 1):

v_2 = 2m_1 * v_0 / (m_1 + m_2)

Special cases: if m_1 = m_2, v_2 = v_0 (complete transfer). If m_1 is much less than m_2, v_2 is approximately 0 (light particle bounces back).

`medium` — 1 mark

---

### P7 — Noether's Theorem

A free particle of mass m moves in three dimensions with Lagrangian L = (1/2)m(x_dot^2 + y_dot^2 + z_dot^2). Identify the conserved quantities and explain their physical significance.

**Solution:**

L does not depend explicitly on x, y, or z, so the conjugate momenta are conserved:

p_x = m*x_dot = const

p_y = m*y_dot = const

p_z = m*z_dot = const

These are the components of linear momentum — translational invariance implies conservation of momentum (Noether's theorem).

L also does not depend on time explicitly, so the Hamiltonian (total energy) H = (1/2)m(x_dot^2 + y_dot^2 + z_dot^2) = T is conserved.

`medium` — 1 mark

---

### P8 — Nonlinear Dynamics

The Lorenz equations are x_dot = sigma*(y - x), y_dot = r*x - y - x*z, z_dot = x*y - b*z. For what parameter regime do chaotic solutions appear?

**Solution:**

The Lorenz system exhibits chaos for the classical parameter values sigma = 10, b = 8/3, and r > 24.74. The onset of chaos occurs at the homoclinic bifurcation.

For r < 1: the origin is the only fixed point (globally stable).

For 1 < r < 24.74: two additional stable fixed points appear (pitchfork bifurcation). Trajectories converge to one of these.

For r > 24.74: the fixed points become unstable, and trajectories exhibit sensitive dependence on initial conditions — the hallmark of chaos. The Lorenz attractor is a strange attractor with fractal dimension approximately 2.06.

`hard` — 1 mark

---

## Thermodynamics (P9–P15)

### P9 — Laws of Thermodynamics

An ideal gas undergoes a cyclic process consisting of two isothermal and two adiabatic steps (Carnot cycle). Show that the efficiency depends only on the temperatures of the hot and cold reservoirs.

**Solution:**

In a Carnot cycle:

- Isothermal expansion at T_H: absorbs Q_H from the hot reservoir.
- Adiabatic expansion: temperature drops from T_H to T_C.
- Isothermal compression at T_C: releases Q_C to the cold reservoir.
- Adiabatic compression: temperature rises from T_C to T_H.

For an ideal gas, isothermal processes give Q = nRT*ln(V_f/V_i). The adiabatic steps satisfy TV^(gamma-1) = const.

From the adiabatic conditions: V_2/V_1 = V_3/V_4, so:

Q_C / Q_H = T_C / T_H

The efficiency is:

eta = 1 - Q_C/Q_H = 1 - T_C/T_H

This depends only on the reservoir temperatures, not on the working substance.

`hard` — 1 mark

---

### P10 — Statistical Mechanics

A system of N independent harmonic oscillators has energy levels E_n = (n + 1/2)*hbar*omega. Derive the partition function and the mean energy at temperature T.

**Solution:**

The single-particle partition function is:

Z_1 = sum_{n=0}^{infinity} exp(-beta*(n+1/2)*hbar*omega) = exp(-beta*hbar*omega/2) / (1 - exp(-beta*hbar*omega))

Z_1 = 1 / (2*sinh(beta*hbar*omega/2))

For N distinguishable oscillators: Z = Z_1^N.

The mean energy:

<E> = -d(ln Z)/d(beta) = N*hbar*omega*(1/2 + 1/(exp(beta*hbar*omega) - 1))

The first term is the zero-point energy; the second is the thermal excitation.

`hard` — 1 mark

---

### P11 — Entropy

A mole of an ideal monatomic gas at 300 K and 1 atm is expanded isothermally to twice its volume. Calculate the change in entropy.

**Solution:**

For an isothermal process, the change in internal energy is zero (ideal gas), so:

Delta S = Q_rev / T = W_rev / T = nRT*ln(V_2/V_1) / T = nR*ln(V_2/V_1)

Delta S = (1)(8.314)*ln(2) = 8.314 * 0.693 = 5.76 J K^(-1)

The entropy increases because the gas occupies a larger volume, increasing the number of accessible microstates.

`easy` — 1 mark

---

### P12 — Kinetic Theory

Derive the ideal gas law from the kinetic theory of gases, starting from the momentum transfer of molecules colliding with a wall.

**Solution:**

Consider N molecules of mass m in a container of volume V. A molecule moving with velocity v_x in the x-direction collides elastically with a wall perpendicular to x. The momentum transfer per collision is 2m*v_x.

The number of collisions per unit time with a wall of area A is (1/2)*n*A*v_x (where n is the number density).

The force on the wall:

F = 2m*v_x * (1/2)*n*A*v_x = n*m*A*v_x^2

Averaging over all molecules: F = n*m*A*<v_x^2>. Since <v_x^2> = (1/3)<v^2>:

P = F/A = (1/3)*n*m*<v^2> = (2/3)*(N/V)*<KE>

Since <KE> = (3/2)*k_B*T:

PV = Nk_B*T = nRT

`hard` — 1 mark

---

### P13 — Phase Transitions

Describe the differences between first-order and second-order phase transitions, giving an example of each.

**Solution:**

First-order phase transitions involve a discontinuity in the first derivative of the free energy (Gibbs free energy G). There is a latent heat, and the two phases coexist at the transition temperature. Examples: boiling of water (liquid to gas), melting of ice (solid to liquid), and the normal-superconducting transition.

At a first-order transition: Delta S is not zero (latent heat L = T*Delta S), Delta V is not zero (volume change), and there is hysteresis and metastability (superheating, supercooling).

Second-order phase transitions (continuous transitions) have no latent heat and no discontinuity in the first derivatives of G. The second derivatives (heat capacity, compressibility, susceptibility) diverge or have discontinuities. Examples: ferromagnetic transition at the Curie point, superfluid transition in liquid helium, and the lambda transition.

At a second-order transition: Delta S = 0, Delta V = 0, but C_p, kappa, and chi may diverge. The transition is characterised by critical exponents and universality.

`medium` — 1 mark

---

### P14 — Fermi Gas

For a free electron gas at T = 0, derive the Fermi energy in terms of the electron density n.

**Solution:**

At T = 0, all states up to the Fermi energy E_F are filled, and all states above are empty.

The number of states with energy less than E:

N = (V/(3*pi^2)) * (2mE/hbar^2)^(3/2)

This comes from counting states in k-space: N = (2V/(2*pi)^3) * (4/3)*pi*k_F^3 (factor of 2 for spin), with E_F = hbar^2*k_F^2/(2m).

Solving for E_F:

E_F = (hbar^2/(2m)) * (3*pi^2*n)^(2/3)

where n = N/V is the electron density. For copper (n approximately 8.5 x 10^28 m^(-3)), E_F is approximately 7 eV.

`hard` — 1 mark

---

### P15 — Blackbody Radiation

Using Planck's radiation law, derive the Wien displacement law that relates the peak wavelength of blackbody radiation to temperature.

**Solution:**

Planck's law gives the spectral radiance:

B(lambda, T) = (2hc^2/lambda^5) * 1/(exp(hc/(lambda*k_B*T)) - 1)

To find the peak, set dB/dlambda = 0. Let x = hc/(lambda*k_B*T). Then:

dB/dlambda = 0 implies 5*(exp(x) - 1) = x*exp(x)

Solving numerically: x approximately 4.965.

Therefore: hc/(lambda_max*k_B*T) = 4.965, giving:

lambda_max * T = hc / (4.965*k_B) approximately 2.898 x 10^(-3) m K

This is Wien's displacement law: lambda_max * T = b where b approximately 2.9 x 10^(-3) m K.

`hard` — 1 mark

---

## Electromagnetism (P16–P22)

### P16 — Maxwell's Equations

State Maxwell's equations in differential form and explain the physical significance of each.

**Solution:**

1. Gauss's law for electricity: div(E) = rho/epsilon_0

   Electric charges are sources and sinks of electric field lines. The divergence of E at any point is proportional to the charge density.

2. Gauss's law for magnetism: div(B) = 0

   There are no magnetic monopoles. Magnetic field lines always form closed loops.

3. Faraday's law: curl(E) = -dB/dt

   A time-varying magnetic field induces an electric field (and hence an EMF). This is the principle behind electromagnetic induction.

4. Ampere-Maxwell law: curl(B) = mu_0*J + mu_0*epsilon_0*dE/dt

   Magnetic fields are generated by currents and by time-varying electric fields (displacement current). The displacement current term was Maxwell's key insight.

`medium` — 1 mark

---

### P17 — Electrostatics

A point charge q is placed at a distance d from the centre of a grounded conducting sphere of radius R. Find the charge distribution on the sphere using the method of images.

**Solution:**

The image charge method replaces the conducting sphere with an image charge q' at a distance b from the centre. For a grounded sphere:

q' = -(R/d)*q, b = R^2/d

The potential outside the sphere is:

Phi(r) = (1/(4*pi*epsilon_0)) * (q/|r - d*z_hat| + q'/|r - b*z_hat|)

The surface charge density on the sphere is:

sigma(theta) = q*(d^2 - R^2) / (4*pi*R*(d^2 + R^2 - 2*d*R*cos(theta))^(3/2))

`hard` — 1 mark

---

### P18 — Magnetostatics

Derive the magnetic field inside a long solenoid of n turns per unit length carrying current I.

**Solution:**

By symmetry, the field inside is uniform and parallel to the axis. Outside, the field is approximately zero (for a long solenoid).

Apply Ampere's law to a rectangular Amperian loop with one side inside the solenoid (length l) and one side outside:

oint B . dl = mu_0 * I_enc

B * l = mu_0 * n*I*l

B = mu_0 * n * I

The field is uniform inside and directed along the axis. The direction is given by the right-hand rule: curl your fingers in the direction of current, and your thumb points in the direction of B.

`medium` — 1 mark

---

### P19 — Electrodynamics

A parallel-plate capacitor with plate area A and separation d is being charged at a rate dQ/dt. Derive the displacement current and show it gives the same magnetic field as the conduction current.

**Solution:**

The electric field between the plates: E = sigma/epsilon_0 = Q/(A*epsilon_0).

The displacement current density:

J_d = epsilon_0 * dE/dt = (1/A) * dQ/dt = I/A

Total displacement current: I_d = J_d * A = I, equal to the conduction current.

For the magnetic field at distance r from the axis (r < plate radius), using the Ampere-Maxwell law:

B(2*pi*r) = mu_0 * epsilon_0 * pi*r^2 * dE/dt = mu_0 * I * r^2 / A

B = mu_0 * I * r / (2*A)

This matches the field from the conduction current, confirming consistency.

`hard` — 1 mark

---

### P20 — Electromagnetic Waves

Starting from Maxwell's equations in free space, derive the wave equation for the electric field and find the speed of electromagnetic waves.

**Solution:**

In free space (rho = 0, J = 0):

curl(E) = -dB/dt

curl(B) = mu_0 * epsilon_0 * dE/dt

Take the curl of Faraday's law:

curl(curl(E)) = -d/dt(curl(B)) = -mu_0 * epsilon_0 * d^2(E)/dt^2

Using the vector identity curl(curl(E)) = grad(div(E)) - nabla^2(E) and Gauss's law (div(E) = 0 in free space):

-nabla^2(E) = -mu_0 * epsilon_0 * d^2(E)/dt^2

nabla^2(E) = mu_0 * epsilon_0 * d^2(E)/dt^2

This is the wave equation with speed c = 1/sqrt(mu_0 * epsilon_0) approximately 3 x 10^8 m/s.

`hard` — 1 mark

---

### P21 — Potentials and Gauge

Define the scalar potential phi and vector potential A, and explain the concept of gauge invariance.

**Solution:**

Since div(B) = 0, we can write B = curl(A) for some vector potential A.

From Faraday's law: curl(E) = -dB/dt = -d(curl(A))/dt, so curl(E + dA/dt) = 0. Since the curl of a gradient is zero: E = -grad(phi) - dA/dt.

The potentials (phi, A) are not unique. The gauge transformation:

A' = A + grad(chi)
phi' = phi - d(chi)/dt

produces the same E and B fields for any scalar function chi. This freedom is gauge invariance. In electromagnetism, we often use the Coulomb gauge (div(A) = 0) or the Lorenz gauge (div(A) + (1/c^2)*d(phi)/dt = 0).

`medium` — 1 mark

---

### P22 — Special Relativity

Two events occur at the same point in frame S, separated by time Delta_t. Find the time separation in frame S' moving at velocity v relative to S.

**Solution:**

Using the Lorentz transformation for time:

Delta_t' = gamma*(Delta_t - v*Delta_x/c^2)

Since the events occur at the same point in S: Delta_x = 0.

Delta_t' = gamma * Delta_t = Delta_t / sqrt(1 - v^2/c^2)

This is time dilation: the moving frame S' measures a longer time interval. A clock at rest in S ticks slowly as observed from S'.

`easy` — 1 mark

---

## Quantum Mechanics (P23–P30)

### P23 — Postulates of Quantum Mechanics

State the postulates of quantum mechanics and explain the measurement process.

**Solution:**

Postulate 1 (State vector): The state of a quantum system is completely described by a state vector |psi> in a Hilbert space.

Postulate 2 (Observables): Physical observables are represented by Hermitian operators. The eigenvalues of these operators are the possible measurement outcomes.

Postulate 3 (Measurement): When an observable A is measured, the system collapses to an eigenstate |a_i> with probability |<a_i|psi>|^2, and the measured value is the corresponding eigenvalue a_i.

Postulate 4 (Time evolution): The time evolution of a state is governed by the Schrodinger equation: i*hbar*d|psi>/dt = H|psi>.

Postulate 5 (Composite systems): The state space of a composite system is the tensor product of the state spaces of its components.

The measurement process involves: (1) the system is in a superposition of eigenstates, (2) measurement forces collapse to one eigenstate, (3) the probability of each outcome is given by the Born rule, and (4) the collapse is irreversible and non-unitary.

`medium` — 1 mark

---

### P24 — Wave Functions

A particle in a one-dimensional infinite square well of width L has wave function psi(x) = sqrt(2/L)*sin(n*pi*x/L). Calculate the expectation value of x^2.

**Solution:**

<x^2> = integral from 0 to L of x^2 * |psi(x)|^2 dx = (2/L) * integral from 0 to L of x^2 * sin^2(n*pi*x/L) dx

Using the identity sin^2(theta) = (1 - cos(2*theta))/2:

<x^2> = (1/L) * integral from 0 to L of x^2 * (1 - cos(2n*pi*x/L)) dx

The cosine term integrates to zero over the full range. So:

<x^2> = (1/L) * integral from 0 to L of x^2 dx = (1/L) * L^3/3 = L^2/3

Note: <x> = L/2 by symmetry, but <x^2> = L^2/3, so the variance is L^2/3 - L^2/4 = L^2/12.

`medium` — 1 mark

---

### P25 — One-Dimensional Problems

For a particle in a harmonic oscillator potential V(x) = (1/2)m*omega^2*x^2, find the ground state energy using the variational method with a Gaussian trial function.

**Solution:**

Trial function: psi(x) = (alpha/pi)^(1/4) * exp(-alpha*x^2/2)

The expectation value of the Hamiltonian:

<E> = <T> + <V> = (hbar^2*alpha)/(4m) + (m*omega^2)/(4*alpha)

Minimising with respect to alpha:

d<E>/d(alpha) = hbar^2/(4m) - m*omega^2/(4*alpha^2) = 0

alpha = m*omega/hbar

Substituting back:

<E>_min = (hbar*omega)/4 + (hbar*omega)/4 = (1/2)*hbar*omega

This is exactly the ground state energy of the quantum harmonic oscillator.

`hard` — 1 mark

---

### P26 — Angular Momentum

Show that L^2 and L_z commute, and find the simultaneous eigenvalues.

**Solution:**

The angular momentum operators satisfy the commutation relations:

[L_x, L_y] = i*hbar*L_z (and cyclic permutations)

Compute [L^2, L_z] = [L_x^2 + L_y^2 + L_z^2, L_z] = [L_x^2, L_z] + [L_y^2, L_z]

[L_x^2, L_z] = L_x[L_x, L_z] + [L_x, L_z]L_x = L_x(-i*hbar*L_y) + (-i*hbar*L_y)L_x = -i*hbar*(L_x*L_y + L_y*L_x)

[L_y^2, L_z] = L_y[L_y, L_z] + [L_y, L_z]L_y = L_y(i*hbar*L_x) + (i*hbar*L_x)L_y = i*hbar*(L_y*L_x + L_x*L_y)

Adding: [L^2, L_z] = 0. So L^2 and L_z commute and share simultaneous eigenstates |l, m>.

The eigenvalues are:

L^2|l, m> = hbar^2 * l(l+1) |l, m>

L_z|l, m> = hbar * m |l, m>

where l = 0, 1/2, 1, 3/2, ... and m = -l, -l+1, ..., l-1, l.

`hard` — 1 mark

---

### P27 — Spin

A spin-1/2 particle is in the state |psi> = (1/sqrt(3))|up> + (sqrt(2)/sqrt(3))|down>. What is the probability of measuring S_z = +hbar/2? What is <S_x>?

**Solution:**

Probability of S_z = +hbar/2: P(up) = |<up|psi>|^2 = (1/sqrt(3))^2 = 1/3.

For <S_x>, we need to express |psi> in the S_x eigenbasis. The S_x eigenstates are:

|+> = (1/sqrt(2))(|up> + |down>)

|-> = (1/sqrt(2))(|up> - |down>)

So |up> = (1/sqrt(2))(|+> + |->) and |down> = (1/sqrt(2))(|+> - |->).

|psi> = (1/sqrt(3))*(1/sqrt(2))(|+> + |->) + (sqrt(2)/sqrt(3))*(1/sqrt(2))(|+> - |->)

= (1/sqrt(6) + sqrt(2)/sqrt(6))|+> + (1/sqrt(6) - sqrt(2)/sqrt(6))|->

= ((1 + sqrt(2))/sqrt(6))|+> + ((1 - sqrt(2))/sqrt(6))|->

<S_x> = (hbar/2)*(|c_+|^2 - |c_-|^2) = (hbar/2)*((1+sqrt(2))^2 - (1-sqrt(2))^2)/6

= (hbar/2)*(4*sqrt(2))/6 = (hbar/2)*(2*sqrt(2)/3) = sqrt(2)*hbar/3

`hard` — 1 mark

---

### P28 — Hydrogen Atom

For the hydrogen atom, the radial wave function for the ground state is R_10(r) = 2*(a_0)^(-3/2)*exp(-r/a_0). Verify that this satisfies the radial Schrodinger equation.

**Solution:**

The radial equation for l = 0:

-(hbar^2/(2m))*d^2(u)/dr^2 - (e^2/(4*pi*epsilon_0*r))*u = E*u

where u = r*R(r).

For the ground state: u(r) = r*R_10(r) = 2*(a_0)^(-3/2)*r*exp(-r/a_0).

du/dr = 2*(a_0)^(-3/2)*(1 - r/a_0)*exp(-r/a_0)

d^2u/dr^2 = 2*(a_0)^(-3/2)*(-1/a_0 - (1/a_0)(1 - r/a_0))*exp(-r/a_0)

= 2*(a_0)^(-3/2)*(-2/a_0 + r/a_0^2)*exp(-r/a_0)

Substituting into the radial equation and using E_1 = -m*e^4/(2*(4*pi*epsilon_0)^2*hbar^2) = -e^2/(8*pi*epsilon_0*a_0), and a_0 = 4*pi*epsilon_0*hbar^2/(m*e^2):

After simplification, both sides are equal, confirming the solution.

`hard` — 1 mark

---

### P29 — Perturbation Theory

A quantum harmonic oscillator is perturbed by H' = epsilon*x^3. Use first-order perturbation theory to find the first-order correction to the ground state energy.

**Solution:**

The first-order energy correction is:

E_1^(1) = <0|H'|0> = epsilon * <0|x^3|0>

Using x = sqrt(hbar/(2*m*omega))*(a + a^dag):

x^3 = (hbar/(2*m*omega))^(3/2) * (a + a^dag)^3

Expanding (a + a^dag)^3 and computing <0|...|0>:

Only terms with equal numbers of a and a^dag contribute. For x^3, we need terms like a*a*a^dag*a^dag*a (and permutations), but none give a non-zero contribution when sandwiched between <0| and |0>.

<0|x^3|0> = 0

Therefore E_1^(1) = 0.

This makes sense by symmetry: x^3 is an odd function, and the ground state wave function is even, so the integrand is odd and integrates to zero.

`medium` — 1 mark

---

### P30 — Scattering Theory

For a particle scattering off a hard sphere of radius a, find the total scattering cross section.

**Solution:**

For a hard sphere, the scattering amplitude is:

f(theta) = -a * sum_{l=0}^{infinity} (2l+1)*P_l(cos(theta))*sin(delta_l)/exp(i*delta_l)

For a hard sphere, the boundary condition is R_l(a) = 0, giving delta_l = -k*a for l = 0 (s-wave) and negligible phase shifts for l > 0 when ka << 1.

For low energies (ka << 1), only s-wave scattering contributes:

f(theta) approximately -a (isotropic)

The total cross section:

sigma = integral |f(theta)|^2 dOmega = 4*pi*a^2

This is four times the geometric cross section (pi*a^2). The factor of 4 arises from the wave nature of quantum mechanics — even particles classically too large to hit the sphere are diffracted around it.

`hard` — 1 mark

---

## Solutions

<details>
<summary>Click to reveal the solutions</summary>

### Classical Mechanics

| Problem | Key Result |
| --- | --- |
| P1 | Critical angle: cos(theta_c) = 2/3 |
| P2 | H = p^2/(2m) + kx^2/2 |
| P3 | No closed orbits possible |
| P4 | a = (2/3)g*sin(alpha) |
| P5 | omega_1 = sqrt(g/l), omega_2 = sqrt(g/l + 2kh^2/(ml^2)) |
| P6 | v_2 = 2m_1*v_0/(m_1 + m_2) |
| P7 | Linear momentum and energy conserved |
| P8 | Chaos for r > 24.74 (Lorenz system) |

### Thermodynamics

| Problem | Key Result |
| --- | --- |
| P9 | eta = 1 - T_C/T_H (Carnot efficiency) |
| P10 | Z_1 = 1/(2*sinh(beta*hbar*omega/2)) |
| P11 | Delta S = 5.76 J K^(-1) |
| P12 | PV = Nk_B*T (ideal gas law) |
| P13 | First-order: latent heat; Second-order: no latent heat |
| P14 | E_F = (hbar^2/(2m))*(3*pi^2*n)^(2/3) |
| P15 | lambda_max*T = 2.898 x 10^(-3) m K |

### Electromagnetism

| Problem | Key Result |
| --- | --- |
| P16 | Four Maxwell equations in differential form |
| P17 | Method of images: q' = -(R/d)*q at b = R^2/d |
| P18 | B = mu_0*n*I (solenoid field) |
| P19 | Displacement current equals conduction current |
| P20 | c = 1/sqrt(mu_0*epsilon_0) |
| P21 | Gauge invariance: A' = A + grad(chi), phi' = phi - d(chi)/dt |
| P22 | Delta_t' = gamma*Delta_t (time dilation) |

### Quantum Mechanics

| Problem | Key Result |
| --- | --- |
| P23 | Five postulates of quantum mechanics |
| P24 | <x^2> = L^2/3 (infinite well) |
| P25 | E_0 = hbar*omega/2 (harmonic oscillator ground state) |
| P26 | [L^2, L_z] = 0; eigenvalues hbar^2*l(l+1) and hbar*m |
| P27 | P(up) = 1/3; <S_x> = sqrt(2)*hbar/3 |
| P28 | Radial equation verified for hydrogen ground state |
| P29 | E_1^(1) = 0 (odd perturbation, even ground state) |
| P30 | sigma = 4*pi*a^2 (hard sphere, low energy) |

</details>

---

## Difficulty Breakdown

| Difficulty | Count |
| --- | --- |
| Easy | 3 |
| Medium | 7 |
| Hard | 20 |

---

## Cross-References

- **[Classical Mechanics](1-classical-mechanics)** — Lagrangian, Hamiltonian, central forces, rigid body dynamics, and nonlinear dynamics
- **[Thermal Physics](2-thermal-physics)** — Laws of thermodynamics, statistical mechanics, entropy, and phase transitions
- **[Electromagnetism](3-electromagnetism)** — Maxwell's equations, electrostatics, magnetostatics, and electromagnetic waves
- **[Quantum Mechanics](5-quantum-mechanics)** — Postulates, wave functions, hydrogen atom, perturbation theory, and scattering
- **[Classical Mechanics Problem Set](1-classical-mechanics/9_problem-set)** — Additional practice problems
- **[Electromagnetism Problem Set](3-electromagnetism/8_problem-set)** — Additional practice problems
- **[Quantum Mechanics Problem Set](5-quantum-mechanics/9_problem-set)** — Additional practice problems

---

## Tips for Using This Practice Test

1. **Show all working.** University physics exams award partial credit for correct method, even if the final answer is wrong.
2. **Use symbolic answers.** Work through the algebra in terms of symbols, not numbers. This reduces errors and makes dimensional analysis possible.
3. **Check your answers.** Verify dimensions, limits, and signs. A wrong answer that fails dimensional analysis is clearly incorrect.
4. **Study the derivations.** The solutions show the full derivation — understanding the method is more important than memorising the result.
5. **Retake after one week.** Physics requires understanding, not memorisation. Retaking after a gap tests whether you truly understand the principles.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*