# Design System QA Checklist

## Visual
- [ ] Light and dark schemes are readable and coherent.
- [ ] Hover/active/focus states are visible.
- [ ] No clipping or overlap on small screens.

## Functional
- [ ] Landing page sections render correctly.
- [ ] Color scheme toggle works and persists across reloads without a flash.
- [ ] External links and anchors work as expected.

## Accessibility
- [ ] Keyboard navigation works.
- [ ] Focus ring is visible.
- [ ] Contrast is adequate for text and controls.

## Commands
- [ ] `npm run lint` (Next.js rules + `shadcn/no-restyle`)
- [ ] `npm run build`
