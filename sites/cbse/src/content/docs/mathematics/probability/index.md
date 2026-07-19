---
title: "Probability"
description: "CBSE Class 12 mathematics: Conditional probability, Bayes' theorem, random variables, and worked examples."
---

# Probability

Probability quantifies the likelihood of events. This topic covers conditional probability, Bayes' theorem, random variables, and probability distributions.

## Key Concepts

- Conditional probability: $P(A|B) = \frac{P(A \cap B)}{P(B)}$
- Multiplication rule: $P(A \cap B) = P(A|B) \cdot P(B)$
- Bayes' theorem: $P(A_i|B) = \frac{P(B|A_i) \cdot P(A_i)}{\sum_j P(B|A_j) \cdot P(A_j)}$
- Total probability: $P(B) = \sum_i P(B|A_i) \cdot P(A_i)$
- Random variable: a function assigning numerical values to outcomes
- Mean (expected value): $E(X) = \sum x_i P(X = x_i)$
- Variance: $\text{Var}(X) = E(X^2) - [E(X)]^2$
- Binomial distribution: $P(X = r) = \binom{n}{r} p^r q^{n-r}$, mean $= np$, variance $= npq$

## Worked Example 1 — Conditional Probability

**Problem:** A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find the probability that both are red.

**Solution:**

$$P(\text{both red}) = P(\text{1st red}) \times P(\text{2nd red}|\text{1st red})$$

$$= \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$$

**Common mistake:** Treating the draws as independent when they are without replacement. The second draw depends on the first.

## Worked Example 2 — Bayes' Theorem

**Problem:** A factory has three machines. Machine A produces 30% of items with 5% defect rate, Machine B produces 45% with 3% defect rate, and Machine C produces 25% with 4% defect rate. An item is selected at random and found to be defective. Find the probability it came from Machine A.

**Solution:**

Let $D$ = defective, $A$, $B$, $C$ = machines.

$$P(D) = P(D|A)P(A) + P(D|B)P(B) + P(D|C)P(C)$$

$$= 0.05 \times 0.30 + 0.03 \times 0.45 + 0.04 \times 0.25$$

$$= 0.015 + 0.0135 + 0.01 = 0.0385$$

By Bayes' theorem:
$$P(A|D) = \frac{P(D|A)P(A)}{P(D)} = \frac{0.015}{0.0385} = \frac{15}{38.5} \approx 0.3896$$

**Common mistake:** Forgetting to use the total probability $P(D)$ in the denominator. Using only $P(D|A)P(A)$ gives the wrong answer.

## Worked Example 3 — Binomial Distribution

**Problem:** A coin is tossed 5 times. Find the probability of getting exactly 3 heads.

**Solution:**

This is a binomial distribution with $n = 5$, $r = 3$, $p = 0.5$, $q = 0.5$:

$$P(X = 3) = \binom{5}{3} (0.5)^3 (0.5)^2 = 10 \times 0.125 \times 0.25 = 0.3125$$

Mean: $\mu = np = 5 \times 0.5 = 2.5$

Variance: $\sigma^2 = npq = 5 \times 0.5 \times 0.5 = 1.25$

**Common mistake:** Using $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ incorrectly. $\binom{5}{3} = \frac{5!}{3!2!} = 10$.

## Practice Problems

1. Two cards are drawn from a deck. Find the probability that both are aces given that at least one is an ace.
2. A die is rolled 4 times. Find the probability of getting exactly 2 sixes.
3. 60% of patients recover from a disease. If 5 patients are selected, find the probability that at least 4 recover.

## Why This Matters

Probability is fundamental to statistics, data science, risk assessment, and decision-making. Bayes' theorem underpins modern machine learning, medical diagnosis, and legal reasoning. Understanding probability distributions is essential for any quantitative field.

## Common Exam Patterns

- Bayes' theorem problems typically involve multiple stages or sources
- Conditional probability problems often involve "given that" statements
- Binomial distribution applies when there are independent trials with two outcomes
- Practice with tree diagrams for multi-stage probability problems
- Always check if events are independent before applying multiplication rule

## Key Formulas

- Conditional probability: $P(A|B) = \frac{P(A \cap B)}{P(B)}$, $P(B) > 0$
- Addition rule: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- Bayes' theorem: $P(A_i|B) = \frac{P(B|A_i) P(A_i)}{\sum_j P(B|A_j) P(A_j)}$
- Binomial: $P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}$
- Mean of binomial: $\mu = np$, Variance: $\sigma^2 = np(1-p)$
- Variance formula: $\text{Var}(X) = E(X^2) - [E(X)]^2$

