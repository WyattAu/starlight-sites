---
date: 2026-10-19T00:00:00+01:00
title: "Before You Begin: Concurrency and Simplicity in Go"
tags:
  - Go
  - Programming
description: "The transition into Go: goroutines and channels, the CSP model, interfaces without inheritance, error handling without exceptions, and why the language has fewer features by design -- every concept defined before it is used, with the C++/Java/Python intuitions named and upgraded."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "go", "url": "https://go.wyattau.com"}, {"name": "go", "url": "https://go.wyattau.com/go/before-you-begin"}]
}
</script>

Go is designed by subtraction. It has no inheritance, no exceptions, no
implicit type conversions, no function overloading, no unused variables, no
unused imports. Each absence is a design decision: the feature was removed
because it caused more problems than it solved in the languages that had it.
The result is a language where every Go program in a large codebase looks the
same, regardless of who wrote it — and where the compiler is fast enough that
build times are measured in seconds, not minutes.

The prerequisite is basic programming in any language. If you know C++, Java,
or Python, the syntax will feel simple and the philosophy will feel
restrictive — until you encounter the concurrency model, which is the reason
the language exists.

## Intuition

Most languages make concurrency hard. Threads share memory, so you need locks;
locks can deadlock; and the bugs are intermittent, unreproducible, and
catastrophic. Go's concurrency model — **Communicating Sequential Processes**
(CSP) — avoids shared memory by design: goroutines communicate by sending
values over channels, and channels synchronise the send and receive.

The intuition: instead of two workers fighting over one whiteboard (shared
memory + locks), two workers pass notes through a tube (channels). Only one
worker holds a note at a time. No locks needed. The race condition is
impossible by construction, not by discipline.

## 1. Goroutines

**Definition.** A **goroutine** is a lightweight thread managed by the Go
runtime. Create one with the `go` keyword followed by a function call:

```go
package main

import (
    "fmt"
    "time"
)

func say(s string) {
    for i := 0; i < 3; i++ {
        fmt.Println(s)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go say("world")      // runs concurrently
    say("hello")          // runs in the current goroutine
    time.Sleep(500 * time.Millisecond) // give the goroutine time to finish
}
```

**Goroutines are not OS threads.** The Go runtime multiplexes goroutines onto a
smaller number of OS threads (the M:N model). A goroutine starts with a ~2KB
stack that grows and shrinks as needed; an OS thread starts with ~1MB and has
a context-switch cost of microseconds. You can run millions of goroutines on a
laptop.

**The main goroutine.** When `main` returns, the program exits — all running
goroutines are killed. The `time.Sleep` above prevents this, but Sleeping is
not synchronisation: it is a hope. The correct synchronisation primitive is
the channel.

## 2. Channels

**Definition.** A **channel** is a typed conduit through which goroutines send
and receive values. The send `ch <- v` blocks until a receiver is ready; the
receive `v := <-ch` blocks until a sender is ready. The blocking *is* the
synchronisation.

```go
func sum(s []int, ch chan int) {
    total := 0
    for _, v := range s {
        total += v
    }
    ch <- total // send the result to the channel
}

func main() {
    s := []int{7, 2, 8, -9, 4, 0}
    ch := make(chan int)       // unbuffered channel
    go sum(s[:len(s)/2], ch)   // first half in a goroutine
    go sum(s[len(s)/2:], ch)   // second half in another goroutine
    x := <-ch                  // receive from first goroutine (blocks)
    y := <-ch                  // receive from second goroutine
    fmt.Println(x, y, x+y)
}
```

**Buffered channels.** `make(chan int, 5)` creates a channel with a buffer of
5: the send does not block until the buffer is full. This decouples the sender
from the receiver for a bounded number of sends.

**The channel direction.** Channels can be restricted to send-only
(`chan<-`) or receive-only (`<-chan`) in function signatures:

```go
func producer(ch chan<- int) { /* can only send */ }
func consumer(ch <-chan int) { /* can only receive */ }
```

This is compile-time documentation of the data flow, and it prevents the bug
of accidentally sending on a receive-only channel.

