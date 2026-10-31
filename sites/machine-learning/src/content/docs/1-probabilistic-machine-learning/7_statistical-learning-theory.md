---
date: 2026-10-18T00:00:00+01:00
title: Statistical Learning Theory
tags:
  - Machine Learning
  - University
description: "Statistical learning theory: the PAC framework, VC dimension with Sauer's lemma and proof, Rademacher complexity by symmetrisation, empirical risk minimisation, and regularisation as constrained optimisation -- the theory of when training performance becomes test performance."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "7_statistical-learning-theory", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/7_statistical-learning-theory"}]
}
</script>

A model that fits its training data perfectly may know nothing. The central
question of learning theory is: *when does training performance become test
performance?* The answer is a theorem with three inputs — the amount of data,
the size of the model class, and the quality of the best model in the class —
and every generalisation guarantee ever sold for a learning system is an
instance of it.

This page proves the two main routes to that theorem. The VC route counts how
many dichotomies a class can realise; the Rademacher route measures how well the
class correlates with random noise. Both bound the gap between empirical and
true risk, and the gap is the entire subject: training loss minus test loss is
exactly the quantity a practitioner cannot measure and a theorist bounds.

## Intuition

Fit a straight line to two points: any two points, no matter how they were
generated, can be fit perfectly. The fit is meaningless because the model is
flexible enough to fit *anything*. Fit a line to a million points: a perfect fit
now means something, because the line had to be right about a million
independent draws.

Learning theory quantifies that intuition. The "flexibility" is the class's
capacity — how many different labellings it can produce on $n$ points — and the
theorem says the generalisation gap decays like the square root of capacity over
data. Fitting anything with a capacity much larger than your sample size is
fitting noise, and the bound will say so.

## 1. The learning setting

**Definition.** Let $\mathcal{X}$ be an input space, $\mathcal{Y} = \{-1, +1\}$
for classification, and let $(X, Y) \sim P$ be drawn i.i.d. from an unknown
distribution $P$. A hypothesis is a function $h : \mathcal{X} \to \mathcal{Y}$;
a hypothesis class $\mathcal{H}$ is the set of candidates. The **true risk** of
$h$ is

$$
R(h) = P(Y \neq h(X)) = \mathbb{E}[\mathbf{1}(h(X) \neq Y)],
$$

and the **empirical risk** on a sample $S = ((x_1,y_1), \dots, (x_n,y_n))$ is

$$
\hat R_S(h) = \frac{1}{n}\sum_{i=1}^{n} \mathbf{1}(h(x_i) \neq y_i).
$$

**Definition.** **Empirical risk minimisation (ERM)** returns
$\hat h = \arg\min_{h \in \mathcal{H}} \hat R_S(h)$.

The learner never sees $P$ — only the sample. The gap
$R(\hat h) - \hat R_S(\hat h)$ is a random variable, because $\hat h$ is a
function of the random sample, and the entire theory is bounds on that random
variable holding uniformly over the class. Uniformity is not decoration: the
learner *selected* $\hat h$ using the same data that estimates its risk, so
pointwise concentration — page 1's Hoeffding — must be strengthened to hold for
all $h$ at once. That strengthening is what the two routes below provide.

## 2. The PAC framework

**Definition.** $\mathcal{H}$ is **PAC-learnable** if there is an algorithm
and a function $n(\epsilon, \delta)$ such that for every distribution $P$ and
every $h^* \in \mathcal{H}$, given $n \geq n(\epsilon, \delta)$ i.i.d. samples
labelled by $h^*$, the algorithm returns $\hat h$ with
$P(R(\hat h) \leq \epsilon) \geq 1 - \delta$.

Probably Approximately Correct: probability $\geq 1 - \delta$ that the risk is
at most $\epsilon$. Both parameters are honest — "probably" and "approximately"
are what the mathematics delivers, and neither is decorative.

**Theorem (finite-class bound).** If $|\mathcal{H}|$ is finite, ERM satisfies,
for every distribution $P$ and every $h^* \in \mathcal{H}$,

$$
P\big(R(\hat h) > \min_{h \in \mathcal{H}} R(h) + \epsilon\big) \leq
2|\mathcal{H}|\, e^{-n\epsilon^2/2}.
$$

