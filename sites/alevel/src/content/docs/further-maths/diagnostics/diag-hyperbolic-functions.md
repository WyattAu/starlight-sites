---
title: "Hyperbolic Functions -- Diagnostic Tests"
description: ""s Rule and Trigonometry (with Complex Numbers)

**Question:** (a) State Osborn's rule. (b) Use it to derive the identity for $\cosh 3x$. (c) Find
$\frac{d}{dx}\text{cosech}\,x$. (d) Evaluate $\int_0^{\ln 2} \text{sech}\,x\,dx$.

**Solution:**

(a) **Osborn's rule:** Replace every $\sin$ in a trigonometric identity with $\sinh$ and every
$\cos$ with $\cosh$And change the sign of every term containing a product of two $\sinh$S. The
resulting identity holds for hyperbolic functions.

(b) From $\cos 3x = 4\cos^3 x - 3\cos x$: replace $\cos \to \cosh$ (no $\sin$ terms):
$\cosh 3x = 4\cosh^3 x - 3\cosh x$.

(c) $\text{cosech}\,x = \frac◆LB◆1◆RB◆◆LB◆\sinh x◆RB◆ = \frac{2}{e^x - e^{-x}}$.
$\frac{d}{dx}\text{cosech}\,x = \frac{-2(e^x + e^{-x})}{(e^x - e^{-x})^2} = \frac◆LB◆-2\cosh x◆RB◆◆LB◆\sinh^2 x◆RB◆ = -\text{cosech}\,x\cosh x$.

(d)
$\int_0^{\ln 2} \text{sech}\,x\,dx = \int_0^{\ln 2} \frac{2}{e^x + e^{-x}}\,dx = \int_0^{\ln 2} \frac{2e^x}{e^{2x} + 1}\,dx$.

Let $u = e^x$: $du = e^x\,dx$, $dx = du/u$.
$= \int_1^2 \frac{2}{u^2+1}\,du = 2[\arctan u]_1^2 = 2(\arctan 2 - \pi/4)$.

### IT-3: Hyperbolic Functions and DEs (with Differential Equations)

**Question:** The catenary curve is given by $y = a\cosh(x/a)$. (a) Find $\frac{dy}{dx}$ and
$\frac{d^2y}{dx^2}$. (b) Show that the catenary satisfies the DE
$\frac{d^2y}{dx^2} = \frac{1}{a}\sqrt◆LB◆1 + \left(\frac{dy}{dx}\right)^2◆RB◆$. (c) Find the arc
length of the catenary from $x = 0$ to $x = a$. (d) A hanging chain forms a catenary. Explain why
the hyperbolic cosine models this shape.

**Solution:**

(a) $\frac{dy}{dx} = \sinh(x/a)$. $\frac{d^2y}{dx^2} = \frac{1}{a}\cosh(x/a)$.

(b)
$\frac{1}{a}\sqrt◆LB◆1 + \sinh^2(x/a)◆RB◆ = \frac{1}{a}\sqrt◆LB◆\cosh^2(x/a)◆RB◆ = \frac{1}{a}\cosh(x/a) = \frac{d^2y}{dx^2}$.
Proven.

(c)
$s = \int_0^a \sqrt◆LB◆1 + \sinh^2(x/a)◆RB◆\,dx = \int_0^a \cosh(x/a)\,dx = a[\sinh(x/a)]_0^a = a\sinh(1)$.

(d) A hanging chain under uniform gravity takes the shape that minimises potential energy. This
shape satisfies the differential equation of a catenary, whose solution is $y = a\cosh(x/a) + c$.
The chain hangs with the lowest point at the vertex of the catenary (where $\cosh(0) = 1$), and the
curve rises symmetrically on both sides. The hyperbolic cosine arises from the equilibrium of
forces: the horizontal component of tension is constant, while the vertical component varies with
the weight of the chain below each point.
