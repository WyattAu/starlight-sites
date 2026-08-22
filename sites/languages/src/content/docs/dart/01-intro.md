---

date: 2026-07-23T21:57:32+01:00
title: Introduction to Dart & Flutter
description: "This resource is created as a aggregation of best practices in Dart and Flutter  Comprehensive educational content coverage with definitions and practice proble"

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "languages", "url": "https://languages.wyattau.com"}, {"name": "Dart", "url": "https://languages.wyattau.com/dart"}, {"name": "01 Intro", "url": "https://languages.wyattau.com/dart/01-intro"}]
}
</script>

## Overview

Dart is a client-optimised language developed by Google for building fast apps on
any platform. It is the language behind Flutter, Google's UI toolkit for
building natively compiled applications for mobile, web, and desktop from a
single codebase.

### Why Dart?

- **AOT + JIT compilation**: Dart compiles to native machine code ahead of time
  for production builds, and supports just-in-time compilation with hot reload
  during development.
- **Sound null safety**: Since Dart 2.12, null safety is enforced at compile
  time, eliminating null reference errors at runtime.
- **Single-threaded with isolates**: Dart uses a single-threaded event loop with
  isolates for concurrent programming, avoiding shared-state concurrency bugs.
- **Rich standard library**: Collections, async/await, streams, and mathematical
  utilities are all built in.

### Flutter vs Dart

Dart is the language; Flutter is the framework. You can use Dart without Flutter
(server-side, CLI tools), but Flutter requires Dart. This site focuses on Dart
the language; see the Flutter fundamentals section for UI development.

## Key Concepts

### Type System

Dart is statically typed with type inference. The `var` keyword infers the type
at compile time, while `dynamic` bypasses type checking entirely.

```dart
var name = 'Alice';     // inferred as String
String greeting = 'Hi'; // explicitly typed
dynamic value = 42;     // type checked at runtime
```

### Null Safety

Variables are non-nullable by default. Use `?` to declare nullable types and
`!` to assert non-null (the null assertion operator).

```dart
String name = 'Alice';    // non-nullable
String? nickname = null;  // nullable
print(nickname!.length);  // null assertion (throws if null)
```

### Async Programming

Dart provides `Future` and `Stream` for asynchronous operations, with
`async`/`await` syntax for readable asynchronous code.

```dart
Future<String> fetchUser() async {
  final response = await http.get(Uri.parse('https://api.example.com/user'));
  return response.body;
}
```

## Common Pitfalls

1. **Using `dynamic` excessively**: Dynamic defeats the purpose of Dart's type
   system. Prefer explicit types or `var` inference.
2. **Forgetting null checks**: Even with null safety, `!` (null assertion) can
   throw at runtime. Use `??` (null coalescing) or `?.` (null-aware access)
   instead.
3. **Mixing `Future` and `Stream`**: `await` works with `Future`, but `Stream`
   requires `await for` or `.listen()`. Confusing them causes runtime errors.

## Worked Examples

### Example 1: Null Safety in Practice

```dart
void main() {
  String? name = getName();
  // Safe access with null-aware operator
  print(name?.toUpperCase() ?? 'NO NAME');
}

String? getName() => null;
```

### Example 2: Async/Await Pattern

```dart
Future<void> main() async {
  final data = await fetchData();
  print('Received: $data');
}

Future<String> fetchData() async {
  await Future.delayed(Duration(seconds: 1));
  return 'Hello from async';
}
```

## Summary

Dart is a modern, type-safe language designed for client-side development. Its
combination of AOT/JIT compilation, null safety, and async/await makes it
well-suited for building responsive applications with Flutter. Understanding the
type system and null safety is essential before diving into Flutter widget
development.

## Cross-References

- [Dart Basics](../02-setup/01-installation) - Setup and installation
- [Variables and Types](../03-basics/02-variables) - Type system deep dive
- [Functions](../03-basics/03-functions) - Function syntax and closures
- [Flutter Fundamentals](../09-flutter-fundamentals/01-widgets) - UI development with Flutter
