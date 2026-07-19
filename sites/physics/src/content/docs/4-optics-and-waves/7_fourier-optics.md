---
title: Fourier Optics
tags:
  - Physics
  - University
description: 'In the Fraunhofer limit, the diffraction pattern is the of the aperture function Comprehensive educational content coverage with definitions and practice problems.'
---

### 7.1 Fraunhofer Diffraction as a Fourier Transform

In the Fraunhofer limit, the diffraction pattern is the **Fourier transform** of the aperture
function:

$$E(\theta_x, \theta_y) \propto \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} t(x,y)\, e^{-i(k_x x + k_y y)}\,dx\,dy$$

Where $t(x, y)$ is the transmission function of the aperture, and $k_x = k\sin\theta_x$
$k_y = k\sin\theta_y$.

A lens placed one focal length after the aperture produces the Fraunhofer pattern at its back focal
plane, performing an optical Fourier transform.

### 7.2 The Convolution Theorem

If the aperture is a product $t(x, y) = t_1(x, y) \cdot t_2(x, y)$ the diffraction pattern is the
convolution of their individual transforms:

$$\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$$

Where $*$ denotes convolution. This explains, for example, why the double-slit pattern with finite
slit width is the product of a sinc function (single slit) and a cosine-squared (double slit).

### 7.3 The Abbe Theory of Imaging

Abbe showed that a lens images by collecting the diffracted orders and recombining them. The
resolution limit arises because high spatial frequencies (large diffraction angles) are lost if they
fall outside the lens aperture.

The **minimum resolvable spatial frequency** is:

$$f_{\mathrm{max}} = \frac{2\mathrm{NA}}{\lambda}$$

Where $\mathrm{NA} = n\sin\theta_{\mathrm{max}}$ is the numerical aperture.

### 7.4 The Optical Transfer Function

The **optical transfer function (OTF)** characterizes how an imaging system transmits spatial
frequencies. It is the Fourier transform of the point spread function (PSF):

$$H(f_x, f_y) = \mathcal{F}\{h(x, y)\}$$

The **modulation transfer function (MTF)** is the magnitude $|H(f_x, f_y)|$. For a diffraction-limited
system with a circular aperture, the MTF is:

$$\mathrm{MTF}(f) = \frac{2}{\pi}\left[\arccos\left(\frac{f}{f_c}\right) - \frac{f}{f_c}\sqrt{1 - \left(\frac{f}{f_c}\right)^2}\right]$$

for $f \leq f_c$, where $f_c = 2\mathrm{NA}/\lambda$ is the cutoff frequency.

### 7.5 The 4f Imaging System

The **4f system** is a standard optical setup for spatial filtering, consisting of two identical
lenses separated by twice their focal length $f$:

1. Input plane (front focal plane of first lens)
2. Fourier plane (common focal plane between lenses, where a spatial filter is placed)
3. Output plane (back focal plane of second lens)

If $U_{\mathrm{in}}(x, y)$ is the input field and $F(u, v)$ is the filter at the Fourier plane, the
output field is:

$$U_{\mathrm{out}}(x, y) = \mathcal{F}^{-1}\{F(u, v) \cdot \mathcal{F}\{U_{\mathrm{in}}\}\}$$

This is a convolution: $U_{\mathrm{out}} = U_{\mathrm{in}} * \mathcal{F}^{-1}\{F\}$.

### 7.6 Spatial Filtering

Spatial filtering modifies the Fourier spectrum of an image:

**Low-pass filter.** Block high spatial frequencies to remove noise or sharp edges. A circular
aperture of radius $a$ at the Fourier plane passes only frequencies $f < a/(\lambda f)$.

**High-pass filter.** Block low spatial frequencies to enhance edges. A small opaque stop at the
center of the Fourier plane removes the DC component.

**Band-pass filter.** Select a specific range of spatial frequencies to reveal periodic structures
or specific texture scales.

**Example 7.1 (Removing raster lines).** A printed image has periodic raster lines at frequency
$f_0$. A low-pass filter with cutoff $f_c < f_0$ removes the raster while preserving the image
content.

### 7.7 Phase Contrast Microscopy

Phase contrast microscopy converts phase variations in a transparent specimen into intensity
variations, making otherwise invisible structures visible.

**Zernike phase contrast** works by shifting the phase of the undiffracted (zero-order) light by
$\pi/2$ relative to the diffracted light. This is achieved with a phase ring at the Fourier plane
that alters the phase of the central spot.

If the input field is $U_{\mathrm{in}}(x) = e^{i\phi(x)} \approx 1 + i\phi(x)$ (for small phase
$\phi$), the Fourier plane has a DC term $\delta(u)$ and diffracted terms $\mathcal{F}\{\phi\}$.
The phase ring multiplies the DC term by $e^{i\pi/2}$, giving:

$$U_{\mathrm{out}}(x) \approx i + i\phi(x) \quad \Rightarrow \quad I(x) \approx 1 + 2\phi(x)$$

