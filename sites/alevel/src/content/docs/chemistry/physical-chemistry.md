---
title: Physical Chemistry
description: ""s Law

The enthalpy change for a reaction is independent of the route taken — the answer varies by context
only on initial and final states.

$$\Delta H_{\text{reaction}} = \sum \Delta H_f^\ominus(\text{products}) - \sum \Delta H_f^\ominus(\text{reactants})$$

### Bond Enthalpies

Mean bond enthalpy is the average energy required to break one mole of a particular bond in the
gaseous state.

$$\Delta H \approx \sum(\text{bonds broken}) - \sum(\text{bonds formed})$$

> **Limitation:** Bond enthalpies are averaged values from many different compounds, so they are
> less accurate than calorimetry-based $\Delta H$ values.

### Calorimetry

$$q = mc\Delta T$$

- $q$ = heat energy (J)
- $m$ = mass of solution (g)
- $c$ = specific heat capacity ($\mathrm{J\,g^{-1}\,K^{-1}}$; water = 4.18)
- $\Delta T$ = temperature change (K)

### Born-Haber Cycles

Used to calculate lattice enthalpies for ionic compounds. The cycle links:

$$\Delta_f H^\ominus = \text{atomisation} + \text{ionisation} + \text{electron affinity} + \text{lattice enthalpy} + \text{other terms}$$

---

## 4. Kinetics

### Rate Equations

For a reaction $\mathrm{A} + \mathrm{B} \to \text{products}$, the rate equation is:

$$\text{Rate} = k[\mathrm{A}]^m[\mathrm{B}]^n$$

- $k$ = rate constant (units depend on overall order)
- $m$, $n$ = orders of reaction with respect to each reactant
- **Overall order** = $m + n$

**Orders can only be determined experimentally** — not from stoichiometric coefficients.

### Initial Rates Method

Measure initial rate at various concentrations. Plot $\ln(\text{rate})$ vs
$\ln(\text{concentration})$ to find order (gradient = order).

### Rate-Determining Step

The slowest step in a multi-step mechanism determines the overall rate. The reactants appearing in
the rate equation are in most cases involved in or before the rate-determining step.

### Arrhenius Equation

$$k = A e^{-E_a / RT}$$

$$\ln k = \ln A - \frac{E_a}{RT}$$

A plot of $\ln k$ vs $\frac{1}{T}$ gives a straight line:

- **Gradient** = $-\frac{E_a}{R}$
- **Y-intercept** = $\ln A$

### Catalysts

- **Lower activation energy** ($E_a$) by providing an alternative reaction pathway
- Are **not consumed** in the reaction
- **Heterogeneous:** different phase from reactants (e.g. $\mathrm{V_2O_5}$ in Contact process)
- **Homogeneous:** same phase as reactants (e.g. aqueous $\mathrm{Fe^{2+}}$ as a Fenton reagent)

---

## 5. Equilibrium

### Le Chatelier's Principle

If a system at equilibrium is subjected to a change, the equilibrium shifts to oppose that change.

| Change               | Effect on Equilibrium                                 |
| -------------------- | ----------------------------------------------------- |
| Increase [reactant]  | Shifts to products                                    |
| Increase pressure    | Shifts to fewer moles of gas                          |
| Increase temperature | Shifts endothermic direction                          |
| Add catalyst         | No shift — speeds up both forward and reverse equally |

### Equilibrium Constants

**$K_c$** (concentration):

$$K_c = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}$$

**$K_p$** (partial pressure, for gas-phase reactions):

$$K_p = \frac{(p_{\mathrm{C}})^c(p_{\mathrm{D}})^d}{(p_{\mathrm{A}})^a(p_{\mathrm{B}})^b}$$

- Equilibrium constants are **temperature-dependent** only
- $K > 1$: products favoured at equilibrium
- $K < 1$: reactants favoured at equilibrium
- Units depend on the expression — always write them

### Industrial Processes

| Process | Equation                                        | Conditions Chosen                           | Reason                                                                        |
| ------- | ----------------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------- |
| Haber   | $\mathrm{N_2 + 3H_2 \rightleftharpoons 2NH_3}$  | 450 °C, 200 atm, $\mathrm{Fe}$ catalyst     | Compromise: lower $T$ favoured, but too slow; high $P$ favoured but expensive |
| Contact | $\mathrm{2SO_2 + O_2 \rightleftharpoons 2SO_3}$ | 450 °C, 1–2 atm, $\mathrm{V_2O_5}$ catalyst | High $T$ for rate, moderate $P$ for cost                                      |

---

## 6. Acids, Bases and Buffers

### pH Scale

$$\mathrm{pH} = -\log_{10}[\mathrm{H}^+]$$

- pH 0–6: acidic; pH 7: neutral; pH 8–14: alkaline
- At 25 °C: $[\mathrm{H}^+][\mathrm{OH}^-] = 10^{-14}$

### Strong vs Weak Acids

- **Strong acids** fully dissociate ($\mathrm{HCl}$, $\mathrm{HNO_3}$, $\mathrm{H_2SO_4}$ first
  proton)
- **Weak acids** partially dissociate — equilibrium established

### Acid Dissociation Constant ($K_a$)

$$K_a = \frac{[\mathrm{H}^+][\mathrm{A}^-]}{[\mathrm{HA}]}$$

$$\mathrm{p}K_a = -\log_{10} K_a$$

For a weak monoprotic acid: $[\mathrm{H}^+] \approx \sqrt{K_a \times [\mathrm{HA}]}$

### Buffer Solutions

