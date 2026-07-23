---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "01 Basics", "url": "https://swift.wyattau.com/01-basics"}, {"name": "1_variables And Types", "url": "https://swift.wyattau.com/01-basics/1_variables-and-types"}]
}
</script>
title: Variables and Types
description: "Swift distinguishes between (mutable) and (immutable). Prefer over whenever the  Comprehensive educational content coverage with definitions and practice proble"
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
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "01 Basics", "url": "https://swift.wyattau.com/01-basics"}, {"name": "1_variables And Types", "url": "https://swift.wyattau.com/01-basics/1_variables-and-types"}]
}
</script>

## Variables and Constants

Swift distinguishes between **variables** (mutable) and **constants** (immutable). Prefer `let` over
`var` whenever the value does not need to change.

```swift
let maximumAttempts = 3        // Constant -- cannot be changed
var currentAttempt = 0          // Variable -- can be modified
currentAttempt += 1             // OK

// maximumAttempts = 4           // Error: Cannot assign to "let' constant
```

### Naming Conventions

- Use **camelCase** for variables, functions, and enum cases
- Use **PascalCase** for types (classes, structs, enums, protocols)
- Use descriptive names; avoid single-letter names except for loop indices
- Prefer `is`, `has`, `should` prefixes for boolean properties

```swift
let studentName = "Alice"        // camelCase
let isEnrolled = true            // Boolean prefix
let maxRetryCount = 3            // Descriptive
let JSONData: Data               // Acronyms are uppercased as a word

struct University { }            // PascalCase for types
enum Grade { case honours }       // PascalCase + camelCase
```

## Type Inference

Swift infers types from the value assigned. You can always be explicit when the type is not obvious
or when you need a specific type.

```swift
let inferredInt = 42               // Int
let inferredDouble = 3.14          // Double
let inferredString = "hello"       // String
let inferredBool = true            // Bool

// Explicit types when needed
let version: Float = 3.14          // Float (32-bit, not Double)
let bytes: UInt8 = 255             // Unsigned 8-bit integer
let hex: Int = 0xFF                // Hexadecimal literal
let binary: Int = 0b1010           // Binary literal
let octal: Int = 0o77             // Octal literal
let largeNumber = 1_000_000        // Underscores for readability
```

### Numeric Types

| Type     | Size (bits) | Range                                        |
| -------- | ----------- | -------------------------------------------- |
| `Int8`   | 8           | -128 to 127                                  |
| `Int16`  | 16          | -32,768 to 32,767                            |
| `Int32`  | 32          | -2,147,483,648 to 2,147,483,647              |
| `Int64`  | 64          | -9,223,372,036,854,775,808 to ...            |
| `Int`    | Platform    | Same as `Int64` on 64-bit, `Int32` on 32-bit |
| `UInt`   | Platform    | Unsigned equivalent of `Int`                 |
| `Float`  | 32          | 6 decimal digits precision                   |
| `Double` | 64          | 15 decimal digits precision                  |

```swift
// Type conversion -- must be explicit
let integer = 42
let double = Double(integer)       // 42.0
let backToInt = Int(double)        // 42

let pi = 3.14159
let truncated = Int(pi)            // 3 (truncation, not rounding)

// Safe conversion
let tooBig: Int16 = 40000
// let fits: Int8 = Int8(tooBig)    // Error: crash at runtime if overflow
let safe: Int8? = Int8(exactly: tooBig)  // nil (safe, returns optional)
```

## Booleans

Swift's `Bool` type has only `true` and `false`. It does not implicitly convert from integers.

```swift
let isActive = true
let isDeleted = false

// Booleans in conditions -- must be Bool, not Int
if isActive {
    print("User is active")
}

// Bool methods
let result = isActive && !isDeleted       // true
let either = isActive || isDeleted         // true
let flipped = isActive.toggle()             // false (mutates in place)
```

## Tuples

Tuples group multiple values into a single compound value. They are useful for returning multiple
values from a function.

