---
title: "Rust Programming Practice Test — 30 Problems"
description: "30 Rust programming problems covering Ownership, Lifetimes, Traits, Async, and Error Handling. Code analysis and debugging with detailed explanations."
date: 2026-07-24
tags:
  - rust
  - programming
  - practice-test
  - university
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://rust.wyattau.com"},
    {"name": "Practice Test", "url": "https://rust.wyattau.com/practice-test-mega"}
  ]
}
</script>

## Rust Programming Practice Test — 30 Problems

This practice test covers 30 problems across five major domains of Rust programming: Ownership and Borrowing, Lifetimes, Traits and Generics, Async Programming, and Error Handling. Each problem tests code analysis, debugging, and understanding of Rust's safety guarantees. Work through all problems before checking the answer key.

## Instructions

- **Time limit:** 90 minutes (3 minutes per problem)
- **Format:** Code analysis and debugging — trace the output, identify errors, or select the correct implementation
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes. Trace code by hand.
- **After the test:** Check the answer key at the bottom. Study the explanations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Ownership and Borrowing | P1–P7 | 7 |
| Lifetimes | P8–P12 | 5 |
| Traits and Generics | P13–P19 | 7 |
| Async Programming | P20–P24 | 5 |
| Error Handling | P25–P30 | 6 |
| **Total** | **30** | **30** |

---

## Ownership and Borrowing (P1–P7)

### P1 — Move Semantics

What is the output of the following code?

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1;
    println!("{} {}", s1, s2);
}
```

| # | Option |
| --- | --- |
| A | `hello hello` |
| B | Compiler error — value used after move |
| C | Runtime error |
| D | `hello` |
| E | Undefined behaviour |

**Correct: B** (index 1)

`let s2 = s1` moves the `String` from `s1` to `s2`. After the move, `s1` is no longer valid. The `println!` tries to use `s1`, which has been moved. Rust's borrow checker catches this at compile time: "value used here after move".

`easy` — 1 mark

---

### P2 — Copy Types

What is the output?

```rust
fn main() {
    let x = 5;
    let y = x;
    println!("{} {}", x, y);
}
```

| # | Option |
| --- | --- |
| A | `5 5` |
| B | Compiler error — value used after move |
| C | Runtime error |
| D | `5` |
| E | Undefined behaviour |

**Correct: A** (index 0)

`i32` implements `Copy`, so `let y = x` copies the value rather than moving it. Both `x` and `y` are valid after the assignment. `Copy` types are bitwise-copied and always remain valid after assignment.

`easy` — 1 mark

---

### P3 — Mutable References

What is the output?

```rust
fn add_one(x: &mut i32) {
    *x += 1;
}

fn main() {
    let mut val = 10;
    add_one(&mut val);
    add_one(&mut val);
    println!("{}", val);
}
```

| # | Option |
| --- | --- |
| A | `10` |
| B | `11` |
| C | `12` |
| D | Compiler error |
| E | `20` |

**Correct: C** (index 2)

`val` starts at 10. `add_one` takes a mutable reference and increments the value. First call: `val` becomes 11. Second call: `val` becomes 12. Mutable references allow modifying the borrowed value through dereferencing.

`easy` — 1 mark

---

### P4 — Borrowing Rules Violation

What is the output?

```rust
fn main() {
    let mut s = String::from("hello");
    let r1 = &s;
    let r2 = &s;
    println!("{} {}", r1, r2);
    let r3 = &mut s;
    r3.push_str(" world");
    println!("{}", r3);
}
```

| # | Option |
| --- | --- |
| A | `hello hello hello world` |
| B | `hello hello world` |
| C | Compiler error — cannot borrow as mutable while immutable references exist |
| D | Runtime panic |
| E | `hello world` |

**Correct: B** (index 1)

The immutable references `r1` and `r2` are used in the first `println!` and then go out of scope (NLL — non-lexical lifetimes). After that, `r3` can take a mutable borrow. The first print outputs "hello hello", the second outputs "hello world". The borrow checker is satisfied because `r1` and `r2` are no longer used when `r3` is created.

`medium` — 1 mark

---

### P5 — String Slices

What is the output?

```rust
fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    for (i, &byte) in bytes.iter().enumerate() {
        if byte == b' ' {
            return &s[0..i];
        }
    }
    s
}

