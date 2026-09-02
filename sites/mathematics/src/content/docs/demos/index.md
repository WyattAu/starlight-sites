---

sources:
  - text: Spivak - Calculus
title: "Demos | Mathematics - Wyatt's Notes"
description: "This section covers demos concepts, definitions, and applications with worked examples and practice problems."
date: 2026-01-01T00:00:00Z
---
sources:
  - text: Spivak - Calculus


This section covers essential mathematical techniques and theories. These foundations underpin quantitative reasoning across the sciences and are tested in both pure and applied contexts.

# Demos

Interactive demonstrations provide a powerful way to develop mathematical intuition. Rather than passively reading definitions and theorems, demos let you manipulate variables, observe how functions behave, and build understanding through experimentation. Research in mathematics education consistently shows that students who engage with visual and interactive tools develop deeper conceptual understanding than those who rely solely on symbolic manipulation.

The demos in this section use WebAssembly-powered interactive tools that run directly in your browser. You can adjust parameters, see real-time changes in graphs and visualisations, and test your understanding by predicting outcomes before checking them.

**Prerequisites:** Review the prerequisite topics before attempting this section.

## Topics

- [Wasm Interactive](./wasm-interactive)

## Why Interactive Demos Matter in Mathematics

Mathematics is often taught as a purely abstract subject — a sequence of definitions, theorems, and proofs. While rigour is essential, it is not sufficient for true understanding. Many students can manipulate symbols correctly without understanding what the symbols mean. Interactive demos bridge this gap by providing visual, dynamic representations of abstract concepts.

### The Power of Visualisation

Consider the concept of a **derivative**. Symbolically, the derivative of $f(x) = x^2$ is $f'(x) = 2x$. This tells you the rate of change at any point. But what does "rate of change" actually look like? An interactive demo can show you the tangent line moving along the curve, steepening as $x$ increases and becoming horizontal at $x = 0$. Seeing this动态 behaviour builds intuition that the symbolic expression alone cannot provide.

Similarly, **eigenvalues and eigenvectors** are defined algebraically as scalars $\lambda$ and non-zero vectors $\mathbf{v}$ satisfying $A\mathbf{v} = \lambda\mathbf{v}$. But geometrically, an eigenvector is a direction that is merely stretched (not rotated) by a linear transformation, and the eigenvalue is the factor by which it is stretched. An interactive demo showing a transformation acting on a grid of points, with eigenvectors highlighted, makes this geometric meaning immediately clear.

### Learning Through Experimentation

Interactive demos support a **constructivist** approach to learning mathematics. Rather than being told a theorem, you discover it through experimentation:

1. **Observe** — Manipulate parameters and watch how the output changes
2. **Hypothesise** — Formulate a conjecture based on your observations
3. **Test** — Check your conjecture with different parameter values
4. **Generalise** — Determine whether your conjecture holds in general
5. **Prove** — Construct a rigorous proof (or understand why the theorem is true)

This cycle mirrors how mathematical knowledge is actually created. Professional mathematicians work by experimenting, conjecturing, and then proving. Demos let you experience this process at an accessible level.

## Types of Interactive Demos

### Function Visualisers

Function visualisers let you input a function and see its graph in real time. You can:

- Adjust coefficients and observe how the graph changes
- Zoom in to inspect local behaviour (e.g. near a root or inflection point)
- Add tangent lines, secant lines, or area representations
- Compare multiple functions on the same axes

**Example experiment:** Plot $f(x) = \sin(x)$ and $g(x) = \sin(2x)$. What happens to the period when you double the frequency? Now try $h(x) = 2\sin(x)$. What changes? Can you predict the graph of $y = 3\sin(2x)$ before plotting it?

### Matrix Transformation Demos

Matrix transformation demos show how linear transformations affect points in the plane or in 3D space. You can:

- Apply rotation, scaling, shearing, and reflection matrices
- See how the unit square or unit circle is transformed
- Identify eigenvectors visually (directions that are merely stretched)
- Compose transformations and observe the result

**Example experiment:** Apply the matrix $\begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}$ to a set of points. Which directions are stretched? Which direction is preserved? Can you identify the eigenvectors and eigenvalues from the visualisation?

### Series and Sequence Demos

