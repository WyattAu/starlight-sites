---


date: 2026-07-23T21:57:32+01:00
title: "Derivatives"
description: "CBSE Class 12 mathematics: Derivatives with differentiation rules, chain rule, and worked examples."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "cbse", "url": "https://cbse.wyattau.com"}, {"name": "Mathematics", "url": "https://cbse.wyattau.com/mathematics"}, {"name": "Derivatives", "url": "https://cbse.wyattau.com/mathematics/derivatives"}, {"name": "Index", "url": "https://cbse.wyattau.com/mathematics/derivatives/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Derivatives",
  "description": "CBSE Class 12 mathematics: Derivatives with differentiation rules, chain rule, and worked examples.",
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

## Derivatives

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

## Worked Example 6 — Product of Three Functions

**Problem:** Find $\frac{d}{dx}[x \cdot e^x \cdot \sin x]$.

**Solution:**

Apply the product rule iteratively. Let $u = x$, $v = e^x \sin x$.

First, find $\frac{dv}{dx}$ using the product rule on $e^x \sin x$:
$$\frac{d}{dx}[e^x \sin x] = e^x \sin x + e^x \cos x = e^x(\sin x + \cos x)$$

Now apply the product rule to $x \cdot (e^x \sin x)$:
$$\frac{d}{dx}[x \cdot e^x \sin x] = 1 \cdot e^x \sin x + x \cdot e^x(\sin x + \cos x)$$

Factor:
$$= e^x[\sin x + x\sin x + x\cos x] = e^x[(1 + x)\sin x + x\cos x]$$

**Common mistake:** Trying to apply the product rule to three factors at once. Instead, group two factors together and apply the rule iteratively.

## Worked Example 7 — Logarithmic Differentiation

**Problem:** Find $\frac{dy}{dx}$ if $y = x^x$ for $x > 0$.

**Solution:**

Take the natural logarithm of both sides:
$$\ln y = \ln(x^x) = x \ln x$$

Differentiate both sides with respect to $x$:
$$\frac{1}{y}\frac{dy}{dx} = \ln x + x \cdot \frac{1}{x} = \ln x + 1$$

Solve for $\frac{dy}{dx}$:
$$\frac{dy}{dx} = y(\ln x + 1) = x^x(\ln x + 1)$$

**Common mistake:** Treating $x^x$ as a power function ($nx^{n-1}$) or an exponential function ($a^x \ln a$). It is neither — use logarithmic differentiation.

## Worked Example 8 — Derivative of an Inverse Function

**Problem:** If $f(x) = \tan^{-1}\left(\frac{x}{1 + x^2}\right)$, find $f'(x)$.

**Solution:**

Let $u = \frac{x}{1 + x^2}$. Then $f(x) = \tan^{-1}(u)$ and:
$$f'(x) = \frac{1}{1 + u^2} \cdot \frac{du}{dx}$$

Compute $\frac{du}{dx}$ using the quotient rule:
$$\frac{du}{dx} = \frac{(1 + x^2)(1) - x(2x)}{(1 + x^2)^2} = \frac{1 + x^2 - 2x^2}{(1 + x^2)^2} = \frac{1 - x^2}{(1 + x^2)^2}$$

Now compute $\frac{1}{1 + u^2}$:
$$1 + u^2 = 1 + \frac{x^2}{(1 + x^2)^2} = \frac{(1 + x^2)^2 + x^2}{(1 + x^2)^2} = \frac{1 + 2x^2 + x^4 + x^2}{(1 + x^2)^2} = \frac{1 + 3x^2 + x^4}{(1 + x^2)^2}$$

Therefore:
$$f'(x) = \frac{(1 + x^2)^2}{1 + 3x^2 + x^4} \cdot \frac{1 - x^2}{(1 + x^2)^2} = \frac{1 - x^2}{1 + 3x^2 + x^4}$$

**Common mistake:** Forgetting the chain rule when differentiating inverse trigonometric functions. The derivative of $\tan^{-1}(u)$ is $\frac{1}{1 + u^2} \cdot \frac{du}{dx}$, not just $\frac{1}{1 + u^2}$.

## Key Formulas

| Function | Derivative | Notes |
| --- | --- | --- |
| $x^n$ | $nx^{n-1}$ | Power rule |
| $e^{ax}$ | $ae^{ax}$ | Chain rule applied |
| $\ln(ax)$ | $\frac{1}{x}$ | Chain rule gives same result |
| $\sin(ax)$ | $a\cos(ax)$ | Chain rule applied |
| $\tan^{-1}(x)$ | $\frac{1}{1 + x^2}$ | Inverse trig derivative |
| $\sin^{-1}(x)$ | $\frac{1}{\sqrt{1 - x^2}}$ | Inverse trig derivative |
| $u^n$ (chain rule) | $nu^{n-1} \cdot u'$ | Generalised power rule |

## Additional Exam Tips

1. For logarithmic differentiation, take $\ln$ of both sides first, then differentiate implicitly. This is useful for functions of the form $f(x)^{g(x)}$.
2. The derivative of $\ln|f(x)|$ is $\frac{f'(x)}{f(x)}$ — remember the absolute value for the domain.
3. When differentiating inverse trigonometric functions, always apply the chain rule: $\frac{d}{dx}[\tan^{-1}(u)] = \frac{u'}{1 + u^2}$.
4. For piecewise functions, check differentiability at the boundary by verifying that the left and right derivatives are equal.
5. In CBSE exams, questions often combine multiple rules (product + chain, quotient + chain). Practice identifying which rules to apply in which order.

## Intuition

A derivative measures how fast something changes at a single instant. Think of it as the slope of a tangent line touching a curve -- it tells you whether the function is going up, going down, or flat at that point. The power rule is the simplest case: the derivative of x^n is n times x^(n-1), which follows from the pattern of how polynomial rates work. The chain rule handles nested functions: if something depends on something else that depends on x, you multiply their individual rates of change. Implicit differentiation is useful when y is buried inside an equation and you cannot isolate it efficiently.

## Cross-References

- [Integrals](../../../../../../ap/src/content/docs/maths/3-integrals/3_integrals) -- the reverse of differentiation
- [Matrices](../../../../../../alevel/src/content/docs/further-maths/pure-mathematics/02-matrices) -- linear algebra foundations
- [CBSE Physics](../../../../../../ib/src/content/docs/physics/physics) -- applications of derivatives in mechanics

## Common Mistakes

**Confusing the product rule and chain rule.** The product rule (uv)' = u'v + uv' applies to the product of two functions. The chain rule (f(g(x)))' = f'(g(x)) * g'(x) applies to composition. Students often apply the product rule to composite functions or the chain rule to products, giving incorrect derivatives.

**Forgetting the negative sign in trigonometric derivatives.** The derivatives of cos(x), cot(x), csc(x), and their reciprocals all have negative signs. Students frequently forget these negatives, especially for cos(x) -> -sin(x) and csc(x) -> -csc(x)cot(x). This is the most common source of sign errors in differentiation.

**Incorrectly applying the chain rule to nested functions.** When differentiating sin(x^2), the result is cos(x^2) * 2x, not just cos(x^2). Students often differentiate the outer function but forget to multiply by the derivative of the inner function. The chain rule must be applied at every level of nesting.
