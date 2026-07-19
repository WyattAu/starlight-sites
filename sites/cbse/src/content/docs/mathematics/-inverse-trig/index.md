---
title: "Inverse Trigonometric Functions"
description: "CBSE Class 12 mathematics: Inverse trigonometric functions, properties, and worked examples."
---

# Inverse Trigonometric Functions

Inverse trigonometric functions reverse the action of trigonometric functions. They are essential for solving equations involving angles and for integration.

## Key Concepts

- $\sin^{-1}: [-1, 1] \to [-\pi/2, \pi/2]$
- $\cos^{-1}: [-1, 1] \to [0, \pi]$
- $\tan^{-1}: \mathbb{R} \to (-\pi/2, \pi/2)$
- $\sin^{-1}x + \cos^{-1}x = \pi/2$
- $\tan^{-1}x + \cot^{-1}x = \pi/2$
- $\sin^{-1}(-x) = -\sin^{-1}x$
- $\cos^{-1}(-x) = \pi - \cos^{-1}x$
- $\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$ for $xy < 1$

## Worked Example 1 — Simplification

**Problem:** Simplify $\sin^{-1}\left(\frac{3}{5}\right) + \sin^{-1}\left(\frac{5}{13}\right)$.

**Solution:**

Let $\alpha = \sin^{-1}(3/5)$, so $\sin\alpha = 3/5$, $\cos\alpha = 4/5$.

Let $\beta = \sin^{-1}(5/13)$, so $\sin\beta = 5/13$, $\cos\beta = 12/13$.

$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$$

$$= \frac{3}{5} \cdot \frac{12}{13} + \frac{4}{5} \cdot \frac{5}{13} = \frac{36}{65} + \frac{20}{65} = \frac{56}{65}$$

Therefore:
$$\sin^{-1}\left(\frac{3}{5}\right) + \sin^{-1}\left(\frac{5}{13}\right) = \sin^{-1}\left(\frac{56}{65}\right)$$

**Common mistake:** Forgetting to check that the sum is within the range $[-\pi/2, \pi/2]$.

## Worked Example 2 — Evaluation

**Problem:** Find the value of $\tan^{-1}(1) + \tan^{-1}(2) + \tan^{-1)(3)$.

**Solution:**

First, use the addition formula for $\tan^{-1}(1) + \tan^{-1}(2)$:
Since $1 \times 2 = 2 > 1$, use the identity $\tan^{-1}x + \tan^{-1}y = \pi + \tan^{-1}\left(\frac{x+y}{1-xy}\right)$ when $xy > 1$ and $x > 0$:

$$\tan^{-1}(1) + \tan^{-1}(2) = \pi + \tan^{-1}\left(\frac{1+2}{1-2}\right) = \pi + \tan^{-1}(-3) = \pi - \tan^{-1}(3)$$

Now add $\tan^{-1}(3)$:
$$\pi - \tan^{-1}(3) + \tan^{-1}(3) = \pi$$

**Common mistake:** Using the formula $\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$ without checking whether $xy < 1$.

## Worked Example 3 — Solving Equations

**Problem:** Solve $\sin^{-1}(x) + \cos^{-1}(x) = \frac{\pi}{3}$.

**Solution:**

Using the identity $\sin^{-1}x + \cos^{-1}x = \pi/2$:

$$\frac{\pi}{2} = \frac{\pi}{3}$$

This is a contradiction! The equation has no solution.

**Common mistake:** Not recognizing standard identities. If the equation were $\sin^{-1}x + \cos^{-1}x = \pi/2$, every $x \in [-1, 1]$ would be a solution.

## Practice Problems

1. Simplify $\cos^{-1}\left(\frac{4}{5}\right) + \cos^{-1}\left(\frac{12}{13}\right)$.
2. Find the value of $\tan^{-1}\left(\frac{1}{2}\right) + \tan^{-1}\left(\frac{1}{3}\right)$.
3. Solve $\tan^{-1}(2x) + \tan^{-1}(3x) = \pi/4$.

## Why This Matters

Inverse trigonometric functions are essential for integration (they appear as antiderivatives), solving equations in physics and engineering, and in any context where angles need to be computed from ratios.

## Common Exam Patterns

- Always check the range of the inverse function
- Use the addition formulas carefully, checking conditions on $xy$
- Standard values: $\sin^{-1}(1/2) = \pi/6$, $\tan^{-1}(1) = \pi/4$, $\cos^{-1}(1/2) = \pi/3$
- Practice converting between different inverse trig forms using complementary angle identities

## Key Formulas

- Domain and range:
  - $\sin^{-1} x$: domain $[-1, 1]$, range $[-\pi/2, \pi/2]$
  - $\cos^{-1} x$: domain $[-1, 1]$, range $[0, \pi]$
  - $\tan^{-1} x$: domain $\mathbb{R}$, range $(-\pi/2, \pi/2)$
- Complementary identities:
  - $\sin^{-1} x + \cos^{-1} x = \pi/2$
  - $\tan^{-1} x + \cot^{-1} x = \pi/2$
  - $\sec^{-1} x + \csc^{-1} x = \pi/2$
- Negative argument:
  - $\sin^{-1}(-x) = -\sin^{-1} x$
  - $\cos^{-1}(-x) = \pi - \cos^{-1} x$
  - $\tan^{-1}(-x) = -\tan^{-1} x$
