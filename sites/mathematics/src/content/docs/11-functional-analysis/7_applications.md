---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "7_applications", "url": "https://mathematics.wyattau.com/11-functional-analysis/7_applications"}]
}
</script>
title: Applications
tags:
  - Mathematics
  - University
description: "Applications: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "11 Functional Analysis", "url": "https://mathematics.wyattau.com/11-functional-analysis"}, {"name": "7_applications", "url": "https://mathematics.wyattau.com/11-functional-analysis/7_applications"}]
}
</script>

### 7.1 Differential Equations

**Example (Spectral Theory and ODEs).** Consider the Sturm-Liouville problem
$-u"' + q(x)u = \lambda u$ on $[a, b]$ with boundary conditions $u(a) = u(b) = 0$. The inverse
operator $T = (-d^2/dx^2 + q)^{-1}$ is a compact self-adjoint operator on $L^2[a, b]$. By the
spectral theorem, the eigenfunctions form an orthonormal basis, and the eigenvalues
$\lambda_n \to \infty$.

### 7.2 Quantum Mechanics

In quantum mechanics, the state space of a system is a Hilbert space $H$ (typically
$L^2(\mathbb{R}^3)$, the space of square-integrable wavefunctions). Observables are self-adjoint operators on $H$. The spectral theorem guarantees
that every observable has a spectral decomposition:

$$A = \int_{\sigma(A)} \lambda\, dP(\lambda)$$

where $P$ is the projection-valued measure associated with $A$.

**Example.** The position operator $(X\psi)(x) = x\psi(x)$ and momentum operator
$(P\psi)(x) = -i\hbar\psi'(x)$ are self-adjoint on suitable domains of $L^2(\mathbb{R})$. The
canonical commutation relation $[X, P] = i\hbar I$ is fundamental to quantum mechanics.

### 7.3 Weak Solutions of Partial Differential Equations

Classical solutions of PDEs require pointwise differentiability, which is too restrictive for many
problems. Functional analysis provides the framework for **weak (distributional) solutions**.

Consider the Poisson equation $-\Delta u = f$ on a bounded domain $\Omega \subset \mathbb{R}^n$ with
$u|_{\partial\Omega} = 0$. Multiply both sides by a smooth test function $\varphi$ with
$\varphi|_{\partial\Omega} = 0$ and integrate by parts:

$$\int_\Omega \nabla u \cdot \nabla \varphi\, dx = \int_\Omega f \varphi\, dx$$

This is the **weak formulation**: find $u$ in a suitable function space such that the above holds
for all test functions $\varphi$.

The natural space for this problem is the **Sobolev space** $H^1_0(\Omega)$, defined as the
completion of $C_c^\infty(\Omega)$ under the norm
$\|u\|_{H^1} = \left(\int_\Omega |u|^2 + |\nabla u|^2\, dx\right)^{1/2}$. The Riesz representation
theorem applied to the inner product
$\langle u, v\rangle_{H^1_0} = \int_\Omega \nabla u \cdot \nabla v\, dx$ yields existence and
uniqueness of the weak solution. This is known as the **Lax-Milgram theorem**:

**Theorem 7.1 (Lax-Milgram).** Let $H$ be a Hilbert space and $B : H \times H \to \mathbb{R}$ a
bounded bilinear form that is **coercive**, i.e., there exists $c > 0$ such that
$B(u, u) \geq c\|u\|^2$ for all $u \in H$. Then for every bounded linear functional $\ell \in H^*$,
there exists a unique $u \in H$ such that $B(u, v) = \ell(v)$ for all $v \in H$.

Sobolev spaces $W^{k,p}(\Omega)$ (for $k \geq 0$, $1 \leq p \leq \infty$) generalise this idea:
$W^{k,p}$ consists of functions whose weak derivatives up to order $k$ belong to $L^p$. They are
Banach spaces, and $W^{k,2} = H^k$ are Hilbert spaces.

### 7.4 Fourier Analysis and Signal Processing

The Fourier transform on $L^2(\mathbb{R}^n)$ is a unitary operator $\mathcal{F} : L^2 \to L^2$ defined by:

