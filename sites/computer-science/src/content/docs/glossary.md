---
title: "Computer Science Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of computer science terms covering algorithms, data structures, theory, databases, and networks."
date: 2026-07-24
tags: [glossary]
---

## Algorithms and Data Structures

**Abstract Data Type (ADT)**: A theoretical model of a data type defined by its behavior (operations and semantics) without implementation details. Examples: stack, queue, list.

**Algorithm**: A finite sequence of well-defined instructions for solving a class of problems or performing a computation. Characterized by time and space complexity.

**Array**: A collection of elements stored at contiguous memory locations, accessible by index. Provides O(1) random access but O(n) insertion/deletion.

**Asymptotic Notation**: Mathematical notation describing the limiting behavior of functions. Big-O (upper bound), Big-Ω (lower bound), Big-Θ (tight bound).

**AVL Tree**: A self-balancing binary search tree where the heights of the two child subtrees of any node differ by at most one.

**Binary Search**: An efficient algorithm for finding an item in a sorted array by repeatedly dividing the search interval in half. Time complexity: O(log n).

**Binary Tree**: A tree data structure where each node has at most two children, referred to as left and right.

**Breadth-First Search (BFS)**: A graph traversal algorithm that explores all vertices at the present depth before moving to vertices at the next depth level.

**Bubble Sort**: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if in wrong order. O(n²).

**Cache**: A small, fast memory that stores copies of frequently accessed data. Reduces average memory access time.

**Collision**: In hash tables, when two different keys hash to the same index. Resolved by chaining or open addressing.

**Complete Binary Tree**: A binary tree where every level, except possibly the last, is completely filled, and all nodes are as far left as possible.

**Complexity**: A measure of the computational resources required by an algorithm. Time complexity measures time; space complexity measures memory.

**Data Structure**: A particular way of organizing and storing data for efficient access and modification. Examples: arrays, linked lists, trees, graphs.

**Depth-First Search (DFS)**: A graph traversal algorithm that explores as far as possible along each branch before backtracking.

**Directed Graph (Digraph)**: A graph where edges have a direction, going from one vertex to another.

**Dynamic Programming**: An algorithmic technique that solves problems by breaking them into overlapping subproblems and storing solutions. Avoids redundant computation.

**Edge**: A connection between two vertices in a graph. May be directed or undirected, weighted or unweighted.

**Hash Function**: A function that maps data of arbitrary size to fixed-size values. Used in hash tables for efficient data retrieval.

**Hash Table**: A data structure that maps keys to values using a hash function. Provides average O(1) lookup, insert, and delete operations.

**Heap**: A specialized tree-based data structure satisfying the heap property: parent nodes are greater (max-heap) or lesser (min-heap) than children.

**Insertion Sort**: A simple sorting algorithm that builds the sorted array one element at a time by inserting each element into its correct position. O(n²).

**Linked List**: A linear data structure where elements are stored in nodes, each containing data and a pointer to the next node.

**Merge Sort**: A divide-and-conquer sorting algorithm that splits the array, recursively sorts halves, and merges them. O(n log n).

**Node**: A fundamental unit of a data structure containing data and references (pointers) to other nodes.

**Queue**: A FIFO (First-In-First-Out) data structure where elements are added at the rear and removed from the front.

**Quick Sort**: A divide-and-conquer sorting algorithm that selects a pivot and partitions elements around it. Average O(n log n).

**Red-Black Tree**: A self-balancing binary search tree with an extra bit for color (red or black) to ensure balance during insertions and deletions.

**Stack**: A LIFO (Last-In-First-Out) data structure where elements are added and removed from the top.

**Tree**: A hierarchical data structure with a root node and child nodes forming a parent-child relationship. No cycles allowed.

**Vertex (Node)**: A fundamental unit of a graph representing an entity. Connected by edges.

**Worst-Case Complexity**: The maximum number of operations an algorithm requires for any input of size n. Often denoted O(f(n)).

## Theory of Computation

**Automaton**: A mathematical model of computation. Types include finite automata, pushdown automata, and Turing machines.

**Computability**: The study of what can and cannot be computed. Some problems are undecidable (e.g., the halting problem).

**Complexity Class**: A set of problems that can be solved by computational models using a particular amount of resources. Examples: P, NP, PSPACE.

**Context-Free Grammar**: A formal grammar where production rules have a single nonterminal on the left side. Describes programming language syntax.

**Decidable Problem**: A problem for which there exists an algorithm that always halts and gives a yes or no answer.

**Deterministic Finite Automaton (DFA)**: A finite automaton where for each state and input symbol, there is exactly one transition to a next state.

**Halting Problem**: The problem of determining whether an arbitrary program will eventually stop running. Proven undecidable by Alan Turing.

**NP-Complete**: A class of problems in NP that are at least as hard as any problem in NP. If any NP-complete problem is in P, then P = NP.

**P vs NP Problem**: The major unsolved question in computer science asking whether every problem whose solution can be verified quickly can also be solved quickly.

**Regular Language**: A language that can be recognized by a finite automaton. Closed under union, intersection, and complementation.

**Turing Machine**: An abstract computational model with an infinite tape and a head that reads/writes symbols. Equivalent in power to modern computers.

