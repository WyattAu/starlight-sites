---

date: 2026-07-23T21:57:32+01:00
title: Diffraction
tags:
  - Physics
  - University
description: "Every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is the Envelope of these wavelets, accounting for both"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "4_diffraction", "url": "https://physics.wyattau.com/4-optics-and-waves/4_diffraction"}]
}
</script>

### 4.1 Huygens-Fresnel Principle

Every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is
the Envelope of these wavelets, accounting for both amplitude and phase.

**Kirchhoff diffraction integral.** The field at point $P$ due to an aperture in a screen is:

$$E(P) = \frac{i}{\lambda}\iint_{\mathrm{aperture} E(Q)\,\frac{e^{-ikr}}{r}\cos\theta\,dS}$$

Where $E(Q)$ is the field at the aperture point $Q$, $r$ is the distance from $Q$ to $P$And $\theta$
Is the angle between the normal to the aperture and the direction to $P$. The obliquity factor
$\cos\theta$ ensures that wavelets do not propagate backwards. In the Fraunhofer limit
($r \to \infty$), This integral reduces to the Fourier transform of the aperture function (see
Sections 4.8 and 7.1).

### 4.2 Single-Slit Diffraction

A slit of width $a$ is illuminated by plane waves of wavelength $\lambda$.

**Intensity distribution (Fraunhofer diffraction):**

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2$$

Where $\alpha = \frac{\pi a \sin\theta}{\lambda}$.

**Derivation.** Divide the slit into infinitesimal elements of width $dy$ at position $y$. Each
Element contributes a wavelet. The field at angle $\theta$ on a distant screen:

$$E(\theta) = \int_{-a/2}^{a/2} E_0\, e^{iky\sin\theta}\,dy = E_0 \frac{\sin\left(\frac{ka\sin\theta}{2}\right)}{\frac{k\sin\theta}{2}} = E_0 a \frac{\sin\alpha}{\alpha}$$

Where $\alpha = ka\sin\theta/2 = \pi a\sin\theta/\lambda$. Since $I \propto |E|^2$:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2$$

$\blacksquare$

**Minima:** $\alpha = m\pi$I.e., $a\sin\theta = m\lambda$ for $m = \pm 1, \pm 2, \ldots$

**Central maximum:** at $\theta = 0$With width (first zero to first zero)
$\Delta\theta = 2\lambda/a$.

The secondary maxima occur approximately midway between consecutive minima. Their intensities are:
$I_1/I_0 \approx 0.045$ (first secondary), $I_2/I_0 \approx 0.016$ (second), decreasing rapidly.

<details>
<summary>Worked Example: Single-slit diffraction intensity</summary>

**Problem.** Light of wavelength $\lambda = 580$ nm passes through a slit of width $a = 0.10$ mm.
Find (a) the angular width of the central maximum, and (b) the intensity at $\theta = 0.50°$
Relative to the central maximum.

**Solution.**

(a) First minimum at
$\sin\theta_1 = \lambda/a = 580 \times 10^{-9}/(0.10 \times 10^{-3}) = 5.80 \times 10^{-3}$ So
$\theta_1 = 0.332°$. Angular width of central maximum: $2\theta_1 = 0.664°$.

(b) $\alpha = \pi a\sin\theta/\lambda = \pi(0.10 \times 10^{-3})\sin(0.50°)/(580 \times 10^{-9})$
$= \pi(0.10 \times 10^{-3})(8.73 \times 10^{-3})/(580 \times 10^{-9}) = \pi(1.505) = 4.73$.

$I/I_0 = (\sin\alpha/\alpha)^2 = (\sin 4.73/4.73)^2 = (-0.9998/4.73)^2 = (0.2114)^2 = 0.0447$.

The intensity is about 4.5% of the central maximum.

</details>

:::caution
$a\sin\theta = \lambda$ (not $\lambda/2$). The factor of 2 difference from the double-slit maximum
condition ($d\sin\theta = \lambda$) Reflects the fundamentally different geometry: in single-slit
diffraction, the minimum occurs when Wavelets from the edges cancel, requiring a path difference of
one full wavelength between them.

