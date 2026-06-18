---
title: Electrochemistry
description: ""s Laws

**First Law:** The mass of substance deposited or liberated at an electrode is directly proportional
to the quantity of electricity passed.

$$
M = \frac◆LB◆Q \cdot M◆RB◆◆LB◆n \cdot F◆RB◆
$$

**Second Law:** When the same quantity of electricity is passed through different electrolytes, the
masses of substances deposited are proportional to their equivalent masses ($M/n$Where $n$ is the
number of electrons transferred per ion).

$$
Q = I \times t
$$

Where $Q$ is charge in Coulombs, $I$ is current in Amperes, and $t$ is time in seconds.

$F = 96485\,\mathrm{C/mol}$ (Faraday constant) -- the charge carried by one mole of electrons.

**Worked Example.** Calculate the mass of copper deposited when a current of $2.50\,\mathrm{A}$ is
passed through $\mathrm{CuSO}_4$ solution for $30.0$ minutes.

$$
Q = 2.50 \times 30.0 \times 60 = 4500\,\mathrm{C}
$$

$$
N(e^-) = \frac{4500}{96485} = 0.0466\,\mathrm{mol}
$$

$$
\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}
$$

$$
N(\mathrm{Cu}) = \frac{0.0466}{2} = 0.0233\,\mathrm{mol}
$$

$$
M(\mathrm{Cu}) = 0.0233 \times 63.5 = 1.48\,\mathrm{g}
$$

Alternatively, using the formula directly:

$$
M = \frac◆LB◆Q \cdot M◆RB◆◆LB◆n \cdot F◆RB◆ = \frac◆LB◆4500 \times 63.5◆RB◆◆LB◆2 \times 96485◆RB◆ = \frac{285750}{192970} = 1.48\,\mathrm{g}
$$

## Corrosion and Its Prevention

### Rusting of Iron

Rusting is an electrochemical process requiring both water and oxygen:

**Anode (oxidation):** $\mathrm{Fe}(s) \to \mathrm{Fe}^{2+}(aq) + 2e^-$

**Cathode (reduction):**
$\mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^- \to 4\mathrm{OH}^-(aq)$

The $\mathrm{Fe}^{2+}$ is further oxidised and reacts with $\mathrm{OH}^-$ to form hydrated
iron(III) oxide (rust).

### Prevention Methods

| Method                     | Principle                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Painting / oiling          | Physical barrier to water and oxygen                                                                        |
| Galvanising (zinc coating) | Zinc acts as a sacrificial anode (more reactive than iron); even if scratched, zinc corrodes preferentially |
| Tin plating                | Physical barrier; if scratched, tin accelerates rusting (tin is less reactive than iron)                    |
| Sacrificial protection     | Attaching blocks of a more reactive metal (e.g. $\mathrm{Mg}$$\mathrm{Zn}$) to the iron structure           |
| Alloying (stainless steel) | Chromium forms a protective oxide layer                                                                     |

## Common Pitfalls

1. **Incorrect sign in the cell EMF formula.**
   $E^\circ_\mathrm{cell} = E^\circ_\mathrm{cathode} - E^\circ_\mathrm{anode}$. Subtracting in the
   wrong order gives a negative value.

2. **Confusing oxidation and reduction at the electrodes.** In electrolysis, the anode is positive
   (oxidation), cathode is negative (reduction). In a galvanic cell, the anode is negative
   (oxidation), cathode is positive (reduction). The signs are reversed.

3. **Forgetting to halve the Faraday calculation for divalent ions.** For $\mathrm{Cu}^{2+}$Two
   moles of electrons deposit one mole of copper.

4. **Incorrect half-equations for aqueous electrolysis.** Students often write the anion oxidation
   instead of water oxidation when the anion is not a halide.

5. **Stating that a reaction "will occur" based only on $E^\circ_\mathrm{cell} \gt 0$.**
   Thermodynamic feasibility does not guarantee kinetic viability. The reaction may be too slow to
   observe.

6. **Confusing $E^\circ_\mathrm{cell}$ with $E^\circ$ of individual half-cells.**
   $E^\circ_\mathrm{cell} = E^\circ_\mathrm{cathode} - E^\circ_\mathrm{anode}$. Always subtract the
   anode potential from the cathode potential.