## Databases

**ACID Properties**: Atomicity, Consistency, Isolation, Durability — properties guaranteeing reliable database transactions.

**Atomicity**: A transaction is all-or-nothing. Either all operations complete successfully, or none are applied.

**Backup**: A copy of data stored separately to protect against data loss. Types: full, incremental, differential.

**Consistency**: A transaction brings the database from one valid state to another, maintaining all defined rules and constraints.

**Database Management System (DBMS)**: Software for creating, managing, and querying databases. Examples: MySQL, PostgreSQL, MongoDB.

**Foreign Key**: A field in one table that references the primary key of another table. Enforces referential integrity.

**Index**: A data structure that improves the speed of data retrieval. Adds overhead to writes but significantly speeds up queries.

**Isolation**: Concurrent transactions execute as if they were sequential, preventing interference between them.

**JOIN**: A SQL operation that combines rows from two or more tables based on related columns. Types: INNER, LEFT, RIGHT, FULL.

**Normalization**: The process of organizing database tables to reduce redundancy and improve data integrity. Forms: 1NF, 2NF, 3NF, BCNF.

**Primary Key**: A unique identifier for each record in a table. Cannot be null and must be unique.

**Query**: A request for data from a database. In SQL, queries use SELECT, INSERT, UPDATE, DELETE statements.

**Relational Database**: A database organized into tables with rows (records) and columns (attributes), related by keys.

**Schema**: The structure or blueprint of a database, defining tables, columns, data types, and relationships.

**SQL (Structured Query Language)**: A standardized language for managing and querying relational databases.

**Transaction**: A logical unit of work that accesses and possibly modifies the database. Must satisfy ACID properties.

**View**: A virtual table based on the result set of a SQL query. Does not store data physically but presents stored data differently.

## Computer Networks

**Bandwidth**: The maximum rate of data transfer across a network path, measured in bits per second (bps).

**Firewall**: A network security system that monitors and controls incoming and outgoing traffic based on predetermined security rules.

**HTTP (HyperText Transfer Protocol)**: An application-layer protocol for transmitting hypermedia documents. Foundation of data communication on the web.

**IP Address**: A unique numerical label assigned to each device on a network. Types: IPv4 (32-bit) and IPv6 (128-bit).

**Latency**: The time delay for data to travel from source to destination. Measured in milliseconds (ms).

**Packet**: A unit of data formatted for transmission across a network. Contains header (addressing) and payload (data).

**Protocol**: A set of rules governing communication between devices. Examples: TCP, UDP, HTTP, FTP, SMTP.

**Router**: A networking device that forwards data packets between computer networks. Operates at the network layer (Layer 3).

**Subnet Mask**: A 32-bit number that divides an IP address into network and host portions. Default: 255.255.255.0 (/24).

**TCP (Transmission Control Protocol)**: A reliable, connection-oriented protocol that ensures ordered delivery of data.

**UDP (User Datagram Protocol)**: A connectionless protocol that sends data without establishing a connection. Faster but unreliable.

## Software Engineering

**Abstraction**: Hiding complex implementation details and showing only the essential features. Fundamental to managing complexity.

**Agile**: An iterative software development approach emphasizing collaboration, flexibility, and customer feedback. Includes Scrum, Kanban.

**API (Application Programming Interface)**: A set of rules and protocols for building software applications. Defines how components interact.

**Class**: A blueprint for creating objects in object-oriented programming. Defines attributes (data) and methods (behavior).

**Compiler**: A program that translates source code into machine code before execution. Produces a standalone executable.

**Debugging**: The process of finding and fixing bugs (errors) in software. Tools include debuggers, log files, and unit tests.

**Design Pattern**: A reusable solution to a common software design problem. Examples: Singleton, Observer, Factory, MVC.

**Encapsulation**: Bundling data and methods that operate on that data within a single unit (class), restricting direct access.

**Functional Programming**: A programming paradigm treating computation as evaluation of mathematical functions, avoiding mutable state.

**IDE (Integrated Development Environment)**: A software application providing comprehensive facilities for software development. Examples: VS Code, IntelliJ.

**Inheritance**: An OOP mechanism where a new class inherits properties and methods from an existing class.

**Interface**: A contract specifying what methods a class must implement, without defining how. Enables polymorphism.

**Module**: A self-contained unit of code that can be imported and used by other modules. Promotes code reuse and organization.

**Object-Oriented Programming (OOP)**: A programming paradigm based on objects containing data and methods. Key principles: encapsulation, inheritance, polymorphism.

**Polymorphism**: The ability of objects of different types to be treated as instances of a common superclass. Methods behave differently based on the actual object type.

**Refactoring**: Restructuring existing code without changing its external behavior. Improves readability, maintainability, and performance.

**Runtime**: The period during which a program is executing. Runtime errors occur during this phase.

**Version Control**: A system for tracking changes to source code over time. Git is the most widely used version control system.

## Related Resources

- [Algorithms Course](/computer-science/algorithms/)
- [Data Structures Tutorial](/computer-science/data-structures/)
- [Database Design Guide](/computer-science/databases/)
- [Network Fundamentals](/computer-science/networks/)
