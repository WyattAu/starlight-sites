---
title: "Java Glossary — Key Terms and Definitions"
description: "Study notes for Java Glossary — Key Terms and Definitions with worked examples, practice problems, and key concepts for exam preparation."
date: 2026-07-24
tags: [glossary]
---

## Java Fundamentals

**Java Virtual Machine (JVM)**: The runtime environment that executes Java bytecode, providing platform independence through the "write once, run anywhere" principle.

**Java Development Kit (JDK)**: A software development environment used for developing Java applications, including the JRE, compiler, and development tools.

**Java Runtime Environment (JRE)**: The runtime environment required to run Java applications, containing the JVM and core libraries.

**Bytecode**: Platform-independent intermediate code produced by the Java compiler, executed by the JVM.

**Class**: A blueprint for creating objects, defining attributes (fields) and behaviors (methods).

```java
public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}
```

**Object**: An instance of a class, containing actual data and invoking class behaviors.

```java
Person person = new Person("Alice", 30);
String name = person.getName();
```

**Main Method**: The entry point of a Java application, declared as `public static void main(String[] args)`.

**Package**: A namespace that organizes related classes and interfaces, preventing naming conflicts.

```java
package com.example.myapp;
import java.util.List;
```

**Import Statement**: Declares classes or interfaces from other packages that can be referenced without fully qualified names.

**Garbage Collection**: The automatic memory management process in Java that reclaims memory from objects no longer in use.

## Data Types and Variables

**Primitive Types**: Basic data types built into Java: `byte`, `short`, `int`, `long`, `float`, `double`, `boolean`, `char`.

**Reference Types**: Types that reference objects in memory, including classes, interfaces, arrays, and enums.

**int**: A 32-bit signed integer primitive type, the most commonly used integer type.

```java
int count = 42;
```

**double**: A 64-bit double-precision floating-point primitive type.

```java
double price = 19.99;
```

**boolean**: A primitive type representing true or false values.

```java
boolean isActive = true;
```

**char**: A 16-bit Unicode character primitive type.

```java
char letter = 'A';
```

**String**: An immutable sequence of characters, a reference type in Java.

```java
String name = "Hello, World!";
String upper = name.toUpperCase();
```

**Final**: A keyword that prevents modification of a variable, method, or class.

```java
final int MAX_VALUE = 100; // Cannot be changed
final class ImmutableClass { } // Cannot be extended
final void method() { } // Cannot be overridden
```

**Var**: A keyword for local variable type inference, allowing the compiler to deduce the type (Java 10+).

```java
var list = new ArrayList<String>(); // Compiler infers ArrayList<String>
var message = "Hello"; // Compiler infers String
```

## Control Flow

**If-Else Statement**: Conditional execution based on boolean expressions.

```java
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "C";
}
```

**Switch Statement**: Multi-way branch based on the value of an expression (supports `int`, `char`, `String`, `enum`).

```java
switch (day) {
    case MONDAY:
        System.out.println("Monday");
        break;
    case TUESDAY:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Other day");
}
```

**Enhanced Switch**: A modern switch syntax using arrows, introduced in Java 14.

```java
String result = switch (day) {
    case MONDAY, FRIDAY -> "Workday";
    case SATURDAY, SUNDAY -> "Weekend";
    default -> "Other";
};
```

**For Loop**: A loop that repeats code a specific number of times or iterates over a range.

```java
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}
```

**Enhanced For Loop (For-Each)**: A loop that iterates over elements in a collection or array.

```java
for (String name : names) {
    System.out.println(name);
}
```

**While Loop**: A loop that repeats code as long as a condition is true.

```java
while (condition) {
    // code that repeats
}
```

**Do-While Loop**: A loop that executes code at least once, then repeats as long as a condition is true.

```java
do {
    // code executes at least once
} while (condition);
```

**Break Statement**: Exits the nearest enclosing loop or switch statement.

**Continue Statement**: Skips the rest of the current loop iteration and proceeds to the next.

**Return Statement**: Exits from a method and optionally returns a value.

## Object-Oriented Programming

**Encapsulation**: Restricting access to object internals using access modifiers, exposing only necessary methods.

**Inheritance**: A mechanism where a child class (subclass) inherits fields and methods from a parent class (superclass).

```java
public class Animal {
    public void speak() { System.out.println("..."); }
}

public class Dog extends Animal {
    @Override
    public void speak() { System.out.println("Woof!"); }
}
```

**Polymorphism**: The ability of objects of different classes to be treated as objects of a common superclass, enabling method overriding.

```java
Animal animal = new Dog();
animal.speak(); // Calls Dog's speak() method
```

**Abstraction**: Hiding implementation details and showing only functionality, achieved through abstract classes and interfaces.

**Interface**: A contract specifying a set of methods that a class must implement, supporting multiple inheritance of type.

```java
public interface Drawable {
    void draw();
}

public class Circle implements Drawable {
    @Override
    public void draw() { /* ... */ }
}
```

