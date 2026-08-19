---

date: 2026-07-23T21:57:32+01:00
title: Landau Theory of Phase Transitions
tags:
  - Physics
  - University
description: "Landau theory provides a phenomenological framework for continuous (second-order) phase transitions by expanding the free energy in powers of an ."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "11_landau Theory Of Phase Transitions", "url": "https://physics.wyattau.com/2-thermal-physics/11_landau-theory-of-phase-transitions"}]
}
</script>

Landau theory provides a phenomenological framework for continuous (second-order) phase transitions
by expanding the free energy in powers of an **order parameter** $\phi$.

### 11.1 Landau Free Energy

The Landau free energy density (in the absence of external fields) is:

$$f(\phi, T) = f_0(T) + \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 + \frac{1}{6}c\phi^6 + \cdots$$

**Assumptions:**

- $f$ is analytic in $\phi$ near the transition
- Symmetry $\phi \to -\phi$ (e.g., Ising systems) eliminates odd powers
- $b > 0$ for stability
- $a(T) = a_0(T - T_c)$ changes sign at $T_c$

With an external field $h$ conjugate to $\phi$Add $-h\phi$:

$$f(\phi, T) = f_0 + \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 - h\phi$$

The equilibrium order parameter minimizes $f$:

$$\frac{\partial f}{\partial \phi} = a\phi + b\phi^3 - h = 0$$

### 11.2 Zero-Field Solutions

For $h = 0$:

- **$T > T_c$** ($a > 0$): minimum at $\phi = 0$ (disordered phase)
- **$T < T_c$** ($a < 0$): minima at $\phi = \pm\sqrt{-a/b} = \pm\sqrt{a_0(T_c - T)/b}$

The order parameter grows as:

$$\phi = \begin{cases} 0 & T > T_c \\ \pm\sqrt{a_0(T_c - T)/b} & T < T_c \end{cases}$$

This yields the mean-field critical exponent $\beta = 1/2$.

### 11.3 Susceptibility

The **susceptibility** $\chi = \partial\phi/\partial h|_{h=0}$ is obtained by expanding
$\phi(h) = \phi_0 + \chi h + \cdots$:

$$a\phi + b\phi^3 - h = 0 \implies (a + 3b\phi_0^2)\chi = 1$$

- **$T > T_c$**: $\phi_0 = 0$So $\chi = 1/a = 1/[a_0(T - T_c)]$Giving $\gamma = 1$.
- **$T < T_c$**: $\phi_0^2 = -a/b$So $\chi = 1/(-2a) = 1/[2a_0(T_c - T)]$Giving $\gamma" = 1$.

### 11.4 Specific Heat

The free energy at equilibrium is:

$$f_{\text{eq} = \begin{cases} f_0 & T > T_c \\ f_0 - a^2/(4b) & T < T_c \end{cases}}$$

The specific heat discontinuity is:

$$C_{T_c^-} - C_{T_c^+} = -T_c \frac{\partial^2}{\partial T^2}\left(\frac{-a^2}{4b}\right)\bigg|_{T_c} = \frac{T_c a_0^2}{2b}$$

This is a finite jump ($\alpha = 0$ in mean-field theory).

<details>
<summary>Worked Example 11.1: Landau Free Energy Minimum</summary>

Consider $f = \frac{1}{2}(T - 100)\phi^2 + \frac{1}{4}\phi^4$ (in arbitrary units where
$a_0 = b = 1$).

At $T = 50$ ($a = -50$): $f = -25\phi^2 + \frac{1}{4}\phi^4$.

$$\frac{\partial f}{\partial \phi} = -50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (max)} or  \phi = \pm\sqrt{50} = \pm 7.07 \text{ (min)}$$

$$f_{\text{min} = -25(50) + \frac{1}{4}(2500) = -1250 + 625 = -625}$$

At $T = 150$ ($a = 50$): $f = 25\phi^2 + \frac{1}{4}\phi^4$.

$$\frac{\partial f}{\partial \phi} = 50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (min)}$$

$$f_{\text{min} = 0}$$

The free energy drops by 625 units when going below $T_c = 100$Driving the transition.

</details>

<details>
<summary>Worked Example 11.2: First-Order Transition in Landau Theory</summary>

When $b < 0$ (which can happen in systems with first-order transitions), we must include the
$\phi^6$ term with $c > 0$:

$$f = \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 + \frac{1}{6}c\phi^6$$

The equilibrium condition $\partial f/\partial \phi = 0$ gives:

$$\phi(a + b\phi^2 + c\phi^4) = 0$$

The quartic factor has solutions when:

$$\phi^2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2c}$$

This requires $b^2 > 4ac$Which occurs when $T$ is below some temperature $T^* > T_c$. Between $T_c$
and $T^*$The system undergoes a **first-order** transition because the order parameter jumps
discontinuously from zero to a finite value.

