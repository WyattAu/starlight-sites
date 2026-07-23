---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "12_ising Model And Mean Field Theory", "url": "https://physics.wyattau.com/2-thermal-physics/12_ising-model-and-mean-field-theory"}]
}
</script>
title: Ising Model and Mean-Field Theory
tags:
  - Physics
  - University
description: "The Ising model is the simplest model of interacting spins on a lattice. Each si Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "12_ising Model And Mean Field Theory", "url": "https://physics.wyattau.com/2-thermal-physics/12_ising-model-and-mean-field-theory"}]
}
</script>

### 12.1 The Ising Model

The Ising model is the simplest model of interacting spins on a lattice. Each site $i$ has a spin
variable $\sigma_i \in \{-1, +1\}$.

$$\mathcal{H} = -J\sum_{\langle i,j \rangle}\sigma_i\sigma_j - h\sum_i \sigma_i$$

Where $J > 0$ is the ferromagnetic coupling, $\langle i,j \rangle$ denotes nearest-neighbor pairs,
and $h$ is the external magnetic field.

**Partition function** (in 1D with periodic boundary conditions, $N$ spins):

$$Z = \sum_{\{\sigma\}} \exp\!\left(\beta J \sum_i \sigma_i \sigma_{i+1} + \beta h \sum_i \sigma_i\right)$$

This can be evaluated using the **transfer matrix** method. Define:

$$\mathbf{T} = \begin{pmatrix} e^{\beta J + \beta h} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J - \beta h} \end{pmatrix}$$

Then $Z = \text{Tr}(\mathbf{T}^N) = \lambda_+^N + \lambda_-^N$ where $\lambda_\pm$ are the
eigenvalues of $\mathbf{T}$.

In the thermodynamic limit ($N \to \infty$), $Z = \lambda_+^N$ where:

$$\lambda_+ = e^{\beta J}\cosh(\beta h) + \sqrt{e^{2\beta J}\sinh^2(\beta h) + e^{-2\beta J}}$$

**Key result:** The 1D Ising model has **no** phase transition at $T > 0$. The magnetization
$m = \langle\sigma\rangle \to 0$ as $h \to 0$ for all finite $T$.

### 12.2 Mean-Field Approximation

The mean-field (Weiss) approximation replaces each neighboring spin by its thermal average:

$$\sigma_i\sigma_j \approx \sigma_i\langle\sigma_j\rangle + \langle\sigma_i\rangle\sigma_j - \langle\sigma_i\rangle\langle\sigma_j\rangle$$

The effective Hamiltonian becomes:

$$\mathcal{H}_{\text{MF} = -\sum_i \left(zJm + h\right)\sigma_i + \frac{1}{2}N zJ m^2}$$

Where $z$ is the coordination number and $m = \langle\sigma\rangle$.

Each spin is independent, so:

$$m = \tanh\!\left[\beta(zJm + h)\right]$$

This is a **self-consistency equation** for $m$. For $h = 0$:

$$m = \tanh(\beta zJm)$$

Expanding for small $m$: $m \approx \beta zJ m - \frac{1}{3}(\beta zJ)^3 m^3$. Nonzero $m$ exists
when:

$$\beta zJ > 1 \implies T_c^{\text{MF} = \frac{zJ}{k_B}}$$

### 12.3 Exact Solution: 2D Ising Model (Onsager, 1944)

Onsager"s exact solution for the square lattice gives:

$$T_c = \frac{2J}{k_B \ln(1 + \sqrt{2})} \approx \frac{2.269J}{k_B}$$

The spontaneous magnetization below $T_c$:

$$m = \left[1 - \sinh^{-4}(2\beta_c J)\right]^{1/8}, \quad T < T_c$$

The specific heat diverges logarithmically at $T_c$:

$$C \sim -A\ln|T - T_c|$$

<details>
<summary>Worked Example 12.1: Mean-Field $T_c$ for Different Lattices</summary>

For $J = 1$ (in units of $k_B$):

| Lattice      | $z$ | $T_c^{\text{MF}}$ |
| ------------ | --- | ----------------- |
| Linear chain | 2   | 2                 |
| Square       | 4   | 4                 |
| Simple cubic | 6   | 6                 |
| BCC          | 8   | 8                 |
| FCC          | 12  | 12                |

Compare with the exact $T_c$: 1D has no transition, 2D square has
$T_c \approx 2.269$3D (numerical) $T_c \approx 4.51$. Mean-field overestimates $T_c$ in all cases,
with the error decreasing as $z$ (dimensionality) increases.

</details>

<details>
<summary>Worked Example 12.2: 1D Ising Free Energy</summary>

For the 1D Ising model with $h = 0$The transfer matrix eigenvalues are:

$$\lambda_\pm = e^{\beta J} \pm e^{-\beta J}$$

The free energy per spin in the thermodynamic limit:

$$f = -k_B T \ln\lambda_+ = -k_B T \ln\!\left(2\cosh\frac{J}{k_B T}\right)$$

The internal energy per spin:

$$u = -\frac{\partial \ln\lambda_+}{\partial \beta} = -J\tanh\frac{J}{k_B T}$$

