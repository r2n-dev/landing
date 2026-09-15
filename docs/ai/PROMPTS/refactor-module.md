# Prompt: Refactor Module

Refactor an existing module to align with the design system.

## Goal
{{goal}}

## Scope
{{scope}}

## Constraints
- Preserve behavior unless explicitly requested
- Replace bespoke UI code with primitives from `src/components/ui/*` where practical
- Reduce complexity and keep components pure

## Allowed files
{{allowed_files}}

## Out of scope
{{out_of_scope}}

## Acceptance criteria
- Behavior remains intact
- Design system alignment improved
- Lint/build pass

## Validation commands
- `npm run lint`
- `npm run build`

## Expected output format
- Summary
- Before/after behavior notes
- Files changed
- Validation results
