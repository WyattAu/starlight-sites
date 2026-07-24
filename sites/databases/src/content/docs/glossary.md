---
title: "Database Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of database concepts, including SQL, normalization, indexing, transactions, and modern database technologies."
date: 2026-07-24
tags: [glossary]
---

## Database Fundamentals

**Database**: An organized collection of structured data stored electronically, managed by a Database Management System (DBMS).

**Database Management System (DBMS)**: Software that interacts with users, applications, and the database to capture and analyze data.

**Relational Database**: A database that stores data in tables with rows and columns, related through keys and following a defined schema.

**Non-Relational Database (NoSQL)**: A database that stores data in formats other than tables, such as documents, key-value pairs, graphs, or wide-column stores.

**Schema**: The structure or blueprint of a database, defining tables, fields, relationships, and constraints.

**Table (Relation)**: A collection of related data organized in rows (records) and columns (fields) within a database.

**Row (Record/Tuple)**: A single entry in a table, representing one data item with values for each column.

**Column (Field/Attribute)**: A vertical element in a table representing a specific data property, with a defined data type.

**Primary Key**: A unique identifier for each row in a table, ensuring no duplicate records exist.

**Foreign Key**: A field in one table that references the primary key of another table, establishing relationships between tables.

**Composite Key**: A primary key consisting of two or more columns.

**Candidate Key**: A column or set of columns that could serve as the primary key.

**Surrogate Key**: An artificially generated primary key with no business meaning (e.g., auto-incrementing ID).

**Natural Key**: A primary key derived from real-world data (e.g., Social Security number, ISBN).

## SQL (Structured Query Language)

**SQL**: The standard programming language for managing and manipulating relational databases.

**DDL (Data Definition Language)**: SQL commands for defining and modifying database structure (CREATE, ALTER, DROP).

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE
);

ALTER TABLE users ADD COLUMN age INT;

DROP TABLE users;
```

**DML (Data Manipulation Language)**: SQL commands for inserting, updating, and deleting data (INSERT, UPDATE, DELETE).

```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

UPDATE users SET age = 30 WHERE id = 1;

DELETE FROM users WHERE id = 1;
```

**DQL (Data Query Language)**: SQL commands for querying and retrieving data (SELECT).

```sql
SELECT name, email FROM users WHERE age > 25 ORDER BY name;
```

**DCL (Data Control Language)**: SQL commands for controlling access (GRANT, REVOKE).

```sql
GRANT SELECT ON users TO user1;

REVOKE INSERT ON users FROM user1;
```

**TCL (Transaction Control Language)**: SQL commands for managing transactions (COMMIT, ROLLBACK, SAVEPOINT).

```sql
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

**JOIN**: Combining rows from two or more tables based on a related column.

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

**Inner Join**: Returns only rows with matching values in both tables.

**Left Join (LEFT OUTER JOIN)**: Returns all rows from the left table and matching rows from the right table; NULL for non-matching right rows.

**Right Join (RIGHT OUTER JOIN)**: Returns all rows from the right table and matching rows from the left table; NULL for non-matching left rows.

**Full Join (FULL OUTER JOIN)**: Returns all rows from both tables; NULL for non-matching rows in either table.

**Cross Join**: Returns the Cartesian product of two tables, combining every row from the first table with every row from the second.

**Self Join**: Joining a table with itself to compare rows within the same table.

```sql
SELECT a.name AS employee, b.name AS manager
FROM employees a
INNER JOIN employees b ON a.manager_id = b.id;
```

**Subquery**: A query nested inside another query, used for filtering, comparison, or data retrieval.

```sql
SELECT name FROM users
WHERE id IN (SELECT user_id FROM orders WHERE amount > 100);
```

**Aggregate Functions**: Functions that perform calculations on multiple rows (COUNT, SUM, AVG, MIN, MAX).

```sql
SELECT COUNT(*), AVG(amount), SUM(amount)
FROM orders
GROUP BY user_id;
```

**GROUP BY**: Groups rows sharing common values for aggregate function calculations.

```sql
SELECT department, COUNT(*) as emp_count
FROM employees
GROUP BY department;
```

**HAVING**: Filters groups after GROUP BY, unlike WHERE which filters rows before grouping.

```sql
SELECT department, COUNT(*) as emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;
```

**ORDER BY**: Sorts the result set by one or more columns (ASC for ascending, DESC for descending).

```sql
SELECT * FROM users ORDER BY name ASC, age DESC;
```

**LIMIT/OFFSET**: Restricts the number of rows returned, useful for pagination.

```sql
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20; -- Page 3
```

**UNION**: Combines the results of two or more SELECT statements, removing duplicates.

```sql
SELECT name FROM customers UNION SELECT name FROM vendors;
```

**INSERT ... SELECT**: Inserts rows into a table from the result of a SELECT query.

