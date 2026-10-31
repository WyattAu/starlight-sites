performance?* The answer is a theorem with three inputs; the amount of data,
the size of the model class, and the quality of the best model in the class -
capacity; how many different labellings it can produce on $n$ points; and the
The learner never sees $P$; only the sample. The gap
pointwise concentration; page 1's Hoeffding; must be strengthened to hold for
at most $\epsilon$. Both parameters are honest; "probably" and "approximately"
Bernoulli with parameter $R(h)$, so by Hoeffding's inequality; page 1's tool,
applied to bounded variables -
$n = O(\epsilon^{-2}\log(|\mathcal{H}|/\delta))$; squared in the accuracy
shattered; label the outer pair positive, inner pair negative; three cannot -
by $\mathcal{H}$ *on $S'$* in the strong sense; both labels achievable on
$x_m$ means both labels achievable everywhere; so their count is at most
The growth is polynomial in $m$ of degree $d$; not the exponential $2^m$ of an
VC counts dichotomies; Rademacher complexity measures something finer; the
variables; apply McDiarmid's bounded-difference inequality; the boundedness of
the loss means changing one sample changes the supremum by at most $2/n$; to
is a property of the class alone; data-independent, worst-case over
classes, capacity is controlled by the norm of the weight vector; and adding a
and early stopping are all capacity control; the theory's one recipe, expressed
an open research area; which is where the course's final page goes.
**Python; shattering, and the VC dimension of intervals, empirically.**
is why VC dimension is a *theory* tool; computed for parametric families in
**Python; the generalisation gap, measured on a real split.**
  distributions and notoriously loose; a factor of $n$ can sit unused. Their
  interpolate training data and still generalise; outside classical VC bounds,
- **[Measure-Theoretic Probability](/1-probabilistic-machine-learning/1_measure-theoretic-probability/)**; Hoeffding's inequality and the i.i.d. assumption, used from §2.
- **[Hypothesis Testing](/1-probabilistic-machine-learning/4_hypothesis-testing/)**; the union bound and multiple testing, which symmetrisation replaces.
- **[Linear and Generalised Linear Models](/1-probabilistic-machine-learning/8_linear-and-generalised-linear-models/)**; ridge and lasso, the capacity-control recipe instantiated.
- **[Gaussian Processes](/1-probabilistic-machine-learning/9_gaussian-processes/)**; the Bayesian route to the same capacity control, through priors rather than penalties.
- **[Sobolev Spaces](https://mathematics.wyattau.com/11-functional-analysis/10_sobolev-spaces/)**; the smoothness scale behind nonparametric rates.