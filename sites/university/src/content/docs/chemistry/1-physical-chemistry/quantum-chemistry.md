---
title: Quantum Chemistry
description: ""s Rules):** For degenerate orbitals:
1. Maximize total spin $S$ (parallel spins first).
2. For a given $S$, maximize $L$.
3. For atoms less than half-filled: minimize $J$; more than half-filled: maximize $J$.

### 6.3 Electronic Configurations and Term Symbols

**Example 2:** Carbon ($1s^2\,2s^2\,2p^2$).

The $2p^2$ configuration: possible microstates lead to terms ${}^3P$, ${}^1D$, ${}^1S$.

By Hund's rules, the ground state is ${}^3P_0$.

$\blacksquare$

## 7. Many-Electron Atoms

### 7.1 Electron-Electron Repulsion

For helium-like atoms, the Hamiltonian includes electron-electron repulsion:

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla_1^2 - \frac{\hbar^2}{2m_e}\nabla_2^2 - \frac{Ze^2}{4\pi\varepsilon_0 r_1} - \frac{Ze^2}{4\pi\varepsilon_0 r_2} + \frac{e^2}{4\pi\varepsilon_0 r_{12}}$$

The $1/r_{12}$ term makes exact solutions impossible for $N > 1$.

### 7.2 Slater Determinants

**Definition 5 (Slater Determinant):** The antisymmetric wavefunction for $N$ electrons:

$$\Psi(1,2,\ldots,N) = \frac{1}{\sqrt{N!}}\begin{vmatrix} \chi_1(1) & \chi_2(1) & \cdots & \chi_N(1) \\ \chi_1(2) & \chi_2(2) & \cdots & \chi_N(2) \\ \vdots & \vdots & \ddots & \vdots \\ \chi_1(N) & \chi_2(N) & \cdots & \chi_N(N) \end{vmatrix}$$

where $\chi_i$ is a spin-orbital. The determinant ensures antisymmetry under particle exchange,
automatically satisfying the Pauli principle.

### 7.3 Hartree-Fock Method

**Theorem 8 (Hartree-Fock Equations):** The Hartree-Fock method approximates each electron as moving
in the average field of the others:

$$\hat{F}\,\phi_i = \varepsilon_i\,\phi_i$$

where $\hat{F}$ is the Fock operator and $\varepsilon_i$ are orbital energies. Koopmans' theorem
relates orbital energies to ionization potentials:

$$\text{IP} \approx -\varepsilon_i$$

## 8. The Born-Oppenheimer Approximation

### 8.1 Separation of Nuclear and Electronic Motion

**Theorem 9 (Born-Oppenheimer Approximation):** Since nuclei are much heavier than electrons
($m_p/m_e \approx 1836$), the electronic and nuclear motions can be separated:

$$\Psi_{\text{total}} = \psi_{\text{elec}}(\mathbf{r}; \mathbf{R})\,\psi_{\text{nuc}}(\mathbf{R})$$

The electronic Schrödinger equation is solved for fixed nuclear positions, giving the **potential
energy surface (PES)**.

### 8.2 Potential Energy Surface

The PES defines:
- **Equilibrium geometry:** Minimum on the PES.
- **Transition state:** Saddle point (first-order saddle point, one imaginary frequency).
- **Vibrational frequencies:** Second derivatives of the PES at the minimum.

## 9. Molecular Orbital Theory

### 9.1 Linear Combination of Atomic Orbitals (LCAO)

**Definition 6 (LCAO-MO):** Molecular orbitals are formed as linear combinations of atomic orbitals:

$$\psi_i = \sum_\mu c_{\mu i}\,\phi_\mu$$

### 9.2 The HOMO-LUMO Gap

**Definition 7 (HOMO and LUMO):** The **highest occupied molecular orbital (HOMO)** and **lowest
unoccupied molecular orbital (LUMO)** are frontier orbitals.

