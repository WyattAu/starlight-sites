---
date: 2026-09-19T00:00:00.000Z
title: "Divisibility and the Euclidean Algorithm"
description: 'UNIVERSITY Mathematics notes: why the integers are built on divisibility, the Euclidean algorithm as the oldest nontrivial algorithm, Bézout''s identity as the key structural theorem, and why it all matters for cryptography.'
tags:
  - Mathematics
  - University
categories:
  - Mathematics
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "7 Number Theory", "url": "https://mathematics.wyattau.com/7-number-theory"}, {"name": "Divisibility and the Euclidean Algorithm", "url": "https://mathematics.wyattau.com/7-number-theory/divisibility-and-euclidean-algorithm"}]
}
</script>

## Divisibility and the Euclidean Algorithm

### 0. Why This Page Exists

Every HTTPS connection you make begins with a division step. When your browser verifies a
certificate, it computes $\gcd(a, b)$ for 600-digit numbers using the same algorithm Euclid
wrote down around 300 BCE. When a computer algebra system simplifies a fraction, it uses the
same algorithm. When a number theorist proves that $\sqrt{2}$ is irrational, the proof goes
through the same lemma.

The reason this one idea recurs across 2,300 years of mathematics, from geometry to public-key
cryptography, is that the Euclidean algorithm is not just a method for computing a greatest
common divisor. It is the theorem that reveals the **structure** of the integers: that every
ideal is principal, that primes are irreducible, that unique factorisation holds. These are not
obvious properties of $\mathbb{Z}$ — they fail in other rings — and the proof that they hold
goes through Bézout's identity, which goes through the Euclidean algorithm.

This page builds that chain from the ground up, the way Aluffi builds ring theory: by
constructing the tools you'll need later and understanding *why* they work, not just verifying
that they do.

### 0.1 The Problem That Starts Everything

Here is a concrete question that has nothing to do with number theory at first glance.

> You have two audio files of lengths 252 and 198 seconds. You want to cut both into identical
> segments of maximum length so that nothing is wasted. How long should each segment be?

If you think about this for a moment, you realise you need the largest integer that divides both
252 and 198. That is $\gcd(252, 198)$. But *how do you find it?* You could try every integer
from 198 down to 1 — but for 600-digit numbers, that's not just slow, it's longer than the age
of the universe.

The answer — the idea that makes the computation feasible — is the Euclidean algorithm. And the
reason the Euclidean algorithm works is a property of the integers that most people never think
to question: the **division algorithm**. This page builds from the division algorithm to Bézout's
identity to the extended Euclidean algorithm, and each step earns the next.

> **Exercise 0.1.** Before reading further, try to find $\gcd(252, 198)$ by listing all divisors
> of each number. Then notice how much faster the method on this page will be.

### 0.2 Why Divisibility Is Not Obvious

The integers are the first number system where a question like "does $a$ divide $b$?" is
interesting. In $\mathbb{Q}$ or $\mathbb{R}$, every nonzero number divides every other number
($b = a \cdot \frac{b}{a}$), so divisibility is trivial. The integers are special because
division is **restricted**: the quotient must also be an integer.

This restriction is what creates structure — and what makes number theory rich.

**Definition.** For integers $a$ and $b$ with $a \neq 0$, we say $a$ **divides** $b$, written
$a \mid b$, if there exists an integer $k$ such that $b = ak$.

**Exercise 0.2.** Show that $a \mid 0$ for every $a \neq 0$, and that $0 \mid b$ only for
$b = 0$.

The definition is simple, but the consequences are not. The most important one:

**Proposition (Linearity of Divisibility).** If $a \mid b$ and $a \mid c$, then $a \mid (bx + cy)$
for all integers $x, y$.

*Proof.* $b = am$ and $c = an$ for some integers $m, n$. Then
$bx + cy = a(mx + ny)$, so $a$ divides the result. $\blacksquare$

This "linearity" is what makes divisibility proofs work: to show $n \mid f(n) - g(n)$, show
$n$ divides each term separately.

> **Exercise 0.3.** Show that if $n \mid a - b$ and $n \mid c - d$, then $n \mid ac - bd$.
> *Hint:* add and subtract $bc$.

This exercise is not busywork — the result is exactly what makes modular arithmetic
well-defined, and it is the proof you'll need in
[Congruences](/7-number-theory/3_congruences/).

### 0.3 The Division Algorithm: More Than Long Division

Every schoolchild knows how to divide 252 by 198: the quotient is 1 and the remainder is 54.
What most never question is that the answer is **unique** — that you couldn't also get quotient 2
with remainder −144. The uniqueness is what makes the algorithm deterministic and the concept of
"remainder" well-defined.

**Theorem (Division Algorithm).** For integers $a$ and $b$ with $b > 0$, there exist **unique**
integers $q$ (quotient) and $r$ (remainder) such that

$$a = bq + r, \qquad 0 \leq r < b.$$

*Proof of existence.* The set $\{bq \leq a : q \in \mathbb{Z}\}$ is non-empty (take $q$
sufficiently negative) and bounded above by $a/b$. Let $q$ be its supremum, which is an integer
by the Archimedean property. Set $r = a - bq \geq 0$. If $r \geq b$, then $a - b(q + 1) \geq 0$,
contradicting the maximality of $q$. $\blacksquare$

