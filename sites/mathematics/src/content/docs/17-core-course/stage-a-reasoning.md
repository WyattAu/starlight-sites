---
date: 2026-11-08T00:00:00+00:00
title: "Stage A: Reasoning"
description: "The course's foundation, built with no numbers at all: propositions and quantifiers, sets and the danger inside unbounded comprehension, relations and the partition correspondence, functions and bijections, and the dissection of a false proof that fails by swapping two quantifiers."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "17 Core Course", "url": "https://mathematics.wyattau.com/17-core-course"}, {"name": "Stage A: Reasoning", "url": "https://mathematics.wyattau.com/17-core-course/stage-a-reasoning"}]
}
</script>

**The Defect.** Every attempt to learn mathematics rigorously runs into the
same wall: the books keep saying "clearly" and "obviously" about steps the
reader cannot reproduce, and the reader concludes that proof is a talent
they lack. It is not a talent. Proof is a *machine*: a finite sequence of
statements in which each one is either declared up front or licensed by the
ones before it. Once you see the machine, "clearly" disappears from your
own writing forever, because you know which step was being skipped. Stage
A builds that machine out of five parts: propositions and quantifiers, sets,
relations, functions, and a dissection of a proof that looks perfect and
proves nothing.

**The One-Line Reveal.** <span class="wn-spoiler-inline" tabindex="0">A
proof is a syntactic object, checkable without understanding: each line is
an axiom, a definition, or forced by earlier lines, and Stage A builds that
check from five parts while dissecting one famous argument that satisfies
every line except the one that matters.</span>

**Scope.** Nothing. The floor of this course is literacy and pattern
recognition, and this page consumes exactly that. One axiom is adopted, not
proved, and it is stated in full in Section 1. Two remarks look forward
(both carry the forward-honesty marker, and neither is used by any proof
here).

## 1. Propositions, Quantifiers, and What a Proof Is

**Definition.** A **proposition** is a sentence that is exactly one of true
or false. "Wednesday follows Tuesday" is a proposition. "Tuesday is pleasant"
is not, until an argument has first been made that it is one.

**Definition.** Propositions combine by **connectives**: negation
($\neg P$, read "not $P$"), conjunction ($P \land Q$, "both"), disjunction
($P \lor Q$, "at least one"), implication ($P \to Q$, "if $P$ then $Q$"),
and equivalence ($P \leftrightarrow Q$, "the same truth value"). Each is
defined by its truth table, which is nothing more than the rule for
computing the combination's truth from the inputs' truths.

**Ponder.** Before reading on: is the sentence "if Wednesday follows
Tuesday, then every even number is divisible by two" true or false? Both
parts are true; what should the rule say? And is "if Wednesday follows
Tuesday, then every even number is odd" true or false? One part is false.

<details class="wn-spoiler">
<summary>Compare your answer</summary>
<div class="wn-spoiler-body">

An implication with a true hypothesis takes its truth from the conclusion:
the first sentence is true (true implies true), the second false (true
implies false). The interesting case is the next ponder: what is an
implication with a *false* hypothesis?

</div>
</details>

**Definition.** An implication $P \to Q$ with a false hypothesis $P$ is
**true**, regardless of $Q$. Nothing is being claimed about $Q$'s truth; the
impression claims only what happens *if* $P$ holds, and it does not hold.

This convention is not decoration. It is what makes "every even number is
divisible by two" true *and* "every even number is divisible by four" false
without contradiction later, when the objects exist. **Axiom (classical
logic).** This course adopts, without proof: every proposition is exactly
one of true or false, and a derivation of a contradiction from $\neg P$
licenses a proof of $P$. This axiom is recorded in the course map; it is
never silently assumed anywhere else, and constructive alternatives are
flagged if they ever matter.

**Definition.** A **quantifier** binds a variable across a claim. The
universal quantifier $\forall x,\ P(x)$ asserts $P$ holds of *every* object
in the domain; the existential quantifier $\exists x,\ P(x)$ asserts $P$
holds of *at least one*. Quantifiers stack, and **order is meaning**:

- $\forall x\ \exists y,\ R(x, y)$: for each object $x$ there is some $y$,
  which is allowed to depend on $x$.