```swift
// Basic tuple
let httpStatus = (200, "OK")
print(httpStatus.0)                        // 200
print(httpStatus.1)                        // OK

// Named elements
let error = (code: 404, message: "Not Found")
print(error.code)                         // 404
print(error.message)                      // Not Found

// Decomposition
let (statusCode, statusMessage) = httpStatus
print(statusCode)                         // 200

// Partial decomposition with _
let (code, _) = error
print(code)                               // 404

// Tuples as return types
func minMax(_ array: [Int]) -> (min: Int, max: Int)? {
    guard let first = array.first else { return nil }
    var currentMin = first
    var currentMax = first
    for value in array {
        if value < currentMin { currentMin = value }
        if value > currentMax { currentMax = value }
    }
    return (currentMin, currentMax)
}

if let result = minMax([3, 7, 1, 9, 4]) {
    print("Min: \(result.min), Max: \(result.max)")
    // Min: 1, Max: 9
}
```

## Optionals

Optionals are Swift's mechanism for representing the absence of a value. A variable of type `T?` can
hold either a value of type `T` or `nil`.

### Declaration and Usage

```swift
var name: String? = "Alice"
name = nil               // Valid for optionals

var age: Int?             // Automatically initialised to nil

// Non-optional cannot be nil
// var required: String = nil   // Error: "nil'' is not compatible with "String'
```

### Unwrapping Optionals

```swift
var score: Int? = 85

// Forced unwrapping -- dangerous, can crash
let value = score!       // 85, but crashes if score is nil

// Optional binding with if let
if let unwrapped = score {
    print("Score is \(unwrapped)")
}

// Multiple optional bindings
let nickname: String? = "Ally"
if let s = score, let n = nickname {
    print("\(n) scored \(s)")
}

// Shorthand (Swift 5.7+) -- same name as the optional
if let score {
    print("Score is \(score)")
}

// guard let -- preferred for early exits
func process(score: Int?) {
    guard let score else {
        print("No score provided")
        return
    }
    print("Processing score: \(score)")
}

// Optional chaining
struct Person {
    var address: Address?
}
struct Address {
    var street: String?
}

let person = Person(address: Address(street: "Main St"))
let street = person.address?.street  // String? ("Main St")
let missing = Person().address?.street  // nil
```

### nil Coalescing Operator

```swift
let defaultColor = "black"
let userColor: String? = nil
let activeColor = userColor ?? defaultColor  // "black"

// Chaining
let config: String?? = "custom"
let final = config ?? "default"     // "custom"

// With function calls
let username = UserDefaults.standard.string(forKey: "username") ?? "Guest"
```

### Optional Map and FlatMap

```swift
let rating: Int? = 4
let doubled = rating.map { $0 * 2 }   // 8

let ratings: [Int?] = [1, nil, 3, nil, 5]
let valid = ratings.compactMap { $0 }  // [1, 3, 5]
```

### Implicitly Unwrapped Optionals

```swift
var outlet: UILabel! = UILabel()    // Assumes non-nil after initialisation
outlet.text = "Hello"               // No need to unwrap

// Still optional at runtime -- can be nil
// outlet = nil
// outlet.text = "Hello"  // Crash if nil
```

## Collections

### Arrays

Arrays are **ordered, zero-indexed** collections of values of the same type.

