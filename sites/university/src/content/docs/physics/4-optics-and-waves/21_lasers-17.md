---
title: Lasers
tags:
  - Physics
  - University
description: ""clean up" laser beams.

5. **Polarisation and Brewster"s angle:** At Brewster’s angle, the _reflected_ beam is purely
   $s$-polarised, not the transmitted beam. The transmitted beam has reduced $s$-component and
   becomes partially $p$-polarised. Complete polarisation of the transmitted beam requires many
   interfaces (pile-of-plates polariser).

## Problems (Additional)

<details>
<summary>Problem 19: Resolution of a Telescope</summary>

The Hubble Space Telescope has a primary mirror diameter of 2.4 m and operates at $\lambda = 550$
nm.

(a) Calculate the angular resolution (Rayleigh criterion).

(b) What is the minimum distance on the Moon's surface ($d = 384\,400$ km) that can be resolved?

(c) How does atmospheric seeing ($\sim 0.5$ arcsec) compare with the diffraction limit?

**Solution:**

(a) $\theta_{\min} = 1.22\lambda/D = 1.22 \times 550 \times 10^{-9}/2.4 = 2.80 \times 10^{-7}$ rad
$= 0.058$ arcsec.

(b) $s = \theta_{\min} \times d = 2.80 \times 10^{-7} \times 3.844 \times 10^8 = 107.6$ m
$\approx 108$ m.

(c) Atmospheric seeing $\sim 0.5$ arcsec is about 8.6 times worse than Hubble's diffraction limit.
This is why Hubble was placed in space --- ground-based telescopes are limited by seeing, not
diffraction, unless adaptive optics is used.

</details>

<details>
<summary>Problem 20: Fabry--Perot Etalon</summary>

A Fabry--Perot etalon consists of two parallel reflecting surfaces with reflectance $R = 0.8$ and
separation $d = 1$ mm, used at normal incidence with $\lambda = 500$ nm.

(a) Calculate the free spectral range (FSR) in frequency and wavelength.

(b) Calculate the finesse $\mathcal{F}$.

(c) What is the minimum resolvable wavelength difference?

**Solution:**

(a) FSR in frequency:
$\Delta\nu_{\text{FSR} = c/(2d) = 3 \times 10^8/(2 \times 10^{-3}) = 1.5 \times 10^{11}}$ Hz $= 150$
GHz.

FSR in wavelength:
$\Delta\lambda_{\text{FSR} = \lambda^2/(2d) = (500 \times 10^{-9})^2/(2 \times 10^{-3}) = 1.25 \times 10^{-13}}$
m $= 0.125$ nm.

(b) Finesse:
$\mathcal{F} = \pi\sqrt{R}/(1 - R) = \pi\sqrt{0.8}/(1 - 0.8) = \pi \times 0.894/0.2 = 14.1$.

(c) Minimum resolvable wavelength difference (resolution):

$$\delta\lambda = \frac{\Delta\lambda_{\text{FSR}}{\mathcal{F}} = \frac{0.125}{14.1}\ \text{nm} = 0.0089\ \text{nm} = 8.9\ \text{pm}}$$

This corresponds to a resolving power
$\mathcal{R} = \lambda/\delta\lambda = 500/0.0089 \approx 56\,000$.

</details>

