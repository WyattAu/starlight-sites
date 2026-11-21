---

date: 2026-07-23T21:57:32+01:00
title: Special Relativity and Electromagnetism
tags:
  - Physics
  - University
description: "The laws of electromagnetism are inherently relativistic. In fact, it was the inconsistency of Maxwell' s equations with Galilean relativity that motivated"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "7_special Relativity And Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism/7_special-relativity-and-electromagnetism"}]
}
</script>

**History.** Einstein's 1905 paper is titled *On the Electrodynamics of Moving Bodies*, and special relativity was born from an asymmetry inside electromagnetism itself. His opening paragraph moves a magnet past a conductor and then a conductor past a magnet: the observed current is identical, yet the field theory of the day explained one case by an induced electric field and the other by a $\mathbf{v} \times \mathbf{B}$ force. Einstein demanded one explanation, and relativity is the demand granted. Minkowski completed the geometry in 1908, announcing that 'space by itself and time by itself are doomed to fade away': the four-dimensional form this section develops.

**Ponder (attempt the demand).** Run Einstein's opening case yourself: a magnet and a wire loop approach each other. In the magnet's frame the loop sees a changing $\mathbf{B}$ and Faraday induces the current; in the loop's frame the charges feel $\mathbf{v} \times \mathbf{B}$. Attempt to state precisely what is wrong, given that both frames predict the same current.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Nothing measurable is wrong: the current agrees. What is wrong is that the same event carries two unrelated theoretical explanations depending on the frame, one electromagnetic, one kinematic. Einstein's demand was principle, not prediction: the explanation must be frame-independent, and granting it means the electric and magnetic fields cannot be separate objects. They are frame components of one thing, which the field tensor below names.

</div>
</details>

**History.** Einstein's 1905 paper is titled *On the Electrodynamics of Moving Bodies*, and special relativity was born from an asymmetry inside electromagnetism itself. His opening paragraph moves a magnet past a conductor and then a conductor past a magnet: the observed current is identical, yet the field theory of the day explained one case by an induced electric field and the other by a $\mathbf{v} \times \mathbf{B}$ force. Einstein demanded one explanation, and relativity is the demand granted. Minkowski completed the geometry in 1908, announcing that 'space by itself and time by itself are doomed to fade away': the four-dimensional form this section develops.

### 7.1 Covariant Formulation

The laws of electromagnetism are inherently relativistic. In fact, it was the inconsistency of
Maxwell's equations with Galilean relativity that motivated Einstein’s 1905 theory.

**Minkowski spacetime.** Events are labelled by coordinates $(ct, x, y, z)$ in a four-dimensional
Spacetime. The **spacetime interval** between two events is:

$$
ds^2 = -c^2 dt^2 + dx^2 + dy^2 + dz^2
$$

This interval is invariant under Lorentz transformations --- all inertial observers agree on its
Value. We use the metric signature $\eta_{\mu\nu} = \mathrm{diag}(-1, +1, +1, +1)$.

**Lorentz transformations.** For a boost with velocity $v$ along the $x$-axis, define $\beta = v/c$
and $\gamma = 1/\sqrt{1-\beta^2}$:

$$
\Lambda^\mu_{\ \nu} = \begin{pmatrix} \gamma & -\gamma\beta & 0 & 0 \\ -\gamma\beta & \gamma & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
$$

Coordinates transform as $x'^\mu = \Lambda^\mu_{\ \nu}\,x^\nu$ (Einstein summation convention
Implied).

### 7.2 Four-Vectors

A **four-vector** $A^\mu = (A^0, A^1, A^2, A^3)$ transforms as $A'^\mu = \Lambda^\mu_{\ \nu}\,A^\nu$
under Lorentz transformations. The inner product $A_\mu B^\mu = \eta_{\mu\nu}A^\mu B^\nu$ is a
Lorentz scalar (invariant).

Key four-vectors in electromagnetism:

**Position:** $x^\mu = (ct, x, y, z)$

**Four-velocity:** $U^\mu = \frac{dx^\mu}{d\tau} = \gamma(c, v_x, v_y, v_z)$ where $\tau$ is proper
time.

**Four-momentum:** $p^\mu = mU^\mu = (E/c, p_x, p_y, p_z)$ With $E = \gamma mc^2$.

**Four-current density:**

