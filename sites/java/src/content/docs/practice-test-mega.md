---
title: "Java Programming Practice Test — 30 Problems"
description: "30 Java programming problems covering OOP, Collections, Concurrency, Streams, and Exceptions. Code analysis and debugging with detailed explanations."
date: 2026-07-24
tags:
  - java
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
    {"name": "Home", "url": "https://java.wyattau.com"},
    {"name": "Practice Test", "url": "https://java.wyattau.com/practice-test-mega"}
  ]
}
</script>

## Java Programming Practice Test — 30 Problems

This practice test covers 30 problems across five major domains of Java programming: Object-Oriented Programming, Collections Framework, Concurrency, Streams API, and Exception Handling. Each problem tests code analysis, debugging, and understanding of Java semantics. Work through all problems before checking the answer key.

## Instructions

- **Time limit:** 90 minutes (3 minutes per problem)
- **Format:** Code analysis and debugging — trace the output, identify errors, or select the correct implementation
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes. Trace code by hand.
- **After the test:** Check the answer key at the bottom. Study the explanations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| Object-Oriented Programming | P1–P7 | 7 |
| Collections Framework | P8–P14 | 7 |
| Concurrency | P15–P20 | 6 |
| Streams API | P21–P26 | 6 |
| Exception Handling | P27–P30 | 4 |
| **Total** | **30** | **30** |

---

## Object-Oriented Programming (P1–P7)

### P1 — Polymorphism and Method Dispatch

What is the output of the following code?

```java
class Animal {
    void speak() { System.out.print("Animal "); }
}

class Dog extends Animal {
    void speak() { System.out.print("Dog "); }
}

class Puppy extends Dog {
    void speak() { System.out.print("Puppy "); }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Puppy();
        a.speak();
        ((Dog) a).speak();
    }
}
```

| # | Option |
| --- | --- |
| A | `Puppy Puppy` |
| B | `Dog Puppy` |
| C | `Animal Dog` |
| D | `Puppy Dog` |
| E | ClassCastException |

**Correct: A** (index 0)

The variable `a` is declared as `Animal` but references a `Puppy` instance. `a.speak()` uses dynamic dispatch — it calls `Puppy.speak()` (outputs "Puppy "). The cast `(Dog) a` succeeds because `Puppy` is-a `Dog`. `(Dog) a).speak()` also uses dynamic dispatch on the same `Puppy` object, calling `Puppy.speak()` again. Both calls output "Puppy".

`medium` — 1 mark

---

### P2 — Interface Default Methods

What is the output?

```java
interface Greetable {
    default void greet() { System.out.print("Hello "); }
}

interface Formal {
    default void greet() { System.out.print("Dear "); }
}

class Diplomat implements Greetable, Formal {
    public void greet() {
        Greetable.super.greet();
        System.out.print("colleague");
    }
}

public class Main {
    public static void main(String[] args) {
        new Diplomat().greet();
    }
}
```

| # | Option |
| --- | --- |
| A | `Hello colleague` |
| B | `Dear colleague` |
| C | Compiler error — ambiguous default method |
| D | `Hello Dear colleague` |
| E | ClassCastException |

**Correct: A** (index 0)

When a class implements two interfaces with the same default method, the compiler requires the class to override the method and explicitly choose which interface's version to call. `Diplomat` overrides `greet()`, calls `Greetable.super.greet()` (outputs "Hello "), then prints "colleague".

`medium` — 1 mark

---

### P3 — Records and Immutability

What is the output?

```java
record Point(int x, int y) {
    Point {  // compact constructor
        if (x < 0 || y < 0) throw new IllegalArgumentException("Negative");
    }
}

public class Main {
    public static void main(String[] args) {
        Point p1 = new Point(3, 4);
        Point p2 = new Point(3, 4);
        System.out.print(p1 == p2 + " ");
        System.out.print(p1.equals(p2) + " ");
        System.out.println(p1.x() + p2.y());
    }
}
```

