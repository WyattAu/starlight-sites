---

date: 2026-07-23T21:57:32+01:00
title: Phase Transitions
tags:
  - Physics
  - University
description: "A is a discontinuity in a thermodynamic quantity or its derivative as a function of a state variable. Phase transitions are classified by Ehrenfest"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "10_phase Transitions", "url": "https://physics.wyattau.com/2-thermal-physics/10_phase-transitions"}]
}
</script>

A **phase transition** is a discontinuity in a thermodynamic quantity or its derivative as a
function of a state variable. Phase transitions are classified by Ehrenfest according to which
derivative of the Gibbs free energy is discontinuous.

### 10.1 Classification of Phase Transitions

| Order              | Definition                                                                       | Example                        |
| ------------------ | -------------------------------------------------------------------------------- | ------------------------------ |
| First order        | $G$ continuous; $\partial G/\partial T$ or $\partial G/\partial P$ discontinuous | Boiling of water               |
| Second order       | First derivatives continuous; second derivatives discontinuous                   | Superconducting transition     |
| Lambda ($\lambda$) | Divergent second derivatives                                                     | Helium-4 superfluid transition |

For a first-order transition at temperature $T_c$The **latent heat** is:

$$L = T_c \Delta S = T_c \left(S_{\text{phase} 2} - S_{\text{phase} 1}\right)$$

The **Clausius--Clapeyron equation** governs the slope of the coexistence curve:

$$\frac{dP}{dT} = \frac{L}{T_c \Delta v}$$

Where $\Delta v = v_2 - v_1$ is the change in specific volume.

### 10.2 Van der Waals Equation and Critical Phenomena

The van der Waals equation of state modifies the ideal gas law to account for intermolecular forces:

$$\left(P + \frac{a}{v^2}\right)(v - b) = k_B T$$

Where $a$ accounts for attractive interactions and $b$ for the finite molecular volume. The critical
point $(T_c, P_c, v_c)$ satisfies:

$$\frac{\partial P}{\partial v}\bigg|_{T_c} = 0, \qquad \frac{\partial^2 P}{\partial v^2}\bigg|_{T_c} = 0$$

Solving gives:

$$T_c = \frac{8a}{27bk_B}, \qquad P_c = \frac{a}{27b^2}, \qquad v_c = 3b$$

Near the critical point, define the **reduced variables** $\tilde{T} = T/T_c$, $\tilde{P} = P/P_c$,
$\tilde{v} = v/v_c$ to obtain the universal form:

$$\left(\tilde{P} + \frac{3}{\tilde{v}^2}\right)(3\tilde{v} - 1) = 8\tilde{T}$$

The **order parameter** $\phi = (v_{\text{gas} - v_{\text{liquid})/(v_c)}}$ vanishes as:

$$\phi \propto (T_c - T)^{\beta}$$

Where $\beta = 1/2$ is the **mean-field critical exponent** (van der Waals prediction).

### 10.3 Critical Exponents

Near a second-order phase transition, thermodynamic quantities follow power laws characterized by
**critical exponents**:

| Exponent | Definition                           | Mean-field | 2D Ising | 3D Ising (numerical) |
| -------- | ------------------------------------ | ---------- | -------- | -------------------- |
| $\alpha$ | $C \propto \|t\|^{-\alpha}$          | 0 (jump)   | 0 (log)  |
| $\beta$  | $\phi \propto (-t)^\beta$            | $1/2$      | $1/8$    | $\approx 0.326$      |
| $\gamma$ | $\chi \propto \|t\|^{-\gamma}$       | $1$        | $7/4$    |
| $\delta$ | $\phi \propto h^{1/\delta}$ at $t=0$ | $3$        | $15$     | $\approx 4.789$      |

Where $t = (T - T_c)/T_c$ is the reduced temperature and $h$ is the conjugate field.

<details>
<summary>Worked Example 10.1: Clausius--Clapeyron for Water</summary>

For the water--steam transition at 1 atm, $T_c = 373.15$ K, $L = 2260$ kJ/kg,
$v_{\text{steam} = 1.673}$ m$^3$/kg, $v_{\text{water} = 1.043 \times 10^{-3}}$ m$^3$/kg.

$$\frac{dP}{dT} = \frac{L}{T \Delta v} = \frac{2.26 \times 10^6}{373.15 \times 1.673} = \frac{2.26 \times 10^6}{624.3} \approx 3620 \text{ Pa/K} \approx 0.0357 \text{ atm/K}$$

This means increasing the boiling temperature by 1 K requires increasing the pressure by about 0.036
atm.

</details>

<details>
<summary>Worked Example 10.2: Critical Parameters of CO$_2$</summary>

For CO$_2$, $a = 0.364$ Pa$\cdot$M$^6$/mol$^2$, $b = 4.27 \times 10^{-5}$ m$^3$/mol. Using the
critical point formulas:

$$T_c = \frac{8a}{27Rb} = \frac{8 \times 0.364}{27 \times 8.314 \times 4.27 \times 10^{-5}} = \frac{2.912}{9.585 \times 10^{-3}} \approx 303.7 \text{ K}$$

$$P_c = \frac{a}{27b^2} = \frac{0.364}{27 \times (4.27 \times 10^{-5})^2} = \frac{0.364}{4.923 \times 10^{-8}} \approx 7.40 \times 10^6 \text{ Pa} = 74.0 \text{ atm}$$

The experimental values are $T_c = 304.3$ K and $P_c = 73.8$ atm, showing good agreement.

</details>

## Common Pitfalls

