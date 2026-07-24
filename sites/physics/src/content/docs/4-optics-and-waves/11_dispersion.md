---

date: 2026-07-23T21:57:32+01:00
title: Dispersion
tags:
  - Physics
  - University
description: 'The refractive index varies with frequency: Comprehensive educational content coverage with definitions, worked examples, and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "11_dispersion", "url": "https://physics.wyattau.com/4-optics-and-waves/11_dispersion"}]
}
</script>

### 11.1 Normal and Anomalous Dispersion

The refractive index varies with frequency:

$$n(\omega) = 1 + \frac{Ne^2}{2m_e\varepsilon_0} \sum_j \frac{f_j}{\omega_{0j}^2 - \omega^2 - i\gamma_j\omega}$$

Where $N$ is the electron density, $f_j$ are oscillator strengths, $\omega_{0j}$ are resonance
frequencies, and $\gamma_j$ are damping constants.

- **Normal dispersion** ($dn/d\lambda \lt 0$): away from resonances, $n$ decreases with increasing
  $\lambda$.
- **Anomalous dispersion** ($dn/d\lambda \gt 0$): near resonances, $n$ increases with $\lambda$.

### 11.2 Group and Phase Velocity

- **Phase velocity:** $v_p = \omega/k = c/n$.
- **Group velocity:** $v_g = d\omega/dk = c/(n + \omega\, dn/d\omega)$.

For normal dispersion, $v_g \lt v_p$. In regions of anomalous dispersion, $v_g$ can exceed $c$ or
even become negative, but this does not violate causality (signal velocity remains $\leq c$).

### 11.3 Dispersion Relation in a Medium

Starting from the Lorentz oscillator model for a single resonance:

$$n^2(\omega) = 1 + \frac{Ne^2}{m_e\varepsilon_0}\frac{1}{\omega_0^2 - \omega^2 - i\gamma\omega}$$

The real part $n(\omega) = \mathrm{Re}\sqrt{\epsilon(\omega)}$ gives the refractive index. The
imaginary part gives absorption:

$$\alpha_{\mathrm{abs}} = \frac{2\omega}{c}\,\mathrm{Im}\, n(\omega)$$

**Worked example.** For X-rays ($\omega \gg \omega_0$):

$$n \approx 1 - \frac{Ne^2}{2m_e\varepsilon_0\omega^2} = 1 - \frac{\omega_p^2}{2\omega^2}$$

Where $\omega_p = \sqrt{Ne^2/(m_e\varepsilon_0)}$ is the plasma frequency. Since $n \lt 1$, X-rays
undergo total external reflection at grazing incidence.

### 11.4 Chromatic Aberration

Since $n$ depends on $\lambda$, a lens has different focal lengths for different wavelengths. The
longitudinal chromatic aberration is:

$$\Delta f = f(\lambda_1) - f(\lambda_2)$$

**Achromatic doublet.** Two lenses of different materials (e.g., crown and flint glass) with
different dispersive powers are combined to cancel chromatic aberration at two wavelengths. The
condition is:

$$\frac{\omega_1}{f_1} + \frac{\omega_2}{f_2} = 0$$

Where $\omega_i = (n_{i,F} - n_{i,C})/(n_{i,d} - 1)$ is the Abbe number for glass $i$.

### 11.5 Cauchy and Sellmeier Equations

The **Cauchy equation** provides an empirical fit for normal dispersion:

$$n(\lambda) = A + \frac{B}{\lambda^2} + \frac{C}{\lambda^4}$$

where $A, B, C$ are material constants determined experimentally.

The **Sellmeier equation** is more accurate, especially near resonances:

$$n^2(\lambda) = 1 + \sum_j \frac{B_j \lambda^2}{\lambda^2 - \lambda_j^2}$$

where $\lambda_j$ are the resonance wavelengths and $B_j$ are oscillator strengths.

### 11.6 Material Dispersion in Optical Fibers

In optical fiber communication, dispersion broadens pulses and limits the bit rate. The
**dispersion parameter** $D$ is defined as:

$$D = \frac{d}{d\lambda}\left(\frac{1}{v_g}\right) = -\frac{2\pi c}{\lambda^2}\frac{d^2\beta}{d\omega^2}$$

where $\beta(\omega)$ is the propagation constant. $D$ has units of ps/(nm$\cdot$km).

For standard single-mode fiber, $D = 0$ near $\lambda = 1.31\ \mu$m (zero-dispersion wavelength).
Dispersion-shifted fibers move this zero to $1.55\ \mu$m where attenuation is minimum.

**Pulse broadening.** A pulse with spectral width $\Delta\lambda$ broadens by:

$$\Delta\tau = D\, L\, \Delta\lambda$$

where $L$ is the fiber length. For a 10 km fiber with $D = 17$ ps/(nm$\cdot$km) and
$\Delta\lambda = 1$ nm, the broadening is $\Delta\tau = 170$ ps.

