# SKILL AND FUSION SYSTEM EXPANSION PLAN

## Phase 1: The Foundation of Acquisition (Unlock Variety)
- [x] **Task 1.1: Skill Unlock Registry**
    - Create `SkillUnlockRegistry.js` to manage unlock states and conditions.
    - Define unlock types: `QUEST`, `SECRET`, `FACTION`, `TRIAL`.
    - Integrate with `GameRegistry.js`.
- [x] **Task 1.2: Faction & Quest Integration**
    - Define faction reputation thresholds for specific skills.
    - Create a mapping of Quests to Skill Rewards.
- [x] **Task 1.3: The Trial System**
    - Create `SkillTrialSystem.js` to manage trial logic.
    - Define trial types: `COMBAT`, `PUZZLE`, `SURVIVAL`.
    - Implement trial start/end and reward logic.

## Phase 2: The Alchemy of Fusion (Fusion Discovery)
- [x] **Task 2.1: Fusion Discovery Events**
    - Enhance `FusionSystem` to trigger events upon discovery.
    - Add UI for "New Fusion Discovered" with lore and stats.
- [x] **Task 2.2: Legendary Fusion Trials**
    - Create specific trials for Mythic fusions.
    - Implement "Fusion Chambers" in the world where these trials take place.
- [x] **Task 2.3: World-Altering Fusion Events**
    - Implement global state changes triggered by specific fusions.
    - Example: "Solar Void Singularity" darkens the skybox.

## Phase 3: The Living World (Skill-World Interactions)
- [x] **Task 3.1: Environmental Tagging**
    - Update `WorldExplorationEngine` to support environmental tags (`Flammable`, `Conductive`, etc.).
- [x] **Task 3.2: Skill-Environment Logic**
    - Implement interaction layer in `SkillSystem` to check for environmental tags.
    - Create unique effects for interactions (e.g., Fire + Oil = Explosion).
- [x] **Task 3.3: World-Skill Fusion**
    - Allow skills to "fuse" with environmental objects.
    - Example: Casting a shield on a Ley Line creates a "Ley Shield".

## Phase 4: The Adversarial Dance (Enemy Synergies)
- [x] **Task 4.1: Enemy Archetype Weaknesses**
    - Define weaknesses/resistances for enemy types in `EnemyConsciousnessEngine`.
- [x] **Task 4.2: Enemy AI Reaction to Fusions**
    - Update AI to recognize and react to player fusions.
    - Implement "Scatter", "Shield", and "Interrupt" behaviors.
- [x] **Task 4.3: Counter-Play Skills**
    - Design skills specifically to break enemy mechanics.

## Phase 5: The Narrative Weave (Lore & UI)
- [ ] **Task 5.1: Dark Graphic UI**
    - Update UI descriptions to be immersive and "dark".
- [ ] **Task 5.2: Lore Integration**
    - Ensure every unlock and fusion has deep narrative text.
