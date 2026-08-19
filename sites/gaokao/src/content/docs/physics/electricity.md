---

date: 2026-07-23T21:57:32+01:00
title: "Electricity"
description: "高考 physics: Electricity"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "gaokao", "url": "https://gaokao.wyattau.com"}, {"name": "Physics", "url": "https://gaokao.wyattau.com/physics"}, {"name": "Electricity", "url": "https://gaokao.wyattau.com/physics/electricity"}]
}
</script>

## Electricity

高考 physics 学习笔记 - Electricity

## 核心概念

### 静电场

**库仑定律：** $F = k\frac{q_1 q_2}{r^2}$（$k = 9 \times 10^9\,\text{N·m}^2/\text{C}^2$）

**电场强度：** $E = \frac{F}{q}$（点电荷：$E = k\frac{Q}{r^2}$）

**电势：** $\varphi = \frac{E_p}{q}$

**电势差：** $U_{AB} = \varphi_A - \varphi_B$

**电场力做功：** $W = qU$

### 电路

**欧姆定律：** $I = \frac{U}{R}$

**电阻定律：** $R = \rho\frac{L}{S}$

**电功率：** $P = UI = I^2 R = \frac{U^2}{R}$

**电功：** $W = UIt = Pt$

**焦耳定律：** $Q = I^2 Rt$

### 闭合电路欧姆定律

$$I = \frac{E}{R + r}$$

其中 $E$ 为电源电动势，$r$ 为内阻。

**路端电压：** $U = E - Ir$

### 电容

**电容定义式：** $C = \frac{Q}{U}$

**平行板电容器：** $C = \frac{\varepsilon S}{4\pi kd}$

## 典型例题

### 例题1：库仑定律

**题目：** 两个点电荷 $q_1 = 2 \times 10^{-6}\,\text{C}$，$q_2 = -3 \times 10^{-6}\,\text{C}$，相距 $r = 0.3\,\text{m}$，求它们之间的库仑力。

**解答：**

步骤1：由库仑定律：
$$F = k\frac{|q_1||q_2|}{r^2} = 9 \times 10^9 \times \frac{2 \times 10^{-6} \times 3 \times 10^{-6}}{0.3^2}$$

步骤2：计算：
$$F = 9 \times 10^9 \times \frac{6 \times 10^{-12}}{0.09} = 9 \times 10^9 \times 6.67 \times 10^{-11} = 0.6\,\text{N}$$

步骤3：两电荷异号，力为引力。

**答案：** 库仑力大小为 $0.6\,\text{N}$，方向为引力

### 例题2：闭合电路

**题目：** 电源电动势 $E = 12\,\text{V}$，内阻 $r = 1\,\Omega$，外电路电阻 $R = 5\,\Omega$，求电路中的电流和路端电压。

**解答：**

步骤1：由闭合电路欧姆定律：
$$I = \frac{E}{R + r} = \frac{12}{5 + 1} = 2\,\text{A}$$

步骤2：路端电压：
$$U = E - Ir = 12 - 2 \times 1 = 10\,\text{V}$$

步骤3：也可用 $U = IR = 2 \times 5 = 10\,\text{V}$ 验证

**答案：** 电流为 $2\,\text{A}$，路端电压为 $10\,\text{V}$

### 例题3：电容

**题目：** 平行板电容器两板间距为 $d$，板间电压为 $U$。若将两板间距增大到 $2d$，同时保持电量不变，求板间电压的变化。

**解答：**

步骤1：电容公式：$C = \frac{\varepsilon S}{4\pi kd}$

步骤2：间距增大到 $2d$，电容变为原来的一半：$C' = \frac{C}{2}$

步骤3：电量不变：$Q = CU = C'U'$

步骤4：$U' = \frac{Q}{C'} = \frac{Q}{C/2} = 2\frac{Q}{C} = 2U$

**答案：** 板间电压增大为原来的 $2$ 倍

## 考试技巧

1. 电路分析时，先简化电路（串并联），再用欧姆定律求解
2. 含电容的电路中，稳态时电容相当于断路
3. 电源的输出功率在 $R = r$ 时最大
4. 电场中的功能关系：$qU = \Delta E_k$

## 练习题

1. 点电荷 $q_1 = 1 \times 10^{-6}\,\text{C}$，$q_2 = 4 \times 10^{-6}\,\text{C}$，相距 $0.2\,\text{m}$，求库仑力
2. 电源电动势 $E = 6\,\text{V}$，内阻 $r = 0.5\,\Omega$，外电阻 $R = 2.5\,\Omega$，求电流和路端电压
3. 一电容器电容为 $10\,\mu\text{F}$，两端电压为 $100\,\text{V}$，求所带电量

