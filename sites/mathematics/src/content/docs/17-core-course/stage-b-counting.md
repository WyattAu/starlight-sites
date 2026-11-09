---
date: 2026-11-09T00:00:00+00:00
title: "Stage B: Counting"
description: "Counting rebuilt from five declarations: the Peano axioms, induction as a proof technique and its classic failure dissected, addition and multiplication defined recursively with their laws proved as theorems, division with remainder, and counting arguments from bijections to the pigeonhole principle and the binomial theorem. Every arithmetic fact you have memorised becomes a theorem, and the first Lean formal witnesses appear."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage B: Counting", "url": "https://mathematics.wyattau.com/17-core-course/stage-b-counting"}]
}
</script>

**The Defect.** You know that $3 + 4 = 7$. You know it the way you know a
song: you cannot remember learning it, and you cannot produce a reason for
it. Asked why $a + b = b + a$, you will say "it is obvious", and this
course has already banned that word, so the honest answer is: you do not
know it, you have merely repeated it many times. Stage B dismantles and
rebuilds. Counting itself is defined by five declarations. Addition is
*defined* by two lines. Then every school fact, without exception, is
proved. The naive conjecture of this stage is that arithmetic facts are
observations, collected like experiments. The monster is a proof that
looks exactly like a correct induction and concludes that all horses have
the same colour. The repair is a rule about the base case, and after it,
induction becomes the sharpest tool you own.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">One
starting object, one always-step, and one induction licence generate every
counting number; addition and multiplication are then *defined* by two
lines each, and every law of school arithmetic, without exception, falls
out as a theorem proved by induction, with division-with-remainder the
crown that Stage C will use to break the line open. (Forward-honesty
marker: Stage C is future content; nothing below depends on it.)</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** This page consumes Stage A: sets, relations, functions,
bijections, and the four proof shapes. It adopts one new batch of
declarations, the Peano axioms of Section 1, stated in full, and it
declares exactly one debt: the recursion principle of Section 2, pointed
at Stage D's transfinite-recursion chapter as its payee (the course map's
ledger shows the debt). The Lean boxes introduced in this page are formal
witnesses: each is a compiling proof, extracted and recompiled by the
proof job on every push. They are optional; the prose proofs stand alone.

## 1. The Peano Axioms: What Counting Is

**The naive conjecture.** Counting is a fact about the world: there just
*are* numbers, and they behave. But "they behave" is not a licence this
course accepts, and different civilisations counted differently (no zero;
no place value; no line, but a circle of numerals). The repair: define the
counting numbers by exactly what they must do, and prove the rest.

**Definition (the counting numbers).** The following five declarations
define a system consisting of a set $\mathbb{N}$ (the **counting
numbers**), a distinguished element $0$ (read "zero"), and a function
$S: \mathbb{N} \to \mathbb{N}$ (read "**successor**"; think of $S(n)$ as
"the next counting number after $n$"):

1. $0 \in \mathbb{N}$.
2. For every $n \in \mathbb{N}$, the successor $S(n) \in \mathbb{N}$.
3. $0$ is not the successor of any counting number.
4. Distinct counting numbers have distinct successors: if $S(a) = S(b)$
   then $a = b$.
5. **Induction.** For any proposition $P$ about counting numbers: if
   $P(0)$ holds, and $P(n)$ implies $P(S(n))$ for every $n$, then $P(n)$
   holds for every $n \in \mathbb{N}$.

**Notation.** Define names: $1 := S(0)$, $2 := S(1)$, $3 := S(2)$, and so
on when needed. These are abbreviations for iterated successors, not new
objects.

**Definition (the induction technique).** Axiom 5 is also a *method*. To
prove $\forall n,\ P(n)$: prove **the base case** $P(0)$; assume
$P(n)$ (the **induction hypothesis**) and prove $P(S(n))$ (the
**inductive step**). The axiom guarantees this suffices. Induction is
Stage B's engine: every law of arithmetic below is an induction.

**Theorem (every nonzero counting number is a successor).** For every
$n \in \mathbb{N}$ with $n \neq 0$, there is a $k$ with $n = S(k)$.

*Proof.* Take the property $P(n)$: "$n = 0$ or there is $k$ with $n =
S(k)$". Then $P(0)$ holds trivially, and if $P(n)$ holds then $P(S(n))$
holds (the second branch: $S(n) = S(n)$). Induction gives $P$ for all $n$;
restricting to $n \neq 0$ gives the claim. $\blacksquare$

