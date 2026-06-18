---
title: Lebesgue Outer Measure and Caratheodory Extension
tags:
  - Mathematics
  - University
description: ""density points" where $A$ locally fills up most of the ball. This theorem is fundamental in geometric measure theory and has applications to differentiation of integrals.

### Common Pitfalls

1. **Confusing outer measure with measure.** The Lebesgue outer measure $m^*$ is defined on all subsets of $\mathbb{R}$, but it is not countably additive on all subsets. Only its restriction to $\mathcal{M}$ (the measurable sets) is a measure.

2. **Assuming all sets are measurable.** The Vitali construction shows that non-measurable sets exist (using the Axiom of Choice). In practice, all sets encountered in analysis are measurable.

3. **Forgetting the infimum in the definition.** The Lebesgue outer measure uses an infimum over all coverings, not a specific covering. Using a particular covering gives only an upper bound.

4. **Confusing Caratheodory measurability with Borel measurability.** Caratheodory measurability is defined using the outer measure splitting condition, while Borel measurability is defined using preimages of open sets. The two notions coincide for Lebesgue measure, but Caratheodory"s approach is more general.

5. **Ignoring the role of the Axiom of Choice.** The Vitali construction requires the Axiom of Choice to select representatives from equivalence classes. Without AC, it is consistent that all subsets of $\mathbb{R}$ are Lebesgue measurable.

### Worked Examples

**Example 3.11.** Compute $m^*((0, 1) \cup (2, 3))$.

*Solution.* The set $(0, 1) \cup (2, 3)$ is a disjoint union of two intervals. By countable subadditivity, $m^*((0, 1) \cup (2, 3)) \leq m^*((0, 1)) + m^*((2, 3)) = 1 + 1 = 2$. For the reverse inequality, any covering of $(0, 1) \cup (2, 3)$ must cover both intervals, and by disjointness, $\sum(b_n - a_n) \geq 1 + 1 = 2$. Thus $m^*((0, 1) \cup (2, 3)) = 2$.

**Example 3.12.** Show that the Cantor set $C$ has Lebesgue measure zero.

*Solution.* The Cantor set is constructed by removing middle thirds: $C = [0, 1] \setminus \bigcup_{n=1}^{\infty} U_n$ where $U_n$ is the union of $2^{n-1}$ intervals of length $3^{-n}$ each. Thus $m^*(C) \leq m^*([0, 1]) - \sum_{n=1}^{\infty} 2^{n-1} \cdot 3^{-n} = 1 - \frac{1/3}{1 - 2/3} = 1 - 1 = 0$. Since $m^*(C) \geq 0$, we have $m^*(C) = 0$.

**Example 3.13.** Prove that $m^*(A \cup B) = m^*(A) + m^*(B)$ when $d(A, B) > 0$.

*Solution.* When $d(A, B) = \inf\{|a - b| : a \in A, b \in B\} > 0$, there exist open sets $U \supseteq A$ and $V \supseteq B$ with $U \cap V = \varnothing$ (separation by open sets). Then $m^*(A \cup B) \leq m^*(U) + m^*(V)$ by subadditivity. For the reverse, any covering of $A \cup B$ can be split into coverings of $A$ and $B$ (using the separation), giving $m^*(A \cup B) \geq m^*(A) + m^*(B)$.

**Example 3.14.** The Lebesgue measure is translation invariant.

*Proof.* For any $A \subseteq \mathbb{R}$ and $t \in \mathbb{R}$, we have $m^*(A + t) = \inf\{\sum(b_n - a_n) : A + t \subseteq \bigcup(a_n, b_n)\}$. Substituting $u_n = a_n - t$, $v_n = b_n - t$, we get $m^*(A + t) = \inf\{\sum(v_n - u_n) : A \subseteq \bigcup(u_n, v_n)\} = m^*(A)$.

### Connections to Integration

The Caratheodory extension theorem is the foundation for Lebesgue integration theory:

1. **Measurable functions:** A function $f: \mathbb{R} \to \mathbb{R}$ is Lebesgue measurable if $f^{-1}((a, \infty)) \in \mathcal{M}$ for all $a \in \mathbb{R}$.

2. **Simple functions:** Approximate measurable functions by step functions $\phi = \sum_{i=1}^{n} a_i \chi_{A_i}$ where $A_i \in \mathcal{M}$.

3. **Lebesgue integral:** $\int f \, dm = \sup\{\int \phi \, dm : 0 \leq \phi \leq f, \phi \text{ simple}\}$.

4. **Monotone convergence theorem:** If $0 \leq f_n \uparrow f$ pointwise, then $\int f_n \, dm \uparrow \int f \, dm$.

5. **Dominated convergence theorem:** If $f_n \to f$ pointwise and $|f_n| \leq g$ with $\int g \, dm < \infty$, then $\int f_n \, dm \to \int f \, dm$.

### Extensions and Generalisations

The Caratheodory construction can be applied to any outer measure on any set:

1. **Abstract measure theory:** Given an outer measure $\mu^*$ on $(X, \mathcal{P}(X))$, the Caratheodory measurable sets form a $\sigma$-algebra $\mathcal{M}$, and $\mu^*|_{\mathcal{M}}$ is a complete measure.

2. **Hausdorff measures:** On $\mathbb{R}^n$, the $s$-dimensional Hausdorff measure $\mathcal{H}^s$ is defined using coverings by sets of diameter at most $\delta$, taking the limit as $\delta \to 0$. For $s = n$, this recovers Lebesgue measure.

3. **Haar measures:** On locally compact groups, the Haar measure is a translation-invariant measure (unique up to scalar multiples). The Caratheodory construction is used in its construction.

4. **Product measures:** Given measures $\mu$ on $(X, \mathcal{A})$ and $\nu$ on $(Y, \mathcal{B})$, the product measure $\mu \times \nu$ on $(X \times Y, \mathcal{A} \otimes \mathcal{B})$ is constructed using the Caratheodory extension from rectangles.

### Technical Details

**Lemma 3.15.** If $\mu^*$ is an outer measure and $A \subseteq B$, then $\mu^*(A) \leq \mu^*(B)$.

*Proof.* Any covering of $B$ is also a covering of $A$, so the infimum over coverings of $A$ is at most the infimum over coverings of $B$.

**Lemma 3.16.** For any sequence $\{A_n\}$ of sets, $m^*\left(\bigcup_{n=1}^{\infty} A_n\right) \leq \sum_{n=1}^{\infty} m^*(A_n)$.

*Proof.* For each $n$ and each $\varepsilon > 0$, choose a covering $\{(a_{n,k}, b_{n,k})\}_{k=1}^{\infty}$ of $A_n$ with $\sum_{k}(b_{n,k} - a_{n,k}) < m^*(A_n) + \varepsilon/2^n$. Then $\{(a_{n,k}, b_{n,k})\}_{n,k}$ is a covering of $\bigcup A_n$ with total length less than $\sum m^*(A_n) + \varepsilon$. Since $\varepsilon$ is arbitrary, the result follows.

**Proposition 3.17.** The Lebesgue outer measure of a countable set is zero.

*Proof.* Let $A = \{x_1, x_2, \ldots\}$. For each $\varepsilon > 0$, cover $x_n$ by $(x_n - \varepsilon/2^{n+1}, x_n + \varepsilon/2^{n+1})$. Then $m^*(A) \leq \sum_{n=1}^{\infty} \varepsilon/2^n = \varepsilon$. Since $\varepsilon$ is arbitrary, $m^*(A) = 0$.

**Corollary 3.18.** The rationals $\mathbb{Q} \cap [0, 1]$ have Lebesgue measure zero. More generally, any countable subset of $\mathbb{R}$ has measure zero.

**Proposition 3.19.** The Lebesgue outer measure of a closed interval $[a, b]$ equals $b - a$.

