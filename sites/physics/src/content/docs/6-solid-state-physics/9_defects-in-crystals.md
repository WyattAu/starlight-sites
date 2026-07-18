---
title: Defects in Crystals
tags:
  - Physics
  - University
description: '- Missing atom at a lattice site. - Extra atom between lattice sites. - Foreign atom replacing a host atom. - Vacancy-interstitial pair (atom moves to interstitial site).'
---

### 9.1 Point Defects

- **Vacancy:** Missing atom at a lattice site.
- **Interstitial:** Extra atom between lattice sites.
- **Substitutional:** Foreign atom replacing a host atom.
- **Frenkel defect:** Vacancy-interstitial pair (atom moves to interstitial site).
- **Schottky defect:** Vacancy pair (in ionic crystals, cation and anion vacancies).

**Equilibrium concentration of vacancies:**

$$n_v = N\,e^{-E_v/(k_B T)}$$

where $N$ is the number of lattice sites and $E_v$ is the vacancy formation energy ($\sim 1$ eV).

**Derivation.** Minimising the free energy $F = n_v E_v - T S_{\mathrm{config}}$ where
$S_{\mathrm{config}} = k_B \ln\binom{N}{n_v}$:

$$\frac{\partial F}{\partial n_v} = E_v + k_B T \ln\left(\frac{n_v}{N - n_v}\right) = 0$$

For $n_v \ll N$: $n_v = N e^{-E_v/(k_B T)}$. $\blacksquare$

### 9.2 Dislocations

- **Edge dislocation:** Extra half-plane inserted into the lattice. Burgers vector $\mathbf{b}$ is
  perpendicular to the dislocation line.
- **Screw dislocation:** The lattice is sheared. $\mathbf{b}$ is parallel to the dislocation line.

Dislocations enable **plastic deformation** at stresses far below the theoretical shear strength.
The Peach-Koehler force on a dislocation:

$$\mathbf{F} = (\boldsymbol{\sigma}\cdot\mathbf{b}) \times \hat{\mathbf{t}}$$

where $\boldsymbol{\sigma}$ is the stress tensor and $\hat{\mathbf{t}}$ is the unit tangent to the
dislocation line.

### 9.3 Impact on Properties

Defects strongly affect electrical, mechanical, and thermal properties:

- **Electrical:** Donor and acceptor levels in semiconductors are substitutional defects. Vacancies
  act as scattering centres, reducing conductivity.
- **Mechanical:** Dislocations determine yield strength (Hall--Petch relation). Work hardening
  increases dislocation density.
- **Thermal:** Point defects scatter phonons, reducing thermal conductivity.

### 9.4 Planar Defects

**Grain boundaries** separate crystalline regions (grains) of different orientation. They are
classified by the misorientation angle $\theta$:

- **Low-angle grain boundaries:** $\theta \lesssim 15^\circ$, composed of dislocation arrays.
- **High-angle grain boundaries:** $\theta \gtrsim 15^\circ$, have a more disordered structure.

**Stacking faults** occur when the stacking sequence of close-packed planes is disrupted. For FCC
crystals, the normal stacking ABCABC can become ABCABABC (intrinsic fault) or ABCABACABC (extrinsic
fault). The fault energy $\gamma_{\mathrm{SF}}$ determines the width of dissociated dislocations.

**Twin boundaries** are special grain boundaries with mirror symmetry across the interface, with
low interfacial energy.

### 9.5 Line Defects: More Detail

**Dislocation motion.** Dislocations move by **glide** (within the slip plane) or **climb**
(perpendicular to the slip plane, requiring mass transport). The **Peierls-Nabarro stress**
$\tau_P$ is the stress required to move a dislocation:

$$\tau_P = \frac{2G}{1 - \nu} e^{-2\pi w/b}$$

where $G$ is the shear modulus, $\nu$ is Poisson's ratio, $w$ is the dislocation width, and $b$
is the Burgers vector magnitude.

**Dislocation multiplication.** Under stress, dislocation sources (Frank-Read sources) generate
new dislocation loops, dramatically increasing dislocation density during plastic deformation.

### 9.6 Volume Defects

- **Precipitates:** Second-phase particles formed by supersaturation and nucleation. They can
  strengthen materials (precipitation hardening) or weaken them (if large and brittle).
- **Voids and pores:** Agglomerations of vacancies, often formed during solidification or
  irradiation. They reduce density and can initiate fracture.

### 9.7 Defect Characterization Techniques

- **X-ray diffraction:** Peak broadening reveals microstrain and crystallite size (Scherrer
  equation). Diffuse scattering reveals point defect concentrations.
- **Transmission electron microscopy (TEM):** Direct imaging of dislocations, grain boundaries,
  and precipitates. Selected area diffraction identifies crystal orientation.
- **Scanning electron microscopy (SEM):** Surface imaging of grain structure via electron
  channeling contrast or EBSD.
