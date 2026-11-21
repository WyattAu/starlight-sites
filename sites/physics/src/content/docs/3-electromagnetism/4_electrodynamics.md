---

date: 2026-07-23T21:57:32+01:00
title: "Electrodynamics"
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

**History.** Michael Faraday's iron-ring experiment of 29 August 1831 produced the first current from a changing magnetic field, and his interpretation, fields carrying influence through space rather than action at a distance, was so unorthodox that continental physicists ignored it for a decade. Joseph Henry had seen the effect in 1830 but published nothing, and the priority dispute shadowed both men. The mathematics arrived sixteen years later than the discovery: not from Faraday, who drew field lines instead of equations, but from Maxwell, who turned the flux rule and the displacement current into the theory this chapter completes.

**Ponder (attempt the minus sign).** Faraday's law carries a minus sign, and textbooks present it as a rule. Attempt instead to derive it: a magnet plunges toward a coil and a current appears. If the induced current ran the other way, what would happen to the magnet's motion, and what does that failed experiment tell you the sign has to be? Energy conservation should decide it, not convention.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Run the wrong sign: the induced current would attract the plunging magnet, adding kinetic energy while the current delivers heat to the coil: energy from nowhere, a perpetual-motion machine. The only sign that charges the bookkeeping is the one that makes the induced current oppose the change: that is Lenz's law, and the minus sign is its mathematics. Every generator on the grid is harder to turn in exact proportion to the electrical load it carries, which is the same law paid out in torque.

</div>
</details>

### 4.1 Faraday's Law of Induction

A changing magnetic field induces an electric field:

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}
$$

**Lenz's Law:** The induced EMF opposes the change in flux that produced it.

**Example.** A circular loop of radius $R$ in a uniform magnetic field
$\mathbf{B}(t) = B_0 \cos(\omega t)\,\hat{\mathbf{z}}$.

The flux: $\Phi_B = \pi R^2 B_0 \cos(\omega t)$.

The induced EMF: $\mathcal{E} = -\frac{d\Phi_B}{dt} = \pi R^2 B_0 \omega \sin(\omega t)$.

### 4.2 Displacement Current

Maxwell's key insight: Ampere’s law $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ is inconsistent
with The continuity equation. Adding the **displacement current** term
$\mu_0 \varepsilon_0 \partial \mathbf{E}/\partial t$ Resolves this:

$$
\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
$$

### 4.3 Worked Example

**Problem.** A parallel-plate capacitor with circular plates of radius $R$ is being charged by a
Current $I$. Find the magnetic field between the plates at distance $r$ from the axis.

_Solution._ Between the plates, $\mathbf{J} = 0$ But there is a changing electric field. The
Displacement current density is $J_d = \varepsilon_0 \frac{\partial E}{\partial t}$.

$E = \frac{\sigma}{\varepsilon_0} = \frac{Q}{\pi R^2 \varepsilon_0}$ So
$\frac{\partial E}{\partial t} = \frac{I}{\pi R^2 \varepsilon_0}$.

By symmetry, use an Amperian loop of radius $r \lt R$:

$$
\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\int \mathbf{E} \cdot d\mathbf{A}
$$

$$
B \cdot 2\pi r = \mu_0 \varepsilon_0 \cdot \frac{I}{\pi R^2 \varepsilon_0} \cdot \pi r^2 = \frac{\mu_0 I r^2}{R^2}
$$

$$
B = \frac{\mu_0 I r}{2\pi R^2}
$$

$\blacksquare$

**Ponder (attempt the two derivations).** A rod slides on rails through a uniform field. Attempt the EMF twice: once as the Lorentz force $q\mathbf{v} \times \mathbf{B}$ driving charges along the rod, once as the flux rule $-d\Phi_B/dt$ from the growing loop area. You get the same answer. Attempt to find a configuration where the two methods disagree, and decide which one is the law and which is the shortcut.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

For circuits whose geometry changes, both agree, which is why generators can be designed by the flux rule alone. They part company in configurations like the Faraday disk, a conducting disk spinning in a uniform field, where the flux through any fixed loop stays constant while the force $\mathbf{v} \times \mathbf{B}$ drives a steady EMF from axle to rim. The local law, Lorentz force plus the $-\partial \mathbf{B}/\partial t$ term of Faraday's equation, is always right; the flux rule is a shortcut whose validity must be checked, not an axiom.

