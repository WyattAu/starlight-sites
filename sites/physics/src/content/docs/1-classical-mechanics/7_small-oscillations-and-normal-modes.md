---

date: 2026-07-23T21:57:32+01:00
title: Small Oscillations and Normal Modes
tags:
  - Physics
  - University
description: 'At a stable equilibrium, has a local minimum. Expanding around equilibrium (): Comprehensive educational content coverage with definitions and practice problems'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "1 Classical Mechanics", "url": "https://physics.wyattau.com/1-classical-mechanics"}, {"name": "7_small Oscillations And Normal Modes", "url": "https://physics.wyattau.com/1-classical-mechanics/7_small-oscillations-and-normal-modes"}]
}
</script>

### 7.1 Equilibrium and Small Oscillations

At a stable equilibrium, $V$ has a local minimum. Expanding around equilibrium
($q_j = q_j^0 + \eta_j$):

$$L \approx \frac{1}{2}\sum_{j,k} T_{jk}\dot{\eta}_j\dot{\eta}_k - \frac{1}{2}\sum_{j,k} V_{jk}\eta_j\eta_k$$

Where $T_{jk} = \frac{\partial^2 T}{\partial \dot{q}_j \partial \dot{q}_k}\bigg|_0$ is the
(constant) Mass matrix and $V_{jk} = \frac{\partial^2 V}{\partial q_j \partial q_k}\bigg|_0$ is the
(constant) Stiffness matrix.

Both $T_{jk}$ and $V_{jk}$ are symmetric matrices. $T$ is positive definite (kinetic energy is
always positive), and $V$ is positive definite at a stable equilibrium.

### 7.2 Matrix Formulation

Writing the Lagrangian in matrix form:

$$L = \frac{1}{2}\dot{\boldsymbol{\eta}}^T \mathbf{T}\, \dot{\boldsymbol{\eta}} - \frac{1}{2}\boldsymbol{\eta}^T \mathbf{V}\, \boldsymbol{\eta}$$

The Euler-Lagrange equations become:

$$\mathbf{T}\, \ddot{\boldsymbol{\eta}} + \mathbf{V}\, \boldsymbol{\eta} = \mathbf{0}$$

### 7.3 Normal Modes and the Secular Equation

Assuming solutions of the form $\eta_j = a_j e^{i\omega t}$The eigenvalue problem is:

$$(\mathbf{V} - \omega^2 \mathbf{T})\mathbf{a} = \mathbf{0}$$

The **secular equation** (characteristic equation) is:

$$\det(\mathbf{V} - \omega^2 \mathbf{T}) = 0$$

This is a polynomial of degree $n$ in $\omega^2$ whose roots are the squared normal mode frequencies
$\omega_\alpha^2$.

**Theorem 7.1.** For a stable system, all normal mode frequencies are real and positive. The normal
Modes are orthogonal with respect to both $\mathbf{T}$ and $\mathbf{V}$.

_Proof._ Since $\mathbf{T}$ is positive definite, we can write $\mathbf{T} = \mathbf{L}\mathbf{L}^T$
(Cholesky decomposition). Defining $\boldsymbol{\xi} = \mathbf{L}^T\mathbf{a}$ and
$\mathbf{W} = \mathbf{L}^{-1}\mathbf{V}\mathbf{L}^{-T}$The eigenvalue problem becomes
$\mathbf{W}\boldsymbol{\xi} = \omega^2\boldsymbol{\xi}$. Since $\mathbf{W}$ is symmetric and
$\mathbf{V}$ is positive definite, all eigenvalues $\omega^2$ are real and positive. Orthogonality
follows from the symmetry of $\mathbf{W}$. $\blacksquare$

### 7.4 Orthogonality of Normal Modes

**Theorem 7.2.** The normal mode vectors $\mathbf{a}^{(\alpha)}$ satisfy:

$$\sum_{j,k} a_j^{(\alpha)} T_{jk} a_k^{(\beta)} = T_\alpha\, \delta_{\alpha\beta}, \quad \sum_{j,k} a_j^{(\alpha)} V_{jk} a_k^{(\beta)} = \omega_\alpha^2 T_\alpha\, \delta_{\alpha\beta}$$

Where $T_\alpha$ is a normalisation constant.

This allows us to expand any motion as a superposition of normal modes.

### 7.5 Worked Example: Coupled Pendulums

**Problem.** Two identical simple pendulums of length $l$ and mass $m$ are coupled by a spring of
constant $k$ connecting the bobs. Find the normal modes and frequencies.

<details>
<summary>Solution</summary>

Let $\theta_1$ and $\theta_2$ be the small angles from vertical. The separation between bobs (to
first order) is approximately $l(\theta_2 - \theta_1)$So the spring potential energy is
$\frac{1}{2}k l^2(\theta_2 - \theta_1)^2$.

Kinetic energy:

$$T = \frac{1}{2}ml^2\dot{\theta}_1^2 + \frac{1}{2}ml^2\dot{\theta}_2^2$$

Potential energy (gravitational + spring):

