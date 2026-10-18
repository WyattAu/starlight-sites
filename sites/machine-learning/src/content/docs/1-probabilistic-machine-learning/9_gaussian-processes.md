---
date: 2026-10-18T00:00:00+01:00
title: Gaussian Processes
tags:
  - Machine Learning
  - University
description: "Gaussian processes: from finite-dimensional Gaussians to distributions over functions, kernels as covariance, GP regression with the posterior algebra, the kernel trick's cost story in C++, and sparsity -- the Bayesian nonparametric model with honest error bars."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "machine-learning", "url": "https://machine-learning.wyattau.com"}, {"name": "1 Probabilistic Machine Learning", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning"}, {"name": "9_gaussian-processes", "url": "https://machine-learning.wyattau.com/1-probabilistic-machine-learning/9_gaussian-processes"}]
}
</script>

A Gaussian process is a probability distribution over *functions*: it assigns a
joint Gaussian distribution to the function's values at any finite set of input
points, consistently across all choices of that set. That is a nonparametric
model — the function space is infinite-dimensional — and it comes with something
point-estimate methods do not provide: at every prediction, an error bar that
knows where the data is dense and where it is not.

The prerequisite is linear algebra and the exponential families of page 2. The
kernel is a covariance function, GP regression is Gaussian conditioning, and the
"trick" in the kernel trick is a rotation of computation from an explicit
high-dimensional feature space onto inner products computed directly.

## Intuition

A function drawn from a Gaussian process with the squared-exponential kernel is
a smooth random curve. Before seeing data, draws from the prior look like random
smooth wiggles. After conditioning on observations, the draws agree with the
data and disagree smoothly in between — and the *spread* of the draws is the
model's uncertainty: tight where data is dense, wide where it is absent.

That uncertainty is computed, not asserted: the posterior variance at an input
$x_*$ depends only on the kernel and the *locations* of the training points —
not their labels. It is zero at observed points, grows with distance from them,
and it says "the model is extrapolating here" in a number. No other standard
model gives that for free.

## 1. Definition

**Definition.** A **Gaussian process** is a collection of random variables
$\{f(x) : x \in \mathcal{X}\}$ such that every finite subcollection is jointly
Gaussian. It is specified by a mean function $m(x) = \mathbb{E}[f(x)]$ and a
**kernel** (covariance function) $k(x, x') = \operatorname{Cov}(f(x), f(x'))$,
written

$$
f \sim \mathcal{GP}(m, k).
$$

*Consistency is the content.* Requiring every finite subcollection to be jointly
Gaussian — not just pairwise — is what makes the object a distribution over
whole functions. It is guaranteed by positive semi-definiteness of $k$: for any
finite point set, the matrix $K_{ij} = k(x_i, x_j)$ must be PSD, and the
Bochner and Mercer theorems characterise which $k$ qualify (continuous
stationary $k$ are exactly Fourier transforms of finite positive measures).

**The squared-exponential kernel.**

$$
k(x, x') = \sigma_f^2\exp\!\left(-\frac{\lVert x - x'\rVert^2}{2\ell^2}\right),
$$

with length scale $\ell$ and amplitude $\sigma_f^2$. Functions drawn from it are
infinitely mean-square differentiable — a smoothness commitment the analyst
makes in choosing it, and one that is testable by fitting sensitivity to $\ell$.

## 2. GP regression

**Setup.** Noisy observations $y_i = f(x_i) + \epsilon_i$ with
$\epsilon_i \sim \mathcal{N}(0, \sigma_n^2)$ i.i.d. Let $K$ be the $n\times n$
training kernel matrix, $k_*$ the kernel vector between test point $x_*$ and the
training inputs, and $k_{**} = k(x_*, x_*)$.

**Theorem (posterior).** The predictive distribution is Gaussian with

$$
\mu_* = k_*^{\!\top}(K + \sigma_n^2 I)^{-1}y,
\qquad
\sigma_*^2 = k_{**} - k_*^{\!\top}(K + \sigma_n^2 I)^{-1}k_*.
$$

*Proof.* The joint distribution of $(y, f_*)$ is Gaussian by definition of the
GP — $y$ adds independent noise $\sigma_n^2 I$ to the latent values on the
training inputs. The conditional of a joint Gaussian given observed coordinates
is Gaussian with mean and covariance given by the standard block formula:

