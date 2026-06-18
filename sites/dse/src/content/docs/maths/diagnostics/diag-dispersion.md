---
title: "Dispersion -- Diagnostic Tests"
description: ""s inequality (or
empirical reasoning), at least what percentage of the data lies within 2 standard deviations of the
mean?

**Solution:**

Within 2 standard deviations: $20 \pm 2(4) = [12,\; 28]$.

By Chebyshev's inequality, at least $1 - \dfrac{1}{k^2} = 1 - \dfrac{1}{4} = \dfrac{3}{4} = 75\%$ of
data lies within $k = 2$ standard deviations.

If the data is approximately normally distributed, the empirical rule gives approximately $95\%$But
Chebyshev gives the guaranteed minimum of $75\%$.

---

### IT-3: Dispersion and Combinatorics (with Combinatorics)

**Question:**

All possible samples of size 2 are drawn with replacement from the population $\\{2, 4, 6\\}$. Find
the mean and variance of the sampling distribution of the sample mean.

**Solution:**

Population: $\\{2, 4, 6\\}$$\mu = 4$$\sigma^2 = \dfrac{(4+0+4)}{3} = \dfrac{8}{3}$.

All samples of size 2 with replacement (9 samples):

$(2,2), (2,4), (2,6), (4,2), (4,4), (4,6), (6,2), (6,4), (6,6)$.

Sample means: $2, 3, 4, 3, 4, 5, 4, 5, 6$.

Mean of sample means: $\dfrac{2+3+4+3+4+5+4+5+6}{9} = \dfrac{36}{9} = 4 = \mu$.

Variance of sample means: $\dfrac{(2-4)^2 + 2(3-4)^2 + 3(4-4)^2 + 2(5-4)^2 + (6-4)^2}{9}$

$= \dfrac{4 + 2 + 0 + 2 + 4}{9} = \dfrac{12}{9} = \dfrac{4}{3} = \dfrac{\sigma^2}{n}$.

This confirms: $E(\bar{X}) = \mu$ and $\text{Var}(\bar{X}) = \dfrac{\sigma^2}{n}$.

---

## Worked Examples

### WE-1: Effect of Adding a Constant to All Data

**Question:**

A set of 5 numbers has mean $10$ and standard deviation $3$. If $7$ is added to each number, find
the new mean, new standard deviation, and new variance.

**Solution:**

Transformation: $y = x + 7$ (i.e. $a = 1$$b = 7$).

New mean $= 1 \times 10 + 7 = 17$.

New standard deviation $= |1| \times 3 = 3$.

New variance $= 1^2 \times 9 = 9$.

The additive constant $7$ shifts the data but does not affect the spread.

---

### WE-2: Standard Deviation from a Frequency Distribution

**Question:**

Find the mean and standard deviation of the following data:

| $x$ | 2   | 4   | 6   | 8   | 10  |
| --- | --- | --- | --- | --- | --- |
| $f$ | 3   | 5   | 8   | 4   | 2   |

**Solution:**

| $x$   | $f$ | $fx$ | $fx^2$ |
| ----- | --- | ---- | ------ |
| 2     | 3   | 6    | 12     |
| 4     | 5   | 20   | 80     |
| 6     | 8   | 48   | 288    |
| 8     | 4   | 32   | 256    |
| 10    | 2   | 20   | 200    |
| Total | 22  | 126  | 836    |

$$\bar{x} = \frac{126}{22} = \frac{63}{11} \approx 5.727$$

$$\sigma^2 = \frac{836}{22} - \left(\frac{63}{11}\right)^2 = \frac{418}{11} - \frac{3969}{121} = \frac{4598 - 3969}{121} = \frac{629}{121}$$

$$\sigma = \sqrt{\frac{629}{121}} = \frac{\sqrt{629}}{11} \approx 2.28$$

**DSE Exam Technique:** Always set up the table with columns for $fx$ and $fx^2$. This earns method
marks even if there is a minor calculation error. Leave standard deviation in exact form unless
asked for a decimal.

---

### WE-3: Coding with Grouped Data

**Question:**

