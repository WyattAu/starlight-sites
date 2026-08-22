---

date: 2026-07-23T21:57:32+01:00
title: "Electric field | CBSE - Wyatt's Notes"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"cbse\", \"url\": \"https://cbse.wyattau.com\"}, {\"name\": \"Physics\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Physics", "url": "https://cbse.wyattau.com/physics"}, {"name": "Electrostatics", "url": "https://cbse.wyattau.com/physics/electrostatics"}, {"name": "02 Electric Field", "url": "https://cbse.wyattau.com/physics/electrostatics/02-electric-field"}]
}
</script>

## Electric field

Study notes for CBSE Class 12 physics - Electric field.

## Key Concepts

- Electric field due to a point charge: $\vec{E} = k\frac{q}{r^2}\hat{r}$
- Electric field due to a dipole on axial line: $E = \frac{kp}{r^3}$ (for $r \gg a$)
- Electric field due to a dipole on equatorial line: $E = \frac{kp}{r^3}$ (for $r \gg a$)
- Electric field due to a uniformly charged ring on axis: $E = \frac{kqx}{(R^2+x^2)^{3/2}}$
- Relation between field and force: $\vec{F} = q\vec{E}$
- Electric field inside a uniformly charged non-conducting sphere: $E = \frac{kQr}{R^3}$ (for $r < R$)

## Worked Example 1 — Electric Field Due to a Point Charge

**Problem:** Find the electric field at a point 0.3 m from a charge of $+8 \, \mu\text{C}$.

**Solution:**
$$E = k\frac{q}{r^2} = 9 \times 10^9 \times \frac{8 \times 10^{-6}}{(0.3)^2}$$
$$= 9 \times 10^9 \times \frac{8 \times 10^{-6}}{0.09} = 9 \times 10^9 \times 8.89 \times 10^{-5}$$
$$= 8 \times 10^5 \, \text{N/C}$$

The field points radially outward from the positive charge.

## Worked Example 2 — Electric Field Due to Multiple Charges

**Problem:** Two charges $q_1 = +4 \, \mu\text{C}$ and $q_2 = -4 \, \mu\text{C}$ are placed at $(0, +0.05)$ m and $(0, -0.05)$ m respectively. Find the electric field at a point on the $x$-axis at $x = 0.2$ m.

**Solution:**

Distance from each charge to the point:
$$r = \sqrt{(0.2)^2 + (0.05)^2} = \sqrt{0.04 + 0.0025} = \sqrt{0.0425} \approx 0.206 \, \text{m}$$

Magnitude of field from each charge:
$$E_1 = E_2 = k\frac{|q|}{r^2} = 9 \times 10^9 \times \frac{4 \times 10^{-6}}{0.0425} \approx 8.47 \times 10^5 \, \text{N/C}$$

By symmetry, the $y$-components cancel. The $x$-components add:
$$\cos\theta = \frac{x}{r} = \frac{0.2}{0.206} \approx 0.971$$

$$E_{net} = 2E_1\cos\theta = 2 \times 8.47 \times 10^5 \times 0.971 \approx 1.64 \times 10^6 \, \text{N/C}$$

The direction is along $+x$ (from positive to negative).

## Worked Example 3 — Electric Field Inside a Uniformly Charged Sphere

**Problem:** A uniformly charged non-conducting sphere of radius 0.1 m has total charge $Q = 10 \, \mu\text{C}$. Find the electric field at $r = 0.06$ m from the centre.

**Solution:**

For $r < R$:
$$E = \frac{kQr}{R^3} = \frac{9 \times 10^9 \times 10 \times 10^{-6} \times 0.06}{(0.1)^3}$$
$$= \frac{9 \times 10^9 \times 6 \times 10^{-7}}{10^{-3}} = \frac{5400}{10^{-3}} = 5.4 \times 10^6 \, \text{N/C}$$

## Worked Example 4 — Electric Field Due to a Charged Ring

**Problem:** A ring of radius 0.15 m carries a total charge of $5 \, \mu\text{C}$. Find the electric field at a point on its axis at a distance of 0.2 m from the centre.

**Solution:**

Using the formula for the axial field of a ring:
$$E = \frac{kqx}{(R^2 + x^2)^{3/2}}$$

$$E = \frac{9 \times 10^9 \times 5 \times 10^{-6} \times 0.2}{((0.15)^2 + (0.2)^2)^{3/2}}$$

$$= \frac{9 \times 10^9 \times 10^{-6}}{(0.0225 + 0.04)^{3/2}} = \frac{9000}{(0.0625)^{3/2}}$$

$$= \frac{9000}{0.015625} = 5.76 \times 10^5 \, \text{N/C}$$

**Common mistake:** Forgetting that the field on the axis of a ring is maximum at $x = R/\sqrt{2}$, not at the centre (where it is zero).

## Worked Example 5 — Electric Field and Force on a Charge

**Problem:** A charge of $+3 \, \mu\text{C}$ is placed at a point where the electric field is $2 \times 10^5 \, \text{N/C}$ directed to the right. Find the force on the charge.

**Solution:**

$$\vec{F} = q\vec{E} = 3 \times 10^{-6} \times 2 \times 10^5 = 0.6 \, \text{N}$$

The force is in the same direction as the field (to the right) because the charge is positive.

**Common mistake:** Forgetting that a negative charge experiences a force opposite to the field direction.

## Practice Problems

