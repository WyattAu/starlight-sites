---
title: "Diagnostic Test: Databases"
description: "Self-assessment quiz on database fundamentals"
sidebar_position: 60
tableOfContents: false
---

# Diagnostic Test: Databases

10 multiple-choice questions covering database fundamentals. Select the best answer for each question, then check your score using the answer key below.

---

**Question 1.** What is the primary purpose of normalization in relational database design?

(A) To improve query execution speed by denormalizing tables
(B) To reduce data redundancy and prevent update anomalies
(C) To increase the number of tables in the schema
(D) To ensure all tables use foreign keys

---

**Question 2.** Which normal form eliminates partial dependencies of non-prime attributes on candidate keys?

(A) First Normal Form (1NF)
(B) Second Normal Form (2NF)
(C) Third Normal Form (3NF)
(D) Boyce-Codd Normal Form (BCNF)

---

**Question 3.** Given a relation R(A, B, C) with functional dependencies {A -> B, B -> C}, which of the following is true?

(A) A is a candidate key and the relation is in BCNF
(B) The relation contains a transitive dependency and violates 3NF
(C) The relation is in 1NF but not in 2NF
(D) All attributes are prime attributes

---

**Question 4.** In SQL, which clause is used to filter groups created by GROUP BY?

(A) WHERE
(B) HAVING
(C) FILTER
(D) GROUP WHERE

---

**Question 5.** What does a LEFT JOIN return when there is no matching row in the right table?

(A) No rows from the left table
(B) The matching rows only
(C) All rows from the left table with NULL values for right table columns
(D) An error

---

**Question 6.** Which index structure is most efficient for range queries such as BETWEEN?

(A) Hash index
(B) Bitmap index
(C) B+ tree index
(D) Linear index

---

**Question 7.** Under which transaction isolation level are dirty reads possible?

(A) SERIALIZABLE
(B) REPEATABLE READ
(C) READ COMMITTED
(D) READ UNCOMMITTED

---

**Question 8.** The ACID property ensuring that a committed transaction's effects persist even after a system failure is:

(A) Atomicity
(B) Consistency
(C) Isolation
(D) Durability

---

**Question 9.** In an ER diagram, a many-to-many relationship between two entities is resolved by:

(A) Adding a foreign key in one of the entity tables
(B) Creating an associative entity (junction table)
(C) Merging the two entities into a single table
(D) Using a composite primary key in one entity

---

**Question 10.** Which of the following is a valid heuristic used by relational query optimizers?

(A) Execute joins in the order they appear in the SQL query
(B) Push selection operations close to the base relations
(C) Avoid using indexes on large tables
(D) Always perform Cartesian products before joins

---

## Answer Key

| Question | Correct Answer |
|----------|---------------|
| 1        | B             |
| 2        | B             |
| 3        | B             |
| 4        | B             |
| 5        | C             |
| 6        | C             |
| 7        | D             |
| 8        | D             |
| 9        | B             |
| 10       | B             |

**Scoring:** Count your correct answers out of 10. A score of 8 or above indicates strong mastery of database fundamentals. Review the explanations in the practice problems for any questions you answered incorrectly.

## Common Mistakes

**Confusing INNER JOIN with LEFT JOIN:** INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table, with NULLs for non-matching right rows. Using the wrong join type produces incomplete or incorrect result sets.

**Assuming normalisation is always desirable:** While 3NF/BCNF reduce redundancy,过度 normalisation can hurt read performance due to excessive joins. In data warehousing and analytics, denormalisation is often preferred for query speed.

**Ignoring transaction isolation levels:** The default isolation level may not suit your use case. READ COMMITTED can cause non-repeatable reads; SERIALIZABLE can cause deadlocks. Understand what anomalies each level prevents before choosing.
