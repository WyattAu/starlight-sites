---
title: A Level Mathematics Diagnostic Test
description: "" = e^x(x^2+2x)$$v' = \cos x$.

$\dfrac{dy}{dx} = \dfrac◆LB◆e^x(x^2+2x)\sin x - x^2e^x\cos x◆RB◆◆LB◆\sin^2 x◆RB◆$.

**If you get this wrong, revise:**
[Differentiation](/docs/alevel/maths/pure-mathematics/differentiation)

</details>

<details>
<summary>Q13. Find the stationary points of $y = x^3 - 3x + 2$ and classify them.</summary>
$y' = 3x^2 - 3 = 0 \implies x = \pm 1$. $y'' = 6x$.

$x=1$: $y'' = 6 \gt 0$Minimum at $(1, 0)$. $x=-1$: $y'' = -6 \lt 0$Maximum at $(-1, 4)$.

**If you get this wrong, revise:**
[Differentiation](/docs/alevel/maths/pure-mathematics/differentiation)

</details>

<details>
<summary>Q14. A sphere's radius increases at $3\,\mathrm{cm/s}$. Find $dV/dt$ when $r = 5\,\mathrm{cm}$.</summary>
$V = \dfrac{4}{3}\pi r^3$. $\dfrac{dV}{dt} = 4\pi r^2\dfrac{dr}{dt} = 4\pi(25)(3) = 300\pi\,\mathrm{cm}^3/\mathrm{s}$.

**If you get this wrong, revise:**
[Differentiation](/docs/alevel/maths/pure-mathematics/differentiation)

</details>

### Integration

<details>
<summary>Q15. Evaluate $\displaystyle\int_0^1 x e^x\,dx$.</summary>
By parts: $u=x$$dv=e^x\,dx$. $I = [xe^x]_0^1 - \int_0^1 e^x\,dx = e - (e-1) = 1$.

**If you get this wrong, revise:** [Integration](/docs/alevel/maths/pure-mathematics/integration)

</details>

<details>
<summary>Q16. Find the area enclosed between $y = x^2$ and $y = x$.</summary>
Intersection: $x^2 = x \implies x = 0, 1$.

$A = \int_0^1 (x - x^2)\,dx = \left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_0^1 = \dfrac{1}{2} - \dfrac{1}{3} = \dfrac{1}{6}$.

**If you get this wrong, revise:** [Integration](/docs/alevel/maths/pure-mathematics/integration)

</details>

### Vectors

<details>
<summary>Q17. Find the angle between $\mathbf{a} = \begin{pmatrix}1\\2\\-1\end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix}3\\-1\\2\end{pmatrix}$.</summary>
$\mathbf{a}\cdot\mathbf{b} = 3-2-2 = -1$. $|\mathbf{a}| = \sqrt{6}$$|\mathbf{b}| = \sqrt{14}$.

$\cos\theta = \dfrac◆LB◆-1◆RB◆◆LB◆\sqrt{84}◆RB◆ \implies \theta \approx 96.3^\circ$.

**If you get this wrong, revise:** [Vectors](/docs/alevel/maths/pure-mathematics/vectors)

</details>

<details>
<summary>Q18. Write the equation of the line through $(1,2,-1)$ in direction $\begin{pmatrix}2\\-1\\3\end{pmatrix}$.</summary>
$\mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + t\begin{pmatrix}2\\-1\\3\end{pmatrix}$.

**If you get this wrong, revise:** [Vectors](/docs/alevel/maths/pure-mathematics/vectors)

</details>

### Proof

<details>
<summary>Q19. Prove by contradiction that $\sqrt{5}$ is irrational.</summary>
Suppose $\sqrt{5} = a/b$ in lowest terms. $5b^2 = a^2$So $5 \mid a^2 \implies 5 \mid a$. Write $a = 5k$: $5b^2 = 25k^2 \implies b^2 = 5k^2$So $5 \mid b$. Contradicts $\gcd(a,b)=1$. $\blacksquare$

**If you get this wrong, revise:** [Proof](/docs/alevel/maths/pure-mathematics/proof)

</details>

<details>
<summary>Q20. Prove by induction that $\displaystyle\sum_{r=1}^{n} r^2 = \dfrac{n(n+1)(2n+1)}{6}$.</summary>
*Base ($n=1$):* $1 = 1(2)(3)/6 = 1$. ✓
*Step:* $\dfrac{k(k+1)(2k+1)}{6} + (k+1)^2 = \dfrac{(k+1)[k(2k+1)+6(k+1)]}{6} = \dfrac{(k+1)(2k^2+7k+6)}{6} = \dfrac{(k+1)(k+2)(2k+3)}{6}$. ✓

