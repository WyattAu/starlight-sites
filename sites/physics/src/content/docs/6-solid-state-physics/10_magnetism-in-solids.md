---

date: 2026-07-23T21:57:32+01:00
title: Magnetism in Solids
tags:
  - Physics
  - University
description: "- Weak, negative susceptibility (). Present in all materials. Arises from the orbital response to an applied field (Lenz' s law). . - Positive susceptibility"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "6 Solid State Physics", "url": "https://physics.wyattau.com/6-solid-state-physics"}, {"name": "10_magnetism In Solids", "url": "https://physics.wyattau.com/6-solid-state-physics/10_magnetism-in-solids"}]
}
</script>

### 10.1 Types of Magnetism

- **Diamagnetism:** Weak, negative susceptibility ($\chi \lt 0$). Present in all materials. Arises
  from the orbital response to an applied field (Lenz's law). $\chi_d \sim -10^{-5}$.
- **Paramagnetism:** Positive susceptibility ($\chi \gt 0$). Unpaired spins align with the field.
  Curie law: $\chi = C/T$ where $C = N\mu_0\mu_{\mathrm{eff}^2/(3k_B)}$.
- **Ferromagnetism:** Large positive susceptibility. Spontaneous magnetisation below the Curie
  temperature $T_C$.
- **Antiferromagnetism:** Adjacent spins antiparallel. Susceptibility peaks at the Néel temperature
  $T_N$.
- **Ferrimagnetism:** Antiparallel spins of unequal magnitude. Net magnetisation (e.g., magnetite).

### 10.2 Diamagnetism

Diamagnetism is the universal tendency of matter to weakly oppose an applied magnetic field.

**Langevin diamagnetism.** For an atom with $Z$ electrons, each in a circular orbit of radius
$\langle r^2 \rangle$A field $B$ along $z$ modifies the angular velocity by
$\Delta\omega = eB/(2m_e)$. The induced magnetic moment per atom:

$$\mu_{\mathrm{dia} = -\frac{e^2 B}{6m_e}\sum_{i=1}^{Z}\langle r_i^2 \rangle = -\frac{e^2 Z B}{6m_e}\langle r^2 \rangle}$$

The susceptibility (per unit volume, with $n$ atoms per unit volume):

$$\chi_L = -\frac{\mu_0 n e^2 Z \langle r^2 \rangle}{6m_e}$$

This is independent of temperature and very small: $\chi_L \sim -10^{-5}$.

**Landau diamagnetism.** Free electrons also exhibit diamagnetism. The quantisation of electron
Orbits into Landau levels modifies the ground-state energy in an applied field:

$$\chi_{\mathrm{Landau} = -\frac{1}{3}\chi_P = -\frac{\mu_0 \mu_B^2 g(\varepsilon_F)}{3}}$$

Where $\chi_P$ is the Pauli paramagnetic susceptibility. The total susceptibility of a free electron
Gas is $\chi = \chi_P + \chi_{\mathrm{Landau} = \frac{2}{3}\chi_P}$ (still paramagnetic, but Reduced
by one-third).

### 10.3 Paramagnetism

**Langevin paramagnetism (classical).** For $N$ non-interacting magnetic moments $\boldsymbol{\mu}$
Of magnitude $\mu$ in a field $B$:

$$M = N\mu\, L(\mu B/k_B T)$$

Where $L(x) = \coth x - 1/x$ is the Langevin function. At high temperature ($\mu B \ll k_B T$):

$$L(x) \approx \frac{x}{3} \implies M \approx \frac{N\mu^2 B}{3k_B T}$$

Giving the **Curie law** $\chi = C/T$ with $C = N\mu_0\mu^2/(3k_B)$.

**Quantum treatment (Brillouin function).** For angular momentum $J$ with $g_J$ the Landé g-factor,
The magnetisation is:

$$M = Ng_J\mu_B J\, B_J(x)$$

Where $x = g_J\mu_B J B/(k_B T)$ and
$B_J(x) = \frac{2J+1}{2J}\coth\left(\frac{2J+1}{2J}x\right) - \frac{1}{2J}\coth\left(\frac{x}{2J}\right)$
Is the Brillouin function. For $J = 1/2$ (spin-1/2), $B_{1/2}(x) = \tanh x$.

**Pauli paramagnetism.** In a metal, the conduction electrons form a degenerate Fermi gas. Only
Electrons near $\varepsilon_F$ can flip their spins in response to a field:

$$\chi_P = \mu_0\mu_B^2\,g(\varepsilon_F) = \frac{3\mu_0\mu_B^2 N}{2\varepsilon_F}$$

This is temperature-independent (up to corrections of order $(T/T_F)^2$), in contrast to the Curie
Law. The ratio $\chi_P/\chi_{\mathrm{Curie} \sim T/T_F \sim 10^{-2}}$ at room temperature,
Explaining why metals are only weakly paramagnetic.

### 10.4 Ferromagnetism and the Mean-Field Theory

In the **mean-field (Weiss) model**, each spin experiences an effective field:

$$B_{\mathrm{eff} = B_0 + \lambda M}$$

Where $\lambda$ is the molecular field constant and $M$ is the magnetisation.

The spontaneous magnetisation satisfies:

$$M = N\mu_B\tanh\left(\frac{\mu_B(B_0 + \lambda M)}{k_B T}\right)$$

Setting $B_0 = 0$ and expanding for small $M$ near $T_C$:

$$M \approx \frac{N\mu_B^2\lambda M}{k_B T_C}$$

Giving the **Curie temperature:** $T_C = N\mu_B^2\lambda/k_B$.

The critical exponent $\beta = 1/2$ (mean-field value), compared with the experimental value
$\beta \approx 1/3$ (3D Ising universality class).

Above $T_C$The susceptibility follows the **Curie--Weiss law:**

$$\chi = \frac{C}{T - T_C}$$

<details>
<summary>Worked Example: Curie Temperature of Iron</summary>

Iron has $N = 8.49 \times 10^{28}$ atoms/m$^3$Magnetic moment $\mu = 2.22\,\mu_B$ per atom, And
$T_C = 1043$ K. From $T_C = N\mu^2\lambda/(3k_B)$:

$$\lambda = \frac{3k_B T_C}{N\mu^2} = \frac{3 \times 1.381 \times 10^{-23} \times 1043}{8.49 \times 10^{28} \times (2.22 \times 9.274 \times 10^{-24})^2}$$

$$\lambda = \frac{4.32 \times 10^{-20}}{8.49 \times 10^{28} \times 4.25 \times 10^{-46}} = \frac{4.32 \times 10^{-20}}{3.61 \times 10^{-17}} = 1.20 \times 10^{-3}\ \mathrm{T}\,m/A$$

The corresponding exchange field at $T = 0$ ($M = N\mu$):

$$B_{\mathrm{ex} = \lambda M = 1.20 \times 10^{-3} \times 8.49 \times 10^{28} \times 2.22 \times 9.274 \times 10^{-24} = 2100\ \mathrm{T}}$$

This enormous effective field is purely quantum-mechanical in origin (exchange interaction).

</details>

### 10.5 Magnetic Domains

Below $T_C$A ferromagnet divides into **domains** of uniform magnetisation, separated by **domain
Walls** (Bloch walls). Domain formation reduces the magnetostatic energy.

The **domain wall width:** $\delta \sim \sqrt{A/K}$ where $A$ is the exchange stiffness and $K$ is
the Anisotropy constant. Typical values: $\delta \sim 100$ nm.

The wall energy per unit area: $\sigma_w \sim 4\sqrt{AK}$.

### 10.6 Magnetic Ordering

**Antiferromagnetism.** In antiferromagnets (e.g., MnO, NiO), adjacent spins align antiparallel due
To negative exchange interaction $J \lt 0$. The Néel temperature is:

$$T_N = \frac{\lvert J\rvert z S(S+1)}{3k_B}$$

Where $z$ is the number of nearest neighbours. The susceptibility peaks at $T_N$ and decreases at
Both higher and lower temperatures.

**Ferrimagnetism.** In ferrimagnets (e.g., Fe$_3$O$_4$), antiparallel sublattices have different
Magnetic moments, giving a net spontaneous magnetisation. The temperature dependence of $M(T)$ is
More complex than for simple ferromagnets.

**Heisenberg model.** The exchange interaction between neighbouring spins is described by:

$$\hat{H} = -\sum_{\langle i,j\rangle} J_{ij}\,\hat{\mathbf{S}}_i \cdot \hat{\mathbf{S}}_j$$

For $J \gt 0$: ferromagnetic coupling (spins parallel). For $J \lt 0$: antiferromagnetic coupling
(spins antiparallel). The exchange integral $J$ arises from the combination of Coulomb repulsion and
The Pauli exclusion principle (not from magnetic dipole interactions, which are far too weak).

### 10.7 Spin Waves (Magnons)

At low temperatures ($T \ll T_C$), the reduction in magnetisation below saturation is carried by
Collective excitations called **spin waves** or **magnons**.

**Linear spin wave theory.** For a 1D chain of spins with nearest-neighbour exchange $J$ and Lattice
constant $a$The magnon dispersion is:

$$\hbar\omega(q) = 2JS[1 - \cos(qa)] = 4JS\sin^2\left(\frac{qa}{2}\right)$$

For small $q$ (long wavelength): $\hbar\omega \approx JSa^2 q^2$ (quadratic dispersion, unlike
Phonons which are linear).

The magnetisation at low $T$:

$$M(T) = M(0)\left[1 - \zeta(3/2)\left(\frac{k_B T}{4\pi JS}\right)^{3/2}\right]$$

In 3D, where $\zeta(3/2) \approx 2.612$ is the Riemann zeta function. The $T^{3/2}$ dependence
(Bloch $T^{3/2}$ law) is well confirmed experimentally and contrasts with the exponential Freeze-out
of a classical paramagnet.

Magnons are bosons and obey Bose--Einstein .../4-statistics-and-probability/2*statistics. They
contribute to the low-temperature Specific heat of ferromagnets: $C*{\mathrm{mag} \propto T^{3/2}}$.

### 10.8 The de Haas--van Alphen Effect

In a magnetic field, the electron orbits are quantised into **Landau levels**:

$$\varepsilon_n = \left(n + \frac{1}{2}\right)\hbar\omega_c, \quad \omega_c = \frac{eB}{m^*}$$

The density of states oscillates with $1/B$ (de Haas--van Alphen oscillations). The oscillation
period Gives the extremal cross-sectional area of the Fermi surface:

$$\Delta\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\mathrm{ext}}}$$

