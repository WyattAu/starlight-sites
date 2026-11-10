---
date: 2026-11-09T00:00:00+00:00
title: "Stage A: Reasoning"
description: "The course's foundation, built by guided rediscovery with no numbers at all: you construct the connectives as truth tables before they are named, sort a room into groups before the word 'equivalence class' appears, discover the contrapositive and De Morgan's laws from your own tables, and dissect a false proof that fails by swapping two quantifiers. Every definition arrives as the name of something you already built."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage A: Reasoning", "url": "https://mathematics.wyattau.com/17-core-course/stage-a-reasoning"}]
}
</script>

**The Defect.** The books say "clearly" where you see no argument. The
conclusion you draw is that proof is a talent you lack. It is not. A
proof is a finite sequence of statements in which every line is declared
up front or licensed by earlier lines. This page does not hand you that
definition. You will build it, alongside everything else on this page:
each formal name arrives only *after* you have constructed the thing it
names, and each proof arrives only after you have attempted the claim.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
proof is a syntactic object, checkable without understanding: every line
declared or licensed. Five constructed parts (truth tables,
quantifiers, sets, relations, functions) and one dissection of an
argument that satisfies every line except the licence.</span>

*The blur is deliberate: form your own reading of the page first, then
click it.*

**Scope.** The floor is literacy and pattern recognition. One axiom is
adopted (Section 1, stated in full, recorded in the course map's axiom
table). Three remarks carry the forward-honesty marker; no proof uses
future content.

## 1. Propositions, Connectives, Quantifiers, Proof

**Ponder 1 (construct the connectives).** Here are four sentences.

1. "Wednesday follows Tuesday, and the sun rises in the east."
2. "Wednesday follows Tuesday, or the sun rises in the west."
3. "It is false that the sun rises in the west."
4. "If Wednesday follows Tuesday, then the sun rises in the west."

Each sentence's truth is decided by the truth of its parts. Work out
the rule for each pattern, for all four combinations of true and false
parts, and write your four rules as a table with four rows.

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

Pattern 1: true exactly when both parts are true. Pattern 2: true
exactly when at least one part is true. Pattern 3: true exactly when
its single part is false. Pattern 4: false exactly when the first part
is true and the second is false; the remaining three rows are all true.

</div>
</details>

**Definition (proposition, connectives).** A **proposition** is a
sentence that is exactly one of true (T) or false (F). For
propositions $P, Q$, the connectives are the four rules you just
built, named:

| $P$ | $Q$ | $\neg P$ | $P \land Q$ | $P \lor Q$ | $P \to Q$ | $P \leftrightarrow Q$ |
|-----|-----|----------|-------------|------------|-----------|------------------------|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

$\neg$ not; $\land$ both; $\lor$ at least one; $\to$ if-then;
$\leftrightarrow$ same truth value.

**Ponder 2 (the contested row).** The $(F, F)$ row of $P \to Q$ says
the implication is true. Argue against your own objection: what does
"$P \to Q$" claim about the world when $P$ is false?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

