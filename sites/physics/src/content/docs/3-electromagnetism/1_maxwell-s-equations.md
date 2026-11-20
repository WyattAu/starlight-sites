---

date: 2026-07-23T21:57:32+01:00
title: "Maxwell's Equations"
tags:
  - Physics
  - University
description: "Maxwell' s equations are the foundation of classical electromagnetism. In SI unit Comprehensive educational content coverage with definitions and practice pr"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "1_maxwell S Equations", "url": "https://physics.wyattau.com/3-electromagnetism/1_maxwell-s-equations"}]
}
</script>

**History.** James Clerk Maxwell published twenty component equations in *A Dynamical Theory of the Electromagnetic Field* (1865); Oliver Heaviside condensed them into the four vector form used here in 1884. The one term Maxwell added with no experimental prompt was the displacement current $\mu_0\varepsilon_0 \partial\mathbf{E}/\partial t$: he needed it to reconcile Ampere's law with charge conservation, and it promptly predicted waves travelling at $1/\sqrt{\mu_0\varepsilon_0}$, the measured speed of light. Heinrich Hertz's 1887 experiments produced and detected those waves, and Maxwell's theory became the first great unification in physics.

### 1.1 The Four Equations

Maxwell's equations are the foundation of classical electromagnetism. In SI units:

**Integral Form:**

