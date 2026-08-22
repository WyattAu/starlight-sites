---

date: 2026-07-23T21:57:32+01:00
title: Electrodynamics
tags:
  - Physics
  - University
description: "A changing magnetic field induces an electric field: Comprehensive educational content coverage with definitions, worked examples, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "4_electrodynamics", "url": "https://physics.wyattau.com/3-electromagnetism/4_electrodynamics"}]
}
</script>

### 4.1 Faraday"s Law of Induction

A changing magnetic field induces an electric field:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$$

**Lenz's Law:** The induced EMF opposes the change in flux that produced it.

**Example.** A circular loop of radius $R$ in a uniform magnetic field
$\mathbf{B}(t) = B_0 \cos(\omega t)\,\hat{\mathbf{z}}$.

The flux: $\Phi_B = \pi R^2 B_0 \cos(\omega t)$.

The induced EMF: $\mathcal{E} = -\frac{d\Phi_B}{dt} = \pi R^2 B_0 \omega \sin(\omega t)$.

### 4.2 Displacement Current

Maxwell's key insight: Ampere’s law $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ is inconsistent
with The continuity equation. Adding the **displacement current** term
$\mu_0 \varepsilon_0 \partial \mathbf{E}/\partial t$ Resolves this:

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

### 4.3 Worked Example

**Problem.** A parallel-plate capacitor with circular plates of radius $R$ is being charged by a
Current $I$. Find the magnetic field between the plates at distance $r$ from the axis.

_Solution._ Between the plates, $\mathbf{J} = 0$ But there is a changing electric field. The
Displacement current density is $J_d = \varepsilon_0 \frac{\partial E}{\partial t}$.

$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\pi R^2 \varepsilon_0}$ So
$\frac{\partial E}{\partial t} = \frac{I}{\pi R^2 \varepsilon_0}$.

By symmetry, use an Amperian loop of radius $r \lt R$:

$$\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\int \mathbf{E} \cdot d\mathbf{A}$$

$$B \cdot 2\pi r = \mu_0 \varepsilon_0 \cdot \frac{I}{\pi R^2 \varepsilon_0} \cdot \pi r^2 = \frac{\mu_0 I r^2}{R^2}$$

$$B = \frac{\mu_0 I r}{2\pi R^2}$$

$\blacksquare$

### 4.4 Motional EMF

When a conductor moves through a magnetic field, the Lorentz force on the charges produces an EMF:

$$\mathcal{E} = \oint (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l}$$

This is consistent with the flux rule $\mathcal{E} = -d\Phi_B/dt$ since changing the Circuit's
geometry or position changes the flux.

<details>
<summary>Example: Rod sliding on rails</summary>

A conducting rod of length $L$ slides with velocity $v$ along two parallel rails connected by A
resistor $R$In a uniform magnetic field $\mathbf{B} = B\,\hat{\mathbf{z}}$ perpendicular to The rail
plane.

The motional EMF:

$$\mathcal{E} = \int_0^L (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} = vBL$$

The induced current: $I = \mathcal{E}/R = vBL/R$.

The magnetic force on the rod: $F = BIL = B^2L^2v/R$ (opposing the motion, by Lenz's law).

The power dissipated: $P = I^2R = v^2B^2L^2/R$Which equals the mechanical power $Fv$ Supplied to the
rod. $\blacksquare$

</details>

### 4.5 Derivation of Maxwell's Correction

**Problem with Ampere's original law.** The original Ampere’s law was
$\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$. Taking the divergence:

$$\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J}$$

This requires $\nabla \cdot \mathbf{J} = 0$ at all times, which contradicts the continuity Equation
$\nabla \cdot \mathbf{J} = -\partial\rho/\partial t$ whenever charge density changes.

**Resolution.** Use Gauss's law to rewrite the continuity equation:

$$\nabla \cdot \mathbf{J} = -\frac{\partial\rho}{\partial t} = -\frac{\partial}{\partial t}(\varepsilon_0 \nabla \cdot \mathbf{E}) = -\nabla \cdot \left(\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}\right)$$

$$\nabla \cdot \left(\mathbf{J} + \varepsilon_0\frac{\partial \mathbf{E}}{\partial t}\right) = 0$$

This suggests modifying Ampere's law to:

$$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

Now taking the divergence gives zero identically, consistent with charge conservation. The Term
$\mu_0 \varepsilon_0\,\partial\mathbf{E}/\partial t$ is the **displacement current**.