7. **Forgetting that the SHE is defined at specific conditions.** The standard hydrogen electrode
   operates at $298\,\mathrm{K}$$100\,\mathrm{kPa}$ $\mathrm{H}_2$ pressure, and
   $1.0\,\mathrm{mol/dm}^3$ $\mathrm{H}^+$ concentration. Any deviation requires the Nernst
   equation.

## Electrochemical Series and Predicting Reactions

### Using $E^\circ$ to Predict Spontaneity

A redox reaction is thermodynamically feasible if $E^\circ_\mathrm{cell} \gt 0$ (i.e.
$\Delta G^\circ \lt 0$). However:

1. A positive $E^\circ_\mathrm{cell}$ indicates thermodynamic feasibility, not kinetic likelihood.
   Some reactions with positive $E^\circ_\mathrm{cell}$ are extremely slow (e.g. $\mathrm{H}_2$ +
   $\mathrm{O}_2$ at room temperature).
2. The reaction may require a catalyst, activation energy, or specific conditions to proceed at an
   appreciable rate.
3. Non-standard conditions can reverse the feasibility (use the Nernst equation).

### Disproportionation and Comproportionation

**Disproportionation:** A species in an intermediate oxidation state simultaneously oxidises and
reduces itself:

$$
2\mathrm{Cu}^+(aq) \to \mathrm{Cu}(s) + \mathrm{Cu}^{2+}(aq)
$$

Check feasibility:
$E^\circ_\mathrm{cell} = E^\circ(\mathrm{Cu}^+/\mathrm{Cu}) - E^\circ(\mathrm{Cu}^{2+}/\mathrm{Cu}^+) = 0.52 - 0.15 = +0.37\,\mathrm{V}$.
Spontaneous. $\mathrm{Cu}^+$ disproportionates in aqueous solution.

**Comproportionation:** The reverse of disproportionation. Two species in different oxidation states
react to form a species in an intermediate state:

$$
\mathrm{Fe}(s) + 2\mathrm{Fe}^{3+}(aq) \to 3\mathrm{Fe}^{2+}(aq)
$$

## Standard Electrode Potential Data Table

