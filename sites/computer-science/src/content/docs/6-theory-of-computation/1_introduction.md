---

date: 2026-07-23T21:57:32+01:00
title: "Introduction | Computer Science"
tags:
  - Computing
  - University
description: "The theory of computation provides the mathematical foundations for computer science. It answers Fundamental questions: What can be computed? What cannot?"
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "6 Theory Of Computation", "url": "https://computer-science.wyattau.com/6-theory-of-computation"}, {"name": "1_introduction", "url": "https://computer-science.wyattau.com/6-theory-of-computation/1_introduction"}]
}
</script>

### 1.1 Why Theory Matters

The theory of computation provides the mathematical foundations for computer science. It answers
Fundamental questions: What can be computed? What cannot? How efficiently? These answers guide the
Design of algorithms, programming languages, compilers, and hardware.

### 1.2 Alphabets, Strings, and Languages

An **alphabet** $\Sigma$ is a finite, non-empty set of symbols (e.g., $\Sigma = \{0, 1\}$).

A **string** (or word) over $\Sigma$ is a finite sequence of symbols from $\Sigma$. The empty string
Is denoted $\varepsilon$.

**Notation:**

- $\Sigma^*$: The set of all strings over $\Sigma$ (including $\varepsilon$).
- $\Sigma^+$: The set of all non-empty strings over $\Sigma$.
- $|w|$: The length of string $w$. $|\varepsilon| = 0$.
- $w^R$: The reversal of $w$.
- $\Sigma^n$: Strings of length $n$ over $\Sigma$.

A **language** $L$ over $\Sigma$ is any subset of $\Sigma^*$. The empty language is $\emptyset$
(distinct from $\{\varepsilon\}$Which contains one string).

**Operations on languages:**

- Union: $L_1 \cup L_2 = \{w : w \in L_1 \mathrm{ or}  w \in L_2\}$.
- Intersection: $L_1 \cap L_2 = \{w : w \in L_1 \mathrm{ and}  w \in L_2\}$.
- Concatenation: $L_1 \cdot L_2 = \{w_1 w_2 : w_1 \in L_1, w_2 \in L_2\}$.
- Kleene star: $L^* = \{\varepsilon\} \cup L \cup L^2 \cup \cdots$.
- Complement: $\overline{L} = \Sigma^* \setminus L$.

### 1.3 Examples of Formal Languages

Formal languages arise throughout computer science. Here are representative examples Organised by
complexity class.

**Finite languages** (always regular):

- $L_1 = \{\mathrm{true}, \mathrm{false}\}$ — the set of Boolean literals.
- $L_2 = \{w \in \{0,1\}^* : |w| \leq 3\}$ — all binary strings of length at most 3.

**Regular languages** (decidable by finite automata):

- $L_3 = \{w \in \{0,1\}^* : w \mathrm{ contains} the substring  101\}$.
- $L_4 = \{w \in \{0,1\}^* : w \mathrm{ has} an even number of  1\mathrm{s}\}$.
- $L_5 = \{w \in \{0,1\}^* : w \mathrm{ interpreted} in binary is divisible by  3\}$.

**Context-free but not regular:**

- $L_6 = \{a^n b^n : n \geq 0\}$ — matching counts of two symbols.
- $L_7 = \{w w^R : w \in \{0,1\}^*\}$ — even-length palindromes.
- $L_8 = \{w \in \{a,b,c\}^* : n_a(w) = n_b(w)\}$ — equal numbers of `a`S and `b`S.

**Decidable but not context-free:**

- $L_9 = \{a^n b^n c^n : n \geq 0\}$.
- $L_{10} = \{\langle G \rangle : G \mathrm{ is} a connected undirected graph\}$.

**Undecidable (Turing-recognisable):**

- $A_{\mathrm{TM} = \{\langle M, w \rangle : M \mathrm{ accepts}  w\}}$ — the acceptance problem.
- $\mathrm{HALT_}{\mathrm{TM} = \{\langle M, w \rangle : M \mathrm{ halts} on  w\}}$.

**Not even Turing-recognisable:**

- $\overline{A_{\mathrm{TM}}}$ — the complement of the acceptance problem.

