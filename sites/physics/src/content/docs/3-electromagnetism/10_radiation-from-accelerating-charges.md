---

date: 2026-07-23T21:57:32+01:00
title: Radiation from Accelerating Charges
tags:
  - Physics
  - University
description: 'A non-relativistic charge undergoing acceleration radiates power: Comprehensive educational content coverage with definitions and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "10_radiation From Accelerating Charges", "url": "https://physics.wyattau.com/3-electromagnetism/10_radiation-from-accelerating-charges"}]
}
</script>

**History.** Joseph Larmor derived his formula in 1897, the same year J. J. Thomson announced the corpuscle the formula's charge would belong to, and neither Lienard (1898) nor Wiechert (1900) had a physics community sure that electrons existed to radiate. The formula then refused to go away: applied to Rutherford's planetary atom it condemned the electron to spiral into the nucleus in about a hundred picoseconds, which forced Bohr's 1913 stationary-state postulate. And in 1947 engineers at General Electric watched electrons in their new betatron refuse to gain energy on schedule, the light of synchrotron radiation shining from the machine's window: the formula, relativised by Lienard, had become an engineering constraint.

**Ponder (attempt the mechanism).** Why does acceleration radiate when constant velocity does not? Attempt the answer from the field pictures alone: a charge at rest has radial field lines, and a charge moving at constant velocity carries them rigidly along. Attempt to draw what the field lines must do when the charge's velocity suddenly changes, and follow the kink outward.

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The velocity change cannot inform the field everywhere at once: the old field, built around the old position, and the new field, built around the new one, meet in a kink that propagates outward at $c$. The kink carries transverse field, and transverse field carries energy in the Poynting flux. A kink born of every acceleration, propagating forever, is what radiation is: no acceleration, no kink, no energy left behind. The Larmor formula is the kink's energy bookkeeping.

</div>
</details>

**Ponder (attempt the collapse).** Apply the formula to Rutherford's atom: an electron circling a proton at the Bohr radius accelerates continuously. Attempt the energy bookkeeping: compute the radiated power, divide the orbital energy by it, and watch how long the classical atom survives. What did Bohr have to postulate to stop this?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The numbers: centripetal acceleration about $9 \times 10^{22}\,\text{m/s}^2$ gives $P \approx 5 \times 10^{-8}\,\text{W}$, against an orbital binding energy of $13.6\,\text{eV}$: collapse in roughly $10^{-10}\,\text{s}$ (the integrated answer is $1.6 \times 10^{-11}\,\text{s}$). The classical atom is gone before a clock can notice it. Bohr's stationary states, forbidding the orbiting electron to radiate except in jumps, were not a refinement: they were an emergency measure against this calculation.

</div>
</details>

### 10.1 Larmor Formula

A non-relativistic charge $q$ undergoing acceleration $\mathbf{a}$ radiates power:

$$
P = \frac{q^2 a^2}{6\pi\varepsilon_0 c^3}
$$

For an oscillating dipole $\mathbf{p} = q\mathbf{d}\cos\omega t$ with acceleration $a = \omega^2 d$:

$$
P = \frac{q^2 \omega^4 d^2}{12\pi\varepsilon_0 c^3} = \frac{\omega^4 p_0^2}{12\pi\varepsilon_0 c^3}
$$

Where $p_0 = qd$ is the dipole moment amplitude.

**Radiation resistance:** Equating $P = \frac{1}{2}I_0^2 R_{\text{rad}}$ for an antenna of length
$\ell$ carrying current $I_0$ at frequency $\omega$:

$$
R_{\text{rad}} = \frac{\mu_0 c}{6\pi}\left(\frac{\omega \ell}{c}\right)^2 = \frac{\pi}{6}Z_0\left(\frac{\ell}{\lambda}\right)^2 \approx 197\left(\frac{\ell}{\lambda\right)^2\ \Omega}
$$

### 10.2 Electric Dipole Radiation

The radiation fields from an oscillating electric dipole at distance $r \gg \lambda$:

$$
\mathbf{E} = -\frac{\mu_0 \omega^2 p_0}{4\pi r}\sin\theta\, e^{i(kr - \omega t)}\,\hat{\boldsymbol{\theta}}
$$

$$
\mathbf{B} = -\frac{\mu_0 \omega^2 p_0}{4\pi c\, r}\sin\theta\, e^{i(kr - \omega t)}\,\hat{\boldsymbol{\phi}}
$$

The angular distribution of radiated power:

$$
\frac{dP}{d\Omega} = \frac{\mu_0 p_0^2 \omega^4}{32\pi^2 c}\sin^2\theta
$$

The total power (integrating over solid angle):

