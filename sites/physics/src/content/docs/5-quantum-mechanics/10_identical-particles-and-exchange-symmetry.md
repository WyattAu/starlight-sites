---

date: 2026-07-23T21:57:32+01:00
title: Identical Particles and Exchange Symmetry
tags:
  - Physics
  - University
description: "Identical particles and exchange symmetry: the symmetrisation postulate, bosons and fermions, the exchange interaction and why it is not a force, the helium atom, Slater determinants, and what the Pauli principle does and does not forbid. With recall prompts, counterexamples by name and interleaving problems. Tier U."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "10_identical Particles And Exchange Symmetry", "url": "https://physics.wyattau.com/5-quantum-mechanics/10_identical-particles-and-exchange-symmetry"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- What happens to the wave function when two identical particles are exchanged?
- What distinguishes a boson from a fermion?
- State the Pauli exclusion principle *precisely*.
- What is the exchange interaction, and where does it come from?
- Write the ground-state configuration of helium.

Check your answers against the text. Prompt 4 is the one with the most
misleading name in the subject: the exchange interaction is not an interaction.

## Motivation: exchange cannot be an operation

The symmetrisation postulate is usually stated as a rule about wave functions.
It is better understood as a statement about what "identical" means.

If two particles are genuinely identical, then exchanging them cannot change
anything measurable -- not the energy, not the probability density, not any
expectation value. Let $\hat{P}$ be the exchange operator. Then $\hat{P}$ and
every observable commute, which means $\hat{P}$ maps a state to a
*physically indistinguishable* state. Doing it twice returns the original
state, so

$$
\hat{P}^2 = I \quad\Longrightarrow\quad \hat{P} = \pm 1 .
$$

That is the entire derivation. There is no third option, because $\hat{P}$ is
Hermitian and its eigenvalues must square to one. Bosons are the $+1$
eigenstates, fermions the $-1$ eigenstates, and which one a particle is turns
out to be fixed by its spin.

**The exchange interaction is bookkeeping that behaves like a force.** Take two
electrons in a box. If their spins form a triplet, the spatial part is
antisymmetric and vanishes at $\mathbf{r}_1 = \mathbf{r}_2$; if singlet, it does
not. So the two states have *different Coulomb energies*, purely because the
electrons avoid each other in one case and not the other. No interaction term
was added. The "exchange energy" in ferromagnetism is exactly this, and it is
why magnets exist.

**What the Pauli principle actually forbids.** The usual phrasing -- "no two
fermions in the same state" -- is ambiguous. Two electrons *can* share the same
spatial wave function, as in helium's ground state, provided their spins
differ. What is forbidden is two fermions in the same *complete* state,
including spin. The precise statement is about the antisymmetry of the total
wave function, not about a rule for counting boxes.

### 10.1 Symmetrisation Postulate

For a system of $N$ identical particles, the wavefunction must satisfy:

$$
\psi(\ldots, \mathbf{r}_i, \ldots, \mathbf{r}_j, \ldots) = \pm\psi(\ldots, \mathbf{r}_j, \ldots, \mathbf{r}_i, \ldots)
$$

- **Bosons** (integer spin): symmetric ($+$ sign). Any number can occupy the same state.
- **Fermions** (half-integer spin): antisymmetric ($-$ sign). Pauli exclusion: no two fermions can
  occupy the same state.

For two particles, the properly symmetrised states are:

$$
\psi_S = \frac{1}{\sqrt{2}}\left[\psi_a(1)\psi_b(2) + \psi_b(1)\psi_a(2)\right] \quad \text{(bosons)}
$$

$$
\psi_A = \frac{1}{\sqrt{2}}\left[\psi_a(1)\psi_b(2) - \psi_b(1)\psi_a(2)\right] \quad \text{(fermions)}
$$

### 10.2 Exchange Interaction

Even without an explicit interaction potential, the requirement of (anti)symmetry leads to an
effective **exchange interaction**. For two electrons in a box, the probability of finding them
close together differs between the triplet (spatially antisymmetric, spin symmetric) and singlet
(spatially symmetric, spin antisymmetric) states:

$$
\left|\psi_{\text{triplet}}\right|^2 = 0 \quad \text{when } \mathbf{r}_1 = \mathbf{r}_2
$$

$$
\left|\psi_{\text{singlet}}\right|^2 > 0 \quad \text{when } \mathbf{r}_1 = \mathbf{r}_2}
$$

The triplet state keeps electrons apart (effective repulsion), while the singlet allows them to be
close. This is the origin of the **Hund's first rule**: parallel spins are energetically favourable
for atoms because the exchange interaction lowers the Coulomb repulsion.

