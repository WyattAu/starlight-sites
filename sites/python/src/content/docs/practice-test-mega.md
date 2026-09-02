---
title: "Python Programming Practice Test — 30 Problems"
description: "30 Python programming problems covering Syntax, Data Structures, OOP, and Algorithms. Code analysis and debugging with detailed explanations."
date: 2026-07-24
tags:
  - python
  - programming
  - practice-test
  - university
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://python.wyattau.com"},
    {"name": "Practice Test", "url": "https://python.wyattau.com/practice-test-mega"}
  ]
}
</script>

## Python Programming Practice Test — 30 Problems

This practice test covers 30 problems across four major domains of Python programming: Syntax and Fundamentals, Data Structures, Object-Oriented Programming, and Algorithms and Standard Library. Each problem tests code analysis, debugging, and understanding of Python semantics. Work through all problems before checking the answer key.

## Instructions

- **Time limit:** 90 minutes (3 minutes per problem)
- **Format:** Code analysis and debugging — trace the output, identify errors, or select the correct implementation
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes. Trace code by hand.
- **After the test:** Check the answer key at the bottom. Study the explanations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Syntax and Fundamentals | P1–P8 | 8 |
| Data Structures | P9–P15 | 7 |
| Object-Oriented Programming | P16–P22 | 7 |
| Algorithms and Standard Library | P23–P30 | 8 |
| **Total** | **30** | **30** |

---

## Syntax and Fundamentals (P1–P8)

### P1 — Variable Scope and Closures

What is the output?

```python
def make_counter():
    count = 0
    def counter():
        nonlocal count
        count += 1
        return count
    return counter

c = make_counter()
print(c(), c(), c())
```

| # | Option |
| --- | --- |
| A | `1 1 1` |
| B | `0 1 2` |
| C | `1 2 3` |
| D | UnboundLocalError |
| E | `0 0 0` |

**Correct: C** (index 2)

The closure captures `count` from `make_counter`. The `nonlocal` keyword allows `counter` to modify the enclosing scope's `count`. Each call increments `count` by 1. The first call returns 1, the second 2, the third 3.

`easy` — 1 mark

---

### P2 — Mutable Default Argument

What is the output?

```python
def append_to(element, target=[]):
    target.append(element)
    return target

print(append_to(1))
print(append_to(2))
```

| # | Option |
| --- | --- |
| A | `[1]` then `[2]` |
| B | `[1]` then `[1, 2]` |
| C | `[1, 2]` then `[1, 2]` |
| D | IndexError |
| E | `[2]` then `[1, 2]` |

**Correct: B** (index 1)

The default argument `target=[]` is evaluated once at function definition, not at each call. Both calls share the same list object. First call appends 1, returning `[1]`. Second call appends 2 to the same list, returning `[1, 2]`. This is a classic Python gotcha — use `None` as default and create the list inside the function.

`medium` — 1 mark

---

### P3 — Generator Expressions

What is the output?

```python
nums = (x * x for x in range(5))
total = sum(nums)
print(total)
print(sum(nums))
```

| # | Option |
| --- | --- |
| A | `30` then `30` |
| B | `30` then `0` |
| C | `0` then `0` |
| D | `14` then `0` |
| E | TypeError |

**Correct: B** (index 1)

Generator expressions are consumed once and exhausted. `sum(nums)` iterates through all values (0+1+4+9+16 = 30). After the first `sum`, the generator is exhausted. The second `sum` sees an empty generator and returns 0.

`medium` — 1 mark

---

### P4 — List Slicing and Mutation

What is the output?

```python
a = [1, 2, 3, 4, 5]
b = a[1:4]
b[0] = 99
print(a)
print(b)
```

| # | Option |
| --- | --- |
| A | `[1, 99, 3, 4, 5]` and `[99, 3, 4]` |
| B | `[1, 2, 3, 4, 5]` and `[99, 3, 4]` |
| C | `[1, 2, 3, 4, 5]` and `[2, 3, 4]` |
| D | `[1, 99, 99, 99, 5]` and `[99, 99, 99]` |
| E | IndexError |

**Correct: B** (index 1)

Slicing creates a shallow copy of the selected portion. `b = a[1:4]` creates a new list `[2, 3, 4]`. Modifying `b[0]` does not affect `a`. `a` remains `[1, 2, 3, 4, 5]`; `b` becomes `[99, 3, 4]`.

