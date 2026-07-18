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