The HOMO-LUMO gap $\Delta E = \varepsilon_{\text{LUMO}} - \varepsilon_{\text{HOMO}}$ correlates with:
- Chemical reactivity (smaller gap = more reactive).
- Electronic absorption spectra.
- Electrical conductivity in extended systems.

### 9.3 Diatomic Molecules: MO Diagrams

**Homo-nuclear diatomics (second period):**

For $\text{O}_2$, $\text{F}_2$ (heavier): $\sigma_{2s} < \sigma_{2s}^* < \sigma_{2p_z} < \pi_{2p_x} = \pi_{2p_y} < \pi_{2p_x}^* = \pi_{2p_y}^* < \sigma_{2p_z}^*$

For $\text{Li}_2$ through $\text{N}_2$ (lighter): $\sigma_{2s} < \sigma_{2s}^* < \pi_{2p_x} = \pi_{2p_y} < \sigma_{2p_z} < \pi_{2p_x}^* = \pi_{2p_y}^* < \sigma_{2p_z}^*$

**Bond order:**

$$\text{BO} = \frac{1}{2}(n_b - n_a)$$

where $n_b$ is the number of bonding electrons and $n_a$ is the number of antibonding electrons.

**Example 3:** $\text{O}_2$ has the configuration $(\sigma_{2s})^2(\sigma_{2s}^*)^2(\sigma_{2p_z})^2(\pi_{2p_x})^2(\pi_{2p_y})^2(\pi_{2p_x}^*)^1(\pi_{2p_y}^*)^1$.

Bond order $= \frac{1}{2}(10 - 6) = 2$.

$\text{O}_2$ is paramagnetic (two unpaired electrons in $\pi^*$ orbitals).

$\blacksquare$

### 9.4 Heteronuclear Diatomic Molecules

For heteronuclear diatomics like CO or HF, the MOs are weighted combinations where the more
electronegative atom contributes more to bonding orbitals. Electronegativity differences shift the
energy levels.

### 9.5 Polyatomic Molecular Orbitals

**Definition 8 (Symmetry Adapted Linear Combinations):** For polyatomic molecules, symmetry-adapted
linear combinations (SALCs) of atomic orbitals are constructed using group theory.

## 10. Huckel Molecular Orbital Theory

### 10.1 Approximations

Huckel theory makes three approximations for $\pi$-electron systems:
1. Only $\pi$ electrons are considered explicitly.
2. $\langle \phi_\mu | \hat{H} | \phi_\mu \rangle = \alpha$ (Coulomb integral, same for all $p$ orbitals).
3. $\langle \phi_\mu | \hat{H} | \phi_\nu \rangle = \beta$ (resonance integral, nonzero only for bonded neighbors).
4. Overlap integrals: $\langle \phi_\mu | \phi_\nu \rangle = \delta_{\mu\nu}$.

### 10.2 The Huckel Secular Determinant

For ethylene (2 $\pi$ centers):

$$\begin{vmatrix} \alpha - E & \beta \\ \beta & \alpha - E \end{vmatrix} = 0$$

Setting $x = (\alpha - E)/\beta$:

$$x^2 - 1 = 0 \implies x = \pm 1 \implies E = \alpha \pm \beta$$

The bonding orbital has $E = \alpha + \beta$ and the antibonding orbital has $E = \alpha - \beta$.

### 10.3 Benzene

For benzene, the secular determinant gives $x^6 - 6x^4 + 9x^2 - 4 = 0$ with roots $x = \pm 2, \pm 1, \pm 1$.

Energy levels: $E = \alpha + 2\beta$, $\alpha + \beta$ (doubly degenerate), $\alpha - \beta$ (doubly degenerate), $\alpha - 2\beta$.

**Definition 9 (Huckel Rule):** A planar monocyclic system with $(4n + 2)$ $\pi$ electrons is aromatic.

Benzene ($n = 1$, 6 $\pi$ electrons) satisfies this rule.

