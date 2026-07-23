---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "10_fresnel Equations", "url": "https://physics.wyattau.com/4-optics-and-waves/10_fresnel-equations"}]
}
</script>
title: Fresnel Equations
tags:
  - Physics
  - University
description: "When light strikes a planar interface between media with refractive indices and The Amplitudes of the reflected and transmitted waves depend on the"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "10_fresnel Equations", "url": "https://physics.wyattau.com/4-optics-and-waves/10_fresnel-equations"}]
}
</script>

### 10.1 Derivation at a Dielectric Interface

When light strikes a planar interface between media with refractive indices $n_1$ and $n_2$The
Amplitudes of the reflected and transmitted waves depend on the polarisation.

For an incident wave with amplitude $E_i$The **reflection and transmission coefficients** are:

**s-polarisation** (perpendicular to the plane of incidence):

$$r_s = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}, \quad t_s = \frac{2n_1\cos\theta_i}{n_1\cos\theta_i + n_2\cos\theta_t}$$

**p-polarisation** (parallel to the plane of incidence):

$$r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}, \quad t_p = \frac{2n_1\cos\theta_i}{n_2\cos\theta_i + n_1\cos\theta_t}$$

**Reflectance and transmittance** (energy fractions):

$$R = |r|^2, \quad T = \frac{n_2\cos\theta_t}{n_1\cos\theta_i}|t|^2$$

With $R + T = 1$ (energy conservation).

### 10.2 Brewster"s Angle

At the **Brewster angle** $\theta_B$The reflected beam for p-polarised light has zero amplitude:
$r_p = 0$:

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Proof.** Setting $r_p = 0$: $n_2\cos\theta_i = n_1\cos\theta_t$. Using Snell's law
$n_1\sin\theta_i = n_2\sin\theta_t$:

$$\frac{\cos\theta_i}{\sin\theta_i} = \frac{\cos\theta_t}{\sin\theta_t}$$

$$\cot\theta_i = \cot\theta_t \implies \theta_i + \theta_t = 90^\circ$$

So $\tan\theta_i = \tan\theta_B = n_2/n_1$. $\blacksquare$

At Brewster's angle, the reflected and refracted beams are perpendicular. This is why polarising
Filters work at specific angles for reflected glare.

### 10.3 Total Internal Reflection and the Evanescent Wave

When $n_1 \gt n_2$ and $\theta_i \gt \theta_c = \arcsin(n_2/n_1)$, $\sin\theta_t \gt 1$So
$\cos\theta_t = i\sqrt{\sin^2\theta_t - 1}$ becomes imaginary.

The transmitted field becomes an **evanescent wave**:

$$E_t \propto e^{-\kappa x}\, e^{i(k_z z - \omega t)}$$

Where $\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}$ and $k_z = k_0 n_1\sin\theta_i$.

The field decays exponentially with penetration depth $\delta = 1/\kappa$ but propagates along the
Interface. No energy is transported into the second medium: $R = 1$.

**Frustrated total internal reflection.** If a third medium is brought within a few wavelengths of
The interface, energy can tunnel across the gap (analogous to quantum tunnelling).

### 10.4 Phase Changes on Reflection

The Fresnel coefficients are real for $\theta_i < \theta_c$ (normal incidence/transmission) and may
be positive or negative, indicating phase shifts:

- **External reflection** ($n_1 < n_2$): $r_s < 0$ for all $\theta_i$ (phase shift of $\pi$ for
  s-polarisation). $r_p$ changes sign at Brewster's angle.
- **Internal reflection** ($n_1 > n_2$): For $\theta_i < \theta_c$, both $r_s$ and $r_p$ are
  positive at normal incidence. $r_p$ changes sign at Brewster's angle.

At normal incidence ($\theta_i = 0$):

$$r_s = r_p = \frac{n_1 - n_2}{n_1 + n_2}$$

The reflection coefficient is negative when $n_1 < n_2$, corresponding to a $\pi$ phase shift. For
$n_1 > n_2$, the reflection coefficient is positive (no phase shift).

