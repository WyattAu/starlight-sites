---

date: 2026-07-23T21:57:32+01:00
title: "Magnetostatics"
tags:
  - Physics
  - University
description: "The magnetic field due to a steady current in a wire element : Comprehensive educational content coverage with definitions and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "3_magnetostatics", "url": "https://physics.wyattau.com/3-electromagnetism/3_magnetostatics"}]
}
</script>

**History.** Hans Christian Orsted's April 1820 lecture demonstration (a compass needle twitching near a live wire) reached Paris within months, and Jean-Baptiste Biot with the young Felix Savart had measured the field's $1/r$ law by October, using a torsion balance, with Laplace reducing their data to the element formula this section states. Andre-Marie Ampere, working from Orsted's news, built the full mathematical theory of current-on-current forces by 1827, a speed of composition that earned him the title 'the Newton of electricity'. The vector potential entered later, through Kelvin (1847) and Maxwell, as the mathematical object this chapter's second half develops.

### 3.1 The Biot-Savart Law

The magnetic field due to a steady current $I$ in a wire element $d\mathbf{l}$:

$$
d\mathbf{B} = \frac{\mu_0 I}{4\pi} \frac{d\mathbf{l} \times \hat{\mathbf{r}}}{r^2}
$$

For a complete circuit:

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0 I}{4\pi} \oint \frac{d\mathbf{l} \times \hat{\mathbf{r}}"}{|\mathbf{r} - \mathbf{r}'|^2}
$$

**Ponder (attempt the shape).** You are Orsted's Parisian colleagues in 1820: a compass needle near a straight wire settles perpendicular to it, circling as the current grows. Attempt to derive the field's radial dependence from symmetry alone, before any measurement: which symmetry survives, and what does an Amperian circle then force?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

An infinite straight current is invariant under translations along the wire and rotations about it: $\mathbf{B}$ can depend only on $r$ and must be azimuthal ($\hat{\boldsymbol{\phi}}$). On a circle of radius $r$, $B$ is constant and tangential, so Ampere's law forces $B \cdot 2\pi r = \mu_0 I$: the $1/r$ law followed from symmetry in 1820 before Biot and Savart's instruments confirmed it.

</div>
</details>

### 3.2 Ampere's Law

For steady currents ($\partial \mathbf{E} / \partial t = 0$):

$$
\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc}}
$$

**Example: Infinite straight wire** carrying current $I$.

By cylindrical symmetry, $B$ is constant on circles centred on the wire. Choose an Amperian loop of
Radius $r$:

$$
\oint \mathbf{B} \cdot d\mathbf{l} = B \cdot 2\pi r = \mu_0 I \implies B = \frac{\mu_0 I}{2\pi r}
$$

**Example: Solenoid.** For a long solenoid with $n$ turns per unit length carrying current $I$:

$$
B = \mu_0 n I \quad \mathrm{(inside)}, \quad B = 0 \quad \mathrm{(outside)}
$$

**Ponder (attempt the representation).** The condition $\nabla \cdot \mathbf{B} = 0$ looks like a constraint to fight. Attempt instead to exploit it: what does a vanishing divergence suggest about representing $\mathbf{B}$ as a derivative of something else, and what freedom is left in that something? Why is $\mathbf{A}$ called less physical than $\mathbf{B}$?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

A divergence-free field is (in ordinary domains) the curl of something: $\mathbf{B} = \nabla \times \mathbf{A}$, since $\nabla \cdot (\nabla \times \mathbf{A}) \equiv 0$. The representation is not unique: $\mathbf{A} \to \mathbf{A} + \nabla \chi$ leaves $\mathbf{B}$ untouched (curl of a gradient is zero), the gauge freedom. $\mathbf{B}$ is what forces measure; $\mathbf{A}$ is convention plus boundary data, at least classically, and the gauge choice (for instance $\nabla \cdot \mathbf{A} = 0$) is exactly the freedom the derivations below will spend.

</div>
</details>

### 3.3 Magnetic Vector Potential

Since $\nabla \cdot \mathbf{B} = 0$ We can write $\mathbf{B} = \nabla \times \mathbf{A}$ Where
$\mathbf{A}$ is the **magnetic vector potential**.

In the Coulomb gauge ($\nabla \cdot \mathbf{A} = 0$), the vector potential satisfies

$$
\nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}
$$

This is Poisson's equation for each component of $\mathbf{A}$.

For a current loop, the solution is:

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\, d^3\mathbf{r}'
$$

