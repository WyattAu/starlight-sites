---
title: Electrochemistry
description: ""s Laws

**Faraday's First Law.** The mass of substance deposited or liberated at an electrode during
Electrolysis is directly proportional to the quantity of electricity passed.

$$
M = \frac{Q \cdot M}{n \cdot F}
$$

Or equivalently:

$$
M = \frac{It \cdot M}{n \cdot F}
$$

Where:

- $m$ = mass of substance deposited or liberated (g)
- $Q$ = total charge passed (C)
- $I$ = current (A)
- $t$ = time (s)
- $M$ = molar mass of the substance (g/mol)
- $n$ = number of electrons transferred per ion
- $F$ = Faraday constant ($96485\mathrm{ C/mol}$)

**Faraday's Second Law.** When the same quantity of electricity is passed through different
Electrolytes, the masses of substances deposited are proportional to their equivalent masses
($M/n$).

### Key Constants

$$
F = 96485\mathrm{ C/mol} \approx 96500\mathrm{ C/mol}
$$

One mole of electrons carries a charge of one Faraday.

### Quantitative Examples

**Example 1:** Calculate the mass of copper deposited when a current of $2.50\mathrm{ A}$ is passed
Through $\mathrm{CuSO}_4$(aq) for $45.0$ minutes.

$$
Q = It = 2.50 \times 45.0 \times 60 = 6750\mathrm{ C}
$$

$$
N_e = \frac{Q}{F} = \frac{6750}{96500} = 0.06995\mathrm{ mol of } e^-
$$

For $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$$n = 2$:

$$
N(\mathrm{Cu}) = \frac{n_e}{2} = \frac{0.06995}{2} = 0.03498\mathrm{ mol}
$$

$$
M(\mathrm{Cu}) = 0.03498 \times 63.55 = 2.22\mathrm{ g}
$$

**Example 2:** What current is needed to deposit $5.00\mathrm{ g}$ of aluminum from
$\mathrm{Al}_2\mathrm{O}_3$ in $2.00$ hours?

$$
N(\mathrm{Al}) = \frac{5.00}{26.98} = 0.1853\mathrm{ mol}
$$

For $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}$$n = 3$:

$$
N_e = 3 \times 0.1853 = 0.5559\mathrm{ mol of } e^-
$$

$$
Q = n_e \times F = 0.5559 \times 96500 = 53\,644\mathrm{ C}
$$

$$
I = \frac{Q}{t} = \frac{53\,644}{2.00 \times 3600} = 7.45\mathrm{ A}
$$

**Example 3:** What volume of $\mathrm{Cl}_2$ gas (at STP) is produced when a current of
$5.00\mathrm{ A}$ is passed through concentrated $\mathrm{NaCl}$ solution for $30.0$ minutes?

$$
Q = It = 5.00 \times 30.0 \times 60 = 9000\mathrm{ C}
$$

$$
N_e = \frac{9000}{96500} = 0.09326\mathrm{ mol of } e^-
$$

For $2\mathrm{Cl}^- \to \mathrm{Cl}_2 + 2e^-$$n = 2$:

$$
N(\mathrm{Cl}_2) = \frac{0.09326}{2} = 0.04663\mathrm{ mol}
$$

$$
V(\mathrm{Cl}_2) = nRT/P = 0.04663 \times 22.7\mathrm{ dm}^3 = 1.06\mathrm{ dm}^3 \mathrm{ at STP}
$$

:::
:::info[IB Exam Tip]

Always convert time to seconds before calculating charge. Always check whether the question gives
Volume conditions (STP, RTP, or specific T and P). The IB data booklet uses
$22.7\mathrm{ dm}^3\mathrm{/mol}$ at STP ($273\mathrm{ K}$$100\mathrm{ kPa}$) and
$24.0\mathrm{ dm}^3\mathrm{/mol}$ at RTP ($298\mathrm{ K}$$100\mathrm{ kPa}$).


### Current Efficiency

In practice, not all the current is used for the desired reaction. **Current efficiency** is defined
As:

$$
\mathrm{Current efficiency} = \frac{\mathrm{actual mass deposited}}{\mathrm{theoretical mass deposited}} \times 100\%
$$

Side reactions (e.g., water electrolysis) and impurities reduce current efficiency.

---

## 9. Fuel Cells (HL)

### Overview

**Definition.** A **fuel cell** is an electrochemical cell that converts the chemical energy of a
Fuel ( hydrogen) and an oxidant ( oxygen) directly into electrical energy. Unlike Batteries, fuel
cells consume reactants that must be continuously supplied.

### Hydrogen Fuel Cells (AFC)

In an alkaline fuel cell, the electrolyte is hot concentrated $\mathrm{KOH}$:

- Anode: $2\mathrm{H}_2(g) + 4\mathrm{OH}^-(aq) \to 4\mathrm{H}_2\mathrm{O}(l) + 4e^-$
- Cathode: $\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)$
- Overall: $2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$

### PEM Fuel Cells (Proton Exchange Membrane)

**Definition.** A **PEM fuel cell** uses a solid polymer membrane ( Nafion) as the Electrolyte.
Protons ($\mathrm{H}^+$) pass through the membrane while electrons flow through the External
circuit.

- Anode: $\mathrm{H}_2(g) \to 2\mathrm{H}^+(aq) + 2e^-$
- Cathode: $\frac{1}{2}\mathrm{O}_2(g) + 2\mathrm{H}^+(aq) + 2e^- \to \mathrm{H}_2\mathrm{O}(l)$
- Overall: $\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)$

The PEM allows only $\mathrm{H}^+$ ions to pass. Both electrodes contain a platinum catalyst.

### Comparison of Fuel Cell Types

| Feature        | Alkaline Fuel Cell (AFC)            | PEM Fuel Cell                      |
| -------------- | ----------------------------------- | ---------------------------------- |
| Electrolyte    | Concentrated $\mathrm{KOH}$         | Solid polymer membrane             |
| Operating temp | $100\mathrm{-}250\degree\mathrm{C}$ | $50\mathrm{-}100\degree\mathrm{C}$ |
| Mobile ion     | $\mathrm{OH}^-$                     | $\mathrm{H}^+$                     |
| Catalyst       | Platinum or nickel                  | Platinum                           |
| Efficiency     | ~60%                                | ~40-50%                            |
| Applications   | Space missions (Apollo, Shuttle)    | Vehicles, portable power           |

### Thermodynamic Efficiency

The theoretical maximum efficiency of a fuel cell is:

$$
\mathrm{Efficiency} = \frac{\Delta G^\circ}{\Delta H^\circ} \times 100\%
$$

For the hydrogen fuel cell:

$$
\Delta G^\circ = -237\mathrm{ kJ/mol}, \quad \Delta H^\circ = -286\mathrm{ kJ/mol}
$$

$$
\mathrm{Maximum efficiency} = \frac{237}{286} \times 100\% = 83\%
$$

Actual operating efficiencies are lower due to activation overpotential, ohmic losses, and mass
Transport limitations, $40\mathrm{-}60\%$.

### Advantages and Disadvantages of Fuel Cells

| Advantages                                                         | Disadvantages                                    |
| ------------------------------------------------------------------ | ------------------------------------------------ |
| High efficiency compared to combustion engines                     | Hydrogen storage and transport challenges        |
| No direct greenhouse gas emissions (only $\mathrm{H}_2\mathrm{O}$) | Hydrogen production often relies on fossil fuels |
| Quiet operation                                                    | Platinum catalysts are expensive                 |
| Continuous operation with fuel supply                              | Limited infrastructure for hydrogen refuelling   |
| Scalable design                                                    | Water management in PEM cells                    |

:::
:::info[IB Exam Tip]

When comparing fuel cells to combustion engines, emphasize that fuel cells are more efficient
Because they are not limited by the Carnot cycle. Also, note that the overall reaction is the same
As combustion of hydrogen, but the energy conversion pathway is different.


---

## 10. Corrosion

### Rusting Mechanism

**Definition.** **Corrosion** is the deterioration of a metal by an electrochemical reaction with
Its environment. The rusting of iron is the most common form of corrosion.

Rusting requires:

1. Iron (or steel) in contact with both water and oxygen.
2. An electrolyte (water with dissolved ions accelerates the process).

#### Mechanism

Rusting is an electrochemical process involving two half-reactions:

**Anode region** (oxidation of iron):

$$
\mathrm{Fe}(s) \to \mathrm{Fe}^{2+}(aq) + 2e^-
$$

**Cathode region** (reduction of oxygen):

$$
\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)
$$

The $\mathrm{Fe}^{2+}$ ions then react with $\mathrm{OH}^-$ and oxygen to form rust:

$$
4\mathrm{Fe}^{2+}(aq) + \mathrm{O}_2(g) + 4\mathrm{OH}^-(aq) + 2\mathrm{H}_2\mathrm{O}(l) \to 4\mathrm{Fe(OH)}_3(s)
$$

$\mathrm{Fe(OH)}_3$ dehydrates to form $\mathrm{Fe}_2\mathrm{O}_3 \cdot n\mathrm{H}_2\mathrm{O}$
(rust), which is a flaky, porous solid that does not protect the underlying metal.

### Factors Affecting Corrosion Rate

