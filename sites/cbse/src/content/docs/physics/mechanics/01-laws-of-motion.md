---

date: 2026-07-23T21:57:32+01:00
title: "Newton's Laws of Motion"
description: "CBSE Class 12 Physics: Newton's three laws of motion with worked examples and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Physics", "url": "https://cbse.wyattau.com/physics"}, {"name": "Mechanics", "url": "https://cbse.wyattau.com/physics/mechanics"}, {"name": "01 Laws Of Motion", "url": "https://cbse.wyattau.com/physics/mechanics/01-laws-of-motion"}]
}
</script>

## Newton's Laws of Motion

## First Law (Law of Inertia)

A body remains at rest or in uniform motion unless acted upon by an external force.

### Worked Example 1

**Problem:** A 5 kg block rests on a frictionless surface. A force of 10 N is applied horizontally. Find the acceleration.

**Solution:**
$$F = ma$$
$$a = \frac{F}{m} = \frac{10}{5} = 2 \, \text{m/s}^2$$

### Worked Example 2

**Problem:** A car moving at 20 m/s decelerates uniformly to rest in 5 seconds. Find the deceleration.

**Solution:**
$$a = \frac{v - u}{t} = \frac{0 - 20}{5} = -4 \, \text{m/s}^2$$

## Second Law (F = ma)

The net force on a body equals its mass times acceleration.

### Worked Example 3

**Problem:** Two forces of 5 N and 12 N act on a 3 kg body at right angles. Find the resultant acceleration.

**Solution:**
$$F_{net} = \sqrt{5^2 + 12^2} = 13 \, \text{N}$$
$$a = \frac{F_{net}}{m} = \frac{13}{3} \approx 4.33 \, \text{m/s}^2$$

## Third Law (Action-Reaction)

For every action, there is an equal and opposite reaction.

### Worked Example 4

**Problem:** A book of mass 2 kg rests on a table. Identify all forces acting on the book and their reactions.

**Solution:**
- Weight: $mg = 2 \times 9.8 = 19.6$ N downward
- Normal reaction: 19.6 N upward (by table on book)
- Reaction to weight: 19.6 N upward (by book on Earth)
- Reaction to normal: 19.6 N downward (by book on table)

## Additional Worked Examples

### Worked Example 5 — Newton's Second Law with Friction

**Problem:** A 10 kg block is pushed across a rough horizontal surface with a force of 40 N. The coefficient of kinetic friction is 0.3. Find the acceleration of the block. ($g = 9.8 \, \text{m/s}^2$)

**Solution:**

Normal force:
$$N = mg = 10 \times 9.8 = 98 \, \text{N}$$

Friction force:
$$f_k = \mu_k N = 0.3 \times 98 = 29.4 \, \text{N}$$

Net force:
$$F_{net} = F - f_k = 40 - 29.4 = 10.6 \, \text{N}$$

Acceleration:
$$a = \frac{F_{net}}{m} = \frac{10.6}{10} = 1.06 \, \text{m/s}^2$$

### Worked Example 6 — Inclined Plane with Friction

**Problem:** A 5 kg block is placed on a rough inclined plane at an angle of $30^\circ$ to the horizontal. The coefficient of static friction is 0.25. Will the block slide down? If it does, find the acceleration. ($g = 9.8 \, \text{m/s}^2$)

**Solution:**

Component of weight along the incline:
$$mg \sin\theta = 5 \times 9.8 \times \sin 30^\circ = 5 \times 9.8 \times 0.5 = 24.5 \, \text{N}$$

Maximum static friction:
$$f_{s,\max} = \mu_s N = \mu_s mg \cos\theta = 0.25 \times 5 \times 9.8 \times \cos 30^\circ$$
$$= 0.25 \times 5 \times 9.8 \times 0.866 = 10.6 \, \text{N}$$

Since $mg \sin\theta = 24.5 \, \text{N} > f_{s,\max} = 10.6 \, \text{N}$, the block slides down.

Net force along the incline (using kinetic friction $\mu_k = 0.2$):
$$F_{net} = mg \sin\theta - \mu_k mg \cos\theta = 24.5 - 0.2 \times 5 \times 9.8 \times 0.866$$
$$= 24.5 - 8.49 = 16.01 \, \text{N}$$

Acceleration:
$$a = \frac{F_{net}}{m} = \frac{16.01}{5} \approx 3.20 \, \text{m/s}^2$$

### Worked Example 7 — Connected Blocks (Atwood's Machine)

**Problem:** Two masses $m_1 = 3 \, \text{kg}$ and $m_2 = 5 \, \text{kg}$ are connected by a light inextensible string over a frictionless pulley. Find the acceleration of the system and the tension in the string. ($g = 9.8 \, \text{m/s}^2$)

