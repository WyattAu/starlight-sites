---
title: Problem Set
tags:
  - Mathematics
  - University
description: ""(x) = g'(x)$ for all $x \in (a, b)$Then $f(x) = g(x) + C$ for some
Constant $C$.

<details>
<summary>Solution</summary>

_Solution._ Let $h(x) = f(x) - g(x)$. Then $h'(x) = f'(x) - g'(x) = 0$ for all $x \in (a, b)$. By
Corollary 5.4 (a consequence of the Mean Value Theorem), $h$ is constant on $(a, b)$. So
$f(x) - g(x) = C$ for some $C \in \mathbb{R}$I.e., $f(x) = g(x) + C$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.3 (Mean Value Theorem, Corollary 5.4).

</details>

**Problem 13.** Use Taylor's theorem with remainder to bound the error in approximating $e^{0.2}$
Using the fourth-degree Maclaurin polynomial.

<details>
<summary>Solution</summary>

_Solution._ The fourth-degree Maclaurin polynomial of $e^x$ is:

$$T_4(x) = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24}$$

By Taylor's theorem, $R_4(x) = \frac{e^{\xi}}{5!} x^5$ for some $\xi$ between $0$ and $x$. For
$x = 0.2$: $\xi \in (0, 0.2)$So $e^{\xi} \lt e^{0.2} \lt e^{1/4} \lt 1.3$.

$$|R_4(0.2)| = \frac{e^{\xi}}{120} (0.2)^5 \lt \frac{1.3}{120} \cdot 0.00032 = \frac{1.3 \times 0.00032}{120} \approx 3.47 \times 10^{-6}$$

So $T_4(0.2) = 1 + 0.2 + 0.02 + 0.001333 + 0.000067 = 1.221400$ approximates $e^{0.2}$ with Error
less than $3.5 \times 10^{-6}$. $\blacksquare$

