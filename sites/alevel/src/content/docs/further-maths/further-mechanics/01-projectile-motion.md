---
title: Projectile Motion
description: ""free" height gained
From the elevated launch point, so a flatter trajectory maximises the horizontal component of
Velocity.

</details>

<details>
<summary>Q4. A projectile is launched at $18\,\mathrm{m s}^{-1}$ at $50^\circ$ to the horizontal up a plane inclined at $15^\circ$. Find the range on the plane and the time of flight.</summary>

$r = \dfrac◆LB◆2(324)\cos 50°\sin 35°◆RB◆◆LB◆9.8\cos^2 15°◆RB◆ = \dfrac◆LB◆648 \times 0.6428 \times 0.5736◆RB◆◆LB◆9.8 \times 0.9330◆RB◆$

$= \dfrac{239.0}{9.143} \approx 26.1\,\mathrm{m}$.

$T = \dfrac◆LB◆2V\sin(\theta - \alpha)◆RB◆◆LB◆g\cos\alpha◆RB◆ = \dfrac◆LB◆2(18)\sin 35°◆RB◆◆LB◆9.8\cos 15°◆RB◆ = \dfrac◆LB◆36 \times 0.5736◆RB◆◆LB◆9.8 \times 0.9659◆RB◆ = \dfrac{20.65}{9.466} \approx 2.18\,\mathrm{s}$.

</details>

<details>
<summary>Q5. A projectile is launched at speed $V$ at angle $\theta$ to the horizontal from the edge of a cliff of height $h$. Show that the speed $v$ when the projectile hits the ground satisfies $v^2 = V^2 + 2gh$ regardless of the angle of projection.</summary>

By conservation of energy (or by kinematics):

$v_x = V\cos\theta$ (constant).

$v_y^2 = (V\sin\theta)^2 + 2gh$ (from $v^2 = u^2 + 2as$ with $a = g$$s = h$).

$v^2 = v_x^2 + v_y^2 = V^2\cos^2\theta + V^2\sin^2\theta + 2gh = V^2 + 2gh$.

The angle $\theta$ cancels out entirely. This is the energy conservation result: kinetic energy
Gained equals gravitational potential energy lost.

</details>

<details>
<summary>Q6. A golfer hits a ball from the top of a hill $30\,\mathrm{m}$ above the fairway. The ball leaves at $40\,\mathrm{m s}^{-1}$ at $35^\circ$ above the horizontal. The fairway slopes downward at $10^\circ$ below the horizontal. Find the distance the ball travels along the fairway before landing.</summary>

The landing condition is that the ball reaches the sloping fairway. The fairway surface passes
Through $(0, -30)$ and has equation $y = -30 - x\tan 10^\circ$.

Setting the trajectory equal to the fairway:

$x\tan 35° - \dfrac◆LB◆9.8x^2◆RB◆◆LB◆2(1600)\cos^2 35°◆RB◆ = -30 - x\tan 10^\circ$

$x(0.7002 + 0.1763) - \dfrac{9.8x^2}{2(1600)(0.6710)} = -30$

$0.8765x - \dfrac{9.8x^2}{2147.2} = -30$

$0.8765x - 0.004564x^2 + 30 = 0$

$0.004564x^2 - 0.8765x - 30 = 0$

$x = \dfrac◆LB◆0.8765 + \sqrt{0.7683 + 0.5477}◆RB◆◆LB◆0.009128◆RB◆ = \dfrac{0.8765 + 1.147}{0.009128} \approx 220.8\,\mathrm{m}$.

Distance along fairway
$= \dfrac◆LB◆x◆RB◆◆LB◆\cos 10°◆RB◆ = \dfrac{220.8}{0.9848} \approx 224.2\,\mathrm{m}$.

</details>

---

## 8. Advanced Worked Examples

### Example 8.1: Projectiles on an inclined plane

**Problem.** A particle is projected up a plane inclined at $30°$ to the horizontal with speed
$20\,\mathrm{m\,s^{-1}}$ at an angle of $50°$ to the horizontal. Find the range along the plane.

