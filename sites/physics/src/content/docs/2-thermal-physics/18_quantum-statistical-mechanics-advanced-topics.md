---

date: 2026-07-23T21:57:32+01:00
title: "Quantum Statistical Mechanics: Advanced Topics"
tags:
  - Physics
  - University
description: "The (or density operator) provides the most general description of a quantum system, encompassing both pure and mixed states:"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "18_quantum Statistical Mechanics Advanced Topics", "url": "https://physics.wyattau.com/2-thermal-physics/18_quantum-statistical-mechanics-advanced-topics"}]
}
</script>

**History.** The density matrix is John von Neumann's, from his 1927 axiomatisation of quantum mechanics: he built it precisely to handle statistical mixtures that a single wavefunction cannot represent. Lev Landau introduced the same object from the other side in 1927, describing a subsystem in contact with an environment by a traced-out state, anticipating decoherence by decades. The entropy formula $-k_B \mathrm{Tr}(\hat\rho \ln \hat\rho)$ carries von Neumann's name, and E. T. Jaynes's 1957 maximum-entropy principle showed that the canonical $\hat\rho = e^{-\beta \hat H}/Z$ is not an assumption about physics at all: it is the least-biased guess consistent with a measured temperature.

**Ponder (attempt the purity test).** Why does $\mathrm{Tr}(\hat\rho^2)$ decide purity? Attempt to see it: expand $\hat\rho = \sum_i p_i |\psi_i\rangle\langle\psi_i|$ and square it. What do the cross-terms do, and why is $\mathrm{Tr}(\hat\rho^2) < 1$ a statement about ignorance rather than about physics?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Squaring kills the cross-terms in an orthonormal basis, leaving $\hat\rho^2 = \sum_i p_i^2 |\psi_i\rangle\langle\psi_i|$, so $\mathrm{Tr}(\hat\rho^2) = \sum_i p_i^2$. That sum is 1 exactly when a single probability is 1 (pure state) and falls below 1 for any genuine mixture. The mixture can be epistemic: a subsystem of a larger pure state is described by a mixed $\hat\rho$ while the whole stays pure. The probabilities sit in the description, not necessarily in the world, which is exactly why the density operator and not the wavefunction is the general object.

</div>
</details>

### 18.1 Density Matrix and Ensemble Averages

The **density matrix** (or density operator) provides the most general description of a quantum
system, encompassing both pure and mixed states:

$$
\hat{\rho} = \sum_i p_i\,|\psi_i\rangle\langle\psi_i|
$$

Where $p_i$ is the probability of being in state $|\psi_i\rangle$.

**Properties:**

- $\text{Tr}(\hat{\rho}) = 1$ (normalisation)
- $\hat{\rho}^\dagger = \hat{\rho}$ (hermiticity)
- $\hat{\rho}^2 = \hat{\rho}$ if and only if the state is pure
- $\text{Tr}(\hat{\rho}^2) \leq 1$ with equality for pure states

**Ensemble averages:** $\langle \hat{A} \rangle = \text{Tr}(\hat{\rho}\hat{A})$.

**Canonical ensemble:** $\hat{\rho} = \frac{1}{Z}\exp(-\beta\hat{H})$ where
$Z = \text{Tr}[\exp(-\beta\hat{H})]$.

**Von Neumann entropy:** $S = -k_B\text{Tr}(\hat{\rho}\ln\hat{\rho})$.

For a pure state: $S = 0$. For a thermal state: $S > 0$ (maximum for the maximally mixed state).

**Time evolution.** The von Neumann equation governs the density matrix:

$$
i\hbar\frac{\partial\hat{\rho}}{\partial t} = [\hat{H}, \hat{\rho}]
$$

This is the quantum analogue of Liouville's equation. For a closed system, the von Neumann
entropy is constant (unitary evolution preserves eigenvalues of $\hat{\rho}$).

