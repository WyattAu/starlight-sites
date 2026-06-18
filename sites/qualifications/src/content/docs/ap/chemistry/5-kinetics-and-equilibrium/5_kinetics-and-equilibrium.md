---
title: Kinetics and Equilibrium
description: ""s Principle (CED Unit 7)

If a stress is applied to a system at equilibrium, the system shifts to counteract the stress.

### Types of Stress

| Stress                                   | Shift Direction           | Effect on $K$ |
| ---------------------------------------- | ------------------------- | ------------- |
| Add reactant                             | Toward products           | None          |
| Add product                              | Toward reactants          | None          |
| Remove reactant                          | Toward reactants          | None          |
| Remove product                           | Toward products           | None          |
| Increase temperature (endothermic)       | Toward products           | Increases     |
| Increase temperature (exothermic)        | Toward reactants          | Decreases     |
| Increase pressure (by decreasing volume) | Toward fewer moles of gas | None          |
| Add catalyst                             | No shift                  | None          |

**Key point:** Only temperature changes affect the value of $K$.

:::
:::info[Example]

For the endothermic reaction $\mathrm{N_2\mathrm{O_4(g) \rightleftharpoons 2\mathrm{NO_2(g)$ Predict
the effect of:

- Increasing temperature: shifts right (more $\mathrm{NO_2$), $K$ increases.
- Increasing pressure (decreasing volume): shifts left (fewer gas moles, 1 vs 2).
- Adding a catalyst: no shift, but equilibrium is reached faster.


## ICE Tables (CED Unit 7)

ICE (Initial, Change, Equilibrium) tables organize the calculation of equilibrium concentrations.

:::
:::info[Example]

For $\mathrm{H_2(g) + \mathrm{I_2(g) \rightleftharpoons 2\mathrm{HI(g)$ with $K_c = 50.5$ at
$448^\circ\mathrm{C$:

If $1.00 \mathrm{ M  \mathrm{H_2$ and $1.00 \mathrm{ M  \mathrm{I_2$ are mixed, find [HI] at
Equilibrium.

| Species       | Initial | Change | Equilibrium |
| ------------- | ------- | ------ | ----------- |
| $\mathrm{H_2$ | 1.00    | $-x$   | $1.00 - x$  |
| $\mathrm{I_2$ | 1.00    | $-x$   | $1.00 - x$  |
| $\mathrm{HI$  | 0       | $+2x$  | $2x$        |

$$
K_c = \frac{(2x)^2}{(1.00 - x)^2} = 50.5
$$

$$
\frac{2x}{1.00 - x} = \sqrt{50.5} = 7.11
$$

$$
2x = 7.11(1.00 - x) \implies 2x = 7.11 - 7.11x \implies 9.11x = 7.11 \implies x = 0.781
$$

$$
[\mathrm{HI] = 2(0.781) = 1.56 \mathrm{ M
$$


### Worked Example: ICE Table with Quadratic

For $\mathrm{PCl_5(g) \rightleftharpoons \mathrm{PCl_3(g) + \mathrm{Cl_2(g)$, $K_c = 0.0420$ at
$500 \mathrm{ K$. If $2.00 \mathrm{ M  \mathrm{PCl_5$ is placed in a flask, find all equilibrium
Concentrations.

| Species         | Initial | Change | Equilibrium |
| --------------- | ------- | ------ | ----------- |
| $\mathrm{PCl_5$ | 2.00    | $-x$   | $2.00 - x$  |
| $\mathrm{PCl_3$ | 0       | $+x$   | $x$         |
| $\mathrm{Cl_2$  | 0       | $+x$   | $x$         |

$$K_c = \frac{x^2}{2.00 - x} = 0.0420$$

$$x^2 = 0.0420(2.00 - x) = 0.0840 - 0.0420x$$

$$x^2 + 0.0420x - 0.0840 = 0$$

Using the quadratic formula:
$x = \frac{-0.0420 + \sqrt{0.0420^2 + 4(0.0840)}}{2} = \frac{-0.0420 + 0.581}{2} = 0.269 \mathrm{ M$

$[\mathrm{PCl_5] = 1.73 \mathrm{ M$, $[\mathrm{PCl_3] = 0.269 \mathrm{ M$
$[\mathrm{Cl_2] = 0.269 \mathrm{ M$.

### Worked Example: $K_c$ to $K_p$ Conversion

For $\mathrm{N_2(g) + 3\mathrm{H_2(g) \rightleftharpoons 2\mathrm{NH_3(g)$ at
$400^{\circ}\mathrm{C$, $K_c = 0.500$. Calculate $K_p$.

$$\Delta n = 2 - (1 + 3) = -2$$

$$K_p = K_c(RT)^{\Delta n} = 0.500 \times (0.08206 \times 673)^{-2} = \frac{0.500}{(55.23)^2} = \frac{0.500}{3049} = 1.64 \times 10^{-4}$$

The small $K_p$ reflects the fact that the equilibrium lies to the left at this temperature (the
Haber process is run at higher temperatures to increase $K$).

## Solubility Equilibrium (CED Unit 7)

### Solubility Product Constant ($K_{sp}$)

For a sparingly soluble salt
$\mathrm{M_a\mathrm{X_b(s) \rightleftharpoons a\mathrm{M^{b+}(aq) + b\mathrm{X^{a-}(aq)$:

$$
K_{sp} = [\mathrm{M^{b+}]^a[\mathrm{X^{a-}]^b
$$

### Common Ion Effect

The solubility of a salt decreases when a common ion is already present in solution.

### Predicting Precipitation

Compare $Q_{sp}$ with $K_{sp}$:

- $Q_{sp} \lt K_{sp}$: no precipitate (unsaturated)
- $Q_{sp} = K_{sp}$: saturated, at equilibrium
- $Q_{sp} \gt K_{sp}$: precipitate forms

:::
:::info[Example]

Will a precipitate form when $50.0 \mathrm{ mL$ of $0.0010 \mathrm{ M  \mathrm{Pb(NO_3)_2$ is Mixed
with $50.0 \mathrm{ mL$ of $0.0020 \mathrm{ M  \mathrm{NaCl$?
$K_{sp}(\mathrm{PbCl_2) = 1.7 \times 10^{-5}$.

After mixing (volumes double):

$[\mathrm{Pb^{2+}] = 0.00050 \mathrm{ M$, $[\mathrm{Cl^-] = 0.0010 \mathrm{ M$.

$$
Q_{sp} = (0.00050)(0.0010)^2 = 5.0 \times 10^{-10}
$$

Since $Q_{sp} = 5.0 \times 10^{-10} \lt K_{sp} = 1.7 \times 10^{-5}$No precipitate forms.


### Worked Example: $K_{sp}$ Calculation from Solubility

The solubility of $\mathrm{AgCl$ in water at $25^{\circ}\mathrm{C$ is
$1.3 \times 10^{-5} \mathrm{ M$. Calculate $K_{sp}$.

$$\mathrm{AgCl(s) \rightleftharpoons \mathrm{Ag^+(aq) + \mathrm{Cl^-(aq)$$

$$K_{sp} = [\mathrm{Ag^+][\mathrm{Cl^-] = (1.3 \times 10^{-5})^2 = 1.7 \times 10^{-10}$$

### Worked Example: Common Ion Effect

Calculate the solubility of $\mathrm{AgCl$ in $0.10 \mathrm{ M  \mathrm{NaCl$.
$K_{sp} = 1.7 \times 10^{-10}$.

$$K_{sp} = s(s + 0.10) \approx s \times 0.10$$

$$s = \frac{1.7 \times 10^{-10}}{0.10} = 1.7 \times 10^{-9} \mathrm{ M$$

Compare with solubility in pure water:
$s_0 = \sqrt{1.7 \times 10^{-10}} = 1.3 \times 10^{-5} \mathrm{ M$.

The common ion effect reduces solubility by a factor of about 7,600.

## Summary Table: Rate Laws

| Order | Integrated Law                            | Half-Life            | Units of $k$                   | Linear Plot             |
| ----- | ----------------------------------------- | -------------------- | ------------------------------ | ----------------------- |
| 0     | $[\mathrm{A] = -kt + [\mathrm{A]_0$       | $[\mathrm{A]_0/(2k)$ | $\mathrm{M s^{-1}$             | $[\mathrm{A]$ vs $t$    |
| 1     | $\ln[\mathrm{A] = -kt + \ln[\mathrm{A]_0$ | $0.693/k$            | $\mathrm{s^{-1}$               | $\ln[\mathrm{A]$ vs $t$ |
| 2     | $1/[\mathrm{A] = kt + 1/[\mathrm{A]_0$    | $1/(k[\mathrm{A]_0)$ | $\mathrm{M^{-1}\mathrm{s^{-1}$ | $1/[\mathrm{A]$ vs $t$  |

### Worked Example: Mechanism with Fast Equilibrium

The reaction $2\mathrm{NO + \mathrm{O_2 \to 2\mathrm{NO_2$ has the experimental rate law
$\mathrm{Rate = k[\mathrm{NO]^2[\mathrm{O_2]$.

Proposed mechanism:

Step 1 (fast equilibrium): $\mathrm{NO + \mathrm{NO \rightleftharpoons \mathrm{N_2\mathrm{O_2$

Step 2 (slow): $\mathrm{N_2\mathrm{O_2 + \mathrm{O_2 \to 2\mathrm{NO_2$

From step 1: $K = \frac{[\mathrm{N_2\mathrm{O_2]}{[\mathrm{NO]^2}$So
$[\mathrm{N_2\mathrm{O_2] = K[\mathrm{NO]^2$.

Rate from step 2:
$\mathrm{Rate = k_2[\mathrm{N_2\mathrm{O_2][\mathrm{O_2] = k_2 K[\mathrm{NO]^2[\mathrm{O_2]$.

This matches the experimental rate law with $k = k_2 K$.

## Summary Table: Rate Laws

| Order | Integrated Law                            | Half-Life            | Units of $k$                   | Linear Plot             |
| ----- | ----------------------------------------- | -------------------- | ------------------------------ | ----------------------- |
| 0     | $[\mathrm{A] = -kt + [\mathrm{A]_0$       | $[\mathrm{A]_0/(2k)$ | $\mathrm{M s^{-1}$             | $[\mathrm{A]$ vs $t$    |
| 1     | $\ln[\mathrm{A] = -kt + \ln[\mathrm{A]_0$ | $0.693/k$            | $\mathrm{s^{-1}$               | $\ln[\mathrm{A]$ vs $t$ |
| 2     | $1/[\mathrm{A] = kt + 1/[\mathrm{A]_0$    | $1/(k[\mathrm{A]_0)$ | $\mathrm{M^{-1}\mathrm{s^{-1}$ | $1/[\mathrm{A]$ vs $t$  |

## Summary Table: Factors Affecting Reaction Rate

| Factor         | Effect on Rate | Explanation                                                        |
| -------------- | -------------- | ------------------------------------------------------------------ |
| Concentration  | Increases      | More collisions per unit time                                      |
| Temperature    | Increases      | More molecules have energy $\geq E_a$; $k$ increases exponentially |
| Surface area   | Increases      | More exposed particles for collision                               |
| Catalyst       | Increases      | Lowers $E_a$ by providing an alternative pathway                   |
| Pressure (gas) | Increases      | Higher concentration = more collisions                             |
| Light (photo)  | May increase   | Provides energy to overcome $E_a$ via photon absorption            |

## Summary Table: Le Chatelier's Principle

| Stress Applied               | Direction of Shift | Effect on $K$ |
| ---------------------------- | ------------------ | ------------- |
| Add reactant                 | Toward products    | None          |
| Add product                  | Toward reactants   | None          |
| Remove reactant              | Toward reactants   | None          |
| Remove product               | Toward products    | None          |
| Increase temperature (endo.) | Toward products    | Increases     |
| Increase temperature (exo.)  | Toward reactants   | Decreases     |
| Decrease volume              | Fewer gas moles    | None          |
| Add catalyst                 | No shift           | None          |

## Common Pitfalls

1. **Confusing rate law orders with stoichiometric coefficients.** The orders must be determined
   experimentally.
2. **Using the wrong integrated rate law.** Identify the order first from the data or from the
   problem statement.
3. **Forgetting that catalysts do not change $K$.** Catalysts increase the rate of both forward and
   reverse reactions equally.
4. **Including solids and liquids in $K$ expressions.** Only gases and aqueous species appear.
5. **Incorrectly predicting the effect of pressure changes.** Only changes in the number of gas
   moles matter. Adding an inert gas at constant volume does not shift equilibrium.
6. **Making algebraic errors in ICE tables.** Check that the stoichiometric coefficients match the
   changes.
7. **Forgetting to account for dilution** when mixing solutions (total volume changes).
8. **Confusing $Q$ with $K$.** $Q$ uses current concentrations; $K$ uses equilibrium concentrations.
9. **Using the quadratic formula incorrectly in ICE table problems.** Always take the positive root
   for $x$ (concentrations cannot be negative).
10. **Forgetting that $K_p$ and $K_c$ are related by $(RT)^{\Delta n}$.** Use the correct
    $\Delta n$.

## Practice Questions

1. For a first-order reaction with $k = 0.050 \mathrm{ s^{-1}$How long does it take for the
   concentration to decrease from $0.80 \mathrm{ M$ to $0.20 \mathrm{ M$?

2. The following data were collected for the reaction $\mathrm{A + \mathrm{B \to \mathrm{C$:

| [A] (M) | [B] (M) | Rate (M/s) |
| ------- | ------- | ---------- |
| 0.10    | 0.10    | 0.0030     |
| 0.20    | 0.10    | 0.0060     |
| 0.20    | 0.20    | 0.0240     |

Determine the rate law and rate constant.

3. At $400 \mathrm{ K$, $k = 6.4 \times 10^{-3} \mathrm{ M^{-1}\mathrm{s^{-1}$. At
   $450 \mathrm{ K$, $k = 3.2 \times 10^{-2} \mathrm{ M^{-1}\mathrm{s^{-1}$. Find $E_a$.

4. For $\mathrm{PCl_5(g) \rightleftharpoons \mathrm{PCl_3(g) + \mathrm{Cl_2(g)$, $K_p = 1.80$ at
   $250^\circ\mathrm{C$. If $0.500 \mathrm{ atm$ of $\mathrm{PCl_5$ is placed in a flask, find the
   equilibrium partial pressures of all species.

5. Does a precipitate form when $100 \mathrm{ mL$ of $0.010 \mathrm{ M  \mathrm{AgNO_3$ is mixed
   with $100 \mathrm{ mL$ of $0.010 \mathrm{ M  \mathrm{NaCl$?
   $K_{sp}(\mathrm{AgCl) = 1.8 \times 10^{-10}$.

6. Explain how Le Chatelier's principle applies when the volume of the container is decreased for
   the reaction $\mathrm{N_2(g) + 3\mathrm{H_2(g) \rightleftharpoons 2\mathrm{NH_3(g)$.

7. For a reaction with $\Delta H = -92 \mathrm{ kJ/mol$What happens to $K$ when the temperature
   increases from $298 \mathrm{ K$ to $400 \mathrm{ K$?

8. Calculate the molar solubility of $\mathrm{PbSO_4$ in pure water and in
   $0.10 \mathrm{ M  \mathrm{Na_2\mathrm{SO_4$. $K_{sp}(\mathrm{PbSO_4) = 1.6 \times 10^{-8}$.

9. The half-life of a reaction is $120 \mathrm{ s$ and the initial concentration is
   $0.50 \mathrm{ M$. If the reaction is first order, what is the rate constant? What is the
   concentration after $240 \mathrm{ s$?

10. Write the equilibrium expression for
    $\mathrm{BaSO_4(s) \rightleftharpoons \mathrm{Ba^{2+}(aq) +
 \mathrm{SO_4^{2-}(aq)$ and calculate
    the concentration of $\mathrm{Ba^{2+}$ in a saturated solution. $K_{sp} = 1.1 \times
 10^{-10}$.

11. A proposed mechanism for a reaction is: Step 1 (fast):
    $\mathrm{NO(g) + \mathrm{Br_2(g) \rightleftharpoons \mathrm{NOBr_2(g)$ Step 2 (slow):
    $\mathrm{NOBr_2(g) + \mathrm{NO(g) \to 2\mathrm{NOBr(g)$ Derive the rate law from this
    mechanism.

12. Calculate the solubility of $\mathrm{PbI_2$ in $0.020 \mathrm{ M  \mathrm{KI$.
    $K_{sp}(\mathrm{PbI_2) = 7.9 \times 10^{-9}$.

13. For the reaction $2\mathrm{SO_2(g) + \mathrm{O_2(g) \rightleftharpoons 2\mathrm{SO_3(g)$
    $K_c = 4.0 \times 10^{24}$ at $700 \mathrm{ K$. If $0.10 \mathrm{ mol$ of $\mathrm{SO_2$ and
    $0.050 \mathrm{ mol$ of $\mathrm{O_2$ are placed in a $1.00 \mathrm{ L$ container, find the
    equilibrium concentrations.

14. Explain why increasing the concentration of a reactant in a reaction at equilibrium causes more
    product to form, but does not change the value of $K$.

15. The decomposition of $\mathrm{HI$ is second order with a rate constant of
    $1.6 \times 10^{-3} \mathrm{ M^{-1}\mathrm{s^{-1}$ at $700 \mathrm{ K$. If the initial
    concentration of $\mathrm{HI$ is $0.200 \mathrm{ M$How long does it take for the concentration
    to decrease to $0.050 \mathrm{ M$?

16. A catalyst lowers the activation energy of a reaction from $85 \mathrm{ kJ/mol$ to
    $55 \mathrm{kJ/mol$. Calculate the ratio of rate constants at $300 \mathrm{ K$.

17. For $\mathrm{H_2(g) + \mathrm{I_2(g) \rightleftharpoons 2\mathrm{HI(g)$ at
    $448^{\circ}\mathrm{C$, $K_c = 50.5$. Calculate $K_p$ for this reaction at the same temperature.

18. Will a precipitate form when equal volumes of $0.0020 \mathrm{ M  \mathrm{CaCl_2$ and
    $0.0010 \mathrm{ M  \mathrm{Na_2\mathrm{SO_4$ are mixed?
    $K_{sp}(\mathrm{CaSO_4) = 2.4 \times 10^{-5}$.

19. For a zero-order reaction $\mathrm{A \to \mathrm{products$ with $k = 0.0050 \mathrm{ M/s$
    calculate the concentration of $\mathrm{A$ after $60 \mathrm{ s$ if
    $[\mathrm{A]_0 = 0.400 \mathrm{ M$.

20. Calculate $K_c$ for the reaction
    $\mathrm{Fe^{3+}(aq) + \mathrm{SCN^-(aq) \rightleftharpoons \mathrm{FeSCN^{2+}(aq)$ if at
    equilibrium $[\mathrm{Fe^{3+}] = 0.0100 \mathrm{ M$, $[\mathrm{SCN^-] = 0.0080 \mathrm{ M$ and
    $[\mathrm{FeSCN^{2+}] = 0.0020 \mathrm{ M$.

21. Explain why the rate of a reaction approximately doubles for every $10^{\circ}\mathrm{C$
    increase in temperature (the "rule of thumb"), and show that this corresponds to an activation
    energy of approximately $50 \mathrm{ kJ/mol$ using the Arrhenius equation.

22. For the reaction $\mathrm{N_2\mathrm{O_4(g) \rightleftharpoons 2\mathrm{NO_2(g)$ $K_c = 0.600$
    at $340 \mathrm{ K$. If $1.00 \mathrm{ atm$ of $\mathrm{N_2\mathrm{O_4$ is placed in a container
    at $340 \mathrm{ K$Find the equilibrium partial pressures and the percentage dissociation.

23. Calculate the pH of a saturated solution of $\mathrm{Mg(OH)_2$. $K_{sp} = 5.6 \times 10^{-12}$.

24. A reaction has $\Delta H = +50 \mathrm{ kJ/mol$. At $300 \mathrm{ K$, $K = 0.10$. Calculate $K$ at
    $400 \mathrm{ K$ using the van't Hoff equation.

## Practice Problems

<details>
<summary>Question 1: Reaction order determination from initial rates</summary>

For the reaction $\mathrm{A + \mathrm{B \to \mathrm{C$The following initial rate data were
Collected:

| $[\mathrm{A]$ (M) | $[\mathrm{B]$ (M) | Initial Rate (M/s) |
| ----------------- | ----------------- | ------------------ |
| 0.10              | 0.10              | 0.0020             |
| 0.20              | 0.10              | 0.0040             |
| 0.10              | 0.20              | 0.0080             |

Determine the rate law, the overall order, and the rate constant $k$.

</details>

<details>
<summary>Answer</summary>

Comparing experiments 1 and 2: $[\mathrm{B]$ is constant, $[\mathrm{A]$ doubles, rate doubles. Rate
is first order in A.

Comparing experiments 1 and 3: $[\mathrm{A]$ is constant, $[\mathrm{B]$ doubles, rate quadruples.
Rate is second order in B.

Rate law: $\mathrm{Rate = k[\mathrm{A][\mathrm{B]^2$.

Overall order: $1 + 2 = 3$.

Using experiment 1: $0.0020 = k(0.10)(0.10)^2 = k(0.001)$So
$k = 0.0020 / 0.001 = 2.0 \mathrm{ M^{-2}s^{-1}}$.

</details>

<details>
<summary>Question 2: Equilibrium calculation with ICE table</summary>

At $500 \mathrm{ K$, $\mathrm{PCl_5(g) \rightleftharpoons \mathrm{PCl_3(g) + \mathrm{Cl_2(g)$ Has
$K_p = 1.05$. If $2.00 \mathrm{ atm$ of $\mathrm{PCl_5$ is placed in a flask and the system Reaches
equilibrium, calculate the equilibrium partial pressures of all three gases and the Percentage
dissociation of $\mathrm{PCl_5$.

</details>

<details>
<summary>Answer</summary>

ICE table (pressures in atm):

|     | $\mathrm{PCl_5$ | $\mathrm{PCl_3$ | $\mathrm{Cl_2$ |
| --- | --------------- | --------------- | -------------- |
| I   | 2.00            | 0               | 0              |
| C   | $-x$            | $+x$            | $+x$           |
| E   | $2.00 - x$      | $x$             | $x$            |

$K_p = \frac{P_{\mathrm{PCl_3} \cdot P_{\mathrm{Cl_2}}{P_{\mathrm{PCl_5}} = \frac{x \cdot x}{2.00 - x} = 1.05$

$x^2 = 1.05(2.00 - x) = 2.10 - 1.05x$

$x^2 + 1.05x - 2.10 = 0$

Using the quadratic formula:
$x = \frac{-1.05 + \sqrt{1.1025 + 8.40}}{2} = \frac{-1.05 + 3.086}{2} = 1.018 \mathrm{ atm$.

Equilibrium pressures: $P_{\mathrm{PCl_5} = 2.00 - 1.018 = 0.982 \mathrm{ atm$
$P_{\mathrm{PCl_3} = 1.018 \mathrm{ atm$, $P_{\mathrm{Cl_2} = 1.018 \mathrm{ atm$.

Percentage dissociation: $\frac{1.018}{2.00} \times 100 = 50.9\%$.

</details>

<details>
<summary>Question 3: Le Chatelier's principle with pressure and temperature</summary>

For the exothermic reaction
$\mathrm{N_2(g) + 3\mathrm{H_2(g) \rightleftharpoons 2\mathrm{NH_3(g)$Predict the effect on the
Equilibrium yield of $\mathrm{NH_3$ when (a) total pressure is increased, (b) temperature is
Increased, (c) a catalyst is added, and (d) $\mathrm{Ar(g)$ is added at constant volume.

</details>

<details>
<summary>Answer</summary>

(a) Increasing total pressure shifts equilibrium toward the side with fewer moles of gas. Reactants:
4 mol gas; products: 2 mol gas. Equilibrium shifts right, increasing $\mathrm{NH_3$ yield.

(b) Increasing temperature favours the endothermic direction. Since the reaction is exothermic,
Increasing temperature shifts equilibrium left, decreasing $\mathrm{NH_3$ yield.

(c) Adding a catalyst increases the rate of both forward and reverse reactions equally. It does not
Shift the equilibrium position or change the yield. It only helps the system reach equilibrium
Faster.

(d) Adding $\mathrm{Ar$ at constant volume increases the total pressure but does not change the
Partial pressures of the reactants or products (since volume is constant and no new moles of
Reactant/product are added). There is no shift in equilibrium.

</details>

<details>
<summary>Question 4: Arrhenius equation and activation energy</summary>

A reaction has a rate constant of $3.46 \times 10^{-5} \mathrm{ s^{-1}}$ at $298 \mathrm{ K$ and
$4.87 \times 10^{-3} \mathrm{ s^{-1}}$ at $350 \mathrm{ K$. Calculate the activation energy $E_a$
And the pre-exponential factor $A$.

</details>

<details>
<summary>Answer</summary>

Using the two-point form of the Arrhenius equation:

$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$\ln\frac{4.87 \times 10^{-3}}{3.46 \times 10^{-5}} = \frac{E_a}{8.314}\left(\frac{1}{298} - \frac{1}{350}\right)$$

$$\ln(140.8) = \frac{E_a}{8.314}(0.003356 - 0.002857)$$

$$4.947 = \frac{E_a}{8.314}(0.000499)$$

$$E_a = \frac{4.947 \times 8.314}{0.000499} = \frac{41.13}{0.000499} = 82,400 \mathrm{ J/mol = 82.4 \mathrm{ kJ/mol$$

For the pre-exponential factor $A$Using $k = Ae^{-E_a/RT}$ at $298 \mathrm{ K$:

$$3.46 \times 10^{-5} = A \cdot e^{-82400/(8.314 \times 298)} = A \cdot e^{-33.28}$$

$$A = \frac{3.46 \times 10^{-5}}{3.62 \times 10^{-15}} = 9.56 \times 10^{9} \mathrm{ s^{-1}}$$

</details>

<details>
<summary>Question 5: Solubility product and common ion effect</summary>

The $K_{sp}$ of $\mathrm{PbCl_2$ is $1.7 \times 10^{-5}$ at $25^\circ\mathrm{C$. Calculate (a) the
Molar solubility of $\mathrm{PbCl_2$ in pure water, and (b) the molar solubility in a
$0.10 \mathrm{ M$ $\mathrm{NaCl$ solution.

</details>

<details>
<summary>Answer</summary>

(a) In pure water: Let $s$ = molar solubility.

$\mathrm{PbCl_2(s) \rightleftharpoons \mathrm{Pb^{2+}(aq) + 2\mathrm{Cl^-(aq)$

$K_{sp} = [\mathrm{Pb^{2+}][\mathrm{Cl^-]^2 = s \times (2s)^2 = 4s^3 = 1.7 \times 10^{-5}$

$s^3 = 4.25 \times 10^{-6}$So $s = 1.62 \times 10^{-2} \mathrm{ M$.

(b) In $0.10 \mathrm{ M$ $\mathrm{NaCl$: $[\mathrm{Cl^-] = 0.10 \mathrm{ M$ initially.

$K_{sp} = [\mathrm{Pb^{2+}][\mathrm{Cl^-]^2 = s \times (0.10 + 2s)^2$

Assuming $2s \ll 0.10$: $1.7 \times 10^{-5} = s \times (0.10)^2 = 0.01s$

$s = 1.7 \times 10^{-3} \mathrm{ M$.

The common ion effect reduces the solubility from $1.62 \times 10^{-2} \mathrm{ M$ to
$1.7 \times 10^{-3} \mathrm{ M$Approximately a 10-fold decrease.

</details>

## Worked Examples

**Example 1: Mole calculation**

Calculate the number of moles in $12.0\,\text{g}$ of $\text{NaOH}$ ($M_r = 40.0$).

**Solution:**

$$n = \frac{m}{M_r} = \frac{12.0}{40.0} = 0.300\,\text{mol}$$

**Example 2: Reacting masses**

$$\text{CaCO}_3 + 2\text{HCl} \rightarrow \text{CaCl}_2 + \text{H}_2\text{O} + \text{CO}_2$$

What mass of $\text{CaCl}_2$ is produced from $10.0\,\text{g}$ of $\text{CaCO}_3$?
($M_r[\text{CaCO}_3] = 100$, $M_r[\text{CaCl}_2] = 111$)

**Solution:**

$$n(\text{CaCO}_3) = \frac{10.0}{100} = 0.100\,\text{mol}$$

From the equation, ratio is $1:1$, so $n(\text{CaCl}_2) = 0.100\,\text{mol}$.

$$m(\text{CaCl}_2) = 0.100 \times 111 = 11.1\,\text{g}$$


:::