*Proof of uniqueness.* Suppose $a = bq_1 + r_1 = bq_2 + r_2$ with both remainders in $[0, b)$.
Then $b(q_1 - q_2) = r_2 - r_1$. Since $|r_2 - r_1| < b$, we need $q_1 = q_2$ and $r_2 = r_1$.
$\blacksquare$

The uniqueness proof is worth understanding deeply. It works because the interval $[0, b)$ is
*strictly smaller* than the spacing between consecutive multiples of $b$. If you widened the
interval to $[0, b]$, two quotients could work. This is not pedantry — in $\mathbb{Z}[i]$ (Gaussian
integers), the "remainder" is measured by a norm, and the norm function does not always decrease
the way $\mathbb{Z}$'s does. When it does decrease, the ring has unique factorisation (like
$\mathbb{Z}[i]$); when it doesn't, it doesn't (like $\mathbb{Z}[\sqrt{-5}]$). The division
algorithm is not just a computational tool — it is the property that makes the entire edifice of
arithmetic stand.

> **Exercise 0.4.** Prove the division algorithm for $b < 0$ by reducing to the case $b > 0$.
> What changes in the inequality $0 \leq r < |b|$?

> **Exercise 0.5.** Show that for any integer $a$, $a^2 - a$ is divisible by 3.
> *Hint:* $a \equiv 0, 1, \text{ or } 2 \pmod 3$ — but you can also prove it by factoring
> $a^2 - a = a(a - 1)$ and checking two consecutive integers.

### 0.4 The Greatest Common Divisor: Definition and Existence

**Definition.** For integers $a, b$ not both zero, $\gcd(a, b)$ is the largest positive integer
dividing both.

**Why this definition works.** You might worry: how do we *know* there's a largest common divisor?
The set of common divisors is finite (all bounded by $\max(|a|, |b|)$), so a maximum exists by the
well-ordering of $\mathbb{Z}_{\geq 0}$. This is one of those cases where the structure of
$\mathbb{Z}_{\geq 0}$ (every non-empty subset has a least element) does the heavy lifting.

