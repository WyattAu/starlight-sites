---
title: Quantum Statistics in Detail
tags:
  - Physics
  - University
description: 'Quantum Statistics in Detail: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems.'
---

### 15.1 Fermi--Dirac and Bose--Einstein Distributions

For non-interacting quantum particles:

$$\langle n_i \rangle = \frac{1}{e^{\beta(\epsilon_i - \mu)} \pm 1}$$

Where $+$ is for fermions (Fermi--Dirac) and $-$ for bosons (Bose--Einstein).

**Fermions** (half-integer spin): Pauli exclusion limits $\langle n_i \rangle \leq 1$.

**Bosons** (integer spin): No restriction on occupation number; $\langle n_i \rangle$ can diverge
when $\epsilon_i = \mu$.

### 15.2 The Fermi Gas

For a 3D gas of $N$ non-interacting fermions in volume $V$:

$$N = \sum_{\mathbf{k}} \frac{1}{e^{\beta(\hbar^2 k^2/2m - \mu)} + 1} \xrightarrow{\text{continuum} \frac{V}{(2\pi)^3}\int d^3k\, f(\epsilon_k)}$$

The **Fermi energy** at $T = 0$:

$$\epsilon_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$$

Where $n = N/V$ is the number density. The **Fermi temperature** is $T_F = \epsilon_F/k_B$.

At low temperature ($T \ll T_F$), the Sommerfeld expansion gives:

$$E = \frac{3}{5}N\epsilon_F\left[1 + \frac{5\pi^2}{12}\left(\frac{T}{T_F}\right)^2 + \cdots\right]$$

$$C_V = Nk_B\frac{\pi^2}{2}\frac{T}{T_F} + \cdots$$

The linear specific heat is a hallmark of degenerate Fermi systems.

### 15.3 The Bose Gas and Bose--Einstein Condensation

For bosons, the chemical potential must satisfy $\mu \leq \epsilon_0$ (ground state energy). When
$\mu \to \epsilon_0$A macroscopic fraction of particles condenses into the ground state.

The **critical temperature** for BEC in 3D:

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

Where $\zeta(3/2) \approx 2.612$.

Below $T_c$The condensate fraction is:

$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

<details>
<summary>Worked Example 15.1: Fermi Energy of Copper</summary>

Copper has one conduction electron per atom, atomic mass $63.5$ g/mol, density $8.96$ g/cm$^3$.

$$n = \frac{8.96 \times 10^3 \text{ kg/m}^3}{63.5 \times 10^{-3} \text{ kg/mol} \times N_A = 1.41 \times 10^{29} \text{ m}^{-3} \times 6.022 \times 10^{23} = 8.49 \times 10^{28} \text{ m}^{-3}}$$

$$\epsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 \times 8.49 \times 10^{28})^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}} \times (2.52 \times 10^{30})^{2/3}$$

$$= \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 1.846 \times 10^{20}$$

$$= 6.11 \times 10^{-39} \times 1.846 \times 10^{20} = 1.13 \times 10^{-18} \text{ J}$$

$$T_F = \frac{1.13 \times 10^{-18}}{1.38 \times 10^{-23}} \approx 81\,900 \text{ K}$$

This is enormously higher than room temperature, confirming that conduction electrons in metals form
a highly degenerate Fermi gas.

</details>

<details>
<summary>Worked Example 15.2: BEC in a Trap</summary>

For $N = 10^6$ rubidium-87 atoms in a harmonic trap with frequency $\bar{\omega}/(2\pi) = 100$ Hz:

In a harmonic trap, the density of states is
$g(\epsilon) = \epsilon^2/(2\hbar^3\bar{\omega}^3)$Giving:

$$T_c = \frac{\hbar\bar{\omega}}{k_B}\left(\frac{6N}{\pi^2\zeta(3)}\right)^{1/3}$$

$$= \frac{1.055 \times 10^{-34} \times 2\pi \times 100}{1.38 \times 10^{-23}}\left(\frac{6 \times 10^6}{\pi^2 \times 1.202}\right)^{1/3}$$

$$= \frac{6.63 \times 10^{-32}}{1.38 \times 10^{-23}} \times (5.07 \times 10^5)^{1/3}$$

$$= 4.81 \times 10^{-9} \times 79.7 \approx 383 \text{ nK}$$

This is consistent with the 1995 Cornell--Wieman BEC experiment.

</details>

