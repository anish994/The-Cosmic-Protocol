# v3.0 Migration and Implementation Guide

This guide upgrades all engines and data to the v3.0 unified system.

## Prereqs
- Node.js (for scripts)
- Unity (for ScriptableObject import) — optional

## Step 1: Data migration
1. Run camelization + validation + balance
   - npm run glyphs:wave2
   - This generates:
     - glyphs_database_v3_camel.json
     - glyphs_validation_report.json
     - glyphs_database_v3_balanced.json
2. Inspect glyphs_validation_report.json and fix unknown keywords if any.

## Step 2: Balance & TTK
- npm run wave5:ttk
- Review balance_report.json for notes (cooldowns, floors, missing finishers).
- Adjust balance_profiles.json as needed; re-run glyphs:balance.

## Step 3: Unity import (optional)
- Place GlyphJsonImporter.cs + GlyphData.cs in Unity project
- Assets → Jyotish → Import Glyphs (v3.0 JSON)

## Step 4: UI/UX Hooks
- Serve ui/keywords_tooltips.json
- Include src/components/KeywordTooltip.js and keyword-tooltips.css
- Call KeywordTooltip.init(container, '/ui/keywords_tooltips.json') after render
- JyotishFoundationUI already attempts to initialize if present

## Step 5: Engine code
- Use src/engines/JyotishEngine.js bindPlanetToEngine(), transitTick(), getBoundEffects()
- Map jyotish_gravity entries from glyphs to active modifiers

## Acceptance
- All 10 blueprints present, expanded
- glyphs_database_v3_balanced.json exists and validates
- balance_report.json generated with no critical errors
- UI shows tooltips for bracketed keywords
