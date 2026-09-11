---
title: "Programming Languages Glossary — Key Terms"
description: "Cross-language programming terminology: static vs dynamic typing, memory management models, concurrency primitives, and compilation strategies shared across modern languages."
date: 2026-07-24
tags: [glossary]
---

## Type Systems

**Static Typing**: Types are checked at compile time. Dart, Go, Haskell, Java, Kotlin, Rust, Swift, and TypeScript are statically typed.

**Dynamic Typing**: Types are checked at runtime. Elixir, Python, and Ruby are dynamically typed.

**Type Inference**: The compiler deduces types without explicit annotations. Central to Haskell, Kotlin, Rust, and Swift; optional in modern TypeScript and Java.

**Gradual Typing**: A system allowing both typed and untyped code. TypeScript's structural types over JavaScript exemplify this.

**Structural vs Nominal Typing**: Structural typing compares type shape (TypeScript, Go); nominal typing compares declared names (Java, Kotlin, Swift, Rust).

## Memory Management

**Garbage Collection**: Automatic memory reclamation. Used by Go, Java, Kotlin, and Dart; the BEAM VM provides it for Elixir.

**Ownership**: Rust's compile-time memory model where every value has a single owner; drops free memory deterministically without a runtime GC.

**Borrowing**: Temporary access to owned data in Rust, enforced as either one mutable reference or many immutable references.

**Reference Counting**: Swift's Automatic Reference Counting (ARC) tracks strong references and deallocates at zero.

**RAII**: Resource Acquisition Is Initialization — binding resource lifetimes to object scopes, central to C++ and Rust.

## Concurrency Models

**Actor Model**: Isolated processes communicating via messages. Elixir/Erlang processes and Dart isolates follow this model.

**Green Threads**: User-space scheduled threads. Go's goroutines and the BEAM's processes are lightweight and cheap to spawn.

**Async/Await**: Syntactic sugar over asynchronous operations. Present in Dart, Python, Rust, Swift, and modern JavaScript.

**Data Races**: Two threads accessing the same memory unsynchronized, at least one writing. Rust's borrow checker prevents them at compile time.

## Compilation Strategies

**AOT Compilation**: Ahead-of-time machine-code generation. Go, Rust, Swift, and Kotlin/Native compile AOT.

**JIT Compilation**: Just-in-time compilation at runtime. The JVM (Java, Kotlin) and BEAM (Elixir) mix interpretation and hot-path compilation.

**Transpilation**: Compiling to another high-level language. TypeScript compiles to JavaScript; Kotlin Multiplatform can target JS.

**LLVM**: A compiler backend used by Rust, Swift, and Haskell (GHC) for machine-code generation and optimisation.

## Further Resources

Return to the [Languages Hub](/hub/) to compare languages, or jump into a specific language's guides: [Dart](/dart/), [Elixir](/elixir/), [Go](/go/), [Haskell](/haskell/), [Java](/java/), [Kotlin](/kotlin/), [Python](/python/), [Ruby](/ruby/), [Rust](/rust/), [Swift](/swift/), [TypeScript](/typescript/).
