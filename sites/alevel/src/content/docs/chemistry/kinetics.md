---
title: Chemical Kinetics
description: ""$). On the
Maxwell-Boltzmann distribution, the $E_a$ line moves to the left, and a larger proportion of
molecules now have sufficient energy to react. The distribution itself does not change.

### Relationship to Collision Theory

For a reaction to occur, two conditions must be met:

1. **Sufficient energy:** The collision energy must exceed the activation energy $E_a$.
2. **Correct orientation:** The molecules must collide with the correct geometry (steric factor).

Only collisions satisfying both criteria lead to reaction. The rate is proportional to the product
of the collision frequency, the fraction of collisions with sufficient energy ($e^{-E_a/RT}$), and
the steric factor.

### Fraction of Molecules with Energy Exceeding $E_a$

The fraction is given by the Boltzmann factor:

$$
F = e^{-E_a/RT}
$$

**Worked Example.** Calculate the fraction of molecules with energy exceeding
$E_a = 50\,\mathrm{kJ/mol}$ at $298\,\mathrm{K}$ and at $400\,\mathrm{K}$.

At $298\,\mathrm{K}$:

$$
F = \exp\left(\frac◆LB◆-50000◆RB◆◆LB◆8.314 \times 298◆RB◆\right) = \exp(-20.17) = 1.7 \times 10^{-9}
$$

At $400\,\mathrm{K}$:

$$
F = \exp\left(\frac◆LB◆-50000◆RB◆◆LB◆8.314 \times 400◆RB◆\right) = \exp(-15.03) = 3.2 \times 10^{-7}
$$

Increasing the temperature from $298\,\mathrm{K}$ to $400\,\mathrm{K}$ increases the fraction of
reactive molecules by a factor of approximately 190, even though the temperature increased by only
34\%. This exponential temperature dependence explains why small temperature changes can have large
effects on reaction rate.

## Enzyme Kinetics (Brief Introduction)

Enzymes are biological catalysts (proteins) that follow Michaelis-Menten kinetics:

$$
V = \frac◆LB◆V_{\max}[S]◆RB◆◆LB◆K_m + [S]◆RB◆
$$

Where $V_{\max}$ is the maximum rate (when all enzyme active sites are occupied), $[S]$ is the
substrate concentration, and $K_m$ is the Michaelis constant (substrate concentration at half
$V_{\max}$).

- At low $[S] \ll K_m$: $v \approx \frac◆LB◆V_{\max}◆RB◆◆LB◆K_m◆RB◆[S]$ -- rate is approximately
  first-order in $[S]$.
- At high $[S] \gg K_m$: $v \approx V_{\max}$ -- rate is approximately zero-order in $[S]$ (enzyme
  is saturated).

This is directly analogous to the behaviour of heterogeneous catalysts at low and high reactant
concentrations.

## Advanced Rate Determination Methods

### The Initial Rates Method: Practical Considerations

When performing initial rate experiments:

1. **Keep initial concentrations of all but one reactant in large excess.** This ensures that the
   concentration of the excess reactant remains essentially constant, and the observed rate depends
   only on the reactant being varied.

2. **Measure the rate before more than 10% reaction has occurred.** This ensures the concentration
   is close to the initial value.

3. **Repeat experiments.** Initial rate measurements are inherently less precise than continuous
   monitoring because they use only two data points (the starting concentration and the amount
   reacted in a short time). Multiple repeats improve precision.

### Continuous Monitoring Methods

**Gas syringe method:** Collect gas produced in a gas syringe and plot volume vs time. The gradient
of the tangent at $t = 0$ gives the initial rate.

**Colorimetric method:** For reactions involving a coloured species, measure absorbance vs time
using a colorimeter. The Beer-Lambert law ($A = \varepsilon cl$) relates absorbance to
concentration.

**Conductivity method:** For reactions that change the number or type of ions in solution, measure
conductivity vs time. For example, the hydrolysis of a halogenoalkane:

$$
\mathrm{R-Br} + \mathrm{H}_2\mathrm{O} \to \mathrm{R-OH} + \mathrm{H}^+ + \mathrm{Br}^-
$$

Conductivity increases as $\mathrm{H}^+$ and $\mathrm{Br}^-$ are produced.

### Determining the Order from Concentration-Time Graphs

| Order | Plot of [A] vs t                  | Linearised plot | Half-life behaviour   |
| ----- | --------------------------------- | --------------- | --------------------- |
| 0     | Straight line (negative gradient) | [A] vs t        | Decreases with [A]\_0 |
| 1     | Exponential decay                 | ln[A] vs t      | Constant              |
| 2     | Curved, steeper at start          | 1/[A] vs t      | Decreases with [A]\_0 |

To determine the order experimentally: plot the data in all three linearised forms. The one that
gives the best straight line (highest $R^2$ value) indicates the order.

### Worked Example: Determining Order from Graphical Data

The hydrolysis of a halogenoalkane $\mathrm{R-X}$ was monitored by measuring conductivity. The
following data were obtained:

| Time (s) | Conductivity ($\mu\mathrm{S/cm}$) |
| -------- | --------------------------------- |
| 0        | 12.0                              |
| 60       | 25.8                              |
| 120      | 36.4                              |
| 180      | 44.2                              |
| 240      | 49.8                              |
| $\infty$ | 64.0                              |

The conductivity at $t = \infty$ (complete reaction) is $64.0$. The conductivity is proportional to
the concentration of product.

$[\mathrm{P}] \propto (\kappa_t - \kappa_0) = (\kappa_t - 12.0)$And
$[\mathrm{R-X}] \propto (\kappa_\infty - \kappa_t) = (64.0 - \kappa_t)$.

| Time (s) | $[\mathrm{R-X}]$ (arb. Units) | $\ln[\mathrm{R-X}]$ | $1/[\mathrm{R-X}]$ |
| -------- | ----------------------------- | ------------------- | ------------------ |
| 0        | 52.0                          | 3.951               | 0.0192             |
| 60       | 38.2                          | 3.643               | 0.0262             |
| 120      | 27.6                          | 3.318               | 0.0362             |
| 180      | 19.8                          | 2.986               | 0.0505             |
| 240      | 14.2                          | 2.653               | 0.0704             |

Plotting $\ln[\mathrm{R-X}]$ vs $t$: the points (0, 3.951), (60, 3.643), (120, 3.318), (180, 2.986),
(240, 2.653) give an approximately straight line. The gradient is approximately
$-0.0054\,\mathrm{s}^{-1}$So $k \approx 0.0054\,\mathrm{s}^{-1}$ and the reaction is first-order
with respect to $\mathrm{R-X}$.

## Practice Problems

<details>
<summary>Problem 1</summary>

The rate equation for the reaction $\mathrm{A} + 2\mathrm{B} \to \mathrm{C}$ is
$\mathrm{Rate} = k[\mathrm{A}][\mathrm{B}]$. Deduce a possible two-step mechanism.

**Solution:**

Since $[\mathrm{B}]$ appears to the first power (not second), the RDS involves one molecule of B,
not two. A possible mechanism:

Step 1 (slow, RDS): $\mathrm{A} + \mathrm{B} \to \mathrm{X}$ (intermediate)

Step 2 (fast): $\mathrm{X} + \mathrm{B} \to \mathrm{C}$

Rate equation: $\mathrm{Rate} = k_1[\mathrm{A}][\mathrm{B}]$Which matches.

</details>

<details>
<summary>Problem 2</summary>

A first-order reaction has a half-life of 120 s. Calculate the rate constant and the time required
for 90% of the reactant to be consumed.

**Solution:**

$$
K = \frac{0.693}{t_{1/2}} = \frac{0.693}{120} = 5.775 \times 10^{-3}\,\mathrm{s^{-1}}
$$

For 90% consumption: $[\mathrm{A}] = 0.10[\mathrm{A}]_0$.

$$
\ln\left(\frac◆LB◆[\mathrm{A}]◆RB◆◆LB◆[\mathrm{A}]_0◆RB◆\right) = -kt
$$

