---

title: Waveguides and Cavities
tags:
  - Physics
  - University
description: "A rectangular waveguide with dimensions (width) and (height) supports electromagnetic waves propagating in the -direction. Two families of modes exist:"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "physics", "url": "https://physics.wyattau.com"}, {"name": "3 Electromagnetism", "url": "https://physics.wyattau.com/3-electromagnetism"}, {"name": "9_waveguides And Cavities", "url": "https://physics.wyattau.com/3-electromagnetism/9_waveguides-and-cavities"}]
}
</script>

### 9.1 Rectangular Waveguides

A rectangular waveguide with dimensions $a$ (width) and $b$ (height) supports electromagnetic waves
propagating in the $z$-direction. Two families of modes exist: **TE** (transverse electric,
$E_z = 0$) and **TM** (transverse magnetic, $B_z = 0$).

**TE$_{mn}$ modes.** The longitudinal field is
$B_z = B_0\cos(m\pi x/a)\cos(n\pi y/b)\,e^{i(kz-\omega t)}$.

The transverse fields are determined from $B_z$ via:

$$E_x = \frac{i\omega}{k_c^2}\frac{\partial B_z}{\partial y}, \quad E_y = -\frac{i\omega}{k_c^2}\frac{\partial B_z}{\partial x}$$

$$B_x = \frac{-ik}{k_c^2}\frac{\partial B_z}{\partial x}, \quad B_y = \frac{-ik}{k_c^2}\frac{\partial B_z}{\partial y}$$

Where $k_c^2 = (m\pi/a)^2 + (n\pi/b)^2$ is the cutoff wavenumber.

**Cutoff frequency:** Waves propagate only when $\omega > \omega_{c,mn}$ where:

$$f_{c,mn} = \frac{c}{2}\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$

The dominant (lowest frequency) mode is TE$_{10}$ with $f_{c,10} = c/(2a)$ (for $a > b$).

**Dispersion relation:**

$$k = \sqrt{\frac{\omega^2}{c^2} - k_c^2}, \quad v_{\text{phase} = \frac{\omega}{k} = \frac{c}{\sqrt{1 - (\omega_c/\omega)^2}} > c}$$

$$v_{\text{group} = \frac{d\omega}{dk} = c\sqrt{1 - \left(\frac{\omega_c}{\omega}\right)^2} < c}$$

The product $v_p \cdot v_g = c^2$.

### 9.2 Waveguide Impedance and Power Flow

The wave impedance for TE modes:

$$Z_{\text{TE} = \frac{E_x}{H_y} = \frac{\omega\mu_0}{k} = \frac{Z_0}{\sqrt{1 - (f_c/f)^2}}}$$

Where $Z_0 = \sqrt{\mu_0/\varepsilon_0} \approx 377\,\Omega$ is the impedance of free space.

The time-averaged power carried by TE$_{10}$ mode:

$$\langle P \rangle = \frac{ab}{4}E_0^2\frac{\beta}{\omega\mu_0} = \frac{ab}{4Z_{\text{TE}}E_0^2}$$

Where $\beta = k$ is the propagation constant and $E_0$ is the peak electric field.

### 9.3 Resonant Cavities

A rectangular cavity of dimensions $a \times b \times d$ supports standing waves at resonant
frequencies:

$$f_{mnp} = \frac{c}{2}\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2 + \left(\frac{p}{d}\right)^2}$$

Where $m, n, p$ are non-negative integers (not all zero). For TM modes, $p \geq 1$; for TE modes,
$m$ and $n$ cannot both be zero.

**Quality factor:**

$$Q = \frac{\omega \times \text{energy} stored}{\text{power} dissipated} = \frac{2\pi \times \text{energy} stored}{\text{energy} lost per cycle}$$

For a cavity with conducting walls of conductivity $\sigma$:

$$Q \approx \frac{V}{S\,\delta} \cdot \frac{3}{2}$$

Where $V$ is the cavity volume, $S$ is the surface area, and $\delta$ is the skin depth.

<details>
<summary>Worked Example 9.1: X-Band Waveguide</summary>

Standard X-band waveguide (WR-90) has $a = 22.86$ mm, $b = 10.16$ mm.

