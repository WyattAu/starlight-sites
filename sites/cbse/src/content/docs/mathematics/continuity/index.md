---
sources:
  - text: Standard textbook reference

sources:
  - text: Standard textbook reference

sources:
  - text: Standard textbook reference
date: 2026-07-23T21:57:32+01:00
sources:
  - text: Standard textbook reference
title: "Continuity and Differentiability"
sources:
  - text: Standard textbook reference
description: "This section covers continuity and differentiability concepts, definitions, and applications with worked examples and practice problems."
sources:
  - text: Standard textbook reference
---
sources:
  - text: Standard textbook reference

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Continuity", "url": "https://cbse.wyattau.com/mathematics/continuity"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/continuity/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Continuity and Differentiability",
  "description": "CBSE Class 12 mathematics: Continuity, differentiability, chain rule, and worked examples.",
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

## Continuity and Differentiability

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

## Intuition

**A function is continuous if you can draw it without lifting your pen:** Continuity means there are no holes, jumps, or vertical asymptotes — the function flows smoothly. Think of it as a road with no potholes or cliffs. Differentiability is stricter: it means the road not only exists but has a well-defined slope at every point (no sharp corners). The absolute value function |x| is continuous at x = 0 (no hole) but not differentiable there (sharp V-shape). Chain rule, implicit differentiation, and logarithmic differentiation are just tools for finding slopes of curves that are hard to differentiate directly.

**Why it matters:** Continuity and differentiability are the foundations of calculus — they guarantee that limits, derivatives, and integrals work properly. Every physical law expressed as a differential equation assumes continuity. Without these concepts, we couldn't model motion, growth, decay, or virtually any changing quantity.

**The key insight:** Differentiability implies continuity (if a function has a derivative, it must be continuous), but continuity does NOT imply differentiability (a continuous function can have sharp corners). This one-way relationship is a fundamental theorem of calculus.

## Common Exam Patterns

- Check continuity by verifying left limit = right limit = function value
- Differentiability implies continuity, but continuity does not imply differentiability
- Chain rule problems often have 2-3 nested functions
- Logarithmic differentiation is useful for functions of the form $f(x)^{g(x)}$
- Piecewise functions often have discontinuities at the boundaries

## Key Formulas

- Continuity: $\lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = f(a)$
- Derivative definition: $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$
- Chain rule: $\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$
- Implicit differentiation: differentiate both sides, then solve for $\frac{dy}{dx}$
- Logarithmic differentiation: $\frac{d}{dx}[f(x)] = f(x) \cdot \frac{d}{dx}[\ln f(x)]$

## Worked Example 4 — Continuity of Piecewise Function

**Problem:** Find the value of $k$ if $f(x) = \begin{cases} kx + 1 & x \leq 3 \\ 2x - 1 & x > 3 \end{cases}$ is continuous at $x = 3$.

**Solution:**

For continuity at $x = 3$, we need $\lim_{x \to 3^-} f(x) = \lim_{x \to 3^+} f(x) = f(3)$.

Left-hand limit: $\lim_{x \to 3^-} f(x) = k(3) + 1 = 3k + 1$

Right-hand limit: $\lim_{x \to 3^+} f(x) = 2(3) - 1 = 5$

Function value: $f(3) = 3k + 1$

Setting equal: $3k + 1 = 5 \implies k = \frac{4}{3}$

**Common mistake:** Forgetting to check that the function value equals the limits, not just that the left and right limits are equal.

## Worked Example 5 — Derivative Using Chain Rule (Multi-layer)

**Problem:** Find $\frac{d}{dx} \left[ \ln\left(\sqrt{\sin(x^2)}\right) \right]$.

**Solution:**

Simplify first: $\ln\left(\sqrt{\sin(x^2)}\right) = \frac{1}{2} \ln(\sin(x^2))$

Now differentiate:
$$\frac{d}{dx} \left[ \frac{1}{2} \ln(\sin(x^2)) \right] = \frac{1}{2} \cdot \frac{1}{\sin(x^2)} \cdot \cos(x^2) \cdot 2x$$

$$= \frac{x \cos(x^2)}{\sin(x^2)} = x \cot(x^2)$$

**Common mistake:** Not simplifying before differentiating. Simplifying $\ln(\sqrt{u})$ to $\frac{1}{2}\ln u$ makes the chain rule much easier.

## Worked Example 6 — Implicit Differentiation

**Problem:** Find $\frac{dy}{dx}$ if $x^2 + y^2 + \sin(xy) = 4$.

**Solution:**

Differentiate both sides with respect to $x$:
$$2x + 2y \frac{dy}{dx} + \cos(xy) \left(y + x \frac{dy}{dx}\right) = 0$$

Expand:
$$2x + 2y \frac{dy}{dx} + y\cos(xy) + x\cos(xy) \frac{dy}{dx} = 0$$

Collect $\frac{dy}{dx}$ terms:
$$\frac{dy}{dx} \left(2y + x\cos(xy)\right) = -2x - y\cos(xy)$$

$$\frac{dy}{dx} = \frac{-2x - y\cos(xy)}{2y + x\cos(xy)}$$

**Common mistake:** Forgetting to apply the chain rule when differentiating $\sin(xy)$. The derivative of $\sin(xy)$ is $\cos(xy) \cdot (y + x \frac{dy}{dx})$.

## Exam Tips

1. For piecewise functions, always check continuity at the boundary by computing left and right limits separately
2. The function $|x - a|$ is continuous everywhere but not differentiable at $x = a$
3. When using logarithmic differentiation, remember that $\ln(ab) = \ln a + \ln b$ can simplify products
4. For implicit differentiation, always collect $\frac{dy}{dx}$ terms on one side before solving
5. The derivative of $a^x$ is $a^x \ln a$ (not $xa^{x-1}$), while the derivative of $x^n$ is $nx^{n-1}$ (not $n^x \ln x$)

## Common Mistakes

**Confusing continuity with differentiability.** A function can be continuous but not differentiable (like |x| at x = 0). Continuity means no breaks or jumps; differentiability means the derivative exists. Students often assume continuity implies differentiability, which is false.

**Forgetting that the derivative of a^x is a^x ln(a), not x*a^(x-1).** The power rule x^n -> nx^(n-1) applies only when x is the variable and n is constant. For a^x where a is constant, the derivative is a^x ln(a). Students frequently apply the power rule to exponential functions.

**Making sign errors in implicit differentiation.** When differentiating y^2 implicitly, the result is 2y * dy/dx, not just 2y. Students often forget the chain rule factor dy/dx when differentiating terms involving y. Always multiply by dy/dx when differentiating any term containing y with respect to x.

## Cross-References

- [Derivatives](../derivatives/index) -- Differentiability implies continuity, making continuity a prerequisite for understanding derivatives.
- [Integrals](../integrals/index) -- The definite integral requires the function to be continuous over the interval of integration.
- [Limits](../relations-functions/index) -- Continuity is defined in terms of limits, connecting the concept to the foundational notion of limiting behaviour.