### 例题4：含电容电路

**题目：** 如图所示，电源电动势 $E = 10\,\text{V}$，内阻 $r = 1\,\Omega$，$R_1 = 4\,\Omega$，$R_2 = 5\,\Omega$，$C = 100\,\mu\text{F}$。求开关 $S$ 闭合后电路稳定时电容器所带的电量。

**解答：**

步骤1：电路稳定时，电容器相当于断路，电流只流过 $R_1$ 和 $R_2$。

步骤2：总电阻：$R_{\text{总}} = R_1 + R_2 + r = 4 + 5 + 1 = 10\,\Omega$

步骤3：电流：$I = \frac{E}{R_{\text{总}}} = \frac{10}{10} = 1\,\text{A}$

步骤4：$R_2$ 两端电压：$U_2 = IR_2 = 1 \times 5 = 5\,\text{V}$

步骤5：电容器两端电压等于 $R_2$ 两端电压：$U_C = U_2 = 5\,\text{V}$

步骤6：电量：$Q = CU_C = 100 \times 10^{-6} \times 5 = 5 \times 10^{-4}\,\text{C}$

**答案：** 电容器所带电量为 $5 \times 10^{-4}\,\text{C}$

### 例题5：电场中的功能关系

**题目：** 一电子从 $A$ 点移动到 $B$ 点，电场力做功 $3.2 \times 10^{-19}\,\text{J}$。已知 $A$ 点电势为 $10\,\text{V}$，求 $B$ 点电势（电子电荷量 $e = -1.6 \times 10^{-19}\,\text{C}$）。

**解答：**

步骤1：电场力做功与电势差的关系：$W = qU_{AB}$

步骤2：$U_{AB} = \frac{W}{q} = \frac{3.2 \times 10^{-19}}{-1.6 \times 10^{-19}} = -2\,\text{V}$

步骤3：$U_{AB} = \varphi_A - \varphi_B$，故 $\varphi_B = \varphi_A - U_{AB} = 10 - (-2) = 12\,\text{V}$

**答案：** $B$ 点电势为 $12\,\text{V}$

### 例题6：多档位电功率

**题目：** 某电热器有高低两个档位。已知电源电压 $U = 220\,\text{V}$，高档功率 $P_1 = 1100\,\text{W}$，低档功率 $P_2 = 275\,\text{W}$。求两个电阻 $R_1$ 和 $R_2$ 的阻值。

**解答：**

步骤1：高档位时，只有一个电阻工作（或两个并联）。设高档位时电阻为 $R_{\text{高}}$：
$$R_{\text{高}} = \frac{U^2}{P_1} = \frac{220^2}{1100} = 44\,\Omega$$

步骤2：低档位时电阻为 $R_{\text{低}}$：
$$R_{\text{低}} = \frac{U^2}{P_2} = \frac{220^2}{275} = 176\,\Omega$$

步骤3：若高档为 $R_1$ 单独工作，低档为 $R_1$ 与 $R_2$ 串联：
$$R_1 = 44\,\Omega, \quad R_1 + R_2 = 176\,\Omega$$
$$R_2 = 176 - 44 = 132\,\Omega$$

**答案：** $R_1 = 44\,\Omega$，$R_2 = 132\,\Omega$

## 深入理解

### 电路分析的方法

高考电路问题的解题步骤：

1. **简化电路：** 识别串联和并联关系
2. **选择方法：** 欧姆定律、基尔霍夫定律或等效电源法
3. **列方程求解：** 注意电流方向和电压极性
4. **验证结果：** 检查功率是否守恒

### 电场与电路的综合

电场中的功能关系 $qU = \Delta E_k$ 是连接电场和电路的桥梁。在含电容的直流电路中：

- 稳态时电容器相当于断路
- 电容器两端电压等于与其并联的电阻两端电压
- 充放电过程中有瞬态电流

## 更多典型例题

### 例题7：电路的动态分析

**题目：** 如图所示，电源电动势 $E = 12\,\text{V}$，内阻 $r = 1\,\Omega$，$R_1 = 3\,\Omega$，$R_2 = 6\,\Omega$，$R_3 = 4\,\Omega$。求开关 $S$ 闭合后各电阻上的电流。

**解答：**

步骤1：识别电路结构——$R_1$ 与 $R_2$ 并联，再与 $R_3$ 串联。

步骤2：并联电阻：
$$R_{12} = \frac{R_1 R_2}{R_1 + R_2} = \frac{3 \times 6}{3 + 6} = 2\,\Omega$$

步骤3：总电阻：
$$R_{\text{总}} = R_{12} + R_3 + r = 2 + 4 + 1 = 7\,\Omega$$

