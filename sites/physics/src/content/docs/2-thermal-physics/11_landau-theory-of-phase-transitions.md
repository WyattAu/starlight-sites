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

**History.** Lev Landau's 1937 theory wrote the free energy as an analytic function of an order parameter and expanded in its powers, and the framework immediately explained superfluidity's two-fluid model with Laszlo Tisza. Landau's school produced the scaling ideas that grew into the modern renormalisation group, and the theory's failures (the lambda transition's divergent specific heat) are what pointed to the deeper structure.

### 11.1 Landau Free Energy

The Landau free energy density (in the absence of external fields) is:

$$
f(\phi, T) = f_0(T) + \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 + \frac{1}{6}c\phi^6 + \cdots
$$

**Assumptions:**

- $f$ is analytic in $\phi$ near the transition
- Symmetry $\phi \to -\phi$ (e.g., Ising systems) eliminates odd powers
- $b > 0$ for stability
- $a(T) = a_0(T - T_c)$ changes sign at $T_c$

With an external field $h$ conjugate to $\phi$ Add $-h\phi$:

$$
f(\phi, T) = f_0 + \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 - h\phi
$$

The equilibrium order parameter minimizes $f$:

$$
\frac{\partial f}{\partial \phi} = a\phi + b\phi^3 - h = 0
$$

### 11.2 Zero-Field Solutions

For $h = 0$:

- **$T > T_c$** ($a > 0$): minimum at $\phi = 0$ (disordered phase)
- **$T < T_c$** ($a < 0$): minima at $\phi = \pm\sqrt{-a/b} = \pm\sqrt{a_0(T_c - T)/b}$

The order parameter grows as:

$$
\phi = \begin{cases} 0 & T > T_c \\ \pm\sqrt{a_0(T_c - T)/b} & T < T_c \end{cases}
$$

This yields the mean-field critical exponent $\beta = 1/2$.

**Ponder (attempt the divergence).** Landau's free energy with an external field: F = F0 + a(T - Tc) M^2 + b M^4 - H M. Attempt to compute the susceptibility chi = dM/dH above the Curie temperature, and watch how it behaves as T approaches Tc.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Minimising gives 2 a (T - Tc) M - H = 0 above Tc, so chi = dM/dH = 1 / (2 a (T - Tc)): the susceptibility diverges as T approaches Tc from above, with the mean-field critical exponent of one (gamma = 1). The divergence is why critical points scatter light so strongly (critical opalescence): the fluctuations grow without bound.

</div>
</details>

### 11.3 Susceptibility

The **susceptibility** $\chi = \partial\phi/\partial h|_{h=0}$ is obtained by expanding
$\phi(h) = \phi_0 + \chi h + \cdots$:

$$
a\phi + b\phi^3 - h = 0 \implies (a + 3b\phi_0^2)\chi = 1
$$

- **$T > T_c$**: $\phi_0 = 0$ So $\chi = 1/a = 1/[a_0(T - T_c)]$ Giving $\gamma = 1$.
- **$T < T_c$**: $\phi_0^2 = -a/b$ So $\chi = 1/(-2a) = 1/[2a_0(T_c - T)]$ Giving $\gamma" = 1$.

### 11.4 Specific Heat

The free energy at equilibrium is:

$$
f_{\text{eq} = \begin{cases} f_0 & T > T_c \\ f_0 - a^2/(4b) & T < T_c \end{cases}}
$$

The specific heat discontinuity is:

$$
C_{T_c^-} - C_{T_c^+} = -T_c \frac{\partial^2}{\partial T^2}\left(\frac{-a^2}{4b}\right)\bigg|_{T_c} = \frac{T_c a_0^2}{2b}
$$

This is a finite jump ($\alpha = 0$ in mean-field theory).

<details>
<summary>Worked Example 11.1: Landau Free Energy Minimum</summary>

Consider $f = \frac{1}{2}(T - 100)\phi^2 + \frac{1}{4}\phi^4$ (in arbitrary units where
$a_0 = b = 1$).

At $T = 50$ ($a = -50$): $f = -25\phi^2 + \frac{1}{4}\phi^4$.

$$
\frac{\partial f}{\partial \phi} = -50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (max)} or  \phi = \pm\sqrt{50} = \pm 7.07 \text{ (min)}
$$

$$
f_{\text{min} = -25(50) + \frac{1}{4}(2500) = -1250 + 625 = -625}
$$

At $T = 150$ ($a = 50$): $f = 25\phi^2 + \frac{1}{4}\phi^4$.

$$
\frac{\partial f}{\partial \phi} = 50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (min)}
$$

$$
f_{\text{min} = 0}
$$

The free energy drops by 625 units when going below $T_c = 100$ Driving the transition.

</details>

<details>
<summary>Worked Example 11.2: First-Order Transition in Landau Theory</summary>

