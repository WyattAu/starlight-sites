---
title: Coherence
tags:
  - Physics
  - University
description: ': the time over which the wave maintains a well-defined phase. Comprehensive educational content coverage with definitions and practice problems.'
---

### 8.1 Temporal Coherence

**Coherence time** $\tau_c$: the time over which the wave maintains a well-defined phase.

**Coherence length:** $L_c = c\tau_c$.

For a source with spectral width $\Delta\nu$:

$$\tau_c \approx \frac{1}{\Delta\nu}, \quad L_c \approx \frac{c}{\Delta\nu} = \frac{\lambda^2}{\Delta\lambda}$$

A sodium lamp ($\Delta\lambda \approx 0.6$ nm at $\lambda = 589$ nm) has $L_c \approx 0.6$ mm. A
laser ($\Delta\lambda \approx 10^{-6}$ nm) has $L_c \approx 300$ m.

<details>
<summary>Worked Example: Coherence length and fringe visibility</summary>

**Problem.** A mercury lamp emits light at $\lambda = 546.1$ nm with a spectral width
$\Delta\lambda = 0.025$ nm. (a) Find the coherence length. (b) In a Michelson interferometer, at
what Path difference does the fringe visibility drop to $1/e$? (c) How many fringes are visible
before they Wash out?

**Solution.**

(a)
$L_c = \lambda^2/\Delta\lambda = (546.1 \times 10^{-9})^2/(0.025 \times 10^{-9}) = 1.19 \times 10^{-2}$
m $= 11.9$ mm.

(b) For a Gaussian spectrum, visibility drops to $1/e$ when $\Delta x = L_c = 11.9$ mm.

(c) The number of fringes:
$N_{\mathrm{fringes} = L_c/\lambda = (11.9 \times 10^{-3})/(546.1 \times 10^{-9}) = 2.18 \times 10^4}$.
Over 20000 fringes are visible — a large number, but far fewer than for a laser.

</details>

### 8.2 Spatial Coherence

The **van Cittert-Zernike theorem** states that the spatial coherence of light from an extended
Incoherent source is given by the Fourier transform of the source intensity distribution.

For a circular source of angular diameter $\theta_s$The transverse coherence length is:

$$l_c \approx \frac{1.22\lambda}{\theta_s}$$

### 8.3 The Mutual Coherence Function

The **mutual coherence function** quantifies the correlation between the wave field at two spacetime points:

$$\Gamma_{12}(\tau) = \langle E^*(r_1, t) E(r_2, t + \tau) \rangle$$

The **complex degree of coherence** is the normalised quantity:

$$\gamma_{12}(\tau) = \frac{\Gamma_{12}(\tau)}{\sqrt{\Gamma_{11}(0) \Gamma_{22}(0)}}$$

For quasi-monochromatic light, the visibility of interference fringes equals $|\gamma_{12}(\tau)|$. Fringes are visible when $0 < |\gamma| \leq 1$, with $|\gamma| = 1$ for perfectly coherent light and $|\gamma| = 0$ for incoherent light.

### 8.4 First-Order Coherence and the Wiener-Khinchin Theorem

The **Wiener-Khinchin theorem** relates the power spectral density $S(\omega)$ of a stationary random process to the autocorrelation function via Fourier transform:

$$\Gamma_{11}(\tau) = \int_{-\infty}^{\infty} S(\omega) e^{-i\omega\tau} d\omega$$

The coherence time is inversely related to the spectral width: $\tau_c = \int_{-\infty}^{\infty} |\gamma_{11}(\tau)|^2 d\tau$. For a Lorentzian line shape, $\tau_c = 1/(\pi\Delta\nu)$.

### 8.5 Partial Coherence and the Wolf Equations

Partially coherent light is described by the **cross-spectral density function** $W(r_1, r_2, \omega)$, which is the Fourier transform of the mutual coherence function:

$$W(r_1, r_2, \omega) = \frac{1}{2\pi} \int_{-\infty}^{\infty} \Gamma(r_1, r_2, \tau) e^{i\omega\tau} d\tau$$

The Wolf equations govern the propagation of the cross-spectral density, generalising the Helmholtz equation to partially coherent fields.

### 8.6 Second-Order Coherence and Photon Bunching

**Second-order coherence** measures intensity correlations:

$$g^{(2)}(\tau) = \frac{\langle I(t) I(t+\tau) \rangle}{\langle I(t) \rangle^2}$$

- **Thermal light** (chaotic): $g^{(2)}(0) = 2$, exhibiting **photon bunching**.
- **Coherent light** (laser): $g^{(2)}(\tau) = 1$ for all $\tau$.
- **Antibunched light** (single-photon source): $g^{(2)}(0) < 1$.

The Hanbury Brown-Twiss (HBT) interferometer measures $g^{(2)}(\tau)$ and was originally used to measure the angular diameter of stars. The HBT effect demonstrated that intensity correlations contain information about source size even when first-order coherence is absent.

### 8.7 Worked Example: Fringe Visibility of Two Spectral Lines

**Problem.** A source emits two equal-intensity spectral lines at $\lambda_1$ and $\lambda_2$ with
$\Delta\lambda = |\lambda_2 - \lambda_1| \ll \lambda$. Find the fringe visibility in a Michelson
interferometer as a function of path difference.

