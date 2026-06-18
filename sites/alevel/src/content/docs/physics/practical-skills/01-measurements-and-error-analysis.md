---
title: Measurements and Error Analysis
description: ""s error bar does not overlap with the line of best fit, either:

- The point is an outlier (consider whether to exclude it with justification)
- There is an unaccounted systematic error
- The uncertainty has been underestimated

### 7.3 Error Bars and the Worst Acceptable Line

The worst acceptable line is the steepest (or shallowest) straight line that still passes through
All the error bars. The uncertainty in the gradient is:

$$\Delta m = \frac◆LB◆|m_{\mathrm{best}} - m_{\mathrm{worst}}|◆RB◆◆LB◆2◆RB◆$$

:::caution Warning Uncertainty is $\pm$ half the smallest scale division of the measuring instrument
used to obtain Each data point. State this assumption explicitly.

## 8. Common Pitfalls

1. **Using the wrong uncertainty for a single reading.** For an analogue instrument, the uncertainty
   is half the smallest division. For a digital instrument, it is the smallest division (the last
   digit). Do not use half the smallest division for a digital instrument.

2. **Using the range instead of the half-range.** The absolute uncertainty from repeated
   measurements is the half-range: $\Delta x = (x_{\max} - x_{\min})/2$Not the full range. Using the
   full range overestimates the uncertainty by a factor of 2.

3. **Confusing the line of best fit with the worst acceptable line.** The line of best fit passes as
   close as possible to all data points. The worst acceptable line is the steepest or shallowest
   line that passes through all error bars. These are different lines with different gradients.

4. **Forgetting to propagate uncertainty through intermediate calculations.** If you calculate $T^2$
   from $T$You must calculate the uncertainty in $T^2$ using the power rule before plotting. Do not
   plot the raw uncertainty in $T$ on the $T^2$ axis.

5. **Reporting uncertainty with too many significant figures.** Round the uncertainty to 1 or 2
   significant figures, then round the result to the same decimal place. For example, write
   $9.68 \pm 0.15$Not $9.678 \pm 0.1542$.

6. **Ignoring the uncertainty in the gradient when determining a physical constant.** Always use the
   worst acceptable line method to find the uncertainty in the gradient, and propagate this to the
   final result.

## 9. Extension Problem Set

<details>
<summary>Problem 1</summary>
A student measures the diameter of a wire using a micrometer. Five readings are: 0.52 mm, 0.53 mm, 0.52 mm, 0.54 mm, 0.53 mm. The micrometer has a zero error of $+0.01$ mm. Calculate the corrected mean diameter and its uncertainty.

**Answer.** Raw mean: $(0.52 + 0.53 + 0.52 + 0.54 + 0.53)/5 = 0.528$ mm. Range: $0.54 - 0.52 = 0.02$
Mm. Half-range: $\Delta d = 0.01$ mm.

Corrected mean: $0.528 - 0.01 = 0.518$ mm $\approx 0.52$ mm.

Result: $d = 0.52 \pm 0.01$ mm (after correcting for the zero error).

