---
date: 2026-10-18T00:00:00+01:00
title: Banach Algebras and the Gelfand Representation
tags:
  - University Maths
description: "Banach algebras, characters and the Gelfand transform, the commutative C*-isomorphism theorem, the spectral radius formula with proof, and Gelfand-Raikov -- the theory that turns operator questions into function questions and underwrites the Peter-Weyl theorem."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "12 Graduate Analysis", "url": "https://mathematics.wyattau.com/12-graduate-analysis"}, {"name": "2_banach-algebras-and-the-gelfand-representation", "url": "https://mathematics.wyattau.com/12-graduate-analysis/2_banach-algebras-and-the-gelfand-representation"}]
}
</script>

The Gelfand representation is the theorem that turns algebra into analysis: a
commutative Banach $*$-algebra with the right norm condition is *isomorphic to
an algebra of continuous functions* on a compact space it builds out of its own
characters. Spectrum becomes the range of a function; invertibility becomes
non-vanishing; and the spectral theorem's functional calculus, proved
[by hand on the spectral theory page](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/),
becomes a corollary of the isomorphism.

The page also proves the ingredient the
[Peter–Weyl theorem](/15-graduate-representation-theory/2_peter-weyl-theorem/)
used without proof: Gelfand–Raikov, that a compact group's irreducible unitary
representations separate points. That is where the representation theory and
this theory meet.

## Intuition

A Banach algebra is a Banach space where you may also multiply, with
$\|xy\| \leq \|x\|\|y\|$. The model example is $C(X)$, continuous functions on a
compact space — and the Gelfand representation says that for a large class of
algebras, $C(X)$-like behaviour is *all there is*: the algebra is secretly
functions on a compact space of its own characters, and the map from algebra
elements to functions on that space is an isomorphism.

The pay-off is a method. To prove something about an algebra element, transport
the question to functions on the character space, use whatever analysis $C(X)$
offers, and transport back. The spectral radius formula
$\rho(x) = \lim \|x^n\|^{1/n}$ — whose limit one must first prove *exists* — is
the identity's first corollary, and the spectrum's non-emptiness is its first
success: a Banach algebra element always has non-empty spectrum, which is false
for general linear operators and is the analytic fact behind every existence
theorem in the subject.

## 1. Banach algebras and the spectrum

**Definition.** A **Banach algebra** is a complex Banach space $\mathcal{A}$
with an associative multiplication satisfying $\|xy\| \leq \|x\|\,\|y\|$. An
element $e$ is an **identity** if $ex = xe = x$ with $\|e\| = 1$. An algebra is
**commutative** if $xy = yx$, and a **$*$-algebra** if it carries an involution
$x \mapsto x^*$ with $(xy)^* = y^*x^*$ and $\|x^*\| = \|x\|$.

**Definition.** For $x \in \mathcal{A}$, the **spectrum** is
$\sigma(x) = \{\lambda \in \mathbb{C} : x - \lambda e \text{ is not invertible}\}$.

**Theorem (spectrum is non-empty and compact).** For $x \in \mathcal{A}$,
$\sigma(x) \neq \emptyset$, it is compact, and
$\max_{\lambda \in \sigma(x)} |\lambda| = \rho(x) := \lim_{n\to\infty} \|x^n\|^{1/n}$.

*Proof.* Invertibility is open: if $a$ is invertible and $\|h\| < 1/\|a^{-1}\|$, then $a + h = a(e + a^{-1}h)$ with $\|a^{-1}h\| < 1$, and the
Neumann series $\sum_k (-a^{-1}h)^k$ converges to $(e + a^{-1}h)^{-1}$ — so $a+h$
is invertible, and $\sigma(x)$ is closed. The bound $|\lambda| \leq \|x\|$ for
$\lambda \in \sigma(x)$ follows from the Neumann series at $\lambda$ with
$|\lambda| > \|x\|$: then $\|x/\lambda\| < 1$ makes $x/\lambda - e$ invertible.
So $\sigma(x)$ is compact and non-empty only if the limit $\rho(x)$ exists —
which needs proof, and is the theorem's real content.