**Abstract Class**: A class that cannot be instantiated, containing abstract methods that must be implemented by subclasses.

```java
public abstract class Shape {
    public abstract double area();
}

public class Circle extends Shape {
    private double radius;

    @Override
    public double area() { return Math.PI * radius * radius; }
}
```

**Method Overriding**: Redefining a superclass method in a subclass with the same signature.

**Method Overloading**: Defining multiple methods with the same name but different parameter lists in the same class.

```java
public int add(int a, int b) { return a + b; }
public double add(double a, double b) { return a + b; }
```

**Constructor**: A special method called when an object is created, used to initialize the object.

```java
public class Person {
    private String name;

    public Person(String name) {
        this.name = name;
    }
}
```

**This Keyword**: A reference to the current object, used to access instance variables and methods.

**Super Keyword**: A reference to the parent class, used to access parent class methods and constructors.

```java
public class Child extends Parent {
    public Child() {
        super(); // Calls parent constructor
    }

    @Override
    public void method() {
        super.method(); // Calls parent method
    }
}
```

**Static**: A keyword indicating that a member belongs to the class rather than instances.

```java
public class MathUtils {
    public static final double PI = 3.14159;
    public static int add(int a, int b) { return a + b; }
}
```

**Final Keyword**: Prevents inheritance, method overriding, or variable reassignment.

**Instanceof**: An operator that checks if an object is an instance of a specific class or interface.

```java
if (animal instanceof Dog) {
    Dog dog = (Dog) animal;
}
```

**Sealed Class**: A class that restricts which other classes or interfaces can extend or implement it (Java 17+).

```java
public sealed class Shape permits Circle, Rectangle, Triangle { }
```

**Record**: A special class for immutable data carriers, automatically generating `equals()`, `hashCode()`, and `toString()` (Java 16+).

```java
public record Point(int x, int y) { }
Point p = new Point(3, 4); // Compact constructor
```

## Collections Framework

**List**: An ordered collection (sequence) that allows duplicate elements.

```java
List<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
String first = names.get(0);
```

**Set**: A collection that contains no duplicate elements.

```java
Set<Integer> numbers = new HashSet<>();
numbers.add(1);
numbers.add(1); // Ignored
```

**Map**: An object that maps keys to values, with no duplicate keys allowed.

```java
Map<String, Integer> ages = new HashMap<>();
ages.put("Alice", 30);
ages.put("Bob", 25);
int aliceAge = ages.get("Alice");
```

**Queue**: A collection designed for holding elements prior to processing, following FIFO ordering.

**Stack**: A collection following LIFO (Last-In-First-Out) ordering.

**Iterator**: An object that enables traversing a collection, one element at a time.

```java
Iterator<String> it = names.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
```

**Comparable Interface**: Defines a natural ordering for objects of a class, implemented via `compareTo()`.

**Comparator Interface**: Defines an external comparison strategy for objects, used for custom sorting.

```java
List<String> sorted = names.stream()
    .sorted(Comparator.comparing(String::length))
    .collect(Collectors.toList());
```

**Stream API**: A functional-style API for processing collections of objects in a declarative way (Java 8+).

```java
List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .filter(name -> name.length() > 3)
    .collect(Collectors.toList());
```

**ArrayList**: A resizable array implementation of the List interface.

**LinkedList**: A doubly-linked list implementation of the List and Queue interfaces.

**HashMap**: A hash table implementation of the Map interface.

**TreeMap**: A red-black tree implementation of the Map interface, maintaining keys in sorted order.

**HashSet**: A hash table implementation of the Set interface.

**TreeSet**: A red-black tree implementation of the Set interface, maintaining elements in sorted order.

## Exceptions

**Exception**: An event that disrupts the normal flow of program execution, handled via try-catch blocks.

**Checked Exception**: An exception that must be declared in a method's `throws` clause or caught (e.g., `IOException`).

