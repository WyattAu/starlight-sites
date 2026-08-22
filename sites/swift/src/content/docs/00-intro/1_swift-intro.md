---

title: "Introduction to Swift - Wyatt's Notes"
description: "Swift is a developed by Apple for building applications across all Apple platforms -- iOS, iPadOS, macOS, watchOS, tvOS, and visionOS. It was designed to be"
date: 2026-06-04T10:00:00.000Z
tags:
  - Swift
categories:
  - Swift

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "00 Intro", "url": "https://swift.wyattau.com/00-intro"}, {"name": "1_swift Intro", "url": "https://swift.wyattau.com/00-intro/1_swift-intro"}]
}
</script>

## What Is Swift?

Swift is a **general-purpose, compiled programming language** developed by Apple for building
applications across all Apple platforms -- iOS, iPadOS, macOS, watchOS, tvOS, and visionOS. It was
designed to be safe, fast, and expressive, replacing Objective-C as the primary language for Apple
ecosystem development.

Swift is **open source** (Apache 2.0 licence) and has an active community contributing to its
development on platforms beyond Apple, including Linux and Windows.

## History and Evolution

### Swift 1.0 (2014)

- Announced at WWDC 2014 by Chris Lattner
- Introduced as a modern replacement for Objective-C
- Key design goals: safety (memory management via ARC), speed (LLVM-based compiler), and
  expressiveness (clean syntax)
- Interoperable with Objective-C -- existing Cocoa frameworks were accessible

### Swift 2.0 (2015)

- `guard` statement for early exits
- `error handling` with `throw`, `try`, `catch`
- Protocol extensions with default implementations
- `defer` statement for cleanup
- Availability checking with `@available`

### Swift 3.0 (2016)

- Major syntax changes to improve consistency and readability
- Renamed parameter labels became first-class citizens
- `#keyPath` for type-safe key paths
- Swift on Linux (open source release)
- API Design Guidelines established

### Swift 4.0 (2017)

- `Codable` protocol for JSON and plist serialisation
- `String` became a `Collection` of `Character`
- Multi-line string literals
- Improved `keypaths` with `\.` syntax

### Swift 5.0 (2019)

- **ABI stability** -- Swift standard library is embedded in the OS, binary compatibility across
  Swift versions
- `Result` type in the standard library
- `@dynamicCallable` and `@dynamicMemberLookup`
- Raw strings with `#"..."#`
- `isMultiple(of:)` and other standard library additions

### Swift 5.1 through 5.10

- Property wrappers (`@Published`, `@State`, `@Binding`, `@ObservedObject`, `@EnvironmentObject`)
- Opaque return types (`some View`)
- `@main` attribute for app entry point
- `any` keyword for existential types (Swift 5.6+)
- `if let` shorthand and `switch` on `if` expressions
- Typed throws (Swift 5.9+)
- Macro system (Swift 5.9+)

### Swift 6.0 (2024)

- **Strict concurrency checking** enabled by default
- Complete `Sendable` enforcement
- Region-based isolation for more granular concurrency control
- Improved type system for safer async code
- Bitwise copyable protocol

## Swift vs Other Languages

| Feature           | Swift        | Python      | TypeScript    | Rust        |
| ----------------- | ------------ | ----------- | ------------- | ----------- |
| Type system       | Strong, safe | Dynamic     | Gradual       | Strong      |
| Memory management | ARC          | GC          | GC            | Ownership   |
| Compilation       | Compiled     | Interpreted | Compiled (JS) | Compiled    |
| Concurrency       | async/await  | async/await | async/await   | async/await |
| Primary domain    | Apple        | General     | Web           | Systems     |
| Null safety       | Optionals    | None        | Union/null    | Option      |

## Setting Up the Development Environment

### Installing Xcode

Xcode is the primary IDE for Swift development on Apple platforms. It includes the Swift compiler,
Interface Builder, Instruments for profiling, and the iOS/macOS simulators.

1. Download Xcode from the Mac App Store or developer.apple.com
2. Open Xcode and accept the licence agreement
3. Install the command-line tools: `xcode-select --install`
4. Verify installation: `swift --version`

```bash
$ swift --version
Apple Swift version 5.10
Target: arm64-apple-macosx14.0
```

### Swift Playgrounds

Swift Playgrounds provide an interactive environment for experimenting with Swift code without
creating a full project.

**In Xcode:**

1. File > New > Playground
2. Choose "Blank" for a general playground
3. Write code and see results instantly in the sidebar

**Swift Playgrounds app (iPad):**

- Download from the App Store
- Interactive tutorials and coding challenges built in
- Supports SwiftUI for real-time UI preview

