---
title: Fluctuation-Dissipation Theorem
tags:
  - Physics
  - University
description: "The (FDT) connects the response of a system to a small perturbation with the spontaneous fluctuations of the system at equilibrium."
---

### 13.1 Linear Response Theory

The **fluctuation-dissipation theorem** (FDT) connects the response of a system to a small
perturbation with the spontaneous fluctuations of the system at equilibrium.

Consider a Hamiltonian $\mathcal{H}_0$ perturbed by a time-dependent field:

$$\mathcal{H}(t) = \mathcal{H}_0 - f(t)A$$

Where $A$ is an observable conjugate to the field $f(t)$. The change in $\langle A(t) \rangle$ to
first order in $f$ is:

$$\langle A(t) \rangle - \langle A \rangle_0 = \int_{-\infty}^{t} \chi_{AA}(t - t")\, f(t')\, dt'$$

Where the **response function** is:

$$\chi_{AA}(t) = \frac{i}{\hbar}\theta(t)\langle[A(t), A(0)]\rangle_0$$

### 13.2 Classical FDT

In the classical limit, the FDT takes a simpler form. The dynamic susceptibility
$\chi(\omega) = \chi'(\omega) + i\chi''(\omega)$ relates to the power spectrum $S(\omega)$ of
fluctuations:

$$S(\omega) = \frac{2k_B T}{\omega}\,\chi''(\omega)$$

For a harmonic oscillator with damping $\gamma$ and natural frequency $\omega_0$:

$$\chi''(\omega) = \frac{\gamma\omega}{(\omega_0^2 - \omega^2)^2 + \gamma^2\omega^2}$$

The fluctuation spectrum is Lorentzian, peaked at $\omega_0$.

### 13.3 Johnson--Nyquist Noise

The FDT predicts **thermal (Johnson--Nyquist) noise** in a resistor:

$$\langle V^2 \rangle = 4k_B T R \Delta f$$

Where $R$ is the resistance and $\Delta f$ is the bandwidth. This noise is fundamental — it arises
from thermal fluctuations of charge carriers and cannot be eliminated.

<details>
<summary>Worked Example 13.1: Johnson--Nyquist Noise Calculation</summary>

A $10$ k$\Omega$ resistor at room temperature ($T = 300$ K) measured with bandwidth $\Delta f = 1$
MHz:

$$\langle V^2 \rangle = 4 \times 1.38 \times 10^{-23} \times 300 \times 10^4 \times 10^6$$

$$= 4 \times 1.38 \times 10^{-23} \times 3 \times 10^{12}$$

$$= 1.66 \times 10^{-10} \text{ V}^2$$

$$V_{\text{rms} = \sqrt{1.66 \times 10^{-10}} \approx 1.29 \times 10^{-5} \text{ V} = 12.9 \text{  \mu\text{V}}}$$

This sets a fundamental limit on the sensitivity of electrical measurements.

</details>

<details>
<summary>Worked Example 13.2: Brownian Motion and Einstein Relation</summary>

The Einstein relation is a special case of the FDT for Brownian motion. The diffusion constant $D$
relates to the mobility $\mu$:

$$D = \mu k_B T$$

For a spherical particle of radius $r$ in a fluid with viscosity $\eta$:

$$\mu = \frac{1}{6\pi\eta r} \quad \text{(Stokes drag)}$$

So $D = k_B T/(6\pi\eta r)$.

For a $1$ $\mu$M diameter sphere in water ($\eta = 10^{-3}$ Pa$\cdot$S) at $T = 300$ K:

$$D = \frac{1.38 \times 10^{-23} \times 300}{6\pi \times 10^{-3} \times 0.5 \times 10^{-6}} = \frac{4.14 \times 10^{-21}}{9.42 \times 10^{-9}} \approx 4.39 \times 10^{-13} \text{ m}^2/\text{s}$$

The mean squared displacement in time $t$ is $\langle x^2 \rangle = 2Dt$. In 1 second:
$\sqrt{\langle x^2 \rangle} \approx 0.94$ $\mu$M.

</details>

### Key Relationships

| Quantity | Expression | Physical Content |
|----------|------------|------------------|
| Response function | $\chi_{AA}(t) = \frac{i}{\hbar}\theta(t)\langle[A(t), A(0)]\rangle_0$ | Causal linear response |
| Classical FDT | $S(\omega) = \frac{2k_B T}{\omega}\chi''(\omega)$ | Fluctuations $\leftrightarrow$ dissipation |
| Johnson--Nyquist | $\langle V^2 \rangle = 4k_B T R \Delta f$ | Voltage noise in resistor |
| Einstein relation | $D = \mu k_B T$ | Diffusion $\leftrightarrow$ mobility |
| Nyquist formula | $S_V(\omega) = 2k_B T R(\omega)$ | Generalised impedance noise |

### Common Pitfalls

1. **FDT assumes thermal equilibrium:** The system must be in equilibrium at temperature $T$. For out-of-equilibrium systems (driven, ageing, glasses), generalised fluctuation-dissipation relations apply with an effective temperature.
2. **Quantum corrections at low temperature:** The classical FDT $S(\omega) = 2k_B T \chi''(\omega)/\omega$ is valid only for $\hbar\omega \ll k_B T$. At low temperatures, the quantum FDT gives $S(\omega) = \hbar\coth(\hbar\omega/2k_B T)\,\chi''(\omega)$ which includes zero-point fluctuations.
3. **Response functions must be causal:** The response function $\chi_{AA}(t)$ must vanish for $t < 0$ (causality). The Kramers--Kronig relations follow from this, connecting the real and imaginary parts of $\chi(\omega)$.
4. **Linearity requirement:** FDT is a result of linear response theory. For large perturbations, nonlinear effects break the simple relation between fluctuations and dissipation.

### Applications

- **Electrical engineering:** Johnson--Nyquist noise sets the fundamental noise floor in amplifiers, sensors, and communication systems. Cryogenic cooling reduces thermal noise for sensitive measurements.
- **Brownian motion:** The Einstein relation enables determining Boltzmann's constant via tracking colloidal particles, or measuring Avogadro's number from diffusion measurements.
- **Optical trapping:** Fluctuations of a trapped bead in optical tweezers obey the FDT, allowing calibration of trap stiffness from the power spectrum of position fluctuations.
- **Gravitational wave detectors:** Thermal noise in mirror suspensions and test masses limits the sensitivity of LIGO at intermediate frequencies.
- **Biophysics:** Single-molecule force spectroscopy (optical tweezers, AFM) uses fluctuation analysis to extract spring constants and dissipation in biomolecules.

### Connections to Other Topics

- **Kramers--Kronig relations:** Causality imposes integral relations between $\chi'(\omega)$ and $\chi''(\omega)$, which are intimately related to the FDT.
- **Onsager regression hypothesis:** The relaxation of macroscopic nonequilibrium fluctuations follows the same laws as spontaneous fluctuations at equilibrium — a precursor to the FDT.
- **Nonequilibrium statistical mechanics:** The fluctuation theorem (Evans--Searles, Crooks) extends fluctuation--dissipation ideas to far-from-equilibrium regimes, relating work distributions to free energy differences.
- **Quantum optics:** The FDT applied to the electromagnetic field yields the Planck spectrum, connecting blackbody radiation to vacuum fluctuations and dissipation.

### Summary Table: FDT in Different Contexts

| System | Fluctuation | Dissipation | FDT Relation |
|--------|-------------|-------------|--------------|
| Resistor | Voltage noise $\langle V^2 \rangle$ | Resistance $R$ | $\langle V^2 \rangle = 4k_B T R \Delta f$ |
| Brownian particle | Position fluctuations $\langle x^2 \rangle$ | Drag coefficient $\gamma$ | $D = k_B T / \gamma$ |
| Harmonic oscillator | Amplitude fluctuations | Damping rate $\Gamma$ | $S_x(\omega) = \frac{2k_B T}{\omega}\,\chi''(\omega)$ |
| Blackbody radiation | Field fluctuations | Absorption cross section | Planck spectrum $S(\omega) = \frac{\hbar\omega^3}{\pi^2 c^2}(e^{\hbar\omega/k_BT} - 1)^{-1}$ |
| Magnetic system | Magnetisation noise | Magnetic susceptibility | $\chi''(\omega) = \frac{\omega}{2k_B T} S_M(\omega)$ |

### Additional Worked Example: Fluctuation-Dissipation in an RLC Circuit

**Problem.** An RLC circuit at temperature $T$ has resistance $R$, inductance $L$, and capacitance $C$. Find the power spectrum of voltage fluctuations across the capacitor using the FDT.

**Solution.** The impedance of the RLC circuit is $Z(\omega) = R + i(\omega L - 1/(\omega C))$. The FDT in impedance form states: $\langle V^2 \rangle_\omega = 2k_B T \, \text{Re}[Z(\omega)]$. For the RLC circuit:

$$\langle V_C^2 \rangle_\omega = 2k_B T R \left| \frac{1/(i\omega C)}{R + i(\omega L - 1/(\omega C))} \right|^2$$

The total mean-square voltage across the capacitor is $\langle V_C^2 \rangle = k_B T / C$ (equipartition). This is independent of $R$, illustrating that the fluctuation-dissipation relation always yields the correct thermal equilibrium result regardless of the dissipation mechanism.

