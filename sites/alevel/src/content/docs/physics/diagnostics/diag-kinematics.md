---
title: "Kinematics -- Diagnostic Tests"
description: ""s coordinates satisfy $y = x\tan\alpha$.

Horizontal: $x = u\cos\theta \cdot t$

Vertical: $y = u\sin\theta \cdot t - \frac{1}{2}gt^2$

Setting $y = x\tan\alpha$:

$$u\sin\theta \cdot t - \frac{1}{2}gt^2 = u\cos\theta \cdot t \cdot \tan\alpha$$
$$t\left(u\sin\theta - u\cos\theta\tan\alpha - \frac{1}{2}gt\right) = 0$$

Ignoring $t = 0$:

$$t = \frac◆LB◆2u(\sin\theta - \cos\theta\tan\alpha)◆RB◆◆LB◆g◆RB◆ = \frac◆LB◆2u(\sin\theta\cos\alpha - \cos\theta\sin\alpha)◆RB◆◆LB◆g\cos\alpha◆RB◆ = \frac◆LB◆2u\sin(\theta - \alpha)◆RB◆◆LB◆g\cos\alpha◆RB◆$$

As required.

(b) Substituting:
$t = \frac◆LB◆2 \times 25 \times \sin(30^\circ - 20^\circ)◆RB◆◆LB◆9.81 \times \cos 20^\circ◆RB◆ = \frac◆LB◆50 \times \sin 10^\circ◆RB◆◆LB◆9.81 \times \cos 20^\circ◆RB◆$

$$= \frac◆LB◆50 \times 0.1736◆RB◆◆LB◆9.81 \times 0.9397◆RB◆ = \frac{8.682}{9.219} = 0.9420\,\text{s}$$

Horizontal distance:
$x = 25\cos 30^\circ \times 0.9420 = 25 \times 0.8660 \times 0.9420 = 20.40\,\text{m}$

Distance along the plane: $OP = x/\cos\alpha = 20.40/\cos 20^\circ = 20.40/0.9397 = 21.71\,\text{m}$

(c) At $t = 0.9420\,\text{s}$:

$v_x = u\cos\theta = 25\cos 30^\circ = 21.65\,\text{m}\,\text{s}^{-1}$

$v_y = u\sin\theta - gt = 25\sin 30^\circ - 9.81 \times 0.9420 = 12.50 - 9.245 = 3.255\,\text{m}\,\text{s}^{-1}$

Speed
$= \sqrt{v_x^2 + v_y^2} = \sqrt{21.65^2 + 3.255^2} = \sqrt{468.7 + 10.60} = \sqrt{479.3} = 21.89\,\text{m}\,\text{s}^{-1}$

---

### IT-2: Kinematics of Connected Particles (with Dynamics)

**Question:**

Two particles $A$ (mass $3.0\,\text{kg}$) and $B$ (mass $5.0\,\text{kg}$) are connected by a light
inextensible string passing over a smooth pulley. Initially, $A$ is held at rest on a rough
horizontal surface and $B$ hangs freely, $0.80\,\text{m}$ above the ground. The coefficient of
friction between $A$ and the surface is $\mu = 0.40$.

$A$ is released from rest. When $B$ hits the ground, the string goes slack. Assume $B$ does not
rebound.

(a) Calculate the acceleration of the system while the string is taut.

(b) Calculate the speed of $A$ at the instant $B$ hits the ground.

(c) Calculate the total distance travelled by $A$ from release until it comes to rest.

Take $g = 9.81\,\text{m}\,\text{s}^{-2}$.

**Solution:**

(a) For $B$ (downward positive): $5.0g - T = 5.0a$

For $A$ (horizontal, rightward positive): $T - F_r = 3.0a$Where
$F_r = \mu R = 0.40 \times 3.0g = 1.2g$

Adding: $5.0g - 1.2g = 8.0a$

$$a = \frac{3.8g}{8.0} = \frac◆LB◆3.8 \times 9.81◆RB◆◆LB◆8.0◆RB◆ = \frac{37.28}{8.0} = 4.66\,\text{m}\,\text{s}^{-2}$$

(b) $B$ falls $0.80\,\text{m}$ from rest with $a = 4.66\,\text{m}\,\text{s}^{-2}$:

$$v^2 = 0 + 2 \times 4.66 \times 0.80 = 7.456$$ $$v = 2.73\,\text{m}\,\text{s}^{-1}$$

(c) After $B$ hits the ground, $A$ continues with initial speed $2.73\,\text{m}\,\text{s}^{-1}$ but
now decelerates due to friction alone.

Deceleration: $a' = F_r/m = \mu g = 0.40 \times 9.81 = 3.92\,\text{m}\,\text{s}^{-2}$

Distance to stop: $s = v^2/(2a') = 7.456/(2 \times 3.92) = 0.951\,\text{m}$

Total distance travelled by $A$ $= 0.80 + 0.951 = 1.75\,\text{m}$

---

### IT-3: Graphical Analysis of Stopping Distance (with Work-Energy)

**Question:**

The velocity of a car during an emergency stop is recorded at equal time intervals of
$0.5\,\text{s}$:

| $t\,/\,\text{s}$                | 0    | 0.5  | 1.0  | 1.5  | 2.0 | 2.5 | 3.0 |
| ------------------------------- | ---- | ---- | ---- | ---- | --- | --- | --- |
| $v\,/\,\text{m}\,\text{s}^{-1}$ | 20.0 | 17.5 | 14.8 | 11.7 | 8.2 | 4.3 | 0   |

(a) Use the trapezium rule to estimate the thinking distance (distance travelled during the driver's
reaction time of $0.7\,\text{s}$) and the braking distance (total stopping distance minus thinking
distance).

(b) The car has mass $1200\,\text{kg}$. Estimate the average braking force.

(c) If the road is wet, the braking force is reduced by $40\%$. Calculate the new total stopping
distance, assuming the same initial speed and reaction time.

**Solution:**

(a) **Thinking distance:** The car travels at constant speed during the reaction time.

$v$ at $t = 0$ is $20.0\,\text{m}\,\text{s}^{-1}$. By $t = 0.7\,\text{s}$The velocity has decreased
(braking has not yet started, so actually during the thinking time the car travels at constant
speed).

Thinking distance $= 20.0 \times 0.7 = 14.0\,\text{m}$.

**Total stopping distance:** Using the trapezium rule on all data:

$$s = 0.5 \times \left[\frac{20.0 + 0}{2} + 17.5 + 14.8 + 11.7 + 8.2 + 4.3\right]$$
$$= 0.5 \times [10.0 + 17.5 + 14.8 + 11.7 + 8.2 + 4.3] = 0.5 \times 66.5 = 33.25\,\text{m}$$

**Braking distance** $= 33.25 - 14.0 = 19.25 \approx 19.3\,\text{m}$

(b) Using the work-energy principle: $Fs = \frac{1}{2}mv^2$

$$F = \frac◆LB◆0.5 \times 1200 \times 20.0^2◆RB◆◆LB◆19.25◆RB◆ = \frac{240000}{19.25} = 12468 \approx 12500\,\text{N}$$

(c) New braking force $= 0.60 \times 12500 = 7500\,\text{N}$

New braking distance:
$s = \frac◆LB◆0.5 \times 1200 \times 400◆RB◆◆LB◆7500◆RB◆ = \frac{240000}{7500} = 32.0\,\text{m}$

New total stopping distance $= 14.0 + 32.0 = 46.0\,\text{m}$
