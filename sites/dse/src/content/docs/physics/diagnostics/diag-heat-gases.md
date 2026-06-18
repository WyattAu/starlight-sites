---
title: "Heat and Gases -- Diagnostic Tests"
description: "" as a refrigerator would be:

$$\text{COP} = \frac{Q_{\text{absorbed}}}{|W_{\text{net}}|} = \frac{6812}{1498} = 4.55$$

**Key insight:** Not every thermodynamic cycle is a heat engine. The sign of the net work determines
whether it operates as an engine (net work out) or a refrigerator (net work in). Students must check
the signs carefully.

---

### IT-2: Adiabatic Process and Work Calculation (with Mechanics)

**Question:**

A monatomic ideal gas ($\gamma = 5/3$) is compressed adiabatically from $V_1 = 10$ L at
$P_1 = 1 \times 10^5$ Pa to $V_2 = 4$ L. Find (a) the final pressure, (b) the final temperature
(initial temperature $= 300$ K), (c) the work done on the gas, and (d) the change in internal
energy.

**Solution:**

**(a) Final pressure (adiabatic):**

$$P_1 V_1^\gamma = P_2 V_2^\gamma$$

$$P_2 = P_1 \left(\frac{V_1}{V_2}\right)^\gamma = 1 \times 10^5 \times \left(\frac{10}{4}\right)^{5/3} = 1 \times 10^5 \times 2.5^{1.667}$$

$$2.5^{1.667} = e^{1.667 \ln 2.5} = e^{1.667 \times 0.9163} = e^{1.5272} = 4.605$$

$$P_2 = 4.605 \times 10^5 \text{ Pa}$$

**(b) Final temperature:**

$$T_1 V_1^{\gamma - 1} = T_2 V_2^{\gamma - 1}$$

$$T_2 = T_1 \left(\frac{V_1}{V_2}\right)^{\gamma - 1} = 300 \times 2.5^{2/3} = 300 \times e^{0.6667 \times 0.9163} = 300 \times e^{0.6109} = 300 \times 1.842 = 552.6 \text{ K}$$

**(c) Work done on the gas:**

For an adiabatic process, $Q = 0$So $W = -\Delta U$.

$$W = \frac{P_1 V_1 - P_2 V_2}{\gamma - 1} = \frac{1 \times 10^5 \times 10 \times 10^{-3} - 4.605 \times 10^5 \times 4 \times 10^{-3}}{5/3 - 1}$$

$$W = \frac{1000 - 1842}{2/3} = \frac{-842}{0.6667} = -1263 \text{ J}$$

Negative work means work is done ON the gas (compression). So work done on gas $= 1263$ J.

**(d) Change in internal energy:**

$$\Delta U = nC_V(T_2 - T_1)$$

For monatomic gas: $C_V = \frac{3}{2}R$

$$n = \frac{P_1 V_1}{RT_1} = \frac{1 \times 10^5 \times 10 \times 10^{-3}}{8.31 \times 300} = \frac{1000}{2493} = 0.4011 \text{ mol}$$

$$\Delta U = 0.4011 \times \frac{3}{2} \times 8.31 \times (552.6 - 300) = 0.4011 \times 12.465 \times 252.6 = 1263 \text{ J}$$

Check: $\Delta U = -W = 1263$ J (consistent, since $Q = 0$).

**Key insight:** In an adiabatic compression, ALL the work done on the gas increases its internal
energy (and thus its temperature). This is why pumping air into a bicycle tyre makes the pump warm.

---

### IT-3: Mixing Liquids at Different Temperatures (with Nuclear Physics cross-topic)

**Question:**

$300$ g of water at $80°$C is mixed with $200$ g of water at $20°$C in an insulated calorimeter of
heat capacity $50 \text{ J K}^{-1}$. Find the final equilibrium temperature. Then, a $100$ g
aluminium block ($c_{\text{Al}} = 900 \text{ J kg}^{-1}\text{K}^{-1}$) at $150°$C is added to the
mixture. Find the new equilibrium temperature.

**Solution:**

**Stage 1: Mixing two water samples:**

Let $T_f$ be the final temperature.

$$m_1 c_w (T_1 - T_f) = m_2 c_w (T_f - T_2) + C_{\text{cal}}(T_f - T_2)$$

$$0.3 \times 4200 \times (80 - T_f) = 0.2 \times 4200 \times (T_f - 20) + 50(T_f - 20)$$

$$1260(80 - T_f) = 840(T_f - 20) + 50(T_f - 20)$$

$$100800 - 1260T_f = 890T_f - 17800$$

$$100800 + 17800 = 890T_f + 1260T_f$$

$$118600 = 2150T_f$$

$$T_f = 55.16°\text{C}$$

**Stage 2: Adding aluminium block:**

Let $T_{f2}$ be the new equilibrium temperature.

$$m_{\text{Al}} c_{\text{Al}} (150 - T_{f2}) = (m_1 + m_2) c_w (T_{f2} - 55.16) + C_{\text{cal}}(T_{f2} - 55.16)$$

$$0.1 \times 900 \times (150 - T_{f2}) = 0.5 \times 4200 \times (T_{f2} - 55.16) + 50(T_{f2} - 55.16)$$

$$90(150 - T_{f2}) = 2100(T_{f2} - 55.16) + 50(T_{f2} - 55.16)$$

$$13500 - 90T_{f2} = 2150T_{f2} - 118594$$

$$13500 + 118594 = 2150T_{f2} + 90T_{f2}$$

$$132094 = 2240T_{f2}$$

$$T_{f2} = 58.97°\text{C}$$

**Key insight:** The calorimeter absorbs some heat, which is often forgotten. Also, when mixing
substances, the final temperature must be between the initial temperatures of all components. If the
calculation gives a temperature outside this range, there is an error.
