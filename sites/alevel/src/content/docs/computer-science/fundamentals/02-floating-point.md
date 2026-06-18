---
title: Floating Point Representation
description: ""flush to zero," losing all precision. Denormalised numbers provide a gradual
Transition, maintaining relative precision longer.

</details>

**Problem 8.** In IEEE 754 single precision, how many distinct normalised numbers are there? How
Many denormalised?

<details>
<summary>Hint</summary>

Count the combinations of sign, exponent, and mantissa for each category.

</details>

<details>
<summary>Answer</summary>

Normalised: Exponent $E$ ranges from 1 to 254 (254 values). Mantissa $M$ has $2^{23}$ values. Sign
Has 2 values. Total: $2 \times 254 \times 2^{23} = 4,261,412,864$.

Denormalised: $E = 0$$M \neq 0$. Total: $2 \times (2^{23} - 1) = 16,777,214$.

</details>

**Problem 9.** A programmer computes $a = 10000000.0$ and $b = 0.00000001$ in single-precision
Float, then computes $a + b - a$. Explain why the result might be $0$ rather than $b$.

<details>
<summary>Hint</summary>

Think about the precision of single-precision float relative to the magnitude of $a$.

</details>

<details>
<summary>Answer</summary>

Single precision has approximately 7 decimal digits of precision. When $a = 10^7$The smallest
Representable difference between consecutive floats near $a$ is approximately
$a \times \epsilon \approx 10^7 \times 10^{-7} = 1$. Since $b = 10^{-8}$ is much smaller than the
Gap between representable numbers near $a$$a + b$ rounds to $a$ itself. Then $a - a = 0$.

This is an example of **cancellation error** combined with **limited precision**.

</details>

**Problem 10.** Calculate the absolute and relative error when $1/3$ is stored as $0.333333$ (6
Decimal places).

<details>
<summary>Hint</summary>

Use the formulas for absolute and relative error with $x = 1/3$ and $\tilde{x} = 0.333333$.

</details>

<details>
<summary>Answer</summary>

Absolute error:
$|1/3 - 0.333333| = |0.333333\ldots - 0.333333| = 0.000000\overline{3} \approx 3.33 \times 10^{-7}$

Relative error:
$\frac◆LB◆3.33 \times 10^{-7}◆RB◆◆LB◆1/3◆RB◆ = 3.33 \times 10^{-7} \times 3 = 10^{-6} = 0.0001\%$

</details>

<hr />

## 7. IEEE 754 Double Precision (64-bit)

### Format

```
| 1 bit  |   11 bits  |        52 bits       |
| Sign S | Exponent E |    Mantissa M        |
```

| Field          | Bits | Purpose                             |
| -------------- | ---- | ----------------------------------- |
| Sign ($S$)     | 1    | 0 = positive, 1 = negative          |
| Exponent ($E$) | 11   | Biased exponent: $E = e + 1023$     |
| Mantissa ($M$) | 52   | Fractional part; implicit leading 1 |

### Decoding

$$(-1)^S \times 1.M \times 2^{E - 1023}$$

### Range

- **Largest normalised:** $(2 - 2^{-52}) \times 2^{1023} \approx 1.798 \times 10^{308}$
- **Smallest normalised:** $2^{-1022} \approx 2.225 \times 10^{-308}$
- **Precision:** $52 + 1 = 53$ bits $\approx 15.95$ decimal digits

### Comparison: Single vs Double

| Property        | Single (32-bit)                       | Double (64-bit)                        |
| --------------- | ------------------------------------- | -------------------------------------- |
| Sign            | 1 bit                                 | 1 bit                                  |
| Exponent        | 8 bits (bias 127)                     | 11 bits (bias 1023)                    |
| Mantissa        | 23 bits                               | 52 bits                                |
| Precision       | ~7 decimal digits                     | ~16 decimal digits                     |
| Max value       | ~$3.4 \times 10^{38}$                 | ~$1.8 \times 10^{308}$                 |
| Min normal      | ~$1.2 \times 10^{-38}$                | ~$2.2 \times 10^{-308}$                |
| Machine epsilon | $2^{-23} \approx 1.19 \times 10^{-7}$ | $2^{-52} \approx 2.22 \times 10^{-16}$ |

<hr />

## 8. Special Values in Detail

### Signed Zero

