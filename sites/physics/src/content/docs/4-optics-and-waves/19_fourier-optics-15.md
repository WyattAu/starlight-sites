---

title: Fourier Optics
tags:
  - Physics
  - University
description: "Fourier optics and diffraction theory."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "19_fourier Optics 15", "url": "https://physics.wyattau.com/4-optics-and-waves/19_fourier-optics-15"}]
}
</script>

### 15.1 Fraunhofer Diffraction as a Fourier Transform

In the Fraunhofer (far-field) limit, the diffraction pattern of an aperture with transmission
function $t(x, y)$ is the Fourier transform:

$$U(x", y") = \frac{e^{ikz}}{i\lambda z}\,e^{ik(x'^2 + y'^2)/(2z)}\iint t(x, y)\,e^{-ik(xx' + yy')/z}\,dx\,dy$$

Where $(x', y')$ are coordinates in the observation plane at distance $z$ from the aperture.

Defining spatial frequencies $f_x = x'/(\lambda z)$, $f_y = y'/(\lambda z)$:

$$U(f_x, f_y) \propto \mathcal{F}\{t(x,y)\}(f_x, f_y)$$

This correspondence between diffraction and Fourier transforms is the foundation of Fourier optics
and has profound implications for image processing and optical information processing.

### 15.2 The Abbe Theory of the Microscope

Ernst Abbe (1873) showed that a microscope forms an image by taking two Fourier transforms: the
objective lens performs the first Fourier transform (creating the diffraction pattern at its back
focal plane), and the eyepiece (or tube lens) performs the inverse transform.

**Resolution limit:** The finest spatial frequency that can pass through the objective is:

$$f_{\max} = \frac{\text{NA}{\lambda}}$$

Where $\text{NA} = n\sin\theta$ is the numerical aperture. The minimum resolvable distance (Abbe
limit):

$$d_{\min} = \frac{\lambda}{2\,\text{NA}}$$

For green light ($\lambda = 550$ nm) and NA = 1.4 (oil immersion): $d_{\min} \approx 196$ nm.

### 15.3 Spatial Filtering

Since the back focal plane of a lens contains the spatial frequency spectrum of the input, placing a
mask (spatial filter) in this plane modifies the image:

- **Low-pass filter:** Blocks high spatial frequencies $\to$ smooths the image, removes fine detail
- **High-pass filter:** Blocks low frequencies $\to$ enhances edges, removes uniform background
- **Phase contrast microscopy:** (Zernike, 1942) Adds a $\pi/2$ phase shift to the undiffracted (DC)
  component, converting phase variations into intensity variations. This makes transparent
  biological specimens visible without staining.

### 15.4 Key Relationships

| Optical concept        | Fourier correspondence                    | Application              |
| ---------------------- | ----------------------------------------- | ------------------------ |
| Aperture function      | Input signal $t(x,y)$                    | Diffraction pattern      |
| Fraunhofer pattern     | Fourier transform $\mathcal{F}\{t\}$      | Far-field imaging        |
| Lens back focal plane  | Fourier plane                             | Spatial filtering        |
| Image plane            | Inverse Fourier transform                 | 4f imaging system        |
| Optical transfer func  | Normalised FT of PSF                      | Resolution characterisation |

### 15.5 Common Pitfalls

- **Confusing Fraunhofer and Fresnel diffraction.** Fraunhofer diffraction applies in the far field
  ($z \gg a^2/\lambda$ where $a$ is the aperture size). Fresnel diffraction (near field) uses a
  quadratic phase factor and is not a Fourier transform.
- **Forgetting the quadratic phase factor in the Fresnel regime.** The Fraunhofer integral
  approximation drops the quadratic phase term, but it is present in the full Fresnel diffraction
  integral.
- **Assuming the Abbe limit is the only resolution limit.** The Abbe limit assumes coherent
  illumination; the Rayleigh criterion (for resolved point sources) gives $d = 0.61\lambda/\text{NA}$,
  slightly different.
- **Thinking spatial filtering only removes noise.** Spatial filtering can also introduce artifacts
  (ringing from hard-edged low-pass filters, edge enhancement exaggeration from high-pass filters).

### 15.6 Worked Examples