**Solution.** Resolving perpendicular to the plane (call this the $\xi$-axis) and parallel to the
Plane (the $\eta$-axis):

$a_\xi = -g\cos 30° = -\dfrac◆LB◆g\sqrt{3}◆RB◆◆LB◆2◆RB◆$$a_\eta = -g\sin 30° = -\dfrac{g}{2}$.

$u_\xi = 20\sin(50° - 30°) = 20\sin 20° \approx 6.84\,\mathrm{m\,s^{-1}}$.

$u_\eta = 20\cos 20° \approx 18.79\,\mathrm{m\,s^{-1}}$.

The particle lands when $\xi = 0$ again:

$\xi = u_\xi t + \dfrac{1}{2}a_\xi t^2 = 0 \implies t\!\left(20\sin 20° - \dfrac◆LB◆g\sqrt{3}◆RB◆◆LB◆4◆RB◆\,t\right) = 0$.

Time of flight:
$T = \dfrac◆LB◆80\sin 20°◆RB◆◆LB◆g\sqrt{3}◆RB◆ \approx \dfrac{27.36}{17.06} \approx 1.604\,\mathrm{s}$.

Range along plane:
$\eta = u_\eta T + \dfrac{1}{2}a_\eta T^2 = 20\cos 20° \times 1.604 - \dfrac{9.8}{2}(1.604)^2$

$\approx 30.14 - 12.60 = \boxed{17.5\,\mathrm{m}}$ (along the incline).

### Example 8.2: Maximum range on an inclined plane

**Problem.** Show that the angle of projection $\theta$ for maximum range $R$ up a plane of
Inclination $\alpha$ satisfies
$\theta = \dfrac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ + \dfrac◆LB◆\alpha◆RB◆◆LB◆2◆RB◆$.

**Solution.** The range formula for a plane inclined at angle $\alpha$ is:

$$R = \frac◆LB◆2u^2\cos\theta\sin(\theta - \alpha)◆RB◆◆LB◆g\cos^2\alpha◆RB◆$$

Using $\sin A\cos B = \dfrac{1}{2}[\sin(A+B) + \sin(A-B)]$:

$$R = \frac◆LB◆u^2[\sin(2\theta - \alpha) - \sin\alpha]◆RB◆◆LB◆g\cos^2\alpha◆RB◆$$

$R$ is maximised when $\sin(2\theta - \alpha) = 1$I.e.,
$2\theta - \alpha = \dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆$.

$$\boxed{\theta = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆\alpha◆RB◆◆LB◆2◆RB◆}$$

### Example 8.3: Hitting a moving target

**Problem.** A particle is projected from the origin with speed $u$ at angle $\theta$ above the
Horizontal. At the same instant, a second particle is released from rest at position $(d, h)$. Find
The condition on $u$ and $\theta$ for a collision.

**Solution.** The second particle falls freely: $x_2(t) = d$$y_2(t) = h - \dfrac{1}{2}gt^2$.

The first particle: $x_1(t) = u\cos\theta\,t$$y_1(t) = u\sin\theta\,t - \dfrac{1}{2}gt^2$.

For collision: $u\cos\theta\,t = d \implies t = \dfrac◆LB◆d◆RB◆◆LB◆u\cos\theta◆RB◆$.

Then:
$u\sin\theta \cdot \dfrac◆LB◆d◆RB◆◆LB◆u\cos\theta◆RB◆ - \dfrac{1}{2}g\!\left(\dfrac◆LB◆d◆RB◆◆LB◆u\cos\theta◆RB◆\right)^{\!2} = h$.

$$d\tan\theta - \frac◆LB◆gd^2◆RB◆◆LB◆2u^2\cos^2\theta◆RB◆ = h$$

$$\boxed{u^2 = \frac◆LB◆gd^2◆RB◆◆LB◆2\cos^2\theta\,(d\tan\theta - h)◆RB◆}$$