| # | Option |
| --- | --- |
| A | `true true 7` |
| B | `false true 7` |
| C | `false false 7` |
| D | `true false 7` |
| E | Compiler error |

**Correct: B** (index 1)

Records generate `equals()` based on component values, so `p1.equals(p2)` is `true`. However, `==` compares references — `p1` and `p2` are different objects, so `p1 == p2` is `false`. `p1.x()` returns 3, `p2.y()` returns 4, sum is 7.

`easy` — 1 mark

---

### P4 — Sealed Classes

Which statement about sealed classes in Java 17+ is correct?

| # | Option |
| --- | --- |
| A | Sealed classes can only be extended by classes in the same package |
| B | Permitted subclasses must be final, sealed, or non-sealed |
| C | Sealed classes cannot implement interfaces |
| D | Sealed classes replace abstract classes entirely |
| E | Permitted subclasses can be in any module |

**Correct: B** (index 1)

A sealed class restricts which classes may extend it by listing `permits` in the class declaration. Each permitted subclass must be declared `final` (no further extension), `sealed` (further restricted), or `non-sealed` (opens the hierarchy back up). Permitted subclasses can be in different packages if they are in the same module.

`medium` — 1 mark

---

### P5 — Equals and HashCode Contract

What happens when you use a custom class as a HashMap key without overriding `equals` and `hashCode`?

```java
class FileKey {
    String path;
    FileKey(String path) { this.path = path; }
}

public class Main {
    public static void main(String[] args) {
        java.util.Map<FileKey, String> map = new java.util.HashMap<>();
        FileKey k1 = new FileKey("/tmp/a.txt");
        FileKey k2 = new FileKey("/tmp/a.txt");
        map.put(k1, "value");
        System.out.println(map.get(k2));
    }
}
```

| # | Option |
| --- | --- |
| A | `value` |
| B | `null` |
| C | ClassCastException |
| D | Compilation error |
| E | Infinite loop |

**Correct: B** (index 1)

Without overriding `equals` and `hashCode`, `FileKey` uses the default `Object` implementations — `equals` compares references, and `hashCode` is based on memory address. `k1` and `k2` are different objects, so `k2` is not equal to `k1`. `map.get(k2)` returns `null` because no matching key is found.

`medium` — 1 mark

---

### P6 — Covariant Return Types

What is the output?

```java
class Builder {
    Builder configure() {
        System.out.print("Base ");
        return this;
    }
}

class WebBuilder extends Builder {
    WebBuilder configure() {
        System.out.print("Web ");
        return this;
    }
}

public class Main {
    public static void main(String[] args) {
        Builder b = new WebBuilder();
        Builder result = b.configure();
        System.out.println(result.getClass().getSimpleName());
    }
}
```

| # | Option |
| --- | --- |
| A | `Base Builder` |
| B | `Web Builder` |
| C | `Web WebBuilder` |
| D | Compiler error — return type mismatch |
| E | `Base WebBuilder` |

**Correct: B** (index 1)

Java allows covariant return types — `WebBuilder.configure()` returns `WebBuilder` (a subtype of `Builder`), which is valid. `b.configure()` uses dynamic dispatch, calling `WebBuilder.configure()` (outputs "Web "). The return type of the reference `result` is `Builder`, so `getClass().getSimpleName()` returns "Builder".

`medium` — 1 mark

---

### P7 — Anonymous Classes and Effectively Final

What is the output?

```java
public class Main {
    public static void main(String[] args) {
        int x = 10;
        Runnable r = new Runnable() {
            public void run() {
                System.out.print(x);
            }
        };
        // x = 20;  // uncommented
        r.run();
    }
}
```

| # | Option |
| --- | --- |
| A | `10` |
| B | `20` |
| C | Compiler error — x must be final |
| D | Runtime error |
| E | `0` |

**Correct: A** (index 0)

Local variables referenced from an inner class must be effectively final (never reassigned after initialization). `x = 10` is assigned once and never changed (the `x = 20` line is commented out), so the code compiles. The anonymous class captures the value 10 and prints it.