| Factor                          | Effect on Corrosion                                                |
| ------------------------------- | ------------------------------------------------------------------ |
| Presence of water and oxygen    | Both required for rusting                                          |
| Dissolved salts (electrolytes)  | Accelerate corrosion by improving conductivity                     |
| Acids (low pH)                  | Accelerate corrosion (more $\mathrm{H}^+$ available for reduction) |
| Temperature                     | Higher temperature generally accelerates corrosion                 |
| Contact with less active metals | Iron acts as anode and corrodes faster                             |
| Contact with more active metals | Iron acts as cathode and is protected (galvanic protection)        |
| Stress in metal                 | Stressed regions are more anodic and corrode faster                |

### Prevention Methods

#### 1. Barrier Coatings

Paint, oil, grease, plastic, or enamel coatings prevent contact between the iron surface and
Water/oxygen. This is effective only as long as the coating remains intact. If scratched, rusting
Occurs at the defect.

#### 2. Galvanizing

**Definition.** **Galvanizing** is the process of coating iron or steel with a layer of zinc. Zinc
Serves two purposes:

1. **Barrier protection:** Zinc coating prevents water and oxygen from reaching the iron.
2. **Sacrificial protection:** If the coating is scratched, zinc acts as the anode (more reactive
   than iron, $E^\circ = -0.76\mathrm{ V}$ vs. $E^\circ = -0.44\mathrm{ V}$) and is preferentially
   oxidized, protecting the iron.

$$
\mathrm{Zn}(s) \to \mathrm{Zn}^{2+}(aq) + 2e^- \quad (\mathrm{zinc oxidized, iron protected})
$$

#### 3. Sacrificial Anodes (Cathodic Protection)

**Definition.** **Sacrificial anodes** are blocks of a more reactive metal ( zinc, magnesium, Or
aluminum) attached to the iron structure. The more reactive metal acts as the anode and corrodes
Instead of the iron.

Applications: ship hulls, underground pipelines, water heaters, offshore oil platforms.

#### 4. Alloying

Stainless steel contains chromium (minimum 10.5%) which forms a thin, adherent layer of
Chromium(III) oxide ($\mathrm{Cr}_2\mathrm{O}_3$) on the surface. This oxide layer is self-healing
And prevents further corrosion.

#### 5. Cathodic Protection (Impressed Current)

An external DC power supply forces the iron to be the cathode. Electrons are pumped onto the iron
Surface, preventing its oxidation. Used for large structures like pipelines and storage tanks.

### Comparison of Protection Methods

| Method                     | Mechanism             | Advantages                     | Limitations                                  |
| -------------------------- | --------------------- | ------------------------------ | -------------------------------------------- |
| Barrier coating            | Physical barrier      | Simple, inexpensive            | Fails if scratched                           |
| Galvanizing                | Barrier + sacrificial | Self-healing, long-lasting     | Limited to zinc-coated items                 |
| Sacrificial anodes         | Galvanic protection   | Replaceable, effective         | Anodes must be periodically replaced         |
| Alloying (stainless steel) | Passive oxide layer   | Very durable                   | Expensive, not suitable for all applications |
| Impressed current          | Forced cathode        | Effective for large structures | Requires continuous power supply             |

:::
:::info[IB Exam Tip]

When explaining why zinc protects iron in galvanizing, reference the electrochemical series: zinc
Has a more negative $E^\circ$ than iron, so zinc is preferentially oxidized. This is the same
Principle as sacrificial anodes.


---

## 11. HL-Only Extensions

### Concentration Cells

**Definition.** A **concentration cell** is an electrochemical cell where both half-cells contain
The same species but at different concentrations. The cell potential arises solely from the
Concentration difference.

**Example:**
$\mathrm{Cu}(s) \mid \mathrm{Cu}^{2+}(0.10\mathrm{ M}) \parallel \mathrm{Cu}^{2+}(1.0\mathrm{ M}) \mid \mathrm{Cu}(s)$

Since $E^\circ_{\mathrm{cell}} = 0$ (same half-reaction), the potential comes from the Nernst
Equation:

$$
E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{0.0592}{n}\log_{10}\frac{[\mathrm{Cu}^{2+}]_{\mathrm{anode}}}{[\mathrm{Cu}^{2+}]_{\mathrm{cathode}}}
$$

$$
E_{\mathrm{cell}} = 0 - \frac{0.0592}{2}\log_{10}\frac{0.10}{1.0} = -\frac{0.0592}{2} \times (-1) = +0.0296\mathrm{ V}
$$

The half-cell with the lower concentration undergoes oxidation (anode), and the half-cell with the
Higher concentration undergoes reduction (cathode). The cell operates until the concentrations
Equalize.

### Lead-Acid Batteries

**Definition.** A **lead-acid battery** is a rechargeable battery commonly used in automobiles. It
Consists of lead dioxide ($\mathrm{PbO}_2$) as the cathode, lead ($\mathrm{Pb}$) as the anode, and
Sulfuric acid ($\mathrm{H}_2\mathrm{SO}_4$) as the electrolyte.

