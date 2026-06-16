import type { JSX } from 'solid-js'
import BaseDialog from './BaseDialog'

interface ResultsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: JSX.Element
}

export default function ResultsDialog(props: ResultsDialogProps) {
  return <BaseDialog {...props} size="lg" />
}
