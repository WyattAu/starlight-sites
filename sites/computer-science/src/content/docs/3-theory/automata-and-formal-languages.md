---

title: "Automata and Formal Languages"
description: "Automata and formal languages with every central theorem proved: the pumping lemmas for regular and context-free languages, DFA--NFA equivalence via the subset construction, Myhill--Nerode and unique DFA minimality, CFG--PDA equivalence, and Rice's theorem by reduction."
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "3 Theory", "url": "https://computer-science.wyattau.com/3-theory"}, {"name": "Automata And Formal Languages", "url": "https://computer-science.wyattau.com/3-theory/automata-and-formal-languages"}]
}
</script>

## 1. Finite Automata

### 1.1 Deterministic Finite Automaton (DFA)

A DFA is a 5-tuple $M = (Q, \Sigma, \delta, q_0, F)$ where:

- $Q$ = finite set of states
- $\Sigma$ = input alphabet
- $\delta: Q \times \Sigma \to Q$ = transition function
- $q_0 \in Q$ = start state
- $F \subseteq Q$ = set of accepting states

**Language of $M$:** $L(M) = \{w \in \Sigma^* : M \text{ accepts } w\}$

**Example:** DFA for strings ending in "ab" over $\Sigma = \{a, b\}$:

```
States: {q0, q1, q2}
q0 → (a) → q1,  q0 → (b) → q0
q1 → (a) → q1,  q1 → (b) → q2
q2 → (a) → q1,  q2 → (b) → q0
Start: q0, Accept: q2
```

**Extended transition function:** $\delta^*: Q \times \Sigma^* \to Q$

$$
\delta^*(q, \epsilon) = q
$$
$$
\delta^*(q, wa) = \delta(\delta^*(q, w), a)
$$

### 1.2 Nondeterministic Finite Automaton (NFA)

An NFA is a 5-tuple $M = (Q, \Sigma, \delta, q_0, F)$ where:

- $\delta: Q \times (\Sigma \cup \{\epsilon\}) \to 2^Q$ = transition function (returns a set of states)

**Key difference from DFA:** Multiple transitions per symbol, $\epsilon$-transitions allowed.

**Example:** NFA for strings containing "aba" over $\Sigma = \{a, b\}$:

```
States: {q0, q1, q2, q3}
q0 → (a) → {q0, q1}
q1 → (b) → q2
q2 → (a) → q3
Start: q0, Accept: q3
```

### 1.3 NFA to DFA Conversion (Subset Construction)

Convert NFA $N$ to equivalent DFA $D$:

```
SUBSET_CONSTRUCTION(N):
    D.states = 2^Q
    D.start = ε-closure({q0})
    mark D.start as unexplored
    while unexplored states exist:
        pick unexplored state S
        for each symbol a in Σ:
            T = ε-closure(∪ δ(q, a) for each q in S)
            D.transition[S][a] = T
            if T not yet in D.states:
                add T as unexplored
        mark S as explored
    D.accept = {S : S ∩ F ≠ ∅}
```

**Time:** $O(2^n)$ states in worst case. Often much smaller in practice.

### 1.4 DFA Minimization

Minimize a DFA to the smallest equivalent DFA.

```
MINIMIZE(DFA):
    // Remove unreachable states
    remove states not reachable from start

    // Partition into accepting and non-accepting
    P = {F, Q \ F}

    repeat:
        P" = {}
        for each group G in P:
            split G into subgroups where
                for all a in Σ: δ(p,a) and δ(q,a) are in same group of P
            add subgroups to P'
    until P' == P
    return DFA with P' as states
```

**Result:** Unique minimal DFA (up to isomorphism). $O(n \log n)$ with Hopcroft's algorithm.

