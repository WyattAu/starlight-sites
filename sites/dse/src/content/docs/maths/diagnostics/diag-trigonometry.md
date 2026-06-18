---
title: "Trigonometry -- Diagnostic Tests"
description: ""unfolds" two walls:

Unfolding the $6 \times 3$ wall and the $4 \times 3$ wall: the path goes across a $6 \times 7$
rectangle (wait, this needs careful analysis).

The shortest surface path would be
$\min\left(\sqrt{(6+4)^2 + 3^2}, \sqrt{(6+3)^2 + 4^2}, \sqrt{(4+3)^2 + 6^2}\right) = \min(\sqrt{109}, \sqrt{97}, \sqrt{85}) = \sqrt{85} \approx 9.22$
m.

The absolute shortest is the space diagonal $\sqrt{61}$ m.

---

### WE-7: Bearing Problem

**Question:**

A ship sails from port $A$ on a bearing of $060°$ for $15$ km to point $B$Then on a bearing of
$150°$ for $20$ km to point $C$. Find the distance and bearing of $C$ from $A$.

**Solution:**

$\angle ABC = 150° - (180° - 60°) = 150° - 120° = 30°$.

Wait: the angle between $AB$ and $BC$ at $B$. The bearing from $A$ to $B$ is $060°$. The reverse
bearing from $B$ to $A$ is $240°$. The bearing from $B$ to $C$ is $150°$. The angle
$ABC = 240° - 150° = 90°$.

So triangle $ABC$ has a right angle at $B$.

$AB = 15$ km, $BC = 20$ km.

$$AC = \sqrt{15^2 + 20^2} = \sqrt{225 + 400} = \sqrt{625} = 25 \text{ km}$$

Bearing of $C$ from $A$:
$\angle NAC = 060° + \arctan\left(\dfrac{20}{15}\right) = 60° + 53.1° = 113.1°$.

The distance is $25$ km and the bearing is approximately $113°$.

---

### WE-8: Angle of Elevation and Depression

**Question:**

From the top of a cliff $80$ m high, the angle of depression of a boat is $30°$. Find the distance
of the boat from the base of the cliff.

**Solution:**

The angle of elevation from the boat to the top of the cliff equals the angle of depression from the
top to the boat: $30°$.

$$\tan 30° = \frac{80}{d}$$

$$d = \frac{80}{\tan 30°} = \frac{80}{1/\sqrt{3}} = 80\sqrt{3} \approx 138.6 \text{ m}$$

---

## Common Pitfalls

1. **Missing solutions in trigonometric equations.** When solving $\cos x \cdot f(x) = 0$You must
   consider both $\cos x = 0$ AND $f(x) = 0$. Dividing by $\cos x$ or $\sin x$ loses solutions.
   Always factorise first.

2. **Using degrees when radians are required (or vice versa).** In DSE Maths, most trigonometry
   problems use degrees unless specified otherwise. Always check the required units and be
   consistent throughout your working.

3. **Ambiguous case of the sine rule.** When given two sides and a non-included angle (SSA), there
   may be two possible solutions. Always check if the supplementary angle is also valid (sums with
   given angle to less than $180°$).

4. **Incorrect angle identification in 3D problems.** In 3D trigonometry, the angle between a line
   and a plane is NOT the angle the line makes with a line in the plane. It is the angle between the
   line and its projection onto the plane. Draw clear diagrams.

5. **Bearings measured from North clockwise.** A bearing of $060°$ means $60°$ clockwise from North
   (i.e. N60°E). Always draw a clear North arrow and measure bearings correctly.

---

## DSE Exam-Style Questions

### DSE-1

In triangle $ABC$, $a = 8$ cm, $b = 6$ cm, and $\angle A = 70°$.

(a) Find $\angle B$. Give your answer correct to 1 decimal place. (3 marks) (b) Find the area of
triangle $ABC$. (2 marks) (c) Find the length of the altitude from $C$ to $AB$. (2 marks)

**Solution:**

(a) By the sine rule:

$$\frac{\sin B}{b} = \frac{\sin A}{a} \implies \sin B = \frac{6\sin 70°}{8} = \frac{6 \times 0.9397}{8} = 0.7048$$

$B = \arcsin(0.7048) \approx 44.8°$.

Check for ambiguous case: $70° + 44.8° = 114.8° < 180°$.

$B" = 180° - 44.8° = 135.2°$. $70° + 135.2° = 205.2° > 180°$. Invalid.

So $\angle B \approx 44.8°$.

(b) $\angle C = 180° - 70° - 44.8° = 65.2°$.