**Solution:**

For the heavier mass ($m_2$):
$$m_2 g - T = m_2 a$$

For the lighter mass ($m_1$):
$$T - m_1 g = m_1 a$$

Adding both equations:
$$m_2 g - m_1 g = (m_1 + m_2) a$$
$$a = \frac{(m_2 - m_1)g}{m_1 + m_2} = \frac{(5 - 3) \times 9.8}{3 + 5} = \frac{19.6}{8} = 2.45 \, \text{m/s}^2$$

Tension:
$$T = m_1(g + a) = 3 \times (9.8 + 2.45) = 3 \times 12.25 = 36.75 \, \text{N}$$

### Worked Example 8 — Lift Problem (Apparent Weight)

**Problem:** A 60 kg person stands on a weighing scale inside a lift. What does the scale read when the lift (a) accelerates upward at $2 \, \text{m/s}^2$, (b) accelerates downward at $2 \, \text{m/s}^2$, (c) moves with constant velocity? ($g = 9.8 \, \text{m/s}^2$)

**Solution:**

The scale reads the normal reaction $N$.

**(a) Accelerating upward:**
$$N - mg = ma \implies N = m(g + a) = 60(9.8 + 2) = 60 \times 11.8 = 708 \, \text{N}$$

**(b) Accelerating downward:**
$$mg - N = ma \implies N = m(g - a) = 60(9.8 - 2) = 60 \times 7.8 = 468 \, \text{N}$$

**(c) Constant velocity ($a = 0$):**
$$N = mg = 60 \times 9.8 = 588 \, \text{N}$$

## Practice Problems

1. A 10 kg block is pushed with 50 N force on a frictionless surface. Find acceleration.
2. Two forces of 3 N and 4 N act at right angles on a 2 kg body. Find resultant acceleration.
3. A body of mass 5 kg is acted upon by two forces: 10 N East and 8 N North. Find magnitude and direction of resultant.

### Additional Practice Problems

4. A 20 kg block is pushed with 100 N force on a surface with $\mu_k = 0.4$. Find the acceleration. ($g = 9.8 \, \text{m/s}^2$)
5. A block slides down a frictionless incline of angle $45^\circ$. Find the acceleration.
6. Two masses of 4 kg and 6 kg are connected over a frictionless pulley. Find the acceleration and tension.

## Intuition

**Newton's laws are about prediction, not explanation:** The first law tells you what happens when nothing is pushing. The second law tells you how hard things accelerate when you push them. The third law tells you that every push comes with a push-back. Together, they form a complete framework for predicting motion — from a ball rolling down a hill to a planet orbiting a star.

**Why it matters:** These laws are the foundation of classical mechanics. Every engineering calculation — bridge design, rocket trajectory, car crash analysis — starts with F=ma. Understanding friction, normal forces, and inertial frames is essential for solving real-world problems.

**The key insight:** The normal force is not always equal to weight — it adjusts to whatever is needed to prevent surfaces from passing through each other. On an incline, the normal force is mg cosθ, not mg.

## Common Mistakes

### Mistake 1: Confusing mass with weight

Mass ($m$) is a scalar measured in kilograms and represents the amount of matter. Weight ($W = mg$) is a force measured in newtons and depends on the local gravitational field. Students often write $F = ma$ using weight instead of mass, or report weight in kilograms. In Newton's second law, $m$ is always the mass in kg; the gravitational force $mg$ is just one of the forces that may act on the body.

### Mistake 2: Forgetting that friction opposes relative motion, not velocity

Static friction opposes the tendency of motion, while kinetic friction opposes the direction of sliding. Students frequently assume friction always acts opposite to the velocity, which is incorrect for situations like a block on an accelerating conveyor belt. Determine the direction of relative motion (or intended motion for static friction) and place friction accordingly.

### Mistake 3: Incorrectly resolving forces on an inclined plane

On an inclined plane at angle $\theta$, the component of weight along the incline is $mg\sin\theta$ and the component perpendicular to the incline is $mg\cos\theta$. Students often swap these, writing $mg\cos\theta$ for the parallel component. A useful check: at $\theta = 0$ (horizontal), the parallel component should be zero ($\sin 0 = 0$), and at $\theta = 90°$ (vertical), the parallel component should be $mg$ ($\sin 90° = 1$).

## Cross-References

- [Work, Energy, and Power](./02-work-energy-power) -- The work-energy theorem provides an alternative formulation of Newton's second law in terms of energy.
- [Rotational Motion](./03-rotational-motion) -- Newton's second law extends to rotational dynamics through torque and angular acceleration.
- [Gravitation](../optics/index) -- Gravitational force is an application of Newton's law of universal gravitation combined with the second law.
