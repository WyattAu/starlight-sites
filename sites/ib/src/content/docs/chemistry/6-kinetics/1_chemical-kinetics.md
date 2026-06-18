---
title: Chemical Kinetics
description: ""s affinity for the substrate (lower $K_M$ = higher affinity).

### Factors Affecting Enzyme Activity

| Factor                  | Effect                                                                       |
| ----------------------- | ---------------------------------------------------------------------------- |
| Temperature             | Optimum temperature; denaturation above                                      |
| pH                      | Optimum pH; denaturation at extremes                                         |
| Substrate concentration | Increases rate until $V_{\max}$                                              |
| Enzyme concentration    | Increases $V_{\max}$                                                         |
| Inhibitors              | Competitive: increases apparent $K_M$; Non-competitive: decreases $V_{\max}$ |

---

## Additional IB Exam-Style Questions

### Question 5 (Paper 2 style)

The decomposition of hydrogen peroxide is first order with respect to H$_2$O$_2$:

$$
2\mathrm{H}_2\mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O} + \mathrm{O}_2
$$

The rate constant is $3.0 \times 10^{-3}\mathrm{ min}^{-1}$ at $25\degree\mathrm{C}$.

**(a)** If the initial concentration is $0.50\mathrm{ M}$How long does it take for the Concentration
to drop to $0.10\mathrm{ M}$?

$$
\ln(0.10) = \ln(0.50) - 3.0 \times 10^{-3} \times t
$$

$$
-2.303 = -0.693 - 0.003t
$$

$$
0.003t = 1.610 \implies t = 537\mathrm{ min}
$$

**(b)** What is the half-life?

$$
T_{1/2} = \frac{0.693}{3.0 \times 10^{-3}} = 231\mathrm{ min}
$$

**(c)** After how many half-lives will the concentration be $0.10\mathrm{ M}$?

$$
0.10 = 0.50 \times \left(\frac{1}{2}\right)^n \implies \left(\frac{1}{2}\right)^n = 0.2
$$

$$
N = \frac{\ln 0.2}{\ln 0.5} = \frac{-1.609}{-0.693} = 2.32 \mathrm{ half-lives}
$$

### Question 6 (Paper 1 style)

For a reaction with rate equation Rate $= k[\mathrm{A}]^2[\mathrm{B}]^0$Which statement is Correct?

A. Doubling [A] doubles the rate. B. Doubling [A] quadruples the rate. C. Doubling [B] quadruples
The rate. D. The reaction is first order overall.

**Answer: B.** The rate depends on $[\mathrm{A}]^2$So doubling [A] increases the rate by a factor Of
$2^2 = 4$. The reaction is second order overall.

### Question 7 (Paper 2 style)

The following data was collected for the reaction A + 2B $\to$ C + D:

| Experiment | [A] (M) | [B] (M) | Initial Rate (M/s)   |
| ---------- | ------- | ------- | -------------------- |
| 1          | 0.10    | 0.10    | $2.0 \times 10^{-4}$ |
| 2          | 0.20    | 0.10    | $8.0 \times 10^{-4}$ |
| 3          | 0.10    | 0.20    | $2.0 \times 10^{-4}$ |
| 4          | 0.20    | 0.20    | $8.0 \times 10^{-4}$ |

**(a)** Determine the order with respect to A and B.

Comparing 1 and 2: doubling [A] (4x rate increase) $\implies$ order in A $= 2$.

Comparing 1 and 3: doubling [B] (no change in rate) $\implies$ order in B $= 0$.

**(b)** Write the rate equation.

$$
\mathrm{Rate} = k[\mathrm{A}]^2
$$

**(c)** Calculate the rate constant $k$.

$$
K = \frac{2.0 \times 10^{-4}}{(0.10)^2} = \frac{2.0 \times 10^{-4}}{0.01} = 0.020\mathrm{ L/(mol}\cdot\mathrm{s)}
$$

**(d)** Propose a two-step mechanism consistent with this rate equation.

Step 1 (slow): A + A $\to$ E (rate-determining step)

Step 2 (fast): E + 2B $\to$ C + D

The rate-determining step involves 2 molecules of A (bimolecular), consistent with Rate
$= k[\mathrm{A}]^2$.

---

## Chemical Kinetics: Extended Topics

### Determining Order from Concentration-Time Data

When given concentration-time data (not initial rates), use graphical methods:

1. Plot $[\mathrm{A}]$ vs $t$: if linear, zero order.
2. Plot $\ln[\mathrm{A}]$ vs $t$: if linear, first order. Gradient $= -k$.
3. Plot $1/[\mathrm{A}]$ vs $t$: if linear, second order. Gradient $= k$.

