---

date: 2026-07-23T21:57:32+01:00
title: "Advanced Electrodynamics"
tags:
  - Physics
  - University
description: "The scalar potential of a localised charge distribution at large distances (Wher Comprehensive educational content coverage with definitions and practice proble"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "11_advanced Electrodynamics", "url": "https://physics.wyattau.com/3-electromagnetism/11_advanced-electrodynamics"}]

</script>

**History.** Adrien-Marie Legendre built the polynomials that order this expansion during Laplace's 1782-85 assault on celestial potential theory; the expansion's mathematics is older than the electrical physics it now describes. Maxwell's stress tensor arrived in the 1873 Treatise as a picture of field lines under tension, pressure across them, and forces transmitted locally through space, and Minkowski's 1908 geometry gave it the covariant form this section states. Maxwell's prediction that light presses on matter was measured by Nichols and Hull in 1901-03, matching the theory's number: the field had been proven to carry momentum.

**Ponder (attempt the hierarchy).** The expansion's terms die by powers of $1/r$: monopole, then dipole, then quadrupole. Attempt to argue the ordering from symmetry alone: why does a nonzero total charge silence every shape term, and what kind of charge arrangement must exist for the quadrupole to lead?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

Each moment measures how the previous one's cancellation failed. Nonzero $Q$ dominates because $1/r$ beats everything: shape is invisible at distance while net charge survives. If $Q = 0$, the first asymmetry, $\mathbf{p}$, leads at $1/r^2$; only when the charge arrangement is also dipole-neutral (two antiparallel dipoles, four alternating charges) does the quadrupole's $1/r^3$ speak: symmetric-top nuclei and quadrupole lenses live exactly in that regime. The hierarchy is a census of cancellations.

</div>
</details>

### 11.1 Multipole Expansion

The scalar potential of a localised charge distribution at large distances ($r \gg d$ Where $d$ is
the size of the distribution):

$$
\phi(\mathbf{r}) = \frac{1}{4\pi\varepsilon_0}\left[\frac{Q}{r} + \frac{\mathbf{p}\cdot\hat{\mathbf{r}}}{r^2} + \frac{1}{2}\sum_{ij}Q_{ij}\frac{\hat{r}_i\hat{r}_j}{r^3} + \cdots\right]
$$

**Monopole term:** $Q = \int \rho\, dV$ (total charge).

**Dipole term:** $\mathbf{p} = \int \mathbf{r}"\,\rho(\mathbf{r}')\,dV'$ (electric dipole moment).

**Quadrupole term:** $Q_{ij} = \int (3r'_ir'_j - r'^2\delta_{ij})\,\rho(\mathbf{r}')\,dV'$
(traceless quadrupole tensor).

The quadrupole term is important for nuclei with spin $I \geq 1$ and for non-spherical charge
distributions. The quadrupole moment $Q = Q_{zz}$ (in the principal axis frame) characterises the
deviation from spherical symmetry.

### 11.2 Gauge Transformations and Potentials

The scalar and vector potentials are not unique. The **gauge transformation**:

$$
\mathbf{A}' = \mathbf{A} + \nabla\chi, \quad \phi' = \phi - \frac{\partial\chi}{\partial t}
$$

Leaves $\mathbf{E}$ and $\mathbf{B}$ unchanged for any scalar function $\chi(\mathbf{r}, t)$.

**Common gauges:**

<div class="table-wrap">

| Gauge    | Condition                                                                    | Use                                |
| -------- | ---------------------------------------------------------------------------- | ---------------------------------- |
| Coulomb  | $\nabla \cdot \mathbf{A} = 0$                                                | Static problems, quantum mechanics |
| Lorenz   | $\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial\phi}{\partial t} = 0$ | Relativistic problems, radiation   |
| Temporal | $\phi = 0$                                                                   | Some scattering problems           |

</div>

In the Lorenz gauge, both $\mathbf{A}$ and $\phi$ satisfy wave equations with sources:

$$
\Box^2\mathbf{A} = -\mu_0\mathbf{J}, \quad \Box^2\phi = -\frac{\rho}{\varepsilon_0}
$$

