# Prompt: Add Theme

Add a new runtime theme to the design system.

## Goal
{{goal}}

## Scope
- Extend theme types/constants
- Add semantic token mapping in `src/design-system/styles/themes.scss`
- Ensure switcher shows the theme label
- Update docs in `docs/design-system/THEMES.md`

## Constraints
- Preserve semantic token contract
- Maintain readable contrast for text, borders, and interactive states
- Keep naming consistent with existing theme IDs

## Allowed files
{{allowed_files}}

## Out of scope
{{out_of_scope}}

## Acceptance criteria
- Theme can be selected in UI and persists
- No broken contrast in core routes
- Docs updated

## Validation commands
- `npm run lint`
- `npm run build`

## Expected output format
- Summary
- Theme token diff
- Files changed
- Validation results
