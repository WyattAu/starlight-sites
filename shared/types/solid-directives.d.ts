/**
 * Ambient type declarations for SolidJS custom directives used in shared/.
 *
 * Solid directives invoked via the `use:` JSX attribute are declared on the
 * `JSX.Directives` interface. Without this, `<div use:animate>` fails strict
 * type-checking with "Type X is not assignable to HTMLAttributes".
 * See https://www.solidjs.com/guides/typescript#use-directive
 */

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      /**
       * autoAnimate directive. Usage: `<div use:animate>` (bare) or
       * `<div use:animate={{ duration: 300 }}>`. The bare form passes `true`;
       * the valued form passes the options object. See shared/utils/animate.ts.
       */
      animate: true | { duration?: number; easing?: string }
    }
  }
}

// `export {}` makes this file a module so the `declare module 'solid-js'`
// above is treated as module AUGMENTATION (merged with solid-js's own types)
// rather than an ambient module REPLACEMENT (which would shadow JSX.Element,
// Accessor, and the rest of solid-js's exports).
export {}
