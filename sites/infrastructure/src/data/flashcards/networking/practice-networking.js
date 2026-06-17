/**
 * Infrastructure - Networking Practice Problems
 * Covers: OSI model, TCP/IP, DNS, HTTP, subnetting, routing
 */

export const practiceQuestions = [
  {
    question: 'How many layers are in the OSI model?',
    options: ['4', '5', '7', '9'],
    correctAnswer: 2,
    explanation:
      'The OSI model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application. Each layer provides services to the layer above.',
    difficulty: 'easy',
  },
  {
    question: 'Which protocol is used for reliable, ordered data delivery?',
    options: ['UDP', 'TCP', 'ICMP', 'ARP'],
    correctAnswer: 1,
    explanation:
      'TCP (Transmission Control Protocol) provides reliable, ordered, error-checked delivery. UDP is connectionless and does not guarantee delivery or ordering.',
    difficulty: 'easy',
  },
  {
    question: 'What is the default port for HTTPS?',
    options: ['80', '443', '8080', '22'],
    correctAnswer: 1,
    explanation:
      'HTTPS uses port 443 by default. HTTP uses port 80. Port 8080 is commonly used for development servers, and port 22 is for SSH.',
    difficulty: 'easy',
  },
  {
    question: 'What does DNS resolve?',
    options: [
      'IP addresses to MAC addresses',
      'Domain names to IP addresses',
      'URLs to file paths',
      'Ports to services',
    ],
    correctAnswer: 1,
    explanation:
      'DNS (Domain Name System) translates human-readable domain names (like example.com) to IP addresses (like 93.184.216.34) that computers use to communicate.',
    difficulty: 'easy',
  },
  {
    question: 'How many usable IP addresses are in a /24 subnet?',
    options: ['254', '255', '256', '252'],
    correctAnswer: 0,
    explanation:
      'A /24 subnet has 256 total addresses. The first (network address) and last (broadcast address) are reserved, leaving 254 usable host addresses.',
    difficulty: 'easy',
  },
  {
    question: 'What is the purpose of a firewall?',
    options: [
      'To speed up network traffic',
      'To filter incoming and outgoing network traffic',
      'To encrypt all data',
      'To assign IP addresses',
    ],
    correctAnswer: 1,
    explanation:
      'A firewall monitors and filters network traffic based on security rules. It can block unauthorized access while allowing legitimate communications.',
    difficulty: 'easy',
  },
  {
    question: 'What is the difference between TCP and UDP?',
    options: [
      'TCP is faster, UDP is reliable',
      'TCP is reliable, UDP is faster',
      'They are identical',
      'TCP is for audio, UDP is for text',
    ],
    correctAnswer: 1,
    explanation:
      'TCP provides reliable, ordered delivery with flow control and congestion control, but has higher overhead. UDP is connectionless, faster, but does not guarantee delivery.',
    difficulty: 'easy',
  },
  {
    question: 'What is a VLAN?',
    options: [
      'A virtual LAN that segments a physical network',
      'A very large area network',
      'A virtual load balancer',
      'A wireless LAN adapter',
    ],
    correctAnswer: 0,
    explanation:
      'A VLAN (Virtual Local Area Network) logically segments a physical network into separate broadcast domains, improving security and performance without physical rewiring.',
    difficulty: 'medium',
  },
  {
    question: 'What is the purpose of NAT?',
    options: [
      'Network Address Translation - maps private IPs to public IPs',
      'Network Access Token - authenticates users',
      'Network Analysis Tool - monitors traffic',
      'Network Alarm Trigger - sends alerts',
    ],
    correctAnswer: 0,
    explanation:
      'NAT (Network Address Translation) translates private IP addresses to public IP addresses, allowing multiple devices on a private network to share a single public IP.',
    difficulty: 'medium',
  },
  {
    question: 'What HTTP status code means "Not Found"?',
    options: ['200', '301', '404', '500'],
    correctAnswer: 2,
    explanation:
      'HTTP 404 indicates the requested resource could not be found. 200 is OK, 301 is Moved Permanently (redirect), and 500 is Internal Server Error.',
    difficulty: 'easy',
  },
  {
    question: 'What is the three-way handshake in TCP?',
    options: ['SYN, ACK, FIN', 'SYN, SYN-ACK, ACK', 'ACK, DATA, FIN', 'SYN, DATA, ACK'],
    correctAnswer: 1,
    explanation:
      'TCP connection establishment uses SYN (client initiates), SYN-ACK (server acknowledges), ACK (client confirms). This establishes a reliable connection.',
    difficulty: 'medium',
  },
  {
    question: 'What is a reverse proxy?',
    options: [
      'A proxy that forwards client requests to backend servers',
      'A proxy that anonymizes the client',
      'A proxy that caches only images',
      'A proxy that blocks all traffic',
    ],
    correctAnswer: 0,
    explanation:
      'A reverse proxy sits in front of backend servers, forwarding client requests. It provides load balancing, SSL termination, caching, and security.',
    difficulty: 'medium',
  },
]