`easy` — 1 mark

---

## Collections Framework (P8–P14)

### P8 — ArrayList vs LinkedList

Which operation is O(1) for `ArrayList` but O(n) for `LinkedList`?

| # | Option |
| --- | --- |
| A | Add at the beginning |
| B | Add at the end |
| C | Remove from the beginning |
| D | Random access by index |
| E | Search for an element |

**Correct: D** (index 3)

`ArrayList` provides O(1) random access via its underlying array. `LinkedList` requires traversal from the head or tail to reach the nth element, making index-based access O(n). Both have O(n) search. Adding at the beginning is O(1) for `LinkedList` but O(n) for `ArrayList` (shift required).

`medium` — 1 mark

---

### P9 — HashMap Bucket Collision

What is the time complexity of `HashMap.get()` in the worst case?

| # | Option |
| --- | --- |
| A | $O(1)$ |
| B | $O(\log n)$ |
| C | $O(n)$ |
| D | $O(n \log n)$ |
| E | $O(1)$ amortised |

**Correct: C** (index 2)

In the worst case, all keys hash to the same bucket, forming a linked list (or red-black tree after Java 8's treeification threshold of 8). Traversing the bucket is O(n). With treeification, worst case becomes O(log n), but the theoretical worst case before treeification is O(n).

`medium` — 1 mark

---

### P10 — TreeMap Ordering

Which statement about `TreeMap` is true?

| # | Option |
| --- | --- |
| A | It uses a hash table for storage |
| B | Keys are in insertion order |
| C | Keys are sorted using natural ordering or a Comparator |
| D | It allows null keys |
| E | It provides O(1) average-case lookup |

**Correct: C** (index 2)

`TreeMap` is a `SortedMap` backed by a red-black tree. Keys are kept in sorted order — either by their natural ordering (implementing `Comparable`) or by a `Comparator` provided at construction time. It does not allow null keys (throws `NullPointerException`). Lookup is O(log n).

`easy` — 1 mark

---

### P11 — Iterator and ConcurrentModificationException

What is the output?

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>(Arrays.asList("a", "b", "c", "d"));
        Iterator<String> it = list.iterator();
        while (it.hasNext()) {
            String s = it.next();
            if (s.equals("b")) it.remove();
        }
        System.out.println(list);
    }
}
```

| # | Option |
| --- | --- |
| A | `[a, c, d]` |
| B | `[a, b, c, d]` |
| C | ConcurrentModificationException |
| D | `[a, d]` |
| E | `[b, c, d]` |

**Correct: A** (index 0)

Using `Iterator.remove()` is the safe way to remove elements during iteration. It updates the iterator's internal state, so no `ConcurrentModificationException` is thrown. The element "b" is removed, leaving `[a, c, d]`.

`easy` — 1 mark

---

### P12 — ConcurrentHashMap Thread Safety

Which statement about `ConcurrentHashMap` is true?

| # | Option |
| --- | --- |
| A | All operations are synchronised on a single lock |
| B | It permits null keys and null values |
| C | It uses segment-level locking for concurrent access |
| D | It is slower than `Collections.synchronizedMap` for all operations |
| E | It does not support `putIfAbsent` |

**Correct: C** (index 2)

`ConcurrentHashMap` uses a more fine-grained locking strategy (bucket-level or striping in Java 7, CAS + synchronized on individual buckets in Java 8+). This allows concurrent reads and writes without locking the entire map. It does not permit null keys or values. It is significantly faster than `synchronizedMap` under contention.

`medium` — 1 mark

---

### P13 — Collections.unmodifiableList

What happens when you call `add` on an unmodifiable list?

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> list = Collections.unmodifiableList(
            new ArrayList<>(Arrays.asList("x", "y"))
        );
        list.add("z");
    }
}
```

| # | Option |
| --- | --- |
| A | `"z"` is added successfully |
| B | NullPointerException |
| C | UnsupportedOperationException |
| D | Compiler error — cannot call add on unmodifiable list |
| E | `[x, y, z]` |

