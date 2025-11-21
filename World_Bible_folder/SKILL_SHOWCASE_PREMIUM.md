# PREMIUM SKILL SHOWCASE
## Hand-Crafted Examples of Fully Transformed Skills

These are **complete** transformations showing the full depth of narrative-combat integration.

---

## EXAMPLE 1: COMBAT SKILL → LEGENDARY WEAPON

### ⚔️ Void Strike: Entropy's Edge

```yaml
# IDENTITY
id: "SKILL_SINGULARITY_042"
name: "Void Strike"
display_name: "Void Strike: Entropy's Edge"

# CLASSIFICATION
engine: "Singularity"
skill_type: "Combat"
lore_tag: "Void"
tier: 3
rarity: "Rare"

# COSTS & COOLDOWN
cost:
  bandwidth: 50
  kp: 3
cooldown: "SHORT"  # Available every 2-3 story beats

# ═══════════════════════════════════════════════════════════
# MECHANICAL LAYER (100% Combat Effective)
# ═══════════════════════════════════════════════════════════

combat_effect:
  primary: "Deal 120 void damage, ignoring 50% of target's resistance"
  secondary: "Apply Entropy Mark (target takes +20% damage from all sources for 2 beats)"
  critical: "On crit: Target loses 1 action next turn (action economy disruption)"
  
  targeting: ["single_enemy", "single_ally", "environment", "self"]
  
  scaling:
    base_damage: 120
    bonus_per_tier: 30
    crit_chance: 15%
    crit_multiplier: 2.5x
    
  damage_type: "void"  # Ignores physical/magical armor
  
  combo_potential:
    - "Follow up with Echo Pulse: +40% damage (Void-Echo resonance)"
    - "After enemy uses skill: Counter-Void Strike deals +60% damage"
    - "Chain into Void Cascade if 3+ enemies marked with Entropy"

# ═══════════════════════════════════════════════════════════
# NARRATIVE LAYER (100% Story Integrated)
# ═══════════════════════════════════════════════════════════

narrative_effect:
  description: |
    Your hand becomes a blade of pure entropy. You thrust it forward,
    tearing a wound in reality itself. The void hungers—and your target
    feels its pull. Space distorts, time shudders, and for one horrible
    moment, your target glimpses the abyss beyond all things.
    
    They scream, but the sound is swallowed by nothingness.
    
  first_use_cutscene: |
    [Your hand darkens, reality tears]
    Marcus: "What the fuck was THAT?!"
    Elena: "Void energy signatures off the charts! Where did you learn this?"
    You: "I... I don't know. It just came to me."
    
    [UNLOCK: Void Adept path]
    
  visual_effect: "Black rift tears open, void tendrils lash out, reality bleeds"
  sound_effect: "Silence, then violent tearing, then distant cosmic howling"
  
# ═══════════════════════════════════════════════════════════
# STORY HOOKS (Context-Triggered Narratives)
# ═══════════════════════════════════════════════════════════

  story_hooks:
    # Hook 1: First Kill
    - trigger: "kill_enemy_with_void_strike"
      effect: "Body disintegrates into nothingness (no remains, no resurrection)"
      witness_reaction_allies: |
        Marcus: "They're... gone. Completely. Jesus..."
        Elena: "That's not just death. That's erasure."
      witness_reaction_enemies: |
        Enemy morale: -30%
        "They can UNMAKE us?! Retreat!"
      reputation_gain: "Void Reaper (+5 Fear, -2 Trust)"
      unlock: "Enemies begin targeting you first (threat priority)"
      
    # Hook 2: Overuse Corruption
    - trigger: "use_void_strike_15_times"
      warning: "Your hands are permanently darkened. NPCs notice."
      npc_dialogue:
        Marcus: "Your hands... they don't look right. Are you okay?"
        Healer_NPC: "I can't heal void corruption. This is beyond me."
      corruption: "+5 Void Affinity"
      benefit: "Void Strike damage +20%"
      consequence: "Light-aligned NPCs distrust you"
      story_branch: "Path of Entropy unlocks"
      
    # Hook 3: Void Rift Creation
    - trigger: "use_void_strike_near_active_rift"
      critical_event: "Your strike TEARS THE RIFT WIDER"
      immediate: "Void entities pour through (combat encounter)"
      environmental: "Region becomes Void-Touched (permanent)"
      npc_reaction:
        Void_Scholar: "You fool! You've destabilized the barrier!"
        Void_Entity: "The veil thins... we can cross now."
      choice:
        - option: "Seal the rift (costs 100 Bandwidth, 5 KP, lose Void Strike for rest of chapter)"
          outcome: "Crisis averted, but you're weakened"
        - option: "Embrace the rift (corruption +10)"
          outcome: "Void entities become allies, Light factions turn hostile"
          unlock: "Void Summoning tree"
      
    # Hook 4: Targeting Ally (Dark Choice)
    - trigger: "use_void_strike_on_ally"
      shock_value: "⚠️ YOU ARE TRYING TO UNMAKE YOUR ALLY ⚠️"
      confirmation: |
        This is MURDER. Not just damage—complete erasure.
        
        Are you ABSOLUTELY SURE?
        
        Consequences:
        - Ally dies (permanent, no resurrection)
        - All witnesses turn hostile
        - Wanted for murder
        - Dark path unlocked
        
        [CONFIRM] / [CANCEL]
      
      if_confirmed:
        immediate: "Ally tries to dodge, combat with former ally begins"
        if_successful: "Ally erased from existence"
        aftermath:
          Marcus: "You... you KILLED them! I'm done with you!" [Marcus leaves party permanently]
          Elena: "I should have seen this coming. You're a monster." [Elena becomes enemy]
        reputation: "Wanted criminal (all lawful factions hostile)"
        unlock: "Villain path, Void Tyrant storyline"
        achievement: "The Unmaker (secret dark achievement)"
        
    # Hook 5: Use in Sacred Temple
    - trigger: "use_void_strike_in_holy_location"
      sacrilege: "Void energy DEFILES the sacred space"
      immediate:
        - "Temple guardians attack"
        - "Worshippers flee in terror"
        - "Divine energy weakens (healing -50% in this location permanently)"
      light_faction_response:
        reputation: "Light faction: -50 (Heretic status)"
        bounty: "5000 gold bounty placed on your head"
        hunter_spawn: "Paladin hunters begin tracking you"
      environmental:
        permanent_change: "Temple becomes Corrupted Shrine"
        new_inhabitants: "Void cultists move in"
        story_impact: "Light faction questline locked, Dark faction questline unlocked"
        
    # Hook 6: Discovery by Void Scholar
    - trigger: "witnessed_by_void_researcher"
      recruitment: |
        Scholar: "Incredible! You wield void energy WITHOUT artifacts!"
        Offer: "Join the Abyssal Academy. We'll teach you TRUE void mastery."
      choice:
        - option: "Join Academy"
          unlock: "Advanced void skills, Void faction membership"
          story: "Academic questline, void research projects"
        - option: "Refuse"
          consequence: "Scholar reports you to authorities (void usage is illegal)"
          
    # Hook 7: Enemy Adaptation
    - trigger: "use_void_strike_on_same_enemy_3_times"
      adaptation: "Enemy develops void resistance"
      enemy_dialogue: "I've learned your pattern. Void won't save you now!"
      mechanical: "This enemy takes 50% less damage from Void Strike"
      tactical: "Forces you to adapt strategy or switch targets"
      unlock_condition: "If you evolve Void Strike after this: 'Adaptive Entropy' variant"

# ═══════════════════════════════════════════════════════════
# NPC REACTIONS (Relationship Dynamics)
# ═══════════════════════════════════════════════════════════

  npc_reactions:
    Marcus:
      first_use: |
        "That's... terrifying. Effective, but terrifying."
        [Marcus is unsettled, trust -1]
        
      after_5_uses: |
        "You're relying on void too much. That stuff corrupts."
        [Marcus worried, suggests alternatives]
        
      after_15_uses: |
        "Your eyes... they're darker. This power is changing you."
        [Marcus fears for your soul, relationship strain]
        
      if_kills_with_it: |
        "They're just... gone. No body, no nothing. That's not right."
        [Marcus questions your morality]
        
      if_stops_using: |
        "Good. I was worried you'd lose yourself to that void stuff."
        [Marcus relieved, trust +2]
        
    Elena:
      first_use: |
        "Fascinating. Void manipulation without traditional conduits."
        [Elena intrigued, wants to study you]
        
      after_analysis: |
        "The energy readings are stable... for now. But void is entropy.
         It will try to unmake you too. Be careful."
        [Elena warns of corruption risk]
        
      if_overused: |
        "You're accumulating void taint. I can see it in your aura.
         This will have consequences."
        [Elena concerned, offers cleansing ritual]
        
      if_witnessed_ally_kill: |
        "You used THAT on them?! That's not combat, that's annihilation!"
        [Elena horrified, trust -5]
        
    Void_Merchant:
      if_witnessed: |
        "Ah, a natural void wielder. Rare. VERY rare."
        [Offers void-aligned gear and skills]
        
      unlocks:
        - "Void-forged weapons (ignore ALL resistances)"
        - "Entropy Lens (see into void rifts)"
        - "Black Market access"
        
    Light_Paladin:
      if_witnessed: |
        "VOID MAGIC! By the Light, I cannot allow this!"
        [Attacks on sight]
        
      if_used_repeatedly_in_region: |
        "A void cultist operates in our city. Find them. Purge them."
        [Paladin order begins hunting you]
        
    Corrupted_NPC:
      if_hit_with_void_strike: |
        "Yessss... void calls to void. You are ONE OF US now."
        [Corrupted enemies want to recruit you instead of fighting]
        
      unlocks: "Corruption faction dialogue options"
      
    Civilian_Witness:
      if_kills_in_public: |
        "They... they made that person DISAPPEAR! Dark magic!"
        [Civilians flee, guards called, Heat +3]
        
      reputation_hit: "Town reputation -10 (feared as dark sorcerer)"

# ═══════════════════════════════════════════════════════════
# ENVIRONMENTAL IMPACT
# ═══════════════════════════════════════════════════════════

  environmental_impact:
    - condition: "use_in_void_rift_zone"
      synergy: "+40% damage (void resonance)"
      risk: "May destabilize rift (see Hook 3)"
      
    - condition: "use_in_light-blessed_region"
      conflict: "Damage -30% (light resists void)"
      consequence: "Defiles region, reputation loss"
      
    - condition: "use_repeatedly_same_location"
      permanent_effect: "Void Scar forms"
      description: "Reality is permanently weakened"
      gameplay_impact:
        - "Void entities spawn here naturally"
        - "All healing -20% in this zone"
        - "Void skills +30% power here"
        - "Light skills -30% power here"
        
    - condition: "use_on_living_creature_in_nature"
      ecological: "Void corruption spreads to plants/animals nearby"
      aesthetic: "Vegetation withers, turns black"
      permanent: "Zone becomes 'Dead Zone'"
      
    - condition: "use_underwater"
      unique: "Creates void bubble (water displaced, temporary air pocket)"
      tactical: "Can create breathing space or flood enemy positions"
      
    - condition: "use_on_magical_artifact"
      result: "Artifact is UNMADE (destroyed permanently)"
      use_case: "Destroy cursed items, enemy power sources"
      warning: "Legendary artifacts resist (boss fight with artifact's guardian)"

# ═══════════════════════════════════════════════════════════
# TARGETING CONSEQUENCES
# ═══════════════════════════════════════════════════════════

targeting_matrix:
  enemy:
    success_rate: 85%
    on_success: "120 void damage + Entropy Mark"
    on_failure: "Energy dissipates harmlessly (resources wasted)"
    on_critical: "240 damage + target loses 1 action + Fear status"
    
  ally:
    warning: "⚠️⚠️⚠️ TARGETING ALLY WITH ENTROPY WEAPON ⚠️⚠️⚠️"
    requires_triple_confirmation: true
    
    ethical_use_cases:
      - reason: "Mercy kill corrupted ally (they're beyond saving)"
        outcome: "Ally dies instantly, no suffering"
        reaction: "Other allies are horrified but understand necessity"
        
      - reason: "Ally REQUESTS this (terminal illness, corruption, possession)"
        outcome: "Emotional farewell cutscene, ally passes peacefully"
        unlock: "Memorial questline, ally's legacy revealed"
        
      - reason: "Training/demonstration (consenting ally, controlled environment)"
        outcome: "Ally takes 1 damage, experiences void (educational)"
        unlock: "Ally learns void resistance skill"
        
    if_used_maliciously:
      immediate: "Combat with entire party begins"
      permanent: "Betrayal status (cannot recruit allies again this playthrough)"
      ending: "Locks you into 'Lone Tyrant' ending"
      
  neutral_npc:
    warning: "⚠️ This is MURDER. Permanent consequences."
    requires_confirmation: true
    
    consequences:
      legal: "Wanted for murder (bounty: 10,000 gold)"
      social: "Reputation: -30 all factions"
      moral: "Alignment shift: Chaotic Evil"
      story: "Villain path unlocks, hero path locks"
      
    witness_outcomes:
      no_witnesses: "You get away with it (for now)"
      civilian_witnesses: "Guards notified, manhunt begins"
      law_witnesses: "Arrested on spot (trial or combat)"
      faction_witnesses: "Faction declares you enemy"
      
  environment:
    valid_targets:
      - target: "Void rift"
        effect: "Strike the rift to seal it (costs 80 Bandwidth)"
        outcome: "Rift closes, void entities banished"
        
      - target: "Magical barrier"
        effect: "Unmake the barrier (bypasses all defenses)"
        tactical: "Perfect infiltration tool"
        
      - target: "Structural support"
        effect: "Building collapse (40% chance)"
        risk: "Civilian casualties, heat +5"
        
      - target: "Cursed object"
        effect: "Object erased from existence"
        quest_use: "Destroy phylacteries, cursed items, dark artifacts"
        
      - target: "Dimensional anchor"
        effect: "Tear dimensional fabric"
        outcome: "Create temporary portal or trap"
        
  self:
    effect: "Void Strike turned inward (DANGEROUS)"
    
    use_cases:
      - purpose: "Purge corruption from self"
        mechanic: "Take 50 damage, remove all corruption"
        risk: "50% chance of side effects (memory loss, void taint)"
        
      - purpose: "Emergency power boost"
        mechanic: "Sacrifice 30% max HP permanently"
        benefit: "Next 3 void skills deal triple damage"
        
      - purpose: "Ritual requirement"
        context: "Some void rituals require self-harm"
        story: "Proves dedication to void path"
        
      - purpose: "Suicide (dark ending)"
        confirmation: "⚠️ THIS ENDS YOUR PLAYTHROUGH ⚠️"
        outcome: "You erase yourself from existence"
        unlock: "Secret 'Oblivion' ending"

# ═══════════════════════════════════════════════════════════
# FUSION POTENTIAL
# ═══════════════════════════════════════════════════════════

fusion_combinations:
  # Fusion 1: Void + Light = Paradox
  - partner: "Light Ascend"
    result: "Nullification Strike"
    rarity: "Epic"
    effect: |
      Deal 180 damage that is BOTH void and light simultaneously.
      Ignores ALL resistances. Purifies AND unmakes at once.
    narrative: |
      Impossible energy—light wrapped in darkness. Your strike
      both creates and destroys, a paradox made manifest.
    unlock_condition: "Use Void Strike and Light Ascend in same turn 5 times"
    story_impact: "Philosophical questline: Can creation and destruction coexist?"
    
  # Fusion 2: Void + Echo = Temporal Void
  - partner: "Echo Pulse"
    result: "Entropic Echo"
    rarity: "Rare"
    effect: |
      Deal 140 void damage. Target experiences their own death from
      multiple timelines simultaneously (stun + trauma).
    narrative: |
      You show them the void across infinite timelines. They see
      themselves unmade again, and again, and again...
    psychological: "Target may surrender or flee instead of fighting"
    unlock_condition: "Kill 10 enemies with Void Strike after using Echo Pulse"
    
  # Fusion 3: Void + Bloom = Death-Life Cycle
  - partner: "Bloom Heal"
    result: "Cycle of Entropy"
    rarity: "Legendary"
    effect: |
      Unmake target, use their essence to heal all allies for 80 HP.
      Life from death, the eternal cycle.
    narrative: |
      You weaponize the natural cycle. What dies nourishes the living.
      Your enemy's essence becomes healing energy for your allies.
    moral_complexity: "Ethical questions about using lives as resources"
    unlock_condition: "Kill enemy with Void Strike while ally is below 20% HP, 3 times"
    npc_reaction:
      Marcus: "That's... disturbing. Using corpses as batteries?"
      Elena: "Energetically brilliant. Morally questionable."
    
  # Fusion 4: Void + Shadow = Absolute Darkness
  - partner: "Shadow Bind"
    result: "Oblivion Chains"
    rarity: "Epic"
    effect: |
      Immobilize target in void prison. They cannot act, cannot be
      affected, exist in frozen entropy until released or dispelled.
    narrative: |
      You imprison them in nothingness. Time stops. Space stops.
      They exist in the void between moments, aware but helpless.
    torture_implications: "Psychological horror, void imprisonment is banned by 17 conventions"
    unlock_condition: "Immobilize then strike with void 10 times"

# ═══════════════════════════════════════════════════════════
# EVOLUTION PATHS
# ═══════════════════════════════════════════════════════════

evolution:
  # Path A: Raw Power
  path_A:
    name: "Entropic Devastation"
    requirement: "Deal 10,000 total void damage"
    upgrade:
      damage: "180 (up from 120)"
      effect: "Now ignores 100% resistance (nothing can block it)"
      bonus: "Entropy Mark duration +1 beat"
    drawback: "Corruption +1 per use (accelerates void taint)"
    
  # Path B: Precision
  path_B:
    name: "Surgical Entropy"
    requirement: "Land 50 critical hits with Void Strike"
    upgrade:
      crit_chance: "30% (up from 15%)"
      targeting: "Can target specific body parts or spell components"
      precision: "Unmake ONLY what you target (destroy weapon, armor piece, specific organ)"
    utility: "Disable enemies without killing, destroy specific threats"
    
  # Path C: Void Mastery
  path_C:
    name: "Void Sovereignty"
    requirement: "Use Void Strike 100 times + Void Affinity 50+"
    upgrade:
      cost: "Bandwidth 30 (down from 50), KP 2 (down from 3)"
      cooldown: "INSTANT (no cooldown)"
      control: "Can recall void energy (refund 50% cost if target dodges)"
      ultimate: "Void Strike becomes your signature—+50% damage permanently"
    transcendence: "You've mastered entropy itself"
    story_recognition:
      title_earned: "Void Sovereign"
      npc_reactions: "Even void entities respect (or fear) you"
      ending_impact: "Unlocks 'Entropy Ascendant' ending"
      
  # Path D: Redemption (Hidden)
  path_D:
    name: "Controlled Entropy"
    requirement: "Use Void Strike 50 times WITHOUT killing anyone"
    unlock_method: "Non-lethal void usage (disable, disarm, destroy objects only)"
    upgrade:
      option: "Convert Void Strike to non-lethal"
      effect: "Targets reduced to 1 HP instead of killed"
      bonus: "Can unmake corruption without harming host"
      redemption: "Void as tool, not weapon"
    story_impact:
      unlock: "'Redeemed Void Wielder' path"
      ending: "'Harmony Through Entropy' ending available"
      npc_reactions:
        Marcus: "You're using that void stuff responsibly. I'm impressed."
        Light_Paladin: "Perhaps... void can be wielded righteously."

# ═══════════════════════════════════════════════════════════
# UNLOCK CONDITIONS
# ═══════════════════════════════════════════════════════════

unlock:
  # Method 1: Story Quest
  method_story:
    quest: "Into the Abyss"
    description: "Descend into void rift, survive, return changed"
    reward: "Void Strike learned, Void Affinity +10"
    
  # Method 2: Faction
  method_faction:
    faction: "Abyssal Academy"
    requirement: "Reputation 3+, complete 'Void Theory' exam"
    cost: "5000 gold tuition"
    
  # Method 3: Discovery
  method_discovery:
    location: "Forgotten Void Sanctum"
    action: "Read ancient void texts (Intelligence 15+ or take psychic damage)"
    risk: "Corruption +5, possible madness"
    
  # Method 4: Dark Bargain
  method_dark:
    entity: "Void Entity 'The Unmaker'"
    cost: "Sacrifice memory of loved one"
    consequence: "Learn Void Strike, but forget someone important"
    story_impact: "NPC you forgot no longer recognizes you"

# ═══════════════════════════════════════════════════════════
# BALANCE & RESTRICTIONS
# ═══════════════════════════════════════════════════════════

restrictions:
  anti_spam:
    threshold: 5  # Uses in one encounter
    consequence: "Void energy becomes unstable, 20% chance to backfire"
    backfire: "You take the damage instead"
    
  enemy_adaptation:
    trigger: "Boss sees Void Strike 3+ times"
    response: "Boss develops void resistance (50% reduction)"
    counter_move: "Boss may reflect void back at you"
    
  corruption_accumulation:
    formula: "Corruption += 0.5 per Void Strike use"
    threshold_1: "Corruption 10: Void Taint (cosmetic changes)"
    threshold_2: "Corruption 25: Void Affinity (bonus damage, social penalties)"
    threshold_3: "Corruption 50: Void Touched (major story branch)"
    threshold_4: "Corruption 100: Become Void Entity (ending trigger)"
    
  legal_restrictions:
    - region: "Lawful cities"
      status: "Illegal void magic (guards attack on sight)"
      
    - region: "Light temples"
      status: "Sacrilege (permanent bounty)"
      
    - region: "Void Wastes"
      status: "Legal and encouraged"
      
  cooldown_realism:
    SHORT: "2-3 story beats (1-2 combat rounds)"
    explanation: "Void energy needs time to reconstitute"
    override: "Can use immediately if you pay double cost + corruption +1"

# ═══════════════════════════════════════════════════════════
# META INFORMATION
# ═══════════════════════════════════════════════════════════

meta:
  tags: ["void", "damage", "entropy", "corruption", "dark_magic"]
  synergy_with:
    - "Echo skills (temporal void combos)"
    - "Shadow skills (darkness amplification)"
    - "Corruption skills (void feeds corruption)"
  countered_by:
    - "Light skills (void resistance)"
    - "Order skills (entropy nullification)"
    - "Stability fields (prevent void manifestation)"
    
  achievement_potential:
    - "The Unmaker: Kill 100 enemies with Void Strike"
    - "Void Scholar: Evolve Void Strike to all 4 paths"
    - "Controlled Chaos: Use Void Strike 50 times without killing"
    - "Oblivion: Erase yourself from existence (dark ending)"
    
  design_notes:
    philosophy: |
      Void Strike is POWER with COST. Every use corrupts.
      Every kill erases. It's the ultimate weapon... and ultimate curse.
      Player must decide: embrace entropy or resist corruption?
      
    narrative_role: "Temptation. Power at price. The easy path to darkness."
    
    balance_goal: "High damage, but corrupts user. Risk-reward."
    
    story_integration: "Every use advances corruption meter toward void transformation."
```

---

## COMPARISON: BEFORE VS AFTER

### ❌ BEFORE (Generic RPG Skill)
```
Void Strike
Cost: 50 Bandwidth, 3 KP
Effect: Deal 120 void damage
Cooldown: 2 turns
```

### ✅ AFTER (Narrative-Combat Hybrid)
```
Void Strike: Entropy's Edge
- 100% Combat Effective: 120 damage, ignores resist, applies Entropy Mark
- 100% Story Integrated: Witness reactions, corruption system, faction impacts
- Targeting Depth: Can target ally/enemy/environment/self with unique outcomes
- NPC Relationships: Marcus fears it, Elena analyzes it, factions react
- World Impact: Creates void scars, corrupts regions, attracts void entities
- Consequence Layers: Legal (wanted), Social (feared), Moral (corrupted)
- Evolution: 4 unique paths based on how you use it
- Fusion: Combines with 10+ skills for legendary combinations
- Discovery Moments: Multiple unlock methods with story impact
- Anti-Exploit: Enemies adapt, overuse backfires, corruption accumulates
```

**Result:** One skill becomes a complete gameplay system with narrative depth.

---

This is the transformation applied to ALL 1037 skills. Every skill becomes a **premium experience**.