Using the coding $y = \dfrac{x - 25}{5}$The coded data has mean $\bar{y} = 1.2$ and variance
$s_y^2 = 4.8$. Find the mean and standard deviation of the original data.

**Solution:**

The coding is $y = \dfrac{x - 25}{5} = \dfrac{1}{5}x - 5$So $a = \dfrac{1}{5}$ and $b = -5$.

Original mean: $\bar{x} = \dfrac{\bar{y} - b}{a} = \dfrac{1.2 + 5}{1/5} = 6.2 \times 5 = 31$.

Original standard deviation:
$\sigma_x = \dfrac{\sigma_y}{|a|} = \dfrac{\sqrt{4.8}}{1/5} = 5\sqrt{4.8} = 5 \times 2\sqrt{1.2} = 10\sqrt{1.2} = 2\sqrt{30} \approx 10.95$.

---

### WE-4: Interquartile Range from Raw Data

**Question:**

Find the median, quartiles, and interquartile range of the data set:

$$12, 15, 18, 20, 22, 25, 28, 30, 35, 40, 45$$

**Solution:**

There are $n = 11$ data values (odd).

Median position: $\dfrac{11 + 1}{2} = 6$. Median $= 25$.

Lower half: $12, 15, 18, 20, 22$ (5 values).

$Q_1$ position: $\dfrac{5 + 1}{2} = 3$. $Q_1 = 18$.

Upper half: $28, 30, 35, 40, 45$ (5 values).

$Q_3$ position: $\dfrac{5 + 1}{2} = 3$. $Q_3 = 35$.

$$\text{IQR} = Q_3 - Q_1 = 35 - 18 = 17$$

---

### WE-5: Comparing Distributions Using Standard Deviation

**Question:**

Class A has test scores with mean $65$ and standard deviation $8$. Class B has test scores with mean
$68$ and standard deviation $15$. Which class has more consistent performance? Justify your answer.

**Solution:**

The coefficient of variation (CV) measures relative dispersion:

$$\text{CV}_A = \frac{8}{65} \times 100\% \approx 12.3\%$$

$$\text{CV}_B = \frac{15}{68} \times 100\% \approx 22.1\%$$

Since $\text{CV}_A < \text{CV}_B$Class A has more consistent performance.

Alternatively, comparing standard deviations directly: Class A has $\sigma = 8$ and Class B has
$\sigma = 15$. The smaller standard deviation of Class A indicates less variability, i.e. More
consistency.

---

### WE-6: Removing an Outlier

**Question:**

A data set is $\{5, 8, 10, 12, 15, 18, 45\}$. The value $45$ is suspected to be an outlier.

(a) Calculate the mean and standard deviation of all 7 values. (b) Calculate the mean and standard
deviation after removing $45$. (c) Comment on the effect of the outlier.

**Solution:**

(a) Sum $= 113$$\bar{x} = \dfrac{113}{7} \approx 16.14$.

$\sum x^2 = 25 + 64 + 100 + 144 + 225 + 324 + 2025 = 2907$.

$\sigma^2 = \dfrac{2907}{7} - \left(\dfrac{113}{7}\right)^2 = 415.29 - 260.31 = 154.98$.

$\sigma \approx 12.45$.

(b) After removing $45$: sum $= 68$$n = 6$$\bar{x} = \dfrac{68}{6} = \dfrac{34}{3} \approx 11.33$.

$\sum x^2 = 882$$\sigma^2 = \dfrac{882}{6} - \left(\dfrac{34}{3}\right)^2 = 147 - 128.44 = 18.56$.

$\sigma \approx 4.31$.

(c) The outlier $45$ significantly increases both the mean (from $11.33$ to $16.14$) and the
standard deviation (from $4.31$ to $12.45$). The standard deviation is nearly tripled, showing that
outliers have an exaggerated effect on measures of dispersion.

---

### WE-7: Using a Given Mean to Find Missing Frequency

**Question:**

The mean of the following data is $4.5$. Find the value of $k$.

| $x$ | 1   | 2   | 3   | 4   | 5   | 6   |
| --- | --- | --- | --- | --- | --- | --- |
| $f$ | 2   | 4   | $k$ | 6   | 3   | 1   |

**Solution:**

