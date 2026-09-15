# Contributing

## Prerequisites
- Node version from `.nvmrc`.
- Install dependencies with `npm install`.

## Development
- Start dev server: `npm run dev`.
- Build production bundle: `npm run build`.
- Lint code: `npm run lint`.

## UI System Rules
- Use the primitives in `src/components/ui/*` first; add variants instead of restyling with `className`.
- Keep theme tokens in `src/app/globals.css`.
- Keep landing page composition in `src/components/landing/*`.
- Style with Tailwind utilities; no CSS/SCSS modules.

## Pull Request Checklist
- [ ] Scope is limited to the task.
- [ ] UI uses theme tokens and primitive variants.
- [ ] Responsive layout checked at mobile and desktop widths.
- [ ] Keyboard focus visible for interactive elements.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Relevant docs updated (`docs/design-system/*`, `docs/ai/*`) when APIs or rules changed.

## Validation Commands
- `npm run lint`
- `npm run build`
- `npm run check:ds`
