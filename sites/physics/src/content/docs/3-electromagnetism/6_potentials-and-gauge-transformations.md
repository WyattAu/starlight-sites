---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "6_potentials And Gauge Transformations", "url": "https://physics.wyattau.com/3-electromagnetism/6_potentials-and-gauge-transformations"}]
}
</script>
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

### 6.1 Scalar and Vector Potentials

We can express the fields in terms of potentials:

$$\mathbf{E} = -\nabla V - \frac{\partial \mathbf{A}}{\partial t}, \quad \mathbf{B} = \nabla \times \mathbf{A}$$

In electrostatics, $\mathbf{A} = \mathbf{0}$ and $\mathbf{E} = -\nabla V$.

### 6.2 Gauge Transformations

The potentials are not unique. The transformation

$$V" = V - \frac{\partial \chi}{\partial t}, \quad \mathbf{A}' = \mathbf{A} + \nabla \chi$$

For any scalar function $\chi(\mathbf{r}, t)$ leaves $\mathbf{E}$ and $\mathbf{B}$ unchanged. This
is a **gauge transformation**.

**Common gauges:**

- **Coulomb gauge:** $\nabla \cdot \mathbf{A} = 0$. Useful in magnetostatics.
- **Lorenz gauge:**
  $\nabla \cdot \mathbf{A} + \mu_0 \varepsilon_0 \frac{\partial V}{\partial t} = 0$. Simplifies the
  wave equations for $V$ and $\mathbf{A}$:

$$\nabla^2 V - \mu_0 \varepsilon_0 \frac{\partial^2 V}{\partial t^2} = -\frac{\rho}{\varepsilon_0}$$

$$\nabla^2 \mathbf{A} - \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J}$$

<aside aria-label="Common Pitfall The Lorenz gauge (with one "r") is named after Ludvig Lorenz, not Hendrik" class="starlight-aside starlight-aside--caution"><p class="starlight-aside__title" aria-hidden="true"><svg class="starlight-aside__icon" aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L1 21h22L12 2Zm0 4l7.53 14H4.47L12 6Zm-1 5v4h2v-4h-2Zm0 6v2h2v-2h-2Z"/></svg>Common Pitfall The Lorenz gauge (with one "r") is named after Ludvig Lorenz, not Hendrik</p>
Lorentz. It is frequently Misspelled "Lorentz gauge." The two are different people, and the correct
spelling is "Lorenz gauge."

### 6.3 Derivation of the Lorenz Gauge Condition

Starting from the definitions $\mathbf{E} = -\nabla V - \partial\mathbf{A}/\partial t$ and
$\mathbf{B} = \nabla \times \mathbf{A}$Substitute into Gauss's law:

$$\nabla \cdot \mathbf{E} = -\nabla^2 V - \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = \frac{\rho}{\varepsilon_0}$$

$$\nabla^2 V + \frac{\partial}{\partial t}(\nabla \cdot \mathbf{A}) = -\frac{\rho}{\varepsilon_0} \tag{6.1}$$

Substitute into the Ampere-Maxwell law:

$$\nabla \times \mathbf{B} = \nabla(\nabla \cdot \mathbf{A}) - \nabla^2 \mathbf{A} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}(-\nabla V - \frac{\partial\mathbf{A}}{\partial t})$$

$$\nabla^2 \mathbf{A} - \mu_0\varepsilon_0\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0\mathbf{J} + \nabla\!\left(\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t}\right) \tag{6.2}$$

Equations (6.1) and (6.2) are coupled through the term
$\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\,\partial V/\partial t$.

**The Lorenz gauge** sets this term to zero:

$$\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t} = 0$$

This is always achievable. If the current potentials do not satisfy this condition, perform a Gauge
transformation with $\chi$ satisfying:

$$\nabla^2\chi - \mu_0\varepsilon_0\frac{\partial^2\chi}{\partial t^2} = -\left(\nabla \cdot \mathbf{A} + \mu_0\varepsilon_0\frac{\partial V}{\partial t}\right)$$

