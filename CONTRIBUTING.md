# Contributing

## Prerequisites
- Node version from `.nvmrc`.
- Install dependencies with `npm install`.

## Development
- Start dev server: `npm run dev`.
- Build production bundle: `npm run build`.
- Lint code: `npm run lint`.

## UI System Rules
- Use Mantine components first.
- Keep theme overrides in `src/theme/mantine-theme.ts`.
- Keep landing page composition in `src/components/landing/*`.
- Use SCSS modules only for structural/custom styling not covered by Mantine props.

## Pull Request Checklist
- [ ] Scope is limited to the task.
- [ ] UI aligns with Mantine theme and component patterns.
- [ ] Responsive layout checked at mobile and desktop widths.
- [ ] Keyboard focus visible for interactive elements.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Relevant docs updated (`docs/design-system/*`, `docs/ai/*`) when APIs or rules changed.

## Validation Commands
- `npm run lint`
- `npm run build`
- `npm run check:ds`
