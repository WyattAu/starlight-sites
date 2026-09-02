---
title: "Computer Networking Practice Test — 30 Problems"
description: "30 computer networking problems covering OSI Model, TCP/IP, Routing, and Security. Multiple choice and scenario analysis with detailed explanations."
date: 2026-07-24
tags:
  - networking
  - practice-test
  - exam-preparation
  - protocols
categories:
  - practice-test
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"name": "Home", "url": "https://networking.wyattau.com"},
    {"name": "Practice Test", "url": "https://networking.wyattau.com/practice-test-mega"}
  ]
}
</script>

## Computer Networking Practice Test — 30 Problems

This practice test covers 30 problems across four major domains of computer networking: OSI Model and TCP/IP, Transport Protocols, Routing and DNS, and Network Security. Each problem tests conceptual understanding, protocol analysis, and real-world scenario reasoning. Work through all problems before checking the answer key.

## Instructions

- **Time limit:** 75 minutes (2.5 minutes per problem)
- **Format:** Multiple choice and scenario analysis — select the best answer or apply networking concepts to a scenario
- **Marking:** 1 mark per problem, 30 marks total
- **Conditions:** Attempt without notes.
- **After the test:** Check the answer key at the bottom. Study the explanations for any problems you got wrong.

| Domain | Problems | Marks |
| --- | --- | --- |
| OSI Model and TCP/IP | P1–P8 | 8 |
| Transport Protocols (TCP/UDP) | P9–P16 | 8 |
| Routing and DNS | P17–P23 | 7 |
| Network Security | P24–P30 | 7 |
| **Total** | **30** | **30** |

---

## OSI Model and TCP/IP (P1–P8)

### P1 — Layer Identification

At which OSI layer does a router operate?

| # | Option |
| --- | --- |
| A | Layer 1 — Physical |
| B | Layer 2 — Data Link |
| C | Layer 3 — Network |
| D | Layer 4 — Transport |
| E | Layer 5 — Session |

**Correct: C** (index 2)

Routers operate at Layer 3 (Network). They make forwarding decisions based on IP addresses, which are Network layer addresses. Layer 2 devices (switches) use MAC addresses. Layer 4 devices (load balancers) use port numbers.

`easy` — 1 mark

---

### P2 — Encapsulation Order

When a host sends an HTTP request, in which order are the protocol headers added?

| # | Option |
| --- | --- |
| A | TCP → IP → Ethernet → HTTP |
| B | HTTP → TCP → IP → Ethernet |
| C | Ethernet → IP → TCP → HTTP |
| D | IP → TCP → HTTP → Ethernet |
| E | HTTP → Ethernet → IP → TCP |

**Correct: B** (index 1)

Data flows down the protocol stack. The application adds HTTP headers, the transport layer adds TCP headers, the network layer adds IP headers, and the data link layer adds Ethernet headers (and trailers). This is encapsulation — each layer wraps the data from the layer above.

`easy` — 1 mark

---

### P3 — PDU Names

What is the Protocol Data Unit (PDU) at the Transport layer?

| # | Option |
| --- | --- |
| A | Bit |
| B | Frame |
| C | Packet |
| D | Segment |
| E | Datagram |

**Correct: D** (index 3)

The PDU names by layer are: Physical = Bit, Data Link = Frame, Network = Packet, Transport = Segment (TCP) or Datagram (UDP). "Segment" is the standard term for a TCP PDU. "Datagram" is used for UDP.

`easy` — 1 mark

---

### P4 — TCP/IP Model Mapping

Which TCP/IP layer corresponds to OSI layers 5, 6, and 7?

| # | Option |
| --- | --- |
| A | Link layer |
| B | Internet layer |
| C | Transport layer |
| D | Application layer |
| E | Session layer |

**Correct: D** (index 3)

The TCP/IP model consolidates OSI layers 5 (Session), 6 (Presentation), and 7 (Application) into a single Application layer. The TCP/IP model has four layers: Link, Internet, Transport, and Application. This simplification reflects how the internet actually works.

`medium` — 1 mark

---

### P5 — Switch vs Router

A device receives a frame with a destination MAC address that is not in its forwarding table. What does it do?

| # | Option |
| --- | --- |
| A | Drops the frame |
| B | Sends an ICMP error |
| C | Floods the frame out all ports except the source |
| D | Buffers the frame until the address is learned |
| E | Returns the frame to the sender |

**Correct: C** (index 2)

When a switch receives a frame with an unknown destination MAC, it floods the frame out all ports except the source port. This is how switches learn MAC addresses — they observe the source MAC on incoming frames and build their forwarding table.

