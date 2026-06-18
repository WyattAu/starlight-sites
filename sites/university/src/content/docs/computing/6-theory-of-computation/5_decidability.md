---
title: Decidability
tags:
  - Computing
  - University
description: ""$ that on input $x$: simulates $M$ on $w$. If
$M$ accepts, accept. If $M$ rejects, loop. Then $\langle M, w \rangle \in A_{\mathrm{TM}$ iff $M'$
halts on some input (any input), iff $\langle M' \rangle \in \mathrm{HALT_{\mathrm{TM}$.
$\blacksquare$

<details>
<summary>Worked Example: $A_{\mathrm{TM} \leq_m E_{\mathrm{TM}$</summary>

_Proof._ Given $\langle M, w \rangle$Construct a TM $M_w$ that on input $x$:

1. Simulate $M$ on $w$.
2. If $M$ accepts $w$Accept $x$.
3. If $M$ rejects $w$Reject $x$.

Then $L(M_w) = \Sigma^*$ if $M$ accepts $w$And $L(M_w) = \emptyset$ if $M$ does not accept $w$.

Therefore: $\langle M, w \rangle \in A_{\mathrm{TM}$ iff $L(M_w) \neq \emptyset$ Iff
$\langle M_w \rangle \notin E_{\mathrm{TM}$.

The reduction $f(\langle M, w \rangle) = \langle M_w \rangle$ is computable. So if $E_{\mathrm{TM}$
Were decidable, $\overline{E_{\mathrm{TM}}$ would be decidable, and hence $A_{\mathrm{TM}$ Would be
decidable — contradiction. $\blacksquare$

</details>

<details>
<summary>Worked Example: $E_{\mathrm{TM} \leq_m \mathrm{EQ_{\mathrm{TM}$</summary>

_Proof._ Given $\langle M \rangle$Construct two TMs:

- $M_1$: on any input, immediately rejects. So $L(M_1) = \emptyset$.
- $M_2$: on any input, simulates $M$ and accepts iff $M$ accepts. So $L(M_2) = L(M)$.

Then $L(M) = \emptyset$ iff $L(M_1) = L(M_2)$.

Therefore $\langle M \rangle \in E_{\mathrm{TM}$ iff
$\langle M_1, M_2 \rangle \in \mathrm{EQ_{\mathrm{TM}$. If $\mathrm{EQ_{\mathrm{TM}$ were decidable,
$E_{\mathrm{TM}$ would be decidable — contradiction. $\blacksquare$

</details>

### 5.4 Rice's Theorem

**Theorem 5.5 (Rice's Theorem).** Every non-trivial property of the language recognised by a Turing
Machine is undecidable.

A **property** $P$ is a set of Turing-recognisable languages. It is **non-trivial** if $P$ is
neither Empty nor the set of all Turing-recognisable languages.

_Proof (sketch)._ Let $P$ be a non-trivial property. Since $P$ is non-trivial, there exists a TM
$M_0$ with $L(M_0) \in P$ and a TM $M_1$ with $L(M_1) \notin P$. Given an arbitrary TM $M$ and input
$w$Construct $M_w$ that on input $x$: first simulates $M$ on $w$Then simulates $M_0$ on $x$. If $M$
accepts $w$Then $L(M_w) = L(M_0) \in P$; if $M$ does not accept $w$, $L(M_w) = \emptyset$. If
$\emptyset \notin P$Then $M_w \in P$ iff $M$ accepts $w$So deciding $P$ would decide
$A_{\mathrm{TM}}$. The case $\emptyset \in P$ is similar. $\blacksquare$

**Corollary.** The following are undecidable: "Does $M$ accept at least one string?", "Is $L(M)$ Finite?", "Is $L(M)$ regular?", "Is $L(M)$ context-free?"

:::caution Common Pitfall Rice's theorem applies only to properties of the **language** $L(M)$Not
properties of the **machine** $M$ itself. For example, "Does $M$ halt within 100 steps on input $w$?" is a property Of $M$'s behaviour, not of $L(M)$And is in fact decidable (just simulate for 100
steps).

### 5.5 Post Correspondence Problem

**Definition.** An instance of the **Post Correspondence Problem (PCP)** consists of two lists of
Strings $\alpha = (\alpha_1, \ldots, \alpha_k)$ and $\beta = (\beta_1, \ldots, \beta_k)$ over some
Alphabet $\Sigma$. A **solution** is a non-empty sequence of indices $i_1, i_2, \ldots, i_m$ such
That:

$$\alpha_{i_1} \alpha_{i_2} \cdots \alpha_{i_m} = \beta_{i_1} \beta_{i_2} \cdots \beta_{i_m}$$

The **PCP language** is
$\mathrm{PCP} = \{\langle \alpha, \beta \rangle : \alpha, \beta \mathrm{ have} a solution\}$.

**Example.** $\alpha = (a, ab, bba)$, $\beta = (ba, aa, bb)$. The sequence $(2, 1, 1, 3)$ gives
$ab \cdot a \cdot a \cdot bba = abaabba$ and $aa \cdot ba \cdot ba \cdot bb = aabababb$ — not equal.
The sequence $(1, 3, 1)$ gives $a \cdot bba \cdot a = abbaa$ and $ba \cdot bb \cdot ba = babba$ —
not equal. This instance may or may not have a solution; determining this is undecidable .

<details>
<summary>Worked Example: A solvable PCP instance</summary>

$\alpha = (b, ba, aab)$, $\beta = (bb, aa, ba)$.

Try the sequence $(2, 3, 1)$:

- Top: $\alpha_2 \alpha_3 \alpha_1 = ba \cdot aab \cdot b = baaab b$
- Bottom: $\beta_2 \beta_3 \beta_1 = aa \cdot ba \cdot bb = aababb$

Not equal.

Try $(3, 2, 1, 3, 2, 1)$:

- Top: $aab \cdot ba \cdot b \cdot aab \cdot ba \cdot b = aabbaabaabb$
- Bottom: $ba \cdot aa \cdot bb \cdot ba \cdot aa \cdot bb = baabbbbaabb$

Not equal. Finding solutions to PCP instances can be very difficult — there is no general algorithm.

</details>

**Theorem 5.6.** PCP is undecidable.

_Proof (sketch)._ Reduce from $A_{\mathrm{TM}}$. Given TM $M$ and input $w$Construct a PCP instance
Whose tiles encode the computation history of $M$ on $w$. The tiles are designed so that a matching
Sequence corresponds to a valid accepting computation: the first tile starts the computation, middle
Tiles enforce that each configuration follows from the previous by a valid transition, and the last
Tile allows termination only if an accept state is reached. Thus the PCP instance has a solution iff
$M$ accepts $w$. The construction is computable, so if PCP were decidable, $A_{\mathrm{TM}}$ would
Be decidable — contradiction. $\blacksquare$

**Modified PCP (MPCP).** In the modified version, the first tile used must be tile 1. MPCP is also
Undecidable, and the reduction from PCP to MPCP adds a "prefix" tile that forces tile 1 to be used
First.

### 5.6 Oracle Machines and the Arithmetical Hierarchy

An **oracle machine** $M^O$ is a Turing machine with access to an **oracle** $O$ for a language
$O \subseteq \Sigma^*$. In addition to its ordinary transitions, $M^O$ may enter a special "query state," write a string $q$ on a query tape, and enter an "answer state" where the tape Contains `1`
if $q \in O$ and `0` if $q \notin O$. The oracle answers in one step.

**Definition.** $A^O = \{w : M^O \mathrm{ accepts}  w\}$ for a fixed oracle TM $M$ and oracle $O$.

**Theorem 5.7.** There exists an oracle $A$ such that $P^A \neq NP^A$And an oracle $B$ such That
$P^B = NP^B$.

This result (Baker--Gill--Solovay, 1975) shows that resolving $P \stackrel{?}{=} NP$ will require
Non-relativising techniques — .../1-number-and-algebra/3_proof-and-logic methods that do not carry
over in the presence of oracles.

**The Turing jump.** Given a language $A$Define the **halting problem relative to $A$**:

$$A' = \{\langle M^A, w \rangle : M^A \mathrm{ accepts  w\}$$

**Theorem 5.8.** $A' \not\leq_T A$ (i.e., $A'$ is strictly more difficult than $A$ under Turing
Reductions).

The arithmetical hierarchy is defined by iterating the jump: $\emptyset^{(0)} = \emptyset$
$\emptyset^{(n+1)} = (\emptyset^{(n)})'$. Each jump produces a strictly more difficult problem,
Yielding an infinite hierarchy of undecidability.

:::
:::caution Common Pitfall A common mistake when using reductions is confusing the direction. To
prove $B$ is undecidable Using a reduction from a known undecidable problem $A$You need
$A \leq_m B$Not $B \leq_m A$. Remember: if $A \leq_m B$ and $A$ is undecidable, then $B$ is
undecidable (contrapositive of "if $B$ is decidable then $A$ is decidable"). Reversing the direction
gives a valid implication ("if $B \leq_m A$ and $A$ is undecidable, then...") that tells us nothing
about $B$.

:::