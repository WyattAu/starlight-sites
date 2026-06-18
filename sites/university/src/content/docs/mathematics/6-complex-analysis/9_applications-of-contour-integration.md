---
title: Applications of Contour Integration
tags:
  - Mathematics
  - University
description: ""s Lemma

**Theorem 9.2 (Jordan's Lemma).** If $f(z) \to 0$ uniformly as $|z| \to \infty$ in the upper
Half-plane and $a \gt 0$Then

$$\lim_{R \to \infty} \int_{C_R} e^{iaz}f(z)\, dz = 0$$

Where $C_R$ is the upper semicircle $|z| = R$, $\mathrm{Im}(z) \geq 0$.

This allows evaluation of integrals of the form $\int_{-\infty}^{\infty} f(x)\cos(ax)\, dx$ and
$\int_{-\infty}^{\infty} f(x)\sin(ax)\, dx$.

### 9.7 Fourier-Type Integrals

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1}\, dx$.

Consider
$\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1}\, dx = 2\pi i \cdot \mathrm{Res}\!\left(\frac{e^{iz}}{z^2+1}, i\right)$.

$\mathrm{Res}\!\left(\frac{e^{iz}}{z^2+1}, i\right) = \frac{e^{i \cdot i}}{2i} = \frac{e^{-1}}{2i}$.

$\int_{-\infty}^{\infty} \frac{e^{ix}}{x^2 + 1}\, dx = 2\pi i \cdot \frac{e^{-1}}{2i} = \frac{\pi}{e}$.

Taking real parts: $\int_{-\infty}^{\infty} \frac{\cos x}{x^2 + 1}\, dx = \frac{\pi}{e}$.

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{x \sin x}{x^2 + a^2}\, dx$ for $a \gt 0$.

Consider $\int_{-\infty}^{\infty} \frac{z\, e^{iz}}{z^2 + a^2}\, dz$. Only $z = ia$ is in the upper
half-plane.

$\mathrm{Res}\!\left(\frac{ze^{iz}}{z^2 + a^2}, ia\right) = \frac{ia \cdot e^{i \cdot ia}}{2ia} = \frac{e^{-a}}{2}$.

$\int_{-\infty}^{\infty} \frac{x\, e^{ix}}{x^2 + a^2}\, dx = 2\pi i \cdot \frac{e^{-a}}{2} = \pi i\, e^{-a}$.

Taking imaginary parts: $\int_{-\infty}^{\infty} \frac{x \sin x}{x^2 + a^2}\, dx = \pi\, e^{-a}$.

**Problem.** Evaluate $\int_0^{2\pi} \frac{\cos 2\theta}{5 + 4\cos\theta}\, d\theta$.

Substitute $z = e^{i\theta}$: $\cos\theta = (z + z^{-1})/2$, $\cos 2\theta = (z^2 + z^{-2})/2$.

$I = \frac{1}{2i}\int_{|z|=1} \frac{z^4 + 1}{z^2(2z + 1)(z + 2)}\, dz$.

Poles inside $|z| = 1$: $z = 0$ (order $2$) and $z = -1/2$ (simple).

At $z = 0$:
$\mathrm{Res} = \frac{d}{dz}\left[\frac{z^4 + 1}{(2z+1)(z+2)}\right]_{z=0}
= -\frac{5}{4}$.

At $z = -1/2$: $\mathrm{Res} = \frac{17/16}{3/4} = \frac{17}{12}$.

$I = \frac{1}{2i} \cdot 2\pi i \left(-\frac{5}{4} + \frac{17}{12}\right) = \frac{\pi}{6}$.

</details>

### 9.8 Improper Integrals and Principal Value

For integrals where the integrand has poles on the real axis, we use the **Cauchy principal value**:

$$\mathrm{PV}\!\int_{-\infty}^{\infty} f(x)\, dx = \lim_{\varepsilon \to 0^+} \left(\int_{-\infty}^{a-\varepsilon} f(x)\, dx + \int_{a+\varepsilon}^{\infty} f(x)\, dx\right)$$

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{\sin x}{x}\, dx$.

Consider $\oint_\gamma \frac{e^{iz}}{z}\, dz$ where $\gamma$ consists of $[-R, -\varepsilon]$
$[\varepsilon, R]$ on the real axis, small upper semicircle $C_\varepsilon$ around $0$And large
Upper semicircle $C_R$.

No poles inside the contour, so the integral is $0$.

On $C_R$: vanishes as $R \to \infty$ by Jordan's lemma. On $C_\varepsilon$ (indenting above):
$\int_{C_\varepsilon} \frac{e^{iz}}{z}\, dz \to -i\pi$ as $\varepsilon \to 0$ (half residue
contribution).

$0 = \mathrm{PV}\!\int_{-\infty}^{\infty} \frac{e^{ix}}{x}\, dx + (-i\pi)$.

$\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{e^{ix}}{x}\, dx = i\pi$.

Taking imaginary parts: $\mathrm{PV}\!\int_{-\infty}^{\infty} \frac{\sin x}{x}\, dx = \pi$.

</details>