`medium` — 1 mark

---

### P6 — ARP Purpose

What is the primary purpose of ARP (Address Resolution Protocol)?

| # | Option |
| --- | --- |
| A | Resolve domain names to IP addresses |
| B | Resolve IP addresses to MAC addresses |
| C | Assign IP addresses dynamically |
| D | Encrypt network traffic |
| E | Route packets between networks |

**Correct: B** (index 1)

ARP maps IP addresses (Layer 3) to MAC addresses (Layer 2). When a host wants to send a frame to another host on the same LAN, it uses ARP to discover the destination's MAC address. DNS resolves domain names to IP addresses — a different function.

`easy` — 1 mark

---

### P7 — Subnet Mask Calculation

A host has IP address 192.168.10.67 with subnet mask 255.255.255.192. How many usable host addresses are in this subnet?

| # | Option |
| --- | --- |
| A | 62 |
| B | 64 |
| C | 30 |
| D | 32 |
| E | 126 |

**Correct: A** (index 0)

255.255.255.192 = /26 (26 network bits). Host bits = 32 - 26 = 6. Total addresses = 2^6 = 64. Usable hosts = 64 - 2 = 62 (subtract network address and broadcast address). The subnet is 192.168.10.64/26 with host range .65 to .126.

`medium` — 1 mark

---

### P8 — IPv6 Address Size

What is the size of an IPv6 address?

| # | Option |
| --- | --- |
| A | 32 bits |
| B | 64 bits |
| C | 128 bits |
| D | 256 bits |
| E | 512 bits |

**Correct: C** (index 2)

IPv6 addresses are 128 bits, written as eight groups of four hexadecimal digits separated by colons. This provides approximately 3.4 × 10^38 unique addresses — enough for every device on Earth. IPv4 addresses are only 32 bits (approximately 4.3 billion).

`easy` — 1 mark

---

## Transport Protocols — TCP/UDP (P9–P16)

### P9 — TCP Three-Way Handshake

What is the correct sequence of the TCP three-way handshake?

| # | Option |
| --- | --- |
| A | SYN → SYN-ACK → ACK |
| B | ACK → SYN-ACK → SYN |
| C | SYN → ACK → SYN-ACK |
| D | FIN → FIN-ACK → ACK |
| E | SYN → RST → ACK |

**Correct: A** (index 0)

The TCP three-way handshake: (1) Client sends SYN (synchronise), (2) Server responds with SYN-ACK (synchronise-acknowledge), (3) Client sends ACK (acknowledge). After this, the connection is established and data can flow bidirectionally.

`easy` — 1 mark

---

### P10 — TCP vs UDP Application

Which application is best suited for UDP rather than TCP?

| # | Option |
| --- | --- |
| A | Web browsing (HTTP) |
| B | Email (SMTP) |
| C | File transfer (FTP) |
| D | Live video streaming |
| E | Database queries |

**Correct: D** (index 3)

UDP is ideal for real-time applications where speed matters more than perfect reliability. Live video streaming can tolerate dropped packets — a brief glitch is acceptable, but retransmission delays would cause buffering. TCP is better for HTTP, SMTP, FTP, and databases where every byte must arrive correctly.

`easy` — 1 mark

---

### P11 — TCP Flow Control

What mechanism does TCP use for flow control?

| # | Option |
| --- | --- |
| A | Token bucket |
| B | Sliding window |
| C | Leaky bucket |
| D | Round robin |
| E | Exponential backoff |

**Correct: B** (index 1)

TCP uses a sliding window mechanism for flow control. The receiver advertises a window size indicating how much data it can buffer. The sender limits its outstanding (unacknowledged) data to this window. This prevents the sender from overwhelming the receiver's buffer.

`medium` — 1 mark

---

### P12 — TCP Congestion Control Phases

In TCP congestion control, what happens during "slow start"?

| # | Option |
| --- | --- |
| A | The sender transmits at minimum speed indefinitely |
| B | The congestion window doubles each RTT until a threshold is reached |
| C | The sender reduces speed by half after each loss |
| D | The sender waits for explicit permission from the receiver |
| E | The sender transmits one segment per second |

**Correct: B** (index 1)

Slow start begins with a congestion window (cwnd) of 1 MSS. The sender doubles cwnd each round-trip time (exponential growth). When cwnd reaches the slow start threshold (ssthresh), it transitions to congestion avoidance (linear growth). Despite the name, slow start is actually fast — it ramps up quickly.

`medium` — 1 mark

---

### P13 — TCP TIME_WAIT State

