---
date: 2026-10-18T00:00:00+01:00
title: "Before You Begin: How the Layers Fit"
tags:
  - Networking
description: "The transition into computer networking: why layers exist, what each layer does and does not promise, the vocabulary -- packets, encapsulation, routing, switching, DNS, TCP and UDP -- every term defined before it is used, with the end-to-end journey of one web page traced."
---

<!-- Breadcrumb Schema for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{"name": "Home", "url": "https://wyattau.com"}, {"name": "networking", "url": "https://networking.wyattau.com"}, {"name": "networking", "url": "https://networking.wyattau.com/networking/before-you-begin"}]
}
</script>

Networking is usually taught as a list of protocols and port numbers, which is
like teaching anatomy as a list of organ names. The subject has one central
idea — **layers** — and everything else follows from why the layers exist and
what each one promises the one above it. This page builds that idea from a
single question — *what happens when you load a web page* — and defines every
term before it is used.

The prerequisite is nothing. If you can read the sentence "one computer sends a
message to another", you have the background.

## Intuition

Sending a message across the internet requires solving several unrelated
problems at once: finding the destination machine, delivering the bits without
error, splitting the message into transmittable chunks, and making the chunks
mean something to the receiving application. Solving all four in one mechanism
would be brittle. The **layered** solution solves them separately, stacked: each
layer wraps the layer above's message in its own envelope, adds the header its
own problem requires, and hands it down. The receiving machine unwraps in
reverse.

The envelopes are real. A web page's response travels inside a TCP segment,
inside an IP packet, inside an Ethernet frame — three layers of header, each
read and removed by a different device on the path. The vocabulary of the whole
subject — packet, segment, frame, encapsulation — is the vocabulary of those
envelopes.

## 1. The four problems, and the four layers

For loading a web page, four problems must be solved, and the layers answer
them top to bottom:

1. **Application** (HTTP): *what does the message mean?* The browser asks for
   `/index.html`; the server returns bytes that the browser renders.
2. **Transport** (TCP or UDP): *did it arrive complete and in order?* TCP
   numbers every byte, retransmits losses, and throttles the sender when the
   network is congested. UDP sends once and hopes — used when speed matters
   more than completeness (video calls, DNS).
3. **Internet** (IP): *which machine, and how do the bits cross the network to
   it?* IP addresses identify machines; routers forward packets hop by hop
   toward the destination.
4. **Link** (Ethernet, Wi-Fi): *how do bits cross one physical cable or radio
   link?* Each hop on the path has its own link layer — a packet may traverse
   Ethernet, then fibre, then Wi-Fi, with the frame rewritten at every hop.

**Definition.** **Encapsulation** is the wrapping of each layer's payload in
the layer below's header. The received frame is unwrapped in reverse: link
header removed, IP header read and removed, TCP header read and removed, the
HTTP response delivered to the browser.

**Why the envelopes matter.** Each header is *addressed to a different kind of
reader*: the link header is read by the next device on the wire and then
discarded; the IP header is read by every router on the path; the TCP header is
read only by the destination machine's operating system; the HTTP response is
read only by the browser. Understanding a networking problem starts by asking
which layer's header is the problem — and the answer determines which device
can even see it.

## 2. The vocabulary, defined where it happens

**Definition.** A **packet** is a self-contained chunk of data with a header.
IP delivers *packets*; TCP hands IP *segments*; the link layer wraps IP packets
in *frames*. The words name the same bytes at different layers, and using the
layer's word is how you show which layer's problem you are discussing.

**Definition.** A **router** forwards packets between networks, reading the IP
header and choosing the next hop. A **switch** forwards frames within one
network, reading the link header — it never sees the IP header.

**Definition.** **DNS** (Domain Name System) translates `wyattau.com` into an
IP address. It runs *before* the connection: the browser cannot open a TCP
connection to a name, only to an address, and the lookup is its own UDP
exchange.

**Definition.** A **port** is a number in the TCP or UDP header identifying
*which program* on the machine the data belongs to. The IP address identifies
the machine; the port identifies the application — 443 for HTTPS, 53 for DNS.

**The journey of one web page, assembled.** The browser resolves the name via
DNS (UDP port 53); opens a TCP connection to port 443 (the three-way
handshake: SYN, SYN-ACK, ACK); sends an HTTP request as payload of TCP
segments, each inside IP packets addressed to the server, each inside link
frames rewritten at every hop; the server's response returns the same way; TCP
reorders, retransmits, and delivers the complete bytes; the browser renders.
Every step is a layer doing its job, and every failure mode is a layer failing
at its job — which is how network problems are diagnosed: find the layer.

## 3. The two guarantees, and the gap between them

**TCP** provides a *byte stream*: what the sender writes, in order, arrives at
the receiver. It retransmits losses, reorders out-of-order arrivals, throttles
the sender on congestion, and discards duplicates. The cost: latency on loss,
head-of-line blocking (one lost segment delays every later one), and a
connection setup handshake.

**UDP** provides none of that: one datagram, one best-effort delivery. The
application keeps everything TCP would have done — ordering, retransmission,
congestion control — and implements exactly as much as it needs. Video calls
use UDP because a late retransmitted frame is worse than none; DNS uses UDP
because a single small exchange doesn't justify a handshake.

**The design lesson.** TCP and UDP are not competitors; they are two points on
the guarantee spectrum, and the application *chooses its own guarantees*. That
is the layered architecture's real payoff: the transport layer is replaceable,
and every replacement serves the same interface to the application above.

## 4. Self-test

1. At which layer is a **router** reading, and at which layer a **switch**?
   (§2)
2. Your browser resolves a name, then opens a connection, then sends a request.
   Name the protocol and the transport used at each of the three steps. (§2)
3. Why does a video call use UDP rather than TCP? State the trade in one
   sentence. (§3)
4. What is the difference between a port and an IP address? (§2)
5. A single lost packet delays every subsequent one in a TCP stream. What is
   this called, and which layer causes it? (§3)

**Answers.**
(1) A router reads the IP header (internet layer) and forwards between
networks; a switch reads the link header (link layer) and forwards within one
network.
(2) DNS over UDP port 53; TCP (three-way handshake) to port 443; HTTP over the
established TCP connection.
(3) A late retransmitted frame is worse than a lost one — UDP gives up TCP's
reordering and retransmission to avoid the delay, and the application recovers
what it can.
(4) The IP address identifies the machine; the port identifies the application
on it. An address without a port reaches the machine but not the program.
(5) Head-of-line blocking, caused by TCP's in-order delivery guarantee at the
transport layer.

## Where to go next

- [The OSI Model and TCP/IP](/01-osi-model/osi-and-tcp-ip/) — the seven-layer
  model, and where the four-layer picture above maps onto it.
- [BGP and Routing Protocols](/bgp-and-routing-protocols/) — how the "which
  network" half of the IP layer's job is decided between organisations.
- [Glossary](/glossary/) — every term on this page, defined again with the
  layer it belongs to.
- [Networks and Graph Theory](https://computer-science.wyattau.com/docs/graph-theory/) —
  the mathematics of the graph the routing algorithms run on.
