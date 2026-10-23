import type { JSX } from 'solid-js'
import BaseDialog from './BaseDialog'

interface QuestionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: JSX.Element
}

export default function QuestionDialog(props: QuestionDialogProps) {
  return <BaseDialog {...props} size="lg" />
}
