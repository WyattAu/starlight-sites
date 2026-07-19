---
title: Classical Limit and the Maxwell-Boltzmann Distribution
tags:
  - Physics
  - University
description: "In the classical (dilute) limit, both Fermi-Dirac and Bose-Einstein distributions reduce to the Maxwell-Boltzmann distribution. The condition for the"
---

### 7.1 Derivation from Quantum Statistics

In the classical (dilute) limit, both Fermi-Dirac and Bose-Einstein distributions reduce to the
Maxwell-Boltzmann distribution. The condition for the classical limit is

$$e^{\beta(\varepsilon - \mu)} \gg 1$$

For all relevant energies. This is equivalent to $n\lambda_{\mathrm{th}^3 \ll 1}$ (the thermal de
Broglie wavelength is much smaller than the inter-particle spacing).

**Theorem 7.1.** In the classical limit:

$$f_{\mathrm{FD}(\varepsilon) \approx f_{\mathrm{BE}(\varepsilon) \approx f_{\mathrm{MB}(\varepsilon) = e^{-\beta(\varepsilon - \mu)}}}}$$

_Proof._ When $e^{\beta(\varepsilon - \mu)} \gg 1$The $+1$ or $-1$ in the denominator is negligible:

$$\frac{1}{e^{\beta(\varepsilon - \mu)} \pm 1} \approx \frac{1}{e^{\beta(\varepsilon - \mu)}} = e^{-\beta(\varepsilon - \mu)}$$

$\blacksquare$

### 7.2 Maxwell-Boltzmann Speed Distribution

For a classical ideal gas, the probability distribution of molecular speeds is

$$f(v)\,dv = 4\pi\left(\frac{m}{2\pi k_BT}\right)^{3/2} v^2 e^{-mv^2/(2k_BT)}\,dv$$

**Characteristic speeds:**

- Most probable: $v_p = \sqrt{2k_BT/m}$
- Mean: $\langle v \rangle = \sqrt{8k_BT/(\pi m)}$
- RMS: $v_{\mathrm{rms} = \sqrt{3k_BT/m}}$

The ordering is $v_p < \langle v \rangle < v_{\mathrm{rms}}$.

### 7.3 The Classical Partition Function

For a system of $N$ indistinguishable non-interacting particles, the canonical partition function factorises:

$$Z_N = \frac{1}{N!} Z_1^N$$

where $Z_1$ is the single-particle partition function. For a classical ideal gas in three dimensions:

$$Z_1 = V \left(\frac{2\pi m k_B T}{h^2}\right)^{3/2} = \frac{V}{\lambda_{\mathrm{th}}^3}$$

with thermal de Broglie wavelength $\lambda_{\mathrm{th}} = h/\sqrt{2\pi m k_B T}$.

The Helmholtz free energy is $F = -k_B T \ln Z_N$, from which all thermodynamic quantities follow:

$$P = -\frac{\partial F}{\partial V} = \frac{N k_B T}{V}$$

$$S = -\frac{\partial F}{\partial T} = Nk_B\left[\ln\!\left(\frac{V}{N\lambda_{\mathrm{th}}^3}\right) + \frac{5}{2}\right]$$

### 7.4 Equipartition Theorem

**Theorem 7.2 (Equipartition).** For a classical system in thermal equilibrium at temperature $T$, each quadratic degree of freedom in the Hamiltonian contributes $\frac{1}{2}k_B T$ to the mean energy.

For a monatomic ideal gas with 3 translational degrees of freedom: $\langle E \rangle = \frac{3}{2}Nk_B T$. For a diatomic gas with additional rotational degrees of freedom (at sufficiently high $T$): $\langle E \rangle = \frac{5}{2}Nk_B T$.

The equipartition theorem fails at low temperatures when quantum effects freeze out degrees of freedom (the equipartition theorem is a classical result valid only in the high-temperature limit).

### 7.5 Derivation from Maximum Entropy

