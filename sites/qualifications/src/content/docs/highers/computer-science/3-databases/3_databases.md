---
title: Database Design and Development
description: ""2026-04-14'     |
| BOOLEAN       | True/False             | TRUE             |
| TEXT          | Long text              | 'Description...' |

---

## SQL (Structured Query Language)

### Data Definition Language (DDL)

**Creating tables:**

```sql
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DateOfBirth DATE,
    House VARCHAR(20)
);

CREATE TABLE Course (
    CourseCode VARCHAR(10) PRIMARY KEY,
    CourseName VARCHAR(100) NOT NULL,
    Teacher VARCHAR(50),
    Credits INT
);

CREATE TABLE Enrolment (
    StudentID INT,
    CourseCode VARCHAR(10),
    Grade CHAR(2),
    PRIMARY KEY (StudentID, CourseCode),
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
    FOREIGN KEY (CourseCode) REFERENCES Course(CourseCode)
);
```

**Modifying tables:**

```sql
ALTER TABLE Student ADD COLUMN Email VARCHAR(100);

ALTER TABLE Student DROP COLUMN House;
```

### Data Manipulation Language (DML)

**INSERT:**

```sql
INSERT INTO Student (StudentID, FirstName, LastName, DateOfBirth, House)
VALUES (1, 'Alice', 'MacDonald', '2005-03-15', 'Gryffindor');

INSERT INTO Student (StudentID, FirstName, LastName, DateOfBirth)
VALUES (2, 'Bob', 'Campbell', '2004-11-22');
```

**UPDATE:**

```sql
UPDATE Student
SET House = 'Slytherin'
WHERE StudentID = 2;
```

**DELETE:**

```sql
DELETE FROM Enrolment
WHERE Grade IS NULL;
```

### Queries (SELECT)

**Basic SELECT:**

```sql
SELECT FirstName, LastName, House
FROM Student
WHERE House = 'Gryffindor';
```

**Wildcards and pattern matching:**

```sql
SELECT * FROM Student
WHERE LastName LIKE 'Mc%';
```

**ORDER BY:**

```sql
SELECT FirstName, LastName, DateOfBirth
FROM Student
ORDER BY DateOfBirth DESC;
```

**Aggregate functions:**

```sql
SELECT COUNT(*) AS TotalStudents
FROM Student;

SELECT House, COUNT(*) AS StudentCount
FROM Student
GROUP BY House
HAVING COUNT(*) > 5;
```

**JOIN:**

```sql
SELECT Student.FirstName, Student.LastName, Course.CourseName, Enrolment.Grade
FROM Student
INNER JOIN Enrolment ON Student.StudentID = Enrolment.StudentID
INNER JOIN Course ON Enrolment.CourseCode = Course.CourseCode
WHERE Enrolment.Grade IS NOT NULL
ORDER BY Student.LastName;
```

**LEFT JOIN:** Returns all records from the left table and matching records from the right table.

```sql
SELECT Student.FirstName, Student.LastName, Course.CourseName
FROM Student
LEFT JOIN Enrolment ON Student.StudentID = Enrolment.StudentID
LEFT JOIN Course ON Enrolment.CourseCode = Course.CourseCode
ORDER BY Student.LastName;
```

**Subqueries:**

```sql
SELECT FirstName, LastName
FROM Student
WHERE StudentID IN (
    SELECT StudentID FROM Enrolment
    WHERE CourseCode = 'MATH101'
);
```

**Worked Example.** Find all students who are enrolled in more than 3 courses.

```sql
SELECT FirstName, LastName
FROM Student
WHERE StudentID IN (
    SELECT StudentID FROM Enrolment
    GROUP BY StudentID
    HAVING COUNT(*) > 3
);
```

### Data Validation

**NOT NULL:** Column cannot be empty.

**UNIQUE:** All values in the column must be different.

**CHECK:** Values must satisfy a condition.

```sql
CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) CHECK (Price > 0),
    StockQuantity INT CHECK (StockQuantity >= 0)
);
```

---

## Advanced Higher Database Concepts

### Transaction Management (ACID)

**Atomicity:** A transaction is all-or-nothing. If any part fails, the entire transaction is rolled
Back.

**Consistency:** The database moves from one valid state to another.

**Isolation:** Concurrent transactions do not interfere with each other.

**Durability:** Once committed, changes are permanent even if the system crashes.

