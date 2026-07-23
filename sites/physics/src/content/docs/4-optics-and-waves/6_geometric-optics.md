---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "6_geometric Optics", "url": "https://physics.wyattau.com/4-optics-and-waves/6_geometric-optics"}]
}
</script>
title: Geometric Optics
tags:
  - Physics
  - University
description: "The angle of incidence equals the angle of reflection: (both measured from the n Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "4 Optics And Waves", "url": "https://physics.wyattau.com/4-optics-and-waves"}, {"name": "6_geometric Optics", "url": "https://physics.wyattau.com/4-optics-and-waves/6_geometric-optics"}]
}
</script>

### 6.1 Reflection and Refraction

**Law of Reflection:** The angle of incidence equals the angle of reflection: $\theta_i = \theta_r$
(both measured from the normal).

**Snell"s Law:** $n_1 \sin\theta_1 = n_2 \sin\theta_2$.

**Derivation of Snell's law from Fermat’s principle.** The optical path length from point $A$ in
Medium 1 to point $B$ in medium 2 via a point on the interface at $x$ is:

$$\Lambda(x) = n_1\sqrt{a^2 + x^2} + n_2\sqrt{b^2 + (d - x)^2}$$

Setting $d\Lambda/dx = 0$:

$$n_1 \frac{x}{\sqrt{a^2 + x^2}} = n_2 \frac{d - x}{\sqrt{b^2 + (d-x)^2}}$$

Which gives $n_1 \sin\theta_1 = n_2 \sin\theta_2$. $\blacksquare$

### 6.2 Total Internal Reflection

When light travels from a denser to a rarer medium ($n_1 \gt n_2$), total internal reflection occurs
When $\theta_1 \geq \theta_c$ where:

$$\sin\theta_c = \frac{n_2}{n_1}$$

**Evanescent wave.** Beyond the critical angle, the transmitted field decays exponentially:

$$E_t \propto e^{-\kappa x}$$

Where $\kappa = \frac{2\pi}{\lambda}\sqrt{n_1^2 \sin^2\theta_1 - n_2^2}$.

### 6.3 The Thin Lens Equation

