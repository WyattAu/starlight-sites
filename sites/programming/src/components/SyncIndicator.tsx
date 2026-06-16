import { createSignal, onCleanup, Show } from 'solid-js'
import { account, type User } from '../utils/account'
import AuthDialog from './AuthDialog'

export default function SyncIndicator() {
  const [getUser, setUser] = createSignal<User | null>(account.currentUser)
  const [getShowAuth, setShowAuth] = createSignal(false)
  const [getSyncing, setSyncing] = createSignal(false)

  // Check auth status on mount
  if (typeof window !== 'undefined' && account.isLoggedIn) {
    account.getMe().then(u => setUser(u)).catch(() => {
      account.logout()
    })
  }

  const handleLogout = async () => {
    await account.logout()
    setUser(null)
  }

  return (
    <>
      <div class="flex items-center gap-2">
        <Show
          when={getUser()}
          fallback={
            <button
              type="button"
              class="py-1.5 px-3 rounded-lg text-sm font-semibold cursor-pointer bg-surface border border-emphasis-300 text-emphasis-700 hover:border-accent transition-colors"
              onClick={() => setShowAuth(true)}
            >
              Sign In
            </button>
          }
        >
          <div class="flex items-center gap-2">
            <Show when={getSyncing()}>
              <span class="text-xs text-emphasis-500">Syncing...</span>
            </Show>
            <div class="relative group">
              <button
                type="button"
                class="py-1.5 px-3 rounded-lg text-sm font-semibold cursor-pointer bg-surface border border-emphasis-300 text-emphasis-700 hover:border-accent transition-colors"
              >
                {getUser()!.displayName || getUser()!.email}
              </button>
              <div class="absolute right-0 top-full mt-1 hidden group-hover:block z-50">
                <div class="bg-surface border border-emphasis-300 rounded-lg shadow-lg p-1 min-w-[120px]">
                  <button
                    type="button"
                    class="w-full text-left px-3 py-1.5 rounded text-sm hover:bg-emphasis-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Show>
      </div>

      <AuthDialog
        open={getShowAuth()}
        onOpenChange={setShowAuth}
        onAuth={user => setUser(user)}
      />
    </>
  )
}
