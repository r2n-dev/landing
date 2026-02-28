# Example: Add Component Prompt (Badge)

## Goal
Add a reusable `Badge` primitive for labels and statuses.

## Scope
- Create `src/design-system/components/Badge/Badge.tsx`
- Create `src/design-system/components/Badge/Badge.module.scss`
- Export it from `src/design-system/components/index.ts`
- Document props in `docs/design-system/COMPONENT_API.md`

## Constraints
- Semantic tokens only
- Variants: `neutral`, `success`, `warning`, `danger`, `accent`
- Sizes: `sm`, `md`
- Accessible contrast in all themes

## Allowed files
- `src/design-system/components/Badge/*`
- `src/design-system/components/index.ts`
- `docs/design-system/COMPONENT_API.md`

## Out of scope
- No route/page redesign
- No additional theme creation

## Acceptance criteria
- Badge works in all themes
- API typed and documented
- `npm run lint` and `npm run build` pass

## Validation commands
- `npm run lint`
- `npm run build`

## Expected output format
- Summary
- Files changed
- API details
- Validation results
