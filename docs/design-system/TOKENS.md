# Tokens

## Core Tokens
- Spacing: `--space-1` to `--space-12`
- Radius: `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-pill`
- Typography: display/title/body/label scales
- Motion: `--motion-fast`, `--motion-base`, `--motion-slow`
- Shadow: `--shadow-1` to `--shadow-4`

## Semantic Tokens
- Background: `--color-bg-canvas`, `--color-bg-surface`, `--color-bg-elevated`
- Text: `--color-text-primary`, `--color-text-secondary`, `--color-text-inverse`
- Border: `--color-border-subtle`, `--color-border-default`, `--color-border-strong`
- Accent: `--color-accent`, `--color-accent-hover`, `--color-accent-active`, `--color-accent-contrast`
- Utility: `--color-focus-ring`, `--color-link`, `--color-link-hover`

## Rules
- Components consume semantic tokens.
- Theme blocks map semantic tokens.
- Core token changes should avoid breaking semantic contracts.