**Ponder (attempt the bookkeeping).** The grand partition function arrives with an awkward sign pattern, $\ln \mathcal{Z} = \pm \sum_{\mathbf{k}} \ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})$. Attempt to rederive it from per-mode occupation counting so the signs stop being arbitrary: where does each sign come from?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Count one mode grand-canonically. Fermions allow $n = 0$ or $1$, so the mode partition function is $1 + e^{-\beta(\epsilon-\mu)}$: the $\ln(1 + x)$ branch. Bosons allow any $n$, so the mode sum is the geometric series $\sum_n x^n = 1/(1-x)$: the $\ln(1-x)$ branch. Both signs encode one counting rule with or without a ceiling, and the whole thermodynamics follows from $\Omega = -PV = \mp k_B T \sum_{\mathbf{k}} \ln(1 \mp x)$. The classical limit $x \ll 1$ collapses both branches to the Maxwell-Boltzmann weight.

</div>
</details>

### 18.2 Quantum Ideal Gases: General Treatment

For a system of non-interacting quantum particles, the grand canonical partition function is:

$$
\ln\mathcal{Z} = \pm\sum_{\mathbf{k}}\ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})
$$

Where $+$ is for fermions and $-$ for bosons.

The thermodynamic quantities follow from:

$$
N = \sum_{\mathbf{k}}\frac{1}{e^{\beta(\epsilon_{\mathbf{k}} - \mu)} \pm 1}, \quad E = \sum_{\mathbf{k}}\frac{\epsilon_{\mathbf{k}}}{e^{\beta(\epsilon_{\mathbf{k}} - \mu)} \pm 1}
$$

$$
\Omega = -PV = \mp k_BT\sum_{\mathbf{k}}\ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})
$$

In the continuum limit:

$$
\Omega = \mp k_BT\int_0^\infty g(\epsilon)\ln(1 \mp e^{-\beta(\epsilon - \mu)})\,d\epsilon
$$

**Fermi--Dirac distribution:** $f(\epsilon) = \frac{1}{e^{\beta(\epsilon - \mu)} + 1}$

**Bose--Einstein distribution:** $f(\epsilon) = \frac{1}{e^{\beta(\epsilon - \mu)} - 1}$

**Classical limit.** When $\beta(\epsilon - \mu) \gg 1$, both distributions reduce to the
Maxwell--Boltzmann distribution: $f(\epsilon) \approx e^{-\beta(\epsilon - \mu)}$.

### 18.3 Ideal Bose Gas and Bose--Einstein Condensation

Below the Bose--Einstein condensation temperature $T_c$, the chemical potential is pinned at
$\mu = \epsilon_0$ (the ground state energy, taken as zero). The integral for $N$ splits into
condensate and excited fractions:

$$
N = N_0 + N_{\text{ex}} = N_0 + \int_0^\infty \frac{g(\epsilon)}{e^{\beta\epsilon} - 1}\,d\epsilon
$$

For a 3D gas: $g(\epsilon) = \frac{V(2m)^{3/2}}{4\pi^2\hbar^3}\sqrt{\epsilon}$.

The critical temperature:

$$
k_BT_c = \frac{2\pi\hbar^2}{m}\left(\frac{N}{2.612\,V}\right)^{2/3}
$$

The excited fraction: $N_{\text{ex}}/N = (T/T_c)^{3/2}$.

**Condensate fraction:** $N_0/N = 1 - (T/T_c)^{3/2}$.

**Low-$T$ properties of the condensate:**

- Ground state energy: $E_0 = 0$ (no kinetic energy)
- Heat capacity: $C_V \propto T^3$ (from excited states only)
- The condensate does not contribute to $C_V$ (all particles in the ground state have fixed energy)
- Superfluidity: the condensate flows without viscosity below $T_c$

**Experimental realisation.** BEC was first achieved in dilute alkali gases (Rb, Na, Li) in 1995
(Cornell, Wieman, Ketterle -- Nobel Prize 2001). Key requirement: $n\lambda_{\text{dB}}^3 \gtrsim 2.612$
(where $\lambda_{\text{dB}} = h/\sqrt{2\pi mk_BT}$ is the thermal de Broglie wavelength).

