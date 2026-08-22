---

date: 2026-07-23T21:57:32+01:00
title: "Lasers | Physics - Wyatt's Notes"
tags:
  - Physics
  - University
description: "Einstein's coefficients: (spontaneous emission), (stimulated emission), (absorption). Comprehensive educational content coverage with definitions and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "9_lasers", "url": "https://physics.wyattau.com/4-optics-and-waves/9_lasers"}]
}
</script>

### 9.1 Stimulated Emission

Einstein's coefficients: $A_{21}$ (spontaneous emission), $B_{21}$ (stimulated emission), $B_{12}$
(absorption).

At thermal equilibrium:

$$A_{21} + B_{21}\rho(\omega) = B_{12}\rho(\omega) \cdot \frac{g_1}{g_2} e^{\hbar\omega/(k_B T)}$$

The relations $B_{21} = B_{12}$ (for non-degenerate levels) and
$A_{21}/B_{21} = \hbar\omega^3 n^3/(\pi^2 c^3)$ follow from detailed balance with the Planck
distribution.

### 9.2 Population Inversion

Laser operation requires **population inversion**: $N_2 \gt N_1$ where $N_2$ is the population of
the upper laser level and $N_1$ is the lower.

This cannot be achieved in a two-level system at thermal equilibrium. A **three-level** or
**four-level** laser scheme is needed.

### 9.3 Laser Cavity Modes

A Fabry-Perot cavity of length $L$ supports longitudinal modes at frequencies:

$$\nu_m = m\frac{c}{2nL}, \quad m = 1, 2, 3, \ldots$$

The mode spacing (free spectral range):

$$\Delta\nu = \frac{c}{2nL}$$

For a cavity with mirrors of reflectivity $R$, the **finesse** is:

$$\mathcal{F} = \frac{\pi\sqrt{R}}{1 - R}$$

### 9.4 Gaussian Beams

The fundamental TEM$_{00}$ mode of a laser cavity is a Gaussian beam:

$$E(r, z) = E_0 \frac{w_0}{w(z)} \exp\left(-\frac{r^2}{w(z)^2}\right) \exp\left(-ikz - ik\frac{r^2}{2R(z)} + i\zeta(z)\right)$$

where:

- **Beam waist:** $w_0$ (minimum spot size).
- **Rayleigh range:** $z_R = \pi w_0^2 / \lambda$.
- **Beam radius:** $w(z) = w_0\sqrt{1 + (z/z_R)^2}$.
- **Radius of curvature:** $R(z) = z[1 + (z_R/z)^2]$.
- **Gouy phase:** $\zeta(z) = \arctan(z/z_R)$.

The beam **divergence** (half-angle, far field): $\theta = \lambda/(\pi w_0)$.

### 9.5 Laser Rate Equations

The dynamics of laser populations are described by rate equations. For a four-level laser:

$$\frac{dN_2}{dt} = R_p - \frac{N_2}{\tau_2} - \frac{N_2}{\tau_{21}} - \sigma c\, n_p (N_2 - N_1)$$

$$\frac{dN_1}{dt} = \frac{N_2}{\tau_{21}} - \frac{N_1}{\tau_1} + \sigma c\, n_p (N_2 - N_1)$$

$$\frac{dn_p}{dt} = \sigma c\, n_p (N_2 - N_1) - \frac{n_p}{\tau_p} + \beta \frac{N_2}{\tau_{21}}$$

where $R_p$ is the pump rate, $\sigma$ is the stimulated emission cross-section, $n_p$ is the
photon density, $\tau_p$ is the photon cavity lifetime, and $\beta$ is the spontaneous emission
factor.

### 9.6 Threshold Condition

The laser **threshold** is reached when gain equals loss. The threshold population inversion is:

$$\Delta N_{\mathrm{th}} = \frac{1}{\sigma L} \left(\alpha_{\mathrm{int}} - \frac{1}{2L}\ln(R_1 R_2)\right)$$

where $\alpha_{\mathrm{int}}$ is the internal loss coefficient and $R_1, R_2$ are the mirror
reflectivities.

### 9.7 Q-Switching and Mode Locking

**Q-switching** produces short, high-energy pulses by modulating the cavity quality factor $Q$.
The energy is stored in the gain medium while the cavity is kept low-Q, then released suddenly
when Q-switched to high-Q.

**Mode locking** produces ultrashort pulses by fixing the phase relationship between longitudinal
modes. With $M$ locked modes, the pulse duration is $\Delta t \approx 1/(M \Delta\nu)$, which can
reach femtoseconds.

### 9.8 Types of Lasers

- **He-Ne laser** (gas, 632.8 nm): continuous wave, low power (mW), used in alignment and
  interferometry.
- **Nd:YAG laser** (solid-state, 1064 nm): high power, pulsed or CW, used in machining and surgery.
- **CO$_2$ laser** (gas, 10.6 $\mu$m): very high power, used in cutting and welding.
- **Diode laser** (semiconductor): compact, efficient, used in telecommunications and barcode
  readers.
