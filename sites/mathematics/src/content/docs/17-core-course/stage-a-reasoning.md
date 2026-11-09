---
date: 2026-11-09T00:00:00+00:00
title: "Stage A: Reasoning"
description: "The course's foundation, built with no numbers at all: propositions and connectives as truth tables, quantifiers, sets with full symbolic definitions, relations, order and equivalence, functions as special relations, and the dissection of a false proof that fails by swapping two quantifiers. Eight quick-check questions per section."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage A: Reasoning", "url": "https://mathematics.wyattau.com/17-core-course/stage-a-reasoning"}]
}
</script>

**The Defect.** The books say "clearly" where you see no argument, and
the conclusion you draw is that proof is a talent you lack. It is not.
A proof is a finite sequence of statements in which every line is
declared up front or licensed by earlier lines. Once the licence is
visible, "clearly" disappears: you know exactly which step was skipped.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
proof is a syntactic object, checkable without understanding; Stage A
builds the check from five parts (connectives as truth tables,
quantifiers, sets, relations, functions) and dissects one argument that
satisfies every line except the licence.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** The floor is literacy and pattern recognition. One axiom is
adopted (Section 1, stated in full, recorded in the course map's axiom
table). Three remarks carry the forward-honesty marker; no proof uses
future content.

## 1. Propositions, Connectives, Quantifiers, Proof

**Definition (proposition).** A sentence that is exactly one of true
(T) or false (F).

**Definition (connectives).** For propositions $P, Q$, the five
connectives are defined by the table (T = true, F = false):

| $P$ | $Q$ | $\neg P$ | $P \land Q$ | $P \lor Q$ | $P \to Q$ | $P \leftrightarrow Q$ |
|-----|-----|----------|-------------|------------|-----------|------------------------|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

Reading: $\neg$ not; $\land$ both; $\lor$ at least one; $\to$
if-then; $\leftrightarrow$ same truth value.

**Ponder.** Before reading on: rows 3 and 4 of the $P \to Q$ column
say an implication with a false hypothesis is *true*. Can you justify
that from the table's purpose, or does it feel arbitrary?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

The table is the definition, so the question is really: why was this
row chosen? Because $P \to Q$ must mean "every case with $P$ true has
$Q$ true"; when $P$ is false there are no such cases, so the claim is
vacuously satisfied. Alternative conventions break later theorems:
Section 2's definition of subset ($\varnothing \subseteq S$) and the
empty-set laws all rest on this row. A convention is judged by its
consequences, and this one has none that conflict.

</div>
</details>

**Definition (quantifiers).** For a domain $D$ and proposition
$P(x)$:

- $\forall x \in D,\ P(x)$ := for every $x \in D$, $P(x)$ holds.
- $\exists x \in D,\ P(x)$ := for at least one $x \in D$, $P(x)$
  holds.

Quantifiers stack and **order is meaning**:
$\forall x\ \exists y,\ R(x, y)$ permits $y$ to depend on $x$;
$\exists y\ \forall x,\ R(x, y)$ demands one $y$ serving every $x$.

**Axiom (classical logic).** Every proposition is exactly one of T or
F, and a derivation of a contradiction from $\neg P$ licenses a proof
of $P$. Adopted, not proved; recorded in the course map's axiom
table; every later use is flagged.

**Definition (proof).** A proof of $P$ is a finite sequence of
statements ending in $P$ in which every line is: an axiom, a
definition, a previously proved statement, or a consequence of earlier
lines by the rules of Section 1. No other line is permitted. The
words "clearly" and "obviously" name skipped lines and are banned.

**Theorem (contrapositive).** $(P \to Q) \leftrightarrow (\neg Q \to
\neg P)$.

*Proof.* Extend the table by three computed columns:

| $P$ | $Q$ | $P \to Q$ | $\neg Q$ | $\neg P$ | $\neg Q \to \neg P$ |
|-----|-----|-----------|----------|----------|----------------------|
| T | T | T | F | F | T |
| T | F | F | T | F | F |
| F | T | T | F | T | T |
| F | F | T | T | T | T |

