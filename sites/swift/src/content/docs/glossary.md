---
title: "Swift Glossary — Key Terms and Definitions"
description: "Study notes for Swift Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Swift Fundamentals

**Swift**: Apple's programming language for iOS, macOS, watchOS, and tvOS, combining safety, performance, and modern syntax.

**Xcode**: Apple's IDE for Swift development, providing editing, debugging, and testing tools.

**Swift Package Manager (SPM)**: Apple's built-in dependency manager for Swift projects.

**Playground**: An interactive Swift environment for experimenting with code and visualizing results.

**Swift Compiler**: Compiles Swift source code to optimized machine code for Apple platforms.

**let**: Declares an immutable constant. Preferred over `var` for safety and clarity.

**var**: Declares a mutable variable.

**Type Inference**: The compiler deduces types from context: `let x = 42` infers `Int`.

**String Interpolation**: Embedding values in strings: `"Hello, \(name)"`.

**Multi-Line String**: A string spanning multiple lines, enclosed in triple quotes: `"""..."""`.

## Optionals

**Optional**: A type that can hold either a value or `nil`. Written as `Type?`: `String?` can be null.

**Optional Binding**: Safely unwrapping an optional: `if let name = optionalName { print(name) }`.

**Guard Let**: Unwrapping an optional with an early exit on failure: `guard let name = optionalName else { return }`.

**Optional Chaining**: Chains optional access: `user?.profile?.name`. Returns nil if any part is nil.

**Nil Coalescing (??)**: Provides a default value for optionals: `let name = optionalName ?? "default"`.

**Force Unwrapping (!)**: Unwraps an optional, crashing if nil. Use only when certain the value is non-nil.

**Implicitly Unwrapped Optional**: An optional that is automatically unwrapped, crashing if nil: `var name: String!`.

**Optional Pattern**: Matches optionals in pattern matching: `case let .some(value) = optional`.

## Data Types

**Struct**: A value type with properties and methods. Copying creates an independent instance.

```swift
struct Point {
    var x: Double
    var y: Double
}
```

**Class**: A reference type with properties, methods, and inheritance. Copying shares the same instance.

**Enum**: A type with a fixed set of values, supporting associated values and methods.

```swift
enum Direction {
    case north, south, east, west
}
```

**Tuple**: A lightweight collection of values: `(name: String, age: Int)`.

**Array**: An ordered collection of the same type: `[1, 2, 3]`.

**Set**: An unordered collection of unique values: `Set([1, 2, 3])`.

**Dictionary**: An unordered collection of key-value pairs: `["name": "Alice"]`.

**Range**: A sequence of consecutive values: `1...5` (closed) or `1..<5` (half-open).

## Protocol-Oriented Programming

**Protocol**: Defines a set of requirements (methods, properties) that types must conform to.

```swift
protocol Drawable {
    func draw()
}
```

**Conformance**: A type adopting a protocol by implementing its requirements: `struct Circle: Drawable { func draw() {} }`.

**Protocol Extension**: Provides default implementations for protocol methods, enabling code reuse without inheritance.

**Protocol Composition**: Combining multiple protocols: `func process<T: Codable & Identifiable>(_ item: T)`.

**Associated Type**: A placeholder type within a protocol, specified by the conforming type.

**existential (any Protocol)**: A box that holds any type conforming to a protocol.

**Some (Opaque Return Type)**: Hides the concrete return type while guaranteeing conformance to a protocol.

## Optionals and Error Handling

**Error Protocol**: Defines an error type that can be thrown: `enum MyError: Error { case notFound }`.

**Throw**: Explicitly raises an error: `throw MyError.notFound`.

**Try/Catch**: Handles errors: `do { try riskyOperation() } catch { print(error) }`.

**Result Type**: Represents success or failure: `Result<Data, Error>`.

**Throwing Function**: A function marked with `throws` that can raise errors.

**Try?**: Converts an error to nil: `let value = try? riskyOperation()`.

**Try!**: Force-tries, crashing on error. Use only for infallible operations.

**Guard with Error**: Unwrapping optionals with error throwing: `guard let data = loadData() else { throw MyError.notFound }`.

## Value and Reference Types

**Value Type**: Structs, enums, and tuples. Copying creates independent instances. Preferred in Swift.

**Reference Type**: Classes. Copying shares the same instance.

**Copy-on-Write**: Swift optimizes value types by deferring copies until mutation is needed.

**Identity Operator (===)**: Checks if two references point to the same instance.

**Equality Operator (==)**: Checks if two values are equal.

## Closures

**Closure**: An anonymous function that captures variables from its enclosing scope.

**Trailing Closure**: When the last argument is a closure, written outside parentheses: `array.map { $0 * 2 }`.

**Shorthand Argument Names**: `$0`, `$1`, etc. refer to closure arguments positionally.

**Capture List**: Controls how closures capture variables: `[weak self]` prevents retain cycles.

**Escaping Closure**: A closure that outlives the function it was passed to, marked with `@escaping`.

**Non-Escaping Closure**: The default — a closure that executes within the function scope.

## SwiftUI

**SwiftUI**: Apple's declarative UI framework for building interfaces across all Apple platforms.

**View Protocol**: A type that represents part of the user interface, providing a `body` property.

**@State**: A property wrapper managing view-local mutable state.

**@Binding**: Creates a two-way reference to a parent's state.

**@Observable**: A macro (Swift 5.9+) for making classes observable by SwiftUI, replacing ObservableObject.

**@EnvironmentObject**: Injects shared state objects into the view hierarchy.

**@Environment**: Reads system and environment values.

**@Published**: Marks properties that trigger view updates in ObservableObject.

**NavigationStack**: The modern navigation container replacing NavigationView.

**List**: A container for displaying rows of data.

**ForEach**: Repeats content for each element in a collection.

**Modifier**: A method that configures a view's appearance or behavior: `.padding()`, `.background()`.

## iOS Development

**App Protocol**: Defines the entry point of a SwiftUI app with the `@main` attribute.

**Scene**: Represents a screen in the app (window, tab, etc.).

**Lifecycle**: The stages an app goes through — launch, active, background, terminated.

**SwiftData**: Apple's modern persistence framework, replacing Core Data, using the `@Model` macro.

**Codable**: A protocol for encoding and decoding JSON and other formats. The compiler generates the logic automatically.

**URLSession**: Apple's API for making network requests.

**async/await**: Swift's concurrency model for asynchronous operations.

**Property Wrapper**: A type that adds behavior to properties: `@State`, `@Binding`, `@Published`.

## Concurrency

**async/await**: Functions marked `async` can be paused and resumed. `await` suspends until the async operation completes.

**Actor**: A reference type protecting mutable state. Only one task can access an actor's state at a time.

**Sendable**: A protocol marking types as safe to send across concurrency boundaries.

**Structured Concurrency**: Tasks form a hierarchy. Parent tasks wait for children, preventing leaked tasks.

**TaskGroup**: A container for concurrent child tasks with result collection.

**async let**: Enables concurrent computation within a function.

**Continuation**: Bridges callback-based APIs to async/await: `withCheckedContinuation`.

## Related Terms

- See [Kotlin Glossary](glossary) for mobile development comparison
- See [Dart Glossary](glossary) for cross-platform comparison
- See [TypeScript Glossary](glossary) for language comparison
- See [Programming Glossary](glossary) for general programming concepts
- See [Computer Science Glossary](glossary) for CS fundamentals
