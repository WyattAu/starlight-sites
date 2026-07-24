---
title: AWS Cloud Practitioner
description: "AWS Cloud Practitioner - Complete study guide and practice questions"
date: 2026-01-01T00:00:00Z
tags:
  - test-prep
  - professional-certs
---

# AWS Cloud Practitioner (CLF-C02)

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

## See Also

- [Aws](./)
- [Professional Certifications](..)
