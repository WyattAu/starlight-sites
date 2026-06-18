---
title: Irreversible Thermodynamics and Fluctuations
tags:
  - Physics
  - University
description: ""s inequality: $\langle W \rangle \geq \Delta F$ (the average work is never less than the
  free energy change).
- For quasi-static processes: $\langle W \rangle = \Delta F$ and the distribution of $W$ is a delta
  function.
- For fast (far-from-equilibrium) processes: $\langle W \rangle > \Delta F$But the exponential
  average still equals $e^{-\beta\Delta F}$.

This remarkable result has been verified experimentally in single-molecule pulling experiments (RNA,
DNA hairpins) using optical tweezers.

### 19.4 Crooks Fluctuation Theorem

The **Crooks theorem** (1999) relates the work distributions for forward and reverse processes:

$$\frac{P_F(W)}{P_R(-W)} = e^{\beta(W - \Delta F)}$$

Where $P_F(W)$ is the probability distribution of work for the forward process and $P_R(W)$ for the
reverse process.

This implies the Jarzynski equality as a special case:

$$\int P_F(W)\,e^{-\beta W}\,dW = \int P_R(-W)\,e^{-\beta\Delta F}\,dW = e^{-\beta\Delta F}$$

<details>
<summary>Worked Example 19.1: Jarzynski Equality for a Two-Level System</summary>

Consider a two-level system with $\epsilon_1 = 0$ and $\epsilon_2 = \epsilon$Initially in
equilibrium at inverse temperature $\beta$.

The free energy: $F = -k_BT\ln Z = -k_BT\ln(1 + e^{-\beta\epsilon})$.

Now the energy gap is suddenly changed from $\epsilon$ to $\epsilon"$. The work done is:

$$W = \begin{cases} 0 & \text{with} prob.  p_1 = 1/Z \\ \epsilon' - \epsilon & \text{with} prob.  p_2 = e^{-\beta\epsilon}/Z \end{cases}$$

The Jarzynski average:

$$\langle e^{-\beta W}\rangle = p_1 \cdot e^0 + p_2 \cdot e^{-\beta(\epsilon' - \epsilon)} = \frac{1}{Z} + \frac{e^{-\beta\epsilon'}}{Z} = \frac{1 + e^{-\beta\epsilon'}}{Z}$$

The new free energy: $F' = -k_BT\ln(1 + e^{-\beta\epsilon'})$.

$$e^{-\beta\Delta F} = e^{-\beta(F' - F)} = e^{-\beta F'}e^{\beta F} = (1 + e^{-\beta\epsilon'})\frac{1}{Z} = \langle e^{-\beta W}\rangle \quad \checkmark$$

The Jarzynski equality is verified exactly for this two-level system, even though the process is far
from equilibrium (sudden quench).

</details>

