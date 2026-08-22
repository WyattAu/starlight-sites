---
date: 2026-07-23T13:50:43+01:00
title: "Kubernetes and Docker | Tools - Wyatt's Notes"
description: Complete guide to container orchestration with Kubernetes and Docker for modern DevOps.
---

## Introduction to Containers

- What are containers?
- Benefits of containers
- Container vs VM
- Docker overview

## Docker Fundamentals

- Docker installation
- Docker images
- Docker containers
- Dockerfile
- Docker Compose

## Kubernetes Basics

- Kubernetes architecture
- Pods
- Services
- Deployments
- Namespaces

## Kubernetes Networking

- Service types
- Ingress
- Network policies
- DNS

## Kubernetes Storage

- Volumes
- Persistent volumes
- Storage classes
- ConfigMaps
- Secrets

## Kubernetes Security

- RBAC
- Network policies
- Pod security
- Image security

## Production Deployment

- Monitoring
- Logging
- Scaling
- Rolling updates
- Helm charts

## See Also

- [Developer Tools & Knowledge](./)
- [About This Site](./about)
- [Algorithms Practice](./practice-algorithms)

## Worked Examples

### Example 1: Dockerfile for a Python Application

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Key principles: use slim base images, copy requirements before source
(better layer caching), run as non-root in production, use multi-stage
builds for compiled languages.

### Example 2: Kubernetes Deployment with Health Checks

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  template:
    spec:
      containers:
      - name: app
        image: myapp:1.0
        ports:
        - containerPort: 8000
        readinessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 15
          periodSeconds: 20
        resources:
          requests:
            memory: "128Mi"
            cpu: "250m"
          limits:
            memory: "256Mi"
            cpu: "500m"
```

Health probes ensure Kubernetes restarts unhealthy pods and only routes
traffic to ready ones. Resource requests enable scheduling; limits
prevent OOM kills.

## Common Pitfalls

1. **Using `latest` tag in production**: Always pin specific versions.
   `latest` makes deployments non-reproducible and rollbacks impossible.
2. **Running as root in containers**: Use `USER` directive in Dockerfile.
   Root containers can escape to the host if a vulnerability is exploited.
3. **Ignoring resource limits**: Without limits, a single pod can consume
   all node resources, starving other workloads. Always set requests and
   limits.

## Summary

Docker packages applications with their dependencies into portable
containers. Kubernetes orchestrates containers at scale with automated
scheduling, scaling, and self-healing. Together they form the foundation
of modern cloud-native architecture. Docker handles the build/package
stage; Kubernetes handles the deploy/run stage.
