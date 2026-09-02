---

sources:
  - text: Standard textbook reference
title: "Diagnostics | AP Mathematics - Wyatt's Notes"
description: "Diagnostic test notes for AP Mathematics covering key concepts, worked examples, and practice problems for exam preparation."
date: 2026-01-01T00:00:00Z
---
sources:
  - text: Standard textbook reference


This section provides study materials and resources for diagnostics. Browse the topics below to find the specific area you need to revise.

# Diagnostics

Diagnostic tests in AP Mathematics (Calculus) help you identify which areas of the curriculum you have already mastered and which require further study. Mathematics is inherently cumulative — you cannot understand integration without differentiation, and you cannot solve differential equations without both. Diagnosing your current level ensures you spend your study time where it will have the greatest impact.

The AP Calculus exam (whether AB or BC) tests your ability to apply calculus concepts to solve problems, interpret results, and connect ideas across topics. A diagnostic test across all major topic areas reveals not just what you know, but how well you can apply it under exam conditions.

**Prerequisites:** Review the prerequisite topics before attempting this section.

## Topics

- [Diag Derivatives](./diag-derivatives)
- [Diag Differential Equations](./diag-differential-equations)
- [Diag Integrals](./diag-integrals)
- [Diag Limits Continuity](./diag-limits-continuity)
- [Diag Sequences Series](./diag-sequences-series)
- [Diagnostic Guide](./diagnostic-guide)

## Learning Objectives

- Understand the core principles and definitions covered in this section
- Apply key concepts to solve problems and answer exam-style questions
- Connect this material to prerequisite topics and related sections
- Identify specific knowledge gaps across the AP Calculus curriculum
- Develop a targeted study plan based on diagnostic results

## Study Approach

Begin with the topic summaries, then work through the practice problems to test your understanding.
Use the cross-references to link related concepts across subjects where applicable.

### How to Use Diagnostic Tests Effectively

**Before the diagnostic:**
- Do not study specifically for the diagnostic — the point is to reveal your true current state
- Ensure you have scratch paper, a pencil, and a timer
- Treat it like a real exam: no notes, no calculator (unless the diagnostic specifies calculator use)

**During the diagnostic:**
- Attempt every question, even if you are unsure — partial knowledge is still knowledge
- Show your working clearly — this helps you (and your teacher) identify where errors occur
- Do not spend too long on any single question — mark it and move on

**After the diagnostic:**
- Mark your answers using the provided mark scheme
- Categorise your errors: computational mistakes, conceptual misunderstandings, or incomplete knowledge
- Identify the weakest topics and create a study plan
- Retake the diagnostic after targeted study to measure improvement

## Key Concepts

This section introduces fundamental concepts that form the foundation for advanced study. Understanding these core ideas is essential before progressing to more complex topics.

### Limits and Continuity

**Limits** are the foundation of calculus. The limit $\lim_{x \to a} f(x) = L$ means that as $x$ approaches $a$ (from either side, but not equal to $a$), $f(x)$ approaches $L$.

**Key limit laws:**
- $\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)$
- $\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} f(x) \cdot \lim_{x \to a} g(x)$
- $\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{\lim_{x \to a} f(x)}{\lim_{x \to a} g(x)}$ (provided $\lim_{x \to a} g(x) \neq 0$)

**Special limits to memorise:**
- $\lim_{x \to 0} \frac{\sin x}{x} = 1$
- $\lim_{x \to 0} \frac{1 - \cos x}{x} = 0$
- $\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e$

**Continuity:** A function $f$ is continuous at $x = a$ if:
1. $f(a)$ is defined
2. $\lim_{x \to a} f(x)$ exists
3. $\lim_{x \to a} f(x) = f(a)$

**The Intermediate Value Theorem (IVT):** If $f$ is continuous on $[a, b]$ and $N$ is any value between $f(a)$ and $f(b)$, then there exists $c \in (a, b)$ such that $f(c) = N$.

### Derivatives

The **derivative** of a function $f$ at $x = a$ is defined as:

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

The derivative represents the instantaneous rate of change of $f$ at $x = a$, or equivalently, the slope of the tangent line to the graph at that point.

**Key differentiation rules:**

- **Power rule:** $\frac{d}{dx}[x^n] = nx^{n-1}$
- **Product rule:** $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Quotient rule:** $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
- **Chain rule:** $\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)$

**Common derivatives:**
| Function | Derivative |
|----------|------------|
| $x^n$ | $nx^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $\frac{1}{x}$ |

**Applications of derivatives:**
- **Critical points:** $f'(c) = 0$ or $f'(c)$ does not exist. Use the first or second derivative test to classify as local maximum, local minimum, or neither.
- **Increasing/decreasing:** $f$ is increasing where $f'(x) > 0$ and decreasing where $f'(x) < 0$.
- **Concavity:** $f$ is concave up where $f''(x) > 0$ and concave down where $f''(x) < 0$. Inflection points occur where concavity changes.
- **Optimization:** Find critical points, evaluate the function at critical points and endpoints, compare values.
- **Related rates:** Differentiate an equation relating multiple variables with respect to time $t$, then substitute known values.