- Addition formulas:
  - $\tan^{-1} x + \tan^{-1} y = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$ when $xy < 1$
  - $\tan^{-1} x + \tan^{-1} y = \pi + \tan^{-1}\left(\frac{x+y}{1-xy}\right)$ when $xy > 1, x > 0$

## Worked Example 4 — Converting Between Forms

**Problem:** Express $\cos^{-1}\left(\frac{3}{5}\right)$ in terms of $\sin^{-1}$.

**Solution:**

Let $\theta = \cos^{-1}(3/5)$, so $\cos\theta = 3/5$ and $\theta \in [0, \pi]$.

Since $\cos\theta = 3/5 > 0$, $\theta$ is in the first quadrant, so $\sin\theta > 0$.

$$\sin\theta = \sqrt{1 - \cos^2\theta} = \sqrt{1 - \frac{9}{25}} = \sqrt{\frac{16}{25}} = \frac{4}{5}$$

Therefore:
$$\cos^{-1}\left(\frac{3}{5}\right) = \sin^{-1}\left(\frac{4}{5}\right)$$

**Common mistake:** Forgetting that $\sin^{-1} x + \cos^{-1} x = \pi/2$, so $\cos^{-1} x = \pi/2 - \sin^{-1} x$. This is another valid answer.

## Worked Example 5 — Evaluating Expressions

**Problem:** Find the value of $\sin\left(2\tan^{-1}\frac{3}{4}\right)$.

**Solution:**

Let $\theta = \tan^{-1}(3/4)$, so $\tan\theta = 3/4$ and $\theta \in (-\pi/2, \pi/2)$.

Since $\tan\theta = 3/4 > 0$, $\theta$ is in the first quadrant.

$$\sin\theta = \frac{3}{5}, \quad \cos\theta = \frac{4}{5}$$

$$\sin(2\theta) = 2\sin\theta\cos\theta = 2 \times \frac{3}{5} \times \frac{4}{5} = \frac{24}{25}$$

**Common mistake:** Forgetting that $\tan^{-1}(3/4)$ gives an angle, not a ratio. After finding the angle, use it in the double-angle formula.

## Worked Example 6 — Solving Equations

**Problem:** Solve $\tan^{-1}(x+1) + \tan^{-1}(x-1) = \tan^{-1}\left(\frac{8}{31}\right)$.

**Solution:**

Using the addition formula (check $xy = (x+1)(x-1) = x^2 - 1$):

Case 1: $x^2 - 1 < 1$, i.e., $x^2 < 2$:
$$\tan^{-1}\left(\frac{(x+1)+(x-1)}{1-(x+1)(x-1)}\right) = \tan^{-1}\left(\frac{8}{31}\right)$$

$$\frac{2x}{1-(x^2-1)} = \frac{8}{31}$$

$$\frac{2x}{2-x^2} = \frac{8}{31}$$

$$62x = 16 - 8x^2$$

$$8x^2 + 62x - 16 = 0$$

$$4x^2 + 31x - 8 = 0$$

$$(4x - 1)(x + 8) = 0$$

$x = 1/4$ or $x = -8$

Check: For $x = 1/4$: $(1/4)^2 = 1/16 < 2$ (valid). For $x = -8$: $(-8)^2 = 64 > 2$ (not valid for Case 1).

For Case 2 ($x^2 > 1$), we need to check separately. Testing $x = -8$ in the original equation shows it doesn't satisfy.

**Answer:** $x = 1/4$

**Common mistake:** Not checking the condition $xy < 1$ when using the addition formula. Always verify the domain condition after solving.

## Exam Tips

1. Memorize the standard values: $\sin^{-1}(0) = 0$, $\sin^{-1}(1/2) = \pi/6$, $\sin^{-1}(1/\sqrt{2}) = \pi/4$, $\sin^{-1}(\sqrt{3}/2) = \pi/3$, $\sin^{-1}(1) = \pi/2$
2. When simplifying inverse trig expressions, always check that the result is within the correct range
3. For addition formulas, the condition on $xy$ determines which form to use
4. Converting between inverse trig functions: use complementary identities or construct a right triangle
5. Practice with both numerical and algebraic arguments

## Common Mistakes

### Mistake 1: Using the tangent addition formula without checking the condition $xy < 1$

The formula $\tan^{-1}x + \tan^{-1}y = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$ is only valid when $xy < 1$. When $xy > 1$ and $x > 0$, the correct formula is $\pi + \tan^{-1}\left(\frac{x+y}{1-xy}\right)$. Students frequently apply the first formula blindly and get answers that are off by $\pi$. Always check the product $xy$ before choosing which form to use.

### Mistake 2: Confusing the ranges of inverse trigonometric functions

Each inverse trigonometric function has a specific range: $\sin^{-1}$ maps to $[-\pi/2, \pi/2]$, $\cos^{-1}$ maps to $[0, \pi]$, and $\tan^{-1}$ maps to $(-\pi/2, \pi/2)$. Students often forget that $\cos^{-1}(-x) = \pi - \cos^{-1}x$ (not $-\cos^{-1}x$) because the range of $\cos^{-1}$ is $[0, \pi]$. Always verify that your answer falls within the correct range before finalising.

### Mistake 3: Forgetting the complementary angle identity

The identity $\sin^{-1}x + \cos^{-1}x = \pi/2$ is extremely useful for converting between inverse trig functions, but students often overlook it. For example, $\cos^{-1}(3/5) = \pi/2 - \sin^{-1}(3/5) = \sin^{-1}(4/5)$. When a problem gives you one inverse trig function and asks for another, check whether the complementary identity simplifies the calculation.