**Discharging:**

- Anode (oxidation): $\mathrm{Pb}(s) + \mathrm{SO}_4^{2-}(aq) \to \mathrm{PbSO}_4(s) + 2e^-$
- Cathode (reduction):
  $\mathrm{PbO}_2(s) + \mathrm{SO}_4^{2-}(aq) + 4\mathrm{H}^+(aq) + 2e^- \to \mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l)$
- Overall:
  $\mathrm{Pb}(s) + \mathrm{PbO}_2(s) + 2\mathrm{H}_2\mathrm{SO}_4(aq) \to 2\mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l)$

**Charging (reverse reaction):**

$$
2\mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{Pb}(s) + \mathrm{PbO}_2(s) + 2\mathrm{H}_2\mathrm{SO}_4(aq)
$$

The state of charge can be determined by measuring the density of the electrolyte. As the battery
Discharges, $\mathrm{H}_2\mathrm{SO}_4$ is consumed and $\mathrm{H}_2\mathrm{O}$ is produced,
Decreasing the electrolyte density.

| Parameter                                 | Fully Charged  | Discharged     |
| ----------------------------------------- | -------------- | -------------- |
| Electrolyte density                       | ~1.28 g/cm$^3$ | ~1.10 g/cm$^3$ |
| Cell voltage                              | ~2.1 V         | ~1.8 V         |
| $\mathrm{H}_2\mathrm{SO}_4$ concentration | High           | Low            |

### Lithium-Ion Batteries

**Definition.** A **lithium-ion battery** is a rechargeable battery where lithium ions move between
The anode and cathode during charging and discharging. The electrodes are intercalation materials --
Lithium ions are inserted into and extracted from layered crystal structures.

**Discharging:**

- Anode (oxidation): $\mathrm{LiC}_6(s) \to \mathrm{C}_6(s) + \mathrm{Li}^+ + e^-$
- Cathode (reduction): $\mathrm{CoO}_2(s) + \mathrm{Li}^+ + e^- \to \mathrm{LiCoO}_2(s)$
- Overall: $\mathrm{LiC}_6(s) + \mathrm{CoO}_2(s) \to \mathrm{C}_6(s) + \mathrm{LiCoO}_2(s)$

**Charging:** The reverse of the above reactions.

Key features:

- The electrolyte is a non-aqueous lithium salt (e.g., $\mathrm{LiPF}_6$ in organic solvent) --
  water cannot be used because lithium reacts violently with it.
- Typical cell voltage: ~3.7 V (much higher than lead-acid).
- High energy density: suitable for portable electronics and electric vehicles.
- Memory effect is negligible.
- Degradation occurs over time due to electrolyte decomposition and electrode material degradation.

| Feature             | Lead-Acid      | Lithium-Ion          |
| ------------------- | -------------- | -------------------- |
| Cell voltage        | 2.0 V          | 3.7 V                |
| Energy density      | 30-40 Wh/kg    | 150-250 Wh/kg        |
| Cycle life          | 200-300 cycles | 500-1000+ cycles     |
| Self-discharge rate | ~5% per month  | ~1-3% per month      |
| Toxicity            | Lead is toxic  | Less toxic materials |
| Cost                | Lower          | Higher               |
| Weight              | Heavy          | Lightweight          |

:::
:::info[IB Exam Tip]

Know the half-reactions for the lead-acid battery. The key insight is that during discharge, both
Electrodes are converted to $\mathrm{PbSO}_4$And during charging, the reaction is reversed. This
Reversibility is what makes the battery rechargeable.


---

## 12. Exam Practice

### Question 1 (SL, 4 marks)

Consider the following standard reduction potentials:

| Half-Reaction                                            | $E^\circ$ (V) |
| -------------------------------------------------------- | ------------- |
| $\mathrm{Mg}^{2+} + 2e^- \rightleftharpoons \mathrm{Mg}$ | $-2.37$       |
| $\mathrm{Ag}^+ + e^- \rightleftharpoons \mathrm{Ag}$     | $+0.80$       |

**(a)** Write the cell diagram notation for a galvanic cell constructed from these two half-cells.
(1 mark)

**(b)** Calculate the standard cell potential. (1 mark)

**(c)** Identify the oxidizing agent and the reducing agent. (2 marks)

#### Markscheme

**(a)** $\mathrm{Mg}(s) \mid \mathrm{Mg}^{2+}(aq) \parallel \mathrm{Ag}^+(aq) \mid \mathrm{Ag}(s)$

The anode (oxidation) is $\mathrm{Mg}$ (more negative $E^\circ$), placed on the left. The cathode
(reduction) is $\mathrm{Ag}$ (more positive $E^\circ$), placed on the right. Accept any reasonable
State symbols.

