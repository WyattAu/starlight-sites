---
title: "Computer Networking Glossary — Key Terms and Definitions"
description: "Comprehensive glossary of computer networking terms covering protocols, infrastructure, security, and troubleshooting."
date: 2026-07-24
tags: [glossary]
---

## Network Fundamentals

**ACK (Acknowledgment)**: A signal sent by a receiver to confirm that a packet of data has been successfully received.

**Bandwidth**: The maximum rate of data transfer across a network path, measured in bits per second (bps).

**Broadcast**: A data packet sent to all devices on a network segment. Limited by broadcast domain.

**CSMA/CD (Carrier Sense Multiple Access with Collision Detection)**: A protocol used in Ethernet networks to manage data transmission and handle collisions.

**DNS (Domain Name System)**: A hierarchical system translating human-readable domain names (e.g., example.com) into IP addresses.

**Encapsulation**: The process of adding headers and trailers to data as it moves down the protocol stack.

**Ethernet**: A family of wired computer networking technologies commonly used in local area networks (LANs).

**Gateway**: A network node that serves as an access point to another network, often performing protocol conversion.

**Hexadecimal**: A base-16 number system used to represent binary data concisely. Common in MAC and IP addresses.

**Hop**: The passage of a data packet from one network segment to the next, typically through a router.

**Internet**: A global system of interconnected computer networks using the TCP/IP protocol suite.

**Intranet**: A private network accessible only to authorized personnel within an organization.

**Latency**: The time delay for data to travel from source to destination. Measured in milliseconds (ms).

**MAC Address (Media Access Control)**: A unique identifier assigned to a network interface controller. 48-bit address, e.g., 00:1A:2B:3C:4D:5E.

**NIC (Network Interface Card)**: A hardware component connecting a computer to a computer network.

**Node**: A connection point in a network that can receive, create, store, or send data.

**Packet**: A unit of data formatted for transmission across a network. Contains header (addressing) and payload (data).

**Payload**: The actual data carried by a packet, excluding headers and metadata.

**Protocol**: A set of rules governing communication between devices on a network.

**Router**: A networking device that forwards data packets between networks. Operates at Layer 3 of the OSI model.

**Switch**: A networking device that connects devices within a LAN, forwarding data based on MAC addresses. Layer 2.

**Topology**: The arrangement of elements in a network. Types: bus, star, ring, mesh, hybrid.

**Unicast**: A one-to-one communication between a single sender and a single receiver.

## Internet Protocol Suite (TCP/IP)

**ARP (Address Resolution Protocol)**: Maps IP addresses to MAC addresses within a local network.

**DHCP (Dynamic Host Configuration Protocol)**: Automatically assigns IP addresses and network configuration to devices.

**DNS (Domain Name System)**: Resolves domain names to IP addresses. Uses port 53 (UDP/TCP).

**HTTP (HyperText Transfer Protocol)**: Application-layer protocol for transmitting web pages. Uses port 80.

**HTTPS (HTTP Secure)**: HTTP with TLS/SSL encryption. Uses port 443. Secure web communication.

**ICMP (Internet Control Message Protocol)**: Used for diagnostic and error-reporting purposes. Used by `ping`.

**IGMP (Internet Group Management Protocol)**: Manages multicast group memberships for IP multicast.

**IP (Internet Protocol)**: Responsible for addressing and routing packets. Versions: IPv4, IPv6.

**IPv4**: 32-bit address space providing approximately 4.3 billion unique addresses. Dotted decimal: 192.168.1.1.

**IPv6**: 128-bit address space providing approximately 3.4 × 10³⁸ unique addresses. Written in hexadecimal.

**NAT (Network Address Translation)**: Translates private IP addresses to public IP addresses for internet access.

**OSPF (Open Shortest Path First)**: A link-state routing protocol used within autonomous systems.

**POP3 (Post Office Protocol version 3)**: An email protocol for retrieving messages from a mail server. Downloads emails.

**SMTP (Simple Mail Transfer Protocol)**: An email protocol for sending messages between servers. Uses port 25/587.

**SNMP (Simple Network Management Protocol)**: For managing and monitoring network devices. Uses ports 161/162.

**SSH (Secure Shell)**: A cryptographic network protocol for secure remote access. Uses port 22.

**TCP (Transmission Control Protocol)**: A reliable, connection-oriented protocol ensuring ordered delivery of data.

**Telnet**: A protocol for remote command-line access. Unencrypted; replaced by SSH for security.

**TLS/SSL (Transport Layer Security/Secure Sockets Layer)**: Cryptographic protocols providing secure communication over a network.

**UDP (User Datagram Protocol)**: A connectionless protocol sending data without establishing a connection. Faster but unreliable.

## OSI Model

**Application Layer (Layer 7)**: The layer closest to the end user, providing network services to applications. Examples: HTTP, FTP, SMTP.

