---
title: "Integrals"
description: "CBSE Class 12 mathematics: Integrals with integration techniques, definite integrals, and worked examples."
---

# Integrals

Integration is the reverse process of differentiation. This topic covers basic integrals, substitution, partial fractions, and definite integrals.

## Key Concepts

- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$ for $n \neq -1$
- $\int e^x \, dx = e^x + C$, $\int \frac{1}{x} \, dx = \ln|x| + C$
- $\int \sin x \, dx = -\cos x + C$, $\int \cos x \, dx = \sin x + C$
- Substitution: $\int f(g(x))g'(x) \, dx = \int f(u) \, du$ where $u = g(x)$
- Integration by parts: $\int u \, dv = uv - \int v \, du$
- Definite integral: $\int_a^b f(x) \, dx = F(b) - F(a)$

## Worked Example 1 — Substitution Method

**Problem:** Evaluate $\int 2x \cos(x^2) \, dx$.

**Solution:**

Let $u = x^2$, so $du = 2x \, dx$.

$$\int 2x \cos(x^2) \, dx = \int \cos u \, du = \sin u + C = \sin(x^2) + C$$

**Common mistake:** Forgetting to substitute back. The answer is $\sin(x^2) + C$, not $\sin u + C$.

## Worked Example 2 — Integration by Parts

**Problem:** Evaluate $\int x e^x \, dx$.

**Solution:**

Let $u = x$ and $dv = e^x \, dx$. Then $du = dx$ and $v = e^x$.

$$\int x e^x \, dx = x e^x - \int e^x \, dx = x e^x - e^x + C = e^x(x - 1) + C$$

**Common mistake:** Choosing the wrong $u$ and $dv$. Use LIATE (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) to choose $u$.

## Worked Example 3 — Definite Integral

**Problem:** Evaluate $\int_0^{\pi/2} \sin^2 x \, dx$.

**Solution:**

Use the identity $\sin^2 x = \frac{1 - \cos 2x}{2}$:

$$\int_0^{\pi/2} \sin^2 x \, dx = \int_0^{\pi/2} \frac{1 - \cos 2x}{2} \, dx = \frac{1}{2}\left[x - \frac{\sin 2x}{2}\right]_0^{\pi/2}$$

$$= \frac{1}{2}\left[\frac{\pi}{2} - 0 - (0 - 0)\right] = \frac{\pi}{4}$$

**Common mistake:** Forgetting to evaluate at both limits. The definite integral is $F(b) - F(a)$, not just $F(b)$.

## Practice Problems

1. Evaluate $\int \frac{x}{\sqrt{1 + x^2}} \, dx$ using substitution.
2. Evaluate $\int x \ln x \, dx$ using integration by parts.
3. Evaluate $\int_0^1 x^2 e^x \, dx$.

## Common Exam Patterns

- For substitution, look for a function and its derivative in the integrand
- For integration by parts, choose $u$ using LIATE rule
- For definite integrals, always evaluate at both limits
- Practice with trigonometric identities for integrals of $\sin^2 x$ and $\cos^2 x$
