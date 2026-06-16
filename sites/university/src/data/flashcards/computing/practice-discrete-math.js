/**
 * University Computing - Discrete Mathematics Practice Problems
 * Covers: logic, sets, relations, functions, graph theory, combinatorics
 */

export const practiceQuestions = [
  {
    question: 'What is the truth value of (p -> q) when p is true and q is false?',
    options: ['True', 'False', 'Undefined', 'Depends on context'],
    correctAnswer: 1,
    explanation: 'The implication p -> q is false only when p is true and q is false. In all other cases, it is true. This is the definition of material implication in propositional logic.',
    difficulty: 'easy',
  },
  {
    question: 'Which of the following is a tautology?',
    options: ['p AND NOT p', 'p OR NOT p', 'p AND q', 'p -> q'],
    correctAnswer: 1,
    explanation: 'p OR NOT p is always true regardless of the truth value of p. This is the Law of Excluded Middle: every proposition is either true or false.',
    difficulty: 'easy',
  },
  {
    question: 'What is the cardinality of the power set of {1, 2, 3}?',
    options: ['3', '6', '8', '9'],
    correctAnswer: 2,
    explanation: 'The power set of a set with n elements has 2^n elements. For {1, 2, 3}, |P(S)| = 2^3 = 8. The subsets are: {}, {1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}.',
    difficulty: 'easy',
  },
  {
    question: 'A function f: A -> B is injective (one-to-one) if:',
    options: [
      'Every element in B has a preimage',
      'f(a1) = f(a2) implies a1 = a2',
      'f is surjective',
      'A and B have the same cardinality',
    ],
    correctAnswer: 1,
    explanation: 'Injectivity means distinct inputs map to distinct outputs. If f(a1) = f(a2), then a1 must equal a2. This is equivalent to saying no two different elements in A map to the same element in B.',
    difficulty: 'easy',
  },
  {
    question: 'In graph theory, what is the maximum number of edges in a simple undirected graph with n vertices?',
    options: ['n', 'n-1', 'n(n-1)/2', 'n^2'],
    correctAnswer: 2,
    explanation: 'A simple graph has no self-loops or parallel edges. The maximum edges occur when every pair of vertices is connected: C(n,2) = n(n-1)/2.',
    difficulty: 'medium',
  },
  {
    question: 'What is the time complexity of binary search on a sorted array of n elements?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
    correctAnswer: 1,
    explanation: 'Binary search halves the search space at each step. Starting with n elements, after k steps we have n/2^k elements. We stop when n/2^k = 1, so k = log2(n).',
    difficulty: 'easy',
  },
  {
    question: 'Which proof technique is most appropriate for proving "for all n in N, P(n)"?',
    options: ['Direct proof', 'Mathematical induction', 'Proof by contradiction', 'Proof by contrapositive'],
    correctAnswer: 1,
    explanation: 'Mathematical induction is designed for statements about natural numbers. We prove the base case P(0) and the inductive step: if P(k) holds, then P(k+1) holds.',
    difficulty: 'easy',
  },
  {
    question: 'What is the recurrence relation for the Fibonacci sequence?',
    options: [
      'F(n) = F(n-1) + F(n-2)',
      'F(n) = 2*F(n-1)',
      'F(n) = F(n-1) * F(n-2)',
      'F(n) = F(n-1) + n',
    ],
    correctAnswer: 0,
    explanation: 'The Fibonacci sequence is defined by F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n >= 2. Each term is the sum of the two preceding terms.',
    difficulty: 'easy',
  },
  {
    question: 'In a binary search tree, what is the average time complexity for search?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctAnswer: 1,
    explanation: 'In a balanced BST, each comparison eliminates half the remaining nodes. Average case is O(log n). Worst case (skewed tree) is O(n).',
    difficulty: 'medium',
  },
  {
    question: 'What does the Master Theorem solve?',
    options: [
      'Linear equations',
      'Recurrence relations of the form T(n) = aT(n/b) + f(n)',
      'Differential equations',
      'Matrix operations',
    ],
    correctAnswer: 1,
    explanation: 'The Master Theorem provides asymptotic bounds for divide-and-conquer recurrences T(n) = aT(n/b) + f(n), where a >= 1 and b > 1. It has three cases based on comparing f(n) with n^(log_b(a)).',
    difficulty: 'medium',
  },
  {
    question: 'What is the space complexity of merge sort?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
    correctAnswer: 2,
    explanation: 'Merge sort requires O(n) auxiliary space for the temporary arrays used during the merge step. The recursion stack uses O(log n) space, but the dominant term is O(n).',
    difficulty: 'medium',
  },
  {
    question: 'Which data structure is most appropriate for implementing a priority queue?',
    options: ['Array', 'Linked list', 'Binary heap', 'Hash table'],
    correctAnswer: 2,
    explanation: 'A binary heap provides O(log n) insertion and O(log n) extraction of the minimum/maximum element. Arrays and linked lists would require O(n) for extraction.',
    difficulty: 'easy',
  },
]
