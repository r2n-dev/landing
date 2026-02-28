# Prompt: Add Theme

Update Mantine theme configuration for this repository.

## Goal
{{goal}}

## Scope
- Extend `src/theme/mantine-theme.ts`
- Keep runtime compatibility with `ColorSchemeScript` and `MantineProvider`
- Update docs in `docs/design-system/THEMES.md`

## Constraints
- Preserve readable contrast for text, borders, and controls
- Keep naming and palette structure consistent
- Avoid ad-hoc style overrides when theme tokens can solve the need

## Allowed files
{{allowed_files}}

## Out of scope
{{out_of_scope}}

## Acceptance criteria
- Theme update is visible in UI
- No broken contrast in light/dark schemes
- Docs updated

## Validation commands
- `npm run lint`
- `npm run build`

## Expected output format
- Summary
- Theme diff
- Files changed
- Validation results
