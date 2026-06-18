---
title: mathematics practice
date: 2026-05-30
tags:
  - SAT
categories:
  - SAT
description: ""s fuel efficiency is 12 kilometres per litre. If petrol costs \$1.45 per litre, what is the
approximate cost per kilometre to drive this car? (Round to the nearest cent.)

**Solution:**

Cost per kilometre = (cost per litre) ÷ (kilometres per litre)

$$\frac{1.45}{12} \approx 0.1208$$

Rounded to the nearest cent: approximately \$0.12 per kilometre.

**Key concept:** Using unit rates and dimensional analysis to convert between related quantities.

**Common mistakes:**

- Multiplying instead of dividing (getting \$17.40 per kilometre, which is clearly unreasonable)
- Incorrect rounding (0.1208 rounds to 0.12, not 0.13)
- Forgetting to divide by 12 (using \$1.45 per kilometre)

---

### Problem 16: Scatter Plots and Line of Best Fit

A set of data has a least-squares regression line $\hat{y} = 3.2x + 1.5$, where $x$ represents years
of experience and $\hat{y}$ represents predicted annual salary (in thousands of dollars). What is
the predicted salary for someone with 8 years of experience?

**Solution:**

$$\hat{y} = 3.2(8) + 1.5 = 25.6 + 1.5 = 27.1$$

Since $\hat{y}$ is in thousands of dollars, the predicted salary is $\$27,100$.

**Key concept:** Using a regression equation to make predictions. The slope (3.2) means salary
increases by approximately \$3,200 per additional year of experience.

**Common mistakes:**

- Forgetting that $\hat{y}$ is in thousands (answering \$27.1 or \$271 instead of \$27,100)
- Incorrect computation: $3.2 \times 8 = 25.6$, not $24.6$
- Confusing the slope and y-intercept

---

### Problem 17: Probability

A bag contains 4 red marbles, 6 blue marbles, and 5 green marbles. Two marbles are drawn at random
without replacement. What is the probability that both marbles are blue?

**Solution:**

Total marbles: $4 + 6 + 5 = 15$.

Probability the first is blue: $\frac{6}{15} = \frac{2}{5}$.

After removing one blue marble, 14 marbles remain, 5 of which are blue.

Probability the second is blue: $\frac{5}{14}$.

$$P(\text{both blue}) = \frac{6}{15} \times \frac{5}{14} = \frac{2}{5} \times \frac{5}{14} = \frac{10}{70} = \frac{1}{7}$$

**Key concept:** Probability of dependent events (without replacement). Multiply the conditional
probabilities.

**Common mistakes:**

- Using replacement: $\frac{6}{15} \times \frac{6}{15} = \frac{36}{225}$ (incorrect)
- Not reducing $\frac{6}{15}$ before multiplying, leading to $\frac{30}{210} = \frac{1}{7}$ (same
  answer but more error-prone)
- Forgetting that "without replacement" changes the denominator and numerator for the second draw

---

### Problem 18: Statistics

The five numbers $3, 7, a, 11, 15$ have a mean of 10. What is the value of $a$?

**Solution:**

$$\text{Mean} = \frac{3 + 7 + a + 11 + 15}{5} = 10$$

$$\frac{36 + a}{5} = 10$$

$$36 + a = 50$$

$$a = 14$$

**Key concept:** The mean is the sum of values divided by the count. Use the given mean to find the
missing value.

**Common mistakes:**

- Addition errors in $3 + 7 + 11 + 15$ (it equals 36)
- Multiplying $10 \times 5 = 50$ incorrectly
- Placing $a$ in the wrong position when computing the median instead (the question asks for the
  mean)

---

### Problem 19: Statistics — IQR

A dataset has the following five-number summary: minimum = 12, $Q_1 = 18$, median = 24, $Q_3 = 32$,
maximum = 45. What is the interquartile range (IQR)?

**Solution:**

$$\text{IQR} = Q_3 - Q_1 = 32 - 18 = 14$$

**Key concept:** The interquartile range measures the spread of the middle 50% of data.

**Common mistakes:**

- Using maximum minus minimum ($45 - 12 = 33$), which is the range, not the IQR
- Using median minus $Q_1$ ($24 - 18 = 6$), which is only half the IQR
- Confusing $Q_1$ and $Q_3$ and computing $18 - 32 = -14$ (IQR is always non-negative)

---

### Problem 20: Two-Way Tables

A survey of 200 students found the following distribution:

|           | Prefers Science | Prefers Literature | Total   |
| --------- | --------------- | ------------------ | ------- |
| Year 10   | 40              | 60                 | 100     |
| Year 11   | 50              | 50                 | 100     |
| **Total** | **90**          | **110**            | **200** |

What fraction of the Year 10 students prefer Science?

**Solution:**

Year 10 total = 100. Year 10 students who prefer Science = 40.

$$\frac{40}{100} = \frac{2}{5}$$

**Key concept:** Reading a two-way table and computing a conditional probability/fraction from a
specific row.

**Common mistakes:**

- Using the total Science count: $40/90$ (this is the fraction of Science-preferring students who
  are in Year 10, not the question asked)