**Why uniqueness holds (Myhill--Nerode argument).** Define the indistinguishability relation on
states: $p \sim q$ iff for every string $z$, $\delta^*(p, z) \in F \iff \delta^*(q, z) \in F$.
Distinguishable states *must* remain in different groups of any correct partition; some $z$
separates them, and the refinement loop splits exactly when such a $z$ exists (by induction on
$|z|$: after $k$ rounds, states are grouped together iff they agree on all strings of length
$\leq k$; the loop terminates when no string separates any pair). So the fixed point groups states
into exactly the $\sim$-classes. After removing unreachable states, every $\sim$-class is
nonempty (each class contains the state a distinct residual language is recognised from), and the
quotient DFA accepts the same language by construction. Any two minimal DFAs therefore both have
one state per $\sim$-class, start states corresponding to the class of $\epsilon$, transitions
induced by the same class relation, and accepting states the class(es) in $F$; a relabelling
isomorphism. $\blacksquare$

### 1.5 DFA vs NFA Equivalence

**Theorem.** DFAs and NFAs recognize exactly the same class of languages: the **regular languages**.

$$
\text{DFA} \equiv \text{NFA} \equiv \text{Regular Expressions}
$$

**Proof.** Every DFA *is* an NFA that ignores its nondeterminism (each transition returns a
singleton set, no $\epsilon$-moves), so $\text{NFA} \subseteq \text{DFA}$ languages is immediate in
one direction and $\text{DFA} \subseteq \text{NFA}$ is trivial. The substance is that subset
construction preserves the language.

*Correctness of subset construction.* Let $N$ be an NFA and $D$ its subset-constructed DFA. Claim:
after $D$ reads $w$, its current state is exactly $E(w)$; the $\epsilon$-closure of the set of
states $N$ could occupy after reading $w$. Induction on $|w|$. Base: $E(\epsilon)$ equals
$\epsilon\text{-closure}(\{q_0\})$, which is $D$'s start state by construction. Step: assume the
claim for $w$; on reading $a$, $D$ transitions from $E(w)$ to the $\epsilon$-closure of the union
of $\delta(q, a)$ over $q \in E(w)$; which is precisely $E(wa)$, since $N$'s possible states
after $wa$ are the $\epsilon$-closures of the $a$-successors of its possible states after $w$.

Acceptance follows: $D$ accepts $w$ iff $E(w) \cap F \neq \emptyset$ iff some accepting state of
$N$ lies in $E(w)$ iff $N$ accepts $w$. So $L(D) = L(N)$, and the two models recognise the same
languages. The regular-expression equivalence is completed by Thompson's construction
($\text{RE} \to \text{NFA}$, by structural induction on the expression; each row of the table in
§2.1 preserves the language, again by induction) and state elimination
($\text{DFA} \to \text{RE}$, whose elimination rule $R_{ik} \mathrel{R_{kk}}^* R_{kj} \cup R_{ij}$
records exactly the paths through $q_k$, so by induction on the eliminated set the final label
enumerates all accepting paths). $\blacksquare$

## 2. Regular Expressions

### 2.1 Definition

Regular expressions over alphabet $\Sigma$:

- $\emptyset$: Empty language.
- $\epsilon$: Language $\{\epsilon\}$.
- $a$ (for $a \in \Sigma$): Language $\{a\}$.
- $R_1 \cdot R_2$ (concatenation): $\{uv : u \in L(R_1), v \in L(R_2)\}$.
- $R_1 \cup R_2$ (union/alternation): $L(R_1) \cup L(R_2)$.
- $R^*$ (Kleene star): $\{w_1 w_2 \cdots w_k : k \geq 0, w_i \in L(R)\}$.
- $R^+ = R \cdot R^*$: One or more repetitions.

### 2.2 RE to NFA Conversion (Thompson's Construction)

<div class="table-wrap">

| RE Form | Construction |
| -------- | ------------------------------------- |
| $\emptyset$ | Single non-accepting state |
| $\epsilon$ | Start = accept (single state) |
| $a$ | Start → $a$ → accept |
| $R_1 \cup R_2$ | New start with $\epsilon$ to starts of $R_1$ and $R_2$; accepts merge via $\epsilon$ |
| $R_1 \cdot R_2$ | Connect accept of $R_1$ to start of $R_2$ via $\epsilon$ |
| $R^*$ | New start/accept with $\epsilon$ loops through $R$ |

</div>

**Properties:**

- RE has at most $O(|R|)$ states in the NFA.
- NFA may have $\epsilon$-transitions but no more than 2 outgoing transitions per state.

### 2.3 DFA to RE Conversion

