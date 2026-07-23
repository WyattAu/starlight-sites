---

title: "Geometry"
description: "高考 mathematics: Geometry with vectors, conic sections, and worked examples."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "gaokao", "url": "https://gaokao.wyattau.com"}, {"name": "Mathematics", "url": "https://gaokao.wyattau.com/mathematics"}, {"name": "Geometry", "url": "https://gaokao.wyattau.com/mathematics/geometry"}]
}
</script>

## Geometry

高考 mathematics 学习笔记 - Geometry

## 核心概念

### 平面向量

**向量加法：** $\vec{a} + \vec{b} = (a_1 + b_1, a_2 + b_2)$

**向量数乘：** $\lambda \vec{a} = (\lambda a_1, \lambda a_2)$

**数量积（点积）：** $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = a_1 b_1 + a_2 b_2$

**向量模：** $|\vec{a}| = \sqrt{a_1^2 + a_2^2}$

**两向量垂直：** $\vec{a} \perp \vec{b} \Leftrightarrow \vec{a} \cdot \vec{b} = 0$

**两向量平行：** $\vec{a} \parallel \vec{b} \Leftrightarrow a_1 b_2 - a_2 b_1 = 0$

### 解析几何

**直线方程：**
- 斜截式：$y = kx + b$
- 点斜式：$y - y_0 = k(x - x_0)$
- 一般式：$Ax + By + C = 0$

**点到直线距离：** 点 $(x_0, y_0)$ 到直线 $Ax + By + C = 0$ 的距离：
$$d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$$

**圆的标准方程：** $(x - a)^2 + (y - b)^2 = r^2$

**椭圆标准方程：** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$（$a > b > 0$），焦点在 $x$ 轴上

**双曲线标准方程：** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$（$a > 0, b > 0$）

**抛物线标准方程：** $y^2 = 2px$（$p > 0$，开口向右）

### 立体几何