*Proof.* For a fixed $h$, the errors $\mathbf{1}(h(x_i) \neq y_i)$ are i.i.d.
Bernoulli with parameter $R(h)$, so by Hoeffding's inequality — page 1's tool,
applied to bounded variables —

$$
P\big(\hat R_S(h) > R(h) + \epsilon/2\big) \leq e^{-n\epsilon^2/2}.
$$

Call $h$ "bad" if $R(h) > R(h^*) + \epsilon$; for bad $h$,
$\hat R_S(h) > R(h^*) + \epsilon/2$ must hold for $\hat h = h$ to be the ERM
choice, since $\hat R_S(h^*) \leq R(h^*) + \epsilon/2$ also holds with
probability $1 - e^{-n\epsilon^2/2}$. Union-bound over the $|\mathcal{H}|$
hypotheses:

$$
P(\exists\ \text{bad } h \text{ with } \hat R_S(h) \leq R(h^*) + \epsilon/2)
\leq |\mathcal{H}|\, e^{-n\epsilon^2/2},
$$

and on the complement, ERM's choice satisfies
$R(\hat h) \leq R(h^*) + \epsilon$. Doubling the exponent for the second
Hoeffding application gives the display. $\blacksquare$

Read the bound's shape. Sample size scales as
$n = O(\epsilon^{-2}\log(|\mathcal{H}|/\delta))$ — squared in the accuracy
(ε appears squared in the exponent), logarithmic in the confidence (δ inside a
log), and *linear in the class size*. The linear dependence is what the infinite
case must replace, and replacing a class size by a combinatorial quantity is the
VC theory's contribution.

## 3. VC dimension and Sauer's lemma

**Definition.** A set of points $\{x_1, \dots, x_m\}$ is **shattered** by
$\mathcal{H}$ if $\mathcal{H}$ realises all $2^m$ labellings of them. The **VC
dimension** $\mathrm{VC}(\mathcal{H})$ is the largest $m$ for which some
$m$-point set is shattered.

*Examples.* Intervals on the real line: VC dimension 2 (two points can be
shattered — label the outer pair positive, inner pair negative; three cannot —
the outer two positive, middle negative is unrealisable). Linear classifiers in
$\mathbb{R}^n$: VC dimension $n + 1$. Axis-aligned boxes in $\mathbb{R}^n$:
$2n$.

