---
title: Special Member Function Generation Rules
description: ""H');
    a.push_back('i');

    Buffer b = a;                          // copy constructor
    Buffer c = std::move(b);               // move constructor
    a = c;                                 // copy assignment
    c = Buffer(4, 'X');                    // move assignment (from temporary)

    std::printf("a: ");
    for (std::size_t i = 0; i < a.size(); ++i)
        std::printf("%c", a[i]);
    std::printf("\n");
}
```

## 3.6 Trivial vs Non-Trivial Special Member Functions

A special member function is **trivial** if it is not user-provided, its class has no virtual
Functions or virtual base classes, and all base classes and members have trivial versions of the
Same SMF [N4950 §11.4.5.3]. Trivial SMFs have important implications:

- ** copyable types** can be copied with `memcpy` — this is the foundation of
  `std::is_trivially_copyable` [N4950 §20.15.4.3].
- ** destructible types** do not require destructor calls during stack unwinding.
- **Trivial default constructors** allow zero-initialization and static storage duration objects to
  be placed in `.bss` (zero-initialized memory segment).

```cpp
#include <iostream>
#include <type_traits>
#include <cstring>

struct Trivial {
    int a;
    double b;
};
// All SMFs are trivial

struct NonTrivial {
    int* ptr;
    NonTrivial() : ptr(new int(0)) {}
    ~NonTrivial() { delete ptr; }
};
// Destructor is non-trivial, making the class non-trivially-copyable

struct VirtualBase {
    virtual void foo() {}
    int x;
};
// Virtual function makes all SMFs non-trivial

int main() {
    std::cout << std::boolalpha;
    std::cout << "Trivial is trivially copyable: "
              << std::is_trivially_copyable_v&lt;Trivial&gt; << "\n";         // true
    std::cout << "NonTrivial is trivially copyable: "
              << std::is_trivially_copyable_v&lt;NonTrivial&gt; << "\n";     // false
    std::cout << "VirtualBase is trivially copyable: "
              << std::is_trivially_copyable_v&lt;VirtualBase&gt; << "\n";    // false

    // Trivial types can be memcpy'd
    Trivial t1{42, 3.14};
    Trivial t2;
    std::memcpy(&amp;t2, &amp;t1, sizeof(Trivial));  // safe for trivially copyable types
    std::cout << "t2.a: " << t2.a << ", t2.b: " << t2.b << "\n";
    // Output: t2.a: 42, t2.b: 3.14
}
```

## 3.7 The Rule of Zero

The **Rule of Zero** states that classes that do not directly manage resources should not declare
Any special member functions. Instead, they should compose resource-owning standard library types
(`std::string``std::vector``std::unique_ptr``std::shared_ptr`) which handle their own resource
Management correctly [N4950 §11.4.5.3]:

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <algorithm>

class UserDatabase {
    std::string name_;
    std::vector&lt;std::string&gt; users_;
    std::unique_ptr&lt;struct Impl&gt; impl_;
public:
    UserDatabase(std::string name) : name_(std::move(name)) {}

    void add_user(std::string user) {
        users_.push_back(std::move(user));
    }

    std::size_t user_count() const { return users_.size(); }

    // No SMFs declared — compiler generates:
    // - Trivial? No (std::string, std::vector have non-trivial SMFs)
    // - Correct? Yes (each member handles its own resource management)
    // - Move constructor: generated (moves name_, users_, impl_)
    // - Move assignment: generated (moves each member)
    // - Copy constructor: DELETED (unique_ptr has deleted copy)
    // - Copy assignment: DELETED (unique_ptr has deleted copy)
    // - Destructor: generated (destroys each member)
};

int main() {
    UserDatabase db("production");
    db.add_user("alice");
    db.add_user("bob");
    std::cout << "Users: " << db.user_count() << "\n";

    // Move works (compiler-generated)
    UserDatabase db2 = std::move(db);
    std::cout << "After move, db2 users: " << db2.user_count() << "\n";

    // Copy does NOT compile (unique_ptr blocks implicit copy)
    // UserDatabase db3 = db2;  // error: use of deleted function
}
```

### When to Prefer Rule of Zero Over Rule of Five

Use the Rule of Zero whenever possible. Only fall back to the Rule of Five when:

1. You need to manage a raw resource directly (e.g., a file descriptor, a network socket, a custom
   allocator).
2. You need to support copying of a type that contains a `unique_ptr` (by implementing a deep copy
   in the copy constructor).
3. You need non-default move semantics (e.g., a type that caches computed data and wants to transfer
   the cache).