`easy` — 1 mark

---

### P5 — Walrus Operator

What is the output?

```python
import re
text = "Contact us at support@example.com"
if (m := re.search(r'[\w.]+@[\w.]+', text)):
    print(m.group())
```

| # | Option |
| --- | --- |
| A | `support@example.com` |
| B | `None` |
| C | TypeError |
| D | `True` |
| E | Nothing is printed |

**Correct: A** (index 0)

The walrus operator `:=` assigns the result of `re.search()` to `m` and returns the value. If the match is truthy (not `None`), the if-block executes and prints the matched email address. This avoids calling `re.search()` twice (once in the condition, once in the body).

`easy` — 1 mark

---

### P6 — Decorator Ordering

What is the output?

```python
def bold(func):
    def wrapper():
        return "<b>" + func() + "</b>"
    return wrapper

def italic(func):
    def wrapper():
        return "<i>" + func() + "</i>"
    return wrapper

@bold
@italic
def greet():
    return "hi"

print(greet())
```

| # | Option |
| --- | --- |
| A | `<i><b>hi</b></i>` |
| B | `<b><i>hi</i></b>` |
| C | `<b>hi</b>` |
| D | `<i>hi</i>` |
| E | `hi` |

**Correct: B** (index 1)

Decorators apply bottom-up: `@italic` wraps `greet` first, then `@bold` wraps the result. When called, `bold`'s wrapper executes first (adds `<b>`), then calls `italic`'s wrapper (adds `<i>`), which calls the original `greet`. Result: `<b><i>hi</i></b>`.

`medium` — 1 mark

---

### P7 — Dictionary Comprehension with Condition

What is the output?

```python
data = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
result = {k: v for k, v in data.items() if v % 2 == 0}
print(result)
```

| # | Option |
| --- | --- |
| A | `{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}` |
| B | `{'b': 2, 'd': 4}` |
| C | `{'a': 1, 'c': 3, 'e': 5}` |
| D | `['b', 'd']` |
| E | `2` |

**Correct: B** (index 1)

The dictionary comprehension filters items where the value is even (`v % 2 == 0`). Only `'b': 2` and `'d': 4` satisfy this condition. The result is a new dictionary containing only the even-valued entries.

`easy` — 1 mark

---

### P8 — String Interning and Identity

What is the output?

```python
a = "hello"
b = "hello"
c = "".join(["h", "e", "l", "l", "o"])
print(a is b)
print(a is c)
```

| # | Option |
| --- | --- |
| A | `True` then `True` |
| B | `False` then `False` |
| C | `True` then `False` |
| D | `False` then `True` |
| E | `True` then `True` (always) |

**Correct: C** (index 2)

Python interns small strings and string literals — `a` and `b` reference the same interned object, so `a is b` is `True`. `c` is constructed at runtime via `join`, creating a new string object. Even though `c` has the same content, it is a different object, so `a is c` is `False`.

`medium` — 1 mark

---

## Data Structures (P9–P15)

### P9 — List Membership Testing

What is the time complexity of `x in my_list` for a Python list?

| # | Option |
| --- | --- |
| A | $O(1)$ |
| B | $O(\log n)$ |
| C | $O(n)$ |
| D | $O(n \log n)$ |
| E | Depends on element type |

**Correct: C** (index 2)

Python lists are arrays. Checking membership (`in`) requires a linear scan of all elements, making it O(n). For frequent membership testing, convert to a `set` for O(1) average-case lookup.

`easy` — 1 mark

---

### P10 — Dictionary Insertion Order

Since which Python version do dictionaries preserve insertion order?

| # | Option |
| --- | --- |
| A | Python 3.0 |
| B | Python 3.4 |
| C | Python 3.6 (implementation detail) |
| D | Python 3.7 (guaranteed by language spec) |
| E | Python 2.7 |

**Correct: D** (index 3)

Python 3.6 made insertion order preservation an implementation detail of CPython. Python 3.7 made it a language guarantee — all conforming implementations must preserve insertion order. Before 3.7, dictionary order was arbitrary.

`medium` — 1 mark

---

### P11 — Set Operations

