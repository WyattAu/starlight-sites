---
title: "Gravitational Fields -- Diagnostic Tests"
description: ""bound" and would need energy input to escape.

(b) At the surface ($r = R_E$):

$$V_s = -\frac{GM_E}{R_E} = -\frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24}}{6.4 \times 10^6} = -\frac{4.002 \times 10^{14}}{6.4 \times 10^6} = -6.25 \times 10^7\,\text{J}\,\text{kg}^{-1}$$

At height $3R_E$ ($r = 4R_E$):

$$V = -\frac{GM_E}{4R_E} = -\frac{6.25 \times 10^7}{4} = -1.56 \times 10^7\,\text{J}\,\text{kg}^{-1}$$

(c) Total energy in orbit of radius $r$: $E = -\frac{GMm}{2r}$

At $r_1 = 2R_E$:

$$E_1 = -\frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24} \times 500}{2 \times 2 \times 6.4 \times 10^6} = -\frac{2.001 \times 10^{17}}{2.56 \times 10^7} = -7.82 \times 10^9\,\text{J}$$

At $r_2 = 5R_E$:

$$E_2 = -\frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24} \times 500}{2 \times 5 \times 6.4 \times 10^6} = -\frac{2.001 \times 10^{17}}{6.4 \times 10^7} = -3.13 \times 10^9\,\text{J}$$

Energy required:
$\Delta E = E_2 - E_1 = -3.13 \times 10^9 - (-7.82 \times 10^9) = 4.69 \times 10^9\,\text{J}$

---

### UT-3: Escape Velocity Derivation and Application

**Question:**

(a) Derive the expression for escape velocity from the surface of a planet of mass $M$ and radius
$R$.

(b) Calculate the escape velocity from the surface of the Moon
($M_M = 7.35 \times 10^{22}\,\text{kg}$, $R_M = 1.74 \times 10^6\,\text{m}$).

(c) A student argues that "a projectile launched at escape velocity will escape to infinity and then
stop." Explain why this is misleading.

**Solution:**

(a) To escape, the projectile must reach infinity with zero kinetic energy (minimum energy
condition). By conservation of energy:

$$\frac{1}{2}mv_e^2 - \frac{GMm}{R} = 0 + 0$$

$$\frac{1}{2}mv_e^2 = \frac{GMm}{R}$$

$$v_e = \sqrt{\frac{2GM}{R}}$$

This is independent of the mass of the projectile.

(b) $v_e = \sqrt{\frac{2 \times 6.67 \times 10^{-11} \times 7.35 \times 10^{22}}{1.74 \times 10^6}}$

$$= \sqrt{\frac{9.805 \times 10^{12}}{1.74 \times 10^6}} = \sqrt{5.635 \times 10^6} = 2374\,\text{m}\,\text{s}^{-1}$$

$$v_e \approx 2.37\,\text{km}\,\text{s}^{-1}$$

(c) The student"s statement is misleading for two reasons:

1. "At infinity" is an idealisation. In practice, escape velocity means the object reaches a
   distance where the gravitational influence of the planet is negligible compared to other bodies.
   It never truly "reaches infinity."

2. More precisely, escape velocity is the speed at which the total energy (KE + PE) is exactly zero.
   The object asymptotically approaches zero speed as $r \to \infty$But never actually stops at any
   finite distance. At any finite distance, the object still has some residual KE.

The escape velocity is a **threshold**: above this speed, the object is unbound (hyperbolic
trajectory); below it, the object is bound (elliptical trajectory); at exactly escape velocity, the
trajectory is parabolic.

## Integration Tests

### IT-1: Geostationary Orbit Derivation (with Circular Motion and Energy)

**Question:**

(a) Derive the condition for a geostationary orbit, showing that the orbital radius and period are
uniquely determined by the planet's mass.

(b) Calculate the orbital radius, altitude, and orbital speed of a geostationary satellite around
the Earth.

(c) Calculate the total energy of the satellite in this orbit, and the energy required to place it
there from the Earth's surface.

**Solution:**

(a) For a geostationary orbit, the satellite must:

- Orbit in the equatorial plane
- Have the same angular velocity as the Earth's rotation
- Be at a height where the orbital period equals one sidereal day

