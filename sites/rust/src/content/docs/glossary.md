---
title: "Rust Glossary — Key Terms and Definitions"
description: "Study notes for Rust Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Rust Fundamentals

**Rust Compiler (rustc)**: The official compiler for Rust that enforces ownership rules, performs borrow checking, and generates optimized machine code.

**Cargo**: Rust's package manager and build system, handling dependency management, compilation, testing, and documentation.

```bash
cargo new my_project
cargo build
cargo test
cargo run
```

**Crate**: The basic compilation unit in Rust, either a binary crate (with `main`) or a library crate.

**Module**: A namespace within a crate that organizes code, controlling visibility and scope.

```rust
mod frontend {
    pub mod routes {
        pub fn home() {}
    }
}
```

**Package**: A bundle of one or more crates, defined by a `Cargo.toml` file.

**Workspace**: A collection of related crates within a single repository, sharing a `Cargo.toml`.

**Attribute**: Metadata applied to items like functions, structs, and modules for compiler instructions or macros.

```rust
#[derive(Debug, Clone)]
struct Point {
    x: f64,
    y: f64,
}
```

**Visibility**: The scope where items can be accessed, controlled with `pub` (public) or private (default).

```rust
pub struct Public;
struct Private; // Only accessible within this module
```

**Idiomatic Rust**: Writing code that follows Rust conventions and best practices, leveraging the language's features naturally.

## Ownership and Borrowing

**Ownership**: Rust's core memory safety mechanism where every value has exactly one owner, and the value is dropped when the owner goes out of scope.

```rust
let s1 = String::from("hello");
let s2 = s1; // s1 is moved to s2; s1 is no longer valid
```

**Move**: Transferring ownership of a value from one variable to another; the original variable becomes invalid.

**Copy**: Duplicating a value bit-for-bit; types implementing the `Copy` trait are copied instead of moved.

```rust
let x = 5;
let y = x; // x is copied, both x and y are valid
```

**Clone**: Explicitly duplicating a value, often more expensive than `Copy` for heap-allocated data.

```rust
let s1 = String::from("hello");
let s2 = s1.clone(); // Both s1 and s2 are valid
```

**Borrow**: Creating a reference to a value without taking ownership.

```rust
let s = String::from("hello");
let len = calculate_length(&s); // s is borrowed, not moved
fn calculate_length(s: &String) -> usize { s.len() }
```

**Immutable Reference (&T)**: A reference that allows reading but not modifying the borrowed value; multiple can coexist.

```rust
let s = String::from("hello");
let r1 = &s;
let r2 = &s; // Multiple immutable references are OK
```

**Mutable Reference (&mut T)**: A reference that allows modifying the borrowed value; only one can exist at a time.

```rust
let mut s = String::from("hello");
let r = &mut s;
r.push_str(", world"); // Modifies s through the reference
```

**Borrow Checker**: The compiler component that enforces borrowing rules at compile time, preventing data races.

**Dangling Reference**: A reference pointing to memory that has been freed; Rust prevents this at compile time.

**Lifetime**: The scope for which a reference is valid, ensuring references never outlive the data they refer to.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

## Lifetimes

**Lifetime Annotation**: A syntax `'a` used to describe the relationships between references' lifetimes without changing how long references live.

```rust
&i32        // a reference
&'a i32     // a reference with an explicit lifetime
&'a mut i32 // a mutable reference with an explicit lifetime
```

**Lifetime Elision**: Rules the compiler uses to infer lifetime annotations when they're not explicitly written.

**Static Lifetime**: A lifetime that lasts for the entire program duration; `'static` references can be created with string literals.

```rust
let s: &'static str = "I live forever";
```

**Lifetime Bounds**: Constraints on lifetimes that specify relationships between multiple lifetimes.

```rust
struct Wrapper<'a> {
    data: &'a str,
}
```

**Covariance**: When a type's lifetime parameter can be replaced with a longer lifetime (e.g., `&'a str` to `&'static str`).

**Contravariance**: When a type's lifetime parameter can be replaced with a shorter lifetime (function pointers).

**Invariance**: When a type's lifetime parameter cannot be changed (mutable references).

**PhantomData**: A zero-sized type used to indicate that a type "owns" data of a given lifetime, even though it doesn't store it directly.

## Traits

**Trait**: A collection of methods defining shared behavior, similar to interfaces in other languages.

```rust
trait Summary {
    fn summarize(&self) -> String;
}

impl Summary for Article {
    fn summarize(&self) -> String {
        format!("{} by {}", self.title, self.author)
    }
}
```

**Trait Implementation**: Providing the concrete behavior for a trait's methods on a specific type.