What is the output?

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}
print(a - b)
print(a | b)
print(a & b)
```

| # | Option |
| --- | --- |
| A | `{1, 2}` `{1, 2, 3, 4, 5, 6}` `{3, 4}` |
| B | `{1, 2}` `{3, 4}` `{1, 2, 5, 6}` |
| C | `{1, 2, 5, 6}` `{3, 4}` `{1, 2}` |
| D | `{1, 2}` `{1, 2, 3, 4, 5, 6}` `{}` |
| E | `{5, 6}` `{1, 2, 3, 4, 5, 6}` `{1, 2, 3, 4}` |

**Correct: A** (index 0)

`a - b` is the difference: elements in `a` but not in `b` = `{1, 2}`. `a | b` is the union: all elements from both = `{1, 2, 3, 4, 5, 6}`. `a & b` is the intersection: elements in both = `{3, 4}`.

`easy` — 1 mark

---

### P12 — Collections.deque Performance

Which operation is O(1) for `collections.deque` but O(n) for `list`?

| # | Option |
| --- | --- |
| A | Append to end |
| B | Index access |
| C | Insert at beginning |
| D | Length check |
| E | Iteration |

**Correct: C** (index 2)

`deque` is a doubly-linked list optimised for operations at both ends. Inserting at the beginning is O(1) for `deque` but O(n) for `list` (requires shifting all elements). Both have O(1) append to end. `deque` has O(n) index access; `list` has O(1).

`medium` — 1 mark

---

### P13 — Counter Object

What is the output?

```python
from collections import Counter

words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
c = Counter(words)
print(c.most_common(2))
```

| # | Option |
| --- | --- |
| A | `[('apple', 3), ('banana', 2)]` |
| B | `[('banana', 2), ('cherry', 1)]` |
| C | `{'apple': 3, 'banana': 2, 'cherry': 1}` |
| D | `3` |
| E | `apple` |

**Correct: A** (index 0)

`Counter` counts hashable objects. `most_common(2)` returns the 2 most common elements as a list of `(element, count)` tuples. "apple" appears 3 times, "banana" 2 times, so the result is `[('apple', 3), ('banana', 2)]`.

`easy` — 1 mark

---

### P14 — Nested Dictionary Access

What is the output?

```python
data = {
    "users": {
        "alice": {"age": 30, "active": True},
        "bob": {"age": 25, "active": False}
    }
}

active_users = [name for name, info in data["users"].items() if info["active"]]
print(active_users)
```

| # | Option |
| --- | --- |
| A | `[{'age': 30, 'active': True}]` |
| B | `['alice']` |
| C | `['alice', 'bob']` |
| D | `[30]` |
| E | `True` |

**Correct: B** (index 1)

The list comprehension iterates over `data["users"].items()`. For each user, it checks if `info["active"]` is `True`. Only "alice" has `active: True`. The comprehension collects the keys (names), producing `['alice']`.

`medium` — 1 mark

---

### P15 — Tuple Unpacking in Loops

What is the output?

```python
pairs = [(1, 'a'), (2, 'b'), (3, 'c')]
result = []
for num, letter in pairs:
    result.append(f"{letter}{num}")
print(result)
```

| # | Option |
| --- | --- |
| A | `[1, 2, 3]` |
| B | `['a', 'b', 'c']` |
| C | `['a1', 'b2', 'c3']` |
| D | `[(1, 'a'), (2, 'b'), (3, 'c')]` |
| E | `['1a', '2b', '3c']` |

**Correct: C** (index 2)

Tuple unpacking in the `for` loop assigns `num` and `letter` from each pair. The f-string `f"{letter}{num}"` places the letter first, then the number: "a1", "b2", "c3".

`easy` — 1 mark

---

## Object-Oriented Programming (P16–P22)

### P16 — MRO and Diamond Inheritance

What is the output?

```python
class A:
    def greet(self): print("A", end=" ")

class B(A):
    def greet(self): print("B", end=" ")

class C(A):
    def greet(self): print("C", end=" ")

class D(B, C):
    pass

D().greet()
```

| # | Option |
| --- | --- |
| A | `A` |
| B | `B` |
| C | `C` |
| D | `D` |
| E | `A B C` |

**Correct: B** (index 1)

Python uses C3 linearization (Method Resolution Order). For `D(B, C)`, the MRO is D -> B -> C -> A. `D().greet()` looks up `greet` in MRO order. `B` has `greet`, so it prints "B". This is Python's solution to the diamond problem.

`medium` — 1 mark

---

### P17 — Property Decorator

What is the output?

```python
class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

