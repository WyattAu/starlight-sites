---
title: "Computer Science Practice Test — 30 Problems"
description: "30 computer science problems covering Algorithms, Data Structures, Theory of Computation, and Databases. Multiple choice and coding problems with detailed explanations."
date: 2026-07-24
tags:
  - computer-science
  - practice-test
  - university
  - undergraduate
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://computer-science.wyattau.com"},
    {"name": "Practice Test", "url": "https://computer-science.wyattau.com/practice-test-mega"}
  ]
}
</script>

## Computer Science Practice Test — 30 Problems

This practice test covers 30 problems across four major domains of computer science: Algorithms, Data Structures, Theory of Computation, and Databases. Each problem tests conceptual understanding, analytical reasoning, and practical problem-solving. Work through all problems before checking the answer key.

## Instructions

- **Time limit:** 90 minutes (3 minutes per problem)
- **Format:** Multiple choice and coding — select the best answer or write pseudocode/code
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes. Write code on paper.
- **After the test:** Check the answer key at the bottom. Study the explanations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Algorithms | P1–P8 | 8 |
| Data Structures | P9–P16 | 8 |
| Theory of Computation | P17–P23 | 7 |
| Databases | P24–P30 | 7 |
| **Total** | **30** | **30** |

---

## Algorithms (P1–P8)

### P1 — Time Complexity

What is the time complexity of the following function?

```python
def mystery(n):
    count = 0
    i = 1
    while i < n:
        j = n
        while j > 0:
            count += 1
            j = j // 2
        i = i * 2
    return count
```

| # | Option |
| --- | --- |
| A | $O(n)$ |
| B | $O(n \log n)$ |
| C | $O(\log^2 n)$ |
| D | $O(n^2)$ |
| E | $O(\sqrt{n})$ |

**Correct: B** (index 1)

The outer loop runs $O(\log n)$ times (doubling $i$ each time). The inner loop runs $O(\log n)$ times (halving $j$ each time). Total: $O(\log n) \times O(\log n) = O(\log^2 n)$. Wait — the inner loop resets $j = n$ each time, so it runs $O(\log n)$ iterations. But $n$ is constant within the inner loop. So total iterations: $\sum_{k=0}^{\log n} \log n = O(\log^2 n)$.

`medium` — 1 mark

---

### P2 — Divide and Conquer

In a merge sort, what is the recurrence relation for the number of comparisons in the worst case?

| # | Option |
| --- | --- |
| A | $T(n) = 2T(n/2) + n$ |
| B | $T(n) = 2T(n/2) + 1$ |
| C | $T(n) = T(n-1) + n$ |
| D | $T(n) = 2T(n/2) + n^2$ |
| E | $T(n) = T(n/2) + 1$ |

**Correct: A** (index 0)

Merge sort divides the array into two halves ($2T(n/2)$) and merges them in $O(n)$ comparisons. The recurrence $T(n) = 2T(n/2) + n$ solves to $O(n \log n)$ by the Master Theorem.

`easy` — 1 mark

---

### P3 — Graph Algorithms

Which algorithm finds the shortest path from a single source to all vertices in a graph with non-negative edge weights?

| # | Option |
| --- | --- |
| A | Kruskal's algorithm |
| B | Prim's algorithm |
| C | Dijkstra's algorithm |
| D | Bellman-Ford algorithm |
| E | Floyd-Warshall algorithm |

**Correct: C** (index 2)

Dijkstra's algorithm efficiently computes single-source shortest paths for non-negative weights in $O((V+E)\log V)$ using a priority queue. Bellman-Ford handles negative weights but is slower. Floyd-Warshall computes all-pairs shortest paths.

`easy` — 1 mark

---

### P4 — Dynamic Programming

The Fibonacci sequence can be computed in $O(n)$ time using dynamic programming. What is the space complexity if only the last two values are stored?

| # | Option |
| --- | --- |
| A | $O(1)$ |
| B | $O(\log n)$ |
| C | $O(n)$ |
| D | $O(n \log n)$ |
| E | $O(n^2)$ |

**Correct: A** (index 0)

By storing only the two most recent Fibonacci numbers (previous and current), we use constant space $O(1)$ regardless of $n$. We iterate from 2 to $n$, updating these two values at each step.

`medium` — 1 mark

---

### P5 — Greedy Algorithms

The activity selection problem (selecting the maximum number of non-overlapping activities) can be solved greedily by:

| # | Option |
| --- | --- |
| A | Selecting the longest activity first |
| B | Selecting the activity with the earliest start time |
| C | Selecting the activity with the earliest finish time |
| D | Selecting the activity with the shortest duration |
| E | Randomly selecting activities and removing conflicts |

**Correct: C** (index 2)

The greedy strategy of always choosing the next activity with the earliest finish time yields an optimal solution. This maximises the remaining time for subsequent activities. The algorithm runs in $O(n \log n)$ after sorting by finish time.

`medium` — 1 mark

---

### P6 — NP-Completeness

Which of the following problems is NP-complete?

| # | Option |
| --- | --- |
| A | Shortest path in a graph |
| B | Sorting an array |
| C | The travelling salesman problem (decision version) |
| D | Finding the minimum spanning tree |
| E | Binary search |

**Correct: C** (index 2)

The decision version of TSP ("Is there a tour of length ≤ k?") is NP-complete. It is in NP (a certificate is a tour, verifiable in polynomial time) and NP-hard (by reduction from Hamiltonian cycle). The other problems are all solvable in polynomial time.

`medium` — 1 mark

---

### P7 — String Algorithms

The Knuth-Morris-Pratt (KMP) algorithm achieves string matching in $O(n + m)$ time by:

| # | Option |
| --- | --- |
| A | Using a hash table to store pattern prefixes |
| B | Using a failure function to avoid redundant comparisons |
| C | Building a suffix tree of the text |
| D | Using dynamic programming to find the longest common substring |
| E | Comparing characters from right to left |

**Correct: B** (index 1)

KMP preprocesses the pattern to build a failure (prefix) function that tells us the longest proper prefix of the pattern that is also a suffix. When a mismatch occurs, the algorithm uses this function to skip ahead rather than backtracking, achieving linear time.

`medium` — 1 mark

---

### P8 — Amortised Analysis

What is the amortised cost per operation for dynamic array insertion (amortised via doubling)?

| # | Option |
| --- | --- |
| A | $O(1)$ |
| B | $O(\log n)$ |
| C | $O(n)$ |
| D | $O(n \log n)$ |
| E | $O(1)$ worst case |

**Correct: A** (index 0)

Although a single resize costs $O(n)$, it happens only when the array doubles in size. Over $n$ insertions, the total cost is $n + 2 + 4 + \cdots + n = O(n)$, giving an amortised cost of $O(1)$ per insertion (via the accounting or potential method).

`medium` — 1 mark

---

## Data Structures (P9–P16)

### P9 — Binary Search Trees

What is the worst-case time complexity for searching in a binary search tree?

| # | Option |
| --- | --- |
| A | $O(1)$ |
| B | $O(\log n)$ |
| C | $O(n)$ |
| D | $O(n \log n)$ |
| E | $O(\log^2 n)$ |

**Correct: C** (index 2)

A degenerate (skewed) BST can have height $n$, making search $O(n)$. Balanced BSTs (AVL, Red-Black) guarantee $O(\log n)$. The worst case occurs when elements are inserted in sorted order.

`easy` — 1 mark

---

### P10 — Hash Tables

The expected time complexity of search in a hash table with chaining and a good hash function is:

| # | Option |
| --- | --- |
| A | $O(1)$ worst case |
| B | $O(1)$ expected, $O(n)$ worst case |
| C | $O(\log n)$ |
| D | $O(n)$ always |
| E | $O(n)$ expected |

**Correct: B** (index 1)

With a good hash function and load factor $\alpha = n/m$, expected search time is $O(1 + \alpha) = O(1)$ when the load factor is bounded. However, the worst case (all keys hash to the same bucket) is $O(n)$.

`medium` — 1 mark

---

### P11 — Heaps

In a min-heap with $n$ elements, what is the time complexity of extracting the minimum element?

| # | Option |
| --- | --- |
| A | $O(1)$ |
| B | $O(\log n)$ |
| C | $O(n)$ |
| D | $O(n \log n)$ |
| E | $O(\sqrt{n})$ |

**Correct: B** (index 1)

Extracting the minimum removes the root ($O(1)$ to find it) and then restores the heap property by sifting down, which takes $O(\log n)$ — the height of the heap.

`easy` — 1 mark

---

### P12 — Graph Representations

For a sparse graph with $V$ vertices and $E$ edges where $E \ll V^2$, which representation is most space-efficient?

| # | Option |
| --- | --- |
| A | Adjacency matrix |
| B | Adjacency list |
| C | Incidence matrix |
| D | Edge list only |
| E | Full $V \times V$ matrix |

