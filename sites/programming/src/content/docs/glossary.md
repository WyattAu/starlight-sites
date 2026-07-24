---
title: "C++ Programming Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of C++ programming terms covering syntax, OOP, memory, STL, and templates."
date: 2026-07-24
tags: [glossary]
---

## C++ Syntax and Fundamentals

**Assignment Operator (=)**: Assigns the value of the right operand to the left operand. `int x = 5;` assigns 5 to variable x.

**Auto Keyword**: Tells the compiler to deduce the variable type automatically from the initializer. `auto x = 3.14;` deduces double.

**Block**: A group of zero or more statements enclosed in curly braces `{}`. Defines a scope for local variables.

**Bool**: A fundamental data type that can hold either `true` or `false`. Size is typically 1 byte.

**Cast**: Explicit conversion from one type to another. Types: `static_cast`, `dynamic_cast`, `const_cast`, `reinterpret_cast`.

**Char**: A fundamental data type storing a single character. Typically 1 byte. Can be signed or unsigned.

**Compiler**: Translates C++ source code into machine code. Major compilers: GCC, Clang, MSVC.

**Constant**: A variable whose value cannot be modified after initialization. Declared with `const` or `constexpr`.

**Control Flow**: The order in which statements are executed. Includes `if`, `else`, `switch`, `for`, `while`, and `do-while`.

**Data Type**: Specifies the type of data a variable can hold. Fundamental types: `int`, `float`, `double`, `char`, `bool`.

**Declaration**: Introduces a name and its type to the compiler. A declaration may or may not define storage.

**Definition**: A declaration that allocates storage for a variable or provides the implementation of a function/class.

**Double**: A fundamental data type for double-precision floating-point numbers. 8 bytes. Greater range and precision than float.

**Enum (Enumeration)**: A user-defined type consisting of a set of named integral constants. `enum Color { RED, GREEN, BLUE };`.

**Expression**: A combination of literals, variables, operators, and function calls that evaluates to a value.

**Float**: A fundamental data type for single-precision floating-point numbers. 4 bytes. Less precise than double.

**Function**: A reusable block of code that performs a specific task. Defined with a return type, name, parameters, and body.

**Header File**: A file containing declarations (functions, classes, macros) that can be included in source files using `#include`.

**If-Else**: A conditional statement that executes different code blocks based on a boolean condition.

**Inline Function**: A function suggested to the compiler to be expanded at the call site, avoiding function call overhead. Defined with `inline`.

**Int**: A fundamental data type for integers. Typically 4 bytes. Range: approximately -2.1 billion to 2.1 billion.

**Lambda Expression**: An anonymous function defined with `[]()` syntax. Can capture variables from enclosing scope. `[](int x){ return x * 2; }`.

**Literal**: A constant value written directly in code. Examples: `42` (int), `3.14` (double), `'a'` (char), `"hello"` (string).

**Loop**: A control structure that repeats a block of code. Types: `for`, `while`, `do-while`, range-based `for`.

**Namespace**: A declarative region that scopes identifiers to avoid naming conflicts. `std` is the standard library namespace.

**Nullptr**: A keyword representing a null pointer constant. Preferred over `NULL` in modern C++. `int* p = nullptr;`.

**Operator**: A symbol that performs operations on operands. Types: arithmetic, relational, logical, bitwise, assignment.

**Pointer**: A variable that stores the memory address of another variable. Declared with `*`. Dereferenced with `*` or `->`.

**Preprocessor**: Processes directives before compilation. `#include`, `#define`, `#ifdef` are preprocessor directives.

**Reference**: An alias for an existing variable. Declared with `&`. Must be initialized and cannot be reseated.

**Return Type**: Specifies the type of value a function returns. Use `void` for functions that return nothing.

**Scope**: The region of code where a name is visible. Types: block, function, file, class scope.

**String**: A sequence of characters. C++ provides `std::string` (from `<string>`) and C-style strings (`char[]`).

**Struct**: A user-defined data type grouping related variables under one name. Members are public by default.