| Half-equation                                                                                                           | $E^\circ$ (V)          |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| $\mathrm{F}_2 + 2e^- \rightleftharpoons 2\mathrm{F}^-$                                                                  | $+2.87$                |
| $\mathrm{MnO}_4^- + 8\mathrm{H}^+ + 5e^- \rightleftharpoons \mathrm{Mn}^{2+} + 4\mathrm{H}_2\mathrm{O}$                 | $+1.51$                |
| $\mathrm{Cl}_2 + 2e^- \rightleftharpoons 2\mathrm{Cl}^-$                                                                | $+1.36$                |
| $\mathrm{Cr}_2\mathrm{O}_7^{2-} + 14\mathrm{H}^+ + 6e^- \rightleftharpoons 2\mathrm{Cr}^{3+} + 7\mathrm{H}_2\mathrm{O}$ | $+1.33$                |
| $\mathrm{O}_2 + 4\mathrm{H}^+ + 4e^- \rightleftharpoons 2\mathrm{H}_2\mathrm{O}$                                        | $+1.23$                |
| $\mathrm{Br}_2 + 2e^- \rightleftharpoons 2\mathrm{Br}^-$                                                                | $+1.07$                |
| $\mathrm{NO}_3^- + 4\mathrm{H}^+ + 3e^- \rightleftharpoons \mathrm{NO} + 2\mathrm{H}_2\mathrm{O}$                       | $+0.96$                |
| $\mathrm{Ag}^+ + e^- \rightleftharpoons \mathrm{Ag}$                                                                    | $+0.80$                |
| $\mathrm{Fe}^{3+} + e^- \rightleftharpoons \mathrm{Fe}^{2+}$                                                            | $+0.77$                |
| $\mathrm{I}_2 + 2e^- \rightleftharpoons 2\mathrm{I}^-$                                                                  | $+0.54$                |
| $\mathrm{Cu}^+ + e^- \rightleftharpoons \mathrm{Cu}$                                                                    | $+0.52$                |
| $\mathrm{O}_2 + 2\mathrm{H}_2\mathrm{O} + 4e^- \rightleftharpoons 4\mathrm{OH}^-$                                       | $+0.40$                |
| $\mathrm{Cu}^{2+} + 2e^- \rightleftharpoons \mathrm{Cu}$                                                                | $+0.34$                |
| $2\mathrm{H}^+ + 2e^- \rightleftharpoons \mathrm{H}_2$                                                                  | $0.00$ (by definition) |
| $\mathrm{Pb}^{2+} + 2e^- \rightleftharpoons \mathrm{Pb}$                                                                | $-0.13$                |
| $\mathrm{Sn}^{2+} + 2e^- \rightleftharpoons \mathrm{Sn}$                                                                | $-0.14$                |
| $\mathrm{Ni}^{2+} + 2e^- \rightleftharpoons \mathrm{Ni}$                                                                | $-0.25$                |
| $\mathrm{Fe}^{2+} + 2e^- \rightleftharpoons \mathrm{Fe}$                                                                | $-0.44$                |
| $\mathrm{Zn}^{2+} + 2e^- \rightleftharpoons \mathrm{Zn}$                                                                | $-0.76$                |
| $\mathrm{Al}^{3+} + 3e^- \rightleftharpoons \mathrm{Al}$                                                                | $-1.66$                |
| $\mathrm{Mg}^{2+} + 2e^- \rightleftharpoons \mathrm{Mg}$                                                                | $-2.37$                |
| $\mathrm{Na}^+ + e^- \rightleftharpoons \mathrm{Na}$                                                                    | $-2.71$                |
| $\mathrm{Ca}^{2+} + 2e^- \rightleftharpoons \mathrm{Ca}$                                                                | $-2.87$                |
| $\mathrm{K}^+ + e^- \rightleftharpoons \mathrm{K}$                                                                      | $-2.93$                |
| $\mathrm{Li}^+ + e^- \rightleftharpoons \mathrm{Li}$                                                                    | $-3.04$                |

## Electrolysis in Industry

### Extraction of Aluminium (Hall-Heroult Process)

- **Ore:** Bauxite ($\mathrm{Al}_2\mathrm{O}_3$), purified to alumina.
- **Electrolyte:** Molten cryolite ($\mathrm{Na}_3\mathrm{AlF}_6$) at approximately
  $950^\circ\mathrm{C}$. Cryolite lowers the melting point of $\mathrm{Al}_2\mathrm{O}_3$ from
  $2072^\circ\mathrm{C}$ to approximately $950^\circ\mathrm{C}$Making the process economically
  viable.
- **Electrodes:** Carbon (graphite) anode and cathode.

Cathode: $\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}(l)$

Anode: $2\mathrm{O}^{2-} \to \mathrm{O}_2 + 4e^-$

The oxygen reacts with the carbon anode: $\mathrm{C} + \mathrm{O}_2 \to \mathrm{CO}_2$. The anode is
consumed and must be regularly replaced.

### Electroplating

Electroplating deposits a thin layer of a metal onto a conductive surface. The object to be plated
is the cathode, the plating metal is the anode, and the electrolyte contains ions of the plating
metal.

**Example:** Copper plating of a steel spoon.

- Cathode (spoon): $\mathrm{Cu}^{2+}(aq) + 2e^- \to \mathrm{Cu}(s)$
- Anode (copper): $\mathrm{Cu}(s) \to \mathrm{Cu}^{2+}(aq) + 2e^-$
- Electrolyte: $\mathrm{CuSO}_4(aq)$

The concentration of $\mathrm{Cu}^{2+}$ in solution remains constant because the anode dissolves at
the same rate as the cathode deposits copper.

## Practice Problems

<details>
<summary>Problem 1</summary>

Use standard electrode potentials to determine whether $\mathrm{Br}_2$ can oxidise
$\mathrm{Fe}^{2+}$ to $\mathrm{Fe}^{3+}$.