$$
\oint_S \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{\mathrm{enc}}}{\varepsilon_0} \quad \mathrm{(Gauss's\ Law)}}
$$

$$
\oint_S \mathbf{B} \cdot d\mathbf{A} = 0 \quad \mathrm{(Gauss's\ Law\ for\ Magnetism)}
$$

$$
\oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt} \quad \mathrm{(Faraday's\ Law)}
$$

$$
\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{\mathrm{enc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} \quad \mathrm{(Ampere{-}Maxwell\ Law)}}
$$

**Differential Form:**

$$
\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0} \quad \mathrm{(Gauss's\ Law)}
$$

$$
\nabla \cdot \mathbf{B} = 0 \quad \mathrm{(Gauss's\ Law\ for\ Magnetism)}
$$

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} \quad \mathrm{(Faraday's\ Law)}
$$

$$
\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t} \quad \mathrm{(Ampere{-}Maxwell\ Law)}
$$

Where $\rho$ is the charge density, $\mathbf{J}$ is the current density, $\varepsilon_0$ is the
permittivity Of free space, and $\mu_0$ is the permeability of free space.

### 1.2 Derivation from Integral to Differential Form

**Gauss's Law.** Apply the divergence theorem to the integral form:

$$
\oint_S \mathbf{E} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{E})\, dV = \frac{1}{\varepsilon_0}\int_V \rho\, dV
$$

Since this holds for any volume $V$: $\nabla \cdot \mathbf{E} = \rho / \varepsilon_0$.

**Faraday's Law.** Apply Stokes' theorem:

$$
\oint_C \mathbf{E} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{A} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{A}
$$

Since this holds for any surface $S$: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$.

**Gauss's Law for Magnetism.** By the divergence theorem:

$$
\oint_S \mathbf{B} \cdot d\mathbf{A} = \int_V (\nabla \cdot \mathbf{B})\, dV = 0
$$

Since $V$ is arbitrary: $\nabla \cdot \mathbf{B} = 0$. This expresses the absence of magnetic
monopoles.

**Ampere-Maxwell Law.** Apply Stokes' theorem:

$$
\oint_C \mathbf{B} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{B}) \cdot d\mathbf{A} = \mu_0 \int_S \mathbf{J} \cdot d\mathbf{A} + \mu_0 \varepsilon_0 \frac{d}{dt}\int_S \mathbf{E} \cdot d\mathbf{A}
$$

Since $S$ is arbitrary:
$\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0\, \partial \mathbf{E}/\partial t$.

**Ponder (attempt the contradiction).** A capacitor is being charged. Apply Ampere's original law $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ to two surfaces sharing one loop: a surface cut by the wire, and a surface passing between the plates. Attempt the two computations and confront the contradiction; then invent the repair.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The wire surface gives $\oint \mathbf{B} \cdot d\mathbf{l} = \mu_0 I$; the gap surface sees no conduction current and gives zero: one loop, two answers. The repair must add a term that equals $I$ through the gap: $\mu_0 \varepsilon_0 \partial \Phi_E/\partial t$ works, because between the plates $\Phi_E$ tracks the accumulated charge. The continuity equation is the statement that this repair is not optional: it is the price of charge conservation.

</div>
</details>

### 1.3 Continuity Equation

Taking the divergence of the Ampere-Maxwell law:

$$
\nabla \cdot (\nabla \times \mathbf{B}) = 0 = \mu_0 \nabla \cdot \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial}{\partial t}(\nabla \cdot \mathbf{E})
$$

Using Gauss's law: $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$.

This is the **continuity equation**, expressing conservation of charge.

### 1.4 Boundary Conditions at Interfaces

At an interface between two linear media (labelled 1 and 2) with surface normal $\hat{\mathbf{n}}$
Pointing from 2 into 1, Maxwell's equations impose four boundary conditions.

**Normal component of $\mathbf{D}$.** Apply Gauss's law for $\mathbf{D}$ to a thin pillbox
Straddling the interface:

$$
\oint \mathbf{D} \cdot d\mathbf{A} = \sigma_f A \implies D_{1n} - D_{2n} = \sigma_f
$$

**Tangential component of $\mathbf{E}$.** Apply Faraday's law to a rectangular loop Perpendicular to
the interface. As the loop height $\Delta h \to 0$ The flux through the Loop vanishes:

$$
\oint \mathbf{E} \cdot d\mathbf{l} = 0 \implies E_{1t} = E_{2t}
$$

In vector form: $\hat{\mathbf{n}} \times (\mathbf{E}_1 - \mathbf{E}_2) = \mathbf{0}$.

**Normal component of $\mathbf{B}$.** Apply Gauss's law for $\mathbf{B}$ to a pillbox:

$$
B_{1n} = B_{2n}
$$

**Tangential component of $\mathbf{H}$.** Apply Ampere's law for $\mathbf{H}$ to a loop
Perpendicular to the interface:

$$
\hat{\mathbf{n}} \times (\mathbf{H}_1 - \mathbf{H}_2) = \mathbf{K}_f
$$

Where $\mathbf{K}_f$ is the free surface current density.

**Summary** (no free charges or currents, $\sigma_f = 0$, $\mathbf{K}_f = \mathbf{0}$):

<div class="table-wrap">

| Field        | Normal component                              | Tangential component                          |
| ------------ | --------------------------------------------- | --------------------------------------------- |
| $\mathbf{E}$ | $\varepsilon_1 E_{1n} = \varepsilon_2 E_{2n}$ | $E_{1t} = E_{2t}$                             |
| $\mathbf{D}$ | $D_{1n} = D_{2n}$                             | $D_{1t}/\varepsilon_1 = D_{2t}/\varepsilon_2$ |
| $\mathbf{B}$ | $\mu_1 B_{1n} = \mu_2 B_{2n}$                 | $B_{1t}/\mu_1 = B_{2t}/\mu_2$                 |
| $\mathbf{H}$ | $\mu_2 H_{1n} = \mu_1 H_{2n}$                 | $H_{1t} = H_{2t}$                             |

</div>

### Intuition

The electric field is a force landscape: at every point in space, it assigns a vector representing the force that a positive test charge would experience at that location. Near a positive charge, the field points outward -- the "hill" slopes away from the source. Near a negative charge, the field points inward -- the "valley" slopes toward the source. The field lines are the contour lines of this landscape, and their density indicates the strength of the force.

Gauss's law says that the total "outflow" of the electric field through any closed surface equals the enclosed charge divided by the permittivity of free space. Physically, charge is a source (or sink) of field lines. Faraday's law says that a changing magnetic field creates a circulating electric field -- the force landscape twists and swirls when the magnetic environment changes. The beauty of Maxwell's equations is that they unify electricity and magnetism into a single field description: changing electric fields create magnetic fields (Ampere-Maxwell law) and changing magnetic fields create electric fields (Faraday's law), allowing electromagnetic waves to propagate through empty space as self-sustaining oscillations of the field landscape.

**Ponder (attempt the unification).** Take the source-free equations and attempt to eliminate $\mathbf{B}$ entirely: curl Faraday's law, substitute Ampere-Maxwell. What equation must $\mathbf{E}$ obey, and what happens when the measured constants $\mu_0$ and $\varepsilon_0$ are inserted into the wave speed?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Curl Faraday: $\nabla \times (\nabla \times \mathbf{E}) = -\partial_t (\nabla \times \mathbf{B}) = -\mu_0\varepsilon_0 \partial_t^2 \mathbf{E}$; with $\nabla \cdot \mathbf{E} = 0$ the left side is $-\nabla^2 \mathbf{E}$: a wave equation at speed $1/\sqrt{\mu_0\varepsilon_0} \approx 3 \times 10^8$ m/s. Maxwell inserted the constants from laboratory electricity and got the speed of light: 'we can scarcely avoid the inference that light consists in the transverse undulations of the same medium' (1865).

</div>
</details>

### 1.5 Worked Example: Deriving the Electromagnetic Wave Equation

**Problem.** Starting from Maxwell's equations in free space ($\rho = 0$,
$\mathbf{J} = \mathbf{0}$), Derive the wave equations for $\mathbf{E}$ and $\mathbf{B}$ And show that
the wave speed is $c = 1/\sqrt{\mu_0 \varepsilon_0}$.

<details>
<summary>Solution</summary>

In free space, Maxwell's equations reduce to:

$$
\nabla \cdot \mathbf{E} = 0, \quad \nabla \cdot \mathbf{B} = 0
$$

$$
\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}
$$

Take the curl of Faraday's law:

$$
\nabla \times (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}
$$

Apply the vector identity
$\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$.
Since $\nabla \cdot \mathbf{E} = 0$:

$$
-\nabla^2 \mathbf{E} = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}
$$

$$
\boxed{\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}}
$$

