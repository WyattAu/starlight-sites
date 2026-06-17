---
# Content Templates for Wyatt's Notes
#
# These templates provide a standard structure for creating new notes.
# Copy the relevant template and fill in the sections.
#
# Usage:
#   1. Choose the appropriate template below
#   2. Copy it to the appropriate directory
#   3. Fill in the sections with your content
#   4. Remove any unused sections
---

## Template 1: Topic Note (Standard)

```mdx
---
title: "Topic Name"
description: "Brief description of what this note covers"
---

# Topic Name

## Overview

Brief introduction to the topic. What is it? Why is it important?

## Key Concepts

### Concept 1

Explanation of the first key concept.

**Important:** Highlight critical information.

### Concept 2

Explanation of the second key concept.

## Formulas & Equations

$$
E = mc^2
$$

Where:
- $E$ = energy
- $m$ = mass
- $c$ = speed of light

## Examples

### Example 1: Basic Application

**Problem:** Describe the problem.

**Solution:**
1. Step 1
2. Step 2
3. Step 3

### Example 2: Advanced Application

**Problem:** Describe the problem.

**Solution:**
1. Step 1
2. Step 2
3. Step 3

## Practice Problems

<PracticeProblem
  questions={[
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      explanation: "2 + 2 = 4",
      difficulty: "easy"
    }
  ]}
/>

## Common Mistakes

1. **Mistake 1:** Description and how to avoid it
2. **Mistake 2:** Description and how to avoid it

## Summary

- Key point 1
- Key point 2
- Key point 3

## Further Reading

- [Link to related topic 1]
- [Link to related topic 2]
```

---

## Template 2: Flashcard Deck

```mdx
---
title: "Flashcard Deck Name"
description: "Spaced repetition flashcards for topic"
---

# Flashcard Deck Name

## About This Deck

Brief description of what this flashcard deck covers.

<FlashcardDeck
  deckId="deck-identifier"
  title="Deck Title"
  description="Brief description"
  cards={[
    {
      id: "card-1",
      front: "Question or concept",
      back: "Answer or explanation",
      tags: ["tag1", "tag2"],
      difficulty: "medium"
    },
    {
      id: "card-2",
      front: "Another question",
      back: "Another answer",
      tags: ["tag1"],
      difficulty: "easy"
    }
  ]}
/>

## How to Use

1. Click "Study Now" to begin
2. Rate your confidence after each card
3. The SM-2 algorithm will schedule reviews
4. Track your progress in the Stats view

## Card Categories

- **Easy:** Basic recall
- **Medium:** Application
- **Hard:** Analysis and synthesis
```

---

## Template 3: Diagnostic Test

```mdx
---
title: "Diagnostic Test Name"
description: "Adaptive assessment for topic"
---

# Diagnostic Test Name

## About This Test

Brief description of what this diagnostic test assesses.

<DiagnosticTest
  subject="Subject Name"
  questions={[
    {
      id: "q1",
      topic: "Topic 1",
      difficulty: 2,
      question: "Question text?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctIndex: 1,
      explanation: "Explanation of the correct answer"
    }
  ]}
  onComplete={(results) => console.log(results)}
/>

## How It Works

1. Answer questions at your own pace
2. The test adapts based on your performance
3. Focus on weak areas identified
4. Review recommended topics

## Scoring

- **90-100%:** Mastery achieved
- **70-89%:** Good understanding, review weak areas
- **50-69%:** Needs improvement, focus on fundamentals
- **Below 50%:** Review basics thoroughly
```

---

## Template 4: Interactive Simulation

```mdx
---
title: "Simulation Name"
description: "Interactive PhET simulation for concept"
---

# Simulation Name

## Overview

Brief description of what this simulation demonstrates.

<PhetSimulation
  url="https://phet.colorado.edu/sims/html/..."
  title="Simulation Title"
  width={800}
  height={600}
/>

## Learning Objectives

1. Understand concept X
2. Apply formula Y
3. Analyze results Z

## Instructions

1. Click "Play" to start
2. Adjust parameters using sliders
3. Observe changes in real-time
4. Answer the questions below

## Questions

1. What happens when you increase X?
2. How does Y affect Z?
3. Calculate the value of W when...

## Key Takeaways

- Takeaway 1
- Takeaway 2
- Takeaway 3
```

---

## Template 5: Desmos Graph

```mdx
---
title: "Graph Title"
description: "Interactive Desmos graph for visualization"
---

# Graph Title

## Overview

Brief description of what this graph visualizes.

<DesmosGraph
  url="https://www.desmos.com/calculator/..."
  title="Graph Title"
  width={800}
  height={600}
/>

## Explanation

Detailed explanation of the graph and what it represents.

## Key Points

1. Point 1
2. Point 2
3. Point 3

## Practice

Try changing the parameters and observe how the graph changes.

## Related Concepts

- [Link to related concept 1]
- [Link to related concept 2]
```

---

## Template 6: Chinese Version (中文版)

```mdx
---
title: "主题名称"
description: "主题的简要描述"
---

# 主题名称

## 概述

主题的简要介绍。它是什么？为什么重要？

## 关键概念

### 概念 1

第一个关键概念的解释。

**重要：** 突出关键信息。

### 概念 2

第二个关键概念的解释。

## 公式与方程

$$
E = mc^2
$$

其中：
- $E$ = 能量
- $m$ = 质量
- $c$ = 光速

## 示例

### 示例 1：基本应用

**问题：** 描述问题。

**解答：**
1. 步骤 1
2. 步骤 2
3. 步骤 3

## 练习题

<PracticeProblem
  questions={[
    {
      question: "2 + 2 等于多少？",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      explanation: "2 + 2 = 4",
      difficulty: "easy"
    }
  ]}
/>

## 常见错误

1. **错误 1：** 描述及如何避免
2. **错误 2：** 描述及如何避免

## 总结

- 要点 1
- 要点 2
- 要点 3

## 延伸阅读

- [相关主题链接 1]
- [相关主题链接 2]
```

---

## Usage Notes

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| title | Yes | Page title |
| description | Yes | Brief description for SEO |

### Components Available

| Component | Description |
|-----------|-------------|
| `<PracticeProblem>` | Interactive multiple-choice questions |
| `<FlashcardDeck>` | Spaced repetition flashcards |
| `<DiagnosticTest>` | Adaptive assessment |
| `<PhetSimulation>` | PhET interactive simulations |
| `<DesmosGraph>` | Desmos graphing calculator |

### Difficulty Levels

| Level | Description |
|-------|-------------|
| easy | Basic recall, simple application |
| medium | Application, moderate complexity |
| hard | Analysis, synthesis, complex problems |

### Tags

Use consistent tags for categorization:
- Subject: `physics`, `math`, `chemistry`, `biology`
- Topic: `mechanics`, `algebra`, `organic-chemistry`
- Level: `ib`, `a-level`, `dse`, `university`
