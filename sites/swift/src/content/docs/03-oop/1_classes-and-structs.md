---
title: Classes and Structs
description: "Swift provides both (reference types) and (value types). The choice between them Comprehensive educational content coverage with definitions and practice proble"
date: 2026-06-04T10:00:00.000Z
tags:
  - Swift
categories:
  - Swift

---

## Classes vs Structs

Swift provides both **classes** (reference types) and **structs** (value types). The choice between
them is a fundamental design decision.

| Feature         | Struct                      | Class                           |
| --------------- | --------------------------- | ------------------------------- |
| Type            | Value type                  | Reference type                  |
| Assignment      | Copied                      | Shared reference                |
| Inheritance     | No                          | Yes                             |
| Deinitialiser   | No                          | Yes (`deinit`)                  |
| Mutability      | Must use `var` + `mutating` | Properties always mutable       |
| Memory          | Stack (usually)             | Heap (ARC)                      |
| Identity        | No (`==` compares values)   | Yes (`===` compares references) |
| Implicit `init` | Yes (memberwise)            | No                              |

### Choosing Between Struct and Class

Use **structs** by default. Switch to **classes** when you need:

- Inheritance
- Shared mutable state (identity semantics)
- Objective-C interoperability
- Deinitialisation (`deinit`)

```swift
// Struct -- value type
struct Point {
    var x: Double
    var y: Double
}

var p1 = Point(x: 1.0, y: 2.0)
var p2 = p1          // Copy
p2.x = 10.0
print(p1.x)          // 1.0 (unchanged)

// Class -- reference type
class Dog {
    var name: String
    init(name: String) { self.name = name }
}

var d1 = Dog(name: "Rex")
var d2 = d1           // Same reference
d2.name = "Buddy"
print(d1.name)        // Buddy (changed)
print(d1 === d2)      // true (same object)
```

## Properties

### Stored Properties

```swift
struct Rectangle {
    var width: Double
    var height: Double

    // Lazy stored property -- initialised on first access
    lazy var area: Double = width * height
}

var rect = Rectangle(width: 10, height: 5)
print(rect.area)     // 50.0 (computed now)
```

### Computed Properties

```swift
struct Circle {
    var radius: Double

    // Read-only computed property
    var diameter: Double { radius * 2 }

    // Read-write computed property
    var circumference: Double {
        get { 2 * .pi * radius }
        set { radius = newValue / (2 * .pi) }
    }

    // Computed property with observer is NOT allowed
}

var circle = Circle(radius: 5)
print(circle.circumference)  // 31.4159...
circle.circumference = 62.83
print(circle.radius)         // 10.0
```

### Property Observers

```swift
class StepCounter {
    var totalSteps: Int = 0 {
        willSet {
            print("About to set to \(newValue)")
        }
        didSet {
            print("Changed from \(oldValue) to \(totalSteps)")
            if totalSteps > 10000 {
                print("Goal reached!")
            }
        }
    }
}

let counter = StepCounter()
counter.totalSteps = 200
// About to set to 200
// Changed from 0 to 200

counter.totalSteps = 10500
// About to set to 10500
// Changed from 200 to 10500
// Goal reached!
```

### Type Properties

```swift
struct Configuration {
    static let apiVersion = "v2"
    static var requestCount = 0

    static func reset() {
        requestCount = 0
    }

    class var description: String { "Configuration \(apiVersion)" }
}
```

## Methods

### Instance Methods

```swift
class Counter {
    var count = 0

    func increment() { count += 1 }
    func increment(by amount: Int) { count += amount }
    func reset() { count = 0 }
}
```

### Mutating Methods (Structs Only)

```swift
struct Point {
    var x: Double
    var y: Double

    mutating func moveBy(dx: Double, dy: Double) {
        x += dx
        y += dy
    }

    mutating func reset() {
        self = Point(x: 0, y: 0)
    }
}

var origin = Point(x: 0, y: 0)
origin.moveBy(dx: 3, dy: 4)
```

### Type Methods

```swift
struct MathHelpers {
    static func factorial(_ n: Int) -> Int {
        guard n > 0 else { return 1 }
        return n * factorial(n - 1)
    }

    static func isPrime(_ n: Int) -> Bool {
        guard n > 1 else { return false }
        for i in 2..<n where i * i <= n {
            if n % i == 0 { return false }
        }
        return true
    }
}
```