```swift
// Creation
var numbers = [1, 2, 3, 4, 5]
var empty: [String] = []
var zeroes = Array(repeating: 0, count: 5)

// Type annotation
var names: [String] = ["Alice", "Bob", "Carol"]

// Access and modification
numbers.append(6)                       // [1, 2, 3, 4, 5, 6]
numbers.insert(0, at: 0)                // [0, 1, 2, 3, 4, 5, 6]
numbers.remove(at: 0)                    // [1, 2, 3, 4, 5, 6]
numbers[0] = 10                         // [10, 2, 3, 4, 5, 6]
numbers[1...3] = [20, 30]               // [10, 20, 30, 5, 6] (replace range)

// Properties
numbers.count                           // 5
numbers.isEmpty                         // false
numbers.capacity                        // Implementation detail (allocated space)

// Iteration
for number in numbers {
    print(number)
}

for (index, number) in numbers.enumerated() {
    print("\(index): \(number)")
}

// Sorting
var unsorted = [5, 2, 8, 1, 9]
unsorted.sort()                         // In-place: [1, 2, 5, 8, 9]
let sorted = unsorted.sorted(by: >)     // New array: [9, 8, 5, 2, 1]

// Searching
let found = numbers.contains(20)        // true
let index = numbers.firstIndex(of: 30) // Int? -- index of first match
let first = numbers.first               // 10 (Int?, nil if empty)

// Higher-order functions
let squares = numbers.map { $0 * $0 }   // [100, 400, 900, 25, 36]
let evens = numbers.filter { $0 % 2 == 0 }  // [10, 20, 30, 6]
let total = numbers.reduce(0, +)       // 71
let firstOver10 = numbers.first { $0 > 10 } // 20

// flatMap for nested arrays
let nested = [[1, 2], [3, 4], [5]]
let flat = nested.flatMap { $0 }       // [1, 2, 3, 4, 5]
```

### Dictionaries

Dictionaries store **key-value pairs** with unique keys and unordered storage.

```swift
// Creation
var scores = ["Alice": 95, "Bob": 87, "Carol": 92]
var empty: [String: Int] = [:]

// Access and modification
scores["Dave"] = 78                     // Add new key-value
scores["Alice"] = 98                    // Update existing
scores.updateValue(100, forKey: "Bob")  // Update (returns old value)
let removed = scores.removeValue(forKey: "Carol")  // Remove (returns old value)

// Access -- returns optional
let aliceScore = scores["Alice"]        // Int? (95)
let missing = scores["Eve"]             // nil

// Iteration
for (name, score) in scores {
    print("\(name): \(score)")
}

for name in scores.keys {
    print(name)
}

for score in scores.values {
    print(score)
}

// Transforming
let names = Array(scores.keys.sorted())       // ["Alice", "Bob", "Dave"]
let doubledScores = scores.mapValues { $0 * 2 }  // ["Alice": 196, "Bob": 174, ...]

// Merging
var defaults = ["theme": "light", "fontSize": 14]
var userPrefs = ["fontSize": 18]
userPrefs.merge(defaults) { (_, new) in new }  // Use new value for conflicts

// Grouping with Dictionary(grouping:)
let words = ["apple", "banana", "avocado", "blueberry", "cherry"]
let grouped = Dictionary(grouping: words, by: { $0.first! })
// ["a": ["apple", "avocado"], "b": ["banana", "blueberry"], "c": ["cherry"]]
```

### Sets

Sets are **unordered collections** of **unique values**. They must conform to `Hashable`.

```swift
// Creation
var genres: Set<String> = ["Rock", "Jazz", "Pop"]
var numbers: Set<Int> = [1, 2, 3, 2, 1]   // {1, 2, 3} (duplicates removed)

// Operations
genres.insert("Classical")                   // Insert
genres.remove("Pop")                         // Remove
genres.contains("Jazz")                      // true

// Set operations
let a: Set = [1, 2, 3, 4]
let b: Set = [3, 4, 5, 6]

a.union(b)              // {1, 2, 3, 4, 5, 6}
a.intersection(b)       // {3, 4}
a.symmetricDifference(b)// {1, 2, 5, 6}
a.subtracting(b)        // {1, 2}

// Set relationships
a.isSubset(of: b)       // false
a.isSuperset(of: b)     // false
a.isDisjoint(with: b)   // false
```

## Control Flow

### Conditional Statements

