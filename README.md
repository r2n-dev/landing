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

## Supabase
Resume content is moving to Supabase. The connection is configured through env vars (see `.env.example`):
1. Copy `.env.example` to `.env.local` and set `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` from the Supabase dashboard (Project Settings > API Keys).
2. Verify the connection:
   ```bash
   npm run supabase:check
   ```
3. Use `getSupabaseClient()` from `src/lib/supabase/server.ts` in server components and route handlers only.

Database schema lives in `supabase/` (Supabase CLI, installed as a dev dependency):
- `supabase/config.toml` - CLI and local stack configuration
- `supabase/migrations/` - SQL migrations, applied in order

Link the CLI to the hosted project once per machine:
```bash
npx supabase login
npx supabase link --project-ref grmssymmxvewwekivvjj
```
Then create migrations with `npx supabase migration new <name>` and apply them with `npx supabase db push`.

In production (Dokploy), set the same variables on the service.

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