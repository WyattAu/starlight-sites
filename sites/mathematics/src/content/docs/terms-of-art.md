---
date: 2026-10-19T00:00:00+01:00
title: "Terms of Art: The Vocabulary of Proofs"
tags:
  - Mathematics
description: "The English phrases every proof uses -- without loss of generality, if and only if, up to isomorphism, almost everywhere, well-defined, canonical, nontrivial -- defined precisely, with examples of correct and incorrect use, so no reader is lost by vocabulary alone."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com/terms-of-art"}]
}
</script>

Mathematics has a technical vocabulary that school never defines; not because
the terms are advanced, but because school mathematics never asks you to *prove*
anything, and these terms are the language of proof. "Without loss of
generality" appears 144 times across this site; "if and only if" 87 times; "up
to isomorphism" 8 times. A reader who does not know what they mean will be lost : not because the mathematics is hard, but because the *English* is.

This page defines each term precisely, with examples of correct and incorrect
use, so no reader is lost by vocabulary alone. The terms are ordered by how
often they appear, from the most common to the most specialised.

## Why this page exists

Consider the sentence "Every group of order $p^2$ is abelian, where $p$ is
prime." Every word is English; every symbol is defined in the abstract algebra
track. But to *understand* the sentence, you need to know that "order" means
the number of elements, that "$p^2$" means $p$ times $p$, and that "abelian"
means commutative. Each of those is defined in the tracks; but you need all
three *simultaneously* to parse one sentence.

The terms on this page are worse: they are used *without definition*, because
the author assumes you have seen them before. If you have not; because your
school taught computation, not proof; you will be lost, and the loss is
invisible: you will think the mathematics is hard when the English is the
problem. This page exists to remove that invisibility.

## Intuition

The vocabulary of proof is a compression code. Each term encodes a *paragraph
of reasoning* into two or three words. "Without loss of generality" compresses:
"there are two cases, and by a symmetry of the problem, the argument for one
case applies verbatim to the other." "If and only if" compresses: "the forward
implication and the reverse implication are both true." "Up to isomorphism"
compresses: "the objects may not be equal, but there is a structure-preserving
bijection between them, and everything we care about is preserved by that
bijection."

Learning the vocabulary is learning to *decompress*: when you read "WLOG
assume $x \geq 0$", you should expand it internally to the full paragraph. Once
you can do that automatically, proofs become readable in the same way that a
fluent reader reads prose; not letter by letter, but phrase by phrase.

## 1. The most common terms

### 1.1 If and only if (87 uses)

**Definition.** "$P$ if and only if $Q$" (abbreviated iff, $\Leftrightarrow$,
or $\iff$) means both $P \Rightarrow Q$ and $Q \Rightarrow P$.

**Correct use.** "$f$ is continuous iff $f^{-1}(\text{open})$ is open"; two
directions, both proved.

**Common error.** Proving only one direction and claiming iff. The forward
direction and the reverse direction are *separate proofs*; each needs its own
argument, and neither implies the other. The most common place this goes wrong
is in "characterise" problems: "characterise the open sets" means prove both
directions.

**Synonym.** "Exactly when" (16 uses); "the series converges exactly when
$a_n \to 0$" is the same claim.

### 1.2 Hence / therefore / thus / it follows that (67 + uses)

These are all the same word: "the previous step implies this step." They are
interchangeable, and the choice is stylistic; though "hence" is more common in
British-influenced writing and "therefore" in American.

**Why the page bothers to define these.** Because they are not
interchangeable with "and then": each one is a *claim* that the implication is
justified, not merely that two statements appear in sequence. If the
implication is not justified, the word is a lie.

### 1.3 Arbitrary (45 uses)

**Definition.** "For an arbitrary $x$" means "for any $x$ at all; no
properties assumed beyond the stated hypotheses."

**Correct use.** "Let $x$ be an arbitrary element of $G$"; you are about to
prove something that works for every element, so you pick one with no special
properties.

**Common error.** Using "arbitrary" when you mean "random." "Arbitrary" means
*you have no control over which element*; it is a statement of universality.
"Random" means a probability distribution is involved. In a proof, "arbitrary"
is a deterministic claim about all elements; "random" would change the
mathematics.

### 1.4 Precisely / exactly when (37 + 16 uses)

**Definition.** "$P$ precisely when $Q$" means $P \iff Q$; the same as "if and
only if," but emphasising that the *boundary* is exactly at $Q$: both
directions hold and the characterisation is complete.

