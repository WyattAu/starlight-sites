---

date: 2026-07-23T21:57:32+01:00
title: Structs and Enums
description: "Structs are the primary mechanism for defining custom types in Rust. Unlike classes in C++ or Java, Structs in Rust do not support inheritance. Composition"

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "rust", "url": "https://rust.wyattau.com"}, {"name": "03 Structs Enums", "url": "https://rust.wyattau.com/03-structs-enums"}, {"name": "Structs And Enums", "url": "https://rust.wyattau.com/03-structs-enums/structs-and-enums"}]
}
</script>

## Structs

Structs are the primary mechanism for defining custom types in Rust. Unlike classes in C++ or Java,
Structs in Rust do not support inheritance. Composition and trait-based polymorphism are the
Idiomatic alternatives.

### Unit Structs

Unit structs have no fields. They are useful as marker types or phantom types:

```rust
struct Marker;
struct Benchmark;

impl Marker {
    fn describe(&self) -> &"static str {
        "I am a marker type"
    }
}
```

Unit structs have size 0 (they are zero-sized types). This makes them free to create and pass around
— the compiler optimizes away all storage for them.

```rust
assert_eq!(std::mem::size_of::<Marker>(), 0);
```

### Tuple Structs

Tuple structs are named tuples. Each field is unnamed but accessible by index:

```rust
struct Point(f64, f64);

impl Point {
    fn distance_from_origin(&self) -> f64 {
        (self.0 * self.0 + self.1 * self.1).sqrt()
    }
}

let p = Point(3.0, 4.0);
assert_eq!(p.distance_from_origin(), 5.0);
```

Tuple structs with a single field implement the **newtype pattern**, creating a distinct type from
The wrapped type:

```rust
struct UserId(u64);
struct OrderId(u64);

fn get_user(id: UserId) { /* ... */ }

let uid = UserId(42);
let oid = OrderId(99);
get_user(uid);   // OK
// get_user(oid);  // ERROR: expected UserId, found OrderId
```

This is type-safe and zero-cost — the compiler eliminates the wrapper at optimization time.

### Named-Field Structs

The most common form of struct definition:

```rust
struct Person {
    name: String,
    age: u32,
    email: Option<String>,
}

let alice = Person {
    name: String::from("Alice"),
    age: 30,
    email: Some(String::from("alice@example.com")),
};

println!("{} is {}", alice.name, alice.age);
```

#### Field Init Shorthand

When the variable name matches the field name, you can use the shorthand:

```rust
fn make_person(name: String, age: u32) -> Person {
    Person { name, age, email: None }
}
```

#### Struct Update Syntax

Create a new struct from an existing one, overriding specific fields:

```rust
let bob = Person {
    name: String::from("Bob"),
    ..alice  // remaining fields copied from alice
};
// bob.name == "Bob", bob.age == 30, bob.email == Some("alice@example.com")
```

Struct update syntax moves the remaining fields. After `..alice`The `alice` binding can no longer Be
used in its entirety (it is partially moved), but individual `Copy` fields remain accessible.

### Struct Layout and `#[repr]`

By default, the compiler is free to reorder fields and add padding for alignment. The `#[repr]`
Attribute controls the memory layout:

```rust
#[repr(C)]      // C-compatible layout — fields in declaration order, C alignment rules
struct Color {
    r: u8,
    g: u8,
    b: u8,
}

#[repr(transparent)]  // has the same layout as the single field inside
struct Wrapper(u32);

#[repr(packed)]   // no padding — fields are packed tightly (may cause unaligned access)
struct Packed {
    a: u8,
    b: u32,       // at offset 1, not offset 4 — misaligned on most platforms
}

#[repr(align(16))]  // forced alignment of 16 bytes
struct Aligned {
    data: [u8; 32],
}
```

:::caution
Fields through references requires `unsafe` because the compiler cannot guarantee alignment for
Dereferences. Use `#[repr(packed(2))]` or similar to specify minimum alignment.

### Visibility

By default, all struct fields are private (visible only within the module where the struct is
Defined). Use `pub` to make fields public:

```rust
mod geometry {
    pub struct Circle {
        pub radius: f64,   // public — accessible from other modules
        center: Point,      // private — only accessible within this module
    }

    impl Circle {
        pub fn new(radius: f64, center: Point) -> Self {
            Circle { radius, center }
        }

        pub fn area(&self) -> f64 {
            std::f64::consts::PI * self.radius * self.radius
        }
    }
}
```

Note: making a struct `pub` does not make its fields `pub`. Each field must be individually marked
As `pub`. This is different from C++ where `public:` in a class definition makes all subsequent
Members public.

### Methods and Associated Functions

Methods are defined inside `impl` blocks:

```rust
struct Rectangle {
    width: f64,
    height: f64,
}

impl Rectangle {
    // Associated function (no self parameter) — like a static method
    fn new(width: f64, height: f64) -> Self {
        Rectangle { width, height }
    }

    fn square(size: f64) -> Self {
        Rectangle { width: size, height: size }
    }

    // Method taking immutable reference
    fn area(&self) -> f64 {
        self.width * self.height
    }

    // Method taking mutable reference
    fn scale(&mut self, factor: f64) {
        self.width *= factor;
        self.height *= factor;
    }

    // Method taking ownership
    fn into_components(self) -> (f64, f64) {
        (self.width, self.height)
    }
}

let r = Rectangle::new(3.0, 4.0);
assert_eq!(r.area(), 12.0);
```

### Multiple `impl` Blocks

A type can have multiple `impl` blocks. This is useful for organizing methods by functionality or
For separating trait implementations from inherent methods:

```rust
impl Rectangle {
    fn area(&self) -> f64 { self.width * self.height }
}

impl Rectangle {
    fn perimeter(&self) -> f64 {
        2.0 * (self.width + self.height)
    }
}
```

### Method Dispatch

Rust uses static dispatch by default — the compiler knows the exact type at the call site and
Monomorphizes the code. Trait methods called through `dyn Trait` use dynamic dispatch via vtable
Indirection.

```rust
trait Shape {
    fn area(&self) -> f64;
}

struct Circle { radius: f64 }
impl Shape for Circle {
    fn area(&self) -> f64 { std::f64::consts::PI * self.radius * self.radius }
}

// Static dispatch — no vtable
let c = Circle { radius: 5.0 };
let a = c.area();  // compiler generates Circle::area directly

// Dynamic dispatch — vtable lookup
let s: &dyn Shape = &Circle { radius: 5.0 };
let a = s.area();  // indirect call through vtable
```

## Enums

Enums are algebraic data types (sum types). Each variant can optionally carry data. Rust enums are
Discriminated unions — the compiler stores a tag (discriminant) to identify which variant is active.

### Unit Variants

```rust
enum Direction {
    North,
    East,
    South,
    West,
}

let d = Direction::North;
```

### Tuple Variants

```rust
enum IpAddr {
    V4(u8, u8, u8, u8),
    V6(String),
}

let home = IpAddr::V4(127, 0, 0, 1);
let loopback = IpAddr::V6(String::from("::1"));
```

### Struct Variants

```rust
enum Shape {
    Circle { radius: f64 },
    Rectangle { width: f64, height: f64 },
    Point { x: f64, y: f64 },
}

let s = Shape::Circle { radius: 5.0 };
```

### Mixed Variants

```rust
enum Event {
    Click,                           // unit
    KeyPress(char),                  // tuple
    Resize { width: u32, height: u32 },  // struct
}
```

### Enum Memory Layout

The compiler stores a discriminant tag alongside the variant data. The default discriminant type is
The smallest integer that can represent all variants:

```rust
enum Color {
    Red,    // 0
    Green,  // 1
    Blue,   // 2
}
// sizeof(Color) == 1 (tag only, no data)

enum Payload {
    None,               // 0 — no data
    Integer(i64),       // 1 — 8 bytes of data
    Text(String),       // 2 — 24 bytes (ptr + len + cap)
}
// sizeof(Payload) == 32 (8 bytes tag + 24 bytes data, with padding)
```