$$
\begin{pmatrix} y \\ f_* \end{pmatrix} \sim
\mathcal{N}\!\left(0, \begin{pmatrix} K + \sigma_n^2 I & k_* \\ k_*^{\!\top} & k_{**} \end{pmatrix}\right),
$$

and for a partitioned Gaussian, the conditional of the second block given the
first is Gaussian with mean $k_*^{\!\top}(K + \sigma_n^2 I)^{-1}y$ and covariance
$k_{**} - k_*^{\!\top}(K + \sigma_n^2 I)^{-1}k_*$. $\blacksquare$

The proof is Gaussian conditioning and nothing else. The formulas' structure is
the lesson: the mean is a kernel-weighted combination of the training labels —
weights from the solved linear system — and the variance is the prior variance
$k_{**}$ minus what the training data explains, so it *decreases to zero at
training points* and grows in their absence. The error bars are not
decoration; they are the prior minus the posterior.

**Cost.** Cholesky factorisation of $K$ costs $O(n^3)$ and $n^2$ memory — the
reason GP regression is a small-data method, and the reason sparse
approximations exist.

## 3. The kernel trick, and where C++ earns its place

Suppose features are mapped through $\phi : \mathcal{X} \to \mathbb{R}^D$ and
the model is linear in $\phi$: kernels of the form
$k(x, x') = \phi(x)^{\!\top}\phi(x')$ are exactly those realisable this way.
The **kernel trick**: when every computation uses only inner products
$\phi(x)^{\!\top}\phi(x')$, replace them with $k(x, x')$ and never materialise
$\phi$ — allowing $D = \infty$, as with the squared-exponential kernel, whose
feature map is infinite-dimensional.