**Theorem (Bézout's Identity).** $\gcd(a, b)$ is the **smallest positive** integer in the set

$$S = \{ax + by : x, y \in \mathbb{Z}\}.$$

In particular, there exist integers $x, y$ with $ax + by = \gcd(a, b)$.

This is the first genuinely structural theorem in number theory, and the proof technique
(well-ordering of a non-empty set of positive integers) is the single most important proof method
in the subject. Let's look at it carefully.

*Proof.* $S$ is non-empty (if $a \neq 0$, take $x = \operatorname{sign}(a)$, $y = 0$). By the
well-ordering principle, $S$ has a least element $d = ax_0 + by_0 > 0$. We show $d = \gcd(a, b)$
in two steps.

**Step 1: $d \mid a$ and $d \mid b$.** Divide $a$ by $d$: $a = dq + r$ with $0 \leq r < d$. Then

$$
r = a - qd = a - q(ax_0 + by_0) = a(1 - qx_0) + b(-qy_0) \in S.
$$

But $0 \leq r < d$ contradicts the minimality of $d$ unless $r = 0$. So $d \mid a$. Similarly
$d \mid b$.

**Step 2: $d$ is the greatest common divisor.** If $c \mid a$ and $c \mid b$, then $c \mid d$
(because $d = ax_0 + by_0$ is a linear combination). So $c \leq d$. $\blacksquare$

**Why this proof matters.** Look at Step 1 again. The key move is that the *remainder* $r$ is
itself an element of $S$ — because $S$ is closed under subtraction of elements of the form $ax +
by$. This is exactly the argument that shows every ideal of $\mathbb{Z}$ is principal, and it is
the proof template for Bézout domains in ring theory. The Euclidean algorithm doesn't just compute
a gcd — it proves a structural theorem about the integers.

> **Exercise 0.6.** Find $\gcd(12, 42)$ and Bézout coefficients. Then find *all* solutions to
> $12x + 42y = 6$.
> *Answer:* $\gcd = 6$; $12(-3) + 42(1) = 6$; all solutions are $x = -3 + 7t$, $y = 1 - 2t$.

> **Exercise 0.7.** Show that $\gcd(a, b) = \gcd(a, b - a) = \gcd(a, a + b)$.
> *Why this matters:* this is the mathematical basis of the subtraction-based Euclidean algorithm
> that Euclid actually wrote down (Elements, Book VII, Propositions 1–2).

**A consequence you'll need later.** $\gcd(a, b) = 1$ (coprimality) is equivalent to the
existence of $x, y$ with $ax + by = 1$. This is the definition of a **unimodular row**, and it is
the reason modular inverses exist (when $\gcd(a, n) = 1$, the inverse of $a$ mod $n$ is the
Bézout coefficient $x$). See [Congruences](/7-number-theory/3_congruences/).

**Euclid's lemma** falls out immediately: if $a \mid bc$ and $\gcd(a, b) = 1$, write
$1 = ax + by$, multiply by $c$: $c = acx + bcy$. Since $a \mid acx$ and $a \mid bcy$ (because
$a \mid bc$), we get $a \mid c$. This is *the* key step in proving unique factorisation — and it
fails in $\mathbb{Z}[\sqrt{-5}]$ precisely because Bézout fails there, which is why unique
factorisation fails there.

### 0.5 The Euclidean Algorithm

The division algorithm says: $a = bq + r$. The crucial observation is that

$$
\gcd(a, b) = \gcd(b, r).
$$

Why? Any common divisor of $a$ and $b$ divides $r = a - bq$ (by linearity of divisibility). Any
common divisor of $b$ and $r$ divides $a = bq + r$ (same reason). So the two pairs have exactly
the same set of common divisors, hence the same greatest common divisor.

This means we can replace the pair $(a, b)$ by the *smaller* pair $(b, r)$ with the same gcd —
and iterate:

$$
(a, b) \to (b, r_1) \to (r_1, r_2) \to (r_2, r_3) \to \cdots
$$

The remainders satisfy $r_1 > r_2 > r_3 > \cdots \geq 0$, so the sequence must terminate. When
it terminates, the last non-zero remainder is $\gcd(a, b)$.

**Worked example.** $\gcd(252, 198)$:

| Step | Equation | Observation |
| ---- | -------- | ----------- |
| 1 | $252 = 198 \cdot 1 + 54$ | $\gcd(252, 198) = \gcd(198, 54)$ |
| 2 | $198 = 54 \cdot 3 + 36$ | $\gcd(198, 54) = \gcd(54, 36)$ |
| 3 | $54 = 36 \cdot 1 + 18$ | $\gcd(54, 36) = \gcd(36, 18)$ |
| 4 | $36 = 18 \cdot 2 + 0$ | $\gcd(36, 18) = \gcd(18, 0) = 18$ |

Answer: $\gcd(252, 198) = 18$.

### 0.6 The Extended Euclidean Algorithm

Back-substitute through the table to express the gcd as a linear combination:

$$
\begin{aligned}
18 &= 36 - 18 \cdot 1 \\
   &= 36 - (54 - 36 \cdot 1) \cdot 1 = 36 \cdot 2 - 54 \\
   &= (198 - 54 \cdot 3) \cdot 2 - 54 = 198 \cdot 2 - 54 \cdot 7 \\
   &= 198 \cdot 2 - (252 - 198) \cdot 7 = 252 \cdot (-7) + 198 \cdot 9.
\end{aligned}
$$

So $252(-7) + 198(9) = 18$: Bézout coefficients $x = -7$, $y = 9$.

This back-substitution is mechanical and tedious. The extended Euclidean algorithm automates it
by maintaining the coefficients alongside the remainders — and this is what you actually
implement when computing modular inverses for RSA decryption.

**The connection to cryptography.** To find the decryption exponent $d$ in RSA, you compute the
inverse of $e$ modulo $\varphi(n)$ — which is exactly the extended Euclidean algorithm applied to
$(e, \varphi(n))$. The 2,300-year-old algorithm is running in every TLS handshake.

### 0.7 What Can Go Wrong

| Pitfall | Why it happens | Fix |
| ------- | -------------- | --- |
| Negative remainder from division algorithm | Adjusting $q$ the wrong way for negative $a$ | Use $r = ((a \bmod b) + b) \bmod b$ |
| $\gcd(0, 0)$ | No largest common divisor exists | Define $\gcd(0,0) = 0$ by convention, or don't call the function |
| Bézout coefficients not unique | $(x + tb, y - ta)$ also works for all $t \in \mathbb{Z}$ | Report one pair; the exam wants *a* pair |
| Cancelling $c$ from $ac \equiv bc$ | $\gcd(c, n) \neq 1$ | Only cancel when $c$ is invertible mod $n$ |

### 0.8 Summary: The Chain of Reasoning

$$
\begin{array}{ccc}
\text{Division Algorithm} & \Longrightarrow & \text{Euclidean Algorithm terminates} \\
& \Longrightarrow & \gcd(a,b) = \gcd(b, a \bmod b) \\
& \Longrightarrow & \text{Bézout: } \gcd(a,b) = ax + by \\
& \Longrightarrow & \text{Euclid's lemma: } a \mid bc, \gcd(a,b)=1 \Rightarrow a \mid c \\
& \Longrightarrow & \text{Unique factorisation (next page)}
\end{array}
$$

Each step uses the previous one. The division algorithm is the foundation; unique factorisation is
the skyscraper. The next page builds the tower.

## See Also

- [Congruences](/7-number-theory/3_congruences/) — the division algorithm gives you residue
  classes; the next page builds arithmetic on them
- [Primes and the FTA](/7-number-theory/2_primes-and-the-fundamental-theorem-of-arithmetic/) —
  Euclid's lemma is the key to unique factorisation
- [Number Theory and Cryptography](/7-number-theory/12_number-theory-and-cryptography/) — where
  the extended Euclidean algorithm meets RSA key generation