**Correct use.** "$f$ is injective precisely when $f(a) = f(b) \Rightarrow a = b$"; the condition characterises injectivity completely.

### 1.5 Canonical (32 uses)

**Definition.** An object is **canonical** if it is distinguished without any
arbitrary choices; the same in every equivalent construction, for every
mathematician, independent of coordinates, bases, or conventions.

**Correct use.** "The canonical map $V \to V^{**}$"; the map $v \mapsto (\varphi \mapsto \varphi(v))$ requires no basis or choice; it is defined for
every $v$ and is the *same* map regardless of how you think about $V$.

**Common error.** Using "canonical" when you mean "natural" or "standard."
"Canonical" is a mathematical claim: the object is unique up to unique
isomorphism. "Standard" is a sociological claim: most people use it. They are
different claims, and confusing them leads to proofs that depend on choices
that are not canonical.

### 1.6 Necessary and sufficient (25 + 22 uses)

**Definition.** $P$ is **necessary** for $Q$ means $Q \Rightarrow P$ (you
cannot have $Q$ without $P$). $P$ is **sufficient** for $Q$ means $P \Rightarrow Q$. $P$ is **necessary and sufficient** for $Q$ means both, which is the same
as "if and only if."

**Correct use.** "For a matrix to be invertible, it is necessary that
$\det \neq 0$ (invertible matrices have nonzero determinants) and sufficient
that $\det \neq 0$ (by the adjugate formula); so a nonzero determinant is
necessary and sufficient." The two directions come from different arguments;
the theorem packages them.

**Why the distinction matters.** "Necessary" alone is not "sufficient." A
necessary condition can hold for objects that fail the conclusion; a sufficient
condition can fail for objects that satisfy it. Confusing the two is the
logical error that school mathematics can hide (because school problems are
usually iff), but proof-based mathematics cannot.

### 1.7 Well-defined (21 uses)

**Definition.** A map defined via *representatives* is **well-defined** if the
result does not depend on which representative you chose.

**Correct use.** "The operation $[a] + [b] = [a + b]$ on $\mathbb{Z}/n$ is
well-defined: if $[a] = [a']$ and $[b] = [b']$, then $a + b \equiv a' + b' \pmod{n}$, so the result is the same class regardless of representatives."

**Why this needs proof.** When you define something on equivalence classes by
referring to representatives, you must verify that choosing different
representatives gives the same answer. This is a *proof obligation*, not a
courtesy; and forgetting it is the most common error in abstract algebra. The
classical counterexample: defining $[a] \times [b] = [ab]$ on
$\mathbb{Z}/n$ is well-defined, but defining $[a] \times [b] = [ab] \bmod {n+1}$ would not be, because the result depends on the representative.

### 1.8 Almost everywhere (11 uses)

**Definition.** A property holds **almost everywhere** (a.e.) if the set where
it fails has measure zero.

**Correct use.** "The function $f$ is continuous a.e." means the set of
discontinuities has Lebesgue measure zero; it can still be infinite, dense,
or uncountable, as long as its measure is zero.

**Common error.** Confusing "almost everywhere" with "everywhere except
finitely many points." The set of measure zero can be countably infinite, or
uncountable (the Cantor set has measure zero but uncountably many points).
"Almost everywhere" is a measure-theoretic statement, not a cardinality one.

### 1.9 Up to isomorphism (8 uses)

**Definition.** A statement holds **up to isomorphism** if it holds for every
object isomorphic to the one named; the specific identity of the object is
irrelevant, only its structure matters.

**Correct use.** "There is a unique group of order $p^2$ up to isomorphism,
for $p$ prime"; wait, that is *false* (there are two: $\mathbb{Z}/p^2$ and
$\mathbb{Z}/p \times \mathbb{Z}/p$). The correct version: "there are exactly
two groups of order $p^2$ up to isomorphism." The phrase "up to isomorphism"
means: the classification counts isomorphism classes, not labelled groups -
two isomorphic groups count as one.

**Why "up to" matters.** In category theory and representation theory,
"up to" appears constantly: "unique up to unique isomorphism" is a stronger
claim than "unique up to isomorphism," and both are weaker than "unique."
Each phrase means something different, and conflating them is an error.

### 1.10 Degenerate / nontrivial (7 + 6 uses)

**Definition.** A **degenerate** case is one where the usual hypotheses collapse
to something trivial; a triangle with zero area, a vector space of dimension
zero, a group of order one. A **nontrivial** case is the opposite.

