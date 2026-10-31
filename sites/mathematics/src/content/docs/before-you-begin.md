---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: From School to University Mathematics"
tags:
  - Mathematics
description: "The transition from school to university mathematics: logic, sets, functions, proof techniques, algebraic fluency, trigonometry, coordinate geometry and single-variable calculus -- every term defined before it is used, every rule proved, so any exam-board background reaches the same baseline before track 1."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com/before-you-begin"}]
}
</script>

School mathematics is calibrated to an exam. Different boards examine different
subsets, in different notation, at different depths — and every one of them
leaves the same gaps, because a timed paper cannot test whether you *understand*
what a limit is, only whether you can compute one. University mathematics is the
opposite: it assumes you know what the objects are, and examines whether you can
prove things about them.

This page closes the gap. It defines every term the first-year tracks use,
proves every rule it states, and tells you explicitly which parts of school
mathematics to keep, which to unlearn, and which to upgrade. **If you are
confident, skim it and take the self-test in the last section; if any answer
surprises you, read the section it came from.** Nothing here reappears as an
exam topic — it is the foundation the tracks stand on, and the tracks link back
here the first time they use a term.

The order is by dependency, not by difficulty. Section 1 is logic, because
every proof technique is a logical move with a name. Sections 2–3 are sets and
functions, because the whole of the university course is about maps between
structured sets. Section 4 is proof technique. Sections 5–8 are the school
topics rebuilt rigorously: algebra, trigonometry, geometry, and calculus.

## Intuition

School mathematics teaches *procedures*: differentiate this, solve that,
complete the square. University mathematics studies *objects*: functions,
spaces, maps between them, and the theorems they obey. The transition is the
shift from "what is the answer" to "why is this true", and the reason it trips
people up is not difficulty but vocabulary — university mathematics names the
moves school mathematics performs silently.

A limit is the first example. At school, $\lim_{x\to 0}\frac{\sin x}{x} = 1$ is
a fact to use. At university it is a *definition* —
$\forall\varepsilon > 0\ \exists\delta > 0 : 0 < |x| < \delta \Rightarrow \left|\frac{\sin x}{x} - 1\right| < \varepsilon$ — and once the definition is
available, "prove that the limit is 1" becomes a different kind of task, one
that needs the squeeze theorem and the geometry of the unit circle. This page
gives you both layers for every object below: the definition, and the school
result it recovers.

## 1. Logic: the grammar of proof

**Definition (statement).** A **statement** (or proposition) is a declarative
sentence that is either true or false. "7 is prime" is a statement; "is 7
prime?" and "$x + 1 = 5$" are not — the last is an *open* statement, true for
some $x$ and false for others.

**Connectives.** Given statements $P$ and $Q$:

<div class="table-wrap">

| symbol | name | true when |
| ------ | ---- | --------- |
| $\neg P$ | negation ("not") | $P$ is false |
| $P \wedge Q$ | conjunction ("and") | both true |
| $P \vee Q$ | disjunction ("or") | at least one true — *inclusive* or |
| $P \Rightarrow Q$ | implication ("if…then") | $P$ false, or $Q$ true |

</div>

<div class="table-wrap">

| $P$ | $Q$ | $P \Rightarrow Q$ |
| --- | --- | ----------------- |
| T   | T   | T                 |
| T   | F   | **F**             |
| F   | T   | T                 |
| F   | F   | T                 |

</div>

The two rows that surprise people are the last two: a false hypothesis makes an
implication *vacuously true*. "If $2 + 2 = 5$ then I am the Pope" is a true
statement. This is not a trick; it is what makes proofs by contradiction and
empty-set arguments work.

**Definition (converse, contrapositive).** For $P \Rightarrow Q$: the
**converse** is $Q \Rightarrow P$; the **contrapositive** is
$\neg Q \Rightarrow \neg P$.

**Proposition.** An implication and its contrapositive are logically equivalent.
An implication and its converse are not.

