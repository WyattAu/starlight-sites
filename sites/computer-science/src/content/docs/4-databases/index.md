---

sources:
  - text: Cormen et al - Introduction to Algorithms

date: 2026-07-23T21:57:32+01:00
title: "Database Systems | Computer Science"
description: 'Topics in database systems including the relational model, SQL, normalisation, indexing, transactions, and distributed databases.'
tags:
  - Computing
  - University
---
sources:
  - text: Cormen et al - Introduction to Algorithms

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "4 Databases", "url": "https://computer-science.wyattau.com/4-databases"}, {"name": "Index", "url": "https://computer-science.wyattau.com/4-databases/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Database Systems",
  "description": "'Topics in database systems including the relational model, SQL, normalisation, indexing, transactions, and distributed databases.'",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://computer-science.wyattau.com"
  },
  "url": "https://computer-science.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

## Database Systems

Database systems provide mechanisms for the structured storage, retrieval, and management of data. The relational model, introduced by E.F. Codd, organises data into tables (relations) with well-defined schemas, enabling data integrity and efficient querying through structured query language (SQL). Understanding database design principles is essential for building systems that manage large volumes of data reliably.

Every application with persistent data — social media platforms, e-commerce websites, banking systems, healthcare records, scientific databases — relies on database systems. The principles you learn here apply whether you are building a small personal project or managing data for millions of users.

## Intuition

**A library with a card catalogue:** A database is like a library — the relational model organises books (data) into shelves (tables), the card catalogue (indexes) helps you find books quickly, and the librarian (transactions) ensures no two people check out the same book simultaneously.

**Why it matters:** Every app with persistent data — social media, e-commerce, banking — relies on databases. Understanding normalisation prevents data corruption, indexing makes queries fast, and transactions keep data consistent even under concurrent access.

**The key insight:** Database design is about balancing redundancy against performance — normalise to eliminate anomalies, but denormalise strategically for speed when needed.

## Key Concepts

Normalisation is the process of decomposing relations to eliminate redundancy and update anomalies, progressing through normal forms from 1NF to BCNF and beyond. Indexing accelerates query processing by providing efficient access paths to data, analogous to an index in a textbook. Transaction management ensures that concurrent operations preserve data consistency through the ACID properties: atomicity, consistency, isolation, and durability.

### The Relational Model

The relational model represents data as tuples (rows) in relations (tables). Each relation has a schema that specifies the attributes (columns) and their domains (allowed values). Key properties of relations include:

- Each tuple is unique (enforced by the primary key)
- Attribute values are atomic (no repeating groups, no nested tables)
- The order of tuples is irrelevant (relations are sets)
- The order of attributes is irrelevant (conceptually)

**Keys in the relational model:**
- **Superkey** — A set of attributes that uniquely identifies each tuple
- **Candidate key** — A minimal superkey (no proper subset is also a superkey)
- **Primary key** — The candidate key chosen to identify tuples
- **Foreign key** — An attribute (or set of attributes) that references the primary key of another relation, establishing a link between tables

**Integrity constraints:**
- **Entity integrity** — The primary key of a relation cannot be NULL
- **Referential integrity** — Every foreign key value must either match a primary key value in the referenced relation or be NULL
- **Domain constraints** — Each attribute value must be from the attribute's domain

### SQL: Structured Query Language

SQL is the standard language for interacting with relational databases. It encompasses several sublanguages:

**Data Definition Language (DDL):**
```sql
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    enrollment_date DATE DEFAULT CURRENT_DATE
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT REFERENCES students(student_id),
    course_id INT,
    grade CHAR(2)
);
```

**Data Manipulation Language (DML):**
```sql
-- Insert
INSERT INTO students (student_id, name, email) 
VALUES (1, 'Alice Chen', 'alice@example.com');

-- Query
SELECT s.name, e.grade
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
WHERE e.course_id = 101
ORDER BY e.grade DESC;

-- Update
UPDATE students SET email = 'newemail@example.com' WHERE student_id = 1;

-- Delete
DELETE FROM enrollments WHERE enrollment_id = 42;
```

**Key SQL concepts:**
- **Joins** — Combine rows from two or more tables based on a related column (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN)
- **Subqueries** — Queries nested within other queries
- **Aggregation** — GROUP BY with aggregate functions (COUNT, SUM, AVG, MAX, MIN)
- **Views** — Virtual tables defined by a query
- **Indexes** — Data structures that speed up data retrieval

### Normalisation

Normalisation is the systematic process of organising tables to minimise redundancy and dependency. The goal is to isolate data so that one fact is stored in exactly one place.

**Anomalies that normalisation prevents:**
- **Insertion anomaly** — Cannot insert data about one entity without unrelated data about another
- **Update anomaly** — Changing one piece of data requires updating multiple rows
- **Deletion anomaly** — Deleting one row accidentally deletes other important data

**Normal forms:**