<b>If you get this wrong, revise:</b>
[Systematic and Random Errors](#1-systematic-and-random-errors)

</details>

<details>
<summary>Problem 2</summary>
The resistivity of a wire is $\rho = \pi d^2 R / (4L)$. Given $d = 0.52 \pm 0.01$ mm, $R = 8.5 \pm 0.2$ $\Omega$And $L = 1.200 \pm 0.005$ m, calculate $\rho$ and its percentage uncertainty.

**Answer.** Convert $d$ to metres: $d = 5.2 \times 10^{-4}$ m.

$\rho = \pi(5.2 \times 10^{-4})^2 \times 8.5 / (4 \times 1.200) = \pi \times 2.704 \times 10^{-7} \times 8.5 / 4.800 = 1.504 \times 10^{-6}$
$\Omega$ m.

Fractional uncertainties: $2(\Delta d/d) = 2(0.01/0.52) = 0.0385$ (for $d^2$),
$\Delta R/R = 0.2/8.5 = 0.0235$, $\Delta L/L = 0.005/1.200 = 0.0042$.

Total fractional uncertainty: $0.0385 + 0.0235 + 0.0042 = 0.0662 = 6.6\%$.

$\Delta\rho = 1.504 \times 10^{-6} \times 0.066 = 0.10 \times 10^{-6}$ $\Omega$ m.

Result: $\rho = (1.50 \pm 0.10) \times 10^{-6}$ $\Omega$ m (6.6%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

<details>
<summary>Problem 3</summary>
In an experiment to determine the specific heat capacity $c$ of a metal, a student uses $c = E/(m\Delta T)$ where $E = 1250 \pm 30$ J, $m = 0.150 \pm 0.005$ kg, and $\Delta T = 12.5 \pm 0.5$ K. Calculate $c$ and its uncertainty.

**Answer.** $c = 1250 / (0.150 \times 12.5) = 1250 / 1.875 = 667$ J kg$^{-1}$ K$^{-1}$.

Fractional uncertainties: $\Delta E/E = 30/1250 = 0.024$, $\Delta m/m = 0.005/0.150 = 0.033$
$\Delta T/\Delta T = 0.5/12.5 = 0.040$.

Total fractional uncertainty: $0.024 + 0.033 + 0.040 = 0.097 = 9.7\%$.

$\Delta c = 667 \times 0.097 = 65$ J kg$^{-1}$ K$^{-1}$.

Result: $c = 670 \pm 70$ J kg$^{-1}$ K$^{-1}$ (9.7%).

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

<details>
<summary>Problem 4</summary>
A digital thermometer displays $22.7$ °C. What is the absolute uncertainty in this reading? A student takes three readings: $22.7$, $22.8$, $22.7$ °C. What is the best estimate of the temperature and its uncertainty?

**Answer.** For a single digital reading, the absolute uncertainty is the smallest division:
$\pm 0.1$ °C.

For three repeated readings: mean $= (22.7 + 22.8 + 22.7)/3 = 22.73$ °C. Range $= 0.1$ °C.
Half-range $= 0.05$ °C.

Since the half-range ($0.05$ °C) is smaller than the instrument resolution ($0.1$ °C), the
Uncertainty is dominated by the instrument resolution. The best estimate is $22.7 \pm 0.1$ °C.

<b>If you get this wrong, revise:</b>
[Uncertainty from a Single Reading](#uncertainty-from-a-single-reading)

</details>

<details>
<summary>Problem 5</summary>
A graph of $\ln V$ against $t$ gives a gradient of $-0.025 \pm 0.002$ s$^{-1}$ and a $y$-intercept of $2.30 \pm 0.05$. The relationship is $\ln V = -kt + \ln V_0$. Determine $k$, $V_0$And their uncertainties.

**Answer.** From the gradient: $k = 0.025$ s$^{-1}$, $\Delta k = 0.002$ s$^{-1}$. Result:
$k = 0.025 \pm 0.002$ s$^{-1}$.

From the intercept: $\ln V_0 = 2.30$So $V_0 = e^{2.30} = 9.97 \approx 10.0$.

$\Delta(\ln V_0) = 0.05$. Since $V_0 = e^{\ln V_0}$: $\Delta V_0/V_0 = \Delta(\ln V_0) = 0.05$.

$\Delta V_0 = 10.0 \times 0.05 = 0.5$.

Result: $V_0 = 10.0 \pm 0.5$ (arbitrary units).

<b>If you get this wrong, revise:</b> [Linearising Data](#linearising-data)

</details>

<details>
<summary>Problem 6</summary>
A student determines the refractive index $n$ of glass by measuring the critical angle $\theta_c$. Five measurements of $\theta_c$ are: $41.5^\circ$$42.0^\circ$$41.8^\circ$$42.2^\circ$$41.6^\circ$. Using $n = 1/\sin\theta_c$Calculate $n$ and its uncertainty.

**Answer.** Mean $\theta_c = (41.5 + 42.0 + 41.8 + 42.2 + 41.6)/5 = 41.82^\circ$. Range
$= 42.2 - 41.5 = 0.7^\circ$. $\Delta\theta_c = 0.35^\circ$.

$n = 1/\sin(41.82°) = 1/0.6667 = 1.500$.

For the uncertainty, we need
$\Delta n/n = |\Delta(\sin\theta_c)/\sin\theta_c| = |\cos\theta_c \cdot \Delta\theta_c / \sin\theta_c| = \cot\theta_c \cdot \Delta\theta_c$.

Converting $\Delta\theta_c$ to radians: $0.35° = 0.00611$ rad.

$\Delta n/n = \cot(41.82°) \times 0.00611 = 1.118 \times 0.00611 = 0.00683 = 0.68\%$.

$\Delta n = 1.500 \times 0.00683 = 0.010$.

Result: $n = 1.500 \pm 0.010$.

<b>If you get this wrong, revise:</b> [Propagation of Uncertainty](#propagation-of-uncertainty)

</details>

## Summary

This topic covers the fundamental principles of measurements and error analysis, including the key
equations, experimental methods, and applications relevant to the specification.

**Key concepts include:**

- fundamental principles and equations
- SI units and dimensional analysis
- mathematical modelling of physical phenomena
- experimental techniques and measurement
- applications to real-world problems

A strong understanding of these principles, combined with regular practice of quantitative problems
and past paper questions, is essential for success in examinations.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

:::