**Switch-Case**: A multi-way branching statement. Selects among many code blocks based on the value of an expression.

**Template**: A blueprint for generating functions or classes parameterized by types or values. Enables generic programming.

**While Loop**: Repeats a block of code as long as a condition is true. `while (condition) { /* body */ }`.

**Boolean (bool)**: A type representing true or false values. Used in conditions and logical operations.

## Object-Oriented Programming (OOP)

**Abstract Class**: A class that cannot be instantiated directly. Contains at least one pure virtual function. Serves as a base class.

**Class**: A user-defined blueprint for creating objects. Contains data members (attributes) and member functions (methods).

**Constructor**: A special member function called when an object is created. Initializes the object. Has the same name as the class.

**Copy Constructor**: A constructor that creates a new object as a copy of an existing object. `MyClass(const MyClass& other);`.

**Destructor**: A special member function called when an object is destroyed. Cleans up resources. Denoted with `~`.

**Encapsulation**: Bundling data and methods within a class, restricting direct access to some components. Achieved with access specifiers.

**Friend Function**: A function that is granted access to private and declared outside the class. Declared with `friend` keyword.

**Inheritance**: A mechanism where a new class (derived) inherits properties and methods from an existing class (base).

**Member Function**: A function defined within a class that operates on objects of that class. Also called a method.

