---
date: 2026-10-19T00:00:00+01:00
title: "Before You Begin: What Databases Assume"
tags:
  - Databases
  - Programming
description: "The transition into databases: what a database is and why it exists, the relational model, SQL as a declarative language, ACID guarantees, and normalisation -- every term defined before it is used, with the spreadsheet intuitions named and upgraded."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "databases", "url": "https://databases.wyattau.com"}, {"name": "databases", "url": "https://databases.wyattau.com/databases/before-you-begin"}]
}
</script>

A database is not a spreadsheet. The distinction matters because everything in
this track follows from it: a database enforces constraints the spreadsheet
leaves to discipline, it serves concurrent readers and writers the spreadsheet
cannot, and it guarantees properties; atomicity, durability, consistency -
that a spreadsheet does not even attempt.

The prerequisite is basic programming in any language and school-level set
theory. Nothing else is assumed.

## Intuition

A spreadsheet stores data in cells addressed by row and column. A database
stores data in *tables addressed by meaning*: each row is an entity, each
column is an attribute, and each table represents a kind of thing. The query
language; SQL; is *declarative*: you state what you want, not how to get it.
The database's query optimiser decides how to execute your request, and it
makes that decision based on statistics about your data.

This inversion; from procedural to declarative; is the same transition as
from imperative to functional programming. It changes how you think about the
problem: instead of "loop through the rows, check each one, accumulate the
matches," you write "SELECT * FROM users WHERE age > 25" and trust the database
to find an efficient plan.

## 1. The relational model

**Definition.** A **relation** is a set of **tuples** (rows), each with the
same set of **attributes** (columns). A **table** is the physical
representation of a relation. Each attribute has a **type** (integer, string,
date), and each relation has a **primary key**; an attribute (or combination)
that uniquely identifies each tuple.

**Definition.** A **foreign key** is an attribute in one table that references
the primary key of another table. Foreign keys create relationships between
tables and enforce referential integrity; you cannot insert a foreign key
value that doesn't exist in the referenced table.

**Example.** A university database has two tables:

<div class="table-wrap">

| **students** | | |
| --- | --- | --- |
| student_id | name | major |
| 1 | Alice | Physics |
| 2 | Bob | Chemistry |

</div>

<div class="table-wrap">

| **enrollments** | | |
| --- | --- | --- |
| student_id | course_id | grade |
| 1 | CS101 | A |
| 2 | CS101 | B |
| 1 | MATH201 | A- |

</div>

`enrollments.student_id` is a foreign key referencing `students.student_id`.
This means: every enrollment must belong to a real student; the database
enforces this, and you cannot accidentally create an enrollment for a student
who doesn't exist.

**The power of the model.** The relational model's strength is that the same
data can answer unlimited questions without restructuring. "Which students
take CS101?" "Which courses does Alice take?" "How many students are enrolled
in each course?"; all answered by querying the same tables, no new spreadsheet
needed for each question.

## 2. SQL: the declarative language

**Definition.** **SQL** (Structured Query Language) is the standard language
for relational databases. It is **declarative**: you specify *what* data you
want, not *how* to retrieve it.

```sql
-- Find all students taking CS101 with their names
SELECT students.name, enrollments.grade
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
WHERE enrollments.course_id = 'CS101';
```

The `JOIN` combines rows from two tables where the foreign key matches the
primary key. The database's query optimiser decides whether to scan `students`
and look up in `enrollments`, or scan `enrollments` and look up in `students`,
or use an index; based on table sizes, indexes, and statistics. You write
*what* you want; the database decides *how*.

**The INSERT/UPDATE/DELETE operations.**

```sql
INSERT INTO students (student_id, name, major) VALUES (3, 'Carol', 'Biology');

UPDATE students SET major = 'Mathematics' WHERE student_id = 1;

DELETE FROM enrollments WHERE student_id = 2 AND course_id = 'CS101';
```

Every modification is atomic; it either happens completely or not at all -
and it is logged for durability. If the database crashes mid-write, the log
replays the committed operations and discards the uncommitted ones.

## 3. ACID guarantees

**Definition.** The four properties that database transactions guarantee:

- **Atomicity**; a transaction's operations all succeed or all fail; there is
  no partial state.
