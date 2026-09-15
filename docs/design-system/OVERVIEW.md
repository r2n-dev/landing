# Design System Overview

## Purpose
Use Tailwind CSS v4 tokens and shadcn/ui primitives as the UI foundation for the portfolio landing page, with minimal custom abstractions.

## Architecture
- Tokens and base styles: `src/app/globals.css` (`@theme`, `:root`/`.dark` variables, `@layer base`).
- Primitives: `src/components/ui/*` (shadcn/ui on Radix, restyled to the site's former Mantine defaults).
- Theme runtime: `ThemeProvider` (next-themes) from `src/components/theme/ThemeProvider.tsx`, mounted in `src/app/layout.tsx`.
- Landing composition: `src/components/landing/*`.
- Class merging: `cn` from the `cn` package (re-exported by `src/lib/utils.ts`).
- Linting: `shadcn/no-restyle` in `eslint.config.mjs`.

## Principles
- Primitive-first composition; new visual treatments become variants or sizes.
- Semantic tokens over raw values.
- Pure, typed custom components.
- Accessibility and contrast as default constraints.
