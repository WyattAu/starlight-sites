---

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Electrostatics",
  "description": "CBSE Class 12 physics: Electrostatics with Coulomb's law, electric fields, Gauss's law, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>
title: "Electrostatics"
description: "CBSE Class 12 physics: Electrostatics with Coulomb's law, electric fields, Gauss's law, and worked examples."
---

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Electrostatics",
  "description": "CBSE Class 12 physics: Electrostatics with Coulomb's law, electric fields, Gauss's law, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

# Electrostatics

Electrostatics studies electric charges at rest. It covers Coulomb's law, electric fields, Gauss's law, and electric potential.

## Key Concepts

- Coulomb's law: $F = k\frac{|q_1 q_2|}{r^2}$ where $k = 9 \times 10^9 \, \text{N m}^2/\text{C}^2$
- Electric field: $\vec{E} = \frac{\vec{F}}{q}$ (force per unit charge)
- Electric field due to point charge: $E = k\frac{q}{r^2}$
- Gauss's law: $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\varepsilon_0}$
- Electric potential: $V = k\frac{q}{r}$ (potential due to point charge)
- Potential difference: $\Delta V = -\int \vec{E} \cdot d\vec{l}$
- Capacitance: $C = \frac{Q}{V}$ (for a parallel plate capacitor, $C = \frac{\varepsilon_0 A}{d}$)
- Work done by electric field: $W = q(V_A - V_B)$
- Electric potential energy of a system: $U = \sum_{i<j} \frac{kq_i q_j}{r_{ij}}$

## Worked Example 1 — Coulomb's Law in a Medium

**Problem:** Two charges of $+4 \, \mu\text{C}$ and $-6 \, \mu\text{C}$ are placed 0.2 m apart in a medium with dielectric constant $K = 3$. Find the force between them.

**Solution:**

In a medium, Coulomb's law becomes:
$$F = \frac{1}{4\pi\varepsilon_0 K}\frac{|q_1 q_2|}{r^2} = \frac{k}{K}\frac{|q_1 q_2|}{r^2}$$

$$F = \frac{9 \times 10^9}{3} \times \frac{4 \times 10^{-6} \times 6 \times 10^{-6}}{(0.2)^2}$$

$$= 3 \times 10^9 \times \frac{24 \times 10^{-12}}{0.04} = 3 \times 10^9 \times 6 \times 10^{-10} = 1.8 \, \text{N}$$

The force is attractive (opposite charges).

**Common mistake:** Forgetting to divide by the dielectric constant $K$ when the medium is not vacuum.

## Worked Example 2 — Electric Field Lines and Gauss's Law

**Problem:** A thin spherical shell of radius 0.1 m carries a charge of $5 \, \mu\text{C}$. Find the electric field at (a) $r = 0.05$ m, (b) $r = 0.15$ m, (c) $r = 0.1$ m from the centre.

**Solution:**

(a) Inside the shell ($r < R$): By Gauss's law, $E = 0$ (no enclosed charge).

(b) Outside the shell ($r > R$):
$$E = k\frac{q}{r^2} = 9 \times 10^9 \times \frac{5 \times 10^{-6}}{(0.15)^2} = 2 \times 10^6 \, \text{N/C}$$

(c) On the shell ($r = R$): The field is undefined at the surface (discontinuity), but just outside it is $2 \times 10^6 \, \text{N/C}$.

**Common mistake:** Assuming the field inside a charged shell is non-zero. Gauss's law shows it must be zero.

## Worked Example 3 — Electric Potential Energy

**Problem:** Three charges $q_1 = +2 \, \mu\text{C}$, $q_2 = -3 \, \mu\text{C}$, $q_3 = +4 \, \mu\text{C}$ are placed at the vertices of an equilateral triangle of side 0.1 m. Find the total potential energy of the system.

**Solution:**

The potential energy of a system of charges is:
$$U = k\left(\frac{q_1 q_2}{r_{12}} + \frac{q_1 q_3}{r_{13}} + \frac{q_2 q_3}{r_{23}}\right)$$

$$U = 9 \times 10^9 \left(\frac{2 \times 10^{-6} \times (-3) \times 10^{-6}}{0.1} + \frac{2 \times 10^{-6} \times 4 \times 10^{-6}}{0.1} + \frac{(-3) \times 10^{-6} \times 4 \times 10^{-6}}{0.1}\right)$$

$$= 9 \times 10^9 \times \frac{10^{-12}}{0.1}(-6 + 8 - 12) = 9 \times 10^{-2} \times (-10) = -0.9 \, \text{J}$$

The negative sign indicates the system is bound (energy would be required to separate the charges).

**Common mistake:** Forgetting that potential energy is a scalar quantity. Do not use vector addition for potential energy. Also, remember that the work done by an external agent to assemble the charges equals the total potential energy of the system.

## Practice Problems

