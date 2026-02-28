# R2N Portfolio Landing

Personal portfolio built with Next.js App Router, TypeScript, and a local design system with runtime themes.

## Tech Stack
- Next.js 15
- React 19
- TypeScript
- SCSS modules

## Local Setup
1. Use Node version from `.nvmrc`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev` - start development server
- `npm run lint` - run lint checks
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run check:ds` - lint + build design-system validation gate

## Design System
- Tokens and themes: `src/design-system/styles`
- Theme runtime: `src/design-system/theme`
- Reusable primitives: `src/design-system/components`
- Living docs route: `/design-system`

Supported themes:
- `light-solar`
- `light-azure`
- `dark-slate`
- `dark-ember`

Theme selection is persisted with `localStorage` key `r2n_theme`.

## AI Contributor Pack
- Root policies: `AGENTS.md`, `AI_CONTEXT.md`, `CONTRIBUTING.md`
- Model-agnostic docs: `docs/ai/*`
- Codex skills: `.codex/skills/*`
- Design system docs: `docs/design-system/*`

Start from:
1. `AI_CONTEXT.md`
2. `docs/ai/RULES.md`
3. `docs/ai/TASK_SPEC_TEMPLATE.md`
