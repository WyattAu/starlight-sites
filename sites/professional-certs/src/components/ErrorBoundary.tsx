// ErrorBoundary: SolidJS wrapper for component-level error reporting.
//
// Uses SolidJS's built-in ErrorBoundary for proper error catching.
// Integrates with error-tracker for error reporting.
//
// @ts-check

import { ErrorBoundary as SolidErrorBoundary } from 'solid-js'
import { captureClientError } from '../utils/error-tracker'
import type { JSX } from 'solid-js'

interface ErrorBoundaryProps {
  children: JSX.Element
  fallback?: (error: Error, reset: () => void) => JSX.Element
  component?: string
}

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  const defaultFallback = (error: Error, reset: () => void) => (
    <div class="error-boundary-fallback" style={{
      'padding': '1rem',
      'border': '1px solid var(--wn-error, #e74c3c)',
      'border-radius': 'var(--wn-radius-sm, 10px)',
      'background': 'rgba(231, 76, 60, 0.05)',
      'color': 'var(--wn-error, #e74c3c)',
    }}>
      <p style={{ 'font-weight': '600', 'margin-bottom': '0.5rem' }}>Something went wrong</p>
      <p style={{ 'font-size': '0.875rem', 'opacity': '0.7', 'margin-bottom': '0.75rem' }}>{error.message}</p>
      <button
        onClick={reset}
        style={{
          'padding': '0.375rem 0.75rem',
          'border': '1px solid var(--wn-error, #e74c3c)',
          'border-radius': 'var(--wn-radius-xs, 6px)',
          'background': 'transparent',
          'color': 'var(--wn-error, #e74c3c)',
          'cursor': 'pointer',
          'font-size': '0.875rem',
        }}
      >
        Try again
      </button>
    </div>
  )

  return (
    <SolidErrorBoundary
      fallback={props.fallback || defaultFallback}
      onError={(error) => {
        captureClientError(error, props.component || 'ErrorBoundary')
      }}
    >
      {props.children}
    </SolidErrorBoundary>
  )
}
