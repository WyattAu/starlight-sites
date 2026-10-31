`solid-js/web`'s `template()` at module top level; a client-only API that
1. `client:only="solid"` wrappers via `.astro` components; failed because
2. `lazy()` + `isServer` conditional imports; failed because Solid's
3. **Shared remark plugin** (chosen); auto-injects `client:only="solid"`
- Zero content file changes; transparent to authors.