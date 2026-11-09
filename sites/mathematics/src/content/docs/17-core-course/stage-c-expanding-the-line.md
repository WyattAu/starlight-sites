---
date: 2026-11-09T00:00:00+00:00
title: "Stage C: Expanding the Line"
description: "The line of counting numbers breaks twice and is rebuilt twice: subtraction fails and the integers rise from equivalence classes of differences; division fails and the rationals rise from pairs; then the first crisis, a square whose side no fraction measures, and the arithmetic of primes, unique factorisation, and congruence classes that proves it."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage C: Expanding the Line", "url": "https://mathematics.wyattau.com/17-core-course/stage-c-expanding-the-line"}]
}
</script>

**The Defect.** Stage B built you a line of counting numbers, and within
one page you will run it into two walls. Ask it what $3 - 5$ is, and it
has no answer: subtraction is only total when the second number is small
enough. Ask it what $3 \div 5$ is, and again silence: division is only
total when the first number is big enough. Each wall gets the same
treatment, and it is the most powerful move in all of mathematics, made
from Stage A's equivalence relations and Stage B's division with
remainder: when the objects you want do not exist, *define a new object
to be an equivalence class of pairs of old objects*, prove the arithmetic
is well-defined, and move in. The integers are born this way, then the
rationals. Then the stage ends with the first crisis: the diagonal of a
unit square has a length, and we prove no fraction measures it. The line
of rationals has holes, and Stage D exists to fill them.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
number system is not a gift; it is a construction, and the construction
is always the same three moves: declare pairs, quotient by an equivalence
relation you can prove respects the arithmetic, and inherit everything
else. Run it twice and the integers and rationals appear; then one
diagonal proves the rationals have holes, which is why Stage D exists.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage A (equivalence relations, the partition
correspondence, functions) and Stage B (the counting numbers, all four
arithmetic operations, order, division with remainder, the Euclidean
algorithm's ingredients). No new debts are declared: every construction
on this page is proved from those two stages alone. Euclid's algorithm
appears in Section 4 and carries Section 5 on its back.

## 1. The Failure of Subtraction; the Integers

**The naive conjecture.** Subtraction should answer "how much bigger is
$a$ than $b$?", and Stage B's order totality guarantees *some* comparison.
But the definition, "$a - b$ is the $c$ with $b + c = a$", only has a
solution when $b \leq a$: there is no counting number $c$ with $5 + c =
3$. Attempt 1: declare $3 - 5 = 0$. Then $0 - 0 = 0$ and $5 - 5 = 0$ and
$3 - 5 = 0$, and the sentence $(a - b) + b = a$ that makes subtraction
the true inverse of addition fails immediately. Attempt 2: work only
with magnitudes and never subtract a larger from a smaller. Then the
ledger of a business that owes more than it owns cannot be written, and
every equation $a + x = b$ with $a < b$ is unsolvable. The monster is the
equation itself, and the repair is the deepest move in the course.

**Definition (difference classes).** On the set $\mathbb{N} \times
\mathbb{N}$ of ordered pairs of counting numbers, declare $(a, b)
\sim (c, d)$ when $a + d = c + b$. This is Stage A's equivalence
relation machinery, checked directly: reflexive ($a + b = a + b$),
symmetric (symmetry of equality), transitive (add a $c$-term and
cancel, Section 2's associativity and the base line). The **integers**
are the equivalence classes of $\sim$, written
$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim$. The pair $(a, b)$
encodes the *difference* $a - b$ that may not exist in $\mathbb{N}$: the
class of $(7, 3)$ behaves as four, and the class of $(3, 7)$ is the
object Stage B could not name.

**Definition (the class of zero and its shadow).** The class of $(0, 0)$
is called $0_{\mathbb{Z}}$; the class of $(n, 0)$ is written $n_{\mathbb{Z}}$
for each counting number $n$. The map $n \mapsto n_{\mathbb{Z}}$ is
injective (if $n_{\mathbb{Z}} = m_{\mathbb{Z}}$ then $n + 0 = m + 0$, so
$n = m$): the counting numbers sit inside the integers without losing
their identities.

**Definition (arithmetic on classes).** Addition and multiplication are
carried out on representatives: $[(a, b)] + [(c, d)] := [(a + c, b +
d)]$ and $[(a, b)] \times [(c, d)] := [(a \times c + b \times d, a
\times d + b \times c)]$.

**Theorem (well-defined).** The definitions above do not depend on the
chosen representatives.

*Proof.* Suppose $(a, b) \sim (a', b')$ and $(c, d) \sim (c', d')$, that
is $a + b' = a' + b$ and $c + d' = c' + d$. For addition: $(a + c) +
(b' + d') = (a + b') + (c + d') = (a' + b) + (c' + d) = (a' + c') + (b +
d)$, so $(a + c, b + d) \sim (a' + c', b' + d')$. For multiplication,
expand both sides of $(a + b')(c + d') + (a + d')(c + b') = (a' + b)(c + d) + (a' + d)(c + b')$ using distributivity (Stage B), apply the two
hypotheses twice each, and watch the sides become equal: the full
expansion is Problem 2, and the machine-checkable witness is below.
$\blacksquare$

**Formal witness (well-definedness, certified).** The addition case,
proved by the kernel:

```lean
theorem add_wd (a b c d a' b' c' d' : Nat)
    (h1 : a + b' = a' + b) (h2 : c + d' = c' + d) :
    a + c + (b' + d') = a' + c' + (b + d) := by omega
```

*Gloss.* `omega` is the linear-arithmetic decision procedure of core
Lean: it accepts the two hypotheses and closes the goal by pure bookkeeping.
The multiplication case is Problem 2; `omega` cannot reach it because
multiplication is nonlinear, which is why Problem 2 asks for the honest
algebraic expansion.

**Theorem (everything inherited).** Addition on $\mathbb{Z}$ is
associative, commutative, and has $0_{\mathbb{Z}}$ as identity;
multiplication is associative, commutative, distributive over addition;
and every class has an additive inverse: $-[(a, b)] := [(b, a)]$, and
$[(a, b)] + [(b, a)] = 0_{\mathbb{Z}}$.

*Proof.* Each law is proved by choosing representatives and reducing to
the corresponding law on $\mathbb{N}$, then applying well-definedness.
Commutativity of addition, for example: $[(a, b)] + [(c, d)] = [(a + c,
b + d)] = [(c + a, d + b)] = [(c, d)] + [(a, b)]$, the middle equality
by commutativity of addition on $\mathbb{N}$. The inverse computation:
$(a + b, b + a) \sim (0, 0)$ since $a + b + 0 = 0 + (b + a)$.
$\blacksquare$

This is the moment the course has aimed at since Stage A: the equation
$a + x = b$ now has the solution $x = b + (-a)$ for *every* $a$ and $b$.
Subtraction is total, and it is nothing new: $a - b$ *is* $a + (-b)$.

**Definition (order).** $x \leq y$ in $\mathbb{Z}$ when representatives
can be chosen with $x = [(a, b)]$, $y = [(c, d)]$, and $b + c \leq a +
d$ in $\mathbb{N}$; well-defined by the same representative bookkeeping
(Problem 3).

:::note[Quick check]

1. State the equivalence relation defining $\mathbb{Z}$.
2. Why is the map $n \mapsto n_{\mathbb{Z}}$ injective?
3. Compute $[(3, 7)] + [(5, 2)]$ and identify the resulting class in
   simple terms.
4. Which Stage A tool made the quotient construction legal?
5. What does $-[(a, b)]$ mean, and what does adding it produce?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">
1. $(a, b) \sim (c, d)$ when $a + d = c + b$; $\mathbb{Z}$ is the set of equivalence classes.
2. Equality of the classes forces $n = m$ by the base line of addition.
3. $[(8, 9)]$, which behaves as $-1$: it is $-[(1, 0)]$.
4. Equivalence relations and their quotient set (the partition correspondence).
5. The class $[(b, a)]$; adding gives $[(a + b, b + a)] = 0_{\mathbb{Z}}$.
</div>
</details>

:::

## 2. The Failure of Division; the Rationals

**The wall, again.** In $\mathbb{Z}$, the equation $3 \times x = 5$ has
no solution (Section 4's parity argument shows $3 \times x$ is never $5$;
or directly, $x$ would have to be a non-integer). Division is only total
when the divisor divides. Same move, new pairs.

**Definition (fraction classes).** On $\mathbb{Z} \times (\mathbb{Z}
\setminus \{0_{\mathbb{Z}}\})$, declare $(p, q) \sim (p', q')$ when $p
\times q' = p' \times q$. The **rationals** are the classes, written
$\mathbb{Q}$. The pair $(p, q)$ encodes the fraction $p/q$; the class of
$(p, 1_{\mathbb{Z}})$ copies the integers into $\mathbb{Q}$, injectively
(Problem 4).

**Definition (arithmetic).** $[(p, q)] + [(r, s)] := [(p \times s +
r \times q, q \times s)]$ and $[(p, q)] \times [(r, s)] := [(p \times r,
q \times s)]$. Both are well-defined (Problem 5: the addition case needs
$\mathbb{Z}$'s distributivity, which Section 1 just built).

**Theorem (inverses exist).** Every nonzero rational has a
multiplicative inverse: $[(p, q)]^{-1} := [(q, p)]$ for $p \neq
0_{\mathbb{Z}}$, and $[(p, q)] \times [(q, p)] = [(p \times q, p
\times q)] = 1_{\mathbb{Q}}$.

*Proof.* The class $1_{\mathbb{Q}}$ is $[(1_{\mathbb{Z}},
1_{\mathbb{Z}})]$, and $(p \times q, p \times q) \sim (1, 1)$ because
$p \times q \times 1_{\mathbb{Z}} = 1_{\mathbb{Z}} \times p \times q$
(the two sides are the same product, on both representatives). The
condition $p \neq 0_{\mathbb{Z}}$ makes $(q, p)$ a legal pair.
$\blacksquare$

Division is now total: $a / b := a \times b^{-1}$ for $b \neq
0_{\mathbb{Q}}$. The equation $c \times x = d$ with $c \neq 0$ has the
solution $x = d \times c^{-1}$, always.

**Theorem (order and density).** Define $[(p, q)] > 0_{\mathbb{Q}}$ when
$p \times q > 0_{\mathbb{Z}}$ (well-defined: flipping both signs flips
the product twice). Then for any two rationals $x < y$, there exists $z$
with $x < z < y$ and $z \neq x, y$: the rationals have **no gaps
between their elements**.

*Proof.* Take representatives in lowest terms and positive
denominators; then $z := (p \times s' + r \times q', q \times s')$ for
representatives $x = p/q$, $y = r/s'$ satisfies $x < z < y$ by direct
computation in $\mathbb{Z}$ (cross-multiply and apply Stage B's order
laws). The details are Problem 6. $\blacksquare$

**Ponder.** Before reading on: density says the rationals have no gaps
*between their elements*. Stage A taught you to distrust exactly this
kind of phrase. Try to state what "no gaps" does *not* say, and hold
that thought until Section 3's monster lands.

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

"No gaps between elements" says: between any two rationals there is
another rational. It does *not* say: every point of the line is
occupied. The sentence is about pairs of rationals; the line contains
points that are not rationals, and those are not a pair of rationals, so
density is silent about them. This is not wordplay: Section 3 exhibits a
specific point of the line, the diagonal of the unit square, and proves
it is not rational. Density and completeness are different properties,
and confusing them is the two-thousand-year-old error this course is
built to prevent.

</div>
</details>

:::note[Quick check]

1. State the equivalence relation defining $\mathbb{Q}$.
2. Which stage's which law makes rational addition well-defined?
3. Compute the inverse of $[(3, 5)]$ and verify the product recovers
   $1_{\mathbb{Q}}$.
4. State density in one sentence, and one thing it does not claim.
5. Why must the second component avoid $0_{\mathbb{Z}}$?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">
1. $(p, q) \sim (p', q')$ when $p \times q' = p' \times q$, on pairs with $q \neq 0_{\mathbb{Z}}$.
2. Stage 1's distributivity and commutativity on $\mathbb{Z}$ (Stage B's laws, lifted).
3. $[(5, 3)]$; and $[(3, 5)] \times [(5, 3)] = [(15, 15)] = 1_{\mathbb{Q}}$.
4. Between any two distinct rationals lies a third; it does not claim every point of the line is rational.
5. The inverse definition divides by $q$; $q = 0_{\mathbb{Z}}$ has no inverse and encodes no fraction.
</div>
</details>

:::

## 3. The First Crisis: a Length No Fraction Measures

**The historical monster, stated with Stage B's tools.** Consider a
square with side $1$. Its diagonal has some length $d$; by the
Pythagorean insight (taken here as the geometric fact that motivates the
algebra, and never used as an axiom later), $d \times d = 1 \times 1 +
1 \times 1 = 2$. The naive conjecture: some rational measures it, that
is, some integers $p, q$ with $q \neq 0$ satisfy $p \times p = 2 \times
q \times q$ (in lowest terms). The honest attempt: look for one. Small
fractions fail immediately. The monster, due to the Pythagorean school
(the tradition attributes the discovery to Hippasus, reportedly at the
cost of a sea voyage), proves the search can never succeed.

**Theorem (the first crisis).** There are no integers $p, q$ with $q
\neq 0$ and $p \times p = 2 \times q \times q$.

*Proof.* Suppose some exist. Among all pairs, choose one with $q$
minimal? No: choose one in lowest terms, meaning $p$ and $q$ share no
common factor other than $1$; such a pair exists because among all
valid pairs, the pair with the smallest $p$ has this property (any
common factor could be cancelled, producing a smaller valid $p$: the
descent shape from Stage B's well-ordering). Now $p \times p = 2 \times
q \times q$ is even, so $p \times p$ is even; if $p$ were odd, $p
\times p$ would be odd (an odd times an odd is odd: write $p = 2 \times
h + 1$ and expand, Stage B's distributivity), so $p$ is even: $p = 2
\times h$. Substitute: $4 \times h \times h = 2 \times q \times q$, so
$2 \times h \times h = q \times q$, and the same argument shows $q$ is
even. Both $p$ and $q$ even: they share the factor $2$, contradicting
lowest terms. $\blacksquare$

**What the crisis really says.** The proof does not use density, or
limits, or anything from beyond Stage B. It uses one fact about evenness
and one descent. Its conclusion is that the rationals, dense as they
are, do not contain the diagonal of the unit square. "No gaps between
elements" was true, and the line has holes anyway: density was never
completeness. Stage D exists because of this theorem. It will build the
real line by a construction (Dedekind cuts) that starts from the
rationals' order alone and closes every hole at once, and the first
thing it will prove is that this diagonal finally has a measure.

**Ponder.** Before reading on: the proof chose "the pair with the
smallest $p$". Stage B's well-ordering justifies choosing a smallest
*something* from a nonempty set of counting numbers. What is the set
being minimised here, and why is it nonempty?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

The set is $\{p : \text{some valid pair has first component } p\}$: the
set of first components of valid pairs. It is nonempty by the initial
supposition that at least one valid pair exists, and it is a set of
counting numbers, so well-ordering applies directly. The descent is
then one line: any common factor of $p$ and $q$ cancels, producing a
valid pair with a smaller first component. The same least-counterexample
shape proved Stage B's division theorem; here it does historic work.

</div>
</details>

:::note[Quick check]

1. Which two facts about evenness drive the proof?
2. What exactly contradicts what, at the end of the proof?
3. Why does the proof not need density or limits?
4. State what the theorem says about the equation $x \times x = 2$ over
   $\mathbb{Q}$.
5. What does the theorem imply about the rational line, and what must
   any completed line add?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">
1. An odd times an odd is odd; and every even product $2 \times q \times q$ forces evenness of its square root in this setting.
2. The lowest-terms hypothesis (no common factor) is contradicted by both $p$ and $q$ being even.
3. It uses only Stage B's arithmetic, order, and well-ordering descent.
4. It has no rational solution.
5. The rational line has holes (the diagonal's length is missing); a completed line must contain that length. Its construction is Stage D. (Forward-honesty marker: Stage D is future content; this theorem stands on its own.)
</div>
</details>

:::

## 4. Primes and the Fundamental Theorem of Arithmetic

**The bridge.** Section 3's descent used "lowest terms", which quietly
used a fact about common factors. This section proves that machinery
honestly: the Euclidean algorithm, Bezout's identity, and the
fundamental theorem of arithmetic. These are the tools that Stage 5 and
the algebra stage will reuse constantly.

**Definition.** $b$ **divides** $a$ (written $b \mid a$) when $a = b
\times q$ for some $q$. A **common divisor** of $a$ and $b$ divides
both; a **greatest common divisor** is a common divisor that every
common divisor divides.

**Theorem (Euclid's algorithm and Bezout).** Let $a, b$ be counting
numbers with $b \neq 0$, and run the descent: set $r_0 := a$, $r_1 :=
b$, and $r_{j + 2} := r_j \ominus ...$, the remainder of $r_j$ upon
division by $r_{j + 1}$ (Stage B's remainder theorem, used with $b :=
r_{j+1}$). The sequence strictly decreases after the first step, so it
stops at some $r_{n+1} = 0$; then $r_n$ is a greatest common divisor of
$a$ and $b$, and there exist integers $u, v$ with $a \times u + b \times
v = r_n$ (Bezout's identity, the coefficients read backwards off the
algorithm).

*Proof.* Termination: each remainder satisfies $r_{j + 2} < r_{j + 1}$,
so the values strictly decrease and, being counting numbers, cannot
decrease forever (well-ordering). Divisibility: $r_{j+1} \mid r_{j+2}'s$
predecessors is propagated backwards; formally, if $d$ divides $r_{j+1}$
and $r_{j+2}$, then $d$ divides $r_j = b$-style combinations of the two
(division with remainder expresses $r_j$ as a multiple of $r_{j+1}$ plus
$r_{j+2}$), so by descent the last nonzero $r_n$ divides every $r_j$,
including $a$ and $b$: it is a common divisor. Greatest: any common
divisor $d$ of $a$ and $b$ divides $r_2$, hence $r_3$, hence down to
$r_n$, so $d \mid r_n$, meaning $r_n$ is greatest. Bezout: unwind the
same recurrences backwards, substituting each remainder into the
previous expression; each step keeps the form (integer combination of
$a$ and $b$). $\blacksquare$

**Theorem (Euclid's lemma).** If a prime $p$ divides $a \times b$, then
$p$ divides $a$ or $p$ divides $b$.

*Proof.* Suppose $p \mid a \times b$ and $p \nmid a$. Then the greatest
common divisor of $p$ and $a$ divides $p$, so it is $1$ or $p$; it is
not $p$ (that would mean $p \mid a$), so it is $1$, and Bezout gives
integers $u, v$ with $p \times u + a \times v = 1$. Multiply by $b$:
$p \times u \times b + (a \times b) \times v = b$. The first term is
divisible by $p$, and $a \times b$ is divisible by $p$ by hypothesis,
so $b$ is divisible by $p$. $\blacksquare$

**Definition.** A counting number $p > 1$ is **prime** when its only
divisors are $1$ and $p$.

**Theorem (the fundamental theorem of arithmetic).** Every counting
number greater than $1$ factors into primes; and the factorisation is
unique up to the order of the factors.

*Proof (existence).* Strong induction. The number $2$ is prime (its only
divisors are $1$ and itself, since nothing smaller besides $1$ exists to
divide it). For $n \geq 2$: if $n$ is prime, done. If not, $n = a
\times b$ with both factors $\geq 2$, so both are $< n$, and the
induction hypothesis factors each; concatenate. $\blacksquare$

*Proof (uniqueness).* Suppose $n = p_1 \times \dots \times p_r = q_1
\times \dots \times q_s$, all prime. Then $p_1$ divides the right side,
so by Euclid's lemma applied repeatedly, $p_1$ divides some $q_j$; a
prime dividing a prime equals it, so $q_j = p_1$; cancel (Stage B's
cancellation for multiplication, Problem-set technique) and repeat.
The lists match element for element, so $r = s$ and the factorisations
are the same up to order. $\blacksquare$

:::note[Quick check]

1. Why does the remainder sequence in Euclid's algorithm terminate?
2. State Bezout's identity.
3. State Euclid's lemma, and which theorem its proof consumes.
4. Where does well-ordering enter the fundamental theorem's existence
   proof?
5. What does "unique up to order" mean concretely for $12 = 2 \times 2
   \times 3$?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">
1. Each remainder is strictly smaller than the previous, and strictly decreasing counting numbers cannot descend forever (well-ordering).
2. There exist integers $u, v$ with $a \times u + b \times v = \gcd(a, b)$.
3. A prime dividing a product divides a factor; it consumes Bezout's identity.
4. The existence induction is strong induction, justified by well-ordering's least-counterexample reading.
5. $12$ is always two $2$s and one $3$: same primes, same multiplicities, any order.
</div>
</details>

:::

## 5. Congruence Classes and the Rings of Remainders

**Definition.** Fix $n \geq 2$... more precisely, fix a nonzero
counting number $n$. Declare $a \equiv b \pmod n$ when $n \mid (a
\ominus b)$ in $\mathbb{Z}$; equivalently (Stage B's remainder theorem),
$a$ and $b$ have the same remainder upon division by $n$. This is an
equivalence relation (Section A's checklist verifies it), and the
classes are written $\mathbb{Z}/n$: there are exactly $n$ of them, the
classes of $0, 1, \dots, n \ominus 1$.

**Theorem (the ring of remainders).** Addition and multiplication on
$\mathbb{Z}/n$, performed on representatives, are well-defined; with
them, $\mathbb{Z}/n$ inherits associativity, commutativity, identities
(the classes of $0$ and $1$), distributivity, and additive inverses:
every law of $\mathbb{Z}$ except the multiplicative cancellation.

*Proof.* Well-definedness is Stage 1's method one more time: if $a
\equiv a'$ and $b \equiv b'$, then $a + b \equiv a' + b'$ and $a \times
b \equiv a' \times b' \pmod n$, the first by direct reduction, the
second by expanding $a = a' + n \times r$, $b = b' + n \times s$ and
distributing. The laws lift from $\mathbb{Z}$ by the same
representative bookkeeping. Cancellation fails: in $\mathbb{Z}/6$, $2
\times 3 = 2 \times 0$ but $3 \neq 0$. $\blacksquare$

**Definition.** A class $[a]$ is a **unit** in $\mathbb{Z}/n$ when some
class $[b]$ satisfies $[a] \times [b] = [1]$.

**Theorem (the units of $\mathbb{Z}/p$).** For a prime $p$, every
nonzero class of $\mathbb{Z}/p$ is a unit; for composite $n$, some
nonzero class is not.

*Proof.* If $[a] \neq [0]$ in $\mathbb{Z}/p$, then $p \nmid a$, so the
greatest common divisor of $p$ and $a$ is $1$ (a divisor of the prime
$p$ is $1$ or $p$, and $p \nmid a$ excludes $p$). Bezout gives $p
\times u + a \times v = 1$; reduce mod $p$: $a \times v \equiv 1$, so
$[v]$ is the inverse of $[a]$. For composite $n = a \times b$ with
$1 < a, b < n$: the classes $[a]$ and $[b]$ are nonzero with $[a]
\times [b] = [0]$; a unit multiplied by anything cannot give zero
(multiply the equation by the unit's inverse), so $[a]$ is nonzero and
not a unit. $\blacksquare$

**Theorem (Fermat's little theorem).** For a prime $p$ and any $a$:
$a^p \equiv a \pmod p$. In particular, if $p \nmid a$, then $a^{p
\ominus 1} \equiv 1 \pmod p$.

*Proof.* Induction on $a$. Base: $0^p = 0 \equiv 0$. Step: assume
$a^p \equiv a$. Then $(a + 1)^p = a^p + 1 + \sum$ of the middle binomial
terms $B(p, k) \, a^k$ for $0 < k < p$ (the binomial law, Stage B).
Each middle coefficient $B(p, k)$ is divisible by $p$: $B(p, k) = p
\times (p \ominus 1) \times \dots \times (p \ominus k + 1) / k!$ times
$k!$, so $p \times B(p, k) \ominus$-cancelled form shows $p$ divides the
numerator product $p \times (p \ominus 1) \times \dots \times (p
\ominus k + 1)$ while none of $k, k \ominus 1, \dots, 1$ (all smaller
than $p$) is divisible by the prime $p$ (Euclid's lemma, applied factor
by factor); as $p$ is prime it divides the product only through its own
factor, so $p \mid B(p, k)$. Hence $(a + 1)^p \equiv a^p + 1 \equiv a + 1 \pmod p$. For the final claim: $a \not\equiv 0$ means $[a]$ is a
unit, and $[a]^p = [a]$ lets the unit $[a]^{\ominus 1}$ cancel one
copy. $\blacksquare$

**Ponder.** Before reading on: $\mathbb{Z}/p$'s arithmetic does
everything $\mathbb{Q}$'s does, except subtraction is ordinary and
division works only by nonzero classes. Which of the two systems is
"bigger", and what does that question even mean now that numbers are
classes?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Size is a Stage A bijection question, and here it has a twist:
$\mathbb{Q}$ is infinite (it contains the copy of $\mathbb{Z}$, and
more), while $\mathbb{Z}/p$ has exactly $p$ classes. But the deeper
answer is that "bigger" is the wrong question; the right question is
"which laws hold". $\mathbb{Q}$ has cancellation and order; $\mathbb{Z}/p$
has cancellation but its order wraps into a cycle. Stage L's algebra
stage is precisely the study of systems by their laws rather than their
contents, and these two are the first pair of contrasting specimens.

</div>
</details>

:::note[Quick check]

1. Why does $\mathbb{Z}/6$ fail cancellation where $\mathbb{Z}/5$ does
   not?
2. State the units theorem for prime and composite moduli.
3. Which two earlier results does Fermat's proof chain together?
4. Compute $2^{4} \bmod 5$ and check Fermat's conclusion for $a = 2$,
   $p = 5$.
5. How many classes does $\mathbb{Z}/n$ have, and what are their
   standard representatives?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">
1. $6 = 2 \times 3$ is composite, so $[2]$ and $[3]$ are nonzero non-units with $[2] \times [3] = [0]$: cancellation fails exactly when nonzero zero-divisors exist.
2. Prime: every nonzero class is a unit; composite: at least one nonzero class is not.
3. The binomial law and Euclid's lemma (via Bezout).
4. $2^4 = 16 = 3 \times 5 + 1$, so $2^4 \equiv 1 = 2^{5 \ominus 1}$: matches Fermat.
5. Exactly $n$ classes, represented by $0, 1, \dots, n \ominus 1$.
</div>
</details>

:::

## Stage Gate
## Stage Gate



Before Stage D, answer these five without notes. Pass mark: four. Each is
drawn from this page's quick checks; a failed gate names the section to
reread (1: Section 1; 2: Section 2; 3: Section 3; 4: Section 4; 5:
Section 5).

:::caution[Pass mark: four of five]

1. State the difference-class definition of $\mathbb{Z}$ and the
   well-definedness obligation both operations must discharge.
2. State density of $\mathbb{Q}$, and name the property Stage D must add.
3. Prove from scratch: there is no rational with square equal to $3$.
4. State Bezout's identity and Euclid's lemma.
5. State the units theorem for $\mathbb{Z}/p$ and Fermat's little
   theorem.


<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">
1. $(a, b) \sim (c, d)$ when $a + d = c + b$; classes of such pairs; addition and multiplication must be shown independent of representatives.
2. Between any two rationals lies a third; Stage D must add completeness: every hole in the line is filled.
3. If $p \times p = 3 \times q \times q$ in lowest terms, $p \times p$ divisible by $3$ forces $p$ divisible by $3$ (if $3 \mid p \times p$ with $p$ prime factorisation, Euclid's lemma with the prime $3$), write $p = 3 \times h$, substitute, cancel, $q$ divisible by $3$: contradicts lowest terms.
4. $a \times u + b \times v = \gcd(a, b)$; and a prime dividing a product divides a factor.
5. $\mathbb{Z}/p$: every nonzero class is a unit; and $a^p \equiv a \pmod p$ (so $a^{p \ominus 1} \equiv 1$ when $p \nmid a$).
</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several results
and require full written arguments.

1. Prove the **multiplicative well-definedness** of $\mathbb{Z}$ in
   full: expand $(a + b')(c + d') + (a + d')(c + b')$ and $(a' + b)(c +
   d) + (a' + d)(c + b')$ term by term with Stage B's distributivity,
   and show the hypotheses $a + b' = a' + b$ and $c + d' = c' + d$ make
   the expansions equal.
   *(Hint: expand everything to eight monomials on each side; the
   hypotheses substitute for the mixed terms $a \times d'$ and
   $a' \times d$.)*
2. Prove **trichotomy** for $\mathbb{Z}$: for all $x, y$, exactly one
   of $x < y$, $x = y$, $y < x$ holds, where $<$ and $=$ are lifted
   from representatives.
   *(Hint: reduce to representatives and to Stage B's trichotomy for
   the counting numbers; each of the three cases lifts, and the three
   lifted outcomes are mutually exclusive because the defining
   inequalities in $\mathbb{N}$ are.)*
3. Prove **Euclid's algorithm in the reverse direction**: if $d$
   divides both $a$ and $b$, then $d$ divides every remainder in the
   Euclidean sequence, and conclude the last nonzero remainder is the
   *greatest* common divisor in the divides-everything sense.
   *(Hint: division with remainder writes each $r_j = $ (multiple of
   $r_{j+1}$) $+ \, r_{j+2}$; a common divisor of $r_{j+1}$ and
   $r_{j+2}$ divides the left side.)*
4. Solve the **linear Diophantine equation** $a \times u + b \times v =
   c$ in integers: prove it has a solution exactly when the greatest
   common divisor of $a$ and $b$ divides $c$, and find all solutions
   when it does.
   *(Hint: Bezout gives the gcd case; multiply through by the right
   factor for general $c$; for all solutions, subtract one solution
   from another and use the structure of the kernel, which Problem 1's
   cancellation supports.)*
5. Prove **no zero divisors in $\mathbb{Z}/p$**: for a prime $p$, if
   $[a] \times [b] = [0]$ then $[a] = [0]$ or $[b] = [0]$, using Stage
   C's Euclid's lemma on representatives. Conclude that cancellation
   holds: $[a] \times [c] = [b] \times [c]$ with $[c] \neq [0]$ forces
   $[a] = [b]$.
   *(Hint: $[a] \times [b] = [0]$ means $p$ divides $a \times b$ on
   representatives; Euclid's lemma splits into the two cases, and each
   case says the corresponding class is zero.)*

## Where to Go Next

Stage D (The continuum) answers the question Section 3 planted: it
builds the real line from the rationals' order alone, by Dedekind cuts,
proves the line complete (every hole filled), and hands back the
diagonal's length.

**Next: [Stage D: The continuum](/17-core-course/stage-d-the-continuum/).**
