---
date: 2026-07-23T21:57:32+01:00
title: Superconductivity
tags:
  - University Physics
description: "Zero resistance, the Meissner effect, London and Ginzburg-Landau theory, BCS pairing, type I and II superconductors, and the Josephson effects: what each theory explains and what it cannot."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "6 Solid State Physics", "url": "https://physics.wyattau.com/6-solid-state-physics"}, {"name": "7_superconductivity", "url": "https://physics.wyattau.com/6-solid-state-physics/7_superconductivity"}]
}
</script>

Superconductivity is not perfect conductivity. The distinction is the whole
subject, and it is the first thing to get straight: a perfect conductor and a
superconductor respond differently to a magnetic field, and only one of them
expels it. Everything in this page is downstream of that single experimental
fact.

## Intuition

Picture current in a copper wire as electrons scattering off vibrations and
impurities, losing a little energy each time -- that is resistance. Now picture
the electrons paired up and moving as a single coherent object, described by one
collective wavefunction that extends through the whole piece of metal. To scatter,
an electron would have to break its pair, and at low temperature there is not
enough thermal energy to do it. Resistance does not become small; it becomes
exactly zero, and current set flowing in a superconducting ring has been observed
to persist for years without decay.

The Meissner effect is stranger. Bring a magnet near a superconductor and the
superconductor pushes back, levitating the magnet. That is not simply "zero
resistance" doing its work: a perfect conductor would *freeze in* whatever field
was present when it cooled, because with $\rho = 0$ the flux through a loop cannot
change. A superconductor does the opposite -- it expels the field regardless of
history. Expulsion is a thermodynamic statement about the ground state, and that
is why the London equations, which describe it, are not a consequence of
$\rho = 0$.

## 7.1 Phenomenology

Discovered by Onnes in 1911, in mercury at $T_c = 4.2\,\mathrm{K}$.

1. **Zero resistance.** $\rho = 0$ for $T < T_c$.
2. **Meissner effect.** Magnetic flux is expelled from the interior:
   $\mathbf{B} = 0$ inside for $T < T_c$ and $B < B_c$.
3. **Critical field.** Superconductivity is destroyed above
   $B_c(T) = B_c(0)\big[1 - (T/T_c)^2\big]$.
4. **Critical current.** Destroyed above a critical current density $J_c$.

The critical field is thermodynamic: it is where the free energy gained by
condensing into the superconducting state no longer pays for expelling the field.
The condensation energy density is

$$
\frac{1}{2}\mu_0 H_c^2 = \frac{F_n - F_s}{V},
$$

the difference between normal and superconducting free energies per unit volume,
which is why $B_c(T)$ has a definite shape and is not a fitting curve.

## 7.2 London Equations

The London brothers wrote the phenomenology down as two equations for the
supercurrent density $\mathbf{J}_s$, with $n_s$ the density of superconducting
electrons:

$$
\frac{\partial \mathbf{J}_s}{\partial t} = \frac{n_s e^2}{m_e}\,\mathbf{E},
\qquad
\nabla \times \mathbf{J}_s = -\frac{n_s e^2}{m_e}\,\mathbf{B}.
$$

The first is Newton's second law for carriers that never scatter:
$m_e\,\partial\mathbf{v}/\partial t = -e\mathbf{E}$ with $\mathbf{J}_s = -n_s e\mathbf{v}$.
The second is the one that carries new physics, and it is *assumed*, not derived
from $\rho = 0$. To see that the two are genuinely different, take the first
London equation and Maxwell's equation for a conductor with $\sigma \to \infty$;
what follows is that $\partial\mathbf{B}/\partial t = 0$ -- flux is *frozen*,
whatever it was when the material went superconducting. The second London
equation says $\mathbf{B} = 0$ outright, which is a different claim and the one
experiment supports.

**Deriving the penetration depth.** Take $\nabla \times$ of the second London
equation and use Ampere's law $\nabla \times \mathbf{B} = \mu_0 \mathbf{J}_s$
(neglecting the normal current):

$$
\nabla \times (\nabla \times \mathbf{J}_s)
= -\frac{n_s e^2}{m_e}\,\nabla \times \mathbf{B}
= -\frac{n_s e^2}{m_e}\,\mu_0 \mathbf{J}_s.
$$

