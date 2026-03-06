# R2N Portfolio Landing

Single-page portfolio built with Next.js App Router, TypeScript, and Mantine.

## Tech Stack
- Next.js 15
- React 19
- TypeScript
- Mantine (`@mantine/core`, `@mantine/hooks`)
- SCSS modules (for structural styling)

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
- `npm run check:ds` - lint + build validation gate

## Mantine Architecture
- Runtime shell: `src/app/layout.tsx`
- Theme contract: `src/theme/mantine-theme.ts`
- Landing components: `src/components/landing/*`
- Theme controls: `src/components/theme/ColorSchemeToggle.tsx`, `src/components/theme/LanguageSelector.tsx`

Color scheme is managed by Mantine (`light`, `dark`, `auto`) and persisted automatically.

## Localization
- Supported locales: English (`en`) and Spanish (`es`).
- Initial locale is resolved from request headers (`x-vercel-ip-country` / `accept-language`) and persisted in local storage.
- Resume assets are served from:
  - `public/assets/resume/Andres-Artunduaga-CV-EN.pdf`
  - `public/assets/resume/Andres-Artunduaga-CV-ES.pdf`

## AI Contributor Pack
- Root policies: `AGENTS.md`, `AI_CONTEXT.md`, `CONTRIBUTING.md`
- Model-agnostic docs: `docs/ai/*`
- Mantine workflow docs: `docs/design-system/*`

Start from:
1. `AI_CONTEXT.md`
2. `docs/ai/RULES.md`
3. `docs/ai/TASK_SPEC_TEMPLATE.md`

# Test automatic deploy