### Integrals

The **definite integral** $\int_a^b f(x) \, dx$ represents the signed area under the curve $y = f(x)$ from $x = a$ to $x = b$.

**The Fundamental Theorem of Calculus:**
1. If $F(x) = \int_a^x f(t) \, dt$, then $F'(x) = f(x)$
2. $\int_a^b f(x) \, dx = F(b) - F(a)$ where $F$ is any antiderivative of $f$

**Key integration rules:**
- $\int x^n \, dx = \frac{x^{n+1}}{n+1} + C$ (for $n \neq -1$)
- $\int \frac{1}{x} \, dx = \ln|x| + C$
- $\int e^x \, dx = e^x + C$
- $\int \sin x \, dx = -\cos x + C$
- $\int \cos x \, dx = \sin x + C$

**Integration techniques (BC only):**
- **Integration by parts:** $\int u \, dv = uv - \int v \, du$
- **Partial fractions:** Decompose rational functions into simpler fractions
- **Trigonometric substitution:** Use substitutions like $x = a\sin\theta$ for integrals involving $\sqrt{a^2 - x^2}$

**Applications of integration:**
- **Area between curves:** $\int_a^b |f(x) - g(x)| \, dx$
- **Volume of revolution:** $\pi \int_a^b [f(x)]^2 \, dx$ (disk method)
- **Arc length:** $\int_a^b \sqrt{1 + [f'(x)]^2} \, dx$
- **Average value:** $\frac{1}{b-a} \int_a^b f(x) \, dx$

### Differential Equations

A **differential equation** relates a function to its derivatives. The goal is to find a function that satisfies the equation.

**Separable equations (AB and BC):**
An equation of the form $\frac{dy}{dx} = g(x)h(y)$ can be solved by separating variables:

$$\int \frac{1}{h(y)} \, dy = \int g(x) \, dx$$

**Example:** Solve $\frac{dy}{dx} = xy$ with $y(0) = 1$.

Separate: $\frac{1}{y} \, dy = x \, dx$

Integrate: $\ln|y| = \frac{x^2}{2} + C$

Apply initial condition: $\ln 1 = 0 + C \Rightarrow C = 0$

Solution: $y = e^{x^2/2}$

**Slope fields:** A graphical representation of a differential equation. At each point $(x, y)$ in the plane, a short line segment with slope $\frac{dy}{dx}$ is drawn. Solution curves follow these line segments.

**Euler's method (BC only):** A numerical technique for approximating solutions to differential equations. Starting from $(x_0, y_0)$ with step size $h$:

$$y_{n+1} = y_n + h \cdot f(x_n, y_n)$$
$$x_{n+1} = x_n + h$$

### Sequences and Series (BC only)

A **sequence** is an ordered list of numbers $\{a_n\}_{n=1}^{\infty}$. A **series** is the sum of a sequence: $\sum_{n=1}^{\infty} a_n$.

**Key convergence tests:**

| Test | When to Use | Result |
|------|-------------|--------|
| Geometric series | $\sum ar^n$ | Converges if $|r| < 1$, sum $= \frac{a}{1-r}$ |
| p-series | $\sum \frac{1}{n^p}$ | Converges if $p > 1$ |
| Divergence test | Any series | If $\lim_{n \to \infty} a_n \neq 0$, series diverges |
| Integral test | Positive, decreasing $f$ with $a_n = f(n)$ | Series converges iff integral converges |
| Comparison test | Compare with known series | If $0 \leq a_n \leq b_n$ and $\sum b_n$ converges, then $\sum a_n$ converges |
| Ratio test | Factorials, exponentials | If $\lim \left|\frac{a_{n+1}}{a_n}\right| = L$: converges if $L < 1$, diverges if $L > 1$ |
| Alternating series | $\sum (-1)^n b_n$ with $b_n > 0$ | Converges if $b_n$ is decreasing and $\lim b_n = 0$ |

**Taylor series:** The Taylor series of $f$ centred at $a$ is:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

**Important Taylor series to know:**
- $e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$
- $\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$
- $\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$
- $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots$ (for $|x| < 1$)

## Worked Example: Diagnostic Question on Derivatives

**Question:** Find the derivative of $f(x) = x^3 \sin x$.

**Solution:**

This requires the **product rule** since $f(x) = x^3 \cdot \sin x$.

Let $u = x^3$ and $v = \sin x$. Then $u' = 3x^2$ and $v' = \cos x$.

By the product rule:
$$f'(x) = u'v + uv' = 3x^2 \sin x + x^3 \cos x$$

We can factor: $f'(x) = x^2(3\sin x + x\cos x)$

**Verification:** At $x = 0$, $f'(0) = 0$. The function $f(x) = x^3 \sin x$ has a horizontal tangent at the origin, which makes sense since $x^3$ dominates near zero.

## Worked Example: Diagnostic Question on Integration

**Question:** Evaluate $\int_0^{\pi/2} \cos^2 x \, dx$.

**Solution:**

Use the identity $\cos^2 x = \frac{1 + \cos 2x}{2}$:

$$\int_0^{\pi/2} \cos^2 x \, dx = \int_0^{\pi/2} \frac{1 + \cos 2x}{2} \, dx$$

$$= \frac{1}{2} \int_0^{\pi/2} (1 + \cos 2x) \, dx$$

$$= \frac{1}{2} \left[x + \frac{\sin 2x}{2}\right]_0^{\pi/2}$$

$$= \frac{1}{2} \left[\left(\frac{\pi}{2} + \frac{\sin \pi}{2}\right) - \left(0 + \frac{\sin 0}{2}\right)\right]$$

$$= \frac{1}{2} \cdot \frac{\pi}{2} = \frac{\pi}{4}$$

## Worked Example: Diagnostic Question on Differential Equations

**Question:** Find the general solution to $\frac{dy}{dx} = \frac{2x}{y}$.

**Solution:**

This is a separable differential equation. Separate the variables:

$$y \, dy = 2x \, dx$$

Integrate both sides:

$$\int y \, dy = \int 2x \, dx$$

$$\frac{y^2}{2} = x^2 + C$$

Multiply through by 2:

$$y^2 = 2x^2 + C'$$

where $C' = 2C$. This is the equation of a hyperbola (for $C' \neq 0$) or a pair of lines through the origin (for $C' = 0$).

## Common Mistakes

- **Skipping prerequisite material before attempting this section:** If you struggle with algebra, trigonometry, or function notation, calculus will be unnecessarily difficult. Ensure your precalculus foundations are solid.

- **Not practising problems after reading the theory:** Calculus is learned by doing, not by reading. You must work through problems to develop fluency with differentiation and integration techniques.

- **Failing to connect concepts across different topics:** The Fundamental Theorem of Calculus connects differentiation and integration. The chain rule connects differentiation to composition of functions. Differential equations use both differentiation and integration. Look for these connections.

- **Forgetting the constant of integration:** Every indefinite integral requires $+C$. Forgetting it is one of the most common errors and costs marks on exams.

- **Confusing the chain rule with the product rule:** The chain rule applies to composition ($f(g(x))$); the product rule applies to multiplication ($f(x) \cdot g(x)$). Know when to use each.

- **Not checking answers:** After finding a derivative, check by substituting a value. After finding an integral, differentiate your answer to see if you get the original integrand. After solving a differential equation, verify that your solution satisfies the equation.

- **Ignoring domain restrictions:** Logarithms are only defined for positive arguments. Square roots require non-negative radicands. Arctangent has a restricted range. Always consider the domain of your functions.

## Diagnostic Strategies by Topic

### Limits and Continuity
- Check if you can evaluate limits algebraically (factoring, rationalisation, special limits)
- Verify you understand the definition of continuity and can identify discontinuities
- Ensure you can apply the IVT to prove existence of roots

### Derivatives
- Confirm you can differentiate polynomials, trigonometric functions, exponentials, and logarithms
- Check your ability to apply the chain rule, product rule, and quotient rule
- Verify you can find critical points and classify them using the first or second derivative test

### Integrals
- Ensure you can find antiderivatives of common functions
- Check your ability to evaluate definite integrals using the Fundamental Theorem
- Verify you can set up integrals for area, volume, and arc length problems

### Differential Equations
- Confirm you can separate variables and integrate both sides
- Check your ability to apply initial conditions to find particular solutions
- Ensure you can interpret slope fields and match them to differential equations

### Sequences and Series (BC only)
- Verify you can apply all major convergence tests
- Check your ability to find Taylor series and determine their interval of convergence
- Ensure you can manipulate series (add, subtract, multiply, differentiate, integrate term by term)

## Further Reading

For deeper understanding, consult the recommended textbooks and additional resources linked throughout the topic pages.

- *Calculus: Early Transcendentals* by James Stewart — The standard AP Calculus textbook
- *Thomas' Calculus* — Another excellent comprehensive calculus textbook
- *AP Calculus Premium* by Barron's — Exam preparation with practice tests
- *The Calculus Lifesaver* by Adrian Banner — Accessible supplementary guide with worked examples


## Overview

This section provides comprehensive study materials and resources. Content is organised to build understanding progressively, from foundational concepts to advanced applications.

## Key Topics

- Core concepts and definitions
- Worked examples with step-by-step solutions
- Practice problems for self-assessment
- Cross-references to related topics

## Study Tips

Begin with the introductory material before progressing to advanced topics. Use the practice problems to test your understanding and identify areas for further study.
