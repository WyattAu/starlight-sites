---

date: 2026-07-23T21:57:32+01:00
title: Microcanonical Ensemble
tags:
  - Physics
  - University
description: "The describes an isolated system with fixed total energy Particle number And vol Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "14_microcanonical Ensemble", "url": "https://physics.wyattau.com/2-thermal-physics/14_microcanonical-ensemble"}]
}
</script>

The **microcanonical ensemble** describes an isolated system with fixed total energy $E$Particle
number $N$And volume $V$.

### 14.1 Density of States

The number of microstates with energy between $E$ and $E + \delta E$ is:

$$\Omega(E, V, N) = \int_{E < \mathcal{H} < E + \delta E} \frac{d^{3N}q\, d^{3N}p}{N!h^{3N}}$$

The **entropy** (Boltzmann entropy):

$$S(E, V, N) = k_B \ln \Omega(E, V, N)$$

The **temperature** is defined via:

$$\frac{1}{T} = \frac{\partial S}{\partial E}$$

### 14.2 The Ideal Gas in the Microcanonical Ensemble

For $N$ non-interacting particles in volume $V$ with total energy $E$:

$$\Omega = \frac{V^N}{N!}\frac{(2\pi m E)^{3N/2}}{E\, \Gamma(3N/2)\, h^{3N}} \cdot \frac{\delta E}{E}$$

Using Stirling"s approximation and the large-argument expansion of the Gamma function:

$$S = Nk_B\left[\ln\!\left(\frac{V}{N}\right) + \frac{3}{2}\ln\!\left(\frac{4\pi m E}{3Nh^2}\right) + \frac{5}{2}\right]$$

This is the **Sackur--Tetrode equation**, identical to the canonical ensemble result (as expected by
ensemble equivalence).

From $1/T = \partial S/\partial E$:

$$E = \frac{3}{2}Nk_B T$$

Reproducing the equipartition theorem.

### 14.3 Classical Virial Theorem

For a system with Hamiltonian
$\mathcal{H} = \sum_i p_i^2/(2m_i) + U(\mathbf{r}_1, \ldots, \mathbf{r}_N)$:

$$\left\langle \sum_i \mathbf{p}_i \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{p}_i} \right\rangle = 3Nk_B T$$

$$\left\langle \sum_i \mathbf{r}_i \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{r}_i} \right\rangle = -3Nk_B T$$

For a power-law potential $U \propto r^n$This gives:

$$\langle K \rangle = \frac{n}{2}\langle U \rangle$$

(For the harmonic oscillator, $n = 2$: $\langle K \rangle = \langle U \rangle$.)

### 14.4 Equivalence of Ensembles in the Thermodynamic Limit

In the thermodynamic limit ($N \to \infty$, $V \to \infty$, $N/V$ fixed), the microcanonical, canonical, and grand canonical ensembles produce identical thermodynamic predictions. This is a consequence of the fact that the energy fluctuations in the canonical ensemble scale as $\Delta E / E \sim 1/\sqrt{N}$, vanishing in the limit.

**Proposition 14.1.** For a system with Hamiltonian $\mathcal{H}$, the microcanonical entropy $S(E)$ and the canonical free energy $F(\beta) = -\beta^{-1} \ln Z(\beta)$ are related by the Legendre transform:

$$F(\beta) = \inf_E [E - \beta^{-1} S(E)]$$

### 14.5 The Third Law of Thermodynamics from the Microcanonical Ensemble

