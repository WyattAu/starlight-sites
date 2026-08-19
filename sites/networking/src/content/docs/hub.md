---
title: "Complete Computer Networking Study Guide"
description: "Comprehensive computer networking study guide covering the OSI model, IP addressing, TCP/UDP, DNS, HTTP/HTTPS, TLS, network tools, Layer 2, wireless networking, and application protocols. From fundamentals to advanced topics with practical examples."
date: 2026-07-24
tags:
  - networking
  - study-guide
  - internet
  - protocols
  - systems-engineering
categories:
  - hub
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://networking.wyattau.com"},
    {"name": "Hub", "url": "https://networking.wyattau.com/hub"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Complete Computer Networking Study Guide",
  "description": "Comprehensive computer networking study guide covering the OSI model, TCP/IP, routing, security, and cloud networking.",
  "provider": {
    "@type": "Organization",
    "name": "Wyatt's Notes",
    "url": "https://networking.wyattau.com"
  },
  "url": "https://networking.wyattau.com/hub",
  "educationalLevel": "University",
  "inLanguage": "en",
  "isAccessibleForFree": true
}
</script>

## Why This Guide Exists

Computer networking is the backbone of modern computing. Every application that communicates over the internet — web browsers, mobile apps, APIs, databases, streaming services — relies on networking protocols and infrastructure. Understanding how networks work is essential for building reliable, secure, and performant systems.

This hub page maps every resource on this site. The learning path takes you from the foundational OSI model through IP addressing, transport protocols, application protocols, security, and network tools. Each section includes practical examples, packet captures, and troubleshooting techniques.

## Table of Contents

