/**
 * ToastProvider -- Wraps app with solid-sonner toaster.
 * Import once at layout level.
 */
import { Toaster } from 'solid-sonner'

export default function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'var(--sl-color-bg)',
          color: 'var(--sl-color-text)',
          border: '1px solid var(--sl-color-gray-5)',
        },
      }}
    />
  )
}
