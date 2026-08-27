/**
 * Skeleton.tsx — Loading state placeholder component
 *
 * Features:
 * - Three variants: text, circular, rectangular
 * - Two animations: pulse, wave
 * - Respects prefers-reduced-motion
 * - Theme-aware (uses design tokens)
 */

interface SkeletonProps {
  width?: string | number
  height?: string | number
  variant?: 'text' | 'circular' | 'rectangular'
  animation?: 'pulse' | 'wave' | 'none'
  class?: string
}

export default function Skeleton(props: SkeletonProps) {
  const variant = () => props.variant || 'text'
  const animation = () => props.animation || 'pulse'

  const style = () => ({
    width: props.width ? `${props.width}` : undefined,
    height: props.height ? `${props.height}` : undefined,
    ...(variant() === 'circular' ? { borderRadius: '50%' } : {}),
    ...(variant() === 'text' ? { height: '1em', width: '100%' } : {}),
    ...(variant() === 'rectangular' ? { borderRadius: 'var(--wn-radius-sm)' } : {}),
  })

  const animationClass = () => {
    if (animation() === 'none') return ''
    return animation() === 'pulse' ? 'skeleton-pulse' : 'skeleton-wave'
  }

  return (
    <div
      class={`skeleton ${animationClass()} ${props.class || ''}`}
      style={style()}
      aria-hidden="true"
    />
  )
}

/**
 * SkeletonGroup — Multiple skeleton rows for loading states
 */
interface SkeletonGroupProps {
  rows?: number
  class?: string
}

export function SkeletonGroup(props: SkeletonGroupProps) {
  const rows = () => props.rows || 3

  return (
    <div class={`skeleton-group ${props.class || ''}`} aria-busy="true" aria-label="Loading...">
      {Array.from({ length: rows() }, (_, i) => (
        <Skeleton
          variant="rectangular"
          height="48px"
          animation="pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
    </div>
  )
}
