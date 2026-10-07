---
date: 2026-07-23T21:57:32+01:00
title: "Probability Spaces"
description: "Probability spaces: why sigma-algebras exist at all, what countable additivity buys, conditional probability, Bayes' theorem, and the classic pairwise-versus-mutual-independence counterexample — with recall prompts, worked examples and interleaving problems. Tier F/U."
tags:
  - Mathematics
  - University
  - Probability
categories:
  - Mathematics
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "Probability Spaces", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/probability-spaces"}]
}
</script>

## Probability Spaces

**Tier: F (Foundation), with the U-level question of *why* the definition has
this shape.** Everything in probability — random variables, expectation,
convergence, martingales, the central limit theorem — is a sentence about a
probability space.

## Recall prompts

Attempt these from memory *before* reading.

- Write down the definition of a probability space. How many objects are in it?
- State the three axioms of a sigma-algebra. Why *countable* unions rather than
  arbitrary unions?
- State the three axioms of a probability measure.
- State Bayes' theorem.
- Give three events that are pairwise independent but not mutually independent.

Check your answers against the text. The sigma-algebra axioms are the part most
people can recite but cannot motivate.

## Motivation: why is $\mathcal{F}$ not just the power set?

The naive definition of a probability space is "a sample space $\Omega$ and a
probability for *every* subset". That is exactly what finite combinatorics does,
and it works there. The reason measure theory insists on a sigma-algebra is that
for uncountable $\Omega$ it is impossible.

**The Vitali counterexample (A).** On $\Omega = [0,1]$ with the uniform
distribution, define $x \sim y$ if $x - y \in \mathbb{Q}$. This partitions
$[0,1]$ into equivalence classes, each countable. Choosing one representative
from each class gives a set $V$ — the Vitali set — with the property that the
translates $V + q$, $q \in \mathbb{Q} \cap [-1,1]$, are pairwise disjoint and
cover $[0,1]$.

If $V$ were measurable, countable additivity would force the contradictory
conclusion that its measure is both $0$ and positive. So **no probability can be
assigned to every subset**, and the sigma-algebra is the honest statement of
which subsets we *can* measure.

The second reason is forward-looking rather than defensive: **countable
additivity** is what makes limits of events meaningful. It is exactly the
hypothesis needed for Borel–Cantelli, the strong law of large numbers, and
every "almost surely" statement in the subject. Finite additivity cannot prove
any of them.

So the definition is not pedantry. It is the smallest structure that is (a) rich
enough to contain the events you care about and (b) small enough to avoid the
Vitali obstruction — and it is closed under exactly the operations limits need.

## The definitions

**Definition (F).** A **probability space** is a triple $(\Omega, \mathcal{F},
P)$ where:

- $\Omega$ is the **sample space** — the set of all possible outcomes.
- $\mathcal{F}$ is a **sigma-algebra** on $\Omega$.
- $P : \mathcal{F} \to [0,1]$ is a **probability measure**.

**Definition.** A **sigma-algebra** $\mathcal{F}$ on $\Omega$ is a collection of
subsets satisfying:

1. $\Omega \in \mathcal{F}$.
2. If $A \in \mathcal{F}$ then $A^c \in \mathcal{F}$.
3. If $A_1, A_2, \ldots \in \mathcal{F}$ then $\bigcup_{i=1}^{\infty} A_i \in
   \mathcal{F}$.

Axiom 1 plus 2 give $\emptyset \in \mathcal{F}$ by De Morgan; 2 plus 3 give
closure under countable intersections by De Morgan. The axioms are the minimum
needed to state limits of events.

**Definition.** A **probability measure** $P$ satisfies:

1. $P(A) \ge 0$ for all $A \in \mathcal{F}$.
2. $P(\Omega) = 1$.
3. If $A_1, A_2, \ldots$ are pairwise disjoint then
   $P\left(\bigcup_i A_i\right) = \sum_{i=1}^{\infty} P(A_i)$.

**Why countable additivity and not finite additivity.** Finite additivity
cannot distinguish "the limit of the probabilities" from "the probability of
the limit". Countable additivity is what lets you write
$P(\limsup A_n)$, and without that there is no strong law, no Borel–Cantelli,
and no almost-sure convergence.

## Basic properties

**Proposition 1.1.** For any probability space:

1. $P(\emptyset) = 0$
2. $P(A^c) = 1 - P(A)$
3. $A \subseteq B \implies P(A) \le P(B)$
4. $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
5. **Boole:** $P\left(\bigcup_{i=1}^{n} A_i\right) \le \sum_{i=1}^{n} P(A_i)$
6. **Bonferroni:** $P\left(\bigcap_{i=1}^{n} A_i\right) \ge 1 -
   \sum_{i=1}^{n} (1 - P(A_i))$

*Proof of (1).* Apply countable additivity to $\Omega = \Omega \cup \emptyset
\cup \emptyset \cup \cdots$: $1 = 1 + P(\emptyset) + P(\emptyset) + \cdots$, so
$P(\emptyset) = 0$. $\blacksquare$

*Proof of (3).* $B = A \cup (B \setminus A)$ is disjoint, so $P(B) = P(A) +
P(B \setminus A) \ge P(A)$. $\blacksquare$

*Proof of (4).* $P(A \cup B) = P(A) + P(B \setminus A) = P(A) + P(B) - P(A \cap
B)$. $\blacksquare$

