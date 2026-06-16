import { createSignal, Show } from 'solid-js'
import { account, type User } from '../utils/account'
import BaseDialog from './BaseDialog'

interface AuthDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onAuth?: (user: User) => void
}

export default function AuthDialog(props: AuthDialogProps) {
  const [getMode, setMode] = createSignal<'login' | 'register'>('login')
  const [getEmail, setEmail] = createSignal('')
  const [getPassword, setPassword] = createSignal('')
  const [getDisplayName, setDisplayName] = createSignal('')
  const [getError, setError] = createSignal('')
  const [getLoading, setLoading] = createSignal(false)

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setDisplayName('')
    setError('')
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      let user: User
      if (getMode() === 'register') {
        user = await account.register(getEmail(), getPassword(), getDisplayName() || undefined)
      } else {
        user = await account.login(getEmail(), getPassword())
      }
      props.onAuth?.(user)
      props.onOpenChange(false)
      resetForm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseDialog
      open={props.open}
      onOpenChange={open => {
        if (!open) resetForm()
        props.onOpenChange(open)
      }}
      title={getMode() === 'login' ? 'Sign In' : 'Create Account'}
      size="md"
    >
      <p class="text-sm text-emphasis-700 mb-4">
        {getMode() === 'login'
          ? 'Sign in to sync your progress across devices.'
          : 'Create an account to save your flashcard progress, diagnostic results, and practice history.'}
      </p>

      <form onSubmit={handleSubmit} class="flex flex-col gap-3">
        <Show when={getMode() === 'register'}>
          <div>
            <label for="display-name" class="block text-sm font-semibold mb-1">Display Name</label>
            <input
              id="display-name"
              type="text"
              value={getDisplayName()}
              onInput={e => setDisplayName(e.currentTarget.value)}
              class="w-full px-3 py-2 rounded-lg border border-emphasis-300 bg-surface text-base focus:border-accent focus:outline-none"
              placeholder="Optional"
            />
          </div>
        </Show>

        <div>
          <label for="email" class="block text-sm font-semibold mb-1">Email</label>
          <input
            id="email"
            type="email"
            required
            value={getEmail()}
            onInput={e => setEmail(e.currentTarget.value)}
            class="w-full px-3 py-2 rounded-lg border border-emphasis-300 bg-surface text-base focus:border-accent focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-semibold mb-1">Password</label>
          <input
            id="password"
            type="password"
            required
            minLength={8}
            value={getPassword()}
            onInput={e => setPassword(e.currentTarget.value)}
            class="w-full px-3 py-2 rounded-lg border border-emphasis-300 bg-surface text-base focus:border-accent focus:outline-none"
            placeholder="At least 8 characters"
          />
        </div>

        <Show when={getError()}>
          <div class="text-error text-sm rounded-lg bg-error/10 p-2">{getError()}</div>
        </Show>

        <button
          type="submit"
          disabled={getLoading()}
          class="w-full py-2.5 rounded-lg bg-primary text-white font-semibold text-base cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-opacity hover:opacity-90"
        >
          {getLoading() ? 'Loading...' : getMode() === 'login' ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <div class="mt-4 text-center text-sm text-emphasis-700">
        <Show
          when={getMode() === 'login'}
          fallback={
            <button
              type="button"
              class="text-accent hover:underline cursor-pointer bg-transparent border-none text-sm"
              onClick={() => { setMode('login'); setError('') }}
            >
              Already have an account? Sign in
            </button>
          }
        >
          <button
            type="button"
            class="text-accent hover:underline cursor-pointer bg-transparent border-none text-sm"
            onClick={() => { setMode('register'); setError('') }}
          >
            Don't have an account? Create one
          </button>
        </Show>
      </div>
    </BaseDialog>
  )
}
