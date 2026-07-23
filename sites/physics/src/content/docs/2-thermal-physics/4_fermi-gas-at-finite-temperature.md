---

title: Fermi Gas at Finite Temperature
tags:
  - Physics
  - University
description: "Fermi gas at finite temperature and the Sommerfeld expansion."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "4_fermi Gas At Finite Temperature", "url": "https://physics.wyattau.com/2-thermal-physics/4_fermi-gas-at-finite-temperature"}]
}
</script>

### 4.1 Sommerfeld Expansion

At finite temperature, the Fermi-Dirac distribution "smears out" the step function at
$\varepsilon_F$. The Sommerfeld expansion provides an asymptotic series for integrals of the form

$$I = \int_0^\infty \frac{f(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

When $k_BT \ll \varepsilon_F$ (the degenerate limit).

**Theorem 4.1 (Sommerfeld Expansion).** To leading order in $T/T_F$:

$$I = \int_0^\mu f(\varepsilon)\, d\varepsilon + \frac{\pi^2}{6}(k_BT)^2 f"(\mu) + \mathcal{O}(T^4)$$

_Proof (sketch)._ Write $f(\varepsilon) = f(\mu) + f'(\mu)(\varepsilon - \mu) + \cdots$ and use the
exact results:

$$\int_0^\infty \frac{d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mu + \mathcal{O}(T^4)$$

$$\int_0^\infty \frac{(\varepsilon - \mu)\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \frac{\pi^2}{6}(k_BT)^2$$

$$\int_0^\infty \frac{(\varepsilon - \mu)^2\, d\varepsilon}{e^{\beta(\varepsilon - \mu)} + 1} = \mathcal{O}(T^4)$$

Combining these with the Taylor expansion of $f(\varepsilon)$ gives the result. The key integral
identities follow from the substitution $x = \beta(\varepsilon - \mu)$ and the fact that the
integrand is an odd function of $x$ to leading order. $\blacksquare$

### 4.2 Chemical Potential at Finite Temperature

Applying the Sommerfeld expansion to the number equation
$N = \int_0^\infty g(\varepsilon) f_{\mathrm{FD}(\varepsilon)\, d\varepsilon}$ with
$g(\varepsilon) = C\sqrt{\varepsilon}$:

$$N = \frac{2}{3}C\mu^{3/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{C}{2\sqrt{\mu}} + \mathcal{O}(T^4)$$

At $T = 0$: $N = \frac{2}{3}C\varepsilon_F^{3/2}$. Expanding $\mu = \varepsilon_F + \delta\mu$ and
keeping terms to $\mathcal{O}(T^2)$:

$$\mu(T) \approx \varepsilon_F\left[1 - \frac{\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

The chemical potential decreases slightly with temperature.

### 4.3 Heat Capacity of the Electron Gas

Applying the Sommerfeld expansion to the energy:

$$U = \int_0^\infty \varepsilon\, g(\varepsilon)\, f_{\mathrm{FD}(\varepsilon)\, d\varepsilon = \frac{2}{5}C\mu^{5/2} + \frac{\pi^2}{6}(k_BT)^2 \cdot \frac{3}{2}C\mu^{1/2} + \cdots}$$

Substituting $\mu \approx \varepsilon_F$:

$$U \approx \frac{3}{5}N\varepsilon_F\left[1 + \frac{5\pi^2}{12}\left(\frac{k_BT}{\varepsilon_F}\right)^2\right]$$

$$C_V = \frac{\partial U}{\partial T} = Nk_B \cdot \frac{\pi^2}{2}\frac{k_BT}{\varepsilon_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F}$$

**Physical insight.** At room temperature ($T \approx 300$ K), $T/T_F \approx 0.006$ for copper, so
$C_V \approx 0.03 Nk_B$Which is negligible compared to the lattice contribution $\approx 3Nk_B$.
This explains why the Dulong-Petit law works for metals despite the presence of conduction
electrons.

### 4.4 Worked Example: Electronic Heat Capacity of Copper

**Problem.** Calculate the electronic contribution to $C_V$ for copper at $T = 300$ K. Compare with
the lattice contribution. Given: $\varepsilon_F = 7.0$ eV, Debye temperature $\Theta_D = 343$ K.

<details>
<summary>Solution</summary>

Electronic contribution:

$$C_V^{\mathrm{el} = Nk_B \cdot \frac{\pi^2}{2}\frac{T}{T_F} = Nk_B \cdot \frac{\pi^2}{2}\frac{300}{81000} \approx 0.018\, Nk_B}$$

Lattice contribution (from the Debye model at $T \gg \Theta_D$):

$$C_V^{\mathrm{lat} \approx 3Nk_B}$$

The ratio is:

$$\frac{C_V^{\mathrm{el}}{C_V^{\mathrm{lat}} \approx \frac{0.018}{3} \approx 0.006}}$$

The electronic heat capacity is only about $0.6\%$ of the lattice contribution at room temperature.
At very low temperatures ($T \ll \Theta_D$), the lattice contribution falls as $T^3$ while the
electronic contribution falls as $T$So the electronic term eventually dominates below a few kelvin.

$\blacksquare$

</details>

### 4.5 Key Relationships

| Concept              | Relation                                                              | Physical Meaning                                          |
| -------------------- | --------------------------------------------------------------------- | --------------------------------------------------------- |
| Sommerfeld expansion | $I = \int_0^\mu f\,d\varepsilon + \frac{\pi^2}{6}(k_BT)^2 f''(\mu)$  | Low-temperature correction to $T=0$ integrals             |
| Chemical potential   | $\mu(T) \approx \varepsilon_F\left[1 - \frac{\pi^2}{12}(T/T_F)^2\right]$ | $\mu$ decreases quadratically with $T$                    |
| Electronic heat cap. | $C_V = Nk_B \cdot \frac{\pi^2}{2}(T/T_F)$                            | Linear in $T$, suppressed by $T/T_F \ll 1$               |
| Fermi temperature    | $T_F = \varepsilon_F/k_B$                                             | Temperature scale where quantum effects become important |

### 4.6 Common Pitfalls

- **Forgetting the $T^2$ correction sign.** The chemical potential decreases with temperature, not increases. **Fix:** The Sommerfeld expansion gives $\mu < \varepsilon_F$ because thermal excitations populate states above $\varepsilon_F$ while leaving holes below, shifting the average.
- **Applying Sommerfeld expansion outside the degenerate regime.** When $T \sim T_F$, the expansion parameter $(T/T_F)^2 \sim 1$ and the series diverges. **Fix:** The expansion only converges for $k_BT \ll \varepsilon_F$; use full numerical integration otherwise.
- **Confusing $T_F$ with $T_c$ (critical temperature).** Fermi temperature is a property of the ground state, unrelated to phase transitions. **Fix:** $T_F = \varepsilon_F/k_B$ is the degeneracy temperature scale, not a transition temperature.
- **Electronic vs. lattice heat capacity crossover.** At room temperature the electronic contribution is negligible, but below $\sim 10$ K it dominates. **Fix:** Compare $C_V^{\rm el} \propto T$ with $C_V^{\rm lat} \propto T^3$ at low $T$.

### 4.7 Applications

- **Specific heat of metals:** The linear $T$ term in $C_V$ at low temperatures is a hallmark of Fermi liquid behaviour and is used to extract the density of states at $\varepsilon_F$.
- **Thermoelectric effect:** The Sommerfeld expansion explains the Mott formula for thermopower, relating $S \propto T \cdot d(\ln \sigma)/d\varepsilon$ at $\varepsilon_F$.
- **White dwarf cooling:** Degenerate electron gas thermodynamics determines the heat capacity and cooling rate of white dwarfs, with $T_F \sim 10^8$ K.
- **Heavy fermion systems:** Materials with strongly renormalised effective masses show an enhanced Sommerfeld coefficient $\gamma = C_V/T$, signalling strong correlations.

## Cross-References

- **[Statistical Mechanics](2_statistical-mechanics.md)**: The Fermi gas is built on the Fermi-Dirac distribution derived from quantum statistical mechanics.
- **[The Grand Canonical Ensemble](3_the-grand-canonical-ensemble.md)**: Fermi-Dirac statistics emerge logically from the grand canonical ensemble for non-interacting fermions.
- **[Bose-Einstein Condensation](5_bose-einstein-condensation.md)**: Bose-Einstein condensation contrasts with Fermi gas behaviour, showing how quantum statistics determine low-temperature properties.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

### 4.8 Worked Example: Sommerfeld Correction to the Electron Density

**Problem.** For a 3D free electron gas at $T = 100$ K with $\varepsilon_F = 5$ eV, compute the fractional change in the chemical potential $\mu(T)$ relative to $\varepsilon_F$.

**Solution.** Using $\mu(T) \approx \varepsilon_F[1 - (\pi^2/12)(T/T_F)^2]$:

$$T_F = \varepsilon_F/k_B = 5\;\mathrm{eV} / (8.617 \times 10^{-5}\;\mathrm{eV/K}) \approx 5.8 \times 10^4\;\mathrm{K}$$

$$\frac{T}{T_F} = \frac{100}{5.8 \times 10^4} \approx 1.72 \times 10^{-3}$$

$$\frac{\mu - \varepsilon_F}{\varepsilon_F} \approx -\frac{\pi^2}{12}(1.72 \times 10^{-3})^2 \approx -2.4 \times 10^{-6}$$

The chemical potential decreases by only about $2.4 \times 10^{-4}\%$, confirming that $\mu \approx \varepsilon_F$ is an excellent approximation at ordinary temperatures.

$\blacksquare$

## Intuition

A Fermi gas at finite temperature is like a theatre filling up with picky patrons. At absolute zero, every seat up to the Fermi energy is occupied, and the Fermi sea is perfectly flat. As temperature rises, only those electrons near the Fermi surface can be thermally excited, because the Pauli exclusion principle blocks transitions to already-occupied states. This is why the electronic specific heat is linear in temperature rather than following the classical equipartition theorem. The Sommerfeld expansion captures this by showing that thermal effects are confined to a narrow window of width kT around the Fermi energy. At ordinary temperatures in metals, only about one in a thousand conduction electrons participates in thermal physics.

### 4.9 Summary Table

| Quantity              | $T = 0$                  | $T \ll T_F$ (Sommerfeld)                      |
| --------------------- | ------------------------ | --------------------------------------------- |
| Chemical potential    | $\mu = \varepsilon_F$    | $\mu \approx \varepsilon_F[1 - \frac{\pi^2}{12}(T/T_F)^2]$ |
| Energy density        | $U_0 = \frac{3}{5}N\varepsilon_F$ | $U \approx U_0[1 + \frac{5\pi^2}{12}(T/T_F)^2]$ |
| Heat capacity         | 0                        | $C_V = Nk_B \cdot \frac{\pi^2}{2}(T/T_F)$     |

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "2 Thermal Physics", "url": "https://physics.wyattau.com/2-thermal-physics"}, {"name": "4_fermi Gas At Finite Temperature", "url": "https://physics.wyattau.com/2-thermal-physics/4_fermi-gas-at-finite-temperature"}]
}
</script>