*Proof.* We already know $m^*([a, b]) \leq b - a$ from the open interval case. For the reverse, any covering $\{(a_n, b_n)\}$ of $[a, b]$ must satisfy $\sum(b_n - a_n) \geq b - a$ by the Heine-Borel theorem (compactness of $[a, b]$ implies a finite subcover, and the sum of lengths of the finite subcover is at least $b - a$).

**Proposition 3.20.** For any open set $U \subseteq \mathbb{R}$, $m^*(U)$ equals the sum of lengths of its connected components.

*Proof.* An open set in $\mathbb{R}$ is a countable disjoint union of open intervals: $U = \bigcup_{n=1}^{\infty} (a_n, b_n)$. By countable subadditivity, $m^*(U) \leq \sum(b_n - a_n)$. For the reverse, the intervals are disjoint, so any covering of $U$ must cover each interval, and by the previous result, $m^*(U) \geq \sum m^*((a_n, b_n)) = \sum(b_n - a_n)$.

**Corollary 3.21.** The Lebesgue measure of any open set is the sum of lengths of its connected components.

### Applications

1. **Measure-theoretic probability:** Lebesgue measure on $[0, 1]$ is the uniform probability measure. The Caratheodory construction underpins the construction of probability measures from cumulative distribution functions.

2. **Geometric measure theory:** Hausdorff measures (generalisations of Lebesgue measure to fractional dimensions) are constructed using the same Caratheodory method. They measure the "size" of fractals and lower-dimensional objects.

3. **Harmonic analysis:** The Lebesgue measure on $\mathbb{R}^n$ is the Haar measure for the additive group $(\mathbb{R}^n, +)$. Fourier analysis on locally compact groups relies on Haar measures.

4. **Functional analysis:** The Lebesgue spaces $L^p(\mathbb{R}^n)$ are defined using Lebesgue measure. These spaces are fundamental in PDE theory and functional analysis.

### Further Reading

- **Halmos, P.R.** *Measure Theory.* Springer, 1974. Chapter 3 covers outer measures and the Caratheodory construction in detail.
- **Folland, G.B.** *Real Analysis: Modern Techniques and Their Applications.* Wiley, 1999. Chapter 2 provides a modern treatment of measure theory.
- **Royden, H.L. and Fitzpatrick, P.M.** *Real Analysis.* Pearson, 2010. Chapter 3 covers Lebesgue measure and integration.
- **Stein, E.M. and Shakarchi, R.** *Real Analysis: Measure Theory, Integration, and Hilbert Spaces.* Princeton University Press, 2005. Chapter 1 introduces measure theory via the Lebesgue construction.

### Open Questions

1. **Continuum Hypothesis and measurability:** It is consistent with ZFC that all subsets of $\mathbb{R}$ are Lebesgue measurable (Solovay, 1970), but this requires the assumption that an inaccessible cardinal exists.

2. **Regular measures on non-separable spaces:** The regularity properties of Lebesgue measure may fail for measures on non-separable measure spaces.

3. **Optimal covering:** What is the optimal way to cover a given set by intervals to achieve the infimum in the definition of Lebesgue outer measure?

### Summary

The Lebesgue outer measure and Caratheodory extension theorem provide the foundation for modern measure theory. The key ideas are:

1. **Outer measures** extend the notion of "size" to all subsets, but may lack countable additivity.
2. **Caratheodory measurability** identifies the subsets where the outer measure behaves like a measure.
3. The **extension theorem** guarantees that the restriction to measurable sets is a complete measure.
4. **Non-measurable sets** exist (requiring the Axiom of Choice), but are "pathological" and rarely encountered in practice.
5. The construction generalises to **Hausdorff measures**, **Haar measures**, and **product measures**.

### Historical Notes

- **Lebesgue (1902):** Introduced the Lebesgue integral and measure in his doctoral thesis.
- **Caratheodory (1914):** Generalised the construction to arbitrary outer measures.
- **Vitali (1905):** Proved the existence of non-measurable sets using the Axiom of Choice.
- **Banach (1923):** Showed that a translation-invariant, finitely additive measure on all subsets of $\mathbb{R}$ exists if we drop countable additivity (using a weaker form of the Axiom of Choice).

