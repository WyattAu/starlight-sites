---

date: 2026-07-23T21:57:32+01:00
title: Network Models
tags:
  - Computing
  - University
description: 'The model defines seven layers of abstraction for network Communication: Comprehensive educational content coverage with definitions and practice problems.'
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "computer-science", "url": "https://computer-science.wyattau.com"}, {"name": "3 Computer Networks", "url": "https://computer-science.wyattau.com/3-computer-networks"}, {"name": "1_network Models", "url": "https://computer-science.wyattau.com/3-computer-networks/1_network-models"}]
}
</script>

### 1.1 The OSI Reference Model

The **Open Systems Interconnection (OSI)** model defines seven layers of abstraction for network
Communication:

| Layer | Name         | Function                                     | Examples                  |
| ----- | ------------ | -------------------------------------------- | ------------------------- |
| 7     | Application  | User-facing protocols                        | HTTP, DNS, SMTP, FTP      |
| 6     | Presentation | Data representation, encryption, compression | TLS, SSL, JPEG, ASCII     |
| 5     | Session      | Dialog control, synchronisation              | NetBIOS, RPC, PPTP        |
| 4     | Transport    | End-to-end reliability, flow control         | TCP, UDP, SCTP            |
| 3     | Network      | Logical addressing, routing                  | IP, ICMP, ARP, OSPF       |
| 2     | Data Link    | Framing, error detection, MAC                | Ethernet, Wi-Fi, PPP      |
| 1     | Physical     | Bit transmission on the medium               | Cables, hubs, radio waves |

**Encapsulation.** Each layer adds its own header (and possibly trailer) to the data from the layer
Above, forming a **protocol data unit (PDU)**:

$$\mathrm{Data} \xrightarrow{+\mathrm{th} \mathrm{Segment} \xrightarrow{+\mathrm{nh} \mathrm{Packet} \xrightarrow{+\mathrm{fh}+ft} \mathrm{Frame} \xrightarrow{\mathrm{encode} \mathrm{Bits}}}}$$

### 1.2 The TCP/IP Model

The **TCP/IP** model is the practical standard used on the Internet, with four layers:

| Layer          | OSI Equivalent | Protocols            |
| -------------- | -------------- | -------------------- |
| Application    | 5, 6, 7        | HTTP, DNS, SMTP, TLS |
| Transport      | 4              | TCP, UDP             |
| Internet       | 3              | IP, ICMP, ARP        |
| Network Access | 1, 2           | Ethernet, Wi-Fi, MAC |

### 1.3 Comparison

The OSI model is a theoretical reference used for teaching and design. The TCP/IP model reflects
Actual protocol implementations. The session and presentation layers in OSI are absorbed into the
Application layer in TCP/IP.

**Detailed OSI vs TCP/IP comparison:**

| Aspect                | OSI Model                              | TCP/IP Model                        |
| --------------------- | -------------------------------------- | ----------------------------------- |
| Layers                | 7                                      | 4                                   |
| Nature                | Theoretical reference model            | Practical implementation model      |
| Session/Presentation  | Separate layers (5, 6)                 | Merged into Application layer       |
| Network layer         | Connection-oriented and connectionless | Primarily connectionless (IP)       |
| Transport layer       | TP4 (reliable) and TP0 (unreliable)    | TCP (reliable) and UDP (unreliable) |
| Standardisation       | ISO/IEC                                | IETF (RFCs)                         |
| Adopted by            | Academic, government                   | The global Internet                 |
| Protocol independence | Layer-independent protocols            | Protocols tightly coupled           |
| Service interface     | Precisely defined (SAPs)               | Loosely defined                     |
| Release               | 1984                                   | Developed 1970s, formalised 1980s   |

### 1.4 Protocol Data Unit Encapsulation

Each layer encapsulates data from the layer above by prepending a header (and appending a trailer at
Layer 2). The resulting data unit is named according to its layer:

| Layer       | PDU Name | Header Added         | Trailer | Size (typical) |
| ----------- | -------- | -------------------- | ------- | -------------- |
| Application | Data     | Application-specific | None    | Variable       |
| Transport   | Segment  | TCP/UDP header       | None    | 20--60 bytes   |
| Network     | Packet   | IP header            | None    | 20--60 bytes   |
| Data Link   | Frame    | MAC header           | FCS     | 14--18 + 4 B   |
| Physical    | Bits     | None (encoding)      | None    | N/A            |

**Encapsulation walkthrough.** Consider sending an HTTP GET request of 500 bytes through TCP/IP over
Ethernet:

1. **Application layer:** HTTP creates a request message (500 bytes).
2. **Transport layer:** TCP adds a 20-byte header. Segment = 520 bytes.
3. **Network layer:** IP adds a 20-byte header. Packet = 540 bytes.
4. **Data Link layer:** Ethernet adds 14-byte header + 4-byte FCS. Frame = 558 bytes.
5. **Physical layer:** Frame is encoded into bits and transmitted on the medium.

**Decapsulation.** At the receiver, each layer strips its corresponding header before passing data
To the layer above. This process is the reverse of encapsulation.

### 1.5 Key Relationships

- **MTU and fragmentation:** The Maximum Transmission Unit (MTU) of Ethernet is 1500 bytes. IP packets exceeding the MTU must be fragmented (IPv4) or require path MTU discovery (IPv6).
- **Port numbers:** Transport-layer protocols use 16-bit port numbers (0--65535). Well-known ports (0--1023) are reserved for standard services (HTTP: 80, HTTPS: 443, DNS: 53).
- **Window size:** TCP uses a sliding window for flow control. The window size determines how many bytes can be sent before requiring an acknowledgement.
- **Hop limit:** Each router decrements the IP TTL (Time to Live) field. When it reaches zero, the packet is discarded and an ICMP Time Exceeded message is sent back.

### 1.6 Common Pitfalls

- **Confusing the OSI model with protocol stacks:** The OSI model is a conceptual framework. Real networks use the TCP/IP stack. Protocols do not always map cleanly to a single OSI layer.
- **Assuming all layers add overhead:** The Physical layer encodes bits without adding headers. Overhead accumulates only at layers 2--4.
- **Ignoring encapsulation order:** Headers are added in the order Application $\to$ Transport $\to$ Network $\to$ Data Link. Removing them in the wrong order causes parsing errors.
- **Overlooking the role of ARP:** ARP resolves IP addresses to MAC addresses at Layer 2 but is not part of the TCP/IP or OSI layer definitions, leading to confusion about where it belongs.

### 1.7 Applications

- **Network troubleshooting:** Understanding the layer model allows systematic diagnosis. Physical issues (cables, signal) are Layer 1; IP configuration errors are Layer 3; application bugs are Layer 7.
- **Firewall design:** Firewalls operate at specific layers. Packet-filtering firewalls inspect Layers 3--4 (IP addresses, ports). Application-layer firewalls inspect Layer 7 content (HTTP headers, payload).
- **VPN tunneling:** A VPN encapsulates Layer 3 packets inside Layer 4 (or Layer 2) protocols, effectively adding extra headers. Understanding encapsulation is essential for configuring and debugging VPNs.
- **Quality of Service (QoS):** QoS mechanisms tag packets at Layer 3 (DSCP/ToS fields) to prioritise traffic. Without understanding the layer model, QoS rules may be applied at the wrong level.

### 1.8 Worked Example: Packet Tracing

Consider an HTTP request traversing three networks: the client LAN (Ethernet), a WAN ( MPLS), and the server LAN (Wi-Fi).

1. **Client LAN:** HTTP data (500 B) is encapsulated into a TCP segment (+20 B header), then an IP packet (+20 B header), then an Ethernet frame (+14 B header, +4 B FCS). Total on wire: 558 B.
2. **MPLS WAN:** The Ethernet frame is stripped. The IP packet is encapsulated with an MPLS label (+4 B). A new link-layer header is added for the MPLS link. The IP header remains unchanged.
3. **Server LAN:** The MPLS label is removed at the egress router. The IP packet is encapsulated into a Wi-Fi frame (+varies). The TCP segment is delivered to the server, which strips the TCP header and passes the HTTP data to the application.

At each hop, only the relevant layer headers are processed. The HTTP payload is untouched from client to server.

## Intuition

Network models are the organisational charts of data communication. The OSI model separates concerns into seven layers, each with a specific job. Think of it as a relay race: each layer passes the baton (data) to the next, adding its own header (instructions). The TCP/IP model is the practical version used on the internet. Encapsulation is the key concept: each layer wraps the data from the layer above, like nesting dolls. Understanding layers helps you debug: a cable problem is Layer 1, an IP issue is Layer 3, and a web bug is Layer 7.

## Cross-References

- [Physical Layer](/computer-science/3-computer-networks/2_physical-layer)
- [Network Layer](/computer-science/3-computer-networks/4_network-layer)
- [Transport Layer](/computer-science/3-computer-networks/5_transport-layer)