- $\exists y\ \forall x,\ R(x, y)$: there is a *single* $y$ that works for
  every $x$ at once.

"Everyone has a mother" and "someone is everyone's mother" are different
claims. One is true of humanity. Section 5 dissects an argument that
pretends they are the same.

**Definition.** A **proof** of a proposition $P$ is a finite sequence of
statements whose last line is $P$, in which every line is one of: an axiom,
a definition, a previously proved proposition, or a consequence of earlier
lines licensed by the inference rules of the connectives and quantifiers.
Nothing else may appear. The words "clearly" and "obviously" are banned
from this course: if a step is short, the proof performs the step.

**Ponder.** Before reading on: how could a *rule-licensed sequence* be
better than an argument that just feels convincing? Try to name one thing
the sequence gives you that feeling does not.

<details class="wn-spoiler">
<summary>Compare your answer</summary>
<div class="wn-spoiler-body">

Checking: a sequence can be verified line by line, by anyone, without
sharing the author's intuitions or culture. That is why a proof proved in
one language convinces in every other, and why the same sequence can be
handed to a machine. Feeling does not transfer; the machine does. This is
also the entire content of Section 5: an argument can *feel* airtight while
its rule-license is broken, and only the rule catches it.

</div>
</details>

**Example (a first proof).** The contrapositive law: $P \to Q$ is
equivalent to $\neg Q \to \neg P$. *Proof.* Truth table over the four
assignments of $P$ and $Q$. For each row, compute both sentences. True
implies true: $P \to Q$ true, $\neg Q \to \neg P$ true (false implies
false is true). True implies false: $P \to Q$ false, $\neg Q \to \neg P$
false (true implies true is false). False implies true: both true (false
hypotheses). False implies false: both true. The columns agree on all four
rows, so the sentences are equivalent. $\blacksquare$

The pattern to notice: the proof did not *argue*, it *enumerated*. Every
truth-table proof is a proof by exhaustive cases, and "by cases" is
waterproof exactly when the cases exhaust, which Section 5 turns into a
warning.

**Quick check.**

1. What may each line of a proof be?
2. Why is $P \to Q$ true when $P$ is false?
3. Write the difference between $\forall x\ \exists y$ and
   $\exists y\ \forall x$ in one plain sentence each.
4. Which axiom did this section adopt, and where is it recorded?
5. Prove or disprove: $\neg(P \land Q)$ is equivalent to
   $\neg P \lor \neg Q$.

*Answers:* **1.** An axiom, a definition, a previous result, or a rule-
licensed consequence of earlier lines. **2.** The claim is conditional and
its condition never arises; nothing is asserted. **3.** Dependence: in the
first, $y$ may vary with $x$; in the second, one $y$ serves everyone.
**4.** Classical logic (each proposition is exactly one of true or false;
contradiction licenses proof); recorded in the course map's axiom table.
**5.** True: enumerate the four rows; they agree in every row.

## 2. Sets: Membership, Products, Power Sets

**Definition.** A **set** is a collection of objects, called its
**elements**, and a set is completely determined by its elements: sets $S$
and $T$ are equal when they have the same elements. This is
**extensionality**, and it is the only way two sets can differ.

**Definition.** Write $x \in S$ for membership. Given a set $S$ and a
proposition $P(x)$ about its elements, the **set-builder** notation
$\{x \in S : P(x)\}$ denotes the elements of $S$ satisfying $P$. The
*bounded* form (inside a given $S$) is always available. The unbounded form
"the set of all $x$ such that $P(x)$" is forbidden in this course, and the
next ponder is the reason.

**Ponder.** Before reading on: what should "the set of all sets that are
not members of themselves" be? Call it $R$. Ask whether $R \in R$, and let
the answer decide whether $R \in R$. What went wrong?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

If $R \in R$, then $R$ satisfies its own entry condition, which demands
$R \notin R$. If $R \notin R$, then $R$ fails its entry condition, which
demands $R \in R$. Either assumption forces its negation: a proposition
that is neither true nor false, contradicting the classical-logic axiom.
This is Russell's paradox. The fault is not in the axiom but in the
unbounded comprehension: "any property defines a set" is false as stated.
Bounded comprehension, inside an already-given set, is safe, and every set
in this course is built that way.

