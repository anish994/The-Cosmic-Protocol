# Production Polish (Wave 5)

This document defines the final polish layer for v3.0.

## Balance Curves
- Control keyword cooldown floors: see balance_profiles.json
- KP floors set per hard control
- Detonation math baseline: +10% per Decay stack; AoE +1 under Jupiter (even turns)

## TTK/Archetype Targets
- Aggro: 3–5 turns
- Midrange: 5–7 turns
- Control: 7–10 turns

## UI/UX Hooks
- Keyword Tooltip: KeywordTooltip.js + keyword-tooltips.css (+ ui/keywords_tooltips.json)
- Tooltip trigger: bracketed [Keyword] auto-wrapped with span.kw; title provides info
- Gravity HUD: JyotishFoundationUI renders Gravity Influence list

## Validation & CI
- Scripts:
  - npm run glyphs:wave2 (camelize, validate, balance)
  - npm run wave5:ttk (balance report)
- Outputs: glyphs_validation_report.json, glyphs_database_v3_balanced.json, balance_report.json

## Implementation Notes
- Prefer glyphs_database_v3_balanced.json at runtime
- Map snake_case → camelCase via camelizer if older data is present
- Unity import path expects balanced JSON at project root

## Acceptance Checklist
- [ ] No unknown keywords in validation report
- [ ] balance_report notes addressed or accepted
- [ ] Tooltip rendering verified on representative views
- [ ] Gravity binds/transits function + visible in UI
- [ ] All engines pass cooldown floors and cost bands