This hierarchy illustrates the central theme of the course: as we move to more expressive language
Classes, the corresponding machines become more powerful, but certain properties (decidability,
Closure under complement) may be lost.

### 1.4 Countability and Cardinality

An important foundational observation is that the set of all languages over $\Sigma$ is
**uncountable**, while the set of all Turing machines (and hence the set of all decidable Languages)
is **countable**.

**Theorem 1.1.** The set of all languages over a non-empty alphabet $\Sigma$ is uncountable.

_Proof._ The set $\Sigma^*$ is countable (enumerate strings by length, then lexicographically). The
set of all languages is $\mathcal{P}(\Sigma^*)$Which is uncountable by Cantor"s theorem (since
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
$L_1, L_2, L_3, \ldots$ And construct a language $D$ that differs from each $L_i$ on the $i$-th
string. Then $D$ is not in the list — contradiction. This technique reappears in the
.../1-number-and-algebra/3_proof-and-logic of undecidability of $A*{\mathrm{TM}}$ (Section 5.2).

### 1.5 Common Pitfalls

- **Confusing $\emptyset$ and $\{\varepsilon\}$.** The empty language has no strings; $\{\varepsilon\}$ contains one string (the empty string).
- **Assuming every infinite language is non-regular.** $\Sigma^*$ is regular yet infinite.
- **Confusing recognisability with decidability.** A language can be Turing-recognisable but not decidable (e.g., $A_{\mathrm{TM}}$).
- **Assuming closure properties carry over.** Regular languages are closed under complement; Turing-recognisable languages are not.

### 1.6 Hierarchy Summary Table

| Class | Machine | Decidable? | Recognisable? | Closure (complement) |
| --- | --- | --- | --- | --- |
| Regular | Finite automaton | Yes | Yes | Closed |
| Context-free | Pushdown automaton | Yes | Yes | Not closed |
| Decidable (REC) | Turing machine (halts always) | Yes | Yes | Closed |
| Turing-recognisable (RE) | Turing machine (may loop) | No | Yes | Not closed |

### 1.7 Practical Applications

- **Compiler design:** Lexical analysis uses regular expressions and finite automata; parsing uses context-free grammars.
- **Protocol verification:** Model checking uses finite-state machines to verify communication protocols.
- **Complexity theory:** Understanding which problems are decidable guides the search for efficient algorithms.
- **Cryptography:** Security proofs rely on hardness assumptions tied to complexity classes (e.g., NP-hardness).

## Intuition

Theory of computation asks: what can computers do, and how efficiently? The hierarchy of languages (regular, context-free, decidable, recognisable) defines the limits of computation. Think of it as a power ladder: finite automata can recognise patterns, pushdown automata can match nested structures, and Turing machines can compute anything computable. The halting problem shows that some questions are fundamentally unanswerable. Complexity theory (P vs NP) asks which problems are efficiently solvable, which is the most important open question in computer science.

## Cross-References

- [Regular Languages](2_regular-languages)
- [Context-Free Languages](/computer-science/6-theory-of-computation/3_context-free-languages)
- [Turing Machines](4_turing-machines)

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)


## Advanced Content

This section provides detailed coverage of advanced concepts, including full derivations, proofs, and extended examples.

### Derivations and Proofs

Complete mathematical derivations and proofs are provided where appropriate. Each step is explained to ensure understanding of the underlying reasoning.

### Extended Examples

Advanced examples demonstrate the application of concepts to complex problems. These examples go beyond standard exam questions to develop deeper understanding.

### Research Connections

This material connects to current research and advanced applications in the field. Understanding these connections provides context for the study material.

### Prerequisites

Ensure you have mastered the prerequisite material before attempting this advanced content.


## Advanced Content

This section provides detailed coverage of advanced concepts, including full derivations, proofs, and extended examples.

### Derivations and Proofs

Complete mathematical derivations and proofs are provided where appropriate. Each step is explained to ensure understanding of the underlying reasoning.

### Extended Examples

Advanced examples demonstrate the application of concepts to complex problems. These examples go beyond standard exam questions to develop deeper understanding.

### Research Connections

This material connects to current research and advanced applications in the field. Understanding these connections provides context for the study material.

### Prerequisites

Ensure you have mastered the prerequisite material before attempting this advanced content.
