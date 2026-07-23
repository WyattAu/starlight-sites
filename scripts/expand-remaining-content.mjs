#!/usr/bin/env node

/**
 * expand-remaining-content.mjs -- Expands content for remaining test prep sites.
 *
 * Creates detailed content files for:
 * - US Driving Test
 * - EU Driving Test
 * - Professional Certifications
 *
 * Usage:
 *   node scripts/expand-remaining-content.mjs
 */

import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const CONTENT = {
  // US Driving Test
  'driving-us': {
    'written-test': {
      'traffic-signs': {
        title: 'US Traffic Signs',
        content: `# US Traffic Signs

## Regulatory Signs

### Speed Limit Signs
- **Speed Limit**: Maximum speed allowed (white rectangle with black text)
- **Minimum Speed**: Minimum speed required (white rectangle with black text)
- **Speed Zone**: Speed limit zone ahead

### Prohibition Signs
- **No Entry**: Vehicles not permitted (red circle with white horizontal line)
- **No Right Turn**: Right turn prohibited (red circle with arrow)
- **No Left Turn**: Left turn prohibited (red circle with arrow)
- **No U-Turn**: U-turn prohibited (red circle with U-shaped arrow)
- **No Overtaking**: Overtaking prohibited (red circle with two cars)

### Mandatory Signs
- **Turn Left**: Must turn left (blue circle with arrow)
- **Turn Right**: Must turn right (blue circle with arrow)
- **Go Straight Only**: Must continue straight (blue circle with arrow)

## Warning Signs

### Road Layout
- **Sharp Bend**: Road curves sharply (yellow diamond with curved arrow)
- **Narrow Road**: Road becomes narrow (yellow diamond with road narrowing)
- **Traffic Lights**: Traffic signals ahead (yellow diamond with traffic light)
- **Pedestrian Crossing**: Crossing ahead (yellow diamond with pedestrian)

### Hazards
- **Slippery Road**: Road surface may be slippery (yellow diamond with car and wavy lines)
- **Road Works**: Construction ahead (yellow diamond with worker)
- **School Zone**: School zone ahead (yellow diamond with children)
- **Animal Crossing**: Animals may cross road (yellow diamond with deer)

## Information Signs

### Direction Signs
- **Interstate Signs**: Blue and red shields
- **US Highway Signs**: White shields
- **State Highway Signs**: Varies by state

### Service Signs
- **Hospital**: Blue square with H
- **Gas Station**: Blue square with gas pump
- **Food**: Blue square with fork and knife
- **Lodging**: Blue square with bed

## Common Exam Questions

1. What does a red octagon indicate?
   - Stop sign

2. What does a yellow diamond indicate?
   - Warning sign

3. What does a blue square indicate?
   - Information or service sign

4. What does a green rectangle indicate?
   - Direction or distance sign

## Practice Questions

### Question 1
What does this sign mean? (Speed Limit 55)
- Maximum speed of 55 mph
- Minimum speed of 55 mph
- Average speed of 55 mph
- End of speed limit

**Correct Answer:** Maximum speed of 55 mph

### Question 2
What does this sign mean? (Stop Sign)
- Slow down
- Stop completely
- Yield to traffic
- No entry

**Correct Answer:** Stop completely
`,
      },
    },
  },

  // EU Driving Test
  'driving-eu': {
    'theory-test': {
      'traffic-signs': {
        title: 'EU Traffic Signs',
        content: `# EU Traffic Signs

## Vienna Convention on Road Signs and Signals

### Regulatory Signs (Circular)

#### Prohibition Signs (Red Border)
- **Speed Limit**: Maximum speed allowed
- **No Entry**: Vehicles not permitted
- **No Right Turn**: Right turn prohibited
- **No Left Turn**: Left turn prohibited
- **No Overtaking**: Overtaking prohibited

#### Mandatory Signs (Blue Background)
- **Turn Left**: Must turn left
- **Turn Right**: Must turn right
- **Go Straight Only**: Must continue straight
- **Roundabout**: Must go roundabout

### Warning Signs (Triangle)

#### Road Layout
- **Sharp Bend**: Road curves sharply
- **Narrow Road**: Road becomes narrow
- **Traffic Lights**: Traffic signals ahead
- **Pedestrian Crossing**: Crossing ahead

#### Hazards
- **Slippery Road**: Road surface may be slippery
- **Road Works**: Construction ahead
- **School Zone**: School zone ahead
- **Animal Crossing**: Animals may cross road

### Information Signs (Rectangle)

#### Direction Signs
- **Motorway**: Blue background with motorway symbol
- **Primary Route**: Green background
- **Local Route**: White background

#### Service Signs
- **Hospital**: Blue square with H
- **Gas Station**: Blue square with gas pump
- **Food**: Blue square with fork and knife
- **Lodging**: Blue square with bed

## Country-Specific Variations

### Germany
- **Autobahn**: No general speed limit, but advisory limits
- **Umweltzone**: Environmental zone restrictions
- **Alkoholgrenze**: 0.5% BAC limit

### France
- **Péage**: Toll road signs
- **Priorité à droite**: Priority to the right
- **Zone 30**: 30 km/h zone

### Spain
- **Radars**: Speed camera warnings
- **Eco**: Low emission zone
- **Parking**: Blue zone parking (pay and display)

### Italy
- **ZTL**: Restricted traffic zone
- **Autostrada**: Motorway
- **Strada statale**: State road

## Common Exam Questions

1. What does a red circle indicate?
   - Prohibition sign

2. What does a blue circle indicate?
   - Mandatory instruction

3. What does a triangle indicate?
   - Warning sign

4. What does a blue rectangle indicate?
   - Information or direction sign

## Practice Questions

### Question 1
What does this sign mean? (Speed Limit 50)
- Maximum speed of 50 km/h
- Minimum speed of 50 km/h
- Average speed of 50 km/h
- End of speed limit

**Correct Answer:** Maximum speed of 50 km/h

### Question 2
What does this sign mean? (No Entry)
- No entry for vehicles
- No parking
- No stopping
- No overtaking

**Correct Answer:** No entry for vehicles
`,
      },
    },
  },

  // Professional Certifications
  'professional-certs': {
    'aws': {
      'cloud-practitioner': {
        title: 'AWS Cloud Practitioner',
        content: `# AWS Cloud Practitioner (CLF-C02)

## Overview
The AWS Cloud Practitioner certification is an entry-level certification that validates foundational knowledge of AWS Cloud services and concepts.

### Exam Format
- **Duration**: 90 minutes
- **Questions**: 65 (50 scored, 15 unscored)
- **Passing Score**: 700/1000
- **Cost**: $100 USD

### Domains Covered

| Domain | Weight | Questions |
|--------|--------|-----------|
| Cloud Concepts | 24-30% | 16-20 |
| Security and Compliance | 30-36% | 20-24 |
| Cloud Technology and Services | 34-40% | 22-26 |
| Billing, Pricing, and Support | 8-12% | 5-8 |

---

## Cloud Concepts

### Cloud Computing Definition
Cloud computing is the on-demand delivery of compute power, database storage, applications, and other IT resources through a cloud services platform with pay-as-you-go pricing.

### Cloud Deployment Models
1. **Public Cloud**: Resources owned and operated by third-party cloud service providers
2. **Private Cloud**: Computing services used exclusively by one business or organization
3. **Hybrid Cloud**: Combines on-premises infrastructure with public cloud services

### Cloud Service Models
1. **IaaS (Infrastructure as a Service)**: Provides virtualized computing resources
2. **PaaS (Platform as a Service)**: Provides platform for developing applications
3. **SaaS (Software as a Service)**: Provides software applications over the internet

### AWS Global Infrastructure
- **Regions**: Geographic areas with multiple Availability Zones
- **Availability Zones**: Isolated locations within a region
- **Edge Locations**: Content delivery network endpoints

---

## Security and Compliance

### AWS Shared Responsibility Model
- **AWS Responsibility**: Security OF the cloud (hardware, software, networking, facilities)
- **Customer Responsibility**: Security IN the cloud (data, identity, encryption, network traffic)

### AWS Identity and Access Management (IAM)
- **Users**: Individual identities with unique credentials
- **Groups**: Collections of users with shared permissions
- **Roles**: Permissions that can be assumed by users or services
- **Policies**: Documents that define permissions

### AWS Security Services
- **AWS Shield**: DDoS protection
- **AWS WAF**: Web application firewall
- **AWS KMS**: Key management service
- **AWS CloudTrail**: API activity logging

---

## Cloud Technology and Services

### Compute Services
- **Amazon EC2**: Virtual servers in the cloud
- **AWS Lambda**: Serverless compute service
- **Amazon ECS**: Container orchestration service
- **Amazon EKS**: Kubernetes service

### Storage Services
- **Amazon S3**: Object storage service
- **Amazon EBS**: Block storage for EC2
- **Amazon EFS**: Managed file system
- **AWS Storage Gateway**: Hybrid cloud storage

### Database Services
- **Amazon RDS**: Managed relational database
- **Amazon DynamoDB**: Managed NoSQL database
- **Amazon ElastiCache**: In-memory caching
- **Amazon Redshift**: Data warehousing

### Networking Services
- **Amazon VPC**: Virtual private cloud
- **AWS Direct Connect**: Dedicated network connection
- **Amazon Route 53**: DNS web service
- **Amazon CloudFront**: Content delivery network

---

## Billing, Pricing, and Support

### AWS Pricing Models
- **Pay-as-you-go**: Pay for what you use
- **Save with commitment**: Reserved instances, savings plans
- **Pay less by using more**: Volume discounts

### AWS Support Plans
1. **Basic**: Free support
2. **Developer**: $29/month
3. **Business**: $100/month
4. **Enterprise**: $15,000/month

### AWS Free Tier
- **Always Free**: Certain services always free
- **12 Months Free**: Free for 12 months
- **Trials**: Short-term free trials

---

## Practice Questions

### Question 1
What is the AWS Shared Responsibility Model?
A) AWS is responsible for all security
B) Customer is responsible for all security
C) AWS secures the cloud, customer secures what's in the cloud
D) Security is not important in the cloud

**Correct Answer:** C) AWS secures the cloud, customer secures what's in the cloud

### Question 2
Which AWS service provides object storage?
A) Amazon EBS
B) Amazon EFS
C) Amazon S3
D) Amazon RDS

**Correct Answer:** C) Amazon S3

### Question 3
What is the benefit of using AWS Lambda?
A) You manage servers
B) You pay only for compute time used
C) You need to install software
D) You need to maintain hardware

**Correct Answer:** B) You pay only for compute time used

---

## Exam Tips

1. **Focus on the Shared Responsibility Model** - This is heavily tested
2. **Understand pricing models** - Pay-as-you-go vs. reserved vs. savings plans
3. **Know the support plans** - Basic, Developer, Business, Enterprise
4. **Practice with AWS Free Tier** - Get hands-on experience
5. **Review AWS Well-Architected Framework** - Best practices for cloud architecture
`,
      },
    },
  },
}

// Generate content files
for (const [siteName, topics] of Object.entries(CONTENT)) {
  for (const [topicName, pages] of Object.entries(topics)) {
    for (const [pageName, pageData] of Object.entries(pages)) {
      const dir = join('sites', siteName, 'src', 'content', 'docs', topicName)
      mkdirSync(dir, { recursive: true })
      
      const filePath = join(dir, `${pageName}.md`)
      const content = `---
title: ${pageData.title}
description: "${pageData.title} - Complete study guide and practice questions"
date: 2026-01-01T00:00:00Z
tags:
  - test-prep
  - ${siteName}
---

${pageData.content}
`
      
      writeFileSync(filePath, content)
      console.log(`Created: ${filePath}`)
    }
  }
}

console.log('\nContent expansion complete!')
