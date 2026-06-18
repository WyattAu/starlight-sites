---
title: "Electric and Magnetic Fields -- Diagnostic Tests"
description: ""the electric field is zero wherever the potential is zero." Construct a
counterexample to show this is false.

**Solution:**

(a) The electric field at any point has a unique direction and magnitude. If two field lines crossed
at a point $P$The field at $P$ would have two different directions simultaneously, which is
impossible because a test charge placed at $P$ can only experience a force in one direction.

More formally: the electric field $\vec{E} = -\nabla V$ is the gradient of a scalar function $V$.
The gradient of a scalar function is unique at every point where $V$ is differentiable. Therefore
$\vec{E}$ cannot have two different directions at the same point.

(b) The potential difference depends only on the displacement in the direction of the field:

$$\Delta V = -\vec{E} \cdot \Delta\vec{r} = -(500\hat{i}) \cdot (3\hat{i} + 3\hat{j}) = -1500\,\text{V}$$

The $y$-displacement does not contribute because the field has no $y$-component. The point $(5, 3)$
is at a lower potential than $(2, 0)$.

(c) Counterexample: Two equal positive charges $+q$ separated by distance $d$. The midpoint between
them has zero electric field (by symmetry, the fields cancel). However, the potential at the
midpoint is $V = 2kq/(d/2) = 4kq/d \neq 0$.

This shows that zero field does not imply zero potential. The field depends on the **gradient** of
the potential, not its absolute value. The converse is also instructive: on the perpendicular
bisector of a dipole, the potential is zero everywhere, but the field is non-zero (except at
infinity).

---

### UT-3: Magnetic Force Perpendicularity and Circular Motion

**Question:**

An electron (charge $-e = -1.6 \times 10^{-19}\,\text{C}$Mass
$m_e = 9.11 \times 10^{-31}\,\text{kg}$) moves with velocity
$\vec{v} = (3.0 \times 10^6\hat{i} + 4.0 \times 10^6\hat{j})\,\text{m}\,\text{s}^{-1}$ in a uniform
magnetic field $\vec{B} = 0.50\hat{k}\,\text{T}$.

(a) Calculate the magnetic force on the electron.

(b) Calculate the radius of the circular path and the period of revolution.

(c) Explain why the magnetic force does no work on the electron, and calculate the speed of the
electron at any time during its motion.

**Solution:**

(a) $\vec{F} = q\vec{v} \times \vec{B}$

$$\vec{v} \times \vec{B} = (3.0 \times 10^6\hat{i} + 4.0 \times 10^6\hat{j}) \times 0.50\hat{k}$$

$$= 3.0 \times 10^6 \times 0.50(\hat{i} \times \hat{k}) + 4.0 \times 10^6 \times 0.50(\hat{j} \times \hat{k})$$

$$= 1.5 \times 10^6(-\hat{j}) + 2.0 \times 10^6(\hat{i})$$

$$= 2.0 \times 10^6\hat{i} - 1.5 \times 10^6\hat{j}$$

$$\vec{F} = (-1.6 \times 10^{-19})(2.0 \times 10^6\hat{i} - 1.5 \times 10^6\hat{j})$$

$$= (-3.2 \times 10^{-13}\hat{i} + 2.4 \times 10^{-13}\hat{j})\,\text{N}$$

(b) The speed:
$v = |\vec{v}| = \sqrt{(3.0 \times 10^6)^2 + (4.0 \times 10^6)^2} = \sqrt{9 + 16} \times 10^6 = 5.0 \times 10^6\,\text{m}\,\text{s}^{-1}$

Force magnitude:
$F = |\vec{F}| = 1.6 \times 10^{-19} \times 5.0 \times 10^6 \times 0.50 = 4.0 \times 10^{-13}\,\text{N}$

Radius:
$r = \frac{m_e v}{eB} = \frac{9.11 \times 10^{-31} \times 5.0 \times 10^6}{1.6 \times 10^{-19} \times 0.50}$

$$r = \frac{4.555 \times 10^{-24}}{8.0 \times 10^{-20}} = 5.69 \times 10^{-5}\,\text{m} = 56.9\,\mu\text{m}$$

Period:
$T = \frac{2\pi m_e}{eB} = \frac{2\pi \times 9.11 \times 10^{-31}}{1.6 \times 10^{-19} \times 0.50} = \frac{5.724 \times 10^{-30}}{8.0 \times 10^{-20}} = 7.16 \times 10^{-11}\,\text{s}$