*Proof.* Build the truth table. $\neg Q \Rightarrow \neg P$ is false exactly
when $\neg Q$ is true and $\neg P$ false, i.e. $Q$ false and $P$ true — the
single row where $P \Rightarrow Q$ is false. For the converse,
$Q \Rightarrow P$ is false when $Q$ true, $P$ false — a different row, so the
converse has a different truth table from the original. $\blacksquare$

**Why this matters.** Mixing up a statement with its converse is the most common
logical error in mathematics. "If $x = 2$ then $x^2 = 4$" is true; its converse
"if $x^2 = 4$ then $x = 2$" is false ($x = -2$). Convergent sequences have
bounded terms; *bounded* terms do not give convergence.

**Quantifiers.** $\forall$ ("for all") and $\exists$ ("there exists").

$$
\forall\varepsilon > 0\ \exists\delta > 0 : P(\delta) \quad\text{means}\quad
\text{for each }\varepsilon,\text{ a }\delta\text{ may be chosen (possibly depending on it).}
$$

**Proposition (negation rules).** $\neg\forall x\,P(x) \equiv \exists x\,\neg P(x)$
and $\neg\exists x\,P(x) \equiv \forall x\,\neg P(x)$. Quantifiers negate in
order, and $\forall$ becomes $\exists$.

*Why this matters.* The negation of "the sequence converges" —
$\forall\varepsilon > 0\ \exists N\ \forall n \geq N : |a_n - L| < \varepsilon$ —
is "the sequence does not converge":
$\exists\varepsilon > 0\ \forall N\ \exists n \geq N : |a_n - L| \geq \varepsilon$.
Every "prove this does not converge" exercise is that string, applied.

## 2. Sets

**Definition.** A **set** is a collection of distinct objects, its **elements**.
$x \in A$ means $x$ is an element; $A \subseteq B$ means every element of $A$ is
an element of $B$.

**Definition.** For sets $A, B$ in a universe $U$:

$$
A \cup B = \{x : x \in A \text{ or } x \in B\}, \quad
A \cap B = \{x : x \in A \text{ and } x \in B\}, \quad
A^c = \{x \in U : x \notin A\},
$$

$$
A \times B = \{(a, b) : a \in A, b \in B\}, \quad
A \setminus B = \{x \in A : x \notin B\}.
$$

**Proposition (De Morgan).** $(A \cup B)^c = A^c \cap B^c$.

*Proof.* $x \in (A\cup B)^c$ iff $x \notin A \cup B$ iff $x \notin A$ and
$x \notin B$ iff $x \in A^c$ and $x \in B^c$. $\blacksquare$

**Definition (function).** See Section 3 — but note the notation for images and
preimages: $f(A) = \{f(a) : a \in A\}$ and $f^{-1}(B) = \{x : f(x) \in B\}$.
The preimage *always* exists for any $B$; the inverse function may not.

**Definition (cardinality, finite and countable).** Two sets are
**equipotent** if there is a bijection between them. A set is **countable** if
it is equipotent to a subset of $\mathbb{N}$; **countably infinite** if to
$\mathbb{N}$ itself; **uncountable** otherwise.

**Theorem (Cantor).** $\mathbb{Q}$ is countable; $\mathbb{R}$ is uncountable.

*Proof for $\mathbb{Q}$.* List fractions by increasing $p + q$ for $p/q$ in
lowest terms with $q > 0$; each positive rational appears exactly once, and the
list is infinite, so $\mathbb{Q}^+ \sim \mathbb{N}$; reflect to include
negatives and zero.

