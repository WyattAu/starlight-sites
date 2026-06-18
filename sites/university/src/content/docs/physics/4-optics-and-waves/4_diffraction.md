---
title: Diffraction
tags:
  - Physics
  - University
description: ""$ (arcseconds). Can this telescope resolve
Them?

**Solution.** Angular resolution:
$\theta_{\min} = 1.22\lambda/D = 1.22(550 \times 10^{-9})/(0.150) = 4.47 \times 10^{-6}$ rad.

Convert to arcseconds: $4.47 \times 10^{-6} \times (180/\pi) \times 3600 = 0.923''$.

Since $0.50'' \lt 0.923''$The telescope cannot resolve these two stars — they would appear as a
Single blurred source.

</details>

### 4.8 Introduction to Fourier Optics

The Fraunhofer diffraction integral has a deep connection with Fourier analysis. For an aperture
With transmission function $t(x, y)$The far-field diffraction pattern is:

$$E(\theta_x, \theta_y) \propto \iint t(x,y)\, e^{-i(k_x x + k_y y)}\,dx\,dy$$

Where $k_x = k\sin\theta_x$ and $k_y = k\sin\theta_y$. This is precisely the **two-dimensional
Fourier transform** of $t(x,y)$Evaluated at spatial frequencies $k_x/(2\pi)$ and $k_y/(2\pi)$.

**Key consequences:**

1. A lens of focal length $f$Placed one focal length after the aperture, produces the Fourier
   transform at its back focal plane — it performs an **optical Fourier transform**.
2. Narrow features in the aperture (small $a$) produce broad diffraction patterns (large spread in
   $k$-space), and vice versa — the optical analogue of the uncertainty principle.
3. Spatial filtering: by placing masks in the Fourier plane, one can selectively remove or enhance
   spatial frequency components, modifying the image (the basis of optical image processing).

**Example.** A single slit of width $a$ has aperture function $t(x) = \mathrm{rect}(x/a)$. Its
Fourier Transform is $\mathrm{sinc}(\pi a \sin\theta/\lambda)$Directly giving the single-slit
diffraction Pattern. A periodic grating has sharp peaks in the Fourier transform (the diffraction
orders), each Corresponding to a spatial harmonic of the grating.

**Spatial filtering.** A powerful application of Fourier optics is the manipulation of images by
Modifying their spatial frequency content:

- **Low-pass filter:** A small aperture in the Fourier plane passes only the zeroth and low-order
  diffraction, removing fine detail (smoothing).
- **High-pass filter:** An opaque spot blocking the zeroth order removes the DC component, enhancing
  edges and fine structure (phase contrast microscopy).
- **Band-pass filter:** Selective removal of specific spatial frequencies (e.g., removing periodic
  noise from an image).

**Phase contrast microscopy** (Zernike, 1953) is a celebrated application. Biological specimens are
Mostly transparent (phase objects) and produce no intensity contrast in ordinary microscopy. By
Introducing a $\pi/2$ phase shift to the undiffracted (zeroth-order) light in the Fourier plane,
Phase variations are converted to intensity variations, making transparent structures visible.

<details>
<summary>Worked Example: Fourier analysis of a double slit</summary>

**Problem.** A double slit has width $a$ and centre-to-centre separation $d = 3a$. Use Fourier
optics To predict the diffraction pattern and identify the missing orders.

**Solution.** The aperture function is
$t(x) = \mathrm{rect}(x/a) * [\delta(x - 3a/2) + \delta(x + 3a/2)]$ I.e., the convolution of a
single-slit function with two delta functions.

By the convolution theorem, the Fourier transform is the product of a sinc function (single slit)
and $\cos(\pi d \sin\theta/\lambda)$ (two-point interference):

$E(\theta) \propto \mathrm{sinc}(\pi a\sin\theta/\lambda) \cdot \cos(\pi \cdot 3a \sin\theta/\lambda)$

The sinc envelope has zeros at $a\sin\theta = m\lambda$. The cosine fringes have maxima at
$3a\sin\theta = m\lambda$. Missing orders when $3a\sin\theta = 3\lambda$ coincides with
$a\sin\theta = \lambda$: the third order ($m = 3$) and all multiples of 3 are missing. This confirms
$d/a = 3$ as the ratio for missing orders.

</details>


:::