```sql
BEGIN TRANSACTION;

UPDATE Account SET Balance = Balance - 100 WHERE AccountID = 1;
UPDATE Account SET Balance = Balance + 100 WHERE AccountID = 2;

COMMIT;
```

If any statement fails: `ROLLBACK;`

**Worked Example.** Explain why ACID properties are important for a bank transfer.

Atomicity ensures either both the debit and credit happen, or neither does. Consistency ensures
Balances remain valid (no negative balances if not allowed). Isolation prevents two simultaneous
Transfers from interfering. Durability ensures the transfer is permanent once committed.

### Indexing

An index is a data structure that improves the speed of data retrieval.

```sql
CREATE INDEX idx_student_name ON Student(LastName, FirstName);
```

**Advantages:** Faster SELECT queries.

**Disadvantages:** Slower INSERT, UPDATE, DELETE; uses additional storage.

**When to create an index:** On columns frequently used in WHERE clauses, JOIN conditions, and ORDER
BY clauses. Do not index columns that are rarely queried or frequently updated.

### Views

A view is a virtual table based on a SELECT query.

```sql
CREATE VIEW TopStudents AS
SELECT Student.FirstName, Student.LastName, AVG(Enrolment.Grade) AS AverageGrade
FROM Student
JOIN Enrolment ON Student.StudentID = Enrolment.StudentID
GROUP BY Student.StudentID, Student.FirstName, Student.LastName
HAVING AVG(Enrolment.Grade) >= 70;
```

**Benefits of views:** Simplify complex queries, restrict data access (security), present data in a
Different format.

---

## Advanced SQL Techniques

### Window Functions (Higher)

Window functions perform calculations across a set of rows related to the current row.

```sql
SELECT FirstName, LastName, Grade,
       RANK() OVER (ORDER BY Grade DESC) AS Rank
FROM Students;
```

**Common window functions:**

| Function   | Purpose                             |
| ---------- | ----------------------------------- |
| ROW_NUMBER | Sequential number (no ties)         |
| RANK       | Rank with gaps for ties             |
| DENSE_RANK | Rank without gaps for ties          |
| LAG / LEAD | Access value from previous/next row |
| SUM / AVG  | Running total / running average     |

### Common Table Expressions (CTEs)

A CTE is a named temporary result set that can be referenced within a SELECT, INSERT, UPDATE, or
DELETE.

```sql
WITH HighScorers AS (
    SELECT StudentID, AVG(Mark) AS AverageMark
    FROM Results
    GROUP BY StudentID
    HAVING AVG(Mark) >= 75
)
SELECT s.FirstName, s.LastName, hs.AverageMark
FROM Students s
JOIN HighScorers hs ON s.StudentID = hs.StudentID
ORDER BY hs.AverageMark DESC;
```

### Stored Procedures

A stored procedure is a reusable set of SQL statements stored in the database.

```sql
CREATE PROCEDURE EnrolStudent(
    IN pStudentID INT,
    IN pCourseCode VARCHAR(10)
)
BEGIN
    INSERT INTO Enrolment (StudentID, CourseCode)
    VALUES (pStudentID, pCourseCode);
END;
```

**Benefits:** Improved performance (pre-compiled), reduced network traffic, code reuse, security
(controls data access).

### SQL Injection Prevention in Detail

**Vulnerable code:**

```python
query = f"SELECT * FROM Users WHERE username = '{username}' AND password = '{password}'"
```

**Attack:** Enter `admin' OR '1'='1` as username. The query becomes:

```sql
SELECT * FROM Users WHERE username = 'admin' OR '1'='1' AND password = ''
```

This returns all users, bypassing authentication.

**Prevention methods:**

1. **Parameterised queries** (always use these).
2. **Input validation** (whitelist allowed characters).
3. **Stored procedures** (with parameters).
4. **Least privilege** (application database account has minimal permissions).

### Database Normalisation Practice

**Worked Example.** Normalise the following table to 3NF.

| PlayerID | Name     | TeamName | TeamCity | Sport    |
| -------- | -------- | -------- | -------- | -------- |
| 1        | J. Smith | Rangers  | Glasgow  | Football |
| 2        | A. Jones | Celtic   | Glasgow  | Football |
| 3        | M. Brown | Rangers  | Glasgow  | Football |

**1NF:** Already in 1NF (single values per cell).

**2NF:** No composite key, so already in 2NF.

