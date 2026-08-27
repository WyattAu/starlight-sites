---
title: "Kotlin Glossary — Key Terms and Definitions"
description: "Study notes for Kotlin Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Kotlin Fundamentals

**Kotlin**: A modern, statically-typed programming language that runs on the JVM, fully interoperable with Java and designed to address Java's pain points.

**val**: A read-only variable declaration. Once assigned, a `val` cannot be reassigned. Prefer `val` over `var` for immutability.

**var**: A mutable variable declaration that can be reassigned at any time.

**Kotlin Compiler (kotlinc)**: Compiles Kotlin source code to JVM bytecode, JavaScript, or native binaries via Kotlin/Native.

**Gradle (Kotlin DSL)**: The recommended build system for Kotlin projects, using `build.gradle.kts` files with Kotlin syntax.

**String Templates**: Embedding expressions in strings using `$` or `${}` syntax: `"Hello, $name"` or `"2 + 2 = ${2 + 2}"`.

**Type Inference**: The compiler deduces variable types from the assigned value, reducing boilerplate: `val x = 42` infers `Int`.

**Semicolon**: Optional in Kotlin. Line breaks separate statements, though semicolons are allowed when needed.

## Null Safety

**Non-Nullable Type**: A type that can never hold `null`. `String` is non-nullable; the compiler enforces this at compile time.

**Nullable Type**: A type that can hold `null`, denoted with `?`: `String?` can be null.

**Safe Call Operator (?.)**: Chains property access that short-circuits on null: `user?.address?.city` returns null if any part is null.

**Elvis Operator (?:)**: Provides a default value when an expression is null: `val length = str?.length ?: 0`.

**Non-Null Assertion (!!)**: Forces a nullable value to non-null, throwing a `KotlinNullPointerException` if null. Use sparingly.

**Safe Cast (as?)**: Attempts a cast, returning null if the cast fails instead of throwing an exception.

**Let Block**: Executes a block of code on a non-null object, commonly used for null checks and transformations.

## Data Types

**Data Class**: A class that automatically generates `equals()`, `hashCode()`, `toString()`, `copy()`, and destructuring functions from constructor parameters.

```kotlin
data class User(val name: String, val age: Int)
```

**Sealed Class**: A class with a restricted hierarchy. All subclasses must be known at compile time, enabling exhaustive `when` expressions.

**Enum Class**: A type with a fixed set of named constants, optionally carrying properties and methods.

**Array**: A fixed-size container of elements of the same type, backed by JVM arrays.

**List**: An immutable ordered collection. `listOf()` creates an immutable list; `mutableListOf()` creates a mutable one.

**Map**: An unordered collection of key-value pairs. `mapOf()` creates an immutable map.

**Set**: An unordered collection of unique elements.

## Control Flow

**When Expression**: A powerful replacement for `switch` that supports multiple conditions, ranges, type checks, and destructuring.

```kotlin
when (x) {
    1 -> println("one")
    in 2..10 -> println("two to ten")
    is String -> println(x.length)
    else -> println("other")
}
```

**For Loop**: Iterates over ranges, collections, or anything with an iterator: `for (i in 1..10)`.

**Range Expression**: Creates a range of values using `..` operator: `1..10` includes both endpoints.

**Break and Continue**: `break` exits the nearest loop; `continue` skips to the next iteration. Labels allow breaking from nested loops.

**If Expression**: Returns a value in Kotlin, functioning as an expression: `val max = if (a > b) a else b`.

## Functions

**Function**: Defined with `fun`, supporting default parameters, named arguments, and single-expression bodies.

```kotlin
fun greet(name: String, greeting: String = "Hello") = "$greeting, $name!"
```

**Default Arguments**: Parameter values used when no argument is provided: `fun log(msg: String, level: Int = 0)`.

**Named Arguments**: Calling functions with named parameters in any order: `greet(greeting = "Hi", name = "Alice")`.

**Single-Expression Function**: A function whose body is a single expression, with the return type inferred: `fun add(a: Int, b: Int) = a + b`.

**Infix Function**: A member or extension function with one parameter that can be called using infix notation: `1 shl 3` instead of `1.shl(3)`.

**Tail Recursive Function**: A recursive function optimized by the compiler to avoid stack overflow, marked with `tailrec`.

## Lambdas and Higher-Order Functions

**Lambda Expression**: An anonymous function defined with `{}`: `{ x: Int -> x * 2 }`. Lambdas can access variables from the enclosing scope.

