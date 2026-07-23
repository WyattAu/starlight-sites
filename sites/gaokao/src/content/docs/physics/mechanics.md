---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "gaokao", "url": "https://gaokao.wyattau.com"}, {"name": "Physics", "url": "https://gaokao.wyattau.com/physics"}, {"name": "Mechanics", "url": "https://gaokao.wyattau.com/physics/mechanics"}]
}
</script>
title: "Mechanics"
description: "高考 physics: Mechanics"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "gaokao", "url": "https://gaokao.wyattau.com"}, {"name": "Physics", "url": "https://gaokao.wyattau.com/physics"}, {"name": "Mechanics", "url": "https://gaokao.wyattau.com/physics/mechanics"}]
}
</script>

## Mechanics

高考 physics 学习笔记 - Mechanics

## 核心概念

### 匀变速直线运动

**基本公式：**
$$v = v_0 + at$$
$$x = v_0 t + \frac{1}{2}at^2$$
$$v^2 = v_0^2 + 2ax$$

**平均速度：** $\bar{v} = \frac{v_0 + v}{2} = \frac{x}{t}$

**推论：** 在匀变速直线运动中，相邻相等时间内的位移之差为常数：$\Delta x = aT^2$

### 牛顿运动定律

**牛顿第一定律（惯性定律）：** 物体在不受外力作用时，保持静止或匀速直线运动状态。

**牛顿第二定律：** $F = ma$（合外力等于质量乘以加速度）

**牛顿第三定律：** 作用力与反作用力大小相等、方向相反。

### 曲线运动

**平抛运动：**
- 水平方向：匀速直线运动，$x = v_0 t$
- 竖直方向：自由落体运动，$y = \frac{1}{2}gt^2$

**匀速圆周运动：**
- 线速度：$v = \frac{2\pi r}{T}$
- 角速度：$\omega = \frac{2\pi}{T} = 2\pi f$
- 向心加速度：$a = \frac{v^2}{r} = \omega^2 r$
- 向心力：$F = m\frac{v^2}{r} = m\omega^2 r$

### 动量与能量

**动能定理：** $W_{\text{合}} = \Delta E_k = \frac{1}{2}mv^2 - \frac{1}{2}mv_0^2$

**机械能守恒：** 在只有重力（或弹力）做功的条件下，$E_k + E_p = \text{常数}$

**动量守恒定律：** 当系统所受合外力为零时，$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$

## 典型例题

### 例题1：匀变速直线运动

**题目：** 一辆汽车以 $v_0 = 20\,\text{m/s}$ 的初速度做匀减速直线运动，加速度大小为 $4\,\text{m/s}^2$，求汽车在停止前最后 $2\,\text{s}$ 内的位移。

**解答：**

步骤1：计算停止所需时间：$t = \frac{v_0}{a} = \frac{20}{4} = 5\,\text{s}$

步骤2：逆向思维，将匀减速的最后 $2\,\text{s}$ 等价为初速度为零的匀加速运动的前 $2\,\text{s}$

步骤3：计算位移：
$$x = \frac{1}{2}at^2 = \frac{1}{2} \times 4 \times 2^2 = 8\,\text{m}$$

**答案：** 最后 $2\,\text{s}$ 内的位移为 $8\,\text{m}$

### 例题2：牛顿第二定律

**题目：** 一个质量为 $2\,\text{kg}$ 的物体放在光滑水平面上，受到 $F_1 = 6\,\text{N}$ 和 $F_2 = 8\,\text{N}$ 两个力的作用，且 $F_1 \perp F_2$，求物体的加速度。

**解答：**

步骤1：求合力大小：
$$F = \sqrt{F_1^2 + F_2^2} = \sqrt{36 + 64} = 10\,\text{N}$$

步骤2：由牛顿第二定律：
$$a = \frac{F}{m} = \frac{10}{2} = 5\,\text{m/s}^2$$

步骤3：合力方向：$\tan\theta = \frac{F_2}{F_1} = \frac{8}{6} = \frac{4}{3}$

**答案：** 加速度大小为 $5\,\text{m/s}^2$

### 例题3：机械能守恒

**题目：** 一个质量为 $1\,\text{kg}$ 的小球从 $10\,\text{m}$ 高处自由下落，求小球落地时的速度（$g = 10\,\text{m/s}^2$）。

**解答：**

步骤1：由机械能守恒：$mgh = \frac{1}{2}mv^2$

步骤2：解得：
$$v = \sqrt{2gh} = \sqrt{2 \times 10 \times 10} = \sqrt{200} = 10\sqrt{2}\,\text{m/s}$$