t = Temperature(100)
print(t.fahrenheit)
t.fahrenheit = 212
```

| # | Option |
| --- | --- |
| A | `212.0` |
| B | `100.0` then `212.0` |
| C | `212.0` then error |
| D | `100.0` |
| E | AttributeError |

**Correct: E** (index 4)

`t.fahrenheit` calls the property getter, returning 100 * 9/5 + 32 = 212.0. The property has no setter defined, so `t.fahrenheit = 212` raises `AttributeError: can't set attribute`. Properties are read-only by default unless a setter is defined with `@fahrenheit.setter`.

`medium` — 1 mark

---

### P18 — `__slots__` Memory Savings

What does `__slots__` do in a Python class?

| # | Option |
| --- | --- |
| A | Prevents instantiation of the class |
| B | Restricts instance attributes to a fixed set, saving memory |
| C | Makes all attributes private |
| D | Enables multiple inheritance |
| E | Prevents subclassing |

**Correct: B** (index 1)

`__slots__` replaces the instance `__dict__` with a fixed set of attribute descriptors. This prevents dynamic attribute creation, saves memory (no per-instance dict), and provides a small speed improvement. Subclasses without `__slots__` regain `__dict__` unless they also define `__slots__`.

`medium` — 1 mark

---

### P19 — Dataclass Default Values

What is the output?

```python
from dataclasses import dataclass, field

@dataclass
class Config:
    name: str
    options: list = field(default_factory=list)

c1 = Config("app")
c2 = Config("app")
c1.options.append("debug")
print(c1.options)
print(c2.options)
```

| # | Option |
| --- | --- |
| A | `['debug']` then `['debug']` |
| B | `['debug']` then `[]` |
| C | `[]` then `[]` |
| D | TypeError |
| E | `['debug']` then `None` |

**Correct: B** (index 1)

`field(default_factory=list)` creates a new list for each instance. `c1` and `c2` each get their own independent list. Appending to `c1.options` does not affect `c2.options`. Without `default_factory`, all instances would share the same mutable default — a common bug.

`medium` — 1 mark

---

### P20 — Abstract Base Classes

What is the output?

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self): pass

class Circle(Shape):
    def __init__(self, r): self.r = r
    def area(self): return 3.14 * self.r ** 2

# s = Shape()  # uncommented
c = Circle(5)
print(c.area())
```

| # | Option |
| --- | --- |
| A | `78.5` |
| B | TypeError on line marked `# s = Shape()` |
| C | `0` |
| D | `Shape` |
| E | Compiler error |

**Correct: A** (index 0)

`Shape` is abstract because it has an `@abstractmethod`. Uncommenting `s = Shape()` would raise `TypeError` because you cannot instantiate abstract classes. `Circle` implements `area()`, so `Circle(5).area()` returns 78.5.

`easy` — 1 mark

---

### P21 — Context Manager Protocol

What is the output?

```python
class ManagedFile:
    def __init__(self, filename):
        self.filename = filename
    def __enter__(self):
        print(f"opening {self.filename}")
        return self
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"closing {self.filename}")

with ManagedFile("data.txt") as f:
    print("processing")
```

| # | Option |
| --- | --- |
| A | `opening data.txt` `processing` `closing data.txt` |
| B | `processing` `opening data.txt` `closing data.txt` |
| C | `opening data.txt` `closing data.txt` |
| D | `processing` |
| E | TypeError |

**Correct: A** (index 0)

The `with` statement calls `__enter__` before the block (prints "opening"), executes the block (prints "processing"), then calls `__exit__` after the block (prints "closing"). This is Python's equivalent of try-with-resources. `__exit__` is called even if an exception occurs.

`easy` — 1 mark

---

### P22 — Metaclass Control

What does a metaclass control?

| # | Option |
| --- | --- |
| A | Instance method resolution |
| B | How classes are created and configured |
| C | Object destruction order |
| D | Module import mechanism |
| E | Garbage collection |

**Correct: B** (index 1)

A metaclass is the "class of a class" — it controls how classes are created. When Python encounters `class Foo(metaclass=MyMeta)`, it calls `MyMeta('Foo', bases, namespace)`. Metaclasses can modify the class namespace, enforce invariants, register classes, or inject methods. They are used by frameworks like Django ORM, SQLAlchemy, and Pydantic.

