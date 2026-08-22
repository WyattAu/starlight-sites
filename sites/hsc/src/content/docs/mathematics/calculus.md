---

date: 2026-07-23T21:57:32+01:00
title: "Calculus | HSC - Wyatt's Notes"
description: "\"itemListElement\": [{\"name\": \"Home\", \"url\": \"https://wyattau.com\"}, {\"name\": \"hsc\", \"url\": \"https://hsc.wyattau.com\"}, {\"name\": \"Mathematics\", \"url\":"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "hsc", "url": "https://hsc.wyattau.com"}, {"name": "Mathematics", "url": "https://hsc.wyattau.com/mathematics"}, {"name": "Calculus", "url": "https://hsc.wyattau.com/mathematics/calculus"}]
}
</script>

## Calculus

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

1. For optimisation problems, always check the second derivative or boundary values
2. The chain rule is the most commonly tested rule — practise identifying inner and outer functions
3. When finding areas between curves, always sketch the graph first
4. Remember: $\int_a^b f(x) \, dx = F(b) - F(a)$, not $F(a) - F(b)$

## More Worked Examples

### Example 7: Quotient Rule

**Problem:** Find the derivative of $f(x) = \frac{\sin x}{x^2 + 1}$.

**Solution:**

Step 1: Apply the quotient rule with $u = \sin x$ and $v = x^2 + 1$:
$$f'(x) = \frac{u'v - uv'}{v^2}$$

Step 2: Compute derivatives:
$$u' = \cos x, \quad v' = 2x$$

Step 3: Substitute:
$$f'(x) = \frac{\cos x \cdot (x^2 + 1) - \sin x \cdot 2x}{(x^2 + 1)^2}$$

Step 4: Simplify:
$$f'(x) = \frac{(x^2 + 1)\cos x - 2x\sin x}{(x^2 + 1)^2}$$

**Answer:** $f'(x) = \frac{(x^2 + 1)\cos x - 2x\sin x}{(x^2 + 1)^2}$

**Common mistake:** Forgetting the minus sign in the quotient rule numerator. Remember: "low d-high minus high d-low, over low squared."

### Example 8: Integration by Substitution

**Problem:** Evaluate $\int_0^1 2x\sqrt{x^2 + 1} \, dx$.

**Solution:**

Step 1: Let $u = x^2 + 1$, so $du = 2x \, dx$

Step 2: Change limits: when $x = 0$, $u = 1$; when $x = 1$, $u = 2$

Step 3: Substitute:
$$\int_0^1 2x\sqrt{x^2 + 1} \, dx = \int_1^2 \sqrt{u} \, du = \int_1^2 u^{1/2} \, du$$

Step 4: Integrate:
$$\left[\frac{2}{3}u^{3/2}\right]_1^2 = \frac{2}{3}(2^{3/2} - 1^{3/2}) = \frac{2}{3}(2\sqrt{2} - 1)$$

**Answer:** $\frac{2}{3}(2\sqrt{2} - 1) \approx 1.22$

**Common mistake:** Forgetting to change the limits of integration when making a substitution. If you change variables, you must also change the limits.

### Example 9: Kinematics with Calculus

**Problem:** A particle moves along a line with velocity $v(t) = 3t^2 - 12t + 9$ m/s. Find the total distance traveled between $t = 0$ and $t = 4$ seconds.

**Solution:**

Step 1: Find when $v(t) = 0$:
$$3t^2 - 12t + 9 = 0 \implies t^2 - 4t + 3 = 0 \implies (t-1)(t-3) = 0$$
$$t = 1 \text{ or } t = 3$$

Step 2: Check the sign of $v(t)$ in each interval:

- $[0, 1]$: $v(0.5) = 3(0.25) - 12(0.5) + 9 = 0.75 - 6 + 9 = 3.75 > 0$ (moving forward)
- $[1, 3]$: $v(2) = 3(4) - 12(2) + 9 = 12 - 24 + 9 = -3 < 0$ (moving backward)
- $[3, 4]$: $v(3.5) = 3(12.25) - 12(3.5) + 9 = 36.75 - 42 + 9 = 3.75 > 0$ (moving forward)

Step 3: Distance = $\int_0^4 |v(t)| \, dt$:
$$= \int_0^1 (3t^2 - 12t + 9) \, dt + \int_1^3 -(3t^2 - 12t + 9) \, dt + \int_3^4 (3t^2 - 12t + 9) \, dt$$

Step 4: Compute each integral:
$$\int (3t^2 - 12t + 9) \, dt = t^3 - 6t^2 + 9t$$

$$[t^3 - 6t^2 + 9t]_0^1 = (1 - 6 + 9) - 0 = 4$$

$$-[t^3 - 6t^2 + 9t]_1^3 = -[(27 - 54 + 27) - (1 - 6 + 9)] = -[0 - 4] = 4$$