Provided $d\tan\theta > h$.

### Example 8.4: Projectile with quadratic air resistance (energy approach)

**Problem.** A particle of mass $m$ is projected vertically upward at speed $u$. The air resistance
Is $mkv^2$ opposing motion. Find the maximum height.

**Solution.** Going up: $\dfrac{dv}{dt} = -g - kv^2$.

$$\int_0^u \frac{v\,dv}{g + kv^2} = \int_0^H dh$$

Let $w = g + kv^2$$dw = 2kv\,dv$:

$$\frac{1}{2k}\int_g^{g+ku^2} \frac{dw}{w} = \frac{1}{2k}\ln\!\left(\frac{g+ku^2}{g}\right) = H$$

$$\boxed{H = \frac{1}{2k}\ln\!\left(1 + \frac{ku^2}{g}\right)}$$

### Example 8.5: Cartesian equation of trajectory from parametric

**Problem.** A projectile has position $(x, y)$ at time $t$ given by $x = V\cos\theta\,t$ and
$y = V\sin\theta\,t - \dfrac{1}{2}gt^2$. Derive the Cartesian equation and identify the key
Features.

**Solution.** Eliminating $t$: $t = \dfrac◆LB◆x◆RB◆◆LB◆V\cos\theta◆RB◆$.

$$y = x\tan\theta - \frac◆LB◆gx^2◆RB◆◆LB◆2V^2\cos^2\theta◆RB◆ = x\tan\theta - \frac◆LB◆gx^2\sec^2\theta◆RB◆◆LB◆2V^2◆RB◆$$

$$\boxed{y = x\tan\theta - \frac{gx^2}{2V^2}(1 + \tan^2\theta)}$$

This is a parabola. Setting $y = 0$: $x = 0$ or
$x = \dfrac◆LB◆2V^2\sin\theta\cos\theta◆RB◆◆LB◆g◆RB◆ = \dfrac◆LB◆V^2\sin 2\theta◆RB◆◆LB◆g◆RB◆$ (the
Range).

Maximum height: $y_{\max} = \dfrac◆LB◆V^2\sin^2\theta◆RB◆◆LB◆2g◆RB◆$ at
$x = \dfrac◆LB◆V^2\sin 2\theta◆RB◆◆LB◆2g◆RB◆$.

### Example 8.6: Envelope of safety (parabolic envelope)

**Problem.** A gun can fire a shell with speed $u$ at any angle. Show that no point outside the
Parabola $y = \dfrac{u^2}{2g} - \dfrac{gx^2}{2u^2}$ can be hit.

**Solution.** For angle $\theta$The trajectory is
$y = x\tan\theta - \dfrac{gx^2}{2u^2}(1+\tan^2\theta)$.

Rearranging as a quadratic in $\tan\theta$:

$$\frac{gx^2}{2u^2}\tan^2\theta - x\tan\theta + \frac{gx^2}{2u^2} + y = 0$$

For a real angle to exist, the discriminant must be $\geq 0$:

$$x^2 - 4 \cdot \frac{gx^2}{2u^2}\!\left(\frac{gx^2}{2u^2} + y\right) \geq 0$$

$$x^2 - \frac{2gx^2}{u^2}\!\left(\frac{gx^2}{2u^2} + y\right) \geq 0$$

$$1 - \frac{2g}{u^2}\!\left(\frac{gx^2}{2u^2} + y\right) \geq 0 \implies y \leq \frac{u^2}{2g} - \frac{gx^2}{2u^2}$$

$\blacksquare$

---

## 9. Common Pitfalls

| Pitfall                                                                                      | Correct Approach                                                                                      |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Using $45°$ for maximum range without checking if the target is above or below launch height | Maximum range at $45°$ only applies when launch and landing are at the same height                    |
| Forgetting that $g$ acts downward in all projectile problems                                 | Decompose $g$ into components along your chosen axes                                                  |
| Assuming air resistance is negligible when the question does not specify                     | In A-Level Further Maths, always state "assuming no air resistance" unless told otherwise             |
| Confusing the angle to the horizontal with the angle to the inclined plane                   | On a plane inclined at $\alpha$: angle to the plane $= \theta - \alpha$Angle to horizontal $= \theta$ |