The Maxwell-Boltzmann distribution can be derived by maximising the Boltzmann entropy $S = -k_B \sum_i p_i \ln p_i$ subject to constraints $\sum_i p_i = 1$ and $\sum_i p_i \varepsilon_i = \langle E \rangle$:

$$\delta\left[-k_B \sum_i p_i \ln p_i - \alpha\left(\sum_i p_i - 1\right) - \beta\left(\sum_i p_i \varepsilon_i - \langle E \rangle\right)\right] = 0$$

This yields $p_i = e^{-\alpha - 1} e^{-\beta \varepsilon_i}$, and normalisation gives:

$$p_i = \frac{e^{-\beta\varepsilon_i}}{\sum_j e^{-\beta\varepsilon_j}} = \frac{e^{-\beta\varepsilon_i}}{Z_1}$$

With $\beta = 1/(k_B T)$, this is the Maxwell-Boltzmann distribution for discrete energy states.

### 7.6 Worked Example: Barometric Formula

**Problem.** Find the density of an ideal gas at height $z$ in a uniform gravitational field, assuming constant temperature $T$. This is the barometric formula.

<details>
<summary>Solution</summary>

The gravitational potential energy of a molecule at height $z$ is $mgz$. In equilibrium, the number density follows the Maxwell-Boltzmann distribution:

$$n(z) = n_0 \exp\!\left(-\frac{mgz}{k_B T}\right)$$

where $n_0$ is the density at $z = 0$. The pressure is $P(z) = n(z) k_B T = P_0 e^{-mgz/(k_B T)}$.

The scale height $H = k_B T/(mg)$ characterises the exponential decay. For Earth's atmosphere at $T = 288$ K: $H \approx 8.5$ km.

$\blacksquare$

</details>

### 7.7 Worked Example: Effusion

**Problem.** A gas of molecular mass $m$ at temperature $T$ effuses through a small hole. Find the
distribution of speeds of the effusing molecules and the mean kinetic energy per effusing molecule.

<details>
<summary>Solution</summary>

The effusion rate for molecules with speed between $v$ and $v + dv$ is proportional to
$v \cdot f(v)\,dv$ (faster molecules hit the hole more frequently). The effusion distribution is:

$$f_{\mathrm{eff}(v)\,dv \propto v \cdot v^2 e^{-mv^2/(2k_BT)}\,dv = v^3 e^{-mv^2/(2k_BT)}\,dv}$$

Normalising:

$$f_{\mathrm{eff}(v) = \frac{1}{2(k_BT/m)^2}\,v^3\,e^{-mv^2/(2k_BT)}}$$

The mean kinetic energy:

$$\langle \varepsilon \rangle_{\mathrm{eff} = \frac{1}{2}m\langle v^2 \rangle_{\mathrm{eff} = \frac{1}{2}m \cdot \frac{\int_0^\infty v^5 e^{-mv^2/(2k_BT)}\,dv}{\int_0^\infty v^3 e^{-mv^2/(2k_BT)}\,dv}}}$$

Using $\int_0^\infty v^n e^{-av^2}\,dv = \frac{1}{2a^{(n+1)/2}}\Gamma\!\left(\frac{n+1}{2}\right)$:

$$\langle v^2 \rangle_{\mathrm{eff} = \frac{\Gamma(3)/(2a^3)}{\Gamma(2)/(2a^2)} = \frac{2}{a} = \frac{4k_BT}{m}}$$

$$\langle \varepsilon \rangle_{\mathrm{eff} = 2k_BT}$$

This is $4/3$ times the bulk average $\frac{3}{2}k_BT$ --- effusing molecules are "hotter" because
faster molecules escape preferentially. $\blacksquare$

</details>

### 7.8 Worked Example: Mean Free Path

**Problem.** Estimate the mean free path of nitrogen molecules in air at STP ($T = 273$ K, $P = 1$ atm). The molecular diameter of N$_2$ is approximately $0.37$ nm.

<details>
<summary>Solution</summary>

