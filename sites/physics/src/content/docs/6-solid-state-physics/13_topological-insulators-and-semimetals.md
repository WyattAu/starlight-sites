---

date: 2026-07-23T21:57:32+01:00
title: Topological Insulators and Semimetals
tags:
  - Physics
  - University
description: 'When an electron adiabatically traverses a closed loop in -space, its Bloch stat Comprehensive educational content coverage with definitions and practice proble'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "6 Solid State Physics", "url": "https://physics.wyattau.com/6-solid-state-physics"}, {"name": "13_topological Insulators And Semimetals", "url": "https://physics.wyattau.com/6-solid-state-physics/13_topological-insulators-and-semimetals"}]
}
</script>

### 13.1 Berry Phase

When an electron adiabatically traverses a closed loop in $\mathbf{k}$-space, its Bloch state
acquires a geometric phase:

$$\gamma_n(\mathcal{C}) = i\oint_{\mathcal{C}} \langle u_{n\mathbf{k}}|\nabla_{\mathbf{k}} u_{n\mathbf{k}}\rangle \cdot d\mathbf{k}$$

The **Berry curvature** is the $\mathbf{k}$-space analog of a magnetic field:

$$\boldsymbol{\Omega}_n(\mathbf{k}) = \nabla_{\mathbf{k}} \times \langle u_{n\mathbf{k}}|i\nabla_{\mathbf{k}} u_{n\mathbf{k}}\rangle$$

The Berry phase for a loop $\mathcal{C}$ enclosing area $\mathcal{A}$ is:

$$\gamma = \int_{\mathcal{A}} \boldsymbol{\Omega} \cdot d\mathcal{A}$$

For graphene near a Dirac point, the Berry phase is $\gamma = \pi$ (a half-flux quantum), which
leads to the **absence of backscattering** and contributes to the high mobility of graphene.

### 13.2 Topological Insulators

A **topological insulator** (TI) is an insulator in the bulk but has conducting states on its
surface. These surface states are topologically protected: they cannot be removed by surface
impurities or disorder (as long as time-reversal symmetry is preserved).

**Key properties:**

- Bulk has a band gap, but the surface has gapless Dirac-like states
- Surface states have a single Dirac cone (spin-momentum locking)
- The $Z_2$ topological invariant $\nu = 1$ distinguishes TIs ($\nu = 1$) from trivial insulators
  ($\nu = 0$)

**2D topological insulator** (quantum spin Hall insulator): Time-reversal-symmetric 2D system with
helical edge states. The conductance is quantised: $G = 2e^2/h$ (one channel per edge, with opposite
spins moving in opposite directions).

**Examples:** Bi$_2$Se$_3$Bi$_2$Te$_3$Sb$_2$Te$_3$ (3D TIs); HgTe/CdTe quantum wells (2D TIs).

### 13.3 Weyl and Dirac Semimetals

**Weyl semimetals** have band touchings at discrete points (Weyl nodes) in the Brillouin zone where
the dispersion is linear in all three directions:

$$\varepsilon(\mathbf{k}) = \pm\hbar v_F |\mathbf{k} - \mathbf{k}_W|$$

Weyl nodes come in pairs of opposite chirality and are topologically protected. Key signatures:

- **Fermi arcs**: Surface states connecting projections of Weyl nodes of opposite chirality
- **Chiral anomaly**: In parallel $\mathbf{E}$ and $\mathbf{B}$ fields, charge is pumped between
  Weyl nodes, giving negative magnetoresistance
- **Anomalous Hall effect**: Even without magnetic order

**Dirac semimetals** have fourfold-degenerate Dirac points (two overlapping Weyl points of opposite
chirality). Examples: Na$_3$Bi, Cd$_3$As$_2$.

### 13.4 Key Relationships

| Material class        | Bulk gap | Surface states | Topological invariant |
| --------------------- | -------- | -------------- | --------------------- |
| Trivial insulator     | Yes      | None           | $\nu = 0$             |
| Topological insulator | Yes      | Gapless Dirac  | $\nu = 1$             |
| Weyl semimetal        | No       | Fermi arcs     | Chern number          |
| Dirac semimetal       | No       | Bulk Dirac pts | None (protected by symmetry) |

