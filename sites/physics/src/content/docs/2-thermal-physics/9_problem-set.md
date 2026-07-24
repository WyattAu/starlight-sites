---

date: 2026-07-23T21:57:32+01:00
title: Problem Set
tags:
  - Physics
  - University
description: 'Calculate the Fermi energy and Fermi temperature for sodium. Given: electron den Comprehensive educational content coverage with definitions and practice proble'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "9_problem Set", "url": "https://physics.wyattau.com/2-thermal-physics/9_problem-set"}]
}
</script>

### Problem 1

Calculate the Fermi energy and Fermi temperature for sodium. Given: electron density
$n \approx 2.65 \times 10^{28}\,\mathrm{m}^{-3}$, $m_e = 9.109 \times 10^{-31}$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}}(3\pi^2 \times 2.65 \times 10^{28})^{2/3}$$

$(3\pi^2 \times 2.65 \times 10^{28})^{1/3} = (7.85 \times 10^{29})^{1/3} \approx 9.23 \times 10^9$

$(3\pi^2 n)^{2/3} = (9.23 \times 10^9)^2 = 8.52 \times 10^{19}$

$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 8.52 \times 10^{19} \approx 5.20 \times 10^{-19}\,\mathrm{J} \approx 3.25\,\mathrm{eV}$

$T_F = \varepsilon_F/k_B = 5.20 \times 10^{-19}/1.381 \times 10^{-23} \approx 37700\,\mathrm{K}$

</details>

### Problem 2

A 3D Bose gas of $N$ particles of mass $m$ is confined to volume $V$. Show that the heat capacity at
constant volume has a discontinuity at $T = T_c$ and find the jump.

<details>
<summary>Solution</summary>

Above $T_c$ (classical regime): $C_V = \frac{3}{2}Nk_B$.

Below $T_c$: $C_V = \frac{15}{4}Nk_B\,\zeta(5/2)/\zeta(3/2) \cdot (T/T_c)^{3/2}$.

At $T = T_c^-$:

$$C_V(T_c^-) = \frac{15}{4}Nk_B \cdot \frac{\zeta(5/2)}{\zeta(3/2)}$$

$\zeta(5/2) \approx 1.341$, $\zeta(3/2) \approx 2.612$:

$$C_V(T_c^-) = \frac{15}{4} \times \frac{1.341}{2.612}\,Nk_B \approx 1.926\,Nk_B$$

At $T = T_c^+$: $C_V = \frac{3}{2}Nk_B = 1.5\,Nk_B$.

The jump is $\Delta C_V = C_V(T_c^-) - C_V(T_c^+) \approx 0.426\,Nk_B$.

</details>

### Problem 3

Derive the virial expansion for a non-ideal gas in terms of the second virial coefficient
$B_2(T)$And show that $B_2(T)$ can be expressed in terms of the two-particle interaction potential
$V(r)$.

<details>
<summary>Solution</summary>

The pressure of a real gas is expanded as
$PV/(Nk_BT) = 1 + B_2(T)\,(N/V) + B_3(T)\,(N/V)^2 + \cdots$.

For a classical gas with pairwise interaction $V(r_{12})$:

$$B_2(T) = -\frac{1}{2V}\int d^3\mathbf{r}_1\,d^3\mathbf{r}_2\,\left[e^{-\beta V(r_{12})} - 1\right]$$

$$= -2\pi \int_0^\infty \left[e^{-\beta V(r)} - 1\right] r^2\, dr$$

For a hard-sphere gas ($V(r) = \infty$ for $r < d$, $V(r) = 0$ for $r > d$):

$$B_2 = -2\pi\int_0^d (-1)\,r^2\,dr = \frac{2\pi d^3}{3} = \frac{2\pi}{3}\left(\frac{d}{2}\right)^3 \cdot 8 = 4v_0$$

Where $v_0 = \pi d^3/6$ is the volume of one sphere. The van der Waals excluded volume parameter is
$b = 4Nv_0 = N B_2$.

</details>

### Problem 4

Show that the classical limit of the Fermi-Dirac distribution reproduces the Maxwell-Boltzmann
distribution, and derive the condition for the classical limit in terms of the density of states.

<details>
<summary>Solution</summary>

The Fermi-Dirac distribution is:

$$f_{\mathrm{FD}(\varepsilon) = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1}}$$

The total number of particles is:

$$N = \int_0^\infty \frac{g(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

In the classical limit $e^{\beta(\varepsilon - \mu)} \gg 1$The $+1$ is negligible:

$$N \approx \int_0^\infty g(\varepsilon)\, e^{-\beta(\varepsilon - \mu)}\, d\varepsilon = e^{\beta\mu} \int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon$$

$$e^{\beta\mu} = \frac{N}{\int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon} = \frac{N\lambda_{\mathrm{th}^3}{V}}$$

The classical limit requires $e^{\beta\mu} \ll 1$I.e., $N\lambda_{\mathrm{th}^3/V \ll 1}$Or
equivalently, the average inter-particle spacing $(V/N)^{1/3}$ must be much larger than
$\lambda_{\mathrm{th}}$.

</details>

### Problem 5

Compute the partition function for a single quantum harmonic oscillator and verify that the average
energy is $\langle E \rangle = \hbar\omega(n_B + 1/2)$ where $n_B = 1/(e^{\beta\hbar\omega} - 1)$.

<details>
<summary>Solution</summary>

$$Z_{\mathrm{HO} = \sum_{n=0}^{\infty} e^{-\beta\hbar\omega(n+1/2)} = e^{-\beta\hbar\omega/2}\sum_{n=0}^{\infty}\left(e^{-\beta\hbar\omega}\right)^n = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}}$$

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{\hbar\omega}{2} + \frac{\hbar\omega\,e^{-\beta\hbar\omega}}{1 - e^{-\beta\hbar\omega}} = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1} = \hbar\omega\left(\frac{1}{2} + n_B\right)$$

At high $T$ ($\beta \to 0$): $\langle E \rangle \to k_BT$ (equipartition). At low $T$:
$\langle E \rangle \to \hbar\omega/2$ (zero-point energy).

</details>

### Problem 6

A paramagnetic salt consists of $N$ non-interacting spin-1/2 particles with magnetic moment $\mu$.
The system is placed in an external magnetic field $B$ at temperature $T$. Compute the magnetisation
$M$ and the magnetic susceptibility $\chi = (\partial M/\partial B)_T$.

<details>
<summary>Solution</summary>

For a single spin-1/2 particle, the energy levels are $E_\uparrow = -\mu B$ and
$E_\downarrow = +\mu B$. The single-particle partition function is:

$$Z_1 = e^{\beta\mu B} + e^{-\beta\mu B} = 2\cosh(\beta\mu B)$$

For $N$ non-interacting spins, $Z = Z_1^N = [2\cosh(\beta\mu B)]^N$.

The magnetisation is:

$$M = \frac{1}{\beta}\frac{\partial \ln Z}{\partial B} = N\mu\tanh(\beta\mu B)$$

The susceptibility at small $B$ (or high $T$, where $\beta\mu B \ll 1$):

$$\chi = N\mu^2\beta\,\mathrm{sech}^2(\beta\mu B) \approx \frac{N\mu^2}{k_B T}$$

This is the Curie law $\chi = C/T$ with $C = N\mu^2/k_B$, showing that paramagnetic susceptibility
obeys a $1/T$ dependence at high temperatures. $\blacksquare$

</details>

### Problem 7

Derive the Stefan-Boltzmann law for blackbody radiation from the Planck distribution. Compute the
photon number density and the average energy per photon at temperature $T$.

<details>
<summary>Solution</summary>

The Planck distribution gives the spectral energy density:

$$u(\omega, T) = \frac{\hbar\omega^3}{\pi^2 c^3}\frac{1}{e^{\beta\hbar\omega} - 1}$$

Integrating over all frequencies:

$$U(T) = \int_0^\infty u(\omega, T)\,d\omega = \frac{\hbar}{\pi^2 c^3}\int_0^\infty \frac{\omega^3}{e^{\beta\hbar\omega} - 1}\,d\omega$$

Let $x = \beta\hbar\omega$:

$$U(T) = \frac{(k_B T)^4}{\pi^2 c^3 \hbar^3}\int_0^\infty \frac{x^3}{e^x - 1}\,dx = \frac{\pi^2 k_B^4}{15 c^3 \hbar^3} T^4 = \sigma T^4$$

where $\sigma = \pi^2 k_B^4/(60\hbar^3 c^2)$ is the Stefan-Boltzmann constant.

The photon number density is:

$$n = \int_0^\infty \frac{\omega^2}{\pi^2 c^3}\frac{1}{e^{\beta\hbar\omega} - 1}\,d\omega = \frac{2\zeta(3)}{\pi^2}\left(\frac{k_B T}{\hbar c}\right)^3$$

The average energy per photon is $\langle E \rangle = U/n = (\pi^4/30\zeta(3))k_B T \approx 2.701\,k_B T$.

$\blacksquare$

</details>

### Problem 8