**Correct: C** (index 2)

`Collections.unmodifiableList` returns a wrapper that delegates to the original list but throws `UnsupportedOperationException` for any mutating operation (`add`, `remove`, `set`). The compiler cannot prevent this because `List` declares these methods — the error occurs at runtime.

`medium` — 1 mark

---

### P14 — PriorityQueue Ordering

What is the output?

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(5);
        pq.add(1);
        pq.add(3);
        while (!pq.isEmpty()) {
            System.out.print(pq.poll() + " ");
        }
    }
}
```

| # | Option |
| --- | --- |
| A | `5 3 1` |
| B | `1 3 5` |
| C | `5 1 3` |
| D | `3 1 5` |
| E | `1 5 3` |

**Correct: B** (index 1)

`PriorityQueue` is a min-heap by default. `poll()` removes and returns the smallest element. Elements are dequeued in ascending order: 1, 3, 5.

`easy` — 1 mark

---

## Concurrency (P15–P20)

### P15 — Synchronized Block

What is the output?

```java
public class Counter {
    private int count = 0;

    public void increment() {
        synchronized (this) {
            count++;
        }
    }

    public int getCount() { return count; }

    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) c.increment();
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) c.increment();
        });
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(c.getCount());
    }
}
```

| # | Option |
| --- | --- |
| A | Always `2000` |
| B | Always less than `2000` |
| C | Sometimes less than `2000` without synchronization |
| D | Compilation error |
| E | Deadlock |

**Correct: A** (index 0)

The `synchronized (this)` block ensures mutual exclusion — only one thread executes `count++` at a time. Both threads iterate 1000 times, so the result is always 2000. Without synchronization, the result would be nondeterministic (sometimes less than 2000 due to race conditions).

`medium` — 1 mark

---

### P16 — Volatile Keyword

Which statement about the `volatile` keyword is correct?

| # | Option |
| --- | --- |
| A | It makes variables thread-safe for compound operations |
| B | It guarantees atomicity of `i++` |
| C | It ensures visibility of writes across threads |
| D | It replaces the need for `synchronized` in all cases |
| E | It prevents CPU caching entirely |

**Correct: C** (index 2)

`volatile` guarantees that reads and writes to the variable are visible across threads — a write by one thread is immediately visible to reads by other threads. It does not provide atomicity for compound operations like `i++` (read-modify-write). It is appropriate for flags and status variables, not for counters or accumulators.

`medium` — 1 mark

---

### P17 — Virtual Threads Blocking

What is a key characteristic of virtual threads in Java 21+?

| # | Option |
| --- | --- |
| A | They run on dedicated OS threads |
| B | They cannot perform blocking I/O |
| C | They are lightweight threads managed by the JVM, not the OS |
| D | They use more memory than platform threads |
| E | They require the `synchronized` keyword for all operations |

**Correct: C** (index 2)

Virtual threads are managed by the JVM's scheduler, not the operating system. They are extremely lightweight — you can create millions of them. When a virtual thread performs blocking I/O, the JVM unmounts it from its carrier thread and mounts another virtual thread, allowing efficient utilisation.

`easy` — 1 mark

---

### P18 — CompletableFuture Composition

What is the output?

```java
import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) throws Exception {
        CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "Hello");
        CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> " World");

        String result = f1.thenCombine(f2, (a, b) -> a + b).get();
        System.out.println(result);
    }
}
```

| # | Option |
| --- | --- |
| A | `Hello World` |
| B | `World Hello` |
| C | `Hello` |
| D | ExecutionException |
| E | `null` |

**Correct: A** (index 0)

`thenCombine` combines the results of two futures once both complete. `f1` produces "Hello", `f2` produces " World". The combiner function concatenates them: "Hello" + " World" = "Hello World". `.get()` blocks until the result is available.

`easy` — 1 mark

---

### P19 — Deadlock Conditions

Which of the following is NOT a necessary condition for deadlock?

| # | Option |
| --- | --- |
| A | Mutual exclusion |
| B | Hold and wait |
| C | No preemption |
| D | Circular wait |
| E | Thread priority inversion |

**Correct: E** (index 4)

The four necessary conditions for deadlock (Coffman conditions) are: (1) mutual exclusion — resources cannot be shared, (2) hold and wait — threads hold resources while waiting for others, (3) no preemption — resources cannot be forcibly taken, (4) circular wait — a cycle of threads exists. Thread priority inversion is a scheduling problem, not a deadlock condition.

`medium` — 1 mark

---

### P20 — ReentrantLock vs Synchronized

Which advantage does `ReentrantLock` have over `synchronized`?

| # | Option |
| --- | --- |
| A | It is simpler to use |
| B | It supports try-lock with timeout |
| C | It does not require explicit unlock |
| D | It is always faster |
| E | It provides automatic deadlock detection |

**Correct: B** (index 1)

`ReentrantLock` provides features that `synchronized` does not: `tryLock()` with a timeout, `lockInterruptibly()`, and multiple `Condition` objects. `synchronized` automatically releases the lock when the block exits; `ReentrantLock` requires an explicit `unlock()` in a `finally` block. `ReentrantLock` is not inherently faster — it is designed for situations where `synchronized` is insufficient.

`medium` — 1 mark

---

## Streams API (P21–P26)

### P21 — Stream Lazy Evaluation

What is the output?

```java
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        Stream.iterate(0, n -> n + 1)
              .filter(n -> {
                  System.out.print("f" + n + " ");
                  return n % 2 == 0;
              })
              .limit(3)
              .forEach(System.out::print);
    }
}
```

| # | Option |
| --- | --- |
| A | `f0 0f2 2f4 4` |
| B | `0 2 4` |
| C | Infinite loop |
| D | `f0 0 f2 2 f4 4` |
| E | `f00f22f44` |

**Correct: A** (index 0)

Streams are lazy — `filter` is invoked only when `forEach` requests elements. The pipeline requests elements until 3 match. For each element: filter prints "f0", element 0 passes (prints 0), filter prints "f1", element 1 fails, filter prints "f2", element 2 passes (prints 2), filter prints "f3" (fails), filter prints "f4", element 4 passes (prints 4). Output: `f0 0f2 2f4 4`.

`hard` — 1 mark

---

### P22 — Collectors.groupingBy

What is the output?

```java
import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        Map<String, List<Integer>> result = Stream.of(1, 2, 3, 4, 5, 6)
            .collect(Collectors.groupingBy(n -> n % 2 == 0 ? "even" : "odd"));
        System.out.println(result);
    }
}
```

| # | Option |
| --- | --- |
| A | `{odd=[1, 3, 5], even=[2, 4, 6]}` |
| B | `{even=[1, 3, 5], odd=[2, 4, 6]}` |
| C | `{odd=3, even=3}` |
| D | Compiler error |
| E | `{[1, 3, 5], [2, 4, 6]}` |

**Correct: A** (index 0)

`Collectors.groupingBy` partitions elements by the classifier function. Odd numbers (1, 3, 5) are grouped under "odd", even numbers (2, 4, 6) under "even". The result is a `Map<String, List<Integer>>`. Map iteration order is not guaranteed, but the grouping is correct.

`easy` — 1 mark

---

### P23 — FlatMap

What is the output?

```java
import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<List<Integer>> nested = List.of(
            List.of(1, 2),
            List.of(3, 4),
            List.of(5)
        );
        List<Integer> flat = nested.stream()
            .flatMap(Collection::stream)
            .collect(Collectors.toList());
        System.out.println(flat);
    }
}
```

| # | Option |
| --- | --- |
| A | `[[1, 2], [3, 4], [5]]` |
| B | `[1, 2, 3, 4, 5]` |
| C | `[15]` |
| D | Compiler error |
| E | `[6, 12]` |

**Correct: B** (index 1)

`flatMap` maps each element to a stream and flattens the results into a single stream. Each inner list is converted to a stream, and all elements are combined into one flat stream. The result is `[1, 2, 3, 4, 5]`.

`easy` — 1 mark

---

### P24 — Reduce Operation

What is the output?

```java
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        int product = IntStream.rangeClosed(1, 5)
            .reduce(1, (a, b) -> a * b);
        System.out.println(product);
    }
}
```

| # | Option |
| --- | --- |
| A | `15` |
| B | `120` |
| C | `5` |
| D | `0` |
| E | `1` |

**Correct: B** (index 1)

`reduce(1, (a, b) -> a * b)` computes the product: 1 * 1 * 2 * 3 * 4 * 5 = 120. The identity value is 1 (multiplicative identity). `IntStream.rangeClosed(1, 5)` produces the stream 1, 2, 3, 4, 5.

`easy` — 1 mark

---

### P25 — Optional and Stream Interaction

What is the output?

```java
import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        Optional<String> result = Stream.of("apple", "banana", "cherry")
            .filter(s -> s.startsWith("b"))
            .findFirst();
        result.ifPresent(s -> System.out.print(s.length()));
    }
}
```

| # | Option |
| --- | --- |
| A | `5` |
| B | `6` |
| C | `apple` |
| D | Nothing is printed |
| E | `banana` |

**Correct: B** (index 1)

`findFirst()` returns an `Optional<String>`. The filter keeps only "banana" (starts with "b"). "banana" has length 6. `ifPresent` prints 6 if the Optional contains a value.

`easy` — 1 mark

---

### P26 — Parallel Streams Performance

Which statement about parallel streams is correct?

| # | Option |
| --- | --- |
| A | Parallel streams always outperform sequential streams |
| B | They use the ForkJoinPool by default |
| C | They are thread-safe for all operations |
| D | They require explicit thread management |
| E | They cannot be used with ordered data |

**Correct: B** (index 1)

Parallel streams use the common `ForkJoinPool` (available via `ForkJoinPool.commonPool()`). They are not always faster — small datasets or expensive operations may see no benefit or even performance degradation. They are not automatically thread-safe for side-effecting operations (use `ConcurrentHashMap` or `reduce` instead).

`medium` — 1 mark

---

## Exception Handling (P27–P30)

### P27 — Try-With-Resources

What is the output?

```java
class Resource implements AutoCloseable {
    Resource() { System.out.print("open "); }
    public void close() { System.out.print("close "); }
}

