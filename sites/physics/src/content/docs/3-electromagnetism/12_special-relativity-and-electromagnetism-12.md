---

date: 2026-07-23T21:57:32+01:00
title: Special Relativity and Electromagnetism
tags:
  - Physics
  - University
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"physics\", \"url\": \"https://physics.wyattau.com\"}, {\"name\": \"3 Electromagnetism\","
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "12_special Relativity And Electromagnetism 12", "url": "https://physics.wyattau.com/3-electromagnetism/12_special-relativity-and-electromagnetism-12"}]
}
</script>

### 12.1 Covariant Formulation

Maxwell's equations in covariant form using the field tensor $F^{\mu\nu}$:

$$\partial_\mu F^{\mu\nu} = \mu_0 J^\nu \quad \text{(inhomogeneous)}$$

$$\partial_\lambda F_{\mu\nu} + \partial_\mu F_{\nu\lambda} + \partial_\nu F_{\lambda\mu} = 0 \quad \text{(homogeneous / Bianchi identity)}$$

The electromagnetic field tensor:

$$F^{\mu\nu} = \begin{pmatrix} 0 & -E_x/c & -E_y/c & -E_z/c \\ E_x/c & 0 & -B_z & B_y \\ E_y/c & B_z & 0 & -B_x \\ E_z/c & -B_y & B_x & 0 \end{pmatrix}$$

The dual tensor: $\tilde{F}^{\mu\nu} = \frac{1}{2}\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$.

The Lorentz force: $f^\mu = qF^{\mu\nu}u_\nu$ where $u^\nu = \gamma(c, \mathbf{v})$ is the
four-velocity.

### 12.2 Lorentz Transformation of Fields

Under a boost with velocity $v$ along the $x$-axis:

$$E'_x = E_x, \quad B'_x = B_x$$

$$E'_y = \gamma(E_y - vB_z), \quad B'_y = \gamma\!\left(B_y + \frac{v}{c^2}E_z\right)$$

$$E'_z = \gamma(E_z + vB_y), \quad B'_z = \gamma\!\left(B_z - \frac{v}{c^2}E_y\right)$$

**Key insight:** $\mathbf{E}$ and $\mathbf{B}$ mix under Lorentz transformations. What appears as a
pure electric field in one frame becomes a mixture of electric and magnetic fields in another. There
is no frame-independent distinction between $\mathbf{E}$ and $\mathbf{B}$.

**Invariants:** $E^2 - c^2B^2$ and $\mathbf{E}\cdot\mathbf{B}$ are Lorentz invariants. A pure
radiation field ($E = cB$, $\mathbf{E}\perp\mathbf{B}$) satisfies both invariants being zero.

### 12.3 Electromagnetic Field Momentum and Angular Momentum

**Field momentum density:**

$$\mathbf{g} = \frac{\mathbf{S}}{c^2} = \varepsilon_0\mathbf{E} \times \mathbf{B}$$

**Field angular momentum:** $\mathbf{L} = \int \mathbf{r} \times \mathbf{g}\, d^3r$.

**Conservation:**
$\frac{d}{dt}\left(\mathbf{p}_{\text{mech} + \mathbf{p}_{\text{field}\right) = 0}}$.

For a charge and a magnetic monopole (if they exist), the field angular momentum
$\mathbf{L} = -qg\hat{\mathbf{r}}/(4\pi)$ is quantised in units of $\hbar/2$Leading to the Dirac
charge quantisation condition $eg = n\hbar/2$.

### 12.4 Key Relationships

| Quantity              | 3-vector form              | 4-vector / tensor form              |
| --------------------- | -------------------------- | ----------------------------------- |
| Potential             | $\phi$, $\mathbf{A}$       | $A^\mu = (\phi/c, \mathbf{A})$      |
| Fields                | $\mathbf{E}$, $\mathbf{B}$ | $F^{\mu\nu} = \partial^\mu A^\nu - \partial^\nu A^\mu$ |
| Charge-current        | $\rho$, $\mathbf{J}$       | $J^\mu = (c\rho, \mathbf{J})$       |
| Force density         | $\rho\mathbf{E} + \mathbf{J}\times\mathbf{B}$ | $f^\mu = F^{\mu\nu}J_\nu$ |
| Energy-momentum       | $u = \frac{1}{2}(\varepsilon_0 E^2 + B^2/\mu_0)$, $\mathbf{S}$ | $T^{\mu\nu}$ |

## Intuition

Special relativity and electromagnetism are inseparable: Maxwell's equations are already relativistically correct, and the electric and magnetic fields are merely different aspects of a single electromagnetic field tensor. What one observer calls a pure electric field, a moving observer sees as a mixture of electric and magnetic components. The field tensor $F^{\mu\nu}$ packages all six field components into a single mathematical object that transforms cleanly under Lorentz boosts. The Lorentz force law becomes a compact four-vector equation, and the conservation of energy-momentum extends to include field contributions. The key physical picture is that electricity and magnetism are not separate forces but different faces of the same relativistic coin, unified by the geometry of spacetime.

### 12.5 Common Pitfalls

