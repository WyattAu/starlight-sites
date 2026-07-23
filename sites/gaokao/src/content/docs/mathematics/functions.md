---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "gaokao", "url": "https://gaokao.wyattau.com"}, {"name": "Mathematics", "url": "https://gaokao.wyattau.com/mathematics"}, {"name": "Functions", "url": "https://gaokao.wyattau.com/mathematics/functions"}]
}
</script>
title: "Functions"
description: "高考 mathematics: Functions"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "gaokao", "url": "https://gaokao.wyattau.com"}, {"name": "Mathematics", "url": "https://gaokao.wyattau.com/mathematics"}, {"name": "Functions", "url": "https://gaokao.wyattau.com/mathematics/functions"}]
}
</script>

## Functions

高考 mathematics 学习笔记 - Functions

## 核心概念

### 函数的定义

函数 $y = f(x)$ 的三要素：定义域、对应关系、值域。

**常见函数类型：**
- 一次函数：$f(x) = kx + b$（$k \neq 0$）
- 二次函数：$f(x) = ax^2 + bx + c$（$a \neq 0$）
- 反比例函数：$f(x) = \frac{k}{x}$（$k \neq 0$）
- 指数函数：$f(x) = a^x$（$a > 0, a \neq 1$）
- 对数函数：$f(x) = \log_a x$（$a > 0, a \neq 1$）

### 函数的基本性质

**单调性：**
- 增函数：$x_1 < x_2 \Rightarrow f(x_1) < f(x_2)$
- 减函数：$x_1 < x_2 \Rightarrow f(x_1) > f(x_2)$

**奇偶性：**
- 偶函数：$f(-x) = f(x)$，图像关于 $y$ 轴对称
- 奇函数：$f(-x) = -f(x)$，图像关于原点对称

**周期性：** 若存在非零常数 $T$ 使得 $f(x + T) = f(x)$ 对定义域内所有 $x$ 成立，则 $f(x)$ 是周期函数。

### 二次函数

**标准形式：** $f(x) = a(x - h)^2 + k$，顶点为 $(h, k)$

**顶点公式：** $h = -\frac{b}{2a}$，$k = \frac{4ac - b^2}{4a}$

**对称轴：** $x = -\frac{b}{2a}$

### 指数与对数

**指数运算律：**
$$a^m \cdot a^n = a^{m+n}, \quad \frac{a^m}{a^n} = a^{m-n}, \quad (a^m)^n = a^{mn}$$

**对数运算律：**
$$\log_a(MN) = \log_a M + \log_a N$$
$$\log_a \frac{M}{N} = \log_a M - \log_a N$$
$$\log_a M^n = n \log_a M$$

**换底公式：** $\log_a b = \frac{\ln b}{\ln a} = \frac{\log_c b}{\log_c a}$

## 典型例题

### 例题1：求函数定义域

**题目：** 求函数 $f(x) = \frac{\sqrt{x - 1}}{\ln(x + 1)}$ 的定义域。

**解答：**

步骤1：各部分有意义的条件：
- 根号内非负：$x - 1 \geq 0$，即 $x \geq 1$
- 分母不为零：$\ln(x + 1) \neq 0$，即 $x + 1 \neq 1$，即 $x \neq 0$
- 对数真数为正：$x + 1 > 0$，即 $x > -1$

步骤2：取交集：$x \geq 1$ 且 $x \neq 0$ 且 $x > -1$

步骤3：定义域为 $[1, +\infty)$

**答案：** 定义域为 $[1, +\infty)$

### 例题2：二次函数最值

**题目：** 已知函数 $f(x) = -x^2 + 4x - 3$，求其在区间 $[0, 5]$ 上的最大值和最小值。

**解答：**

步骤1：配方：$f(x) = -(x - 2)^2 + 1$，对称轴 $x = 2$，顶点 $(2, 1)$

步骤2：比较端点值和顶点值：
- $f(0) = -3$
- $f(2) = 1$（顶点，在区间内）
- $f(5) = -25 + 20 - 3 = -8$

步骤3：最大值为 $f(2) = 1$，最小值为 $f(5) = -8$

