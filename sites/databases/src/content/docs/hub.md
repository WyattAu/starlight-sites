---
title: "Complete Database Design Study Guide"
description: "Comprehensive database design study guide covering relational theory, SQL, indexing and optimisation, transactions, NoSQL, and database design patterns. From fundamentals to advanced topics with practical examples."
date: 2026-07-24
tags:
  - databases
  - study-guide
  - sql
  - nosql
  - data-engineering
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://databases.wyattau.com"},
    {"name": "Hub", "url": "https://databases.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Complete Database Design Study Guide",
  "description": "Comprehensive database design study guide covering relational theory, SQL, indexing, transactions, NoSQL, and design patterns.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://databases.wyattau.com"
  },
  "url": "https://databases.wyattau.com/hub",
  "educationalLevel": "University",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Databases are the foundation of every application that persists data. Whether you are building a web application, an analytics pipeline, or an embedded system, understanding how databases work — and how to design them well — is a core engineering skill. Poor database design leads to slow queries, data corruption, and maintenance nightmares. Good database design leads to performance, reliability, and maintainability.

This hub page maps every resource on this site. The learning path takes you from relational theory through SQL mastery, indexing and optimisation, transaction management, NoSQL alternatives, and design patterns. Each section includes practical examples, common pitfalls, and best practices.

## Table of Contents

