---
title: The Grand Canonical Ensemble
tags:
  - Physics
  - University
description: "In many physical situations, a system exchanges both energy and particles with a reservoir. The describes such open systems. The macroscopic variables are"
---

### 3.1 Definition and Motivation

In many physical situations, a system exchanges both energy and particles with a reservoir. The
**grand canonical ensemble** describes such open systems. The macroscopic variables are the chemical
potential $\mu$The volume $V$And the temperature $T$.

**Definition.** The **grand partition function** is

$$\Xi = \sum_{N=0}^{\infty} \sum_{i} e^{-\beta(E_{i}^{(N)} - \mu N)}$$

Where the outer sum is over all possible particle numbers $N$ and the inner sum is over all states
with $N$ particles.

The probability that the system is in state $i$ with $N$ particles is

$$P_{i,N} = \frac{e^{-\beta(E_{i}^{(N)} - \mu N)}}{\Xi}$$

### 3.2 Thermodynamic Relations

**Theorem 3.1.** The grand potential $\Phi_G = -k_BT \ln \Xi$ satisfies

$$\Phi_G = F - \mu N = -PV$$

_Proof._ For a classical ideal gas, $\Xi = \sum_{N=0}^{\infty} e^{\beta \mu N} Z_N$ where
$Z_N = z^N/N!$ is the canonical partition function. Therefore:

$$\Xi = \sum_{N=0}^{\infty} \frac{(z e^{\beta \mu})^N}{N!} = \exp(z e^{\beta \mu})$$

$$\Phi_G = -k_BT \ln \Xi = -k_BT \cdot z e^{\beta \mu} = -PV$$

The last equality follows from the ideal gas law $PV = Nk_BT$ with $N = z e^{\beta \mu}$. More
generally, $\Phi_G = -PV$ holds for all systems. $\blacksquare$

**Key relations from $\ln \Xi$:**

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\bigg|_{T,V}, \quad \langle E \rangle = -\frac{\partial \ln \Xi}{\partial \beta}\bigg|_{\mu,V} + \frac{\mu}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\bigg|_{T,V}$$

$$S = k_B\left(\ln \Xi + \beta \langle E \rangle - \beta \mu \langle N \rangle\right)$$

### 3.3 Number Fluctuations

**Theorem 3.2.** The particle number fluctuations in the grand canonical ensemble satisfy

$$\langle N^2 \rangle - \langle N \rangle^2 = k_BT \left(\frac{\partial \langle N \rangle}{\partial \mu}\right)_{T,V}$$

_Proof._
$\langle N^2 \rangle - \langle N \rangle^2 = \frac{1}{\beta^2}\frac{\partial^2 \ln \Xi}{\partial \mu^2} = \frac{1}{\beta}\frac{\partial}{\partial \mu}\left(\frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu}\right) = \frac{1}{\beta}\frac{\partial \langle N \rangle}{\partial \mu}$.
$\blacksquare$

For an ideal gas, $\langle N \rangle = z e^{\beta \mu}$So
$\partial \langle N \rangle / \partial \mu = \beta \langle N \rangle$Giving relative fluctuations:

$$\frac{\langle N^2 \rangle - \langle N \rangle^2}{\langle N \rangle^2} = \frac{1}{\langle N \rangle}$$

This is Poisson .../4-statistics-and-probability/2_statistics: fluctuations scale as
$1/\sqrt{N}$Negligible for macroscopic systems.

### 3.4 Worked Example: Ideal Gas in the Grand Canonical Ensemble

**Problem.** Compute $\Xi$, $\langle N \rangle$And $\langle E \rangle$ for a classical ideal gas in
the grand canonical ensemble.

<details>
<summary>Solution</summary>

The single-particle partition function is $z = V/\lambda_{\mathrm{th}^3}$ where
$\lambda_{\mathrm{th} = h/\sqrt{2\pi m k_BT}}$. The canonical partition function for $N$
indistinguishable particles is $Z_N = z^N/N!$. The grand partition function:

$$\Xi = \sum_{N=0}^{\infty} \frac{z^N}{N!} e^{\beta \mu N} = \sum_{N=0}^{\infty} \frac{(ze^{\beta \mu})^N}{N!} = e^{ze^{\beta \mu}}$$

$$\ln \Xi = ze^{\beta \mu} = \frac{V}{\lambda_{\mathrm{th}^3} e^{\beta \mu}}$$

Average particle number:

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu} = \frac{V}{\lambda_{\mathrm{th}^3} e^{\beta \mu}}$$

Solving for the chemical potential: $\mu = k_BT \ln(\langle N \rangle \lambda_{\mathrm{th}^3 / V)}$.

Average energy (using
$\langle E \rangle = -\partial \ln \Xi / \partial \beta + \mu \langle N \rangle / (k_BT)$):

$$\langle E \rangle = \frac{3}{2}\langle N \rangle k_BT$$

This recovers the equipartition result. $\blacksquare$

</details>

## Common Pitfalls

- **Confusing the grand canonical ensemble with the canonical ensemble:** In the canonical ensemble, $N$ is fixed and $T$ is specified. In the grand canonical ensemble, $\mu$ is specified and $N$ fluctuates. Using the wrong ensemble for a problem (e.g., fixing $N$ when the system exchanges particles with a reservoir) leads to incorrect results.
- **Forgetting that $\Xi$ is a sum over both $N$ and states:** The grand partition function sums over all particle numbers and all microstates for each $N$. It is not a product of single-particle partition functions unless particles are non-interacting.
- **Assuming fluctuations are always negligible:** While relative fluctuations scale as $1/\sqrt{N}$, in small systems (nanoparticles, quantum dots, biological macromolecules) $N$ can be small enough that fluctuations become significant and the canonical and grand canonical ensembles give different predictions.
- **Misapplying $\Phi_G = -PV$:** This relation holds for homogeneous systems in thermodynamic equilibrium. For non-equilibrium or inhomogeneous systems (e.g., systems with interfaces or external fields), the grand potential includes additional terms.

