# Component API

## LandingPage
File: `src/components/landing/LandingPage.tsx`

Props:
- `content: LandingContent`

Behavior:
- Composes the full single-page landing experience.
- Renders hero, stats, principles, experience, and contact sections.

## ColorSchemeToggle
File: `src/components/theme/ColorSchemeToggle.tsx`

Props:
- none

Behavior:
- Toggles Mantine color scheme between light and dark.
- Uses Mantine color scheme hooks and accessible `aria-label`.

## LandingContent Types
File: `src/components/landing/landing.types.ts`

Key types:
- `LandingAction`
- `LandingStat`
- `LandingPrinciple`
- `LandingExperienceItem`
- `LandingContent`