**(b)**
$E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}} = 0.80 - (-2.37) = +3.17\mathrm{ V}$

**(c)** The oxidizing agent is $\mathrm{Ag}^+$ (it is reduced, gaining electrons). The reducing
Agent is $\mathrm{Mg}$ (it is oxidized, losing electrons).

---

### Question 2 (SL, 5 marks)

An aqueous solution of copper(II) sulfate is electrolyzed using inert graphite electrodes.

**(a)** Write the half-equation for the reaction at the cathode. (1 mark)

**(b)** Write the half-equation for the reaction at the anode. (1 mark)

**(c)** State the observation at each electrode. (2 marks)

**(d)** Calculate the volume of gas produced at the anode when a current of $0.500\mathrm{ A}$ is
Passed for $30.0$ minutes at RTP. (3 marks)

#### Markscheme

**(a)** $\mathrm{Cu}^{2+}(aq) + 2e^- \to \mathrm{Cu}(s)$

Copper is below aluminium in the reactivity series, so $\mathrm{Cu}^{2+}$ is preferentially
Discharged over $\mathrm{H}_2\mathrm{O}$.

**(b)** $2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{O}_2(g) + 4\mathrm{H}^+(aq) + 4e^-$

The sulfate ion is not discharged; water is oxidized instead.

**(c)** Cathode: orange/brown solid (copper metal) deposits on the electrode. Anode: colourless gas
Bubbles (oxygen) are evolved.

**(d)** $Q = It = 0.500 \times 30.0 \times 60 = 900\mathrm{ C}$

$n_e = 900 / 96500 = 0.00933\mathrm{ mol of } e^-$

$n(\mathrm{O}_2) = 0.00933 / 4 = 0.00233\mathrm{ mol}$

$V(\mathrm{O}_2) = 0.00233 \times 24.0 = 0.0560\mathrm{ dm}^3$

---

### Question 3 (HL, 6 marks)

A galvanic cell is constructed as follows:

$$
\mathrm{Ni}(s) \mid \mathrm{Ni}^{2+}(0.010\mathrm{ M}) \parallel \mathrm{Ag}^+(1.0\mathrm{ M}) \mid \mathrm{Ag}(s)
$$

Given: $E^\circ(\mathrm{Ni}^{2+}/\mathrm{Ni}) = -0.25\mathrm{ V}$
$E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\mathrm{ V}$

**(a)** Calculate $E^\circ_{\mathrm{cell}}$. (1 mark)

**(b)** Calculate the cell potential under the given non-standard conditions at $298\mathrm{ K}$. (3
Marks)

**(c)** Calculate $\Delta G^\circ$ for the cell reaction. (2 marks)

#### Markscheme

**(a)** $E^\circ_{\mathrm{cell}} = 0.80 - (-0.25) = +1.05\mathrm{ V}$

**(b)** Overall reaction:
$\mathrm{Ni}(s) + 2\mathrm{Ag}^+(aq) \to \mathrm{Ni}^{2+}(aq) + 2\mathrm{Ag}(s)$$n = 2$

$$
Q = \frac{[\mathrm{Ni}^{2+}]}{[\mathrm{Ag}^+]^2} = \frac{0.010}{(1.0)^2} = 0.010
$$

$$
E_{\mathrm{cell}} = 1.05 - \frac{0.0592}{2}\log_{10}(0.010) = 1.05 - \frac{0.0592}{2} \times (-2) = 1.05 + 0.0592 = 1.109\mathrm{ V}
$$

**(c)**
$\Delta G^\circ = -nFE^\circ_{\mathrm{cell}} = -2 \times 96500 \times 1.05 = -202\,650\mathrm{ J} = -203\mathrm{ kJ/mol}$

---

### Question 4 (HL, 4 marks)

**Balance the following redox equation in acidic solution:**

$$
\mathrm{Cr}_2\mathrm{O}_7^{2-} + \mathrm{H}^+ + \mathrm{I}^- \to \mathrm{Cr}^{3+} + \mathrm{I}_2 + \mathrm{H}_2\mathrm{O}
$$

#### Markscheme

Reduction half-reaction:

$$
\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ + 6e^- \to 2\mathrm{Cr}^{3+} + 7\mathrm{H}_2\mathrm{O}
$$

Oxidation half-reaction:

$$
2\mathrm{I}^- \to \mathrm{I}_2 + 2e^-
$$

Multiply oxidation by 3:

$$
6\mathrm{I}^- \to 3\mathrm{I}_2 + 6e^-
$$

Add both half-reactions:

$$
\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ + 6\mathrm{I}^- \to 2\mathrm{Cr}^{3+} + 3\mathrm{I}_2 + 7\mathrm{H}_2\mathrm{O}
$$

---

### Question 5 (HL, 5 marks)

