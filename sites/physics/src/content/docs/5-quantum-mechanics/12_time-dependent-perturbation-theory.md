---

date: 2026-07-23T21:57:32+01:00
title: Time-Dependent Perturbation Theory
tags:
  - Physics
  - University
description: "For a time-dependent perturbation applied to an initial state Comprehensive educational content coverage with definitions and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "12_time Dependent Perturbation Theory", "url": "https://physics.wyattau.com/5-quantum-mechanics/12_time-dependent-perturbation-theory"}]
}
</script>

### 11.1 Fermi"s Golden Rule

For a time-dependent perturbation $\hat{V}(t) = \hat{V}\,e^{-i\omega t}$ applied to an initial state
$|i\rangle$The transition rate to a continuum of final states $|f\rangle$ is:

$$\Gamma_{i \to f} = \frac{2\pi}{\hbar}|\langle f|\hat{V}|i\rangle|^2\rho(E_f)$$

Where $\rho(E_f)$ is the density of final states at energy $E_f = E_i + \hbar\omega$.

**Derivation.** Using first-order time-dependent perturbation theory, the transition amplitude to
state $|f\rangle$ is:

$$c_f(t) = -\frac{i}{\hbar}\int_0^t \langle f|\hat{V}|i\rangle\,e^{i\omega_{fi}t'}\, dt'$$

For a sinusoidal perturbation at frequency $\omega$:

$$|c_f|^2 = \frac{|\langle f|\hat{V}|i\rangle|^2}{\hbar^2}\frac{\sin^2[(\omega_{fi} - \omega)t/2]}{(\omega_{fi} - \omega)^2/4}$$

In the long-time limit, $\sin^2(xt)/x^2 \to 2\pi t\,\delta(x)$Giving:

$$\frac{|c_f|^2}{t} = \frac{2\pi}{\hbar^2}|\langle f|\hat{V}|i\rangle|^2\,\delta(E_f - E_i - \hbar\omega)$$

Summing over all final states with density $\rho(E_f)$:

$$\Gamma = \int \frac{d|c_f|^2}{dt}\,\rho(E_f)\,dE_f = \frac{2\pi}{\hbar}|\langle f|\hat{V}|i\rangle|^2\rho(E_f) \quad \blacksquare$$

### 11.2 Selection Rules for Electric Dipole Transitions

The electric dipole matrix element:

$$\langle f|\hat{\mathbf{d}}|i\rangle = -e\langle f|\mathbf{r}|i\rangle$$

For hydrogen-like atoms, the selection rules are:

- $\Delta l = \pm 1$ (parity change required)
- $\Delta m = 0, \pm 1$ (for $z$, $x \pm iy$ polarisation respectively)
- $\Delta n$ unrestricted

The transition rate for $2p \to 1s$ in hydrogen:

$$A_{2p \to 1s} = \frac{\omega^3}{3\pi\varepsilon_0\hbar c^3}|\langle 1s|e\mathbf{r}|2p\rangle|^2$$

With $|\langle 1s|z|2p, m=0\rangle| = \frac{2^7\sqrt{2}}{3^5}a_0$This gives
$A_{2p \to 1s} \approx 6.3 \times 10^8$ s$^{-1}$Corresponding to a lifetime $\tau \approx 1.6$ ns.

### 11.3 Spontaneous Emission and Einstein Coefficients

The **Einstein $A$ coefficient** (spontaneous emission rate) is related to the $B$ coefficient
(stimulated emission/absorption):

$$A_{21} = \frac{\hbar\omega^3}{\pi^2 c^3}B_{21}$$

This relation, derived by Einstein in 1917 using thermodynamic arguments (detailed balance in a
blackbody radiation field), was one of the first indications that spontaneous emission requires
quantum electrodynamics.

<details>
<summary>Worked Example 11.1: Selection Rules for Hydrogen</summary>

Consider the transition $3d \to 1s$ in hydrogen. Is this an allowed E1 transition?

The matrix element involves the integral
$\langle n'l'm'|\mathbf{r}|nlm\rangle = \langle 1,0,0|r_q|3,2,m\rangle$ where $r_q$ is a spherical
tensor component.

By the Wigner--Eckart theorem and parity selection rules:

- $\Delta l = 0 - 2 = -2 \neq \pm 1$: **forbidden for E1**

The $3d \to 1s$ transition can proceed via:

- **E2 (electric quadrupole):** $\Delta l = 0, \pm 2$Rate $\sim \alpha(kR)^2$ times slower than E1
- **M1 (magnetic dipole):** requires $\Delta l = 0$Not applicable here
- **Two-photon decay:** $3d \to 2p \to 1s$ (two successive E1 transitions)

The $3d \to 2p$ transition ($\Delta l = -1$) is E1-allowed and dominates, with
$A_{3d \to 2p} \sim 6.4 \times 10^7$ s$^{-1}$.

</details>

### Key Relationships

| Formula | Name | Application |
|---------|------|-------------|
| $\Gamma_{i\to f} = \frac{2\pi}{\hbar}|\langle f|\hat{V}|i\rangle|^2\rho(E_f)$ | Fermi's Golden Rule | Transition rate to continuum |
| $\Delta l = \pm 1$, $\Delta m = 0, \pm 1$ | E1 selection rules | Electric dipole transitions |
| $A_{21} = \frac{\hbar\omega^3}{\pi^2 c^3}B_{21}$ | Einstein relation | Connects spontaneous/stimulated rates |
| $|c_f|^2 = \frac{|\langle f|\hat{V}|i\rangle|^2}{\hbar^2}\frac{\sin^2[(\omega_{fi}-\omega)t/2]}{(\omega_{fi}-\omega)^2/4}$ | Rabi formula | Transition probability for discrete states |

### Common Pitfalls

1. **Fermi's Golden Rule requires a continuum:** For transitions between discrete states (e.g., two bound states in an atom), the Rabi formula must be used. The density of states $\rho(E_f)$ in FGR ensures energy conservation is satisfied with finite probability.
2. **First-order perturbation fails for strong fields:** When the Rabi frequency $\Omega = |\langle f|\hat{V}|i\rangle|/\hbar$ is comparable to the detuning, higher-order effects (AC Stark shift, Rabi oscillations) become important.
3. **Selection rules are not absolute:** Forbidden transitions can proceed via higher multipole orders (E2, M1) or multiphoton processes, albeit at slower rates. A transition is truly forbidden only when all contributing channels vanish.
4. **The rotating wave approximation (RWA):** Dropping counter-rotating terms requires $|\omega - \omega_{fi}| \ll \omega + \omega_{fi}$. For very strong fields or ultrastrong coupling, the RWA breaks down.

### Applications

- **Laser cooling:** Doppler cooling relies on repeated absorption--spontaneous emission cycles, with each cycle reducing atomic momentum by $\hbar k$.
- **Optical pumping:** Polarised light selectively populates magnetic sublevels via dipole selection rules, preparing spin-polarised atomic samples.
- **Quantum optics:** Spontaneous emission is the fundamental source of decoherence in quantum optical systems, limiting qubit lifetimes in cavity QED.
- **Spectroscopy:** Fermi's Golden Rule underlies the interpretation of absorption spectra, photoemission, and inelastic scattering cross sections.
- **Photovoltaics:** The solar cell efficiency limit (Shockley--Queisser) derives from detailed balance between absorption and spontaneous emission.

### Connections to Other Topics

- **Quantum electrodynamics:** Spontaneous emission is not predicted by non-relativistic quantum mechanics alone — it requires coupling to the quantised electromagnetic field vacuum.
- **Scattering theory:** The $T$-matrix formalism generalises FGR to higher orders. The optical theorem ($\sigma_{\text{tot}} = (4\pi/k)\,\text{Im}\,f(0)$) relates the forward scattering amplitude to the total cross section.
- **Solid-state physics:** Fermi's Golden Rule describes electron--phonon scattering, carrier relaxation, and exciton decay in semiconductors.

### Additional Worked Example: Photoionisation Rate

**Problem.** A hydrogen atom in the ground state is illuminated by monochromatic light at $\lambda = 50$ nm, well above the ionisation threshold (13.6 eV). Estimate the photoionisation rate using Fermi's Golden Rule.

**Solution.** The dipole matrix element for $1s \to$ continuum is approximately $\langle \epsilon_p | e\mathbf{r} | 1s \rangle \sim ea_0$. The density of continuum states at photoelectron energy $\epsilon = \hbar\omega - 13.6$ eV:

$$k = \sqrt{2m\epsilon}/\hbar, \quad \rho(\epsilon) = \frac{V m k}{(2\pi)^3 \hbar^2} d\Omega$$

The photoionisation cross section near threshold is $\sigma \approx 6.3 \times 10^{-18}$ cm$^2$ for hydrogen. At intensity $I = 10^{12}$ W/m$^2$, the rate $\Gamma = \sigma I / (\hbar\omega) \approx 10^{14}$ s$^{-1}$ — complete ionisation occurs within femtoseconds for intense fields.

### Summary Table: Transition Types

| Transition | Selection Rules | Rate | Typical Timescale |
|------------|----------------|------|-------------------|
| Electric dipole (E1) | $\Delta l = \pm 1$, $\Delta m = 0,\pm 1$ | $A \sim 10^7$--$10^9$ s$^{-1}$ | ns |
| Magnetic dipole (M1) | $\Delta l = 0$, $\Delta s = \pm 1$ (spin-flip) | $A \sim 10^3$ s$^{-1}$ | $\mu$s--ms |
| Electric quadrupole (E2) | $\Delta l = 0, \pm 2$ | $A \sim 10^{-3}$--$10$ s$^{-1}$ | ms--s |
| Two-photon | No parity constraint | $A \propto I^2$ | Depends on intensity |
| Forbidden (all channels) | None allowed | $A = 0$ | Metastable if no decay path |




## Intuition

Time-dependent perturbation theory treats external influences as small disturbances to a quantum system. When a system is subjected to a time-varying field, transitions between energy levels become possible. The transition rate depends on how much the perturbation overlaps with the initial and final states, measured by matrix elements. Fermi's golden rule packages this into a simple formula: the transition rate is proportional to the square of the matrix element times the density of final states. This explains atomic transitions, photon absorption, and spontaneous emission, forming the basis of spectroscopy and laser physics.
## Cross-References

- **[Wave Functions and the Schrodinger Equation](3_wave-functions-and-the-schrodinger-equation.md)**: Time-dependent perturbation theory builds on the Schrodinger equation for time evolution.
- **[Operators and Observables](4_operators-and-observables.md)**: Matrix elements of operators determine transition rates and selection rules.
- **[Angular Momentum and the Hydrogen Atom](6_angular-momentum-and-the-hydrogen-atom.md)**: Angular momentum theory provides the selection rules for electric dipole transitions.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)
