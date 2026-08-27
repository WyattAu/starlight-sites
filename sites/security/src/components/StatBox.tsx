/**
 * StatBox.tsx — Consistent stat display component
 *
 * Displays a labeled value with optional highlight and color coding.
 */

interface StatBoxProps {
  label: string
  value: string | number
  highlight?: boolean
  color?: 'default' | 'success' | 'warning' | 'error'
  icon?: () => JSX.Element
  class?: string
}

export default function StatBox(props: StatBoxProps) {
  const color = () => props.color || 'default'

  const classes = () => {
    const base = 'stat-box'
    const highlightClass = props.highlight ? 'stat-box-highlight' : ''
    const colorClass = color() !== 'default' ? `stat-box-${color()}` : ''
    return `${base} ${highlightClass} ${colorClass} ${props.class || ''}`.trim()
  }

  return (
    <div class={classes()}>
      <Show when={props.icon}>
        <span class="stat-box-icon">{props.icon!()}</span>
      </Show>
      <span class="stat-box-label">{props.label}</span>
      <span class="stat-box-value">{props.value}</span>
    </div>
  )
}
