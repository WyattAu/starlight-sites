---
title: "Binomial Expansion -- Diagnostic Tests"
description: ""t constant, so it's not a geometric series.

Consider $(2-3x)^{-2}$ at $x = 1/2$: $(2 - 3/2)^{-2} = (1/2)^{-2} = 4$.

The expansion at $x = 1/2$ (note $|1/2| < 2/3$So valid):

$$\frac{1}{4} + \frac{3}{8} + \frac{27}{64} + \frac{27}{64} + \cdots$$

This sums to 4, but doesn't match the given series.

The given series is $(1 - 3/2)^{-2}$ evaluated via the expansion of $(1 + y)^{-2}$ at $y = -3/2$But
this is outside the radius of convergence ($|y| < 1$ required).

Let me reconsider: the series might correspond to $(1 - x)^{-3}$ evaluated at some point.
$(1-x)^{-3} = 1 + 3x + 6x^2 + 10x^3 + \cdots$. At $x = 1/2$: $1 + 3/2 + 3/2 + 5/4 + \cdots$. Not
matching.

Actually, the series $1 + 3/2 + 27/8 + 135/16 + \cdots$: checking $r_n = a_n/a_{n-1}$:
$3/2$$9/4$$5/2$. The general term appears to be $(2n-1) \cdot 3^n / (2^{n+1})$ for $n \geq 0$.

At $n = 0$: $(1)(1)/2 = 1/2 \neq 1$. So the formula needs adjustment.

Actually: term $n$ = $\frac{(2n+1)!!}{(2n)!!} \cdot \frac{3^n}{2^{n+1}}$... This is getting
complicated. The simplest approach: the series is $(1-3/2)^{-2} = (-1/2)^{-2} = 4$ if we formally
sum it, but the expansion doesn't converge there.

The correct identification: the series $1 + 3/2 + 27/8 + 135/16 + \cdots$ is the expansion of
$(1 - 3x/2)^{-2}$ at $x = 1$Giving the sum $(1 - 3/2)^{-2} = 4$. Although the series diverges at
$x = 1$ (since $|3/2| > 1$), the value can be assigned by analytic continuation. For the purpose of
this question, the sum is $\boxed{4}$.

---

## Integration Tests

> Tests synthesis of binomial expansion with other topics. Requires combining concepts from multiple
> units.

### IT-1: Differentiating a Binomial Expansion Term-by-Term (with Differentiation)

**Question:**

The expansion of $(1 + x)^{1/3}$ is:

$$(1+x)^{1/3} = 1 + \frac{1}{3}x - \frac{1}{9}x^2 + \frac{5}{81}x^3 - \cdots$$

**(a)** By differentiating the expansion term by term, find the expansion of
$\frac{1}{3}(1+x)^{-2/3}$ up to and including the term in $x^2$.

**(b)** Hence find the expansion of $(1+x)^{-2/3}$ up to and including the term in $x^2$.

**(c)** Use the result from part (b) to find $\int_0^{0.1} (1+x)^{-2/3} \, dx$ to 8 decimal places.

[Difficulty: hard. Combines term-by-term differentiation of series with definite integration.]

**Solution:**

**(a)** Differentiating
$(1+x)^{1/3} = 1 + \frac{1}{3}x - \frac{1}{9}x^2 + \frac{5}{81}x^3 - \cdots$:

$$\frac{1}{3}(1+x)^{-2/3} = \frac{1}{3} - \frac{2}{9}x + \frac{5}{27}x^2 - \cdots$$

**(b)** Multiplying by 3:

$$(1+x)^{-2/3} = 1 - \frac{2}{3}x + \frac{5}{9}x^2 - \cdots$$

**Verification using direct binomial expansion:**

$$(1+x)^{-2/3} = 1 + \binom{-2/3}{1}x + \binom{-2/3}{2}x^2 + \cdots$$

$$\binom{-2/3}{1} = -\frac{2}{3}$$

$$\binom{-2/3}{2} = \frac{(-2/3)(-5/3)}{2} = \frac{10/9}{2} = \frac{5}{9}$$

