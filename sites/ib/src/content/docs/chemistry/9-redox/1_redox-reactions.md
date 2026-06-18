---
title: Redox Reactions
date: 2024-01-01T00:00:00Z
tags:
  - IB
categories:
  - ib
description: ""s Laws

**Faraday's First Law:** The amount of substance produced at an electrode is directly proportional
To the quantity of charge passed.

$$
M = \frac{Q \cdot M}{n \cdot F}
$$

**Faraday's Second Law:** When the same quantity of charge is passed through different electrolytes,
The masses of substances produced are proportional to their equivalent masses (molar mass divided by
Number of electrons transferred).

**Where:**

- $m$ = mass of substance produced (g)
- $Q$ = total charge (C) = $I \times t$
- $I$ = current (A)
- $t$ = time (s)
- $M$ = molar mass (g/mol)
- $n$ = number of moles of electrons transferred per mole of product
- $F$ = Faraday constant = $96\,500\mathrm{ C/mol}$

<details>
<summary>Worked Example 7: Electrolysis Calculation</summary>

A current of $2.50\mathrm{ A}$ is passed through molten Al$_2$O$_3$ for $30.0$ minutes. Calculate
The mass of aluminium produced. ($M_r(\mathrm{Al}) = 27.0\mathrm{ g/mol}$)

Cathode half-reaction: $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}$So $n = 3$.

$$
Q = I \times t = 2.50 \times 30.0 \times 60 = 4500\mathrm{ C}
$$

$$
M = \frac{Q \times M}{n \times F} = \frac{4500 \times 27.0}{3 \times 96500} = \frac{121500}{289500} = 0.420\mathrm{ g}
$$

</details>

<details>
<summary>Worked Example 8: Electrolysis of Aqueous CuSO$_4$</summary>

A current of $0.500\mathrm{ A}$ is passed through $200\mathrm{ mL}$ of $0.500\mathrm{ mol/L}$
CuSO$_4$(aq) using inert graphite electrodes for 2.00 hours.

(a) Write the half-equations for the reactions at each electrode.

(b) Calculate the mass of copper deposited at the cathode.

(c) Calculate the volume of gas produced at the anode at STP.

Answer:

(a)

- **Cathode:** $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}(s)$ (Cu$^{2+}$ is below H in the reactivity
  series)
- **Anode:** $2\mathrm{H}_2\mathrm{O} \to \mathrm{O}_2(g) + 4\mathrm{H}^+(aq) + 4e^-$ (SO$_4^{2-}$
  is not a halide, so water is oxidised)

(b)

$$
Q = 0.500 \times 2.00 \times 3600 = 3600\mathrm{ C}
$$

For Cu: $n = 2$, $M = 63.5\mathrm{ g/mol}$.

$$
M = \frac{3600 \times 63.5}{2 \times 96500} = \frac{228600}{193000} = 1.18\mathrm{ g}
$$

(c) For O$_2$: $n = 4$ electrons per mole of O$_2$.

$$
N(\mathrm{O}_2) = \frac{Q}{n \times F} = \frac{3600}{4 \times 96500} = 0.00933\mathrm{ mol}
$$

At STP ($22.4\mathrm{ L/mol}$):

$$
V = 0.00933 \times 22.4 = 0.209\mathrm{ L} = 209\mathrm{ mL}
$$

</details>

<details>
<summary>Worked Example 9: Faraday's Second Law</summary>

The same charge is passed through two separate electrolytic cells: one containing molten NaCl and
The other containing molten Al$_2$O$_3$. If $2.30\mathrm{ g}$ of Na is produced in the first cell,
What mass of Al is produced in the second?

Answer:

For Na: $\mathrm{Na}^+ + e^- \to \mathrm{Na}$$n_1 = 1$$M_1 = 23.0\mathrm{ g/mol}$. Equivalent Mass
of Na = $23.0/1 = 23.0\mathrm{ g/equiv}$.

For Al: $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}$$n_2 = 3$$M_2 = 27.0\mathrm{ g/mol}$. Equivalent
mass of Al = $27.0/3 = 9.0\mathrm{ g/equiv}$.

By Faraday's Second Law:

$$
\frac{m(\mathrm{Na})}{m(\mathrm{Al})} = \frac{\mathrm{Equiv. Mass of Na}}{\mathrm{Equiv. Mass of Al}}
$$

