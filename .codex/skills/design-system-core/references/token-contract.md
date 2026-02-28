# Token Contract

## Layers
- Core tokens define scales (spacing, radius, typography, motion, shadows).
- Semantic tokens define UI meaning (surface, text, border, accent).

## Required Semantic Tokens
- `--color-bg-canvas`
- `--color-bg-surface`
- `--color-bg-elevated`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-inverse`
- `--color-border-subtle`
- `--color-border-default`
- `--color-border-strong`
- `--color-accent`
- `--color-accent-hover`
- `--color-accent-active`
- `--color-accent-contrast`
- `--color-focus-ring`
- `--color-link`
- `--color-link-hover`

## Rules
- Components must consume semantic tokens only.
- Core token changes require updating docs and validating all themes.
