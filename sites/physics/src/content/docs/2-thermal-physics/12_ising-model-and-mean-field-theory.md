---

date: 2026-07-23T21:57:32+01:00
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

**History.** Mean field theory is older than the model it describes: Pierre Weiss postulated his molecular field in 1907 to explain ferromagnetism, two decades before the Ising model existed. Ernst Ising's 1925 thesis then killed the one-dimensional case, and the two-dimensional case waited for Lars Onsager, who presented his transfer-matrix solution in 1942 and published the full derivation only in 1944. Chen-Ning Yang completed the spontaneous magnetisation, with its exact exponent $\beta = 1/8$, in 1952. No exact solution exists in three dimensions to this day.

**Ponder (attempt the method).** The one-dimensional partition function sums $2^N$ configurations. Attempt to invent a method that never performs the exponential sum: factorise each nearest-neighbour bond's Boltzmann weight into a 2 by 2 matrix, and write the total sum as a trace. What survives the thermodynamic limit?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Write $T(\sigma, \sigma') = \exp[\beta J \sigma \sigma' + \beta h (\sigma + \sigma')/2]$: the bond weight as a matrix element. The total sum factorises into $Z = \mathrm{Tr}\, \mathbf{T}^N = \lambda_+^N + \lambda_-^N$, and as $N \to \infty$ only the largest eigenvalue remains: the free energy per spin is a logarithm of one number. The exponential count became an algebra problem, and the same move, enlarged to $4 \times 4$ matrices, is Onsager's 1944 solution of the square lattice.

</div>
</details>

### 12.1 The Ising Model

The Ising model is the simplest model of interacting spins on a lattice. Each site $i$ has a spin
variable $\sigma_i \in \{-1, +1\}$.

$$
\mathcal{H} = -J\sum_{\langle i,j \rangle}\sigma_i\sigma_j - h\sum_i \sigma_i
$$

Where $J > 0$ is the ferromagnetic coupling, $\langle i,j \rangle$ denotes nearest-neighbor pairs,
and $h$ is the external magnetic field.

**Partition function** (in 1D with periodic boundary conditions, $N$ spins):

$$
Z = \sum_{\{\sigma\}} \exp\!\left(\beta J \sum_i \sigma_i \sigma_{i+1} + \beta h \sum_i \sigma_i\right)
$$

This can be evaluated using the **transfer matrix** method. Define:

$$
\mathbf{T} = \begin{pmatrix} e^{\beta J + \beta h} & e^{-\beta J} \\ e^{-\beta J} & e^{\beta J - \beta h} \end{pmatrix}
$$

Then $Z = \text{Tr}(\mathbf{T}^N) = \lambda_+^N + \lambda_-^N$ where $\lambda_\pm$ are the
eigenvalues of $\mathbf{T}$.

In the thermodynamic limit ($N \to \infty$), $Z = \lambda_+^N$ where:

$$
\lambda_+ = e^{\beta J}\cosh(\beta h) + \sqrt{e^{2\beta J}\sinh^2(\beta h) + e^{-2\beta J}}
$$

**Key result:** The 1D Ising model has **no** phase transition at $T > 0$. The magnetization
$m = \langle\sigma\rangle \to 0$ as $h \to 0$ for all finite $T$.

**Ponder (attempt the clash).** Mean field gives the magnetisation exponent $\beta = 1/2$ from the $\tanh$ expansion; Onsager's exact square lattice gives $\beta = 1/8$. Attempt to diagnose why the same expansion that works at high temperature fails precisely at the critical point, and why mean field becomes exact above $d = 4$.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The expansion assumes each spin sees the average field; near $T_c$ the fluctuations of the local field grow without bound and the assumption collapses. Fluctuations weaken as coordination grows: each spin's field is an average over $z$ neighbours with relative spread about $1/\sqrt{z}$, and $z$ grows without bound as the dimension rises. Above the upper critical dimension $d = 4$ the fluctuations are harmless and mean field is exact; below it they renormalise the exponents, which is precisely what the renormalisation group computes.

</div>
</details>

### 12.2 Mean-Field Approximation

The mean-field (Weiss) approximation replaces each neighboring spin by its thermal average:

$$
\sigma_i\sigma_j \approx \sigma_i\langle\sigma_j\rangle + \langle\sigma_i\rangle\sigma_j - \langle\sigma_i\rangle\langle\sigma_j\rangle
$$