Boole and Bonferroni are the workhorses of probability bounds. Boole extends to
countable unions by taking limits, which is the first half of Borel–Cantelli.

## Conditional probability and independence

**Definition.** For $P(B) > 0$, the **conditional probability** of $A$ given
$B$ is

$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}.
$$

**Theorem 1.2 (Law of Total Probability).** If $B_1, \dots, B_n$ partition
$\Omega$ with $P(B_i) > 0$ then $P(A) = \sum_i P(A \mid B_i) P(B_i)$.

**Theorem 1.3 (Bayes' Theorem).** Under the same conditions,

$$
P(B_j \mid A) = \frac{P(A \mid B_j)\, P(B_j)}{\sum_{i=1}^{n} P(A \mid B_i)\, P(B_i)}.
$$

**The reading that makes Bayes non-trivial.** $P(A \mid B_j)$ is the
*forward* direction — how often you would see this evidence if the hypothesis
were true. $P(B_j \mid A)$ is the *backward* direction — how likely the
hypothesis is given the evidence. The theorem tells you the backward from the
forward plus a base rate, and the base rate is the term people forget. That
omission is the base rate fallacy, and it is why a highly accurate test for a
rare disease can still give mostly false positives.

**Worked example (base rates).** A test detects a disease with sensitivity 99%
and false-positive rate 1%. The disease affects 1 in 10,000. Given a positive
test, the probability of disease is

$$
\frac{0.99 \times 0.0001}{0.99 \times 0.0001 + 0.01 \times 0.9999} \approx 0.0098.
$$

Under 1%. The intuition fails because the false positives outnumber the true
positives by roughly 100 to 1.

**Definition.** $A$ and $B$ are **independent** if $P(A \cap B) = P(A)P(B)$.

**Definition.** $A_1, \dots, A_n$ are **mutually independent** if for every
$J \subseteq \{1, \dots, n\}$, $P\left(\bigcap_{j \in J} A_j\right) =
\prod_{j \in J} P(A_j)$.

## Worked example: pairwise versus mutual independence

The classic counterexample, and the reason the definition of mutual independence
requires *every* subset rather than just pairs.

Roll two fair dice. Let

- $A$ = "first die is even"
- $B$ = "second die is even"
- $C$ = "sum is even"

Each has probability $\tfrac12$, and $P(A \cap B) = \tfrac14 = P(A)P(B)$, and
similarly for the other pairs. So the events are **pairwise independent**.

But $A \cap B \cap C$ = "both dice even and the sum even". Both even *forces*
the sum even, so $P(A \cap B \cap C) = \tfrac14 \ne \tfrac18 =
P(A)P(B)P(C)$. Not mutually independent.

**Why this matters beyond the puzzle.** In the central limit theorem, in the
law of large numbers, and everywhere in statistics, "independent" means
*mutually* independent. Substituting pairwise independence silently breaks the
proof — and there are genuine results (e.g. in number theory and ergodic
theory) where pairwise independence holds and the theorems genuinely fail.

## Counterexamples worth knowing by name

| Claim | True? | Counterexample |
| ----- | ----- | -------------- |
| Every subset of $\Omega$ is measurable | no | the Vitali set on $[0,1]$ |
| Pairwise independence implies mutual | no | the two-dice example above |
| $P(A \mid B) = P(B \mid A)$ | no | disease testing with low base rate |
| $P(A \cup B) = P(A) + P(B)$ | no | unless $A \cap B = \emptyset$ |
| Finite additivity implies countable | no | the whole point of axiom 3 |

## Common pitfalls

| Pitfall | Why it happens | Fix |
| ------- | -------------- | --- |
| Ignoring the base rate | Bayes is stated forwards | Always write the denominator out |
| Assuming independence from "no obvious link" | Independence is a measure-theoretic statement, not a causal one | It must be verified from the joint distribution |
| Treating $\Omega$ as always finite | Finite combinatorics is the special case | Uncountable $\Omega$ is where sigma-algebras earn their keep |
| Using pairwise independence in proofs | The definition needs all subsets | Check every subset |

## Interleaving problems

Mix these with material from [Measure
Theory](/10-measure-theory/1_sigma-algebras-and-measurable-spaces/) and
[Limit Theorems](/8-probability-and-statistics/4_limit-theorems/).

1. Show that if $\mathcal{F}$ is a sigma-algebra then it is closed under
   countable intersections.
2. Show that the collection of finite or cofinite subsets of $\mathbb{N}$ is an
   algebra but not a sigma-algebra.
3. Show Boole's inequality extends to countable unions, and deduce the first
   Borel–Cantelli lemma.
4. A test has sensitivity $s$ and false-positive rate $f$. For which disease
   prevalence $p$ does a positive result give at least a 50% chance of disease?
   Express the answer in terms of $s$ and $f$.
5. Construct three events that are pairwise independent but not mutually
   independent on a sample space of four equally likely outcomes. *(Harder than
   the dice version, and instructive.)*

## See Also

- [Random Variables](/8-probability-and-statistics/2_random-variables/) —
  measurable functions between probability spaces
- [Limit Theorems](/8-probability-and-statistics/4_limit-theorems/) — where
  countable additivity pays off
- [Sigma-Algebras and Measurable Spaces](/10-measure-theory/1_sigma-algebras-and-measurable-spaces/)
  — the measure-theoretic version of this page
- [How to Use These Notes](/how-to-use/) — the method