$$
\frac{2.30}{m(\mathrm{Al})} = \frac{23.0}{9.0}
$$

$$
M(\mathrm{Al}) = \frac{2.30 \times 9.0}{23.0} = 0.900\mathrm{ g}
$$

</details>

---

## Rusting and Corrosion Prevention

### The Rusting Process

Iron rusting is an electrochemical process requiring both water and oxygen:

**Anode (oxidation):** $\mathrm{Fe}(s) \to \mathrm{Fe}^{2+}(aq) + 2e^-$

**Cathode (reduction):**
$\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)$

The Fe$^{2+}$ ions further react:

$$
4\mathrm{Fe}^{2+}(aq) + \mathrm{O}_2(g) + 6\mathrm{H}_2\mathrm{O}(l) \to 4\mathrm{Fe(OH)}_3(s)
$$

$\mathrm{Fe(OH)}_3$ dehydrates to form rust:
$\mathrm{Fe}_2\mathrm{O}_3 \cdot n\mathrm{H}_2\mathrm{O}$.

### Methods of Corrosion Prevention

| Method                                      | Description                                       | How It Works                                                                                                          |
| ------------------------------------------- | ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Coating (painting, oiling)**              | Physical barrier between Fe and O$_2$/H$_2$O      | Prevents contact with the corrosive environment                                                                       |
| **Galvanising**                             | Coating iron with a layer of zinc                 | Zn acts as a sacrificial anode (more reactive than Fe); even if scratched, Zn oxidises preferentially                 |
| **Tin plating**                             | Coating iron with tin                             | Provides a physical barrier; however, if scratched, Fe becomes the anode and rusts faster (since Sn is less reactive) |
| **Sacrificial anode (cathodic protection)** | Attaching a more reactive metal (Mg, Zn) to Fe    | The more reactive metal oxidises in preference to Fe, protecting it                                                   |
| **Alloying**                                | Adding Cr and/or Ni to Fe to make stainless steel | Chromium forms a passive oxide layer that protects the surface                                                        |
| **Electrochemical protection**              | Applying a negative voltage to the iron structure | Makes the iron the cathode, preventing its oxidation                                                                  |

:::caution[Exam Tip] The key distinction: **galvanising** (Zn coating) provides both barrier and
Sacrificial protection. **Tin plating** provides only barrier protection and actually accelerates
Rusting if the coating is damaged, because Sn is less reactive than Fe and Fe becomes the anode.

---

## Fuel Cells

A fuel cell converts the chemical energy of a fuel ( H$_2$) directly into electrical energy. Unlike
batteries, fuel cells consume fuel continuously and can operate as long as fuel is supplied.

### Hydrogen-Oxygen Fuel Cell (Alkaline)

**Anode (oxidation):** $2\mathrm{H}_2(g) + 4\mathrm{OH}^-(aq) \to 4\mathrm{H}_2\mathrm{O}(l) + 4e^-$

**Cathode (reduction):**
$\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)$

**Overall:** $2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$

### Hydrogen-Oxygen Fuel Cell (Acidic)

**Anode (oxidation):** $2\mathrm{H}_2(g) \to 4\mathrm{H}^+(aq) + 4e^-$

**Cathode (reduction):** $\mathrm{O}_2(g) + 4\mathrm{H}^+(aq) + 4e^- \to 2\mathrm{H}_2\mathrm{O}(l)$

**Overall:** $2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$

### Advantages and Disadvantages

| Advantages                                        | Disadvantages                                 |
| ------------------------------------------------- | --------------------------------------------- |
| High efficiency (~60--80%)                        | H$_2$ is expensive to produce and store       |
| No greenhouse gas emissions (only H$_2$O)         | H$_2$ infrastructure is limited               |
| Quiet operation                                   | Fuel cells use expensive catalysts (Pt)       |
| Continuous operation (refuel instead of recharge) | H$_2$ production often relies on fossil fuels |

---

## Common Pitfalls

1. **Anode/Cathode sign:** In a galvanic cell, the anode is negative (oxidation) and the cathode is
   positive (reduction). In an electrolytic cell, the anode is positive and the cathode is negative.
   Remember: **galvanic = spontaneous, electrolytic = forced.**

2. **$E^\circ$ values are not multiplied:** $E^\circ$ is an intensive property. When balancing
   electrons, multiply the half-equation but NOT the $E^\circ$ value.

