---
title: Superconductivity
tags:
  - Physics
  - University
description: "is the complete loss of electrical resistance below a critical temperature Comprehensive educational content coverage with definitions and practice problems."
---

### 7.1 Basic Phenomenology

**Superconductivity** is the complete loss of electrical resistance below a critical temperature
$T_c$. Discovered by Onnes in 1911 (mercury, $T_c = 4.2$ K).

Key experimental facts:

1. **Zero resistance:** $\rho = 0$ for $T \lt T_c$.
2. **Meissner effect:** Complete expulsion of magnetic flux from the interior: $\mathbf{B} = 0$
   inside a superconductor (for $T \lt T_c$ and $B \lt B_c$).
3. **Critical magnetic field:** Superconductivity is destroyed above
   $B_c(T) = B_c(0)[1 - (T/T_c)^2]$.
4. **Critical current density:** Superconductivity is destroyed above a critical current density
   $J_c$.

### 7.2 London Equations

The **London equations** describe the electromagnetic response of a superconductor:

$$\frac{\partial \mathbf{J}_s}{\partial t} = \frac{n_s e^2}{m_e}\mathbf{E}$$

$$\nabla \times \mathbf{J}_s = -\frac{n_s e^2}{m_e}\mathbf{B}$$

Where $n_s$ is the density of superconducting electrons.

Combining with Maxwell"s equations:

$$\nabla^2 \mathbf{B} = \frac{1}{\lambda_L^2}\mathbf{B}$$

Where $\lambda_L = \sqrt{m_e/(\mu_0 n_s e^2)}$ is the **London penetration depth**.

The solution $\mathbf{B}(x) = B_0 e^{-x/\lambda_L}$ shows that magnetic fields decay exponentially
Inside the superconductor, explaining the Meissner effect.

### 7.3 BCS Theory

**BCS theory** (Bardeen, Cooper, Schrieffer, 1957) explains superconductivity through the formation
Of **Cooper pairs**.

**Cooper pairing.** Two electrons with opposite momenta and spins form a bound state via the
Electron-phonon interaction (the lattice mediates an effective attractive interaction). The Cooper
pair Has charge $2e$ and spin 0 (boson).

**The BCS gap equation:**

$$\Delta = V_{\mathrm{pair} \sum_{\mathbf{k}} \frac{\Delta}{2E_{\mathbf{k}}} \tanh\left(\frac{E_{\mathbf{k}}}{2k_B T}\right)}$$

Where $E_{\mathbf{k}} = \sqrt{\xi_{\mathbf{k}}^2 + \Delta^2}$ is the quasiparticle energy,
$\xi_{\mathbf{k}}$ Is the normal-state energy relative to $E_F$And $\Delta$ is the superconducting
energy gap.

At $T = 0$: $\Delta(0) = 2\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair})}}$ (BCS formula).

The critical temperature:

$$k_B T_c = 1.13\,\hbar\omega_D\, e^{-1/(N(E_F)V_{\mathrm{pair})}}$$

The ratio $2\Delta(0)/(k_B T_c) \approx 3.53$ is a universal BCS prediction.

### 7.4 Type I and Type II Superconductors

**Type I:** One critical field $B_c$. Below $B_c$: complete Meissner effect. Above $B_c$: normal
State. Examples: Pb, Hg, Al.

**Type II:** Two critical fields $B_{c1} \lt B_{c2}$. For $B_{c1} \lt B \lt B_{c2}$: **mixed state**
(vortices with normal cores in a superconducting matrix). For $B \gt B_{c2}$: normal state.
Examples: Nb, YBCO (high-$T_c$).

### 7.5 High-Temperature Superconductors

Discovered in 1986 (Bednorz and Müller). Cuprate superconductors such as YBa$_2$Cu$_3$O$_{7-\delta}$
(YBCO) have $T_c$ up to $\sim 135$ K. These are Type II, layered, and not fully explained by BCS
Theory (the pairing mechanism is still debated).

**Key properties of high-$T_c$ superconductors:**

- **d-wave pairing symmetry:** Unlike conventional BCS superconductors (s-wave), cuprates have a gap
  function with $d_{x^2-y^2}$ symmetry: $\Delta(\mathbf{k}) = \Delta_0(\cos k_x - \cos k_y)/2$ which
  vanishes along the nodal directions $k_x = \pm k_y$.
- **Short coherence length:** $\xi \sim 1$--$2$ nm (compared with $\sim 100$ nm for conventional
  superconductors), making them sensitive to defects but allowing high critical current densities.
- **Strong anisotropy:** Superconducting properties differ dramatically between the $ab$-planes and
  the $c$-axis direction.