*Proof for $\mathbb{R}$ (Cantor's diagonal).* Suppose
$\mathbb{R} \sim \mathbb{N}$ via a list $r_1, r_2, \dots$ of reals in $(0,1)$,
each with decimal expansion $0.d_{n1}d_{n2}d_{n3}\dots$. Construct
$d = 0.e_1e_2e_3\dots$ with $e_n = 5$ if $d_{nn} \neq 5$ and $e_n = 6$ if
$d_{nn} = 5$. Then $d \in (0,1)$ and $d \neq r_n$ for every $n$ — it differs
from $r_n$ in the $n$-th decimal — contradicting the list's completeness.
(Avoiding dual expansions like $0.4999\ldots = 0.5$: the digit choice $5/6$
never produces a trailing $9$.) $\blacksquare$

The theorem to internalise: *infinity has sizes*. The rationals are dense but
countable; the reals are uncountable. Measure theory — the foundation of
probability — is built on exactly this distinction.

## 3. Functions

**Definition.** A **function** $f : A \to B$ is a rule assigning to each
$a \in A$ exactly one $f(a) \in B$. $A$ is the domain, $B$ the codomain, and
$f(A)$ the image.

**Definition.** $f$ is **injective** ($f(a_1) = f(a_2) \Rightarrow a_1 = a_2$),
**surjective** ($f(A) = B$), and **bijective** if both.

**Proposition.** $f : A \to B$ is bijective iff it has an inverse
$f^{-1} : B \to A$ with $f^{-1}(f(a)) = a$ and $f(f^{-1}(b)) = b$.

*Proof.* If $f$ is bijective, define $f^{-1}(b) = a$ where $a$ is the unique
element with $f(a) = b$ — unique by injectivity, existing by surjectivity. The
two compositions are identities by construction. Conversely, if $f^{-1}$
exists, injectivity and surjectivity follow from the two composition
identities. $\blacksquare$

**Definition (composition).** $(g \circ f)(x) = g(f(x))$, defined where
$f(x) \in$ domain of $g$. Composition is associative —
$(h \circ g) \circ f = h \circ (g \circ f)$ — and *not* commutative.

**Proposition.** $(g \circ f)$ injective $\Rightarrow$ $f$ injective.

*Proof.* $f(a_1) = f(a_2) \Rightarrow g(f(a_1)) = g(f(a_2)) \Rightarrow (g\circ f)(a_1) = (g \circ f)(a_2) \Rightarrow a_1 = a_2$ by injectivity of
$g \circ f$. Note $g$ itself need not be injective. $\blacksquare$

Functions are the objects of university mathematics: every structure — a group,
a metric space, a measure — comes with the class of functions that preserve it.
The vocabulary here (injective, surjective, bijective, inverse, composition) is
the vocabulary of every definition that follows.

## 4. Proof techniques

**Direct proof.** Assume $P$; derive $Q$ by a chain of implications.

**Proof by contrapositive.** To prove $P \Rightarrow Q$, prove
$\neg Q \Rightarrow \neg P$. Used when the contrapositive gives more to work
with: proving "$n^2$ even $\Rightarrow n$ even" is easiest as
"$n$ odd $\Rightarrow n^2$ odd", since "odd" has a usable form ($n = 2k+1$).

**Proof by contradiction.** Assume $P$ and $\neg Q$; derive any falsehood.
The irrationality of $\sqrt{2}$ is the classic:

*Proof.* Suppose $\sqrt{2} = p/q$ in lowest terms. Then $p^2 = 2q^2$, so $p^2$
is even, so $p$ is even — write $p = 2k$. Then $4k^2 = 2q^2$, so $q^2 = 2k^2$,
so $q$ is even too. Both even contradicts lowest terms. $\blacksquare$

Note the lemma it used — "$p^2$ even $\Rightarrow p$ even" — which itself
needs the contrapositive form above. Proofs are layered.

**Proof by cases.** Partition and prove each part: "even $n$" and "odd $n$".

**Proof by induction.** To prove $S(n)$ for all $n \geq n_0$: prove $S(n_0)$
(base) and $S(n) \Rightarrow S(n+1)$ (inductive step).

*Proof that it works (well-ordering principle).* Suppose some $S(n)$ fails; let
$n^*$ be the least such — it exists because $\mathbb{N}$ is well-ordered. Then
$n^* > n_0$, so $S(n^* - 1)$ holds, so $S(n^*)$ holds by the inductive step —
contradiction. $\blacksquare$

*Worked example.* Prove $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$.

*Base.* $n = 1$: $1 = \frac{1 \cdot 2}{2}$. *Step.* Assume
$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$. Then

$$
\sum_{k=1}^{n+1} k = \frac{n(n+1)}{2} + (n+1) = \frac{(n+1)(n+2)}{2},
$$

which is the formula at $n+1$. $\blacksquare$

**Proof by counterexample.** To disprove $\forall x\,P(x)$, exhibit one $x$ with
$\neg P(x)$. This is the *only* way to disprove a universal statement, and one
counterexample ends the matter — which is why finding them is so valuable.

## 5. Algebra: the school toolkit, upgraded

These are used silently in every proof. Fluency matters: a proof can fail on
algebra.

**Expansion and factorisation.**

$$
(a+b)^2 = a^2 + 2ab + b^2, \qquad
(a-b)(a+b) = a^2 - b^2, \qquad
a^3 \pm b^3 = (a \pm b)(a^2 \mp ab + b^2).
$$

**The quadratic formula and completing the square.**

$$
ax^2 + bx + c = 0 \iff x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a},
$$

