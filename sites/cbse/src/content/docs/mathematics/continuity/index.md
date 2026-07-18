---
title: "Continuity and Differentiability"
description: "CBSE Class 12 mathematics: Continuity, differentiability, chain rule, and worked examples."
---

# Continuity and Differentiability

Continuity ensures a function has no breaks, jumps, or holes. Differentiability ensures a function has a defined derivative. Every differentiable function is continuous, but not vice versa.

## Key Concepts

- $f$ is continuous at $x = a$ if $\lim_{x \to a} f(x) = f(a)$
- Left-hand limit: $\lim_{x \to a^-} f(x)$, right-hand limit: $\lim_{x \to a^+} f(x)$
- $f$ is differentiable at $x = a$ if $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ exists
- Chain rule: $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$
- Implicit differentiation: differentiate both sides with respect to $x$
- Logarithmic differentiation: take $\ln$ of both sides before differentiating

## Worked Example 1 — Continuity at a Point

**Problem:** Determine whether $f(x) = \begin{cases} \frac{x^2 - 4}{x - 2} & x \neq 2 \\ 6 & x = 2 \end{cases}$ is continuous at $x = 2$.

**Solution:**

For $x \neq 2$:
$$f(x) = \frac{x^2 - 4}{x - 2} = \frac{(x-2)(x+2)}{x-2} = x + 2$$

Left-hand limit: $\lim_{x \to 2^-} f(x) = 2 + 2 = 4$

Right-hand limit: $\lim_{x \to 2^+} f(x) = 2 + 2 = 4$

But $f(2) = 6 \neq 4$.

Since $\lim_{x \to 2} f(x) \neq f(2)$, the function is not continuous at $x = 2$.

**Common mistake:** Evaluating the limit by direct substitution when the function has a removable discontinuity. Simplify first.

## Worked Example 2 — Chain Rule

**Problem:** Find $\frac{d}{dx}[\sin(\ln(x^2 + 1))]$.

**Solution:**

Let $u = \ln(x^2 + 1)$, $v = \sin(u)$:

$$\frac{d}{dx}[\sin(\ln(x^2 + 1))] = \cos(\ln(x^2 + 1)) \cdot \frac{1}{x^2 + 1} \cdot 2x$$

$$= \frac{2x \cos(\ln(x^2 + 1))}{x^2 + 1}$$

**Common mistake:** Forgetting one of the chain rule steps. Each nested function requires one more derivative factor.

## Worked Example 3 — Logarithmic Differentiation

**Problem:** Find $\frac{dy}{dx}$ if $y = x^x$.

**Solution:**

Take $\ln$ of both sides:
$$\ln y = x \ln x$$

Differentiate implicitly:
$$\frac{1}{y}\frac{dy}{dx} = \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

$$\frac{dy}{dx} = y(\ln x + 1) = x^x(\ln x + 1)$$

**Common mistake:** Trying to use the power rule for $x^x$. The power rule applies to $x^n$ (constant exponent), not $a^x$ (constant base).

## Practice Problems

1. Determine if $f(x) = |x - 3|$ is differentiable at $x = 3$.
2. Find $\frac{dy}{dx}$ if $y = e^{\sin x}$.
3. Find $\frac{dy}{dx}$ if $y = (\sin x)^x$.

## Why This Matters

Continuity and differentiability are the foundations of calculus. They guarantee that functions behave well enough for differentiation and integration, which are used throughout physics, engineering, economics, and biology.

## Common Exam Patterns

- Check continuity by verifying left limit = right limit = function value
- Differentiability implies continuity, but continuity does not imply differentiability
- Chain rule problems often have 2-3 nested functions
- Logarithmic differentiation is useful for functions of the form $f(x)^{g(x)}$
- Piecewise functions often have discontinuities at the boundaries
