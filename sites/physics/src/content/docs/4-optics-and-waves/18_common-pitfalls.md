---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "18_common Pitfalls", "url": "https://physics.wyattau.com/4-optics-and-waves/18_common-pitfalls"}]
}
</script>
title: Common Pitfalls
tags:
  - Physics
  - University
description: "- Fraunhofer (far-field) patterns are Fourier transforms; Fresnel (near-field) patterns involve Fresnel integrals. The transition occurs at"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "18_common Pitfalls", "url": "https://physics.wyattau.com/4-optics-and-waves/18_common-pitfalls"}]
}
</script>

- **Confusing Fraunhofer and Fresnel diffraction.** Fraunhofer (far-field) patterns are Fourier
  transforms; Fresnel (near-field) patterns involve Fresnel integrals. The transition occurs at
  $R \sim a^2/\lambda$.

- **Ignoring the phase in interference calculations.** Phase differences determine constructive and
  destructive interference. Always track the optical path length carefully.

- **Misidentifying Brewster"s angle.** Brewster's angle is for the _reflected_ beam, not the
  transmitted beam. At Brewster's angle, the reflected light is purely $s$-polarised.

- **Neglecting the difference between intensity and amplitude.** Interference patterns depend on
  amplitudes (add with phases), while intensities add without phases for incoherent sources. The
  visibility of fringes is determined by the coherence of the source.

- **Forgetting that the Airy pattern involves $J_1$Not $J_0$.** The first zero of $J_1(x)$ is at
  $x = 3.832$Not at $x = 2.405$ (which is the first zero of $J_0$).

- **Confusing phase velocity and group velocity.** Phase velocity is $v_p = \omega/k$ while group
  velocity is $v_g = d\omega/dk$. In a dispersive medium these differ. Information and energy
  travel at the group velocity, not the phase velocity.

- **Misapplying the paraxial approximation.** The paraxial approximation $\sin\theta \approx
  \theta$ is valid only for rays making small angles with the optical axis. For wide-angle
  systems (e.g., fisheye lenses), this approximation introduces significant aberrations.

- **Forgetting the $\pi$ phase shift upon reflection.** When light reflects from a boundary
  with a higher refractive index ($n_2 > n_1$), the reflected wave experiences a $\pi$ phase
  shift. Reflection from a lower index has no such shift. This is critical in thin-film
  interference calculations.

- **Confusing coherence length and coherence time.** Coherence length $L_c = c\tau_c$ is the
  distance over which the wave maintains a fixed phase relationship. Coherence time $\tau_c$ is
  the corresponding time. A laser has long coherence length; sunlight has short coherence length.

- **Mistaking the Rayleigh criterion.** The Rayleigh criterion for resolution states that two
  point sources are resolved when the central maximum of one falls on the first minimum of the
  other: $\theta_{\mathrm{min}} = 1.22\lambda/D$. This is for circular apertures, not slits.
  For a slit, the criterion is $\theta_{\mathrm{min}} = \lambda/a$.

- **Neglecting polarisation in reflection and transmission.** The Fresnel equations for
  $s$-polarised and $p$-polarised light give different reflection coefficients. At the
  Brewster angle, $R_p = 0$ while $R_s \neq 0$. Using the wrong polarisation in calculations
  leads to incorrect power budgets.

- **Assuming all sources are coherent.** Most natural sources (thermal, LED) are incoherent or
  partially coherent. Interference fringes require coherence. The visibility of fringes is
  $V = (I_{\mathrm{max}} - I_{\mathrm{min}})/(I_{\mathrm{max}} + I_{\mathrm{min}})$, which
  depends on the degree of coherence.

- **Forgetting boundary conditions for electromagnetic fields.** At an interface between
  two dielectrics, the tangential components of $\mathbf{E}$ and $\mathbf{H}$ are continuous,
  while the normal components of $\mathbf{D}$ and $\mathbf{B}$ are continuous. These conditions
  determine the reflection and transmission coefficients.

- **Confusing irradiance and radiant intensity.** Irradiance $I$ is power per unit area
  ($\mathrm{W/m^2}$). Radiant intensity is power per unit solid angle ($\mathrm{W/sr}$).
  Confusing these leads to incorrect application of the inverse square law.

- **Misapplying the thin lens equation for thick lenses.** The thin lens equation
  $1/f = 1/s_o + 1/s_i$ assumes the lens thickness is negligible. For thick lenses, the
  principal planes shift, and distances must be measured from these planes, not from the
  lens centre.

- **Overlooking chromatic aberration.** The refractive index of glass varies with wavelength
  (dispersion). A simple lens cannot focus all colours to the same point. Achromatic doublets
  use two glass types to cancel chromatic aberration at two wavelengths.

- **Confusing the Malus law and the law of reflection.** Malus law $I = I_0 \cos^2\theta$
  describes intensity after a polariser as a function of the angle between the polariser axis
  and the polarisation direction. It does not describe specular reflection.

- **Assuming dispersion is always normal.** Normal dispersion has $dn/d\lambda < 0$ (index
  decreases with wavelength). Anomalous dispersion ($dn/d\lambda > 0$) occurs near absorption
  bands and is responsible for the rapid variation of refractive index in resonance regions.

