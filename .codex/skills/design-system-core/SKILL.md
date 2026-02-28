---
name: design-system-core
description: Maintain and extend the portfolio design system. Use when working on theme tokens, semantic color mapping, ThemeProvider behavior, reusable primitives in src/design-system/components, or any UI refactor that must follow tokenized multi-theme conventions.
---

# Design System Core

Implement design-system changes with strict token and API discipline.

## Follow This Workflow
1. Read `references/token-contract.md`.
2. Read `references/component-contract.md`.
3. If theme work is required, read `references/theme-authoring.md`.
4. If validating work, read `references/qa-playbook.md`.

## Enforce Token Rules
- Use semantic CSS variables in component styles.
- Avoid direct raw color values in component/module styles.
- Keep token names stable unless migration is intentional and documented.

## Enforce Component Rules
- Keep public component props typed and minimal.
- Use variants/sizes/tones rather than one-off classes.
- Preserve semantic HTML for links and buttons.

## Update Documentation
- Update `docs/design-system/COMPONENT_API.md` for public API changes.
- Update `docs/design-system/TOKENS.md` for token contract changes.
- Update `docs/design-system/THEMES.md` for theme changes.
