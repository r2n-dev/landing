# R2N Portfolio Landing

Single-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS and shadcn/ui.

## Tech Stack
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui primitives (Radix)
- next-themes

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
- `npm run lint` - run lint checks (Next.js rules + `shadcn/no-restyle`)
- `npm run build` - build production bundle
- `npm run start` - run production server
- `npm run check:ds` - lint + build validation gate

## UI Architecture
- Runtime shell: `src/app/layout.tsx`
- Theme tokens: `src/app/globals.css`
- UI primitives: `src/components/ui/*`
- Landing components: `src/components/landing/*`
- Theme controls: `src/components/theme/ColorSchemeToggle.tsx`, `src/components/theme/LanguageSelector.tsx`

Color scheme is managed by next-themes (`light`, `dark`, `system`) and persisted automatically.

## Localization
- Supported locales: English (`en`) and Spanish (`es`).
- Initial locale is resolved from request headers (`x-vercel-ip-country` / `accept-language`) and persisted in local storage.
- Resume PDFs are generated at build time from the profile data with `@react-pdf/renderer`:
  - `/resume-en.pdf`, `/resume-es.pdf` (layout: `src/components/resume/ResumeDocument.tsx`)
  - `/resume-en`, `/resume-es` show an HTML version with a download button

## AI Contributor Pack
- Root policies: `AGENTS.md`, `AI_CONTEXT.md`, `CONTRIBUTING.md`
- Model-agnostic docs: `docs/ai/*`
- Design system docs: `docs/design-system/*`

Start from:
1. `AI_CONTEXT.md`
2. `docs/ai/RULES.md`
3. `docs/ai/TASK_SPEC_TEMPLATE.md`

# Test automatic deploy