| Normal Form | Requirement | Problem Solved |
|-------------|-------------|----------------|
| 1NF | All attributes are atomic; no repeating groups | Eliminates multi-valued attributes |
| 2NF | In 1NF + every non-prime attribute is fully functionally dependent on the entire primary key | Eliminates partial dependencies |
| 3NF | In 2NF + no non-prime attribute transitively depends on the primary key | Eliminates transitive dependencies |
| BCNF | For every non-trivial FD X → Y, X is a superkey | Stronger version of 3NF |

**Functional dependencies:** A functional dependency X → Y means that for every valid instance, the value of X determines the value of Y. For example, student_id → name means that each student_id maps to exactly one name.

**Example of normalisation:**

Unnormalised table:
| student_id | name | courses |
|------------|------|---------|
| 1 | Alice | CS101, MATH201 |
| 2 | Bob | CS101, PHYS101 |

1NF (atomic values, no repeating groups):
| student_id | name | course |
|------------|------|--------|
| 1 | Alice | CS101 |
| 1 | Alice | MATH201 |
| 2 | Bob | CS101 |
| 2 | Bob | PHYS101 |

2NF (eliminate partial dependencies):
Students(student_id, name)
Enrollments(student_id, course)

3NF (eliminate transitive dependencies):
Students(student_id, name, department_id)
Departments(department_id, department_name)

### Indexing

An index is a data structure that provides fast access to rows in a table based on the values of one or more columns. Without an index, the database must scan every row (full table scan) to find matching rows.

**Types of indexes:**
- **Primary index** — Created on the primary key; entries are sorted by the key
- **Secondary index** — Created on non-key columns; may contain duplicates
- **Composite index** — Created on multiple columns; useful for queries that filter on multiple columns
- **Unique index** — Enforces uniqueness of the indexed column(s)

**B-tree indexes:** The most common index structure. B-trees maintain sorted data and allow searches, insertions, and deletions in O(log n) time. They are balanced, meaning all leaf nodes are at the same depth, ensuring consistent performance.

**When to create an index:**
- Columns used frequently in WHERE clauses
- Columns used in JOIN conditions
- Columns used in ORDER BY or GROUP BY
- Columns with high cardinality (many distinct values)

**When NOT to create an index:**
- Small tables (full table scan is faster)
- Columns with low cardinality (e.g. boolean with 90% true)
- Tables with frequent writes (indexes slow down INSERT, UPDATE, DELETE)

### Transactions and ACID

A transaction is a logical unit of work that consists of one or more SQL operations. Transactions ensure that databases remain consistent even when multiple operations are performed simultaneously.

**ACID properties:**
- **Atomicity** — All operations in a transaction complete successfully, or none of them do. If any operation fails, the entire transaction is rolled back.
- **Consistency** — A transaction transforms the database from one consistent state to another. All integrity constraints are satisfied after the transaction.
- **Isolation** — Concurrent transactions do not interfere with each other. The result of executing transactions concurrently should be the same as executing them sequentially.
- **Durability** — Once a transaction is committed, its effects are permanent even in the event of system failure.

**Example transaction:**
```sql
BEGIN TRANSACTION;

UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;

-- If both updates succeed:
COMMIT;
-- If either fails:
-- ROLLBACK;
```

**Concurrency control:**
- **Locking** — Pessimistic approach. Transactions acquire locks on data before modifying it. Two-phase locking (2PL) ensures serialisability.
- **Multi-version concurrency control (MVCC)** — Each transaction sees a snapshot of the database at a point in time. Readers do not block writers, and writers do not block readers.
- **Timestamp ordering** — Transactions are ordered by timestamps, and operations that violate the order are rejected.

### Query Optimisation

The query optimiser determines the most efficient way to execute a SQL query. Given a SQL statement, there are often multiple possible execution plans, and the optimiser selects the one with the lowest estimated cost.

**Key optimisation techniques:**
- **Index selection** — Choosing which index to use for each table access
- **Join ordering** — Determining the order in which to join tables
- **Join algorithms** — Nested loop join, hash join, merge join
- **Predicate pushdown** — Applying filters as early as possible to reduce the amount of data processed
- **Projection pushdown** — Selecting only needed columns to reduce data transfer

**Cost models:** The optimiser estimates the cost of each operation based on statistics about the data (table sizes, value distributions, index selectivity). Understanding these statistics helps you write more efficient queries.

### NoSQL Overview

NoSQL databases provide alternatives to the relational model for specific use cases:

- **Document stores** (MongoDB, CouchDB) — Store JSON-like documents. Flexible schema, good for hierarchical data.
- **Key-value stores** (Redis, DynamoDB) — Simple key-value pairs. Very fast, good for caching and session storage.
- **Column-family stores** (Cassandra, HBase) — Store data in columns rather than rows. Good for analytical queries on large datasets.
- **Graph databases** (Neo4j, Amazon Neptune) — Store data as nodes and edges. Excellent for relationship-heavy data (social networks, recommendation engines).

