---
title: Query Optimisation
tags:
  - Computing
  - University
description: 'The optimiser estimates the cost of alternative execution plans and chooses the  Comprehensive educational content coverage with definitions and practice proble'
---

### 7.1 Query Processing Pipeline

$$\mathrm{SQL} \xrightarrow{\mathrm{parse} \mathrm{AST} \xrightarrow{\mathrm{rewrite} \mathrm{Logical} plan \xrightarrow{\mathrm{optimise} \mathrm{Physical} plan \xrightarrow{\mathrm{execute} \mathrm{Result}}}}}$$

### 7.2 Cost-Based Optimisation

The optimiser estimates the cost of alternative execution plans and chooses the cheapest.

**Cost model.** Cost = I/O cost (disk page accesses) + CPU cost. For disk-bound queries, I/O
Dominates.

**Catalog statistics:** Table cardinality ($n$), attribute value cardinality, number of distinct
Values, histogram of value distribution, index information.

**Selectivity estimation.** For a predicate $\sigma_{A = v}(R)$The selectivity is approximately
$1 / V(A, R)$ where $V(A, R)$ is the number of distinct values of $A$ in $R$.

| Predicate type              | Selectivity estimate                             |
| --------------------------- | ------------------------------------------------ |
| $A = v$                     | $1 / V(A, R)$                                    |
| $A \gt v$                   | $(\max(A) - v) / (\max(A) - \min(A))$            |
| $A_1 = v_1 \land A_2 = v_2$ | $1 / V(A_1) \times 1 / V(A_2)$                   |
| $A_1 = v_1 \lor A_2 = v_2$  | $1/V(A_1) + 1/V(A_2) - 1/(V(A_1) \times V(A_2))$ |

### 7.3 Join Algorithms

**Nested-loop join.** For each tuple in $R$Scan all of $S$.

$$\mathrm{Cost} = n_R \cdot n_S \mathrm{ page} accesses (worst case)$$

If one relation fits in memory, buffer it and scan the other: cost = $n_R + n_S$.

**Block nested-loop join.** Use $B$ buffer pages. Load blocks of $R$ into $B - 2$ buffers, scan $S$
With the remaining buffer.

$$\mathrm{Cost} = n_R + \lceil n_R / (B - 2) \rceil \cdot n_S$$

**Sort-merge join.** Sort both relations on the join attribute, then merge.

$$\mathrm{Cost} = 2 \cdot n_R \cdot \log_{B-1}(n_R) + 2 \cdot n_S \cdot \log_{B-1}(n_S) + n_R + n_S$$

Efficient for large relations, especially when both are already sorted.

**Hash join.** Build a hash table on the smaller relation (build phase), then probe with the larger
(probe phase).

$$\mathrm{Cost} = 3 \cdot (n_R + n_S) \mathrm{ (if build relation fits in memory)}$$

Best for equi-joins when one relation fits in memory.

**Index nested-loop join.** For each tuple in $R$Use an index on $S$ to find matching tuples.

$$\mathrm{Cost} = n_R \cdot (\mathrm{index} lookup cost)$$

Efficient if $S$ has an index on the join attribute and $n_R$ is small.

### 7.4 Query Plan Selection

The optimiser explores the space of equivalent logical plans and physical implementations. For $k$
Joins, the number of join orderings is $O(k!)$ (left-deep trees) or $O(3^k)$ (bushy trees).
Practical optimisers use dynamic programming with pruning.

**Heuristic transformations:**

- Push selections down (reduce intermediate result sizes).
- Push projections down (reduce column widths).
- Convert cross products to joins when possible.
- Reorder joins based on estimated cardinalities.

### 7.5 Key Relationships Between Join Algorithms

