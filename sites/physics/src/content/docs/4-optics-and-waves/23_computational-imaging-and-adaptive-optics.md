---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "23_computational Imaging And Adaptive Optics", "url": "https://physics.wyattau.com/4-optics-and-waves/23_computational-imaging-and-adaptive-optics"}]
}
</script>
title: Computational Imaging and Adaptive Optics
tags:
  - Physics
  - University
description: "(Candes, Tao, Donoho, 2006) shows that signals that are in some basis can be reconstructed from far fewer measurements than Nyquist sampling requires:"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "23_computational Imaging And Adaptive Optics", "url": "https://physics.wyattau.com/4-optics-and-waves/23_computational-imaging-and-adaptive-optics"}]
}
</script>

### 19.1 Compressed Sensing

**Compressed sensing** (Candes, Tao, Donoho, 2006) shows that signals that are **sparse** in some
basis can be reconstructed from far fewer measurements than Nyquist sampling requires:

$$\hat{\mathbf{x}} = \arg\min_{\mathbf{x}} \|\mathbf{x}\|_1 \quad \text{subject} to  \mathbf{y} = \Phi\mathbf{x}$$

Where $\Phi$ is the measurement matrix and $|\cdot|_1$ is the $L^1$ norm promoting sparsity.

### 19.2 Adaptive Optics

**Atmospheric turbulence** causes phase distortions in astronomical images. **Adaptive optics (AO)**
corrects these in real time using a deformable mirror. The Strehl ratio:

$$S = \exp\left[-\left(\frac{2\pi}{\lambda}\right)^2\langle\Delta\phi^2\rangle\right]$$

For diffraction-limited imaging ($S > 0.8$): $\Delta\phi_{\text{rms} < \lambda/14}$. On an 8 m
telescope at visible wavelengths, the deformable mirror must update at $>500$ Hz to track the
Greenwood frequency $f_G \sim 100$ Hz.

## Worked Examples

### Example 1: Thin film interference

**Problem.** A soap film ($n = 1.33$) of thickness $300 \mathrm{ nm}$ is illuminated by white light.
Which wavelength is constructively reflected?

**Solution.** Phase change at the front surface (air to soap); no phase change at the back (soap to
air). Constructive: $2nd = (m + \frac{1}{2})\lambda$.
$2(1.33)(300 \times 10^{-9}) = (m + 1/2)\lambda$. For $m = 0$:
$\lambda = 4 \times 1.33 \times 300 = 1596 \mathrm{ nm}$ (infrared). $m = 1$:
$\lambda = 1596/3 = 532 \mathrm{ nm}$ (green, visible).

$\blacksquare$

### Example 2: Diffraction grating resolution

**Problem.** A grating has $N = 5000$ lines illuminated. Find the resolving power in the second
order.

**Solution.** $R = mN = 2 \times 5000 = 10\,000$. The minimum wavelength difference resolvable:
$\Delta\lambda = \lambda/R$.

$\blacksquare$

## Intuition

Computational imaging combines optical hardware with algorithmic processing to overcome physical limits. Compressed sensing exploits the fact that most natural signals are sparse in some basis, meaning they can be reconstructed from far fewer measurements than the Nyquist theorem would suggest, like learning a song from just a few notes if you know it is simple. Adaptive optics corrects atmospheric turbulence in real time by measuring wavefront distortions with a guide star and deforming a mirror to cancel them, much like noise-cancelling headphones but for light. These techniques push imaging systems beyond their classical diffraction limits by treating image formation as an inverse problem rather than a purely optical one.

## Common Pitfalls

- **Confusing group and phase velocity.** Phase velocity $v_p = \omega/k$; group velocity
  $v_g = d\omega/dk$. **Fix:** In a dispersive medium $v_p \neq v_g$; the group velocity is the
  speed at which the envelope (energy) travels.
- **Wrong interference condition.** Constructive: path difference $= n\lambda$. Destructive: path
  difference $= (n + 1/2)\lambda$. **Fix:** For thin films, also account for the phase change on
  reflection ($\pi$ phase shift from denser medium).
- **Confusing Fraunhofer and Fresnel diffraction.** Fraunhofer: far-field (parallel rays, simpler
  math). Fresnel: near-field. **Fix:** Fraunhofer: $a \sin\theta = n\lambda$. Fresnel: requires
  Fresnel integrals or numerical methods.

## Summary

- Phase velocity: $v_p = \omega/k$. Group velocity: $v_g = d\omega/dk$; energy/information travels
  at $v_g$.
- Interference: thin films, Michelson interferometer, Fabry-Pérot etalon.
- Diffraction: single slit, double slit, diffraction grating; Rayleigh criterion for resolution.
- Polarisation: Brewster"s angle, Malus’s law ($I = I_0 \cos^2 \theta$).

## Cross-References

