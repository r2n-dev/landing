# Theme Authoring

## Steps
1. Add or change semantic variables in `:root` (light) and `.dark` in `src/app/globals.css`.
2. Expose new variables in `@theme inline` as `--color-<name>: var(--<name>)`.
3. Use the new utilities in primitives or sections.
4. Validate contrast for text, borders, and interactive states in both schemes.
5. Update `docs/design-system/THEMES.md` and `TOKENS.md`.

## Runtime
- `ThemeProvider` (next-themes) in `src/app/layout.tsx` sets `class="light|dark"` on `<html>`.
- Supported schemes: `light`, `dark`, `system`.

## Persistence
- Scheme selection persists in `localStorage` key `mantine-color-scheme-value`.
