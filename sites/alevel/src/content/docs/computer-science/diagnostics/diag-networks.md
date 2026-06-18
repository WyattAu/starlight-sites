---
title: "Computer Networks -- Diagnostic Tests"
description: ""s **public key** (asymmetric) to encrypt the
message. Only the colleague's private key can decrypt it. For efficiency with large messages, use
hybrid encryption: generate a random symmetric session key, encrypt the message with it (AES), then
encrypt the session key with the colleague's public key (RSA). Send both.

(2) **Verify sender authenticity:** The colleague signs the message with their **private key**
(asymmetric -- digital signature). The user verifies using the colleague's public key. If
verification succeeds, the message must have come from someone with the private key.

(3) **Secure file storage:** Use **symmetric encryption** (e.g., AES-256). The user encrypts files
with their own secret key. Since only the user needs to encrypt and decrypt (same person), there is
no key distribution problem, and symmetric encryption is much faster for bulk data.

**Digital certificates and PKI:** A digital certificate binds a public key to an identity (e.g.,
"this public key belongs to colleague@example.com"). It is issued by a Certificate Authority (CA)
who verifies the identity. The certificate is signed with the CA's private key. When the user
receives the colleague's public key embedded in a certificate, they verify the certificate using the
CA's public key (which is pre-installed in their browser/OS as a trusted root). This prevents
man-in-the-middle attacks where an attacker substitutes their own public key for the colleague's.

## Integration Tests

### IT-1: Web Technologies and Databases (with Relational Databases)

**Question:** A web application allows users to search for books by title, author, or ISBN. The
frontend is an HTML page with a form that sends a GET request to `/search?q=query`. The backend is a
Python Flask application that queries a PostgreSQL database. (a) Describe the full request-response
cycle from the user submitting the form to the results being displayed. (b) Explain three security
vulnerabilities in this setup and how to mitigate each. (c) Explain how a CDN could improve
performance.

**Solution:**

(a) **Request-response cycle:**

1. User types a search query in the HTML form and submits.
2. The browser constructs an HTTP GET request: `GET /search?q=query HTTP/1.1` with headers (Host,
   User-Agent, Accept, Cookie).
3. The browser performs DNS resolution to convert the domain name to an IP address.
4. The browser establishes a TCP connection (three-way handshake: SYN, SYN-ACK, ACK) to the server
   on port 443.
5. TLS handshake: the browser and server negotiate encryption parameters, the server presents its
   SSL certificate, and an encrypted tunnel is established.
6. The encrypted HTTP request is sent over the TLS tunnel.
7. The web server (e.g., Nginx) receives the request and forwards it to the Flask application (via
   WSGI).
8. Flask parses the query parameter, sanitises it, and constructs a parameterised SQL query to the
   PostgreSQL database.
9. PostgreSQL executes the query and returns the result set.
10. Flask renders an HTML template with the results.
11. The server sends the HTTP response (status 200, HTML body) back through the encrypted tunnel.
12. The browser renders the HTML and displays the search results.

(b) **Security vulnerabilities and mitigations:**

1. **SQL injection:** If the query parameter is concatenated into SQL directly, an attacker could
   inject malicious SQL. **Mitigation:** Use parameterised queries (as described in the programming
   diagnostic).