```
DFA_TO_RE(DFA):
    rename states q1, q2, ..., qn
    add new start state qs and new accept state qf
    for each pair (qi, qj), eliminate states one by one
    update transition labels using state elimination formula:

    // Eliminating state qk:
    // For each path qi → qk → qj:
    //   new label = (label(qi,qk)) (label(qk,qk))* (label(qk,qj)) ∪ label(qi,qj)
```

### 2.4 Closure Properties of Regular Languages

Regular languages are closed under:

<div class="table-wrap">

| Operation          | Proof Method                       |
| ------------------ | ---------------------------------- |
| Union              | RE: $R_1 \cup R_2$; NFA: parallel construction |
| Intersection       | DFA: product construction          |
| Complement         | DFA: swap accept/non-accept states |
| Concatenation      | RE: $R_1 \cdot R_2$                |
| Kleene star        | RE: $R^*$                          |
| Reversal           | RE: reverse expression; NFA: reverse arrows |
| Difference         | $A \setminus B = A \cap \overline{B}$ |

</div>

## 3. Pumping Lemma for Regular Languages

### 3.1 Statement

If $L$ is a regular language, then there exists a constant $p$ (the **pumping length**) such that any string $s \in L$ with $|s| \geq p$ can be divided into $s = xyz$ satisfying:

1. $|y| > 0$ (y is non-empty)
2. $|xy| \leq p$
3. $xy^iz \in L$ for all $i \geq 0$

**Proof.** Let $M$ be a DFA for $L$ with $p$ states, and let $s \in L$ with $|s| \geq p$. As $M$
reads $s$ it visits $|s| + 1 \geq p + 1$ states (counting the start state), but $M$ has only $p$
distinct states; by the pigeonhole principle some state repeats among the first $p + 1$ visited,
say $q_i = q_j$ with $i < j \leq p$. Set

$$
x = s_1 \cdots s_i, \qquad y = s_{i+1} \cdots s_j, \qquad z = s_{j+1} \cdots s_{|s|}.
$$

Then $|y| = j - i \geq 1$ and $|xy| = j \leq p$. The segment $y$ drives $M$ from $q_i$ back to
$q_i$; a loop. Reading the loop any number of times $k \geq 0$ leaves $M$ at $q_i$ after $xy^k$,
so $M$ ends on exactly the same state it would reading $s$ itself; an accepting state, since
$s \in L$. Hence $xy^kz \in L$ for all $k \geq 0$. Take $p$ to be $M$'s state count. $\blacksquare$

The three conditions have mechanical roles: $|y| > 0$ ensures pumping *changes* the string;
$|xy| \leq p$ pins the loop to the first $p$ symbols (this is where the pigeonhole applies); (3)
says *every* pumping exponent stays in $L$; so to use the lemma against a candidate language you
must refute all divisions, not just one.

### 3.2 Using the Pumping Lemma (Proof by Contradiction)

To prove $L$ is **not regular**:

1. Assume $L$ is regular. Let $p$ be the pumping length.
2. Choose a string $s \in L$ with $|s| \geq p$ (strategically).
3. Show that for **any** division $s = xyz$ with $|xy| \leq p$, $|y| > 0$, some $xy^iz \notin L$.
4. Contradiction → $L$ is not regular.

**Example: $L = \{a^n b^n : n \geq 0\}$**

Let $s = a^p b^p$. Since $|xy| \leq p$, $y = a^k$ for some $k \geq 1$. Then $xy^0z = a^{p-k}b^p \notin L$. Therefore $L$ is not regular.

**Example: $L = \{0^n 1^n : n \geq 0\}$**

Same approach. Not regular.

**Example: $L = \{ww^R : w \in \{0,1\}^*\}$**

Choose $s = 0^p 1 1^p 0^p$. Pumping $y$ (within first $p$ symbols) breaks the palindrome structure.

### 3.3 Common Non-Regular Languages

<div class="table-wrap">