---

## 10. Additional Exam-Style Questions

### Question 8

A cricketer hits a ball from ground level with speed $25\,\mathrm{m\,s^{-1}}$ at $35°$ to the
Horizontal. The ball just clears a wall $5\,\mathrm{m}$ high. Find the distance from the batsman to
The wall.

<details>
<summary>Solution</summary>

$y = x\tan 35° - \dfrac◆LB◆9.8x^2◆RB◆◆LB◆2(25)^2\cos^2 35°◆RB◆$.

Setting $y = 5$: $5 = 0.7002x - 0.002914x^2$.

$0.002914x^2 - 0.7002x + 5 = 0$.

$x = \dfrac◆LB◆0.7002 \pm \sqrt{0.4903 - 0.05828}◆RB◆◆LB◆0.005828◆RB◆ = \dfrac◆LB◆0.7002 \pm 0.6572◆RB◆◆LB◆0.005828◆RB◆$.

$x \approx 232.8\,\mathrm{m}$ (far wall) or $x \approx 7.35\,\mathrm{m}$ (near wall on the way up).

Since the ball "just clears," the wall is at $\boxed{7.35\,\mathrm{m}}$ (first crossing) or
$\boxed{232.8\,\mathrm{m}}$ depending on context.

</details>

### Question 9

**Prove that** the time of flight of a projectile on a plane inclined at angle $\alpha$ below the
Horizontal is $T = \dfrac◆LB◆2u\sin(\theta+\alpha)◆RB◆◆LB◆g\cos\alpha◆RB◆$.

<details>
<summary>Solution</summary>

Take axes parallel and perpendicular to the downward slope. The component of $g$ along the plane
(upward positive) is $-g\sin\alpha$And perpendicular to the plane (outward positive) is
$g\cos\alpha$.

Actually, resolving along the plane: $a_\parallel = -g\sin\alpha$ and $a_\perp = g\cos\alpha$ (into
The plane).

The particle lands when it returns to the plane. The perpendicular displacement returns to zero:

$0 = u_\perp T + \dfrac{1}{2}a_\perp T^2$ where $u_\perp = u\sin(\theta+\alpha)$ and
$a_\perp = -g\cos\alpha$ (taking outward as positive).

$T = \dfrac◆LB◆2u\sin(\theta+\alpha)◆RB◆◆LB◆g\cos\alpha◆RB◆$. $\blacksquare$

</details>

### Question 10

A particle is projected from a point $A$ on a cliff $40\,\mathrm{m}$ above sea level. It lands in
The sea at a horizontal distance of $100\,\mathrm{m}$ from the foot of the cliff. If the angle of
Projection is $30°$ above the horizontal, find the initial speed.

<details>
<summary>Solution</summary>

$x = u\cos 30°\,t \implies t = \dfrac◆LB◆100◆RB◆◆LB◆u\cos 30°◆RB◆$.

$y = u\sin 30°\,t - \dfrac{1}{2}gt^2 = -40$.

$\dfrac{u}{2} \cdot \dfrac◆LB◆100◆RB◆◆LB◆u\cos 30°◆RB◆ - \dfrac◆LB◆9.8 \times 10000◆RB◆◆LB◆2u^2\cos^2 30°◆RB◆ = -40$.

$\dfrac◆LB◆50◆RB◆◆LB◆\cos 30°◆RB◆ - \dfrac◆LB◆49000◆RB◆◆LB◆u^2 \cdot \frac{3}{4}◆RB◆ = -40$.

$\dfrac◆LB◆49000 \times 4◆RB◆◆LB◆3u^2◆RB◆ = 40 + 57.74 = 97.74$.