Using $\nabla \times (\nabla \times \mathbf{J}_s) = \nabla(\nabla \cdot \mathbf{J}_s) - \nabla^2\mathbf{J}_s$
and $\nabla \cdot \mathbf{J}_s = 0$ for steady state:

$$
\nabla^2 \mathbf{J}_s = \frac{1}{\lambda_L^2}\,\mathbf{J}_s,
\qquad
\lambda_L = \sqrt{\frac{m_e}{\mu_0 n_s e^2}},
$$

and identically for $\mathbf{B}$:

$$
\nabla^2 \mathbf{B} = \frac{\mathbf{B}}{\lambda_L^2}.
$$

For a half-space $x > 0$ with field $B_0$ outside, the decaying solution is

$$
\mathbf{B}(x) = B_0\,e^{-x/\lambda_L},
$$

so the field falls by $1/e$ over the **London penetration depth** $\lambda_L$,
typically $10$--$100\,\mathrm{nm}$. The Meissner effect is not a surface with
field exactly zero beyond it; it is field decaying over a finite depth, and
$\mathbf{B} = 0$ in the bulk is the large-body limit of that decay.

## 7.3 Ginzburg-Landau Theory

The London equations describe the electromagnetic response but say nothing about
*why* there is a superconducting order parameter, or what happens near $T_c$.
Ginzburg-Landau theory introduces a complex order parameter $\psi(\mathbf{r})$
with $|\psi|^2 = n_s$ and writes the free energy as

$$
F = F_n + \int d^3r \left[
\alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4
+ \frac{1}{2m^*}\left|(-i\hbar\nabla - 2e\mathbf{A})\psi\right|^2
+ \frac{|\mathbf{B}|^2}{2\mu_0}
\right].
$$

Minimising gives two equations. Varying in $\psi^*$:

$$
\alpha\psi + \beta|\psi|^2\psi + \frac{1}{2m^*}(-i\hbar\nabla - 2e\mathbf{A})^2\psi = 0,
$$

which is a Schrödinger equation for $\psi$ with charge $2e$ -- the first hint of
pairing, written down in 1950, seven years before BCS explained it. Varying in
$\mathbf{A}$ gives

$$
\mathbf{J}_s = \frac{e^*\hbar}{2m^*}\left(\psi^*\nabla\psi - \psi\nabla\psi^*\right)
- \frac{e^{*2}}{m^*}|\psi|^2\mathbf{A},
\qquad e^* = 2e,
$$

which reproduces both London equations in the limit $|\psi|$ constant, and
additionally shows the flux through a ring is quantised in units of $h/2e$ -- the
other hint.

Two lengths fall out of the theory, and their ratio controls everything:

$$
\xi = \sqrt{\frac{\hbar^2}{2m^*|\alpha|}},
\qquad
\kappa = \frac{\lambda_L}{\xi}.
$$

$\xi$ is the **coherence length**, the smallest distance over which $|\psi|$ can
vary -- the size of a Cooper pair. $\kappa$ is the **GL parameter**, and the
single criterion

$$
\kappa < \frac{1}{\sqrt{2}} \;\text{type I}, \qquad
\kappa > \frac{1}{\sqrt{2}} \;\text{type II}
$$

is the whole of the type I/II distinction. That a material's response to a field
is decided by one dimensionless ratio is the theory's central result.

## 7.4 BCS Theory

BCS theory (Bardeen, Cooper, Schrieffer, 1957) explains the order parameter. The
mechanism is Cooper pairing: two electrons just above the Fermi surface with
opposite momenta and spins form a bound state through the lattice-mediated
effective attraction. The pair has charge $2e$ and spin $0$, so it is a boson and
can condense.

**The gap equation.** With $E_{\mathbf{k}} = \sqrt{\xi_{\mathbf{k}}^2 + \Delta^2}$
the quasiparticle energy, $\xi_{\mathbf{k}}$ the normal-state energy measured from
$E_F$, and $V_{\mathrm{pair}}$ the effective attraction, self-consistency requires

$$
\Delta = V_{\mathrm{pair}} \sum_{\mathbf{k}} \frac{\Delta}{2E_{\mathbf{k}}}
\tanh\!\left(\frac{E_{\mathbf{k}}}{2k_B T}\right).
$$