The columns $P \to Q$ and $\neg Q \to \neg P$ agree in all four rows.
$\blacksquare$

**Quick check.**

1. Write the truth table of $\neg(P \land Q)$ and of
   $\neg P \lor \neg Q$; what do you observe?
2. State the definition of $\forall x \in D,\ P(x)$.
3. How many rows does the truth table of a proposition built from
   three propositions $P, Q, R$ have?
4. State the classical-logic axiom, and where it is recorded.
5. In row (T, F), why is $P \to Q$ false while $P \lor Q$ is true?
6. Which connective does $P \leftrightarrow Q$ abbreviate, by the
   table?
7. Give the three permitted kinds of lines in a proof, plus the
   fourth.
8. Why are "clearly" and "obviously" banned?

*Answers:* **1.** The columns are identical in all four rows (De
Morgan's law, here by enumeration). **2.** $P(x)$ holds for every
element of the domain $D$. **3.** $2^3$-style enumeration: eight
rows, one per assignment of T/F to the three propositions. **4.** T/F
exclusivity plus double-negation licensing; recorded in the course
map's axiom table. **5.** Row 2: $P \to Q$ needs $Q$ true when $P$ is
true and it is not; $P \lor Q$ needs at least one true and $P$ is.
**6.** Mutual implication: each implies the other. **7.** Axiom,
definition, previously proved statement, rule-licensed consequence.
**8.** They name a skipped line: the licence the definition demands
is missing.

## 2. Sets: Membership, Operations, Products, Power Sets

**Definition (set, extensionality).** A **set** is a collection of
objects, its **elements**. Sets $S, T$ are equal exactly when
$\forall x\ (x \in S \leftrightarrow x \in T)$.

**Definition (membership operations).** For sets $S, T$:

- $S \subseteq T :\Longleftrightarrow \forall x\ (x \in S \to x \in
  T)$.
- $S \cup T := \{x : x \in S \lor x \in T\}$.
- $S \cap T := \{x : x \in S \land x \in T\}$.
- $S \setminus T := \{x : x \in S \land x \notin T\}$.

**Definition (bounded comprehension).** For a set $S$ and proposition
$P$: $\{x \in S : P(x)\}$ denotes $\{x : x \in S \land P(x)\}$. The
unbounded form $\{x : P(x)\}$ is forbidden; Russell's paradox is the
reason (Problem 1).

**Ponder.** Before reading on: let $R$ be "the set of all sets that
are not members of themselves". Evaluate $R \in R$ under each of its
two possible answers. What does the contradiction diagnose: the
classical-logic axiom, or the unbounded comprehension?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

$R \in R \to R \notin R$ and $R \notin R \to R \in R$: a proposition
that is neither T nor F, violating the axiom. The axiom is innocent;
the comprehension is the culprit. Bounded comprehension collects only
inside an existing set, so the collection cannot be "all sets". Every
set in this course is built by bounded comprehension, and no proof
ever quantifies over "all sets".

</div>
</details>

**Definition (empty set).** $\varnothing :=$ the set with
$\forall x\ (x \notin \varnothing)$; it is a set by comprehension on
any given set.

**Definition (product).** The ordered pair
$(a, b) := \{\{a\}, \{a, b\}\}$, and $S \times T := \{(s, t) : s \in
S \land t \in T\}$.

**Theorem (pair law).** $(a, b) = (c, d) \leftrightarrow (a = c
\land b = d)$. (Proof: Problem 2.)

**Definition (power set).** $\mathcal{P}(S) := \{T : T \subseteq S\}$.

**Example (representation).** For $S = \{a, b\}$:

| subset of $S$ | in words |
|---|---|
| $\varnothing$ | neither in |
| $\{a\}$ | $a$ in, $b$ out |
| $\{b\}$ | $a$ out, $b$ in |
| $\{a, b\}$ | both in |

Each subset is one row: a decision, for every element separately,
whether it is in. $\blacksquare$

**Quick check.**

1. Prove $S \cap T \subseteq S$ from the definitions (one line:
   take $x \in S \cap T$, and license each step).
2. Compute $(S \setminus T) \cup (T \setminus S)$ for $S = \{a, b\}$,
   $T = \{b, c\}$.
3. Prove or disprove: $\varnothing \in \mathcal{P}(\varnothing)$.
4. State the comprehension that builds $S \setminus T$.
5. Prove: if $S \subseteq T$ then $S \cup T = T$ (element chase).
6. Prove: $S \cap (T \cup U) = (S \cap T) \cup (S \cap U)$ (element
   chase with the connective table from Section 1).
7. What are the two comprehension bounds in the definition of
   $S \times T$?
8. How does the pair law justify the Kuratowski recipe
   $(a, b) := \{\{a\}, \{a, b\}\}$?

*Answers:* **1.** Let $x \in S \cap T$; by definition $x \in S \land
x \in T$; the rule for $\land$ gives $x \in S$; hence $x \in S$; so
$S \cap T \subseteq S$. **2.** $\{a, c\}$ (in exactly one of the two
sets). **3.** True: $\mathcal{P}(\varnothing) = \{\varnothing\}$, and
$\varnothing$ is its element. **4.** $S \setminus T := \{x \in S :
x \notin T\}$. **5.** $\supseteq$: $t \in T$ has $t \in S \cup T$.
$\subseteq$: $x \in S \cup T$ is $x \in S \lor x \in T$; in the first
case $x \in T$ by hypothesis; in the second $x \in T$ directly.
**6.** The element chase reduces to the connective identity $\land$
distributes over $\lor$, which is row-checked in Section 1. **7.**
$x \in S$ and $t \in T$ (two bounded comprehensions, one per side of
the pair). **8.** The recipe earns its definition by the pair law:
$(a, b) = (c, d) \leftrightarrow (a = c \land b = d)$, so pairs built
from sets behave as pairs must (Problem 2 proves it).

## 3. Relations: Order and Equivalence

**The naive conjecture.** "Order" means everything compares. The
singletons $\{a\}$ and $\{b\}$ of Section 2 refute it under $\subseteq$:
neither contains the other. Comparability is an extra law, not a
given.

**Definition (relation).** A relation on $S$ is an element $R \in
\mathcal{P}(S \times S)$; write $x \,R\, y :\Longleftrightarrow (x, y)
\in R$.

**Definition (partial order).** $R$ is a partial order when:

- **reflexive**: $\forall a\ (a \,R\, a)$;
- **antisymmetric**: $\forall a, b\ ((a \,R\, b \land b \,R\, a) \to
  a = b)$;
- **transitive**: $\forall a, b, c\ ((a \,R\, b \land b \,R\, c) \to
  a \,R\, c)$.

It is a **total order** when additionally $\forall a, b\ (a \,R\, b
\lor b \,R\, a)$.

**Example (representation).** $\subseteq$ on $\mathcal{P}(\{a, b\})$
as a table of comparisons ($\checkmark$ = related, blank = not):

| $\subseteq$ | $\varnothing$ | $\{a\}$ | $\{b\}$ | $\{a, b\}$ |
|---|---|---|---|---|
| $\varnothing$ | ✓ | ✓ | ✓ | ✓ |
| $\{a\}$ | | ✓ | | ✓ |
| $\{b\}$ | | | ✓ | ✓ |
| $\{a, b\}$ | | | | ✓ |

Reflexive: the diagonal is all ✓. Antisymmetric: no two distinct
elements are mutually ✓. Transitive: chase the ✓s. Not total: the
$\{a\}$/$\{b\}$ cells are blank. $\blacksquare$

**Definition (equivalence).** $R$ is an equivalence relation when:
reflexive; **symmetric**: $\forall a, b\ ((a \,R\, b) \to (b \,R\,
a))$; transitive.

**Example.** On the people in a room: $x \sim y$ when $x$ and $y$
were born in the same month. All three laws hold by "same as the
same" chaining. $\blacksquare$

**Definition (class).** $[x] := \{y \in S : y \sim x\}$.

**Theorem (partition correspondence).** The classes of an equivalence
relation on $S$ form a disjoint cover of $S$; conversely, every
disjoint cover $\{F_i\}$ of $S$ induces exactly one equivalence
relation ("same $F_i$").

*Proof.* Nonempty: $x \in [x]$ by reflexivity. Cover: every $x$ lies
in its own class. Disjoint: if $z \in [x] \cap [y]$, then $z \sim x$
and $z \sim y$; symmetry and transitivity give $x \sim y$; then for
any $w \in [x]$: $w \sim x \sim y$, so $w \in [y]$; hence $[x] =
[y]$. Converse: same-member is reflexive, symmetric, transitive
because "lies in the same member" is an equality of members, and
disjointness makes the member unique. $\blacksquare$

**Ponder.** Before reading on: can two distinct classes share exactly
one element? Try to build such a pair from the definition of $[x]$
before reading the proof's third line.

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Suppose $z \in [x] \cap [y]$. The definitions give $z \sim x$ and
$z \sim y$; symmetry turns the first into $x \sim z$; transitivity
chains $x \sim z \sim y$ into $x \sim y$; and then every member of
$[x]$ is a member of $[y]$. The "share one element" attempt collapses
into equality. A wrong guess here forgets the symmetry step;
the autopsy names it.

</div>
</details>

**Quick check.**

1. Write the three order laws as formal $\forall$-statements.
2. In the representation table, list the ordered pairs $(X, Y)$ with
   $X \subseteq Y$, $X \neq Y$.
3. Prove $\subseteq$ on $\mathcal{P}(S)$ is antisymmetric using only
   extensionality.
4. State symmetry and transitivity as formal $\forall$-statements.
5. For the same-birth-month relation on a room of people, list the
   equivalence classes.
6. Prove: $x \sim y \to [x] = [y]$ (three lines: symmetry,
   transitivity twice, element chase).
7. What does the converse half of the partition correspondence
   construct?
8. Why is "same member" well-defined when the family is disjoint?

*Answers:* **1.** Reflexive: $\forall a\ (a \,R\, a)$;
antisymmetric: $\forall a, b\ ((a \,R\, b \land b \,R\, a) \to a =
b)$; transitive: $\forall a, b, c\ ((a \,R\, b \land b \,R\, c) \to
a \,R\, c)$; total adds $\forall a, b\ (a \,R\, b \lor b \,R\, a)$.
**2.** $(\varnothing, \{a\})$, $(\varnothing, \{b\})$,
$(\varnothing, \{a, b\})$, $(\{a\}, \{a, b\})$, $(\{b\}, \{a, b\})$.
**3.** If $S \subseteq T$ and $T \subseteq S$, extensionality gives
$S = T$. **4.** Symmetric: $\forall a, b\ ((a \sim b) \to (b \sim
a))$; transitive: $\forall a, b, c\ ((a \sim b \land b \sim c) \to
(a \sim c))$. **5.** One class per birth month: the people born in
each month. **6.** $w \in [x] \to w \sim x$; with $x \sim y$,
transitivity gives $w \sim y$, so $w \in [y]$; extensionality gives
$[x] = [y]$. **7.** The partition (the disjoint cover) that the
relation's classes realize. **8.** Disjointness means a member of $S$
lies in at most one family member, so "the member containing it" is
unique.

## 4. Functions: Relations with Two Extra Laws

**Definition (function).** $f \subseteq S \times T$ is a function
$S \to T$ when:

- **total**: $\forall x \in S\ \exists y \in T,\ (x, y) \in f$;
- **single-valued**: $\forall x \in S\ \forall y, y' \in T\ ((x, y)
  \in f \land (x, y') \in f) \to y = y'$.

Write $f(x) = y$ for the unique $y$.

**Definition.** $f$ is **injective** when $\forall x, x' \in S\ (f(x)
= f(x') \to x = x')$; **surjective** when $\forall t \in T\ \exists
s \in S,\ f(s) = t$; **bijective** when both.

**Ponder.** Before reading on: try to *undo* a forgetting function.
Inputs: the people of a room. Outputs: their birth-months,
$f(x) :=$ the month of $x$. Attempt an inverse $g$: from "March",
recover the person. What must $g$ demand of the room?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Two failures, and they are the definition. Several people share a
month, so "March" cannot name one person to return: $f$ is not
injective. Some months have no person at all, so some outputs have no
input to return: $f$ is not surjective. Injective + surjective =
bijective is exactly undoability. The theorem below proves the
"exactly".

</div>
</details>

**Definition (composition).** $g \circ f: S \to U$ with
$(g \circ f)(x) := g(f(x))$.

**Theorem (inverse).** $f$ is bijective if and only if there exists
$g: T \to S$ with $g \circ f = \mathrm{id}_S$ and $f \circ g =
\mathrm{id}_T$; $g$ is then unique.

*Proof.* ($\to$) Define $g(t) :=$ the unique $s$ with $f(s) = t$;
surjectivity gives existence, injectivity gives uniqueness (so $g$
satisfies single-valuedness), and totality holds since every $t \in
T$ is some $f(s)$. Then $g(f(x)) = x$ and $f(g(t)) = t$ by
construction. ($\leftarrow$) Given $g$: injectivity of $f$ holds
because $f(x) = f(x')$ implies $x = g(f(x)) = g(f(x')) = x'$;
surjectivity holds because every $t$ equals $f(g(t))$. Uniqueness of
$g$: if $g'$ also inverts $f$, then for every $t$: $t = f(g(t))$, so
$g'(t) = g'(f(g(t))) = g(t)$; extensionality gives $g' = g$.
$\blacksquare$

**Theorem (no surjection onto the power set).** For every $f: S \to
\mathcal{P}(S)$ there exists $D \subseteq S$ with $D \notin f$'s
image.

*Proof.* $D := \{x \in S : x \notin f(x)\}$ (bounded comprehension).
If $f(s) = D$ for some $s$: $s \in D \leftrightarrow s \notin D$ by
$D$'s definition, contradicting the classical-logic axiom. So $D$ is
unhit. $\blacksquare$

**Quick check.**

1. Write the two function laws as formal $\forall/\exists$
   statements.
2. State injective, surjective as formal statements.
3. Prove: the composition of two injections is injective.
4. Where do surjectivity and injectivity each enter the inverse
   construction?
5. In the diagonal proof, which axiom does the final contradiction
   invoke?
6. For $S = \{a\}$: give $f: S \to \mathcal{P}(S)$ and an unhit
   subset.
7. Prove: if $f$ is injective and $g \circ f$ is defined, then $g
   \circ f$ injective implies $g$ injective on $f$'s image.
8. Why does the uniqueness proof of $g$ use extensionality?

*Answers:* **1.** Total: $\forall x \in S\ \exists y \in T\ ((x, y)
\in f)$; single-valued: $\forall x\ \forall y, y'\ (((x, y) \in f
\land (x, y') \in f) \to y = y')$. **2.** Injective:
$\forall x, x'\ (f(x) = f(x') \to x = x')$; surjective:
$\forall t \in T\ \exists s \in S\ (f(s) = t)$. **3.** Let $g(f(x))
= g(f(x'))$; $g$ injective gives $f(x) = f(x')$; $f$ injective gives
$x = x'$. **4.** Surjectivity guarantees the preimage exists
(totality of $g$); injectivity guarantees it is unique (single-
valuedness). **5.** The classical-logic axiom: "$s \in D
\leftrightarrow s \notin D$" is neither T nor F. **6.** $f(a) :=
\varnothing$; the unhit subset is $\{a\}$. **7.** Restrict $g$ to
$f$'s image; the same argument as Theorem inverse-unique applies
there. **8.** Two functions with the same values on every input are
the same set of pairs.

## 5. The False Proof, Dissected

**The claim.** $\forall x\ \exists y,\ M(x, y) \to \exists y\ \forall
x,\ M(x, y)$, where $M(x, y)$ means "$y$ is the mother of $x$" and
the domain is all people. The premise is true; the conclusion is
false.

> **The false proof.** Fix an arbitrary person $x$. By the premise,
> some $y$ satisfies $M(x, y)$, namely $x$'s mother. Since $x$ was
> arbitrary, this $y$ works for every person. $\blacksquare$

**The autopsy.** The premise licenses a witness $y$ *for each $x$*,
possibly different per $x$: write it $y = m(x)$. The step "since $x$
was arbitrary" generalises over $x$ while $y = m(x)$ silently
depends on it. The licence for universal introduction demands the
witness be independent of the generalised variable; here the
dependence is the entire content. Formally: from $\forall x\
\exists y\ R(x, y)$ one may derive $\forall x\ R(x, m(x))$ for a
witness function $m$, but never $\exists y\ \forall x\ R(x, y)$.

**The counterexample (representation).** Domain $\{a, b\}$; the
relation as an explicit set of pairs:
$L = \{(a, a), (b, b)\}$.

| $L$ | $a$ | $b$ |
|---|---|---|
| $a$ | ✓ | |
| $b$ | | ✓ |

Then $\forall x\ \exists y,\ L(x, y)$ holds ($y := x$), while
$\exists y\ \forall x,\ L(x, y)$ fails: $a$ is not loved by $b$ and
$b$ is not loved by $a$. Premise true, conclusion false.

**The second monster.** "Every person is tall or short": take any
person; they are not both tall and short; so they are tall or short.
The gap: "not both" yields "one of the two" only when the two cases
exhaust, and middle height is neither. Exhaustive dichotomy means
$P \lor \neg P$ (the classical-logic axiom), and each case must reach
the conclusion independently.

**The four licensed shapes.** Direct proof; contrapositive
(Section 1's table); contradiction (the axiom); exhaustive cases.
Everything later is built from these.

**Ponder.** Before reading on: the false proof is error-shaped, not
nonsense-shaped. Why does the course demand counterexamples of
exactly that kind?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

A nonsense argument teaches nothing; an error-shaped argument is one
a careful person could produce, so its error marks a boundary in the
method. Dissecting it yields a rule: existential witnesses may depend
on the variable, universal witnesses may not. The rule outlives the
example: conjecture, attempt, monster, repaired definition.

</div>
</details>

**Quick check.**

1. State the violated rule as a $\forall/\exists$ statement.
2. Write the counterexample's relation $L$ as a set of pairs and
   verify both quantified claims.
3. What licence does a case proof need beyond exhaustion?
4. Which of the four shapes rests on the classical-logic axiom?
5. Prove: $\exists y\ \forall x,\ R(x, y)$ implies $\forall x\
   \exists y,\ R(x, y)$ (the converse direction is valid). Which
   direction is the false proof?
6. Give a relation $R$ on $\{a, b\}$ where both quantified claims
   hold.
7. In the false proof, what is the witness function $m$, explicitly?
8. Why does the counterexample need the domain to have at least two
   elements?

*Answers:* **1.** $\forall x\ \exists y\ R(x, y)$ does not imply
$\exists y\ \forall x\ R(x, y)$: the existential witness $y$ may
depend on $x$. **2.** $L = \{(a, a), (b, b)\}$;
$\forall x\ \exists y$ holds with $y := x$;
$\exists y\ \forall x$ fails since neither $a$ nor $b$ is loved by
both. **3.** Independent arguments per case. **4.** Cases (exhaustive
dichotomy $P \lor \neg P$) and contradiction. **5.** The valid
direction; the false proof ran the invalid direction (universal to
existential). **6.** $R = \{(a, a), (b, b), (a, b)\}$: $y := b$
serves both. **7.** $m(x) :=$ the mother of $x$; a function on the
domain. **8.** On a one-element domain both claims hold, so no
counterexample exists there.

## Stage Gate

Before Stage B, answer these five without notes. Pass mark: four. A
failed gate names the section to reread (1: Section 1; 2: Section 2;
3: Section 3; 4: Section 4; 5: Section 5).

1. State the induction-adjacent rule: what may each line of a proof
   be?
2. Define bounded comprehension, and name the paradox it prevents.
3. State the partition correspondence.
4. Prove: the composition of two bijections is a bijection (Problem 3
   develops this; the gate wants the shape).
5. State the quantifier rule the false proof violated.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** Axiom, definition, previously proved statement, rule-licensed
consequence. **2.** $\{x \in S : P(x)\}$ collects inside a given $S$;
unbounded $\{x : P(x)\}$ produces Russell's $R$. **3.** Classes are a
disjoint cover; every disjoint cover induces exactly one equivalence
relation. **4.** $g \circ f$ surjective: for $z \in U$, pick $t$
with $g(t) = z$, then $x$ with $f(x) = t$; injective: $g(f(x)) =
g(f(x'))$ gives $f(x) = f(x')$ by $g$ injective, then $x = x'$ by $f$
injective. **5.** $\forall x\ \exists y\ R(x, y) \not\to \exists
y\ \forall x\ R(x, y)$: the universal witness may not depend on the
generalised variable.

</div>
</details>

## Problems

**Problems.** The quick checks tested recall. These chain several
results and require full written arguments.

1. Prove $\subseteq$ on $\mathcal{P}(S)$ is a partial order
   (reflexive, antisymmetric, transitive), then take $S = \{a, b\}$
   and show it is not total.
   *(Hint: antisymmetry is extensionality; the transitivity chase is
   three licensed steps.)*
2. Prove the pair law: $(a, b) = (c, d) \leftrightarrow (a = c \land
   b = d)$ for the Kuratowski recipe.
   *(Hint: the case $a = b$ collapses $\{\{a\}, \{a, b\}\}$ to
   $\{\{a\}\}$, forcing $c = d = a$; otherwise $\{a\} = \{c\}$
   forces $a = c$, then compare remaining members.)*
3. Prove: the composition of two bijections is a bijection, and
   $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.
   *(Hint: the two inverting laws for the pair are
   $x = f^{-1}(g^{-1}((g \circ f)(x)))$ and
   $z = (g \circ f)(f^{-1}(g^{-1}(z)))$.)*
4. Prove: there is no injective function from $\{x, y, z\}$ to
   $\{u, v\}$, by exhaustive cases on $(f(x), f(y), f(z))$.
   *(Hint: each branch is a complete choice of outputs, and with two
   outputs some branch forces a collision $f(x_i) = f(x_j)$,
   $i \neq j$.)*
5. In the diagonal proof, attempt the same construction with
   $\mathcal{P}(S)$ replaced by $S \times S$: try $D := \{x \in S :
   (x, x) \notin f(x)\}$. Where exactly does the argument fail?
   *(Hint: the contradiction required $f(s) = D$ to be possible, that
   is, $D \in f$'s codomain; $S \times S$ is not $\mathcal{P}(S)$.)*

## Where to Go Next

Stage B (Counting) defines the counting numbers by five declarations
(the Peano axioms), proves induction, addition, multiplication, order,
division with remainder, and the counting arguments: arithmetic
becomes a theorem, and this page's equivalence classes and bijections
are its instruments.

**Next: [Stage B: Counting](/17-core-course/stage-b-counting/).**