- **Confusing first-order and second-order transitions:** First-order transitions have discontinuous first derivatives of $G$, meaning latent heat and volume change. Second-order transitions have continuous first derivatives but discontinuous second derivatives (diverging susceptibility).
- **Assuming mean-field exponents are exact:** The van der Waals equation predicts $\beta = 1/2$, but real fluids and the 3D Ising model give $\beta \approx 0.326$. Mean-field theory breaks down near $T_c$ due to fluctuations.
- **Forgetting that the Clausius-Clapeyron equation only applies to first-order transitions:** At a second-order transition, $\Delta S = 0$ and $\Delta v = 0$, so the equation is undefined (0/0), and the Ehrenfest equations must be used instead.
- **Misidentifying the order parameter:** The choice of order parameter depends on the system. For the liquid-gas transition, it is the density difference; for a magnet, it is the magnetisation; for a superfluid, it is the macroscopic wavefunction amplitude.

## Worked Example: Landau Theory of Phase Transitions

Near a second-order transition, the free energy can be expanded as a power series in the order parameter $\phi$:

$$F(T, \phi) = F_0(T) + a(T)\phi^2 + b(T)\phi^4 + \cdots$$

For $T > T_c$, $a(T) > 0$ and the minimum is at $\phi = 0$. For $T < T_c$, $a(T) < 0$ and the minima are at $\phi = \pm \sqrt{-a/(2b)}$. The simplest choice is $a(T) = a_0(T - T_c)$ with $a_0 > 0$, giving:

$$\phi = \pm \sqrt{\frac{a_0}{2b}(T_c - T)^{1/2}} \propto (T_c - T)^\beta$$

with $\beta = 1/2$, recovering the mean-field result. The free energy at the minimum is:

$$F(T) = F_0(T) - \frac{a_0^2}{4b}(T_c - T)^2$$

The heat capacity jumps at $T_c$: $\Delta C = \frac{a_0^2 T_c}{2b}$, which is the mean-field prediction $\alpha = 0$.

## Worked Example: Liquid-Gas Coexistence Curve

The Clausius-Clapeyron equation can be integrated if $L$ and $\Delta v$ are treated as approximately constant over a small temperature range:

$$P(T) = P_0 + \frac{L}{\Delta v}\ln\left(\frac{T}{T_0}\right)$$

For water near $100^\circ$C, using $L = 2.26 \times 10^6$ J/kg, $\Delta v = 1.672$ m$^3$/kg, $T_0 = 373.15$ K, $P_0 = 1.013 \times 10^5$ Pa:

$$P(T) \approx 1.013 \times 10^5 + 1.35 \times 10^6 \cdot \ln\left(\frac{T}{373.15}\right) \text{ Pa}$$

At $T = 374.15$ K (1 K above boiling), $P \approx 1.013 \times 10^5 + 1.35 \times 10^6 \cdot \ln(1.00268) \approx 1.049 \times 10^5$ Pa, or about 1.036 atm — consistent with the linear approximation of 0.036 atm/K.

## Key Relationships

- **Clausius-Clapeyron links latent heat to the coexistence curve slope:** A larger latent heat $L$ or smaller volume change $\Delta v$ produces a steeper $dP/dT$, meaning the boiling point is more sensitive to pressure.
- **Critical exponents satisfy scaling relations:** $\alpha + 2\beta + \gamma = 2$ (Rushbrooke), $\gamma = \beta(\delta - 1)$ (Widom), and $\gamma = \nu(2 - \eta)$ (Fisher) connect the four exponents, reducing independent parameters.
- **The order parameter distinguishes phases:** Below $T_c$, $\phi \neq 0$ (ordered phase); above $T_c$, $\phi = 0$ (disordered phase). The continuity or discontinuity of $\phi$ classifies the transition order.
- **The van der Waals equation predicts mean-field exponents:** Real systems often show different exponents (e.g., 3D Ising $\beta \approx 0.326$ vs mean-field $\beta = 1/2$) due to fluctuations near $T_c$.
- **Latent heat vanishes at the critical point:** As $T \to T_c$, $\Delta S \to 0$ and the distinction between phases disappears, creating a continuous transition.

## Applications

- **Weather and climate:** Phase transitions of water (evaporation, condensation, freezing) drive weather patterns and are central to climate models.
- **Materials science:** Understanding solid-liquid phase transitions controls casting, welding, and crystal growth processes.
- **Superconductivity:** The superconducting transition is a second-order phase transition characterised by the vanishing of electrical resistance and expulsion of magnetic fields.
- **Cryogenics:** The lambda transition in helium-4 determines the properties of superfluid helium used in low-temperature experiments.
- **Food industry:** Controlling phase transitions (freezing, melting, crystallisation) determines texture and shelf life of food products.

## Intuition

Phase transitions are sudden rearrangements of matter's structure. First-order transitions like boiling involve latent heat because energy goes into breaking bonds rather than raising temperature. The Clausius-Clapeyron equation links the boiling point's pressure sensitivity to the volume change during vaporization. At the critical point, the distinction between liquid and gas vanishes because thermal fluctuations overcome both attractions and repulsions. Critical exponents describe how physical quantities diverge near this point, and their universality reflects that wildly different systems share the same mathematical structure near criticality.

## Cross-References

- **[The Ising Model](6_the-ising-model.md)**: The Ising model is the simplest model exhibiting a second-order phase transition with well-characterised critical exponents.
- **[Statistical Mechanics](2_statistical-mechanics.md)**: Phase transitions are understood through the partition function and free energy minima in statistical mechanics.
- **[Bose-Einstein Condensation](5_bose-einstein-condensation.md)**: Bose-Einstein condensation is a quantum phase transition driven purely by Bose statistics.


- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