3. **Cell notation direction:** The anode is always written on the left, cathode on the right. Do
   not reverse this convention.

4. **Electrolysis of aqueous solutions:** Know the discharge rules. Na$^+$ and K$^+$ are never
   discharged from aqueous solution; H$_2$ is produced instead. Halides are discharged in preference
   to SO$_4^{2-}$.

5. **Faraday constant:** $F = 96\,500\mathrm{ C/mol}$ (not $96\,500\mathrm{ C}$). It has units of
   coulombs per mole of electrons.

6. **Oxidation state of O in peroxides:** In H$_2$O$_2$ and Na$_2$O$_2$Oxygen has an oxidation state
   of -1, not -2. In OF$_2$Oxygen is +2.

7. **Oxidising/reducing agents:** The oxidising agent is the species that gets reduced. The reducing
   agent is the species that gets oxidised. Do not confuse the agent with the process.

8. **Electron flow vs current flow:** Electrons flow from anode to cathode (negative to positive in
   the external circuit of a galvanic cell). Conventional current flows in the opposite direction.

9. **n in Faraday calculations:** n is the moles of electrons per mole of product, not the moles of
   product. For Al$^{3+}$ to Al, n = 3. For Cu$^{2+}$ to Cu, n = 2. Always check the half-equation.

10. **Standard conditions:** $E^\circ$ values apply only at standard conditions (1 mol/L, 100 kPa,
    298 K). Changing concentration shifts the actual cell potential (Nernst equation), though IB
    does not require Nernst equation calculations.

---

## Practice Problems

<details>
<summary>Question 1: Oxidation States</summary>

Determine the oxidation state of the underlined element in each compound:

(a) K$\underline{\mathrm{2}}$$\mathrm{Cr}_2$$\underline{\mathrm{O}}_7$ (b)
$\underline{\mathrm{H}}_2$$\underline{\mathrm{O}}_2$ (c) $\underline{\mathrm{N}}$$\mathrm{H}_4^+$
(d) $\underline{\mathrm{Mn}}$$\mathrm{O}_4^{2-}$ (e) $\underline{\mathrm{S}}$$\mathrm{O}_3^{2-}$

Answer:

(a) K = +1 (two K = +2). O = -2 (seven O = -14). $+2 + 2\mathrm{Cr} - 14 = 0$$2\mathrm{Cr} = +12$ Cr
= +6.

(b) H = +1 (two H = +2). $+2 + 2\mathrm{O} = 0$$2\mathrm{O} = -2$O = -1. (Hydrogen peroxide.)

(c) H = +1 (four H = +4). $+4 + \mathrm{N} = +1$ (charge of ion), N = -3.

(d) O = -2 (four O = -8). $\mathrm{Mn} - 8 = -2$Mn = +6.

(e) O = -2 (three O = -6). $\mathrm{S} - 6 = -2$S = +4.

</details>

<details>
<summary>Question 2: Balancing Redox Equations</summary>

Balance the following redox equation in acidic medium:

$\mathrm{Cr}_2\mathrm{O}_7^{2-} + \mathrm{SO}_3^{2-} \to \mathrm{Cr}^{3+} + \mathrm{SO}_4^{2-}$

Answer:

**Reduction (Cr: +6 to +3):**

$\mathrm{Cr}_2\mathrm{O}_7^{2-} \to 2\mathrm{Cr}^{3+}$

Balance O: $\mathrm{Cr}_2\mathrm{O}_7^{2-} \to 2\mathrm{Cr}^{3+} + 7\mathrm{H}_2\mathrm{O}$

Balance H:
$\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ \to 2\mathrm{Cr}^{3+} + 7\mathrm{H}_2\mathrm{O}$

Balance charge: Left = $-2 + 14 = +12$. Right = $+6$. Add 6 $e^-$ to left:

$\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ + 6e^- \to 2\mathrm{Cr}^{3+} + 7\mathrm{H}_2\mathrm{O}$

**Oxidation (S: +4 to +6):**

$\mathrm{SO}_3^{2-} + \mathrm{H}_2\mathrm{O} \to \mathrm{SO}_4^{2-} + 2\mathrm{H}^+ + 2e^-$

Multiply oxidation by 3:

$3\mathrm{SO}_3^{2-} + 3\mathrm{H}_2\mathrm{O} \to 3\mathrm{SO}_4^{2-} + 6\mathrm{H}^+ + 6e^-$

