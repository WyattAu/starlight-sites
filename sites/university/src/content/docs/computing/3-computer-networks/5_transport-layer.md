---
title: Transport Layer
tags:
  - Computing
  - University
description: ""s algorithm: do not update RTT estimates for retransmitted segments.
The ACK could correspond To either the original or the retransmission (retransmission ambiguity).

<details>
<summary>Worked Example: RTT Estimation</summary>

Given: $\alpha = 1/8$, $\beta = 1/4$Initial $\mathrm{RTT_s} = 0$, $\mathrm{RTT_d} = 0$. Measured
RTTs: 220 ms, 240 ms, 230 ms, 260 ms, 250 ms.

**After measurement 1 (220 ms):**

$\mathrm{RTT_s} = (7/8)(0) + (1/8)(220) = 27.5$ ms
$\mathrm{RTT_d} = (3/4)(0) + (1/4)|220 - 27.5| = 48.125$ ms $\mathrm{RTO} = 27.5 + 4(48.125) = 220$
ms

**After measurement 2 (240 ms):**

$\mathrm{RTT_s} = (7/8)(27.5) + (1/8)(240) = 24.06 + 30 = 54.06$ ms
$\mathrm{RTT_d} = (3/4)(48.125) + (1/4)|240 - 54.06| = 36.09 + 46.49 = 82.58$ ms
$\mathrm{RTO} = 54.06 + 4(82.58) = 384.38$ ms

**After measurement 3 (230 ms):**

$\mathrm{RTT_s} = (7/8)(54.06) + (1/8)(230) = 47.30 + 28.75 = 76.05$ ms
$\mathrm{RTT_d} = (3/4)(82.58) + (1/4)|230 - 76.05| = 61.94 + 38.49 = 100.43$ ms
$\mathrm{RTO} = 76.05 + 4(100.43) = 477.77$ ms

**After measurement 4 (260 ms):**

$\mathrm{RTT_s} = (7/8)(76.05) + (1/8)(260) = 66.54 + 32.50 = 99.04$ ms
$\mathrm{RTT_d} = (3/4)(100.43) + (1/4)|260 - 99.04| = 75.32 + 40.24 = 115.56$ ms
$\mathrm{RTO} = 99.04 + 4(115.56) = 561.28$ ms

**After measurement 5 (250 ms):**

$\mathrm{RTT_s} = (7/8)(99.04) + (1/8)(250) = 86.66 + 31.25 = 117.91$ ms
$\mathrm{RTT_d} = (3/4)(115.56) + (1/4)|250 - 117.91| = 86.67 + 33.02 = 119.69$ ms
$\mathrm{RTO} = 117.91 + 4(119.69) = 596.67$ ms

The smoothed RTT converges toward the true average (~240 ms) and the RTO stabilises around 600 ms.

</details>


:::
