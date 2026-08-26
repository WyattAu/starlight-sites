---


date: 2026-07-23T21:57:32+01:00
title: "Differential Equations | CBSE - Wyatt's Notes"
description: "Comprehensive study notes for Differential Equations with worked examples, practice problems, and key concepts for exam preparation."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Differential Equations", "url": "https://cbse.wyattau.com/mathematics/differential-equations"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/differential-equations/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Differential Equations",
  "description": "CBSE Class 12 mathematics: Order, degree, methods of solving, and worked examples.",
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

## Differential Equations

Differential equations relate a function to its derivatives. This topic covers classification, methods of solution (separation of variables, homogeneous equations, linear equations), and applications.

## Key Concepts

- Order: the highest derivative present in the equation
- Degree: the power of the highest derivative (when polynomial in derivatives)
- General solution: contains arbitrary constants equal to the order
- Particular solution: obtained by applying initial/boundary conditions
- Separable variables: $\frac{dy}{dx} = f(x)g(y)$
- Homogeneous equation: $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$
- Linear first-order: $\frac{dy}{dx} + Py = Q$ where $P$ and $Q$ are functions of $x$
- Integrating factor: $\mu = e^{\int P \, dx}$ for linear equations

## Worked Example 1 — Separation of Variables

**Problem:** Solve $\frac{dy}{dx} = \frac{x}{y}$ given $y(0) = 4$.

**Solution:**

Separate variables:
$$y \, dy = x \, dx$$

Integrate both sides:
$$\frac{y^2}{2} = \frac{x^2}{2} + C$$

Apply initial condition $y(0) = 4$:
$$\frac{16}{2} = 0 + C \implies C = 8$$

Solution:
$$\frac{y^2}{2} = \frac{x^2}{2} + 8 \implies y^2 = x^2 + 16$$

**Common mistake:** Forgetting to apply the initial condition to find $C$. The general solution is not the final answer.

## Worked Example 2 — Homogeneous Differential Equation

**Problem:** Solve $\frac{dy}{dx} = \frac{x + y}{x}$.

**Solution:**

Rewrite as:
$$\frac{dy}{dx} = 1 + \frac{y}{x}$$

Let $v = \frac{y}{x}$, so $y = vx$ and $\frac{dy}{dx} = v + x\frac{dv}{dx}$:

$$v + x\frac{dv}{dx} = 1 + v$$

$$x\frac{dv}{dx} = 1$$

Separate and integrate:
$$dv = \frac{dx}{x}$$

$$v = \ln|x| + C$$

Substitute back $v = y/x$:
$$\frac{y}{x} = \ln|x| + C$$

$$y = x\ln|x| + Cx$$

**Common mistake:** Not recognizing that the equation is homogeneous. If $\frac{dy}{dx} = F\left(\frac{y}{x}\right)$, the substitution $v = y/x$ always works.

## Worked Example 3 — Linear Differential Equation

**Problem:** Solve $\frac{dy}{dx} + \frac{y}{x} = x^2$.

**Solution:**

This is linear with $P = \frac{1}{x}$ and $Q = x^2$.

Integrating factor:
$$\mu = e^{\int \frac{1}{x} dx} = e^{\ln x} = x$$

Multiply through by $\mu$:
$$x\frac{dy}{dx} + y = x^3$$

$$\frac{d}{dx}(xy) = x^3$$

Integrate:
$$xy = \frac{x^4}{4} + C$$

$$y = \frac{x^3}{4} + \frac{C}{x}$$

**Common mistake:** Forgetting to multiply the entire equation by the integrating factor, not just the $dy/dx$ term.

## Cross-References

- **[Integrals](../integrals/index):** Solving differential equations requires integration — the antiderivative is the tool that reverses differentiation.
- **[Derivatives](../derivatives/index):** Differentiation rules underpin how you verify solutions by substituting back into the original equation.
- **[Probability](../probability/index):** Probability distributions and expected values involve differential equations in their continuous forms.
- **[Chemical Kinetics (Chemistry)](../../chemistry/chemical-kinetics/index):** Rate laws in chemistry are differential equations — the connection between math and real chemical systems.

## Practice Problems

1. Solve $\frac{dy}{dx} = e^{x+y}$ by separation of variables.
2. Solve $\frac{dy}{dx} = \frac{x^2 + y^2}{xy}$.
3. Solve $\frac{dy}{dx} - 2y = e^{3x}$.

## Why This Matters

Differential equations model nearly every physical phenomenon: population growth, radioactive decay, heat transfer, fluid flow, electrical circuits, and chemical reactions. They are the mathematical language of science and engineering.

## Intuition

**Equations that describe change itself:** Differential equations are like recipes that describe how things evolve — they tell you the rate of change at every point, and you figure out the actual behavior by "integrating" those rates. Think of it as being told the speed of a car at every moment (that's the differential equation) and having to reconstruct the entire journey (that's the solution). Separation of variables is the simplest case: if the x-parts and y-parts can be separated onto opposite sides of the equation, you can integrate each side independently.

**Why it matters:** Differential equations model virtually every dynamic system in the universe — population growth, radioactive decay, heat flow, vibrations of bridges, flight paths of rockets, and the spread of diseases. They are the mathematical language of physics, engineering, biology, and economics. Without them, we couldn't design buildings, predict weather, or understand how medications circulate in your body.

**The key insight:** The order of a differential equation tells you how many constants of integration you need — each derivative you "undo" introduces one arbitrary constant, which physical conditions (initial values) pin down.

## Common Exam Patterns

- Identify the type of differential equation before choosing a method
- Separable equations are the simplest to solve
- For homogeneous equations, always use $v = y/x$
- Linear equations require finding the integrating factor first
- Check your solution by differentiating and substituting back into the original equation

## Common Mistakes

**Confusing the order and degree of a differential equation.** The order is the highest derivative present (e.g., d^2y/dx^2 gives order 2). The degree is the power of the highest derivative when the equation is polynomial in derivatives. Students often swap these or forget to clear fractions before determining the degree.

**Forgetting to check if a differential equation is homogeneous before substituting v = y/x.** The substitution v = y/x only works for homogeneous equations where dy/dx = F(y/x). If the equation is not homogeneous, this substitution does not simplify it. Always verify the homogeneous condition first.

**Making errors with the integrating factor in linear equations.** For dy/dx + Py = Q, the integrating factor is mu = e^(integral P dx). Students often forget to compute the integral of P before exponentiating, or confuse P with Q. The integrating factor must be applied to both sides of the equation after multiplication.