$$
J^\mu = (c\rho, J_x, J_y, J_z)
$$

The continuity equation $\nabla \cdot \mathbf{J} + \partial\rho/\partial t = 0$ becomes the
Manifestly covariant:

$$
\partial_\mu J^\mu = 0
$$

**Four-potential:**

$$
A^\mu = (V/c, A_x, A_y, A_z)
$$

The Lorenz gauge condition
$\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial V}{\partial t} = 0$ Becomes:

$$
\partial_\mu A^\mu = 0
$$

**Ponder (attempt the invariants).** From the six components of $\mathbf{E}$ and $\mathbf{B}$, attempt to build quantities every inertial observer agrees on. A tensor with two indices admits rotation scalars; attempt to form them from $\mathbf{E}$ and $\mathbf{B}$, and decide how many independent ones there are and what each classifies.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Two survive: $\mathbf{E}^2 - c^2 \mathbf{B}^2$ and $\mathbf{E} \cdot \mathbf{B}$. The first splits fields into electric-like (positive, a frame with $\mathbf{B} = 0$ exists) versus magnetic-like (negative, a frame with $\mathbf{E} = 0$ exists). The second, being a scalar under boosts, says a field that is parallel to $\mathbf{B}$ in one frame is parallel in every frame: crossed fields cannot be un-crossed by motion. A plane wave has both invariants zero, null in every frame: no observer ever rides alongside it.

</div>
</details>

### 7.3 The Electromagnetic Field Tensor

The six components of $\mathbf{E}$ and $\mathbf{B}$ are unified in the **antisymmetric field
Tensor** $F^{\mu\nu}$ Defined by:

$$
F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu
$$

In matrix form:

$$
F^{\mu\nu} = \begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end{pmatrix}
$$

The **dual field tensor** is:

$$
\tilde{F}^{\mu\nu} = \frac{1}{2}\varepsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}
$$

Where $\varepsilon^{\mu\nu\rho\sigma}$ is the totally antisymmetric Levi-Civita symbol with
$\varepsilon^{0123} = +1$. In matrix form:

$$
\tilde{F}^{\mu\nu} = \begin{pmatrix} 0 & -B_x & -B_y & -B_z \\ B_x & 0 & E_z/c & -E_y/c \\ B_y & -E_z/c & 0 & E_x/c \\ B_z & E_y/c & -E_x/c & 0 \end{pmatrix}
$$

The dual tensor is obtained from $F^{\mu\nu}$ by the replacement $\mathbf{E}/c \to -\mathbf{B}$,
$\mathbf{B} \to \mathbf{E}/c$.

**Lorentz force.** The four-force on a charge $q$ is:

$$
K^\mu = \frac{dp^\mu}{d\tau} = qF^{\mu\nu}U_\nu
$$

The spatial components reduce to $\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$ And the
time component gives the power equation $dE/dt = q\mathbf{E} \cdot \mathbf{v}$.

### 7.4 Invariance of Maxwell's Equations

All four Maxwell equations are contained in two covariant equations:

**Inhomogeneous equations** (Gauss's law + Ampere-Maxwell law):

$$
\boxed{\partial_\mu F^{\mu\nu} = \mu_0 J^\nu}
$$

**Homogeneous equations** (Gauss's law for magnetism + Faraday’s law):

$$
\boxed{\partial_\mu \tilde{F}^{\mu\nu} = 0}
$$

<details>
<summary>Verification: $\nu = 0$ gives Gauss's law</summary>

For $\nu = 0$:

$$
\partial_\mu F^{\mu 0} = \mu_0 J^0 = \mu_0 c\rho
$$

Since $F^{\mu 0} = (0, -E_x/c, -E_y/c, -E_z/c)$:

$$
\partial_0 F^{00} + \partial_1 F^{10} + \partial_2 F^{20} + \partial_3 F^{30} = 0 + \frac{\partial}{\partial x}\!\left(-\frac{E_x}{c}\right) + \frac{\partial}{\partial y}\!\left(-\frac{E_y}{c}\right) + \frac{\partial}{\partial z}\!\left(-\frac{E_z}{c}\right)
$$

$$
-\frac{1}{c}\nabla \cdot \mathbf{E} = \mu_0 c\rho
$$

$$
\nabla \cdot \mathbf{E} = -\mu_0 c^2 \rho = \frac{\rho}{\varepsilon_0}
$$

This is Gauss's law, using $c^2 = 1/(\mu_0\varepsilon_0)$. $\blacksquare$

</details>

**Field transformations.** Under a Lorentz boost with velocity $\mathbf{v} = v\,\hat{\mathbf{x}}$
The fields transform as:

$$
E'_x = E_x, \quad E'_y = \gamma(E_y - vB_z), \quad E'_z = \gamma(E_z + vB_y)
$$

$$
B'_x = B_x, \quad B'_y = \gamma\!\left(B_y + \frac{v}{c^2}E_z\right), \quad B'_z = \gamma\!\left(B_z - \frac{v}{c^2}E_y\right)
$$

Components parallel to the boost are unchanged; perpendicular components mix $\mathbf{E}$ and
$\mathbf{B}$.

**Lorentz invariants.** The following quantities are the same in all frames:

$$
F_{\mu\nu}F^{\mu\nu} = 2\!\left(B^2 - \frac{E^2}{c^2}\right), \quad F_{\mu\nu}\tilde{F}^{\mu\nu} = -\frac{4}{c}\,\mathbf{E} \cdot \mathbf{B}
$$

These invariants classify electromagnetic fields:

- If $E^2 \gt c^2 B^2$ in some frame, there exists a frame where $\mathbf{B} = \mathbf{0}$ (purely
  electric).
- If $c^2 B^2 \gt E^2$ There exists a frame where $\mathbf{E} = \mathbf{0}$ (purely magnetic).
- If $\mathbf{E} \cdot \mathbf{B} = 0$ and $E = cB$ The field is a null field (electromagnetic wave).

## Intuition

Special relativity and electromagnetism are two aspects of the same theory. Electric and magnetic fields are not separate entities but components of a single electromagnetic field tensor. What one observer calls a pure electric field, another moving observer may see as a mixture of electric and magnetic fields. The invariants classify field configurations: if the electric field dominates in some frame, you can always find a frame where the magnetic field vanishes. Light emerges as the unique null field where E equals cB, making electromagnetism inherently relativistic.

## Common Pitfalls

- **Parallel vs.\ perpendicular boost components.** When boosting along $\hat{x}$, the $E_x$ and $B_x$ components are unchanged; only the perpendicular components mix. Students often incorrectly apply $\gamma$ to all components.

:::note[Quick check]

1. (E) A pure magnetic field $\mathbf{B} = 0.5\,\text{T}\,\hat{\mathbf{z}}$ is observed from a frame moving at $v = 0.8c$ along $\hat{\mathbf{x}}$. Compute $\gamma$, the induced $\mathbf{E}'$, and decide whether the boosted field stays purely magnetic.
2. (M) Read off $F^{12}$ and $F^{23}$ from the field-tensor matrix, state which field components they carry, and verify the antisymmetry $F^{21} = -F^{12}$ against the printed matrix.
3. (M) Compute both invariants for a plane wave with $\mathbf{E} = E_0\hat{\mathbf{x}}$ and $\mathbf{B} = (E_0/c)\hat{\mathbf{y}}$. Decide what null means for boosts: is there any frame where the wave's $\mathbf{E}$ or $\mathbf{B}$ vanishes?
4. (M) Classify fields by their invariants: $\mathbf{E} \cdot \mathbf{B} \ne 0$, $\mathbf{E}^2 - c^2\mathbf{B}^2 > 0$, $< 0$, and $= 0$. For each, decide which frame (if any) sets one field to zero.
5. (M) Trap: 'magnetism is just a relativistic correction to electrostatics, so the magnetic force is not real.' Decide how much of this is right, using the wire-and-drifting-charge case, and what the tensor says about 'real'.
6. (H) Verify that the covariant equation $\partial_\mu F^{\mu\nu} = \mu_0 J^\nu$ contains charge conservation: take $\partial_\nu$ of both sides and use the antisymmetry of $F^{\mu\nu}$ in its indices.
7. (M) A field $\mathbf{E} = E_0\hat{\mathbf{y}}$, $\mathbf{B} = 0$ is boosted along $\hat{\mathbf{x}}$. Compute which components change and which do not, and state the parallel-versus-perpendicular rule the pitfalls warn about.
8. (H) Synthesise the direction of the logic: Maxwell's equations contain $c$; relativity declares $c$ invariant for everyone. Decide which theory constrained which, and what this says about finding Maxwell's equations in a post-relativistic course.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\gamma = 1/\sqrt{1 - 0.64} = 5/3$, and a boost on a pure $\mathbf{B}$ generates $\mathbf{E}' = -\gamma\,\mathbf{v} \times \mathbf{B}$ of magnitude $\gamma v B_0 = (5/3)(0.8)(3 \times 10^8)(0.5) \approx 2.0 \times 10^8\,\text{V/m}$ along $-\hat{\mathbf{y}}$. Not purely magnetic anymore: the $\mathbf{E}^2 - c^2\mathbf{B}^2$ invariant is negative here, so the field is magnetic-like but never pure again in a moving frame. **2.** $F^{12} = -B_z$ and $F^{23} = -B_x$ in the printed convention. The antisymmetry check: the matrix prints $F^{21} = +B_z = -F^{12}$, as required. Reading the tensor means locating the field by slot, not re-deriving the convention each time. **3.** $\mathbf{E}^2 - c^2\mathbf{B}^2 = E_0^2 - c^2 E_0^2/c^2 = 0$ and $\mathbf{E} \cdot \mathbf{B} = 0$: both invariants null. Null stays null under every boost, so no observer finds $\mathbf{E} = 0$ or $\mathbf{B} = 0$: you cannot outrun a plane wave's fields, only see them transformed in direction and strength. **4.** $\mathbf{E} \cdot \mathbf{B} \ne 0$: no frame zeroes either field (the boost frame always sees crossed fields). $\mathbf{E}^2 - c^2\mathbf{B}^2 > 0$: a frame with $\mathbf{B} = 0$ exists (electric-like). $< 0$: a frame with $\mathbf{E} = 0$ exists (magnetic-like). $= 0$ with $\mathbf{E} \cdot \mathbf{B} = 0$: null, the plane-wave case, no such frame. The invariants are the classification, not adjectives. **5.** Half right. For a current-carrying wire and a drifting test charge, the relativity of charge density does turn the magnetic force into an electric one in the charge's frame: the purist's computation works there. But it is one configuration, not a reduction, and the tensor verdict is cleaner: $\mathbf{E}$ and $\mathbf{B}$ are components of one object, split differently by frame; neither is the correction and neither the original. **6.** $\partial_\nu \partial_\mu F^{\mu\nu} = 0$ identically, since the symmetric pair of derivatives contracts the antisymmetric tensor to nothing, so the equation forces $\mu_0 \partial_\nu J^\nu = 0$: charge conservation is not an extra postulate but a consequence of writing the theory covariantly. **7.** Every component of this field is perpendicular to the boost: $E_y' = \gamma E_0 = (5/3) E_0$, while a hypothetical $E_x$ would have passed through unchanged ($E_\parallel' = E_\parallel$). A compensating magnetic field appears: $\mathbf{B}' = -\gamma\,\mathbf{v} \times \mathbf{E}/c^2$ with magnitude $\gamma v E_0/c^2$. The rule: perpendicular components mix with $\gamma$, parallel ones are untouched, exactly the pitfall's warning. **8.** The arrow runs from electromagnetism to relativity: Maxwell's equations demanded an invariant $c$ before Einstein declared one, and the theory's Galilean failure was the anomaly. In a post-relativistic course, Maxwell's equations are not adjusted to fit relativity; they are the first theory found already covariant, which is why this chapter reads like a translation rather than a correction.

</div>
</details>

:::

## Cross-References

- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/) -- The wave equation and Poynting vector analysis provide the non-relativistic foundation for the covariant field theory developed here.
- [Potentials and Gauge Transformations](/3-electromagnetism/6_potentials-and-gauge-transformations/) -- The Lorenz gauge condition $\partial_\mu A^\mu = 0$ is the four-vector form of the gauge choice introduced in the potentials chapter.
- [Radiation from Accelerating Charges](/3-electromagnetism/10_radiation-from-accelerating-charges/) -- The relativistic Larmor formula and Liénard-Wiechert fields extend the dipole radiation analysis to moving charges.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Related in this track

- [Advanced Electrodynamics](/3-electromagnetism/11_advanced-electrodynamics/)
- [Electrodynamics](/3-electromagnetism/4_electrodynamics/)
- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/)
- [Magnetostatics](/3-electromagnetism/3_magnetostatics/)