:::
:::info[Example]

The concentration of a reactant was measured over time:

| Time (min) | 0    | 10   | 20   | 30    | 40     |
| ---------- | ---- | ---- | ---- | ----- | ------ |
| [A] (M)    | 1.00 | 0.50 | 0.25 | 0.125 | 0.0625 |

Plotting $\ln[\mathrm{A}]$ vs $t$:

| Time (min)        | 0   | 10       | 20       | 30       | 40       |
| ----------------- | --- | -------- | -------- | -------- | -------- |
| $\ln[\mathrm{A}]$ | 0   | $-0.693$ | $-1.386$ | $-2.079$ | $-2.773$ |

The $\ln[\mathrm{A}]$ vs $t$ plot is linear with gradient $\approx -0.0693$Confirming first order
With $k = 0.0693\mathrm{ min}^{-1}$.

Alternatively, note that $[\mathrm{A}]$ halves every 10 minutes: $t_{1/2} = 10\mathrm{ min}$.

$$
K = \frac{0.693}{10} = 0.0693\mathrm{ min}^{-1}
$$


### Effect of a Change in Temperature on the Rate Constant

The Arrhenius equation shows that increasing temperature always increases the rate constant (and
Therefore the rate), regardless of whether the reaction is exothermic or endothermic.

### Temperature Coefficient ($Q_{10}$)

The temperature coefficient $Q_{10}$ is the factor by which the rate increases for a
$10\degree\mathrm{C}$ temperature rise:

$$
Q_{10} = \frac{k_{T+10}}{k_T}
$$

For many reactions, $Q_{10} \approx 2$--$3$.

### Reaction Profiles and Energy Barriers

A reaction profile (energy diagram) shows:

- Reactants at the start.
- Products at the end.
- A peak representing the transition state.
- The activation energy $E_a$ is the difference between reactants and the peak.
- $\Delta H$ is the difference between products and reactants.

### Catalysts and Activation Energy

A catalyst provides an alternative pathway with a lower $E_a$:

- The reactant energy and product energy are unchanged.
- $\Delta H$ is unchanged.
- Both forward and reverse activation energies are lowered by the same amount.
- $K$ is unchanged (equilibrium position unaffected).
- The reaction reaches equilibrium faster.

### Heterogeneous Catalysts in Industry

| Catalyst   | Process               | Reaction                                     |
| ---------- | --------------------- | -------------------------------------------- |
| Iron       | Haber process         | N$_2$ + 3H$_2$ $\rightleftharpoons$ 2NH$_3$  |
| V$_2$O$_5$ | Contact process       | 2SO$_2$ + O$_2$ $\rightleftharpoons$ 2SO$_3$ |
| Pt/Rh      | Ostwald process       | 4NH$_3$ + 5O$_2$ $\to$ 4NO + 6H$_2$O         |
| Ni         | Hydrogenation         | Alkene $\to$ alkane                          |
| ZrO$_2$    | Ziegler-Natta process | Polymerisation of alkenes                    |

---

## Additional IB Exam-Style Questions

### Question 8 (Paper 2 style)

The rate constant for the decomposition of hydrogen iodide:

$$
2\mathrm{HI} \to \mathrm{H}_2 + \mathrm{I}_2
$$

Is $2.4 \times 10^{-21}\mathrm{ L/(mol}\cdot\mathrm{s)}$ at $300\mathrm{ K}$ and
$1.2 \times 10^{-16}\mathrm{ L/(mol}\cdot\mathrm{s)}$ at $500\mathrm{ K}$.

**(a)** Calculate the activation energy.

$$
\ln\!\left(\frac{1.2 \times 10^{-16}}{2.4 \times 10^{-21}}\right) = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{500}\right)
$$

$$
\ln(5.0 \times 10^4) = \frac{E_a}{8.314}(0.001333)
$$

$$
10.82 = \frac{E_a}{8.314}(0.001333)
$$

$$
E_a = \frac{10.82 \times 8.314}{0.001333} = 67500\mathrm{ J/mol} = 67.5\mathrm{ kJ/mol}
$$

**(b)** Calculate the rate constant at $400\mathrm{ K}$.

$$
\ln\!\left(\frac{k_{400}}{2.4 \times 10^{-21}}\right) = \frac{67500}{8.314}\left(\frac{1}{300} - \frac{1}{400}\right)
$$

$$
= 8119 \times 0.000833 = 6.763
$$

$$
\frac{k_{400}}{2.4 \times 10^{-21}} = e^{6.763} = 864
$$