**Correct: B** (index 1)

An adjacency list uses $O(V + E)$ space, while an adjacency matrix uses $O(V^2)$. For sparse graphs where $E = O(V)$, the adjacency list is significantly more space-efficient.

`easy` — 1 mark

---

### P13 — Balanced Trees

An AVL tree maintains balance by ensuring that the height difference between left and right subtrees of any node is at most:

| # | Option |
| --- | --- |
| A | 0 |
| B | 1 |
| C | 2 |
| D | $\log n$ |
| E | $\sqrt{n}$ |

**Correct: B** (index 1)

The AVL balance condition requires that for every node, $|h(\text{left}) - h(\text{right})| \leq 1$. Violations trigger rotations (single or double) to restore balance, guaranteeing $O(\log n)$ operations.

`easy` — 1 mark

---

### P14 — Bloom Filters

A Bloom filter is a probabilistic data structure that:

| # | Option |
| --- | --- |
| A | Never produces false negatives or false positives |
| B | May produce false positives but never false negatives |
| C | May produce false negatives but never false positives |
| D | May produce both false positives and false negatives |
| E | Requires $O(n)$ space per element |

**Correct: B** (index 1)

A Bloom filter can definitively say an element is not in the set (no false negatives), but may incorrectly report an element as present (false positives). It uses a bit array with multiple hash functions, requiring sub-linear space.

`medium` — 1 mark

---

### P15 — Union-Find

The union-find (disjoint set) data structure with union by rank and path compression has an amortised time complexity of approximately:

| # | Option |
| --- | --- |
| A | $O(\log n)$ per operation |
| B | $O(\alpha(n))$ per operation, where $\alpha$ is the inverse Ackermann function |
| C | $O(n)$ per operation |
| D | $O(1)$ worst case per operation |
| E | $O(\log^* n)$ per operation |

**Correct: B** (index 1)

With both optimisations, the amortised cost per operation is $O(\alpha(n))$, where $\alpha(n)$ is the extremely slowly growing inverse Ackermann function (effectively ≤ 5 for all practical values of $n$).

`hard` — 1 mark

---

### P16 — Tries

In a trie (prefix tree), what is the worst-case time complexity for searching a string of length $m$?

| # | Option |
| --- | --- |
| A | $O(1)$ |
| B | $O(m)$ |
| C | $O(n)$ where $n$ is the number of strings |
| D | $O(m \log n)$ |
| E | $O(mn)$ |

**Correct: B** (index 1)

A trie searches character by character along a path of length $m$, giving $O(m)$ time regardless of how many strings are stored. This is independent of $n$, making it ideal for prefix-based searches.

`medium` — 1 mark

---

## Theory of Computation (P17–P23)

### P17 — Regular Languages

Which of the following languages is NOT regular?

| # | Option |
| --- | --- |
| A | $\{a^n b^n \mid n \geq 0\}$ |
| B | $\{w \in \{a,b\}^* \mid w \text{ has an even number of } a\text{s}\}$ |
| C | $\{a^n b^m \mid n, m \geq 0\}$ |
| D | $\{a^n \mid n \text{ is prime}\}^*$ |
| E | The set of all strings over $\{a, b\}$ |

**Correct: A** (index 0)

$\{a^n b^n \mid n \geq 0\}$ is the classic non-regular language, proved by the pumping lemma. A finite automaton cannot count arbitrarily many $a$s and then match them against $b$s. All other options describe regular languages.

`easy` — 1 mark

---

### P18 — Context-Free Languages

Which of the following is a context-free language but not regular?

| # | Option |
| --- | --- |
| A | $\{a^n b^n \mid n \geq 0\}$ |
| B | $\{a^n b^n c^n \mid n \geq 0\}$ |
| C | $\{ww^R \mid w \in \{a,b\}^*\}$ |
| D | Both A and C |
| E | Both A and B |

**Correct: D** (index 3)

$\{a^n b^n\}$ and $\{ww^R\}$ (palindromes) are both context-free (generated by context-free grammars) but not regular. $\{a^n b^n c^n\}$ is not context-free (proved by the pumping lemma for CFLs).

`medium` — 1 mark

---

### P19 — Turing Machines

The Church-Turing thesis states that:

| # | Option |
| --- | --- |
| A | Every computable function can be computed by a Turing machine |
| B | Turing machines can solve the halting problem |
| C | Every language is decidable |
| D | Turing machines are equivalent to finite automata |
| E | Quantum computers are more powerful than Turing machines |

