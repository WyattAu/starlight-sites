import { Dialog } from '@kobalte/core'
import type { JSX } from 'solid-js'

export interface BaseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: JSX.Element
  size?: 'sm' | 'md' | 'lg'
}

const SIZE_CLASSES = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-2xl',
} as const

export default function BaseDialog(props: BaseDialogProps) {
  const size = () => SIZE_CLASSES[props.size ?? 'lg']

  return (
    <Dialog.Root open={props.open} onOpenChange={props.onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content
          class={`fixed top-1/2 left-1/2 z-50 w-full ${size()} max-h-[80vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border-2 border-emphasis-300 bg-surface p-6 shadow-lg`}
        >
          <Dialog.Title class="mt-0 mb-4 font-semibold text-lg">{props.title}</Dialog.Title>
          {props.children}
          <Dialog.CloseButton
            aria-label="Close dialog"
            class="absolute top-3 right-3 cursor-pointer rounded p-1 hover:bg-emphasis-100"
          >
            <span class="text-emphasis-500" aria-hidden="true">
              x
            </span>
          </Dialog.CloseButton>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
