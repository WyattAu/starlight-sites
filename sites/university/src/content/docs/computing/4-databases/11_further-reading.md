---
title: Further Reading
tags:
  - Computing
  - University
description: "- Silberschatz, Korth, Sudarshan: _Database System Concepts_ (7th ed.). - Ramakrishnan, Gehrke: _Database Management Systems_ (3rd ed.). - Elmasri, Navathe:"
---

- Silberschatz, Korth, Sudarshan: _Database System Concepts_ (7th ed.).
- Ramakrishnan, Gehrke: _Database Management Systems_ (3rd ed.).
- Elmasri, Navathe: _Fundamentals of Database Systems_ (7th ed.).
- Kleppmann: _Designing Data-Intensive Applications_ (2017).

## Common Pitfalls

- **Confusing 2NF and 3NF.** 2NF removes partial dependencies; 3NF removes transitive dependencies.
  **Fix:** A relation in 3NF is also in 2NF; check for non-prime attributes depending on other
  non-prime attributes.
- **Wrong isolation level.** Read uncommitted: dirty reads possible. Serializable: no anomalies but
  lowest concurrency. **Fix:** Balance consistency and performance; most applications use Read
  Committed or Repeatable Read.
- **Confusing the CAP theorem trade-offs.** A distributed system can guarantee at most 2 of:
  Consistency, Availability, Partition tolerance. **Fix:** Network partitions are inevitable; choose
  between CP (consistent but unavailable) and AP (available but eventually consistent).
- **Assuming ACID always guarantees correctness.** ACID isolation levels have different anomaly
  protections. Snapshot isolation prevents dirty reads and non-repeatable reads but allows
  write skew.
- **Denormalising without understanding the read/write ratio.** Denormalisation improves read
  performance at the cost of write complexity. **Fix:** Profile the workload first; normalise by
  default, denormalise only when read-heavy.

## Worked Examples

### Example 1: Normalisation

**Problem.** Relation R(A, B, C, D) with FDs: AB → C, C → D. Is R in 3NF?

**Solution.** Key: AB. C depends on AB (partial dependency on non-prime B? No — C depends on the
full key AB). C → D: D depends on C, which is non-prime. This is a transitive dependency, violating
3NF.

Decompose: R1(A, B, C), R2(C, D). Both are in 3NF.

$\blacksquare$

### Example 2: SQL join

**Problem.** Students(ID, Name, DeptID) and Departments(DeptID, DeptName). Write SQL to list all
students with their department names.

**Solution.**
`SELECT s.Name, d.DeptName FROM Students s INNER JOIN Departments d ON s.DeptID = d.DeptID;`

$\blacksquare$

### Example 3: BCNF Decomposition

**Problem.** R(A, B, C) with FDs: AB → C, C → B. Is R in BCNF?

**Solution.** Candidate keys: AB and AC. Check each FD: AB → C: AB is a superkey (OK). C → B: C is
not a superkey (since C alone does not determine A). Thus R is not in BCNF.

Decompose: R1(C, B), R2(A, C). R1 has FD C → B (C is key, OK). R2 has no non-trivial FDs (OK).

$\blacksquare$

### Example 4: Transaction Isolation Anomalies

**Problem.** Two transactions: T1 transfers $100 from A to B, T2 reads balances. At isolation level
Read Committed, can T2 see an inconsistent state?

**Solution.** Yes: T2 could read A after T1 debits it but before T1 credits B. The total appears
reduced by $100. This is a non-repeatable read. At Repeatable Read, T2 would see consistent
snapshot but may still see phantoms (rows appearing/disappearing in range queries). $\blacksquare$

## Summary

- Normalisation: 1NF (atomic), 2NF (no partial dependencies), 3NF (no transitive dependencies),
  BCNF.
- ACID properties: Atomicity, Consistency, Isolation, Durability.
- SQL: DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE).
- CAP theorem: distributed systems trade off consistency, availability, and partition tolerance.
- Indexing: B+ trees for range queries, hash indexes for equality lookups, bitmap indexes for
  low-cardinality columns.
- Query optimisation: cost-based selection of join algorithms (nested-loop, sort-merge, hash),
  predicate pushdown, and query plan caching.

## Cross-References

| Topic       | Site       | Link                                                                                                       |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Databases] | A-Level    | [View](https://alevel-sciences.wyattau.com/docs/alevel/computer-science/databases/01-relational-databases) |
| [Databases] | IB         | [View](https://ib.wyattau.com/docs/ib/computer-science/6-resource-management/1_databases)                  |
| [Databases] | DSE        | [View](https://dse.wyattau.com/docs/dse/ict/3-programming-and-databases/3_data-management)                 |
| [Databases] | University | [View](https://university.wyattau.com/docs/computing/4-databases/1_databases)                              |

## Key Relationships Between Normal Forms

| Normal form | Condition                                | Example violation       |
| ----------- | ---------------------------------------- | ----------------------- |
| 1NF         | Atomic columns only                      | Multi-valued attribute  |
| 2NF         | No partial dependencies on candidate key | Part of composite key   |
| 3NF         | No transitive dependencies               | Non-key → non-key       |
| BCNF        | Every FD has a superkey LHS              | Non-key → part of key   |

## Recommended Reading by Topic

- **SQL & Relational Theory:** Date: _SQL and Relational Theory_ (3rd ed.) — deep treatment of
  relational model fundamentals.
- **Transactions & Concurrency:** Weikum, Vossen: _Transactional Information Systems_ — complete
  coverage of serialisability theory and recovery.
- **Distributed Databases:** Özsu, Valduriez: _Principles of Distributed Database Systems_ —
  standard reference for distributed query processing and transaction management.
- **Performance Tuning:** Tow: _SQL Tuning_ — practical guide to indexing strategies, query plan
  analysis, and schema design for performance.
- **NoSQL:** Sadalage, Fowler: _NoSQL Distilled_ — overview of when to use document, graph, column,
  and key-value stores over relational databases.
