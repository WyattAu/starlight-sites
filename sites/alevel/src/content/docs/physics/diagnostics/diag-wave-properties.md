---
title: "Wave Properties -- Diagnostic Tests"
description: ""s Law

**Question:**

Unpolarised light of intensity $I_0$ passes through two polarising filters. The first has its
transmission axis vertical. The second is rotated by an angle $\theta$ from the vertical.

(a) Calculate the intensity transmitted through both filters as a function of $\theta$.

(b) At what angle $\theta$ is the transmitted intensity equal to $I_0/8$?

(c) A third polariser is inserted between the first two, with its transmission axis at $45^\circ$ to
the vertical. Calculate the transmitted intensity when $\theta = 90^\circ$.

**Solution:**

(a) After the first (vertical) polariser, the intensity is $I_0/2$ (unpolarised light loses half its
intensity through any polariser).

After the second polariser (at angle $\theta$), by Malus's law:

$$I = \frac{I_0}{2}\cos^2\theta$$

(b) $\frac{I_0}{2}\cos^2\theta = \frac{I_0}{8}$

$$\cos^2\theta = \frac{1}{4} \Rightarrow \cos\theta = \frac{1}{2} \Rightarrow \theta = 60^\circ$$

(c) First polariser (vertical): intensity $= I_0/2$Polarised vertically.

Second polariser (at $45^\circ$):
$I_2 = \frac{I_0}{2}\cos^2 45^\circ = \frac{I_0}{2} \times \frac{1}{2} = \frac{I_0}{4}$Polarised at
$45^\circ$.

Third polariser (horizontal, $\theta = 90^\circ$ from vertical): the angle between the $45^\circ$
polarisation and horizontal is $45^\circ$.

$$I_3 = \frac{I_0}{4}\cos^2 45^\circ = \frac{I_0}{4} \times \frac{1}{2} = \frac{I_0}{8}$$

Without the middle polariser, at $\theta = 90^\circ$ the transmitted intensity would be zero
(crossed polarisers). The insertion of a third polariser at $45^\circ$ allows light to pass through,
demonstrating that polarisers project the electric field onto their transmission axis rather than
blocking light.

## Integration Tests

### IT-1: Doppler Effect and EM Waves (with Superposition)

**Question:**

A galaxy is moving away from Earth at a speed of $3.0 \times 10^6\,\text{m}\,\text{s}^{-1}$. A
spectral line of wavelength $656\,\text{nm}$ (hydrogen alpha) is observed from this galaxy.

(a) Calculate the observed wavelength of this line. (Use the non-relativistic Doppler formula.)

(b) Calculate the percentage change in the observed frequency.

(c) A space probe approaching Jupiter at $2.0 \times 10^4\,\text{m}\,\text{s}^{-1}$ transmits a
radio signal at $8.4\,\text{GHz}$. Calculate the frequency received by an observer on Jupiter.

Take $c = 3.00 \times 10^8\,\text{m}\,\text{s}^{-1}$.

**Solution:**

(a) For a source moving away from the observer:

$$\frac◆LB◆\Delta\lambda◆RB◆◆LB◆\lambda◆RB◆ = \frac{v}{c}$$
$$\Delta\lambda = \frac◆LB◆3.0 \times 10^6◆RB◆◆LB◆3.00 \times 10^8◆RB◆ \times 656 = 0.010 \times 656 = 6.56\,\text{nm}$$

Observed wavelength: $\lambda' = 656 + 6.56 = 662.56 \approx 663\,\text{nm}$ (redshifted)

(b) $f = c/\lambda$So $\Delta f/f = -\Delta\lambda/\lambda = -v/c = -1.0\%$

The frequency decreases by $1.0\%$.

(c) The probe approaches Jupiter, so the observed frequency is higher:

$$f' = f\left(\frac{c}{c - v}\right) = 8.4 \times 10^9 \times \frac◆LB◆3.00 \times 10^8◆RB◆◆LB◆3.00 \times 10^8 - 2.0 \times 10^4◆RB◆$$
$$= 8.4 \times 10^9 \times \frac◆LB◆3.00 \times 10^8◆RB◆◆LB◆2.9998 \times 10^8◆RB◆ = 8.4 \times 10^9 \times 1.000067 = 8.4006 \times 10^9\,\text{Hz}$$