**答案：** 最大值为 $1$，最小值为 $-8$

### 例题3：指数与对数

**题目：** 解方程 $2^{x+1} - 2^x = 3$。

**解答：**

步骤1：化简左边：
$$2^{x+1} - 2^x = 2 \cdot 2^x - 2^x = 2^x(2 - 1) = 2^x$$

步骤2：方程化为 $2^x = 3$

步骤3：两边取对数：$x = \log_2 3 = \frac{\ln 3}{\ln 2}$

**答案：** $x = \log_2 3$

## 考试技巧

1. 求定义域时，注意分母、根号、对数、指数等各部分的限制条件
2. 二次函数在闭区间上的最值，需讨论对称轴是否在区间内
3. 指数方程通常通过化为同底或取对数求解
4. 利用函数单调性比较大小时，先确定底数与1的关系

## 练习题

1. 求函数 $f(x) = \log_2(x^2 - 1)$ 的定义域
2. 已知 $f(x) = x^2 - 2x + 3$，求其在 $[-1, 3]$ 上的最值
3. 比较 $2^{0.3}$ 与 $0.3^2$ 的大小

### 例题4：函数的奇偶性

**题目：** 判断函数 $f(x) = \dfrac{e^x - e^{-x}}{e^x + e^{-x}}$ 的奇偶性。

**解答：**

步骤1：定义域为 $\mathbb{R}$，关于原点对称。

步骤2：计算 $f(-x)$：
$$f(-x) = \frac{e^{-x} - e^x}{e^{-x} + e^x} = \frac{-(e^x - e^{-x})}{e^x + e^{-x}} = -f(x)$$

步骤3：由 $f(-x) = -f(x)$，$f(x)$ 为奇函数。

**答案：** $f(x)$ 为奇函数

### 例题5：指数方程

**题目：** 解方程 $4^x - 6 \cdot 2^x + 8 = 0$。

**解答：**

步骤1：令 $t = 2^x$（$t > 0$），则 $4^x = t^2$。

步骤2：方程化为 $t^2 - 6t + 8 = 0$。

步骤3：分解因式：$(t-2)(t-4) = 0$，得 $t = 2$ 或 $t = 4$。

步骤4：回代：
- $2^x = 2 \implies x = 1$
- $2^x = 4 \implies x = 2$

**答案：** $x = 1$ 或 $x = 2$

### 例题6：对数方程

**题目：** 解方程 $\log_2(x+3) + \log_2(x-1) = 3$。

**解答：**

步骤1：由对数定义，真数须为正：
$$x + 3 > 0 \implies x > -3$$
$$x - 1 > 0 \implies x > 1$$

步骤2：合并对数：
$$\log_2[(x+3)(x-1)] = 3$$

步骤3：化为指数形式：
$$(x+3)(x-1) = 8$$

步骤4：展开并整理：
$$x^2 + 2x - 3 = 8 \implies x^2 + 2x - 11 = 0$$

步骤5：求解：$x = \frac{-2 \pm \sqrt{4 + 44}}{2} = \frac{-2 \pm \sqrt{48}}{2} = -1 \pm 2\sqrt{3}$

步骤6：检验 $x > 1$：$-1 + 2\sqrt{3} \approx 2.46 > 1$（满足），$-1 - 2\sqrt{3} < 0$（舍去）

**答案：** $x = -1 + 2\sqrt{3}$

## 更多典型例题

### 例题7：函数的单调性判断

**题目：** 判断函数 $f(x) = x + \dfrac{4}{x}$ 在 $(0, +\infty)$ 上的单调性。

**解答：**

步骤1：设 $0 < x_1 < x_2$，计算 $f(x_1) - f(x_2)$：
$$f(x_1) - f(x_2) = \left(x_1 + \frac{4}{x_1}\right) - \left(x_2 + \frac{4}{x_2}\right)$$
$$= (x_1 - x_2) + \frac{4(x_2 - x_1)}{x_1 x_2} = (x_1 - x_2)\left(1 - \frac{4}{x_1 x_2}\right)$$