- **Positron annihilation spectroscopy:** Sensitive to vacancy-type defects. Positrons become
  trapped at vacancies, changing their annihilation lifetime.

### 9.8 Practice Problems

**Problem 1.** Calculate the equilibrium vacancy concentration in copper at 1000 K given
$E_v = 1.0$ eV and $k_B = 8.62 \times 10^{-5}$ eV/K. How many vacancies per cubic centimeter?

**Problem 2.** Show that the equilibrium concentration of Frenkel defects (vacancy + interstitial)
is $n_F = \sqrt{NN_i}\, e^{-E_F/(2k_B T)}$, where $N_i$ is the number of interstitial sites.

_Solution._ The free energy for $n$ Frenkel pairs is
$F = n E_F - k_B T \left[\ln\binom{N}{n} + \ln\binom{N_i}{n}\right]$. Using Stirling and
minimising gives the result. $\blacksquare$

**Problem 3.** A metal with grain size $d$ has yield strength $\sigma_y = \sigma_0 + k d^{-1/2}$
(Hall-Petch). Explain why smaller grains give higher strength.

**Problem 4.** Estimate the number of dislocations in a plastically deformed crystal with shear
strain $\gamma = 0.1$ and average dislocation slip distance 1 $\mu$m.

### 9.9 Color Centers

**Color centers** (F-centers) are point defects that absorb light at specific wavelengths, giving
color to otherwise transparent crystals. An F-center is an electron trapped at an anion vacancy
in an ionic crystal. The energy levels of the trapped electron give characteristic optical
absorption bands. F-centers in alkali halides produce vivid colors: NaCl (yellow), KCl (violet),
KBr (blue).

### 9.10 Radiation Damage

High-energy radiation (neutrons, electrons, gamma rays) creates defect cascades in crystals:

- **Displacement damage:** Atoms knocked from lattice sites, creating Frenkel pairs.
- **Ionization damage:** Electron-hole pairs that can lead to chemical changes.
- **Swelling:** Accumulation of voids causes dimensional changes, important in nuclear reactor
  materials.

### 9.11 Defect Engineering

Defects are not always undesirable. **Defect engineering** deliberately introduces controlled
defects to tailor material properties:

- **Doping:** Adding substitutional impurities to control semiconductor conductivity (n-type
  and p-type).
- **Precipitation hardening:** Second-phase particles impede dislocation motion, increasing
  strength.
- **Oxygen vacancies in oxides:** Used in memristors and solid oxide fuel cells.

### 9.12 Summary

- Point defects (vacancies, interstitials, substitutionals) have equilibrium concentrations
  governed by Boltzmann statistics.
- Dislocations are line defects enabling plastic deformation at stresses below theoretical
  strength.
- Planar defects include grain boundaries, stacking faults, and twin boundaries.
- Defects affect electrical, mechanical, thermal, and optical properties.
- Defect engineering is used to optimize material performance in applications from
  semiconductors to structural alloys.

**Problem 5.** At 300 K, the vacancy concentration in copper is $10^{-12}$ of lattice sites.
At 1000 K, it is $10^{-5}$. Estimate the vacancy formation energy $E_v$.

**Problem 6.** Show that the equilibrium concentration of Schottky defects in an ionic crystal
MX is $n_S = N e^{-E_S/(2k_B T)}$, where $E_S$ is the energy to create a cation-anion vacancy pair.

### 9.5 Common Mistakes

**Mistake 1: Assuming that defects are always detrimental.**
While defects can degrade mechanical and electrical properties, they can also be beneficial. For example, doping (intentional substitutional defects) is essential for semiconductor devices. Dislocations enable plastic deformation. Do not assume that all defects are harmful.

**Mistake 2: Confusing point defects with extended defects.**
Point defects (vacancies, interstitials, substitutionals) are zero-dimensional, while extended defects (dislocations, grain boundaries, surfaces) are one-, two-, or three-dimensional. They have different effects on material properties. Do not confuse the two categories.

**Mistake 3: Forgetting that the equilibrium vacancy concentration depends exponentially on temperature.**
The vacancy concentration $n_v = N e^{-E_v/(k_B T)}$ increases exponentially with temperature. At room temperature, the concentration is very small, but at high temperatures it can be significant. Do not assume that the vacancy concentration is constant.

**Mistake 4: Assuming that dislocations are always mobile.**
Dislocations can be pinned by impurities, other dislocations, or grain boundaries. The mobility of dislocations depends on temperature, stress, and the presence of obstacles. Do not assume that dislocations can move freely under any conditions.

**Mistake 5: Confusing the Burgers vector with the lattice vector.**
The Burgers vector $\mathbf{b}$ describes the magnitude and direction of the lattice distortion caused by a dislocation. It is not necessarily equal to a lattice vector; it can be a fraction of a lattice vector (partial dislocations). Do not assume that the Burgers vector is always a lattice vector.