You can control the discriminant with `#[repr]`:

```rust
#[repr(u8)]
enum Status {
    Ok = 0,
    Err = 1,
    Pending = 2,
}
```

### Enums with Data

Enums that carry data are one of Rust's most powerful features. The standard library's `Option` and
`Result` are both enums:

```rust
enum Option<T> {
    None,
    Some(T),
}

enum Result<T, E> {
    Ok(T),
    Err(E),
}
```

Custom enums with data are equally powerful:

```rust
enum Expr {
    Literal(i64),
    Add(Box<Expr>, Box<Expr>),
    Mul(Box<Expr>, Box<Expr>),
    Var(String),
}

fn eval(expr: &Expr, env: &std::collections::HashMap<String, i64>) -> i64 {
    match expr {
        Expr::Literal(n) => *n,
        Expr::Add(l, r) => eval(l, env) + eval(r, env),
        Expr::Mul(l, r) => eval(l, env) * eval(r, env),
        Expr::Var(name) => env.get(name).copied().unwrap_or(0),
    }
}
```

Note the use of `Box<Expr>` — without boxing, the enum would be infinitely sized because `Expr`
Contains itself recursively.

## Pattern Matching

Pattern matching is Rust's primary control flow mechanism for enums and is exhaustively checked by
The compiler.

### `match` Expressions

```rust
enum Color {
    Red,
    Green,
    Blue,
}

fn color_to_rgb(c: Color) -> (u8, u8, u8) {
    match c {
        Color::Red => (255, 0, 0),
        Color::Green => (0, 255, 0),
        Color::Blue => (0, 0, 255),
    }
}
```

The compiler verifies that every variant is handled. If you add a new variant to `Color`Every
`match` on `Color` will produce a compile error until updated. This is exhaustive pattern matching.

### Match Ergonomics (Rust 2021+)

Match ergonomics automatically add `&` and `ref` patterns when matching through references:

```rust
let c = Color::Red;
let r: &Color = &c;

match r {
    Color::Red => println!("red"),
    // Before match ergonomics: &Color::Red => ...
    // Now: Color::Red => ... (compiler auto-refs)
}
```

### Match Guards

A match guard is an additional `if` condition on a match arm:

```rust
let num = Some(4);

match num {
    Some(x) if x < 5 => println!("less than five: {}", x),
    Some(x) => println!("{}", x),
    None => println!("none"),
}
```

Match guards do not participate in exhaustiveness checking. The compiler cannot prove that a guard
Will always match for a given variant, so you may still need a catch-all arm.

### Binding Modes

#### `ref` — Borrow Instead of Move

```rust
struct Point { x: i32, y: i32 }
let p = Point { x: 1, y: 2 };

match p {
    Point { x: 0, y: 0 } => println!("origin"),
    Point { ref x, ref y } => println!("x={}, y={}", x, y),
    // x and y are &i32, p is not moved
}
```

#### `mut` — Mutable Binding

```rust
let mut v = vec![1, 2, 3];
match v {
    ref mut v => v.push(4),  // borrow v mutably and push
}
assert_eq!(v, vec![1, 2, 3, 4]);
```

#### `@` — At Bindings

The `@` operator binds a value to a name while also testing it against a pattern:

```rust
let age = 15;

match age {
    0 => println!("zero"),
    n @ 1..=12 => println!("child of age {}", n),
    n @ 13..=19 => println!("teenager of age {}", n),
    n => println!("adult of age {}", n),
}
```

This is especially useful when you need to destructure and also capture the whole value:

```rust
enum Value {
    Number(i64),
    Text(String),
}

let v = Value::Number(42);

match v {
    Value::Number(n @ 0..=100) => println!("small number: {}", n),
    Value::Number(n) => println!("large number: {}", n),
    Value::Text(s) => println!("text: {}", s),
}
```

### Range Patterns

```rust
let x = 5;

match x {
    1..=5 => println!("one through five"),
    6..=10 => println!("six through ten"),
    _ => println!("something else"),
}
```