### 3.4 Additional Ampere's Law Examples

**Example: Toroid.** A toroid with $N$ turns carrying current $I$ has inner radius $a$ and outer
Radius $b$.

By symmetry, $\mathbf{B}$ is tangential and constant on circular Amperian loops inside the Toroid.
For a loop of radius $r$ ($a \lt r \lt b$):

$$
B \cdot 2\pi r = \mu_0 N I \implies B = \frac{\mu_0 N I}{2\pi r}
$$

For $r \lt a$ or $r \gt b$: $B = 0$ (no enclosed current).

Unlike a solenoid, the field inside a toroid is _not_ uniform --- it varies as $1/r$.

**Example: Infinite current sheet.** A sheet in the $xy$-plane carries surface current density
$\mathbf{K} = K\,\hat{\mathbf{x}}$.

By symmetry, $\mathbf{B}$ is parallel to $\pm\hat{\mathbf{y}}$ and depends only on $z$. Choose a
rectangular Amperian loop straddling the sheet with sides parallel to $\hat{\mathbf{y}}$:

$$
B \cdot 2L = \mu_0 K L \implies B = \frac{\mu_0 K}{2}
$$

The field is uniform on each side, pointing in opposite directions:

$$
\mathbf{B} = \begin{cases} +\frac{\mu_0 K}{2}\,\hat{\mathbf{y}} & z \gt 0 \\[4pt] -\frac{\mu_0 K}{2}\,\hat{\mathbf{y}} & z \lt 0 \end{cases}
$$

### 3.5 Magnetic Dipole Moment

A current loop carrying current $I$ enclosing area $\mathbf{a}$ has **magnetic dipole moment**:

$$
\mathbf{m} = I\mathbf{a}
$$

For a planar loop of $N$ turns: $\mathbf{m} = NIA\,\hat{\mathbf{n}}$ Where $A$ is the area And
$\hat{\mathbf{n}}$ is the unit normal given by the right-hand rule.

**Field of a magnetic dipole** (at position $\mathbf{r}$ from the dipole):

$$
\mathbf{B}_{\mathrm{dip}(\mathbf{r}) = \frac{\mu_0}{4\pi}\left[\frac{3(\mathbf{m} \cdot \hat{\mathbf{r}})\hat{\mathbf{r}} - \mathbf{m}}{r^3}\right]}
$$

This has the same angular structure as the electric dipole field.

**Torque on a dipole** in a uniform field:

$$
\boldsymbol{\tau} = \mathbf{m} \times \mathbf{B}
$$

**Energy of a dipole** in a field:

$$
U = -\mathbf{m} \cdot \mathbf{B}
$$

**Force on a dipole** in a non-uniform field:

$$
\mathbf{F} = \nabla(\mathbf{m} \cdot \mathbf{B})
$$

<details>
<summary>Example: Field on the axis of a circular loop</summary>

A circular loop of radius $R$ carries current $I$. On the axis at distance $z$ from the centre,
Every element $d\mathbf{l}$ is perpendicular to $\hat{\mathbf{r}}$ So:

$$
d\mathbf{B} = \frac{\mu_0 I}{4\pi}\frac{dl}{R^2 + z^2}
$$

The component perpendicular to the axis cancels by symmetry. The axial component is:

$$
B_z = \oint dB\,\sin\alpha = \frac{\mu_0 I}{4\pi(R^2+z^2)}\frac{R}{\sqrt{R^2+z^2}}\oint dl = \frac{\mu_0 I R^2}{2(R^2+z^2)^{3/2}}
$$

For $z \gg R$: $B_z \approx \frac{\mu_0 I R^2}{2z^3} = \frac{\mu_0}{4\pi}\frac{2\mathbf{m}}{z^3}$
which matches the dipole formula with $\mathbf{m} = I\pi R^2\,\hat{\mathbf{z}}$. $\blacksquare$

</details>

### 3.6 Vector Potential: Detailed Derivation