fn main() {
    let sentence = String::from("hello world");
    let word = first_word(&sentence);
    println!("{}", word);
}
```

| # | Option |
| --- | --- |
| A | `hello` |
| B | `world` |
| C | `hello world` |
| D | Compiler error |
| E | Runtime panic |

**Correct: A** (index 0)

`first_word` takes a string slice (`&str`) and finds the first space. It returns a slice from the start to the space index. "hello world" has a space at index 5, so it returns `&sentence[0..5]` which is "hello". String slices are references to a portion of a string's data.

`easy` — 1 mark

---

### P6 — Self-referential Structs

Why can you not store a reference to a field within the same struct?

| # | Option |
| --- | --- |
| A | Rust does not allow references at all |
| B | The reference could outlive the struct, causing a dangling pointer |
| C | References can only point to stack-allocated data |
| D | Structs cannot contain references |
| E | It would cause a stack overflow |

**Correct: B** (index 1)

If a struct contained a reference to one of its own fields, moving the struct would invalidate the reference (the field's address changes). The borrow checker prevents this by refusing self-referential structs. Solutions include using `Box`, `Rc`, `Pin`, or splitting into separate allocations.

`medium` — 1 mark

---

### P7 — Clone and Ownership

What is the output?

```rust
fn main() {
    let s1 = String::from("hello");
    let s2 = s1.clone();
    let s3 = s1;
    println!("{} {} {}", s1, s2, s3);
}
```

| # | Option |
| --- | --- |
| A | `hello hello hello` |
| B | Compiler error — `s1` used after move |
| C | `hello` |
| D | Runtime error |
| E | `hello hello` |

**Correct: B** (index 1)

`clone()` creates a deep copy — `s2` gets its own independent `String`. However, `let s3 = s1` still moves `s1`. After the move, `s1` is invalid. The `println!` fails because `s1` has been moved into `s3`.

`medium` — 1 mark

---

## Lifetimes (P8–P12)

### P8 — Lifetime Elision

What is the lifetime of the return value in this function?

```rust
fn first_char(s: &str) -> &str {
    &s[0..1]
}
```

| # | Option |
| --- | --- |
| A | `'static` |
| B | The lifetime of the input `s` |
| C | A new lifetime unrelated to the input |
| D | The function cannot compile |
| E | Caller's scope |

**Correct: B** (index 1)

Lifetime elision rules apply: when there is exactly one input reference, its lifetime is assigned to all output references. The compiler treats this as `fn first_char<'a>(s: &'a str) -> &'a str`. The return value lives as long as the input.

`medium` — 1 mark

---

### P9 — Explicit Lifetime Annotations

What is the output?

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

fn main() {
    let result;
    let s1 = String::from("long string");
    {
        let s2 = String::from("hi");
        result = longest(s1.as_str(), s2.as_str());
        println!("{}", result);
    }
}
```

| # | Option |
| --- | --- |
| A | `long string` |
| B | `hi` |
| C | Compiler error — `s2` does not live long enough |
| D | Runtime error |
| E | `long string hi` |

**Correct: C** (index 2)

The lifetime `'a` is constrained to the shorter of the two input lifetimes. `s2` lives only in the inner block, so `'a` is the inner block's lifetime. `result` is assigned in the inner block but used after it ends — `result` outlives `'a`. The borrow checker rejects this.

`medium` — 1 mark

---

### P10 — 'static Lifetime

Which statement about `'static` is correct?

| # | Option |
| --- | --- |
| A | `'static` means the value lives for the entire program |
| B | `'static` should be used for all function return types |
| C | String literals do not have `'static` lifetime |
| D | `'static` prevents memory leaks |
| E | `'static` is only used for global variables |

**Correct: A** (index 0)

`'static` means the reference is valid for the entire program duration. String literals (`"hello"`) have `'static` lifetimes because they are embedded in the binary. Trait objects can have `'static` bounds. Do not use `'static` to silence lifetime errors — it indicates the data truly lives forever.

`easy` — 1 mark

---

### P11 — Lifetime in Structs

What is the output?

```rust
struct Excerpt<'a> {
    text: &'a str,
}

fn main() {
    let novel = String::from("Call me Ishmael. Some years ago...");
    let first_sentence;
    {
        let excerpt = Excerpt { text: &novel };
        first_sentence = excerpt.text;
    }
    println!("{}", first_sentence);
}
```

