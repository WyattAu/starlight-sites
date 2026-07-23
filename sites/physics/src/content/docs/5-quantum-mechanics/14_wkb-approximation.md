---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "14_wkb Approximation", "url": "https://physics.wyattau.com/5-quantum-mechanics/14_wkb-approximation"}]
}
</script>
title: WKB Approximation
tags:
  - Physics
  - University
description: "The WKB (Wentzel--Kramers--Brillouin) method provides approximate solutions to the one-dimensional Schrodinger equation when the potential varies slowly"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "14_wkb Approximation", "url": "https://physics.wyattau.com/5-quantum-mechanics/14_wkb-approximation"}]
}
</script>

### 13.1 The WKB Method

The WKB (Wentzel--Kramers--Brillouin) method provides approximate solutions to the one-dimensional
Schrodinger equation when the potential varies slowly compared to the de Broglie wavelength.

The ansatz $\psi(x) = A(x)e^{iS(x)/\hbar}$ substituted into
$-\frac{\hbar^2}{2m}\psi"' + V\psi = E\psi$ gives, to leading order in $\hbar$:

$$S(x) = \pm\int^x p(x')\,dx', \quad p(x) = \sqrt{2m[E - V(x)]}$$

The WKB wavefunctions:

$$\psi(x) \approx \frac{C}{\sqrt{p(x)}}\exp\!\left(\pm\frac{i}{\hbar}\int^x p(x')\,dx'\right) \quad \text{(classically allowed,  E > V\text{)}}$$

$$\psi(x) \approx \frac{C}{\sqrt{|p(x)|}}\exp\!\left(\pm\frac{1}{\hbar}\int^x |p(x')|\,dx'\right) \quad \text{(classically forbidden,  E < V\text{)}}$$

### 13.2 Connection Formulas

At a classical turning point ($E = V(x_0)$), the WKB approximation breaks down. The Airy function
connects the oscillating and decaying solutions:

$$\frac{2}{\sqrt{p(x)}}\cos\!\left(\frac{1}{\hbar}\int_x^{x_0} p(x')\,dx' - \frac{\pi}{4}\right) \longleftrightarrow \frac{1}{\sqrt{|p(x)|}}\exp\!\left(-\frac{1}{\hbar}\int_{x_0}^x |p(x')|\,dx'\right)$$

### 13.3 Bohr--Sommerfeld Quantisation

The WKB quantisation condition for a bound state in a potential well with turning points $a$ and
$b$:

$$\int_a^b p(x)\,dx = \left(n + \frac{1}{2}\right)\pi\hbar, \quad n = 0, 1, 2, \ldots$$

The factor of $1/2$ (Maslov index) accounts for the phase loss at each turning point.

**Application: Harmonic oscillator.** $V(x) = \frac{1}{2}m\omega^2 x^2$. Turning points at
$x = \pm\sqrt{2E/(m\omega^2)}$.

$$\int_{-A}^{A}\sqrt{2mE - m^2\omega^2 x^2}\,dx = \frac{\pi E}{\omega} = \left(n + \frac{1}{2}\right)\pi\hbar$$

$$E_n = \left(n + \frac{1}{2}\right)\hbar\omega$$

The WKB gives the exact result for the harmonic oscillator --- a fortunate coincidence due to the
quadratic potential.

**Application: Power-law potential.** For $V(x) = V_0|x/a|^\alpha$:

$$E_n \propto \left(n + \frac{1}{2}\right)^{2\alpha/(\alpha+2)}$$

### 13.4 Key Relationships

| Method                | Validity                    | Accuracy                      | Use case                        |
| --------------------- | --------------------------- | ----------------------------- | ------------------------------- |
| WKB                   | Slowly varying $V(x)$       | Leading order in $\hbar$      | Semiclassical tunnelling        |
| Exact solution        | All potentials              | Exact                         | Solvable potentials (HO, Coulomb) |
| Perturbation theory   | Small $V'$ relative to $V$  | $\sim \epsilon^2$ error       | Weak anharmonic corrections     |
| Variational method    | Any (with trial function)   | Upper bound, depends on trial | Ground state energies           |

### 13.5 Common Pitfalls

- **Applying WKB at a turning point.** The approximation diverges at $x_0$ where $p(x_0) = 0$.
  Connection formulas using Airy functions are necessary to match solutions across turning points.
- **Forgetting the Maslov index.** For bound states, each smooth turning point contributes a phase
  of $\pi/4$, giving $\pi/2$ total (the $1/2$ in $n+1/2$). Hard walls give different phases.
- **Using WKB for rapidly varying potentials.** The condition $|d\lambda/dx| \ll 1$ (where
  $\lambda = h/p$) must hold; WKB fails at sharp potential steps or barriers.
- **Assuming WKB works for all $n$ in bound states.** The approximation improves for large $n$
  (highly excited states), but is poor for $n=0$ ground states in shallow wells.

### 13.6 Summary Table

| Potential type         | Turning points | Quantisation condition       | WKB exact? |
| ---------------------- | -------------- | ---------------------------- | ---------- |
| Harmonic oscillator    | 2 (smooth)     | $n + 1/2$                    | Yes        |
| Infinite square well   | 2 (hard wall)  | $n$ (no $1/2$)               | Yes        |
| Linear potential       | 1 (smooth)     | Airy zeros                   | No         |
| Coulomb                | 2 (smooth)     | $n - 1/2$ for $l=0$         | Approx.    |
| Quartic double well    | 4 (smooth)     | Splitting via instantons     | No         |

### 13.7 Applications

- **Nuclear physics:** Alpha decay is the canonical example of WKB tunnelling. The Geiger-Nuttall
  law $T_{1/2} \propto \exp(1/\sqrt{E})$ follows directly from the WKB transmission probability.
- **Quantum chemistry:** Tunnelling corrections in reaction rate theory use WKB transmission
  coefficients for barrier crossing, important for proton transfer and enzyme kinetics.
- **Semiconductor physics:** Field emission (Fowler-Nordheim tunnelling) from metal surfaces and
  tunnelling in MOSFETs are described by WKB transmission through triangular barriers.
- **Cosmology:** The WKB method is used in inflationary cosmology to compute the spectrum of
  primordial density perturbations generated by quantum fluctuations during inflation.

<details>
<summary>Worked Example 13.1: WKB Tunnelling Through a Barrier</summary>

For a potential barrier $V(x) = V_0(1 - x^2/a^2)$ for $|x| < a$With $E < V_0$The WKB transmission
probability is:

$$T \approx \exp\!\left(-\frac{2}{\hbar}\int_{-a_0}^{a_0}\sqrt{2m(V_0(1 - x^2/a^2) - E)}\,dx\right)$$

Where $a_0 = a\sqrt{1 - E/V_0}$ is the classical turning point.

$$T \approx \exp\!\left(-\frac{2}{\hbar}\sqrt{2mV_0}\int_{-a_0}^{a_0}\sqrt{1 - E/V_0 - x^2/a^2}\,dx\right)$$

$$= \exp\!\left(-\frac{2}{\hbar}\sqrt{2mV_0}\cdot\frac{\pi a^2}{2a}(1 - E/V_0)\right)$$

$$= \exp\!\left(-\frac{\pi a}{\hbar}\sqrt{2mV_0}\left(1 - \frac{E}{V_0}\right)\right)$$

For alpha decay ($V_0 \approx 25$ MeV, $a \approx 30$ fm, $E = 5$ MeV, $m = 4 \times 931.5$
MeV/$c^2$):

$$\frac{\pi a}{\hbar c}\sqrt{2mc^2 V_0}\left(1 - \frac{E}{V_0}\right) = \frac{\pi \times 30\,\text{fm}{197\,\text{MeV}\cdot\text{fm}\sqrt{2 \times 3726 \times 25}\times 0.8}}$$

$$= 0.479 \times 432.6 \times 0.8 = 165.7$$

$$T \approx e^{-165.7} \approx 5 \times 10^{-73}$$

This extremely small probability explains the enormously long half-lives of alpha-emitting nuclei
($\sim 10^9$ years for $^{238}$U). The Geiger--Nuttall law relates $\log T_{1/2}$ to
$E^{-1/2}$Consistent with the WKB exponential dependence.

</details>

### 13.8 Worked Example: WKB for Quartic Oscillator

**Problem.** Estimate the ground state energy of the quartic oscillator $V(x) = \frac{1}{4}m\omega^2 a^2 (x/a)^4$
using the WKB quantisation condition.

**Solution.** For $V(x) = \alpha x^4$ with $\alpha = m\omega^2/(4a^2)$, the turning points are at
$x = \pm (E/\alpha)^{1/4}$. The WKB integral:
$\int_{-A}^{A} \sqrt{2m(E - \alpha x^4)}\,dx = (n + 1/2)\pi\hbar$.

For $n = 0$: $\int_{-A}^{A} \sqrt{2m\alpha(A^4 - x^4)}\,dx = \pi\hbar/2$ where $A = (E/\alpha)^{1/4}$.

The integral evaluates to $\frac{4}{3}A^2\sqrt{2m\alpha A^4} \cdot \frac{\Gamma(1/4)^2}{4\sqrt{\pi}} \approx 1.748 A^2\sqrt{2m\alpha A^2}$.

Solving: $E_0 \approx \left(\frac{3\pi\hbar}{8} \frac{\Gamma(1/4)^2}{\sqrt{\pi}} \sqrt{\frac{\alpha}{2m}}\right)^{4/3} \approx 1.022 \hbar \sqrt{\alpha/m} a^2$.

The exact result is $E_0 = 1.060 \hbar \sqrt{\alpha/m} a^2$, so WKB is within 4% for the ground
state and improves for higher $n$. $\blacksquare$


## Intuition

WKB is the semiclassical bridge between classical and quantum mechanics. When the potential changes slowly compared to the wavelength, the wavefunction behaves like a classical particle with a locally varying momentum. The amplitude adjusts to conserve probability current, getting larger where the particle moves slowly. At turning points where the classical kinetic energy vanishes, the wavefunction transitions from oscillating to decaying, like a wave approaching a cliff. The Bohr-Sommerfeld quantization condition says the phase accumulated over one complete orbit must be a multiple of pi, like a standing wave on a string.

## Cross-References

- **[Approximation Methods](8_approximation-methods.md)**: The WKB approximation is one of the key semiclassical methods in quantum mechanics.
- **[One-Dimensional Problems](5_one-dimensional-problems.md)**: Exactly solvable 1D problems provide test cases for WKB approximation.
- **[Wave Functions and the Schrodinger Equation](3_wave-functions-and-the-schrodinger-equation.md)**: The Schrodinger equation provides the foundation for WKB analysis.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
