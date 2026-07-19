---
title: The Debye Model of Solids
tags:
  - Physics
  - University
description: 'The treats all atoms as independent quantum oscillators with the same frequency . Comprehensive educational content coverage with definitions and practice problems.'
---

### 16.1 From Einstein to Debye

The **Einstein model** treats all atoms as independent quantum oscillators with the same frequency
$\omega_E$:

$$C_V = 3Nk_B\left(\frac{\theta_E}{T}\right)^2 \frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}$$

Where $\theta_E = \hbar\omega_E/k_B$. This correctly predicts $C_V \to 0$ as $T \to 0$ but gives
$C_V \propto e^{-\theta_E/T}$ at low $T$, whereas experiments show $C_V \propto T^3$.

The **Debye model** treats the lattice vibrations as a continuum of phonon modes with a cutoff
frequency $\omega_D$:

$$g(\omega) = \frac{3V\omega^2}{2\pi^2 v_s^3} \quad \text{for} \ 0 \leq \omega \leq \omega_D$$

Where $v_s$ is the average sound speed. The cutoff is determined by the total number of modes:

$$\int_0^{\omega_D} g(\omega)\,d\omega = 3N \implies \omega_D = v_s(6\pi^2 N/V)^{1/3}$$

### 16.2 Debye Specific Heat

The internal energy:

$$E = \int_0^{\omega_D} \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}\, g(\omega)\, d\omega = \frac{3V\hbar}{2\pi^2 v_s^3}\int_0^{\omega_D} \frac{\omega^3}{e^{\beta\hbar\omega} - 1}\, d\omega$$

With $x = \hbar\omega/k_BT$ and $\theta_D = \hbar\omega_D/k_B$ (Debye temperature):

$$E = 9Nk_BT\left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^3}{e^x - 1}\, dx$$

The specific heat:

$$C_V = 9Nk_B\left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2}\, dx$$

**Low-temperature limit** ($T \ll \theta_D$):

$$C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\theta_D}\right)^3 \propto T^3$$

**High-temperature limit** ($T \gg \theta_D$): $C_V \to 3Nk_B$ (Dulong--Petit).

<details>
<summary>Worked Example 16.1: Debye Temperature of Aluminum</summary>

Aluminum has $M = 27$ g/mol, $\rho = 2.70$ g/cm$^3$, $v_s \approx 6420$ m/s.

$$n = \frac{\rho N_A}{M} = \frac{2.70 \times 10^3 \times 6.022 \times 10^{23}}{27 \times 10^{-3}} = 6.02 \times 10^{28} \text{ m}^{-3}$$

$$\omega_D = v_s(6\pi^2 n)^{1/3} = 6420 \times (6\pi^2 \times 6.02 \times 10^{28})^{1/3}$$

$$= 6420 \times (3.56 \times 10^{30})^{1/3} = 6420 \times 1.526 \times 10^{10} = 9.80 \times 10^{13} \text{ rad/s}$$

$$\theta_D = \frac{\hbar\omega_D}{k_B} = \frac{1.055 \times 10^{-34} \times 9.80 \times 10^{13}}{1.38 \times 10^{-23}} \approx 748 \text{ K}$$

The experimental value is $\theta_D \approx 428$ K. The discrepancy arises from the oversimplified
single sound-speed approximation.

</details>

### 16.3 Mean Sound Speed

In real solids, longitudinal and transverse waves have different speeds. The Debye model uses an
**average sound speed** $v_s$ defined by:

$$\frac{3}{v_s^3} = \frac{1}{v_L^3} + \frac{2}{v_T^3}$$

where $v_L$ is the longitudinal speed and $v_T$ is the transverse speed. This accounts for one
longitudinal mode and two transverse modes per wavevector.

### 16.4 Comparison of Einstein and Debye Models

The Einstein model fails at low temperatures because it assumes all oscillators have the same
frequency, so only the exponentially small high-energy tail contributes. The Debye model correctly
captures the $T^3$ law because the density of states $g(\omega) \propto \omega^2$ means that low-
frequency (acoustic) modes have vanishing excitation energy.

At high temperatures, both models converge to the Dulong--Petit value $3Nk_B$.

### 16.5 Debye Frequency and Wavevector

The Debye wavevector $k_D$ is related to the Debye frequency by $\omega_D = v_s k_D$. The
corresponding Debye wavelength $\lambda_D = 2\pi/k_D$ is comparable to the interatomic spacing.

The Debye temperature $\theta_D$ is a material property that correlates with the melting point and
elastic constants. Materials with stiff bonds and light atoms (like diamond) have high $\theta_D$.
Soft materials (like lead) have low $\theta_D$.

### 16.6 Thermal Conductivity and Phonon Transport

Debye's model also describes thermal transport. The lattice thermal conductivity is:

$$\kappa = \frac{1}{3} C_V v_s \ell$$

where $\ell$ is the phonon mean free path. At low temperatures, $\ell$ is limited by boundary
scattering; at high temperatures, by umklapp processes.

### 16.7 Practice Problems

**Problem 1.** Estimate the Debye temperature of copper given: density $\rho = 8.96$ g/cm$^3$,
molar mass $M = 63.55$ g/mol, and $v_s \approx 4700$ m/s.

**Problem 2.** Show that in the high-temperature limit, the Debye specific heat reduces to the
Dulong-Petit law $C_V = 3Nk_B$.

