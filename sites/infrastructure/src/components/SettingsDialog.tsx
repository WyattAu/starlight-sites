import { createEffect, createSignal, type JSX } from 'solid-js'
import * as RadioGroup from '@kobalte/core/radio-group'
import * as Slider from '@kobalte/core/slider'
import * as Switch from '@kobalte/core/switch'
import BaseDialog from './BaseDialog'
import { t } from '../i18n/config'

const CONTENT_WIDTH_OPTIONS = [
  { value: '36rem', labelKey: 'settings.narrow' },
  { value: '48rem', labelKey: 'settings.standard' },
  { value: '56rem', labelKey: 'settings.wide' },
  { value: '100%', labelKey: 'settings.full' },
] as const

const FONT_FAMILY_MAP: Record<string, string> = {
  sans: '"Inter", system-ui, -apple-system, sans-serif',
  serif: '"Merriweather", Georgia, serif',
  mono: '"JetBrains Mono", "Fira Code", monospace',
}

const FONT_FAMILY_OPTIONS = [
  { value: 'sans', labelKey: 'settings.sans' },
  { value: 'serif', labelKey: 'settings.serif' },
  { value: 'mono', labelKey: 'settings.mono' },
] as const

const LINE_HEIGHT_VALUES = ['1.5', '1.7', '1.9', '2.1'] as const

const VALID_CONTENT_WIDTHS: readonly string[] = CONTENT_WIDTH_OPTIONS.map(o => o.value)

const RADIO_ITEM_CLASS =
  'cursor-pointer rounded-lg border px-3 py-1.5 text-sm transition-colors ' +
  'data-[checked]:border-accent data-[checked]:bg-accent/10 data-[checked]:text-accent ' +
  'data-[unchecked]:border-emphasis-300 data-[unchecked]:hover:bg-emphasis-100'

function initContentWidth(): string {
  const stored = localStorage.getItem('wn-content-width')
  return stored && VALID_CONTENT_WIDTHS.indexOf(stored) >= 0 ? stored : '48rem'
}

function initFontFamily(): string {
  const stored = localStorage.getItem('wn-font-family')
  return stored && stored in FONT_FAMILY_MAP ? stored : 'sans'
}

export interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children?: JSX.Element
}

