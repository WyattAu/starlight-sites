/**
 * Internationalisation configuration for Wyatt's Notes.
 *
 * Defines supported languages, translation keys, and locale-specific settings.
 * Each site can override the default locale and provide additional translations.
 *
 * Uses @solid-primitives/i18n for reactive translations.
 *
 * Usage:
 *   import { t, locales } from '../../shared/i18n/config'
 *   const label = t('practice.submit')
 */

import * as i18n from '@solid-primitives/i18n'

export interface Locale {
  code: string
  name: string
  nativeName: string
  dir: 'ltr' | 'rtl'
  enabled: boolean
}

export const locales: Locale[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', enabled: true },
  { code: 'zh', name: 'Chinese', nativeName: '\u4E2D\u6587', dir: 'ltr', enabled: true },
  { code: 'ja', name: 'Japanese', nativeName: '\u65E5\u672C\u8A9E', dir: 'ltr', enabled: false },
  { code: 'ko', name: 'Korean', nativeName: '\uD55C\uAD6D\uC5B4', dir: 'ltr', enabled: false },
  { code: 'es', name: 'Spanish', nativeName: 'Espa\u00F1ol', dir: 'ltr', enabled: false },
  { code: 'fr', name: 'French', nativeName: 'Fran\u00E7ais', dir: 'ltr', enabled: false },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', enabled: false },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629',
    dir: 'rtl',
    enabled: false,
  },
]

export const defaultLocale = 'en'

/**
 * Raw dictionary definitions (nested structure).
 * These get flattened to dot-notation keys for the translator.
 */
const enDict = {
  // Practice component
  practice: {
    submit: 'Submit',
    next: 'Next Question',
    correct: 'Correct!',
    incorrect: 'Incorrect.',
    well_done: 'Well done!',
    not_quite: 'Not quite right.',
    explanation: 'Explanation:',
    option: 'Option',
  },

  // Flashcard component
  flashcard: {
    study_now: 'Study Now',
    stats: 'Stats',
    settings: 'Settings',
    total_cards: 'Total Cards',
    due_today: 'Due Today',
    mastered: 'Mastered',
    streak: 'Streak',
    mastery: 'Mastery',
    question: 'QUESTION',
    answer: 'ANSWER',
    exit_review: 'Exit Review',
    card_of: 'Card {{current}} of {{total}}',
    empty: 'No cards in this deck.',
    export: 'Export Progress',
    import: 'Import Progress',
    reset: 'Reset Deck',
    close: 'Close',
  },

  // Diagnostic component
  diagnostic: {
    no_questions: 'No questions available.',
    submit: 'Submit',
    next: 'Next Question',
    view_results: 'View Results',
    overall_score: 'Overall Score',
    correct: 'Correct',
    time: 'Time',
    topic_breakdown: 'Topic Breakdown',
    strengths: 'Strengths',
    weaknesses: 'Weaknesses',
    recommended: 'Recommended Review',
  },

  // Settings
  settings: {
    title: 'Settings',
    close: 'Close',
    theme: 'Theme',
    dark: 'Dark',
    light: 'Light',
    sepia: 'Sepia',
    high_contrast: 'High Contrast',
    font_size: 'Font Size',
    line_height: 'Line Height',
    content_width: 'Content Width',
    narrow: 'Narrow',
    standard: 'Standard',
    wide: 'Wide',
    full: 'Full',
    font_family: 'Font Family',
    sans: 'Sans',
    serif: 'Serif',
    mono: 'Mono',
    justify: 'Justify Text',
    reduce_motion: 'Reduce Motion',
    font_weight: 'Font Weight',
    letter_spacing: 'Letter Spacing',
    paragraph_gap: 'Paragraph Gap',
    dim_images: 'Dim Images',
    auto_hide_nav: 'Auto-hide Nav',
  },

  // Results
  results: {
    close: 'Close dialog',
  },

  // Navigation
  nav: {
    search: 'Search',
    skip_to_content: 'Skip to main content',
  },

  // Common
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry',
  },
}