**Trait Object**: A type that can hold any value implementing a trait, enabling dynamic dispatch.

```rust
let article = Article { /* ... */ };
let summary: &dyn Summary = &article; // dyn Summary is a trait object
```

**Static Dispatch**: Resolving method calls at compile time using generics; the compiler generates specialized code for each type.

```rust
fn notify(item: &impl Summary) { println!("{}", item.summarize()); }
```

**Dynamic Dispatch**: Resolving method calls at runtime using trait objects (`dyn Trait`); involves vtable lookup overhead.

```rust
fn notify(item: &dyn Summary) { println!("{}", item.summarize()); }
```

**Default Method**: A method implementation provided in a trait definition that implementors can use or override.

```rust
trait Summary {
    fn summarize(&self) -> String {
        String::from("...")
    }
}
```

**Derive Macro**: Automatically implementing traits like `Debug`, `Clone`, `Copy`, `PartialEq` using the `#[derive]` attribute.

```rust
#[derive(Debug, Clone, PartialEq)]
struct Point { x: f64, y: f64 }
```

**Blanket Implementation**: Implementing a trait for all types that satisfy certain bounds.

```rust
impl<T: Display> ToString for T {
    fn to_string(&self) -> String { /* ... */ }
}
```

**Orphan Rule**: A rule preventing implementing external traits on external types, ensuring coherence.

**Supertrait**: A trait that another trait requires as a bound.

```rust
trait OutlinePrint: std::fmt::Display { }
```

## Enums and Pattern Matching

**Enum**: A type that can be one of several variants, each optionally carrying data.

```rust
enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
    ChangeColor(i32, i32, i32),
}
```

**Variant**: A possible value of an enum type.

**Pattern Matching**: Destructuring enums and other types using `match` or `if let`.

```rust
match message {
    Message::Quit => println!("Quit"),
    Message::Move { x, y } => println!("Move to ({}, {})", x, y),
    Message::Write(text) => println!("Write: {}", text),
    Message::ChangeColor(r, g, b) => println!("Color: ({}, {}, {})", r, g, b),
}
```

**Match Arm**: A single pattern and the code to execute when that pattern matches.

**Wildcard Pattern (_)**: A pattern that matches any value without binding it.

```rust
match value {
    1 => println!("one"),
    _ => println!("other"), // Catches all other values
}
```

**Destructuring**: Breaking apart a struct or tuple into its individual fields.

```rust
let Point { x, y } = point;
```

**if let Syntax**: A concise way to match a single pattern and execute code if it matches.

```rust
if let Message::Write(text) = message {
    println!("Message: {}", text);
}
```

**while let Syntax**: A loop that continues as long as a pattern matches.

```rust
while let Some(top) = stack.pop() {
    println!("{}", top);
}
```

**Exhaustive Matching**: The requirement that `match` covers all possible cases, ensuring no values are missed.

**Result Enum**: `Result<T, E>` represents either success (`Ok(T)`) or failure (`Err(E)`), used for error handling.

```rust
let result: Result<i32, String> = Ok(42);
let error: Result<i32, String> = Err(String::from("failed"));
```

**Option Enum**: `Option<T>` represents either `Some(T)` or `None`, used to handle optional values.

```rust
let some_number: Option<i32> = Some(42);
let no_number: Option<i32> = None;
```

## Error Handling

**panic!**: A macro that unwinds the stack and terminates the thread when unrecoverable errors occur.

```rust
panic!("Something went terribly wrong!");
```

**Result**: An enum used for recoverable errors, with methods like `unwrap()`, `expect()`, `?`.

```rust
fn read_file(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}
```

**? Operator**: Propagates errors to the calling function, returning early on `Err`.

```rust
fn process() -> Result<(), Box<dyn std::error::Error>> {
    let data = std::fs::read_to_string("config.txt")?;
    Ok(())
}
```

**unwrap()**: Returns the value inside `Some`/`Ok` or panics if `None`/`Err`.

**expect()**: Like `unwrap()` but with a custom panic message.

**Unrecoverable Error**: An error that cannot be handled, causing a panic (e.g., index out of bounds).

**Recoverable Error**: An error that can be handled gracefully, represented by `Result<T, E>`.

**Error Trait**: A trait for types that can describe errors, implemented by standard library error types.

```rust
use std::error::Error;
fn process() -> Result<(), Box<dyn Error>> { Ok(()) }
```

## Structs

**Struct**: A custom data type grouping named fields with different types.

```rust
struct User {
    username: String,
    email: String,
    active: bool,
}

let user = User {
    username: String::from("alice"),
    email: String::from("alice@example.com"),
    active: true,
};
```

