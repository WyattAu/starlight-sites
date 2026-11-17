---

date: 2026-07-23T21:57:32+01:00
title: Generalised Coordinates and Constraints
tags:
  - Physics
  - University
description: "A system with degrees of freedom can be described by Comprehensive educational content coverage with definitions, worked examples, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "1 Classical Mechanics", "url": "https://physics.wyattau.com/1-classical-mechanics"}, {"name": "2_generalised Coordinates And Constraints", "url": "https://physics.wyattau.com/1-classical-mechanics/2_generalised-coordinates-and-constraints"}]
}
</script>

**History.** The generalised-coordinate formalism descends from Jean le Rond d'Alembert's *Traite de Dynamique* (1743), where virtual displacements first appeared as the foundation of mechanics, and reached its canonical form in Joseph-Louis Lagrange's *Mechanique Analytique* (1788). Lagrange's preface contains the most famous sentence in the subject's history: the work contains no diagrams, because the methods require neither constructions nor geometrical arguments, only algebraic operations subject to a regular and uniform procedure.

**Ponder (attempt the counting).** A bead slides on a circular wire in the plane; a pendulum bob swings on a string of fixed length; a coin rolls on a table. Each system lives in 2D or 3D space, yet each needs only ONE number to describe its configuration. Attempt the general rule: how many numbers does a system of N particles with k independent constraints require, and what are those numbers called?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The rule: N particles in 3D carry 3N coordinates; each independent constraint removes one. The count 3N minus k is the number of degrees of freedom, and the remaining coordinates are the generalised coordinates. The bead: 2 coordinates minus 1 constraint (the wire) = 1 (the angle along the wire). The pendulum: 3 minus the fixed length = 1 (the angle). The rolling coin: trickier, because rolling constraints are inequalities in disguise, which is why the count is done on velocities there.

</div>
</details>

### 2.1 Generalised Coordinates

A system with $n$ degrees of freedom can be described by $n$ **generalised coordinates**
$q_1, q_2, \ldots, q_n$ Which may be angles, arc lengths, or any other set of parameters that
Uniquely determines the configuration.

The Cartesian coordinates are functions of the generalised coordinates (and possibly time):

$$
\mathbf{r}_i = \mathbf{r}_i(q_1, q_2, \ldots, q_n, t), \quad i = 1, \ldots, N
$$

The velocities are:

$$
\dot{\mathbf{r}}_i = \sum_{j=1}^n \frac{\partial \mathbf{r}_i}{\partial q_j}\dot{q}_j + \frac{\partial \mathbf{r}_i}{\partial t}
$$

**Example.** A simple pendulum has one degree of freedom. We can use the angle $\theta$ from the
Vertical as the generalised coordinate, rather than the Cartesian coordinates $(x, y)$ of the bob.

### 2.2 Constraints

**Holonomic constraints** relate the coordinates by equations:

$$
f(\mathbf{r}_1, \mathbf{r}_2, \ldots, \mathbf{r}_N, t) = 0
$$

A holonomic constraint reduces the number of degrees of freedom.

**Non-holonomic constraints** involve inequalities or non-integrable differential relations:

$$
\sum_j a_j(q, t)\, dq_j + a_t(q, t)\, dt = 0
$$

Which cannot be integrated to yield a relation among the $q_j$ alone.

**Scleronomic constraints** do not depend explicitly on time. **Rheonomic constraints** do.

**Example.** A bead sliding on a fixed wire: the constraint $f(x,y) = 0$ is holonomic and
scleronomic. A bead on a wire that moves with time: holonomic and rheonomic.

### 2.3 Worked Example: Classifying Constraints

**Problem.** Classify the following constraints: (a) a particle on the surface of a sphere of radius
$R$(b) a rolling disk (vertical), (c) a particle constrained to $z \geq 0$(d) a pendulum whose pivot
oscillates as $x_0(t) = A\cos(\omega t)$.

<details>
<summary>Solution</summary>

(a) Constraint: $x^2 + y^2 + z^2 - R^2 = 0$. Holonomic (an equation relating coordinates),
scleronomic (no explicit time dependence).

(b) A vertical disk of radius $a$ rolling without slipping on a horizontal plane. The rolling
condition gives $dx - a\, d\theta = 0$ and $dy - a\sin\phi\, d\theta = 0$. These cannot be
integrated to eliminate the angles, so they are non-holonomic, scleronomic.

(c) Constraint: $z \geq 0$. This is a non-holonomic constraint (an inequality, not an equation).

(d) The constraint is $x = A\cos(\omega t) + l\sin\theta$ Which depends explicitly on $t$. Holonomic
(can be written as an equation), rheonomic (explicit time dependence).

$\blacksquare$