Where $\Box^2 = \nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}$ is the d'Alembertian.

**Ponder (attempt the force without contact).** Two charges push apart without touching. Attempt Maxwell's replacement for action at a distance: surround one charge with a closed surface, and try to compute the force as a flux of the stress tensor through that surface. What must the field be carrying for this to make sense, and what measured effect proved it?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The answer: the field at each point carries momentum, and force on anything inside the surface is the momentum flux $\oint T \cdot d\mathbf{A}$ through it, with $\partial_\mu T^{\mu\nu} = -f^\nu$ as the books. Tension along field lines, pressure across them, momentum density $\mathbf{S}/c^2$: the field is a mechanical medium in exactly this sense. Nichols and Hull's 1901-03 measurement of light pressure on mirrors, matching Maxwell's $I/c$, is the experiment that retired action at a distance.

</div>
</details>

### 11.3 Electromagnetic Stress-Energy Tensor

The electromagnetic stress-energy tensor $T^{\mu\nu}$ encodes the energy density, momentum density,
and stress:

$$
T^{00} = \frac{1}{2}\left(\varepsilon_0 E^2 + \frac{B^2}{\mu_0}\right) \quad \text{(energy density)}
$$

$$
T^{0i} = \frac{1}{c}(\mathbf{E} \times \mathbf{B})_i = \frac{S_i}{c} \quad \text{(momentum density)}
$$

$$
T^{ij} = -\varepsilon_0 E_i E_j - \frac{1}{\mu_0}B_i B_j + \frac{1}{2}\delta_{ij}\left(\varepsilon_0 E^2 + \frac{B^2}{\mu_0}\right) \quad \text{(Maxwell stress tensor)}
$$

**Conservation law:** $\partial_\mu T^{\mu\nu} = -f^\nu$ where $f^\nu$ is the Lorentz force density
on charges.

**Radiation pressure:** For a normally incident plane wave with intensity $I$:

$$
P_{\text{rad}} = \frac{I}{c} = \frac{1}{2}\varepsilon_0 E_0^2
$$

For a perfect reflector, the radiation pressure is $2I/c$ (momentum transfer is doubled).

<details>
<summary>Worked Example 11.1: Radiation Pressure from Sunlight</summary>

Solar constant at Earth: $I = 1361$ W/m$^2$.

Radiation pressure on a perfectly absorbing surface:

$$
P = \frac{I}{c} = \frac{1361}{3 \times 10^8} = 4.54 \times 10^{-6}\ \text{N}/m^2 = 4.54\ \mu\text{Pa}
$$

For a perfect reflector: $P = 9.07\,\mu\text{Pa}$.

This is tiny compared to atmospheric pressure ($10^5$ Pa), but is significant for:

- Solar sails: A 100 m $\times$ 100 m sail with 90% reflectivity experiences $F \approx 0.12$ N,
  producing acceleration $a \approx 0.6$ mm/s$^2$ for a 100 kg sail.
- Asteroid deflection: Sustained radiation pressure can perturb asteroid orbits over years.
- Atom optics: Laser cooling uses radiation pressure to slow atoms to microkelvin temperatures.

</details>

## Common Pitfalls (Additional)

1. **$v_p > c$ does not violate relativity:** The phase velocity in a waveguide exceeds $c$ But no
   information or energy travels faster than $c$. The group velocity (signal velocity) is always
   $v_g < c$. Similarly, the refracted phase front in a prism can appear to move faster than $c$ But
   the actual signal does not.

2. **Gauge choice matters for potentials, not fields:** Different gauges give different $\mathbf{A}$
   and $\phi$ for the same $\mathbf{E}$ and $\mathbf{B}$. In quantum mechanics, the Hamiltonian
   depends on the gauge, but all physical observables are gauge-invariant. The Aharonov--Bohm effect
   shows that even in regions where $\mathbf{E} = \mathbf{B} = 0$ The vector potential $\mathbf{A}$
   has measurable physical effects.

3. **Multipole expansion convergence:** The multipole expansion converges only outside a sphere that
   encloses all charges. Inside the charge distribution, the expansion diverges and must not be
   used. The expansion parameter is $d/r$ where $d$ is the source size and $r$ is the observation
   distance.

