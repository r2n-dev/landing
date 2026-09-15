# Themes

## Supported Color Schemes
- `light`
- `dark`
- `system` (follows OS preference; default)

## Runtime Behavior
- `ThemeProvider` (next-themes) in `src/app/layout.tsx` renders a blocking script before page content that sets `class="light"` or `class="dark"` and `color-scheme` on `<html>`, so there is no flash of the wrong scheme.
- The choice is persisted in localStorage under `mantine-color-scheme-value` (the key used by the former Mantine site).
- `ColorSchemeToggle` switches between light and dark.
- Tailwind's `dark:` variant is defined as `@custom-variant dark (&:is(.dark *))`.

## Changing Theme Colors
- Edit the variables in `:root` (light) and `.dark` in `src/app/globals.css`.
- Expose new semantic variables to Tailwind in `@theme inline` (`--color-<name>: var(--<name>)`).
- Update `docs/design-system/TOKENS.md`.

## Quality Bar
- Text remains readable on all surfaces.
- Interactive elements have visible hover/focus states.
- Contrast remains clear for borders and dividers.
