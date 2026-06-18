---
title: Context-Free Languages
tags:
  - Computing
  - University
description: ""the PDA can go from state $p$ to state $q$Popping everything pushed onto the stack." The
productions simulate the PDA"s transitions. $\blacksquare$

**Theorem 3.2a (CFG to PDA construction).** Let $G = (V, \Sigma, R, S)$ be a CFG. Then there exists
a PDA $M$ with $L(M) = L(G)$.

_Proof._ Construct
$M = (\{q_0, q_1, q_2\}, \Sigma, V \cup \Sigma \cup \{\$\}, \delta, q_0, \{q_2\})$:

1. $(q_0, \varepsilon, \varepsilon) \to (q_1, S\$)$ — push the start variable and bottom marker.
2. For each $A \to \alpha \in R$: $(q_1, \varepsilon, A) \to (q_1, \alpha)$ — replace a variable
   with its production.
3. For each $a \in \Sigma$: $(q_1, a, a) \to (q_1, \varepsilon)$ — match a terminal on input with
   stack.
4. $(q_1, \varepsilon, \$) \to (q_2, \$)$ — accept when only the marker remains.

The PDA maintains the current sentential form (minus terminals already matched) on the stack. When
only $\text{\$}$ remains, the derivation is complete and all input has been consumed. $\blacksquare$

### 3.6 Pumping Lemma for Context-Free Languages

**Theorem 3.3.** If $L$ is context-free, there exists $p$ such that for every $w \in L$ with
$|w| \geq p$, $w$ can be decomposed as $w = uvxyz$ satisfying:

1. $|vy| \gt 0$.
2. $|vxy| \leq p$.
3. $uv^ixy^iz \in L$ for all $i \geq 0$.

_Proof._ Let $G$ be a CFG in CNF with $k$ variables. Any parse tree of height $h$ generates a string
Of length at most $2^{h-1}$. Set $p = 2^k$. For $|w| \geq p$The parse tree has height $\gt k$ So
some path repeats a variable. The substring generated between the two occurrences can be pumped.
$\blacksquare$

**Example.** $L = \{a^n b^n c^n : n \geq 0\}$ is not context-free.

_Proof._ Assume pumping length $p$. Let $w = a^p b^p c^p$. Since $|vxy| \leq p$The substring $vxy$
cannot span all three letter types. Case analysis:

- If $vxy$ is within the `a`S or `b`S or `c`S: pumping changes only one count, breaking the
  equality.
- If $vxy$ spans `a`S and `b`S: pumping changes the `a` and `b` counts but not `c`Breaking equality.
- If $vxy$ spans `b`S and `c`S: analogous.

In all cases, $uv^2xy^2z \notin L$. $\blacksquare$

**Example.** $L = \{a^i b^j c^k : i \lt j \lt k\}$ is not context-free.

_Proof._ Assume pumping length $p$. Let $w = a^p b^{p+1} c^{p+2}$. Since $|vxy| \leq p$:

- If $vxy$ lies entirely within one block: pumping up ($i = 2$) increases only one count, but the
  gap between adjacent counts is only 1 or 2, so doubling the pumped count violates the strict
  inequalities.
- If $vxy$ spans two blocks: pumping changes two adjacent counts by the same additive amount. The
  gap between those counts is 1, so increasing both by the same positive amount makes them equal,
  violating $i \lt j \lt k$.

In all cases, $uv^2xy^2z \notin L$. $\blacksquare$

<details>
<summary>Worked Example: $\{a^n b^n a^n : n \geq 0\}$ is not context-free</summary>

_Proof._ Assume pumping length $p$. Let $w = a^p b^p a^p$. Since $|vxy| \leq p$The substring $vxy$
cannot span all three blocks. Case analysis:

- $vxy$ within the first $a^p$ block: pumping down ($i = 0$) reduces the first count only.
  $uv^0xy^0z = a^{p-k}b^pa^p \notin L$ for $k \gt 0$.
- $vxy$ within the $b^p$ block: pumping changes the $b$ count only, breaking equality.
- $vxy$ within the last $a^p$ block: analogous.
- $vxy$ spans the first $a^p$ and $b^p$: pumping changes first $a$ and $b$ counts but not the last
  $a$ count.
- $vxy$ spans $b^p$ and last $a^p$: analogous.

In all cases, pumping produces a string not in $L$. $\blacksquare$

</details>

### 3.7 The CYK Parsing Algorithm

The **Cocke--Younger--Kasami (CYK) algorithm** determines membership in a context-free language When
the grammar is in Chomsky Normal Form.

**Theorem 3.4.** Given a CFG $G$ in CNF and a string $w$ of length $n$The CYK algorithm decides
Whether $w \in L(G)$ in $O(n^3 \cdot |G|)$ time.

**Algorithm.** Construct a table $T[i, j]$ for $1 \leq i \leq j \leq n$Where $T[i, j]$ is the set Of
variables that can derive the substring $w_i w_{i+1} \cdots w_j$.

1. **Base case** ($j = 1$): $T[i, i] = \{A : A \to w_i \mathrm{ is a rule in  G\}$.
2. **Recursive case** ($j \gt 1$): For each split $k$ with $i \leq k \lt j$:
   $$T[i, j] \mathrel{{:}{=}} T[i, j] \cup \{A : A \to BC \in R, B \in T[i, k], C \in T[k+1, j]\}$$
3. **Answer:** $w \in L(G)$ iff $S \in T[1, n]$.

_Proof of correctness._ In CNF, every derivation of a string of length $\ell$ involves exactly
$\ell - 1$ binary productions. The table considers every possible "root" of the derivation tree For
each substring, and every possible split of that substring into two parts. By induction on the
Substring length, $T[i, j]$ contains exactly those variables that derive $w_i \cdots w_j$.
$\blacksquare$

**Time complexity.** The table has $O(n^2)$ entries. Each entry considers at most $n$ split points
And checks all $|G|$ rules, giving $O(n^3 \cdot |G|)$ total time.

<details>
<summary>Worked Example: CYK on a small grammar</summary>

Grammar (CNF): $S \to AB \mid BC$, $A \to BA \mid a$, $B \to CC \mid b$, $C \to AB \mid a$.

String: $w = ba$.

**Length 1:**

- $T[1,1]$: $w_1 = b$So $T[1,1] = \{B\}$ (since $B \to b$).
- $T[2,2]$: $w_2 = a$So $T[2,2] = \{A, C\}$ (since $A \to a$ and $C \to a$).

**Length 2:**

- $T[1,2]$: split at $k = 1$. Check all pairs $(X \in T[1,1], Y \in T[2,2])$:
- $X = B, Y = A$: $S \to BA$? No. $B \to BA$? No. $A \to BA$? No. $C \to BA$? No.
- $X = B, Y = C$: $S \to BC$? Yes — add $S$.
- $X = B, Y = A$: already checked. So $T[1,2] = \{S\}$.

Since $S \in T[1,2]$The string $ba$ is **in** $L(G)$. The parse tree is $S \to BC$ Where $B \to b$
and $C \to a$.

</details>

