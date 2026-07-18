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
