# Theme Authoring

## Steps
1. Add theme ID and label in theme constants/types.
2. Add semantic token block in `src/design-system/styles/themes.scss`.
3. Ensure ThemeSwitcher displays the new theme.
4. Validate contrast for text, borders, and interactive states.
5. Update `docs/design-system/THEMES.md`.

## Theme Requirements
- Distinct visual identity.
- Professional readability.
- Coherent accent and hover/active states.

## Persistence
- Theme selection persists in `localStorage` key `r2n_theme`.