$\text{Area} = \dfrac{1}{2} \times 8 \times 6 \times \sin 65.2° \approx 24 \times 0.9075 \approx 21.8$
cm$^2$.

(c) $\text{Area} = \dfrac{1}{2} \times AB \times h$Where $AB = c$.

By the sine rule:
$c = \dfrac{8\sin 65.2°}{\sin 44.8°} \approx \dfrac{8 \times 0.9075}{0.7048} \approx 10.3$ cm.

$h = \dfrac{2 \times 21.8}{10.3} \approx 4.23$ cm.

---

### DSE-2

(a) Prove the identity $\dfrac{1 - \cos 2x}{1 + \cos 2x} = \tan^2 x$. (3 marks) (b) Hence solve
$\dfrac{1 - \cos 2x}{1 + \cos 2x} = 3$ for $0° \leq x < 360°$. (3 marks)

**Solution:**

(a)
$\dfrac{1 - \cos 2x}{1 + \cos 2x} = \dfrac{1 - (1 - 2\sin^2 x)}{1 + (2\cos^2 x - 1)} = \dfrac{2\sin^2 x}{2\cos^2 x} = \dfrac{\sin^2 x}{\cos^2 x} = \tan^2 x \qed$

(b) $\tan^2 x = 3 \implies \tan x = \pm\sqrt{3}$.

$\tan x = \sqrt{3} \implies x = 60°$ or $x = 240°$.

$\tan x = -\sqrt{3} \implies x = 120°$ or $x = 300°$.

Solution: $x = 60°,\; 120°,\; 240°,\; 300°$.

---

### DSE-3

A vertical tower $PQ$ stands on horizontal ground. From a point $A$ on the ground, the angle of
elevation of $P$ is $32°$. From another point $B$, $50$ m from $A$ on the opposite side of the tower,
the angle of elevation of $P$ is $24°$. Find the height of the tower. (5 marks)

**Solution:**

Let the height be $h$ and let the horizontal distance from the foot $Q$ to $A$ be $d$.

$\tan 32° = \dfrac{h}{d} \implies d = \dfrac{h}{\tan 32°}$.

$\tan 24° = \dfrac{h}{d + 50} \implies d + 50 = \dfrac{h}{\tan 24°}$.

$\dfrac{h}{\tan 32°} + 50 = \dfrac{h}{\tan 24°}$.

$h\left(\dfrac{1}{\tan 24°} - \dfrac{1}{\tan 32°}\right) = 50$.

$h\left(\cot 24° - \cot 32°\right) = 50$.

$h(2.2460 - 1.6003) = 50$.

$0.6457h = 50 \implies h = \dfrac{50}{0.6457} \approx 77.4$ m.

---

### DSE-4

Solve $\sin^2 x + 2\cos x = 2$ for $0° \leq x \leq 180°$. (4 marks)

**Solution:**

$\sin^2 x + 2\cos x = 2$.

$1 - \cos^2 x + 2\cos x = 2$.

$-\cos^2 x + 2\cos x - 1 = 0$.

$\cos^2 x - 2\cos x + 1 = 0$.

$(\cos x - 1)^2 = 0$.

$\cos x = 1$.

In $[0°,\; 180°]$: $x = 0°$.

---

### DSE-5

In the figure, $ABCD$ is a square of side $6$ cm. $E$ is a point on $BC$ such that $BE = 2$ cm. $F$
is the midpoint of $CD$. Find $\angle AEF$. (5 marks)

**Solution:**

Place $A$ at the origin: $A = (0, 0)$$B = (6, 0)$$C = (6, 6)$$D = (0, 6)$.

$E = (6, 2)$$F = (3, 6)$.

$$AE = \sqrt{6^2 + 2^2} = \sqrt{40} = 2\sqrt{10}$$

$$EF = \sqrt{(6-3)^2 + (2-6)^2} = \sqrt{9 + 16} = 5$$

$$AF = \sqrt{3^2 + 6^2} = \sqrt{45} = 3\sqrt{5}$$

By the cosine rule in triangle $AEF$:

$$\cos \angle AEF = \frac{AE^2 + EF^2 - AF^2}{2 \cdot AE \cdot EF} = \frac{40 + 25 - 45}{2 \times 2\sqrt{10} \times 5} = \frac{20}{20\sqrt{10}} = \frac{1}{\sqrt{10}} = \frac{\sqrt{10}}{10}$$

$$\angle AEF = \arccos\left(\frac{\sqrt{10}}{10}\right) \approx 71.6°$$
