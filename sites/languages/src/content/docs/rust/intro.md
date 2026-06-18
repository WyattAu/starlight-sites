---
title: Introduction to Rust
description: ""=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Manage versions:

```bash
rustup install stable
rustup install nightly
rustup default stable
rustup target add x86_64-unknown-linux-musl   # cross-compile target
```

## Cargo

Cargo is the single entry point for all development workflows:

```bash
cargo new my_project          # create new project
cargo build                   # compile (debug by default)
cargo build --release         # compile with optimizations
cargo test                    # run all tests
cargo doc                     # generate documentation
cargo clippy                  # run lints
cargo fmt                     # format code
cargo publish                 # publish to crates.io
```

A `Cargo.toml` file is the manifest that defines dependencies, features, profiles, and metadata. A
`Cargo.lock` locks exact dependency versions for reproducible builds.

## Rust 2024 Edition

Rust uses an edition system to make breaking language changes without breaking existing code. Each
Crate specifies its edition in `Cargo.toml`. Editions are not version gates — a Rust 2024 crate can
Depend on a Rust 2018 crate and vice versa. The compiler supports all editions simultaneously.

Key changes in Rust 2024:

- `gen` keyword reserved for generators (async generators, `gen {}` blocks)
- Safe `unsafe` attributes in extern blocks
- Tightened lifetime capture rules for closures
- Changes to `unsafe` block hygiene
- `unsafe_op_in_unsafe_fn` warning becomes a hard error by default

## Where Rust Runs

| Target                                        | Use Case                             |
| --------------------------------------------- | ------------------------------------ |
| **Embedded** (`thumbv7m-none-eabi``cortex-m`) | Microcontrollers, real-time systems  |
| **Linux/Windows/macOS** (`x86_64``aarch64`)   | Desktop applications, CLIs, servers  |
| **WebAssembly** (`wasm32-unknown-unknown`)    | Browser, edge computing              |
| **Bare metal** (`x86_64-unknown-none`)        | OS kernels, bootloaders, hypervisors |
| **Android/iOS**                               | Mobile via FFI or native modules     |

## Common Pitfalls

- **Fighting the borrow checker.** New Rustaceans often try to write C-style code with aliasing
  mutable references. The solution is almost always to restructure your data ownership, not to add
  `clone()`. Interior mutability types (`Cell``RefCell``Mutex`) exist precisely for cases where you
  need shared mutation.
- **Ignoring clippy warnings.** Clippy catches real bugs. Run `cargo clippy -- -W clippy::all` and
  fix every warning before shipping.
- **Overusing `unsafe`.** If you find yourself wrapping large blocks in `unsafe`You are likely
  working against the language. Re-examine your data structure design.

## Related Topics

- [Resource Management in C++](https://programming.wyattau.com/resource-management/) — C++ ownership and RAII compared to Rust's borrow checker.
- [C++ Basics](https://programming.wyattau.com/1_enviroment_and_toolchain/1_cpp_basics/) — Fundamentals of C++ for readers transitioning from systems programming.