<details>
<summary>Solution</summary>

The interference pattern is the sum of patterns from each line:

$$I = I_0\left[2 + \cos\!\left(\frac{2\pi\Delta x}{\lambda_1}\right) + \cos\!\left(\frac{2\pi\Delta x}{\lambda_2}\right)\right]$$

Using the sum-to-product identity:

$$I = 2I_0\left[1 + \cos\!\left(\frac{\pi\Delta x}{\lambda_1} + \frac{\pi\Delta x}{\lambda_2}\right) \cos\!\left(\frac{\pi\Delta x}{\lambda_1} - \frac{\pi\Delta x}{\lambda_2}\right)\right]$$

For $\Delta\lambda \ll \lambda$, this becomes:

$$I = 2I_0\left[1 + \cos\!\left(\frac{2\pi\Delta x}{\bar{\lambda}}\right) \cos\!\left(\frac{\pi\Delta x\,\Delta\lambda}{\bar{\lambda}^2}\right)\right]$$

where $\bar{\lambda}$ is the mean wavelength. The fringe visibility is $|\cos(\pi\Delta x\,\Delta\lambda/\bar{\lambda}^2)|$, which drops to zero when $\Delta x = \bar{\lambda}^2/(2\Delta\lambda)$. This is the coherence length for a two-line source.

$\blacksquare$

</details>

### 8.8 Worked Example: Michelson Stellar Interferometer

Two separated mirrors direct light from a distant star into a single telescope. Fringes are observed
When the mirror separation $d$ satisfies:

$$d \lt \frac{1.22\lambda}{\theta_s}$$

The first disappearance of fringes gives the angular diameter of the star:
$\theta_s = 1.22\lambda/d$.

### 8.9 Coherence of Laser Light vs Thermal Light

| Property | Laser | Thermal source |
|----------|-------|----------------|
| Spectral width $\Delta\nu$ | $\sim 1$ MHz or less | $\sim 10^{14}$ Hz |
| Coherence time $\tau_c$ | $\sim 1\ \mu$s or more | $\sim 10^{-14}$ s |
| Coherence length $L_c$ | $\sim 300$ m or more | $\sim 1\ \mu$m |
| Spatial coherence | Full (across beam) | Limited by van Cittert-Zernike |
| $g^{(2)}(0)$ | $1$ (coherent) | $2$ (chaotic) |

### 8.10 Worked Example: Spatial Coherence of Sunlight

**Problem.** The sun has an angular diameter of approximately $0.53^\circ$ as seen from Earth. What is the transverse coherence length of sunlight at $\lambda = 550$ nm?

<details>
<summary>Solution</summary>

The angular diameter in radians: $\theta_s = 0.53^\circ \times \pi/180 \approx 9.25 \times 10^{-3}$ rad.

Using the van Cittert-Zernike theorem for a circular source:

$$l_c \approx \frac{1.22\lambda}{\theta_s} = \frac{1.22 \times 550 \times 10^{-9}}{9.25 \times 10^{-3}} \approx 7.3 \times 10^{-5}\ \text{m} \approx 73\ \mu\text{m}$$

This means sunlight is coherent over a distance of about $73\ \mu$m transverse to the propagation direction. Two pinholes spaced closer than this will produce visible interference fringes.

$\blacksquare$

</details>

## Common Mistakes

**Mistake 1: Assuming $g^{(2)}(0) = 2$ means thermal light has "twice the coherence"**
The second-order correlation function $g^{(2)}(0) = 2$ for thermal light reflects photon bunching -- photons from a chaotic source tend to arrive in pairs. This is an intensity correlation effect, not a measure of coherence in the traditional sense. Students sometimes interpret $g^{(2)}(0) > 1$ as enhanced coherence, when it actually indicates the opposite: the light is more chaotic.

**Mistake 2: Confusing the coherence time with the correlation time of the source**
The coherence time $\tau_c \approx 1/\Delta\nu$ characterises how long the field maintains a definite phase, while the source correlation time relates to the atomic emission process. For a laser, $\tau_c$ can be microseconds or longer despite atomic transitions occurring on nanosecond timescales. Students often assume these timescales must be comparable.

**Mistake 3: Assuming that spatial coherence requires a point source**
The van Cittert-Zernike theorem shows that even an extended incoherent source produces spatially coherent light over a finite area $A_c \approx \lambda^2/\Omega$. The coherence area increases as the source becomes more compact. Students sometimes think only lasers or point sources produce spatially coherent light, when in fact any source produces some degree of spatial coherence over sufficiently small transverse distances.

Coherence is the predictability of a wave's phase over time and space. A laser maintains phase relationships for microseconds, allowing interference over meters. A light bulb's atoms emit independently, so phases randomize in femtoseconds, limiting coherence to micrometers. The coherence length is the maximum path difference where interference fringes remain visible, like the distance over which two runners stay in step. Spatial coherence depends on source size: a point source is perfectly coherent across space, while an extended source like the sun has limited spatial coherence. The van Cittert-Zernike theorem connects source angular size to coherence area.