$$
\ln(0.10) = -5.775 \times 10^{-3} \times t
$$

$$
-2.303 = -5.775 \times 10^{-3} \times t
$$

$$
T = \frac◆LB◆2.303◆RB◆◆LB◆5.775 \times 10^{-3}◆RB◆ = 399\,\mathrm{s}
$$

</details>

<details>
<summary>Problem 4</summary>

The rate of the reaction $\mathrm{A} + 2\mathrm{B} \to \mathrm{C}$ was studied at $298\,\mathrm{K}$.
The following initial rate data were obtained:

| Experiment | $[\mathrm{A}]$ ($\mathrm{mol/dm}^3$) | $[\mathrm{B}]$ ($\mathrm{mol/dm}^3$) | Initial rate ($\mathrm{mol\,dm^{-3}\,s^{-1}}$) |
| ---------- | ------------------------------------ | ------------------------------------ | ---------------------------------------------- |
| 1          | 0.10                                 | 0.10                                 | $1.2 \times 10^{-3}$                           |
| 2          | 0.20                                 | 0.10                                 | $2.4 \times 10^{-3}$                           |
| 3          | 0.10                                 | 0.20                                 | $4.8 \times 10^{-3}$                           |
| 4          | 0.20                                 | 0.20                                 | $9.6 \times 10^{-3}$                           |

(a) Determine the order with respect to $\mathrm{A}$ and $\mathrm{B}$. (b) Write the rate equation
and calculate the rate constant. (c) Calculate the initial rate when $[\mathrm{A}] = 0.15$ and
$[\mathrm{B}] = 0.25\,\mathrm{mol/dm}^3$.

**Solution:**

(a) Comparing experiments 1 and 2 (B constant, A doubled): rate doubles. Order with respect to
$\mathrm{A}$ = 1.

Comparing experiments 1 and 3 (A constant, B doubled): rate quadruples. Order with respect to
$\mathrm{B}$ = 2.

(b) Rate equation: $\text{rate} = k[\mathrm{A}][\mathrm{B}]^2$.

Using experiment 1: $1.2 \times 10^{-3} = k(0.10)(0.10)^2 = k(0.001)$

$$
K = \frac◆LB◆1.2 \times 10^{-3}◆RB◆◆LB◆0.001◆RB◆ = 1.2\,\mathrm{dm}^6\,\mathrm{mol}^{-2}\,\mathrm{s}^{-1}
$$

(c)
$\text{rate} = 1.2 \times 0.15 \times (0.25)^2 = 1.2 \times 0.15 \times 0.0625 = 0.01125\,\mathrm{mol\,dm^{-3}\,s^{-1}} = 1.1 \times 10^{-2}\,\mathrm{mol\,dm^{-3}\,s^{-1}}$

</details>

<details>
<summary>Problem 5</summary>

For a first-order reaction, the rate constant at $300\,\mathrm{K}$ is
$3.46 \times 10^{-5}\,\mathrm{s}^{-1}$ and at $350\,\mathrm{K}$ it is
$7.69 \times 10^{-3}\,\mathrm{s}^{-1}$. Calculate the activation energy.

**Solution:**

Using the Arrhenius equation in two-point form:

$$
\ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)
$$

$$
\ln\frac◆LB◆7.69 \times 10^{-3}◆RB◆◆LB◆3.46 \times 10^{-5}◆RB◆ = \ln(222.3) = 5.403
$$

$$
\frac{1}{T_2} - \frac{1}{T_1} = \frac{1}{350} - \frac{1}{300} = 0.002857 - 0.003333 = -4.762 \times 10^{-4}\,\mathrm{K}^{-1}
$$

$$
5.403 = -\frac{E_a}{8.314} \times (-4.762 \times 10^{-4})
$$

$$
5.403 = \frac◆LB◆E_a \times 4.762 \times 10^{-4}◆RB◆◆LB◆8.314◆RB◆
$$

