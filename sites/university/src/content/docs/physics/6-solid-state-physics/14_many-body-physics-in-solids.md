---
title: Many-Body Physics in Solids
tags:
  - Physics
  - University
description: ""s **Fermi liquid theory** (1956) states that the low-energy excitations of an interacting
Fermi system can be described as **quasiparticles** --- weakly interacting fermions with
renormalised parameters:

- Effective mass $m^*$ (renormalised by interactions)
- Residual quasiparticle--quasiparticle interactions described by Landau parameters $F_l$

The quasiparticle lifetime goes as $\tau \propto 1/(\varepsilon - \varepsilon_F)^2$So quasiparticles
near the Fermi surface are well-defined (long-lived).

**Experimental signatures of Fermi liquid behaviour:**

- $C_V = \gamma T$ with enhanced $\gamma \propto m^*$
- $\rho = \rho_0 + AT^2$ (quadratic temperature dependence)
- Pauli-like susceptibility $\chi$ (temperature-independent)

**Non-Fermi liquid** behaviour occurs in many correlated systems (cuprates near optimal doping,
heavy fermion materials near quantum critical points) where $\rho \propto T$ (linear) or other
anomalous power laws are observed.

### 14.4 Kondo Effect

When a magnetic impurity (e.g., a single Fe atom) is embedded in a non-magnetic metal, the impurity
spin is screened by conduction electrons at low temperature, forming a singlet state. This is the
**Kondo effect**.

The Kondo temperature $T_K$ sets the energy scale:

$$k_B T_K \sim D\,e^{-1/(N(E_F)J)}$$

Where $D$ is the bandwidth and $J$ is the exchange coupling. Below $T_K$:

- The resistivity increases logarithmically: $\Delta\rho \propto \ln(T_K/T)$
- The impurity moment is fully screened
- A narrow resonance (Kondo resonance) appears at the Fermi level in the density of states

<details>
<summary>Worked Example 14.1: Mott Transition</summary>

Consider the Hubbard model at half-filling on a Bethe lattice (infinite coordination number) with
bandwidth $W = 12t$.

The Mott transition occurs when $U \sim W$. For typical transition metal oxides:

- VO$_2$: $U \sim 1$--$2$ eV, $W \sim 2$ eV --- near the transition (VO$_2$ undergoes a
  metal--insulator transition at $T_c = 340$ K)
- NiO: $U \sim 5$--$8$ eV, $W \sim 2$ eV --- deep in the insulating regime
- SrVO$_3$: $U \sim 1$--$3$ eV, $W \sim 3$ eV --- correlated metal

In the Mott insulator NiO, band theory predicts a partially filled $3d$ band (metal), but strong
correlations open a gap of $\sim 4$ eV between the lower and upper Hubbard bands. This is why DFT
(which underestimates correlations) incorrectly predicts NiO to be metallic, while DFT+$U$ or GW
methods correctly give an insulator.

</details>

<details>
<summary>Worked Example 14.2: Effective Mass Enhancement</summary>

In a heavy fermion material like CeCu$_2$Si$_2$The electronic specific heat coefficient is
$\gamma \approx 1$ J/(mol$\cdot$K$^2$), compared with the free electron value $\gamma_0 \approx 1$
mJ/(mol$\cdot$K$^2$).

The mass enhancement:

$$\frac{m^*}{m_e} = \frac{\gamma}{\gamma_0} \approx \frac{1000}{1} = 1000$$

This enormous enhancement arises from the Kondo effect: the $4f$ electrons of Ce hybridise with
conduction electrons, forming heavy quasiparticles. The Kondo temperature $T_K \sim 10$ K is the
characteristic energy scale.

Similarly, the Pauli susceptibility is enhanced: $\chi/\chi_0 = m^*/m_e = 1000$.

</details>