```swift
let temperature = 25

// if / else if / else
if temperature > 30 {
    print("Hot")
} else if temperature > 20 {
    print("Warm")
} else {
    print("Cold")
}

// Ternary operator
let status = temperature > 30 ? "hot" : "comfortable"

// Switch -- must be exhaustive
switch temperature {
case ..<0:
    print("Freezing")
case 0..<15:
    print("Cold")
case 15..<25:
    print("Comfortable")
case 25...35:
    print("Warm")
default:
    print("Hot")
}

// Switch with pattern matching
let point = (x: 2, y: -3)
switch point {
case (0, 0):
    print("Origin")
case (_, 0):
    print("On x-axis")
case (0, _):
    print("On y-axis")
case (-2...2, -2...2):
    print("Close to origin")
case let (x, y) where x == y:
    print("On y = x")
default:
    print("Somewhere else")
}

// Switch on ranges
let character: Character = "a"
switch character {
case "a"..."z":
    print("Lowercase letter")
case "A"..."Z":
    print("Uppercase letter")
default:
    print("Not a letter")
}
```

### Loops

```swift
// For-in loop
for i in 1...5 {
    print(i)              // 1, 2, 3, 4, 5
}

for i in 1..<5 {
    print(i)              // 1, 2, 3, 4
}

for i in stride(from: 0, to: 10, by: 2) {
    print(i)              // 0, 2, 4, 6, 8
}

for i in stride(from: 10, through: 0, by: -1) {
    print(i)              // 10, 9, ..., 0
}

// While loop
var count = 5
while count > 0 {
    print(count)
    count -= 1
}

// Repeat-while (do-while equivalent)
var input = ""
repeat {
    print("Enter a number")
    // input = readLine() ?? ""
} while input.isEmpty

// Labeled statements for nested loops
outerLoop: for i in 1...3 {
    for j in 1...3 {
        if i == 2 && j == 2 {
            break outerLoop
        }
        print("\(i), \(j)")
    }
}

// where clause in for loops
let numbers: [Int?] = [1, nil, 3, nil, 5, 6, nil]
for case let number? in numbers {
    print(number)         // 1, 3, 5, 6
}
```

### Guard Statement

`guard` ensures conditions are met early, keeping the "happy path" unindented.

```swift
func processOrder(quantity: Int, price: Double, customerName: String?) {
    guard quantity > 0 else {
        print("Invalid quantity")
        return
    }

    guard price > 0 else {
        print("Invalid price")
        return
    }

    guard let name = customerName, !name.isEmpty else {
        print("Customer name required")
        return
    }

    let total = Double(quantity) * price
    print("Order for \(name): \(quantity) x $\(price) = $\(total)")
}
```

## Strings

Strings are **value types** (copied on assignment) and are **Unicode-correct** by default.

### String Basics

```swift
let greeting = "Hello, World!"
let emptyString = String()

// Multiline string literal
let poem = """
    Two roads diverged in a yellow wood,
    And sorry I could not travel both
    And be one traveler, long I stood
    """

// String interpolation
let name = "Alice"
let age = 30
let message = "My name is \(name) and I am \(age) years old."

// Extended string delimiters (raw strings)
let rawPath = #"C:\Users\name\Documents"#
let escapedQuote = #"He said "hello""#

// String concatenation
var full = "Hello" + " " + "World"
full += "!"

// Character access
for character in "Swift" {
    print(character)     // S, w, i, f, t
}

let chars = Array("Swift")  // ["S", "w", "i", "f", "t"]
```

### String Properties and Methods

```swift
let text = "Hello, Swift Programming!"

text.isEmpty                         // false
text.count                           // 25 (character count, not byte count)
text.hasPrefix("Hello")              // true
text.hasSuffix("ing!")               // true
text.lowercased()                    // "hello, swift programming!"
text.uppercased()                    // "HELLO, SWIFT PROGRAMMING!"
text.trimmingCharacters(in: .whitespaces)

// Substring
let index = text.firstIndex(of: ",")!
let before = text[..<index]          // "Hello"
let after = text[text.index(after: index)...]  // " Swift Programming!"

// Split and join
let parts = text.split(separator: " ")  // ["Hello,", "Swift", "Programming!"]
let joined = parts.joined(separator: "-")  // "Hello,-Swift,-Programming!"

// Replace
let cleaned = text.replacingOccurrences(of: "Swift", with: "Rust")
```

