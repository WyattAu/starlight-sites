---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "10 Measure Theory", "url": "https://mathematics.wyattau.com/10-measure-theory"}, {"name": "10_summary Of Key Results", "url": "https://mathematics.wyattau.com/10-measure-theory/10_summary-of-key-results"}]
}
</script>
title: Summary of Key Results
tags:
  - Mathematics
  - University
description: "| Theorem | Conditions | Conclusion | | ---------------------- | ----------------------------------------- | ---------------------------------------- |"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "mathematics", "url": "https://mathematics.wyattau.com"}, {"name": "10 Measure Theory", "url": "https://mathematics.wyattau.com/10-measure-theory"}, {"name": "10_summary Of Key Results", "url": "https://mathematics.wyattau.com/10-measure-theory/10_summary-of-key-results"}]
}
</script>

| Theorem                | Conditions                                | Conclusion                               |
| ---------------------- | ----------------------------------------- | ---------------------------------------- | --------------- | ------------------------ |
| Monotone Convergence   | $0 \leq f_n \nearrow f$                   | $\lim \int f_n = \int f$                 |
| Fatou"s Lemma          | $f_n \geq 0$                              | $\int \liminf f_n \leq \liminf \int f_n$ |
| Dominated Convergence  | $f_n \to f$, $                            | f_n                                      | \leq g \in L^1$ | $\lim \int f_n = \int f$ |
| Holder's Inequality    | $f \in L^p$, $g \in L^q$, $1/p + 1/q = 1$ | $\|fg\|_1 \leq \|f\|_p \|g\|_q$          |
| Minkowski's Inequality | $f, g \in L^p$                            | $\|f + g\|_p \leq \|f\|_p + \|g\|_p$     |
| Fubini                 | $f \in L^1(\mu \times \nu)$               | Iterated integrals equal double integral |
| Radon-Nikodym          | $\nu \ll \mu$, $\sigma$-finite            | $d\nu/d\mu$ exists and is unique a.e.    |

### Monotone Convergence Theorem

**Statement.** If $\{f_n\}$ is a sequence of measurable functions such that
$0 \leq f_1 \leq f_2 \leq \cdots$ and $f_n \to f$ pointwise, then
$\int f\,d\mu = \lim_{n\to\infty} \int f_n\,d\mu$.

**Intuition.** The monotone convergence theorem (MCT) allows the interchange of limit and integral
when the functions are non-negative and increase monotonically. It is the primary tool for
proving convergence of integrals when the integrands are positive.

**Application.** To compute $\int_0^\infty x^{p-1} e^{-x}\,dx = \Gamma(p)$, one expresses the
integrand as the increasing limit of functions $x^{p-1} e^{-x} \mathbf{1}_{[0,n]}(x)$ and applies
MCT.

### Fatou's Lemma

**Statement.** If $\{f_n\}$ is a sequence of non-negative measurable functions, then
$\int \liminf_{n\to\infty} f_n\,d\mu \leq \liminf_{n\to\infty} \int f_n\,d\mu$.

**Intuition.** Fatou's lemma gives a one-sided inequality that holds without any convergence
assumptions. It is often used as a stepping stone to prove the dominated convergence theorem.

**Common Pitfall.** The inequality can be strict. For example, $f_n = \mathbf{1}_{[n,n+1]}$ on
$\mathbb{R}$ with Lebesgue measure: $\liminf f_n = 0$ so the left side is $0$, but
$\int f_n = 1$ for each $n$, so the right limit inferior is $1$.

### Dominated Convergence Theorem

**Statement.** Suppose $f_n \to f$ pointwise a.e. and $|f_n| \leq g$ for all $n$ where
$g \in L^1$. Then $\int f_n \to \int f$.

**Intuition.** The dominated convergence theorem (DCT) is the workhorse of measure theory. It
allows interchange of limit and integral provided the functions are dominated by an integrable
function. The dominating function must be in $L^1$, not merely bounded.

**Application.** Continuity of the Laplace transform: for $F(t) = \int_0^\infty e^{-tx} f(x)\,dx$,
if $f \in L^1$, then $F$ is continuous on $[0,\infty)$ by DCT.