_If you get this wrong, revise:_ Section 5.4 (Taylor's Theorem), Section 5.7 (Worked Examples).

</details>

**Problem 14.** Compute $\int_0^1 x^3\, dx$ from the definition using upper and lower Riemann sums.

<details>
<summary>Solution</summary>

_Solution._ Let $P_n = \{0, 1/n, 2/n, \ldots, 1\}$. On $[(i-1)/n, i/n]$, $f(x) = x^3$ has
$M_i = (i/n)^3$ and $m_i = ((i-1)/n)^3$.

$$U(f, P_n) = \sum_{i=1}^{n} \frac{i^3}{n^3} \cdot \frac{1}{n} = \frac{1}{n^4} \sum_{i=1}^{n} i^3 = \frac{1}{n^4} \cdot \frac{n^2(n+1)^2}{4}$$

As $n \to \infty$:

$$\lim_{n \to \infty} U(f, P_n) = \lim_{n \to \infty} \frac{(n+1)^2}{4n^2} = \frac{1}{4}$$

Similarly, $L(f, P_n) \to 1/4$. So $\int_0^1 x^3\, dx = 1/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.1 (Definition), Section 6.5 (Worked Examples).

</details>

**Problem 14b.** Show that the Dirichlet function
$f(x) = \begin{cases} 1 & x \in \mathbb{Q} \\ 0 & x \notin \mathbb{Q} \end{cases}$ is not Riemann
integrable on $[0, 1]$.

<details>
<summary>Solution</summary>

_Solution._ Every non-empty subinterval $[x_{i-1}, x_i]$ of any partition contains both rational and
Irrational numbers (by density of $\mathbb{Q}$ and density of $\mathbb{R} \setminus \mathbb{Q}$). So
$M_i = \sup f = 1$ and $m_i = \inf f = 0$ for every subinterval.

For any partition $P$: $U(f, P) = \sum 1 \cdot \Delta x_i = 1$ and
$L(f, P) = \sum 0 \cdot \Delta x_i = 0$. Hence
$\overline{\int_0^1} f = 1 \neq 0 = \underline{\int_0^1} f$So $f$ is not Riemann integrable.

This also follows from Lebesgue's criterion: $f$ is discontinuous everywhere, and $[0,1]$ does not
Have measure zero. $\blacksquare$

_If you get this wrong, revise:_ Section 6.2 (Integrability Criteria), Theorem 6.4b.

</details>

**Problem 15.** Evaluate $\int_0^1 \frac{x}{\sqrt{1 - x^2}}\, dx$ as an improper integral.

<details>
<summary>Solution</summary>

_Solution._ The integrand $f(x) = x/\sqrt{1 - x^2}$ is unbounded as $x \to 1^-$. This is a Type II
Improper integral.

$$\int_0^1 \frac{x}{\sqrt{1 - x^2}}\, dx = \lim_{b \to 1^-} \int_0^b \frac{x}{\sqrt{1 - x^2}}\, dx$$

Compute via substitution $u = 1 - x^2$, $du = -2x\, dx$:

$$= \lim_{b \to 1^-} \left[-\sqrt{1 - x^2}\right]_0^b = \lim_{b \to 1^-} \left(-\sqrt{1 - b^2} + 1\right) = 0 + 1 = 1$$

The improper integral converges to $1$. $\blacksquare$

_If you get this wrong, revise:_ Section 6.6 (Improper Integrals).

</details>

**Problem 16.** Let $f_n(x) = \frac{nx}{1 + n^2 x^2}$ on $(0, \infty)$. Find the pointwise limit and
Determine whether the convergence is uniform on $(0, \infty)$.

<details>
<summary>Solution</summary>

_Solution._ **Pointwise limit:** For fixed $x > 0$:
$\lim_{n \to \infty} f_n(x) = \lim_{n \to \infty} \frac{nx}{1 + n^2 x^2} = \lim_{n \to \infty} \frac{x/n}{1/n^2 + x^2} = 0$.

So $f_n \to 0$ pointwise on $(0, \infty)$.

**Uniform convergence?** We check $\sup_{x > 0} |f_n(x) - 0| = \sup_{x > 0} \frac{nx}{1 + n^2 x^2}$.
To maximize, differentiate with respect to $x$ (treating $n$ as fixed):

$$\frac{d}{dx}\left(\frac{nx}{1 + n^2 x^2}\right) = \frac{n(1 + n^2 x^2) - nx \cdot 2n^2 x}{(1 + n^2 x^2)^2} = \frac{n - n^3 x^2}{(1 + n^2 x^2)^2}$$

Setting to zero: $n - n^3 x^2 = 0$So $x = 1/n$. The maximum value is
$f_n(1/n) = \frac{n \cdot 1/n}{1 + n^2/n^2} = \frac{1}{2}$.

Since $\sup_{x > 0} |f_n(x)| = 1/2$ for all $n$This does not tend to $0$. Therefore the convergence
Is **not uniform** on $(0, \infty)$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence), Section 7.1 (Pointwise
Convergence).

</details>

**Problem 17.** Find the radius of convergence of $\sum_{n=1}^{\infty} \frac{(2n)!}{(n!)^2} x^n$.

<details>
<summary>Solution</summary>

_Solution._ Apply the ratio test to the terms:

$$\left|\frac{a_{n+1}}{a_n}\right| = \frac{(2(n+1))!}{((n+1)!)^2} \cdot \frac{(n!)^2}{(2n)!} \cdot |x| = \frac{(2n+2)(2n+1)}{(n+1)^2} \cdot |x|$$

$$= \frac{2(2n+1)}{n+1} \cdot |x| = \frac{4n + 2}{n + 1} \cdot |x| \to 4|x| \quad \mathrm{as\ } n \to \infty$$

The series converges when $4|x| \lt 1$I.e., $|x| \lt 1/4$And diverges when $4|x| > 1$. The radius of
convergence is $R = 1/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.7 (Power Series), Section 3.2 (Ratio Test).

</details>

