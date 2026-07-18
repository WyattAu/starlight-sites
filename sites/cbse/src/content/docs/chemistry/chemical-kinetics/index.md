---
title: "Chemical Kinetics"
description: "CBSE Class 12 chemistry: Chemical kinetics with rate laws, order of reaction, and worked examples."
---

# Chemical Kinetics

Chemical kinetics studies the rate of chemical reactions and the factors affecting them. It covers rate laws, reaction orders, Arrhenius equation, and reaction mechanisms.

## Key Concepts

- Reaction rate is the change in concentration per unit time
- Rate law: $\text{rate} = k[A]^m[B]^n$ where $m$ and $n$ are experimentally determined
- Order of reaction is the sum of exponents in the rate law
- Half-life $t_{1/2}$ depends on order: zero order $t_{1/2} = \frac{[A]_0}{2k}$, first order $t_{1/2} = \frac{0.693}{k}$
- Arrhenius equation: $k = Ae^{-E_a/RT}$ relates rate constant to temperature
- Activation energy $E_a$ is the minimum energy required for reaction

## Worked Example 1 — Determining Rate Law from Experimental Data

**Problem:** For the reaction $2\text{NO} + \text{O}_2 \rightarrow 2\text{NO}_2$, the following initial rates are observed:

| Experiment | [NO] (M) | [O$_2$] (M) | Initial Rate (M/s) |
|------------|----------|-------------|-------------------|
| 1          | 0.010    | 0.010       | $2.5 \times 10^{-5}$ |
| 2          | 0.020    | 0.010       | $1.0 \times 10^{-4}$ |
| 3          | 0.010    | 0.020       | $5.0 \times 10^{-5}$ |

Determine the rate law and rate constant.

**Solution:**

Comparing experiments 1 and 2 ([O$_2$] constant):
$$\frac{\text{Rate}_2}{\text{Rate}_1} = \frac{1.0 \times 10^{-4}}{2.5 \times 10^{-5}} = 4 = \left(\frac{0.020}{0.010}\right)^m = 2^m$$

So $m = 2$ (second order in NO).

Comparing experiments 1 and 3 ([NO] constant):
$$\frac{\text{Rate}_3}{\text{Rate}_1} = \frac{5.0 \times 10^{-5}}{2.5 \times 10^{-5}} = 2 = \left(\frac{0.020}{0.010}\right)^n = 2^n$$

So $n = 1$ (first order in O$_2$).

Rate law: $\text{rate} = k[\text{NO}]^2[\text{O}_2]$

Using experiment 1:
$$k = \frac{\text{rate}}{[\text{NO}]^2[\text{O}_2]} = \frac{2.5 \times 10^{-5}}{(0.010)^2(0.010)} = 2.5 \times 10^3 \text{ M}^{-2}\text{s}^{-1}$$

**Common mistake:** Assuming the rate law from the stoichiometric coefficients. The exponents must be determined experimentally, not from the balanced equation.

## Worked Example 2 — First-Order Half-Life

**Problem:** A first-order reaction has a half-life of 20 minutes. What percentage of the reactant remains after 60 minutes?

**Solution:**

Number of half-lives in 60 minutes:
$$n = \frac{60}{20} = 3$$

Fraction remaining after $n$ half-lives:
$$\frac{[A]}{[A]_0} = \left(\frac{1}{2}\right)^n = \left(\frac{1}{2}\right)^3 = \frac{1}{8} = 0.125$$

Percentage remaining: $12.5\%$

**Common mistake:** Forgetting that first-order half-life is constant. Some students try to use integrated rate law unnecessarily when the half-life method is simpler.

## Worked Example 3 — Arrhenius Equation

**Problem:** The rate constant of a reaction doubles when the temperature increases from 300 K to 310 K. Calculate the activation energy.

**Solution:**

Using the Arrhenius equation in ratio form:
$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

Given $k_2/k_1 = 2$, $T_1 = 300$ K, $T_2 = 310$ K:
$$\ln 2 = \frac{E_a}{8.314}\left(\frac{1}{300} - \frac{1}{310}\right)$$

$$0.693 = \frac{E_a}{8.314} \times \frac{10}{300 \times 310}$$

$$0.693 = \frac{E_a}{8.314} \times 1.075 \times 10^{-4}$$

$$E_a = \frac{0.693 \times 8.314}{1.075 \times 10^{-4}} = 53.6 \text{ kJ/mol}$$

**Common mistake:** Using $R = 8.314$ J/(mol·K) without converting $E_a$ to J/mol. The answer should be reported in kJ/mol by dividing by 1000.

## Practice Problems

1. For a reaction with rate law $\text{rate} = k[A][B]^2$, if [A] is doubled and [B] is tripled, by what factor does the rate increase?
2. A first-order reaction is 50% complete in 30 minutes. How long does it take to be 75% complete?
3. The rate constant at 25°C is $1.0 \times 10^{-3}$ s$^{-1}$ and at 35°C is $2.0 \times 10^{-3}$ s$^{-1}$. Calculate $E_a$.

## Common Exam Patterns

- Always determine order experimentally from initial rate data
- For first-order reactions, remember $t_{1/2} = 0.693/k$ is independent of concentration
- In Arrhenius problems, watch units: $R = 8.314$ J/(mol·K) and $E_a$ is usually in kJ/mol
- Practice graphing: $\ln[A]$ vs $t$ is linear for first-order, $[A]$ vs $t$ is linear for zero-order