**Higher-Order Function**: A function that takes functions as parameters or returns a function: `list.map { it.toUpperCase() }`.

**it Keyword**: Implicit name for the single parameter of a lambda: `list.filter { it.length > 3 }`.

**Function Type**: Represents a function signature: `(Int, Int) -> Int` for a function taking two Ints and returning an Int.

**Scope Functions**: `let`, `run`, `apply`, `also`, and `with` provide concise object operations with different return values and context references.

**Trailing Lambda**: When the last parameter is a lambda, it can be written outside the parentheses: `list.map { it * 2 }`.

## Extension Functions

**Extension Function**: Adds methods to existing classes without inheritance, defined with a receiver type: `fun String.isEmail() = contains("@")`.

**Extension Property**: Adds properties to existing classes without modifying their source code.

**Receiver Type**: The type on which an extension function operates, specified before the function name in the declaration.

## Coroutines

**Coroutine**: A lightweight concurrency construct that can be suspended and resumed, managed by the Kotlin runtime rather than the OS.

**Suspend Function**: A function that can be paused and resumed, marked with the `suspend` keyword. Can only be called from coroutines or other suspend functions.

**Launch**: Starts a new coroutine without blocking the current thread, returning a `Job`.

**Async**: Starts a coroutine that computes a value, returning a `Deferred` that can be awaited for the result.

**Structured Concurrency**: Coroutines launched in a scope are completed before the scope is cancelled, preventing leaked coroutines.

**Flow**: A cold asynchronous stream that produces values on demand, supporting operators like `map`, `filter`, and `combine`.

**Dispatcher**: Determines which thread pool a coroutine runs on: `Dispatchers.Main` for UI, `Dispatchers.IO` for I/O, `Dispatchers.Default` for CPU work.

**CoroutineScope**: Defines the lifecycle of coroutines. Coroutines are cancelled when their scope is cancelled.

**RunBlocking**: Bridges blocking and non-blocking code by starting a new coroutine and blocking the current thread until it completes.

## Classes and Objects

**Primary Constructor**: Declared in the class header, initializing properties: `class User(val name: String, val age: Int)`.

**Secondary Constructor**: Additional constructors defined in the class body using `constructor`.

**Init Block**: Code executed during class initialization, can appear multiple times and runs in order.

**Companion Object**: An object tied to the class rather than instances, providing factory methods and static-like members.

**Object Declaration**: A singleton object defined with the `object` keyword.

**Inheritance**: Kotlin classes are `final` by default. Use `open` to allow inheritance, and `:` to specify a superclass.

**Abstract Class**: A class that cannot be instantiated directly, containing abstract methods that subclasses must implement.

**Interface**: A contract that can contain abstract methods, default implementations, and properties. Supports multiple inheritance.

**Data Class**: Automatically generates structural equality, copying, and string representation from constructor parameters.

**Sealed Interface**: Similar to sealed classes, restricting which types can implement the interface.

## Property Delegation

**Delegated Properties**: Properties whose get/set behavior is delegated to another object: `val x: String by lazy { computeValue() }`.

**Lazy**: Initializes a property on first access: `val expensive: Data by lazy { loadExpensiveData() }`.

**Observable**: Notifies listeners when a property changes: `var count: Int by Delegates.observable(0) { _, old, new -> println("$old -> $new") }`.

**Vetoable**: Allows or rejects property changes based on a condition: `var age: Int by Delegates.vetoable(0) { _, _, new -> new >= 0 }`.

## Kotlin Multiplatform

**Kotlin Multiplatform**: Enables sharing code between JVM, JavaScript, iOS, native, and other platforms.

**Common Code**: Platform-independent code shared across all targets.

**Expect/Actual**: `expect` declarations in common code define platform-specific APIs; `actual` implementations provide platform-specific implementations.

## Error Handling

**Try-Catch**: Handles exceptions with `try { } catch (e: Exception) { }` blocks.

**Result Type**: Represents success or failure: `Result<T>` wraps either a value or an exception.

**Throw Expression**: Explicitly raises an exception using `throw`.

**Nothing Type**: A type with no instances, used as the return type of functions that always throw exceptions.

## Related Terms

- See [Java Glossary](/java/glossary) for JVM comparison
- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
- See [TypeScript Glossary](/typescript/glossary) for another statically-typed language
- See [Swift Glossary](/swift/glossary) for mobile development comparison
