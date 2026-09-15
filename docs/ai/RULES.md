# AI Rules

> **Migration in progress: Mantine → Tailwind CSS + shadcn/ui.** The Mantine-first rules below apply only to code not yet migrated. Work that belongs to the current migration phase (Tailwind, shadcn/ui, `next-themes`, `src/components/ui/*`) is not a rule violation. See the phase list in `AGENTS.md`.

## Mandatory
- Use Mantine components before building custom UI primitives.
- Keep changes scoped to the requested task.
- Keep public component props typed.
- Keep interactive elements keyboard-accessible.
- Keep theme behavior centralized in `src/theme/mantine-theme.ts`.

## Forbidden
- Reintroducing legacy local design-system tokens/runtime.
- Hardcoding one-off styles that bypass Mantine theme semantics without need.
- Silent API changes without doc updates.
- Page-specific abstractions presented as reusable primitives.

## Styling Rules
- Prefer Mantine props, variants, and styles API.
- Use SCSS modules only for layout/structure where Mantine props are insufficient.
- Keep motion subtle and purposeful.

## Component Rules
- Components should be as pure/presentational as possible.
- Repeated structures should be extracted into typed reusable pieces.
- Link-like actions should use link semantics; actions should use button semantics.

## Review Rules
- Always check both light and dark schemes.
- Always run lint and build before considering task done.
- Always include files changed and validation summary in final handoff.