When $b < 0$ (which can happen in systems with first-order transitions), we must include the
$\phi^6$ term with $c > 0$:

$$
f = \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 + \frac{1}{6}c\phi^6
$$

The equilibrium condition $\partial f/\partial \phi = 0$ gives:

$$
\phi(a + b\phi^2 + c\phi^4) = 0
$$

The quartic factor has solutions when:

$$
\phi^2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2c}
$$

This requires $b^2 > 4ac$ Which occurs when $T$ is below some temperature $T^* > T_c$. Between $T_c$
and $T^*$ The system undergoes a **first-order** transition because the order parameter jumps
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

$$
M = \sqrt{-a/b} = \sqrt{50/2.0} = \sqrt{25} = 5.0
$$

The free energy at equilibrium: $f_{\text{eq}} = -a^2/(4b) = -2500/(8) = -312.5$.

The susceptibility above $T_c$: $\chi = 1/a = 1/[0.5(T - 400)]$. At $T = 500$ K, $\chi = 1/50 = 0.02$.

The specific heat jump at $T_c$: $\Delta C = T_c a_0^2/(2b) = 400 \times 0.25/(4) = 25$.

## Intuition

Landau theory is a mathematical framework for understanding how systems choose between ordered and disordered states. The order parameter tracks the degree of ordering, like magnetization in a magnet. Above the critical temperature, thermal fluctuations destroy order. Below it, the free energy landscape develops two minima, and the system must choose one, breaking symmetry. The theory is powerful because it makes few assumptions about microscopic details, capturing universal features of continuous phase transitions through simple polynomial expansions.

:::note[Quick check]

1. Write Landau's free energy for a ferromagnet and identify the order parameter.
2. State the zero-field solutions of the theory above and below $T_c$.
3. What is the temperature dependence of the spontaneous magnetisation, and which exponent does it give?
4. Compute the susceptibility above $T_c$ and its divergence.
5. What does Landau theory predict for the specific heat at $T_c$?
6. Which symmetry is broken at the transition, and what does 'spontaneously' mean here?
7. Why does Landau theory fail near $T_c$, and which framework repairs it?
8. Give an everyday example of spontaneous symmetry breaking in a ferromagnet.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $F = F_0 + a(T - T_c) M^2 + b M^4$ (plus $-HM$ with a field): the order parameter is the magnetisation $M$, the macroscopic quantity that is zero in the disordered phase and nonzero below $T_c$. **2.** Above $T_c$ ($a > 0$) the unique minimum is $M = 0$. Below $T_c$ ($a < 0$) $M = 0$ turns into a maximum and two minima appear at $M = \pm \sqrt{a_0 (T_c - T)/b}$. **3.** $M \propto (T_c - T)^{1/2}$: the mean-field exponent $\beta = 1/2$. **4.** Minimising with field gives $2 a (T - T_c) M - H = 0$, so $\chi = 1/(2 a (T - T_c))$: divergence with mean-field exponent $\gamma = 1$. **5.** A finite jump at $T_c$ (a second-order transition in the Ehrenfest sense), because $M^2 \propto T_c - T$ enters the free energy linearly: Landau theory predicts no divergence, while real systems (the lambda transition) diverge. **6.** The flip symmetry $M \to -M$ of the free energy: below $T_c$ the system must settle into one of the two minima, and which one it picks is decided by infinitesimal causes, not by the Hamiltonian, which treats both alike. **7.** It neglects fluctuations, which grow without bound as $T \to T_c$ and invalidate the analytic expansion: the renormalisation group resums them and yields the true exponents. **8.** A bar of iron cooled below its Curie point with no external field magnetises itself: the choice of north pole is spontaneous, an accident of thermal noise frozen in.

</div>
</details>

:::

## Cross-References

- **[Phase Transitions](/2-thermal-physics/10_phase-transitions/)**: Landau theory provides the phenomenological foundation for the critical exponents and scaling relations discussed in the phase transitions chapter.
- **[The Ising Model](/2-thermal-physics/12_ising-model-and-mean-field-theory/)**: The Ising model's mean-field solution recovers Landau free energy predictions near the critical point.
- **[Statistical Mechanics](/2-thermal-physics/2_statistical-mechanics/)**: Landau theory connects the microscopic partition function to macroscopic thermodynamic behaviour through the free energy expansion.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)

## Related in this track

- [Bose-Einstein Condensation](/2-thermal-physics/5_bose-einstein-condensation/)
- [Classical Limit and the Maxwell-Boltzmann Distribution](/2-thermal-physics/7_classical-limit-and-the-maxwell-boltzmann-distribution/)
- [Common Pitfalls](/2-thermal-physics/8_common-pitfalls/)
- [Fermi Gas at Finite Temperature](/2-thermal-physics/4_fermi-gas-at-finite-temperature/)