1. Find the electric field at the centre of a uniformly charged circular arc of radius 0.2 m carrying $2 \, \mu\text{C}$ over $90^\circ$.
2. Two point charges $+q$ and $-q$ are separated by distance $2a$. Find the electric field at a point on the perpendicular bisector at distance $x$ from the centre.
3. A parallel plate capacitor has plate area $0.02 \, \text{m}^2$ and separation 0.001 m. Find its capacitance.
4. A charge of $+1 \, \mu\text{C}$ is placed at the centre of a uniformly charged ring of radius 0.1 m carrying total charge $+4 \, \mu\text{C}$. Find the net force on the charge at the centre.
5. Two parallel plates are separated by 0.002 m and have a potential difference of 100 V. Find the electric field between the plates and the force on an electron placed between them.

6. A point charge $+Q$ is placed at the centre of a neutral conducting sphere. Find the charge distribution on the sphere.

## Intuition

**Electric charges create invisible fields of influence:** Imagine placing a pebble in a pond — ripples spread out in all directions. Charges do something similar: they create electric fields that spread through space, and any other charge placed in that field feels a force. Gauss's law is like counting how many field lines pass through a net — if you know how many lines go through a closed surface, you know how much charge is inside. Capacitors are like rechargeable reservoirs — they store energy in the electric field between two plates, ready to release it when needed.

**Why it matters:** Electrostatics explains why you get shocked touching a doorknob (charge buildup), how lightning forms (enormous electric fields in clouds), how photocopying works (electrostatic attraction of toner), and how touchscreens detect your finger (capacitance changes). It's the foundation of all electrical and electronic technology.

**The key insight:** Electric potential is a scalar (just a number at each point), while electric field is a vector (direction matters) — this is why adding potentials is simple arithmetic but adding fields requires vector addition.

## Common Exam Patterns

- Always identify the charge distribution before choosing a method
- For symmetric distributions, Gauss's law is often the simplest approach
- Remember that electric field is a vector (add components), but potential is a scalar (add directly)
- Practice converting between field and potential using $E = -dV/dx$
- For parallel plate capacitors, the field is uniform between the plates: $E = \frac{V}{d}$
- Electric field lines are perpendicular to equipotential surfaces

## Exam Tips

1. For Gauss's law, choose a Gaussian surface that exploits the symmetry of the charge distribution.
2. The electric field inside a conductor in electrostatic equilibrium is always zero.
3. Equipotential surfaces are always perpendicular to electric field lines.
4. Work done by the electric field is $q\Delta V$, not $qV$.
5. For capacitors, remember that charge is conserved (isolated) or voltage is constant (connected to battery).
6. The energy stored in a capacitor is $U = \frac{1}{2}CV^2 = \frac{Q^2}{2C} = \frac{1}{2}QV$.
7. Electric field due to an infinite line charge: $E = \frac{\lambda}{2\pi\varepsilon_0 r}$.
8. Electric field due to an infinite plane sheet: $E = \frac{\sigma}{2\varepsilon_0}$ (independent of distance).
9. The potential at a point due to multiple charges is the algebraic sum of potentials due to each charge.
10. For conductors in electrostatic equilibrium, all excess charge resides on the surface.

## Worked Example 4 — Capacitor with Dielectric

**Problem:** A parallel plate capacitor has capacitance $C_0 = 10 \, \mu\text{F}$ when air-filled. A dielectric slab of dielectric constant $K = 4$ is inserted to fill half the space between the plates (while the capacitor remains connected to a 12 V battery). Find the new capacitance and the charge stored.

**Solution:**

When the dielectric fills only half the space, the capacitor can be treated as two capacitors in parallel: one with air ($C_{\text{air}}$) and one with dielectric ($C_{\text{dielectric}}$).

Let the plate area be $A$ and separation $d$. The air-filled half has area $A/2$:
$$C_{\text{air}} = \frac{\varepsilon_0 (A/2)}{d} = \frac{C_0}{2} = 5 \, \mu\text{F}$$

The dielectric-filled half:
$$C_{\text{dielectric}} = \frac{K\varepsilon_0 (A/2)}{d} = \frac{KC_0}{2} = \frac{4 \times 10}{2} = 20 \, \mu\text{F}$$

Total capacitance:
$$C = C_{\text{air}} + C_{\text{dielectric}} = 5 + 20 = 25 \, \mu\text{F}$$

Charge stored (battery maintains $V = 12$ V):
$$Q = CV = 25 \times 10^{-6} \times 12 = 3 \times 10^{-4} \, \text{C} = 300 \, \mu\text{C}$$

**Common mistake:** Treating the two halves as capacitors in series rather than parallel. When the dielectric fills half the area (not half the distance), the two regions are in parallel because they share the same potential difference.

## Worked Example 5 — Electric Potential of a Dipole

**Problem:** An electric dipole consists of charges $+q$ and $-q$ separated by distance $2a$. Find the electric potential at a point on the perpendicular bisector at distance $r$ from the centre ($r \gg a$).

**Solution:**

Let the dipole be oriented along the $y$-axis with charges at $(0, +a)$ and $(0, -a)$. The point $P$ is at distance $r$ on the $x$-axis.

Distance from each charge to $P$:
$$d = \sqrt{r^2 + a^2}$$

Potential at $P$:
$$V = \frac{1}{4\pi\varepsilon_0}\left(\frac{+q}{d} + \frac{-q}{d}\right) = 0$$