(a) Cutoff frequency of TE$_{10}$ mode:

$$f_{c,10} = \frac{c}{2a} = \frac{3 \times 10^8}{2 \times 22.86 \times 10^{-3}} = \frac{3 \times 10^8}{4.572 \times 10^{-2}} = 6.56\ \text{GHz}$$

(b) At $f = 10$ GHz (within X-band), is TE$_{10}$ the only propagating mode?

Cutoff of TE$_{01}$: $f_{c,01} = c/(2b) = 3 \times 10^8/(2 \times 10.16 \times 10^{-3}) = 14.76$
GHz.

Cutoff of TE$_{20}$: $f_{c,20} = c/a = 13.12$ GHz.

Since $6.56 < 10 < 13.12$ GHz, only TE$_{10}$ propagates. This single-mode operation is essential
for low-loss, distortion-free signal transmission.

(c) Guide wavelength at 10 GHz:

$$\lambda_g = \frac{\lambda}{\sqrt{1 - (f_c/f)^2}} = \frac{30\ \text{mm}{\sqrt{1 - (6.56/10)^2}} = \frac{30}{\sqrt{1 - 0.430}} = \frac{30}{0.755} = 39.7\ \text{mm}}$$

(d) Phase and group velocities:

$$v_p = \frac{c}{\sqrt{1 - (f_c/f)^2}} = \frac{3 \times 10^8}{0.755} = 3.97 \times 10^8\ \text{m}/s = 1.32\,c$$

$$v_g = c\sqrt{1 - (f_c/f)^2} = 3 \times 10^8 \times 0.755 = 2.27 \times 10^8\ \text{m}/s = 0.756\,c$$

Check: $v_p \times v_g = 1.32c \times 0.756c = c^2$. $\checkmark$

</details>

## Common Pitfalls

- **Assuming TEM modes exist in hollow waveguides:** TEM modes require at least two separate conductors (e.g., coaxial cables). Hollow rectangular and circular waveguides cannot support TEM modes; they only support TE and TM modes.
- **Confusing cutoff frequency with zero propagation:** At $\omega = \omega_c$, $k = 0$ and the wave does not propagate. Below cutoff, $k$ becomes imaginary and fields decay exponentially (evanescent mode), carrying no net power.
- **Forgetting that $m$ or $n$ can be zero in TE modes but not in TM modes:** For TE$_{mn}$ modes, $m$ and $n$ cannot both be zero, but one may be zero. For TM$_{mn}$ modes, both $m$ and $n$ must be non-zero, meaning the lowest TM mode is TM$_{11}$.
- **Misapplying the quality factor formula:** The $Q$ of a cavity depends on the specific mode, as different field distributions produce different wall currents and hence different ohmic losses. The approximate formula $Q \approx (V/S\delta) \cdot 3/2$ is for the dominant mode only.

## Worked Example: Circular Waveguides

For a circular waveguide of radius $R$, the TE modes have cutoff wavenumbers $k_c = p'_{mn}/R$ where $p'_{mn}$ is the $n$-th root of $J'_m(x) = 0$. The TM modes have $k_c = p_{mn}/R$ where $p_{mn}$ is the $n$-th root of $J_m(x) = 0$.

| Mode | Cutoff condition | Lowest root | $f_c$ for $R = 1$ cm |
|------|-----------------|-------------|---------------------|
| TE$_{11}$ | $J'_1(p'_{11}) = 0$ | $p'_{11} = 1.841$ | 8.79 GHz |
| TM$_{01}$ | $J_0(p_{01}) = 0$ | $p_{01} = 2.405$ | 11.48 GHz |
| TE$_{21}$ | $J'_2(p'_{21}) = 0$ | $p'_{21} = 3.054$ | 14.58 GHz |

