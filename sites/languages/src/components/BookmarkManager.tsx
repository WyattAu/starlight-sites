/**
 * BookmarkManager -- Client-side bookmarking system for pages.
 *
 * Persists bookmarks to localStorage with categorization.
 * Provides import/export and cross-site bookmark sync.
 */

import { createSignal, createMemo, For, Show } from 'solid-js';

export interface Bookmark {
  id: string;
  url: string;
  title: string;
  site: string;
  subject: string;
  tags: string[];
  createdAt: number;
  notes: string;
}

const STORAGE_KEY = 'wn_bookmarks';

function loadBookmarks(): Bookmark[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveBookmarks(bookmarks: Bookmark[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  } catch {
    /* quota exceeded */
  }
}

function generateId(): string {
  return `bm_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export interface BookmarkManagerProps {
  currentUrl?: string;
  currentTitle?: string;
  currentSite?: string;
}

export default function BookmarkManager(props: BookmarkManagerProps) {
  const [getBookmarks, setBookmarks] = createSignal<Bookmark[]>(loadBookmarks());
  const [getFilter, setFilter] = createSignal<string>('all');
  const [getSearchQuery, setSearchQuery] = createSignal('');
  const [getShowAdd, setShowAdd] = createSignal(false);
  const [getNewTags, setNewTags] = createSignal('');
  const [getNewNotes, setNewNotes] = createSignal('');
  const [getNewSubject, setNewSubject] = createSignal('');

  const filteredBookmarks = createMemo(() => {
    let bookmarks = getBookmarks();

    const filter = getFilter();
    if (filter !== 'all') {
      bookmarks = bookmarks.filter((b) => b.site === filter);
    }

    const query = getSearchQuery().toLowerCase();
    if (query) {
      bookmarks = bookmarks.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.tags.some((t) => t.toLowerCase().includes(query)) ||
          b.notes.toLowerCase().includes(query),
      );
    }

    return bookmarks.sort((a, b) => b.createdAt - a.createdAt);
  });

  const siteCounts = createMemo(() => {
    const counts: Record<string, number> = { all: getBookmarks().length };
    for (const b of getBookmarks()) {
      counts[b.site] = (counts[b.site] || 0) + 1;
    }
    return counts;
  });

  const addBookmark = () => {
    if (!props.currentUrl || !props.currentTitle) return;

    const bookmark: Bookmark = {
      id: generateId(),
      url: props.currentUrl,
      title: props.currentTitle,
      site: props.currentSite || 'unknown',
      subject: getNewSubject(),
      tags: getNewTags().split(',').map((t) => t.trim()).filter(Boolean),
      createdAt: Date.now(),
      notes: getNewNotes(),
    };

    const next = [...getBookmarks(), bookmark];
    setBookmarks(next);
    saveBookmarks(next);
    setShowAdd(false);
    setNewTags('');
    setNewNotes('');
    setNewSubject('');
  };

  const removeBookmark = (id: string) => {
    const next = getBookmarks().filter((b) => b.id !== id);
    setBookmarks(next);
    saveBookmarks(next);
  };

  const exportBookmarks = () => {
    const blob = new Blob([JSON.stringify(getBookmarks(), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wyattsnotes-bookmarks.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importBookmarks = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(reader.result as string) as Bookmark[];
          if (Array.isArray(data)) {
            const next = [...getBookmarks(), ...data];
            setBookmarks(next);
            saveBookmarks(next);
          }
        } catch { /* invalid */ }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const sites = ['all', 'dse', 'ib', 'alevel', 'university', 'qualifications', 'programming', 'infrastructure', 'languages', 'tools'];

  return (
    <div class="bookmark-manager" role="region" aria-label="Bookmarks">
      <div class="bookmark-header">
        <h3 class="bookmark-title">Bookmarks</h3>
        <div class="bookmark-actions">
          <Show when={props.currentUrl}>
            <button type="button" class="bookmark-btn bookmark-btn--primary" onClick={() => setShowAdd(!getShowAdd())}>
              {getShowAdd() ? 'Cancel' : '+ Add Bookmark'}
            </button>
          </Show>
          <button type="button" class="bookmark-btn" onClick={exportBookmarks}>Export</button>
          <button type="button" class="bookmark-btn" onClick={importBookmarks}>Import</button>
        </div>
      </div>

      <Show when={getShowAdd()}>
        <div class="bookmark-add-form">
          <div class="bookmark-form-row">
            <label class="bookmark-label">Subject</label>
            <input
              type="text"
              class="bookmark-input"
              placeholder="e.g., Physics, Mathematics"
              value={getNewSubject()}
              onInput={(e) => setNewSubject(e.currentTarget.value)}
            />
          </div>
          <div class="bookmark-form-row">
            <label class="bookmark-label">Tags (comma-separated)</label>
            <input
              type="text"
              class="bookmark-input"
              placeholder="e.g., mechanics, exam-revision"
              value={getNewTags()}
              onInput={(e) => setNewTags(e.currentTarget.value)}
            />
          </div>
          <div class="bookmark-form-row">
            <label class="bookmark-label">Notes</label>
            <textarea
              class="bookmark-textarea"
              placeholder="Optional notes about this page..."
              value={getNewNotes()}
              onInput={(e) => setNewNotes(e.currentTarget.value)}
            />
          </div>
          <button type="button" class="bookmark-btn bookmark-btn--primary" onClick={addBookmark}>
            Save Bookmark
          </button>
        </div>
      </Show>

      <div class="bookmark-filters">
        <For each={sites}>
          {(site) => (
            <button
              type="button"
              class={`bookmark-filter-btn ${getFilter() === site ? 'bookmark-filter-btn--active' : ''}`}
              onClick={() => setFilter(site)}
            >
              {site === 'all' ? 'All' : site.toUpperCase()} ({siteCounts()[site] || 0})
            </button>
          )}
        </For>
      </div>

      <div class="bookmark-search">
        <input
          type="text"
          class="bookmark-input"
          placeholder="Search bookmarks..."
          value={getSearchQuery()}
          onInput={(e) => setSearchQuery(e.currentTarget.value)}
        />
      </div>

      <div class="bookmark-list">
        <Show when={filteredBookmarks().length === 0}>
          <div class="bookmark-empty">
            {getBookmarks().length === 0
              ? 'No bookmarks yet. Click "+ Add Bookmark" to save a page.'
              : 'No bookmarks match your filters.'}
          </div>
        </Show>
        <For each={filteredBookmarks()}>
          {(b) => (
            <div class="bookmark-item">
              <div class="bookmark-item-header">
                <a href={b.url} class="bookmark-item-title" target="_blank" rel="noopener noreferrer">
                  {b.title}
                </a>
                <button type="button" class="bookmark-remove-btn" onClick={() => removeBookmark(b.id)} aria-label="Remove bookmark">
                  x
                </button>
              </div>
              <div class="bookmark-item-meta">
                <span class="bookmark-item-site">{b.site.toUpperCase()}</span>
                {b.subject && <span class="bookmark-item-subject">{b.subject}</span>}
                <span class="bookmark-item-date">{new Date(b.createdAt).toLocaleDateString()}</span>
              </div>
              <Show when={b.tags.length > 0}>
                <div class="bookmark-item-tags">
                  <For each={b.tags}>
                    {(tag) => <span class="bookmark-tag">{tag}</span>}
                  </For>
                </div>
              </Show>
              <Show when={b.notes}>
                <div class="bookmark-item-notes">{b.notes}</div>
              </Show>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}