- Using the total of all students: $40/200 = 1/5$
- Confusing rows and columns

---

## Geometry and Trigonometry

### Problem 21: Area of Composite Shapes

A rectangle has length 12 and width 8. A semicircle is constructed on one of the longer sides as its
diameter. What is the total area of the composite shape? (Use $\pi \approx 3.14$.)

**Solution:**

Area of rectangle: $12 \times 8 = 96$.

The semicircle has diameter 12, so radius $r = 6$.

Area of semicircle: $\frac{1}{2}\pi r^2 = \frac{1}{2}(3.14)(36) = 56.52$.

Total area: $96 + 56.52 = 152.52$.

**Key concept:** Decomposing a composite shape into familiar figures and summing their areas.

**Common mistakes:**

- Using diameter instead of radius ($r = 6$, not $12$)
- Forgetting the $\frac{1}{2}$ factor for a semicircle
- Using the shorter side (8) as the diameter instead of the longer side (12)

---

### Problem 22: Circle Theorems

A circle has centre $O$. Points $A$, $B$, and $C$ lie on the circle such that angle $AOC = 140°$.
What is the measure of angle $ABC$?

**Solution:**

Angle $AOC = 140°$ is a central angle. The arc $AC$ has measure $140°$.

Angle $ABC$ is an inscribed angle that subtends the same arc $AC$.

An inscribed angle is half the measure of its intercepted arc:

$$\angle ABC = \frac{140°}{2} = 70°$$

**Key concept:** The Inscribed Angle Theorem -- an inscribed angle is half the central angle that
subtends the same arc.

**Common mistakes:**

- Assuming the inscribed angle equals the central angle (answering $140°$)
- Dividing by the wrong number or misidentifying which arc is subtended
- Confusing inscribed and central angles when the vertex is on vs. at the centre

---

### Problem 23: Angle Relationships

Two parallel lines are cut by a transversal. One of the eight angles formed measures $125°$. What is
the measure of an angle adjacent to this one?

**Solution:**

Adjacent angles formed by intersecting lines are supplementary (they sum to $180°$).

$$180° - 125° = 55°$$

The adjacent angle measures $55°$.

**Key concept:** Linear pairs formed by intersecting lines are supplementary.

**Common mistakes:**

- Assuming adjacent angles are equal (confusing with vertical angles, which are equal)
- Selecting $125°$ without recognising the question asks for the _adjacent_ angle
- Forgetting that this applies regardless of whether the lines are parallel (adjacent angles are
  always supplementary)

---

### Problem 24: Right Triangle Trigonometry

In right triangle $ABC$ with right angle at $C$, the hypotenuse $AB = 13$ and leg $BC = 5$. What is
$\sin(A)$?

**Solution:**

First find $AC$ using the Pythagorean theorem:

$$AC^2 + BC^2 = AB^2$$

$$AC^2 + 25 = 169$$

$$AC^2 = 144$$

$$AC = 12$$

For angle $A$: opposite side is $BC = 5$, hypotenuse is $AB = 13$.

$$\sin(A) = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{5}{13}$$

**Key concept:** Applying SOH CAH TOA and the Pythagorean theorem in a right triangle.

**Common mistakes:**

- Using $AC$ (adjacent) instead of $BC$ (opposite) for $\sin(A)$
- Computing $\cos(A) = 12/13$ instead of $\sin(A) = 5/13$
- Confusing which angle is $A$ (the angle at vertex $A$, not at $B$)

---

### Problem 25: Similar Triangles

Triangle $ABC$ is similar to triangle $DEF$ with a scale factor of $2:3$ (every length in $ABC$ is
$\frac{2}{3}$ of the corresponding length in $DEF$). If the area of $ABC$ is 24 square units, what
is the area of $DEF$?

**Solution:**

The ratio of areas of similar figures equals the square of the ratio of corresponding lengths.

$$\frac{\text{Area of } ABC}{\text{Area of } DEF} = \left(\frac{2}{3}\right)^2 = \frac{4}{9}$$

$$\frac{24}{\text{Area of } DEF} = \frac{4}{9}$$

$$\text{Area of } DEF = 24 \times \frac{9}{4} = 6 \times 9 = 54$$

The area of $DEF$ is 54 square units.

**Key concept:** The area ratio of similar figures is the square of the length ratio.

**Common mistakes:**

- Using the length ratio directly ($24 \times \frac{3}{2} = 36$) instead of squaring it
- Squaring the wrong ratio ($\frac{9}{4}$ vs. $\frac{4}{9}$)
- Setting up the proportion inverted:
  $\frac{\text{Area of } DEF}{\text{Area of } ABC} = \frac{4}{9}$

---

### Problem 26: Volume and Surface Area

A right circular cylinder has radius 5 cm and height 12 cm. What is the total surface area of the
cylinder? (Use $\pi \approx 3.14$.)

**Solution:**

Total surface area = lateral area $+$ areas of two bases.

Lateral area: $2\pi rh = 2(3.14)(5)(12) = 376.8$

Area of each base: $\pi r^2 = (3.14)(25) = 78.5$