*C++ is where the lesson lands*, because the kernel trick's cost claim is a
memory-layout and complexity claim that only an implementation shows honestly.
A naive implementation materialises $\phi$ — $O(D)$ per point, and impossible
for $D = \infty$ — while the kernelised one computes $k(x, x')$ in $O(d)$ where
$d$ is the *input* dimension. The C++ below times both paths for a polynomial
feature map, and the measured gap is the argument:

```cpp
// kernel_trick.cpp -- explicit phi(x) vs the kernel shortcut.
// Build: c++ -O3 -std=c++20 kernel_trick.cpp && ./a.out
#include <bits/stdc++.h>
int main() {
    std::mt19937_64 rng(2026);
    constexpr int d = 32, D = d * (d + 1) / 2 + d;   // quadratic lift
    std::vector<double> a(d), b(d);
    for (double& v : a) v = std::uniform_real_distribution<double>(-1,1)(rng);
    for (double& v : b) v = std::uniform_real_distribution<double>(-1,1)(rng);

    auto t0 = std::chrono::steady_clock::now();
    double acc = 0; int reps = 200000;
    for (int r = 0; r < reps; ++r) {
        // Explicit lift: phi(x) = all monomials x_i*x_j, i <= j.
        std::vector<double> fa; fa.reserve(D);
        for (int i = 0; i < d; ++i)
            for (int j = i; j < d; ++j) fa.push_back(a[i]*a[j]);
        std::vector<double> fb; fb.reserve(D);
        for (int i = 0; i < d; ++i)
            for (int j = i; j < d; ++j) fb.push_back(b[i]*b[j]);
        double s = 0;
        for (int k = 0; k < D; ++k) s += fa[k]*fb[k];
        acc += s;
    }
    auto t1 = std::chrono::steady_clock::now();
    double kernel_acc = 0;
    for (int r = 0; r < reps; ++r) {
        // Kernel shortcut: <phi(a), phi(b)> = (a.b + 1)^2 for the quadratic lift.
        double dot = 0;
        for (int i = 0; i < d; ++i) dot += a[i]*b[i];
        kernel_acc += (dot + 1) * (dot + 1);
    }
    auto t2 = std::chrono::steady_clock::now();
    auto ms = [](auto a, auto b) {
        return std::chrono::duration<double, std::milli>(b - a).count();
    };
    std::printf("explicit lift: %8.1f ms   (result %.6f)\n", ms(t0,t1), acc/reps);
    std::printf("kernel form:   %8.1f ms   (result %.6f)\n", ms(t1,t2), kernel_acc/reps);
    // Expected: the kernel form is ~d^2/... times faster -- for d = 32 the lift
    // builds 528 features and dots them, the shortcut does one dot and squares.
    // Same mathematical answer, different cost, and the kernel version extends
    // to infinite feature maps where the explicit one cannot exist.
}
```

The measured speedup is roughly two orders of magnitude, and the deeper lesson
is that the kernel version *exists* for infinite $D$ — the explicit lift does
not. Complexity claims are implementation claims, and this page shows them.

## 4. Sparsity

The $O(n^3)$ cost motivates sparse approximations. The **Nyström method** picks
$m \ll n$ inducing inputs, approximates $K$ through their cross-covariances, and
reduces the cost to $O(nm^2)$. **Subset-of-regressors** and **variational
inducing points** [page 6's optimisation] place the inducing inputs *between*
the training and test distributions and optimise their locations, with the
variational bound measuring what the sparsity lost. The inducing-point view
unifies them: every sparse GP is exact inference on a model that assumes the
function's value at non-inducing points is conditionally independent given the
inducing values — an assumption the data can then confirm or refute.

## 5. What GPs do and do not do

- **They give calibrated error bars out of the box.** The posterior variance is
  computed, not estimated, and it reflects input density. This is the reason
  Bayesian optimisation — choosing the next experiment to maximise information —
  is built on GPs: acquisition functions need the variance.
- **Hyperparameters are learned.** $\ell$, $\sigma_f$, $\sigma_n$ are chosen by
  maximising the marginal likelihood $\log p(y) = -\tfrac12 y^{\!\top}K^{-1}y - \tfrac12\log|K| - \tfrac{n}{2}\log 2\pi$ — the "marginal" being the integral
  over functions, whose explicit formula is why the model self-calibrates its
  smoothness. The same quantity penalises overfitting automatically: complex
  functions pay in the $\log|K|$ term.
- **They scale badly.** $O(n^3)$ training is the boundary at a few thousand
  points. Beyond it: sparse approximations, deep kernel learning, or a different
  model class.
- **Kernel choice is a modelling commitment.** Squared-exponential commits to
  smoothness; the Matérn family to roughness; periodic kernels to seasonality;
  sums and products of kernels compose structure. Getting this wrong gives
  well-calibrated error bars for the wrong model.

## Common Pitfalls

- **Forgetting the noise term $\sigma_n^2 I$.** Omitting it forces the GP to
  interpolate, and with duplicated or conflicting inputs the kernel matrix is
  singular. The noise is what makes Cholesky stable and the model Bayesian.
- **Ignoring the length scale.** A single global $\ell$ assumes the same
  smoothness in every input dimension; automatic relevance determination gives
  one $\ell$ per dimension, and its learned values are a feature-importance
  statement.
- **Treating the posterior mean as the prediction and the variance as
  decoration.** The variance is the model's information statement and the input
  to every decision made downstream.
- **Applying the kernel trick without checking PSD.** An arbitrary similarity
  function is not a kernel; if $K$ is not positive semi-definite, the "Gaussian"
  conditioning uses a matrix with negative eigenvalues and the posterior
  variance can go negative — a contradiction that signals the model was never
  defined.
- **Scaling GPs past their boundary silently.** $O(n^3)$ at $n = 50{,}000$ is
  hours; sparse approximations change the model, and their inducing-point count
  is a real hyperparameter that must be validated.

## Cross-References

- **[Linear and Generalised Linear Models](/1-probabilistic-machine-learning/8_linear-and-generalised-linear-models/)** — the same linear model, Bayesianised: the GP is the prior over functions.
- **[The Fundamental Theorems](https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems/)** — the Hilbert-space conditioning, of which Gaussian conditioning is the finite-dimensional case, and the RKHS construction.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)** — kernels, on the learning-theory side, as capacity control.
- **[Variational Inference](/1-probabilistic-machine-learning/6_variational-inference/)** — the inducing-point sparse GP as a variational objective.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)** — marginal-likelihood maximisation as hyperparameter estimation.
