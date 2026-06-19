import { describe, expect, it } from 'vitest'
import {
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateCourseSchema,
  generateFAQSchema,
  generateWebSiteSchema,
} from '../../shared/utils/jsonld'

describe('JSON-LD structured-data generators', () => {
  describe('generateCourseSchema', () => {
    it('produces a schema.org Course node with required fields', () => {
      const schema = generateCourseSchema({
        name: 'Physics',
        description: 'Mechanics, electricity, and waves.',
      })
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Course')
      expect(schema.name).toBe('Physics')
      expect(schema.description).toBe('Mechanics, electricity, and waves.')
      expect(schema.isAccessibleForFree).toBe(true)
    })

    it('defaults provider to "Wyatt\'s Notes"', () => {
      const schema = generateCourseSchema({ name: 'X', description: 'Y' })
      expect(schema.provider).toEqual({
        '@type': 'Organization',
        name: "Wyatt's Notes",
        url: 'https://wyattsnotes.wyattau.com',
      })
    })

    it('respects explicit provider override', () => {
      const schema = generateCourseSchema({
        name: 'X',
        description: 'Y',
        provider: 'OpenStax',
      })
      expect(schema.provider.name).toBe('OpenStax')
    })

    it('defaults educationalLevel to "Secondary"', () => {
      const schema = generateCourseSchema({ name: 'X', description: 'Y' })
      expect(schema.educationalLevel).toBe('Secondary')
    })

    it('defaults inLanguage to "en"', () => {
      const schema = generateCourseSchema({ name: 'X', description: 'Y' })
      expect(schema.inLanguage).toBe('en')
    })

    it('includes a CourseInstance with online mode', () => {
      const schema = generateCourseSchema({ name: 'X', description: 'Y' })
      expect(schema.hasCourseInstance['@type']).toBe('CourseInstance')
      expect(schema.hasCourseInstance.courseMode).toBe('online')
    })

    it('passes through optional fields (url, image, subject)', () => {
      const schema = generateCourseSchema({
        name: 'X',
        description: 'Y',
        url: 'https://dse.wyattau.com/physics/',
        image: 'https://example.com/x.png',
        subject: ['mechanics', 'waves'],
      })
      expect(schema.url).toBe('https://dse.wyattau.com/physics/')
      expect(schema.image).toBe('https://example.com/x.png')
      expect(schema.subject).toEqual(['mechanics', 'waves'])
    })

    it('serialises to valid JSON', () => {
      const schema = generateCourseSchema({ name: 'X', description: 'Y' })
      expect(() => JSON.stringify(schema)).not.toThrow()
    })
  })

  describe('generateArticleSchema', () => {
    it('produces a schema.org Article node with required fields', () => {
      const schema = generateArticleSchema({
        headline: 'Newton\u2019s Second Law',
        description: 'F = ma derived from first principles.',
      })
      expect(schema['@context']).toBe('https://schema.org')
      expect(schema['@type']).toBe('Article')
      expect(schema.headline).toBe('Newton\u2019s Second Law')
    })

    it('defaults author to "Wyatt"', () => {
      const schema = generateArticleSchema({ headline: 'H', description: 'D' })
      expect(schema.author).toEqual({ '@type': 'Person', name: 'Wyatt' })
    })

    it('defaults publisher to "Wyatt\'s Notes"', () => {
      const schema = generateArticleSchema({ headline: 'H', description: 'D' })
      expect(schema.publisher.name).toBe("Wyatt's Notes")
    })

    it('defaults datePublished/dateModified to ISO 8601', () => {
      const schema = generateArticleSchema({ headline: 'H', description: 'D' })
      // ISO 8601: YYYY-MM-DDTHH:MM:SS...
      expect(schema.datePublished).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
      expect(schema.dateModified).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
      // Should be parseable as a valid date.
      expect(new Date(schema.datePublished).toString()).not.toBe('Invalid Date')
    })

    it('respects explicit datePublished override', () => {
      const schema = generateArticleSchema({
        headline: 'H',
        description: 'D',
        datePublished: '2024-01-15',
      })
      expect(schema.datePublished).toBe('2024-01-15')
    })

    it('sets mainEntityOfPage @id to the article url', () => {
      const schema = generateArticleSchema({
        headline: 'H',
        description: 'D',
        url: 'https://dse.wyattau.com/physics/newton/',
      })
      expect(schema.mainEntityOfPage).toEqual({
        '@type': 'WebPage',
        '@id': 'https://dse.wyattau.com/physics/newton/',
      })
    })
  })

  describe('generateBreadcrumbSchema', () => {
    it('produces a BreadcrumbList with 1-indexed positions', () => {
      const schema = generateBreadcrumbSchema({
        items: [
          { name: 'Home', url: 'https://dse.wyattau.com/' },
          { name: 'Physics', url: 'https://dse.wyattau.com/physics/' },
        ],
      })
      expect(schema['@type']).toBe('BreadcrumbList')
      expect(schema.itemListElement).toHaveLength(2)
      expect(schema.itemListElement[0].position).toBe(1)
      expect(schema.itemListElement[1].position).toBe(2)
    })

    it('handles an empty breadcrumb list', () => {
      const schema = generateBreadcrumbSchema({ items: [] })
      expect(schema.itemListElement).toEqual([])
    })

    it('preserves name and url of each breadcrumb', () => {
      const schema = generateBreadcrumbSchema({
        items: [
          { name: 'A', url: 'u1' },
          { name: 'B', url: 'u2' },
        ],
      })
      expect(schema.itemListElement[0].name).toBe('A')
      expect(schema.itemListElement[0].item).toBe('u1')
      expect(schema.itemListElement[1].name).toBe('B')
      expect(schema.itemListElement[1].item).toBe('u2')
    })
  })

  describe('generateWebSiteSchema', () => {
    it('produces a site-wide WebSite node with SearchAction', () => {
      const schema = generateWebSiteSchema()
      expect(schema['@type']).toBe('WebSite')
      expect(schema.name).toBe("Wyatt's Notes")
      expect(schema.url).toBe('https://wyattsnotes.wyattau.com')
      expect(schema.potentialAction['@type']).toBe('SearchAction')
      expect(schema.potentialAction.target).toContain('{search_term_string}')
    })
  })

  describe('generateFAQSchema', () => {
    it('produces a FAQPage with Question entities', () => {
      const schema = generateFAQSchema([
        { question: 'What is X?', answer: 'X is Y.' },
        { question: 'Why Z?', answer: 'Because.' },
      ])
      expect(schema['@type']).toBe('FAQPage')
      expect(schema.mainEntity).toHaveLength(2)
      expect(schema.mainEntity[0]).toEqual({
        '@type': 'Question',
        name: 'What is X?',
        acceptedAnswer: { '@type': 'Answer', text: 'X is Y.' },
      })
    })

    it('handles an empty FAQ list', () => {
      const schema = generateFAQSchema([])
      expect(schema.mainEntity).toEqual([])
    })
  })

  describe('schema.org conformance', () => {
    it('every generator emits @context and @type', () => {
      const course = generateCourseSchema({ name: 'X', description: 'Y' })
      const article = generateArticleSchema({ headline: 'H', description: 'D' })
      const breadcrumb = generateBreadcrumbSchema({ items: [] })
      const website = generateWebSiteSchema()
      const faq = generateFAQSchema([])

      for (const schema of [course, article, breadcrumb, website, faq]) {
        expect(schema['@context']).toBe('https://schema.org')
        expect(typeof schema['@type']).toBe('string')
        expect(schema['@type'].length).toBeGreaterThan(0)
      }
    })
  })
})
