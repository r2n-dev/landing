# Design System Overview

## Purpose
Use Mantine as the UI foundation for the portfolio landing page, with minimal custom abstractions.

## Architecture
- Mantine runtime provider configured in `src/app/layout.tsx`.
- Theme overrides defined in `src/theme/mantine-theme.ts`.
- Landing composition in `src/components/landing/*`.
- Color scheme toggle in `src/components/theme/ColorSchemeToggle.tsx`.

## Principles
- Mantine-first composition.
- Pure, typed custom components.
- Accessibility and contrast as default constraints.
- Keep theme concerns centralized.