</details>

### 11.5 Key Relationships

- **Critical exponents (mean-field):** $\beta = 1/2$ (order parameter), $\gamma = 1$ (susceptibility), $\alpha = 0$ (specific heat jump), $\delta = 3$ (critical isotherm: $h \propto \phi^3$ at $T = T_c$).
- **Universality:** Systems with the same symmetry and dimensionality share the same critical exponents, regardless of microscopic details. Landau theory gives mean-field exponents, which are exact only above the upper critical dimension ($d > 4$ for short-range interactions).
- **Clausius-Clapeyron analogue:** At a first-order transition (when $b < 0$), the discontinuity in the order parameter gives a latent heat $L = T_c \Delta s$ where $\Delta s = -\partial f/\partial T$ is the entropy jump.
- **Ginzburg criterion:** Mean-field theory is valid when fluctuations are small, i.e., when $|T - T_c| > T_c(a_0^2 k_B^2)/(32\pi^2 b^2 \xi_0^d)$. For $d < 4$, this fails very close to $T_c$.

### 11.6 Common Pitfalls

- **Assuming Landau theory is always valid:** It is a mean-field theory. Near $T_c$ in low dimensions, critical fluctuations dominate and renormalisation group methods are required.
- **Forgetting that $b$ can be negative:** If $b < 0$, the $\phi^6$ term must be included to ensure stability. The transition becomes first-order, and the simple $\phi = \pm\sqrt{-a/b}$ solution does not apply.
- **Neglecting the role of symmetry:** The form of the Landau expansion depends on the symmetry of the order parameter. A vector order parameter (e.g., in the XY model) requires a different expansion than a scalar.
- **Confusing the order parameter with a physical observable:** The order parameter $\phi$ is an abstract quantity. For a ferromagnet it is the magnetisation; for a superfluid it is the condensate wavefunction; for a liquid-gas transition it is the density difference.

### 11.7 Applications

- **Ferromagnetic transitions:** The Landau theory with $\phi = M$ (magnetisation) predicts the Curie temperature and the Curie-Weiss law $\chi \propto 1/(T - T_c)$ for the susceptibility above $T_c$.
- **Superfluid helium:** The order parameter is the complex condensate wavefunction $\psi$. The Landau-Ginzburg expansion includes $|\psi|^2$ terms and gradient terms, leading to the Ginzburg-Landau theory of superconductivity.
- **Binary alloys:** The order parameter describes the degree of chemical ordering (e.g., Cu-Zn ordering in brass). The Landau theory predicts the order-disorder transition temperature.
- **Liquid crystals:** Nematic-isotropic transitions can be described by a tensor order parameter $Q_{ij}$. The Landau expansion includes both scalar and tensor invariants.

### 11.8 Worked Example: Finding the Transition Temperature

A magnetic system has Landau coefficients $a(T) = 0.5(T - 400)$ K and $b = 2.0$ (arbitrary units). Find $T_c$ and the magnetisation at $T = 300$ K.

At $T_c$, the coefficient $a(T_c) = 0$, so $0.5(T_c - 400) = 0$ giving $T_c = 400$ K.

At $T = 300$ K: $a(300) = 0.5(300 - 400) = -50$. The equilibrium magnetisation is:

$$M = \sqrt{-a/b} = \sqrt{50/2.0} = \sqrt{25} = 5.0$$

The free energy at equilibrium: $f_{\text{eq}} = -a^2/(4b) = -2500/(8) = -312.5$.

The susceptibility above $T_c$: $\chi = 1/a = 1/[0.5(T - 400)]$. At $T = 500$ K, $\chi = 1/50 = 0.02$.

The specific heat jump at $T_c$: $\Delta C = T_c a_0^2/(2b) = 400 \times 0.25/(4) = 25$.

## Intuition

Landau theory is a mathematical framework for understanding how systems choose between ordered and disordered states. The order parameter tracks the degree of ordering, like magnetization in a magnet. Above the critical temperature, thermal fluctuations destroy order. Below it, the free energy landscape develops two minima, and the system must choose one, breaking symmetry. The theory is powerful because it makes few assumptions about microscopic details, capturing universal features of continuous phase transitions through simple polynomial expansions.

## Cross-References

- **[Phase Transitions](10_phase-transitions.md)**: Landau theory provides the phenomenological foundation for the critical exponents and scaling relations discussed in the phase transitions chapter.
- **[The Ising Model](12_ising-model-and-mean-field-theory.md)**: The Ising model's mean-field solution recovers Landau free energy predictions near the critical point.
- **[Statistical Mechanics](2_statistical-mechanics.md)**: Landau theory connects the microscopic partition function to macroscopic thermodynamic behaviour through the free energy expansion.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