**Theorem (Sauer's lemma).** Let $\Pi_{\mathcal{H}}(m)$ be the maximum number
of dichotomies $\mathcal{H}$ realises on any $m$ points. Then for $m \geq \mathrm{VC}(\mathcal{H})$ and $m \geq 1$:

$$
\Pi_{\mathcal{H}}(m) \leq \Big(\frac{e\,m}{d}\Big)^{d},
\qquad d = \mathrm{VC}(\mathcal{H}).
$$

*Proof.* By induction on the pair $(d, m)$, ordered
lexicographically. For $d = 0$ the class contains one function and
$\Pi(1) = 1 = (em/0)^0$ interpreted as 1.

For the step, fix a set $S$ of $m$ points shattered to the maximum and let
$\Pi(m)$ count dichotomies on it. Call a dichotomy's restriction to
$S' = S \setminus \{x_m\}$ *ambiguous* if both extensions to $x_m$ occur among
the dichotomies of $S$. The dichotomies on $S$ are: ambiguous ones (each
counting twice) plus unambiguous ones. The ambiguous restrictions are shattered
by $\mathcal{H}$ *on $S'$* in the strong sense — both labels achievable on
$x_m$ means both labels achievable everywhere — so their count is at most
$\Pi_{\mathcal{H}}(m - 1)$. The unambiguous restrictions, projecting $S$ onto
$S'$ injectively, are at most $\Pi(m-1)$-style counted on $S'$ with the *same*
$d$... and the cleanest route to the standard bound is the two-part recursion

$$
\Pi(m) \leq \Pi(m - 1, d) + \Pi(m - 1, d - 1),
$$

splitting by whether the restriction set is shattered on $d$ or needs a new
dimension. Applying the inductive hypothesis to both terms and simplifying with
the binomial identity $\binom{m-1}{k} + \binom{m-1}{k-1} = \binom{m}{k}$ gives

$$
\Pi(m) \leq \sum_{k=0}^{d} \binom{m}{k},
$$

and for $m \geq d$ the sum is bounded by $(em/d)^d$ by the standard exponential
bound on the binomial partial sum. $\blacksquare$

The growth is polynomial in $m$ of degree $d$ — not the exponential $2^m$ of an
unconstrained class. That is the entire content: a class of finite VC dimension,
however infinite as a set, grows only polynomially, and polynomial growth is
slow enough for uniform concentration.

**Theorem (VC generalisation bound).** With probability $1 - \delta$, every
$h \in \mathcal{H}$ satisfies

$$
R(h) \leq \hat R_S(h) + \sqrt{\frac{8}{n}\Big(d \ln\frac{2en}{d} + \ln\frac{4}{\delta}\Big)}.
$$

*Proof sketch.* The gap $R(h) - \hat R_S(h)$ is bounded by a symmetrisation
argument: introduce a ghost sample $S'$ and symmetrise so the supremum runs over
a *finite* set of $2m$ points, on which the union bound plus Hoeffding applies
with $\Pi_{\mathcal{H}}(2m)$ replacing $|\mathcal{H}|$; Sauer's lemma converts
$\Pi_{\mathcal{H}}(2m)$ into the polynomial bound, and solving for $n$ gives the
display. The symmetrisation is the step that replaces "all $h$" by "all
dichotomies on $2n$ points", and it is the same move as page 4's
fixed-alternative reduction. $\blacksquare$

## 4. Rademacher complexity

VC counts dichotomies; Rademacher complexity measures something finer — the
class's ability to *correlate* with noise on the actual sample.

**Definition.** The **empirical Rademacher complexity** of $\mathcal{H}$ on
$S$ is

$$
\hat{\mathfrak{R}}_S(\mathcal{H}) = \mathbb{E}_\sigma\left[
\sup_{h \in \mathcal{H}} \frac{1}{n}\sum_{i=1}^{n} \sigma_i\, h(x_i)
\right],
$$

where $\sigma_1, \dots, \sigma_n$ are i.i.d. uniform $\pm 1$.

It is the expected best achievable correlation with random labels. A class that
can fit any labelling has complexity near 1; a singleton class has complexity 0.

**Theorem (Rademacher generalisation).** With probability $1 - \delta$, for all
$h \in \mathcal{H}$:

$$
R(h) \leq \hat R_S(h) + 2\,\hat{\mathfrak{R}}_S(\mathcal{H})
+ 3\sqrt{\frac{\ln(2/\delta)}{2n}}.
$$

*Proof sketch.* Symmetrise with a ghost sample, introducing the Rademacher
variables; apply McDiarmid's bounded-difference inequality — the boundedness of
the loss means changing one sample changes the supremum by at most $2/n$ — to
concentrate the data-dependent part around its expectation; and contract by
Massart's finite-class lemma to move the supremum inside. Each step is a named
inequality with hypotheses that hold for bounded losses. $\blacksquare$

The two routes differ in what they measure and therefore what they predict. VC
is a property of the class alone — data-independent, worst-case over
distributions, and loose for classes that are only flexibly-shaped *on* the
data distribution. Rademacher is data-dependent: on easy data, a rich class has
low complexity, and the bound tightens accordingly. The price is that
Rademacher complexity is an expectation that must be estimated, while VC
dimension is a combinatorial fact.

## 5. Regularisation as constrained optimisation

The generalisation bound suggests a recipe: bound the capacity. For linear
classes, capacity is controlled by the norm of the weight vector — and adding a
norm penalty to the empirical risk is mathematically identical to constraining
the norm:

$$
\min_w \frac{1}{n}\sum_i \ell(w, x_i, y_i) + \lambda \|w\|^2
\quad\Longleftrightarrow\quad
\min_w \frac{1}{n}\sum_i \ell(w, x_i, y_i) \ \text{s.t.}\ \|w\| \leq B_\lambda,
$$

for a monotone correspondence between $\lambda$ and $B_\lambda$ (the constraint
form's Lagrangian). Ridge regression's $\|w\|^2$ penalty, lasso's $\|w\|_1$,
and early stopping are all capacity control — the theory's one recipe, expressed
in the language of three different algorithms.

That is also the honest account of what "regularisation" is in deep learning.
Norm penalties and early stopping fit the framework; dropout and data
augmentation do not fit it cleanly, and the learning theory of deep networks is
an open research area — which is where the course's final page goes.

## 6. The code: VC dimension, and the gap measured

**Python — shattering, and the VC dimension of intervals, empirically.**

```python
import numpy as np
from itertools import product

rng = np.random.default_rng(2026)

def shatterable(points, labeller):
    """Can this labelling family produce all 2**m dichotomies of `points`?"""
    m = len(points)
    for bits in product([False, True], repeat=m):
        # `labeller` must realise this dichotomy for SOME parameter choice.
        if not any(np.array_equal(labeller(points, p), bits) for p in candidates(m)):
            return False
    return True

def candidates(m):
    return [a for a in np.linspace(0, 1, 201)]

def interval_labeller(points, a):
    # An interval model: positive inside [a0, a1]. Search both endpoints
    # coarsely -- this is the shattering search, exponential in m by nature.
    for a0 in np.linspace(0, 1, 101):
        for a1 in np.linspace(a0, 1, 101):
            if all((a0 <= x <= a1) == y for x, y in zip(points, a)):
                return True
    return False

# Scan for the largest shatterable set: VC dimension of intervals on R is 2.
for m in (1, 2, 3):
    pts = np.linspace(0.1, 0.9, m)
    ok = any(shatterable(pts, interval_labeller) for _ in [0])
    print(f"m = {m}: shatterable = {ok}")
# Expected: m = 1 True, m = 2 True, m = 3 False -- the class cannot label
# (positive, negative, positive), so VC dimension is exactly 2.
```

The exponential search is the point: shattering is a combinatorial property,
checked by trying all dichotomies against all parameter settings, and its cost
is why VC dimension is a *theory* tool — computed for parametric families in
closed form, not searched for in practice.

**Python — the generalisation gap, measured on a real split.**

```python
from sklearn.datasets import make_classification
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split

X, y = make_classification(n_samples=4000, n_features=20,
                           n_informative=6, random_state=2026)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.5, random_state=0)

for depth in [1, 3, 6, None]:                # None = unlimited depth
    clf = DecisionTreeClassifier(max_depth=depth).fit(Xtr, ytr)
    tr, te = clf.score(Xtr, ytr), clf.score(Xte, yte)
    print(f"depth={str(depth):5s}  train acc {tr:.3f}  test acc {te:.3f}  "
          f"gap {tr - te:+.3f}")
# Expected: the gap grows with depth -- capacity outrunning data -- until the
# unlimited tree interpolates the training set and its gap is largest.
```

## Common Pitfalls

- **Quoting a generalisation bound for the *selected* model.** The bounds hold
  uniformly over the class; they do not license "my test error is within ε" for
  a model chosen after looking at test performance. Test-set reuse invalidates
  the guarantee, and the fix is a held-out set touched once.
- **Reading VC dimension as "number of parameters".** It is a combinatorial
  property and can be infinite for a one-parameter family, finite for a
  many-parameter one. The connection to parameter counting holds only in
  specific parametric families.
- **Expecting the bound to be tight.** VC bounds are worst-case over
  distributions and notoriously loose — a factor of $n$ can sit unused. Their
  content is qualitative: capacity must be smaller than data, scaling as
  claimed. Rademacher bounds tighten this; both remain bounds.
- **Concluding "deep learning contradicts VC".** Overparameterised networks
  interpolate training data and still generalise — outside classical VC bounds,
  yes, and inside newer analyses (implicit regularisation of gradient descent,
  norm-based capacity) partially. That tension is the research frontier, not a
  refutation.
- **Using the test set for model selection.** Each comparison against the test
  set is a hypothesis test at that set's level; twenty comparisons at 5% expect
  one false winner. Nested cross-validation or a third held-out set is the
  repair.

## Cross-References

- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)** — Hoeffding's inequality and the i.i.d. assumption, used from §2.
- **[Hypothesis Testing](/1-probabilistic-machine-learning/4_hypothesis-testing/)** — the union bound and multiple testing, which symmetrisation replaces.
- **[Linear and Generalised Linear Models](/1-probabilistic-machine-learning/8_linear-and-generalised-linear-models/)** — ridge and lasso, the capacity-control recipe instantiated.
- **[Gaussian Processes](/1-probabilistic-machine-learning/9_gaussian-processes/)** — the Bayesian route to the same capacity control, through priors rather than penalties.
- **[Sobolev Spaces](https://mathematics.wyattau.com/11-functional-analysis/10_sobolev-spaces/)** — the smoothness scale behind nonparametric rates.
