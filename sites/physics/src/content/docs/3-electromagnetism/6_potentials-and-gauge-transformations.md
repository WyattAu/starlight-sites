---

date: 2026-07-23T21:57:32+01:00
title: Potentials and Gauge Transformations
tags:
  - Physics
  - University
description: "We can express the fields in terms of potentials: Comprehensive educational content coverage with definitions, worked examples, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "6_potentials And Gauge Transformations", "url": "https://physics.wyattau.com/3-electromagnetism/6_potentials-and-gauge-transformations"}]
}
</script>

**History.** The potentials have led a disputed life. Maxwell built his 1865 theory on them as the primary objects; Oliver Heaviside, impatient with their redundancy, called them 'still-born' and campaigned for the fields-only formulation that textbooks adopted for seventy years. The gauge condition is Ludvig Lorenz's (1867), a Danish physicist so persistently confused with Hendrik Lorentz of Leiden that the misnomer survives in published papers; this chapter's own caution box exists because of it. The potentials' revenge arrived in 1959, when Aharonov and Bohm showed a field-free region can still shift quantum phases, a story the quantum chapters take up.

### 6.1 Scalar and Vector Potentials

We can express the fields in terms of potentials:

$$
\mathbf{E} = -\nabla V - \frac{\partial \mathbf{A}}{\partial t}, \quad \mathbf{B} = \nabla \times \mathbf{A}
$$

In electrostatics, $\mathbf{A} = \mathbf{0}$ and $\mathbf{E} = -\nabla V$.

**Ponder (attempt the redundancy).** The transformation $V' = V - \partial \chi/\partial t$, $\mathbf{A}' = \mathbf{A} + \nabla \chi$ leaves every field unchanged. Attempt two things: first, to see why by direct substitution; second, to flip the redundancy from nuisance to resource, if the potentials carry more data than the fields need, what would you spend that freedom on?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Direct substitution: $\nabla V' = \nabla V - \nabla \dot{\chi}$ and $\partial \mathbf{A}'/\partial t = \partial \mathbf{A}/\partial t + \nabla \dot{\chi}$, so $\mathbf{E}' = -\nabla V' - \partial \mathbf{A}'/\partial t = \mathbf{E}$, with the time derivatives cancelling because mixed partials commute; $\nabla \times \nabla \chi \equiv 0$ handles $\mathbf{B}$. The freedom is real data-slack: one scalar function's worth. Spend it as a constraint, for instance $\nabla \cdot \mathbf{A} = 0$ (Coulomb) or the Lorenz condition, and the wave equations below decouple: the redundancy, once fixed, buys tractability.

</div>
</details>

### 6.2 Gauge Transformations

The potentials are not unique. The transformation

$$
V" = V - \frac{\partial \chi}{\partial t}, \quad \mathbf{A}' = \mathbf{A} + \nabla \chi
$$

For any scalar function $\chi(\mathbf{r}, t)$ leaves $\mathbf{E}$ and $\mathbf{B}$ unchanged. This
is a **gauge transformation**.

**Common gauges:**

- **Coulomb gauge:** $\nabla \cdot \mathbf{A} = 0$. Useful in magnetostatics.
- **Lorenz gauge:**
  $\nabla \cdot \mathbf{A} + \mu_0 \varepsilon_0 \frac{\partial V}{\partial t} = 0$. Simplifies the
  wave equations for $V$ and $\mathbf{A}$:

$$
\nabla^2 V - \mu_0 \varepsilon_0 \frac{\partial^2 V}{\partial t^2} = -\frac{\rho}{\varepsilon_0}
$$

$$
\nabla^2 \mathbf{A} - \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J}
$$

:::caution
Lorentz. It is frequently Misspelled "Lorentz gauge." The two are different people, and the correct
spelling is "Lorenz gauge."

### 6.3 Derivation of the Lorenz Gauge Condition