The specific heat:

$$c = \frac{\partial u}{\partial T} = \frac{J^2}{k_B T^2}\text{sech}^2\!\left(\frac{J}{k_B T}\right)$$

This is a smooth function with no singularity — confirming no phase transition in 1D.

</details>

### 12.4 Critical Exponents and Scaling

Near the critical temperature, physical quantities follow power-law behaviour characterised by
**critical exponents**:

$$m \sim (T_c - T)^{\beta}, \quad T < T_c$$
$$\chi \sim |T - T_c|^{-\gamma}, \quad C \sim |T - T_c|^{-\alpha}$$
$$\xi \sim |T - T_c|^{-\nu}$$

Where $m$ is magnetisation, $\chi$ is susceptibility, $C$ is specific heat, and $\xi$ is the
correlation length.

**Mean-field values:** $\beta = 1/2$, $\gamma = 1$, $\alpha = 0$ (jump), $\nu = 1/2$.

**2D Ising exact values:** $\beta = 1/8$, $\gamma = 7/4$, $\alpha = 0$ (log), $\nu = 1$.

Mean-field theory is exact above the upper critical dimension ($d > 4$) but gives incorrect exponents
for $d < 4$. The exponents depend only on dimensionality and symmetry — not on microscopic details
— a property called **universality**.

### 12.5 Key Relationships

| Quantity | Mean-Field Theory | 2D Ising (Exact) | 3D Ising (Numerical) |
| -------- | ----------------- | ------------------ | ---------------------- |
| $T_c$ (square lattice, $J=1$) | 4 | 2.269 | ~4.51 |
| $\beta$ | 1/2 | 1/8 | ~0.326 |
| $\gamma$ | 1 | 7/4 | ~1.237 |
| $\alpha$ | 0 (jump) | 0 (log) | ~0.110 |
| $\nu$ | 1/2 | 1 | ~0.630 |

### 12.6 Applications

**Magnetic materials.** The Ising model captures the essential physics of ferromagnetic phase
transitions. The spontaneous magnetisation below $T_c$ corresponds to permanent magnetisation in
ferromagnets like iron and nickel.

**Binary alloys.** Replacing spin up/down with atom types A/B, the Ising model describes
order-disorder transitions in alloys (e.g., brass, CuZn). The coupling $J$ represents the energy
preference for unlike neighbours.

**Lattice gases.** Mapping $\sigma_i = \pm 1$ to occupation numbers $n_i = (1 + \sigma_i)/2$
gives a model of fluid adsorption on surfaces, where the critical point corresponds to the liquid-gas
critical point.

**Neural networks.** The Hopfield model of associative memory is formally equivalent to an Ising
model with random couplings, where stored memories correspond to ground states.

## Intuition

The Ising model is the simplest system that shows how local interactions create global order. Each spin is like a person who copies their neighbors' opinions. Below the critical temperature, the copying wins and everyone aligns. Above it, thermal noise randomizes opinions. Mean-field theory assumes each spin sees only the average behavior of its neighbors, like a voter influenced by the national mood rather than individual neighbors. This approximation ignores fluctuations but captures the essential physics: a phase transition occurs when the coupling strength overcomes thermal disorder.

## Common Mistakes

**Mistake 1: Assuming mean-field theory is exact in all dimensions**
Mean-field theory overestimates the critical temperature and gives incorrect critical exponents for dimensions below the upper critical dimension ($d < 4$). For the 2D Ising model, mean-field theory predicts $T_c = 4J/k_B$ while the exact Onsager solution gives $T_c \approx 2.269J/k_B$. The approximation improves as dimensionality increases because each spin has more neighbors, making the mean-field assumption more accurate.

**Mistake 2: Confusing the partition function of the 1D Ising model with a phase transition**
The 1D Ising model has no phase transition at any finite temperature. The transfer matrix eigenvalues $\lambda_+$ and $\lambda_-$ are always distinct for $T > 0$, so the free energy is analytic. Students sometimes mistake the mathematical structure of the transfer matrix for evidence of a phase transition, but the free energy has no singularity.

**Mistake 3: Assuming critical exponents depend on microscopic details**
Critical exponents are universal: they depend only on the dimensionality of the system and the symmetry of the order parameter, not on the coupling constant $J$ or lattice structure. This universality means that the 2D Ising model on a square lattice and on a triangular lattice have the same critical exponents despite different microscopic Hamiltonians.

## Cross-References

- [Thermodynamic Response Functions](/physics/2-thermal-physics/17_thermodynamic-response-functions) -- The susceptibility and specific heat divergences near $T_c$ are examples of the response functions analysed in that chapter.
- [Irreversible Thermodynamics and Fluctuations](/physics/2-thermal-physics/19_irreversible-thermodynamics-and-fluctuations) -- The fluctuation-dissipation theorem connects the susceptibility divergence to spin fluctuations near criticality.
- [The Debye Model of Solids](/physics/2-thermal-physics/16_the-debye-model-of-solids) -- The lattice dynamics and phonon spectrum of solids provide the microscopic foundation for understanding spin-phonon coupling in magnetic materials.


- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
