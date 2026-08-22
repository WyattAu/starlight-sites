---

date: 2026-07-23T21:57:32+01:00
title: "Rotational motion"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"cbse\", \"url\": \"https://cbse.wyattau.com\"}, {\"name\": \"Physics\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Physics", "url": "https://cbse.wyattau.com/physics"}, {"name": "Mechanics", "url": "https://cbse.wyattau.com/physics/mechanics"}, {"name": "03 Rotational Motion", "url": "https://cbse.wyattau.com/physics/mechanics/03-rotational-motion"}]
}
</script>

## Rotational motion

Study notes for CBSE Class 12 physics - Rotational motion.

## Key Concepts

- Torque: $\vec{\tau} = \vec{r} \times \vec{F}$, magnitude $\tau = rF\sin\theta$
- Moment of inertia: $I = \sum m_i r_i^2$ (discrete), $I = \int r^2 \, dm$ (continuous)
- Rotational analogue of Newton's second law: $\tau = I\alpha$
- Angular momentum: $L = I\omega$, conservation: $I_1\omega_1 = I_2\omega_2$
- Rotational kinetic energy: $K_{rot} = \frac{1}{2}I\omega^2$
- Parallel axis theorem: $I = I_{cm} + Md^2$

## Worked Example 1 — Torque Calculation

**Problem:** A force of 20 N is applied at the end of a 0.5 m wrench at an angle of $60^\circ$ to the handle. Find the torque about the bolt.

**Solution:**
$$\tau = rF\sin\theta = 0.5 \times 20 \times \sin 60^\circ$$
$$= 0.5 \times 20 \times \frac{\sqrt{3}}{2} = 5\sqrt{3} \approx 8.66 \, \text{N}\cdot\text{m}$$

## Worked Example 2 — Moment of Inertia of a System

**Problem:** Three point masses of 1 kg, 2 kg, and 3 kg are placed at distances of 1 m, 2 m, and 3 m from the axis of rotation. Find the total moment of inertia and the angular acceleration when a net torque of 12 N$\cdot$m is applied.

**Solution:**
$$I = m_1 r_1^2 + m_2 r_2^2 + m_3 r_3^2 = 1(1)^2 + 2(2)^2 + 3(3)^2$$
$$= 1 + 8 + 27 = 36 \, \text{kg}\cdot\text{m}^2$$

Angular acceleration:
$$\alpha = \frac{\tau}{I} = \frac{12}{36} = \frac{1}{3} \approx 0.333 \, \text{rad/s}^2$$

## Worked Example 3 — Rotational Kinetic Energy

**Problem:** A uniform disc of mass 2 kg and radius 0.3 m rotates about its axis at $10 \, \text{rad/s}$. Find its rotational kinetic energy.

**Solution:**

Moment of inertia of a disc:
$$I = \frac{1}{2}MR^2 = \frac{1}{2} \times 2 \times (0.3)^2 = 0.09 \, \text{kg}\cdot\text{m}^2$$

Rotational kinetic energy:
$$K_{rot} = \frac{1}{2}I\omega^2 = \frac{1}{2} \times 0.09 \times 100 = 4.5 \, \text{J}$$

## Worked Example 4 — Conservation of Angular Momentum

**Problem:** A figure skater spinning at $4 \, \text{rad/s}$ with arms extended has moment of inertia $4 \, \text{kg}\cdot\text{m}^2$. She pulls her arms in, reducing her moment of inertia to $2 \, \text{kg}\cdot\text{m}^2$. Find her new angular speed and the change in rotational kinetic energy.

**Solution:**

Conservation of angular momentum:
$$I_1\omega_1 = I_2\omega_2$$
$$4 \times 4 = 2 \times \omega_2 \implies \omega_2 = 8 \, \text{rad/s}$$

Initial KE:
$$K_i = \frac{1}{2}I_1\omega_1^2 = \frac{1}{2} \times 4 \times 16 = 32 \, \text{J}$$

Final KE:
$$K_f = \frac{1}{2}I_2\omega_2^2 = \frac{1}{2} \times 2 \times 64 = 64 \, \text{J}$$

Change: $\Delta K = 64 - 32 = 32 \, \text{J}$ (energy increases due to work done by the skater pulling arms in).

## Practice Problems

1. A force of 15 N acts at a distance of 0.2 m from the pivot at $45^\circ$ to the lever arm. Find the torque.
2. A ring of mass 3 kg and radius 0.5 m rotates at $6 \, \text{rad/s}$. Find its rotational kinetic energy.
3. A disc spinning at $12 \, \text{rad/s}$ has its moment of inertia halved by pulling mass inward. Find the new angular speed.

### Additional Practice Problems

1. Find the moment of inertia of a solid sphere of mass $M$ and radius $R$ about a tangent axis.
2. A merry-go-round of moment of inertia $200 \, \text{kg}\cdot\text{m}^2$ rotates at $2 \, \text{rad/s}$. A 25 kg child runs radially inward from 3 m to 1 m from the center. Find the new angular speed.

## Worked Example 5 — Rolling Motion Without Slipping