**答案：** 落地速度为 $10\sqrt{2}\,\text{m/s}$

## 考试技巧

1. 匀变速运动问题，善用逆向思维将减速过程转化为加速过程
2. 受力分析时先画受力图，再正交分解列方程
3. 机械能守恒的条件是只有重力或弹力做功，摩擦力做功时不适用
4. 动量守恒适用于系统不受外力或合外力为零的情况

## 练习题

1. 一物体从静止开始做匀加速直线运动，第 $3\,\text{s}$ 内的位移为 $5\,\text{m}$，求加速度
2. 质量为 $5\,\text{kg}$ 的物体在水平面上受到 $20\,\text{N}$ 的拉力（与水平成 $37°$ 角），摩擦系数 $\mu = 0.2$，求加速度
3. 一个 $2\,\text{kg}$ 的物体以 $10\,\text{m/s}$ 的速度运动，受到 $-4\,\text{N}$ 的合外力，求 $3\,\text{s}$ 后的速度和位移

### 例题4：平抛运动

**题目：** 从 $20\,\text{m}$ 高处以 $15\,\text{m/s}$ 的水平速度抛出一个小球，求落地时的速度大小和方向（$g = 10\,\text{m/s}^2$）。

**解答：**

步骤1：由竖直方向自由落体：
$$v_y = \sqrt{2gh} = \sqrt{2 \times 10 \times 20} = 20\,\text{m/s}$$

步骤2：水平速度保持不变：$v_x = 15\,\text{m/s}$

步骤3：合速度：
$$v = \sqrt{v_x^2 + v_y^2} = \sqrt{225 + 400} = \sqrt{625} = 25\,\text{m/s}$$

步骤4：速度方向：$\tan\theta = \frac{v_y}{v_x} = \frac{20}{15} = \frac{4}{3}$，$\theta = 53°$

**答案：** 落地速度为 $25\,\text{m/s}$，与水平方向成 $53°$ 角

### 例题5：动量守恒

**题目：** 质量为 $m_1 = 3\,\text{kg}$ 的小球以 $v_1 = 4\,\text{m/s}$ 的速度与静止的质量为 $m_2 = 1\,\text{kg}$ 的小球发生正碰。碰撞后 $m_1$ 的速度变为 $v_1' = 2\,\text{m/s}$，求 $m_2$ 的速度。

**解答：**

步骤1：由动量守恒定律：
$$m_1 v_1 + m_2 v_2 = m_1 v_1' + m_2 v_2'$$

步骤2：代入数据（$v_2 = 0$）：
$$3 \times 4 + 1 \times 0 = 3 \times 2 + 1 \times v_2'$$

步骤3：解得：
$$12 = 6 + v_2' \implies v_2' = 6\,\text{m/s}$$

**答案：** $m_2$ 的速度为 $6\,\text{m/s}$

### 例题6：能量守恒综合

**题目：** 一个质量为 $1\,\text{kg}$ 的物体从 $5\,\text{m}$ 高处沿光滑斜面滑下，到达底端后滑上粗糙水平面，最终停止。若物体在水平面上滑行了 $10\,\text{m}$，求摩擦系数（$g = 10\,\text{m/s}^2$）。

**解答：**

步骤1：由能量守恒，重力势能全部转化为摩擦力做的功：
$$mgh = \mu mg \cdot s$$

步骤2：消去 $mg$：
$$h = \mu s$$

步骤3：代入数据：
$$5 = \mu \times 10 \implies \mu = 0.5$$

**答案：** 摩擦系数为 $0.5$

## 深入理解

### 力学中的常见模型

高考力学常考的物理模型包括：

1. **传送带模型：** 分析物体在传送带上的受力和运动状态，注意摩擦力方向的变化
2. **板块模型：** 两个物体叠放在一起，分析它们之间的相对运动
3. **弹簧模型：** 涉及弹簧的弹力做功和弹性势能
4. **碰撞模型：** 弹性碰撞、完全非弹性碰撞、一般碰撞

### 动量与能量的综合

在处理复杂力学问题时，通常需要同时使用动量守恒和能量守恒：
- **碰撞问题：** 动量守恒始终成立，能量守恒仅在弹性碰撞中成立
- **爆炸问题：** 内力远大于外力时，系统动量近似守恒
- **反冲问题：** 系统动量守恒，动能可能增加（来自化学能或内能）

## 更多典型例题

### 例题7：传送带模型