This is the primary experimental technique for mapping Fermi surfaces.

<aside class="starlight-aside starlight-aside--caution">
dipole interaction. The dipole energy between two spins is $\sim \mu_0\mu_B^2/a^3 \sim 10^{-4}$ eV,
far too small to Explain Curie temperatures of $\sim 10^3$ K ($\sim 0.1$ eV). The exchange
interaction is a Consequence of the Coulomb repulsion combined with the antisymmetry of the electron
wave function (Pauli principle), and is $10$--$100$ meV.


</aside>

## Intuition

Magnetism in solids arises from the alignment of electron spins and orbital angular momenta. Diamagnetism is universal: every material develops a weak opposing magnetization when placed in a magnetic field, like a spring pushing back. Paramagnetism requires unpaired electrons whose spins can align with the field, overcoming thermal randomness. Ferromagnetism occurs when exchange interactions lock neighboring spins into parallel alignment, creating spontaneous magnetization below the Curie temperature. Antiferromagnetism has neighboring spins pointing opposite, canceling out. Ferrimagnetism has unequal opposing spins, producing a net magnetization. The exchange interaction is purely quantum mechanical, arising from the overlap of electron wavefunctions and the Pauli exclusion principle.

### 10.8 Common Mistakes

**Mistake 1: Confusing diamagnetism with paramagnetism.**
Diamagnetism is a universal, weak, negative susceptibility that opposes the applied field. Paramagnetism is a positive susceptibility that aligns with the field. Diamagnetism is present in all materials, while paramagnetism requires unpaired spins. Do not confuse the two; they have opposite signs of susceptibility.

