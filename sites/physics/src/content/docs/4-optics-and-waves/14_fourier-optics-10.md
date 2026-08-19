---

date: 2026-07-23T21:57:32+01:00
title: Fourier Optics
tags:
  - Physics
  - University
description: "The Fraunhofer diffraction pattern of an aperture with transmittance function illuminated by a plane wave is proportional to the 2D Fourier transform of the"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "14_fourier Optics 10", "url": "https://physics.wyattau.com/4-optics-and-waves/14_fourier-optics-10"}]
}
</script>

### 10.1 Fraunhofer Diffraction as a Fourier Transform

The Fraunhofer diffraction pattern of an aperture with transmittance function $t(x, y)$ illuminated
by a plane wave is proportional to the 2D Fourier transform of the aperture function:

$$E(u, v) \propto \iint t(x,y)\, e^{-2\pi i(ux + vy)}\, dx\, dy = \mathcal{F}\{t(x,y)\}(u, v)$$

Where $u = \sin\theta_x/\lambda$ and $v = \sin\theta_y/\lambda$ are the spatial frequencies.

**Theorem 10.1.** The intensity in the Fraunhofer diffraction pattern is

$$I(u,v) = I_0\,|\tilde{t}(u,v)|^2$$

Where $\tilde{t}(u,v) = \mathcal{F}\{t(x,y)\}(u,v)$ is the Fourier transform of the aperture
function.

_Proof._ The Huygens-Fresnel principle in the far field gives:

