---
title: "Surface Chemistry"
description: "CBSE Class 12 chemistry: Adsorption, colloids, catalysis, and worked examples."
---

# Surface Chemistry

Surface chemistry studies phenomena occurring at surfaces and interfaces. It covers adsorption, catalysis, colloids, and their applications.

## Key Concepts

- Adsorption: accumulation of species on a surface (physical vs chemical adsorption)
- Physisorption: weak van der Waals forces, low enthalpy ($20-40 \, \text{kJ/mol}$), reversible
- Chemisorption: strong chemical bonds, high enthalpy ($80-240 \, \text{kJ/mol}$), often irreversible
- Freundlich isotherm: $\frac{x}{m} = kP^{1/n}$ (at moderate pressure)
- Langmuir isotherm: $\frac{x}{m} = \frac{aP}{1 + bP}$ (monolayer adsorption)
- Colloids: particles of size $1-1000 \, \text{nm}$ dispersed in a medium
- Tyndall effect: scattering of light by colloidal particles
- Electrophoresis: movement of colloidal particles under electric field
- Catalysis: substances that increase reaction rate without being consumed
- Enzyme catalysis: highly specific biological catalysts

## Worked Example 1 — Freundlich Adsorption

**Problem:** At 298 K, the mass of gas adsorbed per gram of adsorbent is $0.12 \, \text{g}$ at $2 \, \text{atm}$ and $0.36 \, \text{g}$ at $6 \, \text{atm}$. Verify that the data fits the Freundlich isotherm and find $k$ and $n$.

**Solution:**

Freundlich isotherm: $\frac{x}{m} = kP^{1/n}$

Taking logarithms:
$$\log\left(\frac{x}{m}\right) = \log k + \frac{1}{n}\log P$$

From the two data points:
$$\log(0.12) = \log k + \frac{1}{n}\log(2)$$
$$\log(0.36) = \log k + \frac{1}{n}\log(6)$$

Subtracting:
$$\log(0.36) - \log(0.12) = \frac{1}{n}[\log(6) - \log(2)]$$

$$\log(3) = \frac{1}{n}\log(3)$$

Therefore $1/n = 1$, so $n = 1$.

Substituting back:
$$\log(0.12) = \log k + \log(2)$$

$$\log k = \log(0.12) - \log(2) = \log(0.06)$$

$$k = 0.06$$

**Common mistake:** Forgetting to take logarithms. The Freundlich equation is linear in log-log form.

## Worked Example 2 — Colloidal Properties

**Problem:** A colloidal solution of $\text{Fe(OH)}_3$ is prepared by adding $\text{FeCl}_3$ to hot water. Explain why the sol is positively charged and describe how to purify it.

**Solution:**

$\text{FeCl}_3$ hydrolyzes:
$$\text{FeCl}_3 + 3\text{H}_2\text{O} \rightarrow \text{Fe(OH)}_3 + 3\text{HCl}$$

The colloidal particles preferentially adsorb $\text{Fe}^{3+}$ ions (common ion), giving them a positive charge.

Purification by dialysis: The sol is placed in a parchment paper bag immersed in pure water. Crystalloid impurities ($\text{HCl}$, excess $\text{FeCl}_3$) pass through the membrane, while colloidal particles are retained.

**Common mistake:** Confusing the charge on the colloidal particle with the charge on the stabilizing ion. The particle and its adsorbed ion have the same charge.

## Worked Example 3 — Catalysis

**Problem:** The decomposition of $\text{H}_2\text{O}_2$ is catalyzed by $\text{MnO}_2$. The rate constant increases from $1.2 \times 10^{-3} \, \text{s}^{-1}$ to $5.8 \times 10^{-2} \, \text{s}^{-1}$ at the same temperature. By what factor does the catalyst increase the rate?

**Solution:**

The rate increases by a factor of:
$$\frac{k_{\text{catalyzed}}}{k_{\text{uncatalyzed}}} = \frac{5.8 \times 10^{-2}}{1.2 \times 10^{-3}} = \frac{58}{1.2} \approx 48.3$$

The catalyst increases the rate approximately 48-fold. The catalyst provides an alternative pathway with lower activation energy.

**Common mistake:** Thinking a catalyst changes the equilibrium constant. A catalyst increases both forward and reverse rates equally; it does not shift equilibrium.

## Practice Problems

1. At a certain temperature, $x/m = 0.20 \, \text{g/g}$ at $1 \, \text{atm}$ and $0.40 \, \text{g/g}$ at $4 \, \text{atm}$. Find $n$ in the Freundlich isotherm.
2. Explain why $\text{As}_2\text{S}_3$ sol is negatively charged.
3. How does a catalyst affect the activation energy and the equilibrium constant?

## Why This Matters

Surface chemistry is critical in industrial processes (Haber process, catalytic converters), pharmaceutical formulations (colloidal drugs), water treatment (adsorption), and environmental science (air purification).

## Common Exam Patterns

- Distinguish between physisorption and chemisorption (reversibility, enthalpy, specificity)
- Colloid purification methods: dialysis, ultrafiltration
- Electrophoresis demonstrates the charge on colloidal particles
- Catalysts lower activation energy but do not change equilibrium position
- Practice with Freundlich and Langmuir isotherm calculations
