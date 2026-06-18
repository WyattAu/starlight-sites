---
title: Resource Management and Move Semantics
description: ""steals" resources from the source rather than copying them.
- `std::move` casts an lvalue to an rvalue reference, signalling that the object may be moved from.
- The compiler often eliminates move operations entirely via copy/move elision (RVO).

**Exception safety** describes the guarantees a function provides when exceptions are thrown:

- **Nothrow guarantee**: the operation cannot throw (`noexcept`). Destructors, deallocation, and
  swap operations must be nothrow.
- **Strong guarantee**: if an exception is thrown, the program state rolls back to before the
  operation. Achieved by performing all work that might throw before modifying state.
- **Basic guarantee**: if an exception is thrown, the program is in a valid state (no leaks, no
  dangling pointers, invariants hold).
- **No guarantee**: anything might happen. Legacy code and C interoperability.

These four modules build on each other. RAII provides the foundation, move semantics make RAII
efficient for transfers, function architecture applies ownership at API boundaries, and error
handling completes the picture with robust failure modes.

### Common Ownership Patterns

| Pattern              | Smart Pointer                      | Use Case                                        |
| -------------------- | ---------------------------------- | ----------------------------------------------- |
| Exclusive ownership  | `unique_ptr`                       | Default for heap objects, factory return values |
| Shared ownership     | `shared_ptr`                       | Graphs, caches, observer lists                  |
| Non-owning reference | Raw pointer or `reference_wrapper` | Callbacks, iteration, parameter passing         |
| Weak observation     | `weak_ptr`                         | Breaking `shared_ptr` cycles                    |

### Move vs Copy Decision Tree

1. Is the type cheap to copy (e.g., `int`, `span`)? → Copy by value.
2. Is ownership being transferred? → `std::move` into a `unique_ptr`.
3. Is the argument only read? → Pass by `const&`.
4. Is the argument stored? → Pass by value and move internally (`T param` then
   `member = std::move(param)`).

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

:::

## Related Topics

- [Rust Ownership and Borrowing](https://languages.wyattau.com/rust/ownership/) — Rust"s compile-time ownership model as an alternative to C++ manual resource management.
- [Unsafe Rust](https://languages.wyattau.com/rust/07-cargo-ecosystem/unsafe-rust/) — When Rust's safety guarantees are deliberately bypassed.
