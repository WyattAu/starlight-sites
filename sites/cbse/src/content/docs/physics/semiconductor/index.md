---
title: "Semiconductor Electronics"
description: "CBSE Class 12 physics: Semiconductor devices, diodes, transistors, and logic gates with worked examples."
---

# Semiconductor Electronics

Semiconductor electronics covers the physics of semiconductor materials, p-n junction diodes, transistors, and digital logic circuits.

## Key Concepts

- Intrinsic semiconductor: pure Si or Ge with equal number of electrons and holes
- Extrinsic semiconductor: doped with impurities (n-type: excess electrons, p-type: excess holes)
- p-n junction: forms a depletion region and built-in potential
- Forward bias: reduces barrier, allows current flow
- Reverse bias: increases barrier, very small leakage current
- Zener diode: operates in reverse breakdown for voltage regulation
- Transistor (BJT): current amplifier with emitter, base, collector
- Transistor as switch: operates in cutoff and saturation regions
- Logic gates: AND, OR, NOT, NAND, NOR, XOR

## Worked Example 1 — Diode Current Calculation

**Problem:** A silicon diode has a reverse saturation current of $10 \, \mu\text{A}$ at 25°C. Find the forward current when the applied voltage is 0.5 V. (Use $kT/e \approx 0.026 \, \text{V}$ at 25°C)

**Solution:**

Using the diode equation:
$$I = I_s\left(e^{V/V_T} - 1\right)$$

where $V_T = kT/e \approx 0.026 \, \text{V}$:

$$I = 10 \times 10^{-6} \left(e^{0.5/0.026} - 1\right)$$

$$= 10 \times 10^{-6} \left(e^{19.23} - 1\right)$$

$$\approx 10 \times 10^{-6} \times 2.24 \times 10^8 = 2.24 \, \text{A}$$

**Common mistake:** Forgetting that the exponential dominates and the $-1$ term becomes negligible for forward bias.

## Worked Example 2 — Zener Voltage Regulator

**Problem:** A Zener diode with $V_Z = 6 \, \text{V}$ is used to regulate the output of a 10 V source through a series resistor $R = 200 \, \Omega$. If the load resistance is $R_L = 1 \, \text{k}\Omega$, find the load voltage and current.

**Solution:**

Voltage across series resistor:
$$V_R = V_{in} - V_Z = 10 - 6 = 4 \, \text{V}$$

Current through series resistor:
$$I_R = \frac{V_R}{R} = \frac{4}{200} = 0.02 \, \text{A} = 20 \, \text{mA}$$

Load voltage (equal to Zener voltage):
$$V_L = V_Z = 6 \, \text{V}$$

Load current:
$$I_L = \frac{V_L}{R_L} = \frac{6}{1000} = 6 \, \text{mA}$$

Zener current:
$$I_Z = I_R - I_L = 20 - 6 = 14 \, \text{mA}$$

**Common mistake:** Assuming all current flows through the Zener diode. The Zener current is the difference between the total current and the load current.

## Worked Example 3 — Transistor as an Amplifier

**Problem:** A common-emitter transistor amplifier has $\beta = 100$, $R_C = 2 \, \text{k}\Omega$, and $V_{CC} = 12 \, \text{V}$. If the base current is $20 \, \mu\text{A}$, find the collector current, collector-emitter voltage, and voltage gain.

**Solution:**

Collector current:
$$I_C = \beta I_B = 100 \times 20 \times 10^{-6} = 2 \, \text{mA}$$

Collector-emitter voltage:
$$V_{CE} = V_{CC} - I_C R_C = 12 - 2 \times 10^{-3} \times 2 \times 10^3 = 12 - 4 = 8 \, \text{V}$$

For the voltage gain (assuming $r_e \approx 25 \, \text{mV} / I_E \approx 25 \, \text{mV} / 2 \, \text{mA} = 12.5 \, \Omega$):

$$A_v = -\frac{R_C}{r_e} = -\frac{2000}{12.5} = -160$$

The negative sign indicates a $180^\circ$ phase shift.

**Common mistake:** Forgetting that the transistor must be in the active region ($V_{CE} > 0.2 \, \text{V}$ approximately) for amplification.

## Worked Example 4 — Logic Gate Output

**Problem:** For a 2-input NAND gate, write the truth table and identify when the output is LOW.

**Solution:**

| A | B | Output |
|---|---|--------|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

The output is LOW (0) only when both inputs are HIGH (1).

$$Y = \overline{A \cdot B}$$

**Common mistake:** Confusing NAND with AND. NAND is the inverse of AND: it gives 0 only when all inputs are 1.

## Practice Problems

1. A Zener diode with $V_Z = 4.7 \, \text{V}$ is connected to a 9 V source through a $500 \, \Omega$ resistor. Find the Zener current when no load is connected.
2. A transistor has $I_B = 50 \, \mu\text{A}$ and $\beta = 80$. Find $I_C$ and $I_E$.
3. Write the truth table for a 3-input NOR gate.

## Common Exam Patterns

- Diode problems use the diode equation or the ideal diode approximation
- Zener regulator problems involve KVL around the circuit
- Transistor biasing problems require ensuring the transistor is in the correct region
- Logic gate problems often combine multiple gates to form circuits
- Remember: AND = multiplication, OR = addition, NOT = inversion
