---
title: "Ecology -- Diagnostic Tests"
description: "" long-term
survival.

**Solution:**

Under the genetic drift model, heterozygosity declines over generations:
$H_t = H_0\left(1 - \frac{1}{2N_e}\right)^t$.

We can estimate $N_e$ from the ratio of observed to expected heterozygosity. If the population has
been at size $N_e$ for many generations, the equilibrium heterozygosity under drift-mutation balance
is $H = \frac{4N_e\mu}{1 + 4N_e\mu}$.

Alternatively, a simpler approach: the ratio of observed to expected heterozygosity gives an
indication of inbreeding:

$F = 1 - \frac{H_{\text{obs}}}{H_{\text{exp}}} = 1 - \frac{0.08}{0.12} = 1 - 0.667 = 0.333$

This inbreeding coefficient indicates significant inbreeding. The effective population size can be
estimated from: $F \approx \frac{1}{2N_e}$ for a recently bottlenecked population, giving
$N_e \approx \frac{1}{2 \times 0.333} = 1.5$ -- but this is unrealistic.

A better approach uses the relationship between census size ($N$) and effective size for a
population at equilibrium:
$N_e = N \times \frac{H_{\text{obs}}}{H_{\text{exp}}} = 200 \times \frac{0.08}{0.12} = 133$.

$N_e$ is lower than $N = 200$ for several reasons:

- Unequal sex ratio (if one sex is less numerous, $N_e$ is reduced)
- Variance in reproductive success (if some individuals have many offspring and others have none,
  $N_e \ll N$)
- Fluctuating population size (bottlenecks reduce $N_e$ more than the current census size suggests)
- Overlapping generations

Implications for survival:

- A population with $N_e \approx 133$ is below the "50/500 rule": $N_e \gt 50$ is needed to avoid
  inbreeding depression in the short term, and $N_e \gt 500$ is needed for long-term evolutionary
  potential.
- Inbreeding depression may reduce fitness through expression of deleterious recessive alleles.
- Reduced genetic diversity limits the population's ability to adapt to environmental changes (e.g.,
  disease, climate change).
- The population may require genetic rescue (introduction of individuals from other populations) to
  increase $N_e$ and genetic diversity.
