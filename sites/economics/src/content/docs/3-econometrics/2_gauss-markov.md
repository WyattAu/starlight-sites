unbiased, $\hat{\beta}$ has the smallest variance -
Read the claim carefully; three restrictions, each essential:
  OLS under normality; the James--Stein phenomenon).
- **Best**: smallest variance in the matrix sense; every linear combination
$k \times n$ matrix $D$; every $C$ decomposes this way, since $(X'X)^{-1}X'$ is one such matrix
unbiased only at some particular $\beta$ escapes the theorem; which is why the theorem is a
- $(X'X)^{-1}X'X(X'X)^{-1} = (X'X)^{-1}$; the OLS variance, from Theorem 6.1 of the previous
- $(X'X)^{-1}X'D' = (X'X)^{-1}(DX)' = 0$; killed by unbiasedness.
- $DX(X'X)^{-1} = 0$; killed by unbiasedness.
- $DD'$; the only surviving new term.
**Proof.** $a'DD'a = (D'a)'(D'a) = \|D'a\|^2$, a squared norm; nonnegative, and zero only when
In particular, the variance of any scalar combination $a'\tilde{\beta}$; a single coefficient
$a = e_j$, a difference of coefficients, a prediction; is at least as large under the competitor
hence $\tilde{\beta} = \hat{\beta}$; OLS is the *unique* BLUE unless a competitor coincides
exhibit heteroskedasticity; the variance of $u$ differs across units; and then OLS is not
   (Lemma 2.1; the condition $DX = 0$ is uniform in $\beta$.)
2. Where would the proof collapse under heteroskedasticity? (§3 -
3. Is OLS the best estimator under normality? (No; BLUE is the best *linear unbiased*;
- [The OLS Estimator](/3-econometrics/1_ols-estimator/); the decomposition this proof builds on.
- Consistency and asymptotics; the guarantees that survive weaker exogeneity (next in track).