$$
E_a = \frac◆LB◆5.403 \times 8.314◆RB◆◆LB◆4.762 \times 10^{-4}◆RB◆ = \frac◆LB◆44.92◆RB◆◆LB◆4.762 \times 10^{-4}◆RB◆ = 94,300\,\mathrm{J/mol} = 94.3\,\mathrm{kJ/mol}
$$

</details>

## Advanced Kinetics: Rate-Determining Step and Mechanisms

### Rate-Determining Step

In a multi-step reaction, the slowest step determines the overall rate. The rate equation reflects
the molecularity of the rate-determining step.

**Example:** The reaction between propanone and iodine in acidic solution:

$$\mathrm{CH}_3\mathrm{COCH}_3 + \mathrm{I}_2 \to \mathrm{CH}_2\mathrm{ICOCH}_3 + \mathrm{HI}$$

The observed rate equation is: Rate $= k[\mathrm{CH}_3\mathrm{COCH}_3}][\mathrm{H}^+]$

Iodine does not appear in the rate equation, despite being a reactant. This means iodine
participates in a fast step after the rate-determining step.

**Proposed mechanism:**

Step 1 (slow, rate-determining): Protonation of propanone:

$$\mathrm{CH}_3\mathrm{COCH}_3 + \mathrm{H}^+ \to \mathrm{CH}_3\mathrm{C(OH}^+)\mathrm{CH}_3$$

Step 2 (fast): Enolisation:

$$\mathrm{CH}_3\mathrm{C(OH}^+)\mathrm{CH}_3 \to \mathrm{CH}_2=\mathrm{C(OH})\mathrm{CH}_3 + \mathrm{H}^+$$

Step 3 (fast): Reaction with iodine:

$$\mathrm{CH}_2=\mathrm{C(OH})\mathrm{CH}_3 + \mathrm{I}_2 \to \mathrm{CH}_2\mathrm{ICOCH}_3 + \mathrm{HI}$$

The rate equation (Rate $= k[\mathrm{CH}_3\mathrm{COCH}_3}][\mathrm{H}^+]$) matches step 1,
confirming it is the rate-determining step.

### Steady-State Approximation (Brief Introduction)

For some mechanisms, the rate equation derived from the rate-determining step does not match the
experimental data because an intermediate accumulates. The steady-state approximation assumes that
the concentration of the intermediate remains constant (its rate of formation equals its rate of
consumption).

**Example:** The decomposition of $\mathrm{N}_2\mathrm{O}_5$:

$$2\mathrm{N}_2\mathrm{O}_5 \to 4\mathrm{NO}_2 + \mathrm{O}_2$$

Mechanism:

Step 1: $\mathrm{N}_2\mathrm{O}_5 \rightleftharpoons \mathrm{NO}_2 + \mathrm{NO}_3$ (fast
equilibrium, $K_1$)

Step 2: $\mathrm{NO}_2 + \mathrm{NO}_3 \to \mathrm{NO} + \mathrm{O}_2 + \mathrm{NO}_2$ (slow)

Step 3: $\mathrm{NO} + \mathrm{NO}_3 \to 2\mathrm{NO}_2$ (fast)

Applying the steady-state approximation to the intermediates $\mathrm{NO}_2$ and $\mathrm{NO}_3$
gives the rate equation:

$$\text{Rate} = k[\mathrm{N}_2\mathrm{O}_5]$$

This is first-order with respect to $\mathrm{N}_2\mathrm{O}_5$Consistent with experimental
observation.

### Catalysis in Detail

**Heterogeneous catalysis:** The catalyst provides a surface on which reactant molecules adsorb.
Adsorption weakens the bonds within the reactant molecules, lowering the activation energy.
Examples:

- Haber process: Iron catalyst for $\mathrm{N}_2 + 3\mathrm{H}_2 \rightleftharpoons 2\mathrm{NH}_3$
- Contact process: $\mathrm{V}_2\mathrm{O}_5$ catalyst for
  $2\mathrm{SO}_2 + \mathrm{O}_2 \rightleftharpoons 2\mathrm{SO}_3$

