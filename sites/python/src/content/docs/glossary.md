---
title: "Python Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of Python programming concepts, including syntax, data structures, OOP, decorators, and the Python ecosystem."
date: 2026-07-24
tags: [glossary]
---

## Python Fundamentals

**Interpreter**: A program that reads and executes Python code line by line, translating it to machine code at runtime.

**Script**: A Python file (`.py`) containing a sequence of statements that are executed when the file is run.

**Module**: A Python file containing functions, classes, and variables that can be imported and used in other programs.

**Package**: A directory containing multiple Python modules and an `__init__.py` file, organizing related code.

**Virtual Environment**: An isolated Python environment with its own packages and dependencies, preventing conflicts between projects.

```bash
python -m venv myenv
source myenv/bin/activate
```

**Indentation**: The whitespace at the beginning of a line that defines code blocks in Python, replacing curly braces in other languages.

**Docstring**: A string literal that occurs as the first statement in a module, function, class, or method, used to document the code.

```python
def add(a, b):
    """Add two numbers and return the result."""
    return a + b
```

**PEP 8**: The Python Enhancement Proposal that provides style guidelines for writing readable Python code.

**Zen of Python**: A collection of design principles for Python, accessible by typing `import this` in the interpreter.

## Data Types and Variables

**Variable**: A named reference to a value, created by assignment; Python variables are dynamically typed.

```python
x = 10          # int
name = "Alice"  # str
pi = 3.14       # float
active = True   # bool
```

**Integer (int)**: A whole number without a decimal point, supporting arbitrary precision in Python 3.

**Float**: A floating-point number with a decimal point, stored as a double-precision value.

**String (str)**: An immutable sequence of characters, supporting slicing, formatting, and many methods.

```python
s = "Hello, World!"
s[0:5]          # "Hello"
f"Name: {name}" # f-string formatting
```

**Boolean (bool)**: A data type with two values: `True` and `False`, used for logical operations.

**None**: Python's null value, representing the absence of a value or a function with no return statement.

**Type**: Every value in Python has a type, accessible via `type()` function.

```python
type(42)        # <class 'int'>
type("hello")   # <class 'str'>
```

**Dynamic Typing**: Python determines variable types at runtime, allowing variables to change type.

```python
x = 10      # x is int
x = "hello" # x is now str
```

**Type Hints**: Optional annotations indicating expected types, introduced in Python 3.5 for documentation and static analysis.

```python
def greet(name: str) -> str:
    return f"Hello, {name}"
```

## Data Structures

**List**: An ordered, mutable collection that can hold elements of different types.

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")    # Add element
fruits[0] = "avocado"    # Modify element
```

**Tuple**: An ordered, immutable collection that can hold elements of different types.

```python
point = (3, 4)
x, y = point  # Tuple unpacking
```

**Dictionary**: An unordered collection of key-value pairs, where keys must be unique and immutable.

```python
person = {"name": "Alice", "age": 30, "city": "NYC"}
person["email"] = "alice@example.com"  # Add entry
```

**Set**: An unordered collection of unique elements, supporting mathematical set operations.

```python
unique_nums = {1, 2, 3, 4, 5}
other = {4, 5, 6, 7, 8}
unique_nums & other  # Intersection: {4, 5}
unique_nums | other  # Union: {1, 2, 3, 4, 5, 6, 7, 8}
```

**Frozen Set**: An immutable version of a set.

```python
frozen = frozenset([1, 2, 3])
```

**List Comprehension**: A concise way to create lists using a single line of code.

```python
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
```

**Dictionary Comprehension**: A concise way to create dictionaries using a single line of code.

```python
squares = {x: x**2 for x in range(10)}
```

**Set Comprehension**: A concise way to create sets using a single line of code.

```python
unique_squares = {x**2 for x in range(-5, 6)}
```

**Generator Expression**: A memory-efficient way to create iterators, producing elements on demand.

```python
gen = (x**2 for x in range(1000000))  # Doesn't store all in memory
```

**Unpacking**: Assigning elements from a collection to multiple variables at once.

```python
a, b, *rest = [1, 2, 3, 4, 5]  # a=1, b=2, rest=[3, 4, 5]
```

## Control Flow

**If Statement**: Conditional execution based on boolean expressions.

```python
if condition:
    # code if true
