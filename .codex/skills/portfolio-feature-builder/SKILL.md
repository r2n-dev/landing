---
name: portfolio-feature-builder
description: Build or refactor portfolio sections and routes using the local design system primitives. Use when adding new sections, cards, timelines, call-to-actions, or route-level layouts that must be responsive and theme-safe.
---

# Portfolio Feature Builder

Implement route and section features using existing design-system primitives.

## Follow This Workflow
1. Read `references/section-patterns.md`.
2. Read `references/content-schema.md`.
3. Compose UI with `Container`, `Stack`, `Card`, `Text`, and `Button` before creating new components.

## Implementation Rules
- Keep route files focused on composition, not style logic.
- Extract repeated patterns to reusable components.
- Use semantic tokens in module styles.
- Preserve responsive behavior.

## Documentation Rules
- Update route-specific docs if content structure changes.
- Update design-system docs if new reusable APIs are introduced.