4. **Radiation fields vs. Near fields:** At distances $r \ll \lambda$ (near field), the fields are
   dominated by $1/r^2$ (induction) and $1/r^3$ (electrostatic/magnetostatic) terms. The radiation
   fields ($\propto 1/r$) dominate only in the far field ($r \gg \lambda$). Do not apply the Larmor
   formula or radiation resistance in the near field.

5. **Poynting vector is not unique:** The Poynting vector
   $\mathbf{S} = \mathbf{E} \times \mathbf{H}$ is gauge-dependent and can be nonzero even in static
   situations (e.g., a charged capacitor in a constant magnetic field). Only the surface integral
   $\oint \mathbf{S} \cdot d\mathbf{a}$ (total power flow) is physically meaningful.

## Problems (Additional)

<details>
<summary>Problem 19: TE$_{10}$ Mode Field Patterns</summary>

For a rectangular waveguide ($a \times b$) operating in TE$_{10}$ mode at frequency $f$:

(a) Write the complete expressions for all six field components ($E_x, E_y, E_z, B_x, B_y, B_z$).

(b) Sketch the field pattern: show the direction and relative magnitude of $\mathbf{E}$ and
$\mathbf{B}$ in the $xy$-plane at $z = 0$.

(c) Find the positions of maximum surface current density on the walls and explain why the waveguide
loss is minimised by making the broad wall dimension $a$ as large as possible (for a given $f$).

**Solution:**

(a) For TE$_{10}$: $B_z = B_0\cos(\pi x/a)\,e^{i(\beta z - \omega t)}$.

$$
E_x = 0, \quad E_y = \frac{i\omega\mu_0 a}{\pi}B_0\sin\!\left(\frac{\pi x}{a}\right)e^{i(\beta z - \omega t)}
$$

$$
E_z = 0
$$

$$
B_x = -\frac{i\beta a}{\pi}B_0\sin\!\left(\frac{\pi x}{a}\right)e^{i(\beta z - \omega t)}, \quad B_y = 0
$$

$$
B_z = B_0\cos\!\left(\frac{\pi x}{a}\right)e^{i(\beta z - \omega t)}
$$

(b) The electric field $E_y$ is purely vertical, with a $\sin(\pi x/a)$ profile: zero at the side
walls ($x = 0, a$) and maximum at the centre ($x = a/2$). The magnetic field forms closed loops in
the $xz$-plane.

(c) Surface current $\mathbf{K} = \hat{\mathbf{n}} \times \mathbf{H}$. On the broad walls
($y = 0, b$): $\mathbf{K}$ has components from $B_x$ and $B_z$ With maximum at $x = a/2$ (where
$\sin(\pi x/a) = 1$). The power loss per unit length is:

$$
P_{\text{loss}} = \frac{R_s}{2}\oint |\mathbf{K}|^2\, dl
$$

Where $R_s = \sqrt{\omega\mu_0/(2\sigma)}$ is the surface resistance. For fixed $f$ Increasing $a$
reduces the current density on the broad walls and increases the power-handling capacity.

</details>

<details>
<summary>Problem 20: Antenna Radiation Pattern</summary>

A half-wave dipole antenna of length $\ell = \lambda/2$ carries a sinusoidal current distribution:

$$
I(z) = I_0\cos(kz), \quad -\lambda/4 \leq z \leq \lambda/4
$$

(a) Calculate the radiation fields $\mathbf{E}$ and $\mathbf{B}$ in the far field.

(b) Find the angular distribution of radiated power $dP/d\Omega$.

(c) Calculate the total radiated power and the radiation resistance. Compare with the short-dipole
result $R_{\text{rad}} = 197(\ell/\lambda)^2\,\Omega$.

**Solution:**

(a) The vector potential in the far field:

$$
A_z = \frac{\mu_0}{4\pi}\frac{e^{ikr}}{r}\int_{-\lambda/4}^{\lambda/4}I_0\cos(kz')\,e^{-ikz'\cos\theta}\,dz'
$$

The integral evaluates to:

$$
A_z = \frac{\mu_0 I_0}{4\pi}\frac{e^{ikr}}{r}\frac{2\cos\!\left(\frac{\pi}{2}\cos\theta\right)}{k\sin^2\theta}
$$

The radiation fields:

$$
E_\theta = ikA_z\sin\theta = \frac{i\mu_0 c I_0}{4\pi}\frac{e^{ikr}}{r}\frac{\cos\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin\theta}
$$

$$
B_\phi = E_\theta/c
$$

(b) The angular distribution:

$$
\frac{dP}{d\Omega} = \frac{r^2}{2Z_0}|E_\theta|^2 = \frac{Z_0 I_0^2}{32\pi^2}\frac{\cos^2\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin^2\theta}
$$

(c) Total power:

$$
P = \frac{Z_0 I_0^2}{32\pi^2}\int_0^{2\pi}\!\!\int_0^\pi \frac{\cos^2\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin^2\theta}\sin\theta\,d\theta\,d\phi
$$

$$
= \frac{Z_0 I_0^2}{16\pi}\int_0^\pi \frac{\cos^2\!\left(\frac{\pi}{2}\cos\theta\right)}{\sin\theta}\,d\theta
$$

With the substitution $u = \cos\theta$: $\int_{-1}^{1}\frac{\cos^2(\pi u/2)}{1-u^2}\,du = 1.2188$
(the Siegel integral).

$$
P = \frac{377 \times 1.2188}{16\pi}I_0^2 = 9.16\,I_0^2
$$

Radiation resistance: $R_{\text{rad}} = 2P/I_0^2 = 18.3\,\Omega$.

For comparison, a short dipole ($\ell \ll \lambda$) of length $\lambda/2$ would give
$R_{\text{rad}} = 197 \times 0.25 = 49.3\,\Omega$. The half-wave dipole has lower radiation
resistance because the current distribution (cosine) has less total effective acceleration than a
uniform current.

The directivity of the half-wave dipole is $D = 1.64$ (2.15 dBi), slightly higher than the short
dipole ($D = 1.5$).

</details>

:::note[Quick check]