### 18.4 Ideal Fermi Gas at Low Temperature

At $T = 0$, all states up to the **Fermi energy** $E_F = \mu(0)$ are filled:

$$
E_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}
$$

**Low-temperature expansion.** The Sommerfeld expansion gives:

$$
\mu(T) \approx E_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_BT}{E_F}\right)^2\right]
$$

$$
C_V = \frac{\pi^2}{2}Nk_B\frac{T}{T_F} \quad \text{(linear in $T$)}
$$

The linear specific heat is a signature of degenerate fermions and is observed in metals
(electronic contribution) and white dwarf stars.

**Pauli paramagnetism.** The spin susceptibility of a degenerate Fermi gas:

$$
\chi = \mu_0\mu_B^2 g(E_F)
$$

is independent of temperature (Pauli limit), in contrast to the Curie law $\chi \propto 1/T$
for classical spins.

### 18.5 Landau Levels and Quantum Oscillations

In a magnetic field $\mathbf{B} = B\hat{z}$, the energy levels of a free electron gas become quantised
into **Landau levels**:

$$
\epsilon_n = \left(n + \frac{1}{2}\right)\hbar\omega_c + \frac{\hbar^2 k_z^2}{2m_e}, \quad \omega_c = \frac{eB}{m_e}
$$

The density of states becomes a series of peaks (van Hove singularities) at each Landau level.

**de Haas--van Alphen effect.** The magnetisation oscillates as a function of $1/B$ with period:

$$
\Delta\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\text{FS}}}
$$

Where $A_{\text{FS}}$ is the extremal cross-sectional area of the Fermi surface. This is used to
map the Fermi surface topology of metals.

**Shubnikov--de Haas effect.** The resistivity oscillates similarly, used for Fermi surface
measurements in semiconductors.

### 18.6 Quantum Statistics and Photon/Phonon Gases

**Photons** are massless bosons with $\mu = 0$ (not conserved). The Planck distribution:

$$
\langle n_\omega \rangle = \frac{1}{e^{\hbar\omega/(k_BT)} - 1}
$$

gives the mean number of photons per mode. The energy density:

$$
u(\omega) = \frac{\hbar\omega^3}{\pi^2 c^3}\frac{1}{e^{\hbar\omega/(k_BT)} - 1}
$$

integrates to the Stefan--Boltzmann law: $u = aT^4$ where $a = \pi^2 k_B^4/(15\hbar^3 c^3)$.

**Phonons** are quantised lattice vibrations, also bosons with $\mu = 0$. At low $T$:
$C_V \propto T^3$ (Debye model), consistent with the experimental $T^3$ law for insulators.

## Intuition

Quantum statistical mechanics bridges quantum mechanics and thermodynamics by describing systems with many particles where quantum effects matter. The density matrix captures statistical uncertainty alongside quantum superposition: a pure quantum state has a density matrix that squares to itself, while a thermal mixture does not. Bose-Einstein statistics allow multiple particles to occupy the same state, leading to condensation where a macroscopic fraction of particles collapses into the ground state, like a crowd all deciding to sit in the same chair. Fermi-Dirac statistics forbid double occupation, forcing particles to fill energy levels one by one up to the Fermi energy, like chairs in a theatre where each row must be filled before the next. These quantum statistical effects explain the stability of matter, the behaviour of metals, and the properties of neutron stars.

### Common Pitfalls

1. **Confusing chemical potential for bosons and fermions.** For bosons, $\mu < \epsilon_0$ (bounded
   above by the ground state energy). For fermions, $\mu$ can be positive and equals $E_F$ at $T = 0$.

2. **Applying Bose--Einstein statistics to photons without setting $\mu = 0$.** Photons are not
   conserved, so $\mu = 0$. Using $\mu \neq 0$ gives incorrect results.