```swift
// Swift Playground example
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello, Swift!")
                .font(.largeTitle)
            Circle()
                .fill(Color.blue)
                .frame(width: 100, height: 100)
        }
    }
}

#Preview {
    ContentView()
}
```

### Creating a New Xcode Project

1. Open Xcode > File > New > Project
2. Select the platform (iOS, macOS, etc.)
3. Choose the template:
   - **App** -- Standard SwiftUI or UIKit application
   - **Framework** -- Reusable library
   - **Command Line Tool** -- Terminal-based Swift program
4. Configure project options:
   - Product Name
   - Team (for signing)
   - Organisation Identifier
   - Interface: SwiftUI or Storyboard
   - Language: Swift
5. Choose a location and click Create

### Swift Command Line Tools

For development on Linux or for server-side Swift, install the Swift toolchain directly:

```bash
## Install Swift on Ubuntu
sudo apt install swift

## Verify
swift --version

# Run a Swift file directly
swift main.swift

# Enter the REPL
swift
```

## Swift Package Manager (SPM)

SPM is Apple"s built-in dependency management and build tool. It integrates with Xcode and works
from the command line.

### Package Structure

```
MyPackage/
  Package.swift          // Package manifest
  Sources/
    MyPackage/
      MyFile.swift
  Tests/
    MyPackageTests/
      MyFileTests.swift
```

### Package.swift Manifest

```swift
// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "MyPackage",
    platforms: [
        .iOS(.v17),
        .macOS(.v14)
    ],
    products: [
        .library(
            name: "MyPackage",
            targets: ["MyPackage"]
        ),
        .executable(
            name: "MyCLI",
            targets: ["MyCLI"]
        )
    ],
    dependencies: [
        .package(url: "https://github.com/apple/swift-argument-parser.git", from: "1.3.0"),
        .package(url: "https://github.com/Alamofire/Alamofire.git", from: "5.8.0"),
    ],
    targets: [
        .target(
            name: "MyPackage",
            dependencies: ["Alamofire"]
        ),
        .executableTarget(
            name: "MyCLI",
            dependencies: [
                "MyPackage",
                .product(name: "ArgumentParser", package: "swift-argument-parser")
            ]
        ),
        .testTarget(
            name: "MyPackageTests",
            dependencies: ["MyPackage"]
        )
    ]
)
```

### Common SPM Commands

```bash
# Create a new package
swift package init --type library
swift package init --type executable

# Build the package
swift build

# Run tests
swift test

# Generate Xcode project
swift package generate-xcodeproj

# Update dependencies
swift package update

# Resolve dependencies
swift package resolve

# Clean build artifacts
swift package clean
```

### Adding Dependencies in Xcode

1. File > Add Package Dependencies
2. Enter the package repository URL
3. Select the version rule (Up to Next Major, Up to Next Minor, or Exact)
4. Choose the products to add to the target

### Creating a Local Swift Package

For modular code within a workspace:

1. File > New > Package
2. Name the package and choose its location
3. Add it as a dependency to your main app target

## Hello World

### Command Line

```swift
// main.swift
print("Hello, World!")

// Variables and constants
let language = "Swift"
var version = 6.0

print("\(language) version \(version)")
// Swift version 6.0

// String interpolation with expressions
let count = 42
print("There are \(count) items. That's \(count % 2 == 0 ? "even" : "odd").")
// There are 42 items. That's even.
```

### SwiftUI App (Swift 5.3+)

```swift
import SwiftUI

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

struct ContentView: View {
    @State private var name = ""

    var body: some View {
        VStack(spacing: 20) {
            Text("Hello, \(name.isEmpty ? "World" : name)!")
                .font(.title)
            TextField("Enter your name", text: $name)
                .textFieldStyle(.roundedBorder)
                .padding()
        }
        .padding()
    }
}
```

## Swift's Design Philosophy

### Safety

Swift eliminates entire categories of bugs at compile time:

- **No null pointer dereference** -- optionals force you to handle the absence of values
- **No buffer overflow** -- array bounds are always checked
- **No uninitialized variables** -- all variables must be initialised before use
- **No integer overflow by default** -- arithmetic operations trap on overflow
- **Memory safety** -- ARC manages memory automatically; strong reference cycles are caught at
  compile time with `@escaping` and lifetime annotations

### Performance

Swift matches or exceeds C++ performance in many benchmarks:

- **LLVM backend** generates highly optimised native code
- **Value semantics** for structs enable optimisations impossible with reference types
- **Copy-on-write** for collections avoids unnecessary data copying
- **Generic specialisation** eliminates the overhead of abstraction
- **Whole-module optimisation** enables cross-function inlining

### Expressiveness

Swift combines the performance of a systems language with the ergonomics of a scripting language:

- **Protocol-oriented programming** enables flexible abstractions without inheritance
- **Property wrappers** encapsulate storage logic cleanly
- **Result builders** create declarative DSLs (used by SwiftUI)
- **Pattern matching** handles complex data decomposition elegantly

## Key Concepts Overview

### Type Safety and Inference

Swift is **type-safe**: every value has a known type at compile time. The compiler infers types when
possible, but you can always be explicit.

```swift
let inferredInt = 42              // Int (inferred)
let explicitDouble: Double = 42   // Double (explicit)
let pi = 3.14159                   // Double (inferred)

// Type mismatch is a compile error
let message: String = 42  // error: cannot convert value of type 'Int' to specified type 'String'
```

### Optionals

Optionals represent the absence of a value, eliminating null pointer errors.

```swift
var name: String? = "Alice"
name = nil  // Valid: optionals can be nil

let length = name?.count  // Int?, not Int
```

### Value Types vs Reference Types

Structs are **value types** (copied on assignment); classes are **reference types** (shared).

```swift
struct Point {
    var x: Int
    var y: Int
}

var a = Point(x: 1, y: 2)
var b = a       // Copy -- independent
b.x = 10
print(a.x)      // 1 (unchanged)
```

### Protocol-Oriented Programming

Swift favours protocols over inheritance for defining shared behaviour.

```swift
protocol Identifiable {
    var id: String { get }
    var displayName: String { get }
}

struct User: Identifiable {
    let id: String
    let displayName: String
}

func greet(_ subject: Identifiable) {
    print("Hello, \(subject.displayName)")
}
```

## Swift Ecosystem

### Major Frameworks

- **SwiftUI** -- Declarative UI framework for all Apple platforms
- **UIKit / AppKit** -- Imperative UI frameworks (pre-SwiftUI, still widely used)
- **Foundation** -- Core utilities (dates, data, networking, JSON)
- **Combine** -- Reactive programming framework (publishers and subscribers)
- **Core Data** -- Object graph and persistence framework
- **ARKit** -- Augmented reality framework
- **Metal** -- Low-level GPU programming

### Popular Third-Party Libraries

| Library                     | Purpose                       |
| --------------------------- | ----------------------------- |
| Alamofire                   | HTTP networking               |
| Kingfisher                  | Image downloading and caching |
| SnapKit                     | Auto Layout DSL               |
| SwiftLint                   | Code style and conventions    |
| SwiftFormat                 | Code formatting               |
| RxSwift                     | Reactive extensions           |
| The Composable Architecture | State management architecture |
| Alamofire                   | HTTP networking               |

### Server-Side Swift

Swift is a capable server-side language with frameworks like:

- **Vapor** -- The most popular web framework for Swift
- **Hummingbird** -- Lightweight, high-performance HTTP server
- **SwiftNIO** -- Apple's async event-driven networking framework (foundation for Vapor)

## Swift Version Compatibility

Use `#if compiler(>=5.9)` and `@available` to handle version differences:

```swift
// Availability checking for OS versions
@available(iOS 17, macOS 14, *)
func useNewAPI() {
    // Code requiring iOS 17+ / macOS 14+
}

// Compiler version checking
#if compiler(>=5.9)
// Swift 5.9+ specific code
func typedThrow() throws(some Error) {
    // ...
}
#else
// Fallback for older versions
#endif
```

## Intuition

Swift is like a safety net under a tightrope. The type system catches errors before your program reaches the user, and the memory management system (ARC) ensures resources are cleaned up automatically. This combination means you can write fast, safe code without worrying about the kinds of bugs that plague lower-level languages.

Optionals in Swift are like a box that might be empty. When you open the box, you must check whether there is something inside before you can use it. This is the compiler's way of forcing you to handle the case where data is missing, preventing the dreaded null pointer exception that crashes other languages.

## Summary

Swift is a modern, safe, and fast programming language designed for the Apple ecosystem but
extending well beyond it. Its combination of protocol-oriented design, value semantics, strong type
safety, and modern concurrency support makes it well-suited for applications ranging from mobile UI
to server-side services.

## Worked Examples

### Example 1: Value Semantics with Structs

**Problem:** Demonstrate how Swift's value types prevent unintended shared state when passing data between functions.

```swift
struct Temperature {
    var celsius: Double
    var fahrenheit: Double {
        get { celsius * 9 / 5 + 32 }
        set { celsius = (newValue - 32) * 5 / 9 }
    }
}

func display(_ temp: Temperature) {
    var local = temp
    local.fahrenheit = 212.0
    print("Inside function: \(local.celsius)°C")
}

let outside = Temperature(celsius: 25.0)
print("Before: \(outside.celsius)°C")  // 25.0
display(outside)
print("After: \(outside.celsius)°C")   // 25.0 (unchanged)
```