| Language | Not Regular Because |
| ----------------------------------------------- | ----------------------- |
| $\{a^n b^n : n \geq 0\}$ | Need to count $a$'s vs $b$'s |
| $\{a^n b^n c^n : n \geq 0\}$ | Need to match three counts |
| $\{ww : w \in \Sigma^*\}$ | Need unbounded memory |
| $\{a^p : p \text{ is prime}\}$ | Primes are non-regular |
| $\{w \in \{a,b\}^* : \#_a(w) = \#_b(w)\}$ | Need to count |

</div>

## 4. Context-Free Grammars

### 4.1 Definition

A CFG is a 4-tuple $G = (V, \Sigma, R, S)$ where:

- $V$ = finite set of variables (nonterminals)
- $\Sigma$ = finite set of terminals (alphabet)
- $R$ = finite set of production rules of form $A \to \alpha$ where $A \in V$, $\alpha \in (V \cup \Sigma)^*$
- $S \in V$ = start variable

**Language of $G$:** $L(G) = \{w \in \Sigma^* : S \Rightarrow^* w\}$

### 4.2 Examples

**Balanced parentheses:**

```
S → (S)
S → SS
S → ε
```

**$\{a^n b^n : n \geq 0\}$:**

```
S → aSb
S → ε
```

**$\{a^n b^n c^n : n \geq 0\}$ is NOT context-free** (proven by pumping lemma for CFLs).

### 4.3 Chomsky Normal Form (CNF)

Every production is of the form:

- $A \to BC$ (two variables)
- $A \to a$ (one terminal)
- $S \to \epsilon$ (only for start symbol)

**Conversion:**

1. Eliminate $\epsilon$-productions (except $S \to \epsilon$).
2. Eliminate unit productions ($A \to B$).
3. Eliminate useless symbols (unreachable and non-generating).
4. Convert remaining productions to CNF.

### 4.4 Parse Trees

A parse tree for a string $w$ generated by a CFG:

- Root: labeled $S$
- Internal nodes: labeled with variables
- Leaves: labeled with terminals (left to right form $w$)
- Children of node $A$: labeled with the right-hand side of a production $A \to \alpha$

### 4.5 Ambiguity

A CFG is **ambiguous** if some string has two or more different parse trees (equivalently, different leftmost derivations).

**Example:**

```
E → E + E
E → E * E
E → (E)
E → a
```

The string $a + a * a$ has two parse trees: $(a + a) * a$ and $a + (a * a)$.

**Unambiguous version (precedence):**

```
E → E + T | T
T → T * F | F
F → (E) | a
```

**Inherent ambiguity:** Some CFLs have no unambiguous grammar (e.g., $\{a^i b^j c^k : i = j \text{ or } j = k\}$).

## 5. Pushdown Automata

### 5.1 Definition

A PDA is a 6-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, F)$ where:

- $\Gamma$ = stack alphabet
- $\delta: Q \times (\Sigma \cup \{\epsilon\}) \times (\Gamma \cup \{\epsilon\}) \to 2^{Q \times (\Gamma \cup \{\epsilon\})}$

Each transition: read input symbol (or $\epsilon$), pop stack symbol (or $\epsilon$), push symbol(s) (or $\epsilon$), change state.

**Deterministic PDA (DPDA):** For every configuration, at most one move is possible.

### 5.2 PDA for $\{a^n b^n : n \geq 0\}$

```
Q = {q0, q1, q2}, F = {q2}, Σ = {a,b}, Γ = {S, $}

δ(q0, a, $)  = {(q0, a$)}    // push a for each a read
δ(q0, a, a)  = {(q0, aa)}
δ(q0, b, a)  = {(q1, ε)}      // pop a for each b read
δ(q1, b, a)  = {(q1, ε)}
δ(q1, ε, $)  = {(q2, $)}      // accept when stack has only $
```

### 5.3 Equivalence

**Theorem:** CFGs and PDAs recognize the same class of languages: the **context-free languages**.

**Proof.** *(CFG $\Rightarrow$ PDA.)* Given $G$, build a PDA $P$ with three states; start, loop,
accept; that works purely on the stack: push $\$$ then $S$; in the loop, the top of stack is
either a variable $A$ (pop it, nondeterministically push the right-hand side of any production
$A \to \alpha$) or a terminal $a$ (pop it, consume $a$ from the input); accept when $\$$ is
exposed. By induction on derivation length, the stack contents after $k$ moves are exactly the
sentential forms reachable $k$ steps into a leftmost derivation, with terminals matched against
input in order: the PDA accepts $w$ iff $S \Rightarrow^* w$. So $L(P) = L(G)$.

