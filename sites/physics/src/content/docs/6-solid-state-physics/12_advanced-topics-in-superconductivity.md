---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "6 Solid State Physics", "url": "https://physics.wyattau.com/6-solid-state-physics"}, {"name": "12_advanced Topics In Superconductivity", "url": "https://physics.wyattau.com/6-solid-state-physics/12_advanced-topics-in-superconductivity"}]
}
</script>
title: Advanced Topics in Superconductivity
tags:
  - Physics
  - University
description: 'The Ginzburg--Landau (GL) theory provides a phenomenological description of supe Comprehensive educational content coverage with definitions and practice proble'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "6 Solid State Physics", "url": "https://physics.wyattau.com/6-solid-state-physics"}, {"name": "12_advanced Topics In Superconductivity", "url": "https://physics.wyattau.com/6-solid-state-physics/12_advanced-topics-in-superconductivity"}]
}
</script>

### 12.1 Ginzburg--Landau Theory

The Ginzburg--Landau (GL) theory provides a phenomenological description of superconductivity near
$T_c$ using a complex order parameter $\psi(\mathbf{r})$ where $|\psi|^2 = n_s$ is the superfluid
density.

The GL free energy functional:

$$\mathcal{F} = \mathcal{F}_n + \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2m^*}\left|\left(-i\hbar\nabla - e^*\mathbf{A}\right)\psi\right|^2 + \frac{|\mathbf{B}|^2}{2\mu_0}$$

Where $\alpha = \alpha_0(T - T_c)$ (negative below $T_c$), $\beta > 0$, $m^* = 2m_e$, $e^* = 2e$
(Cooper pair charge), and $\mathbf{A}$ is the vector potential.

Minimising with respect to $\psi^*$ gives the **first GL equation**:

$$\alpha\psi + \beta|\psi|^2\psi + \frac{1}{2m^*}\left(-i\hbar\nabla - e^*\mathbf{A}\right)^2\psi = 0$$

Minimising with respect to $\mathbf{A}$ gives the **second GL equation** (supercurrent):

$$\mathbf{J}_s = \frac{e^*\hbar}{m^*}\left(\psi^*\nabla\psi - \psi\nabla\psi^*\right) - \frac{e^{*2}}{m^*}|\psi|^2\mathbf{A}$$

### 12.2 Coherence Length and Penetration Depth

Two fundamental length scales emerge from the GL theory:

**Coherence length** (characterises the spatial variation of $|\psi|$):

$$\xi(T) = \sqrt{\frac{\hbar^2}{2m^*|\alpha|}} = \frac{\xi_0}{\sqrt{1 - T/T_c}}$$

**Penetration depth** (characterises the decay of $\mathbf{B}$):

$$\lambda(T) = \sqrt{\frac{m^*}{\mu_0 e^{*2}|\psi_\infty|^2}} = \frac{\lambda_0}{\sqrt{1 - T/T_c}}$$

Where $|\psi_\infty|^2 = |\alpha|/\beta$ is the bulk equilibrium value.

The ratio of these length scales determines the superconductor type:

$$\kappa = \frac{\lambda}{\xi}$$

- $\kappa < 1/\sqrt{2}$: Type I (positive surface energy)
- $\kappa > 1/\sqrt{2}$: Type II (negative surface energy, mixed state favourable)

### 12.3 Abrikosov Vortices

In the mixed state of a Type II superconductor ($B_{c1} < B < B_{c2}$), magnetic flux penetrates in
quantised vortices, each carrying one flux quantum:

$$\Phi_0 = \frac{h}{2e} = 2.07 \times 10^{-15}\ \mathrm{Wb}$$

The vortex core (radius $\sim\xi$) is in the normal state, while supercurrents circulate around it
(decaying over $\sim\lambda$).

The upper critical field from GL theory:

$$B_{c2} = \frac{\Phi_0}{2\pi\xi^2}$$

The lower critical field:

$$B_{c1} = \frac{\Phi_0}{4\pi\lambda^2}\ln\kappa$$

The thermodynamic critical field:

$$B_c = \frac{\Phi_0}{2\pi\sqrt{2}\xi\lambda}$$

These satisfy $B_{c1} < B_c < B_{c2}$ for $\kappa > 1/\sqrt{2}$.

### 12.4 Flux Quantisation and Josephson Effect

