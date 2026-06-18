---
title: One-Dimensional Problems
tags:
  - Physics
  - University
description: ""(x) \rangle$$

Where $T$ is the kinetic energy.

_Proof._ Using Ehrenfest's theorem for the operator $\hat{G} = \hat{x}\hat{p}$:

$$\frac{d}{dt}\langle\hat{x}\hat{p}\rangle = \frac{i}{\hbar}\langle[\hat{H}, \hat{x}\hat{p}]\rangle = 0$$

For a stationary state. Computing the commutator:

$$[\hat{H}, \hat{x}\hat{p}] = \left[\frac{\hat{p}^2}{2m} + V, \hat{x}\hat{p}\right] = \frac{1}{2m}[\hat{p}^2, \hat{x}]\hat{p} + [\hat{x}\hat{p}, V] + \hat{x}[V, \hat{p}]$$

$$= \frac{-i\hbar}{m}\hat{p}\hat{p} + \hat{x}[V, \hat{p}] + \hat{x}[V, \hat{p}] = \frac{-i\hbar\hat{p}^2}{m} + 2i\hbar\hat{x}\,V'(x)$$

Setting $d\langle\hat{x}\hat{p}\rangle/dt = 0$ and dividing by $i\hbar$:

$$-\frac{\langle\hat{p}^2\rangle}{m} + 2\langle\hat{x}\,V'(\hat{x})\rangle = 0$$

$$-2\langle T \rangle + \langle x\,V'(x) \rangle = 0 \implies 2\langle T \rangle = \langle x\,V'(x) \rangle \qquad \blacksquare$$

**Applications.** For the harmonic oscillator ($V \propto x^2$):
$2\langle T \rangle = 2\langle V \rangle$ So $\langle T \rangle = \langle V \rangle = E/2$. For the
hydrogen atom ($V \propto -1/r$): $2\langle T \rangle = -\langle V \rangle$So
$\langle T \rangle = -E$ and $\langle V \rangle = 2E$.

### 5.4 The Finite Square Well

Consider $V(x) = -V_0$ for $|x| \lt a$ and $V(x) = 0$ for $|x| \gt a$Where $V_0 \gt 0$.

#### 5.4.1 Bound States ($E \lt 0$)

Define $k = \sqrt{2m(E + V_0)}/\hbar$ (inside) and $\kappa = \sqrt{-2mE}/\hbar$ (outside). Note that
$k^2 + \kappa^2 = 2mV_0/\hbar^2$.

**Even parity solutions.** Inside: $\phi(x) = A\cos(kx)$. Outside: $\phi(x) = Be^{-\kappa|x|}$.

Matching $\phi$ and $\phi'$ at $x = a$ and dividing the two conditions:

$$k\tan(ka) = \kappa$$

**Odd parity solutions.** Inside: $\phi(x) = A\sin(kx)$. Outside: $\phi(x) = Be^{-\kappa|x|}$ (with
sign For $x \lt 0$). Matching gives:

$$-k\cot(ka) = \kappa$$

These are transcendental equations solved graphically. Define $z = ka$ and
$z_0 = a\sqrt{2mV_0/\hbar^2}$.

The even condition becomes $\tan z = \sqrt{z_0^2/z^2 - 1}$ and the odd condition becomes
$-\cot z = \sqrt{z_0^2/z^2 - 1}$. The number of bound states is $N = \lfloor 2z_0/\pi \rfloor + 1$.
There is always at least one bound state (the even ground state).

#### 5.4.2 Scattering States ($E \gt 0$)

For $E \gt 0$The particle has enough energy to escape. Define $k_1 = \sqrt{2mE}/\hbar$ (outside) And
$k_2 = \sqrt{2m(E + V_0)}/\hbar$ (inside). The solutions are oscillatory everywhere. The
Transmission coefficient is:

$$T = \frac{1}{1 + \dfrac{V_0^2}{4E(E + V_0)}\sin^2(2k_2 a)}$$

**Resonances** occur when $2k_2 a = n\pi$ (integer multiples of $\pi$), giving $T = 1$: the well
Becomes perfectly transparent.

**Example 5.3.** A finite square well has $V_0 = 5\,\mathrm{eV}$ and $2a = 1\,\mathrm{nm}$. Estimate
the Number of bound states for an electron.

<details>
<summary>Solution</summary>

Compute $z_0 = a\sqrt{2m_e V_0}/\hbar$:

$$z_0 = (0.5 \times 10^{-9})\frac{\sqrt{2(9.109 \times 10^{-31})(5)(1.602 \times 10^{-19})}}{1.055 \times 10^{-34}}$$

$$= (5 \times 10^{-10})\frac{\sqrt{1.460 \times 10^{-48}}}{1.055 \times 10^{-34}} = (5 \times 10^{-10})\frac{3.821 \times 10^{-24}}{1.055 \times 10^{-34}}$$

$$= (5 \times 10^{-10})(3.622 \times 10^{10}) = 18.11$$

The number of bound states is
$N = \lfloor 2z_0/\pi \rfloor + 1 = \lfloor 36.22/\pi \rfloor + 1 = \lfloor 11.53 \rfloor + 1 = 12$.

(Actually, the formula is $N = \lfloor z_0/(\pi/2) \rfloor + 1$ only when counting the number of
Intersections. With $z_0/(\pi/2) = 18.11/1.571 = 11.53$There are 11 full intersections plus one
Partial, giving about 11 or 12 bound states.)