| # | Option |
| --- | --- |
| A | `Call me Ishmael. Some years ago...` |
| B | Compiler error — `excerpt` does not live long enough |
| C | Runtime error |
| D | `excerpt` |
| E | Empty string |

**Correct: A** (index 0)

`Excerpt` borrows `novel` with lifetime `'a`. The `excerpt` struct is created and its `text` field is copied into `first_sentence` (a `&str` reference). `excerpt` is dropped at the end of the inner block, but `first_sentence` still references `novel`, which lives long enough. The borrow checker allows this because `first_sentence` borrows from `novel` directly.

`medium` — 1 mark

---

### P12 — Higher-Ranked Trait Bounds

What does `for<'a> Fn(&'a str) -> &'a str` mean?

| # | Option |
| --- | --- |
| A | The function works for one specific lifetime `'a` |
| B | The function works for any lifetime `'a` |
| C | The function returns a `'static` string |
| D | The function cannot take references |
| E | The function is async |

**Correct: B** (index 1)

Higher-ranked trait bounds (`for<'a>`) mean the function must work for all possible lifetimes, not just one specific one. This is used when passing closures that borrow references — the closure must be valid regardless of the input reference's lifetime. It is Rust's way of expressing "for any lifetime you give me, I can handle it."

`hard` — 1 mark

---

## Traits and Generics (P13–P19)

### P13 — Trait Bounds

What is the output?

```rust
use std::fmt::Display;

fn print_it<T: Display>(item: T) {
    println!("{}", item);
}

fn main() {
    print_it(42);
    print_it("hello");
    print_it(3.14);
}
```

| # | Option |
| --- | --- |
| A | `42 hello 3.14` |
| B | Compiler error — `Display` not implemented |
| C | `42` |
| D | Runtime error |
| E | `hello` |

**Correct: A** (index 0)

The generic function `print_it` accepts any type `T` that implements `Display`. `i32`, `&str`, and `f64` all implement `Display`. The compiler generates specialised code for each concrete type. All three calls print their argument.

`easy` — 1 mark

---

### P14 — Default Methods

What is the output?

```rust
trait Greet {
    fn greet(&self) -> String {
        String::from("Hello!")
    }
}

struct User { name: String }

impl Greet for User {
    fn greet(&self) -> String {
        format!("Hi, I'm {}", self.name)
    }
}

fn main() {
    let u = User { name: String::from("Alice") };
    println!("{}", u.greet());
}
```

| # | Option |
| --- | --- |
| A | `Hello!` |
| B | `Hi, I'm Alice` |
| C | Compiler error |
| D | `Alice` |
| E | Runtime error |

**Correct: B** (index 1)

`Greet` provides a default `greet` method returning "Hello!". `User` overrides it to return a personalised greeting. The `impl Greet for User` block provides a custom implementation, so calling `u.greet()` uses the override, not the default.

`easy` — 1 mark

---

### P15 — Trait Objects vs Generics

What is the key difference between `dyn Trait` and generic `T: Trait`?

| # | Option |
| --- | --- |
| A | `dyn Trait` is faster at runtime |
| B | Generics use dynamic dispatch; trait objects use static dispatch |
| C | `dyn Trait` uses dynamic dispatch; generics use static dispatch (monomorphization) |
| D | There is no difference |
| E | `dyn Trait` cannot be used in collections |

**Correct: C** (index 2)

Generics are monomorphized — the compiler generates type-specific code at compile time, producing zero-overhead abstractions. Trait objects (`dyn Trait`) use dynamic dispatch via a vtable — the method to call is determined at runtime, adding a small overhead. Trait objects enable heterogeneous collections; generics do not.

`medium` — 1 mark

---

### P16 — Associated Types

What is the output?

```rust
trait Container {
    type Item;
    fn get(&self) -> &Self::Item;
}

struct Wrapper(i32);

impl Container for Wrapper {
    type Item = i32;
    fn get(&self) -> &i32 {
        &self.0
    }
}

fn main() {
    let w = Wrapper(42);
    println!("{}", w.get());
}
```

| # | Option |
| --- | --- |
| A | `42` |
| B | `Wrapper` |
| C | Compiler error |
| D | `&42` |
| E | Runtime error |

