---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "1_probability Spaces", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/1_probability-spaces"}]
}
</script>
title: Probability Spaces
description: "University Mathematics Probability Theory notes covering key definitions, core concepts, worked examples, and practice questions for practical revision."
tags:
  - Mathematics
  - University
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "8 Probability And Statistics", "url": "https://mathematics.wyattau.com/8-probability-and-statistics"}, {"name": "1_probability Spaces", "url": "https://mathematics.wyattau.com/8-probability-and-statistics/1_probability-spaces"}]
}
</script>

### 1.1 Sample Spaces and Events

A **probability space** is a triple $(\Omega, \mathcal{F}, P)$ where:

- $\Omega$ is the **sample space** (set of all possible outcomes).
- $\mathcal{F}$ is a **sigma-algebra** on $\Omega$.
- $P : \mathcal{F} \to [0, 1]$ is a **probability measure**.

**Definition.** A **sigma-algebra** $\mathcal{F}$ on $\Omega$ is a collection of subsets satisfying:

1. $\Omega \in \mathcal{F}$.
2. If $A \in \mathcal{F}$Then $A^c \in \mathcal{F}$ (closed under complementation).
3. If $A_1, A_2, \ldots \in \mathcal{F}$Then $\bigcup_{i=1}^{\infty} A_i \in \mathcal{F}$ (closed
   under countable unions).

**Definition.** A **probability measure** $P$ satisfies:

1. **Non-negativity:** $P(A) \geq 0$ for all $A \in \mathcal{F}$.
2. **Normalisation:** $P(\Omega) = 1$.
3. **Countable additivity:** If $A_1, A_2, \ldots$ are pairwise disjoint, then
   $P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$.

### 1.2 Basic Properties

**Proposition 1.1.** For any probability space:

1. $P(\emptyset) = 0$.
2. $P(A^c) = 1 - P(A)$.
3. If $A \subseteq B$Then $P(A) \leq P(B)$.
4. $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (inclusion-exclusion).
5. **Boole"s inequality:** $P\left(\bigcup_{i=1}^{n} A_i\right) \leq \sum_{i=1}^{n} P(A_i)$.
6. **Bonferroni inequality:**
   $P\left(\bigcap_{i=1}^{n} A_i\right) \geq 1 - \sum_{i=1}^{n} (1 - P(A_i))$.

_Proof._ (1) Apply countable additivity to the disjoint union
$\Omega = \Omega \cup \emptyset \cup \emptyset \cup \cdots$:
$1 = 1 + P(\emptyset) + P(\emptyset) + \cdots$So $P(\emptyset) = 0$.

(3) $B = A \cup (B \setminus A)$ is a disjoint union, so $P(B) = P(A) + P(B \setminus A) \geq P(A)$.

(4) $P(A \cup B) = P(A) + P(B \setminus A) = P(A) + P(B) - P(A \cap B)$. $\blacksquare$

### 1.3 Conditional Probability and Independence

**Definition.** The **conditional probability** of $A$ given $B$ (with $P(B) > 0$) is

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Theorem 1.2 (Law of Total Probability).** If $B_1, \ldots, B_n$ form a partition of $\Omega$ with
$P(B_i) > 0$ for all $i$Then

$$P(A) = \sum_{i=1}^{n} P(A \mid B_i)\, P(B_i)$$