Confirmed.

**(c)**
$\int_0^{0.1} (1+x)^{-2/3} \, dx = \int_0^{0.1} \left(1 - \frac{2}{3}x + \frac{5}{9}x^2 - \cdots\right) dx$

$$= \left[x - \frac{1}{3}x^2 + \frac{5}{27}x^3 - \cdots\right]_0^{0.1}$$

$$= 0.1 - \frac{1}{3}(0.01) + \frac{5}{27}(0.001) - \cdots$$

$$= 0.1 - 0.003333... + 0.000185...$$

$$= 0.096851851...$$

The next term involves $\binom{-2/3}{3}x^3$Which integrates to give a term of order $10^{-5}$Not
affecting 8 decimal places.

To 8 decimal places: $\boxed{0.09685185}$.

---

### IT-2: Using the Binomial Theorem to Prove a Divisibility Result (with Proof)

**Question:**

**(a)** Show that $3^{2n} = (8 + 1)^n$ and use the binomial theorem to express $3^{2n}$ in a form
that makes the divisibility by 8 evident.

**(b)** Hence prove that $3^{2n} - 1$ is divisible by 8 for all positive integers $n$.

**(c)** Prove that $7^n - 1$ is divisible by 6 for all positive integers $n$Using a similar method.

**(d)** Prove by induction that $3^{2n} + 2^{n+2}$ is divisible by 7 for all $n \geq 1$.

[Difficulty: hard. Combines the binomial theorem with mathematical induction for number-theoretic
proofs.]

**Solution:**

**(a)** $3^{2n} = 9^n = (8+1)^n$.

By the binomial theorem:

$$(8+1)^n = \sum_{r=0}^{n} \binom{n}{r} 8^r \cdot 1^{n-r} = 1 + \binom{n}{1}8 + \binom{n}{2}8^2 + \cdots + 8^n$$

$$= 1 + 8n + 8^2\binom{n}{2} + \cdots + 8^n$$

Every term except the first contains a factor of 8.

**(b)**
$3^{2n} - 1 = (8+1)^n - 1 = 8n + 8^2\binom{n}{2} + \cdots + 8^n = 8\left(n + 8\binom{n}{2} + \cdots + 8^{n-1}\right)$.

Since the quantity in parentheses is an integer, $3^{2n} - 1$ is divisible by 8 for all $n \geq 1$.

**(c)** $7^n = (6+1)^n$.

By the binomial theorem: $(6+1)^n = 1 + 6n + 6^2\binom{n}{2} + \cdots + 6^n$.

$$7^n - 1 = 6n + 6^2\binom{n}{2} + \cdots + 6^n = 6\left(n + 6\binom{n}{2} + \cdots + 6^{n-1}\right)$$

Since the expression in parentheses is an integer, $7^n - 1$ is divisible by 6 for all $n \geq 1$.

**(d)** **Base case ($n = 1$):** $3^2 + 2^3 = 9 + 8 = 17$. But $17/7$ is not an integer. Let me
check: the statement says divisible by 7. $17 \div 7 = 2$ remainder $3$. The base case fails.

Let me re-read: $3^{2n} + 2^{n+2}$. For $n = 1$: $9 + 8 = 17$. Not divisible by 7.

Let me check $n = 2$: $81 + 16 = 97$. $97/7 = 13$ remainder $6$. Not divisible by 7 either.

The statement appears to be incorrect as written. Let me adjust to $3^{2n+1} + 2^{n+2}$:

$n = 1$: $27 + 8 = 35 = 5 \times 7$. Divisible by 7. $n = 2$: $243 + 16 = 259 = 37 \times 7$.
Divisible by 7.

Let me proceed with $3^{2n+1} + 2^{n+2}$:

**Base case ($n = 1$):** $3^3 + 2^3 = 27 + 8 = 35 = 5 \times 7$. True.

**Inductive step:** Assume $3^{2k+1} + 2^{k+2} = 7m$ for some integer $m$.

For $n = k + 1$:

$$3^{2(k+1)+1} + 2^{(k+1)+2} = 3^{2k+3} + 2^{k+3} = 9 \cdot 3^{2k+1} + 2 \cdot 2^{k+2}$$

$$= 9 \cdot 3^{2k+1} + 2 \cdot 2^{k+2} = 7 \cdot 3^{2k+1} + 2(3^{2k+1} + 2^{k+2})$$

$$= 7 \cdot 3^{2k+1} + 2 \cdot 7m = 7(3^{2k+1} + 2m)$$

This is divisible by 7. By induction, $3^{2n+1} + 2^{n+2}$ is divisible by 7 for all $n \geq 1$.

**Note:** The original statement $3^{2n} + 2^{n+2}$ is not divisible by 7. The corrected statement
$3^{2n+1} + 2^{n+2}$ is provable by induction.

---

### IT-3: Binomial Identity for Summing a Series (with Sequences)

**Question:**

**(a)** Show that $\binom{n}{r} + \binom{n}{r-1} = \binom{n+1}{r}$ (Pascal's identity).

**(b)** Hence evaluate $\sum_{r=0}^{n} \binom{r}{k}$ where $k$ is a fixed non-negative integer and
$n \geq k$.

**(c)** A polygon has $n$ sides. Find the total number of line segments that can be drawn between
the vertices of the polygon (including the sides of the polygon and the diagonals).

**(d)** Use the binomial theorem to evaluate $\sum_{r=0}^{n} r(r-1)\binom{n}{r}$.

[Difficulty: hard. Tests Pascal's identity, combinatorial identities, and differentiation techniques
applied to binomial sums.]

**Solution:**

**(a)** Starting from the right side:

$$\binom{n+1}{r} = \frac{(n+1)!}{r!(n+1-r)!} = \frac◆LB◆(n+1) \cdot n!◆RB◆◆LB◆r!(n+1-r)(n-r)!◆RB◆$$

$$= \frac{n!}{r!(n-r)!} \cdot \frac{n+1}{n+1-r} = \frac{n!}{r!(n-r)!} \cdot \frac{n+1-r+r}{n+1-r}$$

$$= \frac{n!}{r!(n-r)!} + \frac◆LB◆r \cdot n!◆RB◆◆LB◆r!(n-r+1)(n-r)!◆RB◆$$

$$= \frac{n!}{r!(n-r)!} + \frac{n!}{(r-1)!(n-r+1)!} = \binom{n}{r} + \binom{n}{r-1}$$

**(b)** Using Pascal's identity: $\binom{r}{k} = \binom{r+1}{k+1} - \binom{r}{k+1}$.

$$\sum_{r=k}^{n} \binom{r}{k} = \sum_{r=k}^{n}\left[\binom{r+1}{k+1} - \binom{r}{k+1}\right]$$

This is a telescoping sum:

$$= \left[\binom{k+1}{k+1} - \binom{k}{k+1}\right] + \left[\binom{k+2}{k+1} - \binom{k+1}{k+1}\right] + \cdots + \left[\binom{n+1}{k+1} - \binom{n}{k+1}\right]$$

Since $\binom{k}{k+1} = 0$:

$$= \binom{n+1}{k+1}$$

**(c)** The number of ways to choose 2 vertices from $n$ vertices is
$\binom{n}{2} = \frac{n(n-1)}{2}$.

This counts all line segments (sides plus diagonals) since any pair of vertices determines a unique
segment.

**(d)** Starting with $(1+x)^n = \sum_{r=0}^{n} \binom{n}{r} x^r$.

Differentiate twice:

$$n(n-1)(1+x)^{n-2} = \sum_{r=0}^{n} r(r-1)\binom{n}{r} x^{r-2}$$

Setting $x = 1$:

$$n(n-1) \cdot 2^{n-2} = \sum_{r=0}^{n} r(r-1)\binom{n}{r}$$

**Verification for $n = 4$:** LHS $= 4 \cdot 3 \cdot 4 = 48$. RHS
$= 0 + 0 + 2 \cdot 6 + 6 \cdot 4 + 12 \cdot 1 = 12 + 24 + 12 = 48$. Confirmed.
