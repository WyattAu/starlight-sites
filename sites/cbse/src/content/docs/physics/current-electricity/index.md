---
title: "Current Electricity"
description: "CBSE Class 12 physics: Current electricity with Ohm's law, circuits, and worked examples."
---

# Current Electricity

Current electricity deals with the flow of electric charge through conductors. It covers Ohm's law, Kirchhoff's laws, series and parallel circuits, and electrical measurements.

## Key Concepts

- Ohm's law: $V = IR$ (for ohmic conductors at constant temperature)
- Resistance: $R = \rho\frac{L}{A}$ where $\rho$ is resistivity, $L$ is length, $A$ is cross-sectional area
- Series circuits: $R_{total} = R_1 + R_2 + ...$, current is same through all components
- Parallel circuits: $\frac{1}{R_{total}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$, voltage is same across all components
- Kirchhoff's junction rule: $\sum I_{in} = \sum I_{out}$ (conservation of charge)
- Kirchhoff's loop rule: $\sum V = 0$ around any closed loop (conservation of energy)
- Power: $P = IV = I^2R = \frac{V^2}{R}$

## Worked Example 1 — Series Circuit Analysis

**Problem:** Three resistors of 2 $\Omega$, 3 $\Omega$, and 5 $\Omega$ are connected in series to a 10 V battery. Find the current through each resistor and the voltage across each.

**Solution:**

Total resistance:
$$R_{total} = 2 + 3 + 5 = 10 \, \Omega$$

Current (same through all):
$$I = \frac{V}{R_{total}} = \frac{10}{10} = 1 \, \text{A}$$

Voltages:
$$V_1 = IR_1 = 1 \times 2 = 2 \, \text{V}$$
$$V_2 = IR_2 = 1 \times 3 = 3 \, \text{V}$$
$$V_3 = IR_3 = 1 \times 5 = 5 \, \text{V}$$

Check: $V_1 + V_2 + V_3 = 2 + 3 + 5 = 10 \, \text{V}$ (matches the battery voltage).

**Common mistake:** Assuming the voltage is the same across all resistors in series. In series, current is constant, not voltage.

## Worked Example 2 — Parallel Circuit Analysis

**Problem:** Two resistors of 6 $\Omega$ and 3 $\Omega$ are connected in parallel to a 12 V battery. Find the current through each resistor and the total current.

**Solution:**

Voltage across each resistor is 12 V (parallel circuit).

Current through 6 $\Omega$:
$$I_1 = \frac{V}{R_1} = \frac{12}{6} = 2 \, \text{A}$$

Current through 3 $\Omega$:
$$I_2 = \frac{V}{R_2} = \frac{12}{3} = 4 \, \text{A}$$

Total current:
$$I_{total} = I_1 + I_2 = 2 + 4 = 6 \, \text{A}$$

Equivalent resistance:
$$R_{eq} = \frac{V}{I_{total}} = \frac{12}{6} = 2 \, \Omega$$

**Common mistake:** Forgetting that current splits in parallel circuits. The total current is the sum of branch currents.

## Worked Example 3 — Wheatstone Bridge

**Problem:** A Wheatstone bridge has resistors $R_1 = 100 \, \Omega$, $R_2 = 200 \, \Omega$, $R_3 = 150 \, \Omega$ in three arms. Find the value of $R_4$ for the bridge to be balanced.

**Solution:**

For a balanced Wheatstone bridge:
$$\frac{R_1}{R_2} = \frac{R_3}{R_4}$$

$$R_4 = \frac{R_2 \times R_3}{R_1} = \frac{200 \times 150}{100} = 300 \, \Omega$$

**Common mistake:** Getting the ratio order wrong. The resistors must be in opposite arms of the bridge.

## Practice Problems

1. A 12 V battery is connected to two resistors (4 $\Omega$ and 6 $\Omega$) in parallel. Find the total current and power dissipated in each resistor.
2. Find the equivalent resistance of three resistors (2 $\Omega$, 3 $\Omega$, 6 $\Omega$) connected in parallel.
3. A potentiometer wire of length 1 m has resistance 10 $\Omega$. Find the balancing length when a cell of EMF 1.5 V is balanced against a standard cell of 2 V.

## Common Exam Patterns

- Draw the circuit diagram before solving
- Identify series and parallel combinations first
- Use Kirchhoff's laws for complex circuits
- Always check units (ohms, volts, amperes)
- Power calculations often appear in multi-step problems

## Key Formulas

- Ohm's law: $V = IR$
- Resistance: $R = \rho\frac{L}{A}$
- Series: $R_{eq} = R_1 + R_2 + ...$, $V_{total} = V_1 + V_2 + ...$, $I$ is constant
- Parallel: $\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + ...$, $V$ is constant, $I_{total} = I_1 + I_2 + ...$
- Power: $P = IV = I^2R = \frac{V^2}{R}$
- Internal resistance: $V_{terminal} = E - Ir$
- Temperature dependence: $R = R_0[1 + \alpha(T - T_0)]$

## Worked Example 4 — Mixed Series-Parallel Circuit

**Problem:** Find the equivalent resistance of the circuit shown below: $R_1 = 6\,\Omega$ and $R_2 = 3\,\Omega$ are in parallel, and this combination is in series with $R_3 = 4\,\Omega$.

**Solution:**

Step 1: Parallel combination of $R_1$ and $R_2$:
$$R_{12} = \frac{R_1 \times R_2}{R_1 + R_2} = \frac{6 \times 3}{6 + 3} = \frac{18}{9} = 2\,\Omega$$

Step 2: Series combination with $R_3$:
$$R_{eq} = R_{12} + R_3 = 2 + 4 = 6\,\Omega$$

**Common mistake:** Adding the parallel resistors directly without using the parallel formula. Parallel resistors always give a smaller equivalent resistance.

## Worked Example 5 — Kirchhoff's Loop Rule

**Problem:** In the circuit below, find the current through each resistor. Battery EMF = 12 V, $R_1 = 4\,\Omega$, $R_2 = 6\,\Omega$, $R_3 = 3\,\Omega$. $R_1$ and $R_2$ are in parallel, connected to the battery through $R_3$.

**Solution:**

Let $I$ be the total current through $R_3$, and $I_1$, $I_2$ be currents through $R_1$ and $R_2$ respectively.

By junction rule: $I = I_1 + I_2$

Voltage across parallel combination: $V_{12} = I_1 R_1 = I_2 R_2$
$$4I_1 = 6I_2 \implies I_1 = 1.5 I_2$$

Loop rule for outer loop:
$$E - IR_3 - I_1 R_1 = 0$$
$$12 - (I_1 + I_2) \times 3 - 4I_1 = 0$$

Substitute $I_1 = 1.5I_2$:
$$12 - (1.5I_2 + I_2) \times 3 - 4(1.5I_2) = 0$$
$$12 - 7.5I_2 - 6I_2 = 0$$
$$12 = 13.5I_2$$
$$I_2 = \frac{12}{13.5} = \frac{8}{9} \approx 0.889\,\text{A}$$

$$I_1 = 1.5 \times \frac{8}{9} = \frac{4}{3} \approx 1.333\,\text{A}$$

$$I = I_1 + I_2 = \frac{4}{3} + \frac{8}{9} = \frac{12 + 8}{9} = \frac{20}{9} \approx 2.222\,\text{A}$$

**Common mistake:** Forgetting to include the internal resistance of the battery or the series resistor when applying Kirchhoff's loop rule.

## Worked Example 6 — Temperature Dependence of Resistance

**Problem:** A copper wire has resistance $10\,\Omega$ at $20°\text{C}$. What is its resistance at $80°\text{C}$? (Temperature coefficient of copper: $\alpha = 0.00404\,°\text{C}^{-1}$)

**Solution:**

Using the temperature dependence formula:
$$R = R_0[1 + \alpha(T - T_0)]$$

$$R = 10[1 + 0.00404 \times (80 - 20)]$$

$$R = 10[1 + 0.00404 \times 60]$$

$$R = 10[1 + 0.2424] = 10 \times 1.2424 = 12.424\,\Omega$$

**Common mistake:** Using the wrong temperature difference. Always use $\Delta T = T_{final} - T_{initial}$, not just $T_{final}$.

## Exam Tips

1. For complex circuits, simplify step by step: identify parallel combinations first, then add series components
2. When using Kirchhoff's rules, assign current directions consistently; a negative result means the actual direction is opposite
3. The terminal voltage of a battery is less than its EMF when current flows: $V = E - Ir$
4. Power dissipated in a resistor is always positive: $P = I^2R > 0$
5. For maximum power transfer, the load resistance should equal the internal resistance of the source

## Common Mistakes

### Mistake 1: Assuming voltage is constant in series circuits

In a series circuit, the current through each component is the same, but the voltage divides across components proportionally to their resistance ($V = IR$). Students often assume the battery voltage appears across every resistor, which is only true in parallel circuits. Always apply $V_{total} = V_1 + V_2 + \ldots$ for series circuits and use Ohm's law to find the voltage across each resistor.

### Mistake 2: Forgetting that parallel resistors always produce a smaller equivalent resistance

When combining resistors in parallel, the equivalent resistance is always less than the smallest individual resistance. Students sometimes add parallel resistors directly ($R_1 + R_2$) instead of using $1/R_{eq} = 1/R_1 + 1/R_2$. A quick sanity check: if two equal resistors $R$ are in parallel, the equivalent is $R/2$, not $2R$.

### Mistake 3: Confusing the Wheatstone bridge ratio arrangement

In a balanced Wheatstone bridge, the ratio is $\frac{R_1}{R_2} = \frac{R_3}{R_4}$ where $R_1$ and $R_2$ are in one branch and $R_3$ and $R_4$ are in the other. Students frequently write the ratio as $\frac{R_1}{R_3} = \frac{R_2}{R_4}$ or mix up which resistors are paired. The correct pairing is determined by the bridge geometry: opposite arms form the ratio.

## Cross-References

- [Electrostatics](../electrostatics/index) -- Current electricity involves the flow of charge, building on the electrostatic concepts of charge and electric fields.
- [Magnetic Effects of Current](../magnetic-effects/index) -- Electric currents produce magnetic fields, connecting current electricity to electromagnetism.
- [Electromagnetic Induction](../magnetic-effects/index) -- Changing magnetic fields induce currents, linking magnetism back to current electricity through Faraday's law.
