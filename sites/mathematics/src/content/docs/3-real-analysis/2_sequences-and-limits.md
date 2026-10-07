---
date: 2026-07-23T21:57:32+01:00
title: "Sequences and Limits"
description: "Sequences and limits in real analysis: the epsilon–N definition and why it has that shape, uniqueness, the algebra of limits, the monotone convergence theorem, Cauchy sequences and Bolzano–Weierstrass — with worked examples, counterexamples and recall prompts. Tier U."
tags:
  - Mathematics
  - University
  - Real Analysis
categories:
  - Mathematics
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "3 Real Analysis", "url": "https://mathematics.wyattau.com/3-real-analysis"}, {"name": "Sequences and Limits", "url": "https://mathematics.wyattau.com/3-real-analysis/sequences-and-limits"}]
}
</script>

## Sequences and Limits

**Tier: U (Undergraduate).** Builds on [The Real Number
System](/3-real-analysis/1_the-real-number-system/). Everything later —
continuity, differentiability, integration, and the whole of measure theory —
is built by changing the words in this page's definitions while keeping the
skeleton.

## Recall prompts

Attempt these from memory *before* reading. Getting them wrong is the point:
the failure is what makes the rest stick.

- Define what it means for $a_n \to L$, using only quantifiers.
- Why is the limit unique?
- Is every convergent sequence bounded? Is every bounded sequence convergent?
- What is a Cauchy sequence, and does every Cauchy sequence in $\mathbb{Q}$
  converge?
- State Bolzano–Weierstrass.

Check your answers against the text. Every one you missed is a section to read
twice.

## Motivation: why this definition and not another one

" $a_n$ gets close to $L$" is not mathematics, because *close* is not a number.
The first attempt is: for every $\varepsilon > 0$, $|a_n - L| < \varepsilon$. But
that is false for every sequence — $|a_n - L|$ is never exactly zero, so it is
less than $\varepsilon$ only *eventually*.

That "eventually" is the whole idea. The definition says the terms get and stay
arbitrarily close, and it does so by making you, the prover, supply an $N$ for
each $\varepsilon$ your adversary hands you. The adversary picks a tolerance;
you must meet it.

**Worked example 1 (the adversary, played honestly).** Show $a_n = 1/n \to 0$.

*Step 1.* The adversary names $\varepsilon > 0$.

*Step 2.* We must find $N$ with $|1/n - 0| < \varepsilon$ for $n \ge N$. Since
$|1/n| = 1/n$, we need $1/n < \varepsilon$, i.e. $n > 1/\varepsilon$.

*Step 3.* Choose $N = \lceil 1/\varepsilon \rceil + 1$. Then $n \ge N$ gives
$n > 1/\varepsilon$, so $|1/n| < \varepsilon$. $\blacksquare$

**Worked example 2 (the same three steps, harder algebra).** Show $a_n = \frac{3n^2 + 2}{n^2 + 1} \to 3$.

*Step 1.* Adversary gives $\varepsilon > 0$.

*Step 2.* Bound the error without solving exactly:

$$
\left|\frac{3n^2+2}{n^2+1} - 3\right| = \left|\frac{2 - 3}{n^2+1}\right| = \frac{1}{n^2+1} < \frac{1}{n^2} \le \frac{1}{n}.
$$

*Step 3.* Choose $N = \lceil 1/\varepsilon \rceil + 1$. $\blacksquare$

Notice the technique: we did **not** solve $1/(n^2+1) < \varepsilon$ exactly. We
overestimated and then solved the easier bound. An overestimate is fine — the
definition only asks you to make the error small, not to make it small
optimally.

**Completion problem.** Show $a_n = \frac{\sin n}{n} \to 0$ by filling in the
missing step: $|\sin n / n| \le \_\_\_$, so choose $N = \_\_\_$.

## The definition, and what each part is for

**Definition (F).** A sequence $(a_n)$ **converges** to $L \in \mathbb{R}$ if
for every $\varepsilon > 0$ there exists $N \in \mathbb{N}$ such that

$$
|a_n - L| < \varepsilon \quad \text{for all } n \ge N.
$$

We write $a_n \to L$. A sequence that does not converge **diverges**.

Each clause earns its place:

- **for every $\varepsilon > 0$** — arbitrarily close, not just close. Delete it
  and $a_n = 1/n$ "converges" to $0.1$.
- **there exists $N$** — the $\varepsilon$ is allowed to depend on nothing; the
  $N$ may depend on $\varepsilon$. Swapping those quantifiers defines a
  different (and stronger) statement.
- **for all $n \ge N$** — *stays* close. Delete it and $a_n = n + (-1)^n$
  "converges" infinitely often.
