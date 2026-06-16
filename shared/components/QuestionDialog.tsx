import { Dialog } from '@kobalte/core'
import { type JSX } from 'solid-js'

interface QuestionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: JSX.Element
}

export default function QuestionDialog(props: QuestionDialogProps) {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay class="fixed inset-0 z-50 bg-black/50" />
        <Dialog.Content class="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-emphasis-300 bg-surface p-6 shadow-lg max-h-[80vh] overflow-y-auto">
          <Dialog.Title class="mt-0 mb-4 text-lg font-semibold">
            {props.title}
          </Dialog.Title>
          {props.children}
          <Dialog.CloseButton class="absolute right-3 top-3 rounded p-1 hover:bg-emphasis-100 cursor-pointer">
            <span class="text-emphasis-500">x</span>
          </Dialog.CloseButton>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