The shift is $\Delta f = 5.6 \times 10^5\,\text{Hz} = 560\,\text{kHz}$.

---

### IT-2: Standing Waves on a String (with Oscillations)

**Question:**

A string of length $0.80\,\text{m}$ and mass $4.0 \times 10^{-3}\,\text{kg}$ is fixed at both ends
and stretched to a tension of $25\,\text{N}$.

(a) Calculate the speed of transverse waves on the string.

(b) Calculate the fundamental frequency and the frequencies of the next two harmonics.

(c) The string is plucked at its centre. Explain which harmonics are excited and calculate the
wavelength of the fundamental mode.

**Solution:**

(a) Wave speed: $v = \sqrt◆LB◆T/\mu◆RB◆$Where
$\mu = m/l = 4.0 \times 10^{-3}/0.80 = 5.0 \times 10^{-3}\,\text{kg}\,\text{m}^{-1}$

$$v = \sqrt◆LB◆25/(5.0 \times 10^{-3})◆RB◆ = \sqrt{5000} = 70.7\,\text{m}\,\text{s}^{-1}$$

(b) For a string fixed at both ends, $f_n = nv/(2l)$:

Fundamental ($n = 1$): $f_1 = 70.7/(2 \times 0.80) = 44.2\,\text{Hz}$

Second harmonic ($n = 2$): $f_2 = 2 \times 44.2 = 88.4\,\text{Hz}$

Third harmonic ($n = 3$): $f_3 = 3 \times 44.2 = 132.6\,\text{Hz}$

(c) Plucking at the centre excites the odd harmonics ($n = 1, 3, 5, \ldots$) most strongly because
the centre is an antinode for odd harmonics and a node for even harmonics. Even harmonics
($n = 2, 4, \ldots$) have a node at the centre, so plucking there does not excite them.

Fundamental wavelength: $\lambda_1 = 2l = 1.60\,\text{m}$

The fundamental mode has one antinode at the centre and nodes at both ends.

---

### IT-3: Seismic Waves Through Earth Layers (with Properties of Materials)

**Question:**

P-waves (longitudinal) travel through the Earth's crust at $6.0\,\text{km}\,\text{s}^{-1}$ and
through the mantle at $10.0\,\text{km}\,\text{s}^{-1}$. The crust is $35\,\text{km}$ thick. A P-wave
is detected at a seismograph $200\,\text{km}$ from the epicentre.

(a) Calculate the time for the P-wave to reach the seismograph via the direct path through the crust
only.

(b) The wave refracts at the crust-mantle boundary. Using Snell's law, calculate the critical angle
and determine whether total internal reflection occurs for the direct path.

(c) Explain why S-waves (transverse) are not detected on the opposite side of the Earth from a large
earthquake.

**Solution:**

(a) Direct path through crust: $t = d/v_{\text{crust}} = 200/6.0 = 33.3\,\text{s}$

(b) The wave travels from crust (slower) into mantle (faster), so it bends away from the normal.

Critical angle (for TIR from mantle to crust):

$$\sin\theta_c = \frac◆LB◆v_{\text{crust}}◆RB◆◆LB◆v_{\text{mantle}}◆RB◆ = \frac{6.0}{10.0} = 0.60$$
$$\theta_c = 36.9^\circ$$

For the direct path, the wave enters the mantle at some angle. Since the wave goes from a slower
medium (crust) to a faster medium (mantle), TIR cannot occur at this boundary. TIR only occurs when
going from a slower medium to a faster medium if the wave is already inside the slower medium --
which is not the case here. The wave always enters the mantle (it refracts away from the normal).

For a wave travelling through the mantle and hitting the crust-mantle boundary from below (trying to
exit to the crust), TIR occurs at angles exceeding $\theta_c = 36.9^\circ$ from the normal.

(c) S-waves are transverse and cannot propagate through liquids. The Earth's outer core is liquid,
so S-waves are blocked by it. This creates an S-wave shadow zone on the opposite side of the Earth.
The detection of this shadow zone was key evidence for the existence of a liquid outer core.
