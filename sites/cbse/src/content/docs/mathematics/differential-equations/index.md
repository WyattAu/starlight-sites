---
title: "Differential Equations"
description: "CBSE Class 12 mathematics: Order, degree, methods of solving, and worked examples."
---

# Differential Equations

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

## Practice Problems

1. Solve $\frac{dy}{dx} = e^{x+y}$ by separation of variables.
2. Solve $\frac{dy}{dx} = \frac{x^2 + y^2}{xy}$.
3. Solve $\frac{dy}{dx} - 2y = e^{3x}$.

## Why This Matters

Differential equations model nearly every physical phenomenon: population growth, radioactive decay, heat transfer, fluid flow, electrical circuits, and chemical reactions. They are the mathematical language of science and engineering.

## Common Exam Patterns

- Identify the type of differential equation before choosing a method
- Separable equations are the simplest to solve
- For homogeneous equations, always use $v = y/x$
- Linear equations require finding the integrating factor first
- Check your solution by differentiating and substituting back into the original equation
