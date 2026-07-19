---
title: "Electric field"
description: "CBSE Class 12 physics: Electric field"
---

# Electric field

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

4. An electric dipole with moment $p = 4 \times 10^{-9} \, \text{C}\cdot\text{m}$ is placed in a uniform electric field of $2 \times 10^5 \, \text{N/C}$ at $30^\circ$ to the field. Find the torque.
5. Find the electric field at the centre of a uniformly charged circular arc of radius 0.2 m carrying $2 \, \mu\text{C}$ over an angle of $90^\circ$.

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