$$(\mathcal{F}f)(\xi) = \frac{1}{(2\pi)^{n/2}} \int_{\mathbb{R}^n} f(x) e^{-i x \cdot \xi} dx$$

Plancherel's theorem states $\|\mathcal{F}f\|_2 = \|f\|_2$. The Schwartz space $\mathcal{S}(\mathbb{R}^n)$ of rapidly decaying smooth functions is dense in $L^2$ and is invariant under the Fourier transform.

In signal processing, the sampling theorem (Nyquist-Shannon) follows from the Paley-Wiener theorem characterising functions with compactly supported Fourier transforms. Functional analysis also underpins wavelet theory: the existence of orthonormal wavelet bases of $L^2(\mathbb{R})$ relies on the theory of frames and multiresolution analysis.

### 7.5 Applied Functional Analysis: The Galerkin Method

The Galerkin method approximates solutions of PDEs by projecting onto finite-dimensional subspaces. Let $V_h \subset H^1_0(\Omega)$ be a finite-dimensional subspace (e.g., finite elements). Find $u_h \in V_h$ such that:

$$\int_\Omega \nabla u_h \cdot \nabla v_h\, dx = \int_\Omega f v_h\, dx \quad \forall v_h \in V_h$$

This reduces to solving a linear system $A\mathbf{u} = \mathbf{b}$ where $A_{ij} = \int_\Omega \nabla\phi_i \cdot \nabla\phi_j\, dx$ for basis functions $\{\phi_i\}$. Céa's lemma provides a quasi-optimal error estimate:

$$\|u - u_h\|_{H^1} \leq C \inf_{v_h \in V_h} \|u - v_h\|_{H^1}$$

### 7.6 Optimisation and Control Theory

In convex optimisation, the existence of minimisers for a functional $J : H \to \mathbb{R}$ follows from the direct method of calculus of variations: if $J$ is coercive, lower semicontinuous, and $H$ is reflexive, then a minimiser exists. This applies to problems such as:

$$\min_{u \in H^1_0(\Omega)} \frac{1}{2} \int_\Omega |\nabla u|^2\, dx - \int_\Omega f u\, dx$$

The optimality condition is precisely the weak formulation of the Poisson equation.

**Theorem 7.2 (Stampacchia).** Let $H$ be a Hilbert space, $K \subset H$ a nonempty closed convex set, and $a(\cdot, \cdot)$ a coercive bilinear form. For any $\ell \in H^*$, there exists a unique $u \in K$ such that $a(u, v - u) \geq \ell(v - u)$ for all $v \in K$. This is the foundation of variational inequalities and obstacle problems.

### 7.7 Worked Example: Compact Operators and Integral Equations

**Problem.** Solve the Fredholm integral equation $u(x) - \lambda \int_a^b K(x, y) u(y) dy = f(x)$ where $K$ is a continuous kernel on $[a, b]^2$.

<details>
<summary>Solution</summary>

The integral operator $(T u)(x) = \int_a^b K(x, y) u(y) dy$ is compact on $L^2[a, b]$ (by the Arzela-Ascoli theorem or more generally by the fact that $K$ is Hilbert-Schmidt). For $\lambda$ not in the spectrum of $T$, the equation has a unique solution by the Fredholm alternative: either the homogeneous equation has only the trivial solution and the inhomogeneous equation has a unique solution, or the homogeneous equation has nontrivial solutions and the inhomogeneous equation has solutions only for $f$ orthogonal to the nullspace of $T^*$.

The solution can be expressed using the resolvent operator $R_\lambda = (I - \lambda T)^{-1}$:

$$u = f + \lambda R_\lambda f$$

For degenerate (separable) kernels $K(x, y) = \sum_{i=1}^n g_i(x) h_i(y)$, the equation reduces to an $n \times n$ linear system.

$\blacksquare$

</details>

### 7.8 Worked Example: Neumann Series

**Problem.** Solve $u - Tu = f$ by iteration where $\|T\| < 1$.

<details>
<summary>Solution</summary>

