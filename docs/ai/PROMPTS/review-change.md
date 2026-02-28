# Prompt: Review Change

Perform a risk-focused code review for this change.

## Goal
Identify bugs, regressions, accessibility issues, and design-system violations.

## Scope
{{scope}}

## Constraints
- Prioritize findings by severity
- Include file and line references
- Keep summary brief after findings

## Allowed files
{{allowed_files}}

## Out of scope
{{out_of_scope}}

## Acceptance criteria
- Findings are actionable
- Each finding has impact and suggested fix
- Notes include testing gaps

## Validation commands
- `npm run lint`
- `npm run build`

## Expected output format
1. Findings by severity
2. Open questions / assumptions
3. Residual risks and test gaps