The effective Hamiltonian becomes:

$$
\mathcal{H}_{\text{MF} = -\sum_i \left(zJm + h\right)\sigma_i + \frac{1}{2}N zJ m^2}
$$

Where $z$ is the coordination number and $m = \langle\sigma\rangle$.

Each spin is independent, so:

$$
m = \tanh\!\left[\beta(zJm + h)\right]
$$

This is a **self-consistency equation** for $m$. For $h = 0$:

$$
m = \tanh(\beta zJm)
$$

Expanding for small $m$: $m \approx \beta zJ m - \frac{1}{3}(\beta zJ)^3 m^3$. Nonzero $m$ exists
when:

$$
\beta zJ > 1 \implies T_c^{\text{MF} = \frac{zJ}{k_B}}
$$

### 12.3 Exact Solution: 2D Ising Model (Onsager, 1944)

Onsager's exact solution for the square lattice gives:

$$
T_c = \frac{2J}{k_B \ln(1 + \sqrt{2})} \approx \frac{2.269J}{k_B}
$$

The spontaneous magnetization below $T_c$:

$$
m = \left[1 - \sinh^{-4}(2\beta_c J)\right]^{1/8}, \quad T < T_c
$$

The specific heat diverges logarithmically at $T_c$:

$$
C \sim -A\ln|T - T_c|
$$

<details>
<summary>Worked Example 12.1: Mean-Field $T_c$ for Different Lattices</summary>

For $J = 1$ (in units of $k_B$):

<div class="table-wrap">

| Lattice      | $z$ | $T_c^{\text{MF}}$ |
| ------------ | --- | ----------------- |
| Linear chain | 2   | 2                 |
| Square       | 4   | 4                 |
| Simple cubic | 6   | 6                 |
| BCC          | 8   | 8                 |
| FCC          | 12  | 12                |

</div>

Compare with the exact $T_c$: 1D has no transition, 2D square has
$T_c \approx 2.269$3D (numerical) $T_c \approx 4.51$. Mean-field overestimates $T_c$ in all cases,
with the error decreasing as $z$ (dimensionality) increases.

</details>

<details>
<summary>Worked Example 12.2: 1D Ising Free Energy</summary>

For the 1D Ising model with $h = 0$ The transfer matrix eigenvalues are:

$$
\lambda_\pm = e^{\beta J} \pm e^{-\beta J}
$$

The free energy per spin in the thermodynamic limit:

$$
f = -k_B T \ln\lambda_+ = -k_B T \ln\!\left(2\cosh\frac{J}{k_B T}\right)
$$

The internal energy per spin:

$$
u = -\frac{\partial \ln\lambda_+}{\partial \beta} = -J\tanh\frac{J}{k_B T}
$$

The specific heat:

$$
c = \frac{\partial u}{\partial T} = \frac{J^2}{k_B T^2}\text{sech}^2\!\left(\frac{J}{k_B T}\right)
$$

This is a smooth function with no singularity, confirming no phase transition in 1D.

</details>

### 12.4 Critical Exponents and Scaling

Near the critical temperature, physical quantities follow power-law behaviour characterised by
**critical exponents**:

$$
m \sim (T_c - T)^{\beta}, \quad T < T_c
$$
$$
\chi \sim |T - T_c|^{-\gamma}, \quad C \sim |T - T_c|^{-\alpha}
$$
$$
\xi \sim |T - T_c|^{-\nu}
$$

Where $m$ is magnetisation, $\chi$ is susceptibility, $C$ is specific heat, and $\xi$ is the
correlation length.

**Mean-field values:** $\beta = 1/2$, $\gamma = 1$, $\alpha = 0$ (jump), $\nu = 1/2$.

**2D Ising exact values:** $\beta = 1/8$, $\gamma = 7/4$, $\alpha = 0$ (log), $\nu = 1$.

Mean-field theory is exact above the upper critical dimension ($d > 4$) but gives incorrect exponents
for $d < 4$. The exponents depend only on dimensionality and symmetry, not on microscopic details
- a property called **universality**.

### 12.5 Key Relationships

<div class="table-wrap">