const zhDict: typeof enDict = {
  practice: {
    submit: '\u63D0\u4EA4',
    next: '\u4E0B\u4E00\u9898',
    correct: '\u6B63\u786E\uFF01',
    incorrect: '\u4E0D\u6B63\u786E\u3002',
    well_done: '\u505A\u5F97\u5F88\u597D\uFF01',
    not_quite: '\u8FD8\u4E0D\u591F\u3002',
    explanation: '\u89E3\u91CA\uFF1A',
    option: '\u9009\u9879',
  },
  flashcard: {
    study_now: '\u7ACB\u5373\u5B66\u4E60',
    stats: '\u7EDF\u8BA1',
    settings: '\u8BBE\u7F6E',
    total_cards: '\u603B\u5361\u7247\u6570',
    due_today: '\u4ECA\u65E5\u5F85\u5B66',
    mastered: '\u5DF2\u638C\u63E1',
    streak: '\u8FDE\u7EED\u5929\u6570',
    mastery: '\u638C\u63E1\u5EA6',
    question: '\u95EE\u9898',
    answer: '\u7B54\u6848',
    exit_review: '\u9000\u51FA\u590D\u4E60',
    card_of: '\u7B2C {{current}} \u5F20\uFF0C\u5171 {{total}} \u5F20',
    empty: '\u6B64\u7EC4\u4E2D\u6CA1\u6709\u5361\u7247\u3002',
    export: '\u5BFC\u51FA\u8FDB\u5EA6',
    import: '\u5BFC\u5165\u8FDB\u5EA6',
    reset: '\u91CD\u7F6E\u724C\u7EC4',
    close: '\u5173\u95ED',
  },
  diagnostic: {
    no_questions: '\u6CA1\u6709\u53EF\u7528\u7684\u95EE\u9898\u3002',
    submit: '\u63D0\u4EA4',
    next: '\u4E0B\u4E00\u9898',
    view_results: '\u67E5\u770B\u7ED3\u679C',
    overall_score: '\u603B\u5206',
    correct: '\u6B63\u786E',
    time: '\u65F6\u95F4',
    topic_breakdown: '\u4E3B\u9898\u5206\u6790',
    strengths: '\u4F18\u52BF',
    weaknesses: '\u5F31\u52BF',
    recommended: '\u63A8\u8350\u590D\u4E60',
  },
  settings: {
    title: '\u8BBE\u7F6E',
    close: '\u5173\u95ED',
    theme: '\u4E3B\u9898',
    dark: '\u6DF1\u8272',
    light: '\u6D45\u8272',
    sepia: '\u68D5\u9EC4\u8272',
    high_contrast: '\u9AD8\u5BF9\u6BD4\u5EA6',
    font_size: '\u5B57\u4F53\u5927\u5C0F',
    line_height: '\u884C\u9AD8',
    content_width: '\u5185\u5BB9\u5BBD\u5EA6',
    narrow: '\u7A84',
    standard: '\u6807\u51C6',
    wide: '\u5BBD',
    full: '\u5168\u5BBD',
    font_family: '\u5B57\u4F53',
    sans: '\u65E0\u886C\u7EBF',
    serif: '\u886C\u7EBF',
    mono: '\u7B49\u5BBD',
    justify: '\u4E24\u7AEF\u5BF9\u9F50',
    reduce_motion: '\u51CF\u5C11\u52A8\u753B',
    font_weight: '\u5B57\u4F53\u7C97\u7EC6',
    letter_spacing: '\u5B57\u95F4\u8DDD',
    paragraph_gap: '\u6BB5\u843D\u95F4\u8DDD',
    dim_images: '\u56FE\u7247\u53D8\u6697',
    auto_hide_nav: '\u81EA\u52A8\u9690\u85CF\u5BFC\u822A',
  },
  results: {
    close: '\u5173\u95ED\u5BF9\u8BDD\u6846',
  },
  nav: {
    search: '\u641C\u7D22',
    skip_to_content: '\u8DF3\u8F6C\u5230\u4E3B\u8981\u5185\u5BA2',
  },
  common: {
    loading: '\u52A0\u8F7D\u4E2D...',
    error: '\u53D1\u751F\u9519\u8BEF',
    retry: '\u91CD\u8BD5',
  },
}

/**
 * All available dictionaries keyed by locale code.
 */
const _dictionaries: Record<string, typeof enDict> = {
  en: enDict,
  zh: zhDict,
}

/**
 * Flattened dictionaries for each locale.
 * Pre-computed for performance.
 */
const flattenedDictionaries: Record<string, i18n.Flatten<typeof enDict>> = {
  en: i18n.flatten(enDict),
  zh: i18n.flatten(zhDict),
}

/**
 * Get the flattened dictionary for a given locale.
 * Falls back to English if the locale is not available.
 */
function getFlatDict(locale: string) {
  return flattenedDictionaries[locale] ?? flattenedDictionaries[defaultLocale]
}

/**
 * Create a translator function for a given locale.
 * Uses @solid-primitives/i18n's translator with template resolution.
 */
function createTranslator(locale: string) {
  const dict = getFlatDict(locale)
  return i18n.translator(() => dict, i18n.resolveTemplate)
}

/**
 * Translation lookup. Returns the translated string for a key.
 * Falls back to English if the translation is missing.
 *
 * Usage:
 *   t('practice.submit')  // => 'Submit'
 *   t('flashcard.card_of', { current: 1, total: 10 })  // => 'Card 1 of 10'
 */
// Cache translators per locale for performance
const translatorCache: Record<string, ReturnType<typeof createTranslator>> = {}

function getTranslator(locale: string = defaultLocale): ReturnType<typeof createTranslator> {
  if (!translatorCache[locale]) {
    translatorCache[locale] = createTranslator(locale)
  }
  return translatorCache[locale]
}

export function t(key: string, params?: Record<string, string | number>, locale?: string): string {
  const translator = getTranslator(locale ?? defaultLocale)
  // The translator returns a nested dict when `key` is a partial path; coerce
  // to a string (falling back to the key) so t() always returns string.
  const result = translator(
    key as Parameters<ReturnType<typeof createTranslator>>[0],
    params as Record<string, string | number>,
  )
  return typeof result === 'string' ? result : key
}