Starting from the Biot-Savart law and the identity
$\frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r}-\mathbf{r}'|^3} = -\nabla\frac{1}{|\mathbf{r}-\mathbf{r}'|}$:

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int \mathbf{J}(\mathbf{r}') \times \frac{(\mathbf{r}-\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|^3}\,d^3\mathbf{r}' = -\frac{\mu_0}{4\pi}\int \mathbf{J}(\mathbf{r}') \times \nabla\frac{1}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'
$$

Using the product rule
$\mathbf{J} \times (\nabla f) = \nabla \times (f\mathbf{J}) - f(\nabla \times \mathbf{J})$ And
noting that $\nabla \times \mathbf{J}(\mathbf{r}') = 0$ (since $\mathbf{J}$ depends on
$\mathbf{r}'$ Not $\mathbf{r}$):

$$
\mathbf{B}(\mathbf{r}) = \frac{\mu_0}{4\pi}\nabla \times \int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'
$$

Comparing with $\mathbf{B} = \nabla \times \mathbf{A}$:

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|}\,d^3\mathbf{r}'
$$

This is the general solution for the vector potential in the Coulomb gauge. For a line current:

$$
\mathbf{A}(\mathbf{r}) = \frac{\mu_0 I}{4\pi}\oint \frac{d\mathbf{l}'}{|\mathbf{r}-\mathbf{r}'|}
$$

<details>
<summary>Example: Vector potential of an infinite wire</summary>

An infinite straight wire along the $z$-axis carries current $I$. In cylindrical coordinates
$(s, \phi, z)$ The vector potential can only depend on $s$ by symmetry, and must point along
$\hat{\mathbf{z}}$.

$\mathbf{A}(s) = \frac{\mu_0 I}{4\pi}\int_{-\infty}^{\infty}\frac{dz'}{\sqrt{s^2 + z'^2}}\,\hat{\mathbf{z}}$

This integral diverges logarithmically. Introduce a cutoff at $z' = \pm L$:

$\mathbf{A}(s) \approx \frac{\mu_0 I}{2\pi}\ln\!\left(\frac{2L}{s}\right)\hat{\mathbf{z}} + \mathrm{const}$

Since $\mathbf{A}$ is defined only up to a gauge transformation, we write:

$$
\mathbf{A}(s) = -\frac{\mu_0 I}{2\pi}\ln\!\left(\frac{s}{s_0}\right)\hat{\mathbf{z}}
$$

Verify:
$\mathbf{B} = \nabla \times \mathbf{A} = -\frac{\partial A_z}{\partial s}\,\hat{\boldsymbol{\phi}} = \frac{\mu_0 I}{2\pi s}\,\hat{\boldsymbol{\phi}}$.
This matches the Ampere's law result. $\blacksquare$

</details>

### 3.7 Magnetization and the H Field

**Magnetization.** The **magnetization** $\mathbf{M}$ is the magnetic dipole moment per unit volume.
It produces **bound currents**:

$$
\mathbf{J}_b = \nabla \times \mathbf{M}, \quad \mathbf{K}_b = \mathbf{M} \times \hat{\mathbf{n}}
$$

**The H field** (magnetic field intensity) is defined as:

$$
\mathbf{H} = \frac{1}{\mu_0}\mathbf{B} - \mathbf{M}
$$

Ampere's law for $\mathbf{H}$:

$$
\nabla \times \mathbf{H} = \mathbf{J}_f
$$

$$
\oint \mathbf{H} \cdot d\mathbf{l} = I_{f,\mathrm{enc}}
$$

This is simpler than Ampere's law for $\mathbf{B}$ because only _free_ currents appear.

**Linear magnetic materials.** For isotropic linear materials:

$$
\mathbf{M} = \chi_m \mathbf{H}, \quad \mathbf{B} = \mu \mathbf{H}
$$

Where $\chi_m$ is the magnetic susceptibility and $\mu = \mu_0(1 + \chi_m)$ is the permeability. The
**relative permeability** is $\mu_r = 1 + \chi_m$.

### 3.8 Magnetic Materials

**Diamagnetic materials** ($\chi_m \lt 0$, $\lvert\chi_m\rvert \ll 1$): Weakly repelled by Magnetic
fields. The induced magnetization opposes the applied field (Lenz's law at the Atomic level).
Examples: bismuth, copper, water.

**Paramagnetic materials** ($\chi_m \gt 0$, $\chi_m \ll 1$): Weakly attracted by magnetic fields.
Atomic dipoles align partially with the applied field. Examples: aluminium, platinum, oxygen.

**Ferromagnetic materials** ($\chi_m \gg 1$): Strongly attracted by magnetic fields. Exhibit
**hysteresis**: the magnetization depends on the history of the applied field.

The **hysteresis loop** traces $\mathbf{B}$ vs $\mathbf{H}$ as the external field cycles. Key
Features:

- **Remanence** $B_r$: the residual field when $H = 0$.
- **Coercivity** $H_c$: the field required to demagnetize the material.
- **Saturation**: the maximum magnetization achievable.

For soft ferromagnets (iron, nickel), $H_c$ is small and the hysteresis loop is narrow. For hard
ferromagnets (permanent magnets), $H_c$ is large.

## Intuition

Magnetic fields are the universe's way of pushing things sideways. Unlike electric fields that push along the field line, magnetic forces always act perpendicular to motion, which means they can change the direction of a moving charge but never its speed. The Biot-Savart law is like measuring the magnetic footprint of every tiny current element and adding them up. Ampere's law is the magnetic equivalent of Gauss's law: draw a loop around a current, and the magnetic field integrated along that loop tells you how much current passes through. The vector potential is a mathematical shortcut that simplifies calculations, even though it is not directly measurable. Ferromagnetism is like a crowd of tiny compass needles that all want to point the same way: once aligned, they stay aligned even after the external field is removed, which is why permanent magnets exist.

:::caution
is an auxiliary field Convenient for problems with free currents. The names "magnetic field" and
"magnetic field Intensity" vary across textbooks --- always check which symbol a given text
associates with Which name. In this document, $\mathbf{B}$ is the magnetic field and $\mathbf{H}$ is
the Auxiliary H field.
:::

### 3.9 Common Mistakes

**Mistake 1: Confusing the Biot-Savart law with Ampere's law**
The Biot-Savart law gives the magnetic field from any current distribution by direct integration, while Ampere's law relates the line integral of $\mathbf{B}$ to the enclosed current. Ampere's law is easier to use when high symmetry exists (infinite wire, solenoid), but the Biot-Savart law is needed for finite or asymmetric configurations. Do not apply Ampere's law without verifying cylindrical or planar symmetry.

**Mistake 2: Misapplying the right-hand rule**
The right-hand rule for the magnetic field of a current element states that $d\mathbf{B}$ is in the direction of $d\mathbf{l} \times \hat{\mathbf{r}}$. Students often reverse the direction by curling the fingers in the wrong direction or using the left hand. For a straight wire, curl your right-hand fingers around the wire with your thumb pointing in the current direction; your fingers point in the direction of $\mathbf{B}$.

**Mistake 3: Assuming $\mathbf{B}$ is always parallel to $\mathbf{H}$**
In linear magnetic materials, $\mathbf{B} = \mu \mathbf{H}$, so they are parallel. But in ferromagnetic materials, the relationship is nonlinear and hysteretic: $\mathbf{B}$ depends on the history of $\mathbf{H}$. The $\mathbf{H}$ field is defined as $\mathbf{H} = \mathbf{B}/\mu_0 - \mathbf{M}$, and it is the auxiliary field that simplifies problems with free currents, not a fundamental field.

:::note[Quick check]

1. (E) A long solenoid has $n = 1000$ turns per metre carrying $I = 2\,\text{A}$. Choose the Amperian loop that isolates the interior field, and compute $B$ inside in millitesla.
2. (M) Derive $B = \mu_0 I/(2\pi r)$ for an infinite wire by integrating the Biot-Savart law, using $\int_{-\infty}^{\infty} a\, dz/(a^2 + z^2)^{3/2} = 2/a$ with $a = r$.
3. (M) Given the wire's vector potential in Coulomb gauge, $A_z = -(\mu_0 I/2\pi)\ln(r/r_0)$, compute $\mathbf{B} = \nabla \times \mathbf{A}$ and recover the $1/r$ field; then explain why the constant $r_0$ inside the logarithm is unobservable.
4. (M) Decide which distributions an Ampere-loop solution can handle and which force Biot-Savart: an infinite wire, an infinite sheet of current, a finite-length solenoid, a toroid. State the criterion.
5. (M) Trap: 'inside iron, use $\mathbf{H}$ in the force law $q\mathbf{v} \times \mathbf{H}$, since $\mathbf{H}$ is the field in matter.' Decide whether this is right, and state which field the Lorentz force always uses and why.
6. (H) Show that $\mathbf{B} = \nabla \times \mathbf{A}$ makes $\nabla \cdot \mathbf{B} = 0$ automatic, then substitute into Ampere's law and use the Coulomb gauge to derive the vector Poisson equation $\nabla^2 \mathbf{A} = -\mu_0 \mathbf{J}$.
7. (M) A cylinder of radius $R$ carries uniform magnetisation $M\hat{\mathbf{z}}$. Compute the bound surface current from $\mathbf{K}_b = \mathbf{M} \times \hat{\mathbf{n}}$, and name the familiar device it makes the magnet equivalent to.
8. (H) A loop of radius $a$ carries $I$. Show that on-axis, for $z \gg a$, $B \approx \mu_0 m/(2\pi z^3)$ with $m = I\pi a^2$, and compare the falloff with an electric dipole's field: what does this exponent pair promise for Chapter 5's waves?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** A rectangular loop with one long side deep inside and one far outside: the outside leg contributes nothing in the ideal limit and the short sides are perpendicular to $\mathbf{B}$, so $B L = \mu_0 n L I$ gives $B = \mu_0 n I = 4\pi \times 10^{-7} \times 2000 \approx 2.5\,\text{mT}$. **2.** An element $dz$ at distance $\sqrt{a^2 + z^2}$ contributes $dB = (\mu_0 I/4\pi)\, a\, dz/(a^2 + z^2)^{3/2}$ (the cross product kills the $z$-components by symmetry); integrating along the wire gives $B = (\mu_0 I/4\pi)(2/a) = \mu_0 I/(2\pi a)$ with $a = r$: Ampere's law verified element by element. **3.** In cylindrical coordinates $B_\phi = -\partial A_z/\partial r = \mu_0 I/(2\pi r)\hat{\boldsymbol{\phi}}$: recovered. The constant $r_0$ shifts $A_z$ by an additive constant, a gradient of a linear function in $z$, whose curl is zero: a gauge artefact, invisible to every force measurement. **4.** The loop method needs the symmetry to fix $\mathbf{B}$'s direction and make its magnitude constant on a loop: wire and sheet yes, toroid yes (circular loops), finite solenoid no (end effects break the constancy): Biot-Savart by integration, or the boundary conditions of Chapter 4. **5.** The Lorentz force always uses $\mathbf{B}$, in matter and out: $q\mathbf{v} \times \mathbf{B}$ is the microscopic law. $\mathbf{H} = \mathbf{B}/\mu_0 - \mathbf{M}$ is auxiliary bookkeeping whose curl sees only free currents, and in ferromagnets $\mathbf{B}$ is not even proportional to $\mathbf{H}$, so substituting $\mathbf{H}$ into the force law is doubly wrong. **6.** $\nabla \cdot (\nabla \times \mathbf{A}) \equiv 0$: the divergence of a curl is an identity, so the no-monopole condition costs nothing. Then $\nabla \times \mathbf{B} = \nabla \times (\nabla \times \mathbf{A}) = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2 \mathbf{A} = \mu_0 \mathbf{J}$; the Coulomb gauge $\nabla \cdot \mathbf{A} = 0$ deletes the gradient term, leaving one Poisson equation per component, solved as electrostatics in disguise. **7.** $\hat{\mathbf{n}} = \hat{\mathbf{r}}$ on the curved surface, so $\mathbf{K}_b = M\hat{\mathbf{z}} \times \hat{\mathbf{r}} = M\hat{\boldsymbol{\phi}}$: a surface current circulating like a solenoid's, of density $K = M$. A long uniformly magnetised cylinder is therefore equivalent to a solenoid with $nI = M$, giving $B \approx \mu_0 M$ inside: this is why bar magnets behave like solenoids. **8.** The exact on-axis field $B = \mu_0 I a^2/(2(a^2 + z^2)^{3/2})$ becomes $\mu_0 I a^2/(2z^3) = \mu_0 m/(2\pi z^3)$ with $m = I\pi a^2$: the magnetic dipole falls as $1/z^3$, the electric dipole's exponent exactly. The pair's shared structure is what lets one current's field induce EMFs in another loop, and in Chapter 5 the displacement current lets the pair radiate.

</div>
</details>

:::

## Cross-References

- **[Maxwell's Equations](/3-electromagnetism/1_maxwell-s-equations/)**: Magnetostatics is the time-independent limit of Maxwell's equations, where Faraday's law and the displacement current vanish.
- **[Electrodynamics](/3-electromagnetism/4_electrodynamics/)**: Electrodynamics extends magnetostatics to include time-varying fields and induction effects.
- **[Solid State Physics: Electronic Band Structure](/6-solid-state-physics/5_electronic-band-structure/)**: Magnetic properties of materials arise from electron band structure and exchange interactions.
- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Related in this track

- [Advanced Electrodynamics](/3-electromagnetism/11_advanced-electrodynamics/)
- [Electrodynamics](/3-electromagnetism/4_electrodynamics/)
- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/)
- [Maxwell's Equations](/3-electromagnetism/1_maxwell-s-equations/)
