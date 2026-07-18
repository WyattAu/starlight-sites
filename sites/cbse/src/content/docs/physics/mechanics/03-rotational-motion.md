---
title: "Rotational motion"
description: "CBSE Class 12 physics: Rotational motion"
---

# Rotational motion

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

4. Find the moment of inertia of a solid sphere of mass $M$ and radius $R$ about a tangent axis.
5. A merry-go-round of moment of inertia $200 \, \text{kg}\cdot\text{m}^2$ rotates at $2 \, \text{rad/s}$. A 25 kg child runs radially inward from 3 m to 1 m from the center. Find the new angular speed.