Dividing out $\Delta$ and replacing the sum by an integral over the density of
states $N(E_F)$ (constant near the Fermi level, over the Debye window
$\hbar\omega_D$) gives

$$
1 = N(E_F) V_{\mathrm{pair}} \int_0^{\hbar\omega_D}
\frac{d\xi}{\sqrt{\xi^2 + \Delta^2}}
\tanh\!\left(\frac{\sqrt{\xi^2+\Delta^2}}{2k_B T}\right).
$$

At $T = 0$ the $\tanh$ is $1$ and the integral is elementary:

$$
\int_0^{\hbar\omega_D} \frac{d\xi}{\sqrt{\xi^2 + \Delta^2}}
= \operatorname{arsinh}\!\left(\frac{\hbar\omega_D}{\Delta}\right)
\approx \ln\!\frac{2\hbar\omega_D}{\Delta},
$$

so

$$
\Delta(0) = 2\hbar\omega_D\, e^{-1/N(E_F)V_{\mathrm{pair}}}.
$$

At $\Delta \to 0$, setting $T = T_c$:

$$
k_B T_c = 1.13\,\hbar\omega_D\, e^{-1/N(E_F)V_{\mathrm{pair}}}.
$$

Dividing the two eliminates the unknown coupling entirely:

$$
\frac{2\Delta(0)}{k_B T_c} = \frac{4\hbar\omega_D}{1.13\,\hbar\omega_D} \cdot \frac{1}{2} \cdot 2 \approx 3.53,
$$

a **universal number** with no free parameter, and the cleanest test of the
theory. Measured values in conventional superconductors cluster around $3.5$.

The exponential in $-1/(N V)$ is the physical content. A weak attraction produces
an exponentially *small* gap, which is why superconductivity was not understood
for 46 years: perturbation theory in $V$ produces a series in $NV$, and the answer
is not analytic at $NV = 0$. Every term of the perturbation series is finite and
they sum to zero.

## 7.5 Type I and Type II

<div class="table-wrap">

| | Type I | Type II |
| --- | --- | --- |
| GL parameter | $\kappa < 1/\sqrt{2}$ | $\kappa > 1/\sqrt{2}$ |
| Critical field | one, $B_c$ | two, $B_{c1} < B_{c2}$ |
| Intermediate state | none | mixed, $B_{c1} < B < B_{c2}$ |
| Examples | Pb, Hg, Al | Nb, YBCO, all high-$T_c$ |

</div>

In the mixed state, magnetic flux penetrates as **vortices** -- tubes of normal
material carrying one flux quantum $\Phi_0 = h/2e$ each, with supercurrent
circulating around them. Vortices repel, so they form a lattice; pinning them to
defects is what lets a type II material carry large currents, which is why
superconducting magnets are built from type II materials and why $J_c$ is an
engineering quantity rather than a fundamental one.

Flux quantisation in units of $h/2e$ rather than $h/e$ was the experimental
confirmation that the carriers have charge $2e$, and it is independent evidence
for pairing.

## 7.6 Josephson Effects

Two superconductors separated by a thin insulating barrier exchange a
supercurrent. The **DC Josephson effect**: with no applied voltage, a current

$$
J = J_c \sin\delta
$$

flows, where $\delta = \theta_1 - \theta_2$ is the phase difference across the
junction and $J_c$ depends on the barrier. Current flows *with zero voltage* --
not a small resistance, no resistance.

The **AC Josephson effect**: with a DC voltage $V$ across the junction, the phase
evolves as

$$
\frac{d\delta}{dt} = \frac{2eV}{\hbar},
$$

so the current oscillates at frequency $\omega = 2eV/\hbar$. Since $e$ and
$\hbar$ are the two most precisely known constants in physics, this turns a
voltage measurement into a frequency measurement and is the basis of the volt
standard.

Both effects follow from one assumption: that $\psi$ is a coherent order
parameter with a well-defined phase. Neither has a normal-state analogue, which
is why the Josephson junction is the cleanest probe of superconducting phase
coherence.

## 7.7 High-Temperature Superconductors

