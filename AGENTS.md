# AGENTS

This repository is optimized for AI-assisted development.

## Mission
Implement portfolio features using the local design system and keep all UI work theme-safe, reusable, and accessible.

## Non-Negotiable Rules
- Use semantic design tokens. Do not hardcode colors, shadows, spacing, font sizes, or radii in components.
- Do not add inline styles in `.tsx` files unless there is no CSS alternative and the reason is documented.
- Keep components reusable and variant-based instead of page-specific.
- Preserve responsive behavior for mobile and desktop.
- Keep changes focused; avoid unrelated refactors.

## Required Workflow
1. Read `AI_CONTEXT.md` and `docs/ai/RULES.md`.
2. Draft a short implementation plan before editing.
3. Implement in small, reviewable commits.
4. Run validation commands from `CONTRIBUTING.md`.
5. Self-review with `docs/ai/REVIEW_CHECKLIST.md` before finalizing.

## Design System Guardrails
- Theme names: `light-solar`, `light-azure`, `dark-slate`, `dark-ember`.
- Use only semantic CSS variables in UI components (for example `--color-bg-surface`).
- New components must expose typed props for variants/sizes where relevant.
- New sections/pages must be composed from primitives when possible.

## Skills
Codex skills for this repo live in `.codex/skills/`.
- `design-system-core`: token, theme, and primitive component work.
- `portfolio-feature-builder`: adding portfolio sections/pages with DS conventions.

## Definition of Done
- Feature works in all themes.
- No contrast regressions or broken focus states.
- No new inline style debt.
- Docs updated when public component/theme APIs change.
