---
title: "Polar Coordinates -- Diagnostic Tests"
description: ""ve made a sign error somewhere.

Actually: $r = 3 - x/2$ gives $r^2 = (3-x/2)^2 = 9 - 3x + x^2/4$. And $r^2 = x^2 + y^2$. So
$x^2 + y^2 = 9 - 3x + x^2/4$. $\frac{3}{4}x^2 + 3x + y^2 - 9 = 0$. (Sign of $3x$ was wrong.)

$\frac{3}{4}(x^2 + 4x + 4) + y^2 - 9 - 3 = 0$. $\frac{3}{4}(x+2)^2 + y^2 = 12$. This is an ellipse
centred at $(-2, 0)$ with semi-axes $a = 4$ and $b = 2\sqrt{3}$.

(d) The directrix is $x = l/e = 3/(1/2) = 6$I.e., $x = 6$ in Cartesian form.

### IT-3: Polar Integration Applications (with Matrices)

**Question:** A region is bounded by $r = 1 + \cos\theta$ (cardioid) and $r = 3\cos\theta$ (circle).
(a) Find the intersection angles. (b) Calculate the area of the region inside the circle but outside
the cardioid. (c) Calculate the area of the region inside the cardioid but outside the circle. (d)
Verify that the total area equals the area of the circle.

**Solution:**

(a) $1 + \cos\theta = 3\cos\theta$. $1 = 2\cos\theta$. $\cos\theta = 1/2$. $\theta = \pm\pi/3$.

(b) Area inside circle, outside cardioid (in the region $\theta \in [-\pi/3, \pi/3]$):
$A = \frac{1}{2}\int_{-\pi/3}^{\pi/3} [(3\cos\theta)^2 - (1+\cos\theta)^2]\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (9\cos^2\theta - 1 - 2\cos\theta - \cos^2\theta)\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (8\cos^2\theta - 2\cos\theta - 1)\,d\theta$
$= \frac{1}{2}\int_{-\pi/3}^{\pi/3} (4 + 4\cos 2\theta - 2\cos\theta - 1)\,d\theta = \frac{1}{2}\int_{-\pi/3}^{\pi/3} (3 + 4\cos 2\theta - 2\cos\theta)\,d\theta$
$= \frac{1}{2}\left[3\theta + 2\sin 2\theta - 2\sin\theta\right]_{-\pi/3}^{\pi/3} = \frac{1}{2}(2\pi) = \pi$.

(c) Area inside cardioid but outside circle (the remaining part of the circle,
$\theta \in [\pi/3, 5\pi/3]$ -- but the cardioid only goes to $\pi$And for
$\theta \in [\pi/3, \pi]$The circle is $r = 3\cos\theta$ which can be negative).

Actually, the area inside the cardioid minus the overlap with the circle: Total cardioid area
$= 3\pi/2$. Total circle area $= 9\pi/4$ (from $r = 3\cos\theta$Area $= \pi(3/2)^2/2 = 9\pi/8$...
Wait, area of circle $r = a\cos\theta$:
$A = \frac{1}{2}\int_{-\pi/2}^{\pi/2} a^2\cos^2\theta\,d\theta = \frac◆LB◆\pi a^2◆RB◆◆LB◆4◆RB◆$).

For $a = 3$: circle area $= 9\pi/4$.

Area inside cardioid, outside circle: $3\pi/2 - \pi = \pi/2$.

(d) Total: overlap ($\pi$) + inside cardioid outside circle ($\pi/2$) $= 3\pi/2$ (cardioid area).
The circle area is $9\pi/4 = 2.25\pi$ and cardioid area is $1.5\pi$. The circle area exceeds the
cardioid area, so the overlap plus outside-cardioid-in-circle should equal $9\pi/4$. Outside
cardioid, inside circle $= 9\pi/4 - \pi = 5\pi/4$.