**Problem 1.** A 4f imaging system has a lens with focal length $f = 50$ cm and aperture diameter
$D = 2$ cm. The input is illuminated with $\lambda = 633$ nm. What is the cutoff spatial frequency?

**Solution.** The cutoff frequency is determined by the lens aperture acting as a low-pass filter.
The maximum spatial frequency that passes through the system is $f_{\max} = D/(2\lambda f)$:
$f_{\max} = 0.02/(2 \times 633\times 10^{-9} \times 0.5) = 31,600$ cycles/m. Finer details in the
input are blocked, giving a minimum feature size of $1/f_{\max} \approx 31.6\ \mu$m. $\blacksquare$

**Problem 2.** Derive the point spread function (PSF) of a circular aperture of diameter $D$.

**Solution.** The amplitude PSF is the Fourier transform of the aperture function (a circle of
diameter $D$). This gives the Airy pattern:
$I(r) = I_0[2J_1(kDr/(2f))/(kDr/(2f))]^2$, where $J_1$ is the Bessel function of the first kind.
The first zero occurs at $r = 1.22\lambda f/D$, which is the Rayleigh criterion. $\blacksquare$

### 15.7 Applications

- **Microscopy:** Structured illumination microscopy (SIM) uses patterned illumination to encode
  high-frequency information, doubling resolution beyond the Abbe limit. Stimulated emission
  depletion (STED) microscopy breaks the diffraction barrier entirely.
- **Holography:** Digital holography records the full complex field (amplitude and phase) using
  Fourier optics principles, enabling numerical refocusing and 3D imaging.
- **Astronomy:** Adaptive optics corrects wavefront distortions in real time using Fourier optics
  concepts. Aperture synthesis in radio astronomy reconstructs images from sparse Fourier samples.
- **Optical computing:** 4f correlators perform convolution operations optically at the speed of
  light, used in pattern recognition and optical neural networks.

<details>
<summary>Worked Example 15.1: Diffraction from a Grating</summary>

A diffraction grating with $N$ slits of width $a$ and spacing $d$ has transmission function:

$$t(x) = \sum_{n=0}^{N-1}\text{rect}\!\left(\frac{x - nd}{a}\right)$$

The Fraunhofer pattern is:

$$I(\theta) = I_0\left(\frac{\sin\alpha}{\alpha}\right)^2\left(\frac{\sin N\beta}{\sin\beta}\right)^2$$

Where $\alpha = \pi a\sin\theta/\lambda$ (single-slit envelope) and
$\beta = \pi d\sin\theta/\lambda$ (multi-slit interference).

For $N = 5$, $d = 3a$:

- Principal maxima at $\beta = m\pi$: $\sin\theta = m\lambda/d$
- Between principal maxima: $N - 2 = 3$ secondary maxima
- Width of principal maximum: $\Delta\theta = \lambda/(Nd\cos\theta)$
- Missing orders: when $m$ is a multiple of $d/a = 3$ (i.e., 3rd, 6th, ... Orders are suppressed by
  the single-slit zero)

The resolving power: $R = mN = m \times 5$.

</details>

## Intuition

Fourier optics reveals that every lens is a frequency analyser. When light passes through an aperture, the far-field pattern is the spatial Fourier transform of the aperture shape. A lens placed at the focal plane physically computes this transform, placing each spatial frequency at a specific point. This means spatial filtering is directly blocking or attenuating frequency components at the Fourier plane. The Abbe theory shows that resolution is fundamentally limited by how many diffraction orders the lens can collect, establishing that optical systems are bandpass filters for spatial information.

## Cross-References

- [Coherence Theory](/physics/4-optics-and-waves/20_coherence-theory-16) -- Spatial coherence determines the visibility of diffraction patterns; the van Cittert-Zernike theorem connects source size to coherence width.
- [Lasers](/physics/4-optics-and-waves/9_lasers) -- Gaussian beam propagation and spatial filtering of laser beams are direct applications of Fourier optics principles.
- [Electromagnetic Waves](/physics/3-electromagnetism/5_electromagnetic-waves) -- The wave equation and diffraction theory provide the physical foundation for the Fourier transform interpretation of lens systems.

- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
