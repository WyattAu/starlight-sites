---
title: "Calculus"
description: "HSC mathematics: Calculus"
---

# Calculus

HSC mathematics study notes - Calculus

## Key Concepts

### Differentiation

**First Principles:** $f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$

**Common Rules:**
- Power rule: $\frac{d}{dx}[x^n] = nx^{n-1}$
- Chain rule: $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$
- Product rule: $\frac{d}{dx}[fg] = f'g + fg'$
- Quotient rule: $\frac{d}{dx}\left[\frac{f}{g}\right] = \frac{f'g - fg'}{g^2}$

### Integration

**Basic Integrals:**
$$\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)$$
$$\int \frac{1}{x} \, dx = \ln|x| + C$$
$$\int e^x \, dx = e^x + C$$

**Definite Integral:** $\int_a^b f(x) \, dx = F(b) - F(a)$

### Applications

**Stationary points:** Set $f'(x) = 0$ and use the second derivative test:
- $f''(x) > 0$: local minimum
- $f''(x) < 0$: local maximum

**Area between curves:** $A = \int_a^b |f(x) - g(x)| \, dx$

**Kinematics:** $v = \frac{ds}{dt}$, $a = \frac{dv}{dt}$

## Worked Examples

### Example 1: Differentiation

**Problem:** Find the derivative of $f(x) = 3x^4 - 2x^2 + 5x - 1$.

**Solution:**

Step 1: Apply the power rule to each term:
$$f'(x) = 3 \cdot 4x^3 - 2 \cdot 2x + 5 \cdot 1 - 0$$

Step 2: Simplify:
$$f'(x) = 12x^3 - 4x + 5$$

**Answer:** $f'(x) = 12x^3 - 4x + 5$

### Example 2: Chain Rule

**Problem:** Find $\frac{dy}{dx}$ if $y = (3x + 2)^5$.

**Solution:**

Step 1: Let $u = 3x + 2$, so $y = u^5$

Step 2: $\frac{dy}{du} = 5u^4$ and $\frac{du}{dx} = 3$

Step 3: Apply chain rule:
$$\frac{dy}{dx} = 5u^4 \cdot 3 = 15(3x + 2)^4$$

**Answer:** $\frac{dy}{dx} = 15(3x + 2)^4$

### Example 3: Area Under a Curve

**Problem:** Find the area enclosed between $y = x^2$ and $y = x$ for $0 \leq x \leq 1$.

**Solution:**

Step 1: Find intersection points: $x^2 = x \Rightarrow x(x-1) = 0 \Rightarrow x = 0$ or $x = 1$

Step 2: On $[0, 1]$, $x \geq x^2$, so:
$$A = \int_0^1 (x - x^2) \, dx$$

Step 3: Integrate:
$$A = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \left(\frac{1}{2} - \frac{1}{3}\right) - 0 = \frac{1}{6}$$

**Answer:** Area $= \frac{1}{6}$ square units

## Exam Tips

1. Always include the constant of integration $C$ for indefinite integrals
2. For chain rule problems, identify the inner and outer functions
3. To find areas between curves, always determine which function is above
4. Check stationary points using the second derivative test, not just the first

## Practice Problems

1. Find the derivative of $f(x) = \sin(3x^2)$
2. Evaluate $\int_0^2 (4x^3 - 6x) \, dx$
3. Find the area between $y = x^2$ and $y = 4$ for $-2 \leq x \leq 2$

### Example 4: Product Rule

**Problem:** Find the derivative of $f(x) = x^2 e^x$.

**Solution:**

Step 1: Apply the product rule with $u = x^2$ and $v = e^x$:
$$f'(x) = u'v + uv' = 2x \cdot e^x + x^2 \cdot e^x$$

Step 2: Factor:
$$f'(x) = e^x(2x + x^2) = xe^x(2 + x)$$

**Answer:** $f'(x) = xe^x(x + 2)$

### Example 5: Definite Integral

**Problem:** Evaluate $\int_1^4 \frac{1}{\sqrt{x}} \, dx$.

**Solution:**

Step 1: Rewrite: $\int_1^4 x^{-1/2} \, dx$

Step 2: Integrate using the power rule:
$$\left[\frac{x^{1/2}}{1/2}\right]_1^4 = \left[2\sqrt{x}\right]_1^4$$

Step 3: Evaluate at limits:
$$2\sqrt{4} - 2\sqrt{1} = 4 - 2 = 2$$

**Answer:** The integral equals $2$

### Example 6: Optimisation

**Problem:** A farmer has $200\,\text{m}$ of fencing and wants to enclose a rectangular paddock along a river (no fence needed on the river side). Find the dimensions that maximize the area.

**Solution:**

Step 1: Let $x$ be the width (two sides) and $l$ be the length (one side parallel to river).

Step 2: Fencing constraint: $2x + l = 200 \implies l = 200 - 2x$

Step 3: Area: $A = x \cdot l = x(200 - 2x) = 200x - 2x^2$

Step 4: Find stationary points: $\frac{dA}{dx} = 200 - 4x = 0 \implies x = 50\,\text{m}$

Step 5: Second derivative test: $\frac{d^2A}{dx^2} = -4 < 0$, so this is a maximum.

Step 6: Length: $l = 200 - 2(50) = 100\,\text{m}$

**Answer:** Width $= 50\,\text{m}$, length $= 100\,\text{m}$, maximum area $= 5000\,\text{m}^2$

## Why This Matters

Calculus is the mathematical study of continuous change. Differentiation and integration are used in physics, engineering, economics, biology, and virtually every quantitative science.

## Additional Exam Tips

5. For optimisation problems, always check the second derivative or boundary values
6. The chain rule is the most commonly tested rule — practise identifying inner and outer functions
7. When finding areas between curves, always sketch the graph first
8. Remember: $\int_a^b f(x) \, dx = F(b) - F(a)$, not $F(a) - F(b)$