**Tuple Struct**: A struct with unnamed fields, accessed by index.

```rust
struct Color(u8, u8, u8);
let red = Color(255, 0, 0);
```

**Unit Struct**: A struct with no fields, useful for implementing traits.

```rust
struct Marker;
```

**Method**: A function defined on a struct using an `impl` block, with `self` as the first parameter.

```rust
impl User {
    fn active(&self) -> bool { self.active }
    fn deactivate(&mut self) { self.active = false; }
}
```

**Associated Function**: A function defined in an `impl` block without `self`, called with `Type::function()`.

```rust
impl User {
    fn new(username: String, email: String) -> Self {
        User { username, email, active: true }
    }
}

let user = User::new(String::from("bob"), String::from("bob@example.com"));
```

**impl Block**: A block where methods and associated functions are defined for a type.

**Field Init Shorthand**: When a field name matches a variable name, omit the `: value` part.

```rust
let username = String::from("alice");
let user = User { username, ..default }; // Shorthand for username: username
```

**Struct Update Syntax**: Creating a new struct by copying some fields from another and overriding others.

```rust
let user2 = User { email: String::from("new@example.com"), ..user };
```

## Closures and Iterators

**Closure**: An anonymous function that can capture variables from its enclosing scope.

```rust
let add = |a, b| a + b;
let x = 5;
let add_x = |y| x + y; // Captures x from environment
```

**Move Closure**: A closure that takes ownership of captured variables using `move`.

```rust
let name = String::from("Alice");
let greet = move || println!("Hello, {}", name);
```

**Fn Trait**: The trait for closures that only borrow captured values immutably.

**FnMut Trait**: The trait for closures that can mutate captured values.

**FnOnce Trait**: The trait for closures that take ownership of captured values and can only be called once.

**Iterator**: A trait for types that produce a sequence of values, implemented for collections and custom types.

```rust
let v = vec![1, 2, 3];
let doubled: Vec<i32> = v.iter().map(|x| x * 2).collect();
```

**Iterator Adapter**: Methods that transform iterators into new iterators, like `map`, `filter`, `zip`.

**Consumer**: Methods that consume an iterator, like `collect`, `sum`, `count`, `any`, `all`.

```rust
let sum: i32 = (1..=100).sum();
let has_even = (1..10).any(|x| x % 2 == 0);
```

**Lazy Evaluation**: Iterators are lazy by default, computing values only when consumed.

**Custom Iterator**: Implementing the `Iterator` trait for a custom type.

```rust
struct Counter { count: u32 }

impl Iterator for Counter {
    type Item = u32;

    fn next(&mut self) -> Option<Self::Item> {
        if self.count < 5 {
            self.count += 1;
            Some(self.count)
        } else {
            None
        }
    }
}
```

## Smart Pointers

**Box<T>**: A heap-allocated smart pointer that owns the data and is automatically dropped when going out of scope.

```rust
let b = Box::new(5);
```

**Rc<T>**: A reference-counted smart pointer allowing multiple owners of the same heap data (single-threaded).

```rust
use std::rc::Rc;
let a = Rc::new(String::from("hello"));
let b = Rc::clone(&a); // Increments reference count
```

**Arc<T>**: An atomic reference-counted smart pointer for shared ownership across threads.

```rust
use std::sync::Arc;
let data = Arc::new(vec![1, 2, 3]);
```

**RefCell<T>**: A smart pointer providing interior mutability, allowing mutation of data even through shared references.

```rust
use std::cell::RefCell;
let data = RefCell::new(vec![1, 2, 3]);
data.borrow_mut().push(4); // Mutably borrow at runtime
```

**Interior Mutability**: A design pattern where data is mutated through a shared reference using runtime borrow checking.

**Weak<T>**: A non-owning reference to data managed by `Rc` or `Arc`, preventing reference cycles.

**Deref Trait**: A trait allowing smart pointers to be used like references via the dereference operator `*`.

**Drop Trait**: A trait defining cleanup code when a value goes out of scope.

```rust
struct MyStruct;

impl Drop for MyStruct {
    fn drop(&mut self) {
        println!("Cleaning up MyStruct");
    }
}
```

## Concurrency

**Thread**: A separate execution context within a program, managed by the OS.

```rust
use std::thread;
let handle = thread::spawn(|| {
    println!("Hello from thread!");
});
handle.join().unwrap();
```

**Mutex**: A mutual exclusion lock ensuring only one thread can access shared data at a time.

```rust
use std::sync::Mutex;
let data = Mutex::new(vec![1, 2, 3]);
{
    let mut guard = data.lock().unwrap();
    guard.push(4);
} // Mutex is released when guard goes out of scope
```

