# Migration Guide

## From Legacy Styles to Design System
1. Replace palette imports with semantic CSS variables.
2. Replace repeated layout wrappers with `Container` and `Stack`.
3. Replace page-specific button/card styles with primitives and variants.
4. Remove inline style objects and move to CSS modules.
5. Validate all themes and responsive breakpoints.

## Common Replacements
- Hardcoded spacing -> `var(--space-*)`
- Hardcoded colors -> `var(--color-*)`
- Route-specific card/button styles -> DS primitives
