---
date: 2026-07-23T14:42:26+01:00
title: AP Computer Science A
description: Complete guide to AP Computer Science A covering Java programming, data structures, algorithms, and exam preparation.
---

# AP Computer Science A

## Course Overview

AP Computer Science A is a college-level course that introduces students to computer science through Java programming. The course covers fundamental programming concepts, object-oriented programming, data structures, and algorithms.

### Exam Format
- **Duration**: 3 hours
- **Sections**: 
  - Section I: 40 multiple-choice questions (1 hour 30 minutes)
  - Section II: 4 free-response questions (1 hour 30 minutes)
- **Score**: 1-5 (3+ typically earns college credit)

### Topics Covered
| Topic | Weight | Questions |
|-------|--------|-----------|
| Primitive Types | 2.5-5% | 1-2 |
| Using Objects | 5-7.5% | 2-3 |
| Control Flow | 15-17.5% | 6-7 |
| Arrays | 10-12.5% | 4-5 |
| Classes | 5-7.5% | 2-3 |
| Inheritance | 5-7.5% | 2-3 |
| Recursion | 5-7.5% | 2-3 |
| ArrayList | 10-12.5% | 4-5 |
| 2D Arrays | 5-7.5% | 2-3 |

---

## Java Fundamentals

### Primitive Types

Java has 8 primitive data types:

```java
// Integer types
byte myByte = 127;        // 8-bit, -128 to 127
short myShort = 32000;    // 16-bit, -32768 to 32767
int myInt = 2147483647;   // 32-bit, -2^31 to 2^31-1
long myLong = 9223372036854775807L;  // 64-bit

// Floating-point types
float myFloat = 3.14f;    // 32-bit, ~7 decimal digits
double myDouble = 3.141592653589793;  // 64-bit, ~15 decimal digits

// Other types
char myChar = 'A';        // 16-bit Unicode character
boolean myBoolean = true; // true or false
```

### Variables and Constants

```java
// Variable declaration and initialization
int score = 100;
String name = "Alice";
double average = 95.5;

// Constants (final keyword)
final int MAX_SCORE = 100;
final String GRADE_SCALE = "A-F";
```

### Operators

```java
// Arithmetic operators
int sum = 10 + 5;      // 15
int difference = 10 - 5;  // 5
int product = 10 * 5;   // 50
int quotient = 10 / 3;  // 3 (integer division)
int remainder = 10 % 3;  // 1

// Relational operators
boolean isEqual = (10 == 10);  // true
boolean isGreater = (10 > 5);  // true
boolean isLess = (10 < 5);    // false

// Logical operators
boolean and = true && false;  // false
boolean or = true || false;   // true
boolean not = !true;          // false

// Increment/Decrement
int x = 5;
x++;  // x is now 6
x--;  // x is now 5
```

---

## Control Flow

### If-Else Statements

```java
int grade = 85;

if (grade >= 90) {
    System.out.println("A");
} else if (grade >= 80) {
    System.out.println("B");
} else if (grade >= 70) {
    System.out.println("C");
} else if (grade >= 60) {
    System.out.println("D");
} else {
    System.out.println("F");
}
```

### Switch Statements

```java
String day = "Monday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        System.out.println("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Invalid day");
}
```

### For Loops

```java
// Basic for loop
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```

### While and Do-While Loops

```java
// While loop
int count = 0;
while (count < 10) {
    System.out.println(count);
    count++;
}

// Do-while loop (executes at least once)
int count = 0;
do {
    System.out.println(count);
    count++;
} while (count < 10);
```

---

## Arrays

### Declaration and Initialization

```java
// Declare and allocate
int[] numbers = new int[10];

// Declare and initialize
int[] numbers = {1, 2, 3, 4, 5};

// Access elements
int first = numbers[0];  // 1
int last = numbers[4];   // 5

// Modify elements
numbers[0] = 10;

// Array length
int length = numbers.length;  // 5
```