Range patterns only work on numeric types and `char`. They are inclusive on both ends.

### Destructuring Tuples in Matches

```rust
let pair = (2, -2);

match pair {
    (0, y) => println!("x is zero, y is {}", y),
    (x, 0) => println!("x is {}, y is zero", x),
    (x, y) if x == y => println!("equal: {}", x),
    (x, y) => println!("different: {} and {}", x, y),
}
```

### Destructuring Structs in Matches

```rust
struct Point { x: f64, y: f64 }
let p = Point { x: 0.0, y: 7.0 };

match p {
    Point { x: 0.0, y } => println!("on the y-axis at {}", y),
    Point { x, y: 0.0 } => println!("on the x-axis at {}", x),
    Point { x, y } => println!("at ({}, {})", x, y),
}
```

### `if let` — Single Pattern Matching

When you only care about one variant, `if let` is more concise than `match`:

```rust
let some_value = Some(7);

if let Some(n) = some_value {
    println!("value is {}", n);
}
```

`if let` does not check exhaustiveness. The else branch handles all non-matching cases:

```rust
if let Some(n) = some_value {
    println!("value is {}", n);
} else {
    println!("no value");
}
```

### `let-else` (Rust 1.65+)

`let-else` combines pattern matching with early return:

```rust
fn process(data: Option<Vec<i32>>) -> i32 {
    let Some(values) = data else {
        return 0;
    };
    values.iter().sum()
}
```

The `else` block must diverge (return, break, continue, panic, or loop). This is cleaner than the
Equivalent `match` with a single arm and a fallback.

### `while let` — Repeated Pattern Matching

```rust
let mut stack = Vec::new();
stack.push(1);
stack.push(2);
stack.push(3);

while let Some(top) = stack.pop() {
    println!("{}", top);
}
```

`while let` runs the loop body as long as the pattern matches. When it stops matching, the loop
Ends.

### `matches!` Macro

The `matches!` macro is a concise way to check whether a value matches a pattern:

```rust
let x = Some(5);

assert!(matches!(x, Some(5)));
assert!(matches!(x, Some(_)));
assert!(!matches!(x, None));
assert!(matches!(x, Some(n) if n > 3));
```

### `Option` and `Result` Matching

```rust
// Option matching
fn maybe_double(x: Option<i32>) -> Option<i32> {
    match x {
        Some(n) => Some(n * 2),
        None => None,
    }
}

// Result matching
fn parse_int(s: &str) -> Result<i32, std::num::ParseIntError> {
    match s.parse::<i32>() {
        Ok(n) => Ok(n),
        Err(e) => Err(e),
    }
}
```

In practice, you rarely write explicit `match` for `Option` and `Result`. Combinator methods and the
`?` operator are more idiomatic:

```rust
fn maybe_double(x: Option<i32>) -> Option<i32> {
    x.map(|n| n * 2)
}

fn parse_and_double(s: &str) -> Result<i32, std::num::ParseIntError> {
    let n: i32 = s.parse()?;
    Ok(n * 2)
}
```

## Deriving Traits

The `#[derive]` attribute auto-generates implementations for common traits:

```rust
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
struct User {
    id: u64,
    name: String,
    email: String,
}
```

| Trait        | What it generates                                              |
| ------------ | -------------------------------------------------------------- |
| `Debug`      | `fmt::Debug` for `{:?}` formatting                             |
| `Clone`      | `clone()` — deep copy (requires all fields to be `Clone`)      |
| `Copy`       | Implicit bitwise copy (requires `Clone`No `Drop`)              |
| `PartialEq`  | `==` and `!=` — structural equality                            |
| `Eq`         | Marks type as having reflexive equality (requires `PartialEq`) |
| `PartialOrd` | `&lt;``&gt;``&lt;=``&gt;=` — derived from field order          |
| `Ord`        | Total ordering (requires `PartialOrd``Eq`)                     |
| `Hash`       | Hash function for `HashMap`/`HashSet` keys                     |
| `Default`    | Default value (all fields must implement `Default`)            |
:::