---
date: 2026-10-07T00:00:00.000Z
title: "Spectral Theory of Self-Adjoint Operators"
description: "Spectral theory of self-adjoint operators: the spectral theorem for bounded and unbounded operators, spectral measures, the functional calculus, compact and singular spectrum, and why self-adjointness is not symmetry. Advanced tier, building on Banach and Hilbert space theory."
tags:
  - Mathematics
  - University
  - Functional Analysis
  - Spectral Theory
categories:
  - Mathematics
---

## Spectral Theory of Self-Adjoint Operators

**Tier: A (Advanced).** Assumes the Banach and Hilbert space material, the
Lebesgue integral, and comfort with the Riesz representation theorem. The
payoff is the infinite-dimensional generalisation of diagonalisation, and it is
the foundation of quantum mechanics, PDE theory and harmonic analysis.

### Recall prompts

Attempt these from memory before reading.

- State the spectral theorem for a self-adjoint matrix. What does the spectrum
  consist of?
- Give a bounded operator on a Hilbert space that has no eigenvalues at all.
- Why is a symmetric operator on a Hilbert space not necessarily self-adjoint?
- What is the difference between the spectrum of an operator and its point
  spectrum?

## Motivation: diagonalisation is not enough

For a self-adjoint matrix $A$ on $\mathbb{C}^n$, the spectral theorem says
$\mathbb{C}^n = \bigoplus_i E_{\lambda_i}$, $A$ acts as multiplication by
$\lambda_i$ on $E_{\lambda_i}$, and

$$
A = \sum_i \lambda_i P_i
$$

where $P_i$ is the orthogonal projection onto $E_{\lambda_i}$.

Two things break on an infinite-dimensional Hilbert space $H$.

**Eigenvalues may not exist.** The multiplication operator $(Mf)(x) = xf(x)$ on
$L^2[0,1]$ has no eigenvalues at all: $Mf = \lambda f$ forces
$(x-\lambda)f(x) = 0$ almost everywhere, so $f = 0$. Yet $M$ is the model
self-adjoint operator, and its spectral theory is perfectly good. Whatever
replaces eigenvalues cannot be a countable set of eigenvectors.

**The sum must become an integral.** Even when eigenvalues exist they may
accumulate, and the projections $P_i$ may be of infinite rank. The finite sum is
replaced by integration against a projection-valued measure.

The insight that survives is this:

> **A self-adjoint operator is multiplication by a function.** The only question
> is which function, on which measure space.

Everything below is bookkeeping for that statement.

## Symmetry is not self-adjointness

**Definition (F, U).** An operator $T$ on $H$ with dense domain $D(T)$ is
**symmetric** if

$$
\langle Tx, y \rangle = \langle x, Ty \rangle \quad \text{for all } x, y \in D(T).
$$

It is **self-adjoint** if $T^* = T$, meaning $D(T^*) = D(T)$ *and* the operators
agree there.

The distinction is invisible on $\mathbb{C}^n$, where $D(T) = H$ always, and it
is the single most important technical point in the subject.

**Worked example (U).** Let $H = L^2[0,1]$ and let $T = i\,\frac{d}{dx}$ on the
domain $D(T) = C^1[0,1]$, the continuously differentiable functions.

Integration by parts gives, for $f, g \in C^1$ with $f,g$ vanishing near the
endpoints,

