# Contributing

## Prerequisites
- Node version from `.nvmrc`.
- Install dependencies with `npm install`.

## Development
- Start dev server: `npm run dev`.
- Build production bundle: `npm run build`.
- Lint code: `npm run lint`.

## Design System Rules
- Place reusable primitives under `src/design-system/components`.
- Place theme/token files under `src/design-system/styles`.
- Keep route-specific styles inside route/module SCSS files.
- Prefer semantic tokens over raw values.

## Pull Request Checklist
- [ ] Scope is limited to the task.
- [ ] New UI is tokenized and theme-aware.
- [ ] Responsive layout checked at mobile and desktop widths.
- [ ] Keyboard focus visible for interactive elements.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Relevant docs updated (`docs/design-system/*`, `docs/ai/*`) when APIs or rules changed.

## Validation Commands
- `npm run lint`
- `npm run build`
- `npm run check:ds`
