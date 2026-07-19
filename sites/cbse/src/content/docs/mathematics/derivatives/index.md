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
- $\frac{d}{dx}[\tan x] = \sec^2 x$
- $\frac{d}{dx}[\csc x] = -\csc x \cot x$, $\frac{d}{dx}[\sec x] = \sec x \tan x$
- $\frac{d}{dx}[\cot x] = -\csc^2 x$
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

## Worked Example 4 — Quotient Rule

**Problem:** Find $\frac{d}{dx}\left[\frac{x}{x^2 + 1}\right]$.

**Solution:**

Let $u = x$ and $v = x^2 + 1$. Then $\frac{du}{dx} = 1$ and $\frac{dv}{dx} = 2x$.

$$\frac{d}{dx}\left[\frac{x}{x^2+1}\right] = \frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \frac{x^2 + 1 - 2x^2}{(x^2+1)^2} = \frac{1 - x^2}{(x^2+1)^2}$$

**Common mistake:** Swapping $u$ and $v$ in the quotient rule formula. The numerator is $v \cdot u' - u \cdot v'$, not $u \cdot v' - v \cdot u'$.

## Worked Example 5 — Higher-Order Derivatives

**Problem:** If $y = e^{2x}$, find $\frac{d^2y}{dx^2}$.

**Solution:**

First derivative:
$$\frac{dy}{dx} = 2e^{2x}$$

Second derivative:
$$\frac{d^2y}{dx^2} = 2 \cdot 2e^{2x} = 4e^{2x}$$

**Common mistake:** Forgetting to apply the chain rule at each differentiation step. Each derivative of $e^{2x}$ brings down a factor of 2.

## Practice Problems

1. Find $\frac{d}{dx}[x^3 e^x]$ using the product rule.
2. Find $\frac{d}{dx}[\ln(\sin x)]$ using the chain rule.
3. Find $\frac{dy}{dx}$ if $xy + y^2 = 10$ using implicit differentiation.
4. Find $\frac{d}{dx}\left[\frac{\sin x}{1 + \cos x}\right]$ using the quotient rule.
5. Find the second derivative of $f(x) = x \ln x$.

## Common Exam Patterns

- Identify which rule to apply before differentiating
- For chain rule, always differentiate the outer function first, then multiply by derivative of inner function
- Practice implicit differentiation with equations of circles and ellipses
- Check answers by substituting back into the original equation when possible
- Higher-order derivatives require applying the differentiation rule repeatedly
- When a function is a product of more than two factors, differentiate one pair at a time

## Exam Tips

1. Write down $u$ and $v$ (or $u$ and $v$ for quotient rule) explicitly before computing derivatives.
2. For chain rule, identify the outermost function and work inward layer by layer.
3. In implicit differentiation, collect all $\frac{dy}{dx}$ terms on one side and factor.
4. Simplify your answer by factoring common terms; examiners reward simplified forms.
5. Verify your derivative by checking dimensions or testing a specific value.
