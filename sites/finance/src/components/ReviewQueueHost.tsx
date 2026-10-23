/**
 * ReviewQueueHost, site-wide mount point for the spaced-repetition
 * review queue.
 *
 * Decks register their card content via `registerDeckContent` (written
 * by FlashcardDeck on mount), so this host can offer due reviews from
 * any page, not just pages embedding a deck. Opens on the
 * `wn:open-review` custom event (dispatched by ProgressBadge and the
 * reader panel).
 */

import { createSignal, onCleanup, onMount, Show } from 'solid-js'
import { getRegisteredDecks } from './flashcard/storage'
import ReviewQueue, { type DeckEntry } from './ReviewQueue'

export default function ReviewQueueHost() {
  const [open, setOpen] = createSignal(false)
  const [decks, setDecks] = createSignal<DeckEntry[]>([])

  const openWithDecks = () => {
    try {
      const entries = getRegisteredDecks().map(reg => ({
        deckId: reg.deckId,
        cards: reg.cards.map(c => ({
          id: c.id,
          front: c.front,
          back: c.back,
          tags: c.tags ?? [],
        })),
      }))
      if (entries.length === 0) return
      setDecks(entries)
      setOpen(true)
    } catch {
      /* non-fatal */
    }
  }

  onMount(() => {
    document.addEventListener('wn:open-review', openWithDecks)
    onCleanup(() => document.removeEventListener('wn:open-review', openWithDecks))
  })

  const close = (next: boolean) => {
    setOpen(next)
    if (!next) {
      try {
        document.dispatchEvent(new CustomEvent('wn:progress-changed'))
      } catch {
        /* non-fatal */
      }
    }
  }

  return (
    <Show when={open()}>
      <ReviewQueue open={open()} onOpenChange={close} decks={decks()} />
    </Show>
  )
}