</div>
</details>

**Definition.** The **empty set** $\varnothing$ is the set with no
elements. $S$ is a **subset** of $T$, written $S \subseteq T$, when every
element of $S$ is an element of $T$. Note the asymmetry: $\varnothing
\subseteq S$ always (the universal claim "for every $x \in \varnothing$,
$x \in S$" has a false hypothesis for every $x$, and there are none), while
$\varnothing \in S$ is an ordinary membership claim about one object.

**Definition.** For sets $S$ and $T$, the **ordered pair** $(a, b)$ of
elements is built from sets alone, by the recipe $(a, b) := \{\{a\},
\{a, b\}\}$.

**Ponder.** Before reading on: that recipe looks absurd. Why not just
declare pairs as a new kind of object?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

Declaring a new kind of object means declaring new laws for it, and every
new law is a new place to be inconsistent. The recipe builds pairs from
*only* the objects and laws already in hand. It is justified by one
theorem, which is Problem 2: $(a, b) = (c, d)$ if and only if $a = c$ and
$b = d$. The recipe earns its ugliness by delivering exactly the behaviour
pairs need, from extensionality alone.

</div>
</details>

**Definition.** The **product** $S \times T$ is the set of all ordered
pairs $(s, t)$ with $s \in S$ and $t \in T$. The **power set**
$\mathcal{P}(S)$ is the set of all subsets of $S$. Both are sets, built by
bounded comprehension, so both are honest.

**Example.** For $S = \{a, b\}$: $\mathcal{P}(S) = \{\varnothing, \{a\},
\{b\}, \{a, b\}\}$, four subsets. Subsets of $S$ correspond exactly to
propositions about elements of $S$ (each $x$ is in or out), which is why
the power set will matter when propositions are counted, much later.
$\blacksquare$

**Quick check.**

1. State extensionality.
2. Why is bounded comprehension safe where unbounded comprehension is not?
3. True or false: $\varnothing \in \{\varnothing\}$, and
   $\varnothing \subseteq \{\varnothing\}$?
4. What theorem justifies the Kuratowski recipe for pairs?
5. How many subsets does a three-element set have? Enumerate them.

*Answers:* **1.** Sets are equal exactly when they have the same elements.
**2.** Bounded comprehension collects from a given set, so the collection
cannot be the paradox-bearing "set of all sets"; unbounded comprehension
produces Russell's $R$. **3.** True and true: the one element of the right
set is $\varnothing$ itself, and the empty set is a subset of every set.
**4.** $(a, b) = (c, d)$ if and only if $a = c$ and $b = d$ (Problem 2).
**5.** Eight: all $2^3$ in/out patterns, enumerated as
$\{\varnothing\}, \ldots$ up to the whole set.

## 3. Relations: Order and Equivalence

**Definition.** A **relation** on a set $S$ is a subset $R \subseteq S
\times S$. Write $x \,R\, y$ when $(x, y) \in R$. A relation is nothing
more than a set of pairs; every property relations have is a property of
that set of pairs.

**Definition (order).** A relation $\preceq$ on $S$ is a **partial order**
when it is **reflexive** ($x \preceq x$ always), **antisymmetric**
($x \preceq y$ and $y \preceq x$ force $x = y$), and **transitive**
($x \preceq y$ and $y \preceq z$ force $x \preceq z$). It is a **total
order** when additionally every pair is comparable: $x \preceq y$ or
$y \preceq x$ always.

**Example.** Subset inclusion is a partial order on $\mathcal{P}(S)$:
reflexive by definition, antisymmetric by extensionality, transitive by a
one-line element chase (Problem 1 asks for it). It is *not* total whenever
$S$ has two elements: $\{a\}$ and $\{b\}$ are incomparable. Partial orders
are the honest default; totality is a bonus that must be proved, never
assumed. $\blacksquare$

**Definition (equivalence).** A relation $\sim$ on $S$ is an **equivalence
relation** when it is reflexive, symmetric ($x \sim y$ forces
$y \sim x$), and transitive.

**Example.** On the people in a room, declare $x \sim y$ when $x$ and $y$
have the same parity of age in years (both even or both odd). Reflexive:
everyone shares their own parity. Symmetric and transitive: "same as the
same" chains. $\blacksquare$

**Definition.** For an equivalence relation $\sim$ on $S$ and $x \in S$,
the **equivalence class** of $x$ is $[x] := \{y \in S : y \sim x\}$. The
class is a *subset*, built by bounded comprehension.

**Theorem (the partition correspondence).** The equivalence classes of an
equivalence relation on $S$ are disjoint, non-empty, and their union is
$S$. Conversely, any family of non-empty disjoint subsets whose union is
$S$ arises as the classes of exactly one equivalence relation, namely
"$x \sim y$ if and only if $x$ and $y$ lie in the same member of the
family."

*Proof.* Non-empty: $x \in [x]$ by reflexivity. Union: every $x$ lies in
its own class, so the classes cover $S$. Disjoint: suppose $[x]$ and $[y]$
share an element $z$; then $z \sim x$ and $z \sim y$, so by symmetry and
transitivity $x \sim y$, and then any $w \in [x]$ satisfies $w \sim x
\sim y$, giving $w \in [y]$; the classes are equal, not partially
overlapping. Conversely, given the family, reflexivity, symmetry and
transitivity of "same member" are immediate from the definition of the
family; and if two members $A$ and $B$ of the family both contain $x$,
they share an element and so, being disjoint, are equal, which makes
"same member" well-defined. $\blacksquare$

The theorem says: an equivalence relation *is* a way of cutting a set into
non-overlapping pieces. This is not a slogan; the proof above is the whole
content, and Stage C will construct an entire number system out of exactly
this cutting move. (Forward-honesty marker: that construction uses nothing
beyond this page.)

**Quick check.**

1. Name the three properties of a partial order and the extra property of
   a total order.
2. Why is subset inclusion on $\mathcal{P}(S)$ not a total order (for
   $|S| \geq 2$)?
3. What are the equivalence classes of the parity relation on a room of
   people?
4. Where can two equivalence classes overlap, and what follows?
5. State the partition correspondence in one sentence.

*Answers:* **1.** Reflexive, antisymmetric, transitive; plus comparability
of every pair. **2.** Two singletons $\{a\}$, $\{b\}$ with $a \neq b$ are
incomparable. **3.** Two classes: even-aged and odd-aged. **4.** Only by
being equal; a shared element forces $x \sim y$ and then equality of the
classes. **5.** Equivalence relations on $S$ and disjoint-coverings of
$S$ are two descriptions of one idea, each recovered from the other.

## 4. Functions: Injections, Surjections, Bijections

**Definition.** A **function** $f$ from $S$ to $T$, written $f: S \to T$,
is a relation $f \subseteq S \times T$ that is *total* (every $x \in S$
has some $y$ with $(x, y) \in f$) and *single-valued* (that $y$ is unique:
$(x, y), (x, y') \in f$ force $y = y'$). Write $f(x) = y$. A function is a
relation with two extra laws, nothing more.

**Definition.** $f: S \to T$ is **injective** when distinct inputs give
distinct outputs ($f(x) = f(x')$ forces $x = x'$); **surjective** when
every $t \in T$ is hit ($\forall t \in T\ \exists s \in S,\ f(s) = t$);
**bijective** when both. A bijection pairs up $S$ and $T$ with no
collisions and no leftovers: that pairing *is* the meaning of "the two
sets have the same size", and Stage D will build the entire theory of
infinite size on this definition. (Forward-honesty marker: nothing here
depends on it.)

**Definition.** For $f: S \to T$ and $g: T \to U$ the **composition** $g
\circ f: S \to U$ is $(g \circ f)(x) := g(f(x))$. Composition is
associative: $(h \circ g) \circ f = h \circ (g \circ f)$, because both
sides send $x$ to $h(g(f(x)))$ and extensionality of relations (here, of
sets of pairs) makes equal behaviour equal.

**Theorem.** $f: S \to T$ is bijective if and only if it has an inverse: a
function $g: T \to S$ with $g(f(x)) = x$ for all $x \in S$ and
$f(g(t)) = t$ for all $t \in T$. The inverse, when it exists, is unique.

*Proof.* Suppose $f$ bijective. Define $g$ by: $g(t)$ is the unique $s$
with $f(s) = t$; surjectivity guarantees some $s$, injectivity guarantees
it is unique, which is exactly the two laws of being a function. Then
$g(f(x)) = x$ since $x$ is such an $s$, and $f(g(t)) = t$ by the defining
property of $g(t)$. Conversely, given such a $g$: injectivity holds
because $f(x) = f(x')$ gives $x = g(f(x)) = g(f(x')) = x'$; surjectivity
holds because any $t$ is $f(g(t))$. Uniqueness: if $g$ and $g'$ both
invert $f$, then for any $t$, $t = f(g(t))$, so applying $g'$ gives
$g'(t) = g'(f(g(t))) = g(t)$, using $g'$'s first law; hence $g' = g$ by
extensionality. $\blacksquare$

**Theorem (no surjection onto the power set).** For every set $S$ and
every function $f: S \to \mathcal{P}(S)$, there is a subset of $S$ that
$f$ does not hit.

*Proof.* Consider $D := \{x \in S : x \notin f(x)\}$, bounded
comprehension, honest. If some $s$ had $f(s) = D$, ask whether $s \in D$.
By $D$'s definition, $s \in D$ exactly when $s \notin f(s)$, and since
$f(s) = D$ that says $s \in D$ exactly when $s \notin D$: either answer
forces its negation, contradicting the classical-logic axiom. So no such
$s$ exists and $D$ is unhit. $\blacksquare$

This is the diagonal move: the set $D$ disagrees with $f(s)$ at the point
$s$, for every $s$ simultaneously. Stage D will run the same move against
listings of the real line, where the payoff is that the real line is too
big to list. (Forward-honesty marker: the proof here is complete on its
own.)

**Quick check.**

1. Which two laws turn a relation into a function?
2. State injective, surjective, bijective in one line each.
3. Where did the proof of the inverse theorem use surjectivity, and where
   injectivity?
4. In the diagonal proof, what exactly contradicts the classical-logic
   axiom?
5. Give a function $f: S \to \mathcal{P}(S)$ for $S = \{a\}$ and an
   unhit subset.

*Answers:* **1.** Totality and single-valuedness. **2.** No collisions;
everything is hit; both. **3.** Surjectivity produced $s$ for $g(t)$;
injectivity made $s$ unique and proved injectivity of $f$. **4.** The set
$D$ yields the proposition "$s \in D$ if and only if $s \notin D$", which
is neither true nor false. **5.** $f(a) := \varnothing$; then $\{a\}$ is
unhit. (The theorem says some subset is unhit; finding it is allowed.)

## 5. The False Proof, Dissected

Now the monster, as promised. The claim under examination:

> **Claim.** Since every person has a mother, there is a person who is the
> mother of everyone.

Let the domain be all people, and $M(x, y)$ mean "$y$ is the mother of
$x$". The premise is $\forall x\ \exists y,\ M(x, y)$: true. The claim is
$\exists y\ \forall x,\ M(x, y)$: false. Here is an argument for the claim
that no rule catches at a glance.

> **The false proof.** Fix an arbitrary person $x$. By the premise there
> exists $y$ with $M(x, y)$, namely $x$'s mother. Since $x$ was arbitrary,
> this $y$ works for every person. Hence $\exists y\ \forall x,\ M(x, y)$.
> $\blacksquare$

It *feels* airtight. It proves nothing. The dissection is the most valuable
page-content in Stage A, so it is done slowly.

**The autopsy.** The premise $\forall x\ \exists y,\ M(x, y)$ licenses the
following, and only the following: for *each* $x$, a witness $y$ *possibly
different for each $x$*. Choosing the witness for one arbitrary $x$ makes
$y$ a function of $x$ in disguise: write it $y = m(x)$, the mother of $x$.
The false proof then treats this $m(x)$ as if it were a single fixed
object. The sentence "since $x$ was arbitrary" is the sleight: arbitrariness
of $x$ licenses a conclusion *about $x$* with $y$ held fixed, but here $y$
was *not* held fixed; it varied with $x$ across the very choices being
made. The rule being violated has a name: universal introduction requires
a witness for the conclusion that does not depend on the variable being
generalised over. Here the dependence is the whole story.

**The concrete counterexample.** A world with two people, $a$ and $b$,
each their own mother-stand-in is absurd, so use a cleaner relation:
$L(x, y)$, "$y$ loves $x$". Suppose $L(a, a)$ and $L(b, b)$ and no other
loves hold. Then $\forall x\ \exists y,\ L(x, y)$ is true (each person is
loved, by themselves: choose $y = x$), while $\exists y\ \forall x,\ L(x,
y)$ is false ($a$ is not loved by $b$ and $b$ is not loved by $a$, so no
single $y$ loves everyone). Premise true, conclusion false: the argument
form is invalid, whatever the flavour of the prose.

**Ponder.** Before reading on: the false proof chose "an arbitrary $x$".
What would a *correct* proof of an existential claim $\exists y\ \dots$
look like, and why can arbitrariness never appear there?

<details class="wn-spoiler">
<summary>The autopsy</summary>
<div class="wn-spoiler-body">

An existential claim is proved by *exhibiting*: name or construct a
specific witness and prove it satisfies the property. There is no
arbitrariness, because no generalisation happens; the witness is a
particular object (or a construction whose description may use given
data, but must deliver one fixed object). The false proof's structure is
exactly backwards: it argued like a universal proof (fix arbitrary $x$,
generalise) while claiming an existential conclusion. Matching proof
shapes to quantifier shapes is half of Stage A.

</div>
</details>

**The second monster: a dichotomy that misses a case.** Proof by cases is
waterproof when the cases exhaust. Here is an argument that pretends they
do. Claim: every person in a room is either tall or short. "Proof": take
any person; they are not both tall and short (assume tall and short are
opposites), so they are tall or short. The gap: "not both" does not give
"one of the two" unless the two options *exhaust the possibilities*. A
person of middle height is neither, and the argument never licensed
excluding them. The repair is a definition, again: cases must come from an
exhaustive split, such as "$P$ or $\neg P$" (which is the classical-logic
axiom at work), and each case must reach the conclusion *independently*.

**The patterns that remain.** After the dissection, four shapes of proof
are licensed in this course, and everything later is built from them:

1. **Direct proof**: chain definitions and prior results until the target.
2. **Contrapositive**: to prove $P \to Q$, prove $\neg Q \to \neg P$,
   justified by Section 1's truth table.
3. **Contradiction**: assume $\neg P$, derive a contradiction, conclude
   $P$; justified by the classical-logic axiom, declared in Section 1 and
   never silently.
4. **Cases**: split on an exhaustive dichotomy; win in every case.

**Ponder.** Before reading on: the false proof is error-shaped, not
nonsense-shaped. Why is that the standard to demand of a counterexample,
per this course's method?

<details class="wn-spoiler">
<summary>Compare your answer</summary>
<div class="wn-spoiler-body">

A nonsense argument teaches nothing: nobody would have believed it. An
error-shaped argument is one a careful person could produce, which means
the error marks a real boundary in the method, not a typo. Dissecting it
yields a *rule* (existential witnesses may depend on the variable; universal
witnesses may not), and the rule outlives the example. That is the course's
dialectic in one paragraph: conjecture, attempt, monster, repaired
definition.

</div>
</details>

**Quick check.**

1. State the exact rule the false proof violated.
2. Give the two-person counterexample in full.
3. What licence does a proof by cases need beyond the cases themselves?
4. Which of the four proof shapes rests on the classical-logic axiom?
5. In one sentence: why can "since $x$ was arbitrary" not rescue the
   false proof?

*Answers:* **1.** Universal introduction's witness must not depend on the
generalised variable; here $y$ depended on $x$. **2.** $L(a, a)$,
$L(b, b)$, nothing else: premise true ($y := x$ each time), conclusion
false. **3.** Exhaustiveness, plus independent arguments in each case.
**4.** Contradiction (and every use of "not both gives one of two").
**5.** Arbitrariness of $x$ licenses conclusions about $x$ with the other
objects fixed, but the witness $y$ varied with $x$ across the choices.

## Stage Gate

Before Stage B, answer these five without notes. Pass mark: four. Each is
drawn from this page's quick checks; a failed gate names the section to
reread (1: Section 1; 2: Section 2; 3: Section 3; 4: Section 4; 5:
Section 5).

1. What four things may a line of a proof be?
2. What does bounded comprehension prevent, and what is the paradox it
   avoids?
3. State the partition correspondence.
4. Prove in two lines that the composition of two bijections is a
   bijection (Problem 3 develops this; the gate wants the shape).
5. State the quantifier rule whose violation the false proof committed.

<details class="wn-spoiler">
<summary>Gate answers</summary>
<div class="wn-spoiler-body">

**1.** Axiom, definition, previous result, rule-licensed consequence.
**2.** Unbounded comprehension ("all sets with property $P$") produces
Russell's paradox; bounded comprehension collects only inside a given set.
**3.** Equivalence classes are a disjoint non-empty cover, and every
disjoint non-empty cover arises from exactly one equivalence relation.
**4.** $g \circ f$ surjective: for $z \in U$ pick $t$ with $g(t) = z$
($g$ surjective) and $x$ with $f(x) = t$; injective: $(g \circ f)(x) =
(g \circ f)(x')$ gives $f(x) = f(x')$ by $g$ injective, then $x = x'$ by
$f$ injective. **5.** A universal-introduction witness must not depend on
the generalised variable.

</div>
</details>

## Problems

**Problems.** The quick checks tested recall. These chain several results
and require full written arguments.

1. Prove that subset inclusion on $\mathcal{P}(S)$ is a partial order:
   reflexivity, antisymmetry (use extensionality), transitivity (do the
   element chase: assume $A \subseteq B \subseteq C$, take $x \in A$, and
   license every step). Then give a two-element $S$ and two subsets that
   show the order is not total.
   *(Hint: the transitivity chase is three lines, each licensed by a
   definition.)*
2. Prove the pair law: $(a, b) = (c, d)$ if and only if $a = c$ and
   $b = d$, for the Kuratowski recipe $(a, b) = \{\{a\}, \{a, b\}\}$.
   *(Hint: one direction is immediate by the recipe. For the other,
   suppose $a = b$; then $\{\{a\}, \{a, b\}\} = \{\{a\}\}$ has one
   element, so $\{c\} = \{d\}$, forcing $c = d = a$. In the main case
   $\{a\} \in \{\{c\}, \{c, d\}\}$ forces $\{a\} = \{c\}$, hence
   $a = c$; then $b$ is forced by comparing the remaining members.)*
3. Let $f: S \to T$ and $g: T \to U$ be bijections. Prove $g \circ f$ is
   a bijection, and prove $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ by
   showing the right side satisfies the two inverting laws of the left
   side's inverse (uniqueness is Theorem, Section 4).
   *(Hint: the two laws are $x = f^{-1}(g^{-1}((g \circ f)(x)))$ and
   $z = (g \circ f)(f^{-1}(g^{-1}(z)))$; both unwind by the definitions.)*
4. Prove: there is no injective function from a three-element set to a
   two-element set. Do it by exhaustive cases: enumerate the value of
   $f(x_1)$ (two cases), and in each, enumerate $f(x_2)$ (two cases
   each), and conclude collisions. Count the cases you exhausted and
   confirm they cover every function.
   *(Hint: eight case paths, each ending in $f(x_i) = f(x_j)$ with
   $i \neq j$.)*
5. In the diagonal proof, replace $\mathcal{P}(S)$ by the set of pairs
   $S \times S$ and attempt the same construction: given $f: S \to S
   \times S$, try $D := \{x \in S : (x, x) \notin f(x)\}$... where does
   the argument break? Identify the exact line that can no longer be
   licensed.
   *(Hint: $D$ would need to be a subset of $S$, not a pair; the
   contradiction in the original came from $D$ being a member of the
   target set $\mathcal{P}(S)$, so $f(s) = D$ was even possible.)*

## Where to Go Next

Stage B (Counting) builds the counting numbers from the Peano axioms:
induction, then addition defined recursively with its laws proved as
theorems, then multiplication, order, and division with remainder.
Arithmetic becomes a theorem, and the equivalence classes and bijections
of this page are the instruments it uses. The page
`stage-b-counting.md` carries it.
