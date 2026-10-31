/**
 * Type augmentation for Solid `use:` directives used across shared
 * components. Without this, `astro check`/tsc reject every `use:animate`
 * attribute because the directive is not present in JSX.Directives.
 */
declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      animate: boolean | Partial<Parameters<typeof import('@formkit/auto-animate').default>[0]>
    }
  }
}

export {}