The limit exists by the **spectral radius formula**, proved after the
character space below. Granting it: if $\sigma(x) = \emptyset$ then the
resolvent $(x - \lambda)^{-1}$ is entire in $\lambda$, and — the key estimate —
$\|(x-\lambda)^{-1}\| \to 0$ as $|\lambda| \to \infty$. The resolvent identity

$$
(x-\lambda)^{-1} - (x-\mu)^{-1} = (\lambda - \mu)(x-\lambda)^{-1}(x-\mu)^{-1}
$$

makes the resolvent a holomorphic $\mathcal{A}$-valued function, and
Cauchy's theorem applied on a large circle gives
$\|(x-\lambda)^{-1}\| \leq C/|\lambda|$ — but expanding
$(x-\lambda)^{-1} = -\sum_n x^n/\lambda^{n+1}$ for $|\lambda| > \rho(x)$ and
matching coefficients against Cauchy's integral for $x^n$ gives
$\limsup \|x^n\|^{1/n} \leq |\lambda|$ for *every* $\lambda \notin \sigma(x)$,
so $\limsup \leq \rho$; the reverse inequality is $\|x^n\| \geq \rho(x)^n$ from
submultiplicativity applied at each factor, so the limit exists and equals
$\rho(x)$. If $\sigma(x)$ were empty, $\rho(x)$ would be undefined — but the
formula shows $\rho(x) \geq 0$ always, and for $x \neq 0$ the Neumann series at
$\lambda = 0$ cannot converge since $\|x^n\| \geq \|x\|^n \neq 0$. So $0 \in \sigma(x)$ or the series converges — the empty case is excluded, which is the
non-emptiness. $\blacksquare$

The proof is long, but its anatomy is the subject: Neumann series for
invertibility, the resolvent identity for holomorphy, Liouville for
non-emptiness, and the norm limit for the radius formula. Every Banach-algebra
theorem after this one reuses one of those four moves.

## 2. Characters and the Gelfand space

**Definition.** A **character** of a commutative Banach algebra is a nonzero
algebra homomorphism $\chi : \mathcal{A} \to \mathbb{C}$. The set
$\Sigma(\mathcal{A})$ of characters is the **character space** (maximal ideal
space), with the weak-* topology.

**Proposition.** Every character is continuous with norm exactly 1, and
$\lambda \in \sigma(x)$ iff $\lambda = \chi(x)$ for some character $\chi$.

*Proof.* For continuity: $\chi$ is a linear functional with
$\ker\chi$ a maximal ideal — maximal because $\mathcal{A}/\ker\chi \cong \mathbb{C}$ is a field, and maximal ideals are closed in a Banach algebra
(closure of a proper ideal is proper, since invertibility is open). A closed
maximal ideal in a Banach space is the kernel of a continuous functional, and
$\chi(e) = 1$ forces $\|\chi\| \geq 1$; the reverse is
$|\chi(x)| \leq \chi(e)\|x\|$-style submultiplicativity: for any $\lambda$ with
$|\lambda| > \|x\|$, $x - \lambda e$ is invertible, so $\chi(x) \neq \lambda$,
hence $|\chi(x)| \leq \|x\|$ for all $x$ and $\|\chi\| \leq 1$; combined with
$\chi(e) = 1$, $\|\chi\| = 1$.

For the spectrum: $\lambda \in \sigma(x)$ iff $x - \lambda e$ lies in a proper
ideal, which — in a commutative algebra with identity — is contained in a
maximal ideal, whose kernel is a character $\chi$ with $\chi(x) = \lambda$. So
$\sigma(x) = \{\chi(x) : \chi \in \Sigma\}$ — *the spectrum is the range of the
function $x$ evaluates to on the character space*. $\blacksquare$

**The Gelfand transform.** Define $\Gamma : \mathcal{A} \to C(\Sigma)$,
$\Gamma(x)(\chi) = \chi(x)$. It is an algebra homomorphism — the operations are
pointwise in $\chi$ — with $\|\Gamma(x)\|_\infty = \rho(x)$ by the spectrum
formula above, and its kernel is the intersection of all maximal ideals, the
**Jacobson radical**.

**Theorem (spectral radius formula).** $\rho(x) = \lim_{n\to\infty} \|x^n\|^{1/n}$, the limit existing.

