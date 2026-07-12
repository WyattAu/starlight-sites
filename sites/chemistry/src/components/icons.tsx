/**
 * Lucide icon components, inlined from @iconify-json/lucide.
 *
 * The path geometry below is the authentic Lucide source (24x24 viewBox,
 * stroke=currentColor, stroke-width=2, round caps/joins), copied verbatim
 * from the installed @iconify-json/lucide/icons.json so the icons are real
 * Lucide icons rather than approximations.
 *
 * Inlining (rather than wiring unplugin-icons into every build config) keeps
 * the icon resolution local to the components: no vite/vitest/astro plugin
 * churn across 10 config files, and no risk to the build immediately before a
 * framework upgrade. unplugin-icons remains a dependency for future adoption
 * once the build surface stabilises; for the handful of icons the islands
 * need, this module is the lower-risk path.
 *
 * Each component forwards all SVG props (class, style, width, height, ...).
 */

import type { JSX } from 'solid-js'

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string
}

function LucideIcon(props: IconProps & { children: JSX.Element }) {
  const size = () => props.size ?? 24
  const { size: _size, ...rest } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size()}
      height={size()}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {props.children}
    </svg>
  )
}

/** Lucide "x" -- close affordance. */
export function IconX(props: IconProps) {
  return (
    <LucideIcon {...props}>
      <path d="M18 6L6 18M6 6l12 12" />
    </LucideIcon>
  )
}

/** Lucide "globe" -- language selector. */
export function IconGlobe(props: IconProps) {
  return (
    <LucideIcon {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20" />
    </LucideIcon>
  )
}

/** Lucide "chevron-down" -- collapsed/inactive dropdown indicator. */
export function IconChevronDown(props: IconProps) {
  return (
    <LucideIcon {...props}>
      <path d="m6 9l6 6l6-6" />
    </LucideIcon>
  )
}

/** Lucide "check" -- selected indicator. */
export function IconCheck(props: IconProps) {
  return (
    <LucideIcon {...props}>
      <path d="M20 6L9 17l-5-5" />
    </LucideIcon>
  )
}