IEEE 754 has both $+0$ and $-0$:

- `+0`: Sign = 0, Exponent = 0, Mantissa = 0
- `-0`: Sign = 1, Exponent = 0, Mantissa = 0

They compare equal (`+0 == -0` is true), but their sign bits differ. This matters for:

- Division: $1 / +0 = +\infty$$1 / -0 = -\infty$
- Square root: $\sqrt{-0} = -0$
- Complex arithmetic where the sign of zero indicates direction

### Infinity

Represents overflow or division by zero:

- $+\infty$: Sign = 0, Exponent = 255 (all 1s), Mantissa = 0
- $-\infty$: Sign = 1, Exponent = 255, Mantissa = 0

Arithmetic rules:

| Operation               | Result    |
| ----------------------- | --------- |
| $x / 0$ (for $x \gt 0$) | $+\infty$ |
| $x / 0$ (for $x \lt 0$) | $-\infty$ |
| $\infty + \infty$       | $+\infty$ |
| $\infty - \infty$       | NaN       |
| $\infty \times \infty$  | $+\infty$ |
| $0 \times \infty$       | NaN       |
| $\infty / \infty$       | NaN       |

### NaN (Not a Number)

Represents undefined or indeterminate results:

- Sign = 0 or 1 (implementation-dependent)
- Exponent = 255 (all 1s)
- Mantissa $\neq$ 0 (any non-zero mantissa)

NaN is produced by:

| Operation         | Result |
| ----------------- | ------ |
| $0 / 0$           | NaN    |
| $\infty - \infty$ | NaN    |
| $\sqrt{-1}$       | NaN    |
| $\infty \times 0$ | NaN    |

Key property: **NaN is not equal to anything, including itself.**

```python
>>> float("nan') == float('nan')
False
>>> import math
>>> math.isnan(float('nan'))
True
```

To check for NaN, use `math.isnan(x)` — never use `x == float('nan')`.

<hr />

## 9. Precision Loss Examples

### Example 1: Catastrophic Cancellation

Subtracting two nearly equal numbers loses significant digits.

```python
a = 1.0000001
b = 1.0000000
difference = a - b  # Expected: 0.0000001 = 1e-7
print(difference)   # Output: 1.000000082740371e-07
```

The result has only 1 significant digit of accuracy despite both inputs having 8. The leading digits
Cancel out, leaving only the error terms.

### Example 2: Accumulation Error

```python
total = 0.0
for _ in range(1000000):
    total += 0.1
print(total)  # Expected: 100000.0
              # Output: 100000.00000000134
```

Each addition introduces a small rounding error. After a million additions, the errors accumulate to
A noticeable discrepancy.

### Example 3: Comparing Floats

```python
x = 0.1 + 0.2
y = 0.3
print(x == y)  # False

# Correct approach: compare within tolerance
epsilon = 1e-9
print(abs(x - y) < epsilon)  # True
```

<hr />

## 10. Common Pitfalls

| Pitfall                            | Explanation                                            | Solution                                                       |
| ---------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------- |
| Using `==` for float comparison    | Rounding errors mean exact equality rarely holds       | Compare with tolerance: `abs(a - b) &lt; epsilon`              |
| Assuming floats are exact          | Most decimal fractions have infinite binary expansions | Use `decimal.Decimal` for financial calculations               |
| Subtracting nearly equal numbers   | Catastrophic cancellation destroys precision           | Rearrange the formula algebraically to avoid subtraction       |
| Adding small to large numbers      | The small number may be lost due to limited precision  | Add small numbers together first, then add to the large number |
| Checking `x == float('nan')`       | NaN is not equal to itself by definition               | Use `math.isnan(x)`                                            |
| Ignoring denormalised numbers      | Assuming all numbers have 24-bit precision             | Denormalised numbers near zero have fewer significant bits     |
| Mixing single and double precision | Implicit conversions can lose precision                | Be consistent with precision throughout the calculation        |

<hr />

## 11. Additional Problem Set

**Problem 1.** Encode the value $-0.75$ in IEEE 754 single precision. Give the binary and
Hexadecimal representation.

<details>
<summary>Answer</summary>

$0.75_{10} = 0.11_2 = 1.1 \times 2^{-1}$

$S = 1$ (negative)

$E = -1 + 127 = 126 = 01111110_2$