`medium` — 1 mark

---

## Algorithms and Standard Library (P23–P30)

### P23 — Sorting Stability

Which Python sorting algorithm is stable?

| # | Option |
| --- | --- |
| A | `sorted()` uses an unstable sort |
| B | `list.sort()` uses TimSort, which is stable |
| C | Both are unstable |
| D | Stability depends on the data |
| E | Python has no built-in sort |

**Correct: B** (index 1)

Python's built-in `list.sort()` and `sorted()` both use TimSort — a hybrid of merge sort and insertion sort. TimSort is stable: elements with equal keys maintain their original relative order. This is useful when sorting by multiple keys.

`easy` — 1 mark

---

### P24 — itertools.chain

What is the output?

```python
from itertools import chain

a = [1, 2]
b = [3, 4]
c = [5]
result = list(chain(a, b, c))
print(result)
```

| # | Option |
| --- | --- |
| A | `[[1, 2], [3, 4], [5]]` |
| B | `[1, 2, 3, 4, 5]` |
| C | `[1, 2, 3, 4, 5, None]` |
| D | `(1, 2, 3, 4, 5)` |
| E | `12345` |

**Correct: B** (index 1)

`chain` concatenates iterables into a single iterator. `chain(a, b, c)` produces elements from `a`, then `b`, then `c` in sequence. Converting to a list gives `[1, 2, 3, 4, 5]`. Unlike `flatMap`, `chain` does not flatten nested structures.

`easy` — 1 mark

---

### P25 — Lambda and Sorting

What is the output?

```python
students = [("Alice", 88), ("Bob", 95), ("Charlie", 72), ("Diana", 95)]
students.sort(key=lambda s: (-s[1], s[0]))
print([s[0] for s in students])
```

| # | Option |
| --- | --- |
| A | `['Alice', 'Bob', 'Charlie', 'Diana']` |
| B | `['Bob', 'Diana', 'Alice', 'Charlie']` |
| C | `['Charlie', 'Alice', 'Bob', 'Diana']` |
| D | `['Diana', 'Bob', 'Alice', 'Charlie']` |
| E | `['Bob', 'Diana', 'Charlie', 'Alice']` |

**Correct: B** (index 1)

The sort key is `(-s[1], s[0])` — descending score first, then ascending name alphabetically. Bob (95) and Diana (95) tie on score; "Bob" < "Diana" alphabetically, so Bob comes first. Then Alice (88), then Charlie (72). Result: `['Bob', 'Diana', 'Alice', 'Charlie']`.

`medium` — 1 mark

---

### P26 — functools.lru_cache

What is the output?

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    print(f"computing {n}", end=" ")
    if n < 2: return n
    return fib(n - 1) + fib(n - 2)

print(fib(5))
```

| # | Option |
| --- | --- |
| A | `computing 5 computing 4 computing 3 computing 2 computing 1 computing 0 5` |
| B | `5` |
| C | `55` |
| D | Infinite recursion |
| E | `computing 5 5` |

**Correct: A** (index 0)

`lru_cache` memoizes results. `fib(5)` calls `fib(4)` and `fib(3)`. Each call prints "computing" only on first invocation (cache miss). Subsequent calls to the same argument use the cached result. Total: computing 5, 4, 3, 2, 1, 0. The final result is 5. Without caching, `fib(5)` would compute 15 calls.

`medium` — 1 mark

---

### P27 — Exception Hierarchy

What is the output?

```python
try:
    int("abc")
except ValueError as e:
    print(type(e).__mro__)
