---
title: "Go Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of Go programming concepts, including goroutines, channels, interfaces, slices, error handling, and the Go toolchain."
date: 2026-07-24
tags: [glossary]
---

## Go Fundamentals

**Go (Golang)**: A statically-typed, compiled language designed at Google for simplicity, concurrency, and fast compilation.

**Go Compiler (go build)**: Compiles Go source code into native machine code binaries.

**Go Modules**: The dependency management system for Go, using `go.mod` and `go.sum` files to declare and verify dependencies.

**Package**: The basic unit of code organization in Go. Each directory is a package; the `main` package produces an executable.

**Import**: Brings packages into scope: `import "fmt"` or grouped imports with `()`.

**Go Run**: Compiles and runs a Go program: `go run main.go`.

**Go fmt**: The built-in code formatter that enforces a single, canonical style.

**Go Vet**: A static analysis tool that catches suspicious constructs and common mistakes.

## Variables and Types

**Short Declaration (`:=`)**: Creates and initializes a variable with type inference: `x := 42`.

**Var**: Declares a variable, optionally with explicit type: `var x int = 42` or `var x = 42`.

**Zero Value**: The default value assigned to variables when no explicit value is provided: `0` for integers, `""` for strings, `false` for bools, `nil` for pointers and interfaces.

**Constants**: Immutable values declared with `const`, resolved at compile time.

**Type Inference**: The compiler deduces types from the right-hand side of declarations.

**Basic Types**: `int`, `int64`, `float64`, `string`, `bool`, `byte`, `rune`.

**String**: An immutable sequence of bytes, UTF-8 encoded. Strings are value types in Go.

**Rune**: An alias for `int32`, representing a Unicode code point.

## Data Structures

**Array**: A fixed-size sequence of elements of the same type. Arrays are value types; copying creates a full copy.

**Slice**: A dynamically-sized, flexible view into an underlying array. Slices have a length (visible elements) and capacity (available elements).

```go
s := []int{1, 2, 3}
s = append(s, 4)
```

**Map**: An unordered collection of key-value pairs. Keys must be comparable types. Accessing a missing key returns the zero value.

```go
m := make(map[string]int)
m["alice"] = 30
```

**Struct**: A composite type grouping named fields. Structs are value types and the closest Go gets to classes.

```go
type User struct {
    Name string
    Age  int
}
```

**Pointer**: A variable that holds the memory address of another value. Go has pointers but no pointer arithmetic.

**New**: Allocates zero-value storage and returns a pointer: `p := new(int)`.

**Make**: Allocates and initializes slices, maps, and channels: `s := make([]int, 0, 10)`.

## Control Flow

**If Statement**: Conditional execution without parentheses. Supports an init statement: `if err := do(); err != nil { }`.

**For Loop**: The only loop construct in Go. Supports traditional `for`, `for range`, and `while`-style loops.

**Switch Statement**: Multi-way branch based on expression values. Cases break automatically; `fallthrough` is explicit.

**Defer**: Schedules a function call to run after the surrounding function returns. Defers execute in LIFO order, commonly used for cleanup.

**Goto**: Transfers control to a labeled statement within the same function. Rarely used in idiomatic Go.

## Functions

**Function**: Defined with `func`, supporting multiple return values, variadic arguments, and named returns.

```go
func divide(a, b float64) (result float64, err error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}
```

**Multiple Return Values**: Functions commonly return `(result, error)` — the caller checks the error.

**Variadic Function**: Accepts a variable number of arguments: `func sum(nums ...int) int`.

**Method**: A function with a receiver parameter, operating on a specific type: `func (u User) Name() string`.

**Closure**: A function that captures variables from its enclosing scope.

**Init Function**: A special function that runs automatically when a package is initialized, before `main`.

## Interfaces

**Interface**: A set of methods that a type must implement. Interfaces are satisfied implicitly — no `implements` keyword needed.

```go
type Writer interface {
    Write([]byte) (int, error)
}
```

**Implicit Satisfaction**: A type implements an interface by having the required methods, without explicitly declaring the relationship.

**Empty Interface (`interface{}` or `any`)**: Accepts any type. Use sparingly — it sacrifices type safety.

**Type Assertion**: Extracts the concrete type from an interface value: `s := i.(string)`.

**Type Switch**: Switches on the type of an interface value: `switch v := i.(type) { case string: ... }`.

**Small Interfaces**: Go convention — interfaces like `io.Reader` and `io.Writer` with a single method are easier to satisfy and compose.

## Concurrency

**Goroutine**: A lightweight, concurrent execution context managed by the Go runtime. Goroutines start with small stacks that grow as needed.

```go
go doWork()
```

**Channel**: A typed conduit for sending and receiving values between goroutines. Channels synchronize sender and receiver.

```go
ch := make(chan int)
ch <- 42
value := <-ch
```

**Buffered Channel**: A channel with a capacity that allows a fixed number of sends without a corresponding receive.

**Select Statement**: Blocks on multiple channel operations and proceeds with the first ready case.

**WaitGroup**: A synchronization primitive that waits for a collection of goroutines to finish.

**Mutex**: A mutual exclusion lock protecting shared data from concurrent access.

**RwLock**: A reader-writer lock allowing multiple concurrent readers or one exclusive writer.

**Atomic Operations**: Hardware-level thread-safe operations without locks: `atomic.AddInt64(&counter, 1)`.

**Context**: Carries cancellation signals, deadlines, and request-scoped values across goroutines.

## Error Handling

**Error Interface**: A built-in interface with a single `Error() string` method. Any type implementing this method is an error.

**Explicit Error Handling**: Every function that can fail returns an `error` as its last return value. The caller checks it.

**Sentinel Errors**: Predefined error values checked with `errors.Is`: `sql.ErrNoRows`, `io.EOF`.

**Error Wrapping**: Adding context to errors with `fmt.Errorf("doing thing: %w", err)`. Preserves the original error chain.

**Errors.Is / Errors.As**: Unwrap error chains to check for specific error types or values.

## Web and Networking

**net/http**: Go's standard library package for HTTP servers and clients.

**Handler**: An interface with a `ServeHTTP` method that handles HTTP requests.

**HandlerFunc**: An adapter that lets an ordinary function serve as an HTTP handler.

**Router**: A multiplexer that maps URL patterns to handlers. `chi` and `gin` are popular third-party routers.

**Middleware**: A function that wraps HTTP handlers, handling cross-cutting concerns like logging and authentication.

**Goroutine-per-Request**: Go's concurrency model for web servers — each request runs in its own goroutine.

## Testing

**Testing Package**: Go's built-in test framework using `Test*` functions and the `testing` package.

**Test Table**: A common pattern where test cases are defined as a slice of structs and iterated over.

**Benchmark**: Performance tests defined with `func BenchmarkXxx(b *testing.B)`.

**Fuzz Testing**: Tests that generate random inputs to find bugs: `func FuzzXxx(f *testing.F)`.

**Coverage**: Measuring test coverage with `go test -cover`.

## Related Terms

- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Rust Glossary](/rust/glossary) for systems language comparison
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
- See [Linux Glossary](/linux/glossary) for Go on Linux
- See [Databases Glossary](/databases/glossary) for Go database access
