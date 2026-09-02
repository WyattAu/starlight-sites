---
title: "C++ Glossary — Key Terms and Definitions"
description: "Study notes for C++ Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## C++ Fundamentals

**Compilation**: The process of translating human-readable C++ source code into machine code that the computer can execute directly.

**Compiler**: A program that translates C++ source code into executable machine code (e.g., GCC, Clang, MSVC).

**Header File**: A file (`.h` or `.hpp`) containing declarations of functions, classes, and variables that can be included in multiple source files.

**Source File**: A file (`.cpp` or `.cc`) containing the implementation of C++ code.

**Namespace**: A declarative region that provides a scope to the identifiers (types, functions, variables) inside it, preventing name conflicts.

```cpp
namespace MyLib {
    void func() { /* ... */ }
}
using namespace MyLib; // Brings MyLib names into scope
```

**Preprocessor**: A program that processes source code before compilation, handling directives like `#include`, `#define`, and `#ifdef`.

**Include Guard**: A mechanism to prevent a header file from being included multiple times, using `#ifndef`, `#define`, and `#endif`.

```cpp
#pragma once // Modern alternative to include guards
```

**Main Function**: The entry point of a C++ program, declared as `int main()` or `int main(int argc, char* argv[])`.

**Standard Template Library (STL)**: A collection of template classes and functions providing common data structures and algorithms.

## Variables and Types

**Variable**: A named storage location in memory that holds a value of a specific type.

**Data Type**: Specifies the kind of value a variable can hold and the operations that can be performed on it.

**Int**: A fundamental data type for storing integer values, typically 4 bytes.

```cpp
int x = 42;
```

**Double**: A fundamental data type for storing double-precision floating-point values (64-bit).

```cpp
double pi = 3.141592653589793;
```

**Float**: A fundamental data type for storing single-precision floating-point values (32-bit).

```cpp
float small = 3.14f;
```

**Char**: A fundamental data type for storing a single character (1 byte).

```cpp
char letter = 'A';
```

**Bool**: A fundamental data type for storing boolean values: `true` or `false`.

```cpp
bool isReady = true;
```

**String**: A class representing a sequence of characters, from the `<string>` header.

```cpp
#include <string>
std::string name = "Hello, World!";
```

**Auto**: A keyword that tells the compiler to deduce the type of a variable from its initializer (C++11).

```cpp
auto x = 10;       // int
auto pi = 3.14;    // double
```

**Const**: A keyword indicating that a variable's value cannot be changed after initialization.

```cpp
const int MAX = 100;
```

**Reference**: An alias for an existing variable, created using the `&` operator.

```cpp
int x = 10;
int& ref = x; // ref is an alias for x
ref = 20;     // x is now 20
```

**Pointer**: A variable that stores the memory address of another variable, created using `*`.

```cpp
int x = 10;
int* ptr = &x; // ptr stores address of x
*ptr = 20;     // x is now 20
```

**Array**: A fixed-size collection of elements of the same type.

```cpp
int arr[5] = {1, 2, 3, 4, 5};
```

**Vector**: A dynamic array from the STL that can resize itself automatically.

```cpp
#include <vector>
std::vector<int> vec = {1, 2, 3, 4, 5};
vec.push_back(6); // Adds 6 to the end
```

## Control Flow

**If Statement**: A conditional statement that executes code based on whether a condition is true.

```cpp
if (condition) {
    // code if true
} else if (otherCondition) {
    // code if other condition is true
} else {
    // code if all conditions are false
}
```

**Switch Statement**: A multi-way branch statement that selects code to execute based on the value of an expression.

```cpp
switch (value) {
    case 1:
        // code for value == 1
        break;
    case 2:
        // code for value == 2
        break;
    default:
        // code for other values
        break;
}
```

**For Loop**: A loop that repeats code a specific number of times or iterates over a range.

```cpp
for (int i = 0; i < 10; i++) {
    // code that repeats 10 times
}
```

**While Loop**: A loop that repeats code as long as a condition is true, checked before each iteration.

```cpp
while (condition) {
    // code that repeats while condition is true
}
```

**Do-While Loop**: A loop that executes code at least once, then repeats as long as a condition is true.

```cpp
do {
    // code executes at least once
} while (condition);
```

**Break Statement**: Exits the nearest enclosing loop or switch statement immediately.

**Continue Statement**: Skips the rest of the current iteration and proceeds to the next iteration of a loop.

**Return Statement**: Exits from a function and optionally returns a value to the caller.

```cpp
int add(int a, int b) {
    return a + b;
}
```

## Functions

**Function**: A reusable block of code that performs a specific task, defined with a return type, name, parameters, and body.

```cpp
int add(int a, int b) {
    return a + b;
}
```

