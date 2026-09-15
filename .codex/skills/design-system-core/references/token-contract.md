# Token Contract

## Layers
- `@theme` in `src/app/globals.css` defines static scales: palettes, breakpoints, font sizes, radius, shadows.
- `:root` / `.dark` define semantic color variables for light and dark.
- `@theme inline` exposes semantic variables as Tailwind colors (`bg-card`, `text-muted-foreground`).

## Semantic Tokens
- `--background`, `--foreground`
- `--card`, `--card-foreground`, `--card-border`
- `--popover`, `--popover-foreground`
- `--primary`, `--primary-foreground`, `--primary-hover`, `--primary-light`, `--primary-light-hover`, `--primary-light-foreground`, `--primary-outline`
- `--secondary`, `--secondary-foreground`
- `--surface`, `--surface-foreground`, `--surface-hover`
- `--muted`, `--muted-foreground`
- `--accent`, `--accent-foreground`
- `--destructive`, `--border`, `--input`, `--ring`, `--anchor`, `--cyan-light`

## Rules
- Components consume semantic tokens; palettes (`brand-*`, `gray-*`, `dark-*`) are for primitives and accents without a semantic role.
- Every token needs a light value in `:root` and, if it differs, a dark value in `.dark`.
- Token changes require updating `docs/design-system/TOKENS.md`.