Total frequency: $n = 2 + 4 + k + 6 + 3 + 1 = 16 + k$.

Sum: $\sum fx = 2 + 8 + 3k + 24 + 15 + 6 = 55 + 3k$.

$$\bar{x} = \frac{55 + 3k}{16 + k} = 4.5$$

$$55 + 3k = 4.5(16 + k) = 72 + 4.5k$$

$$1.5k = 17$$

$$k = \frac{17}{1.5} = \frac{34}{3}$$

Since $k$ must be a non-negative integer, and $\dfrac{34}{3}$ is not an integer, there is no integer
value of $k$ that gives a mean of exactly $4.5$. If the question allows non-integer frequencies,
$k = \dfrac{34}{3}$.

---

### WE-8: Sheppard's Correction (Awareness)

**Question:**

For grouped data with class width $h$State Sheppard's correction for the variance and explain when
it is appropriate to use it.

**Solution:**

Sheppard's correction adjusts the grouped data variance:

$$\sigma_{\text{corrected}}^2 = \sigma_{\text{grouped}}^2 - \frac{h^2}{12}$$

This correction is appropriate when:

- The data is approximately normally distributed.
- The distribution is continuous.
- The class intervals are of equal width.

It accounts for the fact that using midpoints assumes data is concentrated at the centre of each
class, which slightly overestimates the variance.

In DSE examinations, Sheppard's correction is generally not required unless explicitly asked.

---

## Common Pitfalls