Series demos let you visualise partial sums of infinite series and observe convergence behaviour:

- Plot partial sums $S_n = \sum_{k=1}^{n} a_k$ and watch them approach a limit
- Compare convergent and divergent series side by side
- Visualise geometric series as areas or lengths
- See how the remainder $R_n = S - S_n$ decreases as $n$ increases

**Example experiment:** Visualise the partial sums of $\sum_{k=1}^{n} \frac{1}{k^2}$. How quickly do the partial sums converge? Compare with $\sum_{k=1}^{n} \frac{1}{k}$. Why does one converge while the other diverges?

### Probability and Statistics Demos

Probability demos help you develop intuition for random processes:

- Simulate coin flips, dice rolls, and card draws
- See the law of large numbers in action — does the empirical probability approach the theoretical probability?
- Visualise the central limit theorem — what happens to the distribution of sample means as sample size increases?
- Explore conditional probability with Venn diagrams or tree diagrams

**Example experiment:** Flip a coin 100 times and record the proportion of heads. Repeat this process 1000 times. Plot the distribution of proportions. What shape does it take? How does the spread change with more flips?

## Worked Example: Exploring Calculus Concepts with Demos

### Understanding Limits

The formal definition of a limit ($\lim_{x \to a} f(x) = L$ means for every $\epsilon > 0$ there exists a $\delta > 0$ such that if $0 < |x - a| < \delta$ then $|f(x) - L| < \epsilon$) is notoriously difficult to grasp intuitively. An interactive demo can help:

1. **Choose a function** — Start with $f(x) = \frac{x^2 - 1}{x - 1}$ near $x = 1$
2. **Observe the graph** — The function appears to approach $y = 2$ as $x$ approaches $1$, but the function is undefined at $x = 1$
3. **Adjust epsilon** — Set $\epsilon = 0.5$. For what range of $x$-values is $f(x)$ within $0.5$ of $2$?
4. **Find delta** — The demo shows the corresponding $\delta$ interval. As you decrease $\epsilon$, what happens to $\delta$?
5. **Generalise** — This process demonstrates the formal definition: you can always find a $\delta$ for any $\epsilon$

### Understanding Integration

The definite integral $\int_a^b f(x) \, dx$ can be visualised as the area under a curve. An interactive demo can:

1. **Show Riemann sums** — Partition the interval $[a, b]$ into $n$ subintervals and draw rectangles. The area of the rectangles approximates the integral.
2. **Increase $n$** — As you increase the number of rectangles, the approximation improves. Watch the error decrease.
3. **Compare methods** — Left endpoint, right endpoint, midpoint, and trapezoidal rules give different approximations. Which is most accurate for a given function?
4. **Reveal the exact area** — The demo can compute the exact integral analytically and compare it with the numerical approximation.

### Understanding Linear Algebra Concepts

Eigenvalues and eigenvectors can be explored interactively:

1. **Start with a 2×2 matrix** — For example, $A = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$
2. **Apply the transformation** — Watch how the plane is stretched and sheared
3. **Identify invariant directions** — Some directions are merely stretched, not rotated. These are the eigenvectors.
4. **Measure the stretching factor** — The eigenvalues tell you by how much each eigenvector is stretched
5. **Try different matrices** — What happens with a rotation matrix? (Hint: no real eigenvectors exist for rotations other than 0° and 180°)

## Study Approach

Begin with the topic summaries, then work through the practice problems to test your understanding.
Use the cross-references to link related concepts across subjects where applicable.

### Tips for Using Interactive Demos Effectively

1. **Don't just watch — interact.** The value of demos comes from manipulating parameters yourself. Change values, observe the results, and form your own conclusions.

2. **Make predictions first.** Before adjusting a parameter, predict what will happen. Then check your prediction. Being wrong is informative — it reveals a gap in your understanding.

3. **Keep a demo journal.** Record your observations: what you tried, what you expected, and what actually happened. This documentation reinforces learning and helps you remember key insights.

4. **Connect visualisations to symbols.** After observing a pattern visually, try to express it algebraically. For example, after seeing that eigenvalues determine stretching factors, write down the characteristic equation and solve it.

