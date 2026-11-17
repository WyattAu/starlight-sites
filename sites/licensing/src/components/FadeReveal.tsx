import { createSignal, onCleanup, onMount, type JSX } from 'solid-js'

export interface FadeRevealProps {
  children?: JSX.Element
  threshold?: number
}

/** Fade a block in on first scroll into view. No animation library. */
export default function FadeReveal(props: FadeRevealProps) {
  const [visible, setVisible] = createSignal(false)
  let ref!: HTMLDivElement
  onMount(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: props.threshold ?? 0.08 },
    )
    observer.observe(ref)
    onCleanup(() => observer.disconnect())
  })
  return (
    <div
      ref={ref}
      class="fade-reveal"
      classList={{ 'fade-reveal--visible': visible() }}
      style={{
        opacity: visible() ? '1' : '0',
        transform: visible() ? 'translateY(0)' : 'translateY(1.25rem)',
        transition: 'opacity .7s ease, transform .7s ease',
      }}
    >
      {props.children}
    </div>
  )
}