It claims nothing about $Q$: the claim is that the cases with $P$ true
all have $Q$ true, and there are no such cases. An alternative row
(F, F) read as false would break the later constructions that rest on
vacuous cases (Section 2's $\varnothing \subseteq S$). A convention is
judged by its consequences; this row has none that conflict.

</div>
</details>

**Axiom (classical logic).** Every proposition is exactly one of T or
F, and a derivation of a contradiction from $\neg P$ licenses a proof
of $P$. Adopted, not proved; recorded in the course map's axiom table;
every later use is flagged.

**Definition (quantifiers).** For a domain $D$ and proposition
$P(x)$:

- $\forall x \in D,\ P(x)$ := for every $x \in D$, $P(x)$ holds.
- $\exists x \in D,\ P(x)$ := for at least one $x \in D$, $P(x)$
  holds.

Quantifiers stack and **order is meaning**:
$\forall x\ \exists y,\ R(x, y)$ permits $y$ to depend on $x$;
$\exists y\ \forall x,\ R(x, y)$ demands one $y$ serving every $x$.

**Ponder 3 (construct the definition of proof).** Before reading the
definition below, attempt it: what must every line of a proof be, if
the proof is to be checkable by someone who does not share your
intuitions?

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

Each line must be something already agreed: an axiom (declared up
front), a definition, a previously proved statement, or something the
earlier lines force. Anything else, however convincing, is
unchecked. The words "clearly" and "obviously" name skipped lines.

</div>
</details>

**Definition (proof).** A proof of $P$ is a finite sequence of
statements ending in $P$ in which every line is an axiom, a
definition, a previously proved statement, or a consequence of earlier
lines by the rules of Section 1. No other line is permitted.

**Ponder 4 (discover the contrapositive).** Before the theorem: it
rained, so the ground is wet. You look and the ground is *dry*. What
do you conclude about the rain, and is your conclusion as reliable
as the original "if it rained, the ground is wet"? Write both as
symbols and compare their truth tables.

<details class="wn-spoiler">
<summary>Compare your discovery</summary>
<div class="wn-spoiler-body">

"$P \to Q$" and "$\neg Q \to \neg P$" (if not wet, then no rain) are
true on the same rows and false on the same rows: the second sentence
carries exactly the information of the first. This is the
**contrapositive**, and the table is the proof.

</div>
</details>

**Theorem (contrapositive).** $(P \to Q) \leftrightarrow (\neg Q \to
\neg P)$.

*Proof.* The table with two computed columns:

| $P$ | $Q$ | $P \to Q$ | $\neg Q$ | $\neg P$ | $\neg Q \to \neg P$ |
|-----|-----|-----------|----------|----------|----------------------|
| T | T | T | F | F | T |
| T | F | F | T | F | F |
| F | T | T | F | T | T |
| F | F | T | T | T | T |

The columns $P \to Q$ and $\neg Q \to \neg P$ agree in all four rows:
the two sentences carry the same information in every possible world.
$\blacksquare$

*In words:* knowing an implication is true and knowing its contrapositive
is true are the same knowledge: if the conclusion fails, the
hypothesis must have failed, or the implication would have been false.

:::note[Quick check]

1. Construct the truth table of $\neg(P \land Q)$ and of
   $\neg P \lor \neg Q$; what do you observe?
2. In which rows is $P \to Q$ true with $Q$ false?
3. State the classical-logic axiom, and where it is recorded.
4. How many rows does the table of three propositions $P, Q, R$
   have?
5. Prove $P \to (Q \to P)$ from the table.
6. Prove $\neg(P \to Q) \leftrightarrow (P \land \neg Q)$ from the
   table.
7. What licence does each line of a proof carry?
8. Prove or disprove: $(P \to Q) \to (Q \to P)$. Does the converse
   carry the same information?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Identical columns in all four rows (De Morgan's
law, by enumeration). **2.** None: $P \to Q$ is false exactly in row
(T, F). **3.** T/F exclusivity and double-negation licensing;
recorded in the course map's axiom table. **4.** Eight: every
assignment of T/F to the three propositions. **5.** Rows 2 to 4 have
$P$ false, so $P \to Q$ is true in them, whatever $Q$; in row 1, $Q$
is true. **6.** The negation of $P \to Q$ is T only in row (T, F),
which is exactly where $P \land \neg Q$ is T. **7.** Axiom,
definition, previously proved statement, rule-licensed consequence.
**8.** Disprove: row (F, T) has $P \to Q$ true and $Q \to P$ false;
the converse does not follow.

</div>
</details>

:::

## 2. Sets: Membership, Operations, Products, Power Sets

**Ponder 5 (construct extensionality).** Here are two descriptions of
a collection of counting numbers. Description one: the even counting
numbers below twenty. Description two: the counting numbers that are
twice some counting number below ten. Write out both collections and
compare them: the descriptions differ in wording, but the collections
should land on exactly the same elements. Now attempt the rule that
decides, from the elements alone, whether two descriptions name the
same *set*.

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

The two lists coincide: every even counting number below twenty is
twice some counting number below ten (halve it), and every double of
a counting number below ten is an even counting number below twenty.
The rule: two sets are equal exactly when they have the same elements
: $\forall x\ (x \in S \leftrightarrow x \in T)$. This is
**extensionality**, and it is the only way two sets can differ. The
two descriptions above pick out the same elements, so they name the
same set: a set is its membership, not its description.

</div>
</details>

**Definition (set, extensionality).** A set is a collection of
objects, its elements; sets $S, T$ are equal exactly when
$\forall x\ (x \in S \leftrightarrow x \in T)$.

**Ponder 6 (construct the operations).** Take two concrete sets,
$S := \{a, b, c, d\}$ and $T := \{c, d, e, f\}$. Work by listing:
which elements belong to both at once? Which belong to at least one?
Which belong to $S$ yet fail to belong to $T$? Each of your three
answers was produced by running a *test* on a candidate element $x$,
and the test used nothing but the two membership facts $x \in S$,
$x \in T$, joined by "and", "or", or "not". Now the construction:
write down each of your three tests as a formula in $\in$, $\land$,
$\lor$, and parentheses, so that the formula collects exactly the
elements your list collected. Then attempt a fourth, different in
kind: a single sentence that says *every* element of $S$ passes the
membership test for $T$.

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

Your first list is collected by the test $x \in S \land x \in T$,
the second by $x \in S \lor x \in T$, the third by $x \in S \land x
\notin T$. Read as definitions, each formula sweeps the test into a
set:
- $S \cap T := \{x : x \in S \land x \in T\}$.
- $S \cup T := \{x : x \in S \lor x \in T\}$.
- $S \setminus T := \{x : x \in S \land x \notin T\}$.

The fourth attempt is different in kind: it does not test one
candidate $x$ but claims something about all of them at once,
$S \subseteq T :\Longleftrightarrow \forall x\ (x \in S \to x \in
T)$. Check it against the concrete pair: with $S$ and $T$ as above,
$S \subseteq T$ fails, and your listing shows why, since $a$ belongs
to $S$ but not to $T$.

Four constructions, the first three from one connective each, the
fourth from a quantifier; all four are bounded comprehensions, which
is the licence Section 2 states next.

</div>
</details>

**Definition (bounded comprehension).** For a set $S$ and proposition
$P$: $\{x \in S : P(x)\}$ collects the elements of $S$ satisfying
$P$. The unbounded form $\{x : P(x)\}$ is forbidden; the next ponder
is the reason.

**Ponder 7 (the monster).** Let $R$ be "the set of all sets that are
not members of themselves". Ask whether $R \in R$, under both
possible answers. What does the contradiction diagnose?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

$R \in R \to R \notin R$ and $R \notin R \to R \in R$: a proposition
that is neither T nor F, violating the classical-logic axiom. The
axiom is innocent; the unbounded comprehension is the culprit.
Bounded comprehension collects only inside an existing set, and every
set in this course is built that way.

</div>
</details>

**Definition.** $\varnothing :=$ the set with $\forall x\ (x \notin
\varnothing)$.

**Ponder 8 (construct the product).** Stage A has sets but no way to
pair two elements. Invent, using only sets and the membership
relation, an object $(a, b)$ that determines $a$ and $b$ uniquely.

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

The recipe: $(a, b) := \{\{a\}, \{a, b\}\}$. It is justified by one
theorem: $(a, b) = (c, d) \leftrightarrow (a = c \land b = d)$
(Problem 2 proves it). The ugliness is the price of building pairs
from extensionality alone, with no new kinds of object declared.

</div>
</details>

**Definition (product, power set).** $S \times T := \{(s, t) : s \in
S \land t \in T\}$. $\mathcal{P}(S) := \{T : T \subseteq S\}$.

**Example (representation).** $\mathcal{P}(\{a, b\}) = \{\varnothing,
\{a\}, \{b\}, \{a, b\}\}$: one subset per way of deciding, for each
element separately, in or out. $\blacksquare$

:::note[Quick check]

1. State extensionality as a formal $\forall \leftrightarrow$
   statement.
2. Prove $S \cap T \subseteq S$ (element chase, three licensed
   steps).
3. Prove: $\varnothing \in \mathcal{P}(\varnothing)$.
4. Prove: $S \subseteq T \to S \cup T = T$.
5. List $\mathcal{P}(\{a, b, c\})$ completely.
6. Compute $(S \setminus T) \cup (T \setminus S)$ for $S = \{a, b\}$,
   $T = \{b, c\}$.
7. Prove $S \cap (T \cup U) = (S \cap T) \cup (S \cap U)$ by element
   chase, citing the connective table.
8. What paradox does unbounded comprehension produce, and which
   axiom does it violate?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $S = T :\Longleftrightarrow \forall x\ (x \in S
\leftrightarrow x \in T)$. **2.** Let $x \in S \cap T$; the $\land$
rule gives $x \in S$; so $S \cap T \subseteq S$. **3.** True:
$\mathcal{P}(\varnothing) = \{\varnothing\}$. **4.** $\supseteq$
direct; $\subseteq$: $x \in S \cup T$ is $x \in S \lor x \in T$;
either branch gives $x \in T$. **5.** $\varnothing$, the three
singletons, the three pairs, the whole set. **6.** $\{a, c\}$: the
elements in exactly one of the two sets. **7.** The chase reduces to
$\land$ distributing over $\lor$, row-checked in Section 1. **8.**
Russell's $R$: neither $R \in R$ nor $R \notin R$, violating the
classical-logic axiom; bounded comprehension is the repair.

</div>
</details>

:::

## 3. Relations: Order and Equivalence

**The naive conjecture.** "Order" means everything compares. Refuted
immediately by Section 2: the singletons $\{a\}$ and $\{b\}$ neither
contain each other. The repair is a definition, and you will
construct its laws yourself.

**Ponder 9 (construct the order laws).** Section 2 gave you
$\subseteq$ on $\mathcal{P}(\{a, b\})$. Study its behaviour and
invent the three laws every "order" must satisfy, plus the extra law
$\subseteq$ fails.

<details class="wn-spoiler">
<summary>Compare your construction</summary>
<div class="wn-spoiler-body">

- Reflexive: $\forall a\ (a \,R\, a)$.
- Antisymmetric: $\forall a, b\ ((a \,R\, b \land b \,R\, a) \to a =
  b)$.
- Transitive: $\forall a, b, c\ ((a \,R\, b \land b \,R\, c) \to a
  \,R\, c)$.
- Totality: $\forall a, b\ (a \,R\, b \lor b \,R\, a)$, the law
  $\subseteq$ fails on $\{\{a\}, \{b\}\}$.

</div>
</details>

**Definition (relations, order).** A relation on $S$ is an element
$R \in \mathcal{P}(S \times S)$; write $x \,R\, y :\Longleftrightarrow
(x, y) \in R$. $R$ is a partial order when it satisfies your three
laws; a total order when it also satisfies comparability.

**Theorem (representation check).** $\subseteq$ on
$\mathcal{P}(\{a, b\})$ is a partial order and not total.

*Proof.* Reflexive: $X \subseteq X$ for every subset, by definition.
Antisymmetric: $X \subseteq Y$ and $Y \subseteq X$ is mutual
containment, which is extensionality. Transitive: $x \in X \to x \in
Y \to x \in Z$. Not total: $\{a\}$ and $\{b\}$ are incomparable.
$\blacksquare$

*In words:* the subset relation never surprises: everything contains
itself, containment cannot run both ways between distinct sets, and
containment chains. But it does not line its elements up in a row:
$\{a\}$ and $\{b\}$ sit beside each other with no order between them.

**Ponder 10 (sort the room).** Take the people in a room and sort
them into groups by birth month: everyone born in January goes into
one group, everyone born in February into another, and so on. Answer
three questions from your sorting:

1. Does every person land in exactly one group?
2. If two people are in the same group, what can you say about
   anyone else in that group?
3. Invent a rule written with "same" that decides, for any two
   people, whether they belong to the same group.

<details class="wn-spoiler">
<summary>What you built</summary>
<div class="wn-spoiler-body">

1. Yes: the groups partition the room.
2. Every other member of that group is the same kind of person for
   this sorting (born in the same month).
3. The rule: $x \sim y$ when $x$ and $y$ were born in the same
   month.

What you have built is a **relation** (a rule deciding relatedness
for pairs), and your groups are the classes of that relation. The
words come after the construction, as labels for what you made.

</div>
</details>

**Definition (relations, equivalence).** A relation on $S$ is an
element $R \in \mathcal{P}(S \times S)$; write $x \sim y
:\Longleftrightarrow (x, y) \in R$. $R$ is an **equivalence
relation** when:

- reflexive: $\forall a\ (a \sim a)$;
- symmetric: $\forall a, b\ ((a \sim b) \to (b \sim a))$;
- transitive: $\forall a, b, c\ ((a \sim b \land b \sim c) \to (a
  \sim c))$.

For $x \in S$, the **equivalence class** of $x$ is
$[x] := \{y \in S : y \sim x\}$, the group that $x$ belongs to under
your sorting. The classes are what you built when you sorted the
room: the January class, the February class, and so on.

**Theorem (the partition correspondence).** The classes of an
equivalence relation on $S$ form a disjoint cover of $S$; conversely,
every disjoint cover $\{F_i\}$ of $S$ induces exactly one equivalence
relation ("same $F_i$").

**Ponder (attempt it).** The first direction's danger is overlap: two
distinct classes sharing an element. Settle this before reading the
proof: if two classes share even one element, must they share *all*
their elements? Try to build a pair of classes that overlap without
coinciding before reading why no such pair exists.

<details class="wn-spoiler">
<summary>The proof, explained alongside</summary>
<div class="wn-spoiler-body">

Cover and nonempty: every $x$ sits in its own class $[x]$ (by
reflexivity), so the classes cover $S$ and none is empty.

Disjointness (the trap you were asked to attempt): suppose $z$ sits
in both $[x]$ and $[y]$. From the definitions: $z \sim x$ and $z \sim
y$. Symmetry turns the first into $x \sim z$; transitivity chains
$x \sim z \sim y$ into $x \sim y$. Now take *any* member $w$ of
$[x]$: $w \sim x$, and $x \sim y$, so $w \sim y$, meaning $w \in
[y]$ too. Every member of $[x]$ is a member of $[y]$; the two
classes are equal, not partially overlapping.

**In words:** a shared single element forces the groups to be
identical, because "same group as" is transitive: anyone in $x$'s
group is automatically in $y$'s group once $x$ and $y$ share a
member. The "half-sharing" you may have imagined cannot exist.

Converse: given the disjoint cover, "same member" is reflexive
(everyone is in some member), symmetric (if $x$ and $y$ share a
member, so do $y$ and $x$), and transitive (if $x$ and $y$ share one
member and $y$ and $z$ share one, those members both contain $y$, so
by disjointness they are the same member, which then contains $z$).
$\blacksquare$

</div>
</details>

**Why this matters for the rest of the course.** An equivalence
relation is a way of *pretending two distinct things are the same*,
safely: everything true of a class member that depends only on
class-membership is true of the whole class. Stage C will declare two
pairs of counting numbers "the same number" under exactly such a
relation, and the integers are born. The sorting you did in this
section is the prototype of that construction.

:::note[Quick check]

1. State the three order laws as formal $\forall$-statements.
2. List the ordered pairs $(X, Y)$ with $X \subsetneq Y$ in the
   $\mathcal{P}(\{a, b\})$ table.
3. Prove antisymmetry of $\subseteq$ from extensionality alone.
4. State symmetry and transitivity formally.
5. For the same-birth-month relation: state the rule in symbols and
   list the classes.
6. Prove $x \sim y \to [x] = [y]$ (symmetry, transitivity,
   extensionality: three lines).
7. What does the converse half of the correspondence construct?
8. Your room-sorting satisfied one more property the birth-month
   relation has: name it. (Every person is in *some* group.)

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Reflexive: $\forall a\ (a \,R\, a)$;
antisymmetric: $\forall a, b\ ((a \,R\, b \land b \,R\, a) \to a =
b)$; transitive: $\forall a, b, c\ ((a \,R\, b \land b \,R\, c) \to
a \,R\, c)$; total adds $\forall a, b\ (a \,R\, b \lor b \,R\, a)$.
**2.** $(\varnothing, \{a\})$, $(\varnothing, \{b\})$,
$(\varnothing, \{a, b\})$, $(\{a\}, \{a, b\})$, $(\{b\}, \{a, b\})$.
**3.** Mutual containment is extensionality. **4.** Symmetric:
$\forall a, b\ ((a \sim b) \to (b \sim a))$; transitive:
$\forall a, b, c\ ((a \sim b \land b \sim c) \to (a \sim c))$.
**5.** $x \sim y :\Longleftrightarrow$ born in the same month; the
classes are the twelve birth-month groups. **6.** $w \in [x] \to w
\sim x$; $x \sim y$ gives $w \sim y$; so $[x] \subseteq [y]$;
symmetric argument gives the reverse inclusion. **7.** The disjoint
cover the classes realize. **8.** Every class is nonempty: everyone
lands in some group (the covering half of the correspondence).

</div>
</details>

:::

## 4. Functions: Relations with Two Extra Laws

**Definition.** $f \subseteq S \times T$ is a function $S \to T$
when:

- **total**: $\forall x \in S\ \exists y \in T,\ (x, y) \in f$;
- **single-valued**: $\forall x \in S\ \forall y, y' \in T\ ((x, y)
  \in f \land (x, y') \in f) \to y = y'$.

Write $f(x) = y$ for the unique $y$.

**Ponder 13 (undoing).** Try to undo a function that forgets
information. The function $f$ sends each person in a room to their
birth month: $f(x)$ is the month of $x$. Attempt an inverse $g$ that
takes a month, such as March, and recovers the person born in it.
What does $g$ have to demand of the room before it can exist?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

The demand fails twice, and the failures are the definition. Several
people share a month, so "March" cannot name a person: $f$ is not
injective, and collisions are exactly what undoing cannot survive. No
month is guaranteed occupied, so some outputs have no person to
return to: $f$ is not surjective, and gaps are the other thing
undoing cannot survive. Injective + surjective = bijective is
exactly undoability. The theorem below says that "exactly" is exact.

</div>
</details>

**Definition.** $f$ is **injective** when $\forall x, x' \in S\ (f(x)
= f(x') \to x = x')$; **surjective** when $\forall t \in T\ \exists
s \in S,\ f(s) = t$; **bijective** when both.

**Definition (composition).** $g \circ f: S \to U$ with
$(g \circ f)(x) := g(f(x))$.

**Theorem (inverse).** $f$ is bijective if and only if there exists
$g: T \to S$ with $g \circ f = \mathrm{id}_S$ and $f \circ g =
\mathrm{id}_T$; $g$ is unique.

*Proof.* ($\to$) Define $g(t) :=$ the unique $s$ with $f(s) = t$;
surjectivity gives existence, injectivity gives uniqueness (so $g$
satisfies single-valuedness), and totality holds since every $t \in
T$ is some $f(s)$. Then $g(f(x)) = x$ and $f(g(t)) = t$ by
construction. ($\leftarrow$) Given $g$: injectivity of $f$ holds
because $f(x) = f(x')$ implies $x = g(f(x)) = g(f(x')) = x'$;
surjectivity holds because every $t$ equals $f(g(t))$. Uniqueness:
if $g'$ also inverts $f$, then for every $t$: $t = f(g(t))$, so
$g'(t) = g'(f(g(t))) = g(t)$; extensionality gives $g' = g$.
$\blacksquare$

*In words:* a bijection pairs up two sets with no collisions and no
leftovers, and the pairing can be walked in either direction; that
is all an inverse is.

**Theorem (no surjection onto the power set).** For every $f: S \to
\mathcal{P}(S)$ there exists $D \subseteq S$ with $D \notin f$'s
image.

**Ponder (attempt it).** Construct $D$ before reading the proof.
(Hint: $D$ must disagree with $f(s)$ *at* $s$, for every $s$.)

*Proof.* $D := \{x \in S : x \notin f(x)\}$ (bounded comprehension).
If $f(s) = D$ for some $s$: $s \in D \leftrightarrow s \notin D$ by
$D$'s definition, contradicting the classical-logic axiom. So $D$ is
unhit. $\blacksquare$

*In words:* whatever list of subsets $f$ provides, the subset $D$ is
built to disagree with the listed subset at its own position, the
same diagonal move Stage D will run against lists of the real line.

:::note[Quick check]

1. Write the two function laws formally.
2. Write injective and surjective formally.
3. Prove: the composition of two injections is injective.
4. Where do surjectivity and injectivity each enter the inverse
   construction?
5. In the diagonal proof, which axiom does the contradiction invoke?
6. For $S = \{a\}$: give $f: S \to \mathcal{P}(S)$ and an unhit
   subset.
7. Prove: $f$ injective and $g \circ f$ injective imply $g$
   injective on $f$'s image.
8. Why does the uniqueness of $g$ end with extensionality?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** Total: $\forall x \in S\ \exists y \in T\ ((x, y)
\in f)$; single-valued: $\forall x\ \forall y, y'\ (((x, y) \in f
\land (x, y') \in f) \to y = y')$. **2.** Injective:
$\forall x, x'\ (f(x) = f(x') \to x = x')$; surjective:
$\forall t \in T\ \exists s \in S\ (f(s) = t)$. **3.** $g(f(x)) =
g(f(x'))$ gives $f(x) = f(x')$ by $g$ injective, then $x = x'$ by $f$
injective. **4.** Surjectivity: existence of the preimage;
injectivity: its uniqueness. **5.** "$s \in D \leftrightarrow s
\notin D$" is neither T nor F. **6.** $f(a) := \varnothing$; the
unhit subset is $\{a\}$. **7.** $g(f(x)) = g(f(x'))$ gives $f(x) =
f(x')$, then $x = x'$. **8.** Two functions with the same values on
every input are the same set of pairs.

</div>
</details>

:::

## 5. The False Proof, Dissected

**The claim.** $\forall x\ \exists y,\ M(x, y) \to \exists y\
\forall x,\ M(x, y)$, where $M(x, y)$ means "$y$ is the mother of
$x$" and the domain is all people. The premise is true; the
conclusion is false.

> **The false proof.** Fix an arbitrary person $x$. Some $y$ has
> $M(x, y)$, namely $x$'s mother. Since $x$ was arbitrary, this $y$
> works for every person. $\blacksquare$

**Ponder (dissect it yourself first).** Find the exact step where the
licence fails, and state the failure as a rule.

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

The premise licenses a witness $y$ *for each $x$*, possibly
different per $x$: write it $y = m(x)$, the mother of $x$. "Since
$x$ was arbitrary" generalises over $x$ while $y = m(x)$ depends on
it: the licence for universal introduction demands the witness be
independent of the generalised variable. The rule:
$\forall x\ \exists y\ R(x, y)$ licenses $\forall x\ R(x, m(x))$,
never $\exists y\ \forall x\ R(x, y)$.

</div>
</details>

**The counterexample (representation).** Domain $\{a, b\}$; relation
$L := \{(a, a), (b, b)\}$:

| $L$ | $a$ | $b$ |
|---|---|---|
| $a$ | ✓ | |
| $b$ | | ✓ |

$\forall x\ \exists y,\ L(x, y)$ holds ($y := x$);
$\exists y\ \forall x,\ L(x, y)$ fails: $a$ is not loved by $b$ and
$b$ is not loved by $a$. Premise true, conclusion false.

**The second monster.** "Every person is tall or short": not both,
so one of the two. The gap: "not both" gives "one of the two" only
when the cases exhaust; middle height is neither. Exhaustive
dichotomy is $P \lor \neg P$ (the classical-logic axiom), and each
case must reach the conclusion independently.

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
a careful person could produce, so its error marks a real boundary
in the method. Dissecting it yields a rule (existential witnesses
may depend on the variable; universal witnesses may not), and the
rule outlives the example: conjecture, attempt, monster, repaired
definition.

</div>
</details>

:::note[Quick check]

1. State the violated rule with $\forall/\exists$.
2. Verify both quantified claims on $L = \{(a, a), (b, b)\}$.
3. What licence does a case proof need beyond exhaustion?
4. Which shapes rest on the classical-logic axiom?
5. Prove: $\exists y\ \forall x,\ R(x, y) \to \forall x\ \exists y,\
   R(x, y)$. Which direction is the false proof?
6. Give $R$ on $\{a, b\}$ where both quantified claims hold.
7. Write the witness function $m$ explicitly for the mothers.
8. Why does the counterexample need at least two elements?

<details class="wn-spoiler">
<summary>Answers</summary>
<div class="wn-spoiler-body">

**1.** $\forall x\ \exists y\ R(x, y) \not\to \exists
y\ \forall x\ R(x, y)$. **2.** $\forall x\ \exists y$ holds with $y
:= x$; $\exists y\ \forall x$ fails (no column has two ✓s). **3.**
Independent arguments per case. **4.** Cases and contradiction.
**5.** Given $y_0$ serving all $x$, each $x$ witnesses with $y_0$:
valid. The false proof ran the invalid converse. **6.** $R =
\{(a, a), (b, b), (a, b)\}$: $y := b$ serves both. **7.** $m(x) :=
$ the mother of $x$. **8.** On one element both claims hold, so no
counterexample exists.

</div>
</details>

:::

## Stage Gate

:::caution[Pass mark: four of five]
Before Stage B, answer these five without notes. A failed gate names
the section to reread (1: Section 1; 2: Section 2; 3: Section 3; 4:
Section 4; 5: Section 5).

1. State the licence each line of a proof must carry.
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

:::

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
   $\{\{a\}\}$, forcing $c = d = a$; otherwise $\{a\} = \{c\}$ forces
   $a = c$, then compare remaining members.)*
3. Prove: the composition of two bijections is a bijection, and
   $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$.
   *(Hint: the two inverting laws for the pair are
   $x = f^{-1}(g^{-1}((g \circ f)(x)))$ and
   $z = (g \circ f)(f^{-1}(g^{-1}(z)))$.)*
4. Prove: there is no injective function from $\{x, y, z\}$ to
   $\{u, v\}$, by exhaustive cases on $(f(x), f(y), f(z))$.
   *(Hint: every branch is a complete choice of outputs, and with
   two outputs some branch forces a collision.)*
5. In the diagonal proof, attempt the same construction with
   $\mathcal{P}(S)$ replaced by $S \times S$. Where exactly does the
   argument fail?
   *(Hint: the contradiction required $f(s) = D$ to be possible;
   $S \times S$ is not $\mathcal{P}(S)$.)*

## Where to Go Next

Stage B (Counting) defines the counting numbers by five declarations
(the Peano axioms), proves induction, addition, multiplication, order,
division with remainder, and the counting arguments: arithmetic
becomes a theorem, and this page's equivalence classes and bijections
are its instruments.

**Next: [Stage B: Counting](/17-core-course/stage-b-counting/).**
