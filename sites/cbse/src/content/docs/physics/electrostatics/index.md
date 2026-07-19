---
title: "Electrostatics"
description: "CBSE Class 12 physics: Electrostatics with Coulomb's law, electric fields, Gauss's law, and worked examples."
---

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