3. **Forgetting the 2.612 factor in $T_c$.** The critical temperature for BEC includes the
   Riemann zeta function value $\zeta(3/2) \approx 2.612$. Omitting this gives the wrong
   condensation temperature.

4. **Assuming the Sommerfeld expansion is valid at all temperatures.** It requires $k_BT \ll E_F$.
   Near $T_c$ or for classical gases, the full distribution must be used.

$$
g(\epsilon) = \frac{eB}{2\pi^2\hbar}\sum_n \frac{1}{\sqrt{\epsilon - (n + 1/2)\hbar\omega_c}}
$$

**Shubnikov--de Haas oscillations:** As $B$ is varied, Landau levels pass through the Fermi energy,
causing oscillations in the resistivity with period:

$$
\Delta\!\left(\frac{1}{B}\right) = \frac{2\pi e}{\hbar A_{\text{ext}}}
$$

Where $A_{\text{ext}}$ is the extremal cross-sectional area of the Fermi surface perpendicular to
$\mathbf{B}$.

**de Haas--van Alphen oscillations:** Similar oscillations in the magnetisation (and hence the
susceptibility). These provide the most precise tool for mapping Fermi surface geometry.

<details>
<summary>Worked Example 18.1: Density Matrix of a Two-Level System</summary>

Consider a spin-1/2 particle in a magnetic field $B\hat{z}$ at temperature $T$.

The Hamiltonian: $\hat{H} = -\gamma B\hbar\hat{S}_z$ with eigenstates $|\uparrow\rangle$ (energy
$-\gamma\hbar B/2$) and $|\downarrow\rangle$ (energy $+\gamma\hbar B/2$).

The density matrix:

$$
\hat{\rho} = \frac{1}{Z}\begin{pmatrix} e^{\beta\gamma\hbar B/2} & 0 \\ 0 & e^{-\beta\gamma\hbar B/2} \end{pmatrix} = \begin{pmatrix} p_\uparrow & 0 \\ 0 & p_\downarrow \end{pmatrix}
$$

Where $p_\uparrow = e^{\beta\gamma\hbar B/2}/(2\cosh(\beta\gamma\hbar B/2))$.

At high $T$: $p_\uparrow \approx p_\downarrow \approx 1/2$ (maximally mixed, $S = k_B\ln 2$).

At low $T$ ($\gamma\hbar B \gg k_BT$): $p_\uparrow \to 1$, $p_\downarrow \to 0$ (nearly pure,
$S \to 0$).

The magnetisation:
$\langle S_z \rangle = \text{Tr}(\hat{\rho}\hat{S}_z) = \frac{\hbar}{2}(p_\uparrow - p_\downarrow) = \frac{\hbar}{2}\tanh\!\left(\frac{\gamma\hbar B}{2k_BT}\right)$.

The entropy: $S = -k_B[p_\uparrow\ln p_\uparrow + p_\downarrow\ln p_\downarrow]$.

At $T = 0$: $S = 0$ (ground state, pure). At $T = \infty$: $S = k_B\ln 2$ (maximally mixed).

</details>

<details>
<summary>Worked Example 18.2: Blackbody Radiation in $d$ Dimensions</summary>

The photon density of states in $d$ dimensions scales as $g(\omega) \propto \omega^{d-1}$.

The energy density:

$$
u_d = \int_0^\infty \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}\,g(\omega)\,d\omega \propto T^{d+1}
$$

The Stefan--Boltzmann law in $d$ dimensions: $u_d \propto T^{d+1}$.

For $d = 1$: $u \propto T^2$. For $d = 2$: $u \propto T^3$. For $d = 3$: $u \propto T^4$ (the
standard result).

The Wien displacement law also changes: $\lambda_{\max} T \propto d$ (the peak wavelength scales
linearly with dimension).

