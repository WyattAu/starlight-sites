---
date: 2026-10-19T00:00:00+01:00
title: "Before You Begin: What Kotlin Assumes You Know"
tags:
  - Kotlin
  - Programming
description: "The transition into Kotlin: null safety, data classes, coroutines, extension functions, and the type system -- every concept defined before use, with the Java intuitions named and upgraded."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "kotlin", "url": "https://kotlin.wyattau.com"}, {"name": "kotlin", "url": "https://kotlin.wyattau.com/kotlin/before-you-begin"}]
}
</script>

Kotlin is not "Java with better syntax." It is a different contract between you
and the compiler: the compiler proves more about your program at compile time,
so fewer things go wrong at runtime. Every feature on this page; null safety,
data classes, sealed classes, coroutines; exists because a Java pattern that
caused bugs was replaced by a type-level guarantee that prevents them.

The prerequisite is basic programming in any language. If you know Java, the
syntax will feel familiar and the type system will feel stricter. If you know
Python, the syntax will feel different but the ideas; functions, collections,
iteration; transfer directly.

## Intuition

The most common runtime error in Java and Python is the null pointer
exception. Kotlin eliminates it by making nullability part of the type system:
a variable is either `String` (cannot be null) or `String?` (can be null), and
the compiler enforces the distinction. You cannot call `.length` on a `String?`
without first checking for null; the compiler proves you checked.

This is the design philosophy behind every Kotlin feature: move runtime errors
to compile-time proofs. Data classes eliminate the boilerplate that causes
equality bugs. Sealed classes eliminate the "forgot a case" bugs in when
expressions. Coroutines eliminate the callback hell in asynchronous code. Each
feature is a proof obligation that the compiler enforces.

## 1. Null safety

**Definition.** A type followed by `?` is **nullable**: it can hold `null`. A
type without `?` is **non-null**: it cannot hold `null`. The compiler enforces
this distinction.

```kotlin
var name: String = "Alice"   // non-null: cannot be null
var nickname: String? = null // nullable: can be null

// name.length   // OK: name is String, guaranteed non-null
// nickname.length  // COMPILE ERROR: nickname is String?, might be null
```

**Safe call operator (`?.`).** Calls the method only if the receiver is
non-null; returns null otherwise:

```kotlin
val length = nickname?.length  // Int?; null if nickname is null
```

**Elvis operator (`?:`).** Provides a default when the left side is null:

```kotlin
val display = nickname ?: "Anonymous"
```

**Not-null assertion (`!!`).** Throws a `NullPointerException` if the receiver
is null. Use sparingly; it is the one escape hatch that reintroduces the bug
the type system prevents.

## 2. Data classes

**Definition.** A **data class** automatically generates `equals()`,
`hashCode()`, `toString()`, `copy()`, and component functions from the
constructor parameters.

```kotlin
data class Point(val x: Double, val y: Double)

val p1 = Point(1.0, 2.0)
val p2 = Point(1.0, 2.0)
// p1 == p2 is true; structural equality from the generated equals()
```

In Java, writing `equals()` and `hashCode()` correctly requires ~30 lines of
boilerplate per class, and getting them wrong causes subtle bugs in hash-based
collections. Kotlin's data class generates correct implementations from the
constructor, so the compiler guarantees consistency between equality and
hashing.

**When to use data classes.** For any class whose primary purpose is holding
data; points, configurations, results, API responses. Not for classes with
complex behaviour or identity semantics (a database entity should use a regular
class, because two entities with the same field values are not necessarily the
same entity).

## 3. Sealed classes

**Definition.** A **sealed class** restricts its subtypes to those declared in
the same file. The compiler knows all possible subtypes and can verify that a
`when` expression covers every one.

```kotlin
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val message: String) : Result()
    object Loading : Result()
}

fun handle(result: Result): String = when (result) {
    is Result.Success -> result.data
    is Result.Error -> "Error: ${result.message}"
    is Result.Loading -> "Loading..."
    // No else needed; the compiler proves every case is covered
}
```