</details>

### 5.5 The Delta Function Potential

Consider $V(x) = -\alpha\delta(x)$ where $\alpha \gt 0$.

#### 5.5.1 Bound State ($E \lt 0$)

The wave function is $\psi(x) = Ae^{\kappa x}$ for $x \lt 0$ and $\psi(x) = Be^{-\kappa x}$ for
$x \gt 0$ Where $\kappa = \sqrt{-2mE}/\hbar$.

**Matching conditions.**

1. **Continuity:** $A = B$ at $x = 0$.

2. **Discontinuity in derivative** (integrating the Schrodinger equation across $x = 0$):

$$\psi'(0^+) - \psi'(0^-) = -\frac{2m\alpha}{\hbar^2}\psi(0)$$

This gives $-\kappa B - \kappa A = -2m\alpha A/\hbar^2$And since $A = B$:

$$\kappa = \frac{m\alpha}{\hbar^2}$$

The bound state energy is:

$$E = -\frac{\hbar^2\kappa^2}{2m} = -\frac{m\alpha^2}{2\hbar^2}$$

The normalised wave function is $\psi(x) = \sqrt{\kappa}\,e^{-\kappa|x|}$. There is exactly one
bound state.

#### 5.5.2 Scattering States ($E \gt 0$)

For a particle of energy $E = \hbar^2 k^2/(2m)$ incident from the left:

$$\psi(x) = \begin{cases} e^{ikx} + Re^{-ikx} & x \lt 0 \\ Te^{ikx} & x \gt 0 \end{cases}$$

Applying the matching conditions at $x = 0$:

$$1 + R = T, \quad ik(T - 1 - R) = -\frac{2m\alpha}{\hbar^2}T$$

Solving:

$$T = \frac{ik}{ik - m\alpha/\hbar^2} = \frac{1}{1 + im\alpha/(\hbar^2 k)}$$

$$R = \frac{-m\alpha/\hbar^2}{ik - m\alpha/\hbar^2} = \frac{-im\alpha/\hbar^2}{ik + m\alpha/\hbar^2}$$

The transmission and reflection coefficients:

$$|T|^2 = \frac{1}{1 + (m\alpha)^2/(\hbar^4 k^2)} = \frac{1}{1 + m\alpha^2/(2\hbar^2 E)}, \quad |R|^2 = 1 - |T|^2$$

Note that even for very high energies ($E \to \infty$),
$|R|^2 \to (m\alpha)^2/(\hbar^4 k^2) \neq 0$: The delta function always reflects some probability,
unlike a smooth potential which becomes Transparent at high energies. This is because the delta
function has an infinitely sharp feature At $x = 0$ that scatters waves of all wavelengths.

### 5.6 Quantum Tunnelling

Consider a rectangular barrier $V(x) = V_0$ for $0 \lt x \lt a$ and $V(x) = 0$ otherwise, with
$E \lt V_0$.

Inside the barrier, the Schrodinger equation gives exponentially decaying and growing solutions:

$$\psi(x) = Ce^{\kappa x} + De^{-\kappa x}, \quad \kappa = \sqrt{\frac{2m(V_0 - E)}{\hbar^2}}$$

For a **thick barrier** ($\kappa a \gg 1$), the growing solution $Ce^{\kappa x}$ is negligible at
the Far edge, and the transmission coefficient simplifies to:

$$T \approx \frac{16E(V_0 - E)}{V_0^2}\,e^{-2\kappa a}$$

The exponential factor $e^{-2\kappa a}$ is the hallmark of quantum tunnelling: the probability of
Penetration decreases exponentially with barrier width and height.

:::caution Common Pitfall Tunnelling does not violate energy conservation. The particle does not
"have" energy $V_0$ inside The barrier; rather, the wave function extends into the classically
forbidden region with Exponentially decreasing amplitude. The particle's energy is $E \lt V_0$
throughout.
:::

**Example 5.2.** An electron with $E = 5$ eV approaches a barrier of height $V_0 = 10$ eV and Width
$a = 0.5$ nm. Calculate $T$.

<details>
<summary>Solution</summary>

$${\kappa = \sqrt{\frac{2(9.109 \times 10^{-31})(10 - 5)(1.602 \times 10^{-19})}{(1.055 \times 10^{-34})^2}} = \sqrt{1.302 \times 10^{20}} = 1.141 \times 10^{10}\;\mathrm{m}^{-1}}$$

$$2\kappa a = 2(1.141 \times 10^{10})(5 \times 10^{-10}) = 11.41$$

$$T \approx \frac{16(5)(5)}{100}\,e^{-11.41} = 4.0 \times e^{-11.41} = 4.0 \times 1.097 \times 10^{-5} = 4.4 \times 10^{-5}$$

The electron has roughly a $0.004\%$ chance of tunnelling through this barrier.

</details>

**Application: alpha decay.** Alpha decay can be understood as quantum tunnelling through the
Coulomb Barrier. The Geiger-Nuttall law, which relates the decay constant to the alpha particle
energy, Follows directly from the exponential dependence of $T$ on the barrier width.

**Application: scanning tunnelling microscope (STM).** In an STM, a small voltage is applied between
A sharp tip and a conducting surface. Electrons tunnel across the gap, producing a current that
Depends exponentially on the tip-surface distance: $I \propto e^{-2\kappa d}$. This allows atomic-
Resolution imaging of surfaces, as a change in distance of $0.1$ nm changes the current by a factor
Of about 10.