$u^2 = \dfrac{196000}{293.2} \approx 668.4$.

$\boxed{u \approx 25.9\,\mathrm{m\,s^{-1}}}$

</details>

---

## 11. Connections to Other Topics

### 11.1 Projectiles and circular motion

Both topics involve resolving forces and using Newton"s second law in 2D. See
[Circular Motion](/docs/alevel/further-maths/further-mechanics/further-circular-motion).

### 11.2 Projectile equations and calculus

The trajectory equation is derived by eliminating the parameter $t$ from the parametric equations, a
Standard calculus technique. See
[Further Calculus](/docs/alevel/further-maths/pure-mathematics/further-calculus).

### 11.3 Energy methods in projectiles

Conservation of energy provides an alternative to resolving forces, connecting projectiles to the
Work-energy principle.

---

## 12. Key Results Summary

| Quantity                                 | Formula                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| Horizontal range (same height)           | $R = \dfrac◆LB◆u^2\sin 2\theta◆RB◆◆LB◆g◆RB◆$                               |
| Maximum height                           | $H = \dfrac◆LB◆u^2\sin^2\theta◆RB◆◆LB◆2g◆RB◆$                              |
| Time of flight (same height)             | $T = \dfrac◆LB◆2u\sin\theta◆RB◆◆LB◆g◆RB◆$                                  |
| Trajectory equation                      | $y = x\tan\theta - \dfrac◆LB◆gx^2◆RB◆◆LB◆2u^2\cos^2\theta◆RB◆$             |
| Maximum range angle                      | $\theta = 45°$ (same height)                                               |
| Range on inclined plane (angle $\alpha$) | $R = \dfrac◆LB◆2u^2\cos\theta\sin(\theta-\alpha)◆RB◆◆LB◆g\cos^2\alpha◆RB◆$ |
| Speed at any point                       | $v = \sqrt{u^2 - 2gy}$ (energy conservation)                               |

---

## 13. Further Exam-Style Questions

### Question 11

A ball is thrown from a height of $1.5\,\mathrm{m}$ at $10\,\mathrm{m\,s^{-1}}$ at $30°$ above the
Horizontal. Find: (a) the time to reach maximum height; (b) the maximum height above the ground; (c)
The horizontal range (distance from launch to landing).

<details>
<summary>Solution</summary>

**(a)** Vertical: $v_y = u\sin\theta - gt = 5 - 9.8t$. At max height:
$t = \dfrac{5}{9.8} \approx \boxed{0.510\,\mathrm{s}}$.

**(b)**
$y_{\max} = 1.5 + \dfrac◆LB◆5^2◆RB◆◆LB◆2 \times 9.8◆RB◆ = 1.5 + 1.276 = \boxed{2.78\,\mathrm{m}}$.

**(c)** Total time: solve
$1.5 + 5t - 4.9t^2 = 0 \implies t = \dfrac◆LB◆5+\sqrt{25+29.4}◆RB◆◆LB◆9.8◆RB◆ = \dfrac{5+7.389}{9.8} \approx 1.263\,\mathrm{s}$.

Range $= 10\cos 30° \times 1.263 = 8.66 \times 1.263 \approx \boxed{10.9\,\mathrm{m}}$.

</details>

### Question 12

**Prove that** for a projectile launched from ground level, the speed at height $h$ is
$v = \sqrt{u^2 - 2gh}$.

<details>
<summary>Solution</summary>

By conservation of energy: $\dfrac{1}{2}mu^2 = \dfrac{1}{2}mv^2 + mgh$.

$u^2 = v^2 + 2gh$.

$v^2 = u^2 - 2gh$.

$v = \sqrt{u^2 - 2gh}$. $\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 Projectile with linear air resistance

With air resistance proportional to velocity ($\mathbf{F}_{\text{drag}} = -mk\mathbf{v}$):

Horizontal: $m\ddot{x} = -mk\dot{x} \implies \dot{x} = u\cos\theta\,e^{-kt}$.

