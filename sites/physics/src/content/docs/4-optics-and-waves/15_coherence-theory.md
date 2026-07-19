---
title: Coherence Theory
tags:
  - Physics
  - University
description: 'A source has finite if the emitted light has a finite bandwidth . The is . Comprehensive educational content coverage with definitions and practice problems.'
---

### 11.1 Temporal Coherence

A source has finite **temporal coherence** if the emitted light has a finite bandwidth $\Delta\nu$.
The **coherence time** is

$$\tau_c \sim \frac{1}{\Delta\nu}$$

and the **coherence length** is

$$L_c = c\,\tau_c \sim \frac{c}{\Delta\nu} = \frac{\lambda^2}{\Delta\lambda}$$

For a Michelson interferometer, fringes are visible only when the path difference is less than
$L_c$.

### 11.2 Spatial Coherence

The **spatial coherence** of a source is characterised by the **coherence area** $A_c$. For a
circular source of angular radius $\Delta\theta$:

$$A_c \approx \frac{\lambda^2}{\pi(\Delta\theta)^2}$$

The van Cittert-Zernike theorem states that the spatial coherence of an incoherent source is given
by the Fourier transform of the source intensity distribution.

**Theorem 11.1 (van Cittert-Zernike).** The mutual coherence function of a quasi-monochromatic
incoherent source with intensity distribution $I(\xi, \eta)$ is

$$\Gamma(\Delta x, \Delta y) = \iint I(\xi, \eta)\, e^{-2\pi i(\xi\,\Delta x + \eta\,\Delta y)/(\lambda z)}\, d\xi\, d\eta$$

This is proportional to the Fourier transform of $I(\xi, \eta)$.

### 11.3 Worked Example: Coherence Length of a Sodium Lamp

**Problem.** A sodium lamp emits the D line at $\lambda = 589$ nm with a linewidth
$\Delta\lambda \approx 0.6$ nm. Find the coherence length and the maximum path difference for which
fringes are visible in a Michelson interferometer.

<details>
<summary>Solution</summary>

$$L_c = \frac{\lambda^2}{\Delta\lambda} = \frac{(589 \times 10^{-9})^2}{0.6 \times 10^{-9}} = \frac{3.47 \times 10^{-13}}{6 \times 10^{-10}} \approx 5.78 \times 10^{-4}\,\mathrm{m} \approx 0.578\,\mathrm{mm}$$

For a He-Ne laser ($\lambda = 632.8$ nm, $\Delta\lambda \sim 10^{-6}$ nm):

$$L_c = \frac{(632.8 \times 10^{-9})^2}{10^{-15}} \approx 400\,\mathrm{m}$$

The enormous coherence length of the laser is why it produces sharp fringes over very large path
differences. $\blacksquare$

</details>

### 11.4 The Mutual Coherence Function

The **mutual coherence function** quantifies the correlation between the optical field at two
space-time points:

$$\Gamma_{12}(\tau) = \langle E^*(r_1, t + \tau) E(r_2, t) \rangle$$

where the angle brackets denote a time average. The normalized form is the **complex degree of
coherence**:

$$\gamma_{12}(\tau) = \frac{\Gamma_{12}(\tau)}{\sqrt{\Gamma_{11}(0)\,\Gamma_{22}(0)}}$$

The magnitude $|\gamma_{12}(\tau)|$ satisfies $0 \leq |\gamma_{12}(\tau)| \leq 1$.

- $|\gamma| = 1$: fully coherent.
- $0 < |\gamma| < 1$: partially coherent.
- $|\gamma| = 0$: completely incoherent.

### 11.5 Fringe Visibility and the Michelson Interferometer

In a Michelson interferometer, the intensity at the output is:

$$I = I_1 + I_2 + 2\sqrt{I_1 I_2}\, |\gamma_{12}(\tau)| \cos(\Delta\phi)$$

The **fringe visibility** (or contrast) is defined as:

$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}\, |\gamma_{12}(\tau)|$$

For equal intensities $I_1 = I_2$, the visibility equals $|\gamma_{12}(\tau)|$.

### 11.6 The Wiener-Khinchin Theorem

The Wiener-Khinchin theorem relates the power spectral density to the autocorrelation function:

$$S(\nu) = \int_{-\infty}^{\infty} \Gamma_{11}(\tau)\, e^{2\pi i\nu\tau}\, d\tau$$

$$\Gamma_{11}(\tau) = \int_{-\infty}^{\infty} S(\nu)\, e^{-2\pi i\nu\tau}\, d\nu$$

Thus the coherence time and spectral width satisfy the uncertainty relation:

$$\tau_c \cdot \Delta\nu \sim 1$$

This is a fundamental property linking temporal coherence to the source spectrum.

### 11.7 Young's Double-Slit Experiment with Partial Coherence