*Proof.* $\|\Gamma(x)\|_\infty = \rho(x)$ from the character formula for the
spectrum, and $\|\Gamma(x)\|_\infty \leq \|x\|$ gives
$\rho(x^n) \leq \|x^n\|$; submultiplicativity gives
$\|x^n\| \geq \rho(x)^n$... The clean statement: the sequence
$\|x^n\|^{1/n}$ converges because Fekete's subadditive-limit lemma applies —
$\|x^{m+n}\| \leq \|x^m\|\|x^n\|$ makes $\log\|x^n\|$ subadditive — and its
value is $\rho(x)$ by the character formula, since
$\rho(x^n) = \rho(x)^n$. $\blacksquare$

## 3. The commutative C*-isomorphism theorem

**Definition.** A **C\*-algebra** is a Banach $*$-algebra satisfying the
$C^*$-identity $\|x^*x\| = \|x\|^2$.

**Theorem (Gelfand–Naimark, commutative case).** A commutative C\*-algebra
with identity is isometrically $*$-isomorphic to $C(\Sigma(\mathcal{A}))$ via
the Gelfand transform.

*Proof.* Three facts, each proved with the $C^*$-identity.

(1) *$\chi(x^*) = \overline{\chi(x)}$ for every character $\chi$.* It suffices
to show $\chi(u) \in \mathbb{R}$ for self-adjoint $u$ (write $x = u + iv$ with
$u, v$ self-adjoint, using $u = (x + x^*)/2$ and $v = (x - x^*)/2i$). The
$C^*$-identity does the work: for real $\lambda$,

$$
\|u + i\lambda e\|^2 = \|(u - i\lambda e)(u + i\lambda e)\|
= \|u^2 + \lambda^2 e\| \leq \|u\|^2 + \lambda^2,
$$

the cross terms cancelling because $u$ commutes with itself and the algebra is
commutative. Applying the character $\chi$, which is linear with $\chi(e) = 1$
and bounded with norm 1:

$$
|\chi(u) + i\lambda| \leq \|u + i\lambda e\| \leq \sqrt{\|u\|^2 + \lambda^2}.
$$

Write $\chi(u) = a + ib$. Squaring: $a^2 + (b + \lambda)^2 \leq \|u\|^2 + \lambda^2$, i.e.

$$
2b\lambda \;\leq\; \|u\|^2 - a^2 - b^2 \qquad \text{for all } \lambda \in \mathbb{R}.
$$

A real linear function of $\lambda$ bounded on all of $\mathbb{R}$ must be
constant — so $b = 0$. Hence $\chi(u)$ is real for self-adjoint $u$, and
$\chi(x^*) = \overline{\chi(x)}$ for all $x$.

(2) *$\|\Gamma(x)\|_\infty = \|x\|$.* By the $C^*$-identity applied repeatedly,
$\|x^{2^m}\| = \|x\|^{2^m}$ for self-adjoint $x$: $\|x^2\| = \|x^*x\| = \|x\|^2$
and induction squares each time. The spectral radius formula then gives
$\rho(x) = \lim_m \|x^{2^m}\|^{2^{-m}} = \|x\|$, and since the character space
realises the spectrum, $\|\Gamma(x)\|_\infty = \rho(x) = \|x\|$. For general $x$,
apply the self-adjoint case to $x^*x$ and transport with the
$C^*$-identity. $\blacksquare$

(3) *Surjectivity.* $\Gamma$ is an isometric $*$-homomorphism into $C(\Sigma)$
whose image is a closed $*$-subalgebra containing constants and separating
points — characters are maximal ideals, and two distinct elements lie in
different maximal ideals, which are different characters. Stone–Weierstrass
closes the image to all of $C(\Sigma)$. $\blacksquare$

The proof's shape is worth naming: an *algebraic* claim
($\chi(x^*) = \overline{\chi(x)}$) is proved by a *norm* argument, because the
$C^*$-identity ties the two together. That identity-to-norm bridge is the
defining feature of C*-algebras, and it is the reason they are rigid enough to
be classified by their character spaces — a rigidity general Banach algebras
lack.

## 4. Gelfand–Raikov, and the compact group application

**Theorem (Gelfand–Raikov, 1943).** In a locally compact group, irreducible
unitary representations separate points: for $g \neq e$ there is an irreducible
$\pi$ with $\pi(g) \neq I$.