- [OSI Model and TCP/IP](#osi-model-and-tcpip)
- [IP Addressing](#ip-addressing)
- [TCP and UDP](#tcp-and-udp)
- [DNS](#dns)
- [HTTP and HTTPS](#http-and-https)
- [TLS](#tls)
- [Network Tools](#network-tools)
- [Layer 2 and Ethernet](#layer-2-and-ethernet)
- [Wireless Networking](#wireless-networking)
- [Email and Application Protocols](#email-and-application-protocols)
- [Learning Path](#learning-path)
- [Cross-Site Resources](#cross-site-resources)
- [FAQ](#faq)

---

## OSI Model and TCP/IP

The OSI (Open Systems Interconnection) model and the TCP/IP model are the conceptual frameworks that organise networking protocols into layers. Understanding these models is the foundation for everything else in networking.

### Topic Notes

- [OSI and TCP/IP Overview](01-osi-model) — the seven-layer OSI model and the four-layer TCP/IP model
- [OSI and TCP/IP](01-osi-model/osi-and-tcp-ip) — layer functions, protocol mapping, and encapsulation

### Key Concepts

The **OSI model** divides networking into seven layers, each with specific responsibilities:

1. **Physical** — raw bit transmission over physical media (cables, radio waves)
2. **Data Link** — node-to-node delivery, MAC addresses, and Ethernet frames
3. **Network** — end-to-end routing, IP addresses, and packet forwarding
4. **Transport** — reliable (TCP) or unreliable (UDP) data delivery between processes
5. **Session** — session management and dialog control
6. **Presentation** — data formatting, encryption, and compression
7. **Application** — network services to user applications (HTTP, DNS, SMTP)

The **TCP/IP model** simplifies this into four layers: Link, Internet, Transport, and Application. In practice, TCP/IP is the model used on the internet.

**Encapsulation** is the process of wrapping data with protocol headers as it moves down the layers. Each layer adds its own header (and sometimes trailer) to the data from the layer above. This is why a single HTTP request involves headers at every layer.

---

## IP Addressing

IP addressing is the mechanism that allows packets to be routed from source to destination across interconnected networks. IPv4 and IPv6 are the two versions of the Internet Protocol.

### Topic Notes

- [IP Addressing Overview](02-ip-addressing) — IP addresses, subnets, and routing
- [IP Addressing](02-ip-addressing/ip-addressing) — IPv4, IPv6, subnetting, and CIDR notation
- [Subnetting Workshop](02-ip-addressing/subnetting-workshop) — hands-on subnet calculation practice

### Key Concepts

**IPv4 addresses** are 32-bit numbers written in dotted-decimal notation (e.g., 192.168.1.1). There are roughly 4.3 billion IPv4 addresses — not enough for every device on the internet, which is why NAT (Network Address Translation) and IPv6 exist.

**Subnetting** divides a network into smaller sub-networks. A subnet mask determines which portion of an IP address identifies the network and which identifies the host. CIDR notation (e.g., /24) specifies the prefix length — the number of network bits.

**IPv6 addresses** are 128-bit numbers written in hexadecimal with colons (e.g., 2001:0db8:85a3::8a2e:0370:7334). IPv6 eliminates the need for NAT and provides a virtually unlimited address space.

**Private IP ranges** (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) are used within local networks and are not routable on the public internet. NAT translates between private and public addresses.

---

## TCP and UDP

TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two primary transport layer protocols. They serve different purposes and make different trade-offs between reliability and performance.

### Topic Notes

- [TCP and UDP Overview](03-tcp-udp) — transport layer protocols and their trade-offs
- [TCP and UDP](03-tcp-udp/tcp-and-udp) — connection management, flow control, and error handling
- [TCP State Machine](03-tcp-udp/tcp-state-machine) — connection states, SYN, FIN, and TIME_WAIT
- [UDP Deep Dive](03-tcp-udp/udp-deep-dive) — datagram structure, reliability, and usage patterns

### Key Concepts

**TCP** provides reliable, ordered, byte-stream delivery. It uses a three-way handshake (SYN, SYN-ACK, ACK) to establish connections, sequence numbers for ordering, acknowledgements for reliability, and flow control to prevent overwhelming the receiver.

**UDP** provides unreliable, connectionless, datagram delivery. It has no handshake, no ordering, and no retransmission. This makes it fast and lightweight — ideal for DNS queries, real-time video, gaming, and any application where speed matters more than perfect reliability.

**TCP flow control** uses a sliding window mechanism. The receiver advertises how much data it can buffer; the sender limits its transmission rate accordingly. This prevents the sender from overwhelming the receiver's buffer.

**TCP congestion control** adjusts the sending rate based on network conditions. Algorithms like slow start, congestion avoidance, fast retransmit, and fast recovery prevent congestion collapse.

---

## DNS

DNS (Domain Name System) translates human-readable domain names into IP addresses. It is one of the most critical infrastructure services on the internet — without it, every web request would require users to remember IP addresses.

### Topic Notes

- [DNS Overview](04-dns) — domain hierarchy, resolution process, and record types
- [DNS Architecture](04-dns/dns-architecture) — recursive resolvers, root servers, and caching
- [DNS](04-dns/dns) — record types (A, AAAA, CNAME, MX, TXT), TTL, and troubleshooting

### Key Concepts

**DNS resolution** is the process of translating a domain name to an IP address. Your device queries a recursive resolver, which queries root servers, TLD servers, and authoritative servers in sequence. The result is cached at each level to reduce future lookups.

**DNS record types** serve different purposes:

- **A** maps a domain to an IPv4 address
- **AAAA** maps a domain to an IPv6 address
- **CNAME** creates an alias from one domain to another
- **MX** specifies mail servers for a domain
- **TXT** stores arbitrary text (used for verification and SPF records)

**DNS caching** occurs at every level — browser, operating system, recursive resolver, and authoritative server. The TTL (Time to Live) determines how long a record can be cached. Lower TTLs mean faster propagation of changes but more DNS queries.

---

## HTTP and HTTPS

HTTP (HyperText Transfer Protocol) is the foundation of the World Wide Web. HTTPS adds TLS encryption to HTTP, providing confidentiality and integrity for web communication.

### Topic Notes

- [HTTP Overview](05-http-https) — request/response model, methods, and status codes
- [HTTP](05-http-https/http) — headers, cookies, caching, and connection management
- [HTTP/2 and HTTP/3](05-http-https/http-2-and-3) — multiplexing, server push, and QUIC
- [WebSockets](05-http-https/websockets) — bidirectional communication for real-time applications

### Key Concepts

**HTTP methods** indicate the desired action: GET retrieves data, POST creates resources, PUT replaces resources, PATCH partially updates resources, and DELETE removes resources. Idempotent methods (GET, PUT, DELETE) can be safely retried without side effects.

**HTTP status codes** indicate the result of a request: 2xx success, 3xx redirection, 4xx client error, 5xx server error. Common codes include 200 OK, 301 Moved Permanently, 404 Not Found, and 500 Internal Server Error.

**HTTP/2** introduced multiplexing (multiple requests over a single connection), header compression, and server push. **HTTP/3** replaces TCP with QUIC, improving performance on unreliable networks.

---

## TLS

TLS (Transport Layer Security) provides encryption, authentication, and integrity for network communication. HTTPS is HTTP over TLS — every secure website uses TLS.

### Topic Notes

- [TLS Overview](06-tls) — encryption, certificates, and the handshake process
- [TLS](06-tls/tls) — symmetric and asymmetric encryption, certificate chains, and trust
- [TLS Internals](06-tls/tls-internals) — cipher suites, key exchange, and protocol versions

### Key Concepts

The **TLS handshake** establishes a secure connection. The client and server negotiate cipher suites, exchange keys, and verify certificates. This happens before any application data is sent — the handshake is transparent to the user.

**Symmetric encryption** (AES, ChaCha20) encrypts data with a shared key. It is fast and suitable for bulk data. **Asymmetric encryption** (RSA, ECDSA) uses a public-private key pair. It is used during the handshake to exchange the symmetric key, not for bulk data.

**Certificate chains** establish trust. A server presents its certificate, which is signed by an intermediate CA, which is signed by a root CA. The client verifies the chain back to a trusted root certificate in its trust store.

---

## Network Tools

Network tools are essential for diagnosing, debugging, and understanding network behaviour. Knowing how to use these tools separates competent engineers from those who guess.

### Topic Notes

- [Network Tools Overview](07-network-tools) — diagnostic tools and their usage
- [Network Tools](07-network-tools/network-tools) — ping, traceroute, netstat, ss, and tcpdump
- [Traffic Analysis](07-network-tools/traffic-analysis) — packet captures, Wireshark, and protocol analysis

### Key Concepts

**ping** tests connectivity by sending ICMP echo requests and measuring round-trip time. It tells you whether a host is reachable and how latency compares to baseline.

**traceroute** (or tracert on Windows) shows the path packets take to a destination. It identifies which router is causing delays or packet loss.

**tcpdump** captures raw packet data on a network interface. It is the most powerful tool for understanding exactly what is happening on the wire. Learn its filter syntax — it is indispensable for debugging.

---

## Layer 2 and Ethernet

Layer 2 handles communication within a single network segment. Ethernet is the dominant Layer 2 technology, using MAC addresses to identify devices and switches to forward frames.

### Topic Notes

- [Layer 2 Overview](08-layer2) — Ethernet, MAC addresses, and switching
- [Layer 2 and Ethernet](08-layer2/layer2-and-ethernet) — frame structure, VLANs, and Spanning Tree Protocol

### Key Concepts

**MAC addresses** are 48-bit hardware addresses burned into network interfaces. They are used for local delivery within a network segment — once a packet reaches the destination network, ARP resolves the IP address to a MAC address.

**VLANs** (Virtual LANs) logically segment a physical network. Devices on different VLANs cannot communicate directly — they must go through a router. VLANs improve security and reduce broadcast traffic.

---

## Wireless Networking

Wireless networking uses radio waves to provide network connectivity without physical cables. Wi-Fi is the dominant wireless technology for local area networking.

### Topic Notes

- [Wireless Overview](09-wireless) — Wi-Fi standards, security, and configuration
- [Wireless Networking](09-wireless/wireless-networking) — 802.11 standards, WPA3, and channel management

### Key Concepts

**Wi-Fi standards** (802.11a/b/g/n/ac/ax) define speed, range, and frequency bands. Modern networks use Wi-Fi 6 (802.11ax) for improved performance in dense environments.

**WPA3** is the current Wi-Fi security standard. It provides stronger encryption and protection against offline dictionary attacks. Never use WEP or WPA — they are broken.

---

## Email and Application Protocols

Email and application protocols provide specific services over the network. Understanding them is essential for building and maintaining communication systems.

### Topic Notes

- [Email and Application Protocols Overview](10-email-and-app-protocols) — email, SSH, FTP, and other protocols
- [Email and Application Protocols](10-email-and-app-protocols/email-and-application-protocols) — SMTP, IMAP, POP3, SSH, and their security

### Key Concepts

**SMTP** (Simple Mail Transfer Protocol) sends email between servers. **IMAP** (Internet Message Access Protocol) retrieves email from a server while keeping it synchronised across devices. **POP3** (Post Office Protocol) downloads email to a single device.

**SSH** (Secure Shell) provides encrypted remote access to servers. It is the standard tool for server administration. Use key-based authentication instead of passwords.

---

## Learning Path

Networking knowledge builds in layers — literally. Follow this progression.

### Stage 1: Foundations (Weeks 1–4)

- Study the OSI and TCP/IP models
- Learn IP addressing and subnetting
- Understand TCP and UDP fundamentals

### Stage 2: Core Protocols (Weeks 5–8)

- Study DNS resolution and record types
- Learn HTTP methods, status codes, and headers
- Understand TLS and certificate chains

### Stage 3: Advanced Topics (Weeks 9–12)

- Master network tools — tcpdump, Wireshark, traceroute
- Study Layer 2 — Ethernet, VLANs, and switching
- Learn wireless networking and email protocols

### Stage 4: Expert (Weeks 13–16)

- Study network security — firewalls, IDS/IPS, and VPNs
- Learn cloud networking — VPCs, load balancers, and CDNs
- Build and debug real networked applications

---

## Cross-Site Resources

Wyatt's Notes is a network of interconnected study sites. The networking content connects to related material:

- **[Security Guide](https://security.wyattau.com/hub)** — network security, cryptography, and penetration testing
- **[C++ Programming Guide](https://cpp.wyattau.com/hub)** — if you are building networked applications in C++
- **[Python Programming Guide](https://python.wyattau.com/hub)** — if you are using Python for networking (socket, asyncio)
- **[Database Design Guide](https://databases.wyattau.com/hub)** — how databases communicate over networks
- **[Computer Science Guide](https://computer-science.wyattau.com/hub)** — algorithms and protocols that underpin networking

---

## Frequently Asked Questions

### How should I start learning networking?

Start with the OSI model and TCP/IP. Understand what each layer does and which protocols operate at each layer. Then learn IP addressing — subnetting is a fundamental skill. Build from the bottom up.

### Do I need to know subnetting?

Yes. Subnetting is essential for network design, troubleshooting, and security. Practise calculating subnets by hand — it builds an intuition that tools alone cannot provide.

### What is the difference between TCP and UDP?

TCP provides reliable, ordered delivery with connection management. UDP provides fast, connectionless delivery without reliability guarantees. Use TCP for web traffic, file transfer, and email. Use UDP for DNS, video streaming, gaming, and real-time communication.

### How do I troubleshoot a network problem?

Start with ping — is the host reachable? Then traceroute — where is the packet being dropped? Then tcpdump — what does the actual traffic look like? Work from connectivity up to application layer.

### Why is TLS important?

TLS encrypts data in transit, preventing eavesdropping and tampering. Without TLS, anyone on the network path can read your passwords, modify your data, and impersonate the server. Always use HTTPS.

### What tools should I learn first?

Start with ping, traceroute, and tcpdump. These three tools can diagnose the vast majority of network problems. Learn Wireshark for detailed packet analysis when tcpdump is not enough.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