**Correct: A** (index 0)

Associated types define a type relationship: `Container` has an `Item` type. `Wrapper` specifies `Item = i32`. The `get` method returns `&i32`, which is `&self.0` = `&42`. The macro `println!("{}", ...)` dereferences and prints `42`.

`easy` — 1 mark

---

### P17 — Blanket Implementations

Which statement about blanket implementations is correct?

| # | Option |
| --- | --- |
| A | They can only be defined in the same crate as the trait |
| B | They apply a trait implementation to all types satisfying a bound |
| C | They override existing trait implementations |
| D | They are only allowed for `Copy` types |
| E | They require `unsafe` blocks |

**Correct: B** (index 1)

A blanket implementation provides a trait for all types that meet certain criteria: `impl<T: Display> ToString for T { ... }`. This gives every `Display` type a `to_string()` method. Blanket implementations cannot be overridden — they apply globally.

`medium` — 1 mark

---

### P18 — Orphan Rule

Why does Rust enforce the orphan rule?

| # | Option |
| --- | --- |
| A | To prevent trait name collisions |
| B | To ensure at least one of the trait or type is defined in the current crate |
| C | To prevent implementing traits for primitive types |
| D | To enforce memory safety |
| E | To prevent multiple trait implementations |

**Correct: B** (index 1)

The orphan rule states: you can implement a trait for a type only if either the trait or the type is defined in the current crate. This prevents conflicting implementations — without it, two crates could implement the same trait for the same type differently, creating ambiguity.

`medium` — 1 mark

---

### P19 — PhantomData

What is `PhantomData` used for?

| # | Option |
| --- | --- |
| A | To allocate memory for unused fields |
| B | To indicate that a type parameter is used for type-level reasoning without runtime cost |
| C | To make a struct thread-safe |
| D | To prevent the struct from being instantiated |
| E | To implement `Default` automatically |

**Correct: B** (index 1)

`PhantomData<T>` tells the compiler that the type logically "owns" or "uses" a `T`, even though it contains no `T` data. It is used for variance annotations, drop check, and lifetime enforcement. It has zero size at runtime.

`hard` — 1 mark

---

## Async Programming (P20–P24)

### P20 — Async/Await Basics

What is the output?

```rust
async fn hello() -> String {
    String::from("hello")
}

#[tokio::main]
async fn main() {
    let result = hello().await;
    println!("{}", result);
}
```

| # | Option |
| --- | --- |
| A | `hello` |
| B | Nothing — the future is never polled |
| C | Compiler error |
| D | Runtime panic |
| E | `Future { output: String }` |

**Correct: A** (index 0)

`hello()` returns a future. `.await` drives the future to completion, running it on the Tokio runtime. The future returns `String::from("hello")`. `result` is `String::from("hello")`, which is printed.

`easy` — 1 mark

---

### P21 — Future Laziness

What happens when you call an async function without `.await`?

```rust
async fn do_work() -> i32 {
    println!("working");
    42
}

fn main() {
    do_work();
}
```

| # | Option |
| --- | --- |
| A | `working` is printed and 42 is returned |
| B | Nothing happens — the future is created but never polled |
| C | Compiler error — must await async functions |
| D | Runtime error |
| E | `working` is printed but nothing is returned |

**Correct: B** (index 1)

Async functions are lazy — calling `do_work()` creates a future but does not execute the body. The future must be `.await`ed or explicitly polled to run. The compiler allows this (the future is dropped immediately), and "working" is never printed.

`medium` — 1 mark

---

### P22 — tokio::spawn

What is the output?

```rust
use tokio::time::{sleep, Duration};

#[tokio::main]
async fn main() {
    let handle = tokio::spawn(async {
        sleep(Duration::from_millis(10)).await;
        "task done"
    });

    let result = handle.await.unwrap();
    println!("{}", result);
}
```

| # | Option |
| --- | --- |
| A | `task done` |
| B | Nothing — the task runs in the background and is never joined |
| C | Compiler error |
| D | Runtime panic |
| E | `handle` |

**Correct: A** (index 0)

`tokio::spawn` launches an async task on the runtime. `handle.await` waits for the task to complete and returns its result. The task sleeps 10ms, then returns "task done". `unwrap()` extracts the value from the `Result`. The output is "task done".