export default function SettingsDialog(props: SettingsDialogProps) {
  const [theme, setTheme] = createSignal(localStorage.getItem('wn-theme') ?? 'dark')
  const [fontSize, setFontSize] = createSignal(parseFloat(localStorage.getItem('wn-font-size') ?? '1'))
  const [lineHeight, setLineHeight] = createSignal(localStorage.getItem('wn-line-height') ?? '1.7')
  const [contentWidth, setContentWidth] = createSignal(initContentWidth())
  const [fontFamily, setFontFamily] = createSignal(initFontFamily())
  const [justify, setJustify] = createSignal(localStorage.getItem('wn-justify') === 'true')
  const [reduceMotion, setReduceMotion] = createSignal(localStorage.getItem('wn-reduce-motion') === 'true')
  const [fontWeight, setFontWeight] = createSignal(localStorage.getItem('wn-font-weight') ?? '400')
  const [letterSpacing, setLetterSpacing] = createSignal(parseFloat(localStorage.getItem('wn-letter-spacing') ?? '0'))
  const [paraGap, setParaGap] = createSignal(localStorage.getItem('wn-para-gap') ?? '1')
  const [dimImages, setDimImages] = createSignal(localStorage.getItem('wn-dim-images') !== 'false')
  const [autoHide, setAutoHide] = createSignal(localStorage.getItem('wn-auto-hide') === 'true')

  createEffect(() => {
    const html = document.documentElement
    const tVal = theme()
    const fs = fontSize()
    const lh = lineHeight()
    const cw = contentWidth()
    const ff = fontFamily()
    const j = justify()
    const rm = reduceMotion()
    const fw = fontWeight()
    const ls = letterSpacing()
    const pg = paraGap()
    const di = dimImages()
    const ah = autoHide()

    html.setAttribute('data-theme', tVal)
    html.style.setProperty('--wn-font-size-scale', String(fs))
    html.style.setProperty('--wn-line-height', lh)
    html.style.setProperty('--wn-content-width', cw)
    html.style.setProperty('--wn-font-body', FONT_FAMILY_MAP[ff] ?? FONT_FAMILY_MAP.sans)
    html.setAttribute('data-justify', String(j))
    html.setAttribute('data-reduce-motion', String(rm))
    html.style.setProperty('--wn-font-weight', fw)
    html.style.setProperty('--wn-letter-spacing', ls + 'px')
    html.style.setProperty('--wn-para-gap', pg)
    html.setAttribute('data-dim-images', String(di))

    localStorage.setItem('wn-theme', tVal)
    localStorage.setItem('wn-font-size', String(fs))
    localStorage.setItem('wn-line-height', lh)
    localStorage.setItem('wn-content-width', cw)
    localStorage.setItem('wn-font-family', ff)
    localStorage.setItem('wn-justify', String(j))
    localStorage.setItem('wn-reduce-motion', String(rm))
    localStorage.setItem('wn-font-weight', fw)
    localStorage.setItem('wn-letter-spacing', String(ls))
    localStorage.setItem('wn-para-gap', pg)
    localStorage.setItem('wn-dim-images', String(di))
    localStorage.setItem('wn-auto-hide', String(ah))
  })

  createEffect(() => {
    const ah = autoHide()
    if (ah) {
      let lastScrollY = window.scrollY
      const onScroll = () => {
        const currentY = window.scrollY
        if (currentY > lastScrollY && currentY > 80) {
          document.body.classList.add('wn-nav-hidden')
        } else if (currentY < lastScrollY) {
          document.body.classList.remove('wn-nav-hidden')
        }
        if (currentY <= 80) {
          document.body.classList.remove('wn-nav-hidden')
        }
        lastScrollY = currentY
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
        document.body.classList.remove('wn-nav-hidden')
      }
    } else {
      document.body.classList.remove('wn-nav-hidden')
    }
  })

  return (
    <BaseDialog
      open={props.open}
      onOpenChange={props.onOpenChange}
      title={t('settings.title')}
      size="md"
      children={(
        <div class="space-y-6">
          {/* Theme */}
          <fieldset class="space-y-2">
            <legend class="font-medium text-sm">{t('settings.theme')}</legend>
            <RadioGroup.Root value={theme()} onChange={setTheme} class="flex flex-wrap gap-2">
              <RadioGroup.Item value="dark" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>{t('settings.dark')}</RadioGroup.ItemLabel>
              </RadioGroup.Item>
              <RadioGroup.Item value="light" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>{t('settings.light')}</RadioGroup.ItemLabel>
              </RadioGroup.Item>
              <RadioGroup.Item value="sepia" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>{t('settings.sepia')}</RadioGroup.ItemLabel>
              </RadioGroup.Item>
              <RadioGroup.Item value="contrast" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>{t('settings.high_contrast')}</RadioGroup.ItemLabel>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </fieldset>

          {/* Font Size */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="font-medium text-sm" for="font-size-slider">
                {t('settings.font_size')}
              </label>
              <span class="text-emphasis-500 text-sm">{Math.round(fontSize() * 100)}%</span>
            </div>
            <Slider.Root
              value={[fontSize()]}
              onChange={v => setFontSize(v[0]!)}
              minValue={0.8}
              maxValue={1.5}
              step={0.05}
              aria-label={t('settings.font_size')}
            >
              <Slider.Track class="relative h-2 w-full cursor-pointer rounded-full bg-emphasis-200">
                <Slider.Fill class="absolute h-full rounded-full bg-accent" />
                <Slider.Thumb class="h-5 w-5 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform active:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1" />
              </Slider.Track>
            </Slider.Root>
          </div>

          {/* Line Height */}
          <fieldset class="space-y-2">
            <legend class="font-medium text-sm">{t('settings.line_height')}</legend>
            <RadioGroup.Root value={lineHeight()} onChange={setLineHeight} class="flex flex-wrap gap-2">
              {LINE_HEIGHT_VALUES.map(v => (
                <RadioGroup.Item value={v} class={RADIO_ITEM_CLASS}>
                  <RadioGroup.ItemLabel>{v}</RadioGroup.ItemLabel>
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </fieldset>

          {/* Content Width */}
          <fieldset class="space-y-2">
            <legend class="font-medium text-sm">{t('settings.content_width')}</legend>
            <RadioGroup.Root value={contentWidth()} onChange={setContentWidth} class="flex flex-wrap gap-2">
              {CONTENT_WIDTH_OPTIONS.map(opt => (
                <RadioGroup.Item value={opt.value} class={RADIO_ITEM_CLASS}>
                  <RadioGroup.ItemLabel>{t(opt.labelKey)}</RadioGroup.ItemLabel>
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </fieldset>

          {/* Font Family */}
          <fieldset class="space-y-2">
            <legend class="font-medium text-sm">{t('settings.font_family')}</legend>
            <RadioGroup.Root value={fontFamily()} onChange={setFontFamily} class="flex flex-wrap gap-2">
              {FONT_FAMILY_OPTIONS.map(opt => (
                <RadioGroup.Item value={opt.value} class={RADIO_ITEM_CLASS}>
                  <RadioGroup.ItemLabel>{t(opt.labelKey)}</RadioGroup.ItemLabel>
                </RadioGroup.Item>
              ))}
            </RadioGroup.Root>
          </fieldset>

          {/* Justify */}
          <div class="flex items-center justify-between">
            <Switch.Root checked={justify()} onChange={setJustify} class="flex w-full items-center justify-between">
              <Switch.Label class="font-medium text-sm">{t('settings.justify')}</Switch.Label>
              <Switch.Input />
              <Switch.Control class="inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-emphasis-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 data-[checked]:bg-accent">
                <Switch.Thumb class="h-5 w-5 rounded-full bg-white shadow-sm transition-transform data-[checked]:translate-x-4" />
              </Switch.Control>
            </Switch.Root>
          </div>

          {/* Reduce Motion */}
          <div class="flex items-center justify-between">
            <Switch.Root checked={reduceMotion()} onChange={setReduceMotion} class="flex w-full items-center justify-between">
              <Switch.Label class="font-medium text-sm">{t('settings.reduce_motion')}</Switch.Label>
              <Switch.Input />
              <Switch.Control class="inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-emphasis-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 data-[checked]:bg-accent">
                <Switch.Thumb class="h-5 w-5 rounded-full bg-white shadow-sm transition-transform data-[checked]:translate-x-4" />
              </Switch.Control>
            </Switch.Root>
          </div>

          {/* Font Weight */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="font-medium text-sm">{t('settings.font_weight')}</label>
              <span class="text-emphasis-500 text-sm">{fontWeight()}</span>
            </div>
            <Slider.Root
              value={[parseInt(fontWeight())]}
              onChange={v => setFontWeight(String(v[0]!))}
              minValue={300}
              maxValue={900}
              step={100}
              aria-label={t('settings.font_weight')}
            >
              <Slider.Track class="relative h-2 w-full cursor-pointer rounded-full bg-emphasis-200">
                <Slider.Fill class="absolute h-full rounded-full bg-accent" />
                <Slider.Thumb class="h-5 w-5 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform active:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1" />
              </Slider.Track>
            </Slider.Root>
          </div>

          {/* Letter Spacing */}
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <label class="font-medium text-sm">{t('settings.letter_spacing')}</label>
              <span class="text-emphasis-500 text-sm">{letterSpacing()}px</span>
            </div>
            <Slider.Root
              value={[letterSpacing()]}
              onChange={v => setLetterSpacing(v[0]!)}
              minValue={-0.5}
              maxValue={2}
              step={0.25}
              aria-label={t('settings.letter_spacing')}
            >
              <Slider.Track class="relative h-2 w-full cursor-pointer rounded-full bg-emphasis-200">
                <Slider.Fill class="absolute h-full rounded-full bg-accent" />
                <Slider.Thumb class="h-5 w-5 rounded-full border-2 border-accent bg-surface shadow-sm transition-transform active:scale-110 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1" />
              </Slider.Track>
            </Slider.Root>
          </div>

          {/* Paragraph Gap */}
          <fieldset class="space-y-2">
            <legend class="font-medium text-sm">{t('settings.paragraph_gap')}</legend>
            <RadioGroup.Root value={paraGap()} onChange={setParaGap} class="flex flex-wrap gap-2">
              <RadioGroup.Item value="0.5" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>0.5x</RadioGroup.ItemLabel>
              </RadioGroup.Item>
              <RadioGroup.Item value="1" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>1x</RadioGroup.ItemLabel>
              </RadioGroup.Item>
              <RadioGroup.Item value="1.5" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>1.5x</RadioGroup.ItemLabel>
              </RadioGroup.Item>
              <RadioGroup.Item value="2" class={RADIO_ITEM_CLASS}>
                <RadioGroup.ItemLabel>2x</RadioGroup.ItemLabel>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </fieldset>

          {/* Dim Images */}
          <div class="flex items-center justify-between">
            <Switch.Root checked={dimImages()} onChange={setDimImages} class="flex w-full items-center justify-between">
              <Switch.Label class="font-medium text-sm">{t('settings.dim_images')}</Switch.Label>
              <Switch.Input />
              <Switch.Control class="inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-emphasis-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 data-[checked]:bg-accent">
                <Switch.Thumb class="h-5 w-5 rounded-full bg-white shadow-sm transition-transform data-[checked]:translate-x-4" />
              </Switch.Control>
            </Switch.Root>
          </div>

          {/* Auto-hide Nav */}
          <div class="flex items-center justify-between">
            <Switch.Root checked={autoHide()} onChange={setAutoHide} class="flex w-full items-center justify-between">
              <Switch.Label class="font-medium text-sm">{t('settings.auto_hide_nav')}</Switch.Label>
              <Switch.Input />
              <Switch.Control class="inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-emphasis-300 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 data-[checked]:bg-accent">
                <Switch.Thumb class="h-5 w-5 rounded-full bg-white shadow-sm transition-transform data-[checked]:translate-x-4" />
              </Switch.Control>
            </Switch.Root>
          </div>

          {/* Flashcard-specific settings passed as children */}
          {props.children && <div class="border-t border-emphasis-200 pt-4 mt-4 space-y-2">{props.children}</div>}
        </div>
      )}
    />
  )
}