步骤4：总电流（即 $R_3$ 上的电流）：
$$I_3 = \frac{E}{R_{\text{总}}} = \frac{12}{7} \approx 1.71\,\text{A}$$

步骤5：并联部分电压：
$$U_{12} = I_3 \times R_{12} = \frac{12}{7} \times 2 = \frac{24}{7}\,\text{V}$$

步骤6：各支路电流：
$$I_1 = \frac{U_{12}}{R_1} = \frac{24/7}{3} = \frac{8}{7} \approx 1.14\,\text{A}$$
$$I_2 = \frac{U_{12}}{R_2} = \frac{24/7}{6} = \frac{4}{7} \approx 0.57\,\text{A}$$

**答案：** $I_1 = \dfrac{8}{7}\,\text{A}$，$I_2 = \dfrac{4}{7}\,\text{A}$，$I_3 = \dfrac{12}{7}\,\text{A}$

**考试技巧：** 电路动态分析的基本思路是"局部→整体→局部"：先分析局部电阻变化，再分析总电阻、总电流变化，最后分析各部分电压和电流的变化。

### 例题8：含电容电路的暂态过程

**题目：** 电源电动势 $E = 10\,\text{V}$，内阻 $r = 2\,\Omega$，$R_1 = 3\,\Omega$，$R_2 = 5\,\Omega$，$C = 200\,\mu\text{F}$。开关 $S$ 闭合前电容器不带电。求 $S$ 闭合后电容器所带的最大电量和稳定后的电量。

**解答：**

步骤1：$S$ 闭合瞬间，电容器相当于短路，电流最大。

步骤2：稳定后，电容器相当于断路，电流只流过 $R_1$ 和 $R_2$。

步骤3：稳定时的电流：
$$I = \frac{E}{R_1 + R_2 + r} = \frac{10}{3 + 5 + 2} = 1\,\text{A}$$

步骤4：$R_2$ 两端电压：
$$U_2 = IR_2 = 1 \times 5 = 5\,\text{V}$$

步骤5：稳定后电容器两端电压等于 $R_2$ 两端电压：$U_C = 5\,\text{V}$。

步骤6：稳定后电量：
$$Q = CU_C = 200 \times 10^{-6} \times 5 = 1 \times 10^{-3}\,\text{C}$$

**答案：** 稳定后电容器所带电量为 $1 \times 10^{-3}\,\text{C}$

**常见错误：** 含电容电路中，稳态时电容相当于断路；暂态过程中有充放电电流。计算时需区分稳态和暂态。

### 例题9：电功率的综合应用

**题目：** 一台电动机的线圈电阻为 $r = 1\,\Omega$，接在电压 $U = 220\,\text{V}$ 的电源上，正常工作时电流 $I = 5\,\text{A}$。求电动机的输出功率和效率。

**解答：**

步骤1：电动机的总功率：
$$P_{\text{总}} = UI = 220 \times 5 = 1100\,\text{W}$$

步骤2：线圈发热功率：
$$P_{\text{热}} = I^2 r = 25 \times 1 = 25\,\text{W}$$

步骤3：输出功率：
$$P_{\text{出}} = P_{\text{总}} - P_{\text{热}} = 1100 - 25 = 1075\,\text{W}$$

步骤4：效率：
$$\eta = \frac{P_{\text{出}}}{P_{\text{总}}} = \frac{1075}{1100} \approx 97.7\%$$

**答案：** 输出功率为 $1075\,\text{W}$，效率约为 $97.7\%$

**考试技巧：** 电动机、电风扇等非纯电阻用电器，不能用欧姆定律 $I = U/R$ 计算电流。能量关系为：$P_{\text{总}} = P_{\text{出}} + P_{\text{热}}$。

### 例题10：带电粒子在电场中的运动

**题目：** 一个电子以 $v_0 = 10^7\,\text{m/s}$ 的初速度垂直射入匀强电场，电场强度 $E = 10^4\,\text{N/C}$，极板长度 $L = 0.1\,\text{m}$。求电子射出电场时的偏转距离（电子质量 $m = 9.1 \times 10^{-31}\,\text{kg}$，电荷量 $e = 1.6 \times 10^{-19}\,\text{C}$）。

**解答：**

步骤1：电子在电场中做类平抛运动：水平方向匀速，竖直方向匀加速

步骤2：水平方向：$L = v_0 t$，故 $t = \dfrac{L}{v_0} = \dfrac{0.1}{10^7} = 10^{-8}\,\text{s}$

