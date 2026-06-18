---
title: Group Theory in Particle Physics
tags:
  - Physics
  - University
description: ""eman organised hadrons using approximate SU(3) flavour symmetry:

- **Meson octet:** $\pi^+, \pi^0, \pi^-, K^+, K^0, \bar{K}^0, K^-, \eta$.
- **Baryon octet:** $p, n, \Sigma^+, \Sigma^0, \Sigma^-, \Xi^0, \Xi^-, \Lambda$.
- **Baryon decuplet:** $\Delta^{++}, \Delta^+, \Delta^0, \Delta^-, \Sigma^*, \Xi^*, \Omega^-$.

The prediction of the $\Omega^-$ (with strangeness $S = -3$) by Gell-Mann in 1962 and its discovery
In 1964 was a triumph of the quark model.

<details>
<summary>Example 5.3: Eightfold way mass formula for the baryon octet</summary>

The Gell-Mann--Okubo mass formula for the baryon octet is:

$$\frac{1}{2}(N + \Xi) + \frac{3}{2}\Lambda = 2\Sigma$$

Where $N$, $\Xi$, $\Lambda$, $\Sigma$ denote the average masses of the respective isospin
Multiplets. Substituting the experimental values:

$$N = \frac{m_p + m_n}{2} = \frac{938.3 + 939.6}{2} = 938.9\;\mathrm{MeV}$$
$$\Xi = \frac{m_{\Xi^0} + m_{\Xi^-}}{2} = \frac{1314.9 + 1321.7}{2} = 1318.3\;\mathrm{MeV}$$
$$\Lambda = 1115.7\;\mathrm{MeV}$$
$$\Sigma = \frac{m_{\Sigma^+} + m_{\Sigma^0} + m_{\Sigma^-}}{3} = \frac{1189.4 + 1192.6 + 1197.4}{3} = 1193.1\;\mathrm{MeV}$$

**Left-hand side:**

$$\frac{1}{2}(938.9 + 1318.3) + \frac{3}{2}(1115.7) = 1128.6 + 1673.6 = 2802.2\;\mathrm{MeV}$$

**Right-hand side:**

$$2 \times 1193.1 = 2386.2\;\mathrm{MeV}$$

Wait --- these do not match. This is because the GMO formula for the octet is correctly:

$$\frac{m_N + m_\Xi}{2} = \frac{3m_\Lambda + m_\Sigma}{4}$$

**Left-hand side:** $(938.9 + 1318.3)/2 = 1128.6$ MeV. **Right-hand side:**
$(3 \times 1115.7 + 1193.1)/4 = (3347.1 + 1193.1)/4 = 4540.2/4 = 1135.1$ MeV.

The agreement is within $\sim 0.6\%$Confirming the SU(3) flavour symmetry to good Approximation. The
small deviation is due to SU(3) breaking by the strange quark mass.

</details>

<details>
<summary>Example 5.4: Decuplet equal-spacing rule</summary>

The baryon decuplet states have masses that follow an equal-spacing rule in strangeness:

$$m_{\Omega^-} - m_{\Xi^*} = m_{\Xi^*} - m_{\Sigma^*} = m_{\Sigma^*} - m_\Delta$$

Checking with experimental values:

- $m_\Delta \approx 1232$ MeV
- $m_{\Sigma^*} \approx 1385$ MeV
- $m_{\Xi^*} \approx 1533$ MeV
- $m_{\Omega^-} \approx 1672.5$ MeV

Spacing: $\Delta m_1 = 1385 - 1232 = 153$ MeV, $\Delta m_2 = 1533 - 1385 = 148$ MeV,
$\Delta m_3 = 1672.5 - 1533 = 139.5$ MeV.

The spacings are approximately equal (to within $\sim 9\%$), consistent with the Gell-Mann--Okubo
prediction for the decuplet. The deviations reflect higher-order SU(3)-breaking effects.

</details>

<details>
<summary>Example 5.5: Meson mass relations from the eightfold way</summary>

For the pseudoscalar meson octet, the Gell-Mann--Okubo formula gives:

$$4m_K^2 = m_\pi^2 + 3m_\eta^2$$

Using experimental masses:

- $m_\pi \approx 140$ MeV (average of $\pi^\pm$ and $\pi^0$)
- $m_K \approx 496$ MeV (average of $K^\pm$ and $K^0$)
- $m_\eta \approx 548$ MeV

**Left-hand side:** $4 \times (496)^2 = 4 \times 246\,016 = 984\,064$ MeV$^2$.

**Right-hand side:**
$(140)^2 + 3 \times (548)^2 = 19\,600 + 3 \times 300\,304 = 19\,600 + 900\,912 = 920\,512$ MeV$^2$.

The discrepancy is $(984\,064 - 920\,512)/920\,512 \approx 6.9\%$. This is larger than For the
baryon octet, reflecting the fact that the pseudoscalar mesons are (approximately) Goldstone bosons
of the spontaneously broken chiral symmetry, and their masses receive Additional contributions from
the chiral anomaly ($\eta'$ is not a pure octet state but mixes With the singlet). The
$\eta$-$\eta'$ mixing complicates the mass formula significantly.

</details>

$$
