---

date: 2026-07-23T21:57:32+01:00
title: Time-Dependent Perturbation Theory
tags:
  - Physics
  - University
description: "Time-dependent perturbation theory: first-order transition amplitudes, Fermi's Golden Rule and why the density of final states appears, energy conservation as a long-time limit, selection rules for electric dipole transitions, spontaneous emission and the Einstein coefficients, and when the Golden Rule does not apply. With recall prompts, counterexamples by name and interleaving problems. Tier U-A."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "5 Quantum Mechanics", "url": "https://physics.wyattau.com/5-quantum-mechanics"}, {"name": "12_time Dependent Perturbation Theory", "url": "https://physics.wyattau.com/5-quantum-mechanics/12_time-dependent-perturbation-theory"}]
}
</script>

## Recall prompts

Attempt these from memory *before* reading.

- Write Fermi's Golden Rule. What does each factor mean?
- Why does a density of final states appear at all?
- What is the selection rule for electric dipole transitions, and where does it
  come from?
- Does a *static* perturbation cause transitions between non-degenerate states?
- What did Einstein have to assume to get the $A$ coefficient?

Check your answers against the text. Prompt 4 is the one that reveals what
"time-dependent" is doing in the title: a constant perturbation cannot cause
transitions at all.

## Motivation: energy conservation is a long-time limit

Time-independent perturbation theory asks how energy levels *shift*.
Time-dependent perturbation theory asks a different question: how does a state
*change*? The two are not variants of one method, because the answer to the
second is about rates, and rates need something to be conserved.

**A constant perturbation causes no transitions.** If $\hat{V}$ does not depend
on time, then in the interaction picture the amplitude for $|i\rangle \to |f\rangle$ is