- [Relational Theory](#relational-theory)
- [SQL Fundamentals](#sql-fundamentals)
- [Indexing and Optimisation](#indexing-and-optimisation)
- [Transactions and Concurrency](#transactions-and-concurrency)
- [NoSQL Databases](#nosql-databases)
- [Database Design](#database-design)
- [Learning Path](#learning-path)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Relational Theory

Relational theory is the mathematical foundation of SQL databases. Understanding it prevents the design mistakes that lead to data anomalies, redundancy, and inconsistency.

### Topic Notes

- [Relational Theory Overview](/01-relational-theory) — the relational model, sets, and relations
- [Relational Theory](/01-relational-theory/relational-theory) — tuples, domains, keys, and foreign keys
- [Normalisation](/01-relational-theory/normalization) — normal forms (1NF through BCNF) and functional dependencies

### Key Concepts

**Normalisation** is the process of organising data to reduce redundancy and dependency. The normal forms form a hierarchy:

- **1NF (First Normal Form)**: each column contains atomic values, and each row is unique
- **2NF**: every non-key column depends on the entire primary key
- **3NF**: no non-key column depends on another non-key column (transitive dependency)
- **BCNF (Boyce-Codd Normal Form)**: every determinant is a candidate key

Understanding normal forms prevents update anomalies — situations where changing one piece of data requires changes in multiple places, or where deleting a row causes unintended data loss.

**Keys** are fundamental to relational design. A primary key uniquely identifies each row. A foreign key references the primary key of another table, creating relationships between tables. A composite key uses multiple columns as the primary key.

**Functional dependencies** describe the relationships between attributes. If A functionally determines B (A → B), then each value of A is associated with exactly one value of B. Functional dependencies are the foundation of normalisation.

---

## SQL Fundamentals

SQL (Structured Query Language) is the language used to interact with relational databases. Mastering SQL is essential for data manipulation, analysis, and application development.

### Topic Notes

- [SQL Fundamentals Overview](/02-sql-fundamentals) — SQL syntax, queries, and operations
- [SQL](/02-sql-fundamentals/sql) — SELECT, INSERT, UPDATE, DELETE, JOIN, and subqueries
- [Advanced SQL](/02-sql-fundamentals/advanced-sql) — window functions, CTEs, pivoting, and recursive queries

### Key Concepts

**JOINs** combine rows from multiple tables based on related columns. Understanding the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN is essential. Most queries use INNER JOIN (matching rows in both tables) or LEFT JOIN (all rows in the left table, matching rows in the right).

**Window functions** perform calculations across a set of rows related to the current row. Unlike aggregate functions, window functions do not collapse rows. They are essential for ranking, running totals, moving averages, and lead/lag analysis.

**Common Table Expressions (CTEs)** use the WITH clause to define temporary named result sets. They improve readability of complex queries and enable recursive queries for hierarchical data.

**Subqueries** are queries nested inside other queries. They can appear in SELECT, FROM, WHERE, and HAVING clauses. Correlated subqueries reference the outer query and execute once per outer row — they are powerful but can be slow.

---

## Indexing and Optimisation

Indexes are the single most important factor in database query performance. A well-designed index can make a query 100x faster. A missing index can make it unusable.

### Topic Notes

- [Indexing and Optimisation Overview](/03-indexing-optimization) — index types, query plans, and performance analysis
- [Indexing](/03-indexing-optimization/indexing) — B-tree indexes, hash indexes, covering indexes, and index design
- [Query Optimisation](/03-indexing-optimization/query-optimization) — EXPLAIN plans, query rewriting, and join order

### Key Concepts

**B-tree indexes** are the default index type in most databases. They maintain sorted data and support range queries, equality queries, and prefix queries efficiently. A B-tree index on a column allows the database to find rows by that column's value without scanning the entire table.

**Covering indexes** include all columns needed by a query in the index itself. When a query can be answered entirely from the index, the database never reads the table rows — this is the fastest possible query execution.

**Index selectivity** measures how many distinct values an index can distinguish. High selectivity (many distinct values) means the index eliminates most rows quickly. Low selectivity (few distinct values, like a boolean column) means the index is less useful.

**EXPLAIN plans** show how the database executes a query. Learn to read EXPLAIN output — it reveals which indexes are used, how joins are performed, and where bottlenecks occur.

---

## Transactions and Concurrency

Transactions ensure that database operations are atomic, consistent, isolated, and durable (ACID). Concurrency control allows multiple users to access the database simultaneously without corruption.

### Topic Notes

- [Transactions Overview](/04-transactions) — ACID properties and transaction management
- [Transactions](/04-transactions/transactions) — BEGIN, COMMIT, ROLLBACK, and savepoints
- [Locking and Deadlocks](/04-transactions/locking-and-deadlocks) — lock types, deadlock detection, and avoidance strategies

### Key Concepts

**ACID properties** guarantee reliable transaction processing:

- **Atomicity**: all operations in a transaction succeed, or none do
- **Consistency**: a transaction brings the database from one valid state to another
- **Isolation**: concurrent transactions do not interfere with each other
- **Durability**: committed data survives system failures

**Isolation levels** trade correctness for performance. Read Uncommitted allows dirty reads but is fastest. Serializable provides full isolation but may reduce concurrency. Most applications use Read Committed or Repeatable Read.

**Deadlocks** occur when two transactions wait for each other's locks. Database systems detect deadlocks and roll back one transaction. Prevent deadlocks by acquiring locks in a consistent order and keeping transactions short.

---

## NoSQL Databases

NoSQL databases provide alternatives to the relational model for specific use cases — high write throughput, flexible schemas, hierarchical data, and distributed systems.

### Topic Notes

- [NoSQL Overview](/05-nosql) — types of NoSQL databases and when to use them
- [NoSQL Databases](/05-nosql/nosql) — document, key-value, column-family, and graph databases
- [PostgreSQL Advanced](/05-nosql/postgresql-advanced) — JSON support, full-text search, and advanced PostgreSQL features
- [Redis](/05-nosql/redis) — in-memory data structures, caching, and pub/sub

### Key Concepts

**Document databases** (MongoDB, CouchDB) store flexible JSON-like documents. They are ideal for content management, user profiles, and any data with variable structure. The trade-off is weaker consistency guarantees and no join support.

**Key-value databases** (Redis, DynamoDB) provide O(1) lookup by key. They are ideal for caching, session storage, and any data that fits a simple key-value access pattern. Redis also provides data structures like lists, sets, and sorted sets.

**When to use NoSQL**: use NoSQL when your data does not fit the relational model, when you need horizontal scalability, or when your access pattern is dominated by simple key-value lookups. Use relational databases when you need ACID transactions, complex queries, or data integrity guarantees.

---

## Database Design

Good database design balances normalisation, performance, and application requirements. The goal is a design that is correct, performant, and maintainable.

### Topic Notes

- [Database Design Overview](/06-database-design) — design principles and methodology
- [Data Modelling](/06-database-design/data-modeling) — conceptual, logical, and physical models
- [Database Design](/06-database-design/database-design) — schema design, naming conventions, and best practices
- [Migrations](/06-database-design/migrations) — schema versioning, rollback strategies, and deployment

### Practice and Review

- [Practice Questions: Database Design](/practice-database-design)
- [Diagnostic Quizzes](/diagnostics)

### Key Concepts

**Conceptual modelling** identifies entities, relationships, and constraints without worrying about implementation. Draw an entity-relationship diagram (ERD) before writing any SQL.

**Logical modelling** translates the conceptual model into a relational schema — tables, columns, primary keys, foreign keys, and constraints. This is where normalisation is applied.

**Physical modelling** optimises the schema for the specific database engine — choosing data types, designing indexes, partitioning tables, and configuring storage. This is where performance considerations enter the design.

**Naming conventions** should be consistent and descriptive. Use snake_case for table and column names. Use singular nouns for table names (user not users). Name foreign keys consistently (table_name_id).

---

## Learning Path

Database knowledge builds in layers. Follow this progression.

### Stage 1: Foundations (Weeks 1–4)

- Study relational theory — understand normalisation and functional dependencies
- Learn SQL basics — SELECT, JOIN, GROUP BY, and subqueries
- Practise writing queries against a sample database

### Stage 2: Intermediate (Weeks 5–8)

- Master window functions and CTEs
- Study indexing — B-tree design, covering indexes, and EXPLAIN plans
- Learn about transactions and isolation levels

### Stage 3: Advanced (Weeks 9–12)

- Study query optimisation and performance tuning
- Explore NoSQL databases — when and why to use them
- Learn database design patterns — data modelling, migrations, and schema design

### Stage 4: Expert (Weeks 13–16)

- Study advanced topics — partitioning, replication, and sharding
- Learn database administration — backup, recovery, and monitoring
- Build a complete database design for a real application

---

## Cross-Site Resources

Wyatt's Notes is a network of interconnected study sites. The database content connects to related material:

- **[Computer Science Study Guide](https://computer-science.wyattau.com/hub)** — algorithms and data structures that underpin database internals
- **[C++ Programming Guide](https://cpp.wyattau.com/hub)** — if you are building high-performance database applications
- **[Python Programming Guide](https://python.wyattau.com/hub)** — if you are using Python with databases (SQLAlchemy, Django ORM)
- **[Networking Guide](https://networking.wyattau.com/hub)** — how databases communicate over networks
- **[Security Guide](https://security.wyattau.com/hub)** — database security, encryption, and access control

---

## Frequently Asked Questions

### How should I start learning databases?

Start with relational theory and SQL. Understand normalisation, keys, and relationships before writing queries. Then learn SELECT, JOIN, and aggregation. Build a small database for a project — nothing teaches database design like building one.

### SQL or NoSQL — which should I learn?

Learn SQL first. It is the standard for data manipulation and is used by virtually every organisation. NoSQL databases serve specific use cases, but SQL is the foundation. Most applications use relational databases for their primary data store.

### How important is normalisation?

Very. Normalised databases are correct by construction — they prevent update anomalies, reduce redundancy, and make the design maintainable. Know when to denormalise for performance, but always start with a normalised design.

### What is the most common database design mistake?

Not using foreign keys. Foreign keys enforce referential integrity at the database level. Without them, your application must maintain integrity in code — which is error-prone and fragile.

### How do I optimise a slow query?

Start with EXPLAIN — identify which indexes are used and how joins are performed. Add indexes on columns used in WHERE, JOIN, and ORDER BY clauses. Rewrite queries to avoid unnecessary subqueries. Consider covering indexes for frequently-run queries.

### Should I learn database administration?

Yes, at least the basics. Understanding backup and recovery, monitoring, and capacity planning is essential for any engineer who works with production databases. You do not need to be a DBA, but you should understand how to keep a database healthy.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
