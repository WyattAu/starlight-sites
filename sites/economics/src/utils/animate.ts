/**
 * autoAnimate directive for SolidJS.
 * Usage: <div use:animate> or <div use:animate={{ duration: 300 }}>
 */
import autoAnimate from '@formkit/auto-animate'
import type { Accessor } from 'solid-js'

export function animate(
  el: HTMLElement,
  accessor?: Accessor<{ duration?: number; easing?: string } | undefined>,
) {
  const opts = accessor?.()
  autoAnimate(el, {
    duration: opts?.duration ?? 250,
    easing: opts?.easing ?? 'ease-in-out',
  })
}
