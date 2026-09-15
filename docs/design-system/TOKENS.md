# Tokens

## Source of Truth
Mantine theme tokens from `src/theme/mantine-theme.ts` and generated CSS variables.

## Primary Token Groups
- Color palette (`theme.colors`, `theme.primaryColor`, `theme.primaryShade`)
- Typography (`theme.fontFamily`, `theme.headings`)
- Radius (`theme.defaultRadius`)
- Component defaults (`theme.components`)

## Common CSS Variable Examples
- `--mantine-color-body`
- `--mantine-color-text`
- `--mantine-color-default-border`
- `--mantine-primary-color-filled`
- `--mantine-radius-lg`
- `--mantine-spacing-md`

## Rules
- Prefer Mantine props and variants first.
- Use theme-level overrides before per-component custom CSS.
- Keep custom SCSS focused on structure/layout, not duplicating theme values.

## Mantine → Tailwind/shadcn Token Mapping (migration)

Parallel token set defined in `src/app/globals.css` for the Mantine → Tailwind CSS + shadcn/ui migration. Values are copied from `src/theme/mantine-theme.ts` and the Mantine defaults it inherits (read from the running app's computed `--mantine-*` variables), so this is a format change, not a rebrand. Dark values live under `.dark`.

### Brand palette
| Mantine | CSS variable | Tailwind class example | Value |
| --- | --- | --- | --- |
| `brand[0]` | `--color-brand-0` | `bg-brand-0` | `#ebf6ff` |
| `brand[1]` | `--color-brand-1` | `bg-brand-1` | `#d7ebff` |
| `brand[2]` | `--color-brand-2` | `bg-brand-2` | `#afd5ff` |
| `brand[3]` | `--color-brand-3` | `bg-brand-3` | `#85bdff` |
| `brand[4]` | `--color-brand-4` | `bg-brand-4` | `#61a9ff` |
| `brand[5]` | `--color-brand-5` | `bg-brand-5` | `#4b9cff` |
| `brand[6]` | `--color-brand-6` | `bg-brand-6` | `#3b95ff` |
| `brand[7]` | `--color-brand-7` | `bg-brand-7` | `#2d80e4` |
| `brand[8]` | `--color-brand-8` | `bg-brand-8` | `#1f72cd` |
| `brand[9]` | `--color-brand-9` | `bg-brand-9` | `#0962b6` |

Mantine `gray[0..9]` and `dark[0..9]` are available as `--color-gray-N` / `--color-dark-N`. Accent shade-6 colors used by the landing page: `--color-blue` (`#228be6`), `--color-cyan` (`#15aabf`), `--color-teal` (`#12b886`), `--color-grape` (`#be4bdb`).

### Semantic colors (`primaryShade: { light: 6, dark: 7 }`)
| Mantine variable | shadcn variable | Light | Dark |
| --- | --- | --- | --- |
| `--mantine-color-body` | `--background`, `--card`, `--popover` | `#fff` | `#242424` |
| `--mantine-color-text` | `--foreground`, `--card-foreground`, `--popover-foreground` | `#000` | `#c9c9c9` |
| Card `withBorder` border (`gray-3` / `dark-4`) | `--card-border` | `#dee2e6` | `#424242` |
| `--mantine-primary-color-filled` | `--primary`, `--ring` | `#3b95ff` | `#2d80e4` |
| white text on filled | `--primary-foreground` | `#fff` | `#fff` |
| `--mantine-primary-color-filled-hover` | `--primary-hover` | `#2d80e4` | `#1f72cd` |
| `--mantine-primary-color-light` | `--primary-light` | `rgba(59,149,255,.1)` | `rgba(75,156,255,.15)` |
| `--mantine-primary-color-light-hover` | `--primary-light-hover`, `--accent` | `rgba(59,149,255,.12)` | `rgba(75,156,255,.2)` |
| `--mantine-primary-color-light-color` | `--primary-light-foreground`, `--accent-foreground` | `#3b95ff` | `#afd5ff` |
| outline variant color | `--primary-outline` | `#3b95ff` | `#85bdff` |
| `--mantine-color-default` | `--surface` | `#fff` | `#2e2e2e` |
| `--mantine-color-default-color` | `--surface-foreground` | `#000` | `#fff` |
| `--mantine-color-default-hover` | `--surface-hover`, `--secondary` | `#f8f9fa` | `#3b3b3b` |
| `--mantine-color-text` on default-hover | `--secondary-foreground` | `#000` | `#c9c9c9` |
| SegmentedControl track (`gray-1` / `dark-8`) | `--muted` | `#f1f3f5` | `#1f1f1f` |
| `--mantine-color-dimmed` | `--muted-foreground` | `#868e96` | `#828282` |
| `--mantine-color-default-border` | `--border`, `--input` | `#ced4da` | `#424242` |
| `--mantine-color-error` | `--destructive` | `#fa5252` | `#e03131` |
| `--mantine-color-cyan-light` | `--cyan-light` | `rgba(21,170,191,.1)` | `rgba(34,184,207,.15)` |

### Radius
Tailwind's default radius scale contains every Mantine value, so Tailwind names are kept. `--radius` is Mantine's `defaultRadius: "md"`.

| Mantine | Value | Tailwind class |
| --- | --- | --- |
| `xs` | `0.125rem` | `rounded-xs` |
| `sm` | `0.25rem` | `rounded-sm` |
| `md` (`defaultRadius`) | `0.5rem` (`--radius`) | `rounded-lg` |
| `lg` (Card default) | `1rem` | `rounded-2xl` |
| `xl` (Button default) | `2rem` | `rounded-4xl` |
| pill (`1000px`, Badge, Timeline bullet) | — | `rounded-full` |

### Typography
| Mantine | Tailwind | Size / line-height |
| --- | --- | --- |
| `fontFamily` (`var(--font-sans)` Manrope stack) | `font-sans` | — |
| `headings.fontFamily` | `font-heading` | — |
| `--font-logo` (Audiowide, LogoLink) | `font-logo` | — |
| `fontSizes.xs` | `text-xs` | `0.75rem` / `1.4` |
| `fontSizes.sm` | `text-sm` | `0.875rem` / `1.45` |
| `fontSizes.md` | `text-base` | `1rem` / `1.55` |
| `fontSizes.lg` | `text-lg` | `1.125rem` / `1.6` |
| `fontSizes.xl` | `text-xl` | `1.25rem` / `1.65` |
| `headings.sizes.h1` | `text-h1` | `2.125rem` / `1.3`, weight 700 |
| `headings.sizes.h2` | `text-h2` | `1.625rem` / `1.35`, weight 700 |
| `headings.sizes.h3` | `text-h3` | `1.375rem` / `1.4`, weight 700 |

### Spacing, layout, shadows
| Mantine | Tailwind |
| --- | --- |
| spacing `xs` 10px / `sm` 12px / `md` 16px / `lg` 20px / `xl` 32px | `2.5` / `3` / `4` / `5` / `8` (e.g. `gap-2.5`, `p-8`) |
| `Container size="lg"` (1140px, `px` = spacing `md`) | `max-w-page px-4 mx-auto` |
| breakpoints `xs` 36em / `sm` 48em / `md` 62em / `lg` 75em / `xl` 88em | `xs:` / `sm:` / `md:` / `lg:` / `xl:` (Tailwind defaults replaced) |
| `shadow-xs` / `shadow-sm` / `shadow-md` | `shadow-xs` / `shadow-sm` / `shadow-md` (Mantine values) |

### Component defaults (`theme.components`)
| Mantine default | Tailwind/shadcn equivalent |
| --- | --- |
| `Button` `radius: "xl"` | `rounded-4xl` on the shadcn Button base |
| `Card` `radius: "lg"`, `withBorder: true` | `rounded-2xl border border-card-border` on the shadcn Card base |