**Proposition 14.2 (Nernst's Theorem).** As $T \to 0$, the entropy of a system approaches a constant (zero for a non-degenerate ground state):

$$\lim_{T \to 0} S(E, V, N) = k_B \ln g_0$$

where $g_0$ is the degeneracy of the ground state.

In the microcanonical picture, at $T = 0$ the system occupies only the ground state microstate(s). If the ground state is unique, $\Omega = 1$ and $S = 0$.

### 14.6 Worked Example: Two-State Paramagnet

**Problem.** Consider $N$ non-interacting spin-1/2 particles in a magnetic field $B$. Each spin has energy $\pm \mu B$. Find the microcanonical entropy and the equation of state.

<details>
<summary>Solution</summary>

For a system with total energy $E = (N_\uparrow - N_\downarrow)\mu B = (2N_\uparrow - N)\mu B$, the number of microstates with $N_\uparrow$ up-spins is:

$$\Omega(N_\uparrow) = \binom{N}{N_\uparrow} = \frac{N!}{N_\uparrow! (N - N_\uparrow)!}$$

Using Stirling's approximation:

$$S = k_B \ln \Omega = k_B[N\ln N - N_\uparrow\ln N_\uparrow - (N - N_\uparrow)\ln(N - N_\uparrow)]$$

From $1/T = \partial S/\partial E$:

$$\frac{1}{T} = \frac{k_B}{2\mu B} \ln\frac{N - N_\uparrow}{N_\uparrow}$$

Solving for the magnetisation $M = (N_\uparrow - N_\downarrow)\mu B$:

$$M = N\mu \tanh\left(\frac{\mu B}{k_B T}\right)$$

This is the **Brillouin function** for spin-1/2, matching the canonical ensemble prediction.

</details>

<details>
<summary>Worked Example 14.2: Density of States for $N$ Harmonic Oscillators</summary>

For $N$ independent harmonic oscillators with frequency $\omega$Total energy $E$:

$$\Omega(E) = \frac{E^{N-1}}{(N-1)!\,(\hbar\omega)^N}$$

Proof: The number of ways to distribute $E/(\hbar\omega)$ energy quanta among $N$ oscillators is the
stars-and-bars problem:

$$\Omega = \binom{n + N - 1}{N - 1} = \frac{(n+N-1)!}{n!(N-1)!}$$

Where $n = E/(\hbar\omega)$. For large $n$ using Stirling's approximation:

$$S = k_B\left[(n+N)\ln(n+N) - n\ln n - N\ln N\right]$$

$$\frac{1}{T} = \frac{\partial S}{\partial E} = \frac{k_B}{\hbar\omega}\left[\ln(n+N) - \ln n\right] = \frac{k_B}{\hbar\omega}\ln\!\left(1 + \frac{N}{n}\right)$$

At high $T$ ($n \gg N$): $E \approx Nk_B T$ (equipartition, each oscillator has energy $k_B T$).

</details>

### 14.7 Worked Example: Ideal Gas in Two Dimensions

**Problem.** Find the microcanonical entropy of an ideal gas confined to a two-dimensional area $A$ with $N$ particles and total energy $E$.

<details>
<summary>Solution</summary>

The phase space volume for $N$ particles in 2D with energy less than $E$ is:

$$\Sigma(E) = \frac{A^N}{N! h^{2N}} \cdot \frac{(2\pi m E)^N}{\Gamma(N+1)}$$

The number of states with energy between $E$ and $E + \delta E$ is $\Omega = (\partial\Sigma/\partial E)\,\delta E$:

$$\Omega = \frac{A^N}{N! h^{2N}} \cdot \frac{(2\pi m)^N E^{N-1}}{(N-1)!}\,\delta E$$

Using Stirling's approximation:

$$S = Nk_B\left[\ln\!\left(\frac{A}{N}\right) + \ln\!\left(\frac{2\pi m E}{h^2}\right) + 2\right]$$

The equation of state is $PA = Nk_B T$ (the 2D analogue of $PV = Nk_B T$), and the internal energy is $E = Nk_B T$.

$\blacksquare$

</details>

### 14.8 Ensemble Equivalence: Fluctuations

In the canonical ensemble, the energy fluctuates around its mean value $\langle E \rangle$. The variance is related to the heat capacity:

$$\langle (\Delta E)^2 \rangle = k_B T^2 C_V$$

The relative fluctuation $\sqrt{\langle (\Delta E)^2 \rangle}/\langle E \rangle \sim 1/\sqrt{N}$, vanishing in the thermodynamic limit. This justifies the equivalence of microcanonical and canonical ensembles for macroscopic systems.

### 14.9 Summary of Key Formulas

| Quantity | Expression |
|----------|-----------|
| Microcanonical partition function | $\Omega(E, V, N) = \int_{E < \mathcal{H} < E + \delta E} d^{3N}q\,d^{3N}p / (N! h^{3N})$ |
| Boltzmann entropy | $S = k_B \ln \Omega$ |
| Temperature | $1/T = \partial S/\partial E$ |
| Pressure | $P = T\,\partial S/\partial V$ |
| Chemical potential | $\mu = -T\,\partial S/\partial N$ |
| Sackur-Tetrode (ideal gas) | $S = Nk_B[\ln(V/N) + \frac{3}{2}\ln(4\pi m E/(3Nh^2)) + \frac{5}{2}]$ |

## Intuition

The microcanonical ensemble describes an isolated system with fixed energy, volume, and particle number. The central idea is that all accessible microstates are equally probable, and the number of these microstates determines the entropy through Boltzmann's formula. Temperature emerges as the rate of change of entropy with energy: adding energy to a system with many available microstates raises the entropy slowly, giving a high temperature. The entropy is maximized at equilibrium because that is the macrostate compatible with the most microstates. For an ideal gas, the Sackur-Tetrode equation shows that entropy increases with volume and energy, capturing the logarithmic counting of phase space volumes.

### 14.10 Common Mistakes

**Mistake 1: Confusing entropy with multiplicity**
Entropy $S = k_B \ln \Omega$ is a logarithmic function of the multiplicity $\Omega$. A system with twice the multiplicity does not have twice the entropy; it has $S + k_B \ln 2$. Students often treat entropy and multiplicity as interchangeable, but they differ by a logarithm and a constant. The entropy is what appears in thermodynamic relations, not the multiplicity directly.

**Mistake 2: Assuming microcanonical and canonical ensembles always give the same results**
The ensembles are equivalent only in the thermodynamic limit ($N \to \infty$, $V \to \infty$, $N/V$ fixed). For small systems, the canonical ensemble (which allows energy exchange with a reservoir) can give different predictions than the microcanonical ensemble (fixed energy). The relative energy fluctuation in the canonical ensemble scales as $1/\sqrt{N}$, which is negligible for macroscopic systems but not for small ones.

**Mistake 3: Forgetting the $1/N!$ factor in the classical partition function**
For indistinguishable particles, the phase space volume must be divided by $N!$ to avoid overcounting microstates that differ only by particle labels. Omitting this factor leads to the Gibbs paradox: the entropy of mixing two identical gases would be nonzero, which is physically incorrect. The $1/N!$ factor ensures extensivity of the entropy.

## Cross-References

- **[Statistical Mechanics](2_statistical-mechanics.md)**: The canonical ensemble is the fixed-temperature counterpart to the microcanonical ensemble, with equivalent predictions in the thermodynamic limit.
- **[The Laws of Thermodynamics](1_the-laws-of-thermodynamics.md)**: The microcanonical entropy $S = k_B \ln \Omega$ provides the microscopic foundation for the second law of thermodynamics.
- **[The Grand Canonical Ensemble](3_the-grand-canonical-ensemble.md)**: The grand canonical ensemble further extends the framework to systems that exchange both energy and particles with a reservoir.


- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