步骤2：分析符号：
- 当 $0 < x_1 < x_2 < 2$ 时，$x_1 x_2 < 4$，故 $1 - \frac{4}{x_1 x_2} < 0$，又 $x_1 - x_2 < 0$，所以 $f(x_1) - f(x_2) > 0$，即 $f(x)$ 递减。
- 当 $2 < x_1 < x_2$ 时，$x_1 x_2 > 4$，故 $1 - \frac{4}{x_1 x_2} > 0$，又 $x_1 - x_2 < 0$，所以 $f(x_1) - f(x_2) < 0$，即 $f(x)$ 递增。

**答案：** $f(x)$ 在 $(0, 2)$ 上单调递减，在 $(2, +\infty)$ 上单调递增

**考试技巧：** 函数 $f(x) = x + \frac{k}{x}$（$k > 0$）的单调性是高考常考内容，其极小值在 $x = \sqrt{k}$ 处取得，极小值为 $2\sqrt{k}$。

### 例题8：指数与对数的综合

**题目：** 若 $2^a = 5^b = 10$，求 $\dfrac{1}{a} + \dfrac{1}{b}$ 的值。

**解答：**

步骤1：由 $2^a = 10$，取对数得 $a \lg 2 = \lg 10 = 1$，故 $\dfrac{1}{a} = \lg 2$。

步骤2：由 $5^b = 10$，取对数得 $b \lg 5 = \lg 10 = 1$，故 $\dfrac{1}{b} = \lg 5$。

步骤3：相加：
$$\frac{1}{a} + \frac{1}{b} = \lg 2 + \lg 5 = \lg(2 \times 5) = \lg 10 = 1$$

**答案：** $\dfrac{1}{a} + \dfrac{1}{b} = 1$

**常见错误：** 混淆 $\lg$（以10为底）和 $\ln$（自然对数）。高考中 $\lg$ 通常指 $\log_{10}$。

### 例题9：二次函数与方程的综合

**题目：** 已知函数 $f(x) = x^2 - 2ax + a + 2$。若对任意 $x \in [0, 2]$，$f(x) \geq 0$ 恒成立，求 $a$ 的取值范围。

**解答：**

步骤1：$f(x) = (x - a)^2 + a + 2 - a^2$，对称轴为 $x = a$。

步骤2：分类讨论：
- 当 $a < 0$ 时，$f(x)$ 在 $[0, 2]$ 上递增，最小值为 $f(0) = a + 2 \geq 0$，得 $a \geq -2$。故 $-2 \leq a < 0$。
- 当 $0 \leq a \leq 2$ 时，最小值为 $f(a) = a + 2 - a^2 \geq 0$，即 $a^2 - a - 2 \leq 0$，$(a-2)(a+1) \leq 0$，得 $-1 \leq a \leq 2$。故 $0 \leq a \leq 2$。
- 当 $a > 2$ 时，$f(x)$ 在 $[0, 2]$ 上递减，最小值为 $f(2) = 6 - 3a \geq 0$，得 $a \leq 2$。无解。

步骤3：综合得 $-2 \leq a \leq 2$。

**答案：** $a$ 的取值范围为 $[-2, 2]$

**考试技巧：** 恒成立问题通常转化为最值问题。对二次函数在闭区间上的最值，需根据对称轴位置分类讨论。

### 例题10：函数的周期性与奇偶性

**题目：** 已知 $f(x)$ 是定义在 $\mathbb{R}$ 上的奇函数，且满足 $f(x + 2) = -f(x)$，求 $f(2025)$ 的值。

**解答：**

步骤1：由 $f(x + 2) = -f(x)$，得 $f(x + 4) = f((x + 2) + 2) = -f(x + 2) = f(x)$，故 $f(x)$ 是周期为 $4$ 的周期函数。

步骤2：$f(2025) = f(4 \times 506 + 1) = f(1)$

步骤3：由 $f(x)$ 是奇函数，$f(0) = 0$。又 $f(2) = -f(0) = 0$

步骤4：$f(1) = -f(-1) = -(-f(1))$，无法直接求出。但由 $f(2) = -f(0) = 0$，$f(1) = -f(-1)$，且 $f(1) = -f(1 + 2) = -f(3)$

