# AGENTS

This repository is optimized for AI-assisted development.

## Mission
Build and maintain a single-page portfolio landing experience with Tailwind CSS v4 and shadcn/ui primitives.

## Non-Negotiable Rules
- Use the primitives in `src/components/ui/*` before writing custom markup. When a design needs a new treatment, add a variant or size to the primitive instead of restyling it with `className`.
- Style with Tailwind utilities backed by the tokens in `src/app/globals.css`. No raw color values, CSS/SCSS modules, or inline styles for static styling.
- Keep custom components pure and reusable with typed props.
- Preserve responsive behavior for mobile and desktop.
- Keep changes focused; avoid unrelated refactors.

## Required Workflow
1. Read `AI_CONTEXT.md` and `docs/ai/RULES.md`.
2. Draft a short implementation plan before editing.
3. Implement in small, reviewable commits.
4. Run `npm run lint` (includes `shadcn/no-restyle`) and `npm run build`, and fix all errors.
5. Self-review with `docs/ai/REVIEW_CHECKLIST.md` before finalizing.

## UI Guardrails
- Color schemes: `light`, `dark`, `system`, managed by `next-themes` (`ThemeProvider` in `src/app/layout.tsx`).
- Dark styles come from the `.dark` token overrides in `globals.css`; use the `dark:` variant only for values without a semantic token.
- Add shadcn components with `npx shadcn@latest add <name>`, then align them with the existing tokens and defaults.
- `className` on primitives is limited to layout (margin, width, placement), as enforced by `shadcn/no-restyle`.

## Definition of Done
- Landing page works in light and dark schemes.
- No contrast regressions or broken focus states.
- Components remain pure and reusable.
- Docs updated when tokens, theme behavior, or public component APIs change.