## 3.8 The Destructor Destructor-Ordering Guarantee

C++ guarantees that members are destroyed in **reverse order of construction**, and base classes are
Destroyed after all members [N4950 §11.9.6]. This ordering is deterministic and does not depend on
The order of member declarations in the destructor body:

```cpp
#include <iostream>

struct Member {
    const char* name;
    explicit Member(const char* n) : name(n) { std::cout << "  ctor: " << name << "\n"; }
    ~Member() { std::cout << "  dtor: " << name << "\n"; }
};

struct Base {
    Member b;
    explicit Base(const char* n) : b(n) {}
    ~Base() { std::cout << "  dtor: Base\n"; }
};

struct Derived : Base {
    Member m1;
    Member m2;
    Derived() : Base("base"), m1("member1"), m2("member2") {}
    ~Derived() { std::cout << "  dtor: Derived\n"; }
};

int main() {
    std::cout << "Construction:\n";
    Derived d;
    std::cout << "Destruction:\n";
}
// Construction:
//   ctor: base
//   ctor: member1
//   ctor: member2
// Destruction:
//   dtor: Derived  (body runs first)
//   dtor: member2  (reverse of construction)
//   dtor: member1
//   dtor: base     (after all members)
```

### Destructor Order and Exception Safety

The reverse-destruction-order guarantee is critical for exception safety. If a member's destructor
Throws, all previously-constructed members (constructed after it) have already been destroyed. No
Double-destruction occurs:

```cpp
#include <iostream>
#include <stdexcept>

struct ThrowingDtor {
    ~ThrowingDtor() {
        std::cout << "  ~ThrowingDtor (throws)\n";
        throw std::runtime_error{"dtor threw"};
    }
};

struct Container {
    ThrowingDtor td;
    int value = 42;
    ~Container() {
        std::cout << "  ~Container start\n";
        // value is destroyed AFTER td (reverse order)
        // If td's dtor throws, value has already been destroyed
    }
};

int main() {
    try {
        Container c;
    } catch (const std::exception&amp; e) {
        std::cout << "caught: " << e.what() << "\n";
    }
}
```

## 3.9 `= default` Out-of-Line: Lazy Generation

When `= default` is used **out-of-line** (outside the class body), the SMF is only generated if it
Is odr-used. This can reduce compile time and binary size for types with complex implicitly-
Generated SMFs:

```cpp
#include <iostream>
#include <string>
#include <vector>

class BigData {
    std::vector&lt;std::string&gt; data_;
    std::vector&lt;double&gt; metrics_;
public:
    BigData() = default;
    ~BigData();  // declared but not defined here

    void add(const std::string&amp; s, double m) {
        data_.push_back(s);
        metrics_.push_back(m);
    }
};

// Out-of-line default: only generated if ~BigData() is actually called
// This saves compilation time if BigData is only used in ways that don't
// require destruction (e.g., as a stack variable that is always moved from)
BigData::~BigData() = default;

int main() {
    BigData bd;
    bd.add("test", 1.0);
    std::cout << "entries: " << bd.data_.size() << "\n";
}
```

## 3.10 P0609R3: Fixing the "Destructors Suppress Move" Problem

C++11 introduced a defect: declaring a destructor (even `= default`) suppresses implicit move
Constructor and move assignment generation. This was a pragmatic decision to avoid breaking C++03
Code that relied on implicit copy semantics, but it creates a common surprise:

```cpp
#include <iostream>
#include <utility>

struct Surprise {
    int* data = nullptr;
    Surprise() : data(new int(42)) {}
    ~Surprise() { delete data; }  // This suppresses implicit move generation!

    // Before C++11: implicit copy ctor and copy assign generated
    // In C++11+: still only implicit copy ctor and copy assign!
    // The move constructor and move assignment are NOT implicitly generated
    // because the destructor is user-declared.
};

int main() {
    Surprise a;
    Surprise b = std::move(a);  // Calls COPY constructor, not move!
    // a.data is still valid (not nullptr) — the copy constructor was called
    std::cout << "a.data: " << (a.data ? *a.data : -1) << "\n";
    std::cout << "b.data: " << (b.data ? *b.data : -1) << "\n";
    // Both a.data and b.data point to the same int — double delete bug!
    // This is a classic resource management error caused by suppressed move generation.
}
```

### The Fix: Explicitly Default or Delete Moves

Always explicitly declare move operations when you declare a destructor:

```cpp
#include <iostream>
#include <utility>

struct Correct {
    int* data = nullptr;
    Correct() : data(new int(42)) {}
    ~Correct() { delete data; }

    // Explicitly default the move operations to prevent the suppression bug
    Correct(Correct&amp;&amp; o) noexcept : data(o.data) { o.data = nullptr; }
    Correct&amp; operator=(Correct&amp;&amp; o) noexcept {
        if (this != &amp;o) {
            delete data;
            data = o.data;
            o.data = nullptr;
        }
        return *this;
    }

    // Delete copy (or implement deep copy) since we manage a resource
    Correct(const Correct&amp;) = delete;
    Correct&amp; operator=(const Correct&amp;) = delete;
};

int main() {
    Correct a;
    Correct b = std::move(a);  // Calls move constructor
    std::cout << "a.data: " << (a.data ? "non-null" : "null") << "\n";  // null
    std::cout << "b.data: " << (b.data ? "non-null" : "null") << "\n";  // non-null
}
```

## Common Pitfalls

### 1. Copy Assignment Without Self-Assignment Check

A copy assignment operator that does not check for self-assignment (`a = a`) can cause resource
Corruption. The copy-and-swap idiom handles self-assignment, but manual implementations Must check:

```cpp
#include <cstring>

struct Bad {
    char* data;
    std::size_t size;

    Bad&amp; operator=(const Bad&amp; other) {
        // BUG: no self-assignment check
        delete[] data;           // frees our own data
        data = new char[other.size];  // allocates new buffer
        std::memcpy(data, other.data, other.size);  // reads from freed memory!
        size = other.size;
        return *this;
    }
};

struct Good {
    char* data;
    std::size_t size;

    Good&amp; operator=(const Good&amp; other) {
        if (this != &amp;other) {  // self-assignment check
            delete[] data;
            data = new char[other.size];
            std::memcpy(data, other.data, other.size);
            size = other.size;
        }
        return *this;
    }
};
```

### 2. Move Assignment Without Cleanup

A move assignment operator that does not release the current resource before taking ownership of the
Source's resource causes a memory leak:

```cpp
#include <cstring>

struct Leaky {
    char* data = nullptr;
    std::size_t size = 0;

    Leaky&amp; operator=(Leaky&amp;&amp; other) noexcept {
        // BUG: forgot to delete[] data — memory leak!
        data = other.data;
        size = other.size;
        other.data = nullptr;
        other.size = 0;
        return *this;
    }
};
```

### 3. `= default` and Non-Defaultable Members

If a class has a reference member or `const` member, the default constructor cannot be generated
(even with `= default`), because there is no way to default-initialize these members:

```cpp
#include <cstdio>

struct WithRef {
    int&amp; ref;
    WithRef(int&amp; r) : ref(r) {}
    // WithRef() = default;  // ERROR: cannot default-initialize reference
};

struct WithConst {
    const int value;
    // WithConst() = default;  // ERROR: cannot default-initialize const member
    WithConst(int v) : value(v) {}
};

int main() {
    int x = 42;
    WithRef wr(x);
    WithConst wc(10);
    std::printf("ref: %d, const: %d\n", wr.ref, wc.value);
}
```

### 4. Implicit Move and Return Statements

When a function returns by value and the return expression names a local variable, the compiler
First tries NRVO, then falls back to treating the return as an implicit move (if the move
Constructor is available). If the move constructor is deleted or not declared, it falls back to
Copy. Understanding this chain prevents the common mistake of writing `return std::move(local)`:

```cpp
#include <iostream>
#include <utility>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget&amp; o) : id(o.id) { std::cout << "  Widget(" << id << ") copy\n"; }
    Widget(Widget&amp;&amp; o) noexcept : id(o.id) { o.id = 0; std::cout << "  Widget(" << id << ") move\n"; }
};

Widget factory() {
    Widget local(42);
    return local;  // NRVO or implicit move — correct
    // return std::move(local);  // WRONG: prevents NRVO, always moves
}

int main() {
    Widget w = factory();
    std::cout << "w.id: " << w.id << "\n";
}
```

## See Also

- [Access Control and Friendship](./2_access_control.md)
- [Operator Overloading](./4_operator_overloading.md)


## Summary

This topic covers the mathematical techniques and concepts related to special member function
generation rules, including key theorems, methods, and problem-solving approaches.

**Key concepts include:**

- fundamental definitions and theorems
- algebraic and graphical methods
- proof and logical reasoning
- problem-solving strategies
- applications and modelling

Regular practice with a variety of question types is essential to build fluency and confidence in
applying these mathematical techniques.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