- **Assuming $\mathbf{E}$ and $\mathbf{B}$ transform independently.** They do not; the field tensor
  transforms as a whole under Lorentz boosts. A pure electric field in one frame becomes a mixture
  in another.
- **Confusing the dual tensor $\tilde{F}^{\mu\nu}$ with $F^{\mu\nu}$.** The dual swaps electric and
  magnetic fields ($\mathbf{E} \to c\mathbf{B}$, $\mathbf{B} \to -\mathbf{E}/c$) and is used in the
  homogeneous Maxwell equation $\partial_\mu \tilde{F}^{\mu\nu} = 0$.
- **Forgetting that $F^{\mu\nu}$ is antisymmetric.** This antisymmetry encodes the fact that there
  are six independent field components (three for $\mathbf{E}$, three for $\mathbf{B}$).
- **Misapplying the Lorentz force formula.** The relativistic Lorentz force $f^\mu = qF^{\mu\nu}u_\nu$
  gives the four-force, not the three-force. The spatial components reduce to
  $d\mathbf{p}/dt = q(\mathbf{E} + \mathbf{v}\times\mathbf{B})$ in the non-relativistic limit.

### 12.6 Worked Examples

**Problem 1.** Show that $\mathbf{E}\cdot\mathbf{B}$ is a Lorentz invariant.

**Solution.** $\mathbf{E}\cdot\mathbf{B}$ is proportional to $\frac{1}{4}\tilde{F}^{\mu\nu}F_{\mu\nu}$.
Since this is a full contraction of two tensors, it is a scalar and thus invariant. Explicitly:
$\tilde{F}^{\mu\nu}F_{\mu\nu} = -4\mathbf{E}\cdot\mathbf{B}/c$. Under any Lorentz transformation,
both $F^{\mu\nu}$ and $\tilde{F}^{\mu\nu}$ transform as tensors, so their contraction is invariant.
$\blacksquare$

**Problem 2.** Derive the transformation of the Poynting vector under a Lorentz boost.

**Solution.** $\mathbf{S} = \mathbf{E} \times \mathbf{B} / \mu_0$ transforms as part of the
energy-momentum tensor $T^{\mu\nu}$. The components $T^{0i} = S_i/c$ transform under a boost:
$S'_x = S_x$, $S'_y = \gamma(S_y - v u)$, $S'_z = \gamma(S_z + v u)$ where $u$ is the energy density.
This shows that energy flux in one frame contributes to energy density in another. $\blacksquare$

### 12.7 Applications

- **Particle physics:** The covariant formulation is essential for quantum electrodynamics (QED),
  where $F^{\mu\nu}$ couples to the Dirac field via minimal coupling $\partial^\mu \to D^\mu$.
- **Plasma physics:** Relativistic plasmas require the covariant formulation for correct treatment
  of high-energy particle motion in strong electromagnetic fields.
- **Astrophysics:** Pulsar electrodynamics and magnetar fields involve enormous Lorentz factors
  where the field transformation laws govern radiation emission mechanisms.
- **Accelerator physics:** The design of particle accelerators requires precise knowledge of how
  electromagnetic fields appear in the rest frame of relativistic particle bunches.

<details>
<summary>Worked Example 12.1: Fields of a Moving Point Charge</summary>

A point charge $q$ at rest at the origin has
$\mathbf{E} = q\hat{\mathbf{r}}/(4\pi\varepsilon_0 r^2)$, $\mathbf{B} = 0$.

In a frame moving with velocity $v$ along the $x$-axis, the fields at the boosted position are:

$$E'_y = \gamma\frac{qy'}{4\pi\varepsilon_0(r'^2 + \gamma^2 v^2 t'^2)^{3/2}}, \quad B'_z = -\frac{v}{c^2}E'_y$$

At $t' = 0$: $\mathbf{E}'$ is still radial (from the instantaneous position) but with an enhanced
transverse component by factor $\gamma$. The magnetic field is
$\mathbf{B}' = -\mathbf{v} \times \mathbf{E}'/c^2$Circulating around the direction of motion.

The Poynting vector $\mathbf{S}' = \mathbf{E}' \times \mathbf{B}'/\mu_0$ is nonzero even for a
uniformly moving charge (it points outward and forward, indicating energy flow in the direction of
motion).

For ultrarelativistic motion ($\gamma \gg 1$): the fields are concentrated in a thin disk of angular
width $\sim 1/\gamma$ around the plane perpendicular to the motion. This is the basis of
**synchrotron radiation** patterns.

</details>

## Cross-References

- [Electromagnetic Waves](5_electromagnetic-waves) -- The plane-wave solutions and energy-momentum tensor provide the starting point for the covariant field analysis.
- [Special Relativity and Electromagnetism (Ch. 7)](7_special-relativity-and-electromagnetism) -- The field tensor and Lorentz transformation laws are developed in detail in the earlier chapter on special relativity.
- [Radiation from Accelerating Charges](10_radiation-from-accelerating-charges) -- The synchrotron radiation patterns arise from the field configurations of ultrarelativistic charges treated here.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