The dominant mode in a circular waveguide is TE$_{11}$, with cutoff $f_c = \frac{cp'_{11}}{2\pi R} = \frac{1.841c}{2\pi R}$. Circular waveguides are used in rotating joints and polarisation-sensitive applications because TE$_{11}$ maintains polarisation orientation.

## Worked Example: Cavity Mode Selection

**Problem.** Design a rectangular cavity ($a = 3$ cm, $b = 1.5$ cm, $d = 2$ cm) that resonates at approximately 10 GHz. Which mode should be used?

**Solution.** The resonant frequency formula is $f_{mnp} = \frac{c}{2}\sqrt{(m/a)^2 + (n/b)^2 + (p/d)^2}$.

For TE$_{101}$: $f = \frac{3 \times 10^8}{2}\sqrt{(1/0.03)^2 + (1/0.02)^2} = 1.5 \times 10^8 \times \sqrt{1111.1 + 2500} = 1.5 \times 10^8 \times 60.09 = 9.01$ GHz.

For TE$_{102}$: $f = 1.5 \times 10^8 \times \sqrt{1111.1 + 10000} = 1.5 \times 10^8 \times 105.4 = 15.8$ GHz.

For TE$_{011}$: $f = 1.5 \times 10^8 \times \sqrt{(1/0.015)^2 + (1/0.02)^2} = 1.5 \times 10^8 \times \sqrt{4444.4 + 2500} = 1.5 \times 10^8 \times 83.33 = 12.5$ GHz.

TE$_{101}$ at 9.01 GHz is closest to 10 GHz. Fine-tuning the dimensions or inserting a dielectric can adjust the resonant frequency upward to exactly 10 GHz.

## Cross-References

- [Electromagnetic Waves](/physics/3-electromagnetism/5_electromagnetic-waves) -- The wave equation and dispersion relation for free-space propagation provide the starting point for waveguide mode analysis.
- [Special Relativity and Electromagnetism](/physics/3-electromagnetism/7_special-relativity-and-electromagnetism) -- The phase velocity exceeding $c$ in waveguides is consistent with special relativity because only the group velocity carries information.
- [Lasers](/physics/4-optics-and-waves/9_lasers) -- Laser cavities are optical resonators governed by the same standing-wave and quality-factor principles as microwave cavities.

- [Calculus](https://mathematics.wyattau.com/docs/calculus)
- [Linear Algebra](https://mathematics.wyattau.com/docs/linear-algebra)
- [Vector Calculus](https://mathematics.wyattau.com/docs/vector-calculus)

## Key Relationships

- **Cutoff frequency determines single-mode operation:** For a waveguide with $a > b$, the TE$_{10}$ mode has the lowest cutoff. Operating between $f_{c,10}$ and the next higher cutoff ensures only one mode propagates, avoiding modal dispersion.
- **Phase velocity exceeds $c$ while group velocity is below $c$:** This is consistent with special relativity because no information travels at the phase velocity; signal velocity is bounded by $v_g \leq c$.
- **The product $v_p \cdot v_g = c^2$ is universal** for all waveguide modes in a lossless rectangular guide, a direct consequence of the dispersion relation.
- **Quality factor $Q$ increases with cavity size:** Larger cavities store more energy relative to wall losses, giving higher $Q$. This is why microwave cavities in particle accelerators are large.
- **Skin depth decreases with frequency:** Higher frequency means thinner current-carrying layer on walls, reducing resistive losses but also reducing the effective conductor cross-section.

## Applications

- **Microwave communication:** Rectangular waveguides (e.g., WR-90 for X-band) carry radar signals with low loss, as the confined mode avoids radiation losses.
- **Particle accelerators:** Resonant cavities (e.g., RF cavities in synchrotrons) accelerate charged particles by sustaining strong oscillating electric fields at precise frequencies.
- **Microwave ovens:** The magnetron generates microwaves at 2.45 GHz that propagate into the oven cavity, where standing waves heat food.
- **Fibre optics:** Although optical fibres are dielectric waveguides rather than metallic, the same concepts of modes, cutoff, and dispersion apply.
- **Radar systems:** Waveguide components (bends, twists, directional couplers) route microwave signals between the transmitter, antenna, and receiver with minimal loss.

## Intuition

A waveguide is a metallic pipe that channels electromagnetic waves like a flute channels sound. The cutoff frequency acts like a minimum note: waves below this frequency cannot propagate and decay exponentially. Phase velocity exceeding c is not a paradox because it carries no information; the group velocity, which does, stays below c. Cavities are like organ pipes for microwaves, resonating at specific frequencies determined by their dimensions. The quality factor measures how long a cavity rings, like how long a bell sustains its tone after being struck.