### 10.4 Delocalization Energy

**Definition 10 (Delocalization Energy):** The energy lowering due to electron delocalization:

$$E_{\text{deloc}} = E_\pi(\text{delocalized}) - E_\pi(\text{localized})$$

For benzene: $E_\pi = 2(\alpha + 2\beta) + 4(\alpha + \beta) = 6\alpha + 8\beta$.
Three isolated double bonds: $3 \times 2(\alpha + \beta) = 6\alpha + 6\beta$.
Delocalization energy: $2\beta$.

## 11. Computational Chemistry Methods

### 11.1 Basis Sets

- **Minimal basis:** STO-3G — each orbital represented by 3 Gaussian functions.
- **Split-valence:** 3-21G, 6-31G — valence orbitals split into multiple functions.
- **Polarization:** 6-31G*, 6-31G** — add $d$ functions on heavy atoms, $p$ on H.
- **Diffuse:** 6-31+G* — add diffuse functions for anions and excited states.

### 11.2 Post-Hartree-Fock Methods

- **Moller-Plesset perturbation theory (MP2, MP4):** Includes electron correlation.
- **Configuration Interaction (CI):** Expands the wavefunction in excited configurations.
- **Coupled Cluster (CCSD(T)):** Gold standard for single-reference systems.
- **Density Functional Theory (DFT):** Uses electron density instead of wavefunction; B3LYP is a
  popular functional.

### 11.3 Basis Set Superposition Error (BSSE)

**Definition 11 (BSSE):** In calculating interaction energies, each monomer artificially borrows
basis functions from the other. Corrected using the counterpoise method.

## 12. Perturbation Theory

### 12.1 Time-Independent Perturbation Theory

**Theorem 10 (First-Order Correction):** For $\hat{H} = \hat{H}_0 + \hat{H}'$:

$$E_n^{(1)} = \langle \psi_n^{(0)} | \hat{H}' | \psi_n^{(0)} \rangle$$