```sql
INSERT INTO archived_orders SELECT * FROM orders WHERE year < 2023;
```

**UPSERT (INSERT ... ON CONFLICT)**: Inserts a row or updates it if it already exists (PostgreSQL syntax).

```sql
INSERT INTO users (id, name) VALUES (1, 'Alice')
ON CONFLICT (id) DO UPDATE SET name = 'Alice';
```

## Normalization

**Normalization**: The process of organizing database tables to reduce data redundancy and improve data integrity.

**First Normal Form (1NF)**: Each column contains atomic (indivisible) values, and each row is unique.

**Second Normal Form (2NF)**: In 1NF, and all non-key columns depend on the entire primary key (no partial dependencies).

**Third Normal Form (3NF)**: In 2NF, and no non-key column depends on another non-key column (no transitive dependencies).

**Boyce-Codd Normal Form (BCNF)**: A stricter version of 3NF where every determinant is a candidate key.

**Fourth Normal Form (4NF)**: In BCNF, with no multi-valued dependencies.

**Denormalization**: Intentionally introducing redundancy to improve read performance, trading off write performance.

**Data Redundancy**: Storing the same data in multiple places, which normalization aims to minimize.

**Functional Dependency**: A relationship where one attribute uniquely determines another attribute.

**Transitive Dependency**: A functional dependency where A determines B, and B determines C, so A determines C indirectly.

**Partial Dependency**: A functional dependency where a non-key attribute depends on only part of a composite primary key.

## Indexing

**Index**: A data structure that improves the speed of data retrieval operations on a table at the cost of additional storage.

```sql
CREATE INDEX idx_users_email ON users(email);
CREATE UNIQUE INDEX idx_users_email ON users(email);
```

**B-Tree Index**: A balanced tree index structure used by most relational databases for general-purpose indexing.

**Hash Index**: An index using a hash table for O(1) lookups, efficient for equality comparisons but not range queries.

**Composite Index**: An index on two or more columns, useful for queries filtering on multiple columns.

```sql
CREATE INDEX idx_orders_user_date ON orders(user_id, order_date);
```

**Covering Index**: An index containing all columns needed for a query, eliminating table lookups.

**Partial Index**: An index on a subset of rows matching a condition (PostgreSQL).

```sql
CREATE INDEX idx_active_users ON users(email) WHERE active = true;
```

**Index Selectivity**: The proportion of distinct values in an indexed column; higher selectivity means better index performance.

**Full-Table Scan**: Reading every row in a table; occurs when no suitable index exists for a query.

**Index Scan**: Using an index to find rows efficiently, then reading only matching rows from the table.

**Clustered Index**: An index that determines the physical order of data in a table; only one per table.

**Non-Clustered Index**: An index that creates a separate structure pointing to the data rows; multiple per table allowed.

**Bitmap Index**: An index using bitmaps for columns with low cardinality (few distinct values).

## Transactions and Concurrency

**Transaction**: A logical unit of work that groups multiple database operations, executed as a single atomic unit.

**ACID Properties**: Atomicity, Consistency, Isolation, Durability — the four properties guaranteeing reliable transaction processing.

**Atomicity**: Ensuring all operations in a transaction succeed or all fail; no partial completion.

**Consistency**: Ensuring a transaction moves the database from one valid state to another, maintaining all constraints.

**Isolation**: Ensuring concurrent transactions don't interfere with each other, appearing to execute sequentially.

**Durability**: Ensuring committed transactions survive system failures, typically through write-ahead logging.

**Isolation Levels**: Defines the degree to which one transaction must be isolated from modifications by other transactions.

**Read Uncommitted**: Lowest isolation; transactions can read uncommitted changes from other transactions (dirty reads allowed).

**Read Committed**: Only reads committed data; prevents dirty reads but allows non-repeatable reads.

**Repeatable Read**: Ensures data read during a transaction remains unchanged if read again; prevents non-repeatable reads.

**Serializable**: Highest isolation; transactions execute as if serialized; prevents all concurrency anomalies.

**Dirty Read**: Reading data that has been modified by another transaction but not yet committed.

**Non-Repeatable Read**: Reading the same row twice in a transaction yields different values due to another committed update.

**Phantom Read**: A transaction re-executing a query finds new rows inserted by another committed transaction.

**Deadlock**: Two or more transactions waiting for each other to release locks, creating a circular dependency.

**Lock**: A mechanism to control concurrent access to data; shared locks for reading, exclusive locks for writing.

**Pessimistic Locking**: Acquiring locks before accessing data, assuming conflicts will occur.

**Optimistic Locking**: Checking for conflicts only at commit time, assuming conflicts are rare.

## Data Modeling

**Entity-Relationship Diagram (ERD)**: A visual representation of entities, their attributes, and relationships in a database.

**Entity**: A real-world object or concept (e.g., Customer, Order, Product) represented as a table.