$$\frac{1}{s} + \frac{1}{s'} = \frac{1}{f}$$

Where $s$ is the object distance, $s'$ is the image distance, and $f$ is the focal length.

**Sign convention (Cartesian):** Distances are positive in the direction of light propagation.
$f \gt 0$ For converging lenses, $f \lt 0$ for diverging.

**Magnification:**

$$M = -\frac{s'}{s}$$

Negative $M$ indicates an inverted image.

### 6.4 Lensmaker's Equation

For a thin lens with radii of curvature $R_1$ and $R_2$:

$$\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

### 6.5 Matrix Optics (Ray Transfer Matrix)

A paraxial ray is described by a vector $\begin{pmatrix} y \\ \theta \end{pmatrix}$ where $y$ is the
Height and $\theta$ is the angle with the optical axis.

**Free space propagation** by distance $d$:

$$M_{\mathrm{prop} = \begin{pmatrix} 1 & d \\ 0 & 1 \end{pmatrix}}$$

**Thin lens** of focal length $f$:

$$M_{\mathrm{lens} = \begin{pmatrix} 1 & 0 \\ -1/f & 1 \end{pmatrix}}$$

**System matrix:** The overall transformation is the product of individual matrices (applied in
Reverse order): $M_{\mathrm{sys} = M_n \cdots M_2 M_1}$.

### 6.6 Mirror Equation

For a spherical mirror of radius $R$ (with $R \gt 0$ for concave, $R \lt 0$ for convex):

$$\frac{1}{s} + \frac{1}{s'} = \frac{2}{R}$$

The focal length is $f = R/2$. The magnification is $M = -s'/s$ (negative for inverted images).

**Derivation from the law of reflection.** A ray from the object at height $h$ striking the mirror
At height $y$ reflects such that $\theta_i = \theta_r$. In the paraxial approximation ($y \ll R$),
Applying the law of reflection and the small-angle approximation $\sin\theta \approx \theta$:

$$\frac{h}{s} + \frac{h'}{s'} = \frac{2y}{R}$$

Dividing through by $y$ and using $h/s = y/s$, $h'/s' = y/s'$ (paraxial rays) yields the mirror
Equation. $\blacksquare$

<details>
<summary>Worked Example: Concave mirror image formation</summary>

**Problem.** A concave mirror has radius of curvature $R = 40$ cm. An object of height 2.0 cm is
Placed 25 cm from the mirror. Find the image position, magnification, and nature.

**Solution.** $f = R/2 = 20$ cm. Using $1/s + 1/s' = 1/f$:
$1/s' = 1/20 - 1/25 = (5 - 4)/100 = 1/100$So $s' = 100$ cm.

The image is real (positive $s'$) and on the same side as the object.

$M = -s'/s = -100/25 = -4.0$.

Image height: $h' = Mh = -4.0 \times 2.0 = -8.0$ cm (inverted, magnified by 4$\times$).

</details>

### 6.7 Optical Instruments

**Magnifying glass.** Angular magnification when the image is at the near point $D$:

$$M = 1 + \frac{D}{f}$$

**Compound microscope.** Total magnification:

$$M_{\mathrm{total} = -\frac{L}{f_o} \cdot \frac{D}{f_e}}$$

Where $L$ is the tube length, $f_o$ is the objective focal length, and $f_e$ is the eyepiece focal
Length.

**Refracting telescope.** Angular magnification:

$$M = -\frac{f_o}{f_e}$$

For large magnification, the objective should have a long focal length and the eyepiece a short one.
The length of the telescope tube is approximately $f_o + f_e$.

**Reflecting telescope.** A concave primary mirror replaces the objective lens. The Cassegrain
design Uses a secondary convex mirror to redirect the focus behind the primary. Advantages: no
chromatic Aberration, lighter and cheaper for large apertures, and easier support structures.

<details>
<summary>Worked Example: Compound microscope magnification</summary>

**Problem.** A compound microscope has an objective with $f_o = 4.0$ mm and an eyepiece with
$f_e = 25$ mm. The tube length is $L = 160$ mm. Find the total magnification when the final image Is
at the near point ($D = 250$ mm).

**Solution.** Objective magnification: $M_o = -L/f_o = -160/4.0 = -40$.

Eyepiece magnification (image at near point): $M_e = 1 + D/f_e = 1 + 250/25 = 11$.

Total magnification: $M_{\mathrm{total} = M_o \times M_e = -40 \times 11 = -440}$.

The negative sign indicates the image is inverted.

</details>

## Cross-References

- **[Electromagnetic Waves](./2_electromagnetic-waves.md)**: Derives the wave equations and boundary conditions from which Snell's law and the Fresnel equations emerge in the high-frequency limit.
- **[Fresnel Equations](./10_fresnel-equations.md)**: Provides the amplitude reflection and transmission coefficients that govern the intensity of reflected and refracted rays.
- **[Optical Fibres](./12_optical-fibres.md)**: Applies total internal reflection to guide light in fibre cores, a direct application of the ray optics developed here.

- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Intuition

Geometric optics treats light as rays that travel in straight lines and bend when they cross between materials. Snell's law is nature minimizing travel time: light bends at an interface because it travels at different speeds in different media, just as a lifeguard running on sand and swimming in water takes a path that minimizes total rescue time. Total internal reflection is like a one-way mirror: light coming from the dense side at a shallow enough angle cannot escape and bounces back perfectly, which is how fiber optic cables trap and guide light over kilometers. A lens is like a carefully shaped hill that redirects rays to converge at a focal point. The thin lens equation is directly counting how much bending each surface contributes. Mirrors work the same way but with reflection instead of refraction.

### 6.8 Common Mistakes

**Mistake 1: Sign errors in the thin lens and mirror equations**
The sign convention is the most common source of errors. For lenses, a real object has $s > 0$, a real image has $s' > 0$ (on the opposite side), and a virtual image has $s' < 0$. For concave mirrors $f > 0$, for convex mirrors $f < 0$. Students often forget that the magnification $M = -s'/s$ includes a sign that indicates image orientation.

**Mistake 2: Confusing real and virtual images**
A real image is formed by converging rays and can be projected onto a screen. A virtual image is formed by diverging rays that appear to come from a point behind the optical element. A concave mirror forms a real image when the object is outside the focal point and a virtual image inside it. Students sometimes assume mirrors always form virtual images.

**Mistake 3: Misidentifying the direction of total internal reflection**
Total internal reflection occurs only when light travels from a denser medium to a rarer medium ($n_1 > n_2$) at an angle greater than the critical angle. It does not occur in the opposite direction. Students sometimes apply the critical angle formula regardless of the direction of propagation, which gives incorrect results.