## Initialisation

### Memberwise Initialiser (Structs)

```swift
struct Person {
    let name: String
    var age: Int
}

// Auto-generated: Person(name:age:)
let alice = Person(name: "Alice", age: 30)
```

### Custom Initialisers

```swift
class Temperature {
    var celsius: Double

    init(celsius: Double) {
        self.celsius = celsius
    }

    init(fahrenheit: Double) {
        self.celsius = (fahrenheit - 32) * 5 / 9
    }

    init(kelvin: Double) {
        self.celsius = kelvin - 273.15
    }

    convenience init(fromString s: String) {
        if s.hasSuffix("F") {
            let val = Double(s.dropLast()) ?? 0
            self.init(fahrenheit: val)
        } else {
            let val = Double(s) ?? 0
            self.init(celsius: val)
        }
    }
}
```

### Required and Failable Initialisers

```swift
class Animal {
    let species: String

    required init(species: String) {
        self.species = species
    }

    // Failable initialiser
    convenience init?(species: String?) {
        guard let species, !species.isEmpty else { return nil }
        self.init(species: species)
    }
}

class Dog: Animal {
    let breed: String

    init(breed: String) {
        self.breed = breed
        super.init(species: "Dog")
    }

    // Must implement required initialiser
    required init(species: String) {
        self.breed = "Mixed"
        super.init(species: species)
    }
}
```

### Deinitialisation

```swift
class FileManager {
    let filename: String

    init(filename: String) {
        self.filename = filename
        print("Opened \(filename)")
    }

    deinit {
        print("Closed \(filename)")
    }
}

if true {
    let fm = FileManager(filename: "data.txt")
    print("Using file...")
}
// "Closed data.txt" printed automatically when fm goes out of scope
```

## Inheritance

```swift
class Vehicle {
    var speed: Double = 0
    let make: String

    init(make: String) { self.make = make }

    func describe() -> String { "\(make) moving at \(speed) km/h" }

    // Prevent override
    final func typeName() -> String { "Vehicle" }
}

class Car: Vehicle {
    var numberOfDoors: Int

    init(make: String, doors: Int) {
        self.numberOfDoors = doors
        super.init(make: make)
    }

    override func describe() -> String {
        return "\(make) (\(numberOfDoors)-door) at \(speed) km/h"
    }
}

class ElectricCar: Car {
    var batteryLevel: Double = 100

    override func describe() -> String {
        return "\(make) EV at \(speed) km/h (battery: \(batteryLevel)%)"
    }
}

let tesla = ElectricCar(make: "Tesla", doors: 4)
tesla.speed = 80
print(tesla.describe())  // Tesla EV at 80 km/h (battery: 100%)
```

### Overriding Properties

```swift
class Shape {
    var color: String = "black"
}

class ColoredShape: Shape {
    override var color: String {
        didSet {
            print("Color changed to \(color)")
        }
    }
}
```

## Protocols

Protocols define a **blueprint of methods, properties, and requirements** that conforming types must
implement. They are central to Swift"s protocol-oriented programming paradigm.

### Defining Protocols

```swift
protocol Drawable {
    func draw()
}

protocol Resizable {
    var scale: Double { get set }
    func resize(by factor: Double)
}

protocol Identifiable {
    var id: UUID { get }
    var name: String { get }
}

protocol Configurable {
    static var defaultConfiguration: Self { get }
    init(configuration: Self)
}
```

### Protocol Conformance

```swift
protocol ShapeProtocol {
    var area: Double { get }
    func describe() -> String
}

struct Circle: ShapeProtocol {
    var radius: Double

    var area: Double { .pi * radius * radius }

    func describe() -> String {
        return "Circle (r=\(radius), area=\(area))"
    }
}

struct Rectangle: ShapeProtocol {
    var width: Double
    var height: Double

    var area: Double { width * height }

    func describe() -> String {
        return "Rectangle (\(width)x\(height), area=\(area))"
    }
}

// Polymorphism through protocols
let shapes: [ShapeProtocol] = [Circle(radius: 5), Rectangle(width: 4, height: 6)]
for shape in shapes {
    print(shape.describe())
}
```

### Protocol Extensions with Default Implementations