The mean free path $\lambda$ is the average distance a molecule travels between collisions:

$$\lambda = \frac{1}{\sqrt{2}\,\pi d^2 n}$$

where $n$ is the number density and $d$ is the molecular diameter. From the ideal gas law:

$$n = \frac{P}{k_B T} = \frac{1.013 \times 10^5}{1.381 \times 10^{-23} \times 273} \approx 2.69 \times 10^{25}\ \text{m}^{-3}$$

$$\lambda = \frac{1}{\sqrt{2}\,\pi (3.7 \times 10^{-10})^2 \times 2.69 \times 10^{25}} \approx 6.8 \times 10^{-8}\ \text{m} \approx 68\ \text{nm}$$

This is about 200 times the molecular diameter, confirming the diluteness of the gas and the validity of the classical limit.

$\blacksquare$

</details>

### 7.9 Limitations of the Classical Limit

The Maxwell-Boltzmann distribution fails when quantum effects become significant:
- **Degenerate Fermi gases** (high density, low temperature): Fermi-Dirac statistics must be used; the Pauli exclusion principle prevents multiple occupancy of quantum states.
- **Bose-Einstein condensation** occurs when $n\lambda_{\mathrm{th}}^3 \gtrsim 2.612$; the classical approximation breaks down as bosons accumulate in the ground state.
- **Equipartition failure** at low temperatures: rotational and vibrational degrees of freedom freeze out when $k_B T \ll \hbar\omega$, violating the classical prediction.

---

### 7.10 Common Mistakes

**Mistake 1: Confusing temperature with average kinetic energy**
Temperature is a macroscopic thermodynamic variable defined through $1/T = \partial S/\partial E$, while average kinetic energy is $\langle \varepsilon \rangle = \frac{3}{2}k_B T$ for a monatomic ideal gas. Temperature is defined for any system in thermal equilibrium, not just ideal gases. For systems with internal degrees of freedom (rotations, vibrations), the relationship between temperature and kinetic energy is different.

**Mistake 2: Assuming the Maxwell-Boltzmann distribution applies to all gases**
The Maxwell-Boltzmann distribution is the classical limit valid only when $n\lambda_{\text{th}}^3 \ll 1$. At high densities or low temperatures, quantum statistics (Fermi-Dirac or Bose-Einstein) must be used. Electrons in metals, atoms in a Bose-Einstein condensate, and neutrons in a neutron star all require quantum statistics.

**Mistake 3: Misapplying the equipartition theorem**
The equipartition theorem assigns $\frac{1}{2}k_B T$ per quadratic degree of freedom, but it fails at low temperatures when quantum effects freeze out degrees of freedom. For example, the vibrational mode of a diatomic molecule at room temperature may not contribute $\frac{1}{2}k_B T$ if $\hbar\omega \gg k_B T$. Always check whether the classical limit applies before using equipartition.

## Intuition

The Maxwell-Boltzmann distribution is what quantum statistics looks like when particles are far apart and quantum effects are negligible. At high temperatures or low densities, the thermal de Broglie wavelength shrinks below the inter-particle spacing, and the distinction between bosons and fermions vanishes. The speed distribution reflects a tug-of-war between energy and entropy: the Boltzmann factor suppresses high energies, while the density of states favours them. The most probable speed is lower than the mean, which is lower than the RMS, because the distribution is asymmetric with a tail toward higher speeds.

## Cross-References

- **[Quantum Statistics in Detail](15_quantum-statistics-in-detail.md)**: The Maxwell-Boltzmann distribution is the high-temperature limit of the Fermi-Dirac and Bose-Einstein distributions derived in this chapter.
- **[Statistical Mechanics](2_statistical-mechanics.md)**: The partition function approach to statistical mechanics reduces to the classical result when the thermal wavelength is small.
- **[The Grand Canonical Ensemble](3_the-grand-canonical-ensemble.md)**: The classical limit simplifies the grand partition function to recover the Maxwell-Boltzmann ideal gas.