A **buffer** resists changes in pH when small amounts of acid or base are added.

**Acidic buffer:** weak acid + its conjugate base (e.g. $\mathrm{CH_3COOH}$ + $\mathrm{CH_3COO}^-$)

$$[\mathrm{H}^+] = K_a \times \frac{[\text{acid}]}{[\text{salt}]}$$

**Henderson-Hasselbalch equation:**

$$\mathrm{pH} = \mathrm{p}K_a + \log_{10}\frac{[\mathrm{A}^-]}{[\mathrm{HA}]}$$

### Indicators

Indicators are weak acids where $\mathrm{HIn}$ and $\mathrm{In}^-$ have different colours.

- **Methyl orange:** pH range 3.1–4.4 (red → yellow)
- **Phenolphthalein:** pH range 8.3–10.0 (colourless → pink)

Choose an indicator whose range falls within the vertical section of the titration curve.

---

## 7. Redox

### Oxidation States

Rules for assigning oxidation states:

1. Elements in their standard state = 0
2. Monatomic ions = their charge
3. Oxygen in most cases = $-2$ (except in peroxides: $-1$)
4. Hydrogen in most cases = $+1$ (except in metal hydrides: $-1$)
5. Sum of oxidation states in a neutral compound = 0

### Half-Equations

- **Oxidation** = loss of electrons (increase in oxidation state)
- **Reduction** = gain of electrons (decrease in oxidation state)

Balance half-equations: atoms → charge → combine → cancel electrons.

### Electrochemical Cells

A voltaic cell converts chemical energy to electrical energy. The more negative $E^\ominus$ value is
the oxidation half-reaction (anode); the more positive is the reduction half-reaction (cathode).

$$E^\ominus_{\text{cell}} = E^\ominus_{\text{reduction}} - E^\ominus_{\text{oxidation}}$$

If $E^\ominus_{\text{cell}} > 0$, the reaction is feasible under standard conditions.

### Electrode Potentials

- **Standard electrode potential** ($E^\ominus$): measured at 298 K, 100 kPa, 1 mol dm$^{-3}$
- A more positive $E^\ominus$ indicates a greater tendency to be reduced
- **Limitations:** $E^\ominus > 0$ is necessary but **not sufficient** for a reaction to occur
  (kinetics and non-standard conditions also matter)

---

## 8. Key Equations Reference

| Topic             | Equation                                                                          | Notes                 |
| ----------------- | --------------------------------------------------------------------------------- | --------------------- |
| Ionisation        | $\mathrm{pH} = -\log[\mathrm{H}^+]$                                               |                       |
| $K_a$             | $K_a = \frac{[\mathrm{H}^+][\mathrm{A}^-]}{[\mathrm{HA}]}$                        |                       |
| Buffer            | $\mathrm{pH} = \mathrm{p}K_a + \log\frac{[\mathrm{A}^-]}{[\mathrm{HA}]}$          | Henderson-Hasselbalch |
| Arrhenius         | $k = Ae^{-E_a/RT}$                                                                |                       |
| Rate              | $\text{Rate} = k[\mathrm{A}]^m[\mathrm{B}]^n$                                     |                       |
| Equilibrium $K_c$ | $K_c = \frac{[\mathrm{C}]^c[\mathrm{D}]^d}{[\mathrm{A}]^a[\mathrm{B}]^b}$         |                       |
| Equilibrium $K_p$ | $K_p = \frac{(p_C)^c(p_D)^d}{(p_A)^a(p_B)^b}$                                     | Gas phase only        |
| Hess              | $\Delta H = \sum \Delta H_f(\text{products}) - \sum \Delta H_f(\text{reactants})$ |                       |
| Calorimetry       | $q = mc\Delta T$                                                                  |                       |
| Cell potential    | $E^\ominus_{\text{cell}} = E^\ominus_{\text{red}} - E^\ominus_{\text{ox}}$        |                       |

---

## 9. Common Mistakes

1. **Writing bond enthalpies as negative for breaking bonds.** Bond breaking is always endothermic
   ($+$); bond forming is exothermic ($-$).

2. **Assuming orders equal stoichiometric coefficients.** Orders must be determined experimentally
   and are unrelated to the balanced equation coefficients.

3. **Confusing rate constant ($k$) with equilibrium constant ($K$).** $k$ changes with temperature
   according to Arrhenius; $K$ changes with temperature but is a ratio at equilibrium.

4. **Forgetting units for $K_c$ and $k$.** Always calculate and include units.

5. **Misapplying Le Chatelier's principle to catalysts.** A catalyst has no effect on the position
   of equilibrium — only the rate at which equilibrium is reached.

6. **Balancing half-equations incorrectly.** Always balance atoms first, then charges, using
   electrons. Multiply to equalise electrons before combining.

7. **Using $\Delta H_f^\ominus$ for elements.** By definition, the standard enthalpy of formation of
   an element in its standard state is zero.

---

## Summary

Physical chemistry underpins all other branches of chemistry. The key themes are:

- **Atomic structure** determines periodic trends and chemical behaviour
- **Bonding** explains physical properties and reactivity
- **Energetics** (thermodynamics) tells us whether a reaction can occur
- **Kinetics** tells us how fast it occurs
- **Equilibrium** tells us the extent to which it proceeds
- **Acids and bases** are central to aqueous chemistry
- **Redox** links to electrochemistry and energy transfer

Mastery requires connecting these concepts: for example, understanding how a catalyst affects both
kinetics and equilibrium arguments, or how Le Chatelier's principle relates quantitatively to
changes in $K_c$.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.

:::