(c) The magnetic force is always perpendicular to the velocity
($\vec{F} = q\vec{v} \times \vec{B}$And the cross product is perpendicular to $\vec{v}$). Since
power $= \vec{F} \cdot \vec{v} = 0$The magnetic force does no work. The kinetic energy and therefore
the speed remain constant.

Speed at any time: $v = 5.0 \times 10^6\,\text{m}\,\text{s}^{-1}$ (unchanged).

## Integration Tests

### IT-1: Charged Particle in Crossed Electric and Magnetic Fields (with Kinematics)

**Question:**

A proton (mass $1.67 \times 10^{-27}\,\text{kg}$Charge $+1.6 \times 10^{-19}\,\text{C}$) enters a
region with crossed electric and magnetic fields.
$\vec{E} = 2.0 \times 10^4\,\text{V}\,\text{m}^{-1}$ in the $-y$ direction and
$\vec{B} = 0.10\,\text{T}$ in the $-z$ direction. The proton enters with velocity
$\vec{v} = v_0\hat{i}$.

(a) Calculate the value of $v_0$ for which the proton passes through undeflected (velocity selector
condition).

(b) If the proton enters at $v = 1.5v_0$Calculate the radius of curvature of its path.

(c) If the proton enters at $v = 0.5v_0$Describe qualitatively the path and determine whether it is
deflected towards the positive or negative $y$-plate.

**Solution:**

(a) For undeflected motion, the electric and magnetic forces balance:

$$qE = qv_0B$$

$$v_0 = \frac{E}{B} = \frac{2.0 \times 10^4}{0.10} = 2.0 \times 10^5\,\text{m}\,\text{s}^{-1}$$

(b) At $v = 1.5v_0 = 3.0 \times 10^5\,\text{m}\,\text{s}^{-1}$The magnetic force exceeds the
electric force. The net force (perpendicular to the velocity):

$$F_{\text{net}} = qvB - qE = qB(v - v_0) = 1.6 \times 10^{-19} \times 0.10 \times 1.0 \times 10^5 = 1.6 \times 10^{-15}\,\text{N}$$

Radius: $r = \frac{mv}{qB_{\text{eff}}}$

The net force provides the centripetal force:

$$r = \frac{mv}{qvB - qE} = \frac{1.67 \times 10^{-27} \times 3.0 \times 10^5}{1.6 \times 10^{-15}} = \frac{5.01 \times 10^{-22}}{1.6 \times 10^{-15}} = 3.13 \times 10^{-7}\,\text{m}$$

(c) At $v = 0.5v_0 = 1.0 \times 10^5\,\text{m}\,\text{s}^{-1}$The electric force exceeds the
magnetic force.

Electric force on the proton (in $-y$ direction):
$F_E = qE = 1.6 \times 10^{-19} \times 2.0 \times 10^4 = 3.2 \times 10^{-15}\,\text{N}$ (downward,
since $E$ is in $-y$ and $q$ is positive)

Magnetic force:
$F_B = qvB = 1.6 \times 10^{-19} \times 1.0 \times 10^5 \times 0.10 = 1.6 \times 10^{-15}\,\text{N}$

Using the right-hand rule for positive charge: $\vec{v} = v\hat{i}$, $\vec{B} = -B\hat{k}$So
$\vec{v} \times \vec{B} = vB(\hat{i} \times (-\hat{k})) = vB\hat{j}$. Force $= qvB\hat{j}$I.e. In
the $+y$ direction.

Net force:
$F_{\text{net}} = F_E + F_B = -3.2 \times 10^{-15}\hat{j} + 1.6 \times 10^{-15}\hat{j} = -1.6 \times 10^{-15}\hat{j}\,\text{N}$

The proton is deflected in the $-y$ direction (towards the negative $y$-plate).

---

### IT-2: Electromagnetic Induction with a Moving Loop (with Energy)

**Question:**

A rectangular conducting loop of width $w = 0.10\,\text{m}$ and length $L = 0.20\,\text{m}$ and
resistance $R = 2.0\,\Omega$ is pulled with constant velocity $v = 5.0\,\text{m}\,\text{s}^{-1}$ out
of a region of uniform magnetic field $B = 0.50\,\text{T}$ directed into the page. The field region
has width $0.30\,\text{m}$.

At $t = 0$The loop is entirely within the field region with its leading edge at the right boundary
of the field.

(a) Calculate the induced EMF and current as the loop exits the field.

(b) Calculate the force required to maintain constant velocity and the power dissipated.

(c) Show that the work done by the external force equals the energy dissipated in the resistor.

**Solution:**

