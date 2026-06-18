---
title: "Statistics -- Diagnostic Tests"
description: "" Is this claim justified? Calculate the percentage difference.

**Solution:**

(a) **Brand A:** Sorted: 390, 420, 440, 450, 460, 470, 480, 500, 510, 520. Mean $= 4640/10 = 464$
hours. Median $= (460+470)/2 = 465$ hours. Range $= 520 - 390 = 130$ hours.

**Brand B:** Sorted: 350, 360, 370, 380, 390, 400, 410, 420, 430, 440. Mean $= 3950/10 = 395$ hours.
Median $= (390+400)/2 = 395$ hours. Range $= 440 - 350 = 90$ hours.

(b) **Brand A:** Q1 = (420+440)/2 = 430, Q3 = (480+500)/2 = 490. IQR = 490 - 430 = 60 hours. **Brand
B:** Q1 = (360+370)/2 = 365, Q3 = (410+420)/2 = 415. IQR = 415 - 365 = 50 hours.

(c) Brand A is recommended because it has a higher mean (464 vs 395) and median (465 vs 395),
meaning on average it lasts longer. Brand B has a smaller range (90 vs 130), suggesting more
consistency, but the lower average makes it less attractive.

(d) Percentage difference
$= \frac{464 - 395}{395} \times 100\% = \frac{69}{395} \times 100\% = 17.5\%$.

The claim of "50% longer" is **not justified**. Brand A lasts approximately 17.5% longer on average,
not 50%.

### IT-2: Histograms and Frequency Density (with Geometry)

**Question:** The histogram shows the distribution of weights of 50 parcels:

| Weight (kg)       | Frequency |
| ----------------- | --------- |
| $0 \le w \lt 2$   | 8         |
| $2 \le w \lt 5$   | 15        |
| $5 \le w \lt 10$  | 18        |
| $10 \le w \lt 20$ | 9         |

(a) Calculate the frequency density for each class. (b) A parcel weighing 3.5 kg costs $\pounds 4$
to send and a parcel weighing 12 kg costs $\pounds 12$. Assuming a linear pricing model, find the
formula for cost $C$ in terms of weight $w$. (c) Calculate the total cost to send all 50 parcels,
using the estimated total weight. (d) Calculate the proportion of parcels that cost more than
$\pounds 8$.

**Solution:**

(a) Class widths: 2, 3, 5, 10. Frequency densities: $8/2 = 4$$15/3 = 5$$18/5 = 3.6$$9/10 = 0.9$.

(b) Linear model: $C = mw + c$. When $w = 3.5$$C = 4$: $3.5m + c = 4$. When $w = 12$$C = 12$:
$12m + c = 12$. Subtracting: $8.5m = 8$$m = 0.941$. $c = 4 - 3.5(0.941) = 4 - 3.294 = 0.706$.

$C \approx 0.94w + 0.71$ (to 2 d.p.).

(c) Estimated total weight:
$1 \times 8 + 3.5 \times 15 + 7.5 \times 18 + 15 \times 9 = 8 + 52.5 + 135 + 135 = 330.5$ kg. Total
cost $= 0.941 \times 330.5 + 50 \times 0.706 = 311.0 + 35.3 = \pounds 346.30$.

(d) $C \gt 8$ when $0.94w + 0.71 \gt 8$. $0.94w \gt 7.29$. $w \gt 7.76$ kg.

Parcels in the $10 \le w \lt 20$ class: 9 parcels (all weigh more than 7.76 kg). Estimated parcels
in $5 \le w \lt 10$ above 7.76 kg:
$\frac{10 - 7.76}{5} \times 18 = \frac{2.24}{5} \times 18 = 8.06 \approx 8$ parcels.

Total $= 9 + 8 = 17$ parcels. Proportion $= 17/50 = 0.34 = 34\%$.

### IT-3: Probability and Statistics Combined (with Algebra)

**Question:** A bag contains red and blue counters. Two counters are drawn at random without
replacement. The probability of drawing two red counters is $\frac{1}{6}$. The probability of
drawing two blue counters is $\frac{1}{3}$. (a) Let $r$ be the number of red counters and $b$ the
number of blue counters. Write two equations in $r$ and $b$. (b) Solve the equations to find $r$ and
$b$. (c) Calculate the probability of drawing one counter of each colour. (d) If 3 counters are
drawn without replacement, calculate the probability that exactly 2 are red.

**Solution:**

(a) Total counters $= r + b = n$. $P(\text{two red) = \frac{r(r-1)}{n(n-1)} = \frac{1}{6}$.
$P(\text{two blue) = \frac{b(b-1)}{n(n-1)} = \frac{1}{3}$.

(b) From $P(\text{two red)$: $6r(r-1) = n(n-1)$. From $P(\text{two blue)$: $3b(b-1) = n(n-1)$. So
$6r(r-1) = 3b(b-1)$Giving $2r(r-1) = b(b-1)$.

Also: $\frac{1}{6} + \frac{1}{3} + P(\text{one of each) = 1$So
$P(\text{one of each) = 1 - \frac{1}{6} - \frac{1}{3} = \frac{1}{2}$.

$P(\text{one of each) = \frac{2rb}{n(n-1)} = \frac{1}{2}$.

From $6r(r-1) = n(n-1)$ and $\frac{2rb}{n(n-1)} = \frac{1}{2}$: $\frac{2rb}{6r(r-1)} = \frac{1}{2}$.
$\frac{b}{3(r-1)} = \frac{1}{2}$. $2b = 3(r-1)$. $b = \frac{3r - 3}{2}$.

Substituting into $2r(r-1) = b(b-1)$:
$2r(r-1) = \frac{(3r-3)}{2} \times \frac{(3r-5)}{2} = \frac{(3r-3)(3r-5)}{4}$.

$8r(r-1) = (3r-3)(3r-5) = 9r^2 - 24r + 15$.

$8r^2 - 8r = 9r^2 - 24r + 15$. $r^2 - 16r + 15 = 0$. $(r-1)(r-15) = 0$.

$r = 15$ (since $r = 1$ gives $b = 0$But then $P(\text{two blue) = 0$Not $1/3$).

$b = (45 - 3)/2 = 21$. Total $n = 36$.

Check:
$P(\text{two red) = \frac{15 \times 14}{36 \times 35} = \frac{210}{1260} = \frac{1}{6} \checkmark$.
$P(\text{two blue) = \frac{21 \times 20}{36 \times 35} = \frac{420}{1260} = \frac{1}{3} \checkmark$.

(c)
$P(\text{one of each) = \frac{15 \times 21}{36 \times 35} \times 2 = \frac{630}{1260} = \frac{1}{2}$.

(d)
$P(\text{exactly 2 red in 3) = \frac{\binom{15}{2} \times \binom{21}{1}}{\binom{36}{3}} = \frac{105 \times 21}{7140} = \frac{2205}{7140} = \frac{441}{1428} = \frac{147}{476} \approx 0.309$.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.
