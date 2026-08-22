---

date: 2026-07-23T21:57:32+01:00
title: Transport Properties
tags:
  - Physics
  - University
description: "The treats conduction electrons as a classical gas scattering off ions with a me Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "6 Solid State Physics", "url": "https://physics.wyattau.com/6-solid-state-physics"}, {"name": "8_transport Properties", "url": "https://physics.wyattau.com/6-solid-state-physics/8_transport-properties"}]
}
</script>

### 8.1 Electrical Conductivity: Drude Model

The **Drude model** treats conduction electrons as a classical gas scattering off ions with a mean
Free time $\tau$.

Under an electric field $\mathbf{E}$The equation of motion:

$$m_e\frac{d\mathbf{v}}{dt} = -e\mathbf{E} - \frac{m_e\mathbf{v}}{\tau}$$

In steady state ($d\mathbf{v}/dt = 0$): $\mathbf{v}_d = -\frac{e\tau}{m_e}\mathbf{E}$.

The current density: $\mathbf{J} = -ne\mathbf{v}_d = \frac{ne^2\tau}{m_e}\mathbf{E}$.

The **Drude conductivity:**

$$\sigma = \frac{ne^2\tau}{m_e}$$

The **mean free path:** $\ell = v_F\tau$.

**Successes:** Explains Ohm"s law ($\mathbf{J} = \sigma\mathbf{E}$) and the Wiedemann--Franz law
($\kappa/\sigma = LT$ with $L = \pi^2 k_B^2/(3e^2)$).

**Failures:** Predicts the wrong temperature dependence ($\rho \propto T$ But experiments show
$\rho \propto T^5$ at low $T$ for pure metals). Predicts
$\gamma_{\mathrm{electron} = \frac{3}{2}nk_B}$ But experiments give
$\gamma_{\mathrm{electron} = \frac{\pi^2}{2}nk_B(T/T_F)}$ (much smaller).

### 8.2 The Boltzmann Transport Equation

The semiclassical distribution function $f(\mathbf{r}, \mathbf{k}, t)$ satisfies:

$$\frac{\partial f}{\partial t} + \mathbf{v}_{\mathbf{k}} \cdot \nabla_{\mathbf{r}} f - \frac{e\mathbf{E}}{\hbar}\cdot\nabla_{\mathbf{k}} f = \left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll}}$$

In the **relaxation time approximation:**

$$\left(\frac{\partial f}{\partial t}\right)_{\mathrm{coll} = -\frac{f - f_0}{\tau}}$$

Where $f_0$ is the equilibrium distribution.

**Solution for conductivity.** In a uniform electric field with $f = f_0 + f_1$:

$$f_1 = e\tau\mathbf{E}\cdot\mathbf{v}_{\mathbf{k}}\frac{\partial f_0}{\partial\varepsilon}$$

The conductivity becomes:

$$\sigma = \frac{e^2}{3}\int \tau(\varepsilon)\,v^2(\varepsilon)\,g(\varepsilon)\left(-\frac{\partial f_0}{\partial\varepsilon}\right) d\varepsilon$$

At low $T$, $-\partial f_0/\partial\varepsilon \approx \delta(\varepsilon - \varepsilon_F)$ So only
states Near $E_F$ contribute to transport. This explains why impurity scattering dominates at low
$T$ (even a small concentration of impurities affects states near $E_F$).

**Matthiessen's rule.** When multiple scattering mechanisms act independently, the total resistivity
Is approximately additive:

$$\rho(T) = \rho_0 + \rho_{\mathrm{ph}(T)}$$

Where $\rho_0$ is the residual resistivity (temperature-independent, from impurities and defects)
And $\rho_{\mathrm{ph}(T)}$ is the phonon contribution (proportional to $T$ at high $T$ and to $T^5$
At low $T$ via the Bloch--Grüneisen formula). The **resistance ratio**
$RRR = \rho(300\ \mathrm{K})/\rho_0$ Is a measure of sample purity.

**Bloch--Grüneisen formula.** For electron--phonon scattering in a free electron metal:

$$\rho_{\mathrm{ph}(T) \propto \left(\frac{T}{\Theta_D}\right)^5 \int_0^{\Theta_D/T} \frac{x^5}{(e^x - 1)(1 - e^{-x})}\,dx}$$

At high $T$ ($T \gt \Theta_D$): $\rho_{\mathrm{ph} \propto T}$ (linear, agreeing with the Drude
model). At low $T$ ($T \ll \Theta_D$): $\rho_{\mathrm{ph} \propto T^5}$Consistent with experiment.

### 8.3 Thermal Conductivity

The thermal conductivity of electrons:

$$\kappa_e = \frac{1}{3}c_e v_F \ell_e$$

Where $c_e = \frac{\pi^2}{2}nk_B(T/T_F)$ is the electronic specific heat. The phonon contribution:

$$\kappa_{\mathrm{ph} = \frac{1}{3}C_V v_s \ell_{\mathrm{ph}}}$$

The total thermal conductivity: $\kappa = \kappa_e + \kappa_{\mathrm{ph}}$.

### 8.4 The Hall Effect

When a magnetic field $\mathbf{B} = B\hat{\mathbf{z}}$ is applied perpendicular to a current
$\mathbf{J} = J_x\hat{\mathbf{x}}$A transverse electric field develops:

$$E_y = R_H J_x B$$

The **Hall coefficient:** $R_H = -1/(ne)$ for a single carrier type.