Starting from the definitions $\mathbf{E} = -\nabla V - \partial\mathbf{A}/\partial t$ and
$\mathbf{B} = \nabla \times \mathbf{A}$ Substitute into Gauss's law:

$$
\nabla \cdot \mathbf{E} = -\nabla^2 V - \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = \frac{\rho}{\varepsilon_0}
$$

$$
\nabla^2 V + \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = -\frac{\rho}{\varepsilon_0} \tag{6.1}
$$

Substitute into the Ampere-Maxwell law:

$$
\nabla \times \mathbf{B} = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2 \mathbf{A} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}(-\nabla V - \frac{\partial\mathbf{A}}{\partial t})
$$

$$
\nabla^2 \mathbf{A} - \mu_0\varepsilon_0\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0\mathbf{J} + \nabla\!\left(\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t}\right) \tag{6.2}
$$

Equations (6.1) and (6.2) are coupled through the term
$\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\,\partial V/\partial t$.

**The Lorenz gauge** sets this term to zero:

$$
\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t} = 0
$$

This is always achievable. If the current potentials do not satisfy this condition, perform a Gauge
transformation with $\chi$ satisfying:

$$
\nabla^2\chi - \mu_0\varepsilon_0\frac{\partial^2\chi}{\partial t^2} = -\left(\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t}\right)
$$

In the Lorenz gauge, (6.1) and (6.2) decouple into inhomogeneous wave equations:

$$
\nabla^2 V - \mu_0\varepsilon_0\frac{\partial^2 V}{\partial t^2} = -\frac{\rho}{\varepsilon_0}
$$

$$
\nabla^2 \mathbf{A} - \mu_0\varepsilon_0\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0\mathbf{J}
$$

Both $V$ and $\mathbf{A}$ satisfy wave equations with sources $\rho/\varepsilon_0$ and
$\mu_0\mathbf{J}$ And both propagate at speed $c$. The Lorenz gauge makes manifest the relativistic
covariance Of the theory (Section 7).

**Ponder (attempt the arrow).** The wave equation's Green function offers two roots: $t_r = t - R/c$ and $t_a = t + R/c$. The mathematics is indifferent; attempt the physics. Which root survives, what principle kills the other, and what everyday sight is the retarded root hiding in plain sight?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Causality keeps $t_r = t - R/c$: the field here now reflects where the source was, not where it will be. The advanced root is a perfectly good solution of the equation, and only the boundary condition that effects follow causes discards it (time-reversal-symmetric theory, time-asymmetric world). The everyday sight: the Sun on your face is eight minutes stale, the same mechanism at $8.3$ light-minutes instead of $3$ light-nanoseconds across a room.

</div>
</details>

### 6.4 Retarded Potentials

The inhomogeneous wave equations in the Lorenz gauge have causal solutions --- the potentials At
$(\mathbf{r}, t)$ depend on the sources at the **retarded time** $t_r = t - R/c$ where
$R = \lvert\mathbf{r} - \mathbf{r}'\rvert$:

$$
V(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\mathbf{r}', t_r)}{R}\,d^3\mathbf{r}'
$$

$$
\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}', t_r)}{R}\,d^3\mathbf{r}'
$$

**Physical interpretation.** Information about changes in the source travels outward at speed $c$.
The field at point $\mathbf{r}$ and time $t$ is determined by the source configuration at the
Earlier time $t_r$ when a light signal would have left $\mathbf{r}'$ to arrive at $\mathbf{r}$ at
Time $t$.

<details>
<summary>Verification that retarded potentials satisfy the wave equation</summary>

We verify for $V$; the argument for $\mathbf{A}$ is identical. Define

$$
V(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0}\int \frac{[\rho]}{R}\,d^3\mathbf{r}'
$$

Where $[\rho] = \rho(\mathbf{r}', t - R/c)$. Applying the d'Alembertian operator
$\square^2 = \nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}$ and carefully Differentiating
under the integral (the derivatives act on both the explicit $1/R$ and the Implicit $R$ in $[\rho]$
through $t_r$):

