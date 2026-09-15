# Component Contract

## Public Primitives (`src/components/ui/*`)
- Button
- Card
- Badge
- IconBadge
- Timeline
- ToggleGroup / Toggle
- Tooltip
- Avatar
- Separator

## API Expectations
- Typed props with `cva` variants and sizes.
- Defaults for all optional variant props.
- Reusable behavior not tied to a single section.

## Styling Expectations
- Tailwind utilities with semantic tokens; no CSS/SCSS modules.
- No inline style objects for static styling.
- Visible `focus-visible` outline (2px, ring color).
- Consumers may pass layout classes only; new looks become variants.

## Documentation
Update `docs/design-system/COMPONENT_API.md` whenever public props change.
