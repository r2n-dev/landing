# AI Context

## Project Snapshot
- Framework: Next.js 15 (App Router) + TypeScript.
- Styling: Tailwind CSS v4, configured in CSS (`src/app/globals.css`; no `tailwind.config`).
- UI primitives: shadcn/ui (Radix base, `components.json`) in `src/components/ui/*`.
- Color scheme runtime: `next-themes`.
- Icons: `@tabler/icons-react`.
- Active route scope: single landing page at `/`.

## Critical Paths
- Root runtime: `src/app/layout.tsx`
- Tokens and base styles: `src/app/globals.css`
- UI primitives: `src/components/ui/*`
- Landing UI: `src/components/landing/*`
- Theme provider and controls: `src/components/theme/*`
- Lint rules: `eslint.config.mjs`

## Theme Contract
- `ThemeProvider` wraps the app with `attribute="class"`, `defaultTheme="system"` and `enableSystem`.
- Keep `suppressHydrationWarning` on `<html>`; next-themes sets its class before hydration.
- The storage key `mantine-color-scheme-value` is kept so choices saved by the former Mantine site still apply.
- Semantic tokens are CSS variables in `:root` and `.dark`, exposed to Tailwind through `@theme inline`.

## UI Composition Rules
- Start with primitives: `Card`, `Button`, `Badge`, `IconBadge`, `Tooltip`, `ToggleGroup`, `Timeline`, `Separator`, `Avatar`.
- Use semantic HTML plus Tailwind utilities for layout and typography (`text-h1`–`text-h3`, `text-muted-foreground`).
- Extract custom components only when a pattern repeats or improves readability.
- Keep custom components presentational where possible.

## Before Shipping Any Change
1. Verify light and dark schemes visually.
2. Verify keyboard navigation and focus states.
3. Run `npm run lint` and `npm run build`.
4. Update docs when public APIs, tokens, theme behavior, or workflow expectations change.