obtained by completing the square — and completing the square is also how you
find the vertex of a parabola and derive the canonical form of any quadratic in
$x$ and $y$.

**Proposition (AM–GM).** For $a, b \geq 0$: $\frac{a+b}{2} \geq \sqrt{ab}$, with
equality iff $a = b$.

*Proof.* $(a - b)^2 \geq 0 \iff a^2 - 2ab + b^2 \geq 0 \iff a^2 + b^2 \geq 2ab \iff \frac{a+b}{2} \geq \sqrt{ab}$
(adding $2ab$ and halving; taking positive square roots). Equality iff
$(a-b)^2 = 0$. $\blacksquare$

**Inequalities you must be able to manipulate.**

- $x < y$ and $c > 0 \Rightarrow cx < cy$; but for $c < 0$ the inequality
  *reverses*. Dividing by a negative without flipping is the most common
  school-level error, and in analysis it proves false theorems.
- Triangle inequality: $|x + y| \leq |x| + |y|$, with equality iff $x, y$ have
  the same sign. Proof: $|x+y|^2 = (x+y)^2 = x^2 + 2xy + y^2 \leq x^2 + 2|xy| + y^2 = (|x|+|y|)^2$ using $xy \leq |xy|$.
- Reverse triangle: $\big||x| - |y|\big| \leq |x - y|$. Proof: apply the
  triangle inequality to $x = (x - y) + y$ and to $y = (y - x) + x$, then
  combine.

**Proposition (Bernoulli).** For $x > -1$ and $r \in \mathbb{N}$:
$(1+x)^r \geq 1 + rx$.

*Proof.* Induction. Base $r = 1$: equality. Step: assume
$(1+x)^r \geq 1 + rx$. Multiply both sides by the positive $(1+x)$:
$(1+x)^{r+1} \geq (1+rx)(1+x) = 1 + (r+1)x + rx^2 \geq 1 + (r+1)x$.
$\blacksquare$

**Exponentials and logarithms.** $a^x$ and $\log_a x$ are inverse functions;
$\log(xy) = \log x + \log y$; $\log(x^r) = r \log x$. The natural logarithm uses
$e = \lim_{n\to\infty}(1 + 1/n)^n$ — a limit, justified rigorously in the
real-analysis track. **$\log$ of a negative number is undefined over the
reals.**

## 6. Trigonometry

**Definition (radian).** An angle of $\theta$ radians subtends an arc of length
$\theta$ on the unit circle. $\pi$ radians $= 180°$. **All calculus assumes
radians** — $\frac{d}{dx}\sin x = \cos x$ is false in degrees, because the
derivative of $\sin$ at $0$ is $\pi/180$-ish in degrees and exactly $1$ in
radians.

