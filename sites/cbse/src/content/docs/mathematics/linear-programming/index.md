---
title: "Linear Programming"
description: "CBSE Class 12 mathematics: Linear programming with graphical method, simplex method, and worked examples."
---

# Linear Programming

Linear programming is an optimization technique for maximizing or minimizing a linear objective function subject to linear constraints. It has applications in resource allocation, production planning, and transportation.

## Key Concepts

- Objective function: $Z = ax + by$ (to maximize or minimize)
- Constraints: linear inequalities $a_ix + b_iy \leq c_i$ (or $\geq$)
- Feasible region: the set of all points satisfying all constraints
- Corner point theorem: the optimal value occurs at a vertex of the feasible region
- Artificial variables and slack variables for standard form
- Dual problem: every LP problem has a corresponding dual

## Worked Example 1 — Graphical Method

**Problem:** Maximize $Z = 3x + 2y$ subject to:
$$x + y \leq 4$$
$$x + 2y \leq 6$$
$$x, y \geq 0$$

**Solution:**

Step 1: Graph the constraints.

For $x + y = 4$: intercepts at $(4, 0)$ and $(0, 4)$.
For $x + 2y = 6$: intercepts at $(6, 0)$ and $(0, 3)$.

Step 2: Find the corner points of the feasible region:
- $(0, 0)$: origin
- $(4, 0)$: intersection of $x + y = 4$ with $x$-axis
- $(0, 3)$: intersection of $x + 2y = 6$ with $y$-axis
- $(2, 2)$: intersection of $x + y = 4$ and $x + 2y = 6$

Step 3: Evaluate $Z$ at each corner point:
- $Z(0, 0) = 0$
- $Z(4, 0) = 12$
- $Z(0, 3) = 6$
- $Z(2, 2) = 3(2) + 2(2) = 10$

Step 4: Maximum value is $Z = 12$ at $(4, 0)$.

**Common mistake:** Checking interior points instead of corner points. The optimal value always occurs at a vertex.

## Worked Example 2 — Minimization Problem

**Problem:** Minimize $Z = 5x + 3y$ subject to:
$$2x + y \geq 10$$
$$x + 3y \geq 15$$
$$x, y \geq 0$$

**Solution:**

Step 1: Graph the constraints. The feasible region is unbounded (extends to infinity).

Step 2: Find corner points:
- $(0, 5)$: intersection of $x + 3y = 15$ with $y$-axis
- $(15, 0)$: intersection of $2x + y = 10$ with $x$-axis
- $(3, 4)$: intersection of $2x + y = 10$ and $x + 3y = 15$

Step 3: Evaluate $Z$:
- $Z(0, 5) = 15$
- $Z(15, 0) = 75$
- $Z(3, 4) = 5(3) + 3(4) = 27$

Step 4: Minimum is $Z = 15$ at $(0, 5)$.

**Common mistake:** For unbounded regions, verify that no point in the feasible region gives a smaller value. Check if $5x + 3y < 15$ has any solution in the feasible region.

## Worked Example 3 — Manufacturing Problem

**Problem:** A manufacturer produces two products. Product A requires 2 hours on machine I and 1 hour on machine II. Product B requires 1 hour on machine I and 3 hours on machine II. Machine I is available for 8 hours and machine II for 9 hours. If profit is Rs. 400 per unit of A and Rs. 500 per unit of B, find the production plan that maximizes profit.

**Solution:**

Let $x$ = units of A, $y$ = units of B.

Objective: Maximize $Z = 400x + 500y$

Constraints:
$$2x + y \leq 8 \quad \text{(Machine I)}$$
$$x + 3y \leq 9 \quad \text{(Machine II)}$$
$$x, y \geq 0$$

Corner points:
- $(0, 0)$: $Z = 0$
- $(4, 0)$: $Z = 1600$
- $(0, 3)$: $Z = 1500$
- $(3, 2)$: intersection of $2x + y = 8$ and $x + 3y = 9$; $Z = 400(3) + 500(2) = 2200$

Maximum profit is Rs. 2200 by producing 3 units of A and 2 units of B.

**Common mistake:** Not converting word problems into mathematical constraints correctly. Always define variables first and then translate each condition.

## Practice Problems

1. Maximize $Z = 5x + 3y$ subject to $x + y \leq 6$, $2x + y \leq 8$, $x, y \geq 0$.
2. Minimize $Z = 2x + 3y$ subject to $x + y \geq 4$, $x + 2y \geq 6$, $x, y \geq 0$.
3. A diet must contain at least 400 units of carbohydrates and 300 units of protein. Food A costs Rs. 2 per unit and provides 100 units of carbs and 50 units of protein. Food B costs Rs. 3 per unit and provides 50 units of carbs and 100 units of protein. Minimize the cost.

## Why This Matters

Linear programming is used in logistics, supply chain management, telecommunications, and finance. It provides optimal solutions to resource allocation problems and forms the basis for more advanced optimization techniques.

## Common Exam Patterns

- Always graph constraints and identify the feasible region
- The optimal solution is at a corner point (vertex theorem)
- For unbounded regions, always verify the minimum or maximum exists
- Word problems require careful translation of English to mathematical constraints
- Practice with both maximization and minimization problems