</div>
</details>

### 4.4 Motional EMF

When a conductor moves through a magnetic field, the Lorentz force on the charges produces an EMF:

$$
\mathcal{E} = \oint (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l}
$$

This is consistent with the flux rule $\mathcal{E} = -d\Phi_B/dt$ since changing the Circuit's
geometry or position changes the flux.

<details>
<summary>Example: Rod sliding on rails</summary>

A conducting rod of length $L$ slides with velocity $v$ along two parallel rails connected by A
resistor $R$ In a uniform magnetic field $\mathbf{B} = B\,\hat{\mathbf{z}}$ perpendicular to The rail
plane.

The motional EMF:

$$
\mathcal{E} = \int_0^L (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} = vBL
$$

The induced current: $I = \mathcal{E}/R = vBL/R$.

The magnetic force on the rod: $F = BIL = B^2L^2v/R$ (opposing the motion, by Lenz's law).

The power dissipated: $P = I^2R = v^2B^2L^2/R$ Which equals the mechanical power $Fv$ Supplied to the
rod. $\blacksquare$

</details>

### 4.5 Derivation of Maxwell's Correction

**Problem with Ampere's original law.** The original Ampere’s law was
$\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$. Taking the divergence:

$$
\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J}
$$

This requires $\nabla \cdot \mathbf{J} = 0$ at all times, which contradicts the continuity Equation
$\nabla \cdot \mathbf{J} = -\partial\rho/\partial t$ whenever charge density changes.

**Resolution.** Use Gauss's law to rewrite the continuity equation:

$$
\nabla \cdot \mathbf{J} = -\frac{\partial\rho}{\partial t} = -\frac{\partial}{\partial t}(\varepsilon_0 \nabla \cdot \mathbf{E}) = -\nabla \cdot \left(\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}\right)
$$

$$
\nabla \cdot \left(\mathbf{J} + \varepsilon_0\frac{\partial \mathbf{E}}{\partial t}\right) = 0
$$

This suggests modifying Ampere's law to:

$$
\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
$$

Now taking the divergence gives zero identically, consistent with charge conservation. The Term
$\mu_0 \varepsilon_0\,\partial\mathbf{E}/\partial t$ is the **displacement current**.

**Physical interpretation.** The displacement current represents the time-varying electric field
That produces a magnetic field just as a real current does. It is essential inside capacitors, Where
$\mathbf{J} = 0$ but $\partial\mathbf{E}/\partial t \neq 0$.

### 4.6 Electromagnetic Induction: Worked Examples

<details>
<summary>Example: Loop falling through a magnetic field</summary>

A rectangular loop of width $w$ Height $\ell$ And resistance $R$ falls vertically under Gravity
through a region of uniform magnetic field $\mathbf{B} = B\,\hat{\mathbf{x}}$ confined To a
horizontal strip of height $h$.

As the loop enters the field (top edge in, bottom edge out), the flux is $\Phi_B = Bwx$ where $x$ is
the distance the top edge has penetrated.

The induced EMF: $\mathcal{E} = -Bw\,dx/dt = -Bwv$.

