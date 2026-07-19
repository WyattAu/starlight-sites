---
title: "Solutions"
description: "CBSE Class 12 chemistry: Solutions with colligative properties, Raoult's law, and worked examples."
---

# Solutions

Solutions are homogeneous mixtures of two or more components. This topic covers concentration units, Raoult's law, colligative properties, and abnormal molar masses.

## Key Concepts

- Molarity $M = \frac{n_{\text{solute}}}{V_{\text{solution (L)}}}$, molality $m = \frac{n_{\text{solute}}}{\text{mass of solvent (kg)}}$
- Mass percent: $\text{mass \%} = \frac{\text{mass of solute}}{\text{mass of solution}} \times 100$
- Mole fraction: $x_A = \frac{n_A}{n_A + n_B}$
- Raoult's law: $p_A = x_A p_A^\circ$ for volatile solutes
- Colligative properties depend on number of solute particles, not identity
- Boiling point elevation: $\Delta T_b = K_b \cdot m$
- Freezing point depression: $\Delta T_f = K_f \cdot m$
- Osmotic pressure: $\pi = CRT$
- van't Hoff factor $i$ accounts for dissociation or association

## Worked Example 1 — Molality from Molarity

**Problem:** A sulfuric acid solution has molarity 18 M and density 1.8 g/mL. Calculate its molality. (Molar mass of H$_2$SO$_4$ = 98 g/mol)

**Solution:**

Assume 1 L of solution:
- Mass of solution = $1000 \text{ mL} \times 1.8 \text{ g/mL} = 1800 \text{ g}$
- Moles of H$_2$SO$_4$ = 18 mol
- Mass of H$_2$SO$_4$ = $18 \times 98 = 1764 \text{ g}$
- Mass of solvent = $1800 - 1764 = 36 \text{ g} = 0.036 \text{ kg}$

$$\text{Molality} = \frac{18}{0.036} = 500 \text{ m}$$

**Common mistake:** Confusing mass of solution with mass of solvent. The denominator in molality is mass of solvent only.

## Worked Example 2 — Boiling Point Elevation

**Problem:** Calculate the boiling point of a 0.5 m aqueous solution of NaCl. ($K_b$ for water = 0.52 K kg/mol)

**Solution:**

NaCl dissociates into Na$^+$ and Cl$^-$, so $i = 2$.

$$\Delta T_b = i \cdot K_b \cdot m = 2 \times 0.52 \times 0.5 = 0.52 \text{ K}$$

Boiling point = $100 + 0.52 = 100.52^\circ$C

**Common mistake:** Forgetting the van't Hoff factor for electrolytes. Using $i = 1$ gives $\Delta T_b = 0.26$ K, which is wrong.

## Worked Example 3 — Osmotic Pressure

**Problem:** A protein solution has osmotic pressure 2.5 kPa at 27$^\circ$C. If the protein has molar mass 50,000 g/mol, find its concentration in g/L.

**Solution:**

$$\pi = CRT \implies C = \frac{\pi}{RT}$$

$$C = \frac{2500}{8.314 \times 300} = 1.002 \text{ mol/m}^3 = 1.002 \times 10^{-3} \text{ mol/L}$$

Concentration in g/L:
$$1.002 \times 10^{-3} \times 50{,}000 = 50.1 \text{ g/L}$$

**Common mistake:** Using $R = 0.0821$ L atm/(mol K) when pressure is in kPa. Either convert pressure to atm or use $R = 8.314$ J/(mol K) with SI units.

## Worked Example 4 — Freezing Point Depression

**Problem:** Calculate the freezing point of a 1.0 m CaCl$_2$ solution. ($K_f$ for water = 1.86 K kg/mol)

**Solution:**

CaCl$_2$ dissociates into Ca$^{2+}$ and 2Cl$^-$, so $i = 3$.

$$\Delta T_f = i \cdot K_f \cdot m = 3 \times 1.86 \times 1.0 = 5.58 \text{ K}$$

Freezing point = $0 - 5.58 = -5.58^\circ$C

**Common mistake:** Using $i = 2$ instead of $i = 3$ for CaCl$_2$. The van't Hoff factor equals the number of ions produced per formula unit.

## Practice Problems

1. A solution of glucose (M = 180 g/mol) has molarity 0.1 M and density 1.02 g/mL. Calculate its molality.
2. Calculate the freezing point of a 1.0 m CaCl$_2$ solution. ($K_f$ for water = 1.86 K kg/mol)
3. A 5% glucose solution (w/v) has osmotic pressure 4.0 atm at 300 K. Estimate the molar mass of glucose.
4. A 0.2 m urea solution has $\Delta T_f = 0.372$ K. Calculate the experimental van't Hoff factor and explain any deviation from the expected value.
5. Two solutions of glucose and NaCl have the same boiling point elevation. If the glucose solution has molality 0.8 m, find the molality of the NaCl solution.

## Common Exam Patterns

- Convert between molarity and molality using density
- For electrolytes, multiply by van't Hoff factor $i$
- Osmotic pressure is useful for large molecules (proteins, polymers)
- Practice with all four colligative properties using the same solution
- The van't Hoff factor for strong electrolytes equals the number of ions; for weak electrolytes it is between 1 and the expected value

## Exam Tips

1. Always check whether the solute is an electrolyte or non-electrolyte before applying colligative property formulas.
2. For molarity-to-molality conversion, assume 1 L of solution and work with masses.
3. Osmotic pressure is measured in SI units: use $R = 8.314$ J/(mol K) with Pa, or convert to atm and use $R = 0.0821$ L atm/(mol K).
4. When comparing solutions, the one with higher effective particle concentration has larger colligative effects.
5. Abnormal molar masses from colligative properties indicate dissociation (lower molar mass) or association (higher molar mass).

## Intuition

Solutions are mixtures where solute particles disperse evenly through a solvent. Concentration units are just different ways of expressing the same ratio -- molarity counts moles per liter of solution, molality counts moles per kilogram of solvent. Raoult's law says that a solvent's vapor pressure drops when you add solute because solute particles occupy surface sites, reducing the solvent's ability to evaporate. Colligative properties are the macroscopic consequences of this microscopic crowding: more particles mean more interference with boiling, freezing, and osmosis. Strong electrolytes like NaCl produce more particles than weak ones, amplifying these effects.

## Cross-References

- [Colligative Properties](/docs/cbse/chemistry/solutions/01-colligative-properties) -- detailed colligative property calculations
- [Chemical Kinetics](/docs/cbse/chemistry/chemical-kinetics) -- concentration effects on reaction rates
- [CBSE Physics](/docs/cbse/physics) -- kinetic theory of gases