1. Find the electric field at a distance of 0.5 m from a $-2 \, \mu\text{C}$ charge.
2. A dipole has charges $\pm 3 \, \text{nC}$ separated by $2 \times 10^{-9}$ m. Find the electric field on the axial line at $0.1$ m from the centre.
3. A uniformly charged ring of radius 0.1 m carries charge $5 \, \mu\text{C}$. Find the electric field at a point on its axis at $x = 0.1$ m from the centre.

### Additional Practice Problems

1. An electric dipole with moment $p = 4 \times 10^{-9} \, \text{C}\cdot\text{m}$ is placed in a uniform electric field of $2 \times 10^5 \, \text{N/C}$ at $30^\circ$ to the field. Find the torque.
2. Find the electric field at the centre of a uniformly charged circular arc of radius 0.2 m carrying $2 \, \mu\text{C}$ over an angle of $90^\circ$.

## Key Formulas

- Point charge: $\vec{E} = k\frac{q}{r^2}\hat{r}$
- Electric dipole (axial): $E = \frac{2kp}{r^3}$ (for $r \gg a$)
- Electric dipole (equatorial): $E = \frac{kp}{r^3}$ (for $r \gg a$)
- Charged ring on axis: $E = \frac{kqx}{(R^2+x^2)^{3/2}}$
- Force on charge: $\vec{F} = q\vec{E}$
- Torque on dipole: $\vec{\tau} = \vec{p} \times \vec{E}$, $\tau = pE\sin\theta$

## Worked Example 6 — Electric Field Lines

**Problem:** Describe the electric field lines for (a) a positive point charge, (b) an electric dipole, and (c) two equal positive charges.

**Solution:**

(a) Positive point charge: Field lines radiate outward uniformly in all directions. They are closer together near the charge (stronger field) and spread out with distance.

(b) Electric dipole: Field lines emerge from the positive charge and terminate on the negative charge. Near each charge, lines are radial. Between the charges, lines curve from positive to negative. Far from the dipole, lines resemble those of a single dipole.

(c) Two equal positive charges: Field lines emerge from both charges and repel each other. At the midpoint between the charges, the field is zero. Far away, the field resembles that of a single charge of magnitude $2q$.

**Common mistake:** Field lines never cross each other. The density of field lines represents the strength of the field.

## Worked Example 7 — Electric Field of a Line Charge

**Problem:** A long straight wire has a uniform linear charge density $\lambda = 5 \times 10^{-8} \, \text{C/m}$. Find the electric field at a distance of 0.1 m from the wire.

**Solution:**

For an infinite line charge, the electric field is:
$$E = \frac{2k\lambda}{r}$$

$$E = \frac{2 \times 9 \times 10^9 \times 5 \times 10^{-8}}{0.1} = \frac{900}{0.1} = 9 \times 10^3 \, \text{N/C}$$

The field points radially away from the wire (if $\lambda > 0$).

**Common mistake:** The field of a line charge decreases as $1/r$, not as $1/r^2$ (which is for point charges).

## Common Mistakes

### Mistake 1: Confusing the axial and equatorial fields of a dipole

For an electric dipole, the field on the axial line is $E = 2kp/r^3$ while on the equatorial line it is $E = kp/r^3$ -- a factor of two difference. Students often use the same formula for both. The axial field is twice as strong because the two charges contribute constructively along the axis, while on the equatorial line their contributions partially cancel.

### Mistake 2: Assuming the electric field inside a charged conductor is non-zero

In electrostatic equilibrium, the electric field inside a conductor is always zero. This is because any internal field would cause charges to redistribute until the field is cancelled. Students sometimes calculate a non-zero field inside a conductor using Gauss's law incorrectly. If you choose a Gaussian surface entirely inside the conductor, the enclosed charge must be zero, so $E = 0$.

## Intuition

**A field is the influence a charge sends out into space:** An electric field is like the "influence zone" around a charge — it tells you how strong a force would be if you placed a test charge at that point. Field lines are like weather maps for electricity: they show direction (where a positive charge would be pushed) and density (closer lines mean stronger field). Near a point charge, field lines radiate outward like spokes of a wheel; for a dipole, they curve from positive to negative like iron filings around bar magnets.

**Why it matters:** Electric fields explain how your phone communicates wirelessly (electromagnetic fields), how capacitors store energy (uniform fields between plates), and how lightning forms (enormous fields in thunderclouds). Without understanding fields, we couldn't design any electronic device.

**The key insight:** Electric field is a vector at every point in space — it has both magnitude and direction. This means you must add fields as vectors (with components), not just as numbers, which is why symmetric charge distributions make calculations much simpler.

## Common Exam Patterns

## Cross-References

- **[Electric Charge (01-electric-charge.md)](01-electric-charge.md):** Electric fields are created by charges — understanding Coulomb's law is prerequisite to understanding field calculations.
- **[Electrostatics](../../../../../../typescript/src/content/docs/index):** Gauss's law and electric potential are closely linked to the electric field concept.
- **[Current Electricity](../current-electricity/index.md):** Electric fields drive current through conductors — connecting static fields to dynamic flow.
- **[Magnetic Effects](../magnetic-effects/index.md):** Moving charges produce magnetic fields, extending the electric field concept to magnetism.

### Mistake 3: Forgetting that electric field is a vector and must be added as such

When calculating the net electric field from multiple charges, students often add the magnitudes directly instead of resolving into components. Electric field is a vector quantity: $\vec{E}_{net} = \vec{E}_1 + \vec{E}_2 + \ldots$. For two charges, you must find the angle between the field vectors and add components: $E_x = E_1\cos\theta_1 + E_2\cos\theta_2$ and $E_y = E_1\sin\theta_1 + E_2\sin\theta_2$.