Given: $\mathrm{Br}_2 + 2e^- \rightleftharpoons 2\mathrm{Br}^-$ ($E^\circ = +1.07\,\mathrm{V}$),
$\mathrm{Fe}^{3+} + e^- \rightleftharpoons \mathrm{Fe}^{2+}$ ($E^\circ = +0.77\,\mathrm{V}$).

**Solution:**

$\mathrm{Br}_2$ would be reduced (cathode), $\mathrm{Fe}^{2+}$ would be oxidised (anode).

$$
E^\circ_\mathrm{cell} = 1.07 - 0.77 = +0.30\,\mathrm{V}
$$

Since $E^\circ_\mathrm{cell} \gt 0$The reaction is thermodynamically feasible.

</details>

<details>
<summary>Problem 2</summary>

How long must a current of $5.00\,\mathrm{A}$ pass through molten $\mathrm{Al}_2\mathrm{O}_3$ to
produce $10.0\,\mathrm{g}$ of aluminium?

**Solution:**

$$
\mathrm{Al}^{3+} + 3e^- \to \mathrm{Al}
$$

$$
N(\mathrm{Al}) = \frac{10.0}{27.0} = 0.370\,\mathrm{mol}
$$

$$
N(e^-) = 3 \times 0.370 = 1.111\,\mathrm{mol}
$$

$$
Q = 1.111 \times 96485 = 107,200\,\mathrm{C}
$$

$$
T = \frac{Q}{I} = \frac{107200}{5.00} = 21440\,\mathrm{s} = 357\,\mathrm{minutes} = 5.96\,\mathrm{hours}
$$

</details>

<details>
<summary>Problem 3</summary>

A voltaic cell is constructed from a $\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(aq)$ half-cell and an
$\mathrm{Ag}(s) \mid \mathrm{Ag}^+(aq)$ half-cell. Calculate the standard cell EMF, write the
conventional cell representation, and determine $\Delta G^\circ$.

Given:
$E^\circ(\mathrm{Zn}^{2+}/\mathrm{Zn}) = -0.76\,\mathrm{V}$$E^\circ(\mathrm{Ag}^+/\mathrm{Ag}) = +0.80\,\mathrm{V}$.

**Solution:**

$\mathrm{Zn}$ has the more negative $E^\circ$So it is oxidised (anode). $\mathrm{Ag}^+$ is reduced
(cathode).

$E^\circ_\mathrm{cell} = E^\circ_\mathrm{cathode} - E^\circ_\mathrm{anode} = 0.80 - (-0.76) = +1.56\,\mathrm{V}$

Conventional cell representation:

$$
\mathrm{Zn}(s) \mid \mathrm{Zn}^{2+}(aq) \parallel \mathrm{Ag}^+(aq) \mid \mathrm{Ag}(s)
$$

Half-equations:

Anode: $\mathrm{Zn}(s) \to \mathrm{Zn}^{2+}(aq) + 2e^-$

Cathode: $\mathrm{Ag}^+(aq) + e^- \to \mathrm{Ag}(s)$

Overall (multiplying the cathode equation by 2):
$\mathrm{Zn}(s) + 2\mathrm{Ag}^+(aq) \to \mathrm{Zn}^{2+}(aq) + 2\mathrm{Ag}(s)$

$n = 2$ electrons transferred.

$$
\Delta G^\circ = -nFE^\circ_\mathrm{cell} = -2 \times 96485 \times 1.56 = -301,000\,\mathrm{J/mol} = -301\,\mathrm{kJ/mol}
$$

The large negative $\Delta G^\circ$ confirms that the reaction is strongly spontaneous under
standard conditions.

</details>

<details>
<summary>Problem 4</summary>

In the electrolysis of aqueous $\mathrm{CuSO}_4$ using inert platinum electrodes: (a) Identify the
products at each electrode. (b) Write half-equations. (c) Calculate the volume of gas produced at
the anode when a current of $0.50\,\mathrm{A}$ passes for 1 hour at $298\,\mathrm{K}$ and
$100\,\mathrm{kPa}$.

**Solution:**

(a) At the cathode: $\mathrm{Cu}^{2+}$ is below hydrogen in the reactivity series, so copper is
deposited (not hydrogen). At the anode: $\mathrm{SO}_4^{2-}$ is not a halide, so oxygen is evolved
from water.

