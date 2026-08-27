/**
 * ActionButton.tsx — Consistent button component
 *
 * Variants: primary, secondary, danger, ghost
 * Sizes: sm, md, lg
 * States: default, hover, active, disabled, loading
 */

import { Show } from 'solid-js'

interface ActionButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: () => JSX.Element
  children: string | JSX.Element
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  class?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function ActionButton(props: ActionButtonProps) {
  const variant = () => props.variant || 'primary'
  const size = () => props.size || 'md'
  const type = () => props.type || 'button'

  const classes = () => {
    const base = 'action-btn'
    const variantClass = `action-btn-${variant()}`
    const sizeClass = `action-btn-${size()}`
    const loadingClass = props.loading ? 'action-btn-loading' : ''
    return `${base} ${variantClass} ${sizeClass} ${loadingClass} ${props.class || ''}`.trim()
  }

  return (
    <button
      type={type()}
      class={classes()}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
    >
      <Show when={props.icon && !props.loading}>
        <span class="action-btn-icon">{props.icon!()}</span>
      </Show>
      {props.children}
    </button>
  )
}