$$
\langle Tf, g\rangle = \int_0^1 i f'(x)\overline{g(x)}\,dx
= \int_0^1 f(x)\overline{i g'(x)}\,dx = \langle f, Tg\rangle,
$$

so $T$ is symmetric. It is **not** self-adjoint: one can compute $D(T^*)$ and
find it strictly larger than $C^1[0,1]$, because the boundary terms that
integration by parts produces can be killed by imposing conditions on $g$ that
$g \in C^1$ does not impose.

The consequences are drastic. A symmetric operator need not have real spectrum,
need not admit a spectral decomposition, and need not generate a unitary group.
Adding a boundary condition makes $T$ self-adjoint, and then all of those return.

> **Exercise.** Show that $i\,d/dx$ on $D(T) = \{f \in H^1[0,1] : f(0) = f(1)\}$
> (periodic boundary conditions) has eigenfunctions $e^{2\pi i n x}$, $n \in
> \mathbb{Z}$, with eigenvalues $2\pi n$. Conclude the spectrum is
> $2\pi\mathbb{Z}$.

**Why the hypothesis is load-bearing.** Self-adjointness buys reality of the
spectrum, the spectral theorem, and the functional calculus. Symmetry buys none
of these. The gap between them is measured by the *deficiency indices* $(n_+,
n_-) = \dim\ker(T^* \mp i)$: symmetric $T$ is self-adjoint exactly when both are
zero.

## The spectrum, and why it is not just eigenvalues

**Definition (U).** For $T$ closed and densely defined, $\lambda \in \sigma(T)$
if $T - \lambda$ is not bijective onto $H$ with bounded inverse. The spectrum
partitions into:

- **Point spectrum** $\sigma_p$: $T - \lambda$ not injective (eigenvalues).
- **Continuous spectrum** $\sigma_c$: $T - \lambda$ injective, range dense but
  not all of $H$.
- **Residual spectrum** $\sigma_r$: injective, range not dense.

For self-adjoint $T$ there is no residual spectrum, and $\sigma(T) \subseteq
\mathbb{R}$.

**Worked example (U).** For $M$ on $L^2[0,1]$: $M - \lambda$ fails to be
invertible as soon as $\lambda \in [0,1]$, since $(x - \lambda)$ vanishes on a
set of positive measure and $1/(x-\lambda) \notin L^2$. So $\sigma(M) = [0,1]$,
and none of it is point spectrum. The whole spectrum is continuous.

Contrast: $M$ on $\ell^2(\mathbb{N})$, $(a_n) \mapsto (na_n)$, has
$\sigma_p = \mathbb{N}$; pure point spectrum. The *same formula* gives an
operator with completely different spectral type, and the difference is which
measure space it lives on. This is the sense in which the spectral theorem is a
theorem about measure spaces.

## The spectral theorem

**Theorem (A, spectral theorem; bounded case).** Let $T$ be a bounded
self-adjoint operator on $H$. Then there is a unique projection-valued measure
$E$ on the Borel sets of $\sigma(T)$ such that

$$
T = \int_{\sigma(T)} \lambda \, dE(\lambda),
$$

meaning $\langle Tx, y\rangle = \int \lambda \, d\langle E(\lambda)x, y\rangle$
for all $x, y$.

The point of a projection-valued measure is that $E(\Delta)$ is an orthogonal
projection for each Borel $\Delta$, with $E(\emptyset) = 0$,
$E(\sigma(T)) = I$, and $E(\Delta_1 \cap \Delta_2) = E(\Delta_1)E(\Delta_2)$.

**The idea, as opposed to the proof.** For a matrix, $E(\{\lambda_i\}) = P_i$ is
the projection onto the eigenspace, and the integral is the finite sum. For
$M$ on $L^2[0,1]$, $E(\Delta)$ is multiplication by $\mathbf{1}_\Delta$, and

$$
M = \int_0^1 \lambda \, dE(\lambda)
$$

is literally $\int_0^1 \lambda \, d(\text{multiplication by } \mathbf{1}_{[0,\lambda]})$.
The spectral theorem says these two pictures are the only pictures: every
self-adjoint operator is of the second kind, for some measure space.

**The functional calculus (A).** For any bounded Borel $\varphi$ on
$\sigma(T)$,

$$
\varphi(T) := \int_{\sigma(T)} \varphi(\lambda)\, dE(\lambda)
$$

is a bounded self-adjoint operator, and $\varphi \mapsto \varphi(T)$ is a
$*$-homomorphism: it sends products to products, adjoints to adjoints, and
uniform limits to uniform limits. Taking $\varphi$ to be a characteristic
function recovers projections; taking it to be $1/(t - z)$ recovers the
resolvent.

This is what makes spectral theory useful. Spectral questions become measure
questions, and measure theory is much better developed.

**Worked example (A).** Let $T = M$ on $L^2[0,1]$ and $\varphi(t) = t^2$. Then
$\varphi(T) = M^2$, i.e. $(f \mapsto x^2 f(x))$; no surprise. But take
$\varphi = \mathbf{1}_{[0,1/2]}$. Then

$$
\varphi(T)f = \mathbf{1}_{[0,1/2]} \cdot f
$$

is the projection onto $L^2[0,\tfrac12]$, and it is a spectral projection even
though $M$ has no eigenvalues. The spectral projections *replace* eigenspaces.

> **Exercise.** Show $\|T\| = \sup\{|\lambda| : \lambda \in \sigma(T)\}$ for
> self-adjoint $T$. Show also that $\sigma(T)$ is non-empty, using the fact
> that $T$ has a bounded resolvent only off a closed set.

## Unbounded operators, and why physics needs them

The position operator $M$ on $L^2(\mathbb{R})$ is unbounded: taking $f$ supported
near a large $x$ makes $\|Mf\|/\|f\|$ arbitrarily large. Unbounded operators
cannot be defined on all of $H$, so the domain becomes part of the data.

**Theorem (A, spectral theorem; unbounded case).** Let $T$ be self-adjoint
(possibly unbounded). There is a unique projection-valued measure $E$ on
$\mathbb{R}$ such that

$$
T = \int_{\mathbb{R}} \lambda\, dE(\lambda), \qquad
D(T) = \left\{x \in H : \int \lambda^2\, d\mu_x(\lambda) < \infty\right\},
$$

where $\mu_x(\Delta) = \langle E(\Delta)x, x\rangle$.

The domain is exactly the set where the integral converges. That is why the
domain is not an annoyance but part of the theorem.

**Where this becomes research.** In quantum mechanics a self-adjoint operator is
an observable, and its spectrum is the set of possible measurement outcomes. The
spectral measure $E$ is the projection-valued measure that gives the Born rule.
Two questions drive a great deal of current work:

- **What is the spectral type?** Decompose $\sigma(T)$ into pure point, singular
  continuous and absolutely continuous parts. In the Schrödinger operator
  $-\Delta + V$, the question of which parts occur for a given potential $V$ was
  open in important cases into the 1990s and remains delicate: the Anderson
  model exhibits *pure point* spectrum for large disorder and *absolutely
  continuous* spectrum for small disorder, and the transitions between them are
  a live research area.
- **Is the spectrum stable?** Weyl's theorem says compact perturbations do not
  change the essential spectrum. Singular perturbations do, and *spectral
  pollution*; spurious eigenvalues appearing under numerical approximation; is
  a genuine obstacle in computation.

## Proofs

The page so far has given the picture. This section gives the arguments. They are
kept separate because the intuition and the proof do different jobs: the picture
tells you what the theorem is *for*, and the proof tells you what it does *not*
claim.

**Theorem 1.** If $T$ is self-adjoint then $\sigma(T) \subseteq \mathbb{R}$.

*Proof.* Let $z = u + iv$ with $v \neq 0$. For $x \in D(T)$,

$$
\|(T - z)x\|^2 = \|(T - u)x\|^2 + v^2\|x\|^2 \geq v^2 \|x\|^2,
$$

which follows by expanding $\|(T-u)x - ivx\|^2$ and using
$\langle (T-u)x, x\rangle \in \mathbb{R}$ -- which is exactly where
self-adjointness enters, since $\langle Tx, x \rangle$ is real for self-adjoint
$T$. So $T - z$ is bounded below by $|v| > 0$, hence injective with closed range.

The range is dense: $\ker(T - z)^* = \ker(T - \bar z) = \{0\}$ by the same
estimate applied to $\bar z$, and $\operatorname{ran}(T-z)^\perp = \ker(T - \bar z)$.

It remains to show the range is *all* of $H$, and here the estimate does the real
work. For $y \in H$, define a functional on $\operatorname{ran}(T-z)$ by
$f(Tx) = \langle x, y \rangle$. It is well defined (injectivity) and bounded
($|f(Tx)| \leq \|x\|\|y\| \leq \|y\|\,v^{-1}\|(T-z)x\|$). Extending by Hahn-Banach
[Theorem 4.3 in the functional analysis track] gives $\phi \in H^*$ with
$\phi((T-z)x) = \langle x, y\rangle$; by Riesz representation there is
$w \in H$ with $\langle (T-z)x, w \rangle = \langle x, y \rangle$ for all $x$,
i.e. $(T - \bar z)w = y$ and $w \in D(T)$. So $y$ is in the range. $\blacksquare$

Three things are worth noticing. The estimate gives injectivity and closedness at
once. Density comes from the adjoint, which is why self-adjointness rather than
mere symmetry is needed. And surjectivity is not automatic from the estimate --
it needs Hahn-Banach plus Riesz, which is where the proof would break for a
symmetric operator that is not self-adjoint.

**Theorem 2.** A self-adjoint $T$ has no residual spectrum.

*Proof.* Residual spectrum means $\operatorname{ran}(T - \lambda)$ is not dense.
Its orthogonal complement is $\ker(T - \lambda)^* = \ker(T - \bar\lambda)$, which
is $\{0\}$ by the estimate in Theorem 1 applied to $\bar\lambda$ with
$\operatorname{Im}\lambda \neq 0$; and for $\lambda \in \mathbb{R}$,
$\ker(T-\lambda) = \operatorname{ran}(T-\lambda)^\perp$ means the range is dense
exactly when $\lambda \notin \sigma_p$, and $\lambda \in \sigma_p$ puts it in the
point spectrum, not the residual. Either way residual is empty. $\blacksquare$

This is the statement that makes physics work: a self-adjoint operator's spectrum
consists of eigenvalues and continuous spectrum, and both are things one can
integrate against. A residual part would carry no such meaning.

**Theorem 3 (existence of the functional calculus, bounded case).** There is a
unique $*$-homomorphism $\Phi$ from bounded Borel functions on $\sigma(T)$ to
$\mathcal{B}(H)$ with $\Phi(1) = I$, $\Phi(\iota) = T$, and
$\|\Phi(f)\| \leq \|f\|_\infty$.

*Proof, construction.* Let $C(\sigma(T))$ be the continuous functions. On the
algebra generated by $\iota$ and rational functions of the form
$p(\lambda)/(q(\lambda))$ with $q$ non-vanishing on $\sigma(T)$, define $\Phi$ by
$\Phi(p(T)q(T)^{-1}) = p(T)q(T)^{-1}$ -- well defined because the resolvent
identity makes the representation of a rational function independent of how it is
written. By the Stone-Weierstrass theorem the polynomials in $\lambda$ are dense
in $C(\sigma(T))$, and $\Phi$ is isometric on them because self-adjointness gives
$\|p(T)\| = \sup_{\sigma(T)}|p|$ (a $C^*$-identity for self-adjoint $T$, itself a
consequence of $\|T^2\| = \|T\|^2$). So $\Phi$ extends to an isometry from
$C(\sigma(T))$ into $\mathcal{B}(H)$.

Now fix $x, y \in H$. The map $f \mapsto \langle \Phi(f)x, y\rangle$ is a bounded
linear functional on $C(\sigma(T))$ with norm at most $\|x\|\|y\|$. By the
Riesz-Markov theorem it is a complex regular Borel measure $\mu_{x,y}$ of total
mass at most $\|x\|\|y\|$, and

$$
\langle \Phi(f)x, y\rangle = \int f \, d\mu_{x,y}.
$$

The assignment $\Delta \mapsto \mu_{x,y}(\Delta)$ is countably additive in
$\Delta$, which is the point where measure theory enters and where the matrix
picture has nothing to say. Define $E(\Delta)$ by
$\langle E(\Delta)x, y \rangle = \mu_{x,y}(\Delta)$; $\mu_{x,y}$ depends
sesquilinearly on $(x,y)$, so $E(\Delta)$ is a bounded operator, and
$E(\Delta)^2 = E(\Delta)$ because $\mathbf{1}_\Delta^2 = \mathbf{1}_\Delta$ and
$\Phi$ is multiplicative on continuous $f$, passing to indicators by dominated
convergence. So $E(\Delta)$ is a projection. Uniqueness of the measure from
Riesz-Markov gives uniqueness of $E$. $\blacksquare$

*Proof, uniqueness.* Suppose $E$ and $F$ both satisfy
$T = \int \lambda\,dE(\lambda) = \int \lambda\,dF(\lambda)$. Polynomials in
$\lambda$ then integrate to the same operator, so $\Phi$ agrees on polynomials,
hence on all of $C(\sigma(T))$ by density. Taking indicators of intervals and
using regularity to approximate them from above and below by continuous
functions gives $E(\Delta) = F(\Delta)$ on every Borel $\Delta$. $\blacksquare$

**Where the unbounded case genuinely differs.** For an unbounded self-adjoint
$T$, the integral defining $\varphi(T)$ has domain

$$
D(\varphi(T)) = \left\{x : \int |\varphi(\lambda)|^2 \, d\langle E(\lambda)x, x\rangle < \infty\right\},
$$

and $D(T) = D(\iota)$ is a *proper* subspace whenever $T$ is unbounded. Every
algebraic identity now comes with a domain caveat: $ST = TS$ means
$\overline{D(ST)} = \overline{D(TS)}$ and agreement there, not equality on the
nose. Most wrong statements about unbounded operators are wrong because a domain
was silently assumed, which is the same failure mode as the deficiency-index
counterexample above.

## Counterexamples

**Symmetric but not self-adjoint.** $i\,d/dx$ on $C^1[0,1]$, above. Deficiency
indices $(1,1)$: self-adjoint extensions exist, but they are a one-parameter
family indexed by a phase, and each gives different physics.

**Symmetric with no self-adjoint extension.** $i\,d/dx$ on $C_c^\infty(0,\infty)$
has deficiency indices $(0,1)$: the equation $T^*\psi = \pm i\psi$ is solved on
the half-line by one exponential on one side and none on the other, because
square-integrability at $+\infty$ excludes one and permits the other. Unequal
indices mean the dimensions cannot match, so no self-adjoint extension exists.
The physics consequence is severe: a symmetric Hamiltonian that is not
self-adjoint generates a non-unitary time evolution, so probability leaks.

By contrast $-d^2/dx^2$ on $C_c^\infty(0,1)$ has indices $(2,2)$ and *does* admit
self-adjoint extensions -- a one-parameter family indexed by a phase, the
boundary conditions at the two endpoints. Computing the indices from the domain,
rather than assuming them, is the standard error in the subject; always compute
$D(T^*)$ from scratch.

**A spectral projection that is not a Riesz projection.** For
$\sigma(T) = \{0\} \cup [1,2]$, the Riesz projection for the spectral set
$\{0\}$ agrees with $E(\{0\})$. But for a spectral set $\Delta$ meeting the
spectrum in a Cantor set, $E(\Delta)$ has no Riesz-projection analogue, and the
holomorphic functional calculus cannot see it. The Borel functional calculus is
strictly larger, and that is the point.

## Recall prompts: answers to attempt after reading

- State the spectral theorem for a bounded self-adjoint operator. What replaces
  the eigenspace decomposition?
- Give an operator with purely continuous spectrum.
- State the difference between symmetric and self-adjoint, and give an example
  where it matters.
- What are deficiency indices, and what do they tell you?
- What does the functional calculus let you do that the polynomial calculus
  does not?

## Interleaving problems

Mix these with material from the earlier modules; the selection of method is
the part blocked practice never trains.

1. (Measure theory.) Let $\mu_x(\Delta) = \langle E(\Delta)x, x\rangle$ for the
   operator $M$ on $L^2[0,1]$. Show $\mu_x \ll m$ for every $x$, find its
   density, and deduce $\sigma(M) = \operatorname{supp}(m)$.
2. (Real analysis.) Show the position operator on $L^2(\mathbb{R})$ is not
   bounded, by computing $\|M f_n\| / \|f_n\|$ for $f_n = \mathbf{1}_{[n, n+1]}$.
3. (Functional analysis.) Show a compact self-adjoint operator has an
   orthonormal basis of eigenvectors for the closure of its range, and that its
   spectrum is countable with $0$ as the only possible accumulation point.
4. (Topology.) Show $\sigma(T)$ is compact and non-empty for bounded $T$.
5. (Advanced.) Prove that for self-adjoint $T$, $\|T\| = \sup_{\lambda
   \in \sigma(T)} |\lambda|$, using the $C^*$-identity in the functional
   calculus.

## See Also

- [Normed Spaces and Banach Spaces](/11-functional-analysis/1_normed-spaces-and-banach-spaces/) : the background for bounded operators
- [Bounded Linear Operators](/11-functional-analysis/3_bounded-linear-operators/) : resolvents and the Neumann series
- [The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/) : Riesz representation, used implicitly throughout
- [Lebesgue Measurable Sets](/10-measure-theory/4_lebesgue-measurable-sets-and-non-measurable-sets/) : the measure-theoretic background
- [How to Use These Notes](/how-to-use/); the method, and why recall prompts
  come first
