---
title: Regression
description: ""when $x$ increases by 1 unit" and "predicted $y$ changes
  by $b$."
- **y-Intercept ($a$)**: When $x = 0$, the predicted value of $y$ is $a$. This interpretation is
  only meaningful if $x = 0$ is within the range of the data.

### Prediction

The LSRL gives the predicted value $\hat{y}$ for a given $x$. Predictions are most reliable for
values of $x$ within the range of the original data (**extrapolation** beyond the data is risky).

## Residuals

A **residual** is the difference between the observed value and the predicted value:

$$e_i = y_i - \hat{y}_i$$

- A positive residual: the point is above the regression line (actual $>$ predicted)
- A negative residual: the point is below the line (actual $<$ predicted)
- The mean of the residuals is always $\approx 0$ (by definition of least squares)
- The sum of squared residuals ($\sum e_i^2$) is minimised by the LSRL

### Residual Plots

A residual plot displays residuals ($e_i$) on the vertical axis and the explanatory variable ($x_i$)
or the predicted values ($\hat{y}_i$) on the horizontal axis.

**Interpretation**:

- If the regression line is a good model, the residual plot shows a random scatter of points with no
  pattern around the horizontal axis ($e = 0$)
- A **curved pattern** in the residual plot indicates a nonlinear relationship
- A **fan shape** (increasing spread) indicates non-constant variance (heteroscedasticity)
- **Outliers** in the residual plot are points with large residuals

## Coefficient of Determination ($r^2$)

$$r^2 = \frac{\text{variation in } \hat{y}}{\text{variation in } y} = 1 - \frac{\sum e_i^2}{\sum(y_i - \bar{y})^2}$$

$r^2$ represents the proportion of the variation in $y$ that is accounted for by the linear
relationship with $x$.

- $r^2 = 0$: The LSRL explains none of the variation in $y$
- $r^2 = 1$: The LSRL explains all of the variation in $y$
- $r^2 = 0.85$: 85% of the variation in $y$ is explained by the linear regression on $x$

### Interpretation

"Approximately 85% of the variation in [response variable] can be accounted for by the linear
relationship with [explanatory variable]."

## Outliers and Influential Points

### Outliers

A point with a **large residual** (far from the regression line). An outlier in the y-direction.

### Influential Points

A point that, if removed, would significantly change the slope and/or y-intercept of the regression
line. Influential points typically have **extreme x-values** (leverage points), even if their
residual is not large.

An influential point may or may not be an outlier. Always check the effect of removing a point on
the regression equation.

## Transformations

When the relationship between $x$ and $y$ is not linear, a transformation of one or both variables
may produce a linear relationship.

### Common Transformations

- **Logarithmic**: $y" = \ln(y)$ or $x' = \ln(x)$ -- useful for exponential growth/decay
- **Square root**: $y' = \sqrt{y}$ -- useful for count data with increasing variance
- **Reciprocal**: $y' = 1/y$ -- useful for hyperbolic relationships
- **Power**: $y' = y^p$ for some power $p$

### Strategy

1. Make a scatterplot of $y$ vs $x$
2. If nonlinear, try transformations of $x$, $y$, or both
3. Re-examine the scatterplot and residual plot after transformation
4. Choose the transformation that produces the most linear pattern with random residuals

## Out-of-Context Extrapolation

The LSRL should only be used to make predictions for values of $x$ within the range of the observed
data. Extrapolating beyond this range is unreliable because the linear pattern may not hold.

## Correlation vs Causation

A strong correlation between two variables does not imply that one causes the other. The
relationship may be due to:

- **Confounding variables**: A third variable related to both $x$ and $y$
- **Common response**: Both variables respond to a third variable
- **Coincidence**: Random chance producing a strong correlation in a particular sample

Establishing causation requires a well-designed **experiment** with random assignment, not just
observational data showing correlation.

## Inference for Regression Slope

On the AP exam, you may be asked to test whether the slope of the population regression line is
significantly different from zero:

$$H_0: \beta_1 = 0 \quad H_a: \beta_1 \neq 0$$

$$t = \frac{b_1 - 0}{SE_{b_1}} \quad \text{with } df = n - 2$$

## Common Pitfalls

- Confusing correlation with causation
- Using the regression line to extrapolate far beyond the data
- Interpreting $r^2$ as a percentage "explained" without proper context
- Forgetting to check residual plots for nonlinearity
- Confusing outliers (large residuals) with influential points (high leverage)
- Using correlation when the relationship is clearly nonlinear
