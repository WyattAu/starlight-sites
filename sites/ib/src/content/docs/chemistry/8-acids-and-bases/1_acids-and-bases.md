---
title: Acids and Bases
description: ""s
Effectiveness.

</details>

<details>
<summary>Worked Example 8: Preparing a Buffer</summary>

What mass of sodium acetate (CH$_3$COONa, $M_r = 82.0\mathrm{ g/mol}$) must be added to
$1.00\mathrm{ L}$ of $0.100\mathrm{ mol/L}$ CH$_3$COOH to produce a buffer with pH = 5.00?
($K_a = 1.8 \times 10^{-5}$)

Using the Henderson-Hasselbalch equation:

$$
5.00 = 4.74 + \log\frac{[\mathrm{CH}_3\mathrm{COO}^-]}{0.100}
$$

$$
\log\frac{[\mathrm{CH}_3\mathrm{COO}^-]}{0.100} = 0.26
$$

$$
\frac{[\mathrm{CH}_3\mathrm{COO}^-]}{0.100} = 10^{0.26} = 1.82
$$

$$
[\mathrm{CH}_3\mathrm{COO}^-] = 0.182\mathrm{ mol/L}
$$

In $1.00\mathrm{ L}$:

$$
N(\mathrm{CH}_3\mathrm{COONa}) = 0.182\mathrm{ mol}
$$

$$
M = n \times M_r = 0.182 \times 82.0 = 14.9\mathrm{ g}
$$

</details>

---

## Acid-Base Titrations

### Titration Calculations

At the equivalence point, moles of acid = moles of base.

**Strong acid -- strong base:**

$$
\mathrm{H}^+ + \mathrm{OH}^- \to \mathrm{H}_2\mathrm{O}
$$

PH at equivalence point = 7 (neutral salt).

**Weak acid -- strong base:**

$$
\mathrm{HA} + \mathrm{OH}^- \to \mathrm{A}^- + \mathrm{H}_2\mathrm{O}
$$

The conjugate base A$^-$ hydrolyses:

$$
\mathrm{A}^- + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{HA} + \mathrm{OH}^-
$$

PH at equivalence point \gt 7.

**Strong acid -- weak base:**

$$
\mathrm{H}^+ + \mathrm{B} \to \mathrm{BH}^+
$$

The conjugate acid BH$^+$ hydrolyses:

$$
\mathrm{BH}^+ + \mathrm{H}_2\mathrm{O} \rightleftharpoons \mathrm{B} + \mathrm{H}_3\mathrm{O}^+
$$

PH at equivalence point \lt 7.

<details>
<summary>Worked Example 9: Titration of Weak Acid with Strong Base</summary>

$25.0\mathrm{ mL}$ of $0.100\mathrm{ mol/L}$ CH$_3$COOH ($K_a = 1.8 \times 10^{-5}$) is titrated
With $0.100\mathrm{ mol/L}$ NaOH. Calculate the pH at the equivalence point.

At the equivalence point, moles of NaOH = moles of CH$_3$COOH:

$$
N = 0.100 \times 0.0250 = 0.00250\mathrm{ mol}
$$

Volume of NaOH required:

$$
V = \frac{0.00250}{0.100} = 0.0250\mathrm{ L} = 25.0\mathrm{ mL}
$$

Total volume at equivalence point: $25.0 + 25.0 = 50.0\mathrm{ mL} = 0.0500\mathrm{ L}$.

All CH$_3$COOH has been converted to CH$_3$COO$^-$:

$$
[\mathrm{CH}_3\mathrm{COO}^-] = \frac{0.00250}{0.0500} = 0.0500\mathrm{ mol/L}
$$

The acetate ion hydrolyses:

$$
K_b = \frac{K_w}{K_a} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

$$
[\mathrm{OH}^-] = \sqrt{K_b \times [\mathrm{CH}_3\mathrm{COO}^-]} = \sqrt{5.56 \times 10^{-10} \times 0.0500}
$$

$$
[\mathrm{OH}^-] = \sqrt{2.78 \times 10^{-11}} = 5.27 \times 10^{-6}\mathrm{ mol/L}
$$

$$
\mathrm{pOH} = -\log(5.27 \times 10^{-6}) = 5.28
$$

$$
\mathrm{pH} = 14 - 5.28 = 8.72
$$

</details>

<details>
<summary>Worked Example 10: pH at Half-Equivalence Point</summary>

Using the titration from Worked Example 9, calculate the pH when $12.5\mathrm{ mL}$ of NaOH has been
Added (half-equivalence point).

At half-equivalence point, half the acid has been neutralised:

$$
N(\mathrm{NaOH}) = 0.100 \times 0.0125 = 0.00125\mathrm{ mol}
$$

