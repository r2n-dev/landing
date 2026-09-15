# AGENTS

> **Migration in progress: Mantine → Tailwind CSS + shadcn/ui**
>
> The target stack is Tailwind CSS v4 + shadcn/ui. Mantine is being phased out phase by phase; until Phase 7 lands, the app still runs on Mantine and the Mantine rules below remain in force for code that has not been migrated yet. Do not block or revert work that belongs to the current migration phase, and do not migrate ahead of the current phase.
>
> Phases (run in order, one per session, each committed before the next):
> 0. Governance notice (this note)
> 1. Install Tailwind + shadcn alongside Mantine
> 2. Port theme tokens to CSS variables (`docs/design-system/TOKENS.md` mapping)
> 3. Dark mode via `next-themes`, parallel to Mantine
> 4. Add shadcn primitives (`card`, `badge`, `button`, `avatar`, `separator`)
> 5. Custom `Timeline` in `src/components/ui/timeline.tsx`
> 6. Migrate `src/components/landing/sections/*` one component at a time
> 7. Remove Mantine
> 8. Rewrite governance docs + add `@shadcn/lint`

This repository is optimized for AI-assisted development.

## Mission
Build and maintain a single-page portfolio landing experience using Mantine as the only UI component library.

## Non-Negotiable Rules
- Prefer Mantine primitives before creating custom wrappers.
- Keep custom components pure and reusable with typed props.
- Centralize theme decisions in `src/theme/mantine-theme.ts`.
- Preserve responsive behavior for mobile and desktop.
- Keep changes focused; avoid unrelated refactors.

## Required Workflow
1. Read `AI_CONTEXT.md` and `docs/ai/RULES.md`.
2. Draft a short implementation plan before editing.
3. Implement in small, reviewable commits.
4. Run validation commands from `CONTRIBUTING.md`.
5. Self-review with `docs/ai/REVIEW_CHECKLIST.md` before finalizing.

## Mantine Guardrails
- Color schemes: `light`, `dark`, `auto`.
- Runtime setup must use `ColorSchemeScript`, `mantineHtmlProps`, and `MantineProvider` in App Router layout.
- Prefer theme-level overrides over one-off component styling.
- Avoid inline style objects unless no Mantine prop, class, or styles API alternative exists.

## Definition of Done
- Landing page works in light and dark schemes.
- No contrast regressions or broken focus states.
- Components remain pure and reusable.
- Docs updated when theme or public component APIs change.