$$V = \frac{1}{2}mgl\theta_1^2 + \frac{1}{2}mgl\theta_2^2 + \frac{1}{2}kl^2(\theta_2 - \theta_1)^2$$

$$= \frac{1}{2}(mgl + kl^2)\theta_1^2 + \frac{1}{2}(mgl + kl^2)\theta_2^2 - kl^2\theta_1\theta_2$$

The mass matrix and stiffness matrix are:

$$\mathbf{T} = ml^2 \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \mathbf{V} = \begin{pmatrix} mgl + kl^2 & -kl^2 \\ -kl^2 & mgl + kl^2 \end{pmatrix}$$

The secular equation $\det(\mathbf{V} - \omega^2\mathbf{T}) = 0$:

$$(mgl + kl^2 - ml^2\omega^2)^2 - (kl^2)^2 = 0$$

$$mgl + kl^2 - ml^2\omega^2 = \pm kl^2$$

**Mode 1** ($+$ sign): $\omega_1^2 = g/l$. The eigenvector is $(1, 1)$: both pendulums swing in
phase, the spring is not stretched.

**Mode 2** ($-$ sign): $\omega_2^2 = g/l + 2k/m$. The eigenvector is $(1, -1)$: the pendulums swing
out of phase, the spring is maximally stretched.

The general solution is a superposition:

$$\theta_1(t) = A\cos(\omega_1 t + \phi_1) + B\cos(\omega_2 t + \phi_2)$$

$$\theta_2(t) = A\cos(\omega_1 t + \phi_1) - B\cos(\omega_2 t + \phi_2)$$

If initially only $\theta_1$ is displaced and $\theta_2 = 0$ with zero velocities, energy slowly
transfers between the two pendulums --- the classic **beat phenomenon**.

$\blacksquare$

</details>

### 7.6 Worked Example: Double Pendulum (Small Oscillations)

For two equal masses $m$ on massless rods of length $l$:

The kinetic and potential energy matrices (to second order) give the eigenvalue problem with
solutions $\omega_1 = \sqrt{g/l}(2 - \sqrt{2})^{1/2}$ and
$\omega_2 = \sqrt{g/l}(2 + \sqrt{2})^{1/2}$.

The corresponding normal modes are:

- **Mode 1:** both pendulums swing in the same direction (in phase).
- **Mode 2:** the pendulums swing in opposite directions (out of phase).

### 7.7 Common Pitfalls

- Assuming the mass matrix is always diagonal; in generalised coordinates it can have off-diagonal terms.
- Forgetting that both $T$ and $V$ must be positive definite for all eigenvalues to be real and positive.
- Confusing the secular equation $\det(\mathbf{V} - \omega^2\mathbf{T}) = 0$ with $\det(\mathbf{V} - \lambda\mathbf{I}) = 0$; the latter only applies when $T = I$.
- Neglecting to normalise eigenvectors with respect to the mass matrix, which leads to incorrect mode superpositions.
- Misidentifying degenerate modes: when $\omega_\alpha = \omega_\beta$, any linear combination of the corresponding eigenvectors is also a normal mode.
- Assuming that small oscillation analysis captures the full dynamics; it only describes motion near equilibrium and breaks down for large amplitudes.

## Intuition

Normal modes are like the natural hum of a system. When you pluck a guitar string, it vibrates at specific frequencies determined by its length and tension. Push a swing at just the right moment and it builds up; push at the wrong frequency and it barely moves. Small oscillation analysis decomposes any complex motion near equilibrium into these natural frequencies. Think of coupled pendulums: energy sloshes back and forth between them like water in connected tanks, creating the beat phenomenon. Each normal mode is a pattern where every part of the system moves in phase with the same frequency. The secular equation is like tuning a radio: it tells you exactly which frequencies the system can sustain. Any motion is just a superposition of these natural frequencies, like a chord on a piano is a superposition of individual notes.

### 7.8 Key Results Summary

| Result | Statement |
| --- | --- |
| Secular equation | $\det(\mathbf{V} - \omega^2\mathbf{T}) = 0$ gives normal mode frequencies |
| Orthogonality | $\mathbf{a}^{(\alpha)T}\mathbf{T}\mathbf{a}^{(\beta)} = T_\alpha\delta_{\alpha\beta}$ |
| Stability condition | $T$ and $V$ positive definite $\implies$ all $\omega_\alpha^2 > 0$ |
| Beat phenomenon | Two pendulums with close frequencies exchange energy periodically |
| Degeneracy | When $\omega_\alpha = \omega_\beta$, eigenvectors are not uniquely determined |

## Cross-References

- **[Lagrangian Mechanics](3_lagrangian-mechanics.md)**: The Lagrangian formulation provides the foundation for analyzing small oscillations and normal modes.
- **[Hamiltonian Mechanics](4_hamiltonian-mechanics.md)**: The Hamiltonian formalism gives the total energy and phase space representation of normal mode oscillations.
- **[Rigid Body Dynamics](8_rigid-body-dynamics.md)**: Rigid body rotations exhibit normal modes that describe small oscillations about equilibrium orientations.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