## 3. Interfaces without inheritance

**Definition.** An **interface** is a set of method signatures. A type
implements an interface implicitly — no `implements` keyword, no inheritance
hierarchy. If a type has the methods the interface requires, it satisfies the
interface.

```go
type Shape interface {
    Area() float64
}

type Circle struct{ Radius float64 }
func (c Circle) Area() float64 { return 3.14159 * c.Radius * c.Radius }

type Rectangle struct{ W, H float64 }
func (r Rectangle) Area() float64 { return r.W * r.H }
```

`Circle` and `Rectangle` both satisfy `Shape` because they both have an `Area()
float64` method — no declaration needed. A function that takes a `Shape`
accepts both:

```go
func totalArea(shapes []Shape) float64 {
    var total float64
    for _, s := range shapes {
        total += s.Area()
    }
    return total
}
```

**Contrast with Java.** Java requires `class Circle implements Shape` — the
relationship is declared by the class. Go's implicit satisfaction means a type
written for one purpose can satisfy an interface written later, without
modification. This is the reason Go codebases don't have the deep inheritance
hierarchies that Java codebases accumulate: the interface is defined by the
*consumer*, not the producer, so each consumer defines only the methods it
actually needs.

## 4. Error handling without exceptions

**Definition.** Go returns errors as values: `error` is an interface with one
method (`Error() string`), and functions that can fail return a
`(result, error)` pair.

```go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

result, err := divide(10, 3)
if err != nil {
    fmt.Println("Error:", err)
    return
}
fmt.Println("Result:", result)
```

**Contrast with exceptions.** Exceptions make the error path invisible: a
function signature doesn't tell you what errors it can produce, and an
exception can propagate to a caller that doesn't expect it. Go's error values
make the error path visible: the `(result, error)` return signature tells you
the function can fail, and the `if err != nil` check is *required* — the
compiler forces you to handle the error (or explicitly ignore it with `_`).

**Why Go rejected exceptions.** Exceptions add an invisible control-flow path
that makes reasoning about correctness harder: any function call might throw,
so you need to reason about every possible exception at every call site. Go's
error values make the error path visible and forces you to handle it — which
is verbose but correct.

## 5. Self-test

1. What happens when `main` returns while a goroutine is still running? (§1)
2. Write a function that takes a receive-only channel and prints every value
   received until the channel is closed. (§2)
3. Why does Go not need an `implements` keyword? (§3)
4. What is the difference between `error` and `nil`, and why does the `(result,
   error)` pattern work? (§4)
5. What is a buffered channel, and when would you use one? (§2)

**Answers.**
(1) The program exits and all running goroutines are killed — the `main`
goroutine's return is the program's exit. Use a channel or `sync.WaitGroup` to
wait for goroutines to finish.
(2) `func print(ch <-chan int) { for v := range ch { fmt.Println(v) } }` —
the `range` on a channel receives until the channel is closed.
(3) Go uses structural typing for interfaces: a type satisfies an interface
if it has the required methods, regardless of whether the relationship is
declared. No `implements` keyword is needed because the compiler checks the
method set.
(4) `error` is an interface type; `nil` is the zero value meaning "no error."
The `(result, error)` pattern works because the caller must unpack both values
and check `err` before using `result` — the error path is visible in the
function signature.
(5) A buffered channel has an internal queue: sends do not block until the
buffer is full. Use one when the sender and receiver have known rate
differences — e.g., a producer that generates items in bursts and a consumer
that processes them at a steady rate.

## Where to go next

- [The Go Track](/) — the language in full: modules, testing, generics, and the standard library.
- [Concurrency](https://go.wyattau.com/concurrency/) — the deeper treatment of goroutines, channels, the `sync` package, and the race detector.
- [Linux](https://linux.wyattau.com/) — the operating system that Go programs run on and deploy to.
- [Databases](https://databases.wyattau.com/) — the storage layer that Go services connect to.
- [Computer Science Track](https://computer-science.wyattau.com/1-discrete-mathematics/) — the theoretical foundations of the concurrency model.