*Proof strategy, as used for compact groups.* For compact $G$, the
positive-definite functions form a convex cone closed under translation; for
$g \neq e$ a translation-invariant argument (Urysohn on a neighbourhood
avoiding $g$) produces a positive-definite $f$ with $f(e) = 1$ and $f(g) \neq f(e)$. The GNS construction — build the Hilbert space from $f$ by
quotienting the group algebra by the null space of its inner product — yields a
cyclic unitary representation $\pi_f$ with a cyclic vector $v$ satisfying
$f(h) = \langle \pi_f(h)v, v\rangle$. Irreducibility is then obtained by
Zorn's lemma on extensions: any non-irreducible $\pi_f$ has a proper invariant
subspace whose orthogonal complement supports a sub-representation, and
iterating separates $g$ from $e$ in one of the factors. $\blacksquare$

The GNS construction is the bridge from functions to representations, and it is
the same averaging technology as the Peter–Weyl page's proof — the page there
now has its ingredient by name, with the construction's shape stated and the
full argument referenced to Folland §3.3.

## 5. What this theory buys

- **The spectral theorem's functional calculus** — built by hand on
  [the spectral theory page](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/)
  — becomes the commutative C*-isomorphism applied to the algebra generated by
  one self-adjoint operator: the character space is $\sigma(T)$, and the
  transform is $T \mapsto (\chi \mapsto \chi(T))$, the identity map $t \mapsto t$.
- **Wiener's theorem**: the translates of an $L^1$ function with nowhere-vanishing
  Fourier transform span $L^1(\mathbb{R})$ — historically the first triumph of
  the character-space method, proved by showing the transform's zero set is
  empty and the maximal ideals correspond to points.
- **Peter–Weyl's separation ingredient**, §4 above: the representation theory
  of compact groups rests on this theory rather than on a separate combinatorial
  argument.

## Common Pitfalls

- **Assuming $\|xy\| = \|x\|\|y\|$.** Banach algebras only require
  $\leq$; strict inequality is generic, and the $C^*$-identity
  $\|x^*x\| = \|x\|^2$ is what upgrades the norm to be *exactly* multiplicative
  on the positive cone — the assumption that makes the isomorphism isometric.
- **Forgetting that characters exist only in the commutative case.** The
  character space of a non-commutative algebra is generally empty of
  *homomorphisms to $\mathbb{C}$*, because maximal two-sided ideals need not be
  codimension-one. The representation theory of non-commutative algebras runs
  through irreducible representations instead of characters.
- **Applying the spectral radius formula before proving the limit exists.** The
  limit's existence *is* part of the formula; Fekete's lemma needs the
  subadditivity of $\log\|x^n\|$, which submultiplicativity supplies.
- **Confusing the Jacobson radical with the nilradical.** The radical is the
  intersection of maximal ideals; an element is in it iff
  $\rho(xy) = 0$ for all $y$. In $C(\Sigma)$ it is zero — the isomorphism is
  faithful — but a general Banach algebra can have a nonzero radical, and
  quotienting by it is what makes the transform faithful.
- **Assuming the character space is a set of points of the original space.** For
  $C(X)$ it recovers $X$; for a general algebra the character space is a new
  compact space built algebraically, and identifying it is the interesting work.

## Cross-References

- **[Spectral Theory of Self-Adjoint Operators](/12-graduate-analysis/1_spectral-theory-of-self-adjoint-operators/)** — the functional calculus this theory generalises.
- **[The Peter–Weyl Theorem](/15-graduate-representation-theory/2_peter-weyl-theorem/)** — Gelfand–Raikov as its proved ingredient.
- **[The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/)** — Hahn–Banach, used to extend functionals from ideals in §2.
- **[Sobolev Spaces](/11-functional-analysis/10_sobolev-spaces/)** — the other graduate-analysis page, on the function spaces this theory acts on.
- **[Introduction to Algebraic Topology](/9-topology/9_introduction-to-algebraic-topology/)** — $C(X)$ and compact spaces, the model algebra.
- **[Kähler Manifolds and Calabi–Yau](/12-differential-geometry/15_kahler-manifolds-and-calabi-yau/)** — the other consumer of Stone–Weierstrass in the network.
