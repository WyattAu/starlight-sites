/**
 * LocaleSwitcher -- Language switching component.
 *
 * Displays a dropdown or button group for switching between enabled locales.
 * Uses the i18n config to determine available locales.
 */

import { createEffect, createSignal, For, onCleanup, Show } from 'solid-js'
import { type Locale, locales } from '../i18n/config'

export interface LocaleSwitcherProps {
  currentLocale?: string
  onLocaleChange?: (locale: string) => void
}

export default function LocaleSwitcher(props: LocaleSwitcherProps) {
  const [isOpen, setIsOpen] = createSignal(false)
  const enabledLocales = () => locales.filter(l => l.enabled)
  const currentLocale = () =>
    enabledLocales().find(l => l.code === (props.currentLocale ?? 'en')) ?? enabledLocales()[0]

  let containerRef: HTMLDivElement | undefined

  function handleSelect(locale: Locale) {
    props.onLocaleChange?.(locale.code)
    setIsOpen(false)
  }

  // Escape key closes dropdown
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen()) {
      e.preventDefault()
      setIsOpen(false)
    }
  }

  // Click outside closes dropdown
  createEffect(() => {
    if (!isOpen()) return
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef && !containerRef.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    onCleanup(() => document.removeEventListener('mousedown', handleClickOutside))
  })

  // Don't render if only one locale is enabled
  if (enabledLocales().length <= 1) return null

  return (
    <div
      class="relative"
      ref={el => {
        containerRef = el
      }}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen())}
        class="flex items-center gap-1.5 rounded-lg border border-emphasis-300 bg-surface px-3 py-1.5 font-medium text-emphasis-700 text-sm transition-colors hover:bg-emphasis-100"
        aria-label="Select language"
        aria-expanded={isOpen()}
        aria-haspopup="listbox"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>{currentLocale().nativeName}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class={`transition-transform ${isOpen() ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <Show when={isOpen()}>
        <div
          class="absolute right-0 z-50 mt-1 min-w-[120px] rounded-lg border border-emphasis-300 bg-surface py-1 shadow-lg"
          role="listbox"
          aria-label="Available languages"
        >
          <For each={enabledLocales()}>
            {locale => (
              <button
                type="button"
                role="option"
                aria-selected={locale.code === currentLocale().code}
                onClick={() => handleSelect(locale)}
                class={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-emphasis-100 ${
                  locale.code === currentLocale().code
                    ? 'bg-accent/10 text-accent'
                    : 'text-emphasis-700'
                }`}
              >
                <span class="font-medium">{locale.nativeName}</span>
                <span class="text-emphasis-500 text-xs">{locale.name}</span>
              </button>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