Since $\|T\| < 1$, the Neumann series $(I - T)^{-1} = \sum_{n=0}^\infty T^n$ converges in operator norm. The solution is:

$$u = \sum_{n=0}^\infty T^n f$$

The error after $N$ terms satisfies $\|u - u_N\| \leq \frac{\|T\|^{N+1}}{1 - \|T\|} \|f\|$.

$\blacksquare$

</details>

### 7.9 Application: Control Theory and the Riccati Equation

In optimal control, the **linear-quadratic regulator (LQR)** problem seeks to minimise:

$$J(u) = \int_0^\infty (x(t)^T Q x(t) + u(t)^T R u(t))\, dt$$

subject to $\dot{x} = Ax + Bu$. The optimal control is $u = -Kx$ where $K = R^{-1}B^T P$ and $P$ solves the **algebraic Riccati equation**:

$$A^T P + P A - P B R^{-1} B^T P + Q = 0$$

The existence and uniqueness of a positive definite solution $P$ follows from spectral theory of Hamiltonian matrices and functional analysis on the space of symmetric operators.

### 7.10 Application: Machine Learning and Reproducing Kernel Hilbert Spaces

A **reproducing kernel Hilbert space (RKHS)** $H$ is a Hilbert space of functions on $X$ such that the evaluation functional $\delta_x(f) = f(x)$ is bounded for all $x \in X$. By the Riesz representation theorem, there exists $k_x \in H$ with $f(x) = \langle f, k_x \rangle$.

The **kernel** $k(x, y) = \langle k_x, k_y \rangle$ is a positive definite function. The Moore-Aronszajn theorem states that every positive definite kernel corresponds to a unique RKHS. RKHS theory underpins kernel methods in machine learning, including support vector machines and Gaussian processes.

## Cross-References

- **[The Fundamental Theorems](./4_the-fundamental-theorems.md)**: Provides the Lax-Milgram theorem and Hahn-Banach extension used to establish existence and uniqueness of weak solutions.
- **[Compact Operators](./5_compact-operators.md)**: The Fredholm alternative for compact operators is applied to solve integral equations arising in physics.
- **[Weak and Weak* Convergence](./6_weak-and-weak-convergence.md)**: Weak compactness is essential for extracting convergent subsequences in the calculus of variations and PDE theory.

## Intuition

Functional analysis provides the language and machinery for solving differential equations, signal processing, and machine learning. In PDE theory, weak solutions are obtained by projecting onto finite-dimensional subspaces via the Galerkin method, with existence guaranteed by the Lax-Milgram theorem. The Fourier transform decomposes signals into frequencies, and the sampling theorem connects continuous signals to their discrete representations. In quantum mechanics, states live in Hilbert space and observables are self-adjoint operators whose spectral decompositions determine measurement outcomes. In machine learning, reproducing kernel Hilbert spaces provide the mathematical framework for support vector machines and Gaussian processes, where inner products encode similarity between data points.

## Common Mistakes

**Mistake 1: Assuming the Lax-Milgram theorem requires a Hilbert space inner product**
The Lax-Milgram theorem applies to any coercive bounded bilinear form on a Hilbert space, not just the standard inner product. Students often restrict themselves to the inner product formulation and miss that the theorem handles more general problems like those arising from PDEs with non-symmetric bilinear forms.

**Mistake 2: Confusing weak and strong solutions of PDEs**
A weak solution satisfies the PDE in a distributional sense, while a strong solution satisfies it pointwise with enough regularity. Students sometimes assume that existence of a weak solution immediately gives a classical solution. Additional regularity theory (elliptic regularity, Sobolev embedding) is needed to upgrade weak solutions to strong ones.

**Mistake 3: Forgetting that compactness is essential for extracting convergent subsequences**
In the direct method of calculus of variations, one needs a minimizing sequence, weak lower semicontinuity of the functional, and weak compactness of the domain. Students frequently try to extract a strongly convergent subsequence from a bounded sequence, which fails in infinite dimensions. Weak compactness (via reflexivity) and then using the compactness of certain operators is the correct approach.