**RwLock**: A reader-writer lock allowing multiple concurrent readers or one exclusive writer.

**Channel**: A communication mechanism for sending messages between threads (MPSC: multiple producer, single consumer).

```rust
use std::sync::mpsc;
let (tx, rx) = mpsc::channel();
tx.send(42).unwrap();
let received = rx.recv().unwrap();
```

**Send Trait**: A marker trait indicating a type's ownership can be transferred between threads.

**Sync Trait**: A marker trait indicating a type can be referenced from multiple threads simultaneously.

**Atomic**: Types providing thread-safe operations without locks, using hardware-level atomic instructions.

```rust
use std::sync::atomic::{AtomicUsize, Ordering};
let counter = AtomicUsize::new(0);
counter.fetch_add(1, Ordering::SeqCst);
```

**Data Race**: A bug where two threads access shared data simultaneously, at least one writing, without synchronization.

**Deadlock**: A situation where threads are blocked waiting for each other, preventing progress.

## Macros

**Macro**: A way to define reusable code fragments that are expanded at compile time.

```rust
macro_rules! say_hello {
    () => {
        println!("Hello!");
    };
}
say_hello!();
```

**Declarative Macro (macro_rules!)**: A pattern-matching macro defined with `macro_rules!`.

**Procedural Macro**: A macro that operates on code as tokens, used for derive macros, attribute macros, and function-like macros.

```rust
#[derive(Serialize, Deserialize)]
struct Config { /* ... */ }
```

**Derive Macro**: Automatically implements traits for a struct or enum.

**Attribute Macro**: A macro applied to an item using `#[macro_name]`.

**Function-like Macro**: A macro invoked like a function call with `macro_name!(...)`.

**Token**: The smallest meaningful units of Rust code, processed by the compiler.

**Token Stream**: A sequence of tokens passed to procedural macros for processing.

## Unsafe Rust

**Unsafe Rust**: A version of Rust that disables certain safety checks, allowing raw pointer dereferencing, unsafe function calls, and more.

```rust
unsafe {
    let raw = &mut x as *mut i32;
    *raw = 10;
}
```

**Raw Pointer**: An unsafe pointer type (`*const T` or `*mut T`) that can be dereferenced only in unsafe blocks.

**unsafe fn**: A function that contains code violating Rust's safety guarantees, requiring an `unsafe` block to call.

**Unsafe Trait**: A trait that implementors must mark as `unsafe impl` to promise they uphold the trait's invariants.

**Undefined Behavior**: Code that the compiler assumes will never happen, leading to unpredictable results if violated.

**Soundness**: The property that safe Rust code cannot cause undefined behavior; unsafe code must maintain this.

## Advanced Features

**Generic**: A way to define functions, structs, enums, and traits that work with multiple types.

```rust
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in &list[1..] {
        if item > largest { largest = item; }
    }
    largest
}
```

**Type Alias**: Creating a new name for an existing type using `type`.

```rust
type Kilometers = i32;
let distance: Kilometers = 5;
```

**Newtype Pattern**: Wrapping a type in a tuple struct to create a distinct type.

```rust
struct Meters(f64);
```

**State Machine Pattern**: Using enums to model states and transitions in type-safe way.

```rust
enum Connection {
    Disconnected,
    Connected(Socket),
    Active(Socket, Session),
}
```

**Type State Pattern**: Encoding state in types to prevent invalid operations at compile time.

```rust
struct Locked;
struct Unlocked;

struct Door<State> { _state: PhantomData<State> }

impl Door<Locked> {
    fn unlock(self) -> Door<Unlocked> { Door { _state: PhantomData } }
}
```

**Trait Bounds**: Constraints on generic types specifying which traits they must implement.

```rust
fn process<T: Clone + std::fmt::Display>(item: T) { /* ... */ }
```

**where Clause**: An alternative syntax for specifying trait bounds on generic types.

```rust
fn process<T>(item: T) where T: Clone + std::fmt::Display { /* ... */ }
```

**Associated Type**: A type placeholder within a trait definition, allowing implementors to specify concrete types.

```rust
trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}
```

**GAT (Generic Associated Type)**: Associated types that themselves take generic parameters (nightly/unstable).

**const Generics**: Generic parameters that take constant values instead of types.

```rust
struct Array<T, const N: usize> {
    data: [T; N],
}
```

## Related Terms

- See [Programming Glossary](glossary) for general programming concepts
- See [C++ Glossary](glossary) for systems programming comparison
- See [Computer Science Glossary](glossary) for CS fundamentals
- See [Linux Glossary](glossary) for Rust on Linux development
- See [Machine Learning Glossary](glossary) for Rust ML frameworks
