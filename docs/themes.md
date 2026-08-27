---
title: "Themes"
description: "Complete guide to themes in Wyatt's Notes — creating, customizing, and using all 10 themes."
---

# Themes

Wyatt's Notes includes 10 complete themes, each with 34+ CSS variables for full customization.

## Available Themes

| Theme | Style | Accent | Best For |
|-------|-------|--------|----------|
| **Dark** | Cinematic Dark | #ff8c4a | Night reading, reduced eye strain |
| **Light** | Warm Paper Light | #ff6b35 | Day reading, printing |
| **Sepia** | EPUB Sepia | #c97b3a | Extended reading, e-reader feel |
| **Contrast** | High Contrast | #ff8c4a | Accessibility, low vision |
| **Nord** | Arctic Blue | #88c0d0 | Arctic aesthetic, blue tones |
| **Dracula** | Purple/Pink | #bd93f9 | Purple aesthetic, vibrant |
| **Solarized** | Warm Sand | #268bd2 | Warm light theme, blue accent |
| **Monokai** | Warm Dark | #a6e22e | Code editor aesthetic, green accent |
| **Ayu Mirage** | Muted Blue-Grey | #ffcc66 | Muted dark, gold accent |
| **Papercolor** | Bright White | #005f87 | Clean light, blue accent |

## Theme Structure

Each theme defines 34+ CSS variables:

### WN Variables (11)

```css
--wn-bg              /* Main background */
--wn-bg-elevated     /* Elevated surfaces */
--wn-bg-card         /* Card backgrounds */
--wn-bg-hover        /* Hover states */
--wn-text            /* Primary text */
--wn-text-muted      /* Muted text */
--wn-text-dim        /* Dimmed text */
--wn-border          /* Borders */
--wn-border-light    /* Light borders */
--wn-overlay         /* Overlay backgrounds */
--wn-glow            /* Accent glow */
```

### SL Variables (19)

```css
--sl-color-accent           /* Primary accent */
--sl-color-accent-low       /* Low alpha accent */
--sl-color-accent-high      /* High alpha accent */
--sl-color-bg               /* Background */
--sl-color-bg-nav           /* Navigation background */
--sl-color-bg-sidebar       /* Sidebar background */
--sl-color-bg-inline-code   /* Code background */
--sl-color-bg-hairline      /* Hairline background */
--sl-color-hairline-light   /* Light hairline */
--sl-color-hairline-shade   /* Dark hairline */
--sl-color-text             /* Text color */
--sl-color-text-accent      /* Accent text */
--sl-color-text-invert      /* Inverted text */
--sl-color-gray-1 through --sl-color-gray-8  /* Gray scale */
--sl-color-black            /* Black */
--sl-color-white            /* White */
```

### Elevation (4 tiers)

```css
--wn-elevation-1 through --wn-elevation-4
```

Each theme adjusts elevation shadows for its background darkness.

## Creating a Custom Theme

### Step 1: Define Variables

Create a CSS file with your theme variables:

```css
[data-theme="my-theme"] {
  /* WN Variables */
  --wn-bg: #1a1a2e;
  --wn-bg-elevated: #16213e;
  --wn-bg-card: #1a1a2e;
  --wn-bg-hover: #0f3460;
  --wn-text: #e6e6e6;
  --wn-text-muted: #a0a0a0;
  --wn-text-dim: #666666;
  --wn-border: #2a2a4a;
  --wn-border-light: #3a3a5a;
  --wn-overlay: rgba(0, 0, 0, 0.7);
  --wn-glow: rgba(100, 100, 255, 0.1);

  /* SL Variables */
  --sl-color-accent: #6464ff;
  --sl-color-bg: #1a1a2e;
  --sl-color-text: #e6e6e6;
  /* ... more variables */

  /* Elevation */
  --wn-elevation-1: 0 1px 3px rgba(0, 0, 0, 0.5);
  --wn-elevation-2: 0 4px 8px rgba(0, 0, 0, 0.55);
  --wn-elevation-3: 0 12px 24px rgba(0, 0, 0, 0.65);
  --wn-elevation-4: 0 24px 48px rgba(0, 0, 0, 0.75);
}
```

### Step 2: Add Theme Palette

Add the theme to `shared/styles/themes.css`:

```css
[data-theme="my-theme"] {
  --wn-bg: #1a1a2e;
  /* ... all variables */
}
```

### Step 3: Add Component Overrides

Add theme-specific overrides for:
- Expressive Code (code blocks)
- Reader panel
- KaTeX math
- Aside/admonition colors

### Step 4: Register Theme

Add the theme to the THEMES array in `shared/scripts/reader.js`:

```javascript
const THEMES = [
  // ... existing themes
  { id: 'my-theme', name: 'My Custom Theme' },
]
```

## WCAG AA Compliance

All themes must pass WCAG AA contrast requirements:

- **Normal text:** 4.5:1 minimum
- **Large text:** 3:1 minimum
- **UI components:** 3:1 minimum

Use the ThemeCreator component to validate contrast ratios in real-time.

## Theme Variables Reference

### Complete Variable List

See `shared/styles/design-system.css` for all available tokens.

### Elevation Shadows

Each theme defines its own elevation shadows adjusted for background darkness:

- **Dark themes:** Higher alpha values (0.5-0.75) for visible shadows
- **Light themes:** Lower alpha values (0.06-0.14) for subtle shadows
- **High contrast:** White shadows on black background

### Color Palette

Each theme defines a complete gray scale (8 steps) for consistent UI:

```
gray-1: Brightest (text)
gray-2: Light
gray-3: Medium
gray-4: Dim
gray-5: Dark
gray-6: Darker
gray-7: Darkest (backgrounds)
gray-8: Background
```

## Testing Themes

Use the ThemePreview component to compare themes side-by-side:

```tsx
import ThemePreview from '../components/ThemePreview'

<ThemePreview open={showPreview} onOpenChange={setShowPreview} />
```

Use the ThemeCreator to build custom themes with WCAG validation:

```tsx
import ThemeCreator from '../components/ThemeCreator'

<ThemeCreator open={showCreator} onOpenChange={setShowCreator} />
```
