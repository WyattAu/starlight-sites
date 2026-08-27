/**
 * EmbedContainer.tsx — Consistent embed layout for Desmos/PhET/etc.
 *
 * Provides a standardized container with title, source attribution,
 * and responsive aspect ratio preservation.
 */

import { Show } from 'solid-js'

interface EmbedContainerProps {
  title: string
  source?: string
  sourceUrl?: string
  width?: number
  height?: number
  children: () => JSX.Element
  class?: string
}

export default function EmbedContainer(props: EmbedContainerProps) {
  const aspectRatio = () => {
    if (props.width && props.height) {
      return `${(props.height / props.width) * 100}%`
    }
    return '56.25%' // 16:9 default
  }

  return (
    <div class={`embed-container ${props.class || ''}`}>
      <div class="embed-container-header">
        <span class="embed-container-title">{props.title}</span>
        <Show when={props.source}>
          <a
            href={props.sourceUrl || '#'}
            class="embed-container-source"
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.source}
          </a>
        </Show>
      </div>
      <div
        class="embed-container-body"
        style={{ 'padding-bottom': aspectRatio() }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          {props.children()}
        </div>
      </div>
    </div>
  )
}