(b) Cathode: $\mathrm{Cu}^{2+}(aq) + 2e^- \to \mathrm{Cu}(s)$

Anode: $4\mathrm{OH}^-(aq) \to \mathrm{O}_2(g) + 2\mathrm{H}_2\mathrm{O}(l) + 4e^-$

(c) $Q = 0.50 \times 3600 = 1800\,\mathrm{C}$

$n(e^-) = 1800 / 96485 = 0.01866\,\mathrm{mol}$

From the anode half-equation, 4 moles of electrons produce 1 mole of $\mathrm{O}_2$:

$n(\mathrm{O}_2) = 0.01866 / 4 = 0.00467\,\mathrm{mol}$

Using $pV = nRT$:

$$
V = \frac{nRT}{p} = \frac◆LB◆0.00467 \times 8.314 \times 298◆RB◆◆LB◆100 \times 10^3◆RB◆ = \frac{11.57}{100000} = 1.16 \times 10^{-4}\,\mathrm{m}^3 = 0.116\,\mathrm{dm}^3 = 116\,\mathrm{cm}^3
$$

</details>

<details>
<summary>Problem 5</summary>

A concentration cell is constructed with two $\mathrm{Cu}$ electrodes. One half-cell contains
$\mathrm{Cu}^{2+}$ at $1.00\,\mathrm{mol/dm}^3$ and the other contains $\mathrm{Cu}^{2+}$ at
$0.00100\,\mathrm{mol/dm}^3$ at $298\,\mathrm{K}$.

(a) Write the conventional cell representation. (b) Calculate $E_\mathrm{cell}$ using the Nernst
equation. (c) Identify the anode and cathode and explain the direction of electron flow.

**Solution:**

(a)

$$
\mathrm{Cu}(s) \mid \mathrm{Cu}^{2+}(0.00100\,\mathrm{mol/dm}^3) \parallel \mathrm{Cu}^{2+}(1.00\,\mathrm{mol/dm}^3) \mid \mathrm{Cu}(s)
$$

(b) The overall reaction is:

$$
\mathrm{Cu}^{2+}(\text{concentrated}) + \mathrm{Cu}(s) \rightleftharpoons \mathrm{Cu}(s) + \mathrm{Cu}^{2+}(\text{dilute})
$$

Using the Nernst equation:

$$
E_\mathrm{cell} = E^\circ_\mathrm{cell} - \frac{RT}{nF}\ln Q = 0 - \frac{RT}{2F}\ln\frac◆LB◆[\mathrm{Cu}^{2+}]_\mathrm{dilute}◆RB◆◆LB◆[\mathrm{Cu}^{2+}]_\mathrm{concentrated}◆RB◆
$$

$$
E_\mathrm{cell} = -\frac{0.02569}{2}\ln\frac{0.00100}{1.00} = -0.01285 \times \ln(10^{-3}) = -0.01285 \times (-6.908) = +0.0888\,\mathrm{V}
$$

(c) The half-cell with the lower concentration ($0.00100\,\mathrm{mol/dm}^3$) is the anode
(oxidation: $\mathrm{Cu} \to \mathrm{Cu}^{2+} + 2e^-$). The half-cell with the higher concentration
($1.00\,\mathrm{mol/dm}^3$) is the cathode (reduction: $\mathrm{Cu}^{2+} + 2e^- \to \mathrm{Cu}$).
Electrons flow from the dilute side (anode) to the concentrated side (cathode).

</details>

<details>
<summary>Problem 6</summary>

In the electrolysis of molten $\mathrm{NaCl}$A current of $2.00\,\mathrm{A}$ is passed for 2.00
hours. Calculate: (a) The mass of sodium produced at the cathode. (b) The volume of chlorine gas
produced at the anode at $298\,\mathrm{K}$ and $100\,\mathrm{kPa}$.

**Solution:**

(a) Cathode: $\mathrm{Na}^+ + e^- \to \mathrm{Na}(l)$. $n = 1$.

$Q = It = 2.00 \times 7200 = 14400\,\mathrm{C}$