$$
K_{400} = 864 \times 2.4 \times 10^{-21} = 2.07 \times 10^{-18}\mathrm{ L/(mol}\cdot\mathrm{s)}
$$

### Question 9 (Paper 1 style)

For a zero-order reaction, which graph gives a straight line with a negative gradient?

A. $[\mathrm{A}]$ vs $t$ B. $\ln[\mathrm{A}]$ vs $t$ C. $1/[\mathrm{A}]$ vs $t$ D. Rate vs
$[\mathrm{A}]$

**Answer: A.** For a zero-order reaction, $[\mathrm{A}] = [\mathrm{A}]_0 - kt$Which is a straight
Line with gradient $-k$.

### Question 10 (Paper 2 style)

In an experiment to determine the order of reaction with respect to iodide ions, the following
Initial rate data was obtained:

| [I$^-$] (M) | [S$_2$O$_8^{2-}$] (M) | Initial Rate (M/s)   |
| ----------- | --------------------- | -------------------- |
| 0.10        | 0.10                  | $1.0 \times 10^{-5}$ |
| 0.20        | 0.10                  | $2.0 \times 10^{-5}$ |
| 0.10        | 0.20                  | $2.0 \times 10^{-5}$ |

**(a)** Determine the rate equation.

Doubling [I$^-$] doubles rate: first order in I$^-$.

Doubling [S$_2$O$_8^{2-}$] doubles rate: first order in S$_2$O$_8^{2-}$.

$$
\mathrm{Rate} = k[\mathrm{I}^-][\mathrm{S}_2\mathrm{O}_8^{2-}]
$$

**(b)** Calculate $k$.

$$
K = \frac{1.0 \times 10^{-5}}{0.10 \times 0.10} = 1.0 \times 10^{-3}\mathrm{ L/(mol}\cdot\mathrm{s)}
$$

**(c)** Propose a mechanism.

Step 1 (slow, rate-determining):
$\mathrm{I}^- + \mathrm{S}_2\mathrm{O}_8^{2-} \to \mathrm{IS}_2\mathrm{O}_8^{3-}$

Step 2 (fast):
$\mathrm{IS}_2\mathrm{O}_8^{3-} + \mathrm{I}^- \to \mathrm{I}_2 + 2\mathrm{SO}_4^{2-}$

The slow step involves one molecule of each reactant, matching the rate equation.

## Practice Problems

<details>
<summary>Question 1: Determining Rate Equation from Initial Rates</summary>

For the reaction $\mathrm{A} + 2\mathrm{B} \to \mathrm{C}$The following data was obtained:

| Experiment | $[\mathrm{A}]$ (mol/L) | $[\mathrm{B}]$ (mol/L) | Initial Rate (mol/L/s) |
| ---------- | ---------------------- | ---------------------- | ---------------------- |
| 1          | $0.10$                 | $0.10$                 | $1.2 \times 10^{-3}$   |
| 2          | $0.20$                 | $0.10$                 | $2.4 \times 10^{-3}$   |
| 3          | $0.10$                 | $0.20$                 | $4.8 \times 10^{-3}$   |

(a) Determine the rate equation.

(b) Calculate the rate constant $k$.

(c) What are the units of $k$?

</details>

<details>
<summary>Answer</summary>

(a) Comparing experiments 1 and 2: doubling $[\mathrm{A}]$ doubles the rate, so order in
$\mathrm{A} = 1$.

Comparing experiments 1 and 3: doubling $[\mathrm{B}]$ quadruples the rate, so order in
$\mathrm{B} = 2$.

$$\mathrm{Rate} = k[\mathrm{A}][\mathrm{B}]^2$$

(b) From experiment 1:

$$1.2 \times 10^{-3} = k(0.10)(0.10)^2 = k(0.001)$$

$$k = \frac{1.2 \times 10^{-3}}{0.001} = 1.2\mathrm{ L}^2/(\mathrm{mol}^2 \cdot \mathrm{s})$$

(c) Units of $k$: $\mathrm{L}^2/(\mathrm{mol}^2 \cdot \mathrm{s})$

</details>

<details>
<summary>Question 2: Activation Energy from Arrhenius Equation</summary>

The rate constant for a first-order reaction is $4.0 \times 10^{-3}\mathrm{ s}^{-1}$ at
$300\mathrm{ K}$ and $2.5 \times 10^{-2}\mathrm{ s}^{-1}$ at $350\mathrm{ K}$. Calculate the
Activation energy.

</details>

<details>
<summary>Answer</summary>

$$\ln\!\left(\frac{k_2}{k_1}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$\ln\!\left(\frac{2.5 \times 10^{-2}}{4.0 \times 10^{-3}}\right) = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{350}\right)$$

