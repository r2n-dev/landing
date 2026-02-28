# Themes

## Supported Color Schemes
- `light`
- `dark`
- `auto` (follows OS preference)

## Runtime Behavior
- `ColorSchemeScript` runs in layout head.
- `<html>` receives Mantine hydration-safe attributes via `mantineHtmlProps`.
- `MantineProvider` controls runtime scheme and theme tokens.
- Choice is persisted by Mantine local storage manager.

## Quality Bar
- Text remains readable on all surfaces.
- Interactive elements have visible hover/focus states.
- Contrast remains clear for borders and dividers.