| Topic                   | Site       | Link                                                                                                                   |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| [Refraction and Optics] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/physics/waves/03-refraction-and-total-internal-reflection) |
| [Refraction and Optics] | DSE        | [View](https://dse.wyattau.com/docs/dse/physics/2-waves/2_waves-and-optics)                                            |
| [Refraction and Optics] | University | [View](https://university.wyattau.com/docs/physics/4-optics-and-waves/1_optics-and-wave-physics) |

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)

### 19.3 Key Relationships

| Concept               | Formula                                                               | Meaning                                                 |
| --------------------- | --------------------------------------------------------------------- | ------------------------------------------------------- |
| Nyquist criterion     | $f_s \geq 2f_{\max}$                                                  | Minimum sampling rate to avoid aliasing                 |
| Compressed sensing    | $\hat{x} = \arg\min\|x\|_1$ s.t. $y = \Phi x$                        | Reconstruction from sub-Nyquist measurements            |
| Strehl ratio          | $S = \exp[-(2\pi/\lambda)^2\langle\Delta\phi^2\rangle]$               | Measure of image quality after AO correction            |
| Greenwood frequency   | $f_G = 0.427\,(v_w/r_0)$                                             | Required AO update rate for given wind speed $v_w$      |
| Fried parameter       | $r_0 \propto \lambda^{6/5}(\cos\gamma)^{3/5}$                        | Coherence length of atmospheric turbulence              |

### 19.4 Common Pitfalls

- **Assuming compressed sensing works for any undersampled signal.** CS requires sparsity in some known basis and incoherence of the measurement matrix. **Fix:** Verify the signal is sparse in e.g. wavelet or DCT basis and that $\Phi$ satisfies the restricted isometry property.
- **Confusing the Strehl ratio with resolution.** Strehl ratio measures image quality relative to diffraction-limited; a low Strehl ratio means aberrations spread energy, not necessarily lower resolution. **Fix:** Strehl $> 0.8$ is diffraction-limited; $S < 0.1$ indicates severe aberrations.
- **Neglecting anisoplanatism in AO.** The turbulence correction is only valid within the isoplanatic angle $\theta_0$; stars far from the guide star are poorly corrected. **Fix:** Use multiple guide stars (laser tomography AO) or MOAO for wider fields.
- **Forgetting the wavefront sensor latency.** AO correction must be applied faster than the Greenwood frequency; otherwise, the atmosphere changes before the mirror updates. **Fix:** AO loop bandwidth must exceed $f_G$.

### 19.5 Applications

- **Astronomical imaging:** Adaptive optics on 8-10 m telescopes (VLT, Keck, Gemini) enables diffraction-limited imaging in the near-infrared, resolving exoplanets and stellar surfaces.
- **Microscopy:** Adaptive optics corrects for tissue aberrations in deep two-photon and confocal microscopy, recovering image contrast at depths $> 100\,\mu$m.
- **Medical imaging:** Compressed sensing accelerates MRI acquisition by undersampling $k$-space and reconstructing using total variation minimisation, reducing scan times by 2-4$\times$.
- **Laser communications:** Atmospheric turbulence distorts free-space optical links; AO pre-compensation at the transmitter improves coupling efficiency into single-mode fibres.
- **Terahertz imaging:** Compressed sensing with a single-pixel detector enables THz imaging with sparse detector arrays, useful for security screening and non-destructive testing.

### 19.6 Summary Table

| Technique            | Problem addressed                     | Key mathematics                      | Typical hardware              |
| -------------------- | ------------------------------------- | ------------------------------------ | ----------------------------- |
| Compressed sensing   | Sub-Nyquist sampling                  | $\ell_1$-minimisation, RIP           | Single-pixel camera, sparse arrays |
| Adaptive optics      | Atmospheric turbulence                | Zernike modes, wavefront sensing     | Deformable mirror, Shack-Hartmann sensor |
| Deconvolution        | Blur from PSF                         | Wiener filter, Richardson-Lucy       | Post-processing (software)    |
| Synthetic aperture   | Limited aperture size                 | Fourier-domain interpolation         | Antenna array, telescope array |

### 19.7 Worked Example: Strehl Ratio and Wavefront Error

**Problem.** An AO system reduces the wavefront RMS error to $\Delta\phi_{\rm rms} = \lambda/20$ at $\lambda = 500$ nm. Compute the Strehl ratio. Is the system diffraction-limited?

**Solution.** The Strehl ratio is:

$$S = \exp\left[-\left(\frac{2\pi}{\lambda}\right)^2\langle\Delta\phi^2\rangle\right] = \exp\left[-\left(\frac{2\pi}{\lambda}\right)^2\left(\frac{\lambda}{20}\right)^2\right]$$

$$S = \exp\left[-\left(\frac{2\pi}{20}\right)^2\right] = \exp\left[-\left(\frac{\pi}{10}\right)^2\right] = \exp(-\pi^2/100) \approx \exp(-0.0987) \approx 0.906$$

Since $S > 0.8$, the system is diffraction-limited. This meets the Marechal criterion ($S > 0.8$), corresponding to $\Delta\phi_{\rm rms} < \lambda/14$. Our $\lambda/20$ exceeds this requirement.

$\blacksquare$