Moles of CH$_3$COOH remaining: $0.00250 - 0.00125 = 0.00125\mathrm{ mol}$

Moles of CH$_3$COO$^-$ formed: $0.00125\mathrm{ mol}$

Since $[\mathrm{HA}] = [\mathrm{A}^-]$:

$$
\mathrm{pH} = \mathrm{p}K_a = -\log(1.8 \times 10^{-5}) = 4.74
$$

This is a general result: at the half-equivalence point, $\mathrm{pH} = \mathrm{p}K_a$.

</details>

---

## Common Pitfalls

1. **Strong vs weak acid pH:** A $0.10\mathrm{ mol/L}$ strong acid has pH = 1.0, but a
   $0.10\mathrm{ mol/L}$ weak acid has pH \gt 1.0 ( 2--3) because it only partially dissociates. Do
   not assume $[\mathrm{H}^+] = c$ for weak acids.

2. **Diprotic acid contribution:** H$_2$SO$_4$ gives 2 H$^+$ per molecule, but H$_2$CO$_3$ does not
   give 2 H$^+$ at normal concentrations because $K_{a2}$ is very small. Only the first dissociation
   contributes significantly.

3. **pH + pOH = 14 only at $25\degree\mathrm{C}$:** At other temperatures, use the actual $K_w$
   value. $\mathrm{pH} + \mathrm{pOH} = \mathrm{p}K_w$.

4. **Buffer range:** A buffer is only effective within $\pm 1$ pH unit of its p$K_a$. Outside this
   range, the buffer capacity is essentially zero.

5. **Equivalence point pH:** For weak acid -- strong base titrations, the equivalence point pH is
   \gt 7, not 7. For strong acid -- weak base, it is \lt 7.

6. **Henderson-Hasselbalch validity:** The equation assumes that the concentrations of HA and A$^-$
   are much larger than $[\mathrm{H}^+]$ and $[\mathrm{OH}^-]$. It is not valid for very dilute
   solutions.

7. **Neutral pH:** Neutral means $[\mathrm{H}^+] = [\mathrm{OH}^-]$Which equals pH = 7 only at
   $25\degree\mathrm{C}$. At $50\degree\mathrm{C}$Neutral pH is approximately 6.63.

8. **$K_a$ and $K_b$ relationship:** Remember $K_a \times K_b = K_w$. This connects a conjugate
   acid-base pair. The conjugate base of a weak acid has a calculable $K_b$.

9. **Titration indicator choice:** Methyl orange (3.1--4.4) is suitable for strong acid -- weak base
   titrations (equivalence pH \lt 7). Phenolphthalein (8.3--10.0) is suitable for weak acid --
   strong base (equivalence pH \gt 7). Do not use methyl orange for weak acid -- strong base.

10. **Units in Ka/Kb:** Concentrations in $K_a$ and $K_b$ expressions are in mol/L. The units of
    $K_a$ and $K_b$ are mol/L. $K_w$ has units of mol$^2$/L$^2$.

---

## Practice Problems

<details>
<summary>Question 1: Strong Acid/Base pH</summary>

(a) Calculate the pH of $0.0030\mathrm{ mol/L}$ HNO$_3$.

(b) Calculate the pH of $0.0025\mathrm{ mol/L}$ Ca(OH)$_2$ at $25\degree\mathrm{C}$.

(c) A solution has pH = 3.40. What is $[\mathrm{H}^+]$?

Answer:

(a) HNO$_3$ is a strong monoprotic acid:

$$
[\mathrm{H}^+] = 0.0030\mathrm{ mol/L}
$$

$$
\mathrm{pH} = -\log(3.0 \times 10^{-3}) = 3 - \log 3.0 = 3 - 0.477 = 2.52
$$

(b) Ca(OH)$_2$ is a strong base giving 2 OH$^-$ per formula unit:

$$
[\mathrm{OH}^-] = 2 \times 0.0025 = 0.0050\mathrm{ mol/L}
$$

$$
\mathrm{pOH} = -\log(5.0 \times 10^{-3}) = 3 - \log 5.0 = 3 - 0.699 = 2.30
$$

$$
\mathrm{pH} = 14 - 2.30 = 11.70
$$

(c)

$$
[\mathrm{H}^+] = 10^{-\mathrm{pH}} = 10^{-3.40} = 3.98 \times 10^{-4}\mathrm{ mol/L}
$$

</details>

<details>
<summary>Question 2: Weak Acid pH and Degree of Dissociation</summary>

Hypochlorous acid (HOCl) has $K_a = 3.5 \times 10^{-8}$.

(a) Calculate the pH of $0.050\mathrm{ mol/L}$ HOCl.

(b) Calculate the percentage dissociation of HOCl at this concentration.

Answer:

(a)

$$
\mathrm{HOCl} \rightleftharpoons \mathrm{H}^+ + \mathrm{OCl}^-
$$