- **Consistency**; a transaction takes the database from one valid state to
  another; constraints (foreign keys, unique constraints, check constraints)
  are never violated.
- **Isolation**; concurrent transactions do not see each other's intermediate
  states; each transaction behaves as if it runs alone.
- **Durability**; once a transaction commits, its effects survive a crash.

**Why each property exists.** Atomicity prevents the bank-transfer bug: debit
one account, credit another; if the credit fails after the debit succeeds,
money disappears. Atomicity wraps both in a single transaction: both succeed
or neither does.

Isolation prevents the lost-update bug: two concurrent transactions read the
same balance, each adds $100, and the second write overwrites the first -
$200 vanishes. Isolation serialises the transactions or uses multi-version
concurrency control (MVCC) to detect the conflict.

Durability prevents the crash bug: the database commits a transaction, then
loses power; the commit must survive the crash, which requires writing to
disk before acknowledging the commit.

Each property exists because a real system failed without it, and each is
implemented by a real mechanism (write-ahead logging, two-phase locking, MVCC)
that the advanced pages cover.

## 4. Normalisation

**Definition.** **Normalisation** is the process of structuring tables to
minimise data redundancy and prevent **anomalies**; insertion anomalies (can't
add a course without a student), update anomalies (change a professor's name in
17 places or the data becomes inconsistent), and deletion anomalies (delete the
last student in a course and the course information disappears).

**First normal form (1NF).** Every attribute contains atomic values; no lists
inside a cell. A table with a "phone_numbers" column containing comma-separated
violates 1NF.

**Second normal form (2NF).** Every non-key attribute depends on the *entire*
primary key, not part of it. A table with `student_id, course_id, course_name`
violates 2NF: `course_name` depends only on `course_id`, not on the full
composite key.

**Third normal form (3NF).** Every non-key attribute depends on the key,
directly; no transitive dependencies through non-key attributes. A table with
`student_id, department, department_head` violates 3NF: `department_head`
depends on `department`, which depends on `student_id`; a transitive chain
that creates update anomalies when a department has a new head.

Each normal form eliminates a class of anomalies, and each decomposition
creates more tables; the trade-off between data integrity and query
complexity (more tables mean more joins). Third normal form is the standard
target for most applications.

## 5. Self-test

1. What is the difference between a primary key and a foreign key? (§1)
2. Write a SQL query that counts how many students are enrolled in each
   course. (§2)
3. Name the four ACID properties and give a one-sentence reason for each.
   (§3)
4. A table has columns `student_id, course_name, professor_name`. The same
   course can have many students. What normal form does this violate, and what
   is the fix? (§4)
5. Why is `SELECT` declarative but `for` loops procedural? (§2)

**Answers.**
(1) The primary key uniquely identifies rows within its table; a foreign key
references a primary key in another table, creating a relationship and
enforcing referential integrity.
(2) `SELECT course_id, COUNT(*) AS enrollment_count FROM enrollments GROUP BY
course_id;`; the GROUP BY partitions rows by course and COUNT counts each
partition.
(3) Atomicity: partial transactions corrupt data (a debit without a credit).
Consistency: constraint violations make the data untrustworthy. Isolation:
concurrent transactions can overwrite each other (lost updates). Durability:
a committed transaction must survive a crash, or the data is lost.
(4) Second normal form: `course_name` and `professor_name` depend only on
`course_id`, not on the full composite key `(student_id, course_id)`. Fix:
decompose into an enrollments table (student_id, course_id) and a courses
table (course_id, course_name, professor_name).
(5) `SELECT` states *what* data you want; the query optimiser decides *how* to
retrieve it. A `for` loop states *how* to iterate; the database might find a
better algorithm (index scan vs table scan) that the loop never considered.

## Where to go next

- [Relational Theory](/01-relational-theory/); the formal foundation: relations, keys, functional dependencies, and normal forms.
- [SQL Fundamentals](/02-sql-fundamentals/); SELECT, JOIN, GROUP BY, and the full SQL language.
- [Transactions](/04-transactions/); ACID in depth: locking, isolation levels, and MVCC.
- [Indexing and Optimisation](/03-indexing-optimization/); B-trees, query plans, and how the optimiser chooses.
- [NoSQL Databases](/05-nosql/); document stores, key-value stores, and when the relational model is not the right fit.