</details>

### 2.4 Worked Example: Finding Generalised Coordinates

**Problem.** A rod of length $l$ and negligible mass has masses $m_1$ and $m_2$ at its ends. The rod
slides on a frictionless horizontal table. Find suitable generalised coordinates.

<details>
<summary>Solution</summary>

The rod is in a plane, and the two masses have four Cartesian coordinates $(x_1, y_1, x_2, y_2)$.
The constraint is the fixed distance: $(x_2 - x_1)^2 + (y_2 - y_1)^2 = l^2$. This is one holonomic
scleronomic constraint, reducing the four coordinates to three degrees of freedom.

We can choose the centre of mass $(X, Y)$ and the angle $\theta$ the rod makes with the $x$-axis:

$$
X = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}, \quad Y = \frac{m_1 y_1 + m_2 y_2}{m_1 + m_2}, \quad \theta = \arctan\frac{y_2 - y_1}{x_2 - x_1}
$$

Then:

$$
x_1 = X - \frac{m_2 l}{m_1 + m_2}\cos\theta, \quad y_1 = Y - \frac{m_2 l}{m_1 + m_2}\sin\theta
$$

$$
x_2 = X + \frac{m_1 l}{m_1 + m_2}\cos\theta, \quad y_2 = Y + \frac{m_1 l}{m_1 + m_2}\sin\theta
$$

$\blacksquare$

</details>

**Ponder (attempt the removal).** Constraint forces (the wire's normal force, the string's tension) are the messiest part of Newtonian bookkeeping: they are unknown, and they do no work along allowed motions. Attempt the principle that removes them: for what class of displacements does the total work of ALL ideal constraint forces vanish identically, and why does asking the question only about those displacements make the constraint forces irrelevant?

<details class="wn-spoiler">
<summary>The resolution</summary>
<div class="wn-spoiler-body">

The displacement is the virtual displacement: any infinitesimal displacement consistent with the constraints at a frozen instant of time. Ideal constraints do no work through virtual displacements (the wire's normal force is perpendicular to the wire, the string's tension perpendicular to the allowed arc), so their total virtual work vanishes identically. Asking only about virtual displacements is what makes the constraint forces irrelevant: d'Alembert's principle says the applied forces balance through the virtual work, and the unknown reactions never enter the equation. Lagrange's whole program is this removal, systematised.

</div>
</details>

### 2.5 Virtual Work and D"Alembert’s Principle

A **virtual displacement** $\delta \mathbf{r}_i$ is an infinitesimal change in position consistent
with The constraints at a fixed instant in time ($\delta t = 0$).

**Definition (Virtual Work).** The virtual work of the forces is:

$$
\delta W = \sum_{i=1}^N \mathbf{F}_i \cdot \delta \mathbf{r}_i
$$

**Definition (Ideal Constraints).** Constraints are **ideal** if the virtual work of the constraint
forces is zero:

$$
\sum_{i=1}^N \mathbf{C}_i \cdot \delta \mathbf{r}_i = 0
$$

Where $\mathbf{C}_i$ is the constraint force on particle $i$.

**Theorem 2.1 (Principle of Virtual Work).** A system is in static equilibrium if and only if the
virtual work of the applied forces vanishes for all virtual displacements consistent with the
constraints.

_Proof._ In static equilibrium, $\mathbf{F}_i + \mathbf{C}_i = \mathbf{0}$ for each particle.
Therefore:

$$
\sum_i (\mathbf{F}_i + \mathbf{C}_i) \cdot \delta\mathbf{r}_i = 0
$$

For ideal constraints, $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$ So
$\sum_i \mathbf{F}_i \cdot \delta\mathbf{r}_i = 0$. Conversely, if the virtual work of applied
forces vanishes for all admissible virtual displacements, the system must be in equilibrium
(otherwise one could choose a virtual displacement in the direction of net force to get non-zero
work). $\blacksquare$

