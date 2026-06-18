---
title: Crystal Structures
tags:
  - Physics
  - University
description: ""s
Number, and $V_{\mathrm{cell}}$ is the cell volume.

<details>
<summary>Worked Example: FCC Packing Fraction</summary>

In FCC, nearest neighbours touch along the face diagonal. For lattice constant $a$ and atomic radius
$R$:

$$4R = \sqrt{2}\,a \implies R = \frac{a\sqrt{2}}{4}$$

Four atoms per conventional cell:

$$\mathrm{APF} = \frac{4 \times \frac{4}{3}\pi R^3}{a^3} = \frac{4 \times \frac{4}{3}\pi \left(\frac{a\sqrt{2}}{4}\right)^3}{a^3} = \frac{4 \times \frac{4}{3}\pi \cdot \frac{2\sqrt{2}\,a^3}{64}}{a^3} = \frac{\pi\sqrt{2}}{6} \approx 0.7405$$

</details>

<details>
<summary>Worked Example: Density of BCC Iron</summary>

$\alpha$-iron is BCC with lattice constant $a = 0.2866$ nm, molar mass $M = 55.845$ g/mol, and 2
atoms Per conventional cell.

$$\rho = \frac{2 \times 55.845}{6.022 \times 10^{23} \times (2.866 \times 10^{-8})^3}$$

$$(2.866 \times 10^{-8})^3 = 23.55 \times 10^{-24}\ \mathrm{cm}^3 = 2.355 \times 10^{-23}\ \mathrm{cm}^3$$

$$\rho = \frac{111.69}{6.022 \times 10^{23} \times 2.355 \times 10^{-23}} = \frac{111.69}{14.18} = 7.88\ \mathrm{g}/cm^3$$

This matches the accepted experimental density of iron ($7.87\ \mathrm{g}/cm^3$).

</details>

<details>
<summary>Worked Example: HCP Packing Fraction</summary>

For HCP with ideal $c/a = \sqrt{8/3}$Lattice constant $a$And atomic radius $R = a/2$:

Two atoms per primitive cell. The cell volume is
$V_{\mathrm{cell} = \frac{\sqrt{3}}{2}a^2 \cdot c = \frac{\sqrt{3}}{2}a^2 \cdot a\sqrt{8/3} = \sqrt{2}\,a^3}$.

$$\mathrm{APF} = \frac{2 \times \frac{4}{3}\pi (a/2)^3}{\sqrt{2}\,a^3} = \frac{\frac{\pi a^3}{3}}{\sqrt{2}\,a^3} = \frac{\pi}{3\sqrt{2}} = \frac{\pi\sqrt{2}}{6} \approx 0.7405$$

This confirms that HCP and FCC have the same packing fraction, as both are close-packed structures.

</details>

### 1.7 Crystal Defects

Real crystals are never perfect. Defects are classified by their dimensionality.

**Point defects (0D):**

- **Vacancy:** Missing atom at a lattice site.
- **Interstitial:** Extra atom between lattice sites.
- **Substitutional:** Foreign atom replacing a host atom.
- **Frenkel defect:** Vacancy-interstitial pair (atom moves to an interstitial site).
- **Schottky defect:** Pair of vacancies in ionic crystals (cation + anion vacancies to maintain
  charge neutrality).

The equilibrium concentration of vacancies follows from minimising the free energy
$F = n_v E_v - k_B T \ln\binom{N}{n_v}$:

$$n_v = N\,e^{-E_v/(k_B T)}$$

Where $E_v$ is the vacancy formation energy ( $\sim 1$ eV).

**Line defects (1D):**

- **Edge dislocation:** An extra half-plane of atoms inserted into the lattice. The Burgers vector
  $\mathbf{b}$ is perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is helically distorted. $\mathbf{b}$ is parallel to the
  dislocation line.
- **Mixed dislocation:** Combines edge and screw character.

Dislocations enable plastic deformation at stresses far below the theoretical shear strength. The
Peach-Koehler force per unit length on a dislocation:

$$\mathbf{F} = (\boldsymbol{\sigma}\cdot\mathbf{b}) \times \hat{\mathbf{t}}$$

**Planar defects (2D):**

- **Grain boundary:** Interface between two crystallites of different orientation.
- **Stacking fault:** Error in the stacking sequence (e.g., ABCABC $\to$ ABCABABC in FCC).
- **Twin boundary:** Mirror plane across which the lattice is reflected.

### 1.8 X-ray Diffraction Analysis

X-ray diffraction is the primary experimental tool for determining crystal structures. X-rays are
Produced by bombarding a metal target with electrons, generating both **Bremsstrahlung** (continuous
Spectrum) and **characteristic radiation** (sharp lines at element-specific energies, e.g., Cu
$K_\alpha$ at $\lambda = 1.5406$ Å).

Three principal experimental methods:

1. **Laue method:** A stationary single crystal is exposed to a polychromatic X-ray beam. Each set
   of planes selects the wavelength satisfying Bragg's law, producing a spot pattern revealing
   symmetry.
2. **Rotating crystal method:** A single crystal is rotated in a monochromatic beam. As each set of
   planes sweeps through the Bragg angle, a diffraction spot is recorded.
3. **Powder (Debye--Scherrer) method:** A polycrystalline sample is exposed to monochromatic X-rays.
   Randomly oriented crystallites produce diffraction cones, recorded as concentric rings on a
   detector.

:::caution Common Pitfall The coordination number is the number of _nearest neighbours_, not the
number of atoms in the unit Cell. For FCC, the coordination number is 12 even though there are only
4 atoms per conventional Cell. Do not confuse the basis size with the coordination number.

<details>
<summary>Worked Example: Interplanar Spacing for SC, BCC, FCC</summary>

For a cubic crystal with lattice constant $a$The interplanar spacing for $(hkl)$ is:

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

For SC, all $(hkl)$ reflections are allowed. For BCC, only $(hkl)$ with $h+k+l$ even are present.
For FCC, only all-even or all-odd $(hkl)$ are present.

The first few allowed reflections and their $d$-spacings for FCC ($a = 0.405$ nm, aluminium):

| $(hkl)$ | $h^2+k^2+l^2$ | $d$ (nm) | $2\theta$ (Cu $K_\alpha$) |
| ------- | ------------- | -------- | ------------------------- |
| (111)   | 3             | 0.2338   | 38.5°                     |
| (200)   | 4             | 0.2025   | 44.7°                     |
| (220)   | 8             | 0.1432   | 65.1°                     |
| (311)   | 11            | 0.1221   | 78.2°                     |
| (222)   | 12            | 0.1169   | 82.4°                     |

Note that (100) is absent in FCC (since 1+0+0 = 1 is odd but not all odd). The sequence of Allowed
$h^2+k^2+l^2$ values (3, 4, 8, 11, 12, ...) is characteristic of FCC.

</details>


:::