**Add and simplify:**

$\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ + 3\mathrm{SO}_3^{2-} + 3\mathrm{H}_2\mathrm{O} \to 2\mathrm{Cr}^{3+} + 7\mathrm{H}_2\mathrm{O} + 3\mathrm{SO}_4^{2-} + 6\mathrm{H}^+$

Simplify (cancel 6 H$^+$ and 3 H$_2$O):

$$
\mathrm{Cr}_2\mathrm{O}_7^{2-} + 8\mathrm{H}^+ + 3\mathrm{SO}_3^{2-} \to 2\mathrm{Cr}^{3+} + 3\mathrm{SO}_4^{2-} + 4\mathrm{H}_2\mathrm{O}
$$

</details>

<details>
<summary>Question 3: Cell EMF and Spontaneity</summary>

Given the following standard reduction potentials:

| Half-Reaction                                 | $E^\circ$ (V) |
| --------------------------------------------- | ------------- |
| $\mathrm{Ag}^+ + e^- \to \mathrm{Ag}$         | +0.80         |
| $\mathrm{Fe}^{3+} + e^- \to \mathrm{Fe}^{2+}$ | +0.77         |
| $\mathrm{Zn}^{2+} + 2e^- \to \mathrm{Zn}$     | -0.76         |
| $\mathrm{Ni}^{2+} + 2e^- \to \mathrm{Ni}$     | -0.25         |

(a) Calculate $E^\circ_{\mathrm{cell}}$ for the reaction:
$\mathrm{Zn}(s) + 2\mathrm{Ag}^+(aq) \to \mathrm{Zn}^{2+}(aq) + 2\mathrm{Ag}(s)$

(b) Write the cell notation for this cell.

(c) Will Ni spontaneously reduce Fe$^{3+}$? Justify with a calculation.

Answer:

(a) Cathode: Ag$^+$/Ag, $E^\circ = +0.80\mathrm{ V}$. Anode: Zn$^{2+}$/Zn,
$E^\circ = -0.76\mathrm{ V}$.

$$
E^\circ_{\mathrm{cell}} = 0.80 - (-0.76) = +1.56\mathrm{ V}
$$

(b) $\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(aq) \parallel \mathrm{Ag}^+(aq) \mid \mathrm{Ag}(s)$

(c) $\mathrm{Ni}(s) + 2\mathrm{Fe}^{3+}(aq) \to \mathrm{Ni}^{2+}(aq) + 2\mathrm{Fe}^{2+}(aq)$

Cathode: Fe$^{3+}$/Fe$^{2+}$$E^\circ = +0.77\mathrm{ V}$. Anode: Ni$^{2+}$/Ni,
$E^\circ = -0.25\mathrm{ V}$.

$$
E^\circ_{\mathrm{cell}} = 0.77 - (-0.25) = +1.02\mathrm{ V}
$$

Since $E^\circ_{\mathrm{cell}} = +1.02\mathrm{ V} \gt 0$Ni will spontaneously reduce Fe$^{3+}$.

</details>

<details>
<summary>Question 4: Electrolysis Quantitative</summary>

A $3.00\mathrm{ A}$ current is passed through aqueous CuSO$_4$ using copper electrodes for 1.50
Hours.

(a) Calculate the mass of copper deposited at the cathode.

(b) Explain why the mass of the anode decreases during electrolysis.

(c) Calculate the volume of oxygen gas produced at the anode at $25\degree\mathrm{C}$ and
$100\mathrm{ kPa}$. (Use $R = 8.314\mathrm{ J/(mol}\cdot\mathrm{K)}$)

Answer:

(a)

$$
Q = 3.00 \times 1.50 \times 3600 = 16200\mathrm{ C}
$$

$$
M(\mathrm{Cu}) = \frac{Q \times M}{n \times F} = \frac{16200 \times 63.5}{2 \times 96500} = \frac{1028700}{193000} = 5.33\mathrm{ g}
$$

(b) In electrolysis of CuSO$_4$ with copper electrodes (electrorefining), the anode is made of
Impure copper. At the anode, copper oxidises: $\mathrm{Cu}(s) \to \mathrm{Cu}^{2+}(aq) + 2e^-$. This
Means the anode loses mass as copper atoms dissolve into solution. The Cu$^{2+}$ ions then travel to
The cathode where they are deposited as pure copper.

