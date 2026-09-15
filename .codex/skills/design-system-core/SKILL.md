---
name: design-system-core
description: Maintain and extend the portfolio design system. Use when working on Tailwind theme tokens in src/app/globals.css, light/dark color schemes (next-themes), shadcn/ui primitives in src/components/ui, or any UI refactor that must follow the token and variant conventions.
---

# Design System Core

Implement design-system changes with strict token and API discipline.

## Follow This Workflow
1. Read `references/token-contract.md`.
2. Read `references/component-contract.md`.
3. If theme work is required, read `references/theme-authoring.md`.
4. If validating work, read `references/qa-playbook.md`.

## Enforce Token Rules
- Use semantic Tailwind utilities backed by `src/app/globals.css` variables.
- Avoid raw color values in components.
- Keep token names stable unless a rename is intentional and documented.

## Enforce Component Rules
- Keep public component props typed and minimal.
- Add variants/sizes to primitives instead of restyling them with `className` (`shadcn/no-restyle`).
- Preserve semantic HTML for links and buttons.

## Update Documentation
- Update `docs/design-system/COMPONENT_API.md` for public API changes.
- Update `docs/design-system/TOKENS.md` for token changes.
- Update `docs/design-system/THEMES.md` for color scheme changes.