**3NF:** TeamCity depends on TeamName, not PlayerID (transitive dependency).

**Result:**

- Player (PlayerID, Name, TeamName)
- Team (TeamName, TeamCity, Sport)

### Database Indexing in Detail

An index is a B-tree (or hash) data structure that speeds up data retrieval at the cost of slower
Writes and additional storage.

**When to create an index:**

- Columns frequently used in WHERE clauses.
- Columns used in JOIN conditions.
- Columns used in ORDER BY clauses.

**When NOT to create an index:**

- Small tables (full table scan is fast enough).
- Columns that are frequently updated (index must be rebuilt).
- Columns with low selectivity (e.g., boolean with mostly the same value).

## Practice Questions

19. Write SQL using a CTE to find the top 5 students by average grade across all their courses.

20. Explain what a stored procedure is and give two advantages of using them.

21. A table has the following functional dependencies: A -> B, B -> C, C -> D. Is this table in 3NF?
    If not, normalise it.

22. Write SQL to create a stored procedure that transfers a student from one course to another.

23. Explain how a B-tree index works. Why is it more efficient than a sequential scan for large
    tables?

24. Write SQL that uses a window function to rank students by grade within each subject.

25. Explain three methods of preventing SQL injection. For each, explain how it works.

26. A company database has tables for Departments, Employees, and Projects. Design the schema with
    appropriate relationships and write the CREATE TABLE statements.

27. Explain the difference between ROW_NUMBER, RANK, and DENSE_RANK with an example showing how they
    differ when there are ties.

28. Write SQL to find all students who scored above the average in every course they are enrolled
    in.

29. Explain the concept of a database deadlock. How can deadlocks be prevented?

30. Compare the performance of an inner join vs a subquery for finding matching records. When would
    each be more appropriate?

## Database Security

### Access Control

SQL provides GRANT and REVOKE statements for managing permissions.

```sql
GRANT SELECT, INSERT ON Students TO 'librarian'@'localhost';
GRANT ALL PRIVILEGES ON Students TO 'admin'@'localhost';
REVOKE DELETE ON Students FROM 'librarian'@'localhost';
```

**Principle of least privilege:** Users should only have the minimum permissions needed to do Their
job. A librarian who only needs to search for books should not have DELETE permissions.

### Backup Strategies

| Strategy            | Description                                         | Recovery Point Objective |
| ------------------- | --------------------------------------------------- | ------------------------ |
| Full backup         | Complete copy of the entire database                | Last backup              |
| Differential backup | All changes since the last full backup              | Last full backup         |
| Incremental backup  | All changes since the last backup (any type)        | Last backup              |
| Transaction log     | Records all transactions for point-in-time recovery | Any point in time        |

**Worked Example.** A database is backed up fully on Sunday. Differential backups run Monday to
Saturday. The database crashes on Thursday. What backups are needed to restore?

Restore the full backup from Sunday, then the differential backup from Wednesday (the most recent
Differential before the crash).

### Database Transactions in Practice

**Isolation levels:**

| Level            | Dirty Read | Non-repeatable Read | Phantom Read |
| ---------------- | ---------- | ------------------- | ------------ |
| Read Uncommitted | Yes        | Yes                 | Yes          |
| Read Committed   | No         | Yes                 | Yes          |
| Repeatable Read  | No         | No                  | Yes          |
| Serializable     | No         | No                  | No           |

**Deadlocks:** Occur when two transactions each hold a lock that the other needs.

Example: Transaction A locks row 1 and needs row 2. Transaction B locks row 2 and needs row 1.
Neither can proceed.

**Prevention:** Always acquire locks in the same order, use timeouts, or use deadlock detection.

## Data Warehousing (Higher)

A **data warehouse** is a large, centralised database used for reporting and analysis. It integrates
Data from multiple sources.

**Data warehouse vs operational database:**

| Feature         | Operational Database    | Data Warehouse             |
| --------------- | ----------------------- | -------------------------- |
| Purpose         | Day-to-day transactions | Reporting and analysis     |
| Data volume     | Moderate                | Very large                 |
| Data structure  | Normalised (3NF)        | Denormalised (star schema) |
| Query pattern   | Many small reads/writes | Few large, complex reads   |
| Historical data | Current state           | Years of historical data   |

**Star schema:** A central fact table surrounded by dimension tables.

