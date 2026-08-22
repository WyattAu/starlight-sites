---

date: 2026-07-23T21:57:32+01:00
title: Newtonian Mechanics Review
tags:
  - Physics
  - University
description: "1. A body remains at rest or in uniform motion unless acted upon by a net force. 2. where . 3. For every action, there is an equal and opposite reaction."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "1 Classical Mechanics", "url": "https://physics.wyattau.com/1-classical-mechanics"}, {"name": "1_newtonian Mechanics Review", "url": "https://physics.wyattau.com/1-classical-mechanics/1_newtonian-mechanics-review"}]
}
</script>

:::note
<strong>Historical Context</strong>
Newton's three laws, published in the *Principia Mathematica* (1687), unified terrestrial and celestial mechanics for the first time. Before Newton, the motion of planets was described by Kepler's empirical laws, and falling objects by Galileo's experiments, but there was no single framework connecting them. Newton's second law ($\mathbf{F} = m\mathbf{a}$) provided that framework. Leibniz developed the calculus independently, providing the mathematical tools Newton needed for the derivations. Euler later reformulated mechanics in terms of energy and the Lagrangian, which became the foundation for modern theoretical physics. The Coriolis and centrifugal terms in non-inertial frames were worked out by Gaspard-Gustave de Coriolis (1835) and are essential for understanding rotating reference frames in engineering and meteorology.
:::

### Intuition: Kinematics

Kinematics is the study of motion without asking why it happens. Position, velocity, and acceleration are three successive derivatives of time, but they tell three different stories about the same motion. Position answers "where is the object?" -- it is the raw record of location at each instant. Velocity answers "how is the position changing?" -- it is the rate and direction of that change. Acceleration answers "how is the velocity changing?" -- it captures the tendency of the motion itself to evolve.