$M = 10000000000000000000000$

Binary: `1 01111110 10000000000000000000000`

Hex: `10111111 01000000 00000000 00000000` = `BF400000`

</details>

**Problem 2.** Decode the IEEE 754 double-precision value `4039000000000000` (hex).

<details>
<summary>Answer</summary>

Hex: `4039000000000000`

Binary: `0100000000111001000000000000000000000000000000000000000000000000`

- $S = 0$ (positive)
- $E = 10000000011_2 = 1027$So $e = 1027 - 1023 = 4$
- $M = 1001000000...0$

Value: $(-1)^0 \times 1.1001_2 \times 2^4$

$1.1001_2 = 1 + 0.5 + 0.0625 = 1.5625$

$1.5625 \times 16 = 25.0$

So the value is $25.0$.

</details>

**Problem 3.** Explain what happens when you compute `1.0 / 0.0` and `0.0 / 0.0` in IEEE 754. Why
Are the results different?

<details>
<summary>Answer</summary>

`1.0 / 0.0` produces $+\infty$. This represents mathematical division where a non-zero quantity is
Divided by zero — the result tends to infinity.

`0.0 / 0.0` produces NaN. This represents an indeterminate form: the limit depends on how both
Numerator and denominator approach zero (e.g., $\lim_{x \to 0} x/x = 1$ but
$\lim_{x \to 0} 2x/x = 2$). Since the result is not uniquely determined, IEEE 754 returns NaN.

The distinction is important because $+\infty$ can participate meaningfully in further arithmetic
(e.g., $1 / \infty = 0$), while NaN propagates through all operations, signalling that the result is
Invalid.

</details>

**Problem 4.** A programmer writes the following code to compute the quadratic formula. Explain why
It may give incorrect results and suggest a fix.

```python
def quadratic(a, b, c):
    discriminant = b**2 - 4*a*c
    x1 = (-b + discriminant**0.5) / (2*a)
    x2 = (-b - discriminant**0.5) / (2*a)
    return x1, x2
```

<details>
<summary>Answer</summary>

**Problem: Catastrophic cancellation.** When $4ac$ is small compared to $b^2$The discriminant is
Close to $b^2$. Then $\sqrt{b^2 - 4ac} \approx |b|$And one of the numerators becomes $-b + |b|$ or
$-b - |b|$. If $b \gt 0$Then $-b + \sqrt{b^2 - 4ac}$ subtracts nearly equal numbers, losing
Precision.

**Fix:** Compute one root with the standard formula and the other using the identity
$x_1 \times x_2 = c/a$:

```python
def quadratic(a, b, c):
    discriminant = b**2 - 4*a*c
    sqrt_d = discriminant**0.5
    if b >= 0:
        x1 = (-b - sqrt_d) / (2*a)
    else:
        x1 = (-b + sqrt_d) / (2*a)
    x2 = c / (a * x1)
    return x1, x2
```

By choosing the sign that avoids cancellation in $x_1$And computing $x_2$ from the product
Relationship, both roots maintain full precision.

</details>

**Problem 5.** In IEEE 754 single precision, what is the smallest positive number that, when added
To $1.0$Produces a result different from $1.0$? Explain why.

<details>
<summary>Answer</summary>

This is the definition of **machine epsilon**: the smallest $\epsilon$ such that
$1 + \epsilon \gt 1$.

In single precision, the mantissa has 23 bits. The value $1.0$ is represented as
$1.000\ldots0 \times 2^0$. The next representable number is $1.000\ldots01 \times 2^0$Where the Last
bit of the mantissa is 1.

This value is $1 + 2^{-23} \approx 1.0000001192092896$.

So $\epsilon = 2^{-23} \approx 1.19 \times 10^{-7}$.

Any value smaller than $\epsilon$When added to $1.0$Rounds back to $1.0$ because there are not
Enough mantissa bits to represent the difference. For example, $1.0 + 2^{-24} = 1.0$ in single
Precision.

</details>

## Summary

This topic covers the core concepts of floating point representation, including underlying theory,
practical implementation, and key applications.

**Key concepts include:**

- core concepts and terminology
- algorithms and computational thinking
- practical implementation
- security and ethical considerations
- applications in the real world

Understanding these concepts thoroughly is essential for both examinations and practical
programming, and requires both theoretical knowledge and hands-on practice.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