The induced current: $I = Bwv/R$ Flowing to oppose the change in flux (Lenz's law).

The braking force: $F = BwI = B^2w^2v/R$ (upward).

Terminal velocity: $mg = B^2w^2v_{\mathrm{term}/R \implies v_{\mathrm{term} = mgR/(B^2w^2)}}$.

While entirely inside the field, $\Phi_B$ is constant, so $\mathcal{E} = 0$ and the loop Falls
freely. As it exits, the braking force reappears. $\blacksquare$

</details>

**Mutual inductance.** When circuit 1 produces flux $\Phi_{21}$ through circuit 2:

$$
M = \frac{\Phi_{21}}{I_1}
$$

The EMF induced in circuit 2 by a changing current in circuit 1:

$$
\mathcal{E}_2 = -M\frac{dI_1}{dt}
$$

**Self-inductance.** A circuit carrying current $I$ produces flux $\Phi$ through itself:

$$
L = \frac{N\Phi}{I}
$$

The back-EMF:

$$
\mathcal{E} = -L\frac{dI}{dt}
$$

**Energy stored** in an inductor:

$$
U = \frac{1}{2}LI^2
$$

**Example: Solenoid.** A long solenoid of length $\ell$ with $N$ turns, cross-sectional area $A$:

$$
L = \frac{\mu_0 N^2 A}{\ell}
$$

## Intuition

Electrodynamics is the physics of how changing fields create each other. Faraday's law says a changing magnetic field whips up an electric field like stirring tea creates a whirlpool. The displacement current is Maxwell's brilliant addition: a changing electric field produces a magnetic field just as a real current does, which is what allows electromagnetic waves to propagate through empty space. Lenz's law is nature's stubbornness: when you try to change the magnetic flux through a loop, the loop fights back by inducing a current that opposes the change. This is why a magnet falling through a copper pipe slows down even though copper is not magnetic. Self-inductance is like electrical inertia: an inductor resists changes in current the way a massive object resists changes in velocity. The energy stored in an inductor's magnetic field is like the kinetic energy of a moving mass.

## Common Mistakes

**Mistake 1: Forgetting the minus sign in Faraday's law**
The induced EMF is $\mathcal{E} = -d\Phi_B/dt$, not $+d\Phi_B/dt$. The minus sign encodes Lenz's law: the induced current opposes the change in flux that produced it. Dropping the sign leads to predictions of perpetual motion machines where induced currents accelerate rather than resist motion.

**Mistake 2: Treating displacement current as actual charge flow**
The displacement current $\mu_0\varepsilon_0\,\partial\mathbf{E}/\partial t$ is not a real current carried by moving charges. It is a term in Maxwell's equations that accounts for the magnetic field produced by a time-varying electric field. Inside a charging capacitor, $\mathbf{J} = 0$ but $\partial\mathbf{E}/\partial t \neq 0$, so the displacement current fills the gap.

**Mistake 3: Applying Faraday's law to non-conservative fields**
Faraday's law $\nabla \times \mathbf{E} = -\partial\mathbf{B}/\partial t$ applies to induced electric fields, which are non-conservative. Students sometimes attempt to define a scalar potential for these fields, but $\mathbf{E} \neq -\nabla V$ when $\partial\mathbf{B}/\partial t \neq 0$. The scalar potential formulation only works in the static limit.

:::note[Quick check]

1. (E) A loop of radius $R = 5\,\text{cm}$ sits in $\mathbf{B} = B_0\cos(\omega t)\,\hat{\mathbf{z}}$ with $B_0 = 0.2\,\text{T}$ and $\omega = 20\,\text{rad/s}$. Compute the EMF's amplitude, and state the induced current's direction when $\sin(\omega t) > 0$ and $\mathbf{B}$ points up but is decreasing.
2. (M) Derive the sliding-rod EMF $\mathcal{E} = BLv$ from the Lorentz force on the rod's charges, including the surface charge that builds until equilibrium, and check it against $-d\Phi_B/dt$.
3. (M) A bar magnet falls through a copper ring. Decide the induced current's direction as the magnet approaches, and account for the ring's heating: where does that energy come from?
4. (M) Classify by mechanism: transformer, rotating generator, induction cooktop, chemical battery. Which term of the induced field drives each: the $-\partial \mathbf{B}/\partial t$ transformer EMF or the $\mathbf{v} \times \mathbf{B}$ motional EMF?
5. (M) Trap: 'an EMF acts equally at every point of the circuit.' Decide whether this is right, and locate where the driving field actually lives in (a) a stationary coil in a changing field and (b) a sliding rod.
6. (H) Reproduce Maxwell's correction: show $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ contradicts charge conservation whenever $\partial \rho/\partial t \ne 0$, then repair it using Gauss's law, deriving the displacement-current term from the continuity equation.
7. (M) A copper pendulum swings between magnet poles and stops dead; a slotted copper pendulum of identical size swings freely. Decide why the slots kill the braking.
8. (H) Take the curl of Faraday's law, substitute the Ampere-Maxwell law, and show that induction plus displacement current is exactly a wave equation: identify the mechanism that carries light.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Amplitude $\mathcal{E}_0 = \pi R^2 B_0 \omega = \pi (0.0025)(0.2)(20) \approx 31\,\text{mV}$. When upward flux is decreasing, the induced current flows to create upward $\mathbf{B}$: counterclockwise seen from above. The verification hook: the amplitude scales linearly in $R^2$, $B_0$, and $\omega$. **2.** Charges in the moving rod feel $q\mathbf{v} \times \mathbf{B}$ along it; they pile up until the electrostatic field balances the drive in the stationary parts, leaving $\mathcal{E} = \int (\mathbf{E} + \mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} = vBL$ concentrated in the rod. The flux rule gives $-d(BLx)/dt = -BLv$: same magnitude, and the sign matches because Lenz makes the induced force oppose the rod's motion. **3.** As the magnet approaches (flux growing), the ring's current flows to oppose it, repelling the magnet; after it passes, the current reverses to keep it from leaving. The heat is real: it comes from the magnet's mechanical energy, which is why the magnet falls slower than free fall, the damped-fall experiment that shows Lenz's sign is not optional. **4.** Transformer and induction cooktop: transformer EMF, driven by $-\partial \mathbf{B}/\partial t$ with nothing moving. Rotating generator: motional EMF, $\mathbf{v} \times \mathbf{B}$ in the moving conductors (though both frames describe it). Chemical battery: neither, it is electrochemistry, which is why the classification starts by excluding it. **5.** Wrong in both cases. (a) In the stationary coil the driving field is the induced $\mathbf{E}$, which curls around $\partial \mathbf{B}/\partial t$ and is distributed, but not uniform: it concentrates where the flux changes fastest. (b) In the rod the drive is $\mathbf{v} \times \mathbf{B}$, living only in the moving segment; the rails and resistor carry the current but host no drive. EMF is a line integral, not a point field, which is exactly why the trap tempts. **6.** Taking the divergence gives $0 = \mu_0 \nabla \cdot \mathbf{J}$, demanding $\nabla \cdot \mathbf{J} = 0$ always, while continuity gives $\nabla \cdot \mathbf{J} = -\partial \rho/\partial t$: any accumulating charge breaks it. Rewriting continuity with Gauss as $\nabla \cdot \mathbf{J} = -\nabla \cdot (\varepsilon_0 \partial \mathbf{E}/\partial t)$ shows the missing term: $\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \partial \mathbf{E}/\partial t$. **7.** Eddy currents need closed loops; the slots cut every loop to a sliver, so the induced EMFs cannot integrate into large circulating currents and their opposing fields collapse. The braking is proportional to the loop area the pendulum presents, which is the design rule behind laminated transformer cores. **8.** $\nabla \times (\nabla \times \mathbf{E}) = -\partial_t (\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \partial_t^2 \mathbf{E} - \mu_0 \partial_t \mathbf{J}$; in vacuum $\mathbf{J} = 0$ and $\nabla \cdot \mathbf{E} = 0$ reduce this to $\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \partial_t^2 \mathbf{E}$ at speed $c$. Induction is not a curiosity of coils: it is the mechanism of light itself, which is the next chapter's subject.

</div>
</details>

:::

## Cross-References

- **[Maxwell's Equations](/3-electromagnetism/1_maxwell-s-equations/)**: Faraday's law and the displacement current are two of Maxwell's four equations that govern electrodynamics.
- **[Magnetostatics](/3-electromagnetism/3_magnetostatics/)**: Magnetostatics is the static limit where time derivatives vanish, describing steady currents without induction.
- **[The Wave Equation](/4-optics-and-waves/1_the-wave-equation/)**: The wave equation for electromagnetic fields follows from Maxwell's equations and describes light propagation.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Related in this track

- [Advanced Electrodynamics](/3-electromagnetism/11_advanced-electrodynamics/)
- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/)
- [Magnetostatics](/3-electromagnetism/3_magnetostatics/)
- [Maxwell's Equations](/3-electromagnetism/1_maxwell-s-equations/)
