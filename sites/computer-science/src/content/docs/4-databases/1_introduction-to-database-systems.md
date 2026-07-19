---
title: Introduction to Database Systems
tags:
  - Computing
  - University
description: 'A is an organised collection of structured data, managed by a . A DBMS provides: Comprehensive educational content coverage with definitions and practice proble'
---

### 1.1 What is a Database

A **database** is an organised collection of structured data, managed by a **database management
System (DBMS)**. A DBMS provides:

- Data definition (schema creation and modification).
- Data manipulation (query, insert, update, delete).
- Concurrency control (multiple users accessing data simultaneously).
- Recovery (restoring data after failures).
- Security and access control.

### 1.2 Database Architecture

**Three-schema architecture (ANSI-SPARC):**

The ANSI-SPARC (American National Standards Institute, Standards Planning and Requirements
Committee) Architecture defines three levels of abstraction:

1. **External schema (view level):** How different users/applications see the data. Each user group
   may have a different view. A view may hide or rename columns, join tables, or aggregate data.
2. **Conceptual schema (logical level):** The logical structure of the entire database (tables,
   relationships, constraints). Describes entities, attributes, relationships, integrity
   constraints, and security information. This level is database-wide and is designed by the DBA.
3. **Internal schema (physical level):** How data is stored on disk (indexes, file organisation,
   compression, encryption). Includes data structures, access paths, and storage allocation.

The DBMS maps between levels via the **external/conceptual mapping** (translates external views to
The conceptual schema) and the **conceptual/internal mapping** (translates the conceptual schema to
Internal storage).

**Data independence:**

- **Logical data independence:** The conceptual schema can change without affecting external views.
  Example: adding a new column to a table does not require modifying existing views that do not
  reference it.
- **Physical data independence:** The internal schema can change without affecting the conceptual
  schema. Example: changing from a B+ tree index to a hash index does not require modifying queries
  or table definitions.

### 1.3 Data Models

- **Relational model:** Data organised into tables (relations) with rows (tuples) and columns
  (attributes). Based on relational algebra and calculus.
- **Entity-Relationship (ER) model:** Conceptual design tool using entities, relationships, and
  attributes.
- **Object-relational model:** Extends the relational model with object-oriented features
  (inheritance, complex types, methods). Example: PostgreSQL supports table inheritance and array
  types.
- **NoSQL models:** Document, key-value, graph, column-family (covered in Section 8).

### 1.4 Comparison of Data Models

| Feature        | Relational                       | Object-Relational          | Document                 | Key-Value         | Graph                            | Column-Family                |
| -------------- | -------------------------------- | -------------------------- | ------------------------ | ----------------- | -------------------------------- | ---------------------------- |
| Data structure | Tables                           | Tables + objects           | JSON/BSON                | Key-value pairs   | Nodes + edges                    | Column families              |
| Schema         | Fixed                            | Fixed + extensible         | Flexible                 | Schemaless        | Flexible                         | Flexible per row             |
| Query language | SQL                              | SQL + extensions           | Varies                   | Get/Set/Scan      | Cypher/Gremlin                   | CQL/SQL-like                 |
| ACID support   | Full                             | Full                       | Limited                  | Limited           | Per-node                         | Tunable                      |
| Scaling        | Vertical                         | Vertical                   | Horizontal               | Horizontal        | Horizontal                       | Horizontal                   |
| Best for       | Structured data, complex queries | Complex types, inheritance | Content management, APIs | Caching, sessions | Social networks, recommendations | Time series, logs, analytics |

**Choosing a model.** Relational databases remain the default for structured data with complex
Queries and strong consistency requirements. NoSQL databases excel when horizontal scalability or
Flexible schemas are paramount. The choice depends on the workload, not on a blanket preference.

### 1.5 Key Relationships

