# PATTERN_ADOPTION

Multi-site Starlight content fleet: docs content per site plus small
interactive study components (flashcards, practice stores).

| Pattern | Status | Evidence |
|---|---|---|
| T13 | adopted | sites/dse/src/components/flashcard/sm2.ts:17 (pure SM-2 state machine over CardState); sites/dse/src/components/flashcard/storage.ts:22 (localStorage load/save shell) |
| P96 | partial | sites/dse/src/components/flashcard/sm2.ts:36 (assertInvariant and validateState re-verify every state restored from storage; storage is the only boundary today) |

The flashcard core ships as per-site copies (dse, ib); the dse copy is
the cited reference. Most of the repo is markdown content with no
runtime pattern surface.