<div class="table-wrap">

| $\theta$ | $0$ | $\pi/6$ | $\pi/4$ | $\pi/3$ | $\pi/2$ |
| -------- | --- | ------- | ------- | ------- | ------- |
| $\sin\theta$ | $0$ | $1/2$ | $\frac{\sqrt2}{2}$ | $\frac{\sqrt3}{2}$ | $1$ |
| $\cos\theta$ | $1$ | $\frac{\sqrt3}{2}$ | $\frac{\sqrt2}{2}$ | $1/2$ | $0$ |
| $\tan\theta$ | $0$ | $1/\sqrt3$ | $1$ | $\sqrt3$ | — |

</div>

**Identities, proved not listed.**

*Pythagoras.* $\sin^2\theta + \cos^2\theta = 1$: it is the equation of the unit
circle, since $\cos\theta, \sin\theta$ are its coordinates.

*Angle addition.*

$$
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta,
\qquad
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta.
$$

*Proof of the first.* Take points $P = (\cos\alpha, \sin\alpha)$ and apply the
rotation through $\beta$, whose matrix is
$\begin{pmatrix}\cos\beta & -\sin\beta\\ \sin\beta & \cos\beta\end{pmatrix}$;
the rotated coordinates are exactly the two formulas, since rotation by $\beta$
maps the unit circle to itself and sends the angle $\alpha$ to $\alpha + \beta$. $\blacksquare$

*Even–odd.* $\cos(-\theta) = \cos\theta$ and $\sin(-\theta) = -\sin\theta$:
cosine is even, sine is odd — visible from the unit circle.

*Double angle and the half-angle substitution.* Setting $\alpha = \beta$:
$\sin 2\theta = 2\sin\theta\cos\theta$,
$\cos 2\theta = \cos^2\theta - \sin^2\theta = 2\cos^2\theta - 1 = 1 - 2\sin^2\theta$. Rearranged: $\cos^2\theta = \frac{1 + \cos 2\theta}{2}$ —
the identity every Fourier series computation uses.

**Proposition (the fundamental limits).**
$\lim_{x\to 0}\frac{\sin x}{x} = 1$ and $\lim_{x\to 0}\frac{1 - \cos x}{x^2} = \frac12$.

*Proof of the first (squeeze theorem).* For $0 < x < \pi/2$, compare areas:
$\triangle OAB \leq \text{sector} \leq \triangle OAC$ gives
$\frac{1}{2}\sin x \leq \frac{x}{2} \leq \frac{1}{2}\tan x$, so

$$
\cos x \leq \frac{\sin x}{x} \leq 1,
$$

and since $\cos x \to 1$, the squeeze theorem (proved in the real-analysis
track from the $\varepsilon$–$\delta$ definition) gives the limit. The second
follows: $\frac{1 - \cos x}{x^2} = \frac{2\sin^2(x/2)}{x^2} = \frac{1}{2}\left(\frac{\sin(x/2)}{x/2}\right)^2 \to \frac{1}{2}$. $\blacksquare$

## 7. Coordinate geometry

**Definition (distance, midpoint, gradient).** In $\mathbb{R}^2$,
$d(P, Q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}$ (Pythagoras); the gradient of
the line through $P, Q$ is $m = \frac{y_1 - y_2}{x_1 - x_2}$.

**Proposition.** Lines $y = m_1x + c_1$ and $y = m_2x + c_2$ are perpendicular
iff $m_1 m_2 = -1$.

*Proof.* A line of gradient $m$ has direction vector $(1, m)$. Two direction
vectors are perpendicular iff their dot product vanishes:
$(1, m_1)\cdot(1, m_2) = 1 + m_1 m_2 = 0$. $\blacksquare$

**Conic sections.** The circle $x^2 + y^2 = r^2$; the parabola $y = ax^2 + bx + c$; the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$; the hyperbola
$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. Each is the slice of a cone, and each
is a level set of a quadratic — which is why completing the square classifies
them all.

