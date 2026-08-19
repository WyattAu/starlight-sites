import { describe, expect, it } from 'vitest'
import {
  generateHowToSchema,
  generateImageObjectSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateSoftwareSourceCodeSchema,
  generateSpeakableSchema,
  generateVideoObjectSchema,
} from '../../shared/utils/jsonld'

describe('JSON-LD SEO/E-E-A-T generators', () => {
  describe('generateHowToSchema', () => {
    it('maps steps to HowToStep nodes with default total time', () => {
      const schema = generateHowToSchema({
        name: 'How to study effectively',
        description: 'Spaced repetition workflow.',
        steps: [
          { name: 'Review', text: 'Review cards daily.' },
          { name: 'Rate', text: 'Rate recall honestly.' },
        ],
      })
      expect(schema['@type']).toBe('HowTo')
      expect(schema.totalTime).toBe('PT30M')
      expect(schema.step).toHaveLength(2)
      expect(schema.step[0]).toEqual({
        '@type': 'HowToStep',
        name: 'Review',
        text: 'Review cards daily.',
      })
    })

    it('respects an explicit totalTime', () => {
      const schema = generateHowToSchema({
        name: 'N',
        description: 'D',
        totalTime: 'PT1H',
        steps: [],
      })
      expect(schema.totalTime).toBe('PT1H')
    })
  })

  describe('generateOrganizationSchema', () => {
    it('defaults to Wyatt\'s Notes identity', () => {
      const schema = generateOrganizationSchema()
      expect(schema['@type']).toBe('Organization')
      expect(schema.name).toBe("Wyatt's Notes")
      expect(schema.url).toBe('https://wyattau.com')
      expect(schema.sameAs).toContain('https://github.com/WyattAu')
    })

    it('accepts overrides for every optional field', () => {
      const schema = generateOrganizationSchema({
        name: 'Custom Org',
        url: 'https://example.com',
        logo: 'https://example.com/logo.png',
        sameAs: ['https://example.com/social'],
        description: 'A custom organisation.',
      })
      expect(schema.name).toBe('Custom Org')
      expect(schema.url).toBe('https://example.com')
      expect(schema.logo.url).toBe('https://example.com/logo.png')
      expect(schema.sameAs).toEqual(['https://example.com/social'])
      expect(schema.description).toBe('A custom organisation.')
    })
  })

  describe('generateVideoObjectSchema', () => {
    it('produces a VideoObject with default duration and publisher', () => {
      const schema = generateVideoObjectSchema({
        name: 'Fourier series demo',
        description: 'Interactive animation.',
        thumbnailUrl: 'https://example.com/thumb.jpg',
        uploadDate: '2026-01-01T00:00:00Z',
      })
      expect(schema['@type']).toBe('VideoObject')
      expect(schema.duration).toBe('PT5M')
      expect(schema.publisher.name).toBe("Wyatt's Notes")
      expect(schema.thumbnailUrl).toBe('https://example.com/thumb.jpg')
    })

    it('keeps explicit duration, contentUrl, and embedUrl', () => {
      const schema = generateVideoObjectSchema({
        name: 'N',
        description: 'D',
        thumbnailUrl: 'https://example.com/t.jpg',
        uploadDate: '2026-01-01T00:00:00Z',
        duration: 'PT12M',
        contentUrl: 'https://example.com/v.mp4',
        embedUrl: 'https://example.com/embed',
      })
      expect(schema.duration).toBe('PT12M')
      expect(schema.contentUrl).toBe('https://example.com/v.mp4')
      expect(schema.embedUrl).toBe('https://example.com/embed')
    })
  })

  describe('generateImageObjectSchema', () => {
    it('defaults dimensions to 800x600 with CC BY-NC-SA licence', () => {
      const schema = generateImageObjectSchema({
        name: 'Wave interference diagram',
        description: 'Two-slit interference pattern.',
        url: 'https://example.com/waves.png',
      })
      expect(schema['@type']).toBe('ImageObject')
      expect(schema.width).toBe(800)
      expect(schema.height).toBe(600)
      expect(schema.license).toContain('creativecommons.org')
      expect(schema.creator.name).toBe('Wyatt')
    })

    it('accepts explicit dimensions and caption', () => {
      const schema = generateImageObjectSchema({
        name: 'N',
        description: 'D',
        url: 'https://example.com/i.png',
        width: 1024,
        height: 768,
        caption: 'Fig. 1',
      })
      expect(schema.width).toBe(1024)
      expect(schema.height).toBe(768)
      expect(schema.caption).toBe('Fig. 1')
    })
  })

  describe('generatePersonSchema', () => {
    it('defaults to the author identity (E-E-A-T)', () => {
      const schema = generatePersonSchema()
      expect(schema['@type']).toBe('Person')
      expect(schema.name).toBe('Wyatt')
      expect(schema.jobTitle).toBe('Educator & Content Developer')
      expect(schema.knowsAbout).toContain('Education')
    })

    it('accepts overrides', () => {
      const schema = generatePersonSchema({
        name: 'Dr Example',
        jobTitle: 'Physicist',
        knowsAbout: ['Quantum mechanics'],
        sameAs: ['https://orcid.org/example'],
        url: 'https://example.com',
      })
      expect(schema.name).toBe('Dr Example')
      expect(schema.jobTitle).toBe('Physicist')
      expect(schema.knowsAbout).toEqual(['Quantum mechanics'])
      expect(schema.sameAs).toEqual(['https://orcid.org/example'])
    })
  })

  describe('generateSpeakableSchema', () => {
    it('anchors speakable css selectors to the page webhook id', () => {
      const schema = generateSpeakableSchema({ url: 'https://tools.wyattau.com/page' })
      expect(schema['@type']).toBe('WebPage')
      expect(schema['@id']).toBe('https://tools.wyattau.com/page#webpage')
      expect(schema.speakable['@type']).toBe('SpeakableSpecification')
      expect(schema.speakable.cssSelector).toContain('h1')
    })
  })

  describe('generateSoftwareSourceCodeSchema', () => {
    it('produces a SoftwareSourceCode node with browser runtime default', () => {
      const schema = generateSoftwareSourceCodeSchema({
        name: 'SM-2 scheduler',
        description: 'Spaced repetition scheduler implementation.',
        programmingLanguage: 'TypeScript',
      })
      expect(schema['@type']).toBe('SoftwareSourceCode')
      expect(schema.runtimePlatform).toBe('Web Browser')
      expect(schema.codeRepository).toContain('github.com/WyattAu')
      expect(schema.author['@type']).toBe('Person')
    })

    it('keeps explicit repository, sample, and platform', () => {
      const schema = generateSoftwareSourceCodeSchema({
        name: 'N',
        description: 'D',
        programmingLanguage: 'Rust',
        codeRepository: 'https://example.com/repo',
        codeExample: 'fn main() {}',
        runtimePlatform: 'WASM',
      })
      expect(schema.codeRepository).toBe('https://example.com/repo')
      expect(schema.codeExample).toBe('fn main() {}')
      expect(schema.runtimePlatform).toBe('WASM')
    })
  })
})
