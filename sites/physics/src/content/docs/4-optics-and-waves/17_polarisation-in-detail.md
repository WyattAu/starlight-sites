---
title: Polarisation in Detail
tags:
  - Physics
  - University
description: 'The represents the polarisation state of a monochromatic plane wave: Comprehensive educational content coverage with definitions and practice problems.'
---

### 13.1 Jones Calculus

The **Jones vector** represents the polarisation state of a monochromatic plane wave:

$$\mathbf{E} = \begin{pmatrix} E_x \\ E_y \end{pmatrix} = \begin{pmatrix} A_x\,e^{i\delta_x} \\ A_y\,e^{i\delta_y} \end{pmatrix}$$

Optical elements are represented by $2 \times 2$ matrices:

- **Linear polariser** at angle $\theta$:
  $\mathbf{P}(\theta) = \begin{pmatrix}\cos^2\theta & \sin\theta\cos\theta \\ \sin\theta\cos\theta & \sin^2\theta\end{pmatrix}$

- **Quarter-wave plate** (fast axis horizontal, retardation $\pi/2$):
  $\mathbf{Q} = \begin{pmatrix}1 & 0 \\ 0 & e^{i\pi/2}\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & i\end{pmatrix}$

- **Half-wave plate** (retardation $\pi$):
  $\mathbf{H} = \begin{pmatrix}1 & 0 \\ 0 & e^{i\pi}\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$

**Theorem 13.1.** The output of a sequence of optical elements is the product of their Jones
matrices applied to the input Jones vector:

$$\mathbf{E}_{\mathrm{out} = \mathbf{M}_n \cdots \mathbf{M}_2\,\mathbf{M}_1\,\mathbf{E}_{\mathrm{in}}}$$

### 13.2 Stokes Parameters

For partially polarised light, the **Stokes parameters** are:

$$S_0 = |E_x|^2 + |E_y|^2, \quad S_1 = |E_x|^2 - |E_y|^2, \quad S_2 = 2\,\mathrm{Re}(E_x E_y^*), \quad S_3 = 2\,\mathrm{Im}(E_x E_y^*)$$

The **degree of polarisation** is