*(PDA $\Rightarrow$ CFG.)* Given PDA $P$, normalise so acceptance is by empty stack and each move
pops then pushes at most two symbols. Variables are triples $[q\,A\,q']$, read as "starting in
state $q$ with $A$ on the stack, $P$ can consume some input and end in $q'$ having popped $A$ with
net stack effect nil below it". For each transition producing net effect from state $q$ back to
some $q''$, add productions $[q\,A\,q'] \to a\,[q''\,B_1\,q_m]\,[q_m\,B_2\,q']$ over all
intermediate states $q_m$ (this is where nondeterminism is absorbed; the choice of $q_m$ encodes
where the second symbol's net-nil segment begins), and the base case
$[q\,A\,q] \to \epsilon$. By induction on computation length, $[q\,A\,q'] \Rightarrow^* w$ iff $P$
can go from $q$ to $q'$ consuming $w$ while popping $A$ without disturbing the stack below it;
instantiating with the start configuration gives $L(G) = L(P)$, up to the standard padding that
empties the initial stack symbol. The double induction (on derivation length and computation
length) is the labour; the construction above is the entire idea. $\blacksquare$

$$
\text{CFG} \equiv \text{PDA} \equiv \text{CFL}
$$

**Key difference from regular languages:** DPDAs are strictly weaker than nondeterministic PDAs.

$$
\text{Regular} = \text{DPDA} \subsetneq \text{NPDA} = \text{CFL}
$$

### 5.4 Closure Properties of CFLs

<div class="table-wrap">

| Operation     | Closed? |
| ------------- | ------- |
| Union         | Yes     |
| Concatenation | Yes     |
| Kleene star   | Yes     |
| Intersection  | No*     |
| Complement    | No      |
| Intersection with regular | Yes |

</div>

*Not closed under general intersection, but closed under intersection with a regular language (using product of PDA and DFA).

## 6. Pumping Lemma for Context-Free Languages

### 6.1 Statement

If $L$ is a CFL, then there exists $p$ such that any $s \in L$ with $|s| \geq p$ can be divided into $s = uvxyz$ satisfying:

1. $|vy| > 0$ (v and y not both empty)
2. $|vxy| \leq p$
3. $uv^ixy^iz \in L$ for all $i \geq 0$

### 6.2 Proof of the Pumping Lemma for CFLs

The proof mirrors the regular case, with parse trees replacing DFA state traces. Let $G$ be a CFG
for $L$ and $b$ the maximum number of symbols on any right-hand side. Set $p = b^{|V|}$, where
$|V|$ is the number of variables.

Take any $s \in L$ with $|s| \geq p$ and fix a **smallest** parse tree for $s$. A tree of height
$h$ has at most $b^h$ leaves, so height $< |V|$ would give $|s| < b^{|V|} = p$; contradiction.
So some root-to-leaf path contains at least $|V| + 1$ variables, and with only $|V|$ variables in
total, two occurrences on that path carry the **same variable $A$**. Choose them so the lower
occurrence is within the bottom $|V| + 1$ variables of the path.

Write the yield as $s = u\,v\,x\,y\,z$, where $v$ and $y$ are the yields of the two $A$-subtrees'
outer ring. Then:

1. $|vy| \geq 1$: if both were empty, the two $A$-subtrees would be identical, and excising the
   lower one would leave a *smaller* parse tree for $s$; contradicting minimality.
2. $|vxy| \leq p$: $vxy$ is confined to the subtree rooted at the upper $A$, whose height is at
   most $|V| + 1$, bounding its yield by $b^{|V|+1} \le p \cdot b$; with $b \geq 2$ the standard
   bound is stated as $|vxy| \leq p$ by taking $p = b^{|V|+1}$.
3. Pumping works by grafting: replacing the upper $A$-subtree with the lower one gives $uv^0xy^0z$;
   duplicating the lower inside the upper gives $uv^2xy^2z$; induction on $i$ gives
   $uv^ixy^iz \in L$ for all $i \geq 0$. $\blacksquare$

### 6.3 Application

**Example: $L = \{a^n b^n c^n : n \geq 0\}$ is not context-free.**

Let $s = a^p b^p c^p$. Since $|vxy| \leq p$, the substring $vxy$ cannot span all three letter types.

- If $vxy$ contains only $a$'s and $b$'s: pumping breaks the $a$-$b$-$c$ balance.
- If $vxy$ contains only $b$'s and $c$'s: same issue.
- If $vxy$ contains only one letter type: pumping breaks all three counts.

### 6.4 CFLs vs Non-CFLs

**Not CFL (require three matching counts or more):**

<div class="table-wrap">

| Language                          | Why Not CFL              |
| --------------------------------- | ------------------------ |
| $\{a^n b^n c^n : n \geq 0\}$     | Three matching counts    |
| $\{a^i b^j c^k : i > j > k\}$    | Three ordered counts     |
| $\{ww : w \in \{a,b\}^*\}$      | Copy language (non-CFL)  |

</div>

## 7. Turing Machines

### 7.1 Definition

A Turing machine is a 7-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$ where:

- $Q$ = states
- $\Sigma$ = input alphabet ($\sqcup \notin \Sigma$, blank symbol)
- $\Gamma = \Sigma \cup \{\sqcup\}$ = tape alphabet
- $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$
- $q_0$ = start, $q_{\text{accept}}, q_{\text{reject}}$ = halting states

**Operation:** Read symbol under head, write symbol, move left/right, change state. Computation halts on accept or reject.

### 7.2 TM Variants

All are equivalent in power to the standard TM:

<div class="table-wrap">

| Variant            | Description                           |
| ------------------ | ------------------------------------- |
| Multi-tape TM      | Multiple tapes, each with its own head |
| Nondeterministic TM | Multiple possible transitions        |
| Enumerators        | Print out strings of a language       |
| Multi-dimensional tape | Tape extended to 2D+ grid          |

</div>

**Theorem:** Multi-tape TMs, nondeterministic TMs, and standard TMs recognize the same class of languages.

**Proof.** *(Multi-tape $\Rightarrow$ single-tape.)* Simulate $k$ tapes on one tape by storing
them concatenated, separated by a marker $\#$, with each head's position marked by a dotted
symbol $\dot{a}$. One simulated step: sweep the tape left to right recording the $k$ marked
symbols (in the state), then sweep back applying the $k$ writes and moves (shifting content right
when a head needs a fresh blank). Each simulated step costs $O(n)$ real steps, so efficiency is
lost but computable language class is unchanged.

*(Nondeterministic $\Rightarrow$ deterministic.)* A configuration has finitely many successor
configurations, so the computation unfolds into a finitely-branching tree. A three-tape
deterministic TM explores it breadth-first: tape 1 holds the current frontier, tape 2 generates
each frontier node's successors, tape 3 simulates one chosen node for its length. If any branch
accepts, BFS reaches that accepting configuration in finite time; so the same language is
recognised. (It recognises, not decides: breadth-first search does not halt on infinite rejecting
branches, matching the nondeterministic semantics.) $\blacksquare$

### 7.3 Turing-Recognizable (Recursively Enumerable)

A language is **Turing-recognizable** (RE) if some TM accepts it (may loop on non-members).

### 7.4 Turing-Decidable (Recursive)

A language is **decidable** if some TM **halts on all inputs** (accepts members, rejects non-members).

$$
\text{Decidable} \subsetneq \text{RE} \subsetneq \text{All languages}
$$

## 8. Church-Turing Thesis

### 8.1 Statement

**Any algorithmic procedure can be simulated by a Turing machine.**

This is a **thesis** (not a theorem), it cannot be proven because "algorithmic procedure" is an informal notion.

### 8.2 Implications

- TM defines the boundary of what is computable.
- No more powerful computational model exists (in terms of computable functions).
- Equivalent models: lambda calculus, $\mu$-recursive functions, Post systems, register machines.

## 9. Decidability

### 9.1 Decidable Languages

<div class="table-wrap">

| Language | Decidable? | Algorithm |
| --------------------------------------------- | ---------- | ------------------------------------- |
| $A_{\text{DFA}} = \{(B, w) : B \text{ accepts } w\}$ | Yes | Simulate DFA on $w$ |
| $A_{\text{CFG}} = \{(G, w) : G \text{ generates } w\}$ | Yes | CYK algorithm, $O(n^3 \| G \| )$ |
| $E_{\text{DFA}} = \{A : L(A) = \emptyset\}$ | Yes | Check reachable accepting states |
| $EQ_{\text{DFA}} = \{A, B : L(A) = L(B)\}$ | Yes | Check $\overline{L(A \Delta B)}$ for non-emptiness |
| $A_{\text{TM}} = \{(M, w) : M \text{ accepts } w\}$ | **No** | Diagonalization proof |

</div>

### 9.2 The Halting Problem

$A_{\text{TM}} = \{(M, w) : M \text{ accepts } w\}$ is **undecidable**.

**Proof (diagonalization).** Suppose $H$ decides $A_{\text{TM}}$: $H(\langle M, w \rangle)$
accepts exactly when $M$ accepts $w$, and always halts. Define

$$
D(M) = \begin{cases} \text{reject} & \text{if } H(\langle M, \langle M \rangle \rangle) \text{ accepts} \\ \text{accept} & \text{if } H(\langle M, \langle M \rangle \rangle) \text{ rejects} \end{cases}
$$

$D$ is a legitimate machine (it merely inverts $H$'s answer about a particular input). Now run
$D$ on its own description: $D(\langle D \rangle)$ accepts iff $H$ says $D$ rejects
$\langle D \rangle$, iff $D(\langle D \rangle)$ rejects. A machine accepts its input iff it
rejects it; contradiction. So $H$ cannot exist, and $A_{\text{TM}}$ is undecidable. $\blacksquare$

### 9.3 Reductions for Undecidability

To prove $L$ is undecidable, reduce a known undecidable language to $L$.

**Common undecidable problems:**

<div class="table-wrap">

| Problem | Reduction From |
| ---------------------------------------------- | ----------------- |
| $E_{\text{TM}} = \{M : L(M) = \emptyset\}$ | $A_{\text{TM}}$ |
| $REG_{\text{TM}} = \{M : L(M) \text{ is regular}\}$ | $A_{\text{TM}}$ |
| $EQ_{\text{TM}} = \{M_1, M_2 : L(M_1) = L(M_2)\}$ | $E_{\text{TM}}$ |
| PCP (Post Correspondence Problem) | $A_{\text{TM}}$ |
| Hilbert's 10th Problem (Diophantine equations) | $A_{\text{TM}}$ |

</div>

### 9.4 Rice's Theorem

**Theorem:** Any non-trivial property of the language of a Turing machine is undecidable.

A property is **non-trivial** if it holds for some TMs and not for others.

**Proof.** Let $P$ be a decidable, non-trivial language property, and suppose $D$ decides it.
Since $P$ is non-trivial, pick a machine $T$ with $P(L(T))$ true, and let $T_\emptyset$ be a
machine recognising $\emptyset$ (which then satisfies $P$ falsely; if not, replace $P$ by its
complement, still non-trivial, still decidable). WLOG also ensure $\epsilon \notin L(T)$: if
needed, build $T'$ from $T$ that rejects $\epsilon$ and behaves like $T$ otherwise, and argue with
$T'$ and a $\epsilon$-free variant of $T_\emptyset$; the construction below is unchanged.

Given $(M, w)$, construct $M_w$: on input $x$, **first** simulate $M$ on $w$; if $M$ ever accepts,
then simulate $T$ on $x$ and do whatever $T$ does; if $M$ rejects or loops, $M_w$ loops.

- If $M$ accepts $w$: $M_w$ never blocks, so $L(M_w) = L(T)$ and $P(L(M_w))$ holds.
- If $M$ does not accept $w$: $M_w$ loops on every input, so $L(M_w) = \emptyset$ and
  $P(L(M_w))$ fails.

So $P(L(M_w)) \iff (M, w) \in A_{\text{TM}}$: a decider for $P$ yields a decider for the halting
problem. But $A_{\text{TM}}$ is undecidable; contradiction. Hence no such $D$ exists. $\blacksquare$

**Examples of undecidable properties (by Rice's theorem):**

- Does $M$ accept any string?
- Is $L(M)$ finite?
- Is $L(M)$ regular?
- Does $L(M) = \Sigma^*$?

**Not covered by Rice's theorem:** Properties about the machine’s behavior (not its language), such as "does $M$ run for more than 100 steps on input $w$?"

## 10. Common Pitfalls

1. **Confusing NFA and DFA complexity.** NFA simulation requires tracking multiple states simultaneously ($O(2^n)$ worst case for subset construction), but the NFA itself may be exponentially smaller than any equivalent DFA.

2. **Wrong string choice for pumping lemma proofs.** The string must be long enough ($\geq p$) and specifically chosen to make pumping impossible. A poor choice leads to failing the proof.

3. **Forgetting that CFLs are not closed under complement and intersection.** Unlike regular languages, CFLs lose these closure properties. $\overline{L}$ of a CFL may not be context-free.

4. **Assuming decidability based on the existence of an algorithm.** An algorithm that may not halt (e.g., simulating a TM) does not establish decidability. The TM must halt on all inputs.

5. **Misapplying Rice's theorem.** Rice’s theorem applies only to properties of the **language** recognized by a TM, not properties of the TM's code or computation behavior.

6. **Confusing Turing-recognizable and decidable.** Every decidable language is Turing-recognizable, but not vice versa. The halting problem is recognizable but not decidable.

7. **Assuming more tape heads make TMs more powerful.** Multi-tape TMs are equivalent to single-tape TMs. No variant of the standard TM increases computational power (only efficiency).

## Worked Examples

### Example 1: Designing a Finite Automaton

**Problem:** Design a DFA over {0, 1} that accepts strings containing the substring "010".
**Solution:** States: q0 (start, scanning for first 0), q1 (saw 0, waiting for 1), q2 (saw 01, waiting for 0), q3 (accepting, saw 010). Transitions: q0 on 0 -> q1, q0 on 1 -> q0. q1 on 1 -> q2, q1 on 0 -> q1. q2 on 0 -> q3, q2 on 1 -> q0. q3 on 0 -> q3, q3 on 1 -> q3. The DFA has 4 states and transitions back to earlier states when partial matches are broken.

### Example 2: Context-Free Grammar for a Language

**Problem:** Write a CFG that generates the language L = {a^n b^n c^n : n >= 1}.
**Solution:** S -> aBC. B -> aBB (this ensures more a's push B’s onto the middle). C -> cD. D -> cDD (this ensures more c's match). B -> b (terminal). D -> d (terminal). Wait -- this generates a^n b^n c^m which is wrong. The language a^n b^n c^n is not context-free (proven by the pumping lemma for CFLs). No CFG exists for this language. This is a common exam trick question.

## Summary

- **DFA** and **NFA** recognize the same **regular languages**, convertible via subset construction.
- **Regular expressions** are equivalent to finite automata (Thompson's construction).
- **Pumping lemma for regular languages** proves non-regularity by contradiction.
- **CFGs** generate **context-free languages**, equivalent to **PDAs**.
- **Ambiguity** means multiple parse trees; some CFLs are inherently ambiguous.
- **Pumping lemma for CFLs** proves non-context-freeness (e.g., $a^n b^n c^n$).
- **Turing machines** are the most powerful model; equivalent to lambda calculus and recursive functions.
- **Church-Turing thesis:** TMs capture all algorithmic computation.
- **Halting problem** is undecidable (diagonalization). **Rice's theorem** generalizes undecidability.

## Intuition

Automata theory studies abstract computing models. Finite automata recognize regular languages. Pushdown automata recognize context-free languages. Turing machines define the limits of computation. The Chomsky hierarchy classifies languages by automata complexity. Understanding these models reveals what can and cannot be computed, and informs compiler design, protocol verification, and formal specification.

## Cross-References

<div class="table-wrap">

| Topic | Link |
| ------- | ------ |
| Compilers | [View](/3-theory/compilers/) |
| Complexity Theory | [View](/1-algorithms/complexity-theory/) |
| Algorithm Design | [View](/1-algorithms/algorithm-design/) |

</div>

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)