5. **Use demos to prepare for exams.** Before an exam, review key concepts using demos. Visualising a concept is often faster and more memorable than re-reading notes.

## Key Concepts

This section introduces fundamental concepts that form the foundation for advanced study. Understanding these core ideas is essential before progressing to more complex topics.

### Functions and Their Behaviour

A function $f: A \to B$ assigns to each element of a set $A$ (the domain) exactly one element of a set $B$ (the codomain). Functions are the fundamental objects of calculus and analysis. Key properties include:

- **Continuity** — A function is continuous at $x = a$ if $\lim_{x \to a} f(x) = f(a)$. Informally, the graph can be drawn without lifting the pen.
- **Differentiability** — A function is differentiable at $x = a$ if $f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$ exists. Differentiability implies continuity, but not vice versa (e.g. $f(x) = |x|$ is continuous but not differentiable at $x = 0$).
- **Monotonicity** — A function is increasing if $f'(x) > 0$ and decreasing if $f'(x) < 0$.
- **Concavity** — A function is concave up if $f''(x) > 0$ and concave down if $f''(x) < 0$.

### Sequences and Series

A sequence is an ordered list of numbers $\{a_n\}_{n=1}^{\infty}$. A series is the sum of a sequence: $\sum_{n=1}^{\infty} a_n = \lim_{N \to \infty} \sum_{n=1}^{N} a_n$.

Key convergence tests include:
- **Geometric series** — $\sum_{n=0}^{\infty} r^n$ converges if $|r| < 1$, with sum $\frac{1}{1-r}$
- **p-series** — $\sum_{n=1}^{\infty} \frac{1}{n^p}$ converges if $p > 1$
- **Ratio test** — If $\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = L$, the series converges if $L < 1$ and diverges if $L > 1$

### Linear Algebra Fundamentals

Linear algebra studies vector spaces and linear maps between them. Core concepts include:

- **Vectors** — Elements of a vector space, which can be added together and scaled by scalars
- **Matrices** — Rectangular arrays of numbers representing linear transformations
- **Determinants** — Scalar values that encode information about a linear transformation (area scaling factor, invertibility)
- **Eigenvalues and eigenvectors** — Scalars $\lambda$ and vectors $\mathbf{v}$ satisfying $A\mathbf{v} = \lambda\mathbf{v}$

## Common Mistakes

- **Skipping prerequisite material before attempting this section:** Demos are most effective when you already have some theoretical background. If you have not yet studied derivatives, a demo about tangent lines will be confusing rather than illuminating.

- **Not practising problems after reading the theory:** Watching a demo is not the same as solving problems on your own. Use demos to build intuition, then test your understanding with pencil-and-paper exercises.

- **Failing to connect concepts across different topics:** Mathematics is deeply interconnected. The derivative is a limit; the integral is a limit of sums; eigenvalues are roots of a characteristic polynomial. Look for these connections.

- **Over-relying on visual intuition without formal verification:** Visualisations can be misleading, especially near discontinuities or for functions with subtle behaviour. Always verify your visual observations with algebraic or analytical arguments.

- **Neglecting edge cases:** Demos often show "typical" behaviour. Always consider what happens at boundaries, in limits, or for degenerate cases. For example, the empty matrix has no eigenvalues, and the zero vector is excluded from the definition of eigenvectors.

## Further Reading

For deeper understanding, consult the recommended textbooks and additional resources linked throughout the topic pages.

- *Calculus* by Michael Spivak — A rigorous treatment of single-variable calculus with excellent exercises
- *Linear Algebra Done Right* by Sheldon Axler — A modern approach to linear algebra emphasising conceptual understanding
- *Visual Complex Analysis* by Tristan Needham — Demonstrates the power of visualisation in complex analysis
- *Interactive Linear Algebra* by Dan Margalit and Joseph Rabinoff — Free online textbook with interactive demos


## Overview

This section provides comprehensive study materials and resources. Content is organised to build understanding progressively, from foundational concepts to advanced applications.

## Key Topics

- Core concepts and definitions
- Worked examples with step-by-step solutions
- Practice problems for self-assessment
- Cross-references to related topics

## Study Tips

Begin with the introductory material before progressing to advanced topics. Use the practice problems to test your understanding and identify areas for further study.
