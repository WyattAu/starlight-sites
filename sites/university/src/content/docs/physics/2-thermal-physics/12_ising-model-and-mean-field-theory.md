---
title: Ising Model and Mean-Field Theory
tags:
  - Physics
  - University
description: ""s exact solution for the square lattice gives:

$$T_c = \frac{2J}{k_B \ln(1 + \sqrt{2})} \approx \frac{2.269J}{k_B}$$

The spontaneous magnetization below $T_c$:

$$m = \left[1 - \sinh^{-4}(2\beta_c J)\right]^{1/8}, \quad T < T_c$$

The specific heat diverges logarithmically at $T_c$:

$$C \sim -A\ln|T - T_c|$$

<details>
<summary>Worked Example 12.1: Mean-Field $T_c$ for Different Lattices</summary>

For $J = 1$ (in units of $k_B$):

| Lattice      | $z$ | $T_c^{\text{MF}}$ |
| ------------ | --- | ----------------- |
| Linear chain | 2   | 2                 |
| Square       | 4   | 4                 |
| Simple cubic | 6   | 6                 |
| BCC          | 8   | 8                 |
| FCC          | 12  | 12                |

Compare with the exact $T_c$: 1D has no transition, 2D square has
$T_c \approx 2.269$3D (numerical) $T_c \approx 4.51$. Mean-field overestimates $T_c$ in all cases,
with the error decreasing as $z$ (dimensionality) increases.

</details>

<details>
<summary>Worked Example 12.2: 1D Ising Free Energy</summary>

For the 1D Ising model with $h = 0$The transfer matrix eigenvalues are:

$$\lambda_\pm = e^{\beta J} \pm e^{-\beta J}$$

The free energy per spin in the thermodynamic limit:

$$f = -k_B T \ln\lambda_+ = -k_B T \ln\!\left(2\cosh\frac{J}{k_B T}\right)$$

The internal energy per spin:

$$u = -\frac{\partial \ln\lambda_+}{\partial \beta} = -J\tanh\frac{J}{k_B T}$$

The specific heat:

$$c = \frac{\partial u}{\partial T} = \frac{J^2}{k_B T^2}\text{sech}^2\!\left(\frac{J}{k_B T}\right)$$

This is a smooth function with no singularity — confirming no phase transition in 1D.

</details>

