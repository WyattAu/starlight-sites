---
title: "Elixir Glossary — Key Terms and Definitions"
description: "Study notes for Elixir Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Elixir Fundamentals

**Elixir**: A functional language built on the Erlang VM (BEAM), combining functional programming with concurrency, fault tolerance, and distribution.

**BEAM**: The Erlang Virtual Machine that executes Elixir and Erlang code, managing processes, scheduling, and distribution.

**Mix**: Elixir's build tool and project scaffolding utility. Creates, compiles, tests, and manages dependencies.

**Hex**: Elixir's package manager, distributing libraries and dependencies.

**IEx**: Interactive Elixir, a REPL for experimenting with code.

**ExUnit**: Elixir's built-in test framework using `test` macros and `assert`/`refute`.

**Compile-Time**: Elixir macros and code generation happen at compile time, before the program runs.

**Runtime**: The period when the program is executing.

**Expression**: Everything in Elixir is an expression that returns a value.

## Data Types

**Atom**: A constant whose name is its value: `:ok`, `:error`, `:not_found`. Lightweight and fast to compare.

**Tuple**: An ordered, fixed-size collection of values: `{:ok, data}`, `{:error, reason}`.

**List**: A singly-linked list, immutable. `[1, 2, 3]`. Good for prepending, poor for random access.

**Map**: An unordered key-value collection: `%{name: "Alice", age: 30}`.

**Keyword List**: A list of two-element tuples where the first element is an atom: `[name: "Alice", age: 30]`.

**Binary**: A sequence of bytes: `<<1, 2, 3>>`.

**String**: A UTF-8 encoded binary.

**Integer**: Whole numbers, arbitrary precision.

**Float**: Floating-point numbers.

**Struct**: A map with a fixed set of keys and a `__struct__` field, defined with `defstruct`.

**Bitstring**: A sequence of bits, enabling binary protocol parsing.

## Pattern Matching

**Match Operator (=)**: Destructures data on the left from values on the right: `{a, b} = {1, 2}` binds `a` to 1.

**Pin Operator (^)**: Prevents rebinding in pattern matching: `^x = value` matches only if value equals the current x.

**Destructuring**: Extracting values from tuples, lists, maps, and structs using pattern matching.

**Case Expression**: Matches a value against multiple patterns: `case x do {:ok, v} -> v; :error -> nil end`.

**Cond Expression**: Tests multiple conditions sequentially, executing the first truthy one.

**With Construct**: Chains operations that may fail, pattern-matching each step against the expected success case.

```elixir
with {:ok, data} <- fetch(url),
     {:ok, parsed} <- parse(data) do
  {:ok, parsed}
end
```

## Functions

**Named Function**: Defined with `def` inside a module: `def add(a, b), do: a + b`.

**Anonymous Function**: Defined with `fn`: `fn x -> x * 2 end`.

**Function Clause**: Multiple function heads with different pattern-matched arguments.

**Guard**: Additional conditions on function clauses: `def absolute(x) when x >= 0, do: x`.

**Default Arguments**: Parameters with fallback values: `def greet(name, greeting \\ "Hello")`.

**Capture Operator (&)**: Shorthand for creating functions: `&(&1 + 1)` is equivalent to `fn x -> x + 1 end`.

**Pipeline Operator (|>)**: Passes the result of the left expression as the first argument to the right function.

```elixir
data |> fetch() |> parse() |> save()
```

**Private Function**: Defined with `defp`, callable only within the same module.

## Modules and Attributes

**Module**: A namespace for functions and data, defined with `defmodule`.

**Module Attribute**: A compile-time constant stored in the module: `@name "Alice"`.

**@doc**: Module attribute for documenting functions.

**@spec**: Module attribute for type specifications.

**@behaviour**: Declares that a module implements a behaviour (interface).

**@derive**: Generates protocol implementations for structs automatically.

**@moduledoc**: Module-level documentation.

**Import**: Brings specific functions into scope: `import Enum, only: [map: 2, filter: 2]`.

**Alias**: Creates an alias for a module: `alias MyModule.LongName, as: Short`.

**Use**: Invokes a module's `__using__` macro, importing functionality: `use ExUnit.Case`.

## Processes and Concurrency

**Process**: A lightweight, isolated execution context managed by the BEAM. Each has its own heap and stack.

**spawn**: Creates a new process that executes a function: `spawn(fn -> IO.puts("hello") end)`.

**Send (!)**: Sends a message to a process: `send(pid, {:hello, self()})`.

**Receive**: Receives messages from a process's mailbox, pattern-matching on the message shape.

**PID**: Process Identifier. Unique reference to a process.

**Process Linking**: Linking processes so that when one crashes, the linked process is notified.

**Process Monitoring**: Observing another process's lifecycle without being linked to it.

**Message Passing**: The primary communication mechanism between processes. No shared memory.

**Selective Receive**: Using pattern matching in `receive` to process specific messages.

## OTP

**OTP (Open Telecom Platform)**: A set of libraries and behaviours for building fault-tolerant applications.

**GenServer**: A generic server behaviour providing synchronous (`handle_call`) and asynchronous (`handle_cast`) message handling with state.

**Supervisor**: A process that monitors child processes and restarts them when they crash, using strategies like `:one_for_one`.

**Application**: The unit of deployment. An application module defines `start/2` and manages a supervision tree.

**Supervision Tree**: A hierarchy of supervisors and workers providing fault tolerance through the "let it crash" philosophy.

**Behaviour**: An interface contract (like `GenServer`, `GenEvent`, `GenStateMachine`) that modules can implement.

**ETS (Erlang Term Storage)**: An in-memory key-value store supporting concurrent access.

**Mnesia**: A distributed database built into Erlang, supporting transactions and replication.

**Task**: A behaviour for running async operations that may be monitored or awaited.

**Agent**: A simple process for maintaining and accessing state.

## Phoenix Framework

**Phoenix**: Elixir's web framework, following MVC with real-time capabilities.

**Router**: Maps HTTP methods and URLs to controller actions.

**Controller**: Handles HTTP requests, interacts with models, and renders responses.

**View**: Renders templates and provides helper functions for views.

**Template**: HTML templates with embedded Elixir code.

**Ecto**: Phoenix's database layer. Schemas map tables to structs; changesets validate and cast data.

**Changeset**: An Ecto structure for filtering, casting, and validating data before persistence.

**Channel**: WebSocket-based real-time communication between server and clients.

**LiveView**: Server-rendered, real-time UI without JavaScript. Handles events on the server and pushes updates over WebSocket.

**PubSub**: Phoenix's publish-subscribe system for broadcasting events.

**Presence**: Tracks which users are connected in real-time.

## Related Terms

- See [Ruby Glossary](glossary) for syntax comparison
- See [Go Glossary](glossary) for concurrency comparison
- See [Haskell Glossary](glossary) for functional programming comparison
- See [Programming Glossary](glossary) for general programming concepts
- See [Computer Science Glossary](glossary) for CS fundamentals