An identical calculation, taking the curl of the Ampere-Maxwell law, yields:

$$
\boxed{\nabla^2 \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}}
$$

Comparing with the standard wave equation
$\nabla^2 \mathbf{F} = \frac{1}{v^2}\frac{\partial^2 \mathbf{F}}{\partial t^2}$ The wave speed is:

$$
c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} \approx 2.998 \times 10^8\ \mathrm{m}/s
$$

$\blacksquare$

</details>

### 1.6 Worked Example: Gauss's Law for a Line Charge

**Problem.** An infinitely long line charge has linear charge density $\lambda$. Use Gauss's law to find the electric field at a distance $r$ from the line.

<details>
<summary>Solution</summary>

By symmetry, the electric field is radial and depends only on $r$. Choose a cylindrical Gaussian surface of radius $r$ and length $L$ coaxial with the line charge.

The electric flux through the curved surface is:
$$
\oint \mathbf{E} \cdot d\mathbf{A} = E \cdot 2\pi r L
$$

The flux through the end caps is zero (field is perpendicular to the normal).

The enclosed charge is:
$$
Q_{\text{enc}} = \lambda L
$$

Applying Gauss's law:
$$
E \cdot 2\pi r L = \frac{\lambda L}{\varepsilon_0}
$$

$$
E = \frac{\lambda}{2\pi \varepsilon_0 r}
$$

$\blacksquare$

**Common mistake.** Forgetting that the Gaussian surface must have the symmetry of the charge distribution. For a line charge, a cylinder is the appropriate choice.

</details>

### 1.7 Worked Example: Faraday's Law and Induced EMF

**Problem.** A circular loop of radius 0.1 m is placed in a magnetic field that varies as $B(t) = B_0 \sin(\omega t)$ where $B_0 = 0.5$ T and $\omega = 100$ rad/s. Find the induced EMF in the loop.

<details>
<summary>Solution</summary>

The magnetic flux through the loop is:
$$
\Phi_B = B \cdot A = B_0 \sin(\omega t) \cdot \pi r^2
$$

By Faraday's law, the induced EMF is:
$$
\mathcal{E} = -\frac{d\Phi_B}{dt} = -B_0 \pi r^2 \omega \cos(\omega t)
$$

Substituting values:
$$
\mathcal{E} = -0.5 \times \pi \times (0.1)^2 \times 100 \times \cos(100t)
$$

$$
\mathcal{E} = -1.57 \cos(100t) \text{ V}
$$

The maximum induced EMF is $|\mathcal{E}_{\text{max}}| = 1.57$ V.

$\blacksquare$

