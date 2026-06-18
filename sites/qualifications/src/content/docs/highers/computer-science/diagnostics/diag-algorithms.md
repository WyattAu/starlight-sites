---
title: "Algorithms -- Diagnostic Tests"
description: "", booking.customerName
        OUTPUT "Pickup at: ", booking.pickupAddress
    ENDWHILE
    IF bookingQueue is not empty AND taxiAvailable = False
        OUTPUT "No taxis available. Bookings waiting: ", SIZE(bookingQueue)
    ENDIF
ENDPROCEDURE
```

(c) A **dynamic array** (or a linked list) would be most suitable for storing completed journeys. An
array allows efficient iteration for reporting (generating daily, weekly, or monthly reports). Since
completed journeys only grow over time and are not removed frequently, the contiguous memory layout
of an array provides fast access. If frequent insertion at any position were needed, a linked list
would be better, but for append-only storage with periodic reporting, an array is more efficient.

(d) **Linked list** advantages: efficient insertion and deletion ($O(1)$ when the node is known), no
need to resize. **Array** advantages: fast random access by index ($O(1)$), efficient searching with
binary search if sorted ($O(\log n)$). Since searching by customer ID is a primary operation, an
array (sorted by ID) enables binary search, which is faster than the $O(n)$ linear search required
for a linked list. However, if customers are frequently added and removed, a linked list avoids the
$O(n)$ cost of shifting elements in an array. The best choice depends on which operations are
performed most frequently: if searching dominates, use an array; if insertion and deletion dominate,
use a linked list.

---

### IT-2: Algorithm Analysis and Optimisation

**Question:**

(a) A sorting algorithm makes the following number of comparisons for inputs of different sizes:

| $n$ | Comparisons |
| --- | ----------- |
| 10  | 45          |
| 20  | 190         |
| 30  | 435         |
| 50  | 1225        |

Determine the time complexity of this algorithm from the data. Show your working.

(b) An algorithm processes $n$ items and has time complexity $O(n \log_2 n)$. If it takes 10 seconds
to process 1,000 items, estimate how long it would take to process 1,000,000 items.

(c) Explain the trade-off between time complexity and space complexity. Give an example of an
algorithm that achieves faster time complexity at the cost of increased space complexity.

(d) A developer chooses an algorithm with $O(n^2)$ time complexity over one with $O(n \log n)$
because the constant factors of the $O(n^2)$ algorithm are much smaller. Under what circumstances
might this be a reasonable decision?

**Solution:**

(a) If the complexity is $O(n^2)$, then comparisons $\approx k \cdot n^2$. Testing: for $n = 10$,
$k = 45/100 = 0.45$. For $n = 20$, $k = 190/400 = 0.475$. For $n = 30$, $k = 435/900 = 0.483$. For
$n = 50$, $k = 1225/2500 = 0.49$. The ratio comparisons$/n^2$ is approximately constant at around
$0.48$--$0.49$, confirming the time complexity is $O(n^2)$. This is consistent with an algorithm
such as bubble sort or selection sort.

(b) Time $T = k \cdot n \log_2 n$. For $n = 1000$:
$T = 10 = k \cdot 1000 \cdot \log_2(1000) = k \cdot 1000 \cdot 9.97 \approx k \cdot 9970$. So
$k \approx 10/9970 \approx 0.001003$.

For $n = 1,000,000$:
$T = 0.001003 \cdot 1000000 \cdot \log_2(1000000) = 0.001003 \cdot 1000000 \cdot 19.93 \approx 0.001003 \cdot 19930000 \approx 19993$
seconds $\approx 333$ minutes $\approx 5.6$ hours.

(c) The **time-space trade-off** refers to the principle that an algorithm can often be made faster
by using more memory, or made more memory-efficient by being slower. An example is **merge sort**,
which has $O(n \log n)$ time complexity but requires $O(n)$ additional space for the temporary
arrays used during merging. In contrast, an in-place sort like insertion sort uses $O(1)$ additional
space but has $O(n^2)$ time complexity.

(d) This decision is reasonable when $n$ is small. For small datasets, the constant factors matter
more than the asymptotic growth rate. For example, if $n = 50$ and Algorithm A ($O(n^2)$) has a
constant factor of 1 (giving $50^2 = 2500$ operations) while Algorithm B ($O(n \log n)$) has a
constant factor of 100 (giving $100 \times 50 \times 5.6 = 28000$ operations), Algorithm A would be
faster despite having worse asymptotic complexity. However, for large $n$, the $O(n^2)$ algorithm
will eventually be slower regardless of constant factors.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing LIFO (stack) with FIFO (queue): remember that a stack is last-in first-out, and a queue
  is first-in first-out.
- Assuming big-O notation gives exact operation counts: it describes the growth rate, not the
  precise number of operations.
- Choosing data structures based on theoretical complexity alone without considering practical
  factors such as constant factors, cache locality, and implementation overhead.
- Forgetting that best-case and worst-case complexity can differ dramatically: for example, linear
  search is $O(1)$ in the best case and $O(n)$ in the worst case.
