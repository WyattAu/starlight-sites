model; the function space is infinite-dimensional; and it comes with something
data and disagree smoothly in between; and the *spread* of the draws is the
$x_*$ depends only on the kernel and the *locations* of the training points -
Gaussian; not just pairwise; is what makes the object a distribution over
infinitely mean-square differentiable; a smoothness commitment the analyst
GP; $y$ adds independent noise $\sigma_n^2 I$ to the latent values on the
the lesson: the mean is a kernel-weighted combination of the training labels -
weights from the solved linear system; and the variance is the prior variance
**Cost.** Cholesky factorisation of $K$ costs $O(n^3)$ and $n^2$ memory; the
$\phi$; allowing $D = \infty$, as with the squared-exponential kernel, whose
A naive implementation materialises $\phi$; $O(D)$ per point, and impossible
for $D = \infty$; while the kernelised one computes $k(x, x')$ in $O(d)$ where
is that the kernel version *exists* for infinite $D$; the explicit lift does
inducing values; an assumption the data can then confirm or refute.
  Bayesian optimisation; choosing the next experiment to maximise information -
  maximising the marginal likelihood $\log p(y) = -\tfrac12 y^{\!\top}K^{-1}y - \tfrac12\log|K| - \tfrac{n}{2}\log 2\pi$; the "marginal" being the integral
  variance can go negative; a contradiction that signals the model was never
- **[Linear and Generalised Linear Models](/1-probabilistic-machine-learning/8_linear-and-generalised-linear-models/)**; the same linear model, Bayesianised: the GP is the prior over functions.
- **[The Fundamental Theorems](https://mathematics.wyattau.com/11-functional-analysis/4_the-fundamental-theorems/)**; the Hilbert-space conditioning, of which Gaussian conditioning is the finite-dimensional case, and the RKHS construction.
- **[Statistical Learning Theory](/1-probabilistic-machine-learning/7_statistical-learning-theory/)**; kernels, on the learning-theory side, as capacity control.
- **[Variational Inference](/1-probabilistic-machine-learning/6_variational-inference/)**; the inducing-point sparse GP as a variational objective.
- **[Estimation Theory](/1-probabilistic-machine-learning/3_estimation-theory/)**; marginal-likelihood maximisation as hyperparameter estimation.