The potential on the perpendicular bisector is always zero because the point is equidistant from both charges.

This is a general result: the perpendicular bisector of a dipole is an equipotential surface with $V = 0$.

**Common mistake:** Confusing the electric field (which is non-zero on the perpendicular bisector) with the electric potential (which is zero). The field and potential are different quantities.

## Worked Example 6 — Force Between Charged Conducting Spheres

**Problem:** Two identical conducting spheres of radius $r = 0.05$ m carry charges $q_1 = +2 \, \mu\text{C}$ and $q_2 = -4 \, \mu\text{C}$. They are placed 0.3 m apart (centre to centre). Find the force between them.

**Solution:**

Since the spheres are conducting and the separation is much larger than the radius ($0.3 \gg 0.05$), the charge distribution is approximately uniform and we can treat them as point charges.

$$F = \frac{k|q_1||q_2|}{r^2} = \frac{9 \times 10^9 \times 2 \times 10^{-6} \times 4 \times 10^{-6}}{(0.3)^2}$$

$$= \frac{9 \times 10^9 \times 8 \times 10^{-12}}{0.09} = \frac{72 \times 10^{-3}}{0.09} = 0.8 \, \text{N}$$

The force is attractive (opposite charges).

If the spheres were brought into contact and then separated, the total charge $q_1 + q_2 = -2 \, \mu\text{C}$ would be equally distributed: each sphere carries $-1 \, \mu\text{C}$. The new force would be:

$$F' = \frac{9 \times 10^9 \times (1 \times 10^{-6})^2}{(0.3)^2} = \frac{9 \times 10^9 \times 10^{-12}}{0.09} = 0.1 \, \text{N}$$

**Common mistake:** When conducting spheres touch, charge is shared equally only if they are identical (same radius). For non-identical spheres, the charge distribution depends on the radii.

## Key Formulas

| Quantity | Formula | Unit |
| --- | --- | --- |
| Coulomb's law | $F = k\frac{|q_1 q_2|}{r^2}$ | N |
| Electric field (point charge) | $E = k\frac{q}{r^2}$ | N/C or V/m |
| Electric potential (point charge) | $V = k\frac{q}{r}$ | V |
| Capacitance (parallel plate) | $C = \frac{\varepsilon_0 A}{d}$ | F |
| Energy stored in capacitor | $U = \frac{1}{2}CV^2 = \frac{Q^2}{2C}$ | J |
| Gauss's law | $\oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\varepsilon_0}$ | — |
| Electric potential energy (two charges) | $U = k\frac{q_1 q_2}{r}$ | J |
| Work done by electric field | $W = q(V_A - V_B)$ | J |

## Additional Exam Tips

11. For conductors in electrostatic equilibrium, the electric field just outside the surface is $E = \sigma/\varepsilon_0$, where $\sigma$ is the surface charge density.
12. The potential inside a uniformly charged spherical shell is constant and equals the potential at the surface.
13. For a system of charges, the total potential energy is the sum over all pairs: $U = \sum_{i<j} \frac{kq_i q_j}{r_{ij}}$.
14. When a dielectric is inserted into a capacitor connected to a battery, the voltage remains constant but the charge increases by a factor of $K$.
15. When a dielectric is inserted into an isolated capacitor (battery disconnected), the charge remains constant but the voltage decreases by a factor of $K$.

## Common Mistakes

### Mistake 1: Confusing electric potential with electric potential energy

Electric potential ($V$) is a scalar quantity measured in volts, while electric potential energy ($U$) is also a scalar but measured in joules. Students often use the formula $V = kq/r$ when the question asks for energy, or vice versa. Remember that $U = qV$ -- potential energy equals charge times potential. When assembling a system of charges, always use $U = \sum_{i<j} kq_iq_j/r_{ij}$, not the potential formula.

### Mistake 2: Applying Gauss's law to asymmetric charge distributions

Gauss's law is always true, but it is only useful for calculation when the charge distribution has sufficient symmetry (spherical, cylindrical, or planar). Students frequently attempt to apply Gauss's law to arbitrary charge configurations and end up with incorrect results. If you cannot construct a Gaussian surface where the electric field is constant and perpendicular to the surface, use integration or superposition instead.

### Mistake 3: Mixing up series and parallel capacitor combinations

When dielectrics or plate separations change, students often treat capacitors as series when they should be parallel, or vice versa. If the dielectric fills half the area (not half the distance), the two regions share the same voltage and are in parallel: $C_{total} = C_1 + C_2$. If the dielectric fills half the distance (not half the area), the two regions share the same charge and are in series: $1/C_{total} = 1/C_1 + 1/C_2$.

## Cross-References

- [Current Electricity](../current-electricity/index) -- Electrostatics describes charge at rest while current electricity describes charge in motion, together covering the full behaviour of electric charge.
- [Magnetic Effects of Current](../magnetic-effects/index) -- Moving charges produce magnetic fields, linking electrostatics to electromagnetism through the relationship between electricity and magnetism.
- [Modern Physics](../atoms-nuclei/index) -- Atomic structure depends on electrostatic attraction between nucleus and electrons, connecting macroscopic charge behaviour to quantum models.
