---
date: 2026-11-09T00:00:00+00:00
title: "Stage E: Completing Algebra"
description: "Polynomials rebuilt as formal objects (a polynomial is not its function), the complex numbers built as pairs with a forced multiplication rule, and the fundamental theorem of algebra declared with Stage K named as its payee: the debt ledger opens its longest entry, and the structural stages begin."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage E: Completing Algebra", "url": "https://mathematics.wyattau.com/17-core-course/stage-e-completing-algebra"}]
}
</script>

**The Defect.** Stage D built you the real line, and algebra immediately
asks for more than the line contains. The equation $x \times x + 1 = 0$
has no real solution: on the ordered line, every square is $\geq 0$, so
$x \times x = -1$ is impossible (Section 3 of Stage C's crisis, now a
permanent feature rather than a surprise). The naive conjectures: invent
a root ad hoc whenever one is needed, or declare such equations
meaningless. Both fail the same way: algebra wants *systems*, so you need
not just one root of one equation but a closed arithmetic in which
polynomial questions have polynomial answers. Stage E builds that
system in three moves: polynomials rebuilt as formal objects, a new
number constructed as pairs with a forced multiplication rule, and the
fundamental theorem of algebra *declared*: the course map's ledger
opens its longest debt, with Stage K named as the payee, roughly forty
chapters later.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
polynomial is its coefficient sequence, not its graph; a number is its
arithmetic, not its size; and the fundamental theorem of algebra is the
promise that the pair-built system you construct in this stage is the
last system algebra will ever demand, a promise proved in Stage K and
spent in every structural stage between.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage D (the real line, its order, the crisis
theorem) and Stage B (arithmetic, induction, division with remainder)
and Stage C (the integers, $\mathbb{Z}/2$, well-definedness method).
Declares exactly one debt: the **fundamental theorem of algebra**
(Section 3), discharged by Stage K3. Formal witnesses pause: the
algebra of this stage lives in Mathlib's commutative-ring machinery,
and importing a library that size for three boxes fails the
proportionality test. The prose proofs stand alone.

## 1. Polynomials as Formal Objects

**The naive conjecture.** A polynomial *is* its function: the object
and the rule that evaluates it are the same thing. Stage C built
$\mathbb{Z}/2$ (Section 5), and it refutes this in a two-element world:
on $\{[0], [1]\}$, the polynomial $x \times x + x$ evaluates to $[0]$
at both elements ($0 \times 0 + 0 = [0]$ and $1 \times 1 + 1 = [1] +
[1] = [0]$ in $\mathbb{Z}/2$): the *same function* as the zero
polynomial. Yet one has degree 2 and the other degree 0: they are
different objects with identical behaviour. A polynomial must
therefore be something whose identity is *syntactic*: the coefficients,
not its evaluated output.

**Definition (polynomial).** A **polynomial** over a number system $R$
is a finite sequence of coefficients from $R$: $(a_0, a_1, \ldots,
a_n)$. The **degree** of a nonzero polynomial is the largest index with
$a_k \neq 0$. The zero polynomial has no degree (convention: degree
$-\infty$, and it is not the degree of any natural number).

**Definition (evaluation).** The value of $(a_0, \ldots, a_n)$ at $x$
is $a_0 + a_1 \times x + \dots + a_n \times x^n$, computed efficiently
by **Horner's scheme**: $\left(\ldots\left((a_n \times x + a_{n-1})
\times x + a_{n-2}\right) \times x \dots\right) + a_0$. Evaluation is a
*separate map* from sequences to the number system, and the separation
that the naive conjecture denied.

**Formal witness (the representation, certified).** The polynomial as a
coefficient list, with Horner evaluation, in core Lean: both facts
hold *by definition* (`rfl`), which is the point: the representation is
the object.

```lean
def evalPoly (coef : List Nat) (x : Nat) : Nat :=
  match coef with
  | [] => 0
  | a :: rest => a + x * evalPoly rest x

theorem eval_nil_w (x : Nat) : evalPoly [] x = 0 := rfl

theorem eval_cons_w (a : Nat) (coef : List Nat) (x : Nat) :
    evalPoly (a :: coef) x = a + x * evalPoly coef x := rfl
```

