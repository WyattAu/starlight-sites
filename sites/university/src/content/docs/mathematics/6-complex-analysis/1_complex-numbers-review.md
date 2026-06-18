---
title: Complex Numbers Review
tags:
  - Mathematics
  - University
description: ""s Formula and De Moivre’s Theorem

**Euler's formula:** $e^{i\theta} = \cos\theta + i\sin\theta$.

**De Moivre's theorem:** $(e^{i\theta})^n = e^{in\theta}$So

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

**Proposition 1.5.** De Moivre's theorem holds for all integers $n$Including negative values.

_Proof._ For $n \geq 0$It follows by induction from the multiplication law
$e^{i\alpha}e^{i\beta} = e^{i(\alpha + \beta)}$. For $n \lt 0$Write $n = -m$ with $m \gt 0$:
$(\cos\theta + i\sin\theta)^n = \frac{1}{(\cos\theta + i\sin\theta)^m}
= \frac{1}{\cos(m\theta) + i\sin(m\theta)} = \cos(-m\theta) + i\sin(-m\theta) = \cos(n\theta) + i\sin(n\theta)$.
$\blacksquare$

#### Applications of De Moivre's Theorem

**Example.** Compute $(1 + i)^{20}$.

$1 + i = \sqrt{2}\,e^{i\pi/4}$So
$(1 + i)^{20} = (\sqrt{2})^{20}\, e^{20\pi i/4} = 2^{10}\, e^{5\pi i} = 1024\,e^{\pi i} = -1024$.

<details>
<summary>Solution</summary>

**Problem.** Express $\cos(5\theta)$ in terms of $\cos\theta$ using de Moivre.

By de Moivre: $\cos(5\theta) + i\sin(5\theta) = (\cos\theta + i\sin\theta)^5$.

Expanding the right side by the binomial theorem and equating real parts:

$\cos(5\theta) = \cos^5\theta - 10\cos^3\theta\sin^2\theta + 5\cos\theta\sin^4\theta$.

Using $\sin^2\theta = 1 - \cos^2\theta$:

$\cos(5\theta) = \cos^5\theta - 10\cos^3\theta(1 - \cos^2\theta) + 5\cos\theta(1 - \cos^2\theta)^2$
$= \cos^5\theta - 10\cos^3\theta + 10\cos^5\theta + 5\cos\theta - 10\cos^3\theta + 5\cos^5\theta$
$= 16\cos^5\theta - 20\cos^3\theta + 5\cos\theta$.

**Problem.** Show that
$\sum_{k=0}^{n-1} \cos(k\theta) = \frac{\sin(n\theta/2)}{\sin(\theta/2)}\cos\!\left(\frac{(n-1)\theta}{2}\right)$
For $\theta \notin 2\pi\mathbb{Z}$.

Consider $S = \sum_{k=0}^{n-1} e^{ik\theta} = \frac{1 - e^{in\theta}}{1 - e^{i\theta}}$ (geometric
series with $r = e^{i\theta} \neq 1$).

$S = \frac{e^{in\theta/2}(e^{-in\theta/2} - e^{in\theta/2})}{e^{i\theta/2}(e^{-i\theta/2} - e^{i\theta/2})}
= e^{i(n-1)\theta/2} \cdot \frac{\sin(n\theta/2)}{\sin(\theta/2)}$.

Taking real parts gives the result.

</details>

### 1.5 Roots of Complex Numbers

**Definition.** An $n$-th root of $w \in \mathbb{C}$ is a complex number $z$ such that $z^n = w$.

**Proposition 1.6.** Every non-zero $w \in \mathbb{C}$ has exactly $n$ distinct $n$-th roots. If
$w = \rho\, e^{i\phi}$Then

$$z_k = \rho^{1/n}\, e^{i(\phi + 2\pi k)/n}, \quad k = 0, 1, \ldots, n - 1$$

Where $\rho^{1/n} \gt 0$ is the positive real $n$-th root of $\rho$.

_Proof._ If $z^n = w$Write $z = r\,e^{i\theta}$. Then $r^n e^{in\theta} = \rho\, e^{i\phi}$ So
$r = \rho^{1/n}$ and $n\theta = \phi + 2\pi k$. For $k = 0, 1, \ldots, n-1$ these give distinct
Values of $\theta$; for $k \geq n$ they repeat. $\blacksquare$

_Remark._ The $n$-th roots of $w$ lie equally spaced on a circle of radius $\rho^{1/n}$Forming a
Regular $n$-gon.

### 1.6 Roots of Unity

The $n$-th roots of unity are the solutions of $z^n = 1$:

$$z_k = e^{2\pi i k / n}, \quad k = 0, 1, \ldots, n - 1$$

They form a regular $n$-gon on the unit circle in the complex plane.

**Proposition 1.7.** If $\omega = e^{2\pi i/n}$ is a primitive $n$-th root of unity, then
$\sum_{k=0}^{n-1} \omega^k = 0$ and $\sum_{k=0}^{n-1} \omega^{jk} = 0$ for any $j$ not divisible by
$n$.

_Proof._ The sum
$\sum_{k=0}^{n-1} \omega^k = \frac{1 - \omega^n}{1 - \omega} = \frac{1 - 1}{1 - \omega} = 0$
Provided $\omega \neq 1$. For $j$ not divisible by $n$, $\omega^j$ is a non-trivial root of unity,
So the same argument applies. $\blacksquare$

<details>
<summary>Solution</summary>

**Problem.** Find all cube roots of $-8$.

$-8 = 8\,e^{i\pi}$. The cube roots are:
$z_k = 8^{1/3}\, e^{i(\pi + 2\pi k)/3} = 2\, e^{i(\pi + 2\pi k)/3}$ for $k = 0, 1, 2$.

$z_0 = 2\,e^{i\pi/3} = 2\left(\frac{1}{2} + i\,\frac{\sqrt{3}}{2}\right) = 1 + i\sqrt{3}$.
$z_1 = 2\,e^{i\pi} = -2$.
$z_2 = 2\,e^{i5\pi/3} = 2\left(\frac{1}{2} - i\,\frac{\sqrt{3}}{2}\right) = 1 - i\sqrt{3}$.

**Problem.** Find all fourth roots of $z = 16i$.

$16i = 16\,e^{i\pi/2}$. The fourth roots are:
$z_k = 16^{1/4}\, e^{i(\pi/2 + 2\pi k)/4} = 2\, e^{i(\pi/8 + \pi k/2)}$ for $k = 0, 1, 2, 3$.

$z_0 = 2\,e^{i\pi/8}$, $z_1 = 2\,e^{i5\pi/8}$, $z_2 = 2\,e^{i9\pi/8}$, $z_3 = 2\,e^{i13\pi/8}$.

**Problem.** Show that the $n$-th roots of any non-zero $w$ are in geometric progression.

The roots are
$z_k = \rho^{1/n}\, e^{i(\phi + 2\pi k)/n} = z_0 \cdot \left(e^{2\pi i/n}\right)^k = z_0 \cdot \omega^k$
Where $\omega = e^{2\pi i/n}$ is a primitive $n$-th root of unity. This is a geometric sequence With
ratio $\omega$.

</details>