**Theorem 2.2 (D'Alembert’s Principle).** For a system of $N$ particles:

$$
\sum_{i=1}^N (\mathbf{F}_i - m_i \ddot{\mathbf{r}}_i) \cdot \delta \mathbf{r}_i = 0
$$

Where $\mathbf{F}_i$ includes both applied and constraint forces. For ideal constraints, the
Constraint forces do no virtual work, so only the applied forces contribute.

_Proof._ D'Alembert’s principle extends the principle of virtual work to dynamics by treating
$-m_i \ddot{\mathbf{r}}_i$ as a "fictitious force" (the **inertia force**). Starting from Newton's
second law $\mathbf{F}_i + \mathbf{C}_i = m_i \ddot{\mathbf{r}}_i$:

$$
\sum_i (\mathbf{F}_i + \mathbf{C}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0
$$

This is true. For ideal constraints $\sum_i \mathbf{C}_i \cdot \delta\mathbf{r}_i = 0$ Giving:

$$
\sum_i (\mathbf{F}_i - m_i\ddot{\mathbf{r}}_i) \cdot \delta\mathbf{r}_i = 0
$$

$\blacksquare$

## Intuition

Generalised coordinates are the minimum number of independent parameters needed to describe a system's configuration. A pendulum needs only one angle, not two Cartesian coordinates. Constraints are the rules that reduce the degrees of freedom, like a bead confined to a wire. Holonomic constraints can be written as equations, making them mathematically tractable. D'Alembert's principle extends virtual work to dynamics by treating inertia as a fictitious force. This insight leads directly to Lagrangian mechanics, where constraint forces disappear entirely because they do no virtual work.

## Common Mistakes

**Mistake 1: Confusing virtual displacements with actual displacements**
A virtual displacement $\delta\mathbf{r}_i$ is an infinitesimal change consistent with the constraints at a fixed instant in time ($\delta t = 0$). An actual displacement occurs over a finite time interval and may violate constraints that change with time. For rheonomic constraints, virtual and actual displacements differ because the constraint surface itself moves.

**Mistake 2: Assuming all constraints reduce the degrees of freedom by one**
Non-holonomic constraints (inequalities or non-integrable differential relations) do not reduce the number of degrees of freedom in the same way holonomic constraints do. A holonomic constraint $f(q_1, \ldots, q_n) = 0$ reduces the degrees of freedom by one, but a non-holonomic constraint like $z \geq 0$ restricts the accessible region without reducing the dimensionality of the configuration space.

**Mistake 3: Applying D'Alembert's principle without checking that constraints are ideal**
D'Alembert's principle requires that constraint forces do no virtual work. This holds for frictionless surfaces, rigid rods, and inextensible strings, but not for sliding friction or deformable boundaries. If the constraints are not ideal, the constraint forces contribute to the virtual work and must be included explicitly.

:::note[Quick check]

1. State d'Alembert's principle, and name the displacement class it quantifies over.
2. Classify: the bead on a wire, a gas molecule in a box, a pendulum of fixed length, a block on a table with friction. Which constraint is not ideal?
3. A particle confined to a sphere of radius R: how many generalised coordinates, and what are the natural ones?
4. Why do constraint forces never appear in the Lagrangian equations of the next section?
5. What is the difference between holonomic and non-holonomic constraints, and which is harder?
6. Give the degrees of freedom of two beads connected by a rigid rod of fixed length, free in 3D.
7. Why does freezing time matter in the definition of virtual displacement?
8. State the count: N particles, k independent holonomic constraints.

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** The virtual work of the applied forces vanishes for every virtual displacement compatible with the constraints; the quantifier is over virtual (constraint-compatible, time-frozen) displacements. **2.** Bead: holonomic ideal; box walls: ideal holonomic; pendulum: ideal holonomic; table friction: NOT ideal (it does work and depends on the normal force). **3.** Two: latitude and longitude on the sphere. **4.** Because d'Alembert's principle eliminated them: the principle is precisely the statement that ideal constraint forces do no virtual work, so the equations contain only applied forces. **5.** Holonomic constraints are equations among coordinates (finitely many generalised coordinates suffice); non-holonomic ones involve velocities or inequalities and generally cannot be integrated away: they are harder. **6.** Two free beads carry 6 coordinates; the fixed length is 5 constraints (the pair's relative position is fixed in direction and magnitude minus one): the pair has 5 degrees of freedom. **7.** Freezing time prevents moving constraints from doing work through their own motion: a moving wire CAN pump energy into the system during a real displacement. **8.** 3N minus k: the number of independent generalised coordinates equals the degrees of freedom.

</div>
</details>

:::

## Cross-References

- **[Lagrangian Mechanics](/1-classical-mechanics/3_lagrangian-mechanics/)**: The Lagrangian formulation uses generalised coordinates to eliminate constraint forces.
- **[Hamiltonian Mechanics](/1-classical-mechanics/4_hamiltonian-mechanics/)**: The Hamiltonian formalism extends Lagrangian mechanics to phase space representations.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/2-linear-algebra/)

## Related in this track

- [Classical Field Theory](/1-classical-mechanics/13_classical-field-theory/)
- [Hamiltonian Mechanics](/1-classical-mechanics/4_hamiltonian-mechanics/)
- [Hamiltonian Mechanics: Advanced Topics](/1-classical-mechanics/11_hamiltonian-mechanics-advanced-topics/)
- [Lagrangian Mechanics](/1-classical-mechanics/3_lagrangian-mechanics/)
