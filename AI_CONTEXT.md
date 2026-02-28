# AI Context

## Project Snapshot
- Framework: Next.js (App Router) + TypeScript + SCSS modules.
- Design system root: `src/design-system`.
- Existing app routes: `/`, `/about`, `/experience`, `/testforms`, `/design-system`.

## Critical Paths
- Theme runtime: `src/design-system/theme/*`
- Tokens/themes: `src/design-system/styles/*`
- Reusable primitives: `src/design-system/components/*`
- Compatibility exports: `src/components/index.ts`

## Theme Contract
- Themes: `light-solar`, `light-azure`, `dark-slate`, `dark-ember`.
- HTML selector: `data-theme` on `<html>`.
- Persistence key: `r2n_theme`.

## UI Composition Rules
- Build new views with primitives (`Button`, `Card`, `Text`, `Stack`, `Container`) before introducing page-specific components.
- If a pattern repeats 2+ times, extract a reusable component.
- Prefer class-based styling over inline `style` objects.

## Before Shipping Any Change
1. Verify all themes visually for regressions.
2. Verify keyboard navigation and focus states.
3. Run lint/build checks.
4. Update docs when introducing new tokens, component variants, or layout patterns.
