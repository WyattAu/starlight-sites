---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Integrals", "url": "https://cbse.wyattau.com/mathematics/integrals"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/integrals/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Integrals",
  "description": "CBSE Class 12 mathematics: Integrals with integration techniques, definite integrals, and worked examples.",
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
title: "Integrals"
description: "CBSE Class 12 mathematics: Integrals with integration techniques, definite integrals, and worked examples."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Integrals", "url": "https://cbse.wyattau.com/mathematics/integrals"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/integrals/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Integrals",
  "description": "CBSE Class 12 mathematics: Integrals with integration techniques, definite integrals, and worked examples.",
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

# Integrals

Integration is the reverse process of differentiation. This topic covers basic integrals, substitution, partial fractions, and definite integrals.

## Key Concepts

- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$ for $n \neq -1$
- $\int \frac{1}{x} \, dx = \ln|x| + C$
- $\int e^x \, dx = e^x + C$, $\int a^x \, dx = \frac{a^x}{\ln a} + C$
- $\int \sin x \, dx = -\cos x + C$, $\int \cos x \, dx = \sin x + C$
- $\int \sec^2 x \, dx = \tan x + C$, $\int \csc^2 x \, dx = -\cot x + C$
- $\int \sec x \tan x \, dx = \sec x + C$, $\int \csc x \cot x \, dx = -\csc x + C$
- Substitution: $\int f(g(x))g'(x) \, dx = \int f(u) \, du$ where $u = g(x)$
- Integration by parts: $\int u \, dv = uv - \int v \, du$
- Definite integral: $\int_a^b f(x) \, dx = F(b) - F(a)$
- Properties: $\int_a^b f(x) \, dx = -\int_b^a f(x) \, dx$, $\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$

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

## Worked Example 4 — Partial Fractions

**Problem:** Evaluate $\int \frac{2x + 3}{(x+1)(x+2)} \, dx$.

**Solution:**

Decompose into partial fractions:
$$\frac{2x+3}{(x+1)(x+2)} = \frac{A}{x+1} + \frac{B}{x+2}$$

$$2x + 3 = A(x+2) + B(x+1)$$

Set $x = -1$: $1 = A(1)$, so $A = 1$.
Set $x = -2$: $-1 = B(-1)$, so $B = 1$.

$$\int \frac{2x+3}{(x+1)(x+2)} \, dx = \int \frac{1}{x+1} \, dx + \int \frac{1}{x+2} \, dx = \ln|x+1| + \ln|x+2| + C$$

$$= \ln|(x+1)(x+2)| + C$$

**Common mistake:** Forgetting the absolute value inside the logarithm. The integral of $\frac{1}{x}$ is $\ln|x| + C$, not $\ln x + C$.

## Worked Example 5 — Integration by Substitution (Trigonometric)

**Problem:** Evaluate $\int \tan x \, dx$.

**Solution:**

Rewrite:
$$\int \tan x \, dx = \int \frac{\sin x}{\cos x} \, dx$$

Let $u = \cos x$, so $du = -\sin x \, dx$:

$$= -\int \frac{1}{u} \, du = -\ln|u| + C = -\ln|\cos x| + C = \ln|\sec x| + C$$

**Common mistake:** Not recognizing that $\tan x = \frac{\sin x}{\cos x}$ is the starting point. Many students forget this basic identity.

## Practice Problems

1. Evaluate $\int \frac{x}{\sqrt{1 + x^2}} \, dx$ using substitution.
2. Evaluate $\int x \ln x \, dx$ using integration by parts.
3. Evaluate $\int_0^1 x^2 e^x \, dx$.
4. Evaluate $\int \frac{3x + 5}{(x-1)(x+2)} \, dx$ using partial fractions.
5. Evaluate $\int \sec x \, dx$ (Hint: multiply by $\frac{\sec x + \tan x}{\sec x + \tan x}$).

## Common Exam Patterns

- For substitution, look for a function and its derivative in the integrand
- For integration by parts, choose $u$ using LIATE rule
- For definite integrals, always evaluate at both limits
- Practice with trigonometric identities for integrals of $\sin^2 x$ and $\cos^2 x$
- Partial fractions require the degree of the numerator to be less than the degree of the denominator
- For repeated linear factors, use $\frac{A}{(x-a)} + \frac{B}{(x-a)^2}$

## Exam Tips

1. Always include the constant of integration $C$ for indefinite integrals.
2. For definite integrals, write $F(b) - F(a)$ explicitly before computing.
3. When using substitution, change the limits of integration if the integral is definite.
4. Check your answer by differentiating the result.
5. For partial fractions with irreducible quadratic factors in the denominator, use $\frac{Ax + B}{ax^2 + bx + c}$.

## Intuition

Integration is the reverse of differentiation -- if a derivative gives you the rate, an integral gives you the total accumulated quantity. Think of it as adding up infinitely many infinitely thin slices to find total area under a curve. Substitution is like undoing a chain rule: you identify an inner function and simplify. Integration by parts undoes the product rule, letting you trade one integral for another that might be simpler. Definite integrals give exact numerical answers by evaluating the antiderivative at the boundaries and subtracting, like measuring the net displacement from a velocity graph.

## Cross-References

- [Derivatives](/docs/cbse/mathematics/derivatives) -- differentiation rules and chain rule
- [Matrices](/docs/cbse/mathematics/matrices) -- linear algebra and systems
- [CBSE Physics](/docs/cbse/physics) -- work as integral of force, and area under curves

## Common Mistakes

**Forgetting the constant of integration for indefinite integrals.** Every indefinite integral must include "+ C" because the derivative of a constant is zero. Students often omit the constant, losing the family of antiderivatives. This is automatically handled in definite integrals via the Fundamental Theorem of Calculus.

**Confusing the product rule and chain rule for integration.** Integration by parts (product rule in reverse) is for products of functions: integral u dv = uv - integral v du. The chain rule substitution is for composite functions: integral f(g(x))g'(x) dx = integral f(u) du. Applying the wrong technique leads to incorrect or unsolvable integrals.

**Not changing the limits when using substitution in definite integrals.** When substituting u = g(x), the limits must also change to u(a) and u(b). Students sometimes evaluate the antiderivative at the original x-limits instead of the new u-limits, giving incorrect numerical answers.