**Physical interpretation.** The displacement current represents the time-varying electric field
That produces a magnetic field just as a real current does. It is essential inside capacitors, Where
$\mathbf{J} = 0$ but $\partial\mathbf{E}/\partial t \neq 0$.

### 4.6 Electromagnetic Induction: Worked Examples

<details>
<summary>Example: Loop falling through a magnetic field</summary>

A rectangular loop of width $w$Height $\ell$ And resistance $R$ falls vertically under Gravity
through a region of uniform magnetic field $\mathbf{B} = B\,\hat{\mathbf{x}}$ confined To a
horizontal strip of height $h$.

As the loop enters the field (top edge in, bottom edge out), the flux is $\Phi_B = Bwx$ where $x$ is
the distance the top edge has penetrated.

The induced EMF: $\mathcal{E} = -Bw\,dx/dt = -Bwv$.

The induced current: $I = Bwv/R$Flowing to oppose the change in flux (Lenz's law).

The braking force: $F = BwI = B^2w^2v/R$ (upward).

Terminal velocity: $mg = B^2w^2v_{\mathrm{term}/R \implies v_{\mathrm{term} = mgR/(B^2w^2)}}$.

While entirely inside the field, $\Phi_B$ is constant, so $\mathcal{E} = 0$ and the loop Falls
freely. As it exits, the braking force reappears. $\blacksquare$

</details>

**Mutual inductance.** When circuit 1 produces flux $\Phi_{21}$ through circuit 2:

$$M = \frac{\Phi_{21}}{I_1}$$

The EMF induced in circuit 2 by a changing current in circuit 1:

$$\mathcal{E}_2 = -M\frac{dI_1}{dt}$$

**Self-inductance.** A circuit carrying current $I$ produces flux $\Phi$ through itself:

$$L = \frac{N\Phi}{I}$$

The back-EMF:

$$\mathcal{E} = -L\frac{dI}{dt}$$

**Energy stored** in an inductor:

$$U = \frac{1}{2}LI^2$$

**Example: Solenoid.** A long solenoid of length $\ell$ with $N$ turns, cross-sectional area $A$:

$$L = \frac{\mu_0 N^2 A}{\ell}$$

## Intuition

Electrodynamics is the physics of how changing fields create each other. Faraday's law says a changing magnetic field whips up an electric field like stirring tea creates a whirlpool. The displacement current is Maxwell's brilliant addition: a changing electric field produces a magnetic field just as a real current does, which is what allows electromagnetic waves to propagate through empty space. Lenz's law is nature's stubbornness: when you try to change the magnetic flux through a loop, the loop fights back by inducing a current that opposes the change. This is why a magnet falling through a copper pipe slows down even though copper is not magnetic. Self-inductance is like electrical inertia: an inductor resists changes in current the way a massive object resists changes in velocity. The energy stored in an inductor's magnetic field is like the kinetic energy of a moving mass.

## Common Mistakes

**Mistake 1: Forgetting the minus sign in Faraday's law**
The induced EMF is $\mathcal{E} = -d\Phi_B/dt$, not $+d\Phi_B/dt$. The minus sign encodes Lenz's law: the induced current opposes the change in flux that produced it. Dropping the sign leads to predictions of perpetual motion machines where induced currents accelerate rather than resist motion.

**Mistake 2: Treating displacement current as actual charge flow**
The displacement current $\mu_0\varepsilon_0\,\partial\mathbf{E}/\partial t$ is not a real current carried by moving charges. It is a term in Maxwell's equations that accounts for the magnetic field produced by a time-varying electric field. Inside a charging capacitor, $\mathbf{J} = 0$ but $\partial\mathbf{E}/\partial t \neq 0$, so the displacement current fills the gap.

**Mistake 3: Applying Faraday's law to non-conservative fields**
Faraday's law $\nabla \times \mathbf{E} = -\partial\mathbf{B}/\partial t$ applies to induced electric fields, which are non-conservative. Students sometimes attempt to define a scalar potential for these fields, but $\mathbf{E} \neq -\nabla V$ when $\partial\mathbf{B}/\partial t \neq 0$. The scalar potential formulation only works in the static limit.

## Cross-References

- **[Maxwell's Equations](1_maxwell-s-equations.md)**: Faraday's law and the displacement current are two of Maxwell's four equations that govern electrodynamics.
- **[Magnetostatics](3_magnetostatics.md)**: Magnetostatics is the static limit where time derivatives vanish, describing steady currents without induction.
- **[The Wave Equation](../4-optics-and-waves/1_the-wave-equation.md)**: The wave equation for electromagnetic fields follows from Maxwell's equations and describes light propagation.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