(a) As the loop exits, the area within the field decreases. Flux: $\Phi = BA$ where
$A = w \times x_{\text{inside}}$.

Rate of change of area: $\frac{dA}{dt} = -wv = -0.10 \times 5.0 = -0.50\,\text{m}^2\,\text{s}^{-1}$

Induced EMF (magnitude):
$\varepsilon = B \times w \times v = 0.50 \times 0.10 \times 5.0 = 0.25\,\text{V}$

By Lenz"s law, the induced current opposes the decrease in flux, so it creates a field into the page
inside the loop. By the right-hand rule, the current flows clockwise.

Current: $I = \varepsilon/R = 0.25/2.0 = 0.125\,\text{A}$

(b) The current-carrying conductor in the magnetic field experiences a force opposing the motion
(Lenz's law):

$$F = BIw = 0.50 \times 0.125 \times 0.10 = 6.25 \times 10^{-3}\,\text{N}$$

This opposes the motion, so the external force must equal $6.25 \times 10^{-3}\,\text{N}$ to
maintain constant velocity.

Power dissipated: $P = I^2R = 0.125^2 \times 2.0 = 0.03125\,\text{W}$

Power supplied by external force: $P = Fv = 6.25 \times 10^{-3} \times 5.0 = 0.03125\,\text{W}$

(c) Work done by external force to move the loop a distance $d$:

$$W_{\text{ext}} = Fd = (BIw)d$$

Energy dissipated in the resistor during the same time:

$$W_R = P \times t = I^2R \times \frac{d}{v} = \frac{(Bwv)^2}{R} \times \frac{d}{Rv} \times R = \frac{B^2w^2v^2}{R} \times \frac{d}{v} = \frac{B^2w^2vd}{R}$$

Check:
$F = \frac{B^2w^2v}{R} = \frac{0.25 \times 0.01 \times 5.0}{2.0} = 6.25 \times 10^{-3}\,\text{N}$

So $W_{\text{ext}} = Fd = \frac{B^2w^2vd}{R} = W_R$.

The work done by the external force equals the energy dissipated as Joule heating in the resistor,
confirming energy conservation.

---

### IT-3: Potential Divider with Capacitor and Inductor (with Current Electricity)

**Question:**

A circuit contains a $12\,\text{V}$ battery with negligible internal resistance, a resistor
$R = 100\,\Omega$And an inductor $L = 0.50\,\text{H}$ in series. A switch is closed at $t = 0$.

(a) Calculate the time constant of the circuit and the current at $t = 5.0\,\text{ms}$.

(b) Calculate the voltage across the inductor and the voltage across the resistor at
$t = 5.0\,\text{ms}$.

(c) Explain why the total voltage across $R$ and $L$ equals $12\,\text{V}$ at all times, and
calculate the energy stored in the inductor at $t \to \infty$.

**Solution:**

(a) Time constant: $\tau = L/R = 0.50/100 = 5.0 \times 10^{-3}\,\text{s} = 5.0\,\text{ms}$

Current growth:
$I(t) = \frac{V}{R}(1 - e^{-t/\tau}) = \frac{12}{100}(1 - e^{-t/\tau}) = 0.12(1 - e^{-t/\tau})$

At $t = 5.0\,\text{ms} = \tau$:

$$I = 0.12(1 - e^{-1}) = 0.12 \times 0.632 = 0.0759\,\text{A}$$

(b) Voltage across resistor: $V_R = IR = 0.0759 \times 100 = 7.59\,\text{V}$

Voltage across inductor: $V_L = V - V_R = 12 - 7.59 = 4.41\,\text{V}$

Alternatively:
$V_L = L\frac{dI}{dt} = L \times \frac{V}{R\tau}e^{-t/\tau} = 0.50 \times \frac{12}{100 \times 0.005} \times e^{-1} = 0.50 \times 24 \times 0.368 = 4.41\,\text{V}$

(c) By Kirchhoff's voltage law: $V = V_R + V_L$ at all times. This is a direct consequence of energy
conservation around the loop. The battery supplies energy; some is dissipated in $R$ and some is
stored in the magnetic field of $L$.

At $t \to \infty$: $I \to V/R = 0.12\,\text{A}$ and $V_L \to 0$.

Energy stored in inductor:

$$E = \frac{1}{2}LI_{\max}^2 = \frac{1}{2} \times 0.50 \times 0.12^2 = \frac{1}{2} \times 0.50 \times 0.0144 = 3.6 \times 10^{-3}\,\text{J} = 3.6\,\text{mJ}$$