If you add a fourth subtype to `Result`, the compiler flags every `when` that
doesn't handle it. This is the difference between "I think I covered all
cases" and "the compiler proved I covered all cases"; the difference between
a hope and a proof.

## 4. Coroutines

**Definition.** A **coroutine** is a lightweight thread that can suspend and
resume without blocking the underlying thread. Coroutines enable asynchronous
programming without callbacks.

```kotlin
import kotlinx.coroutines.*

suspend fun fetchUser(id: Int): User = /* ... */
suspend fun fetchPosts(userId: Int): List<Post> = /* ... */

suspend fun loadProfile(id: Int): Profile = coroutineScope {
    val user = async { fetchUser(id) }
    val posts = async { fetchPosts(id) }
    Profile(user.await(), posts.await())
}
```

`suspend` marks a function that can pause and resume. Inside `coroutineScope`,
`async` launches concurrent coroutines and `await()` waits for each result.
The two network calls run concurrently, and the function *reads sequentially* -
no callback nesting, no `CompletableFuture` chaining.

**Why coroutines over threads.** Coroutines are not managed by the OS; they
are managed by the Kotlin runtime. A coroutine can suspend without blocking
its thread, so 100,000 concurrent coroutines use less memory than 100,000
threads. The switching cost is a function call, not a context switch.

**Structured concurrency.** Every coroutine runs inside a scope, and the scope
cancels its children when it is cancelled. This eliminates the "forgot to
cancel the background task" bug; the compiler and runtime enforce the
parent-child relationship.

## 5. Extension functions

**Definition.** An **extension function** adds a function to an existing class
without modifying the class; a syntactic convenience that resolves
statically.

```kotlin
fun String.truncate(maxLength: Int): String =
    if (length <= maxLength) this else take(maxLength) + "..."

// Usage:
val title = "A very long article title".truncate(20)
```

`String.truncate` is not a member of `String`; it is a function that takes a
`String` as its first argument, with syntactic sugar that lets you call it as
if it were a member. The `this` inside the function refers to the receiver
(the `String` it was called on).

Extension functions cannot access private members and do not actually modify
the class; they are statically resolved, so polymorphism does not apply. But
they are the primary tool for adding functionality to classes you don't own
(library classes, generated classes).

## 6. Self-test

1. What is the difference between `String` and `String?` in Kotlin, and how
   does the compiler enforce it? (§1)
2. Write a safe call chain: given `val user: User?` with a `address: Address?`
   property and `address.city: String?`, extract the city or return `"Unknown"`.
   (§1)
3. Why does a data class not need a manually written `equals()`? (§2)
4. What does the compiler guarantee about a `when` expression over a sealed
   class? (§3)
5. Why do 100,000 coroutines use less memory than 100,000 threads? (§4)
6. What is the difference between an extension function and a member function?
   (§5)

**Answers.**
(1) `String` cannot hold null; `String?` can. The compiler requires a null
check before calling methods on `String?`; the check is a compile error, not
a runtime crash.
(2) `val city = user?.address?.city ?: "Unknown"`; the safe call operator
short-circuits at the first null.
(3) The compiler generates `equals()` from the constructor parameters,
guaranteeing consistency with `hashCode()` and `toString()`; the same fields,
the same order, every time.
(4) The compiler proves that every case is covered: adding a new subtype flags
every non-exhaustive `when` at compile time.
(5) Coroutines are managed by the Kotlin runtime, not the OS; they suspend
without blocking their thread, so the memory footprint per coroutine is
kilobytes instead of megabytes.
(6) An extension function is statically resolved and cannot access private
members; a member function is dynamically dispatched and can. Extension
functions add functionality to classes you don't own.

## Where to go next

- [The Kotlin Track](/); the language in full, from basics to advanced.
- [Measure-Theoretic Probability](https://mathematics.wyattau.com/1-probabilistic-machine-learning/1_measure-theoretic-probability/) -
  the probabilistic foundations behind coroutines' structured concurrency.
- [Computer Science Track](https://computer-science.wyattau.com/1-discrete-mathematics/) -
  the discrete mathematics behind the type system.
