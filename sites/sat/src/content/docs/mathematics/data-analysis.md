---

date: 2026-07-23T21:57:32+01:00
title: "Data analysis"
description: "SAT mathematics: Data analysis"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "sat", "url": "https://sat.wyattau.com"}, {"name": "Mathematics", "url": "https://sat.wyattau.com/mathematics"}, {"name": "Data Analysis", "url": "https://sat.wyattau.com/mathematics/data-analysis"}]
}
</script>

## Data analysis

SAT mathematics study notes - Data analysis

## Key Concepts

- **Mean**: arithmetic average = sum of values / number of values. Sensitive to outliers.
- **Median**: middle value when sorted. More robust than mean for skewed data.
- **Mode**: most frequent value. Can have multiple modes.
- **Standard Deviation**: measures spread from the mean. Low = data clusters near mean; high = data spreads out.
- **Probability**: P(event) = favorable outcomes / total outcomes. Independent events multiply; mutually exclusive events add.
- **Percentiles**: the value below which a given percentage of data falls. Median = 50th percentile.
- **Scatterplots**: show the relationship between two variables. Look for positive/negative/no correlation and linear/non-linear patterns.

## Key Formulas

| Measure | Formula | Example |
|---------|---------|---------|
| Mean | $\bar{x} = \frac{\sum x_i}{n}$ | Values 2,4,6: mean = 4 |
| Median | Middle value (or average of two middle values) | Values 1,3,5: median = 3 |
| Range | $\text{max} - \text{min}$ | Values 2,5,9: range = 7 |
| Probability | $P(A) = \frac{\text{favourable}}{\text{total}}$ | 3 red out of 10: $P(\text{red}) = 0.3$ |
| Independent events | $P(A \cap B) = P(A) \cdot P(B)$ | $P(\text{heads}) \cdot P(\text{heads}) = 0.25$ |
| Mutually exclusive | $P(A \cup B) = P(A) + P(B)$ | $P(1) + P(2) = \frac{1}{6} + \frac{1}{6} = \frac{1}{3}$ |

## Worked Examples

### Example 1: Mean vs Median

**Problem:** A dataset has values 2, 3, 5, 5, 7, 8, 10. What is the median?

**Solution:**
Step 1: Sort the data (already sorted): 2, 3, 5, 5, 7, 8, 10
Step 2: Find the middle value: 7 values, so the 4th value is the median
Step 3: The median is 5

**Key insight:** The median is 5, and the mean is $\frac{2+3+5+5+7+8+10}{7} = \frac{40}{7} \approx 5.71$. The mean is pulled up by the larger values.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "sat", "url": "https://sat.wyattau.com"}, {"name": "Mathematics", "url": "https://sat.wyattau.com/mathematics"}, {"name": "Data Analysis", "url": "https://sat.wyattau.com/mathematics/data-analysis"}]
}
</script>

### Example 2: Conditional Probability

**Problem:** In a bag with 3 red and 5 blue marbles, you draw two marbles without replacement. What is the probability both are red?

**Solution:**
Step 1: P(first red) = 3/8
Step 2: After removing one red, P(second red | first red) = 2/7
Step 3: P(both red) = $\frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$

**Key insight:** "Without replacement" means the second draw depends on the first — these are dependent events, so we multiply conditional probabilities.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "sat", "url": "https://sat.wyattau.com"}, {"name": "Mathematics", "url": "https://sat.wyattau.com/mathematics"}, {"name": "Data Analysis", "url": "https://sat.wyattau.com/mathematics/data-analysis"}]
}
</script>

### Example 3: Reading a Scatterplot

**Problem:** A scatterplot shows test scores (x-axis) vs study hours (y-axis). The points form an upward-sloping cloud. What can you conclude?

**Solution:**
Step 1: Upward slope = positive correlation (more hours → higher scores)
Step 2: Cloud shape = correlation is not perfect (some scatter)
Step 3: You CANNOT conclude causation — other factors (prior knowledge, sleep) may be involved

**Key insight:** Correlation $\neq$ causation. The SAT tests this distinction frequently.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "sat", "url": "https://sat.wyattau.com"}, {"name": "Mathematics", "url": "https://sat.wyattau.com/mathematics"}, {"name": "Data Analysis", "url": "https://sat.wyattau.com/mathematics/data-analysis"}]
}
</script>

## Intuition

Data analysis is the art of finding signal in noise. A dataset is like a crowd of people shouting — you need to figure out what they are actually saying. The mean is the average voice, but the median tells you what the middle person is saying, which is more representative when someone is shouting very loudly (an outlier). Standard deviation tells you how much the crowd disagrees with itself — a small standard deviation means everyone is saying roughly the same thing. Probability is your confidence level — how sure are you that the pattern you see is real and not just random chance?

## Common Mistakes

**Confusing mean, median, and mode.** The mean is the arithmetic average, the median is the middle value, and the mode is the most frequent value. A common error is calculating the mean when the question asks for the median, especially in datasets with outliers where the two measures differ significantly. Read the question to determine which measure of central tendency is required.

**Misreading graphs and tables.** The SAT frequently tests your ability to extract data from bar graphs, line graphs, and tables. Students often misidentify the axis labels, confuse the scale, or read the wrong data point. Always verify which axis represents which variable and check the scale increments before extracting values.

**Forgetting that standard deviation measures spread, not centre.** A low standard deviation means data points cluster near the mean; a high standard deviation means they are spread out. Students sometimes confuse standard deviation with the mean itself, or assume that a larger dataset always has a larger standard deviation regardless of how concentrated the values are.

## Cross-References

- [Algebra](./algebra) -- Linear regression and statistical formulas use algebraic equations to model relationships between variables.
- [Geometry](./geometry) -- Probability and data interpretation questions may involve geometric representations such as scatterplots.
- [Writing Language](../writing/language) -- Interpreting data in evidence-based writing requires understanding of statistics and data presentation.