**Correct use.** "Assume $V$ is a nontrivial vector space" excludes $V = \{0\}$. "The degenerate case $\theta = 0$" is where the formula simplifies to
something vacuous.

**Why they are excluded.** Degenerate cases often require separate arguments
(the division-by-zero problem) or are genuinely uninteresting (a group of order
one has exactly one element and one subgroup). Stating "nontrivial" in the
hypothesis is how the author says "I am not dealing with the boring case."

### 1.11 Without loss of generality (WLOG)

**Definition.** "Without loss of generality, assume $x \geq y$" means: the
statement is symmetric in $x$ and $y$ (or there is a symmetry that maps one
case to the other), so the argument for $x \geq y$ applies verbatim to $y \geq x$ by exchanging their names.

**Correct use.** "WLOG assume $x \geq y$"; because the statement is symmetric
under $x \leftrightarrow y$.

**Why it is not always valid.** WLOG requires a *symmetry of the problem* that
maps one case to the other. If the statement is not symmetric, you cannot use
WLOG. Example: "WLOG assume $x \leq y$" for the claim "$x + y \geq 0$"; this
is not valid if the claim is not symmetric in $x$ and $y$, and the reader will
reject it. The burden of proof for the symmetry is on the writer.

## 2. Proof techniques, named

### 2.1 Proof by contradiction (reductio ad absurdum)

**Definition.** Assume $P$ and $\neg Q$; derive any falsehood. Then $P \Rightarrow Q$.

**Why it works.** If $P \wedge \neg Q$ leads to a contradiction, then $P \wedge \neg Q$ is false. Since $\neg(P \wedge \neg Q) = P \Rightarrow Q$ by De
Morgan, the implication holds.

**When to use it.** When the direct route has no traction; especially for
statements of the form "there is no $x$ such that..." (prove the negation
leads to absurdity) or "every $x$ satisfies..." (assume some $x$ does not).

### 2.2 Proof by construction

**Definition.** Build the object explicitly. This is the strongest form of
existence proof.

**Contrast.** A proof by contradiction of "there exists $x$ such that $P(x)$"
shows that assuming no such $x$ leads to absurdity, but does not exhibit $x$.
A constructive proof does. Intuitionists reject non-constructive existence
proofs; classical mathematicians accept both.

### 2.3 The pigeonhole principle

**Definition.** If $n + 1$ objects are placed in $n$ boxes, at least one box
contains at least two objects.

**Why it matters.** It is the simplest non-constructive existence principle:
it proves that something exists (a collision, a repeated value, two people
with the same birthday) without identifying which pair.

### 2.4 Proof by induction

**Definition.** To prove $S(n)$ for all $n \geq n_0$: prove $S(n_0)$ (base
case) and prove $S(k) \Rightarrow S(k+1)$ (inductive step) for all $k \geq n_0$.

**Why it works.** By the well-ordering principle of $\mathbb{N}$; every
nonempty subset of $\mathbb{N}$ has a least element. If some $n$ fails $S(n)$,
the set of failures is nonempty and has a least element $n^*$; then $S(n^* - 1)$ holds (by minimality), so $S(n^*)$ holds by the inductive step -
contradiction.

### 2.5 Proof by exhaustion

**Definition.** Check every case. Only practical when the cases are finite and
few; but when they are, it is definitive.

**Correct use.** "Every group of order 4 is isomorphic to $\mathbb{Z}/4$ or
$\mathbb{Z}/2 \times \mathbb{Z}/2$"; proved by checking all possible Cayley
tables (there are only two up to isomorphism). Modern uses include the four
colour theorem (1976) and the classification of finite simple groups.

## 3. Quantifier discipline

**Definition.** A statement of the form $\forall\varepsilon > 0\ \exists\delta > 0\ \forall x : P(x, \delta)$ means: for each $\varepsilon$ *chosen first by
your opponent*, you may choose a $\delta$ *depending on that $\varepsilon$*
(and on nothing else) so that $P$ holds.

**The order matters.** $\forall\epsilon\ \exists\delta$ is not the same as
$\exists\delta\ \forall\epsilon$: in the first, $\delta$ can depend on
$\epsilon$; in the second, one $\delta$ must work for all $\epsilon$; a much
stronger requirement.

