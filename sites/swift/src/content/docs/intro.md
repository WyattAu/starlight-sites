---
title: Swift
description: "Introduction to swift notes."
---

# Swift

Welcome to the Swift notes. Swift is a modern language for iOS, macOS, watchOS, and tvOS development — combining the safety of a strong type system with the performance of compiled code and the expressiveness of modern syntax.

## Why This Matters

Swift is the primary language for Apple platform development. Its optionals enforce nil safety at compile time, value types (structs, enums) provide predictable behaviour, and protocol-oriented programming favours composition over inheritance. Understanding Swift's type system, memory management (ARC), and concurrency model (async/await, actors) is essential for building reliable, performant apps.

## What You Will Find

- **Type system**: Optionals, type inference, and generics for safe, expressive code
- **Value types vs reference types**: Structs and enums (value) vs classes (reference) — understanding when to use each
- **Protocols and extensions**: Define capabilities and add functionality to existing types without modifying them
- **Memory management**: Automatic Reference Counting (ARC), strong/weak/unowned references
- **Concurrency**: async/await, actors, and structured concurrency for safe parallel execution

Browse the content using the sidebar navigation on the left.

## Common Mistakes

**Confusing `let` and `var`:** `let` declares a constant (cannot be reassigned). `var` declares a variable. Swift encourages immutability — use `let` everywhere possible. This makes code safer and helps the compiler optimise.

**Ignoring optionals:** Swift uses optionals (Type?) to represent values that may be absent. Forcing an optional with ! crashes the program if nil. Use optional binding (if let, guard let) or nil coalescing (??) to handle optionals safely.

**Not using guard statements for early exits:** guard is like if but for conditions that must be true for the rest of the function to work. Using guard with else { return } makes preconditions explicit and reduces nesting.