**Data Link Layer (Layer 2)**: Provides node-to-node data transfer between directly connected nodes. Handles MAC addresses and error detection.

**Network Layer (Layer 3)**: Handles routing and forwarding of data packets between different networks. Handles IP addressing.

**Physical Layer (Layer 1**: The lowest layer, dealing with the physical transmission of raw bits over a communication channel.

**Presentation Layer (Layer 6)**: Translates, encrypts, and compresses data between the application and network formats.

**Session Layer (Layer 5)**: Manages sessions (connections) between applications. Establishes, maintains, and terminates connections.

**Transport Layer (Layer 4)**: Provides end-to-end communication services. Handles segmentation, flow control, and error recovery. TCP, UDP.

## Network Infrastructure

**Access Point**: A networking device that allows wireless devices to connect to a wired network.

**Bridge**: A device that connects two or more network segments at the data link layer, filtering traffic.

**Cable**: Physical medium for transmitting data. Types: twisted pair, coaxial, fiber optic.

**Coaxial Cable**: A cable with a central conductor surrounded by insulation and a metallic shield. Used in cable TV and internet.

**Fiber Optic Cable**: A cable using glass or plastic fibers to transmit data as light pulses. High bandwidth, low interference.

**Hub**: A basic networking device that broadcasts data to all connected devices. Largely replaced by switches.

**Load Balancer**: A device distributing network traffic across multiple servers to optimize performance.

**Modem (Modulator-Demodulator)**: Converts digital signals to analog and vice versa for transmission over telephone or cable lines.

**Patch Panel**: A panel of ports used to manage and organize network cable connections.

**Repeater**: A device that regenerates and amplifies signals to extend network reach.

**Server**: A computer that provides services to other computers (clients) on the network.

**Twisted Pair Cable**: A cable with pairs of insulated copper wires twisted together. Categories: Cat5, Cat6, Cat7.

**VPN (Virtual Private Network)**: Creates a secure, encrypted connection over a public network. Provides privacy and remote access.

**Wireless Router**: A networking device that combines a router, switch, and wireless access point.

## Network Security

**Authentication**: The process of verifying the identity of a user, device, or system.

**Authorization**: Determining what an authenticated user is allowed to do or access.

**Brute Force Attack**: An attack trying all possible combinations of passwords or keys until the correct one is found.

**Certificate Authority (CA)**: A trusted entity that issues digital certificates for TLS/SSL encryption.

**Cryptography**: The practice of securing communication through encryption and decryption of data.

**DDoS (Distributed Denial of Service)**: An attack where multiple compromised systems flood a target with traffic.

**Dictionary Attack**: An attack using a pre-listed list of common passwords to gain unauthorized access.

**Digital Certificate**: An electronic document proving the ownership of a public key. Used in TLS/SSL.

**Encryption**: The process of converting data into a coded format to prevent unauthorized access.

**Firewall**: A network security system monitoring and controlling incoming and outgoing traffic based on rules.

**IDS/IPS (Intrusion Detection/Prevention System)**: Monitors network traffic for suspicious activity and blocks potential threats.

**Keylogger**: Software that records keystrokes to capture sensitive information like passwords.

**Man-in-the-Middle Attack**: An attack where an attacker intercepts communication between two parties.

**Phishing**: A social engineering attack using fraudulent emails or websites to steal sensitive information.

**Ransomware**: Malware that encrypts a victim's data and demands payment for decryption.

**Social Engineering**: Manipulating people into divulging confidential information or performing actions.

**Spyware**: Software that secretly monitors and collects information about a user.

**Virus**: A malicious program that replicates itself and spreads to other computers.

**Worm**: A standalone malicious program that self-replicates and spreads across networks.

**Zero-Day Exploit**: An attack exploiting a previously unknown vulnerability before a patch is available.

## Troubleshooting

**ARP Table**: A table mapping IP addresses to MAC addresses, maintained by the ARP protocol.

**Bandwidth Test**: A measurement of the maximum data transfer rate of a network connection.

**DNS Lookup**: The process of resolving a domain name to an IP address using DNS servers.

**IP Configuration**: The settings determining how a device connects to a network (IP address, subnet mask, gateway).

**Packet Loss**: The failure of data packets to reach their destination, causing retransmissions and delays.

**Ping**: A utility using ICMP to test connectivity and measure round-trip time to a network host.

**Route Tracing**: The process of tracking the path packets take through a network. Tool: `traceroute`/`tracert`.

**Throughput**: The actual rate of successful data transfer across a network, measured in bps.

**Traceroute**: A diagnostic tool showing the path and latency of packets across an IP network.

**Wireshark**: A network protocol analyzer for capturing and inspecting network traffic in real-time.

## Related Resources

- [Networking Fundamentals Guide](/networking/fundamentals/)
- [TCP/IP Deep Dive](/networking/tcp-ip/)
- [Network Security Overview](/networking/security/)
- [Troubleshooting Guide](/networking/troubleshooting/)
