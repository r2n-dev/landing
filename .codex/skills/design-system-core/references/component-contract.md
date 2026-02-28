# Component Contract

## Public Primitives
- Button
- Card
- Text
- Stack
- Container
- ThemeSwitcher

## API Expectations
- Typed props with constrained unions for variants/sizes.
- Defaults for all optional variant props.
- Reusable behavior not tied to a single route.

## Styling Expectations
- CSS modules only.
- No inline style objects for static styling.
- Focus-visible styling for keyboard accessibility.

## Documentation
Update `docs/design-system/COMPONENT_API.md` whenever public props change.
