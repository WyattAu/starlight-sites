---
date: 2026-11-09T00:00:00+00:00
title: "Stage D: The continuum"
description: "The real line built from the rationals' order alone: Dedekind cuts, arithmetic and completeness proved, decimals and their repeating-characterisation, countability and Cantor's diagonal, ordinals with transfinite induction, and the axiom of choice adopted with Zorn's lemma and the well-ordering principle proved equivalent. The diagonal of Stage C finally gets its measure."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage D: The continuum", "url": "https://mathematics.wyattau.com/17-core-course/stage-d-the-continuum"}]
}
</script>

**The Defect.** Stage C proved that no rational measures the diagonal of
the unit square, while density says the rationals have no gaps between
their elements. Both are true, and together they are intolerable: the
diagonal is a length, lengths form a line, and a line with no gaps
between its points should contain every length on it. The naive
conjecture is that this is a technicality: "just add the missing
lengths". But what *is* a missing length? A symbol? An infinite decimal?
A limit of approximations? None of those can be the definition, because
each presupposes the line it is meant to create. The repair is Dedekind's
move, and it is characteristically backwards: a real number is *nothing
but* a cut in the rationals, a clean dividing of all rationals into left
and right. The line is not repaired. It is rebuilt, from the order alone,
and completeness comes out as a theorem instead of a hope.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
real number is a perfect way of splitting the rationals into below and
above; the set of all such splits is ordered, complete by construction,
contains every rational, measures every length including the diagonal,
and the same cut-and-climb machinery that builds it (ordinals,
transfinite induction, choice) becomes the toolkit for everything
after.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** Consumes Stage C (the rationals, their order and density, the
crisis) and Stage B (arithmetic, well-ordering, the recursion principle).
One declaration is adopted: the **axiom of choice** (Section 6), recorded
in the course map's axiom table alongside classical logic, and never
silently assumed. No debts are declared on this page; one is *paid*:
Stage B's recursion-principle debt, whose general form is Stage D's
transfinite recursion (Section 5), is discharged here in the course map's
ledger. Formal witnesses pause for this stage: the constructions live
past core Lean's built-ins, and resume when the course returns to
decidable ground.

## 1. Dedekind Cuts: the Line from Order Alone

**The naive conjecture.** A real number is an infinite decimal, or a
limit of rationals, or "whatever the diagonal measures". Each candidate
presupposes a notion of convergence or distance that belongs to the very
line being built. The repair uses only what already exists: the rationals
and their order. A length is fully described by which rationals fall
below it, so *be* that description.

**Definition (cut).** A **cut** is a set $\alpha \subseteq \mathbb{Q}$
such that: $\alpha \neq \varnothing$ and $\alpha \neq \mathbb{Q}$
(nonempty, proper); if $q \in \alpha$ and $p < q$ then $p \in \alpha$
(closed downward); and $\alpha$ has **no greatest element** (for every
$q \in \alpha$ some $r \in \alpha$ has $q < r$). The set of all cuts is
called $\mathbb{R}$.

**Definition (the embedding).** Each rational $q$ becomes the cut $q^* :=
\{r \in \mathbb{Q} : r < q\}$. Every property of cuts holds for $q^*$
by density of $\mathbb{Q}$ (Stage C: between any two rationals another),
so $\mathbb{Q}$ sits inside $\mathbb{R}$ without changing its arithmetic.

**Definition (order).** $\alpha \leq \beta$ means $\alpha \subseteq
\beta$ (as sets). This is an order: reflexive, antisymmetric (mutual
containment is set equality), transitive by chaining inclusions.

