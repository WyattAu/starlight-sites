---
title: Inner Product Spaces and Hilbert Spaces
tags:
  - Mathematics
  - University
description: ""s Inequality).** If $\{e_i\}_{i=1}^n$ is an orthonormal set, then
$\sum_{i=1}^n |\langle x, e_i\rangle|^2 \leq \|x\|^2$.

**Theorem 2.8.** A Hilbert space is separable if and only if it admits a countable orthonormal
basis.

**Theorem 2.9 (Parseval's Identity).** If $\{e_n\}$ is an orthonormal basis for $H$, then for every
$x \in H$:

$$\|x\|^2 = \sum_{n=1}^{\infty} |\langle x, e_n\rangle|^2 \quad \text{and} \quad x = \sum_{n=1}^{\infty} \langle x, e_n\rangle e_n$$

### 2.5 Riesz Representation Theorem

**Theorem 2.10 (Riesz Representation).** Let $H$ be a Hilbert space. For every bounded linear
functional $\varphi \in H^*$, there exists a unique $y \in H$ such that
$\varphi(x) = \langle x, y\rangle$ for all $x \in H$. Moreover, $\|\varphi\|_{H^*} = \|y\|_H$.

_Proof._ If $\varphi = 0$, take $y = 0$. Otherwise, $\ker(\varphi)$ is a closed subspace, so
$H = \ker(\varphi) \oplus \ker(\varphi)^\perp$. Take $z \in \ker(\varphi)^\perp$ with $\|z\| = 1$.
Then $y = \overline{\varphi(z)} \cdot z$ satisfies $\varphi(x) = \langle x, y\rangle$ for all $x$.
Uniqueness follows from the polarization identity. $\blacksquare$

**Corollary 2.11.** Every Hilbert space is isometrically isomorphic to its dual: $H \cong H^*$
(anti-linearly).

