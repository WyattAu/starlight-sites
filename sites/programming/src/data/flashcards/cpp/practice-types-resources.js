/**
 * Programming - C++ Types and Resource Management Practice Problems
 * Covers: types, ownership, RAII, move semantics, smart pointers
 */

export const practiceQuestions = [
  {
    question: 'What is the size of a bool in C++?',
    options: ['1 byte', '4 bytes', 'Platform-dependent', 'Undefined'],
    correctAnswer: 0,
    explanation: 'The C++ standard guarantees that sizeof(bool) is at least 1. In practice, it is 1 byte on virtually all platforms.',
    difficulty: 'easy',
  },
  {
    question: 'What does RAII stand for in C++?',
    options: [
      'Resource Acquisition Is Initialization',
      'Runtime Array Index Access',
      'Random Access Internal Architecture',
      'Reference Assignment Is Inheritance',
    ],
    correctAnswer: 0,
    explanation: 'RAII (Resource Acquisition Is Initialization) ties resource lifecycle to object lifetime. Resources are acquired in constructors and released in destructors, ensuring no leaks.',
    difficulty: 'easy',
  },
  {
    question: 'What is the difference between a pointer and a reference in C++?',
    options: [
      'References can be null, pointers cannot',
      'Pointers can be null, references cannot',
      'They are identical',
      'References are faster',
    ],
    correctAnswer: 1,
    explanation: 'A reference must be initialized to a valid object and cannot be rebound. A pointer can be null, reassigned, and used for arithmetic. References are generally safer.',
    difficulty: 'easy',
  },
  {
    question: 'What happens when you use std::move on an object?',
    options: [
      'The object is deleted',
      'The object is copied',
      'The object is cast to an rvalue reference',
      'The object is swapped',
    ],
    correctAnswer: 2,
    explanation: 'std::move does not move anything. It casts its argument to an rvalue reference (T&&), enabling move constructors and move assignment operators to be called.',
    difficulty: 'medium',
  },
  {
    question: 'Which smart pointer should you use when you want shared ownership?',
    options: [
      'std::unique_ptr',
      'std::shared_ptr',
      'std::weak_ptr',
      'std::auto_ptr',
    ],
    correctAnswer: 1,
    explanation: 'std::shared_ptr uses reference counting to manage shared ownership. Multiple shared_ptr instances can own the same resource. Use std::weak_ptr to break cycles.',
    difficulty: 'easy',
  },
  {
    question: 'What is a dangling pointer?',
    options: [
      'A pointer that points to a valid object',
      'A pointer that points to freed or out-of-scope memory',
      'A pointer that is null',
      'A pointer to a constant',
    ],
    correctAnswer: 1,
    explanation: 'A dangling pointer refers to memory that has been deallocated or is no longer in scope. Dereferencing it is undefined behavior. RAII prevents this.',
    difficulty: 'easy',
  },
  {
    question: 'What is the Rule of Three?',
    options: [
      'Every class needs three constructors',
      'If you define one of destructor, copy constructor, or copy assignment, you should define all three',
      'Every function should have three parameters',
      'Classes should have three member variables',
    ],
    correctAnswer: 1,
    explanation: 'The Rule of Three states that if a class needs a custom destructor, copy constructor, or copy assignment operator, it likely needs all three. This ensures proper resource management.',
    difficulty: 'medium',
  },
  {
    question: 'What is the difference between std::vector and std::array?',
    options: [
      'vector is fixed-size, array is dynamic',
      'vector is dynamic, array is fixed-size',
      'They are identical',
      'array is faster for all operations',
    ],
    correctAnswer: 1,
    explanation: 'std::vector uses heap allocation and can grow/shrink. std::array uses stack allocation with a compile-time fixed size. array has no overhead but cannot resize.',
    difficulty: 'easy',
  },
  {
    question: 'What is move semantics primarily used for?',
    options: [
      'Copying objects efficiently',
      'Transferring ownership of resources without copying',
      'Deleting objects faster',
      'Creating thread-safe code',
    ],
    correctAnswer: 1,
    explanation: 'Move semantics allow transferring resource ownership (e.g., heap memory) from one object to another without expensive deep copies. The source object is left in a valid but unspecified state.',
    difficulty: 'medium',
  },
  {
    question: 'What is undefined behavior in C++?',
    options: [
      'Behavior that the compiler handles automatically',
      'Behavior not defined by the C++ standard, which can cause anything',
      'Behavior that occurs at runtime only',
      'Behavior that is platform-specific',
    ],
    correctAnswer: 1,
    explanation: 'Undefined behavior (UB) is behavior for which the standard imposes no requirements. The compiler may optimize unpredictably, and the program may crash, produce wrong results, or appear to work.',
    difficulty: 'medium',
  },
  {
    question: 'When should you use std::unique_ptr over std::shared_ptr?',
    options: [
      'When you need shared ownership',
      'When there is a single owner of the resource',
      'When you need weak references',
      'When performance does not matter',
    ],
    correctAnswer: 1,
    explanation: 'Use std::unique_ptr when there is a single clear owner. It has zero overhead compared to a raw pointer. Use shared_ptr only when ownership must be shared.',
    difficulty: 'medium',
  },
  {
    question: 'What is the purpose of std::make_unique and std::make_shared?',
    options: [
      'To create raw pointers',
      'To construct objects in-place with exception safety',
      'To delete objects',
      'To convert between pointer types',
    ],
    correctAnswer: 1,
    explanation: 'make_unique and make_shared construct objects directly in the smart pointer, avoiding the need for new. They provide strong exception safety guarantee.',
    difficulty: 'medium',
  },
]