A hydrogen-oxygen fuel cell operates at $298\mathrm{ K}$. The overall reaction is:

$$
\mathrm{H}_2(g) + \frac{1}{2}\mathrm{O}_2(g) \to \mathrm{H}_2\mathrm{O}(l)
$$

$\Delta H^\circ = -286\mathrm{ kJ/mol}$$\Delta G^\circ = -237\mathrm{ kJ/mol}$

**(a)** Calculate the standard cell potential. (2 marks)

**(b)** Calculate the maximum theoretical efficiency of the fuel cell. (1 mark)

**(c)** Explain why the actual efficiency is lower than the theoretical maximum. (2 marks)

#### Markscheme

**(a)** $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$

From the half-reactions, $n = 2$ (for the equation
$\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}$ with $n = 4$But per mole of $\mathrm{H}_2$
as written, $n = 2$).

$E^\circ_{\mathrm{cell}} = \frac{-\Delta G^\circ}{nF} = \frac{237\,000}{2 \times 96500} = +1.23\mathrm{ V}$

**(b)**
$\mathrm{Efficiency} = \frac{\Delta G^\circ}{\Delta H^\circ} \times 100\% = \frac{237}{286} \times 100\% = 82.9\%$

**(c)** Actual efficiency is lower due to:

- Activation overpotential (energy required to initiate reactions at the electrode surface).
- Ohmic losses (resistance of the electrolyte and electrodes).
- Mass transport limitations (slow diffusion of reactants to the electrodes).
- Heat losses to the surroundings.

---

### Question 6 (SL/HL, 4 marks)

A piece of iron piping is connected to a block of magnesium using a conducting wire. Both are buried
In moist soil.

**(a)** Identify which metal acts as the anode and which acts as the cathode. (1 mark)

**(b)** Write the half-equation for the reaction at the anode. (1 mark)

**(c)** Explain why this arrangement protects the iron from corrosion. (2 marks)

#### Markscheme

**(a)** Magnesium is the anode; iron is the cathode. Magnesium has a more negative $E^\circ$
($-2.37\mathrm{ V}$) compared to iron ($-0.44\mathrm{ V}$).

**(b)** $\mathrm{Mg}(s) \to \mathrm{Mg}^{2+}(aq) + 2e^-$

**(c)** Since magnesium is more reactive than iron, it is preferentially oxidized (corrodes instead
Of iron). Electrons flow from magnesium to iron, making the iron surface electron-rich and
Preventing the oxidation of iron. This is called sacrificial (cathodic) protection. The magnesium
Block must be replaced periodically as it is consumed.

---

### Question 7 (HL, 4 marks)

The standard cell potential for the reaction
$\mathrm{Zn}(s) + \mathrm{Cu}^{2+}(aq) \to \mathrm{Zn}^{2+}(aq) + \mathrm{Cu}(s)$ is
$+1.10\mathrm{ V}$.

**(a)** Calculate the equilibrium constant $K$ at $298\mathrm{ K}$. (3 marks)

**(b)** Comment on the feasibility of the reverse reaction under standard conditions. (1 mark)

#### Markscheme

**(a)**
$\log_{10} K = \frac{nE^\circ_{\mathrm{cell}}}{0.0592} = \frac{2 \times 1.10}{0.0592} = 37.16$

$K = 10^{37.16} = 1.4 \times 10^{37}$

**(b)** Since $K$ is extremely large, the forward reaction is essentially irreversible under
Standard conditions. The reverse reaction is not feasible
($K_{\mathrm{reverse}} = 1/K = 7.1 \times 10^{-38}$), meaning the equilibrium lies overwhelmingly
Toward the products.

---

## Summary of Key Equations

| Equation                                                                          | Application                              |
| --------------------------------------------------------------------------------- | ---------------------------------------- |
| $E^\circ_{\mathrm{cell}} = E^\circ_{\mathrm{cathode}} - E^\circ_{\mathrm{anode}}$ | Calculating standard cell potential      |
| $E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{0.0592}{n}\log_{10} Q$       | Nernst equation at $298\mathrm{ K}$      |
| $\Delta G^\circ = -nFE^\circ_{\mathrm{cell}}$                                     | Free energy from cell potential          |
| $E^\circ_{\mathrm{cell}} = \frac{0.0592}{n}\log_{10} K$                           | Equilibrium constant from cell potential |
| $m = \frac{ItM}{nF}$                                                              | Faraday's law (mass deposited)           |
| $\mathrm{Efficiency} = \frac{\Delta G^\circ}{\Delta H^\circ} \times 100\%$        | Fuel cell theoretical efficiency         |
| $E^\circ_{\mathrm{cell}} = \frac{\Delta G^\circ}{-nF} = \frac{RT}{nF}\ln K$       | Thermodynamic relationships              |