$n(e^-) = 14400/96485 = 0.1493\,\mathrm{mol}$

$n(\mathrm{Na}) = 0.1493\,\mathrm{mol}$ (1 electron per Na atom)

$m(\mathrm{Na}) = 0.1493 \times 22.99 = 3.43\,\mathrm{g}$

(b) Anode: $2\mathrm{Cl}^- \to \mathrm{Cl}_2 + 2e^-$. $n = 2$.

$n(\mathrm{Cl}_2) = 0.1493/2 = 0.0747\,\mathrm{mol}$

$V = nRT/p = 0.0747 \times 8.314 \times 298 / (100 \times 10^3) = 1.85 \times 10^{-3}\,\mathrm{m}^3 = 1.85\,\mathrm{dm}^3$

</details>

## Advanced Electrochemistry

### Standard Electrode Potentials and Feasibility

The standard electrode potential of a cell indicates whether a redox reaction is feasible:

$$E^\circ_\mathrm{cell} = E^\circ_\mathrm{cathode} - E^\circ_\mathrm{anode}$$

If $E^\circ_\mathrm{cell} > +0.27\,\mathrm{V}$The reaction is considered thermodynamically feasible
(proceeds to a significant extent) under standard conditions. If
$E^\circ_\mathrm{cell} < +0.27\mathrm{V}$The equilibrium lies to the left and the reaction does not
proceed significantly.

### Worked Example: Predicting Redox Reactions

Will $\mathrm{Zn}$ displace $\mathrm{Cu}$ from $\mathrm{CuSO}_4$ solution?

Half-equations:

- $\mathrm{Zn}^{2+} + 2e^- \rightleftharpoons \mathrm{Zn}$, $E^\circ = -0.76\,\mathrm{V}$
- $\mathrm{Cu}^{2+} + 2e^- \rightleftharpoons \mathrm{Cu}$, $E^\circ = +0.34\mathrm{V}$

Zinc is the more reactive metal (more negative $E^\circ$), so it will be oxidised (anode). Copper
ions will be reduced (cathode).

$$E^\circ_\mathrm{cell} = 0.34 - (-0.76) = +1.10\,\mathrm{V}$$

Since $E^\circ_\mathrm{cell} > +0.27\,\mathrm{V}$The reaction is feasible:

$$\mathrm{Zn}(s) + \mathrm{Cu}^{2+}(aq) \to \mathrm{Zn}^{2+}(aq) + \mathrm{Cu}(s)$$

### Worked Example: Non-Standard Conditions (Nernst Equation)

The Nernst equation calculates the cell potential under non-standard conditions:

$$E = E^\circ - \frac{RT}{nF}\ln Q$$

Where $Q$ is the reaction quotient.