| Quantity | Mean-Field Theory | 2D Ising (Exact) | 3D Ising (Numerical) |
| -------- | ----------------- | ------------------ | ---------------------- |
| $T_c$ (square lattice, $J=1$) | 4 | 2.269 | ~4.51 |
| $\beta$ | 1/2 | 1/8 | ~0.326 |
| $\gamma$ | 1 | 7/4 | ~1.237 |
| $\alpha$ | 0 (jump) | 0 (log) | ~0.110 |
| $\nu$ | 1/2 | 1 | ~0.630 |

</div>

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

:::note[Quick check]

1. Write the Ising Hamiltonian and explain each symbol's role.
2. How does the transfer matrix evaluate the 1D partition function, and what is the model's key 1D verdict?
3. State the Weiss mean-field decoupling of $\sigma_i \sigma_j$.
4. Write the self-consistency equation for $m$ with and without a field.
5. Where does the mean-field critical temperature $T_c^{\text{MF}}$ sit, and how does the small-$m$ expansion locate it?
6. Compare the mean-field and exact critical temperatures for the square lattice.
7. List the mean-field critical exponents and the exact 2D Ising values.
8. What is the upper critical dimension, and what does universality claim?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\mathcal{H} = -J \sum_{\langle i,j \rangle} \sigma_i \sigma_j - h \sum_i \sigma_i$ with $\sigma_i \in \{-1, +1\}$; $J > 0$ couples nearest neighbours ferromagnetically and $h$ is the external field. **2.** $Z = \mathrm{Tr}\, \mathbf{T}^N = \lambda_+^N + \lambda_-^N$ with $\mathbf{T}$ the 2 by 2 bond matrix; in the thermodynamic limit $Z = \lambda_+^N$. Verdict: no phase transition at any $T > 0$; $m \to 0$ as $h \to 0$. **3.** $\sigma_i \sigma_j \approx \sigma_i \langle \sigma_j \rangle + \langle \sigma_i \rangle \sigma_j - \langle \sigma_i \rangle \langle \sigma_j \rangle$: each spin interacts with the average, not with individual neighbours. **4.** With field: $m = \tanh[\beta (zJm + h)]$. At $h = 0$: $m = \tanh(\beta zJm)$. **5.** $T_c^{\text{MF}} = zJ/k_B$: expanding $m = \tanh(\beta zJm)$ for small $m$ gives $m \approx \beta zJm - (\beta zJ)^3 m^3/3$, and a nonzero solution appears only when $\beta zJ > 1$. **6.** Mean field: $k_B T_c = zJ = 4J$ for $z = 4$; exact (Onsager): $k_B T_c/J = 2/\ln(1+\sqrt{2}) \approx 2.269$. The overestimate factor is $4/2.269 \approx 1.76$. **7.** Mean field: $\beta = 1/2$, $\gamma = 1$, $\alpha = 0$ (jump), $\nu = 1/2$. Exact 2D: $\beta = 1/8$, $\gamma = 7/4$, $\alpha = 0$ (logarithm), $\nu = 1$. **8.** Mean field is exact for $d > 4$ and wrong below: above $d = 4$, critical fluctuations are too weak to shift the exponents. Universality: the exponents depend only on dimensionality and symmetry, not on microscopic details.

</div>
</details>

:::

## Cross-References

- [Thermodynamic Response Functions](/2-thermal-physics/17_thermodynamic-response-functions/) -- The susceptibility and specific heat divergences near $T_c$ are examples of the response functions analysed in that chapter.
- [Irreversible Thermodynamics and Fluctuations](/2-thermal-physics/19_irreversible-thermodynamics-and-fluctuations/) -- The fluctuation-dissipation theorem connects the susceptibility divergence to spin fluctuations near criticality.
- [The Debye Model of Solids](/2-thermal-physics/16_the-debye-model-of-solids/) -- The lattice dynamics and phonon spectrum of solids provide the microscopic foundation for understanding spin-phonon coupling in magnetic materials.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Related in this track

- [Bose-Einstein Condensation](/2-thermal-physics/5_bose-einstein-condensation/)
- [Classical Limit and the Maxwell-Boltzmann Distribution](/2-thermal-physics/7_classical-limit-and-the-maxwell-boltzmann-distribution/)
- [Common Pitfalls](/2-thermal-physics/8_common-pitfalls/)
- [Fermi Gas at Finite Temperature](/2-thermal-physics/4_fermi-gas-at-finite-temperature/)