**Theorem 1.3 (Bayes' Theorem).** Under the same conditions:

$$P(B_j \mid A) = \frac{P(A \mid B_j)\, P(B_j)}{\sum_{i=1}^{n} P(A \mid B_i)\, P(B_i)}$$

**Definition.** Events $A$ and $B$ are **independent** if $P(A \cap B) = P(A)\,P(B)$.

**Proposition 1.4.** If $A$ and $B$ are independent with $P(B) > 0$Then $P(A \mid B) = P(A)$.

_Proof._ $P(A \mid B) = P(A \cap B)/P(B) = P(A)P(B)/P(B) = P(A)$. $\blacksquare$

**Definition.** Events $A_1, \ldots, A_n$ are **mutually independent** if for every subset
$J \subseteq \{1, \ldots, n\}$:

$$P\left(\bigcap_{j \in J} A_j\right) = \prod_{j \in J} P(A_j)$$

Pairwise independence does not imply mutual independence.

<details>
<summary>Worked Example: Pairwise vs Mutual Independence</summary>

_Solution._ Roll two fair dice. Let $A$ = "first die is even", $B$ = "second die is even", $C$ =
"sum is even".

$P(A) = P(B) = P(C) = 1/2$.

$P(A \cap B) = 1/4 = P(A)P(B)$.
$P(A \cap C) = P(\text{first} even, sum even) = P(\text{second} even) = 1/4 = P(A)P(C)$.

$P(B \cap C) = 1/4 = P(B)P(C)$. So $A$, $B$, $C$ are pairwise independent.

But
$P(A \cap B \cap C) = P(\text{both} even, sum even) = P(\text{both} even) = 1/4 \neq 1/8 = P(A)P(B)P(C)$.

So $A$, $B$, $C$ are pairwise independent but not mutually independent. $\blacksquare$

</details>

### 1.4 Key Relationships

- The sigma-algebra must be closed under countable operations, not just finite ones.
- Independence is a property of the probability measure, not of the sets themselves.
- Conditional probability satisfies the axioms of probability for a fixed conditioning event.
- Bayes' theorem converts between $P(A|B)$ and $P(B|A)$ using the prior and likelihood.

### 1.5 Common Pitfalls

- Confusing "mutually exclusive" with "independent." Mutually exclusive events with positive probability are always dependent.
- Assuming that $P(A \cap B) > 0$ implies dependence. Two events can overlap and still be independent.
- Forgetting that sigma-algebras must be closed under countable unions, not just finite ones.
- Applying Bayes' theorem without verifying that the partition actually covers the sample space.

### 1.6 Applications

- **Medical testing:** Bayes' theorem computes the true positive rate from sensitivity and prevalence.
- **Quality control:** Independence assumptions simplify the probability of multiple component failures.
- **Finance:** Insurance pricing uses conditional probability to model claim frequency given risk factors.
- **Machine learning:** Naive Bayes classifiers assume feature independence to compute posterior probabilities efficiently.

### 1.7 Intuition: What Is a Probability Space?

A probability space is the mathematical foundation for reasoning about uncertainty. The sample space $\Omega$ lists every possible outcome of an experiment. The sigma-algebra $\mathcal{F}$ specifies which collections of outcomes we are allowed to assign probabilities to. The probability measure $P$ assigns numbers between 0 and 1 to those collections, obeying the rule that disjoint events have additive probabilities.

The sigma-algebra is more than a formality. For infinite sample spaces, not every subset can be assigned a meaningful probability. The sigma-algebra ensures closure under countable operations, which is needed for taking limits of events. Conditional probability, $P(A|B) = P(A \cap B)/P(B)$, is the mathematical formalisation of "updated belief": it reassigns probabilities after learning that event $B$ has occurred. Bayes' theorem then converts between $P(A|B)$ and $P(B|A)$, which is the foundation of statistical inference. Independence captures the idea that knowing one event occurred tells you nothing about the other, formalised as $P(A \cap B) = P(A)P(B)$.

### 1.8 Worked Example: Applying Bayes' Theorem

**Problem.** A disease affects 1 in 1000 people. A test is 99% sensitive (true positive rate) and 95% specific (true negative rate). If a person tests positive, what is the probability they have the disease?

<details>
<summary>Solution</summary>

Let $D$ be the event of having the disease and $T$ be the event of testing positive.

$P(D) = 0.001$, $P(T|D) = 0.99$, $P(T|D^c) = 0.05$.

By the law of total probability:
$P(T) = P(T|D)P(D) + P(T|D^c)P(D^c) = 0.99 \times 0.001 + 0.05 \times 0.999 = 0.00099 + 0.04995 = 0.05094$.

By Bayes' theorem:
$P(D|T) = P(T|D)P(D)/P(T) = 0.00099/0.05094 = 0.0194$.

So only about 1.94% of positive tests are true positives, despite the high sensitivity. $\blacksquare$

</details>

## Cross-References

- **[Sequences and Limits](3-real-analysis/2_sequences-and-limits.md)**: The convergence concepts from real analysis underpin the definition of limits of random variables and the law of large numbers.
- **[Series](3-real-analysis/3_series.md)**: Series convergence tests are used to verify that probability measures are well-defined and to establish moment generating function properties.
- **[Sequences and Series of Functions](3-real-analysis/7_sequences-and-series-of-functions.md)**: Convergence of distribution functions and characteristic functions relies on uniform convergence theory.
- **[Complex Numbers Review](6-complex-analysis/1_complex-numbers-review.md)**: Complex analysis provides the tools for understanding characteristic functions and moment generating functions in probability theory.

