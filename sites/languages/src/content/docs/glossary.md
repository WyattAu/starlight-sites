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

## Tooling and Ecosystem

**Build System**: The toolchain that compiles, tests, and packages a project. Examples: Cargo (Rust), Gradle (Java/Kotlin), mix (Elixir), go build (Go), Cabal/Stack (Haskell), SwiftPM (Swift).

**Package Manager**: Tool for resolving and installing dependencies. Cargo, npm (TypeScript), pip/poetry (Python), Bundler (Ruby), pub (Dart), hex (Elixir), modules (Go).

**Linter**: Static analysis that flags suspicious code or style violations. Clippy (Rust), ESLint (TypeScript), go vet (Go), RuboCop (Ruby).

**Formatter**: Automatic code style normalisation. rustfmt, gofmt, Prettier, swift-format — most languages now have an official formatter.

**REPL**: Read-Eval-Print Loop for interactive evaluation. Elixir's iex and Haskell's GHCi are central to those languages' development workflows.

**Macro**: Code that generates code at compile time. Rust's declarative (`macro_rules!`) and procedural macros; Elixir's quote/unquote metaprogramming; Swift and Kotlin build-time codegen.

## Language-Specific Essentials

**Trait (Rust)**: A collection of methods a type must implement — Rust's unit of polymorphism, similar to Haskell's type classes and Swift's protocols.

**Type Class (Haskell)**: A constraint declaring what operations a type must support (Eq, Ord, Functor, Monad). Enabled by parametric polymorphism.

**Protocol (Swift)**: A named contract for methods and properties; extensions can add default implementations (protocol-oriented programming).

**Interface (Go/Java/TypeScript)**: Declares method sets. Go's are implicit (structural satisfaction); Java's and TypeScript's are explicitly declared (TypeScript checks structurally).

**Goroutine (Go)**: A lightweight green thread multiplexed onto OS threads by the Go runtime; communicate via channels (CSP model).

**Pattern Matching**: Destructuring values against shapes. Central to Haskell, Elixir, Rust, and Swift; present in modern Java and Python (match statement).

**Null Safety**: Language-level prevention of null reference errors. Kotlin's nullable types, Swift's optionals, Rust's Option, Dart's sound null safety.

**Immutability by Default**: Bindings that cannot be reassigned after initialisation — Rust (let vs let mut), Kotlin (val vs var), Swift (let vs var), Haskell (all bindings).

## Further Reading

Each language site in the network covers these concepts in depth with worked examples — start from the Languages Hub to navigate.


## Paradigms

**Functional Programming**: Programmes built from pure functions and immutable data; Haskell is pure by default, Elixir is functional on the BEAM, and every mainstream language now borrows its ideas.

**Object-Oriented Programming**: Encapsulation of state with behaviour in classes; Java and Ruby are class-first, Rust and Go deliberately omit inheritance.

**Procedural Programming**: Straight-line routines over shared state; still the right tool for scripts and systems glue.

**Declarative vs Imperative**: Saying what to compute versus how — SQL and regex are declarative islands inside imperative codebases.

**Metaprogramming**: Programs that treat programs as data — Elixir macros, Ruby's method_missing, Rust's derive macros, Python's decorators.

## Runtime and Platform

**Virtual Machine (VM) Runtime**: The execution engine hosting bytecode — JVM for Java/Kotlin, BEAM for Elixir, ART for Android's Kotlin/Java, Dart VM for Flutter development.

**Bytecode**: The portable intermediate representation compiled sources target; JIT compilers optimise it at runtime.

**Garbage Collector Generations**: The young/old generation split exploiting mortality of objects; Go's GC is concurrent and low-pause instead.

**Tail Call Optimisation**: Reusing the caller's stack frame for a call in tail position — essential to Elixir recursion idioms; absent on the JVM proper.

**Hot Code Reloading**: Replacing running code without restart; Erlang/Elixir's origin as telecom switch software made it a first-class BEAM feature.

**FFI (Foreign Function Interface)**: The boundary for calling C or other native code — cgo (Go), JNI (Java), NIF (Elixir), PyO3 (Python+Rust).

**Stack vs Heap Allocation**: Value types on the stack are cheap; escape analysis moves heap allocations to the stack where provably safe (Go, JVM).

## Language Design Terms

**Syntax Sugar**: Syntax simplifying common patterns without adding power — Kotlin data classes, Rust's `?` operator, Swift's optional chaining.

**Duck Typing**: Runtime structural typing by behaviour — "if it quacks" — characteristic of Ruby and Python before type hints.

**Null Object Pattern vs Option Type**: Encoding absence in the type system (Option/Maybe/nullable) versus defensive null checks; modern languages standardise on the former.

**Operator Overloading**: Custom semantics for built-in operators; pervasive in C++ and Rust, restricted in Java (only String +), dynamic in Python (dunder methods).

**First-Class Functions**: Functions assignable to variables and passed as arguments — the enabler of callbacks, promises, and map/filter idioms everywhere.

**Coroutines**: Suspendable functions generalising async/await; Kotlin's structured concurrency and Python's async generators are coroutine-based.

**Sum Type (Tagged Union)**: A value holding exactly one of several typed variants — Rust's enum, Swift's enum with associated values, Haskell's data declarations.


## Cross-Language Quick Reference

| Concept | Rust | Go | Java | Kotlin | Swift | TypeScript | Python |
|---------|------|----|------|--------|-------|------------|--------|
| Type system | Static, affine | Static, structural | Static, nominal | Static, nominal | Static, nominal | Gradual, structural | Gradual (hints) |
| Memory | Ownership | GC | GC | GC | ARC | GC (JS engine) | GC |
| Null handling | Option | nil pointers | Optional (8+) | Nullable types | Optionals | strict null checks | None |
| Concurrency | async/await, threads | goroutines | virtual threads | coroutines | async/await | async/await | asyncio |
| Error handling | Result/panic | error returns | exceptions | exceptions | throws | exceptions | exceptions |
| Compilation | LLVM AOT | gc AOT | JIT (JVM) | JVM/Native | LLVM AOT | transpiles to JS | CPython interpreter |

## Ecosystem Quick Reference

| Language | Build tool | Package manager | Formatter | Test runner |
|----------|-----------|-----------------|-----------|-------------|
| Rust | Cargo | Cargo | rustfmt | built-in (cargo test) |
| Go | go build | go modules | gofmt | built-in (go test) |
| Java | Gradle/Maven | Maven Central | google-java-format | JUnit |
| Kotlin | Gradle | Maven Central | ktlint | kotlin.test/JUnit |
| Swift | SwiftPM | SwiftPM | swift-format | XCTest |
| TypeScript | tsc/Vite | npm/pnpm | Prettier | Vitest/Jest |
| Python | pip/setuptools | pip/poetry | ruff format | pytest |
| Ruby | rake | Bundler/gems | RuboCop | Minitest/RSpec |
| Elixir | mix | hex | mix format | ExUnit |
| Haskell | Cabal/Stack | Hackage | ormolu | Hspec |
| Dart | pub build | pub | dart format | built-in (dart test) |