$x = \dfrac◆LB◆u\cos\theta◆RB◆◆LB◆k◆RB◆(1-e^{-kt})$.

Vertical: $m\ddot{y} = -mg - mk\dot{y}$.

This is a first-order linear ODE with solution involving exponential decay toward terminal velocity
$v_t = -g/k$.

### 14.2 Coriolis effect (qualitative)

On a rotating Earth, the Coriolis force deflects projectiles to the right in the Northern Hemisphere
And to the left in the Southern Hemisphere. This is significant for long-range artillery but
Negligible for short-range projectiles.

### 14.3 Optimal launch angle for maximum range on a slope

For a plane inclined at angle $\alpha$ below the horizontal, the optimal angle for maximum range
Down the slope is:

$$\theta = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆ - \frac◆LB◆\alpha◆RB◆◆LB◆2◆RB◆$$

This is complementary to the result for an upward slope ($\theta = \pi/4 + \alpha/2$).

### 14.4 Range as a function of elevation

At constant speed $u$The range is $R = \dfrac◆LB◆u^2\sin 2\theta◆RB◆◆LB◆g◆RB◆$.

Two angles give the same range: $\theta$ and $90° - \theta$ (complementary angles).

---

## 15. Further Exam-Style Questions

### Question 13

A projectile is launched at speed $u$ at angle $\theta$ above horizontal. Show that the maximum
Height equals $\dfrac◆LB◆R\tan\theta◆RB◆◆LB◆4◆RB◆$ where $R$ is the horizontal range.

<details>
<summary>Solution</summary>

$H = \dfrac◆LB◆u^2\sin^2\theta◆RB◆◆LB◆2g◆RB◆$
$R = \dfrac◆LB◆u^2\sin 2\theta◆RB◆◆LB◆g◆RB◆ = \dfrac◆LB◆2u^2\sin\theta\cos\theta◆RB◆◆LB◆g◆RB◆$.

$\dfrac◆LB◆R\tan\theta◆RB◆◆LB◆4◆RB◆ = \dfrac◆LB◆2u^2\sin\theta\cos\theta◆RB◆◆LB◆4g◆RB◆ \cdot \dfrac◆LB◆\sin\theta◆RB◆◆LB◆\cos\theta◆RB◆ = \dfrac◆LB◆u^2\sin^2\theta◆RB◆◆LB◆2g◆RB◆ = H$.
$\blacksquare$

</details>

### Question 14

A ball is dropped from a height $H$. At the same instant, a second ball is projected upward from the
Ground with speed $u$. Find the condition for the balls to collide.

<details>
<summary>Solution</summary>

Ball 1: $y_1 = H - \dfrac{1}{2}gt^2$.

Ball 2: $y_2 = ut - \dfrac{1}{2}gt^2$.

Collision: $H - \dfrac{1}{2}gt^2 = ut - \dfrac{1}{2}gt^2 \implies H = ut \implies t = H/u$.

At this time, $y_1 = H - \dfrac{gH^2}{2u^2}$ must be $\geq 0$:

$H \geq \dfrac{gH^2}{2u^2} \implies u^2 \geq \dfrac{gH}{2} \implies \boxed{u \geq \sqrt◆LB◆\dfrac{gH}{2}◆RB◆}$.

</details>

### Question 15

**Prove that** the locus of the focus of a projectile's parabolic trajectory, as the angle varies,
Is a circle.

<details>
<summary>Solution</summary>

The trajectory is $y = x\tan\theta - \dfrac{gx^2}{2u^2}(1+\tan^2\theta)$.

The vertex of this parabola (maximum height point) is at
$x_v = \dfrac◆LB◆u^2\sin 2\theta◆RB◆◆LB◆2g◆RB◆$, $y_v = \dfrac◆LB◆u^2\sin^2\theta◆RB◆◆LB◆2g◆RB◆$.