**Flux quantisation.** The GL order parameter must be single-valued. Integrating the supercurrent
around a closed loop enclosing flux $\Phi$:

$$\oint \nabla\theta \cdot d\mathbf{l} = \frac{2\pi\Phi}{\Phi_0} = 2\pi n$$

Where $\theta$ is the phase of $\psi$ and $n$ is an integer. Hence $\Phi = n\Phi_0$.

**DC Josephson effect.** For a superconductor--insulator--superconductor (SIS) junction with phase
difference $\delta$:

$$I = I_c \sin\delta$$

Where $I_c$ is the critical current.

**AC Josephson effect.** Applying a voltage $V$ across the junction causes the phase to evolve as
$\dot{\delta} = 2eV/\hbar$. Giving:

$$I = I_c\sin\!\left(\delta_0 + \frac{2eV}{\hbar}t\right)$$

The oscillation frequency $\nu = 2eV/h$ provides the basis for the Josephson voltage standard:
$V = n(h/2e)\nu$.

### 12.5 Common Pitfalls

- **Confusing $\xi$ and $\lambda$.** The coherence length $\xi$ governs how fast the order parameter
  $\psi$ varies in space; the penetration depth $\lambda$ governs how fast the magnetic field decays.
  They are independent length scales that happen to appear in the same theory.
- **Type I vs Type II threshold.** The criterion $\kappa = 1/\sqrt{2}$ is exact within GL theory. Do
  not confuse this with $\kappa = 1$ or other round numbers. The $1/\sqrt{2}$ factor arises from
  comparing the surface energies of normal-superconducting boundaries.
- **Flux quantum uses $2e$, not $e$.** Each vortex carries $\Phi_0 = h/(2e)$ because the
  superconducting condensate consists of Cooper pairs with charge $2e$. A common error is to use
  $h/e$ (the normal-state flux quantum for single electrons).
- **GL theory is valid only near $T_c$.** The phenomenological expansion in $|\psi|$ assumes
  $|\psi|$ is small, which holds when $T$ is close to $T_c$. Far below $T_c$, microscopic BCS
  theory is required.
- **AC Josephson frequency is exact.** The relation $\nu = 2eV/h$ does not depend on junction
  geometry or material properties. It is a fundamental quantum relation used to define the volt.

### 12.6 Connection to BCS Theory

The GL theory is phenomenological — it does not explain *why* superconductivity occurs. The
microscopic BCS theory (Bardeen, Cooper, Schrieffer, 1957) provides this explanation:

- **Cooper pairs.** An attractive interaction mediated by phonons (lattice vibrations) allows
  electrons with opposite momenta and spins to form bound pairs. The binding energy is the
  superconducting gap $\Delta(T)$, which vanishes at $T_c$.
- **Gap equation.** At $T = 0$, the gap relates to $T_c$ via $2\Delta(0) = 3.53\, k_B T_c$
  (weak-coupling limit). This ratio is approximately universal for conventional superconductors.
- **Coherence length from BCS.** The BCS coherence length $\xi_0 = \hbar v_F / (\pi \Delta_0)$
  where $v_F$ is the Fermi velocity. Typical values: $\xi_0 \sim 10$--$1000$ nm for conventional
  superconductors.
- **Penetration depth from BCS.** $\lambda_0 = \sqrt{m^*/(\mu_0 n_s e^{*2})}$ where $n_s$ is the
  superfluid density (all conduction electrons below $T_c$).

The GL parameters $\alpha$ and $\beta$ can be expressed in terms of BCS quantities near $T_c$:
$\alpha = -1/(N(0)\xi_0^2)$ and $\beta = 1/(N(0)\Delta_0^2)$, where $N(0)$ is the density of
states at the Fermi level. This connection shows that GL theory is the correct Ginzburg--Landau
limit of BCS theory when $T \to T_c$.

<details>
<summary>Worked Example 12.1: Type I vs Type II Classification</summary>

Niobium has $\xi_0 = 39$ nm and $\lambda_0 = 39$ nm, giving
$\kappa = \lambda/\xi = 1.0 > 1/\sqrt{2} \approx 0.71$. Therefore Nb is Type II.

$$B_{c2} = \frac{\Phi_0}{2\pi\xi^2} = \frac{2.07 \times 10^{-15}}{2\pi \times (39 \times 10^{-9})^2} = \frac{2.07 \times 10^{-15}}{9.55 \times 10^{-15}} \approx 0.217\ \mathrm{T}$$

