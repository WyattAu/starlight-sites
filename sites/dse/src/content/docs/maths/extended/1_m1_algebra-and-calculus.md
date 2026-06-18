---
title: "M1: Algebra and Calculus"
description: ""(g(x)) \cdot g'(x)$
- **Product rule**: $\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Quotient rule**:
  $\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$

### Implicit Differentiation

When $y$ is defined implicitly as a function of $x$, differentiate both sides with respect to $x$
and solve for $\frac{dy}{dx}$.

**Example**: Find $\frac{dy}{dx}$ given $x^2 + y^2 = 25$.

$$2x + 2y\frac{dy}{dx} = 0$$ $$\frac{dy}{dx} = -\frac{x}{y}$$

### Connected Rates of Change (Related Rates)

**Example**: A spherical balloon is being inflated. Find the rate of change of the radius when the
radius is 5 cm, given that air is being pumped in at $100\pi$ cm$^3$/s.

Volume: $V = \frac{4}{3}\pi r^3$.

$$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$ $$100\pi = 4\pi(25)\frac{dr}{dt}$$
$$\frac{dr}{dt} = \frac{100\pi}{100\pi} = 1 \text{ cm/s}$$

### Second Derivative

The second derivative $\frac{d^2y}{dx^2}$ represents the rate of change of the gradient. It is used
to determine concavity:

- $\frac{d^2y}{dx^2} > 0$: Concave upward (minimum)
- $\frac{d^2y}{dx^2} < 0$: Concave downward (maximum)

### Stationary Points

To find and classify stationary points:

1. Find $\frac{dy}{dx}$ and set it to zero
2. Solve for $x$ to find the $x$-coordinates of stationary points
3. Find $\frac{d^2y}{dx^2}$ and substitute the $x$-values
4. If $\frac{d^2y}{dx^2} > 0$: minimum; if $< 0$: maximum; if $= 0$: test fails (use first
   derivative test or higher derivatives)

## Integration: Advanced

### Techniques

- **Integration by substitution**: For integrals of the form $\int f(g(x)) \cdot g'(x) \, dx$, let
  $u = g(x)$

**Example**: $\int 2x\sqrt{x^2 + 1} \, dx$. Let $u = x^2 + 1$, $du = 2x \, dx$.

$$\int \sqrt{u} \, du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C$$

- **Integration by parts**: $\int u \, dv = uv - \int v \, du$

**Example**: $\int x e^x \, dx$. Let $u = x$, $dv = e^x \, dx$. Then $du = dx$, $v = e^x$.

$$\int x e^x \, dx = x e^x - \int e^x \, dx = x e^x - e^x + C = (x - 1)e^x + C$$

### Definite Integration

$$\int_a^b f(x) \, dx = \left[F(x)\right]_a^b = F(b) - F(a)$$

### Area Under Curves

- Area between a curve and the x-axis: $A = \int_a^b |f(x)| \, dx$
- Area between two curves: $A = \int_a^b |f(x) - g(x)| \, dx$

### Volumes of Revolution

- Rotation about the x-axis: $V = \pi \int_a^b [f(x)]^2 \, dx$
- Rotation about the y-axis: $V = \pi \int_c^d [f(y)]^2 \, dy$

**Example**: Find the volume when the region bounded by $y = \sqrt{x}$, $x = 4$, and $y = 0$ is
rotated about the x-axis.

$$V = \pi \int_0^4 (\sqrt{x})^2 \, dx = \pi \int_0^4 x \, dx = \pi \left[\frac{x^2}{2}\right]_0^4 = 8\pi$$

### Differential Equations

A first-order separable differential equation has the form:

$$\frac{dy}{dx} = f(x)g(y)$$

Separating variables: $\frac{dy}{g(y)} = f(x) \, dx$.

Integrate both sides and solve for $y$.

**Example**: Solve $\frac{dy}{dx} = \frac{x}{y}$, given $y = 2$ when $x = 1$.

$$y \, dy = x \, dx$$ $$\int y \, dy = \int x \, dx$$ $$\frac{y^2}{2} = \frac{x^2}{2} + C$$

Using $y = 2$ when $x = 1$: $2 = \frac{1}{2} + C$, so $C = \frac{3}{2}$.

$$y^2 = x^2 + 3$$

## Common Pitfalls

- Forgetting to reverse the inequality sign when multiplying or dividing by a negative number
- Incorrectly finding the domain of composite functions
- Confusing $fg(x)$ notation
- Forgetting to add $+C$ for indefinite integrals
- Not checking whether $\frac{d^2y}{dx^2} = 0$ requires a first derivative test
- Errors in substitution for integration by substitution (forgetting to change the limits for
  definite integrals or to convert $dx$ to $du$)