1. **Confusing population variance with sample variance.** The population variance formula divides
   by $n$While the sample variance divides by $n - 1$ (Bessel's correction). In DSE Maths, unless
   specified otherwise, use the population formula (divide by $n$).

2. **Forgetting that variance has squared units.** If data is in centimetres, the variance is in
   cm$^2$ and the standard deviation is in cm. Do not mix up units when writing conclusions.

3. **Incorrectly applying coding formulas.** For the transformation $y = ax + b$: new mean
   $= a\bar{x} + b$New SD $= |a| \cdot s$. The additive constant $b$ does NOT affect the standard
   deviation. A common error is writing new SD $= as + b$.

4. **Using the wrong formula for combined variance.** When combining two data sets, do not average
   the variances. Use the correct formula involving the deviation of each set's mean from the
   combined mean.

5. **Misidentifying quartile positions.** Different textbooks use different conventions for finding
   $Q_1$ and $Q_3$. In DSE, the most common approach is: $Q_1$ is the median of the lower half and
   $Q_3$ is the median of the upper half.

---

## DSE Exam-Style Questions

### DSE-1

The following table shows the distribution of marks obtained by 40 students in a test.

| Marks     | $1$--$10$ | $11$--$20$ | $21$--$30$ | $31$--$40$ | $41$--$50$ |
| --------- | --------- | ---------- | ---------- | ---------- | ---------- |
| Frequency | 3         | 8          | 14         | 10         | 5          |

(a) Estimate the mean mark. (3 marks) (b) Estimate the standard deviation of the marks. (3 marks)
(c) If a student scored 35 marks, find the student's standardised score (z-score). (2 marks)

**Solution:**

(a) Midpoints: $5.5, 15.5, 25.5, 35.5, 45.5$.

| $x$   | $f$ | $fx$  | $fx^2$   |
| ----- | --- | ----- | -------- |
| 5.5   | 3   | 16.5  | 90.75    |
| 15.5  | 8   | 124   | 1922     |
| 25.5  | 14  | 357   | 9103.5   |
| 35.5  | 10  | 355   | 12602.5  |
| 45.5  | 5   | 227.5 | 10351.25 |
| Total | 40  | 1080  | 34070    |

$$\bar{x} = \frac{1080}{40} = 27$$

(b) $\sigma^2 = \dfrac{34070}{40} - 27^2 = 851.75 - 729 = 122.75$.

$\sigma = \sqrt{122.75} \approx 11.08$.

(c) $z = \dfrac{35 - 27}{11.08} = \dfrac{8}{11.08} \approx 0.72$.

The student scored $0.72$ standard deviations above the mean.

---

### DSE-2

The weights (in kg) of 8 parcels are: $2.3, 3.1, 4.5, 5.2, 3.8, 4.1, 2.9, 3.6$.

(a) Find the mean and standard deviation. (4 marks) (b) If each parcel has a label weighing $0.1$ kg
added, find the new mean and new standard deviation. (2 marks) (c) If the weight of each parcel is
converted to grams, find the new mean and new variance. (2 marks)

**Solution:**

(a) Sum $= 29.5$$\bar{x} = \dfrac{29.5}{8} = 3.6875$.

$\sum x^2 = 5.29 + 9.61 + 20.25 + 27.04 + 14.44 + 16.81 + 8.41 + 12.96 = 114.81$.

$\sigma^2 = \dfrac{114.81}{8} - (3.6875)^2 = 14.35125 - 13.59766 = 0.7536$.

$\sigma = \sqrt{0.7536} \approx 0.868$ kg.

(b) Transformation: $y = x + 0.1$.

New mean $= 3.6875 + 0.1 = 3.7875$ kg.

New SD $= 0.868$ kg (unchanged by addition).

(c) Transformation: $y = 1000x$.

New mean $= 1000 \times 3.6875 = 3687.5$ g.

New variance $= 1000^2 \times 0.7536 = 753600$ g$^2$.

---

### DSE-3

Two classes took the same examination. Class $A$ (30 students) had mean $72$ and variance $36$.
Class $B$ (20 students) had mean $65$ and variance $64$.

(a) Find the overall mean of all 50 students. (2 marks) (b) Find the overall variance of all 50
students. (4 marks)

**Solution:**

(a) Combined mean
$= \dfrac{30 \times 72 + 20 \times 65}{50} = \dfrac{2160 + 1300}{50} = \dfrac{3460}{50} = 69.2$.

(b) $d_A = 72 - 69.2 = 2.8$$d_B = 65 - 69.2 = -4.2$.

$$\sigma^2 = \frac{30(36 + 2.8^2) + 20(64 + 4.2^2)}{50} = \frac{30(36 + 7.84) + 20(64 + 17.64)}{50}$$

$$= \frac{30 \times 43.84 + 20 \times 81.64}{50} = \frac{1315.2 + 1632.8}{50} = \frac{2948}{50} = 58.96$$

---

### DSE-4

The box-and-whisker diagram below summarises the daily temperatures (in $°$C) recorded in a city for
30 days:

Minimum $= 12$$Q_1 = 18$Median $= 22$$Q_3 = 28$Maximum $= 35$.

(a) Find the interquartile range. (1 mark) (b) Determine the lower and upper fences and identify any
outliers. (3 marks) (c) What percentage of the data lies between $18$ and $28$? (1 mark)

**Solution:**

(a) $\text{IQR} = Q_3 - Q_1 = 28 - 18 = 10$.

(b) Lower fence $= Q_1 - 1.5 \times \text{IQR} = 18 - 15 = 3$.

Upper fence $= Q_3 + 1.5 \times \text{IQR} = 28 + 15 = 43$.

Since all values ($12$ to $35$) lie within $[3, 43]$There are no outliers.

(c) By definition, $50\%$ of the data lies between $Q_1$ and $Q_3$.

---

### DSE-5

A set of data $x_1, x_2, \ldots, x_n$ has mean $\mu$ and standard deviation $\sigma$. A new data set
is formed by removing the value $\mu$ from the original set.

(a) Find the mean of the new data set. (2 marks) (b) Find the variance of the new data set in terms
of $\sigma$ and $n$. (4 marks)

**Solution:**

(a) Original sum $= n\mu$. After removing $\mu$: new sum $= (n-1)\mu$.

New mean $= \dfrac{(n-1)\mu}{n-1} = \mu$.

(b) Original $\sum x_i^2 = n(\sigma^2 + \mu^2)$.

After removing $\mu$: $\sum x_i^2 = n(\sigma^2 + \mu^2) - \mu^2 = n\sigma^2 + (n-1)\mu^2$.

New variance $= \dfrac{n\sigma^2 + (n-1)\mu^2}{n-1} - \mu^2 = \dfrac{n\sigma^2}{n-1}$.
