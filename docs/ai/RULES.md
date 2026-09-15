# AI Rules

## Mandatory
- Use primitives from `src/components/ui/*` before building custom UI.
- Keep changes scoped to the requested task.
- Keep public component props typed.
- Keep interactive elements keyboard-accessible with a visible focus ring.
- Keep design tokens centralized in `src/app/globals.css`.

## Forbidden
- Reintroducing Mantine, SCSS/CSS modules, or the legacy local design-system runtime.
- Restyling primitives with `className` beyond layout (enforced by `shadcn/no-restyle`); add a variant or size instead.
- Raw color values where a semantic token exists.
- Silent API changes without doc updates.
- Page-specific abstractions presented as reusable primitives.

## Styling Rules
- Prefer semantic tokens (`bg-card`, `text-muted-foreground`, `border-border`) over scale colors.
- Use arbitrary values only when no token fits; prefer adding a token.
- Keep motion subtle and purposeful.

## Component Rules
- Components should be as pure/presentational as possible.
- Repeated structures should be extracted into typed reusable pieces.
- Link-like actions should use link semantics; actions should use button semantics.

## Review Rules
- Always check both light and dark schemes.
- Always run `npm run lint` and `npm run build` before considering a task done.
- Always include files changed and validation summary in final handoff.
