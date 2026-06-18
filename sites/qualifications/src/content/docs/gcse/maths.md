---
title: GCSE Maths Study Guide
date: 2026-05-31
description: "" Theorem

In a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two
sides.

$$a^2 + b^2 = c^2$$

where $c$ is the hypotenuse.

### 3.4 Trigonometry — SOH CAH TOA

$$\sin \theta = \frac{\text{opposite}}{\text{hypotenuse}} \qquad \cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}} \qquad \tan \theta = \frac{\text{opposite}}{\text{adjacent}}$$

**Sine rule (non-right-angled triangles):**

$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$$

Use when you know an angle and its opposite side.

**Cosine rule:**

$$a^2 = b^2 + c^2 - 2bc \cos A$$

Use when you know two sides and the included angle, or all three sides.

**Area of a triangle:**

$$\text{Area} = \frac{1}{2}ab \sin C$$

### 3.5 Transformations

| Transformation | Description |
|---|---|
| **Translation** | Movement by a vector $\begin{pmatrix} x \\ y \end{pmatrix}$ |
| **Rotation** | Turn about a centre by a given angle and direction |
| **Reflection** | Mirror image across a given line of symmetry |
| **Enlargement** | Scale factor $k$ from a centre of enlargement; lengths multiply by $k$, areas by $k^2$, volumes by $k^3$ |

### 3.6 Vectors

A vector has both magnitude and direction.

$$\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$$

**Magnitude:** $|\mathbf{a}| = \sqrt{3^2 + 4^2} = 5$

**Addition:** $\begin{pmatrix} a \\ b \end{pmatrix} + \begin{pmatrix} c \\ d \end{pmatrix} = \begin{pmatrix} a + c \\ b + d \end{pmatrix}$

**Scalar multiplication:** $k\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} ka \\ kb \end{pmatrix}$

**Column vector travel:** $\mathbf{AB}$ represents the vector from point $A$ to point $B$.
$\mathbf{AB} = \mathbf{OB} - \mathbf{OA}$.

---

## 4. Statistics

### 4.1 Averages

| Measure | Definition |
|---|---|
| **Mean** | $\bar{x} = \frac{\text{sum of values}}{\text{number of values}}$ |
| **Median** | The middle value when data is arranged in order |
| **Mode** | The most common value |
| **Range** | $\text{largest value} - \text{smallest value}$ |

### 4.2 Grouped Data

For grouped frequency tables, use the midpoint of each class as an estimate:

$$\text{Estimated mean} = \frac{\sum f \times m}{\sum f}$$

where $f$ is the frequency and $m$ is the class midpoint.

### 4.3 Frequency Tables and Charts

- **Frequency polygon:** Plot the midpoint of each class against its frequency, join with straight lines.
- **Bar chart:** Height of each bar represents the frequency; gaps between bars for discrete data, no gaps for continuous data.

### 4.4 Scatter Graphs

- Points plotted to show the relationship between two variables.
- **Correlation:** Positive, negative, or none.
- **Line of best fit:** Drawn by eye, passing through as many points as possible with equal numbers on each side.
- **Interpolation:** Reading values within the data range (reliable).
- **Extrapolation:** Reading values outside the data range (unreliable).

### 4.5 Cumulative Frequency

- **Cumulative frequency:** The running total of frequencies.
- Plot cumulative frequency against the upper class boundary.
- **Median:** Read off at 50% of the total frequency.
- **Lower quartile ($Q_1$):** 25% of the total frequency.
- **Upper quartile ($Q_3$):** 75% of the total frequency.
- **Interquartile range (IQR):** $Q_3 - Q_1$.

### 4.6 Box Plots

A box plot displays five key values: minimum, $Q_1$, median, $Q_3$, maximum.

```
min |----[ Q1 | median | Q3 ]----| max
```

Compare distributions by commenting on the median, IQR (spread), and overall range.

### 4.7 Probability

$$P(\text{event}) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$$

**Rules:**
- $0 \leq P(E) \leq 1$
- $P(\text{not }E) = 1 - P(E)$
- $P(A \text{ or } B) = P(A) + P(B) - P(A \text{ and } B)$ for mutually exclusive events: $P(A \text{ or } B) = P(A) + P(B)$
- For independent events: $P(A \text{ and } B) = P(A) \times P(B)$

**Tree diagrams:** Multiply along branches for combined events; add between branches for mutually exclusive outcomes.

**Conditional probability:** The probability of event $B$ given event $A$ has occurred:

$$P(B \mid A) = \frac{P(A \text{ and } B)}{P(A)}$$

---

## 5. Key Formulas

### Geometry