Why does TCP enter the TIME_WAIT state after closing a connection?

| # | Option |
| --- | --- |
| A | To wait for the application to acknowledge the close |
| B | To ensure the last ACK is received and to prevent old segments from affecting new connections |
| C | To retransmit any lost data |
| D | To wait for DNS resolution |
| E | To conserve resources |

**Correct: B** (index 1)

TIME_WAIT persists for 2× Maximum Segment Lifetime (typically 60 seconds). It ensures: (1) the last ACK is received by the remote (if lost, it retransmits), and (2) old segments from the connection are drained from the network before a new connection uses the same port pair.

`medium` — 1 mark

---

### P14 — UDP Characteristics

Which statement about UDP is correct?

| # | Option |
| --- | --- |
| A | UDP establishes a connection before sending data |
| B | UDP provides ordered delivery |
| C | UDP is connectionless and does not guarantee delivery, ordering, or retransmission |
| D | UDP includes flow control |
| E | UDP is slower than TCP due to error checking |

**Correct: C** (index 2)

UDP is connectionless — no handshake, no connection state. It sends datagrams best-effort with no guarantee of delivery, ordering, or error recovery. It has no flow control or congestion control. This makes it fast and lightweight — ideal for DNS, DHCP, VoIP, and gaming.

`easy` — 1 mark

---

### P15 — TCP Retransmission

What triggers TCP retransmission?

| # | Option |
| --- | --- |
| A | The receiver sends a RST packet |
| B | The sender's retransmission timer expires without receiving an ACK |
| C | The congestion window reaches zero |
| D | The TTL field in the IP header reaches zero |
| E | The sender receives a duplicate ACK |

**Correct: B** (index 1)

TCP starts a retransmission timer when it sends a segment. If an ACK is not received before the timer expires, the segment is retransmitted. Fast retransmit is triggered by three duplicate ACKs (without waiting for the timer). Both mechanisms ensure reliability.

`medium` — 1 mark

---

### P16 — Port Numbers

Which port number is used by HTTPS?

| # | Option |
| --- | --- |
| A | 80 |
| B | 443 |
| C | 22 |
| D | 25 |
| E | 53 |

**Correct: B** (index 1)

HTTPS uses port 443. HTTP uses port 80. SSH uses port 22. SMTP uses port 25. DNS uses port 53. Port numbers are part of the Transport layer addressing, combined with IP addresses to identify specific communication endpoints (sockets).

`easy` — 1 mark

---

## Routing and DNS (P17–P23)

### P17 — Default Gateway Purpose

What is the purpose of a default gateway?

| # | Option |
| --- | --- |
| A | To assign IP addresses to hosts |
| B | To route packets destined for addresses outside the local network |
| C | To resolve domain names |
| D | To encrypt traffic between hosts |
| E | To filter incoming traffic |

**Correct: B** (index 1)

The default gateway is the router that hosts use to communicate with devices on other networks. When a host wants to send a packet to an IP address outside its local subnet, it forwards the packet to the default gateway, which routes it toward the destination.

`easy` — 1 mark

---

### P18 — Static vs Dynamic Routing

When is static routing most appropriate?

| # | Option |
| --- | --- |
| A | In large enterprise networks with hundreds of routers |
| B | In networks where paths change frequently |
| C | In small, simple networks with a single path to the destination |
| D | In networks requiring automatic failover |
| E | In internet backbone infrastructure |

**Correct: C** (index 2)

Static routing is appropriate for small, stable networks with predictable traffic patterns. It is simple to configure and has no overhead. Dynamic routing (OSPF, BGP, RIP) is necessary for large networks where paths change and automatic convergence is required.

`medium` — 1 mark

---

### P19 — BGP Path Selection

Which attribute does BGP use as the primary path selection criterion?

| # | Option |
| --- | --- |
| A | Hop count |
| B | Highest bandwidth |
| C | AS-path length |
| D | Lowest latency |
| E | Round-trip time |

**Correct: C** (index 2)

BGP primarily selects paths based on AS-path length — shorter paths are preferred. BGP is a path-vector protocol that makes policy-based decisions, not performance-based ones. Other attributes (local preference, weight, origin) are used as tiebreakers. BGP is the protocol that connects autonomous systems on the internet.

`medium` — 1 mark

---

### P20 — DNS Resolution Steps

In order, what are the correct steps of a DNS lookup?

| # | Option |
| --- | --- |
| A | Root → TLD → Authoritative → Recursive resolver → Client |
| B | Client → Recursive resolver → Root → TLD → Authoritative |
| C | Client → Authoritative → Root → TLD → Recursive resolver |
| D | Recursive resolver → Client → Root → TLD → Authoritative |
| E | Root → Client → TLD → Recursive resolver → Authoritative |

