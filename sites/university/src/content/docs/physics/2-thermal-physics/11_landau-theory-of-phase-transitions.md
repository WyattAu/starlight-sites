---
title: Landau Theory of Phase Transitions
tags:
  - Physics
  - University
description: "" = 1$.

### 11.4 Specific Heat

The free energy at equilibrium is:

$$f_{\text{eq} = \begin{cases} f_0 & T > T_c \\ f_0 - a^2/(4b) & T < T_c \end{cases}}$$

The specific heat discontinuity is:

$$C_{T_c^-} - C_{T_c^+} = -T_c \frac{\partial^2}{\partial T^2}\left(\frac{-a^2}{4b}\right)\bigg|_{T_c} = \frac{T_c a_0^2}{2b}$$

This is a finite jump ($\alpha = 0$ in mean-field theory).

<details>
<summary>Worked Example 11.1: Landau Free Energy Minimum</summary>

Consider $f = \frac{1}{2}(T - 100)\phi^2 + \frac{1}{4}\phi^4$ (in arbitrary units where
$a_0 = b = 1$).

At $T = 50$ ($a = -50$): $f = -25\phi^2 + \frac{1}{4}\phi^4$.

$$\frac{\partial f}{\partial \phi} = -50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (max)} or  \phi = \pm\sqrt{50} = \pm 7.07 \text{ (min)}$$

$$f_{\text{min} = -25(50) + \frac{1}{4}(2500) = -1250 + 625 = -625}$$

At $T = 150$ ($a = 50$): $f = 25\phi^2 + \frac{1}{4}\phi^4$.

$$\frac{\partial f}{\partial \phi} = 50\phi + \phi^3 = 0 \implies \phi = 0 \text{ (min)}$$

$$f_{\text{min} = 0}$$

The free energy drops by 625 units when going below $T_c = 100$Driving the transition.

</details>

<details>
<summary>Worked Example 11.2: First-Order Transition in Landau Theory</summary>

When $b < 0$ (which can happen in systems with first-order transitions), we must include the
$\phi^6$ term with $c > 0$:

$$f = \frac{1}{2}a(T)\phi^2 + \frac{1}{4}b\phi^4 + \frac{1}{6}c\phi^6$$

The equilibrium condition $\partial f/\partial \phi = 0$ gives:

$$\phi(a + b\phi^2 + c\phi^4) = 0$$

The quartic factor has solutions when:

$$\phi^2 = \frac{-b \pm \sqrt{b^2 - 4ac}}{2c}$$

This requires $b^2 > 4ac$Which occurs when $T$ is below some temperature $T^* > T_c$. Between $T_c$
and $T^*$The system undergoes a **first-order** transition because the order parameter jumps
discontinuously from zero to a finite value.

</details>

