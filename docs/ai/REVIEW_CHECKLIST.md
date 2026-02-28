# Review Checklist

## Functional
- [ ] Behavior matches requested scope.
- [ ] Only intended route(s) and components changed.

## Mantine System
- [ ] Mantine components/variants used before custom CSS.
- [ ] Theme changes are centralized in `src/theme/mantine-theme.ts`.
- [ ] No legacy design-system runtime/tokens reintroduced.

## Accessibility
- [ ] Keyboard navigation works.
- [ ] Focus state visible.
- [ ] Contrast remains readable in light and dark schemes.

## Code Quality
- [ ] Types are explicit for public APIs.
- [ ] Components remain pure and low-complexity.
- [ ] No unnecessary inline style debt.

## Validation
- [ ] `npm run lint`
- [ ] `npm run build`

## Docs
- [ ] Updated docs for API/theme/workflow changes.