$$E(x",y') = \frac{e^{ikr}}{i\lambda r}\iint t(x,y)\, e^{-ik(xx' + yy')/r}\, dx\, dy$$

In the far field, $r \approx D$ and the phase factor $e^{-ik(xx' + yy')/r}$ is exactly the kernel of
the Fourier transform. $\blacksquare$

### 10.2 Convolution Theorem for Diffraction

**Theorem 10.2 (Convolution theorem).** If an aperture function is the convolution
$t = t_1 * t_2$The diffraction pattern is the product of the individual diffraction patterns:

$$\mathcal{F}\{t_1 * t_2\} = \mathcal{F}\{t_1\} \cdot \mathcal{F}\{t_2\}$$

**Corollary.** If an aperture is the product $t = t_1 \cdot t_2$The diffraction pattern is the
convolution of the individual patterns:

$$\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$$

### 10.3 Worked Example: Diffraction Grating via Fourier Transform

**Problem.** Use the Fourier transform to derive the intensity pattern of a grating with $N$ slits
of width $a$ and spacing $d$.

<details>
<summary>Solution</summary>

The transmittance of a single slit centred at $x = 0$ is
$t_{\mathrm{slit}(x) = \mathrm{rect}(x/a)}$. The full grating is $N$ slits:

$$t(x) = \sum_{n=0}^{N-1} t_{\mathrm{slit}(x - nd) = t_{\mathrm{slit}(x) * \sum_{n=0}^{N-1} \delta(x - nd)}}$$

The Fourier transform is:

$$\tilde{t}(u) = \mathcal{F}\{t_{\mathrm{slit}\} \cdot \mathcal{F}\left\{\sum_{n=0}^{N-1}\delta(x - nd)\right\}}$$

$$= a\,\mathrm{sinc}(\pi a u) \cdot \sum_{n=0}^{N-1} e^{-2\pi i n d u} = a\,\mathrm{sinc}(\pi a u) \cdot \frac{\sin(N\pi d u)}{\sin(\pi d u)}$$

The intensity is:

$$I(u) = I_0\,a^2\,\mathrm{sinc}^2(\pi a u)\,\frac{\sin^2(N\pi d u)}{\sin^2(\pi d u)}$$

The first factor is the single-slit envelope; the second is the $N$-slit interference pattern.
Principal maxima occur at $du = m$ (integer $m$), giving the grating equation
$d\sin\theta = m\lambda$.

$\blacksquare$

</details>

### 10.4 Worked Example: Circular Aperture and the Airy Pattern

**Problem.** Compute the Fraunhofer diffraction pattern of a circular aperture of radius $a$.

<details>
<summary>Solution</summary>

The aperture function is $t(r) = 1$ for $r \leq a$ and $t(r) = 0$ for $r > a$. By circular symmetry,
the Fourier transform in polar coordinates is:

$$\tilde{t}(q) = 2\pi\int_0^a J_0(2\pi q r)\, r\, dr$$

Where $J_0$ is the Bessel function of the first kind and $q = \sin\theta/\lambda$ is the radial
spatial frequency. Using the identity:

$$\int_0^a J_0(2\pi q r)\, r\, dr = \frac{a}{2\pi q}J_1(2\pi q a)$$

$$\tilde{t}(q) = \pi a^2 \cdot \frac{2J_1(\alpha)}{\alpha}$$

Where $\alpha = 2\pi a q = 2\pi a\sin\theta/\lambda$. The intensity is:

$$I(\theta) = I_0\left(\frac{2J_1(\alpha)}{\alpha}\right)^2$$

This is the **Airy pattern**. The first zero occurs at $\alpha = 3.832$Giving the angular radius of
the first dark ring:

$$\sin\theta_1 = 1.22\,\frac{\lambda}{d}$$

Where $d = 2a$ is the diameter.

$\blacksquare$

</details>

### 10.5 Key Relationships

- **Rayleigh criterion:** Two point sources are just resolved when the centre of the Airy disc of one coincides with the first dark ring of the other, giving the minimum resolvable angle $\theta_{\min} = 1.22\lambda/d$.
- **Fourier scaling property:** If $t(x,y)$ is scaled by $a$, i.e., $t(x/a, y/a)$, then $\tilde{t}(u,v)$ scales as $|a|^2\tilde{t}(au, av)$. A larger aperture produces a narrower diffraction pattern.
- **Parseval's theorem:** $\iint |t(x,y)|^2\,dx\,dy = \iint |\tilde{t}(u,v)|^2\,du\,dv$. The total power in the aperture equals the total power in the diffraction pattern.
- **Uncertainty principle analogy:** A narrow aperture (small $\Delta x$) produces a wide diffraction pattern (large $\Delta u$), and vice versa. Quantitatively, $\Delta x \cdot \Delta u \gtrsim 1$.

### 10.6 Common Pitfalls

- **Confusing Fraunhofer with Fresnel diffraction:** Fraunhofer diffraction requires the far-field condition $D \gg a^2/\lambda$. At shorter distances, Fresnel (near-field) diffraction must be used, and the pattern is not a simple Fourier transform.
- **Forgetting the intensity is the squared modulus:** The diffraction pattern is $I(u,v) = I_0|\tilde{t}(u,v)|^2$, not $\tilde{t}(u,v)$. Phase information is lost in the intensity measurement.
- **Neglecting the obliquity factor:** The Huygens-Fresnel principle includes a directional cosine factor. For small angles this is approximately constant, but at large angles it modifies the pattern.
- **Assuming the Fourier transform of a real function is real:** Even if $t(x,y)$ is real and non-negative, $\tilde{t}(u,v)$ is generally complex. The phase of $\tilde{t}$ carries information about the spatial structure of the aperture.

### 10.7 Applications

- **Telescope resolution:** The Airy pattern sets the fundamental resolution limit of any circular-aperture optical system. The diameter of the primary mirror determines the smallest detail that can be resolved.
- **Spectrometre design:** A diffraction grating disperses light according to the grating equation $d\sin\theta = m\lambda$. The resolving power $R = mN$ depends on the order $m$ and the number of illuminated slits $N$.
- **Spatial filtering:** By placing masks in the Fourier plane (at the focal length of a lens), specific spatial frequencies can be blocked or attenuated. This enables edge enhancement, noise removal, and pattern recognition.
- **Holography:** A hologram records both the amplitude and phase of the diffracted field. Reconstruction involves illuminating the hologram, which acts as a complex transmittance function whose Fourier transform reproduces the original wavefront.

### 10.8 Worked Example: Double-Slit via Fourier Transform

**Problem.** Use the convolution theorem to derive the double-slit diffraction pattern.

The aperture is the product of a double-slit function $t_1(x) = \mathrm{rect}((x - d/2)/a) + \mathrm{rect}((x + d/2)/a)$ and a wide rectangular window. However, it is simpler to view the double slit as a single slit convolved with two delta functions:

$$t(x) = \mathrm{rect}(x/a) \cdot [\delta(x - d/2) + \delta(x + d/2)]$$

Wait, the double slit is a product (two slits cut from an opaque screen). The transmittance is:

$$t(x) = [\mathrm{rect}((x - d/2)/a) + \mathrm{rect}((x + d/2)/a)]$$

The Fourier transform is:

$$\tilde{t}(u) = a\,\mathrm{sinc}(\pi a u)\,e^{-i\pi d u} + a\,\mathrm{sinc}(\pi a u)\,e^{i\pi d u} = 2a\,\mathrm{sinc}(\pi a u)\cos(\pi d u)$$

The intensity is:

$$I(u) = 4I_0 a^2\,\mathrm{sinc}^2(\pi a u)\cos^2(\pi d u)$$

The $\cos^2$ factor produces the double-slit interference fringes with spacing $\Delta u = 1/d$, and the sinc$^2$ factor provides the single-slit envelope.

$\blacksquare$

### 10.9 Worked Example: Rectangular Aperture

**Problem.** Find the Fraunhofer diffraction pattern of a rectangular aperture of width $a$ and height $b$.

The aperture function is separable: $t(x,y) = \mathrm{rect}(x/a)\,\mathrm{rect}(y/b)$. By the separability of the 2D Fourier transform:

$$\tilde{t}(u,v) = \mathcal{F}\{\mathrm{rect}(x/a)\}(u) \cdot \mathcal{F}\{\mathrm{rect}(y/b)\}(v) = ab\,\mathrm{sinc}(\pi a u)\,\mathrm{sinc}(\pi b v)$$

The intensity is:

$$I(u,v) = I_0\,a^2 b^2\,\mathrm{sinc}^2(\pi a u)\,\mathrm{sinc}^2(\pi b v)$$

The pattern is a product of two sinc$^2$ functions. The first zero along $u$ occurs at $u = 1/a$ (angular position $\sin\theta_x = \lambda/a$), and along $v$ at $v = 1/b$ ($\sin\theta_y = \lambda/b$). A wider aperture produces a narrower diffraction pattern in that direction.

## Cross-References

- **[Diffraction](./4_diffraction.md)**: Provides the physical foundation for Fraunhofer diffraction through the Huygens-Fresnel principle and Kirchhoff integral.
- **[Fourier Optics](./7_fourier-optics.md)**: Develops the 4f imaging system, optical transfer function, and spatial filtering applications that build on the Fourier transform framework.
- **[Coherence](./15_coherence-theory.md)**: The coherence properties of the source determine whether the Fourier transform relationship between aperture and far-field pattern is valid.

## Intuition

Fourier optics reveals that diffraction is fundamentally a frequency decomposition. When light passes through an aperture, the far-field pattern is the spatial frequency content of that aperture shape. A narrow slit has broad frequency content, producing a wide diffraction pattern. The convolution theorem explains why grating patterns combine: multiplying apertures convolves their patterns. This is why a double-slit produces interference fringes modulated by the single-slit envelope. The lens performs a physical Fourier transform, converting spatial information into angular information at its focal plane.
