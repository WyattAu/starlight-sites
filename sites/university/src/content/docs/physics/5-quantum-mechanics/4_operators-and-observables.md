---
title: Operators and Observables
tags:
  - Physics
  - University
description: ""s Theorem).** Quantum expectation values obey classical equations of
motion:

$$\frac{d\langle \hat{x} \rangle}{dt} = \frac{\langle \hat{p} \rangle}{m}, \quad \frac{d\langle \hat{p} \rangle}{dt} = -\left\langle \frac{\partial V}{\partial x}\right\rangle$$

_Proof of Ehrenfest's Theorem._ From the Schrodinger equation:

$$\frac{d\langle \hat{A} \rangle}{dt} = \frac{i}{\hbar}\langle[\hat{H}, \hat{A}]\rangle + \left\langle\frac{\partial \hat{A}}{\partial t}\right\rangle$$

For $\hat{A} = \hat{x}$ (no explicit time dependence), using
$[\hat{p}^2, \hat{x}] = -2i\hbar\hat{p}$:

$$\frac{d\langle \hat{x} \rangle}{dt} = \frac{i}{\hbar}\!\left\langle\left[\frac{\hat{p}^2}{2m}, \hat{x}\right]\right\rangle = \frac{i}{\hbar}\cdot\frac{-2i\hbar}{2m}\langle\hat{p}\rangle = \frac{\langle\hat{p}\rangle}{m}$$

For $\hat{A} = \hat{p}$Using $[V(\hat{x}), \hat{p}] = i\hbar\,V'(\hat{x})$:

$$\frac{d\langle \hat{p} \rangle}{dt} = \frac{i}{\hbar}\langle[V(\hat{x}), \hat{p}]\rangle = -\left\langle\frac{\partial V}{\partial x}\right\rangle$$

$\blacksquare$

**Correspondence principle.** Ehrenfest's theorem embodies the **correspondence principle**: in the
Classical limit (large quantum numbers or $\hbar \to 0$), quantum expectation values follow
Classical trajectories. However, this is only exact for linear or quadratic potentials; for general
Potentials, $\langle V'(x) \rangle \neq V'(\langle x \rangle)$So quantum corrections persist even
For large systems.

### 4.6 Solving Eigenvalue Equations

To find the eigenvalues and eigenvectors of an operator $\hat{A}$Solve:

$$\hat{A}|\phi\rangle = a|\phi\rangle \implies \det(\hat{A} - a\hat{I}) = 0$$

The roots give the eigenvalues; substituting each back yields the eigenvectors.

**Example 4.3.** Find the eigenvalues and eigenvectors of
$\hat{S}_x = \frac{\hbar}{2}\begin{pmatrix}0&1\\1&0\end{pmatrix}$.

<details>
<summary>Solution</summary>

$$\det\!\left(\frac{\hbar}{2}\begin{pmatrix}-a & 1\\1 & -a\end{pmatrix}\right) = 0 \implies a^2 - 1 = 0 \implies a = \pm 1$$

Eigenvalues are $\pm\hbar/2$.

For $a = +1$:
$\begin{pmatrix}-1 & 1\\1 & -1\end{pmatrix}\begin{pmatrix}c_1\\c_2\end{pmatrix} = 0 \implies c_1 = c_2$.
Normalised: $|+\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\1\end{pmatrix}$.

For $a = -1$: $c_1 = -c_2$. Normalised:
$|-\rangle_x = \frac{1}{\sqrt{2}}\begin{pmatrix}1\\-1\end{pmatrix}$.

These are equal superpositions of the $S_z$ eigenstates. Note that measuring $S_x$ on a state of
Definite $S_z$ gives probabilistic outcomes, and vice versa.

</details>