$$[t^3 - 6t^2 + 9t]_3^4 = [(64 - 96 + 36) - (27 - 54 + 27)] = [4 - 0] = 4$$

Step 5: Total distance = $4 + 4 + 4 = 12$ m

**Answer:** Total distance traveled is $12$ m

**Common mistake:** Confusing distance with displacement. Displacement would be $\int_0^4 v(t) \, dt = 4$, but distance requires integrating the absolute value of velocity.

### Example 10: Implicit Differentiation

**Problem:** Find $\frac{dy}{dx}$ if $x^2 + xy + y^2 = 7$.

**Solution:**

Step 1: Differentiate both sides with respect to $x$:
$$2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0$$

Step 2: Collect $\frac{dy}{dx}$ terms:
$$\frac{dy}{dx}(x + 2y) = -2x - y$$

Step 3: Solve:
$$\frac{dy}{dx} = \frac{-2x - y}{x + 2y} = -\frac{2x + y}{x + 2y}$$

**Answer:** $\frac{dy}{dx} = -\frac{2x + y}{x + 2y}$

**Common mistake:** Forgetting that $y$ is a function of $x$, so $\frac{d}{dx}[xy] = y + x\frac{dy}{dx}$ (product rule), not just $y$.

### Example 11: Integration by Parts

**Problem:** Evaluate $\int x \cos x \, dx$.

**Solution:**

Step 1: Choose $u = x$ and $dv = \cos x \, dx$

Step 2: Then $du = dx$ and $v = \sin x$

Step 3: Apply integration by parts $\int u \, dv = uv - \int v \, du$:
$$\int x \cos x \, dx = x \sin x - \int \sin x \, dx$$

Step 4: Evaluate the remaining integral:
$$= x \sin x - (-\cos x) + C = x \sin x + \cos x + C$$

**Answer:** $\int x \cos x \, dx = x \sin x + \cos x + C$

**Common mistake:** Choosing the wrong $u$ and $dv$. A good rule of thumb is LIATE (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) — choose $u$ from left to right.

### Example 12: Volume of Revolution

**Problem:** Find the volume generated when the region bounded by $y = x^2$, $y = 0$, $x = 1$ is rotated about the $x$-axis.

**Solution:**

Step 1: The volume formula for rotation about the $x$-axis:
$$V = \pi \int_a^b [f(x)]^2 \, dx$$

Step 2: Substitute $f(x) = x^2$, $a = 0$, $b = 1$:
$$V = \pi \int_0^1 (x^2)^2 \, dx = \pi \int_0^1 x^4 \, dx$$

Step 3: Integrate:
$$V = \pi \left[\frac{x^5}{5}\right]_0^1 = \pi \left(\frac{1}{5} - 0\right) = \frac{\pi}{5}$$

**Answer:** Volume $= \frac{\pi}{5}$ cubic units

**Common mistake:** Forgetting to square the function when using the disk method. The formula is $\pi \int [f(x)]^2 \, dx$, not $\pi \int f(x) \, dx$.

## Cross-References

- [Algebra](../mathematics/algebra) -- Quadratic equations and logarithmic functions from algebra are prerequisites for many calculus techniques.
- [Mechanics](../physics/mechanics) -- Kinematics uses derivatives and integrals to describe motion, directly applying calculus to physics.
- [Waves](../physics/waves) -- Wave equations involve trigonometric differentiation and integration used throughout this topic.
- [Organic](../chemistry/organic) -- Reaction rate equations in organic chemistry use exponential and logarithmic functions from calculus.

## Intuition

**Calculus is about change and accumulation:** Differentiation measures how fast something changes (slope of a curve), while integration measures how much accumulates (area under a curve). These are inverse operations — the Fundamental Theorem of Calculus connects them, just as addition and subtraction are inverses.

**Why it matters:** Calculus is the language of change — it describes how planets orbit, how populations grow, how heat flows, and how objects move. Every branch of science and engineering uses calculus to model dynamic systems.

**The key insight:** The derivative tells you the rate of change at an instant, while the integral tells you the total change over an interval — they're two perspectives on the same relationship.

## Common Mistakes

**Forgetting the constant of integration for indefinite integrals.** Every indefinite integral must include "+ C" because the derivative of a constant is zero. Students often omit the constant, losing the family of antiderivatives. This is automatically handled in definite integrals via the Fundamental Theorem, but is essential for indefinite integrals.

**Confusing the product rule and chain rule.** The product rule (fg)' = f'g + fg' applies to the product of two functions. The chain rule (f(g(x)))' = f'(g(x)) * g'(x) applies to composition. Students often apply the product rule to composite functions or the chain rule to products, giving incorrect derivatives.

**Forgetting to change limits when using substitution in definite integrals.** When substituting u = g(x), the limits of integration must also change to u(a) and u(b). Students sometimes evaluate the antiderivative at the original x-limits instead of the new u-limits, giving incorrect numerical answers.
