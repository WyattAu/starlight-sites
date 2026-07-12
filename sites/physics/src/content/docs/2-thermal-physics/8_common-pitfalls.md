---
title: Common Pitfalls
tags:
  - Physics
  - University
description: "- The microcanonical ensemble describes an isolated system with fixed . The canonical ensemble describes a system in contact with a heat bath at fixed . The"
---

- **Confusing the microcanonical, canonical, and grand canonical ensembles.** The microcanonical
  ensemble describes an isolated system with fixed $E, V, N$. The canonical ensemble describes a
  system in contact with a heat bath at fixed $T, V, N$. The grand canonical ensemble describes a
  system exchanging both energy and particles, at fixed $\mu, V, T$.

- **Forgetting the $1/N!$ for indistinguishable particles.** Without this factor, entropy is not
  extensive and the Gibbs paradox arises. This is essential for all quantum statistical mechanics.

- **Applying the equipartition theorem to quantum systems.** At temperatures below the
  characteristic energy spacing ($k_BT \ll \Delta E$), the relevant degrees of freedom are "frozen
  out" and do not contribute to $C_V$.

- **Assuming the classical limit always applies.** Electrons in metals are degenerate ($T \ll T_F$)
  and must be treated with Fermi-Dirac statistics. Helium-4 at low temperatures exhibits Bose-Einstein
  condensation and superfluidity. The classical limit $n\lambda_{\mathrm{th}}^3 \ll 1$ is violated
  in these cases.

- **Confusing $\mu = 0$ for bosons with $\mu$ for fermions.** For bosons, $\mu \leq \varepsilon_0$
  and $\mu \to 0$ at BEC. For fermions, $\mu \approx \varepsilon_F$ at low temperatures and can be
  much larger than $\varepsilon_0$.

- **Using mean field critical exponents in 2D.** Mean field theory gives $\beta = 1/2$ everywhere,
  but the exact 2D Ising result is $\beta = 1/8$. Mean field theory is qualitatively wrong in low
  dimensions.

### Correct Approaches

**Ensemble selection.** Identify which quantities are fixed in the physical setup: isolated system
$\to$ microcanonical; in contact with heat bath $\to$ canonical; open to particle exchange $\to$
grand canonical. Always specify the control parameters before choosing the ensemble.

**The $1/N!$ factor.** For $N$ indistinguishable particles, the partition function is $Z_N = z^N/N!$
where $z = Z_1$ is the single-particle partition function. This ensures the entropy $S = k_B \ln Z_N$
scales linearly with $N$ and resolves the Gibbs paradox.

**Equipartition in the classical limit.** Equipartition holds only when $k_B T$ is much larger than
the spacing between energy levels. For a harmonic oscillator: $C_V = k_B$ at high $T$, but
$C_V \to 0$ as $T \to 0$ due to quantization. The Einstein model captures this for lattice
vibrations.

**Recognizing degeneracy.** The condition $n\lambda_{\mathrm{th}}^3 \ll 1$ must be checked before
applying Maxwell-Boltzmann statistics. Here $\lambda_{\mathrm{th}} = h/\sqrt{2\pi m k_B T}$ is the
thermal de Broglie wavelength. If this condition fails, quantum statistics are required.

### Worked Examples

**Problem 1 (Ensemble Selection).** A container of gas is placed in a heat bath at temperature $T$,
has fixed volume $V$, but the walls are permeable to particles. Which ensemble should be used?

*Solution.* Since $T$ and $\mu$ are fixed (particle exchange with bath), and $V$ is fixed, use the
grand canonical ensemble. The grand partition function $\Xi = \sum_N e^{\beta\mu N} Z_N$ describes
the system, where $Z_N$ is the canonical partition function. $\blacksquare$

**Problem 2 (Gibbs Paradox).** Two identical ideal gases at the same temperature and pressure are
separated by a partition. The partition is removed. Compute the entropy change with and without
the $1/N!$ factor.

*Solution.* Without the $1/N!$ factor: $S_i = 2Nk_B(\ln V + \text{const})$, $S_f = 2Nk_B(\ln(2V) + \text{const})$
so $\Delta S = 2Nk_B\ln 2$. But the gases are identical, so mixing should produce no entropy change.
With the $1/N!$ factor: the factor of $N!$ in the denominator cancels this spurious increase, giving
$\Delta S = 0$. $\blacksquare$

**Problem 3 (Low-Temperature Heat Capacity).** Estimate the heat capacity of electrons in a metal
at $T \ll T_F$, where $T_F = \varepsilon_F/k_B$ is the Fermi temperature.

*Solution.* Only electrons within $k_B T$ of the Fermi surface are excited. The fraction of excited
electrons is $\sim T/T_F$, and each gains energy $\sim k_B T$. So the electronic heat capacity is
$C_V \approx \gamma T$ where $\gamma = (\pi^2/2)(k_B^2/\varepsilon_F)$. This linear $T$ dependence
is a key signature of a Fermi liquid. $\blacksquare$

