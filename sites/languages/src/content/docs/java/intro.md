---

title: Introduction to Java
description: 'Java Introduction to Java notes covering key definitions, core concepts, worked examples, and practice questions for structured review and exam preparation.'

---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "languages", "url": "https://languages.wyattau.com"}, {"name": "Java", "url": "https://languages.wyattau.com/java"}, {"name": "Intro", "url": "https://languages.wyattau.com/java/intro"}]
}
</script>

## Abstract

This resource is created as an aggregation of best practices in Java. If you are learning Java for a
specific course, please refer to the IB Computer Science notes on this site for JETS.

## Topics Covered

### Core Language

- **Syntax and semantics** — primitive types, operators, control flow, arrays
- **Object-oriented programming** — classes, objects, inheritance, polymorphism, interfaces,
  abstract classes
- **Exception handling** — checked vs. unchecked exceptions, `try`/`catch`/`finally`, custom
  exceptions
- **Generics** — type parameters, bounded types, wildcards, type erasure

### Standard Library

- **Collections Framework** — `List` (`ArrayList`, `LinkedList`), `Set` (`HashSet`, `TreeSet`),
  `Map` (`HashMap`, `TreeMap`); choosing the right collection
- **Streams API** — functional-style operations on collections: `filter`, `map`, `reduce`, `collect`
- **I/O** — byte streams, character streams, buffered I/O, NIO
- **Concurrency** — `Thread`, `Runnable`, `ExecutorService`, `synchronized`, `java.util.concurrent`

### Best Practices

- **Effective Java** items — favour composition over inheritance, program to interfaces, minimise
  mutability
- **Design patterns** — Singleton, Factory, Observer, Strategy, Builder
- **Testing** — JUnit 5, test-driven development, mocking with Mockito
- **Build tools** — Maven and Gradle project structures, dependency management

## Code Examples

All code examples compile under Java 17 (LTS) unless otherwise noted.

<div className="godbolt-container">
 <iframe
 width="100%"
 height="800"
 src="https://godbolt.org/e#z:OYLghAFBqd5QCxAFwE4FN0BoCWIIDGAtgIYDW6AgqsAM4gDkAtACIDCAspQNICiA%2BgCEAqgEkAMi34AVAJoAFXgFIAzCxboARgFdgDLAQD2RAA44ANulTiSAO2DaSwdKIAmIAFYkAbiQPbaZGMAeW1kEzCAMQt0WxIidEZ9ADMY%2Blh0Vxwg1DcQACYsVMs8gEYimLiEkHQAD3iTSwA6L18sUAZ9HFpRWwJzbVdMxgAGLtoOEhxbAGVDbVQCRIYx3Fpgk1jR/XM7YDyCJXzBI8EASjO1znJ0eVRDD3QCZEZS/Q8Qctt0AHdokvc%2BUu5kYAFZ9LZtlhDIxpBh0ABqI4qN5YF4rBiXCBIIxDXhZHK4fDFWLxRJ1BrNVp%2BZKGWzIGYEEiWT6FWn04S0W61KEfQq7eyeHx%2BLmWZ44On4WKuNiGAZESGglRYaXiaboABy2iImisnwAnFgTIZaNkJbZZfLFcrjabkOa1d8tTq9aVDaKnva6TNkCRUMhLdrrVgPeLvb7/Y7NdrdagDSGIwG5UGQEqE37kFHnbGDZdaPNFssIppzDgCAj%2BiRaLQERTTJYkQB2E4jSgI9sI4ul8uBEj28veQw4VwI0jTCA%2B1DTYBKUEnUEsBF%2BuhnJsttsdzepOLmBHTZAIn5ItQIgAcIywCIQx8X%2BQALJfSLVRMgrDeEaURiNVOvN1vpsyCKTtOFYIH6NaqIuRz5AiTQgEwkGnAAVMiRyggAAtBP5KK2f4djhG54bSqAIhA%2B4IgAnu%2B34qIIlHHmwV4/pRpynKuSjNgReF4a48wloiOCkMA76lE0IwIkwCL5GJCJIfRAD0TG0Vx3GbsB9iCNoFhDCR9xHpBCLfEe6nAJp2lWBAZzYbhqkdsRpHkbU1HMU5qiMT8Lmscc7GcTZtl/rx2j8QiGCAQZKhNKCskIk5ilHpJ0mgtZhH%2BR2gXBQAXiRBkXgiGU4M5yl%2Bal7bkQVOXJSVm4/AgMSkVlSFZUixx5TgjXlSobAGXeMlHAAbP1e4MaOJDPq%2BqA%2Bb%2BVU8XxDbIKY74NU1kn5e1zV0aF5iVdNf75e%2B%2BSNaga2nHuQnbTtHZNQZ80mOdF17l5JxFSlJUcSwKnTXpTQkCYmy2K4ZE3gZT4vm%2BqiRAiYAMJD0MgKB4FNAQYGoJQyCA2h8OoLQTSWPYyAIJZFx3apb0fbZMwUYE6BEE08zIE0JhTvS5i2BAelWc9JONu9xWk62fOUJiWAggw4JYJCGLQjU9T1ugLTCmi2wXFgZAgI2on6qUjann1%2BT3n1jaa42D4i3e%2BhEKmF4S6sMKdCGnyKxiWIwIgIB0xEyBEoQxhmJYqAamSjAeK4ZBSaJIxNPkKR0gyTIsqUbIx5y3K8g7aCYMODs/KgP2vELIti9b%2Bi26E4RhAihjJAiweh/k4eR6RsqmDE2X5CiZz6OiYxYjiPst17RjN37Qq%2BHXIxshY430BAmhQpoAGoBRedYPPcSL8EmiPM8y%2BDwk9LBLY5hL5LQw6MAbDMuY9AMKiQykPYLInzgGDit46DX6sdRPGEyyrPu6Ai1WKWTQOdF6yiGFCNAgll5v1QJoE06AND32AKWQUTsii7DoAANRwL8DYWwb7R3pIyZkiRSgPnZMgZO8geSSw%2BOUAUoBqTCxwJodIlloQmC9LYa%2BxdYFTiGOwvMADPTmilP9QMCoHaqnVNmV0RoTRmjpJIyE5RbRKNsFmGM8jQzcJ9BmFRDtdHmn0ZGWR2i4zlF7P6QxVjExaJdJYy46cyHAjBBCKEttq4hzDmJBuEA4SYGau3TuStLgIHQCQHS%2BA3EMDNlgC2oIraeKSPbC8XdMSXFVp%2BC8IsVAeMlrbUJTtLiwNNJKO8QA%3D%3D"
 title="Compiler Explorer"
 sandbox="allow-scripts allow-same-origin"
 loading="lazy"
 ></iframe>