**If you get this wrong, revise:** [Proof](/docs/alevel/maths/pure-mathematics/proof)

</details>

### Numerical Methods

<details>
<summary>Q21. Show $x^3 - x - 2 = 0$ has a root in $[1, 2]$.</summary>
$f(1) = -2 \lt 0$$f(2) = 4 \gt 0$. Sign change, continuous function $\implies$ root in $(1,2)$.

**If you get this wrong, revise:**
[Numerical Methods](/docs/alevel/maths/pure-mathematics/numerical-methods)

</details>

<details>
<summary>Q22. Use Newton-Raphson with $x_0=1.5$ to find $x_1$ for $f(x)=x^3-x-2=0$.</summary>
$f'(x)=3x^2-1$. $f(1.5)=3.375-1.5-2=-0.125$. $f'(1.5)=6.75-1=5.75$.

$x_1 = 1.5-(-0.125/5.75) = 1.5+0.0217 = 1.5217$.

**If you get this wrong, revise:**
[Numerical Methods](/docs/alevel/maths/pure-mathematics/numerical-methods)

</details>

<hr />

## Statistics

### Data Representation

<details>
<summary>Q23. Find the mean and standard deviation of $\{4, 8, 6, 2, 10\}$.</summary>
$\bar{x} = 30/5 = 6$. $\sum x^2 = 16+64+36+4+100 = 220$. $\sigma^2 = 220/5 - 36 = 44-36 = 8$. $\sigma = 2\sqrt{2} \approx 2.83$.

**If you get this wrong, revise:**
[Data Representation](/docs/alevel/maths/statistics/data-representation)

</details>

<details>
<summary>Q24. Data coded as $y = (x-50)/10$ has $\bar{y}=3$ and $\sigma_y=2$. Find the original mean and SD.</summary>
$\bar{x} = 10(3)+50 = 80$. $\sigma_x = 10(2) = 20$.

**If you get this wrong, revise:**
[Data Representation](/docs/alevel/maths/statistics/data-representation)

</details>

### Correlation and Regression

<details>
<summary>Q25. Given $S_{xx}=40$$S_{xy}=24$$S_{yy}=25$$\bar{x}=5$$\bar{y}=7$Find $r$ and the regression line of $y$ on $x$.</summary>
$r = \dfrac◆LB◆24◆RB◆◆LB◆\sqrt{40 \times 25}◆RB◆ = \dfrac◆LB◆24◆RB◆◆LB◆\sqrt{1000}◆RB◆ = \dfrac{24}{31.62} \approx 0.759$.

$b = 24/40 = 0.6$$a = 7 - 0.6(5) = 4$. Line: $y = 4 + 0.6x$.

**If you get this wrong, revise:**
[Correlation and Regression](/docs/alevel/maths/statistics/correlation-and-regression)

</details>

### Probability

<details>
<summary>Q26. $P(A)=0.6$$P(B)=0.5$$P(A \cap B)=0.3$. Find $P(A|B)$ and $P(A \cup B)$.</summary>
$P(A|B) = 0.3/0.5 = 0.6$. $P(A \cup B) = 0.6+0.5-0.3 = 0.8$.

**If you get this wrong, revise:** [Probability](/docs/alevel/maths/statistics/probability)

</details>

<details>
<summary>Q27. A bag has 5 red and 3 blue balls. Two are drawn without replacement. Find $P(\mathrm{both red})$.</summary>
$P = \dfrac{5}{8} \times \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14}$.

**If you get this wrong, revise:** [Probability](/docs/alevel/maths/statistics/probability)

</details>

