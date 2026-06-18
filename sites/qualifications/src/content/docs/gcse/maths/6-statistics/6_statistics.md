---
title: Statistics
description: ""it rains" and "the student arrives late"
Independent?

$P(R) \times P(L) = 0.3 \times 0.1 = 0.03$.

But $P(R \cap L) = 0.05 \neq 0.03$.

The events are **not** independent.

### 5.3 Tree Diagrams

Tree diagrams show all possible outcomes of two or more events.

**Rules:**

- Multiply along branches (for "and")
- Add between branches (for "or")

**Worked Example.** A bag contains 3 red and 5 blue balls. Two balls are drawn without replacement.
Find the probability that both are red.

First draw: $P(R) = \frac{3}{8}$

Second draw (after removing one red): $P(R) = \frac{2}{7}$

$$P(\mathrm{both red) = \frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$$

**Worked Example (Higher Tier).** Using the same bag, find the probability that the two balls are
Different colours.

$$P(\mathrm{different) = P(\mathrm{RB) + P(\mathrm{BR) = \frac{3}{8} \times \frac{5}{7} + \frac{5}{8} \times \frac{3}{7} = \frac{15}{56} + \frac{15}{56} = \frac{30}{56} = \frac{15}{28}$$

**Worked Example (Higher Tier).** A fair coin is tossed three times. Find the probability of getting
Exactly two heads.

There are $2^3 = 8$ equally likely outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.

Favourable: HHT, HTH, THH (3 outcomes).

$$P(\mathrm{exactly 2 heads) = \frac{3}{8}$$

### 5.4 Conditional Probability

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

This reads as "the probability of $A$ given $B$".

**Worked Example.** In a class of 30 students, 18 play football, 12 play rugby, and 6 play both.
Find the probability that a student plays rugby given that they play football.

$$P(R \mid F) = \frac{P(R \cap F)}{P(F)} = \frac{6/30}{18/30} = \frac{6}{18} = \frac{1}{3}$$

**Worked Example (Higher Tier).** A factory produces items in three shifts. Shift A produces 40% of
Items with 2% defective, shift B produces 35% with 3% defective, and shift C produces 25% with 1%
Defective. An item is found to be defective. What is the probability it came from shift B?

This is Bayes" theorem. Let $D$ be the event "defective" and $B$ be "from shift B".

$$P(D) = 0.40 \times 0.02 + 0.35 \times 0.03 + 0.25 \times 0.01 = 0.008 + 0.0105 + 0.0025 = 0.021$$

$$P(B \mid D) = \frac{P(D \mid B) \cdot P(B)}{P(D)} = \frac{0.03 \times 0.35}{0.021} = \frac{0.0105}{0.021} = 0.5$$

### 5.5 Venn Diagrams and Probability

A Venn diagram with two sets $A$ and $B$ has four regions:

| Region     | Notation      | Description           |
| ---------- | ------------- | --------------------- |
| Left only  | $A \cap B'$   | In $A$ but not in $B$ |
| Right only | $A' \cap B$   | In $B$ but not in $A$ |
| Overlap    | $A \cap B$    | In both               |
| Outside    | $(A \cup B)'$ | In neither            |

**Worked Example.** In a survey of 100 people, 45 like tea, 35 like coffee, and 15 like both. A
Person is chosen at random. Find the probability they like neither.

$|T \cup C| = 45 + 35 - 15 = 65$.

$P(\mathrm{neither) = \frac{100 - 65}{100} = 0.35$.

**Worked Example (Higher Tier).** Using the same data, given that a person likes at least one drink,
Find the probability they like tea but not coffee.

$|T \cap C'| = 45 - 15 = 30$.

$P(T \cap C' \mid T \cup C) = \frac{30}{65} = \frac{6}{13}$.

## 6. Statistical Distributions (Higher Tier)

### 6.1 The Normal Distribution

The **normal distribution** is a bell-shaped curve defined by its mean $\mu$ and standard deviation
$\sigma$.

**Key properties:**

- Symmetric about $\mu$
- Approximately 68% of data lies within $\mu \pm \sigma$
- Approximately 95% of data lies within $\mu \pm 2\sigma$
- Approximately 99.7% of data lies within $\mu \pm 3\sigma$

### 6.2 Standard Deviation

The **standard deviation** measures the average distance of data points from the mean.

$$\sigma = \sqrt{\frac{\sum (x - \bar{x})^2}{n}}$$

For frequency data:

$$\sigma = \sqrt{\frac{\sum f(x - \bar{x})^2}{\sum f}}$$

**Computational formula (avoids calculating deviations individually):**

$$\sigma = \sqrt{\frac{\sum x^2}{n} - \bar{x}^2}$$

**Worked Example.** Find the standard deviation of: $4, 8, 6, 5, 3, 9, 7$.

$$\bar{x} = \frac{42}{7} = 6$$

$$\sigma = \sqrt{\frac{(4-6)^2 + (8-6)^2 + (6-6)^2 + (5-6)^2 + (3-6)^2 + (9-6)^2 + (7-6)^2}{7}}$$

$$\sigma = \sqrt{\frac{4 + 4 + 0 + 1 + 9 + 9 + 1}{7}} = \sqrt{\frac{28}{7}} = \sqrt{4} = 2$$

**Worked Example (Higher Tier).** If every value in a data set is increased by 5, what happens to
The mean and standard deviation?

The new mean is $\bar{x} + 5$. The standard deviation is unchanged, because adding a constant shifts
All values by the same amount but does not change their spread.

If every value is multiplied by $k$The new mean is $k\bar{x}$ and the new standard deviation is
$|k|\sigma$.

## 7. Comparing Distributions (Higher Tier)

### 7.1 Using Box Plots

When comparing two box plots:

- Compare the medians (measure of central tendency)
- Compare the IQRs (measure of spread)
- Compare the ranges
- Comment on skewness (if the median is closer to $Q_1$ or $Q_3$)

**Worked Example.** Class A has median 65, $Q_1 = 50$, $Q_3 = 75$. Class B has median 60,
$Q_1 = 45$, $Q_3 = 70$.

Class A has a higher median (65 vs 60), so on average they scored better. Class A also has a
Narrower IQR ($75 - 50 = 25$ vs $70 - 45 = 25$), so both classes have the same spread by this
Measure.

### 7.2 Using Histograms

When comparing histograms, compare the shapes (symmetric, skewed, bimodal), the locations of peaks,
And the overall spread.

## Common Pitfalls

- **Using frequency instead of frequency density** in histograms. The bar height is frequency
  density, not frequency.
- **Forgetting that cumulative frequency uses upper class boundaries**, not midpoints.
- **Assuming correlation means causation.** This is one of the most common errors in statistics.
- **Not subtracting $P(A \cap B)$** in the addition rule for non-mutually exclusive events.
- **Confusing "with replacement" and "without replacement"** in probability questions. This changes
  the probabilities on the second draw.
- **Counting the overlap twice** when adding probabilities from a Venn diagram.
- **Using the wrong quartile formula.** For $n$ data points, $Q_1$ is at position $\frac{n+1}{4}$
  not $\frac{n}{4}$.
- **Forgetting that the area under a histogram bar equals the frequency**, not the height.
- **Misinterpreting the median from grouped data.** The estimated median uses linear interpolation
  within the median class, not just the midpoint.

### 9.1 Independence vs. Mutual Exclusivity

A very common confusion is between independent events and mutually exclusive events. These are
Different concepts:

- **Independent events:** The occurrence of one does not affect the probability of the other.
  $P(A \cap B) = P(A) \times P(B)$.
- **Mutually exclusive events:** They cannot occur at the same time. $P(A \cap B) = 0$.

In fact, if two events have positive probability and are mutually exclusive, they cannot be
Independent (because $P(A \cap B) = 0 \neq P(A) \times P(B)$ when both are positive).

**Example.** A card is drawn from a standard 52-card deck. Let $A$ be "the card is a heart" and $B$
Be "the card is a king". These events are NOT mutually exclusive (the king of hearts is both), but
They ARE independent: $P(A) = 13/52 = 1/4$, $P(B) = 4/52 = 1/13$And
$P(A \cap B) = 1/52 = (1/4)(1/13)$.

### 9.2 Why the Standard Deviation Uses Squared Differences

The standard deviation uses squared differences from the mean rather than absolute differences for
Two key reasons:

1. **Mathematical convenience.** Squared differences are differentiable everywhere, enabling the use
   of calculus. Absolute values have a "corner" at zero.
2. **Additivity.** The variance of a sum of independent random variables equals the sum of their
   variances. This does not hold for mean absolute deviation.

### 9.3 Effect of Coding on Statistical Measures

When data is transformed by a linear coding $y = ax + b$:

- The new mean is $\bar{y} = a\bar{x} + b$.
- The new standard deviation is $s_y = |a| \cdot s_x$.
- Adding a constant $b$ shifts the data but does not change the spread. Multiplying by $a$ scales
  the spread.

**Worked Example.** Data has mean 50 and standard deviation 8. After coding $y = \frac{x - 50}{8}$:
$\bar{y} = \frac{50 - 50}{8} = 0$ and $s_y = \frac{1}{8} \times 8 = 1$.

This process is called **standardisation** and produces data with mean 0 and standard deviation 1.

### 9.4 Outliers and Their Impact

An outlier is a value that lies far from the other data points. There are several ways to detect
Outliers:

- Values below $Q_1 - 1.5 \times \mathrm{IQR$ or above $Q_3 + 1.5 \times \mathrm{IQR$.
- Values more than 2 standard deviations from the mean (for approximately normal data).

**Impact on measures:**

- The **mean** is heavily affected by outliers because every value contributes equally.
- The **median** is resistant to outliers because only on the middle value(s).
- The **standard deviation** is inflated by outliers.
- The **IQR** is resistant to outliers.

**Example.** Consider the data set $\{2, 3, 4, 5, 100\}$. The mean is $114/5 = 22.8$Heavily pulled
Up by the outlier 100. The median is 4, which better represents the "typical" value. The standard
Deviation is very large due to the outlier. The IQR is $5 - 3 = 2$Unaffected by the outlier.

### 9.5 Tree Diagrams for Multiple Events

Tree diagrams are useful for visualising multi-stage experiments where events are sequential.

**Worked Example.** A bag contains 4 red and 6 blue counters. Two counters are drawn without
Replacement. Find the probability that both are the same colour.

First draw: $P(\mathrm{red) = 4/10 = 0.4$, $P(\mathrm{blue) = 6/10 = 0.6$.

Second draw (if first was red): $P(\mathrm{red) = 3/9 = 1/3$, $P(\mathrm{blue) = 6/9 = 2/3$.

Second draw (if first was blue): $P(\mathrm{red) = 4/9$, $P(\mathrm{blue) = 5/9$.

$$
P(\mathrm{both red) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}
$$

$$
P(\mathrm{both blue) = \frac{6}{10} \times \frac{5}{9} = \frac{30}{90} = \frac{1}{3}
$$

$$
P(\mathrm{same colour) = \frac{2}{15} + \frac{1}{3} = \frac{2}{15} + \frac{5}{15} = \frac{7}{15}
$$

### 9.6 Scatter Graphs and Lines of Best Fit

A **scatter graph** plots pairs of data values to investigate the relationship between two
Variables.

**Types of correlation:**

| Correlation | Description                                    |
| ----------- | ---------------------------------------------- |
| Positive    | As one variable increases, so does the other   |
| Negative    | As one variable increases, the other decreases |
| None        | No visible linear pattern                      |

The **line of best fit** is drawn by eye so that it passes through the middle of the data, with
Roughly equal numbers of points on each side. It can be used to make predictions:

- **Interpolation:** Predicting within the range of the data (reliable).
- **Extrapolation:** Predicting outside the range of the data (unreliable).

:::caution Never extrapolate far beyond the data range. The relationship may not hold outside the
Observed values.
:::

### 9.7 Frequency Polygons

A frequency polygon is created by plotting the class midpoint against the frequency density (for
Grouped data) or frequency (for ungrouped data), and joining the points with straight lines.

The area under a frequency polygon equals the total frequency (just like a histogram).

## Practice Questions

1. The mean of six numbers is 12. When one number is removed, the mean of the remaining five is 10.
   Find the removed number.

2. A grouped frequency table has classes $0 \leq x \lt 20$$20 \leq x \lt 40$$40 \leq x \lt 60$
   $60 \leq x \lt 80$. Explain why an estimated mean calculated from this table is only an
   approximation.

3. Draw a box plot for the data: $3, 5, 6, 8, 9, 11, 14, 15, 22, 35$. Identify any outliers.

4. A bag contains 4 green and 6 yellow counters. Three counters are drawn without replacement. Find
   the probability that all three are the same colour.

5. In a survey, 60% of people like tea, 40% like coffee, and 25% like both. A person is chosen at
   random. Given that they like tea, find the probability that they also like coffee.

6. Calculate the standard deviation of the following data: $5, 7, 3, 9, 6, 4, 8$.

7. Explain why the mode is the only useful average for categorical data.

8. A histogram has a bar of width 4 and height 3.5. What frequency does this bar represent?

9. Two events $A$ and $B$ are such that $P(A) = 0.6$$P(B) = 0.5$And $P(A \cup B) = 0.8$. Are $A$ and
   $B$ independent? Justify your answer.

10. The heights of 100 students are summarised in a cumulative frequency table. Explain how you
    would estimate the interquartile range from this table.

11. A biased dice has $P(\mathrm{even) = 0.6$ and $P(\mathrm{odd) = 0.4$. It is rolled twice. Find
    the probability that the sum is greater than 8.

12. Explain the difference between a histogram and a bar chart, and when each is most appropriate.

13. A set of data has $\bar{x} = 20$ and $\sigma = 4$. If every value is increased by 5, find the
    new mean and standard deviation.

14. Two classes took the same test. Class A: median 55, IQR 20. Class B: median 52, IQR 30. Compare
    the performance of the two classes.

15. In a Venn diagram for events $A$ and $B$$P(A) = 0.7$$P(B) = 0.5$And $P(A \mid B) = 0.6$. Find
    $P(A \cap B)$ and $P(A \cup B)$.

16. A fair coin is tossed 5 times. Find the probability of getting at least 3 heads.

17. The mean height of 8 students is 162 cm. When a ninth student joins, the mean becomes 163 cm.
    Find the height of the ninth student.

18. From a histogram, the first three bars have frequency densities 2, 4, and 3 with class widths 5,
    5, and 10. Estimate the total frequency and the mean.

19. A bag contains $n$ red and $n$ blue balls. Two balls are drawn at random without replacement.
    Show that the probability of drawing two balls of the same colour is $\frac{n - 1}{2n - 1}$.

20. Explain why the standard deviation is always non-negative, and state when it equals zero.

### Extended Practice (Higher Tier)

21. The probability that it rains on any given day is 0.3. Find the probability that it rains on
    exactly 2 out of the next 5 days.

22. Two events $A$ and $B$ are mutually exclusive. If $P(A) = 0.35$ and $P(A \cup B) = 0.65$Find
    $P(B)$ and $P(A \cap B)$.

23. A set of data has a mean of 50 and a standard deviation of 8. After applying the coding
    $y = \frac{x - 50}{8}$Find the new mean and standard deviation.

24. The table below shows the distribution of exam scores for a class of 40 students:

| Score range        | Frequency |
| ------------------ | --------- |
| $0 \le s \lt 20$   | 3         |
| $20 \le s \lt 40$  | 8         |
| $40 \le s \lt 60$  | 14        |
| $60 \le s \lt 80$  | 10        |
| $80 \le s \lt 100$ | 5         |

Draw a cumulative frequency curve and estimate the median and interquartile range.

25. A bag contains 3 red, 5 blue, and 2 green marbles. Three marbles are drawn at random without
    replacement. Find the probability that exactly two are the same colour.

26. Explain why the mean is affected by outliers but the median is not. Use the data set
    $2, 3, 4, 5, 100$ to illustrate your answer.

27. A fair spinner has the numbers 1, 2, 3, 4. It is spun twice. Find the probability that the
    product of the two numbers is even.

28. The standard deviation of a data set is zero. What does this tell you about the data?

29. Two classes sit the same exam. Class A has 20 students with mean 65 and standard deviation 8.
    Class B has 30 students with mean 70 and standard deviation 10. Find the overall mean.

30. A card is drawn from a standard deck of 52 cards. Find the probability that it is a heart or a
    face card (or both).

## Worked Examples

**Example 1:**

A typical exam question on Statistics requires you to apply your knowledge to an unfamiliar context.
Read the question carefully, identify the key concept being tested, and structure your answer using
the appropriate terminology.

**Example 2:**

Multi-step problems in Statistics often combine two or more concepts. Break the problem down:
identify what you need to find, recall the relevant formula or principle, substitute values, and
state your answer with correct units or formatting.

## Summary

This topic covers the mathematical techniques and concepts related to statistics, including key
theorems, methods, and problem-solving approaches.

**Key concepts include:**

- measures of central tendency and spread
- probability distributions (binomial, normal)
- hypothesis testing
- correlation and regression
- sampling methods

Regular practice with a variety of question types is essential to build fluency and confidence in
applying these mathematical techniques.