Equating gravitational force to centripetal force:

$$\frac{GMm}{r^2} = m\omega^2 r$$

$$r^3 = \frac{GM}{\omega^2}$$

The orbital period is $T = 2\pi/\omega$So $\omega = 2\pi/T$ where $T = 86164\,\text{s}$ (one
sidereal day).

$$r^3 = \frac{GMT^2}{4\pi^2}$$

This uniquely determines $r$ given $M$ and $T$.

(b) $r^3 = \frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24} \times (86164)^2}{4\pi^2}$

$$= \frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24} \times 7.424 \times 10^9}{39.48}$$

$$= \frac{2.972 \times 10^{24}}{39.48} = 7.528 \times 10^{22}$$

$$r = (7.528 \times 10^{22})^{1/3} = 4.224 \times 10^7\,\text{m}$$

Altitude:
$h = r - R_E = 4.224 \times 10^7 - 6.4 \times 10^6 = 3.584 \times 10^7\,\text{m} = 35840\,\text{km}$

Orbital speed:
$v = \frac{2\pi r}{T} = \frac{2\pi \times 4.224 \times 10^7}{86164} = 3076\,\text{m}\,\text{s}^{-1}$

(c) Total energy: $E = -\frac{GMm}{2r}$

For $m = 1000\,\text{kg}$ (typical communications satellite):

$$E = -\frac{6.67 \times 10^{-11} \times 6.0 \times 10^{24} \times 1000}{2 \times 4.224 \times 10^7} = -\frac{4.002 \times 10^{17}}{8.448 \times 10^7} = -4.74 \times 10^9\,\text{J}$$

Energy from the surface (at rest):

On surface:
$E_0 = -\frac{GMm}{R_E} = -\frac{4.002 \times 10^{17}}{6.4 \times 10^6} = -6.25 \times 10^{10}\,\text{J}$

Energy required:
$\Delta E = E - E_0 = -4.74 \times 10^9 - (-6.25 \times 10^{10}) = 5.78 \times 10^{10}\,\text{J}$

Note: this is the theoretical minimum. In practice, much more energy is needed due to atmospheric
drag, the need to change from the Earth's rotational velocity, and orbit-raising manoeuvres.

---

### IT-2: Binary Star System (with Circular Motion and Energy)

**Question:**

Two stars of masses $m_1 = 3.0 \times 10^{30}\,\text{kg}$ and $m_2 = 1.0 \times 10^{30}\,\text{kg}$
orbit their common centre of mass in circular orbits. The separation between them is
$d = 2.0 \times 10^{11}\,\text{m}$.

(a) Calculate the orbital radii of each star about the centre of mass.

(b) Calculate the orbital period of the system.

(c) Calculate the total energy of the system and show that it equals $-\frac{Gm_1 m_2}{2d}$.

**Solution:**

(a) Centre of mass: $m_1 r_1 = m_2 r_2$ and $r_1 + r_2 = d$

$$r_1 = \frac{m_2 d}{m_1 + m_2} = \frac{1.0 \times 10^{30} \times 2.0 \times 10^{11}}{4.0 \times 10^{30}} = 5.0 \times 10^{10}\,\text{m}$$

$$r_2 = d - r_1 = 1.5 \times 10^{11}\,\text{m}$$

(b) The gravitational force provides the centripetal force for both stars. Equating for star 1:

$$\frac{Gm_1 m_2}{d^2} = m_1 \omega^2 r_1$$

$$\omega^2 = \frac{Gm_2}{d^2 r_1} = \frac{Gm_2(m_1 + m_2)}{d^2 \times m_2 d} = \frac{G(m_1 + m_2)}{d^3}$$

$$\omega = \sqrt{\frac{G(m_1 + m_2)}{d^3}} = \sqrt{\frac{6.67 \times 10^{-11} \times 4.0 \times 10^{30}}{8.0 \times 10^{33}}}$$

$$= \sqrt{\frac{2.668 \times 10^{20}}{8.0 \times 10^{33}}} = \sqrt{3.335 \times 10^{-14}} = 1.826 \times 10^{-7}\,\text{rad}\,\text{s}^{-1}$$