2. **Cross-site scripting (XSS):** If search results are displayed without escaping, an attacker
   could inject JavaScript in the query. **Mitigation:** Escape all user input before rendering in
   HTML (Flask's Jinja2 does this by default with `{{ }}`).

3. **Cross-site request forgery (CSRF):** An attacker could trick a logged-in user into submitting a
   malicious request. **Mitigation:** Use CSRF tokens in all forms.

Additional: **Denial of service** (no rate limiting on search queries). **Mitigation:** Implement
rate limiting per IP address.

(c) **CDN (Content Delivery Network):** A CDN caches static assets (CSS, JavaScript, images) on edge
servers distributed globally. When a user in London requests the page, static assets are served from
a London edge server rather than the origin server in (say) New York. This reduces latency, reduces
load on the origin server, and improves availability. For dynamic content (search results), the CDN
would forward the request to the origin but still benefit from TLS termination at the edge.

---

### IT-2: Network Protocols and Error Detection (with Data Representation)

**Question:** Data is transmitted using a Hamming(7,4) code. The 4-bit data word `1011` is to be
transmitted. (a) Calculate the 3 parity bits (P1 covers bits 1,3,5,7; P2 covers 2,3,6,7; P4 covers
4,5,6,7). (b) Write the full 7-bit codeword. (c) If bit 5 is flipped during transmission (error),
show how the receiver detects and corrects the error.

**Solution:**

The Hamming(7,4) code places parity bits at positions 1, 2, and 4 (powers of 2). Data bits go at
positions 3, 5, 6, 7.

Data: d1 $= 1$ (pos 3), d2 $= 0$ (pos 5), d3 $= 1$ (pos 6), d4 $= 1$ (pos 7).

Layout: P1 _ P2 d1 _ d2 d3 d4 = P1 _ P2 1 _ 0 1 1

Positions: 1 2 3 4 5 6 7

(a) Calculate parity bits:

P1 (position 1): covers bits 1, 3, 5, 7. P1 $\oplus$ d1 $\oplus$ d2 $\oplus$ d4 $= 0$. P1 $\oplus$ 1
$\oplus$ 0 $\oplus$ 1 $= 0$. P1 $= 1 \oplus 0 \oplus 1 = 0$. So P1 $= 0$.

Wait: P1 $\oplus$ 1 $\oplus$ 0 $\oplus$ 1 $= 0$ means P1 $= 0$ (since
$0 \oplus 1 \oplus 0 \oplus 1 = 0$). So P1 $= 0$.

P2 (position 2): covers bits 2, 3, 6, 7. P2 $\oplus$ d1 $\oplus$ d3 $\oplus$ d4 $= 0$. P2 $\oplus$ 1
$\oplus$ 1 $\oplus$ 1 $= 0$. P2 $= 1 \oplus 1 \oplus 1 = 1$. So P2 $= 1$.

P4 (position 4): covers bits 4, 5, 6, 7. P4 $\oplus$ d2 $\oplus$ d3 $\oplus$ d4 $= 0$. P4 $\oplus$ 0
$\oplus$ 1 $\oplus$ 1 $= 0$. P4 $= 0 \oplus 1 \oplus 1 = 0$. So P4 $= 0$.

(b) Codeword: positions 1--7: **0, 1, 1, 0, 0, 1, 1** $= 0110011_2$.

(c) Bit 5 flipped during transmission: received $= 0111011$ (bit 5 changed from 0 to 1).

Receiver recalculates parity checks:

Check P1: bits 1,3,5,7 $= 0 \oplus 1 \oplus 1 \oplus 1 = 1$ (error detected) Check P2: bits 2,3,6,7
$= 1 \oplus 1 \oplus 1 \oplus 1 = 0$ (OK) Check P4: bits 4,5,6,7
$= 0 \oplus 1 \oplus 1 \oplus 1 = 1$ (error detected)

Syndrome: P4 P2 P1 $= 1\ 0\ 1 = 5$ (binary). The error is in bit position 5.

Flip bit 5: $0111011 \to 0110011$. Corrected!

This demonstrates the power of Hamming codes: single-bit errors are both detected AND corrected
using only 3 extra parity bits for 4 data bits.

---

### IT-3: TCP vs UDP and Application Design (with Software Engineering)

**Question:** Compare TCP and UDP in terms of reliability, ordering, flow control, overhead, and use
cases. For each of the following applications, justify whether TCP or UDP is more appropriate: (a)
online gaming with real-time position updates, (b) online banking, (c) video streaming, (d) DNS
lookups.

**Solution:**

| Feature      | TCP                                        | UDP                        |
| ------------ | ------------------------------------------ | -------------------------- |
| Connection   | Connection-oriented (3-way handshake)      | Connectionless             |
| Reliability  | Guaranteed delivery (ACKs, retransmission) | Best-effort (no guarantee) |
| Ordering     | In-order delivery (sequence numbers)       | No ordering                |
| Flow control | Sliding window, congestion control         | None                       |
| Overhead     | Higher (20+ byte header)                   | Lower (8 byte header)      |
| Speed        | Slower due to reliability mechanisms       | Faster (minimal overhead)  |

(a) **Online gaming (real-time position):** UDP is preferred. In a fast-paced game, a position
update that arrives late is worse than one that never arrives -- the game state has already moved
on. Retransmitting a stale position update wastes bandwidth. The game can tolerate some packet loss
(brief visual glitch) but cannot tolerate the latency of retransmission and in-order delivery.
Modern games often use UDP with custom reliability for critical events (e.g., "player died") and
unreliable for frequent updates (position, velocity).

(b) **Online banking:** TCP is essential. Every transaction must be delivered exactly once, in
order, without corruption. A lost "transfer $\pounds 1000$" packet or a duplicated "transfer
$\pounds 1000$" packet would be catastrophic. TCP's guaranteed delivery, ordering, and error
checking are non-negotiable requirements.

(c) **Video streaming:** UDP is commonly used for live streaming (low latency). Video codecs can
tolerate some packet loss (display the previous frame or interpolate). TCP would cause buffering
delays when retransmitting lost packets, which is worse for user experience than occasional visual
artifacts. However, adaptive bitrate streaming (e.g., HLS) often uses TCP over HTTP for
compatibility with firewalls and CDNs.

(d) **DNS lookups:** UDP is the standard for DNS queries. DNS queries and responses are small (
under 512 bytes for standard queries, fitting in a single UDP packet). The overhead of TCP's 3-way
handshake is unnecessary for a single request-response. However, TCP is used for DNS zone transfers
(large data) and for responses over 512 bytes (EDNS0 allows larger UDP packets, but TCP fallback
exists for oversized responses).
