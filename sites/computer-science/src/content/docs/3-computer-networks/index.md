---


date: 2026-07-23T21:57:32+01:00
title: "Computer Networks | Computer Science"
description: "Computer networks enable the exchange of data between devices across local and wide areas. The study of networking is organised around layered models, such"
tags:
  - Computing
  - University
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "3 Computer Networks", "url": "https://computer-science.wyattau.com/3-computer-networks"}, {"name": "Index", "url": "https://computer-science.wyattau.com/3-computer-networks/index"}]
}
</script>

<!-- Course Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Computer Networks",
  "description": "Computer networks enable the exchange of data between devices across local and wide areas. The study of networking is organised around layered models, such",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://computer-science.wyattau.com"
  },
  "url": "https://computer-science.wyattau.com",
  "educationalLevel": "Secondary",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H"
  }
}
</script>

## Computer Networks

Computer networks enable the exchange of data between devices across local and wide areas. The study of networking is organised around layered models, such as the OSI seven-layer model and the TCP/IP model, which decompose communication into modular, independent components. Each layer provides services to the layer above while abstracting the implementation details of the layer below.

## Intuition

**A postal system for data:** Networking is like a postal system — your letter (data) gets wrapped in envelopes at each level (headers), routed through sorting offices (routers), and delivered to the right address. Each layer handles a different part of the journey, from physical delivery to addressing.

**Why it matters:** Every app you use — email, streaming, banking — depends on networks. Understanding protocols, routing, and congestion control explains why downloads are slow, video calls drop, and how data travels securely across the globe.

**The key insight:** Network design is fundamentally about trade-offs — reliability vs. speed, security vs. performance — and layered architecture lets you optimize one layer without breaking the others.

## Key Concepts

The TCP/IP model defines four layers: link, internet, transport, and application. The internet layer handles routing and addressing via IP, while the transport layer provides reliable (TCP) or unreliable (UDP) end-to-end delivery. Understanding encapsulation, where each layer adds its own header to the data, is fundamental to diagnosing network issues and designing protocols.

## Contents

1. [Network Models](1_network-models.md)
2. [Physical Layer](2_physical-layer.md)
3. [Data Link Layer](3_data-link-layer.md)
4. [Network Layer](4_network-layer.md)
5. [Transport Layer](5_transport-layer.md)
6. [Application Layer](6_application-layer.md)
7. [Network Security](7_network-security.md)
8. [Problem Set](8_problem-set.md)

## Overview

University-level computer networks notes covering protocols, architecture, and security.

## Topics Covered

- **Network Models**: OSI, TCP/IP, protocol stacks
- **Physical and Data Link**: Transmission, framing, error detection
- **Network Layer**: IP addressing, routing algorithms, DNS
- **Transport Layer**: TCP, UDP, flow control, congestion control

## Prerequisites

- Basic programming experience
- Understanding of binary representation
- Familiarity with client-server architecture

## How to Use These Notes

Start with network models to understand the layered approach, then progress to each layer in detail. Each section includes worked examples and practice problems.

## Navigation

Use the sidebar to browse topics, or start with the introductory pages linked from the sidebar.

## Additional Resources

Each section includes:

- Detailed explanations of key concepts
- Worked examples with step-by-step solutions
- Practice problems with answers
- Common pitfalls and how to avoid them
- Connections to other areas of computer science

## Study Tips

1. **Master the layers**: Understand what each layer does and how they interact
2. **Learn protocols**: Know the key protocols (TCP, UDP, IP, HTTP, DNS) and their purposes
3. **Practise with tools**: Use Wireshark to capture and analyse network traffic
4. **Understand trade-offs**: Reliability vs. speed, security vs. performance
5. **Connect to applications**: Relate networking concepts to web, email, and streaming

## Cross-References

- **[Systems](../../../../../typescript/src/content/docs/index):** Computer architecture and operating systems that networking relies on.
- **[Network Security](./7_network-security.md):** TLS, encryption, and authentication protocols.
- **[Databases](../../../../../typescript/src/content/docs/index):** Distributed databases that depend on network communication.

- [Discrete Mathematics](https://mathematics.wyattau.com/docs/discrete-mathematics)
- [Algorithm Implementation](https://programming.wyattau.com/docs/algorithms)

## Common Mistakes

- **Confusing TCP and UDP use cases:** TCP provides reliable, ordered delivery; UDP provides fast, connectionless delivery. Using TCP for real-time video introduces unnecessary latency; using UDP for file transfer loses data. Match the protocol to the application's requirements.
- **Forgetting that DNS is a single point of failure:** Many applications assume DNS will always respond. If DNS fails, the application is unreachable regardless of how well the rest of the infrastructure is designed. Always consider DNS redundancy and caching.
- **Assuming the OSI model maps directly to the TCP/IP stack:** The OSI model has 7 layers; TCP/IP has 4. Students often confuse which protocols belong to which layer, especially for application-layer protocols that span multiple OSI layers (e.g., HTTP).
- **Neglecting network security from the start:** Security is not an afterthought. Protocols like HTTP transmit data in plaintext; TLS must be added explicitly. Designing a network without considering encryption, authentication, and access control from the beginning leads to costly retrofits.