步骤5：实际上，$f(2025) = f(1)$，而由 $f(x + 2) = -f(x)$，$f(1) = -f(-1) = -(-f(1)) = f(1)$，无法确定具体值。需要额外条件。

**注意：** 本题需要补充条件如 $f(1) = a$ 才能求出具体值。若 $f(1) = 1$，则 $f(2025) = 1$。

**考试技巧：** 周期性与奇偶性结合的问题，先求周期，再利用奇偶性转化到已知区间。

### 例题11：对数函数的综合应用

**题目：** 已知函数 $f(x) = \log_a(x + 1)$（$a > 0$ 且 $a \neq 1$），若 $f(x)$ 在 $(-1, +\infty)$ 上单调递增，求 $a$ 的取值范围。

**解答：**

步骤1：$f(x) = \log_a(x + 1)$ 的定义域为 $(-1, +\infty)$

步骤2：令 $t = x + 1$，则 $t > 0$，$f(x) = \log_a t$

步骤3：$t = x + 1$ 在 $(-1, +\infty)$ 上单调递增

步骤4：要使 $f(x)$ 在 $(-1, +\infty)$ 上单调递增：
- 若 $a > 1$，$\log_a t$ 关于 $t$ 递增，复合后 $f(x)$ 递增
- 若 $0 < a < 1$，$\log_a t$ 关于 $t$ 递减，复合后 $f(x)$ 递减

步骤5：故 $a > 1$

**答案：** $a > 1$，即 $a \in (1, +\infty)$

**常见错误：** 复合函数单调性判断遵循"同增异减"原则。内外层函数单调性相同则复合函数递增，相反则递减。

### 例题12：函数图像的变换

**题目：** 已知函数 $f(x) = 2^x$，将 $f(x)$ 的图像向右平移 $2$ 个单位，再向下平移 $1$ 个单位，求所得函数的解析式。

**解答：**

步骤1：$f(x) = 2^x$ 向右平移 $2$ 个单位：$y = 2^{x-2}$

步骤2：再向下平移 $1$ 个单位：$y = 2^{x-2} - 1$

步骤3：所得函数为 $g(x) = 2^{x-2} - 1$

步骤4：验证：$g(x)$ 的图像过点 $(2, 0)$，因为 $2^{2-2} - 1 = 1 - 1 = 0$

**答案：** $g(x) = 2^{x-2} - 1$

**考试技巧：** 函数图像变换遵循"左加右减，上加下减"原则。注意平移是针对 $x$ 还是整个函数。

## Intuition

Functions are like vending machines. You put in a specific amount of money (input), press a button (the function), and get a specific snack (output). The same input always gives the same output, which is why functions are predictable and useful. Domain is the set of coins the machine accepts; range is the set of snacks it can dispense.

The graph of a function is like a footprint. It shows you where the function has been and where it is going. The slope tells you how steep the climb is; the intercept tells you where the journey starts. Reading a graph is like reading a hiking trail map: you can see the terrain without actually walking the path.

## Cross-References

- [Algebra](/gaokao/mathematics/algebra) - Algebraic foundations that enable function composition and equation solving
- [Geometry](/gaokao/mathematics/geometry) - Geometric interpretation of function graphs and transformations
- [Inorganic Chemistry](/gaokao/chemistry/inorganic) - How equilibrium and rate functions apply to chemical reaction modeling

## Common Mistakes

**Confusing the domain restrictions for logarithmic and radical functions.** When finding the domain, each part must be satisfied simultaneously: radicands must be non-negative, logarithm arguments must be positive, and denominators must be non-zero. Students often forget one of these conditions, leading to incomplete domain answers.

**Misapplying the composite function monotonicity rule.** The rule is "same direction = increasing, opposite direction = decreasing" for composite functions. If both inner and outer functions are increasing, the composite is increasing. If one increases and the other decreases, the composite is decreasing. Students often reverse this rule.

**Forgetting to check the base of logarithms when comparing sizes.** When comparing log values, the base determines whether the function is increasing (base > 1) or decreasing (0 < base < 1). If the base is less than 1, larger arguments give smaller logarithm values, which reverses the inequality direction.