```

| # | Option |
| --- | --- |
| A | `(<class 'ValueError'>, <class 'Exception'>, <class 'BaseException'>, <class 'object'>)` |
| B | `(<class 'Exception'>, <class 'ValueError'>, <class 'object'>)` |
| C | `ValueError` |
| D | `<class 'ValueError'>` |
| E | Compiler error |

**Correct: A** (index 0)

`type(e).__mro__` prints the Method Resolution Order for `ValueError`. The MRO shows the inheritance chain: `ValueError` -> `Exception` -> `BaseException` -> `object`. This demonstrates that `ValueError` is a subclass of `Exception`, which is a subclass of `BaseException`.

`medium` — 1 mark

---

### P28 — Threading and the GIL

Which statement about the GIL is correct?

| # | Option |
| --- | --- |
| A | The GIL prevents all concurrency in Python |
| B | The GIL allows only one thread to execute Python bytecode at a time |
| C | The GIL only affects CPython, not other Python implementations |
| D | The GIL prevents I/O operations from running concurrently |
| E | The GIL was removed in Python 3.13 |

**Correct: B** (index 1)

The Global Interpreter Lock (GIL) ensures only one thread executes Python bytecode at a time, even on multi-core systems. This simplifies CPython's memory management (reference counting) but limits CPU-bound parallelism. I/O operations release the GIL, so threads can overlap I/O. The GIL exists in CPython but not necessarily in other implementations (Jython, PyPy STM).

`medium` — 1 mark

---

### P29 — Binary Search with bisect

What is the output?

```python
import bisect

data = [10, 20, 30, 40, 50]
pos = bisect.bisect_left(data, 35)
print(pos)
```

| # | Option |
| --- | --- |
| A | `2` |
| B | `3` |
| C | `30` |
| D | `35` |
| E | `40` |

**Correct: B** (index 1)

`bisect_left` finds the insertion point for 35 in the sorted list. Since 35 is between 30 (index 2) and 40 (index 3), the leftmost insertion point is index 3. This means `data.insert(3, 35)` would maintain sorted order.

`easy` — 1 mark

---

### P30 — Map-Reduce Pattern

What is the output?

```python
from functools import reduce

nums = [1, 2, 3, 4, 5]
result = reduce(lambda acc, x: acc + x * x, nums, 0)
print(result)
```

| # | Option |
| --- | --- |
| A | `15` |
| B | `55` |
| C | `225` |
| D | `0` |
| E | `25` |

**Correct: B** (index 1)

`reduce` applies the lambda cumulatively: ((0 + 1^2) + 2^2) + 3^2) + 4^2) + 5^2 = 0 + 1 + 4 + 9 + 16 + 25 = 55. The initial value is 0. The lambda takes the accumulator and the current element, adding the square of each element.

`easy` — 1 mark

---

## Answer Key

<details>
<summary>Click to reveal the answer key</summary>

| Question | Answer | Question | Answer | Question | Answer |
| --- | --- | --- | --- | --- | --- |
| P1 | C | P11 | A | P21 | A |
| P2 | B | P12 | C | P22 | B |
| P3 | B | P13 | A | P23 | B |
| P4 | B | P14 | B | P24 | B |
| P5 | A | P15 | C | P25 | B |
| P6 | B | P16 | B | P26 | A |
| P7 | B | P17 | E | P27 | A |
| P8 | C | P18 | B | P28 | B |
| P9 | C | P19 | B | P29 | B |
| P10 | D | P20 | A | P30 | B |

</details>

---

## Difficulty Breakdown

| Difficulty | Count |
| --- | --- |
| Easy | 13 |
| Medium | 16 |
| Hard | 1 |

---

## Cross-References

- **[Python Fundamentals](https://python.wyattau.com/hub)** — Types, control flow, functions, and generators
- **[Data Structures](https://python.wyattau.com/hub)** — Lists, dictionaries, sets, and collections
- **[Object-Oriented Programming](https://python.wyattau.com/hub)** — Classes, inheritance, descriptors, and metaclasses
- **[Standard Library](https://python.wyattau.com/hub)** — itertools, functools, collections, and pathlib
- **[Async Programming](https://python.wyattau.com/hub)** — Coroutines, asyncio, and the event loop
- **[Computer Science](https://computer-science.wyattau.com/hub)** — Algorithms and data structures that underpin Python
- **[C++ Programming](https://cpp.wyattau.com/hub)** — Comparing Python with a statically typed language

---

## Tips for Using This Practice Test

1. **Trace code by hand.** Python's dynamic nature means subtle bugs (mutable defaults, variable scoping) require careful tracing.
2. **Know the data model.** Understanding `__dunder__` methods, the MRO, and the descriptor protocol is essential for advanced Python.
3. **Understand the "why".** Python's design philosophy (EAFP over LBYL, duck typing, the GIL) has clear rationale. Understanding the motivation makes the language easier to master.
4. **Practise reading errors.** Python tracebacks tell you exactly what went wrong — learn to read them efficiently.
5. **Retake after one week.** Python's flexibility means there are many subtle rules — spaced repetition is essential.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
