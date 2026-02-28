# AI Rules

## Mandatory
- Use semantic design tokens for color, spacing, radius, and typography.
- Keep new UI reusable and variant-driven.
- Keep changes scoped to the requested task.
- Use typed props for public components.
- Ensure keyboard accessibility for interactive elements.

## Forbidden
- Hardcoded color values in component/module styles.
- Inline style objects in React components unless explicitly justified.
- Non-semantic naming like `blueButton` or `mainCard2`.
- Silent API changes without doc updates.

## Styling Rules
- Prefer CSS modules for component and route styles.
- Use semantic variables like `var(--color-bg-surface)`.
- Keep motion subtle; avoid decorative or distracting animations.

## Component Rules
- Public primitives must document variants and defaults.
- Link-like actions should use proper link semantics.
- Button actions should use proper button semantics and `type` defaults.

## Review Rules
- Always check all four themes.
- Always run lint and build before considering task done.
- Always include files changed and validation summary in final handoff.