<details>
<summary>Q28. A disease affects 2% of the population. A test is 95% accurate. Find $P(\mathrm{disease} \mid \mathrm{positive})$.</summary>
$P(T^+|D) = 0.95$$P(T^+|D') = 0.05$. $P(T^+) = 0.95(0.02) + 0.05(0.98) = 0.019 + 0.049 = 0.068$.

$P(D|T^+) = 0.019/0.068 = 19/68 \approx 0.279$.

**If you get this wrong, revise:** [Probability](/docs/alevel/maths/statistics/probability)

</details>

### Statistical Distributions

<details>
<summary>Q29. $X \sim B(12, 0.3)$. Find $P(X = 4)$.</summary>
$P(X=4) = \binom{12}{4}(0.3)^4(0.7)^8 = 495 \times 0.0081 \times 0.0576 \approx 0.2311$.

**If you get this wrong, revise:**
[Statistical Distributions](/docs/alevel/maths/statistics/statistical-distributions)

</details>

<details>
<summary>Q30. $X \sim N(100, 64)$. Find $P(X \gt 108)$.</summary>
$P(X \gt 108) = P(Z \gt 8/8) = P(Z \gt 1) = 1 - 0.8413 = 0.1587$.

**If you get this wrong, revise:**
[Statistical Distributions](/docs/alevel/maths/statistics/statistical-distributions)

</details>

<details>
<summary>Q31. $X \sim \mathrm{Po}(5)$. Find $P(X \leq 3)$.</summary>
$P(X \leq 3) = e^{-5}\left(1+5+\dfrac{25}{2}+\dfrac{125}{6}\right) = e^{-5}(1+5+12.5+20.833) = 39.333 \times 0.00674 \approx 0.2650$.

**If you get this wrong, revise:**
[Statistical Distributions](/docs/alevel/maths/statistics/statistical-distributions)

</details>

### Hypothesis Testing

<details>
<summary>Q32. A coin is tossed 20 times, landing heads 15 times. Test at 5% if biased towards heads.</summary>
$H_0: p=0.5$$H_1: p>0.5$. Under $H_0$: $X \sim B(20,0.5)$.

$P(X \geq 15) = 1-P(X \leq 14) \approx 0.0207 \lt 0.05$. **Reject** $H_0$: evidence of bias.

**If you get this wrong, revise:**
[Hypothesis Testing](/docs/alevel/maths/statistics/hypothesis-testing)

</details>

<details>
<summary>Q33. Define Type I and Type II errors.</summary>
Type I: Rejecting $H_0$ when $H_0$ is true (false positive).
Type II: Failing to reject $H_0$ when $H_0$ is false (false negative).

**If you get this wrong, revise:**
[Hypothesis Testing](/docs/alevel/maths/statistics/hypothesis-testing)

</details>

<hr />

## Mechanics

### Kinematics

<details>
<summary>Q34. A car accelerates from $15\,\mathrm{m/s}$ to $35\,\mathrm{m/s}$ over $200\,\mathrm{m}$. Find the acceleration.</summary>
$v^2 = u^2 + 2as \implies 1225 = 225 + 400a \implies a = 1000/400 = 2.5\,\mathrm{m/s}^2$.

**If you get this wrong, revise:** [Kinematics](/docs/alevel/maths/mechanics/kinematics)

</details>

<details>
<summary>Q35. A projectile is launched at $25\,\mathrm{m/s}$ at $50^\circ$ above horizontal. Find the maximum height.</summary>
$H = \dfrac◆LB◆(25\sin 50°)^2◆RB◆◆LB◆2(9.8)◆RB◆ = \dfrac{(19.15)^2}{19.6} = \dfrac{366.7}{19.6} \approx 18.71\,\mathrm{m}$.

**If you get this wrong, revise:** [Kinematics](/docs/alevel/maths/mechanics/kinematics)

</details>

<details>
<summary>Q36. A particle has velocity $v = 4t - t^2$ m/s. Find the total distance travelled from $t=0$ to $t=4$.</summary>
$v=0$ at $t=0,4$. For $0<t<4$: $v>0$. $s = \int_0^4(4t-t^2)\,dt = [2t^2-t^3/3]_0^4 = 32-64/3 = 32/3 \approx 10.67\,\mathrm{m}$.

**If you get this wrong, revise:** [Kinematics](/docs/alevel/maths/mechanics/kinematics)

</details>

### Forces and Newton's Laws

<details>
<summary>Q37. A $5\,\mathrm{kg}$ block on a rough surface ($\mu=0.4$) is pushed by $30\,\mathrm{N}$ horizontally. Find the acceleration.</summary>
$R = 49\,\mathrm{N}$. $F_{\max} = 19.6\,\mathrm{N}$. $a = (30-19.6)/5 = 10.4/5 = 2.08\,\mathrm{m/s}^2$.

**If you get this wrong, revise:**
[Forces and Newton's Laws](/docs/alevel/maths/mechanics/forces-and-newtons-laws)

</details>

<details>
<summary>Q38. Masses $8\,\mathrm{kg}$ and $5\,\mathrm{kg}$ hang over a smooth pulley. Find the acceleration and tension.</summary>
$8g-T=8a$$T-5g=5a$. Adding: $3g=13a \implies a = 3g/13 \approx 2.26\,\mathrm{m/s}^2$.

$T = 5(g+a) = 5(9.8+2.26) = 60.3\,\mathrm{N}$.

**If you get this wrong, revise:**
[Forces and Newton's Laws](/docs/alevel/maths/mechanics/forces-and-newtons-laws)

</details>

### Moments

<details>
<summary>Q39. A uniform beam of length $6\,\mathrm{m}$ and weight $300\,\mathrm{N}$ is supported at both ends. A $200\,\mathrm{N}$ load is $2\,\mathrm{m}$ from the left end. Find the reactions.</summary>
Moments about left end: $R_R \times 6 = 300 \times 3 + 200 \times 2 = 1300 \implies R_R = 216.7\,\mathrm{N}$.

$R_L = 500 - 216.7 = 283.3\,\mathrm{N}$.

**If you get this wrong, revise:** [Moments](/docs/alevel/maths/mechanics/moments)

</details>

<details>
<summary>Q40. Find the centre of mass of masses $3\,\mathrm{kg}$$4\,\mathrm{kg}$$5\,\mathrm{kg}$ at $(0,0)$$(6,0)$$(3,4)$.</summary>
$\bar{x} = \dfrac{0+24+15}{12} = 39/12 = 3.25$. $\bar{y} = \dfrac{0+0+20}{12} = 5/3 \approx 1.67$.

**If you get this wrong, revise:** [Moments](/docs/alevel/maths/mechanics/moments)

</details>

### Energy and Work

<details>
<summary>Q41. A car of mass $1000\,\mathrm{kg}$ has engine power $40\,\mathrm{kW}$. Find the maximum speed against a resistance of $500\,\mathrm{N}$.</summary>
$P = Fv \implies 40000 = 500v \implies v = 80\,\mathrm{m/s}$.

**If you get this wrong, revise:** [Energy and Work](/docs/alevel/maths/mechanics/energy-and-work)

</details>

<details>
<summary>Q42. A $2\,\mathrm{kg}$ ball is dropped from $15\,\mathrm{m}$. Find its speed just before impact using energy conservation.</summary>
$mgh = \tfrac{1}{2}mv^2 \implies v = \sqrt{2(9.8)(15)} = \sqrt{294} \approx 17.1\,\mathrm{m/s}$.

**If you get this wrong, revise:** [Energy and Work](/docs/alevel/maths/mechanics/energy-and-work)

</details>

### Momentum

<details>
<summary>Q43. A $4\,\mathrm{kg}$ body moving at $6\,\mathrm{m/s}$ collides with a $2\,\mathrm{kg}$ body at rest. They stick together. Find the common velocity.</summary>
$4(6) + 2(0) = 6v \implies v = 4\,\mathrm{m/s}$.

**If you get this wrong, revise:** [Momentum](/docs/alevel/maths/mechanics/momentum)

</details>

<details>
<summary>Q44. A ball hits a wall at $10\,\mathrm{m/s}$ and rebounds at $7\,\mathrm{m/s}$. If its mass is $0.15\,\mathrm{kg}$Find the impulse.</summary>
$J = m(v-u) = 0.15(-7-10) = 0.15(-17) = -2.55\,\mathrm{Ns}$. Magnitude: $2.55\,\mathrm{Ns}$.

**If you get this wrong, revise:** [Momentum](/docs/alevel/maths/mechanics/momentum)

</details>

<details>
<summary>Q45. Two bodies ($3\,\mathrm{kg}$ at $5\,\mathrm{m/s}$$2\,\mathrm{kg}$ at $-3\,\mathrm{m/s}$) collide with $e=0.5$. Find the velocities after collision.</summary>
Momentum: $15-6 = 3v_1+2v_2 \implies 3v_1+2v_2 = 9$.
Restitution: $v_2-v_1 = 0.5(5-(-3)) = 4 \implies v_2 = v_1+4$.

$3v_1+2(v_1+4) = 9 \implies 5v_1 = 1 \implies v_1 = 0.2\,\mathrm{m/s}$$v_2 = 4.2\,\mathrm{m/s}$.

**If you get this wrong, revise:** [Momentum](/docs/alevel/maths/mechanics/momentum)

</details>

<hr />

## Scoring and Revision Guide

| Score    | Action                              |
| -------- | ----------------------------------- |
| 40–45    | Excellent — focus on exam technique |
| 30–39    | Good — revise weak topics           |
| 20–29    | Fair — systematic revision needed   |
| Below 20 | Significant revision required       |

Use the revision links under each question to jump directly to the relevant topic notes.

## Common Pitfalls

1. Forgetting to check that solutions satisfy the original equation (especially with squaring both
   sides or dividing by variables).

2. Losing marks by not showing sufficient working — always write out each step, especially in proof
   questions.

3. Forgetting the $+c$ constant of integration in indefinite integrals, or misusing boundary
   conditions in definite integrals.

4. Dropping negative signs during algebraic manipulation — substitute back to verify your answer.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