**Negating quantified statements.** $\neg\forall\epsilon\ \exists\delta\ P \equiv \exists\epsilon\ \forall\delta\ \neg P$. To negate a string of
quantifiers, flip each quantifier and negate the predicate. Getting this wrong
is the most common error in analysis proofs.

## 4. Terms of art in specific subjects

### 4.1 Analysis

- **Almost everywhere**; see §1.8.
- **Uniformly**; the bound does not depend on the point (unlike pointwise).
- **Dominated**; bounded by an integrable function, licensing dominated
  convergence.
- **Compactly supported**; nonzero only on a compact set.

### 4.2 Algebra

- **Up to isomorphism**; see §1.9.
- **Generated by**; the smallest substructure containing the named elements.
- **Free**; satisfies no relations beyond the axioms.
- **Faithful**; the representation is injective (different group elements
  give different maps).

### 4.3 Topology

- **Dense**; every open set intersects it.
- **Clopen**; both open and closed (possible in disconnected spaces).
- **Compact**; every open cover has a finite subcover (NOT the same as
  "closed and bounded" outside $\mathbb{R}^n$).

### 4.4 Probability

- **Almost surely**; with probability 1 (the probability-theoretic "almost
  everywhere").
- **Independently**; the joint law factorises; not the same as "uncorrelated."
- **Almost surely convergent**; the strong law's mode; see the ML course's
  page 1 for the four modes and their differences.

## Common Pitfalls

- **Reading "if" as "only if."** "$f$ is continuous if it is differentiable" means differentiable ⇒ continuous, not the converse. School English uses "if" loosely; proof English uses it precisely.
- **Assuming "not" distributes.** $\neg\forall x\,P(x) = \exists x\,\neg P(x)$, not $\forall x\,\neg P(x)$. Getting this wrong inverts the meaning of every negated quantified statement.
- **Using "obviously" or "clearly" to skip a step you cannot prove.** If a step is clear, it is clear to the reader without the word. If it is not, the word does not help; it signals that the author cannot prove it either.
- **Assuming every "if" is an "iff."** See §1.1. The converse must be proved separately.
- **Using "unique" when you mean "unusual" or "special."** In mathematics, "unique" means exactly one. "The unique group of order 4" would be false (there are two).

## Self-test

1. Write the negation of: "for every $\epsilon > 0$ there exists $\delta > 0$
   such that for all $x$ with $|x - x_0| < \delta$, $|f(x) - L| < \epsilon$." (§3)
2. What does "up to isomorphism" mean in "there are two groups of order 4 up
   to isomorphism"? (§1.9)
3. Is "n is even" necessary, sufficient, or necessary and sufficient for
   "$n^2$ is even"? Prove both directions or give a counterexample. (§1.6)
4. What does WLOG mean, and when is it valid? (§1.11)
5. What does "almost everywhere" mean, and can the exceptional set be
   uncountable? (§1.8)

**Answers.**
(1) $\exists\epsilon > 0\ \forall\delta > 0\ \exists x\ (|x - x_0| < \delta \wedge |f(x) - L| \geq \epsilon)$.
(2) The classification counts isomorphism classes, not labelled groups: there
are exactly two isomorphism classes ($\mathbb{Z}/4$ and $\mathbb{Z}/2 \times \mathbb{Z}/2$), and every group of order 4 is isomorphic to one of them.
(3) Necessary and sufficient. $n$ even $\Rightarrow n = 2k \Rightarrow n^2 = 4k^2$ is even. $n$ odd $\Rightarrow n = 2k+1 \Rightarrow n^2 = 4k^2 + 4k + 1$
is odd. So $n^2$ even forces $n$ even by contrapositive.
(4) "Without loss of generality": the statement is symmetric under the
exchange being made, so proving one case suffices. Valid only when the
symmetry exists.
(5) The set where it fails has measure zero. Yes, the exceptional set can be
uncountable (the Cantor set).

## Cross-References

- **[Before You Begin](/before-you-begin/)**; the school-to-university
  transition page: logic, sets, functions, proof techniques.
- **[Introduction to Algebraic Topology](/9-topology/9_introduction-to-algebraic-topology/)** -
  where "up to isomorphism" and "canonical" appear in context.
- **[Measure Theory](/10-measure-theory/)**; where "almost everywhere" is
  defined on the measure-theoretic foundation.
- **[The Fundamental Theorems](/11-functional-analysis/4_the-fundamental-theorems/)** -
  where "uniformly" and "dense" appear in their functional-analytic context.