**题目：** 水平传送带以 $v = 4\,\text{m/s}$ 的速度匀速运动，将一个质量为 $2\,\text{kg}$ 的物体轻放在传送带左端。已知物体与传送带之间的动摩擦因数 $\mu = 0.2$，传送带长 $L = 8\,\text{m}$。求物体从左端运动到右端所需的时间（$g = 10\,\text{m/s}^2$）。

**解答：**

步骤1：物体刚放上传送带时，速度为零，受到向右的滑动摩擦力：
$$f = \mu mg = 0.2 \times 2 \times 10 = 4\,\text{N}$$

步骤2：由牛顿第二定律，加速度：
$$a = \frac{f}{m} = \frac{4}{2} = 2\,\text{m/s}^2$$

步骤3：物体加速到与传送带速度相同所需时间：
$$t_1 = \frac{v}{a} = \frac{4}{2} = 2\,\text{s}$$

步骤4：加速阶段位移：
$$x_1 = \frac{1}{2}at_1^2 = \frac{1}{2} \times 2 \times 4 = 4\,\text{m}$$

步骤5：由于 $x_1 = 4\,\text{m} < L = 8\,\text{m}$，物体先加速后匀速。

步骤6：匀速阶段位移 $x_2 = L - x_1 = 4\,\text{m}$，时间 $t_2 = \dfrac{x_2}{v} = \dfrac{4}{4} = 1\,\text{s}$。

步骤7：总时间 $t = t_1 + t_2 = 3\,\text{s}$。

**答案：** 物体从左端运动到右端需 $3\,\text{s}$

**考试技巧：** 传送带问题的关键是判断物体能否加速到传送带速度。若传送带足够长，物体先加速后匀速；若传送带不够长，物体一直加速。

### 例题8：板块模型

**题目：** 一质量为 $M = 4\,\text{kg}$ 的长木板静止在光滑水平面上，一质量为 $m = 1\,\text{kg}$ 的小物块以 $v_0 = 5\,\text{m/s}$ 的初速度滑上木板。已知物块与木板之间的动摩擦因数 $\mu = 0.4$，木板足够长。求最终两者的共同速度和物块在木板上滑行的距离（$g = 10\,\text{m/s}^2$）。

**解答：**

步骤1：物块和木板组成的系统在水平方向不受外力，动量守恒：
$$mv_0 = (M + m)v$$

步骤2：代入数据：
$$1 \times 5 = (4 + 1)v \implies v = 1\,\text{m/s}$$

步骤3：由能量守恒，摩擦力做功等于系统动能的减少：
$$\mu mg \cdot s = \frac{1}{2}mv_0^2 - \frac{1}{2}(M + m)v^2$$

步骤4：代入数据：
$$0.4 \times 1 \times 10 \times s = \frac{1}{2} \times 1 \times 25 - \frac{1}{2} \times 5 \times 1$$
$$4s = 12.5 - 2.5 = 10$$
$$s = 2.5\,\text{m}$$

**答案：** 共同速度为 $1\,\text{m/s}$，物块在木板上滑行 $2.5\,\text{m}$

### 例题9：动量与能量的综合

**题目：** 一个质量为 $m$ 的子弹以 $v_0$ 的速度水平射入静止在光滑水平面上的质量为 $M$ 的木块中，子弹穿出木块后速度变为 $\dfrac{v_0}{2}$。若子弹穿出木块的过程中产生的热量为 $Q$，求木块获得的速度。

**解答：**

步骤1：由动量守恒：
$$mv_0 = m \cdot \frac{v_0}{2} + Mv$$

步骤2：解得木块速度：
$$v = \frac{mv_0}{2M}$$

步骤3：由能量守恒验证：
$$Q = \frac{1}{2}mv_0^2 - \frac{1}{2}m\left(\frac{v_0}{2}\right)^2 - \frac{1}{2}Mv^2$$
$$= \frac{1}{2}mv_0^2 - \frac{1}{8}mv_0^2 - \frac{1}{2}M \cdot \frac{m^2 v_0^2}{4M^2}$$
$$= \frac{3}{8}mv_0^2 - \frac{m^2 v_0^2}{8M}$$

**答案：** 木块获得的速度为 $\dfrac{mv_0}{2M}$

**常见错误：** 子弹穿木块问题中，动量守恒始终成立，但机械能不守恒（有摩擦生热）。能量关系为：系统初动能 = 系统末动能 + 产生的热量。

### 例题10：竖直圆周运动

**题目：** 一个质量为 $m$ 的小球用长为 $L$ 的绳子系住，在竖直平面内做圆周运动。求小球通过最高点时的最小速度（$g = 10\,\text{m/s}^2$）。