**Calculate the cell potential for
$\mathrm{Zn}|\mathrm{Zn}^{2+}(0.010\,\mathrm{mol\,dm^{-3})||\mathrm{Cu}^{2+}(0.001\,\mathrm{mol\,dm^{-3})|\mathrm{Cu}$
at $298\,\mathrm{K}$.**

$$E^\circ_\mathrm{cell} = 0.34 - (-0.76) = 1.10\,\mathrm{V}$$

$$Q = \frac◆LB◆[\mathrm{Cu}^{2+}]◆RB◆◆LB◆[\mathrm{Zn}^{+}]◆RB◆ = \frac{0.001}{0.010} = 0.10$$

$$E = 1.10 - \frac◆LB◆8.314 \times 298◆RB◆◆LB◆2 \times 96485◆RB◆\ln(0.10)$$

$$= 1.10 - \frac{2478}{192970}\ln(0.10)$$

$$= 1.10 - 0.01284 \times (-2.303)$$

$$= 1.10 + 0.0296 = 1.13\,\mathrm{V}$$

The cell potential is slightly higher than $E^\circ$ because the lower product concentration
([Cu2+]) drives the reaction further to the right.

### Storage Cells and Fuel Cells

**Lead-acid accumulator:**

- Anode (discharge):
  $\mathrm{Pb}(s) + \mathrm{SO}_4^{2-}(aq) \rightleftharpoons \mathrm{PbSO}_4(s) + 2e^-$,
  $E^\circ = -0.36\,\mathrm{V}$
- Cathode (discharge):
  $\mathrm{PbO}_2(s) + \mathrm{SO}_4^{2-}(aq) + 4\mathrm{H}^+(aq) + 2e^- \rightleftharpoons \mathrm{PbSO}_4(s) + 2\mathrm{H}_2\mathrm{O}(l)$,
  $E^\circ = +1.69\mathrm{V}$

$E^\circ_\mathrm{cell} = 1.69 - (-0.36) = 2.05\,\mathrm{V}$

During charging, the reactions are reversed.

**Hydrogen fuel cell:**

- Anode: $2\mathrm{H}_2 + 2\mathrm{H}_2\mathrm{O} \to 4\mathrm{H}^+ + 4e^-$
- Cathode: $\mathrm{O}_2 + 4\mathrm{H}^+ + 4e^- \to 2\mathrm{H}_2\mathrm{O}$

Overall: $2\mathrm{H}_2 + \mathrm{O}_2 \to 2\mathrm{H}_2\mathrm{O}$

$E^\circ_\mathrm{cell} = 1.23\,\mathrm{V}$ (theoretical). Practical voltage is lower due to
overpotentials and internal resistance.

### Electrolysis: Quantitative Analysis

**Worked Example:** How long does it take to deposit $0.500\,\mathrm{g}$ of nickel from
$\mathrm{NiSO}_4$ solution using a current of $2.50\,\mathrm{A}$?

$$\mathrm{Ni}^{2+} + 2e^- \to \mathrm{Ni}$$

$$n(\mathrm{Ni}) = \frac{m}{M} = \frac{0.500}{58.69} = 0.00852\,\mathrm{mol}$$

$$Q = n \times z \times F = 0.00852 \times 2 \times 96485 = 1643\,\mathrm{C}$$

$$t = \frac{Q}{I} = \frac{1643}{2.50} = 657\,\mathrm{s} = 11.0\,\mathrm{min}$$

### Electrochemical Series and Displacement Reactions

The electrochemical series arranges species in order of their standard electrode potentials:

| Species                        | $E^\circ$ (V) |
| ------------------------------ | ------------- |
| $\mathrm{Li}^+/\mathrm{Li}$    | $-3.03$       |
| $\mathrm{K}^+/\mathrm{K}$      | $-2.93$       |
| $\mathrm{Na}^+/\mathrm{Na}$    | $-2.71$       |
| $\mathrm{Mg}^{2+}/\mathrm{Mg}$ | $-2.37$       |
| $\mathrm{Al}^{3+}/\mathrm{Al}$ | $-1.66$       |
| $\mathrm{Zn}^{2+}/\mathrm{Zn}$ | $-0.76$       |
| $\mathrm{Fe}^{2+}/\mathrm{Fe}$ | $-0.44$       |
| $\mathrm{Ni}^{2+}/\mathrm{Ni}$ | $-0.25$       |
| $\mathrm{Sn}^{2+}/\mathrm{Sn}$ | $-0.14$       |
| $\mathrm{Pb}^{2+}/\mathrm{Pb}$ | $-0.13$       |
| $2\mathrm{H}^+/\mathrm{H}_2$   | $0.00$        |
| $\mathrm{Cu}^{2+}/\mathrm{Cu}$ | $+0.34$       |
| $\mathrm{I}_2/\mathrm{I}^-$    | $+0.54$       |
| $\mathrm{Ag}^+/\mathrm{Ag}$    | $+0.80$       |
| $\mathrm{Br}_2/\mathrm{Br}^-$  | $+1.07$       |
| $\mathrm{Cl}_2/\mathrm{Cl}^-$  | $+1.36$       |
| $\mathrm{F}_2/\mathrm{F}^-$    | $+2.87$       |

A species will reduce any species below it in the series (more negative $E^\circ$). A species will
be oxidised by any species above it (more positive $E^\circ$).

## Exam-Style Questions with Full Mark Schemes

<details>
<summary>Q1 (5 marks)</summary>

A voltaic cell is constructed using the half-cells $\mathrm{Fe}^{2+}|\mathrm{Fe}$
($E^\circ = -0.44\,\mathrm{V}$) and $\mathrm{Ag}^+|\mathrm{Ag}$ ($E^\circ = +0.80\,\mathrm{V}$).

(a) Write the overall cell equation. (2 marks)

(b) Calculate $E^\circ_\mathrm{cell}$. (1 mark)

(c) Identify the anode and cathode. (2 marks)

**Mark Scheme:**

(a) $\mathrm{Fe}(s) + 2\mathrm{Ag}^+(aq) \to \mathrm{Fe}^{2+}(aq) + 2\mathrm{Ag}(s)$ (1 mark for
correct equation, 1 mark for balancing).

(b) $E^\circ_\mathrm{cell} = 0.80 - (-0.44) = +1.24\,\mathrm{V}$ (1 mark).

(c) Anode = Fe electrode (oxidation occurs; Fe is oxidised to $\mathrm{Fe}^{2+}$) (1 mark). Cathode
= Ag electrode (reduction occurs; $\mathrm{Ag}^+$ is reduced to Ag) (1 mark).

</details>

<details>
<summary>Q2 (6 marks)</summary>

In the electrolysis of molten $\mathrm{PbBr}_2$ using inert electrodes:

(a) Write the half-equations at each electrode. (2 marks)

(b) Explain why the electrolyte must be molten rather than aqueous. (2 marks)

(c) Calculate the volume of bromine gas produced at the anode when a current of $0.500\,\mathrm{A}$
is passed for 30.0 minutes at $298\,\mathrm{K}$ and $101\,\mathrm{kPa}$. (2 marks)

**Mark Scheme:**

(a) Cathode: $\mathrm{Pb}^{2+} + 2e^- \to \mathrm{Pb}(l)$ (1 mark). Anode:
$2\mathrm{Br}^- \to \mathrm{Br}_2(g) + 2e^-$ (1 mark).

(b) In aqueous solution, water would be preferentially discharged at the cathode ($\mathrm{H}^+$ is
reduced before $\mathrm{Pb}^{2+}$) and at the anode ($\mathrm{OH}^-$ is oxidised before
$\mathrm{Br}^-$ in dilute solution). Molten $\mathrm{PbBr}_2$ ensures only $\mathrm{Pb}^{2+}$ and
$\mathrm{Br}^-$ ions are present (1 mark).

(c) $Q = It = 0.500 \times 1800 = 900\,\mathrm{C}$ (0.5 mark).
$n(e^-) = 900/96485 = 0.00933\,\mathrm{mol}$ (0.5 marks).
$n(\mathrm{Br}_2) = 0.00933/2 = 0.00467\,\mathrm{mol}$ (0.5 marks).
$V = nRT/p = 0.00467 \times 8.314 \times 298 / 101000 = 0.114\,\mathrm{dm}^3 = 114\,\mathrm{cm}^3$
(0.5 marks).

</details>

<details>
<summary>Q3 (4 marks)</summary>

State and explain two differences between a primary cell and a secondary cell.

**Mark Scheme:**

1. A primary cell is not rechargeable; a secondary cell is rechargeable (1 mark). Primary cells
   produce electricity from irreversible chemical reactions; secondary cells can have the reactions
   reversed by applying an external voltage (1 mark).

2. Primary cells have a limited lifetime (until the reactants are consumed); secondary cells can be
   recharged many times (1 mark). Secondary cells are more expensive initially but more
   cost-effective over their lifetime (1 mark).

</details>

---

:::tip Diagnostic Test Ready to test your understanding of **Electrochemistry**? The contains the hardest
questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine
Electrochemistry with other chemistry topics to test synthesis under exam conditions.

See for instructions on
self-marking and building a personal test matrix.

## Summary

This topic covers the essential chemistry of electrochemistry, including key reactions, underlying
theories, and practical applications.

**Key concepts include:**

- standard electrode potentials
- electrochemical cells
- electrolysis and Faraday"s laws
- corrosion and prevention
- fuel cells

Mastery of these concepts requires both theoretical understanding and the ability to apply knowledge
to unfamiliar contexts, particularly in calculation and practical questions.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

:::