</div>

## Overview

This introduction provides comprehensive coverage of Java content for the Languages qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

## Content Structure

This page includes:

- **Key Definitions**: Precise explanations of essential concepts
- **Core Concepts**: Detailed treatment of fundamental principles
- **Worked Examples**: Step-by-step solutions demonstrating application
- **Practice Questions**: Examination-style questions with mark schemes
- **Common Pitfalls**: Frequent errors and how to avoid them
- **Exam Tips**: Strategies for maximising marks

## How to Use This Content

1. Read through the introductory material to establish context
2. Study the definitions and core concepts carefully
3. Work through the worked examples, following each step
4. Attempt the practice questions independently
5. Review your answers against the provided solutions
6. Note any areas requiring further revision

## Key Concepts

- Foundational definitions and terminology
- Application of principles to examination contexts
- Connections to related topics within the specification
- Assessment objective alignment

## Revision Strategies

- **Active Recall**: Test yourself on the material rather than passively re-reading
- **Spaced Repetition**: Review this content at increasing intervals
- **Interleaving**: Mix this topic with others during study sessions
- **Elaborative Interrogation**: Ask yourself why each concept works

## Exam Preparation

Practise applying these concepts under timed conditions. Focus on understanding what each question is asking and how marks are allocated. Review examiner reports to learn from common mistakes made by other students.

## Further Resources

- Flashcards for rapid revision of key terms
- Diagnostic tests to identify remaining gaps
- Practice problems with detailed worked solutions
- Cross-references to related topics

## Overview

This introduction provides comprehensive coverage of Java content for the Languages qualification, with detailed explanations, worked examples, and practice questions aligned to the specification.

## Content Structure

This page includes:

- **Key Definitions**: Precise explanations of essential concepts
- **Core Concepts**: Detailed treatment of fundamental principles
- **Worked Examples**: Step-by-step solutions demonstrating application
- **Practice Questions**: Examination-style questions with mark schemes
- **Common Pitfalls**: Frequent errors and how to avoid them
- **Exam Tips**: Strategies for maximising marks

## How to Use This Content

1. Read through the introductory material to establish context
2. Study the definitions and core concepts carefully
3. Work through the worked examples, following each step
4. Attempt the practice questions independently
5. Review your answers against the provided solutions
6. Note any areas requiring further revision

## Key Concepts

- Foundational definitions and terminology
- Application of principles to examination contexts
- Connections to related topics within the specification
- Assessment objective alignment

## Revision Strategies

- **Active Recall**: Test yourself on the material rather than passively re-reading
- **Spaced Repetition**: Review this content at increasing intervals
- **Interleaving**: Mix this topic with others during study sessions
- **Elaborative Interrogation**: Ask yourself why each concept works

## Exam Preparation

Practise applying these concepts under timed conditions. Focus on understanding what each question is asking and how marks are allocated. Review examiner reports to learn from common mistakes made by other students.
## Intuition

Java is the language of "write once, run anywhere." It compiles to bytecode that runs on the JVM, providing platform independence. Everything is an object (except primitives), and inheritance is the primary code reuse mechanism. The JVM handles memory management through garbage collection, so you do not free memory manually. Java's strength is its mature ecosystem: millions of libraries, frameworks (Spring, Hibernate), and tools. The language evolves steadily, adding records, sealed classes, and pattern matching while maintaining backward compatibility.

## Cross-References

- [Types and Variables](/languages/java/02-fundamentals/01-types-and-variables)
- [Classes](/languages/java/03-object-oriented/01-classes)
- [Collections Framework](/languages/java/04-collections/01-collections-framework)