elif other_condition:
    # code if other condition is true
else:
    # code if all conditions are false
```

**For Loop**: Iterating over a sequence (list, tuple, string, range, etc.).

```python
for item in collection:
    # code for each item

for i in range(5):
    # code that repeats 5 times
```

**While Loop**: Repeating code as long as a condition remains true.

```python
while condition:
    # code that repeats while condition is true
```

**Break Statement**: Exits the nearest enclosing loop immediately.

**Continue Statement**: Skips the rest of the current loop iteration and proceeds to the next.

**Pass Statement**: A null operation that does nothing; used as a placeholder where syntax requires a statement.

```python
def todo():
    pass  # Implement later
```

**Ternary Expression**: A concise way to write conditional expressions.

```python
result = "even" if x % 2 == 0 else "odd"
```

## Functions

**Function**: A reusable block of code that performs a specific task, defined with the `def` keyword.

```python
def greet(name):
    return f"Hello, {name}!"
```

**Parameter**: A variable in a function definition that receives an argument when the function is called.

**Argument**: The actual value passed to a function when it is called.

**Return Value**: The value a function sends back to the caller using the `return` statement.

**Default Arguments**: Parameter values that are used when no argument is provided.

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
```

**Keyword Arguments**: Arguments passed by name, allowing them to be in any order.

```python
greet(greeting="Hi", name="Alice")
```

**Variable-Length Arguments**: Accepting an arbitrary number of arguments using `*args` and `**kwargs`.

```python
def func(*args, **kwargs):
    for arg in args:
        print(arg)
    for key, value in kwargs.items():
        print(f"{key}: {value}")
```

**Closure**: A function that remembers values from its enclosing scope even after the outer function has finished executing.

```python
def outer(x):
    def inner(y):
        return x + y
    return inner

add5 = outer(5)
add5(3)  # 8
```

**Decorator**: A function that modifies the behavior of another function or class, applied using the `@` syntax.

```python
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"Time: {time.time() - start:.4f}s")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
```

**Generator**: A function using `yield` to produce a sequence of values lazily, maintaining state between calls.

```python
def countdown(n):
    while n > 0:
        yield n
        n -= 1
```

**Higher-Order Function**: A function that takes a function as an argument or returns a function.

```python
def apply(func, value):
    return func(value)
```

**Lambda**: A small anonymous function defined with the `lambda` keyword, limited to a single expression.

```python
square = lambda x: x**2
add = lambda a, b: a + b
```

## Object-Oriented Programming

**Class**: A blueprint for creating objects, defining attributes (data) and methods (behavior).

```python
class Dog:
    def __init__(self, name, breed):
        self.name = name
        self.breed = breed

    def bark(self):
        return f"{self.name} says Woof!"
```

**Object**: An instance of a class, containing actual data and behavior.

```python
my_dog = Dog("Buddy", "Golden Retriever")
my_dog.bark()  # "Buddy says Woof!"
```

**Method**: A function defined inside a class that operates on instances of that class.

**Instance Variable**: A variable unique to each instance of a class, defined with `self`.

**Class Variable**: A variable shared by all instances of a class, defined at the class level.

```python
class Counter:
    count = 0  # Class variable

    def __init__(self):
        Counter.count += 1  # Increments shared count
```

**Inheritance**: A mechanism where a child class inherits attributes and methods from a parent class.

```python
class Animal:
    def speak(self):
        pass

class Cat(Animal):
    def speak(self):
        return "Meow!"
```

**Polymorphism**: The ability of different classes to be treated as instances of the same class through inheritance, allowing the same method to behave differently.

**Encapsulation**: Restricting access to certain attributes and methods, using naming conventions like `_` (protected) and `__` (private).

**Abstraction**: Hiding complex implementation details and showing only the necessary features of an object.

**Magic Methods (Dunder Methods)**: Special methods that define how objects behave with built-in operations, using double underscores.

```python
class Point:
    def __init__(self, x, y):
        self.x, self.y = x, y
    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)
    def __repr__(self):
        return f"Point({self.x}, {self.y})"
```

**Property**: A method that acts like an attribute, defined with `@property` for controlled access.

```python
class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius

    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
```