$$
\square^2 V = \frac{1}{4\pi\varepsilon_0}\int \left[\frac{\square^2[\rho]}{R}\right] d^3\mathbf{r}'
$$

The key identity is $\square^2(f(t_r)/R) = -4\pi f(t)\,\delta^3(\mathbf{r} - \mathbf{r}')$ Which
Follows from the fact that $\nabla^2(1/R) = -4\pi\delta^3(\mathbf{r} - \mathbf{r}')$ and that the
Time derivatives cancel the $1/R$ propagation effects. Therefore:

$$
\square^2 V = -\frac{1}{\varepsilon_0}\int \rho(\mathbf{r}', t)\,\delta^3(\mathbf{r} - \mathbf{r}')\,d^3\mathbf{r}' = -\frac{\rho(\mathbf{r}, t)}{\varepsilon_0}
$$

This confirms that $V$ satisfies the wave equation. $\blacksquare$

</details>

### 6.5 Lienard-Wiechert Potentials

For a **moving point charge** $q$ following trajectory $\mathbf{r}_s(t)$ The retarded potentials
cannot be evaluated naively because the retarded time $t_r$ satisfies a non-trivial equation:

$$
c(t - t_r) = \lvert\mathbf{r} - \mathbf{r}_s(t_r)\rvert
$$

The **Lienard-Wiechert potentials** are the exact solutions:

$$
V(\mathbf{r}, t) = \frac{q}{4\pi\varepsilon_0}\frac{1}{(\kappa R)}\bigg|_{t_r}, \quad \mathbf{A}(\mathbf{r}, t) = \frac{q\mathbf{v}}{4\pi\varepsilon_0 c^2}\frac{1}{(\kappa R)}\bigg|_{t_r}
$$

Where $\mathbf{R} = \mathbf{r} - \mathbf{r}_s(t_r)$, $R = \lvert\mathbf{R}\rvert$
$\mathbf{v} = \dot{\mathbf{r}}_s(t_r)$ And $\kappa = 1 - \hat{\mathbf{R}} \cdot \mathbf{v}/c$.

The factor $\kappa$ corrects for the **Doppler effect**: when the charge moves toward the
Observation point, the radiation is compressed (higher density of field lines).

**Fields of a moving charge.** The electric field splits into two parts:

$$
\mathbf{E} = \mathbf{E}_{\mathrm{vel} + \mathbf{E}_{\mathrm{acc}}}
$$

The **velocity field** (Coulomb-like, falls off as $1/R^2$):

$$
\mathbf{E}_{\mathrm{vel} = \frac{q}{4\pi\varepsilon_0}\frac{(1-\beta^2)(\hat{\mathbf{R}} - \boldsymbol{\beta})}{\kappa^3 R^2}\bigg|_{t_r}}
$$

Where $\boldsymbol{\beta} = \mathbf{v}/c$.

The **acceleration field** (radiation, falls off as $1/R$):

$$
\mathbf{E}_{\mathrm{acc} = \frac{q}{4\pi\varepsilon_0 c}\frac{\hat{\mathbf{R}} \times [(\hat{\mathbf{R}} - \boldsymbol{\beta}) \times \dot{\boldsymbol{\beta}}]}{\kappa^3 R}\bigg|_{t_r}}
$$

Only the acceleration field contributes to radiation at large distances. The magnetic field Is
always:

$$
\mathbf{B} = \frac{1}{c}\hat{\mathbf{R}} \times \mathbf{E}
$$
:::

## Intuition

Gauge symmetry is the idea that potentials are not unique but the fields they produce are. Like choosing different coordinate systems to describe the same physical situation, gauge transformations change the mathematical description without changing the physics. The Coulomb gauge makes the vector potential divergence-free, useful for static magnetic fields. The Lorenz gauge simplifies the wave equations, making radiation problems tractable. The Liénard-Wiechert potentials show that fields from a moving charge are retarded, meaning we see the charge where it was when the light left it, not where it is now.

:::note[Quick check]

1. (E) Verify the gauge invariance of $\mathbf{E}$ by direct substitution: compute $\mathbf{E}' = -\nabla(V - \partial \chi/\partial t) - \partial(\mathbf{A} + \nabla \chi)/\partial t$ and show every $\chi$-term cancels, naming the property of derivatives you used.
2. (M) Derive the Lorenz condition: substitute $\mathbf{E} = -\nabla V - \partial \mathbf{A}/\partial t$ and $\mathbf{B} = \nabla \times \mathbf{A}$ into Gauss's and Ampere-Maxwell's laws, and show the mixed terms collapse into $\nabla \cdot \mathbf{A} + \mu_0 \varepsilon_0 \partial V/\partial t = 0$, decoupling the potentials into two wave equations.
3. (M) A desk lamp sits 3 m away. Compute the light-travel delay of its field changes, and decide why electrostatics textbooks never mention retardation: what is special about static sources?
4. (M) Classify the gauges by use-case: why does the Coulomb gauge serve magnetostatics and bound-state work while the Lorenz gauge serves radiation and relativity? Base the decision on what each does to $V$ and $\mathbf{A}$'s equations.
5. (M) Trap: 'potentials satisfying the Lorenz condition are the physically real ones; other gauges describe the same physics less accurately.' Decide what is wrong, and state what is observable in classical electromagnetism.
6. (H) The wave equation's Green function gives two candidate times, $t' = t \mp R/c$. Prove the retarded choice satisfies causality, and verify that for static $\rho$ the retarded potential reduces to the Coulomb integral: retardation must be invisible in statics.
7. (M) The Lienard-Wiechert fields split into a velocity field falling as $1/R^2$ and an acceleration field falling as $1/R$. Decide which part a detector a kilometre away measures, and what that implies about the source's motion.
8. (H) Heaviside called the potentials 'still-born'; Aharonov and Bohm disagreed in 1959: an electron path encircling a shielded flux tube has $\mathbf{B} = 0$ along the path yet acquires phase $\Delta\phi = (q/\hbar) \oint \mathbf{A} \cdot d\mathbf{l} \ne 0$. Decide what this does to 'potentials are bookkeeping', and name the flag it plants for the quantum chapters.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\nabla(V - \partial_t \chi) = \nabla V - \nabla \partial_t \chi$ and $\partial_t (\mathbf{A} + \nabla \chi) = \partial_t \mathbf{A} + \nabla \partial_t \chi$; the $\nabla \partial_t \chi$ terms cancel in $\mathbf{E}' = -\nabla V' - \partial_t \mathbf{A}'$ because mixed partial derivatives commute. $\mathbf{B}$ survives because $\nabla \times \nabla \chi \equiv 0$. **2.** Gauss gives $\nabla \cdot \mathbf{E} = -\nabla^2 V - \partial_t (\nabla \cdot \mathbf{A}) = \rho/\varepsilon_0$; Ampere-Maxwell's curl gives $\nabla \times (\nabla \times \mathbf{A}) = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2 \mathbf{A} = \mu_0 \mathbf{J} - \mu_0 \varepsilon_0 \nabla \dot{V} - \mu_0 \varepsilon_0 \ddot{\mathbf{A}}$. Imposing $\nabla \cdot \mathbf{A} + \mu_0 \varepsilon_0 \dot{V} = 0$ deletes both gradient terms at once: two independent wave equations, one for $V$, one for $\mathbf{A}$. **3.** Delay $= R/c = 3/(3 \times 10^8) = 10\,\text{ns}$. Static sources make the retarded and present configurations identical: $\rho(\mathbf{r}', t_r) = \rho(\mathbf{r}', t)$ for all $t_r$, so the integral collapses to Coulomb's and retardation has nothing to show. Only changing sources expose the arrow. **4.** Coulomb gauge ($\nabla \cdot \mathbf{A} = 0$): statics stays simple and $\mathbf{A}$ obeys a Poisson equation, but $V$ becomes instantaneous, awkward for waves. Lorenz gauge: both potentials obey symmetric wave equations with retarded solutions, the form special relativity writes as one four-vector equation. Bound-state and numerical work picks Coulomb; radiation picks Lorenz. **5.** Gauge is convention, not physics: every gauge reproduces the same $\mathbf{E}$ and $\mathbf{B}$, which are the classical observables. The Lorenz condition's virtue is symmetry and decoupling, not truth; calling a gauge physical mistakes a coordinate choice for a fact. (Quantum mechanics later complicates the story, but through the phase, not through preferring one gauge.) **6.** The roots $t' = t - R/c$ and $t' = t + R/c$ are both solutions; causality retains the retarded one, since $t + R/c$ would have the field anticipate its source. For static $\rho$, $\rho(\mathbf{r}', t_r)$ is independent of $t_r$, so $V = (1/4\pi\varepsilon_0) \int \rho\, d^3r'/R$: the Coulomb integral, retardation invisible by construction. **7.** Radiation wins by distance: the acceleration field divided by the velocity field grows linearly with $R$, so past some crossover the detector measures pure $1/R$ radiation and the $1/R^2$ term is gone. Radiation exists only when the charge accelerates, since constant-velocity fields just ride along with the charge: the $1/R$ exponent is the verification hook, the slowest falloff consistent with energy conservation. **8.** It collapses the bookkeeping claim: a field-free region still moves the quantum phase, and the loop integral of $\mathbf{A}$ around the flux is gauge-invariant and measurable. The classical statement 'only $\mathbf{E}$ and $\mathbf{B}$ are observable' survives locally, but globally the potentials carry information no local field does: the flag planted here is the quantum chapters' opening.

</div>
</details>

:::

## Cross-References

- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/) -- The wave equation derived from Maxwell's equations is the starting point for the retarded potential solutions.
- [Special Relativity and Electromagnetism](/3-electromagnetism/7_special-relativity-and-electromagnetism/) -- The Lorenz gauge condition $\partial_\mu A^\mu = 0$ is the covariant form of the gauge choice developed here.
- [Radiation from Accelerating Charges](/3-electromagnetism/10_radiation-from-accelerating-charges/) -- The Liénard-Wiechert potentials yield the radiation fields treated in the Larmor and dipole formulas.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Common Mistakes

- **Assuming the Coulomb gauge is always the simplest choice:** The Coulomb gauge ($\nabla \cdot \mathbf{A} = 0$) simplifies static magnetic problems but makes the scalar potential instantaneous, which is inconvenient for radiation. The Lorenz gauge is better for wave propagation.
- **Confusing retarded time with actual time:** The Liénard-Wiechert potentials depend on the charge's position at the retarded time $t_r = t - R/c$, not at the present time. Using the current position gives incorrect fields for moving charges.
- **Assuming gauge transformations change physical fields:** Gauge transformations change the potentials $(\Phi, \mathbf{A})$ but leave the electric and magnetic fields $(\mathbf{E}, \mathbf{B})$ unchanged. If your calculation gives different fields after a gauge transformation, you have made an error.
- **Neglecting the radiation field when computing force on a charge:** The $1/R$ radiation field falls off more slowly than the $1/R^2$ velocity field. At large distances, only the radiation field matters, but at short distances the velocity field dominates.

## Related in this track

- [Advanced Electrodynamics](/3-electromagnetism/11_advanced-electrodynamics/)
- [Electrodynamics](/3-electromagnetism/4_electrodynamics/)
- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/)
- [Magnetostatics](/3-electromagnetism/3_magnetostatics/)