$$
c_f(t) = -\frac{i}{\hbar}V_{fi}\int_0^t e^{i\omega_{fi}t'}\,\mathrm{d}t'
= -\frac{i}{\hbar}V_{fi}\,e^{i\omega_{fi}t/2}\,
\frac{2\sin(\omega_{fi}t/2)}{\omega_{fi}},
$$

which is peaked at $\omega_{fi} = 0$ and oscillates elsewhere. For long times,
$\left|\frac{\sin(\omega t/2)}{\omega/2}\right|^2 \to 2\pi t\,\delta(\omega)$:
the probability grows *linearly* with $t$ only at $\omega_{fi} = 0$, and
vanishes elsewhere. That linear growth is what "a rate" means, and it is why
the Golden Rule has a $t$ in its derivation and no $t$ in its answer.

**Energy conservation is not assumed; it emerges.** The $\delta(\omega_{fi})$
above is the statement that a transition only happens when the perturbation
supplies exactly the energy difference. For a *finite* time the peak has width
$\sim 1/t$, so energy conservation holds only to within $\hbar/t$ -- and short
pulses really do drive nominally off-resonant transitions. That is not an
approximation to correct; it is physics.

**The density of states is what makes the rate finite.** For a discrete final
state the probability oscillates forever. Summing over a continuum replaces the
square of a sinc by a smooth density $\rho(E_f)$, and that is the whole
difference between a Rabi oscillation and a decay.

### 12.1 Fermi's Golden Rule

For a time-dependent perturbation $\hat{V}(t) = \hat{V}\,e^{-i\omega t}$ applied to an initial state
$|i\rangle$, the transition rate to a continuum of final states $|f\rangle$ is:

$$
\Gamma_{i \to f} = \frac{2\pi}{\hbar}|\langle f|\hat{V}|i\rangle|^2\rho(E_f)
$$

Where $\rho(E_f)$ is the density of final states at energy $E_f = E_i + \hbar\omega$.

**Derivation.** Using first-order time-dependent perturbation theory, the transition amplitude to
state $|f\rangle$ is:

$$
c_f(t) = -\frac{i}{\hbar}\int_0^t \langle f|\hat{V}|i\rangle\,e^{i\omega_{fi}t'}\, dt'
$$

For a sinusoidal perturbation at frequency $\omega$:

$$
|c_f|^2 = \frac{|\langle f|\hat{V}|i\rangle|^2}{\hbar^2}\frac{\sin^2[(\omega_{fi} - \omega)t/2]}{(\omega_{fi} - \omega)^2/4}
$$

In the long-time limit, $\sin^2(xt)/x^2 \to 2\pi t\,\delta(x)$ Giving:

$$
\frac{|c_f|^2}{t} = \frac{2\pi}{\hbar^2}|\langle f|\hat{V}|i\rangle|^2\,\delta(E_f - E_i - \hbar\omega)
$$

Summing over all final states with density $\rho(E_f)$:

$$
\Gamma = \int \frac{d|c_f|^2}{dt}\,\rho(E_f)\,dE_f = \frac{2\pi}{\hbar}|\langle f|\hat{V}|i\rangle|^2\rho(E_f) \quad \blacksquare
$$

### 12.2 Selection Rules for Electric Dipole Transitions

The electric dipole matrix element:

$$
\langle f|\hat{\mathbf{d}}|i\rangle = -e\langle f|\mathbf{r}|i\rangle
$$

For hydrogen-like atoms, the selection rules are:

- $\Delta l = \pm 1$ (parity change required)
- $\Delta m = 0, \pm 1$ (for $z$, $x \pm iy$ polarisation respectively)
- $\Delta n$ unrestricted

The transition rate for $2p \to 1s$ in hydrogen:

$$
A_{2p \to 1s} = \frac{\omega^3}{3\pi\varepsilon_0\hbar c^3}|\langle 1s|e\mathbf{r}|2p\rangle|^2
$$

With $|\langle 1s|z|2p, m=0\rangle| = \frac{2^7\sqrt{2}}{3^5}a_0$ This gives
$A_{2p \to 1s} \approx 6.3 \times 10^8$ s$^{-1}$Corresponding to a lifetime $\tau \approx 1.6$ ns.

### 12.3 Spontaneous Emission and Einstein Coefficients

The **Einstein $A$ coefficient** (spontaneous emission rate) is related to the $B$ coefficient
(stimulated emission/absorption):

$$
A_{21} = \frac{\hbar\omega^3}{\pi^2 c^3}B_{21}
$$

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

- **E2 (electric quadrupole):** $\Delta l = 0, \pm 2$ Rate $\sim \alpha(kR)^2$ times slower than E1
- **M1 (magnetic dipole):** requires $\Delta l = 0$ Not applicable here
- **Two-photon decay:** $3d \to 2p \to 1s$ (two successive E1 transitions)

The $3d \to 2p$ transition ($\Delta l = -1$) is E1-allowed and dominates, with
$A_{3d \to 2p} \sim 6.4 \times 10^7$ s$^{-1}$.

</details>

### Key Relationships

<div class="table-wrap">

| Formula | Name | Application |
|---------|------|-------------|
| $\Gamma_{i\to f} = \frac{2\pi}{\hbar}\|\langle f\|\hat{V}\|i\rangle\|^2\rho(E_f)$ | Fermi's Golden Rule | Transition rate to continuum |
| $\Delta l = \pm 1$, $\Delta m = 0, \pm 1$ | E1 selection rules | Electric dipole transitions |
| $A_{21} = \frac{\hbar\omega^3}{\pi^2 c^3}B_{21}$ | Einstein relation | Connects spontaneous/stimulated rates |
| $\|c_f\|^2 = \frac{\|\langle f\|\hat{V}\|i\rangle\|^2}{\hbar^2}\frac{\sin^2[(\omega_{fi}-\omega)t/2]}{(\omega_{fi}-\omega)^2/4}$ | Rabi formula | Transition probability for discrete states |

</div>

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

- **Quantum electrodynamics:** Spontaneous emission is not predicted by non-relativistic quantum mechanics alone, it requires coupling to the quantised electromagnetic field vacuum.
- **Scattering theory:** The $T$-matrix formalism generalises FGR to higher orders. The optical theorem ($\sigma_{\text{tot}} = (4\pi/k)\,\text{Im}\,f(0)$) relates the forward scattering amplitude to the total cross section.
- **Solid-state physics:** Fermi's Golden Rule describes electron--phonon scattering, carrier relaxation, and exciton decay in semiconductors.

### Additional Worked Example: Photoionisation Rate

**Problem.** A hydrogen atom in the ground state is illuminated by monochromatic light at $\lambda = 50$ nm, well above the ionisation threshold (13.6 eV). Estimate the photoionisation rate using Fermi's Golden Rule.

**Solution.** The dipole matrix element for $1s \to$ continuum is approximately $\langle \epsilon_p | e\mathbf{r} | 1s \rangle \sim ea_0$. The density of continuum states at photoelectron energy $\epsilon = \hbar\omega - 13.6$ eV:

$$
k = \sqrt{2m\epsilon}/\hbar, \quad \rho(\epsilon) = \frac{V m k}{(2\pi)^3 \hbar^2} d\Omega
$$

The photoionisation cross section near threshold is $\sigma \approx 6.3 \times 10^{-18}$ cm$^2$ for hydrogen. At intensity $I = 10^{12}$ W/m$^2$, the rate $\Gamma = \sigma I / (\hbar\omega) \approx 10^{14}$ s$^{-1}$, complete ionisation occurs within femtoseconds for intense fields.

### Summary Table: Transition Types

<div class="table-wrap">

| Transition | Selection Rules | Rate | Typical Timescale |
| ------------ | ---------------- | ------ | ------------------- |
| Electric dipole (E1) | $\Delta l = \pm 1$, $\Delta m = 0,\pm 1$ | $A \sim 10^7$--$10^9$ s$^{-1}$ | ns |
| Magnetic dipole (M1) | $\Delta l = 0$, $\Delta s = \pm 1$ (spin-flip) | $A \sim 10^3$ s$^{-1}$ | $\mu$s--ms |
| Electric quadrupole (E2) | $\Delta l = 0, \pm 2$ | $A \sim 10^{-3}$--$10$ s$^{-1}$ | ms--s |
| Two-photon | No parity constraint | $A \propto I^2$ | Depends on intensity |
| Forbidden (all channels) | None allowed | $A = 0$ | Metastable if no decay path |

</div>

## Intuition

Time-dependent perturbation theory treats external influences as small disturbances to a quantum system. When a system is subjected to a time-varying field, transitions between energy levels become possible. The transition rate depends on how much the perturbation overlaps with the initial and final states, measured by matrix elements. Fermi's golden rule packages this into a simple formula: the transition rate is proportional to the square of the matrix element times the density of final states. This explains atomic transitions, photon absorption, and spontaneous emission, forming the basis of spectroscopy and laser physics.

## Counterexamples worth knowing by name

<div class="table-wrap">

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Fermi's Golden Rule applies to any transition | no | it requires a continuum of final states; between two bound states the system Rabi-oscillates instead |
| The transition rate is constant from $t = 0$ | no | it is linear at first and only becomes constant after a transient of order $\hbar/\Delta E$ |
| A static perturbation causes transitions | no | $\int e^{i\omega_{fi}t'}\,\mathrm{d}t'$ vanishes for long times unless $\omega_{fi} = 0$, i.e. unless the states are degenerate |
| Spontaneous emission follows from the Schrodinger equation | no | a time-dependent potential couples to a classical field, which cannot produce spontaneous emission; Einstein had to *postulate* the $A$ coefficient from detailed balance |
| Selection rules are absolute | no | they are selection rules for the dipole approximation; electric quadrupole and magnetic dipole transitions are weaker but real, and "forbidden" lines are observed in astrophysics |
| Energy conservation is exact in a finite process | no | it holds to within $\Delta E \sim \hbar/t$; short pulses drive off-resonant transitions routinely |
| Stronger perturbation always gives a larger transition rate | no | beyond the perturbative regime the population oscillates (Rabi) and the rate concept stops applying |

</div>

The fourth row is the most important and is usually glossed. Spontaneous
emission cannot be derived from a classical field coupled to a quantum atom --
a classical field has no vacuum fluctuations to stimulate it. Einstein got the
$A$ coefficient in 1917 by demanding detailed balance with the (derivable) $B$
coefficient and the Planck spectrum, and that argument is still the cleanest
route to it.

The last row is the boundary of the method: once the perturbation is strong
enough to move appreciable population, "rate" is the wrong concept and the
oscillation is the physics.

## Where the research frontier is

- **Strong-field and attosecond physics.** Fields intense enough to ionise with
  many photons, or short enough to resolve electron motion, sit outside
  perturbation theory entirely. Above-threshold ionisation and high-harmonic
  generation are the standard phenomena.
- **Floquet engineering.** Periodic driving creates effective Hamiltonians with
  band structures that the undriven system does not have, which is now used to
  realise topological phases on demand.
- **Cavity QED and the Purcell effect.** Spontaneous emission is not a fixed
  property of an atom: putting it in a cavity changes the density of states and
  so changes the rate. That is the Golden Rule with an engineered $\rho$.
- **Landau-Zener transitions.** A swept two-level crossing has an exact
  solution, and it is the building block for adiabatic quantum computing and
  for control protocols in qubits.
- **Quantum control.** Shaped pulses that drive a system to a chosen target
  state, with the pulse found by optimisation rather than intuition.

## Interleaving problems

Mix these with [approximation
methods](/5-quantum-mechanics/8_approximation-methods/), [angular
momentum](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/),
[operators](/5-quantum-mechanics/4_operators-and-observables/), [Series and
Limits](https://mathematics.wyattau.com/3-real-analysis/3_series/) and
[Thermodynamics and Statistical
Mechanics](/2-thermal-physics/21_thermodynamics-and-statistical-mechanics/).

1. (Series and limits.) Show that
   $\left|\frac{\sin(\omega t/2)}{\omega/2}\right|^2 \to 2\pi t\,\delta(\omega)$
   as $t \to \infty$ in the sense of distributions, by integrating against a
   test function. Identify where the factor of $2\pi$ comes from.
2. (Operators.) Show that the dipole matrix element
   $\langle f|\hat{\mathbf{r}}|i\rangle$ vanishes unless $l_f = l_i \pm 1$, by
   writing $\hat{\mathbf{r}}$ in spherical coordinates and using the
   properties of spherical harmonics. Which quantum number is *not* constrained,
   and why?
3. (Angular momentum.) A photon carries one unit of angular momentum. Show that
   this is what makes $\Delta l = \pm 1$ a *conservation* statement rather than
   merely a selection rule, and explain what happens for $\Delta l = \pm 2$.
4. (Thermal physics.) Einstein's argument: given the $B$ coefficient and the
   Planck spectrum, derive the $A$ coefficient from detailed balance. Then
   explain what quantum mechanics adds that classical electrodynamics cannot
   supply.
5. (Approximation methods.) A perturbation that is constant in time but switched
   on suddenly at $t = 0$ is *not* time-independent in this sense. Show that it
   causes transitions, and explain how a sudden switch supplies energy.
6. (Research.) The Landau-Zener formula gives the transition probability for a
   linearly swept two-level crossing. Derive it, state the adiabatic limit, and
   explain why the result is exact rather than perturbative.

## Cross-References

- **[Wave Functions and the Schrodinger Equation](/5-quantum-mechanics/3_wave-functions-and-the-schrodinger-equation/)**: Time-dependent perturbation theory builds on the Schrodinger equation for time evolution.
- **[Operators and Observables](/5-quantum-mechanics/4_operators-and-observables/)**: Matrix elements of operators determine transition rates and selection rules.
- **[Angular Momentum and the Hydrogen Atom](/5-quantum-mechanics/6_angular-momentum-and-the-hydrogen-atom/)**: Angular momentum theory provides the selection rules for electric dipole transitions.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