### 4.3 Double-Slit with Finite Width

Combining single-slit diffraction and double-slit interference:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \cos^2\beta$$

Where $\alpha = \pi a\sin\theta/\lambda$ (diffraction envelope) and
$\beta = \pi d\sin\theta/\lambda$ (interference fringes).

The interference fringes are modulated by the diffraction envelope. **Missing orders** occur when
$\beta = m\pi$ coincides with $\alpha = n\pi$I.e., when $d/a$ is a ratio of integers.

<details>
<summary>Worked Example: Missing orders in a double-slit pattern</summary>

**Problem.** A double slit has slit width $a = 0.040$ mm and slit separation $d = 0.20$ mm,
illuminated By light of wavelength $\lambda = 550$ nm. (a) Which interference orders are missing?
(b) How many Bright fringes appear within the central diffraction envelope?

**Solution.**

(a) Missing orders occur when $d/a$ is an integer: $d/a = 0.20/0.04 = 5$. The interference orders
$m = \pm 5, \pm 10, \ldots$ coincide with diffraction minima and are missing.

(b) The central diffraction envelope extends from $\theta = -\lambda/a$ to $\theta = +\lambda/a$.
The highest visible order satisfies $d\sin\theta \lt d(\lambda/a) = (d/a)\lambda = 5\lambda$ I.e.,
$m \lt 5$. So orders $m = 0, \pm 1, \pm 2, \pm 3, \pm 4$ are visible: 9 bright fringes Within the
central envelope.

</details>

### 4.4 Diffraction Gratings

A grating with $N$ slits, each of width $a$Separated by distance $d$:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \left(\frac{\sin N\beta}{\sin\beta}\right)^2$$

**Principal maxima:** $d\sin\theta = m\lambda$ ($m = 0, \pm 1, \pm 2, \ldots$).

The angular width of a principal maximum is $\Delta\theta = \lambda/(Nd\cos\theta)$. The **resolving
power** of a grating is:

$$R = \frac{\lambda}{\Delta\lambda} = mN$$

Where $N$ is the total number of illuminated slits.

<details>
<summary>Worked Example: Grating resolving power</summary>

**Problem.** A diffraction grating has 5000 lines/cm and is 5.0 cm wide. Find the resolving power In
the first order and the minimum resolvable wavelength difference at $\lambda = 600$ nm.

**Solution.** Total number of slits: $N = 5000 \times 5.0 = 25000$. Slit spacing: $d = 1/5000$ cm
$= 2.00 \times 10^{-6}$ m $= 2.00$ $\mu$M.

Resolving power: $R = mN = 1 \times 25000 = 25000$.

Minimum resolvable wavelength difference: $\delta\lambda = \lambda/R = 600/25000 = 0.024$ nm.

</details>

### 4.5 The Rayleigh Criterion

Two point sources are just resolvable when the central maximum of one coincides with the first
minimum Of the other:

$$\theta_{\mathrm{min} = 1.22\frac{\lambda}{D}}$$

Where $D$ is the aperture diameter (for a circular aperture).

### 4.6 Fresnel vs. Fraunhofer Diffraction

**Fraunhofer (far-field):** Source and screen are at infinity (or at the focal plane of a lens).
Requires $a^2/\lambda \ll L$ (Fresnel number $N_F \ll 1$).

**Fresnel (near-field):** Source and/or screen are at finite distances. The Fresnel number
$N_F = a^2/(\lambda L)$ characterises the regime. Fresnel diffraction uses Fresnel integrals and
Produces patterns that depend on the distance.

### 4.7 Circular Aperture and the Airy Disk

For a circular aperture of diameter $D$The Fraunhofer diffraction pattern is an **Airy pattern**:

$$I(\theta) = I_0 \left[\frac{2J_1(\beta)}{\beta}\right]^2$$

Where $\beta = \pi D \sin\theta / \lambda$ and $J_1$ is the first-order Bessel function of the first
Kind.

**Derivation.** The field in the Fraunhofer limit is the Fourier transform of the circular aperture
Function $t(r) = 1$ for $r \leq D/2$ and $0$ otherwise. In polar coordinates:

$$E(\theta) \propto \int_0^{D/2} J_0(kr\sin\theta)\, r\,dr = \frac{D}{2}\frac{J_1(\beta)}{\beta}$$

Where we used the identity $\int_0^a J_0(\rho r)\,r\,dr = aJ_1(\rho a)/\rho$. Since
$I \propto |E|^2$ The result follows. $\blacksquare$

The first zero of $J_1(\beta)$ is at $\beta = 1.22\pi$Giving:

$$\sin\theta_1 = 1.22\frac{\lambda}{D}$$

The bright central disk (the **Airy disk**) subtends an angle:

$$\theta_{\mathrm{Airy} = 1.22\frac{\lambda}{D}}$$

This is the basis of the **Rayleigh criterion** for resolving power of circular apertures
(telescopes, Microscopes, the eye). Approximately 84% of the total transmitted power falls within
the Airy disk.

<details>
<summary>Worked Example: Telescope resolving power</summary>

**Problem.** A telescope has a primary mirror of diameter $D = 150$ mm. Find its angular resolution
At $\lambda = 550$ nm. Two stars are separated by $0.50"'$ (arcseconds). Can this telescope resolve
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

## Intuition

Diffraction arises because every point on a wavefront acts as a new source of spherical wavelets. When light passes through a slit, these wavelets interfere, creating bright and dark regions. A narrower slit relative to the wavelength produces a wider spread, because the wavelets have more opportunity to spread sideways. The Fourier transform of the aperture function gives the far-field pattern directly, linking the shape of the opening to the light distribution. A circular aperture produces the Airy disk pattern, setting the fundamental resolution limit of telescopes. The deeper message is that confinement in one direction produces spreading in another.

## Cross-References

- **[Fourier Optics](./7_fourier-optics.md)**: Formalises the Fourier transform relationship between aperture functions and far-field diffraction patterns introduced in the Fraunhofer limit.
- **[Coherence](./8_coherence.md)**: The visibility and formation of diffraction fringes depend on the temporal and spatial coherence of the source.
- **[Fresnel Equations](./10_fresnel-equations.md)**: Determines the amplitude and phase of reflected and transmitted waves at boundaries, affecting diffraction from layered structures.

## Common Mistakes

**Mistake 1: Using the double-slit maximum condition for single-slit minima**
Single-slit diffraction minima occur at $a\sin\theta = m\lambda$, while double-slit interference maxima occur at $d\sin\theta = m\lambda$. Students frequently confuse these conditions, especially when both effects are present simultaneously. The factor of 2 difference arises because single-slit minima require edge-to-edge path difference of one wavelength, while double-slit maxima require constructive interference from two sources.

**Mistake 2: Assuming all diffraction maxima have equal intensity**
The central maximum in single-slit diffraction contains approximately 84% of the total power. Secondary maxima have rapidly decreasing intensities: $I_1 \approx 4.5\%$, $I_2 \approx 1.6\%$. Students often treat all bright fringes as having equal brightness, which leads to incorrect predictions about what will be visible in a diffraction pattern.

**Mistake 3: Confusing the resolving power formula with the resolution criterion**
The Rayleigh criterion gives $\theta_{\min} = 1.22\lambda/D$ for circular apertures (the factor 1.22 comes from the first zero of $J_1$), while the grating resolving power is $R = mN$. Students sometimes apply the Rayleigh criterion formula to diffraction gratings or vice versa, mixing up angular resolution with spectral resolution.

Diffraction is the bending of waves around obstacles and through openings, arising because a wavefront passing through a slit becomes a source of secondary wavelets in every direction. The narrower the slit relative to the wavelength, the more the wave spreads out. Double-slit diffraction combines two effects: the interference pattern from two point sources, modulated by the single-slit diffraction envelope. Missing orders appear when the interference maximum coincides with a diffraction minimum, effectively canceling that bright fringe. The Fourier transform of the aperture function gives the far-field pattern directly, linking the shape of the opening to the shape of the light distribution.
:::