**Solution:** Structs are value types in Swift. When `outside` is passed to `display`, it is copied. The modification to `local` inside the function does not affect the original. This prevents accidental mutations and makes code easier to reason about.

**Explanation:** Value semantics mean assignments and function arguments create independent copies. This is the default for structs, enums, and basic types. Classes are reference types where assignments share the same instance. Swift encourages structs for most data modeling because value semantics eliminate entire categories of shared-state bugs.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "00 Intro", "url": "https://swift.wyattau.com/00-intro"}, {"name": "1_swift Intro", "url": "https://swift.wyattau.com/00-intro/1_swift-intro"}]
}
</script>

### Example 2: Optionals for Null Safety

**Problem:** Safely parse a user-supplied string into an integer, handling all failure cases without runtime crashes.

```swift
func parseAge(_ input: String?) -> Int? {
    guard let input, !input.isEmpty else {
        print("Error: input is nil or empty")
        return nil
    }

    guard let age = Int(input) else {
        print("Error: '\(input)' is not a valid number")
        return nil
    }

    guard age >= 0 && age <= 150 else {
        print("Error: \(age) is outside the valid range")
        return nil
    }

    return age
}

let testCases: [String?] = ["25", "abc", "", nil, "200"]
for input in testCases {
    if let age = parseAge(input) {
        print("Valid age: \(age)")
    }
}
// Valid age: 25
// Error: 'abc' is not a valid number
// Error: input is nil or empty
// Error: input is nil or empty
// Error: 200 is outside the valid range
```

**Solution:** Each `guard let` safely unwraps the optional, returning `nil` on failure. The function returns `Int?` to signal success or failure. The caller uses `if let` to handle only the valid case. No force-unwrapping (`!`) is used, so the code cannot crash at runtime.

**Explanation:** Optionals replace null pointers. The compiler enforces that you handle the `nil` case before using the value. `guard let` is preferred over `if let` for early exits, keeping the happy path at the lowest indentation level. This pattern is fundamental to Swift's safety guarantees.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "00 Intro", "url": "https://swift.wyattau.com/00-intro"}, {"name": "1_swift Intro", "url": "https://swift.wyattau.com/00-intro/1_swift-intro"}]
}
</script>

### Example 3: Protocol-Oriented Design

**Problem:** Define a protocol for printable items and extend it with default behavior, allowing any type to adopt the protocol without inheriting from a base class.

```swift
protocol Printable {
    var title: String { get }
    var content: String { get }
    func formatted() -> String
}

extension Printable {
    func formatted() -> String {
        "=== \(title) ===\n\(content)"
    }
}

struct Article: Printable {
    let title: String
    let content: String
}

struct Note: Printable {
    let title: String
    let content: String
}

let items: [any Printable] = [
    Article(title: "Swift Basics", content: "Swift is a safe language."),
    Note(title: "TODO", content: "Learn protocols")
]

for item in items {
    print(item.formatted())
}
// === Swift Basics ===
// Swift is a safe language.
// === TODO ===
// Learn protocols
```

**Solution:** The `Printable` protocol defines a contract with `title`, `content`, and `formatted()`. The extension provides a default implementation of `formatted()`, so conforming types get it for free. Both `Article` and `Note` adopt the protocol without sharing a base class.

**Explanation:** Protocol-oriented programming in Swift favors composition over inheritance. Protocols define behavior contracts, extensions provide default implementations, and value types conform to protocols without class hierarchy constraints. The `any Printable` existential type allows heterogeneous collections while maintaining type safety.

## Common Mistakes

**Force unwrapping optionals with `!` instead of handling them safely.** Force unwrapping crashes the program if the optional is `nil`. Always use optional binding (`if let`, `guard let`), nil coalescing (`??`), or optional chaining (`?.`) to handle optionals safely. Force unwrap should only be used when you are absolutely certain the value exists.

**Confusing value types (structs) with reference types (classes).** Structs are copied on assignment, while classes are shared by reference. Modifying a copy of a struct does not affect the original, but modifying an object through one class reference changes it for all references. This leads to unexpected behaviour when the wrong type is chosen.

**Not handling errors with `try`.** Every throwing function call must be preceded by `try`, `try?`, or `try!`. Forgetting `try` causes a compilation error. Using `try?` silently converts errors to `nil`, which may hide bugs. Use `do/catch` for proper error handling when the error reason matters.

## Cross-References

- [Variables and Types](/swift/01-basics/1_variables-and-types) - Swift's type inference system and optionals that underpin safe coding
- [Functions](/swift/02-functions-closures/1_functions) - How closures and function types enable functional programming patterns
- [Classes and Structs](/swift/03-oop/1_classes-and-structs) - Swift's value and reference type system for object-oriented design