## Practice Problems

<details>
<summary>Question 1: Predicting Spontaneous Redox Reactions</summary>

Given the following standard reduction potentials:

| Half-Reaction                                                | $E^\circ$ (V) |
| ------------------------------------------------------------ | ------------- |
| $\mathrm{Fe}^{3+} + e^- \rightleftharpoons \mathrm{Fe}^{2+}$ | $+0.77$       |
| $\mathrm{I}_2 + 2e^- \rightleftharpoons 2\mathrm{I}^-$       | $+0.54$       |
| $\mathrm{Br}_2 + 2e^- \rightleftharpoons 2\mathrm{Br}^-$     | $+1.07$       |
| $\mathrm{Zn}^{2+} + 2e^- \rightleftharpoons \mathrm{Zn}$     | $-0.76$       |

(a) Will $\mathrm{Fe}^{3+}$ oxidise $\mathrm{I}^-$ to $\mathrm{I}_2$? Calculate
$E^\circ_{\mathrm{cell}}$.

(b) Will $\mathrm{Br}_2$ oxidise $\mathrm{Fe}^{2+}$ to $\mathrm{Fe}^{3+}$? Calculate
$E^\circ_{\mathrm{cell}}$.

</details>

<details>
<summary>Answer</summary>

(a) Cathode (reduction): $\mathrm{Fe}^{3+} + e^- \to \mathrm{Fe}^{2+}$$E^\circ = +0.77\mathrm{ V}$

Anode (oxidation): $2\mathrm{I}^- \to \mathrm{I}_2 + 2e^-$$E^\circ = +0.54\mathrm{ V}$

$$E^\circ_{\mathrm{cell}} = 0.77 - 0.54 = +0.23\mathrm{ V}$$

Since $E^\circ_{\mathrm{cell}} \gt 0$Yes, $\mathrm{Fe}^{3+}$ will spontaneously oxidise
$\mathrm{I}^-$.

(b) Cathode (reduction): $\mathrm{Br}_2 + 2e^- \to 2\mathrm{Br}^-$, $E^\circ = +1.07\mathrm{ V}$

Anode (oxidation): $\mathrm{Fe}^{2+} \to \mathrm{Fe}^{3+} + e^-$, $E^\circ = +0.77\mathrm{ V}$

$$E^\circ_{\mathrm{cell}} = 1.07 - 0.77 = +0.30\mathrm{ V}$$

Since $E^\circ_{\mathrm{cell}} \gt 0$Yes, $\mathrm{Br}_2$ will spontaneously oxidise
$\mathrm{Fe}^{2+}$.

</details>

<details>
<summary>Question 2: Electrolysis of Aqueous Solutions</summary>

An aqueous solution of $\mathrm{CuSO}_4$ is electrolysed using inert graphite electrodes.

(a) Write the half-equation at the cathode and identify the product.

(b) Write the half-equation at the anode and identify the product.

(c) What observation would you make at each electrode?

</details>

<details>
<summary>Answer</summary>

(a) Copper(II) ions are below aluminium in the reactivity series, so $\mathrm{Cu}^{2+}$ is
Preferentially discharged over $\mathrm{H}_2\mathrm{O}$:

$$\mathrm{Cu}^{2+}(aq) + 2e^- \to \mathrm{Cu}(s)$$

Product: orange-brown solid (copper metal) deposits on the cathode.

(b) Sulfate ions are not discharged; water is oxidised instead:

$$2\mathrm{H}_2\mathrm{O}(l) \to \mathrm{O}_2(g) + 4\mathrm{H}^+(aq) + 4e^-$$

Product: colourless oxygen gas bubbles at the anode.

(c) Cathode: orange-brown coating of copper forms on the electrode. The blue colour of the solution
Fades as $\mathrm{Cu}^{2+}$ is removed. Anode: colourless gas bubbles (oxygen) are evolved.

</details>

<details>
<summary>Question 3: Nernst Equation Application</summary>

A galvanic cell is constructed as:

$$\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(0.0010\mathrm{ M}) \parallel \mathrm{Cu}^{2+}(0.10\mathrm{ M}) \mid \mathrm{Cu}(s)$$

Given $E^\circ(\mathrm{Zn}^{2+}/\mathrm{Zn}) = -0.76\mathrm{ V}$ and
$E^\circ(\mathrm{Cu}^{2+}/\mathrm{Cu}) = +0.34\mathrm{ V}$Calculate the cell potential at
$298\mathrm{ K}$.

</details>

<details>
<summary>Answer</summary>

$$E^\circ_{\mathrm{cell}} = 0.34 - (-0.76) = +1.10\mathrm{ V}$$

Overall reaction: $\mathrm{Zn}(s) + \mathrm{Cu}^{2+}(aq) \to \mathrm{Zn}^{2+}(aq) + \mathrm{Cu}(s)$
$n = 2$