**Homogeneous catalysis:** The catalyst is in the same phase as the reactants. Example:

- Acid-catalysed esterification: $\mathrm{H}^+$ catalyses
  $\mathrm{CH}_3\mathrm{COOH} + \mathrm{CH}_3\mathrm{CH}_2\mathrm{OH} \rightleftharpoons \mathrm{CH}_3\mathrm{COOCH}_2\mathrm{CH}_3 + \mathrm{H}_2\mathrm{O}$

**Autocatalysis:** A product of the reaction acts as a catalyst for the reaction. Example:

- The reaction
  $\mathrm{MnO}_4^- + 5\mathrm{Fe}^{2+} + 8\mathrm{H}^+ \to \mathrm{Mn}^{2+} + 5\mathrm{Fe}^{3+} + 4\mathrm{H}_2\mathrm{O}$
  is catalysed by $\mathrm{Mn}^{2+}$ ions, which are produced in the reaction. The rate initially
  increases as more $\mathrm{Mn}^{2+}$ accumulates, then decreases as reactants are consumed.

### Practical Techniques: Determining Rate Equations (AQA RP 8)

**Method 1: Initial rates method.**

1. Measure the initial rate at several different starting concentrations of one reactant (keeping
   others constant).
2. Plot initial rate vs concentration.
3. If the graph is linear, the reaction is first-order with respect to that reactant.
4. If the graph is a horizontal line, the reaction is zero-order.

**Method 2: Continuous monitoring.**

Monitor the concentration of a reactant or product over time. Common techniques:

- **Colorimetry:** Measure absorbance of a coloured species at regular intervals.
- **Gas collection:** Measure the volume of gas produced at regular intervals.
- **Titration:** Quench aliquots at regular intervals and titrate to determine concentration.
- **pH measurement:** Monitor pH for reactions involving $\mathrm{H}^+$ or $\mathrm{OH}^-$.

**Method 3: Half-life method.**

For a first-order reaction, the half-life is constant and independent of concentration. Plot
concentration vs time and measure the time for the concentration to halve at several points. If the
half-life is constant, the reaction is first-order.

$$t_{1/2} = \frac◆LB◆\ln 2◆RB◆◆LB◆k◆RB◆ = \frac{0.693}{k}$$

### Arrhenius Applications: Catalyst Effect on Activation Energy

**Worked Example:** A reaction has $E_a = 75\,\mathrm{kJ/mol}$ without a catalyst and
$E_a = 50\,\mathrm{kJ/mol}$ with a catalyst. Calculate the ratio of rate constants at
$298\,\mathrm{K}$Assuming the pre-exponential factor $A$ is unchanged.

$$\frac◆LB◆k_\text{cat}◆RB◆◆LB◆k_\text{uncat}◆RB◆ = \frac◆LB◆Ae^{-E_{a,\text{cat}}/RT}◆RB◆◆LB◆Ae^{-E_{a,\text{uncat}}/RT}◆RB◆ = e^{(E_{a,\text{uncat}} - E_{a,\text{cat}})/RT}$$

$$= e^{(75000 - 50000)/(8.314 \times 298)} = e^{25000/2478} = e^{10.09} = 2.4 \times 10^4$$

The catalyst increases the rate by a factor of approximately 24,000 at $298\,\mathrm{K}$.

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (5 marks)</summary>

The reaction $\mathrm{A} + 2\mathrm{B} \to \mathrm{C}$ was studied at $298\,\mathrm{K}$. The
following initial rate data were obtained:

| $[\mathrm{A}]$ ($\mathrm{mol\,dm^{-3}}$) | $[\mathrm{B}]$ ($\mathrm{mol\,dm^{-3}}$) | Initial rate ($\mathrm{mol\,dm^{-3}\,s^{-1}}$) |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------------- |
| 0.10                                     | 0.10                                     | $1.2 \times 10^{-4}$                           |
| 0.20                                     | 0.10                                     | $2.4 \times 10^{-4}$                           |
| 0.10                                     | 0.20                                     | $4.8 \times 10^{-4}$                           |