### 10.3 The Helium Atom

The helium Hamiltonian (ignoring nuclear motion):

$$
\hat{H} = -\frac{\hbar^2}{2m_e}\left(\nabla_1^2 + \nabla_2^2\right) - \frac{2e^2}{4\pi\varepsilon_0 r_1} - \frac{2e^2}{4\pi\varepsilon_0 r_2} + \frac{e^2}{4\pi\varepsilon_0|\mathbf{r}_1 - \mathbf{r}_2|}
$$

**Ground state (parahelium):** Both electrons in the $1s$ orbital with opposite spins (singlet). The
spatial part is symmetric: $\psi_{100}(\mathbf{r}_1)\psi_{100}(\mathbf{r}_2)$.

**First-order perturbation theory** for the electron-electron repulsion:

$$
E^{(1)} = \frac{5}{4}\frac{e^2}{4\pi\varepsilon_0 a_0} = \frac{5}{2}\times 13.6\ \text{eV} = 34.0\ \text{eV}
$$

The unperturbed ground state energy is $E^{(0)} = 2 \times (-54.4\ \text{eV}) = -108.8$ eV (two
electrons in $Z = 2$ Coulomb potential). Including perturbation: $E \approx -108.8 + 34.0 = -74.8$
eV. The experimental value is $-79.0$ eV.

**Excited states:** When one electron is excited to $1s\,nl$ The spin configuration matters:

- **Parahelium** (singlet, $S = 0$): symmetric spatial, antisymmetric spin. Lower energy for given
  configuration.
- **Orthohelium** (triplet, $S = 1$): antisymmetric spatial, symmetric spin. Higher energy.

The **exchange integral** $K$ and **direct integral** $J$:

$$
J = \iint |\psi_a(1)|^2\frac{e^2}{4\pi\varepsilon_0 r_{12}}|\psi_b(2)|^2\, d^3r_1 d^3r_2
$$

$$
K = \iint \psi_a^*(1)\psi_b^*(2)\frac{e^2}{4\pi\varepsilon_0 r_{12}}\psi_b(1)\psi_a(2)\, d^3r_1 d^3r_2
$$

The energy splitting between singlet and triplet is $2K$ With the triplet lower by $2K$.

<details>
<summary>Worked Example 9.1: Helium $1s2s$ States</summary>

For the $1s\,2s$ configuration of helium:

$$
J_{1s,2s} = \frac{e^2}{4\pi\varepsilon_0}\int |\psi_{1s}(1)|^2\frac{1}{r_{12}}|\psi_{2s}(2)|^2\, d^3r_1 d^3r_2
$$

$$
K_{1s,2s} = \frac{e^2}{4\pi\varepsilon_0}\int \psi_{1s}^*(1)\psi_{2s}^*(2)\frac{1}{r_{12}}\psi_{2s}(1)\psi_{1s}(2)\, d^3r_1 d^3r_2
$$

Evaluating these (using the multipole expansion
$1/r_{12} = \sum_l r_<^l/r_>^{l+1}\,P_l(\cos\theta)$):

$$
J_{1s,2s} \approx 0.42\ \text{Ry} = 5.7\ \text{eV}
$$

$$
K_{1s,2s} \approx 0.032\ \text{Ry} = 0.43\ \text{eV}
$$

The singlet (parahelium) has energy $E = E_0 + J + K$ And the triplet (orthohelium) has
$E = E_0 + J - K$.

The splitting: $E_{\text{singlet} - E_{\text{triplet} = 2K \approx 0.86}}$ eV. This is the exchange
splitting.

The orthohelium $2^3S$ state is metastable: it cannot decay to the ground state by electric dipole
transition (because $\Delta S = 0$ for E1 transitions, and the ground state is a singlet). Its
lifetime is $\sim 10^4$ s.

</details>

### 10.4 Slater Determinants

For $N$ fermions, the antisymmetric wavefunction is efficiently written as a **Slater determinant**:

$$
\Psi(1, 2, \ldots, N) = \frac{1}{\sqrt{N!}}\begin{vmatrix} \phi_1(1) & \phi_2(1) & \cdots & \phi_N(1) \\ \phi_1(2) & \phi_2(2) & \cdots & \phi_N(2) \\ \vdots & \vdots & \ddots & \vdots \\ \phi_1(N) & \phi_2(N) & \cdots & \phi_N(N) \end{vmatrix}
$$

**Properties:**

