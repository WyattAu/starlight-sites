---


date: 2026-07-23T21:57:32+01:00
title: "Linear Programming | CBSE - Wyatt's Notes"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"cbse\", \"url\": \"https://cbse.wyattau.com\"}, {\"name\": \"Mathematics\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Linear Programming", "url": "https://cbse.wyattau.com/mathematics/linear-programming"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/linear-programming/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Linear Programming",
  "description": "CBSE Class 12 mathematics: Linear programming with graphical method, simplex method, and worked examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://cbse.wyattau.com"
  },
  "url": "https://cbse.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

## Linear Programming

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

## Common Mistakes

**Checking interior points instead of corner points.** The corner point theorem guarantees the optimum is at a vertex. Students waste time checking interior points or midpoints, which can never be optimal for linear objectives. Always evaluate Z only at corner points.

**Forgetting to verify unbounded regions.** When the feasible region is unbounded (extends to infinity), you must verify that no point gives a better value. For minimization, check whether Z < minimum corner value has any solution in the feasible region. For maximization, the maximum may not exist if the region is unbounded in the direction of increase.

**Incorrectly translating word problems into constraints.** "At least" means ≥, "at most" means ≤, "no more than" means ≤. Students often reverse these. Always define variables first, then systematically translate each word condition.

## Cross-References

- **[Matrices](../matrices/index.md):** The simplex method uses matrix operations to solve linear programming problems systematically.
- **[Derivatives](../derivatives/index.md):** Optimization without constraints uses derivatives; linear programming handles constrained optimization.
- **[Probability](../probability/index.md):** Decision theory and expected value problems sometimes lead to linear programming formulations.
- **[Biomolecules (Chemistry)](../../chemistry/biomolecules/index.md):** Diet optimization problems in linear programming often involve nutritional constraints from biochemistry.

## Practice Problems

1. Maximize $Z = 5x + 3y$ subject to $x + y \leq 6$, $2x + y \leq 8$, $x, y \geq 0$.
2. Minimize $Z = 2x + 3y$ subject to $x + y \geq 4$, $x + 2y \geq 6$, $x, y \geq 0$.
3. A diet must contain at least 400 units of carbohydrates and 300 units of protein. Food A costs Rs. 2 per unit and provides 100 units of carbs and 50 units of protein. Food B costs Rs. 3 per unit and provides 50 units of carbs and 100 units of protein. Minimize the cost.

## Why This Matters

Linear programming is used in logistics, supply chain management, telecommunications, and finance. It provides optimal solutions to resource allocation problems and forms the basis for more advanced optimization techniques.

## Intuition

**Finding the best answer by drawing a map:** Linear programming is like finding the highest point on a mountain by walking along the boundary of a fenced area. The fence represents your constraints (what you can't do), and the terrain represents your objective (what you want to maximize). The corner point theorem says the best answer always lies at a corner of the feasible region — you never need to check the middle of an edge or the interior. This is because linear functions can't have their maximum in the middle of a flat region.

**Why it matters:** Linear programming is used by airlines to optimize flight routes, factories to plan production schedules, logistics companies to minimize delivery costs, and farmers to decide crop allocation. Every time you see an "optimal" solution in business, there's likely a linear programming algorithm behind it.

**The key insight:** The feasible region is convex (no dents), which guarantees that any local optimum is also a global optimum — no need to worry about getting stuck in a local maximum.

## Common Exam Patterns

- Always graph constraints and identify the feasible region
- The optimal solution is at a corner point (vertex theorem)
- For unbounded regions, always verify the minimum or maximum exists
- Word problems require careful translation of English to mathematical constraints
- Practice with both maximization and minimization problems