### Holder's Inequality

**Statement.** For measurable functions $f$ and $g$, if $f \in L^p$ and $g \in L^q$ where
$1/p + 1/q = 1$, then $fg \in L^1$ and $\int |fg| \leq \|f\|_p \|g\|_q$.

**Intuition.** H\"older's inequality generalises the Cauchy-Schwarz inequality (the special case
$p = q = 2$). It is fundamental for establishing duality between $L^p$ and $L^q$ spaces.

**Proof Sketch.** By Young's inequality $ab \leq a^p/p + b^q/q$ for $a, b \geq 0$. Apply this to
$a = |f|/\|f\|_p$, $b = |g|/\|g\|_q$ and integrate.

### Minkowski's Inequality

**Statement.** For $f, g \in L^p$ with $1 \leq p \leq \infty$, we have
$\|f + g\|_p \leq \|f\|_p + \|g\|_p$.

**Intuition.** Minkowski's inequality is the triangle inequality for the $L^p$ norm. It establishes
that $L^p$ is a normed vector space. For $p < 1$, the reverse inequality holds.

**Proof Sketch.** Write $|f+g|^p \leq |f+g|^{p-1}|f| + |f+g|^{p-1}|g|$, apply H\"older with
exponents $p$ and $p/(p-1)$, then divide.

### Fubini's Theorem

**Statement.** Let $f \in L^1(\mu \times \nu)$ on a product measure space. Then:
$\int_{X \times Y} f\,d(\mu \times \nu) = \int_X \left(\int_Y f(x,y)\,d\nu(y)\right) d\mu(x)
 = \int_Y \left(\int_X f(x,y)\,d\mu(x)\right) d\nu(y)$.

**Intuition.** Fubini's theorem justifies interchanging the order of integration. The key
condition is absolute integrability with respect to the product measure.

**Common Pitfall.** Without $L^1$ condition, the iterated integrals may differ. The classic
counterexample is $f(x,y) = (x^2 - y^2)/(x^2 + y^2)^2$ on $[0,1]^2$, where iterated integrals
are $\pm \pi/4$.

### Radon-Nikodym Theorem

**Statement.** If $\nu \ll \mu$ (absolutely continuous) and both are $\sigma$-finite, then there
exists a measurable function $f = d\nu/d\mu$ such that $\nu(A) = \int_A f\,d\mu$ for all
measurable $A$. The function $f$ is unique almost everywhere.

**Intuition.** The Radon-Nikodym derivative generalises the idea of a density function from
probability theory. For example, if $\nu$ has density $f$ with respect to Lebesgue measure,
then $d\nu = f\,dx$.

**Application.** Conditional expectation in probability theory: $E[X|\mathcal{F}]$ is defined as
the Radon-Nikodym derivative $d\nu/dP$ where $\nu(A) = \int_A X\,dP$ for $A \in \mathcal{F}$.

### Connections Between Results

