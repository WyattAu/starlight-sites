---
title: Network Proxy
description: ""3'
  db:
    image: mariadb:10.11.7
    container_name: nginx-proxy-manager-db
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=${DB_ROOT_PASSWORD}
      - MYSQL_DATABASE=${DB_NAME}
      - MYSQL_USER=${DB_USER}
      - MYSQL_PASSWORD=${DB_PASSWORD}
      - MYSQL_INITDB_SKIP_TZINFO=1
    healthcheck:
      test:
        - CMD-SHELL
        - mysqladmin ping -u root -p$${MYSQL_ROOT_PASSWORD}
      interval: 5s
      timeout: 10s
      retries: 12
      start_period: 30s
    networks:
      - proxy-network
    volumes:
      - db_data:/var/lib/mysql
    logging:
      driver: json-file
      options:
        max-size: 10m
        max-file: '3'
volumes:
  config:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/config
  data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/data
  letsencrypt:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/letsencrypt
  db_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/your_path/db
networks:
  proxy-network:
    name: npm-network
    driver: bridge
```

## Common Pitfalls

1. Not practising with past papers or exercises under timed conditions.

2. Not making connections between different topics within the subject to build a coherent
   understanding.

3. Ignoring feedback from marked work and failing to address recurring weaknesses.

4. Focusing only on content knowledge without developing exam technique and question-answering
   skills.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.
