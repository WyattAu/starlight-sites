---
title: Solid-State Chemistry
description: ""s Law

**Theorem 6 (Bragg's Law):** Constructive interference occurs when:

$$n\lambda = 2d\sin\theta$$

where $n$ is the order of reflection, $\lambda$ is the X-ray wavelength, $d$ is the interplanar
spacing, and $\theta$ is the angle of incidence.

### 6.2 Miller Indices

**Definition 7 (Miller Indices):** A set of integers $(hkl)$ that describe the orientation of a plane
in a crystal lattice.

For a plane intercepting the crystallographic axes at $(a/h, b/k, c/l)$:

- $(100)$: plane perpendicular to the $a$ axis.
- $(110)$: plane bisecting $a$ and $b$ axes.
- $(111)$: plane bisecting all three axes.

### 6.3 Interplanar Spacing

For a cubic crystal:

$$d_{hkl} = \frac{a}{\sqrt{h^2 + k^2 + l^2}}$$

**Example 3:** For NaCl ($a = 564$ pm) with Cu K$\alpha$ radiation ($\lambda = 154.2$ pm), find the
first-order Bragg angle for the (200) reflection.

$$d_{200} = \frac{564}{\sqrt{4}} = 282 \text{ pm}$$

$$\sin\theta = \frac{\lambda}{2d} = \frac{154.2}{2 \times 282} = 0.2734$$

$$\theta = 15.9°$$

$\blacksquare$

### 6.4 Systematic Absences

**Theorem 7 (Systematic Absences):** Certain reflections are absent due to the symmetry of the unit
cell (glide planes, screw axes, centering).

| Lattice Type | Absent When               |
| ------------- | ------------------------ |
| SC            | None                     |
| BCC           | $h + k + l$ = odd        |
| FCC           | $h, k, l$ mixed (not all odd or all even) |

## 7. Phase Diagrams of Solids

### 7.1 Polymorphism

**Definition 8 (Polymorphism):** The ability of a solid to exist in more than one crystal structure.

Examples:
- Carbon: diamond (cubic), graphite (hexagonal).
- Iron: $\alpha$-Fe (BCC, ferromagnetic) → $\gamma$-Fe (FCC, paramagnetic) at 912°C → $\delta$-Fe (BCC).
- Ti: $\alpha$-Ti (HCP) → $\beta$-Ti (BCC) at 882°C.

### 7.2 Alloy Phase Diagrams

**Solid solution:** Atoms of different elements share the same lattice.
- **Substitutional:** Similar-sized atoms (e.g., Cu–Ni).
- **Interstitial:** Small atoms in the voids of a metal lattice (e.g., C in Fe → steel).

## 8. Nanomaterials

### 8.1 Quantum Confinement

**Theorem 8 (Quantum Confinement):** When a semiconductor particle has a size comparable to the
exciton Bohr radius, the band gap increases (blue shift in absorption/emission).

$$E_g(\text{nanoparticle}) = E_g(\text{bulk}) + \frac{\hbar^2\pi^2}{2R^2}\left(\frac{1}{m_e^*} + \frac{1}{m_h^*}\right) - \frac{1.8e^2}{4\pi\varepsilon_0\varepsilon_r R}$$

where $R$ is the particle radius.

### 8.2 Surface Effects

**Definition 9 (Surface-to-Volume Ratio):** For a nanoparticle of radius $R$:

$$\frac{A}{V} = \frac{3}{R}$$

As $R \to 0$, surface atoms become a larger fraction of total atoms, leading to:
- Enhanced reactivity.
- Lower melting points ($T_m \propto 1/R$ for very small particles).
- Different mechanical properties.

### 8.3 Types of Nanomaterials

| Type              | Dimensions | Example                     |
| ----------------- | ---------- | --------------------------- |
| Nanoparticles     | 0D         | Au, Ag, CdSe quantum dots   |
| Nanotubes         | 1D         | Carbon nanotubes, BN nanotubes |
| Nanowires         | 1D         | Si nanowires, Ag nanowires  |
| Nanosheets        | 2D         | Graphene, MoS$_2$           |
| Nanocomposites    | 3D         | Nanoparticle-polymer blends |

## 9. Zeolites

### 9.1 Structure and Composition

**Definition 10 (Zeolite):** Crystalline aluminosilicates with a 3D framework of SiO$_4$ and AlO$_4$
tetrahedra, creating pores and channels of molecular dimensions.

**General formula:** $\text{M}_{x/n}[(\text{AlO}_2)_x(\text{SiO}_2)_y]\cdot m\text{H}_2\text{O}$

where M is the cation (e.g., Na$^+$, K$^+$, Ca$^{2+}$) balancing the negative charge from Al$^{3+}$
substitution in the framework.

### 9.2 Applications

- **Ion exchange:** Water softening (Na$^+$ replaces Ca$^{2+}$, Mg$^{2+}$).
- **Molecular sieves:** Size-selective adsorption based on pore dimensions.
- **Catalysis:** Shape-selective catalysis in petrochemical cracking.
- **Gas separation:** Separation of gases by molecular size.

### 9.3 Framework Types

Common zeolite structures: Linde Type A (LTA), Faujasite (FAU, includes X and Y zeolites), MFI
(ZSM-5), Mordenite (MOR).

## 10. Superconductors

### 10.1 Conventional Superconductors

**Definition 11 (Superconductor):** A material with zero electrical resistance below a critical
temperature $T_c$.

**Theorem 9 (BCS Theory):** Below $T_c$, electrons form Cooper pairs via phonon-mediated attraction:

$$2\Delta = 3.53\,k_B\,T_c$$

where $\Delta$ is the superconducting energy gap.

**Meissner effect:** Superconductors expel magnetic fields below $T_c$ and $H_c$ (critical field).

### 10.2 High-Temperature Superconductors

Cuprate superconductors (e.g., YBa$_2$Cu$_3$O$_7$, $T_c = 92$ K):
- Layered perovskite structures with CuO$_2$ planes.
- $T_c$ depends on oxygen stoichiometry.
- Iron-based superconductors (e.g., LaFeAsO, $T_c \sim 26$ K).

## 11. Non-Stoichiometric Compounds

### 11.1 Wustite (Fe$_{1-x}$O)

**Definition 12 (Non-Stoichiometry):** Many transition metal oxides have variable stoichiometry due
to mixed oxidation states and defects.

Fe$_{1-x}$O: Some Fe$^{2+}$ is oxidized to Fe$^{3+}$, with vacancies maintaining charge balance.

### 11.2 Superionic Conductors

**Definition 13 (Superionic Conductor):** Solids with exceptionally high ionic conductivity due to
mobile ions in a rigid framework.

Examples:
- $\beta$-alumina (Na$^+$ conductivity).
- AgI above 147°C (Ag$^+$ mobility).
- Yttria-stabilized zirconia (YSZ, O$^{2-}$ conductivity — used in solid oxide fuel cells).

## Common Pitfalls

1. **Confusing SC, BCC, and FCC packing fractions.** SC = 52.4%, BCC = 68.0%, FCC/HCP = 74.0%. **Fix:**
   Calculate: $\text{SC} = \pi/6$, $\text{BCC} = \sqrt{3}\pi/8$, $\text{FCC} = \pi/(3\sqrt{2})$.
2. **Wrong atoms per unit cell count.** Corner atoms count as 1/8, face atoms as 1/2, edge atoms as
   1/4, body atoms as 1. **Fix:** Always use the correct fractional count for each position.
3. **Using the Born-Lande equation for covalent solids.** The equation assumes purely ionic bonding.
   **Fix:** Use the Born-Haber cycle with thermodynamic data for more accurate values.
4. **Confusing intrinsic and extrinsic semiconductors.** Intrinsic carriers come from thermal excitation;
   extrinsic carriers come from dopants. **Fix:** At room temperature, $n_e = n_h = n_i$ (intrinsic) or
   $n_e \approx N_D$ (n-type), $n_h \approx N_A$ (p-type).
5. **Wrong Miller indices for planes.** Miller indices $(hkl)$ are the reciprocals of the axis
   intercepts, not the intercepts themselves. **Fix:** Take reciprocals, clear fractions, reduce to
   smallest integers.
6. **Confusing Schottky and Frenkel defects.** Schottky = vacancy pair (cation + anion); Frenkel =
   displacement (ion moves to interstitial). **Fix:** Schottky is favored when ions are similar in
   size (alkali halides); Frenkel when one ion is much smaller (AgCl).
7. **Ignoring the quantum size effect for nanoparticles.** The band gap depends on particle size;
   bulk properties don't apply to nanomaterials. **Fix:** Use the quantum confinement formula or
   experimental data for nanoparticle-specific properties.

## Summary

- **Crystal structures:** SC (CN=6), BCC (CN=8), FCC/HCP (CN=12); packing fractions 52%, 68%, 74%.
- **Ionic structures:** NaCl (6:6), CsCl (8:8), ZnS (4:4), CaF$_2$ (8:4); radius ratio rules.
- **Born-Haber cycle:** Lattice energy from thermodynamic cycle; Born-Lande equation.
- **Band theory:** Conductors ($E_g = 0$), semiconductors ($E_g \sim 0.1$–4 eV), insulators ($E_g > 4$ eV).
- **Defects:** Schottky (vacancy pairs), Frenkel (displacement); non-stoichiometry.
- **X-ray diffraction:** Bragg's law $n\lambda = 2d\sin\theta$; Miller indices; systematic absences.
- **Nanomaterials:** Quantum confinement; high surface-to-volume ratio; quantum dots, nanotubes.
- **Zeolites:** Porous aluminosilicates; ion exchange, molecular sieves, catalysis.

## Worked Examples

### Example 1: Calculating Density from Unit Cell Parameters
**Problem:** Sodium chloride crystallises in a face-centred cubic structure with a = 564 pm. Calculate the density of NaCl. (M_Na = 23.0, M_Cl = 35.5 g/mol, N_A = 6.022 x 10^23).
**Solution:** NaCl unit cell contains 4 Na+ and 4 Cl- ions (FCC arrangement). Molar mass of NaCl = 58.5 g/mol. Mass of unit cell = (4 x 58.5) / (6.022 x 10^23) = 3.886 x 10^-22 g. Volume = a^3 = (564 x 10^-10 cm)^3 = 1.795 x 10^-22 cm^3. Density = 3.886 x 10^-22 / 1.795 x 10^-22 = 2.17 g/cm^3. Literature value: 2.16 g/cm^3.

### Example 2: Predicting Stoichiometry from Radius Ratio
**Problem:** NaCl has r(Na+) = 102 pm and r(Cl-) = 181 pm. Determine the expected coordination geometry using the radius ratio rule.
**Solution:** Radius ratio = r+/r- = 102/181 = 0.564. For 0.414 < r+/r- < 0.732, the predicted coordination number is 6 (octahedral), matching the observed NaCl (rock salt) structure. If the ratio were below 0.414, tetrahedral (ZnS) coordination would be expected. If above 0.732, cubic (CsCl) coordination.

## Cross-References

| Topic                    | Site        | Link                                                                  |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| Atomic Structure         | WyattsNotes | [View](/docs/university/chemistry/atomic-structure-and-periodicity)    |
| Coordination Chemistry   | WyattsNotes | [View](/docs/university/chemistry/coordination-chemistry)             |
| Statistical Mechanics    | WyattsNotes | [View](/docs/university/chemistry/statistical-mechanics)              |
| Solid-State Physics      | WyattsNotes | [View](/docs/university/physics/solid-state-physics)                  |
| Solid-State Chemistry — MIT 3.091 | MIT OCW | [View](https://ocw.mit.edu/courses/3-091-introduction-to-solid-state-chemistry-fall-2018/) |