**Problem:** A solid sphere of mass 2 kg and radius 0.1 m rolls down an incline from rest. Find its speed at the bottom of a 3 m high incline.

**Solution:**

For rolling without slipping, $v = R\omega$. Using conservation of energy:
$$mgh = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$$

For a solid sphere, $I = \frac{2}{5}mR^2$:
$$mgh = \frac{1}{2}mv^2 + \frac{1}{2} \cdot \frac{2}{5}mR^2 \cdot \frac{v^2}{R^2}$$

$$mgh = \frac{1}{2}mv^2 + \frac{1}{5}mv^2 = \frac{7}{10}mv^2$$

$$v = \sqrt{\frac{10gh}{7}} = \sqrt{\frac{10 \times 9.8 \times 3}{7}} = \sqrt{42} \approx 6.48 \text{ m/s}$$

**Common mistake:** Forgetting to include rotational kinetic energy. The answer would be $\sqrt{2gh} = 7.67$ m/s if rotation were ignored.

## Worked Example 6 — Torque and Angular Acceleration

**Problem:** A uniform disc of mass 5 kg and radius 0.2 m is free to rotate about a horizontal axis through its center. A string is wrapped around the rim and a 0.5 kg mass hangs from it. Find the angular acceleration of the disc.

**Solution:**

For the hanging mass:
$$mg - T = ma$$

For the disc (torque $\tau = TR = I\alpha$):
$$TR = \frac{1}{2}MR^2 \cdot \alpha$$

Since $a = R\alpha$:
$$T = \frac{1}{2}MR\alpha$$

Substituting into the first equation:
$$mg - \frac{1}{2}MR\alpha = mR\alpha$$

$$mg = mR\alpha + \frac{1}{2}MR\alpha = R\alpha\left(m + \frac{M}{2}\right)$$

$$\alpha = \frac{mg}{R\left(m + \frac{M}{2}\right)} = \frac{0.5 \times 9.8}{0.2 \times (0.5 + 2.5)} = \frac{4.9}{0.6} \approx 8.17 \text{ rad/s}^2$$

**Common mistake:** Forgetting that the tension provides the torque, not the weight of the hanging mass.

## Worked Example 7 — Precession of a Gyroscope

**Problem:** A gyroscope wheel has moment of inertia $0.04 \text{ kg}\cdot\text{m}^2$ and spins at $100 \text{ rad/s}$. Its axle is horizontal and supported at one end, 0.1 m from the wheel's center. Find the precession angular velocity.

**Solution:**

The torque due to gravity is:
$$\tau = Mgr = (0.5)(9.8)(0.1) = 0.49 \text{ N}\cdot\text{m}$$

The angular momentum of the spinning wheel is:
$$L = I\omega = 0.04 \times 100 = 4 \text{ kg}\cdot\text{m}^2/\text{s}$$

Precession angular velocity:
$$\Omega = \frac{\tau}{L} = \frac{0.49}{4} = 0.1225 \text{ rad/s}$$

**Common mistake:** Confusing precession angular velocity with spin angular velocity. Precession is in standard practice much slower than spin.

## Intuition

**Rotational motion extends linear concepts to spinning objects:** Just as linear motion has force, mass, and acceleration, rotational motion has torque, moment of inertia, and angular acceleration. The rotational world mirrors the linear world with different variable names.

**Why it matters:** Rotational motion explains how gears work, why gyroscopes stabilise, how planets orbit, and why ice skaters spin faster when they pull in their arms.

**The key insight:** Moment of inertia is the rotational analogue of mass — the answer varies based on not just on how much matter there is, but on how that matter is distributed relative to the axis of rotation.

## Common Mistakes

### Mistake 1: Forgetting that moment of inertia depends on the axis of rotation

The moment of inertia $I = \sum m_i r_i^2$ is defined relative to a specific axis. The same object has different moments of inertia about different axes. Students often use the moment of inertia about the centre of mass when the problem asks about rotation about a different axis. Use the parallel axis theorem $I = I_{cm} + Md^2$ to shift between axes.

### Mistake 2: Confusing rotational and translational kinetic energy

Rotational kinetic energy is $K_{rot} = \frac{1}{2}I\omega^2$, not $\frac{1}{2}mv^2$. For rolling motion without slipping, the total kinetic energy is $K = \frac{1}{2}mv^2 + \frac{1}{2}I\omega^2$, which combines both translational and rotational contributions. Students sometimes use only the translational term and get speeds that are too high.

### Mistake 3: Applying conservation of angular momentum when external torques exist

Angular momentum is conserved only when the net external torque is zero. Students often apply $I_1\omega_1 = I_2\omega_2$ to situations where an external torque acts (such as a spinning top precessing under gravity). Always check whether external torques are present before applying conservation.

## Cross-References

- **[Site Home](../../):** Main landing page for CBSE notes.
- **[Chemistry](../../chemistry/):** Chemistry notes covering organic and physical chemistry.
- **[Physics](../../physics/):** Physics notes covering mechanics and thermodynamics.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.
