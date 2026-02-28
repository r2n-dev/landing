# AI Context

## Project Snapshot
- Framework: Next.js (App Router) + TypeScript.
- UI library: Mantine (`@mantine/core`, `@mantine/hooks`).
- Styling: Mantine styles + SCSS modules for page/layout structure.
- Active route scope: single landing page at `/`.

## Critical Paths
- Root runtime: `src/app/layout.tsx`
- Mantine theme: `src/theme/mantine-theme.ts`
- Landing UI: `src/components/landing/*`
- Scheme toggle: `src/components/theme/ColorSchemeToggle.tsx`

## Theme Contract
- Use Mantine color schemes: `light`, `dark`, `auto`.
- Keep `ColorSchemeScript` in layout `<head>`.
- Keep `mantineHtmlProps` on `<html>`.
- Rely on Mantine local storage manager default key (`mantine-color-scheme-value`).

## UI Composition Rules
- Start with Mantine primitives (`Container`, `Card`, `Stack`, `Button`, `Text`, etc.).
- Extract custom components only when a pattern repeats or improves readability.
- Keep custom components presentational where possible.

## Before Shipping Any Change
1. Verify light and dark schemes visually.
2. Verify keyboard navigation and focus states.
3. Run lint/build checks.
4. Update docs when public APIs, theme behavior, or workflow expectations change.
