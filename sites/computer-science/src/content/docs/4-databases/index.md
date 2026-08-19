---


date: 2026-07-23T21:57:32+01:00
title: Database Systems
description: 'Topics in database systems including the relational model, SQL, normalisation, indexing, transactions, and distributed databases.'
tags:
  - Computing
  - University
---

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

## Intuition

**A library with a card catalogue:** A database is like a library — the relational model organises books (data) into shelves (tables), the card catalogue (indexes) helps you find books quickly, and the librarian (transactions) ensures no two people check out the same book simultaneously.

**Why it matters:** Every app with persistent data — social media, e-commerce, banking — relies on databases. Understanding normalisation prevents data corruption, indexing makes queries fast, and transactions keep data consistent even under concurrent access.

**The key insight:** Database design is about balancing redundancy against performance — normalise to eliminate anomalies, but denormalise strategically for speed when needed.

## Key Concepts

Normalisation is the process of decomposing relations to eliminate redundancy and update anomalies, progressing through normal forms from 1NF to BCNF and beyond. Indexing accelerates query processing by providing efficient access paths to data, analogous to an index in a textbook. Transaction management ensures that concurrent operations preserve data consistency through the ACID properties: atomicity, consistency, isolation, and durability.

## Contents

1. [Introduction to Database Systems](1_introduction-to-database-systems.md)
2. [Relational Model](2_relational-model.md)
3. [SQL](3_sql.md)
4. [Normalisation](4_normalisation.md)
5. [Indexing](5_indexing.md)
6. [Transaction Management](6_transaction-management.md)
7. [Query Optimisation](7_query-optimisation.md)
8. [NoSQL Overview](8_nosql-overview.md)
9. [Distributed Databases](9_distributed-databases.md)
10. [Problem Set](10_problem-set.md)
11. [Further Reading](11_further-reading.md)

## Overview

University-level database systems notes covering relational model, SQL, normalisation, and transactions.

## Topics Covered

- **Relational Model**: Tables, schemas, keys, integrity constraints
- **SQL**: Queries, joins, subqueries, aggregation, views
- **Normalisation**: Functional dependencies, normal forms (1NF-BCNF)
- **Transactions**: ACID properties, concurrency control, recovery

## Prerequisites

- Basic programming experience
- Discrete mathematics (relations, functions)
- Understanding of file systems

## How to Use These Notes

Start with the relational model to understand the foundations, then progress to SQL and normalisation. Each section includes worked examples and practice problems.

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
