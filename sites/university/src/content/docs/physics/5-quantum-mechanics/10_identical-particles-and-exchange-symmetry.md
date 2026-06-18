---
title: Identical Particles and Exchange Symmetry
tags:
  - Physics
  - University
description: ""s first rule**: parallel spins are energetically favourable
for atoms because the exchange interaction lowers the Coulomb repulsion.

### 9.3 The Helium Atom

The helium Hamiltonian (ignoring nuclear motion):

$$\hat{H} = -\frac{\hbar^2}{2m_e}\left(\nabla_1^2 + \nabla_2^2\right) - \frac{2e^2}{4\pi\varepsilon_0 r_1} - \frac{2e^2}{4\pi\varepsilon_0 r_2} + \frac{e^2}{4\pi\varepsilon_0|\mathbf{r}_1 - \mathbf{r}_2|}$$

**Ground state (parahelium):** Both electrons in the $1s$ orbital with opposite spins (singlet). The
spatial part is symmetric: $\psi_{100}(\mathbf{r}_1)\psi_{100}(\mathbf{r}_2)$.

**First-order perturbation theory** for the electron-electron repulsion:

$$E^{(1)} = \frac{5}{4}\frac{e^2}{4\pi\varepsilon_0 a_0} = \frac{5}{2}\times 13.6\ \text{eV} = 34.0\ \text{eV}$$

The unperturbed ground state energy is $E^{(0)} = 2 \times (-54.4\ \text{eV}) = -108.8$ eV (two
electrons in $Z = 2$ Coulomb potential). Including perturbation: $E \approx -108.8 + 34.0 = -74.8$
eV. The experimental value is $-79.0$ eV.

**Excited states:** When one electron is excited to $1s\,nl$The spin configuration matters:

- **Parahelium** (singlet, $S = 0$): symmetric spatial, antisymmetric spin. Lower energy for given
  configuration.
- **Orthohelium** (triplet, $S = 1$): antisymmetric spatial, symmetric spin. Higher energy.

The **exchange integral** $K$ and **direct integral** $J$:

$$J = \iint |\psi_a(1)|^2\frac{e^2}{4\pi\varepsilon_0 r_{12}}|\psi_b(2)|^2\, d^3r_1 d^3r_2$$

$$K = \iint \psi_a^*(1)\psi_b^*(2)\frac{e^2}{4\pi\varepsilon_0 r_{12}}\psi_b(1)\psi_a(2)\, d^3r_1 d^3r_2$$

The energy splitting between singlet and triplet is $2K$With the triplet lower by $2K$.

<details>
<summary>Worked Example 9.1: Helium $1s2s$ States</summary>

For the $1s\,2s$ configuration of helium:

$$J_{1s,2s} = \frac{e^2}{4\pi\varepsilon_0}\int |\psi_{1s}(1)|^2\frac{1}{r_{12}}|\psi_{2s}(2)|^2\, d^3r_1 d^3r_2$$

$$K_{1s,2s} = \frac{e^2}{4\pi\varepsilon_0}\int \psi_{1s}^*(1)\psi_{2s}^*(2)\frac{1}{r_{12}}\psi_{2s}(1)\psi_{1s}(2)\, d^3r_1 d^3r_2$$

Evaluating these (using the multipole expansion
$1/r_{12} = \sum_l r_<^l/r_>^{l+1}\,P_l(\cos\theta)$):

$$J_{1s,2s} \approx 0.42\ \text{Ry} = 5.7\ \text{eV}$$

$$K_{1s,2s} \approx 0.032\ \text{Ry} = 0.43\ \text{eV}$$

The singlet (parahelium) has energy $E = E_0 + J + K$And the triplet (orthohelium) has
$E = E_0 + J - K$.

The splitting: $E_{\text{singlet} - E_{\text{triplet} = 2K \approx 0.86}}$ eV. This is the exchange
splitting.

The orthohelium $2^3S$ state is metastable: it cannot decay to the ground state by electric dipole
transition (because $\Delta S = 0$ for E1 transitions, and the ground state is a singlet). Its
lifetime is $\sim 10^4$ s.

</details>

### 9.4 Slater Determinants

For $N$ fermions, the antisymmetric wavefunction is efficiently written as a **Slater determinant**:

$$\Psi(1, 2, \ldots, N) = \frac{1}{\sqrt{N!}}\begin{vmatrix} \phi_1(1) & \phi_2(1) & \cdots & \phi_N(1) \\ \phi_1(2) & \phi_2(2) & \cdots & \phi_N(2) \\ \vdots & \vdots & \ddots & \vdots \\ \phi_1(N) & \phi_2(N) & \cdots & \phi_N(N) \end{vmatrix}$$

**Properties:**

- Swapping any two rows (particles) changes the sign
- If any two columns (orbitals) are identical, the determinant vanishes (Pauli exclusion)
- The normalisation is correct if the spin-orbitals $\phi_i$ are orthonormal

