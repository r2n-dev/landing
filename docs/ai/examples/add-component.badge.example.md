# Example: Add Component Prompt (Badge)

## Goal
Add a reusable `StatusBadge` component built on the `Badge` primitive (`src/components/ui/badge.tsx`).

## Scope
- Create `src/components/StatusBadge/StatusBadge.tsx`
- Export from `src/components/index.ts`
- Document props in `docs/design-system/COMPONENT_API.md`

## Constraints
- Compose the `Badge` primitive; add variants there if needed
- Variants: `neutral`, `success`, `warning`, `danger`, `accent`
- Sizes: `sm`, `md`
- Accessible contrast in light and dark schemes

## Allowed files
- `src/components/StatusBadge/*`
- `src/components/index.ts`
- `docs/design-system/COMPONENT_API.md`

## Out of scope
- No route/page redesign
- No new package additions

## Acceptance criteria
- Badge works in light and dark schemes
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