**空间向量：** 设 $\vec{a} = (a_1, a_2, a_3)$，$\vec{b} = (b_1, b_2, b_3)$：
$$\vec{a} \cdot \vec{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

**异面直线所成角：** $\cos\theta = \frac{|\vec{a} \cdot \vec{b}|}{|\vec{a}||\vec{b}|}$

**二面角：** 通过求两个半平面的法向量的夹角

## 典型例题

### 例题1：向量运算

**题目：** 已知向量 $\vec{a} = (1, 2)$，$\vec{b} = (3, -1)$，求 $\vec{a} \cdot \vec{b}$ 和 $|\vec{a} + \vec{b}|$。

**解答：**

步骤1：计算数量积：
$$\vec{a} \cdot \vec{b} = 1 \times 3 + 2 \times (-1) = 3 - 2 = 1$$

步骤2：计算 $\vec{a} + \vec{b} = (1 + 3, 2 + (-1)) = (4, 1)$

步骤3：计算模：
$$|\vec{a} + \vec{b}| = \sqrt{4^2 + 1^2} = \sqrt{17}$$

**答案：** $\vec{a} \cdot \vec{b} = 1$，$|\vec{a} + \vec{b}| = \sqrt{17}$

### 例题2：椭圆

**题目：** 已知椭圆 $\frac{x^2}{9} + \frac{y^2}{4} = 1$，求其焦点坐标和离心率。

**解答：**

步骤1：识别 $a^2 = 9$，$b^2 = 4$，故 $a = 3$，$b = 2$

步骤2：计算 $c$：$c^2 = a^2 - b^2 = 9 - 4 = 5$，故 $c = \sqrt{5}$

步骤3：焦点坐标为 $(\pm\sqrt{5}, 0)$

步骤4：离心率 $e = \frac{c}{a} = \frac{\sqrt{5}}{3}$

**答案：** 焦点为 $(\pm\sqrt{5}, 0)$，离心率为 $\frac{\sqrt{5}}{3}$

### 例题3：点到直线距离

**题目：** 求点 $(2, -1)$ 到直线 $3x - 4y + 5 = 0$ 的距离。

**解答：**

步骤1：识别 $A = 3, B = -4, C = 5, x_0 = 2, y_0 = -1$

步骤2：代入距离公式：
$$d = \frac{|3 \times 2 - 4 \times (-1) + 5|}{\sqrt{3^2 + (-4)^2}} = \frac{|6 + 4 + 5|}{\sqrt{25}} = \frac{15}{5} = 3$$

**答案：** 距离为 $3$

## 考试技巧

1. 向量问题中，垂直条件 $\vec{a} \cdot \vec{b} = 0$ 是最常考的知识点
2. 解析几何中联立方程组消元后，判别式 $\Delta$ 决定交点个数
3. 椭圆、双曲线中 $c^2 = a^2 - b^2$（椭圆）或 $c^2 = a^2 + b^2$（双曲线）
4. 立体几何中建立空间直角坐标系可以简化角度计算

## 练习题

1. 已知 $\vec{a} = (2, -3)$，$\vec{b} = (1, 2)$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角
2. 求双曲线 $\frac{x^2}{4} - \frac{y^2}{9} = 1$ 的渐近线方程
3. 求过点 $(1, 2)$ 且与直线 $x + y - 1 = 0$ 垂直的直线方程

### 例题4：向量垂直与平行

**题目：** 已知向量 $\vec{a} = (2, -1)$，$\vec{b} = (x, 4)$。若 $\vec{a} \perp \vec{b}$，求 $x$ 的值；若 $\vec{a} \parallel \vec{b}$，求 $x$ 的值。

**解答：**

垂直情况：$\vec{a} \cdot \vec{b} = 0$
$$2x + (-1) \times 4 = 0 \implies 2x - 4 = 0 \implies x = 2$$

平行情况：$a_1 b_2 - a_2 b_1 = 0$
$$2 \times 4 - (-1) \times x = 0 \implies 8 + x = 0 \implies x = -8$$

**答案：** 垂直时 $x = 2$，平行时 $x = -8$

**常见错误：** 混淆垂直和平行的判定条件。垂直用数量积为零，平行用坐标交叉相乘为零。

### 例题5：椭圆与直线的位置关系

**题目：** 已知椭圆 $\frac{x^2}{4} + \frac{y^2}{3} = 1$ 和直线 $y = x + 1$，判断直线与椭圆的位置关系。

**解答：**

步骤1：将 $y = x + 1$ 代入椭圆方程：
$$\frac{x^2}{4} + \frac{(x+1)^2}{3} = 1$$

步骤2：通分整理：
$$3x^2 + 4(x^2 + 2x + 1) = 12$$
$$7x^2 + 8x - 8 = 0$$

步骤3：计算判别式：
$$\Delta = 64 - 4 \times 7 \times (-8) = 64 + 224 = 288 > 0$$

步骤4：$\Delta > 0$，直线与椭圆相交于两个不同的点。

**答案：** 直线与椭圆相交

**常见错误：** 忘记判别式的符号与交点个数的对应关系。$\Delta > 0$ 时有两个交点，$\Delta = 0$ 时相切，$\Delta < 0$ 时无交点。

### 例题6：双曲线的渐近线

**题目：** 求双曲线 $\frac{x^2}{9} - \frac{y^2}{16} = 1$ 的渐近线方程和离心率。

**解答：**

步骤1：识别 $a^2 = 9$，$b^2 = 16$，故 $a = 3$，$b = 4$

步骤2：渐近线方程为 $y = \pm\frac{b}{a}x = \pm\frac{4}{3}x$

步骤3：计算 $c$：$c^2 = a^2 + b^2 = 9 + 16 = 25$，故 $c = 5$

步骤4：离心率 $e = \frac{c}{a} = \frac{5}{3}$

**答案：** 渐近线为 $y = \pm\frac{4}{3}x$，离心率为 $\frac{5}{3}$

**常见错误：** 椭圆中 $c^2 = a^2 - b^2$，双曲线中 $c^2 = a^2 + b^2$。两者不要混淆。

## 更多典型例题

### 例题7：抛物线的焦点弦

**题目：** 已知抛物线 $y^2 = 4x$ 的焦点为 $F$，过 $F$ 作直线交抛物线于 $A$、$B$ 两点。若 $|AB| = 8$，求直线 $AB$ 的方程。

**解答：**

步骤1：抛物线 $y^2 = 4x$ 的焦点 $F(1, 0)$，准线 $x = -1$。

步骤2：设直线 $AB$ 的参数方程为 $x = 1 + t\cos\theta$，$y = t\sin\theta$。

步骤3：由抛物线的焦点弦性质，$|AB| = x_A + x_B + p = x_A + x_B + 2$。

步骤4：由 $|AB| = 8$，得 $x_A + x_B = 6$。

步骤5：将 $y = k(x - 1)$ 代入 $y^2 = 4x$：
$$k^2(x-1)^2 = 4x$$
$$k^2 x^2 - (2k^2 + 4)x + k^2 = 0$$

步骤6：由韦达定理：$x_A + x_B = \dfrac{2k^2 + 4}{k^2} = 2 + \dfrac{4}{k^2} = 6$，解得 $k^2 = 1$，$k = \pm 1$。

**答案：** 直线方程为 $y = x - 1$ 或 $y = -x + 1$

**常见错误：** 抛物线 $y^2 = 2px$ 的焦点弦长公式为 $|AB| = x_A + x_B + p$，不要与椭圆、双曲线的弦长公式混淆。

### 例题8：直线与圆的位置关系

**题目：** 已知圆 $C$：$x^2 + y^2 - 4x + 2y - 4 = 0$，求过点 $P(2, 1)$ 的最长弦和最短弦的方程。

**解答：**

步骤1：将圆的方程化为标准形式：
$$(x - 2)^2 + (y + 1)^2 = 9$$
圆心 $C(2, -1)$，半径 $r = 3$。

步骤2：点 $P(2, 1)$ 到圆心的距离：
$$d = |CP| = \sqrt{(2-2)^2 + (1-(-1))^2} = 2 < r = 3$$
点 $P$ 在圆内。

步骤3：最长弦为过 $P$ 和圆心 $C$ 的直径，即直线 $x = 2$。

步骤4：最短弦与 $CP$ 垂直。$CP$ 的斜率不存在（竖直线），故最短弦为水平线 $y = 1$。

步骤5：验证：最短弦长 $= 2\sqrt{r^2 - d^2} = 2\sqrt{9 - 4} = 2\sqrt{5}$。

**答案：** 最长弦方程为 $x = 2$，最短弦方程为 $y = 1$

### 例题9：向量在解析几何中的应用

**题目：** 已知椭圆 $\dfrac{x^2}{4} + \dfrac{y^2}{3} = 1$，点 $P$ 为椭圆上一点，$A(-2, 0)$，$B(2, 0)$。求 $\vec{PA} \cdot \vec{PB}$ 的取值范围。

**解答：**

步骤1：设 $P(x_0, y_0)$，则 $\dfrac{x_0^2}{4} + \dfrac{y_0^2}{3} = 1$，即 $y_0^2 = 3\left(1 - \dfrac{x_0^2}{4}\right)$。

步骤2：计算向量：
$$\vec{PA} = (-2 - x_0, -y_0), \quad \vec{PB} = (2 - x_0, -y_0)$$

步骤3：计算数量积：
$$\vec{PA} \cdot \vec{PB} = (-2 - x_0)(2 - x_0) + y_0^2 = x_0^2 - 4 + y_0^2$$

步骤4：代入 $y_0^2$：
$$\vec{PA} \cdot \vec{PB} = x_0^2 - 4 + 3 - \frac{3x_0^2}{4} = \frac{x_0^2}{4} - 1$$

步骤5：由 $x_0 \in [-2, 2]$，得 $x_0^2 \in [0, 4]$，故 $\dfrac{x_0^2}{4} - 1 \in [-1, 0]$。

**答案：** $\vec{PA} \cdot \vec{PB}$ 的取值范围为 $[-1, 0]$

**考试技巧：** 向量与解析几何结合时，通常设点的坐标，利用曲线方程消元后转化为函数的最值问题。

### 例题10：椭圆的焦点三角形

**题目：** 已知椭圆 $\dfrac{x^2}{25} + \dfrac{y^2}{9} = 1$ 上一点 $P$ 到两焦点的距离之比为 $2:1$，求 $\triangle PF_1F_2$ 的面积。

**解答：**

步骤1：$a^2 = 25$，$b^2 = 9$，故 $a = 5$，$b = 3$，$c = \sqrt{25 - 9} = 4$

步骤2：设 $|PF_1| = 2k$，$|PF_2| = k$，由椭圆定义：$|PF_1| + |PF_2| = 2a = 10$，故 $3k = 10$，$k = \dfrac{10}{3}$

步骤3：$|PF_1| = \dfrac{20}{3}$，$|PF_2| = \dfrac{10}{3}$

步骤4：$|F_1F_2| = 2c = 8$

步骤5：由余弦定理：$\cos\angle F_1PF_2 = \dfrac{|PF_1|^2 + |PF_2|^2 - |F_1F_2|^2}{2|PF_1||PF_2|} = \dfrac{\frac{400}{9} + \frac{100}{9} - 64}{2 \times \frac{20}{3} \times \frac{10}{3}} = \dfrac{\frac{500}{9} - 64}{\frac{400}{9}} = \dfrac{500 - 576}{400} = -\dfrac{76}{400} = -\dfrac{19}{100}$

步骤6：$\sin\angle F_1PF_2 = \sqrt{1 - \left(-\dfrac{19}{100}\right)^2} = \sqrt{1 - \dfrac{361}{10000}} = \sqrt{\dfrac{9639}{10000}} = \dfrac{\sqrt{9639}}{100}$

步骤7：面积 $S = \dfrac{1}{2}|PF_1||PF_2|\sin\angle F_1PF_2 = \dfrac{1}{2} \times \dfrac{20}{3} \times \dfrac{10}{3} \times \dfrac{\sqrt{9639}}{100} = \dfrac{100}{9} \times \dfrac{\sqrt{9639}}{100} = \dfrac{\sqrt{9639}}{9}$

**答案：** $\triangle PF_1F_2$ 的面积为 $\dfrac{\sqrt{9639}}{9}$

**考试技巧：** 椭圆焦点三角形面积公式：$S = b^2 \tan\dfrac{\theta}{2}$，其中 $\theta = \angle F_1PF_2$。本题可用此公式验证。

### 例题11：直线与抛物线的位置关系

**题目：** 已知抛物线 $y^2 = 4x$，过点 $M(2, 1)$ 作直线交抛物线于 $A$、$B$ 两点，求 $AB$ 中点的轨迹方程。

**解答：**

步骤1：设 $A(x_1, y_1)$，$B(x_2, y_2)$，中点 $P(x_0, y_0)$

步骤2：由 $y_1^2 = 4x_1$，$y_2^2 = 4x_2$，两式相减：$y_1^2 - y_2^2 = 4(x_1 - x_2)$

步骤3：$(y_1 - y_2)(y_1 + y_2) = 4(x_1 - x_2)$，故 $\dfrac{y_1 - y_2}{x_1 - x_2} = \dfrac{4}{y_1 + y_2} = \dfrac{4}{2y_0} = \dfrac{2}{y_0}$

步骤4：直线 $AB$ 的斜率 $k = \dfrac{2}{y_0}$，又直线过 $M(2, 1)$ 和 $P(x_0, y_0)$，故 $k = \dfrac{y_0 - 1}{x_0 - 2}$

步骤5：$\dfrac{2}{y_0} = \dfrac{y_0 - 1}{x_0 - 2}$，整理得 $y_0^2 - y_0 = 2x_0 - 4$，即 $y_0^2 - 2x_0 - y_0 + 4 = 0$

步骤6：设中点轨迹方程为 $y^2 - 2x - y + 4 = 0$

**答案：** 中点轨迹方程为 $y^2 - 2x - y + 4 = 0$

**常见错误：** 点差法是解决中点轨迹问题的常用方法，但要注意验证轨迹是否在抛物线内部。

### 例题12：空间向量在立体几何中的应用

**题目：** 在正方体 $ABCD-A_1B_1C_1D_1$ 中，$E$ 为 $BB_1$ 的中点，求 $A_1E$ 与平面 $ABCD$ 所成角的大小。

**解答：**

步骤1：建立空间直角坐标系，设正方体棱长为 $2$

步骤2：$A_1(2, 0, 2)$，$E(2, 2, 1)$，$\overrightarrow{A_1E} = (0, 2, -1)$

步骤3：平面 $ABCD$ 的法向量为 $\vec{n} = (0, 0, 1)$

步骤4：设 $A_1E$ 与平面 $ABCD$ 所成角为 $\theta$，则 $\sin\theta = \dfrac{|\overrightarrow{A_1E} \cdot \vec{n}|}{|\overrightarrow{A_1E}||\vec{n}|} = \dfrac{|-1|}{\sqrt{0 + 4 + 1} \times 1} = \dfrac{1}{\sqrt{5}}$

步骤5：$\theta = \arcsin\dfrac{1}{\sqrt{5}} = \arcsin\dfrac{\sqrt{5}}{5}$

**答案：** $A_1E$ 与平面 $ABCD$ 所成角为 $\arcsin\dfrac{\sqrt{5}}{5}$

**考试技巧：** 线面角公式：$\sin\theta = \dfrac{|\vec{v} \cdot \vec{n}|}{|\vec{v}||\vec{n}|}$，其中 $\vec{v}$ 是直线方向向量，$\vec{n}$ 是平面法向量。

## Intuition

Geometry is like architecture. You start with basic shapes (points, lines, circles) and combine them according to rules (theorems) to build complex structures (proofs). Each theorem is like a building code that ensures your structure is sound.

Coordinate geometry is like GPS navigation. The coordinate plane is your map, and points are locations with addresses. Finding the distance between two points is like calculating the driving distance between two cities. Understanding the map lets you navigate without a physical compass or ruler.

## Cross-References

- [Functions](/gaokao/mathematics/functions) - How coordinate geometry uses function concepts for curve analysis
- [Algebra](/gaokao/mathematics/algebra) - Algebraic vector operations that form the basis of geometric proofs
- [Organic Chemistry](/gaokao/chemistry/organic) - Molecular geometry and spatial reasoning that parallels geometric thinking

## Common Mistakes

**Confusing the conditions for triangle congruence.** SSS, SAS, ASA, and AAS are valid congruence criteria, but SSA (two sides and a non-included angle) is not. Students often assume any three measurements determine a unique triangle, which is false when the angle is not between the two sides.

**Forgetting that similarity requires corresponding angles to be equal and sides to be proportional.** Two triangles are similar if their angles match and their sides are in the same ratio. Students sometimes check only angles or only sides, missing that both conditions must hold.

**Misapplying the area formula for triangles.** The area is (1/2) * base * height, where height is the perpendicular distance from the base to the opposite vertex. Students often use a side length as the height, which is incorrect unless the triangle is right-angled.
