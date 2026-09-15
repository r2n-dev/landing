# QA Playbook

## Mandatory Checks
- Run `npm run lint` (includes `shadcn/no-restyle`).
- Run `npm run build`.
- Verify light and dark schemes on the landing page.

## Manual UI Checks
- Keyboard focus visibility.
- Hover/active states.
- No clipping on mobile layouts (down to 320px).
- No contrast regressions.

## Regression Checks
- Header, footer, and page layout remain stable.
- Color scheme toggle persists across reloads without a flash.