### String Indices

Swift strings use `String.Index` for safe character access (not plain integers).

```swift
let str = "Hello, World!"
let startIndex = str.startIndex     // First character position
let endIndex = str.endIndex         // Position after last character

str[startIndex]                      // "H"
str[str.index(before: endIndex)]     // "!"

let commaIndex = str.firstIndex(of: ",")!
str[str.index(after: commaIndex)]    // " " (space after comma)

// Subscripting with range
let range = str[str.startIndex..<str.index(str.startIndex, offsetBy: 5)]
// "Hello"

// Find and replace
if let range = str.range(of: "World") {
    let replaced = str.replacingCharacters(in: range, with: "Swift")
    // "Hello, Swift!"
}
```

## Type Casting

Swift provides safe type casting with `as?`, `as!`, and `is`.

```swift
class Animal { let name: String; init(name: String) { self.name = name } }
class Dog: Animal { func bark() { print("Woof!") } }
class Cat: Animal { func meow() { print("Meow!") } }

let pets: [Animal] = [Dog(name: "Rex"), Cat(name: "Whiskers"), Dog(name: "Buddy")]

for pet in pets {
    if let dog = pet as? Dog {
        dog.bark()
    } else if let cat = pet as? Cat {
        cat.meow()
    }
}

// Type checking
for pet in pets {
    if pet is Dog {
        print("\(pet.name) is a dog")
    }
}

// Any and AnyObject
var things: [Any] = [42, "hello", true, Dog(name: "Rex")]

for thing in things {
    switch thing {
    case let number as Int:
        print("Integer: \(number)")
    case let text as String:
        print("String: \(text)")
    case let dog as Dog:
        print("Dog: \(dog.name)")
    default:
        print("Unknown type")
    }
}
```

## Type Aliases

Type aliases create alternative names for existing types.

```swift
typealias Coordinate = (x: Double, y: Double)
typealias CompletionHandler = (Result<Data, Error>) -> Void
typealias JSONDictionary = [String: Any]

let location: Coordinate = (x: 51.5, y: -0.1)
let handler: CompletionHandler = { result in
    switch result {
    case .success(let data): print("Received \(data.count) bytes")
    case .failure(let error): print("Error: \(error)")
    }
}
```

## Intuition

Swift's type inference is like a smart assistant who figures out what you mean without you having to explain everything. When you write let x = 5, Swift knows x is an Int without you saying so. This is like a friend who understands your shorthand: you say grab the thing, and they know exactly which thing you mean.

Constants with let are like promises. Once you set a constant, you are promising not to change it. This is not just a suggestion; the compiler enforces it. Using let when you do not need to change a value is like writing a contract that prevents future accidents.

## Worked Examples

### Example 1: Safe Optional Chain with Result

**Problem:** Write a function that safely extracts a nested value from a dictionary of type `[String: Any]`, returning a `Result` type.

```swift
func extractString(from dict: [String: Any], keyPath: String) -> Result<String, ExtractionError> {
    let keys = keyPath.split(separator: ".").map(String.init)
    
    var current: Any = dict
    for key in keys {
        guard let nested = current as? [String: Any], let next = nested[key] else {
            return .failure(.keyNotFound(key))
        }
        current = next
    }
    
    guard let result = current as? String else {
        return .failure(.typeMismatch(expected: "String", actual: String(describing: type(of: current))))
    }
    
    return .success(result)
}

enum ExtractionError: Error {
    case keyNotFound(String)
    case typeMismatch(expected: String, actual: String)
}

let data: [String: Any] = [
    "user": [
        "profile": [
            "name": "Alice"
        ]
    ]
]

let result = extractString(from: data, keyPath: "user.profile.name")
switch result {
case .success(let name): print("Name: \(name)")
case .failure(let error): print("Error: \(error)")
}
// Name: Alice
```

