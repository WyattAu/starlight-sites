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

## Key Formulas

- Cell potential: $E^\circ_{\text{cell}} = E^\circ_{\text{cathode}} - E^\circ_{\text{anode}}$
- Nernst equation: $E = E^\circ - \frac{0.0592}{n} \log Q$ (at 298 K)
- Faraday's first law: $m = \frac{MIt}{nF}$
- Molar conductivity: $\Lambda_m = \frac{\kappa}{c}$
- Relation between conductivity and cell constant: $\kappa = \frac{1}{R} \times \frac{l}{A}$

## Worked Example 4 — Electrolysis with Multiple Ions

**Problem:** An aqueous solution of CuSO$_4$ is electrolyzed using inert electrodes. What products are formed at each electrode? If 2.0 A current is passed for 30 minutes, what mass of each product is deposited? (Molar masses: Cu = 63.5 g/mol, O = 16.0 g/mol)

**Solution:**

At the cathode: Cu$^{2+}$ is preferentially reduced over H$^+$ because Cu$^{2+}$ has a higher reduction potential.
$$\text{Cu}^{2+} + 2e^- \rightarrow \text{Cu}$$

At the anode: OH$^-$ from water is oxidized (SO$_4^{2-}$ is not oxidized).
$$2\text{H}_2\text{O} \rightarrow \text{O}_2 + 4\text{H}^+ + 4e^-$$

Charge passed: $Q = It = 2.0 \times 30 \times 60 = 3{,}600$ C

Moles of electrons: $n_{e^-} = \frac{3{,}600}{96{,}485} = 0.0373$ mol

Mass of Cu deposited: $m_{\text{Cu}} = \frac{0.0373}{2} \times 63.5 = 1.18$ g

Mass of O$_2$ produced: $m_{\text{O}_2} = \frac{0.0373}{4} \times 32 = 0.298$ g

**Common mistake:** Forgetting that water is oxidized at the anode, not SO$_4^{2-}$. The sulfate ion is not oxidized under normal conditions.

## Worked Example 5 — Conductivity Calculation

**Problem:** A conductivity cell has electrodes of area 4.0 cm$^2$ and separation 0.80 cm. When filled with 0.01 M KCl solution ($\kappa = 1.41 \times 10^{-3}$ S/cm), the resistance is 141 ohms. Calculate the cell constant and the molar conductivity.

**Solution:**

Cell constant: $\frac{l}{A} = \frac{0.80}{4.0} = 0.20$ cm$^{-1}$

Conductivity from resistance: $\kappa = \frac{1}{R} \times \frac{l}{A} = \frac{0.20}{141} = 1.42 \times 10^{-3}$ S/cm (matches given value)

Molar conductivity: $\Lambda_m = \frac{\kappa}{c} = \frac{1.42 \times 10^{-3}}{0.01} = 0.142$ S cm$^2$ mol$^{-1}$

**Common mistake:** Forgetting to convert units. Molar conductivity is typically expressed in S cm$^2$ mol$^{-1}$, requiring concentration in mol/cm$^3$ or careful unit conversion.

## Worked Example 6 — Gibbs Free Energy and Cell Potential

**Problem:** Calculate the Gibbs free energy change for the reaction Zn + Cu$^{2+}$ $\rightarrow$ Zn$^{2+}$ + Cu at 298 K if $E_{\text{cell}} = 1.10$ V. Is the reaction spontaneous?

**Solution:**

$$\Delta G = -nFE_{\text{cell}}$$

$n = 2$ (2 electrons transferred), $F = 96{,}485$ C/mol

$$\Delta G = -2 \times 96{,}485 \times 1.10 = -212{,}267 \text{ J/mol} \approx -212.3 \text{ kJ/mol}$$

Since $\Delta G < 0$, the reaction is spontaneous.

**Common mistake:** The negative sign in $\Delta G = -nFE$ is essential. A positive $E_{\text{cell}}$ corresponds to a negative $\Delta G$ (spontaneous reaction).

## Exam Tips

1. For Nernst equation problems, always identify $n$ from the balanced half-reaction
2. In electrolysis, determine which ion is preferentially discharged by comparing standard reduction potentials
3. Molar conductivity increases (strong electrolytes) or changes significantly (weak electrolytes) with dilution
4. The relationship $\Delta G = -nFE$ connects electrochemistry to thermodynamics
5. Practice problems involving concentration cells, where $E^\circ_{\text{cell}} = 0$ but $E_{\text{cell}} \neq 0$

## Common Mistakes

**Using the wrong value of n in the Nernst equation.** The variable n represents the number of electrons transferred in the balanced equation, not the charge on the metal ion. For Cu2+ + 2e- -> Cu, n = 2, not 1. Using n = 1 gives a cell potential that is twice the correct value.

**Forgetting to include the negative sign in delta-G = -nFE.** A positive cell potential corresponds to a spontaneous reaction with negative delta-G. Students often omit the negative sign, incorrectly concluding that the reaction is non-spontaneous when the cell potential is positive.

**Assuming sulfate is oxidised at the anode during electrolysis.** In aqueous CuSO4 electrolysis, water is oxidised at the anode (producing O2), not sulfate. SO4^2- is extremely difficult to oxidise because of its very negative standard reduction potential. Always check which species is preferentially discharged.

## Cross-References

- [Chemical Kinetics](/docs/cbse/chemistry/chemical-kinetics) -- reaction rates and activation energy
- [Solutions](/docs/cbse/chemistry/solutions) -- concentration and colligative properties
- [CBSE Physics](/docs/cbse/physics) -- current electricity and circuits

Electrochemistry bridges chemistry and electricity. A galvanic cell is like a electron pump: a spontaneous chemical reaction pushes electrons through an external wire, creating current. The anode is where oxidation happens (electrons leave), and the cathode is where reduction happens (electrons arrive). The Nernst equation tells us that concentration affects voltage -- a battery runs down because its reactants get used up. Electrolysis reverses the process: you force electrons in the opposite direction to drive a non-spontaneous reaction, like splitting water into hydrogen and oxygen using electricity.

## Cross-References

- [Chemical Kinetics](/docs/cbse/chemistry/chemical-kinetics) -- reaction rates and activation energy
- [Solutions](/docs/cbse/chemistry/solutions) -- concentration and colligative properties
- [CBSE Physics](/docs/cbse/physics) -- current electricity and circuits