The physical metaphor is a car journey. The odometer reading at each moment is the position. The speedometer reading is the velocity -- how fast the position is changing. The accelerometer reading is the acceleration -- whether you are pressing the brake or the accelerator, and by how much. A car moving at constant velocity has zero acceleration: the story of its motion is complete and unchanging. A car in free fall has constant acceleration g: its velocity story changes at a steady rate, and its position story is a parabola. The key insight is that acceleration is the most fundamental of the three because it is directly caused by forces (Newton's second law), while velocity and position are consequences that follow by integration.

### Intuition: Newton's Laws

Newton's second law, F=ma, is the universe's accounting rule for motion. It states that the net force on an object equals its mass times its acceleration -- or more precisely, the net force equals the rate of change of momentum. The metaphor is a financial ledger: force is the "income" or "expense" applied to an object, mass is the "inertia" (resistance to change in its state of motion), and acceleration is the resulting "change in balance." Just as a large bank account responds slowly to small deposits, a massive object responds slowly to small forces.

The first law is the special case of zero net force: the ledger is balanced, and the object's state of motion does not change. The third law is the double-entry bookkeeping principle: every force has an equal and opposite counterpart, so the total "debt" in the universe is always zero. The conservation laws -- of momentum, energy, and angular momentum -- are the consequences of this accounting system applied to isolated systems. They are the reason we can predict the outcome of a collision without knowing every microscopic detail: the ledger must balance, regardless of the complexity of the transactions.

### 1.1 Newton"s Laws

1. **First Law (Inertia):** A body remains at rest or in uniform motion unless acted upon by a net
   force.
2. **Second Law:** $\mathbf{F} = m\mathbf{a} = \dot{\mathbf{p}}$ where $\mathbf{p} = m\mathbf{v}$.
3. **Third Law:** For every action, there is an equal and opposite reaction.

### 1.2 Newton's Second Law in Various Coordinate Systems

In Cartesian coordinates the component equations are straightforward:

$$F_x = m\ddot{x}, \quad F_y = m\ddot{y}, \quad F_z = m\ddot{z}$$

In planar polar coordinates $(r, \phi)$The acceleration decomposes into radial and transverse
components:

$$\mathbf{a} = (\ddot{r} - r\dot{\phi}^2)\,\hat{\mathbf{r}} + (r\ddot{\phi} + 2\dot{r}\dot{\phi})\,\hat{\boldsymbol{\phi}}$$

So Newton's second law becomes:

$$F_r = m(\ddot{r} - r\dot{\phi}^2), \quad F_\phi = m(r\ddot{\phi} + 2\dot{r}\dot{\phi})$$

The term $-mr\dot{\phi}^2$ is the **centrifugal acceleration** and $2m\dot{r}\dot{\phi}$ is the
**Coriolis acceleration**.

In cylindrical coordinates $(\rho, \phi, z)$:

$$\mathbf{a} = (\ddot{\rho} - \rho\dot{\phi}^2)\,\hat{\boldsymbol{\rho}} + (\rho\ddot{\phi} + 2\dot{\rho}\dot{\phi})\,\hat{\boldsymbol{\phi}} + \ddot{z}\,\hat{\mathbf{z}}$$

### 1.3 Worked Example: Block on an Inclined Plane with Friction

**Problem.** A block of mass $m$ slides down an inclined plane at angle $\alpha$ to the horizontal.
The coefficient of kinetic friction is $\mu_k$. Find the acceleration.

_Solution._ Choose axes parallel and perpendicular to the incline. The normal force is
$N = mg\cos\alpha$. The friction force is $f = \mu_k N = \mu_k mg\cos\alpha$ directed up the plane.
Newton's second law along the plane:

$$ma = mg\sin\alpha - \mu_k mg\cos\alpha$$

$$a = g(\sin\alpha - \mu_k \cos\alpha)$$

The block accelerates when $\tan\alpha \gt \mu_k$ and decelerates otherwise. $\blacksquare$

### 1.4 Worked Example: Conical Pendulum

**Problem.** A mass $m$ is attached to a string of length $l$ and rotates in a horizontal circle of
radius $r$ with the string making angle $\theta$ with the vertical. Find the angular velocity
$\omega$.

_Solution._ The forces on the mass are tension $\mathbf{T}$ along the string and weight $mg$
downward. Newton's second law in the vertical direction:

$$T\cos\theta - mg = 0 \implies T = \frac{mg}{\cos\theta}$$

In the radial (horizontal) direction:

$$T\sin\theta = m\omega^2 r = m\omega^2 l\sin\theta$$

$$\frac{mg}{\cos\theta}\sin\theta = m\omega^2 l\sin\theta$$

$$\omega^2 = \frac{g}{l\cos\theta}$$

The period is $T = 2\pi/\omega = 2\pi\sqrt{l\cos\theta/g}$. $\blacksquare$

### 1.5 Conservation of Linear Momentum

**Theorem 1.1 (Conservation of Linear Momentum).** For a system of $N$ particles with no external
forces, the total linear momentum is conserved.

_Proof._ Newton's second law for the $i$-th particle:

$$\mathbf{F}_i^{(\mathrm{ext})} + \sum_{j \neq i} \mathbf{F}_{ij} = m_i \dot{\mathbf{v}}_i$$

Where $\mathbf{F}_{ij}$ is the force on particle $i$ due to particle $j$. By Newton's third law,
$\mathbf{F}_{ij} = -\mathbf{F}_{ji}$. Summing over all particles:

$$\sum_i \mathbf{F}_i^{(\mathrm{ext})} + \sum_i \sum_{j \neq i} \mathbf{F}_{ij} = \frac{d}{dt}\sum_i m_i \mathbf{v}_i$$

The double sum vanishes by Newton's third law. Defining $\mathbf{P} = \sum_i m_i \mathbf{v}_i$:

$$\sum_i \mathbf{F}_i^{(\mathrm{ext})} = \dot{\mathbf{P}}$$

If there are no external forces, $\dot{\mathbf{P}} = 0$ and $\mathbf{P}$ is constant. $\blacksquare$

**Corollary.** The centre of mass moves as if all external forces acted on a single particle of mass
$M = \sum_i m_i$ located at the centre of mass:
$M\ddot{\mathbf{R}} = \sum_i \mathbf{F}_i^{(\mathrm{ext})}$.

### 1.6 Conservation of Energy

**Theorem 1.2 (Work-Energy Theorem).** The work done by the net force on a particle equals the
change in its kinetic energy:

$$W = \int_{\mathbf{r}_1}^{\mathbf{r}_2} \mathbf{F} \cdot d\mathbf{r} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

_Proof._ Using Newton's second law:

$$W = \int m\mathbf{a} \cdot \mathbf{v}\, dt = \int m \frac{d\mathbf{v}}{dt} \cdot \mathbf{v}\, dt = \int m\mathbf{v} \cdot d\mathbf{v} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$

$\blacksquare$

**Definition.** A force is **conservative** if the work done is path-independent, equivalently
$\nabla \times \mathbf{F} = \mathbf{0}$Equivalently $\mathbf{F} = -\nabla V$ for some scalar
potential $V(\mathbf{r})$.

**Theorem 1.3 (Conservation of Mechanical Energy).** If all forces are conservative, $E = T + V$ is
conserved.

_Proof._ For a conservative force, $W = -\Delta V$. By the work-energy theorem:

$$-\Delta V = \Delta T \implies \Delta(T + V) = 0$$

$\blacksquare$

### 1.7 Conservation of Angular Momentum

**Theorem 1.4 (Conservation of Angular Momentum).** If the net external torque on a system vanishes,
the total angular momentum is conserved.

_Proof._ The angular momentum of the $i$-th particle about the origin is
$\mathbf{L}_i = \mathbf{r}_i \times m_i \mathbf{v}_i$. Taking the time derivative:

$$\dot{\mathbf{L}}_i = \dot{\mathbf{r}}_i \times m_i \mathbf{v}_i + \mathbf{r}_i \times m_i \dot{\mathbf{v}}_i = \mathbf{r}_i \times \mathbf{F}_i$$

Since
$\dot{\mathbf{r}}_i \times m_i \mathbf{v}_i = \mathbf{v}_i \times m_i \mathbf{v}_i = \mathbf{0}$.
Summing over all particles:

$$\dot{\mathbf{L}} = \sum_i \mathbf{r}_i \times \mathbf{F}_i^{(\mathrm{ext})} + \sum_i \sum_{j \neq i} \mathbf{r}_i \times \mathbf{F}_{ij}$$

The double sum represents internal torques. For central internal forces ($\mathbf{F}_{ij}$ parallel
to $\mathbf{r}_i - \mathbf{r}_j$), the internal torques cancel in pairs. Hence:

$$\dot{\mathbf{L}} = \boldsymbol{\tau}^{(\mathrm{ext})}$$

If $\boldsymbol{\tau}^{(\mathrm{ext})} = \mathbf{0}$ Then $\mathbf{L} = \mathrm{const}$.
$\blacksquare$

### 1.8 The Rocket Equation

**Definition.** The **rocket equation** (Tsiolkovsky equation) describes the motion of a rocket that
expels mass at a constant exhaust velocity.

Consider a rocket of mass $m$ moving with velocity $v$ in one dimension. In time $dt$It ejects mass
$dm$ (where $dm \lt 0$) at exhaust velocity $u_e$ relative to the rocket. The ejected mass has
velocity $v - u_e$ in the lab frame. By conservation of momentum:

$$mv = (m + dm)(v + dv) + (-dm)(v - u_e)$$

Neglecting the second-order term $dm\, dv$:

$$mv = mv + m\, dv + dm\, v - dm\, v + u_e\, dm$$

$$0 = m\, dv + u_e\, dm$$

$$dv = -u_e \frac{dm}{m}$$

Integrating from initial mass $m_0$ and velocity $v_0$ to final mass $m_f$ and velocity $v_f$:

$$v_f - v_0 = u_e \ln\frac{m_0}{m_f}$$

This is the **Tsiolkovsky rocket equation**.

**Theorem 1.5 (Rocket Equation with Gravity).** If the rocket moves vertically against a uniform
gravitational field $g$:

$$\Delta v = u_e \ln\frac{m_0}{m_f} - g\, \Delta t$$

Where $\Delta t$ is the burn time.

### 1.9 Worked Example: Rocket in Free Space

**Problem.** A rocket starts from rest with mass $m_0 = 1000\,\mathrm{kg}$ and exhaust velocity
$u_e = 3000\,\mathrm{m}/s$. It burns fuel until its mass is $m_f = 400\,\mathrm{kg}$. Find the final
velocity.

<details>
<summary>Solution</summary>

Applying the Tsiolkovsky rocket equation:

$$\Delta v = u_e \ln\frac{m_0}{m_f} = 3000 \ln\frac{1000}{400} = 3000 \ln(2.5) \approx 3000 \times 0.916 = 2749\,\mathrm{m}/s$$

$\blacksquare$

</details>

### 1.10 Worked Example: Elastic Collision in Two Dimensions

**Problem.** A particle of mass $m_1 = 2\,\mathrm{kg}$ moving at $\mathbf{v}_1 = 4\hat{\mathbf{i}}\,\mathrm{m/s}$ collides elastically with a particle of mass $m_2 = 3\,\mathrm{kg}$ at rest. After the collision, $m_1$ moves at $30^\circ$ to the $x$-axis. Find the final velocities.

<details>
<summary>Solution</summary>

Conservation of momentum (x-component):
$$m_1 v_{1x} = m_1 v_{1f}\cos\theta_1 + m_2 v_{2f}\cos\theta_2$$
$$2 \times 4 = 2 \times v_{1f}\cos 30^\circ + 3 \times v_{2f}\cos\theta_2$$

Conservation of momentum (y-component):
$$0 = m_1 v_{1f}\sin\theta_1 - m_2 v_{2f}\sin\theta_2$$
$$0 = 2 \times v_{1f}\sin 30^\circ - 3 \times v_{2f}\sin\theta_2$$

Conservation of kinetic energy:
$$\frac{1}{2}m_1 v_1^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2$$
$$2 \times 16 = 2 \times v_{1f}^2 + 3 \times v_{2f}^2$$

From the y-component equation:
$$v_{1f}\sin 30^\circ = \frac{3}{2}v_{2f}\sin\theta_2$$
$$0.5 v_{1f} = 1.5 v_{2f}\sin\theta_2 \implies v_{2f}\sin\theta_2 = \frac{v_{1f}}{3}$$

From the x-component equation:
$$8 = \sqrt{3} v_{1f} + 3 v_{2f}\cos\theta_2$$

From energy conservation:
$$32 = 2v_{1f}^2 + 3v_{2f}^2$$

Solving these equations simultaneously (using $v_{2f}\sin\theta_2 = v_{1f}/3$ and $v_{2f}\cos\theta_2 = (8 - \sqrt{3}v_{1f})/3$):

$$v_{2f}^2 = \left(\frac{v_{1f}}{3}\right)^2 + \left(\frac{8 - \sqrt{3}v_{1f}}{3}\right)^2$$

$$32 = 2v_{1f}^2 + 3\left[\frac{v_{1f}^2}{9} + \frac{(8 - \sqrt{3}v_{1f})^2}{9}\right]$$

After algebraic manipulation:
$$v_{1f} \approx 1.6\,\mathrm{m/s}, \quad v_{2f} \approx 2.9\,\mathrm{m/s}$$

The second particle moves at approximately $\theta_2 \approx 19^\circ$ below the $x$-axis.

$\blacksquare$

</details>

**Common mistake.** Assuming the second particle moves along the $x$-axis. In two-dimensional elastic collisions, both particles generally move at angles to the original direction.

### 1.11 Worked Example: Non-Inertial Reference Frame

**Problem.** A block of mass $m = 5\,\mathrm{kg}$ sits on a frictionless horizontal surface inside an elevator accelerating upward at $a = 2\,\mathrm{m/s^2}$. A horizontal force $F = 20\,\mathrm{N}$ is applied. Find the acceleration relative to the elevator.

<details>
<summary>Solution</summary>

In the elevator frame (non-inertial), we must include the fictitious force $-ma$ acting downward on the block. The forces in the horizontal direction are:

Applied force: $F = 20\,\mathrm{N}$

Fictitious force: $-ma = -5 \times 2 = -10\,\mathrm{N}$ (horizontal component, since the elevator accelerates vertically, the fictitious force is purely vertical)

Wait -- the fictitious force is vertical, not horizontal. In the elevator frame, the block experiences:

- Gravity: $mg$ downward
- Normal force: $N$ upward
- Fictitious force: $ma$ downward (since elevator accelerates upward)
- Applied force: $F = 20\,\mathrm{N}$ horizontal

The vertical forces cancel in the elevator frame (the block doesn't accelerate vertically relative to the elevator). The horizontal acceleration relative to the elevator is:

$$a_{\text{rel}} = \frac{F}{m} = \frac{20}{5} = 4\,\mathrm{m/s^2}$$

In the ground frame, the horizontal acceleration is also $4\,\mathrm{m/s^2}$ (since the fictitious force has no horizontal component).

$\blacksquare$

**Note.** The fictitious force only affects motion in the direction of the non-inertial acceleration. If the elevator were accelerating horizontally, the fictitious force would be horizontal and would affect the block's horizontal motion.

### 1.12 Worked Example: Centre of Mass of a System

**Problem.** Three particles of masses $m_1 = 1\,\mathrm{kg}$, $m_2 = 2\,\mathrm{kg}$, $m_3 = 3\,\mathrm{kg}$ are located at $(0,0)$, $(2,0)$, and $(0,3)$ respectively. Find the position of the centre of mass and the moment of inertia about an axis through the centre of mass perpendicular to the $xy$-plane.

<details>
<summary>Solution</summary>

Centre of mass coordinates:
$$x_{cm} = \frac{m_1 x_1 + m_2 x_2 + m_3 x_3}{m_1 + m_2 + m_3} = \frac{1 \times 0 + 2 \times 2 + 3 \times 0}{6} = \frac{4}{6} = \frac{2}{3}\,\mathrm{m}$$

$$y_{cm} = \frac{m_1 y_1 + m_2 y_2 + m_3 y_3}{m_1 + m_2 + m_3} = \frac{1 \times 0 + 2 \times 0 + 3 \times 3}{6} = \frac{9}{6} = \frac{3}{2}\,\mathrm{m}$$

Distances from each particle to the centre of mass:
$$r_1 = \sqrt{\left(\frac{2}{3}\right)^2 + \left(\frac{3}{2}\right)^2} = \sqrt{\frac{4}{9} + \frac{9}{4}} = \sqrt{\frac{97}{36}} \approx 1.64\,\mathrm{m}$$

$$r_2 = \sqrt{\left(2 - \frac{2}{3}\right)^2 + \left(0 - \frac{3}{2}\right)^2} = \sqrt{\left(\frac{4}{3}\right)^2 + \left(\frac{3}{2}\right)^2} = \sqrt{\frac{16}{9} + \frac{9}{4}} = \sqrt{\frac{145}{36}} \approx 2.01\,\mathrm{m}$$

$$r_3 = \sqrt{\left(0 - \frac{2}{3}\right)^2 + \left(3 - \frac{3}{2}\right)^2} = \sqrt{\left(\frac{2}{3}\right)^2 + \left(\frac{3}{2}\right)^2} = \sqrt{\frac{97}{36}} \approx 1.64\,\mathrm{m}$$

Moment of inertia about the centre of mass:
$$I_{cm} = \sum m_i r_i^2 = 1 \times \frac{97}{36} + 2 \times \frac{145}{36} + 3 \times \frac{97}{36} = \frac{97 + 290 + 291}{36} = \frac{678}{36} \approx 18.83\,\mathrm{kg\cdot m^2}$$

$\blacksquare$

**Common mistake.** Using the origin instead of the centre of mass when calculating the moment of inertia. The parallel axis theorem relates the two: $I = I_{cm} + Md^2$ where $d$ is the distance from the centre of mass to the rotation axis.

### 1.10 From Newton to Variational Principles

Newton's laws work well in Cartesian coordinates but become cumbersome in constrained systems or
Non-Cartesian coordinates. The **Lagrangian** and **Hamiltonian** formulations provide a more
general And elegant framework based on energy principles.

The key insight: instead of tracking forces, track the **energy** of the system. The trajectory is
the One that **minimises** (or more precisely, makes stationary) the **action**.

:::caution
(centrifugal, Coriolis) that Are artifacts of the coordinate choice. The Lagrangian formulation
automatically accounts for these Through the coordinate transformation of the kinetic energy,
without any ad-hoc force terms.
:::

### 1.13 Common Mistakes

**Mistake 1: Confusing mass with weight**
Mass is an intrinsic property of an object (measured in kg), while weight is the gravitational force on it ($W = mg$, measured in N). Students often use "weight" when they mean "mass" and apply $F = mg$ without recognising that $g$ varies with location. On the Moon, your mass is the same but your weight is about one-sixth of Earth's.

**Mistake 2: Getting the direction of friction wrong**
Kinetic friction opposes the direction of motion relative to the surface, not the direction of the applied force. Static friction opposes the tendency of motion and can point in any direction along the surface. A common error is assuming friction always acts opposite to the applied force, which fails when the applied force has a component parallel to the surface that does not cause motion.

**Mistake 3: Forgetting that Newton's third law pairs act on different objects**
The action-reaction pair in Newton's third law always acts on different objects. If object A exerts a force on object B, then object B exerts an equal and opposite force on object A. These forces do not cancel because they act on different bodies. A frequent mistake is adding action-reaction forces together and concluding the net force is zero.

## Cross-References

- **[The Laws of Thermodynamics](../2-thermal-physics/1_the-laws-of-thermodynamics.md)**: The first law of thermodynamics extends conservation of energy to include heat transfer, building on mechanical energy conservation.
- **[Statistical Mechanics](../2-thermal-physics/2_statistical-mechanics.md)**: Statistical mechanics provides the microscopic foundation for thermodynamic laws by averaging over particle dynamics.
- **[Maxwell's Equations](../3-electromagnetism/1_maxwell-s-equations.md)**: Electromagnetic forces between charged particles are described by Maxwell's equations, extending Newtonian mechanics to electrodynamics.
- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)
