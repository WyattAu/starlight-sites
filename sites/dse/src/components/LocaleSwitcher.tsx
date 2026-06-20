/**
 * LocaleSwitcher -- Language switching component.
 *
 * Displays a dropdown for switching between enabled locales, using the i18n
 * config to determine available locales. Built on Kobalte's Select primitive
 * (already a project dependency) so the full WAI-ARIA listbox pattern --
 * roving tabindex, typeahead, aria-expanded, aria-selected, Escape/click-
 * outside dismissal -- is correct by default instead of hand-rolled.
 *
 * Kobalte is unstyled; the Tailwind classes below preserve the prior look.
 */

import { Select } from '@kobalte/core'
import { type Locale, locales } from '../i18n/config'

export interface LocaleSwitcherProps {
  currentLocale?: string
  onLocaleChange?: (locale: string) => void
}

export default function LocaleSwitcher(props: LocaleSwitcherProps) {
  const enabledLocales = () => locales.filter(l => l.enabled)
  const currentLocale = () =>
    enabledLocales().find(l => l.code === (props.currentLocale ?? 'en')) ?? enabledLocales()[0]

  // The switcher is a no-op until a second locale exists.
  if (enabledLocales().length <= 1) return null

  return (
    <Select.Root<Locale>
      options={enabledLocales()}
      optionValue="code"
      optionTextValue="nativeName"
      value={currentLocale()}
      disallowEmptySelection
      onChange={locale => {
        if (locale) props.onLocaleChange?.(locale.code)
      }}
      itemComponent={itemProps => (
        <Select.Item<Locale>
          item={itemProps.item}
          class="flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-emphasis-100 data-[highlighted]:bg-emphasis-100"
        >
          <Select.ItemLabel class="font-medium">
            {itemProps.item.rawValue.nativeName}
          </Select.ItemLabel>
          <span class="text-emphasis-500 text-xs">{itemProps.item.rawValue.name}</span>
          <Select.ItemIndicator class="ml-auto text-accent">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </Select.ItemIndicator>
        </Select.Item>
      )}
    >
      <Select.Trigger<Locale>
        aria-label="Select language"
        class="group flex items-center gap-1.5 rounded-lg border border-emphasis-300 bg-surface px-3 py-1.5 font-medium text-emphasis-700 text-sm transition-colors hover:bg-emphasis-100"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{currentLocale().nativeName}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          aria-hidden="true"
          class="transition-transform group-data-[expanded]:rotate-180"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class="z-50 min-w-[160px] rounded-lg border border-emphasis-300 bg-surface py-1 shadow-lg">
          <Select.Listbox />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
