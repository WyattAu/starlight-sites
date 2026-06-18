---
title: Inequalities
description: ""no solution."

- Always identify the domain before solving inequalities involving fractions or square roots.

- Use sign charts for rational and polynomial inequalities — plot critical values and test
  intervals.

- When multiplying by a variable, split into cases based on sign, or use the fact that
  $\frac{f}{g} > 0$ is equivalent to $fg > 0$ (with $g \neq 0$).

- A quadratic $ax^2 + bx + c$ is always positive iff $a > 0$ and $\Delta < 0$.

## Worked Examples

### Example 1: Quadratic inequality with parameter

**Problem.** Find all values of $k$ for which $x^2 + 2kx + k + 8 > 0$ for all real $x$.

**Solution.** For the quadratic to be always positive with leading coefficient $1 > 0$:
$\Delta < 0$. $$(2k)^2 - 4(1)(k+8) < 0 \implies 4k^2 - 4k - 32 < 0 \implies k^2 - k - 8 < 0$$

Roots: $k = \frac{1 \pm \sqrt{1 + 32}}{2} = \frac{1 \pm \sqrt{33}}{2}$

Solution: $\frac{1 - \sqrt{33}}{2} < k < \frac{1 + \sqrt{33}}{2}$.

$\blacksquare$

### Example 2: Rational inequality

**Problem.** Solve $\dfrac{x - 1}{x^2 - 4} \leq 0$.

**Solution.** Domain: $x \neq \pm 2$.

Critical values: $x = -2,\; 1,\; 2$.

Sign chart:

| Interval     | $(-\infty, -2)$ | $(-2, 1)$ | $(1, 2)$ | $(2, \infty)$ |
| ------------ | :-------------: | :-------: | :------: | :-----------: |
| $x - 1$      |       $-$       |    $-$    |   $+$    |      $+$      |
| $(x-2)(x+2)$ |       $+$       |    $-$    |   $-$    |      $+$      |
| Quotient     |       $-$       |    $+$    |   $-$    |      $+$      |

The quotient $\leq 0$ on $(-\infty, -2) \cup [1, 2)$. Note $x = 1$ is included (numerator $= 0$),
but $x = \pm 2$ are excluded.

$\blacksquare$

## Cross-References

| Topic                        | Site    | Link                                                                                                              |
| ---------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| [Equations and Inequalities] | A-Level | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/maths/pure-mathematics/03-equations-and-inequalities) |
| [Equations and Inequalities] | DSE     | [View](https://dse.wyattau.com/docs/dse/maths/compulsory/5_inequalities)                                          |

======= 3. Misreading the question, particularly with "hence' vs 'hence or otherwise' — the former
requires using previous work.

4. Forgetting to check that solutions satisfy the original equation (especially with squaring both
   sides or dividing by variables).
   > > > > > > > Stashed changes:docs/docs_dse/Maths/compulsory/inequalities.md

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

$$
