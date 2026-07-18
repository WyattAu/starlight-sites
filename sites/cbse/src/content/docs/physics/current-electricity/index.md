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