### Key Relationships

| Concept | Relation | Significance |
|---------|----------|--------------|
| Distribution function | $\langle n_i \rangle = (e^{\beta(\epsilon_i-\mu)} \pm 1)^{-1}$ | Unified form for FD/BE |
| Fermi energy | $\epsilon_F = \hbar^2(3\pi^2 n)^{2/3}/(2m)$ | Sets scale for degenerate fermions |
| BEC critical temperature | $T_c = 2\pi\hbar^2 n^{2/3}/(mk_B \zeta(3/2)^{2/3})$ | Phase transition temperature |
| Sommerfeld expansion | $C_V \propto T/T_F$ | Linear specific heat at low $T$ |
| Condensate fraction | $N_0/N = 1 - (T/T_c)^{3/2}$ | Order parameter for BEC |

### Common Pitfalls

1. **Confusing FD and BE limits:** At high temperature ($T \gg T_F$ or $T \gg T_c$), both distributions reduce to the Maxwell--Boltzmann distribution. The quantum statistical corrections vanish when the interparticle spacing is much larger than the thermal de Broglie wavelength.

2. **Chemical potential for bosons:** For bosons, $\mu$ must always be less than the ground state energy. Setting $\mu > \epsilon_0$ gives negative occupation numbers, which is unphysical. At $T_c$, $\mu \to 0$ (for a free gas with $\epsilon_0 = 0$).

3. **Continuum approximation validity:** The $g(\epsilon) \propto \sqrt{\epsilon}$ density of states assumes a large volume. For small systems (nanoparticles, quantum dots), the discrete level structure becomes important and the integral approximation fails.

4. **BEC requires dimensionality:** In 1D and 2D, Bose--Einstein condensation does not occur in a uniform gas (Hohenberg's theorem). Trapping potentials can, however, create quasi-condensates in lower dimensions.

### Applications

- **Metals and degenerate fermions:** The electron specific heat $C_V = \gamma T$ in metals directly reflects the Fermi degeneracy. The Sommerfeld parameter $\gamma$ measures the density of states at the Fermi level.
- **Ultracold atoms:** BEC in dilute atomic gases (Rb, Na, Li) enables studies of superfluidity, quantised vortices, and matter-wave interferometry.
- **Neutron stars:** Degenerate neutron Fermi pressure supports neutron stars against gravitational collapse, with $\epsilon_F \sim 50$ MeV.
- **White dwarfs:** Electron degeneracy pressure balances gravity, with the Chandrasekhar mass limit arising from relativistic Fermi gas physics.

### Connections to Other Topics

- **Particle physics:** Neutrinos in the early universe follow FD statistics. The neutrino background temperature ($T_\nu \approx 1.95$ K) is slightly lower than the CMB due to $e^+e^-$ annihilation heating the photon bath.
- **Condensed matter:** Heavy fermion materials have effective masses $m^* \gg m_e$, producing Fermi temperatures $T_F \sim 10$--$100$ K where quantum degeneracy meets accessible laboratory conditions.
- **Cosmology:** The Bose--Einstein condensate has been proposed as a dark matter candidate (fuzzy dark matter), with a de Broglie wavelength of kiloparsec scales smoothing small-scale structure.
- **Quantum information:** Degenerate Fermi gases in optical lattices simulate the Hubbard model, with the Pauli exclusion principle enforcing the no-double-occupancy constraint at half-filling.

### Summary Table: Comparison of Quantum and Classical Gases

| Property | Maxwell--Boltzmann | Fermi--Dirac | Bose--Einstein |
|----------|-------------------|-------------|----------------|
| Particles | Distinguishable | Indistinguishable fermions | Indistinguishable bosons |
| Occupation | $\langle n_i \rangle = e^{-(\epsilon_i-\mu)/k_BT}$ | $\langle n_i \rangle \leq 1$ | $\langle n_i \rangle$ unrestricted |
| Low-$T$ behaviour | All in ground state | Fermi sea | BEC |
| $C_V$ at low $T$ | $\frac{3}{2}Nk_B$ | $\propto T$ | $\propto T^{3/2}$ |
| Validity condition | $n\lambda_{\text{th}}^3 \ll 1$ | $n\lambda_{\text{th}}^3 \gtrsim 1$ | $n\lambda_{\text{th}}^3 \gtrsim 2.612$ |
| Symmetry of wavefunction | No constraint | Antisymmetric | Symmetric |