| Formula | Value |
|---|---|
| Circumference | $C = \pi d = 2\pi r$ |
| Area of a circle | $A = \pi r^2$ |
| Pythagoras' theorem | $a^2 + b^2 = c^2$ |
| Area of a triangle | $A = \frac{1}{2}bh = \frac{1}{2}ab\sin C$ |
| Sine rule | $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$ |
| Cosine rule | $a^2 = b^2 + c^2 - 2bc\cos A$ |
| Arc length | $\text{arc} = \frac{\theta}{360} \times 2\pi r$ |
| Sector area | $A = \frac{\theta}{360} \times \pi r^2$ |
| Volume of a cuboid | $V = lwh$ |
| Volume of a cylinder | $V = \pi r^2 h$ |
| Volume of a cone | $V = \frac{1}{3}\pi r^2 h$ |
| Volume of a sphere | $V = \frac{4}{3}\pi r^3$ |
| Surface area of a sphere | $A = 4\pi r^2$ |
| Surface area of a cylinder | $A = 2\pi r^2 + 2\pi r h$ |

### Algebra

| Formula | Value |
|---|---|
| Quadratic formula | $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ |
| Discriminant | $\Delta = b^2 - 4ac$ |
| Compound interest | $A = P\left(1 \pm \frac{r}{100}\right)^n$ |

### Number

| Formula | Value |
|---|---|
| Density | $\rho = \frac{m}{V}$ |
| Speed | $s = \frac{d}{t}$ |
| Pressure | $p = \frac{F}{A}$ |

---

## 6. Exam Tips

1. **Show all working.** Method marks are awarded even if the final answer is wrong. An answer with no working shown scores zero if incorrect.

2. **Read the question twice.** Identify exactly what is being asked — many marks are lost by answering a slightly different question from the one on the paper. Look for phrases like "give your answer in surd form" or "correct to 3 significant figures".

3. **Check your answer makes sense.** If asked for the length of a triangle's side and you get a negative number, something is wrong. Use estimation to verify: $4.7 \times 3.1 \approx 5 \times 3 = 15$.

4. **Use the calculator paper to your advantage.** On Paper 2 (calculator), use the fraction button, check answers with inverse operations, and use the answer function (ANS) to store intermediate results to avoid rounding errors.

5. **Draw diagrams.** Even when not required, a quick sketch for geometry, vectors, or probability questions can reveal relationships that are hard to spot in words alone.

6. **Manage time carefully.** Roughly 1 mark per minute is a good guide. If a question is worth 1 mark, do not spend more than 1 minute on it. Move on and come back to difficult questions at the end.

7. **Know what is given and what is not.** The formula sheet provides some formulas but not all. Memorise the quadratic formula, area and volume formulas, trigonometric ratios, and compound interest — these are not always provided.

---

## Common Pitfalls

1. **Cancelling incorrectly in fractions.** $\frac{a + b}{a + c} \neq \frac{b}{c}$. You cannot cancel terms across addition -- only factors can be cancelled.
2. **Forgetting the negative sign when squaring.** $(-3)^2 = 9$, not $-9$. The square of any real number is non-negative.
3. **Confusing the radius and diameter.** The area formula uses $r^2$ not $d^2$. Always check whether a question gives you the radius or the diameter before substituting.
4. **Rounding too early in multi-step calculations.** Carry forward the full calculator value and round only the final answer.
5. **Writing inequalities the wrong way round.** When multiplying or dividing an inequality by a negative number, reverse the inequality sign.
6. **Using the wrong trigonometric ratio.** Always label the triangle first, then apply SOH CAH TOA systematically.
7. **Forgetting units in the final answer.** Always include correct units.

## Worked Examples

### Example 1: Solving a Quadratic by Factorising
**Problem:** Solve x^2 - 5x + 6 = 0.
**Solution:** Find two numbers that multiply to 6 and add to -5: -2 and -3. Factorise: (x - 2)(x - 3) = 0. Therefore x = 2 or x = 3.

### Example 2: Using the Sine Rule
**Problem:** In triangle ABC, angle A = 42 degrees, angle B = 67 degrees, side a = 8 cm. Find side b.
**Solution:** Angle C = 180 - 42 - 67 = 71 degrees. By the sine rule: b/sin(67) = 8/sin(42). b = 8 x sin(67) / sin(42) = 8 x 0.921 / 0.669 = 11.0 cm (to 3 s.f.).

### Example 3: Tree Diagram Probability
**Problem:** A bag contains 3 red and 2 blue counters. Two counters are drawn without replacement. Find the probability that both are red.
**Solution:** P(first red) = 3/5. P(second red | first red) = 2/4 = 1/2. P(both red) = 3/5 x 1/2 = 3/10.

## Summary

GCSE Mathematics covers number (fractions, decimals, percentages, ratio, standard form, bounds), algebra (simplifying, expanding, factorising, solving equations, inequalities, sequences, functions, graphs), geometry (angles, circles, Pythagoras, trigonometry, transformations, vectors), and statistics (averages, grouped data, scatter graphs, cumulative frequency, box plots, probability, tree diagrams, conditional probability). Key exam skills include showing all working, reading questions twice to identify exact requirements, estimating answers to check reasonableness, and managing time at roughly one mark per minute.
