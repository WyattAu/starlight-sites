---
title: Reciprocal Lattice
tags:
  - Physics
  - University
description: "" = \mathbf{k} + \mathbf{G}$ also has $\lvert\mathbf{k}'\rvert = k$ (elastic
   scattering condition).

**Implications:**

- For a fixed wavelength and a single crystal, very few reciprocal lattice points lie on the Ewald
  sphere. The crystal must be rotated to bring different points onto the sphere.
- As $\lambda$ decreases (shorter wavelength), the Ewald sphere radius increases and more points
  satisfy the condition.
- For $\lambda \to 0$ (e.g., electron diffraction), the Ewald sphere is effectively flat, and the
  Laue condition reduces to a planar section through reciprocal space.

<details>
<summary>Worked Example: Ewald Sphere for Aluminium</summary>

Aluminium is FCC with $a = 0.405$ nm. The reciprocal lattice is BCC with conventional cubic Constant
$4\pi/a = 3.10 \times 10^{10}$ m$^{-1}$.

Using Cu $K_\alpha$ radiation ($\lambda = 0.15406$ nm), the Ewald sphere radius is
$k = 2\pi/\lambda = 4.08 \times 10^{10}$ m$^{-1}$.

The shortest reciprocal lattice vector has magnitude
$G_{\min} = 2\pi/(a\sqrt{2}) = 1.10 \times 10^{10}$ m$^{-1}$ (the (111) reflection of FCC).

Since $k = 4.08 \times 10^{10}$ m$^{-1} \gt G_{\min}$The (111) point can lie on the Ewald sphere
When the crystal is appropriately oriented. The maximum accessible $G$ is
$G_{\max} = 2k = 8.16 \times 10^{10}$ M$^{-1}$Which allows access to many reflections.

The **limiting sphere** of radius $2k$ centred at the origin contains all reciprocal lattice points
That can potentially be accessed by rotating the crystal. Points outside this sphere can never
Satisfy the diffraction condition for the given wavelength.

</details>

### 2.6 Structure Factor Calculations

<details>
<summary>Worked Example: Structure Factor of the NaCl Structure</summary>

NaCl has an FCC lattice with a two-atom basis: Na$^+$ at $(0,0,0)$ and Cl$^-$ at $(a/2, 0, 0)$ (or
equivalently, Cl$^-$ at $(1/2, 0, 0)$ in fractional coordinates).

The FCC sublattice contributes a factor
$S_{\mathrm{FCC} = f[1 + e^{-i\pi(h+k)} + e^{-i\pi(h+l)} + e^{-i\pi(k+l)}]}$ Which is zero unless
$h,k,l$ are all even or all odd.

For allowed FCC reflections, the basis factor is:

$$F_{\mathrm{basis} = f_{\mathrm{Na} + f_{\mathrm{Cl}\, e^{-i\pi h}}}}$$

When $h,k,l$ are all even: $F = f_{\mathrm{Na} + f_{\mathrm{Cl}}}$. When $h,k,l$ are all odd:
$F = f_{\mathrm{Na} - f_{\mathrm{Cl}}}$.

The intensity $I \propto \lvert S\rvert^2$:

- All even: $I \propto (f_{\mathrm{Na} + f_{\mathrm{Cl})^2}}$ (strong)
- All odd: $I \propto (f_{\mathrm{Na} - f_{\mathrm{Cl})^2}}$ (weak, since
  $f_{\mathrm{Na} \approx f_{\mathrm{Cl}}}$ at high scattering angles where form factors converge)

</details>

