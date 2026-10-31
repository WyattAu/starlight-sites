cannot, and it guarantees properties; atomicity, durability, consistency -
language; SQL; is *declarative*: you state what you want, not how to get it.
This inversion; from procedural to declarative; is the same transition as
date), and each relation has a **primary key**; an attribute (or combination)
tables and enforce referential integrity; you cannot insert a foreign key
This means: every enrollment must belong to a real student; the database
in each course?"; all answered by querying the same tables, no new spreadsheet
or use an index; based on table sizes, indexes, and statistics. You write
Every modification is atomic; it either happens completely or not at all -
- **Atomicity**; a transaction's operations all succeed or all fail; there is
- **Consistency**; a transaction takes the database from one valid state to
- **Isolation**; concurrent transactions do not see each other's intermediate
- **Durability**; once a transaction commits, its effects survive a crash.
one account, credit another; if the credit fails after the debit succeeds,
same balance, each adds $100, and the second write overwrites the first -
loses power; the commit must survive the crash, which requires writing to
minimise data redundancy and prevent **anomalies**; insertion anomalies (can't
**First normal form (1NF).** Every attribute contains atomic values; no lists
directly; no transitive dependencies through non-key attributes. A table with
depends on `department`, which depends on `student_id`; a transitive chain
creates more tables; the trade-off between data integrity and query
course_id;`; the GROUP BY partitions rows by course and COUNT counts each
retrieve it. A `for` loop states *how* to iterate; the database might find a
- [Relational Theory](/01-relational-theory/); the formal foundation: relations, keys, functional dependencies, and normal forms.
- [SQL Fundamentals](/02-sql-fundamentals/); SELECT, JOIN, GROUP BY, and the full SQL language.
- [Transactions](/04-transactions/); ACID in depth: locking, isolation levels, and MVCC.
- [Indexing and Optimisation](/03-indexing-optimization/); B-trees, query plans, and how the optimiser chooses.
- [NoSQL Databases](/05-nosql/); document stores, key-value stores, and when the relational model is not the right fit.