The intensity is linearly proportional to the phase, revealing transparent structures.

### 7.8 Holography

**Holography** records both amplitude and phase of a wavefront by interfering it with a reference
beam. The hologram is the intensity pattern:

$$I(x, y) = |U_{\mathrm{obj}} + U_{\mathrm{ref}}|^2 = |U_{\mathrm{obj}}|^2 + |U_{\mathrm{ref}}|^2 + U_{\mathrm{obj}}^* U_{\mathrm{ref}} + U_{\mathrm{obj}} U_{\mathrm{ref}}^*$$

When illuminated by the reference beam, the third term reconstructs the original object wavefront,
creating a three-dimensional image. The fourth term produces a conjugate image.

**Example 7.2 (Gabor holography).** In in-line holography, the object and reference beams share the
same axis. This requires a small, sparse object so the twin images separate.

### 7.9 Applications of Fourier Optics

**Application 1: Image Deconvolution.** If the PSF $h(x, y)$ is known, the original image can be
recovered by inverse filtering:

$$U_{\mathrm{in}} = \mathcal{F}^{-1}\{\mathcal{F}\{U_{\mathrm{out}}\} / H(f_x, f_y)\}$$

Wiener filtering adds a regularization term to handle noise.

**Application 2: Matched Filtering.** To detect a known pattern $g(x, y)$ in an image, use a filter
$F(u, v) = \mathcal{F}\{g\}^*$ at the Fourier plane. The output shows correlation peaks at
locations where the pattern appears.

**Application 3: Optical Pattern Recognition.** VanderLugt filters store complex filter functions
holographically for real-time pattern recognition.

### 7.10 Worked Examples

**Problem 1.** Find the Fraunhofer pattern of a sinusoidal amplitude grating:
$t(x) = (1 + m\cos(2\pi f_0 x))/2$.

*Solution.* The Fourier transform of $t(x)$ is:

$$\mathcal{F}\{t\}(u) = \frac{1}{2}\delta(u) + \frac{m}{4}\delta(u - f_0) + \frac{m}{4}\delta(u + f_0)$$

The diffraction pattern consists of a central order at $u = 0$ and two side orders at $u = \pm f_0$,
with intensity ratio $I_{\pm}/I_0 = m^2/4$. $\blacksquare$

**Problem 2.** In a 4f system with $f = 20$ cm and $\lambda = 500$ nm, what filter radius $a$ is
needed to pass spatial frequencies up to 50 cycles/mm?

*Solution.* Frequency $f_x = u/(\lambda f)$, so $u = f_x \lambda f = 50 \times 10^3 \times 500 \times
10^{-9} \times 0.2 = 5$ mm. A circular aperture of radius $a = 5$ mm passes all frequencies
$f_x \leq 50$ cycles/mm. $\blacksquare$

## Common Mistakes

**Mistake 1: Confusing the convolution theorem for products and convolutions**
If the aperture function is a product $t = t_1 \cdot t_2$, the diffraction pattern is the *convolution* of their Fourier transforms: $\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$. Students often apply the theorem backwards, assuming that a product in real space gives a product in Fourier space. The correct statement is that convolution in real space corresponds to multiplication in Fourier space.

**Mistake 2: Assuming a lens performs an exact Fourier transform without considering the paraxial approximation**
A thin lens adds a quadratic phase factor $\exp(-ik(x^2+y^2)/(2f))$. The Fourier transform relationship at the back focal plane holds only in the paraxial approximation (small angles). For high-NA lenses or large off-axis distances, aberrations and non-paraxial effects distort the transform. Students sometimes assume the Fourier relationship is exact for all configurations.

## Cross-References

- **[Diffraction](./4_diffraction.md)**: Establishes the Huygens-Fresnel principle and Fraunhofer diffraction integral that the Fourier transform relationship formalises.
- **[Coherence](./8_coherence.md)**: The spatial and temporal coherence of the source determines whether the Fourier transform relationship between aperture and far-field pattern holds.
- **[Fourier Optics](./14_fourier-optics-10.md)**: Provides the mathematical framework for diffraction as Fourier decomposition, including the convolution theorem and Airy pattern.

**Mistake 3: Forgetting that the 4f system inverts the image**
The second lens in a 4f system performs another Fourier transform, which introduces a coordinate inversion: $U_{\text{out}}(x,y) \propto U_{\text{in}}(-x,-y)$ when no filter is present. Students sometimes forget this inversion when designing spatial filtering experiments, leading to unexpectedly mirrored output images.

Fourier optics treats lenses as analog computers that perform Fourier transforms at the speed of light. A lens converts spatial patterns into their frequency components at its focal plane. The convolution theorem explains why complex apertures produce predictable patterns: multiplying apertures convolves their spectra. This is why a grating produces discrete spots while a single slit produces a continuous spread. The optical transfer function describes how well an imaging system preserves different spatial frequencies, like an equalizer for images.