**Vectors and the dot product.** $\mathbf{u} \cdot \mathbf{v} = |\mathbf{u}||\mathbf{v}|\cos\theta$, so $\mathbf{u}\cdot\mathbf{v} = 0$ means
perpendicular — the algebraic form of orthogonality that every later course
generalises.

## 8. Single-variable calculus

**Definition (derivative).** $f'(x) = \lim_{h \to 0}\frac{f(x+h) - f(x)}{h}$
when the limit exists.

**The standard derivatives, with one proved.**

<div class="table-wrap">

| $f(x)$ | $f'(x)$ |
| ------ | ------- |
| $x^r$ | $rx^{r-1}$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |

</div>

*Proof for $\sin$, the one needing trigonometry.* From the definition and the
angle-addition formula,

$$
\frac{\sin(x+h) - \sin x}{h}
= \sin x\,\frac{\cos h - 1}{h} + \cos x\,\frac{\sin h}{h}
\to \sin x \cdot 0 + \cos x \cdot 1 = \cos x,
$$

using the two fundamental limits of §6. The factor $h$ in the denominator and
the radians convention are what make this come out clean — which is *why* the
course uses radians. $\blacksquare$

**Rules.** Product: $(fg)' = f'g + fg'$. Quotient:
$\left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$. Chain:
$(g \circ f)'(x) = g'(f(x))\,f'(x)$.

*Proof of the chain rule (with the hypothesis stated).* If $g$ is differentiable
at $f(x)$ and $f$ at $x$, and the difference quotients of $f$ stay bounded away
from zero where needed, then

$$
\frac{g(f(x+h)) - g(f(x))}{h} = \frac{g(f(x+h)) - g(f(x))}{f(x+h) - f(x)}
\cdot \frac{f(x+h) - f(x)}{h}.
$$

The subtlety — the denominator $f(x+h) - f(x)$ can be zero for arbitrarily
small $h$ — is handled by writing the difference quotient of $g$ as a continuous
function of the increment, which is why the honest proof defines
$\psi(k) = \frac{g(f(x)+k) - g(f(x))}{k}$ for $k \neq 0$ and $\psi(0) = g'(f(x))$,
making $\psi$ continuous. Then $g(f(x+h)) - g(f(x)) = \psi(f(x+h) - f(x))$ holds
*even when the increment is zero*, and the limit factors. $\blacksquare$

**Definition (integral).** $\int_a^b f(x)\,dx$ is the limit of Riemann sums
$\sum f(\xi_i)\,\Delta x_i$ as the mesh goes to zero.

**The fundamental theorem of calculus.** If $f$ is continuous and
$F(x) = \int_a^x f(t)\,dt$, then $F'(x) = f(x)$; and
$\int_a^b f = F(b) - F(a)$ for any antiderivative $F$.

*Proof of the first part.* $\frac{F(x+h) - F(x)}{h} = \frac{1}{h}\int_x^{x+h}f$,
and by continuity $f$ is within $\varepsilon$ of $f(x)$ on $[x, x+h]$ for small
$h$, so the average is within $\varepsilon$ of $f(x)$. $\blacksquare$

**The school results recovered.** Integration by parts from the product rule —
$(fg)' = f'g + fg'$ integrates to $\int fg' = fg - \int f'g$. Substitution from
the chain rule — $\frac{d}{dx}g(f(x)) = g'(f(x))f'(x)$ read backwards.
Both are *theorems about antiderivatives*, and both fail without the
hypotheses, which is why the derivative table above was proved rather than
listed.

## 9. Notation: the upgrade list

Some school notation is discarded, and using it flags your work:

<div class="table-wrap">