**Function Overloading**: Defining multiple functions with the same name but different parameter lists (different number or types of parameters).

```cpp
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
```

**Inline Function**: A function that the compiler may expand at each call site to reduce function call overhead.

```cpp
inline int square(int x) { return x * x; }
```

**Recursive Function**: A function that calls itself to solve a problem by breaking it into smaller subproblems.

```cpp
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

**Lambda Expression**: An anonymous function defined inline, introduced in C++11.

```cpp
auto add = [](int a, int b) { return a + b; };
int result = add(3, 4); // 7
```

**Default Arguments**: Values assigned to function parameters that are used when no argument is provided.

```cpp
void print(int x, int base = 10) { /* ... */ }
print(42);    // Uses base = 10
print(42, 16); // Uses base = 16
```

**Pass by Value**: Passing a copy of the argument to a function; changes inside the function don't affect the original.

**Pass by Reference**: Passing the address of the argument to a function; changes inside the function affect the original.

**Pass by Pointer**: Passing the address of the argument using a pointer; the function can modify the original value.

## Object-Oriented Programming

**Class**: A user-defined data type that groups data (member variables) and functions (member functions) together.

```cpp
class Rectangle {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() const { return width * height; }
};
```

**Object**: An instance of a class, created to access the class's member variables and functions.

```cpp
Rectangle rect(5.0, 3.0);
double a = rect.area(); // 15.0
```

**Constructor**: A special member function called when an object is created, used to initialize the object's state.

```cpp
class Point {
public:
    Point(int x, int y) : x_(x), y_(y) {}
private:
    int x_, y_;
};
```

**Destructor**: A special member function called when an object is destroyed, used to clean up resources.

```cpp
class Resource {
public:
    ~Resource() { /* cleanup */ }
};
```

**Inheritance**: A mechanism where a new class (derived) inherits properties and behaviors from an existing class (base).

```cpp
class Shape {
public:
    virtual double area() const = 0;
};

class Circle : public Shape {
public:
    Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
private:
    double radius;
};
```

**Encapsulation**: The bundling of data with methods that operate on that data, restricting direct access to some components.

**Polymorphism**: The ability of objects of different classes to be treated as objects of a common base class, particularly through virtual functions.

```cpp
Shape* shapes[] = { new Circle(5.0), new Rectangle(4.0, 3.0) };
for (Shape* s : shapes) {
    std::cout << s->area() << std::endl; // Calls appropriate area()
}
```

**Abstraction**: The concept of hiding complex implementation details and showing only the necessary features of an object.

**Virtual Function**: A member function that can be overridden in derived classes, enabling runtime polymorphism.

```cpp
class Base {
public:
    virtual void display() { std::cout << "Base" << std::endl; }
};