The convergence theorems (MCT, Fatou, DCT) form an interdependent chain: MCT implies Fatou,
and Fatou plus a dominating function implies DCT. The inequalities (H\"older, Minkowski) define
the geometry of $L^p$ spaces. Fubini connects product integration to iterated integration.
Radon-Nikodym bridges absolute continuity and densities.

### Practice Problems

1. Compute $\lim_{n\to\infty} \int_0^\infty \frac{\sin(x/n)}{x(1+x^2)}\,dx$ using DCT.
2. Show that if $f_n \to f$ in $L^p$ then $\int |f_n|^p \to \int |f|^p$. Give a counterexample
   where $f_n \to f$ a.e. but $\int f_n \not\to \int f$ without a dominating function.
3. Let $f \in L^1(\mathbb{R})$ and define $F(x) = \int_{\mathbb{R}} f(t) e^{-ixt}\,dt$. Show
   $F$ is continuous using DCT.
4. Use H\"older's inequality to prove that if $\mu(X) < \infty$, then $L^p(X) \subseteq L^q(X)$
   for $1 \leq q \leq p \leq \infty$.
5. Find a measurable function $f$ on $[0,1]^2$ such that $\int_0^1 \int_0^1 f\,dx\,dy \neq
   \int_0^1 \int_0^1 f\,dy\,dx$, and identify why Fubini's theorem does not apply.

### Key Synopsis

Measure theory provides rigorous foundations for integration. The convergence theorems
(MCT, Fatou, DCT) govern when limits and integrals can be interchanged. H\"older and Minkowski
inequalities establish $L^p$ space structure. Fubini's theorem handles product measures, and
the Radon-Nikodym theorem connects measures via densities.

### Quick Reference: Measure Spaces

| Concept | Definition | Example |
|---------|-----------|---------|
| $\sigma$-algebra | Collection closed under complements and countable unions | Borel $\sigma$-algebra on $\mathbb{R}$ |
| Measure | Countably additive set function | Lebesgue measure, counting measure |
| Measurable function | Preimage of Borel set is measurable | Continuous functions, indicator functions |
| Almost everywhere | Property holds except on a null set | $f = g$ a.e. |
| $L^p$ space | $\{f : \int |f|^p < \infty\}$ modulo a.e. equality | $L^1$, $L^2$, $L^\infty$ |

### Quick Reference: Convergence Modes

| Mode of convergence | Definition | Relation to others |
|--------------------|-----------|-------------------|
| Pointwise a.e. | $f_n(x) \to f(x)$ for almost every $x$ | Weakest |
| Uniform | $\sup_x |f_n(x) - f(x)| \to 0$ | Implies pointwise |
| $L^p$ | $\|f_n - f\|_p \to 0$ | Implies convergence in measure |
| In measure | $\mu\{|f_n - f| > \varepsilon\} \to 0$ | Has a subsequence converging a.e. |
| Weak $L^p$ | $\int f_n g \to \int f g$ for all $g \in L^q$ | Weakest of the $L^p$ modes |

### Key Inequalities

| Inequality | Statement | Use case |
|-----------|-----------|----------|
| Chebyshev | $\mu(|f| \geq t) \leq \|f\|_p^p / t^p$ | Markov-type bounds |
| Young | $ab \leq a^p/p + b^q/q$ | Proving H\"older |
| H\"older | $\|fg\|_1 \leq \|f\|_p \|g\|_q$ | Duality of $L^p$ spaces |
| Minkowski | $\|f+g\|_p \leq \|f\|_p + \|g\|_p$ | Triangle inequality |
| Jensen | $\phi(\int f) \leq \int \phi(f)$ for convex $\phi$ | Entropy inequalities |

## Cross-References

- **[Lebesgue Outer Measure and Caratheodory Extension](./3_lebesgue-outer-measure-and-caratheodory-extension.md)**: The foundational construction of Lebesgue measure upon which all these results depend.
- **[Measurable Functions](./5_measurable-functions.md)**: Defines the function classes to which the convergence theorems and inequalities apply.
- **[$L^p$ Spaces](./7_l-p-spaces.md)**: Provides the Banach space framework where Hölder and Minkowski inequalities govern the geometry.

## Common Mistakes

- **Confusing pointwise convergence with $L^p$ convergence:** Pointwise convergence does not imply $L^p$ convergence (consider $f_n = n \cdot \mathbf{1}_{[0,1/n]}$). Conversely, $L^p$ convergence does not imply pointwise convergence everywhere — only almost everywhere along a subsequence.
- **Assuming measurable functions are continuous:** Measurable functions need not be continuous (e.g., indicator functions of measurable sets). Continuity implies measurability, but not the reverse.
- **Applying the Dominated Convergence Theorem without a dominating function:** The theorem requires an integrable majorant $|f_n| \leq g$ with $\int g < \infty$. Without this condition, the conclusion can fail (e.g., $f_n = n \cdot \mathbf{1}_{[0,1/n]}$).
- **Forgetting that sets of measure zero do not affect integrals:** Two functions that are equal almost everywhere have the same integral. Do not confuse "equal a.e." with "equal everywhere" — the distinction matters for pointwise properties but not for $L^p$ membership.