- **Forgetting that diffraction limits all optical systems.** Even a perfect lens (no
  aberrations) is limited by diffraction. The smallest resolvable feature is approximately
  $\lambda/(2\cdot\mathrm{NA})$. This is the diffraction-limited spot size.

- **Neglecting the Gouy phase shift.** A focused beam acquires an additional phase shift of
  $\pi$ when passing through a focus (the Gouy phase). This affects the resonance condition
  in optical cavities and the phase matching in nonlinear optics.

- **Confusing object and image space NA.** The numerical aperture on the object side is
  $\mathrm{NA}_{\mathrm{obj}} = n \sin\theta_{\mathrm{obj}}$; on the image side it is
  $\mathrm{NA}_{\mathrm{img}} = n' \sin\theta_{\mathrm{img}}$. For a well-corrected system,
  the Lagrange invariant $y \cdot \mathrm{NA}$ is conserved.

- **Misunderstanding the etendue.** Etendue (optical throughput) is the product of area and
  solid angle and is conserved in an ideal optical system. This limits how much light can be
  collected from a source and focused onto a detector. A large etendue source cannot be focused
  to a small spot without losing light.

- **Forgetting the wavelength dependence of diffraction.** The diffraction angle scales as
  $\theta \sim \lambda/D$. A smaller aperture or longer wavelength produces more spreading.
  This is why radio telescopes need very large dishes.

- **Confusing scattering and absorption.** Extinction is the sum of scattering and absorption.
  Rayleigh scattering varies as $\lambda^{-4}$ and dominates in the Rayleigh regime
  ($d \ll \lambda$). Mie scattering describes larger particles and is less wavelength-dependent.

### Summary of Strategies

To avoid these pitfalls: always draw a ray diagram, track the optical path length explicitly,
use the correct Fresnel equations for the polarisation state, verify that approximations
(paraxial, thin lens, small angle) are valid for your system, and remember that diffraction
and coherence place fundamental limits on imaging and interference systems.

### Additional Common Pitfalls

- **Confusing irradiance and radiance.** Irradiance $I$ is power per unit area (W/m$^2$).
  Radiance $L$ is power per unit area per unit solid angle (W/m$^2$/sr). Radiance is conserved
  along a ray in a lossless medium (the radiance theorem), while irradiance follows the inverse
  square law. Confusing the two leads to incorrect photometric calculations.

- **Forgetting that polarisation affects Fresnel reflection coefficients.** The reflection
  coefficient for $s$-polarisation is $r_s = (n_1\cos\theta_i - n_2\cos\theta_t)/(n_1\cos\theta_i + n_2\cos\theta_t)$,
  while for $p$-polarisation it is $r_p = (n_2\cos\theta_i - n_1\cos\theta_t)/(n_2\cos\theta_i + n_1\cos\theta_t)$.
  These are not the same, and at Brewster's angle, $r_p = 0$ while $r_s \neq 0$.

- **Assuming all lasers produce coherent light.** While laser light is highly coherent compared
  to thermal sources, coherence length depends on the laser's linewidth. A multi-mode laser diode
  can have a coherence length of only a few millimetres, while a single-mode HeNe laser can have
  a coherence length of hundreds of metres.

- **Neglecting the effect of the aperture on resolution.** The numerical aperture (NA) determines
  the resolution: $d = \lambda/(2\,\mathrm{NA})$. A high-NA objective collects more light and
  resolves finer details, but has a shorter working distance and shallower depth of field. Always
  consider the NA when designing imaging systems.

- **Confusing optical path length (OPL) and geometric path length.** OPL = $n \times$ geometric
  path length. Interference depends on OPL differences, not geometric differences. A common error
  is to compute geometric path differences in materials without accounting for the refractive
  index, leading to incorrect predictions of constructive/destructive interference.

- **Misunderstanding the f-number and its relation to exposure.** The f-number $N = f/D$ controls
  both the light-gathering power (exposure) and the depth of field. Doubling the f-number reduces
  the area by a factor of 4 (two stops), requiring four times the exposure time. The f-number
  also affects diffraction: the Airy disk diameter scales as $2.44\lambda N$.

## Intuition

Optics pitfalls stem from conflating wave and ray descriptions. Fraunhofer and Fresnel diffraction differ because waves remember their curvature differently at different distances. Phase determines interference, not intensity, so tracking optical path length is essential. Brewster's angle works because reflected p-polarized light vanishes when the refracted ray is perpendicular to the reflected ray. Coherence determines whether interference fringes appear at all. The f-number trades light gathering against resolution because smaller apertures diffract more, setting a fundamental limit on image sharpness.

## Cross-References

- [Fourier Optics](/physics/4-optics-and-waves/19_fourier-optics-15) -- The Fraunhofer/Fresnel distinction and spatial filtering concepts are developed systematically in the Fourier optics chapter.
- [Coherence Theory](/physics/4-optics-and-waves/20_coherence-theory-16) -- Temporal and spatial coherence, fringe visibility, and the van Cittert-Zernike theorem are treated in detail here.
- [Lasers](/physics/4-optics-and-waves/9_lasers) -- Coherence length, mode structure, and the relationship between linewidth and coherence are covered in the laser chapter.