**When to use NoSQL:**
- Schema is highly variable or evolves rapidly
- Horizontal scaling (sharding) is required
- Data is naturally hierarchical or graph-structured
- Low-latency access is critical

**When to stick with SQL:**
- Data is well-structured and relationships are important
- ACID transactions are required
- Complex queries with joins are needed
- Data integrity is paramount

### Distributed Databases

Distributed databases spread data across multiple machines, providing scalability, fault tolerance, and geographic proximity to users.

**Key concepts:**
- **Replication** — Storing copies of data on multiple nodes for fault tolerance
- **Sharding** — Partitioning data across multiple nodes for scalability
- **CAP theorem** — A distributed system can provide at most two of: Consistency, Availability, Partition tolerance
- **Consistency models** — Strong consistency (all reads return the most recent write) vs eventual consistency (reads may return stale data temporarily)

## Contents

1. [Introduction to Database Systems](1_introduction-to-database-systems)
2. [Relational Model](2_relational-model)
3. [SQL](3_sql)
4. [Normalisation](4_normalisation)
5. [Indexing](5_indexing)
6. [Transaction Management](6_transaction-management)
7. [Query Optimisation](7_query-optimisation)
8. [NoSQL Overview](8_nosql-overview)
9. [Distributed Databases](9_distributed-databases)
10. [Problem Set](10_problem-set)
11. [Further Reading](11_further-reading)

## Overview

University-level database systems notes covering relational model, SQL, normalisation, and transactions.

## Topics Covered

- **Relational Model**: Tables, schemas, keys, integrity constraints
- **SQL**: Queries, joins, subqueries, aggregation, views
- **Normalisation**: Functional dependencies, normal forms (1NF-BCNF)
- **Transactions**: ACID properties, concurrency control, recovery
- **Indexing**: B-tree indexes, hash indexes, when to index
- **Query Optimisation**: Execution plans, cost models, join ordering
- **NoSQL**: Document stores, key-value stores, graph databases
- **Distributed Databases**: Replication, sharding, CAP theorem

## Prerequisites

- Basic programming experience
- Discrete mathematics (relations, functions)
- Understanding of file systems

## How to Use These Notes

Start with the relational model to understand the foundations, then progress to SQL and normalisation. Each section includes worked examples and practice problems.

A recommended study path is:
1. Relational Model → understand the mathematical foundation
2. SQL → learn to query and manipulate data
3. Normalisation → learn to design good schemas
4. Indexing → learn to optimise query performance
5. Transactions → learn to ensure data consistency
6. Query Optimisation → understand how the DBMS processes your queries
7. NoSQL and Distributed Databases → understand alternatives and extensions

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.

## Additional Resources

Each section includes:

- Detailed explanations of key concepts
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of computer science

## Study Tips

1. **Master the relational model**: Understand tables, keys, and constraints before SQL
2. **Practice SQL**: Write queries regularly to build proficiency
3. **Learn normalisation**: Practice decomposing relations and checking normal forms
4. **Understand transactions**: Know how ACID properties ensure data integrity
5. **Connect to applications**: Relate database concepts to real-world systems

## Cross-References

- **[Systems](../../../../../typescript/src/content/docs/index):** Computer architecture and systems that databases build upon.
- **[Theory of Computation](../../../../../typescript/src/content/docs/index):** Formal languages underlying query languages.

## Common Mistakes

- **Confusing primary keys with foreign keys:** A primary key uniquely identifies each row in a table; a foreign key references a primary key in another table. Mixing them up leads to incorrect joins and referential integrity violations.
- **Normalising too aggressively:** Normalisation reduces redundancy but can require expensive joins for common queries. Over-normalised schemas hurt read performance. Sometimes denormalisation is the right trade-off for read-heavy workloads.
- **Ignoring NULL semantics:** NULL is not a value — it represents unknown or missing data. Comparisons with NULL using `=` or `!=` return NULL (not TRUE or FALSE). Use `IS NULL` and `IS NOT NULL` instead.
- **Forgetting that transactions are not free:** Every transaction incurs overhead (logging, locking, commit). Batching small transactions into larger ones can improve throughput significantly, but at the cost of longer lock holding times.
- **Creating too many indexes:** Each index speeds up reads but slows down writes. A table with 20 indexes may be significantly slower for INSERT and UPDATE operations than a table with 2-3 well-chosen indexes. Analyse your query patterns before creating indexes.
- **Not using EXPLAIN:** Most database systems provide an EXPLAIN command that shows the execution plan for a query. Use it to understand how your queries are being processed and whether indexes are being used.
- **Ignoring data types:** Choosing the wrong data type (e.g. VARCHAR for a date, or INT for a phone number) wastes storage, prevents proper validation, and makes queries harder to write correctly.