**Correct: A** (index 0)

The Church-Turing thesis posits that any function that is "effectively computable" (by any intuitive means) is computable by a Turing machine. It is a thesis (not a theorem) because it equates an informal notion of computability with a formal one.

`medium` — 1 mark

---

### P20 — Decidability

Which of the following problems is decidable?

| # | Option |
| --- | --- |
| A | Does a given Turing machine halt on the empty input? |
| B | Are two context-free grammars equivalent? |
| C | Is a given string in a regular language? |
| D | Does a given context-free grammar generate all strings? |
| E | Is a given Turing machine deterministic? |

**Correct: C** (index 2)

Membership in a regular language is decidable: construct the corresponding DFA and simulate it on the input string. The halting problem (A) and CFL equivalence (B) are undecidable.

`medium` — 1 mark

---

### P21 — P vs NP

If P = NP, which of the following would be true?

| # | Option |
| --- | --- |
| A | Every problem in NP could be solved in polynomial time |
| B | Cryptography would become easier |
| C | NP-complete problems would not exist |
| D | Turing machines would become more powerful |
| E | Regular languages would no longer be decidable |

**Correct: A** (index 0)

If P = NP, every language in NP (including NP-complete problems) would have a polynomial-time algorithm. This would break most modern cryptography (which relies on the hardness of problems like factoring). NP-complete problems would still exist — they'd just be solvable in polynomial time.

`medium` — 1 mark

---

### P22 — Finite Automata

How many states are needed in the minimal DFA for the language $\{w \in \{0,1\}^* \mid w \text{ represents a number divisible by 3 in binary}\}$?

| # | Option |
| --- | --- |
| A | 2 |
| B | 3 |
| C | 4 |
| D | 6 |
| E | 9 |

**Correct: B** (index 1)

The remainders modulo 3 partition the set of binary strings into 3 equivalence classes: remainder 0, 1, and 2. The minimal DFA has 3 states, one for each remainder. Transitions update the remainder based on the current bit.

`medium` — 1 mark

---

### P23 — Complexity Classes

Which complexity class contains all problems solvable by a deterministic Turing machine in $O(2^n)$ time?

| # | Option |
| --- | --- |
| A | P |
| B | NP |
| C | EXPTIME |
| D | PSPACE |
| E | R (Recursive) |

**Correct: C** (index 2)

EXPTIME is the class of problems solvable in $O(2^{p(n)})$ time for some polynomial $p(n)$. The class R (recursive) is the class of all decidable languages, which is broader. P and PSPACE are subsets of EXPTIME.

`medium` — 1 mark

---

## Databases (P24–P30)

### P24 — Relational Model

In the relational model, a relation (table) is formally defined as a:

| # | Option |
| --- | --- |
| A | Set of tuples |
| B | Bag (multiset) of tuples |
| C | Ordered list of tuples |
| D | Tree of tuples |
| E | Graph of tuples |

**Correct: A** (index 0)

In the formal relational model (based on set theory), a relation is a set of tuples. Sets do not contain duplicates. SQL uses bags (multisets), but the theoretical model uses sets.

`medium` — 1 mark

---

### P25 — Normal Forms

A relation is in Third Normal Form (3NF) if:

| # | Option |
| --- | --- |
| A | It is in 1NF and all attributes are atomic |
| B | It is in 2NF and all non-key attributes are non-transitively dependent on the primary key |
| C | It is in BCNF and every functional dependency is trivial |
| D | It has no multi-valued dependencies |
| E | It is in 4NF |

**Correct: B** (index 1)

3NF requires: (1) the relation is in 2NF (no partial dependencies), and (2) no non-key attribute is transitively dependent on the primary key. BCNF is stricter: every determinant must be a candidate key.

`medium` — 1 mark

---

### P26 — SQL

What is the result of the following SQL query?