_Solution._ For $T \gg \theta_D$, $x \ll 1$ in the integral, so $e^x \approx 1 + x$ and
$x^4 e^x/(e^x - 1)^2 \approx x^2$. The integral $\int_0^{\theta_D/T} x^2\, dx \approx
\frac{1}{3}(\theta_D/T)^3$. Then $C_V = 9Nk_B (T/\theta_D)^3 \cdot \frac{1}{3}(\theta_D/T)^3 =
3Nk_B$. $\blacksquare$

**Problem 3.** At what temperature does the Debye specific heat of aluminum reach 90% of its
classical value? (Hint: use the Debye temperature $\theta_D = 428$ K.)

**Problem 4.** Derive the exact $T^3$ coefficient
$\frac{12\pi^4}{5} Nk_B / \theta_D^3$ by evaluating $\int_0^\infty \frac{x^4 e^x}{(e^x - 1)^2}\, dx$
using the known value $\int_0^\infty \frac{x^3}{e^x - 1}\, dx = \pi^4/15$.

### 16.8 The Debye Model for Specific Heat of Graphite

Graphite has highly anisotropic sound speeds due to its layered structure. The in-plane speed is
$v_{\parallel} \approx 23,000$ m/s, while the out-of-plane speed is $v_{\perp} \approx 1,600$ m/s.
This leads to a modified density of states and a different low-temperature behavior. The Debye
temperature of graphite along different crystallographic directions can differ by a factor of 10.

### 16.9 Beyond the Debye Model

The Debye model assumes a linear dispersion relation $\omega = v_s k$, which holds only for
acoustic phonons at long wavelengths. Real phonon dispersion curves have optical branches and
flatten near the Brillouin zone boundary. More accurate models include:

- **Born-von Kármán model:** Treats atoms as coupled oscillators with nearest-neighbor forces,
  giving realistic dispersion curves.
- **First-principles DFT calculations:** Compute phonon spectra directly from the electronic
  structure, giving the most accurate heat capacities.

### 16.10 Summary

- The Einstein model predicts $C_V \propto e^{-\theta_E/T}$ at low $T$, failing experimentally.
- The Debye model introduces a cutoff frequency $\omega_D$ and density of states $g(\omega) \propto \omega^2$.
- Low $T$: $C_V \propto T^3$ (Debye $T^3$ law). High $T$: $C_V \to 3Nk_B$ (Dulong-Petit).
- The Debye temperature $\theta_D$ is a material constant determined by sound speed and atomic density.
- The model is accurate for monatomic crystals but has limitations for anisotropic and polyatomic materials.

**Problem 5.** Diamond has $\theta_D \approx 2230$ K (very high due to strong bonds and light carbon
atoms). Compute the specific heat of diamond at 100 K, 300 K, and 500 K using the Debye model.

**Problem 6.** Show that in the low-temperature limit, the Debye model gives
$U = \frac{3\pi^4}{5} Nk_B T (T/\theta_D)^3$ by evaluating the integral $\int_0^\infty x^3/(e^x - 1)\, dx = \pi^4/15$.

## Intuition

The Debye model treats a crystal like a box of sound waves. At low temperatures, only long-wavelength vibrations are excited, like a drum that can only produce deep bass notes. The T^3 law for specific heat reflects the three-dimensional density of phonon states. At high temperatures, every mode is equally excited, giving the classical Dulong-Petit result. The Debye temperature marks the crossover: below it, quantum effects freeze out modes; above it, classical behavior emerges. The model succeeds because phonons are the natural excitations of a crystal lattice.

## Common Mistakes

**Mistake 1: Applying the Einstein model at low temperatures instead of the Debye model**
The Einstein model predicts $C_V \propto e^{-\theta_E/T}$ at low temperatures, which decays exponentially and fails to match the experimentally observed $T^3$ power law. The Debye model correctly captures the $T^3$ behavior because its density of states $g(\omega) \propto \omega^2$ allows low-frequency acoustic modes to contribute. Use the Debye model for thermal properties of crystals below their Debye temperature.

**Mistake 2: Confusing the Debye cutoff frequency with the optical phonon frequency**
The Debye frequency $\omega_D$ is an artificial cutoff imposed to match the total number of modes ($3N$), not a physical phonon frequency. Real crystals have optical branches with higher frequencies that the Debye model ignores. The Debye temperature $\theta_D$ is an effective parameter that averages over all branches using a single sound speed.

**Mistake 3: Forgetting to account for longitudinal and transverse modes separately**
The average sound speed $v_s$ used in the Debye model must account for both longitudinal and transverse phonon branches. The correct formula is $3/v_s^3 = 1/v_L^3 + 2/v_T^3$, reflecting one longitudinal and two transverse modes per wavevector. Using only the longitudinal speed overestimates $\theta_D$ and gives incorrect specific heat values.

## Cross-References

- [Thermodynamic Response Functions](/physics/2-thermal-physics/17_thermodynamic-response-functions) -- The heat capacity $C_V$ derived from the Debye model is an example of the response functions treated in that chapter.
- [Ising Model and Mean-Field Theory](/physics/2-thermal-physics/12_ising-model-and-mean-field-theory) -- Both the Debye model and mean-field theory illustrate how simplified models capture essential physics of phase transitions and collective excitations.
- [Irreversible Thermodynamics and Fluctuations](/physics/2-thermal-physics/19_irreversible-thermodynamics-and-fluctuations) -- Phonon transport and thermal conductivity connect the equilibrium Debye model to irreversible thermodynamic processes.