$$
P = \frac{\mu_0 p_0^2 \omega^4}{12\pi c}
$$

The radiation pattern is toroidal (doughnut-shaped), with zero radiation along the dipole axis
($\theta = 0, \pi$) and maximum in the equatorial plane ($\theta = \pi/2$).

### 10.3 Relativistic Radiation: Liénard--Wiechert Potentials

For a relativistic charge with velocity $\boldsymbol{\beta} = \mathbf{v}/c$ and acceleration
$\dot{\boldsymbol{\beta}}$:

$$
P = \frac{q^2}{6\pi\varepsilon_0 c}\gamma^6\left[(\dot{\boldsymbol{\beta}})^2 - (\boldsymbol{\beta} \times \dot{\boldsymbol{\beta}})^2\right]
$$

For linear acceleration ($\boldsymbol{\beta} \parallel \dot{\boldsymbol{\beta}}$):

$$
P = \frac{q^2}{6\pi\varepsilon_0 c}\gamma^6\dot{\beta}^2
$$

For circular acceleration ($\boldsymbol{\beta} \perp \dot{\boldsymbol{\beta}}$ E.g., synchrotron):

$$
P = \frac{q^2}{6\pi\varepsilon_0 c}\gamma^4\dot{\beta}^2 = \frac{q^2 c}{6\pi\varepsilon_0}\frac{\gamma^4}{R^2}
$$

Where $R$ is the radius of curvature. The $\gamma^4$ factor (vs. $\gamma^6$ for linear) explains why
synchrotron radiation is significant for relativistic electrons but negligible for protons at the
same energy ($\gamma$ is $m_p/m_e \approx 1836$ times smaller).

**Synchrotron radiation spectrum:** The critical frequency is
$\omega_c = \frac{3}{2}\gamma^3\frac{c}{R}$. The spectrum peaks near $\omega_c$ and extends to high
harmonics, making synchrotron radiation a powerful broadband source from infrared to X-rays.

<details>
<summary>Worked Example 10.1: Synchrotron Radiation from a Storage Ring</summary>

The Diamond Light Source operates at $E = 3$ GeV electron energy with a ring circumference of 561.6
m.

(a) Lorentz factor: $\gamma = E/(m_e c^2) = 3 \times 10^9/(0.511 \times 10^6) = 5871$.

(b) For a bending magnet with radius $R = 7.1$ m:

$$
P = \frac{e^2 c}{6\pi\varepsilon_0}\frac{\gamma^4}{R^2} = \frac{(1.6 \times 10^{-19})^2 \times 3 \times 10^8}{6\pi \times 8.85 \times 10^{-12}}\frac{(5871)^4}{(7.1)^2}
$$

$$
= \frac{2.56 \times 10^{-38} \times 3 \times 10^8}{1.669 \times 10^{-10}}\frac{1.187 \times 10^{15}}{50.4}
$$

$$
= 4.60 \times 10^{-20} \times 2.355 \times 10^{13} = 1.08 \times 10^{-6}\ \text{W} per electron
$$

With a beam current of 300 mA ($I = 0.3$ A, $N = I/e = 1.875 \times 10^{18}$ electrons/s):

Total power
$= 1.08 \times 10^{-6} \times 1.875 \times 10^{18} \times \frac{561.6}{(2\pi \times 7.1)}$

Wait: the power per electron is already the total radiated power. The total synchrotron radiation
power from the ring is:

$$
P_{\text{total}} = N_{\text{stored}} \times P_{\text{per}} electron} \times \frac{\text{bending} length}{\text{circumference}
$$

For a rough estimate:
$P_{\text{total}} \approx 0.3 \times 3 \times 10^9 \times \frac{1.08 \times 10^{-6}}{1.6 \times 10^{-19}} \times \frac{2\pi \times 7.1}{561.6} \approx 500$
kW.

The actual Diamond power is about 400 kW, consistent with this estimate.

(c) Critical frequency:

$$
\omega_c = \frac{3}{2}\gamma^3\frac{c}{R} = \frac{3}{2}(5871)^3\frac{3 \times 10^8}{7.1} = 1.5 \times 2.02 \times 10^{11} \times 4.23 \times 10^7 = 1.28 \times 10^{19}\ \text{rad}/s
$$

$$
\hbar\omega_c = 1.055 \times 10^{-34} \times 1.28 \times 10^{19} = 1.35 \times 10^{-15}\ \text{J} = 8.4\ \text{keV}
$$

This is in the hard X-ray range, suitable for protein crystallography and materials science.

</details>

### 10.4 Key Relationships

- The Larmor formula is the non-relativistic limit of the full relativistic expression.
- The angular distribution $\sin^2\theta$ implies zero radiation along the acceleration axis.
- Synchrotron radiation power scales as $\gamma^4$ for circular motion but $\gamma^6$ for linear motion.
- The critical frequency $\omega_c \propto \gamma^3$ means higher energy electrons produce higher frequency radiation.

### 10.5 Common Pitfalls

- Confusing the radiated power with the energy density of the field. The power is the flux of the Poynting vector over a sphere, not the field energy.
- Forgetting the $\gamma^4$ vs $\gamma^6$ distinction when comparing synchrotron and linear acceleration radiation.
- Using the non-relativistic Larmor formula at relativistic speeds without applying the appropriate Lorentz transformation.
- Neglecting that the radiation reaction force is small compared to the Lorentz force for most practical accelerator configurations.

### 10.6 Applications

- **Synchrotron light sources:** Produce intense broadband radiation from infrared to X-rays for materials science, biology, and chemistry experiments.
- **Astrophysics:** Explains radiation from pulsars, active galactic nuclei, and cosmic microwave background fluctuations.
- **Bremsstrahlung:** X-ray production in medical imaging and industrial inspection uses radiation from decelerating electrons.
- **Antenna theory:** The radiation resistance formula guides the design of dipole and monopole antennas for communication systems.

### 10.7 Worked Example: Bremsstrahlung Radiation

**Problem.** An electron decelerates from $v = 0.1c$ to rest in a distance $d = 1$ mm inside a metal target. Estimate the fraction of kinetic energy radiated as bremsstrahlung.

<details>
<summary>Solution</summary>

The kinetic energy is $K = \frac{1}{2}m_e v^2 = \frac{1}{2}(9.109 \times 10^{-31})(3 \times 10^7)^2 = 4.10 \times 10^{-16}$ J $= 2.56$ keV.

The stopping time is $\Delta t = 2d/v = 2(10^{-3})/(3 \times 10^7) = 6.67 \times 10^{-11}$ s, so the average deceleration is $a = v/\Delta t = 4.50 \times 10^{17}$ m/s$^2$.

The radiated power is $P = e^2 a^2/(6\pi\varepsilon_0 c^3) = (1.6 \times 10^{-19})^2 (4.50 \times 10^{17})^2/(6\pi \times 8.85 \times 10^{-12} \times (3 \times 10^8)^3) \approx 2.31 \times 10^{-19}$ W.

The radiated energy is $E_{\text{rad}} = P \Delta t = 2.31 \times 10^{-19} \times 6.67 \times 10^{-11} = 1.54 \times 10^{-29}$ J.

The fraction is $E_{\text{rad}}/K \approx 3.76 \times 10^{-14}$, which is negligible. $\blacksquare$

</details>

:::note[Quick check]

1. (E) Compute the Larmor power for an electron with $a = 10^{20}\,\text{m/s}^2$ (atomic-field scale), and compare the answer's size with a radio station's output to confirm how weak single-particle radiation is.
2. (M) Show that a dipole's radiated power scales as $\omega^4$: start from $p(t) = p_0\cos\omega t$, relate dipole acceleration to $\omega^2$, and apply Larmor. Then decide what the $\omega^4$ does to blue versus red light in Rayleigh scattering.
3. (M) An electron decelerates from $0.1c$ to rest over $d = 1\,\text{mm}$. Compute the average deceleration, the Larmor power, and the radiated fraction of the $2.56\,\text{keV}$ kinetic energy, following the worked example.
4. (M) Classify by geometry: short-dipole antenna, synchrotron magnet, X-ray tube target. For each, decide the angular pattern and the spectrum, and name the radiation in the file's terms.
5. (M) Trap: 'an electron in a circular orbit moves at constant speed, so with constant velocity it should not radiate.' Decide what is wrong, and restate the condition for radiation correctly.
6. (H) Derive the Larmor formula from the far field: integrate the radiation Poynting flux $S = E_\text{rad}^2/\mu_0 c$ over a sphere using $E_\text{rad} \propto qa\sin\theta/(4\pi\varepsilon_0 c^2 R)$, and carry the $\sin\theta$ integral.
7. (M) A proton in a 1 T cyclotron at $v = 0.5c$ radiates via transverse acceleration. Decide the relativistic scaling that applies ($\gamma^4$ or $\gamma^6$), compute the rough centripetal $a$, and decide why circular machines lose energy faster than the Larmor estimate suggests.
8. (H) Synthesise: LEP's electrons lost a few percent of their 100 GeV energy per turn to this effect. Decide the design consequence for the radio-frequency cavities, and name the quantum story the classical formula cannot tell.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $P = e^2 a^2/(6\pi\varepsilon_0 c^3) = (1.6 \times 10^{-19})^2 (10^{40})/(6\pi \times 8.85 \times 10^{-12} \times 2.7 \times 10^{25}) \approx 5.7 \times 10^{-14}\,\text{W}$. A station radiates megawatts: fourteen orders of magnitude sit between one shaken electron and engineering. **2.** Dipole acceleration is $a = \omega^2 d$, so Larmor gives $P \propto a^2 \propto \omega^4 d^2$, the file's $\omega^4 p_0^2$ form. Rayleigh scattering is driven-dipole reradiation: blue (higher $\omega$) scatters as $\omega^4$, roughly (700/450)^4 $\approx 6$ times stronger than red, which is the sky's colour and the sunsets'. **3.** $a = v^2/2d = (3 \times 10^7)^2/(2 \times 10^{-3}) = 4.5 \times 10^{17}\,\text{m/s}^2$; $P \approx 2.3 \times 10^{-19}\,\text{W}$; radiated fraction $E_\text{rad}/K \approx 3.8 \times 10^{-14}$. Bremsstrahlung at these energies is negligible: the X-ray tube's photons come from the rare close encounters, not the average stopping. **4.** Short dipole: the $\sin^2\theta$ doughnut, no radiation along the axis, broadband spectrum set by the drive. Synchrotron magnet: a narrow forward cone of opening $\sim 1/\gamma$, spectrum sweeping from radio to X-ray as $\gamma$ climbs. X-ray tube: broad-angle bremsstrahlung with a cutoff at the full electron energy, the continuous spectrum under the characteristic lines. **5.** Velocity is a vector: uniform circular motion changes its direction every instant, so the acceleration is $v^2/r$, never zero. The correct condition is acceleration of any kind, in the inertial frame: constant speed along a curve radiates fully. The trap confuses the scalar speed with the vector, and Larmor's $a^2$ charges the difference. **6.** The flux integrates as $P = \int (q^2 a^2 \sin^2\theta/(16\pi^2 \varepsilon_0^2 c^4 R^2) \times 1/\mu_0 c)\, R^2 d\Omega$; the angular integral $\int \sin^2\theta\, d\Omega = 8\pi/3$ contributes, and with $1/\mu_0 \varepsilon_0 = c^2$ the geometry collapses: $P = q^2 a^2/(6\pi\varepsilon_0 c^3)$. The $\sin^2$ came from projecting the acceleration onto the transverse plane; the integral is the whole derivation. **7.** Transverse acceleration in a cyclotron: the $\gamma^4$ branch (the $\gamma^6$ belongs to acceleration parallel to velocity). With $a = v^2/r$ and $r$ set by the bending field, $P = q^4 B^2 v^2 \gamma^2/(6\pi \varepsilon_0 m^2 c^3) \cdot \gamma^2$: power climbs as $\gamma^4$ at fixed radius. The Larmor estimate with lab $a$ misses both the relativistic factor and the deficit's growth, which is why machines feel it as a wall. **8.** The cavities must replenish a few percent of 100 GeV per turn: megawatts of continuous RF, the machine's dominant power bill, scaling as $\gamma^4/E$ in energy. The classical formula cannot say how the loss is parcelled: quantum mechanically the electron emits discrete photons (in LEP, mostly single hard quanta per turn), which is the file's forward pointer to quantum radiation.

</div>
</details>

:::

## Cross-References

- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/) -- The Poynting vector and energy conservation derived in the wave chapter are used to compute radiated power from accelerating charges.
- [Special Relativity and Electromagnetism](/3-electromagnetism/7_special-relativity-and-electromagnetism/) -- The relativistic field transformations explain the $\gamma^4$ and $\gamma^6$ scaling of synchrotron and linear radiation.
- [Potentials and Gauge Transformations](/3-electromagnetism/6_potentials-and-gauge-transformations/) -- The Liénard-Wiechert potentials are the retarded solutions to the wave equations for potentials derived in that chapter.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Intuition

Radiation is how accelerating charges shed energy. The Larmor formula shows that power radiated is proportional to the square of acceleration, so rapidly changing charges radiate intensely. The toroidal radiation pattern means antennas radiate maximally perpendicular to their axis, like a doughnut of energy. Synchrotron radiation becomes directional at relativistic speeds because the radiation cone narrows, like a lighthouse beam. Bremsstrahlung produces a continuous X-ray spectrum because the deceleration is随机. The radiation reaction force is the charge feeling its own field, a subtle effect that becomes important in extreme environments.

## Related in this track

- [Advanced Electrodynamics](/3-electromagnetism/11_advanced-electrodynamics/)
- [Electrodynamics](/3-electromagnetism/4_electrodynamics/)
- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/)
- [Magnetostatics](/3-electromagnetism/3_magnetostatics/)