| Concept          | Relationship                                                                  | Significance                                                  |
| ---------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Schema levels    | External $\to$ Conceptual $\to$ Internal (ANSI-SPARC)                         | Data independence at logical and physical levels              |
| Data models      | ER $\to$ Relational $\to$ Object-Relational $\to$ NoSQL                       | Trade-off: structure vs. flexibility vs. scalability           |
| ACID vs. BASE    | Atomicity, Consistency, Isolation, Durability vs. Basically Available, etc.   | Consistency guarantees vs. availability in distributed systems |
| Indexing         | B+ tree, hash, bitmap $\to$ query performance                                 | Faster reads at cost of write overhead and storage            |

### 1.6 Common Pitfalls

- **Confusing logical and physical data independence.** Logical independence means the conceptual schema can change (e.g., adding a table) without affecting external views. Physical independence means storage changes (e.g., new index) do not affect the conceptual schema. **Fix:** Remember that logical independence involves schema structure changes; physical independence involves storage/performance changes.
- **Assuming NoSQL means no schema at all.** Document databases impose implicit schemas through application code. **Fix:** Document stores are schemaless at the database level but still require careful application-enforced validation.
- **Mistaking views for snapshots.** A view is a stored query that reflects current data, not a copy. **Fix:** Queries on views execute each time unless the view is materialised.
- **Ignoring concurrency control in read-heavy workloads.** Even read-only transactions may need isolation levels to avoid dirty reads. **Fix:** Use snapshot isolation or MVCC for consistent reads without blocking writes.

### 1.7 Applications

- **E-commerce platforms:** Relational databases (PostgreSQL, MySQL) handle orders, inventory, and customer data with ACID guarantees for transactions.
- **Content management systems:** Document stores (MongoDB) store heterogeneous content with flexible schemas, enabling rapid iteration on data models.
- **Real-time analytics:** Column-family stores (Cassandra, Bigtable) excel at time-series data and high write throughput for dashboards.
- **Session caching:** Key-value stores (Redis) provide sub-millisecond access for session state in web applications.
- **Social networks:** Graph databases (Neo4j) efficiently model friendships, recommendations, and influence propagation.

### 1.8 Worked Example: Designing a Library Database

**Problem.** Design a relational schema for a library that tracks books, members, and loans. Identify the conceptual schema and one possible external view.

**Solution.** The conceptual schema includes three tables:

- **Books(book_id, isbn, title, author, year, copies)** — each book copy shares the same ISBN.
- **Members(member_id, name, email, join_date)** — library members.
- **Loans(loan_id, book_id, member_id, loan_date, due_date, return_date)** — each loan tracks one copy.

An external view for members might hide internal identifiers and join across tables:

```sql
CREATE VIEW MemberLoans AS
SELECT m.name, b.title, l.due_date
FROM Members m
JOIN Loans l ON m.member_id = l.member_id
JOIN Books b ON l.book_id = b.book_id
WHERE l.return_date IS NULL;
```

This design achieves logical data independence: adding a `publisher` column to Books does not break the MemberLoans view.

$\blacksquare$

### 1.9 Summary Table

| Architecture layer | Purpose                                       | Example components                 |
| ------------------ | --------------------------------------------- | ---------------------------------- |
| External           | User-specific views of the data               | Views, application-specific schemas |
| Conceptual         | Logical structure of the entire database      | ER diagrams, table definitions      |
| Internal           | Physical storage and access methods            | Indexes, file organisations, hashing |

## Intuition

A database is a organised collection of data designed for efficient retrieval. Think of it as a library: the catalogue (schema) tells you where everything is, the shelves (tables) hold the books (rows), and the index cards (indexes) help you find things quickly. The three-schema architecture separates user views from the logical structure and physical storage, so you can change how data is stored without breaking applications. SQL is the query language that lets you ask questions of the data without knowing how it is stored.

## Cross-References

- [Relational Model](/computer-science/4-databases/2_relational-model)
- [SQL](/computer-science/4-databases/3_sql)
- [Normalisation](/computer-science/4-databases/4_normalisation)

