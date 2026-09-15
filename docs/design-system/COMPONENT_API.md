# Component API

## Primitives (`src/components/ui/*`)

### Button
- `variant`: `default` (filled primary), `secondary` (light primary), `outline` (neutral bordered), `ghost` (subtle), `destructive`, `link`, `cta` (gradient call to action), `cta-secondary` (neutral call to action).
- `size`: `xs` (26px), `sm` (30px), `default` (36px), `flush` (36px, no start padding), `lg` (42px), `icon-xs` (22px), `icon-sm` (28px), `icon` (34px), `icon-lg` (44px).
- `asChild`: render the child element (e.g. `<a>`) with button styles.
- Icons: mark leading/trailing icons with `data-icon="inline-start"` / `"inline-end"` for reduced side padding.

### Card
- `variant`: `default` (card background), `page` (page background with backdrop blur).
- `padding`: `xs` 10px, `sm` 12px, `md` 16px (default), `lg` 20px, `xl` 32px.
- Slots: `CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`.

### Badge
- `variant`: `default`, `secondary`, `outline`, `primary-outline`, `destructive`, `ghost`, `link`.
- `size`: `sm` (18px), `default` (20px), `lg` (26px), `xl` (32px).
- Uppercase, bold, pill-shaped; truncates its label when space runs out.

### IconBadge
- Decorative icon container (`aria-hidden`).
- `variant`: `default`, `secondary` (default).
- `size`: `xs` 18px, `sm` 22px, `md` 28px (default), `lg` 34px, `xl` 44px.

### Timeline / TimelineItem
- `Timeline` props: `active` (index of the last active item, default `-1`), `bulletSize` (px, default 20), `lineWidth` (px, default 4).
- `TimelineItem` props: `title`, `bullet` (optional icon), children as content.
- Renders an ordered list.

### ToggleGroup / ToggleGroupItem
- Radix toggle group. `variant="segmented"` with `size="segmented"` renders a segmented control.

### Tooltip
- `Tooltip`, `TooltipTrigger`, `TooltipContent` inside a `TooltipProvider`.

### Avatar, Separator
- `Avatar` `size`: `sm` 26px, `default` 38px, `lg` 56px; `AvatarImage`, `AvatarFallback`.
- `Separator`: horizontal or vertical divider in the card border color.

## Landing Components

### LandingPage
File: `src/components/landing/LandingPage.tsx`

Props:
- `initialLocale: LandingLocale`
- `contentByLocale: Record<LandingLocale, LandingContent>`

Behavior:
- Composes the full single-page landing experience: header, hero, stats, principles, education, certifications, experience, skills, contact and footer.
- Manages the active locale with `useLocaleManager`.

### Sections (`src/components/landing/sections/*`)
- `PageHeader`: `locale`, `controls`, `onLocaleChange`.
- `HeroSection`: `availabilityBadge`, `role`, `name`, `intro`, `about`, `portraitUrl`, `actions`.
- `StatsGrid`: `stats`.
- `PrinciplesCard`: `title`, `principles`.
- `EducationCard`: `title`, `items`.
- `CertificationsCard`: `title`, `verifyLabel`, `items` (badge image, name, issuer, localized validity and an external verification link).
- `ExperienceCard`: `title`, `showMoreLabel`, `showLessLabel`, `experience`, `resumeAction`.
- `SkillsCard`: `skills`.
- `ContactCard`: `title`, `intro`, `actions`.
- `LandingActions`: `actions` (maps `filled` → Button `cta`, others → `cta-secondary`).
- `PageFooter`: `name`, `email`, `linkedinHref`, `githubHref`, `whatsappHref`, `madeWithLabel`, `inCountryLabel`.

## Theme Components (`src/components/theme/*`)

### ThemeProvider
- Wraps next-themes with `attribute="class"`, `defaultTheme="system"`, `enableSystem` and storage key `mantine-color-scheme-value`.

### ColorSchemeToggle
Props:
- `labels?: { switchToLightMode: string; switchToDarkMode: string }`

Behavior:
- Toggles between light and dark with next-themes; icon button with a tooltip and an `aria-label` describing the next action.

### LanguageSelector
Props:
- `value: LandingLocale`
- `ariaLabel: string`
- `onChange: (locale: LandingLocale) => void`

Behavior:
- Segmented radio group for `en` / `es`; keeps one locale selected.

## LandingContent Types
File: `src/components/landing/landing.types.ts`

Key types:
- `LandingAction`
- `LandingStat`
- `LandingPrinciple`
- `LandingExperienceItem`
- `LandingContent`