**Unchecked Exception (Runtime Exception)**: An exception that doesn't need to be declared or caught (e.g., `NullPointerException`).

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    // Always executes
}
```

**Throw Statement**: Explicitly throws an exception.

```java
throw new IllegalArgumentException("Invalid argument");
```

**Throws Clause**: Declares that a method may throw specific exceptions.

```java
public void readFile(String path) throws IOException {
    Files.readAllBytes(Path.of(path));
}
```

**Try-With-Resources**: Automatically closes resources implementing `AutoCloseable` (Java 7+).

```java
try (var reader = new BufferedReader(new FileReader("file.txt"))) {
    String line = reader.readLine();
}
```

**Custom Exception**: A user-defined exception class extending `Exception` or `RuntimeException`.

```java
public class BusinessRuleException extends Exception {
    public BusinessRuleException(String message) {
        super(message);
    }
}
```

## Generics

**Generic Class**: A class that can work with any data type, specified as a type parameter.

```java
public class Box<T> {
    private T content;
    public void set(T item) { this.content = item; }
    public T get() { return content; }
}
```

**Generic Method**: A method that can work with any type, specified as a type parameter.

```java
public static <T> T first(List<T> list) {
    return list.get(0);
}
```

**Type Parameter**: A placeholder for a type used in generic declarations (commonly `T`, `E`, `K`, `V`).

**Bounded Type Parameter**: A type parameter restricted to a specific type or its subtypes.

```java
public static <T extends Comparable<T>> T max(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}
```

**Wildcards**: Type parameters using `?` for flexibility in generic types.

```java
List<? extends Number> numbers; // Upper bounded
List<? super Integer> integers;  // Lower bounded
```

## Concurrency

**Thread**: A lightweight unit of execution within a process, enabling concurrent operations.

**Runnable Interface**: A functional interface representing a task that can be executed by a thread.

```java
Runnable task = () -> System.out.println("Running");
new Thread(task).start();
```

**Synchronized**: A keyword that ensures only one thread can access a method or block at a time.

```java
public synchronized void increment() {
    count++;
}
```

**ExecutorService**: A high-level API for managing thread pools and executing tasks asynchronously.

```java
ExecutorService executor = Executors.newFixedThreadPool(4);
executor.submit(() -> System.out.println("Task"));
executor.shutdown();
```

**Callable Interface**: Similar to Runnable but can return a result and throw checked exceptions.

```java
Callable<Integer> task = () -> {
    Thread.sleep(1000);
    return 42;
};
```

**Future**: An object representing the result of an asynchronous computation.

```java
Future<Integer> future = executor.submit(task);
Integer result = future.get(); // Blocks until result is available
```

**CompletableFuture**: A class for composing asynchronous operations and handling results functionally (Java 8+).

```java
CompletableFuture.supplyAsync(() -> fetchData())
    .thenApply(data -> process(data))
    .thenAccept(result -> System.out.println(result));
```

**Atomic Variables**: Thread-safe variables using hardware-level atomic operations (e.g., `AtomicInteger`, `AtomicReference`).

**Concurrent Collections**: Thread-safe collections like `ConcurrentHashMap` and `CopyOnWriteArrayList`.

## Functional Programming

**Lambda Expression**: An anonymous function that can be passed as an argument or assigned to a variable (Java 8+).

```java
Comparator<String> comp = (a, b) -> a.length() - b.length();
```

**Functional Interface**: An interface with exactly one abstract method, usable with lambda expressions.

```java
@FunctionalInterface
public interface Processor<T> {
    void process(T item);
}
```

**Method Reference**: A shorthand notation for lambda expressions that call an existing method (Java 8+).

```java
List<String> names = List.of("Alice", "Bob");
names.forEach(System.out::println); // Equivalent to: name -> System.out.println(name)
```

**Predicate**: A functional interface representing a boolean-valued function (takes one argument, returns boolean).

```java
Predicate<String> isLong = s -> s.length() > 10;
```

**Function**: A functional interface representing a function that takes one argument and returns a result.

```java
Function<String, Integer> length = String::length;
```

**Supplier**: A functional interface representing a function that takes no arguments and returns a result.

```java
Supplier<List<String>> listFactory = ArrayList::new;
```

**Consumer**: A functional interface representing a function that takes an argument and returns no result.

```java
Consumer<String> printer = System.out::println;
```

## Advanced Features

**Annotations**: Metadata that can be added to code elements for compiler information or runtime processing.

```java
@Override // Compiler checks that method actually overrides
public String toString() { return "Object"; }
```

**Reflection**: The ability to examine and modify the structure and behavior of classes at runtime.

```java
Class<?> clazz = Class.forName("com.example.MyClass");
Method[] methods = clazz.getDeclaredMethods();
```

**Serialization**: Converting an object into a byte stream for storage or transmission.

**Deserialization**: Reconstructing an object from a byte stream.

**Enum**: A special class representing a group of constants.

```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
```

**Varargs**: A method parameter that accepts zero or more arguments of a specified type.

```java
public void printAll(String... messages) {
    for (String msg : messages) {
        System.out.println(msg);
    }
}
```

**Pattern Matching**: Matching objects against patterns and extracting components (Java 16+).

```java
if (obj instanceof String s) {
    System.out.println(s.toUpperCase());
}
```

**Text Blocks**: Multi-line string literals preserving formatting (Java 15+).

```java
String json = """
        {
            "name": "Alice",
            "age": 30
        }
        """;
```

**Records**: Immutable data carrier classes with automatic methods (Java 16+).

**Sealed Classes**: Classes that restrict which other classes can extend them (Java 17+).

**Virtual Threads**: Lightweight threads managed by the JVM, enabling massive concurrency (Java 21+).

## Related Terms

- See [Programming Glossary](/programming/glossary) for general programming concepts
- See [C++ Glossary](/cpp/glossary) for compiled language comparison
- See [Python Glossary](/python/glossary) for interpreted language comparison
- See [Computer Science Glossary](/computer-science/glossary) for CS fundamentals
- See [Databases Glossary](/databases/glossary) for Java database interactions