$x_v^2 + (y_v - \dfrac{u^2}{4g})^2 = \dfrac◆LB◆u^4\sin^2 2\theta◆RB◆◆LB◆4g^2◆RB◆ + \dfrac{u^4}{16g^2}(\cos 2\theta - 1)^2$.

Using $\sin^2 2\theta + (1-\cos 2\theta)^2/4 = \sin^2 2\theta + \sin^4\theta/\cos^2\theta$...

Actually, a simpler approach: $x_v = \dfrac{u^2}{2g}\sin 2\theta$ and
$y_v = \dfrac{u^2}{4g}(1-\cos 2\theta)$.

$x_v^2 + (y_v - \dfrac{u^2}{4g})^2 = \dfrac{u^4}{4g^2}\sin^2 2\theta + \dfrac{u^4}{16g^2}\cos^2 2\theta = \dfrac{u^4}{16g^2}(4\sin^2 2\theta + \cos^2 2\theta)$.

This is not a simple circle . However, the directrix envelope of all trajectories (with Varying
$\theta$ but fixed $u$) is a parabola $y = \dfrac{u^2}{2g}$.

The **envelope of safety** (the parabolic boundary) is $y = \dfrac{u^2}{2g} - \dfrac{gx^2}{2u^2}$ as
Derived in Example 8.6.

</details>

---

## 16. Advanced Topics in Projectile Motion

### 16.1 Coriolis deflection

On a rotating Earth, the Coriolis acceleration is
$\mathbf{a}_C = -2\boldsymbol{\omega} \times \mathbf{v}$ where $\boldsymbol{\omega}$ is Earth's
Angular velocity.

For a projectile at latitude $\phi$:

- Horizontal deflection: proportional to $v \cdot \omega \sin\phi$
- Maximum deflection for eastward launch at the equator

### 16.2 Projectile motion in a resistive medium

With quadratic drag ($F = kv^2$), the equations of motion become coupled nonlinear ODEs with no
Closed-form solution. Numerical methods (Euler, Runge-Kutta) are required.

### 16.3 Multi-stage projectiles

Rockets and fireworks involve variable mass and thrust. The thrust equation is:

$$m\frac{dv}{dt} = F_{\text{thrust}} - mg - F_{\text{drag}}$$

Where $m$ decreases as fuel is consumed.

### 16.4 Range tables

Before computers, artillery range tables were computed using numerical integration of the equations
Of motion. These accounted for air resistance, wind, and the Coriolis effect.

---

## 17. Further Exam-Style Questions

### Question 16

A particle is projected from a height $h$ at angle $\theta$ below the horizontal with speed $u$.
Find the horizontal distance travelled before it hits the ground.

<details>
<summary>Solution</summary>

Taking downward as positive for the vertical: $y = h + u\sin\theta\,t + \dfrac{1}{2}gt^2$ (since the
Particle is projected downward).

Wait, let me set up coordinates properly. Upward positive:

$y = h - u\sin\theta\,t - \dfrac{1}{2}gt^2$.

$x = u\cos\theta\,t$.

When $y = 0$: $\dfrac{1}{2}gt^2 + u\sin\theta\,t - h = 0$.

$t = \dfrac◆LB◆-u\sin\theta + \sqrt{u^2\sin^2\theta + 2gh}◆RB◆◆LB◆g◆RB◆$ (taking positive root).

$R = u\cos\theta \cdot t = \dfrac◆LB◆u\cos\theta\left(\sqrt{u^2\sin^2\theta + 2gh} - u\sin\theta\right)◆RB◆◆LB◆g◆RB◆$.

</details>

### Question 17

**Prove that** the time taken for a projectile to reach maximum height is
$t = \dfrac◆LB◆u\sin\theta◆RB◆◆LB◆g◆RB◆$.

<details>
<summary>Solution</summary>

Vertical: $v_y = u\sin\theta - gt$. At maximum height, $v_y = 0$.

$u\sin\theta - gt = 0 \implies t = \dfrac◆LB◆u\sin\theta◆RB◆◆LB◆g◆RB◆$. $\blacksquare$

</details>