```swift
protocol Loggable {
    var logIdentifier: String { get }
    func log(_ message: String)
}

extension Loggable {
    func log(_ message: String) {
        print("[\(logIdentifier)] \(message)")
    }
}

// Now any type conforming to Loggable gets log() for free
struct UserService: Loggable {
    var logIdentifier: String { "UserService" }
}

let service = UserService()
service.log("User logged in")  // [UserService] User logged in
```

### Protocol Composition

```swift
protocol Named {
    var name: String { get }
}

protocol Aged {
    var age: Int { get }
}

protocol Employee: Named, Aged {
    var department: String { get }
}

func greet(_ person: some Named & Aged) {
    print("Hello, \(person.name). You are \(person.age) years old.")
}
```

### Existential Types (`any` and `some`)

```swift
// any -- existential (type-erased) container
func draw(_ shape: any ShapeProtocol) {
    shape.draw()
}

// some -- opaque type (caller doesn't know the concrete type)
func makeShape() -> some ShapeProtocol {
    return Circle(radius: 5)  // Concrete type hidden from caller
}
```

## Extensions

Extensions add new functionality to **existing types** without subclassing.

```swift
extension Double {
    var isInteger: Bool { self == rounded() }
    var squared: Double { self * self }
    func clamped(to range: ClosedRange<Double>) -> Double {
        return min(max(self, range.lowerBound), range.upperBound)
    }
}

let value = 3.7
print(value.isInteger)  // false
print(value.squared)   // 13.69
print(value.clamped(to: 0...3))  // 3.0

// Extension on String
extension String {
    var isEmail: Bool {
        return self.contains("@") && self.contains(".")
    }

    func masked() -> String {
        guard count > 2 else { return self }
        return String(self.prefix(2)) + String(repeating: "*", count: count - 2)
    }
}

print("hello@example.com".isEmail)  // true
print("secret".masked())             // "se****"
```

### Extensions with Protocol Conformance

```swift
extension Int: Loggable {
    var logIdentifier: String { "Int(\(self))" }
}

5.log("Logging from an integer")
```

## Generics

Generics write **flexible, reusable code** that works with any type while maintaining type safety.

### Generic Functions

```swift
func swapValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

var x = "hello", y = "world"
swapValues(&x, &y)

func firstElement<T>(of array: [T]) -> T? {
    return array.first
}

func identical<T: Equatable>(_ a: T, _ b: T) -> Bool {
    return a == b
}
```

### Generic Types

```swift
struct Stack<Element> {
    private var elements: [Element] = []

    var isEmpty: Bool { elements.isEmpty }
    var top: Element? { elements.last }
    var count: Int { elements.count }

    mutating func push(_ element: Element) {
        elements.append(element)
    }

    mutating func pop() -> Element? {
        return elements.popLast()
    }
}

var intStack = Stack<Int>()
intStack.push(1)
intStack.push(2)
print(intStack.pop())  // 2

var stringStack = Stack<String>()
stringStack.push("hello")
print(stringStack.top)  // Optional("hello")
```

### Generic Constraints

```swift
func findIndex<T: Equatable>(of value: T, in array: [T]) -> Int? {
    for (index, element) in array.enumerated() {
        if element == value { return index }
    }
    return nil
}

// Multiple constraints
protocol Container {
    associatedtype Item
    var count: Int { get }
    subscript(i: Int) -> Item { get }
}

func allItemsMatch<C1: Container, C2: Container>(
    _ c1: C1, _ c2: C2
) -> Bool where C1.Item: Equatable, C1.Item == C2.Item {
    guard c1.count == c2.count else { return false }
    for i in 0..<c1.count {
        if c1[i] != c2[i] { return false }
    }
    return true
}
```

### Associated Types

```swift
protocol IteratorProtocol {
    associatedtype Element
    mutating func next() -> Element?
}

struct CountdownIterator: IteratorProtocol {
    typealias Element = Int
    var current: Int

    mutating func next() -> Int? {
        guard current > 0 else { return nil }
        current -= 1
        return current + 1
    }
}

// some IteratorProtocol
func makeIterator() -> some IteratorProtocol {
    return CountdownIterator(current: 3)
}
```

## Memory Management -- ARC

Automatic Reference Counting (ARC) automatically manages memory for reference types.

### Strong References

```swift
class Person {
    let name: String
    init(name: String) { self.name = name }
    deinit { print("\(name) is being deallocated") }
}

var reference1: Person? = Person(name: "Alice")
// reference1 -> Alice (reference count: 1)
var reference2 = reference1
// reference count: 2
reference1 = nil
// reference count: 1 (still alive)
reference2 = nil
// reference count: 0 -> deallocated, deinit prints
```