### Array Traversal

```java
int[] numbers = {1, 2, 3, 4, 5};

// Using for loop
for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}

// Using enhanced for loop
for (int num : numbers) {
    System.out.println(num);
}
```

### Common Array Operations

```java
// Find maximum
int max = numbers[0];
for (int i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// Reverse array
for (int i = 0; i < numbers.length / 2; i++) {
    int temp = numbers[i];
    numbers[i] = numbers[numbers.length - 1 - i];
    numbers[numbers.length - 1 - i] = temp;
}
```

---

## Object-Oriented Programming

### Classes and Objects

```java
public class Student {
    // Instance variables
    private String name;
    private int age;
    private double gpa;
    
    // Constructor
    public Student(String name, int age, double gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    // Methods
    public String getName() {
        return name;
    }
    
    public void setGpa(double gpa) {
        this.gpa = gpa;
    }
    
    public boolean isHonorRoll() {
        return gpa >= 3.5;
    }
}

// Creating objects
Student alice = new Student("Alice", 16, 3.8);
Student bob = new Student("Bob", 17, 3.2);
```

### Inheritance

```java
public class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void speak() {
        System.out.println(name + " makes a sound");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void speak() {
        System.out.println(name + " barks");
    }
}
```

### Polymorphism

```java
Animal animal = new Dog("Rex");
animal.speak();  // Outputs: Rex barks (runtime polymorphism)

// Method overloading
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
}
```

---

## Data Structures

### ArrayList

```java
import java.util.ArrayList;

ArrayList<String> names = new ArrayList<>();

// Add elements
names.add("Alice");
names.add("Bob");
names.add("Charlie");

// Access elements
String first = names.get(0);  // "Alice"

// Remove elements
names.remove(1);  // Removes "Bob"

// Size
int size = names.size();  // 2

// Check if contains
boolean hasAlice = names.contains("Alice");  // true
```

### HashMap

```java
import java.util.HashMap;

HashMap<String, Integer> ages = new HashMap<>();

// Add entries
ages.put("Alice", 16);
ages.put("Bob", 17);

// Get values
int aliceAge = ages.get("Alice");  // 16

// Check if key exists
boolean hasAlice = ages.containsKey("Alice");  // true

// Remove entry
ages.remove("Bob");

// Size
int size = ages.size();  // 1
```

---

## Algorithms

### Searching

```java
// Linear Search
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// Binary Search (array must be sorted)
public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
```

### Sorting

```java
// Selection Sort
public static void selectionSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

// Insertion Sort
public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

### Recursion

```java
// Factorial
public static int factorial(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Fibonacci
public static int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## Exam Preparation

### Practice Questions

**Question 1**: What is the output of the following code?
```java
int x = 5;
int y = x++;
System.out.println(y);
```
A) 4  B) 5  C) 6  D) Error

**Answer**: B) 5 (post-increment returns original value)

**Question 2**: Which data structure uses FIFO ordering?
A) Stack  B) Queue  C) ArrayList  D) HashMap

**Answer**: B) Queue (First In, First Out)

**Question 3**: What is the time complexity of binary search?
A) O(n)  B) O(log n)  C) O(n²)  D) O(1)

**Answer**: B) O(log n)

### Tips for Success

1. **Practice coding daily** - Build muscle memory
2. **Understand concepts, not just syntax** - Why things work
3. **Do past exams** - Familiarize with question format
4. **Time management** - Don't spend too long on one question
5. **Debug systematically** - Use print statements to trace

### Common Mistakes

1. **Off-by-one errors** - Array indices start at 0
2. **Integer division** - 10/3 = 3, not 3.33
3. **Null pointer exceptions** - Check for null before using objects
4. **Forgetting return statements** - Methods with return type must return
5. **Confusing == with .equals()** - Use .equals() for object comparison

## See Also

- [AP](./)
- [AP Computer Science Principles](./ap-computer-science-principles)
- [About This Site](./about)
