/**
 * SkipLink.tsx — Accessibility skip navigation
 *
 * Hidden by default, visible on focus (Tab key).
 * Allows keyboard users to skip to main content.
 */

export default function SkipLink() {
  return (
    <a href="#_top" class="skip-link">
      Skip to content
    </a>
  )
}
