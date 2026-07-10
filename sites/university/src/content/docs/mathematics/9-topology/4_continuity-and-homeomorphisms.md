---
title: Continuity and Homeomorphisms
tags:
  - University Maths
description: 'Let and be topological spaces. A function is if the preimage of every open set i Comprehensive educational content coverage with definitions and practice proble'
---

### 4.1 Continuous Functions

**Definition.** Let $(X, \tau_X)$ and $(Y, \tau_Y)$ be topological spaces. A function $f : X \to Y$
is **continuous** if the preimage of every open set is open: for all $U \in \tau_Y$,
$f^{-1}(U) \in \tau_X$.

Equivalently, $f$ is continuous if the preimage of every closed set is closed.

**Proposition 4.1.** The following are equivalent for $f : X \to Y$:

1. $f$ is continuous.
2. $f^{-1}(V)$ is closed in $X$ for every closed $V \subseteq Y$.
3. $f^{-1}(\overline{B}) \subseteq \overline{f^{-1}(B)}$ for every $B \subseteq Y$.
4. $f(\overline{A}) \subseteq \overline{f(A)}$ for every $A \subseteq X$.

**Example 4.1.** Every constant function $f : X \to Y$ is continuous.

**Example 4.2.** The identity map $\operatorname{id} : X \to X$ is always continuous.

**Example 4.3.** If $\tau_1$ and $\tau_2$ are topologies on $X$ with $\tau_1 \subseteq \tau_2$, then
$\operatorname{id} : (X, \tau_2) \to (X, \tau_1)$ is continuous, but
$\operatorname{id} : (X, \tau_1) \to (X, \tau_2)$ need not be.

**Proposition 4.2.** The composition of continuous functions is continuous: if $f : X \to Y$ and
$g : Y \to Z$ are continuous, then $g \circ f : X \to Z$ is continuous.

**Continuity at a point.** A function $f : X \to Y$ is **continuous at $x_0 \in X$** if for every
neighbourhood $V$ of $f(x_0)$, there exists a neighbourhood $U$ of $x_0$ such that $f(U) \subseteq V$.
This local definition coincides with the global definition: $f$ is continuous iff it is continuous at
every point.

**Proposition 4.3 (Pasting Lemma).** If $X = A \cup B$ where $A$ and $B$ are closed (or open) in $X$,
and $f : A \to Y$, $g : B \to Y$ are continuous functions that agree on $A \cap B$, then the
function $h : X \to Y$ defined by $h|_A = f$ and $h|_B = g$ is continuous.

**Example 4.4 (Piecewise functions).** The absolute value function $f(x) = |x|$ is continuous on
$\mathbb{R}$ by the pasting lemma: on $(-\infty, 0]$ it equals $-x$ (continuous), on $[0, \infty)$ it
equals $x$ (continuous), and the two agree at $x = 0$.

**Example 4.5.** The function $f(x) = \sin(1/x)$ for $x \neq 0$ and $f(0) = 0$ is **not** continuous
at $0$, even though it satisfies the intermediate value property on every neighbourhood.

### 4.2 Open and Closed Maps

**Definition.** A function $f : X \to Y$ is **open** if the image of every open set is open; it is
**closed** if the image of every closed set is closed. Continuity does not imply openness: the
constant function $f(x) = c$ is continuous but not open (the image $\{c\}$ is not open in
$\mathbb{R}$). The projection $\pi : X \times Y \to X$ is open but not necessarily closed.

**Proposition 4.4.** A bijective continuous function is a homeomorphism iff it is open (equivalently,
closed).

### 4.3 Homeomorphisms

**Definition.** A function $f : X \to Y$ is a **homeomorphism** if $f$ is bijective and both $f$ and
$f^{-1}$ are continuous. We write $X \cong Y$ and say $X$ and $Y$ are **homeomorphic**.

A **topological property** (or **topological invariant**) is a property preserved by homeomorphisms.

**Example 4.6.** $(0, 1)$ is homeomorphic to $\mathbb{R}$ via
$f(x) = \tan\left(\pi x - \frac{\pi}{2}\right)$.

**Example 4.7.** Any two open intervals $(a, b)$ and $(c, d)$ in $\mathbb{R}$ are homeomorphic via
an affine map.

**Example 4.8 (Coffee cup and donut).** A coffee cup (with a handle) is homeomorphic to a torus
$S^1 \times S^1$ via a continuous deformation. This illustrates that homeomorphisms permit stretching
and bending but not tearing or gluing.

**Proposition 4.5.** Homeomorphism is an equivalence relation: reflexive, symmetric, and transitive.

### 4.4 Topological Properties

The following are topological invariants (preserved by homeomorphisms):

- Compactness
- Connectedness
- Separation axioms ($T_0$, $T_1$, $T_2$, etc.)
- Countability axioms (first-countable, second-countable)
- The fundamental group $\pi_1(X)$

**Proposition 4.6.** "Boundedness" is **not** a topological property: $(0, 1)$ is bounded but is
homeomorphic to the unbounded $\mathbb{R}$.

### 4.5 Embeddings and Quotient Maps

**Definition.** An **embedding** is a homeomorphism onto its image: $f : X \to Y$ such that
$f : X \to f(X)$ (with the subspace topology) is a homeomorphism.

**Definition.** A surjective continuous map $q : X \to Y$ is a **quotient map** if $U \subseteq Y$ is
open iff $q^{-1}(U)$ is open in $X$. Quotient maps are used to construct spaces by gluing: if
$\sim$ is an equivalence relation on $X$, then $X/{\sim}$ with the quotient topology is the space of
equivalence classes with the finest topology making the projection continuous.

**Example 4.9.** The unit interval $[0, 1]$ with endpoints identified yields the circle $S^1$:
$[0, 1] / \{0 \sim 1\} \cong S^1$. The unit square with opposite edges identified yields the torus.

### 4.6 Worked Example: Proving Two Spaces are Not Homeomorphic

**Problem.** Show that $(0, 1)$ and $[0, 1]$ are not homeomorphic.

<details>
<summary>Solution</summary>

Suppose $f : [0, 1] \to (0, 1)$ is a homeomorphism. Then removing the point $0$ from $[0, 1]$ leaves
$[0, 1] \setminus \{0\} = (0, 1]$, which is connected. Removing $f(0)$ from $(0, 1)$ leaves
$(0, 1) \setminus \{f(0)\} = (0, f(0)) \cup (f(0), 1)$, which is disconnected. Since connectedness is
preserved by homeomorphisms, this is a contradiction.

$\blacksquare$

</details>

### 4.7 Worked Example: Continuity of a Piecewise Function

**Problem.** Determine whether $f : \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x\sin(1/x)$ for
$x \neq 0$ and $f(0) = 0$ is continuous at $x = 0$.

<details>
<summary>Solution</summary>

For $x \neq 0$, $|f(x)| = |x\sin(1/x)| \leq |x|$. Given $\varepsilon > 0$, choose $\delta = \varepsilon$.
If $|x - 0| < \delta$, then $|f(x) - f(0)| = |x\sin(1/x)| \leq |x| < \varepsilon$. Therefore $f$ is
continuous at $0$ (and everywhere on $\mathbb{R}$). Note that unlike $\sin(1/x)$, the factor $x$
forces the oscillation amplitude to decay to zero.

$\blacksquare$

</details>