Note: With **inert** electrodes (e.g., graphite), oxygen is produced at the anode from water
Oxidation, not from copper dissolution. The question specifies copper electrodes, so copper
Oxidation occurs.

(c) With **copper electrodes**, the anode reaction is $\mathrm{Cu} \to \mathrm{Cu}^{2+} + 2e^-$And
No O$_2$ is produced. If the electrodes were inert (graphite), then:

At the anode: $2\mathrm{H}_2\mathrm{O} \to \mathrm{O}_2 + 4\mathrm{H}^+ + 4e^-$

$$
N(\mathrm{O}_2) = \frac{Q}{4 \times F} = \frac{16200}{4 \times 96500} = 0.04197\mathrm{ mol}
$$

Using ideal gas law at $T = 298\mathrm{ K}$ and $P = 100\mathrm{ kPa}$:

$$
V = \frac`\{nRT}`{P} = \frac{0.04197 \times 8.314 \times 298}{100} = \frac{103.9}{100} = 1.04\mathrm{ L}
$$

</details>

<details>
<summary>Question 5: Fuel Cell Calculations</summary>

A hydrogen-oxygen fuel cell (alkaline) operates at a constant current of $10.0\mathrm{ A}$.

(a) Write the overall reaction.

(b) Calculate the mass of hydrogen consumed per hour.

(c) If the fuel cell has an efficiency of 65% and $\Delta H$ for the reaction is
$-286\mathrm{ kJ/mol}$Calculate the electrical energy output per hour.

Answer:

(a) $2\mathrm{H}_2(g) + \mathrm{O}_2(g) \to 2\mathrm{H}_2\mathrm{O}(l)$

(b) From the anode half-equation:
$2\mathrm{H}_2 + 4\mathrm{OH}^- \to 4\mathrm{H}_2\mathrm{O} + 4e^-$

4 moles of electrons are produced per 2 moles of H$_2$ consumed. So 2 moles of $e^-$ per mole of
H$_2$.

$$
Q = 10.0 \times 3600 = 36000\mathrm{ C}
$$

$$
N(\mathrm{H}_2) = \frac{Q}{2 \times F} = \frac{36000}{2 \times 96500} = 0.1865\mathrm{ mol}
$$

$$
M(\mathrm{H}_2) = 0.1865 \times 2.016 = 0.376\mathrm{ g}
$$

(c) Energy released by the reaction per hour:

$$
\mathrm{Energy}_{\mathrm{chemical}} = n \times |\Delta H| = 0.1865 \times 286 = 53.3\mathrm{ kJ}
$$

$$
\mathrm{Energy}_{\mathrm{electrical}} = 0.65 \times 53.3 = 34.7\mathrm{ kJ}
$$

</details>

<details>
<summary>Question 6: Corrosion Prevention Analysis (Paper 2 Style)</summary>

An iron water pipe is to be protected from corrosion. Two methods are proposed: (i) connecting it to
A block of magnesium, and (ii) coating it with tin.

(a) For each method, explain the electrochemical principle involved.

(b) If the tin coating is scratched, explain whether the pipe would still be protected. Use
Oxidation states and electrode potential reasoning.

(c) Write the half-equations for the corrosion of iron if neither protection method is applied.

Answer:

(a) (i) **Sacrificial anode:** Mg is more reactive than Fe (Mg has a more negative $E^\circ$
$-2.37\mathrm{ V}$ vs Fe's $-0.44\mathrm{ V}$). Mg acts as the anode and is oxidised:
$\mathrm{Mg} \to \mathrm{Mg}^{2+} + 2e^-$. Fe becomes the cathode and is protected from oxidation.
Mg is "sacrificed" instead of Fe.

(ii) **Tin plating:** Tin provides a physical barrier between Fe and the environment (water/oxygen).
As long as the coating is intact, Fe cannot come into contact with H$_2$O and O$_2$Preventing
Corrosion.

(b) If the tin coating is scratched, the pipe would **not** be protected and would actually corrode
**faster**. Sn has a less negative $E^\circ$ ($-0.14\mathrm{ V}$) than Fe ($-0.44\mathrm{ V}$), so
At the scratch, Fe becomes the anode and Sn becomes the cathode:

- Anode: $\mathrm{Fe} \to \mathrm{Fe}^{2+} + 2e^-$ (oxidation of Fe)
- Cathode: $\mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^- \to 4\mathrm{OH}^-$ (reduction at Sn
  surface)

Fe is preferentially oxidised, accelerating corrosion at the scratch.

(c) Without protection:

- **Anode:** $\mathrm{Fe}(s) \to \mathrm{Fe}^{2+}(aq) + 2e^-$
- **Cathode:** $\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)$