## Worked Example: Grand Canonical Treatment of Adsorption

**Problem.** A surface has $M$ independent adsorption sites, each of which can be either empty or occupied by at most one gas molecule with energy $-\varepsilon$. Derive the average coverage $\theta = \langle N \rangle / M$ in equilibrium with a gas reservoir at chemical potential $\mu$.

**Solution.** Each site is a two-level system: empty with energy 0, occupied with energy $-\varepsilon$. The single-site grand partition function is:

$$\xi = 1 + e^{\beta(\mu + \varepsilon)}$$

Since sites are independent, $\Xi = \xi^M = (1 + e^{\beta(\mu + \varepsilon)})^M$.

$$\langle N \rangle = \frac{1}{\beta}\frac{\partial \ln \Xi}{\partial \mu} = M \frac{e^{\beta(\mu + \varepsilon)}}{1 + e^{\beta(\mu + \varepsilon)}}$$

$$\theta = \frac{\langle N \rangle}{M} = \frac{e^{\beta(\mu + \varepsilon)}}{1 + e^{\beta(\mu + \varepsilon)}} = \frac{1}{1 + e^{-\beta(\mu + \varepsilon)}}$$

This is the Langmuir adsorption isotherm. Since the gas reservoir is ideal, $\mu = k_BT \ln(P/P_0)$, giving $\theta = KP/(1 + KP)$ where $K = e^{\beta\varepsilon}/P_0$, recovering the standard Langmuir form.

## Worked Example: Fermi-Dirac and Bose-Einstein Statistics

For non-interacting quantum gases, the grand partition function factorises over single-particle states:

$$\Xi = \prod_i \Xi_i, \quad \Xi_i = \begin{cases} 1 + e^{-\beta(\varepsilon_i - \mu)} & \text{(fermions)} \\ \frac{1}{1 - e^{-\beta(\varepsilon_i - \mu)}} & \text{(bosons)} \end{cases}$$

The average occupation number follows directly:

$$\langle n_i \rangle = -\frac{1}{\beta}\frac{\partial \ln \Xi_i}{\partial \varepsilon_i} = \frac{1}{e^{\beta(\varepsilon_i - \mu)} \pm 1}$$

where $+$ is for fermions (Fermi-Dirac) and $-$ is for bosons (Bose-Einstein). This unified derivation from the grand canonical ensemble illustrates its power: both quantum statistics emerge from the same formalism, with the only difference being whether each single-particle state can be occupied at most once (fermions) or any number of times (bosons).

## Key Relationships

- **The grand canonical ensemble extends the canonical ensemble** by allowing particle number fluctuations, making it suitable for open systems in contact with both a heat reservoir and a particle reservoir.
- **$\Phi_G = -PV$ connects microscopic statistics to macroscopic thermodynamics:** The grand potential directly gives the equation of state, linking the partition function to pressure and volume.
- **Fluctuations scale as $1/\sqrt{N}$:** For macroscopic systems ($N \sim 10^{23}$), relative particle number fluctuations are negligible ($\sim 10^{-12}$), justifying the use of the canonical ensemble for most practical purposes.
- **The fugacity $z = e^{\beta\mu}$ parameterises particle number:** The grand partition function is a power series in $z$, where each coefficient encodes the thermodynamics of the $N$-particle sector.
- **Ideal gas statistics emerge:** The grand canonical treatment of the ideal gas reproduces the canonical results ($\langle E \rangle = \frac{3}{2}Nk_BT$, $PV = Nk_BT$) without the need to compute $N$-particle partition functions.

## Cross-References

- **[Statistical Mechanics](2_statistical-mechanics.md)**: The canonical ensemble fixes particle number and derives thermodynamics from the partition function $Z$.
- **[Fermi Gas at Finite Temperature](4_fermi-gas-at-finite-temperature.md)**: The Sommerfeld expansion describes how Fermi-Dirac statistics modify the ideal gas at low temperatures.
- **[Bose-Einstein Condensation](5_bose-einstein-condensation.md)**: Bose-Einstein condensation arises from Bose statistics in the grand canonical ensemble when $\mu$ approaches the ground state energy.

## Applications

- **Adsorption and surface science:** The grand canonical ensemble describes gas molecules adsorbing on a surface, where the number of adsorbed particles fluctuates as the system exchanges molecules with the gas phase.
- **Semiconductor physics:** Carrier concentrations in semiconductors are calculated using grand canonical methods, where electrons and holes are exchanged with reservoirs at fixed chemical potential.
- **Nuclear physics:** The statistical model of nuclear reactions uses the grand canonical ensemble to describe particle production in high-energy collisions, where the number of produced pions, kaons, etc. fluctuates.
- **Chemical equilibrium:** Reactions in solution are described in the grand canonical ensemble, where the chemical potentials of reactants and products are fixed by the reservoir.
- **Monte Carlo simulations:** Grand canonical Monte Carlo (GCMC) simulations insert and delete particles to sample the grand canonical distribution, used extensively in studies of porous materials and fluid adsorption.

## Intuition

The grand canonical ensemble is the most flexible statistical framework because it allows both energy and particle number to fluctuate. The chemical potential acts like a price for adding particles: if it is low, particles flow in; if high, they flow out. The fugacity is the exponential of this price, weighting different particle numbers. For quantum gases, the grand partition function naturally produces Fermi-Dirac and Bose-Einstein statistics from the same formalism, with the only difference being whether states can be occupied once or many times.