**Correct: B** (index 1)

DNS resolution: (1) Client queries recursive resolver, (2) Resolver queries root server, (3) Root directs to TLD server (.com, .org), (4) TLD directs to authoritative server, (5) Authoritative server returns the IP address. The resolver caches the result and returns it to the client.

`medium` — 1 mark

---

### P21 — DNS Record Types

Which DNS record type maps a domain to an IPv6 address?

| # | Option |
| --- | --- |
| A | A |
| B | AAAA |
| C | CNAME |
| D | MX |
| E | TXT |

**Correct: B** (index 1)

A = IPv4 address, AAAA (quad-A) = IPv6 address, CNAME = canonical name alias, MX = mail exchange server, TXT = arbitrary text data. AAAA records were named to continue the "A" convention while indicating the address is four times longer (128 bits vs 32 bits).

`easy` — 1 mark

---

### P22 — NAT (Network Address Translation)

What does NAT accomplish?

| # | Option |
| --- | --- |
| A | Encrypts all outgoing traffic |
| B | Translates private IP addresses to public IP addresses for internet access |
| C | Assigns IP addresses dynamically to hosts |
| D | Routes packets between different autonomous systems |
| E | Compresses packets for faster transmission |

**Correct: B** (index 1)

NAT maps private IP addresses (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to public IP addresses. This allows many devices on a private network to share a single public IP address, conserving IPv4 addresses. NAT also provides a layer of security by hiding internal addresses.

`easy` — 1 mark

---

### P23 — OSPF Protocol Type

What type of routing protocol is OSPF?

| # | Option |
| --- | --- |
| A | Distance-vector |
| B | Path-vector |
| C | Link-state |
| D | Hybrid |
| E | Static |

**Correct: C** (index 2)

OSPF (Open Shortest Path First) is a link-state routing protocol. Each router builds a complete topology map of the network and computes shortest paths using Dijkstra's algorithm. Distance-vector protocols (RIP) share routing tables with neighbours. BGP is path-vector.

`medium` — 1 mark

---

## Network Security (P24–P30)

### P24 — TLS Handshake Purpose

What does the TLS handshake accomplish?

| # | Option |
| --- | --- |
| A | Assigns IP addresses to clients |
| B | Establishes a secure channel with encryption, authentication, and integrity |
| C | Routes packets through secure tunnels |
| D | Compresses data for faster transmission |
| E | Authenticates users via passwords |

**Correct: B** (index 1)

The TLS handshake: (1) negotiates cipher suites, (2) authenticates the server via certificate, (3) exchanges keys for symmetric encryption, (4) establishes session keys. After the handshake, all application data is encrypted, authenticated, and integrity-verified.

`easy` — 1 mark

---

### P25 — Symmetric vs Asymmetric Encryption

Why does TLS use both symmetric and asymmetric encryption?

| # | Option |
| --- | --- |
| A | Symmetric is more secure than asymmetric |
| B | Asymmetric is used for key exchange; symmetric is used for bulk data encryption |
| C | They serve the same purpose |
| D | Asymmetric is faster for data encryption |
| E | Symmetric cannot be used over networks |

**Correct: B** (index 1)

Asymmetric encryption (RSA, ECDH) is slow but solves the key distribution problem — it is used during the handshake to exchange a shared secret. Symmetric encryption (AES, ChaCha20) is fast and used for encrypting application data. TLS combines both for efficiency and security.

`medium` — 1 mark

---

### P26 — Certificate Chain Trust

How does a browser verify a website's certificate?

| # | Option |
| --- | --- |
| A | It checks the website's public key directly |
| B | It verifies the certificate chain back to a trusted root CA in its trust store |
| C | It contacts the website to confirm the certificate is valid |
| D | It checks the certificate's expiration date only |
| E | It uses DNS to verify the certificate |

**Correct: B** (index 1)

Certificate verification: (1) The server presents its certificate, (2) The browser checks it is signed by an intermediate CA, (3) The intermediate CA is signed by a root CA, (4) The root CA is in the browser's trust store. If any link fails, the browser shows a warning.

`medium` — 1 mark

---

### P27 — Firewall Types

Which firewall type inspects the actual content of network packets beyond headers?

| # | Option |
| --- | --- |
| A | Packet-filtering firewall |
| B | Stateful firewall |
| C | Application-layer (proxy) firewall |
| D | NAT firewall |
| E | Cloud-based firewall |

**Correct: C** (index 2)

Packet-filtering firewalls inspect IP/TCP/UDP headers. Stateful firewalls track connection state. Application-layer firewalls (proxies) inspect the payload content — they can block specific HTTP requests, filter malware, and enforce application-level policies. Next-generation firewalls combine all three.

`medium` — 1 mark

---

### P28 — VPN Protocols

Which VPN protocol operates at the network layer?

| # | Option |
| --- | --- |
| A | SSL/TLS VPN |
| B | WireGuard |
| C | IPsec |
| D | PPTP |
| E | SSH tunnel |

**Correct: C** (index 2)

IPsec operates at Layer 3 (Network). It provides encryption, authentication, and integrity for IP packets. WireGuard operates at Layer 3 as well but is a modern, simpler protocol. SSL/TLS VPNs operate at the transport/application layer. PPTP is a legacy protocol with known vulnerabilities.

`medium` — 1 mark

---

### P29 — DDoS Attack Characteristics

What is a distributed denial-of-service (DDoS) attack?

| # | Option |
| --- | --- |
| A | A single computer flooding a target with traffic |
| B | Multiple compromised systems flooding a target with traffic to overwhelm it |
| C | Intercepting communication between two parties |
| D | Injecting malicious code into a web application |
| E | Stealing credentials through phishing |

**Correct: B** (index 1)

A DDoS attack uses a botnet (many compromised systems) to flood a target with traffic, exhausting its bandwidth, CPU, or memory. The distributed nature makes it harder to block than a single-source DoS attack. Mitigation requires traffic filtering, rate limiting, and DDoS protection services.

`easy` — 1 mark

---

### P30 — IDS vs IPS

What is the key difference between an IDS and an IPS?

| # | Option |
| --- | --- |
| A | IDS blocks attacks; IPS only detects them |
| B | IDS detects and alerts; IPS detects and actively blocks or prevents attacks |
| C | They are identical |
| D | IDS operates at Layer 2; IPS operates at Layer 7 |
| E | IPS is passive; IDS is active |

**Correct: B** (index 1)

An Intrusion Detection System (IDS) monitors traffic and alerts on suspicious activity — it is passive. An Intrusion Prevention System (IPS) sits inline with traffic and can drop malicious packets, reset connections, or block source IPs — it is active. IDS provides visibility; IPS provides enforcement.

`medium` — 1 mark

---

## Answer Key

<details>
<summary>Click to reveal the answer key</summary>

| Question | Answer | Question | Answer | Question | Answer |
| --- | --- | --- | --- | --- | --- |
| P1 | C | P11 | B | P21 | B |
| P2 | B | P12 | B | P22 | B |
| P3 | D | P13 | B | P23 | C |
| P4 | D | P14 | C | P24 | B |
| P5 | C | P15 | B | P25 | B |
| P6 | B | P16 | B | P26 | B |
| P7 | A | P17 | B | P27 | C |
| P8 | C | P18 | C | P28 | C |
| P9 | A | P19 | C | P29 | B |
| P10 | D | P20 | B | P30 | B |

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

- **[OSI Model and TCP/IP](https://networking.wyattau.com/hub)** — Layer functions, protocol mapping, and encapsulation
- **[TCP and UDP](https://networking.wyattau.com/hub)** — Connection management, flow control, and congestion control
- **[DNS](https://networking.wyattau.com/hub)** — Resolution process, record types, and caching
- **[HTTP and HTTPS](https://networking.wyattau.com/hub)** — Request/response, methods, and status codes
- **[TLS](https://networking.wyattau.com/hub)** — Encryption, certificates, and the handshake
- **[Network Security](https://security.wyattau.com/hub)** — Firewalls, IDS/IPS, and VPNs
- **[Computer Science](https://computer-science.wyattau.com/hub)** — Algorithms and protocols that underpin networking

---

## Tips for Using This Practice Test

1. **Visualise the protocol stack.** When tracing a packet, think about what happens at each layer — from physical transmission to application processing.
2. **Know the numbers.** Common port numbers (80, 443, 22, 53, 25), address ranges, and header fields are worth memorising.
3. **Understand the "why".** Protocols exist because of specific problems — understanding the problem makes the protocol design intuitive.
4. **Practise subnetting by hand.** Mental subnet calculations build intuition that tools alone cannot provide.
5. **Retake after one week.** Networking has many interacting concepts — spaced repetition is essential.

---

*Last updated: 24 July 2026*

*Written by Wyatt. For questions or feedback, visit [wyattau.com](https://wyattau.com).*
