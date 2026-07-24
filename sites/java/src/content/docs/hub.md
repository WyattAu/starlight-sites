---
title: "Complete Java Programming Study Guide"
description: "Comprehensive Java programming study guide covering core language features, object-oriented programming, collections framework, concurrency, Spring ecosystem, and modern Java (17+) with practical examples."
date: 2026-07-24
tags:
  - java
  - programming
  - study-guide
  - spring
  - oop
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://java.wyattau.com"},
    {"name": "Hub", "url": "https://java.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Complete Java Programming Study Guide",
  "description": "Comprehensive Java programming study guide covering core language, OOP, collections, concurrency, and Spring ecosystem with practical examples.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://java.wyattau.com"
  },
  "url": "https://java.wyattau.com/hub",
  "educationalLevel": "University",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Java remains one of the most widely deployed programming languages in the world. It powers enterprise backends, Android applications, financial systems, and large-scale distributed systems. Its combination of strong typing, managed runtime, and mature ecosystem makes it a reliable choice for production software. But Java's verbosity and layers of abstraction can obscure what is actually happening under the hood.

This hub page maps every resource on this site. The learning path takes you from core language features through advanced concurrency and the Spring ecosystem, building a thorough understanding of how Java works and how to write code that is idiomatic, maintainable, and performant. These notes cover modern Java (17+) — the version of the language in active production use today.

## Table of Contents