The experimental $B_{c2}(0) \approx 0.4$ T. The discrepancy arises because the GL expressions use
$\xi$ and $\lambda$ at $T_c$, while the actual values differ at $T = 0$.

For aluminium: $\xi_0 = 1600$ nm, $\lambda_0 = 16$ nm, $\kappa = 0.01 \ll 1/\sqrt{2}$. Al is
strongly Type I.

</details>

<details>
<summary>Worked Example 12.2: Josephson Junction Frequency</summary>

A voltage $V = 1\ \mu$V is applied across a Josephson junction:

$$\nu = \frac{2eV}{h} = \frac{2 \times 1.602 \times 10^{-19} \times 10^{-6}}{6.626 \times 10^{-34}} = \frac{3.204 \times 10^{-25}}{6.626 \times 10^{-34}} = 4.836 \times 10^{8}\ \mathrm{Hz} \approx 483.6\ \mathrm{MHz}$$

The convenient relation is $\nu/\text{GHz} = 483.6 \times V/\mu\text{V}$. This precise
frequency-voltage relation is used to maintain the volt standard worldwide.

</details>

### 12.6 Applications

| Application | Principle | Key Parameters |
|---|---|---|
| MRI magnets | Persistent supercurrents in Type II Nb-Ti coils | $B \approx 1.5$--$7$ T; $\lambda \approx 90$ nm |
| SQUID magnetometers | Flux quantisation in a superconducting loop with Josephson junctions | Sensitivity $\sim 10^{-15}$ T |
| Josephson voltage standard | AC Josephson effect: $\nu = 2eV/h$ | Accuracy $\sim 10^{-10}$ |
| Particle accelerator dipoles | Type II Nb$_3$Sn for high-field confinement | $B \approx 8$--$16$ T |
| Quantum computing (transmons) | Josephson junction as non-linear inductor | $E_J/E_C \sim 50$--$100$ |

The GL theory underpins the design of all these devices. For MRI and accelerator magnets, the
critical current density $J_c$ (determined by vortex pinning) is the key engineering parameter.

## Cross-References

- **[Superconductivity](./7_superconductivity.md)**: Provides the basic BCS theory and phenomenology that the Ginzburg-Landau theory generalises near the critical temperature.
- **[Electronic Band Structure](./5_electronic-band-structure.md)**: The density of states at the Fermi level and the Fermi velocity enter the BCS expressions for the coherence length and penetration depth.
- **[Topological Insulators and Semimetals](./13_topological-insulators-and-semimetals.md)**: Majorana zero modes at the interface of a superconductor and a topological insulator provide a platform for topological quantum computing.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Intuition

Superconductivity is the complete disappearance of electrical resistance below a critical temperature. Electrons pair up into Cooper pairs through lattice vibrations, forming a macroscopic quantum state that flows without scattering. Type I superconductors expel all magnetic flux (Meissner effect), while Type II superconductors allow flux to penetrate in quantized vortices. The Ginzburg-Landau theory describes the superconducting order parameter as a complex field whose magnitude squared gives the density of superconducting electrons. The coherence length and penetration depth compete: when the penetration depth exceeds the coherence length, the material becomes Type II. Josephson junctions exploit the phase sensitivity of the supercurrent to create ultra-sensitive magnetometers and voltage standards.

### 12.7 Key Relationships Summary

| Quantity | Expression | Notes |
|---|---|---|
| Coherence length | $\xi(T) = \xi_0/\sqrt{1 - T/T_c}$ | Diverges at $T_c$ |
| Penetration depth | $\lambda(T) = \lambda_0/\sqrt{1 - T/T_c}$ | Diverges at $T_c$ |
| GL parameter | $\kappa = \lambda/\xi$ | $< 1/\sqrt{2}$: Type I; $> 1/\sqrt{2}$: Type II |
| Flux quantum | $\Phi_0 = h/(2e) = 2.07 \times 10^{-15}$ Wb | Cooper pair charge $2e$ |
| Upper critical field | $B_{c2} = \Phi_0/(2\pi\xi^2)$ | GL result |
| Lower critical field | $B_{c1} = (\Phi_0/4\pi\lambda^2)\ln\kappa$ | GL result |
| DC Josephson | $I = I_c \sin\delta$ | Phase-dependent supercurrent |
| AC Josephson | $\nu = 2eV/h$ | Frequency-voltage relation |