### Strong Reference Cycles

```swift
class Person2 {
    let name: String
    var apartment: Apartment?
    init(name: String) { self.name = name }
    deinit { print("\(name) deallocated") }
}

class Apartment {
    let unit: String
    var tenant: Person2?
    init(unit: String) { self.unit = unit }
    deinit { print("Apartment \(unit) deallocated") }
}

// This creates a strong reference cycle
var john: Person2? = Person2(name: "John")
var unit4A: Apartment? = Apartment(unit: "4A")
john?.apartment = unit4A
unit4A?.tenant = john
john = nil
unit4A = nil
// Neither is deallocated -- memory leak!
```

### Resolving Cycles with weak and unowned

```swift
class Person3 {
    let name: String
    weak var apartment: Apartment2?
    init(name: String) { self.name = name }
    deinit { print("\(name) deallocated") }
}

class Apartment2 {
    let unit: String
    unowned let tenant: Person3
    init(unit: String, tenant: Person3) { self.unit = unit; self.tenant = tenant }
    deinit { print("Apartment \(unit) deallocated") }
}

var john2: Person3? = Person3(name: "John")
var unit4B: Apartment2? = Apartment2(unit: "4B", tenant: john2!)
john2?.apartment = unit4B
john2 = nil
unit4B = nil
// Both deallocated correctly
```

### weak vs unowned

- **`weak`**: Optional, reference can become nil at any time. Use when the referenced object might
  be deallocated before the reference.
- **`unowned`**: Non-optional, reference is assumed to never become nil during its lifetime. Use
  when the referenced object outlives the reference. Accessing a deallocated `unowned` reference
  crashes.

```swift
// weak -- use with optional
class Customer {
    weak var card: CreditCard?
}

// unowned -- use when lifecycle is guaranteed
class CreditCard {
    unowned let owner: Customer
    init(owner: Customer) { self.owner = owner }
}
```

## Access Control

| Level         | Same module              | Different module         |
| ------------- | ------------------------ | ------------------------ |
| `open`        | Yes (subclass, override) | Yes (subclass, override) |
| `public`      | Yes                      | Yes (use only)           |
| `internal`    | Yes                      | No                       |
| `fileprivate` | Same file                | No                       |
| `private`     | Same scope               | No                       |

```swift
open class PublicClass {
    public var name: String
    internal var id: String
    fileprivate var secret: String
    private var password: String

    public init(name: String, id: String, secret: String, password: String) {
        self.name = name
        self.id = id
        self.secret = secret
        self.password = password
    }
}
```

## Intuition

Classes and structs in Swift are like different types of buildings. Classes are like old houses with history: they can inherit from other classes, they have reference identities, and they can change over time. Structs are like modern apartments: they are simpler, they are copied when passed around, and they are value types that do not share state.

The choice between class and struct is like the choice between renting and owning. When you pass a class instance around, everyone shares the same house (reference). When you pass a struct around, everyone gets their own copy (value). Choose based on whether you want shared state or independent copies.

## Worked Examples

### Example 1: Protocol-Oriented Network Layer

**Problem:** Design a network layer using protocols and extensions that supports different endpoint types.

```swift
protocol Endpoint {
    var baseURL: String { get }
    var path: String { get }
    var method: HTTPMethod { get }
    var headers: [String: String]? { get }
    var body: Data? { get }
}

extension Endpoint {
    var url: URL? {
        URL(string: baseURL + path)
    }
    var defaultHeaders: [String: String] {
        ["Content-Type": "application/json"]
    }
}

enum HTTPMethod: String {
    case get = "GET"
    case post = "POST"
    case put = "PUT"
    case delete = "DELETE"
}

struct UserEndpoint: Endpoint {
    let baseURL = "https://api.example.com"
    let path: String
    let method: HTTPMethod = .get
    var headers: [String: String]? = nil
    var body: Data? = nil
    
    static func fetch(id: Int) -> UserEndpoint {
        UserEndpoint(path: "/users/\(id)")
    }
    
    static func create(name: String, email: String) -> UserEndpoint {
        let body = try? JSONEncoder().encode(["name": name, "email": email])
        return UserEndpoint(path: "/users", method: .post, body: body)
    }
}

struct APIClient {
    func request<T: Decodable>(_ endpoint: Endpoint) async throws -> T {
        var request = URLRequest(url: endpoint.url!)
        request.httpMethod = endpoint.method.rawValue
        request.allHTTPHeaderFields = endpoint.defaultHeaders.merging(endpoint.headers ?? [:]) { _, new in new }
        request.httpBody = endpoint.body
        
        let (data, _) = try await URLSession.shared.data(for: request)
        return try JSONDecoder().decode(T.self, from: data)
    }
}
```