### 13.5 Common Pitfalls

- **Confusing topological protection with robustness to all perturbations.** Surface states are
  protected only as long as the symmetry (e.g., time-reversal) that defines the topological phase is
  preserved. Magnetic impurities break time-reversal symmetry and can gap the surface states.
- **Assuming all surface states are topological.** Surface states can also arise from trivial
  band-bending effects. The hallmark of topological surface states is their helical spin texture and
  the fact that they span the bulk band gap.
- **Thinking the Berry phase is always quantised.** The Berry phase is quantised only when the loop
  encloses a degeneracy point or when protected by symmetry. Without symmetry protection it can take any value.
- **Confusing Weyl and Dirac semimetals.** Weyl nodes require breaking either inversion or
  time-reversal symmetry. Dirac nodes require both symmetries to be present and are less robust.

### 13.6 Applications

- **Spintronics:** The spin-momentum locking in TI surface states enables efficient spin-to-charge
  conversion without magnetic materials, promising for low-power spintronic devices.
- **Quantum computing:** Majorana zero modes can arise at the interface between a TI and a
  superconductor, forming the basis for topological quantum computation.
- **Photodetectors:** TIs exhibit broadband photoresponse from terahertz to visible due to their
  gapless surface states, enabling high-sensitivity photodetection.
- **Thermoelectrics:** The large Seebeck coefficient and low thermal conductivity of topological
  materials like Bi$_2$Te$_3$ make them excellent thermoelectric candidates.

<details>
<summary>Worked Example 13.1: Chern Number and Quantum Hall Effect</summary>

The **Chern number** for a 2D band is the integral of the Berry curvature over the Brillouin zone:

$$C = \frac{1}{2\pi}\int_{\text{BZ} \Omega_z(\mathbf{k})\, d^2k}$$

The Chern number is an integer (topological invariant). The Hall conductivity is quantised:

$$\sigma_{xy} = C\frac{e^2}{h}$$

For the integer quantum Hall effect with filling factor $\nu$, $C = \nu$.

The TKNN formula (Thouless, Kohmoto, Nightingale, den Nijs, 1982) established that the quantum Hall
conductance is a topological invariant, explaining its remarkable precision and robustness against
disorder.

</details>

<details>
<summary>Worked Example 13.2: Parity of $Z_2$ Invariant</summary>

The $Z_2$ invariant $\nu$ for a 3D TI with inversion symmetry can be computed from the parity
eigenvalues $\xi_{2m}(\Lambda_i)$ at the eight time-reversal-invariant momenta (TRIM) $\Lambda_i$:

$$(-1)^\nu = \prod_{i=1}^8 \prod_{m=1}^N \xi_{2m}(\Lambda_i)$$

where $N$ is the number of occupied bands and $\xi_{2m}(\Lambda_i) = \pm 1$ is the parity eigenvalue
of the $2m$-th Kramers pair at TRIM point $\Lambda_i$. A product of $-1$ indicates $\nu = 1$ (TI).

</details>

## Cross-References

- **[Electronic Band Structure](./5_electronic-band-structure.md)**: Provides the band theory foundation from which topological invariants are computed, including Berry phase and band inversions.
- **[Superconductivity](./7_superconductivity.md)**: Proximity-induced superconductivity at the interface with a topological insulator can host Majorana zero modes for topological quantum computation.
- **[Transport Properties](./8_transport-properties.md)**: The quantized conductance of topological edge states and the chiral anomaly in Weyl semimetals are transport phenomena beyond the Drude model.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Intuition

Topological insulators are materials that are insulating in the bulk but conducting on the surface, with guaranteed edge states that cannot be removed by disorder. The topology is a mathematical property of the electronic wavefunctions, analogous to the shape of a doughnut being different from a sphere. These surface states are protected by time-reversal symmetry and carry spin-polarized currents. Topological semimetals extend this idea, featuring band crossings that form points or lines in momentum space. These materials are platforms for exotic physics, including Majorana fermions that could serve as qubits for topological quantum computing.