public class Main {
    public static void main(String[] args) {
        try (Resource r = new Resource()) {
            System.out.print("use ");
        }
    }
}
```

| # | Option |
| --- | --- |
| A | `open use close` |
| B | `use open close` |
| C | `open close use` |
| D | Compiler error |
| E | `open use` |

**Correct: A** (index 0)

Try-with-resources acquires the resource first (prints "open "), executes the block (prints "use "), then automatically calls `close()` (prints "close ") even if an exception occurs. This ensures deterministic resource cleanup.

`easy` — 1 mark

---

### P28 — Exception Propagation

What is the output?

```java
public class Main {
    static void methodA() {
        try {
            methodB();
        } catch (RuntimeException e) {
            System.out.print("caught ");
        }
    }

    static void methodB() {
        throw new RuntimeException();
    }

    public static void main(String[] args) {
        methodA();
        System.out.print("done");
    }
}
```

| # | Option |
| --- | --- |
| A | `done` |
| B | `caught done` |
| C | Unhandled exception — program terminates |
| D | `caught` |
| E | `RuntimeException done` |

**Correct: B** (index 1)

`methodB` throws a `RuntimeException`. It propagates up to `methodA`, where the `catch` block catches it (prints "caught "). Execution continues after the try-catch, printing "done".

`easy` — 1 mark

---

### P29 — Multi-Catch Block

What is the output?

```java
public class Main {
    public static void main(String[] args) {
        try {
            String s = null;
            s.length();
        } catch (NullPointerException | IndexOutOfBoundsException e) {
            System.out.print(e.getClass().getSimpleName());
        }
    }
}
```

| # | Option |
| --- | --- |
| A | `Exception` |
| B | `NullPointerException` |
| C | `IndexOutOfBoundsException` |
| D | Compiler error — multi-catch must not overlap |
| E | `RuntimeException` |

**Correct: B** (index 1)

The multi-catch block handles either `NullPointerException` or `IndexOutOfBoundsException`. `null.length()` throws `NullPointerException`. The catch block prints the exception's simple class name: "NullPointerException". Multi-catch is syntactic sugar — the variable `e` is implicitly final.

`easy` — 1 mark

---

### P30 — Custom Exception with Chaining

What is the output?

```java
class AppException extends Exception {
    AppException(String msg, Throwable cause) {
        super(msg, cause);
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            try {
                throw new java.io.IOException("disk error");
            } catch (java.io.IOException e) {
                throw new AppException("failed", e);
            }
        } catch (AppException e) {
            System.out.print(e.getMessage() + " ");
            System.out.print(e.getCause().getMessage());
        }
    }
}
```

| # | Option |
| --- | --- |
| A | `failed disk error` |
| B | `disk error failed` |
| C | `failed` |
| D | `IOException` |
| E | StackOverflowError |

**Correct: A** (index 0)

The inner try throws an `IOException`. The catch block wraps it in an `AppException` with message "failed". The outer catch prints `getMessage()` ("failed") and `getCause().getMessage()` ("disk error"). Exception chaining preserves the root cause while adding context.

`medium` — 1 mark

---

## Answer Key

<details>
<summary>Click to reveal the answer key</summary>

| Question | Answer | Question | Answer | Question | Answer |
| --- | --- | --- | --- | --- | --- |
| P1 | A | P11 | A | P21 | A |
| P2 | A | P12 | C | P22 | A |
| P3 | B | P13 | C | P23 | B |
| P4 | B | P14 | B | P24 | B |
| P5 | B | P15 | A | P25 | B |
| P6 | B | P16 | C | P26 | B |
| P7 | A | P17 | C | P27 | A |
| P8 | D | P18 | A | P28 | B |
| P9 | C | P19 | E | P29 | B |
| P10 | C | P20 | B | P30 | A |

</details>

---

## Difficulty Breakdown

| Difficulty | Count |
| --- | --- |
| Easy | 11 |
| Medium | 18 |
| Hard | 1 |

---

## Cross-References

- **[Object-Oriented Programming](https://java.wyattau.com/hub)** — Classes, inheritance, polymorphism, and design patterns
- **[Collections Framework](https://java.wyattau.com/hub)** — Data structures, iterators, and concurrent collections
- **[Concurrency](https://java.wyattau.com/hub)** — Threads, locks, virtual threads, and CompletableFuture
- **[Streams API](https://java.wyattau.com/hub)** — Functional-style operations on collections
- **[Exception Handling](https://java.wyattau.com/hub)** — Try-with-resources, custom exceptions, and error propagation
- **[Computer Science](https://computer-science.wyattau.com/hub)** — Algorithms and data structures that underpin Java collections
- **[C++ Programming](https://cpp.wyattau.com/hub)** — Comparing Java OOP with C++ templates and RAII

---

## Tips for Using This Practice Test

1. **Trace code by hand.** Follow each variable through the method call stack. Do not guess.
2. **Know the Collections contracts.** Understanding `equals`/`hashCode`, `Comparable`, and iterator semantics is essential.
3. **Understand the "why".** Java design decisions (generics type erasure, checked exceptions, virtual threads) have clear rationale. Understanding the motivation makes the rules easier to remember.
4. **Practise concurrency mentally.** Visualise thread interleavings to identify race conditions and deadlocks.
5. **Retake after one week.** Java has many subtle rules — spaced repetition is essential for retaining the details.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