$$\psi_n^{(1)} = \sum_{m \neq n} \frac{\langle \psi_m^{(0)} | \hat{H}' | \psi_n^{(0)} \rangle}{E_n^{(0)} - E_m^{(0)}}\,\psi_m^{(0)}$$

**Theorem 11 (Second-Order Energy Correction):**

$$E_n^{(2)} = \sum_{m \neq n} \frac{|\langle \psi_m^{(0)} | \hat{H}' | \psi_n^{(0)} \rangle|^2}{E_n^{(0)} - E_m^{(0)}}$$

### 12.2 The Variational Principle

**Theorem 12 (Variational Principle):** For any trial wavefunction $\tilde{\Psi}$:

$$\langle \tilde{\Psi} | \hat{H} | \tilde{\Psi} \rangle \geq E_0$$

where $E_0$ is the true ground state energy. This underpins the Hartree-Fock and DFT methods.

## Common Pitfalls

1. **Confusing the time-dependent and time-independent Schrödinger equations.** The TDSE governs
   time evolution; the TISE gives stationary states and energy eigenvalues. **Fix:** Use the TISE for
   bound-state problems and the TDSE for time-dependent phenomena.
2. **Using the wrong angular momentum formula.** The magnitude is $|L| = \sqrt{\ell(\ell+1)}\hbar$, not
   $\ell\hbar$. **Fix:** This is a quantum correction; $L$ can never equal $n\hbar$ exactly.
3. **Applying the simple hydrogen energy formula to multi-electron atoms.** $E_n = -13.6/n^2$ only works
   for hydrogen-like atoms. **Fix:** For multi-electron atoms, use effective nuclear charge or
   empirical data.
4. **Ignoring the Pauli principle when writing configurations.** Each orbital holds at most 2 electrons.
   **Fix:** Always check that no more than 2 electrons occupy any orbital and that spin assignments are
   antisymmetric.
5. **Confusing Huckel $\alpha$ and $\beta$ signs.** $\beta < 0$ (bonding), so $E = \alpha + \beta$ is
   lower than $\alpha$. **Fix:** Remember that $\alpha$ is the reference and bonding lowers energy.
6. **Wrong orbital ordering for light vs heavy diatomics.** $\text{N}_2$ and earlier have $\pi_{2p} < \sigma_{2p}$;
   $\text{O}_2$ and later have $\sigma_{2p} < \pi_{2p}$. **Fix:** Check the $s$-$p$ mixing for
   $\text{Li}_2$ through $\text{N}_2$.
7. **Misinterpreting Koopmans' theorem.** $-\varepsilon_i$ equals the ionization energy only at the
   Hartree-Fock level with frozen orbitals. **Fix:** For DFT, the HOMO energy approximates IP but not
   exactly (Janak's theorem).

## Summary

- **Schrödinger equation:** $\hat{H}\psi = E\psi$; foundation of quantum chemistry.
- **Particle in a box:** $E_n = n^2h^2/(8mL^2)$; introduces quantization and zero-point energy.
- **Hydrogen atom:** $E_n = -13.6/n^2$ eV; quantum numbers $n, \ell, m_\ell, m_s$.
- **Angular momentum:** $|L| = \sqrt{\ell(\ell+1)}\hbar$; $L_z = m_\ell\hbar$; spin $s = 1/2$.
- **Pauli exclusion:** No two electrons share all four quantum numbers.
- **MO theory (LCAO):** $\psi_i = \sum c_{\mu i}\phi_\mu$; bonding vs antibonding; bond order.
- **Huckel theory:** $\pi$-electron approximation; aromaticity ($4n + 2$ rule).
- **Born-Oppenheimer:** Separates electronic and nuclear motion; defines the PES.
- **Variational principle:** Any trial energy $\geq E_0$; basis for computational methods.

## Worked Examples

### Example 1: Calculating the Energy of a Hydrogen Atom
**Problem:** Calculate the energy of the n=3 level of a hydrogen atom and the wavelength of the photon emitted in the transition n=3 to n=2.
**Solution:** E_n = -13.6/n^2 eV. E_3 = -13.6/9 = -1.51 eV. E_2 = -13.6/4 = -3.40 eV. Delta E = E_3 - E_2 = -1.51 - (-3.40) = 1.89 eV. lambda = hc/Delta E = 1240 eV nm / 1.89 eV = 656 nm (in the visible range, H-alpha line).

### Example 2: HOMO-LUMO Gap and MO Diagram
**Problem:** For O2, the molecular orbital ordering has pi_2p below sigma_2p. What is the bond order, and is O2 paramagnetic?
**Solution:** Electron configuration of O2 (12 electrons): sigma_2s^2 sigma_2s*^2 sigma_2p_z^2 pi_2p_x^2 pi_2p_y^2 pi_2p_x*^1 pi_2p_y*^1. Bond order = (1/2)(bonding - antibonding) = (1/2)(8 - 4) = 2. Since there are two unpaired electrons in the pi_2p* orbitals, O2 is paramagnetic.

## Cross-References

| Topic                    | Site        | Link                                                                  |
| ------------------------ | ----------- | --------------------------------------------------------------------- |
| Thermodynamics           | WyattsNotes | [View](/docs/university/chemistry/thermodynamics)                     |
| Statistical Mechanics    | WyattsNotes | [View](/docs/university/chemistry/statistical-mechanics)             |
| Spectroscopy (Organic)   | WyattsNotes | [View](/docs/university/chemistry/spectroscopy)                       |
| Quantum Mechanics        | WyattsNotes | [View](/docs/university/physics/quantum-mechanics)                    |
| Quantum Chemistry — MIT 5.61 | MIT OCW | [View](https://ocw.mit.edu/courses/5-61-physical-chemistry-fall-2013/) |