1. (E) Charges $+q$ and $-q$ sit a distance $d$ apart along $\hat{\mathbf{z}}$ ($d = 1\,\text{nm}$, $q = 1.6 \times 10^{-19}\,\text{C}$). Compute the dipole moment, and give the leading potential's form on the axis at $r = 100d$.
2. (M) Derive the dipole term $\phi \approx \mathbf{p} \cdot \hat{\mathbf{r}}/(4\pi\varepsilon_0 r^2)$ in two moves: Taylor-expand $1/|\mathbf{r} - \mathbf{r}'|$ for $r \gg r'$, then integrate over the distribution.
3. (M) Construct a charge arrangement whose monopole and dipole both vanish but whose quadrupole does not, and decide which physical systems live in that regime.
4. (M) Classify the surviving multipole moments by symmetry: a uniformly charged sphere, a polarised atom in a field, a symmetric-top molecule, a neutral atom in its ground state. State the leading nonzero moment for each.
5. (M) Trap: 'the stress tensor is bookkeeping; forces really act at a distance.' Decide what the tensor adds physically, and name the experiment that decided the question.
6. (H) Derive the radiation pressure on a perfect reflector: bookkeep the momentum of incident light at intensity $I$, account for the reversal on reflection, and give the factor of 2 from momentum transfer.
7. (M) Two capacitor plates hold field $E$ between them and nothing outside. Use Maxwell's stress to compute the force per area on a plate, and decide which picture, tension along field lines or energy density, gives the number.
8. (H) Synthesise: momentum conservation $\partial_\mu T^{\mu\nu} = -f^\nu$ means emitting light recoils the emitter. Decide the sail comparison (reflective sail versus absorbing), and name the chapter where this reappears as radiation reaction.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $p = qd = 1.6 \times 10^{-28}\,\text{C}\cdot\text{m}$ along $\hat{\mathbf{z}}$. On the axis the leading term is $\phi \approx qd/(4\pi\varepsilon_0 r^2)$: the monopole cancels exactly, so the $1/r^2$ dipole term speaks first. **2.** Expand $1/|\mathbf{r} - \mathbf{r}'| = (1/r)(1 + \hat{\mathbf{r}} \cdot \mathbf{r}'/r + \cdots)$; the zeroth term integrates to $Q/r$, and the first-order term integrates to $\hat{\mathbf{r}} \cdot \mathbf{p}/(4\pi\varepsilon_0 r^2)$, since $\int \rho \mathbf{r}'\,dV' = \mathbf{p}$. The expansion is a moment-generating machine: each order, one cancellation. **3.** Two equal and opposite dipoles end to end (four charges $+q, -q, -q, +q$ in a line, equally spaced): net charge zero, net dipole zero, quadrupole nonzero. This is the regime of quadrupole lenses and, per the section, nuclei with spin $I \geq 1$, whose $Q_{zz}$ measures the deviation from spherical charge. **4.** Uniform sphere: monopole only, $Q_{\text{total}}$, every higher moment dies by spherical symmetry. Polarised atom: dipole. Symmetric-top molecule: quadrupole (dipole cancels by the symmetry). Neutral ground-state atom with full spherical symmetry: nothing beyond monopole, which itself is zero: neutral symmetric atoms have no electrostatic far field at all. **5.** It is the physics, not bookkeeping: the field carries momentum density $\mathbf{S}/c^2$, and force is momentum flux through any surface enclosing the charge, which is how the force gets transmitted without contact. Nichols and Hull (1901-03) measured the pressure of light on a mirror and matched Maxwell's $I/c$: the deciding experiment. **6.** Incident light of intensity $I$ carries momentum flux $I/c$. An absorber keeps it all: pressure $I/c$. A reflector reverses it: the transfer is $I/c - (-I/c) = 2I/c$. The factor of 2 is momentum bookkeeping, nothing else: which is why solar-sail designs prefer reflective films. **7.** The stress tensor between the plates gives attraction $P = \sigma^2/(2\varepsilon_0) = \varepsilon_0 E^2/2 = u$ per unit area: force per area equals the field energy density. Both pictures agree because tension along field lines is exactly the energy density in the tensor's diagonal; the plates are pulled together by the stretched field between them. **8.** An emitter sending power $P$ into a beam loses momentum at $P/c$ (doubled if it bounces off a reflective sail behind it). Solar sails ride this: the sun's $I/c$ is small per square metre but free and constant. Radiation reaction, the same ledger charged back to the radiating charge itself, is where Chapter 10's accelerating charges pay for their light.

</div>
</details>

:::

## Cross-References

- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/) -- The wave equation, Poynting vector, and energy conservation provide the foundation for the multipole expansion and radiation analysis.
- [Special Relativity and Electromagnetism](/3-electromagnetism/7_special-relativity-and-electromagnetism/) -- The covariant formulation of electrodynamics extends gauge invariance and the stress-energy tensor to relativistic settings.
- [Radiation from Accelerating Charges](/3-electromagnetism/10_radiation-from-accelerating-charges/) -- The Larmor formula and radiation resistance connect the multipole expansion to practical antenna calculations.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
- [Quantum Computing](https://computer-science.wyattau.com/docs/quantum-computing)

## Intuition

Antenna theory describes how oscillating currents generate electromagnetic radiation. A half-wave dipole has a current distribution shaped like a half-sine wave along its length, producing a radiation pattern that is doughnut-shaped with maximum intensity broadside to the antenna. The radiation resistance quantifies how efficiently the antenna converts input power into radiated power. The key physical picture is that the accelerating charges in the antenna create time-varying electric and magnetic fields that detach from the antenna and propagate outward as a self-sustaining electromagnetic wave. The impedance matching between the antenna and the transmission line determines how much power is reflected versus radiated.

</aside>

## Related in this track

- [Electrodynamics](/3-electromagnetism/4_electrodynamics/)
- [Electromagnetic Waves](/3-electromagnetism/5_electromagnetic-waves/)
- [Magnetostatics](/3-electromagnetism/3_magnetostatics/)
- [Maxwell's Equations](/3-electromagnetism/1_maxwell-s-equations/)