**Theorem (the order extends the rationals').** For rationals $p, q$:
$p < q$ if and only if $p^* \subsetneq q^*$.

*Proof.* If $p < q$, then $p \in q^*$ but $p \notin p^*$ (a cut has no
greatest element, so its own boundary point $p$ is excluded), giving
proper containment. Conversely, if $p^* \subsetneq q^*$, pick $r \in
q^*$ outside $p^*$; then $r < q$ and $r \geq p$, so $p \leq r < q$ gives
$p < q$. $\blacksquare$

**Ponder.** Before reading on: the definition insists a cut has no
greatest element. Why? Try defining cuts *with* greatest elements
allowed, and consider the set $\{r \in \mathbb{Q} : r \leq 1\}$ versus
$\{r \in \mathbb{Q} : r < 1\}$. Both should represent "one". What goes
wrong?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

With greatest elements allowed, the number $1$ would be cut twice: once
as the set ending at (and including) $1$, once as the set ending just
before it. Two distinct objects representing one number breaks
extensionality, the bedrock of Stage A. Excluding the greatest element
is the choice that makes each cut a *unique* description: the boundary
itself always lives on the right side, and the rationals embed exactly.
The alternative repair, quotienting by "cuts with the same boundary",
would work but adds a quotient stage for no benefit.

</div>
</details>

**Quick check.**

1. State the three conditions defining a cut.
2. Why does density of $\mathbb{Q}$ make the embedding $q \mapsto q^*$
   honest?
3. In the order on cuts, what does $\alpha \leq \beta$ mean set-wise?
4. Why is $p \notin p^*$ for any rational $p$?
5. Which Stage C theorem is *not* needed for the embedding?

*Answers:* **1.** Nonempty, proper, closed downward, no greatest
element. **2.** It ensures every cut boundary is approachable from
inside by rationals, so rationals and their cuts behave identically in
the order. **3.** $\alpha \subseteq \beta$. **4.** A cut contains only
rationals strictly below its boundary, and $p$ is the boundary of
$p^*$. **5.** Density (the embedding needs it); the crisis theorem is
not used here: the cut construction does not presuppose that holes
exist, only that they will be measured.

## 2. Arithmetic and Completeness: the Summit

**Definition (addition).** $\alpha + \beta := \{r + s : r \in \alpha,\
s \in \beta\}$.

**Theorem.** $\alpha + \beta$ is a cut; addition is commutative and
associative; $\alpha + 0^* = \alpha$; and $\alpha + (-\alpha) =
0^*$, where $-\alpha := \{r \in \mathbb{Q} : \text{some } s \notin
\alpha \text{ has } r < -s\}$.

*Proof.* Cut-hood: nonempty (both cuts are), proper (each element is a
sum with $r < $ (boundary of $\alpha$) and $s < $ (boundary of
$\beta$), so every element is below a rational bound outside), closed
downward (smaller sums come from smaller summands), no greatest element
(increase $s$ by density, keeping $r$ fixed). Commutativity is
commutativity of rational addition; associativity likewise. Identity:
$\alpha + 0^* = \{r + 0 : r \in \alpha\} = \alpha$ since every element
of a cut can be increased within it. Inverse: the negative cut is a
genuine cut, and $r + s = 0$ with $r \in \alpha$, $s \notin \alpha$
defines exactly the pairing $0^*$ requires; the no-greatest-element
condition on both sides closes the boundary. The full element-chase for
the inverse is Problem 1. $\blacksquare$

**Definition (multiplication).** For positive cuts $\alpha, \beta$
(those containing some $q > 0$): $\alpha \times \beta := \{r \times s :
r \in \alpha, s \in \beta, r > 0, s > 0\} \cup \{q \in \mathbb{Q} : q
\leq 0\}$. Multiplication of arbitrary cuts is then defined by the
sign cases, using $-\alpha$ from Section 2, exactly as sign cases work
for integers.

**Theorem.** Multiplication of positive cuts is a cut; it is
commutative, associative, distributes over addition; $1^*$ is the
multiplicative identity; and every positive cut has a multiplicative
inverse.

*Proof.* Cut-hood and the laws mirror the addition proof with rational
multiplication in place of addition; each rational law used is Stage C's
(Theorem, inherited from Stage B). The inverse of a positive $\alpha$
is $-\{q \in \mathbb{Q} : \text{some } s \in \alpha \text{ has } q <
1/s\}$ (the reciprocals of the *non*-members, negated); verifying
$\alpha \times \alpha^{-1} = 1^*$ is a two-sided density chase and is
Problem 2. $\blacksquare$

**Theorem (completeness: the summit).** Every nonempty set of cuts,
bounded above, has a **least upper bound** in $\mathbb{R}$.

*Proof.* Let $T$ be a nonempty set of cuts, bounded above by a cut
$\beta$. Define $\sigma := \bigcup T$, the union of all cuts in $T$.
$\sigma$ is a set of rationals; claim it is a cut. Nonempty: $T$ is
nonempty, so $\sigma$ contains a cut's worth. Proper: every element of
$\sigma$ lies in some member of $T$, hence below $\beta$'s boundary, so
$\sigma \subseteq \beta \neq \mathbb{Q}$; and $\sigma$ cannot be all of
$\mathbb{Q}$ or no $\beta$ bounded it. Closed downward: if $r \in
\sigma$ and $p < r$, then $r$ lies in some $\alpha \in T$, and $\alpha$
closed downward puts $p \in \alpha \subseteq \sigma$. No greatest
element: if $r \in \sigma$, pick $\alpha \in T$ with $r \in \alpha$;
$\alpha$ has no greatest element, so some $r' \in \alpha$ has $r <
r'$, and $r' \in \sigma$. So $\sigma \in \mathbb{R}$. It is an upper
bound: $\sigma$ contains every member of $T$. It is least: any other
upper bound $\beta'$ contains every member of $T$, hence contains their
union $\sigma$. $\blacksquare$

This is the theorem the whole course has been climbing toward, and it is
three paragraphs. The reason it is so short: Dedekind's definition made
"least upper bound" mean "the union", and unions are easy.

**Theorem (the crisis resolved).** There is a real number $\alpha$
with $\alpha \times \alpha = 2$, that is, the diagonal of the unit
square has a measure.

*Proof.* Define $\alpha := \{q \in \mathbb{Q} : q < 0 \text{ or } q
\times q < 2\}$. Then $\alpha$ is a cut (nonempty, proper, downward
closed; no greatest element, because for $q > 0$ in $\alpha$ with $q
\times q < 2$, some larger rational still has square below $2$, by
density and the continuity of squaring on small rational steps.
Explicitly, if $q \times q < 2$ then $q < h$ for a rational $h$ with
$h \times h < 2$, constructed by taking $h$ slightly larger than $q$;
the explicit rational is $(q \times 2 + 2)/(q + 2)$, and checking $h
\times h < 2$ is Stage B algebra). Now compute $\alpha \times \alpha$
with the positive-cut definition: every element below a positive $q$
with $q \times q < 2$ paired with itself gives products below $2$, and
every positive rational $s$ with $s \times s < 2$ lies in $\alpha$;
the cut $\alpha \times \alpha$ is exactly $\{q \in \mathbb{Q} : q <
2\}$'s positive part, which is $2^*$. Hence $\alpha \times \alpha =
2^*$: the diagonal measures $\alpha$. $\blacksquare$

The cut $\alpha$ is, of course, what the world calls $\sqrt{2}$. Stage C
proved no rational does this job; the cuts do it without strain, and
that is the entire justification of the construction.

**Quick check.**

1. State the three cut conditions.
2. What is $q^*$, and why does $\mathbb{Q}$ embed?
3. State completeness in one sentence, and identify which object in
   the proof *is* the supremum.
4. Why is the completeness proof so short?
5. Which Stage C theorem does Section 2's last theorem retire?

*Answers:* **1.** Nonempty, proper, downward closed, no greatest
element. **2.** The cut $\{r : r < q\}$; every rational law holds in
its cut, so the embedding is faithful. **3.** Every nonempty
bounded-above set of cuts has a least upper bound; the supremum is the
union of the set. **4.** Dedekind's definition made "least upper bound"
mean "the union of the cuts", and unions of downward-closed proper
sets are themselves cuts. **5.** The crisis theorem: the diagonal now
has a real measure.

## 3. Decimals: Every Real Gets a Name

**Definition.** For a real $x$ and a counting number $k$, define the
$k$-th digit function by $d_k(x) :=$ the units digit of
$\lfloor 10^k \times x \rfloor \bmod 10$, where $\lfloor \cdot \rfloor$
on cuts is defined as the greatest integer below (a cut-versus-cut
application of completeness to the set $\{z \in \mathbb{Z} : z \leq
x\}$, which is bounded above when $x$ is bounded below by an integer,
and greatest elements exist for integer-bounded cuts).

**Theorem (decimal expansion).** Every real $x \geq 0$ satisfies
$x = \lfloor x \rfloor + \sum_{k=1}^{\infty} d_k(x) \times 10^{-k}$,
where the infinite sum means the least upper bound of its finite
partial sums (which exist by completeness, applied to the partial sums
as a bounded set: bounded because each digit contributes less than
$10^{-k}$, and $\sum 10^{-k} < 1$ by Stage B's geometric sum).

*Proof.* The finite truncation through $k$ digits equals
$\lfloor 10^k x \rfloor / 10^k$ exactly (the digit definitions
telescope), and the truncations are nondecreasing in $k$ (each added
digit refines, never lowers, the value), each within $10^{-k}$ of $x$.
The partial sums therefore form a bounded increasing sequence of
rationals; by completeness their least upper bound $\ell$ exists, and
$\ell \leq x \leq \ell + 10^{-k}$ for every $k$; since $10^{-k}$
shrinks with no positive floor (Stage B's Archimedean property applied
to the denominators), $\ell = x$. $\blacksquare$

**Theorem (repeating means rational).** A decimal expansion is
eventually periodic exactly when the number it names is rational.

*Proof.* One direction: a rational $p/q$ in lowest terms has decimal
digits driven by the remainders of $10^k \times p$ upon division by
$q$; remainders take values in a finite set (Stage B's remainder
theorem bounds them below $q$), so by the pigeonhole principle some
remainder recurs, and from that point the digits repeat with period at
most $q$. Conversely, an eventually periodic expansion is a finite
decimal plus a geometric series with rational ratio (Stage B's geometric
sum identity closes it in one line), hence rational.
$\blacksquare$

**Ponder.** Before reading on: does $0.999\ldots$ equal $1$?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Yes, and the proof is one line of this stage: $0.999\ldots$ names the
least upper bound of the partial sums $0.9, 0.99, 0.999, \ldots$, each
of which is $1 - 10^{-k}$; the least upper bound of those is $1$, since
anything below $1$ leaves a gap that $10^{-k}$ eventually beats
(Archimedean property). The feeling that "$0.999\ldots$ should be just
under $1$" is the instinct that there is a *last* partial sum; there is
none. The sequence has no final member, and its supremum is the limit
of the names, not the last name. This is the first place the
completeness theorem does visible work, and it does it on a famous
dispute.

</div>
</details>

**Quick check.**

1. What does the infinite sum in the decimal theorem *mean*, given that
   Stage B only ever added finitely many terms?
2. Why do the partial sums have a least upper bound?
3. Which Stage B theorem proves that a rational's decimal repeats?
4. State the one-line proof that $0.999\ldots = 1$.
5. Why can two different decimals name the same number, and what is the
   only way?

*Answers:* **1.** The least upper bound of the finite partial sums,
which exists by completeness. **2.** They are nondecreasing and
bounded above by $\lfloor x \rfloor + 1$. **3.** The pigeonhole
principle on the division remainders. **4.** It is the least upper
bound of $1 - 10^{-k}$, which is $1$. **5.** Only when one expansion
ends in all $9$s and the other is its terminating twin; the diagonal
argument of Section 4 must therefore avoid $9$s.

## 4. Cardinality: Counting the Uncountable

**Definition.** Sets $X$ and $Y$ are **equipotent** (written $X \cong
Y$) when a bijection exists between them. $X$ is **countable** when $X
\cong [n]$ for some counting number $n$, or when $X \cong \mathbb{N}$;
**uncountable** when it is not countable.

**Theorem (countable catalogues).** $\mathbb{N}$, $\mathbb{Z}$, and
$\mathbb{Q}$ are each countable ($\mathbb{Z} \cong \mathbb{N}$ and
$\mathbb{Q} \cong \mathbb{N}$).

*Proof.* $\mathbb{Z} \cong \mathbb{N}$: interleave, mapping the class
of $(a, b)$ to a single counting number by the pairing recipe (the map
$(a, b) \mapsto 2^a \times 3^b$ composed with a fixed bijection
back from the image is an injection, and $\mathbb{Z}$ is infinite, so
Stage 4's Schröder-Bernstein below finishes the bijection).
$\mathbb{Q} \cong \mathbb{N}$: in lowest terms with positive
denominator, map the fraction $p/q$ to $2^{p} \times 3^{q}$ times a
sign factor; again an injection into $\mathbb{N}$, with $\mathbb{Q}$
infinite. $\blacksquare$

**Theorem (Schröder-Bernstein).** If $X \cong$ (injects into) $Y$ and
$Y$ injects into $X$, then $X \cong Y$.

*Proof.* Given injections $f: X \to Y$ and $g: Y \to X$, call an
element of $X$ *bad* if tracing backwards through $g$ and $f$
alternately eventually fails on the $X$ side or runs forever starting
from $Y$'s side; define the piecewise map $h$ that follows $g^{-1}$ on
bad elements (where defined) and $f$ elsewhere. The chain decomposition
argument shows $h$ is a well-defined bijection: on bad elements $h =
g^{-1}$ lands in $Y$'s unmatched side; on good elements $h = f$ lands
in $Y$'s matched side; and the two images partition $Y$. The case
analysis is Problem 3. $\blacksquare$

**Theorem (Cantor: the diagonal).** No function $f: \mathbb{N} \to
\mathbb{R}$ is surjective onto the interval $[0, 1]$ of reals.

*Proof.* Suppose $f$ lists reals $x_0, x_1, x_2, \ldots$ in $[0, 1]$,
each with a decimal expansion not ending in recurring $9$s (Section 3
shows every real has exactly one such expansion, choosing the
terminating form when both exist). Build $d$ by: the $k$-th digit of
$d$ is $5$ if the $k$-th digit of $x_k$ is not $5$, and $6$ otherwise.
Then $d \in [0, 1]$ (its digits are $5$ or $6$, so $0 < d < 1$), and
$d$ differs from $x_k$ at digit $k$ for every $k$, differing at a
digit other than $9$ and not $0$ guarantees genuinely different
numbers, dodging the dual-expansion trap. So $d$ is a real no $k$
names. $\blacksquare$

**Theorem.** The interval $[0, 1]$ is uncountable; so is
$\mathbb{R}$.

*Proof.* Cantor's diagonal: no listing covers $[0, 1]$. And
$\mathbb{R} \cong (0, 1)$ (the map $x \mapsto$ the arctangent-style
bijection via cuts is Problem 4), so uncountability transfers.
$\blacksquare$

**Ponder.** Before reading on: $\mathbb{Q}$ is countable, $[0, 1]$ is
not, yet between any two rationals the rationals are dense and every
rational sits inside $[0, 1]$. Try to say where the extra elements
hide.

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

They hide between the rationals: the irrationals are themselves
uncountable, and no listing of the rationals can be thickened to cover
them. The intuitive picture of "dots on a line" hides the difference
between a dense set and a complete one, which is precisely Stage C's
warning repeated with cardinality attached: density is about between,
completeness is about every point. The diagonal argument does not
merely say the listing missed one point; run it on any listing, and it
manufactures a different missed point each time: uncountably many
manufactured points, no listing survives.

</div>
</details>

**Quick check.**

1. Define countable and uncountable.
2. Which theorem lets an injection plus an injection become a
   bijection?
3. Why does the diagonal construction choose digits from $\{5, 6\}$?
4. Is the set of irrationals countable? Justify in one sentence.
5. Which is bigger, $\mathbb{Q}$ or $\mathbb{N}$? Justify with a
   theorem.

*Answers:* **1.** Countable: in bijection with some $[n]$ or with
$\mathbb{N}$; uncountable: not. **2.** Schröder-Bernstein. **3.** To
dodge the dual-decimal expansion trap: a digit change outside
$\{0, 9\}$ forces a genuinely different number. **4.** No: if the
irrationals in $[0, 1]$ were countable, their union with the countable
rationals would count $[0, 1]$, contradicting Cantor. **5.** Equal in
size: $\mathbb{Q} \cong \mathbb{N}$ by the injection-and-Schröder-
Bernstein argument.

## 5. Ordinals and Transfinite Induction: Paying Stage B's Debt

**Definition.** A **well-ordered set** is a set with an order in which
every nonempty subset has a least element. Two well-ordered sets have
the same **order type** when a bijection exists that preserves order in
both directions; an **ordinal** is an order type of a well-ordering.
The empty set's type is $0$; a single point's type is $1$; the type of
$\mathbb{N}$ in its natural order is called $\omega$.

**Theorem (transfinite induction).** Let $P$ be a proposition about the
members of a well-ordered set $W$. If: $P$ holds of the least element
of $W$; and for every $w \in W$, the truth of $P$ on *all* smaller
members implies $P(w)$; then $P$ holds throughout $W$.

*Proof.* Suppose $P$ fails somewhere; the set of failures is nonempty
and has a least member $w_0$ (well-ordering). Every member smaller
than $w_0$ satisfies $P$ (any failure would be smaller than the least
failure). The second hypothesis applies verbatim and gives $P(w_0)$,
contradicting minimality. $\blacksquare$

**Theorem (transfinite recursion; Stage B's debt discharged).** For
any recipe that defines a value at $w$ from the values at all smaller
members, there exists exactly one function on $W$ whose value at each
$w$ is given by that recipe.

*Proof sketch.* The full proof builds the function's graph as the
union of all partial approximations (sets of pairs closed under the
recipe), proving by transfinite induction that the approximations
agree wherever they overlap, so the union is a single function; the
argument is Stage B's recursion-principle proof generalised past
$\mathbb{N}$'s single chain into arbitrary well-orderings, where the
"step" may have no immediate predecessor (a **limit position**).
$\blacksquare$

**Ponder.** Before reading on: induction on $\mathbb{N}$ always has a
step "from the previous one". In a general well-ordering there may be
positions with no immediate predecessor (think of $\omega$ itself),
which comes after *all* natural numbers but has none directly before
it. Why does transfinite induction not need a "previous one"?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Because the hypothesis is "all smaller members", not "the immediately
previous member". A limit position $w$ has infinitely many smaller
members, and the hypothesis supplies $P$ on *all of them*; that is
exactly enough to conclude $P(w)$, which is what makes the whole set
closed under the implication. The base case is just the least member's
version of the same rule with an empty "smaller" set. Nothing in the
argument ever needed a step to have a predecessor; that was an
accident of $\mathbb{N}$'s simple shape.

</div>
</details>

**Quick check.**

1. Define well-ordered set and ordinal.
2. State transfinite induction.
3. What is a limit position, and why is it harmless?
4. Which Stage B debt does this section discharge, and in which two
   words?
5. Why does the proof of transfinite induction mirror the proof of
   well-ordering's use in Section 3?

*Answers:* **1.** Well-ordered: every nonempty subset has a least
member; ordinal: the order type of a well-ordering. **2.** Base at the
least member; at each $w$, truth on all smaller members gives truth at
$w$; conclude truth everywhere. **3.** A position with no immediate
predecessor; the "all smaller members" hypothesis covers it without a
predecessor. **4.** The recursion principle; paid. **5.** Both are
least-counterexample arguments; the counterexample set is well-ordered
so a least failure exists and contradicts the step hypothesis.

## 6. Choice, Zorn's Lemma, and the Well-Ordering Principle

**The axiom (choice), adopted.** For every family of nonempty sets
there exists a function choosing one member from each set in the
family. This course adopts choice as an axiom: it is recorded in the
course map's axiom table, it is never silently assumed, and every use
of it is flagged. Two of its famous equivalents are proved below.

**Theorem (Zorn's lemma).** Let $S$ be a partially ordered set in
which every chain (a subfamily any two of whose members are
comparable) has an upper bound in $S$. Then $S$ has a maximal element
(an element with nothing strictly above it).

*Proof.* Suppose $S$ has no maximal element. Then every chain $C$ has
strictly larger candidates: the upper bounds of $C$ are not maximal,
so for each chain there exists a member strictly above the whole
chain. Using choice, select one such strict upper bound above each
chain, uniformly. Now build a chain by transfinite recursion: start
anywhere; at successor positions, take the selected strict upper bound
of what is built; at limit positions, the built family is a chain (the
construction preserves comparability at every stage), so take its
selected strict upper bound. This climbs forever, producing as many
distinct members of $S$ as there are ordinals up to any fixed
well-ordering's type. But $S$ is a set: choosing a well-ordering of a
set large enough to outrun $S$ (which exists, by the same transfinite
machinery) makes the climb enumerate more distinct members than $S$
contains. Contradiction; so a maximal element exists.
$\blacksquare$

**Theorem (Zorn implies well-ordering).** Every set admits a
well-ordering.

*Proof.* For a set $X$, let $S$ be the set of all pairs $(Y, <_Y)$
where $Y \subseteq X$ and $<_Y$ well-orders $Y$ (nonempty: singletons,
and $\varnothing$). Order $S$ by: $(Y, <_Y) \leq (Y', <_{Y'})$ when
$Y \subseteq Y'$, the orders agree on $Y$, and every element of $Y'
\setminus Y$ comes after every element of $Y$. Every chain in $S$ has
an upper bound: the union of the chain's sets, ordered by the union of
the chain's orders (comparability within the chain makes this a
well-ordering: any nonempty subset of the union sits inside one member
of the chain, which is well-ordered). Zorn delivers a maximal
$(M, <_M)$. If $M \neq X$, pick $x \in X \setminus M$ and append it
after all of $M$, a strictly larger well-ordering, contradicting
maximality. So $M = X$: $X$ is well-ordered. $\blacksquare$

**Theorem (well-ordering implies choice).** If every set can be
well-ordered, then every family of nonempty sets has a choice
function.

*Proof.* Well-order the union of the family; define the choice
function to pick, from each set in the family, its least member in
that well-ordering (least exists: the set is nonempty and inherits the
well-ordering). $\blacksquare$

**The honest cost.** Choice purchases the basis theorem (Stage F), the
maximal ideal theorem (Stage L), and Tychonoff's theorem (Stage H),
each of which the map shows spending it. It also purchases theorems
that offend intuition, of which the Banach-Tarski decomposition is the
famous specimen. The course adopts choice because the working
mathematics of the later stages spends it at every turn, and because
the axiom table keeps the purchase visible.

**Quick check.**

1. State the axiom of choice, and name its two proved equivalents.
2. What is a chain in a partially ordered set?
3. What does Zorn's proof climb with, and what stops the climb?
4. Why does the union of a chain of well-orderings remain
   well-ordered?
5. Name two later-stage theorems that spend choice, and one theorem
   that shows its cost.

*Answers:* **1.** Every family of nonempty sets admits a choice
function; equivalents: Zorn's lemma and the well-ordering principle.
**2.** A subfamily whose members are pairwise comparable. **3.** The
climb uses choice-selected strict upper bounds at every ordinal
position; the climb is stopped by the set-size barrier (it outruns the
set). **4.** Any nonempty subset of the union lies within one member
of the chain, which is well-ordered, so it has a least member.
**5.** Spend: the basis theorem (Stage F), maximal ideals (Stage L),
Tychonoff (Stage H). Cost: Banach-Tarski.

## Stage Gate

Before Stage E, answer these five without notes. Pass mark: four. Each
is drawn from this page's quick checks; a failed gate names the section
to reread (1: Section 1; 2: Section 2; 3: Section 3; 4: Sections 4 and
5; 5: Section 6).

1. State the cut conditions and why no-greatest-element is required.
2. State completeness, and what object the proof constructs as the
   supremum.
3. Where does the diagonal construction hide from the dual-expansion
   trap?
4. State transfinite induction, and name the Stage B debt Section 5
   discharges.
5. State the axiom of choice, Zorn's lemma, and which theorem proves
   which.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** A cut is a nonempty proper downward-closed set of rationals with
no greatest element; without no-greatest-element, each boundary would
produce two cuts for one number. **2.** Every nonempty
bounded-above set of cuts has a least upper bound; the proof constructs
the union of the set, which is itself a cut and is the least upper
bound. **3.** The diagonal digits are chosen from $\{5, 6\}$, never $0$
or $9$, so the manufactured number differs from every listed number
regardless of which of its two expansions is compared. **4.** Base at
the least member; truth on all smaller members gives truth at each
member; the discharged debt is Stage B's recursion principle, whose
general form is transfinite recursion. **5.** Choice: every family of
nonempty sets has a choice function; Zorn: every chain-bounded poset
has a maximal element; the proof shows choice (with transfinite
machinery) implies Zorn, and Zorn implies well-ordering, which implies
choice.

</div>
</details>

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove that the negative cut $-\alpha$ of Section 2 is a cut, and
   that $\alpha + (-\alpha) = 0^*$ by the element chase indicated in
   the section.
   *(Hint: for the identity, show every element of $0^*$ is a sum
   $r + s$ with $r \in \alpha$, $s \notin \alpha$; density picks such
   $s$ for every $r$ and Problem 1's own case analysis bounds the
   pairings.)*
2. Prove that every positive real has a square root: for $x > 0$,
   define $\alpha := \{q \in \mathbb{Q} : q < 0 \text{ or } q \times q
   < x \text{ on rationals}\}$ and show $\alpha$ is a cut with
   $\alpha \times \alpha = x^*$.
   *(Hint: mirror the $\sqrt{2}$ proof of Section 2; the no-greatest-
   element condition needs the explicit slightly-larger rational
   construction.)*
3. Prove that the decimal expansion of $1/3$ is
   $0.333\ldots$ by the remainder-pigeonhole argument, and that the
   expansion is repeating with period $1$.
   *(Hint: the remainders of $10^k \times 1$ upon division by $3$ are
   $1, 1, 1, \ldots$; apply Stage B's remainder theorem and Section
   3's repeating-means-rational theorem in reverse.)*
4. Prove: the set of all subsets of $\mathbb{N}$ is uncountable, using
   the bijection between subsets and their characteristic functions
   into $\{0, 1\}^{\mathbb{N}}$, by a diagonal argument on the
   functions.
   *(Hint: given any list $f_0, f_1, \ldots$ of functions $\mathbb{N}
   \to \{0, 1\}$, define $g(n) := 1 - f_n(n)$ and check $g$ differs
   from each $f_k$ at $k$; this is Stage A's power-set diagonal in
   function clothing.)*
5. Use Zorn's lemma to prove: every set $X$ admits a well-ordering,
   by applying Zorn to the poset of well-ordered subsets as in
   Section 6, writing out the three checks (nonempty, chains have
   upper bounds, the maximal element covers $X$) in full.
   *(Hint: the union of a chain of well-orderings is well-ordered
   because any nonempty subset of the union lives inside one member of
   the chain; the maximality argument is the append-one-point
   contradiction.)*

## Where to Go Next

Stage E (Completing algebra) plants the flag at the edge of the
counting world: polynomials as formal objects whose roots may not exist
in $\mathbb{R}$, the complex numbers built as pairs with a
multiplication rule, and the fundamental theorem of algebra *declared*
with Stage K named as its future payee. The debt ledger opens its
longest entry, and the structural stages begin. The page
`stage-e-completing-algebra.md` carries it.
