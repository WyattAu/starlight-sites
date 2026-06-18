---
title: Indexing
tags:
  - Computing
  - University
description: ""s right leaf. Leaf becomes empty -- underflow.

**Redistribution:** Sibling leaf $[5]$ has 1 key (at minimum). Cannot redistribute. **Merge:** Merge
empty leaf with $[5]$. The merged leaf is $[5]$. The internal node $[10]$ now has Only one child
(the merged leaf), so it underflows.

Since the internal node is a child of the root, and the root has two children, we can merge: remove
The internal node and promote its remaining child to be a direct child of the root.

```
Root: [30]
  ├── Leaf: [5]
  ├── Leaf: [10]     (originally contained 10 before deletion)
  └── Leaf: [30]
```

Wait -- after deleting 10, the leaf $[10]$ should become $[]$And merging with $[5]$ gives $[5]$. Let
me retrace. The point is that deletion can trigger cascading merges up the tree.

</details>

### 5.2 Hash Indexes

**Static hashing.** A hash function $h : K \to \\{0, \ldots, B - 1\\}$ maps keys to $B$ buckets.
Average lookup: $O(1)$ under uniform hashing. No support for range queries.

**Collision handling.** When two keys hash to the same bucket, the DBMS must resolve the collision:

1. **Separate chaining:** Each bucket contains a linked list of entries. Lookup requires traversing
   the chain. Average chain length under uniform hashing is $n / B$.
2. **Open addressing (linear probing):** If bucket $h(k)$ is full, try $h(k)+1$, $h(k)+2$Etc. (mod
   $B$). Prone to **primary clustering**: consecutive occupied slots increase the average probe
   length.
3. **Open addressing (quadratic probing):** Try $h(k) + 1^2, h(k) + 2^2, h(k) + 3^2$Etc. Reduces
   clustering but may not probe all buckets.
4. **Open addressing (double hashing):** Use a second hash function $h_2$: probe sequence is
   $h(k) + i \cdot h_2(k)$ for $i = 0, 1, 2, \ldots$. Minimises clustering.

**Extendible hashing.** Dynamically grows the number of buckets. Uses a **global depth** $d$ and
Per-bucket **local depth** $d'$.

- Hash key to $d$ bits.
- If the bucket is full and its local depth equals the global depth, double the directory (global
  depth increases by 1) and split the bucket.
- If the bucket's local depth is less than the global depth, split the bucket without doubling the
  directory.

**Linear hashing.** Gradually grows one bucket at a time using a pointer to the next bucket to
split. Simpler than extendible hashing but may have slightly higher overflow probability.

**Comparison:**

| Property      | B+ Tree                 | Hash Index               |
| ------------- | ----------------------- | ------------------------ |
| Point query   | $O(\log_m n)$           | $O(1)$ average           |
| Range query   | $O(\log_m n + k)$       | Not supported            |
| Insert/Delete | $O(\log_m n)$           | $O(1)$ average           |
| Space         | Nodes may be half-empty | May have overflow chains |
| Order         | Maintains key order     | No ordering              |

### 5.3 Bitmap Indexes

A **bitmap index** creates one bitmap per distinct value of an attribute. For a table with $n$ rows
And attribute $A$ with values $\\{v_1, \ldots, v_k\\}$Store $k$ bitmaps of $n$ bits each, where
Bitmap $i$ has a 1 in position $j$ if row $j$ has $A = v_i$.

**Use case:** Low-cardinality columns (gender, status, country). Bitmap indexes support fast bitwise
AND/OR for multi-criteria queries.

**Bitwise operations for query evaluation:**

| Query                   | Bitmap operation                                        |
| ----------------------- | ------------------------------------------------------- |
| $A = v_1$ AND $B = v_2$ | $\mathrm{bitmap_}{A,v_1}$ AND $\mathrm{bitmap_}{B,v_2}$ |
| $A = v_1$ OR $A = v_2$  | $\mathrm{bitmap_}{A,v_1}$ OR $\mathrm{bitmap_}{A,v_2}$  |
| $A \neq v_1$            | NOT $\mathrm{bitmap_}{A,v_1}$                           |

**Compression.** For columns with many distinct values, run-length encoding (WAH or BBC) compresses
Bitmaps effectively while still supporting bitwise operations.

### 5.4 Query Processing Cost Estimation

The **cost model** estimates the number of disk I/O operations for a query plan. We assume the
buffer Pool has $B$ pages and each disk page access costs one I/O.

**Selection cost estimation:**

| Access method           | Cost (I/Os)                                               |
| ----------------------- | --------------------------------------------------------- |
| Full table scan         | $\lceil n_R / B \rceil$ (or $n_R$ if $B$ pages available) |
| B+ tree equality search | $\log_f(n_R)$ leaf + 1 data page                          |
| B+ tree range search    | $\log_f(n_R)$ leaf + $\lvert\mathrm{range} pages\rvert$   |
| Hash equality search    | 1 (ideal)                                                 |

Where $f$ is the fanout (average number of children per internal node).

**Join cost estimation (from Section 7):**

| Algorithm         | Cost                                                      |
| ----------------- | --------------------------------------------------------- |
| Block nested-loop | $n_R + \lceil n_R/(B-2)\rceil \cdot n_S$                  |
| Sort-merge        | $2n_R \log_{B-1}(n_R) + 2n_S \log_{B-1}(n_S) + n_R + n_S$ |
| Hash join         | $3(n_R + n_S)$ (if build relation fits in $B$ pages)      |

<details>
<summary>Worked Example 5.3: Comparing Access Methods</summary>

**Scenario:** `Student` table with 50000 tuples, 2500 pages (20 tuples per page). Buffer pool has 52
Pages. Attribute `ID` has a B+ tree index of height 3 (fanout 100). Query:
`SELECT * FROM Student WHERE ID = 12345`.

**Method 1: Full table scan.** Cost = 2500 I/Os.

**Method 2: B+ tree index on `ID`.** Follow root $\to$ internal $\to$ internal $\to$ leaf: 3 I/Os
For the index traversal. Then 1 I/O for the data page. Total: 4 I/Os.

The B+ tree index is $625\times$ faster for a single equality lookup. However, for a query selecting
50% of the table, a full scan (2500 I/Os) would be faster than 25000 individual B+ tree lookups
($25000 \times 4 = 100000$ I/Os). This is why the optimiser chooses between index and scan based on
Selectivity estimates.

</details>

