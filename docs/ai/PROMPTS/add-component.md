# Prompt: Add Component

Create a reusable Mantine-oriented component in this repo.

## Goal
{{goal}}

## Scope
- Build component in `src/components/{{component_name}}`
- Export from `src/components/index.ts` when intended for reuse
- Document API updates in `docs/design-system/COMPONENT_API.md`

## Constraints
- Compose with Mantine primitives first
- Include accessible keyboard/focus behavior
- Provide typed variants/sizes if relevant
- Keep component pure and presentational when possible

## Allowed files
{{allowed_files}}

## Out of scope
{{out_of_scope}}

## Acceptance criteria
- Component renders correctly in light and dark schemes
- API is typed and documented
- Lint/build pass

## Validation commands
- `npm run lint`
- `npm run build`

## Expected output format
- Summary
- Files changed
- API notes
- Validation results