Period:
$T = 2\pi/\omega = 2\pi/(1.826 \times 10^{-7}) = 3.441 \times 10^7\,\text{s} \approx 398\,\text{days}$

(c) Total KE:

$$KE = \frac{1}{2}m_1(\omega r_1)^2 + \frac{1}{2}m_2(\omega r_2)^2 = \frac{1}{2}\omega^2(m_1 r_1^2 + m_2 r_2^2)$$

Total PE: $PE = -\frac{Gm_1 m_2}{d}$

Using the virial theorem for gravitational systems ($KE = -\frac{1}{2}PE$):

$$E = KE + PE = -\frac{1}{2}PE + PE = \frac{1}{2}PE = -\frac{Gm_1 m_2}{2d}$$

Substituting:
$E = -\frac{6.67 \times 10^{-11} \times 3.0 \times 10^{30} \times 1.0 \times 10^{30}}{2 \times 2.0 \times 10^{11}}$

$$= -\frac{2.001 \times 10^{50}}{4.0 \times 10^{11}} = -5.00 \times 10^{38}\,\text{J}$$

---

### IT-3: Gravitational Potential and Field Between Two Planets (with Energy)

**Question:**

Two identical planets each of mass $M = 3.0 \times 10^{24}\,\text{kg}$ and radius
$R = 4.0 \times 10^6\,\text{m}$ are separated by a distance $d = 5.0 \times 10^7\,\text{m}$ (centre
to centre).

(a) Calculate the gravitational potential at the midpoint between the two planets.

(b) Calculate the position (between the planets) where the gravitational field strength is zero.

(c) A space probe of mass $100\,\text{kg}$ is at the point of zero field strength. Calculate the
minimum speed it must have to reach the surface of either planet.

**Solution:**

(a) At the midpoint ($r = d/2 = 2.5 \times 10^7\,\text{m}$ from each planet):

$$V = -\frac{GM}{d/2} - \frac{GM}{d/2} = -\frac{4GM}{d}$$

$$V = -\frac{4 \times 6.67 \times 10^{-11} \times 3.0 \times 10^{24}}{5.0 \times 10^7} = -\frac{8.004 \times 10^{14}}{5.0 \times 10^7} = -1.60 \times 10^7\,\text{J}\,\text{kg}^{-1}$$

(b) Let the zero-field point be at distance $x$ from planet 1 (so $d - x$ from planet 2):

$$\frac{GM}{x^2} = \frac{GM}{(d - x)^2}$$

$$x^2 = (d - x)^2$$

$$x = d - x \Rightarrow x = d/2 = 2.5 \times 10^7\,\text{m}$$

This is the midpoint (expected by symmetry since the planets are identical).

(c) At the midpoint, the potential energy of the probe is:

$$PE_{\text{mid}} = mV = 100 \times (-1.60 \times 10^7) = -1.60 \times 10^9\,\text{J}$$

At the surface of planet 1 (distance
$x = d/2 - R = 2.5 \times 10^7 - 4.0 \times 10^6 = 2.1 \times 10^7\,\text{m}$ from the midpoint):

$$PE_{\text{surf}} = -\frac{GMm}{R} - \frac{GMm}{d - R}$$

$$= -\frac{6.67 \times 10^{-11} \times 3.0 \times 10^{24} \times 100}{4.0 \times 10^6} - \frac{6.67 \times 10^{-11} \times 3.0 \times 10^{24} \times 100}{4.6 \times 10^7}$$

$$= -\frac{2.001 \times 10^{16}}{4.0 \times 10^6} - \frac{2.001 \times 10^{16}}{4.6 \times 10^7}$$

$$= -5.00 \times 10^9 - 4.35 \times 10^8 = -5.44 \times 10^9\,\text{J}$$

The probe needs to go from PE $= -1.60 \times 10^9\,\text{J}$ to PE $= -5.44 \times 10^9\,\text{J}$A
decrease of $3.84 \times 10^9\,\text{J}$.

Since PE decreases (becomes more negative), the probe gains KE. It needs zero initial speed --
gravity will pull it to the surface. The probe at the zero-field point is at a gravitational
potential "ridge" (unstable equilibrium). Any perturbation towards either planet will cause it to
fall. The minimum speed is zero (it is at an unstable equilibrium point).
