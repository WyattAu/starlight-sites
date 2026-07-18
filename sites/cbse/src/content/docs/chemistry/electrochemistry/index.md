---
title: "Electrochemistry"
description: "CBSE Class 12 chemistry: Electrochemistry with worked examples, practice problems, and common exam patterns."
---

# Electrochemistry

Electrochemistry deals with the relationship between electrical energy and chemical reactions. It covers galvanic cells, electrolysis, conductance, and electrode potentials.

## Key Concepts

- Galvanic (voltaic) cells convert chemical energy to electrical energy
- Electrolytic cells use electrical energy to drive non-spontaneous reactions
- Standard electrode potential $E^\circ$ measures the tendency of a species to be reduced
- Nernst equation relates cell potential to concentration: $E = E^\circ - \frac{RT}{nF} \ln Q$
- Faraday's laws of electrolysis relate mass deposited to charge passed
- Molar conductivity $\Lambda_m$ varies with concentration for weak electrolytes

## Worked Example 1 — Galvanic Cell Potential

**Problem:** A galvanic cell is constructed with a Zn/Zn$^{2+}$ half-cell ($E^\circ = -0.76$ V) and a Cu/Cu$^{2+}$ half-cell ($E^\circ = +0.34$ V). Calculate the standard cell potential and write the cell reaction.

**Solution:**

The cell notation is Zn | Zn$^{2+}$ || Cu$^{2+}$ | Cu.

Anode (oxidation): $\text{Zn} \rightarrow \text{Zn}^{2+} + 2e^-$

Cathode (reduction): $\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$

Overall: $\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$

$$E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}} = 0.34 - (-0.76) = 1.10 \text{ V}$$

**Common mistake:** Forgetting to subtract the anode potential. The formula is $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$, not simply the sum of the two potentials.

## Worked Example 2 — Nernst Equation Application

**Problem:** For the cell Zn | Zn$^{2+}$ (0.01 M) || Cu$^{2+}$ (1.0 M) | Cu at 298 K, calculate the cell potential. ($E^\circ_{\text{cell}} = 1.10$ V)

**Solution:**

The Nernst equation at 298 K:
$$E = E^\circ - \frac{0.0592}{n} \log Q$$

For the reaction: $\text{Zn} + \text{Cu}^{2+} \rightarrow \text{Zn}^{2+} + \text{Cu}$

$$Q = \frac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} = \frac{0.01}{1.0} = 0.01$$

$$E = 1.10 - \frac{0.0592}{2} \log(0.01) = 1.10 - 0.0296 \times (-2) = 1.10 + 0.0592 = 1.159 \text{ V}$$

**Common mistake:** Using $n = 1$ instead of $n = 2$. The number of electrons transferred in the balanced equation is 2, so $n = 2$.

## Worked Example 3 — Faraday's Law of Electrolysis

**Problem:** How long does it take to deposit 2.0 g of copper from a CuSO$_4$ solution using a current of 2.0 A? (Molar mass of Cu = 63.5 g/mol, $F = 96{,}485$ C/mol)

**Solution:**

Moles of Cu deposited:
$$n = \frac{2.0}{63.5} = 0.0315 \text{ mol}$$

Charge required (Cu$^{2+}$ + 2e$^-$ → Cu, so 2 mol e$^-$ per mol Cu):
$$Q = n \times 2 \times F = 0.0315 \times 2 \times 96{,}485 = 6{,}078 \text{ C}$$

Time:
$$t = \frac{Q}{I} = \frac{6{,}078}{2.0} = 3{,}039 \text{ s} \approx 50.6 \text{ min}$$

**Common mistake:** Forgetting that copper is deposited as Cu$^{2+}$, requiring 2 electrons per atom. Using $n = 1$ gives double the correct answer.

## Practice Problems

1. Calculate the standard cell potential for a cell made from Mg/Mg$^{2+}$ ($E^\circ = -2.37$ V) and Ag/Ag$^{+}$ ($E^\circ = +0.80$ V).
2. A concentration cell has [Cu$^{2+}$]$_{\text{anode}} = 0.001$ M and [Cu$^{2+}$]$_{\text{cathode}} = 1.0$ M. Calculate the cell potential at 298 K.
3. How many grams of aluminium are deposited when 10.0 A is passed through an Al$_2$O$_3$ melt for 2.0 hours? (Molar mass of Al = 27.0 g/mol)

## Common Exam Patterns

- Always identify anode and cathode before calculating cell potential
- In the Nernst equation, $Q$ is products over reactants (excluding solids)
- For electrolysis problems, first write the half-reaction to determine electrons transferred
- Practice converting between mass, moles, and charge using Faraday's constant