`easy` — 1 mark

---

### P23 — Select Macro

What does `tokio::select!` do?

| # | Option |
| --- | --- |
| A | Runs all futures to completion in parallel |
| B | Races multiple futures and completes when the first one finishes |
| C | Selects a random future to run |
| D | Runs futures sequentially |
| E | Blocks until all futures are ready |

**Correct: B** (index 1)

`tokio::select!` concurrently polls multiple futures. When the first future completes, its branch executes and the other futures are dropped. This is useful for implementing timeouts, cancellation, or handling whichever of several events happens first.

`medium` — 1 mark

---

### P24 — Send and Sync Traits

Which statement about `Send` and `Sync` is correct?

| # | Option |
| --- | --- |
| A | `Send` means a type can be shared between threads |
| B | `Sync` means a type can be moved between threads |
| C | `Send` means a type can be moved to another thread; `Sync` means a type can be shared between threads |
| D | They are only needed for async code |
| E | They are optional for thread safety |

**Correct: C** (index 2)

`Send` means `T` can be transferred to another thread (all fields are also `Send`). `Sync` means `&T` can be shared between threads (all fields are also `Sync`). Types like `Rc` are neither `Send` nor `Sync` (not thread-safe). `Arc` is both. These are marker traits — they have no methods.

`medium` — 1 mark

---

## Error Handling (P25–P30)

### P25 — Result and the ? Operator

What is the output?

```rust
use std::fs;

fn read_file(path: &str) -> Result<String, std::io::Error> {
    let content = fs::read_to_string(path)?;
    Ok(content)
}

fn main() {
    match read_file("nonexistent.txt") {
        Ok(_) => println!("success"),
        Err(e) => println!("error: {}", e),
    }
}
```

| # | Option |
| --- | --- |
| A | `success` |
| B | `error: No such file or directory` |
| C | Compiler error |
| D | Runtime panic |
| E | `None` |

**Correct: B** (index 1)

`?` propagates the error if `read_to_string` fails. Since "nonexistent.txt" does not exist, `read_to_string` returns `Err(io::Error)`. The `?` operator returns early with that error. The `match` in `main` hits the `Err` arm, printing the error message.

`easy` — 1 mark

---

### P26 — Option and Pattern Matching

What is the output?

```rust
fn find_first_even(nums: &[i32]) -> Option<&i32> {
    nums.iter().find(|&&n| n % 2 == 0)
}

fn main() {
    let nums = vec![1, 3, 4, 5];
    match find_first_even(&nums) {
        Some(n) => println!("found: {}", n),
        None => println!("none"),
    }
}
```

| # | Option |
| --- | --- |
| A | `found: 4` |
| B | `none` |
| C | `found: 3` |
| D | Compiler error |
| E | Runtime panic |

**Correct: A** (index 0)

`find` returns `Some(&n)` for the first element satisfying the predicate. The first even number is 4. `Some(4)` matches the `Some` arm, printing "found: 4".

`easy` — 1 mark

---

### P27 — Unwrap vs Expect

What is the difference between `unwrap()` and `expect()`?

| # | Option |
| --- | --- |
| A | `unwrap()` panics with a default message; `expect()` allows a custom message |
| B | `expect()` is safer and never panics |
| C | `unwrap()` returns `None` on failure |
| D | They are identical |
| E | `expect()` is for `Option`; `unwrap()` is for `Result` |

**Correct: A** (index 0)

Both panic on `Err` or `None`. `unwrap()` panics with "called `Result::unwrap()` on an `Err` value". `expect("msg")` panics with "msg: called `Result::unwrap()` on an `Err` value". Use `expect()` in production code to provide meaningful panic messages.

`easy` — 1 mark

---

### P28 — Custom Error Types

What is the idiomatic way to create a custom error type in Rust?

| # | Option |
| --- | --- |
| A | Use `panic!` for all errors |
| B | Define an enum implementing `std::error::Error` (or use `thiserror`) |
| C | Use `String` as the error type everywhere |
| D | Return `()` on error |
| E | Use `unsafe` blocks to bypass error handling |

**Correct: B** (index 1)

Idiomatic Rust uses enums for error types. Each variant represents a different failure mode. The `thiserror` crate derives `std::error::Error`, `Display`, and `From` automatically. For application-level errors, `anyhow` provides a dynamic error type. Never use `panic!` for recoverable errors.

