---
title: Detailed Diffraction Theory
tags:
  - Physics
  - University
description: '(near-field): the observation screen is close enough that the curvature of the wavefronts matters. The Fresnel diffraction integral is:'
---

### 12.1 Fresnel and Fraunhofer Diffraction

**Fresnel diffraction** (near-field): the observation screen is close enough that the curvature of
the wavefronts matters. The Fresnel diffraction integral is:

$$E(P) = \frac{i}{\lambda}\iint \frac{E(Q)}{r_{QP}}\, e^{ikr_{QP}}\, dS$$

**Fraunhofer diffraction** (far-field): the observation screen is far enough that the phase
variation across the aperture can be approximated as linear. This occurs when:

$$R \gg \frac{a^2}{\lambda}$$

Where $a$ is the aperture size and $R$ is the distance to the screen.

### 12.2 Fresnel Zones

For a point $P$ at distance $R$ from an aperture, the **Fresnel zones** are annular regions where
the path length from $P$ differs by $\lambda/2$. The $n$-th Fresnel zone has inner radius:

$$r_n = \sqrt{n\lambda R + \frac{n^2\lambda^2}{4}} \approx \sqrt{n\lambda R}$$

**Zone plate.** A Fresnel zone plate blocks alternate zones, producing a focused beam. It acts as a
lens with focal length $f = r_1^2/\lambda$.

### 12.3 Fresnel Diffraction from a Straight Edge

For a semi-infinite plane ($x > 0$), the Fresnel integral gives the intensity at a point $P$:

$$I(P) = \frac{I_0}{2}\left[\left(C(u) + \frac{1}{2}\right)^2 + \left(S(u) + \frac{1}{2}\right)^2\right]$$

Where $C(u)$ and $S(u)$ are the Fresnel integrals and $u = x\sqrt{2/(\lambda R)}$ is the Fresnel
number. At the geometric shadow edge ($u = 0$): $I/I_0 = 1/4$ (not zero!), demonstrating the failure
of geometric optics.

### 12.4 Fresnel Integrals

The **Fresnel integrals** are defined as:

$$C(u) = \int_0^u \cos\left(\frac{\pi t^2}{2}\right) dt, \quad S(u) = \int_0^u \sin\left(\frac{\pi t^2}{2}\right) dt$$

**Properties of Fresnel Integrals:**

1. $C(0) = 0$, $S(0) = 0$.
2. $C(\infty) = S(\infty) = 1/2$.
3. $C(-u) = -C(u)$, $S(-u) = -S(u)$ (odd functions).
4. $(C(u) + iS(u))^2 = \int_0^u e^{i\pi t^2/2} dt$ (Cornu spiral representation).

The Cornu spiral is a parametric plot of $(C(u), S(u))$, which is useful for graphical
determination of Fresnel diffraction amplitudes.

### 12.5 Babinet's Principle

**Babinet's principle** states that the diffraction pattern from an opaque obstacle is complementary
to that from an aperture of the same shape: the sum of the two patterns equals the pattern with no
obstruction at all.

$$E_{\mathrm{obstacle}} + E_{\mathrm{aperture}} = E_{\mathrm{unobstructed}}$$

**Example 12.1.** The diffraction pattern from a small circular disk has a bright spot at the center
(Poisson spot), which is the complement of the Airy pattern from a circular aperture. This was
originally considered a paradox but confirms the wave theory of light.

### 12.6 Rectangular Aperture Diffraction

For a rectangular aperture of dimensions $a \times b$, the Fraunhofer diffraction pattern is:

$$E(\theta_x, \theta_y) = E_0 \frac{\sin(\pi a \sin\theta_x/\lambda)}{\pi a \sin\theta_x/\lambda} \cdot \frac{\sin(\pi b \sin\theta_y/\lambda)}{\pi b \sin\theta_y/\lambda}$$

The intensity is:

$$I(\theta_x, \theta_y) = I_0 \left[\frac{\sin(\pi a \sin\theta_x/\lambda)}{\pi a \sin\theta_x/\lambda}\right]^2 \left[\frac{\sin(\pi b \sin\theta_y/\lambda)}{\pi b \sin\theta_y/\lambda}\right]^2$$

This is a product of two sinc² functions. The first zeros occur at $\sin\theta_x = \pm\lambda/a$ and
$\sin\theta_y = \pm\lambda/b$, giving a rectangular pattern of side lobes.

### 12.7 Circular Aperture and Airy Pattern

For a circular aperture of diameter $D$, the Fraunhofer diffraction pattern is:

$$E(\theta) = E_0 \frac{2J_1(\pi D \sin\theta/\lambda)}{\pi D \sin\theta/\lambda}$$

Where $J_1$ is the Bessel function of the first kind of order 1. The intensity (Airy pattern) is:

$$I(\theta) = I_0 \left[\frac{2J_1(\pi D \sin\theta/\lambda)}{\pi D \sin\theta/\lambda}\right]^2$$

The first dark ring occurs at $\sin\theta \approx 1.22\lambda/D$. The **Rayleigh criterion**
for resolution states that two point sources are resolvable when the central maximum of one
coincides with the first minimum of the other: $\theta_{\mathrm{min}} \approx 1.22\lambda/D$.

**Example 12.2.** For a telescope with $D = 10$ cm observing at $\lambda = 500$ nm:
$\theta_{\mathrm{min}} \approx 1.22 \times 500 \times 10^{-9} / 0.1 = 6.1 \times 10^{-6}$ rad.

