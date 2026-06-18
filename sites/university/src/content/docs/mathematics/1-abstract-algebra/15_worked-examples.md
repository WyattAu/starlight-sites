---
title: Worked Examples
tags:
  - Mathematics
  - University
description: ""s third theorem: $n_5 \equiv 1 \pmod{5}$ and $n_5$
Divides $2$So $n_5 = 1$. The Sylow $5$-subgroup $P = \langle a \rangle \cong \mathbb{Z}/5\mathbb{Z}$
is normal.

$n_2 \equiv 1 \pmod{2}$ and $n_2$ divides $5$So $n_2 = 1$ or $5$.

Let $b$ be an element of order $2$ (exists by Cauchy's theorem). Since $P \trianglelefteq G$
$bab^{-1} \in P$. So $bab^{-1} = a^k$ for some $k \in \{0, 1, 2, 3, 4\}$. Applying conjugation
twice: $b^2ab^{-2} = a^{k^2}$I.e., $a = a^{k^2}$So $k^2 \equiv 1 \pmod{5}$ Giving $k \equiv 1$ or
$k \equiv 4 \pmod{5}$.

**Case $k = 1$:** $bab^{-1} = a$So $a$ and $b$ commute.
$G \cong \mathbb{Z}/5\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \cong \mathbb{Z}/10\mathbb{Z}$.

**Case $k = 4$:** $bab^{-1} = a^4 = a^{-1}$So $ba = a^{-1}b$. This gives the dihedral group $D_5$.

These are the only two possibilities, so there are exactly two groups of order $10$. $\blacksquare$

</details>

