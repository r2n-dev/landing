# Migration Guide

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
- Theme runtime now fully managed by Mantine.