**Explanation:** The `Endpoint` protocol defines the contract for API endpoints. Extensions provide default implementations for `url` and `defaultHeaders`. Concrete endpoint types conform to the protocol and customize their configuration. The `APIClient` is generic over the response type.

---

### Example 2: Value Type with Copy-on-Write

**Problem:** Implement a custom collection type that demonstrates copy-on-write semantics.

```swift
struct UniqueCollection<Element: Equatable> {
    private var storage: [Element]
    
    init(_ elements: [Element] = []) {
        storage = elements
    }
    
    mutating func append(_ element: Element) {
        // Ensure unique storage before mutation
        if !isKnownUniquelyReferenced(&storage) {
            storage = storage.map { $0 }
        }
        storage.append(element)
    }
    
    mutating func remove(_ element: Element) {
        if !isKnownUniquelyReferenced(&storage) {
            storage = storage.map { $0 }
        }
        storage.removeAll { $0 == element }
    }
    
    var count: Int { storage.count }
    var isEmpty: Bool { storage.isEmpty }
    subscript(index: Int) -> Element { storage[index] }
}

var a = UniqueCollection([1, 2, 3])
var b = a  // Shared reference (no copy yet)
a.append(4)  // Now a gets its own copy
print(a.count)  // 4
print(b.count)  // 3 (unchanged)
```

**Explanation:** `isKnownUniquelyReferenced` checks if the underlying array has only one reference. If so, mutation is done in-place. If shared, a copy is made first. This gives value type semantics with efficient sharing, similar to Swift's standard library collections.

---

### Example 3: Generic Stack with Protocol Constraint

**Problem:** Implement a generic stack that works with any `Equatable` type, including comparison operations.

```swift
protocol Stackable {
    associatedtype Element
    var isEmpty: Bool { get }
    var peek: Element? { get }
    mutating func push(_ element: Element)
    mutating func pop() -> Element?
}

struct Stack<T: Equatable>: Stackable {
    private var elements: [T] = []
    
    var isEmpty: Bool { elements.isEmpty }
    var peek: T? { elements.last }
    var count: Int { elements.count }
    
    mutating func push(_ element: T) {
        elements.append(element)
    }
    
    mutating func pop() -> T? {
        elements.popLast()
    }
    
    func contains(_ element: T) -> Bool {
        elements.contains(element)
    }
}

var stack = Stack<String>()
stack.push("first")
stack.push("second")
stack.push("third")

print(stack.peek)         // Optional("third")
print(stack.contains("first"))  // true
print(stack.pop())       // Optional("third")
```

**Explanation:** The `Stackable` protocol defines the interface. `Stack<T: Equatable>` constrains `T` to types that support equality comparison, enabling the `contains` method. The internal array handles storage while the public interface exposes stack-specific operations only.

## Common Mistakes

**Using a class when a struct would suffice.** Swift defaults to structs for a reason: value semantics prevent shared mutable state bugs. Only use classes when you need inheritance, reference identity (`===`), or deinitialisers. Most data models, view models, and utility types should be structs.

**Forgetting `mutating` on struct methods that modify properties.** Struct methods that change `self` or any property must be marked `mutating`. Without it, the compiler prevents modification because structs have value semantics. This is a common error when converting class methods to struct methods.

**Confusing `weak` and `unowned` references for memory management.** `weak` references are optional and become `nil` when the referenced object is deallocated. `unowned` references are non-optional and crash if the object is deallocated first. Use `weak` when the referenced object may disappear first; use `unowned` when you are certain it outlives the reference.

## Cross-References

- [Functions](/swift/02-functions-closures/1_functions) - How closures and function types define protocol witness tables
- [Error Handling](/swift/04-advanced/1_error-handling) - How classes and structs implement throwing initializers and methods
- [Concurrency](/swift/04-advanced/2_concurrency) - How actors protect shared mutable state in concurrent class instances