**Problem 18.** Let $f_n(x) = x^n/n$ on $[0, 1]$. Show that $f_n \to 0$ uniformly, but
$f_n'(x) = x^{n-1}$ does not converge uniformly on $(0, 1)$.

<details>
<summary>Solution</summary>

_Solution._ **Uniform convergence of $f_n$:** $\sup_{x \in [0,1]} |x^n/n| = 1/n \to 0$ as
$n \to \infty$. So $f_n \to 0$ uniformly on $[0, 1]$.

**Non-uniform convergence of $f_n'$:** $f_n'(x) = x^{n-1}$. The pointwise limit is $g(x) = 0$ for
$0 \leq x \lt 1$ and $g(1) = 1$. So
$\sup_{x \in [0,1]} |f_n'(x) - g(x)| \geq |f_n'(1) - g(1)| = |1 - 1| = 0$.

Actually, check $\sup_{x \in [0,1)} |x^{n-1}| = 1$ (approached as $x \to 1^-$). But $g(x) = 0$ on
$[0, 1)$So $\sup_{x \in [0,1)} |x^{n-1} - 0| = 1$ for all $n$. This does not Tend to $0$So $f_n'$
does not converge uniformly on $[0, 1)$.

This illustrates that uniform convergence of functions does not imply uniform convergence of
Derivatives, which is why Theorem 7.4 requires the stronger hypothesis of uniform convergence of
$(f_n')$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence), Section 7.6 (Uniform Convergence
and Differentiation).

</details>

**Problem 19.** Let $f_n(x) = \frac{x}{1 + nx^2}$ on $[0, \infty)$. Find the pointwise limit and
determine Whether the convergence is uniform.

<details>
<summary>Solution</summary>

_Solution._ **Pointwise limit:** For $x = 0$: $f_n(0) = 0$ for all $n$. For $x > 0$:
$\lim_{n \to \infty} \frac{x}{1 + nx^2} = \lim_{n \to \infty} \frac{1}{1/x + nx} = 0$. So
$f_n \to 0$ pointwise.

**Uniform convergence on $[0, \infty)$?** We check $\sup_{x \geq 0} |f_n(x)|$. Differentiate:
$\frac{d}{dx}\left(\frac{x}{1 + nx^2}\right) = \frac{1 - nx^2}{(1 + nx^2)^2}$. Setting to zero:
$x = 1/\sqrt{n}$. The maximum value is
$f_n(1/\sqrt{n}) = \frac{1/\sqrt{n}}{1 + n/n} = \frac{1}{2\sqrt{n}}$.

Since $\sup_{x \geq 0} |f_n(x)| = \frac{1}{2\sqrt{n}} \to 0$ as $n \to \infty$The convergence **is**
Uniform on $[0, \infty)$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.2 (Uniform Convergence).

</details>

**Problem 20.** Prove that the series $\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} x^{2n+1}$ converges
uniformly on $[-1, 1]$ and identify its sum.

<details>
<summary>Solution</summary>

_Solution._ For $|x| \leq 1$: $\left|\frac{(-1)^n x^{2n+1}}{2n+1}\right| \leq \frac{1}{2n+1}$. The
series $\sum \frac{1}{2n+1}$ diverges (it dominates half the harmonic series), so the Weierstrass
M-test does not apply directly with these bounds.

However, by the alternating series test, the series converges pointwise for every $|x| \leq 1$
(since $\frac{|x|^{2n+1}}{2n+1}$ decreases to $0$ for $|x| \leq 1$). The sum is $\arctan x$ Which is
the Taylor series of $\arctan$ about $0$.

For uniform convergence, we use **Abel's test for uniform convergence of series**: if $\sum f_n(x)$
has uniformly bounded partial sums and $g_n(x)$ decreases uniformly to $0$Then $\sum f_n(x) g_n(x)$
converges uniformly. Here $f_n(x) = (-1)^n x^{2n+1}$ and $g_n(x) = 1/(2n+1)$ Is independent of $x$.

