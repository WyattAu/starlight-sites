#!/usr/bin/env node

/**
 * generate-content-outline.mjs -- Generates content outlines for missing topics.
 *
 * Based on the content gap analysis, this script generates outlines
 * for high-priority missing topics.
 *
 * Usage:
 *   node scripts/generate-content-outline.mjs
 */

const OUTLINES = {
  // AP Computer Science A
  'ap-computer-science-a': {
    site: 'ap',
    title: 'AP Computer Science A',
    description:
      'Complete guide to AP Computer Science A covering Java programming, data structures, algorithms, and exam preparation.',
    sections: [
      {
        title: 'Introduction to AP Computer Science A',
        slug: '01-introduction',
        topics: ['Course overview', 'Exam format', 'Java basics', 'Development environment setup'],
      },
      {
        title: 'Java Fundamentals',
        slug: '02-java-fundamentals',
        topics: [
          'Variables and data types',
          'Operators and expressions',
          'Control flow',
          'Arrays',
          'Methods',
        ],
      },
      {
        title: 'Object-Oriented Programming',
        slug: '03-object-oriented-programming',
        topics: [
          'Classes and objects',
          'Inheritance',
          'Polymorphism',
          'Encapsulation',
          'Abstraction',
        ],
      },
      {
        title: 'Data Structures',
        slug: '04-data-structures',
        topics: ['ArrayList', 'LinkedList', 'Stack', 'Queue', 'HashMap', 'HashSet'],
      },
      {
        title: 'Algorithms',
        slug: '05-algorithms',
        topics: ['Searching', 'Sorting', 'Recursion', 'Algorithm analysis'],
      },
      {
        title: 'Advanced Topics',
        slug: '06-advanced-topics',
        topics: ['Generics', 'Collections framework', 'Exception handling', 'File I/O'],
      },
      {
        title: 'Exam Preparation',
        slug: '07-exam-preparation',
        topics: ['Practice problems', 'Past papers', 'Exam strategies', 'Time management'],
      },
    ],
  },
  // AP Computer Science Principles
  'ap-computer-science-principles': {
    site: 'ap',
    title: 'AP Computer Science Principles',
    description:
      'Comprehensive guide to AP Computer Science Principles covering computational thinking, programming, and digital information.',
    sections: [
      {
        title: 'Introduction to CSP',
        slug: '01-introduction',
        topics: ['Course overview', 'Exam format', 'Big ideas', 'Computational thinking'],
      },
      {
        title: 'Digital Information',
        slug: '02-digital-information',
        topics: [
          'Binary representation',
          'Data compression',
          'Data analysis',
          'Data visualization',
        ],
      },
      {
        title: 'The Internet',
        slug: '03-the-internet',
        topics: ['Internet protocols', 'Cybersecurity', 'Web development', 'Cloud computing'],
      },
      {
        title: 'Programming',
        slug: '04-programming',
        topics: ['Variables', 'Control structures', 'Functions', 'Lists', 'Program development'],
      },
      {
        title: 'Algorithms',
        slug: '05-algorithms',
        topics: [
          'Sequencing',
          'Selection',
          'Iteration',
          'Algorithm efficiency',
          'Parallel computing',
        ],
      },
      {
        title: 'Data and Information',
        slug: '06-data-and-information',
        topics: ['Big data', 'Data mining', 'Machine learning', 'Bias in data'],
      },
      {
        title: 'Impact of Computing',
        slug: '07-impact-of-computing',
        topics: ['Digital divide', 'Computing bias', 'Crowdsourcing', 'Legal and ethical issues'],
      },
    ],
  },
  // IB Theory of Knowledge
  'ib-theory-of-knowledge': {
    site: 'ib',
    title: 'IB Theory of Knowledge (TOK)',
    description:
      'Complete IB Theory of Knowledge guide covering knowledge questions, ways of knowing, and areas of knowledge.',
    sections: [
      {
        title: 'Introduction to TOK',
        slug: '01-introduction',
        topics: ['What is TOK?', 'TOK exhibition', 'TOK essay', 'Assessment criteria'],
      },
      {
        title: 'Knowledge and the Knower',
        slug: '02-knowledge-knower',
        topics: ['Perspective', 'Language', 'Identity', 'Culture'],
      },
      {
        title: 'Knowledge and Technology',
        slug: '03-knowledge-technology',
        topics: ['Digital technology', 'AI and knowledge', 'Social media', 'Access to knowledge'],
      },
      {
        title: 'Knowledge and the Arts',
        slug: '04-knowledge-arts',
        topics: ['Art as knowledge', 'Artistic truth', 'Art and emotion', 'Art and reason'],
      },
      {
        title: 'Areas of Knowledge',
        slug: '05-areas-knowledge',
        topics: [
          'History',
          'Human sciences',
          'Natural sciences',
          'Mathematics',
          'The arts',
          'Ethics',
          'Religious knowledge',
          'Indigenous knowledge',
        ],
      },
      {
        title: 'Ways of Knowing',
        slug: '06-ways-knowing',
        topics: [
          'Reason',
          'Emotion',
          'Language',
          'Sense perception',
          'Imagination',
          'Faith',
          'Memory',
          'Intuition',
        ],
      },
      {
        title: 'Knowledge Framework',
        slug: '07-knowledge-framework',
        topics: ['Scope', 'Perspective', 'Methodology', 'Ethics'],
      },
    ],
  },
  // Kubernetes/Docker
  'kubernetes-docker': {
    site: 'tools',
    title: 'Kubernetes and Docker',
    description:
      'Complete guide to container orchestration with Kubernetes and Docker for modern DevOps.',
    sections: [
      {
        title: 'Introduction to Containers',
        slug: '01-introduction-containers',
        topics: [
          'What are containers?',
          'Benefits of containers',
          'Container vs VM',
          'Docker overview',
        ],
      },
      {
        title: 'Docker Fundamentals',
        slug: '02-docker-fundamentals',
        topics: [
          'Docker installation',
          'Docker images',
          'Docker containers',
          'Dockerfile',
          'Docker Compose',
        ],
      },
      {
        title: 'Kubernetes Basics',
        slug: '03-kubernetes-basics',
        topics: ['Kubernetes architecture', 'Pods', 'Services', 'Deployments', 'Namespaces'],
      },
      {
        title: 'Kubernetes Networking',
        slug: '04-kubernetes-networking',
        topics: ['Service types', 'Ingress', 'Network policies', 'DNS'],
      },
      {
        title: 'Kubernetes Storage',
        slug: '05-kubernetes-storage',
        topics: ['Volumes', 'Persistent volumes', 'Storage classes', 'ConfigMaps', 'Secrets'],
      },
      {
        title: 'Kubernetes Security',
        slug: '06-kubernetes-security',
        topics: ['RBAC', 'Network policies', 'Pod security', 'Image security'],
      },
      {
        title: 'Production Deployment',
        slug: '07-production-deployment',
        topics: ['Monitoring', 'Logging', 'Scaling', 'Rolling updates', 'Helm charts'],
      },
    ],
  },
  // Machine Learning
  'machine-learning-deep-dive': {
    site: 'machine-learning',
    title: 'Machine Learning Deep Dive',
    description:
      'Comprehensive machine learning guide covering algorithms, neural networks, and practical applications.',
    sections: [
      {
        title: 'Introduction to Machine Learning',
        slug: '01-introduction',
        topics: ['What is ML?', 'Types of ML', 'ML workflow', 'Evaluation metrics'],
      },
      {
        title: 'Supervised Learning',
        slug: '02-supervised-learning',
        topics: [
          'Linear regression',
          'Logistic regression',
          'Decision trees',
          'Random forests',
          'SVM',
        ],
      },
      {
        title: 'Unsupervised Learning',
        slug: '03-unsupervised-learning',
        topics: ['K-means clustering', 'Hierarchical clustering', 'PCA', 't-SNE'],
      },
      {
        title: 'Neural Networks',
        slug: '04-neural-networks',
        topics: ['Perceptrons', 'Backpropagation', 'Activation functions', 'Regularization'],
      },
      {
        title: 'Deep Learning',
        slug: '05-deep-learning',
        topics: ['CNNs', 'RNNs', 'LSTMs', 'Transformers', 'GANs'],
      },
      {
        title: 'Practical ML',
        slug: '06-practical-ml',
        topics: ['Feature engineering', 'Hyperparameter tuning', 'Model deployment', 'MLOps'],
      },
    ],
  },
}

function generateOutline(outline) {
  let md = `---\ntitle: ${outline.title}\ndescription: ${outline.description}\n---\n\n`

  for (const section of outline.sections) {
    md += `## ${section.title}\n\n`
    for (const topic of section.topics) {
      md += `- ${topic}\n`
    }
    md += '\n'
  }

  return md
}

import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

function main() {
  for (const [key, outline] of Object.entries(OUTLINES)) {
    const dir = join('sites', outline.site, 'src', 'content', 'docs')
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true })
    }

    const filename = join(dir, `${key}.md`)
    if (!existsSync(filename)) {
      writeFileSync(filename, generateOutline(outline))
      console.log(`Created: ${filename}`)
    } else {
      console.log(`Exists: ${filename}`)
    }
  }
}

main()