**Method**: Synonym for [Member Function](#member-function). A function belonging to a class.

**Multiple Inheritance**: A class inheriting from more than one base class. Can cause the diamond problem, resolved with virtual inheritance.

**Operator Overloading**: Defining custom behavior for operators (like `+`, `-`, `<<`) when applied to user-defined types.

**Polymorphism**: The ability of objects of different types to be treated through a common interface. Achieved via virtual functions.

**Pure Virtual Function**: A virtual function with no implementation in the base class, declared with `= 0`. Makes the class abstract.

**Virtual Function**: A member function that can be overridden in derived classes and resolved at runtime. Declared with `virtual`.

**Virtual Inheritance**: A mechanism to prevent multiple inheritance from creating duplicate base class instances. Used with the diamond problem.

## Memory Management

**Automatic Storage**: Memory allocated for local variables. Automatically deallocated when going out of scope (stack memory).

**Buffer Overflow**: Writing data beyond the bounds of allocated memory. A common vulnerability and source of bugs.

**Dangling Pointer**: A pointer that points to memory that has been freed. Dereferencing causes undefined behavior.

**Deallocation**: Releasing previously allocated memory back to the system. Done with `delete` (heap) or automatically (stack).

**Dynamic Memory**: Memory allocated at runtime using `new` or `malloc`. Must be explicitly freed to avoid memory leaks.

**Garbage Collection**: Automatic memory management that reclaims unused memory. Not used in standard C++ (unlike Java/C#).

**Heap**: A region of memory used for dynamic allocation. Objects allocated with `new` reside here. Slower than stack.

**Leak**: Memory that has been allocated but never freed. Accumulates over time, eventually exhausting available memory.

**Memory Address**: The location of a byte in memory, represented in hexadecimal. Obtained with the address-of operator `&`.

**Memory Layout**: How a program's memory is organized: code, static data, heap, and stack segments.

**New Operator**: Allocates memory on the heap and constructs an object. Returns a pointer to the allocated object. `int* p = new int(5);`.

**Placement New**: A version of `new` that constructs an object at a pre-allocated memory address. `new (addr) MyClass();`.

**RAII (Resource Acquisition Is Initialization)**: A C++ idiom tying resource management to object lifetime. Ensures cleanup via destructors.

**Raw Pointer**: A pointer that does not manage the lifetime of the pointed-to object. Can become dangling.

**Smart Pointer**: A class that manages a raw pointer, providing automatic cleanup. Types: `unique_ptr`, `shared_ptr`, `weak_ptr`.

**Stack**: A region of memory for automatic storage. Fast allocation/deallocation. LIFO order. Limited in size.

**Storage Duration**: The lifetime of a variable. Types: automatic, static, dynamic, thread.

## Standard Template Library (STL)

**Algorithm**: A function that operates on ranges of elements. Examples: `sort`, `find`, `copy`, `transform`. Defined in `<algorithm>`.

**Associative Container**: A container that stores elements as key-value pairs, automatically sorted by key. Examples: `set`, `map`.

**Container**: An object that stores collections of elements. Types: sequence (`vector`, `list`), associative (`set`, `map`), adaptor (`stack`, `queue`).

**Deque**: Double-ended queue. Allows efficient insertion and deletion at both ends. Defined in `<deque>`.

**Destructor**: Called when elements are removed from containers. Smart pointers ensure proper cleanup.

**Forward Iterator**: An iterator that can read and write elements, advance with `++`, but not go backward with `--`.

**Hash Map**: An unordered associative container mapping keys to values using a hash function. C++ provides `unordered_map`.

**Input Iterator**: An iterator for reading values from a sequence. Can only advance with `++`, not `--`.

**Iterator**: An object that points to elements in a container, enabling traversal. Types: input, output, forward, bidirectional, random access.

**List**: A doubly-linked list container. Efficient insertion/deletion at any position. Defined in `<list>`.

**Map**: An associative container storing key-value pairs sorted by key. Provides O(log n) lookup. Defined in `<map>`.

**Multimap**: A map where multiple elements can have the same key. Defined in `<map>`.

**Multiset**: A set where multiple elements with the same value are allowed. Defined in `<set>`.

**Output Iterator**: An iterator for writing values to a sequence. Can only advance with `++`.

**Priority Queue**: A container adaptor where the largest element is always at the top. Uses a heap internally.

**Queue**: A container adaptor implementing FIFO (First-In-First-Out). Elements added at back, removed from front.

**Random Access Iterator**: An iterator supporting constant-time access to any element, plus arithmetic operations (`+`, `-`, `[]`).

**Sequence Container**: A container that stores elements in a linear sequence. Examples: `vector`, `array`, `list`, `deque`.

**Set**: An associative container storing unique elements sorted by value. Provides O(log n) lookup. Defined in `<set>`.

**Stack**: A container adaptor implementing LIFO (Last-In-First-Out). Elements added and removed from the top.

**Unordered Map**: An associative container mapping keys to values using hashing. Average O(1) lookup. Defined in `<unordered_map>`.

**Unordered Set**: A set using hashing instead of comparison. Average O(1) lookup. Defined in `<unordered_set>`.

**Vector**: A dynamic array that can resize itself. Provides O(1) random access and amortized O(1) push_back. Defined in `<vector>`.

## Templates and Generic Programming

**Class Template**: A template that defines a class parameterized by types or values. `template<typename T> class Stack { ... };`.

**Concept (C++20)**: A named set of constraints on template parameters. Restricts what types can be used. `template<typename T> requires Sortable<T>`.

**Explicit Template Instantiation**: Forces the compiler to generate a specific version of a template. `template class std::vector<int>;`.

**Function Template**: A template that defines a function parameterized by types. `template<typename T> T max(T a, T b);`.

**SFINAE (Substitution Failure Is Not An Error)**: A principle where template substitution failures (not errors) cause the compiler to try other overloads.

**Template Argument Deduction**: The compiler automatically deducing template arguments from function arguments. `max(1, 2)` deduces `T = int`.

**Template Metaprogramming**: Using templates to perform computations at compile time. Enables code generation and optimization.

**Template Specialization**: Providing a specific implementation of a template for certain types. `template<> class Stack<bool> { ... };`.

**Variadic Template**: A template accepting a variable number of arguments. `template<typename... Args> void print(Args... args);`.

## Related Resources

- [C++ Basics Tutorial](/programming/cpp-basics/)
- [Object-Oriented C++](/programming/cpp-oop/)
- [Memory Management Guide](/programming/cpp-memory/)
- [STL Reference](/programming/cpp-stl/)
- [Modern C++ Features](/programming/cpp-modern/)