The partial sums
$\left|\sum_{k=0}^{n} (-1)^k x^{2k+1}\right| = \frac{|x| \cdot |1-(-x^2)^{n+1}|}{1+x^2} \leq \frac{2|x|}{1+x^2} \leq 1$
for $|x| \leq 1$ (geometric series with closed form). And $1/(2n+1) \to 0$ uniformly. By Abel's
test, the convergence is uniform on $[-1, 1]$.

Setting $x = 1$: $\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = \arctan 1 = \pi/4$. $\blacksquare$

_If you get this wrong, revise:_ Section 7.3 (Weierstrass M-Test), Section 7.7 (Power Series),
Abel's theorem.

</details>

## Common Pitfalls

- **Assuming every bounded set has a maximum.** A set can be bounded above without having a maximum;
  the supremum always exists but may not be a member of the set. **Fix:** The supremum $\sup(S)$ is
  the least upper bound; it equals the maximum only when $\sup(S) \in S$.
- **Misusing the $\varepsilon$-$\delta$ definition.** The order of quantifiers matters: "for every $\varepsilon > 0$, there exists $\delta > 0$" — $\delta$ depends on $\varepsilon$ and the point,
  not the other way around. **Fix:** In proofs, choose $\delta$ after $\varepsilon$ is given;
  $\delta$ depends on both $\varepsilon$ and $x_0$ (unless the function is uniformly continuous).
- **Confusing pointwise and uniform convergence.** Pointwise: $\delta$ may depend on $x$. Uniform:
  $\delta$ works for all $x$ simultaneously. **Fix:** Uniform convergence implies pointwise
  convergence but not conversely; the Weierstrass M-test gives a sufficient condition for uniform
  convergence.

## Worked Examples

### Example 1: Proving a limit using $\varepsilon$-$\delta$

**Problem.** Prove that $\lim_{x \to 2} (3x - 1) = 5$.

**Solution.** Let $\varepsilon > 0$ be given. We need $|3x - 1 - 5| < \varepsilon$, i.e.
$|3x - 6| < \varepsilon$, i.e. $3|x - 2| < \varepsilon$.

Choose $\delta = \varepsilon/3$. Then $|x - 2| < \delta$ implies
$3|x - 2| < 3 \cdot \varepsilon/3 = \varepsilon$.

Therefore $\lim_{x \to 2}(3x - 1) = 5$. $\blacksquare$

### Example 2: Supremum and infimum

**Problem.** Find $\sup$ and $\inf$ of the set $S = \{1/n : n \in \mathbb{N}\}$.

**Solution.** The elements are $1, 1/2, 1/3, \ldots$. The sequence decreases and approaches $0$.

$\sup(S) = 1 \in S$ (this is also the maximum). $\inf(S) = 0 \notin S$.

$\blacksquare$

## Summary

- $\mathbb{R}$ is a complete ordered field; the completeness axiom guarantees $\sup(S)$ exists for
  every non-empty bounded-above set.
- Supremum $\sup(S)$ is the least upper bound; it equals $\max(S)$ iff $\sup(S) \in S$.
- $\varepsilon$-$\delta$ definition: $\lim_{x \to a} f(x) = L$ iff for every $\varepsilon > 0$ there
  exists $\delta > 0$ such that $0 < |x-a| < \delta$ implies $|f(x) - L| < \varepsilon$.
- Uniform convergence preserves continuity, differentiability (under appropriate conditions), and
  integrability.

## Cross-References

| Topic                      | Site        | Link                                                                 |
| -------------------------- | ----------- | -------------------------------------------------------------------- |
| Real Analysis (Overview)   | WyattsNotes | [View](/docs/university/mathematics/real-analysis)                   |
| Complex Analysis           | WyattsNotes | [View](/docs/university/mathematics/complex-analysis)                |
| Multivariable Calculus     | WyattsNotes | [View](/docs/university/mathematics/multivariable-calculus)          |
| Differential Equations     | WyattsNotes | [View](/docs/university/mathematics/differential-equations)          |
| Real Analysis — MIT 18.100 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/) |

