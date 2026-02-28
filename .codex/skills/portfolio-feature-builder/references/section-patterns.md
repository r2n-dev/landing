# Section Patterns

## Preferred Composition
- Outer `Container` for width/padding constraints.
- `Stack` for vertical rhythm and responsive spacing.
- `Card` for grouped content.
- `Text` for heading/body semantics.
- `Button` for actions and navigation.

## Avoid
- Deeply nested layout wrappers with custom spacing.
- Duplicated route-specific CTA components.
- Hardcoded spacing/colors.

## Responsive Heuristic
- Mobile first layout.
- Collapse side-by-side blocks to one column under tablet widths.
