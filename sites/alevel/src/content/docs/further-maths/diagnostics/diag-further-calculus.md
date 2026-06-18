---
title: "Further Calculus -- Diagnostic Tests"
description: ""$.

$\frac{P}{1000-P} = Ae^t$. At $t = 0$: $\frac{100}{900} = A$So $A = 1/9$.

$\frac{P}{1000-P} = \frac{e^t}{9}$. $P = \frac{1000e^t}{9 + e^t}$.

(c) $P(5) = \frac{1000e^5}{9 + e^5} = \frac{1000(148.4)}{157.4} = 942.8$.

(d) As $t \to \infty$: $P \to 1000$. The population approaches the **carrying capacity** of 1000.
The growth is initially approximately exponential when $P$ is small, but slows as $P$
approaches 1000.

### IT-2: Integration Techniques (with Maclaurin Series)

**Question:** (a) Evaluate $\int_0^{\pi/2} x\sin x\,dx$ using integration by parts. (b) Use the
Maclaurin series for $e^x$ to evaluate $\int_0^{0.1} e^{-x^2}\,dx$ correct to 4 decimal places. (c)
Evaluate $\int \frac{1}{x^2 - 9}\,dx$ using partial fractions. (d) Evaluate
$\int_0^{\infty} xe^{-x}\,dx$.

**Solution:**

(a) $u = x$$dv = \sin x\,dx$. $du = dx$$v = -\cos x$.
$\int_0^{\pi/2} x\sin x\,dx = [-x\cos x]_0^{\pi/2} + \int_0^{\pi/2} \cos x\,dx = 0 + [\sin x]_0^{\pi/2} = 1$.

(b) $e^{-x^2} = 1 - x^2 + \frac{x^4}{2} - \frac{x^6}{6} + \cdots$
$\int_0^{0.1} e^{-x^2}\,dx = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42}\right]_0^{0.1}$
$= 0.1 - \frac{0.001}{3} + \frac{0.00001}{10} - \frac{0.0000001}{42}$
$= 0.1 - 0.000333 + 0.000001 - 0.0000000024 = 0.099668 \approx 0.0997$.

(c) $\frac{1}{x^2 - 9} = \frac{1}{(x-3)(x+3)} = \frac{1/6}{x-3} - \frac{1/6}{x+3}$.
$\int = \frac{1}{6}\ln|x-3| - \frac{1}{6}\ln|x+3| + C = \frac{1}{6}\ln\left|\frac{x-3}{x+3}\right| + C$.

(d) Integration by parts: $u = x$$dv = e^{-x}\,dx$. $du = dx$$v = -e^{-x}$.
$\int_0^{\infty} xe^{-x}\,dx = [-xe^{-x}]_0^{\infty} + \int_0^{\infty} e^{-x}\,dx = 0 + [-e^{-x}]_0^{\infty} = 0 + 1 = 1$.

(This is the gamma function $\Gamma(2) = 1! = 1$.)

### IT-3: Arc Length and Surface Area (with Geometry)

**Question:** (a) Find the arc length of the curve $y = \frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$.
(b) Find the surface area generated when this curve is rotated about the $x$-axis. (c) A curve is
given by $x = 2\cos\theta$$y = 2\sin\theta$. Find the arc length for one complete revolution
($0 \le \theta \le 2\pi$). (d) Explain why the arc length formula involves
$\sqrt◆LB◆1 + \left(\frac{dy}{dx}\right)^2◆RB◆$.

**Solution:**

(a) Arc length $s = \int_a^b \sqrt◆LB◆1 + \left(\frac{dy}{dx}\right)^2◆RB◆\,dx$.
$\frac{dy}{dx} = x^{1/2}$.
$s = \int_0^3 \sqrt{1 + x}\,dx = \left[\frac{2}{3}(1+x)^{3/2}\right]_0^3 = \frac{2}{3}(8 - 1) = \frac{14}{3}$.

(b) Surface area
$= 2\pi\int_0^3 y\sqrt◆LB◆1 + \left(\frac{dy}{dx}\right)^2◆RB◆\,dx = 2\pi\int_0^3 \frac{2}{3}x^{3/2}\sqrt{1+x}\,dx$.

Let $u = 1 + x$$du = dx$$x = u - 1$: $= \frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆\int_1^4 (u-1)^{3/2}u^{1/2}\,du$.

This integral requires expanding $(u-1)^{3/2} = u^{3/2} - 3u^{1/2} + 3u^{-1/2} - u^{-3/2}$Then
multiplying by $u^{1/2}$ and integrating term by term.

$= \frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆\int_1^4 (u^2 - 3u + 3 - u^{-1})\,du = \frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆\left[\frac{u^3}{3} - \frac{3u^2}{2} + 3u - \ln u\right]_1^4$

$= \frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆\left[\left(\frac{64}{3} - 24 + 12 - \ln 4\right) - \left(\frac{1}{3} - \frac{3}{2} + 3 - 0\right)\right] = \frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆\left(\frac{63}{3} - 12 + 9 - \frac{3}{2} - \ln 4\right)$

$= \frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆(21 - 12 + 9 - 1.5 - 1.386) = \frac◆LB◆4\pi◆RB◆◆LB◆3◆RB◆(15.114) = 63.3$.

(c) $\frac◆LB◆dx◆RB◆◆LB◆d\theta◆RB◆ = -2\sin\theta$$\frac◆LB◆dy◆RB◆◆LB◆d\theta◆RB◆ = 2\cos\theta$.
$\sqrt◆LB◆(-2\sin\theta)^2 + (2\cos\theta)^2◆RB◆ = \sqrt{4} = 2$.
$s = \int_0^{2\pi} 2\,d\theta = 4\pi$. This is a circle of radius 2, so circumference
$= 2\pi(2) = 4\pi$.

(d) The formula comes from approximating the curve by many small line segments of length
$\Delta s = \sqrt◆LB◆(\Delta x)^2 + (\Delta y)^2◆RB◆$. Dividing by $\Delta x$:
$\Delta s = \sqrt◆LB◆1 + \left(\frac{\Delta y}{\Delta x}\right)^2◆RB◆\Delta x$. In the limit as
$\Delta x \to 0$: $ds = \sqrt{1 + (dy/dx)^2}\,dx$. Integrating gives the total arc length.