$$\ln(6.25) = \frac{E_a}{8.314}(0.000476)$$

$$1.833 = \frac{E_a}{8.314}(0.000476)$$

$$E_a = \frac{1.833 \times 8.314}{0.000476} = 32000\mathrm{ J/mol} = 32.0\mathrm{ kJ/mol}$$

</details>

<details>
<summary>Question 3: First-Order Kinetics and Half-Life</summary>

A first-order reaction has a rate constant of $0.050\mathrm{ min}^{-1}$.

(a) Calculate the half-life.

(b) If the initial concentration is $0.80\mathrm{ M}$What is the concentration after
$20\mathrm{ minutes}$?

</details>

<details>
<summary>Answer</summary>

(a) $$t_{1/2} = \frac{0.693}{k} = \frac{0.693}{0.050} = 13.9\mathrm{ min}$$

(b) $$\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt = \ln(0.80) - 0.050 \times 20$$

$$\ln[\mathrm{A}] = -0.223 - 1.000 = -1.223$$

$$[\mathrm{A}] = e^{-1.223} = 0.294\mathrm{ M}$$

</details>

<details>
<summary>Question 4: Reaction Mechanism Analysis</summary>

The overall reaction $2\mathrm{NO}_2(g) + \mathrm{F}_2(g) \to 2\mathrm{NO}_2\mathrm{F}(g)$ has the
Proposed mechanism:

Step 1 (slow): $\mathrm{NO}_2 + \mathrm{F}_2 \to \mathrm{NO}_2\mathrm{F} + \mathrm{F}$

Step 2 (fast): $\mathrm{NO}_2 + \mathrm{F} \to \mathrm{NO}_2\mathrm{F}$

(a) Identify the rate-determining step.

(b) Write the rate equation for the overall reaction.

(c) Identify any intermediates.

</details>

<details>
<summary>Answer</summary>

(a) Step 1 is the rate-determining step (slowest step).

(b) The rate equation is determined by the slow step:

$$\mathrm{Rate} = k[\mathrm{NO}_2][\mathrm{F}_2]$$

(c) The intermediate is the fluorine atom ($\mathrm{F}$), which is produced in step 1 and consumed
In step 2. It does not appear in the overall reaction or the rate equation.

</details>

<details>
<summary>Question 5: Effect of Temperature on Rate</summary>

A reaction at $300\mathrm{ K}$ has a rate constant of $2.0 \times 10^{-3}\mathrm{ s}^{-1}$. The
Activation energy is $50.0\mathrm{ kJ/mol}$. Calculate the rate constant at $320\mathrm{ K}$.

</details>

<details>
<summary>Answer</summary>

$$\ln\!\left(\frac{k_{320}}{k_{300}}\right) = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

$$= \frac{50000}{8.314}\left(\frac{1}{300} - \frac{1}{320}\right) = 6014 \times 0.000208 = 1.251$$

$$\frac{k_{320}}{2.0 \times 10^{-3}} = e^{1.251} = 3.494$$

$$k_{320} = 3.494 \times 2.0 \times 10^{-3} = 6.99 \times 10^{-3}\mathrm{ s}^{-1}$$

</details>

---

## Related Content at Other Levels

- **A-Level Kinetics:**
  [Chemical Kinetics](https://alevel.wyattau.com/docs/chemistry/chemical-kinetics)
- **DSE Rate of Reaction:**
  [Rate of Reaction and Energetics](https://dse.wyattau.com/docs/dse/chemistry/3-chemical-kinetics-and-energetics)

## Common Pitfalls

1. Forgetting to convert between units (e.g., $\text{cm}^3$ to $\text{dm}^3$) when calculating
   concentrations.

2. Writing half-equations without balancing charges or atoms — always check electrons, hydrogen
   ions, and water molecules.

3. Assuming that a strong acid always has a lower pH than a weak acid without considering
   concentration.

4. Drawing structural formulae incorrectly — check the number of bonds each atom can form and the
   overall charge.

## Cross-References

| Topic               | Site    | Link                                                                                                      |
| ------------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| [Chemical Kinetics] | A-Level | [View](https://alevel-sciences.wyattau.com/docs/alevel/chemistry/kinetics)                                |
| [Chemical Kinetics] | IB      | [View](https://ib.wyattau.com/docs/ib/chemistry/6-kinetics/1_chemical-kinetics)                           |
| [Chemical Kinetics] | DSE     | [View](https://dse.wyattau.com/docs/dse/chemistry/3-chemical-kinetics-and-energetics/1_chemical-kinetics) |

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.


:::