- **Pseudogap phase:** Above $T_c$ but below a characteristic temperature $T^*$A partial gap opens
  in the electronic spectrum, suggesting precursive pairing correlations.
- **Phase diagram:** Doping controls the transition from antiferromagnetic insulator (underdoped)
  through the superconducting dome to a normal metal (overdoped).

Other families of high-$T_c$ superconductors include iron-based pnictides ($T_c$ up to 56 K),
Magnesium diboride MgB$_2$ ($T_c = 39$ K), and the recently discovered nickelates and hydrides
($T_c$ up to $\sim 250$ K under extreme pressure).

### 7.6 Key Relationships

- **BCS gap ratio:** $2\Delta(0)/(k_BT_c) \approx 3.53$ for conventional superconductors. Deviations indicate strong coupling or unconventional pairing.
- **London penetration depth:** $\lambda_L = \sqrt{m_e/(\mu_0 n_s e^2)}$. Typical values are 20--100 nm. $\lambda_L$ diverges as $T \to T_c$ because $n_s \to 0$.
- **Coherence length:** $\xi_0 = \hbar v_F/(\pi\Delta_0)$ is the BCS coherence length, setting the scale over which the gap varies spatially.
- **Ginzburg-Landau parameter:** $\kappa = \lambda_L/\xi_0$. Type I: $\kappa < 1/\sqrt{2}$; Type II: $\kappa > 1/\sqrt{2}$.
- **Flux quantisation:** The magnetic flux through a superconducting loop is quantised in units of $\Phi_0 = h/(2e) \approx 2.07 \times 10^{-15}$ Wb. The factor $2e$ reflects the charge of a Cooper pair.

### 7.7 Common Pitfalls

- **Confusing $B_c$ with $B_{c1}$ and $B_{c2}$:** For Type II superconductors, $B_{c1}$ marks the onset of flux penetration (mixed state) while $B_{c2}$ marks the complete destruction of superconductivity. $B_c$ is only meaningful for Type I.
- **Assuming zero resistance means infinite conductivity:** The London equations show that superconductors have a frequency-dependent response. At finite frequency there is a reactive (lossless) current, not infinite DC conductivity.
- **Neglecting the isotope effect:** $T_c \propto M^{-\alpha}$ with $\alpha \approx 0.5$ for conventional superconductors. A deviation from $\alpha = 0.5$ suggests a non-phonon pairing mechanism.
- **Overlooking metastable states:** Type II superconductors can trap vortices (flux pinning). The critical current density $J_c$ depends on the pinning force, not just the upper critical field.

### 7.8 Applications

- **MRI magnets:** Superconducting magnets provide the strong, stable magnetic fields (1.5--7 T) required for magnetic resonance imaging. Niobium-titanium wire cooled to 4.2 K is the standard.
- **Particle accelerators:** The Large Hadron Collider at CERN uses over 1,200 superconducting dipole magnets (NbTi at 1.9 K) to bend proton beams at 6.5 TeV.
- **SQUIDs:** Superconducting quantum interference devices exploit flux quantisation and Josephson tunnelling to measure magnetic fields as small as $10^{-15}$ T, used in magnetoencephalography.
- **Lossless power transmission:** High-temperature superconducting cables (YBCO) are being deployed in urban grids to transmit large currents with zero resistive losses, though cooling costs must be offset.

### 7.9 Josephson Effects

A **Josephson junction** consists of two superconductors separated by a thin insulating barrier. Cooper pairs can tunnel through the barrier, producing remarkable effects:

- **DC Josephson effect:** A supercurrent $I = I_c \sin\phi$ flows across the junction even at zero applied voltage, where $\phi$ is the phase difference of the order parameter across the barrier and $I_c$ is the critical current.
- **AC Josephson effect:** When a constant voltage $V$ is applied, the phase evolves as $d\phi/dt = 2eV/\hbar$, producing an oscillating current with frequency $f = 2eV/h \approx 483.6$ MHz/$\mu$V. This provides an exact voltage-to-frequency conversion.

The Josephson effects are the basis for SQUIDs, voltage standards, and superconducting qubits used in quantum computing.


## Intuition

Superconductivity is the complete disappearance of electrical resistance below a critical temperature. Electrons form Cooper pairs through interactions with the crystal lattice, and these pairs condense into a single quantum state that flows without scattering. The Meissner effect expels magnetic fields from the superconductor, creating the levitation effect. The BCS theory explains conventional superconductors, but high-temperature superconductors remain poorly understood, with theories involving spin fluctuations and stripe phases. The critical temperature record keeps rising, bringing us closer to room-temperature superconductivity, which would revolutionize power transmission and computing.