For the Ising model on a 2D square lattice, explain why the mean-field approximation predicts a
phase transition at $T_c = zJ/k_B$ (where $z = 4$ for the square lattice), while the exact Onsager
solution gives $T_c \approx 2.269 J/k_B$. Why is mean-field theory inaccurate in low dimensions?

<details>
<summary>Solution</summary>

In mean-field theory, each spin experiences an effective field $B_{\text{eff}} = zJ\langle s \rangle$.
The self-consistency equation is $\langle s \rangle = \tanh(\beta z J \langle s \rangle)$. For
$T > T_c^{\text{MF}} = zJ/k_B$, only the trivial solution $\langle s \rangle = 0$ exists; below
$T_c^{\text{MF}}$, a non-zero magnetisation appears.

For the square lattice, $z = 4$, so $T_c^{\text{MF}} = 4J/k_B$. The exact Onsager solution gives
$T_c \approx 2.269 J/k_B$. The discrepancy arises because mean-field theory neglects fluctuations,
which are significant in low dimensions. In 1D, mean-field theory incorrectly predicts a phase
transition at finite $T$, while the exact solution shows no spontaneous magnetisation at any
$T > 0$. The lower critical dimension for the Ising model is $d = 1$, below which fluctuations
destroy long-range order. $\blacksquare$

</details>

### Problem 9

A system consists of $N$ distinguishable three-level particles, each with energies
$0$, $\varepsilon$, and $2\varepsilon$. The system is in contact with a heat bath at
temperature $T$. (a) Write the single-particle partition function. (b) Find the average
energy of the system. (c) Compute the heat capacity $C_V$ and sketch it as a function of
$T$. What is the limiting behaviour as $T \to 0$ and $T \to \infty$?

<details>
<summary>Solution</summary>

(a) $Z_1 = 1 + e^{-\beta\varepsilon} + e^{-2\beta\varepsilon}$.

(b) For $N$ distinguishable particles, $Z = Z_1^N$. The average energy is:

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = -N\frac{\partial \ln Z_1}{\partial \beta}
= N\frac{\varepsilon e^{-\beta\varepsilon} + 2\varepsilon e^{-2\beta\varepsilon}}{1 + e^{-\beta\varepsilon} + e^{-2\beta\varepsilon}}$$

(c) $C_V = \frac{\partial \langle E \rangle}{\partial T} = \frac{1}{k_B T^2}\frac{\partial \langle E \rangle}{\partial \beta}$.

As $T \to 0$: $\beta \to \infty$, all particles are in the ground state, $\langle E \rangle \to 0$,
$C_V \to 0$ (all degrees of freedom frozen out).

As $T \to \infty$: $\beta \to 0$, all three states are equally populated with probability $1/3$,
$\langle E \rangle \to N\varepsilon$, $C_V \to 0$ (saturation).

The heat capacity shows a peak (Schottky anomaly) at intermediate temperatures where the
thermal energy $k_B T$ is comparable to $\varepsilon$. $\blacksquare$

</details>

## Intuition

Thermal physics connects the microscopic world of individual particles to the macroscopic world of temperature, pressure, and entropy. The partition function is the central object: it encodes all thermodynamic information about a system by summing Boltzmann weights over every possible state. From it, one can derive free energies, equations of state, and response functions. The key insight is that entropy counts the number of microstates consistent with a macrostate, and equilibrium corresponds to the macrostate with the most microstates.

## Cross-References

- **[Statistical Mechanics](2_statistical-mechanics.md)**: The Fermi energy and partition function calculations in this problem set apply the canonical ensemble methods from this chapter.
- **[Fermi Gas at Finite Temperature](4_fermi-gas-at-finite-temperature.md)**: The Fermi energy problems are direct applications of the finite-temperature electron gas theory.
- **[Classical Limit and the Maxwell-Boltzmann Distribution](7_classical-limit-and-the-maxwell-boltzmann-distribution.md)**: The high-temperature limit of quantum statistics recovers the classical ideal gas results tested in several problems.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Common Mistakes

**Using wrong units for temperature in statistical mechanics:** All statistical formulas require absolute temperature (Kelvin). Using Celsius or Fahrenheit gives exponentially wrong Boltzmann factors.

**Confusing specific heat at constant volume vs pressure:** C_V = (∂U/∂T)_V; C_P = (∂H/∂T)_P. For ideal gases C_P = C_V + nR, but this relation fails for real gases and solids.

**Forgetting the density of states in Fermi energy calculations:** The Fermi energy depends on the number density n through E_F = (ℏ²/2m)(3π²n)^(2/3). Omitting the density of states factor gives incorrect degeneracy temperatures.