$$
K_a = \frac{x^2}{0.050} = 3.5 \times 10^{-8}
$$

$$
X^2 = 1.75 \times 10^{-9}
$$

$$
X = 4.18 \times 10^{-5}\mathrm{ mol/L}
$$

$$
\mathrm{pH} = -\log(4.18 \times 10^{-5}) = 4.38
$$

(b)

$$
\mathrm{Percentage dissociation} = \frac{4.18 \times 10^{-5}}{0.050} \times 100\% = 0.084\%
$$

</details>

<details>
<summary>Question 3: Conjugate Pairs and Ka/Kb</summary>

(a) The $K_b$ of NH$_3$ is $1.8 \times 10^{-5}$. Calculate $K_a$ for NH$_4^+$.

(b) Is NH$_4^+$ acidic, basic, or neutral in aqueous solution? Explain.

Answer:

(a)

$$
K_a(\mathrm{NH}_4^+) = \frac{K_w}{K_b(\mathrm{NH}_3)} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

(b) NH$_4^+$ is the conjugate acid of the weak base NH$_3$. Since NH$_3$ is a weak base, its
Conjugate acid NH$_4^+$ will donate protons in water, making the solution acidic. This is confirmed
By the relatively large $K_a$ value ($5.56 \times 10^{-10} \gg K_b$ of NH$_4^+$ which would be
$K_w/K_a = 1.8 \times 10^{-5}$But wait -- we already have $K_a$ for NH$_4^+$So we can see it is An
acid). A $0.1\mathrm{ mol/L}$ NH$_4$Cl solution would have pH \lt 7.

</details>

<details>
<summary>Question 4: Buffer Preparation and pH Change</summary>

A buffer is prepared by mixing $0.150\mathrm{ mol/L}$ HCOOH ($K_a = 1.8 \times 10^{-4}$
P$K_a = 3.74$) with $0.100\mathrm{ mol/L}$ HCOONa in equal volumes.

(a) Calculate the pH of the buffer.

(b) To $100\mathrm{ mL}$ of this buffer, $5.0\mathrm{ mL}$ of $0.100\mathrm{ mol/L}$ NaOH is added.
Calculate the new pH.

Answer:

(a) Equal volumes of $0.150$ and $0.100\mathrm{ mol/L}$ give concentrations of $0.0750$ and
$0.0500\mathrm{ mol/L}$ respectively:

$$
\mathrm{pH} = 3.74 + \log\frac{0.0500}{0.0750} = 3.74 + \log(0.667) = 3.74 + (-0.176) = 3.56
$$

(b) Moles in $100\mathrm{ mL}$ of buffer:

- $n(\mathrm{HCOOH}) = 0.0750 \times 0.100 = 0.00750\mathrm{ mol}$
- $n(\mathrm{HCOO}^-) = 0.0500 \times 0.100 = 0.00500\mathrm{ mol}$

Moles of NaOH added: $n = 0.100 \times 0.0050 = 0.000500\mathrm{ mol}$

After reaction:

- $n(\mathrm{HCOOH}) = 0.00750 - 0.000500 = 0.00700\mathrm{ mol}$
- $n(\mathrm{HCOO}^-) = 0.00500 + 0.000500 = 0.00550\mathrm{ mol}$

$$
\mathrm{pH} = 3.74 + \log\frac{0.00550}{0.00700} = 3.74 + \log(0.786) = 3.74 + (-0.105) = 3.64
$$

</details>

<details>
<summary>Question 5: Titration Curve Analysis (Paper 2 Style)</summary>

$20.0\mathrm{ mL}$ of $0.100\mathrm{ mol/L}$ NH$_3$ ($K_b = 1.8 \times 10^{-5}$) is titrated with
$0.100\mathrm{ mol/L}$ HCl.

(a) Calculate the pH at the equivalence point.

(b) State and explain which indicator would be most suitable for this titration.

(c) Calculate the pH when $10.0\mathrm{ mL}$ of HCl has been added (half-equivalence point).

Answer:

(a) At equivalence point, moles of HCl = moles of NH$_3$:

$$
N = 0.100 \times 0.0200 = 0.00200\mathrm{ mol}
$$

Volume of HCl: $V = 0.00200 / 0.100 = 0.0200\mathrm{ L} = 20.0\mathrm{ mL}$.

Total volume: $20.0 + 20.0 = 40.0\mathrm{ mL} = 0.0400\mathrm{ L}$.

All NH$_3$ is converted to NH$_4^+$:

$$
[\mathrm{NH}_4^+] = \frac{0.00200}{0.0400} = 0.0500\mathrm{ mol/L}
$$

$$
K_a(\mathrm{NH}_4^+) = \frac{K_w}{K_b} = \frac{1.0 \times 10^{-14}}{1.8 \times 10^{-5}} = 5.56 \times 10^{-10}
$$