**Attribute**: A property of an entity, represented as a column in a table.

**Relationship**: An association between entities (one-to-one, one-to-many, many-to-many).

**One-to-One (1:1)**: Each row in Table A relates to exactly one row in Table B, and vice versa.

**One-to-Many (1:M)**: Each row in Table A relates to multiple rows in Table B, but each row in Table B relates to one row in Table A.

**Many-to-Many (M:M)**: Each row in Table A relates to multiple rows in Table B, and vice versa; requires a junction table.

**Junction Table (Associative Entity)**: A table connecting two tables in a many-to-many relationship, containing foreign keys to both.

**Cardinality**: The numerical relationship between rows of two tables (1:1, 1:M, M:M).

**Participation Constraint**: Whether participation in a relationship is total (mandatory) or partial (optional).

**Surrogate Key vs. Natural Key**: Surrogate keys are artificial IDs; natural keys are real-world identifiers.

**Data Dictionary (Metadata)**: A repository containing definitions and descriptions of database objects.

**Data Type**: The kind of data a column can store (INTEGER, VARCHAR, DATE, BLOB, etc.).

## NoSQL Databases

**Document Database**: Stores data as JSON-like documents, flexible schema (e.g., MongoDB, CouchDB).

```json
{
    "_id": "123",
    "name": "Alice",
    "orders": [
        {"item": "Widget", "qty": 5},
        {"item": "Gadget", "qty": 2}
    ]
}
```

**Key-Value Store**: Stores data as key-value pairs, optimized for fast lookups (e.g., Redis, DynamoDB).

**Wide-Column Store**: Stores data in columns rather than rows, optimized for queries over large datasets (e.g., Cassandra, HBase).

**Graph Database**: Stores data as nodes and edges, optimized for relationships (e.g., Neo4j, Amazon Neptune).

**BASE Properties**: Basically Available, Soft state, Eventually consistent — the opposite of ACID for distributed systems.

**Eventual Consistency**: A consistency model where all nodes will eventually have the same data, but temporary inconsistencies are allowed.

**CAP Theorem**: States a distributed system can provide only two of three guarantees: Consistency, Availability, Partition tolerance.

**Sharding**: Distributing data across multiple database instances by partitioning rows based on a shard key.

**Replication**: Copying data across multiple servers for redundancy and read performance.

**Horizontal Scaling**: Adding more servers to distribute load (scale out), common with NoSQL databases.

**Vertical Scaling**: Adding more resources (CPU, RAM) to a single server (scale up).

## Advanced Concepts

**Stored Procedure**: A precompiled collection of SQL statements stored in the database, callable by name.

```sql
CREATE PROCEDURE get_user_orders(IN user_id INT)
BEGIN
    SELECT * FROM orders WHERE user_id = user_id;
END;
```

**Trigger**: A stored procedure that automatically executes in response to specific events (INSERT, UPDATE, DELETE) on a table.

```sql
CREATE TRIGGER audit_changes
AFTER UPDATE ON users
FOR EACH ROW
INSERT INTO audit_log (user_id, old_name, new_name)
VALUES (OLD.id, OLD.name, NEW.name);
```

**View**: A virtual table defined by a SQL query, not storing data itself but presenting data from underlying tables.

```sql
CREATE VIEW active_users AS
SELECT id, name, email FROM users WHERE active = true;
```

**Materialized View**: A physical copy of a query result stored on disk, refreshed periodically or on demand.

**Partition**: Dividing a large table into smaller, more manageable pieces based on a partition key.

**Cursor**: A database object used to retrieve and process rows one at a time from a result set.

**Prepared Statement**: A SQL template with placeholders, compiled once and executed multiple times with different parameters.

**Connection Pooling**: Reusing database connections from a pool rather than creating new connections for each request.

**Query Optimization**: The process of improving SQL query performance through indexing, query rewriting, and execution plan analysis.

**Execution Plan**: A step-by-step description of how the database will execute a query, used for performance tuning.

**Data Warehouse**: A system for reporting and analysis, storing current and historical data from multiple sources.

**ETL (Extract, Transform, Load)**: The process of extracting data from sources, transforming it, and loading it into a target system.

**OLTP (Online Transaction Processing)**: Systems optimized for transaction-oriented operations with frequent short transactions.

**OLAP (Online Analytical Processing)**: Systems optimized for complex analytical queries over large historical datasets.

**Replication Lag**: The delay between a write to the primary database and its appearance on a replica.

**Backup**: A copy of database data stored separately, used for recovery in case of failure or corruption.

**Point-in-Time Recovery**: Restoring a database to a specific moment in time using transaction logs.

## Related Terms

- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Python Glossary](/python/glossary) for Python database libraries
- See [Java Glossary](/java/glossary) for Java database connectivity
- See [Machine Learning Glossary](/machine-learning/glossary) for data in ML pipelines
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