Example: Sales fact table surrounded by Date, Product, Store, and Customer dimension tables.

## Additional Practice Questions

31. Explain the difference between a full backup, a differential backup, and an incremental backup.
    When would you use each?

32. Write SQL GRANT and REVOKE statements for the following scenario: a sales clerk can only INSERT
    and SELECT from the Orders table, while the manager has full privileges.

33. Explain what a deadlock is and describe two strategies for preventing deadlocks.

34. Explain the difference between the four transaction isolation levels. Which is the safest and
    which is the most performant?

35. Describe the star schema used in data warehousing. What is a fact table and what is a dimension
    table?

36. Write SQL to create a trigger that logs all INSERT operations on the Students table to an
    AuditLog table.

37. Explain the concept of database replication. Why is it used and what are the challenges?

38. A company needs to store 5 years of transaction data for analysis. Explain why a data warehouse
    is more suitable than an operational database for this purpose.

## Worked Examples

See the examples integrated throughout the sections above.

## Common Pitfalls

1. **Forgetting primary keys:** Every table must have a primary key to uniquely identify each
   record.

2. **Data redundancy:** Not normalising leads to update anomalies, insertion anomalies, and deletion
   anomalies.

3. **NULL in aggregates:** COUNT(\*) counts all rows including NULL; COUNT(column) counts non-NULL
   values.

4. **INNER JOIN vs. LEFT JOIN:** INNER JOIN returns only matching rows; LEFT JOIN returns all rows
   from the left table.

5. **String quotes:** SQL uses single quotes for string literals, not double quotes.

6. **Forgetting WHERE in UPDATE/DELETE.** Without WHERE, all rows are affected.

7. **Confusing HAVING and WHERE.** WHERE filters rows before grouping; HAVING filters groups after
   GROUP BY.

8. **Not using parameterised queries** -- leads to SQL injection vulnerabilities.

---

## Practice Questions

1. Normalise the following data to 3NF:

| InvoiceNo | CustomerName | CustomerAddress | ProductCode | ProductName | Quantity | Price |
| --------- | ------------ | --------------- | ----------- | ----------- | -------- | ----- |
| 1001      | J. Brown     | 5 High St       | P01         | Pen         | 10       | 2.00  |
| 1001      | J. Brown     | 5 High St       | P02         | Pencil      | 20       | 1.50  |
| 1002      | M. Wilson    | 12 Main Rd      | P01         | Pen         | 5        | 2.00  |

2. Write SQL to create the tables for your normalised schema from question 1, including primary and
   foreign keys.

3. Write SQL queries to: (a) Find all customers who live on 'High St' (b) Calculate the total value
   of each invoice (c) Find the most expensive product

4. Explain the difference between 2NF and 3NF with an example.

5. Write SQL to create a view showing all products that are low in stock (quantity less than 10).

6. Explain the ACID properties of transactions with an example.

7. Write SQL to add a new column 'Category' to the Product table and update all existing records.

8. Explain when you would use a LEFT JOIN instead of an INNER JOIN.

9. Write SQL to find the student with the highest average grade across all their courses.

10. Explain the difference between DELETE and DROP in SQL. When would you use each?

11. Write SQL to find all pairs of students who are enrolled in the same course.

12. A database has tables Author (AuthorID, Name, Nationality) and Book (ISBN, Title, AuthorID,
    Price). Write SQL to find the total value of books by each nationality.

13. Explain why an index on a frequently updated column might slow down the database overall.

14. Write SQL that uses a subquery to find students who are NOT enrolled in any course.

15. Explain the difference between a candidate key and a primary key. Can a table have more than one
    candidate key?

16. A hospital database needs tables for Patient, Doctor, and Appointment. Design the schema with
    appropriate primary and foreign keys. Write the CREATE TABLE statements.

17. Explain the three types of anomalies that can occur in an unnormalised database. Give a specific
    example of each.

18. Write SQL to create a transaction that transfers a student from one course to another, ensuring
    the enrolment records are updated atomically.

## Summary

This topic covers the essential chemistry of database design and development, including key
reactions, underlying theories, and practical applications.

**Key concepts include:**

- Brønsted-Lowry theory
- strong and weak acids/bases
- pH calculations
- titration curves and indicators
- hydrolysis of salts

Mastery of these concepts requires both theoretical understanding and the ability to apply knowledge
to unfamiliar contexts, particularly in calculation and practical questions.
