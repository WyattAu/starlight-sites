---
title: Arrays, Slices, and Maps
description: ""key"] = 42

// Literal
m := map[string]int{
    "a": 1,
    "b": 2,
    "c": 3,
}
```

### Map Operations

```go
m := map[string]int{"x": 10, "y": 20}

// Read
v := m["x"]       // 10
v := m["missing"] // 0 -- zero value for missing keys (no error)

// Read with existence check
v, ok := m["x"]
if ok {
    fmt.Println("found:", v)
}

// Delete
delete(m, "x")

// Length
fmt.Println(len(m))

// Iterate (order is not guaranteed)
for k, v := range m {
    fmt.Printf("%s: %d\n", k, v)
}
```

### Map Keys

Map keys must be comparable. Comparable types are: booleans, integers, floats, strings, pointers,
Interfaces (if the dynamic type is comparable), structs (if all fields are comparable), and arrays
(if element type is comparable).

Slices, maps, and functions are not comparable and cannot be used as map keys.

### Map Capacity

Pre-allocate capacity when the approximate size is known:

```go
m := make(map[string]int, 1000) // hint for ~1000 entries
```

## Structs

Structs are aggregate types that group named fields:

```go
type Point struct {
    X, Y float64
}

type Circle struct {
    Center Point
    Radius float64
}
```

### Struct Literals

```go
p := Point{1.0, 2.0}
p := Point{X: 1.0, Y: 2.0} // named fields (order does not matter)
p := Point{}                // zero value: {0, 0}
```

### Anonymous Structs

Useful for intermediate data without defining a named type:

```go
result := struct {
    Value int
    Err   error
}{
    Value: 42,
    Err:   nil,
}
```

### Struct Embedding

Go supports type embedding (not inheritance):

```go
type Base struct {
    ID   int
    Name string
}

type Derived struct {
    Base
    Extra string
}

d := Derived{Base: Base{ID: 1, Name: "test"}, Extra: "data"}
fmt.Println(d.ID)   // 1 -- promoted field
fmt.Println(d.Name) // "test" -- promoted field
```

Promoted fields are accessed directly on the embedding struct. This is syntactic sugar -- there is
No inheritance hierarchy. The embedded struct"s methods are also promoted.

### Comparing Structs

Structs are comparable if all their fields are comparable:

```go
a := Point{1.0, 2.0}
b := Point{1.0, 2.0}
fmt.Println(a == b) // true
```

Structs containing slices or maps are not comparable.

## Common Pitfalls

1. **Forgetting to capture `append` return value.** `append` may allocate a new underlying array.
   The original slice header is not updated. Always write `s = append(s, ...)`.

2. **Slicing retains the underlying array.** A small slice of a large array prevents the large array
   from being garbage collected. Use `copy` to create an independent copy:

   ```go
   small := make([]byte, len(large[1000:1100]))
   copy(small, large[1000:1100])
   ```

3. **Writing to a `nil` map.** `var m map[string]int` creates a nil map. Writing to it panics.
   Always initialize with `make` or a literal before writing.

4. **Map iteration order is random.** Go randomizes map iteration order. Do not rely on it. If you
   need ordered iteration, maintain a separate sorted key slice.

5. **Concurrent map access.** Maps are not safe for concurrent use. Use `sync.RWMutex` or `sync.Map`
   for concurrent access.

6. **Struct embedding is not inheritance.** There is no `super` call, no method overriding in the
   OOP sense. Embedding is composition with syntactic sugar for field/method promotion.

## Summary

This topic covers the core concepts of arrays, slices, and maps, including underlying theory,
practical implementation, and key applications.

**Key concepts include:**

- core concepts and terminology
- algorithms and computational thinking
- practical implementation
- security and ethical considerations
- applications in the real world

Understanding these concepts thoroughly is essential for both examinations and practical
programming, and requires both theoretical knowledge and hands-on practice.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
