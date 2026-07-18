---
title: "Atoms and Nuclei"
description: "CBSE Class 12 physics: Atomic models, nuclear physics, radioactivity, and worked examples."
---

# Atoms and Nuclei

This topic covers the Bohr model of the hydrogen atom, X-ray production, nuclear structure, radioactivity, and nuclear energy.

## Key Concepts

- Bohr radius: $a_0 = \frac{\varepsilon_0 h^2}{\pi m e^2} \approx 0.529 \, \text{\AA}$
- Energy levels: $E_n = \frac{-13.6}{n^2} \, \text{eV}$ for hydrogen
- Rydberg formula: $\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)$ where $R = 1.097 \times 10^7 \, \text{m}^{-1}$
- Nuclear mass defect: $\Delta m = Zm_p + Nm_n - M$
- Binding energy: $E_B = \Delta m \, c^2$
- Radioactive decay: $N = N_0 e^{-\lambda t}$, half-life $t_{1/2} = \frac{0.693}{\lambda}$
- Mass-energy equivalence: $E = mc^2$
- Alpha decay: $^A_Z X \rightarrow ^{A-4}_{Z-2} Y + ^4_2 \text{He}$
- Beta decay: $^A_Z X \rightarrow ^{A}_{Z+1} Y + e^- + \bar{\nu}_e$

## Worked Example 1 — Energy Levels of Hydrogen

**Problem:** Find the wavelength of light emitted when an electron in hydrogen transitions from $n = 3$ to $n = 2$.

**Solution:**

Energy levels:
$$E_3 = \frac{-13.6}{9} = -1.51 \, \text{eV}, \quad E_2 = \frac{-13.6}{4} = -3.40 \, \text{eV}$$

Energy of emitted photon:
$$\Delta E = E_3 - E_2 = -1.51 - (-3.40) = 1.89 \, \text{eV}$$

Convert to wavelength:
$$\lambda = \frac{hc}{\Delta E} = \frac{1240}{1.89} = 656 \, \text{nm}$$

This is the red line of the Balmer series.

**Common mistake:** Using $E_n = -13.6/n^2$ without the negative sign. The energy is negative because the electron is bound.

## Worked Example 2 — Binding Energy

**Problem:** Calculate the binding energy per nucleon of $^4_2\text{He}$. (Mass of proton = 1.00728 u, mass of neutron = 1.00867 u, mass of $^4$He = 4.00260 u)

**Solution:**

Mass defect:
$$\Delta m = 2(1.00728) + 2(1.00867) - 4.00260$$
$$= 2.01456 + 2.01734 - 4.00260 = 0.02930 \, \text{u}$$

Binding energy:
$$E_B = \Delta m \times 931.5 \, \text{MeV/u} = 0.02930 \times 931.5 = 27.3 \, \text{MeV}$$

Binding energy per nucleon:
$$\frac{E_B}{A} = \frac{27.3}{4} = 6.83 \, \text{MeV/nucleon}$$

**Common mistake:** Forgetting to multiply by 931.5 to convert mass defect from atomic mass units to MeV.

## Worked Example 3 — Radioactive Decay

**Problem:** A radioactive sample has a half-life of 10 days. What fraction remains after 30 days?

**Solution:**

Number of half-lives:
$$n = \frac{30}{10} = 3$$

Fraction remaining:
$$\frac{N}{N_0} = \left(\frac{1}{2}\right)^n = \left(\frac{1}{2}\right)^3 = \frac{1}{8} = 0.125$$

Alternatively, using the decay formula:
$$\lambda = \frac{0.693}{t_{1/2}} = \frac{0.693}{10} = 0.0693 \, \text{day}^{-1}$$

$$N = N_0 e^{-\lambda t} = N_0 e^{-0.0693 \times 30} = N_0 e^{-2.079} = 0.125 \, N_0$$

**Common mistake:** Using $N = N_0 e^{-t/t_{1/2}}$ instead of $N = N_0 e^{-\lambda t}$ where $\lambda = \ln 2 / t_{1/2}$.

## Practice Problems

1. Find the wavelength of the first line of the Lyman series for hydrogen.
2. Calculate the binding energy of $^{56}_{26}\text{Fe}$ given its mass is 55.9349 u.
3. A radioactive substance decays to 1/16 of its original amount in 40 days. Find its half-life.

## Common Exam Patterns

- Bohr model problems involve energy level transitions and spectral series
- Use $\lambda = hc / \Delta E$ to convert energy differences to wavelengths
- Binding energy problems always involve mass defect and $E = mc^2$
- Radioactive decay problems use either the half-life or the decay constant
- The Lyman series (UV), Balmer series (visible), and Paschen series (IR) correspond to different final states