步骤3：竖直方向加速度：$a = \dfrac{F}{m} = \dfrac{eE}{m} = \dfrac{1.6 \times 10^{-19} \times 10^4}{9.1 \times 10^{-31}} \approx 1.76 \times 10^{15}\,\text{m/s}^2$

步骤4：偏转距离：$y = \dfrac{1}{2}at^2 = \dfrac{1}{2} \times 1.76 \times 10^{15} \times (10^{-8})^2 = 8.8 \times 10^{-2}\,\text{m} = 8.8\,\text{cm}$

**答案：** 电子射出电场时的偏转距离为 $8.8\,\text{cm}$

**考试技巧：** 带电粒子在电场中的偏转问题，通常分解为水平方向的匀速直线运动和竖直方向的匀加速直线运动。

### 例题11：电容器的动态分析

**题目：** 平行板电容器与电源保持连接，若将两板间距增大，下列物理量如何变化？（A）电容 （B）电量 （C）板间电场强度 （D）板间电势差

**解答：**

步骤1：电容器与电源保持连接，故板间电势差 $U$ 不变

步骤2：电容 $C = \dfrac{\varepsilon S}{4\pi kd}$，$d$ 增大，$C$ 减小

步骤3：电量 $Q = CU$，$C$ 减小，$U$ 不变，故 $Q$ 减小

步骤4：电场强度 $E = \dfrac{U}{d}$，$U$ 不变，$d$ 增大，故 $E$ 减小

步骤5：板间电势差 $U$ 不变

**答案：** （A）电容减小 （B）电量减小 （C）电场强度减小 （D）板间电势差不变

**常见错误：** 若电容器充电后断开电源，则电量 $Q$ 不变，此时 $d$ 增大，$C$ 减小，$U$ 增大，$E$ 不变。

### 例题12：电路的功率分析

**题目：** 电源电动势 $E = 12\,\text{V}$，内阻 $r = 1\,\Omega$，外电阻 $R$ 可调。求 $R$ 为何值时，电源的输出功率最大？最大输出功率为多少？

**解答：**

步骤1：输出功率 $P = I^2 R = \left(\dfrac{E}{R + r}\right)^2 R$

步骤2：$P = \dfrac{E^2 R}{(R + r)^2} = \dfrac{E^2}{R + \dfrac{r^2}{R} + 2r}$

步骤3：由均值不等式，$R + \dfrac{r^2}{R} \geq 2r$，当 $R = r$ 时取等号

步骤4：故当 $R = r = 1\,\Omega$ 时，$P$ 最大：$P_{\max} = \dfrac{E^2}{4r} = \dfrac{144}{4} = 36\,\text{W}$

**答案：** 当 $R = 1\,\Omega$ 时，电源输出功率最大，最大为 $36\,\text{W}$

**考试技巧：** 电源输出功率最大的条件是外电阻等于内阻，即 $R = r$。此时效率为 $50\%$。

## Intuition

Electricity is like water flowing through pipes. Voltage is the water pressure: higher pressure pushes more water through. Current is the flow rate: how much water passes a point per second. Resistance is the pipe diameter: narrower pipes restrict flow. Ohm's law (V = IR) is like the rule that says flow rate equals pressure divided by restriction.

Circuits are like road networks. Series circuits are single-lane roads where traffic must flow through every checkpoint. Parallel circuits are multiple lanes that split the traffic. Understanding the layout helps you predict where bottlenecks occur and how to reroute when something blocks the road.

## Common Mistakes

**Confusing series and parallel resistance formulas.** For series resistors, R_total = R1 + R2. For parallel resistors, 1/R_total = 1/R1 + 1/R2, not R1 * R2 / (R1 + R2) applied directly. Students often apply the wrong formula or forget that parallel resistance is always less than the smallest individual resistance.

**Forgetting that capacitors act as open circuits in DC steady state.** In DC circuits, after the capacitor is fully charged, no current flows through the capacitor branch. Students sometimes include capacitor branches in current calculations, leading to incorrect circuit analysis. The capacitor voltage equals the voltage across the parallel branch.

**Misapplying the power formula for non-ohmic devices.** For devices like motors and bulbs, P = UI is the total power, but P = I^2 R gives only the heat dissipation. Students often use P = U^2 / R for motors, which gives incorrect results because the back-EMF reduces the effective voltage across the resistance.

## Cross-References

- [Mechanics](../../../../../hsc/src/content/docs/physics/mechanics) - Force and energy principles that govern electromagnetic systems through work-energy relationships
- [Optics](optics) - Wave properties of electromagnetic radiation connecting to electric field theory
- [Algebra](../../../../../sat/src/content/docs/mathematics/algebra) - Mathematical techniques for solving circuit equations and calculating equivalent resistance