(a) Deduce the rate equation. (3 marks)

(b) Calculate the value of the rate constant, including units. (2 marks)

**Mark Scheme:**

(a) Comparing experiments 1 and 2: $[\mathrm{A}]$ doubles, rate doubles. First-order with respect to
$\mathrm{A}$ (1 mark).

Comparing experiments 1 and 3: $[\mathrm{B}]$ doubles, rate quadruples ($\times 4$). Second-order
with respect to $\mathrm{B}$ (1 mark).

Rate equation: Rate $= k[\mathrm{A}][\mathrm{B}]^2$ (1 mark).

(b) Using experiment 1: $1.2 \times 10^{-4} = k \times 0.10 \times (0.10)^2 = k \times 0.001$

$k = \frac◆LB◆1.2 \times 10^{-4}◆RB◆◆LB◆0.001◆RB◆ = 0.12\,\mathrm{mol}^{-2}\,\mathrm{dm}^6\,\mathrm{s}^{-1}$
(1 mark for calculation, 1 mark for units).

</details>

<details>
<summary>Q2 (4 marks)</summary>

Explain the term activation energy. Describe how a catalyst increases the rate of a chemical
reaction.

**Mark Scheme:**

Activation energy is the minimum energy that colliding particles must have for a reaction to occur
(1 mark). It is the energy difference between the reactants and the transition state (1 mark).

A catalyst provides an alternative reaction pathway with a lower activation energy (1 mark). More
particles have energy $\geq E_a$ (lower threshold), so a greater proportion of collisions are
successful, increasing the rate. The catalyst is not consumed in the reaction (1 mark).

</details>

<details>
<summary>Q3 (5 marks)</summary>

For a first-order reaction, the concentration of reactant falls from $0.200\,\mathrm{mol\,dm^{-3}}$
to $0.100\,\mathrm{mol\,dm^{-3}}$ in 120 s.

(a) Calculate the rate constant. (2 marks)

(b) Calculate the half-life. (1 mark)

(c) Calculate the time for the concentration to fall to $0.025\,\mathrm{mol\,dm^{-3}$. (2 marks)

**Mark Scheme:**

(a) For first-order: $\ln[\mathrm{A}] = \ln[\mathrm{A}]_0 - kt$

$\ln(0.100) = \ln(0.200) - k \times 120$

$-2.303 = -1.609 - 120k$

$120k = 1.609 - 2.303 = -0.694$

$k = \frac{0.694}{120} = 5.78 \times 10^{-3}\,\mathrm{s}^{-1}$ (1 mark for equation, 1 mark for
value.)

(b)
$t_{1/2} = \frac◆LB◆\ln 2◆RB◆◆LB◆k◆RB◆ = \frac◆LB◆0.693◆RB◆◆LB◆5.78 \times 10^{-3}◆RB◆ = 120\,\mathrm{s}$
(1 mark.)

(c) $0.025\,\mathrm{mol\,dm^{-3} = 0.200 \times \left(\frac{1}{2}\right)^n$ where $n$ is the number
of half-lives.

$\frac{0.025}{0.200} = 0.125 = \left(\frac{1}{2}\right)^3$So $n = 3$ half-lives.

$t = 3 \times 120 = 360\,\mathrm{s}$ (2 marks.)

</details>

---

:::tip Diagnostic Test Ready to test your understanding of **Chemical Kinetics**? The contains the hardest questions
within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Chemical
Kinetics with other chemistry topics to test synthesis under exam conditions.

See for instructions on
self-marking and building a personal test matrix.

## Summary

This topic covers the essential chemistry of chemical kinetics, including key reactions, underlying
theories, and practical applications.

**Key concepts include:**

- rate of reaction and collision theory
- the Maxwell-Boltzmann distribution
- effect of temperature and concentration
- catalysts and activation energy
- rate equations and orders of reaction

Mastery of these concepts requires both theoretical understanding and the ability to apply knowledge
to unfamiliar contexts, particularly in calculation and practical questions.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

:::