**Dataclass**: A class decorator that automatically generates special methods like `__init__`, `__repr__`, and `__eq__` (Python 3.7+).

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float
```

**Abstract Base Class**: A class that cannot be instantiated directly, used to define interfaces for other classes.

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass
```

## Error Handling

**Exception**: An error that occurs during runtime, interrupting normal program flow.

**Try-Except Block**: A construct for handling exceptions, where `try` contains risky code and `except` handles errors.

```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
```

**Finally Block**: Code that always executes after `try-except`, regardless of whether an exception occurred.

```python
try:
    file = open("data.txt")
    # Process file
finally:
    file.close()  # Always executes
```

**Raise Statement**: Explicitly raising an exception with the `raise` keyword.

```python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative")
```

**Custom Exception**: A user-defined exception class inheriting from `Exception`.

```python
class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
```

**Context Manager**: An object that manages resources using the `with` statement, ensuring proper cleanup.

```python
with open("file.txt") as f:
    content = f.read()
# File automatically closed
```

## File I/O and Standard Library

**File Object**: An object representing an open file, providing methods for reading and writing.

```python
with open("file.txt", "r") as f:
    content = f.read()
```

**Standard Library**: Python's extensive collection of built-in modules and functions.

**os Module**: Provides functions for interacting with the operating system (file paths, environment variables, etc.).

**sys Module**: Provides access to system-specific parameters and functions (command-line arguments, path, etc.).

**json Module**: Provides functions for working with JSON data (parsing and generating).

```python
import json
data = json.loads('{"name": "Alice"}')
json_str = json.dumps({"name": "Bob"})
```

**re Module**: Provides regular expression operations for pattern matching and text manipulation.

```python
import re
pattern = r'\d+'
matches = re.findall(pattern, "There are 12 eggs and 3 baskets")
```

**datetime Module**: Provides classes for working with dates and times.

```python
from datetime import datetime
now = datetime.now()
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
```

**collections Module**: Provides specialized container types like `Counter`, `defaultdict`, `deque`, and `namedtuple`.

```python
from collections import Counter, defaultdict
words = Counter(["apple", "banana", "apple", "cherry"])
d = defaultdict(list)  # Default value is empty list
```

**itertools Module**: Provides functions for creating and working with iterators efficiently.

```python
import itertools
combos = itertools.combinations([1, 2, 3], 2)
```

## Advanced Features

**Iterator Protocol**: The `__iter__` and `__next__` methods that enable objects to be iterated over.

**Context Manager Protocol**: The `__enter__` and `__exit__` methods that enable objects to work with the `with` statement.

**Descriptor Protocol**: The `__get__`, `__set__`, and `__delete__` methods that enable attribute access customization.

**Metaclass**: A class that defines how other classes are constructed, with `type` being the default metaclass.

**Coroutine**: A function that can pause and resume execution using `async` and `await`, enabling asynchronous programming.

```python
async def fetch_data():
    import aiohttp
    async with aiohttp.ClientSession() as session:
        async with session.get("https://api.example.com") as resp:
            return await resp.json()
```

**Thread**: A sequence of instructions that can be managed independently, useful for I/O-bound tasks.

**Process**: An independent execution unit, useful for CPU-bound tasks, managed via the `multiprocessing` module.

**Async/Await**: Syntax for writing asynchronous code that runs concurrently without threads.

**Type Checking**: Using tools like `mypy` to verify type hints at compile time.

**Pattern Matching**: Structural pattern matching introduced in Python 3.10 using `match` and `case`.

```python
def handle_command(command):
    match command.split():
        case ["quit"]:
            return "Goodbye"
        case ["hello", name]:
            return f"Hello, {name}"
        case _:
            return "Unknown command"
```

**Walrus Operator (:=)**: Assignment expression that assigns and returns a value in a single expression (Python 3.8).

```python
if (n := len(data)) > 10:
    print(f"List is too long: {n} elements")
```

**f-strings**: String literals with embedded expressions, prefixed with `f`.

```python
name = "World"
greeting = f"Hello, {name}! 2 + 2 = {2 + 2}"
```

## Related Terms

- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
- See [Machine Learning Glossary](/machine-learning/glossary) for Python in ML
- See [Database Glossary](/databases/glossary) for Python database interactions
- See [C++ Glossary](/cpp/glossary) for compiled language comparison