| school | university | why |
| ------ | ---------- | ----- |
| $\sin^2 x$ meaning $(\sin x)^2$ | kept, but $\sin^{-1}x$ means *arcsine*, never $1/\sin x$ | the $^{-1}$ collision |
| "solving for $x$" | "determining the preimage $f^{-1}(\{y\})$" | functions, not puzzles |
| $=$ used loosely | $=$ only for genuine equality; $\approx$, $\to$, $\propto$ as needed | each symbol is a claim |
| implicit domains | domains stated with every function | $f(x) = \sqrt{x}$ has domain, and it matters |
| "can't divide by zero" | "$f$ is defined where its denominator is nonzero" | the domain is part of the function |

</div>

**Proof hygiene.** Never write $\Rightarrow$ between two statements you have
not proved connect. Never use the theorem you are proving. State where every
hypothesis is used. If a step says "clearly" and it is not, it is not clear.

## 10. Self-test

Attempt these before track 1. Answers below; each links back to its section.

1. Write the negation of: "for every $\varepsilon > 0$ there is an $N$ such that
   for all $n \geq N$, $|a_n| < \varepsilon$". (§1)
2. Prove that $f(x) = x^3$ is injective on $\mathbb{R}$. (§3)
3. Prove that $n^3 - n$ is divisible by $6$ for all $n \in \mathbb{N}$. (§4,
   cases + induction)
4. Show $x^2 > x$ for all $x > 1$, and find every $x$ with $x^2 < x$. (§5)
5. Prove $\tan(\alpha + \beta) = \frac{\tan\alpha + \tan\beta}{1 - \tan\alpha\tan\beta}$,
   stating where the formula fails. (§6)
6. Show the lines $y = 2x + 1$ and $x + 2y = 3$ are perpendicular. (§7)
7. Differentiate $x^x$ for $x > 0$, stating the rule used. (§8, chain + log)
8. Prove $\frac{d}{dx}\cos x = -\sin x$ using the fundamental limits. (§8)

**Answers.**
(1) $\exists\varepsilon > 0\ \forall N\ \exists n \geq N : |a_n| \geq \varepsilon$.
(2) $f(a) = f(b) \Rightarrow a^3 = b^3 \Rightarrow (a - b)(a^2 + ab + b^2) = 0$;
$a^2 + ab + b^2 = (a + b/2)^2 + \frac{3b^2}{4} \geq \frac{3b^2}{4} > 0$ unless
$a = b = 0$, so $a = b$. (3) $n^3 - n = (n-1)n(n+1)$ is a product of three
consecutive integers, so one is even and one is a multiple of 3. (4) $x^2 > x \iff x(x-1) > 0 \iff x > 1$ or $x < 0$; $x^2 < x \iff 0 < x < 1$. (5) Divide
$\sin(\alpha+\beta)$ by $\cos(\alpha+\beta)$, then divide numerator and
denominator by $\cos\alpha\cos\beta$; it fails when
$\tan\alpha\tan\beta = 1$, i.e. when $\alpha + \beta = \pi/2$ and the tangent is
undefined. (6) Gradients $2$ and $-1/2$: product $-1$. (7) $x^x = e^{x\ln x}$,
so $\frac{d}{dx} = e^{x\ln x}(\ln x + 1) = x^x(\ln x + 1)$ — chain rule with
$f = \ln$ and $g = e^{(\cdot)}$. (8) $\frac{\cos(x+h) - \cos x}{h} = \cos x\,\frac{\cos h - 1}{h} - \sin x\,\frac{\sin h}{h} \to -\sin x$.

## Where to go next

- [Complex Numbers Review](/6-complex-analysis/1_complex-numbers-review/) — the
  first page of the complex-analysis track, which extends this page's algebra.
- [Introduction to Topology](/9-topology/1_introduction-to-topology/) — the
  $\varepsilon$–$\delta$ definitions of §1 made into a subject.
- [Smooth Manifolds](/12-differential-geometry/1_smooth-manifolds/) — where the
  coordinate geometry of §7 becomes a theory.
- [Measure-Theoretic Probability](https://machine-learning.wyattau.com/1-probabilistic-machine-learning/1_measure-theoretic-probability/) —
  where §2's countability distinction decides which theorems hold.