The **Hall angle:** $\theta_H = \arctan(E_y/E_x) = \omega_c\tau$ where $\omega_c = eB/m^*$ is the
Cyclotron frequency.

### 8.5 Effective Mass

Near a band extremum, the energy can be expanded:

$$\varepsilon(\mathbf{k}) = \varepsilon_0 + \frac{\hbar^2}{2}\sum_{ij}(m^{-1})_{ij}k_i k_j$$

The **effective mass tensor**
$(m^{-1})_{ij} = \frac{1}{\hbar^2}\frac{\partial^2 \varepsilon}{\partial k_i \partial k_j}$
Determines the response to external fields. For isotropic bands,
$m^* = \hbar^2/(d^2\varepsilon/dk^2)$.

A large effective mass means a flat band (small group velocity). A small effective mass means a
Steep band (high mobility).

### 8.6 Matthiessen's Rule: Worked Example

**Problem.** A copper wire has residual resistivity $\rho_0 = 2 \times 10^{-10}\ \Omega\cdot$m from
impurity scattering. At 300 K, the phonon contribution is $\rho_{\mathrm{ph}} = 1.7 \times
10^{-8}\ \Omega\cdot$m. What is the total resistivity and the resistance ratio RRR?

**Solution.** By Matthiessen's rule:

$$\rho(300\ \mathrm{K}) = \rho_0 + \rho_{\mathrm{ph}} = 2 \times 10^{-10} + 1.7 \times 10^{-8}
= 1.72 \times 10^{-8}\ \Omega\cdot\text{m}$$

The resistance ratio:

$$RRR = \frac{\rho(300\ \mathrm{K})}{\rho_0} = \frac{1.72 \times 10^{-8}}{2 \times 10^{-10}} = 86$$

A RRR of 86 indicates moderately pure copper. Ultra-pure samples can achieve RRR $> 1000$.
$\blacksquare$

### 8.7 Summary of Key Transport Relationships

| Property | Formula | Key Dependencies |
| -------- | ------- | ----------------- |
| Drude conductivity | $\sigma = ne^2\tau/m_e$ | Carrier density, scattering time |
| Mean free path | $\ell = v_F \tau$ | Fermi velocity, scattering time |
| Hall coefficient | $R_H = -1/(ne)$ | Carrier density (single band) |
| Thermal conductivity | $\kappa = \frac{1}{3}c_e v_F \ell_e$ | Electronic specific heat, velocity |
| Effective mass | $m^* = \hbar^2/(d^2\varepsilon/dk^2)$ | Band curvature |
| Matthiessen's rule | $\rho = \rho_0 + \rho_{\mathrm{ph}}(T)$ | Impurity + phonon scattering |
| Bloch-Gruneisen | $\rho_{\mathrm{ph}} \propto T^5$ at low $T$ | Phonon population, Umklapp |

### 8.7 Common Mistakes

**Mistake 1: Assuming that the Drude model is accurate at all temperatures.**
The Drude model works well at room temperature but fails at low temperatures, where quantum effects become important. The Drude model predicts $\rho \propto T$, but experiments show $\rho \propto T^5$ at low temperatures for pure metals. Do not assume that the Drude model is universally valid.

**Mistake 2: Confusing the mean free path with the interatomic spacing.**
The mean free path $\ell = v_F \tau$ is the average distance between scattering events, while the interatomic spacing is the distance between atoms in the lattice. In clean metals at low temperatures, the mean free path can be much larger than the interatomic spacing. Do not confuse the two concepts.

**Mistake 3: Forgetting that the Hall coefficient can be positive or negative.**
The Hall coefficient $R_H = -1/(ne)$ for a single-band metal with electron carriers. However, in materials with both electron and hole carriers, the Hall coefficient can be positive or negative depending on the relative concentrations and mobilities. Do not assume that the Hall coefficient is always negative.

**Mistake 4: Assuming that Matthiessen's rule is exact.**
Matthiessen's rule states that the total resistivity is the sum of impurity and phonon contributions: $\rho = \rho_0 + \rho_{\mathrm{ph}}(T)$. This is an approximation that ignores interference between scattering mechanisms. Do not assume that Matthiessen's rule is exact; it is a good approximation in many cases.

**Mistake 5: Confusing the electronic specific heat with the total specific heat.**
The electronic specific heat $\gamma_{\mathrm{electron}}$ is only one contribution to the total specific heat. The lattice (phonon) contribution dominates at high temperatures. Do not assume that the total specific heat is entirely electronic.

## Cross-References

- **[Electronic Band Structure](./5_electronic-band-structure.md)**: The Fermi surface geometry and effective mass from band theory determine the transport coefficients measured in the Drude and Boltzmann frameworks.
- **[Defects in Crystals](./9_defects-in-crystals.md)**: Point defects and dislocations act as scattering centres that contribute to the residual resistivity in Matthiessen's rule.
- **[Superconductivity](./7_superconductivity.md)**: Represents the extreme limit where scattering vanishes entirely, producing zero resistivity below the critical temperature.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Intuition

Electrical conductivity is like traffic flow: electrons are cars, the electric field is the slope of the road, and scattering events are red lights. The Drude model treats electrons as a classical gas bouncing off ions, which explains Ohm's law but fails at low temperatures where quantum effects matter. The mean free path is how far an electron travels between collisions. Matthiessen's rule says different scattering mechanisms add independently, like different types of road obstacles. The Hall coefficient reveals whether charge carriers are positive or negative, which the simple model cannot predict.
