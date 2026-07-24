---
title: "Complete C++ Programming Study Guide"
description: "Comprehensive C++ programming study guide covering types, resource management, object-oriented programming, templates, standard library, concurrency, and function architecture. Modern C++ (C++20/23) with practical examples."
date: 2026-07-24
tags:
  - c++
  - programming
  - study-guide
  - modern-cpp
categories:
  - guide
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://programming.wyattau.com"},
    {"name": "Hub", "url": "https://programming.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Complete C++ Programming Study Guide",
  "description": "Comprehensive C++ programming study guide covering all major topics with practical examples and learning path.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://programming.wyattau.com"
  },
  "url": "https://programming.wyattau.com/hub",
  "educationalLevel": "University",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

C++ is one of the most powerful and complex programming languages in existence. It gives you direct control over memory, performance, and hardware — but that power comes with a steep learning curve. This hub page maps every resource on this site and provides a learning path so you can build competence systematically.

These notes cover modern C++ (C++20/23) — the version of the language used in production today. Every concept includes worked code examples, common pitfalls, and the best practices that experienced developers rely on. The goal is not just to write code that compiles, but to write code that is correct, maintainable, and performant.

## Table of Contents

- [Learning Path](#learning-path)
- [Types](#types)
- [Resource Management](#resource-management)
- [Object-Oriented Programming](#object-oriented-programming)
- [Templates and Metaprogramming](#templates-and-metaprogramming)
- [Standard Library](#standard-library)
- [Concurrency](#concurrency)
- [Function Architecture](#function-architecture)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## Learning Path

C++ topics are deeply interconnected. The following path reflects the dependencies — study the listed prerequisites before moving on.

### Phase 1: Foundations (Weeks 1–4)

Start here. These topics form the basis of every C++ program you will write.

1. **Types** — data layout, pointers, references, and initialization
2. **Resource Management** — ownership, RAII, and move semantics

### Phase 2: Abstraction (Weeks 5–8)

Learn to build abstractions that hide complexity and express intent.

3. **Object-Oriented Programming** — class design, polymorphism, and vtables
4. **Function Architecture** — overload resolution, lambdas, and error handling

### Phase 3: Generic Programming (Weeks 9–12)

Write code that works across types while remaining type-safe.

5. **Templates and Metaprogramming** — generic programming, concepts, and compile-time computation
6. **Standard Library** — containers, algorithms, ranges, and I/O

### Phase 4: Advanced (Weeks 13–16)

Master the topics that distinguish professional C++ developers.

7. **Concurrency** — threads, atomics, coroutines, and the memory model

### Dependency Diagram

```
Types
  └── Resource Management (RAII, move semantics)
        ├── Object-Oriented Programming (class design, polymorphism)
        │       └── Function Architecture (lambdas, type erasure)
        ├── Templates and Metaprogramming (generic programming)
        │       └── Standard Library (containers, algorithms)
        └── Concurrency (threads, atomics)
```

---

## Types

C++ is a statically typed language — understanding how types work at the memory level is essential for writing correct, performant code. This section covers data layout, pointers, references, and the rules that govern object lifetime.

### Topics

- [Data Layout](types/1_data_layout/index) — object size, alignment, padding, and struct layout
- [Pointers, References, and Views](types/2_pointers_references_views/index) — raw pointers, smart pointers, and non-owning views
- [Initialization and Lifetime](types/3_initialization_and_lifetime/index) — default initialization, value initialization, and object lifetime rules

### Why This Matters

Every C++ bug ultimately traces back to incorrect type usage or violated lifetime assumptions. Understanding data layout prevents buffer overflows. Understanding initialization prevents undefined behaviour. Understanding references versus pointers prevents dangling references.

### Key Concepts

| Concept | What It Means | Common Mistake |
|---------|---------------|----------------|
| Alignment | Objects must start at addresses that are multiples of their alignment | Assuming `sizeof(struct)` is the sum of member sizes |
| Padding | Compilers insert bytes to satisfy alignment requirements | Ignoring padding when calculating memory usage |
| Value initialization | `T{}` zero-initialises; `T()` default-initialises | Assuming `T x;` is the same as `T x{};` |
| Lifetime | Objects begin existing when construction completes and end when destruction begins | Accessing an object after its destructor runs |

---

## Resource Management

C++ avoids garbage collection in favour of RAII (Resource Acquisition Is Initialization) — resources are tied to object lifetimes. This section covers ownership, smart pointers, move semantics, and the value category system that makes zero-cost abstractions possible.

### Topics

- [RAII Patterns](resource_management/1_ownership_and_raii/1_raii_patterns) — deterministic resource management through object lifetimes
- [unique_ptr](resource_management/1_ownership_and_raii/2_unique_ptr) — exclusive ownership with zero overhead
- [shared_ptr](resource_management/1_ownership_and_raii/3_shared_ptr) — reference-counted shared ownership
- [weak_ptr](resource_management/1_ownership_and_raii/4_weak_ptr) — breaking reference cycles
- [Custom Deleters](resource_management/1_ownership_and_raii/5_custom_deleters) — non-standard resource cleanup
- [Value Taxonomy](resource_management/2_value_categories_and_move/1_value_taxonomy) — lvalues, rvalues, and the value category system
- [Reference Collapsing](resource_management/2_value_categories_and_move/2_reference_collapsing) — how references compose in templates
- [Temporary Materialization](resource_management/2_value_categories_and_move/3_temporary_materialization) — when temporaries become objects
- [Move Constructors and RVO](resource_management/2_value_categories_and_move/4_move_constructors_rvo) — transferring ownership without copies
- [Return Value Optimisation](resource_management/2_value_categories_and_move/5_return_value_optimization) — compiler elision of copies

### Why This Matters

Memory management is the number one source of bugs in C++. RAII eliminates entire categories of resource leaks. Move semantics make zero-cost abstractions possible — you can return large objects from functions without copying them.

### Key Patterns

```cpp
// RAII: resource is released when the object goes out of scope
{
    auto file = std::ifstream("data.txt");  // file opens here
    // ... use file ...
}  // file closes here automatically

// Move semantics: transfer ownership without copying
std::vector<int> create_data() {
    std::vector<int> result = {1, 2, 3, 4, 5};
    return result;  // move or RVO — no copy
}
```

---

## Object-Oriented Programming

C++ supports multiple inheritance, virtual dispatch, and RTTI — powerful features that are easy to misuse. This section covers class design, polymorphism, and the implementation details (vtables, dynamic_cast) that determine performance and correctness.

### Class Design

- [Object Layout and vptr](object_oriented/1_class_design/1_object_layout_vptr) — how objects are laid out in memory and how vtables work
- [Access Control](object_oriented/1_class_design/2_access_control) — public, protected, private, and friend
- [Special Member Functions](object_oriented/1_class_design/3_special_member_functions) — constructors, destructors, copy, and move operations
- [Operator Overloading](object_oriented/1_class_design/4_operator_overloading) — when and how to overload operators
- [Spaceship Operator](object_oriented/1_class_design/5_spaceship_operator) — C++20 three-way comparison
- [std::formatter](object_oriented/1_class_design/6_std_formatter) — C++20 user-defined formatting

### Runtime Polymorphism

- [VTables](object_oriented/2_runtime_polymorphism/1_vtables) — how virtual dispatch works under the hood
- [Inheritance and Slicing](object_oriented/2_runtime_polymorphism/2_inheritance_slicing) — the object slicing problem and how to avoid it
- [Devirtualization](object_oriented/2_runtime_polymorphism/3_devirtualization) — how compilers eliminate virtual call overhead
- [RTTI and dynamic_cast](object_oriented/2_runtime_polymorphism/4_rtti_dynamic_cast) — runtime type identification and its costs
- [Deducing This and CRTP](object_oriented/2_runtime_polymorphism/5_deducing_this_crtp) — C++23 deducing this and the Curiously Recurring Template Pattern

### Design Guidelines

| Principle | Rule | Example |
|-----------|------|---------|
| Rule of Five | If you define any of destructor, copy/move constructor, or copy/move assignment, define all five | RAII classes with raw pointers |
| Rule of Zero | If possible, let the compiler generate all special member functions | Use `std::string`, `std::vector` instead of raw arrays |
| Prefer composition | Use inheritance only for "is-a" relationships | A `Dog` is-an `Animal`; a `Car` has-an `Engine` |
| Avoid public data members | Encapsulate invariants | Use getters/setters or public interface |

---

## Templates and Metaprogramming

Templates are C++'s mechanism for generic programming — writing code that works across types while remaining type-safe. Modern C++ (C++20) adds concepts, ranges, and compile-time computation.

### Generic Programming

- [Instantiation](templates_and_metaprogramming/1_generic_programming/1_instantiation) — how templates are instantiated and the cost of implicit generation
- [Argument Deduction](templates_and_metaprogramming/1_generic_programming/2_argument_deduction) — how the compiler deduces template arguments
- [Specialization](templates_and_metaprogramming/1_generic_programming/3_specialization) — full and partial template specialisation
- [Dependent Names](templates_and_metaprogramming/1_generic_programming/4_dependent_names) — `typename` and `template` keywords in dependent contexts
- [Explicit Instantiation](templates_and_metaprogramming/1_generic_programming/5_explicit_instantiation) — controlling template instantiation

### Concepts and Constraints

- [Defining Concepts](templates_and_metaprogramming/2_concepts_and_constraints/1_defining_concepts) — constraining templates with requirements
- [Constraint Subsumption](templates_and_metaprogramming/2_concepts_and_constraints/2_constraint_subsumption) — how constraints compose
- [Standard Concepts](templates_and_metaprogramming/2_concepts_and_constraints/3_standard_concepts) — the concepts library in C++20
- [SFINAE vs Concepts](templates_and_metaprogramming/2_concepts_and_constraints/4_sfinae_vs_concepts) — when to use which

### Compile-Time Computation

- [Parameter Packs](templates_and_metaprogramming/3_compile_time_computation/1_parameter_packs) — variadic templates and pack expansion
- [Fold Expressions](templates_and_metaprogramming/3_compile_time_computation/2_fold_expressions) — C++17 fold expressions over parameter packs
- [if constexpr](templates_and_metaprogramming/3_compile_time_computation/3_if_constexpr) — compile-time branching
- [Type Traits](templates_and_metaprogramming/3_compile_time_computation/4_type_traits) — querying and transforming types at compile time

---

## Standard Library

The C++ standard library provides containers, algorithms, iterators, and utilities that form the backbone of idiomatic C++. Modern C++ (C++20) adds ranges, concepts, and parallel algorithms.

### Containers and Allocators

- [Sequence Containers](standard_library/1_containers_and_allocators/1_sequence_containers) — `vector`, `deque`, `list`, `forward_list`, `array`
- [Associative Containers](standard_library/1_containers_and_allocators/2_associative_containers) — `set`, `map`, `multiset`, `multimap`
- [Iterators](standard_library/1_containers_and_allocators/3_iterators) — iterator categories, traits, and adaptor patterns
- [Polymorphic Memory Resources](standard_library/1_containers_and_allocators/4_pmr) — custom allocators and memory pools

### Algorithms and Ranges

- [Iterator-Sentinel Pairs](standard_library/2_algorithms_and_ranges/1_iterator_sentinel) — the modern iterator model
- [Range Adaptors](standard_library/2_algorithms_and_ranges/2_range_adaptors) — `views::filter`, `views::transform`, and composition
- [Projections](standard_library/2_algorithms_and_ranges/3_projections) — C++23 projections for sorting and algorithms
- [Range Materialization](standard_library/2_algorithms_and_ranges/4_range_materialization) — `ranges::to` and range constructors
- [Parallel Algorithms](standard_library/2_algorithms_and_ranges/5_parallel_algorithms) — `std::execution::par` and GPU execution

### I/O and Formatting

- [Stream Buffers](standard_library/3_input_output_formatting/1_stream_buffers) — the underlying buffer model for I/O streams
- [Type-Safe Formatting](standard_library/3_input_output_formatting/2_type_safe_formatting) — C++20 `std::format`
- [Unicode Support](standard_library/3_input_output_formatting/3_unicode_support) — `char8_t`, `char16_t`, and encoding

### System Utilities

- [Filesystem](standard_library/4_system_utilities/1_filesystem) — `std::filesystem` for portable file operations
- [Chrono](standard_library/4_system_utilities/2_chrono) — date and time handling
- [Random Numbers](standard_library/4_system_utilities/3_random_numbers) — engines, distributions, and seeding
- [Regular Expressions](standard_library/4_system_utilities/4_regular_expressions) — `std::regex` and pattern matching

---

## Concurrency

C++ concurrency covers threads, synchronisation primitives, the memory model, atomic operations, and coroutines. Writing correct concurrent code requires understanding both the hardware (cache coherency, memory ordering) and the language guarantees.

### Threading and Synchronisation

- [Threads and jthread](concurrency/1_threading_and_synchronization/1_threads_jthread) — `std::thread` and C++20 `std::jthread`
- [Data Races](concurrency/1_threading_and_synchronization/2_data_races) — what they are, why they happen, and how to detect them
- [Mutexes and Deadlocks](concurrency/1_threading_and_synchronization/3_mutexes_deadlocks) — `std::mutex`, `std::lock_guard`, and deadlock prevention
- [Condition Variables](concurrency/1_threading_and_synchronization/4_condition_variables) — `std::condition_variable` and wait patterns
- [Thread-Local Storage](concurrency/1_threading_and_synchronization/5_thread_local_storage) — `thread_local` and its costs

### Memory Model and Atomics

- [Instruction Reordering](concurrency/2_memory_model_and_atomics/1_instruction_reordering) — compiler and hardware reordering
- [Cache Coherency](concurrency/2_memory_model_and_atomics/2_cache_coherency) — how multi-core systems maintain consistency
- [Atomic Operations](concurrency/2_memory_model_and_atomics/3_atomic_operations) — `std::atomic` and atomic operations
- [Memory Orderings](concurrency/2_memory_model_and_atomics/4_memory_orderings) — `relaxed`, `acquire`, `release`, `seq_cst`
- [CAS Loops](concurrency/2_memory_model_and_atomics/5_cas_loops) — compare-and-swap patterns for lock-free programming

### Coroutines and Async I/O

- [Coroutine Frames](concurrency/3_coroutines_and_async_io/1_coroutine_frames) — the underlying mechanism of C++20 coroutines
- [Promise and Awaiter](concurrency/3_coroutines_and_async_io/2_promise_awaiter) — controlling coroutine behaviour
- [Generators](concurrency/3_coroutines_and_async_io/3_generators) — producing sequences lazily
- [Task Scheduling](concurrency/3_coroutines_and_async_io/4_task_scheduling) — scheduling coroutine execution
- [Futures and Promises](concurrency/3_coroutines_and_async_io/5_futures_promises) — `std::future` and `std::promise`

---

## Function Architecture

Functions are the building blocks of C++ programs. This section covers overload resolution, calling conventions, lambdas, type erasure, error handling, and C interop — the design decisions that determine how your code is structured and how it behaves.

### Function Mechanics

- [Overload Resolution](function_architecture/1_function_mechanics/1_overload_resolution) — how the compiler selects the best function
- [Calling Conventions](function_architecture/1_function_mechanics/2_calling_conventions) — `__cdecl`, `__stdcall`, and the impact on ABI
- [Lambdas](function_architecture/1_function_mechanics/3_lambdas) — closure types, capture lists, and generic lambdas
- [Type Erasure](function_architecture/1_function_mechanics/4_type_erasure) — `std::function`, virtual dispatch, and the pattern
- [C Interop](function_architecture/1_function_mechanics/5_c_interop) — `extern "C"`, ABI compatibility, and calling C from C++

### Error Handling

- [Exception ABI](function_architecture/2_error_handling/1_exception_abi) — how exceptions propagate and their cost
- [Exception Safety](function_architecture/2_error_handling/2_exception_safety) — basic, strong, and no-throw guarantees
- [noexcept](function_architecture/2_error_handling/3_noexcept) — specifying and checking exception safety
- [std::optional and std::variant](function_architecture/2_error_handling/4_optional_variant) — representing optional values and sum types
- [std::expected](function_architecture/2_error_handling/5_expected) — C++23 error handling without exceptions

---

## Cross-Site Resources

Programming connects to theory and applied fields:

- **[University Mathematics](https://mathematics.wyattau.com/hub)** — linear algebra, discrete mathematics, and probability theory underpin algorithms and computational geometry
- **[University Physics](https://physics.wyattau.com/hub)** — computational physics, numerical methods, and simulation require C++ skills
- **[IB Computer Science](https://ib.wyattau.com/computer-science)** — introductory programming concepts at the IB level
- **[DSE ICT](https://dse.wyattau.com/ict)** — secondary-level computing for the Hong Kong DSE

---

## Frequently Asked Questions

### How long does it take to learn C++ well?

C++ is a large language. Most developers become productive in 3–6 months and proficient in 2–3 years. These notes are designed for university-level students with some prior programming experience. If you are completely new to programming, start with a simpler language (Python, JavaScript) before tackling C++.

### Which version of C++ should I use?

These notes cover C++20 and C++23 — the current standard. Use a recent compiler (GCC 13+, Clang 17+, MSVC 19.38+) to access modern features like concepts, ranges, coroutines, and `std::format`.

### Should I learn C before C++?

No. Modern C++ is a different language from C, and learning C habits first can make C++ harder to learn. Start with modern C++ idioms: RAII, smart pointers, containers, algorithms, and lambdas.

### How do I debug C++ code?

Start with the compiler's warnings — enable `-Wall -Wextra -Wpedantic` and treat warnings as errors. Use AddressSanitizer (`-fsanitize=address`) to catch memory errors. For undefined behaviour, use UndefinedBehaviorSanitizer. For performance, use Valgrind or perf.

### What is the most important C++ concept?

RAII (Resource Acquisition Is Initialization). If you understand RAII — that resource lifetimes are tied to object lifetimes — you will avoid most common C++ bugs: memory leaks, dangling pointers, and resource handles left open.

### Are these notes suitable for self-study?

Yes. Each section includes worked code examples, common pitfalls, and best practices. Compile and run every example — do not just read the code. Then attempt the exercises to test your understanding.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
