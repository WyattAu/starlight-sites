/**
 * Internationalisation configuration for Wyatt's Notes.
 *
 * Defines supported languages, translation keys, and locale-specific settings.
 * Each site can override the default locale and provide additional translations.
 *
 * Usage:
 *   import { t, locales } from '../../shared/i18n/config'
 *   const label = t('practice.submit', 'zh')
 */

export interface Locale {
  code: string
  name: string
  nativeName: string
  dir: 'ltr' | 'rtl'
  enabled: boolean
}

export const locales: Locale[] = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr', enabled: true },
  { code: 'zh', name: 'Chinese', nativeName: '\u4E2D\u6587', dir: 'ltr', enabled: false },
  { code: 'ja', name: 'Japanese', nativeName: '\u65E5\u672C\u8A9E', dir: 'ltr', enabled: false },
  { code: 'ko', name: 'Korean', nativeName: '\uD55C\uAD6D\uC5B4', dir: 'ltr', enabled: false },
  { code: 'es', name: 'Spanish', nativeName: 'Espa\u00F1ol', dir: 'ltr', enabled: false },
  { code: 'fr', name: 'French', nativeName: 'Fran\u00E7ais', dir: 'ltr', enabled: false },
  { code: 'de', name: 'German', nativeName: 'Deutsch', dir: 'ltr', enabled: false },
  { code: 'ar', name: 'Arabic', nativeName: '\u0627\u0644\u0639\u0631\u0628\u064A\u0629', dir: 'rtl', enabled: false },
]

export const defaultLocale = 'en'

/**
 * Translation lookup. Returns the translated string for a key in the given locale.
 * Falls back to English if the translation is missing.
 */
export function t(key: string, locale: string = defaultLocale): string {
  const translations = getTranslations(locale)
  return translations[key] ?? getTranslations(defaultLocale)[key] ?? key
}

function getTranslations(locale: string): Record<string, string> {
  switch (locale) {
    case 'zh': return zhTranslations
    default: return enTranslations
  }
}

const enTranslations: Record<string, string> = {
  // Practice component
  'practice.submit': 'Submit',
  'practice.next': 'Next Question',
  'practice.correct': 'Correct!',
  'practice.incorrect': 'Incorrect.',
  'practice.well_done': 'Well done!',
  'practice.not_quite': 'Not quite right.',
  'practice.explanation': 'Explanation:',
  'practice.option': 'Option',

  // Flashcard component
  'flashcard.study_now': 'Study Now',
  'flashcard.stats': 'Stats',
  'flashcard.settings': 'Settings',
  'flashcard.total_cards': 'Total Cards',
  'flashcard.due_today': 'Due Today',
  'flashcard.mastered': 'Mastered',
  'flashcard.streak': 'Streak',
  'flashcard.mastery': 'Mastery',
  'flashcard.question': 'QUESTION',
  'flashcard.answer': 'ANSWER',
  'flashcard.exit_review': 'Exit Review',
  'flashcard.card_of': 'Card {current} of {total}',
  'flashcard.empty': 'No cards in this deck.',
  'flashcard.export': 'Export Progress',
  'flashcard.import': 'Import Progress',
  'flashcard.reset': 'Reset Deck',
  'flashcard.close': 'Close',

  // Diagnostic component
  'diagnostic.no_questions': 'No questions available.',
  'diagnostic.submit': 'Submit',
  'diagnostic.next': 'Next Question',
  'diagnostic.view_results': 'View Results',
  'diagnostic.overall_score': 'Overall Score',
  'diagnostic.correct': 'Correct',
  'diagnostic.time': 'Time',
  'diagnostic.topic_breakdown': 'Topic Breakdown',
  'diagnostic.strengths': 'Strengths',
  'diagnostic.weaknesses': 'Weaknesses',
  'diagnostic.recommended': 'Recommended Review',

  // Settings
  'settings.title': 'Settings',
  'settings.close': 'Close',

  // Results
  'results.close': 'Close dialog',

  // Navigation
  'nav.search': 'Search',
  'nav.skip_to_content': 'Skip to main content',

  // Common
  'common.loading': 'Loading...',
  'common.error': 'An error occurred',
  'common.retry': 'Retry',
}

const zhTranslations: Record<string, string> = {
  'practice.submit': '\u63D0\u4EA4',
  'practice.next': '\u4E0B\u4E00\u9898',
  'practice.correct': '\u6B63\u786E\uFF01',
  'practice.incorrect': '\u4E0D\u6B63\u786E\u3002',
  'practice.well_done': '\u505A\u5F97\u5F88\u597D\uFF01',
  'practice.not_quite': '\u8FD8\u4E0D\u591F\u3002',
  'practice.explanation': '\u89E3\u91CA\uFF1A',
  'flashcard.study_now': '\u7ACB\u5373\u5B66\u4E60',
  'flashcard.stats': '\u7EDF\u8BA1',
  'flashcard.settings': '\u8BBE\u7F6E',
  'flashcard.total_cards': '\u603B\u5361\u7247\u6570',
  'flashcard.due_today': '\u4ECA\u65E5\u5F85\u5B66',
  'flashcard.mastered': '\u5DF2\u638C\u63E1',
  'flashcard.streak': '\u8FDE\u7EED\u5929\u6570',
  'flashcard.mastery': '\u638C\u63E1\u5EA6',
  'flashcard.empty': '\u6B64\u7EC4\u4E2D\u6CA1\u6709\u5361\u7247\u3002',
  'diagnostic.no_questions': '\u6CA1\u6709\u53EF\u7528\u7684\u95EE\u9898\u3002',
  'diagnostic.view_results': '\u67E5\u770B\u7ED3\u679C',
  'nav.search': '\u641C\u7D22',
  'nav.skip_to_content': '\u8DF3\u8F6C\u5230\u4E3B\u8981\u5185\u5BA2',
}