Total: $376.8 + 2(78.5) = 376.8 + 157 = 533.8$ cm².

**Key concept:** Surface area of a cylinder = $2\pi rh + 2\pi r^2$.

**Common mistakes:**

- Forgetting to include both circular bases (omitting the factor of 2 on $\pi r^2$)
- Using the diameter (10) instead of the radius (5)
- Computing volume ($\pi r^2 h$) instead of surface area

---

### Problem 27: Similar Triangles and Midsegments

In triangle $PQR$, point $M$ is the midpoint of $PQ$ and point $N$ is the midpoint of $PR$. If
$QR = 16$, what is the length of $MN$?

**Solution:**

The segment connecting the midpoints of two sides of a triangle (the midsegment) is parallel to the
third side and half its length.

$$MN = \frac{1}{2} \times QR = \frac{1}{2} \times 16 = 8$$

**Key concept:** The Triangle Midsegment Theorem.

**Common mistakes:**

- Assuming $MN = QR = 16$ (it is half, not equal)
- Assuming $MN = \frac{1}{4} QR = 4$
- Confusing which side $MN$ is parallel to ($MN \parallel QR$ since $M$ and $N$ are midpoints of the
  other two sides)

---

### Problem 28: Angle Relationships in Polygons

What is the sum of the interior angles of a regular octagon?

**Solution:**

Sum of interior angles of an $n$-sided polygon:

$$S = (n - 2) \times 180°$$

For an octagon ($n = 8$):

$$S = (8 - 2) \times 180° = 6 \times 180° = 1080°$$

Each interior angle of a regular octagon: $1080° \div 8 = 135°$.

**Key concept:** The polygon interior angle sum formula.

**Common mistakes:**

- Using $(n - 1) \times 180° = 1260°$ (incorrect formula)
- Using $n \times 180° = 1440°$ (incorrect formula)
- Confusing interior and exterior angles (exterior angle sum is always $360°$)

---

### Problem 29: Right Triangle Trigonometry — Application

A ladder leans against a wall, making a $72°$ angle with the ground. If the foot of the ladder is 4
feet from the base of the wall, how long is the ladder?

**Solution:**

The ground, wall, and ladder form a right triangle. The ladder is the hypotenuse.

The distance from the wall (4 ft) is the side adjacent to the $72°$ angle.

$$\cos(72°) = \frac{\text{adjacent}}{\text{hypotenuse}} = \frac{4}{L}$$

$$L = \frac{4}{\cos(72°)}$$

$\cos(72°) \approx 0.309$

$$L = \frac{4}{0.309} \approx 12.94$$

The ladder is approximately 13 feet long.

**Key concept:** Choosing the correct trigonometric ratio based on which sides are known. Since we
know the adjacent side and want the hypotenuse, we use cosine.

**Common mistakes:**

- Using $\sin(72°)$ or $\tan(72°)$ instead of $\cos(72°)$ (identifying the wrong sides)
- Computing $\cos(72°)$ incorrectly
- Placing 4 in the numerator without the cosine function: $L = 4 \times \cos(72°) \approx 1.24$
  (this would be the distance from the wall to the top of the ladder, not the ladder length)

---

### Problem 30: Circle Equation

A circle has the equation $x^2 + y^2 - 6x + 8y - 11 = 0$. What is the radius of this circle?

**Solution:**

Complete the square for both $x$ and $y$.

Group $x$ terms and $y$ terms, move the constant:

$$(x^2 - 6x) + (y^2 + 8y) = 11$$

Complete the square for $x$: $x^2 - 6x + 9 = (x - 3)^2$ (add 9 to both sides)

Complete the square for $y$: $y^2 + 8y + 16 = (y + 4)^2$ (add 16 to both sides)

$$(x - 3)^2 + (y + 4)^2 = 11 + 9 + 16 = 36$$

This gives centre $(3, -4)$ and radius $r = \sqrt{36} = 6$.

**Key concept:** Converting the expanded form of a circle equation to standard form by completing
the square.

**Common mistakes:**

- Sign errors when completing the square: $x^2 - 6x$ requires adding $(-3)^2 = 9$, giving
  $(x - 3)^2$
- Forgetting to add the same constants to the right side of the equation
- Taking the square root of 36 incorrectly, or confusing radius with diameter

---

## Summary

| Domain                                | Problems | Key Topics                                                                                |
| ------------------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| **Algebra**                           | 1-6      | Linear equations, systems, inequalities, absolute value                                   |
| **Advanced Math**                     | 7-13     | Quadratics, polynomials, exponentials, function composition, rational equations           |
| **Problem Solving and Data Analysis** | 14-20    | Percentages, unit conversions, regression, probability, statistics, two-way tables        |
| **Geometry and Trigonometry**         | 21-30    | Composite areas, circle theorems, similar triangles, trigonometry, volume, polygon angles |

The most effective approach to these problems is:

1. **Identify the concept** before reaching for a formula.
2. **Write out every step** -- the SAT rewards accuracy over speed.
3. **Check your answer** by substituting back or estimating whether the result is reasonable.
4. **Review the common mistakes** for each problem type -- most errors fall into predictable
   patterns.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.
