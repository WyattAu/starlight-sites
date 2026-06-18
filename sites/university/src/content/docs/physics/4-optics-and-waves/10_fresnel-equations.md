---
title: Fresnel Equations
tags:
  - Physics
  - University
description: ""s Angle

At the **Brewster angle** $\theta_B$The reflected beam for p-polarised light has zero amplitude:
$r_p = 0$:

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Proof.** Setting $r_p = 0$: $n_2\cos\theta_i = n_1\cos\theta_t$. Using Snell's law
$n_1\sin\theta_i = n_2\sin\theta_t$:

$$\frac{\cos\theta_i}{\sin\theta_i} = \frac{\cos\theta_t}{\sin\theta_t}$$

$$\cot\theta_i = \cot\theta_t \implies \theta_i + \theta_t = 90^\circ$$

So $\tan\theta_i = \tan\theta_B = n_2/n_1$. $\blacksquare$

At Brewster's angle, the reflected and refracted beams are perpendicular. This is why polarising
Filters work at specific angles for reflected glare.

### 10.3 Total Internal Reflection and the Evanescent Wave

When $n_1 \gt n_2$ and $\theta_i \gt \theta_c = \arcsin(n_2/n_1)$, $\sin\theta_t \gt 1$So
$\cos\theta_t = i\sqrt{\sin^2\theta_t - 1}$ becomes imaginary.

The transmitted field becomes an **evanescent wave**:

$$E_t \propto e^{-\kappa x}\, e^{i(k_z z - \omega t)}$$

Where $\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}$ and $k_z = k_0 n_1\sin\theta_i$.

The field decays exponentially with penetration depth $\delta = 1/\kappa$ but propagates along the
Interface. No energy is transported into the second medium: $R = 1$.

**Frustrated total internal reflection.** If a third medium is brought within a few wavelengths of
The interface, energy can tunnel across the gap (analogous to quantum tunnelling).

