# Migration Guide

## Mantine to Tailwind CSS + shadcn/ui
1. Add governance notices so agents stop enforcing Mantine-first rules during the migration.
2. Install Tailwind CSS v4 and run `shadcn init` (Radix base); load Mantine into a lower cascade layer so both systems coexist.
3. Port the Mantine theme to CSS variables in `src/app/globals.css` (mapping in `TOKENS.md`).
4. Add `next-themes` alongside Mantine, reusing Mantine's storage key, with a temporary bridge keeping both schemes in sync.
5. Add shadcn primitives and restyle them to Mantine's defaults (Button radius xl, Card radius lg with border, Mantine sizes).
6. Build a custom `Timeline` matching Mantine's geometry.
7. Migrate landing sections one at a time, verifying computed layout and colors against the pre-migration page in light/dark and desktop/mobile.
8. Remove Mantine, SCSS and the sync bridge; move body defaults into `globals.css`.
9. Rewrite docs and enable `shadcn/no-restyle`; encode page-specific treatments as primitive variants (`Button` `cta`, `cta-secondary`, size `flush`; `Card` `page`).

Notes:
- Mantine variant names map to shadcn names: filled → `default`, light → `secondary`, default → `outline`, subtle → `ghost`, Badge outline → `primary-outline`.
- `LandingActionVariant` in `landing.types.ts` still uses Mantine's names (`filled`, `light`, `default`); components map them to Button variants.
- Known behavior differences: the language selector's sliding indicator is not animated, and the theme tooltip also opens on keyboard focus.

## Legacy to Mantine
1. Remove legacy local design-system runtime and primitives.
2. Install and configure Mantine provider in App Router layout.
3. Create centralized Mantine theme overrides.
4. Rebuild route UI with Mantine primitives.
5. Keep only required routes/components for current product scope.
6. Update AI and design-system docs to Mantine-first conventions.

## Repository Status
- Legacy `src/design-system/*` removed.
- Multi-route portfolio replaced with a single landing page.
- Mantine removed; UI runs on Tailwind CSS v4, shadcn/ui primitives and next-themes.