In $d = 1$ (nanotubes): the blackbody spectrum peaks at lower temperatures and has a steeper
low-frequency rise. In $d = 2$ (graphene): the specific heat per area is
$C/A = (2\pi^2 k_B^4)/(15\hbar^3 c^2)\,T^3 \propto T^3$ (Debye $T^3$ in 2D).

</details>

:::note[Quick check]

1. Define the density matrix for a statistical mixture and the rule it gives for expectation values.
2. State the purity test and the entropy built on the density matrix.
3. Write the canonical ensemble's density operator.
4. State the von Neumann equation and what closed-system evolution preserves.
5. Write the grand partition function's sign pattern and state the classical limit.
6. What happens to the chemical potential below $T_c$ in the ideal Bose gas, and how does $N$ split?
7. Which quantity of the degenerate Fermi gas is linear in temperature, and how does it scale?
8. Why is the chemical potential of a photon gas exactly zero?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\hat\rho = \sum_i p_i |\psi_i\rangle\langle\psi_i|$ with $\mathrm{Tr}\,\hat\rho = 1$, hermiticity, and $\langle \hat A \rangle = \mathrm{Tr}(\hat\rho \hat A)$: the most general quantum state description, pure or mixed. **2.** $\mathrm{Tr}(\hat\rho^2) = 1$ if and only if the state is pure; von Neumann entropy $S = -k_B \mathrm{Tr}(\hat\rho \ln \hat\rho)$ is zero for pure states and positive for thermal ones. **3.** $\hat\rho = \frac{1}{Z} e^{-\beta \hat H}$ with $Z = \mathrm{Tr}[e^{-\beta \hat H}]$. **4.** $i\hbar\, \partial \hat\rho/\partial t = [\hat H, \hat\rho]$, the quantum analogue of Liouville's equation; unitary evolution preserves the eigenvalues of $\hat\rho$, so the von Neumann entropy of a closed system stays constant. **5.** $\ln \mathcal{Z} = \pm \sum_{\mathbf{k}} \ln(1 \mp e^{-\beta(\epsilon_{\mathbf{k}} - \mu)})$, plus for fermions, minus for bosons; when $\beta(\epsilon-\mu) \gg 1$ both branches reduce to the Maxwell-Boltzmann weight $e^{-\beta(\epsilon-\mu)}$. **6.** It is pinned at the ground-state energy $\mu = \epsilon_0$; the particle number splits as $N = N_0 + N_{\text{ex}}$, with the excited fraction saturating and the surplus condensing into the ground state. **7.** The specific heat: $C_V \propto T/T_F$, from the Sommerfeld expansion; only the thermal shell of electrons within $k_B T$ of the Fermi surface responds. **8.** Photon number is not conserved: photons are created and destroyed freely by the walls, so the distribution $1/(e^{\beta\hbar\omega} - 1)$ carries $\mu = 0$, with temperature alone fixing the occupancy (Planck's law).

</div>
</details>

:::

## Cross-References

- **[Statistical Mechanics](/2-thermal-physics/2_statistical-mechanics/)**: The density matrix formalism extends the canonical ensemble framework to quantum systems with mixed states.
- **[The Grand Canonical Ensemble](/2-thermal-physics/3_the-grand-canonical-ensemble/)**: The grand canonical density matrix generalises the results here to systems with particle exchange.
- **[The Debye Model of Solids](/2-thermal-physics/16_the-debye-model-of-solids/)**: Phonon quantisation in the Debye model uses the same Bose-Einstein occupation statistics developed in this chapter.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Related in this track

- [Bose-Einstein Condensation](/2-thermal-physics/5_bose-einstein-condensation/)
- [Classical Limit and the Maxwell-Boltzmann Distribution](/2-thermal-physics/7_classical-limit-and-the-maxwell-boltzmann-distribution/)
- [Common Pitfalls](/2-thermal-physics/8_common-pitfalls/)
- [Fermi Gas at Finite Temperature](/2-thermal-physics/4_fermi-gas-at-finite-temperature/)
