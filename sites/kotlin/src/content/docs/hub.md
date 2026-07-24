---
title: "Complete Kotlin Programming Study Guide"
description: "Comprehensive Kotlin programming study guide covering language fundamentals, null safety, coroutines, Android development, Spring Boot, and multiplatform projects with practical examples."
date: 2026-07-24
tags:
  - kotlin
  - programming
  - study-guide
  - android
  - coroutines
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://kotlin.wyattau.com"},
    {"name": "Hub", "url": "https://kotlin.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Complete Kotlin Programming Study Guide",
  "description": "Comprehensive Kotlin programming study guide covering language fundamentals, null safety, coroutines, Android, and Spring Boot.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://kotlin.wyattau.com"
  },
  "url": "https://kotlin.wyattau.com/hub",
  "educationalLevel": "University",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Kotlin is a modern, statically-typed language that runs on the JVM. It addresses many of Java's pain points — null safety, verbosity, and the lack of functional primitives — while maintaining full interoperability with Java. Since Google announced Kotlin as the preferred language for Android development, its adoption has grown rapidly across mobile, backend, and multiplatform projects.

This hub page maps every resource on this site. The learning path takes you from Kotlin's core language features through coroutines, Android development, and Spring Boot, building a thorough understanding of how Kotlin works and how to write idiomatic, expressive code.

## Table of Contents