| Algorithm            | Best use case                    | Cost (pages)                  | Memory required |
| -------------------- | -------------------------------- | ----------------------------- | --------------- |
| Nested-loop          | Small $n_R$ (outer small)        | $n_R \cdot n_S$               | Minimal         |
| Block nested-loop    | Medium-sized tables              | $n_R + \lceil n_R/(B-2)\rceil n_S$ | $B$ pages |
| Sort-merge           | Large tables, sorted input       | $2n_R\log n_R + 2n_S\log n_S + n_R + n_S$ | $B$ pages |
| Hash                 | Equi-join, one relation fits     | $3(n_R + n_S)$                | Build table     |
| Index nested-loop    | Small outer, indexed inner       | $n_R \cdot \text{(index cost)}$ | Minimal       |

### 7.6 Common Pitfalls

- **Assuming the cheapest plan for one query is best for all.** The optimal join order depends
  critically on selectivity estimates. Outdated statistics produce poor plans.
- **Forgetting that selectivity estimates are just estimates.** Uniform distribution assumptions
  are often wrong. Histograms and sampling improve accuracy but never guarantee correctness.
- **Confusing left-deep and bushy trees for the same join.** Left-deep trees pipeline well but may
  miss optimal orderings. Bushy trees can exploit more parallelism.
- **Thinking index nested-loop join always beats full table scan.** If the outer relation is large
  and the index has poor selectivity (many matching tuples per key), scanning may be cheaper.

### 7.7 Worked Examples

**Problem.** Consider $R$ with 1000 pages and $S$ with 500 pages, 100 buffer pages ($B = 100$).
Compare the cost of block nested-loop join vs sort-merge join.

**Solution.** Block nested-loop: $\mathrm{Cost} = 1000 + \lceil 1000/(100-2)\rceil \cdot 500 = 1000 + 11 \cdot 500 = 6500$ pages.

Sort-merge: sorting $R$ costs $2 \cdot 1000 \cdot \log_{99}(1000) \approx 2 \cdot 1000 \cdot 2 = 4000$. Sorting $S$: $2 \cdot 500 \cdot \log_{99}(500) \approx 2 \cdot 500 \cdot 2 = 2000$. Merge: $1000 + 500 = 1500$.
Total: $4000 + 2000 + 1500 = 7500$ pages.

Block nested-loop is cheaper in this case (6500 vs 7500). $\blacksquare$

**Problem.** Estimate selectivity for $\sigma_{A > 100 \land B = 5}(R)$ given $V(A,R) = 50$,
$\min(A)=0$, $\max(A)=200$, $V(B,R) = 20$.

**Solution.** For $A > 100$: selectivity $\approx (200-100)/(200-0) = 0.5$. For $B = 5$:
selectivity $\approx 1/20 = 0.05$. Assuming independence: combined selectivity $= 0.5 \times 0.05 = 0.025$ (2.5% of rows). $\blacksquare$

### 7.8 Applications

- **Big data systems:** Query optimisers in Spark SQL, Hive, and Presto use cost-based optimisation
  adapted for distributed execution, factoring in network transfer costs.
- **NoSQL databases:** Document stores like MongoDB have query optimisers that select between
  collection scans and index usage, with query planners showing execution statistics.
- **Data warehousing:** Columnar databases (Snowflake, Redshift) use optimisers that account for
  column pruning, vectorised execution, and zone maps for min-max pruning.
- **Stream processing:** Optimisers for streaming SQL (Flink, Kafka Streams) extend cost models to
  handle windowed aggregations, state size, and watermark propagation.

### 7.9 Summary Table of Optimisation Techniques

| Technique              | When to apply                       | Benefit                           |
| ---------------------- | ----------------------------------- | --------------------------------- |
| Predicate pushdown     | Filter after scan                   | Reduces rows early                |
| Projection pushdown    | Wide tables with few columns needed | Reduces I/O per row               |
| Join reordering        | Multiple joins with selective filters | Minimises intermediate size       |
| Index-only scan        | Covered query                       | Avoids table access               |
| Materialised view      | Expensive aggregations              | Precomputes results               |