$$P = \frac{\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$$

For fully polarised light: $P = 1$. For unpolarised light: $S_1 = S_2 = S_3 = 0$.

### 13.3 Worked Example: Polarisation by Multiple Reflections

**Problem.** Unpolarised light is incident on a stack of $N$ glass plates at the Brewster angle.
Find the degree of polarisation of the transmitted light.

<details>
<summary>Solution</summary>

At the Brewster angle $\theta_B$The reflected light for the $p$-polarisation has zero amplitude
($r_p = 0$). The $s$-polarisation is partially reflected with reflectance
$R_s = ((n_1\cos\theta_i - n_2\cos\theta_t)/(n_1\cos\theta_i + n_2\cos\theta_t))^2$.

For one interface, the transmitted $p$-intensity is $T_p = 1$ and the transmitted $s$-intensity is
$T_s = 1 - R_s$. After $N$ interfaces:

$$I_p^{(N)} = I_0/2, \quad I_s^{(N)} = (I_0/2)(1 - R_s)^N$$

The degree of polarisation:

$$P = \frac{I_p^{(N)} - I_s^{(N)}}{I_p^{(N)} + I_s^{(N)}} = \frac{1 - (1 - R_s)^N}{1 + (1 - R_s)^N}$$

For $N \to \infty$: $P \to 1$. This is the principle behind "pile-of-plates" polarisers. For glass
($n = 1.5$) at $\theta_B \approx 56.3°$:
$R_s \approx ((1.5 \times 0.555 - \cos\theta_t)/(1.5 \times 0.555 + \cos\theta_t))^2$.

For five plates: $P = (1 - (1 - R_s)^5)/(1 + (1 - R_s)^5) \approx 50\%$.

$\blacksquare$

</details>

### 13.4 Jones Matrices for Common Optical Elements

A systematic reference for standard Jones matrices:

| Element | Jones Matrix |
|---------|-------------|
| Linear polariser ($x$-axis) | $\begin{pmatrix}1 & 0 \\ 0 & 0\end{pmatrix}$ |
| Linear polariser ($y$-axis) | $\begin{pmatrix}0 & 0 \\ 0 & 1\end{pmatrix}$ |
| Quarter-wave plate (fast axis $x$) | $\begin{pmatrix}1 & 0 \\ 0 & i\end{pmatrix}$ |
| Half-wave plate (fast axis $x$) | $\begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$ |
| Rotator (angle $\theta$) | $\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$ |

### 13.5 Poincaré Sphere

The **Poincaré sphere** provides a geometric representation of polarisation states. The Stokes parameters $(S_1, S_2, S_3)$ normalised by $S_0$ are the Cartesian coordinates of a point on a unit sphere:

- North pole ($S_3 = 1$): right circular polarisation
- South pole ($S_3 = -1$): left circular polarisation
- Equator ($S_3 = 0$): linear polarisation (orientation varies with longitude)
- Intermediate latitudes: elliptical polarisation

### 13.6 Worked Example: Determining Unknown Polarisation

**Problem.** Unpolarised light passes through a linear polariser at $0^\circ$, then a quarter-wave plate with fast axis at $45^\circ$, then a linear polariser at $90^\circ$. Find the transmitted intensity.

<details>
<summary>Solution</summary>

After first polariser ($0^\circ$): $\mathbf{E}_1 = \begin{pmatrix}1 \\ 0\end{pmatrix}$ (normalised).

Quarter-wave plate with fast axis at $45^\circ$: rotate to fast-axis basis, apply retardation, rotate back:

$$\mathbf{E}_2 = R(-45^\circ)\begin{pmatrix}1 & 0 \\ 0 & i\end{pmatrix}R(45^\circ)\begin{pmatrix}1 \\ 0\end{pmatrix}$$

where $R(\theta) = \begin{pmatrix}\cos\theta & \sin\theta \\ -\sin\theta & \cos\theta\end{pmatrix}$.

$$R(45^\circ)\begin{pmatrix}1 \\ 0\end{pmatrix} = \frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ -1\end{pmatrix}$$

After retardation: $\frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ -i\end{pmatrix}$. Rotating back: $\mathbf{E}_2 = \frac{1}{\sqrt{2}}\begin{pmatrix}1 \\ i\end{pmatrix}$ (right circular).

Second polariser at $90^\circ$ selects $y$-component: $E_y = i/\sqrt{2}$.

Transmitted intensity: $I = |E_y|^2 = 1/2$.

$\blacksquare$

</details>

### 13.7 Optical Activity and Faraday Rotation

Some materials exhibit **optical activity**: the plane of linear polarisation rotates as light propagates. This arises from circular birefringence — different refractive indices for left and right circularly polarised light.

The rotation angle is $\phi = \alpha L$ where $\alpha$ is the specific rotation and $L$ is the path length.

In the **Faraday effect**, a magnetic field along the propagation direction induces circular birefringence:

$$\phi = V B L$$

where $V$ is the Verdet constant. Faraday rotation is non-reciprocal: reversing the propagation direction doubles the rotation, unlike natural optical activity which cancels upon reflection.

### 13.8 Applications of Polarisation

1. **3D cinema (IMAX):** Projectors use orthogonal polarisation states for left and right eye images; polarising glasses separate them.
2. **LCD displays:** Liquid crystals rotate the polarisation of light; crossed polarisers convert rotation into intensity modulation.
3. **Stress analysis (photoelasticity):** Transparent materials under stress become birefringent; viewing through crossed polarisers reveals stress patterns.
4. **Radar and remote sensing:** Polarimetric radar measures the full Stokes vector of backscattered radiation to identify terrain and targets.
5. **Quantum cryptography:** The BB84 protocol encodes qubits in the polarisation states of single photons (horizontal/vertical and diagonal/anti-diagonal bases).
6. **Optical isolators:** Combining a polariser with a Faraday rotator creates a non-reciprocal device that allows light to pass in one direction only.

---