### 10.5 Reflectance Curves and Applications

The reflectance $R$ varies with angle of incidence:

- For **s-polarisation**, $R_s$ increases monotonically from $((n_1 - n_2)/(n_1 + n_2))^2$ at normal
  incidence to $1$ at grazing incidence.
- For **p-polarisation**, $R_p$ drops to $0$ at Brewster's angle, then increases to $1$ at grazing
  incidence.

**Anti-reflection coatings** use destructive interference between reflections from two interfaces.
For a single-layer coating of index $n_c$ and thickness $\lambda/4$ on glass ($n_g$), the reflectance
at wavelength $\lambda$ is:

$$R = \left(\frac{n_c^2 - n_g}{n_c^2 + n_g}\right)^2$$

The reflectance is zero when $n_c = \sqrt{n_g}$. For crown glass ($n_g = 1.52$), the optimal coating
index is $n_c \approx 1.23$, approximated by magnesium fluoride ($n \approx 1.38$), giving $R \approx 1\%$ per surface.

### 10.6 The Goos-Hanchen Shift

In total internal reflection, the reflected beam is laterally shifted relative to the geometrically
predicted path. This **Goos-Hanchen shift** arises because the evanescent wave penetrates the second
medium before being reflected:

$$D = \frac{\lambda}{\pi} \frac{\sin\theta_i}{\sqrt{\sin^2\theta_i - (n_2/n_1)^2}}$$

The shift is of order one wavelength for angles near the critical angle and decreases as $\theta_i$
increases beyond $\theta_c$.

### 10.7 Worked Example: Reflectance at Normal Incidence

**Problem.** Calculate the reflectance of uncoated glass ($n_g = 1.52$) at normal incidence in air.

<details>
<summary>Solution</summary>

At normal incidence, $r = (1 - 1.52)/(1 + 1.52) = -0.52/2.52 \approx -0.206$. The reflectance is
$R = |r|^2 \approx 0.0425$, or about $4.25\%$ per surface. For a lens with two surfaces, total
transmission through uncoated glass is approximately $T = (1 - 0.0425)^2 \approx 0.917$, meaning
about $8.3\%$ of incident light is lost to reflections.

$\blacksquare$

</details>

### 10.8 Worked Example: Phase Changes in TIR

**Problem.** Find the phase difference between s- and p-polarised components after total internal
reflection in glass ($n_1 = 1.5$) at $\theta_i = 60^\circ$ with $n_2 = 1$.

<details>
<summary>Solution</summary>

From the Fresnel equations with complex $\cos\theta_t$:

$$r_s = \frac{\cos\theta_i - i\sqrt{\sin^2\theta_i - (n_2/n_1)^2}}{\cos\theta_i + i\sqrt{\sin^2\theta_i - (n_2/n_1)^2}} = e^{i\delta_s}$$

$$r_p = \frac{(n_2/n_1)^2\cos\theta_i - i\sqrt{\sin^2\theta_i - (n_2/n_1)^2}}{(n_2/n_1)^2\cos\theta_i + i\sqrt{\sin^2\theta_i - (n_2/n_1)^2}} = e^{i\delta_p}$$

where $\delta_s = -2\arctan(\sqrt{\sin^2\theta_i - (n_2/n_1)^2}/\cos\theta_i)$ and
$\delta_p = -2\arctan(\sqrt{\sin^2\theta_i - (n_2/n_1)^2}/((n_2/n_1)^2\cos\theta_i))$.

For $n_1 = 1.5$, $n_2 = 1$, $\theta_i = 60^\circ$: $(n_2/n_1)^2 \approx 0.444$,
$\sin^2 60^\circ = 0.75$, so $\sqrt{\sin^2\theta_i - (n_2/n_1)^2} \approx \sqrt{0.75 - 0.444} \approx 0.553$,
$\cos 60^\circ = 0.5$.

$$\delta_s = -2\arctan(0.553/0.5) = -2\arctan(1.106) \approx -95.9^\circ$$

$$\delta_p = -2\arctan(0.553/(0.444 \cdot 0.5)) = -2\arctan(2.491) \approx -136.2^\circ$$