`medium` — 1 mark

---

### P29 — Error Conversion with From

What does the `?` operator do with error types?

| # | Option |
| --- | --- |
| A | It ignores the error |
| B | It automatically converts the error using `From` trait implementations |
| C | It panics with the error |
| D | It returns a default value |
| E | It logs the error and continues |

**Correct: B** (index 1)

When `?` encounters an error, it calls `From::from` to convert between error types. If a function returns `Result<T, MyError>` and an inner call returns `Result<T, io::Error>`, the `?` operator converts `io::Error` into `MyError` via the `From` impl. This enables clean error propagation across different error types.

`medium` — 1 mark

---

### P30 — Try-From and Fallible Conversions

What is the output?

```rust
use std::convert::TryFrom;

#[derive(Debug)]
struct Score {
    value: u8,
}

impl TryFrom<i32> for Score {
    type Error = String;

    fn try_from(val: i32) -> Result<Self, Self::Error> {
        if val >= 0 && val <= 100 {
            Ok(Score { value: val as u8 })
        } else {
            Err(format!("invalid score: {}", val))
        }
    }
}

fn main() {
    let s1 = Score::try_from(85);
    let s2 = Score::try_from(150);
    println!("{:?} {:?}", s1, s2);
}
```

| # | Option |
| --- | --- |
| A | `Ok(Score { value: 85 }) Err("invalid score: 150")` |
| B | `Score(85) Score(150)` |
| C | Compiler error |
| D | Runtime panic |
| E | `Ok(85) Ok(150)` |

**Correct: A** (index 0)

`TryFrom` defines fallible conversions. `Score::try_from(85)` succeeds (85 is in 0..=100), returning `Ok(Score { value: 85 })`. `Score::try_from(150)` fails (150 > 100), returning `Err("invalid score: 150")`. The `Debug` output shows both results.

`medium` — 1 mark

---

## Answer Key

<details>
<summary>Click to reveal the answer key</summary>

| Question | Answer | Question | Answer | Question | Answer |
| --- | --- | --- | --- | --- | --- |
| P1 | B | P11 | A | P21 | B |
| P2 | A | P12 | B | P22 | A |
| P3 | C | P13 | A | P23 | B |
| P4 | B | P14 | B | P24 | C |
| P5 | A | P15 | C | P25 | B |
| P6 | B | P16 | A | P26 | A |
| P7 | B | P17 | B | P27 | A |
| P8 | B | P18 | B | P28 | B |
| P9 | C | P19 | B | P29 | B |
| P10 | A | P20 | A | P30 | A |

</details>

---

## Difficulty Breakdown

| Difficulty | Count |
| --- | --- |
| Easy | 13 |
| Medium | 15 |
| Hard | 2 |

---

## Cross-References

- **[Ownership and Borrowing](https://rust.wyattau.com/hub)** — Move semantics, references, and the borrow checker
- **[Lifetimes](https://rust.wyattau.com/hub)** — Lifetime annotations, elision, and the `'static` lifetime
- **[Traits and Generics](https://rust.wyattau.com/hub)** — Trait bounds, monomorphization, and trait objects
- **[Error Handling](https://rust.wyattau.com/hub)** — Result, Option, and the `?` operator
- **[Async Programming](https://rust.wyattau.com/hub)** — Futures, Tokio, and async patterns
- **[Systems Programming](https://rust.wyattau.com/hub)** — Unsafe Rust, FFI, and memory layout
- **[Computer Science](https://computer-science.wyattau.com/hub)** — Algorithms and data structures that apply to Rust

---

## Tips for Using This Practice Test

1. **Trace ownership by hand.** Follow each value through moves, borrows, and drops. The borrow checker is strict but predictable.
2. **Know the lifetime rules.** Every reference has a lifetime. The compiler infers most; understand when annotations are needed.
3. **Understand the "why".** Rust's design (ownership, lifetimes, no null) has clear rationale for preventing memory bugs at compile time.
4. **Practise reading compiler errors.** Rust's error messages are exceptionally helpful — learn to extract the key information.
5. **Retake after one week.** Ownership and lifetimes require rewiring your mental model — spaced repetition is essential.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