- Swapping any two rows (particles) changes the sign
- If any two columns (orbitals) are identical, the determinant vanishes (Pauli exclusion)
- The normalisation is correct if the spin-orbitals $\phi_i$ are orthonormal

### 10.5 Key Relationships

- **Spin-statistics connection:** Particles with integer spin are bosons; half-integer spin are fermions. No exceptions in 3+1 dimensions.
- **Exchange energy:** $E_{\text{exchange}} = J \mp K$ where the sign depends on the spin configuration. The triplet (parallel spins) has energy $J - K$ and the singlet (antiparallel) has $J + K$.
- **Slater determinant size:** For $N$ particles each with $M$ available states, the Hilbert space dimension is $\binom{M}{N}$ for fermions versus $M^N$ for bosons.
- **Pfaffian for pairs:** For an even number of fermions, the antisymmetric state can also be written as a Pfaffian, which is computationally efficient for specific pairing structures.

### 10.6 Common Pitfalls

- **Forgetting normalisation:** The symmetrisation prefactor $1/\sqrt{2}$ in two-particle states is essential. Without it, the states are not normalised and probability conservation fails.
- **Confusing exchange with interaction:** The exchange splitting $2K$ arises from symmetry requirements, not from an explicit interaction potential between particles.
- **Assuming all particles are fermions or bosons:** Composite particles can be either. For example, $^4$ He atoms (2 protons, 2 neutrons, 2 electrons) are bosons, while $^3$ He atoms are fermions.
- **Neglecting spin in antisymmetrisation:** The full two-particle wavefunction (spatial $\times$ spin) must be antisymmetric for fermions. Using only the spatial part leads to incorrect results.

### 10.7 Applications

- **Electron gas in metals:** The Pauli exclusion principle forces electrons into progressively higher energy states, creating the Fermi sea. This accounts for the electronic specific heat and the stability of matter.
- **White dwarf and neutron star stability:** Electron degeneracy pressure (from the Pauli principle) supports white dwarfs against gravitational collapse. Neutron degeneracy pressure supports neutron stars.
- **Bose-Einstein condensation:** Below a critical temperature, a macroscopic fraction of bosons occupies the lowest energy state, producing superfluidity and coherent emission (atom lasers).
- **Magnetic ordering:** Hund's rules and exchange interactions determine whether a material is ferromagnetic or antiferromagnetic. The exchange integral $K > 0$ favours parallel alignment (ferromagnetism).

### 10.8 Worked Example: Three-Electron System

Consider three electrons confined to a one-dimensional box of length $L$. The single-particle energies are $E_n = n^2\pi^2\hbar^2/(2mL^2)$. The lowest configuration has two electrons in $n = 1$ (opposite spins) and one in $n = 2$.

The spatial part of the wavefunction must be antisymmetric under exchange of any two electrons. Using the Slater determinant with orbitals $\phi_1$, $\phi_1$, $\phi_2$ (where $\phi_1$ and $\phi_2$ are the spatial wavefunctions of the box), the antisymmetric state is:

$$
\Psi = \frac{1}{\sqrt{3!}}\begin{vmatrix} \phi_1(r_1)\alpha(1) & \phi_1(r_1)\beta(1) & \phi_2(r_1)\alpha(1) \\ \phi_1(r_2)\alpha(2) & \phi_1(r_2)\beta(2) & \phi_2(r_2)\alpha(2) \\ \phi_1(r_3)\alpha(3) & \phi_1(r_3)\beta(3) & \phi_2(r_3)\alpha(3) \end{vmatrix}
$$

The total energy is $E_1 + E_1 + E_2 = 6\pi^2\hbar^2/(2mL^2)$. The exchange splitting between the two possible spin configurations (total $S = 1/2$) depends on the exchange integral $K_{12}$ between the $n = 1$ and $n = 2$ states.

## Intuition

Identical particles are truly indistinguishable, not just similar. Swapping two electrons must give the same physics, which forces their wavefunction to be antisymmetric. This creates the exchange interaction, an effective force arising purely from symmetry, not from any physical interaction. The Pauli exclusion principle is a consequence: two fermions cannot occupy the same state because the antisymmetric wavefunction would vanish. Bosons, with symmetric wavefunctions, crowd together instead. This explains why electrons fill up energy levels in atoms, why white dwarfs resist collapse, and why laser light is coherent.

