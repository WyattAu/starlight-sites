---
title: "Derivatives"
description: "CBSE Class 12 mathematics: Derivatives with differentiation rules, chain rule, and worked examples."
---

# Derivatives

Derivatives measure the rate of change of a function with respect to its variable. This topic covers basic rules, chain rule, implicit differentiation, and applications.

## Key Concepts

- $\frac{d}{dx}[x^n] = nx^{n-1}$ (power rule)
- $\frac{d}{dx}[e^x] = e^x$, $\frac{d}{dx}[\ln x] = \frac{1}{x}$
- $\frac{d}{dx}[\sin x] = \cos x$, $\frac{d}{dx}[\cos x] = -\sin x$
- Product rule: $\frac{d}{dx}[uv] = u\frac{dv}{dx} + v\frac{du}{dx}$
- Quotient rule: $\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$
- Chain rule: $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

## Worked Example 1 — Product Rule

**Problem:** Find $\frac{d}{dx}[x^2 \sin x]$.

**Solution:**

Let $u = x^2$ and $v = \sin x$. Then $\frac{du}{dx} = 2x$ and $\frac{dv}{dx} = \cos x$.

$$\frac{d}{dx}[x^2 \sin x] = x^2 \cos x + \sin x \cdot 2x = x^2 \cos x + 2x \sin x$$

**Common mistake:** Forgetting to differentiate one of the factors. Both terms must be present.

## Worked Example 2 — Chain Rule

**Problem:** Find $\frac{d}{dx}[\sin(3x^2 + 1)]$.

**Solution:**

Let $u = 3x^2 + 1$, so $\frac{du}{dx} = 6x$.

$$\frac{d}{dx}[\sin(3x^2 + 1)] = \cos(3x^2 + 1) \cdot 6x = 6x \cos(3x^2 + 1)$$

**Common mistake:** Forgetting the inner derivative. The answer is not just $\cos(3x^2 + 1)$.

## Worked Example 3 — Implicit Differentiation

**Problem:** Find $\frac{dy}{dx}$ if $x^2 + y^2 = 25$.

**Solution:**

Differentiate both sides with respect to $x$:
$$2x + 2y\frac{dy}{dx} = 0$$

Solve for $\frac{dy}{dx}$:
$$\frac{dy}{dx} = -\frac{x}{y}$$

**Common mistake:** Treating $y$ as a constant when differentiating. Remember that $y$ is a function of $x$, so $\frac{d}{dx}[y^2] = 2y\frac{dy}{dx}$.

## Practice Problems

1. Find $\frac{d}{dx}[x^3 e^x]$ using the product rule.
2. Find $\frac{d}{dx}[\ln(\sin x)]$ using the chain rule.
3. Find $\frac{dy}{dx}$ if $xy + y^2 = 10$ using implicit differentiation.

## Common Exam Patterns

- Identify which rule to apply before differentiating
- For chain rule, always differentiate the outer function first, then multiply by derivative of inner function
- Practice implicit differentiation with equations of circles and ellipses
- Check answers by substituting back into the original equation when possible
