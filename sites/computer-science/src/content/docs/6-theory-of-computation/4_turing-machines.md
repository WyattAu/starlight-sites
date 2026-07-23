---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "6 Theory Of Computation", "url": "https://computer-science.wyattau.com/6-theory-of-computation"}, {"name": "4_turing Machines", "url": "https://computer-science.wyattau.com/6-theory-of-computation/4_turing-machines"}]
}
</script>
title: Turing Machines
tags:
  - Computing
  - University
description: "Turing Machines: comprehensive educational content notes with precise definitions, worked examples, common pitfalls, and practice problems."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "6 Theory Of Computation", "url": "https://computer-science.wyattau.com/6-theory-of-computation"}, {"name": "4_turing Machines", "url": "https://computer-science.wyattau.com/6-theory-of-computation/4_turing-machines"}]
}
</script>

## Intuition

A Turing machine is the **simplest model of general-purpose computation** — it has a finite control (states and rules), an infinite tape (unbounded memory), and a read/write head. Despite its simplicity, it can compute anything that any reasonable computational device can compute (Church-Turing thesis). The power comes from the infinite tape — it can read and write anywhere, going back and forth as needed.

**Why TMs are universal:** A universal TM can simulate any other TM given its description as input. This is the theoretical basis for stored-program computers: the hardware (universal TM) is fixed; the software (encoded TM description) varies. Any programming language that can simulate a universal TM is Turing-complete.

**Decidable vs recognisable intuition:** A decider halts on every input — it always says yes or no. A recogniser may loop forever on inputs it should reject. The halting problem is recognisable but not decidable: we can simulate a TM and accept if it accepts, but we can't detect if it will loop forever.

### 4.1 Definition

A **Turing machine (TM)** is a 7-tuple
$M = (Q, \Sigma, \Gamma, \delta, q_0, q_{\mathrm{accept},
Q_{\mathrm{reject})}}$ where:

- $Q$ is a finite set of states.
- $\Sigma$ is the input alphabet (does not contain the blank symbol $\sqcup$).
- $\Gamma$ is the tape alphabet, $\sqcup \in \Gamma$, $\Sigma \subseteq \Gamma$.
- $\delta : Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$ is the transition function.
- $q_0 \in Q$ is the start state.
- $q_{\mathrm{accept} \in Q$ is the accept state.
- $q_{\mathrm{reject} \in Q$ is the reject state ($q_{\mathrm{accept} \neq q_{\mathrm{reject}$).

The TM has an infinite tape (initially containing the input followed by blanks), a read/write head
That moves left or right, and a finite control. At each step, based on the current state and symbol
Under the head, it writes a symbol, moves the head, and changes state.

$M$ **accepts** input $w$ if the computation halts in $q_{\mathrm{accept}$. $M$ **rejects** $w$ if
It halts in $q_{\mathrm{reject}$. $M$ **loops** if it never halts.

The **language recognised** by $M$ is $L(M) = \{w : M \mathrm{ accepts  w\}$.

A language is **Turing-recognisable** (recursively enumerable) if some TM recognises it. A language
Is **decidable** if some TM decides it (halts on all inputs, accepting or rejecting).

### 4.2 TM Variants

**Multitape TMs.** Multiple tapes, each with its own head. The transition function maps
$(q, a_1, \ldots, a_k)$ to $(q", b_1, \ldots, b_k, d_1, \ldots, d_k)$.

**Theorem 4.1.** Every multitape TM has an equivalent single-tape TM.

_Proof._ Simulate $k$ tapes on a single tape using $k$ tracks (or interleaving symbols with
Delimiters). Simulating one step of the multitape TM requires scanning the single tape to read all
$k$ heads and update them, costing $O(k \cdot n)$ steps per simulated step. $\blacksquare$

**Nondeterministic TMs.**
$\delta : Q \times \Gamma \to \mathcal{P}(Q \times \Gamma \times \{L, R\})$. The TM accepts if
**some** computation path accepts.

**Theorem 4.2.** Every nondeterministic TM has an equivalent deterministic TM.

_Proof._ Simulate the NTM using breadth-first search on the computation tree. Each level of the tree
Has at most $b$ branches (where $b$ is the maximum number of choices). After $n$ steps, the tree has
At most $b^n$ nodes. The simulation visits nodes in order, using a 3-tape DTM: tape 1 stores the
Input, tape 2 simulates the current branch, tape 3 tracks the address of the current node in the
Tree. The simulation runs in $O(b^n)$ times the NTM's time, which is exponential overhead.
$\blacksquare$

**Enumerators.** A TM with a printer that outputs a list of strings. A language is
Turing-recognisable If and only if some enumerator enumerates it.

**Theorem 4.2a.** A language is Turing-recognisable if and only if some enumerator enumerates it.

_Proof._ ($\Rightarrow$) Given TM $M$ recognising $L$Construct an enumerator $E$ that dovetails:
Runs $M$ on $\varepsilon$ for 1 step, then $M$ on $\varepsilon$ and $M$ on $0$ for 2 steps, then on
$\varepsilon, 0, 1, 00, 01, 10, 11$ for 3 steps, and so on. Whenever $M$ accepts, $E$ prints that
String. Every string in $L$ is eventually printed.

($\Leftarrow$) Given enumerator $E$ for $L$Construct TM $M$ that on input $w$ runs $E$ and checks
Each printed string against $w$. If $w$ is printed, accept. If $w \in L$It will eventually be
Printed, so $M$ recognises $L$. $\blacksquare$

### 4.3 Church-Turing Thesis

**Theorem 4.3 (Church-Turing Thesis).** A function is computable (can be computed by any reasonable
Model of computation) if and only if it is computable by a Turing machine.

This is a **thesis**, not a theorem -- it cannot be formally proved because "reasonable model" is
not Formally defined. However, all proposed models of computation (lambda calculus, recursive
functions, Post systems, cellular automata, modern programming languages) have been shown equivalent
to Turing Machines.

**Implication:** To show a problem is uncomputable, it suffices to show no TM can solve it.

**Evidence supporting the thesis:**

1. **Robustness.** Every "reasonable" model of computation proposed since the 1930s has been shown
   to compute exactly the Turing-computable functions.
2. **Invariance.** Adding resources (more tapes, nondeterminism, random access) does not increase
   the class of computable functions.
3. **Empirical adequacy.** No physically realisable process has been shown to compute a
   non-Turing-computable function.
4. **Universality.** The existence of universal Turing machines (Section 4.5) shows that a single
   fixed machine can simulate any other, reinforcing the notion of a canonical model.

**Limitations.** The Church-Turing thesis concerns computability _in principle_ (unlimited time and
Space). It does not address _feasibility_, which is the domain of complexity theory (Section 6).
Quantum computers do not compute non-Turing-computable functions; they may offer speedups for
Specific problems but remain within the Turing-computable class.

### 4.4 TM Construction Examples

<details>
<summary>Worked Example: TM for $L = \{0^n 1^n : n \geq 0\}$</summary>

Design a single-tape TM that decides $L = \{0^n 1^n : n \geq 0\}$.

**Idea:** Repeatedly cross off one `0` and one `1`. If all symbols are crossed off, accept.

$M = (Q, \{0, 1\}, \{0, 1, \mathrm{x, \sqcup\}, \delta, q_0, q_{\mathrm{accept}, q_{\mathrm{reject})$.

**Key transitions:**

1. In $q_0$Read `0`: write `x`Move right, go to $q_1$. (Cross off a `0`.)
2. In $q_0$Read `1`: reject. (A `1` before any `0`.)
3. In $q_0$Read $\sqcup$: accept. (Nothing left.)
4. In $q_1$Read `0`: move right, stay in $q_1$. (Skip remaining `0`S.)
5. In $q_1$Read `1`: write `x`Move left, go to $q_2$. (Cross off a `1`.)
6. In $q_1$Read $\sqcup$: reject. (No `1` to match.)
7. In $q_2$Read `0` or `x`: move left, stay in $q_2$. (Scan back.)
8. In $q_2$Read $\sqcup$: move right, go to $q_0$. (Return to start.)

_Correctness._ Each iteration crosses off exactly one `0` and one `1`. If the input is $0^n 1^n$ The
machine performs $n$ iterations and accepts. If counts differ or the pattern is violated, The
machine rejects. $\blacksquare$

</details>

<details>
<summary>Worked Example: TM that decides $A_{\mathrm{DFA}$</summary>

Design a TM that decides $A_{\mathrm{DFA} = \{\langle B, w \rangle : B \mathrm{ accepts  w\}$.

**Construction.** On input $\langle B, w \rangle$ where $B = (Q, \Sigma, \delta, q_0, F)$:

1. Simulate $B$ on $w$. Maintain the current state $q$ and position $i$ in $w$.
2. At each step, look up $\delta(q, w_i)$ in $B$'s transition table (encoded on the tape).
3. Update $q$ and $i$. If $q \in F$ when $i = |w| + 1$Accept.
4. If $i = |w| + 1$ and $q \notin F$Reject.

The simulation takes $O(|w|)$ steps and always halts. $\blacksquare$

</details>

### 4.5 The Universal Turing Machine

A **universal Turing machine (UTM)** $U$ is a Turing machine that can simulate any other Turing
Machine $M$ on any input $w$. The input to $U$ is an encoding $\langle M, w \rangle$.

**Theorem 4.4.** A universal Turing machine exists.

_Proof (construction sketch)._ Fix an encoding scheme for TMs and their inputs as strings over a
Finite alphabet. The UTM $U$ uses multiple tapes:

1. **Tape 1:** Stores the description $\langle M \rangle$ of the simulated TM (the "program").
2. **Tape 2:** Stores the current contents of $M$'s tape (the "memory").
3. **Tape 3:** Stores the current state of $M$ and the position of $M$'s head.

At each step, $U$ reads the current state and tape symbol from tapes 3 and 2, scans tape 1 to Find
the matching transition in $M$'s description, updates tape 2 (write symbol), tape 3 (state And head
position), and repeats. Since $M$'s description is finite and each step requires a finite Scan, $U$
correctly simulates $M$. $\blacksquare$

**Significance.** The UTM is the theoretical foundation for the stored-program computer: hardware
(the UTM) is fixed, and software (the encoded TM) provides the specific computation.

**Simulation overhead.** If $M$ runs in time $t(n)$Then $U$ simulates $M$ in time
$O(t(n) \cdot |M|)$Where $|M|$ is the size of $M$'s description.

<details>
<summary>Worked Example: TM for $L = \{w\#w^R : w \in \{0,1\}^*\}$</summary>

Design a TM that decides $L = \{w\#w^R : w \in \{0,1\}^*\}$.

**Idea:** Repeatedly check the first and last non-$\#$ symbols, then cross them off. When only $\#$
remains, accept.

**Algorithm:**

1. Scan right to find the rightmost non-$\sqcup$Non-$\mathrm{x$ symbol (call it $a$). If we cross
   $\#$ on the way, note its position.
2. Return to the leftmost non-$\sqcup$Non-$\mathrm{x$ symbol (call it $b$).
3. If $a \neq b$Reject.
4. Cross off both $a$ and $b$ (write $\mathrm{x$).
5. Repeat until only $\#$ (and $\mathrm{x$S) remain, then accept.

_Correctness._ If the input is $w\#w^R$The first symbol of $w$ equals the last symbol of $w^R$
(which is the first symbol of $w$), the second equals the second-to-last, etc. Each Iteration
verifies one pair. If any pair mismatches, the string is not of the form $w\#w^R$. $\blacksquare$

</details>

## Cross-References

- **[Site Home](../../):** Main landing page for computer-science notes.
- **[Practice](../../practice-*.mdx):** Practice problems for revision.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Common Mistakes

1. **Assuming non-deterministic TMs are more powerful than deterministic TMs.** NTMs and DTMs recognise exactly the same class of languages (the recursively enumerable languages). An NTM can be simulated by a deterministic TM using breadth-first search over all computation paths, though at an exponential cost in time.

2. **Confusing the halting problem with the acceptance problem.** The halting problem asks whether a TM halts on a given input. The acceptance problem asks whether a TM *accepts* a given input. The acceptance problem is semi-decidable (recognisable) but not decidable, while the halting problem is not even semi-decidable.

3. **Assuming a TM can "look ahead" on the input tape.** A standard TM reads one symbol at a time and moves its head one cell left or right. It cannot skip ahead or read multiple symbols simultaneously. Multi-tape TMs are equivalent in power but require simulation overhead on a single-tape machine.

4. **Confusing decidable languages with recursively enumerable languages.** A language is decidable if there exists a TM that halts on every input. A language is recursively enumerable if there exists a TM that halts and accepts every string in the language, but may loop on strings not in the language. The latter is strictly larger.

5. **Misunderstanding the Church-Turing thesis.** The thesis states that any function computable by an intuitive "effective method" is computable by a Turing machine. It is a thesis about the limits of computation, not a theorem that can be proved. It has not been refuted, but it cannot be formally proven because "effective method" is an informal concept.