## Counterexamples worth knowing by name

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Exchanging two identical particles is a physical operation | no | it is unobservable by definition; that is the reason the postulate exists |
| The exchange interaction is a real potential | no | no interaction term is added; it is a kinetic-energy effect from antisymmetry |
| The Pauli principle forbids two electrons in the same spatial state | no | helium's ground state has both electrons in $1s$, with opposite spins; it forbids the same *complete* state |
| Bosons and fermions can be rotated into each other | no | which one a particle is depends on its spin, and is not a choice of basis |
| Symmetrisation only matters when the particles overlap | no | the state must be (anti)symmetrised globally; overlap affects whether you can *observe* it |
| A Slater determinant of $N$ electrons is just a compact notation | no | it *enforces* antisymmetry automatically, and expanding it is how the Pauli principle appears |
| The exchange energy is small | no | it is the binding energy of the hydrogen molecule, and the origin of ferromagnetism |
| Identical-particle statistics is a choice | no, in 3D | in two dimensions it is not, and anyons interpolate continuously between the two |

</div>

The first two rows are the same fact from different angles, and both are
frequently stated wrongly. The exchange interaction is the best example in
undergraduate physics of an effect that is real, measurable and large, and yet
is not a force.

The last row is the frontier item: in two dimensions, exchange is a *braid*
rather than a permutation, and $\hat{P}$ can have any phase. Anyons are real,
they have been observed, and they are the reason the topological quantum
computing programme exists.

## Where the research frontier is

- **Anyons and braiding.** In two dimensions the exchange group is the braid
  group, whose representations allow arbitrary phases. Abelian anyons have been
  observed in fractional quantum Hall systems; non-Abelian anyons are the
  proposed resource for topological quantum computing.
- **Bose-Einstein condensation.** A macroscopic number of bosons in one state.
  Predicted in 1925, first observed in 1995, now a working tool -- and its
  finite-size and interacting versions are still active.
- **Superconductivity.** Electrons are fermions and cannot condense; bound
  pairs are bosons and can. Superconductivity is exchange statistics with a
  mechanism for making the pairs.
- **Entanglement between identical particles.** Whether two indistinguishable
  particles can be said to be "entangled" at all is genuinely contested, since
  the particles have no individual identities to assign.
- **Fractional statistics in optical lattices.** Cold-atom experiments now
  realise statistical behaviour that has no condensed-matter analogue, and the
  theory of what can be measured is still being written.

## Interleaving problems

Mix these with [spin](/5-quantum-mechanics/7_spin/), [approximation
methods](/5-quantum-mechanics/8_approximation-methods/), [Linear
Algebra](https://mathematics.wyattau.com/2-linear-algebra/1_vectors-and-vector-spaces/),
[Thermodynamics and Statistical
Mechanics](/2-thermal-physics/21_thermodynamics-and-statistical-mechanics/) and
[Stochastic
Calculus](https://mathematics.wyattau.com/14-graduate-stochastic-analysis/1_ito-integration-and-formula/).

1. (Linear algebra.) Show that the exchange operator is Hermitian and that
   $\hat{P}^2 = I$, and hence that its eigenvalues are $\pm 1$. Then show that
   any two-particle state can be written as a sum of a symmetric and an
   antisymmetric part.
2. (Spin.) Show that the triplet states are symmetric and the singlet state is
   antisymmetric, and hence that the spatial wave function of a two-electron
   system must be antisymmetric in the triplet. Which combination gives the
   helium ground state, and why?
3. (Linear algebra.) Write the $N$-electron wave function as a Slater
   determinant, and show that setting two rows equal makes the determinant
   vanish. That is the Pauli principle, derived rather than asserted.
4. (Thermal physics.) Show that the Bose-Einstein distribution follows from
   maximising entropy subject to fixed particle number, and that the
   Fermi-Dirac distribution follows from the same argument with the occupation
   of each state capped at one. The difference is exactly the Pauli principle.
5. (Approximation methods.) Use first-order perturbation theory to estimate the
   ground-state energy of helium, treating the electron-electron repulsion as
   the perturbation. Compare with experiment and explain what the difference
   is called.
6. (Research.) In two dimensions, exchange is described by the braid group
   rather than the symmetric group. Explain why the braid group allows phases
   other than $\pm 1$, and what that implies about the existence of particles
   that are neither bosons nor fermions.

## Cross-References

- **[Spin](/5-quantum-mechanics/7_spin/)**: Spin is an intrinsic angular momentum that determines particle statistics and exchange symmetry.
- **[Angular Momentum and the Hydrogen Atom](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/)**: Angular momentum theory provides the foundation for understanding spin statistics.
- **[Approximation Methods](/5-quantum-mechanics/8_approximation-methods/)**: Perturbation theory and variational methods are essential for solving many-body quantum problems.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