The relative phase difference $\Delta = \delta_p - \delta_s \approx -40.3^\circ$, which is why TIR
can convert linear to elliptical polarisation (the basis of Fresnel rhomb quarter-wave plates).

$\blacksquare$

</details>

### 10.9 Reflectance at the Critical Angle

At $\theta_i = \theta_c = \arcsin(n_2/n_1)$, we have $\theta_t = 90^\circ$ and $\cos\theta_t = 0$.
The Fresnel coefficients become:

$$r_s = \frac{n_1\cos\theta_c - 0}{n_1\cos\theta_c + 0} = 1$$

$$r_p = \frac{n_2\cos\theta_c - 0}{n_2\cos\theta_c + 0} = 1$$

Both polarisations have $R = 1$ at the critical angle, and the transmitted wave propagates exactly
along the interface with no energy flow into the second medium.

## Intuition

The Fresnel equations describe how light splits at an interface between two media. At normal incidence, reflection and transmission depend only on the refractive index mismatch. As the angle increases, the two polarisations behave differently: s-polarised light reflects more strongly, while p-polarised light can reach zero reflection at Brewster's angle. Total internal reflection occurs beyond the critical angle, where the transmitted wave becomes evanescent, decaying exponentially while carrying no energy across the boundary. This is the optical analogue of quantum tunnelling. The Fresnel coefficients encode both amplitude and phase changes, essential for thin-film coatings and anti-reflection layers.

## Common Mistakes

**Mistake 1: Swapping the numerator and denominator terms in $r_s$ and $r_p$**
The s-polarisation coefficient is $r_s = (n_1\cos\theta_i - n_2\cos\theta_t)/(n_1\cos\theta_i + n_2\cos\theta_t)$ while $r_p = (n_2\cos\theta_i - n_1\cos\theta_t)/(n_2\cos\theta_i + n_1\cos\theta_t)$. The key difference is that $r_s$ starts with $n_1\cos\theta_i$ in the numerator while $r_p$ starts with $n_2\cos\theta_i$. Swapping these gives incorrect reflection coefficients, especially near Brewster's angle.

**Mistake 2: Assuming $R + T = 1$ always implies no absorption**
Energy conservation $R + T = 1$ holds for lossless dielectric interfaces. In absorbing media, the Fresnel coefficients become complex and $R + T$ may not equal 1 when using the real-valued intensity definitions. Students often apply the simple form to metallic surfaces where the refractive index is complex.

## Cross-References

- **[Electromagnetic Waves](./2_electromagnetic-waves.md)**: Derives the boundary conditions for electromagnetic fields at interfaces from which the Fresnel equations follow.
- **[Polarization](./5_polarization.md)**: The s- and p-polarisation decomposition used in the Fresnel equations is the basis for Brewster angle polarisation and wave plate theory.
- **[Geometric Optics](./6_geometric-optics.md)**: Takes the ray limit of Fresnel reflection and refraction, yielding Snell's law and the thin lens equation.

**Mistake 3: Forgetting that the phase shift on reflection depends on the refractive index ordering**
For external reflection ($n_1 < n_2$), $r_s < 0$ at all angles, meaning the reflected wave undergoes a $\pi$ phase shift. For internal reflection ($n_1 > n_2$), $r_s > 0$ at normal incidence with no phase shift. Students frequently apply the wrong phase convention, which matters for thin-film interference calculations.

Fresnel equations describe how light splits at an interface between two media. At normal incidence, reflection and transmission depend only on the refractive index mismatch. As the angle of incidence increases, the two polarisations behave differently: s-polarised light reflects more strongly, while p-polarised light can reach zero reflection at Brewster's angle. Total internal reflection occurs beyond the critical angle, where the transmitted wave becomes evanescent. The Fresnel coefficients encode both amplitude and phase changes, which is essential for understanding thin-film coatings and anti-reflection layers. The key physical picture is that the boundary conditions for the electric and magnetic fields force the reflected and transmitted amplitudes to adjust continuously with angle.


- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
