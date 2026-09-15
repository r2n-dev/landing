# Prompt: Add Theme

Update theme tokens for this repository.

## Goal
{{goal}}

## Scope
- Edit the `:root` / `.dark` variables and `@theme` blocks in `src/app/globals.css`
- Keep runtime compatibility with next-themes (`ThemeProvider` in `src/app/layout.tsx`)
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