**解答：**

步骤1：在最高点，小球受重力 $mg$ 和绳子拉力 $T$，合力提供向心力：$mg + T = m\dfrac{v^2}{L}$

步骤2：当 $T = 0$ 时，速度最小：$mg = m\dfrac{v_{\min}^2}{L}$

步骤3：解得：$v_{\min} = \sqrt{gL}$

步骤4：若小球用轻杆连接，则最高点最小速度为 $0$（杆可以提供支持力）

**答案：** 小球通过最高点的最小速度为 $\sqrt{gL}$

**考试技巧：** 竖直圆周运动最高点的临界条件：绳模型 $v \geq \sqrt{gL}$，杆模型 $v \geq 0$。

### 例题11：万有引力与天体运动

**题目：** 已知地球半径为 $R$，地球表面重力加速度为 $g$，求近地卫星的环绕速度和周期。

**解答：**

步骤1：近地卫星轨道半径 $r \approx R$，万有引力提供向心力：$G\dfrac{Mm}{R^2} = m\dfrac{v^2}{R}$

步骤2：在地球表面：$G\dfrac{Mm}{R^2} = mg$，故 $GM = gR^2$

步骤3：代入得：$mg = m\dfrac{v^2}{R}$，解得 $v = \sqrt{gR}$

步骤4：周期：$T = \dfrac{2\pi R}{v} = \dfrac{2\pi R}{\sqrt{gR}} = 2\pi\sqrt{\dfrac{R}{g}}$

步骤5：代入 $g = 10\,\text{m/s}^2$，$R = 6.4 \times 10^6\,\text{m}$：$v \approx 7.9\,\text{km/s}$，$T \approx 5080\,\text{s} \approx 84.7\,\text{min}$

**答案：** 近地卫星环绕速度为 $\sqrt{gR}$，周期为 $2\pi\sqrt{\dfrac{R}{g}}$

**常见错误：** 近地卫星的轨道半径近似等于地球半径，但同步卫星的轨道半径约为地球半径的 $6.6$ 倍。

### 例题12：功能关系综合

**题目：** 一个质量为 $m$ 的物体从高度 $h$ 处沿光滑曲面滑下，进入粗糙水平面，最终停止。若物体在水平面上滑行的距离为 $s$，求动摩擦因数 $\mu$。

**解答：**

步骤1：由动能定理，全过程：$mgh - \mu mgs = 0 - 0$

步骤2：解得：$\mu = \dfrac{h}{s}$

步骤3：若曲面粗糙，则需考虑曲面上摩擦力做的功 $W_f$：$mgh + W_f - \mu mgs = 0$

步骤4：此时 $\mu = \dfrac{h + \dfrac{W_f}{mg}}{s}$

**答案：** 光滑曲面时 $\mu = \dfrac{h}{s}$

**考试技巧：** 功能关系问题通常选择全过程应用动能定理，可以避免分析中间过程的细节。

## Intuition

Mechanics is like understanding how things move and why. Forces are like pushes and pulls: gravity pulls you down, friction slows you down, and normal force pushes back when you stand on a surface. Newton's laws are the rules of the game: every push has an equal and opposite push back.

Motion is like a story with chapters. Velocity tells you how fast the story is moving, acceleration tells you how the pace is changing, and displacement tells you how far the story has progressed. Understanding these chapters lets you predict what happens next without watching the whole movie.

## Common Mistakes

**Confusing mass with weight.** Mass (kg) is a scalar property of matter, while weight (N) is the gravitational force on an object (W = mg). A 1 kg object has a weight of approximately 10 N on Earth. Students often use mass where weight is required in force calculations, leading to incorrect Newton's law applications.

**Forgetting the direction of friction.** Friction always opposes the direction of relative motion or attempted motion. When a block slides up an incline, friction acts down the incline. When it slides down, friction acts up. Students often assume friction always acts horizontally or in the direction of applied force.

**Sign errors in energy calculations.** Work done by gravity is negative when an object moves upward (against gravity) and positive when it moves downward. The work-energy theorem requires consistent sign conventions. Students frequently forget the negative sign for work done against gravity, leading to incorrect energy balances.

## Cross-References

- [Electricity](/gaokao/physics/electricity) - Electromagnetic forces and circuits that extend classical mechanics into electrical domains
- [Optics](/gaokao/physics/optics) - Wave optics and geometric optics that apply mechanical principles to light propagation
- [Functions](/gaokao/mathematics/functions) - Mathematical functions used to model motion, energy, and force relationships