## Worked Example 4 — Conditional Probability with Cards

**Problem:** Two cards are drawn from a standard deck of 52 cards without replacement. Given that the first card is an ace, find the probability that the second card is also an ace.

**Solution:**

Given the first card is an ace, there are 3 aces left out of 51 remaining cards.

$$P(\text{2nd ace} | \text{1st ace}) = \frac{3}{51} = \frac{1}{17}$$

This is a direct application of conditional probability. The sample space reduces from 52 to 51 cards after the first draw.

**Common mistake:** Calculating $\frac{4}{52} \times \frac{3}{51}$ instead of just $\frac{3}{51}$. Since we are given the first card is an ace, we don't multiply by its probability.

## Worked Example 5 — Mean and Variance of Random Variable

**Problem:** A random variable $X$ has the probability distribution:

| $X$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| $P(X)$ | 0.1 | 0.2 | 0.3 | 0.25 | 0.15 |

Find $E(X)$, $E(X^2)$, and $\text{Var}(X)$.

**Solution:**

$$E(X) = 0(0.1) + 1(0.2) + 2(0.3) + 3(0.25) + 4(0.15) = 0 + 0.2 + 0.6 + 0.75 + 0.6 = 2.15$$

$$E(X^2) = 0^2(0.1) + 1^2(0.2) + 2^2(0.3) + 3^2(0.25) + 4^2(0.15) = 0 + 0.2 + 1.2 + 2.25 + 2.4 = 6.05$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = 6.05 - (2.15)^2 = 6.05 - 4.6225 = 1.4275$$

**Common mistake:** Forgetting to square $E(X)$ in the variance formula. $\text{Var}(X) = E(X^2) - [E(X)]^2$, not $E(X^2) - E(X)$.

## Worked Example 6 — Binomial Distribution Application

**Problem:** A survey shows that 60% of students prefer online learning. If 8 students are selected at random, find the probability that exactly 5 prefer online learning. Also find the mean and standard deviation.

**Solution:**

This is a binomial distribution with $n = 8$, $p = 0.6$, $q = 0.4$.

$$P(X = 5) = \binom{8}{5} (0.6)^5 (0.4)^3 = 56 \times 0.07776 \times 0.064 = 0.2787$$

Mean: $\mu = np = 8 \times 0.6 = 4.8$

Variance: $\sigma^2 = npq = 8 \times 0.6 \times 0.4 = 1.92$

Standard deviation: $\sigma = \sqrt{1.92} \approx 1.386$

**Common mistake:** Confusing standard deviation with variance. The standard deviation is the square root of the variance.

## Exam Tips

1. For Bayes' theorem problems, always draw a tree diagram to visualize the stages
2. Conditional probability problems: identify what is "given" and reduce the sample space accordingly
3. Binomial distribution requires: fixed number of trials, two outcomes, constant probability, independent trials
4. When calculating variance, always use $\text{Var}(X) = E(X^2) - [E(X)]^2$ (not $E(X^2) - E(X)$)
5. Practice problems involving "at least one" — use the complement: $P(\text{at least one}) = 1 - P(\text{none})$

## Common Mistakes

**Confusing conditional probability P(A|B) with joint probability P(A and B).** P(A|B) = P(A and B) / P(B). Students often use P(A) * P(B) instead, which only works for independent events. Conditional probability requires dividing by the condition's probability.

**Forgetting that Bayes' theorem requires the total probability in the denominator.** The formula is P(Ai|B) = P(B|Ai) * P(Ai) / sum(P(B|Aj) * P(Aj)). Students sometimes omit the summation, using only one term in the denominator. The denominator must account for all possible ways B can occur.

**Confusing the mean and variance formulas for binomial distribution.** For binomial(n, p), the mean is np and the variance is npq where q = 1 - p. Students often write variance as np instead of npq, forgetting to multiply by the probability of failure. The variance is always less than the mean for binomial distributions.

## Cross-References

- [Statistics](../relations-functions/index) -- Probability distributions provide the theoretical foundation for statistical inference and hypothesis testing.
- [Matrices](../matrices/index) -- Transition matrices in Markov chains use matrix multiplication to compute state probabilities.
- [Calculus](../integrals/index) -- Continuous probability distributions require integration to find probabilities over intervals.