```sql
SELECT department, COUNT(*) as cnt
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

| # | Option |
| --- | --- |
| A | All departments with their employee counts |
| B | Only departments with more than 5 employees |
| C | The total number of employees |
| D | The department with the most employees |
| E | An error — GROUP BY and HAVING cannot be used together |

**Correct: B** (index 1)

The `GROUP BY` groups rows by department. `COUNT(*)` counts employees per group. `HAVING COUNT(*) > 5` filters to only include groups (departments) with more than 5 employees. The `WHERE` clause filters rows before grouping; `HAVING` filters groups after.

`easy` — 1 mark

---

### P27 — ACID Properties

Which ACID property ensures that a transaction is treated as a single, indivisible unit?

| # | Option |
| --- | --- |
| A | Atomicity |
| B | Consistency |
| C | Isolation |
| D | Durability |
| E | Availability |

**Correct: A** (index 0)

Atomicity ensures that all operations in a transaction complete successfully, or none are applied ("all or nothing"). Consistency ensures the database moves from one valid state to another. Isolation ensures concurrent transactions don't interfere. Durability ensures committed data persists.

`easy` — 1 mark

---

### P28 — Indexing

A B-tree index is particularly efficient for:

| # | Option |
| --- | --- |
| A | Exact match lookups only |
| B | Range queries and ordered retrieval |
| C | Full-text search |
| D | Spatial queries |
| E | Aggregate queries on unindexed columns |

**Correct: B** (index 1)

B-trees maintain sorted order and support efficient range queries ($>$, $<$, BETWEEN) because leaf nodes are linked. Hash indexes are faster for exact matches but cannot handle range queries. B-trees are the standard index for relational databases.

`medium` — 1 mark

---

### P29 — Transactions

In a database system, a "dirty read" occurs when:

| # | Option |
| --- | --- |
| A | A transaction reads data that has been committed |
| B | A transaction reads uncommitted data from another transaction |
| C | A transaction reads the same data twice and gets different values |
| D | A transaction fails and must be rolled back |
| E | Two transactions try to write to the same row simultaneously |

**Correct: B** (index 1)

A dirty read happens when Transaction A reads data modified by Transaction B, but Transaction B has not yet committed. If B rolls back, A has read data that never officially existed. The READ COMMITTED isolation level prevents dirty reads.

`medium` — 1 mark

---

### P30 — Joins

In a LEFT JOIN between tables A and B, which of the following is true?

| # | Option |
| --- | --- |
| A | All rows from B are returned, with NULLs for unmatched A rows |
| B | Only matching rows from both tables are returned |
| C | All rows from A are returned, with NULLs for unmatched B rows |
| D | Only rows that appear in both A and B are returned |
| E | The result is identical to an INNER JOIN |

**Correct: C** (index 2)

A LEFT JOIN returns all rows from the left table (A) and matched rows from the right table (B). Where there is no match in B, NULL values are returned for B's columns. An INNER JOIN returns only matching rows.

`easy` — 1 mark

---

## Answer Key

<details>
<summary>Click to reveal the answer key</summary>

| Question | Answer | Question | Answer | Question | Answer |
| --- | --- | --- | --- | --- | --- |
| P1 | B | P11 | B | P21 | A |
| P2 | A | P12 | B | P22 | B |
| P3 | C | P13 | B | P23 | C |
| P4 | A | P14 | B | P24 | A |
| P5 | C | P15 | B | P25 | B |
| P6 | C | P16 | B | P26 | B |
| P7 | B | P17 | A | P27 | A |
| P8 | A | P18 | D | P28 | B |
| P9 | C | P19 | A | P29 | B |
| P10 | B | P20 | C | P30 | C |

</details>

---

## Difficulty Breakdown

| Difficulty | Count |
| --- | --- |
| Easy | 10 |
| Medium | 19 |
| Hard | 1 |

---

## Cross-References

- **[Algorithms and Data Structures](algorithms-and-data-structures)** — Sorting, searching, graphs, trees, and complexity analysis
- **[Theory of Computation](theory-of-computation)** — Automata, formal languages, decidability, and complexity
- **[Databases](databases)** — Relational model, SQL, normalisation, indexing, and transactions
- **[Discrete Mathematics](discrete-mathematics)** — Logic, sets, graph theory, and combinatorics
- **[Operating Systems](operating-systems)** — Processes, memory management, and file systems
- **[Discrete Mathematics Practice](practice-discrete-math)** — Additional discrete math exercises

---

## Tips for Using This Practice Test

1. **Work through the code.** For algorithm questions, trace through the code with small inputs rather than guessing the complexity.
2. **Draw diagrams.** For data structures, sketch the tree, heap, or graph to visualise the problem.
3. **Know the definitions.** Theory questions test precise definitions — study the formal statements.
4. **Practise SQL by hand.** Write out the result sets for query questions rather than relying on intuition.
5. **Retake after one week.** Computer science concepts build on each other — spaced repetition ensures strong foundations.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