- [Language Fundamentals](#language-fundamentals)
- [Null Safety and Type System](#null-safety-and-type-system)
- [Functional Programming](#functional-programming)
- [Coroutines](#coroutines)
- [Android Development](#android-development)
- [Spring Boot with Kotlin](#spring-boot-with-kotlin)
- [Learning Path](#learning-path)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Language Fundamentals

Kotlin's fundamentals build on Java's foundations while adding modern language features. Understanding val/var, data classes, extension functions, and lambdas is essential before moving to more advanced topics.

### Topic Notes

- [Variables and Types](02-fundamentals/01-variables-and-types) — val vs var, type inference, primitive types, and string templates
- [Control Flow](02-fundamentals/02-control-flow) — if/when as expressions, for/while loops, and ranges
- [Functions](02-fundamentals/03-functions) — default arguments, named arguments, single-expression functions, and infix notation
- [Classes and Objects](02-fundamentals/04-classes-and-objects) — primary/secondary constructors, init blocks, companion objects
- [Data Classes and Sealed Classes](02-fundamentals/05-data-and-sealed-classes) — copy, destructuring, and exhaustive when expressions

### Key Concepts

**val vs var** — Kotlin distinguishes between immutable (`val`) and mutable (`var`) variables. Prefer `val` whenever possible — it communicates intent, prevents accidental modification, and enables the compiler to optimize. Immutable code is easier to reason about and test.

**Extension functions** let you add methods to existing classes without inheriting from them. They are resolved statically — the compiler determines which extension function to call based on the declared type, not the runtime type. Extension functions are the primary way Kotlin extends existing APIs.

**When expressions** replace switch statements with exhaustive, expression-based branching. When used with sealed classes, the compiler ensures all cases are handled, eliminating the need for a default branch.

---

## Null Safety and Type System

Kotlin's null safety system is one of its defining features. By distinguishing between nullable and non-nullable types at compile time, Kotlin eliminates NullPointerExceptions — the most common runtime error in Java.

### Topic Notes

- [Nullable Types](03-null-safety/01-nullable-types) — the `?` operator, safe calls, and the !! operator
- [Safe Casts and Let](03-null-safety/02-safe-casts-and-let) — as?, let blocks, and the Elvis operator
- [Platform Types](03-null-safety/03-platform-types) — Java interop, nullability annotations, and platform type inference
- [Nullable Collections](03-null-safety/04-nullable-collections) — List?, List<String?>, and List<String>?

### Key Concepts

**Non-nullable vs nullable types** — In Kotlin, `String` can never be null. `String?` can be null. The compiler enforces this distinction, requiring you to handle null cases explicitly. This eliminates entire categories of bugs that plague Java code.

**Safe call operator (`?.`)** — Chains property access and method calls that short-circuit on null. `user?.address?.city` returns null if any part of the chain is null, instead of throwing a NullPointerException.

**Elvis operator (`?:`)** — Provides a default value when an expression is null. `val length = str?.length ?: 0` assigns `str.length` if `str` is non-null, otherwise `0`.

---

## Functional Programming

Kotlin treats functions as first-class citizens. You can pass functions as arguments, return them from other functions, and store them in variables. This enables concise, expressive code using higher-order functions, lambdas, and extension functions.

### Topic Notes

- [Lambdas and Higher-Order Functions](04-functional/01-lambdas-and-higher-order-functions) — lambda syntax, it keyword, and function types
- [Standard Library Functions](04-functional/02-standard-library-functions) — map, filter, reduce, fold, and let/run/apply/also
- [Sequences and Lazy Evaluation](04-functional/03-sequences-and-lazy-evaluation) — sequence builder, intermediate vs terminal operations
- [Delegated Properties](04-functional/04-delegated-properties) — lazy, observable, vetoable, and custom delegates

### Key Concepts

**Higher-order functions** accept functions as parameters or return functions. They are the foundation of Kotlin's functional style — `list.map { it.toUpperCase() }` transforms each element using a lambda.

**Scope functions** (`let`, `run`, `apply`, `also`, `with`) provide concise ways to work with objects. Each returns a different value and binds `this` or `it` differently. Use `apply` for object configuration, `let` for null checks and transformations, and `also` for side effects.

**Sequences** enable lazy evaluation for collections. Instead of creating intermediate lists for each transformation, sequences process elements one at a time. This reduces memory allocation and improves performance for large data sets.

---

## Coroutines

Coroutines are Kotlin's solution to asynchronous and concurrent programming. They provide the readability of synchronous code with the performance of asynchronous execution. Coroutines are lighter than threads and integrate deeply with Kotlin's suspend functions.

### Topic Notes

- [Coroutine Basics](05-coroutines/01-coroutine-basics) — launch, async, runBlocking, and structured concurrency
- [Suspend Functions](05-coroutines/02-suspend-functions) — suspension points, continuation, and the suspend modifier
- [Coroutine Context and Dispatchers](05-coroutines/03-context-and-dispatchers) — Dispatchers.Main, Dispatchers.IO, and CoroutineScope
- [Flow](05-coroutines/04-flow) — cold streams, operators, and collecting values
- [Error Handling](05-coroutines/05-error-handling) — try/catch in coroutines, SupervisorJob, and CoroutineExceptionHandler

### Key Concepts

**Suspend functions** are functions that can be paused and resumed. They are the building blocks of coroutines. A suspend function can call other suspend functions without blocking the thread. The compiler transforms suspend functions into state machines using continuations.

**Structured concurrency** ensures that coroutines launched in a scope are completed before the scope is cancelled. This prevents leaked coroutines and simplifies lifecycle management. Use `viewModelScope` in Android and `CoroutineScope` in backend applications.

**Flow** is Kotlin's cold asynchronous stream. It produces values on demand and supports backpressure. Operators like `map`, `filter`, `transform`, and `combine` enable composable data pipelines.

---

## Android Development

Kotlin is the preferred language for Android development. Jetpack Compose, the modern Android UI toolkit, is built entirely in Kotlin and leverages its language features for declarative UI design.

### Topic Notes

- [Android Fundamentals](06-android/01-android-fundamentals) — Activity, Fragment, lifecycle, and Intent
- [Jetpack Compose](06-android/02-jetpack-compose) — composables, state, recomposition, and material design
- [ViewModel and State](06-android/03-viewmodel-and-state) — ViewModel, StateFlow, and state hoisting
- [Room Database](06-android/04-room-database) — entities, DAOs, migrations, and TypeConverters
- [Dependency Injection](06-android/05-dependency-injection) — Hilt, modules, and scoping

### Key Concepts

**Jetpack Compose** replaces XML layouts with Kotlin functions. Composables are functions that describe UI elements. They are declarative — you describe what the UI should look like for a given state, and Compose handles the diffing and rendering.

**State hoisting** moves state up to the parent composable, making child composables stateless and reusable. The pattern passes state down as parameters and events up as callbacks. This improves testability and reusability.

**ViewModel** survives configuration changes (like screen rotation) and holds UI-related data. It exposes state through `StateFlow` or `MutableState`, and Compose collects this state to recompose the UI.

---

## Spring Boot with Kotlin

Kotlin and Spring Boot integrate seamlessly. Spring Boot provides first-class Kotlin support with Kotlin-specific extensions, null-safety-aware APIs, and concise configuration. Kotlin's data classes and extension functions make Spring applications more expressive.

### Topic Notes

- [Spring Boot Basics](07-spring-boot/01-spring-boot-basics) — project setup, application properties, and auto-configuration
- [REST Controllers](07-spring-boot/02-rest-controllers) — request mapping, validation, and ResponseEntity
- [Spring Data JPA](07-spring-boot/03-spring-data-jpa) — repositories, queries, and Kotlin data classes
- [Spring Security](07-spring-boot/04-spring-security) — authentication, authorization, and JWT
- [Testing](07-spring-boot/05-testing) — Kotest, MockK, and WebTestClient

### Key Concepts

**Kotlin data classes** integrate naturally with JPA entities and DTOs. Spring Data JPA can generate queries from method names on repository interfaces, and Kotlin data classes provide concise entity definitions with automatic `equals()`, `hashCode()`, and `copy()`.

**MockK** is a mocking library designed for Kotlin. It supports mocking final classes (which Java mocking libraries cannot), provides a Kotlin-idiomatic DSL, and integrates with Spring's test context.

---

## Learning Path

Kotlin is broad but approachable. Follow this progression to build competence systematically.

### Stage 1: Foundations (Weeks 1–3)

- Learn val/var, types, control flow, and functions
- Understand null safety — nullable types, safe calls, and the Elvis operator
- Write small programs using data classes and extension functions

### Stage 2: Functional Programming (Weeks 4–6)

- Master lambdas and higher-order functions
- Learn the standard library functions — map, filter, reduce, let, apply
- Study sequences and lazy evaluation

### Stage 3: Coroutines and Concurrency (Weeks 7–9)

- Learn suspend functions and structured concurrency
- Study Flow for async data streams
- Understand dispatchers and coroutine scope

### Stage 4: Frameworks (Weeks 10–14)

- Choose a path: Android with Compose or backend with Spring Boot
- Build a complete application in your chosen domain
- Study testing, dependency injection, and deployment

---

## Cross-Site Resources

Wyatt's Notes is a network of interconnected programming and study sites:

- **[Java Programming Guide](https://java.wyattau.com/hub)** — Java is the foundation Kotlin runs on, essential for understanding JVM behavior
- **[C++ Programming Guide](https://cpp.wyattau.com/hub)** — if you are comparing Kotlin with a lower-level language
- **[Computer Science Study Guide](https://computer-science.wyattau.com/hub)** — algorithms and data structures that apply to Kotlin
- **[Database Design Guide](https://databases.wyattau.com/hub)** — essential for Spring Data and Room database development
- **[Networking Guide](https://networking.wyattau.com/hub)** — relevant for building networked Kotlin applications

---

## Frequently Asked Questions

### Should I learn Java or Kotlin first?

If your goal is Android development, start with Kotlin — it is the preferred language and has better tooling support. If your goal is enterprise backend, start with Java — it is more widely used and has a larger ecosystem. Learning one makes learning the other much easier since both run on the JVM.

### Is Kotlin better than Java?

Kotlin addresses many of Java's pain points — null safety, verbosity, functional primitives — while maintaining full Java interoperability. For new projects, Kotlin is often the better choice. However, Java's ecosystem is larger and more mature. The best language depends on your project and team.

### What is the difference between coroutines and threads?

Threads are OS-level resources that are expensive to create and switch. Coroutines are lightweight, user-space constructs managed by the Kotlin runtime. You can create millions of coroutines but only thousands of threads. Coroutines suspend and resume without blocking threads, enabling efficient I/O.

### Do I need to learn Jetpack Compose for Android?

Yes, for new Android projects. Compose is the modern UI toolkit and has replaced XML layouts as the recommended approach. It integrates deeply with Kotlin's language features and provides a more productive development experience.

### Can I use Kotlin for backend development?

Absolutely. Kotlin with Spring Boot is a popular combination for backend development. Kotlin's null safety, data classes, and extension functions make Spring applications more concise and maintainable. Ktor is another option — a Kotlin-native framework for building HTTP APIs.

### How do I manage Kotlin dependencies?

Use Gradle with Kotlin DSL. It is the recommended build system for Kotlin projects. Define dependencies in `build.gradle.kts` using the `implementation`, `testImplementation`, and `kapt`/`ksp` configurations. The Kotlin Multiplatform plugin handles shared code across platforms.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
