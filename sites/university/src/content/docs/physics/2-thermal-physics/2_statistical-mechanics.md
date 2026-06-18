---
title: Statistical Mechanics
tags:
  - Physics
  - University
description: ""s Law** gives the spectral energy density of blackbody radiation:

$$u(\nu, T) = \frac{8\pi h \nu^3}{c^3} \cdot \frac{1}{e^{h\nu/(k_BT)} - 1}$$

**Stefan--Boltzmann Law:** The total radiated power per unit area:

$$j = \sigma T^4, \quad \sigma = \frac{\pi^2 k_B^4}{60 \hbar^3 c^2}$$

**Wien's Displacement Law:** The peak frequency satisfies $\nu_{\mathrm{max} / T = \mathrm{const}}$.

### 2.9 Worked Examples

**Problem.** Calculate the Fermi energy and Fermi temperature for copper. Given: electron density
$n \approx 8.5 \times 10^{28}\,\mathrm{m}^{-3}$, $m_e = 9.109 \times 10^{-31}$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}} \times (3\pi^2 \times 8.5 \times 10^{28})^{2/3}$$

$(3\pi^2 \times 8.5 \times 10^{28})^{1/3} = (2.52 \times 10^{30})^{1/3} \approx 1.36 \times 10^{10}$

$(3\pi^2 n)^{2/3} = (1.36 \times 10^{10})^2 = 1.85 \times 10^{20}$

$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 1.85 \times 10^{20} \approx 1.13 \times 10^{-18}\,\mathrm{J} \approx 7.0\,\mathrm{eV}$

$T_F = \varepsilon_F / k_B = 1.13 \times 10^{-18} / 1.381 \times 10^{-23} \approx 81800\,\mathrm{K}$

The Fermi temperature is much larger than room temperature, confirming that copper electrons are in
the degenerate regime. $\blacksquare$

</details>

<details>
<summary>Worked Example: Entropy of Mixing</summary>

_Solution._ Two ideal gases of $N$ particles each, initially separated by a partition, are allowed
to mix. Calculate the entropy change.

Before mixing: the total entropy is
$2 \times Nk_B\left[\ln\left(\frac{V}{N\lambda^3}\right) + \frac{5}{2}\right]$ (for a monatomic
gas).

After mixing: each gas occupies volume $2V$So the total entropy is:

$$S_f = 2 \times Nk_B\left[\ln\left(\frac{2V}{N\lambda^3}\right) + \frac{5}{2}\right]$$

$$\Delta S_{\mathrm{mix} = S_f - S_i = 2Nk_B\ln\left(\frac{2V}{N\lambda^3}\right) - 2Nk_B\ln\left(\frac{V}{N\lambda^3}\right) = 2Nk_B\ln 2}$$

For 1 mole of each gas: $\Delta S_{\mathrm{mix} = 2R\ln 2 \approx 11.5\,\mathrm{J}/K}$.

**Gibbs paradox.** If the two gases are identical, the entropy of mixing is zero (no physical
change). The resolution is that identical particles are indistinguishable, and the correct counting
already accounts for this via the $1/N!$ factor in the partition function. $\blacksquare$

</details>

### 2.10 Common Pitfalls

- **The classical limit does not always apply.** When $\lambda_{\mathrm{th}^3 \gtrsim V/N}$Quantum
  .../4-statistics-and-probability/2_statistics (Fermi-Dirac or Bose-Einstein) must be used. This is
  critical for electrons in metals and for helium-4 at low temperatures.
- **The Boltzmann distribution applies to systems in contact with a heat bath, not isolated
  systems.** For isolated systems, use the microcanonical ensemble (all accessible microstates
  equally probable).
- **The partition function must account for indistinguishability.** The $1/N!$ factor in $Z_N$ is
  essential for obtaining the correct entropy (otherwise the entropy is not extensive and the Gibbs
  paradox arises).

---

