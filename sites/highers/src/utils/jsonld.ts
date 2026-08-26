/**
 * JSON-LD structured data utilities for educational content.
 *
 * Generates schema.org structured data for better SEO and search engine visibility.
 *
 * Usage in Astro components:
 *   import { generateCourseSchema, generateArticleSchema } from '../../shared/utils/jsonld'
 *   const schema = generateCourseSchema({ name: 'Physics', description: '...' })
 */

export interface CourseSchemaProps {
  name: string
  description: string
  provider?: string
  url?: string
  image?: string
  educationalLevel?: string
  inLanguage?: string
  subject?: string[]
}

export interface ArticleSchemaProps {
  headline: string
  description: string
  author?: string
  publisher?: string
  url?: string
  image?: string
  datePublished?: string
  dateModified?: string
}

export interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>
}

/**
 * Generate Course schema.org structured data.
 * Use for subject pages (Physics, Mathematics, etc.)
 */
export function generateCourseSchema(props: CourseSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: props.name,
    description: props.description,
    provider: {
      '@type': 'Organization',
      name: props.provider ?? "Wyatt's Notes",
      url: 'https://wyattsnotes.wyattau.com',
    },
    url: props.url,
    image: props.image,
    educationalLevel: props.educationalLevel ?? 'Secondary',
    inLanguage: props.inLanguage ?? 'en',
    subject: props.subject,
    isAccessibleForFree: true,
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT1H', // 1 hour per week estimate
    },
  }
}

/**
 * Generate Article schema.org structured data.
 * Use for individual notes/pages.
 */
export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: props.headline,
    description: props.description,
    author: {
      '@type': 'Person',
      name: props.author ?? 'Wyatt',
    },
    publisher: {
      '@type': 'Organization',
      name: props.publisher ?? "Wyatt's Notes",
      url: 'https://wyattsnotes.wyattau.com',
    },
    url: props.url,
    image: props.image,
    datePublished: props.datePublished ?? new Date().toISOString(),
    dateModified: props.dateModified ?? new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': props.url,
      name: props.headline,
    },
  }
}

/**
 * Generate BreadcrumbList schema.org structured data.
 * Use for navigation breadcrumbs.
 */
export function generateBreadcrumbSchema(props: BreadcrumbSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: props.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate WebSite schema.org structured data.
 * Use for site-wide structured data.
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Wyatt's Notes",
    description:
      'Free, rigorous study notes for IB, A-Level, GCSE, AP, DSE, university STEM, and programming.',
    url: 'https://wyattsnotes.wyattau.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://search.wyattau.com/api/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Generate FAQ schema.org structured data.
 * Use for FAQ sections.
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export interface HowToSchemaProps {
  name: string
  description: string
  totalTime?: string
  steps: Array<{ name: string; text: string }>
}

/**
 * Generate HowTo schema.org structured data.
 * Use for tutorial/how-to sections.
 */
export function generateHowToSchema(props: HowToSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: props.name,
    description: props.description,
    totalTime: props.totalTime ?? 'PT30M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'USD',
      value: '0',
    },
    step: props.steps.map(step => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
  }
}

export interface OrganizationSchemaProps {
  name?: string
  url?: string
  logo?: string
  sameAs?: string[]
  description?: string
}

/**
 * Generate Organization schema.org structured data.
 * Use for site-wide organization info.
 */
export function generateOrganizationSchema(props: OrganizationSchemaProps = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: props.name ?? "Wyatt's Notes",
    url: props.url ?? 'https://wyattau.com',
    logo: {
      '@type': 'ImageObject',
      url: props.logo ?? 'https://wyattau.com/img/logo.png',
      width: 512,
      height: 512,
    },
    sameAs: props.sameAs ?? ['https://github.com/WyattAu', 'https://twitter.com/wyattau'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'wyatt@wyattau.com',
    },
    description:
      props.description ??
      'Free, rigorous study notes for IB, A-Level, GCSE, AP, DSE, university STEM, and programming.',
    foundingDate: '2024',
    knowsLanguage: ['en', 'zh-Hant'],
  }
}

export interface VideoObjectSchemaProps {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration?: string
  contentUrl?: string
  embedUrl?: string
}

/**
 * Generate VideoObject schema.org structured data.
 * Use for interactive demos and video content.
 */
export function generateVideoObjectSchema(props: VideoObjectSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: props.name,
    description: props.description,
    thumbnailUrl: props.thumbnailUrl,
    uploadDate: props.uploadDate,
    duration: props.duration ?? 'PT5M',
    contentUrl: props.contentUrl,
    embedUrl: props.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: "Wyatt's Notes",
      url: 'https://wyattsnotes.wyattau.com',
    },
  }
}

export interface ImageObjectSchemaProps {
  name: string
  description: string
  url: string
  width?: number
  height?: number
  caption?: string
}

/**
 * Generate ImageObject schema.org structured data.
 * Use for diagrams, illustrations, and visual content.
 */
export function generateImageObjectSchema(props: ImageObjectSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    name: props.name,
    description: props.description,
    url: props.url,
    width: props.width ?? 800,
    height: props.height ?? 600,
    caption: props.caption,
    creator: {
      '@type': 'Person',
      name: 'Wyatt',
    },
    copyrightYear: new Date().getFullYear(),
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
  }
}

export interface PersonSchemaProps {
  name?: string
  url?: string
  jobTitle?: string
  knowsAbout?: string[]
  sameAs?: string[]
}

/**
 * Generate Person schema.org structured data.
 * Use for author/creator attribution (E-E-A-T).
 */
export function generatePersonSchema(props: PersonSchemaProps = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: props.name ?? 'Wyatt',
    url: props.url ?? 'https://wyattau.com',
    jobTitle: props.jobTitle ?? 'Educator & Content Developer',
    knowsAbout: props.knowsAbout ?? ['Education', 'Study Methods', 'Exam Preparation'],
    sameAs: props.sameAs ?? ['https://github.com/WyattAu'],
  }
}

export interface SpeakableSchemaProps {
  url: string
}

/**
 * Generate Speakable schema.org structured data.
 * Use for voice search optimization — tells Google which parts of the page are best for text-to-speech.
 */
export function generateSpeakableSchema(props: SpeakableSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${props.url}#webpage`,
    name: props.url.split('/').filter(Boolean).pop() || 'Page',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.markdown-content', 'h1'],
    },
  }
}

export interface SoftwareSourceCodeSchemaProps {
  name: string
  description: string
  codeRepository?: string
  programmingLanguage: string
  codeExample?: string
  runtimePlatform?: string
}

/**
 * Generate SoftwareSourceCode schema.org structured data.
 * Use for code examples and programming content.
 */
export function generateSoftwareSourceCodeSchema(props: SoftwareSourceCodeSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: props.name,
    description: props.description,
    codeRepository: props.codeRepository ?? 'https://github.com/WyattAu/starlight-sites',
    programmingLanguage: props.programmingLanguage,
    codeExample: props.codeExample,
    runtimePlatform: props.runtimePlatform ?? 'Web Browser',
    author: {
      '@type': 'Person',
      name: 'Wyatt',
    },
    license: 'https://opensource.org/licenses/MIT',
  }
}