### More Common Pitfalls

- **Confusing heat and temperature.** Heat $Q$ is energy transferred due to temperature difference;
  temperature $T$ is the thermodynamic potential that determines the direction of heat flow. A system
  can have high temperature but low heat content (e.g., a spark at $1000$ K has little energy).

- **Misapplying $C_V$ and $C_P$.** $C_V$ applies at constant volume, $C_P$ at constant pressure.
  For an ideal gas, $C_P - C_V = nR$. For condensed phases, the difference is much smaller. Using
  the wrong one leads to errors in enthalpy and entropy calculations.

- **Forgetting the Maxwell relations.** The four Maxwell relations are derived from the equality of
  mixed partial derivatives of thermodynamic potentials. Neglecting them can lead to inconsistent
  thermodynamic cycles.

- **Assuming reversible processes everywhere.** Real processes have irreversibilities (friction,
  uncontrolled expansion, mixing). Entropy is not conserved in irreversible processes. Always
  compute $dS \geq \delta Q/T$.

- **Phase transition classification errors.** First-order transitions have latent heat and
  discontinuous order parameter. Second-order transitions have continuous order parameter but
  divergent susceptibility. The order of transition must be determined from the free energy, not
  from intuition.

### Summary of Key Thermodynamic Potentials

| Potential | Symbol | Natural Variables | Differential |
|-----------|--------|-------------------|--------------|
| Internal energy | $U$ | $S, V, N$ | $dU = TdS - PdV + \mu dN$ |
| Enthalpy | $H$ | $S, P, N$ | $dH = TdS + VdP + \mu dN$ |
| Helmholtz free energy | $F$ | $T, V, N$ | $dF = -SdT - PdV + \mu dN$ |
| Gibbs free energy | $G$ | $T, P, N$ | $dG = -SdT + VdP + \mu dN$ |
| Grand potential | $\Phi$ | $T, V, \mu$ | $d\Phi = -SdT - PdV - Nd\mu$ |

### Additional Pitfalls

- **Confusing $C_P$ and $C_V$ derivatives.** $C_P - C_V = T(\partial P/\partial T)_V (\partial V/\partial T)_P$.
  For water near $4^\circ$C, $(\partial V/\partial T)_P = 0$ so $C_P = C_V$, which is unusual.
  Always verify the relation for the specific substance.
- **Neglecting the chemical potential in open systems.** In grand canonical ensembles,
  $\mu$ is fixed by the reservoir. For photon gases, $\mu = 0$ because photon number is not
  conserved. For electrons, $\mu$ is determined by the density and temperature via the
  Fermi-Dirac distribution.

### Further Pitfalls

- **Confusing thermodynamic potentials and their natural variables.** $U(S,V,N)$, $F(T,V,N)$,
  $G(T,P,N)$, and $H(S,P,N)$ are the correct pairings. Using $U(T,V,N)$ instead of $F(T,V,N)$
  leads to incorrect Maxwell relations and thermodynamic identities. The natural variables
  determine which potential is most convenient for a given process.

- **Forgetting the factor of $k_B$ in entropy.** The statistical definition
  $S = k_B \ln \Omega$ is dimensionally correct only with Boltzmann's constant. Without $k_B$,
  the numerical value of entropy has units of information (bits/nats), not energy per temperature.

- **Assuming all phase transitions are of first or second order.** The 2D Ising model has a
  continuous phase transition with a logarithmic divergence of specific heat ($\alpha = 0$),
  which does not fit neatly into the Ehrenfest classification. The modern classification uses
  order parameter behaviour and symmetry breaking rather than derivatives of free energy.

- **Confusing thermodynamic and kinetic stability.** A system can be thermodynamically unstable
  (negative curvature of free energy) yet kinetically stable (metastable) due to energy barriers.
  Diamond at room temperature is metastable — it is kinetically stable but thermodynamically
  unstable relative to graphite. The phase diagram shows equilibrium, not kinetics.

- **Misapplying the Sackur-Tetrode equation.** The Sackur-Tetrode equation for the entropy of an
  ideal gas assumes translational degrees of freedom only. For diatomic gases, rotational and
  vibrational contributions must be included at sufficiently high temperatures. The formula
  $S = Nk_B[\ln(V/N\lambda^3) + 5/2]$ is valid only for monatomic ideal gases.

- **Neglecting the temperature dependence of the chemical potential.** For fermions at low
  temperatures, $\mu \approx \varepsilon_F[1 - (\pi^2/12)(k_BT/\varepsilon_F)^2]$. The Sommerfeld
  expansion shows that $\mu$ decreases quadratically with $T$, not linearly. Assuming
  $\mu = \varepsilon_F$ at all temperatures leads to errors in the electronic heat capacity
  calculation.