</details>

<details>
<summary>Question 7: Predicting Redox Reactions (Paper 1 Style)</summary>

Which of the following species is the strongest oxidising agent?

A. $\mathrm{Na}^+$ B. $\mathrm{Zn}^{2+}$ C. $\mathrm{Cu}^{2+}$ D. $\mathrm{Ag}^+$

Answer: **D. Ag$^+$**

The strongest oxidising agent has the most positive $E^\circ$ value (most reduced).

- Na$^+$: $E^\circ = -2.71\mathrm{ V}$
- Zn$^{2+}$: $E^\circ = -0.76\mathrm{ V}$
- Cu$^{2+}$: $E^\circ = +0.34\mathrm{ V}$
- Ag$^+$: $E^\circ = +0.80\mathrm{ V}$

Ag$^+$ has the most positive $E^\circ$ and is therefore the strongest oxidising agent.

</details>

<details>
<summary>Question 8: Electrolysis with Variable Products</summary>

Aqueous NaCl is electrolysed using inert graphite electrodes.

(a) Write the half-equations at each electrode.

(b) What observation would be made at each electrode?

(c) If the electrolysis is continued for a long time, the solution becomes more acidic. Explain why.

Answer:

(a) **Cathode:** $2\mathrm{H}_2\mathrm{O} + 2e^- \to \mathrm{H}_2(g) + 2\mathrm{OH}^-(aq)$

Na$^+$ is not discharged because it is too reactive (above H in the reactivity series).

**Anode:** $2\mathrm{Cl}^- \to \mathrm{Cl}_2(g) + 2e^-$

Cl$^-$ is a halide and is discharged in preference to OH$^-$/water.

(b) **Cathode:** Bubbles of colourless gas (H$_2$) and the solution around the cathode turns basic
(due to OH$^-$ production, detectable with universal indicator or phenolphthalein).

**Anode:** Bubbles of greenish-yellow gas with a pungent smell (Cl$_2$).

(c) If Cl$_2$ dissolves in the alkaline solution near the cathode, it disproportionates:

$\mathrm{Cl}_2 + 2\mathrm{OH}^- \to \mathrm{Cl}^- + \mathrm{ClO}^- + \mathrm{H}_2\mathrm{O}$

However, if Cl$_2$ escapes (which it tends to do), the remaining solution contains OH$^-$ and
Unreacted Na$^+$Making it basic, not acidic. The question implies that Cl$_2$ reacts with water:

$\mathrm{Cl}_2 + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{HCl} + \mathrm{HClO}$

This produces HCl (a strong acid), making the solution acidic. In practice, with thorough mixing,
The solution becomes more acidic because Cl$_2$ dissolves and hydrolyses to form HCl and HClO, while
The OH$^-$ at the cathode is consumed by this acid.

</details>

---

## Related Content at Other Levels

- **A-Level Redox and Electrochemistry:**
  [Electrochemistry](https://alevel.wyattau.com/docs/chemistry/electrochemistry)
- **DSE Redox and Electrochemistry:**
  [Redox and Electrochemistry](https://dse.wyattau.com/docs/dse/chemistry/6-redox-and-electrochemistry)

## Summary

This topic covers the essential chemistry of redox reactions, including key reactions, underlying
theories, and practical applications.

**Key concepts include:**

- standard electrode potentials
- electrochemical cells
- electrolysis and Faraday's laws
- corrosion and prevention
- fuel cells

Mastery of these concepts requires both theoretical understanding and the ability to apply knowledge
to unfamiliar contexts, particularly in calculation and practical questions.

## Cross-References

| Topic             | Site | Link                                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------ |
| [Redox Reactions] | IB   | [View](https://ib.wyattau.com/docs/ib/chemistry/9-redox/1_redox-reactions)                                   |
| [Redox Reactions] | DSE  | [View](https://dse.wyattau.com/docs/dse/chemistry/6-redox-and-electrochemistry/1_redox-and-electrochemistry) |

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