In the Lorenz gauge, (6.1) and (6.2) decouple into inhomogeneous wave equations:

$$\nabla^2 V - \mu_0\varepsilon_0\frac{\partial^2 V}{\partial t^2} = -\frac{\rho}{\varepsilon_0}$$

$$\nabla^2 \mathbf{A} - \mu_0\varepsilon_0\frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0\mathbf{J}$$

Both $V$ and $\mathbf{A}$ satisfy wave equations with sources $\rho/\varepsilon_0$ and
$\mu_0\mathbf{J}$ And both propagate at speed $c$. The Lorenz gauge makes manifest the relativistic
covariance Of the theory (Section 7).

### 6.4 Retarded Potentials

The inhomogeneous wave equations in the Lorenz gauge have causal solutions --- the potentials At
$(\mathbf{r}, t)$ depend on the sources at the **retarded time** $t_r = t - R/c$ where
$R = \lvert\mathbf{r} - \mathbf{r}'\rvert$:

$$V(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0}\int \frac{\rho(\mathbf{r}', t_r)}{R}\,d^3\mathbf{r}'$$

$$\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi}\int \frac{\mathbf{J}(\mathbf{r}', t_r)}{R}\,d^3\mathbf{r}'$$

**Physical interpretation.** Information about changes in the source travels outward at speed $c$.
The field at point $\mathbf{r}$ and time $t$ is determined by the source configuration at the
Earlier time $t_r$ when a light signal would have left $\mathbf{r}'$ to arrive at $\mathbf{r}$ at
Time $t$.

<details>
<summary>Verification that retarded potentials satisfy the wave equation</summary>

We verify for $V$; the argument for $\mathbf{A}$ is identical. Define

$$V(\mathbf{r}, t) = \frac{1}{4\pi\varepsilon_0}\int \frac{[\rho]}{R}\,d^3\mathbf{r}'$$

Where $[\rho] = \rho(\mathbf{r}', t - R/c)$. Applying the d'Alembertian operator
$\square^2 = \nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}$ and carefully Differentiating
under the integral (the derivatives act on both the explicit $1/R$ and the Implicit $R$ in $[\rho]$
through $t_r$):

$$\square^2 V = \frac{1}{4\pi\varepsilon_0}\int \left[\frac{\square^2[\rho]}{R}\right] d^3\mathbf{r}'$$

The key identity is $\square^2(f(t_r)/R) = -4\pi f(t)\,\delta^3(\mathbf{r} - \mathbf{r}')$Which
Follows from the fact that $\nabla^2(1/R) = -4\pi\delta^3(\mathbf{r} - \mathbf{r}')$ and that the
Time derivatives cancel the $1/R$ propagation effects. Therefore:

$$\square^2 V = -\frac{1}{\varepsilon_0}\int \rho(\mathbf{r}', t)\,\delta^3(\mathbf{r} - \mathbf{r}')\,d^3\mathbf{r}' = -\frac{\rho(\mathbf{r}, t)}{\varepsilon_0}$$

This confirms that $V$ satisfies the wave equation. $\blacksquare$

</details>

### 6.5 Lienard-Wiechert Potentials

For a **moving point charge** $q$ following trajectory $\mathbf{r}_s(t)$The retarded potentials
Cannot be evaluated naively because the retarded time $t_r$ satisfies a non-trivial equation:

$$c(t - t_r) = \lvert\mathbf{r} - \mathbf{r}_s(t_r)\rvert$$

The **Lienard-Wiechert potentials** are the exact solutions:

$$V(\mathbf{r}, t) = \frac{q}{4\pi\varepsilon_0}\frac{1}{(\kappa R)}\bigg|_{t_r}, \quad \mathbf{A}(\mathbf{r}, t) = \frac{q\mathbf{v}}{4\pi\varepsilon_0 c^2}\frac{1}{(\kappa R)}\bigg|_{t_r}$$

Where $\mathbf{R} = \mathbf{r} - \mathbf{r}_s(t_r)$, $R = \lvert\mathbf{R}\rvert$
$\mathbf{v} = \dot{\mathbf{r}}_s(t_r)$And $\kappa = 1 - \hat{\mathbf{R}} \cdot \mathbf{v}/c$.

The factor $\kappa$ corrects for the **Doppler effect**: when the charge moves toward the
Observation point, the radiation is compressed (higher density of field lines).

**Fields of a moving charge.** The electric field splits into two parts:

$$\mathbf{E} = \mathbf{E}_{\mathrm{vel} + \mathbf{E}_{\mathrm{acc}}}$$

The **velocity field** (Coulomb-like, falls off as $1/R^2$):

$$\mathbf{E}_{\mathrm{vel} = \frac{q}{4\pi\varepsilon_0}\frac{(1-\beta^2)(\hat{\mathbf{R}} - \boldsymbol{\beta})}{\kappa^3 R^2}\bigg|_{t_r}}$$

Where $\boldsymbol{\beta} = \mathbf{v}/c$.

The **acceleration field** (radiation, falls off as $1/R$):

$$\mathbf{E}_{\mathrm{acc} = \frac{q}{4\pi\varepsilon_0 c}\frac{\hat{\mathbf{R}} \times [(\hat{\mathbf{R}} - \boldsymbol{\beta}) \times \dot{\boldsymbol{\beta}}]}{\kappa^3 R}\bigg|_{t_r}}$$

Only the acceleration field contributes to radiation at large distances. The magnetic field Is
always:

$$\mathbf{B} = \frac{1}{c}\hat{\mathbf{R}} \times \mathbf{E}$$


</aside>

## Intuition

Gauge symmetry is the idea that potentials are not unique but the fields they produce are. Like choosing different coordinate systems to describe the same physical situation, gauge transformations change the mathematical description without changing the physics. The Coulomb gauge makes the vector potential divergence-free, useful for static magnetic fields. The Lorenz gauge simplifies the wave equations, making radiation problems tractable. The Liénard-Wiechert potentials show that fields from a moving charge are retarded, meaning we see the charge where it was when the light left it, not where it is now.

## Cross-References

- [Electromagnetic Waves](/physics/3-electromagnetism/5_electromagnetic-waves) -- The wave equation derived from Maxwell's equations is the starting point for the retarded potential solutions.
- [Special Relativity and Electromagnetism](/physics/3-electromagnetism/7_special-relativity-and-electromagnetism) -- The Lorenz gauge condition $\partial_\mu A^\mu = 0$ is the covariant form of the gauge choice developed here.
- [Radiation from Accelerating Charges](/physics/3-electromagnetism/10_radiation-from-accelerating-charges) -- The Liénard-Wiechert potentials yield the radiation fields treated in the Larmor and dipole formulas.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Common Mistakes

- **Assuming the Coulomb gauge is always the simplest choice:** The Coulomb gauge ($\nabla \cdot \mathbf{A} = 0$) simplifies static magnetic problems but makes the scalar potential instantaneous, which is inconvenient for radiation. The Lorenz gauge is better for wave propagation.
- **Confusing retarded time with actual time:** The Liénard-Wiechert potentials depend on the charge's position at the retarded time $t_r = t - R/c$, not at the present time. Using the current position gives incorrect fields for moving charges.
- **Assuming gauge transformations change physical fields:** Gauge transformations change the potentials $(\Phi, \mathbf{A})$ but leave the electric and magnetic fields $(\mathbf{E}, \mathbf{B})$ unchanged. If your calculation gives different fields after a gauge transformation, you have made an error.
- **Neglecting the radiation field when computing force on a charge:** The $1/R$ radiation field falls off more slowly than the $1/R^2$ velocity field. At large distances, only the radiation field matters, but at short distances the velocity field dominates.