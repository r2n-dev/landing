# Review Checklist

## Functional
- [ ] Behavior matches requested scope.
- [ ] Only intended route(s) and components changed.

## Design System
- [ ] Primitives and their variants used before custom markup.
- [ ] Token changes are centralized in `src/app/globals.css`.
- [ ] No Mantine, CSS/SCSS modules or legacy design-system runtime reintroduced.

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