### 12.8 Huygens-Fresnel Principle

The **Huygens-Fresnel principle** states that every point on a wavefront acts as a source of
spherical secondary wavelets, and the amplitude at any point beyond is the superposition of all
these wavelets. Mathematically:

$$U(P) = \frac{i}{\lambda} \iint_{\Sigma} U(Q) \frac{e^{ikr}}{r} \cos\theta\, dS$$

Where $\Sigma$ is the aperture surface, $r = |P - Q|$, and $\cos\theta$ is the obliquity factor.

### 12.9 Kirchhoff's Diffraction Theory

**Kirchhoff's integral theorem** provides a rigorous mathematical formulation of the Huygens-Fresnel
principle:

$$U(P) = \frac{1}{4\pi} \iint_{\Sigma} \left[U \frac{\partial}{\partial n}\left(\frac{e^{ikr}}{r}\right) - \frac{e^{ikr}}{r} \frac{\partial U}{\partial n}\right] dS$$

The Kirchhoff boundary conditions assume $U = 0$ and $\partial U/\partial n = 0$ on the opaque
portion of the screen, though these assumptions are not strictly consistent — a limitation
addressed by the **Sommerfeld radiation theory**.

### 12.10 Thin Lens and Fourier Transformation

A thin lens with focal length $f$ adds a quadratic phase factor to the incident field:

$$t_{\mathrm{lens}}(x, y) = \exp\left(-i\frac{k}{2f}(x^2 + y^2)\right)$$

In the Fresnel approximation, the field at the back focal plane of a lens is the Fourier transform
of the field at the front focal plane:

$$U_f(u, v) = \frac{i}{\lambda f} \iint U_{\mathrm{in}}(x, y) e^{-i\frac{2\pi}{\lambda f}(xu + yv)}\, dx\, dy$$

This is the fundamental principle behind optical Fourier processing and 4f imaging systems.

### 12.11 Worked Examples

**Problem 1.** Calculate the Fraunhofer diffraction pattern of a single slit of width $a$.

*Solution.* For a slit along the $y$-axis of width $a$, the field at angle $\theta$ is:

$$E(\theta) = E_0 \int_{-a/2}^{a/2} e^{-ikx\sin\theta}\, dx = E_0 a \frac{\sin(\pi a \sin\theta/\lambda)}{\pi a \sin\theta/\lambda}$$

The intensity is $I(\theta) = I_0 \mathrm{sinc}^2(\pi a \sin\theta/\lambda)$. The first minimum is at
$\sin\theta = \lambda/a$, giving an angular width $\Delta\theta \approx 2\lambda/a$ for small angles.
$\blacksquare$

**Problem 2.** Find the fringe spacing in a double-slit Fraunhofer pattern with slit separation $d$.

*Solution.* For two slits of width $a$ separated by $d$, the pattern is:

$$I(\theta) = 4I_0 \mathrm{sinc}^2\left(\frac{\pi a\sin\theta}{\lambda}\right) \cos^2\left(\frac{\pi d\sin\theta}{\lambda}\right)$$

The $\cos^2$ term gives interference fringes at $\sin\theta = m\lambda/d$ for integer $m$. The
fringe spacing in the small-angle limit is $\Delta y = \lambda R / d$ at distance $R$. $\blacksquare$

## Common Mistakes

**Mistake 1: Assuming Fraunhofer diffraction requires the screen to be at infinity**
The Fraunhofer condition $R \gg a^2/\lambda$ can be satisfied at finite distance by placing a lens after the aperture. The lens performs an optical Fourier transform, producing the far-field pattern at its back focal plane. Students often think a lens is unnecessary or that Fraunhofer diffraction can only be observed at very large distances.

**Mistake 2: Forgetting the obliquity factor in Huygens-Fresnel theory**
The Huygens-Fresnel integral includes a $\cos\theta$ obliquity factor that suppresses backward-propagating wavelets. Omitting this factor leads to incorrect amplitude predictions, particularly for wide-angle diffraction. The Kirchhoff formulation provides the rigorous justification for including this factor.

## Cross-References

- **[Diffraction](./4_diffraction.md)**: Establishes the Huygens-Fresnel principle and Fraunhofer diffraction patterns that the detailed theory formalises with Fresnel integrals and Kirchhoff theory.
- **[Fourier Optics](./14_fourier-optics-10.md)**: The Fraunhofer diffraction pattern is the Fourier transform of the aperture function, connecting diffraction to frequency analysis.
- **[Fresnel Equations](./10_fresnel-equations.md)**: Determines the boundary conditions for electromagnetic fields at aperture edges, affecting the Kirchhoff diffraction integral.

**Mistake 3: Confusing the Cornu spiral representation with the actual diffraction pattern**
The Cornu spiral is a parametric plot of $(C(u), S(u))$ whose arc length and tangent angle encode the amplitude and phase of Fresnel diffraction. Students sometimes interpret the spiral itself as the intensity pattern, when in fact the intensity at each point is found by computing the chord length from the spiral's endpoint to the origin.

Fresnel diffraction is the transition zone between near-field and far-field behavior. Close to an aperture, wavefront curvature matters and the pattern changes with distance. Fresnel zones divide the aperture into rings where contributions alternate in phase, like concentric ripples on a pond. Zone plates exploit this by blocking every other ring, focusing light like a lens. The straight-edge diffraction pattern shows light bending into the shadow, demonstrating that geometric optics is an approximation. Fraunhofer diffraction emerges when the screen is far enough that wavefronts appear flat.
