---
title: Introduction
tags:
  - Computing
  - University
description: ""s theorem (since
$|\mathcal{P}(S)| \gt |S|$ for any set $S$). $\blacksquare$

**Theorem 1.2.** The set of all Turing machines is countable.

_Proof._ Each TM has a finite description (its states, alphabet, and transition function). Encode
This as a string over a finite alphabet. The set of all finite strings is countable. $\blacksquare$

**Corollary 1.3.** There exist languages that are not Turing-recognisable (in fact, uncountably Many
such languages).

This follows because there are uncountably many languages but only countably many TMs. The set Of
Turing-recognisable languages is a countable subset of the uncountable set of all languages.

**Cantor's diagonalisation.** The classic .../1-number-and-algebra/3*proof-and-logic of Theorem 1.1
uses diagonalisation: assume the Set of all languages is countable, list them as
$L_1, L_2, L_3, \ldots$And construct a language $D$ that differs from each $L_i$ on the $i$-th
string. Then $D$ is not in the list — contradiction. This technique reappears in the
.../1-number-and-algebra/3_proof-and-logic of undecidability of $A*{\mathrm{TM}}$ (Section 5.2).