### 11.7 Prism Dispersion

A prism disperses white light into its constituent colors. The deviation angle $\delta$ for a prism
with apex angle $A$ is:

$$\delta = \theta_1 + \arcsin\left(n\sin\left(A - \arcsin\frac{\sin\theta_1}{n}\right)\right) - A$$

At minimum deviation $\delta_m$:

$$n = \frac{\sin\frac{A + \delta_m}{2}}{\sin\frac{A}{2}}$$

**Worked example.** A glass prism with $A = 60^\circ$ gives $\delta_m = 53.7^\circ$ for sodium light.
The refractive index is:

$$n = \frac{\sin((60 + 53.7)/2)}{\sin(30^\circ)} = \frac{\sin 56.85^\circ}{0.5} = \frac{0.837}{0.5} = 1.674$$

**Practice problem.** A flint glass prism has $n_F = 1.734$ (blue), $n_D = 1.720$ (yellow),
$n_C = 1.713$ (red). For $A = 60^\circ$, find the angular dispersion $\delta_F - \delta_C$ at
minimum deviation.

### 11.8 Dispersion in Waveguides

In addition to material dispersion, waveguides exhibit **waveguide dispersion** because the
effective index depends on the confinement geometry. The total dispersion in a fiber is:

$$D_{\mathrm{total}} = D_{\mathrm{material}} + D_{\mathrm{waveguide}}$$

Waveguide dispersion can be engineered by varying the core-cladding index difference and core
radius, enabling dispersion-flattened and dispersion-shifted fibers.

### 11.9 Summary

- Normal dispersion: $dn/d\lambda < 0$, group velocity $< c$.
- Anomalous dispersion: $dn/d\lambda > 0$ near resonances.
- The Lorentz oscillator model connects microscopic resonances to macroscopic dispersion.
- Chromatic aberration is corrected using achromatic doublets with different Abbe numbers.
- Material and waveguide dispersion together determine pulse broadening in optical fibers.
- Prisms disperse light via wavelength-dependent deviation angles.

### 11.10 Further Practice Problems

**Problem 1.** A crown glass prism has $n = 1.52$ at $\lambda = 589$ nm. Compute the minimum
deviation angle for $A = 60^\circ$.

**Problem 2.** An optical fiber has $D = 17$ ps/(nm$\cdot$km) at 1550 nm. A 1 nm bandwidth signal
propagates 50 km. What is the pulse broadening in ps?

**Problem 3.** Show that the group velocity can be written as $v_g = c/(n + \omega dn/d\omega)$ by
differentiating the dispersion relation.

## Common Mistakes

**Mistake 1: Assuming group velocity always equals signal velocity**
The group velocity $v_g = d\omega/dk$ is the velocity of the envelope of a wave packet, but it can exceed $c$ or become negative in regions of anomalous dispersion. This does not violate causality because the signal velocity (front velocity) never exceeds $c$. Students often cite $v_g > c$ as a violation of relativity, which is incorrect.

**Mistake 2: Confusing normal and anomalous dispersion regions**
Normal dispersion ($dn/d\lambda < 0$) occurs away from resonances, while anomalous dispersion ($dn/d\lambda > 0$) occurs near absorption resonances. Students sometimes assume anomalous dispersion is the "usual" behaviour or confuse the sign convention. The Lorentz oscillator model evidently shows that $n$ decreases with wavelength away from resonances.

**Mistake 3: Forgetting that the Abbe number characterises dispersive power**
The Abbe number $V_d = (n_d - 1)/(n_F - n_C)$ measures how much a material disperses. A high Abbe number means low dispersion. Students sometimes use the Abbe number formula backwards or confuse crown glass (high $V_d$, low dispersion) with flint glass (low $V_d$, high dispersion) when designing achromatic doublets.

## Cross-References

- **[Electromagnetic Waves](./2_electromagnetic-waves.md)**: The dispersion relation $\omega = ck$ in vacuum is modified in dispersive media where the refractive index depends on frequency.
- **[Optical Fibres](./12_optical-fibres.md)**: Material and waveguide dispersion broaden pulses in fibre communication, limiting the bit rate and requiring dispersion compensation.
- **[Geometric Optics](./6_geometric-optics.md)**: Chromatic aberration in lenses arises from wavelength-dependent refraction, requiring achromatic doublets for correction.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Intuition

Dispersion occurs when different frequencies of light travel at different speeds through a medium. This is why prisms split white light into colors and why glass fibers spread out short pulses. The refractive index depends on frequency because the medium's electrons respond differently to different driving frequencies. Normal dispersion means higher frequencies see a higher refractive index and travel slower. Near absorption resonances, anomalous dispersion occurs. Group velocity describes how fast a pulse envelope travels, while phase velocity describes individual wave crests. In dispersive media, these can differ dramatically, even exceeding the speed of light without violating causality.
