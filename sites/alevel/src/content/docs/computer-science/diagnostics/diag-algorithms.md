---
title: "Algorithms -- Diagnostic Tests"
description: ""show all users with scores between X and Y"), which data structure would be most
appropriate?

**Solution:**

(a) **Insertion sort** is appropriate for maintaining the top 100 because:

- Only 100 elements need to be maintained, not the full 10 million.
- When a new score arrives, it only needs to be inserted into the correct position among the 100 (if
  it qualifies).
- Insertion into a sorted array of 100 elements takes at most $O(100) = O(1)$ comparisons (constant
  time relative to $n = 10^7$).
- The initial sort of 100 elements is trivial.

Alternatively, a **min-heap** of size 100: the root stores the minimum of the top 100. When a new
score arrives, compare with the root. If greater, replace root and reheapify ($O(\log 100) = O(1)$).
If not, discard. This is the most efficient approach.

(b) A **hash table** with the user ID as key and score as value allows $O(1)$ lookup of any user"s
score. To check if a score is in the top 100, compare against the minimum score in the top 100 (the
root of the min-heap, $O(1)$).

(c) For range queries, a **balanced BST** (AVL tree or red-black tree) keyed by score allows:

- Range queries in $O(\log n + k)$ where $k$ is the number of results.
- In-order traversal to list all scores in a range.
- $O(\log n)$ insertion and deletion.

A **B-tree** (used in databases) would also be excellent for range queries, as it stores data in
sorted order and allows efficient sequential access.

**Combined solution:** Use a min-heap of size 100 for the leaderboard (fast top-100 maintenance), a
hash table for $O(1)$ user score lookup, and a balanced BST for range queries. The hash table and
BST are updated whenever a score changes.

---

### IT-2: Graph Algorithms and Network Design (with Network Fundamentals)

**Question:** A computer network has 6 routers (A--F) with the following link costs (undirected):
A-B(2), A-C(5), B-C(1), B-D(4), C-D(1), C-E(3), D-E(6), D-F(7), E-F(2). (a) Find the minimum
spanning tree using Kruskal's algorithm. (b) Calculate the total cost. (c) If link C-D fails,
recalculate the MST.

**Solution:**

(a) **Kruskal's algorithm** (sort edges by weight):

Edges sorted: B-C(1), C-D(1), A-B(2), E-F(2), C-E(3), B-D(4), A-C(5), D-E(6), D-F(7).

Process:

1. B-C(1): add. Forest: \{B-C\}, \{A\}, \{D\}, \{E\}, \{F\}.
2. C-D(1): add (C connects to D). Forest: \{B-C-D\}, \{A\}, \{E\}, \{F\}.
3. A-B(2): add (A connects to B). Forest: \{A-B-C-D\}, \{E\}, \{F\}.
4. E-F(2): add. Forest: \{A-B-C-D\}, \{E-F\}.
5. C-E(3): add (C connects to E). Forest: \{A-B-C-D-E-F\}. Done (5 edges for 6 vertices).

MST edges: A-B(2), B-C(1), C-D(1), C-E(3), E-F(2).

(b) Total cost: $2 + 1 + 1 + 3 + 2 = 9$.

(c) If C-D(1) fails, re-run Kruskal's algorithm without this edge:

Edges (sorted, excluding C-D): B-C(1), A-B(2), E-F(2), C-E(3), B-D(4), A-C(5), D-E(6), D-F(7).

1. B-C(1): add. \{B-C\}, \{A\}, \{D\}, \{E\}, \{F\}.
2. A-B(2): add. \{A-B-C\}, \{D\}, \{E\}, \{F\}.
3. E-F(2): add. \{A-B-C\}, \{D\}, \{E-F\}.
4. C-E(3): add. \{A-B-C-E-F\}, \{D\}.
5. B-D(4): add. \{A-B-C-D-E-F\}. Done (5 edges for 6 vertices).

New MST: A-B(2), B-C(1), C-E(3), E-F(2), B-D(4).

Total cost: $2 + 1 + 3 + 2 + 4 = 12$.

The cost increased from 9 to 12 when link C-D failed, demonstrating the importance of redundant
paths in network design.

---

### IT-3: Recursive Algorithms and Complexity (with Programming Constructs)

**Question:** The following recursive function computes the nth Fibonacci number:

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n-1) + fib(n-2)
```

(a) Draw the recursion tree for `fib(5)`. (b) How many times is `fib(2)` called? (c) Explain why the
time complexity is $O(2^n)$ and how memoisation improves it to $O(n)$. (d) Write an iterative
version with $O(n)$ time and $O(1)$ space complexity.

**Solution:**

(a) Recursion tree for `fib(5)`:

```
                    fib(5)
                   /      \
              fib(4)        fib(3)
             /     \        /     \
         fib(3)   fib(2)  fib(2)  fib(1)
        /     \     |      |       |
    fib(2) fib(1)   1      1       1
      |      |
      1      1
```

(b) `fib(2)` is called 3 times: once from `fib(4)` and once from `fib(3)` on the left, and once from
`fib(3)` on the right. More precisely: in the tree above, `fib(2)` appears at three distinct nodes.

(c) At each level of recursion, the number of function calls approximately doubles (each call spawns
two more, except the base cases). The depth is $n$Giving approximately $2^n$ nodes. More precisely,
the number of calls follows the Fibonacci sequence itself: $T(n) = T(n-1) + T(n-2) + 1$Which gives
$T(n) \approx 2 \times \text{fib}(n+1) - 1$Growing as $O(\phi^n)$ where
$\phi = (1+\sqrt{5})/2 \approx 1.618$. This is commonly stated as $O(2^n)$ as an upper bound.

Memoisation stores the result of `fib(k)` the first time it is computed. Subsequent calls to
`fib(k)` retrieve the stored value in $O(1)$ time. Since there are only $n$ distinct values of
`fib(k)` to compute ($k = 0, 1, \ldots, n$), the total work is $O(n)$.

(d) Iterative version:

```python
def fib_iterative(n):
    if n <= 1:
        return n
    prev2 = 0
    prev1 = 1
    for i in range(2, n + 1):
        current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    return prev1
```

Time complexity: $O(n)$ -- one loop iteration per value. Space complexity: $O(1)$ -- only three
variables are used regardless of $n$.