- [Core Java](#core-java)
- [Object-Oriented Programming](#object-oriented-programming)
- [Collections Framework](#collections-framework)
- [Concurrency](#concurrency)
- [Spring Ecosystem](#spring-ecosystem)
- [Learning Path](#learning-path)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Core Java

Core Java covers the language fundamentals that every Java developer must master: types, control flow, exceptions, generics, and the standard library. These concepts form the foundation for everything else — collections, concurrency, and frameworks all build on top of them.

### Topic Notes

- [Types and Variables](02-fundamentals/01-types-and-variables) — primitive types, reference types, boxing, and type conversion
- [Control Flow](02-fundamentals/02-control-flow) — if/else, switch expressions, for/while loops, and pattern matching
- [Methods and Scope](02-fundamentals/03-methods-and-scope) — parameter passing, method overloading, and variable scope
- [Exceptions](02-fundamentals/04-exceptions) — checked vs unchecked exceptions, try-with-resources, and exception hierarchies
- [Generics](02-fundamentals/05-generics) — type parameters, bounded types, wildcards, and type erasure

### Key Concepts

**Reference vs. primitive types** is the first distinction every Java developer must understand. Primitives (`int`, `double`, `boolean`) store values directly on the stack. Reference types store pointers to objects on the heap. Understanding this distinction explains why `==` compares references but `.equals()` compares content.

**Generics** enable type-safe collections and methods without sacrificing type information at compile time. Type erasure means generic type parameters are removed at runtime — you cannot use `instanceof` with generic types or create generic arrays. Bounded wildcards (`? extends T`, `? super T`) enable flexible API design.

**Try-with-resources** ensures that resources implementing `AutoCloseable` are properly closed after use. The `try` block acquires the resource, and the runtime guarantees `close()` is called even if an exception is thrown.

---

## Object-Oriented Programming

Java is fundamentally an object-oriented language. Understanding class design, inheritance, interfaces, and polymorphism is essential for writing maintainable Java code.

### Topic Notes

- [Classes and Objects](03-oop/01-classes-and-objects) — constructors, fields, methods, and the `this` reference
- [Inheritance and Polymorphism](03-oop/02-inheritance-and-polymorphism) — extends, method overriding, super, and dynamic dispatch
- [Interfaces and Abstract Classes](03-oop/03-interfaces-and-abstract-classes) — interface design, default methods, and the IS-A relationship
- [Sealed Classes and Records](03-oop/04-sealed-classes-and-records) — Java 17+ features for modeling closed hierarchies and immutable data
- [Design Principles](03-oop/05-design-principles) — SOLID principles, composition over inheritance, and clean code practices

### Key Concepts

**Records** (Java 14+) are immutable data classes that automatically generate constructors, accessors, `equals()`, `hashCode()`, and `toString()`. They eliminate the boilerplate of traditional Java data classes and are ideal for value objects, DTOs, and data transfer.

**Sealed classes** restrict which classes can extend a base class, enabling exhaustive pattern matching in switch expressions. They provide a middle ground between enums (fixed set of constants) and open inheritance.

**Default methods** in interfaces allow adding new methods to interfaces without breaking existing implementations. They are essential for the evolution of large API surfaces like the Java Collections Framework.

---

## Collections Framework

The Java Collections Framework provides the data structures and algorithms that underpin virtually every Java application. Understanding the framework — its interfaces, implementations, and algorithms — is critical for writing efficient code.

### Topic Notes

- [Collection Interfaces](04-collections/01-collection-interfaces) — Collection, List, Set, Map, and their contracts
- [Implementations](04-collections/02-implementations) — ArrayList, LinkedList, HashMap, TreeMap, HashSet, and when to use each
- [Iterators and Streams](04-collections/03-iterators-and-streams) — Iterator, ListIterator, the Stream API, and lazy evaluation
- [Concurrency-Safe Collections](04-collections/04-concurrency-safe-collections) — ConcurrentHashMap, CopyOnWriteArrayList, and blocking queues
- [Sorting and Searching](04-collections/05-sorting-and-searching) — Comparable, Comparator, Collections.sort, and Arrays.sort

### Key Concepts

**ArrayList** is the default list implementation. It provides O(1) random access and O(1) amortized append, but O(n) insertion and deletion. **LinkedList** provides O(1) insertion and deletion at known positions, but O(n) random access. In practice, ArrayList is faster for almost all workloads due to cache locality.

**HashMap** stores key-value pairs using a hash table. It provides O(1) average-case lookup, insertion, and deletion. The key's `hashCode()` and `equals()` methods determine bucket placement and key identity. HashMap permits one null key and multiple null values.

**TreeMap** stores key-value pairs in sorted order using a red-black tree. It provides O(log n) operations and supports range queries with `subMap()`, `headMap()`, and `tailMap()`. Use TreeMap when you need sorted iteration or efficient range queries.

---

## Concurrency

Java's concurrency model is one of its greatest strengths. The language provides built-in support for threads, locks, atomics, and high-level concurrency utilities. Modern Java (17+) adds virtual threads, making concurrent programming more accessible than ever.

### Topic Notes

- [Thread Basics](05-concurrency/01-thread-basics) — Thread, Runnable, lifecycle states, and synchronization
- [Synchronized and Locks](05-concurrency/02-synchronized-and-locks) — intrinsic locks, ReentrantLock, ReadWriteLock, and deadlock prevention
- [Atomics and Memory Model](05-concurrency/03-atomics-and-memory-model) — volatile, AtomicReference, happens-before, and memory ordering
- [Executor Framework](05-concurrency/04-executor-framework) — thread pools, ScheduledExecutorService, and CompletableFuture
- [Virtual Threads](05-concurrency/05-virtual-threads) — Project Loom, structured concurrency, and lightweight threading

### Key Concepts

**Virtual threads** (Java 21+) are lightweight threads managed by the JVM, not the OS. They enable millions of concurrent threads, making blocking I/O patterns practical at scale. Virtual threads dramatically simplify concurrent programming by allowing developers to use blocking code without the performance penalty.

**CompletableFuture** provides a composable API for asynchronous programming. Chain transformations, combine results, and handle errors using methods like `thenApply()`, `thenCompose()`, and `exceptionally()`. It is Java's answer to promises and futures in other languages.

**The Java Memory Model** defines the rules for visibility and ordering of memory operations across threads. The `volatile` keyword guarantees visibility and ordering for individual variables. `synchronized` blocks provide mutual exclusion and memory barriers. Understanding the memory model is essential for writing correct concurrent code.

---

## Spring Ecosystem

Spring is the dominant framework for building Java applications. Spring Boot simplifies setup, Spring MVC handles web requests, and Spring Data provides database access. The ecosystem also includes Spring Security, Spring Cloud, and Spring Batch.

### Topic Notes

- [Spring Boot Basics](06-spring/01-spring-boot-basics) — auto-configuration, application properties, and dependency injection
- [Spring MVC](06-spring/02-spring-mvc) — controllers, request mapping, validation, and REST APIs
- [Spring Data](06-spring/03-spring-data) — repositories, JPA, query methods, and transactions
- [Spring Security](06-spring/04-spring-security) — authentication, authorization, and JWT
- [Testing in Spring](06-spring/05-testing-in-spring) — @SpringBootTest, MockMvc, and TestContainers

### Key Concepts

**Dependency injection** is the core principle of Spring. Instead of creating objects yourself, you declare dependencies in constructors (or fields with `@Autowired`), and the Spring container wires them together. This decouples components, simplifies testing, and makes the application easier to modify.

**Auto-configuration** is what makes Spring Boot magical. Based on the dependencies on the classpath, Spring Boot configures your application with sensible defaults. You can override these defaults through properties files, environment variables, or configuration classes.

**Spring Data JPA** eliminates boilerplate repository code. Define an interface extending `JpaRepository`, and Spring automatically generates the implementation, including standard CRUD operations and derived query methods from method names.

---

## Learning Path

Java is vast. Follow this progression to build competence systematically.

### Stage 1: Foundations (Weeks 1–4)

- Learn types, control flow, exceptions, and methods
- Understand reference types vs. primitives
- Write small console programs using ArrayList and HashMap

### Stage 2: Object-Oriented Design (Weeks 5–8)

- Master class design, inheritance, and interfaces
- Learn records, sealed classes, and pattern matching
- Study the SOLID principles and apply them to small projects

### Stage 3: Collections and Generics (Weeks 9–12)

- Study the Collections Framework interfaces and implementations
- Learn generics, bounded types, and wildcard capture
- Understand the Stream API and functional interfaces

### Stage 4: Concurrency and Frameworks (Weeks 13–16)

- Learn thread basics, synchronized, and the executor framework
- Study virtual threads and structured concurrency
- Build a REST API with Spring Boot and Spring Data JPA

---

## Cross-Site Resources

Wyatt's Notes is a network of interconnected programming and study sites:

- **[C++ Programming Guide](https://cpp.wyattau.com/hub)** — if you are comparing Java with a lower-level language
- **[Python Programming Guide](https://python.wyattau.com/hub)** — if you are comparing Java with a dynamic language
- **[Kotlin Programming Guide](https://kotlin.wyattau.com/hub)** — Kotlin runs on the JVM and interoperates with Java
- **[Computer Science Study Guide](https://computer-science.wyattau.com/hub)** — algorithms and data structures that apply to Java
- **[Database Design Guide](https://databases.wyattau.com/hub)** — essential for Spring Data and JDBC development
- **[Networking Guide](https://networking.wyattau.com/hub)** — relevant for building networked Java applications

---

## Frequently Asked Questions

### How long does it take to learn Java?

Basic competence — writing programs that compile and run correctly — takes 2–3 months. Professional competence — designing object-oriented systems, using collections effectively, and writing concurrent code — takes 6–12 months. The Spring ecosystem adds another 2–3 months. The learning path above gives you a structured progression.

### Should I learn Java or Kotlin first?

If your goal is enterprise backend development, start with Java — it is more widely used and has a larger ecosystem. If your goal is Android development, start with Kotlin — it is the preferred language for Android. If you already know one, learning the other is straightforward because both run on the JVM.

### What is the difference between a thread and a virtual thread?

Traditional threads are OS-level resources with fixed stack sizes (typically 1MB each). Virtual threads are lightweight threads managed by the JVM with minimal memory overhead. You can create millions of virtual threads but only thousands of platform threads. Virtual threads enable blocking I/O patterns without the thread-pool overhead.

### Do I need to learn the Spring ecosystem?

For most Java developers, yes. Spring is the dominant framework for building Java applications in enterprise environments. It handles web servers, database access, security, and configuration. Even if you do not use Spring directly, understanding its concepts (dependency injection, inversion of control) is valuable.

### Is Java still relevant in 2026?

Absolutely. Java remains one of the most widely used languages in enterprise software, financial systems, and large-scale applications. Its stability, performance, and ecosystem make it a reliable choice for production systems. Modern Java (17+) continues to evolve with records, sealed classes, virtual threads, and pattern matching.

### How do I manage Java dependencies?

Use Maven or Gradle for dependency management and build automation. Maven uses a declarative `pom.xml` file, while Gradle uses a programmatic `build.gradle` file. Both handle dependency resolution, version management, and build lifecycle. For modern projects, Gradle with Kotlin DSL is the recommended approach.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
