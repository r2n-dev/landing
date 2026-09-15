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

In production (Dokploy), set the same variables (plus `RESUME_REVALIDATE_SECRET`) on the service. The Docker build does not need them: pages built without Supabase use the fallback data and refresh at runtime.

Database schema lives in `supabase/` (Supabase CLI, installed as a dev dependency):
- `supabase/config.toml` - CLI and local stack configuration
- `supabase/migrations/` - SQL migrations, applied in order
- `supabase/seed.sql` - version 1 of the resume (only inserted into an empty table)

Resume content lives in one append-only table, `resume_versions`: each row stores the whole resume as `data` (jsonb) with its `schema_version`, a `note` and `created_at`. The newest row is the current resume; a rollback inserts a copy of an older row. The JSON shape is defined with Zod in `src/lib/resume/schema.ts` (bump `RESUME_SCHEMA_VERSION` on breaking shape changes). RLS allows public reads only; new versions are added from the Supabase dashboard for now.

Content is cached and refreshed when `POST /api/revalidate/resume` is called with the `x-revalidate-secret` header matching `RESUME_REVALIDATE_SECRET` (and hourly as a safety net). To refresh automatically on every new version, add a Supabase Database Webhook (Database > Webhooks): table `resume_versions`, event `Insert`, type HTTP `POST` to `https://r2n.dev/api/revalidate/resume` with that header.

Link the CLI to the hosted project once per machine:
```bash
npx supabase login
npx supabase link --project-ref grmssymmxvewwekivvjj
```
Then create migrations with `npx supabase migration new <name>` and apply them with `npx supabase db push` (add `--include-seed` to load `seed.sql`).
After schema changes, regenerate the database types:
```bash
npx supabase gen types typescript --linked --schema public > src/lib/supabase/database.types.ts
```

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
- The landing page, `/json-en`, `/json-es`, the resume pages and the PDFs render the latest resume version from Supabase (`getResume()` in `src/lib/resume/get-resume.ts`), falling back to `src/components/landing/profile-data.ts` when Supabase is unavailable:
  - `/resume-en.pdf`, `/resume-es.pdf` (layout: `src/components/resume/ResumeDocument.tsx`, rendered with `@react-pdf/renderer` and cached per resume version)
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