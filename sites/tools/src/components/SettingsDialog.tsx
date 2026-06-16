import type { JSX } from 'solid-js'
import BaseDialog from './BaseDialog'

interface SettingsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  children: JSX.Element
}

export default function SettingsDialog(props: SettingsDialogProps) {
  return <BaseDialog {...props} size="md" />
}