In Young's experiment with partially coherent illumination, the fringe visibility is:

$$V = |\gamma_{12}(0)| \cdot \left|\frac{2J_1(k a \theta)}{k a \theta}\right|$$

where $a$ is the slit separation, $\theta$ is the angular source size, and $J_1$ is the Bessel
function of the first kind. The first zero occurs when $k a \theta = 3.83$, giving the condition for
the loss of spatial coherence fringes:

$$a \approx \frac{1.22 \lambda}{\theta}$$

### 11.8 Practice Problems

**Problem 1.** A white-light source has bandwidth $\Delta\lambda \approx 300$ nm centered at
$\lambda = 550$ nm. Calculate the coherence length.

**Problem 2.** An extended incoherent source of angular diameter $0.1$ mrad illuminates a double
slit at $\lambda = 500$ nm. What is the maximum slit separation that yields visible fringes?

**Problem 3.** In a Michelson interferometer with equal beam intensities, the fringe visibility
drops to $0.5$ at a path difference of $100\ \mu$m. Estimate the coherence length and bandwidth
of the source.

**Problem 4.** Derive the relationship between the coherence area and the solid angle subtended by
an extended source.

_Solution._ For a circular source of angular radius $\Delta\theta$, the coherence area is
$A_c \approx \lambda^2 / (\pi (\Delta\theta)^2)$. If the source subtends a solid angle
$\Omega = \pi (\Delta\theta)^2$, then $A_c \approx \lambda^2 / \Omega$. This expresses the
fundamental trade-off: a source of larger angular extent produces light with smaller coherence
area. $\blacksquare$

### 11.9 Stellar Interferometry

The **Michelson stellar interferometer** uses spatial coherence to measure the angular diameter of
stars. By varying the baseline $d$ between two apertures until fringes disappear, the angular
diameter $\theta$ is obtained from:

$$\theta \approx 1.22 \frac{\lambda}{d_{\mathrm{max}}}$$

where $d_{\mathrm{max}}$ is the maximum baseline at which fringes are visible. This technique
enables angular resolution far beyond the diffraction limit of a single telescope.

**Example.** Betelgeuse ($\alpha$ Orionis) has angular diameter $\theta \approx 0.047$ arcseconds.
At $\lambda = 500$ nm, this requires $d_{\mathrm{max}} \approx 1.22 \times 500 \times 10^{-9} /
(0.047 \times \pi/648000) \approx 2.7$ m.

### 11.10 Quantum Optics and Coherence

In quantum optics, coherence is described by the **first-order correlation function** $g^{(1)}(\tau)$
and **second-order correlation function** $g^{(2)}(\tau)$. For thermal light, $g^{(2)}(0) = 2$
(bunching). For coherent laser light, $g^{(2)}(\tau) = 1$. For non-classical light (photon
antibunching), $g^{(2)}(0) < 1$.

**Problem 5.** Two slits separated by 0.5 mm are illuminated by a star of angular diameter
0.01 arcseconds at $\lambda = 550$ nm. Compute the fringe visibility and determine whether the
fringes are observable.

## Common Mistakes

**Mistake 1: Assuming temporal and spatial coherence are independent properties**
While they can be treated separately in many situations, they are fundamentally linked through the mutual coherence function. A source with large angular extent (low spatial coherence) may still have high temporal coherence if its bandwidth is narrow. Students often conflate these two types of coherence or assume a laser has both perfect temporal and spatial coherence.

**Mistake 2: Confusing the coherence length with the wavelength**
The coherence length $L_c = \lambda^2/\Delta\lambda$ depends on the spectral bandwidth, not just the wavelength. For a sodium lamp at $\lambda = 589$ nm with $\Delta\lambda = 0.6$ nm, $L_c \approx 0.6$ mm, which is much smaller than the wavelength. Students sometimes assume $L_c$ is always much larger than $\lambda$, which is only true for highly monochromatic sources.

**Mistake 3: Assuming fringe visibility of 1 requires perfect coherence**
Fringe visibility also depends on the intensity ratio of the two beams. For equal intensities $I_1 = I_2$, the visibility equals $|\gamma_{12}|$. But if $I_1 \neq I_2$, the visibility is reduced even for fully coherent light. The correct formula is $V = (2\sqrt{I_1 I_2}/(I_1 + I_2))|\gamma_{12}|$.

Coherence measures how predictable the phase relationship is between different points on a wave. Temporal coherence tells you how long you can trust the phase before it wanders randomly, like how long a tuning fork stays in tune. Spatial coherence tells you how far apart two points can be while still maintaining a fixed phase relationship, like how many people in a crowd are clapping in sync. The van Cittert-Zernike theorem connects source size to coherence: a smaller source produces more coherent light. Thermal light has short coherence because atoms emit independently.