Discovered in 1986 by Bednorz and Müller. Cuprates such as YBCO
($\mathrm{YBa_2Cu_3O_{7-\delta}}$) reach $T_c \approx 135\,\mathrm{K}$, above
liquid nitrogen's $77\,\mathrm{K}$ -- the reason they transformed applications.

They are type II with large $\kappa$, layered, and *not* explained by BCS. Three
differences matter:

- **$d$-wave pairing.** The gap has $d_{x^2-y^2}$ symmetry,
  $\Delta(\mathbf{k}) = \Delta_0(\cos k_x - \cos k_y)/2$, which changes sign under
  a $90°$ rotation and vanishes along the diagonals $k_x = \pm k_y$. Conventional
  superconductors are $s$-wave, with $\Delta$ constant. The sign change is
  measurable in phase-sensitive experiments and is established.
- **Short coherence length.** $\xi \sim 1$--$2\,\mathrm{nm}$ against $\sim
  100\,\mathrm{nm}$ conventionally, so $\kappa$ is large and the materials are
  extreme type II. It also makes them sensitive to defects at the scale of a unit
  cell.
- **Strong anisotropy.** Properties differ sharply between the $ab$-planes and the
  $c$-axis, a consequence of the layered perovskite structure.

The pairing mechanism is still open. Phonons cannot be the whole story: the
isotope effect, which in conventional superconductors confirms lattice
involvement through $T_c \propto M^{-1/2}$, is much reduced or absent in
cuprates. Candidate mechanisms involve antiferromagnetic spin fluctuations, and
no consensus has formed.

## Common Pitfalls

- **Calling it perfect conductivity.** A perfect conductor freezes in flux;
  a superconductor expels it. Only the second is observed, and only the London
  equations give it.
- **Treating $\mathbf{B} = 0$ as exact everywhere.** The field decays over
  $\lambda_L$, which is finite; the bulk statement is a limit for samples much
  larger than $\lambda_L$.
- **Reading the gap equation as an equation to solve for $V$.** It is a
  self-consistency condition on $\Delta$: $\Delta$ appears on both sides, and
  $\Delta = 0$ is always a solution. Superconductivity is the *non-trivial*
  solution, and it exists only below $T_c$.
- **Expecting perturbation theory to find the gap.** The answer is
  $\exp(-1/NV)$, which is non-analytic at $NV = 0$: every term of the series in
  $NV$ vanishes. This is why the problem sat open for 46 years.
- **Quoting $2\Delta(0)/k_BT_c = 3.53$ as universal.** It is universal *within
  weak-coupling BCS*. Strong coupling, and all the cuprates, deviate -- and the
  deviation is diagnostic.
- **Using $\kappa$ as a small correction.** $\kappa$ decides type I versus type
  II outright at $\kappa = 1/\sqrt{2}$, which decides whether a material is useful
  for magnets.

## Cross-References

- **[Crystal Structures](/6-solid-state-physics/1_crystal-structures/)** -- the lattice whose vibrations mediate the pairing interaction.
- **[Lattice Vibrations and Phonons](/6-solid-state-physics/4_lattice-vibrations-and-phonons/)** -- the Debye frequency $\omega_D$ entering every BCS formula.
- **[Electronic Band Structure](/6-solid-state-physics/5_electronic-band-structure/)** -- the Fermi surface and $N(E_F)$ that set the coupling scale.
- **[Magnetism in Solids](/6-solid-state-physics/10_magnetism-in-solids/)** -- the magnetic response being expelled, and antiferromagnetic fluctuations as the candidate cuprate mechanism.
- **[Many-Body Physics in Solids](/6-solid-state-physics/14_many-body-physics-in-solids/)** -- quasiparticles and the broken-symmetry description of the condensate.
- **[Superconductivity in the BCS Frame](https://physics.wyattau.com/docs/superconductivity)** -- the companion overview page.
- [Quantum Mechanics](https://physics.wyattau.com/5-quantum-mechanics/) -- the coherent order parameter and phase, which is what the Josephson effects measure.
- [Statistical Mechanics](https://physics.wyattau.com/2-thermal-physics/21_thermodynamics-and-statistical-mechanics/) -- the free-energy argument behind $B_c(T)$.
