---
title: Introduction and Classification
tags:
  - Mathematics
  - University
description: ""s law of cooling.** The temperature $T(t)$ of a body in a medium at temperature $T_m$
   satisfies $\frac{dT}{dt} = -k(T - T_m)$A first-order linear ODE.

2. **Harmonic oscillator.** A mass on a spring with damping obeys
   $m\frac{d^2 x}{dt^2} + c\frac{dx}{dt} + kx = F(t)$A second-order linear ODE.

3. **Logistic population growth.** $\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)$A first-order
   nonlinear (Bernoulli) ODE.

4. **Lotka-Volterra predator-prey model.** $\frac{dx}{dt} = x(\alpha - \beta y)$,
   $\frac{dy}{dt} = y(-\gamma + \delta x)$A coupled nonlinear system.

5. **RC circuit.** The charge $q(t)$ on a capacitor satisfies $R\frac{dq}{dt} + \frac{q}{C} = V(t)$
   a first-order linear ODE.

6. **Heat equation.** The temperature $u(x, t)$ in a rod satisfies $u_t = \alpha^2 u_{xx}$A
   second-order linear PDE.

7. **Wave equation.** The displacement $u(x, t)$ of a string satisfies $u_{tt} = c^2 u_{xx}$A
   second-order linear PDE.

8. **Laplace's equation.** The steady-state temperature satisfies $u_{xx} + u_{yy} = 0$A
   second-order linear PDE.

### 1.5 Classification Tree

```
Differential Equations
├── ODE (one independent variable)
│   ├── By order
│   │   ├── First-order: y' = f(x, y)
│   │   ├── Second-order: y'' = f(x, y, y')
│   │   └── n-th order: y^(n) = f(x, y, ..., y^(n-1))
│   ├── By linearity
│   │   ├── Linear: a_n(x)y^(n) + ... + a_0(x)y = g(x)
│   │   │   ├── Homogeneous (g = 0)
│   │   │   └── Nonhomogeneous (g ≠ 0)
│   │   └── Nonlinear (y or derivatives appear nonlinearly)
│   └── By coefficients
│       ├── Constant coefficient
│       └── Variable coefficient
└── PDE (multiple independent variables)
    ├── Elliptic: B² - 4AC < 0  (e.g., Laplace)
    ├── Parabolic: B² - 4AC = 0 (e.g., Heat)
    └── Hyperbolic: B² - 4AC > 0 (e.g., Wave)
```

### 1.6 Worked Example: Classifying ODEs

**Problem.** Classify each equation by order, linearity, and homogeneity (if linear).

(a) $y'' + 3y' + 2y = \sin x$

(b) $(y')^2 + y = 0$

(c) $x^2 y'' + xy' + (x^2 - 1)y = 0$

(d) $\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0$

<details>
<summary>Solution</summary>

(a) Second-order, linear, nonhomogeneous (forcing term $\sin x \neq 0$).

(b) First-order, nonlinear (the term $(y')^2$ is nonlinear in $y'$).

(c) Second-order, linear, homogeneous. This is Bessel's equation of order 1.

(d) Second-order PDE, linear, homogeneous. This is Laplace's equation; $A = 1$, $C = 1$, $B = 0$ So
$B^2 - 4AC = -4 \lt 0$ (elliptic). $\blacksquare$

</details>