$$Q = \frac{[\mathrm{Zn}^{2+}]}{[\mathrm{Cu}^{2+}]} = \frac{0.0010}{0.10} = 0.010$$

$$E_{\mathrm{cell}} = E^\circ_{\mathrm{cell}} - \frac{0.0592}{n}\log_{10} Q = 1.10 - \frac{0.0592}{2}\log_{10}(0.010)$$

$$= 1.10 - 0.0296 \times (-2) = 1.10 + 0.0592 = 1.16\mathrm{ V}$$

</details>

<details>
<summary>Question 4: Faraday's Law Calculation</summary>

What mass of aluminium is deposited when a current of $5.00\mathrm{ A}$ is passed through molten
$\mathrm{Al}_2\mathrm{O}_3$ for $2.00$ hours?

</details>

<details>
<summary>Answer</summary>

$$Q = It = 5.00 \times 2.00 \times 3600 = 36000\mathrm{ C}$$

$$n_e = \frac{Q}{F} = \frac{36000}{96500} = 0.373\mathrm{ mol of } e^-$$

For $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}$, $n = 3$:

$$n(\mathrm{Al}) = \frac{n_e}{3} = \frac{0.373}{3} = 0.124\mathrm{ mol}$$

$$m(\mathrm{Al}) = 0.124 \times 26.98 = 3.35\mathrm{ g}$$

</details>

<details>
<summary>Question 5: Balancing Redox in Basic Solution</summary>

Balance the following equation in basic solution:

$$\mathrm{MnO}_4^- + \mathrm{SO}_3^{2-} \to \mathrm{MnO}_2 + \mathrm{SO}_4^{2-}$$

</details>

<details>
<summary>Answer</summary>

Reduction half-reaction (in acidic conditions):

$$\mathrm{MnO}_4^- + 4\mathrm{H}^+ + 3e^- \to \mathrm{MnO}_2 + 2\mathrm{H}_2\mathrm{O}$$

Oxidation half-reaction (in acidic conditions):

$$\mathrm{SO}_3^{2-} + \mathrm{H}_2\mathrm{O} \to \mathrm{SO}_4^{2-} + 2\mathrm{H}^+ + 2e^-$$

Multiply reduction by 2 and oxidation by 3 to balance electrons:

$$2\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 6e^- \to 2\mathrm{MnO}_2 + 4\mathrm{H}_2\mathrm{O}$$

$$3\mathrm{SO}_3^{2-} + 3\mathrm{H}_2\mathrm{O} \to 3\mathrm{SO}_4^{2-} + 6\mathrm{H}^+ + 6e^-$$

Add both half-reactions:

$$2\mathrm{MnO}_4^- + 3\mathrm{SO}_3^{2-} + 2\mathrm{H}^+ \to 2\mathrm{MnO}_2 + 3\mathrm{SO}_4^{2-} + \mathrm{H}_2\mathrm{O}$$

Now convert to basic conditions by adding $2\mathrm{OH}^-$ to both sides:

$$2\mathrm{MnO}_4^- + 3\mathrm{SO}_3^{2-} + \mathrm{H}_2\mathrm{O} \to 2\mathrm{MnO}_2 + 3\mathrm{SO}_4^{2-} + 2\mathrm{OH}^-$$

</details>

## Common Pitfalls

1. Forgetting to balance equations before performing calculations — always check that atoms and
   charges balance on both sides.

2. Writing half-equations without balancing charges or atoms — always check electrons, hydrogen
   ions, and water molecules.

3. Confusing the terms 'molar' and 'molecular' — molar refers to per mole ($\text{mol}^{-1}$), while
   molecular refers to individual molecules.

4. Drawing structural formulae incorrectly — check the number of bonds each atom can form and the
   overall charge.

## Summary

- Galvanic: chemical → electrical; electrolytic: electrical → chemical
- Anode: oxidation; cathode: reduction ("an ox, red cat")
- $E^\circ$ is intensive (does not change sign when equation reversed)
- Faraday's laws: $Q = nF$; mass deposited $= \frac{MIt}{nF}$

## Cross-References

| Topic              | Site    | Link                                                                                                         |
| ------------------ | ------- | ------------------------------------------------------------------------------------------------------------ |
| [Electrochemistry] | A-Level | [View](https://alevel-sciences.wyattau.com/docs/alevel/chemistry/electrochemistry)                           |
| [Electrochemistry] | IB      | [View](https://ib.wyattau.com/docs/ib/chemistry/9-redox/3_electrochemistry)                                  |
| [Electrochemistry] | DSE     | [View](https://dse.wyattau.com/docs/dse/chemistry/6-redox-and-electrochemistry/1_redox-and-electrochemistry) |

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.


:::