- **$|a_n - L| < \varepsilon$** — the metric. Replacing this is how analysis is
  generalised: to $\mathbb{R}^k$ (Euclidean distance), to functions (sup norm),
  and to measure theory (convergence in measure).

## Uniqueness, and boundedness

**Proposition 2.1 (Uniqueness of Limits).** If $(a_n)$ converges, its limit is
unique.

*Proof.* Suppose $a_n \to L$ and $a_n \to M$ with $L \ne M$. Let $\varepsilon =
|L - M|/2 > 0$. There is $N_1$ with $|a_n - L| < \varepsilon$ for $n \ge N_1$,
and $N_2$ with $|a_n - M| < \varepsilon$ for $n \ge N_2$. For $n \ge \max(N_1,
N_2)$,

$$
|L - M| \le |a_n - L| + |a_n - M| < 2\varepsilon = |L - M|,
$$

a contradiction. $\blacksquare$

**The key idea.** Two distinct numbers are separated by a fixed gap, and a
convergent sequence is eventually inside *any* gap around its limit. It cannot
be inside two disjoint gaps at once. This "two balls around distinct points are
disjoint" move is the reason uniqueness holds in every metric space, and it is
the reason it fails when the topology is not Hausdorff.

**Proposition 2.2.** Every convergent sequence is bounded.

*Proof.* Taking $\varepsilon = 1$ there is $N$ with $|a_n - L| < 1$ for $n \ge
N$, so $|a_n| \le |L| + 1$ for $n \ge N$. Let $M = \max\{|a_1|, \dots,
|a_{N-1}|, |L| + 1\}$. $\blacksquare$

**Counterexample.** $a_n = n$ is unbounded and diverges — so boundedness is
*implied by* convergence. The converse is false: $a_n = (-1)^n$ is bounded and
diverges, since the subsequences $a_{2k} = 1$ and $a_{2k+1} = -1$ converge to
different limits.

## The convergence theorems

**Theorem 2.1 (Algebra of Limits).** If $a_n \to L$ and $b_n \to M$ then

1. $a_n + b_n \to L + M$
2. $a_n b_n \to LM$
3. $a_n / b_n \to L/M$, provided $M \ne 0$ and $b_n \ne 0$ for all $n$.

**Theorem 2.2 (Squeeze Theorem).** If $a_n \le b_n \le c_n$ eventually and
$a_n \to L$, $c_n \to L$, then $b_n \to L$.

The squeeze theorem is the working analyst's favourite tool: it converts a hard
estimate into an easy one by sandwiching the unknown between two known limits.
Worked example 2 above used exactly this idea.

**Theorem 2.3 (Monotone Convergence Theorem).** Every bounded monotone sequence
in $\mathbb{R}$ converges — to its supremum if increasing, its infimum if
decreasing.

*Proof.* Let $(a_n)$ be bounded and increasing. By completeness,
$s = \sup\{a_n\}$ exists. Given $\varepsilon > 0$, the approximation property
gives $N$ with $s - \varepsilon < a_N \le s$. Since $(a_n)$ increases,
$a_n \ge a_N > s - \varepsilon$ for $n \ge N$, while $a_n \le s$ throughout.
So $|a_n - s| < \varepsilon$. $\blacksquare$

**Why this theorem is the most important on the page.** Its proof uses
*completeness* — the existence of suprema — and nothing else. That is the
property separating $\mathbb{R}$ from $\mathbb{Q}$, and it is the engine behind
every existence theorem in analysis: the intermediate value theorem, the
extreme value theorem, Riemann integrability, and the convergence of Fourier
series all trace back to it.

**Counterexample.** In $\mathbb{Q}$, the sequence $a_n = (1 + 1/n)^n$ is
increasing and bounded above (by 3, say), but its limit is $e \notin
\mathbb{Q}$. Bounded and monotone, yet not convergent. Completeness is exactly
what was missing.

## Cauchy sequences

**Definition.** $(a_n)$ is **Cauchy** if for every $\varepsilon > 0$ there
exists $N$ such that $|a_n - a_m| < \varepsilon$ for all $m, n \ge N$.

The definition replaces "close to a limit" with "close to each other" — a
statement you can verify *without knowing the limit*. That is what makes it
useful for proving things exist.

**Theorem 2.4.** Every convergent sequence is Cauchy.

*Proof.* Given $\varepsilon > 0$, choose $N$ with $|a_n - L| < \varepsilon/2$
for $n \ge N$. Then for $m, n \ge N$,
$|a_n - a_m| \le |a_n - L| + |a_m - L| < \varepsilon$. $\blacksquare$

**Theorem 2.5 (Cauchy Completeness of $\mathbb{R}$).** Every Cauchy sequence in
$\mathbb{R}$ converges.