*Gloss.* The empty coefficient list is the zero polynomial (evaluates
to $0$ everywhere), and prepending a coefficient $a$ shifts the rest up
by one power: `a + x * (rest evaluated at x)`.

**Definition (formal arithmetic).** Addition adds coefficient-wise:
$(a_k) + (b_k) := (a_k + b_k)$. Multiplication is **convolution**: the
coefficient of $x^k$ in a product is $\sum_{i + j = k} a_i \times b_j$
: exactly what expanding $(a_0 + a_1 x + \dots)(b_0 + b_1 x + \dots)$
and collecting powers of $x$ produces.

**Theorem (degree of a product).** Over an integral domain (Stage C's
$\mathbb{Z}$ qualifies: no zero divisors, Section 5's Problem 5), the
degree of a product is the sum of the degrees.

*Proof.* Let $f$ have degree $m$ (leading coefficient $a_m \neq 0$)
and $g$ have degree $n$ (leading coefficient $b_n \neq 0$). The
coefficient of $x^{m + n}$ in $f \times g$ is $a_m \times b_n$ plus
terms $a_i \times b_j$ with $i + j = m + n$ and ($i < m$ or $j < n$).
If $i < m$, then $a_i = 0$; if $j < n$, then $b_j = 0$. So every other
term vanishes and $a_m \times b_n \neq 0$ (no zero divisors). The
product has degree $m + n$. $\blacksquare$

**Quick check.**

1. Write the coefficient sequences of $3 + 0 \times x + 5 \times x^2$
   and of $x$.
2. Compute the convolution coefficient of $x^1$ for
   $(1, 2) \times (3, 4)$.
3. Why does the $\mathbb{Z}/2$ example refute "a polynomial is its
   function"?
4. State the degree-of-a-product theorem, and name the property of
   the coefficient system it consumes.
5. Compute $(1, 2) \times (3, 4)$ completely (all coefficients).
6. Evaluate the coefficient sequence $(2)$ at $x = 5$, and connect it
   to the constant polynomial $2$.
7. Compute the convolution of $(1, 1)$ with $(1, 1)$, and name the
   Stage B counting objects the coefficients $1, 2, 1$ recall.
8. Why does the zero polynomial have *no degree* rather than degree
   $0$, given the leading-coefficient definition?

*Answers:* **1.** $(3, 0, 5)$ and $(0, 1)$. **2.**
$\sum_{i+j=1} a_i b_j = a_0 b_1 + a_1 b_0 = 1 \times 4 + 2 \times 3 =
10$. **3.** On $\mathbb{Z}/2$ they define the same function but have
different degrees: identity is syntactic (coefficients), not
behavioural. **4.** $\deg(f \times g) = \deg f + \deg g$, consuming no
zero divisors. **5.** Coefficient of $x^0$: $3$; of $x^1$: $4 + 6 =
10$; of $x^2$: $8$. So $(3, 10, 8)$: check by expanding $(1 + 2x)(3 + 4x) = 3 + 10x + 8x^2$.

## 2. The Complex Numbers: Pairs with a Forced Rule

**The wall.** Over $\mathbb{R}$, the polynomial $x \times x + 1$ has no
root: on the ordered line, $x \times x \geq 0$, so $x \times x + 1
\geq 1$ (Section 3 of Stage C proved the stronger fact that even over
$\mathbb{Q}$ no root exists). The naive conjectures: there is no
answer, or the answer is "undefined". Both refuse to build.

**The repair (forced, not invented).** Declare a new object $i$ with
exactly one law: $i \times i = -1$. Demand that $i$ live inside an
arithmetic with the laws you already trust (associativity,
commutativity, distributivity, every real $r$ embedded). Then the
multiplication rule is *forced*: $(a + i \times b) \times (c + i
\times d) = a \times c + a \times i \times d + i \times b \times c +
i \times i \times b \times d = (a \times c - b \times d) + i \times (a
\times d + b \times c)$. Every choice except $i \times i = -1$ in the
fourth term violates the laws you demanded.

**Definition (the complex numbers).** $\mathbb{C} := \mathbb{R}
\times \mathbb{R}$ with

- $(a, b) + (c, d) := (a + c, b + d)$;
- $(a, b) \times (c, d) := (a \times c - b \times d, a \times d + b
  \times c)$;
- $i := (0, 1)$, and $i \times i = (-1, 0) = -1$: the defining law,
  recovered from the rule.

**Theorem (the naive alternative is broken).** Componentwise
multiplication, $(a, b) \times (c, d) := (a \times c, b \times d)$,
produces zero divisors: the nonzero pair $(1, 0)$ times the nonzero
pair $(0, 1)$ is $(0, 0)$.

*Proof.* Direct substitution. And zero divisors destroy
cancellation: $x \times (1, 0) = y \times (1, 0)$ with $(x, y) =
(0, 1)$-pairs cannot cancel, so equations stop being solvable by the
course's standard moves. The forced rule exists precisely to avoid
this. $\blacksquare$

**Theorem (ℂ is a field).** Every nonzero $(a, b)$ has a
multiplicative inverse: $(a, b)^{-1} = \left(\frac{a}{a^2 + b^2},
\frac{-b}{a^2 + b^2}\right)$, the denominators being nonzero because
$a^2 + b^2 = 0$ over $\mathbb{R}$ forces $a = b = 0$.

*Proof.* Compute the product: $(a, b) \times \left(\frac{a}{a^2+b^2},
\frac{-b}{a^2+b^2}\right) = \left(\frac{a^2 + b^2}{a^2 + b^2},
\frac{-a \times b + a \times b}{a^2 + b^2}\right) = (1, 0)$, the
multiplicative identity. Every component law used is Stage D's or
Stage B's. $\blacksquare$

**Definition (conjugation, modulus).** The **conjugate** of $(a, b)$
is $(a, -b)$, written $\overline{(a, b)}$; the **modulus** is
$|(a, b)| := \sqrt{a^2 + b^2}$ (Stage D's square-root theorem makes
this a real number for every pair).

**Theorem (conjugation facts).** $\overline{z + w} = \overline{z} +
\overline{w}$; $\overline{z \times w} = \overline{z} \times
\overline{w}$; $z \times \overline{z} = |z|^2$ as a real; and $z
\times \overline{z} = 0 \to z = 0$.

*Proof.* The first two are direct expansions. For the third: $z
\times \overline{z} = (a^2 + b^2, 0)$ for $z = (a, b)$ (multiply out),
whose first component is $a^2 + b^2$ (the modulus squared) and
whose second is $0$. If $z \times \overline{z} = 0$, then $a^2 + b^2
= 0$ over $\mathbb{R}$, which forces $a = b = 0$ (squares are
nonnegative, Stage D), so $z = 0$. $\blacksquare$

**Quick check.**

1. Compute $(2, 3) \times (1, -1)$ by the forced rule.
2. Show $i \times i = -1$ from the rule.
3. Compute the inverse of $(3, 4)$ and verify the product is $(1, 0)$.
4. Where exactly does the componentwise alternative break the course's
   standard moves?
5. Compute $\overline{(2, -3)}$ and $(2, -3) \times \overline{(2,
   -3)}$.
6. Prove $\overline{z + w} = \overline{z} + \overline{w}$ from the
   rule.
7. Why is the modulus well-defined (not just "take a root")?
8. Which Stage D theorem is consumed by the definition of the
   modulus?
9. Compute $(1, 2) \times (4, -3)$ by the forced rule.
10. Prove $\overline{\overline{z}} = z$ from Section 2's conjugation
    definition.
11. Compute $i^{3}$ and $i^{4}$ from $i \times i = -1$, and state
    the pattern.
12. Why does $a^2 + b^2 = 0$ over $\mathbb{R}$ force $a = b = 0$,
    and where was this fact proved?

*Answers:* **1.** $(2 \times 1 - 3 \times (-1), 2 \times (-1) + 3
\times 1) = (5, 1)$. **2.** $(0, 1) \times (0, 1) = (0 - 1, 0 + 0) =
(-1, 0)$. **3.** Inverse $= \left(\frac{3}{25}, \frac{-4}{25}\right)$;
product $= \left(\frac{9 + 16}{25}, \frac{12 - 12}{25}\right) = (1,
0)$. **4.** Zero divisors: cancellation (Problem-style moves
throughout Stage B and C) fails. **5.** $(2, 3)$ and the product is
$(4 + 9, 0) = (13, 0)$: the modulus squared as a real. **6.**
Componentwise addition commutes componentwise. **7.** Stage D's
square-root theorem: every positive real has a square root, so the
$\sqrt{a^2 + b^2}$ exists and is unique. **8.** The square-root
theorem (Section 2 of Stage D): the crisis resolved.

## 3. The Fundamental Theorem of Algebra: Declared

**The theorem (declaration).** Every nonconstant polynomial with
complex coefficients has at least one complex root: for every $f$ of
degree $\geq 1$, there exists $z \in \mathbb{C}$ with $f(z) = 0$. By
repeated division (Stage E's own convolution and Stage 1's evaluation),
this is equivalent to: every polynomial over $\mathbb{C}$ factors
completely into linear factors.

**Why this is a declaration, not a derivation.** The proof history is
two centuries long: Euler failed; d'Alembert's 1746 proof had a gap
filled only with analysis beyond his tools; Gauss gave four proofs
across his career, his first (1799) also containing a gap later
filled; the modern proofs require either the completeness of
$\mathbb{R}$ (Stage D) driving a topological argument, or complex
analysis itself (Stage K's residue theory gives the shortest proof).
Every route consumes machinery this course has not yet built, or is
building in Stage K. Declaring the theorem with a named payee is the
ledger being honest: the course uses the truth, and Stage K pays it.
(The ledger's other entries (the recursion principle, choice) follow
the same shape.)

**What the declaration licenses downstream.** With every complex
polynomial splitting into linear factors:

- **Eigenvalues always exist**: Stage F's characteristic polynomial of
  any complex-linear operator has a root, so eigenvector chains never
  dead-end (Stage F's eigenvector chapter consumes this).
- **Every polynomial of degree $n$ has exactly $n$ roots counted with
  multiplicity**: the factorization $f = c \times \prod (x - z_k)$
  gives them directly.
- **Real polynomials factor into real linear and quadratic factors**:
  nonreal roots come in conjugate pairs (conjugation respects real
  coefficients and roots, Section 2's conjugation facts), and each
  conjugate pair contributes a real quadratic factor (Problem 4).
- **Algebraic closedness of ℂ**: no further number system is ever
  needed for polynomial equations: the reason ℂ and not something
  beyond ℂ appears in the course map's promise.

**Ponder.** Before reading on: the declaration says Stage K will prove
this using complex analysis, a theory of *differentiating* functions
like $z \mapsto z^2 + 1$. Why would differentiation be the tool for a
theorem about roots? Attempt a one-sentence guess before revealing.

<details class="wn-spoiler">
<summary>Compare your guess</summary>
<div class="wn-spoiler-body">

The shortest proof assumes $f$ has *no* root and derives a
contradiction: if $f$ never vanishes, then $1/f$ is a well-behaved
(whole, bounded-away-from-zero) function; but complex
differentiability is so rigid that a whole, bounded function must be
constant (Liouville's consequence, Stage K), and $1/f$ constant forces
$f$ constant, contradicting nonconstant. The rigidity of
differentiation is the engine: roots are unavoidable because
avoiding them makes functions too tame to exist. The course's Stage K
builds exactly enough rigidity to run this.

</div>
</details>

**Quick check.**

1. State the fundamental theorem of algebra in root form and in
   factor form.
2. How many roots does a degree-$n$ polynomial have, counted how?
3. Why do nonreal roots of real polynomials come in pairs? (Section
   2's conjugation facts.)
4. What does each conjugate pair contribute to the real
   factorization?
5. Which stage pays the declaration, and with which tool?
6. What does the declaration license for Stage F?
7. Name the rigidity consequence Stage K's proof consumes.
8. Why is declaring with a named payee honest, per the ledger's
   design?

*Answers:* **1.** Root form: every nonconstant $f$ over $\mathbb{C}$
has some $z$ with $f(z) = 0$; factor form: $f$ factors completely
into linear factors. **2.** Exactly $n$, counted with multiplicity.
**3.** Conjugation maps roots of real-coefficient polynomials to
roots: $\overline{f(z)} = f(\overline{z})$. **4.** A real quadratic
$(x - z)(x - \overline{z})$. **5.** Stage K, by Liouville-style
rigidity of complex differentiation. **6.** Eigenvalues exist for
every complex-linear operator: the characteristic polynomial always
splits. **7.** A whole, bounded function is constant (Liouville's
consequence). **8.** The ledger bans silent assumptions: an undeclared
use of an unproved theorem is exactly the failure mode the two-ledger
design exists to prevent.

## Stage Gate

:::caution[Pass mark: four of five]
Before the structural stages, answer these five without notes. A failed
gate names the section to reread (1: Section 1; 2: Section 2; 3:
Section 3; 4 and 5: the declaration and its consequences).

1. State the formal-object definition of a polynomial, and the
   $\mathbb{Z}/2$ refutation of "a polynomial is its function".
2. State the forced multiplication rule, and derive $i \times i$ from
   it.
3. Prove: every nonzero complex number has an inverse.
4. State the fundamental theorem of algebra in both forms.
5. Name the declaration's payee, the tool of its future proof, and
   two consequences it licenses.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** A polynomial is a finite coefficient sequence; on
$\mathbb{Z}/2$, $x \times x + x$ and the zero polynomial define the
same function but have different degrees: identity is syntactic.
**2.** $(a, b) \times (c, d) := (a \times c - b \times d, a \times d + b \times c)$; $i \times i = (0, 1) \times (0, 1) = (-1, 0) = -1$.
**3.** $(a, b)^{-1} = \left(\frac{a}{a^2 + b^2}, \frac{-b}{a^2 +
b^2}\right)$; the product is $(1, 0)$ by direct expansion. **4.**
Root form: every nonconstant complex polynomial has a complex root;
factor form: complete splitting into linear factors. **5.** Stage K3
pays it, with the rigidity of complex differentiation (Liouville's
consequence); it licenses eigenvalue existence (Stage F) and the
$n$-roots-with-multiplicity count, hence conjugate-pair real
factorizations.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove the **convolution formula** for multiplication: expanding
   $(a_0 + a_1 x + \dots + a_m x^m)(b_0 + b_1 x + \dots + b_n x^n)$
   with Stage B's distributivity and collecting powers of $x$, show
   the coefficient of $x^k$ is $\sum_{i + j = k} a_i \times b_j$.
   *(Hint: each product term $a_i x^i \times b_j x^j$ contributes to
   exactly one power, $i + j$; group the terms by that power.)*
2. Prove **conjugation respects polynomials with real coefficients**:
   for $f$ with real coefficients, $\overline{f(z)} = f(\overline{z})$
   (induction on the degree, using conjugation's respect for $+$ and
   $\times$). Conclude: if $z$ is a root of a real $f$, so is
   $\overline{z}$.
   *(Hint: conjugation distributes over sums and products (Section
   2's facts.)*
3. Prove: a real quadratic with a nonreal root $z$ factors as $(x -
   z)(x - \overline{z})$ with *real* coefficients, and compute it for
   $z = (0, 1)$-root of $x^2 + 1$.
   *(Hint: the coefficients are $-2 \times \mathrm{Re}(z)$ and
   $|z|^2$, both real by construction.)*
4. Prove: a degree-$n$ polynomial over $\mathbb{C}$ has **at most**
   $n$ roots (distinct), using Stage E's degree-of-a-product theorem
   and induction: if $z_1$ is a root, divide $f$ by $(x - z_1)$ (Stage
   1's formal division) and show the quotient has degree $n
   \ominus 1$.
   *(Hint: the division step is the factor theorem, proved by
   evaluating the quotient form $f = (x - z_1) \times q + r$ at
   $z_1$.)*
5. Use the declaration + Problem 4 to prove: every degree-$n$
   polynomial over $\mathbb{C}$ has exactly $n$ roots counted with
   multiplicity.
   *(Hint: induction combining "at most $n$ distinct" with "at least
   $n$ counted with multiplicity" from the complete splitting; the
   distinct-count is at most the multiplicity-count.)*

## Where to Go Next

The foundations are complete: logic, counting, the line, and algebra's
numbers are all built or declared with named payees. The structural
stages begin. Stage F (Structure and linear algebra) opens with the
language that will organize everything from here: **1A: Categories**,
objects and arrows as the shape of mathematical practice.

**Next: [1A: Categories: The Language of Mathematics](/17-core-course/1a-categories/).**