**Explanation:** The function splits the key path by "." and traverses nested dictionaries. Each cast to `[String: Any]` is guarded with optional binding. The `Result` type makes error handling explicit without exceptions.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "01 Basics", "url": "https://swift.wyattau.com/01-basics"}, {"name": "1_variables And Types", "url": "https://swift.wyattau.com/01-basics/1_variables-and-types"}]
}
</script>

### Example 2: Custom Set Operations

**Problem:** Implement a function that finds the intersection and difference of two arrays, returning unique elements.

```swift
func commonElements<T: Hashable>(_ a: [T], _ b: [T]) -> [T] {
    let setB = Set(b)
    return Array(Set(a).intersection(setB))
}

func onlyInFirst<T: Hashable>(_ a: [T], _ b: [T]) -> [T] {
    let setB = Set(b)
    return Array(Set(a).subtracting(setB))
}

let listA = [1, 2, 3, 4, 5]
let listB = [3, 4, 5, 6, 7]

print(commonElements(listA, listB))  // [3, 4, 5] (order may vary)
print(onlyInFirst(listA, listB))     // [1, 2] (order may vary)
```

**Explanation:** Converting to `Set` enables O(1) lookups. `intersection` finds shared elements, `subtracting` finds elements in the first set but not the second. Converting back to `Array` preserves the original return type convention.

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "swift", "url": "https://swift.wyattau.com"}, {"name": "01 Basics", "url": "https://swift.wyattau.com/01-basics"}, {"name": "1_variables And Types", "url": "https://swift.wyattau.com/01-basics/1_variables-and-types"}]
}
</script>

### Example 3: Enum-Driven UI State

**Problem:** Model a view's loading state using an enum with associated values, then use pattern matching in SwiftUI.

```swift
enum LoadState<T> {
    case idle
    case loading(progress: Double)
    case loaded(T)
    case failed(Error)
}

struct DataView: View {
    @State private var state: LoadState<[String]> = .idle
    
    var body: some View {
        VStack {
            switch state {
            case .idle:
                Text("Tap to load")
            case .loading(let progress):
                ProgressView(value: progress)
                Text("Loading: \(Int(progress * 100))%")
            case .loaded(let items):
                List(items, id: \.self) { Text($0) }
            case .failed(let error):
                VStack {
                    Image(systemName: "exclamationmark.triangle")
                    Text(error.localizedDescription)
                }
            }
        }
    }
}
```

**Explanation:** The generic `LoadState<T>` enum captures all possible states with their associated data. SwiftUI's `switch` statement handles each case exhaustively. This pattern eliminates optional unwrapping and makes state transitions explicit and type-safe.

## Common Mistakes

**Using `var` where `let` would suffice.** Swift encourages immutability. Using `let` for constants that do not change makes code safer and more readable. The compiler enforces that `let` constants cannot be reassigned, preventing accidental mutations. Prefer `let` over `var` whenever the value does not need to change.

**Confusing `==` with `===`.** The `==` operator checks value equality (are the contents the same?), while `===` checks reference identity (are they the same object in memory?). For structs, `==` compares all stored properties. For classes, `==` compares values only if `Equatable` is conformed; `===` checks if two references point to the same instance.

**Forgetting that Swift arrays are value types.** When you assign an array to a new variable, it is copied. Modifying the copy does not affect the original. This is different from Objective-C's `NSArray` which uses reference semantics. If you need shared mutable state, use a class or a reference wrapper.

## Cross-References

- [Functions](/swift/02-functions-closures/1_functions) - How optionals integrate with function return types and error handling
- [Error Handling](/swift/04-advanced/1_error-handling) - How try/try?/try! interact with optional types
- [Classes and Structs](/swift/03-oop/1_classes-and-structs) - How value types and reference types affect variable semantics