class Derived : public Base {
public:
    void display() override { std::cout << "Derived" << std::endl; }
};
```

**Pure Virtual Function**: A virtual function that has no implementation in the base class, making the class abstract.

```cpp
class Interface {
public:
    virtual void method() = 0; // Pure virtual function
};
```

**Abstract Class**: A class containing at least one pure virtual function; cannot be instantiated directly.

**Friend Function**: A function that is granted access to the private and protected members of a class.

```cpp
class Box {
    friend void printBox(const Box& b);
private:
    int width;
};
```

## Memory Management

**Stack Memory**: Memory automatically managed for function calls, local variables; fast but limited.

**Heap Memory**: Dynamically allocated memory using `new`; must be manually managed and freed with `delete`.

```cpp
int* ptr = new int(42); // Allocate on heap
delete ptr;              // Free memory
```

**New Operator**: Allocates memory on the heap for an object and returns a pointer to it.

**Delete Operator**: Frees memory previously allocated with `new`.

**Memory Leak**: When dynamically allocated memory is not properly freed, causing the program to use more memory over time.

**Smart Pointer**: A class that manages heap-allocated objects automatically, preventing memory leaks (C++11).

```cpp
#include <memory>
std::unique_ptr<int> ptr = std::make_unique<int>(42);
std::shared_ptr<int> shared = std::make_shared<int>(42);
```

**Unique Pointer**: A smart pointer that owns the object exclusively and deletes it when the pointer goes out of scope.

**Shared Pointer**: A smart pointer that maintains a reference count and deletes the object when the last shared pointer to it is destroyed.

**Weak Pointer**: A smart pointer that references an object managed by a shared pointer without increasing the reference count.

**RAII (Resource Acquisition Is Initialization)**: A programming idiom where resource management is tied to object lifetime, ensuring automatic cleanup.

## Templates

**Function Template**: A blueprint for creating functions that work with any data type, using template parameters.

```cpp
template <typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}
```

**Class Template**: A blueprint for creating classes that work with any data type.

```cpp
template <typename T>
class Stack {
private:
    std::vector<T> elements;
public:
    void push(const T& elem) { elements.push_back(elem); }
    T pop() { /* ... */ }
};
```

**Template Specialization**: Providing a specific implementation of a template for a particular data type.

```cpp
template <>
class Stack<bool> {
    // Specialized implementation for bool
};
```

**Variadic Templates**: Templates that accept a variable number of arguments (C++11).

```cpp
template<typename... Args>
void print(Args... args) {
    (std::cout << ... << args) << std::endl;
}
```

## Modern C++ Features

**Move Semantics**: A feature that transfers resources from one object to another instead of copying, improving performance (C++11).

```cpp
std::vector<int> createVec() {
    return std::vector<int>{1, 2, 3}; // Move instead of copy
}
```

**Rvalue Reference**: A reference that can bind to temporary objects (rvalues), enabling move semantics.

```cpp
void process(std::vector<int>&& vec) { /* ... */ }
```

**Auto Return Type**: Letting the compiler deduce the return type of a function (C++14).

```cpp
auto add(int a, int b) {
    return a + b; // Compiler deduces int
}
```

**Structured Binding**: Declaring multiple variables initialized from a tuple, pair, or struct (C++17).

```cpp
auto [x, y, z] = std::make_tuple(1, 2.0, "three");
```

**Range-based For Loop**: A loop that iterates over elements in a container automatically.

```cpp
std::vector<int> vec = {1, 2, 3, 4, 5};
for (const auto& elem : vec) {
    std::cout << elem << std::endl;
}
```

**Constexpr**: A keyword that allows expressions to be evaluated at compile time for optimization.

```cpp
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}
```

**Noexcept**: A specifier indicating that a function does not throw exceptions, enabling compiler optimizations.

```cpp
void safeFunction() noexcept { /* ... */ }
```

**Lambda Capture**: Specifying which variables from the enclosing scope a lambda can access.

```cpp
int x = 10;
auto f = [x]() { return x; };    // Capture x by value
auto g = [&x]() { x++; };        // Capture x by reference
auto h = [=]() { return x; };    // Capture all by value
auto i = [&]() { x++; };         // Capture all by reference
```

## STL Containers and Algorithms

**Vector**: A dynamic array that can resize itself, providing random access to elements.

**List**: A doubly-linked list allowing efficient insertion and deletion at any position.

**Map**: An associative container storing key-value pairs in sorted order by key.

**Set**: An associative container storing unique elements in sorted order.

**Unordered Map**: An associative container storing key-value pairs using a hash table for O(1) average lookup.

**Unordered Set**: An associative container storing unique elements using a hash table.

**Stack**: A container adapter providing LIFO (Last-In-First-Out) operations.

**Queue**: A container adapter providing FIFO (First-In-First-Out) operations.

**Algorithm**: A function that operates on ranges of elements, such as `std::sort`, `std::find`, `std::transform`.

```cpp
#include <algorithm>
std::vector<int> v = {5, 2, 8, 1, 9};
std::sort(v.begin(), v.end()); // Sorts: 1, 2, 5, 8, 9
```

**Iterator**: An object that points to elements in a container, enabling traversal and manipulation.

**Functor**: A class or struct implementing `operator()`, allowing objects to be used like functions.

```cpp
struct Adder {
    int operator()(int a, int b) const { return a + b; }
};
Adder add;
int result = add(3, 4); // 7
```

## Error Handling

**Exception**: A runtime error that disrupts normal program flow, thrown with `throw` and caught with `try-catch`.

```cpp
try {
    if (error) throw std::runtime_error("Error occurred");
} catch (const std::exception& e) {
    std::cerr << e.what() << std::endl;
}
```

**Try-Catch Block**: A construct for handling exceptions, where `try` contains code that might throw and `catch` handles exceptions.

**Runtime Error**: An error that occurs during program execution, such as division by zero or out-of-bounds access.

**Compile-Time Error**: An error detected during compilation, such as syntax errors or type mismatches.

**Assertion**: A macro that checks a condition at runtime and terminates the program if false, useful for debugging.

```cpp
#include <cassert>
assert(x > 0 && "x must be positive");
```

**Noexcept Specification**: Indicates whether a function can throw exceptions.

## Related Terms

- See [Programming Glossary](../../../../typescript/src/content/docs/glossary) for general programming concepts
- See [Computer Science Glossary](../../../../typescript/src/content/docs/glossary) for CS fundamentals
- See [Java Glossary](../../../../typescript/src/content/docs/glossary) for Java-specific OOP concepts
- See [Rust Glossary](../../../../typescript/src/content/docs/glossary) for memory safety concepts
- See [Python Glossary](../../../../typescript/src/content/docs/glossary) for dynamic typing concepts