$$
[\mathrm{H}^+] = \sqrt{K_a \times [\mathrm{NH}_4^+]} = \sqrt{5.56 \times 10^{-10} \times 0.0500}
$$

$$
[\mathrm{H}^+] = \sqrt{2.78 \times 10^{-11}} = 5.27 \times 10^{-6}\mathrm{ mol/L}
$$

$$
\mathrm{pH} = -\log(5.27 \times 10^{-6}) = 5.28
$$

(b) The equivalence point pH is 5.28, which falls within the transition range of **methyl orange**
(3.1--4.4) only partially. A better choice would be **bromocresol green** (3.8--5.4) or **methyl
Red** (4.4--6.2), which has a transition range that includes pH 5.28. From the common indicators
Listed in the IB syllabus, methyl orange is the closest suitable indicator for a strong acid -- weak
Base titration.

(c) At the half-equivalence point, $[\mathrm{NH}_3] = [\mathrm{NH}_4^+]$So:

$$
\mathrm{pH} = \mathrm{p}K_a(\mathrm{NH}_4^+) = 14 - \mathrm{p}K_b = 14 - (-\log(1.8 \times 10^{-5}))
$$

$$
\mathrm{pH} = 14 - 4.74 = 9.26
$$

</details>

<details>
<summary>Question 6: Polyprotic Acid (Paper 2 Style)</summary>

Calculate the pH of a $0.100\mathrm{ mol/L}$ H$_3$PO$_4$ solution. Use the following data:
$K_{a1} = 7.5 \times 10^{-3}$$K_{a2} = 6.2 \times 10^{-8}$$K_{a3} = 4.2 \times 10^{-13}$.

Answer:

For the first dissociation:

$$
\mathrm{H}_3\mathrm{PO}_4 \rightleftharpoons \mathrm{H}^+ + \mathrm{H}_2\mathrm{PO}_4^-
$$

Since $K_{a1}$ is not very small compared to $c$The approximation $c - x \approx c$ may not be
Valid. Check: $K_{a1}/c = 7.5 \times 10^{-3}/0.100 = 0.075 \gt 0.05$. The $5\%$ rule fails.

Solve the quadratic: $x^2 + K_a x - K_a \cdot c = 0$

$$
X^2 + 7.5 \times 10^{-3}x - 7.5 \times 10^{-4} = 0
$$

$$
X = \frac{-7.5 \times 10^{-3} + \sqrt{(7.5 \times 10^{-3})^2 + 4 \times 7.5 \times 10^{-4}}}{2}
$$

$$
X = \frac{-7.5 \times 10^{-3} + \sqrt{5.625 \times 10^{-5} + 3.0 \times 10^{-3}}}{2}
$$

$$
X = \frac{-7.5 \times 10^{-3} + \sqrt{3.056 \times 10^{-3}}}{2}
$$

$$
X = \frac{-7.5 \times 10^{-3} + 5.528 \times 10^{-2}}{2} = \frac{4.778 \times 10^{-2}}{2} = 2.389 \times 10^{-2}
$$

$$
[\mathrm{H}^+] \approx 0.0239\mathrm{ mol/L}
$$

$$
\mathrm{pH} = -\log(0.0239) = 1.62
$$

Note: The second and third dissociations contribute negligible H$^+$ since $K_{a2} \ll K_{a1}$.

</details>

---

## Related Content at Other Levels

- **A-Level Acids, Bases & Buffers:**
  [Acids, Bases & Buffers](https://alevel.wyattau.com/docs/chemistry/acids-bases)
- **DSE Acids, Bases, and Salts:**
  [Acids, Bases, and Salts](https://dse.wyattau.com/docs/dse/chemistry/5-acids-bases)

## Summary

This topic covers the essential chemistry of acids and bases, including key reactions, underlying
theories, and practical applications.

**Key concepts include:**

- Brønsted-Lowry theory
- strong and weak acids/bases
- pH calculations
- titration curves and indicators
- hydrolysis of salts

Mastery of these concepts requires both theoretical understanding and the ability to apply knowledge
to unfamiliar contexts, particularly in calculation and practical questions.

## Cross-References

| Topic             | Site    | Link                                                                                                |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------- |
| [Acids and Bases] | A-Level | [View](https://alevel-sciences.wyattau.com/docs/alevel/chemistry/acids-bases)                       |
| [Acids and Bases] | IB      | [View](https://ib.wyattau.com/docs/ib/chemistry/8-acids-and-bases/1_acids-and-bases)                |
| [Acids and Bases] | DSE     | [View](https://dse.wyattau.com/docs/dse/chemistry/5-acids-bases/1_acids-bases-and-electrochemistry) |

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