**Intuition.** The induced EMF is proportional to the rate of change of magnetic flux. When the field is changing fastest (at $t = 0$), the induced EMF is maximum. When the field reaches its peak (no change), the induced EMF is zero.

</details>

### 1.8 Worked Example: Ampere's Law for a Solenoid

**Problem.** A solenoid has $n = 1000$ turns per meter and carries a current $I = 2$ A. Find the magnetic field inside the solenoid.

<details>
<summary>Solution</summary>

By symmetry, the magnetic field inside a long solenoid is uniform and parallel to the axis. Choose a rectangular Amperian loop with one side inside the solenoid (length $l$) and one side outside.

The line integral of $\mathbf{B}$ around the loop is:
$$
\oint \mathbf{B} \cdot d\mathbf{l} = B l
$$

(The contribution from the outside is zero because $B \approx 0$ outside.)

The enclosed current is:
$$
I_{\text{enc}} = n l I
$$

Applying Ampere's law:
$$
B l = \mu_0 n l I
$$

$$
B = \mu_0 n I = 4\pi \times 10^{-7} \times 1000 \times 2 = 8\pi \times 10^{-4} \approx 2.51 \times 10^{-3} \text{ T}
$$

$\blacksquare$

**Common mistake.** Using the total number of turns instead of turns per meter. The formula uses $n = N/L$, not $N$.

</details>

### 1.9 Common Mistakes

**Mistake 1: Confusing the sources of electric and magnetic fields**
Electric fields are produced by electric charges ($\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$), while magnetic fields are produced by currents and changing electric fields ($\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0\varepsilon_0 \partial\mathbf{E}/\partial t$). There are no magnetic monopoles ($\nabla \cdot \mathbf{B} = 0$). Students sometimes assume magnetic fields are produced by magnetic charges analogous to electric charges.

**Mistake 2: Forgetting the displacement current term in Ampere's law**
The original Ampere's law $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ is inconsistent with the continuity equation. Maxwell's addition of the displacement current $\mu_0\varepsilon_0 \partial\mathbf{E}/\partial t$ fixes this and predicts electromagnetic waves. Omitting this term leads to incorrect predictions for time-varying fields, such as the charging of a capacitor.

**Mistake 3: Confusing integral and differential forms**
The integral form of Gauss's law $\oint \mathbf{E} \cdot d\mathbf{A} = Q_{\text{enc}}/\varepsilon_0$ applies to specific symmetric configurations, while the differential form $\nabla \cdot \mathbf{E} = \rho/\varepsilon_0$ is the general statement. Students often apply the integral form without verifying that the symmetry assumptions (spherical, cylindrical, or planar) are satisfied.

:::note[Quick check]

