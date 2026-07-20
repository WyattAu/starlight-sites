---
title: "Algebra"
description: "SAT mathematics: Algebra"
---

# Algebra

SAT mathematics study notes - Algebra

## Key Concepts

- **Linear Equations**: y = mx + b models constant rate of change. Slope m = rise/run; b is the starting value. Parallel lines have equal slopes; perpendicular lines have negative reciprocal slopes.
- **Quadratic Equations**: y = ax² + bx + c models parabolic relationships. Solutions found by factoring, completing the square, or the quadratic formula: x = (-b ± √(b²-4ac)) / 2a.
- **Systems of Equations**: two or more equations solved simultaneously. Use substitution (solve one equation, substitute into the other) or elimination (add/subtract equations to eliminate a variable).
- **Inequalities**: like equations but with <, >, ≤, ≥. Flip the inequality when multiplying/dividing by a negative number.
- **Exponents and Radicals**: $a^m \cdot a^n = a^{m+n}$, $(a^m)^n = a^{mn}$, $\sqrt[n]{a^m} = a^{m/n}$.
- **Absolute Value**: $|x| = x$ if $x \geq 0$, $|x| = -x$ if $x < 0$. Solve by considering both cases.

## Key Formulas

| Topic | Formula | When to Use |
|-------|---------|-------------|
| Slope | $m = \frac{y_2 - y_1}{x_2 - x_1}$ | Finding rate of change between two points |
| Quadratic Formula | $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ | Solving $ax^2 + bx + c = 0$ when factoring fails |
| Discriminant | $\Delta = b^2 - 4ac$ | Positive: 2 real roots; Zero: 1 repeated root; Negative: no real roots |
| Vertex Form | $y = a(x-h)^2 + k$ | Identifying vertex $(h, k)$ of parabola |
| Distance | $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ | Distance between two points |
| Midpoint | $M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$ | Finding the centre of a line segment |

## Worked Examples

### Example 1: Recognising Structure

**Problem:** If 3x + 7 = 22, what is the value of 6x + 14?

**Solution:**
Step 1: Solve for x: 3x = 15, so x = 5
Step 2: Notice that 6x + 14 = 2(3x + 7) = 2(22) = 44
Step 3: The answer is 44 — recognising the relationship avoids recalculating from scratch.

**Key insight:** The SAT often tests whether you can see structure rather than just compute. Recognising that $6x + 14 = 2(3x + 7)$ saves time.

---

### Example 2: Quadratic with Discriminant

**Problem:** How many real solutions does $2x^2 - 3x + 5 = 0$ have?

**Solution:**
Step 1: Identify $a = 2$, $b = -3$, $c = 5$
Step 2: Compute discriminant: $\Delta = (-3)^2 - 4(2)(5) = 9 - 40 = -31$
Step 3: Since $\Delta < 0$, there are no real solutions.

**Key insight:** You don't need to find the solutions — just the discriminant tells you the count.

---

### Example 3: System by Elimination

**Problem:** Solve $3x + 2y = 12$ and $x - 2y = 4$.

**Solution:**
Step 1: Add the equations: $(3x + 2y) + (x - 2y) = 12 + 4$
Step 2: Simplify: $4x = 16$, so $x = 4$
Step 3: Substitute: $4 - 2y = 4$, so $y = 0$
Step 4: Check: $3(4) + 2(0) = 12$ ✓ and $4 - 2(0) = 4$ ✓

**Key insight:** Elimination works best when one variable has opposite coefficients — add the equations to cancel it.

---

## Practice Problems

1. Solve for x: 2(x - 3) = 4x + 6
2. If f(x) = x² - 5x + 6, find all values of x where f(x) = 0
3. A system: x + y = 10, x - y = 4. Find x and y.
4. For what value of k does $x^2 + kx + 9 = 0$ have exactly one real solution?
5. If $|2x - 5| = 3$, what are the possible values of x?

### Practice Answers

1. $x = -6$
2. $x = 2$ and $x = 3$ (factor as $(x-2)(x-3)$)
3. $x = 7$, $y = 3$
4. $k = 6$ or $k = -6$ (discriminant $= 0$ means $k^2 = 36$)
5. $x = 4$ or $x = 1$ (split into two cases)

## Intuition

Algebra is the art of solving mysteries by letting unknowns represent clues. When you write "x + 3 = 7", you are setting up a puzzle where x is the detective's suspect — and algebraic manipulation is the interrogation that reveals their identity. Linear equations are straight-line relationships — like earning the same hourly wage, where every hour adds the same amount. Quadratic equations describe things that curve — the path of a thrown ball, the shape of a bridge arch. Systems of equations are multiple witnesses describing the same crime from different angles — when you combine their accounts, the truth emerges.

## Common Mistakes

**Forgetting to check for extraneous solutions.** When solving equations involving absolute values, square roots, or rational expressions, always substitute your answers back into the original equation. Squaring both sides of an equation can introduce solutions that do not satisfy the original, and dividing by a variable expression can lose solutions where that expression equals zero.

**Sign errors when distributing negatives.** When multiplying through by a negative number or distributing a negative sign across parentheses, students often apply the sign to only the first term. For example, $-(2x - 3)$ is $-2x + 3$, not $-2x - 3$. This error compounds in multi-step problems and leads to incorrect solutions.

**Misinterpreting "no solution" vs "infinite solutions."** If simplifying an equation leads to a false statement like $0 = 5$, there is no solution. If it leads to a true statement like $0 = 0$, there are infinitely many solutions. Students sometimes stop at $0 = 0$ and report no solution, or continue simplifying a false statement hoping to find a value.

## Cross-References

- [Geometry](./geometry) -- Algebraic techniques are used to solve geometric problems including coordinate geometry and equations of circles.
- [Data Analysis](./data-analysis) -- Statistical formulas and linear models use algebraic manipulation to calculate means, slopes, and correlations.
- [Reading Comprehension](../reading/comprehension) -- Interpreting graphs and tables in reading passages requires algebraic reasoning.