- **Ti:sapphire laser** (solid-state, tunable 650--1100 nm): mode-locked for femtosecond pulses.

### 9.9 Practice Problems

**Problem 1.** A He-Ne laser cavity is $L = 30$ cm long. Calculate the mode spacing and the number
of longitudinal modes under the gain bandwidth $\Delta\nu \approx 1.5$ GHz.

**Problem 2.** A Nd:YAG laser produces 10 ns pulses at 10 Hz with 100 mJ per pulse. Calculate the
peak power and average power.

**Problem 3.** Show that lasing cannot occur in a two-level system.

_Solution._ In steady state for a two-level system, $N_1 + N_2 = N$ and detailed balance gives
$N_2/N_1 = e^{-\hbar\omega/(k_B T)} < 1$ at any positive temperature. Thus $N_2 \leq N_1$, and
population inversion is impossible. $\blacksquare$

### 9.10 Laser Linewidth and Coherence

The fundamental linewidth of a laser is given by the **Schawlow-Townes limit**:

$$\Delta\nu_{\mathrm{laser}} = \frac{2\pi h\nu (\Delta\nu_c)^2}{P}$$

where $\Delta\nu_c$ is the cavity linewidth and $P$ is the output power. Modern lasers can achieve
linewidths below 1 Hz, enabling applications in precision metrology and optical clocks.

### 9.11 Semiconductor Lasers

Semiconductor (diode) lasers use direct bandgap materials like GaAs and InP. The gain is provided
by electron-hole recombination across the bandgap. Key parameters:

- **Threshold current density:** $J_{\mathrm{th}}$ (100-1000 A/cm$^2$ for common semiconductor materials).
- **Slope efficiency:** $\eta_d = \frac{dP}{dI}$ above threshold.
- **Modulation bandwidth:** up to 40 GHz for direct modulation.

**Distributed feedback (DFB) lasers** use a built-in Bragg grating to select a single longitudinal
mode, essential for wavelength-division multiplexing in fiber communications.

### 9.12 Laser Safety

Lasers are classified by power and wavelength:

- **Class 1:** Safe under all conditions (e.g., DVD players).
- **Class 2:** Low-power visible (< 1 mW), blink reflex protects.
- **Class 3R/3B:** Direct intrabeam viewing hazardous (1-500 mW).
- **Class 4:** High-power (> 500 mW), hazardous to eyes and skin, fire risk.

**Problem 4.** A He-Ne laser has output power 5 mW at 632.8 nm with beam diameter 0.8 mm.
Compute the irradiance (power/area) and determine the laser class.

**Problem 5.** Calculate the photon flux (photons per second) for the laser in Problem 4.

**Problem 6.** A Q-switched Nd:YAG laser produces 10 ns pulses with 100 mJ pulse energy at 10 Hz.
Calculate the peak power, average power, and photon energy at 1064 nm.

## Intuition

A laser works by making light copy itself through stimulated emission. Population inversion is the key: more atoms must be in the excited state than the ground state, which thermal equilibrium forbids. This is like having more people running uphill than downhill. The optical cavity provides feedback, allowing light to pass through the gain medium multiple times. Gaussian beams are the natural modes because diffraction spreads light, and the beam waist balances this spreading. The coherence of laser light comes from all photons being in the same quantum state.

## Common Mistakes

**Mistake 1: Assuming a two-level system can achieve population inversion**
A two-level system at thermal equilibrium always has $N_2 < N_1$ because the Boltzmann factor $e^{-\hbar\omega/(k_BT)}$ is less than one. Stimulated emission and absorption have equal rates ($B_{21} = B_{12}$), so the system reaches equilibrium with more atoms in the lower level. A three-level or four-level pumping scheme is required to bypass this limitation.

**Mistake 2: Confusing the Rayleigh range with the beam waist**
The Rayleigh range $z_R = \pi w_0^2/\lambda$ is the distance over which the beam area doubles, not the beam waist $w_0$ itself. Students often swap these quantities in formulas for beam radius $w(z)$ or divergence angle $\theta$. The beam waist is the minimum spot size at $z = 0$, while the Rayleigh range characterizes how quickly the beam spreads.

**Mistake 3: Neglecting the spontaneous emission factor in rate equations**
The spontaneous emission factor $\beta$ distributes a small fraction of spontaneously emitted photons into the lasing mode. Ignoring $\beta$ leads to an incorrect threshold condition and overestimates the required pump rate. In semiconductor lasers, $\beta$ can be as large as $10^{-4}$, making it non-negligible for threshold calculations.

## Cross-References

- [Coherence Theory](20_coherence-theory-16) -- Laser coherence length and linewidth are determined by the cavity finesse and spontaneous emission processes described here.
- [Fourier Optics](19_fourier-optics-15) -- Gaussian beam propagation and spatial filtering of laser output are applications of the Fourier optics framework.
- [Nonlinear Optics](22_nonlinear-optics) -- High peak powers from mode-locked and Q-switched lasers drive the nonlinear optical effects treated in that chapter.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
