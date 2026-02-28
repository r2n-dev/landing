# Prompt: Add Component

Create a reusable design-system component in this repo.

## Goal
{{goal}}

## Scope
- Build component in `src/design-system/components/{{component_name}}`
- Export from `src/design-system/components/index.ts`
- Document API in `docs/design-system/COMPONENT_API.md`

## Constraints
- Use semantic tokens only
- Include accessible keyboard/focus behavior
- Provide typed variants/sizes if relevant
- No inline styles unless absolutely necessary

## Allowed files
{{allowed_files}}

## Out of scope
{{out_of_scope}}

## Acceptance criteria
- Component renders correctly in all 4 themes
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