**Mistake 2: Assuming that ferromagnetism is a quantum effect.**
Ferromagnetism arises from the exchange interaction, which is a quantum mechanical effect due to the Pauli exclusion principle and Coulomb repulsion. Classical physics cannot explain ferromagnetism. Do not assume that ferromagnetism can be understood classically.

**Mistake 3: Forgetting that the Curie temperature is a phase transition.**
The Curie temperature $T_C$ marks the transition from ferromagnetic to paramagnetic behavior. Above $T_C$, the material is paramagnetic; below $T_C$, it is ferromagnetic. Do not assume that ferromagnetism persists above $T_C$; the spontaneous magnetization vanishes at $T_C$.

**Mistake 4: Confusing the Néel temperature with the Curie temperature.**
The Néel temperature $T_N$ marks the transition from antiferromagnetic to paramagnetic behavior. The Curie temperature $T_C$ marks the transition from ferromagnetic to paramagnetic behavior. Do not confuse the two; they apply to different types of magnetic ordering.

**Mistake 5: Assuming that all magnetic materials are ferromagnetic.**
Most materials are not ferromagnetic; they are diamagnetic, paramagnetic, antiferromagnetic, or ferrimagnetic. Ferromagnetism is relatively rare (e.g., Fe, Co, Ni). Do not assume that a material is ferromagnetic just because it is magnetic.

## Cross-References

- **[Crystal Structures](1_crystal-structures)**: The crystal structure determines the magnetic ordering through exchange interactions and magnetic anisotropy.
- **[Lattice Vibrations and Phonons](4_lattice-vibrations-and-phonons)**: Magnons (spin waves) are the magnetic analogue of phonons, describing collective excitations of ordered spins.
- **[Semiconductors](6_semiconductors)**: Diluted magnetic semiconductors and spintronics combine semiconductor physics with magnetic ordering.
- **[Many-Body Physics in Solids](14_many-body-physics-in-solids)**: Exchange interactions and magnetic ordering arise from the many-body physics of interacting electrons.
- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
