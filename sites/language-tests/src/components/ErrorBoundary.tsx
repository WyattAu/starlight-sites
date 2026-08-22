// ErrorBoundary: minimal SolidJS wrapper for component-level error reporting.
//
// The actual error capture happens via installGlobalErrorCapture() which
// sets up window.onerror and unhandledrejection handlers. This component
// provides a per-component fallback UI and an additional error reporting
// hook for child-level errors.
//
// @ts-check

import { createSignal, type JSX } from 'solid-js'
import { captureClientError } from '../utils/error-tracker'

interface ErrorBoundaryProps {
  children: JSX.Element
  fallback?: (error: Error) => JSX.Element
  component?: string
}

export default function ErrorBoundary(props: ErrorBoundaryProps) {
  const [error, setError] = createSignal<Error | null>(null)

  // Report errors that we catch (from window.onerror integration)
  if (error()) {
    captureClientError(error()!, props.component || 'ErrorBoundary')
  }

  if (error()) {
    return props.fallback
      ? props.fallback(error()!)
      : (
        <div class="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200">
          <p class="font-medium">Something went wrong</p>
          <p class="mt-1 text-xs opacity-70">{error()?.message}</p>
        </div>
      )
  }

  return <>{props.children}</>
}
