---
title: Angular Momentum and the Hydrogen Atom
tags:
  - Physics
  - University
description: ""}^{m'}\,d\Omega = \delta_{ll'}\delta_{mm'}$
- Completeness:
  $\sum_{l=0}^{\infty}\sum_{m=-l}^{l} Y_l^m(\theta,\phi)\,Y_l^m^*(\theta',\phi') = \delta(\cos\theta - \cos\theta')\delta(\phi - \phi')$
- Parity: $Y_l^m(\pi-\theta, \phi+\pi) = (-1)^l\,Y_l^m(\theta,\phi)$

**First few spherical harmonics:**

| $(l, m)$     | $Y_l^m(\theta,\phi)$                                 |
| ------------ | ---------------------------------------------------- |
| $(0, 0)$     | $\dfrac{1}{\sqrt{4\pi}}$                             |
| $(1, 0)$     | $\sqrt{\dfrac{3}{4\pi}}\cos\theta$                   |
| $(1, \pm 1)$ | $\mp\sqrt{\dfrac{3}{8\pi}}\sin\theta\,e^{\pm i\phi}$ |
| $(2, 0)$     | $\sqrt{\dfrac{5}{16\pi}}(3\cos^2\theta - 1)$         |

### 6.5 The Hydrogen Atom

The Hamiltonian for hydrogen (electron of mass $m_e$ and charge $-e$Proton of charge $+e$):

$$\hat{H} = -\frac{\hbar^2}{2m_e}\nabla^2 - \frac{e^2}{4\pi\varepsilon_0 r}$$

#### 6.5.1 Separation of Variables

In spherical coordinates, the Laplacian separates, and we write
$\psi(r,\theta,\phi) = R(r)\,Y_l^m(\theta,\phi)$. The radial equation is:

$$-\frac{\hbar^2}{2m_e}\frac{1}{r^2}\frac{d}{dr}\!\left(r^2\frac{dR}{dr}\right) + \left[-\frac{e^2}{4\pi\varepsilon_0 r} + \frac{\hbar^2 l(l+1)}{2m_e r^2}\right]R = ER$$

The term $\hbar^2 l(l+1)/(2m_e r^2$ acts as an effective **centrifugal barrier**.

#### 6.5.2 Solving the Radial Equation

Substitute $u(r) = rR(r)$ and define the Bohr radius $a_0 = 4\pi\varepsilon_0\hbar^2/(m_e e^2)$ and
the Rydberg energy $E_R = e^2/(8\pi\varepsilon_0 a_0) = m_e e^4/(8\varepsilon_0^2 h^2)$. With the
substitution $\rho = 2r/(na_0)$The radial equation becomes:

$$\frac{d^2u}{d\rho^2} = \left[\frac{l(l+1)}{\rho^2} - \frac{1}{\rho} + \frac{n}{4}\left(\frac{1}{n^2} - \frac{E}{E_R}\right)\right]u$$

For the solution to be well-behaved at both $\rho = 0$ and $\rho \to \infty$We require:

$$E = -\frac{E_R}{n^2} = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2\hbar^2}\cdot\frac{1}{n^2}$$

With $n = 1, 2, 3, \ldots$ and $l = 0, 1, \ldots, n-1$.

The radial wave functions are:

$$R_{nl}(r) = \sqrt{{\left(\frac{2}{na_0}\right)}^3\frac{(n-l-1)!}{2n[(n+l)!]^3}}\,e^{-r/(na_0)}\!\left(\frac{2r}{na_0}\right)^l L_{n-l-1}^{2l+1}\!\left(\frac{2r}{na_0}\right)$$

Where $L_q^p$ are the associated Laguerre polynomials.

**Energy eigenvalues:**

$$E_n = -\frac{m_e e^4}{2(4\pi\varepsilon_0)^2 \hbar^2} \cdot \frac{1}{n^2} = -\frac{13.6\,\mathrm{eV}{n^2}, \quad n = 1, 2, 3, \ldots}$$

**Degeneracy:** Each energy level $E_n$ has degeneracy $n^2$ (ignoring spin). The quantum numbers
are:

- Principal: $n = 1, 2, 3, \ldots$
- Orbital angular momentum: $l = 0, 1, \ldots, n - 1$
- Magnetic: $m_l = -l, \ldots, l$

The ground state wave function ($n = 1, l = 0, m_l = 0$):

$$\psi_{100}(r, \theta, \phi) = \frac{1}{\sqrt{\pi a_0^3}} e^{-r/a_0}$$

Where $a_0 = \frac{4\pi\varepsilon_0 \hbar^2}{m_e e^2} \approx 0.529\,\mathrm{\AA}$ is the Bohr
radius.

#### 6.5.3 Expectation Values for the Ground State

**Example 6.1.** Calculate $\langle r \rangle$, $\langle r^2 \rangle$And $\langle 1/r \rangle$ for
the Hydrogen ground state.

<details>
<summary>Solution</summary>

For $\psi_{100} = (\pi a_0^3)^{-1/2}e^{-r/a_0}$All integrals involve radial integrals with $r^2 dr$:

$$\langle r \rangle = \frac{4\pi}{\pi a_0^3}\int_0^{\infty} r^3 e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{6}{(2/a_0)^4} = \frac{4 \cdot 6 \cdot a_0^4}{16} = \frac{3}{2}a_0$$

$$\langle r^2 \rangle = \frac{4}{a_0^3}\int_0^{\infty} r^4 e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{24}{(2/a_0)^5} = \frac{4 \cdot 24 \cdot a_0^5}{32} = 3a_0^2$$

$$\left\langle\frac{1}{r}\right\rangle = \frac{4}{a_0^3}\int_0^{\infty} r\,e^{-2r/a_0}\,dr = \frac{4}{a_0^3}\cdot\frac{1}{(2/a_0)^2} = \frac{1}{a_0}$$

Note that $\langle 1/r \rangle = 1/a_0 = -2E_1/e^2$ (by the virial theorem). The standard deviation
is $\Delta r = \sqrt{3a_0^2 - (3a_0/2)^2} = \sqrt{3/4}\,a_0$.

</details>

#### 6.5.4 Selection Rules

Electric dipole transitions between hydrogen states are governed by selection rules derived from the
Wigner-Eckart theorem. For a transition $|n,l,m\rangle \to |n',l',m'\rangle$ induced by the electric
Dipole operator $\hat{\mathbf{r}}$:

$$\Delta l = l' - l = \pm 1, \quad \Delta m = m' - m = 0, \pm 1$$

$\Delta n$ is unrestricted (energy conservation determines which transitions are allowed).

_Proof sketch._ The matrix element $\langle n'l'm'|\hat{z}|nlm\rangle$ involves the integral
$\int Y_{l'}^{m'*}(\theta,\phi)\cos\theta\,Y_l^m(\theta,\phi)\,d\Omega$. Using the addition theorem
For spherical harmonics, $\cos\theta = \sqrt{4\pi/3}\,Y_1^0$The integral becomes a product of
Clebsch-Gordan coefficients that vanishes unless $l' = l \pm 1$ and $m' = m$. $\blacksquare$

### 6.6 Orbital Shapes and Quantum Numbers

The three quantum numbers characterise hydrogen atom eigenstates:

- **$n$ (principal):** Determines the energy and overall size. The mean radius scales as
  $\langle r \rangle \propto n^2 a_0$.
- **$l$ (orbital angular momentum):** Determines the shape. The spectroscopic notation is $l = 0$
  (s), $l = 1$ (p), $l = 2$ (d), $l = 3$ (f), etc.
- **$m_l$ (magnetic):** Determines the spatial orientation. The angular dependence is
  $Y_l^{m_l}(\theta, \phi)$.

**Radial probability distribution.** The probability of finding the electron between $r$ and $r+dr$
is $P(r)\,dr = |R_{nl}(r)|^2 r^2\,dr$. For the $1s$ state, the maximum is at $r = a_0$ (the Bohr
radius). For $2s$There is a node at $r = 2a_0$. For $2p$The distribution peaks closer to the
nucleus.

**Angular distributions.** The $s$ orbitals ($l = 0$) are spherically symmetric. The $p$ orbitals
($l = 1$) have dumbbell shapes aligned along the $x$-, $y$-, or $z$-axis depending on $m_l$. The $d$
Orbitals ($l = 2$) have more complex cloverleaf patterns.

**Radial nodes.** The radial wave function $R_{nl}(r)$ has $n - l - 1$ nodes (zeros excluding
$r = 0$ And $r = \infty$). The total number of nodes in the full wave function is $n - 1$Consistent
with The general property that the $n$-th energy eigenstate has $n - 1$ nodes.

**Fine structure.** The non-relativistic Schrodinger equation gives energy levels depending only on
$n$. Relativistic corrections (spin-orbit coupling, Darwin term, kinetic energy correction) split
these Into fine structure multiplets, removing the $l$-degeneracy. The fine structure shift is of
order $\alpha^2 E_n$ where $\alpha \approx 1/137$ is the fine structure constant.

