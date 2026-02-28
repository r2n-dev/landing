# Design System Overview

## Purpose
Provide a reusable, theme-safe UI foundation for this portfolio.

## Architecture
- Core tokens: scale values for spacing, radius, typography, motion, and shadows.
- Semantic tokens: UI meaning values applied per theme.
- Runtime themes selected via `data-theme` on `<html>`.
- Primitives under `src/design-system/components`.

## Principles
- Reuse over duplication.
- Semantic token usage over hardcoded styles.
- Accessibility and contrast are first-class constraints.
- Keep public APIs typed, minimal, and documented.