**Ponder.** Before reading on: here is an induction that proves every
herd of horses is single-coloured. The base case: a herd of one horse is
single-coloured. The step: assume every herd of $n$ horses is
single-coloured; take a herd of $n + 1$ horses, remove one horse (the
remaining $n$ are single-coloured, colour $C_1$), remove a *different*
horse (the remaining $n$ are single-coloured, colour $C_2$); the two
herds overlap, so $C_1 = C_2$, and the whole herd shares that colour.
Where does this break?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

The inductive step was never proved for $n = 1$. With two horses $A$ and
$B$: removing $A$ leaves the herd $\{B\}$ (colour $C_1$ = B's colour);
removing $B$ leaves $\{A\}$ (colour $C_2$ = A's colour). The two herds do
not overlap at all, so the argument "$C_1 = C_2$ because the overlap
carries the colour" has nothing to stand on. The step happens to be true
for every $n \geq 2$ and false for $n = 1$, and induction needs it for
*every* $n$. The lesson is structural: when you run an induction, ask
what the step's argument does at the smallest values, because the step is
a claim for all $n$ and the boundary is where arguments hide their gaps.

</div>
</details>

**Definition.** A set $X$ of counting numbers has a **least element**
when some $m \in X$ satisfies $m \leq n$ for every $n \in X$. (The order
$\leq$ is defined in Section 3; read "least" informally here and check the
formal statement returns in Section 3's terms.)

**Theorem (well-ordering).** Every nonempty set of counting numbers has a
least element.

*Proof.* Suppose $X$ is nonempty with no least element. Consider $P(n)$:
"no member of $X$ is $\leq n$". Then $P(0)$ holds: if $0 \in X$, then $0$
is least, contradiction. And $P(n) \to P(S(n))$: if some member of $X$
were $\leq S(n)$ but none is $\leq n$, that member would be exactly
$S(n)$ (any counting number $\leq S(n)$ is either $\leq n$ or equal to
$S(n)$, shown in Section 3), and it would be least, contradiction. By
induction, no member of $X$ is $\leq n$ for any $n$; so no member of $X$
exists at all (each member $m$ satisfies $m \leq m$), contradicting
nonemptiness. $\blacksquare$

**Theorem (strong induction).** Let $P$ be a proposition about counting
numbers. If, for every $n$, the statement "$P(k)$ holds for every $k < n$"
implies $P(n)$, then $P$ holds for every $n$.

*Proof.* Suppose $P$ fails somewhere. By well-ordering (applied to the
nonempty set of counting numbers where $P$ fails), there is a least $n$
with $\neg P(n)$. Then $P(k)$ holds for every $k < n$ (any failure $k$
would be smaller than the least failure $n$). The hypothesis of the
theorem gives $P(n)$, contradicting the choice of $n$.
$\blacksquare$

Strong induction is the version Stage D will generalize into transfinite
induction, and Section 4's division theorem is its first outing.

:::note[Quick check]

1. State the five Peano declarations.
2. What are the base case, induction hypothesis, and inductive step of an
   induction proof?
3. The horse argument's step is true for which herds and false for which?
4. State well-ordering, and name which proof shape its proof uses.
5. Why does strong induction not need its own axiom?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Zero is a counting number; successors exist; zero is no
one's successor; successors are distinct for distinct inputs; induction.
**2.** Base: $P(0)$. Hypothesis: $P(n)$. Step: $P(n) \to P(S(n))$.
**3.** True for herds of at least two horses; false for the step from one
horse to two (the overlap is empty). **4.** Every nonempty set of
counting numbers has a least element; the proof is by contradiction plus
induction. **5.** It is derived from least counterexamples, which follow
from induction plus well-ordering.

</div>
</details>

:::

## Formal Witnesses: How to Read the Boxes

Starting with Section 2, some theorems carry a second proof in a grey box:
a **formal witness**, written in the proof language Lean. Three things to
know, and then the boxes read themselves.

1. **The statement is the theorem.** In a witness, the line
   `theorem add_comm (a b : Nat) : a + b = b + a` says: for all counting
   numbers `a` and `b`, `a + b` and `b + a` are equal. Lean states the
   proposition and demands a proof *term* after the `:=`.
2. **The tactics are the rules.** `rfl` closes a goal that is true by
   definition (one line of the definition applies). `induction n with`
   runs the base-and-step proof from Section 1. `rw [t]` rewrites the
   goal using the equation `t`. Each box is accompanied by a plain-English
   gloss mapping it to the prose proof.
3. **The promise is machine-checked.** The proof job on every push
   extracts every box from this page and compiles it. If an edit breaks a
   witness, the build fails, exactly as a broken course map fails the
   build.

The witnesses use only core Lean: no libraries, no shortcuts. The prose
proof remains the proof of record; the witness is a machine that verifies
it.

## 2. Addition, Defined Recursively; Its Laws Proved

**Definition (addition).** Addition is declared by two lines:

- **Base.** $a + 0 := a$, for every $a$.
- **Step.** $a + S(b) := S(a + b)$, for every $a$ and $b$.

Read this as a construction: to add $b$'s successor on the right, take
the sum so far and take its successor. Addition of *any* $b$ is obtained
by walking the successor chain from $0$.

**Declared input (the recursion principle).** The two lines above define
exactly one function $\mathbb{N} \times \mathbb{N} \to \mathbb{N}$. That
uniqueness is a theorem of Stage A's machinery plus induction, whose
general form is proved in Stage D (transfinite recursion); until then it
is a declared input, recorded in the course map as a debt with Stage D as
its payee. Every recursive definition in this page spends the same debt.

**Notation.** With $1 := S(0)$: the step line says $a + S(b) = S(a + b)$,
so $a + 1 = S(a + 0) = S(a) = a + 1$'s meaning: adding one *is* taking
the successor. The theorem below is where the arithmetic starts to hurt.

**Theorem ($0 + n = n$; the first crack).** For every $n$: $0 + n = n$.

*Proof.* Induction on $n$. Base: $0 + 0 = 0$ is the base line with $a :=
0$. Step: assume $0 + n = n$; then $0 + S(n) = S(0 + n) = S(n)$ by the
step line. $\blacksquare$

**Ponder.** Before reading on: the base line *is* "$a + 0 = a$". So why
did $0 + n = n$ need a proof?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

The definition recurses on the *right* argument only. "$a + 0 = a$" fixes
what happens at the right-hand zero; nothing in the definition says what
happens when the *left* argument is zero. The theorem $0 + n = n$ is
therefore genuinely new information, obtained by induction, and
commutativity, which would let you swap the arguments and cite the
definition, is exactly what has *not* been proved yet. This is the first
crack in "it is obvious": obviousness smuggles in the theorem you wanted
to prove.

</div>
</details>

**Theorem (successor swap).** For all $a, b$: $S(a + b) = a + S(b)$.

*Proof.* Induction on $b$. Base: $S(a + 0) = S(a) = a + S(0)$, using the
base line twice. Step: $S(a + S(b)) = S(S(a + b)) = S(a + S(b))$ by the
step line applied twice. $\blacksquare$

**Theorem (commutativity).** For all $a, b$: $a + b = b + a$.

*Proof.* Induction on $b$. Base: $a + 0 = a = 0 + a$ by the base line and
the first-crack theorem. Step: $a + S(b) = S(a + b) = S(b + a) = b +
S(a) = S(b) + a$, using the step line, the induction hypothesis, the
successor-swap theorem, and the definition of $S(b) + a$ as $S(b + a)$.
$\blacksquare$

**Theorem (associativity).** For all $a, b, c$: $(a + b) + c = a + (b +
c)$.

*Proof.* Induction on $c$. Base: $(a + b) + 0 = a + b = a + (b + 0)$.
Step: $(a + b) + S(c) = S((a + b) + c) = S(a + (b + c)) = a + S(b + c) =
a + (b + S(c))$. $\blacksquare$

**Formal witness (the first).** The prose proof of commutativity above
translates line for line:

```lean
theorem zero_add_w (n : Nat) : 0 + n = n := by
  induction n with
  | zero => rfl
  | succ k ih => rw [Nat.add_succ, ih]

theorem add_comm_w (a b : Nat) : a + b = b + a := by
  induction b with
  | zero => rw [Nat.add_zero, Nat.zero_add]
  | succ k ih => rw [Nat.add_succ, Nat.succ_add, ih]
```

*Gloss.* `Nat.add_zero` is the base line, `Nat.add_succ` the step line,
`Nat.zero_add` the first-crack theorem, `Nat.succ_add` the successor
swap. The tactic `rfl` closes $0 + 0 = 0$ because it holds by the base
line's definition; `rw [Nat.add_succ, ih]` rewrites $0 + S(k)$ to
$S(0 + k)$ and then to $S(k)$, which is the goal's right side. The same
proofs, certified: this pair of boxes compiles in the proof job on every
push.

:::note[Quick check]

1. State the two lines that define addition, and say which argument the
   recursion walks.
2. Prove $a + 0 = 0$ is *not* the base line; state the correct base line.
3. Which theorem was needed before commutativity could be proved, and why?
4. Prove $a + 1 = S(a)$ where $1 := S(0)$.
5. What exactly does the recursion-principle debt license?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $a + 0 := a$ and $a + S(b) := S(a + b)$; the recursion
walks the right argument. **2.** The base line is $a + 0 = a$; "$a + 0 =
0$" is multiplication's base, not addition's. **3.** $0 + n = n$ (the
first crack); commutativity swaps arguments and needed the left-zero
case. **4.** $a + 1 = a + S(0) = S(a + 0) = S(a)$. **5.** That the two
lines define exactly one function; its general proof is Stage D's
transfinite recursion.

</div>
</details>

:::

## 3. Multiplication, Order, Exponentiation: All Theorems

**Definition (multiplication).** Multiplication is declared by two lines:

- **Base.** $a \times 0 := 0$, for every $a$.
- **Step.** $a \times S(b) := a \times b + a$, for every $a$ and $b$.

Read: $a \times S(b)$ is "one more copy of $a$". The recursion-principle
debt covers this definition too.

**Theorem (the left zero, again).** For every $b$: $0 \times b = 0$.

*Proof.* Induction on $b$. Base: $0 \times 0 = 0$ by the base line. Step:
$0 \times S(b) = 0 \times b + 0 = 0 \times b = 0$ by the step line and
the addition base line. $\blacksquare$

**Theorem (distributivity).** For all $a, b, c$: $a \times (b + c) =
a \times b + a \times c$.

*Proof.* Induction on $c$. Base: $a \times (b + 0) = a \times b =
a \times b + 0 = a \times b + a \times 0$. Step: $a \times (b + S(c)) =
a \times S(b + c) = a \times (b + c) + a = (a \times b + a \times c) + a
= a \times b + (a \times c + a) = a \times b + a \times S(c)$, using
Section 2's step line inside, the induction hypothesis, and associativity
of addition. $\blacksquare$

**Ponder.** Before reading on: commutativity of addition took one
induction. Try commutativity of multiplication the same way, induction on
$b$: the step case needs $a \times S(b) = S(a) \times b$, and the
definition hands you $a \times S(b) = a \times b + a$, which grows on
the *wrong side*. Why is the swap harder here than for addition?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Addition's step line grows on the right ($a + S(b) = S(a + b)$), so
induction on $b$ walks exactly the argument the definition manipulates.
Multiplication's step line grows on the right too ($a \times S(b) =
a \times b + a$), but the swap wants the growth to appear on the
*outside*, wrapped in a successor, and the definition only produces a
sum. The bridge is a helper identity ($S(a) \times b = a \times b +
b$) proved by its own induction. The general lesson: commutativity of a
recursively defined operation costs one helper per interaction between
the recursion and the successor. Nothing is harder in kind; there is just
more bookkeeping, and the bookkeeping is the mathematics.

</div>
</details>

**Theorem (commutativity).** For all $a, b$: $a \times b = b \times a$.

*Proof.* First a helper, by induction on $b$: $S(a) \times b = a \times b + b$. Base: $S(a) \times 0 = 0 = a \times 0 + 0$. Step: $S(a) \times
S(b) = S(a) \times b + S(a) = (a \times b + b) + S(a) = (a \times b +
a) + S(b) = a \times S(b) + S(b)$, using the step lines of
multiplication and the associativity and commutativity of addition.
Now commutativity itself, by induction on $b$: base $a \times 0 =
0 = 0 \times a$ (the left-zero theorem); step $a \times S(b) = a \times
b + a = b \times a + a = S(b) \times a$. $\blacksquare$

**Definition (order).** $a \leq b$ means: there exists $c$ with $a + c =
b$. Write $a < b$ for $a \leq S(b)$'s condition with $c$ nonzero:
there exists nonzero $c$ with $a + c = b$.

**Theorem (reflexive and transitive).** $\leq$ is reflexive ($a \leq a$,
witness $c := 0$) and transitive: if $a + c = b$ and $b + d = e$ then $a + (c + d) = e$, so $a \leq e$.

*Proof.* Reflexivity is immediate (Section 2's base line). For
transitivity: $a + (c + d) = (a + c) + d = b + d = e$ by associativity
and the hypotheses. $\blacksquare$

**Theorem (successor grows).** For every $a$: $a < S(a)$; and for all
$a, b$: if $a \leq b$ then $S(a) \leq S(b)$.

*Proof.* $a < S(a)$: witness $c := 1$, since $a + 1 = S(a)$ (Section 2).
For the second: $a \leq b$ gives $b = a + c$, so $S(b) = S(a + c) = S(a) + c$ by the successor-swap theorem, which is $S(a) \leq S(b)$ with
witness $c$. $\blacksquare$

**Definition (exponentiation).** $a^0 := 1$ and $a^{S(b)} := a^b \times
a$. The laws ($a^{b + c} = a^b \times a^c$ and friends) are proved by
the same inductions as Section 2 and 3; Problem 5 asks for one.

:::note[Quick check]

1. State the two lines that define multiplication.
2. Which two previously proved facts does distributivity's proof use in
   its step case?
3. Define $\leq$ on the counting numbers via addition.
4. Why does $a < S(a)$ hold, by the definition of $<$?
5. State $a^{S(b)}$ in terms of $a^b$.


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $a \times 0 := 0$ and $a \times S(b) := a \times b +
a$; the recursion walks the right argument. **2.** Associativity of
addition and the multiplication step line. **3.** $a \leq b$ when some
$c$ satisfies $a + c = b$. **4.** Witness $c := 1$: $a + 1 = S(a)$
by Section 2. **5.** $a^{S(b)} = a^b \times a$.

</div>
</details>

:::

## 4. Division with Remainder; the Archimedean Property

**Theorem (division with remainder).** For all $a$ and all $b \neq 0$,
there exist exactly one $q$ and exactly one $r$ with

$$
a = b \times q + r, \qquad r < b.
$$

*Proof (existence).* Strong induction on $a$. If $a = 0$: take $q := 0$,
$r := 0$; then $b \times 0 + 0 = 0 = a$ and $0 < b$ since $b \neq 0$ is a
successor and every successor is $> 0$ (Section 3's successor-grows
theorem with $a := 0$). If $a = S(k)$: the induction hypothesis gives
$k = b \times q + r$ with $r < b$. Two cases on $S(r)$ versus $b$: if
$S(r) < b$, then $a = b \times q + S(r)$ with witness $q$ and remainder
$S(r) < b$. If $S(r) = b$, then $a = b \times q + S(r) = b \times q + b
= b \times S(q) + 0$ (distributivity in reverse), so the witnesses are
$S(q)$ and $0$, and $0 < b$. In every branch a valid pair exists.
$\blacksquare$

*Proof (uniqueness).* Suppose $b \times q + r = b \times q' + r'$ with
$r < b$ and $r' < b$. By Section 3's totality-adjacent fact (Problem 3
of that section's chain), either $r \leq r'$ or $r' \leq r$; suppose
$r \leq r'$, so $r' = r + d$ for some $d$. Then $b \times q = b \times
q' + d$ by cancellation-style rearrangement (associativity and
commutativity of addition). If $q$ were smaller than $q'$, then $q' =
q + e$ with $e \neq 0$, and $b \times q' = b \times q + b \times e
\geq b \times q + b > b \times q + d$, since $d < b$; contradiction. If
$q$ were larger than $q'$, symmetric contradiction. So $q = q'$, which
forces $d = 0$, hence $r = r'$. The case $r' \leq r$ is symmetric.
$\blacksquare$

The remainder theorem is the gate through which Stage C will pass: the
line of counting numbers divides the world into remainders, and the
remainders become new number systems. (Forward-honesty marker: the
construction is future content; this section only proves the theorem.)

**Theorem (the Archimedean property).** For all $a$ and all $b \neq 0$,
there exists $n$ with $a < b \times n$.

*Proof.* Take $n := S(a)$. Then $b \times S(a) = b \times a + b$
(Section 3's step line), and $b \neq 0$ is a successor, so $b \geq 1 =
S(0)$, giving $b \times a + b \geq b + 0 \cdot \ldots$; directly: $b
\times a + b \geq S(0) + a \geq a + 1 = S(a) > a$. Hence $a < b \times
S(a)$. $\blacksquare$

**Ponder.** Before reading on: the remainder theorem says the walk
$a, a + (-b)$ in reverse, $a, a \ominus b, a \ominus 2b, \ldots$,
eventually lands below $b$ and *stops*. Why does it stop, and why does
the place where it stops not depend on how you walk?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

It stops by the Archimedean property: there is some multiple $b \times n$
above $a$, so the walk cannot run forever downward. It lands in the same
place however you walk because of the uniqueness half of the remainder
theorem: two landing points $r \neq r'$ with the same quotient count
would violate the inequality argument in the uniqueness proof. Existence
says the walk stops; uniqueness says the stopping place is a fact about
$a$ and $b$, not about the walker. Stage C will keep the stopping place
($a \bmod b$) and throw away the quotient, and a new arithmetic will grow
from it. (Forward-honesty marker as flagged: the construction is future
content; this section only proves the theorem.)

</div>
</details>

**Formal witness.** The remainder theorem's statement, certified (the
existence proof is constructive inside Lean's library; the inequality
$0 < b$ from $b \neq 0$ is the omega-closed step):

```lean
theorem division_with_remainder_w (a b : Nat) :
    b * (a / b) + a % b = a := Nat.div_add_mod a b

theorem mod_lt_w (a b : Nat) (h : b ≠ 0) : a % b < b :=
  Nat.mod_lt a (by omega)
```

*Gloss.* `/` and `%` are the quotient and remainder functions; the first
witness states $b \times (a / b) + a \% b = a$ for all $a, b$; the second
adds the bound $a \% b < b$ whenever $b \neq 0$, with the `by omega`
discharging the small arithmetic fact $0 < b$ from $b \neq 0$.

:::note[Quick check]

1. In the existence proof, which proof shape carries the main argument,
   and what is the induction on?
2. Where does $r < b$ get used in the uniqueness proof?
3. What are the two witnesses for $a = 0$ in the remainder theorem?
4. State the Archimedean property for the counting numbers.
5. State the two conditions on the remainder $r$ in the remainder
   theorem, and name the proof shape that existence uses.


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Strong induction on $a$ (least-counterexample shape).
**2.** It bounds $d$: a larger quotient would add at least a full
$b \times 1$, exceeding $b \times q + d$ when $d < b$. **3.** $q := 0$
and $r := 0$. **4.** For every $a$ and every $b \neq 0$, some multiple
$b \times n$ exceeds $a$. **5.** $r < b$ and $r \geq 0$; existence
by strong induction on $a$.

</div>
</details>

:::

## 5. Counting Arguments: Bijections Meet Arithmetic

**The bridge.** Stage A defined "the two sets have the same size" as
"there is a bijection between them", and defined the standard set
$[n] := \{x \in \mathbb{N} : x < n\}$. Now the two halves meet: the
counting numbers measure sets.

**Definition.** A set $X$ **has $n$ elements** when there exists a
bijection $[n] \to X$.

**Lemma (removal).** Let $c < k$. Then the set $[k]$ with $c$ removed is
in bijection with $[k \ominus 1]$, where $k \ominus 1$ denotes the
predecessor of $k$ (which exists since $k \neq 0$ when $c < k$).

*Proof.* Define $\psi: [k \ominus 1] \to [k]$ by $\psi(t) := t$ if
$t < c$, and $\psi(t) := S(t)$ if $t \geq c$. Injective: if $\psi(t) =
\psi(t')$ with both $t, t' < c$, then $t = t'$; with both $\geq c$,
$S(t) = S(t')$ gives $t = t'$ by Peano's fourth declaration; and $t < c
\leq t'$ gives $\psi(t) = t < c \leq S(t') = \psi(t')$, so this last
mixture cannot occur. Surjective: for $z \in [k]$ with $z \neq c$: if
$z < c$, then $z = \psi(z)$ with $z < c \leq k \ominus 1$; if $z > c$,
then $z$ is a successor, $z = S(t)$ with $t \geq c$, so $\psi(t) = S(t)
= z$ with $t < k \ominus 1$... wait, $t < k$: since $z = S(t) \leq k
\ominus 1$'s neighbourhood, $t < k$ holds because $S(t) = z < k$. Hence
$\psi$ is a bijection onto $[k]$ minus the point $c$.
$\blacksquare$

**Ponder.** Before reading on: the pigeonhole principle is the one you
already believe. Try to imagine *believing it false*: seats and guests,
more guests than seats, every guest on a distinct seat, and yet seats
left over? The reason this cannot be imagined is exactly what the proof
must construct: an injection from a longer list of counting numbers into
a shorter one, which would let the shorter list measure the longer one.
Watch the proof fail to exist.

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Any imagined injection would assign to each of $k$ guests a distinct
seat among $m < k$. Listing the guests' seats in order gives a
nonincreasing chain that must strictly rise $k$ times while rising at
most $m < k$ times in total: the chain runs out of strict rises. The
formal proof below packages this exhaustion as strong induction, and the
removal lemma is what lets the induction shorten the guest list by one
without losing track of which seats are taken. The principle feels
unprovable precisely because no finite counterexample can exist; that is
why it needs induction rather than inspection.

</div>
</details>

**Theorem (pigeonhole).** If $m < k$, then every function $[k] \to [m]$
has a collision: some distinct $x, y$ with $f(x) = f(y)$. Equivalently,
no injective function $[k] \to [m]$ exists when $m < k$.

*Proof.* By strong induction on $m$. Base, $m = 0$: $[0]$ has no
elements, and a function $[k] \to \varnothing$ with $k \neq 0$ cannot be
total (each input needs an output, and there are none), so no function
exists at all, injective or otherwise. Step: assume the claim for $m$;
show it for $S(m)$. Suppose $f: [k] \to [S(m)]$ injective with $k \geq
S(S(m))$. Two cases. If $S(m)$ is not in the image of $f$, then every
value of $f$ lies in $[m]$ (values are $< S(m)$ and are not $S(m)$), so
$f$ is an injective function $[k] \to [m]$ with $k \geq S(m)$,
contradicting the induction hypothesis. If $S(m)$ is in the image, say
$f(c) = S(m)$ with $c < k$: restrict $f$ to $[k]$ with $c$ removed
(injectivity survives restriction), and use the removal lemma twice:
the punctured domain is in bijection with $[k \ominus 1]$ and the
punctured codomain $[S(m)]$ with $S(m)$ removed is in bijection with
$[m]$ (removal with $c := S(m)$, $k := S(m)$'s own bound: the punctured
$[S(m)]$ is exactly $[m]$). Composing, we obtain an injective function
$[k \ominus 1] \to [m]$, and $k \ominus 1 \geq S(m)$ since $k \geq
S(S(m))$. This contradicts the induction hypothesis again. Every branch
collides. $\blacksquare$

**Theorem (counting transfers through bijections).** If $X$ has $n$
elements and $X \cong Y$ (a bijection exists), then $Y$ has $n$
elements.

*Proof.* A bijection $[n] \to X$ composed with a bijection $X \to Y$ is
a bijection $[n] \to Y$ (composition of bijections, Section 4's Problem
3 chain). $\blacksquare$

**Definition (permutations).** A **permutation** of $[n]$ is a bijection
$[n] \to [n]$.

**Theorem (the permutation count).** The permutations of $[S(k)]$ are in
bijection with the pairs (an element of $[S(k)]$, a permutation of
$[k]$).

*Proof.* Given a permutation $\pi$ of $[S(k)]$, send it to the pair
(removed value $v$, restricted-and-renumbered permutation), where $v$ is
the image of the last point $k$: define the restriction of $\pi$ to
$[S(k)]$ with the point $k$ removed, and renumber by the removal lemma
(with $c := k$... concretely, $\pi \circ \psi$ composed with the inverse
of $\pi$ restricted appropriately; the removal lemma supplies both
halves). Conversely, given a removed value $v$ and a permutation
$\sigma$ of $[k]$, extend: map $k$ to $v$, and map each other point
through the removal bijection's inverse then $\sigma$. The two
constructions are inverse to each other by construction: removing and
re-adding the same distinguished point in the same way. The full
bookkeeping is Problem 5. $\blacksquare$

**Corollary.** The number of permutations of $[S(k)]$ is $S(k)$ times
the number of permutations of $[k]$. With the count of permutations of
$[0]$ defined as $1$ (there is exactly one bijection $\varnothing \to
\varnothing$), the count of permutations of $[n]$ satisfies the
recursion the school calls $n!$.

**Theorem (the binomial recurrence).** Let $B(n, k)$ denote the number
of $k$-element subsets of $[n]$ (subsets in bijection with $[k]$).
Then $B(n, 0) = B(n, n) = 1$, and for $0 < k < n$:
$B(n, k) = B(n \ominus 1, k \ominus 1) + B(n \ominus 1, k)$.

*Proof.* Split the $k$-element subsets of $[n]$ into two disjoint
families: those that contain the point $n \ominus 1$ (the last point),
and those that do not. A subset containing the last point corresponds,
by removing that point, to a $(k \ominus 1)$-element subset of
$[n \ominus 1]$ (the removal lemma in its set form); a subset not
containing it is a $k$-element subset of $[n \ominus 1]$. The two
families are disjoint and cover all $k$-element subsets, so the counts
add. $\blacksquare$

**Theorem (the binomial law).** For the coefficients $B$ defined by the
recurrence above: $(x + y)^n = B(n, 0) \, y^n + B(n, 1) \, x \, y^{n
\ominus 1} + \dots + B(n, n) \, x^n$, with each term $B(n, k) \,
x^k \, y^{n \ominus k}$; proved by induction on $n$ using Section 3's
distributivity and the recurrence. (Problem 4 carries out the
induction.) $\blacksquare$

:::note[Quick check]

1. State the pigeonhole principle with its exact hypotheses.
2. Where does the removal lemma enter the pigeonhole proof?
3. What does "the set $X$ has $n$ elements" mean in Stage A's language?
4. State the binomial recurrence and the two boundary values.
5. Which stage's chapters consume the remainder theorem immediately
   after this page's stage gate?


<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** If $m < k$, every function $[k] \to [m]$ collides on
distinct inputs; equivalently no injection exists. **2.** In the case
where the top value is in the image: removing that one pair turns the
problem into the previous case. **3.** There exists a bijection from
$[n]$ onto $X$. **4.** $B(n, k) = B(n \ominus 1, k \ominus 1) + B(n
\ominus 1, k)$, with $B(n, 0) = B(n, n) = 1$. **5.** Stage C
(Expanding the line), via the remainder theorem.

</div>
</details>

:::

## Stage Gate
## Stage Gate



Before Stage C, answer these five without notes. Pass mark: four. Each is
drawn from this page's quick checks; a failed gate names the section to
reread (1: Section 1; 2: Section 2; 3: Section 3; 4: Section 4; 5:
Section 5).

:::caution[Pass mark: four of five]

1. State the induction axiom, and give the validity condition the horse
   argument violated.
2. State the two lines defining addition, and name the theorem that had
   to be proved before commutativity was reachable.
3. State the two lines defining multiplication, and the order relation
   defined from addition.
4. State the remainder theorem with its two conditions on $r$.
5. State the pigeonhole principle, and name the lemma its proof consumes.


<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** If $P(0)$ and $P(n) \to P(S(n))$ for all $n$, then $P$ holds of
every counting number; the horse argument's step needed the overlap to
be nonempty, which fails at the boundary. **2.** $a + 0 := a$,
$a + S(b) := S(a + b)$; the left-zero theorem $0 + n = n$ came first.
**3.** $a \times 0 := 0$, $a \times S(b) := a \times b + a$; and
$a \leq b$ means $\exists c,\ a + c = b$. **4.** For $b \neq 0$: exactly
one $q, r$ satisfy $a = b \times q + r$ and $r < b$. **5.** If $m < k$,
every function $[k] \to [m]$ collides; the proof consumes the removal
lemma.

</div>
</details>

:::

## Problems

**Problems.** The quick checks tested recall. These chain several results
and require full written arguments.

1. Prove **right cancellation**: if $a + c = b + c$ then $a = b$, by
   induction on $c$. Then use it to prove antisymmetry of $\leq$: if
   $a \leq b$ and $b \leq a$, then $a = b$.
   *(Hint: for the cancellation base case, $c = 0$ gives $a + 0 = b + 0$,
   which is $a = b$ by the base line. The step: $a + S(c) = b + S(c)$
   gives $S(a + c) = S(b + c)$, hence $a + c = b + c$ by Peano's fourth
   declaration, and the induction hypothesis finishes.)*
2. Prove $\leq$ is a **total order**: every pair is comparable. Do it by
   induction on $a$, with the case $a = 0$ immediate, and the case
   $a = S(k)$ splitting on whether $b = 0$.
   *(Hint: if $b = S(j)$, the induction hypothesis compares $k$ and $j$;
   each outcome gives a witness $c$ for either $S(k) \leq S(j)$ or
   $S(j) \leq S(k)$ via Section 3's successor-grows theorem.)*
3. Prove: if $a \leq b$ and $b \leq a$ is false, then $a < b$, and
   conclude that exactly one of $a < b$, $a = b$, $b < a$ holds.
   *(Hint: totality gives a witness $c$ for one direction or the other;
   antisymmetry (Problem 1) rules out the both-directions case, and
   $c = 0$ versus $c \neq 0$ separates equality from strictness.)*
4. Prove the **Pascal recurrence for binomial coefficients** using the
   with/without-last-point argument made precise by the removal lemma,
   and then prove the **binomial law** by induction on $n$, using
   distributivity and the recurrence.
   *(Hint: for the induction step, expand $(x + y)^{S(n)} = (x + y)^n
   \times (x + y)$ by the induction hypothesis, collect the $x$-leading
   and $y$-leading terms, and match each coefficient against the
   recurrence's two summands.)*
5. Prove: for every $n$, the product $n \times S(n)$ is **even**, in the
   sense that there exists $h$ with $n \times S(n) = 2 \times h$, where
   $2 := S(S(0))$. Conclude that there exists $h$ with
   $1 + 2 + \dots + n$... more precisely, that the sum
   $\Sigma(n)$ defined by $\Sigma(0) := 0$ and
   $\Sigma(S(k)) := \Sigma(k) + S(k)$ satisfies $\Sigma(n) \times 2 =
   n \times S(n)$.
   *(Hint: first prove $\Sigma(S(k)) = S(k) + \Sigma(k)$ by the same
   induction that proved $0 + n = n$; then prove $\Sigma(n) \times 2 =
   n \times S(n)$ by induction on $n$; then show every counting number
   is even or its successor is even, by induction, and split on which.)*

## Where to Go Next

Stage C (Expanding the line) takes the remainder theorem and does
something violent with it: it declares two numbers equivalent when their
difference is divisible by $b$, keeps only the remainders, and discovers
that the resulting arithmetic (Stage A's equivalence classes, this
stage's remainder theorem) is a working number system with negative
directions built in. Then the rationals, and then the first crisis: a
length whose square is two, which no fraction measures.

**Next: [Stage C: Expanding the Line](/17-core-course/stage-c-expanding-the-line/).**
