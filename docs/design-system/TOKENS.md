# Tokens

## Source of Truth
Mantine theme tokens from `src/theme/mantine-theme.ts` and generated CSS variables.

## Primary Token Groups
- Color palette (`theme.colors`, `theme.primaryColor`, `theme.primaryShade`)
- Typography (`theme.fontFamily`, `theme.headings`)
- Radius (`theme.defaultRadius`)
- Component defaults (`theme.components`)

## Common CSS Variable Examples
- `--mantine-color-body`
- `--mantine-color-text`
- `--mantine-color-default-border`
- `--mantine-primary-color-filled`
- `--mantine-radius-lg`
- `--mantine-spacing-md`

## Rules
- Prefer Mantine props and variants first.
- Use theme-level overrides before per-component custom CSS.
- Keep custom SCSS focused on structure/layout, not duplicating theme values.