*Proof.* A Cauchy sequence is bounded, so by Bolzano–Weierstrass it has a
convergent subsequence $a_{n_k} \to L$. Given $\varepsilon > 0$, choose $N_1$
with $|a_n - a_m| < \varepsilon/2$ for $m,n \ge N_1$, and $K$ with
$|a_{n_k} - L| < \varepsilon/2$ for $k \ge K$. For $n \ge N_1$ pick $k \ge K$
with $n_k \ge N_1$. Then

$$
|a_n - L| \le |a_n - a_{n_k}| + |a_{n_k} - L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon.
\qquad \blacksquare
$$

**Why this matters.** A space in which Cauchy sequences converge is called
*complete*. Completeness of $\mathbb{R}$ is what makes Newton's method, fixed
point iteration, power series and the fundamental theorem of calculus work. In
functional analysis the same property defines a Banach space, and in that
setting Picard iteration gives existence and uniqueness of solutions to ODEs.

## Subsequences and Bolzano–Weierstrass

A **subsequence** of $(a_n)$ is $(a_{n_k})$ with $n_1 < n_2 < \cdots$.

**Proposition 2.3.** If $a_n \to L$ then every subsequence $a_{n_k} \to L$.

**Proposition 2.4.** If $(a_n)$ has two subsequences converging to different
limits, then $(a_n)$ diverges.

**Theorem 2.6 (Bolzano–Weierstrass).** Every bounded sequence in $\mathbb{R}$
has a convergent subsequence.

The proof idea is a *bisection argument*: split a bounded interval in half, at
least one half contains infinitely many terms, keep that half, and repeat. The
midpoints converge; choosing one term from each nested interval gives a
convergent subsequence. Bolzano–Weierstrass is used to prove Theorem 2.5, and
it is the reason every continuous function on a closed bounded interval is
bounded and attains its bounds.

## Counterexamples worth knowing by name

| Sequence | Bounded? | Monotone? | Cauchy? | Convergent? |
| -------- | -------- | --------- | ------- | ----------- |
| $a_n = (-1)^n$ | yes | no | no | no |
| $a_n = 1/n$ | yes | yes | yes | yes |
| $a_n = n$ | no | yes | no | no |
| $a_n = (1+1/n)^n$ in $\mathbb{Q}$ | yes | yes | yes | **no** |
| $a_n = \sin n$ | yes | no | no | no |

The fourth row is the one to remember. It is a sequence of rationals, Cauchy in
$\mathbb{Q}$, with no rational limit — and it is the reason $\mathbb{R}$ has to
be constructed as a completion rather than assumed.

## Common pitfalls

| Pitfall | Why it happens | Fix |
| ------- | -------------- | --- |
| "Converges to $\varepsilon$" | Reading $\varepsilon$ as a target | $\varepsilon$ is the tolerance, chosen by the adversary; $N$ is yours |
| Solving the inequality exactly | Believing the bound must be tight | Any overestimate that tends to 0 is fine |
| Writing "$N$ depends on $n$" | Quantifier swap | $N$ may depend on $\varepsilon$, never on $n$ |
| $|a_n - L| < \varepsilon$ for some $n$ | Forgetting "for all $n \ge N$" | The closeness must persist |
| Assuming bounded implies convergent | $(-1)^n$ is the counterexample | Bounded + monotone is the theorem |

## Interleaving problems

Mix these with problems from [The Real Number
System](/3-real-analysis/1_the-real-number-system/) and [Series](/3-real-analysis/3_series/)
— deciding *which* tool to use is the part blocked practice never trains.

1. Show $a_n = \sqrt{n^2 + n} - n \to \tfrac12$, by rationalising and then
   bounding.
2. Show that if $a_n > 0$ and $a_{n+1}/a_n \to L < 1$ then $a_n \to 0$.
   *(Hint: compare with a geometric sequence — this is the ratio test in
   disguise.)*
3. Show a sequence with $|a_{n+1} - a_n| \le 2^{-n}$ is Cauchy, and deduce it
   converges. *(This is how most existence proofs in analysis actually run.)*
4. Give a sequence $(a_n)$ with no convergent subsequence. What property of
   $\mathbb{R}$ did you use?
5. Show that if every subsequence of $(a_n)$ has a further subsequence
   converging to $L$, then $a_n \to L$. *(This "subsequence of subsequence"
   argument is used constantly in probability.)*

## See Also

- [The Real Number System](/3-real-analysis/1_the-real-number-system/) —
  completeness, the engine behind this page
- [Series](/3-real-analysis/3_series/) — sequences of partial sums
- [Continuity](/3-real-analysis/4_continuity/) — the same definition, one
  abstraction up
- [Measure Theory](/10-measure-theory/1_sigma-algebras-and-measurable-spaces/)
  — where convergence gets harder and more useful
- [How to Use These Notes](/how-to-use/) — the method, and why recall prompts
  come first