1. (E) For an infinite line charge of density $\lambda$, the field is $\mathbf{E} = \frac{\lambda}{2\pi\varepsilon_0 r}\hat{\mathbf{r}}$. Compute $\nabla \cdot \mathbf{E}$ for $r > 0$, then use the divergence theorem on a coaxial cylinder of length $L$ to show the axis carries exactly $\lambda L$ of charge.
2. (E) Derive the normal boundary condition $\hat{\mathbf{n}} \cdot (\mathbf{E}_2 - \mathbf{E}_1) = \sigma/\varepsilon_0$ from Gauss's law with a pillbox of vanishing height straddling a surface charge $\sigma$, and state what it gives at a conductor's surface.
3. (M) A uniform field $B_0$ through a loop of radius $a$ and resistance $R$ is driven to zero in time $\tau$. Compute the induced EMF and current, give the induced field's direction, and check the sign against Lenz's law.
4. (M) Decide in which cases Gauss's law alone determines $\mathbf{E}$ everywhere: (i) an infinite charged plane, (ii) a finite charged disk, (iii) a uniformly charged sphere, (iv) a dipole. State the criterion behind your decisions.
5. (M) Trap: a student says 'the displacement current between a capacitor's plates is real charge flowing through the gap.' Decide whether this is right, and identify what the displacement term actually is.
6. (H) Derive $\nabla^2 \mathbf{E} = \mu_0\varepsilon_0 \partial^2 \mathbf{E}/\partial t^2$ from the source-free equations in two moves (curl Faraday, substitute Ampere-Maxwell), then compute the wave speed from $\mu_0 = 4\pi \times 10^{-7}$ and $\varepsilon_0 = 8.85 \times 10^{-12}$.
7. (M) Use Ampere's law on a rectangular loop straddling a solenoid wall to show $B_{\text{in}} - B_{\text{out}} = \mu_0 n I$, and explain why the outside field vanishes in the long-solenoid limit.
8. (H) Take the divergence of the Ampere-Maxwell law, substitute Gauss's law, and derive $\nabla \cdot \mathbf{J} + \partial \rho/\partial t = 0$. Then show the pre-Maxwell law $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}$ contradicts this whenever $\partial \rho/\partial t \ne 0$.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The divergence is $(1/r)\,\partial(r E_r)/\partial r = 0$ away from the axis; the flux through the cylinder is $E_r \times 2\pi r L = \lambda L/\varepsilon_0$, so the enclosed charge is $\lambda L$: the entire charge sits on the singular axis, which is the verification hook for the field's $1/r$ form. **2.** Pillbox flux is $(E_{2n} - E_{1n})A$ as the height shrinks (side flux vanishes), equal to $\sigma A/\varepsilon_0$: the jump condition. At a conductor $\mathbf{E}_1 = 0$ inside, so $E_{\text{out},n} = \sigma/\varepsilon_0$. **3.** $\text{EMF} = \pi a^2 B_0/\tau$ (Faraday: flux change over time), $I = \pi a^2 B_0/(\tau R)$. The induced field points in the original direction, propping up the dying flux: opposing the change, exactly Lenz's sign. **4.** (i) and (iii) yes, (ii) and (iv) no. Criterion: $\mathbf{E}$'s direction and magnitude must be constant on a closed surface so $E$ can be pulled from the integral; the disk's off-axis field and the dipole's angular structure defeat that. **5.** No charge crosses the gap: $\mu_0 \varepsilon_0 \partial \mathbf{E}/\partial t$ is a time-varying field term that mimics a current's field-generation effects on every loop, which is why Maxwell's name for it has misled generations. The physical account is stored field energy, not transported charge. **6.** $\nabla \times (\nabla \times \mathbf{E}) = -\partial_t (\nabla \times \mathbf{B}) = -\mu_0\varepsilon_0 \partial_t^2 \mathbf{E}$, and $\nabla \cdot \mathbf{E} = 0$ reduces the left side to $-\nabla^2 \mathbf{E}$. Speed $c = 1/\sqrt{\mu_0 \varepsilon_0} = 1/\sqrt{4\pi \times 8.85 \times 10^{-19}} \approx 3.0 \times 10^8$ m/s: the measured speed of light, the verification hook. **7.** The loop encloses $nL$ turns and sees flux only where it pierces the wall: $B_{\text{in}} - B_{\text{out}} = \mu_0 n I$. As the solenoid length grows, the return flux spreads over infinite area outside, so $B_{\text{out}} \to 0$ and the whole jump drops inside. **8.** Div curl is identically zero, so $0 = \mu_0 \nabla \cdot \mathbf{J} + \mu_0 \varepsilon_0 \partial_t (\nabla \cdot \mathbf{E}) = \mu_0 (\nabla \cdot \mathbf{J} + \partial \rho/\partial t)$. Without the displacement term the law demands $\nabla \cdot \mathbf{J} = 0$ always: charge could never accumulate anywhere, and the charging capacitor could not exist.

</div>
</details>

:::

## Cross-References

- **[Magnetostatics](/3-electromagnetism/3_magnetostatics/)**: Magnetostatics is the static limit of Maxwell's equations where time derivatives vanish, describing steady currents and magnetic fields.
- **[Electrodynamics](/3-electromagnetism/4_electrodynamics/)**: Electrodynamics extends Maxwell's equations to time-varying fields, with Faraday's law and the displacement current.
- **[The Wave Equation](/4-optics-and-waves/1_the-wave-equation/)**: Electromagnetic waves are solutions to Maxwell's equations in free space, with speed $c = 1/\sqrt{\mu_0 \varepsilon_0}$.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Related in this track

- [Advanced Electrodynamics](/3-electromagnetism/11_advanced-electrodynamics/)
- [Electrodynamics](/3-electromagnetism/4_electrodynamics/)
- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/)
- [Magnetostatics](/3-electromagnetism/3_magnetostatics/)
